<a id="top"></a>
# /api/edit/alert/{alert_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200, 200  

## Table of Contents

- [Alert Type: General](#alert-type-general)
- [Example](#example)

## Alert Type: General

```json
{
  "type": "object",
  "properties": {
    "acknowledgedAt": {
      "type": "string"
    },
    "acknowledgedByName": {
      "type": "string"
    },
    "alertConfigId": {
      "type": "string"
    },
    "alertId": {
      "type": "string"
    },
    "assignedTo": {
      "type": "string"
    },
    "capacity": {
      "type": "number"
    },
    "capacityKw": {
      "type": "number"
    },
    "description": {
      "type": "string"
    },
    "end": {
      "type": "object",
      "properties": {}
    },
    "eventCode": {
      "type": "number"
    },
    "eventName": {
      "type": "string"
    },
    "hardwareKey": {
      "type": "string"
    },
    "impact": {
      "type": "number"
    },
    "isAcknowledged": {
      "type": "boolean"
    },
    "isResolved": {
      "type": "boolean"
    },
    "key": {
      "type": "string"
    },
    "lastAcknowledgedBy": {
      "type": "string"
    },
    "lastData": {
      "type": "string"
    },
    "lastNoteKey": {
      "type": "string"
    },
    "lastResolvedBy": {
      "type": "string"
    },
    "lastServiceRequestId": {
      "type": "string"
    },
    "lastServiceRequestKey": {
      "type": "string"
    },
    "lastSuccess": {
      "type": "string"
    },
    "lastWorkOrderId": {
      "type": "string"
    },
    "lastWorkOrderKey": {
      "type": "string"
    },
    "level": {
      "type": "number"
    },
    "lossKwh": {
      "type": "string"
    },
    "lossKwhPerDay": {
      "type": "string"
    },
    "lossMoney": {
      "type": "string"
    },
    "lossMoneyPerDay": {
      "type": "string"
    },
    "lossMoneyUnit": {
      "type": "number"
    },
    "message": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "newNote": {
      "type": "string"
    },
    "power": {
      "type": "number"
    },
    "powerAvg15": {
      "type": "number"
    },
    "query": {
      "type": "object",
      "properties": {
        "animationMode": {
          "type": "number"
        },
        "backgroundColor": {
          "type": "string"
        },
        "binSpan": {
          "type": "number"
        },
        "bins": {
          "type": "number"
        },
        "chartViewMode": {
          "type": "number"
        },
        "colorGradient": {
          "type": "number"
        },
        "dataItems": {
          "type": "object",
          "properties": {
            "autoGenLine": {
              "type": "boolean"
            },
            "chartField": {
              "type": "number"
            },
            "codeName": {
              "type": "string"
            },
            "columnName": {
              "type": "string"
            },
            "custom": {
              "type": "string"
            },
            "customUnits": {
              "type": "string"
            },
            "degree": {
              "type": "number"
            },
            "dynamicLineType": {
              "type": "number"
            },
            "fillColor": {
              "type": "string"
            },
            "fillDiameter": {
              "type": "number"
            },
            "fitMode": {
              "type": "number"
            },
            "format": {
              "type": "string"
            },
            "function": {
              "type": "number"
            },
            "hardwareKey": {
              "type": "string"
            },
            "index": {
              "type": "number"
            },
            "isDisabled": {
              "type": "boolean"
            },
            "isOverview": {
              "type": "boolean"
            },
            "layer": {
              "type": "number"
            },
            "line": {
              "type": "number"
            },
            "lineColor": {
              "type": "string"
            },
            "lineWidth": {
              "type": "number"
            },
            "linkedUnits": {
              "type": "number"
            },
            "name": {
              "type": "string"
            },
            "nameOverride": {
              "type": "boolean"
            },
            "outputBin": {
              "type": "number"
            },
            "resultName": {
              "type": "string"
            },
            "siteKey": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "title": {
              "type": "string"
            },
            "units": {
              "type": "number"
            },
            "useStandardAlertMessage": {
              "type": "boolean"
            },
            "yAxis": {
              "type": "number"
            },
            "yMax": {
              "type": "object",
              "properties": {}
            },
            "yMin": {
              "type": "number"
            },
            "yZero": {
              "type": "boolean"
            }
          }
        },
        "dataNotRequired": {
          "type": "boolean"
        },
        "dateTimeOrientation": {
          "type": "number"
        },
        "description": {
          "type": "string"
        },
        "eveningSkip": {
          "type": "number"
        },
        "fillGaps": {
          "type": "boolean"
        },
        "foregroundColor": {
          "type": "string"
        },
        "futureDays": {
          "type": "number"
        },
        "hasChart": {
          "type": "boolean"
        },
        "heatmapGroupBy": {
          "type": "number"
        },
        "heatmapSortBy": {
          "type": "number"
        },
        "hideLegend": {
          "type": "boolean"
        },
        "hideMenu": {
          "type": "boolean"
        },
        "hideTools": {
          "type": "boolean"
        },
        "initialSpan": {
          "type": "number"
        },
        "isOverview": {
          "type": "boolean"
        },
        "isPivot": {
          "type": "boolean"
        },
        "isSummary": {
          "type": "boolean"
        },
        "key": {
          "type": "string"
        },
        "kpiChart": {
          "type": "object",
          "properties": {}
        },
        "labelFontSize": {
          "type": "number"
        },
        "lowerLimit": {
          "type": "number"
        },
        "lowerLimitColor": {
          "type": "string"
        },
        "morningSkip": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "newNote": {
          "type": "string"
        },
        "noCache": {
          "type": "boolean"
        },
        "noQuery": {
          "type": "boolean"
        },
        "nominal": {
          "type": "number"
        },
        "nominalColor": {
          "type": "string"
        },
        "numberOfDays": {
          "type": "number"
        },
        "parameters": {
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
              "properties": {}
            },
            "type": {
              "type": "number"
            },
            "value": {
              "type": "boolean"
            }
          }
        },
        "parentKey": {
          "type": "string"
        },
        "plotType": {
          "type": "number"
        },
        "preChart": {
          "type": "string"
        },
        "preprocess": {
          "type": "string"
        },
        "queryCondition": {
          "type": "object",
          "properties": {
            "avgSourceLimit": {
              "type": "number"
            },
            "condition": {
              "type": "number"
            },
            "continuously": {
              "type": "boolean"
            },
            "isStillActive": {
              "type": "boolean"
            },
            "limitBottom": {
              "type": "number"
            },
            "limitTop": {
              "type": "number"
            },
            "minDaysOrMinutes": {
              "type": "number"
            },
            "minTimeUnit": {
              "type": "number"
            },
            "normalize": {
              "type": "boolean"
            },
            "recentDays": {
              "type": "number"
            },
            "showPoints": {
              "type": "boolean"
            },
            "showRegion": {
              "type": "boolean"
            },
            "source": {
              "type": "string"
            },
            "sourceList": {
              "type": "string"
            },
            "whenAvgSource": {
              "type": "boolean"
            }
          }
        },
        "refreshRate": {
          "type": "number"
        },
        "separateTime": {
          "type": "boolean"
        },
        "seriesLimit": {
          "type": "number"
        },
        "showEvents": {
          "type": "boolean"
        },
        "showTable": {
          "type": "boolean"
        },
        "sort": {
          "type": "number"
        },
        "spanFrom": {
          "type": "string"
        },
        "spanTo": {
          "type": "string"
        },
        "subtitle": {
          "type": "string"
        },
        "summary": {
          "type": "string"
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
        "timeSpanList": {
          "type": "object",
          "properties": {
            "binSize": {
              "type": "number"
            },
            "chartType": {
              "type": "number"
            },
            "indexMap": {
              "type": "number"
            },
            "outBinSize": {
              "type": "number"
            },
            "outFunc": {
              "type": "number"
            }
          }
        },
        "timeStampAdjust": {
          "type": "object",
          "properties": {}
        },
        "timeZone": {
          "type": "number"
        },
        "timeZoneOverride": {
          "type": "boolean"
        },
        "title": {
          "type": "string"
        },
        "titleFontSize": {
          "type": "number"
        },
        "ts": {
          "type": "object",
          "properties": {}
        },
        "upperLimit": {
          "type": "number"
        },
        "upperLimitColor": {
          "type": "string"
        },
        "useRaw": {
          "type": "boolean"
        },
        "validDataDate": {
          "type": "string"
        },
        "xTitle": {
          "type": "string"
        }
      }
    },
    "reminder": {
      "type": "boolean"
    },
    "resolvedTime": {
      "type": "object",
      "properties": {}
    },
    "severity": {
      "type": "number"
    },
    "siteKey": {
      "type": "string"
    },
    "start": {
      "type": "string"
    },
    "systemSize": {
      "type": "string"
    },
    "systemSizeDc": {
      "type": "number"
    },
    "trackLoss": {
      "type": "boolean"
    },
    "triggerTime": {
      "type": "string"
    },
    "ts": {
      "type": "string"
    },
    "tz": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/edit/alert/x7500ace9
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 3fefeb
referer: https://apps.alsoenergy.com/powertrack/S52104/operations/alerts
```

**Response:**

```json
{
  "acknowledgedAt": "2026-08-25T13:25:00Z",
  "acknowledgedByName": "Adrienne Peters",
  "alertConfigId": "721659",
  "alertId": "151039200",
  "assignedTo": "",
  "capacity": 2750,
  "capacityKw": 2750,
  "description": "Faults detected at Schdy - 2D Landfill: SEL-735 PV Prod Meter\r\nPhase voltage mismatch:\t Phase A: 7740.00 volts",
  "end": null,
  "eventCode": 551,
  "eventName": "Power Meter Check 2.0",
  "hardwareKey": "H225871",
  "impact": 0,
  "isAcknowledged": true,
  "isResolved": false,
  "key": "x7500ace9",
  "lastAcknowledgedBy": "U26704",
  "lastData": "1.16 MW",
  "lastNoteKey": "",
  "lastResolvedBy": "",
  "lastServiceRequestId": "0",
  "lastServiceRequestKey": "",
  "lastSuccess": "2026-09-11T16:42:45Z",
  "lastWorkOrderId": "0",
  "lastWorkOrderKey": "",
  "level": 0,
  "lossKwh": "NaN",
  "lossKwhPerDay": "NaN",
  "lossMoney": "NaN",
  "lossMoneyPerDay": "NaN",
  "lossMoneyUnit": 0,
  "message": "Phase voltage mismatch:\nPhase A: 7740.00 volts\nPhase B: 0.00 volts\nPhase C: 7680.00 volts",
  "name": "Faults detected at Schdy - 2D Landfill: SEL-735 PV Prod Meter",
  "newNote": "",
  "power": 0,
  "powerAvg15": 0,
  "query": {
    "animationMode": 0,
    "backgroundColor": "",
    "binSpan": 0,
    "bins": 100,
    "chartViewMode": 0,
    "colorGradient": 10,
    "dataItems": [
      {
        "autoGenLine": true,
        "chartField": 1,
        "codeName": "Power",
        "columnName": "KW",
        "custom": "",
        "customUnits": "",
        "degree": 0,
        "dynamicLineType": 15,
        "fillColor": "rgba(255,1,1,0.996078431372549)",
        "fillDiameter": 0,
        "fitMode": 0,
        "format": "",
        "function": 0,
        "hardwareKey": "H225871",
        "index": 0,
        "isDisabled": false,
        "isOverview": false,
        "layer": 0,
        "line": 14,
        "lineColor": "rgba(255,1,1,0.996078431372549)",
        "lineWidth": 2,
        "linkedUnits": 0,
        "name": "Power1",
        "nameOverride": true,
        "outputBin": -1,
        "resultName": "",
        "siteKey": "S52104",
        "source": "",
        "title": "SEL-735 PV Prod Meter",
        "units": 0,
        "useStandardAlertMessage": false,
        "yAxis": 0,
        "yMax": null,
        "yMin": 0,
        "yZero": false
      },
      {
        "autoGenLine": true,
        "chartField": 2,
        "codeName": "Energy",
        "columnName": "KWHnet",
        "custom": "",
        "customUnits": "",
        "degree": 0,
        "dynamicLineType": 15,
        "fillColor": "rgba(255,1,1,0.996078431372549)",
        "fillDiameter": 0,
        "fitMode": 0,
        "format": "",
        "function": 4,
        "hardwareKey": "H225871",
        "index": 1,
        "isDisabled": false,
        "isOverview": true,
        "layer": 0,
        "line": 14,
        "lineColor": "rgba(255,1,1,0.996078431372549)",
        "lineWidth": 2,
        "linkedUnits": 0,
        "name": "Net1",
        "nameOverride": true,
        "outputBin": -1,
        "resultName": "",
        "siteKey": "S52104",
        "source": "",
        "title": "SEL-735 PV Prod Meter",
        "units": 0,
        "useStandardAlertMessage": false,
        "yAxis": 0,
        "yMax": null,
        "yMin": 0,
        "yZero": false
      },
      {
        "autoGenLine": false,
        "chartField": 2,
        "codeName": "",
        "columnName": "",
        "custom": "",
        "customUnits": "kWh",
        "degree": 0,
        "dynamicLineType": 15,
        "fillColor": "rgba(255,0,0,1)",
        "fillDiameter": 0,
        "fitMode": 0,
        "format": "",
        "function": 0,
        "hardwareKey": "",
        "index": 2,
        "isDisabled": false,
        "isOverview": false,
        "layer": 0,
        "line": 0,
        "lineColor": "rgba(255,0,0,1)",
        "lineWidth": 2,
        "linkedUnits": 0,
        "name": "estimate",
        "nameOverride": false,
        "outputBin": -1,
        "resultName": "",
        "siteKey": "",
        "source": "SiteEstimate(0, \"Pow\")",
        "title": "Site Performance Estimate",
        "units": 11,
        "useStandardAlertMessage": false,
        "yAxis": 0,
        "yMax": null,
        "yMin": 0,
        "yZero": false
      }
    ],
    "dataNotRequired": false,
    "dateTimeOrientation": 0,
    "description": "",
    "eveningSkip": 0,
    "fillGaps": false,
    "foregroundColor": "",
    "futureDays": 0,
    "hasChart": true,
    "heatmapGroupBy": 0,
    "heatmapSortBy": 0,
    "hideLegend": false,
    "hideMenu": false,
    "hideTools": false,
    "initialSpan": 0,
    "isOverview": true,
    "isPivot": false,
    "isSummary": false,
    "key": "",
    "kpiChart": null,
    "labelFontSize": 0,
    "lowerLimit": 0,
    "lowerLimitColor": "",
    "morningSkip": 0,
    "name": "",
    "newNote": "",
    "noCache": false,
    "noQuery": false,
    "nominal": 0,
    "nominalColor": "",
    "numberOfDays": 0,
    "parameters": [
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
        "index": 1,
        "name": "AnnualDegrade",
        "selectionItems": null,
        "type": 29,
        "value": "Pow"
      },
      {
        "chartType": 2,
        "index": 2,
        "name": "ShowInverters",
        "selectionItems": null,
        "type": 16,
        "value": true
      },
      {
        "chartType": 4,
        "index": 3,
        "name": "ShowEstimate",
        "selectionItems": null,
        "type": 16,
        "value": true
      },
      {
        "chartType": 69,
        "index": 4,
        "name": "ModelIndex",
        "selectionItems": null,
        "type": 1,
        "value": 0
      },
      {
        "chartType": 33,
        "index": 5,
        "name": "LimitToHardwareCodes",
        "selectionItems": null,
        "type": 0,
        "value": ""
      }
    ],
    "parentKey": "",
    "plotType": 0,
    "preChart": "",
    "preprocess": "",
    "queryCondition": {
      "avgSourceLimit": 0,
      "condition": 0,
      "continuously": false,
      "isStillActive": false,
      "limitBottom": 0,
      "limitTop": 0,
      "minDaysOrMinutes": 0,
      "minTimeUnit": 0,
      "normalize": false,
      "recentDays": 0,
      "showPoints": false,
      "showRegion": false,
      "source": "",
      "sourceList": [
        "Kilowatts",
        "Kilowatt hours"
      ],
      "whenAvgSource": false
    },
    "refreshRate": 0,
    "separateTime": false,
    "seriesLimit": 0,
    "showEvents": true,
    "showTable": false,
    "sort": 0,
    "spanFrom": "2026-08-21",
    "spanTo": "2026-09-12",
    "subtitle": "",
    "summary": "if (1) {\r\n\tfloat sum = (BinDay() ? Power1.Integral() : Net1.Sum());\r\n\tAddResultRow(Localize(\"Total\"), sum, Localize(BinDay() ? \"kWh (from kW)\" : \"kWh\"));\r\n\tSetResult(\"Production\", sum);\r\n\tif (Days() >= 1)\r\n\t\tAddResultRow(Localize(\"Average\"), sum/Bins(), Localize(\"kWh/\") + Localize(BinType()));\r\n\tif (!BinDay()) {\r\n\t\tfloat est = ('' ?? 'estimate').Integral();\r\n\t\tAddResultRow(Localize(\"Estimate\"), est, Localize(\"kWh\"));\r\n\t\tSetResult(\"Estimate\", est);\r\n\t\tAddResultRow(Localize(\"Total/Estimate\"), 100 * sum / est, Localize(\"%\"));\r\n\t}\r\r\tFormatResults(\"{0}: \", \"{0:0.0} <right>\");\r\n}",
    "tags": {
      "attributes": [],
      "key": "{\"ancestorKey\":\"\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\"]}",
      "keywords": [],
      "lastChanged": null,
      "notes": [],
      "powerDisplays": []
    },
    "timeSpanList": [
      {
        "binSize": 15,
        "chartType": 11,
        "indexMap": 0,
        "outBinSize": 0,
        "outFunc": 0
      },
      {
        "binSize": 1440,
        "chartType": 11,
        "indexMap": 1,
        "outBinSize": 0,
        "outFunc": 0
      },
      {
        "binSize": 1440,
        "chartType": 11,
        "indexMap": 2,
        "outBinSize": 0,
        "outFunc": 0
      },
      {
        "binSize": 44640,
        "chartType": 11,
        "indexMap": 3,
        "outBinSize": 0,
        "outFunc": 0
      },
      {
        "binSize": 527040,
        "chartType": 11,
        "indexMap": 4,
        "outBinSize": 0,
        "outFunc": 0
      }
    ],
    "timeStampAdjust": null,
    "timeZone": 0,
    "timeZoneOverride": false,
    "title": "Metered Production",
    "titleFontSize": 0,
    "ts": null,
    "upperLimit": 0,
    "upperLimitColor": "",
    "useRaw": false,
    "validDataDate": "2020-02-11T19:36:00Z",
    "xTitle": ""
  },
  "reminder": true,
  "resolvedTime": null,
  "severity": 4,
  "siteKey": "S52104",
  "start": "2026-08-21T22:42:00Z",
  "systemSize": "NaN",
  "systemSizeDc": 0,
  "trackLoss": false,
  "triggerTime": "2026-08-21T22:59:06Z",
  "ts": "2026-09-10T23:19:03Z",
  "tz": "US/Eastern"
}
```

[Return to top](#top)

