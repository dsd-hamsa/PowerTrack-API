<a id="top"></a>
# /api/edit/alert/{alert_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [Alert Type: General](#alert-type-general)
- [Example](#example)

## Alert Type: General

```json
{
  "type": "object",
  "properties": {
    "acknowledgedAt": {
      "type": "object",
      "properties": {}
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
GET /api/edit/alert/x74ee538a
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 05fc89
referer: https://apps.alsoenergy.com/powertrack/H266825/operations/alerts
```

**Response:**

```json
{
  "acknowledgedAt": null,
  "acknowledgedByName": "",
  "alertConfigId": "1107741",
  "alertId": "149836674",
  "assignedTo": "",
  "capacity": 50,
  "capacityKw": 50,
  "description": "Faults detected at THD - Baltimore Dist - 5830 Tiger: Inv 24 (50kW) SMA STP Core-1 50US\r\nWarning",
  "end": null,
  "eventCode": 418,
  "eventName": "SMA Inverter  / Cluster controller",
  "hardwareKey": "H266825",
  "impact": 0,
  "isAcknowledged": false,
  "isResolved": false,
  "key": "x74ee538a",
  "lastAcknowledgedBy": "",
  "lastData": "22.4 kW",
  "lastNoteKey": "",
  "lastResolvedBy": "",
  "lastServiceRequestId": "0",
  "lastServiceRequestKey": "",
  "lastSuccess": "2026-04-30T18:44:02Z",
  "lastWorkOrderId": "0",
  "lastWorkOrderKey": "",
  "level": 0,
  "lossKwh": "NaN",
  "lossKwhPerDay": "NaN",
  "lossMoney": "NaN",
  "lossMoneyPerDay": "NaN",
  "lossMoneyUnit": 0,
  "message": "Warning",
  "name": "Faults detected at THD - Baltimore Dist - 5830 Tiger: Inv 24 (50kW) SMA STP Core-1 50US",
  "newNote": "",
  "power": 0,
  "powerAvg15": 0,
  "query": {
    "animationMode": 0,
    "backgroundColor": "",
    "binSpan": 0,
    "bins": 100,
    "colorGradient": 10,
    "dataItems": [
      {
        "autoGenLine": true,
        "chartField": 1,
        "codeName": "",
        "columnName": "KwAC",
        "custom": "",
        "customUnits": "",
        "degree": 0,
        "dynamicLineType": 15,
        "fillColor": "rgba(255,1,1,0.996078431372549)",
        "fillDiameter": 0,
        "fitMode": 0,
        "format": "",
        "function": 0,
        "hardwareKey": "H266825",
        "index": 0,
        "isDisabled": false,
        "isOverview": false,
        "layer": 0,
        "line": 17,
        "lineColor": "rgba(255,1,1,0.996078431372549)",
        "lineWidth": 1,
        "linkedUnits": 0,
        "name": "KwAC",
        "nameOverride": true,
        "outputBin": -1,
        "resultName": "",
        "siteKey": "S54599",
        "source": "",
        "title": "Inv 24 (50kW) SMA STP Core-1 50US",
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
        "codeName": "",
        "columnName": "KwhAC",
        "custom": "",
        "customUnits": "",
        "degree": 0,
        "dynamicLineType": 15,
        "fillColor": "rgba(255,1,1,0.996078431372549)",
        "fillDiameter": 0,
        "fitMode": 0,
        "format": "",
        "function": 4,
        "hardwareKey": "H266825",
        "index": 1,
        "isDisabled": false,
        "isOverview": true,
        "layer": 0,
        "line": 17,
        "lineColor": "rgba(255,1,1,0.996078431372549)",
        "lineWidth": 1,
        "linkedUnits": 0,
        "name": "KwhAC",
        "nameOverride": true,
        "outputBin": -1,
        "resultName": "",
        "siteKey": "S54599",
        "source": "",
        "title": "Inv 24 (50kW) SMA STP Core-1 50US",
        "units": 0,
        "useStandardAlertMessage": false,
        "yAxis": 0,
        "yMax": null,
        "yMin": 0,
        "yZero": false
      },
      {
        "autoGenLine": true,
        "chartField": 1,
        "codeName": "",
        "columnName": "",
        "custom": "",
        "customUnits": "",
        "degree": 0,
        "dynamicLineType": 15,
        "fillColor": "rgba(255,1,1,0.996078431372549)",
        "fillDiameter": 0,
        "fitMode": 0,
        "format": "",
        "function": 0,
        "hardwareKey": "",
        "index": 2,
        "isDisabled": false,
        "isOverview": false,
        "layer": 0,
        "line": 14,
        "lineColor": "rgba(255,1,1,0.996078431372549)",
        "lineWidth": 1,
        "linkedUnits": 0,
        "name": "InverterDaySum",
        "nameOverride": false,
        "outputBin": -1,
        "resultName": "",
        "siteKey": "",
        "source": "KwAC.Value",
        "title": "Total inverter output",
        "units": 10,
        "useStandardAlertMessage": false,
        "yAxis": 0,
        "yMax": null,
        "yMin": 0,
        "yZero": false
      },
      {
        "autoGenLine": true,
        "chartField": 2,
        "codeName": "",
        "columnName": "",
        "custom": "",
        "customUnits": "",
        "degree": 0,
        "dynamicLineType": 15,
        "fillColor": "rgba(255,1,1,0.996078431372549)",
        "fillDiameter": 0,
        "fitMode": 0,
        "format": "",
        "function": 4,
        "hardwareKey": "",
        "index": 3,
        "isDisabled": false,
        "isOverview": false,
        "layer": 0,
        "line": 14,
        "lineColor": "rgba(255,1,1,0.996078431372549)",
        "lineWidth": 1,
        "linkedUnits": 0,
        "name": "InverterSum",
        "nameOverride": false,
        "outputBin": -1,
        "resultName": "",
        "siteKey": "",
        "source": "KwhAC.Value",
        "title": "Total inverter output",
        "units": 11,
        "useStandardAlertMessage": false,
        "yAxis": 0,
        "yMax": null,
        "yMin": 0,
        "yZero": false
      },
      {
        "autoGenLine": true,
        "chartField": 1,
        "codeName": "",
        "columnName": "Sun",
        "custom": "",
        "customUnits": "",
        "degree": 0,
        "dynamicLineType": 15,
        "fillColor": "rgba(255,1,1,0.996078431372549)",
        "fillDiameter": 4,
        "fitMode": 0,
        "format": "",
        "function": 0,
        "hardwareKey": "H330895",
        "index": 4,
        "isDisabled": false,
        "isOverview": false,
        "layer": 0,
        "line": 0,
        "lineColor": "rgba(255,1,1,0.996078431372549)",
        "lineWidth": 2,
        "linkedUnits": 0,
        "name": "SunP1",
        "nameOverride": true,
        "outputBin": -1,
        "resultName": "",
        "siteKey": "S54599",
        "source": "",
        "title": "Virtual Weather Station (THD - Baltimore Dist - 5829 Lion) (POA)",
        "units": 57,
        "useStandardAlertMessage": false,
        "yAxis": 1,
        "yMax": 1200,
        "yMin": 0,
        "yZero": false
      },
      {
        "autoGenLine": true,
        "chartField": 2,
        "codeName": "",
        "columnName": "Sun",
        "custom": "",
        "customUnits": "",
        "degree": 0,
        "dynamicLineType": 15,
        "fillColor": "rgba(255,1,1,0.996078431372549)",
        "fillDiameter": 4,
        "fitMode": 0,
        "format": "",
        "function": 6,
        "hardwareKey": "H330895",
        "index": 5,
        "isDisabled": false,
        "isOverview": false,
        "layer": 0,
        "line": 0,
        "lineColor": "rgba(255,1,1,0.996078431372549)",
        "lineWidth": 2,
        "linkedUnits": 0,
        "name": "SunP1M",
        "nameOverride": true,
        "outputBin": -1,
        "resultName": "",
        "siteKey": "S54599",
        "source": "",
        "title": "Virtual Weather Station (THD - Baltimore Dist - 5829 Lion) (POA)",
        "units": 58,
        "useStandardAlertMessage": false,
        "yAxis": 1,
        "yMax": null,
        "yMin": 0,
        "yZero": false
      },
      {
        "autoGenLine": false,
        "chartField": 1,
        "codeName": "EstimatedPower",
        "columnName": "",
        "custom": "",
        "customUnits": "",
        "degree": 0,
        "dynamicLineType": 15,
        "fillColor": "rgba(255,0,0,1)",
        "fillDiameter": 0,
        "fitMode": 0,
        "format": "",
        "function": 0,
        "hardwareKey": "",
        "index": 6,
        "isDisabled": false,
        "isOverview": false,
        "layer": 0,
        "line": 1,
        "lineColor": "rgba(255,0,0,1)",
        "lineWidth": 2,
        "linkedUnits": 0,
        "name": "dayEst1",
        "nameOverride": true,
        "outputBin": -1,
        "resultName": "",
        "siteKey": "",
        "source": "KwAC.ModelWatts() / 1000",
        "title": "Estimated output (blue sky)",
        "units": 10,
        "useStandardAlertMessage": false,
        "yAxis": 0,
        "yMax": null,
        "yMin": 0,
        "yZero": false
      },
      {
        "autoGenLine": false,
        "chartField": 2,
        "codeName": "EstimatedEnergy",
        "columnName": "",
        "custom": "",
        "customUnits": "",
        "degree": 0,
        "dynamicLineType": 15,
        "fillColor": "rgba(255,0,0,1)",
        "fillDiameter": 4,
        "fitMode": 0,
        "format": "",
        "function": 4,
        "hardwareKey": "",
        "index": 7,
        "isDisabled": false,
        "isOverview": false,
        "layer": 0,
        "line": 1,
        "lineColor": "rgba(255,0,0,1)",
        "lineWidth": 2,
        "linkedUnits": 0,
        "name": "BlueSky_KwhAC",
        "nameOverride": true,
        "outputBin": -1,
        "resultName": "",
        "siteKey": "",
        "source": "KwhAC.ModelKWH(\"x\", 0, 0)",
        "title": "Estimated output (average)",
        "units": 11,
        "useStandardAlertMessage": false,
        "yAxis": 0,
        "yMax": null,
        "yMin": 0,
        "yZero": false
      }
    ],
    "dataNotRequired": false,
    "description": "",
    "eveningSkip": 2,
    "fillGaps": false,
    "foregroundColor": "",
    "futureDays": 0,
    "hasChart": true,
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
    "morningSkip": 4,
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
        "chartType": 10,
        "index": 1,
        "name": "ShowBars",
        "selectionItems": null,
        "type": 16,
        "value": false
      },
      {
        "chartType": 6,
        "index": 2,
        "name": "Stacked",
        "selectionItems": null,
        "type": 16,
        "value": true
      },
      {
        "chartType": 9,
        "index": 3,
        "name": "ShowWeather",
        "selectionItems": null,
        "type": 16,
        "value": true
      },
      {
        "chartType": 33,
        "index": 4,
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
        "Kilowatt hours",
        "Watts/meter²",
        "Watt hours/meter²"
      ],
      "whenAvgSource": false
    },
    "refreshRate": 0,
    "separateTime": false,
    "seriesLimit": 0,
    "showEvents": true,
    "showTable": false,
    "sort": 0,
    "spanFrom": "2026-04-30",
    "spanTo": "2026-05-01",
    "subtitle": "",
    "summary": "if (1) {\r\n\tfloat sum = (BinDay() ? KwAC.Integral() : KwhAC.Sum());\r\n\tAddResultRow(Localize(\"Total\"), sum, Localize(BinDay() ? \"kWh (from kW)\" : \"kWh\"));\r\n\tSetResult(\"Production\", sum);\r\n\tif (Days() >= 1)\r\n\t\tAddResultRow(Localize(\"Average\"), sum/Bins(), Localize(\"kWh/\") + Localize(BinType()));\r\n\ttry {\r\n\t\tfloat est = ('dayEst1' ?? 'BlueSky_KwhAC').Integral();\r\n\t\tAddResultRow(Localize(\"Estimated\"), est, Localize(\"kWh\"));\r\n\t\tSetResult(\"Estimate\", est);\r\n\t\tAddResultRow(Localize(\"Total/Estimated\"), 100 * sum / est, Localize(\"%\"));\r\n\t} catch (object ex) {}\r\r\tFormatResults(\"{0}: \", \"{0:0.0} <right>\");\r\n}",
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
        "chartType": 0,
        "indexMap": 0,
        "outBinSize": 0,
        "outFunc": 0
      },
      {
        "binSize": 1440,
        "chartType": 0,
        "indexMap": 1,
        "outBinSize": 0,
        "outFunc": 0
      },
      {
        "binSize": 1440,
        "chartType": 0,
        "indexMap": 2,
        "outBinSize": 0,
        "outFunc": 0
      },
      {
        "binSize": 44640,
        "chartType": 0,
        "indexMap": 3,
        "outBinSize": 0,
        "outFunc": 0
      },
      {
        "binSize": 527040,
        "chartType": 0,
        "indexMap": 4,
        "outBinSize": 0,
        "outFunc": 0
      }
    ],
    "timeStampAdjust": null,
    "timeZone": 0,
    "timeZoneOverride": false,
    "title": "Inverter Performance",
    "titleFontSize": 0,
    "ts": null,
    "upperLimit": 0,
    "upperLimitColor": "",
    "useRaw": false,
    "validDataDate": "2020-12-27T12:30:00Z",
    "xTitle": ""
  },
  "reminder": false,
  "resolvedTime": null,
  "severity": 5,
  "siteKey": "S54599",
  "start": "2026-04-30T11:11:07Z",
  "systemSize": "NaN",
  "systemSizeDc": 0,
  "trackLoss": false,
  "triggerTime": "2026-04-30T12:11:34Z",
  "ts": "2026-04-30T12:11:34Z",
  "tz": "US/Eastern"
}
```

[Return to top](#top)

