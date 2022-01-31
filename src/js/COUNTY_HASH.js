/*
const COUNTY_HASH = COUNTY_LIST.reduce((hash, c) => {
  const { fips, id, ...restHash } = c;
  hash[fips] = restHash;
  return hash;
}, {});
console.log(JSON.stringify(COUNTY_HASH, null, 2));
*/

var COUNTY_HASH = {
  "10001": {
    "county_name": "Kent County",
    "state_code": "DE",
    "state_fips": "10",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "10003": {
    "county_name": "New Castle County",
    "state_code": "DE",
    "state_fips": "10",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "10005": {
    "county_name": "Sussex County",
    "state_code": "DE",
    "state_fips": "10",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "11001": {
    "county_name": "District of Columbia",
    "state_code": "DC",
    "state_fips": "11",
    "county_fips": "001",
    "class_fips": "H6"
  },
  "12001": {
    "county_name": "Alachua County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "12003": {
    "county_name": "Baker County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "12005": {
    "county_name": "Bay County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "12007": {
    "county_name": "Bradford County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "12009": {
    "county_name": "Brevard County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "12011": {
    "county_name": "Broward County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "12013": {
    "county_name": "Calhoun County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "12015": {
    "county_name": "Charlotte County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "12017": {
    "county_name": "Citrus County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "12019": {
    "county_name": "Clay County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "12021": {
    "county_name": "Collier County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "12023": {
    "county_name": "Columbia County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "12027": {
    "county_name": "DeSoto County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "12029": {
    "county_name": "Dixie County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "12031": {
    "county_name": "Duval County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "031",
    "class_fips": "H6"
  },
  "12033": {
    "county_name": "Escambia County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "12035": {
    "county_name": "Flagler County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "12037": {
    "county_name": "Franklin County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "12039": {
    "county_name": "Gadsden County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "12041": {
    "county_name": "Gilchrist County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "12043": {
    "county_name": "Glades County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "12045": {
    "county_name": "Gulf County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "12047": {
    "county_name": "Hamilton County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "12049": {
    "county_name": "Hardee County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "12051": {
    "county_name": "Hendry County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "12053": {
    "county_name": "Hernando County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "12055": {
    "county_name": "Highlands County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "12057": {
    "county_name": "Hillsborough County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "12059": {
    "county_name": "Holmes County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "12061": {
    "county_name": "Indian River County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "12063": {
    "county_name": "Jackson County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "12065": {
    "county_name": "Jefferson County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "12067": {
    "county_name": "Lafayette County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "12069": {
    "county_name": "Lake County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "12071": {
    "county_name": "Lee County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "12073": {
    "county_name": "Leon County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "12075": {
    "county_name": "Levy County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "12077": {
    "county_name": "Liberty County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "12079": {
    "county_name": "Madison County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "12081": {
    "county_name": "Manatee County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "081",
    "class_fips": "H1"
  },
  "12083": {
    "county_name": "Marion County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "12085": {
    "county_name": "Martin County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "085",
    "class_fips": "H1"
  },
  "12086": {
    "county_name": "Miami-Dade County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "086",
    "class_fips": "H1"
  },
  "12087": {
    "county_name": "Monroe County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "12089": {
    "county_name": "Nassau County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "089",
    "class_fips": "H1"
  },
  "12091": {
    "county_name": "Okaloosa County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "091",
    "class_fips": "H1"
  },
  "12093": {
    "county_name": "Okeechobee County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "093",
    "class_fips": "H1"
  },
  "12095": {
    "county_name": "Orange County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "095",
    "class_fips": "H1"
  },
  "12097": {
    "county_name": "Osceola County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "097",
    "class_fips": "H1"
  },
  "12099": {
    "county_name": "Palm Beach County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "099",
    "class_fips": "H1"
  },
  "12101": {
    "county_name": "Pasco County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "101",
    "class_fips": "H1"
  },
  "12103": {
    "county_name": "Pinellas County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "103",
    "class_fips": "H1"
  },
  "12105": {
    "county_name": "Polk County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "105",
    "class_fips": "H1"
  },
  "12107": {
    "county_name": "Putnam County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "107",
    "class_fips": "H1"
  },
  "12109": {
    "county_name": "St. Johns County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "109",
    "class_fips": "H1"
  },
  "12111": {
    "county_name": "St. Lucie County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "111",
    "class_fips": "H1"
  },
  "12113": {
    "county_name": "Santa Rosa County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "113",
    "class_fips": "H1"
  },
  "12115": {
    "county_name": "Sarasota County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "115",
    "class_fips": "H1"
  },
  "12117": {
    "county_name": "Seminole County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "117",
    "class_fips": "H1"
  },
  "12119": {
    "county_name": "Sumter County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "119",
    "class_fips": "H1"
  },
  "12121": {
    "county_name": "Suwannee County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "121",
    "class_fips": "H1"
  },
  "12123": {
    "county_name": "Taylor County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "123",
    "class_fips": "H1"
  },
  "12125": {
    "county_name": "Union County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "125",
    "class_fips": "H1"
  },
  "12127": {
    "county_name": "Volusia County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "127",
    "class_fips": "H1"
  },
  "12129": {
    "county_name": "Wakulla County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "129",
    "class_fips": "H1"
  },
  "12131": {
    "county_name": "Walton County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "131",
    "class_fips": "H1"
  },
  "12133": {
    "county_name": "Washington County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "133",
    "class_fips": "H1"
  },
  "13001": {
    "county_name": "Appling County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "13003": {
    "county_name": "Atkinson County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "13005": {
    "county_name": "Bacon County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "13007": {
    "county_name": "Baker County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "13009": {
    "county_name": "Baldwin County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "13011": {
    "county_name": "Banks County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "13013": {
    "county_name": "Barrow County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "13015": {
    "county_name": "Bartow County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "13017": {
    "county_name": "Ben Hill County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "13019": {
    "county_name": "Berrien County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "13021": {
    "county_name": "Bibb County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "13023": {
    "county_name": "Bleckley County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "13025": {
    "county_name": "Brantley County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "13027": {
    "county_name": "Brooks County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "13029": {
    "county_name": "Bryan County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "13031": {
    "county_name": "Bulloch County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "13033": {
    "county_name": "Burke County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "13035": {
    "county_name": "Butts County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "13037": {
    "county_name": "Calhoun County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "13039": {
    "county_name": "Camden County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "13043": {
    "county_name": "Candler County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "13045": {
    "county_name": "Carroll County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "13047": {
    "county_name": "Catoosa County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "13049": {
    "county_name": "Charlton County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "13051": {
    "county_name": "Chatham County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "13053": {
    "county_name": "Chattahoochee County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "13055": {
    "county_name": "Chattooga County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "13057": {
    "county_name": "Cherokee County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "13059": {
    "county_name": "Clarke County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "059",
    "class_fips": "H6"
  },
  "13061": {
    "county_name": "Clay County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "13063": {
    "county_name": "Clayton County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "13065": {
    "county_name": "Clinch County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "13067": {
    "county_name": "Cobb County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "13069": {
    "county_name": "Coffee County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "13071": {
    "county_name": "Colquitt County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "13073": {
    "county_name": "Columbia County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "13075": {
    "county_name": "Cook County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "13077": {
    "county_name": "Coweta County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "13079": {
    "county_name": "Crawford County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "13081": {
    "county_name": "Crisp County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "081",
    "class_fips": "H1"
  },
  "13083": {
    "county_name": "Dade County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "13085": {
    "county_name": "Dawson County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "085",
    "class_fips": "H1"
  },
  "13087": {
    "county_name": "Decatur County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "13089": {
    "county_name": "DeKalb County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "089",
    "class_fips": "H1"
  },
  "13091": {
    "county_name": "Dodge County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "091",
    "class_fips": "H1"
  },
  "13093": {
    "county_name": "Dooly County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "093",
    "class_fips": "H1"
  },
  "13095": {
    "county_name": "Dougherty County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "095",
    "class_fips": "H1"
  },
  "13097": {
    "county_name": "Douglas County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "097",
    "class_fips": "H1"
  },
  "13099": {
    "county_name": "Early County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "099",
    "class_fips": "H1"
  },
  "13101": {
    "county_name": "Echols County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "101",
    "class_fips": "H1"
  },
  "13103": {
    "county_name": "Effingham County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "103",
    "class_fips": "H1"
  },
  "13105": {
    "county_name": "Elbert County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "105",
    "class_fips": "H1"
  },
  "13107": {
    "county_name": "Emanuel County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "107",
    "class_fips": "H1"
  },
  "13109": {
    "county_name": "Evans County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "109",
    "class_fips": "H1"
  },
  "13111": {
    "county_name": "Fannin County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "111",
    "class_fips": "H1"
  },
  "13113": {
    "county_name": "Fayette County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "113",
    "class_fips": "H1"
  },
  "13115": {
    "county_name": "Floyd County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "115",
    "class_fips": "H1"
  },
  "13117": {
    "county_name": "Forsyth County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "117",
    "class_fips": "H1"
  },
  "13119": {
    "county_name": "Franklin County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "119",
    "class_fips": "H1"
  },
  "13121": {
    "county_name": "Fulton County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "121",
    "class_fips": "H1"
  },
  "13123": {
    "county_name": "Gilmer County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "123",
    "class_fips": "H1"
  },
  "13125": {
    "county_name": "Glascock County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "125",
    "class_fips": "H1"
  },
  "13127": {
    "county_name": "Glynn County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "127",
    "class_fips": "H1"
  },
  "13129": {
    "county_name": "Gordon County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "129",
    "class_fips": "H1"
  },
  "13131": {
    "county_name": "Grady County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "131",
    "class_fips": "H1"
  },
  "13133": {
    "county_name": "Greene County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "133",
    "class_fips": "H1"
  },
  "13135": {
    "county_name": "Gwinnett County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "135",
    "class_fips": "H1"
  },
  "13137": {
    "county_name": "Habersham County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "137",
    "class_fips": "H1"
  },
  "13139": {
    "county_name": "Hall County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "139",
    "class_fips": "H1"
  },
  "13141": {
    "county_name": "Hancock County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "141",
    "class_fips": "H1"
  },
  "13143": {
    "county_name": "Haralson County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "143",
    "class_fips": "H1"
  },
  "13145": {
    "county_name": "Harris County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "145",
    "class_fips": "H1"
  },
  "13147": {
    "county_name": "Hart County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "147",
    "class_fips": "H1"
  },
  "13149": {
    "county_name": "Heard County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "149",
    "class_fips": "H1"
  },
  "13151": {
    "county_name": "Henry County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "151",
    "class_fips": "H1"
  },
  "13153": {
    "county_name": "Houston County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "153",
    "class_fips": "H1"
  },
  "13155": {
    "county_name": "Irwin County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "155",
    "class_fips": "H1"
  },
  "13157": {
    "county_name": "Jackson County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "157",
    "class_fips": "H1"
  },
  "13159": {
    "county_name": "Jasper County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "159",
    "class_fips": "H1"
  },
  "13161": {
    "county_name": "Jeff Davis County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "161",
    "class_fips": "H1"
  },
  "13163": {
    "county_name": "Jefferson County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "163",
    "class_fips": "H1"
  },
  "13165": {
    "county_name": "Jenkins County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "165",
    "class_fips": "H1"
  },
  "13167": {
    "county_name": "Johnson County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "167",
    "class_fips": "H1"
  },
  "13169": {
    "county_name": "Jones County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "169",
    "class_fips": "H1"
  },
  "13171": {
    "county_name": "Lamar County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "171",
    "class_fips": "H1"
  },
  "13173": {
    "county_name": "Lanier County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "173",
    "class_fips": "H1"
  },
  "13175": {
    "county_name": "Laurens County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "175",
    "class_fips": "H1"
  },
  "13177": {
    "county_name": "Lee County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "177",
    "class_fips": "H1"
  },
  "13179": {
    "county_name": "Liberty County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "179",
    "class_fips": "H1"
  },
  "13181": {
    "county_name": "Lincoln County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "181",
    "class_fips": "H1"
  },
  "13183": {
    "county_name": "Long County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "183",
    "class_fips": "H1"
  },
  "13185": {
    "county_name": "Lowndes County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "185",
    "class_fips": "H1"
  },
  "13187": {
    "county_name": "Lumpkin County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "187",
    "class_fips": "H1"
  },
  "13189": {
    "county_name": "McDuffie County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "189",
    "class_fips": "H1"
  },
  "13191": {
    "county_name": "McIntosh County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "191",
    "class_fips": "H1"
  },
  "13193": {
    "county_name": "Macon County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "193",
    "class_fips": "H1"
  },
  "13195": {
    "county_name": "Madison County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "195",
    "class_fips": "H1"
  },
  "13197": {
    "county_name": "Marion County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "197",
    "class_fips": "H1"
  },
  "13199": {
    "county_name": "Meriwether County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "199",
    "class_fips": "H1"
  },
  "13201": {
    "county_name": "Miller County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "201",
    "class_fips": "H1"
  },
  "13205": {
    "county_name": "Mitchell County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "205",
    "class_fips": "H1"
  },
  "13207": {
    "county_name": "Monroe County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "207",
    "class_fips": "H1"
  },
  "13209": {
    "county_name": "Montgomery County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "209",
    "class_fips": "H1"
  },
  "13211": {
    "county_name": "Morgan County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "211",
    "class_fips": "H1"
  },
  "13213": {
    "county_name": "Murray County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "213",
    "class_fips": "H1"
  },
  "13215": {
    "county_name": "Muscogee County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "215",
    "class_fips": "H6"
  },
  "13217": {
    "county_name": "Newton County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "217",
    "class_fips": "H1"
  },
  "13219": {
    "county_name": "Oconee County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "219",
    "class_fips": "H1"
  },
  "13221": {
    "county_name": "Oglethorpe County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "221",
    "class_fips": "H1"
  },
  "13223": {
    "county_name": "Paulding County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "223",
    "class_fips": "H1"
  },
  "13225": {
    "county_name": "Peach County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "225",
    "class_fips": "H1"
  },
  "13227": {
    "county_name": "Pickens County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "227",
    "class_fips": "H1"
  },
  "13229": {
    "county_name": "Pierce County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "229",
    "class_fips": "H1"
  },
  "13231": {
    "county_name": "Pike County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "231",
    "class_fips": "H1"
  },
  "13233": {
    "county_name": "Polk County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "233",
    "class_fips": "H1"
  },
  "13235": {
    "county_name": "Pulaski County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "235",
    "class_fips": "H1"
  },
  "13237": {
    "county_name": "Putnam County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "237",
    "class_fips": "H1"
  },
  "13239": {
    "county_name": "Quitman County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "239",
    "class_fips": "H1"
  },
  "13241": {
    "county_name": "Rabun County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "241",
    "class_fips": "H1"
  },
  "13243": {
    "county_name": "Randolph County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "243",
    "class_fips": "H1"
  },
  "13245": {
    "county_name": "Richmond County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "245",
    "class_fips": "H6"
  },
  "13247": {
    "county_name": "Rockdale County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "247",
    "class_fips": "H1"
  },
  "13249": {
    "county_name": "Schley County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "249",
    "class_fips": "H1"
  },
  "13251": {
    "county_name": "Screven County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "251",
    "class_fips": "H1"
  },
  "13253": {
    "county_name": "Seminole County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "253",
    "class_fips": "H1"
  },
  "13255": {
    "county_name": "Spalding County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "255",
    "class_fips": "H1"
  },
  "13257": {
    "county_name": "Stephens County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "257",
    "class_fips": "H1"
  },
  "13259": {
    "county_name": "Stewart County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "259",
    "class_fips": "H1"
  },
  "13261": {
    "county_name": "Sumter County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "261",
    "class_fips": "H1"
  },
  "13263": {
    "county_name": "Talbot County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "263",
    "class_fips": "H1"
  },
  "13265": {
    "county_name": "Taliaferro County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "265",
    "class_fips": "H1"
  },
  "13267": {
    "county_name": "Tattnall County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "267",
    "class_fips": "H1"
  },
  "13269": {
    "county_name": "Taylor County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "269",
    "class_fips": "H1"
  },
  "13271": {
    "county_name": "Telfair County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "271",
    "class_fips": "H1"
  },
  "13273": {
    "county_name": "Terrell County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "273",
    "class_fips": "H1"
  },
  "13275": {
    "county_name": "Thomas County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "275",
    "class_fips": "H1"
  },
  "13277": {
    "county_name": "Tift County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "277",
    "class_fips": "H1"
  },
  "13279": {
    "county_name": "Toombs County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "279",
    "class_fips": "H1"
  },
  "13281": {
    "county_name": "Towns County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "281",
    "class_fips": "H1"
  },
  "13283": {
    "county_name": "Treutlen County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "283",
    "class_fips": "H1"
  },
  "13285": {
    "county_name": "Troup County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "285",
    "class_fips": "H1"
  },
  "13287": {
    "county_name": "Turner County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "287",
    "class_fips": "H1"
  },
  "13289": {
    "county_name": "Twiggs County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "289",
    "class_fips": "H1"
  },
  "13291": {
    "county_name": "Union County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "291",
    "class_fips": "H1"
  },
  "13293": {
    "county_name": "Upson County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "293",
    "class_fips": "H1"
  },
  "13295": {
    "county_name": "Walker County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "295",
    "class_fips": "H1"
  },
  "13297": {
    "county_name": "Walton County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "297",
    "class_fips": "H1"
  },
  "13299": {
    "county_name": "Ware County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "299",
    "class_fips": "H1"
  },
  "13301": {
    "county_name": "Warren County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "301",
    "class_fips": "H1"
  },
  "13303": {
    "county_name": "Washington County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "303",
    "class_fips": "H1"
  },
  "13305": {
    "county_name": "Wayne County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "305",
    "class_fips": "H1"
  },
  "13307": {
    "county_name": "Webster County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "307",
    "class_fips": "H1"
  },
  "13309": {
    "county_name": "Wheeler County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "309",
    "class_fips": "H1"
  },
  "13311": {
    "county_name": "White County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "311",
    "class_fips": "H1"
  },
  "13313": {
    "county_name": "Whitfield County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "313",
    "class_fips": "H1"
  },
  "13315": {
    "county_name": "Wilcox County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "315",
    "class_fips": "H1"
  },
  "13317": {
    "county_name": "Wilkes County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "317",
    "class_fips": "H1"
  },
  "13319": {
    "county_name": "Wilkinson County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "319",
    "class_fips": "H1"
  },
  "13321": {
    "county_name": "Worth County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "321",
    "class_fips": "H1"
  },
  "15001": {
    "county_name": "Hawaii County",
    "state_code": "HI",
    "state_fips": "15",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "15003": {
    "county_name": "Honolulu County",
    "state_code": "HI",
    "state_fips": "15",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "15005": {
    "county_name": "Kalawao County",
    "state_code": "HI",
    "state_fips": "15",
    "county_fips": "005",
    "class_fips": "H4"
  },
  "15007": {
    "county_name": "Kauai County",
    "state_code": "HI",
    "state_fips": "15",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "15009": {
    "county_name": "Maui County",
    "state_code": "HI",
    "state_fips": "15",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "16001": {
    "county_name": "Ada County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "16003": {
    "county_name": "Adams County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "16005": {
    "county_name": "Bannock County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "16007": {
    "county_name": "Bear Lake County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "16009": {
    "county_name": "Benewah County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "16011": {
    "county_name": "Bingham County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "16013": {
    "county_name": "Blaine County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "16015": {
    "county_name": "Boise County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "16017": {
    "county_name": "Bonner County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "16019": {
    "county_name": "Bonneville County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "16021": {
    "county_name": "Boundary County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "16023": {
    "county_name": "Butte County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "16025": {
    "county_name": "Camas County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "16027": {
    "county_name": "Canyon County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "16029": {
    "county_name": "Caribou County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "16031": {
    "county_name": "Cassia County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "16033": {
    "county_name": "Clark County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "16035": {
    "county_name": "Clearwater County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "16037": {
    "county_name": "Custer County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "16039": {
    "county_name": "Elmore County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "16041": {
    "county_name": "Franklin County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "16043": {
    "county_name": "Fremont County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "16045": {
    "county_name": "Gem County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "16047": {
    "county_name": "Gooding County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "16049": {
    "county_name": "Idaho County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "16051": {
    "county_name": "Jefferson County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "16053": {
    "county_name": "Jerome County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "16055": {
    "county_name": "Kootenai County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "16057": {
    "county_name": "Latah County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "16059": {
    "county_name": "Lemhi County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "16061": {
    "county_name": "Lewis County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "16063": {
    "county_name": "Lincoln County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "16065": {
    "county_name": "Madison County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "16067": {
    "county_name": "Minidoka County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "16069": {
    "county_name": "Nez Perce County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "16071": {
    "county_name": "Oneida County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "16073": {
    "county_name": "Owyhee County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "16075": {
    "county_name": "Payette County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "16077": {
    "county_name": "Power County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "16079": {
    "county_name": "Shoshone County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "16081": {
    "county_name": "Teton County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "081",
    "class_fips": "H1"
  },
  "16083": {
    "county_name": "Twin Falls County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "16085": {
    "county_name": "Valley County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "085",
    "class_fips": "H1"
  },
  "16087": {
    "county_name": "Washington County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "17001": {
    "county_name": "Adams County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "17003": {
    "county_name": "Alexander County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "17005": {
    "county_name": "Bond County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "17007": {
    "county_name": "Boone County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "17009": {
    "county_name": "Brown County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "17011": {
    "county_name": "Bureau County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "17013": {
    "county_name": "Calhoun County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "17015": {
    "county_name": "Carroll County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "17017": {
    "county_name": "Cass County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "17019": {
    "county_name": "Champaign County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "17021": {
    "county_name": "Christian County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "17023": {
    "county_name": "Clark County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "17025": {
    "county_name": "Clay County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "17027": {
    "county_name": "Clinton County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "17029": {
    "county_name": "Coles County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "17031": {
    "county_name": "Cook County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "17033": {
    "county_name": "Crawford County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "17035": {
    "county_name": "Cumberland County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "17037": {
    "county_name": "DeKalb County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "17039": {
    "county_name": "De Witt County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "17041": {
    "county_name": "Douglas County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "17043": {
    "county_name": "DuPage County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "17045": {
    "county_name": "Edgar County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "17047": {
    "county_name": "Edwards County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "17049": {
    "county_name": "Effingham County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "17051": {
    "county_name": "Fayette County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "17053": {
    "county_name": "Ford County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "17055": {
    "county_name": "Franklin County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "17057": {
    "county_name": "Fulton County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "17059": {
    "county_name": "Gallatin County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "17061": {
    "county_name": "Greene County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "17063": {
    "county_name": "Grundy County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "17065": {
    "county_name": "Hamilton County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "17067": {
    "county_name": "Hancock County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "17069": {
    "county_name": "Hardin County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "17071": {
    "county_name": "Henderson County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "17073": {
    "county_name": "Henry County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "17075": {
    "county_name": "Iroquois County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "17077": {
    "county_name": "Jackson County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "17079": {
    "county_name": "Jasper County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "17081": {
    "county_name": "Jefferson County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "081",
    "class_fips": "H1"
  },
  "17083": {
    "county_name": "Jersey County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "17085": {
    "county_name": "Jo Daviess County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "085",
    "class_fips": "H1"
  },
  "17087": {
    "county_name": "Johnson County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "17089": {
    "county_name": "Kane County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "089",
    "class_fips": "H1"
  },
  "17091": {
    "county_name": "Kankakee County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "091",
    "class_fips": "H1"
  },
  "17093": {
    "county_name": "Kendall County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "093",
    "class_fips": "H1"
  },
  "17095": {
    "county_name": "Knox County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "095",
    "class_fips": "H1"
  },
  "17097": {
    "county_name": "Lake County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "097",
    "class_fips": "H1"
  },
  "17099": {
    "county_name": "LaSalle County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "099",
    "class_fips": "H1"
  },
  "17101": {
    "county_name": "Lawrence County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "101",
    "class_fips": "H1"
  },
  "17103": {
    "county_name": "Lee County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "103",
    "class_fips": "H1"
  },
  "17105": {
    "county_name": "Livingston County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "105",
    "class_fips": "H1"
  },
  "17107": {
    "county_name": "Logan County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "107",
    "class_fips": "H1"
  },
  "17109": {
    "county_name": "McDonough County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "109",
    "class_fips": "H1"
  },
  "17111": {
    "county_name": "McHenry County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "111",
    "class_fips": "H1"
  },
  "17113": {
    "county_name": "McLean County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "113",
    "class_fips": "H1"
  },
  "17115": {
    "county_name": "Macon County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "115",
    "class_fips": "H1"
  },
  "17117": {
    "county_name": "Macoupin County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "117",
    "class_fips": "H1"
  },
  "17119": {
    "county_name": "Madison County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "119",
    "class_fips": "H1"
  },
  "17121": {
    "county_name": "Marion County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "121",
    "class_fips": "H1"
  },
  "17123": {
    "county_name": "Marshall County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "123",
    "class_fips": "H1"
  },
  "17125": {
    "county_name": "Mason County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "125",
    "class_fips": "H1"
  },
  "17127": {
    "county_name": "Massac County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "127",
    "class_fips": "H1"
  },
  "17129": {
    "county_name": "Menard County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "129",
    "class_fips": "H1"
  },
  "17131": {
    "county_name": "Mercer County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "131",
    "class_fips": "H1"
  },
  "17133": {
    "county_name": "Monroe County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "133",
    "class_fips": "H1"
  },
  "17135": {
    "county_name": "Montgomery County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "135",
    "class_fips": "H1"
  },
  "17137": {
    "county_name": "Morgan County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "137",
    "class_fips": "H1"
  },
  "17139": {
    "county_name": "Moultrie County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "139",
    "class_fips": "H1"
  },
  "17141": {
    "county_name": "Ogle County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "141",
    "class_fips": "H1"
  },
  "17143": {
    "county_name": "Peoria County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "143",
    "class_fips": "H1"
  },
  "17145": {
    "county_name": "Perry County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "145",
    "class_fips": "H1"
  },
  "17147": {
    "county_name": "Piatt County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "147",
    "class_fips": "H1"
  },
  "17149": {
    "county_name": "Pike County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "149",
    "class_fips": "H1"
  },
  "17151": {
    "county_name": "Pope County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "151",
    "class_fips": "H1"
  },
  "17153": {
    "county_name": "Pulaski County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "153",
    "class_fips": "H1"
  },
  "17155": {
    "county_name": "Putnam County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "155",
    "class_fips": "H1"
  },
  "17157": {
    "county_name": "Randolph County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "157",
    "class_fips": "H1"
  },
  "17159": {
    "county_name": "Richland County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "159",
    "class_fips": "H1"
  },
  "17161": {
    "county_name": "Rock Island County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "161",
    "class_fips": "H1"
  },
  "17163": {
    "county_name": "St. Clair County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "163",
    "class_fips": "H1"
  },
  "17165": {
    "county_name": "Saline County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "165",
    "class_fips": "H1"
  },
  "17167": {
    "county_name": "Sangamon County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "167",
    "class_fips": "H1"
  },
  "17169": {
    "county_name": "Schuyler County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "169",
    "class_fips": "H1"
  },
  "17171": {
    "county_name": "Scott County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "171",
    "class_fips": "H1"
  },
  "17173": {
    "county_name": "Shelby County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "173",
    "class_fips": "H1"
  },
  "17175": {
    "county_name": "Stark County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "175",
    "class_fips": "H1"
  },
  "17177": {
    "county_name": "Stephenson County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "177",
    "class_fips": "H1"
  },
  "17179": {
    "county_name": "Tazewell County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "179",
    "class_fips": "H1"
  },
  "17181": {
    "county_name": "Union County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "181",
    "class_fips": "H1"
  },
  "17183": {
    "county_name": "Vermilion County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "183",
    "class_fips": "H1"
  },
  "17185": {
    "county_name": "Wabash County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "185",
    "class_fips": "H1"
  },
  "17187": {
    "county_name": "Warren County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "187",
    "class_fips": "H1"
  },
  "17189": {
    "county_name": "Washington County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "189",
    "class_fips": "H1"
  },
  "17191": {
    "county_name": "Wayne County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "191",
    "class_fips": "H1"
  },
  "17193": {
    "county_name": "White County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "193",
    "class_fips": "H1"
  },
  "17195": {
    "county_name": "Whiteside County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "195",
    "class_fips": "H1"
  },
  "17197": {
    "county_name": "Will County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "197",
    "class_fips": "H1"
  },
  "17199": {
    "county_name": "Williamson County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "199",
    "class_fips": "H1"
  },
  "17201": {
    "county_name": "Winnebago County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "201",
    "class_fips": "H1"
  },
  "17203": {
    "county_name": "Woodford County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "203",
    "class_fips": "H1"
  },
  "18001": {
    "county_name": "Adams County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "18003": {
    "county_name": "Allen County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "18005": {
    "county_name": "Bartholomew County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "18007": {
    "county_name": "Benton County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "18009": {
    "county_name": "Blackford County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "18011": {
    "county_name": "Boone County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "18013": {
    "county_name": "Brown County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "18015": {
    "county_name": "Carroll County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "18017": {
    "county_name": "Cass County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "18019": {
    "county_name": "Clark County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "18021": {
    "county_name": "Clay County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "18023": {
    "county_name": "Clinton County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "18025": {
    "county_name": "Crawford County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "18027": {
    "county_name": "Daviess County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "18029": {
    "county_name": "Dearborn County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "18031": {
    "county_name": "Decatur County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "18033": {
    "county_name": "DeKalb County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "18035": {
    "county_name": "Delaware County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "18037": {
    "county_name": "Dubois County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "18039": {
    "county_name": "Elkhart County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "18041": {
    "county_name": "Fayette County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "18043": {
    "county_name": "Floyd County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "18045": {
    "county_name": "Fountain County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "18047": {
    "county_name": "Franklin County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "18049": {
    "county_name": "Fulton County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "18051": {
    "county_name": "Gibson County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "18053": {
    "county_name": "Grant County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "18055": {
    "county_name": "Greene County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "18057": {
    "county_name": "Hamilton County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "18059": {
    "county_name": "Hancock County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "18061": {
    "county_name": "Harrison County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "18063": {
    "county_name": "Hendricks County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "18065": {
    "county_name": "Henry County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "18067": {
    "county_name": "Howard County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "18069": {
    "county_name": "Huntington County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "18071": {
    "county_name": "Jackson County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "18073": {
    "county_name": "Jasper County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "18075": {
    "county_name": "Jay County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "18077": {
    "county_name": "Jefferson County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "18079": {
    "county_name": "Jennings County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "18081": {
    "county_name": "Johnson County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "081",
    "class_fips": "H1"
  },
  "18083": {
    "county_name": "Knox County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "18085": {
    "county_name": "Kosciusko County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "085",
    "class_fips": "H1"
  },
  "18087": {
    "county_name": "LaGrange County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "18089": {
    "county_name": "Lake County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "089",
    "class_fips": "H1"
  },
  "18091": {
    "county_name": "LaPorte County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "091",
    "class_fips": "H1"
  },
  "18093": {
    "county_name": "Lawrence County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "093",
    "class_fips": "H1"
  },
  "18095": {
    "county_name": "Madison County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "095",
    "class_fips": "H1"
  },
  "18097": {
    "county_name": "Marion County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "097",
    "class_fips": "H6"
  },
  "18099": {
    "county_name": "Marshall County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "099",
    "class_fips": "H1"
  },
  "18101": {
    "county_name": "Martin County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "101",
    "class_fips": "H1"
  },
  "18103": {
    "county_name": "Miami County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "103",
    "class_fips": "H1"
  },
  "18105": {
    "county_name": "Monroe County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "105",
    "class_fips": "H1"
  },
  "18107": {
    "county_name": "Montgomery County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "107",
    "class_fips": "H1"
  },
  "18109": {
    "county_name": "Morgan County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "109",
    "class_fips": "H1"
  },
  "18111": {
    "county_name": "Newton County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "111",
    "class_fips": "H1"
  },
  "18113": {
    "county_name": "Noble County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "113",
    "class_fips": "H1"
  },
  "18115": {
    "county_name": "Ohio County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "115",
    "class_fips": "H1"
  },
  "18117": {
    "county_name": "Orange County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "117",
    "class_fips": "H1"
  },
  "18119": {
    "county_name": "Owen County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "119",
    "class_fips": "H1"
  },
  "18121": {
    "county_name": "Parke County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "121",
    "class_fips": "H1"
  },
  "18123": {
    "county_name": "Perry County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "123",
    "class_fips": "H1"
  },
  "18125": {
    "county_name": "Pike County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "125",
    "class_fips": "H1"
  },
  "18127": {
    "county_name": "Porter County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "127",
    "class_fips": "H1"
  },
  "18129": {
    "county_name": "Posey County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "129",
    "class_fips": "H1"
  },
  "18131": {
    "county_name": "Pulaski County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "131",
    "class_fips": "H1"
  },
  "18133": {
    "county_name": "Putnam County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "133",
    "class_fips": "H1"
  },
  "18135": {
    "county_name": "Randolph County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "135",
    "class_fips": "H1"
  },
  "18137": {
    "county_name": "Ripley County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "137",
    "class_fips": "H1"
  },
  "18139": {
    "county_name": "Rush County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "139",
    "class_fips": "H1"
  },
  "18141": {
    "county_name": "St. Joseph County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "141",
    "class_fips": "H1"
  },
  "18143": {
    "county_name": "Scott County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "143",
    "class_fips": "H1"
  },
  "18145": {
    "county_name": "Shelby County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "145",
    "class_fips": "H1"
  },
  "18147": {
    "county_name": "Spencer County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "147",
    "class_fips": "H1"
  },
  "18149": {
    "county_name": "Starke County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "149",
    "class_fips": "H1"
  },
  "18151": {
    "county_name": "Steuben County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "151",
    "class_fips": "H1"
  },
  "18153": {
    "county_name": "Sullivan County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "153",
    "class_fips": "H1"
  },
  "18155": {
    "county_name": "Switzerland County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "155",
    "class_fips": "H1"
  },
  "18157": {
    "county_name": "Tippecanoe County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "157",
    "class_fips": "H1"
  },
  "18159": {
    "county_name": "Tipton County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "159",
    "class_fips": "H1"
  },
  "18161": {
    "county_name": "Union County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "161",
    "class_fips": "H1"
  },
  "18163": {
    "county_name": "Vanderburgh County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "163",
    "class_fips": "H1"
  },
  "18165": {
    "county_name": "Vermillion County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "165",
    "class_fips": "H1"
  },
  "18167": {
    "county_name": "Vigo County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "167",
    "class_fips": "H1"
  },
  "18169": {
    "county_name": "Wabash County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "169",
    "class_fips": "H1"
  },
  "18171": {
    "county_name": "Warren County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "171",
    "class_fips": "H1"
  },
  "18173": {
    "county_name": "Warrick County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "173",
    "class_fips": "H1"
  },
  "18175": {
    "county_name": "Washington County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "175",
    "class_fips": "H1"
  },
  "18177": {
    "county_name": "Wayne County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "177",
    "class_fips": "H1"
  },
  "18179": {
    "county_name": "Wells County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "179",
    "class_fips": "H1"
  },
  "18181": {
    "county_name": "White County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "181",
    "class_fips": "H1"
  },
  "18183": {
    "county_name": "Whitley County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "183",
    "class_fips": "H1"
  },
  "19001": {
    "county_name": "Adair County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "19003": {
    "county_name": "Adams County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "19005": {
    "county_name": "Allamakee County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "19007": {
    "county_name": "Appanoose County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "19009": {
    "county_name": "Audubon County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "19011": {
    "county_name": "Benton County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "19013": {
    "county_name": "Black Hawk County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "19015": {
    "county_name": "Boone County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "19017": {
    "county_name": "Bremer County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "19019": {
    "county_name": "Buchanan County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "19021": {
    "county_name": "Buena Vista County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "19023": {
    "county_name": "Butler County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "19025": {
    "county_name": "Calhoun County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "19027": {
    "county_name": "Carroll County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "19029": {
    "county_name": "Cass County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "19031": {
    "county_name": "Cedar County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "19033": {
    "county_name": "Cerro Gordo County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "19035": {
    "county_name": "Cherokee County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "19037": {
    "county_name": "Chickasaw County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "19039": {
    "county_name": "Clarke County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "19041": {
    "county_name": "Clay County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "19043": {
    "county_name": "Clayton County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "19045": {
    "county_name": "Clinton County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "19047": {
    "county_name": "Crawford County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "19049": {
    "county_name": "Dallas County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "19051": {
    "county_name": "Davis County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "19053": {
    "county_name": "Decatur County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "19055": {
    "county_name": "Delaware County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "19057": {
    "county_name": "Des Moines County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "19059": {
    "county_name": "Dickinson County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "19061": {
    "county_name": "Dubuque County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "19063": {
    "county_name": "Emmet County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "19065": {
    "county_name": "Fayette County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "19067": {
    "county_name": "Floyd County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "19069": {
    "county_name": "Franklin County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "19071": {
    "county_name": "Fremont County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "19073": {
    "county_name": "Greene County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "19075": {
    "county_name": "Grundy County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "19077": {
    "county_name": "Guthrie County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "19079": {
    "county_name": "Hamilton County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "19081": {
    "county_name": "Hancock County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "081",
    "class_fips": "H1"
  },
  "19083": {
    "county_name": "Hardin County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "19085": {
    "county_name": "Harrison County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "085",
    "class_fips": "H1"
  },
  "19087": {
    "county_name": "Henry County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "19089": {
    "county_name": "Howard County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "089",
    "class_fips": "H1"
  },
  "19091": {
    "county_name": "Humboldt County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "091",
    "class_fips": "H1"
  },
  "19093": {
    "county_name": "Ida County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "093",
    "class_fips": "H1"
  },
  "19095": {
    "county_name": "Iowa County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "095",
    "class_fips": "H1"
  },
  "19097": {
    "county_name": "Jackson County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "097",
    "class_fips": "H1"
  },
  "19099": {
    "county_name": "Jasper County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "099",
    "class_fips": "H1"
  },
  "19101": {
    "county_name": "Jefferson County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "101",
    "class_fips": "H1"
  },
  "19103": {
    "county_name": "Johnson County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "103",
    "class_fips": "H1"
  },
  "19105": {
    "county_name": "Jones County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "105",
    "class_fips": "H1"
  },
  "19107": {
    "county_name": "Keokuk County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "107",
    "class_fips": "H1"
  },
  "19109": {
    "county_name": "Kossuth County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "109",
    "class_fips": "H1"
  },
  "19111": {
    "county_name": "Lee County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "111",
    "class_fips": "H1"
  },
  "19113": {
    "county_name": "Linn County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "113",
    "class_fips": "H1"
  },
  "19115": {
    "county_name": "Louisa County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "115",
    "class_fips": "H1"
  },
  "19117": {
    "county_name": "Lucas County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "117",
    "class_fips": "H1"
  },
  "19119": {
    "county_name": "Lyon County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "119",
    "class_fips": "H1"
  },
  "19121": {
    "county_name": "Madison County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "121",
    "class_fips": "H1"
  },
  "19123": {
    "county_name": "Mahaska County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "123",
    "class_fips": "H1"
  },
  "19125": {
    "county_name": "Marion County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "125",
    "class_fips": "H1"
  },
  "19127": {
    "county_name": "Marshall County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "127",
    "class_fips": "H1"
  },
  "19129": {
    "county_name": "Mills County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "129",
    "class_fips": "H1"
  },
  "19131": {
    "county_name": "Mitchell County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "131",
    "class_fips": "H1"
  },
  "19133": {
    "county_name": "Monona County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "133",
    "class_fips": "H1"
  },
  "19135": {
    "county_name": "Monroe County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "135",
    "class_fips": "H1"
  },
  "19137": {
    "county_name": "Montgomery County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "137",
    "class_fips": "H1"
  },
  "19139": {
    "county_name": "Muscatine County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "139",
    "class_fips": "H1"
  },
  "19141": {
    "county_name": "O'Brien County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "141",
    "class_fips": "H1"
  },
  "19143": {
    "county_name": "Osceola County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "143",
    "class_fips": "H1"
  },
  "19145": {
    "county_name": "Page County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "145",
    "class_fips": "H1"
  },
  "19147": {
    "county_name": "Palo Alto County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "147",
    "class_fips": "H1"
  },
  "19149": {
    "county_name": "Plymouth County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "149",
    "class_fips": "H1"
  },
  "19151": {
    "county_name": "Pocahontas County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "151",
    "class_fips": "H1"
  },
  "19153": {
    "county_name": "Polk County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "153",
    "class_fips": "H1"
  },
  "19155": {
    "county_name": "Pottawattamie County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "155",
    "class_fips": "H1"
  },
  "19157": {
    "county_name": "Poweshiek County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "157",
    "class_fips": "H1"
  },
  "19159": {
    "county_name": "Ringgold County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "159",
    "class_fips": "H1"
  },
  "19161": {
    "county_name": "Sac County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "161",
    "class_fips": "H1"
  },
  "19163": {
    "county_name": "Scott County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "163",
    "class_fips": "H1"
  },
  "19165": {
    "county_name": "Shelby County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "165",
    "class_fips": "H1"
  },
  "19167": {
    "county_name": "Sioux County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "167",
    "class_fips": "H1"
  },
  "19169": {
    "county_name": "Story County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "169",
    "class_fips": "H1"
  },
  "19171": {
    "county_name": "Tama County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "171",
    "class_fips": "H1"
  },
  "19173": {
    "county_name": "Taylor County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "173",
    "class_fips": "H1"
  },
  "19175": {
    "county_name": "Union County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "175",
    "class_fips": "H1"
  },
  "19177": {
    "county_name": "Van Buren County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "177",
    "class_fips": "H1"
  },
  "19179": {
    "county_name": "Wapello County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "179",
    "class_fips": "H1"
  },
  "19181": {
    "county_name": "Warren County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "181",
    "class_fips": "H1"
  },
  "19183": {
    "county_name": "Washington County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "183",
    "class_fips": "H1"
  },
  "19185": {
    "county_name": "Wayne County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "185",
    "class_fips": "H1"
  },
  "19187": {
    "county_name": "Webster County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "187",
    "class_fips": "H1"
  },
  "19189": {
    "county_name": "Winnebago County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "189",
    "class_fips": "H1"
  },
  "19191": {
    "county_name": "Winneshiek County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "191",
    "class_fips": "H1"
  },
  "19193": {
    "county_name": "Woodbury County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "193",
    "class_fips": "H1"
  },
  "19195": {
    "county_name": "Worth County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "195",
    "class_fips": "H1"
  },
  "19197": {
    "county_name": "Wright County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "197",
    "class_fips": "H1"
  },
  "20001": {
    "county_name": "Allen County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "20003": {
    "county_name": "Anderson County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "20005": {
    "county_name": "Atchison County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "20007": {
    "county_name": "Barber County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "20009": {
    "county_name": "Barton County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "20011": {
    "county_name": "Bourbon County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "20013": {
    "county_name": "Brown County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "20015": {
    "county_name": "Butler County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "20017": {
    "county_name": "Chase County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "20019": {
    "county_name": "Chautauqua County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "20021": {
    "county_name": "Cherokee County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "20023": {
    "county_name": "Cheyenne County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "20025": {
    "county_name": "Clark County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "20027": {
    "county_name": "Clay County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "20029": {
    "county_name": "Cloud County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "20031": {
    "county_name": "Coffey County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "20033": {
    "county_name": "Comanche County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "20035": {
    "county_name": "Cowley County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "20037": {
    "county_name": "Crawford County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "20039": {
    "county_name": "Decatur County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "20041": {
    "county_name": "Dickinson County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "20043": {
    "county_name": "Doniphan County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "20045": {
    "county_name": "Douglas County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "20047": {
    "county_name": "Edwards County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "20049": {
    "county_name": "Elk County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "20051": {
    "county_name": "Ellis County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "20053": {
    "county_name": "Ellsworth County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "20055": {
    "county_name": "Finney County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "20057": {
    "county_name": "Ford County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "20059": {
    "county_name": "Franklin County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "20061": {
    "county_name": "Geary County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "20063": {
    "county_name": "Gove County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "20065": {
    "county_name": "Graham County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "20067": {
    "county_name": "Grant County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "20069": {
    "county_name": "Gray County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "20071": {
    "county_name": "Greeley County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "20073": {
    "county_name": "Greenwood County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "20075": {
    "county_name": "Hamilton County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "20077": {
    "county_name": "Harper County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "20079": {
    "county_name": "Harvey County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "20081": {
    "county_name": "Haskell County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "081",
    "class_fips": "H1"
  },
  "20083": {
    "county_name": "Hodgeman County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "20085": {
    "county_name": "Jackson County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "085",
    "class_fips": "H1"
  },
  "20087": {
    "county_name": "Jefferson County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "20089": {
    "county_name": "Jewell County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "089",
    "class_fips": "H1"
  },
  "20091": {
    "county_name": "Johnson County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "091",
    "class_fips": "H1"
  },
  "20093": {
    "county_name": "Kearny County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "093",
    "class_fips": "H1"
  },
  "20095": {
    "county_name": "Kingman County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "095",
    "class_fips": "H1"
  },
  "20097": {
    "county_name": "Kiowa County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "097",
    "class_fips": "H1"
  },
  "20099": {
    "county_name": "Labette County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "099",
    "class_fips": "H1"
  },
  "20101": {
    "county_name": "Lane County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "101",
    "class_fips": "H1"
  },
  "20103": {
    "county_name": "Leavenworth County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "103",
    "class_fips": "H1"
  },
  "20105": {
    "county_name": "Lincoln County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "105",
    "class_fips": "H1"
  },
  "20107": {
    "county_name": "Linn County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "107",
    "class_fips": "H1"
  },
  "20109": {
    "county_name": "Logan County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "109",
    "class_fips": "H1"
  },
  "20111": {
    "county_name": "Lyon County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "111",
    "class_fips": "H1"
  },
  "20113": {
    "county_name": "McPherson County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "113",
    "class_fips": "H1"
  },
  "20115": {
    "county_name": "Marion County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "115",
    "class_fips": "H1"
  },
  "20117": {
    "county_name": "Marshall County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "117",
    "class_fips": "H1"
  },
  "20119": {
    "county_name": "Meade County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "119",
    "class_fips": "H1"
  },
  "20121": {
    "county_name": "Miami County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "121",
    "class_fips": "H1"
  },
  "20123": {
    "county_name": "Mitchell County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "123",
    "class_fips": "H1"
  },
  "20125": {
    "county_name": "Montgomery County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "125",
    "class_fips": "H1"
  },
  "20127": {
    "county_name": "Morris County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "127",
    "class_fips": "H1"
  },
  "20129": {
    "county_name": "Morton County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "129",
    "class_fips": "H1"
  },
  "20131": {
    "county_name": "Nemaha County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "131",
    "class_fips": "H1"
  },
  "20133": {
    "county_name": "Neosho County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "133",
    "class_fips": "H1"
  },
  "20135": {
    "county_name": "Ness County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "135",
    "class_fips": "H1"
  },
  "20137": {
    "county_name": "Norton County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "137",
    "class_fips": "H1"
  },
  "20139": {
    "county_name": "Osage County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "139",
    "class_fips": "H1"
  },
  "20141": {
    "county_name": "Osborne County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "141",
    "class_fips": "H1"
  },
  "20143": {
    "county_name": "Ottawa County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "143",
    "class_fips": "H1"
  },
  "20145": {
    "county_name": "Pawnee County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "145",
    "class_fips": "H1"
  },
  "20147": {
    "county_name": "Phillips County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "147",
    "class_fips": "H1"
  },
  "20149": {
    "county_name": "Pottawatomie County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "149",
    "class_fips": "H1"
  },
  "20151": {
    "county_name": "Pratt County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "151",
    "class_fips": "H1"
  },
  "20153": {
    "county_name": "Rawlins County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "153",
    "class_fips": "H1"
  },
  "20155": {
    "county_name": "Reno County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "155",
    "class_fips": "H1"
  },
  "20157": {
    "county_name": "Republic County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "157",
    "class_fips": "H1"
  },
  "20159": {
    "county_name": "Rice County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "159",
    "class_fips": "H1"
  },
  "20161": {
    "county_name": "Riley County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "161",
    "class_fips": "H1"
  },
  "20163": {
    "county_name": "Rooks County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "163",
    "class_fips": "H1"
  },
  "20165": {
    "county_name": "Rush County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "165",
    "class_fips": "H1"
  },
  "20167": {
    "county_name": "Russell County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "167",
    "class_fips": "H1"
  },
  "20169": {
    "county_name": "Saline County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "169",
    "class_fips": "H1"
  },
  "20171": {
    "county_name": "Scott County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "171",
    "class_fips": "H1"
  },
  "20173": {
    "county_name": "Sedgwick County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "173",
    "class_fips": "H1"
  },
  "20175": {
    "county_name": "Seward County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "175",
    "class_fips": "H1"
  },
  "20177": {
    "county_name": "Shawnee County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "177",
    "class_fips": "H1"
  },
  "20179": {
    "county_name": "Sheridan County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "179",
    "class_fips": "H1"
  },
  "20181": {
    "county_name": "Sherman County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "181",
    "class_fips": "H1"
  },
  "20183": {
    "county_name": "Smith County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "183",
    "class_fips": "H1"
  },
  "20185": {
    "county_name": "Stafford County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "185",
    "class_fips": "H1"
  },
  "20187": {
    "county_name": "Stanton County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "187",
    "class_fips": "H1"
  },
  "20189": {
    "county_name": "Stevens County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "189",
    "class_fips": "H1"
  },
  "20191": {
    "county_name": "Sumner County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "191",
    "class_fips": "H1"
  },
  "20193": {
    "county_name": "Thomas County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "193",
    "class_fips": "H1"
  },
  "20195": {
    "county_name": "Trego County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "195",
    "class_fips": "H1"
  },
  "20197": {
    "county_name": "Wabaunsee County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "197",
    "class_fips": "H1"
  },
  "20199": {
    "county_name": "Wallace County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "199",
    "class_fips": "H1"
  },
  "20201": {
    "county_name": "Washington County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "201",
    "class_fips": "H1"
  },
  "20203": {
    "county_name": "Wichita County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "203",
    "class_fips": "H1"
  },
  "20205": {
    "county_name": "Wilson County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "205",
    "class_fips": "H1"
  },
  "20207": {
    "county_name": "Woodson County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "207",
    "class_fips": "H1"
  },
  "20209": {
    "county_name": "Wyandotte County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "209",
    "class_fips": "H6"
  },
  "21001": {
    "county_name": "Adair County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "21003": {
    "county_name": "Allen County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "21005": {
    "county_name": "Anderson County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "21007": {
    "county_name": "Ballard County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "21009": {
    "county_name": "Barren County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "21011": {
    "county_name": "Bath County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "21013": {
    "county_name": "Bell County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "21015": {
    "county_name": "Boone County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "21017": {
    "county_name": "Bourbon County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "21019": {
    "county_name": "Boyd County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "21021": {
    "county_name": "Boyle County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "21023": {
    "county_name": "Bracken County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "21025": {
    "county_name": "Breathitt County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "21027": {
    "county_name": "Breckinridge County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "21029": {
    "county_name": "Bullitt County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "21031": {
    "county_name": "Butler County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "21033": {
    "county_name": "Caldwell County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "21035": {
    "county_name": "Calloway County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "21037": {
    "county_name": "Campbell County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "21039": {
    "county_name": "Carlisle County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "21041": {
    "county_name": "Carroll County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "21043": {
    "county_name": "Carter County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "21045": {
    "county_name": "Casey County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "21047": {
    "county_name": "Christian County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "21049": {
    "county_name": "Clark County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "21051": {
    "county_name": "Clay County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "21053": {
    "county_name": "Clinton County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "21055": {
    "county_name": "Crittenden County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "21057": {
    "county_name": "Cumberland County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "21059": {
    "county_name": "Daviess County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "21061": {
    "county_name": "Edmonson County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "21063": {
    "county_name": "Elliott County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "21065": {
    "county_name": "Estill County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "21067": {
    "county_name": "Fayette County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "067",
    "class_fips": "H6"
  },
  "21069": {
    "county_name": "Fleming County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "21071": {
    "county_name": "Floyd County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "21073": {
    "county_name": "Franklin County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "21075": {
    "county_name": "Fulton County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "21077": {
    "county_name": "Gallatin County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "21079": {
    "county_name": "Garrard County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "21081": {
    "county_name": "Grant County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "081",
    "class_fips": "H1"
  },
  "21083": {
    "county_name": "Graves County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "21085": {
    "county_name": "Grayson County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "085",
    "class_fips": "H1"
  },
  "21087": {
    "county_name": "Green County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "21089": {
    "county_name": "Greenup County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "089",
    "class_fips": "H1"
  },
  "21091": {
    "county_name": "Hancock County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "091",
    "class_fips": "H1"
  },
  "21093": {
    "county_name": "Hardin County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "093",
    "class_fips": "H1"
  },
  "21095": {
    "county_name": "Harlan County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "095",
    "class_fips": "H1"
  },
  "21097": {
    "county_name": "Harrison County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "097",
    "class_fips": "H1"
  },
  "21099": {
    "county_name": "Hart County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "099",
    "class_fips": "H1"
  },
  "21101": {
    "county_name": "Henderson County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "101",
    "class_fips": "H1"
  },
  "21103": {
    "county_name": "Henry County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "103",
    "class_fips": "H1"
  },
  "21105": {
    "county_name": "Hickman County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "105",
    "class_fips": "H1"
  },
  "21107": {
    "county_name": "Hopkins County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "107",
    "class_fips": "H1"
  },
  "21109": {
    "county_name": "Jackson County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "109",
    "class_fips": "H1"
  },
  "21111": {
    "county_name": "Jefferson County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "111",
    "class_fips": "H1"
  },
  "21113": {
    "county_name": "Jessamine County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "113",
    "class_fips": "H1"
  },
  "21115": {
    "county_name": "Johnson County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "115",
    "class_fips": "H1"
  },
  "21117": {
    "county_name": "Kenton County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "117",
    "class_fips": "H1"
  },
  "21119": {
    "county_name": "Knott County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "119",
    "class_fips": "H1"
  },
  "21121": {
    "county_name": "Knox County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "121",
    "class_fips": "H1"
  },
  "21123": {
    "county_name": "Larue County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "123",
    "class_fips": "H1"
  },
  "21125": {
    "county_name": "Laurel County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "125",
    "class_fips": "H1"
  },
  "21127": {
    "county_name": "Lawrence County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "127",
    "class_fips": "H1"
  },
  "21129": {
    "county_name": "Lee County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "129",
    "class_fips": "H1"
  },
  "21131": {
    "county_name": "Leslie County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "131",
    "class_fips": "H1"
  },
  "21133": {
    "county_name": "Letcher County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "133",
    "class_fips": "H1"
  },
  "21135": {
    "county_name": "Lewis County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "135",
    "class_fips": "H1"
  },
  "21137": {
    "county_name": "Lincoln County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "137",
    "class_fips": "H1"
  },
  "21139": {
    "county_name": "Livingston County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "139",
    "class_fips": "H1"
  },
  "21141": {
    "county_name": "Logan County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "141",
    "class_fips": "H1"
  },
  "21143": {
    "county_name": "Lyon County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "143",
    "class_fips": "H1"
  },
  "21145": {
    "county_name": "McCracken County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "145",
    "class_fips": "H1"
  },
  "21147": {
    "county_name": "McCreary County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "147",
    "class_fips": "H1"
  },
  "21149": {
    "county_name": "McLean County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "149",
    "class_fips": "H1"
  },
  "21151": {
    "county_name": "Madison County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "151",
    "class_fips": "H1"
  },
  "21153": {
    "county_name": "Magoffin County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "153",
    "class_fips": "H1"
  },
  "21155": {
    "county_name": "Marion County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "155",
    "class_fips": "H1"
  },
  "21157": {
    "county_name": "Marshall County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "157",
    "class_fips": "H1"
  },
  "21159": {
    "county_name": "Martin County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "159",
    "class_fips": "H1"
  },
  "21161": {
    "county_name": "Mason County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "161",
    "class_fips": "H1"
  },
  "21163": {
    "county_name": "Meade County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "163",
    "class_fips": "H1"
  },
  "21165": {
    "county_name": "Menifee County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "165",
    "class_fips": "H1"
  },
  "21167": {
    "county_name": "Mercer County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "167",
    "class_fips": "H1"
  },
  "21169": {
    "county_name": "Metcalfe County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "169",
    "class_fips": "H1"
  },
  "21171": {
    "county_name": "Monroe County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "171",
    "class_fips": "H1"
  },
  "21173": {
    "county_name": "Montgomery County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "173",
    "class_fips": "H1"
  },
  "21175": {
    "county_name": "Morgan County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "175",
    "class_fips": "H1"
  },
  "21177": {
    "county_name": "Muhlenberg County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "177",
    "class_fips": "H1"
  },
  "21179": {
    "county_name": "Nelson County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "179",
    "class_fips": "H1"
  },
  "21181": {
    "county_name": "Nicholas County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "181",
    "class_fips": "H1"
  },
  "21183": {
    "county_name": "Ohio County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "183",
    "class_fips": "H1"
  },
  "21185": {
    "county_name": "Oldham County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "185",
    "class_fips": "H1"
  },
  "21187": {
    "county_name": "Owen County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "187",
    "class_fips": "H1"
  },
  "21189": {
    "county_name": "Owsley County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "189",
    "class_fips": "H1"
  },
  "21191": {
    "county_name": "Pendleton County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "191",
    "class_fips": "H1"
  },
  "21193": {
    "county_name": "Perry County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "193",
    "class_fips": "H1"
  },
  "21195": {
    "county_name": "Pike County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "195",
    "class_fips": "H1"
  },
  "21197": {
    "county_name": "Powell County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "197",
    "class_fips": "H1"
  },
  "21199": {
    "county_name": "Pulaski County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "199",
    "class_fips": "H1"
  },
  "21201": {
    "county_name": "Robertson County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "201",
    "class_fips": "H1"
  },
  "21203": {
    "county_name": "Rockcastle County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "203",
    "class_fips": "H1"
  },
  "21205": {
    "county_name": "Rowan County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "205",
    "class_fips": "H1"
  },
  "21207": {
    "county_name": "Russell County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "207",
    "class_fips": "H1"
  },
  "21209": {
    "county_name": "Scott County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "209",
    "class_fips": "H1"
  },
  "21211": {
    "county_name": "Shelby County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "211",
    "class_fips": "H1"
  },
  "21213": {
    "county_name": "Simpson County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "213",
    "class_fips": "H1"
  },
  "21215": {
    "county_name": "Spencer County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "215",
    "class_fips": "H1"
  },
  "21217": {
    "county_name": "Taylor County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "217",
    "class_fips": "H1"
  },
  "21219": {
    "county_name": "Todd County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "219",
    "class_fips": "H1"
  },
  "21221": {
    "county_name": "Trigg County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "221",
    "class_fips": "H1"
  },
  "21223": {
    "county_name": "Trimble County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "223",
    "class_fips": "H1"
  },
  "21225": {
    "county_name": "Union County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "225",
    "class_fips": "H1"
  },
  "21227": {
    "county_name": "Warren County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "227",
    "class_fips": "H1"
  },
  "21229": {
    "county_name": "Washington County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "229",
    "class_fips": "H1"
  },
  "21231": {
    "county_name": "Wayne County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "231",
    "class_fips": "H1"
  },
  "21233": {
    "county_name": "Webster County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "233",
    "class_fips": "H1"
  },
  "21235": {
    "county_name": "Whitley County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "235",
    "class_fips": "H1"
  },
  "21237": {
    "county_name": "Wolfe County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "237",
    "class_fips": "H1"
  },
  "21239": {
    "county_name": "Woodford County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "239",
    "class_fips": "H1"
  },
  "22001": {
    "county_name": "Acadia Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "22003": {
    "county_name": "Allen Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "22005": {
    "county_name": "Ascension Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "22007": {
    "county_name": "Assumption Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "22009": {
    "county_name": "Avoyelles Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "22011": {
    "county_name": "Beauregard Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "22013": {
    "county_name": "Bienville Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "22015": {
    "county_name": "Bossier Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "22017": {
    "county_name": "Caddo Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "22019": {
    "county_name": "Calcasieu Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "22021": {
    "county_name": "Caldwell Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "22023": {
    "county_name": "Cameron Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "22025": {
    "county_name": "Catahoula Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "22027": {
    "county_name": "Claiborne Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "22029": {
    "county_name": "Concordia Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "22031": {
    "county_name": "De Soto Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "22033": {
    "county_name": "East Baton Rouge Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "22035": {
    "county_name": "East Carroll Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "22037": {
    "county_name": "East Feliciana Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "22039": {
    "county_name": "Evangeline Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "22041": {
    "county_name": "Franklin Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "22043": {
    "county_name": "Grant Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "22045": {
    "county_name": "Iberia Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "22047": {
    "county_name": "Iberville Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "22049": {
    "county_name": "Jackson Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "22051": {
    "county_name": "Jefferson Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "22053": {
    "county_name": "Jefferson Davis Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "22055": {
    "county_name": "Lafayette Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "22057": {
    "county_name": "Lafourche Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "22059": {
    "county_name": "LaSalle Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "22061": {
    "county_name": "Lincoln Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "22063": {
    "county_name": "Livingston Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "22065": {
    "county_name": "Madison Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "22067": {
    "county_name": "Morehouse Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "22069": {
    "county_name": "Natchitoches Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "22071": {
    "county_name": "Orleans Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "071",
    "class_fips": "H6"
  },
  "22073": {
    "county_name": "Ouachita Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "22075": {
    "county_name": "Plaquemines Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "22077": {
    "county_name": "Pointe Coupee Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "22079": {
    "county_name": "Rapides Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "22081": {
    "county_name": "Red River Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "081",
    "class_fips": "H1"
  },
  "22083": {
    "county_name": "Richland Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "22085": {
    "county_name": "Sabine Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "085",
    "class_fips": "H1"
  },
  "22087": {
    "county_name": "St. Bernard Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "22089": {
    "county_name": "St. Charles Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "089",
    "class_fips": "H1"
  },
  "22091": {
    "county_name": "St. Helena Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "091",
    "class_fips": "H1"
  },
  "22093": {
    "county_name": "St. James Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "093",
    "class_fips": "H1"
  },
  "22095": {
    "county_name": "St. John the Baptist Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "095",
    "class_fips": "H1"
  },
  "22097": {
    "county_name": "St. Landry Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "097",
    "class_fips": "H1"
  },
  "22099": {
    "county_name": "St. Martin Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "099",
    "class_fips": "H1"
  },
  "22101": {
    "county_name": "St. Mary Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "101",
    "class_fips": "H1"
  },
  "22103": {
    "county_name": "St. Tammany Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "103",
    "class_fips": "H1"
  },
  "22105": {
    "county_name": "Tangipahoa Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "105",
    "class_fips": "H1"
  },
  "22107": {
    "county_name": "Tensas Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "107",
    "class_fips": "H1"
  },
  "22109": {
    "county_name": "Terrebonne Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "109",
    "class_fips": "H1"
  },
  "22111": {
    "county_name": "Union Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "111",
    "class_fips": "H1"
  },
  "22113": {
    "county_name": "Vermilion Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "113",
    "class_fips": "H1"
  },
  "22115": {
    "county_name": "Vernon Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "115",
    "class_fips": "H1"
  },
  "22117": {
    "county_name": "Washington Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "117",
    "class_fips": "H1"
  },
  "22119": {
    "county_name": "Webster Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "119",
    "class_fips": "H1"
  },
  "22121": {
    "county_name": "West Baton Rouge Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "121",
    "class_fips": "H1"
  },
  "22123": {
    "county_name": "West Carroll Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "123",
    "class_fips": "H1"
  },
  "22125": {
    "county_name": "West Feliciana Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "125",
    "class_fips": "H1"
  },
  "22127": {
    "county_name": "Winn Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "127",
    "class_fips": "H1"
  },
  "23001": {
    "county_name": "Androscoggin County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "23003": {
    "county_name": "Aroostook County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "23005": {
    "county_name": "Cumberland County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "23007": {
    "county_name": "Franklin County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "23009": {
    "county_name": "Hancock County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "23011": {
    "county_name": "Kennebec County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "23013": {
    "county_name": "Knox County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "23015": {
    "county_name": "Lincoln County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "23017": {
    "county_name": "Oxford County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "23019": {
    "county_name": "Penobscot County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "23021": {
    "county_name": "Piscataquis County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "23023": {
    "county_name": "Sagadahoc County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "23025": {
    "county_name": "Somerset County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "23027": {
    "county_name": "Waldo County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "23029": {
    "county_name": "Washington County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "23031": {
    "county_name": "York County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "24001": {
    "county_name": "Allegany County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "24003": {
    "county_name": "Anne Arundel County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "24005": {
    "county_name": "Baltimore County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "24009": {
    "county_name": "Calvert County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "24011": {
    "county_name": "Caroline County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "24013": {
    "county_name": "Carroll County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "24015": {
    "county_name": "Cecil County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "24017": {
    "county_name": "Charles County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "24019": {
    "county_name": "Dorchester County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "24021": {
    "county_name": "Frederick County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "24023": {
    "county_name": "Garrett County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "24025": {
    "county_name": "Harford County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "24027": {
    "county_name": "Howard County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "24029": {
    "county_name": "Kent County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "24031": {
    "county_name": "Montgomery County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "24033": {
    "county_name": "Prince George's County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "24035": {
    "county_name": "Queen Anne's County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "24037": {
    "county_name": "St. Mary's County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "24039": {
    "county_name": "Somerset County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "24041": {
    "county_name": "Talbot County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "24043": {
    "county_name": "Washington County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "24045": {
    "county_name": "Wicomico County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "24047": {
    "county_name": "Worcester County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "24510": {
    "county_name": "Baltimore city",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "510",
    "class_fips": "C7"
  },
  "25001": {
    "county_name": "Barnstable County",
    "state_code": "MA",
    "state_fips": "25",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "25003": {
    "county_name": "Berkshire County",
    "state_code": "MA",
    "state_fips": "25",
    "county_fips": "003",
    "class_fips": "H4"
  },
  "25005": {
    "county_name": "Bristol County",
    "state_code": "MA",
    "state_fips": "25",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "25007": {
    "county_name": "Dukes County",
    "state_code": "MA",
    "state_fips": "25",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "25009": {
    "county_name": "Essex County",
    "state_code": "MA",
    "state_fips": "25",
    "county_fips": "009",
    "class_fips": "H4"
  },
  "25011": {
    "county_name": "Franklin County",
    "state_code": "MA",
    "state_fips": "25",
    "county_fips": "011",
    "class_fips": "H4"
  },
  "25013": {
    "county_name": "Hampden County",
    "state_code": "MA",
    "state_fips": "25",
    "county_fips": "013",
    "class_fips": "H4"
  },
  "25015": {
    "county_name": "Hampshire County",
    "state_code": "MA",
    "state_fips": "25",
    "county_fips": "015",
    "class_fips": "H4"
  },
  "25017": {
    "county_name": "Middlesex County",
    "state_code": "MA",
    "state_fips": "25",
    "county_fips": "017",
    "class_fips": "H4"
  },
  "25019": {
    "county_name": "Nantucket County",
    "state_code": "MA",
    "state_fips": "25",
    "county_fips": "019",
    "class_fips": "H4"
  },
  "25021": {
    "county_name": "Norfolk County",
    "state_code": "MA",
    "state_fips": "25",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "25023": {
    "county_name": "Plymouth County",
    "state_code": "MA",
    "state_fips": "25",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "25025": {
    "county_name": "Suffolk County",
    "state_code": "MA",
    "state_fips": "25",
    "county_fips": "025",
    "class_fips": "H4"
  },
  "25027": {
    "county_name": "Worcester County",
    "state_code": "MA",
    "state_fips": "25",
    "county_fips": "027",
    "class_fips": "H4"
  },
  "26001": {
    "county_name": "Alcona County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "26003": {
    "county_name": "Alger County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "26005": {
    "county_name": "Allegan County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "26007": {
    "county_name": "Alpena County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "26009": {
    "county_name": "Antrim County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "26011": {
    "county_name": "Arenac County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "26013": {
    "county_name": "Baraga County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "26015": {
    "county_name": "Barry County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "26017": {
    "county_name": "Bay County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "26019": {
    "county_name": "Benzie County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "26021": {
    "county_name": "Berrien County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "26023": {
    "county_name": "Branch County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "26025": {
    "county_name": "Calhoun County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "26027": {
    "county_name": "Cass County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "26029": {
    "county_name": "Charlevoix County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "26031": {
    "county_name": "Cheboygan County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "26033": {
    "county_name": "Chippewa County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "26035": {
    "county_name": "Clare County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "26037": {
    "county_name": "Clinton County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "26039": {
    "county_name": "Crawford County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "26041": {
    "county_name": "Delta County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "26043": {
    "county_name": "Dickinson County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "26045": {
    "county_name": "Eaton County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "26047": {
    "county_name": "Emmet County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "26049": {
    "county_name": "Genesee County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "26051": {
    "county_name": "Gladwin County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "26053": {
    "county_name": "Gogebic County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "26055": {
    "county_name": "Grand Traverse County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "26057": {
    "county_name": "Gratiot County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "26059": {
    "county_name": "Hillsdale County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "26061": {
    "county_name": "Houghton County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "26063": {
    "county_name": "Huron County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "26065": {
    "county_name": "Ingham County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "26067": {
    "county_name": "Ionia County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "26069": {
    "county_name": "Iosco County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "26071": {
    "county_name": "Iron County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "26073": {
    "county_name": "Isabella County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "26075": {
    "county_name": "Jackson County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "26077": {
    "county_name": "Kalamazoo County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "26079": {
    "county_name": "Kalkaska County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "26081": {
    "county_name": "Kent County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "081",
    "class_fips": "H1"
  },
  "26083": {
    "county_name": "Keweenaw County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "26085": {
    "county_name": "Lake County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "085",
    "class_fips": "H1"
  },
  "26087": {
    "county_name": "Lapeer County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "26089": {
    "county_name": "Leelanau County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "089",
    "class_fips": "H1"
  },
  "26091": {
    "county_name": "Lenawee County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "091",
    "class_fips": "H1"
  },
  "26093": {
    "county_name": "Livingston County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "093",
    "class_fips": "H1"
  },
  "26095": {
    "county_name": "Luce County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "095",
    "class_fips": "H1"
  },
  "26097": {
    "county_name": "Mackinac County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "097",
    "class_fips": "H1"
  },
  "26099": {
    "county_name": "Macomb County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "099",
    "class_fips": "H1"
  },
  "26101": {
    "county_name": "Manistee County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "101",
    "class_fips": "H1"
  },
  "26103": {
    "county_name": "Marquette County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "103",
    "class_fips": "H1"
  },
  "26105": {
    "county_name": "Mason County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "105",
    "class_fips": "H1"
  },
  "26107": {
    "county_name": "Mecosta County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "107",
    "class_fips": "H1"
  },
  "26109": {
    "county_name": "Menominee County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "109",
    "class_fips": "H1"
  },
  "26111": {
    "county_name": "Midland County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "111",
    "class_fips": "H1"
  },
  "26113": {
    "county_name": "Missaukee County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "113",
    "class_fips": "H1"
  },
  "26115": {
    "county_name": "Monroe County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "115",
    "class_fips": "H1"
  },
  "26117": {
    "county_name": "Montcalm County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "117",
    "class_fips": "H1"
  },
  "26119": {
    "county_name": "Montmorency County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "119",
    "class_fips": "H1"
  },
  "26121": {
    "county_name": "Muskegon County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "121",
    "class_fips": "H1"
  },
  "26123": {
    "county_name": "Newaygo County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "123",
    "class_fips": "H1"
  },
  "26125": {
    "county_name": "Oakland County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "125",
    "class_fips": "H1"
  },
  "26127": {
    "county_name": "Oceana County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "127",
    "class_fips": "H1"
  },
  "26129": {
    "county_name": "Ogemaw County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "129",
    "class_fips": "H1"
  },
  "26131": {
    "county_name": "Ontonagon County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "131",
    "class_fips": "H1"
  },
  "26133": {
    "county_name": "Osceola County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "133",
    "class_fips": "H1"
  },
  "26135": {
    "county_name": "Oscoda County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "135",
    "class_fips": "H1"
  },
  "26137": {
    "county_name": "Otsego County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "137",
    "class_fips": "H1"
  },
  "26139": {
    "county_name": "Ottawa County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "139",
    "class_fips": "H1"
  },
  "26141": {
    "county_name": "Presque Isle County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "141",
    "class_fips": "H1"
  },
  "26143": {
    "county_name": "Roscommon County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "143",
    "class_fips": "H1"
  },
  "26145": {
    "county_name": "Saginaw County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "145",
    "class_fips": "H1"
  },
  "26147": {
    "county_name": "St. Clair County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "147",
    "class_fips": "H1"
  },
  "26149": {
    "county_name": "St. Joseph County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "149",
    "class_fips": "H1"
  },
  "26151": {
    "county_name": "Sanilac County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "151",
    "class_fips": "H1"
  },
  "26153": {
    "county_name": "Schoolcraft County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "153",
    "class_fips": "H1"
  },
  "26155": {
    "county_name": "Shiawassee County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "155",
    "class_fips": "H1"
  },
  "26157": {
    "county_name": "Tuscola County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "157",
    "class_fips": "H1"
  },
  "26159": {
    "county_name": "Van Buren County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "159",
    "class_fips": "H1"
  },
  "26161": {
    "county_name": "Washtenaw County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "161",
    "class_fips": "H1"
  },
  "26163": {
    "county_name": "Wayne County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "163",
    "class_fips": "H1"
  },
  "26165": {
    "county_name": "Wexford County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "165",
    "class_fips": "H1"
  },
  "27001": {
    "county_name": "Aitkin County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "27003": {
    "county_name": "Anoka County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "27005": {
    "county_name": "Becker County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "27007": {
    "county_name": "Beltrami County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "27009": {
    "county_name": "Benton County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "27011": {
    "county_name": "Big Stone County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "27013": {
    "county_name": "Blue Earth County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "27015": {
    "county_name": "Brown County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "27017": {
    "county_name": "Carlton County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "27019": {
    "county_name": "Carver County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "27021": {
    "county_name": "Cass County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "27023": {
    "county_name": "Chippewa County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "27025": {
    "county_name": "Chisago County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "27027": {
    "county_name": "Clay County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "27029": {
    "county_name": "Clearwater County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "27031": {
    "county_name": "Cook County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "27033": {
    "county_name": "Cottonwood County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "27035": {
    "county_name": "Crow Wing County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "27037": {
    "county_name": "Dakota County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "27039": {
    "county_name": "Dodge County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "27041": {
    "county_name": "Douglas County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "27043": {
    "county_name": "Faribault County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "27045": {
    "county_name": "Fillmore County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "27047": {
    "county_name": "Freeborn County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "27049": {
    "county_name": "Goodhue County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "27051": {
    "county_name": "Grant County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "27053": {
    "county_name": "Hennepin County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "27055": {
    "county_name": "Houston County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "27057": {
    "county_name": "Hubbard County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "27059": {
    "county_name": "Isanti County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "27061": {
    "county_name": "Itasca County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "27063": {
    "county_name": "Jackson County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "27065": {
    "county_name": "Kanabec County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "27067": {
    "county_name": "Kandiyohi County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "27069": {
    "county_name": "Kittson County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "27071": {
    "county_name": "Koochiching County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "27073": {
    "county_name": "Lac qui Parle County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "27075": {
    "county_name": "Lake County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "27077": {
    "county_name": "Lake of the Woods County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "27079": {
    "county_name": "Le Sueur County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "27081": {
    "county_name": "Lincoln County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "081",
    "class_fips": "H1"
  },
  "27083": {
    "county_name": "Lyon County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "27085": {
    "county_name": "McLeod County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "085",
    "class_fips": "H1"
  },
  "27087": {
    "county_name": "Mahnomen County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "27089": {
    "county_name": "Marshall County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "089",
    "class_fips": "H1"
  },
  "27091": {
    "county_name": "Martin County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "091",
    "class_fips": "H1"
  },
  "27093": {
    "county_name": "Meeker County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "093",
    "class_fips": "H1"
  },
  "27095": {
    "county_name": "Mille Lacs County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "095",
    "class_fips": "H1"
  },
  "27097": {
    "county_name": "Morrison County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "097",
    "class_fips": "H1"
  },
  "27099": {
    "county_name": "Mower County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "099",
    "class_fips": "H1"
  },
  "27101": {
    "county_name": "Murray County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "101",
    "class_fips": "H1"
  },
  "27103": {
    "county_name": "Nicollet County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "103",
    "class_fips": "H1"
  },
  "27105": {
    "county_name": "Nobles County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "105",
    "class_fips": "H1"
  },
  "27107": {
    "county_name": "Norman County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "107",
    "class_fips": "H1"
  },
  "27109": {
    "county_name": "Olmsted County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "109",
    "class_fips": "H1"
  },
  "27111": {
    "county_name": "Otter Tail County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "111",
    "class_fips": "H1"
  },
  "27113": {
    "county_name": "Pennington County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "113",
    "class_fips": "H1"
  },
  "27115": {
    "county_name": "Pine County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "115",
    "class_fips": "H1"
  },
  "27117": {
    "county_name": "Pipestone County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "117",
    "class_fips": "H1"
  },
  "27119": {
    "county_name": "Polk County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "119",
    "class_fips": "H1"
  },
  "27121": {
    "county_name": "Pope County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "121",
    "class_fips": "H1"
  },
  "27123": {
    "county_name": "Ramsey County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "123",
    "class_fips": "H1"
  },
  "27125": {
    "county_name": "Red Lake County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "125",
    "class_fips": "H1"
  },
  "27127": {
    "county_name": "Redwood County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "127",
    "class_fips": "H1"
  },
  "27129": {
    "county_name": "Renville County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "129",
    "class_fips": "H1"
  },
  "27131": {
    "county_name": "Rice County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "131",
    "class_fips": "H1"
  },
  "27133": {
    "county_name": "Rock County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "133",
    "class_fips": "H1"
  },
  "27135": {
    "county_name": "Roseau County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "135",
    "class_fips": "H1"
  },
  "27137": {
    "county_name": "St. Louis County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "137",
    "class_fips": "H1"
  },
  "27139": {
    "county_name": "Scott County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "139",
    "class_fips": "H1"
  },
  "27141": {
    "county_name": "Sherburne County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "141",
    "class_fips": "H1"
  },
  "27143": {
    "county_name": "Sibley County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "143",
    "class_fips": "H1"
  },
  "27145": {
    "county_name": "Stearns County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "145",
    "class_fips": "H1"
  },
  "27147": {
    "county_name": "Steele County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "147",
    "class_fips": "H1"
  },
  "27149": {
    "county_name": "Stevens County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "149",
    "class_fips": "H1"
  },
  "27151": {
    "county_name": "Swift County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "151",
    "class_fips": "H1"
  },
  "27153": {
    "county_name": "Todd County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "153",
    "class_fips": "H1"
  },
  "27155": {
    "county_name": "Traverse County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "155",
    "class_fips": "H1"
  },
  "27157": {
    "county_name": "Wabasha County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "157",
    "class_fips": "H1"
  },
  "27159": {
    "county_name": "Wadena County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "159",
    "class_fips": "H1"
  },
  "27161": {
    "county_name": "Waseca County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "161",
    "class_fips": "H1"
  },
  "27163": {
    "county_name": "Washington County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "163",
    "class_fips": "H1"
  },
  "27165": {
    "county_name": "Watonwan County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "165",
    "class_fips": "H1"
  },
  "27167": {
    "county_name": "Wilkin County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "167",
    "class_fips": "H1"
  },
  "27169": {
    "county_name": "Winona County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "169",
    "class_fips": "H1"
  },
  "27171": {
    "county_name": "Wright County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "171",
    "class_fips": "H1"
  },
  "27173": {
    "county_name": "Yellow Medicine County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "173",
    "class_fips": "H1"
  },
  "28001": {
    "county_name": "Adams County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "28003": {
    "county_name": "Alcorn County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "28005": {
    "county_name": "Amite County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "28007": {
    "county_name": "Attala County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "28009": {
    "county_name": "Benton County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "28011": {
    "county_name": "Bolivar County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "28013": {
    "county_name": "Calhoun County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "28015": {
    "county_name": "Carroll County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "28017": {
    "county_name": "Chickasaw County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "28019": {
    "county_name": "Choctaw County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "28021": {
    "county_name": "Claiborne County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "28023": {
    "county_name": "Clarke County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "28025": {
    "county_name": "Clay County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "28027": {
    "county_name": "Coahoma County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "28029": {
    "county_name": "Copiah County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "28031": {
    "county_name": "Covington County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "28033": {
    "county_name": "DeSoto County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "28035": {
    "county_name": "Forrest County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "28037": {
    "county_name": "Franklin County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "28039": {
    "county_name": "George County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "28041": {
    "county_name": "Greene County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "28043": {
    "county_name": "Grenada County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "28045": {
    "county_name": "Hancock County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "28047": {
    "county_name": "Harrison County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "28049": {
    "county_name": "Hinds County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "28051": {
    "county_name": "Holmes County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "28053": {
    "county_name": "Humphreys County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "28055": {
    "county_name": "Issaquena County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "28057": {
    "county_name": "Itawamba County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "28059": {
    "county_name": "Jackson County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "28061": {
    "county_name": "Jasper County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "28063": {
    "county_name": "Jefferson County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "28065": {
    "county_name": "Jefferson Davis County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "28067": {
    "county_name": "Jones County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "28069": {
    "county_name": "Kemper County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "28071": {
    "county_name": "Lafayette County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "28073": {
    "county_name": "Lamar County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "28075": {
    "county_name": "Lauderdale County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "28077": {
    "county_name": "Lawrence County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "28079": {
    "county_name": "Leake County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "28081": {
    "county_name": "Lee County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "081",
    "class_fips": "H1"
  },
  "28083": {
    "county_name": "Leflore County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "28085": {
    "county_name": "Lincoln County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "085",
    "class_fips": "H1"
  },
  "28087": {
    "county_name": "Lowndes County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "28089": {
    "county_name": "Madison County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "089",
    "class_fips": "H1"
  },
  "28091": {
    "county_name": "Marion County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "091",
    "class_fips": "H1"
  },
  "28093": {
    "county_name": "Marshall County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "093",
    "class_fips": "H1"
  },
  "28095": {
    "county_name": "Monroe County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "095",
    "class_fips": "H1"
  },
  "28097": {
    "county_name": "Montgomery County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "097",
    "class_fips": "H1"
  },
  "28099": {
    "county_name": "Neshoba County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "099",
    "class_fips": "H1"
  },
  "28101": {
    "county_name": "Newton County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "101",
    "class_fips": "H1"
  },
  "28103": {
    "county_name": "Noxubee County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "103",
    "class_fips": "H1"
  },
  "28105": {
    "county_name": "Oktibbeha County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "105",
    "class_fips": "H1"
  },
  "28107": {
    "county_name": "Panola County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "107",
    "class_fips": "H1"
  },
  "28109": {
    "county_name": "Pearl River County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "109",
    "class_fips": "H1"
  },
  "28111": {
    "county_name": "Perry County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "111",
    "class_fips": "H1"
  },
  "28113": {
    "county_name": "Pike County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "113",
    "class_fips": "H1"
  },
  "28115": {
    "county_name": "Pontotoc County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "115",
    "class_fips": "H1"
  },
  "28117": {
    "county_name": "Prentiss County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "117",
    "class_fips": "H1"
  },
  "28119": {
    "county_name": "Quitman County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "119",
    "class_fips": "H1"
  },
  "28121": {
    "county_name": "Rankin County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "121",
    "class_fips": "H1"
  },
  "28123": {
    "county_name": "Scott County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "123",
    "class_fips": "H1"
  },
  "28125": {
    "county_name": "Sharkey County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "125",
    "class_fips": "H1"
  },
  "28127": {
    "county_name": "Simpson County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "127",
    "class_fips": "H1"
  },
  "28129": {
    "county_name": "Smith County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "129",
    "class_fips": "H1"
  },
  "28131": {
    "county_name": "Stone County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "131",
    "class_fips": "H1"
  },
  "28133": {
    "county_name": "Sunflower County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "133",
    "class_fips": "H1"
  },
  "28135": {
    "county_name": "Tallahatchie County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "135",
    "class_fips": "H1"
  },
  "28137": {
    "county_name": "Tate County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "137",
    "class_fips": "H1"
  },
  "28139": {
    "county_name": "Tippah County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "139",
    "class_fips": "H1"
  },
  "28141": {
    "county_name": "Tishomingo County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "141",
    "class_fips": "H1"
  },
  "28143": {
    "county_name": "Tunica County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "143",
    "class_fips": "H1"
  },
  "28145": {
    "county_name": "Union County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "145",
    "class_fips": "H1"
  },
  "28147": {
    "county_name": "Walthall County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "147",
    "class_fips": "H1"
  },
  "28149": {
    "county_name": "Warren County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "149",
    "class_fips": "H1"
  },
  "28151": {
    "county_name": "Washington County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "151",
    "class_fips": "H1"
  },
  "28153": {
    "county_name": "Wayne County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "153",
    "class_fips": "H1"
  },
  "28155": {
    "county_name": "Webster County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "155",
    "class_fips": "H1"
  },
  "28157": {
    "county_name": "Wilkinson County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "157",
    "class_fips": "H1"
  },
  "28159": {
    "county_name": "Winston County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "159",
    "class_fips": "H1"
  },
  "28161": {
    "county_name": "Yalobusha County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "161",
    "class_fips": "H1"
  },
  "28163": {
    "county_name": "Yazoo County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "163",
    "class_fips": "H1"
  },
  "29001": {
    "county_name": "Adair County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "29003": {
    "county_name": "Andrew County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "29005": {
    "county_name": "Atchison County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "29007": {
    "county_name": "Audrain County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "29009": {
    "county_name": "Barry County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "29011": {
    "county_name": "Barton County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "29013": {
    "county_name": "Bates County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "29015": {
    "county_name": "Benton County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "29017": {
    "county_name": "Bollinger County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "29019": {
    "county_name": "Boone County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "29021": {
    "county_name": "Buchanan County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "29023": {
    "county_name": "Butler County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "29025": {
    "county_name": "Caldwell County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "29027": {
    "county_name": "Callaway County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "29029": {
    "county_name": "Camden County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "29031": {
    "county_name": "Cape Girardeau County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "29033": {
    "county_name": "Carroll County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "29035": {
    "county_name": "Carter County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "29037": {
    "county_name": "Cass County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "29039": {
    "county_name": "Cedar County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "29041": {
    "county_name": "Chariton County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "29043": {
    "county_name": "Christian County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "29045": {
    "county_name": "Clark County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "29047": {
    "county_name": "Clay County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "29049": {
    "county_name": "Clinton County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "29051": {
    "county_name": "Cole County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "29053": {
    "county_name": "Cooper County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "29055": {
    "county_name": "Crawford County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "29057": {
    "county_name": "Dade County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "29059": {
    "county_name": "Dallas County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "29061": {
    "county_name": "Daviess County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "29063": {
    "county_name": "DeKalb County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "29065": {
    "county_name": "Dent County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "29067": {
    "county_name": "Douglas County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "29069": {
    "county_name": "Dunklin County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "29071": {
    "county_name": "Franklin County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "29073": {
    "county_name": "Gasconade County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "29075": {
    "county_name": "Gentry County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "29077": {
    "county_name": "Greene County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "29079": {
    "county_name": "Grundy County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "29081": {
    "county_name": "Harrison County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "081",
    "class_fips": "H1"
  },
  "29083": {
    "county_name": "Henry County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "29085": {
    "county_name": "Hickory County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "085",
    "class_fips": "H1"
  },
  "29087": {
    "county_name": "Holt County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "29089": {
    "county_name": "Howard County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "089",
    "class_fips": "H1"
  },
  "29091": {
    "county_name": "Howell County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "091",
    "class_fips": "H1"
  },
  "29093": {
    "county_name": "Iron County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "093",
    "class_fips": "H1"
  },
  "29095": {
    "county_name": "Jackson County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "095",
    "class_fips": "H1"
  },
  "29097": {
    "county_name": "Jasper County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "097",
    "class_fips": "H1"
  },
  "29099": {
    "county_name": "Jefferson County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "099",
    "class_fips": "H1"
  },
  "29101": {
    "county_name": "Johnson County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "101",
    "class_fips": "H1"
  },
  "29103": {
    "county_name": "Knox County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "103",
    "class_fips": "H1"
  },
  "29105": {
    "county_name": "Laclede County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "105",
    "class_fips": "H1"
  },
  "29107": {
    "county_name": "Lafayette County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "107",
    "class_fips": "H1"
  },
  "29109": {
    "county_name": "Lawrence County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "109",
    "class_fips": "H1"
  },
  "29111": {
    "county_name": "Lewis County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "111",
    "class_fips": "H1"
  },
  "29113": {
    "county_name": "Lincoln County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "113",
    "class_fips": "H1"
  },
  "29115": {
    "county_name": "Linn County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "115",
    "class_fips": "H1"
  },
  "29117": {
    "county_name": "Livingston County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "117",
    "class_fips": "H1"
  },
  "29119": {
    "county_name": "McDonald County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "119",
    "class_fips": "H1"
  },
  "29121": {
    "county_name": "Macon County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "121",
    "class_fips": "H1"
  },
  "29123": {
    "county_name": "Madison County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "123",
    "class_fips": "H1"
  },
  "29125": {
    "county_name": "Maries County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "125",
    "class_fips": "H1"
  },
  "29127": {
    "county_name": "Marion County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "127",
    "class_fips": "H1"
  },
  "29129": {
    "county_name": "Mercer County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "129",
    "class_fips": "H1"
  },
  "29131": {
    "county_name": "Miller County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "131",
    "class_fips": "H1"
  },
  "29133": {
    "county_name": "Mississippi County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "133",
    "class_fips": "H1"
  },
  "29135": {
    "county_name": "Moniteau County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "135",
    "class_fips": "H1"
  },
  "29137": {
    "county_name": "Monroe County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "137",
    "class_fips": "H1"
  },
  "29139": {
    "county_name": "Montgomery County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "139",
    "class_fips": "H1"
  },
  "29141": {
    "county_name": "Morgan County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "141",
    "class_fips": "H1"
  },
  "29143": {
    "county_name": "New Madrid County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "143",
    "class_fips": "H1"
  },
  "29145": {
    "county_name": "Newton County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "145",
    "class_fips": "H1"
  },
  "29147": {
    "county_name": "Nodaway County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "147",
    "class_fips": "H1"
  },
  "29149": {
    "county_name": "Oregon County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "149",
    "class_fips": "H1"
  },
  "29151": {
    "county_name": "Osage County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "151",
    "class_fips": "H1"
  },
  "29153": {
    "county_name": "Ozark County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "153",
    "class_fips": "H1"
  },
  "29155": {
    "county_name": "Pemiscot County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "155",
    "class_fips": "H1"
  },
  "29157": {
    "county_name": "Perry County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "157",
    "class_fips": "H1"
  },
  "29159": {
    "county_name": "Pettis County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "159",
    "class_fips": "H1"
  },
  "29161": {
    "county_name": "Phelps County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "161",
    "class_fips": "H1"
  },
  "29163": {
    "county_name": "Pike County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "163",
    "class_fips": "H1"
  },
  "29165": {
    "county_name": "Platte County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "165",
    "class_fips": "H1"
  },
  "29167": {
    "county_name": "Polk County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "167",
    "class_fips": "H1"
  },
  "29169": {
    "county_name": "Pulaski County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "169",
    "class_fips": "H1"
  },
  "29171": {
    "county_name": "Putnam County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "171",
    "class_fips": "H1"
  },
  "29173": {
    "county_name": "Ralls County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "173",
    "class_fips": "H1"
  },
  "29175": {
    "county_name": "Randolph County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "175",
    "class_fips": "H1"
  },
  "29177": {
    "county_name": "Ray County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "177",
    "class_fips": "H1"
  },
  "29179": {
    "county_name": "Reynolds County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "179",
    "class_fips": "H1"
  },
  "29181": {
    "county_name": "Ripley County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "181",
    "class_fips": "H1"
  },
  "29183": {
    "county_name": "St. Charles County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "183",
    "class_fips": "H1"
  },
  "29185": {
    "county_name": "St. Clair County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "185",
    "class_fips": "H1"
  },
  "29186": {
    "county_name": "Ste. Genevieve County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "186",
    "class_fips": "H1"
  },
  "29187": {
    "county_name": "St. Francois County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "187",
    "class_fips": "H1"
  },
  "29189": {
    "county_name": "St. Louis County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "189",
    "class_fips": "H1"
  },
  "29195": {
    "county_name": "Saline County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "195",
    "class_fips": "H1"
  },
  "29197": {
    "county_name": "Schuyler County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "197",
    "class_fips": "H1"
  },
  "29199": {
    "county_name": "Scotland County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "199",
    "class_fips": "H1"
  },
  "29201": {
    "county_name": "Scott County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "201",
    "class_fips": "H1"
  },
  "29203": {
    "county_name": "Shannon County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "203",
    "class_fips": "H1"
  },
  "29205": {
    "county_name": "Shelby County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "205",
    "class_fips": "H1"
  },
  "29207": {
    "county_name": "Stoddard County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "207",
    "class_fips": "H1"
  },
  "29209": {
    "county_name": "Stone County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "209",
    "class_fips": "H1"
  },
  "29211": {
    "county_name": "Sullivan County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "211",
    "class_fips": "H1"
  },
  "29213": {
    "county_name": "Taney County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "213",
    "class_fips": "H1"
  },
  "29215": {
    "county_name": "Texas County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "215",
    "class_fips": "H1"
  },
  "29217": {
    "county_name": "Vernon County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "217",
    "class_fips": "H1"
  },
  "29219": {
    "county_name": "Warren County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "219",
    "class_fips": "H1"
  },
  "29221": {
    "county_name": "Washington County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "221",
    "class_fips": "H1"
  },
  "29223": {
    "county_name": "Wayne County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "223",
    "class_fips": "H1"
  },
  "29225": {
    "county_name": "Webster County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "225",
    "class_fips": "H1"
  },
  "29227": {
    "county_name": "Worth County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "227",
    "class_fips": "H1"
  },
  "29229": {
    "county_name": "Wright County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "229",
    "class_fips": "H1"
  },
  "29510": {
    "county_name": "St. Louis city",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "510",
    "class_fips": "C7"
  },
  "30001": {
    "county_name": "Beaverhead County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "30003": {
    "county_name": "Big Horn County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "30005": {
    "county_name": "Blaine County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "30007": {
    "county_name": "Broadwater County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "30009": {
    "county_name": "Carbon County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "30011": {
    "county_name": "Carter County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "30013": {
    "county_name": "Cascade County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "30015": {
    "county_name": "Chouteau County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "30017": {
    "county_name": "Custer County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "30019": {
    "county_name": "Daniels County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "30021": {
    "county_name": "Dawson County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "30023": {
    "county_name": "Deer Lodge County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "023",
    "class_fips": "H6"
  },
  "30025": {
    "county_name": "Fallon County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "30027": {
    "county_name": "Fergus County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "30029": {
    "county_name": "Flathead County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "30031": {
    "county_name": "Gallatin County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "30033": {
    "county_name": "Garfield County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "30035": {
    "county_name": "Glacier County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "30037": {
    "county_name": "Golden Valley County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "30039": {
    "county_name": "Granite County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "30041": {
    "county_name": "Hill County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "30043": {
    "county_name": "Jefferson County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "30045": {
    "county_name": "Judith Basin County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "30047": {
    "county_name": "Lake County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "30049": {
    "county_name": "Lewis and Clark County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "30051": {
    "county_name": "Liberty County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "30053": {
    "county_name": "Lincoln County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "30055": {
    "county_name": "McCone County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "30057": {
    "county_name": "Madison County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "30059": {
    "county_name": "Meagher County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "30061": {
    "county_name": "Mineral County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "30063": {
    "county_name": "Missoula County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "30065": {
    "county_name": "Musselshell County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "30067": {
    "county_name": "Park County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "30069": {
    "county_name": "Petroleum County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "30071": {
    "county_name": "Phillips County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "30073": {
    "county_name": "Pondera County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "30075": {
    "county_name": "Powder River County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "30077": {
    "county_name": "Powell County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "30079": {
    "county_name": "Prairie County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "30081": {
    "county_name": "Ravalli County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "081",
    "class_fips": "H1"
  },
  "30083": {
    "county_name": "Richland County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "30085": {
    "county_name": "Roosevelt County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "085",
    "class_fips": "H1"
  },
  "30087": {
    "county_name": "Rosebud County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "30089": {
    "county_name": "Sanders County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "089",
    "class_fips": "H1"
  },
  "30091": {
    "county_name": "Sheridan County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "091",
    "class_fips": "H1"
  },
  "30093": {
    "county_name": "Silver Bow County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "093",
    "class_fips": "H6"
  },
  "30095": {
    "county_name": "Stillwater County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "095",
    "class_fips": "H1"
  },
  "30097": {
    "county_name": "Sweet Grass County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "097",
    "class_fips": "H1"
  },
  "30099": {
    "county_name": "Teton County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "099",
    "class_fips": "H1"
  },
  "30101": {
    "county_name": "Toole County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "101",
    "class_fips": "H1"
  },
  "30103": {
    "county_name": "Treasure County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "103",
    "class_fips": "H1"
  },
  "30105": {
    "county_name": "Valley County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "105",
    "class_fips": "H1"
  },
  "30107": {
    "county_name": "Wheatland County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "107",
    "class_fips": "H1"
  },
  "30109": {
    "county_name": "Wibaux County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "109",
    "class_fips": "H1"
  },
  "30111": {
    "county_name": "Yellowstone County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "111",
    "class_fips": "H1"
  },
  "31001": {
    "county_name": "Adams County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "31003": {
    "county_name": "Antelope County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "31005": {
    "county_name": "Arthur County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "31007": {
    "county_name": "Banner County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "31009": {
    "county_name": "Blaine County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "31011": {
    "county_name": "Boone County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "31013": {
    "county_name": "Box Butte County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "31015": {
    "county_name": "Boyd County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "31017": {
    "county_name": "Brown County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "31019": {
    "county_name": "Buffalo County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "31021": {
    "county_name": "Burt County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "31023": {
    "county_name": "Butler County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "31025": {
    "county_name": "Cass County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "31027": {
    "county_name": "Cedar County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "31029": {
    "county_name": "Chase County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "31031": {
    "county_name": "Cherry County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "31033": {
    "county_name": "Cheyenne County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "31035": {
    "county_name": "Clay County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "31037": {
    "county_name": "Colfax County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "31039": {
    "county_name": "Cuming County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "31041": {
    "county_name": "Custer County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "31043": {
    "county_name": "Dakota County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "31045": {
    "county_name": "Dawes County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "31047": {
    "county_name": "Dawson County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "31049": {
    "county_name": "Deuel County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "31051": {
    "county_name": "Dixon County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "31053": {
    "county_name": "Dodge County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "31055": {
    "county_name": "Douglas County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "31057": {
    "county_name": "Dundy County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "31059": {
    "county_name": "Fillmore County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "31061": {
    "county_name": "Franklin County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "31063": {
    "county_name": "Frontier County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "31065": {
    "county_name": "Furnas County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "31067": {
    "county_name": "Gage County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "31069": {
    "county_name": "Garden County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "31071": {
    "county_name": "Garfield County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "31073": {
    "county_name": "Gosper County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "31075": {
    "county_name": "Grant County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "31077": {
    "county_name": "Greeley County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "31079": {
    "county_name": "Hall County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "31081": {
    "county_name": "Hamilton County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "081",
    "class_fips": "H1"
  },
  "31083": {
    "county_name": "Harlan County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "31085": {
    "county_name": "Hayes County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "085",
    "class_fips": "H1"
  },
  "31087": {
    "county_name": "Hitchcock County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "31089": {
    "county_name": "Holt County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "089",
    "class_fips": "H1"
  },
  "31091": {
    "county_name": "Hooker County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "091",
    "class_fips": "H1"
  },
  "31093": {
    "county_name": "Howard County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "093",
    "class_fips": "H1"
  },
  "31095": {
    "county_name": "Jefferson County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "095",
    "class_fips": "H1"
  },
  "31097": {
    "county_name": "Johnson County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "097",
    "class_fips": "H1"
  },
  "31099": {
    "county_name": "Kearney County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "099",
    "class_fips": "H1"
  },
  "31101": {
    "county_name": "Keith County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "101",
    "class_fips": "H1"
  },
  "31103": {
    "county_name": "Keya Paha County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "103",
    "class_fips": "H1"
  },
  "31105": {
    "county_name": "Kimball County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "105",
    "class_fips": "H1"
  },
  "31107": {
    "county_name": "Knox County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "107",
    "class_fips": "H1"
  },
  "31109": {
    "county_name": "Lancaster County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "109",
    "class_fips": "H1"
  },
  "31111": {
    "county_name": "Lincoln County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "111",
    "class_fips": "H1"
  },
  "31113": {
    "county_name": "Logan County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "113",
    "class_fips": "H1"
  },
  "31115": {
    "county_name": "Loup County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "115",
    "class_fips": "H1"
  },
  "31117": {
    "county_name": "McPherson County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "117",
    "class_fips": "H1"
  },
  "31119": {
    "county_name": "Madison County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "119",
    "class_fips": "H1"
  },
  "31121": {
    "county_name": "Merrick County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "121",
    "class_fips": "H1"
  },
  "31123": {
    "county_name": "Morrill County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "123",
    "class_fips": "H1"
  },
  "31125": {
    "county_name": "Nance County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "125",
    "class_fips": "H1"
  },
  "31127": {
    "county_name": "Nemaha County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "127",
    "class_fips": "H1"
  },
  "31129": {
    "county_name": "Nuckolls County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "129",
    "class_fips": "H1"
  },
  "31131": {
    "county_name": "Otoe County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "131",
    "class_fips": "H1"
  },
  "31133": {
    "county_name": "Pawnee County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "133",
    "class_fips": "H1"
  },
  "31135": {
    "county_name": "Perkins County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "135",
    "class_fips": "H1"
  },
  "31137": {
    "county_name": "Phelps County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "137",
    "class_fips": "H1"
  },
  "31139": {
    "county_name": "Pierce County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "139",
    "class_fips": "H1"
  },
  "31141": {
    "county_name": "Platte County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "141",
    "class_fips": "H1"
  },
  "31143": {
    "county_name": "Polk County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "143",
    "class_fips": "H1"
  },
  "31145": {
    "county_name": "Red Willow County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "145",
    "class_fips": "H1"
  },
  "31147": {
    "county_name": "Richardson County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "147",
    "class_fips": "H1"
  },
  "31149": {
    "county_name": "Rock County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "149",
    "class_fips": "H1"
  },
  "31151": {
    "county_name": "Saline County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "151",
    "class_fips": "H1"
  },
  "31153": {
    "county_name": "Sarpy County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "153",
    "class_fips": "H1"
  },
  "31155": {
    "county_name": "Saunders County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "155",
    "class_fips": "H1"
  },
  "31157": {
    "county_name": "Scotts Bluff County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "157",
    "class_fips": "H1"
  },
  "31159": {
    "county_name": "Seward County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "159",
    "class_fips": "H1"
  },
  "31161": {
    "county_name": "Sheridan County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "161",
    "class_fips": "H1"
  },
  "31163": {
    "county_name": "Sherman County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "163",
    "class_fips": "H1"
  },
  "31165": {
    "county_name": "Sioux County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "165",
    "class_fips": "H1"
  },
  "31167": {
    "county_name": "Stanton County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "167",
    "class_fips": "H1"
  },
  "31169": {
    "county_name": "Thayer County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "169",
    "class_fips": "H1"
  },
  "31171": {
    "county_name": "Thomas County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "171",
    "class_fips": "H1"
  },
  "31173": {
    "county_name": "Thurston County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "173",
    "class_fips": "H1"
  },
  "31175": {
    "county_name": "Valley County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "175",
    "class_fips": "H1"
  },
  "31177": {
    "county_name": "Washington County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "177",
    "class_fips": "H1"
  },
  "31179": {
    "county_name": "Wayne County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "179",
    "class_fips": "H1"
  },
  "31181": {
    "county_name": "Webster County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "181",
    "class_fips": "H1"
  },
  "31183": {
    "county_name": "Wheeler County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "183",
    "class_fips": "H1"
  },
  "31185": {
    "county_name": "York County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "185",
    "class_fips": "H1"
  },
  "32001": {
    "county_name": "Churchill County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "32003": {
    "county_name": "Clark County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "32005": {
    "county_name": "Douglas County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "32007": {
    "county_name": "Elko County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "32009": {
    "county_name": "Esmeralda County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "32011": {
    "county_name": "Eureka County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "32013": {
    "county_name": "Humboldt County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "32015": {
    "county_name": "Lander County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "32017": {
    "county_name": "Lincoln County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "32019": {
    "county_name": "Lyon County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "32021": {
    "county_name": "Mineral County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "32023": {
    "county_name": "Nye County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "32027": {
    "county_name": "Pershing County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "32029": {
    "county_name": "Storey County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "32031": {
    "county_name": "Washoe County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "32033": {
    "county_name": "White Pine County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "32510": {
    "county_name": "Carson City",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "510",
    "class_fips": "C7"
  },
  "33001": {
    "county_name": "Belknap County",
    "state_code": "NH",
    "state_fips": "33",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "33003": {
    "county_name": "Carroll County",
    "state_code": "NH",
    "state_fips": "33",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "33005": {
    "county_name": "Cheshire County",
    "state_code": "NH",
    "state_fips": "33",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "33007": {
    "county_name": "Coos County",
    "state_code": "NH",
    "state_fips": "33",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "33009": {
    "county_name": "Grafton County",
    "state_code": "NH",
    "state_fips": "33",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "33011": {
    "county_name": "Hillsborough County",
    "state_code": "NH",
    "state_fips": "33",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "33013": {
    "county_name": "Merrimack County",
    "state_code": "NH",
    "state_fips": "33",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "33015": {
    "county_name": "Rockingham County",
    "state_code": "NH",
    "state_fips": "33",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "33017": {
    "county_name": "Strafford County",
    "state_code": "NH",
    "state_fips": "33",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "33019": {
    "county_name": "Sullivan County",
    "state_code": "NH",
    "state_fips": "33",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "34001": {
    "county_name": "Atlantic County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "34003": {
    "county_name": "Bergen County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "34005": {
    "county_name": "Burlington County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "34007": {
    "county_name": "Camden County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "34009": {
    "county_name": "Cape May County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "34011": {
    "county_name": "Cumberland County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "34013": {
    "county_name": "Essex County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "34015": {
    "county_name": "Gloucester County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "34017": {
    "county_name": "Hudson County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "34019": {
    "county_name": "Hunterdon County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "34021": {
    "county_name": "Mercer County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "34023": {
    "county_name": "Middlesex County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "34025": {
    "county_name": "Monmouth County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "34027": {
    "county_name": "Morris County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "34029": {
    "county_name": "Ocean County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "34031": {
    "county_name": "Passaic County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "34033": {
    "county_name": "Salem County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "34035": {
    "county_name": "Somerset County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "34037": {
    "county_name": "Sussex County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "34039": {
    "county_name": "Union County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "34041": {
    "county_name": "Warren County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "35001": {
    "county_name": "Bernalillo County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "35003": {
    "county_name": "Catron County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "35005": {
    "county_name": "Chaves County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "35006": {
    "county_name": "Cibola County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "006",
    "class_fips": "H1"
  },
  "35007": {
    "county_name": "Colfax County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "35009": {
    "county_name": "Curry County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "35011": {
    "county_name": "De Baca County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "35013": {
    "county_name": "Dona Ana County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "35015": {
    "county_name": "Eddy County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "35017": {
    "county_name": "Grant County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "35019": {
    "county_name": "Guadalupe County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "35021": {
    "county_name": "Harding County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "35023": {
    "county_name": "Hidalgo County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "35025": {
    "county_name": "Lea County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "35027": {
    "county_name": "Lincoln County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "35028": {
    "county_name": "Los Alamos County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "028",
    "class_fips": "H1"
  },
  "35029": {
    "county_name": "Luna County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "35031": {
    "county_name": "McKinley County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "35033": {
    "county_name": "Mora County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "35035": {
    "county_name": "Otero County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "35037": {
    "county_name": "Quay County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "35039": {
    "county_name": "Rio Arriba County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "35041": {
    "county_name": "Roosevelt County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "35043": {
    "county_name": "Sandoval County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "35045": {
    "county_name": "San Juan County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "35047": {
    "county_name": "San Miguel County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "35049": {
    "county_name": "Santa Fe County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "35051": {
    "county_name": "Sierra County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "35053": {
    "county_name": "Socorro County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "35055": {
    "county_name": "Taos County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "35057": {
    "county_name": "Torrance County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "35059": {
    "county_name": "Union County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "35061": {
    "county_name": "Valencia County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "36001": {
    "county_name": "Albany County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "36003": {
    "county_name": "Allegany County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "36005": {
    "county_name": "Bronx County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "005",
    "class_fips": "H6"
  },
  "36007": {
    "county_name": "Broome County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "36009": {
    "county_name": "Cattaraugus County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "36011": {
    "county_name": "Cayuga County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "36013": {
    "county_name": "Chautauqua County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "36015": {
    "county_name": "Chemung County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "36017": {
    "county_name": "Chenango County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "36019": {
    "county_name": "Clinton County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "36021": {
    "county_name": "Columbia County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "36023": {
    "county_name": "Cortland County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "36025": {
    "county_name": "Delaware County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "36027": {
    "county_name": "Dutchess County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "36029": {
    "county_name": "Erie County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "36031": {
    "county_name": "Essex County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "36033": {
    "county_name": "Franklin County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "36035": {
    "county_name": "Fulton County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "36037": {
    "county_name": "Genesee County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "36039": {
    "county_name": "Greene County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "36041": {
    "county_name": "Hamilton County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "36043": {
    "county_name": "Herkimer County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "36045": {
    "county_name": "Jefferson County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "36047": {
    "county_name": "Kings County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "047",
    "class_fips": "H6"
  },
  "36049": {
    "county_name": "Lewis County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "36051": {
    "county_name": "Livingston County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "36053": {
    "county_name": "Madison County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "36055": {
    "county_name": "Monroe County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "36057": {
    "county_name": "Montgomery County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "36059": {
    "county_name": "Nassau County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "36061": {
    "county_name": "New York County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "061",
    "class_fips": "H6"
  },
  "36063": {
    "county_name": "Niagara County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "36065": {
    "county_name": "Oneida County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "36067": {
    "county_name": "Onondaga County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "36069": {
    "county_name": "Ontario County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "36071": {
    "county_name": "Orange County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "36073": {
    "county_name": "Orleans County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "36075": {
    "county_name": "Oswego County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "36077": {
    "county_name": "Otsego County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "36079": {
    "county_name": "Putnam County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "36081": {
    "county_name": "Queens County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "081",
    "class_fips": "H6"
  },
  "36083": {
    "county_name": "Rensselaer County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "36085": {
    "county_name": "Richmond County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "085",
    "class_fips": "H6"
  },
  "36087": {
    "county_name": "Rockland County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "36089": {
    "county_name": "St. Lawrence County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "089",
    "class_fips": "H1"
  },
  "36091": {
    "county_name": "Saratoga County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "091",
    "class_fips": "H1"
  },
  "36093": {
    "county_name": "Schenectady County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "093",
    "class_fips": "H1"
  },
  "36095": {
    "county_name": "Schoharie County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "095",
    "class_fips": "H1"
  },
  "36097": {
    "county_name": "Schuyler County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "097",
    "class_fips": "H1"
  },
  "36099": {
    "county_name": "Seneca County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "099",
    "class_fips": "H1"
  },
  "36101": {
    "county_name": "Steuben County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "101",
    "class_fips": "H1"
  },
  "36103": {
    "county_name": "Suffolk County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "103",
    "class_fips": "H1"
  },
  "36105": {
    "county_name": "Sullivan County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "105",
    "class_fips": "H1"
  },
  "36107": {
    "county_name": "Tioga County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "107",
    "class_fips": "H1"
  },
  "36109": {
    "county_name": "Tompkins County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "109",
    "class_fips": "H1"
  },
  "36111": {
    "county_name": "Ulster County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "111",
    "class_fips": "H1"
  },
  "36113": {
    "county_name": "Warren County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "113",
    "class_fips": "H1"
  },
  "36115": {
    "county_name": "Washington County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "115",
    "class_fips": "H1"
  },
  "36117": {
    "county_name": "Wayne County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "117",
    "class_fips": "H1"
  },
  "36119": {
    "county_name": "Westchester County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "119",
    "class_fips": "H1"
  },
  "36121": {
    "county_name": "Wyoming County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "121",
    "class_fips": "H1"
  },
  "36123": {
    "county_name": "Yates County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "123",
    "class_fips": "H1"
  },
  "37001": {
    "county_name": "Alamance County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "37003": {
    "county_name": "Alexander County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "37005": {
    "county_name": "Alleghany County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "37007": {
    "county_name": "Anson County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "37009": {
    "county_name": "Ashe County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "37011": {
    "county_name": "Avery County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "37013": {
    "county_name": "Beaufort County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "37015": {
    "county_name": "Bertie County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "37017": {
    "county_name": "Bladen County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "37019": {
    "county_name": "Brunswick County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "37021": {
    "county_name": "Buncombe County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "37023": {
    "county_name": "Burke County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "37025": {
    "county_name": "Cabarrus County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "37027": {
    "county_name": "Caldwell County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "37029": {
    "county_name": "Camden County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "37031": {
    "county_name": "Carteret County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "37033": {
    "county_name": "Caswell County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "37035": {
    "county_name": "Catawba County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "37037": {
    "county_name": "Chatham County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "37039": {
    "county_name": "Cherokee County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "37041": {
    "county_name": "Chowan County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "37043": {
    "county_name": "Clay County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "37045": {
    "county_name": "Cleveland County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "37047": {
    "county_name": "Columbus County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "37049": {
    "county_name": "Craven County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "37051": {
    "county_name": "Cumberland County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "37053": {
    "county_name": "Currituck County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "37055": {
    "county_name": "Dare County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "37057": {
    "county_name": "Davidson County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "37059": {
    "county_name": "Davie County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "37061": {
    "county_name": "Duplin County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "37063": {
    "county_name": "Durham County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "37065": {
    "county_name": "Edgecombe County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "37067": {
    "county_name": "Forsyth County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "37069": {
    "county_name": "Franklin County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "37071": {
    "county_name": "Gaston County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "37073": {
    "county_name": "Gates County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "37075": {
    "county_name": "Graham County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "37077": {
    "county_name": "Granville County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "37079": {
    "county_name": "Greene County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "37081": {
    "county_name": "Guilford County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "081",
    "class_fips": "H1"
  },
  "37083": {
    "county_name": "Halifax County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "37085": {
    "county_name": "Harnett County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "085",
    "class_fips": "H1"
  },
  "37087": {
    "county_name": "Haywood County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "37089": {
    "county_name": "Henderson County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "089",
    "class_fips": "H1"
  },
  "37091": {
    "county_name": "Hertford County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "091",
    "class_fips": "H1"
  },
  "37093": {
    "county_name": "Hoke County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "093",
    "class_fips": "H1"
  },
  "37095": {
    "county_name": "Hyde County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "095",
    "class_fips": "H1"
  },
  "37097": {
    "county_name": "Iredell County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "097",
    "class_fips": "H1"
  },
  "37099": {
    "county_name": "Jackson County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "099",
    "class_fips": "H1"
  },
  "37101": {
    "county_name": "Johnston County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "101",
    "class_fips": "H1"
  },
  "37103": {
    "county_name": "Jones County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "103",
    "class_fips": "H1"
  },
  "37105": {
    "county_name": "Lee County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "105",
    "class_fips": "H1"
  },
  "37107": {
    "county_name": "Lenoir County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "107",
    "class_fips": "H1"
  },
  "37109": {
    "county_name": "Lincoln County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "109",
    "class_fips": "H1"
  },
  "37111": {
    "county_name": "McDowell County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "111",
    "class_fips": "H1"
  },
  "37113": {
    "county_name": "Macon County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "113",
    "class_fips": "H1"
  },
  "37115": {
    "county_name": "Madison County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "115",
    "class_fips": "H1"
  },
  "37117": {
    "county_name": "Martin County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "117",
    "class_fips": "H1"
  },
  "37119": {
    "county_name": "Mecklenburg County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "119",
    "class_fips": "H1"
  },
  "37121": {
    "county_name": "Mitchell County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "121",
    "class_fips": "H1"
  },
  "37123": {
    "county_name": "Montgomery County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "123",
    "class_fips": "H1"
  },
  "37125": {
    "county_name": "Moore County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "125",
    "class_fips": "H1"
  },
  "37127": {
    "county_name": "Nash County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "127",
    "class_fips": "H1"
  },
  "37129": {
    "county_name": "New Hanover County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "129",
    "class_fips": "H1"
  },
  "37131": {
    "county_name": "Northampton County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "131",
    "class_fips": "H1"
  },
  "37133": {
    "county_name": "Onslow County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "133",
    "class_fips": "H1"
  },
  "37135": {
    "county_name": "Orange County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "135",
    "class_fips": "H1"
  },
  "37137": {
    "county_name": "Pamlico County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "137",
    "class_fips": "H1"
  },
  "37139": {
    "county_name": "Pasquotank County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "139",
    "class_fips": "H1"
  },
  "37141": {
    "county_name": "Pender County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "141",
    "class_fips": "H1"
  },
  "37143": {
    "county_name": "Perquimans County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "143",
    "class_fips": "H1"
  },
  "37145": {
    "county_name": "Person County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "145",
    "class_fips": "H1"
  },
  "37147": {
    "county_name": "Pitt County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "147",
    "class_fips": "H1"
  },
  "37149": {
    "county_name": "Polk County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "149",
    "class_fips": "H1"
  },
  "37151": {
    "county_name": "Randolph County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "151",
    "class_fips": "H1"
  },
  "37153": {
    "county_name": "Richmond County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "153",
    "class_fips": "H1"
  },
  "37155": {
    "county_name": "Robeson County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "155",
    "class_fips": "H1"
  },
  "37157": {
    "county_name": "Rockingham County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "157",
    "class_fips": "H1"
  },
  "37159": {
    "county_name": "Rowan County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "159",
    "class_fips": "H1"
  },
  "37161": {
    "county_name": "Rutherford County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "161",
    "class_fips": "H1"
  },
  "37163": {
    "county_name": "Sampson County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "163",
    "class_fips": "H1"
  },
  "37165": {
    "county_name": "Scotland County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "165",
    "class_fips": "H1"
  },
  "37167": {
    "county_name": "Stanly County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "167",
    "class_fips": "H1"
  },
  "37169": {
    "county_name": "Stokes County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "169",
    "class_fips": "H1"
  },
  "37171": {
    "county_name": "Surry County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "171",
    "class_fips": "H1"
  },
  "37173": {
    "county_name": "Swain County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "173",
    "class_fips": "H1"
  },
  "37175": {
    "county_name": "Transylvania County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "175",
    "class_fips": "H1"
  },
  "37177": {
    "county_name": "Tyrrell County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "177",
    "class_fips": "H1"
  },
  "37179": {
    "county_name": "Union County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "179",
    "class_fips": "H1"
  },
  "37181": {
    "county_name": "Vance County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "181",
    "class_fips": "H1"
  },
  "37183": {
    "county_name": "Wake County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "183",
    "class_fips": "H1"
  },
  "37185": {
    "county_name": "Warren County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "185",
    "class_fips": "H1"
  },
  "37187": {
    "county_name": "Washington County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "187",
    "class_fips": "H1"
  },
  "37189": {
    "county_name": "Watauga County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "189",
    "class_fips": "H1"
  },
  "37191": {
    "county_name": "Wayne County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "191",
    "class_fips": "H1"
  },
  "37193": {
    "county_name": "Wilkes County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "193",
    "class_fips": "H1"
  },
  "37195": {
    "county_name": "Wilson County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "195",
    "class_fips": "H1"
  },
  "37197": {
    "county_name": "Yadkin County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "197",
    "class_fips": "H1"
  },
  "37199": {
    "county_name": "Yancey County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "199",
    "class_fips": "H1"
  },
  "38001": {
    "county_name": "Adams County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "38003": {
    "county_name": "Barnes County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "38005": {
    "county_name": "Benson County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "38007": {
    "county_name": "Billings County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "38009": {
    "county_name": "Bottineau County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "38011": {
    "county_name": "Bowman County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "38013": {
    "county_name": "Burke County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "38015": {
    "county_name": "Burleigh County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "38017": {
    "county_name": "Cass County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "38019": {
    "county_name": "Cavalier County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "38021": {
    "county_name": "Dickey County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "38023": {
    "county_name": "Divide County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "38025": {
    "county_name": "Dunn County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "38027": {
    "county_name": "Eddy County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "38029": {
    "county_name": "Emmons County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "38031": {
    "county_name": "Foster County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "38033": {
    "county_name": "Golden Valley County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "38035": {
    "county_name": "Grand Forks County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "38037": {
    "county_name": "Grant County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "38039": {
    "county_name": "Griggs County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "38041": {
    "county_name": "Hettinger County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "38043": {
    "county_name": "Kidder County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "38045": {
    "county_name": "LaMoure County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "38047": {
    "county_name": "Logan County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "38049": {
    "county_name": "McHenry County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "38051": {
    "county_name": "McIntosh County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "38053": {
    "county_name": "McKenzie County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "38055": {
    "county_name": "McLean County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "38057": {
    "county_name": "Mercer County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "38059": {
    "county_name": "Morton County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "38061": {
    "county_name": "Mountrail County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "38063": {
    "county_name": "Nelson County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "38065": {
    "county_name": "Oliver County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "38067": {
    "county_name": "Pembina County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "38069": {
    "county_name": "Pierce County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "38071": {
    "county_name": "Ramsey County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "38073": {
    "county_name": "Ransom County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "38075": {
    "county_name": "Renville County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "38077": {
    "county_name": "Richland County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "38079": {
    "county_name": "Rolette County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "38081": {
    "county_name": "Sargent County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "081",
    "class_fips": "H1"
  },
  "38083": {
    "county_name": "Sheridan County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "38085": {
    "county_name": "Sioux County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "085",
    "class_fips": "H1"
  },
  "38087": {
    "county_name": "Slope County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "38089": {
    "county_name": "Stark County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "089",
    "class_fips": "H1"
  },
  "38091": {
    "county_name": "Steele County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "091",
    "class_fips": "H1"
  },
  "38093": {
    "county_name": "Stutsman County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "093",
    "class_fips": "H1"
  },
  "38095": {
    "county_name": "Towner County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "095",
    "class_fips": "H1"
  },
  "38097": {
    "county_name": "Traill County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "097",
    "class_fips": "H1"
  },
  "38099": {
    "county_name": "Walsh County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "099",
    "class_fips": "H1"
  },
  "38101": {
    "county_name": "Ward County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "101",
    "class_fips": "H1"
  },
  "38103": {
    "county_name": "Wells County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "103",
    "class_fips": "H1"
  },
  "38105": {
    "county_name": "Williams County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "105",
    "class_fips": "H1"
  },
  "39001": {
    "county_name": "Adams County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "39003": {
    "county_name": "Allen County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "39005": {
    "county_name": "Ashland County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "39007": {
    "county_name": "Ashtabula County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "39009": {
    "county_name": "Athens County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "39011": {
    "county_name": "Auglaize County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "39013": {
    "county_name": "Belmont County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "39015": {
    "county_name": "Brown County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "39017": {
    "county_name": "Butler County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "39019": {
    "county_name": "Carroll County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "39021": {
    "county_name": "Champaign County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "39023": {
    "county_name": "Clark County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "39025": {
    "county_name": "Clermont County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "39027": {
    "county_name": "Clinton County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "39029": {
    "county_name": "Columbiana County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "39031": {
    "county_name": "Coshocton County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "39033": {
    "county_name": "Crawford County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "39035": {
    "county_name": "Cuyahoga County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "39037": {
    "county_name": "Darke County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "39039": {
    "county_name": "Defiance County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "39041": {
    "county_name": "Delaware County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "39043": {
    "county_name": "Erie County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "39045": {
    "county_name": "Fairfield County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "39047": {
    "county_name": "Fayette County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "39049": {
    "county_name": "Franklin County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "39051": {
    "county_name": "Fulton County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "39053": {
    "county_name": "Gallia County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "39055": {
    "county_name": "Geauga County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "39057": {
    "county_name": "Greene County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "39059": {
    "county_name": "Guernsey County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "39061": {
    "county_name": "Hamilton County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "39063": {
    "county_name": "Hancock County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "39065": {
    "county_name": "Hardin County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "39067": {
    "county_name": "Harrison County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "39069": {
    "county_name": "Henry County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "39071": {
    "county_name": "Highland County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "39073": {
    "county_name": "Hocking County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "39075": {
    "county_name": "Holmes County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "39077": {
    "county_name": "Huron County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "39079": {
    "county_name": "Jackson County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "39081": {
    "county_name": "Jefferson County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "081",
    "class_fips": "H1"
  },
  "39083": {
    "county_name": "Knox County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "39085": {
    "county_name": "Lake County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "085",
    "class_fips": "H1"
  },
  "39087": {
    "county_name": "Lawrence County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "39089": {
    "county_name": "Licking County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "089",
    "class_fips": "H1"
  },
  "39091": {
    "county_name": "Logan County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "091",
    "class_fips": "H1"
  },
  "39093": {
    "county_name": "Lorain County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "093",
    "class_fips": "H1"
  },
  "39095": {
    "county_name": "Lucas County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "095",
    "class_fips": "H1"
  },
  "39097": {
    "county_name": "Madison County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "097",
    "class_fips": "H1"
  },
  "39099": {
    "county_name": "Mahoning County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "099",
    "class_fips": "H1"
  },
  "39101": {
    "county_name": "Marion County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "101",
    "class_fips": "H1"
  },
  "39103": {
    "county_name": "Medina County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "103",
    "class_fips": "H1"
  },
  "39105": {
    "county_name": "Meigs County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "105",
    "class_fips": "H1"
  },
  "39107": {
    "county_name": "Mercer County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "107",
    "class_fips": "H1"
  },
  "39109": {
    "county_name": "Miami County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "109",
    "class_fips": "H1"
  },
  "39111": {
    "county_name": "Monroe County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "111",
    "class_fips": "H1"
  },
  "39113": {
    "county_name": "Montgomery County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "113",
    "class_fips": "H1"
  },
  "39115": {
    "county_name": "Morgan County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "115",
    "class_fips": "H1"
  },
  "39117": {
    "county_name": "Morrow County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "117",
    "class_fips": "H1"
  },
  "39119": {
    "county_name": "Muskingum County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "119",
    "class_fips": "H1"
  },
  "39121": {
    "county_name": "Noble County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "121",
    "class_fips": "H1"
  },
  "39123": {
    "county_name": "Ottawa County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "123",
    "class_fips": "H1"
  },
  "39125": {
    "county_name": "Paulding County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "125",
    "class_fips": "H1"
  },
  "39127": {
    "county_name": "Perry County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "127",
    "class_fips": "H1"
  },
  "39129": {
    "county_name": "Pickaway County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "129",
    "class_fips": "H1"
  },
  "39131": {
    "county_name": "Pike County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "131",
    "class_fips": "H1"
  },
  "39133": {
    "county_name": "Portage County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "133",
    "class_fips": "H1"
  },
  "39135": {
    "county_name": "Preble County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "135",
    "class_fips": "H1"
  },
  "39137": {
    "county_name": "Putnam County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "137",
    "class_fips": "H1"
  },
  "39139": {
    "county_name": "Richland County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "139",
    "class_fips": "H1"
  },
  "39141": {
    "county_name": "Ross County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "141",
    "class_fips": "H1"
  },
  "39143": {
    "county_name": "Sandusky County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "143",
    "class_fips": "H1"
  },
  "39145": {
    "county_name": "Scioto County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "145",
    "class_fips": "H1"
  },
  "39147": {
    "county_name": "Seneca County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "147",
    "class_fips": "H1"
  },
  "39149": {
    "county_name": "Shelby County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "149",
    "class_fips": "H1"
  },
  "39151": {
    "county_name": "Stark County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "151",
    "class_fips": "H1"
  },
  "39153": {
    "county_name": "Summit County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "153",
    "class_fips": "H1"
  },
  "39155": {
    "county_name": "Trumbull County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "155",
    "class_fips": "H1"
  },
  "39157": {
    "county_name": "Tuscarawas County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "157",
    "class_fips": "H1"
  },
  "39159": {
    "county_name": "Union County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "159",
    "class_fips": "H1"
  },
  "39161": {
    "county_name": "Van Wert County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "161",
    "class_fips": "H1"
  },
  "39163": {
    "county_name": "Vinton County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "163",
    "class_fips": "H1"
  },
  "39165": {
    "county_name": "Warren County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "165",
    "class_fips": "H1"
  },
  "39167": {
    "county_name": "Washington County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "167",
    "class_fips": "H1"
  },
  "39169": {
    "county_name": "Wayne County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "169",
    "class_fips": "H1"
  },
  "39171": {
    "county_name": "Williams County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "171",
    "class_fips": "H1"
  },
  "39173": {
    "county_name": "Wood County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "173",
    "class_fips": "H1"
  },
  "39175": {
    "county_name": "Wyandot County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "175",
    "class_fips": "H1"
  },
  "40001": {
    "county_name": "Adair County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "40003": {
    "county_name": "Alfalfa County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "40005": {
    "county_name": "Atoka County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "40007": {
    "county_name": "Beaver County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "40009": {
    "county_name": "Beckham County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "40011": {
    "county_name": "Blaine County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "40013": {
    "county_name": "Bryan County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "40015": {
    "county_name": "Caddo County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "40017": {
    "county_name": "Canadian County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "40019": {
    "county_name": "Carter County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "40021": {
    "county_name": "Cherokee County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "40023": {
    "county_name": "Choctaw County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "40025": {
    "county_name": "Cimarron County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "40027": {
    "county_name": "Cleveland County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "40029": {
    "county_name": "Coal County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "40031": {
    "county_name": "Comanche County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "40033": {
    "county_name": "Cotton County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "40035": {
    "county_name": "Craig County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "40037": {
    "county_name": "Creek County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "40039": {
    "county_name": "Custer County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "40041": {
    "county_name": "Delaware County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "40043": {
    "county_name": "Dewey County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "40045": {
    "county_name": "Ellis County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "40047": {
    "county_name": "Garfield County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "40049": {
    "county_name": "Garvin County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "40051": {
    "county_name": "Grady County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "40053": {
    "county_name": "Grant County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "40055": {
    "county_name": "Greer County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "40057": {
    "county_name": "Harmon County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "40059": {
    "county_name": "Harper County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "40061": {
    "county_name": "Haskell County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "40063": {
    "county_name": "Hughes County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "40065": {
    "county_name": "Jackson County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "40067": {
    "county_name": "Jefferson County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "40069": {
    "county_name": "Johnston County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "40071": {
    "county_name": "Kay County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "40073": {
    "county_name": "Kingfisher County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "40075": {
    "county_name": "Kiowa County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "40077": {
    "county_name": "Latimer County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "40079": {
    "county_name": "Le Flore County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "40081": {
    "county_name": "Lincoln County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "081",
    "class_fips": "H1"
  },
  "40083": {
    "county_name": "Logan County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "40085": {
    "county_name": "Love County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "085",
    "class_fips": "H1"
  },
  "40087": {
    "county_name": "McClain County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "40089": {
    "county_name": "McCurtain County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "089",
    "class_fips": "H1"
  },
  "40091": {
    "county_name": "McIntosh County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "091",
    "class_fips": "H1"
  },
  "40093": {
    "county_name": "Major County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "093",
    "class_fips": "H1"
  },
  "40095": {
    "county_name": "Marshall County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "095",
    "class_fips": "H1"
  },
  "40097": {
    "county_name": "Mayes County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "097",
    "class_fips": "H1"
  },
  "40099": {
    "county_name": "Murray County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "099",
    "class_fips": "H1"
  },
  "40101": {
    "county_name": "Muskogee County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "101",
    "class_fips": "H1"
  },
  "40103": {
    "county_name": "Noble County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "103",
    "class_fips": "H1"
  },
  "40105": {
    "county_name": "Nowata County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "105",
    "class_fips": "H1"
  },
  "40107": {
    "county_name": "Okfuskee County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "107",
    "class_fips": "H1"
  },
  "40109": {
    "county_name": "Oklahoma County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "109",
    "class_fips": "H1"
  },
  "40111": {
    "county_name": "Okmulgee County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "111",
    "class_fips": "H1"
  },
  "40113": {
    "county_name": "Osage County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "113",
    "class_fips": "H1"
  },
  "40115": {
    "county_name": "Ottawa County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "115",
    "class_fips": "H1"
  },
  "40117": {
    "county_name": "Pawnee County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "117",
    "class_fips": "H1"
  },
  "40119": {
    "county_name": "Payne County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "119",
    "class_fips": "H1"
  },
  "40121": {
    "county_name": "Pittsburg County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "121",
    "class_fips": "H1"
  },
  "40123": {
    "county_name": "Pontotoc County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "123",
    "class_fips": "H1"
  },
  "40125": {
    "county_name": "Pottawatomie County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "125",
    "class_fips": "H1"
  },
  "40127": {
    "county_name": "Pushmataha County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "127",
    "class_fips": "H1"
  },
  "40129": {
    "county_name": "Roger Mills County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "129",
    "class_fips": "H1"
  },
  "40131": {
    "county_name": "Rogers County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "131",
    "class_fips": "H1"
  },
  "40133": {
    "county_name": "Seminole County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "133",
    "class_fips": "H1"
  },
  "40135": {
    "county_name": "Sequoyah County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "135",
    "class_fips": "H1"
  },
  "40137": {
    "county_name": "Stephens County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "137",
    "class_fips": "H1"
  },
  "40139": {
    "county_name": "Texas County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "139",
    "class_fips": "H1"
  },
  "40141": {
    "county_name": "Tillman County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "141",
    "class_fips": "H1"
  },
  "40143": {
    "county_name": "Tulsa County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "143",
    "class_fips": "H1"
  },
  "40145": {
    "county_name": "Wagoner County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "145",
    "class_fips": "H1"
  },
  "40147": {
    "county_name": "Washington County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "147",
    "class_fips": "H1"
  },
  "40149": {
    "county_name": "Washita County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "149",
    "class_fips": "H1"
  },
  "40151": {
    "county_name": "Woods County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "151",
    "class_fips": "H1"
  },
  "40153": {
    "county_name": "Woodward County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "153",
    "class_fips": "H1"
  },
  "41001": {
    "county_name": "Baker County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "41003": {
    "county_name": "Benton County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "41005": {
    "county_name": "Clackamas County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "41007": {
    "county_name": "Clatsop County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "41009": {
    "county_name": "Columbia County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "41011": {
    "county_name": "Coos County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "41013": {
    "county_name": "Crook County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "41015": {
    "county_name": "Curry County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "41017": {
    "county_name": "Deschutes County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "41019": {
    "county_name": "Douglas County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "41021": {
    "county_name": "Gilliam County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "41023": {
    "county_name": "Grant County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "41025": {
    "county_name": "Harney County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "41027": {
    "county_name": "Hood River County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "41029": {
    "county_name": "Jackson County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "41031": {
    "county_name": "Jefferson County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "41033": {
    "county_name": "Josephine County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "41035": {
    "county_name": "Klamath County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "41037": {
    "county_name": "Lake County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "41039": {
    "county_name": "Lane County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "41041": {
    "county_name": "Lincoln County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "41043": {
    "county_name": "Linn County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "41045": {
    "county_name": "Malheur County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "41047": {
    "county_name": "Marion County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "41049": {
    "county_name": "Morrow County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "41051": {
    "county_name": "Multnomah County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "41053": {
    "county_name": "Polk County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "41055": {
    "county_name": "Sherman County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "41057": {
    "county_name": "Tillamook County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "41059": {
    "county_name": "Umatilla County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "41061": {
    "county_name": "Union County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "41063": {
    "county_name": "Wallowa County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "41065": {
    "county_name": "Wasco County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "41067": {
    "county_name": "Washington County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "41069": {
    "county_name": "Wheeler County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "41071": {
    "county_name": "Yamhill County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "42001": {
    "county_name": "Adams County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "42003": {
    "county_name": "Allegheny County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "42005": {
    "county_name": "Armstrong County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "42007": {
    "county_name": "Beaver County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "42009": {
    "county_name": "Bedford County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "42011": {
    "county_name": "Berks County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "42013": {
    "county_name": "Blair County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "42015": {
    "county_name": "Bradford County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "42017": {
    "county_name": "Bucks County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "42019": {
    "county_name": "Butler County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "42021": {
    "county_name": "Cambria County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "42023": {
    "county_name": "Cameron County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "42025": {
    "county_name": "Carbon County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "42027": {
    "county_name": "Centre County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "42029": {
    "county_name": "Chester County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "42031": {
    "county_name": "Clarion County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "42033": {
    "county_name": "Clearfield County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "42035": {
    "county_name": "Clinton County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "42037": {
    "county_name": "Columbia County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "42039": {
    "county_name": "Crawford County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "42041": {
    "county_name": "Cumberland County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "42043": {
    "county_name": "Dauphin County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "42045": {
    "county_name": "Delaware County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "42047": {
    "county_name": "Elk County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "42049": {
    "county_name": "Erie County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "42051": {
    "county_name": "Fayette County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "42053": {
    "county_name": "Forest County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "42055": {
    "county_name": "Franklin County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "42057": {
    "county_name": "Fulton County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "42059": {
    "county_name": "Greene County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "42061": {
    "county_name": "Huntingdon County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "42063": {
    "county_name": "Indiana County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "42065": {
    "county_name": "Jefferson County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "42067": {
    "county_name": "Juniata County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "42069": {
    "county_name": "Lackawanna County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "42071": {
    "county_name": "Lancaster County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "42073": {
    "county_name": "Lawrence County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "42075": {
    "county_name": "Lebanon County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "42077": {
    "county_name": "Lehigh County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "42079": {
    "county_name": "Luzerne County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "42081": {
    "county_name": "Lycoming County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "081",
    "class_fips": "H1"
  },
  "42083": {
    "county_name": "McKean County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "42085": {
    "county_name": "Mercer County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "085",
    "class_fips": "H1"
  },
  "42087": {
    "county_name": "Mifflin County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "42089": {
    "county_name": "Monroe County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "089",
    "class_fips": "H1"
  },
  "42091": {
    "county_name": "Montgomery County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "091",
    "class_fips": "H1"
  },
  "42093": {
    "county_name": "Montour County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "093",
    "class_fips": "H1"
  },
  "42095": {
    "county_name": "Northampton County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "095",
    "class_fips": "H1"
  },
  "42097": {
    "county_name": "Northumberland County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "097",
    "class_fips": "H1"
  },
  "42099": {
    "county_name": "Perry County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "099",
    "class_fips": "H1"
  },
  "42101": {
    "county_name": "Philadelphia County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "101",
    "class_fips": "H6"
  },
  "42103": {
    "county_name": "Pike County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "103",
    "class_fips": "H1"
  },
  "42105": {
    "county_name": "Potter County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "105",
    "class_fips": "H1"
  },
  "42107": {
    "county_name": "Schuylkill County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "107",
    "class_fips": "H1"
  },
  "42109": {
    "county_name": "Snyder County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "109",
    "class_fips": "H1"
  },
  "42111": {
    "county_name": "Somerset County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "111",
    "class_fips": "H1"
  },
  "42113": {
    "county_name": "Sullivan County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "113",
    "class_fips": "H1"
  },
  "42115": {
    "county_name": "Susquehanna County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "115",
    "class_fips": "H1"
  },
  "42117": {
    "county_name": "Tioga County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "117",
    "class_fips": "H1"
  },
  "42119": {
    "county_name": "Union County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "119",
    "class_fips": "H1"
  },
  "42121": {
    "county_name": "Venango County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "121",
    "class_fips": "H1"
  },
  "42123": {
    "county_name": "Warren County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "123",
    "class_fips": "H1"
  },
  "42125": {
    "county_name": "Washington County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "125",
    "class_fips": "H1"
  },
  "42127": {
    "county_name": "Wayne County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "127",
    "class_fips": "H1"
  },
  "42129": {
    "county_name": "Westmoreland County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "129",
    "class_fips": "H1"
  },
  "42131": {
    "county_name": "Wyoming County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "131",
    "class_fips": "H1"
  },
  "42133": {
    "county_name": "York County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "133",
    "class_fips": "H1"
  },
  "44001": {
    "county_name": "Bristol County",
    "state_code": "RI",
    "state_fips": "44",
    "county_fips": "001",
    "class_fips": "H4"
  },
  "44003": {
    "county_name": "Kent County",
    "state_code": "RI",
    "state_fips": "44",
    "county_fips": "003",
    "class_fips": "H4"
  },
  "44005": {
    "county_name": "Newport County",
    "state_code": "RI",
    "state_fips": "44",
    "county_fips": "005",
    "class_fips": "H4"
  },
  "44007": {
    "county_name": "Providence County",
    "state_code": "RI",
    "state_fips": "44",
    "county_fips": "007",
    "class_fips": "H4"
  },
  "44009": {
    "county_name": "Washington County",
    "state_code": "RI",
    "state_fips": "44",
    "county_fips": "009",
    "class_fips": "H4"
  },
  "45001": {
    "county_name": "Abbeville County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "45003": {
    "county_name": "Aiken County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "45005": {
    "county_name": "Allendale County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "45007": {
    "county_name": "Anderson County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "45009": {
    "county_name": "Bamberg County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "45011": {
    "county_name": "Barnwell County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "45013": {
    "county_name": "Beaufort County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "45015": {
    "county_name": "Berkeley County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "45017": {
    "county_name": "Calhoun County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "45019": {
    "county_name": "Charleston County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "45021": {
    "county_name": "Cherokee County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "45023": {
    "county_name": "Chester County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "45025": {
    "county_name": "Chesterfield County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "45027": {
    "county_name": "Clarendon County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "45029": {
    "county_name": "Colleton County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "45031": {
    "county_name": "Darlington County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "45033": {
    "county_name": "Dillon County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "45035": {
    "county_name": "Dorchester County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "45037": {
    "county_name": "Edgefield County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "45039": {
    "county_name": "Fairfield County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "45041": {
    "county_name": "Florence County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "45043": {
    "county_name": "Georgetown County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "45045": {
    "county_name": "Greenville County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "45047": {
    "county_name": "Greenwood County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "45049": {
    "county_name": "Hampton County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "45051": {
    "county_name": "Horry County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "45053": {
    "county_name": "Jasper County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "45055": {
    "county_name": "Kershaw County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "45057": {
    "county_name": "Lancaster County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "45059": {
    "county_name": "Laurens County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "45061": {
    "county_name": "Lee County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "45063": {
    "county_name": "Lexington County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "45065": {
    "county_name": "McCormick County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "45067": {
    "county_name": "Marion County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "45069": {
    "county_name": "Marlboro County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "45071": {
    "county_name": "Newberry County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "45073": {
    "county_name": "Oconee County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "45075": {
    "county_name": "Orangeburg County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "45077": {
    "county_name": "Pickens County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "45079": {
    "county_name": "Richland County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "45081": {
    "county_name": "Saluda County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "081",
    "class_fips": "H1"
  },
  "45083": {
    "county_name": "Spartanburg County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "45085": {
    "county_name": "Sumter County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "085",
    "class_fips": "H1"
  },
  "45087": {
    "county_name": "Union County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "45089": {
    "county_name": "Williamsburg County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "089",
    "class_fips": "H1"
  },
  "45091": {
    "county_name": "York County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "091",
    "class_fips": "H1"
  },
  "46003": {
    "county_name": "Aurora County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "46005": {
    "county_name": "Beadle County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "46007": {
    "county_name": "Bennett County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "46009": {
    "county_name": "Bon Homme County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "46011": {
    "county_name": "Brookings County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "46013": {
    "county_name": "Brown County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "46015": {
    "county_name": "Brule County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "46017": {
    "county_name": "Buffalo County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "46019": {
    "county_name": "Butte County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "46021": {
    "county_name": "Campbell County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "46023": {
    "county_name": "Charles Mix County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "46025": {
    "county_name": "Clark County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "46027": {
    "county_name": "Clay County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "46029": {
    "county_name": "Codington County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "46031": {
    "county_name": "Corson County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "46033": {
    "county_name": "Custer County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "46035": {
    "county_name": "Davison County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "46037": {
    "county_name": "Day County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "46039": {
    "county_name": "Deuel County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "46041": {
    "county_name": "Dewey County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "46043": {
    "county_name": "Douglas County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "46045": {
    "county_name": "Edmunds County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "46047": {
    "county_name": "Fall River County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "46049": {
    "county_name": "Faulk County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "46051": {
    "county_name": "Grant County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "46053": {
    "county_name": "Gregory County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "46055": {
    "county_name": "Haakon County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "46057": {
    "county_name": "Hamlin County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "46059": {
    "county_name": "Hand County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "46061": {
    "county_name": "Hanson County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "46063": {
    "county_name": "Harding County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "46065": {
    "county_name": "Hughes County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "46067": {
    "county_name": "Hutchinson County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "46069": {
    "county_name": "Hyde County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "46071": {
    "county_name": "Jackson County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "46073": {
    "county_name": "Jerauld County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "46075": {
    "county_name": "Jones County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "46077": {
    "county_name": "Kingsbury County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "46079": {
    "county_name": "Lake County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "46081": {
    "county_name": "Lawrence County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "081",
    "class_fips": "H1"
  },
  "46083": {
    "county_name": "Lincoln County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "46085": {
    "county_name": "Lyman County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "085",
    "class_fips": "H1"
  },
  "46087": {
    "county_name": "McCook County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "46089": {
    "county_name": "McPherson County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "089",
    "class_fips": "H1"
  },
  "46091": {
    "county_name": "Marshall County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "091",
    "class_fips": "H1"
  },
  "46093": {
    "county_name": "Meade County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "093",
    "class_fips": "H1"
  },
  "46095": {
    "county_name": "Mellette County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "095",
    "class_fips": "H1"
  },
  "46097": {
    "county_name": "Miner County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "097",
    "class_fips": "H1"
  },
  "46099": {
    "county_name": "Minnehaha County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "099",
    "class_fips": "H1"
  },
  "46101": {
    "county_name": "Moody County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "101",
    "class_fips": "H1"
  },
  "46102": {
    "county_name": "Oglala Lakota County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "102",
    "class_fips": "H1"
  },
  "46103": {
    "county_name": "Pennington County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "103",
    "class_fips": "H1"
  },
  "46105": {
    "county_name": "Perkins County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "105",
    "class_fips": "H1"
  },
  "46107": {
    "county_name": "Potter County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "107",
    "class_fips": "H1"
  },
  "46109": {
    "county_name": "Roberts County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "109",
    "class_fips": "H1"
  },
  "46111": {
    "county_name": "Sanborn County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "111",
    "class_fips": "H1"
  },
  "46115": {
    "county_name": "Spink County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "115",
    "class_fips": "H1"
  },
  "46117": {
    "county_name": "Stanley County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "117",
    "class_fips": "H1"
  },
  "46119": {
    "county_name": "Sully County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "119",
    "class_fips": "H1"
  },
  "46121": {
    "county_name": "Todd County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "121",
    "class_fips": "H1"
  },
  "46123": {
    "county_name": "Tripp County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "123",
    "class_fips": "H1"
  },
  "46125": {
    "county_name": "Turner County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "125",
    "class_fips": "H1"
  },
  "46127": {
    "county_name": "Union County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "127",
    "class_fips": "H1"
  },
  "46129": {
    "county_name": "Walworth County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "129",
    "class_fips": "H1"
  },
  "46135": {
    "county_name": "Yankton County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "135",
    "class_fips": "H1"
  },
  "46137": {
    "county_name": "Ziebach County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "137",
    "class_fips": "H1"
  },
  "47001": {
    "county_name": "Anderson County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "47003": {
    "county_name": "Bedford County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "47005": {
    "county_name": "Benton County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "47007": {
    "county_name": "Bledsoe County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "47009": {
    "county_name": "Blount County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "47011": {
    "county_name": "Bradley County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "47013": {
    "county_name": "Campbell County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "47015": {
    "county_name": "Cannon County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "47017": {
    "county_name": "Carroll County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "47019": {
    "county_name": "Carter County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "47021": {
    "county_name": "Cheatham County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "47023": {
    "county_name": "Chester County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "47025": {
    "county_name": "Claiborne County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "47027": {
    "county_name": "Clay County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "47029": {
    "county_name": "Cocke County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "47031": {
    "county_name": "Coffee County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "47033": {
    "county_name": "Crockett County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "47035": {
    "county_name": "Cumberland County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "47037": {
    "county_name": "Davidson County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "037",
    "class_fips": "H6"
  },
  "47039": {
    "county_name": "Decatur County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "47041": {
    "county_name": "DeKalb County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "47043": {
    "county_name": "Dickson County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "47045": {
    "county_name": "Dyer County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "47047": {
    "county_name": "Fayette County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "47049": {
    "county_name": "Fentress County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "47051": {
    "county_name": "Franklin County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "47053": {
    "county_name": "Gibson County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "47055": {
    "county_name": "Giles County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "47057": {
    "county_name": "Grainger County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "47059": {
    "county_name": "Greene County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "47061": {
    "county_name": "Grundy County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "47063": {
    "county_name": "Hamblen County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "47065": {
    "county_name": "Hamilton County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "47067": {
    "county_name": "Hancock County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "47069": {
    "county_name": "Hardeman County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "47071": {
    "county_name": "Hardin County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "47073": {
    "county_name": "Hawkins County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "47075": {
    "county_name": "Haywood County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "47077": {
    "county_name": "Henderson County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "47079": {
    "county_name": "Henry County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "47081": {
    "county_name": "Hickman County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "081",
    "class_fips": "H1"
  },
  "47083": {
    "county_name": "Houston County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "47085": {
    "county_name": "Humphreys County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "085",
    "class_fips": "H1"
  },
  "47087": {
    "county_name": "Jackson County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "47089": {
    "county_name": "Jefferson County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "089",
    "class_fips": "H1"
  },
  "47091": {
    "county_name": "Johnson County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "091",
    "class_fips": "H1"
  },
  "47093": {
    "county_name": "Knox County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "093",
    "class_fips": "H1"
  },
  "47095": {
    "county_name": "Lake County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "095",
    "class_fips": "H1"
  },
  "47097": {
    "county_name": "Lauderdale County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "097",
    "class_fips": "H1"
  },
  "47099": {
    "county_name": "Lawrence County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "099",
    "class_fips": "H1"
  },
  "47101": {
    "county_name": "Lewis County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "101",
    "class_fips": "H1"
  },
  "47103": {
    "county_name": "Lincoln County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "103",
    "class_fips": "H1"
  },
  "47105": {
    "county_name": "Loudon County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "105",
    "class_fips": "H1"
  },
  "47107": {
    "county_name": "McMinn County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "107",
    "class_fips": "H1"
  },
  "47109": {
    "county_name": "McNairy County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "109",
    "class_fips": "H1"
  },
  "47111": {
    "county_name": "Macon County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "111",
    "class_fips": "H1"
  },
  "47113": {
    "county_name": "Madison County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "113",
    "class_fips": "H1"
  },
  "47115": {
    "county_name": "Marion County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "115",
    "class_fips": "H1"
  },
  "47117": {
    "county_name": "Marshall County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "117",
    "class_fips": "H1"
  },
  "47119": {
    "county_name": "Maury County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "119",
    "class_fips": "H1"
  },
  "47121": {
    "county_name": "Meigs County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "121",
    "class_fips": "H1"
  },
  "47123": {
    "county_name": "Monroe County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "123",
    "class_fips": "H1"
  },
  "47125": {
    "county_name": "Montgomery County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "125",
    "class_fips": "H1"
  },
  "47127": {
    "county_name": "Moore County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "127",
    "class_fips": "H6"
  },
  "47129": {
    "county_name": "Morgan County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "129",
    "class_fips": "H1"
  },
  "47131": {
    "county_name": "Obion County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "131",
    "class_fips": "H1"
  },
  "47133": {
    "county_name": "Overton County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "133",
    "class_fips": "H1"
  },
  "47135": {
    "county_name": "Perry County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "135",
    "class_fips": "H1"
  },
  "47137": {
    "county_name": "Pickett County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "137",
    "class_fips": "H1"
  },
  "47139": {
    "county_name": "Polk County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "139",
    "class_fips": "H1"
  },
  "47141": {
    "county_name": "Putnam County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "141",
    "class_fips": "H1"
  },
  "47143": {
    "county_name": "Rhea County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "143",
    "class_fips": "H1"
  },
  "47145": {
    "county_name": "Roane County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "145",
    "class_fips": "H1"
  },
  "47147": {
    "county_name": "Robertson County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "147",
    "class_fips": "H1"
  },
  "47149": {
    "county_name": "Rutherford County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "149",
    "class_fips": "H1"
  },
  "47151": {
    "county_name": "Scott County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "151",
    "class_fips": "H1"
  },
  "47153": {
    "county_name": "Sequatchie County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "153",
    "class_fips": "H1"
  },
  "47155": {
    "county_name": "Sevier County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "155",
    "class_fips": "H1"
  },
  "47157": {
    "county_name": "Shelby County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "157",
    "class_fips": "H1"
  },
  "47159": {
    "county_name": "Smith County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "159",
    "class_fips": "H1"
  },
  "47161": {
    "county_name": "Stewart County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "161",
    "class_fips": "H1"
  },
  "47163": {
    "county_name": "Sullivan County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "163",
    "class_fips": "H1"
  },
  "47165": {
    "county_name": "Sumner County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "165",
    "class_fips": "H1"
  },
  "47167": {
    "county_name": "Tipton County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "167",
    "class_fips": "H1"
  },
  "47169": {
    "county_name": "Trousdale County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "169",
    "class_fips": "H6"
  },
  "47171": {
    "county_name": "Unicoi County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "171",
    "class_fips": "H1"
  },
  "47173": {
    "county_name": "Union County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "173",
    "class_fips": "H1"
  },
  "47175": {
    "county_name": "Van Buren County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "175",
    "class_fips": "H1"
  },
  "47177": {
    "county_name": "Warren County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "177",
    "class_fips": "H1"
  },
  "47179": {
    "county_name": "Washington County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "179",
    "class_fips": "H1"
  },
  "47181": {
    "county_name": "Wayne County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "181",
    "class_fips": "H1"
  },
  "47183": {
    "county_name": "Weakley County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "183",
    "class_fips": "H1"
  },
  "47185": {
    "county_name": "White County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "185",
    "class_fips": "H1"
  },
  "47187": {
    "county_name": "Williamson County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "187",
    "class_fips": "H1"
  },
  "47189": {
    "county_name": "Wilson County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "189",
    "class_fips": "H1"
  },
  "48001": {
    "county_name": "Anderson County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "48003": {
    "county_name": "Andrews County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "48005": {
    "county_name": "Angelina County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "48007": {
    "county_name": "Aransas County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "48009": {
    "county_name": "Archer County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "48011": {
    "county_name": "Armstrong County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "48013": {
    "county_name": "Atascosa County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "48015": {
    "county_name": "Austin County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "48017": {
    "county_name": "Bailey County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "48019": {
    "county_name": "Bandera County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "48021": {
    "county_name": "Bastrop County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "48023": {
    "county_name": "Baylor County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "48025": {
    "county_name": "Bee County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "48027": {
    "county_name": "Bell County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "48029": {
    "county_name": "Bexar County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "48031": {
    "county_name": "Blanco County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "48033": {
    "county_name": "Borden County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "48035": {
    "county_name": "Bosque County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "48037": {
    "county_name": "Bowie County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "48039": {
    "county_name": "Brazoria County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "48041": {
    "county_name": "Brazos County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "48043": {
    "county_name": "Brewster County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "48045": {
    "county_name": "Briscoe County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "48047": {
    "county_name": "Brooks County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "48049": {
    "county_name": "Brown County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "48051": {
    "county_name": "Burleson County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "48053": {
    "county_name": "Burnet County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "48055": {
    "county_name": "Caldwell County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "48057": {
    "county_name": "Calhoun County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "48059": {
    "county_name": "Callahan County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "48061": {
    "county_name": "Cameron County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "48063": {
    "county_name": "Camp County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "48065": {
    "county_name": "Carson County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "48067": {
    "county_name": "Cass County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "48069": {
    "county_name": "Castro County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "48071": {
    "county_name": "Chambers County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "48073": {
    "county_name": "Cherokee County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "48075": {
    "county_name": "Childress County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "48077": {
    "county_name": "Clay County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "48079": {
    "county_name": "Cochran County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "48081": {
    "county_name": "Coke County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "081",
    "class_fips": "H1"
  },
  "48083": {
    "county_name": "Coleman County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "48085": {
    "county_name": "Collin County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "085",
    "class_fips": "H1"
  },
  "48087": {
    "county_name": "Collingsworth County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "48089": {
    "county_name": "Colorado County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "089",
    "class_fips": "H1"
  },
  "48091": {
    "county_name": "Comal County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "091",
    "class_fips": "H1"
  },
  "48093": {
    "county_name": "Comanche County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "093",
    "class_fips": "H1"
  },
  "48095": {
    "county_name": "Concho County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "095",
    "class_fips": "H1"
  },
  "48097": {
    "county_name": "Cooke County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "097",
    "class_fips": "H1"
  },
  "48099": {
    "county_name": "Coryell County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "099",
    "class_fips": "H1"
  },
  "48101": {
    "county_name": "Cottle County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "101",
    "class_fips": "H1"
  },
  "48103": {
    "county_name": "Crane County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "103",
    "class_fips": "H1"
  },
  "48105": {
    "county_name": "Crockett County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "105",
    "class_fips": "H1"
  },
  "48107": {
    "county_name": "Crosby County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "107",
    "class_fips": "H1"
  },
  "48109": {
    "county_name": "Culberson County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "109",
    "class_fips": "H1"
  },
  "48111": {
    "county_name": "Dallam County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "111",
    "class_fips": "H1"
  },
  "48113": {
    "county_name": "Dallas County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "113",
    "class_fips": "H1"
  },
  "48115": {
    "county_name": "Dawson County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "115",
    "class_fips": "H1"
  },
  "48117": {
    "county_name": "Deaf Smith County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "117",
    "class_fips": "H1"
  },
  "48119": {
    "county_name": "Delta County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "119",
    "class_fips": "H1"
  },
  "48121": {
    "county_name": "Denton County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "121",
    "class_fips": "H1"
  },
  "48123": {
    "county_name": "DeWitt County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "123",
    "class_fips": "H1"
  },
  "48125": {
    "county_name": "Dickens County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "125",
    "class_fips": "H1"
  },
  "48127": {
    "county_name": "Dimmit County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "127",
    "class_fips": "H1"
  },
  "48129": {
    "county_name": "Donley County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "129",
    "class_fips": "H1"
  },
  "48131": {
    "county_name": "Duval County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "131",
    "class_fips": "H1"
  },
  "48133": {
    "county_name": "Eastland County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "133",
    "class_fips": "H1"
  },
  "48135": {
    "county_name": "Ector County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "135",
    "class_fips": "H1"
  },
  "48137": {
    "county_name": "Edwards County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "137",
    "class_fips": "H1"
  },
  "48139": {
    "county_name": "Ellis County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "139",
    "class_fips": "H1"
  },
  "48141": {
    "county_name": "El Paso County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "141",
    "class_fips": "H1"
  },
  "48143": {
    "county_name": "Erath County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "143",
    "class_fips": "H1"
  },
  "48145": {
    "county_name": "Falls County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "145",
    "class_fips": "H1"
  },
  "48147": {
    "county_name": "Fannin County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "147",
    "class_fips": "H1"
  },
  "48149": {
    "county_name": "Fayette County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "149",
    "class_fips": "H1"
  },
  "48151": {
    "county_name": "Fisher County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "151",
    "class_fips": "H1"
  },
  "48153": {
    "county_name": "Floyd County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "153",
    "class_fips": "H1"
  },
  "48155": {
    "county_name": "Foard County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "155",
    "class_fips": "H1"
  },
  "48157": {
    "county_name": "Fort Bend County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "157",
    "class_fips": "H1"
  },
  "48159": {
    "county_name": "Franklin County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "159",
    "class_fips": "H1"
  },
  "48161": {
    "county_name": "Freestone County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "161",
    "class_fips": "H1"
  },
  "48163": {
    "county_name": "Frio County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "163",
    "class_fips": "H1"
  },
  "48165": {
    "county_name": "Gaines County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "165",
    "class_fips": "H1"
  },
  "48167": {
    "county_name": "Galveston County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "167",
    "class_fips": "H1"
  },
  "48169": {
    "county_name": "Garza County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "169",
    "class_fips": "H1"
  },
  "48171": {
    "county_name": "Gillespie County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "171",
    "class_fips": "H1"
  },
  "48173": {
    "county_name": "Glasscock County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "173",
    "class_fips": "H1"
  },
  "48175": {
    "county_name": "Goliad County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "175",
    "class_fips": "H1"
  },
  "48177": {
    "county_name": "Gonzales County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "177",
    "class_fips": "H1"
  },
  "48179": {
    "county_name": "Gray County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "179",
    "class_fips": "H1"
  },
  "48181": {
    "county_name": "Grayson County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "181",
    "class_fips": "H1"
  },
  "48183": {
    "county_name": "Gregg County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "183",
    "class_fips": "H1"
  },
  "48185": {
    "county_name": "Grimes County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "185",
    "class_fips": "H1"
  },
  "48187": {
    "county_name": "Guadalupe County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "187",
    "class_fips": "H1"
  },
  "48189": {
    "county_name": "Hale County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "189",
    "class_fips": "H1"
  },
  "48191": {
    "county_name": "Hall County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "191",
    "class_fips": "H1"
  },
  "48193": {
    "county_name": "Hamilton County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "193",
    "class_fips": "H1"
  },
  "48195": {
    "county_name": "Hansford County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "195",
    "class_fips": "H1"
  },
  "48197": {
    "county_name": "Hardeman County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "197",
    "class_fips": "H1"
  },
  "48199": {
    "county_name": "Hardin County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "199",
    "class_fips": "H1"
  },
  "48201": {
    "county_name": "Harris County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "201",
    "class_fips": "H1"
  },
  "48203": {
    "county_name": "Harrison County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "203",
    "class_fips": "H1"
  },
  "48205": {
    "county_name": "Hartley County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "205",
    "class_fips": "H1"
  },
  "48207": {
    "county_name": "Haskell County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "207",
    "class_fips": "H1"
  },
  "48209": {
    "county_name": "Hays County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "209",
    "class_fips": "H1"
  },
  "48211": {
    "county_name": "Hemphill County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "211",
    "class_fips": "H1"
  },
  "48213": {
    "county_name": "Henderson County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "213",
    "class_fips": "H1"
  },
  "48215": {
    "county_name": "Hidalgo County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "215",
    "class_fips": "H1"
  },
  "48217": {
    "county_name": "Hill County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "217",
    "class_fips": "H1"
  },
  "48219": {
    "county_name": "Hockley County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "219",
    "class_fips": "H1"
  },
  "48221": {
    "county_name": "Hood County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "221",
    "class_fips": "H1"
  },
  "48223": {
    "county_name": "Hopkins County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "223",
    "class_fips": "H1"
  },
  "48225": {
    "county_name": "Houston County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "225",
    "class_fips": "H1"
  },
  "48227": {
    "county_name": "Howard County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "227",
    "class_fips": "H1"
  },
  "48229": {
    "county_name": "Hudspeth County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "229",
    "class_fips": "H1"
  },
  "48231": {
    "county_name": "Hunt County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "231",
    "class_fips": "H1"
  },
  "48233": {
    "county_name": "Hutchinson County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "233",
    "class_fips": "H1"
  },
  "48235": {
    "county_name": "Irion County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "235",
    "class_fips": "H1"
  },
  "48237": {
    "county_name": "Jack County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "237",
    "class_fips": "H1"
  },
  "48239": {
    "county_name": "Jackson County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "239",
    "class_fips": "H1"
  },
  "48241": {
    "county_name": "Jasper County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "241",
    "class_fips": "H1"
  },
  "48243": {
    "county_name": "Jeff Davis County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "243",
    "class_fips": "H1"
  },
  "48245": {
    "county_name": "Jefferson County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "245",
    "class_fips": "H1"
  },
  "48247": {
    "county_name": "Jim Hogg County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "247",
    "class_fips": "H1"
  },
  "48249": {
    "county_name": "Jim Wells County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "249",
    "class_fips": "H1"
  },
  "48251": {
    "county_name": "Johnson County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "251",
    "class_fips": "H1"
  },
  "48253": {
    "county_name": "Jones County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "253",
    "class_fips": "H1"
  },
  "48255": {
    "county_name": "Karnes County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "255",
    "class_fips": "H1"
  },
  "48257": {
    "county_name": "Kaufman County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "257",
    "class_fips": "H1"
  },
  "48259": {
    "county_name": "Kendall County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "259",
    "class_fips": "H1"
  },
  "48261": {
    "county_name": "Kenedy County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "261",
    "class_fips": "H1"
  },
  "48263": {
    "county_name": "Kent County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "263",
    "class_fips": "H1"
  },
  "48265": {
    "county_name": "Kerr County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "265",
    "class_fips": "H1"
  },
  "48267": {
    "county_name": "Kimble County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "267",
    "class_fips": "H1"
  },
  "48269": {
    "county_name": "King County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "269",
    "class_fips": "H1"
  },
  "48271": {
    "county_name": "Kinney County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "271",
    "class_fips": "H1"
  },
  "48273": {
    "county_name": "Kleberg County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "273",
    "class_fips": "H1"
  },
  "48275": {
    "county_name": "Knox County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "275",
    "class_fips": "H1"
  },
  "48277": {
    "county_name": "Lamar County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "277",
    "class_fips": "H1"
  },
  "48279": {
    "county_name": "Lamb County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "279",
    "class_fips": "H1"
  },
  "48281": {
    "county_name": "Lampasas County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "281",
    "class_fips": "H1"
  },
  "48283": {
    "county_name": "La Salle County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "283",
    "class_fips": "H1"
  },
  "48285": {
    "county_name": "Lavaca County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "285",
    "class_fips": "H1"
  },
  "48287": {
    "county_name": "Lee County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "287",
    "class_fips": "H1"
  },
  "48289": {
    "county_name": "Leon County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "289",
    "class_fips": "H1"
  },
  "48291": {
    "county_name": "Liberty County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "291",
    "class_fips": "H1"
  },
  "48293": {
    "county_name": "Limestone County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "293",
    "class_fips": "H1"
  },
  "48295": {
    "county_name": "Lipscomb County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "295",
    "class_fips": "H1"
  },
  "48297": {
    "county_name": "Live Oak County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "297",
    "class_fips": "H1"
  },
  "48299": {
    "county_name": "Llano County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "299",
    "class_fips": "H1"
  },
  "48301": {
    "county_name": "Loving County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "301",
    "class_fips": "H1"
  },
  "48303": {
    "county_name": "Lubbock County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "303",
    "class_fips": "H1"
  },
  "48305": {
    "county_name": "Lynn County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "305",
    "class_fips": "H1"
  },
  "48307": {
    "county_name": "McCulloch County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "307",
    "class_fips": "H1"
  },
  "48309": {
    "county_name": "McLennan County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "309",
    "class_fips": "H1"
  },
  "48311": {
    "county_name": "McMullen County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "311",
    "class_fips": "H1"
  },
  "48313": {
    "county_name": "Madison County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "313",
    "class_fips": "H1"
  },
  "48315": {
    "county_name": "Marion County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "315",
    "class_fips": "H1"
  },
  "48317": {
    "county_name": "Martin County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "317",
    "class_fips": "H1"
  },
  "48319": {
    "county_name": "Mason County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "319",
    "class_fips": "H1"
  },
  "48321": {
    "county_name": "Matagorda County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "321",
    "class_fips": "H1"
  },
  "48323": {
    "county_name": "Maverick County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "323",
    "class_fips": "H1"
  },
  "48325": {
    "county_name": "Medina County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "325",
    "class_fips": "H1"
  },
  "48327": {
    "county_name": "Menard County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "327",
    "class_fips": "H1"
  },
  "48329": {
    "county_name": "Midland County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "329",
    "class_fips": "H1"
  },
  "48331": {
    "county_name": "Milam County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "331",
    "class_fips": "H1"
  },
  "48333": {
    "county_name": "Mills County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "333",
    "class_fips": "H1"
  },
  "48335": {
    "county_name": "Mitchell County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "335",
    "class_fips": "H1"
  },
  "48337": {
    "county_name": "Montague County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "337",
    "class_fips": "H1"
  },
  "48339": {
    "county_name": "Montgomery County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "339",
    "class_fips": "H1"
  },
  "48341": {
    "county_name": "Moore County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "341",
    "class_fips": "H1"
  },
  "48343": {
    "county_name": "Morris County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "343",
    "class_fips": "H1"
  },
  "48345": {
    "county_name": "Motley County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "345",
    "class_fips": "H1"
  },
  "48347": {
    "county_name": "Nacogdoches County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "347",
    "class_fips": "H1"
  },
  "48349": {
    "county_name": "Navarro County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "349",
    "class_fips": "H1"
  },
  "48351": {
    "county_name": "Newton County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "351",
    "class_fips": "H1"
  },
  "48353": {
    "county_name": "Nolan County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "353",
    "class_fips": "H1"
  },
  "48355": {
    "county_name": "Nueces County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "355",
    "class_fips": "H1"
  },
  "48357": {
    "county_name": "Ochiltree County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "357",
    "class_fips": "H1"
  },
  "48359": {
    "county_name": "Oldham County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "359",
    "class_fips": "H1"
  },
  "48361": {
    "county_name": "Orange County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "361",
    "class_fips": "H1"
  },
  "48363": {
    "county_name": "Palo Pinto County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "363",
    "class_fips": "H1"
  },
  "48365": {
    "county_name": "Panola County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "365",
    "class_fips": "H1"
  },
  "48367": {
    "county_name": "Parker County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "367",
    "class_fips": "H1"
  },
  "48369": {
    "county_name": "Parmer County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "369",
    "class_fips": "H1"
  },
  "48371": {
    "county_name": "Pecos County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "371",
    "class_fips": "H1"
  },
  "48373": {
    "county_name": "Polk County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "373",
    "class_fips": "H1"
  },
  "48375": {
    "county_name": "Potter County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "375",
    "class_fips": "H1"
  },
  "48377": {
    "county_name": "Presidio County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "377",
    "class_fips": "H1"
  },
  "48379": {
    "county_name": "Rains County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "379",
    "class_fips": "H1"
  },
  "48381": {
    "county_name": "Randall County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "381",
    "class_fips": "H1"
  },
  "48383": {
    "county_name": "Reagan County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "383",
    "class_fips": "H1"
  },
  "48385": {
    "county_name": "Real County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "385",
    "class_fips": "H1"
  },
  "48387": {
    "county_name": "Red River County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "387",
    "class_fips": "H1"
  },
  "48389": {
    "county_name": "Reeves County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "389",
    "class_fips": "H1"
  },
  "48391": {
    "county_name": "Refugio County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "391",
    "class_fips": "H1"
  },
  "48393": {
    "county_name": "Roberts County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "393",
    "class_fips": "H1"
  },
  "48395": {
    "county_name": "Robertson County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "395",
    "class_fips": "H1"
  },
  "48397": {
    "county_name": "Rockwall County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "397",
    "class_fips": "H1"
  },
  "48399": {
    "county_name": "Runnels County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "399",
    "class_fips": "H1"
  },
  "48401": {
    "county_name": "Rusk County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "401",
    "class_fips": "H1"
  },
  "48403": {
    "county_name": "Sabine County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "403",
    "class_fips": "H1"
  },
  "48405": {
    "county_name": "San Augustine County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "405",
    "class_fips": "H1"
  },
  "48407": {
    "county_name": "San Jacinto County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "407",
    "class_fips": "H1"
  },
  "48409": {
    "county_name": "San Patricio County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "409",
    "class_fips": "H1"
  },
  "48411": {
    "county_name": "San Saba County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "411",
    "class_fips": "H1"
  },
  "48413": {
    "county_name": "Schleicher County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "413",
    "class_fips": "H1"
  },
  "48415": {
    "county_name": "Scurry County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "415",
    "class_fips": "H1"
  },
  "48417": {
    "county_name": "Shackelford County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "417",
    "class_fips": "H1"
  },
  "48419": {
    "county_name": "Shelby County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "419",
    "class_fips": "H1"
  },
  "48421": {
    "county_name": "Sherman County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "421",
    "class_fips": "H1"
  },
  "48423": {
    "county_name": "Smith County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "423",
    "class_fips": "H1"
  },
  "48425": {
    "county_name": "Somervell County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "425",
    "class_fips": "H1"
  },
  "48427": {
    "county_name": "Starr County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "427",
    "class_fips": "H1"
  },
  "48429": {
    "county_name": "Stephens County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "429",
    "class_fips": "H1"
  },
  "48431": {
    "county_name": "Sterling County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "431",
    "class_fips": "H1"
  },
  "48433": {
    "county_name": "Stonewall County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "433",
    "class_fips": "H1"
  },
  "48435": {
    "county_name": "Sutton County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "435",
    "class_fips": "H1"
  },
  "48437": {
    "county_name": "Swisher County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "437",
    "class_fips": "H1"
  },
  "48439": {
    "county_name": "Tarrant County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "439",
    "class_fips": "H1"
  },
  "48441": {
    "county_name": "Taylor County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "441",
    "class_fips": "H1"
  },
  "48443": {
    "county_name": "Terrell County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "443",
    "class_fips": "H1"
  },
  "48445": {
    "county_name": "Terry County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "445",
    "class_fips": "H1"
  },
  "48447": {
    "county_name": "Throckmorton County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "447",
    "class_fips": "H1"
  },
  "48449": {
    "county_name": "Titus County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "449",
    "class_fips": "H1"
  },
  "48451": {
    "county_name": "Tom Green County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "451",
    "class_fips": "H1"
  },
  "48453": {
    "county_name": "Travis County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "453",
    "class_fips": "H1"
  },
  "48455": {
    "county_name": "Trinity County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "455",
    "class_fips": "H1"
  },
  "48457": {
    "county_name": "Tyler County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "457",
    "class_fips": "H1"
  },
  "48459": {
    "county_name": "Upshur County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "459",
    "class_fips": "H1"
  },
  "48461": {
    "county_name": "Upton County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "461",
    "class_fips": "H1"
  },
  "48463": {
    "county_name": "Uvalde County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "463",
    "class_fips": "H1"
  },
  "48465": {
    "county_name": "Val Verde County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "465",
    "class_fips": "H1"
  },
  "48467": {
    "county_name": "Van Zandt County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "467",
    "class_fips": "H1"
  },
  "48469": {
    "county_name": "Victoria County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "469",
    "class_fips": "H1"
  },
  "48471": {
    "county_name": "Walker County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "471",
    "class_fips": "H1"
  },
  "48473": {
    "county_name": "Waller County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "473",
    "class_fips": "H1"
  },
  "48475": {
    "county_name": "Ward County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "475",
    "class_fips": "H1"
  },
  "48477": {
    "county_name": "Washington County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "477",
    "class_fips": "H1"
  },
  "48479": {
    "county_name": "Webb County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "479",
    "class_fips": "H1"
  },
  "48481": {
    "county_name": "Wharton County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "481",
    "class_fips": "H1"
  },
  "48483": {
    "county_name": "Wheeler County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "483",
    "class_fips": "H1"
  },
  "48485": {
    "county_name": "Wichita County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "485",
    "class_fips": "H1"
  },
  "48487": {
    "county_name": "Wilbarger County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "487",
    "class_fips": "H1"
  },
  "48489": {
    "county_name": "Willacy County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "489",
    "class_fips": "H1"
  },
  "48491": {
    "county_name": "Williamson County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "491",
    "class_fips": "H1"
  },
  "48493": {
    "county_name": "Wilson County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "493",
    "class_fips": "H1"
  },
  "48495": {
    "county_name": "Winkler County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "495",
    "class_fips": "H1"
  },
  "48497": {
    "county_name": "Wise County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "497",
    "class_fips": "H1"
  },
  "48499": {
    "county_name": "Wood County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "499",
    "class_fips": "H1"
  },
  "48501": {
    "county_name": "Yoakum County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "501",
    "class_fips": "H1"
  },
  "48503": {
    "county_name": "Young County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "503",
    "class_fips": "H1"
  },
  "48505": {
    "county_name": "Zapata County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "505",
    "class_fips": "H1"
  },
  "48507": {
    "county_name": "Zavala County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "507",
    "class_fips": "H1"
  },
  "49001": {
    "county_name": "Beaver County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "49003": {
    "county_name": "Box Elder County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "49005": {
    "county_name": "Cache County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "49007": {
    "county_name": "Carbon County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "49009": {
    "county_name": "Daggett County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "49011": {
    "county_name": "Davis County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "49013": {
    "county_name": "Duchesne County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "49015": {
    "county_name": "Emery County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "49017": {
    "county_name": "Garfield County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "49019": {
    "county_name": "Grand County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "49021": {
    "county_name": "Iron County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "49023": {
    "county_name": "Juab County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "49025": {
    "county_name": "Kane County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "49027": {
    "county_name": "Millard County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "49029": {
    "county_name": "Morgan County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "49031": {
    "county_name": "Piute County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "49033": {
    "county_name": "Rich County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "49035": {
    "county_name": "Salt Lake County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "49037": {
    "county_name": "San Juan County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "49039": {
    "county_name": "Sanpete County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "49041": {
    "county_name": "Sevier County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "49043": {
    "county_name": "Summit County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "49045": {
    "county_name": "Tooele County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "49047": {
    "county_name": "Uintah County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "49049": {
    "county_name": "Utah County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "49051": {
    "county_name": "Wasatch County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "49053": {
    "county_name": "Washington County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "49055": {
    "county_name": "Wayne County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "49057": {
    "county_name": "Weber County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "50001": {
    "county_name": "Addison County",
    "state_code": "VT",
    "state_fips": "50",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "50003": {
    "county_name": "Bennington County",
    "state_code": "VT",
    "state_fips": "50",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "50005": {
    "county_name": "Caledonia County",
    "state_code": "VT",
    "state_fips": "50",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "50007": {
    "county_name": "Chittenden County",
    "state_code": "VT",
    "state_fips": "50",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "50009": {
    "county_name": "Essex County",
    "state_code": "VT",
    "state_fips": "50",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "50011": {
    "county_name": "Franklin County",
    "state_code": "VT",
    "state_fips": "50",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "50013": {
    "county_name": "Grand Isle County",
    "state_code": "VT",
    "state_fips": "50",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "50015": {
    "county_name": "Lamoille County",
    "state_code": "VT",
    "state_fips": "50",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "50017": {
    "county_name": "Orange County",
    "state_code": "VT",
    "state_fips": "50",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "50019": {
    "county_name": "Orleans County",
    "state_code": "VT",
    "state_fips": "50",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "50021": {
    "county_name": "Rutland County",
    "state_code": "VT",
    "state_fips": "50",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "50023": {
    "county_name": "Washington County",
    "state_code": "VT",
    "state_fips": "50",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "50025": {
    "county_name": "Windham County",
    "state_code": "VT",
    "state_fips": "50",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "50027": {
    "county_name": "Windsor County",
    "state_code": "VT",
    "state_fips": "50",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "51001": {
    "county_name": "Accomack County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "51003": {
    "county_name": "Albemarle County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "51005": {
    "county_name": "Alleghany County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "51007": {
    "county_name": "Amelia County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "51009": {
    "county_name": "Amherst County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "51011": {
    "county_name": "Appomattox County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "51013": {
    "county_name": "Arlington County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "51015": {
    "county_name": "Augusta County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "51017": {
    "county_name": "Bath County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "51019": {
    "county_name": "Bedford County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "51021": {
    "county_name": "Bland County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "51023": {
    "county_name": "Botetourt County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "51025": {
    "county_name": "Brunswick County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "51027": {
    "county_name": "Buchanan County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "51029": {
    "county_name": "Buckingham County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "51031": {
    "county_name": "Campbell County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "51033": {
    "county_name": "Caroline County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "51035": {
    "county_name": "Carroll County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "51036": {
    "county_name": "Charles City County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "036",
    "class_fips": "H1"
  },
  "51037": {
    "county_name": "Charlotte County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "51041": {
    "county_name": "Chesterfield County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "51043": {
    "county_name": "Clarke County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "51045": {
    "county_name": "Craig County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "51047": {
    "county_name": "Culpeper County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "51049": {
    "county_name": "Cumberland County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "51051": {
    "county_name": "Dickenson County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "51053": {
    "county_name": "Dinwiddie County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "51057": {
    "county_name": "Essex County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "51059": {
    "county_name": "Fairfax County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "51061": {
    "county_name": "Fauquier County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "51063": {
    "county_name": "Floyd County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "51065": {
    "county_name": "Fluvanna County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "51067": {
    "county_name": "Franklin County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "51069": {
    "county_name": "Frederick County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "51071": {
    "county_name": "Giles County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "51073": {
    "county_name": "Gloucester County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "51075": {
    "county_name": "Goochland County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "51077": {
    "county_name": "Grayson County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "51079": {
    "county_name": "Greene County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "51081": {
    "county_name": "Greensville County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "081",
    "class_fips": "H1"
  },
  "51083": {
    "county_name": "Halifax County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "51085": {
    "county_name": "Hanover County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "085",
    "class_fips": "H1"
  },
  "51087": {
    "county_name": "Henrico County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "51089": {
    "county_name": "Henry County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "089",
    "class_fips": "H1"
  },
  "51091": {
    "county_name": "Highland County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "091",
    "class_fips": "H1"
  },
  "51093": {
    "county_name": "Isle of Wight County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "093",
    "class_fips": "H1"
  },
  "51095": {
    "county_name": "James City County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "095",
    "class_fips": "H1"
  },
  "51097": {
    "county_name": "King and Queen County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "097",
    "class_fips": "H1"
  },
  "51099": {
    "county_name": "King George County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "099",
    "class_fips": "H1"
  },
  "51101": {
    "county_name": "King William County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "101",
    "class_fips": "H1"
  },
  "51103": {
    "county_name": "Lancaster County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "103",
    "class_fips": "H1"
  },
  "51105": {
    "county_name": "Lee County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "105",
    "class_fips": "H1"
  },
  "51107": {
    "county_name": "Loudoun County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "107",
    "class_fips": "H1"
  },
  "51109": {
    "county_name": "Louisa County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "109",
    "class_fips": "H1"
  },
  "51111": {
    "county_name": "Lunenburg County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "111",
    "class_fips": "H1"
  },
  "51113": {
    "county_name": "Madison County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "113",
    "class_fips": "H1"
  },
  "51115": {
    "county_name": "Mathews County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "115",
    "class_fips": "H1"
  },
  "51117": {
    "county_name": "Mecklenburg County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "117",
    "class_fips": "H1"
  },
  "51119": {
    "county_name": "Middlesex County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "119",
    "class_fips": "H1"
  },
  "51121": {
    "county_name": "Montgomery County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "121",
    "class_fips": "H1"
  },
  "51125": {
    "county_name": "Nelson County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "125",
    "class_fips": "H1"
  },
  "51127": {
    "county_name": "New Kent County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "127",
    "class_fips": "H1"
  },
  "51131": {
    "county_name": "Northampton County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "131",
    "class_fips": "H1"
  },
  "51133": {
    "county_name": "Northumberland County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "133",
    "class_fips": "H1"
  },
  "51135": {
    "county_name": "Nottoway County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "135",
    "class_fips": "H1"
  },
  "51137": {
    "county_name": "Orange County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "137",
    "class_fips": "H1"
  },
  "51139": {
    "county_name": "Page County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "139",
    "class_fips": "H1"
  },
  "51141": {
    "county_name": "Patrick County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "141",
    "class_fips": "H1"
  },
  "51143": {
    "county_name": "Pittsylvania County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "143",
    "class_fips": "H1"
  },
  "51145": {
    "county_name": "Powhatan County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "145",
    "class_fips": "H1"
  },
  "51147": {
    "county_name": "Prince Edward County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "147",
    "class_fips": "H1"
  },
  "51149": {
    "county_name": "Prince George County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "149",
    "class_fips": "H1"
  },
  "51153": {
    "county_name": "Prince William County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "153",
    "class_fips": "H1"
  },
  "51155": {
    "county_name": "Pulaski County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "155",
    "class_fips": "H1"
  },
  "51157": {
    "county_name": "Rappahannock County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "157",
    "class_fips": "H1"
  },
  "51159": {
    "county_name": "Richmond County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "159",
    "class_fips": "H1"
  },
  "51161": {
    "county_name": "Roanoke County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "161",
    "class_fips": "H1"
  },
  "51163": {
    "county_name": "Rockbridge County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "163",
    "class_fips": "H1"
  },
  "51165": {
    "county_name": "Rockingham County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "165",
    "class_fips": "H1"
  },
  "51167": {
    "county_name": "Russell County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "167",
    "class_fips": "H1"
  },
  "51169": {
    "county_name": "Scott County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "169",
    "class_fips": "H1"
  },
  "51171": {
    "county_name": "Shenandoah County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "171",
    "class_fips": "H1"
  },
  "51173": {
    "county_name": "Smyth County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "173",
    "class_fips": "H1"
  },
  "51175": {
    "county_name": "Southampton County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "175",
    "class_fips": "H1"
  },
  "51177": {
    "county_name": "Spotsylvania County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "177",
    "class_fips": "H1"
  },
  "51179": {
    "county_name": "Stafford County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "179",
    "class_fips": "H1"
  },
  "51181": {
    "county_name": "Surry County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "181",
    "class_fips": "H1"
  },
  "51183": {
    "county_name": "Sussex County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "183",
    "class_fips": "H1"
  },
  "51185": {
    "county_name": "Tazewell County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "185",
    "class_fips": "H1"
  },
  "51187": {
    "county_name": "Warren County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "187",
    "class_fips": "H1"
  },
  "51191": {
    "county_name": "Washington County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "191",
    "class_fips": "H1"
  },
  "51193": {
    "county_name": "Westmoreland County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "193",
    "class_fips": "H1"
  },
  "51195": {
    "county_name": "Wise County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "195",
    "class_fips": "H1"
  },
  "51197": {
    "county_name": "Wythe County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "197",
    "class_fips": "H1"
  },
  "51199": {
    "county_name": "York County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "199",
    "class_fips": "H1"
  },
  "51510": {
    "county_name": "Alexandria city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "510",
    "class_fips": "C7"
  },
  "51520": {
    "county_name": "Bristol city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "520",
    "class_fips": "C7"
  },
  "51530": {
    "county_name": "Buena Vista city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "530",
    "class_fips": "C7"
  },
  "51540": {
    "county_name": "Charlottesville city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "540",
    "class_fips": "C7"
  },
  "51550": {
    "county_name": "Chesapeake city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "550",
    "class_fips": "C7"
  },
  "51570": {
    "county_name": "Colonial Heights city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "570",
    "class_fips": "C7"
  },
  "51580": {
    "county_name": "Covington city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "580",
    "class_fips": "C7"
  },
  "51590": {
    "county_name": "Danville city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "590",
    "class_fips": "C7"
  },
  "51595": {
    "county_name": "Emporia city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "595",
    "class_fips": "C7"
  },
  "51600": {
    "county_name": "Fairfax city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "600",
    "class_fips": "C7"
  },
  "51610": {
    "county_name": "Falls Church city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "610",
    "class_fips": "C7"
  },
  "51620": {
    "county_name": "Franklin city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "620",
    "class_fips": "C7"
  },
  "51630": {
    "county_name": "Fredericksburg city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "630",
    "class_fips": "C7"
  },
  "51640": {
    "county_name": "Galax city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "640",
    "class_fips": "C7"
  },
  "51650": {
    "county_name": "Hampton city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "650",
    "class_fips": "C7"
  },
  "51660": {
    "county_name": "Harrisonburg city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "660",
    "class_fips": "C7"
  },
  "51670": {
    "county_name": "Hopewell city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "670",
    "class_fips": "C7"
  },
  "51678": {
    "county_name": "Lexington city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "678",
    "class_fips": "C7"
  },
  "51680": {
    "county_name": "Lynchburg city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "680",
    "class_fips": "C7"
  },
  "51683": {
    "county_name": "Manassas city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "683",
    "class_fips": "C7"
  },
  "51685": {
    "county_name": "Manassas Park city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "685",
    "class_fips": "C7"
  },
  "51690": {
    "county_name": "Martinsville city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "690",
    "class_fips": "C7"
  },
  "51700": {
    "county_name": "Newport News city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "700",
    "class_fips": "C7"
  },
  "51710": {
    "county_name": "Norfolk city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "710",
    "class_fips": "C7"
  },
  "51720": {
    "county_name": "Norton city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "720",
    "class_fips": "C7"
  },
  "51730": {
    "county_name": "Petersburg city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "730",
    "class_fips": "C7"
  },
  "51735": {
    "county_name": "Poquoson city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "735",
    "class_fips": "C7"
  },
  "51740": {
    "county_name": "Portsmouth city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "740",
    "class_fips": "C7"
  },
  "51750": {
    "county_name": "Radford city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "750",
    "class_fips": "C7"
  },
  "51760": {
    "county_name": "Richmond city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "760",
    "class_fips": "C7"
  },
  "51770": {
    "county_name": "Roanoke city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "770",
    "class_fips": "C7"
  },
  "51775": {
    "county_name": "Salem city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "775",
    "class_fips": "C7"
  },
  "51790": {
    "county_name": "Staunton city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "790",
    "class_fips": "C7"
  },
  "51800": {
    "county_name": "Suffolk city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "800",
    "class_fips": "C7"
  },
  "51810": {
    "county_name": "Virginia Beach city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "810",
    "class_fips": "C7"
  },
  "51820": {
    "county_name": "Waynesboro city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "820",
    "class_fips": "C7"
  },
  "51830": {
    "county_name": "Williamsburg city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "830",
    "class_fips": "C7"
  },
  "51840": {
    "county_name": "Winchester city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "840",
    "class_fips": "C7"
  },
  "53001": {
    "county_name": "Adams County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "53003": {
    "county_name": "Asotin County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "53005": {
    "county_name": "Benton County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "53007": {
    "county_name": "Chelan County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "53009": {
    "county_name": "Clallam County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "53011": {
    "county_name": "Clark County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "53013": {
    "county_name": "Columbia County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "53015": {
    "county_name": "Cowlitz County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "53017": {
    "county_name": "Douglas County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "53019": {
    "county_name": "Ferry County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "53021": {
    "county_name": "Franklin County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "53023": {
    "county_name": "Garfield County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "53025": {
    "county_name": "Grant County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "53027": {
    "county_name": "Grays Harbor County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "53029": {
    "county_name": "Island County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "53031": {
    "county_name": "Jefferson County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "53033": {
    "county_name": "King County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "53035": {
    "county_name": "Kitsap County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "53037": {
    "county_name": "Kittitas County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "53039": {
    "county_name": "Klickitat County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "53041": {
    "county_name": "Lewis County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "53043": {
    "county_name": "Lincoln County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "53045": {
    "county_name": "Mason County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "53047": {
    "county_name": "Okanogan County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "53049": {
    "county_name": "Pacific County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "53051": {
    "county_name": "Pend Oreille County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "53053": {
    "county_name": "Pierce County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "53055": {
    "county_name": "San Juan County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "53057": {
    "county_name": "Skagit County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "53059": {
    "county_name": "Skamania County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "53061": {
    "county_name": "Snohomish County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "53063": {
    "county_name": "Spokane County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "53065": {
    "county_name": "Stevens County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "53067": {
    "county_name": "Thurston County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "53069": {
    "county_name": "Wahkiakum County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "53071": {
    "county_name": "Walla Walla County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "53073": {
    "county_name": "Whatcom County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "53075": {
    "county_name": "Whitman County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "53077": {
    "county_name": "Yakima County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "54001": {
    "county_name": "Barbour County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "54003": {
    "county_name": "Berkeley County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "54005": {
    "county_name": "Boone County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "54007": {
    "county_name": "Braxton County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "54009": {
    "county_name": "Brooke County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "54011": {
    "county_name": "Cabell County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "54013": {
    "county_name": "Calhoun County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "54015": {
    "county_name": "Clay County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "54017": {
    "county_name": "Doddridge County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "54019": {
    "county_name": "Fayette County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "54021": {
    "county_name": "Gilmer County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "54023": {
    "county_name": "Grant County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "54025": {
    "county_name": "Greenbrier County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "54027": {
    "county_name": "Hampshire County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "54029": {
    "county_name": "Hancock County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "54031": {
    "county_name": "Hardy County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "54033": {
    "county_name": "Harrison County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "54035": {
    "county_name": "Jackson County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "54037": {
    "county_name": "Jefferson County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "54039": {
    "county_name": "Kanawha County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "54041": {
    "county_name": "Lewis County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "54043": {
    "county_name": "Lincoln County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "54045": {
    "county_name": "Logan County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "54047": {
    "county_name": "McDowell County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "54049": {
    "county_name": "Marion County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "54051": {
    "county_name": "Marshall County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "54053": {
    "county_name": "Mason County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "54055": {
    "county_name": "Mercer County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "54057": {
    "county_name": "Mineral County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "54059": {
    "county_name": "Mingo County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "54061": {
    "county_name": "Monongalia County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "54063": {
    "county_name": "Monroe County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "54065": {
    "county_name": "Morgan County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "54067": {
    "county_name": "Nicholas County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "54069": {
    "county_name": "Ohio County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "54071": {
    "county_name": "Pendleton County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "54073": {
    "county_name": "Pleasants County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "54075": {
    "county_name": "Pocahontas County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "54077": {
    "county_name": "Preston County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "54079": {
    "county_name": "Putnam County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "54081": {
    "county_name": "Raleigh County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "081",
    "class_fips": "H1"
  },
  "54083": {
    "county_name": "Randolph County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "54085": {
    "county_name": "Ritchie County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "085",
    "class_fips": "H1"
  },
  "54087": {
    "county_name": "Roane County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "54089": {
    "county_name": "Summers County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "089",
    "class_fips": "H1"
  },
  "54091": {
    "county_name": "Taylor County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "091",
    "class_fips": "H1"
  },
  "54093": {
    "county_name": "Tucker County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "093",
    "class_fips": "H1"
  },
  "54095": {
    "county_name": "Tyler County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "095",
    "class_fips": "H1"
  },
  "54097": {
    "county_name": "Upshur County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "097",
    "class_fips": "H1"
  },
  "54099": {
    "county_name": "Wayne County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "099",
    "class_fips": "H1"
  },
  "54101": {
    "county_name": "Webster County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "101",
    "class_fips": "H1"
  },
  "54103": {
    "county_name": "Wetzel County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "103",
    "class_fips": "H1"
  },
  "54105": {
    "county_name": "Wirt County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "105",
    "class_fips": "H1"
  },
  "54107": {
    "county_name": "Wood County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "107",
    "class_fips": "H1"
  },
  "54109": {
    "county_name": "Wyoming County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "109",
    "class_fips": "H1"
  },
  "55001": {
    "county_name": "Adams County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "55003": {
    "county_name": "Ashland County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "55005": {
    "county_name": "Barron County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "55007": {
    "county_name": "Bayfield County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "55009": {
    "county_name": "Brown County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "55011": {
    "county_name": "Buffalo County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "55013": {
    "county_name": "Burnett County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "55015": {
    "county_name": "Calumet County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "55017": {
    "county_name": "Chippewa County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "55019": {
    "county_name": "Clark County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "55021": {
    "county_name": "Columbia County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "55023": {
    "county_name": "Crawford County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "55025": {
    "county_name": "Dane County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "55027": {
    "county_name": "Dodge County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "55029": {
    "county_name": "Door County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "55031": {
    "county_name": "Douglas County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "55033": {
    "county_name": "Dunn County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "55035": {
    "county_name": "Eau Claire County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "55037": {
    "county_name": "Florence County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "55039": {
    "county_name": "Fond du Lac County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "55041": {
    "county_name": "Forest County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "55043": {
    "county_name": "Grant County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "55045": {
    "county_name": "Green County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "55047": {
    "county_name": "Green Lake County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "55049": {
    "county_name": "Iowa County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "55051": {
    "county_name": "Iron County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "55053": {
    "county_name": "Jackson County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "55055": {
    "county_name": "Jefferson County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "55057": {
    "county_name": "Juneau County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "55059": {
    "county_name": "Kenosha County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "55061": {
    "county_name": "Kewaunee County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "55063": {
    "county_name": "La Crosse County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "55065": {
    "county_name": "Lafayette County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "55067": {
    "county_name": "Langlade County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "55069": {
    "county_name": "Lincoln County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "55071": {
    "county_name": "Manitowoc County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "55073": {
    "county_name": "Marathon County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "55075": {
    "county_name": "Marinette County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "55077": {
    "county_name": "Marquette County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "55078": {
    "county_name": "Menominee County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "078",
    "class_fips": "H1"
  },
  "55079": {
    "county_name": "Milwaukee County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "55081": {
    "county_name": "Monroe County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "081",
    "class_fips": "H1"
  },
  "55083": {
    "county_name": "Oconto County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "55085": {
    "county_name": "Oneida County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "085",
    "class_fips": "H1"
  },
  "55087": {
    "county_name": "Outagamie County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "55089": {
    "county_name": "Ozaukee County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "089",
    "class_fips": "H1"
  },
  "55091": {
    "county_name": "Pepin County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "091",
    "class_fips": "H1"
  },
  "55093": {
    "county_name": "Pierce County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "093",
    "class_fips": "H1"
  },
  "55095": {
    "county_name": "Polk County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "095",
    "class_fips": "H1"
  },
  "55097": {
    "county_name": "Portage County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "097",
    "class_fips": "H1"
  },
  "55099": {
    "county_name": "Price County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "099",
    "class_fips": "H1"
  },
  "55101": {
    "county_name": "Racine County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "101",
    "class_fips": "H1"
  },
  "55103": {
    "county_name": "Richland County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "103",
    "class_fips": "H1"
  },
  "55105": {
    "county_name": "Rock County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "105",
    "class_fips": "H1"
  },
  "55107": {
    "county_name": "Rusk County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "107",
    "class_fips": "H1"
  },
  "55109": {
    "county_name": "St. Croix County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "109",
    "class_fips": "H1"
  },
  "55111": {
    "county_name": "Sauk County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "111",
    "class_fips": "H1"
  },
  "55113": {
    "county_name": "Sawyer County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "113",
    "class_fips": "H1"
  },
  "55115": {
    "county_name": "Shawano County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "115",
    "class_fips": "H1"
  },
  "55117": {
    "county_name": "Sheboygan County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "117",
    "class_fips": "H1"
  },
  "55119": {
    "county_name": "Taylor County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "119",
    "class_fips": "H1"
  },
  "55121": {
    "county_name": "Trempealeau County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "121",
    "class_fips": "H1"
  },
  "55123": {
    "county_name": "Vernon County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "123",
    "class_fips": "H1"
  },
  "55125": {
    "county_name": "Vilas County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "125",
    "class_fips": "H1"
  },
  "55127": {
    "county_name": "Walworth County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "127",
    "class_fips": "H1"
  },
  "55129": {
    "county_name": "Washburn County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "129",
    "class_fips": "H1"
  },
  "55131": {
    "county_name": "Washington County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "131",
    "class_fips": "H1"
  },
  "55133": {
    "county_name": "Waukesha County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "133",
    "class_fips": "H1"
  },
  "55135": {
    "county_name": "Waupaca County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "135",
    "class_fips": "H1"
  },
  "55137": {
    "county_name": "Waushara County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "137",
    "class_fips": "H1"
  },
  "55139": {
    "county_name": "Winnebago County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "139",
    "class_fips": "H1"
  },
  "55141": {
    "county_name": "Wood County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "141",
    "class_fips": "H1"
  },
  "56001": {
    "county_name": "Albany County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "56003": {
    "county_name": "Big Horn County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "56005": {
    "county_name": "Campbell County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "56007": {
    "county_name": "Carbon County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "56009": {
    "county_name": "Converse County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "56011": {
    "county_name": "Crook County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "56013": {
    "county_name": "Fremont County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "56015": {
    "county_name": "Goshen County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "56017": {
    "county_name": "Hot Springs County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "56019": {
    "county_name": "Johnson County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "56021": {
    "county_name": "Laramie County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "56023": {
    "county_name": "Lincoln County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "56025": {
    "county_name": "Natrona County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "56027": {
    "county_name": "Niobrara County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "56029": {
    "county_name": "Park County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "56031": {
    "county_name": "Platte County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "56033": {
    "county_name": "Sheridan County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "56035": {
    "county_name": "Sublette County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "56037": {
    "county_name": "Sweetwater County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "56039": {
    "county_name": "Teton County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "56041": {
    "county_name": "Uinta County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "56043": {
    "county_name": "Washakie County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "56045": {
    "county_name": "Weston County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "01001": {
    "county_name": "Autauga County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "01003": {
    "county_name": "Baldwin County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "01005": {
    "county_name": "Barbour County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "01007": {
    "county_name": "Bibb County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "01009": {
    "county_name": "Blount County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "01011": {
    "county_name": "Bullock County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "01013": {
    "county_name": "Butler County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "01015": {
    "county_name": "Calhoun County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "01017": {
    "county_name": "Chambers County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "01019": {
    "county_name": "Cherokee County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "01021": {
    "county_name": "Chilton County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "01023": {
    "county_name": "Choctaw County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "01025": {
    "county_name": "Clarke County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "01027": {
    "county_name": "Clay County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "01029": {
    "county_name": "Cleburne County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "01031": {
    "county_name": "Coffee County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "01033": {
    "county_name": "Colbert County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "01035": {
    "county_name": "Conecuh County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "01037": {
    "county_name": "Coosa County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "01039": {
    "county_name": "Covington County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "01041": {
    "county_name": "Crenshaw County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "01043": {
    "county_name": "Cullman County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "01045": {
    "county_name": "Dale County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "01047": {
    "county_name": "Dallas County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "01049": {
    "county_name": "DeKalb County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "01051": {
    "county_name": "Elmore County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "01053": {
    "county_name": "Escambia County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "01055": {
    "county_name": "Etowah County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "01057": {
    "county_name": "Fayette County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "01059": {
    "county_name": "Franklin County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "01061": {
    "county_name": "Geneva County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "01063": {
    "county_name": "Greene County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "01065": {
    "county_name": "Hale County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "01067": {
    "county_name": "Henry County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "01069": {
    "county_name": "Houston County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "01071": {
    "county_name": "Jackson County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "01073": {
    "county_name": "Jefferson County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "01075": {
    "county_name": "Lamar County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "01077": {
    "county_name": "Lauderdale County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "01079": {
    "county_name": "Lawrence County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "01081": {
    "county_name": "Lee County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "081",
    "class_fips": "H1"
  },
  "01083": {
    "county_name": "Limestone County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "01085": {
    "county_name": "Lowndes County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "085",
    "class_fips": "H1"
  },
  "01087": {
    "county_name": "Macon County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "01089": {
    "county_name": "Madison County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "089",
    "class_fips": "H1"
  },
  "01091": {
    "county_name": "Marengo County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "091",
    "class_fips": "H1"
  },
  "01093": {
    "county_name": "Marion County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "093",
    "class_fips": "H1"
  },
  "01095": {
    "county_name": "Marshall County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "095",
    "class_fips": "H1"
  },
  "01097": {
    "county_name": "Mobile County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "097",
    "class_fips": "H1"
  },
  "01099": {
    "county_name": "Monroe County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "099",
    "class_fips": "H1"
  },
  "01101": {
    "county_name": "Montgomery County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "101",
    "class_fips": "H1"
  },
  "01103": {
    "county_name": "Morgan County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "103",
    "class_fips": "H1"
  },
  "01105": {
    "county_name": "Perry County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "105",
    "class_fips": "H1"
  },
  "01107": {
    "county_name": "Pickens County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "107",
    "class_fips": "H1"
  },
  "01109": {
    "county_name": "Pike County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "109",
    "class_fips": "H1"
  },
  "01111": {
    "county_name": "Randolph County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "111",
    "class_fips": "H1"
  },
  "01113": {
    "county_name": "Russell County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "113",
    "class_fips": "H1"
  },
  "01115": {
    "county_name": "St. Clair County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "115",
    "class_fips": "H1"
  },
  "01117": {
    "county_name": "Shelby County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "117",
    "class_fips": "H1"
  },
  "01119": {
    "county_name": "Sumter County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "119",
    "class_fips": "H1"
  },
  "01121": {
    "county_name": "Talladega County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "121",
    "class_fips": "H1"
  },
  "01123": {
    "county_name": "Tallapoosa County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "123",
    "class_fips": "H1"
  },
  "01125": {
    "county_name": "Tuscaloosa County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "125",
    "class_fips": "H1"
  },
  "01127": {
    "county_name": "Walker County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "127",
    "class_fips": "H1"
  },
  "01129": {
    "county_name": "Washington County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "129",
    "class_fips": "H1"
  },
  "01131": {
    "county_name": "Wilcox County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "131",
    "class_fips": "H1"
  },
  "01133": {
    "county_name": "Winston County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "133",
    "class_fips": "H1"
  },
  "02013": {
    "county_name": "Aleutians East Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "02016": {
    "county_name": "Aleutians West Census Area",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "016",
    "class_fips": "H5"
  },
  "02020": {
    "county_name": "Anchorage Municipality",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "020",
    "class_fips": "H6"
  },
  "02050": {
    "county_name": "Bethel Census Area",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "050",
    "class_fips": "H5"
  },
  "02060": {
    "county_name": "Bristol Bay Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "060",
    "class_fips": "H1"
  },
  "02068": {
    "county_name": "Denali Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "068",
    "class_fips": "H1"
  },
  "02070": {
    "county_name": "Dillingham Census Area",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "070",
    "class_fips": "H5"
  },
  "02090": {
    "county_name": "Fairbanks North Star Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "090",
    "class_fips": "H1"
  },
  "02100": {
    "county_name": "Haines Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "100",
    "class_fips": "H1"
  },
  "02105": {
    "county_name": "Hoonah-Angoon Census Area",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "105",
    "class_fips": "H5"
  },
  "02110": {
    "county_name": "Juneau City and Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "110",
    "class_fips": "H6"
  },
  "02122": {
    "county_name": "Kenai Peninsula Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "122",
    "class_fips": "H1"
  },
  "02130": {
    "county_name": "Ketchikan Gateway Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "130",
    "class_fips": "H1"
  },
  "02150": {
    "county_name": "Kodiak Island Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "150",
    "class_fips": "H1"
  },
  "02158": {
    "county_name": "Kusilvak Census Area",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "158",
    "class_fips": "H5"
  },
  "02164": {
    "county_name": "Lake and Peninsula Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "164",
    "class_fips": "H1"
  },
  "02170": {
    "county_name": "Matanuska-Susitna Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "170",
    "class_fips": "H1"
  },
  "02180": {
    "county_name": "Nome Census Area",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "180",
    "class_fips": "H5"
  },
  "02185": {
    "county_name": "North Slope Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "185",
    "class_fips": "H1"
  },
  "02188": {
    "county_name": "Northwest Arctic Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "188",
    "class_fips": "H1"
  },
  "02195": {
    "county_name": "Petersburg Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "195",
    "class_fips": "H1"
  },
  "02198": {
    "county_name": "Prince of Wales-Hyder Census Area",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "198",
    "class_fips": "H5"
  },
  "02220": {
    "county_name": "Sitka City and Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "220",
    "class_fips": "H6"
  },
  "02230": {
    "county_name": "Skagway Municipality",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "230",
    "class_fips": "H1"
  },
  "02240": {
    "county_name": "Southeast Fairbanks Census Area",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "240",
    "class_fips": "H5"
  },
  "02261": {
    "county_name": "Valdez-Cordova Census Area",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "261",
    "class_fips": "H5"
  },
  "02275": {
    "county_name": "Wrangell City and Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "275",
    "class_fips": "H1"
  },
  "02282": {
    "county_name": "Yakutat City and Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "282",
    "class_fips": "H1"
  },
  "02290": {
    "county_name": "Yukon-Koyukuk Census Area",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "290",
    "class_fips": "H5"
  },
  "04001": {
    "county_name": "Apache County",
    "state_code": "AZ",
    "state_fips": "04",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "04003": {
    "county_name": "Cochise County",
    "state_code": "AZ",
    "state_fips": "04",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "04005": {
    "county_name": "Coconino County",
    "state_code": "AZ",
    "state_fips": "04",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "04007": {
    "county_name": "Gila County",
    "state_code": "AZ",
    "state_fips": "04",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "04009": {
    "county_name": "Graham County",
    "state_code": "AZ",
    "state_fips": "04",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "04011": {
    "county_name": "Greenlee County",
    "state_code": "AZ",
    "state_fips": "04",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "04012": {
    "county_name": "La Paz County",
    "state_code": "AZ",
    "state_fips": "04",
    "county_fips": "012",
    "class_fips": "H1"
  },
  "04013": {
    "county_name": "Maricopa County",
    "state_code": "AZ",
    "state_fips": "04",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "04015": {
    "county_name": "Mohave County",
    "state_code": "AZ",
    "state_fips": "04",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "04017": {
    "county_name": "Navajo County",
    "state_code": "AZ",
    "state_fips": "04",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "04019": {
    "county_name": "Pima County",
    "state_code": "AZ",
    "state_fips": "04",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "04021": {
    "county_name": "Pinal County",
    "state_code": "AZ",
    "state_fips": "04",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "04023": {
    "county_name": "Santa Cruz County",
    "state_code": "AZ",
    "state_fips": "04",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "04025": {
    "county_name": "Yavapai County",
    "state_code": "AZ",
    "state_fips": "04",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "04027": {
    "county_name": "Yuma County",
    "state_code": "AZ",
    "state_fips": "04",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "05001": {
    "county_name": "Arkansas County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "05003": {
    "county_name": "Ashley County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "05005": {
    "county_name": "Baxter County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "05007": {
    "county_name": "Benton County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "05009": {
    "county_name": "Boone County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "05011": {
    "county_name": "Bradley County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "05013": {
    "county_name": "Calhoun County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "05015": {
    "county_name": "Carroll County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "05017": {
    "county_name": "Chicot County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "05019": {
    "county_name": "Clark County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "05021": {
    "county_name": "Clay County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "05023": {
    "county_name": "Cleburne County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "05025": {
    "county_name": "Cleveland County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "05027": {
    "county_name": "Columbia County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "05029": {
    "county_name": "Conway County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "05031": {
    "county_name": "Craighead County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "05033": {
    "county_name": "Crawford County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "05035": {
    "county_name": "Crittenden County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "05037": {
    "county_name": "Cross County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "05039": {
    "county_name": "Dallas County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "05041": {
    "county_name": "Desha County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "05043": {
    "county_name": "Drew County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "05045": {
    "county_name": "Faulkner County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "05047": {
    "county_name": "Franklin County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "05049": {
    "county_name": "Fulton County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "05051": {
    "county_name": "Garland County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "05053": {
    "county_name": "Grant County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "05055": {
    "county_name": "Greene County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "05057": {
    "county_name": "Hempstead County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "05059": {
    "county_name": "Hot Spring County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "05061": {
    "county_name": "Howard County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "05063": {
    "county_name": "Independence County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "05065": {
    "county_name": "Izard County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "05067": {
    "county_name": "Jackson County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "05069": {
    "county_name": "Jefferson County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "05071": {
    "county_name": "Johnson County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "05073": {
    "county_name": "Lafayette County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "05075": {
    "county_name": "Lawrence County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "05077": {
    "county_name": "Lee County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "05079": {
    "county_name": "Lincoln County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "05081": {
    "county_name": "Little River County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "081",
    "class_fips": "H1"
  },
  "05083": {
    "county_name": "Logan County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "05085": {
    "county_name": "Lonoke County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "085",
    "class_fips": "H1"
  },
  "05087": {
    "county_name": "Madison County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "05089": {
    "county_name": "Marion County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "089",
    "class_fips": "H1"
  },
  "05091": {
    "county_name": "Miller County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "091",
    "class_fips": "H1"
  },
  "05093": {
    "county_name": "Mississippi County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "093",
    "class_fips": "H1"
  },
  "05095": {
    "county_name": "Monroe County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "095",
    "class_fips": "H1"
  },
  "05097": {
    "county_name": "Montgomery County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "097",
    "class_fips": "H1"
  },
  "05099": {
    "county_name": "Nevada County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "099",
    "class_fips": "H1"
  },
  "05101": {
    "county_name": "Newton County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "101",
    "class_fips": "H1"
  },
  "05103": {
    "county_name": "Ouachita County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "103",
    "class_fips": "H1"
  },
  "05105": {
    "county_name": "Perry County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "105",
    "class_fips": "H1"
  },
  "05107": {
    "county_name": "Phillips County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "107",
    "class_fips": "H1"
  },
  "05109": {
    "county_name": "Pike County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "109",
    "class_fips": "H1"
  },
  "05111": {
    "county_name": "Poinsett County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "111",
    "class_fips": "H1"
  },
  "05113": {
    "county_name": "Polk County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "113",
    "class_fips": "H1"
  },
  "05115": {
    "county_name": "Pope County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "115",
    "class_fips": "H1"
  },
  "05117": {
    "county_name": "Prairie County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "117",
    "class_fips": "H1"
  },
  "05119": {
    "county_name": "Pulaski County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "119",
    "class_fips": "H1"
  },
  "05121": {
    "county_name": "Randolph County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "121",
    "class_fips": "H1"
  },
  "05123": {
    "county_name": "St. Francis County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "123",
    "class_fips": "H1"
  },
  "05125": {
    "county_name": "Saline County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "125",
    "class_fips": "H1"
  },
  "05127": {
    "county_name": "Scott County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "127",
    "class_fips": "H1"
  },
  "05129": {
    "county_name": "Searcy County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "129",
    "class_fips": "H1"
  },
  "05131": {
    "county_name": "Sebastian County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "131",
    "class_fips": "H1"
  },
  "05133": {
    "county_name": "Sevier County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "133",
    "class_fips": "H1"
  },
  "05135": {
    "county_name": "Sharp County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "135",
    "class_fips": "H1"
  },
  "05137": {
    "county_name": "Stone County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "137",
    "class_fips": "H1"
  },
  "05139": {
    "county_name": "Union County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "139",
    "class_fips": "H1"
  },
  "05141": {
    "county_name": "Van Buren County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "141",
    "class_fips": "H1"
  },
  "05143": {
    "county_name": "Washington County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "143",
    "class_fips": "H1"
  },
  "05145": {
    "county_name": "White County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "145",
    "class_fips": "H1"
  },
  "05147": {
    "county_name": "Woodruff County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "147",
    "class_fips": "H1"
  },
  "05149": {
    "county_name": "Yell County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "149",
    "class_fips": "H1"
  },
  "06001": {
    "county_name": "Alameda County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "06003": {
    "county_name": "Alpine County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "06005": {
    "county_name": "Amador County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "06007": {
    "county_name": "Butte County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "06009": {
    "county_name": "Calaveras County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "06011": {
    "county_name": "Colusa County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "06013": {
    "county_name": "Contra Costa County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "06015": {
    "county_name": "Del Norte County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "06017": {
    "county_name": "El Dorado County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "06019": {
    "county_name": "Fresno County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "06021": {
    "county_name": "Glenn County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "06023": {
    "county_name": "Humboldt County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "06025": {
    "county_name": "Imperial County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "06027": {
    "county_name": "Inyo County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "06029": {
    "county_name": "Kern County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "06031": {
    "county_name": "Kings County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "031",
    "class_fips": "H1"
  },
  "06033": {
    "county_name": "Lake County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "06035": {
    "county_name": "Lassen County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "06037": {
    "county_name": "Los Angeles County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "06039": {
    "county_name": "Madera County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "06041": {
    "county_name": "Marin County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "06043": {
    "county_name": "Mariposa County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "06045": {
    "county_name": "Mendocino County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "06047": {
    "county_name": "Merced County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "06049": {
    "county_name": "Modoc County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "06051": {
    "county_name": "Mono County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "06053": {
    "county_name": "Monterey County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "06055": {
    "county_name": "Napa County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "06057": {
    "county_name": "Nevada County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "06059": {
    "county_name": "Orange County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "06061": {
    "county_name": "Placer County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "06063": {
    "county_name": "Plumas County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "06065": {
    "county_name": "Riverside County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "06067": {
    "county_name": "Sacramento County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "06069": {
    "county_name": "San Benito County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "06071": {
    "county_name": "San Bernardino County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "06073": {
    "county_name": "San Diego County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "06075": {
    "county_name": "San Francisco County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "075",
    "class_fips": "H6"
  },
  "06077": {
    "county_name": "San Joaquin County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "06079": {
    "county_name": "San Luis Obispo County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "06081": {
    "county_name": "San Mateo County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "081",
    "class_fips": "H1"
  },
  "06083": {
    "county_name": "Santa Barbara County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "06085": {
    "county_name": "Santa Clara County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "085",
    "class_fips": "H1"
  },
  "06087": {
    "county_name": "Santa Cruz County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "06089": {
    "county_name": "Shasta County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "089",
    "class_fips": "H1"
  },
  "06091": {
    "county_name": "Sierra County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "091",
    "class_fips": "H1"
  },
  "06093": {
    "county_name": "Siskiyou County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "093",
    "class_fips": "H1"
  },
  "06095": {
    "county_name": "Solano County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "095",
    "class_fips": "H1"
  },
  "06097": {
    "county_name": "Sonoma County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "097",
    "class_fips": "H1"
  },
  "06099": {
    "county_name": "Stanislaus County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "099",
    "class_fips": "H1"
  },
  "06101": {
    "county_name": "Sutter County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "101",
    "class_fips": "H1"
  },
  "06103": {
    "county_name": "Tehama County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "103",
    "class_fips": "H1"
  },
  "06105": {
    "county_name": "Trinity County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "105",
    "class_fips": "H1"
  },
  "06107": {
    "county_name": "Tulare County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "107",
    "class_fips": "H1"
  },
  "06109": {
    "county_name": "Tuolumne County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "109",
    "class_fips": "H1"
  },
  "06111": {
    "county_name": "Ventura County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "111",
    "class_fips": "H1"
  },
  "06113": {
    "county_name": "Yolo County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "113",
    "class_fips": "H1"
  },
  "06115": {
    "county_name": "Yuba County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "115",
    "class_fips": "H1"
  },
  "08001": {
    "county_name": "Adams County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "001",
    "class_fips": "H1"
  },
  "08003": {
    "county_name": "Alamosa County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "003",
    "class_fips": "H1"
  },
  "08005": {
    "county_name": "Arapahoe County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "005",
    "class_fips": "H1"
  },
  "08007": {
    "county_name": "Archuleta County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "007",
    "class_fips": "H1"
  },
  "08009": {
    "county_name": "Baca County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "009",
    "class_fips": "H1"
  },
  "08011": {
    "county_name": "Bent County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "011",
    "class_fips": "H1"
  },
  "08013": {
    "county_name": "Boulder County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "013",
    "class_fips": "H1"
  },
  "08014": {
    "county_name": "Broomfield County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "014",
    "class_fips": "H6"
  },
  "08015": {
    "county_name": "Chaffee County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "015",
    "class_fips": "H1"
  },
  "08017": {
    "county_name": "Cheyenne County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "017",
    "class_fips": "H1"
  },
  "08019": {
    "county_name": "Clear Creek County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "019",
    "class_fips": "H1"
  },
  "08021": {
    "county_name": "Conejos County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "021",
    "class_fips": "H1"
  },
  "08023": {
    "county_name": "Costilla County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "023",
    "class_fips": "H1"
  },
  "08025": {
    "county_name": "Crowley County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "025",
    "class_fips": "H1"
  },
  "08027": {
    "county_name": "Custer County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "027",
    "class_fips": "H1"
  },
  "08029": {
    "county_name": "Delta County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "029",
    "class_fips": "H1"
  },
  "08031": {
    "county_name": "Denver County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "031",
    "class_fips": "H6"
  },
  "08033": {
    "county_name": "Dolores County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "033",
    "class_fips": "H1"
  },
  "08035": {
    "county_name": "Douglas County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "035",
    "class_fips": "H1"
  },
  "08037": {
    "county_name": "Eagle County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "037",
    "class_fips": "H1"
  },
  "08039": {
    "county_name": "Elbert County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "039",
    "class_fips": "H1"
  },
  "08041": {
    "county_name": "El Paso County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "041",
    "class_fips": "H1"
  },
  "08043": {
    "county_name": "Fremont County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "043",
    "class_fips": "H1"
  },
  "08045": {
    "county_name": "Garfield County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "045",
    "class_fips": "H1"
  },
  "08047": {
    "county_name": "Gilpin County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "047",
    "class_fips": "H1"
  },
  "08049": {
    "county_name": "Grand County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "049",
    "class_fips": "H1"
  },
  "08051": {
    "county_name": "Gunnison County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "051",
    "class_fips": "H1"
  },
  "08053": {
    "county_name": "Hinsdale County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "053",
    "class_fips": "H1"
  },
  "08055": {
    "county_name": "Huerfano County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "055",
    "class_fips": "H1"
  },
  "08057": {
    "county_name": "Jackson County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "057",
    "class_fips": "H1"
  },
  "08059": {
    "county_name": "Jefferson County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "059",
    "class_fips": "H1"
  },
  "08061": {
    "county_name": "Kiowa County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "061",
    "class_fips": "H1"
  },
  "08063": {
    "county_name": "Kit Carson County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "063",
    "class_fips": "H1"
  },
  "08065": {
    "county_name": "Lake County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "065",
    "class_fips": "H1"
  },
  "08067": {
    "county_name": "La Plata County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "067",
    "class_fips": "H1"
  },
  "08069": {
    "county_name": "Larimer County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "069",
    "class_fips": "H1"
  },
  "08071": {
    "county_name": "Las Animas County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "071",
    "class_fips": "H1"
  },
  "08073": {
    "county_name": "Lincoln County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "073",
    "class_fips": "H1"
  },
  "08075": {
    "county_name": "Logan County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "075",
    "class_fips": "H1"
  },
  "08077": {
    "county_name": "Mesa County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "077",
    "class_fips": "H1"
  },
  "08079": {
    "county_name": "Mineral County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "079",
    "class_fips": "H1"
  },
  "08081": {
    "county_name": "Moffat County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "081",
    "class_fips": "H1"
  },
  "08083": {
    "county_name": "Montezuma County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "083",
    "class_fips": "H1"
  },
  "08085": {
    "county_name": "Montrose County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "085",
    "class_fips": "H1"
  },
  "08087": {
    "county_name": "Morgan County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "087",
    "class_fips": "H1"
  },
  "08089": {
    "county_name": "Otero County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "089",
    "class_fips": "H1"
  },
  "08091": {
    "county_name": "Ouray County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "091",
    "class_fips": "H1"
  },
  "08093": {
    "county_name": "Park County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "093",
    "class_fips": "H1"
  },
  "08095": {
    "county_name": "Phillips County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "095",
    "class_fips": "H1"
  },
  "08097": {
    "county_name": "Pitkin County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "097",
    "class_fips": "H1"
  },
  "08099": {
    "county_name": "Prowers County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "099",
    "class_fips": "H1"
  },
  "08101": {
    "county_name": "Pueblo County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "101",
    "class_fips": "H1"
  },
  "08103": {
    "county_name": "Rio Blanco County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "103",
    "class_fips": "H1"
  },
  "08105": {
    "county_name": "Rio Grande County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "105",
    "class_fips": "H1"
  },
  "08107": {
    "county_name": "Routt County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "107",
    "class_fips": "H1"
  },
  "08109": {
    "county_name": "Saguache County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "109",
    "class_fips": "H1"
  },
  "08111": {
    "county_name": "San Juan County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "111",
    "class_fips": "H1"
  },
  "08113": {
    "county_name": "San Miguel County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "113",
    "class_fips": "H1"
  },
  "08115": {
    "county_name": "Sedgwick County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "115",
    "class_fips": "H1"
  },
  "08117": {
    "county_name": "Summit County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "117",
    "class_fips": "H1"
  },
  "08119": {
    "county_name": "Teller County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "119",
    "class_fips": "H1"
  },
  "08121": {
    "county_name": "Washington County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "121",
    "class_fips": "H1"
  },
  "08123": {
    "county_name": "Weld County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "123",
    "class_fips": "H1"
  },
  "08125": {
    "county_name": "Yuma County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "125",
    "class_fips": "H1"
  },
  "09001": {
    "county_name": "Fairfield County",
    "state_code": "CT",
    "state_fips": "09",
    "county_fips": "001",
    "class_fips": "H4"
  },
  "09003": {
    "county_name": "Hartford County",
    "state_code": "CT",
    "state_fips": "09",
    "county_fips": "003",
    "class_fips": "H4"
  },
  "09005": {
    "county_name": "Litchfield County",
    "state_code": "CT",
    "state_fips": "09",
    "county_fips": "005",
    "class_fips": "H4"
  },
  "09007": {
    "county_name": "Middlesex County",
    "state_code": "CT",
    "state_fips": "09",
    "county_fips": "007",
    "class_fips": "H4"
  },
  "09009": {
    "county_name": "New Haven County",
    "state_code": "CT",
    "state_fips": "09",
    "county_fips": "009",
    "class_fips": "H4"
  },
  "09011": {
    "county_name": "New London County",
    "state_code": "CT",
    "state_fips": "09",
    "county_fips": "011",
    "class_fips": "H4"
  },
  "09013": {
    "county_name": "Tolland County",
    "state_code": "CT",
    "state_fips": "09",
    "county_fips": "013",
    "class_fips": "H4"
  },
  "09015": {
    "county_name": "Windham County",
    "state_code": "CT",
    "state_fips": "09",
    "county_fips": "015",
    "class_fips": "H4"
  }
}
