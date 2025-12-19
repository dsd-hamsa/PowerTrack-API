# `/api/view/chart/builtin`

[← Back to Index](../README.md)



**Methods:** POST  
**Status Codes:** 200  
**Call Count:** 11  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "hardwareFunctions": {
      "type": "array",
      "items": {
        "type": "integer"
      }
    },
    "defaultChart": {
      "type": "integer"
    },
    "timeZoneOffset": {
      "type": "integer"
    },
    "name": {
      "type": "string"
    },
    "chartMenuSections": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {}
      }
    }
  }
}
```

#### Example

**Request:**

```http
POST /api/view/chart/builtin
Accept: application/json
Referer: https://www.alsoenergy.com
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "chartMenuSections": [
    {
      "hardwareOptions": [
        2
      ],
      "predefinedCharts": [
        {
          "chartDescription": "",
          "chartType": 24,
          "displayName": "Cumulative Energy",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": true
            }
          ]
        },
        {
          "chartDescription": "Shows relative production over time",
          "chartType": 101,
          "displayName": "Energy Production Comparison",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "The Energy Ratio is the ratio of energy to Plane of Array insolation.  This can be calculated using insolation, insolation normalized to 25 \u00b0C, or the expected energy based on the PV model.  Change the type of calculation with the \"Energy Ratio Mode\" chart input parameter or the Performance Test Type (on the Site Setup / Performance page).",
          "chartType": 176,
          "displayName": "Energy Ratio",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 62,
              "selectionItems": [
                {
                  "name": "POA insolation",
                  "value": 0
                },
                {
                  "name": "POA insolation, normalized to 25 \u00b0C",
                  "value": 1
                },
                {
                  "name": "Full PV model",
                  "value": 2
                },
                {
                  "name": "POA insolation, Gross energy",
                  "value": 16
                },
                {
                  "name": "POA insolation, normalized to 25 \u00b0C, Gross energy",
                  "value": 17
                },
                {
                  "name": "Full PV model, Gross energy",
                  "value": 18
                }
              ],
              "type": 34,
              "value": 2
            }
          ]
        },
        {
          "chartDescription": "Fill gaps in energy and power when generation appears to have occurred during a data outage.",
          "chartType": 249,
          "displayName": "Fill Energy Gaps",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "The sum of the maximum power output for production meters or inverters for each interval.  Also calculates the maximum power over the entire query span.",
          "chartType": 167,
          "displayName": "Maximum power output",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 87,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "Inverter model results and associated losses, per production meter",
          "chartType": 207,
          "displayName": "Meter Model Losses",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 0,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 7,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 63,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "Temperature adjusted performance ratio using the methodology described in NREL/TP-5200-57991 (module temperature calculated from ambient temperature, irradiance and wind speed).",
          "chartType": 185,
          "displayName": "NREL Performance Ratio",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 93,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 92,
              "selectionItems": [
                {
                  "name": "NREL Clear Sky",
                  "value": 0
                },
                {
                  "name": "AE Enhanced",
                  "value": 1
                },
                {
                  "name": "Isotropic",
                  "value": 2
                },
                {
                  "name": "Perez",
                  "value": 3
                }
              ],
              "type": 42,
              "value": 0
            },
            {
              "id": 99,
              "selectionItems": [
                {
                  "name": "None",
                  "value": 0
                },
                {
                  "name": "Physical On-site Primary",
                  "value": 1
                },
                {
                  "name": "Physical On-site Secondary",
                  "value": 2
                },
                {
                  "name": "Physical Off-site",
                  "value": 3
                },
                {
                  "name": "SolarSight",
                  "value": 4
                },
                {
                  "name": "Locus VI",
                  "value": 5
                },
                {
                  "name": "Solargis",
                  "value": 6
                },
                {
                  "name": "SolarAnywhere",
                  "value": 7
                },
                {
                  "name": "Solcast",
                  "value": 8
                },
                {
                  "name": "Tomorrow.io",
                  "value": 9
                },
                {
                  "name": "Automatic",
                  "value": 10
                }
              ],
              "type": 43,
              "value": 0
            },
            {
              "id": 73,
              "selectionItems": null,
              "type": 2,
              "value": 200
            },
            {
              "id": 100,
              "selectionItems": null,
              "type": 2,
              "value": 45
            }
          ]
        },
        {
          "chartDescription": "Peak power for the given meters or inverters",
          "chartType": 233,
          "displayName": "Peak daily power",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Power output divided by the expected output using the PV model for each inverter, based on module temperature and irradiance.",
          "chartType": 57,
          "displayName": "Performance Index",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 2,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 0,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 91,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 93,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "Performance ratio shows power output relative to irradiance and system size, adjusted for module temperature.",
          "chartType": 23,
          "displayName": "Performance Ratio",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 88,
              "selectionItems": [
                {
                  "name": "Standard",
                  "value": 0
                },
                {
                  "name": "ModuleSTC",
                  "value": 1
                },
                {
                  "name": "PerformanceIndex",
                  "value": 2
                },
                {
                  "name": "NREL",
                  "value": 3
                },
                {
                  "name": "CustomPR1",
                  "value": 4
                },
                {
                  "name": "CustomPR2",
                  "value": 5
                },
                {
                  "name": "SiteStatsPR",
                  "value": 6
                },
                {
                  "name": "SiteStatsPRT",
                  "value": 7
                },
                {
                  "name": "SiteStatsPI",
                  "value": 8
                }
              ],
              "type": 40,
              "value": 1
            },
            {
              "id": 0,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 91,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 93,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 60,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "Scatter plot showing power output relative to the expected (modeled) power",
          "chartType": 200,
          "displayName": "Power vs. Expected",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "The Production Meter chart shows inverter output at the meter along with the expected or estimated output under ideal conditions.  When viewing individual days, performance is shown in terms of power.  Energy is shown when viewing longer time spans.",
          "chartType": 15,
          "displayName": "Production Meter",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 52,
              "selectionItems": [
                {
                  "name": "Annual compound percentage",
                  "value": "Pow"
                },
                {
                  "name": "Annual linear percentage",
                  "value": "Linear"
                },
                {
                  "name": "No aged derate",
                  "value": "None"
                },
                {
                  "name": "Monthly straight line",
                  "value": "FlatMonth"
                },
                {
                  "name": "Annual straight line",
                  "value": "FlatYear"
                },
                {
                  "name": "Ignore production guarantee",
                  "value": "NoProdGuarantee"
                },
                {
                  "name": "Annual linear straight line",
                  "value": "LinearFlatYear"
                }
              ],
              "type": 29,
              "value": "Pow"
            },
            {
              "id": 2,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 4,
              "selectionItems": null,
              "type": 16,
              "value": true
            }
          ]
        },
        {
          "chartDescription": "Detailed meter data, including individual phase voltages, currents and power factor",
          "chartType": 38,
          "displayName": "Production Meter Phases",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Power output divided by the expected output using the PV model, based on module temperature and irradiance",
          "chartType": 79,
          "displayName": "Production Performance Index",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 61,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "Perform a capacity analysis test by filtering data and calculating a curve fit for power output as a function of irradiance, adjusted for temperature.  Based on ASTM E2848-13",
          "chartType": 123,
          "displayName": "PV System Capacity Analyzer",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 73,
              "selectionItems": null,
              "type": 1,
              "value": 500
            },
            {
              "id": 74,
              "selectionItems": null,
              "type": 2,
              "value": 10
            },
            {
              "id": 75,
              "selectionItems": null,
              "type": 2,
              "value": 1
            },
            {
              "id": 76,
              "selectionItems": null,
              "type": 2,
              "value": 5
            },
            {
              "id": 77,
              "selectionItems": null,
              "type": 2,
              "value": 3
            },
            {
              "id": 78,
              "selectionItems": null,
              "type": 2,
              "value": 0.98
            },
            {
              "id": 79,
              "selectionItems": null,
              "type": 2,
              "value": 0.2
            },
            {
              "id": 80,
              "selectionItems": null,
              "type": 1,
              "value": 1
            },
            {
              "id": 81,
              "selectionItems": null,
              "type": 1,
              "value": 800
            },
            {
              "id": 82,
              "selectionItems": null,
              "type": 1,
              "value": 25
            },
            {
              "id": 83,
              "selectionItems": null,
              "type": 1,
              "value": 0
            },
            {
              "id": 84,
              "selectionItems": null,
              "type": 1,
              "value": 0
            },
            {
              "id": 85,
              "selectionItems": null,
              "type": 2,
              "value": 0
            },
            {
              "id": 86,
              "selectionItems": null,
              "type": 2,
              "value": 5.3
            }
          ]
        },
        {
          "chartDescription": "Perform a capacity analysis test by filtering data and calculating regression for power output as a function of irradiance, ambient temperature and wind speed.  Based on ASTM E2848-13",
          "chartType": 250,
          "displayName": "PV System Capacity Analyzer, Ambient",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 78,
              "selectionItems": null,
              "type": 2,
              "value": 0.98
            },
            {
              "id": 73,
              "selectionItems": null,
              "type": 1,
              "value": 100
            },
            {
              "id": 74,
              "selectionItems": null,
              "type": 2,
              "value": 10
            },
            {
              "id": 77,
              "selectionItems": null,
              "type": 2,
              "value": 3
            },
            {
              "id": 81,
              "selectionItems": null,
              "type": 1,
              "value": 800
            },
            {
              "id": 95,
              "selectionItems": null,
              "type": 1,
              "value": 25
            },
            {
              "id": 96,
              "selectionItems": null,
              "type": 1,
              "value": 1
            }
          ]
        },
        {
          "chartDescription": "Skytron PV Guard energy loss calculation using the Adjusted Power Curve Method.  Requires irradiance data without gaps.",
          "chartType": 241,
          "displayName": "PVG: Adjusted Power Curve Method (BnetzA \u2013 Germany)",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 32,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "Energy loss calculation using the flat-rate procedure without reference data (Bundesnetzagentur Guide to feed-in management, version 3.0 section 2.3.4.2).",
          "chartType": 244,
          "displayName": "PVG: Flat rate without registering power measurement",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Skytron PV Guard energy loss calculation using the Last Measured Value Method",
          "chartType": 242,
          "displayName": "PVG: Last Measured Value Method (BnetzA \u2013 Germany)",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Skytron PV Guard energy loss calculation for a meter using a nearby reference inverter",
          "chartType": 243,
          "displayName": "PVG: Reference Inverter",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Energy Received, Delivered and Net",
          "chartType": 156,
          "displayName": "Received & Delivered",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": true
            }
          ]
        },
        {
          "chartDescription": "Recorded energy costs for specified time-periods allocated evenly or weighted over the span.",
          "chartType": 219,
          "displayName": "Recorded allocation (cost)",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 0,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 59,
              "selectionItems": null,
              "type": 16,
              "value": true
            }
          ]
        },
        {
          "chartDescription": "Recorded energy savings for specified time-periods allocated evenly or weighted over the span.",
          "chartType": 220,
          "displayName": "Recorded allocation (savings)",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 0,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 59,
              "selectionItems": null,
              "type": 16,
              "value": true
            }
          ]
        },
        {
          "chartDescription": "Recorded downtime and production impacts categorized as Excluded, such as out of contract or guarantee scope.",
          "chartType": 218,
          "displayName": "Recorded downtime (excluded)",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 0,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 59,
              "selectionItems": null,
              "type": 16,
              "value": true
            }
          ]
        },
        {
          "chartDescription": "Recorded downtime and production impacts categorized as Included, such as in contract or guarantee scope.",
          "chartType": 217,
          "displayName": "Recorded downtime (included)",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 0,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 59,
              "selectionItems": null,
              "type": 16,
              "value": true
            }
          ]
        },
        {
          "chartDescription": "Recorded downtime and production impacts categorized as Other, such as out of contract or guarantee scope.",
          "chartType": 229,
          "displayName": "Recorded downtime (uncategorized)",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 0,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 59,
              "selectionItems": null,
              "type": 16,
              "value": true
            }
          ]
        },
        {
          "chartDescription": "Analyzes inverter performance data to identify when production is being impacted by dirt on the modules and calculates the resulting energy loss.",
          "chartType": 78,
          "displayName": "Soiling Detector",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 63,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "Returns daily and cumulative energy.",
          "chartType": 227,
          "displayName": "SREC Report Query",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "Estimates power for an inverter or meter, using the best available nearby device or weather data.",
          "chartType": 228,
          "displayName": "Synthesized Power",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 71,
              "selectionItems": null,
              "type": 1,
              "value": 0
            },
            {
              "id": 72,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "The uptime is calculated when the required minimum irradiance is configured within the Site Setup Performance options (default = 100 w/m\u00b2).  The percentage is 100% for every 15 minute interval when the inverter is producing power.  If no weather data is available for a sample, then that 15 minute period is ignored.  The weighted-average for the time span is calculated for all inverters based on their relative system size.",
          "chartType": 28,
          "displayName": "Uptime",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "",
          "chartType": 54,
          "displayName": "Year over year production",
          "isAdvanced": true,
          "parameters": []
        }
      ],
      "sectionCode": 2,
      "title": "Production"
    },
    {
      "hardwareOptions": [
        5
      ],
      "predefinedCharts": [
        {
          "chartDescription": "Filters weather data and substitutes alternate data from alternate source if necessary to produce the best possible representation of weather conditions.",
          "chartType": 257,
          "displayName": "Clean average weather data",
          "isAdvanced": false,
          "parameters": []
        },
        {
          "chartDescription": "Compare irradiance data from multiple sources, normalized to GHI.",
          "chartType": 187,
          "displayName": "GHI comparison",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 92,
              "selectionItems": [
                {
                  "name": "NREL Clear Sky",
                  "value": 0
                },
                {
                  "name": "AE Enhanced",
                  "value": 1
                },
                {
                  "name": "Isotropic",
                  "value": 2
                },
                {
                  "name": "Perez",
                  "value": 3
                }
              ],
              "type": 42,
              "value": 0
            },
            {
              "id": 97,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "Measured, GHI, POA and modeled irradiance and insolation.  Use the \"Blue-sky ratio\" to compare sensor data on clear days to the calculated reference data.",
          "chartType": 21,
          "displayName": "Irradiance",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 5,
              "selectionItems": null,
              "type": 35,
              "value": [
                {
                  "isChecked": false,
                  "value": 0
                },
                {
                  "isChecked": true,
                  "value": 1
                },
                {
                  "isChecked": false,
                  "value": 2
                },
                {
                  "isChecked": false,
                  "value": 4
                },
                {
                  "isChecked": false,
                  "value": 8
                },
                {
                  "isChecked": false,
                  "value": 16
                },
                {
                  "isChecked": false,
                  "value": 32
                },
                {
                  "isChecked": false,
                  "value": 64
                },
                {
                  "isChecked": false,
                  "value": 128
                }
              ]
            }
          ]
        },
        {
          "chartDescription": "Compare irradiance data from multiple sources using a scatter chart.  All data is normalized to GHI.  The first data set is used for the X axis, all others are used for the Y axis.",
          "chartType": 186,
          "displayName": "Irradiance scatter comparison",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 64,
              "selectionItems": null,
              "type": 1,
              "value": 0
            }
          ]
        },
        {
          "chartDescription": "Calculates irradiance sensor degradation (requires at least 3 years of data).",
          "chartType": 245,
          "displayName": "Irradiance Sensor Degrade",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 64,
              "selectionItems": null,
              "type": 1,
              "value": 0
            }
          ]
        },
        {
          "chartDescription": "Show the correlation of POA sensor data to the clear sky model, and estimates the orientation of an irradiance sensor for maximum correlation.",
          "chartType": 258,
          "displayName": "Irradiance sensor orientation",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 0,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "Compare irradiance data from multiple sources, normalized to POA.",
          "chartType": 240,
          "displayName": "POA comparison",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 92,
              "selectionItems": [
                {
                  "name": "NREL Clear Sky",
                  "value": 0
                },
                {
                  "name": "AE Enhanced",
                  "value": 1
                },
                {
                  "name": "Isotropic",
                  "value": 2
                },
                {
                  "name": "Perez",
                  "value": 3
                }
              ],
              "type": 42,
              "value": 0
            }
          ]
        },
        {
          "chartDescription": "",
          "chartType": 112,
          "displayName": "Rain, Humidity, Barometric Pressure",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Ambient and module temperature.",
          "chartType": 19,
          "displayName": "Temperature",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 4,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "",
          "chartType": 20,
          "displayName": "Wind",
          "isAdvanced": false,
          "parameters": []
        }
      ],
      "sectionCode": 4,
      "title": "Weather"
    },
    {
      "hardwareOptions": [],
      "predefinedCharts": [
        {
          "chartDescription": "Revenue for energy production (actual, expected and estimated) based on Agency rate schedules",
          "chartType": 190,
          "displayName": "Agency revenue: actual, expected and estimated",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 52,
              "selectionItems": [
                {
                  "name": "Annual compound percentage",
                  "value": "Pow"
                },
                {
                  "name": "Annual linear percentage",
                  "value": "Linear"
                },
                {
                  "name": "No aged derate",
                  "value": "None"
                },
                {
                  "name": "Monthly straight line",
                  "value": "FlatMonth"
                },
                {
                  "name": "Annual straight line",
                  "value": "FlatYear"
                },
                {
                  "name": "Ignore production guarantee",
                  "value": "NoProdGuarantee"
                },
                {
                  "name": "Annual linear straight line",
                  "value": "LinearFlatYear"
                }
              ],
              "type": 29,
              "value": "Pow"
            },
            {
              "id": 4,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 31,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "Breakdown of rates specified in site financial settings",
          "chartType": 213,
          "displayName": "All Rates",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 30,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 32,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 29,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 34,
              "selectionItems": null,
              "type": 0,
              "value": null
            }
          ]
        },
        {
          "chartDescription": "Breakdown of rates including time of use specified in site financial settings",
          "chartType": 215,
          "displayName": "All Rates (per time of use)",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 30,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 32,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 29,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 34,
              "selectionItems": null,
              "type": 0,
              "value": null
            }
          ]
        },
        {
          "chartDescription": "Revenue and cost breakdown for rates specified in site financial settings",
          "chartType": 214,
          "displayName": "All Revenue and Costs",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 30,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 32,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 29,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 34,
              "selectionItems": null,
              "type": 0,
              "value": null
            }
          ]
        },
        {
          "chartDescription": "Revenue and cost breakdown for rates including time of use specified in site financial settings",
          "chartType": 216,
          "displayName": "All Revenue and Costs (per time of use)",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 30,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 32,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 29,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 34,
              "selectionItems": null,
              "type": 0,
              "value": null
            }
          ]
        },
        {
          "chartDescription": "Cumulative revenue for energy production (actual, expected and estimated) based on Agency rate schedules",
          "chartType": 193,
          "displayName": "Cumulative Agency revenue: actual, expected and estimated",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 52,
              "selectionItems": [
                {
                  "name": "Annual compound percentage",
                  "value": "Pow"
                },
                {
                  "name": "Annual linear percentage",
                  "value": "Linear"
                },
                {
                  "name": "No aged derate",
                  "value": "None"
                },
                {
                  "name": "Monthly straight line",
                  "value": "FlatMonth"
                },
                {
                  "name": "Annual straight line",
                  "value": "FlatYear"
                },
                {
                  "name": "Ignore production guarantee",
                  "value": "NoProdGuarantee"
                },
                {
                  "name": "Annual linear straight line",
                  "value": "LinearFlatYear"
                }
              ],
              "type": 29,
              "value": "Pow"
            },
            {
              "id": 4,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 31,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "Cumulative revenue for energy production (actual, expected and estimated) based on PPA rate schedules",
          "chartType": 192,
          "displayName": "Cumulative PPA revenue: actual, expected and estimated",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 52,
              "selectionItems": [
                {
                  "name": "Annual compound percentage",
                  "value": "Pow"
                },
                {
                  "name": "Annual linear percentage",
                  "value": "Linear"
                },
                {
                  "name": "No aged derate",
                  "value": "None"
                },
                {
                  "name": "Monthly straight line",
                  "value": "FlatMonth"
                },
                {
                  "name": "Annual straight line",
                  "value": "FlatYear"
                },
                {
                  "name": "Ignore production guarantee",
                  "value": "NoProdGuarantee"
                },
                {
                  "name": "Annual linear straight line",
                  "value": "LinearFlatYear"
                }
              ],
              "type": 29,
              "value": "Pow"
            },
            {
              "id": 4,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 31,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "Total cumulative revenue, based on cumulative energy readings.",
          "chartType": 27,
          "displayName": "Cumulative Revenue",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 30,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 32,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 29,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "Revenue for energy production (actual, expected and estimated) based on PPA rate schedules",
          "chartType": 189,
          "displayName": "PPA revenue: actual, expected and estimated",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 52,
              "selectionItems": [
                {
                  "name": "Annual compound percentage",
                  "value": "Pow"
                },
                {
                  "name": "Annual linear percentage",
                  "value": "Linear"
                },
                {
                  "name": "No aged derate",
                  "value": "None"
                },
                {
                  "name": "Monthly straight line",
                  "value": "FlatMonth"
                },
                {
                  "name": "Annual straight line",
                  "value": "FlatYear"
                },
                {
                  "name": "Ignore production guarantee",
                  "value": "NoProdGuarantee"
                },
                {
                  "name": "Annual linear straight line",
                  "value": "LinearFlatYear"
                }
              ],
              "type": 29,
              "value": "Pow"
            },
            {
              "id": 4,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 31,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "Recorded downtime and production impact costs categorized as Excluded, such as out of contract or guarantee scope.",
          "chartType": 222,
          "displayName": "Recorded downtime cost (excluded)",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Recorded downtime and production impact costs categorized as Included, such as in contract or guarantee scope.",
          "chartType": 221,
          "displayName": "Recorded downtime cost (included)",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 0,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 59,
              "selectionItems": null,
              "type": 16,
              "value": true
            }
          ]
        },
        {
          "chartDescription": "Recorded downtime and production impact costs categorized as Other, such as out of contract or guarantee scope.",
          "chartType": 230,
          "displayName": "Recorded downtime cost (uncategorized)",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 0,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 59,
              "selectionItems": null,
              "type": 16,
              "value": true
            }
          ]
        },
        {
          "chartDescription": "Recorded costs for specified time-periods allocated evenly or weighted over the span.",
          "chartType": 223,
          "displayName": "Recorded financial (cost)",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 0,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 59,
              "selectionItems": null,
              "type": 16,
              "value": true
            }
          ]
        },
        {
          "chartDescription": "Recorded savings for specified time-periods allocated evenly or weighted over the span.",
          "chartType": 224,
          "displayName": "Recorded financial (savings)",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 0,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 59,
              "selectionItems": null,
              "type": 16,
              "value": true
            }
          ]
        },
        {
          "chartDescription": "Revenue for energy production based on PPA and Reporting Agency rate schedules",
          "chartType": 26,
          "displayName": "Revenue",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 30,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 32,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 29,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "",
          "chartType": 50,
          "displayName": "Revenue (energy)",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 30,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 32,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 29,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "Estimated savings from energy production based on estimate rate schedules.",
          "chartType": 154,
          "displayName": "Savings",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 30,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 32,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 29,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "",
          "chartType": 183,
          "displayName": "Total Cost",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 10,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 6,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 52,
              "selectionItems": [
                {
                  "name": "Annual compound percentage",
                  "value": "Pow"
                },
                {
                  "name": "Annual linear percentage",
                  "value": "Linear"
                },
                {
                  "name": "No aged derate",
                  "value": "None"
                },
                {
                  "name": "Monthly straight line",
                  "value": "FlatMonth"
                },
                {
                  "name": "Annual straight line",
                  "value": "FlatYear"
                },
                {
                  "name": "Ignore production guarantee",
                  "value": "NoProdGuarantee"
                },
                {
                  "name": "Annual linear straight line",
                  "value": "LinearFlatYear"
                }
              ],
              "type": 29,
              "value": "Pow"
            }
          ]
        }
      ],
      "sectionCode": 13,
      "title": "Financial View"
    },
    {
      "hardwareOptions": [],
      "predefinedCharts": [
        {
          "chartDescription": "Cumulative production compared against the expected (modeled) production, along with the estimated site production",
          "chartType": 195,
          "displayName": "Cumulative production: actual, expected and estimated",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 52,
              "selectionItems": [
                {
                  "name": "Annual compound percentage",
                  "value": "Pow"
                },
                {
                  "name": "Annual linear percentage",
                  "value": "Linear"
                },
                {
                  "name": "No aged derate",
                  "value": "None"
                },
                {
                  "name": "Monthly straight line",
                  "value": "FlatMonth"
                },
                {
                  "name": "Annual straight line",
                  "value": "FlatYear"
                },
                {
                  "name": "Ignore production guarantee",
                  "value": "NoProdGuarantee"
                },
                {
                  "name": "Annual linear straight line",
                  "value": "LinearFlatYear"
                }
              ],
              "type": 29,
              "value": "Pow"
            },
            {
              "id": 4,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 31,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "Device availability based on recorded downtime percentages weighted by device size relative to system size.",
          "chartType": 197,
          "displayName": "Device availability",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 0,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 61,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "Total generation, as reported by all production meters on a site.  If production meters aren't available, then inverter data is used.",
          "chartType": 94,
          "displayName": "Generation",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 10,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 55,
              "selectionItems": [
                {
                  "name": "Unknown",
                  "value": 0
                },
                {
                  "name": "Generation",
                  "value": 1
                },
                {
                  "name": "Volts",
                  "value": 2
                },
                {
                  "name": "Amps",
                  "value": 3
                },
                {
                  "name": "Predicted",
                  "value": 4
                },
                {
                  "name": "Actual",
                  "value": 5
                },
                {
                  "name": "Cumulative",
                  "value": 6
                },
                {
                  "name": "Delta",
                  "value": 7
                },
                {
                  "name": "Baseline",
                  "value": 8
                },
                {
                  "name": "Irradiance",
                  "value": 9
                },
                {
                  "name": "GHI Irradiance",
                  "value": 10
                },
                {
                  "name": "Cell Temperature",
                  "value": 11
                },
                {
                  "name": "Cell Temperature 2",
                  "value": 12
                },
                {
                  "name": "Ambient Temperature",
                  "value": 13
                },
                {
                  "name": "Wind Speed",
                  "value": 14
                },
                {
                  "name": "Estimated",
                  "value": 15
                },
                {
                  "name": "AnnualDegrade",
                  "value": 16
                },
                {
                  "name": "DNIIrradiance",
                  "value": 17
                },
                {
                  "name": "EstimatedGHI",
                  "value": 18
                },
                {
                  "name": "AnnualDegradeGHI",
                  "value": 19
                },
                {
                  "name": "Uptime",
                  "value": 20
                },
                {
                  "name": "WeightedUptime",
                  "value": 21
                },
                {
                  "name": "First",
                  "value": -3
                },
                {
                  "name": "Last",
                  "value": -2
                },
                {
                  "name": "Total",
                  "value": -1
                }
              ],
              "type": 37,
              "value": 0
            },
            {
              "id": 56,
              "selectionItems": null,
              "type": 1,
              "value": 0
            },
            {
              "id": 57,
              "selectionItems": null,
              "type": 31,
              "value": 0
            }
          ]
        },
        {
          "chartDescription": "Shows cumulative site production and the site estimate",
          "chartType": 102,
          "displayName": "Generation vs. Baseline",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 55,
              "selectionItems": [
                {
                  "name": "Unknown",
                  "value": 0
                },
                {
                  "name": "Generation",
                  "value": 1
                },
                {
                  "name": "Volts",
                  "value": 2
                },
                {
                  "name": "Amps",
                  "value": 3
                },
                {
                  "name": "Predicted",
                  "value": 4
                },
                {
                  "name": "Actual",
                  "value": 5
                },
                {
                  "name": "Cumulative",
                  "value": 6
                },
                {
                  "name": "Delta",
                  "value": 7
                },
                {
                  "name": "Baseline",
                  "value": 8
                },
                {
                  "name": "Irradiance",
                  "value": 9
                },
                {
                  "name": "GHI Irradiance",
                  "value": 10
                },
                {
                  "name": "Cell Temperature",
                  "value": 11
                },
                {
                  "name": "Cell Temperature 2",
                  "value": 12
                },
                {
                  "name": "Ambient Temperature",
                  "value": 13
                },
                {
                  "name": "Wind Speed",
                  "value": 14
                },
                {
                  "name": "Estimated",
                  "value": 15
                },
                {
                  "name": "AnnualDegrade",
                  "value": 16
                },
                {
                  "name": "DNIIrradiance",
                  "value": 17
                },
                {
                  "name": "EstimatedGHI",
                  "value": 18
                },
                {
                  "name": "AnnualDegradeGHI",
                  "value": 19
                },
                {
                  "name": "Uptime",
                  "value": 20
                },
                {
                  "name": "WeightedUptime",
                  "value": 21
                },
                {
                  "name": "First",
                  "value": -3
                },
                {
                  "name": "Last",
                  "value": -2
                },
                {
                  "name": "Total",
                  "value": -1
                }
              ],
              "type": 37,
              "value": 0
            },
            {
              "id": 56,
              "selectionItems": null,
              "type": 1,
              "value": 0
            },
            {
              "id": 57,
              "selectionItems": null,
              "type": 31,
              "value": 0
            },
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "Total production reported by the production meters and inverters, along with the Global Horizontal Irradiance",
          "chartType": 93,
          "displayName": "Meter, Inverter & GHI",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "Production compared against the expected (modeled) production, along with the estimated site production",
          "chartType": 89,
          "displayName": "Production: actual, expected and estimated",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 52,
              "selectionItems": [
                {
                  "name": "Annual compound percentage",
                  "value": "Pow"
                },
                {
                  "name": "Annual linear percentage",
                  "value": "Linear"
                },
                {
                  "name": "No aged derate",
                  "value": "None"
                },
                {
                  "name": "Monthly straight line",
                  "value": "FlatMonth"
                },
                {
                  "name": "Annual straight line",
                  "value": "FlatYear"
                },
                {
                  "name": "Ignore production guarantee",
                  "value": "NoProdGuarantee"
                },
                {
                  "name": "Annual linear straight line",
                  "value": "LinearFlatYear"
                }
              ],
              "type": 29,
              "value": "Pow"
            },
            {
              "id": 4,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 31,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "Site availability based on recorded downtime percentages.",
          "chartType": 119,
          "displayName": "Site availability",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 0,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 61,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "Shows total energy production for a site (uses production meters if available, otherwise use inverters)",
          "chartType": 99,
          "displayName": "Site Production",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 55,
              "selectionItems": [
                {
                  "name": "Unknown",
                  "value": 0
                },
                {
                  "name": "Generation",
                  "value": 1
                },
                {
                  "name": "Volts",
                  "value": 2
                },
                {
                  "name": "Amps",
                  "value": 3
                },
                {
                  "name": "Predicted",
                  "value": 4
                },
                {
                  "name": "Actual",
                  "value": 5
                },
                {
                  "name": "Cumulative",
                  "value": 6
                },
                {
                  "name": "Delta",
                  "value": 7
                },
                {
                  "name": "Baseline",
                  "value": 8
                },
                {
                  "name": "Irradiance",
                  "value": 9
                },
                {
                  "name": "GHI Irradiance",
                  "value": 10
                },
                {
                  "name": "Cell Temperature",
                  "value": 11
                },
                {
                  "name": "Cell Temperature 2",
                  "value": 12
                },
                {
                  "name": "Ambient Temperature",
                  "value": 13
                },
                {
                  "name": "Wind Speed",
                  "value": 14
                },
                {
                  "name": "Estimated",
                  "value": 15
                },
                {
                  "name": "AnnualDegrade",
                  "value": 16
                },
                {
                  "name": "DNIIrradiance",
                  "value": 17
                },
                {
                  "name": "EstimatedGHI",
                  "value": 18
                },
                {
                  "name": "AnnualDegradeGHI",
                  "value": 19
                },
                {
                  "name": "Uptime",
                  "value": 20
                },
                {
                  "name": "WeightedUptime",
                  "value": 21
                },
                {
                  "name": "First",
                  "value": -3
                },
                {
                  "name": "Last",
                  "value": -2
                },
                {
                  "name": "Total",
                  "value": -1
                }
              ],
              "type": 37,
              "value": 0
            },
            {
              "id": 56,
              "selectionItems": null,
              "type": 1,
              "value": 0
            },
            {
              "id": 57,
              "selectionItems": null,
              "type": 31,
              "value": 0
            },
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "Ambient temperature",
          "chartType": 110,
          "displayName": "Site: ambient",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Shows budget energy production for a site, based on preconfigured monthly production estimates degraded annually without interpolation between months",
          "chartType": 118,
          "displayName": "Site: budgeted production",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Shows cumulative energy production for a site (use production meters if available, otherwise use inverters)",
          "chartType": 105,
          "displayName": "Site: cumulative production",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "Direct Normal Irradiance",
          "chartType": 115,
          "displayName": "Site: DNI",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Shows estimated energy production for a site, based on preconfigured monthly production estimates",
          "chartType": 106,
          "displayName": "Site: estimated production",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Global Horizontal Irradiance",
          "chartType": 109,
          "displayName": "Site: GHI",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Shows energy production for a site (use production meters if available, otherwise use inverters)",
          "chartType": 104,
          "displayName": "Site: interval production",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "The uptime for the site is calculated as a weighted average percentage of each inverter (or each meter if no inverters are present), when the required minimum irradiance is configured within the Site Setup Performance options (default = 100 w/m\u00b2).  For each device, the percentage is 100% for every 15 minute interval when the inverter is producing power. If no weather data is available for a sample, then that 15 minute period is ignored.",
          "chartType": 168,
          "displayName": "Site: Uptime",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 55,
              "selectionItems": [
                {
                  "name": "Unknown",
                  "value": 0
                },
                {
                  "name": "Generation",
                  "value": 1
                },
                {
                  "name": "Volts",
                  "value": 2
                },
                {
                  "name": "Amps",
                  "value": 3
                },
                {
                  "name": "Predicted",
                  "value": 4
                },
                {
                  "name": "Actual",
                  "value": 5
                },
                {
                  "name": "Cumulative",
                  "value": 6
                },
                {
                  "name": "Delta",
                  "value": 7
                },
                {
                  "name": "Baseline",
                  "value": 8
                },
                {
                  "name": "Irradiance",
                  "value": 9
                },
                {
                  "name": "GHI Irradiance",
                  "value": 10
                },
                {
                  "name": "Cell Temperature",
                  "value": 11
                },
                {
                  "name": "Cell Temperature 2",
                  "value": 12
                },
                {
                  "name": "Ambient Temperature",
                  "value": 13
                },
                {
                  "name": "Wind Speed",
                  "value": 14
                },
                {
                  "name": "Estimated",
                  "value": 15
                },
                {
                  "name": "AnnualDegrade",
                  "value": 16
                },
                {
                  "name": "DNIIrradiance",
                  "value": 17
                },
                {
                  "name": "EstimatedGHI",
                  "value": 18
                },
                {
                  "name": "AnnualDegradeGHI",
                  "value": 19
                },
                {
                  "name": "Uptime",
                  "value": 20
                },
                {
                  "name": "WeightedUptime",
                  "value": 21
                },
                {
                  "name": "First",
                  "value": -3
                },
                {
                  "name": "Last",
                  "value": -2
                },
                {
                  "name": "Total",
                  "value": -1
                }
              ],
              "type": 37,
              "value": 0
            },
            {
              "id": 56,
              "selectionItems": null,
              "type": 1,
              "value": 0
            }
          ]
        },
        {
          "chartDescription": "AC voltage and current",
          "chartType": 95,
          "displayName": "Volts & Amps",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 55,
              "selectionItems": [
                {
                  "name": "Unknown",
                  "value": 0
                },
                {
                  "name": "Generation",
                  "value": 1
                },
                {
                  "name": "Volts",
                  "value": 2
                },
                {
                  "name": "Amps",
                  "value": 3
                },
                {
                  "name": "Predicted",
                  "value": 4
                },
                {
                  "name": "Actual",
                  "value": 5
                },
                {
                  "name": "Cumulative",
                  "value": 6
                },
                {
                  "name": "Delta",
                  "value": 7
                },
                {
                  "name": "Baseline",
                  "value": 8
                },
                {
                  "name": "Irradiance",
                  "value": 9
                },
                {
                  "name": "GHI Irradiance",
                  "value": 10
                },
                {
                  "name": "Cell Temperature",
                  "value": 11
                },
                {
                  "name": "Cell Temperature 2",
                  "value": 12
                },
                {
                  "name": "Ambient Temperature",
                  "value": 13
                },
                {
                  "name": "Wind Speed",
                  "value": 14
                },
                {
                  "name": "Estimated",
                  "value": 15
                },
                {
                  "name": "AnnualDegrade",
                  "value": 16
                },
                {
                  "name": "DNIIrradiance",
                  "value": 17
                },
                {
                  "name": "EstimatedGHI",
                  "value": 18
                },
                {
                  "name": "AnnualDegradeGHI",
                  "value": 19
                },
                {
                  "name": "Uptime",
                  "value": 20
                },
                {
                  "name": "WeightedUptime",
                  "value": 21
                },
                {
                  "name": "First",
                  "value": -3
                },
                {
                  "name": "Last",
                  "value": -2
                },
                {
                  "name": "Total",
                  "value": -1
                }
              ],
              "type": 37,
              "value": 0
            },
            {
              "id": 56,
              "selectionItems": null,
              "type": 1,
              "value": 0
            },
            {
              "id": 57,
              "selectionItems": null,
              "type": 31,
              "value": 0
            }
          ]
        },
        {
          "chartDescription": "Site weather data",
          "chartType": 96,
          "displayName": "Weather",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 55,
              "selectionItems": [
                {
                  "name": "Unknown",
                  "value": 0
                },
                {
                  "name": "Generation",
                  "value": 1
                },
                {
                  "name": "Volts",
                  "value": 2
                },
                {
                  "name": "Amps",
                  "value": 3
                },
                {
                  "name": "Predicted",
                  "value": 4
                },
                {
                  "name": "Actual",
                  "value": 5
                },
                {
                  "name": "Cumulative",
                  "value": 6
                },
                {
                  "name": "Delta",
                  "value": 7
                },
                {
                  "name": "Baseline",
                  "value": 8
                },
                {
                  "name": "Irradiance",
                  "value": 9
                },
                {
                  "name": "GHI Irradiance",
                  "value": 10
                },
                {
                  "name": "Cell Temperature",
                  "value": 11
                },
                {
                  "name": "Cell Temperature 2",
                  "value": 12
                },
                {
                  "name": "Ambient Temperature",
                  "value": 13
                },
                {
                  "name": "Wind Speed",
                  "value": 14
                },
                {
                  "name": "Estimated",
                  "value": 15
                },
                {
                  "name": "AnnualDegrade",
                  "value": 16
                },
                {
                  "name": "DNIIrradiance",
                  "value": 17
                },
                {
                  "name": "EstimatedGHI",
                  "value": 18
                },
                {
                  "name": "AnnualDegradeGHI",
                  "value": 19
                },
                {
                  "name": "Uptime",
                  "value": 20
                },
                {
                  "name": "WeightedUptime",
                  "value": 21
                },
                {
                  "name": "First",
                  "value": -3
                },
                {
                  "name": "Last",
                  "value": -2
                },
                {
                  "name": "Total",
                  "value": -1
                }
              ],
              "type": 37,
              "value": 0
            },
            {
              "id": 56,
              "selectionItems": null,
              "type": 1,
              "value": 0
            },
            {
              "id": 57,
              "selectionItems": null,
              "type": 31,
              "value": 0
            }
          ]
        }
      ],
      "sectionCode": 17,
      "title": "Site Aggregate"
    },
    {
      "hardwareOptions": [],
      "predefinedCharts": [
        {
          "chartDescription": "",
          "chartType": 62,
          "displayName": "Environmental Impact Summary",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "",
          "chartType": 75,
          "displayName": "Estimate Comparison (daily)",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 10,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 6,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 52,
              "selectionItems": [
                {
                  "name": "Annual compound percentage",
                  "value": "Pow"
                },
                {
                  "name": "Annual linear percentage",
                  "value": "Linear"
                },
                {
                  "name": "No aged derate",
                  "value": "None"
                },
                {
                  "name": "Monthly straight line",
                  "value": "FlatMonth"
                },
                {
                  "name": "Annual straight line",
                  "value": "FlatYear"
                },
                {
                  "name": "Ignore production guarantee",
                  "value": "NoProdGuarantee"
                },
                {
                  "name": "Annual linear straight line",
                  "value": "LinearFlatYear"
                }
              ],
              "type": 29,
              "value": "Pow"
            }
          ]
        },
        {
          "chartDescription": "Compare production between multiple sites",
          "chartType": 44,
          "displayName": "Production Comparison",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 10,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 6,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 52,
              "selectionItems": [
                {
                  "name": "Annual compound percentage",
                  "value": "Pow"
                },
                {
                  "name": "Annual linear percentage",
                  "value": "Linear"
                },
                {
                  "name": "No aged derate",
                  "value": "None"
                },
                {
                  "name": "Monthly straight line",
                  "value": "FlatMonth"
                },
                {
                  "name": "Annual straight line",
                  "value": "FlatYear"
                },
                {
                  "name": "Ignore production guarantee",
                  "value": "NoProdGuarantee"
                },
                {
                  "name": "Annual linear straight line",
                  "value": "LinearFlatYear"
                }
              ],
              "type": 29,
              "value": "Pow"
            }
          ]
        },
        {
          "chartDescription": "Production for each site compared against the expected production, and estimated production. Shows individual site results.",
          "chartType": 90,
          "displayName": "Site Production Comparison",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 52,
              "selectionItems": [
                {
                  "name": "Annual compound percentage",
                  "value": "Pow"
                },
                {
                  "name": "Annual linear percentage",
                  "value": "Linear"
                },
                {
                  "name": "No aged derate",
                  "value": "None"
                },
                {
                  "name": "Monthly straight line",
                  "value": "FlatMonth"
                },
                {
                  "name": "Annual straight line",
                  "value": "FlatYear"
                },
                {
                  "name": "Ignore production guarantee",
                  "value": "NoProdGuarantee"
                },
                {
                  "name": "Annual linear straight line",
                  "value": "LinearFlatYear"
                }
              ],
              "type": 29,
              "value": "Pow"
            },
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "Total site production compared against the expected and estimated production.  Adds results for multiple sites.",
          "chartType": 91,
          "displayName": "Site Production Total",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 52,
              "selectionItems": [
                {
                  "name": "Annual compound percentage",
                  "value": "Pow"
                },
                {
                  "name": "Annual linear percentage",
                  "value": "Linear"
                },
                {
                  "name": "No aged derate",
                  "value": "None"
                },
                {
                  "name": "Monthly straight line",
                  "value": "FlatMonth"
                },
                {
                  "name": "Annual straight line",
                  "value": "FlatYear"
                },
                {
                  "name": "Ignore production guarantee",
                  "value": "NoProdGuarantee"
                },
                {
                  "name": "Annual linear straight line",
                  "value": "LinearFlatYear"
                }
              ],
              "type": 29,
              "value": "Pow"
            },
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "Production for each site compared against the projected production. Shows individual site results.",
          "chartType": 173,
          "displayName": "Site Projected vs. Actual",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 52,
              "selectionItems": [
                {
                  "name": "Annual compound percentage",
                  "value": "Pow"
                },
                {
                  "name": "Annual linear percentage",
                  "value": "Linear"
                },
                {
                  "name": "No aged derate",
                  "value": "None"
                },
                {
                  "name": "Monthly straight line",
                  "value": "FlatMonth"
                },
                {
                  "name": "Annual straight line",
                  "value": "FlatYear"
                },
                {
                  "name": "Ignore production guarantee",
                  "value": "NoProdGuarantee"
                },
                {
                  "name": "Annual linear straight line",
                  "value": "LinearFlatYear"
                }
              ],
              "type": 29,
              "value": "Pow"
            },
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "The Total Production chart shows a summary of inverter output at the meter for multiple sites.",
          "chartType": 43,
          "displayName": "Total Production",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 10,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 6,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 52,
              "selectionItems": [
                {
                  "name": "Annual compound percentage",
                  "value": "Pow"
                },
                {
                  "name": "Annual linear percentage",
                  "value": "Linear"
                },
                {
                  "name": "No aged derate",
                  "value": "None"
                },
                {
                  "name": "Monthly straight line",
                  "value": "FlatMonth"
                },
                {
                  "name": "Annual straight line",
                  "value": "FlatYear"
                },
                {
                  "name": "Ignore production guarantee",
                  "value": "NoProdGuarantee"
                },
                {
                  "name": "Annual linear straight line",
                  "value": "LinearFlatYear"
                }
              ],
              "type": 29,
              "value": "Pow"
            }
          ]
        },
        {
          "chartDescription": "",
          "chartType": 67,
          "displayName": "Total Production & Model Estimate",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "",
          "chartType": 150,
          "displayName": "Total Revenue",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 10,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 6,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 52,
              "selectionItems": [
                {
                  "name": "Annual compound percentage",
                  "value": "Pow"
                },
                {
                  "name": "Annual linear percentage",
                  "value": "Linear"
                },
                {
                  "name": "No aged derate",
                  "value": "None"
                },
                {
                  "name": "Monthly straight line",
                  "value": "FlatMonth"
                },
                {
                  "name": "Annual straight line",
                  "value": "FlatYear"
                },
                {
                  "name": "Ignore production guarantee",
                  "value": "NoProdGuarantee"
                },
                {
                  "name": "Annual linear straight line",
                  "value": "LinearFlatYear"
                }
              ],
              "type": 29,
              "value": "Pow"
            }
          ]
        },
        {
          "chartDescription": "",
          "chartType": 63,
          "displayName": "Total Revenue & TMY Estimate",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 10,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 6,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 52,
              "selectionItems": [
                {
                  "name": "Annual compound percentage",
                  "value": "Pow"
                },
                {
                  "name": "Annual linear percentage",
                  "value": "Linear"
                },
                {
                  "name": "No aged derate",
                  "value": "None"
                },
                {
                  "name": "Monthly straight line",
                  "value": "FlatMonth"
                },
                {
                  "name": "Annual straight line",
                  "value": "FlatYear"
                },
                {
                  "name": "Ignore production guarantee",
                  "value": "NoProdGuarantee"
                },
                {
                  "name": "Annual linear straight line",
                  "value": "LinearFlatYear"
                }
              ],
              "type": 29,
              "value": "Pow"
            }
          ]
        },
        {
          "chartDescription": "The uptime for each site is calculated as an average percentage of each inverter (or each meter if no inverters are present), when the required minimum irradiance is configured within the Site Setup Performance options (default = 100 w/m\u00b2). ",
          "chartType": 169,
          "displayName": "Uptime Comparison (unweighted)",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 10,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 6,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 52,
              "selectionItems": [
                {
                  "name": "Annual compound percentage",
                  "value": "Pow"
                },
                {
                  "name": "Annual linear percentage",
                  "value": "Linear"
                },
                {
                  "name": "No aged derate",
                  "value": "None"
                },
                {
                  "name": "Monthly straight line",
                  "value": "FlatMonth"
                },
                {
                  "name": "Annual straight line",
                  "value": "FlatYear"
                },
                {
                  "name": "Ignore production guarantee",
                  "value": "NoProdGuarantee"
                },
                {
                  "name": "Annual linear straight line",
                  "value": "LinearFlatYear"
                }
              ],
              "type": 29,
              "value": "Pow"
            }
          ]
        },
        {
          "chartDescription": "The uptime for each site is calculated as a weighted average percentage of each inverter (or each meter if no inverters are present), when the required minimum irradiance is configured within the Site Setup Performance options (default = 100 w/m\u00b2). ",
          "chartType": 170,
          "displayName": "Uptime Comparison (weighted)",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 10,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 6,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 52,
              "selectionItems": [
                {
                  "name": "Annual compound percentage",
                  "value": "Pow"
                },
                {
                  "name": "Annual linear percentage",
                  "value": "Linear"
                },
                {
                  "name": "No aged derate",
                  "value": "None"
                },
                {
                  "name": "Monthly straight line",
                  "value": "FlatMonth"
                },
                {
                  "name": "Annual straight line",
                  "value": "FlatYear"
                },
                {
                  "name": "Ignore production guarantee",
                  "value": "NoProdGuarantee"
                },
                {
                  "name": "Annual linear straight line",
                  "value": "LinearFlatYear"
                }
              ],
              "type": 29,
              "value": "Pow"
            }
          ]
        }
      ],
      "sectionCode": 18,
      "title": "Summary"
    },
    {
      "hardwareOptions": [],
      "predefinedCharts": [
        {
          "chartDescription": "",
          "chartType": 65,
          "displayName": "Archive Summary",
          "isAdvanced": false,
          "parameters": []
        },
        {
          "chartDescription": "Special query for MassCEC's Clean Peak Tracking System",
          "chartType": 254,
          "displayName": "MassCEC CPTS Report",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "Special query for CSE's Self-Generation Incentive Program",
          "chartType": 125,
          "displayName": "SGIP Report",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "Ratio of site production energy and expected energy, used to calculate the last 24 hour PR for the Portfolio view.",
          "chartType": 269,
          "displayName": "Site Stats Performance Index",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Ratio of site production energy to DC size and irradiance, used to calculate the last 24 hour PR for the Portfolio view.",
          "chartType": 261,
          "displayName": "Site Stats Performance Ratio",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "PowerTrack internal query for comparing actual, expected and estimated production, for the most recent 15 minute and 24 hour time spans.",
          "chartType": 172,
          "displayName": "Site Stats Power, Energy, Irradiance",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 0,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        },
        {
          "chartDescription": "Ratio of site production energy to temperature adjusted DC size and irradiance, used to calculate the last 24 hour PR for the Portfolio view.",
          "chartType": 268,
          "displayName": "Site Stats Temperature Adjusted Performance Ratio",
          "isAdvanced": true,
          "parameters": []
        }
      ],
      "sectionCode": 20,
      "title": "Admin"
    },
    {
      "hardwareOptions": [],
      "predefinedCharts": [
        {
          "chartDescription": "Detects missing or imbalanced AC voltages",
          "chartType": 85,
          "displayName": "Alert, AC voltage",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Detects low energy production of the site relative to the site production estimates.",
          "chartType": 86,
          "displayName": "Alert, Energy estimate",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Detects low performance relative to the PV model for individual production meters.  If the site doesn't contain production meters, then the inverters are used.",
          "chartType": 87,
          "displayName": "Alert, Performance index",
          "isAdvanced": true,
          "parameters": []
        }
      ],
      "sectionCode": 21,
      "title": "Alert"
    }
  ],
  "defaultChart": 15,
  "hardwareFunctions": [
    2,
    5
  ],
  "name": "Smith & Wesson - MA-21-C273",
  "timeZoneOffset": -5
}
```

