# /api/view/chart/builtin

[← Back to Index](../README.md)

**Methods:** POST
**Status Codes:** 200
**Call Count:** 1

## Table of Contents

- [Payload Structure](#payload-structure)
- [Response Structure](#response-structure)
- [Example](#example)

## Payload Structure

```json
{
  "type": "object",
  "properties": {
    "siteKeys": {
      "type": "string"
    }
  }
}
```

[Return to top](#apiviewchartbuiltin)

## Response Structure

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "timeZoneOffset": {
      "type": "number"
    },
    "defaultChart": {
      "type": "number"
    },
    "chartMenuSections": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string"
        },
        "predefinedCharts": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string"
            },
            "chartType": {
              "type": "number"
            },
            "chartDescription": {
              "type": "string"
            },
            "isAdvanced": {
              "type": "boolean"
            },
            "parameters": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "number"
                },
                "type": {
                  "type": "number"
                },
                "value": {
                  "type": "string"
                },
                "selectionItems": {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "value": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        },
        "hardwareOptions": {
          "type": "number"
        },
        "sectionCode": {
          "type": "number"
        }
      }
    },
    "hardwareFunctions": {
      "type": "number"
    }
  }
}
```

[Return to top](#apiviewchartbuiltin)

## Example

**Request:**

```http
POST /api/view/chart/builtin
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Content-Type: application/json
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/S68143/administration/config
```

**Payload:**

```json
{
  "siteKeys": [
    "S68143"
  ]
}
```

**Response:**

```json
{
  "name": "*** LOST?* THD CA - 2304 Monterey Park",
  "timeZoneOffset": -5,
  "defaultChart": 15,
  "chartMenuSections": [
    {
      "title": "Inverter",
      "predefinedCharts": [
        {
          "displayName": "Actual & Expected Sum",
          "chartType": 77,
          "chartDescription": "Shows the sum of all inverters, along with the sum of the expected (modeled) output for all inverters.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 52,
              "type": 29,
              "value": "Pow",
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
              ]
            },
            {
              "id": 4,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 31,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 21,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Analyzer: (PV / model ratio)",
          "chartType": 53,
          "chartDescription": "The performance index, along with module temperature and irradiance",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 69,
              "type": 1,
              "value": 0,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Analyzer: normalized inverter yield",
          "chartType": 51,
          "chartDescription": "The normalized yield is the output divided by the DC system size, adjusted for orientation. This shows the what the relative performance of different systems would be if they were all the same size and facing the same direction.",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Cumulative Energy",
          "chartType": 24,
          "chartDescription": "",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "type": 16,
              "value": true,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Data Classification",
          "chartType": 204,
          "chartDescription": "Determine classification of data based on machine learning algorithms (currently only works for shading).",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 9,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 10,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 70,
              "type": 1,
              "value": 0,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "DC Current vs. Expected",
          "chartType": 201,
          "chartDescription": "Scatter plot showing DC current relative to the expected DC current",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "DC Voltage vs. Module Temperature",
          "chartType": 199,
          "chartDescription": "Scatter plot showing inverter DC voltage relative to module temperature",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Efficiency",
          "chartType": 5,
          "chartDescription": "Inverter AC power output divided by DC power input.",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Energy Ratio",
          "chartType": 176,
          "chartDescription": "The Energy Ratio is the ratio of energy to Plane of Array insolation.  This can be calculated using insolation, insolation normalized to 25 °C, or the expected energy based on the PV model.  Change the type of calculation with the \"Energy Ratio Mode\" chart input parameter or the Performance Test Type (on the Site Setup / Performance page).",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 62,
              "type": 34,
              "value": 2,
              "selectionItems": [
                {
                  "name": "POA insolation",
                  "value": 0
                },
                {
                  "name": "POA insolation, normalized to 25 °C",
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
                  "name": "POA insolation, normalized to 25 °C, Gross energy",
                  "value": 17
                },
                {
                  "name": "Full PV model, Gross energy",
                  "value": 18
                }
              ]
            }
          ]
        },
        {
          "displayName": "Energy weighted availability",
          "chartType": 248,
          "chartDescription": "Availability for all inverters on a site, as the ratio of energy loss to modeled energy (based on IEC 63019, section B.3).  This calculation uses expected energy when available and estimated energy when expected energy can't be calculated.",
          "isAdvanced": false,
          "parameters": []
        },
        {
          "displayName": "Environmental Impact",
          "chartType": 61,
          "chartDescription": "",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Fill Energy Gaps",
          "chartType": 249,
          "chartDescription": "Fill gaps in energy and power when generation appears to have occurred during a data outage.",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Hourly Yield",
          "chartType": 171,
          "chartDescription": "The hourly yield is the ratio of energy output to DC system size.  It represents the energy production as the equivalent percentage of time at full DC power output.",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Inverter AC",
          "chartType": 8,
          "chartDescription": "Inverter output voltage and current.",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Inverter Availability",
          "chartType": 259,
          "chartDescription": "Inverter Availability, based on the site availability settings",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 0,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 61,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Inverter DC",
          "chartType": 7,
          "chartDescription": "Inverter input voltage and current.",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Inverter Downtime Days",
          "chartType": 246,
          "chartDescription": "Show the number of days for each inverter with less than 95% availability.",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Inverter faults",
          "chartType": 252,
          "chartDescription": "Show inverter fault data.",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Inverter Performance",
          "chartType": 73,
          "chartDescription": "Inverter production with reference models",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 10,
              "type": 16,
              "value": true,
              "selectionItems": null
            },
            {
              "id": 6,
              "type": 16,
              "value": true,
              "selectionItems": null
            },
            {
              "id": 7,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 8,
              "type": 36,
              "value": 1,
              "selectionItems": [
                {
                  "name": "None",
                  "value": 0
                },
                {
                  "name": "Line",
                  "value": 1
                },
                {
                  "name": "Shadow",
                  "value": 2
                }
              ]
            }
          ]
        },
        {
          "displayName": "Inverter Phases",
          "chartType": 84,
          "chartDescription": "Detailed inverter data, including individual phase voltages, currents and power factor",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Inverter variance",
          "chartType": 198,
          "chartDescription": "Show the variance between the yield of each inverter relative to the maximum yield from all inverters for each time interval.  View as a data table to see variances highlighted in color.",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Inverter/Model variance",
          "chartType": 196,
          "chartDescription": "Show the variance between the power produced relative to the expected modeled power.  View as a data table to see variances highlighted in color.",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Maximum power output",
          "chartType": 167,
          "chartDescription": "The sum of the maximum power output for production meters or inverters for each interval.  Also calculates the maximum power over the entire query span.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 87,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Module Degrade Inverter",
          "chartType": 226,
          "chartDescription": "Calculate module degradation per inverter using the NREL Module Degradation Algorithm (requires at least two years of data, more years of data will give better results).  This calculation may not produce useful results if the data is inconsistent.  This query takes a long time to run and is therefore not suitable for interactive charts.  Please use this query in reports.",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Module Degrade Site",
          "chartType": 203,
          "chartDescription": "Calculate module degradation of the entire site using the NREL Module Degradation Algorithm (requires at least two years of data, more years of data will give better results).  This calculation may not produce useful results if the data is inconsistent.  This query takes a long time to run and is therefore not suitable for interactive charts.  Please use this query in reports.",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "MPPT",
          "chartType": 120,
          "chartDescription": "Show individual inverter Max Power Point Tracker data.",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "MPPT Normalized Yield",
          "chartType": 122,
          "chartDescription": "Show individual inverter Max Power Point Tracker yield, adjusted for orientation. This shows the what the relative performance of different systems would be if they were all the same size and facing the same direction.",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "MPPT Yield",
          "chartType": 121,
          "chartDescription": "Show individual inverter Max Power Point Tracker yield.",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Normalized Yield",
          "chartType": 22,
          "chartDescription": "The normalized yield is the output divided by the DC system size, adjusted for orientation. This shows the what the relative performance of different systems would be if they were all the same size and facing the same direction.",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "NREL Performance Ratio",
          "chartType": 185,
          "chartDescription": "Temperature adjusted performance ratio using the methodology described in NREL/TP-5200-57991 (module temperature calculated from ambient temperature, irradiance and wind speed).",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 93,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 92,
              "type": 42,
              "value": 0,
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
              ]
            },
            {
              "id": 99,
              "type": 43,
              "value": 0,
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
              ]
            },
            {
              "id": 73,
              "type": 2,
              "value": 200,
              "selectionItems": null
            },
            {
              "id": 100,
              "type": 2,
              "value": 45,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Peak daily power",
          "chartType": 233,
          "chartDescription": "Peak power for the given meters or inverters",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Peak kW to DC Size Comparison",
          "chartType": 100,
          "chartDescription": "Shows relative peak performance over time",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Performance (side by side)",
          "chartType": 3,
          "chartDescription": "This chart shows the output each inverter or meter in the system side-by-side. For systems with similarly sized components, this is a simple way to evaluate the relative performance of each component in the system.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 10,
              "type": 16,
              "value": true,
              "selectionItems": null
            },
            {
              "id": 6,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Performance Histogram",
          "chartType": 30,
          "chartDescription": "Performance ratio relative to reference.",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Performance Index",
          "chartType": 57,
          "chartDescription": "Power output divided by the expected output using the PV model for each inverter, based on module temperature and irradiance.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 2,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 0,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 91,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 93,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Performance Ratio",
          "chartType": 23,
          "chartDescription": "Performance ratio shows power output relative to irradiance and system size, adjusted for module temperature.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 88,
              "type": 40,
              "value": 1,
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
              ]
            },
            {
              "id": 0,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 91,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 93,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 60,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Power vs. Expected",
          "chartType": 200,
          "chartDescription": "Scatter plot showing power output relative to the expected (modeled) power",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Production and Estimate",
          "chartType": 2,
          "chartDescription": "The Production and Estimate chart shows inverter output along with the estimated output.  When viewing individual days, performance is shown in terms of power.  Energy is shown when viewing longer time spans.",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 21,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 10,
              "type": 16,
              "value": true,
              "selectionItems": null
            },
            {
              "id": 6,
              "type": 16,
              "value": true,
              "selectionItems": null
            },
            {
              "id": 9,
              "type": 16,
              "value": true,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Production and Expected",
          "chartType": 6,
          "chartDescription": "Inverter production and expected production based on the PV model using measured irradiance and module temperature",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 21,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 9,
              "type": 16,
              "value": true,
              "selectionItems": null
            },
            {
              "id": 10,
              "type": 16,
              "value": true,
              "selectionItems": null
            },
            {
              "id": 69,
              "type": 1,
              "value": 0,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "PV Model Components",
          "chartType": 80,
          "chartDescription": "Individual model components contributing to the expected production, based on irradiance and module temperature",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "PV Model Error",
          "chartType": 81,
          "chartDescription": "The difference between the full PV model and the actual production",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "PV Model Incidence Angle Setup",
          "chartType": 68,
          "chartDescription": "Performance as a function of incidence angle, for fine-tuning the incidence angle modifier",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "PV Model Losses",
          "chartType": 72,
          "chartDescription": "Inverter model results and associated losses",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 0,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 7,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 63,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "PV Model Scatter",
          "chartType": 82,
          "chartDescription": "The correlation between inverter output and the PV Model as a scatter plot",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "PV Model Setup",
          "chartType": 58,
          "chartDescription": "Detailed data used by the PV model and allows fine-tuning of the PV model parameters based on analysis of the data",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "PV Model Shade Impact Setup",
          "chartType": 69,
          "chartDescription": "Performance, solar azimuth/elevation and incidence angle, for creating a shade impact model.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 10,
              "type": 16,
              "value": true,
              "selectionItems": null
            },
            {
              "id": 6,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "PVG: Adjusted Power Curve Method (BnetzA – Germany)",
          "chartType": 241,
          "chartDescription": "Skytron PV Guard energy loss calculation using the Adjusted Power Curve Method.  Requires irradiance data without gaps.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 32,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "PVG: Flat rate without registering power measurement",
          "chartType": 244,
          "chartDescription": "Energy loss calculation using the flat-rate procedure without reference data (Bundesnetzagentur Guide to feed-in management, version 3.0 section 2.3.4.2).",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "PVG: Last Measured Value Method (BnetzA – Germany)",
          "chartType": 242,
          "chartDescription": "Skytron PV Guard energy loss calculation using the Last Measured Value Method",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "PVG: Reference Inverter",
          "chartType": 243,
          "chartDescription": "Skytron PV Guard energy loss calculation for a meter using a nearby reference inverter",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Soiling Detector",
          "chartType": 78,
          "chartDescription": "Analyzes inverter performance data to identify when production is being impacted by dirt on the modules and calculates the resulting energy loss.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 63,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "String Availability",
          "chartType": 271,
          "chartDescription": "Shows the availability for DC strings (number of operating strings / number of strings)",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 2,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 101,
              "type": 2,
              "value": 0.5,
              "selectionItems": null
            },
            {
              "id": 102,
              "type": 2,
              "value": 0.1,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Synthesized Power",
          "chartType": 228,
          "chartDescription": "Estimates power for an inverter or meter, using the best available nearby device or weather data.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 71,
              "type": 1,
              "value": 0,
              "selectionItems": null
            },
            {
              "id": 72,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Uptime",
          "chartType": 28,
          "chartDescription": "The uptime is calculated when the required minimum irradiance is configured within the Site Setup Performance options (default = 100 w/m²).  The percentage is 100% for every 15 minute interval when the inverter is producing power.  If no weather data is available for a sample, then that 15 minute period is ignored.  The weighted-average for the time span is calculated for all inverters based on their relative system size.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Yield",
          "chartType": 4,
          "chartDescription": "The yield is the output divided by the DC system size. This is used to evaluate performance between difference size systems.",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 0,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        }
      ],
      "hardwareOptions": [
        1
      ],
      "sectionCode": 1
    },
    {
      "title": "Production",
      "predefinedCharts": [
        {
          "displayName": "Actual vs. Expected Power and Irradiance",
          "chartType": 255,
          "chartDescription": "Line plot showing actual power, expected power and POA irradiance.",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Cumulative Energy",
          "chartType": 24,
          "chartDescription": "",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "type": 16,
              "value": true,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Energy Availability",
          "chartType": 234,
          "chartDescription": "Availability based on the ratio of production meter energy to inverter energy.  This calculation estimates inverter availability by comparing the energy from each production meter to the expected energy based on the energy measured from each associated inverter.  The expected energy is calculated from the inverters that are communicating and the relative size of those inverters to all inverters.",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Energy Production Comparison",
          "chartType": 101,
          "chartDescription": "Shows relative production over time",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Energy Ratio",
          "chartType": 176,
          "chartDescription": "The Energy Ratio is the ratio of energy to Plane of Array insolation.  This can be calculated using insolation, insolation normalized to 25 °C, or the expected energy based on the PV model.  Change the type of calculation with the \"Energy Ratio Mode\" chart input parameter or the Performance Test Type (on the Site Setup / Performance page).",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 62,
              "type": 34,
              "value": 2,
              "selectionItems": [
                {
                  "name": "POA insolation",
                  "value": 0
                },
                {
                  "name": "POA insolation, normalized to 25 °C",
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
                  "name": "POA insolation, normalized to 25 °C, Gross energy",
                  "value": 17
                },
                {
                  "name": "Full PV model, Gross energy",
                  "value": 18
                }
              ]
            }
          ]
        },
        {
          "displayName": "Fill Energy Gaps",
          "chartType": 249,
          "chartDescription": "Fill gaps in energy and power when generation appears to have occurred during a data outage.",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Inverter Availability",
          "chartType": 259,
          "chartDescription": "Inverter Availability, based on the site availability settings",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 0,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 61,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Maximum power output",
          "chartType": 167,
          "chartDescription": "The sum of the maximum power output for production meters or inverters for each interval.  Also calculates the maximum power over the entire query span.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 87,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Meter Model Losses",
          "chartType": 207,
          "chartDescription": "Inverter model results and associated losses, per production meter",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 0,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 7,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 63,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Meter Yield",
          "chartType": 11,
          "chartDescription": "The yield is the output divided by the DC system size. This is used to evaluate performance between difference size systems.",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "NREL Performance Ratio",
          "chartType": 185,
          "chartDescription": "Temperature adjusted performance ratio using the methodology described in NREL/TP-5200-57991 (module temperature calculated from ambient temperature, irradiance and wind speed).",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 93,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 92,
              "type": 42,
              "value": 0,
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
              ]
            },
            {
              "id": 99,
              "type": 43,
              "value": 0,
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
              ]
            },
            {
              "id": 73,
              "type": 2,
              "value": 200,
              "selectionItems": null
            },
            {
              "id": 100,
              "type": 2,
              "value": 45,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Peak daily power",
          "chartType": 233,
          "chartDescription": "Peak power for the given meters or inverters",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Performance Index",
          "chartType": 57,
          "chartDescription": "Power output divided by the expected output using the PV model for each inverter, based on module temperature and irradiance.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 2,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 0,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 91,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 93,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Performance Ratio",
          "chartType": 23,
          "chartDescription": "Performance ratio shows power output relative to irradiance and system size, adjusted for module temperature.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 88,
              "type": 40,
              "value": 1,
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
              ]
            },
            {
              "id": 0,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 91,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 93,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 60,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Power vs. Expected",
          "chartType": 200,
          "chartDescription": "Scatter plot showing power output relative to the expected (modeled) power",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Production & Model",
          "chartType": 64,
          "chartDescription": "Actual production and expected production based on the PV model and weather data",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 21,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 52,
              "type": 29,
              "value": "Pow",
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
              ]
            },
            {
              "id": 2,
              "type": 16,
              "value": true,
              "selectionItems": null
            },
            {
              "id": 4,
              "type": 16,
              "value": true,
              "selectionItems": null
            },
            {
              "id": 69,
              "type": 1,
              "value": 0,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Production Meter",
          "chartType": 15,
          "chartDescription": "The Production Meter chart shows inverter output at the meter along with the expected or estimated output under ideal conditions.  When viewing individual days, performance is shown in terms of power.  Energy is shown when viewing longer time spans.",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 21,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 52,
              "type": 29,
              "value": "Pow",
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
              ]
            },
            {
              "id": 2,
              "type": 16,
              "value": true,
              "selectionItems": null
            },
            {
              "id": 4,
              "type": 16,
              "value": true,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Production Meter Phases",
          "chartType": 38,
          "chartDescription": "Detailed meter data, including individual phase voltages, currents and power factor",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Production Performance Index",
          "chartType": 79,
          "chartDescription": "Power output divided by the expected output using the PV model, based on module temperature and irradiance",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 61,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "PV System Capacity Analyzer",
          "chartType": 123,
          "chartDescription": "Perform a capacity analysis test by filtering data and calculating a curve fit for power output as a function of irradiance, adjusted for temperature.  Based on ASTM E2848-13",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 73,
              "type": 1,
              "value": 500,
              "selectionItems": null
            },
            {
              "id": 74,
              "type": 2,
              "value": 10,
              "selectionItems": null
            },
            {
              "id": 75,
              "type": 2,
              "value": 1,
              "selectionItems": null
            },
            {
              "id": 76,
              "type": 2,
              "value": 5,
              "selectionItems": null
            },
            {
              "id": 77,
              "type": 2,
              "value": 3,
              "selectionItems": null
            },
            {
              "id": 78,
              "type": 2,
              "value": 0.98,
              "selectionItems": null
            },
            {
              "id": 79,
              "type": 2,
              "value": 0.2,
              "selectionItems": null
            },
            {
              "id": 80,
              "type": 1,
              "value": 1,
              "selectionItems": null
            },
            {
              "id": 81,
              "type": 1,
              "value": 800,
              "selectionItems": null
            },
            {
              "id": 82,
              "type": 1,
              "value": 25,
              "selectionItems": null
            },
            {
              "id": 83,
              "type": 1,
              "value": 0,
              "selectionItems": null
            },
            {
              "id": 84,
              "type": 1,
              "value": 0,
              "selectionItems": null
            },
            {
              "id": 85,
              "type": 2,
              "value": 0,
              "selectionItems": null
            },
            {
              "id": 86,
              "type": 2,
              "value": 5.3,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "PV System Capacity Analyzer, Ambient",
          "chartType": 250,
          "chartDescription": "Perform a capacity analysis test by filtering data and calculating regression for power output as a function of irradiance, ambient temperature and wind speed.  Based on ASTM E2848-13",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 78,
              "type": 2,
              "value": 0.98,
              "selectionItems": null
            },
            {
              "id": 73,
              "type": 1,
              "value": 100,
              "selectionItems": null
            },
            {
              "id": 74,
              "type": 2,
              "value": 10,
              "selectionItems": null
            },
            {
              "id": 77,
              "type": 2,
              "value": 3,
              "selectionItems": null
            },
            {
              "id": 81,
              "type": 1,
              "value": 800,
              "selectionItems": null
            },
            {
              "id": 95,
              "type": 1,
              "value": 25,
              "selectionItems": null
            },
            {
              "id": 96,
              "type": 1,
              "value": 1,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "PVG: Adjusted Power Curve Method (BnetzA – Germany)",
          "chartType": 241,
          "chartDescription": "Skytron PV Guard energy loss calculation using the Adjusted Power Curve Method.  Requires irradiance data without gaps.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 32,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "PVG: Flat rate without registering power measurement",
          "chartType": 244,
          "chartDescription": "Energy loss calculation using the flat-rate procedure without reference data (Bundesnetzagentur Guide to feed-in management, version 3.0 section 2.3.4.2).",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "PVG: Last Measured Value Method (BnetzA – Germany)",
          "chartType": 242,
          "chartDescription": "Skytron PV Guard energy loss calculation using the Last Measured Value Method",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "PVG: Reference Inverter",
          "chartType": 243,
          "chartDescription": "Skytron PV Guard energy loss calculation for a meter using a nearby reference inverter",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Received & Delivered",
          "chartType": 156,
          "chartDescription": "Energy Received, Delivered and Net",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "type": 16,
              "value": true,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Recorded allocation (cost)",
          "chartType": 219,
          "chartDescription": "Recorded energy costs for specified time-periods allocated evenly or weighted over the span.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 0,
              "type": 16,
              "value": true,
              "selectionItems": null
            },
            {
              "id": 59,
              "type": 16,
              "value": true,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Recorded allocation (savings)",
          "chartType": 220,
          "chartDescription": "Recorded energy savings for specified time-periods allocated evenly or weighted over the span.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 0,
              "type": 16,
              "value": true,
              "selectionItems": null
            },
            {
              "id": 59,
              "type": 16,
              "value": true,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Recorded downtime (excluded)",
          "chartType": 218,
          "chartDescription": "Recorded downtime and production impacts categorized as Excluded, such as out of contract or guarantee scope.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 0,
              "type": 16,
              "value": true,
              "selectionItems": null
            },
            {
              "id": 59,
              "type": 16,
              "value": true,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Recorded downtime (included)",
          "chartType": 217,
          "chartDescription": "Recorded downtime and production impacts categorized as Included, such as in contract or guarantee scope.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 0,
              "type": 16,
              "value": true,
              "selectionItems": null
            },
            {
              "id": 59,
              "type": 16,
              "value": true,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Recorded downtime (uncategorized)",
          "chartType": 229,
          "chartDescription": "Recorded downtime and production impacts categorized as Other, such as out of contract or guarantee scope.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 0,
              "type": 16,
              "value": true,
              "selectionItems": null
            },
            {
              "id": 59,
              "type": 16,
              "value": true,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Site Performance Index",
          "chartType": 59,
          "chartDescription": "The performance index for the total production at a site (actual output divided by the expected output).  Data from individual meters and inverters is not shown.",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Soiling Detector",
          "chartType": 78,
          "chartDescription": "Analyzes inverter performance data to identify when production is being impacted by dirt on the modules and calculates the resulting energy loss.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 63,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "SREC Report Query",
          "chartType": 227,
          "chartDescription": "Returns daily and cumulative energy.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Synthesized Power",
          "chartType": 228,
          "chartDescription": "Estimates power for an inverter or meter, using the best available nearby device or weather data.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 71,
              "type": 1,
              "value": 0,
              "selectionItems": null
            },
            {
              "id": 72,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Uptime",
          "chartType": 28,
          "chartDescription": "The uptime is calculated when the required minimum irradiance is configured within the Site Setup Performance options (default = 100 w/m²).  The percentage is 100% for every 15 minute interval when the inverter is producing power.  If no weather data is available for a sample, then that 15 minute period is ignored.  The weighted-average for the time span is calculated for all inverters based on their relative system size.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Yield",
          "chartType": 4,
          "chartDescription": "The yield is the output divided by the DC system size. This is used to evaluate performance between difference size systems.",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 0,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        }
      ],
      "hardwareOptions": [
        2
      ],
      "sectionCode": 2
    },
    {
      "title": "Weather",
      "predefinedCharts": [
        {
          "displayName": "Clean average weather data",
          "chartType": 257,
          "chartDescription": "Filters weather data and substitutes alternate data from alternate source if necessary to produce the best possible representation of weather conditions.",
          "isAdvanced": false,
          "parameters": []
        },
        {
          "displayName": "GHI comparison",
          "chartType": 187,
          "chartDescription": "Compare irradiance data from multiple sources, normalized to GHI.",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 92,
              "type": 42,
              "value": 0,
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
              ]
            },
            {
              "id": 97,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Irradiance",
          "chartType": 21,
          "chartDescription": "Measured, GHI, POA and modeled irradiance and insolation.  Use the \"Blue-sky ratio\" to compare sensor data on clear days to the calculated reference data.",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 5,
              "type": 35,
              "value": [
                {
                  "value": 0,
                  "isChecked": false
                },
                {
                  "value": 1,
                  "isChecked": true
                },
                {
                  "value": 2,
                  "isChecked": false
                },
                {
                  "value": 4,
                  "isChecked": false
                },
                {
                  "value": 8,
                  "isChecked": false
                },
                {
                  "value": 16,
                  "isChecked": false
                },
                {
                  "value": 32,
                  "isChecked": false
                },
                {
                  "value": 64,
                  "isChecked": false
                },
                {
                  "value": 128,
                  "isChecked": false
                }
              ],
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Irradiance scatter comparison",
          "chartType": 186,
          "chartDescription": "Compare irradiance data from multiple sources using a scatter chart.  All data is normalized to GHI.  The first data set is used for the X axis, all others are used for the Y axis.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 64,
              "type": 1,
              "value": 0,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Irradiance Sensor Degrade",
          "chartType": 245,
          "chartDescription": "Calculates irradiance sensor degradation (requires at least 3 years of data).",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 64,
              "type": 1,
              "value": 0,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Irradiance sensor orientation",
          "chartType": 258,
          "chartDescription": "Show the correlation of POA sensor data to the clear sky model, and estimates the orientation of an irradiance sensor for maximum correlation.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 0,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "POA comparison",
          "chartType": 240,
          "chartDescription": "Compare irradiance data from multiple sources, normalized to POA.",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 92,
              "type": 42,
              "value": 0,
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
              ]
            }
          ]
        },
        {
          "displayName": "Temperature",
          "chartType": 19,
          "chartDescription": "Ambient and module temperature.",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 4,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Wind",
          "chartType": 20,
          "chartDescription": "",
          "isAdvanced": false,
          "parameters": []
        }
      ],
      "hardwareOptions": [
        5
      ],
      "sectionCode": 4
    },
    {
      "title": "Strings",
      "predefinedCharts": [
        {
          "displayName": "String Availability",
          "chartType": 271,
          "chartDescription": "Shows the availability for DC strings (number of operating strings / number of strings)",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 2,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 101,
              "type": 2,
              "value": 0.5,
              "selectionItems": null
            },
            {
              "id": 102,
              "type": 2,
              "value": 0.1,
              "selectionItems": null
            }
          ]
        }
      ],
      "hardwareOptions": [
        1,
        6,
        7,
        8
      ],
      "sectionCode": 5
    },
    {
      "title": "Zones",
      "predefinedCharts": [
        {
          "displayName": "String Availability",
          "chartType": 271,
          "chartDescription": "Shows the availability for DC strings (number of operating strings / number of strings)",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 2,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 101,
              "type": 2,
              "value": 0.5,
              "selectionItems": null
            },
            {
              "id": 102,
              "type": 2,
              "value": 0.1,
              "selectionItems": null
            }
          ]
        }
      ],
      "hardwareOptions": [
        1,
        6,
        7,
        8
      ],
      "sectionCode": 6
    },
    {
      "title": "Site Aggregate",
      "predefinedCharts": [
        {
          "displayName": "Cumulative production: actual, expected and estimated",
          "chartType": 195,
          "chartDescription": "Cumulative production compared against the expected (modeled) production, along with the estimated site production",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 52,
              "type": 29,
              "value": "Pow",
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
              ]
            },
            {
              "id": 4,
              "type": 16,
              "value": true,
              "selectionItems": null
            },
            {
              "id": 31,
              "type": 16,
              "value": true,
              "selectionItems": null
            },
            {
              "id": 21,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Device availability",
          "chartType": 197,
          "chartDescription": "Device availability based on recorded downtime percentages weighted by device size relative to system size.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 0,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 61,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Generation",
          "chartType": 94,
          "chartDescription": "Total generation, as reported by all production meters on a site.  If production meters aren't available, then inverter data is used.",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 10,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 21,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 55,
              "type": 37,
              "value": 0,
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
              ]
            },
            {
              "id": 56,
              "type": 1,
              "value": 0,
              "selectionItems": null
            },
            {
              "id": 57,
              "type": 31,
              "value": 0,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Generation by Inverter",
          "chartType": 98,
          "chartDescription": "Power output for all inverters",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 55,
              "type": 37,
              "value": 0,
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
              ]
            },
            {
              "id": 56,
              "type": 1,
              "value": 0,
              "selectionItems": null
            },
            {
              "id": 57,
              "type": 31,
              "value": 0,
              "selectionItems": null
            },
            {
              "id": 21,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Meter, Inverter & GHI",
          "chartType": 93,
          "chartDescription": "Total production reported by the production meters and inverters, along with the Global Horizontal Irradiance",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Predicted Power",
          "chartType": 97,
          "chartDescription": "Predicted and actual PV power",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 55,
              "type": 37,
              "value": 0,
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
              ]
            },
            {
              "id": 56,
              "type": 1,
              "value": 0,
              "selectionItems": null
            },
            {
              "id": 57,
              "type": 31,
              "value": 0,
              "selectionItems": null
            },
            {
              "id": 21,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Production: actual, expected and estimated",
          "chartType": 89,
          "chartDescription": "Production compared against the expected (modeled) production, along with the estimated site production",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 52,
              "type": 29,
              "value": "Pow",
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
              ]
            },
            {
              "id": 4,
              "type": 16,
              "value": true,
              "selectionItems": null
            },
            {
              "id": 31,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 21,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Site availability",
          "chartType": 119,
          "chartDescription": "Site availability based on recorded downtime percentages.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 0,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 61,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Site Production",
          "chartType": 99,
          "chartDescription": "Shows total energy production for a site (uses production meters if available, otherwise use inverters)",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 55,
              "type": 37,
              "value": 0,
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
              ]
            },
            {
              "id": 56,
              "type": 1,
              "value": 0,
              "selectionItems": null
            },
            {
              "id": 57,
              "type": 31,
              "value": 0,
              "selectionItems": null
            },
            {
              "id": 21,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Site: ambient",
          "chartType": 110,
          "chartDescription": "Ambient temperature",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Site: budgeted production",
          "chartType": 118,
          "chartDescription": "Shows budget energy production for a site, based on preconfigured monthly production estimates degraded annually without interpolation between months",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Site: cumulative production",
          "chartType": 105,
          "chartDescription": "Shows cumulative energy production for a site (use production meters if available, otherwise use inverters)",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Site: DNI",
          "chartType": 115,
          "chartDescription": "Direct Normal Irradiance",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Site: estimated GHI insolation",
          "chartType": 159,
          "chartDescription": "Estimated GHI insolation, based on preconfigured monthly insolation estimates",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Site: estimated GHI insolation (annual degrade)",
          "chartType": 160,
          "chartDescription": "Estimated GHI insolation, based on preconfigured monthly insolation estimates degraded annually without interpolation between months",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Site: estimated insolation",
          "chartType": 116,
          "chartDescription": "Estimated insolation, based on preconfigured monthly insolation estimates",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Site: estimated insolation (annual degrade)",
          "chartType": 117,
          "chartDescription": "Estimated insolation, based on preconfigured monthly insolation estimates degraded annually without interpolation between months",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Site: estimated production",
          "chartType": 106,
          "chartDescription": "Shows estimated energy production for a site, based on preconfigured monthly production estimates",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Site: expected production",
          "chartType": 107,
          "chartDescription": "Shows expected energy production for a site, based on measured irradiance and module temperature",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Site: GHI",
          "chartType": 109,
          "chartDescription": "Global Horizontal Irradiance",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Site: interval production",
          "chartType": 104,
          "chartDescription": "Shows energy production for a site (use production meters if available, otherwise use inverters)",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Site: inverter uptime",
          "chartType": 113,
          "chartDescription": "The uptime is calculated when there’s the required minimum irradiance (default = 100 w/m², configurable on Site Setup page, Performance tab).  The percentage is 100% for every 15 minute interval when the inverter is producing power.  If there’s no weather data, then that 15 minute period is ignored.  The weighted-average for the time span is calculated for all inverters based on their relative system size.",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Site: module",
          "chartType": 111,
          "chartDescription": "Module temperature",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Site: POA",
          "chartType": 108,
          "chartDescription": "Plane of Array Irradiance",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Site: Uptime",
          "chartType": 168,
          "chartDescription": "The uptime for the site is calculated as a weighted average percentage of each inverter (or each meter if no inverters are present), when the required minimum irradiance is configured within the Site Setup Performance options (default = 100 w/m²).  For each device, the percentage is 100% for every 15 minute interval when the inverter is producing power. If no weather data is available for a sample, then that 15 minute period is ignored.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 55,
              "type": 37,
              "value": 0,
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
              ]
            },
            {
              "id": 56,
              "type": 1,
              "value": 0,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Volts & Amps",
          "chartType": 95,
          "chartDescription": "AC voltage and current",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 55,
              "type": 37,
              "value": 0,
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
              ]
            },
            {
              "id": 56,
              "type": 1,
              "value": 0,
              "selectionItems": null
            },
            {
              "id": 57,
              "type": 31,
              "value": 0,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Weather",
          "chartType": 96,
          "chartDescription": "Site weather data",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 55,
              "type": 37,
              "value": 0,
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
              ]
            },
            {
              "id": 56,
              "type": 1,
              "value": 0,
              "selectionItems": null
            },
            {
              "id": 57,
              "type": 31,
              "value": 0,
              "selectionItems": null
            }
          ]
        }
      ],
      "hardwareOptions": [],
      "sectionCode": 17
    },
    {
      "title": "Summary",
      "predefinedCharts": [
        {
          "displayName": "Environmental Impact Summary",
          "chartType": 62,
          "chartDescription": "",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Estimate Comparison",
          "chartType": 47,
          "chartDescription": "",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 10,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 6,
              "type": 16,
              "value": true,
              "selectionItems": null
            },
            {
              "id": 52,
              "type": 29,
              "value": "Pow",
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
              ]
            }
          ]
        },
        {
          "displayName": "Estimate Comparison (daily)",
          "chartType": 75,
          "chartDescription": "",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 10,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 6,
              "type": 16,
              "value": true,
              "selectionItems": null
            },
            {
              "id": 52,
              "type": 29,
              "value": "Pow",
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
              ]
            }
          ]
        },
        {
          "displayName": "Model Comparison",
          "chartType": 46,
          "chartDescription": "",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 10,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 6,
              "type": 16,
              "value": true,
              "selectionItems": null
            },
            {
              "id": 52,
              "type": 29,
              "value": "Pow",
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
              ]
            }
          ]
        },
        {
          "displayName": "Performance Ratio (detail)",
          "chartType": 49,
          "chartDescription": "Site Performance Ratio, not adjusted for temperature (kW / DC size / irradiance) or (kWh / DC size / insolation)",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Performance Ratio (summary)",
          "chartType": 48,
          "chartDescription": "Power output divided by DC system size and irradiance",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 10,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 6,
              "type": 16,
              "value": true,
              "selectionItems": null
            },
            {
              "id": 52,
              "type": 29,
              "value": "Pow",
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
              ]
            }
          ]
        },
        {
          "displayName": "Production Comparison",
          "chartType": 44,
          "chartDescription": "Compare production between multiple sites",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 10,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 6,
              "type": 16,
              "value": true,
              "selectionItems": null
            },
            {
              "id": 52,
              "type": 29,
              "value": "Pow",
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
              ]
            }
          ]
        },
        {
          "displayName": "Site Production Comparison",
          "chartType": 90,
          "chartDescription": "Production for each site compared against the expected production, and estimated production. Shows individual site results.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 52,
              "type": 29,
              "value": "Pow",
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
              ]
            },
            {
              "id": 21,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Site Production Total",
          "chartType": 91,
          "chartDescription": "Total site production compared against the expected and estimated production.  Adds results for multiple sites.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 52,
              "type": 29,
              "value": "Pow",
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
              ]
            },
            {
              "id": 21,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Site Projected vs. Actual",
          "chartType": 173,
          "chartDescription": "Production for each site compared against the projected production. Shows individual site results.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 52,
              "type": 29,
              "value": "Pow",
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
              ]
            },
            {
              "id": 21,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Site Yield",
          "chartType": 45,
          "chartDescription": "Total site output divided by DC system size",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 10,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 6,
              "type": 16,
              "value": true,
              "selectionItems": null
            },
            {
              "id": 52,
              "type": 29,
              "value": "Pow",
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
              ]
            }
          ]
        },
        {
          "displayName": "Total Production",
          "chartType": 43,
          "chartDescription": "The Total Production chart shows a summary of inverter output at the meter for multiple sites.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 10,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 6,
              "type": 16,
              "value": true,
              "selectionItems": null
            },
            {
              "id": 52,
              "type": 29,
              "value": "Pow",
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
              ]
            }
          ]
        },
        {
          "displayName": "Total Production & Estimate",
          "chartType": 60,
          "chartDescription": "",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 10,
              "type": 16,
              "value": true,
              "selectionItems": null
            },
            {
              "id": 6,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 52,
              "type": 29,
              "value": "Pow",
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
              ]
            }
          ]
        },
        {
          "displayName": "Total Production & Model Estimate",
          "chartType": 67,
          "chartDescription": "",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Uptime Comparison (unweighted)",
          "chartType": 169,
          "chartDescription": "The uptime for each site is calculated as an average percentage of each inverter (or each meter if no inverters are present), when the required minimum irradiance is configured within the Site Setup Performance options (default = 100 w/m²). ",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 10,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 6,
              "type": 16,
              "value": true,
              "selectionItems": null
            },
            {
              "id": 52,
              "type": 29,
              "value": "Pow",
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
              ]
            }
          ]
        },
        {
          "displayName": "Uptime Comparison (weighted)",
          "chartType": 170,
          "chartDescription": "The uptime for each site is calculated as a weighted average percentage of each inverter (or each meter if no inverters are present), when the required minimum irradiance is configured within the Site Setup Performance options (default = 100 w/m²). ",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 10,
              "type": 16,
              "value": false,
              "selectionItems": null
            },
            {
              "id": 6,
              "type": 16,
              "value": true,
              "selectionItems": null
            },
            {
              "id": 52,
              "type": 29,
              "value": "Pow",
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
              ]
            }
          ]
        }
      ],
      "hardwareOptions": [],
      "sectionCode": 18
    },
    {
      "title": "Admin",
      "predefinedCharts": [
        {
          "displayName": "Archive Summary",
          "chartType": 65,
          "chartDescription": "",
          "isAdvanced": false,
          "parameters": []
        },
        {
          "displayName": "MassCEC CPTS Report",
          "chartType": 254,
          "chartDescription": "Special query for MassCEC's Clean Peak Tracking System",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "SGIP Report",
          "chartType": 125,
          "chartDescription": "Special query for CSE's Self-Generation Incentive Program",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Site Stats Performance Index",
          "chartType": 269,
          "chartDescription": "Ratio of site production energy and expected energy, used to calculate the last 24 hour PR for the Portfolio view.",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Site Stats Performance Ratio",
          "chartType": 261,
          "chartDescription": "Ratio of site production energy to DC size and irradiance, used to calculate the last 24 hour PR for the Portfolio view.",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Site Stats Power, Energy, Irradiance",
          "chartType": 172,
          "chartDescription": "PowerTrack internal query for comparing actual, expected and estimated production, for the most recent 15 minute and 24 hour time spans.",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 0,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        },
        {
          "displayName": "Site Stats Temperature Adjusted Performance Ratio",
          "chartType": 268,
          "chartDescription": "Ratio of site production energy to temperature adjusted DC size and irradiance, used to calculate the last 24 hour PR for the Portfolio view.",
          "isAdvanced": true,
          "parameters": []
        }
      ],
      "hardwareOptions": [],
      "sectionCode": 20
    },
    {
      "title": "Alert",
      "predefinedCharts": [
        {
          "displayName": "Alert, AC voltage",
          "chartType": 85,
          "chartDescription": "Detects missing or imbalanced AC voltages",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Alert, Energy estimate",
          "chartType": 86,
          "chartDescription": "Detects low energy production of the site relative to the site production estimates.",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Alert, Performance index",
          "chartType": 87,
          "chartDescription": "Detects low performance relative to the PV model for individual production meters.  If the site doesn't contain production meters, then the inverters are used.",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "displayName": "Alert, Soiling",
          "chartType": 152,
          "chartDescription": "Detects lost production due to soiling",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 63,
              "type": 16,
              "value": false,
              "selectionItems": null
            }
          ]
        }
      ],
      "hardwareOptions": [],
      "sectionCode": 21
    }
  ],
  "hardwareFunctions": [
    1,
    5,
    31,
    10,
    2,
    28
  ]
}
```

[Return to top](#apiviewchartbuiltin)

