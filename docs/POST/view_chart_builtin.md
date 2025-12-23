<a id="top"></a>
# /api/view/chart/builtin

[← Back to Index](../logs.md)

**Methods:** POST  
**Status Codes:** 200, 200, 200  

## Table of Contents

- [Payload Structure](#payload-structure)
- [General](#general)
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

[Return to top](#top)

## General

```json
{
  "type": "object",
  "properties": {
    "chartMenuSections": {
      "type": "object",
      "properties": {
        "hardwareOptions": {
          "type": "number"
        },
        "predefinedCharts": {
          "type": "object",
          "properties": {
            "chartDescription": {
              "type": "string"
            },
            "chartType": {
              "type": "number"
            },
            "displayName": {
              "type": "string"
            },
            "isAdvanced": {
              "type": "boolean"
            },
            "parameters": {
              "type": "object"
            }
          }
        },
        "sectionCode": {
          "type": "number"
        },
        "title": {
          "type": "string"
        }
      }
    },
    "defaultChart": {
      "type": "number"
    },
    "hardwareFunctions": {
      "type": "number"
    },
    "name": {
      "type": "string"
    },
    "timeZoneOffset": {
      "type": "number"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
POST /api/view/chart/builtin
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
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
  "chartMenuSections": [
    {
      "hardwareOptions": [
        1
      ],
      "predefinedCharts": [
        {
          "chartDescription": "Shows the sum of all inverters, along with the sum of the expected (modeled) output for all inverters.",
          "chartType": 77,
          "displayName": "Actual & Expected Sum",
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
              "value": false
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
          "chartDescription": "The performance index, along with module temperature and irradiance",
          "chartType": 53,
          "displayName": "Analyzer: (PV / model ratio)",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 69,
              "selectionItems": null,
              "type": 1,
              "value": 0
            }
          ]
        },
        {
          "chartDescription": "The normalized yield is the output divided by the DC system size, adjusted for orientation. This shows the what the relative performance of different systems would be if they were all the same size and facing the same direction.",
          "chartType": 51,
          "displayName": "Analyzer: normalized inverter yield",
          "isAdvanced": true,
          "parameters": []
        },
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
          "chartDescription": "Determine classification of data based on machine learning algorithms (currently only works for shading).",
          "chartType": 204,
          "displayName": "Data Classification",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 9,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 10,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 70,
              "selectionItems": null,
              "type": 1,
              "value": 0
            }
          ]
        },
        {
          "chartDescription": "Scatter plot showing DC current relative to the expected DC current",
          "chartType": 201,
          "displayName": "DC Current vs. Expected",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Scatter plot showing inverter DC voltage relative to module temperature",
          "chartType": 199,
          "displayName": "DC Voltage vs. Module Temperature",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Inverter AC power output divided by DC power input.",
          "chartType": 5,
          "displayName": "Efficiency",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "The Energy Ratio is the ratio of energy to Plane of Array insolation.  This can be calculated using insolation, insolation normalized to 25 °C, or the expected energy based on the PV model.  Change the type of calculation with the \"Energy Ratio Mode\" chart input parameter or the Performance Test Type (on the Site Setup / Performance page).",
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
              ],
              "type": 34,
              "value": 2
            }
          ]
        },
        {
          "chartDescription": "Availability for all inverters on a site, as the ratio of energy loss to modeled energy (based on IEC 63019, section B.3).  This calculation uses expected energy when available and estimated energy when expected energy can't be calculated.",
          "chartType": 248,
          "displayName": "Energy weighted availability",
          "isAdvanced": false,
          "parameters": []
        },
        {
          "chartDescription": "",
          "chartType": 61,
          "displayName": "Environmental Impact",
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
          "chartDescription": "Fill gaps in energy and power when generation appears to have occurred during a data outage.",
          "chartType": 249,
          "displayName": "Fill Energy Gaps",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "The hourly yield is the ratio of energy output to DC system size.  It represents the energy production as the equivalent percentage of time at full DC power output.",
          "chartType": 171,
          "displayName": "Hourly Yield",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Inverter output voltage and current.",
          "chartType": 8,
          "displayName": "Inverter AC",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Inverter Availability, based on the site availability settings",
          "chartType": 259,
          "displayName": "Inverter Availability",
          "isAdvanced": false,
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
          "chartDescription": "Inverter input voltage and current.",
          "chartType": 7,
          "displayName": "Inverter DC",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Show the number of days for each inverter with less than 95% availability.",
          "chartType": 246,
          "displayName": "Inverter Downtime Days",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Show inverter fault data.",
          "chartType": 252,
          "displayName": "Inverter faults",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Inverter production with reference models",
          "chartType": 73,
          "displayName": "Inverter Performance",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
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
              "value": true
            },
            {
              "id": 7,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 8,
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
              ],
              "type": 36,
              "value": 1
            }
          ]
        },
        {
          "chartDescription": "Detailed inverter data, including individual phase voltages, currents and power factor",
          "chartType": 84,
          "displayName": "Inverter Phases",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Show the variance between the yield of each inverter relative to the maximum yield from all inverters for each time interval.  View as a data table to see variances highlighted in color.",
          "chartType": 198,
          "displayName": "Inverter variance",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Show the variance between the power produced relative to the expected modeled power.  View as a data table to see variances highlighted in color.",
          "chartType": 196,
          "displayName": "Inverter/Model variance",
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
          "chartDescription": "Calculate module degradation per inverter using the NREL Module Degradation Algorithm (requires at least two years of data, more years of data will give better results).  This calculation may not produce useful results if the data is inconsistent.  This query takes a long time to run and is therefore not suitable for interactive charts.  Please use this query in reports.",
          "chartType": 226,
          "displayName": "Module Degrade Inverter",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Calculate module degradation of the entire site using the NREL Module Degradation Algorithm (requires at least two years of data, more years of data will give better results).  This calculation may not produce useful results if the data is inconsistent.  This query takes a long time to run and is therefore not suitable for interactive charts.  Please use this query in reports.",
          "chartType": 203,
          "displayName": "Module Degrade Site",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Show individual inverter Max Power Point Tracker data.",
          "chartType": 120,
          "displayName": "MPPT",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Show individual inverter Max Power Point Tracker yield, adjusted for orientation. This shows the what the relative performance of different systems would be if they were all the same size and facing the same direction.",
          "chartType": 122,
          "displayName": "MPPT Normalized Yield",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Show individual inverter Max Power Point Tracker yield.",
          "chartType": 121,
          "displayName": "MPPT Yield",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "The normalized yield is the output divided by the DC system size, adjusted for orientation. This shows the what the relative performance of different systems would be if they were all the same size and facing the same direction.",
          "chartType": 22,
          "displayName": "Normalized Yield",
          "isAdvanced": true,
          "parameters": []
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
          "chartDescription": "Shows relative peak performance over time",
          "chartType": 100,
          "displayName": "Peak kW to DC Size Comparison",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "This chart shows the output each inverter or meter in the system side-by-side. For systems with similarly sized components, this is a simple way to evaluate the relative performance of each component in the system.",
          "chartType": 3,
          "displayName": "Performance (side by side)",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
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
            }
          ]
        },
        {
          "chartDescription": "Performance ratio relative to reference.",
          "chartType": 30,
          "displayName": "Performance Histogram",
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
          "chartDescription": "The Production and Estimate chart shows inverter output along with the estimated output.  When viewing individual days, performance is shown in terms of power.  Energy is shown when viewing longer time spans.",
          "chartType": 2,
          "displayName": "Production and Estimate",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
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
              "value": true
            },
            {
              "id": 9,
              "selectionItems": null,
              "type": 16,
              "value": true
            }
          ]
        },
        {
          "chartDescription": "Inverter production and expected production based on the PV model using measured irradiance and module temperature",
          "chartType": 6,
          "displayName": "Production and Expected",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 9,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 10,
              "selectionItems": null,
              "type": 16,
              "value": true
            },
            {
              "id": 69,
              "selectionItems": null,
              "type": 1,
              "value": 0
            }
          ]
        },
        {
          "chartDescription": "Individual model components contributing to the expected production, based on irradiance and module temperature",
          "chartType": 80,
          "displayName": "PV Model Components",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "The difference between the full PV model and the actual production",
          "chartType": 81,
          "displayName": "PV Model Error",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Performance as a function of incidence angle, for fine-tuning the incidence angle modifier",
          "chartType": 68,
          "displayName": "PV Model Incidence Angle Setup",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Inverter model results and associated losses",
          "chartType": 72,
          "displayName": "PV Model Losses",
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
          "chartDescription": "The correlation between inverter output and the PV Model as a scatter plot",
          "chartType": 82,
          "displayName": "PV Model Scatter",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Detailed data used by the PV model and allows fine-tuning of the PV model parameters based on analysis of the data",
          "chartType": 58,
          "displayName": "PV Model Setup",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Performance, solar azimuth/elevation and incidence angle, for creating a shade impact model.",
          "chartType": 69,
          "displayName": "PV Model Shade Impact Setup",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 21,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
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
            }
          ]
        },
        {
          "chartDescription": "Skytron PV Guard energy loss calculation using the Adjusted Power Curve Method.  Requires irradiance data without gaps.",
          "chartType": 241,
          "displayName": "PVG: Adjusted Power Curve Method (BnetzA – Germany)",
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
          "displayName": "PVG: Last Measured Value Method (BnetzA – Germany)",
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
          "chartDescription": "Shows the availability for DC strings (number of operating strings / number of strings)",
          "chartType": 271,
          "displayName": "String Availability",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 2,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 101,
              "selectionItems": null,
              "type": 2,
              "value": 0.5
            },
            {
              "id": 102,
              "selectionItems": null,
              "type": 2,
              "value": 0.1
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
          "chartDescription": "The uptime is calculated when the required minimum irradiance is configured within the Site Setup Performance options (default = 100 w/m²).  The percentage is 100% for every 15 minute interval when the inverter is producing power.  If no weather data is available for a sample, then that 15 minute period is ignored.  The weighted-average for the time span is calculated for all inverters based on their relative system size.",
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
          "chartDescription": "The yield is the output divided by the DC system size. This is used to evaluate performance between difference size systems.",
          "chartType": 4,
          "displayName": "Yield",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 0,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        }
      ],
      "sectionCode": 1,
      "title": "Inverter"
    },
    {
      "hardwareOptions": [
        2
      ],
      "predefinedCharts": [
        {
          "chartDescription": "Line plot showing actual power, expected power and POA irradiance.",
          "chartType": 255,
          "displayName": "Actual vs. Expected Power and Irradiance",
          "isAdvanced": true,
          "parameters": []
        },
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
          "chartDescription": "Availability based on the ratio of production meter energy to inverter energy.  This calculation estimates inverter availability by comparing the energy from each production meter to the expected energy based on the energy measured from each associated inverter.  The expected energy is calculated from the inverters that are communicating and the relative size of those inverters to all inverters.",
          "chartType": 234,
          "displayName": "Energy Availability",
          "isAdvanced": true,
          "parameters": []
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
          "chartDescription": "The Energy Ratio is the ratio of energy to Plane of Array insolation.  This can be calculated using insolation, insolation normalized to 25 °C, or the expected energy based on the PV model.  Change the type of calculation with the \"Energy Ratio Mode\" chart input parameter or the Performance Test Type (on the Site Setup / Performance page).",
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
          "chartDescription": "Inverter Availability, based on the site availability settings",
          "chartType": 259,
          "displayName": "Inverter Availability",
          "isAdvanced": false,
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
          "chartDescription": "The yield is the output divided by the DC system size. This is used to evaluate performance between difference size systems.",
          "chartType": 11,
          "displayName": "Meter Yield",
          "isAdvanced": true,
          "parameters": []
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
          "chartDescription": "Actual production and expected production based on the PV model and weather data",
          "chartType": 64,
          "displayName": "Production & Model",
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
            },
            {
              "id": 69,
              "selectionItems": null,
              "type": 1,
              "value": 0
            }
          ]
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
          "displayName": "PVG: Adjusted Power Curve Method (BnetzA – Germany)",
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
          "displayName": "PVG: Last Measured Value Method (BnetzA – Germany)",
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
          "chartDescription": "The performance index for the total production at a site (actual output divided by the expected output).  Data from individual meters and inverters is not shown.",
          "chartType": 59,
          "displayName": "Site Performance Index",
          "isAdvanced": true,
          "parameters": []
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
          "chartDescription": "The uptime is calculated when the required minimum irradiance is configured within the Site Setup Performance options (default = 100 w/m²).  The percentage is 100% for every 15 minute interval when the inverter is producing power.  If no weather data is available for a sample, then that 15 minute period is ignored.  The weighted-average for the time span is calculated for all inverters based on their relative system size.",
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
          "chartDescription": "The yield is the output divided by the DC system size. This is used to evaluate performance between difference size systems.",
          "chartType": 4,
          "displayName": "Yield",
          "isAdvanced": false,
          "parameters": [
            {
              "id": 0,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
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
      "hardwareOptions": [
        1,
        6,
        7,
        8
      ],
      "predefinedCharts": [
        {
          "chartDescription": "Shows the availability for DC strings (number of operating strings / number of strings)",
          "chartType": 271,
          "displayName": "String Availability",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 2,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 101,
              "selectionItems": null,
              "type": 2,
              "value": 0.5
            },
            {
              "id": 102,
              "selectionItems": null,
              "type": 2,
              "value": 0.1
            }
          ]
        }
      ],
      "sectionCode": 5,
      "title": "Strings"
    },
    {
      "hardwareOptions": [
        1,
        6,
        7,
        8
      ],
      "predefinedCharts": [
        {
          "chartDescription": "Shows the availability for DC strings (number of operating strings / number of strings)",
          "chartType": 271,
          "displayName": "String Availability",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 2,
              "selectionItems": null,
              "type": 16,
              "value": false
            },
            {
              "id": 101,
              "selectionItems": null,
              "type": 2,
              "value": 0.5
            },
            {
              "id": 102,
              "selectionItems": null,
              "type": 2,
              "value": 0.1
            }
          ]
        }
      ],
      "sectionCode": 6,
      "title": "Zones"
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
          "chartDescription": "Power output for all inverters",
          "chartType": 98,
          "displayName": "Generation by Inverter",
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
          "chartDescription": "Predicted and actual PV power",
          "chartType": 97,
          "displayName": "Predicted Power",
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
          "chartDescription": "Estimated GHI insolation, based on preconfigured monthly insolation estimates",
          "chartType": 159,
          "displayName": "Site: estimated GHI insolation",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Estimated GHI insolation, based on preconfigured monthly insolation estimates degraded annually without interpolation between months",
          "chartType": 160,
          "displayName": "Site: estimated GHI insolation (annual degrade)",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Estimated insolation, based on preconfigured monthly insolation estimates",
          "chartType": 116,
          "displayName": "Site: estimated insolation",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Estimated insolation, based on preconfigured monthly insolation estimates degraded annually without interpolation between months",
          "chartType": 117,
          "displayName": "Site: estimated insolation (annual degrade)",
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
          "chartDescription": "Shows expected energy production for a site, based on measured irradiance and module temperature",
          "chartType": 107,
          "displayName": "Site: expected production",
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
          "chartDescription": "The uptime is calculated when there’s the required minimum irradiance (default = 100 w/m², configurable on Site Setup page, Performance tab).  The percentage is 100% for every 15 minute interval when the inverter is producing power.  If there’s no weather data, then that 15 minute period is ignored.  The weighted-average for the time span is calculated for all inverters based on their relative system size.",
          "chartType": 113,
          "displayName": "Site: inverter uptime",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Module temperature",
          "chartType": 111,
          "displayName": "Site: module",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Plane of Array Irradiance",
          "chartType": 108,
          "displayName": "Site: POA",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "The uptime for the site is calculated as a weighted average percentage of each inverter (or each meter if no inverters are present), when the required minimum irradiance is configured within the Site Setup Performance options (default = 100 w/m²).  For each device, the percentage is 100% for every 15 minute interval when the inverter is producing power. If no weather data is available for a sample, then that 15 minute period is ignored.",
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
          "chartType": 47,
          "displayName": "Estimate Comparison",
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
          "chartDescription": "",
          "chartType": 46,
          "displayName": "Model Comparison",
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
          "chartDescription": "Site Performance Ratio, not adjusted for temperature (kW / DC size / irradiance) or (kWh / DC size / insolation)",
          "chartType": 49,
          "displayName": "Performance Ratio (detail)",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "Power output divided by DC system size and irradiance",
          "chartType": 48,
          "displayName": "Performance Ratio (summary)",
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
          "chartDescription": "Total site output divided by DC system size",
          "chartType": 45,
          "displayName": "Site Yield",
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
          "chartType": 60,
          "displayName": "Total Production & Estimate",
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
          "chartDescription": "",
          "chartType": 67,
          "displayName": "Total Production & Model Estimate",
          "isAdvanced": true,
          "parameters": []
        },
        {
          "chartDescription": "The uptime for each site is calculated as an average percentage of each inverter (or each meter if no inverters are present), when the required minimum irradiance is configured within the Site Setup Performance options (default = 100 w/m²). ",
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
          "chartDescription": "The uptime for each site is calculated as a weighted average percentage of each inverter (or each meter if no inverters are present), when the required minimum irradiance is configured within the Site Setup Performance options (default = 100 w/m²). ",
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
        },
        {
          "chartDescription": "Detects lost production due to soiling",
          "chartType": 152,
          "displayName": "Alert, Soiling",
          "isAdvanced": true,
          "parameters": [
            {
              "id": 63,
              "selectionItems": null,
              "type": 16,
              "value": false
            }
          ]
        }
      ],
      "sectionCode": 21,
      "title": "Alert"
    }
  ],
  "defaultChart": 15,
  "hardwareFunctions": [
    1,
    5,
    31,
    10,
    2,
    28
  ],
  "name": "*** LOST?* THD CA - 2304 Monterey Park",
  "timeZoneOffset": -5
}
```

[Return to top](#top)

