// https://data.cdc.gov/api/id/n8mc-b4w4.json?$select=`case_month`,`res_state`,`state_fips_code`,`res_county`,`county_fips_code`,`age_group`,`sex`,`race`,`ethnicity`,`case_positive_specimen`,`case_onset_interval`,`process`,`exposure_yn`,`current_status`,`symptom_status`,`hosp_yn`,`icu_yn`,`death_yn`,`underlying_conditions_yn`&$order=`:id`+ASC&$limit=13&$offset=0
function getCovidDataUrl (
  selectList = [
    "age_group",
    "case_month",
    "res_county",
    "res_state",
    "sex",
  ],
  limit = 9999
) {
  let url = "https://data.cdc.gov/api/id/n8mc-b4w4.json?"
  let queryList = []
  if (selectList && selectList.length) {
    queryList.push("$select=`" + selectList.join("`,`") + "`")
  }
  if (limit) {
    queryList.push("$limit=" + limit)
  }
  url += queryList.join("&")

  return url;
}

function getCasesByCountyHash (patientCases) {
  return patientCases.reduce((hash, c) => {
    const { res_county: name } = c;
    if (hash[name]) {
      hash[name] = hash[name] + 1;
    } else {
      hash[name] = 1;
    }

    return hash;
  }, {})
}

// type = "counties" | "states" | "nation"
function getUsTopoJson (casesByCountyHash, type = 'counties') {
  const features = topojson.feature(USA_TOPOLOGY, USA_TOPOLOGY.objects[type]).features;
  const featuresWithProperties = features.map((f) => {
    const county = COUNTY_HASH[f.id];
    if (county) {
      const { county_name: name } = county;
      const shortName = name.replace(/( Borough$)|( Census Area$)|( City and Borough$)|( County$)|( Parish$)/, '')
      const cases = casesByCountyHash[shortName.toUpperCase()] || 0;
      f.properties = county;
      f.properties.cases = cases;
    }
    return f;
  })

  return featuresWithProperties;
}

function getDateTimeRangeFromTopoJson (cases) {
  const months = cases.map(c => c.case_month);
  const [startDate, endDate] = d3.extent(months).map(m => new Date(m));

  return {
    startDate,
    endDate
  };
}

function loadCovid (callback) {
  d3.json(getCovidDataUrl(), (error, patientCases) => {
    if (error) throw error;

    callback(patientCases);
  });
}

function init () {
  const svg = d3.select("svg");
  const usMap = new UsMap({ svg, topology: USA_TOPOLOGY });
  const loadMap = (cases) => {
    const casesByCountyHash = getCasesByCountyHash(cases);
    const maxCase = Math.max.apply(null, Object.values(casesByCountyHash));
    const topoJson = getUsTopoJson(casesByCountyHash);
    usMap.load({ topoJson, maxCase });
  }

  loadCovid((cases) => {
    loadMap(cases);

    const { startDate, endDate } = getDateTimeRangeFromTopoJson(cases);
    const callback = (dateExtent) => {
      const [startDate, endDate] = dateExtent;
      const casesFiltered = cases.filter((c) => {
        const { case_month } = c;
        const currentMonth = new Date(case_month);
        return (!startDate || startDate <= currentMonth)
          && (!endDate || endDate >= currentMonth);
      })
      const casesByCountyHash = getCasesByCountyHash(casesFiltered);
      const topoJson = getUsTopoJson(casesByCountyHash);
      usMap.reload({ topoJson });
    }
    const timeline = new Timeline({ svg, callback });
    timeline.load({ startDate, endDate });
  });
}

window.addEventListener("DOMContentLoaded", init);
