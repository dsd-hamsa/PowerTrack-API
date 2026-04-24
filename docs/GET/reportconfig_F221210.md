<a id="top"></a>
# /api/reportconfig/F221210

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [General](#general)
- [Example](#example)

## General

```json
{
  "type": "object",
  "properties": {
    "applicationResource": {
      "type": "boolean"
    },
    "binSizes": {
      "type": "number"
    },
    "bulkExport": {
      "type": "boolean"
    },
    "canBulkExport": {
      "type": "boolean"
    },
    "canGroupResults": {
      "type": "boolean"
    },
    "columnHeaderOption": {
      "type": "number"
    },
    "columnHeaders": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "combineRows": {
      "type": "boolean"
    },
    "combineTimestamp": {
      "type": "boolean"
    },
    "contentDashboards": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "debugOutput": {
      "type": "number"
    },
    "defaultChartParamList": {
      "type": "object",
      "properties": {
        "chartParameter": {
          "type": "number"
        },
        "isExcluded": {
          "type": "boolean"
        },
        "paramsList": {
          "type": "object",
          "properties": {
            "chartType": {
              "type": "number"
            },
            "index": {
              "type": "number"
            },
            "name": {
              "type": "string"
            },
            "selectionItems": {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string"
                },
                "stringValue": {
                  "type": "string"
                },
                "value": {
                  "type": "number"
                }
              }
            },
            "type": {
              "type": "number"
            },
            "value": {
              "type": "string"
            }
          }
        }
      }
    },
    "deliveryEmails": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "deliveryFtpAddress": {
      "type": "string"
    },
    "deliveryHttpAddress": {
      "type": "string"
    },
    "deliveryMethod": {
      "type": "number"
    },
    "deliveryPassword": {
      "type": "string"
    },
    "deliveryUsername": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "enumType": {
      "type": "number"
    },
    "excludeHeaders": {
      "type": "boolean"
    },
    "externalAllowed": {
      "type": "boolean"
    },
    "externalAuth": {
      "type": "boolean"
    },
    "fieldOptionsLists": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "fileLanguage": {
      "type": "string"
    },
    "groupResults": {
      "type": "boolean"
    },
    "hardwareFilterList": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "includeForecast": {
      "type": "boolean"
    },
    "key": {
      "type": "string"
    },
    "lastChanged": {
      "type": "string"
    },
    "logoKey": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "newNote": {
      "type": "string"
    },
    "onlyBelowCustomer": {
      "type": "boolean"
    },
    "onlyFuture": {
      "type": "boolean"
    },
    "operationsFilter": {
      "type": "number"
    },
    "ownerKey": {
      "type": "string"
    },
    "parentKey": {
      "type": "string"
    },
    "pivotOutput": {
      "type": "boolean"
    },
    "proofSiteKey": {
      "type": "string"
    },
    "queryItems": {
      "type": "object",
      "properties": {
        "columnHeaders": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        },
        "elevation": {
          "type": "number"
        },
        "format": {
          "type": "string"
        },
        "formula": {
          "type": "string"
        },
        "indexMap": {
          "type": "number"
        },
        "inputs": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        },
        "kpiQuery": {
          "type": "object",
          "properties": {}
        },
        "name": {
          "type": "string"
        },
        "queryKey": {
          "type": "string"
        },
        "queryName": {
          "type": "string"
        },
        "queryParam": {
          "type": "string"
        },
        "sourceType": {
          "type": "number"
        },
        "typeSelection": {
          "type": "number"
        },
        "units": {
          "type": "number"
        }
      }
    },
    "range": {
      "type": "object",
      "properties": {
        "end": {
          "type": "string"
        },
        "start": {
          "type": "string"
        }
      }
    },
    "remarks": {
      "type": "string"
    },
    "removeDuplicates": {
      "type": "boolean"
    },
    "reportDetail": {
      "type": "number"
    },
    "reportFileType": {
      "type": "number"
    },
    "reportOutput": {
      "type": "number"
    },
    "reportOwnerInPath": {
      "type": "boolean"
    },
    "reportTitle": {
      "type": "string"
    },
    "reportType": {
      "type": "number"
    },
    "rowHeader0": {
      "type": "number"
    },
    "rowHeader1": {
      "type": "number"
    },
    "rowHeader2": {
      "type": "number"
    },
    "rowHeader3": {
      "type": "number"
    },
    "rowHeader4": {
      "type": "number"
    },
    "scheduleDay": {
      "type": "number"
    },
    "scheduleId": {
      "type": "number"
    },
    "schedulePeriod": {
      "type": "number"
    },
    "separateByHwType": {
      "type": "boolean"
    },
    "separateSheets": {
      "type": "boolean"
    },
    "sftpKey": {
      "type": "string"
    },
    "sftpPrivateKey": {
      "type": "string"
    },
    "siteRange": {
      "type": "string"
    },
    "skipNotInService": {
      "type": "boolean"
    },
    "sort": {
      "type": "number"
    },
    "sourceItems": {
      "type": "object",
      "properties": {
        "key": {
          "type": "string"
        }
      }
    },
    "tags": {
      "type": "object",
      "properties": {
        "attributes": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        },
        "key": {
          "type": "string"
        },
        "keywords": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        },
        "lastChanged": {
          "type": "object",
          "properties": {}
        },
        "notes": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        },
        "powerDisplays": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        }
      }
    },
    "templateKey": {
      "type": "string"
    },
    "templateTarget": {
      "type": "string"
    },
    "timespan": {
      "type": "number"
    },
    "timespanUnit": {
      "type": "number"
    },
    "titleDashKey": {
      "type": "string"
    },
    "titleDashParamsList": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "trimNighttime": {
      "type": "boolean"
    },
    "useSftp": {
      "type": "boolean"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/reportconfig/F221210
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 05fc89
referer: https://apps.alsoenergy.com/powertrack/C16295/reports/reportconfigs/F221210
```

**Response:**

```json
{
  "applicationResource": false,
  "binSizes": 0,
  "bulkExport": false,
  "canBulkExport": false,
  "canGroupResults": false,
  "columnHeaderOption": 0,
  "columnHeaders": [],
  "combineRows": true,
  "combineTimestamp": true,
  "contentDashboards": [],
  "debugOutput": 0,
  "defaultChartParamList": [
    {
      "chartParameter": 77,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        },
        {
          "chartType": 4,
          "index": 0,
          "name": "ShowEstimate",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 31,
          "index": 0,
          "name": "Cumulative",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 255,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 53,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 69,
          "index": 0,
          "name": "ModelIndex",
          "selectionItems": null,
          "type": 1,
          "value": 0
        }
      ]
    },
    {
      "chartParameter": 51,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 24,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": true
        }
      ]
    },
    {
      "chartParameter": 204,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 9,
          "index": 0,
          "name": "ShowWeather",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 70,
          "index": 0,
          "name": "BrainFile",
          "selectionItems": null,
          "type": 1,
          "value": 0
        }
      ]
    },
    {
      "chartParameter": 201,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 199,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 5,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 234,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 176,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 62,
          "index": 0,
          "name": "EnergyRatioMode",
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
      "chartParameter": 248,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 61,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 249,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 171,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 8,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 259,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 0,
          "index": 0,
          "name": "Detail",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 61,
          "index": 0,
          "name": "WeightedAverage",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 7,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 246,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 252,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 188,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 73,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 6,
          "index": 0,
          "name": "Stacked",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 7,
          "index": 0,
          "name": "ShowSun",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 8,
          "index": 0,
          "name": "ModelMode",
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
      "chartParameter": 84,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 198,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 196,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 167,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 87,
          "index": 0,
          "name": "PerHardware",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 9,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 226,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 203,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 120,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 122,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 121,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 22,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 185,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 93,
          "index": 0,
          "name": "SiteLevel",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 92,
          "index": 0,
          "name": "TranspositionMethod",
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
          "chartType": 99,
          "index": 0,
          "name": "PrimaryWeatherSource",
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
          "chartType": 73,
          "index": 0,
          "name": "MinPOA",
          "selectionItems": null,
          "type": 2,
          "value": 200
        },
        {
          "chartType": 100,
          "index": 0,
          "name": "NOCT",
          "selectionItems": null,
          "type": 2,
          "value": 45
        }
      ]
    },
    {
      "chartParameter": 233,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 100,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 3,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 6,
          "index": 0,
          "name": "Stacked",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 29,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 30,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 57,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 2,
          "index": 0,
          "name": "ShowInverters",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 0,
          "index": 0,
          "name": "Detail",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 91,
          "index": 0,
          "name": "Median",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 93,
          "index": 0,
          "name": "SiteLevel",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 23,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 88,
          "index": 0,
          "name": "PRmode",
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
          "chartType": 0,
          "index": 0,
          "name": "Detail",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 91,
          "index": 0,
          "name": "Median",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 93,
          "index": 0,
          "name": "SiteLevel",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 60,
          "index": 0,
          "name": "Average",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 200,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 2,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 6,
          "index": 0,
          "name": "Stacked",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 9,
          "index": 0,
          "name": "ShowWeather",
          "selectionItems": null,
          "type": 16,
          "value": true
        }
      ]
    },
    {
      "chartParameter": 6,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 9,
          "index": 0,
          "name": "ShowWeather",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 69,
          "index": 0,
          "name": "ModelIndex",
          "selectionItems": null,
          "type": 1,
          "value": 0
        }
      ]
    },
    {
      "chartParameter": 114,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 9,
          "index": 0,
          "name": "ShowWeather",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 80,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 81,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 68,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 72,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 0,
          "index": 0,
          "name": "Detail",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 7,
          "index": 0,
          "name": "ShowSun",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 63,
          "index": 0,
          "name": "AbsoluteSoil",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 82,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 58,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 69,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 6,
          "index": 0,
          "name": "Stacked",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 241,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 32,
          "index": 0,
          "name": "ShowEnergy",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 244,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 242,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 243,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 225,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 9,
          "index": 0,
          "name": "ShowWeather",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 70,
          "index": 0,
          "name": "BrainFile",
          "selectionItems": null,
          "type": 1,
          "value": 0
        }
      ]
    },
    {
      "chartParameter": 78,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 63,
          "index": 0,
          "name": "AbsoluteSoil",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 256,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 0,
          "index": 0,
          "name": "Detail",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 32,
          "index": 0,
          "name": "ShowEnergy",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 271,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 2,
          "index": 0,
          "name": "ShowInverters",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 101,
          "index": 0,
          "name": "NormalOperatingLevel",
          "selectionItems": null,
          "type": 2,
          "value": 0.5
        },
        {
          "chartType": 102,
          "index": 0,
          "name": "MinimumOperatingLevel",
          "selectionItems": null,
          "type": 2,
          "value": 0.1
        }
      ]
    },
    {
      "chartParameter": 228,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 71,
          "index": 0,
          "name": "SynthesizedProductionMethod",
          "selectionItems": null,
          "type": 1,
          "value": 0
        },
        {
          "chartType": 72,
          "index": 0,
          "name": "FillGaps",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 28,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 54,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 4,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 0,
          "index": 0,
          "name": "Detail",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 101,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 207,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 0,
          "index": 0,
          "name": "Detail",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 7,
          "index": 0,
          "name": "ShowSun",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 63,
          "index": 0,
          "name": "AbsoluteSoil",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 11,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 64,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        },
        {
          "chartType": 2,
          "index": 0,
          "name": "ShowInverters",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 4,
          "index": 0,
          "name": "ShowEstimate",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 69,
          "index": 0,
          "name": "ModelIndex",
          "selectionItems": null,
          "type": 1,
          "value": 0
        }
      ]
    },
    {
      "chartParameter": 15,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        },
        {
          "chartType": 2,
          "index": 0,
          "name": "ShowInverters",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 4,
          "index": 0,
          "name": "ShowEstimate",
          "selectionItems": null,
          "type": 16,
          "value": true
        }
      ]
    },
    {
      "chartParameter": 38,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 79,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 61,
          "index": 0,
          "name": "WeightedAverage",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 126,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 123,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 73,
          "index": 0,
          "name": "MinPOA",
          "selectionItems": null,
          "type": 1,
          "value": 500
        },
        {
          "chartType": 74,
          "index": 0,
          "name": "StdDevPOA",
          "selectionItems": null,
          "type": 2,
          "value": 10
        },
        {
          "chartType": 75,
          "index": 0,
          "name": "StdDevTemp",
          "selectionItems": null,
          "type": 2,
          "value": 1
        },
        {
          "chartType": 76,
          "index": 0,
          "name": "TminDiff",
          "selectionItems": null,
          "type": 2,
          "value": 5
        },
        {
          "chartType": 77,
          "index": 0,
          "name": "AdjustedStdDev",
          "selectionItems": null,
          "type": 2,
          "value": 3
        },
        {
          "chartType": 78,
          "index": 0,
          "name": "InverterLimit",
          "selectionItems": null,
          "type": 2,
          "value": 0.98
        },
        {
          "chartType": 79,
          "index": 0,
          "name": "InverterMinimum",
          "selectionItems": null,
          "type": 2,
          "value": 0.2
        },
        {
          "chartType": 80,
          "index": 0,
          "name": "FitOrder",
          "selectionItems": null,
          "type": 1,
          "value": 1
        },
        {
          "chartType": 81,
          "index": 0,
          "name": "TestCondition",
          "selectionItems": null,
          "type": 1,
          "value": 800
        },
        {
          "chartType": 82,
          "index": 0,
          "name": "TestTemp",
          "selectionItems": null,
          "type": 1,
          "value": 25
        },
        {
          "chartType": 83,
          "index": 0,
          "name": "FitMode",
          "selectionItems": null,
          "type": 1,
          "value": 0
        },
        {
          "chartType": 84,
          "index": 0,
          "name": "CalculateModTemp",
          "selectionItems": null,
          "type": 1,
          "value": 0
        },
        {
          "chartType": 85,
          "index": 0,
          "name": "GSCR",
          "selectionItems": null,
          "type": 2,
          "value": 0
        },
        {
          "chartType": 86,
          "index": 0,
          "name": "GSGSCRadjustmentCR",
          "selectionItems": null,
          "type": 2,
          "value": 5.3
        }
      ]
    },
    {
      "chartParameter": 250,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 78,
          "index": 0,
          "name": "InverterLimit",
          "selectionItems": null,
          "type": 2,
          "value": 0.98
        },
        {
          "chartType": 73,
          "index": 0,
          "name": "MinPOA",
          "selectionItems": null,
          "type": 1,
          "value": 100
        },
        {
          "chartType": 74,
          "index": 0,
          "name": "StdDevPOA",
          "selectionItems": null,
          "type": 2,
          "value": 10
        },
        {
          "chartType": 77,
          "index": 0,
          "name": "AdjustedStdDev",
          "selectionItems": null,
          "type": 2,
          "value": 3
        },
        {
          "chartType": 81,
          "index": 0,
          "name": "TestCondition",
          "selectionItems": null,
          "type": 1,
          "value": 800
        },
        {
          "chartType": 95,
          "index": 0,
          "name": "TestAmbient",
          "selectionItems": null,
          "type": 1,
          "value": 25
        },
        {
          "chartType": 96,
          "index": 0,
          "name": "TestWindSpeed",
          "selectionItems": null,
          "type": 1,
          "value": 1
        }
      ]
    },
    {
      "chartParameter": 156,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": true
        }
      ]
    },
    {
      "chartParameter": 219,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 0,
          "index": 0,
          "name": "Detail",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 59,
          "index": 0,
          "name": "Sum",
          "selectionItems": null,
          "type": 16,
          "value": true
        }
      ]
    },
    {
      "chartParameter": 220,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 0,
          "index": 0,
          "name": "Detail",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 59,
          "index": 0,
          "name": "Sum",
          "selectionItems": null,
          "type": 16,
          "value": true
        }
      ]
    },
    {
      "chartParameter": 218,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 0,
          "index": 0,
          "name": "Detail",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 59,
          "index": 0,
          "name": "Sum",
          "selectionItems": null,
          "type": 16,
          "value": true
        }
      ]
    },
    {
      "chartParameter": 217,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 0,
          "index": 0,
          "name": "Detail",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 59,
          "index": 0,
          "name": "Sum",
          "selectionItems": null,
          "type": 16,
          "value": true
        }
      ]
    },
    {
      "chartParameter": 229,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 0,
          "index": 0,
          "name": "Detail",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 59,
          "index": 0,
          "name": "Sum",
          "selectionItems": null,
          "type": 16,
          "value": true
        }
      ]
    },
    {
      "chartParameter": 59,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 227,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 25,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 175,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 16,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        },
        {
          "chartType": 2,
          "index": 0,
          "name": "ShowInverters",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 4,
          "index": 0,
          "name": "ShowEstimate",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 39,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 257,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 187,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 92,
          "index": 0,
          "name": "TranspositionMethod",
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
          "chartType": 97,
          "index": 0,
          "name": "ShowClearSkyModel",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 21,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 5,
          "index": 0,
          "name": "SunMode",
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
      "chartParameter": 186,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 64,
          "index": 0,
          "name": "CurveFit",
          "selectionItems": null,
          "type": 1,
          "value": 0
        }
      ]
    },
    {
      "chartParameter": 245,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 64,
          "index": 0,
          "name": "CurveFit",
          "selectionItems": null,
          "type": 1,
          "value": 0
        }
      ]
    },
    {
      "chartParameter": 258,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 0,
          "index": 0,
          "name": "Detail",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 240,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 92,
          "index": 0,
          "name": "TranspositionMethod",
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
      "chartParameter": 112,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 19,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 4,
          "index": 0,
          "name": "ShowEstimate",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 20,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 177,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 18,
          "index": 0,
          "name": "Normalize",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 19,
          "index": 0,
          "name": "NightZero",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 35,
          "index": 0,
          "name": "MaxDataItems",
          "selectionItems": null,
          "type": 1,
          "value": 0
        }
      ]
    },
    {
      "chartParameter": 238,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 237,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 235,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 90,
          "index": 0,
          "name": "NormalizeCurrent",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 239,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 236,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 35,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 32,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 18,
          "index": 0,
          "name": "Normalize",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 19,
          "index": 0,
          "name": "NightZero",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 34,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 18,
          "index": 0,
          "name": "Normalize",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 19,
          "index": 0,
          "name": "NightZero",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 37,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 13,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 18,
          "index": 0,
          "name": "Normalize",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 19,
          "index": 0,
          "name": "NightZero",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 35,
          "index": 0,
          "name": "MaxDataItems",
          "selectionItems": null,
          "type": 1,
          "value": 0
        }
      ]
    },
    {
      "chartParameter": 52,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 31,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 18,
          "index": 0,
          "name": "Normalize",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 19,
          "index": 0,
          "name": "NightZero",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 42,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 124,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 127,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 10,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 71,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 70,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        },
        {
          "chartType": 2,
          "index": 0,
          "name": "ShowInverters",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 4,
          "index": 0,
          "name": "ShowEstimate",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 40,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 18,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        },
        {
          "chartType": 2,
          "index": 0,
          "name": "ShowInverters",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 4,
          "index": 0,
          "name": "ShowEstimate",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 272,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 266,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 270,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 264,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 262,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 265,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 273,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 41,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 17,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        },
        {
          "chartType": 2,
          "index": 0,
          "name": "ShowInverters",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 4,
          "index": 0,
          "name": "ShowEstimate",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 190,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        },
        {
          "chartType": 4,
          "index": 0,
          "name": "ShowEstimate",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 31,
          "index": 0,
          "name": "Cumulative",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 213,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 30,
          "index": 0,
          "name": "ShowRates",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 32,
          "index": 0,
          "name": "ShowEnergy",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 29,
          "index": 0,
          "name": "SeparatePeak",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 34,
          "index": 0,
          "name": "LimitToNames",
          "selectionItems": null,
          "type": 0,
          "value": null
        }
      ]
    },
    {
      "chartParameter": 215,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 30,
          "index": 0,
          "name": "ShowRates",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 32,
          "index": 0,
          "name": "ShowEnergy",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 29,
          "index": 0,
          "name": "SeparatePeak",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 34,
          "index": 0,
          "name": "LimitToNames",
          "selectionItems": null,
          "type": 0,
          "value": null
        }
      ]
    },
    {
      "chartParameter": 214,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 30,
          "index": 0,
          "name": "ShowRates",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 32,
          "index": 0,
          "name": "ShowEnergy",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 29,
          "index": 0,
          "name": "SeparatePeak",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 34,
          "index": 0,
          "name": "LimitToNames",
          "selectionItems": null,
          "type": 0,
          "value": null
        }
      ]
    },
    {
      "chartParameter": 216,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 30,
          "index": 0,
          "name": "ShowRates",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 32,
          "index": 0,
          "name": "ShowEnergy",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 29,
          "index": 0,
          "name": "SeparatePeak",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 34,
          "index": 0,
          "name": "LimitToNames",
          "selectionItems": null,
          "type": 0,
          "value": null
        }
      ]
    },
    {
      "chartParameter": 178,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 30,
          "index": 0,
          "name": "ShowRates",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 32,
          "index": 0,
          "name": "ShowEnergy",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 29,
          "index": 0,
          "name": "SeparatePeak",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 180,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 30,
          "index": 0,
          "name": "ShowRates",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 32,
          "index": 0,
          "name": "ShowEnergy",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 29,
          "index": 0,
          "name": "SeparatePeak",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 193,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        },
        {
          "chartType": 4,
          "index": 0,
          "name": "ShowEstimate",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 31,
          "index": 0,
          "name": "Cumulative",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 179,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 30,
          "index": 0,
          "name": "ShowRates",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 32,
          "index": 0,
          "name": "ShowEnergy",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 29,
          "index": 0,
          "name": "SeparatePeak",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 192,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        },
        {
          "chartType": 4,
          "index": 0,
          "name": "ShowEstimate",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 31,
          "index": 0,
          "name": "Cumulative",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 27,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 30,
          "index": 0,
          "name": "ShowRates",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 32,
          "index": 0,
          "name": "ShowEnergy",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 29,
          "index": 0,
          "name": "SeparatePeak",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 194,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        },
        {
          "chartType": 4,
          "index": 0,
          "name": "ShowEstimate",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 31,
          "index": 0,
          "name": "Cumulative",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 209,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 30,
          "index": 0,
          "name": "ShowRates",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 32,
          "index": 0,
          "name": "ShowEnergy",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 29,
          "index": 0,
          "name": "SeparatePeak",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 34,
          "index": 0,
          "name": "LimitToNames",
          "selectionItems": null,
          "type": 0,
          "value": null
        }
      ]
    },
    {
      "chartParameter": 211,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 30,
          "index": 0,
          "name": "ShowRates",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 32,
          "index": 0,
          "name": "ShowEnergy",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 29,
          "index": 0,
          "name": "SeparatePeak",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 34,
          "index": 0,
          "name": "LimitToNames",
          "selectionItems": null,
          "type": 0,
          "value": null
        }
      ]
    },
    {
      "chartParameter": 208,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 30,
          "index": 0,
          "name": "ShowRates",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 32,
          "index": 0,
          "name": "ShowEnergy",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 29,
          "index": 0,
          "name": "SeparatePeak",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 34,
          "index": 0,
          "name": "LimitToNames",
          "selectionItems": null,
          "type": 0,
          "value": null
        }
      ]
    },
    {
      "chartParameter": 210,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 30,
          "index": 0,
          "name": "ShowRates",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 32,
          "index": 0,
          "name": "ShowEnergy",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 29,
          "index": 0,
          "name": "SeparatePeak",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 34,
          "index": 0,
          "name": "LimitToNames",
          "selectionItems": null,
          "type": 0,
          "value": null
        }
      ]
    },
    {
      "chartParameter": 212,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 30,
          "index": 0,
          "name": "ShowRates",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 32,
          "index": 0,
          "name": "ShowEnergy",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 29,
          "index": 0,
          "name": "SeparatePeak",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 34,
          "index": 0,
          "name": "LimitToNames",
          "selectionItems": null,
          "type": 0,
          "value": null
        }
      ]
    },
    {
      "chartParameter": 189,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        },
        {
          "chartType": 4,
          "index": 0,
          "name": "ShowEstimate",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 31,
          "index": 0,
          "name": "Cumulative",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 222,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 221,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 0,
          "index": 0,
          "name": "Detail",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 59,
          "index": 0,
          "name": "Sum",
          "selectionItems": null,
          "type": 16,
          "value": true
        }
      ]
    },
    {
      "chartParameter": 230,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 0,
          "index": 0,
          "name": "Detail",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 59,
          "index": 0,
          "name": "Sum",
          "selectionItems": null,
          "type": 16,
          "value": true
        }
      ]
    },
    {
      "chartParameter": 223,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 0,
          "index": 0,
          "name": "Detail",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 59,
          "index": 0,
          "name": "Sum",
          "selectionItems": null,
          "type": 16,
          "value": true
        }
      ]
    },
    {
      "chartParameter": 224,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 0,
          "index": 0,
          "name": "Detail",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 59,
          "index": 0,
          "name": "Sum",
          "selectionItems": null,
          "type": 16,
          "value": true
        }
      ]
    },
    {
      "chartParameter": 26,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 30,
          "index": 0,
          "name": "ShowRates",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 32,
          "index": 0,
          "name": "ShowEnergy",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 29,
          "index": 0,
          "name": "SeparatePeak",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 50,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 30,
          "index": 0,
          "name": "ShowRates",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 32,
          "index": 0,
          "name": "ShowEnergy",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 29,
          "index": 0,
          "name": "SeparatePeak",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 154,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 30,
          "index": 0,
          "name": "ShowRates",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 32,
          "index": 0,
          "name": "ShowEnergy",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 29,
          "index": 0,
          "name": "SeparatePeak",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 183,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 6,
          "index": 0,
          "name": "Stacked",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        }
      ]
    },
    {
      "chartParameter": 191,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        },
        {
          "chartType": 4,
          "index": 0,
          "name": "ShowEstimate",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 31,
          "index": 0,
          "name": "Cumulative",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 12,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 56,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 55,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 232,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 74,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 9,
          "index": 0,
          "name": "ShowWeather",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 247,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 157,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 9,
          "index": 0,
          "name": "ShowWeather",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 158,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 205,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 98,
          "index": 0,
          "name": "IncludeBacktracking",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 206,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 103,
          "index": 0,
          "name": "UseSetpoint",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 59,
          "index": 0,
          "name": "Sum",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 274,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 103,
          "index": 0,
          "name": "UseSetpoint",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 59,
          "index": 0,
          "name": "Sum",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 195,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        },
        {
          "chartType": 4,
          "index": 0,
          "name": "ShowEstimate",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 31,
          "index": 0,
          "name": "Cumulative",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 197,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 0,
          "index": 0,
          "name": "Detail",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 61,
          "index": 0,
          "name": "WeightedAverage",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 94,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 55,
          "index": 0,
          "name": "Registers",
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
          "chartType": 56,
          "index": 0,
          "name": "Flags",
          "selectionItems": null,
          "type": 1,
          "value": 0
        },
        {
          "chartType": 57,
          "index": 0,
          "name": "Key",
          "selectionItems": null,
          "type": 31,
          "value": 0
        }
      ]
    },
    {
      "chartParameter": 153,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 55,
          "index": 0,
          "name": "Registers",
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
          "chartType": 56,
          "index": 0,
          "name": "Flags",
          "selectionItems": null,
          "type": 1,
          "value": 0
        },
        {
          "chartType": 57,
          "index": 0,
          "name": "Key",
          "selectionItems": null,
          "type": 31,
          "value": 0
        }
      ]
    },
    {
      "chartParameter": 98,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 55,
          "index": 0,
          "name": "Registers",
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
          "chartType": 56,
          "index": 0,
          "name": "Flags",
          "selectionItems": null,
          "type": 1,
          "value": 0
        },
        {
          "chartType": 57,
          "index": 0,
          "name": "Key",
          "selectionItems": null,
          "type": 31,
          "value": 0
        },
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 102,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 55,
          "index": 0,
          "name": "Registers",
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
          "chartType": 56,
          "index": 0,
          "name": "Flags",
          "selectionItems": null,
          "type": 1,
          "value": 0
        },
        {
          "chartType": 57,
          "index": 0,
          "name": "Key",
          "selectionItems": null,
          "type": 31,
          "value": 0
        },
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 93,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 97,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 55,
          "index": 0,
          "name": "Registers",
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
          "chartType": 56,
          "index": 0,
          "name": "Flags",
          "selectionItems": null,
          "type": 1,
          "value": 0
        },
        {
          "chartType": 57,
          "index": 0,
          "name": "Key",
          "selectionItems": null,
          "type": 31,
          "value": 0
        },
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 89,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        },
        {
          "chartType": 4,
          "index": 0,
          "name": "ShowEstimate",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 31,
          "index": 0,
          "name": "Cumulative",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 119,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 0,
          "index": 0,
          "name": "Detail",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 61,
          "index": 0,
          "name": "WeightedAverage",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 275,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 99,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 55,
          "index": 0,
          "name": "Registers",
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
          "chartType": 56,
          "index": 0,
          "name": "Flags",
          "selectionItems": null,
          "type": 1,
          "value": 0
        },
        {
          "chartType": 57,
          "index": 0,
          "name": "Key",
          "selectionItems": null,
          "type": 31,
          "value": 0
        },
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 110,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 118,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 105,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 115,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 159,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 160,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 116,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 117,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 106,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 107,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 109,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 104,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 113,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 111,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 108,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 168,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 55,
          "index": 0,
          "name": "Registers",
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
          "chartType": 56,
          "index": 0,
          "name": "Flags",
          "selectionItems": null,
          "type": 1,
          "value": 0
        }
      ]
    },
    {
      "chartParameter": 95,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 55,
          "index": 0,
          "name": "Registers",
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
          "chartType": 56,
          "index": 0,
          "name": "Flags",
          "selectionItems": null,
          "type": 1,
          "value": 0
        },
        {
          "chartType": 57,
          "index": 0,
          "name": "Key",
          "selectionItems": null,
          "type": 31,
          "value": 0
        }
      ]
    },
    {
      "chartParameter": 96,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 55,
          "index": 0,
          "name": "Registers",
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
          "chartType": 56,
          "index": 0,
          "name": "Flags",
          "selectionItems": null,
          "type": 1,
          "value": 0
        },
        {
          "chartType": 57,
          "index": 0,
          "name": "Key",
          "selectionItems": null,
          "type": 31,
          "value": 0
        }
      ]
    },
    {
      "chartParameter": 161,
      "isExcluded": true,
      "paramsList": [
        {
          "chartType": 53,
          "index": 0,
          "name": "AggregateMode",
          "selectionItems": [
            {
              "name": "None",
              "value": 0
            },
            {
              "name": "Default",
              "value": 1
            },
            {
              "name": "Cumulative",
              "value": 2
            },
            {
              "name": "SkipDecrease",
              "value": 4
            },
            {
              "name": "AlignByUTCTime",
              "value": 8
            },
            {
              "name": "StartAtZero",
              "value": 16
            },
            {
              "name": "CantAggregateInSql",
              "value": 22
            }
          ],
          "type": 33,
          "value": 0
        },
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 55,
          "index": 0,
          "name": "Registers",
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
          "value": -1
        },
        {
          "chartType": 57,
          "index": 0,
          "name": "Key",
          "selectionItems": null,
          "type": 31,
          "value": 0
        }
      ]
    },
    {
      "chartParameter": 162,
      "isExcluded": true,
      "paramsList": [
        {
          "chartType": 53,
          "index": 0,
          "name": "AggregateMode",
          "selectionItems": [
            {
              "name": "None",
              "value": 0
            },
            {
              "name": "Default",
              "value": 1
            },
            {
              "name": "Cumulative",
              "value": 2
            },
            {
              "name": "SkipDecrease",
              "value": 4
            },
            {
              "name": "AlignByUTCTime",
              "value": 8
            },
            {
              "name": "StartAtZero",
              "value": 16
            },
            {
              "name": "CantAggregateInSql",
              "value": 22
            }
          ],
          "type": 33,
          "value": 0
        },
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 55,
          "index": 0,
          "name": "Registers",
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
          "value": -1
        },
        {
          "chartType": 57,
          "index": 0,
          "name": "Key",
          "selectionItems": null,
          "type": 31,
          "value": 0
        }
      ]
    },
    {
      "chartParameter": 164,
      "isExcluded": true,
      "paramsList": [
        {
          "chartType": 53,
          "index": 0,
          "name": "AggregateMode",
          "selectionItems": [
            {
              "name": "None",
              "value": 0
            },
            {
              "name": "Default",
              "value": 1
            },
            {
              "name": "Cumulative",
              "value": 2
            },
            {
              "name": "SkipDecrease",
              "value": 4
            },
            {
              "name": "AlignByUTCTime",
              "value": 8
            },
            {
              "name": "StartAtZero",
              "value": 16
            },
            {
              "name": "CantAggregateInSql",
              "value": 22
            }
          ],
          "type": 33,
          "value": 0
        },
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 55,
          "index": 0,
          "name": "Registers",
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
          "value": -1
        },
        {
          "chartType": 57,
          "index": 0,
          "name": "Key",
          "selectionItems": null,
          "type": 31,
          "value": 0
        }
      ]
    },
    {
      "chartParameter": 166,
      "isExcluded": true,
      "paramsList": [
        {
          "chartType": 53,
          "index": 0,
          "name": "AggregateMode",
          "selectionItems": [
            {
              "name": "None",
              "value": 0
            },
            {
              "name": "Default",
              "value": 1
            },
            {
              "name": "Cumulative",
              "value": 2
            },
            {
              "name": "SkipDecrease",
              "value": 4
            },
            {
              "name": "AlignByUTCTime",
              "value": 8
            },
            {
              "name": "StartAtZero",
              "value": 16
            },
            {
              "name": "CantAggregateInSql",
              "value": 22
            }
          ],
          "type": 33,
          "value": 0
        },
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 55,
          "index": 0,
          "name": "Registers",
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
          "value": -1
        },
        {
          "chartType": 57,
          "index": 0,
          "name": "Key",
          "selectionItems": null,
          "type": 31,
          "value": 0
        }
      ]
    },
    {
      "chartParameter": 165,
      "isExcluded": true,
      "paramsList": [
        {
          "chartType": 53,
          "index": 0,
          "name": "AggregateMode",
          "selectionItems": [
            {
              "name": "None",
              "value": 0
            },
            {
              "name": "Default",
              "value": 1
            },
            {
              "name": "Cumulative",
              "value": 2
            },
            {
              "name": "SkipDecrease",
              "value": 4
            },
            {
              "name": "AlignByUTCTime",
              "value": 8
            },
            {
              "name": "StartAtZero",
              "value": 16
            },
            {
              "name": "CantAggregateInSql",
              "value": 22
            }
          ],
          "type": 33,
          "value": 0
        },
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 55,
          "index": 0,
          "name": "Registers",
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
          "value": -1
        },
        {
          "chartType": 57,
          "index": 0,
          "name": "Key",
          "selectionItems": null,
          "type": 31,
          "value": 0
        }
      ]
    },
    {
      "chartParameter": 129,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 140,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 62,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 138,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 47,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 6,
          "index": 0,
          "name": "Stacked",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        }
      ]
    },
    {
      "chartParameter": 75,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 6,
          "index": 0,
          "name": "Stacked",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        }
      ]
    },
    {
      "chartParameter": 46,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 6,
          "index": 0,
          "name": "Stacked",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        }
      ]
    },
    {
      "chartParameter": 49,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 48,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 6,
          "index": 0,
          "name": "Stacked",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        }
      ]
    },
    {
      "chartParameter": 44,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 6,
          "index": 0,
          "name": "Stacked",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        }
      ]
    },
    {
      "chartParameter": 90,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        },
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 91,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        },
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 173,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        },
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 45,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 6,
          "index": 0,
          "name": "Stacked",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        }
      ]
    },
    {
      "chartParameter": 128,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 6,
          "index": 0,
          "name": "Stacked",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        }
      ]
    },
    {
      "chartParameter": 184,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 6,
          "index": 0,
          "name": "Stacked",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        }
      ]
    },
    {
      "chartParameter": 43,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 6,
          "index": 0,
          "name": "Stacked",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        }
      ]
    },
    {
      "chartParameter": 149,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 6,
          "index": 0,
          "name": "Stacked",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        }
      ]
    },
    {
      "chartParameter": 60,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 6,
          "index": 0,
          "name": "Stacked",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        }
      ]
    },
    {
      "chartParameter": 67,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 148,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 146,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 6,
          "index": 0,
          "name": "Stacked",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        }
      ]
    },
    {
      "chartParameter": 150,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 6,
          "index": 0,
          "name": "Stacked",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        }
      ]
    },
    {
      "chartParameter": 151,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 6,
          "index": 0,
          "name": "Stacked",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        }
      ]
    },
    {
      "chartParameter": 63,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 6,
          "index": 0,
          "name": "Stacked",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        }
      ]
    },
    {
      "chartParameter": 147,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 6,
          "index": 0,
          "name": "Stacked",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        }
      ]
    },
    {
      "chartParameter": 169,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 6,
          "index": 0,
          "name": "Stacked",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        }
      ]
    },
    {
      "chartParameter": 170,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 6,
          "index": 0,
          "name": "Stacked",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        }
      ]
    },
    {
      "chartParameter": 181,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 30,
          "index": 0,
          "name": "ShowRates",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 32,
          "index": 0,
          "name": "ShowEnergy",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 29,
          "index": 0,
          "name": "SeparatePeak",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 182,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 30,
          "index": 0,
          "name": "ShowRates",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 32,
          "index": 0,
          "name": "ShowEnergy",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 29,
          "index": 0,
          "name": "SeparatePeak",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 144,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 30,
          "index": 0,
          "name": "ShowRates",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 32,
          "index": 0,
          "name": "ShowEnergy",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 29,
          "index": 0,
          "name": "SeparatePeak",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 136,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 133,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 6,
          "index": 0,
          "name": "Stacked",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 9,
          "index": 0,
          "name": "ShowWeather",
          "selectionItems": null,
          "type": 16,
          "value": true
        }
      ]
    },
    {
      "chartParameter": 132,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 10,
          "index": 0,
          "name": "ShowBars",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 6,
          "index": 0,
          "name": "Stacked",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 9,
          "index": 0,
          "name": "ShowWeather",
          "selectionItems": null,
          "type": 16,
          "value": true
        }
      ]
    },
    {
      "chartParameter": 131,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        },
        {
          "chartType": 2,
          "index": 0,
          "name": "ShowInverters",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 4,
          "index": 0,
          "name": "ShowEstimate",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 69,
          "index": 0,
          "name": "ModelIndex",
          "selectionItems": null,
          "type": 1,
          "value": 0
        }
      ]
    },
    {
      "chartParameter": 130,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        },
        {
          "chartType": 2,
          "index": 0,
          "name": "ShowInverters",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 4,
          "index": 0,
          "name": "ShowEstimate",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 69,
          "index": 0,
          "name": "ModelIndex",
          "selectionItems": null,
          "type": 1,
          "value": 0
        }
      ]
    },
    {
      "chartParameter": 135,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        },
        {
          "chartType": 2,
          "index": 0,
          "name": "ShowInverters",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 4,
          "index": 0,
          "name": "ShowEstimate",
          "selectionItems": null,
          "type": 16,
          "value": true
        }
      ]
    },
    {
      "chartParameter": 134,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 52,
          "index": 0,
          "name": "AnnualDegrade",
          "selectionItems": [
            {
              "name": "Annual compound percentage",
              "stringValue": "Pow",
              "value": 0
            },
            {
              "name": "Annual linear percentage",
              "stringValue": "Linear",
              "value": 1
            },
            {
              "name": "No aged derate",
              "stringValue": "None",
              "value": 2
            },
            {
              "name": "Monthly straight line",
              "stringValue": "FlatMonth",
              "value": 4
            },
            {
              "name": "Annual straight line",
              "stringValue": "FlatYear",
              "value": 8
            },
            {
              "name": "Ignore production guarantee",
              "stringValue": "NoProdGuarantee",
              "value": 16
            },
            {
              "name": "Annual linear straight line",
              "stringValue": "LinearFlatYear",
              "value": 32
            }
          ],
          "type": 29,
          "value": "Pow"
        },
        {
          "chartType": 2,
          "index": 0,
          "name": "ShowInverters",
          "selectionItems": null,
          "type": 16,
          "value": true
        },
        {
          "chartType": 4,
          "index": 0,
          "name": "ShowEstimate",
          "selectionItems": null,
          "type": 16,
          "value": true
        }
      ]
    },
    {
      "chartParameter": 142,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 30,
          "index": 0,
          "name": "ShowRates",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 32,
          "index": 0,
          "name": "ShowEnergy",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 29,
          "index": 0,
          "name": "SeparatePeak",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 155,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 30,
          "index": 0,
          "name": "ShowRates",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 32,
          "index": 0,
          "name": "ShowEnergy",
          "selectionItems": null,
          "type": 16,
          "value": false
        },
        {
          "chartType": 29,
          "index": 0,
          "name": "SeparatePeak",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 65,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 92,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 254,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 231,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 125,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 21,
          "index": 0,
          "name": "UseGross",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 66,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 103,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 269,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 261,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 172,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 0,
          "index": 0,
          "name": "Detail",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 268,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 253,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 251,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 92,
          "index": 0,
          "name": "TranspositionMethod",
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
      "chartParameter": 85,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 86,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 87,
      "isExcluded": false,
      "paramsList": []
    },
    {
      "chartParameter": 152,
      "isExcluded": false,
      "paramsList": [
        {
          "chartType": 63,
          "index": 0,
          "name": "AbsoluteSoil",
          "selectionItems": null,
          "type": 16,
          "value": false
        }
      ]
    },
    {
      "chartParameter": 83,
      "isExcluded": true,
      "paramsList": []
    }
  ],
  "deliveryEmails": [],
  "deliveryFtpAddress": "",
  "deliveryHttpAddress": "",
  "deliveryMethod": 0,
  "deliveryPassword": "",
  "deliveryUsername": "",
  "description": "",
  "enumType": 0,
  "excludeHeaders": false,
  "externalAllowed": true,
  "externalAuth": false,
  "fieldOptionsLists": [],
  "fileLanguage": "en-US",
  "groupResults": false,
  "hardwareFilterList": [],
  "includeForecast": false,
  "key": "F221210",
  "lastChanged": "2026-04-23T17:02:50Z",
  "logoKey": "",
  "name": "Asset Operations Status List",
  "newNote": "",
  "onlyBelowCustomer": false,
  "onlyFuture": false,
  "operationsFilter": 4608,
  "ownerKey": "C8458",
  "parentKey": "D97742",
  "pivotOutput": true,
  "proofSiteKey": "",
  "queryItems": [
    {
      "columnHeaders": [],
      "elevation": 90,
      "format": "",
      "formula": "",
      "indexMap": 0,
      "inputs": [],
      "kpiQuery": null,
      "name": "",
      "queryKey": "",
      "queryName": "",
      "queryParam": "",
      "sourceType": 1,
      "typeSelection": 200,
      "units": 0
    }
  ],
  "range": {
    "end": "2026-04-23",
    "start": "2026-04-20"
  },
  "remarks": "",
  "removeDuplicates": true,
  "reportDetail": 0,
  "reportFileType": 54,
  "reportOutput": 0,
  "reportOwnerInPath": true,
  "reportTitle": "5.1_Asset Operation - Status List",
  "reportType": 0,
  "rowHeader0": 3,
  "rowHeader1": 2,
  "rowHeader2": 0,
  "rowHeader3": 0,
  "rowHeader4": 0,
  "scheduleDay": 0,
  "scheduleId": 0,
  "schedulePeriod": 0,
  "separateByHwType": false,
  "separateSheets": false,
  "sftpKey": "",
  "sftpPrivateKey": "",
  "siteRange": "",
  "skipNotInService": false,
  "sort": 0,
  "sourceItems": [
    {
      "key": "C16295"
    }
  ],
  "tags": {
    "attributes": [],
    "key": "{\"ancestorKey\":\"F221210\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\"]}",
    "keywords": [],
    "lastChanged": null,
    "notes": [],
    "powerDisplays": []
  },
  "templateKey": "",
  "templateTarget": "",
  "timespan": 0,
  "timespanUnit": 0,
  "titleDashKey": "",
  "titleDashParamsList": [],
  "trimNighttime": false,
  "useSftp": false
}
```

[Return to top](#top)

