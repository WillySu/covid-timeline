function init () {
  const svg = d3.select("svg");
  const path = d3.geoPath();

  loadUsaMap(svg, path);
}

// https://data.cdc.gov/api/id/n8mc-b4w4.json?$select=`case_month`,`res_state`,`state_fips_code`,`res_county`,`county_fips_code`,`age_group`,`sex`,`race`,`ethnicity`,`case_positive_specimen`,`case_onset_interval`,`process`,`exposure_yn`,`current_status`,`symptom_status`,`hosp_yn`,`icu_yn`,`death_yn`,`underlying_conditions_yn`&$order=`:id`+ASC&$limit=13&$offset=0
function getCovidDataUrl (
  selectList = [
    "age_group",
    "case_month",
    "res_county",
    "res_state",
    "sex",
  ],
  limit = 99999
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
function getTopoJson(casesByCountyHash, type = "counties") {
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

function loadUsaMap (svg, path) {
  // d3.json("https://data.cdc.gov/api/id/n8mc-b4w4.json?$limit=99999", (dataError, data) => {
  d3.json(getCovidDataUrl(), (error, patientCases) => {
    if (error) throw error;

    const casesByCountyHash = getCasesByCountyHash(patientCases);
    const maxCounter = Math.max.apply(null, Object.values(casesByCountyHash));
    const getFillColor = d3.scaleQuantize()
      .domain([0, maxCounter])
      .range(["#fee5d9", "#fcae91", "#fb6a4a", "#de2d26", "#a50f15"]);

    loadCounties(svg, path, getTopoJson(casesByCountyHash), getFillColor);
    loadStateBorders(svg, path);
  });
}

function displayCountyName (data) {
  const { id, properties } = data;
  const { county_name: name, cases } = properties;
  if (name) {
    return name + " (" + id + ") - " + cases + " case" + (cases === 1 ? "" : "s");
  }

  return id;
}

function loadCounties (svg, path, topoJson, getFillColor) {
  svg.append("g")
    .attr("class", "counties")
    .selectAll("path")
    .data(topoJson)
    .enter()
      .append("path")
      .attr("d", path)
      .style("fill", (d) => getFillColor(d.properties.cases))
        .append("title")
        .text(displayCountyName);
}

function loadStateBorders (svg, path) {
  svg.append("path")
    .attr("class", "state-borders")
    .attr("d", path(topojson.mesh(USA_TOPOLOGY, USA_TOPOLOGY.objects.states, (a, b) => { return a !== b; })));
}

window.addEventListener("DOMContentLoaded", init);
