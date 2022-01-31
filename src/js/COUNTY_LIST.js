// https://raw.githubusercontent.com/datamapio/geoid/master/US/county/us_county_congressionalvote_2014.csv

var COUNTY_LIST = [
  {
    "id": "84001001",
    "fips": "01001",
    "county_name": "Autauga County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84001003",
    "fips": "01003",
    "county_name": "Baldwin County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84001005",
    "fips": "01005",
    "county_name": "Barbour County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84001007",
    "fips": "01007",
    "county_name": "Bibb County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84001009",
    "fips": "01009",
    "county_name": "Blount County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84001011",
    "fips": "01011",
    "county_name": "Bullock County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84001013",
    "fips": "01013",
    "county_name": "Butler County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84001015",
    "fips": "01015",
    "county_name": "Calhoun County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84001017",
    "fips": "01017",
    "county_name": "Chambers County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84001019",
    "fips": "01019",
    "county_name": "Cherokee County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84001021",
    "fips": "01021",
    "county_name": "Chilton County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84001023",
    "fips": "01023",
    "county_name": "Choctaw County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84001025",
    "fips": "01025",
    "county_name": "Clarke County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84001027",
    "fips": "01027",
    "county_name": "Clay County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84001029",
    "fips": "01029",
    "county_name": "Cleburne County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84001031",
    "fips": "01031",
    "county_name": "Coffee County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84001033",
    "fips": "01033",
    "county_name": "Colbert County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84001035",
    "fips": "01035",
    "county_name": "Conecuh County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84001037",
    "fips": "01037",
    "county_name": "Coosa County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84001039",
    "fips": "01039",
    "county_name": "Covington County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84001041",
    "fips": "01041",
    "county_name": "Crenshaw County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84001043",
    "fips": "01043",
    "county_name": "Cullman County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84001045",
    "fips": "01045",
    "county_name": "Dale County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84001047",
    "fips": "01047",
    "county_name": "Dallas County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84001049",
    "fips": "01049",
    "county_name": "DeKalb County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84001051",
    "fips": "01051",
    "county_name": "Elmore County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84001053",
    "fips": "01053",
    "county_name": "Escambia County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84001055",
    "fips": "01055",
    "county_name": "Etowah County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84001057",
    "fips": "01057",
    "county_name": "Fayette County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84001059",
    "fips": "01059",
    "county_name": "Franklin County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84001061",
    "fips": "01061",
    "county_name": "Geneva County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84001063",
    "fips": "01063",
    "county_name": "Greene County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84001065",
    "fips": "01065",
    "county_name": "Hale County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84001067",
    "fips": "01067",
    "county_name": "Henry County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84001069",
    "fips": "01069",
    "county_name": "Houston County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84001071",
    "fips": "01071",
    "county_name": "Jackson County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84001073",
    "fips": "01073",
    "county_name": "Jefferson County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84001075",
    "fips": "01075",
    "county_name": "Lamar County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84001077",
    "fips": "01077",
    "county_name": "Lauderdale County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84001079",
    "fips": "01079",
    "county_name": "Lawrence County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84001081",
    "fips": "01081",
    "county_name": "Lee County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "081",
    "class_fips": "H1"
  },
  {
    "id": "84001083",
    "fips": "01083",
    "county_name": "Limestone County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84001085",
    "fips": "01085",
    "county_name": "Lowndes County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "085",
    "class_fips": "H1"
  },
  {
    "id": "84001087",
    "fips": "01087",
    "county_name": "Macon County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84001089",
    "fips": "01089",
    "county_name": "Madison County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "089",
    "class_fips": "H1"
  },
  {
    "id": "84001091",
    "fips": "01091",
    "county_name": "Marengo County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "091",
    "class_fips": "H1"
  },
  {
    "id": "84001093",
    "fips": "01093",
    "county_name": "Marion County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "093",
    "class_fips": "H1"
  },
  {
    "id": "84001095",
    "fips": "01095",
    "county_name": "Marshall County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "095",
    "class_fips": "H1"
  },
  {
    "id": "84001097",
    "fips": "01097",
    "county_name": "Mobile County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "097",
    "class_fips": "H1"
  },
  {
    "id": "84001099",
    "fips": "01099",
    "county_name": "Monroe County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "099",
    "class_fips": "H1"
  },
  {
    "id": "84001101",
    "fips": "01101",
    "county_name": "Montgomery County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "101",
    "class_fips": "H1"
  },
  {
    "id": "84001103",
    "fips": "01103",
    "county_name": "Morgan County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "103",
    "class_fips": "H1"
  },
  {
    "id": "84001105",
    "fips": "01105",
    "county_name": "Perry County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "105",
    "class_fips": "H1"
  },
  {
    "id": "84001107",
    "fips": "01107",
    "county_name": "Pickens County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "107",
    "class_fips": "H1"
  },
  {
    "id": "84001109",
    "fips": "01109",
    "county_name": "Pike County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "109",
    "class_fips": "H1"
  },
  {
    "id": "84001111",
    "fips": "01111",
    "county_name": "Randolph County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "111",
    "class_fips": "H1"
  },
  {
    "id": "84001113",
    "fips": "01113",
    "county_name": "Russell County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "113",
    "class_fips": "H1"
  },
  {
    "id": "84001115",
    "fips": "01115",
    "county_name": "St. Clair County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "115",
    "class_fips": "H1"
  },
  {
    "id": "84001117",
    "fips": "01117",
    "county_name": "Shelby County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "117",
    "class_fips": "H1"
  },
  {
    "id": "84001119",
    "fips": "01119",
    "county_name": "Sumter County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "119",
    "class_fips": "H1"
  },
  {
    "id": "84001121",
    "fips": "01121",
    "county_name": "Talladega County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "121",
    "class_fips": "H1"
  },
  {
    "id": "84001123",
    "fips": "01123",
    "county_name": "Tallapoosa County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "123",
    "class_fips": "H1"
  },
  {
    "id": "84001125",
    "fips": "01125",
    "county_name": "Tuscaloosa County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "125",
    "class_fips": "H1"
  },
  {
    "id": "84001127",
    "fips": "01127",
    "county_name": "Walker County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "127",
    "class_fips": "H1"
  },
  {
    "id": "84001129",
    "fips": "01129",
    "county_name": "Washington County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "129",
    "class_fips": "H1"
  },
  {
    "id": "84001131",
    "fips": "01131",
    "county_name": "Wilcox County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "131",
    "class_fips": "H1"
  },
  {
    "id": "84001133",
    "fips": "01133",
    "county_name": "Winston County",
    "state_code": "AL",
    "state_fips": "01",
    "county_fips": "133",
    "class_fips": "H1"
  },
  {
    "id": "84002013",
    "fips": "02013",
    "county_name": "Aleutians East Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84002016",
    "fips": "02016",
    "county_name": "Aleutians West Census Area",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "016",
    "class_fips": "H5"
  },
  {
    "id": "84002020",
    "fips": "02020",
    "county_name": "Anchorage Municipality",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "020",
    "class_fips": "H6"
  },
  {
    "id": "84002050",
    "fips": "02050",
    "county_name": "Bethel Census Area",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "050",
    "class_fips": "H5"
  },
  {
    "id": "84002060",
    "fips": "02060",
    "county_name": "Bristol Bay Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "060",
    "class_fips": "H1"
  },
  {
    "id": "84002068",
    "fips": "02068",
    "county_name": "Denali Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "068",
    "class_fips": "H1"
  },
  {
    "id": "84002070",
    "fips": "02070",
    "county_name": "Dillingham Census Area",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "070",
    "class_fips": "H5"
  },
  {
    "id": "84002090",
    "fips": "02090",
    "county_name": "Fairbanks North Star Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "090",
    "class_fips": "H1"
  },
  {
    "id": "84002100",
    "fips": "02100",
    "county_name": "Haines Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "100",
    "class_fips": "H1"
  },
  {
    "id": "84002105",
    "fips": "02105",
    "county_name": "Hoonah-Angoon Census Area",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "105",
    "class_fips": "H5"
  },
  {
    "id": "84002110",
    "fips": "02110",
    "county_name": "Juneau City and Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "110",
    "class_fips": "H6"
  },
  {
    "id": "84002122",
    "fips": "02122",
    "county_name": "Kenai Peninsula Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "122",
    "class_fips": "H1"
  },
  {
    "id": "84002130",
    "fips": "02130",
    "county_name": "Ketchikan Gateway Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "130",
    "class_fips": "H1"
  },
  {
    "id": "84002150",
    "fips": "02150",
    "county_name": "Kodiak Island Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "150",
    "class_fips": "H1"
  },
  {
    "id": "84002158",
    "fips": "02158",
    "county_name": "Kusilvak Census Area",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "158",
    "class_fips": "H5"
  },
  {
    "id": "84002164",
    "fips": "02164",
    "county_name": "Lake and Peninsula Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "164",
    "class_fips": "H1"
  },
  {
    "id": "84002170",
    "fips": "02170",
    "county_name": "Matanuska-Susitna Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "170",
    "class_fips": "H1"
  },
  {
    "id": "84002180",
    "fips": "02180",
    "county_name": "Nome Census Area",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "180",
    "class_fips": "H5"
  },
  {
    "id": "84002185",
    "fips": "02185",
    "county_name": "North Slope Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "185",
    "class_fips": "H1"
  },
  {
    "id": "84002188",
    "fips": "02188",
    "county_name": "Northwest Arctic Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "188",
    "class_fips": "H1"
  },
  {
    "id": "84002195",
    "fips": "02195",
    "county_name": "Petersburg Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "195",
    "class_fips": "H1"
  },
  {
    "id": "84002198",
    "fips": "02198",
    "county_name": "Prince of Wales-Hyder Census Area",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "198",
    "class_fips": "H5"
  },
  {
    "id": "84002220",
    "fips": "02220",
    "county_name": "Sitka City and Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "220",
    "class_fips": "H6"
  },
  {
    "id": "84002230",
    "fips": "02230",
    "county_name": "Skagway Municipality",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "230",
    "class_fips": "H1"
  },
  {
    "id": "84002240",
    "fips": "02240",
    "county_name": "Southeast Fairbanks Census Area",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "240",
    "class_fips": "H5"
  },
  {
    "id": "84002261",
    "fips": "02261",
    "county_name": "Valdez-Cordova Census Area",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "261",
    "class_fips": "H5"
  },
  {
    "id": "84002275",
    "fips": "02275",
    "county_name": "Wrangell City and Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "275",
    "class_fips": "H1"
  },
  {
    "id": "84002282",
    "fips": "02282",
    "county_name": "Yakutat City and Borough",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "282",
    "class_fips": "H1"
  },
  {
    "id": "84002290",
    "fips": "02290",
    "county_name": "Yukon-Koyukuk Census Area",
    "state_code": "AK",
    "state_fips": "02",
    "county_fips": "290",
    "class_fips": "H5"
  },
  {
    "id": "84004001",
    "fips": "04001",
    "county_name": "Apache County",
    "state_code": "AZ",
    "state_fips": "04",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84004003",
    "fips": "04003",
    "county_name": "Cochise County",
    "state_code": "AZ",
    "state_fips": "04",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84004005",
    "fips": "04005",
    "county_name": "Coconino County",
    "state_code": "AZ",
    "state_fips": "04",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84004007",
    "fips": "04007",
    "county_name": "Gila County",
    "state_code": "AZ",
    "state_fips": "04",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84004009",
    "fips": "04009",
    "county_name": "Graham County",
    "state_code": "AZ",
    "state_fips": "04",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84004011",
    "fips": "04011",
    "county_name": "Greenlee County",
    "state_code": "AZ",
    "state_fips": "04",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84004012",
    "fips": "04012",
    "county_name": "La Paz County",
    "state_code": "AZ",
    "state_fips": "04",
    "county_fips": "012",
    "class_fips": "H1"
  },
  {
    "id": "84004013",
    "fips": "04013",
    "county_name": "Maricopa County",
    "state_code": "AZ",
    "state_fips": "04",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84004015",
    "fips": "04015",
    "county_name": "Mohave County",
    "state_code": "AZ",
    "state_fips": "04",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84004017",
    "fips": "04017",
    "county_name": "Navajo County",
    "state_code": "AZ",
    "state_fips": "04",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84004019",
    "fips": "04019",
    "county_name": "Pima County",
    "state_code": "AZ",
    "state_fips": "04",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84004021",
    "fips": "04021",
    "county_name": "Pinal County",
    "state_code": "AZ",
    "state_fips": "04",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84004023",
    "fips": "04023",
    "county_name": "Santa Cruz County",
    "state_code": "AZ",
    "state_fips": "04",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84004025",
    "fips": "04025",
    "county_name": "Yavapai County",
    "state_code": "AZ",
    "state_fips": "04",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84004027",
    "fips": "04027",
    "county_name": "Yuma County",
    "state_code": "AZ",
    "state_fips": "04",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84005001",
    "fips": "05001",
    "county_name": "Arkansas County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84005003",
    "fips": "05003",
    "county_name": "Ashley County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84005005",
    "fips": "05005",
    "county_name": "Baxter County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84005007",
    "fips": "05007",
    "county_name": "Benton County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84005009",
    "fips": "05009",
    "county_name": "Boone County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84005011",
    "fips": "05011",
    "county_name": "Bradley County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84005013",
    "fips": "05013",
    "county_name": "Calhoun County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84005015",
    "fips": "05015",
    "county_name": "Carroll County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84005017",
    "fips": "05017",
    "county_name": "Chicot County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84005019",
    "fips": "05019",
    "county_name": "Clark County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84005021",
    "fips": "05021",
    "county_name": "Clay County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84005023",
    "fips": "05023",
    "county_name": "Cleburne County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84005025",
    "fips": "05025",
    "county_name": "Cleveland County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84005027",
    "fips": "05027",
    "county_name": "Columbia County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84005029",
    "fips": "05029",
    "county_name": "Conway County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84005031",
    "fips": "05031",
    "county_name": "Craighead County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84005033",
    "fips": "05033",
    "county_name": "Crawford County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84005035",
    "fips": "05035",
    "county_name": "Crittenden County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84005037",
    "fips": "05037",
    "county_name": "Cross County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84005039",
    "fips": "05039",
    "county_name": "Dallas County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84005041",
    "fips": "05041",
    "county_name": "Desha County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84005043",
    "fips": "05043",
    "county_name": "Drew County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84005045",
    "fips": "05045",
    "county_name": "Faulkner County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84005047",
    "fips": "05047",
    "county_name": "Franklin County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84005049",
    "fips": "05049",
    "county_name": "Fulton County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84005051",
    "fips": "05051",
    "county_name": "Garland County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84005053",
    "fips": "05053",
    "county_name": "Grant County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84005055",
    "fips": "05055",
    "county_name": "Greene County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84005057",
    "fips": "05057",
    "county_name": "Hempstead County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84005059",
    "fips": "05059",
    "county_name": "Hot Spring County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84005061",
    "fips": "05061",
    "county_name": "Howard County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84005063",
    "fips": "05063",
    "county_name": "Independence County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84005065",
    "fips": "05065",
    "county_name": "Izard County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84005067",
    "fips": "05067",
    "county_name": "Jackson County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84005069",
    "fips": "05069",
    "county_name": "Jefferson County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84005071",
    "fips": "05071",
    "county_name": "Johnson County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84005073",
    "fips": "05073",
    "county_name": "Lafayette County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84005075",
    "fips": "05075",
    "county_name": "Lawrence County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84005077",
    "fips": "05077",
    "county_name": "Lee County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84005079",
    "fips": "05079",
    "county_name": "Lincoln County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84005081",
    "fips": "05081",
    "county_name": "Little River County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "081",
    "class_fips": "H1"
  },
  {
    "id": "84005083",
    "fips": "05083",
    "county_name": "Logan County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84005085",
    "fips": "05085",
    "county_name": "Lonoke County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "085",
    "class_fips": "H1"
  },
  {
    "id": "84005087",
    "fips": "05087",
    "county_name": "Madison County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84005089",
    "fips": "05089",
    "county_name": "Marion County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "089",
    "class_fips": "H1"
  },
  {
    "id": "84005091",
    "fips": "05091",
    "county_name": "Miller County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "091",
    "class_fips": "H1"
  },
  {
    "id": "84005093",
    "fips": "05093",
    "county_name": "Mississippi County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "093",
    "class_fips": "H1"
  },
  {
    "id": "84005095",
    "fips": "05095",
    "county_name": "Monroe County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "095",
    "class_fips": "H1"
  },
  {
    "id": "84005097",
    "fips": "05097",
    "county_name": "Montgomery County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "097",
    "class_fips": "H1"
  },
  {
    "id": "84005099",
    "fips": "05099",
    "county_name": "Nevada County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "099",
    "class_fips": "H1"
  },
  {
    "id": "84005101",
    "fips": "05101",
    "county_name": "Newton County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "101",
    "class_fips": "H1"
  },
  {
    "id": "84005103",
    "fips": "05103",
    "county_name": "Ouachita County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "103",
    "class_fips": "H1"
  },
  {
    "id": "84005105",
    "fips": "05105",
    "county_name": "Perry County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "105",
    "class_fips": "H1"
  },
  {
    "id": "84005107",
    "fips": "05107",
    "county_name": "Phillips County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "107",
    "class_fips": "H1"
  },
  {
    "id": "84005109",
    "fips": "05109",
    "county_name": "Pike County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "109",
    "class_fips": "H1"
  },
  {
    "id": "84005111",
    "fips": "05111",
    "county_name": "Poinsett County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "111",
    "class_fips": "H1"
  },
  {
    "id": "84005113",
    "fips": "05113",
    "county_name": "Polk County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "113",
    "class_fips": "H1"
  },
  {
    "id": "84005115",
    "fips": "05115",
    "county_name": "Pope County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "115",
    "class_fips": "H1"
  },
  {
    "id": "84005117",
    "fips": "05117",
    "county_name": "Prairie County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "117",
    "class_fips": "H1"
  },
  {
    "id": "84005119",
    "fips": "05119",
    "county_name": "Pulaski County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "119",
    "class_fips": "H1"
  },
  {
    "id": "84005121",
    "fips": "05121",
    "county_name": "Randolph County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "121",
    "class_fips": "H1"
  },
  {
    "id": "84005123",
    "fips": "05123",
    "county_name": "St. Francis County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "123",
    "class_fips": "H1"
  },
  {
    "id": "84005125",
    "fips": "05125",
    "county_name": "Saline County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "125",
    "class_fips": "H1"
  },
  {
    "id": "84005127",
    "fips": "05127",
    "county_name": "Scott County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "127",
    "class_fips": "H1"
  },
  {
    "id": "84005129",
    "fips": "05129",
    "county_name": "Searcy County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "129",
    "class_fips": "H1"
  },
  {
    "id": "84005131",
    "fips": "05131",
    "county_name": "Sebastian County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "131",
    "class_fips": "H1"
  },
  {
    "id": "84005133",
    "fips": "05133",
    "county_name": "Sevier County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "133",
    "class_fips": "H1"
  },
  {
    "id": "84005135",
    "fips": "05135",
    "county_name": "Sharp County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "135",
    "class_fips": "H1"
  },
  {
    "id": "84005137",
    "fips": "05137",
    "county_name": "Stone County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "137",
    "class_fips": "H1"
  },
  {
    "id": "84005139",
    "fips": "05139",
    "county_name": "Union County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "139",
    "class_fips": "H1"
  },
  {
    "id": "84005141",
    "fips": "05141",
    "county_name": "Van Buren County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "141",
    "class_fips": "H1"
  },
  {
    "id": "84005143",
    "fips": "05143",
    "county_name": "Washington County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "143",
    "class_fips": "H1"
  },
  {
    "id": "84005145",
    "fips": "05145",
    "county_name": "White County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "145",
    "class_fips": "H1"
  },
  {
    "id": "84005147",
    "fips": "05147",
    "county_name": "Woodruff County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "147",
    "class_fips": "H1"
  },
  {
    "id": "84005149",
    "fips": "05149",
    "county_name": "Yell County",
    "state_code": "AR",
    "state_fips": "05",
    "county_fips": "149",
    "class_fips": "H1"
  },
  {
    "id": "84006001",
    "fips": "06001",
    "county_name": "Alameda County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84006003",
    "fips": "06003",
    "county_name": "Alpine County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84006005",
    "fips": "06005",
    "county_name": "Amador County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84006007",
    "fips": "06007",
    "county_name": "Butte County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84006009",
    "fips": "06009",
    "county_name": "Calaveras County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84006011",
    "fips": "06011",
    "county_name": "Colusa County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84006013",
    "fips": "06013",
    "county_name": "Contra Costa County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84006015",
    "fips": "06015",
    "county_name": "Del Norte County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84006017",
    "fips": "06017",
    "county_name": "El Dorado County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84006019",
    "fips": "06019",
    "county_name": "Fresno County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84006021",
    "fips": "06021",
    "county_name": "Glenn County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84006023",
    "fips": "06023",
    "county_name": "Humboldt County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84006025",
    "fips": "06025",
    "county_name": "Imperial County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84006027",
    "fips": "06027",
    "county_name": "Inyo County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84006029",
    "fips": "06029",
    "county_name": "Kern County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84006031",
    "fips": "06031",
    "county_name": "Kings County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84006033",
    "fips": "06033",
    "county_name": "Lake County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84006035",
    "fips": "06035",
    "county_name": "Lassen County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84006037",
    "fips": "06037",
    "county_name": "Los Angeles County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84006039",
    "fips": "06039",
    "county_name": "Madera County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84006041",
    "fips": "06041",
    "county_name": "Marin County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84006043",
    "fips": "06043",
    "county_name": "Mariposa County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84006045",
    "fips": "06045",
    "county_name": "Mendocino County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84006047",
    "fips": "06047",
    "county_name": "Merced County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84006049",
    "fips": "06049",
    "county_name": "Modoc County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84006051",
    "fips": "06051",
    "county_name": "Mono County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84006053",
    "fips": "06053",
    "county_name": "Monterey County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84006055",
    "fips": "06055",
    "county_name": "Napa County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84006057",
    "fips": "06057",
    "county_name": "Nevada County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84006059",
    "fips": "06059",
    "county_name": "Orange County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84006061",
    "fips": "06061",
    "county_name": "Placer County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84006063",
    "fips": "06063",
    "county_name": "Plumas County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84006065",
    "fips": "06065",
    "county_name": "Riverside County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84006067",
    "fips": "06067",
    "county_name": "Sacramento County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84006069",
    "fips": "06069",
    "county_name": "San Benito County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84006071",
    "fips": "06071",
    "county_name": "San Bernardino County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84006073",
    "fips": "06073",
    "county_name": "San Diego County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84006075",
    "fips": "06075",
    "county_name": "San Francisco County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "075",
    "class_fips": "H6"
  },
  {
    "id": "84006077",
    "fips": "06077",
    "county_name": "San Joaquin County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84006079",
    "fips": "06079",
    "county_name": "San Luis Obispo County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84006081",
    "fips": "06081",
    "county_name": "San Mateo County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "081",
    "class_fips": "H1"
  },
  {
    "id": "84006083",
    "fips": "06083",
    "county_name": "Santa Barbara County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84006085",
    "fips": "06085",
    "county_name": "Santa Clara County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "085",
    "class_fips": "H1"
  },
  {
    "id": "84006087",
    "fips": "06087",
    "county_name": "Santa Cruz County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84006089",
    "fips": "06089",
    "county_name": "Shasta County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "089",
    "class_fips": "H1"
  },
  {
    "id": "84006091",
    "fips": "06091",
    "county_name": "Sierra County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "091",
    "class_fips": "H1"
  },
  {
    "id": "84006093",
    "fips": "06093",
    "county_name": "Siskiyou County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "093",
    "class_fips": "H1"
  },
  {
    "id": "84006095",
    "fips": "06095",
    "county_name": "Solano County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "095",
    "class_fips": "H1"
  },
  {
    "id": "84006097",
    "fips": "06097",
    "county_name": "Sonoma County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "097",
    "class_fips": "H1"
  },
  {
    "id": "84006099",
    "fips": "06099",
    "county_name": "Stanislaus County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "099",
    "class_fips": "H1"
  },
  {
    "id": "84006101",
    "fips": "06101",
    "county_name": "Sutter County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "101",
    "class_fips": "H1"
  },
  {
    "id": "84006103",
    "fips": "06103",
    "county_name": "Tehama County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "103",
    "class_fips": "H1"
  },
  {
    "id": "84006105",
    "fips": "06105",
    "county_name": "Trinity County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "105",
    "class_fips": "H1"
  },
  {
    "id": "84006107",
    "fips": "06107",
    "county_name": "Tulare County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "107",
    "class_fips": "H1"
  },
  {
    "id": "84006109",
    "fips": "06109",
    "county_name": "Tuolumne County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "109",
    "class_fips": "H1"
  },
  {
    "id": "84006111",
    "fips": "06111",
    "county_name": "Ventura County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "111",
    "class_fips": "H1"
  },
  {
    "id": "84006113",
    "fips": "06113",
    "county_name": "Yolo County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "113",
    "class_fips": "H1"
  },
  {
    "id": "84006115",
    "fips": "06115",
    "county_name": "Yuba County",
    "state_code": "CA",
    "state_fips": "06",
    "county_fips": "115",
    "class_fips": "H1"
  },
  {
    "id": "84008001",
    "fips": "08001",
    "county_name": "Adams County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84008003",
    "fips": "08003",
    "county_name": "Alamosa County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84008005",
    "fips": "08005",
    "county_name": "Arapahoe County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84008007",
    "fips": "08007",
    "county_name": "Archuleta County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84008009",
    "fips": "08009",
    "county_name": "Baca County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84008011",
    "fips": "08011",
    "county_name": "Bent County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84008013",
    "fips": "08013",
    "county_name": "Boulder County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84008014",
    "fips": "08014",
    "county_name": "Broomfield County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "014",
    "class_fips": "H6"
  },
  {
    "id": "84008015",
    "fips": "08015",
    "county_name": "Chaffee County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84008017",
    "fips": "08017",
    "county_name": "Cheyenne County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84008019",
    "fips": "08019",
    "county_name": "Clear Creek County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84008021",
    "fips": "08021",
    "county_name": "Conejos County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84008023",
    "fips": "08023",
    "county_name": "Costilla County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84008025",
    "fips": "08025",
    "county_name": "Crowley County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84008027",
    "fips": "08027",
    "county_name": "Custer County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84008029",
    "fips": "08029",
    "county_name": "Delta County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84008031",
    "fips": "08031",
    "county_name": "Denver County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "031",
    "class_fips": "H6"
  },
  {
    "id": "84008033",
    "fips": "08033",
    "county_name": "Dolores County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84008035",
    "fips": "08035",
    "county_name": "Douglas County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84008037",
    "fips": "08037",
    "county_name": "Eagle County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84008039",
    "fips": "08039",
    "county_name": "Elbert County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84008041",
    "fips": "08041",
    "county_name": "El Paso County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84008043",
    "fips": "08043",
    "county_name": "Fremont County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84008045",
    "fips": "08045",
    "county_name": "Garfield County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84008047",
    "fips": "08047",
    "county_name": "Gilpin County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84008049",
    "fips": "08049",
    "county_name": "Grand County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84008051",
    "fips": "08051",
    "county_name": "Gunnison County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84008053",
    "fips": "08053",
    "county_name": "Hinsdale County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84008055",
    "fips": "08055",
    "county_name": "Huerfano County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84008057",
    "fips": "08057",
    "county_name": "Jackson County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84008059",
    "fips": "08059",
    "county_name": "Jefferson County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84008061",
    "fips": "08061",
    "county_name": "Kiowa County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84008063",
    "fips": "08063",
    "county_name": "Kit Carson County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84008065",
    "fips": "08065",
    "county_name": "Lake County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84008067",
    "fips": "08067",
    "county_name": "La Plata County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84008069",
    "fips": "08069",
    "county_name": "Larimer County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84008071",
    "fips": "08071",
    "county_name": "Las Animas County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84008073",
    "fips": "08073",
    "county_name": "Lincoln County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84008075",
    "fips": "08075",
    "county_name": "Logan County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84008077",
    "fips": "08077",
    "county_name": "Mesa County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84008079",
    "fips": "08079",
    "county_name": "Mineral County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84008081",
    "fips": "08081",
    "county_name": "Moffat County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "081",
    "class_fips": "H1"
  },
  {
    "id": "84008083",
    "fips": "08083",
    "county_name": "Montezuma County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84008085",
    "fips": "08085",
    "county_name": "Montrose County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "085",
    "class_fips": "H1"
  },
  {
    "id": "84008087",
    "fips": "08087",
    "county_name": "Morgan County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84008089",
    "fips": "08089",
    "county_name": "Otero County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "089",
    "class_fips": "H1"
  },
  {
    "id": "84008091",
    "fips": "08091",
    "county_name": "Ouray County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "091",
    "class_fips": "H1"
  },
  {
    "id": "84008093",
    "fips": "08093",
    "county_name": "Park County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "093",
    "class_fips": "H1"
  },
  {
    "id": "84008095",
    "fips": "08095",
    "county_name": "Phillips County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "095",
    "class_fips": "H1"
  },
  {
    "id": "84008097",
    "fips": "08097",
    "county_name": "Pitkin County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "097",
    "class_fips": "H1"
  },
  {
    "id": "84008099",
    "fips": "08099",
    "county_name": "Prowers County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "099",
    "class_fips": "H1"
  },
  {
    "id": "84008101",
    "fips": "08101",
    "county_name": "Pueblo County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "101",
    "class_fips": "H1"
  },
  {
    "id": "84008103",
    "fips": "08103",
    "county_name": "Rio Blanco County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "103",
    "class_fips": "H1"
  },
  {
    "id": "84008105",
    "fips": "08105",
    "county_name": "Rio Grande County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "105",
    "class_fips": "H1"
  },
  {
    "id": "84008107",
    "fips": "08107",
    "county_name": "Routt County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "107",
    "class_fips": "H1"
  },
  {
    "id": "84008109",
    "fips": "08109",
    "county_name": "Saguache County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "109",
    "class_fips": "H1"
  },
  {
    "id": "84008111",
    "fips": "08111",
    "county_name": "San Juan County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "111",
    "class_fips": "H1"
  },
  {
    "id": "84008113",
    "fips": "08113",
    "county_name": "San Miguel County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "113",
    "class_fips": "H1"
  },
  {
    "id": "84008115",
    "fips": "08115",
    "county_name": "Sedgwick County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "115",
    "class_fips": "H1"
  },
  {
    "id": "84008117",
    "fips": "08117",
    "county_name": "Summit County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "117",
    "class_fips": "H1"
  },
  {
    "id": "84008119",
    "fips": "08119",
    "county_name": "Teller County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "119",
    "class_fips": "H1"
  },
  {
    "id": "84008121",
    "fips": "08121",
    "county_name": "Washington County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "121",
    "class_fips": "H1"
  },
  {
    "id": "84008123",
    "fips": "08123",
    "county_name": "Weld County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "123",
    "class_fips": "H1"
  },
  {
    "id": "84008125",
    "fips": "08125",
    "county_name": "Yuma County",
    "state_code": "CO",
    "state_fips": "08",
    "county_fips": "125",
    "class_fips": "H1"
  },
  {
    "id": "84009001",
    "fips": "09001",
    "county_name": "Fairfield County",
    "state_code": "CT",
    "state_fips": "09",
    "county_fips": "001",
    "class_fips": "H4"
  },
  {
    "id": "84009003",
    "fips": "09003",
    "county_name": "Hartford County",
    "state_code": "CT",
    "state_fips": "09",
    "county_fips": "003",
    "class_fips": "H4"
  },
  {
    "id": "84009005",
    "fips": "09005",
    "county_name": "Litchfield County",
    "state_code": "CT",
    "state_fips": "09",
    "county_fips": "005",
    "class_fips": "H4"
  },
  {
    "id": "84009007",
    "fips": "09007",
    "county_name": "Middlesex County",
    "state_code": "CT",
    "state_fips": "09",
    "county_fips": "007",
    "class_fips": "H4"
  },
  {
    "id": "84009009",
    "fips": "09009",
    "county_name": "New Haven County",
    "state_code": "CT",
    "state_fips": "09",
    "county_fips": "009",
    "class_fips": "H4"
  },
  {
    "id": "84009011",
    "fips": "09011",
    "county_name": "New London County",
    "state_code": "CT",
    "state_fips": "09",
    "county_fips": "011",
    "class_fips": "H4"
  },
  {
    "id": "84009013",
    "fips": "09013",
    "county_name": "Tolland County",
    "state_code": "CT",
    "state_fips": "09",
    "county_fips": "013",
    "class_fips": "H4"
  },
  {
    "id": "84009015",
    "fips": "09015",
    "county_name": "Windham County",
    "state_code": "CT",
    "state_fips": "09",
    "county_fips": "015",
    "class_fips": "H4"
  },
  {
    "id": "84010001",
    "fips": "10001",
    "county_name": "Kent County",
    "state_code": "DE",
    "state_fips": "10",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84010003",
    "fips": "10003",
    "county_name": "New Castle County",
    "state_code": "DE",
    "state_fips": "10",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84010005",
    "fips": "10005",
    "county_name": "Sussex County",
    "state_code": "DE",
    "state_fips": "10",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84011001",
    "fips": "11001",
    "county_name": "District of Columbia",
    "state_code": "DC",
    "state_fips": "11",
    "county_fips": "001",
    "class_fips": "H6"
  },
  {
    "id": "84012001",
    "fips": "12001",
    "county_name": "Alachua County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84012003",
    "fips": "12003",
    "county_name": "Baker County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84012005",
    "fips": "12005",
    "county_name": "Bay County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84012007",
    "fips": "12007",
    "county_name": "Bradford County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84012009",
    "fips": "12009",
    "county_name": "Brevard County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84012011",
    "fips": "12011",
    "county_name": "Broward County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84012013",
    "fips": "12013",
    "county_name": "Calhoun County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84012015",
    "fips": "12015",
    "county_name": "Charlotte County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84012017",
    "fips": "12017",
    "county_name": "Citrus County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84012019",
    "fips": "12019",
    "county_name": "Clay County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84012021",
    "fips": "12021",
    "county_name": "Collier County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84012023",
    "fips": "12023",
    "county_name": "Columbia County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84012027",
    "fips": "12027",
    "county_name": "DeSoto County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84012029",
    "fips": "12029",
    "county_name": "Dixie County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84012031",
    "fips": "12031",
    "county_name": "Duval County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "031",
    "class_fips": "H6"
  },
  {
    "id": "84012033",
    "fips": "12033",
    "county_name": "Escambia County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84012035",
    "fips": "12035",
    "county_name": "Flagler County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84012037",
    "fips": "12037",
    "county_name": "Franklin County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84012039",
    "fips": "12039",
    "county_name": "Gadsden County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84012041",
    "fips": "12041",
    "county_name": "Gilchrist County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84012043",
    "fips": "12043",
    "county_name": "Glades County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84012045",
    "fips": "12045",
    "county_name": "Gulf County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84012047",
    "fips": "12047",
    "county_name": "Hamilton County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84012049",
    "fips": "12049",
    "county_name": "Hardee County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84012051",
    "fips": "12051",
    "county_name": "Hendry County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84012053",
    "fips": "12053",
    "county_name": "Hernando County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84012055",
    "fips": "12055",
    "county_name": "Highlands County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84012057",
    "fips": "12057",
    "county_name": "Hillsborough County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84012059",
    "fips": "12059",
    "county_name": "Holmes County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84012061",
    "fips": "12061",
    "county_name": "Indian River County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84012063",
    "fips": "12063",
    "county_name": "Jackson County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84012065",
    "fips": "12065",
    "county_name": "Jefferson County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84012067",
    "fips": "12067",
    "county_name": "Lafayette County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84012069",
    "fips": "12069",
    "county_name": "Lake County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84012071",
    "fips": "12071",
    "county_name": "Lee County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84012073",
    "fips": "12073",
    "county_name": "Leon County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84012075",
    "fips": "12075",
    "county_name": "Levy County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84012077",
    "fips": "12077",
    "county_name": "Liberty County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84012079",
    "fips": "12079",
    "county_name": "Madison County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84012081",
    "fips": "12081",
    "county_name": "Manatee County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "081",
    "class_fips": "H1"
  },
  {
    "id": "84012083",
    "fips": "12083",
    "county_name": "Marion County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84012085",
    "fips": "12085",
    "county_name": "Martin County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "085",
    "class_fips": "H1"
  },
  {
    "id": "84012086",
    "fips": "12086",
    "county_name": "Miami-Dade County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "086",
    "class_fips": "H1"
  },
  {
    "id": "84012087",
    "fips": "12087",
    "county_name": "Monroe County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84012089",
    "fips": "12089",
    "county_name": "Nassau County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "089",
    "class_fips": "H1"
  },
  {
    "id": "84012091",
    "fips": "12091",
    "county_name": "Okaloosa County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "091",
    "class_fips": "H1"
  },
  {
    "id": "84012093",
    "fips": "12093",
    "county_name": "Okeechobee County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "093",
    "class_fips": "H1"
  },
  {
    "id": "84012095",
    "fips": "12095",
    "county_name": "Orange County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "095",
    "class_fips": "H1"
  },
  {
    "id": "84012097",
    "fips": "12097",
    "county_name": "Osceola County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "097",
    "class_fips": "H1"
  },
  {
    "id": "84012099",
    "fips": "12099",
    "county_name": "Palm Beach County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "099",
    "class_fips": "H1"
  },
  {
    "id": "84012101",
    "fips": "12101",
    "county_name": "Pasco County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "101",
    "class_fips": "H1"
  },
  {
    "id": "84012103",
    "fips": "12103",
    "county_name": "Pinellas County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "103",
    "class_fips": "H1"
  },
  {
    "id": "84012105",
    "fips": "12105",
    "county_name": "Polk County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "105",
    "class_fips": "H1"
  },
  {
    "id": "84012107",
    "fips": "12107",
    "county_name": "Putnam County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "107",
    "class_fips": "H1"
  },
  {
    "id": "84012109",
    "fips": "12109",
    "county_name": "St. Johns County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "109",
    "class_fips": "H1"
  },
  {
    "id": "84012111",
    "fips": "12111",
    "county_name": "St. Lucie County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "111",
    "class_fips": "H1"
  },
  {
    "id": "84012113",
    "fips": "12113",
    "county_name": "Santa Rosa County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "113",
    "class_fips": "H1"
  },
  {
    "id": "84012115",
    "fips": "12115",
    "county_name": "Sarasota County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "115",
    "class_fips": "H1"
  },
  {
    "id": "84012117",
    "fips": "12117",
    "county_name": "Seminole County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "117",
    "class_fips": "H1"
  },
  {
    "id": "84012119",
    "fips": "12119",
    "county_name": "Sumter County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "119",
    "class_fips": "H1"
  },
  {
    "id": "84012121",
    "fips": "12121",
    "county_name": "Suwannee County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "121",
    "class_fips": "H1"
  },
  {
    "id": "84012123",
    "fips": "12123",
    "county_name": "Taylor County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "123",
    "class_fips": "H1"
  },
  {
    "id": "84012125",
    "fips": "12125",
    "county_name": "Union County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "125",
    "class_fips": "H1"
  },
  {
    "id": "84012127",
    "fips": "12127",
    "county_name": "Volusia County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "127",
    "class_fips": "H1"
  },
  {
    "id": "84012129",
    "fips": "12129",
    "county_name": "Wakulla County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "129",
    "class_fips": "H1"
  },
  {
    "id": "84012131",
    "fips": "12131",
    "county_name": "Walton County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "131",
    "class_fips": "H1"
  },
  {
    "id": "84012133",
    "fips": "12133",
    "county_name": "Washington County",
    "state_code": "FL",
    "state_fips": "12",
    "county_fips": "133",
    "class_fips": "H1"
  },
  {
    "id": "84013001",
    "fips": "13001",
    "county_name": "Appling County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84013003",
    "fips": "13003",
    "county_name": "Atkinson County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84013005",
    "fips": "13005",
    "county_name": "Bacon County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84013007",
    "fips": "13007",
    "county_name": "Baker County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84013009",
    "fips": "13009",
    "county_name": "Baldwin County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84013011",
    "fips": "13011",
    "county_name": "Banks County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84013013",
    "fips": "13013",
    "county_name": "Barrow County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84013015",
    "fips": "13015",
    "county_name": "Bartow County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84013017",
    "fips": "13017",
    "county_name": "Ben Hill County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84013019",
    "fips": "13019",
    "county_name": "Berrien County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84013021",
    "fips": "13021",
    "county_name": "Bibb County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84013023",
    "fips": "13023",
    "county_name": "Bleckley County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84013025",
    "fips": "13025",
    "county_name": "Brantley County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84013027",
    "fips": "13027",
    "county_name": "Brooks County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84013029",
    "fips": "13029",
    "county_name": "Bryan County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84013031",
    "fips": "13031",
    "county_name": "Bulloch County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84013033",
    "fips": "13033",
    "county_name": "Burke County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84013035",
    "fips": "13035",
    "county_name": "Butts County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84013037",
    "fips": "13037",
    "county_name": "Calhoun County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84013039",
    "fips": "13039",
    "county_name": "Camden County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84013043",
    "fips": "13043",
    "county_name": "Candler County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84013045",
    "fips": "13045",
    "county_name": "Carroll County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84013047",
    "fips": "13047",
    "county_name": "Catoosa County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84013049",
    "fips": "13049",
    "county_name": "Charlton County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84013051",
    "fips": "13051",
    "county_name": "Chatham County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84013053",
    "fips": "13053",
    "county_name": "Chattahoochee County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84013055",
    "fips": "13055",
    "county_name": "Chattooga County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84013057",
    "fips": "13057",
    "county_name": "Cherokee County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84013059",
    "fips": "13059",
    "county_name": "Clarke County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "059",
    "class_fips": "H6"
  },
  {
    "id": "84013061",
    "fips": "13061",
    "county_name": "Clay County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84013063",
    "fips": "13063",
    "county_name": "Clayton County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84013065",
    "fips": "13065",
    "county_name": "Clinch County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84013067",
    "fips": "13067",
    "county_name": "Cobb County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84013069",
    "fips": "13069",
    "county_name": "Coffee County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84013071",
    "fips": "13071",
    "county_name": "Colquitt County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84013073",
    "fips": "13073",
    "county_name": "Columbia County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84013075",
    "fips": "13075",
    "county_name": "Cook County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84013077",
    "fips": "13077",
    "county_name": "Coweta County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84013079",
    "fips": "13079",
    "county_name": "Crawford County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84013081",
    "fips": "13081",
    "county_name": "Crisp County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "081",
    "class_fips": "H1"
  },
  {
    "id": "84013083",
    "fips": "13083",
    "county_name": "Dade County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84013085",
    "fips": "13085",
    "county_name": "Dawson County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "085",
    "class_fips": "H1"
  },
  {
    "id": "84013087",
    "fips": "13087",
    "county_name": "Decatur County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84013089",
    "fips": "13089",
    "county_name": "DeKalb County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "089",
    "class_fips": "H1"
  },
  {
    "id": "84013091",
    "fips": "13091",
    "county_name": "Dodge County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "091",
    "class_fips": "H1"
  },
  {
    "id": "84013093",
    "fips": "13093",
    "county_name": "Dooly County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "093",
    "class_fips": "H1"
  },
  {
    "id": "84013095",
    "fips": "13095",
    "county_name": "Dougherty County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "095",
    "class_fips": "H1"
  },
  {
    "id": "84013097",
    "fips": "13097",
    "county_name": "Douglas County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "097",
    "class_fips": "H1"
  },
  {
    "id": "84013099",
    "fips": "13099",
    "county_name": "Early County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "099",
    "class_fips": "H1"
  },
  {
    "id": "84013101",
    "fips": "13101",
    "county_name": "Echols County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "101",
    "class_fips": "H1"
  },
  {
    "id": "84013103",
    "fips": "13103",
    "county_name": "Effingham County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "103",
    "class_fips": "H1"
  },
  {
    "id": "84013105",
    "fips": "13105",
    "county_name": "Elbert County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "105",
    "class_fips": "H1"
  },
  {
    "id": "84013107",
    "fips": "13107",
    "county_name": "Emanuel County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "107",
    "class_fips": "H1"
  },
  {
    "id": "84013109",
    "fips": "13109",
    "county_name": "Evans County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "109",
    "class_fips": "H1"
  },
  {
    "id": "84013111",
    "fips": "13111",
    "county_name": "Fannin County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "111",
    "class_fips": "H1"
  },
  {
    "id": "84013113",
    "fips": "13113",
    "county_name": "Fayette County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "113",
    "class_fips": "H1"
  },
  {
    "id": "84013115",
    "fips": "13115",
    "county_name": "Floyd County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "115",
    "class_fips": "H1"
  },
  {
    "id": "84013117",
    "fips": "13117",
    "county_name": "Forsyth County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "117",
    "class_fips": "H1"
  },
  {
    "id": "84013119",
    "fips": "13119",
    "county_name": "Franklin County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "119",
    "class_fips": "H1"
  },
  {
    "id": "84013121",
    "fips": "13121",
    "county_name": "Fulton County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "121",
    "class_fips": "H1"
  },
  {
    "id": "84013123",
    "fips": "13123",
    "county_name": "Gilmer County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "123",
    "class_fips": "H1"
  },
  {
    "id": "84013125",
    "fips": "13125",
    "county_name": "Glascock County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "125",
    "class_fips": "H1"
  },
  {
    "id": "84013127",
    "fips": "13127",
    "county_name": "Glynn County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "127",
    "class_fips": "H1"
  },
  {
    "id": "84013129",
    "fips": "13129",
    "county_name": "Gordon County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "129",
    "class_fips": "H1"
  },
  {
    "id": "84013131",
    "fips": "13131",
    "county_name": "Grady County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "131",
    "class_fips": "H1"
  },
  {
    "id": "84013133",
    "fips": "13133",
    "county_name": "Greene County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "133",
    "class_fips": "H1"
  },
  {
    "id": "84013135",
    "fips": "13135",
    "county_name": "Gwinnett County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "135",
    "class_fips": "H1"
  },
  {
    "id": "84013137",
    "fips": "13137",
    "county_name": "Habersham County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "137",
    "class_fips": "H1"
  },
  {
    "id": "84013139",
    "fips": "13139",
    "county_name": "Hall County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "139",
    "class_fips": "H1"
  },
  {
    "id": "84013141",
    "fips": "13141",
    "county_name": "Hancock County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "141",
    "class_fips": "H1"
  },
  {
    "id": "84013143",
    "fips": "13143",
    "county_name": "Haralson County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "143",
    "class_fips": "H1"
  },
  {
    "id": "84013145",
    "fips": "13145",
    "county_name": "Harris County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "145",
    "class_fips": "H1"
  },
  {
    "id": "84013147",
    "fips": "13147",
    "county_name": "Hart County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "147",
    "class_fips": "H1"
  },
  {
    "id": "84013149",
    "fips": "13149",
    "county_name": "Heard County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "149",
    "class_fips": "H1"
  },
  {
    "id": "84013151",
    "fips": "13151",
    "county_name": "Henry County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "151",
    "class_fips": "H1"
  },
  {
    "id": "84013153",
    "fips": "13153",
    "county_name": "Houston County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "153",
    "class_fips": "H1"
  },
  {
    "id": "84013155",
    "fips": "13155",
    "county_name": "Irwin County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "155",
    "class_fips": "H1"
  },
  {
    "id": "84013157",
    "fips": "13157",
    "county_name": "Jackson County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "157",
    "class_fips": "H1"
  },
  {
    "id": "84013159",
    "fips": "13159",
    "county_name": "Jasper County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "159",
    "class_fips": "H1"
  },
  {
    "id": "84013161",
    "fips": "13161",
    "county_name": "Jeff Davis County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "161",
    "class_fips": "H1"
  },
  {
    "id": "84013163",
    "fips": "13163",
    "county_name": "Jefferson County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "163",
    "class_fips": "H1"
  },
  {
    "id": "84013165",
    "fips": "13165",
    "county_name": "Jenkins County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "165",
    "class_fips": "H1"
  },
  {
    "id": "84013167",
    "fips": "13167",
    "county_name": "Johnson County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "167",
    "class_fips": "H1"
  },
  {
    "id": "84013169",
    "fips": "13169",
    "county_name": "Jones County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "169",
    "class_fips": "H1"
  },
  {
    "id": "84013171",
    "fips": "13171",
    "county_name": "Lamar County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "171",
    "class_fips": "H1"
  },
  {
    "id": "84013173",
    "fips": "13173",
    "county_name": "Lanier County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "173",
    "class_fips": "H1"
  },
  {
    "id": "84013175",
    "fips": "13175",
    "county_name": "Laurens County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "175",
    "class_fips": "H1"
  },
  {
    "id": "84013177",
    "fips": "13177",
    "county_name": "Lee County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "177",
    "class_fips": "H1"
  },
  {
    "id": "84013179",
    "fips": "13179",
    "county_name": "Liberty County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "179",
    "class_fips": "H1"
  },
  {
    "id": "84013181",
    "fips": "13181",
    "county_name": "Lincoln County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "181",
    "class_fips": "H1"
  },
  {
    "id": "84013183",
    "fips": "13183",
    "county_name": "Long County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "183",
    "class_fips": "H1"
  },
  {
    "id": "84013185",
    "fips": "13185",
    "county_name": "Lowndes County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "185",
    "class_fips": "H1"
  },
  {
    "id": "84013187",
    "fips": "13187",
    "county_name": "Lumpkin County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "187",
    "class_fips": "H1"
  },
  {
    "id": "84013189",
    "fips": "13189",
    "county_name": "McDuffie County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "189",
    "class_fips": "H1"
  },
  {
    "id": "84013191",
    "fips": "13191",
    "county_name": "McIntosh County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "191",
    "class_fips": "H1"
  },
  {
    "id": "84013193",
    "fips": "13193",
    "county_name": "Macon County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "193",
    "class_fips": "H1"
  },
  {
    "id": "84013195",
    "fips": "13195",
    "county_name": "Madison County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "195",
    "class_fips": "H1"
  },
  {
    "id": "84013197",
    "fips": "13197",
    "county_name": "Marion County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "197",
    "class_fips": "H1"
  },
  {
    "id": "84013199",
    "fips": "13199",
    "county_name": "Meriwether County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "199",
    "class_fips": "H1"
  },
  {
    "id": "84013201",
    "fips": "13201",
    "county_name": "Miller County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "201",
    "class_fips": "H1"
  },
  {
    "id": "84013205",
    "fips": "13205",
    "county_name": "Mitchell County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "205",
    "class_fips": "H1"
  },
  {
    "id": "84013207",
    "fips": "13207",
    "county_name": "Monroe County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "207",
    "class_fips": "H1"
  },
  {
    "id": "84013209",
    "fips": "13209",
    "county_name": "Montgomery County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "209",
    "class_fips": "H1"
  },
  {
    "id": "84013211",
    "fips": "13211",
    "county_name": "Morgan County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "211",
    "class_fips": "H1"
  },
  {
    "id": "84013213",
    "fips": "13213",
    "county_name": "Murray County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "213",
    "class_fips": "H1"
  },
  {
    "id": "84013215",
    "fips": "13215",
    "county_name": "Muscogee County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "215",
    "class_fips": "H6"
  },
  {
    "id": "84013217",
    "fips": "13217",
    "county_name": "Newton County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "217",
    "class_fips": "H1"
  },
  {
    "id": "84013219",
    "fips": "13219",
    "county_name": "Oconee County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "219",
    "class_fips": "H1"
  },
  {
    "id": "84013221",
    "fips": "13221",
    "county_name": "Oglethorpe County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "221",
    "class_fips": "H1"
  },
  {
    "id": "84013223",
    "fips": "13223",
    "county_name": "Paulding County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "223",
    "class_fips": "H1"
  },
  {
    "id": "84013225",
    "fips": "13225",
    "county_name": "Peach County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "225",
    "class_fips": "H1"
  },
  {
    "id": "84013227",
    "fips": "13227",
    "county_name": "Pickens County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "227",
    "class_fips": "H1"
  },
  {
    "id": "84013229",
    "fips": "13229",
    "county_name": "Pierce County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "229",
    "class_fips": "H1"
  },
  {
    "id": "84013231",
    "fips": "13231",
    "county_name": "Pike County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "231",
    "class_fips": "H1"
  },
  {
    "id": "84013233",
    "fips": "13233",
    "county_name": "Polk County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "233",
    "class_fips": "H1"
  },
  {
    "id": "84013235",
    "fips": "13235",
    "county_name": "Pulaski County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "235",
    "class_fips": "H1"
  },
  {
    "id": "84013237",
    "fips": "13237",
    "county_name": "Putnam County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "237",
    "class_fips": "H1"
  },
  {
    "id": "84013239",
    "fips": "13239",
    "county_name": "Quitman County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "239",
    "class_fips": "H1"
  },
  {
    "id": "84013241",
    "fips": "13241",
    "county_name": "Rabun County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "241",
    "class_fips": "H1"
  },
  {
    "id": "84013243",
    "fips": "13243",
    "county_name": "Randolph County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "243",
    "class_fips": "H1"
  },
  {
    "id": "84013245",
    "fips": "13245",
    "county_name": "Richmond County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "245",
    "class_fips": "H6"
  },
  {
    "id": "84013247",
    "fips": "13247",
    "county_name": "Rockdale County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "247",
    "class_fips": "H1"
  },
  {
    "id": "84013249",
    "fips": "13249",
    "county_name": "Schley County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "249",
    "class_fips": "H1"
  },
  {
    "id": "84013251",
    "fips": "13251",
    "county_name": "Screven County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "251",
    "class_fips": "H1"
  },
  {
    "id": "84013253",
    "fips": "13253",
    "county_name": "Seminole County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "253",
    "class_fips": "H1"
  },
  {
    "id": "84013255",
    "fips": "13255",
    "county_name": "Spalding County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "255",
    "class_fips": "H1"
  },
  {
    "id": "84013257",
    "fips": "13257",
    "county_name": "Stephens County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "257",
    "class_fips": "H1"
  },
  {
    "id": "84013259",
    "fips": "13259",
    "county_name": "Stewart County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "259",
    "class_fips": "H1"
  },
  {
    "id": "84013261",
    "fips": "13261",
    "county_name": "Sumter County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "261",
    "class_fips": "H1"
  },
  {
    "id": "84013263",
    "fips": "13263",
    "county_name": "Talbot County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "263",
    "class_fips": "H1"
  },
  {
    "id": "84013265",
    "fips": "13265",
    "county_name": "Taliaferro County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "265",
    "class_fips": "H1"
  },
  {
    "id": "84013267",
    "fips": "13267",
    "county_name": "Tattnall County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "267",
    "class_fips": "H1"
  },
  {
    "id": "84013269",
    "fips": "13269",
    "county_name": "Taylor County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "269",
    "class_fips": "H1"
  },
  {
    "id": "84013271",
    "fips": "13271",
    "county_name": "Telfair County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "271",
    "class_fips": "H1"
  },
  {
    "id": "84013273",
    "fips": "13273",
    "county_name": "Terrell County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "273",
    "class_fips": "H1"
  },
  {
    "id": "84013275",
    "fips": "13275",
    "county_name": "Thomas County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "275",
    "class_fips": "H1"
  },
  {
    "id": "84013277",
    "fips": "13277",
    "county_name": "Tift County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "277",
    "class_fips": "H1"
  },
  {
    "id": "84013279",
    "fips": "13279",
    "county_name": "Toombs County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "279",
    "class_fips": "H1"
  },
  {
    "id": "84013281",
    "fips": "13281",
    "county_name": "Towns County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "281",
    "class_fips": "H1"
  },
  {
    "id": "84013283",
    "fips": "13283",
    "county_name": "Treutlen County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "283",
    "class_fips": "H1"
  },
  {
    "id": "84013285",
    "fips": "13285",
    "county_name": "Troup County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "285",
    "class_fips": "H1"
  },
  {
    "id": "84013287",
    "fips": "13287",
    "county_name": "Turner County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "287",
    "class_fips": "H1"
  },
  {
    "id": "84013289",
    "fips": "13289",
    "county_name": "Twiggs County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "289",
    "class_fips": "H1"
  },
  {
    "id": "84013291",
    "fips": "13291",
    "county_name": "Union County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "291",
    "class_fips": "H1"
  },
  {
    "id": "84013293",
    "fips": "13293",
    "county_name": "Upson County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "293",
    "class_fips": "H1"
  },
  {
    "id": "84013295",
    "fips": "13295",
    "county_name": "Walker County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "295",
    "class_fips": "H1"
  },
  {
    "id": "84013297",
    "fips": "13297",
    "county_name": "Walton County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "297",
    "class_fips": "H1"
  },
  {
    "id": "84013299",
    "fips": "13299",
    "county_name": "Ware County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "299",
    "class_fips": "H1"
  },
  {
    "id": "84013301",
    "fips": "13301",
    "county_name": "Warren County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "301",
    "class_fips": "H1"
  },
  {
    "id": "84013303",
    "fips": "13303",
    "county_name": "Washington County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "303",
    "class_fips": "H1"
  },
  {
    "id": "84013305",
    "fips": "13305",
    "county_name": "Wayne County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "305",
    "class_fips": "H1"
  },
  {
    "id": "84013307",
    "fips": "13307",
    "county_name": "Webster County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "307",
    "class_fips": "H1"
  },
  {
    "id": "84013309",
    "fips": "13309",
    "county_name": "Wheeler County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "309",
    "class_fips": "H1"
  },
  {
    "id": "84013311",
    "fips": "13311",
    "county_name": "White County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "311",
    "class_fips": "H1"
  },
  {
    "id": "84013313",
    "fips": "13313",
    "county_name": "Whitfield County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "313",
    "class_fips": "H1"
  },
  {
    "id": "84013315",
    "fips": "13315",
    "county_name": "Wilcox County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "315",
    "class_fips": "H1"
  },
  {
    "id": "84013317",
    "fips": "13317",
    "county_name": "Wilkes County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "317",
    "class_fips": "H1"
  },
  {
    "id": "84013319",
    "fips": "13319",
    "county_name": "Wilkinson County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "319",
    "class_fips": "H1"
  },
  {
    "id": "84013321",
    "fips": "13321",
    "county_name": "Worth County",
    "state_code": "GA",
    "state_fips": "13",
    "county_fips": "321",
    "class_fips": "H1"
  },
  {
    "id": "84015001",
    "fips": "15001",
    "county_name": "Hawaii County",
    "state_code": "HI",
    "state_fips": "15",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84015003",
    "fips": "15003",
    "county_name": "Honolulu County",
    "state_code": "HI",
    "state_fips": "15",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84015005",
    "fips": "15005",
    "county_name": "Kalawao County",
    "state_code": "HI",
    "state_fips": "15",
    "county_fips": "005",
    "class_fips": "H4"
  },
  {
    "id": "84015007",
    "fips": "15007",
    "county_name": "Kauai County",
    "state_code": "HI",
    "state_fips": "15",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84015009",
    "fips": "15009",
    "county_name": "Maui County",
    "state_code": "HI",
    "state_fips": "15",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84016001",
    "fips": "16001",
    "county_name": "Ada County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84016003",
    "fips": "16003",
    "county_name": "Adams County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84016005",
    "fips": "16005",
    "county_name": "Bannock County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84016007",
    "fips": "16007",
    "county_name": "Bear Lake County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84016009",
    "fips": "16009",
    "county_name": "Benewah County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84016011",
    "fips": "16011",
    "county_name": "Bingham County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84016013",
    "fips": "16013",
    "county_name": "Blaine County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84016015",
    "fips": "16015",
    "county_name": "Boise County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84016017",
    "fips": "16017",
    "county_name": "Bonner County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84016019",
    "fips": "16019",
    "county_name": "Bonneville County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84016021",
    "fips": "16021",
    "county_name": "Boundary County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84016023",
    "fips": "16023",
    "county_name": "Butte County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84016025",
    "fips": "16025",
    "county_name": "Camas County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84016027",
    "fips": "16027",
    "county_name": "Canyon County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84016029",
    "fips": "16029",
    "county_name": "Caribou County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84016031",
    "fips": "16031",
    "county_name": "Cassia County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84016033",
    "fips": "16033",
    "county_name": "Clark County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84016035",
    "fips": "16035",
    "county_name": "Clearwater County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84016037",
    "fips": "16037",
    "county_name": "Custer County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84016039",
    "fips": "16039",
    "county_name": "Elmore County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84016041",
    "fips": "16041",
    "county_name": "Franklin County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84016043",
    "fips": "16043",
    "county_name": "Fremont County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84016045",
    "fips": "16045",
    "county_name": "Gem County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84016047",
    "fips": "16047",
    "county_name": "Gooding County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84016049",
    "fips": "16049",
    "county_name": "Idaho County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84016051",
    "fips": "16051",
    "county_name": "Jefferson County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84016053",
    "fips": "16053",
    "county_name": "Jerome County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84016055",
    "fips": "16055",
    "county_name": "Kootenai County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84016057",
    "fips": "16057",
    "county_name": "Latah County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84016059",
    "fips": "16059",
    "county_name": "Lemhi County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84016061",
    "fips": "16061",
    "county_name": "Lewis County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84016063",
    "fips": "16063",
    "county_name": "Lincoln County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84016065",
    "fips": "16065",
    "county_name": "Madison County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84016067",
    "fips": "16067",
    "county_name": "Minidoka County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84016069",
    "fips": "16069",
    "county_name": "Nez Perce County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84016071",
    "fips": "16071",
    "county_name": "Oneida County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84016073",
    "fips": "16073",
    "county_name": "Owyhee County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84016075",
    "fips": "16075",
    "county_name": "Payette County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84016077",
    "fips": "16077",
    "county_name": "Power County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84016079",
    "fips": "16079",
    "county_name": "Shoshone County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84016081",
    "fips": "16081",
    "county_name": "Teton County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "081",
    "class_fips": "H1"
  },
  {
    "id": "84016083",
    "fips": "16083",
    "county_name": "Twin Falls County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84016085",
    "fips": "16085",
    "county_name": "Valley County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "085",
    "class_fips": "H1"
  },
  {
    "id": "84016087",
    "fips": "16087",
    "county_name": "Washington County",
    "state_code": "ID",
    "state_fips": "16",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84017001",
    "fips": "17001",
    "county_name": "Adams County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84017003",
    "fips": "17003",
    "county_name": "Alexander County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84017005",
    "fips": "17005",
    "county_name": "Bond County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84017007",
    "fips": "17007",
    "county_name": "Boone County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84017009",
    "fips": "17009",
    "county_name": "Brown County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84017011",
    "fips": "17011",
    "county_name": "Bureau County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84017013",
    "fips": "17013",
    "county_name": "Calhoun County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84017015",
    "fips": "17015",
    "county_name": "Carroll County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84017017",
    "fips": "17017",
    "county_name": "Cass County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84017019",
    "fips": "17019",
    "county_name": "Champaign County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84017021",
    "fips": "17021",
    "county_name": "Christian County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84017023",
    "fips": "17023",
    "county_name": "Clark County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84017025",
    "fips": "17025",
    "county_name": "Clay County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84017027",
    "fips": "17027",
    "county_name": "Clinton County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84017029",
    "fips": "17029",
    "county_name": "Coles County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84017031",
    "fips": "17031",
    "county_name": "Cook County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84017033",
    "fips": "17033",
    "county_name": "Crawford County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84017035",
    "fips": "17035",
    "county_name": "Cumberland County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84017037",
    "fips": "17037",
    "county_name": "DeKalb County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84017039",
    "fips": "17039",
    "county_name": "De Witt County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84017041",
    "fips": "17041",
    "county_name": "Douglas County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84017043",
    "fips": "17043",
    "county_name": "DuPage County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84017045",
    "fips": "17045",
    "county_name": "Edgar County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84017047",
    "fips": "17047",
    "county_name": "Edwards County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84017049",
    "fips": "17049",
    "county_name": "Effingham County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84017051",
    "fips": "17051",
    "county_name": "Fayette County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84017053",
    "fips": "17053",
    "county_name": "Ford County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84017055",
    "fips": "17055",
    "county_name": "Franklin County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84017057",
    "fips": "17057",
    "county_name": "Fulton County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84017059",
    "fips": "17059",
    "county_name": "Gallatin County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84017061",
    "fips": "17061",
    "county_name": "Greene County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84017063",
    "fips": "17063",
    "county_name": "Grundy County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84017065",
    "fips": "17065",
    "county_name": "Hamilton County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84017067",
    "fips": "17067",
    "county_name": "Hancock County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84017069",
    "fips": "17069",
    "county_name": "Hardin County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84017071",
    "fips": "17071",
    "county_name": "Henderson County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84017073",
    "fips": "17073",
    "county_name": "Henry County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84017075",
    "fips": "17075",
    "county_name": "Iroquois County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84017077",
    "fips": "17077",
    "county_name": "Jackson County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84017079",
    "fips": "17079",
    "county_name": "Jasper County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84017081",
    "fips": "17081",
    "county_name": "Jefferson County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "081",
    "class_fips": "H1"
  },
  {
    "id": "84017083",
    "fips": "17083",
    "county_name": "Jersey County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84017085",
    "fips": "17085",
    "county_name": "Jo Daviess County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "085",
    "class_fips": "H1"
  },
  {
    "id": "84017087",
    "fips": "17087",
    "county_name": "Johnson County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84017089",
    "fips": "17089",
    "county_name": "Kane County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "089",
    "class_fips": "H1"
  },
  {
    "id": "84017091",
    "fips": "17091",
    "county_name": "Kankakee County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "091",
    "class_fips": "H1"
  },
  {
    "id": "84017093",
    "fips": "17093",
    "county_name": "Kendall County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "093",
    "class_fips": "H1"
  },
  {
    "id": "84017095",
    "fips": "17095",
    "county_name": "Knox County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "095",
    "class_fips": "H1"
  },
  {
    "id": "84017097",
    "fips": "17097",
    "county_name": "Lake County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "097",
    "class_fips": "H1"
  },
  {
    "id": "84017099",
    "fips": "17099",
    "county_name": "LaSalle County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "099",
    "class_fips": "H1"
  },
  {
    "id": "84017101",
    "fips": "17101",
    "county_name": "Lawrence County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "101",
    "class_fips": "H1"
  },
  {
    "id": "84017103",
    "fips": "17103",
    "county_name": "Lee County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "103",
    "class_fips": "H1"
  },
  {
    "id": "84017105",
    "fips": "17105",
    "county_name": "Livingston County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "105",
    "class_fips": "H1"
  },
  {
    "id": "84017107",
    "fips": "17107",
    "county_name": "Logan County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "107",
    "class_fips": "H1"
  },
  {
    "id": "84017109",
    "fips": "17109",
    "county_name": "McDonough County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "109",
    "class_fips": "H1"
  },
  {
    "id": "84017111",
    "fips": "17111",
    "county_name": "McHenry County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "111",
    "class_fips": "H1"
  },
  {
    "id": "84017113",
    "fips": "17113",
    "county_name": "McLean County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "113",
    "class_fips": "H1"
  },
  {
    "id": "84017115",
    "fips": "17115",
    "county_name": "Macon County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "115",
    "class_fips": "H1"
  },
  {
    "id": "84017117",
    "fips": "17117",
    "county_name": "Macoupin County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "117",
    "class_fips": "H1"
  },
  {
    "id": "84017119",
    "fips": "17119",
    "county_name": "Madison County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "119",
    "class_fips": "H1"
  },
  {
    "id": "84017121",
    "fips": "17121",
    "county_name": "Marion County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "121",
    "class_fips": "H1"
  },
  {
    "id": "84017123",
    "fips": "17123",
    "county_name": "Marshall County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "123",
    "class_fips": "H1"
  },
  {
    "id": "84017125",
    "fips": "17125",
    "county_name": "Mason County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "125",
    "class_fips": "H1"
  },
  {
    "id": "84017127",
    "fips": "17127",
    "county_name": "Massac County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "127",
    "class_fips": "H1"
  },
  {
    "id": "84017129",
    "fips": "17129",
    "county_name": "Menard County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "129",
    "class_fips": "H1"
  },
  {
    "id": "84017131",
    "fips": "17131",
    "county_name": "Mercer County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "131",
    "class_fips": "H1"
  },
  {
    "id": "84017133",
    "fips": "17133",
    "county_name": "Monroe County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "133",
    "class_fips": "H1"
  },
  {
    "id": "84017135",
    "fips": "17135",
    "county_name": "Montgomery County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "135",
    "class_fips": "H1"
  },
  {
    "id": "84017137",
    "fips": "17137",
    "county_name": "Morgan County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "137",
    "class_fips": "H1"
  },
  {
    "id": "84017139",
    "fips": "17139",
    "county_name": "Moultrie County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "139",
    "class_fips": "H1"
  },
  {
    "id": "84017141",
    "fips": "17141",
    "county_name": "Ogle County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "141",
    "class_fips": "H1"
  },
  {
    "id": "84017143",
    "fips": "17143",
    "county_name": "Peoria County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "143",
    "class_fips": "H1"
  },
  {
    "id": "84017145",
    "fips": "17145",
    "county_name": "Perry County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "145",
    "class_fips": "H1"
  },
  {
    "id": "84017147",
    "fips": "17147",
    "county_name": "Piatt County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "147",
    "class_fips": "H1"
  },
  {
    "id": "84017149",
    "fips": "17149",
    "county_name": "Pike County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "149",
    "class_fips": "H1"
  },
  {
    "id": "84017151",
    "fips": "17151",
    "county_name": "Pope County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "151",
    "class_fips": "H1"
  },
  {
    "id": "84017153",
    "fips": "17153",
    "county_name": "Pulaski County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "153",
    "class_fips": "H1"
  },
  {
    "id": "84017155",
    "fips": "17155",
    "county_name": "Putnam County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "155",
    "class_fips": "H1"
  },
  {
    "id": "84017157",
    "fips": "17157",
    "county_name": "Randolph County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "157",
    "class_fips": "H1"
  },
  {
    "id": "84017159",
    "fips": "17159",
    "county_name": "Richland County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "159",
    "class_fips": "H1"
  },
  {
    "id": "84017161",
    "fips": "17161",
    "county_name": "Rock Island County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "161",
    "class_fips": "H1"
  },
  {
    "id": "84017163",
    "fips": "17163",
    "county_name": "St. Clair County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "163",
    "class_fips": "H1"
  },
  {
    "id": "84017165",
    "fips": "17165",
    "county_name": "Saline County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "165",
    "class_fips": "H1"
  },
  {
    "id": "84017167",
    "fips": "17167",
    "county_name": "Sangamon County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "167",
    "class_fips": "H1"
  },
  {
    "id": "84017169",
    "fips": "17169",
    "county_name": "Schuyler County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "169",
    "class_fips": "H1"
  },
  {
    "id": "84017171",
    "fips": "17171",
    "county_name": "Scott County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "171",
    "class_fips": "H1"
  },
  {
    "id": "84017173",
    "fips": "17173",
    "county_name": "Shelby County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "173",
    "class_fips": "H1"
  },
  {
    "id": "84017175",
    "fips": "17175",
    "county_name": "Stark County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "175",
    "class_fips": "H1"
  },
  {
    "id": "84017177",
    "fips": "17177",
    "county_name": "Stephenson County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "177",
    "class_fips": "H1"
  },
  {
    "id": "84017179",
    "fips": "17179",
    "county_name": "Tazewell County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "179",
    "class_fips": "H1"
  },
  {
    "id": "84017181",
    "fips": "17181",
    "county_name": "Union County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "181",
    "class_fips": "H1"
  },
  {
    "id": "84017183",
    "fips": "17183",
    "county_name": "Vermilion County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "183",
    "class_fips": "H1"
  },
  {
    "id": "84017185",
    "fips": "17185",
    "county_name": "Wabash County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "185",
    "class_fips": "H1"
  },
  {
    "id": "84017187",
    "fips": "17187",
    "county_name": "Warren County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "187",
    "class_fips": "H1"
  },
  {
    "id": "84017189",
    "fips": "17189",
    "county_name": "Washington County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "189",
    "class_fips": "H1"
  },
  {
    "id": "84017191",
    "fips": "17191",
    "county_name": "Wayne County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "191",
    "class_fips": "H1"
  },
  {
    "id": "84017193",
    "fips": "17193",
    "county_name": "White County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "193",
    "class_fips": "H1"
  },
  {
    "id": "84017195",
    "fips": "17195",
    "county_name": "Whiteside County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "195",
    "class_fips": "H1"
  },
  {
    "id": "84017197",
    "fips": "17197",
    "county_name": "Will County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "197",
    "class_fips": "H1"
  },
  {
    "id": "84017199",
    "fips": "17199",
    "county_name": "Williamson County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "199",
    "class_fips": "H1"
  },
  {
    "id": "84017201",
    "fips": "17201",
    "county_name": "Winnebago County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "201",
    "class_fips": "H1"
  },
  {
    "id": "84017203",
    "fips": "17203",
    "county_name": "Woodford County",
    "state_code": "IL",
    "state_fips": "17",
    "county_fips": "203",
    "class_fips": "H1"
  },
  {
    "id": "84018001",
    "fips": "18001",
    "county_name": "Adams County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84018003",
    "fips": "18003",
    "county_name": "Allen County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84018005",
    "fips": "18005",
    "county_name": "Bartholomew County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84018007",
    "fips": "18007",
    "county_name": "Benton County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84018009",
    "fips": "18009",
    "county_name": "Blackford County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84018011",
    "fips": "18011",
    "county_name": "Boone County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84018013",
    "fips": "18013",
    "county_name": "Brown County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84018015",
    "fips": "18015",
    "county_name": "Carroll County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84018017",
    "fips": "18017",
    "county_name": "Cass County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84018019",
    "fips": "18019",
    "county_name": "Clark County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84018021",
    "fips": "18021",
    "county_name": "Clay County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84018023",
    "fips": "18023",
    "county_name": "Clinton County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84018025",
    "fips": "18025",
    "county_name": "Crawford County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84018027",
    "fips": "18027",
    "county_name": "Daviess County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84018029",
    "fips": "18029",
    "county_name": "Dearborn County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84018031",
    "fips": "18031",
    "county_name": "Decatur County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84018033",
    "fips": "18033",
    "county_name": "DeKalb County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84018035",
    "fips": "18035",
    "county_name": "Delaware County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84018037",
    "fips": "18037",
    "county_name": "Dubois County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84018039",
    "fips": "18039",
    "county_name": "Elkhart County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84018041",
    "fips": "18041",
    "county_name": "Fayette County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84018043",
    "fips": "18043",
    "county_name": "Floyd County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84018045",
    "fips": "18045",
    "county_name": "Fountain County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84018047",
    "fips": "18047",
    "county_name": "Franklin County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84018049",
    "fips": "18049",
    "county_name": "Fulton County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84018051",
    "fips": "18051",
    "county_name": "Gibson County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84018053",
    "fips": "18053",
    "county_name": "Grant County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84018055",
    "fips": "18055",
    "county_name": "Greene County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84018057",
    "fips": "18057",
    "county_name": "Hamilton County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84018059",
    "fips": "18059",
    "county_name": "Hancock County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84018061",
    "fips": "18061",
    "county_name": "Harrison County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84018063",
    "fips": "18063",
    "county_name": "Hendricks County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84018065",
    "fips": "18065",
    "county_name": "Henry County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84018067",
    "fips": "18067",
    "county_name": "Howard County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84018069",
    "fips": "18069",
    "county_name": "Huntington County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84018071",
    "fips": "18071",
    "county_name": "Jackson County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84018073",
    "fips": "18073",
    "county_name": "Jasper County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84018075",
    "fips": "18075",
    "county_name": "Jay County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84018077",
    "fips": "18077",
    "county_name": "Jefferson County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84018079",
    "fips": "18079",
    "county_name": "Jennings County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84018081",
    "fips": "18081",
    "county_name": "Johnson County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "081",
    "class_fips": "H1"
  },
  {
    "id": "84018083",
    "fips": "18083",
    "county_name": "Knox County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84018085",
    "fips": "18085",
    "county_name": "Kosciusko County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "085",
    "class_fips": "H1"
  },
  {
    "id": "84018087",
    "fips": "18087",
    "county_name": "LaGrange County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84018089",
    "fips": "18089",
    "county_name": "Lake County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "089",
    "class_fips": "H1"
  },
  {
    "id": "84018091",
    "fips": "18091",
    "county_name": "LaPorte County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "091",
    "class_fips": "H1"
  },
  {
    "id": "84018093",
    "fips": "18093",
    "county_name": "Lawrence County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "093",
    "class_fips": "H1"
  },
  {
    "id": "84018095",
    "fips": "18095",
    "county_name": "Madison County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "095",
    "class_fips": "H1"
  },
  {
    "id": "84018097",
    "fips": "18097",
    "county_name": "Marion County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "097",
    "class_fips": "H6"
  },
  {
    "id": "84018099",
    "fips": "18099",
    "county_name": "Marshall County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "099",
    "class_fips": "H1"
  },
  {
    "id": "84018101",
    "fips": "18101",
    "county_name": "Martin County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "101",
    "class_fips": "H1"
  },
  {
    "id": "84018103",
    "fips": "18103",
    "county_name": "Miami County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "103",
    "class_fips": "H1"
  },
  {
    "id": "84018105",
    "fips": "18105",
    "county_name": "Monroe County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "105",
    "class_fips": "H1"
  },
  {
    "id": "84018107",
    "fips": "18107",
    "county_name": "Montgomery County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "107",
    "class_fips": "H1"
  },
  {
    "id": "84018109",
    "fips": "18109",
    "county_name": "Morgan County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "109",
    "class_fips": "H1"
  },
  {
    "id": "84018111",
    "fips": "18111",
    "county_name": "Newton County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "111",
    "class_fips": "H1"
  },
  {
    "id": "84018113",
    "fips": "18113",
    "county_name": "Noble County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "113",
    "class_fips": "H1"
  },
  {
    "id": "84018115",
    "fips": "18115",
    "county_name": "Ohio County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "115",
    "class_fips": "H1"
  },
  {
    "id": "84018117",
    "fips": "18117",
    "county_name": "Orange County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "117",
    "class_fips": "H1"
  },
  {
    "id": "84018119",
    "fips": "18119",
    "county_name": "Owen County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "119",
    "class_fips": "H1"
  },
  {
    "id": "84018121",
    "fips": "18121",
    "county_name": "Parke County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "121",
    "class_fips": "H1"
  },
  {
    "id": "84018123",
    "fips": "18123",
    "county_name": "Perry County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "123",
    "class_fips": "H1"
  },
  {
    "id": "84018125",
    "fips": "18125",
    "county_name": "Pike County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "125",
    "class_fips": "H1"
  },
  {
    "id": "84018127",
    "fips": "18127",
    "county_name": "Porter County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "127",
    "class_fips": "H1"
  },
  {
    "id": "84018129",
    "fips": "18129",
    "county_name": "Posey County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "129",
    "class_fips": "H1"
  },
  {
    "id": "84018131",
    "fips": "18131",
    "county_name": "Pulaski County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "131",
    "class_fips": "H1"
  },
  {
    "id": "84018133",
    "fips": "18133",
    "county_name": "Putnam County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "133",
    "class_fips": "H1"
  },
  {
    "id": "84018135",
    "fips": "18135",
    "county_name": "Randolph County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "135",
    "class_fips": "H1"
  },
  {
    "id": "84018137",
    "fips": "18137",
    "county_name": "Ripley County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "137",
    "class_fips": "H1"
  },
  {
    "id": "84018139",
    "fips": "18139",
    "county_name": "Rush County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "139",
    "class_fips": "H1"
  },
  {
    "id": "84018141",
    "fips": "18141",
    "county_name": "St. Joseph County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "141",
    "class_fips": "H1"
  },
  {
    "id": "84018143",
    "fips": "18143",
    "county_name": "Scott County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "143",
    "class_fips": "H1"
  },
  {
    "id": "84018145",
    "fips": "18145",
    "county_name": "Shelby County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "145",
    "class_fips": "H1"
  },
  {
    "id": "84018147",
    "fips": "18147",
    "county_name": "Spencer County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "147",
    "class_fips": "H1"
  },
  {
    "id": "84018149",
    "fips": "18149",
    "county_name": "Starke County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "149",
    "class_fips": "H1"
  },
  {
    "id": "84018151",
    "fips": "18151",
    "county_name": "Steuben County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "151",
    "class_fips": "H1"
  },
  {
    "id": "84018153",
    "fips": "18153",
    "county_name": "Sullivan County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "153",
    "class_fips": "H1"
  },
  {
    "id": "84018155",
    "fips": "18155",
    "county_name": "Switzerland County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "155",
    "class_fips": "H1"
  },
  {
    "id": "84018157",
    "fips": "18157",
    "county_name": "Tippecanoe County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "157",
    "class_fips": "H1"
  },
  {
    "id": "84018159",
    "fips": "18159",
    "county_name": "Tipton County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "159",
    "class_fips": "H1"
  },
  {
    "id": "84018161",
    "fips": "18161",
    "county_name": "Union County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "161",
    "class_fips": "H1"
  },
  {
    "id": "84018163",
    "fips": "18163",
    "county_name": "Vanderburgh County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "163",
    "class_fips": "H1"
  },
  {
    "id": "84018165",
    "fips": "18165",
    "county_name": "Vermillion County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "165",
    "class_fips": "H1"
  },
  {
    "id": "84018167",
    "fips": "18167",
    "county_name": "Vigo County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "167",
    "class_fips": "H1"
  },
  {
    "id": "84018169",
    "fips": "18169",
    "county_name": "Wabash County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "169",
    "class_fips": "H1"
  },
  {
    "id": "84018171",
    "fips": "18171",
    "county_name": "Warren County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "171",
    "class_fips": "H1"
  },
  {
    "id": "84018173",
    "fips": "18173",
    "county_name": "Warrick County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "173",
    "class_fips": "H1"
  },
  {
    "id": "84018175",
    "fips": "18175",
    "county_name": "Washington County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "175",
    "class_fips": "H1"
  },
  {
    "id": "84018177",
    "fips": "18177",
    "county_name": "Wayne County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "177",
    "class_fips": "H1"
  },
  {
    "id": "84018179",
    "fips": "18179",
    "county_name": "Wells County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "179",
    "class_fips": "H1"
  },
  {
    "id": "84018181",
    "fips": "18181",
    "county_name": "White County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "181",
    "class_fips": "H1"
  },
  {
    "id": "84018183",
    "fips": "18183",
    "county_name": "Whitley County",
    "state_code": "IN",
    "state_fips": "18",
    "county_fips": "183",
    "class_fips": "H1"
  },
  {
    "id": "84019001",
    "fips": "19001",
    "county_name": "Adair County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84019003",
    "fips": "19003",
    "county_name": "Adams County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84019005",
    "fips": "19005",
    "county_name": "Allamakee County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84019007",
    "fips": "19007",
    "county_name": "Appanoose County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84019009",
    "fips": "19009",
    "county_name": "Audubon County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84019011",
    "fips": "19011",
    "county_name": "Benton County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84019013",
    "fips": "19013",
    "county_name": "Black Hawk County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84019015",
    "fips": "19015",
    "county_name": "Boone County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84019017",
    "fips": "19017",
    "county_name": "Bremer County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84019019",
    "fips": "19019",
    "county_name": "Buchanan County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84019021",
    "fips": "19021",
    "county_name": "Buena Vista County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84019023",
    "fips": "19023",
    "county_name": "Butler County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84019025",
    "fips": "19025",
    "county_name": "Calhoun County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84019027",
    "fips": "19027",
    "county_name": "Carroll County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84019029",
    "fips": "19029",
    "county_name": "Cass County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84019031",
    "fips": "19031",
    "county_name": "Cedar County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84019033",
    "fips": "19033",
    "county_name": "Cerro Gordo County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84019035",
    "fips": "19035",
    "county_name": "Cherokee County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84019037",
    "fips": "19037",
    "county_name": "Chickasaw County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84019039",
    "fips": "19039",
    "county_name": "Clarke County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84019041",
    "fips": "19041",
    "county_name": "Clay County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84019043",
    "fips": "19043",
    "county_name": "Clayton County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84019045",
    "fips": "19045",
    "county_name": "Clinton County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84019047",
    "fips": "19047",
    "county_name": "Crawford County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84019049",
    "fips": "19049",
    "county_name": "Dallas County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84019051",
    "fips": "19051",
    "county_name": "Davis County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84019053",
    "fips": "19053",
    "county_name": "Decatur County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84019055",
    "fips": "19055",
    "county_name": "Delaware County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84019057",
    "fips": "19057",
    "county_name": "Des Moines County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84019059",
    "fips": "19059",
    "county_name": "Dickinson County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84019061",
    "fips": "19061",
    "county_name": "Dubuque County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84019063",
    "fips": "19063",
    "county_name": "Emmet County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84019065",
    "fips": "19065",
    "county_name": "Fayette County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84019067",
    "fips": "19067",
    "county_name": "Floyd County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84019069",
    "fips": "19069",
    "county_name": "Franklin County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84019071",
    "fips": "19071",
    "county_name": "Fremont County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84019073",
    "fips": "19073",
    "county_name": "Greene County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84019075",
    "fips": "19075",
    "county_name": "Grundy County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84019077",
    "fips": "19077",
    "county_name": "Guthrie County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84019079",
    "fips": "19079",
    "county_name": "Hamilton County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84019081",
    "fips": "19081",
    "county_name": "Hancock County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "081",
    "class_fips": "H1"
  },
  {
    "id": "84019083",
    "fips": "19083",
    "county_name": "Hardin County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84019085",
    "fips": "19085",
    "county_name": "Harrison County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "085",
    "class_fips": "H1"
  },
  {
    "id": "84019087",
    "fips": "19087",
    "county_name": "Henry County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84019089",
    "fips": "19089",
    "county_name": "Howard County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "089",
    "class_fips": "H1"
  },
  {
    "id": "84019091",
    "fips": "19091",
    "county_name": "Humboldt County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "091",
    "class_fips": "H1"
  },
  {
    "id": "84019093",
    "fips": "19093",
    "county_name": "Ida County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "093",
    "class_fips": "H1"
  },
  {
    "id": "84019095",
    "fips": "19095",
    "county_name": "Iowa County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "095",
    "class_fips": "H1"
  },
  {
    "id": "84019097",
    "fips": "19097",
    "county_name": "Jackson County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "097",
    "class_fips": "H1"
  },
  {
    "id": "84019099",
    "fips": "19099",
    "county_name": "Jasper County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "099",
    "class_fips": "H1"
  },
  {
    "id": "84019101",
    "fips": "19101",
    "county_name": "Jefferson County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "101",
    "class_fips": "H1"
  },
  {
    "id": "84019103",
    "fips": "19103",
    "county_name": "Johnson County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "103",
    "class_fips": "H1"
  },
  {
    "id": "84019105",
    "fips": "19105",
    "county_name": "Jones County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "105",
    "class_fips": "H1"
  },
  {
    "id": "84019107",
    "fips": "19107",
    "county_name": "Keokuk County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "107",
    "class_fips": "H1"
  },
  {
    "id": "84019109",
    "fips": "19109",
    "county_name": "Kossuth County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "109",
    "class_fips": "H1"
  },
  {
    "id": "84019111",
    "fips": "19111",
    "county_name": "Lee County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "111",
    "class_fips": "H1"
  },
  {
    "id": "84019113",
    "fips": "19113",
    "county_name": "Linn County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "113",
    "class_fips": "H1"
  },
  {
    "id": "84019115",
    "fips": "19115",
    "county_name": "Louisa County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "115",
    "class_fips": "H1"
  },
  {
    "id": "84019117",
    "fips": "19117",
    "county_name": "Lucas County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "117",
    "class_fips": "H1"
  },
  {
    "id": "84019119",
    "fips": "19119",
    "county_name": "Lyon County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "119",
    "class_fips": "H1"
  },
  {
    "id": "84019121",
    "fips": "19121",
    "county_name": "Madison County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "121",
    "class_fips": "H1"
  },
  {
    "id": "84019123",
    "fips": "19123",
    "county_name": "Mahaska County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "123",
    "class_fips": "H1"
  },
  {
    "id": "84019125",
    "fips": "19125",
    "county_name": "Marion County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "125",
    "class_fips": "H1"
  },
  {
    "id": "84019127",
    "fips": "19127",
    "county_name": "Marshall County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "127",
    "class_fips": "H1"
  },
  {
    "id": "84019129",
    "fips": "19129",
    "county_name": "Mills County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "129",
    "class_fips": "H1"
  },
  {
    "id": "84019131",
    "fips": "19131",
    "county_name": "Mitchell County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "131",
    "class_fips": "H1"
  },
  {
    "id": "84019133",
    "fips": "19133",
    "county_name": "Monona County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "133",
    "class_fips": "H1"
  },
  {
    "id": "84019135",
    "fips": "19135",
    "county_name": "Monroe County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "135",
    "class_fips": "H1"
  },
  {
    "id": "84019137",
    "fips": "19137",
    "county_name": "Montgomery County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "137",
    "class_fips": "H1"
  },
  {
    "id": "84019139",
    "fips": "19139",
    "county_name": "Muscatine County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "139",
    "class_fips": "H1"
  },
  {
    "id": "84019141",
    "fips": "19141",
    "county_name": "O'Brien County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "141",
    "class_fips": "H1"
  },
  {
    "id": "84019143",
    "fips": "19143",
    "county_name": "Osceola County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "143",
    "class_fips": "H1"
  },
  {
    "id": "84019145",
    "fips": "19145",
    "county_name": "Page County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "145",
    "class_fips": "H1"
  },
  {
    "id": "84019147",
    "fips": "19147",
    "county_name": "Palo Alto County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "147",
    "class_fips": "H1"
  },
  {
    "id": "84019149",
    "fips": "19149",
    "county_name": "Plymouth County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "149",
    "class_fips": "H1"
  },
  {
    "id": "84019151",
    "fips": "19151",
    "county_name": "Pocahontas County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "151",
    "class_fips": "H1"
  },
  {
    "id": "84019153",
    "fips": "19153",
    "county_name": "Polk County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "153",
    "class_fips": "H1"
  },
  {
    "id": "84019155",
    "fips": "19155",
    "county_name": "Pottawattamie County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "155",
    "class_fips": "H1"
  },
  {
    "id": "84019157",
    "fips": "19157",
    "county_name": "Poweshiek County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "157",
    "class_fips": "H1"
  },
  {
    "id": "84019159",
    "fips": "19159",
    "county_name": "Ringgold County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "159",
    "class_fips": "H1"
  },
  {
    "id": "84019161",
    "fips": "19161",
    "county_name": "Sac County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "161",
    "class_fips": "H1"
  },
  {
    "id": "84019163",
    "fips": "19163",
    "county_name": "Scott County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "163",
    "class_fips": "H1"
  },
  {
    "id": "84019165",
    "fips": "19165",
    "county_name": "Shelby County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "165",
    "class_fips": "H1"
  },
  {
    "id": "84019167",
    "fips": "19167",
    "county_name": "Sioux County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "167",
    "class_fips": "H1"
  },
  {
    "id": "84019169",
    "fips": "19169",
    "county_name": "Story County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "169",
    "class_fips": "H1"
  },
  {
    "id": "84019171",
    "fips": "19171",
    "county_name": "Tama County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "171",
    "class_fips": "H1"
  },
  {
    "id": "84019173",
    "fips": "19173",
    "county_name": "Taylor County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "173",
    "class_fips": "H1"
  },
  {
    "id": "84019175",
    "fips": "19175",
    "county_name": "Union County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "175",
    "class_fips": "H1"
  },
  {
    "id": "84019177",
    "fips": "19177",
    "county_name": "Van Buren County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "177",
    "class_fips": "H1"
  },
  {
    "id": "84019179",
    "fips": "19179",
    "county_name": "Wapello County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "179",
    "class_fips": "H1"
  },
  {
    "id": "84019181",
    "fips": "19181",
    "county_name": "Warren County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "181",
    "class_fips": "H1"
  },
  {
    "id": "84019183",
    "fips": "19183",
    "county_name": "Washington County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "183",
    "class_fips": "H1"
  },
  {
    "id": "84019185",
    "fips": "19185",
    "county_name": "Wayne County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "185",
    "class_fips": "H1"
  },
  {
    "id": "84019187",
    "fips": "19187",
    "county_name": "Webster County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "187",
    "class_fips": "H1"
  },
  {
    "id": "84019189",
    "fips": "19189",
    "county_name": "Winnebago County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "189",
    "class_fips": "H1"
  },
  {
    "id": "84019191",
    "fips": "19191",
    "county_name": "Winneshiek County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "191",
    "class_fips": "H1"
  },
  {
    "id": "84019193",
    "fips": "19193",
    "county_name": "Woodbury County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "193",
    "class_fips": "H1"
  },
  {
    "id": "84019195",
    "fips": "19195",
    "county_name": "Worth County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "195",
    "class_fips": "H1"
  },
  {
    "id": "84019197",
    "fips": "19197",
    "county_name": "Wright County",
    "state_code": "IA",
    "state_fips": "19",
    "county_fips": "197",
    "class_fips": "H1"
  },
  {
    "id": "84020001",
    "fips": "20001",
    "county_name": "Allen County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84020003",
    "fips": "20003",
    "county_name": "Anderson County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84020005",
    "fips": "20005",
    "county_name": "Atchison County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84020007",
    "fips": "20007",
    "county_name": "Barber County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84020009",
    "fips": "20009",
    "county_name": "Barton County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84020011",
    "fips": "20011",
    "county_name": "Bourbon County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84020013",
    "fips": "20013",
    "county_name": "Brown County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84020015",
    "fips": "20015",
    "county_name": "Butler County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84020017",
    "fips": "20017",
    "county_name": "Chase County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84020019",
    "fips": "20019",
    "county_name": "Chautauqua County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84020021",
    "fips": "20021",
    "county_name": "Cherokee County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84020023",
    "fips": "20023",
    "county_name": "Cheyenne County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84020025",
    "fips": "20025",
    "county_name": "Clark County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84020027",
    "fips": "20027",
    "county_name": "Clay County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84020029",
    "fips": "20029",
    "county_name": "Cloud County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84020031",
    "fips": "20031",
    "county_name": "Coffey County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84020033",
    "fips": "20033",
    "county_name": "Comanche County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84020035",
    "fips": "20035",
    "county_name": "Cowley County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84020037",
    "fips": "20037",
    "county_name": "Crawford County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84020039",
    "fips": "20039",
    "county_name": "Decatur County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84020041",
    "fips": "20041",
    "county_name": "Dickinson County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84020043",
    "fips": "20043",
    "county_name": "Doniphan County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84020045",
    "fips": "20045",
    "county_name": "Douglas County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84020047",
    "fips": "20047",
    "county_name": "Edwards County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84020049",
    "fips": "20049",
    "county_name": "Elk County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84020051",
    "fips": "20051",
    "county_name": "Ellis County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84020053",
    "fips": "20053",
    "county_name": "Ellsworth County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84020055",
    "fips": "20055",
    "county_name": "Finney County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84020057",
    "fips": "20057",
    "county_name": "Ford County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84020059",
    "fips": "20059",
    "county_name": "Franklin County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84020061",
    "fips": "20061",
    "county_name": "Geary County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84020063",
    "fips": "20063",
    "county_name": "Gove County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84020065",
    "fips": "20065",
    "county_name": "Graham County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84020067",
    "fips": "20067",
    "county_name": "Grant County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84020069",
    "fips": "20069",
    "county_name": "Gray County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84020071",
    "fips": "20071",
    "county_name": "Greeley County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84020073",
    "fips": "20073",
    "county_name": "Greenwood County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84020075",
    "fips": "20075",
    "county_name": "Hamilton County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84020077",
    "fips": "20077",
    "county_name": "Harper County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84020079",
    "fips": "20079",
    "county_name": "Harvey County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84020081",
    "fips": "20081",
    "county_name": "Haskell County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "081",
    "class_fips": "H1"
  },
  {
    "id": "84020083",
    "fips": "20083",
    "county_name": "Hodgeman County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84020085",
    "fips": "20085",
    "county_name": "Jackson County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "085",
    "class_fips": "H1"
  },
  {
    "id": "84020087",
    "fips": "20087",
    "county_name": "Jefferson County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84020089",
    "fips": "20089",
    "county_name": "Jewell County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "089",
    "class_fips": "H1"
  },
  {
    "id": "84020091",
    "fips": "20091",
    "county_name": "Johnson County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "091",
    "class_fips": "H1"
  },
  {
    "id": "84020093",
    "fips": "20093",
    "county_name": "Kearny County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "093",
    "class_fips": "H1"
  },
  {
    "id": "84020095",
    "fips": "20095",
    "county_name": "Kingman County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "095",
    "class_fips": "H1"
  },
  {
    "id": "84020097",
    "fips": "20097",
    "county_name": "Kiowa County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "097",
    "class_fips": "H1"
  },
  {
    "id": "84020099",
    "fips": "20099",
    "county_name": "Labette County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "099",
    "class_fips": "H1"
  },
  {
    "id": "84020101",
    "fips": "20101",
    "county_name": "Lane County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "101",
    "class_fips": "H1"
  },
  {
    "id": "84020103",
    "fips": "20103",
    "county_name": "Leavenworth County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "103",
    "class_fips": "H1"
  },
  {
    "id": "84020105",
    "fips": "20105",
    "county_name": "Lincoln County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "105",
    "class_fips": "H1"
  },
  {
    "id": "84020107",
    "fips": "20107",
    "county_name": "Linn County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "107",
    "class_fips": "H1"
  },
  {
    "id": "84020109",
    "fips": "20109",
    "county_name": "Logan County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "109",
    "class_fips": "H1"
  },
  {
    "id": "84020111",
    "fips": "20111",
    "county_name": "Lyon County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "111",
    "class_fips": "H1"
  },
  {
    "id": "84020113",
    "fips": "20113",
    "county_name": "McPherson County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "113",
    "class_fips": "H1"
  },
  {
    "id": "84020115",
    "fips": "20115",
    "county_name": "Marion County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "115",
    "class_fips": "H1"
  },
  {
    "id": "84020117",
    "fips": "20117",
    "county_name": "Marshall County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "117",
    "class_fips": "H1"
  },
  {
    "id": "84020119",
    "fips": "20119",
    "county_name": "Meade County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "119",
    "class_fips": "H1"
  },
  {
    "id": "84020121",
    "fips": "20121",
    "county_name": "Miami County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "121",
    "class_fips": "H1"
  },
  {
    "id": "84020123",
    "fips": "20123",
    "county_name": "Mitchell County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "123",
    "class_fips": "H1"
  },
  {
    "id": "84020125",
    "fips": "20125",
    "county_name": "Montgomery County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "125",
    "class_fips": "H1"
  },
  {
    "id": "84020127",
    "fips": "20127",
    "county_name": "Morris County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "127",
    "class_fips": "H1"
  },
  {
    "id": "84020129",
    "fips": "20129",
    "county_name": "Morton County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "129",
    "class_fips": "H1"
  },
  {
    "id": "84020131",
    "fips": "20131",
    "county_name": "Nemaha County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "131",
    "class_fips": "H1"
  },
  {
    "id": "84020133",
    "fips": "20133",
    "county_name": "Neosho County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "133",
    "class_fips": "H1"
  },
  {
    "id": "84020135",
    "fips": "20135",
    "county_name": "Ness County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "135",
    "class_fips": "H1"
  },
  {
    "id": "84020137",
    "fips": "20137",
    "county_name": "Norton County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "137",
    "class_fips": "H1"
  },
  {
    "id": "84020139",
    "fips": "20139",
    "county_name": "Osage County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "139",
    "class_fips": "H1"
  },
  {
    "id": "84020141",
    "fips": "20141",
    "county_name": "Osborne County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "141",
    "class_fips": "H1"
  },
  {
    "id": "84020143",
    "fips": "20143",
    "county_name": "Ottawa County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "143",
    "class_fips": "H1"
  },
  {
    "id": "84020145",
    "fips": "20145",
    "county_name": "Pawnee County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "145",
    "class_fips": "H1"
  },
  {
    "id": "84020147",
    "fips": "20147",
    "county_name": "Phillips County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "147",
    "class_fips": "H1"
  },
  {
    "id": "84020149",
    "fips": "20149",
    "county_name": "Pottawatomie County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "149",
    "class_fips": "H1"
  },
  {
    "id": "84020151",
    "fips": "20151",
    "county_name": "Pratt County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "151",
    "class_fips": "H1"
  },
  {
    "id": "84020153",
    "fips": "20153",
    "county_name": "Rawlins County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "153",
    "class_fips": "H1"
  },
  {
    "id": "84020155",
    "fips": "20155",
    "county_name": "Reno County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "155",
    "class_fips": "H1"
  },
  {
    "id": "84020157",
    "fips": "20157",
    "county_name": "Republic County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "157",
    "class_fips": "H1"
  },
  {
    "id": "84020159",
    "fips": "20159",
    "county_name": "Rice County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "159",
    "class_fips": "H1"
  },
  {
    "id": "84020161",
    "fips": "20161",
    "county_name": "Riley County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "161",
    "class_fips": "H1"
  },
  {
    "id": "84020163",
    "fips": "20163",
    "county_name": "Rooks County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "163",
    "class_fips": "H1"
  },
  {
    "id": "84020165",
    "fips": "20165",
    "county_name": "Rush County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "165",
    "class_fips": "H1"
  },
  {
    "id": "84020167",
    "fips": "20167",
    "county_name": "Russell County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "167",
    "class_fips": "H1"
  },
  {
    "id": "84020169",
    "fips": "20169",
    "county_name": "Saline County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "169",
    "class_fips": "H1"
  },
  {
    "id": "84020171",
    "fips": "20171",
    "county_name": "Scott County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "171",
    "class_fips": "H1"
  },
  {
    "id": "84020173",
    "fips": "20173",
    "county_name": "Sedgwick County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "173",
    "class_fips": "H1"
  },
  {
    "id": "84020175",
    "fips": "20175",
    "county_name": "Seward County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "175",
    "class_fips": "H1"
  },
  {
    "id": "84020177",
    "fips": "20177",
    "county_name": "Shawnee County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "177",
    "class_fips": "H1"
  },
  {
    "id": "84020179",
    "fips": "20179",
    "county_name": "Sheridan County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "179",
    "class_fips": "H1"
  },
  {
    "id": "84020181",
    "fips": "20181",
    "county_name": "Sherman County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "181",
    "class_fips": "H1"
  },
  {
    "id": "84020183",
    "fips": "20183",
    "county_name": "Smith County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "183",
    "class_fips": "H1"
  },
  {
    "id": "84020185",
    "fips": "20185",
    "county_name": "Stafford County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "185",
    "class_fips": "H1"
  },
  {
    "id": "84020187",
    "fips": "20187",
    "county_name": "Stanton County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "187",
    "class_fips": "H1"
  },
  {
    "id": "84020189",
    "fips": "20189",
    "county_name": "Stevens County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "189",
    "class_fips": "H1"
  },
  {
    "id": "84020191",
    "fips": "20191",
    "county_name": "Sumner County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "191",
    "class_fips": "H1"
  },
  {
    "id": "84020193",
    "fips": "20193",
    "county_name": "Thomas County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "193",
    "class_fips": "H1"
  },
  {
    "id": "84020195",
    "fips": "20195",
    "county_name": "Trego County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "195",
    "class_fips": "H1"
  },
  {
    "id": "84020197",
    "fips": "20197",
    "county_name": "Wabaunsee County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "197",
    "class_fips": "H1"
  },
  {
    "id": "84020199",
    "fips": "20199",
    "county_name": "Wallace County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "199",
    "class_fips": "H1"
  },
  {
    "id": "84020201",
    "fips": "20201",
    "county_name": "Washington County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "201",
    "class_fips": "H1"
  },
  {
    "id": "84020203",
    "fips": "20203",
    "county_name": "Wichita County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "203",
    "class_fips": "H1"
  },
  {
    "id": "84020205",
    "fips": "20205",
    "county_name": "Wilson County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "205",
    "class_fips": "H1"
  },
  {
    "id": "84020207",
    "fips": "20207",
    "county_name": "Woodson County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "207",
    "class_fips": "H1"
  },
  {
    "id": "84020209",
    "fips": "20209",
    "county_name": "Wyandotte County",
    "state_code": "KS",
    "state_fips": "20",
    "county_fips": "209",
    "class_fips": "H6"
  },
  {
    "id": "84021001",
    "fips": "21001",
    "county_name": "Adair County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84021003",
    "fips": "21003",
    "county_name": "Allen County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84021005",
    "fips": "21005",
    "county_name": "Anderson County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84021007",
    "fips": "21007",
    "county_name": "Ballard County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84021009",
    "fips": "21009",
    "county_name": "Barren County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84021011",
    "fips": "21011",
    "county_name": "Bath County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84021013",
    "fips": "21013",
    "county_name": "Bell County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84021015",
    "fips": "21015",
    "county_name": "Boone County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84021017",
    "fips": "21017",
    "county_name": "Bourbon County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84021019",
    "fips": "21019",
    "county_name": "Boyd County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84021021",
    "fips": "21021",
    "county_name": "Boyle County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84021023",
    "fips": "21023",
    "county_name": "Bracken County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84021025",
    "fips": "21025",
    "county_name": "Breathitt County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84021027",
    "fips": "21027",
    "county_name": "Breckinridge County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84021029",
    "fips": "21029",
    "county_name": "Bullitt County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84021031",
    "fips": "21031",
    "county_name": "Butler County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84021033",
    "fips": "21033",
    "county_name": "Caldwell County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84021035",
    "fips": "21035",
    "county_name": "Calloway County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84021037",
    "fips": "21037",
    "county_name": "Campbell County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84021039",
    "fips": "21039",
    "county_name": "Carlisle County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84021041",
    "fips": "21041",
    "county_name": "Carroll County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84021043",
    "fips": "21043",
    "county_name": "Carter County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84021045",
    "fips": "21045",
    "county_name": "Casey County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84021047",
    "fips": "21047",
    "county_name": "Christian County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84021049",
    "fips": "21049",
    "county_name": "Clark County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84021051",
    "fips": "21051",
    "county_name": "Clay County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84021053",
    "fips": "21053",
    "county_name": "Clinton County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84021055",
    "fips": "21055",
    "county_name": "Crittenden County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84021057",
    "fips": "21057",
    "county_name": "Cumberland County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84021059",
    "fips": "21059",
    "county_name": "Daviess County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84021061",
    "fips": "21061",
    "county_name": "Edmonson County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84021063",
    "fips": "21063",
    "county_name": "Elliott County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84021065",
    "fips": "21065",
    "county_name": "Estill County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84021067",
    "fips": "21067",
    "county_name": "Fayette County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "067",
    "class_fips": "H6"
  },
  {
    "id": "84021069",
    "fips": "21069",
    "county_name": "Fleming County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84021071",
    "fips": "21071",
    "county_name": "Floyd County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84021073",
    "fips": "21073",
    "county_name": "Franklin County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84021075",
    "fips": "21075",
    "county_name": "Fulton County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84021077",
    "fips": "21077",
    "county_name": "Gallatin County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84021079",
    "fips": "21079",
    "county_name": "Garrard County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84021081",
    "fips": "21081",
    "county_name": "Grant County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "081",
    "class_fips": "H1"
  },
  {
    "id": "84021083",
    "fips": "21083",
    "county_name": "Graves County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84021085",
    "fips": "21085",
    "county_name": "Grayson County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "085",
    "class_fips": "H1"
  },
  {
    "id": "84021087",
    "fips": "21087",
    "county_name": "Green County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84021089",
    "fips": "21089",
    "county_name": "Greenup County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "089",
    "class_fips": "H1"
  },
  {
    "id": "84021091",
    "fips": "21091",
    "county_name": "Hancock County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "091",
    "class_fips": "H1"
  },
  {
    "id": "84021093",
    "fips": "21093",
    "county_name": "Hardin County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "093",
    "class_fips": "H1"
  },
  {
    "id": "84021095",
    "fips": "21095",
    "county_name": "Harlan County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "095",
    "class_fips": "H1"
  },
  {
    "id": "84021097",
    "fips": "21097",
    "county_name": "Harrison County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "097",
    "class_fips": "H1"
  },
  {
    "id": "84021099",
    "fips": "21099",
    "county_name": "Hart County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "099",
    "class_fips": "H1"
  },
  {
    "id": "84021101",
    "fips": "21101",
    "county_name": "Henderson County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "101",
    "class_fips": "H1"
  },
  {
    "id": "84021103",
    "fips": "21103",
    "county_name": "Henry County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "103",
    "class_fips": "H1"
  },
  {
    "id": "84021105",
    "fips": "21105",
    "county_name": "Hickman County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "105",
    "class_fips": "H1"
  },
  {
    "id": "84021107",
    "fips": "21107",
    "county_name": "Hopkins County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "107",
    "class_fips": "H1"
  },
  {
    "id": "84021109",
    "fips": "21109",
    "county_name": "Jackson County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "109",
    "class_fips": "H1"
  },
  {
    "id": "84021111",
    "fips": "21111",
    "county_name": "Jefferson County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "111",
    "class_fips": "H1"
  },
  {
    "id": "84021113",
    "fips": "21113",
    "county_name": "Jessamine County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "113",
    "class_fips": "H1"
  },
  {
    "id": "84021115",
    "fips": "21115",
    "county_name": "Johnson County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "115",
    "class_fips": "H1"
  },
  {
    "id": "84021117",
    "fips": "21117",
    "county_name": "Kenton County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "117",
    "class_fips": "H1"
  },
  {
    "id": "84021119",
    "fips": "21119",
    "county_name": "Knott County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "119",
    "class_fips": "H1"
  },
  {
    "id": "84021121",
    "fips": "21121",
    "county_name": "Knox County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "121",
    "class_fips": "H1"
  },
  {
    "id": "84021123",
    "fips": "21123",
    "county_name": "Larue County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "123",
    "class_fips": "H1"
  },
  {
    "id": "84021125",
    "fips": "21125",
    "county_name": "Laurel County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "125",
    "class_fips": "H1"
  },
  {
    "id": "84021127",
    "fips": "21127",
    "county_name": "Lawrence County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "127",
    "class_fips": "H1"
  },
  {
    "id": "84021129",
    "fips": "21129",
    "county_name": "Lee County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "129",
    "class_fips": "H1"
  },
  {
    "id": "84021131",
    "fips": "21131",
    "county_name": "Leslie County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "131",
    "class_fips": "H1"
  },
  {
    "id": "84021133",
    "fips": "21133",
    "county_name": "Letcher County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "133",
    "class_fips": "H1"
  },
  {
    "id": "84021135",
    "fips": "21135",
    "county_name": "Lewis County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "135",
    "class_fips": "H1"
  },
  {
    "id": "84021137",
    "fips": "21137",
    "county_name": "Lincoln County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "137",
    "class_fips": "H1"
  },
  {
    "id": "84021139",
    "fips": "21139",
    "county_name": "Livingston County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "139",
    "class_fips": "H1"
  },
  {
    "id": "84021141",
    "fips": "21141",
    "county_name": "Logan County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "141",
    "class_fips": "H1"
  },
  {
    "id": "84021143",
    "fips": "21143",
    "county_name": "Lyon County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "143",
    "class_fips": "H1"
  },
  {
    "id": "84021145",
    "fips": "21145",
    "county_name": "McCracken County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "145",
    "class_fips": "H1"
  },
  {
    "id": "84021147",
    "fips": "21147",
    "county_name": "McCreary County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "147",
    "class_fips": "H1"
  },
  {
    "id": "84021149",
    "fips": "21149",
    "county_name": "McLean County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "149",
    "class_fips": "H1"
  },
  {
    "id": "84021151",
    "fips": "21151",
    "county_name": "Madison County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "151",
    "class_fips": "H1"
  },
  {
    "id": "84021153",
    "fips": "21153",
    "county_name": "Magoffin County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "153",
    "class_fips": "H1"
  },
  {
    "id": "84021155",
    "fips": "21155",
    "county_name": "Marion County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "155",
    "class_fips": "H1"
  },
  {
    "id": "84021157",
    "fips": "21157",
    "county_name": "Marshall County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "157",
    "class_fips": "H1"
  },
  {
    "id": "84021159",
    "fips": "21159",
    "county_name": "Martin County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "159",
    "class_fips": "H1"
  },
  {
    "id": "84021161",
    "fips": "21161",
    "county_name": "Mason County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "161",
    "class_fips": "H1"
  },
  {
    "id": "84021163",
    "fips": "21163",
    "county_name": "Meade County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "163",
    "class_fips": "H1"
  },
  {
    "id": "84021165",
    "fips": "21165",
    "county_name": "Menifee County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "165",
    "class_fips": "H1"
  },
  {
    "id": "84021167",
    "fips": "21167",
    "county_name": "Mercer County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "167",
    "class_fips": "H1"
  },
  {
    "id": "84021169",
    "fips": "21169",
    "county_name": "Metcalfe County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "169",
    "class_fips": "H1"
  },
  {
    "id": "84021171",
    "fips": "21171",
    "county_name": "Monroe County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "171",
    "class_fips": "H1"
  },
  {
    "id": "84021173",
    "fips": "21173",
    "county_name": "Montgomery County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "173",
    "class_fips": "H1"
  },
  {
    "id": "84021175",
    "fips": "21175",
    "county_name": "Morgan County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "175",
    "class_fips": "H1"
  },
  {
    "id": "84021177",
    "fips": "21177",
    "county_name": "Muhlenberg County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "177",
    "class_fips": "H1"
  },
  {
    "id": "84021179",
    "fips": "21179",
    "county_name": "Nelson County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "179",
    "class_fips": "H1"
  },
  {
    "id": "84021181",
    "fips": "21181",
    "county_name": "Nicholas County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "181",
    "class_fips": "H1"
  },
  {
    "id": "84021183",
    "fips": "21183",
    "county_name": "Ohio County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "183",
    "class_fips": "H1"
  },
  {
    "id": "84021185",
    "fips": "21185",
    "county_name": "Oldham County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "185",
    "class_fips": "H1"
  },
  {
    "id": "84021187",
    "fips": "21187",
    "county_name": "Owen County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "187",
    "class_fips": "H1"
  },
  {
    "id": "84021189",
    "fips": "21189",
    "county_name": "Owsley County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "189",
    "class_fips": "H1"
  },
  {
    "id": "84021191",
    "fips": "21191",
    "county_name": "Pendleton County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "191",
    "class_fips": "H1"
  },
  {
    "id": "84021193",
    "fips": "21193",
    "county_name": "Perry County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "193",
    "class_fips": "H1"
  },
  {
    "id": "84021195",
    "fips": "21195",
    "county_name": "Pike County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "195",
    "class_fips": "H1"
  },
  {
    "id": "84021197",
    "fips": "21197",
    "county_name": "Powell County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "197",
    "class_fips": "H1"
  },
  {
    "id": "84021199",
    "fips": "21199",
    "county_name": "Pulaski County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "199",
    "class_fips": "H1"
  },
  {
    "id": "84021201",
    "fips": "21201",
    "county_name": "Robertson County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "201",
    "class_fips": "H1"
  },
  {
    "id": "84021203",
    "fips": "21203",
    "county_name": "Rockcastle County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "203",
    "class_fips": "H1"
  },
  {
    "id": "84021205",
    "fips": "21205",
    "county_name": "Rowan County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "205",
    "class_fips": "H1"
  },
  {
    "id": "84021207",
    "fips": "21207",
    "county_name": "Russell County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "207",
    "class_fips": "H1"
  },
  {
    "id": "84021209",
    "fips": "21209",
    "county_name": "Scott County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "209",
    "class_fips": "H1"
  },
  {
    "id": "84021211",
    "fips": "21211",
    "county_name": "Shelby County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "211",
    "class_fips": "H1"
  },
  {
    "id": "84021213",
    "fips": "21213",
    "county_name": "Simpson County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "213",
    "class_fips": "H1"
  },
  {
    "id": "84021215",
    "fips": "21215",
    "county_name": "Spencer County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "215",
    "class_fips": "H1"
  },
  {
    "id": "84021217",
    "fips": "21217",
    "county_name": "Taylor County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "217",
    "class_fips": "H1"
  },
  {
    "id": "84021219",
    "fips": "21219",
    "county_name": "Todd County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "219",
    "class_fips": "H1"
  },
  {
    "id": "84021221",
    "fips": "21221",
    "county_name": "Trigg County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "221",
    "class_fips": "H1"
  },
  {
    "id": "84021223",
    "fips": "21223",
    "county_name": "Trimble County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "223",
    "class_fips": "H1"
  },
  {
    "id": "84021225",
    "fips": "21225",
    "county_name": "Union County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "225",
    "class_fips": "H1"
  },
  {
    "id": "84021227",
    "fips": "21227",
    "county_name": "Warren County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "227",
    "class_fips": "H1"
  },
  {
    "id": "84021229",
    "fips": "21229",
    "county_name": "Washington County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "229",
    "class_fips": "H1"
  },
  {
    "id": "84021231",
    "fips": "21231",
    "county_name": "Wayne County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "231",
    "class_fips": "H1"
  },
  {
    "id": "84021233",
    "fips": "21233",
    "county_name": "Webster County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "233",
    "class_fips": "H1"
  },
  {
    "id": "84021235",
    "fips": "21235",
    "county_name": "Whitley County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "235",
    "class_fips": "H1"
  },
  {
    "id": "84021237",
    "fips": "21237",
    "county_name": "Wolfe County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "237",
    "class_fips": "H1"
  },
  {
    "id": "84021239",
    "fips": "21239",
    "county_name": "Woodford County",
    "state_code": "KY",
    "state_fips": "21",
    "county_fips": "239",
    "class_fips": "H1"
  },
  {
    "id": "84022001",
    "fips": "22001",
    "county_name": "Acadia Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84022003",
    "fips": "22003",
    "county_name": "Allen Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84022005",
    "fips": "22005",
    "county_name": "Ascension Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84022007",
    "fips": "22007",
    "county_name": "Assumption Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84022009",
    "fips": "22009",
    "county_name": "Avoyelles Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84022011",
    "fips": "22011",
    "county_name": "Beauregard Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84022013",
    "fips": "22013",
    "county_name": "Bienville Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84022015",
    "fips": "22015",
    "county_name": "Bossier Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84022017",
    "fips": "22017",
    "county_name": "Caddo Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84022019",
    "fips": "22019",
    "county_name": "Calcasieu Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84022021",
    "fips": "22021",
    "county_name": "Caldwell Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84022023",
    "fips": "22023",
    "county_name": "Cameron Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84022025",
    "fips": "22025",
    "county_name": "Catahoula Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84022027",
    "fips": "22027",
    "county_name": "Claiborne Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84022029",
    "fips": "22029",
    "county_name": "Concordia Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84022031",
    "fips": "22031",
    "county_name": "De Soto Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84022033",
    "fips": "22033",
    "county_name": "East Baton Rouge Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84022035",
    "fips": "22035",
    "county_name": "East Carroll Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84022037",
    "fips": "22037",
    "county_name": "East Feliciana Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84022039",
    "fips": "22039",
    "county_name": "Evangeline Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84022041",
    "fips": "22041",
    "county_name": "Franklin Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84022043",
    "fips": "22043",
    "county_name": "Grant Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84022045",
    "fips": "22045",
    "county_name": "Iberia Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84022047",
    "fips": "22047",
    "county_name": "Iberville Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84022049",
    "fips": "22049",
    "county_name": "Jackson Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84022051",
    "fips": "22051",
    "county_name": "Jefferson Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84022053",
    "fips": "22053",
    "county_name": "Jefferson Davis Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84022055",
    "fips": "22055",
    "county_name": "Lafayette Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84022057",
    "fips": "22057",
    "county_name": "Lafourche Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84022059",
    "fips": "22059",
    "county_name": "LaSalle Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84022061",
    "fips": "22061",
    "county_name": "Lincoln Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84022063",
    "fips": "22063",
    "county_name": "Livingston Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84022065",
    "fips": "22065",
    "county_name": "Madison Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84022067",
    "fips": "22067",
    "county_name": "Morehouse Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84022069",
    "fips": "22069",
    "county_name": "Natchitoches Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84022071",
    "fips": "22071",
    "county_name": "Orleans Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "071",
    "class_fips": "H6"
  },
  {
    "id": "84022073",
    "fips": "22073",
    "county_name": "Ouachita Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84022075",
    "fips": "22075",
    "county_name": "Plaquemines Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84022077",
    "fips": "22077",
    "county_name": "Pointe Coupee Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84022079",
    "fips": "22079",
    "county_name": "Rapides Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84022081",
    "fips": "22081",
    "county_name": "Red River Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "081",
    "class_fips": "H1"
  },
  {
    "id": "84022083",
    "fips": "22083",
    "county_name": "Richland Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84022085",
    "fips": "22085",
    "county_name": "Sabine Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "085",
    "class_fips": "H1"
  },
  {
    "id": "84022087",
    "fips": "22087",
    "county_name": "St. Bernard Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84022089",
    "fips": "22089",
    "county_name": "St. Charles Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "089",
    "class_fips": "H1"
  },
  {
    "id": "84022091",
    "fips": "22091",
    "county_name": "St. Helena Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "091",
    "class_fips": "H1"
  },
  {
    "id": "84022093",
    "fips": "22093",
    "county_name": "St. James Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "093",
    "class_fips": "H1"
  },
  {
    "id": "84022095",
    "fips": "22095",
    "county_name": "St. John the Baptist Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "095",
    "class_fips": "H1"
  },
  {
    "id": "84022097",
    "fips": "22097",
    "county_name": "St. Landry Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "097",
    "class_fips": "H1"
  },
  {
    "id": "84022099",
    "fips": "22099",
    "county_name": "St. Martin Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "099",
    "class_fips": "H1"
  },
  {
    "id": "84022101",
    "fips": "22101",
    "county_name": "St. Mary Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "101",
    "class_fips": "H1"
  },
  {
    "id": "84022103",
    "fips": "22103",
    "county_name": "St. Tammany Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "103",
    "class_fips": "H1"
  },
  {
    "id": "84022105",
    "fips": "22105",
    "county_name": "Tangipahoa Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "105",
    "class_fips": "H1"
  },
  {
    "id": "84022107",
    "fips": "22107",
    "county_name": "Tensas Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "107",
    "class_fips": "H1"
  },
  {
    "id": "84022109",
    "fips": "22109",
    "county_name": "Terrebonne Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "109",
    "class_fips": "H1"
  },
  {
    "id": "84022111",
    "fips": "22111",
    "county_name": "Union Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "111",
    "class_fips": "H1"
  },
  {
    "id": "84022113",
    "fips": "22113",
    "county_name": "Vermilion Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "113",
    "class_fips": "H1"
  },
  {
    "id": "84022115",
    "fips": "22115",
    "county_name": "Vernon Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "115",
    "class_fips": "H1"
  },
  {
    "id": "84022117",
    "fips": "22117",
    "county_name": "Washington Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "117",
    "class_fips": "H1"
  },
  {
    "id": "84022119",
    "fips": "22119",
    "county_name": "Webster Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "119",
    "class_fips": "H1"
  },
  {
    "id": "84022121",
    "fips": "22121",
    "county_name": "West Baton Rouge Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "121",
    "class_fips": "H1"
  },
  {
    "id": "84022123",
    "fips": "22123",
    "county_name": "West Carroll Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "123",
    "class_fips": "H1"
  },
  {
    "id": "84022125",
    "fips": "22125",
    "county_name": "West Feliciana Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "125",
    "class_fips": "H1"
  },
  {
    "id": "84022127",
    "fips": "22127",
    "county_name": "Winn Parish",
    "state_code": "LA",
    "state_fips": "22",
    "county_fips": "127",
    "class_fips": "H1"
  },
  {
    "id": "84023001",
    "fips": "23001",
    "county_name": "Androscoggin County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84023003",
    "fips": "23003",
    "county_name": "Aroostook County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84023005",
    "fips": "23005",
    "county_name": "Cumberland County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84023007",
    "fips": "23007",
    "county_name": "Franklin County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84023009",
    "fips": "23009",
    "county_name": "Hancock County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84023011",
    "fips": "23011",
    "county_name": "Kennebec County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84023013",
    "fips": "23013",
    "county_name": "Knox County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84023015",
    "fips": "23015",
    "county_name": "Lincoln County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84023017",
    "fips": "23017",
    "county_name": "Oxford County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84023019",
    "fips": "23019",
    "county_name": "Penobscot County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84023021",
    "fips": "23021",
    "county_name": "Piscataquis County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84023023",
    "fips": "23023",
    "county_name": "Sagadahoc County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84023025",
    "fips": "23025",
    "county_name": "Somerset County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84023027",
    "fips": "23027",
    "county_name": "Waldo County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84023029",
    "fips": "23029",
    "county_name": "Washington County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84023031",
    "fips": "23031",
    "county_name": "York County",
    "state_code": "ME",
    "state_fips": "23",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84024001",
    "fips": "24001",
    "county_name": "Allegany County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84024003",
    "fips": "24003",
    "county_name": "Anne Arundel County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84024005",
    "fips": "24005",
    "county_name": "Baltimore County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84024009",
    "fips": "24009",
    "county_name": "Calvert County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84024011",
    "fips": "24011",
    "county_name": "Caroline County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84024013",
    "fips": "24013",
    "county_name": "Carroll County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84024015",
    "fips": "24015",
    "county_name": "Cecil County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84024017",
    "fips": "24017",
    "county_name": "Charles County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84024019",
    "fips": "24019",
    "county_name": "Dorchester County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84024021",
    "fips": "24021",
    "county_name": "Frederick County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84024023",
    "fips": "24023",
    "county_name": "Garrett County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84024025",
    "fips": "24025",
    "county_name": "Harford County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84024027",
    "fips": "24027",
    "county_name": "Howard County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84024029",
    "fips": "24029",
    "county_name": "Kent County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84024031",
    "fips": "24031",
    "county_name": "Montgomery County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84024033",
    "fips": "24033",
    "county_name": "Prince George's County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84024035",
    "fips": "24035",
    "county_name": "Queen Anne's County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84024037",
    "fips": "24037",
    "county_name": "St. Mary's County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84024039",
    "fips": "24039",
    "county_name": "Somerset County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84024041",
    "fips": "24041",
    "county_name": "Talbot County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84024043",
    "fips": "24043",
    "county_name": "Washington County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84024045",
    "fips": "24045",
    "county_name": "Wicomico County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84024047",
    "fips": "24047",
    "county_name": "Worcester County",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84024510",
    "fips": "24510",
    "county_name": "Baltimore city",
    "state_code": "MD",
    "state_fips": "24",
    "county_fips": "510",
    "class_fips": "C7"
  },
  {
    "id": "84025001",
    "fips": "25001",
    "county_name": "Barnstable County",
    "state_code": "MA",
    "state_fips": "25",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84025003",
    "fips": "25003",
    "county_name": "Berkshire County",
    "state_code": "MA",
    "state_fips": "25",
    "county_fips": "003",
    "class_fips": "H4"
  },
  {
    "id": "84025005",
    "fips": "25005",
    "county_name": "Bristol County",
    "state_code": "MA",
    "state_fips": "25",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84025007",
    "fips": "25007",
    "county_name": "Dukes County",
    "state_code": "MA",
    "state_fips": "25",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84025009",
    "fips": "25009",
    "county_name": "Essex County",
    "state_code": "MA",
    "state_fips": "25",
    "county_fips": "009",
    "class_fips": "H4"
  },
  {
    "id": "84025011",
    "fips": "25011",
    "county_name": "Franklin County",
    "state_code": "MA",
    "state_fips": "25",
    "county_fips": "011",
    "class_fips": "H4"
  },
  {
    "id": "84025013",
    "fips": "25013",
    "county_name": "Hampden County",
    "state_code": "MA",
    "state_fips": "25",
    "county_fips": "013",
    "class_fips": "H4"
  },
  {
    "id": "84025015",
    "fips": "25015",
    "county_name": "Hampshire County",
    "state_code": "MA",
    "state_fips": "25",
    "county_fips": "015",
    "class_fips": "H4"
  },
  {
    "id": "84025017",
    "fips": "25017",
    "county_name": "Middlesex County",
    "state_code": "MA",
    "state_fips": "25",
    "county_fips": "017",
    "class_fips": "H4"
  },
  {
    "id": "84025019",
    "fips": "25019",
    "county_name": "Nantucket County",
    "state_code": "MA",
    "state_fips": "25",
    "county_fips": "019",
    "class_fips": "H4"
  },
  {
    "id": "84025021",
    "fips": "25021",
    "county_name": "Norfolk County",
    "state_code": "MA",
    "state_fips": "25",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84025023",
    "fips": "25023",
    "county_name": "Plymouth County",
    "state_code": "MA",
    "state_fips": "25",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84025025",
    "fips": "25025",
    "county_name": "Suffolk County",
    "state_code": "MA",
    "state_fips": "25",
    "county_fips": "025",
    "class_fips": "H4"
  },
  {
    "id": "84025027",
    "fips": "25027",
    "county_name": "Worcester County",
    "state_code": "MA",
    "state_fips": "25",
    "county_fips": "027",
    "class_fips": "H4"
  },
  {
    "id": "84026001",
    "fips": "26001",
    "county_name": "Alcona County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84026003",
    "fips": "26003",
    "county_name": "Alger County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84026005",
    "fips": "26005",
    "county_name": "Allegan County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84026007",
    "fips": "26007",
    "county_name": "Alpena County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84026009",
    "fips": "26009",
    "county_name": "Antrim County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84026011",
    "fips": "26011",
    "county_name": "Arenac County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84026013",
    "fips": "26013",
    "county_name": "Baraga County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84026015",
    "fips": "26015",
    "county_name": "Barry County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84026017",
    "fips": "26017",
    "county_name": "Bay County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84026019",
    "fips": "26019",
    "county_name": "Benzie County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84026021",
    "fips": "26021",
    "county_name": "Berrien County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84026023",
    "fips": "26023",
    "county_name": "Branch County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84026025",
    "fips": "26025",
    "county_name": "Calhoun County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84026027",
    "fips": "26027",
    "county_name": "Cass County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84026029",
    "fips": "26029",
    "county_name": "Charlevoix County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84026031",
    "fips": "26031",
    "county_name": "Cheboygan County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84026033",
    "fips": "26033",
    "county_name": "Chippewa County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84026035",
    "fips": "26035",
    "county_name": "Clare County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84026037",
    "fips": "26037",
    "county_name": "Clinton County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84026039",
    "fips": "26039",
    "county_name": "Crawford County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84026041",
    "fips": "26041",
    "county_name": "Delta County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84026043",
    "fips": "26043",
    "county_name": "Dickinson County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84026045",
    "fips": "26045",
    "county_name": "Eaton County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84026047",
    "fips": "26047",
    "county_name": "Emmet County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84026049",
    "fips": "26049",
    "county_name": "Genesee County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84026051",
    "fips": "26051",
    "county_name": "Gladwin County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84026053",
    "fips": "26053",
    "county_name": "Gogebic County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84026055",
    "fips": "26055",
    "county_name": "Grand Traverse County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84026057",
    "fips": "26057",
    "county_name": "Gratiot County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84026059",
    "fips": "26059",
    "county_name": "Hillsdale County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84026061",
    "fips": "26061",
    "county_name": "Houghton County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84026063",
    "fips": "26063",
    "county_name": "Huron County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84026065",
    "fips": "26065",
    "county_name": "Ingham County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84026067",
    "fips": "26067",
    "county_name": "Ionia County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84026069",
    "fips": "26069",
    "county_name": "Iosco County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84026071",
    "fips": "26071",
    "county_name": "Iron County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84026073",
    "fips": "26073",
    "county_name": "Isabella County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84026075",
    "fips": "26075",
    "county_name": "Jackson County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84026077",
    "fips": "26077",
    "county_name": "Kalamazoo County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84026079",
    "fips": "26079",
    "county_name": "Kalkaska County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84026081",
    "fips": "26081",
    "county_name": "Kent County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "081",
    "class_fips": "H1"
  },
  {
    "id": "84026083",
    "fips": "26083",
    "county_name": "Keweenaw County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84026085",
    "fips": "26085",
    "county_name": "Lake County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "085",
    "class_fips": "H1"
  },
  {
    "id": "84026087",
    "fips": "26087",
    "county_name": "Lapeer County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84026089",
    "fips": "26089",
    "county_name": "Leelanau County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "089",
    "class_fips": "H1"
  },
  {
    "id": "84026091",
    "fips": "26091",
    "county_name": "Lenawee County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "091",
    "class_fips": "H1"
  },
  {
    "id": "84026093",
    "fips": "26093",
    "county_name": "Livingston County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "093",
    "class_fips": "H1"
  },
  {
    "id": "84026095",
    "fips": "26095",
    "county_name": "Luce County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "095",
    "class_fips": "H1"
  },
  {
    "id": "84026097",
    "fips": "26097",
    "county_name": "Mackinac County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "097",
    "class_fips": "H1"
  },
  {
    "id": "84026099",
    "fips": "26099",
    "county_name": "Macomb County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "099",
    "class_fips": "H1"
  },
  {
    "id": "84026101",
    "fips": "26101",
    "county_name": "Manistee County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "101",
    "class_fips": "H1"
  },
  {
    "id": "84026103",
    "fips": "26103",
    "county_name": "Marquette County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "103",
    "class_fips": "H1"
  },
  {
    "id": "84026105",
    "fips": "26105",
    "county_name": "Mason County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "105",
    "class_fips": "H1"
  },
  {
    "id": "84026107",
    "fips": "26107",
    "county_name": "Mecosta County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "107",
    "class_fips": "H1"
  },
  {
    "id": "84026109",
    "fips": "26109",
    "county_name": "Menominee County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "109",
    "class_fips": "H1"
  },
  {
    "id": "84026111",
    "fips": "26111",
    "county_name": "Midland County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "111",
    "class_fips": "H1"
  },
  {
    "id": "84026113",
    "fips": "26113",
    "county_name": "Missaukee County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "113",
    "class_fips": "H1"
  },
  {
    "id": "84026115",
    "fips": "26115",
    "county_name": "Monroe County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "115",
    "class_fips": "H1"
  },
  {
    "id": "84026117",
    "fips": "26117",
    "county_name": "Montcalm County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "117",
    "class_fips": "H1"
  },
  {
    "id": "84026119",
    "fips": "26119",
    "county_name": "Montmorency County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "119",
    "class_fips": "H1"
  },
  {
    "id": "84026121",
    "fips": "26121",
    "county_name": "Muskegon County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "121",
    "class_fips": "H1"
  },
  {
    "id": "84026123",
    "fips": "26123",
    "county_name": "Newaygo County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "123",
    "class_fips": "H1"
  },
  {
    "id": "84026125",
    "fips": "26125",
    "county_name": "Oakland County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "125",
    "class_fips": "H1"
  },
  {
    "id": "84026127",
    "fips": "26127",
    "county_name": "Oceana County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "127",
    "class_fips": "H1"
  },
  {
    "id": "84026129",
    "fips": "26129",
    "county_name": "Ogemaw County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "129",
    "class_fips": "H1"
  },
  {
    "id": "84026131",
    "fips": "26131",
    "county_name": "Ontonagon County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "131",
    "class_fips": "H1"
  },
  {
    "id": "84026133",
    "fips": "26133",
    "county_name": "Osceola County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "133",
    "class_fips": "H1"
  },
  {
    "id": "84026135",
    "fips": "26135",
    "county_name": "Oscoda County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "135",
    "class_fips": "H1"
  },
  {
    "id": "84026137",
    "fips": "26137",
    "county_name": "Otsego County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "137",
    "class_fips": "H1"
  },
  {
    "id": "84026139",
    "fips": "26139",
    "county_name": "Ottawa County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "139",
    "class_fips": "H1"
  },
  {
    "id": "84026141",
    "fips": "26141",
    "county_name": "Presque Isle County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "141",
    "class_fips": "H1"
  },
  {
    "id": "84026143",
    "fips": "26143",
    "county_name": "Roscommon County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "143",
    "class_fips": "H1"
  },
  {
    "id": "84026145",
    "fips": "26145",
    "county_name": "Saginaw County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "145",
    "class_fips": "H1"
  },
  {
    "id": "84026147",
    "fips": "26147",
    "county_name": "St. Clair County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "147",
    "class_fips": "H1"
  },
  {
    "id": "84026149",
    "fips": "26149",
    "county_name": "St. Joseph County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "149",
    "class_fips": "H1"
  },
  {
    "id": "84026151",
    "fips": "26151",
    "county_name": "Sanilac County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "151",
    "class_fips": "H1"
  },
  {
    "id": "84026153",
    "fips": "26153",
    "county_name": "Schoolcraft County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "153",
    "class_fips": "H1"
  },
  {
    "id": "84026155",
    "fips": "26155",
    "county_name": "Shiawassee County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "155",
    "class_fips": "H1"
  },
  {
    "id": "84026157",
    "fips": "26157",
    "county_name": "Tuscola County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "157",
    "class_fips": "H1"
  },
  {
    "id": "84026159",
    "fips": "26159",
    "county_name": "Van Buren County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "159",
    "class_fips": "H1"
  },
  {
    "id": "84026161",
    "fips": "26161",
    "county_name": "Washtenaw County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "161",
    "class_fips": "H1"
  },
  {
    "id": "84026163",
    "fips": "26163",
    "county_name": "Wayne County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "163",
    "class_fips": "H1"
  },
  {
    "id": "84026165",
    "fips": "26165",
    "county_name": "Wexford County",
    "state_code": "MI",
    "state_fips": "26",
    "county_fips": "165",
    "class_fips": "H1"
  },
  {
    "id": "84027001",
    "fips": "27001",
    "county_name": "Aitkin County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84027003",
    "fips": "27003",
    "county_name": "Anoka County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84027005",
    "fips": "27005",
    "county_name": "Becker County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84027007",
    "fips": "27007",
    "county_name": "Beltrami County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84027009",
    "fips": "27009",
    "county_name": "Benton County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84027011",
    "fips": "27011",
    "county_name": "Big Stone County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84027013",
    "fips": "27013",
    "county_name": "Blue Earth County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84027015",
    "fips": "27015",
    "county_name": "Brown County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84027017",
    "fips": "27017",
    "county_name": "Carlton County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84027019",
    "fips": "27019",
    "county_name": "Carver County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84027021",
    "fips": "27021",
    "county_name": "Cass County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84027023",
    "fips": "27023",
    "county_name": "Chippewa County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84027025",
    "fips": "27025",
    "county_name": "Chisago County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84027027",
    "fips": "27027",
    "county_name": "Clay County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84027029",
    "fips": "27029",
    "county_name": "Clearwater County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84027031",
    "fips": "27031",
    "county_name": "Cook County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84027033",
    "fips": "27033",
    "county_name": "Cottonwood County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84027035",
    "fips": "27035",
    "county_name": "Crow Wing County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84027037",
    "fips": "27037",
    "county_name": "Dakota County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84027039",
    "fips": "27039",
    "county_name": "Dodge County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84027041",
    "fips": "27041",
    "county_name": "Douglas County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84027043",
    "fips": "27043",
    "county_name": "Faribault County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84027045",
    "fips": "27045",
    "county_name": "Fillmore County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84027047",
    "fips": "27047",
    "county_name": "Freeborn County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84027049",
    "fips": "27049",
    "county_name": "Goodhue County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84027051",
    "fips": "27051",
    "county_name": "Grant County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84027053",
    "fips": "27053",
    "county_name": "Hennepin County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84027055",
    "fips": "27055",
    "county_name": "Houston County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84027057",
    "fips": "27057",
    "county_name": "Hubbard County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84027059",
    "fips": "27059",
    "county_name": "Isanti County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84027061",
    "fips": "27061",
    "county_name": "Itasca County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84027063",
    "fips": "27063",
    "county_name": "Jackson County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84027065",
    "fips": "27065",
    "county_name": "Kanabec County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84027067",
    "fips": "27067",
    "county_name": "Kandiyohi County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84027069",
    "fips": "27069",
    "county_name": "Kittson County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84027071",
    "fips": "27071",
    "county_name": "Koochiching County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84027073",
    "fips": "27073",
    "county_name": "Lac qui Parle County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84027075",
    "fips": "27075",
    "county_name": "Lake County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84027077",
    "fips": "27077",
    "county_name": "Lake of the Woods County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84027079",
    "fips": "27079",
    "county_name": "Le Sueur County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84027081",
    "fips": "27081",
    "county_name": "Lincoln County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "081",
    "class_fips": "H1"
  },
  {
    "id": "84027083",
    "fips": "27083",
    "county_name": "Lyon County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84027085",
    "fips": "27085",
    "county_name": "McLeod County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "085",
    "class_fips": "H1"
  },
  {
    "id": "84027087",
    "fips": "27087",
    "county_name": "Mahnomen County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84027089",
    "fips": "27089",
    "county_name": "Marshall County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "089",
    "class_fips": "H1"
  },
  {
    "id": "84027091",
    "fips": "27091",
    "county_name": "Martin County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "091",
    "class_fips": "H1"
  },
  {
    "id": "84027093",
    "fips": "27093",
    "county_name": "Meeker County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "093",
    "class_fips": "H1"
  },
  {
    "id": "84027095",
    "fips": "27095",
    "county_name": "Mille Lacs County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "095",
    "class_fips": "H1"
  },
  {
    "id": "84027097",
    "fips": "27097",
    "county_name": "Morrison County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "097",
    "class_fips": "H1"
  },
  {
    "id": "84027099",
    "fips": "27099",
    "county_name": "Mower County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "099",
    "class_fips": "H1"
  },
  {
    "id": "84027101",
    "fips": "27101",
    "county_name": "Murray County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "101",
    "class_fips": "H1"
  },
  {
    "id": "84027103",
    "fips": "27103",
    "county_name": "Nicollet County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "103",
    "class_fips": "H1"
  },
  {
    "id": "84027105",
    "fips": "27105",
    "county_name": "Nobles County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "105",
    "class_fips": "H1"
  },
  {
    "id": "84027107",
    "fips": "27107",
    "county_name": "Norman County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "107",
    "class_fips": "H1"
  },
  {
    "id": "84027109",
    "fips": "27109",
    "county_name": "Olmsted County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "109",
    "class_fips": "H1"
  },
  {
    "id": "84027111",
    "fips": "27111",
    "county_name": "Otter Tail County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "111",
    "class_fips": "H1"
  },
  {
    "id": "84027113",
    "fips": "27113",
    "county_name": "Pennington County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "113",
    "class_fips": "H1"
  },
  {
    "id": "84027115",
    "fips": "27115",
    "county_name": "Pine County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "115",
    "class_fips": "H1"
  },
  {
    "id": "84027117",
    "fips": "27117",
    "county_name": "Pipestone County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "117",
    "class_fips": "H1"
  },
  {
    "id": "84027119",
    "fips": "27119",
    "county_name": "Polk County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "119",
    "class_fips": "H1"
  },
  {
    "id": "84027121",
    "fips": "27121",
    "county_name": "Pope County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "121",
    "class_fips": "H1"
  },
  {
    "id": "84027123",
    "fips": "27123",
    "county_name": "Ramsey County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "123",
    "class_fips": "H1"
  },
  {
    "id": "84027125",
    "fips": "27125",
    "county_name": "Red Lake County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "125",
    "class_fips": "H1"
  },
  {
    "id": "84027127",
    "fips": "27127",
    "county_name": "Redwood County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "127",
    "class_fips": "H1"
  },
  {
    "id": "84027129",
    "fips": "27129",
    "county_name": "Renville County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "129",
    "class_fips": "H1"
  },
  {
    "id": "84027131",
    "fips": "27131",
    "county_name": "Rice County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "131",
    "class_fips": "H1"
  },
  {
    "id": "84027133",
    "fips": "27133",
    "county_name": "Rock County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "133",
    "class_fips": "H1"
  },
  {
    "id": "84027135",
    "fips": "27135",
    "county_name": "Roseau County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "135",
    "class_fips": "H1"
  },
  {
    "id": "84027137",
    "fips": "27137",
    "county_name": "St. Louis County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "137",
    "class_fips": "H1"
  },
  {
    "id": "84027139",
    "fips": "27139",
    "county_name": "Scott County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "139",
    "class_fips": "H1"
  },
  {
    "id": "84027141",
    "fips": "27141",
    "county_name": "Sherburne County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "141",
    "class_fips": "H1"
  },
  {
    "id": "84027143",
    "fips": "27143",
    "county_name": "Sibley County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "143",
    "class_fips": "H1"
  },
  {
    "id": "84027145",
    "fips": "27145",
    "county_name": "Stearns County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "145",
    "class_fips": "H1"
  },
  {
    "id": "84027147",
    "fips": "27147",
    "county_name": "Steele County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "147",
    "class_fips": "H1"
  },
  {
    "id": "84027149",
    "fips": "27149",
    "county_name": "Stevens County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "149",
    "class_fips": "H1"
  },
  {
    "id": "84027151",
    "fips": "27151",
    "county_name": "Swift County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "151",
    "class_fips": "H1"
  },
  {
    "id": "84027153",
    "fips": "27153",
    "county_name": "Todd County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "153",
    "class_fips": "H1"
  },
  {
    "id": "84027155",
    "fips": "27155",
    "county_name": "Traverse County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "155",
    "class_fips": "H1"
  },
  {
    "id": "84027157",
    "fips": "27157",
    "county_name": "Wabasha County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "157",
    "class_fips": "H1"
  },
  {
    "id": "84027159",
    "fips": "27159",
    "county_name": "Wadena County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "159",
    "class_fips": "H1"
  },
  {
    "id": "84027161",
    "fips": "27161",
    "county_name": "Waseca County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "161",
    "class_fips": "H1"
  },
  {
    "id": "84027163",
    "fips": "27163",
    "county_name": "Washington County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "163",
    "class_fips": "H1"
  },
  {
    "id": "84027165",
    "fips": "27165",
    "county_name": "Watonwan County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "165",
    "class_fips": "H1"
  },
  {
    "id": "84027167",
    "fips": "27167",
    "county_name": "Wilkin County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "167",
    "class_fips": "H1"
  },
  {
    "id": "84027169",
    "fips": "27169",
    "county_name": "Winona County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "169",
    "class_fips": "H1"
  },
  {
    "id": "84027171",
    "fips": "27171",
    "county_name": "Wright County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "171",
    "class_fips": "H1"
  },
  {
    "id": "84027173",
    "fips": "27173",
    "county_name": "Yellow Medicine County",
    "state_code": "MN",
    "state_fips": "27",
    "county_fips": "173",
    "class_fips": "H1"
  },
  {
    "id": "84028001",
    "fips": "28001",
    "county_name": "Adams County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84028003",
    "fips": "28003",
    "county_name": "Alcorn County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84028005",
    "fips": "28005",
    "county_name": "Amite County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84028007",
    "fips": "28007",
    "county_name": "Attala County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84028009",
    "fips": "28009",
    "county_name": "Benton County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84028011",
    "fips": "28011",
    "county_name": "Bolivar County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84028013",
    "fips": "28013",
    "county_name": "Calhoun County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84028015",
    "fips": "28015",
    "county_name": "Carroll County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84028017",
    "fips": "28017",
    "county_name": "Chickasaw County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84028019",
    "fips": "28019",
    "county_name": "Choctaw County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84028021",
    "fips": "28021",
    "county_name": "Claiborne County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84028023",
    "fips": "28023",
    "county_name": "Clarke County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84028025",
    "fips": "28025",
    "county_name": "Clay County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84028027",
    "fips": "28027",
    "county_name": "Coahoma County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84028029",
    "fips": "28029",
    "county_name": "Copiah County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84028031",
    "fips": "28031",
    "county_name": "Covington County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84028033",
    "fips": "28033",
    "county_name": "DeSoto County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84028035",
    "fips": "28035",
    "county_name": "Forrest County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84028037",
    "fips": "28037",
    "county_name": "Franklin County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84028039",
    "fips": "28039",
    "county_name": "George County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84028041",
    "fips": "28041",
    "county_name": "Greene County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84028043",
    "fips": "28043",
    "county_name": "Grenada County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84028045",
    "fips": "28045",
    "county_name": "Hancock County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84028047",
    "fips": "28047",
    "county_name": "Harrison County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84028049",
    "fips": "28049",
    "county_name": "Hinds County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84028051",
    "fips": "28051",
    "county_name": "Holmes County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84028053",
    "fips": "28053",
    "county_name": "Humphreys County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84028055",
    "fips": "28055",
    "county_name": "Issaquena County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84028057",
    "fips": "28057",
    "county_name": "Itawamba County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84028059",
    "fips": "28059",
    "county_name": "Jackson County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84028061",
    "fips": "28061",
    "county_name": "Jasper County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84028063",
    "fips": "28063",
    "county_name": "Jefferson County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84028065",
    "fips": "28065",
    "county_name": "Jefferson Davis County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84028067",
    "fips": "28067",
    "county_name": "Jones County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84028069",
    "fips": "28069",
    "county_name": "Kemper County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84028071",
    "fips": "28071",
    "county_name": "Lafayette County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84028073",
    "fips": "28073",
    "county_name": "Lamar County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84028075",
    "fips": "28075",
    "county_name": "Lauderdale County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84028077",
    "fips": "28077",
    "county_name": "Lawrence County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84028079",
    "fips": "28079",
    "county_name": "Leake County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84028081",
    "fips": "28081",
    "county_name": "Lee County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "081",
    "class_fips": "H1"
  },
  {
    "id": "84028083",
    "fips": "28083",
    "county_name": "Leflore County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84028085",
    "fips": "28085",
    "county_name": "Lincoln County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "085",
    "class_fips": "H1"
  },
  {
    "id": "84028087",
    "fips": "28087",
    "county_name": "Lowndes County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84028089",
    "fips": "28089",
    "county_name": "Madison County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "089",
    "class_fips": "H1"
  },
  {
    "id": "84028091",
    "fips": "28091",
    "county_name": "Marion County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "091",
    "class_fips": "H1"
  },
  {
    "id": "84028093",
    "fips": "28093",
    "county_name": "Marshall County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "093",
    "class_fips": "H1"
  },
  {
    "id": "84028095",
    "fips": "28095",
    "county_name": "Monroe County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "095",
    "class_fips": "H1"
  },
  {
    "id": "84028097",
    "fips": "28097",
    "county_name": "Montgomery County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "097",
    "class_fips": "H1"
  },
  {
    "id": "84028099",
    "fips": "28099",
    "county_name": "Neshoba County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "099",
    "class_fips": "H1"
  },
  {
    "id": "84028101",
    "fips": "28101",
    "county_name": "Newton County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "101",
    "class_fips": "H1"
  },
  {
    "id": "84028103",
    "fips": "28103",
    "county_name": "Noxubee County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "103",
    "class_fips": "H1"
  },
  {
    "id": "84028105",
    "fips": "28105",
    "county_name": "Oktibbeha County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "105",
    "class_fips": "H1"
  },
  {
    "id": "84028107",
    "fips": "28107",
    "county_name": "Panola County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "107",
    "class_fips": "H1"
  },
  {
    "id": "84028109",
    "fips": "28109",
    "county_name": "Pearl River County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "109",
    "class_fips": "H1"
  },
  {
    "id": "84028111",
    "fips": "28111",
    "county_name": "Perry County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "111",
    "class_fips": "H1"
  },
  {
    "id": "84028113",
    "fips": "28113",
    "county_name": "Pike County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "113",
    "class_fips": "H1"
  },
  {
    "id": "84028115",
    "fips": "28115",
    "county_name": "Pontotoc County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "115",
    "class_fips": "H1"
  },
  {
    "id": "84028117",
    "fips": "28117",
    "county_name": "Prentiss County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "117",
    "class_fips": "H1"
  },
  {
    "id": "84028119",
    "fips": "28119",
    "county_name": "Quitman County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "119",
    "class_fips": "H1"
  },
  {
    "id": "84028121",
    "fips": "28121",
    "county_name": "Rankin County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "121",
    "class_fips": "H1"
  },
  {
    "id": "84028123",
    "fips": "28123",
    "county_name": "Scott County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "123",
    "class_fips": "H1"
  },
  {
    "id": "84028125",
    "fips": "28125",
    "county_name": "Sharkey County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "125",
    "class_fips": "H1"
  },
  {
    "id": "84028127",
    "fips": "28127",
    "county_name": "Simpson County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "127",
    "class_fips": "H1"
  },
  {
    "id": "84028129",
    "fips": "28129",
    "county_name": "Smith County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "129",
    "class_fips": "H1"
  },
  {
    "id": "84028131",
    "fips": "28131",
    "county_name": "Stone County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "131",
    "class_fips": "H1"
  },
  {
    "id": "84028133",
    "fips": "28133",
    "county_name": "Sunflower County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "133",
    "class_fips": "H1"
  },
  {
    "id": "84028135",
    "fips": "28135",
    "county_name": "Tallahatchie County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "135",
    "class_fips": "H1"
  },
  {
    "id": "84028137",
    "fips": "28137",
    "county_name": "Tate County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "137",
    "class_fips": "H1"
  },
  {
    "id": "84028139",
    "fips": "28139",
    "county_name": "Tippah County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "139",
    "class_fips": "H1"
  },
  {
    "id": "84028141",
    "fips": "28141",
    "county_name": "Tishomingo County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "141",
    "class_fips": "H1"
  },
  {
    "id": "84028143",
    "fips": "28143",
    "county_name": "Tunica County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "143",
    "class_fips": "H1"
  },
  {
    "id": "84028145",
    "fips": "28145",
    "county_name": "Union County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "145",
    "class_fips": "H1"
  },
  {
    "id": "84028147",
    "fips": "28147",
    "county_name": "Walthall County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "147",
    "class_fips": "H1"
  },
  {
    "id": "84028149",
    "fips": "28149",
    "county_name": "Warren County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "149",
    "class_fips": "H1"
  },
  {
    "id": "84028151",
    "fips": "28151",
    "county_name": "Washington County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "151",
    "class_fips": "H1"
  },
  {
    "id": "84028153",
    "fips": "28153",
    "county_name": "Wayne County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "153",
    "class_fips": "H1"
  },
  {
    "id": "84028155",
    "fips": "28155",
    "county_name": "Webster County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "155",
    "class_fips": "H1"
  },
  {
    "id": "84028157",
    "fips": "28157",
    "county_name": "Wilkinson County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "157",
    "class_fips": "H1"
  },
  {
    "id": "84028159",
    "fips": "28159",
    "county_name": "Winston County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "159",
    "class_fips": "H1"
  },
  {
    "id": "84028161",
    "fips": "28161",
    "county_name": "Yalobusha County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "161",
    "class_fips": "H1"
  },
  {
    "id": "84028163",
    "fips": "28163",
    "county_name": "Yazoo County",
    "state_code": "MS",
    "state_fips": "28",
    "county_fips": "163",
    "class_fips": "H1"
  },
  {
    "id": "84029001",
    "fips": "29001",
    "county_name": "Adair County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84029003",
    "fips": "29003",
    "county_name": "Andrew County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84029005",
    "fips": "29005",
    "county_name": "Atchison County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84029007",
    "fips": "29007",
    "county_name": "Audrain County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84029009",
    "fips": "29009",
    "county_name": "Barry County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84029011",
    "fips": "29011",
    "county_name": "Barton County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84029013",
    "fips": "29013",
    "county_name": "Bates County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84029015",
    "fips": "29015",
    "county_name": "Benton County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84029017",
    "fips": "29017",
    "county_name": "Bollinger County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84029019",
    "fips": "29019",
    "county_name": "Boone County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84029021",
    "fips": "29021",
    "county_name": "Buchanan County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84029023",
    "fips": "29023",
    "county_name": "Butler County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84029025",
    "fips": "29025",
    "county_name": "Caldwell County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84029027",
    "fips": "29027",
    "county_name": "Callaway County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84029029",
    "fips": "29029",
    "county_name": "Camden County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84029031",
    "fips": "29031",
    "county_name": "Cape Girardeau County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84029033",
    "fips": "29033",
    "county_name": "Carroll County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84029035",
    "fips": "29035",
    "county_name": "Carter County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84029037",
    "fips": "29037",
    "county_name": "Cass County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84029039",
    "fips": "29039",
    "county_name": "Cedar County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84029041",
    "fips": "29041",
    "county_name": "Chariton County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84029043",
    "fips": "29043",
    "county_name": "Christian County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84029045",
    "fips": "29045",
    "county_name": "Clark County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84029047",
    "fips": "29047",
    "county_name": "Clay County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84029049",
    "fips": "29049",
    "county_name": "Clinton County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84029051",
    "fips": "29051",
    "county_name": "Cole County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84029053",
    "fips": "29053",
    "county_name": "Cooper County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84029055",
    "fips": "29055",
    "county_name": "Crawford County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84029057",
    "fips": "29057",
    "county_name": "Dade County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84029059",
    "fips": "29059",
    "county_name": "Dallas County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84029061",
    "fips": "29061",
    "county_name": "Daviess County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84029063",
    "fips": "29063",
    "county_name": "DeKalb County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84029065",
    "fips": "29065",
    "county_name": "Dent County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84029067",
    "fips": "29067",
    "county_name": "Douglas County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84029069",
    "fips": "29069",
    "county_name": "Dunklin County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84029071",
    "fips": "29071",
    "county_name": "Franklin County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84029073",
    "fips": "29073",
    "county_name": "Gasconade County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84029075",
    "fips": "29075",
    "county_name": "Gentry County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84029077",
    "fips": "29077",
    "county_name": "Greene County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84029079",
    "fips": "29079",
    "county_name": "Grundy County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84029081",
    "fips": "29081",
    "county_name": "Harrison County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "081",
    "class_fips": "H1"
  },
  {
    "id": "84029083",
    "fips": "29083",
    "county_name": "Henry County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84029085",
    "fips": "29085",
    "county_name": "Hickory County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "085",
    "class_fips": "H1"
  },
  {
    "id": "84029087",
    "fips": "29087",
    "county_name": "Holt County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84029089",
    "fips": "29089",
    "county_name": "Howard County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "089",
    "class_fips": "H1"
  },
  {
    "id": "84029091",
    "fips": "29091",
    "county_name": "Howell County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "091",
    "class_fips": "H1"
  },
  {
    "id": "84029093",
    "fips": "29093",
    "county_name": "Iron County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "093",
    "class_fips": "H1"
  },
  {
    "id": "84029095",
    "fips": "29095",
    "county_name": "Jackson County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "095",
    "class_fips": "H1"
  },
  {
    "id": "84029097",
    "fips": "29097",
    "county_name": "Jasper County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "097",
    "class_fips": "H1"
  },
  {
    "id": "84029099",
    "fips": "29099",
    "county_name": "Jefferson County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "099",
    "class_fips": "H1"
  },
  {
    "id": "84029101",
    "fips": "29101",
    "county_name": "Johnson County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "101",
    "class_fips": "H1"
  },
  {
    "id": "84029103",
    "fips": "29103",
    "county_name": "Knox County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "103",
    "class_fips": "H1"
  },
  {
    "id": "84029105",
    "fips": "29105",
    "county_name": "Laclede County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "105",
    "class_fips": "H1"
  },
  {
    "id": "84029107",
    "fips": "29107",
    "county_name": "Lafayette County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "107",
    "class_fips": "H1"
  },
  {
    "id": "84029109",
    "fips": "29109",
    "county_name": "Lawrence County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "109",
    "class_fips": "H1"
  },
  {
    "id": "84029111",
    "fips": "29111",
    "county_name": "Lewis County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "111",
    "class_fips": "H1"
  },
  {
    "id": "84029113",
    "fips": "29113",
    "county_name": "Lincoln County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "113",
    "class_fips": "H1"
  },
  {
    "id": "84029115",
    "fips": "29115",
    "county_name": "Linn County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "115",
    "class_fips": "H1"
  },
  {
    "id": "84029117",
    "fips": "29117",
    "county_name": "Livingston County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "117",
    "class_fips": "H1"
  },
  {
    "id": "84029119",
    "fips": "29119",
    "county_name": "McDonald County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "119",
    "class_fips": "H1"
  },
  {
    "id": "84029121",
    "fips": "29121",
    "county_name": "Macon County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "121",
    "class_fips": "H1"
  },
  {
    "id": "84029123",
    "fips": "29123",
    "county_name": "Madison County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "123",
    "class_fips": "H1"
  },
  {
    "id": "84029125",
    "fips": "29125",
    "county_name": "Maries County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "125",
    "class_fips": "H1"
  },
  {
    "id": "84029127",
    "fips": "29127",
    "county_name": "Marion County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "127",
    "class_fips": "H1"
  },
  {
    "id": "84029129",
    "fips": "29129",
    "county_name": "Mercer County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "129",
    "class_fips": "H1"
  },
  {
    "id": "84029131",
    "fips": "29131",
    "county_name": "Miller County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "131",
    "class_fips": "H1"
  },
  {
    "id": "84029133",
    "fips": "29133",
    "county_name": "Mississippi County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "133",
    "class_fips": "H1"
  },
  {
    "id": "84029135",
    "fips": "29135",
    "county_name": "Moniteau County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "135",
    "class_fips": "H1"
  },
  {
    "id": "84029137",
    "fips": "29137",
    "county_name": "Monroe County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "137",
    "class_fips": "H1"
  },
  {
    "id": "84029139",
    "fips": "29139",
    "county_name": "Montgomery County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "139",
    "class_fips": "H1"
  },
  {
    "id": "84029141",
    "fips": "29141",
    "county_name": "Morgan County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "141",
    "class_fips": "H1"
  },
  {
    "id": "84029143",
    "fips": "29143",
    "county_name": "New Madrid County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "143",
    "class_fips": "H1"
  },
  {
    "id": "84029145",
    "fips": "29145",
    "county_name": "Newton County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "145",
    "class_fips": "H1"
  },
  {
    "id": "84029147",
    "fips": "29147",
    "county_name": "Nodaway County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "147",
    "class_fips": "H1"
  },
  {
    "id": "84029149",
    "fips": "29149",
    "county_name": "Oregon County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "149",
    "class_fips": "H1"
  },
  {
    "id": "84029151",
    "fips": "29151",
    "county_name": "Osage County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "151",
    "class_fips": "H1"
  },
  {
    "id": "84029153",
    "fips": "29153",
    "county_name": "Ozark County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "153",
    "class_fips": "H1"
  },
  {
    "id": "84029155",
    "fips": "29155",
    "county_name": "Pemiscot County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "155",
    "class_fips": "H1"
  },
  {
    "id": "84029157",
    "fips": "29157",
    "county_name": "Perry County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "157",
    "class_fips": "H1"
  },
  {
    "id": "84029159",
    "fips": "29159",
    "county_name": "Pettis County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "159",
    "class_fips": "H1"
  },
  {
    "id": "84029161",
    "fips": "29161",
    "county_name": "Phelps County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "161",
    "class_fips": "H1"
  },
  {
    "id": "84029163",
    "fips": "29163",
    "county_name": "Pike County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "163",
    "class_fips": "H1"
  },
  {
    "id": "84029165",
    "fips": "29165",
    "county_name": "Platte County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "165",
    "class_fips": "H1"
  },
  {
    "id": "84029167",
    "fips": "29167",
    "county_name": "Polk County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "167",
    "class_fips": "H1"
  },
  {
    "id": "84029169",
    "fips": "29169",
    "county_name": "Pulaski County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "169",
    "class_fips": "H1"
  },
  {
    "id": "84029171",
    "fips": "29171",
    "county_name": "Putnam County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "171",
    "class_fips": "H1"
  },
  {
    "id": "84029173",
    "fips": "29173",
    "county_name": "Ralls County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "173",
    "class_fips": "H1"
  },
  {
    "id": "84029175",
    "fips": "29175",
    "county_name": "Randolph County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "175",
    "class_fips": "H1"
  },
  {
    "id": "84029177",
    "fips": "29177",
    "county_name": "Ray County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "177",
    "class_fips": "H1"
  },
  {
    "id": "84029179",
    "fips": "29179",
    "county_name": "Reynolds County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "179",
    "class_fips": "H1"
  },
  {
    "id": "84029181",
    "fips": "29181",
    "county_name": "Ripley County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "181",
    "class_fips": "H1"
  },
  {
    "id": "84029183",
    "fips": "29183",
    "county_name": "St. Charles County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "183",
    "class_fips": "H1"
  },
  {
    "id": "84029185",
    "fips": "29185",
    "county_name": "St. Clair County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "185",
    "class_fips": "H1"
  },
  {
    "id": "84029186",
    "fips": "29186",
    "county_name": "Ste. Genevieve County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "186",
    "class_fips": "H1"
  },
  {
    "id": "84029187",
    "fips": "29187",
    "county_name": "St. Francois County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "187",
    "class_fips": "H1"
  },
  {
    "id": "84029189",
    "fips": "29189",
    "county_name": "St. Louis County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "189",
    "class_fips": "H1"
  },
  {
    "id": "84029195",
    "fips": "29195",
    "county_name": "Saline County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "195",
    "class_fips": "H1"
  },
  {
    "id": "84029197",
    "fips": "29197",
    "county_name": "Schuyler County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "197",
    "class_fips": "H1"
  },
  {
    "id": "84029199",
    "fips": "29199",
    "county_name": "Scotland County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "199",
    "class_fips": "H1"
  },
  {
    "id": "84029201",
    "fips": "29201",
    "county_name": "Scott County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "201",
    "class_fips": "H1"
  },
  {
    "id": "84029203",
    "fips": "29203",
    "county_name": "Shannon County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "203",
    "class_fips": "H1"
  },
  {
    "id": "84029205",
    "fips": "29205",
    "county_name": "Shelby County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "205",
    "class_fips": "H1"
  },
  {
    "id": "84029207",
    "fips": "29207",
    "county_name": "Stoddard County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "207",
    "class_fips": "H1"
  },
  {
    "id": "84029209",
    "fips": "29209",
    "county_name": "Stone County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "209",
    "class_fips": "H1"
  },
  {
    "id": "84029211",
    "fips": "29211",
    "county_name": "Sullivan County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "211",
    "class_fips": "H1"
  },
  {
    "id": "84029213",
    "fips": "29213",
    "county_name": "Taney County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "213",
    "class_fips": "H1"
  },
  {
    "id": "84029215",
    "fips": "29215",
    "county_name": "Texas County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "215",
    "class_fips": "H1"
  },
  {
    "id": "84029217",
    "fips": "29217",
    "county_name": "Vernon County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "217",
    "class_fips": "H1"
  },
  {
    "id": "84029219",
    "fips": "29219",
    "county_name": "Warren County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "219",
    "class_fips": "H1"
  },
  {
    "id": "84029221",
    "fips": "29221",
    "county_name": "Washington County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "221",
    "class_fips": "H1"
  },
  {
    "id": "84029223",
    "fips": "29223",
    "county_name": "Wayne County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "223",
    "class_fips": "H1"
  },
  {
    "id": "84029225",
    "fips": "29225",
    "county_name": "Webster County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "225",
    "class_fips": "H1"
  },
  {
    "id": "84029227",
    "fips": "29227",
    "county_name": "Worth County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "227",
    "class_fips": "H1"
  },
  {
    "id": "84029229",
    "fips": "29229",
    "county_name": "Wright County",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "229",
    "class_fips": "H1"
  },
  {
    "id": "84029510",
    "fips": "29510",
    "county_name": "St. Louis city",
    "state_code": "MO",
    "state_fips": "29",
    "county_fips": "510",
    "class_fips": "C7"
  },
  {
    "id": "84030001",
    "fips": "30001",
    "county_name": "Beaverhead County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84030003",
    "fips": "30003",
    "county_name": "Big Horn County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84030005",
    "fips": "30005",
    "county_name": "Blaine County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84030007",
    "fips": "30007",
    "county_name": "Broadwater County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84030009",
    "fips": "30009",
    "county_name": "Carbon County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84030011",
    "fips": "30011",
    "county_name": "Carter County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84030013",
    "fips": "30013",
    "county_name": "Cascade County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84030015",
    "fips": "30015",
    "county_name": "Chouteau County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84030017",
    "fips": "30017",
    "county_name": "Custer County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84030019",
    "fips": "30019",
    "county_name": "Daniels County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84030021",
    "fips": "30021",
    "county_name": "Dawson County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84030023",
    "fips": "30023",
    "county_name": "Deer Lodge County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "023",
    "class_fips": "H6"
  },
  {
    "id": "84030025",
    "fips": "30025",
    "county_name": "Fallon County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84030027",
    "fips": "30027",
    "county_name": "Fergus County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84030029",
    "fips": "30029",
    "county_name": "Flathead County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84030031",
    "fips": "30031",
    "county_name": "Gallatin County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84030033",
    "fips": "30033",
    "county_name": "Garfield County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84030035",
    "fips": "30035",
    "county_name": "Glacier County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84030037",
    "fips": "30037",
    "county_name": "Golden Valley County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84030039",
    "fips": "30039",
    "county_name": "Granite County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84030041",
    "fips": "30041",
    "county_name": "Hill County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84030043",
    "fips": "30043",
    "county_name": "Jefferson County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84030045",
    "fips": "30045",
    "county_name": "Judith Basin County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84030047",
    "fips": "30047",
    "county_name": "Lake County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84030049",
    "fips": "30049",
    "county_name": "Lewis and Clark County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84030051",
    "fips": "30051",
    "county_name": "Liberty County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84030053",
    "fips": "30053",
    "county_name": "Lincoln County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84030055",
    "fips": "30055",
    "county_name": "McCone County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84030057",
    "fips": "30057",
    "county_name": "Madison County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84030059",
    "fips": "30059",
    "county_name": "Meagher County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84030061",
    "fips": "30061",
    "county_name": "Mineral County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84030063",
    "fips": "30063",
    "county_name": "Missoula County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84030065",
    "fips": "30065",
    "county_name": "Musselshell County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84030067",
    "fips": "30067",
    "county_name": "Park County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84030069",
    "fips": "30069",
    "county_name": "Petroleum County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84030071",
    "fips": "30071",
    "county_name": "Phillips County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84030073",
    "fips": "30073",
    "county_name": "Pondera County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84030075",
    "fips": "30075",
    "county_name": "Powder River County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84030077",
    "fips": "30077",
    "county_name": "Powell County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84030079",
    "fips": "30079",
    "county_name": "Prairie County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84030081",
    "fips": "30081",
    "county_name": "Ravalli County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "081",
    "class_fips": "H1"
  },
  {
    "id": "84030083",
    "fips": "30083",
    "county_name": "Richland County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84030085",
    "fips": "30085",
    "county_name": "Roosevelt County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "085",
    "class_fips": "H1"
  },
  {
    "id": "84030087",
    "fips": "30087",
    "county_name": "Rosebud County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84030089",
    "fips": "30089",
    "county_name": "Sanders County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "089",
    "class_fips": "H1"
  },
  {
    "id": "84030091",
    "fips": "30091",
    "county_name": "Sheridan County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "091",
    "class_fips": "H1"
  },
  {
    "id": "84030093",
    "fips": "30093",
    "county_name": "Silver Bow County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "093",
    "class_fips": "H6"
  },
  {
    "id": "84030095",
    "fips": "30095",
    "county_name": "Stillwater County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "095",
    "class_fips": "H1"
  },
  {
    "id": "84030097",
    "fips": "30097",
    "county_name": "Sweet Grass County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "097",
    "class_fips": "H1"
  },
  {
    "id": "84030099",
    "fips": "30099",
    "county_name": "Teton County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "099",
    "class_fips": "H1"
  },
  {
    "id": "84030101",
    "fips": "30101",
    "county_name": "Toole County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "101",
    "class_fips": "H1"
  },
  {
    "id": "84030103",
    "fips": "30103",
    "county_name": "Treasure County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "103",
    "class_fips": "H1"
  },
  {
    "id": "84030105",
    "fips": "30105",
    "county_name": "Valley County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "105",
    "class_fips": "H1"
  },
  {
    "id": "84030107",
    "fips": "30107",
    "county_name": "Wheatland County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "107",
    "class_fips": "H1"
  },
  {
    "id": "84030109",
    "fips": "30109",
    "county_name": "Wibaux County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "109",
    "class_fips": "H1"
  },
  {
    "id": "84030111",
    "fips": "30111",
    "county_name": "Yellowstone County",
    "state_code": "MT",
    "state_fips": "30",
    "county_fips": "111",
    "class_fips": "H1"
  },
  {
    "id": "84031001",
    "fips": "31001",
    "county_name": "Adams County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84031003",
    "fips": "31003",
    "county_name": "Antelope County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84031005",
    "fips": "31005",
    "county_name": "Arthur County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84031007",
    "fips": "31007",
    "county_name": "Banner County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84031009",
    "fips": "31009",
    "county_name": "Blaine County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84031011",
    "fips": "31011",
    "county_name": "Boone County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84031013",
    "fips": "31013",
    "county_name": "Box Butte County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84031015",
    "fips": "31015",
    "county_name": "Boyd County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84031017",
    "fips": "31017",
    "county_name": "Brown County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84031019",
    "fips": "31019",
    "county_name": "Buffalo County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84031021",
    "fips": "31021",
    "county_name": "Burt County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84031023",
    "fips": "31023",
    "county_name": "Butler County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84031025",
    "fips": "31025",
    "county_name": "Cass County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84031027",
    "fips": "31027",
    "county_name": "Cedar County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84031029",
    "fips": "31029",
    "county_name": "Chase County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84031031",
    "fips": "31031",
    "county_name": "Cherry County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84031033",
    "fips": "31033",
    "county_name": "Cheyenne County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84031035",
    "fips": "31035",
    "county_name": "Clay County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84031037",
    "fips": "31037",
    "county_name": "Colfax County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84031039",
    "fips": "31039",
    "county_name": "Cuming County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84031041",
    "fips": "31041",
    "county_name": "Custer County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84031043",
    "fips": "31043",
    "county_name": "Dakota County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84031045",
    "fips": "31045",
    "county_name": "Dawes County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84031047",
    "fips": "31047",
    "county_name": "Dawson County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84031049",
    "fips": "31049",
    "county_name": "Deuel County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84031051",
    "fips": "31051",
    "county_name": "Dixon County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84031053",
    "fips": "31053",
    "county_name": "Dodge County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84031055",
    "fips": "31055",
    "county_name": "Douglas County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84031057",
    "fips": "31057",
    "county_name": "Dundy County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84031059",
    "fips": "31059",
    "county_name": "Fillmore County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84031061",
    "fips": "31061",
    "county_name": "Franklin County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84031063",
    "fips": "31063",
    "county_name": "Frontier County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84031065",
    "fips": "31065",
    "county_name": "Furnas County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84031067",
    "fips": "31067",
    "county_name": "Gage County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84031069",
    "fips": "31069",
    "county_name": "Garden County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84031071",
    "fips": "31071",
    "county_name": "Garfield County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84031073",
    "fips": "31073",
    "county_name": "Gosper County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84031075",
    "fips": "31075",
    "county_name": "Grant County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84031077",
    "fips": "31077",
    "county_name": "Greeley County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84031079",
    "fips": "31079",
    "county_name": "Hall County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84031081",
    "fips": "31081",
    "county_name": "Hamilton County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "081",
    "class_fips": "H1"
  },
  {
    "id": "84031083",
    "fips": "31083",
    "county_name": "Harlan County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84031085",
    "fips": "31085",
    "county_name": "Hayes County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "085",
    "class_fips": "H1"
  },
  {
    "id": "84031087",
    "fips": "31087",
    "county_name": "Hitchcock County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84031089",
    "fips": "31089",
    "county_name": "Holt County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "089",
    "class_fips": "H1"
  },
  {
    "id": "84031091",
    "fips": "31091",
    "county_name": "Hooker County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "091",
    "class_fips": "H1"
  },
  {
    "id": "84031093",
    "fips": "31093",
    "county_name": "Howard County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "093",
    "class_fips": "H1"
  },
  {
    "id": "84031095",
    "fips": "31095",
    "county_name": "Jefferson County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "095",
    "class_fips": "H1"
  },
  {
    "id": "84031097",
    "fips": "31097",
    "county_name": "Johnson County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "097",
    "class_fips": "H1"
  },
  {
    "id": "84031099",
    "fips": "31099",
    "county_name": "Kearney County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "099",
    "class_fips": "H1"
  },
  {
    "id": "84031101",
    "fips": "31101",
    "county_name": "Keith County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "101",
    "class_fips": "H1"
  },
  {
    "id": "84031103",
    "fips": "31103",
    "county_name": "Keya Paha County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "103",
    "class_fips": "H1"
  },
  {
    "id": "84031105",
    "fips": "31105",
    "county_name": "Kimball County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "105",
    "class_fips": "H1"
  },
  {
    "id": "84031107",
    "fips": "31107",
    "county_name": "Knox County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "107",
    "class_fips": "H1"
  },
  {
    "id": "84031109",
    "fips": "31109",
    "county_name": "Lancaster County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "109",
    "class_fips": "H1"
  },
  {
    "id": "84031111",
    "fips": "31111",
    "county_name": "Lincoln County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "111",
    "class_fips": "H1"
  },
  {
    "id": "84031113",
    "fips": "31113",
    "county_name": "Logan County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "113",
    "class_fips": "H1"
  },
  {
    "id": "84031115",
    "fips": "31115",
    "county_name": "Loup County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "115",
    "class_fips": "H1"
  },
  {
    "id": "84031117",
    "fips": "31117",
    "county_name": "McPherson County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "117",
    "class_fips": "H1"
  },
  {
    "id": "84031119",
    "fips": "31119",
    "county_name": "Madison County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "119",
    "class_fips": "H1"
  },
  {
    "id": "84031121",
    "fips": "31121",
    "county_name": "Merrick County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "121",
    "class_fips": "H1"
  },
  {
    "id": "84031123",
    "fips": "31123",
    "county_name": "Morrill County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "123",
    "class_fips": "H1"
  },
  {
    "id": "84031125",
    "fips": "31125",
    "county_name": "Nance County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "125",
    "class_fips": "H1"
  },
  {
    "id": "84031127",
    "fips": "31127",
    "county_name": "Nemaha County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "127",
    "class_fips": "H1"
  },
  {
    "id": "84031129",
    "fips": "31129",
    "county_name": "Nuckolls County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "129",
    "class_fips": "H1"
  },
  {
    "id": "84031131",
    "fips": "31131",
    "county_name": "Otoe County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "131",
    "class_fips": "H1"
  },
  {
    "id": "84031133",
    "fips": "31133",
    "county_name": "Pawnee County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "133",
    "class_fips": "H1"
  },
  {
    "id": "84031135",
    "fips": "31135",
    "county_name": "Perkins County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "135",
    "class_fips": "H1"
  },
  {
    "id": "84031137",
    "fips": "31137",
    "county_name": "Phelps County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "137",
    "class_fips": "H1"
  },
  {
    "id": "84031139",
    "fips": "31139",
    "county_name": "Pierce County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "139",
    "class_fips": "H1"
  },
  {
    "id": "84031141",
    "fips": "31141",
    "county_name": "Platte County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "141",
    "class_fips": "H1"
  },
  {
    "id": "84031143",
    "fips": "31143",
    "county_name": "Polk County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "143",
    "class_fips": "H1"
  },
  {
    "id": "84031145",
    "fips": "31145",
    "county_name": "Red Willow County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "145",
    "class_fips": "H1"
  },
  {
    "id": "84031147",
    "fips": "31147",
    "county_name": "Richardson County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "147",
    "class_fips": "H1"
  },
  {
    "id": "84031149",
    "fips": "31149",
    "county_name": "Rock County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "149",
    "class_fips": "H1"
  },
  {
    "id": "84031151",
    "fips": "31151",
    "county_name": "Saline County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "151",
    "class_fips": "H1"
  },
  {
    "id": "84031153",
    "fips": "31153",
    "county_name": "Sarpy County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "153",
    "class_fips": "H1"
  },
  {
    "id": "84031155",
    "fips": "31155",
    "county_name": "Saunders County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "155",
    "class_fips": "H1"
  },
  {
    "id": "84031157",
    "fips": "31157",
    "county_name": "Scotts Bluff County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "157",
    "class_fips": "H1"
  },
  {
    "id": "84031159",
    "fips": "31159",
    "county_name": "Seward County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "159",
    "class_fips": "H1"
  },
  {
    "id": "84031161",
    "fips": "31161",
    "county_name": "Sheridan County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "161",
    "class_fips": "H1"
  },
  {
    "id": "84031163",
    "fips": "31163",
    "county_name": "Sherman County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "163",
    "class_fips": "H1"
  },
  {
    "id": "84031165",
    "fips": "31165",
    "county_name": "Sioux County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "165",
    "class_fips": "H1"
  },
  {
    "id": "84031167",
    "fips": "31167",
    "county_name": "Stanton County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "167",
    "class_fips": "H1"
  },
  {
    "id": "84031169",
    "fips": "31169",
    "county_name": "Thayer County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "169",
    "class_fips": "H1"
  },
  {
    "id": "84031171",
    "fips": "31171",
    "county_name": "Thomas County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "171",
    "class_fips": "H1"
  },
  {
    "id": "84031173",
    "fips": "31173",
    "county_name": "Thurston County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "173",
    "class_fips": "H1"
  },
  {
    "id": "84031175",
    "fips": "31175",
    "county_name": "Valley County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "175",
    "class_fips": "H1"
  },
  {
    "id": "84031177",
    "fips": "31177",
    "county_name": "Washington County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "177",
    "class_fips": "H1"
  },
  {
    "id": "84031179",
    "fips": "31179",
    "county_name": "Wayne County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "179",
    "class_fips": "H1"
  },
  {
    "id": "84031181",
    "fips": "31181",
    "county_name": "Webster County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "181",
    "class_fips": "H1"
  },
  {
    "id": "84031183",
    "fips": "31183",
    "county_name": "Wheeler County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "183",
    "class_fips": "H1"
  },
  {
    "id": "84031185",
    "fips": "31185",
    "county_name": "York County",
    "state_code": "NE",
    "state_fips": "31",
    "county_fips": "185",
    "class_fips": "H1"
  },
  {
    "id": "84032001",
    "fips": "32001",
    "county_name": "Churchill County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84032003",
    "fips": "32003",
    "county_name": "Clark County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84032005",
    "fips": "32005",
    "county_name": "Douglas County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84032007",
    "fips": "32007",
    "county_name": "Elko County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84032009",
    "fips": "32009",
    "county_name": "Esmeralda County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84032011",
    "fips": "32011",
    "county_name": "Eureka County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84032013",
    "fips": "32013",
    "county_name": "Humboldt County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84032015",
    "fips": "32015",
    "county_name": "Lander County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84032017",
    "fips": "32017",
    "county_name": "Lincoln County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84032019",
    "fips": "32019",
    "county_name": "Lyon County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84032021",
    "fips": "32021",
    "county_name": "Mineral County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84032023",
    "fips": "32023",
    "county_name": "Nye County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84032027",
    "fips": "32027",
    "county_name": "Pershing County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84032029",
    "fips": "32029",
    "county_name": "Storey County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84032031",
    "fips": "32031",
    "county_name": "Washoe County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84032033",
    "fips": "32033",
    "county_name": "White Pine County",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84032510",
    "fips": "32510",
    "county_name": "Carson City",
    "state_code": "NV",
    "state_fips": "32",
    "county_fips": "510",
    "class_fips": "C7"
  },
  {
    "id": "84033001",
    "fips": "33001",
    "county_name": "Belknap County",
    "state_code": "NH",
    "state_fips": "33",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84033003",
    "fips": "33003",
    "county_name": "Carroll County",
    "state_code": "NH",
    "state_fips": "33",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84033005",
    "fips": "33005",
    "county_name": "Cheshire County",
    "state_code": "NH",
    "state_fips": "33",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84033007",
    "fips": "33007",
    "county_name": "Coos County",
    "state_code": "NH",
    "state_fips": "33",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84033009",
    "fips": "33009",
    "county_name": "Grafton County",
    "state_code": "NH",
    "state_fips": "33",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84033011",
    "fips": "33011",
    "county_name": "Hillsborough County",
    "state_code": "NH",
    "state_fips": "33",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84033013",
    "fips": "33013",
    "county_name": "Merrimack County",
    "state_code": "NH",
    "state_fips": "33",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84033015",
    "fips": "33015",
    "county_name": "Rockingham County",
    "state_code": "NH",
    "state_fips": "33",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84033017",
    "fips": "33017",
    "county_name": "Strafford County",
    "state_code": "NH",
    "state_fips": "33",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84033019",
    "fips": "33019",
    "county_name": "Sullivan County",
    "state_code": "NH",
    "state_fips": "33",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84034001",
    "fips": "34001",
    "county_name": "Atlantic County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84034003",
    "fips": "34003",
    "county_name": "Bergen County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84034005",
    "fips": "34005",
    "county_name": "Burlington County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84034007",
    "fips": "34007",
    "county_name": "Camden County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84034009",
    "fips": "34009",
    "county_name": "Cape May County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84034011",
    "fips": "34011",
    "county_name": "Cumberland County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84034013",
    "fips": "34013",
    "county_name": "Essex County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84034015",
    "fips": "34015",
    "county_name": "Gloucester County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84034017",
    "fips": "34017",
    "county_name": "Hudson County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84034019",
    "fips": "34019",
    "county_name": "Hunterdon County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84034021",
    "fips": "34021",
    "county_name": "Mercer County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84034023",
    "fips": "34023",
    "county_name": "Middlesex County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84034025",
    "fips": "34025",
    "county_name": "Monmouth County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84034027",
    "fips": "34027",
    "county_name": "Morris County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84034029",
    "fips": "34029",
    "county_name": "Ocean County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84034031",
    "fips": "34031",
    "county_name": "Passaic County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84034033",
    "fips": "34033",
    "county_name": "Salem County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84034035",
    "fips": "34035",
    "county_name": "Somerset County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84034037",
    "fips": "34037",
    "county_name": "Sussex County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84034039",
    "fips": "34039",
    "county_name": "Union County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84034041",
    "fips": "34041",
    "county_name": "Warren County",
    "state_code": "NJ",
    "state_fips": "34",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84035001",
    "fips": "35001",
    "county_name": "Bernalillo County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84035003",
    "fips": "35003",
    "county_name": "Catron County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84035005",
    "fips": "35005",
    "county_name": "Chaves County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84035006",
    "fips": "35006",
    "county_name": "Cibola County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "006",
    "class_fips": "H1"
  },
  {
    "id": "84035007",
    "fips": "35007",
    "county_name": "Colfax County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84035009",
    "fips": "35009",
    "county_name": "Curry County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84035011",
    "fips": "35011",
    "county_name": "De Baca County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84035013",
    "fips": "35013",
    "county_name": "Dona Ana County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84035015",
    "fips": "35015",
    "county_name": "Eddy County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84035017",
    "fips": "35017",
    "county_name": "Grant County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84035019",
    "fips": "35019",
    "county_name": "Guadalupe County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84035021",
    "fips": "35021",
    "county_name": "Harding County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84035023",
    "fips": "35023",
    "county_name": "Hidalgo County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84035025",
    "fips": "35025",
    "county_name": "Lea County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84035027",
    "fips": "35027",
    "county_name": "Lincoln County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84035028",
    "fips": "35028",
    "county_name": "Los Alamos County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "028",
    "class_fips": "H1"
  },
  {
    "id": "84035029",
    "fips": "35029",
    "county_name": "Luna County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84035031",
    "fips": "35031",
    "county_name": "McKinley County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84035033",
    "fips": "35033",
    "county_name": "Mora County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84035035",
    "fips": "35035",
    "county_name": "Otero County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84035037",
    "fips": "35037",
    "county_name": "Quay County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84035039",
    "fips": "35039",
    "county_name": "Rio Arriba County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84035041",
    "fips": "35041",
    "county_name": "Roosevelt County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84035043",
    "fips": "35043",
    "county_name": "Sandoval County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84035045",
    "fips": "35045",
    "county_name": "San Juan County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84035047",
    "fips": "35047",
    "county_name": "San Miguel County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84035049",
    "fips": "35049",
    "county_name": "Santa Fe County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84035051",
    "fips": "35051",
    "county_name": "Sierra County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84035053",
    "fips": "35053",
    "county_name": "Socorro County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84035055",
    "fips": "35055",
    "county_name": "Taos County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84035057",
    "fips": "35057",
    "county_name": "Torrance County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84035059",
    "fips": "35059",
    "county_name": "Union County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84035061",
    "fips": "35061",
    "county_name": "Valencia County",
    "state_code": "NM",
    "state_fips": "35",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84036001",
    "fips": "36001",
    "county_name": "Albany County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84036003",
    "fips": "36003",
    "county_name": "Allegany County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84036005",
    "fips": "36005",
    "county_name": "Bronx County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "005",
    "class_fips": "H6"
  },
  {
    "id": "84036007",
    "fips": "36007",
    "county_name": "Broome County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84036009",
    "fips": "36009",
    "county_name": "Cattaraugus County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84036011",
    "fips": "36011",
    "county_name": "Cayuga County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84036013",
    "fips": "36013",
    "county_name": "Chautauqua County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84036015",
    "fips": "36015",
    "county_name": "Chemung County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84036017",
    "fips": "36017",
    "county_name": "Chenango County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84036019",
    "fips": "36019",
    "county_name": "Clinton County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84036021",
    "fips": "36021",
    "county_name": "Columbia County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84036023",
    "fips": "36023",
    "county_name": "Cortland County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84036025",
    "fips": "36025",
    "county_name": "Delaware County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84036027",
    "fips": "36027",
    "county_name": "Dutchess County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84036029",
    "fips": "36029",
    "county_name": "Erie County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84036031",
    "fips": "36031",
    "county_name": "Essex County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84036033",
    "fips": "36033",
    "county_name": "Franklin County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84036035",
    "fips": "36035",
    "county_name": "Fulton County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84036037",
    "fips": "36037",
    "county_name": "Genesee County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84036039",
    "fips": "36039",
    "county_name": "Greene County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84036041",
    "fips": "36041",
    "county_name": "Hamilton County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84036043",
    "fips": "36043",
    "county_name": "Herkimer County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84036045",
    "fips": "36045",
    "county_name": "Jefferson County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84036047",
    "fips": "36047",
    "county_name": "Kings County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "047",
    "class_fips": "H6"
  },
  {
    "id": "84036049",
    "fips": "36049",
    "county_name": "Lewis County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84036051",
    "fips": "36051",
    "county_name": "Livingston County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84036053",
    "fips": "36053",
    "county_name": "Madison County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84036055",
    "fips": "36055",
    "county_name": "Monroe County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84036057",
    "fips": "36057",
    "county_name": "Montgomery County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84036059",
    "fips": "36059",
    "county_name": "Nassau County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84036061",
    "fips": "36061",
    "county_name": "New York County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "061",
    "class_fips": "H6"
  },
  {
    "id": "84036063",
    "fips": "36063",
    "county_name": "Niagara County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84036065",
    "fips": "36065",
    "county_name": "Oneida County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84036067",
    "fips": "36067",
    "county_name": "Onondaga County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84036069",
    "fips": "36069",
    "county_name": "Ontario County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84036071",
    "fips": "36071",
    "county_name": "Orange County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84036073",
    "fips": "36073",
    "county_name": "Orleans County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84036075",
    "fips": "36075",
    "county_name": "Oswego County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84036077",
    "fips": "36077",
    "county_name": "Otsego County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84036079",
    "fips": "36079",
    "county_name": "Putnam County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84036081",
    "fips": "36081",
    "county_name": "Queens County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "081",
    "class_fips": "H6"
  },
  {
    "id": "84036083",
    "fips": "36083",
    "county_name": "Rensselaer County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84036085",
    "fips": "36085",
    "county_name": "Richmond County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "085",
    "class_fips": "H6"
  },
  {
    "id": "84036087",
    "fips": "36087",
    "county_name": "Rockland County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84036089",
    "fips": "36089",
    "county_name": "St. Lawrence County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "089",
    "class_fips": "H1"
  },
  {
    "id": "84036091",
    "fips": "36091",
    "county_name": "Saratoga County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "091",
    "class_fips": "H1"
  },
  {
    "id": "84036093",
    "fips": "36093",
    "county_name": "Schenectady County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "093",
    "class_fips": "H1"
  },
  {
    "id": "84036095",
    "fips": "36095",
    "county_name": "Schoharie County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "095",
    "class_fips": "H1"
  },
  {
    "id": "84036097",
    "fips": "36097",
    "county_name": "Schuyler County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "097",
    "class_fips": "H1"
  },
  {
    "id": "84036099",
    "fips": "36099",
    "county_name": "Seneca County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "099",
    "class_fips": "H1"
  },
  {
    "id": "84036101",
    "fips": "36101",
    "county_name": "Steuben County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "101",
    "class_fips": "H1"
  },
  {
    "id": "84036103",
    "fips": "36103",
    "county_name": "Suffolk County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "103",
    "class_fips": "H1"
  },
  {
    "id": "84036105",
    "fips": "36105",
    "county_name": "Sullivan County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "105",
    "class_fips": "H1"
  },
  {
    "id": "84036107",
    "fips": "36107",
    "county_name": "Tioga County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "107",
    "class_fips": "H1"
  },
  {
    "id": "84036109",
    "fips": "36109",
    "county_name": "Tompkins County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "109",
    "class_fips": "H1"
  },
  {
    "id": "84036111",
    "fips": "36111",
    "county_name": "Ulster County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "111",
    "class_fips": "H1"
  },
  {
    "id": "84036113",
    "fips": "36113",
    "county_name": "Warren County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "113",
    "class_fips": "H1"
  },
  {
    "id": "84036115",
    "fips": "36115",
    "county_name": "Washington County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "115",
    "class_fips": "H1"
  },
  {
    "id": "84036117",
    "fips": "36117",
    "county_name": "Wayne County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "117",
    "class_fips": "H1"
  },
  {
    "id": "84036119",
    "fips": "36119",
    "county_name": "Westchester County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "119",
    "class_fips": "H1"
  },
  {
    "id": "84036121",
    "fips": "36121",
    "county_name": "Wyoming County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "121",
    "class_fips": "H1"
  },
  {
    "id": "84036123",
    "fips": "36123",
    "county_name": "Yates County",
    "state_code": "NY",
    "state_fips": "36",
    "county_fips": "123",
    "class_fips": "H1"
  },
  {
    "id": "84037001",
    "fips": "37001",
    "county_name": "Alamance County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84037003",
    "fips": "37003",
    "county_name": "Alexander County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84037005",
    "fips": "37005",
    "county_name": "Alleghany County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84037007",
    "fips": "37007",
    "county_name": "Anson County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84037009",
    "fips": "37009",
    "county_name": "Ashe County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84037011",
    "fips": "37011",
    "county_name": "Avery County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84037013",
    "fips": "37013",
    "county_name": "Beaufort County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84037015",
    "fips": "37015",
    "county_name": "Bertie County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84037017",
    "fips": "37017",
    "county_name": "Bladen County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84037019",
    "fips": "37019",
    "county_name": "Brunswick County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84037021",
    "fips": "37021",
    "county_name": "Buncombe County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84037023",
    "fips": "37023",
    "county_name": "Burke County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84037025",
    "fips": "37025",
    "county_name": "Cabarrus County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84037027",
    "fips": "37027",
    "county_name": "Caldwell County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84037029",
    "fips": "37029",
    "county_name": "Camden County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84037031",
    "fips": "37031",
    "county_name": "Carteret County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84037033",
    "fips": "37033",
    "county_name": "Caswell County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84037035",
    "fips": "37035",
    "county_name": "Catawba County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84037037",
    "fips": "37037",
    "county_name": "Chatham County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84037039",
    "fips": "37039",
    "county_name": "Cherokee County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84037041",
    "fips": "37041",
    "county_name": "Chowan County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84037043",
    "fips": "37043",
    "county_name": "Clay County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84037045",
    "fips": "37045",
    "county_name": "Cleveland County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84037047",
    "fips": "37047",
    "county_name": "Columbus County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84037049",
    "fips": "37049",
    "county_name": "Craven County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84037051",
    "fips": "37051",
    "county_name": "Cumberland County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84037053",
    "fips": "37053",
    "county_name": "Currituck County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84037055",
    "fips": "37055",
    "county_name": "Dare County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84037057",
    "fips": "37057",
    "county_name": "Davidson County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84037059",
    "fips": "37059",
    "county_name": "Davie County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84037061",
    "fips": "37061",
    "county_name": "Duplin County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84037063",
    "fips": "37063",
    "county_name": "Durham County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84037065",
    "fips": "37065",
    "county_name": "Edgecombe County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84037067",
    "fips": "37067",
    "county_name": "Forsyth County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84037069",
    "fips": "37069",
    "county_name": "Franklin County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84037071",
    "fips": "37071",
    "county_name": "Gaston County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84037073",
    "fips": "37073",
    "county_name": "Gates County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84037075",
    "fips": "37075",
    "county_name": "Graham County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84037077",
    "fips": "37077",
    "county_name": "Granville County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84037079",
    "fips": "37079",
    "county_name": "Greene County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84037081",
    "fips": "37081",
    "county_name": "Guilford County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "081",
    "class_fips": "H1"
  },
  {
    "id": "84037083",
    "fips": "37083",
    "county_name": "Halifax County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84037085",
    "fips": "37085",
    "county_name": "Harnett County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "085",
    "class_fips": "H1"
  },
  {
    "id": "84037087",
    "fips": "37087",
    "county_name": "Haywood County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84037089",
    "fips": "37089",
    "county_name": "Henderson County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "089",
    "class_fips": "H1"
  },
  {
    "id": "84037091",
    "fips": "37091",
    "county_name": "Hertford County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "091",
    "class_fips": "H1"
  },
  {
    "id": "84037093",
    "fips": "37093",
    "county_name": "Hoke County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "093",
    "class_fips": "H1"
  },
  {
    "id": "84037095",
    "fips": "37095",
    "county_name": "Hyde County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "095",
    "class_fips": "H1"
  },
  {
    "id": "84037097",
    "fips": "37097",
    "county_name": "Iredell County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "097",
    "class_fips": "H1"
  },
  {
    "id": "84037099",
    "fips": "37099",
    "county_name": "Jackson County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "099",
    "class_fips": "H1"
  },
  {
    "id": "84037101",
    "fips": "37101",
    "county_name": "Johnston County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "101",
    "class_fips": "H1"
  },
  {
    "id": "84037103",
    "fips": "37103",
    "county_name": "Jones County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "103",
    "class_fips": "H1"
  },
  {
    "id": "84037105",
    "fips": "37105",
    "county_name": "Lee County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "105",
    "class_fips": "H1"
  },
  {
    "id": "84037107",
    "fips": "37107",
    "county_name": "Lenoir County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "107",
    "class_fips": "H1"
  },
  {
    "id": "84037109",
    "fips": "37109",
    "county_name": "Lincoln County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "109",
    "class_fips": "H1"
  },
  {
    "id": "84037111",
    "fips": "37111",
    "county_name": "McDowell County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "111",
    "class_fips": "H1"
  },
  {
    "id": "84037113",
    "fips": "37113",
    "county_name": "Macon County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "113",
    "class_fips": "H1"
  },
  {
    "id": "84037115",
    "fips": "37115",
    "county_name": "Madison County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "115",
    "class_fips": "H1"
  },
  {
    "id": "84037117",
    "fips": "37117",
    "county_name": "Martin County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "117",
    "class_fips": "H1"
  },
  {
    "id": "84037119",
    "fips": "37119",
    "county_name": "Mecklenburg County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "119",
    "class_fips": "H1"
  },
  {
    "id": "84037121",
    "fips": "37121",
    "county_name": "Mitchell County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "121",
    "class_fips": "H1"
  },
  {
    "id": "84037123",
    "fips": "37123",
    "county_name": "Montgomery County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "123",
    "class_fips": "H1"
  },
  {
    "id": "84037125",
    "fips": "37125",
    "county_name": "Moore County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "125",
    "class_fips": "H1"
  },
  {
    "id": "84037127",
    "fips": "37127",
    "county_name": "Nash County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "127",
    "class_fips": "H1"
  },
  {
    "id": "84037129",
    "fips": "37129",
    "county_name": "New Hanover County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "129",
    "class_fips": "H1"
  },
  {
    "id": "84037131",
    "fips": "37131",
    "county_name": "Northampton County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "131",
    "class_fips": "H1"
  },
  {
    "id": "84037133",
    "fips": "37133",
    "county_name": "Onslow County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "133",
    "class_fips": "H1"
  },
  {
    "id": "84037135",
    "fips": "37135",
    "county_name": "Orange County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "135",
    "class_fips": "H1"
  },
  {
    "id": "84037137",
    "fips": "37137",
    "county_name": "Pamlico County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "137",
    "class_fips": "H1"
  },
  {
    "id": "84037139",
    "fips": "37139",
    "county_name": "Pasquotank County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "139",
    "class_fips": "H1"
  },
  {
    "id": "84037141",
    "fips": "37141",
    "county_name": "Pender County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "141",
    "class_fips": "H1"
  },
  {
    "id": "84037143",
    "fips": "37143",
    "county_name": "Perquimans County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "143",
    "class_fips": "H1"
  },
  {
    "id": "84037145",
    "fips": "37145",
    "county_name": "Person County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "145",
    "class_fips": "H1"
  },
  {
    "id": "84037147",
    "fips": "37147",
    "county_name": "Pitt County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "147",
    "class_fips": "H1"
  },
  {
    "id": "84037149",
    "fips": "37149",
    "county_name": "Polk County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "149",
    "class_fips": "H1"
  },
  {
    "id": "84037151",
    "fips": "37151",
    "county_name": "Randolph County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "151",
    "class_fips": "H1"
  },
  {
    "id": "84037153",
    "fips": "37153",
    "county_name": "Richmond County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "153",
    "class_fips": "H1"
  },
  {
    "id": "84037155",
    "fips": "37155",
    "county_name": "Robeson County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "155",
    "class_fips": "H1"
  },
  {
    "id": "84037157",
    "fips": "37157",
    "county_name": "Rockingham County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "157",
    "class_fips": "H1"
  },
  {
    "id": "84037159",
    "fips": "37159",
    "county_name": "Rowan County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "159",
    "class_fips": "H1"
  },
  {
    "id": "84037161",
    "fips": "37161",
    "county_name": "Rutherford County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "161",
    "class_fips": "H1"
  },
  {
    "id": "84037163",
    "fips": "37163",
    "county_name": "Sampson County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "163",
    "class_fips": "H1"
  },
  {
    "id": "84037165",
    "fips": "37165",
    "county_name": "Scotland County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "165",
    "class_fips": "H1"
  },
  {
    "id": "84037167",
    "fips": "37167",
    "county_name": "Stanly County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "167",
    "class_fips": "H1"
  },
  {
    "id": "84037169",
    "fips": "37169",
    "county_name": "Stokes County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "169",
    "class_fips": "H1"
  },
  {
    "id": "84037171",
    "fips": "37171",
    "county_name": "Surry County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "171",
    "class_fips": "H1"
  },
  {
    "id": "84037173",
    "fips": "37173",
    "county_name": "Swain County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "173",
    "class_fips": "H1"
  },
  {
    "id": "84037175",
    "fips": "37175",
    "county_name": "Transylvania County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "175",
    "class_fips": "H1"
  },
  {
    "id": "84037177",
    "fips": "37177",
    "county_name": "Tyrrell County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "177",
    "class_fips": "H1"
  },
  {
    "id": "84037179",
    "fips": "37179",
    "county_name": "Union County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "179",
    "class_fips": "H1"
  },
  {
    "id": "84037181",
    "fips": "37181",
    "county_name": "Vance County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "181",
    "class_fips": "H1"
  },
  {
    "id": "84037183",
    "fips": "37183",
    "county_name": "Wake County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "183",
    "class_fips": "H1"
  },
  {
    "id": "84037185",
    "fips": "37185",
    "county_name": "Warren County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "185",
    "class_fips": "H1"
  },
  {
    "id": "84037187",
    "fips": "37187",
    "county_name": "Washington County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "187",
    "class_fips": "H1"
  },
  {
    "id": "84037189",
    "fips": "37189",
    "county_name": "Watauga County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "189",
    "class_fips": "H1"
  },
  {
    "id": "84037191",
    "fips": "37191",
    "county_name": "Wayne County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "191",
    "class_fips": "H1"
  },
  {
    "id": "84037193",
    "fips": "37193",
    "county_name": "Wilkes County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "193",
    "class_fips": "H1"
  },
  {
    "id": "84037195",
    "fips": "37195",
    "county_name": "Wilson County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "195",
    "class_fips": "H1"
  },
  {
    "id": "84037197",
    "fips": "37197",
    "county_name": "Yadkin County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "197",
    "class_fips": "H1"
  },
  {
    "id": "84037199",
    "fips": "37199",
    "county_name": "Yancey County",
    "state_code": "NC",
    "state_fips": "37",
    "county_fips": "199",
    "class_fips": "H1"
  },
  {
    "id": "84038001",
    "fips": "38001",
    "county_name": "Adams County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84038003",
    "fips": "38003",
    "county_name": "Barnes County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84038005",
    "fips": "38005",
    "county_name": "Benson County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84038007",
    "fips": "38007",
    "county_name": "Billings County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84038009",
    "fips": "38009",
    "county_name": "Bottineau County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84038011",
    "fips": "38011",
    "county_name": "Bowman County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84038013",
    "fips": "38013",
    "county_name": "Burke County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84038015",
    "fips": "38015",
    "county_name": "Burleigh County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84038017",
    "fips": "38017",
    "county_name": "Cass County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84038019",
    "fips": "38019",
    "county_name": "Cavalier County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84038021",
    "fips": "38021",
    "county_name": "Dickey County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84038023",
    "fips": "38023",
    "county_name": "Divide County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84038025",
    "fips": "38025",
    "county_name": "Dunn County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84038027",
    "fips": "38027",
    "county_name": "Eddy County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84038029",
    "fips": "38029",
    "county_name": "Emmons County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84038031",
    "fips": "38031",
    "county_name": "Foster County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84038033",
    "fips": "38033",
    "county_name": "Golden Valley County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84038035",
    "fips": "38035",
    "county_name": "Grand Forks County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84038037",
    "fips": "38037",
    "county_name": "Grant County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84038039",
    "fips": "38039",
    "county_name": "Griggs County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84038041",
    "fips": "38041",
    "county_name": "Hettinger County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84038043",
    "fips": "38043",
    "county_name": "Kidder County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84038045",
    "fips": "38045",
    "county_name": "LaMoure County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84038047",
    "fips": "38047",
    "county_name": "Logan County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84038049",
    "fips": "38049",
    "county_name": "McHenry County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84038051",
    "fips": "38051",
    "county_name": "McIntosh County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84038053",
    "fips": "38053",
    "county_name": "McKenzie County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84038055",
    "fips": "38055",
    "county_name": "McLean County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84038057",
    "fips": "38057",
    "county_name": "Mercer County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84038059",
    "fips": "38059",
    "county_name": "Morton County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84038061",
    "fips": "38061",
    "county_name": "Mountrail County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84038063",
    "fips": "38063",
    "county_name": "Nelson County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84038065",
    "fips": "38065",
    "county_name": "Oliver County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84038067",
    "fips": "38067",
    "county_name": "Pembina County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84038069",
    "fips": "38069",
    "county_name": "Pierce County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84038071",
    "fips": "38071",
    "county_name": "Ramsey County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84038073",
    "fips": "38073",
    "county_name": "Ransom County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84038075",
    "fips": "38075",
    "county_name": "Renville County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84038077",
    "fips": "38077",
    "county_name": "Richland County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84038079",
    "fips": "38079",
    "county_name": "Rolette County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84038081",
    "fips": "38081",
    "county_name": "Sargent County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "081",
    "class_fips": "H1"
  },
  {
    "id": "84038083",
    "fips": "38083",
    "county_name": "Sheridan County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84038085",
    "fips": "38085",
    "county_name": "Sioux County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "085",
    "class_fips": "H1"
  },
  {
    "id": "84038087",
    "fips": "38087",
    "county_name": "Slope County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84038089",
    "fips": "38089",
    "county_name": "Stark County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "089",
    "class_fips": "H1"
  },
  {
    "id": "84038091",
    "fips": "38091",
    "county_name": "Steele County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "091",
    "class_fips": "H1"
  },
  {
    "id": "84038093",
    "fips": "38093",
    "county_name": "Stutsman County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "093",
    "class_fips": "H1"
  },
  {
    "id": "84038095",
    "fips": "38095",
    "county_name": "Towner County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "095",
    "class_fips": "H1"
  },
  {
    "id": "84038097",
    "fips": "38097",
    "county_name": "Traill County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "097",
    "class_fips": "H1"
  },
  {
    "id": "84038099",
    "fips": "38099",
    "county_name": "Walsh County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "099",
    "class_fips": "H1"
  },
  {
    "id": "84038101",
    "fips": "38101",
    "county_name": "Ward County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "101",
    "class_fips": "H1"
  },
  {
    "id": "84038103",
    "fips": "38103",
    "county_name": "Wells County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "103",
    "class_fips": "H1"
  },
  {
    "id": "84038105",
    "fips": "38105",
    "county_name": "Williams County",
    "state_code": "ND",
    "state_fips": "38",
    "county_fips": "105",
    "class_fips": "H1"
  },
  {
    "id": "84039001",
    "fips": "39001",
    "county_name": "Adams County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84039003",
    "fips": "39003",
    "county_name": "Allen County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84039005",
    "fips": "39005",
    "county_name": "Ashland County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84039007",
    "fips": "39007",
    "county_name": "Ashtabula County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84039009",
    "fips": "39009",
    "county_name": "Athens County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84039011",
    "fips": "39011",
    "county_name": "Auglaize County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84039013",
    "fips": "39013",
    "county_name": "Belmont County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84039015",
    "fips": "39015",
    "county_name": "Brown County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84039017",
    "fips": "39017",
    "county_name": "Butler County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84039019",
    "fips": "39019",
    "county_name": "Carroll County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84039021",
    "fips": "39021",
    "county_name": "Champaign County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84039023",
    "fips": "39023",
    "county_name": "Clark County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84039025",
    "fips": "39025",
    "county_name": "Clermont County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84039027",
    "fips": "39027",
    "county_name": "Clinton County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84039029",
    "fips": "39029",
    "county_name": "Columbiana County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84039031",
    "fips": "39031",
    "county_name": "Coshocton County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84039033",
    "fips": "39033",
    "county_name": "Crawford County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84039035",
    "fips": "39035",
    "county_name": "Cuyahoga County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84039037",
    "fips": "39037",
    "county_name": "Darke County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84039039",
    "fips": "39039",
    "county_name": "Defiance County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84039041",
    "fips": "39041",
    "county_name": "Delaware County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84039043",
    "fips": "39043",
    "county_name": "Erie County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84039045",
    "fips": "39045",
    "county_name": "Fairfield County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84039047",
    "fips": "39047",
    "county_name": "Fayette County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84039049",
    "fips": "39049",
    "county_name": "Franklin County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84039051",
    "fips": "39051",
    "county_name": "Fulton County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84039053",
    "fips": "39053",
    "county_name": "Gallia County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84039055",
    "fips": "39055",
    "county_name": "Geauga County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84039057",
    "fips": "39057",
    "county_name": "Greene County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84039059",
    "fips": "39059",
    "county_name": "Guernsey County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84039061",
    "fips": "39061",
    "county_name": "Hamilton County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84039063",
    "fips": "39063",
    "county_name": "Hancock County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84039065",
    "fips": "39065",
    "county_name": "Hardin County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84039067",
    "fips": "39067",
    "county_name": "Harrison County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84039069",
    "fips": "39069",
    "county_name": "Henry County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84039071",
    "fips": "39071",
    "county_name": "Highland County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84039073",
    "fips": "39073",
    "county_name": "Hocking County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84039075",
    "fips": "39075",
    "county_name": "Holmes County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84039077",
    "fips": "39077",
    "county_name": "Huron County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84039079",
    "fips": "39079",
    "county_name": "Jackson County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84039081",
    "fips": "39081",
    "county_name": "Jefferson County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "081",
    "class_fips": "H1"
  },
  {
    "id": "84039083",
    "fips": "39083",
    "county_name": "Knox County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84039085",
    "fips": "39085",
    "county_name": "Lake County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "085",
    "class_fips": "H1"
  },
  {
    "id": "84039087",
    "fips": "39087",
    "county_name": "Lawrence County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84039089",
    "fips": "39089",
    "county_name": "Licking County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "089",
    "class_fips": "H1"
  },
  {
    "id": "84039091",
    "fips": "39091",
    "county_name": "Logan County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "091",
    "class_fips": "H1"
  },
  {
    "id": "84039093",
    "fips": "39093",
    "county_name": "Lorain County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "093",
    "class_fips": "H1"
  },
  {
    "id": "84039095",
    "fips": "39095",
    "county_name": "Lucas County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "095",
    "class_fips": "H1"
  },
  {
    "id": "84039097",
    "fips": "39097",
    "county_name": "Madison County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "097",
    "class_fips": "H1"
  },
  {
    "id": "84039099",
    "fips": "39099",
    "county_name": "Mahoning County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "099",
    "class_fips": "H1"
  },
  {
    "id": "84039101",
    "fips": "39101",
    "county_name": "Marion County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "101",
    "class_fips": "H1"
  },
  {
    "id": "84039103",
    "fips": "39103",
    "county_name": "Medina County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "103",
    "class_fips": "H1"
  },
  {
    "id": "84039105",
    "fips": "39105",
    "county_name": "Meigs County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "105",
    "class_fips": "H1"
  },
  {
    "id": "84039107",
    "fips": "39107",
    "county_name": "Mercer County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "107",
    "class_fips": "H1"
  },
  {
    "id": "84039109",
    "fips": "39109",
    "county_name": "Miami County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "109",
    "class_fips": "H1"
  },
  {
    "id": "84039111",
    "fips": "39111",
    "county_name": "Monroe County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "111",
    "class_fips": "H1"
  },
  {
    "id": "84039113",
    "fips": "39113",
    "county_name": "Montgomery County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "113",
    "class_fips": "H1"
  },
  {
    "id": "84039115",
    "fips": "39115",
    "county_name": "Morgan County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "115",
    "class_fips": "H1"
  },
  {
    "id": "84039117",
    "fips": "39117",
    "county_name": "Morrow County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "117",
    "class_fips": "H1"
  },
  {
    "id": "84039119",
    "fips": "39119",
    "county_name": "Muskingum County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "119",
    "class_fips": "H1"
  },
  {
    "id": "84039121",
    "fips": "39121",
    "county_name": "Noble County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "121",
    "class_fips": "H1"
  },
  {
    "id": "84039123",
    "fips": "39123",
    "county_name": "Ottawa County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "123",
    "class_fips": "H1"
  },
  {
    "id": "84039125",
    "fips": "39125",
    "county_name": "Paulding County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "125",
    "class_fips": "H1"
  },
  {
    "id": "84039127",
    "fips": "39127",
    "county_name": "Perry County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "127",
    "class_fips": "H1"
  },
  {
    "id": "84039129",
    "fips": "39129",
    "county_name": "Pickaway County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "129",
    "class_fips": "H1"
  },
  {
    "id": "84039131",
    "fips": "39131",
    "county_name": "Pike County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "131",
    "class_fips": "H1"
  },
  {
    "id": "84039133",
    "fips": "39133",
    "county_name": "Portage County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "133",
    "class_fips": "H1"
  },
  {
    "id": "84039135",
    "fips": "39135",
    "county_name": "Preble County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "135",
    "class_fips": "H1"
  },
  {
    "id": "84039137",
    "fips": "39137",
    "county_name": "Putnam County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "137",
    "class_fips": "H1"
  },
  {
    "id": "84039139",
    "fips": "39139",
    "county_name": "Richland County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "139",
    "class_fips": "H1"
  },
  {
    "id": "84039141",
    "fips": "39141",
    "county_name": "Ross County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "141",
    "class_fips": "H1"
  },
  {
    "id": "84039143",
    "fips": "39143",
    "county_name": "Sandusky County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "143",
    "class_fips": "H1"
  },
  {
    "id": "84039145",
    "fips": "39145",
    "county_name": "Scioto County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "145",
    "class_fips": "H1"
  },
  {
    "id": "84039147",
    "fips": "39147",
    "county_name": "Seneca County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "147",
    "class_fips": "H1"
  },
  {
    "id": "84039149",
    "fips": "39149",
    "county_name": "Shelby County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "149",
    "class_fips": "H1"
  },
  {
    "id": "84039151",
    "fips": "39151",
    "county_name": "Stark County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "151",
    "class_fips": "H1"
  },
  {
    "id": "84039153",
    "fips": "39153",
    "county_name": "Summit County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "153",
    "class_fips": "H1"
  },
  {
    "id": "84039155",
    "fips": "39155",
    "county_name": "Trumbull County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "155",
    "class_fips": "H1"
  },
  {
    "id": "84039157",
    "fips": "39157",
    "county_name": "Tuscarawas County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "157",
    "class_fips": "H1"
  },
  {
    "id": "84039159",
    "fips": "39159",
    "county_name": "Union County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "159",
    "class_fips": "H1"
  },
  {
    "id": "84039161",
    "fips": "39161",
    "county_name": "Van Wert County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "161",
    "class_fips": "H1"
  },
  {
    "id": "84039163",
    "fips": "39163",
    "county_name": "Vinton County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "163",
    "class_fips": "H1"
  },
  {
    "id": "84039165",
    "fips": "39165",
    "county_name": "Warren County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "165",
    "class_fips": "H1"
  },
  {
    "id": "84039167",
    "fips": "39167",
    "county_name": "Washington County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "167",
    "class_fips": "H1"
  },
  {
    "id": "84039169",
    "fips": "39169",
    "county_name": "Wayne County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "169",
    "class_fips": "H1"
  },
  {
    "id": "84039171",
    "fips": "39171",
    "county_name": "Williams County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "171",
    "class_fips": "H1"
  },
  {
    "id": "84039173",
    "fips": "39173",
    "county_name": "Wood County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "173",
    "class_fips": "H1"
  },
  {
    "id": "84039175",
    "fips": "39175",
    "county_name": "Wyandot County",
    "state_code": "OH",
    "state_fips": "39",
    "county_fips": "175",
    "class_fips": "H1"
  },
  {
    "id": "84040001",
    "fips": "40001",
    "county_name": "Adair County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84040003",
    "fips": "40003",
    "county_name": "Alfalfa County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84040005",
    "fips": "40005",
    "county_name": "Atoka County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84040007",
    "fips": "40007",
    "county_name": "Beaver County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84040009",
    "fips": "40009",
    "county_name": "Beckham County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84040011",
    "fips": "40011",
    "county_name": "Blaine County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84040013",
    "fips": "40013",
    "county_name": "Bryan County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84040015",
    "fips": "40015",
    "county_name": "Caddo County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84040017",
    "fips": "40017",
    "county_name": "Canadian County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84040019",
    "fips": "40019",
    "county_name": "Carter County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84040021",
    "fips": "40021",
    "county_name": "Cherokee County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84040023",
    "fips": "40023",
    "county_name": "Choctaw County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84040025",
    "fips": "40025",
    "county_name": "Cimarron County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84040027",
    "fips": "40027",
    "county_name": "Cleveland County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84040029",
    "fips": "40029",
    "county_name": "Coal County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84040031",
    "fips": "40031",
    "county_name": "Comanche County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84040033",
    "fips": "40033",
    "county_name": "Cotton County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84040035",
    "fips": "40035",
    "county_name": "Craig County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84040037",
    "fips": "40037",
    "county_name": "Creek County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84040039",
    "fips": "40039",
    "county_name": "Custer County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84040041",
    "fips": "40041",
    "county_name": "Delaware County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84040043",
    "fips": "40043",
    "county_name": "Dewey County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84040045",
    "fips": "40045",
    "county_name": "Ellis County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84040047",
    "fips": "40047",
    "county_name": "Garfield County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84040049",
    "fips": "40049",
    "county_name": "Garvin County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84040051",
    "fips": "40051",
    "county_name": "Grady County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84040053",
    "fips": "40053",
    "county_name": "Grant County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84040055",
    "fips": "40055",
    "county_name": "Greer County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84040057",
    "fips": "40057",
    "county_name": "Harmon County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84040059",
    "fips": "40059",
    "county_name": "Harper County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84040061",
    "fips": "40061",
    "county_name": "Haskell County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84040063",
    "fips": "40063",
    "county_name": "Hughes County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84040065",
    "fips": "40065",
    "county_name": "Jackson County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84040067",
    "fips": "40067",
    "county_name": "Jefferson County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84040069",
    "fips": "40069",
    "county_name": "Johnston County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84040071",
    "fips": "40071",
    "county_name": "Kay County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84040073",
    "fips": "40073",
    "county_name": "Kingfisher County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84040075",
    "fips": "40075",
    "county_name": "Kiowa County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84040077",
    "fips": "40077",
    "county_name": "Latimer County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84040079",
    "fips": "40079",
    "county_name": "Le Flore County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84040081",
    "fips": "40081",
    "county_name": "Lincoln County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "081",
    "class_fips": "H1"
  },
  {
    "id": "84040083",
    "fips": "40083",
    "county_name": "Logan County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84040085",
    "fips": "40085",
    "county_name": "Love County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "085",
    "class_fips": "H1"
  },
  {
    "id": "84040087",
    "fips": "40087",
    "county_name": "McClain County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84040089",
    "fips": "40089",
    "county_name": "McCurtain County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "089",
    "class_fips": "H1"
  },
  {
    "id": "84040091",
    "fips": "40091",
    "county_name": "McIntosh County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "091",
    "class_fips": "H1"
  },
  {
    "id": "84040093",
    "fips": "40093",
    "county_name": "Major County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "093",
    "class_fips": "H1"
  },
  {
    "id": "84040095",
    "fips": "40095",
    "county_name": "Marshall County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "095",
    "class_fips": "H1"
  },
  {
    "id": "84040097",
    "fips": "40097",
    "county_name": "Mayes County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "097",
    "class_fips": "H1"
  },
  {
    "id": "84040099",
    "fips": "40099",
    "county_name": "Murray County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "099",
    "class_fips": "H1"
  },
  {
    "id": "84040101",
    "fips": "40101",
    "county_name": "Muskogee County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "101",
    "class_fips": "H1"
  },
  {
    "id": "84040103",
    "fips": "40103",
    "county_name": "Noble County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "103",
    "class_fips": "H1"
  },
  {
    "id": "84040105",
    "fips": "40105",
    "county_name": "Nowata County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "105",
    "class_fips": "H1"
  },
  {
    "id": "84040107",
    "fips": "40107",
    "county_name": "Okfuskee County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "107",
    "class_fips": "H1"
  },
  {
    "id": "84040109",
    "fips": "40109",
    "county_name": "Oklahoma County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "109",
    "class_fips": "H1"
  },
  {
    "id": "84040111",
    "fips": "40111",
    "county_name": "Okmulgee County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "111",
    "class_fips": "H1"
  },
  {
    "id": "84040113",
    "fips": "40113",
    "county_name": "Osage County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "113",
    "class_fips": "H1"
  },
  {
    "id": "84040115",
    "fips": "40115",
    "county_name": "Ottawa County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "115",
    "class_fips": "H1"
  },
  {
    "id": "84040117",
    "fips": "40117",
    "county_name": "Pawnee County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "117",
    "class_fips": "H1"
  },
  {
    "id": "84040119",
    "fips": "40119",
    "county_name": "Payne County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "119",
    "class_fips": "H1"
  },
  {
    "id": "84040121",
    "fips": "40121",
    "county_name": "Pittsburg County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "121",
    "class_fips": "H1"
  },
  {
    "id": "84040123",
    "fips": "40123",
    "county_name": "Pontotoc County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "123",
    "class_fips": "H1"
  },
  {
    "id": "84040125",
    "fips": "40125",
    "county_name": "Pottawatomie County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "125",
    "class_fips": "H1"
  },
  {
    "id": "84040127",
    "fips": "40127",
    "county_name": "Pushmataha County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "127",
    "class_fips": "H1"
  },
  {
    "id": "84040129",
    "fips": "40129",
    "county_name": "Roger Mills County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "129",
    "class_fips": "H1"
  },
  {
    "id": "84040131",
    "fips": "40131",
    "county_name": "Rogers County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "131",
    "class_fips": "H1"
  },
  {
    "id": "84040133",
    "fips": "40133",
    "county_name": "Seminole County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "133",
    "class_fips": "H1"
  },
  {
    "id": "84040135",
    "fips": "40135",
    "county_name": "Sequoyah County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "135",
    "class_fips": "H1"
  },
  {
    "id": "84040137",
    "fips": "40137",
    "county_name": "Stephens County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "137",
    "class_fips": "H1"
  },
  {
    "id": "84040139",
    "fips": "40139",
    "county_name": "Texas County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "139",
    "class_fips": "H1"
  },
  {
    "id": "84040141",
    "fips": "40141",
    "county_name": "Tillman County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "141",
    "class_fips": "H1"
  },
  {
    "id": "84040143",
    "fips": "40143",
    "county_name": "Tulsa County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "143",
    "class_fips": "H1"
  },
  {
    "id": "84040145",
    "fips": "40145",
    "county_name": "Wagoner County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "145",
    "class_fips": "H1"
  },
  {
    "id": "84040147",
    "fips": "40147",
    "county_name": "Washington County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "147",
    "class_fips": "H1"
  },
  {
    "id": "84040149",
    "fips": "40149",
    "county_name": "Washita County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "149",
    "class_fips": "H1"
  },
  {
    "id": "84040151",
    "fips": "40151",
    "county_name": "Woods County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "151",
    "class_fips": "H1"
  },
  {
    "id": "84040153",
    "fips": "40153",
    "county_name": "Woodward County",
    "state_code": "OK",
    "state_fips": "40",
    "county_fips": "153",
    "class_fips": "H1"
  },
  {
    "id": "84041001",
    "fips": "41001",
    "county_name": "Baker County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84041003",
    "fips": "41003",
    "county_name": "Benton County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84041005",
    "fips": "41005",
    "county_name": "Clackamas County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84041007",
    "fips": "41007",
    "county_name": "Clatsop County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84041009",
    "fips": "41009",
    "county_name": "Columbia County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84041011",
    "fips": "41011",
    "county_name": "Coos County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84041013",
    "fips": "41013",
    "county_name": "Crook County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84041015",
    "fips": "41015",
    "county_name": "Curry County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84041017",
    "fips": "41017",
    "county_name": "Deschutes County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84041019",
    "fips": "41019",
    "county_name": "Douglas County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84041021",
    "fips": "41021",
    "county_name": "Gilliam County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84041023",
    "fips": "41023",
    "county_name": "Grant County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84041025",
    "fips": "41025",
    "county_name": "Harney County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84041027",
    "fips": "41027",
    "county_name": "Hood River County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84041029",
    "fips": "41029",
    "county_name": "Jackson County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84041031",
    "fips": "41031",
    "county_name": "Jefferson County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84041033",
    "fips": "41033",
    "county_name": "Josephine County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84041035",
    "fips": "41035",
    "county_name": "Klamath County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84041037",
    "fips": "41037",
    "county_name": "Lake County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84041039",
    "fips": "41039",
    "county_name": "Lane County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84041041",
    "fips": "41041",
    "county_name": "Lincoln County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84041043",
    "fips": "41043",
    "county_name": "Linn County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84041045",
    "fips": "41045",
    "county_name": "Malheur County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84041047",
    "fips": "41047",
    "county_name": "Marion County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84041049",
    "fips": "41049",
    "county_name": "Morrow County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84041051",
    "fips": "41051",
    "county_name": "Multnomah County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84041053",
    "fips": "41053",
    "county_name": "Polk County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84041055",
    "fips": "41055",
    "county_name": "Sherman County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84041057",
    "fips": "41057",
    "county_name": "Tillamook County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84041059",
    "fips": "41059",
    "county_name": "Umatilla County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84041061",
    "fips": "41061",
    "county_name": "Union County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84041063",
    "fips": "41063",
    "county_name": "Wallowa County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84041065",
    "fips": "41065",
    "county_name": "Wasco County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84041067",
    "fips": "41067",
    "county_name": "Washington County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84041069",
    "fips": "41069",
    "county_name": "Wheeler County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84041071",
    "fips": "41071",
    "county_name": "Yamhill County",
    "state_code": "OR",
    "state_fips": "41",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84042001",
    "fips": "42001",
    "county_name": "Adams County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84042003",
    "fips": "42003",
    "county_name": "Allegheny County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84042005",
    "fips": "42005",
    "county_name": "Armstrong County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84042007",
    "fips": "42007",
    "county_name": "Beaver County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84042009",
    "fips": "42009",
    "county_name": "Bedford County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84042011",
    "fips": "42011",
    "county_name": "Berks County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84042013",
    "fips": "42013",
    "county_name": "Blair County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84042015",
    "fips": "42015",
    "county_name": "Bradford County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84042017",
    "fips": "42017",
    "county_name": "Bucks County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84042019",
    "fips": "42019",
    "county_name": "Butler County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84042021",
    "fips": "42021",
    "county_name": "Cambria County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84042023",
    "fips": "42023",
    "county_name": "Cameron County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84042025",
    "fips": "42025",
    "county_name": "Carbon County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84042027",
    "fips": "42027",
    "county_name": "Centre County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84042029",
    "fips": "42029",
    "county_name": "Chester County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84042031",
    "fips": "42031",
    "county_name": "Clarion County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84042033",
    "fips": "42033",
    "county_name": "Clearfield County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84042035",
    "fips": "42035",
    "county_name": "Clinton County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84042037",
    "fips": "42037",
    "county_name": "Columbia County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84042039",
    "fips": "42039",
    "county_name": "Crawford County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84042041",
    "fips": "42041",
    "county_name": "Cumberland County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84042043",
    "fips": "42043",
    "county_name": "Dauphin County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84042045",
    "fips": "42045",
    "county_name": "Delaware County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84042047",
    "fips": "42047",
    "county_name": "Elk County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84042049",
    "fips": "42049",
    "county_name": "Erie County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84042051",
    "fips": "42051",
    "county_name": "Fayette County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84042053",
    "fips": "42053",
    "county_name": "Forest County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84042055",
    "fips": "42055",
    "county_name": "Franklin County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84042057",
    "fips": "42057",
    "county_name": "Fulton County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84042059",
    "fips": "42059",
    "county_name": "Greene County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84042061",
    "fips": "42061",
    "county_name": "Huntingdon County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84042063",
    "fips": "42063",
    "county_name": "Indiana County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84042065",
    "fips": "42065",
    "county_name": "Jefferson County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84042067",
    "fips": "42067",
    "county_name": "Juniata County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84042069",
    "fips": "42069",
    "county_name": "Lackawanna County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84042071",
    "fips": "42071",
    "county_name": "Lancaster County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84042073",
    "fips": "42073",
    "county_name": "Lawrence County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84042075",
    "fips": "42075",
    "county_name": "Lebanon County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84042077",
    "fips": "42077",
    "county_name": "Lehigh County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84042079",
    "fips": "42079",
    "county_name": "Luzerne County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84042081",
    "fips": "42081",
    "county_name": "Lycoming County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "081",
    "class_fips": "H1"
  },
  {
    "id": "84042083",
    "fips": "42083",
    "county_name": "McKean County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84042085",
    "fips": "42085",
    "county_name": "Mercer County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "085",
    "class_fips": "H1"
  },
  {
    "id": "84042087",
    "fips": "42087",
    "county_name": "Mifflin County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84042089",
    "fips": "42089",
    "county_name": "Monroe County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "089",
    "class_fips": "H1"
  },
  {
    "id": "84042091",
    "fips": "42091",
    "county_name": "Montgomery County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "091",
    "class_fips": "H1"
  },
  {
    "id": "84042093",
    "fips": "42093",
    "county_name": "Montour County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "093",
    "class_fips": "H1"
  },
  {
    "id": "84042095",
    "fips": "42095",
    "county_name": "Northampton County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "095",
    "class_fips": "H1"
  },
  {
    "id": "84042097",
    "fips": "42097",
    "county_name": "Northumberland County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "097",
    "class_fips": "H1"
  },
  {
    "id": "84042099",
    "fips": "42099",
    "county_name": "Perry County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "099",
    "class_fips": "H1"
  },
  {
    "id": "84042101",
    "fips": "42101",
    "county_name": "Philadelphia County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "101",
    "class_fips": "H6"
  },
  {
    "id": "84042103",
    "fips": "42103",
    "county_name": "Pike County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "103",
    "class_fips": "H1"
  },
  {
    "id": "84042105",
    "fips": "42105",
    "county_name": "Potter County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "105",
    "class_fips": "H1"
  },
  {
    "id": "84042107",
    "fips": "42107",
    "county_name": "Schuylkill County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "107",
    "class_fips": "H1"
  },
  {
    "id": "84042109",
    "fips": "42109",
    "county_name": "Snyder County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "109",
    "class_fips": "H1"
  },
  {
    "id": "84042111",
    "fips": "42111",
    "county_name": "Somerset County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "111",
    "class_fips": "H1"
  },
  {
    "id": "84042113",
    "fips": "42113",
    "county_name": "Sullivan County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "113",
    "class_fips": "H1"
  },
  {
    "id": "84042115",
    "fips": "42115",
    "county_name": "Susquehanna County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "115",
    "class_fips": "H1"
  },
  {
    "id": "84042117",
    "fips": "42117",
    "county_name": "Tioga County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "117",
    "class_fips": "H1"
  },
  {
    "id": "84042119",
    "fips": "42119",
    "county_name": "Union County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "119",
    "class_fips": "H1"
  },
  {
    "id": "84042121",
    "fips": "42121",
    "county_name": "Venango County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "121",
    "class_fips": "H1"
  },
  {
    "id": "84042123",
    "fips": "42123",
    "county_name": "Warren County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "123",
    "class_fips": "H1"
  },
  {
    "id": "84042125",
    "fips": "42125",
    "county_name": "Washington County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "125",
    "class_fips": "H1"
  },
  {
    "id": "84042127",
    "fips": "42127",
    "county_name": "Wayne County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "127",
    "class_fips": "H1"
  },
  {
    "id": "84042129",
    "fips": "42129",
    "county_name": "Westmoreland County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "129",
    "class_fips": "H1"
  },
  {
    "id": "84042131",
    "fips": "42131",
    "county_name": "Wyoming County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "131",
    "class_fips": "H1"
  },
  {
    "id": "84042133",
    "fips": "42133",
    "county_name": "York County",
    "state_code": "PA",
    "state_fips": "42",
    "county_fips": "133",
    "class_fips": "H1"
  },
  {
    "id": "84044001",
    "fips": "44001",
    "county_name": "Bristol County",
    "state_code": "RI",
    "state_fips": "44",
    "county_fips": "001",
    "class_fips": "H4"
  },
  {
    "id": "84044003",
    "fips": "44003",
    "county_name": "Kent County",
    "state_code": "RI",
    "state_fips": "44",
    "county_fips": "003",
    "class_fips": "H4"
  },
  {
    "id": "84044005",
    "fips": "44005",
    "county_name": "Newport County",
    "state_code": "RI",
    "state_fips": "44",
    "county_fips": "005",
    "class_fips": "H4"
  },
  {
    "id": "84044007",
    "fips": "44007",
    "county_name": "Providence County",
    "state_code": "RI",
    "state_fips": "44",
    "county_fips": "007",
    "class_fips": "H4"
  },
  {
    "id": "84044009",
    "fips": "44009",
    "county_name": "Washington County",
    "state_code": "RI",
    "state_fips": "44",
    "county_fips": "009",
    "class_fips": "H4"
  },
  {
    "id": "84045001",
    "fips": "45001",
    "county_name": "Abbeville County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84045003",
    "fips": "45003",
    "county_name": "Aiken County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84045005",
    "fips": "45005",
    "county_name": "Allendale County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84045007",
    "fips": "45007",
    "county_name": "Anderson County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84045009",
    "fips": "45009",
    "county_name": "Bamberg County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84045011",
    "fips": "45011",
    "county_name": "Barnwell County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84045013",
    "fips": "45013",
    "county_name": "Beaufort County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84045015",
    "fips": "45015",
    "county_name": "Berkeley County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84045017",
    "fips": "45017",
    "county_name": "Calhoun County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84045019",
    "fips": "45019",
    "county_name": "Charleston County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84045021",
    "fips": "45021",
    "county_name": "Cherokee County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84045023",
    "fips": "45023",
    "county_name": "Chester County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84045025",
    "fips": "45025",
    "county_name": "Chesterfield County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84045027",
    "fips": "45027",
    "county_name": "Clarendon County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84045029",
    "fips": "45029",
    "county_name": "Colleton County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84045031",
    "fips": "45031",
    "county_name": "Darlington County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84045033",
    "fips": "45033",
    "county_name": "Dillon County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84045035",
    "fips": "45035",
    "county_name": "Dorchester County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84045037",
    "fips": "45037",
    "county_name": "Edgefield County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84045039",
    "fips": "45039",
    "county_name": "Fairfield County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84045041",
    "fips": "45041",
    "county_name": "Florence County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84045043",
    "fips": "45043",
    "county_name": "Georgetown County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84045045",
    "fips": "45045",
    "county_name": "Greenville County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84045047",
    "fips": "45047",
    "county_name": "Greenwood County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84045049",
    "fips": "45049",
    "county_name": "Hampton County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84045051",
    "fips": "45051",
    "county_name": "Horry County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84045053",
    "fips": "45053",
    "county_name": "Jasper County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84045055",
    "fips": "45055",
    "county_name": "Kershaw County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84045057",
    "fips": "45057",
    "county_name": "Lancaster County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84045059",
    "fips": "45059",
    "county_name": "Laurens County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84045061",
    "fips": "45061",
    "county_name": "Lee County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84045063",
    "fips": "45063",
    "county_name": "Lexington County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84045065",
    "fips": "45065",
    "county_name": "McCormick County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84045067",
    "fips": "45067",
    "county_name": "Marion County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84045069",
    "fips": "45069",
    "county_name": "Marlboro County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84045071",
    "fips": "45071",
    "county_name": "Newberry County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84045073",
    "fips": "45073",
    "county_name": "Oconee County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84045075",
    "fips": "45075",
    "county_name": "Orangeburg County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84045077",
    "fips": "45077",
    "county_name": "Pickens County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84045079",
    "fips": "45079",
    "county_name": "Richland County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84045081",
    "fips": "45081",
    "county_name": "Saluda County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "081",
    "class_fips": "H1"
  },
  {
    "id": "84045083",
    "fips": "45083",
    "county_name": "Spartanburg County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84045085",
    "fips": "45085",
    "county_name": "Sumter County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "085",
    "class_fips": "H1"
  },
  {
    "id": "84045087",
    "fips": "45087",
    "county_name": "Union County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84045089",
    "fips": "45089",
    "county_name": "Williamsburg County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "089",
    "class_fips": "H1"
  },
  {
    "id": "84045091",
    "fips": "45091",
    "county_name": "York County",
    "state_code": "SC",
    "state_fips": "45",
    "county_fips": "091",
    "class_fips": "H1"
  },
  {
    "id": "84046003",
    "fips": "46003",
    "county_name": "Aurora County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84046005",
    "fips": "46005",
    "county_name": "Beadle County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84046007",
    "fips": "46007",
    "county_name": "Bennett County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84046009",
    "fips": "46009",
    "county_name": "Bon Homme County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84046011",
    "fips": "46011",
    "county_name": "Brookings County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84046013",
    "fips": "46013",
    "county_name": "Brown County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84046015",
    "fips": "46015",
    "county_name": "Brule County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84046017",
    "fips": "46017",
    "county_name": "Buffalo County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84046019",
    "fips": "46019",
    "county_name": "Butte County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84046021",
    "fips": "46021",
    "county_name": "Campbell County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84046023",
    "fips": "46023",
    "county_name": "Charles Mix County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84046025",
    "fips": "46025",
    "county_name": "Clark County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84046027",
    "fips": "46027",
    "county_name": "Clay County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84046029",
    "fips": "46029",
    "county_name": "Codington County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84046031",
    "fips": "46031",
    "county_name": "Corson County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84046033",
    "fips": "46033",
    "county_name": "Custer County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84046035",
    "fips": "46035",
    "county_name": "Davison County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84046037",
    "fips": "46037",
    "county_name": "Day County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84046039",
    "fips": "46039",
    "county_name": "Deuel County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84046041",
    "fips": "46041",
    "county_name": "Dewey County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84046043",
    "fips": "46043",
    "county_name": "Douglas County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84046045",
    "fips": "46045",
    "county_name": "Edmunds County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84046047",
    "fips": "46047",
    "county_name": "Fall River County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84046049",
    "fips": "46049",
    "county_name": "Faulk County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84046051",
    "fips": "46051",
    "county_name": "Grant County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84046053",
    "fips": "46053",
    "county_name": "Gregory County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84046055",
    "fips": "46055",
    "county_name": "Haakon County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84046057",
    "fips": "46057",
    "county_name": "Hamlin County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84046059",
    "fips": "46059",
    "county_name": "Hand County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84046061",
    "fips": "46061",
    "county_name": "Hanson County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84046063",
    "fips": "46063",
    "county_name": "Harding County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84046065",
    "fips": "46065",
    "county_name": "Hughes County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84046067",
    "fips": "46067",
    "county_name": "Hutchinson County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84046069",
    "fips": "46069",
    "county_name": "Hyde County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84046071",
    "fips": "46071",
    "county_name": "Jackson County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84046073",
    "fips": "46073",
    "county_name": "Jerauld County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84046075",
    "fips": "46075",
    "county_name": "Jones County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84046077",
    "fips": "46077",
    "county_name": "Kingsbury County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84046079",
    "fips": "46079",
    "county_name": "Lake County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84046081",
    "fips": "46081",
    "county_name": "Lawrence County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "081",
    "class_fips": "H1"
  },
  {
    "id": "84046083",
    "fips": "46083",
    "county_name": "Lincoln County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84046085",
    "fips": "46085",
    "county_name": "Lyman County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "085",
    "class_fips": "H1"
  },
  {
    "id": "84046087",
    "fips": "46087",
    "county_name": "McCook County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84046089",
    "fips": "46089",
    "county_name": "McPherson County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "089",
    "class_fips": "H1"
  },
  {
    "id": "84046091",
    "fips": "46091",
    "county_name": "Marshall County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "091",
    "class_fips": "H1"
  },
  {
    "id": "84046093",
    "fips": "46093",
    "county_name": "Meade County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "093",
    "class_fips": "H1"
  },
  {
    "id": "84046095",
    "fips": "46095",
    "county_name": "Mellette County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "095",
    "class_fips": "H1"
  },
  {
    "id": "84046097",
    "fips": "46097",
    "county_name": "Miner County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "097",
    "class_fips": "H1"
  },
  {
    "id": "84046099",
    "fips": "46099",
    "county_name": "Minnehaha County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "099",
    "class_fips": "H1"
  },
  {
    "id": "84046101",
    "fips": "46101",
    "county_name": "Moody County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "101",
    "class_fips": "H1"
  },
  {
    "id": "84046102",
    "fips": "46102",
    "county_name": "Oglala Lakota County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "102",
    "class_fips": "H1"
  },
  {
    "id": "84046103",
    "fips": "46103",
    "county_name": "Pennington County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "103",
    "class_fips": "H1"
  },
  {
    "id": "84046105",
    "fips": "46105",
    "county_name": "Perkins County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "105",
    "class_fips": "H1"
  },
  {
    "id": "84046107",
    "fips": "46107",
    "county_name": "Potter County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "107",
    "class_fips": "H1"
  },
  {
    "id": "84046109",
    "fips": "46109",
    "county_name": "Roberts County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "109",
    "class_fips": "H1"
  },
  {
    "id": "84046111",
    "fips": "46111",
    "county_name": "Sanborn County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "111",
    "class_fips": "H1"
  },
  {
    "id": "84046115",
    "fips": "46115",
    "county_name": "Spink County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "115",
    "class_fips": "H1"
  },
  {
    "id": "84046117",
    "fips": "46117",
    "county_name": "Stanley County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "117",
    "class_fips": "H1"
  },
  {
    "id": "84046119",
    "fips": "46119",
    "county_name": "Sully County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "119",
    "class_fips": "H1"
  },
  {
    "id": "84046121",
    "fips": "46121",
    "county_name": "Todd County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "121",
    "class_fips": "H1"
  },
  {
    "id": "84046123",
    "fips": "46123",
    "county_name": "Tripp County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "123",
    "class_fips": "H1"
  },
  {
    "id": "84046125",
    "fips": "46125",
    "county_name": "Turner County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "125",
    "class_fips": "H1"
  },
  {
    "id": "84046127",
    "fips": "46127",
    "county_name": "Union County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "127",
    "class_fips": "H1"
  },
  {
    "id": "84046129",
    "fips": "46129",
    "county_name": "Walworth County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "129",
    "class_fips": "H1"
  },
  {
    "id": "84046135",
    "fips": "46135",
    "county_name": "Yankton County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "135",
    "class_fips": "H1"
  },
  {
    "id": "84046137",
    "fips": "46137",
    "county_name": "Ziebach County",
    "state_code": "SD",
    "state_fips": "46",
    "county_fips": "137",
    "class_fips": "H1"
  },
  {
    "id": "84047001",
    "fips": "47001",
    "county_name": "Anderson County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84047003",
    "fips": "47003",
    "county_name": "Bedford County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84047005",
    "fips": "47005",
    "county_name": "Benton County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84047007",
    "fips": "47007",
    "county_name": "Bledsoe County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84047009",
    "fips": "47009",
    "county_name": "Blount County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84047011",
    "fips": "47011",
    "county_name": "Bradley County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84047013",
    "fips": "47013",
    "county_name": "Campbell County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84047015",
    "fips": "47015",
    "county_name": "Cannon County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84047017",
    "fips": "47017",
    "county_name": "Carroll County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84047019",
    "fips": "47019",
    "county_name": "Carter County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84047021",
    "fips": "47021",
    "county_name": "Cheatham County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84047023",
    "fips": "47023",
    "county_name": "Chester County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84047025",
    "fips": "47025",
    "county_name": "Claiborne County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84047027",
    "fips": "47027",
    "county_name": "Clay County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84047029",
    "fips": "47029",
    "county_name": "Cocke County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84047031",
    "fips": "47031",
    "county_name": "Coffee County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84047033",
    "fips": "47033",
    "county_name": "Crockett County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84047035",
    "fips": "47035",
    "county_name": "Cumberland County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84047037",
    "fips": "47037",
    "county_name": "Davidson County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "037",
    "class_fips": "H6"
  },
  {
    "id": "84047039",
    "fips": "47039",
    "county_name": "Decatur County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84047041",
    "fips": "47041",
    "county_name": "DeKalb County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84047043",
    "fips": "47043",
    "county_name": "Dickson County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84047045",
    "fips": "47045",
    "county_name": "Dyer County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84047047",
    "fips": "47047",
    "county_name": "Fayette County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84047049",
    "fips": "47049",
    "county_name": "Fentress County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84047051",
    "fips": "47051",
    "county_name": "Franklin County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84047053",
    "fips": "47053",
    "county_name": "Gibson County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84047055",
    "fips": "47055",
    "county_name": "Giles County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84047057",
    "fips": "47057",
    "county_name": "Grainger County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84047059",
    "fips": "47059",
    "county_name": "Greene County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84047061",
    "fips": "47061",
    "county_name": "Grundy County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84047063",
    "fips": "47063",
    "county_name": "Hamblen County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84047065",
    "fips": "47065",
    "county_name": "Hamilton County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84047067",
    "fips": "47067",
    "county_name": "Hancock County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84047069",
    "fips": "47069",
    "county_name": "Hardeman County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84047071",
    "fips": "47071",
    "county_name": "Hardin County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84047073",
    "fips": "47073",
    "county_name": "Hawkins County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84047075",
    "fips": "47075",
    "county_name": "Haywood County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84047077",
    "fips": "47077",
    "county_name": "Henderson County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84047079",
    "fips": "47079",
    "county_name": "Henry County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84047081",
    "fips": "47081",
    "county_name": "Hickman County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "081",
    "class_fips": "H1"
  },
  {
    "id": "84047083",
    "fips": "47083",
    "county_name": "Houston County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84047085",
    "fips": "47085",
    "county_name": "Humphreys County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "085",
    "class_fips": "H1"
  },
  {
    "id": "84047087",
    "fips": "47087",
    "county_name": "Jackson County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84047089",
    "fips": "47089",
    "county_name": "Jefferson County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "089",
    "class_fips": "H1"
  },
  {
    "id": "84047091",
    "fips": "47091",
    "county_name": "Johnson County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "091",
    "class_fips": "H1"
  },
  {
    "id": "84047093",
    "fips": "47093",
    "county_name": "Knox County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "093",
    "class_fips": "H1"
  },
  {
    "id": "84047095",
    "fips": "47095",
    "county_name": "Lake County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "095",
    "class_fips": "H1"
  },
  {
    "id": "84047097",
    "fips": "47097",
    "county_name": "Lauderdale County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "097",
    "class_fips": "H1"
  },
  {
    "id": "84047099",
    "fips": "47099",
    "county_name": "Lawrence County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "099",
    "class_fips": "H1"
  },
  {
    "id": "84047101",
    "fips": "47101",
    "county_name": "Lewis County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "101",
    "class_fips": "H1"
  },
  {
    "id": "84047103",
    "fips": "47103",
    "county_name": "Lincoln County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "103",
    "class_fips": "H1"
  },
  {
    "id": "84047105",
    "fips": "47105",
    "county_name": "Loudon County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "105",
    "class_fips": "H1"
  },
  {
    "id": "84047107",
    "fips": "47107",
    "county_name": "McMinn County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "107",
    "class_fips": "H1"
  },
  {
    "id": "84047109",
    "fips": "47109",
    "county_name": "McNairy County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "109",
    "class_fips": "H1"
  },
  {
    "id": "84047111",
    "fips": "47111",
    "county_name": "Macon County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "111",
    "class_fips": "H1"
  },
  {
    "id": "84047113",
    "fips": "47113",
    "county_name": "Madison County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "113",
    "class_fips": "H1"
  },
  {
    "id": "84047115",
    "fips": "47115",
    "county_name": "Marion County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "115",
    "class_fips": "H1"
  },
  {
    "id": "84047117",
    "fips": "47117",
    "county_name": "Marshall County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "117",
    "class_fips": "H1"
  },
  {
    "id": "84047119",
    "fips": "47119",
    "county_name": "Maury County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "119",
    "class_fips": "H1"
  },
  {
    "id": "84047121",
    "fips": "47121",
    "county_name": "Meigs County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "121",
    "class_fips": "H1"
  },
  {
    "id": "84047123",
    "fips": "47123",
    "county_name": "Monroe County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "123",
    "class_fips": "H1"
  },
  {
    "id": "84047125",
    "fips": "47125",
    "county_name": "Montgomery County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "125",
    "class_fips": "H1"
  },
  {
    "id": "84047127",
    "fips": "47127",
    "county_name": "Moore County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "127",
    "class_fips": "H6"
  },
  {
    "id": "84047129",
    "fips": "47129",
    "county_name": "Morgan County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "129",
    "class_fips": "H1"
  },
  {
    "id": "84047131",
    "fips": "47131",
    "county_name": "Obion County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "131",
    "class_fips": "H1"
  },
  {
    "id": "84047133",
    "fips": "47133",
    "county_name": "Overton County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "133",
    "class_fips": "H1"
  },
  {
    "id": "84047135",
    "fips": "47135",
    "county_name": "Perry County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "135",
    "class_fips": "H1"
  },
  {
    "id": "84047137",
    "fips": "47137",
    "county_name": "Pickett County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "137",
    "class_fips": "H1"
  },
  {
    "id": "84047139",
    "fips": "47139",
    "county_name": "Polk County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "139",
    "class_fips": "H1"
  },
  {
    "id": "84047141",
    "fips": "47141",
    "county_name": "Putnam County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "141",
    "class_fips": "H1"
  },
  {
    "id": "84047143",
    "fips": "47143",
    "county_name": "Rhea County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "143",
    "class_fips": "H1"
  },
  {
    "id": "84047145",
    "fips": "47145",
    "county_name": "Roane County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "145",
    "class_fips": "H1"
  },
  {
    "id": "84047147",
    "fips": "47147",
    "county_name": "Robertson County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "147",
    "class_fips": "H1"
  },
  {
    "id": "84047149",
    "fips": "47149",
    "county_name": "Rutherford County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "149",
    "class_fips": "H1"
  },
  {
    "id": "84047151",
    "fips": "47151",
    "county_name": "Scott County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "151",
    "class_fips": "H1"
  },
  {
    "id": "84047153",
    "fips": "47153",
    "county_name": "Sequatchie County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "153",
    "class_fips": "H1"
  },
  {
    "id": "84047155",
    "fips": "47155",
    "county_name": "Sevier County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "155",
    "class_fips": "H1"
  },
  {
    "id": "84047157",
    "fips": "47157",
    "county_name": "Shelby County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "157",
    "class_fips": "H1"
  },
  {
    "id": "84047159",
    "fips": "47159",
    "county_name": "Smith County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "159",
    "class_fips": "H1"
  },
  {
    "id": "84047161",
    "fips": "47161",
    "county_name": "Stewart County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "161",
    "class_fips": "H1"
  },
  {
    "id": "84047163",
    "fips": "47163",
    "county_name": "Sullivan County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "163",
    "class_fips": "H1"
  },
  {
    "id": "84047165",
    "fips": "47165",
    "county_name": "Sumner County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "165",
    "class_fips": "H1"
  },
  {
    "id": "84047167",
    "fips": "47167",
    "county_name": "Tipton County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "167",
    "class_fips": "H1"
  },
  {
    "id": "84047169",
    "fips": "47169",
    "county_name": "Trousdale County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "169",
    "class_fips": "H6"
  },
  {
    "id": "84047171",
    "fips": "47171",
    "county_name": "Unicoi County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "171",
    "class_fips": "H1"
  },
  {
    "id": "84047173",
    "fips": "47173",
    "county_name": "Union County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "173",
    "class_fips": "H1"
  },
  {
    "id": "84047175",
    "fips": "47175",
    "county_name": "Van Buren County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "175",
    "class_fips": "H1"
  },
  {
    "id": "84047177",
    "fips": "47177",
    "county_name": "Warren County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "177",
    "class_fips": "H1"
  },
  {
    "id": "84047179",
    "fips": "47179",
    "county_name": "Washington County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "179",
    "class_fips": "H1"
  },
  {
    "id": "84047181",
    "fips": "47181",
    "county_name": "Wayne County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "181",
    "class_fips": "H1"
  },
  {
    "id": "84047183",
    "fips": "47183",
    "county_name": "Weakley County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "183",
    "class_fips": "H1"
  },
  {
    "id": "84047185",
    "fips": "47185",
    "county_name": "White County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "185",
    "class_fips": "H1"
  },
  {
    "id": "84047187",
    "fips": "47187",
    "county_name": "Williamson County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "187",
    "class_fips": "H1"
  },
  {
    "id": "84047189",
    "fips": "47189",
    "county_name": "Wilson County",
    "state_code": "TN",
    "state_fips": "47",
    "county_fips": "189",
    "class_fips": "H1"
  },
  {
    "id": "84048001",
    "fips": "48001",
    "county_name": "Anderson County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84048003",
    "fips": "48003",
    "county_name": "Andrews County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84048005",
    "fips": "48005",
    "county_name": "Angelina County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84048007",
    "fips": "48007",
    "county_name": "Aransas County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84048009",
    "fips": "48009",
    "county_name": "Archer County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84048011",
    "fips": "48011",
    "county_name": "Armstrong County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84048013",
    "fips": "48013",
    "county_name": "Atascosa County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84048015",
    "fips": "48015",
    "county_name": "Austin County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84048017",
    "fips": "48017",
    "county_name": "Bailey County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84048019",
    "fips": "48019",
    "county_name": "Bandera County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84048021",
    "fips": "48021",
    "county_name": "Bastrop County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84048023",
    "fips": "48023",
    "county_name": "Baylor County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84048025",
    "fips": "48025",
    "county_name": "Bee County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84048027",
    "fips": "48027",
    "county_name": "Bell County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84048029",
    "fips": "48029",
    "county_name": "Bexar County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84048031",
    "fips": "48031",
    "county_name": "Blanco County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84048033",
    "fips": "48033",
    "county_name": "Borden County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84048035",
    "fips": "48035",
    "county_name": "Bosque County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84048037",
    "fips": "48037",
    "county_name": "Bowie County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84048039",
    "fips": "48039",
    "county_name": "Brazoria County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84048041",
    "fips": "48041",
    "county_name": "Brazos County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84048043",
    "fips": "48043",
    "county_name": "Brewster County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84048045",
    "fips": "48045",
    "county_name": "Briscoe County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84048047",
    "fips": "48047",
    "county_name": "Brooks County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84048049",
    "fips": "48049",
    "county_name": "Brown County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84048051",
    "fips": "48051",
    "county_name": "Burleson County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84048053",
    "fips": "48053",
    "county_name": "Burnet County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84048055",
    "fips": "48055",
    "county_name": "Caldwell County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84048057",
    "fips": "48057",
    "county_name": "Calhoun County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84048059",
    "fips": "48059",
    "county_name": "Callahan County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84048061",
    "fips": "48061",
    "county_name": "Cameron County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84048063",
    "fips": "48063",
    "county_name": "Camp County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84048065",
    "fips": "48065",
    "county_name": "Carson County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84048067",
    "fips": "48067",
    "county_name": "Cass County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84048069",
    "fips": "48069",
    "county_name": "Castro County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84048071",
    "fips": "48071",
    "county_name": "Chambers County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84048073",
    "fips": "48073",
    "county_name": "Cherokee County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84048075",
    "fips": "48075",
    "county_name": "Childress County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84048077",
    "fips": "48077",
    "county_name": "Clay County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84048079",
    "fips": "48079",
    "county_name": "Cochran County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84048081",
    "fips": "48081",
    "county_name": "Coke County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "081",
    "class_fips": "H1"
  },
  {
    "id": "84048083",
    "fips": "48083",
    "county_name": "Coleman County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84048085",
    "fips": "48085",
    "county_name": "Collin County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "085",
    "class_fips": "H1"
  },
  {
    "id": "84048087",
    "fips": "48087",
    "county_name": "Collingsworth County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84048089",
    "fips": "48089",
    "county_name": "Colorado County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "089",
    "class_fips": "H1"
  },
  {
    "id": "84048091",
    "fips": "48091",
    "county_name": "Comal County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "091",
    "class_fips": "H1"
  },
  {
    "id": "84048093",
    "fips": "48093",
    "county_name": "Comanche County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "093",
    "class_fips": "H1"
  },
  {
    "id": "84048095",
    "fips": "48095",
    "county_name": "Concho County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "095",
    "class_fips": "H1"
  },
  {
    "id": "84048097",
    "fips": "48097",
    "county_name": "Cooke County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "097",
    "class_fips": "H1"
  },
  {
    "id": "84048099",
    "fips": "48099",
    "county_name": "Coryell County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "099",
    "class_fips": "H1"
  },
  {
    "id": "84048101",
    "fips": "48101",
    "county_name": "Cottle County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "101",
    "class_fips": "H1"
  },
  {
    "id": "84048103",
    "fips": "48103",
    "county_name": "Crane County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "103",
    "class_fips": "H1"
  },
  {
    "id": "84048105",
    "fips": "48105",
    "county_name": "Crockett County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "105",
    "class_fips": "H1"
  },
  {
    "id": "84048107",
    "fips": "48107",
    "county_name": "Crosby County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "107",
    "class_fips": "H1"
  },
  {
    "id": "84048109",
    "fips": "48109",
    "county_name": "Culberson County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "109",
    "class_fips": "H1"
  },
  {
    "id": "84048111",
    "fips": "48111",
    "county_name": "Dallam County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "111",
    "class_fips": "H1"
  },
  {
    "id": "84048113",
    "fips": "48113",
    "county_name": "Dallas County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "113",
    "class_fips": "H1"
  },
  {
    "id": "84048115",
    "fips": "48115",
    "county_name": "Dawson County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "115",
    "class_fips": "H1"
  },
  {
    "id": "84048117",
    "fips": "48117",
    "county_name": "Deaf Smith County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "117",
    "class_fips": "H1"
  },
  {
    "id": "84048119",
    "fips": "48119",
    "county_name": "Delta County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "119",
    "class_fips": "H1"
  },
  {
    "id": "84048121",
    "fips": "48121",
    "county_name": "Denton County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "121",
    "class_fips": "H1"
  },
  {
    "id": "84048123",
    "fips": "48123",
    "county_name": "DeWitt County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "123",
    "class_fips": "H1"
  },
  {
    "id": "84048125",
    "fips": "48125",
    "county_name": "Dickens County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "125",
    "class_fips": "H1"
  },
  {
    "id": "84048127",
    "fips": "48127",
    "county_name": "Dimmit County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "127",
    "class_fips": "H1"
  },
  {
    "id": "84048129",
    "fips": "48129",
    "county_name": "Donley County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "129",
    "class_fips": "H1"
  },
  {
    "id": "84048131",
    "fips": "48131",
    "county_name": "Duval County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "131",
    "class_fips": "H1"
  },
  {
    "id": "84048133",
    "fips": "48133",
    "county_name": "Eastland County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "133",
    "class_fips": "H1"
  },
  {
    "id": "84048135",
    "fips": "48135",
    "county_name": "Ector County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "135",
    "class_fips": "H1"
  },
  {
    "id": "84048137",
    "fips": "48137",
    "county_name": "Edwards County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "137",
    "class_fips": "H1"
  },
  {
    "id": "84048139",
    "fips": "48139",
    "county_name": "Ellis County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "139",
    "class_fips": "H1"
  },
  {
    "id": "84048141",
    "fips": "48141",
    "county_name": "El Paso County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "141",
    "class_fips": "H1"
  },
  {
    "id": "84048143",
    "fips": "48143",
    "county_name": "Erath County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "143",
    "class_fips": "H1"
  },
  {
    "id": "84048145",
    "fips": "48145",
    "county_name": "Falls County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "145",
    "class_fips": "H1"
  },
  {
    "id": "84048147",
    "fips": "48147",
    "county_name": "Fannin County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "147",
    "class_fips": "H1"
  },
  {
    "id": "84048149",
    "fips": "48149",
    "county_name": "Fayette County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "149",
    "class_fips": "H1"
  },
  {
    "id": "84048151",
    "fips": "48151",
    "county_name": "Fisher County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "151",
    "class_fips": "H1"
  },
  {
    "id": "84048153",
    "fips": "48153",
    "county_name": "Floyd County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "153",
    "class_fips": "H1"
  },
  {
    "id": "84048155",
    "fips": "48155",
    "county_name": "Foard County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "155",
    "class_fips": "H1"
  },
  {
    "id": "84048157",
    "fips": "48157",
    "county_name": "Fort Bend County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "157",
    "class_fips": "H1"
  },
  {
    "id": "84048159",
    "fips": "48159",
    "county_name": "Franklin County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "159",
    "class_fips": "H1"
  },
  {
    "id": "84048161",
    "fips": "48161",
    "county_name": "Freestone County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "161",
    "class_fips": "H1"
  },
  {
    "id": "84048163",
    "fips": "48163",
    "county_name": "Frio County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "163",
    "class_fips": "H1"
  },
  {
    "id": "84048165",
    "fips": "48165",
    "county_name": "Gaines County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "165",
    "class_fips": "H1"
  },
  {
    "id": "84048167",
    "fips": "48167",
    "county_name": "Galveston County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "167",
    "class_fips": "H1"
  },
  {
    "id": "84048169",
    "fips": "48169",
    "county_name": "Garza County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "169",
    "class_fips": "H1"
  },
  {
    "id": "84048171",
    "fips": "48171",
    "county_name": "Gillespie County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "171",
    "class_fips": "H1"
  },
  {
    "id": "84048173",
    "fips": "48173",
    "county_name": "Glasscock County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "173",
    "class_fips": "H1"
  },
  {
    "id": "84048175",
    "fips": "48175",
    "county_name": "Goliad County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "175",
    "class_fips": "H1"
  },
  {
    "id": "84048177",
    "fips": "48177",
    "county_name": "Gonzales County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "177",
    "class_fips": "H1"
  },
  {
    "id": "84048179",
    "fips": "48179",
    "county_name": "Gray County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "179",
    "class_fips": "H1"
  },
  {
    "id": "84048181",
    "fips": "48181",
    "county_name": "Grayson County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "181",
    "class_fips": "H1"
  },
  {
    "id": "84048183",
    "fips": "48183",
    "county_name": "Gregg County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "183",
    "class_fips": "H1"
  },
  {
    "id": "84048185",
    "fips": "48185",
    "county_name": "Grimes County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "185",
    "class_fips": "H1"
  },
  {
    "id": "84048187",
    "fips": "48187",
    "county_name": "Guadalupe County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "187",
    "class_fips": "H1"
  },
  {
    "id": "84048189",
    "fips": "48189",
    "county_name": "Hale County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "189",
    "class_fips": "H1"
  },
  {
    "id": "84048191",
    "fips": "48191",
    "county_name": "Hall County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "191",
    "class_fips": "H1"
  },
  {
    "id": "84048193",
    "fips": "48193",
    "county_name": "Hamilton County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "193",
    "class_fips": "H1"
  },
  {
    "id": "84048195",
    "fips": "48195",
    "county_name": "Hansford County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "195",
    "class_fips": "H1"
  },
  {
    "id": "84048197",
    "fips": "48197",
    "county_name": "Hardeman County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "197",
    "class_fips": "H1"
  },
  {
    "id": "84048199",
    "fips": "48199",
    "county_name": "Hardin County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "199",
    "class_fips": "H1"
  },
  {
    "id": "84048201",
    "fips": "48201",
    "county_name": "Harris County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "201",
    "class_fips": "H1"
  },
  {
    "id": "84048203",
    "fips": "48203",
    "county_name": "Harrison County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "203",
    "class_fips": "H1"
  },
  {
    "id": "84048205",
    "fips": "48205",
    "county_name": "Hartley County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "205",
    "class_fips": "H1"
  },
  {
    "id": "84048207",
    "fips": "48207",
    "county_name": "Haskell County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "207",
    "class_fips": "H1"
  },
  {
    "id": "84048209",
    "fips": "48209",
    "county_name": "Hays County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "209",
    "class_fips": "H1"
  },
  {
    "id": "84048211",
    "fips": "48211",
    "county_name": "Hemphill County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "211",
    "class_fips": "H1"
  },
  {
    "id": "84048213",
    "fips": "48213",
    "county_name": "Henderson County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "213",
    "class_fips": "H1"
  },
  {
    "id": "84048215",
    "fips": "48215",
    "county_name": "Hidalgo County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "215",
    "class_fips": "H1"
  },
  {
    "id": "84048217",
    "fips": "48217",
    "county_name": "Hill County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "217",
    "class_fips": "H1"
  },
  {
    "id": "84048219",
    "fips": "48219",
    "county_name": "Hockley County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "219",
    "class_fips": "H1"
  },
  {
    "id": "84048221",
    "fips": "48221",
    "county_name": "Hood County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "221",
    "class_fips": "H1"
  },
  {
    "id": "84048223",
    "fips": "48223",
    "county_name": "Hopkins County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "223",
    "class_fips": "H1"
  },
  {
    "id": "84048225",
    "fips": "48225",
    "county_name": "Houston County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "225",
    "class_fips": "H1"
  },
  {
    "id": "84048227",
    "fips": "48227",
    "county_name": "Howard County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "227",
    "class_fips": "H1"
  },
  {
    "id": "84048229",
    "fips": "48229",
    "county_name": "Hudspeth County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "229",
    "class_fips": "H1"
  },
  {
    "id": "84048231",
    "fips": "48231",
    "county_name": "Hunt County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "231",
    "class_fips": "H1"
  },
  {
    "id": "84048233",
    "fips": "48233",
    "county_name": "Hutchinson County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "233",
    "class_fips": "H1"
  },
  {
    "id": "84048235",
    "fips": "48235",
    "county_name": "Irion County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "235",
    "class_fips": "H1"
  },
  {
    "id": "84048237",
    "fips": "48237",
    "county_name": "Jack County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "237",
    "class_fips": "H1"
  },
  {
    "id": "84048239",
    "fips": "48239",
    "county_name": "Jackson County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "239",
    "class_fips": "H1"
  },
  {
    "id": "84048241",
    "fips": "48241",
    "county_name": "Jasper County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "241",
    "class_fips": "H1"
  },
  {
    "id": "84048243",
    "fips": "48243",
    "county_name": "Jeff Davis County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "243",
    "class_fips": "H1"
  },
  {
    "id": "84048245",
    "fips": "48245",
    "county_name": "Jefferson County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "245",
    "class_fips": "H1"
  },
  {
    "id": "84048247",
    "fips": "48247",
    "county_name": "Jim Hogg County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "247",
    "class_fips": "H1"
  },
  {
    "id": "84048249",
    "fips": "48249",
    "county_name": "Jim Wells County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "249",
    "class_fips": "H1"
  },
  {
    "id": "84048251",
    "fips": "48251",
    "county_name": "Johnson County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "251",
    "class_fips": "H1"
  },
  {
    "id": "84048253",
    "fips": "48253",
    "county_name": "Jones County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "253",
    "class_fips": "H1"
  },
  {
    "id": "84048255",
    "fips": "48255",
    "county_name": "Karnes County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "255",
    "class_fips": "H1"
  },
  {
    "id": "84048257",
    "fips": "48257",
    "county_name": "Kaufman County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "257",
    "class_fips": "H1"
  },
  {
    "id": "84048259",
    "fips": "48259",
    "county_name": "Kendall County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "259",
    "class_fips": "H1"
  },
  {
    "id": "84048261",
    "fips": "48261",
    "county_name": "Kenedy County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "261",
    "class_fips": "H1"
  },
  {
    "id": "84048263",
    "fips": "48263",
    "county_name": "Kent County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "263",
    "class_fips": "H1"
  },
  {
    "id": "84048265",
    "fips": "48265",
    "county_name": "Kerr County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "265",
    "class_fips": "H1"
  },
  {
    "id": "84048267",
    "fips": "48267",
    "county_name": "Kimble County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "267",
    "class_fips": "H1"
  },
  {
    "id": "84048269",
    "fips": "48269",
    "county_name": "King County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "269",
    "class_fips": "H1"
  },
  {
    "id": "84048271",
    "fips": "48271",
    "county_name": "Kinney County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "271",
    "class_fips": "H1"
  },
  {
    "id": "84048273",
    "fips": "48273",
    "county_name": "Kleberg County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "273",
    "class_fips": "H1"
  },
  {
    "id": "84048275",
    "fips": "48275",
    "county_name": "Knox County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "275",
    "class_fips": "H1"
  },
  {
    "id": "84048277",
    "fips": "48277",
    "county_name": "Lamar County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "277",
    "class_fips": "H1"
  },
  {
    "id": "84048279",
    "fips": "48279",
    "county_name": "Lamb County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "279",
    "class_fips": "H1"
  },
  {
    "id": "84048281",
    "fips": "48281",
    "county_name": "Lampasas County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "281",
    "class_fips": "H1"
  },
  {
    "id": "84048283",
    "fips": "48283",
    "county_name": "La Salle County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "283",
    "class_fips": "H1"
  },
  {
    "id": "84048285",
    "fips": "48285",
    "county_name": "Lavaca County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "285",
    "class_fips": "H1"
  },
  {
    "id": "84048287",
    "fips": "48287",
    "county_name": "Lee County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "287",
    "class_fips": "H1"
  },
  {
    "id": "84048289",
    "fips": "48289",
    "county_name": "Leon County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "289",
    "class_fips": "H1"
  },
  {
    "id": "84048291",
    "fips": "48291",
    "county_name": "Liberty County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "291",
    "class_fips": "H1"
  },
  {
    "id": "84048293",
    "fips": "48293",
    "county_name": "Limestone County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "293",
    "class_fips": "H1"
  },
  {
    "id": "84048295",
    "fips": "48295",
    "county_name": "Lipscomb County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "295",
    "class_fips": "H1"
  },
  {
    "id": "84048297",
    "fips": "48297",
    "county_name": "Live Oak County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "297",
    "class_fips": "H1"
  },
  {
    "id": "84048299",
    "fips": "48299",
    "county_name": "Llano County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "299",
    "class_fips": "H1"
  },
  {
    "id": "84048301",
    "fips": "48301",
    "county_name": "Loving County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "301",
    "class_fips": "H1"
  },
  {
    "id": "84048303",
    "fips": "48303",
    "county_name": "Lubbock County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "303",
    "class_fips": "H1"
  },
  {
    "id": "84048305",
    "fips": "48305",
    "county_name": "Lynn County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "305",
    "class_fips": "H1"
  },
  {
    "id": "84048307",
    "fips": "48307",
    "county_name": "McCulloch County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "307",
    "class_fips": "H1"
  },
  {
    "id": "84048309",
    "fips": "48309",
    "county_name": "McLennan County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "309",
    "class_fips": "H1"
  },
  {
    "id": "84048311",
    "fips": "48311",
    "county_name": "McMullen County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "311",
    "class_fips": "H1"
  },
  {
    "id": "84048313",
    "fips": "48313",
    "county_name": "Madison County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "313",
    "class_fips": "H1"
  },
  {
    "id": "84048315",
    "fips": "48315",
    "county_name": "Marion County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "315",
    "class_fips": "H1"
  },
  {
    "id": "84048317",
    "fips": "48317",
    "county_name": "Martin County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "317",
    "class_fips": "H1"
  },
  {
    "id": "84048319",
    "fips": "48319",
    "county_name": "Mason County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "319",
    "class_fips": "H1"
  },
  {
    "id": "84048321",
    "fips": "48321",
    "county_name": "Matagorda County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "321",
    "class_fips": "H1"
  },
  {
    "id": "84048323",
    "fips": "48323",
    "county_name": "Maverick County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "323",
    "class_fips": "H1"
  },
  {
    "id": "84048325",
    "fips": "48325",
    "county_name": "Medina County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "325",
    "class_fips": "H1"
  },
  {
    "id": "84048327",
    "fips": "48327",
    "county_name": "Menard County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "327",
    "class_fips": "H1"
  },
  {
    "id": "84048329",
    "fips": "48329",
    "county_name": "Midland County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "329",
    "class_fips": "H1"
  },
  {
    "id": "84048331",
    "fips": "48331",
    "county_name": "Milam County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "331",
    "class_fips": "H1"
  },
  {
    "id": "84048333",
    "fips": "48333",
    "county_name": "Mills County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "333",
    "class_fips": "H1"
  },
  {
    "id": "84048335",
    "fips": "48335",
    "county_name": "Mitchell County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "335",
    "class_fips": "H1"
  },
  {
    "id": "84048337",
    "fips": "48337",
    "county_name": "Montague County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "337",
    "class_fips": "H1"
  },
  {
    "id": "84048339",
    "fips": "48339",
    "county_name": "Montgomery County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "339",
    "class_fips": "H1"
  },
  {
    "id": "84048341",
    "fips": "48341",
    "county_name": "Moore County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "341",
    "class_fips": "H1"
  },
  {
    "id": "84048343",
    "fips": "48343",
    "county_name": "Morris County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "343",
    "class_fips": "H1"
  },
  {
    "id": "84048345",
    "fips": "48345",
    "county_name": "Motley County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "345",
    "class_fips": "H1"
  },
  {
    "id": "84048347",
    "fips": "48347",
    "county_name": "Nacogdoches County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "347",
    "class_fips": "H1"
  },
  {
    "id": "84048349",
    "fips": "48349",
    "county_name": "Navarro County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "349",
    "class_fips": "H1"
  },
  {
    "id": "84048351",
    "fips": "48351",
    "county_name": "Newton County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "351",
    "class_fips": "H1"
  },
  {
    "id": "84048353",
    "fips": "48353",
    "county_name": "Nolan County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "353",
    "class_fips": "H1"
  },
  {
    "id": "84048355",
    "fips": "48355",
    "county_name": "Nueces County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "355",
    "class_fips": "H1"
  },
  {
    "id": "84048357",
    "fips": "48357",
    "county_name": "Ochiltree County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "357",
    "class_fips": "H1"
  },
  {
    "id": "84048359",
    "fips": "48359",
    "county_name": "Oldham County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "359",
    "class_fips": "H1"
  },
  {
    "id": "84048361",
    "fips": "48361",
    "county_name": "Orange County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "361",
    "class_fips": "H1"
  },
  {
    "id": "84048363",
    "fips": "48363",
    "county_name": "Palo Pinto County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "363",
    "class_fips": "H1"
  },
  {
    "id": "84048365",
    "fips": "48365",
    "county_name": "Panola County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "365",
    "class_fips": "H1"
  },
  {
    "id": "84048367",
    "fips": "48367",
    "county_name": "Parker County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "367",
    "class_fips": "H1"
  },
  {
    "id": "84048369",
    "fips": "48369",
    "county_name": "Parmer County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "369",
    "class_fips": "H1"
  },
  {
    "id": "84048371",
    "fips": "48371",
    "county_name": "Pecos County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "371",
    "class_fips": "H1"
  },
  {
    "id": "84048373",
    "fips": "48373",
    "county_name": "Polk County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "373",
    "class_fips": "H1"
  },
  {
    "id": "84048375",
    "fips": "48375",
    "county_name": "Potter County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "375",
    "class_fips": "H1"
  },
  {
    "id": "84048377",
    "fips": "48377",
    "county_name": "Presidio County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "377",
    "class_fips": "H1"
  },
  {
    "id": "84048379",
    "fips": "48379",
    "county_name": "Rains County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "379",
    "class_fips": "H1"
  },
  {
    "id": "84048381",
    "fips": "48381",
    "county_name": "Randall County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "381",
    "class_fips": "H1"
  },
  {
    "id": "84048383",
    "fips": "48383",
    "county_name": "Reagan County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "383",
    "class_fips": "H1"
  },
  {
    "id": "84048385",
    "fips": "48385",
    "county_name": "Real County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "385",
    "class_fips": "H1"
  },
  {
    "id": "84048387",
    "fips": "48387",
    "county_name": "Red River County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "387",
    "class_fips": "H1"
  },
  {
    "id": "84048389",
    "fips": "48389",
    "county_name": "Reeves County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "389",
    "class_fips": "H1"
  },
  {
    "id": "84048391",
    "fips": "48391",
    "county_name": "Refugio County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "391",
    "class_fips": "H1"
  },
  {
    "id": "84048393",
    "fips": "48393",
    "county_name": "Roberts County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "393",
    "class_fips": "H1"
  },
  {
    "id": "84048395",
    "fips": "48395",
    "county_name": "Robertson County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "395",
    "class_fips": "H1"
  },
  {
    "id": "84048397",
    "fips": "48397",
    "county_name": "Rockwall County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "397",
    "class_fips": "H1"
  },
  {
    "id": "84048399",
    "fips": "48399",
    "county_name": "Runnels County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "399",
    "class_fips": "H1"
  },
  {
    "id": "84048401",
    "fips": "48401",
    "county_name": "Rusk County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "401",
    "class_fips": "H1"
  },
  {
    "id": "84048403",
    "fips": "48403",
    "county_name": "Sabine County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "403",
    "class_fips": "H1"
  },
  {
    "id": "84048405",
    "fips": "48405",
    "county_name": "San Augustine County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "405",
    "class_fips": "H1"
  },
  {
    "id": "84048407",
    "fips": "48407",
    "county_name": "San Jacinto County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "407",
    "class_fips": "H1"
  },
  {
    "id": "84048409",
    "fips": "48409",
    "county_name": "San Patricio County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "409",
    "class_fips": "H1"
  },
  {
    "id": "84048411",
    "fips": "48411",
    "county_name": "San Saba County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "411",
    "class_fips": "H1"
  },
  {
    "id": "84048413",
    "fips": "48413",
    "county_name": "Schleicher County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "413",
    "class_fips": "H1"
  },
  {
    "id": "84048415",
    "fips": "48415",
    "county_name": "Scurry County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "415",
    "class_fips": "H1"
  },
  {
    "id": "84048417",
    "fips": "48417",
    "county_name": "Shackelford County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "417",
    "class_fips": "H1"
  },
  {
    "id": "84048419",
    "fips": "48419",
    "county_name": "Shelby County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "419",
    "class_fips": "H1"
  },
  {
    "id": "84048421",
    "fips": "48421",
    "county_name": "Sherman County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "421",
    "class_fips": "H1"
  },
  {
    "id": "84048423",
    "fips": "48423",
    "county_name": "Smith County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "423",
    "class_fips": "H1"
  },
  {
    "id": "84048425",
    "fips": "48425",
    "county_name": "Somervell County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "425",
    "class_fips": "H1"
  },
  {
    "id": "84048427",
    "fips": "48427",
    "county_name": "Starr County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "427",
    "class_fips": "H1"
  },
  {
    "id": "84048429",
    "fips": "48429",
    "county_name": "Stephens County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "429",
    "class_fips": "H1"
  },
  {
    "id": "84048431",
    "fips": "48431",
    "county_name": "Sterling County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "431",
    "class_fips": "H1"
  },
  {
    "id": "84048433",
    "fips": "48433",
    "county_name": "Stonewall County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "433",
    "class_fips": "H1"
  },
  {
    "id": "84048435",
    "fips": "48435",
    "county_name": "Sutton County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "435",
    "class_fips": "H1"
  },
  {
    "id": "84048437",
    "fips": "48437",
    "county_name": "Swisher County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "437",
    "class_fips": "H1"
  },
  {
    "id": "84048439",
    "fips": "48439",
    "county_name": "Tarrant County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "439",
    "class_fips": "H1"
  },
  {
    "id": "84048441",
    "fips": "48441",
    "county_name": "Taylor County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "441",
    "class_fips": "H1"
  },
  {
    "id": "84048443",
    "fips": "48443",
    "county_name": "Terrell County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "443",
    "class_fips": "H1"
  },
  {
    "id": "84048445",
    "fips": "48445",
    "county_name": "Terry County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "445",
    "class_fips": "H1"
  },
  {
    "id": "84048447",
    "fips": "48447",
    "county_name": "Throckmorton County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "447",
    "class_fips": "H1"
  },
  {
    "id": "84048449",
    "fips": "48449",
    "county_name": "Titus County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "449",
    "class_fips": "H1"
  },
  {
    "id": "84048451",
    "fips": "48451",
    "county_name": "Tom Green County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "451",
    "class_fips": "H1"
  },
  {
    "id": "84048453",
    "fips": "48453",
    "county_name": "Travis County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "453",
    "class_fips": "H1"
  },
  {
    "id": "84048455",
    "fips": "48455",
    "county_name": "Trinity County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "455",
    "class_fips": "H1"
  },
  {
    "id": "84048457",
    "fips": "48457",
    "county_name": "Tyler County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "457",
    "class_fips": "H1"
  },
  {
    "id": "84048459",
    "fips": "48459",
    "county_name": "Upshur County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "459",
    "class_fips": "H1"
  },
  {
    "id": "84048461",
    "fips": "48461",
    "county_name": "Upton County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "461",
    "class_fips": "H1"
  },
  {
    "id": "84048463",
    "fips": "48463",
    "county_name": "Uvalde County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "463",
    "class_fips": "H1"
  },
  {
    "id": "84048465",
    "fips": "48465",
    "county_name": "Val Verde County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "465",
    "class_fips": "H1"
  },
  {
    "id": "84048467",
    "fips": "48467",
    "county_name": "Van Zandt County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "467",
    "class_fips": "H1"
  },
  {
    "id": "84048469",
    "fips": "48469",
    "county_name": "Victoria County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "469",
    "class_fips": "H1"
  },
  {
    "id": "84048471",
    "fips": "48471",
    "county_name": "Walker County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "471",
    "class_fips": "H1"
  },
  {
    "id": "84048473",
    "fips": "48473",
    "county_name": "Waller County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "473",
    "class_fips": "H1"
  },
  {
    "id": "84048475",
    "fips": "48475",
    "county_name": "Ward County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "475",
    "class_fips": "H1"
  },
  {
    "id": "84048477",
    "fips": "48477",
    "county_name": "Washington County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "477",
    "class_fips": "H1"
  },
  {
    "id": "84048479",
    "fips": "48479",
    "county_name": "Webb County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "479",
    "class_fips": "H1"
  },
  {
    "id": "84048481",
    "fips": "48481",
    "county_name": "Wharton County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "481",
    "class_fips": "H1"
  },
  {
    "id": "84048483",
    "fips": "48483",
    "county_name": "Wheeler County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "483",
    "class_fips": "H1"
  },
  {
    "id": "84048485",
    "fips": "48485",
    "county_name": "Wichita County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "485",
    "class_fips": "H1"
  },
  {
    "id": "84048487",
    "fips": "48487",
    "county_name": "Wilbarger County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "487",
    "class_fips": "H1"
  },
  {
    "id": "84048489",
    "fips": "48489",
    "county_name": "Willacy County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "489",
    "class_fips": "H1"
  },
  {
    "id": "84048491",
    "fips": "48491",
    "county_name": "Williamson County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "491",
    "class_fips": "H1"
  },
  {
    "id": "84048493",
    "fips": "48493",
    "county_name": "Wilson County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "493",
    "class_fips": "H1"
  },
  {
    "id": "84048495",
    "fips": "48495",
    "county_name": "Winkler County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "495",
    "class_fips": "H1"
  },
  {
    "id": "84048497",
    "fips": "48497",
    "county_name": "Wise County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "497",
    "class_fips": "H1"
  },
  {
    "id": "84048499",
    "fips": "48499",
    "county_name": "Wood County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "499",
    "class_fips": "H1"
  },
  {
    "id": "84048501",
    "fips": "48501",
    "county_name": "Yoakum County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "501",
    "class_fips": "H1"
  },
  {
    "id": "84048503",
    "fips": "48503",
    "county_name": "Young County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "503",
    "class_fips": "H1"
  },
  {
    "id": "84048505",
    "fips": "48505",
    "county_name": "Zapata County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "505",
    "class_fips": "H1"
  },
  {
    "id": "84048507",
    "fips": "48507",
    "county_name": "Zavala County",
    "state_code": "TX",
    "state_fips": "48",
    "county_fips": "507",
    "class_fips": "H1"
  },
  {
    "id": "84049001",
    "fips": "49001",
    "county_name": "Beaver County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84049003",
    "fips": "49003",
    "county_name": "Box Elder County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84049005",
    "fips": "49005",
    "county_name": "Cache County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84049007",
    "fips": "49007",
    "county_name": "Carbon County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84049009",
    "fips": "49009",
    "county_name": "Daggett County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84049011",
    "fips": "49011",
    "county_name": "Davis County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84049013",
    "fips": "49013",
    "county_name": "Duchesne County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84049015",
    "fips": "49015",
    "county_name": "Emery County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84049017",
    "fips": "49017",
    "county_name": "Garfield County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84049019",
    "fips": "49019",
    "county_name": "Grand County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84049021",
    "fips": "49021",
    "county_name": "Iron County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84049023",
    "fips": "49023",
    "county_name": "Juab County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84049025",
    "fips": "49025",
    "county_name": "Kane County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84049027",
    "fips": "49027",
    "county_name": "Millard County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84049029",
    "fips": "49029",
    "county_name": "Morgan County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84049031",
    "fips": "49031",
    "county_name": "Piute County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84049033",
    "fips": "49033",
    "county_name": "Rich County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84049035",
    "fips": "49035",
    "county_name": "Salt Lake County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84049037",
    "fips": "49037",
    "county_name": "San Juan County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84049039",
    "fips": "49039",
    "county_name": "Sanpete County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84049041",
    "fips": "49041",
    "county_name": "Sevier County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84049043",
    "fips": "49043",
    "county_name": "Summit County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84049045",
    "fips": "49045",
    "county_name": "Tooele County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84049047",
    "fips": "49047",
    "county_name": "Uintah County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84049049",
    "fips": "49049",
    "county_name": "Utah County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84049051",
    "fips": "49051",
    "county_name": "Wasatch County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84049053",
    "fips": "49053",
    "county_name": "Washington County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84049055",
    "fips": "49055",
    "county_name": "Wayne County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84049057",
    "fips": "49057",
    "county_name": "Weber County",
    "state_code": "UT",
    "state_fips": "49",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84050001",
    "fips": "50001",
    "county_name": "Addison County",
    "state_code": "VT",
    "state_fips": "50",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84050003",
    "fips": "50003",
    "county_name": "Bennington County",
    "state_code": "VT",
    "state_fips": "50",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84050005",
    "fips": "50005",
    "county_name": "Caledonia County",
    "state_code": "VT",
    "state_fips": "50",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84050007",
    "fips": "50007",
    "county_name": "Chittenden County",
    "state_code": "VT",
    "state_fips": "50",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84050009",
    "fips": "50009",
    "county_name": "Essex County",
    "state_code": "VT",
    "state_fips": "50",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84050011",
    "fips": "50011",
    "county_name": "Franklin County",
    "state_code": "VT",
    "state_fips": "50",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84050013",
    "fips": "50013",
    "county_name": "Grand Isle County",
    "state_code": "VT",
    "state_fips": "50",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84050015",
    "fips": "50015",
    "county_name": "Lamoille County",
    "state_code": "VT",
    "state_fips": "50",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84050017",
    "fips": "50017",
    "county_name": "Orange County",
    "state_code": "VT",
    "state_fips": "50",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84050019",
    "fips": "50019",
    "county_name": "Orleans County",
    "state_code": "VT",
    "state_fips": "50",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84050021",
    "fips": "50021",
    "county_name": "Rutland County",
    "state_code": "VT",
    "state_fips": "50",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84050023",
    "fips": "50023",
    "county_name": "Washington County",
    "state_code": "VT",
    "state_fips": "50",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84050025",
    "fips": "50025",
    "county_name": "Windham County",
    "state_code": "VT",
    "state_fips": "50",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84050027",
    "fips": "50027",
    "county_name": "Windsor County",
    "state_code": "VT",
    "state_fips": "50",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84051001",
    "fips": "51001",
    "county_name": "Accomack County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84051003",
    "fips": "51003",
    "county_name": "Albemarle County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84051005",
    "fips": "51005",
    "county_name": "Alleghany County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84051007",
    "fips": "51007",
    "county_name": "Amelia County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84051009",
    "fips": "51009",
    "county_name": "Amherst County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84051011",
    "fips": "51011",
    "county_name": "Appomattox County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84051013",
    "fips": "51013",
    "county_name": "Arlington County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84051015",
    "fips": "51015",
    "county_name": "Augusta County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84051017",
    "fips": "51017",
    "county_name": "Bath County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84051019",
    "fips": "51019",
    "county_name": "Bedford County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84051021",
    "fips": "51021",
    "county_name": "Bland County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84051023",
    "fips": "51023",
    "county_name": "Botetourt County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84051025",
    "fips": "51025",
    "county_name": "Brunswick County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84051027",
    "fips": "51027",
    "county_name": "Buchanan County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84051029",
    "fips": "51029",
    "county_name": "Buckingham County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84051031",
    "fips": "51031",
    "county_name": "Campbell County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84051033",
    "fips": "51033",
    "county_name": "Caroline County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84051035",
    "fips": "51035",
    "county_name": "Carroll County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84051036",
    "fips": "51036",
    "county_name": "Charles City County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "036",
    "class_fips": "H1"
  },
  {
    "id": "84051037",
    "fips": "51037",
    "county_name": "Charlotte County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84051041",
    "fips": "51041",
    "county_name": "Chesterfield County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84051043",
    "fips": "51043",
    "county_name": "Clarke County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84051045",
    "fips": "51045",
    "county_name": "Craig County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84051047",
    "fips": "51047",
    "county_name": "Culpeper County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84051049",
    "fips": "51049",
    "county_name": "Cumberland County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84051051",
    "fips": "51051",
    "county_name": "Dickenson County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84051053",
    "fips": "51053",
    "county_name": "Dinwiddie County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84051057",
    "fips": "51057",
    "county_name": "Essex County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84051059",
    "fips": "51059",
    "county_name": "Fairfax County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84051061",
    "fips": "51061",
    "county_name": "Fauquier County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84051063",
    "fips": "51063",
    "county_name": "Floyd County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84051065",
    "fips": "51065",
    "county_name": "Fluvanna County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84051067",
    "fips": "51067",
    "county_name": "Franklin County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84051069",
    "fips": "51069",
    "county_name": "Frederick County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84051071",
    "fips": "51071",
    "county_name": "Giles County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84051073",
    "fips": "51073",
    "county_name": "Gloucester County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84051075",
    "fips": "51075",
    "county_name": "Goochland County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84051077",
    "fips": "51077",
    "county_name": "Grayson County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84051079",
    "fips": "51079",
    "county_name": "Greene County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84051081",
    "fips": "51081",
    "county_name": "Greensville County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "081",
    "class_fips": "H1"
  },
  {
    "id": "84051083",
    "fips": "51083",
    "county_name": "Halifax County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84051085",
    "fips": "51085",
    "county_name": "Hanover County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "085",
    "class_fips": "H1"
  },
  {
    "id": "84051087",
    "fips": "51087",
    "county_name": "Henrico County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84051089",
    "fips": "51089",
    "county_name": "Henry County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "089",
    "class_fips": "H1"
  },
  {
    "id": "84051091",
    "fips": "51091",
    "county_name": "Highland County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "091",
    "class_fips": "H1"
  },
  {
    "id": "84051093",
    "fips": "51093",
    "county_name": "Isle of Wight County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "093",
    "class_fips": "H1"
  },
  {
    "id": "84051095",
    "fips": "51095",
    "county_name": "James City County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "095",
    "class_fips": "H1"
  },
  {
    "id": "84051097",
    "fips": "51097",
    "county_name": "King and Queen County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "097",
    "class_fips": "H1"
  },
  {
    "id": "84051099",
    "fips": "51099",
    "county_name": "King George County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "099",
    "class_fips": "H1"
  },
  {
    "id": "84051101",
    "fips": "51101",
    "county_name": "King William County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "101",
    "class_fips": "H1"
  },
  {
    "id": "84051103",
    "fips": "51103",
    "county_name": "Lancaster County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "103",
    "class_fips": "H1"
  },
  {
    "id": "84051105",
    "fips": "51105",
    "county_name": "Lee County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "105",
    "class_fips": "H1"
  },
  {
    "id": "84051107",
    "fips": "51107",
    "county_name": "Loudoun County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "107",
    "class_fips": "H1"
  },
  {
    "id": "84051109",
    "fips": "51109",
    "county_name": "Louisa County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "109",
    "class_fips": "H1"
  },
  {
    "id": "84051111",
    "fips": "51111",
    "county_name": "Lunenburg County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "111",
    "class_fips": "H1"
  },
  {
    "id": "84051113",
    "fips": "51113",
    "county_name": "Madison County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "113",
    "class_fips": "H1"
  },
  {
    "id": "84051115",
    "fips": "51115",
    "county_name": "Mathews County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "115",
    "class_fips": "H1"
  },
  {
    "id": "84051117",
    "fips": "51117",
    "county_name": "Mecklenburg County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "117",
    "class_fips": "H1"
  },
  {
    "id": "84051119",
    "fips": "51119",
    "county_name": "Middlesex County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "119",
    "class_fips": "H1"
  },
  {
    "id": "84051121",
    "fips": "51121",
    "county_name": "Montgomery County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "121",
    "class_fips": "H1"
  },
  {
    "id": "84051125",
    "fips": "51125",
    "county_name": "Nelson County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "125",
    "class_fips": "H1"
  },
  {
    "id": "84051127",
    "fips": "51127",
    "county_name": "New Kent County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "127",
    "class_fips": "H1"
  },
  {
    "id": "84051131",
    "fips": "51131",
    "county_name": "Northampton County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "131",
    "class_fips": "H1"
  },
  {
    "id": "84051133",
    "fips": "51133",
    "county_name": "Northumberland County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "133",
    "class_fips": "H1"
  },
  {
    "id": "84051135",
    "fips": "51135",
    "county_name": "Nottoway County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "135",
    "class_fips": "H1"
  },
  {
    "id": "84051137",
    "fips": "51137",
    "county_name": "Orange County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "137",
    "class_fips": "H1"
  },
  {
    "id": "84051139",
    "fips": "51139",
    "county_name": "Page County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "139",
    "class_fips": "H1"
  },
  {
    "id": "84051141",
    "fips": "51141",
    "county_name": "Patrick County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "141",
    "class_fips": "H1"
  },
  {
    "id": "84051143",
    "fips": "51143",
    "county_name": "Pittsylvania County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "143",
    "class_fips": "H1"
  },
  {
    "id": "84051145",
    "fips": "51145",
    "county_name": "Powhatan County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "145",
    "class_fips": "H1"
  },
  {
    "id": "84051147",
    "fips": "51147",
    "county_name": "Prince Edward County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "147",
    "class_fips": "H1"
  },
  {
    "id": "84051149",
    "fips": "51149",
    "county_name": "Prince George County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "149",
    "class_fips": "H1"
  },
  {
    "id": "84051153",
    "fips": "51153",
    "county_name": "Prince William County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "153",
    "class_fips": "H1"
  },
  {
    "id": "84051155",
    "fips": "51155",
    "county_name": "Pulaski County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "155",
    "class_fips": "H1"
  },
  {
    "id": "84051157",
    "fips": "51157",
    "county_name": "Rappahannock County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "157",
    "class_fips": "H1"
  },
  {
    "id": "84051159",
    "fips": "51159",
    "county_name": "Richmond County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "159",
    "class_fips": "H1"
  },
  {
    "id": "84051161",
    "fips": "51161",
    "county_name": "Roanoke County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "161",
    "class_fips": "H1"
  },
  {
    "id": "84051163",
    "fips": "51163",
    "county_name": "Rockbridge County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "163",
    "class_fips": "H1"
  },
  {
    "id": "84051165",
    "fips": "51165",
    "county_name": "Rockingham County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "165",
    "class_fips": "H1"
  },
  {
    "id": "84051167",
    "fips": "51167",
    "county_name": "Russell County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "167",
    "class_fips": "H1"
  },
  {
    "id": "84051169",
    "fips": "51169",
    "county_name": "Scott County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "169",
    "class_fips": "H1"
  },
  {
    "id": "84051171",
    "fips": "51171",
    "county_name": "Shenandoah County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "171",
    "class_fips": "H1"
  },
  {
    "id": "84051173",
    "fips": "51173",
    "county_name": "Smyth County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "173",
    "class_fips": "H1"
  },
  {
    "id": "84051175",
    "fips": "51175",
    "county_name": "Southampton County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "175",
    "class_fips": "H1"
  },
  {
    "id": "84051177",
    "fips": "51177",
    "county_name": "Spotsylvania County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "177",
    "class_fips": "H1"
  },
  {
    "id": "84051179",
    "fips": "51179",
    "county_name": "Stafford County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "179",
    "class_fips": "H1"
  },
  {
    "id": "84051181",
    "fips": "51181",
    "county_name": "Surry County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "181",
    "class_fips": "H1"
  },
  {
    "id": "84051183",
    "fips": "51183",
    "county_name": "Sussex County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "183",
    "class_fips": "H1"
  },
  {
    "id": "84051185",
    "fips": "51185",
    "county_name": "Tazewell County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "185",
    "class_fips": "H1"
  },
  {
    "id": "84051187",
    "fips": "51187",
    "county_name": "Warren County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "187",
    "class_fips": "H1"
  },
  {
    "id": "84051191",
    "fips": "51191",
    "county_name": "Washington County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "191",
    "class_fips": "H1"
  },
  {
    "id": "84051193",
    "fips": "51193",
    "county_name": "Westmoreland County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "193",
    "class_fips": "H1"
  },
  {
    "id": "84051195",
    "fips": "51195",
    "county_name": "Wise County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "195",
    "class_fips": "H1"
  },
  {
    "id": "84051197",
    "fips": "51197",
    "county_name": "Wythe County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "197",
    "class_fips": "H1"
  },
  {
    "id": "84051199",
    "fips": "51199",
    "county_name": "York County",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "199",
    "class_fips": "H1"
  },
  {
    "id": "84051510",
    "fips": "51510",
    "county_name": "Alexandria city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "510",
    "class_fips": "C7"
  },
  {
    "id": "84051520",
    "fips": "51520",
    "county_name": "Bristol city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "520",
    "class_fips": "C7"
  },
  {
    "id": "84051530",
    "fips": "51530",
    "county_name": "Buena Vista city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "530",
    "class_fips": "C7"
  },
  {
    "id": "84051540",
    "fips": "51540",
    "county_name": "Charlottesville city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "540",
    "class_fips": "C7"
  },
  {
    "id": "84051550",
    "fips": "51550",
    "county_name": "Chesapeake city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "550",
    "class_fips": "C7"
  },
  {
    "id": "84051570",
    "fips": "51570",
    "county_name": "Colonial Heights city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "570",
    "class_fips": "C7"
  },
  {
    "id": "84051580",
    "fips": "51580",
    "county_name": "Covington city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "580",
    "class_fips": "C7"
  },
  {
    "id": "84051590",
    "fips": "51590",
    "county_name": "Danville city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "590",
    "class_fips": "C7"
  },
  {
    "id": "84051595",
    "fips": "51595",
    "county_name": "Emporia city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "595",
    "class_fips": "C7"
  },
  {
    "id": "84051600",
    "fips": "51600",
    "county_name": "Fairfax city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "600",
    "class_fips": "C7"
  },
  {
    "id": "84051610",
    "fips": "51610",
    "county_name": "Falls Church city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "610",
    "class_fips": "C7"
  },
  {
    "id": "84051620",
    "fips": "51620",
    "county_name": "Franklin city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "620",
    "class_fips": "C7"
  },
  {
    "id": "84051630",
    "fips": "51630",
    "county_name": "Fredericksburg city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "630",
    "class_fips": "C7"
  },
  {
    "id": "84051640",
    "fips": "51640",
    "county_name": "Galax city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "640",
    "class_fips": "C7"
  },
  {
    "id": "84051650",
    "fips": "51650",
    "county_name": "Hampton city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "650",
    "class_fips": "C7"
  },
  {
    "id": "84051660",
    "fips": "51660",
    "county_name": "Harrisonburg city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "660",
    "class_fips": "C7"
  },
  {
    "id": "84051670",
    "fips": "51670",
    "county_name": "Hopewell city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "670",
    "class_fips": "C7"
  },
  {
    "id": "84051678",
    "fips": "51678",
    "county_name": "Lexington city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "678",
    "class_fips": "C7"
  },
  {
    "id": "84051680",
    "fips": "51680",
    "county_name": "Lynchburg city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "680",
    "class_fips": "C7"
  },
  {
    "id": "84051683",
    "fips": "51683",
    "county_name": "Manassas city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "683",
    "class_fips": "C7"
  },
  {
    "id": "84051685",
    "fips": "51685",
    "county_name": "Manassas Park city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "685",
    "class_fips": "C7"
  },
  {
    "id": "84051690",
    "fips": "51690",
    "county_name": "Martinsville city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "690",
    "class_fips": "C7"
  },
  {
    "id": "84051700",
    "fips": "51700",
    "county_name": "Newport News city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "700",
    "class_fips": "C7"
  },
  {
    "id": "84051710",
    "fips": "51710",
    "county_name": "Norfolk city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "710",
    "class_fips": "C7"
  },
  {
    "id": "84051720",
    "fips": "51720",
    "county_name": "Norton city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "720",
    "class_fips": "C7"
  },
  {
    "id": "84051730",
    "fips": "51730",
    "county_name": "Petersburg city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "730",
    "class_fips": "C7"
  },
  {
    "id": "84051735",
    "fips": "51735",
    "county_name": "Poquoson city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "735",
    "class_fips": "C7"
  },
  {
    "id": "84051740",
    "fips": "51740",
    "county_name": "Portsmouth city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "740",
    "class_fips": "C7"
  },
  {
    "id": "84051750",
    "fips": "51750",
    "county_name": "Radford city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "750",
    "class_fips": "C7"
  },
  {
    "id": "84051760",
    "fips": "51760",
    "county_name": "Richmond city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "760",
    "class_fips": "C7"
  },
  {
    "id": "84051770",
    "fips": "51770",
    "county_name": "Roanoke city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "770",
    "class_fips": "C7"
  },
  {
    "id": "84051775",
    "fips": "51775",
    "county_name": "Salem city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "775",
    "class_fips": "C7"
  },
  {
    "id": "84051790",
    "fips": "51790",
    "county_name": "Staunton city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "790",
    "class_fips": "C7"
  },
  {
    "id": "84051800",
    "fips": "51800",
    "county_name": "Suffolk city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "800",
    "class_fips": "C7"
  },
  {
    "id": "84051810",
    "fips": "51810",
    "county_name": "Virginia Beach city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "810",
    "class_fips": "C7"
  },
  {
    "id": "84051820",
    "fips": "51820",
    "county_name": "Waynesboro city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "820",
    "class_fips": "C7"
  },
  {
    "id": "84051830",
    "fips": "51830",
    "county_name": "Williamsburg city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "830",
    "class_fips": "C7"
  },
  {
    "id": "84051840",
    "fips": "51840",
    "county_name": "Winchester city",
    "state_code": "VA",
    "state_fips": "51",
    "county_fips": "840",
    "class_fips": "C7"
  },
  {
    "id": "84053001",
    "fips": "53001",
    "county_name": "Adams County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84053003",
    "fips": "53003",
    "county_name": "Asotin County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84053005",
    "fips": "53005",
    "county_name": "Benton County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84053007",
    "fips": "53007",
    "county_name": "Chelan County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84053009",
    "fips": "53009",
    "county_name": "Clallam County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84053011",
    "fips": "53011",
    "county_name": "Clark County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84053013",
    "fips": "53013",
    "county_name": "Columbia County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84053015",
    "fips": "53015",
    "county_name": "Cowlitz County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84053017",
    "fips": "53017",
    "county_name": "Douglas County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84053019",
    "fips": "53019",
    "county_name": "Ferry County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84053021",
    "fips": "53021",
    "county_name": "Franklin County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84053023",
    "fips": "53023",
    "county_name": "Garfield County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84053025",
    "fips": "53025",
    "county_name": "Grant County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84053027",
    "fips": "53027",
    "county_name": "Grays Harbor County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84053029",
    "fips": "53029",
    "county_name": "Island County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84053031",
    "fips": "53031",
    "county_name": "Jefferson County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84053033",
    "fips": "53033",
    "county_name": "King County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84053035",
    "fips": "53035",
    "county_name": "Kitsap County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84053037",
    "fips": "53037",
    "county_name": "Kittitas County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84053039",
    "fips": "53039",
    "county_name": "Klickitat County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84053041",
    "fips": "53041",
    "county_name": "Lewis County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84053043",
    "fips": "53043",
    "county_name": "Lincoln County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84053045",
    "fips": "53045",
    "county_name": "Mason County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84053047",
    "fips": "53047",
    "county_name": "Okanogan County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84053049",
    "fips": "53049",
    "county_name": "Pacific County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84053051",
    "fips": "53051",
    "county_name": "Pend Oreille County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84053053",
    "fips": "53053",
    "county_name": "Pierce County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84053055",
    "fips": "53055",
    "county_name": "San Juan County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84053057",
    "fips": "53057",
    "county_name": "Skagit County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84053059",
    "fips": "53059",
    "county_name": "Skamania County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84053061",
    "fips": "53061",
    "county_name": "Snohomish County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84053063",
    "fips": "53063",
    "county_name": "Spokane County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84053065",
    "fips": "53065",
    "county_name": "Stevens County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84053067",
    "fips": "53067",
    "county_name": "Thurston County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84053069",
    "fips": "53069",
    "county_name": "Wahkiakum County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84053071",
    "fips": "53071",
    "county_name": "Walla Walla County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84053073",
    "fips": "53073",
    "county_name": "Whatcom County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84053075",
    "fips": "53075",
    "county_name": "Whitman County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84053077",
    "fips": "53077",
    "county_name": "Yakima County",
    "state_code": "WA",
    "state_fips": "53",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84054001",
    "fips": "54001",
    "county_name": "Barbour County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84054003",
    "fips": "54003",
    "county_name": "Berkeley County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84054005",
    "fips": "54005",
    "county_name": "Boone County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84054007",
    "fips": "54007",
    "county_name": "Braxton County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84054009",
    "fips": "54009",
    "county_name": "Brooke County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84054011",
    "fips": "54011",
    "county_name": "Cabell County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84054013",
    "fips": "54013",
    "county_name": "Calhoun County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84054015",
    "fips": "54015",
    "county_name": "Clay County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84054017",
    "fips": "54017",
    "county_name": "Doddridge County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84054019",
    "fips": "54019",
    "county_name": "Fayette County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84054021",
    "fips": "54021",
    "county_name": "Gilmer County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84054023",
    "fips": "54023",
    "county_name": "Grant County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84054025",
    "fips": "54025",
    "county_name": "Greenbrier County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84054027",
    "fips": "54027",
    "county_name": "Hampshire County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84054029",
    "fips": "54029",
    "county_name": "Hancock County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84054031",
    "fips": "54031",
    "county_name": "Hardy County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84054033",
    "fips": "54033",
    "county_name": "Harrison County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84054035",
    "fips": "54035",
    "county_name": "Jackson County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84054037",
    "fips": "54037",
    "county_name": "Jefferson County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84054039",
    "fips": "54039",
    "county_name": "Kanawha County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84054041",
    "fips": "54041",
    "county_name": "Lewis County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84054043",
    "fips": "54043",
    "county_name": "Lincoln County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84054045",
    "fips": "54045",
    "county_name": "Logan County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84054047",
    "fips": "54047",
    "county_name": "McDowell County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84054049",
    "fips": "54049",
    "county_name": "Marion County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84054051",
    "fips": "54051",
    "county_name": "Marshall County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84054053",
    "fips": "54053",
    "county_name": "Mason County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84054055",
    "fips": "54055",
    "county_name": "Mercer County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84054057",
    "fips": "54057",
    "county_name": "Mineral County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84054059",
    "fips": "54059",
    "county_name": "Mingo County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84054061",
    "fips": "54061",
    "county_name": "Monongalia County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84054063",
    "fips": "54063",
    "county_name": "Monroe County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84054065",
    "fips": "54065",
    "county_name": "Morgan County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84054067",
    "fips": "54067",
    "county_name": "Nicholas County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84054069",
    "fips": "54069",
    "county_name": "Ohio County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84054071",
    "fips": "54071",
    "county_name": "Pendleton County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84054073",
    "fips": "54073",
    "county_name": "Pleasants County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84054075",
    "fips": "54075",
    "county_name": "Pocahontas County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84054077",
    "fips": "54077",
    "county_name": "Preston County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84054079",
    "fips": "54079",
    "county_name": "Putnam County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84054081",
    "fips": "54081",
    "county_name": "Raleigh County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "081",
    "class_fips": "H1"
  },
  {
    "id": "84054083",
    "fips": "54083",
    "county_name": "Randolph County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84054085",
    "fips": "54085",
    "county_name": "Ritchie County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "085",
    "class_fips": "H1"
  },
  {
    "id": "84054087",
    "fips": "54087",
    "county_name": "Roane County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84054089",
    "fips": "54089",
    "county_name": "Summers County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "089",
    "class_fips": "H1"
  },
  {
    "id": "84054091",
    "fips": "54091",
    "county_name": "Taylor County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "091",
    "class_fips": "H1"
  },
  {
    "id": "84054093",
    "fips": "54093",
    "county_name": "Tucker County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "093",
    "class_fips": "H1"
  },
  {
    "id": "84054095",
    "fips": "54095",
    "county_name": "Tyler County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "095",
    "class_fips": "H1"
  },
  {
    "id": "84054097",
    "fips": "54097",
    "county_name": "Upshur County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "097",
    "class_fips": "H1"
  },
  {
    "id": "84054099",
    "fips": "54099",
    "county_name": "Wayne County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "099",
    "class_fips": "H1"
  },
  {
    "id": "84054101",
    "fips": "54101",
    "county_name": "Webster County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "101",
    "class_fips": "H1"
  },
  {
    "id": "84054103",
    "fips": "54103",
    "county_name": "Wetzel County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "103",
    "class_fips": "H1"
  },
  {
    "id": "84054105",
    "fips": "54105",
    "county_name": "Wirt County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "105",
    "class_fips": "H1"
  },
  {
    "id": "84054107",
    "fips": "54107",
    "county_name": "Wood County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "107",
    "class_fips": "H1"
  },
  {
    "id": "84054109",
    "fips": "54109",
    "county_name": "Wyoming County",
    "state_code": "WV",
    "state_fips": "54",
    "county_fips": "109",
    "class_fips": "H1"
  },
  {
    "id": "84055001",
    "fips": "55001",
    "county_name": "Adams County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84055003",
    "fips": "55003",
    "county_name": "Ashland County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84055005",
    "fips": "55005",
    "county_name": "Barron County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84055007",
    "fips": "55007",
    "county_name": "Bayfield County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84055009",
    "fips": "55009",
    "county_name": "Brown County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84055011",
    "fips": "55011",
    "county_name": "Buffalo County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84055013",
    "fips": "55013",
    "county_name": "Burnett County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84055015",
    "fips": "55015",
    "county_name": "Calumet County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84055017",
    "fips": "55017",
    "county_name": "Chippewa County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84055019",
    "fips": "55019",
    "county_name": "Clark County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84055021",
    "fips": "55021",
    "county_name": "Columbia County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84055023",
    "fips": "55023",
    "county_name": "Crawford County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84055025",
    "fips": "55025",
    "county_name": "Dane County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84055027",
    "fips": "55027",
    "county_name": "Dodge County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84055029",
    "fips": "55029",
    "county_name": "Door County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84055031",
    "fips": "55031",
    "county_name": "Douglas County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84055033",
    "fips": "55033",
    "county_name": "Dunn County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84055035",
    "fips": "55035",
    "county_name": "Eau Claire County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84055037",
    "fips": "55037",
    "county_name": "Florence County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84055039",
    "fips": "55039",
    "county_name": "Fond du Lac County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84055041",
    "fips": "55041",
    "county_name": "Forest County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84055043",
    "fips": "55043",
    "county_name": "Grant County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84055045",
    "fips": "55045",
    "county_name": "Green County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "045",
    "class_fips": "H1"
  },
  {
    "id": "84055047",
    "fips": "55047",
    "county_name": "Green Lake County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "047",
    "class_fips": "H1"
  },
  {
    "id": "84055049",
    "fips": "55049",
    "county_name": "Iowa County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "049",
    "class_fips": "H1"
  },
  {
    "id": "84055051",
    "fips": "55051",
    "county_name": "Iron County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "051",
    "class_fips": "H1"
  },
  {
    "id": "84055053",
    "fips": "55053",
    "county_name": "Jackson County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "053",
    "class_fips": "H1"
  },
  {
    "id": "84055055",
    "fips": "55055",
    "county_name": "Jefferson County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "055",
    "class_fips": "H1"
  },
  {
    "id": "84055057",
    "fips": "55057",
    "county_name": "Juneau County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "057",
    "class_fips": "H1"
  },
  {
    "id": "84055059",
    "fips": "55059",
    "county_name": "Kenosha County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "059",
    "class_fips": "H1"
  },
  {
    "id": "84055061",
    "fips": "55061",
    "county_name": "Kewaunee County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "061",
    "class_fips": "H1"
  },
  {
    "id": "84055063",
    "fips": "55063",
    "county_name": "La Crosse County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "063",
    "class_fips": "H1"
  },
  {
    "id": "84055065",
    "fips": "55065",
    "county_name": "Lafayette County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "065",
    "class_fips": "H1"
  },
  {
    "id": "84055067",
    "fips": "55067",
    "county_name": "Langlade County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "067",
    "class_fips": "H1"
  },
  {
    "id": "84055069",
    "fips": "55069",
    "county_name": "Lincoln County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "069",
    "class_fips": "H1"
  },
  {
    "id": "84055071",
    "fips": "55071",
    "county_name": "Manitowoc County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "071",
    "class_fips": "H1"
  },
  {
    "id": "84055073",
    "fips": "55073",
    "county_name": "Marathon County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "073",
    "class_fips": "H1"
  },
  {
    "id": "84055075",
    "fips": "55075",
    "county_name": "Marinette County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "075",
    "class_fips": "H1"
  },
  {
    "id": "84055077",
    "fips": "55077",
    "county_name": "Marquette County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "077",
    "class_fips": "H1"
  },
  {
    "id": "84055078",
    "fips": "55078",
    "county_name": "Menominee County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "078",
    "class_fips": "H1"
  },
  {
    "id": "84055079",
    "fips": "55079",
    "county_name": "Milwaukee County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "079",
    "class_fips": "H1"
  },
  {
    "id": "84055081",
    "fips": "55081",
    "county_name": "Monroe County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "081",
    "class_fips": "H1"
  },
  {
    "id": "84055083",
    "fips": "55083",
    "county_name": "Oconto County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "083",
    "class_fips": "H1"
  },
  {
    "id": "84055085",
    "fips": "55085",
    "county_name": "Oneida County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "085",
    "class_fips": "H1"
  },
  {
    "id": "84055087",
    "fips": "55087",
    "county_name": "Outagamie County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "087",
    "class_fips": "H1"
  },
  {
    "id": "84055089",
    "fips": "55089",
    "county_name": "Ozaukee County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "089",
    "class_fips": "H1"
  },
  {
    "id": "84055091",
    "fips": "55091",
    "county_name": "Pepin County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "091",
    "class_fips": "H1"
  },
  {
    "id": "84055093",
    "fips": "55093",
    "county_name": "Pierce County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "093",
    "class_fips": "H1"
  },
  {
    "id": "84055095",
    "fips": "55095",
    "county_name": "Polk County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "095",
    "class_fips": "H1"
  },
  {
    "id": "84055097",
    "fips": "55097",
    "county_name": "Portage County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "097",
    "class_fips": "H1"
  },
  {
    "id": "84055099",
    "fips": "55099",
    "county_name": "Price County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "099",
    "class_fips": "H1"
  },
  {
    "id": "84055101",
    "fips": "55101",
    "county_name": "Racine County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "101",
    "class_fips": "H1"
  },
  {
    "id": "84055103",
    "fips": "55103",
    "county_name": "Richland County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "103",
    "class_fips": "H1"
  },
  {
    "id": "84055105",
    "fips": "55105",
    "county_name": "Rock County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "105",
    "class_fips": "H1"
  },
  {
    "id": "84055107",
    "fips": "55107",
    "county_name": "Rusk County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "107",
    "class_fips": "H1"
  },
  {
    "id": "84055109",
    "fips": "55109",
    "county_name": "St. Croix County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "109",
    "class_fips": "H1"
  },
  {
    "id": "84055111",
    "fips": "55111",
    "county_name": "Sauk County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "111",
    "class_fips": "H1"
  },
  {
    "id": "84055113",
    "fips": "55113",
    "county_name": "Sawyer County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "113",
    "class_fips": "H1"
  },
  {
    "id": "84055115",
    "fips": "55115",
    "county_name": "Shawano County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "115",
    "class_fips": "H1"
  },
  {
    "id": "84055117",
    "fips": "55117",
    "county_name": "Sheboygan County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "117",
    "class_fips": "H1"
  },
  {
    "id": "84055119",
    "fips": "55119",
    "county_name": "Taylor County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "119",
    "class_fips": "H1"
  },
  {
    "id": "84055121",
    "fips": "55121",
    "county_name": "Trempealeau County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "121",
    "class_fips": "H1"
  },
  {
    "id": "84055123",
    "fips": "55123",
    "county_name": "Vernon County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "123",
    "class_fips": "H1"
  },
  {
    "id": "84055125",
    "fips": "55125",
    "county_name": "Vilas County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "125",
    "class_fips": "H1"
  },
  {
    "id": "84055127",
    "fips": "55127",
    "county_name": "Walworth County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "127",
    "class_fips": "H1"
  },
  {
    "id": "84055129",
    "fips": "55129",
    "county_name": "Washburn County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "129",
    "class_fips": "H1"
  },
  {
    "id": "84055131",
    "fips": "55131",
    "county_name": "Washington County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "131",
    "class_fips": "H1"
  },
  {
    "id": "84055133",
    "fips": "55133",
    "county_name": "Waukesha County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "133",
    "class_fips": "H1"
  },
  {
    "id": "84055135",
    "fips": "55135",
    "county_name": "Waupaca County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "135",
    "class_fips": "H1"
  },
  {
    "id": "84055137",
    "fips": "55137",
    "county_name": "Waushara County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "137",
    "class_fips": "H1"
  },
  {
    "id": "84055139",
    "fips": "55139",
    "county_name": "Winnebago County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "139",
    "class_fips": "H1"
  },
  {
    "id": "84055141",
    "fips": "55141",
    "county_name": "Wood County",
    "state_code": "WI",
    "state_fips": "55",
    "county_fips": "141",
    "class_fips": "H1"
  },
  {
    "id": "84056001",
    "fips": "56001",
    "county_name": "Albany County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "001",
    "class_fips": "H1"
  },
  {
    "id": "84056003",
    "fips": "56003",
    "county_name": "Big Horn County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "003",
    "class_fips": "H1"
  },
  {
    "id": "84056005",
    "fips": "56005",
    "county_name": "Campbell County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "005",
    "class_fips": "H1"
  },
  {
    "id": "84056007",
    "fips": "56007",
    "county_name": "Carbon County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "007",
    "class_fips": "H1"
  },
  {
    "id": "84056009",
    "fips": "56009",
    "county_name": "Converse County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "009",
    "class_fips": "H1"
  },
  {
    "id": "84056011",
    "fips": "56011",
    "county_name": "Crook County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "011",
    "class_fips": "H1"
  },
  {
    "id": "84056013",
    "fips": "56013",
    "county_name": "Fremont County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "013",
    "class_fips": "H1"
  },
  {
    "id": "84056015",
    "fips": "56015",
    "county_name": "Goshen County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "015",
    "class_fips": "H1"
  },
  {
    "id": "84056017",
    "fips": "56017",
    "county_name": "Hot Springs County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "017",
    "class_fips": "H1"
  },
  {
    "id": "84056019",
    "fips": "56019",
    "county_name": "Johnson County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "019",
    "class_fips": "H1"
  },
  {
    "id": "84056021",
    "fips": "56021",
    "county_name": "Laramie County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "021",
    "class_fips": "H1"
  },
  {
    "id": "84056023",
    "fips": "56023",
    "county_name": "Lincoln County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "023",
    "class_fips": "H1"
  },
  {
    "id": "84056025",
    "fips": "56025",
    "county_name": "Natrona County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "025",
    "class_fips": "H1"
  },
  {
    "id": "84056027",
    "fips": "56027",
    "county_name": "Niobrara County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "027",
    "class_fips": "H1"
  },
  {
    "id": "84056029",
    "fips": "56029",
    "county_name": "Park County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "029",
    "class_fips": "H1"
  },
  {
    "id": "84056031",
    "fips": "56031",
    "county_name": "Platte County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "031",
    "class_fips": "H1"
  },
  {
    "id": "84056033",
    "fips": "56033",
    "county_name": "Sheridan County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "033",
    "class_fips": "H1"
  },
  {
    "id": "84056035",
    "fips": "56035",
    "county_name": "Sublette County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "035",
    "class_fips": "H1"
  },
  {
    "id": "84056037",
    "fips": "56037",
    "county_name": "Sweetwater County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "037",
    "class_fips": "H1"
  },
  {
    "id": "84056039",
    "fips": "56039",
    "county_name": "Teton County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "039",
    "class_fips": "H1"
  },
  {
    "id": "84056041",
    "fips": "56041",
    "county_name": "Uinta County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "041",
    "class_fips": "H1"
  },
  {
    "id": "84056043",
    "fips": "56043",
    "county_name": "Washakie County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "043",
    "class_fips": "H1"
  },
  {
    "id": "84056045",
    "fips": "56045",
    "county_name": "Weston County",
    "state_code": "WY",
    "state_fips": "56",
    "county_fips": "045",
    "class_fips": "H1"
  }
]