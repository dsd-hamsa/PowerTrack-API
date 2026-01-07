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
      "type": "string"
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
            "type": {
              "type": "number"
            },
            "value": {
              "type": "string"
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
          "type": "object",
          "properties": {}
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
      "type": "string"
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
GET /api/edit/alert/x6cebb06b
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/S34924/operations/alerts??start=2024-01-07&end=2026-01-07
```

**Response:**

```json
{
  "acknowledgedAt": null,
  "acknowledgedByName": "",
  "alertConfigId": "52081",
  "alertId": "82554983",
  "assignedTo": "",
  "capacity": 1023,
  "capacityKw": 1023,
  "description": "Faults detected at President Container - [ 20170] ( NY ): Bentek Combiner 2\r\nBentek Combiner 2\t 1.000 amps/string (average)",
  "end": "2024-09-03T17:34:28Z",
  "eventCode": 353,
  "eventName": "Zone / string alarm",
  "hardwareKey": "H38212",
  "impact": 0,
  "isAcknowledged": false,
  "isResolved": true,
  "key": "x6cebb06b",
  "lastAcknowledgedBy": "",
  "lastData": "",
  "lastNoteKey": "",
  "lastResolvedBy": "",
  "lastServiceRequestId": "0",
  "lastServiceRequestKey": "",
  "lastSuccess": "2026-01-07T18:55:52Z",
  "lastWorkOrderId": "0",
  "lastWorkOrderKey": "",
  "level": 0,
  "lossKwh": "NaN",
  "lossKwhPerDay": "NaN",
  "lossMoney": "NaN",
  "lossMoneyPerDay": "NaN",
  "lossMoneyUnit": 0,
  "message": "Bentek Combiner 2\n1.000 amps/string (average)\nSun elevation: 52.1, azimuth: 148.5\n\n2.5 (ZoneAmps5) below limit (0.003 amps/string, 0.3% of average)\n\nResolved: Bentek Combiner 2\n1.292 amps/string (average)\nSun elevation: 56.1, azimuth: 179.5\n\nResolved: Bentek Combiner 2\n1.320 amps/string (average)\nSun elevation: 55.8, azimuth: 189.0",
  "name": "Faults detected at President Container - [ 20170] ( NY ): Bentek Combiner 2",
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
        "function": 0,
        "hardwareKey": "",
        "index": 0,
        "isDisabled": false,
        "isOverview": false,
        "layer": 0,
        "line": 0,
        "lineColor": "rgba(255,1,1,0.996078431372549)",
        "lineWidth": 2,
        "linkedUnits": 0,
        "name": "EstInsoPOA",
        "nameOverride": true,
        "outputBin": -1,
        "resultName": "",
        "siteKey": "",
        "source": "Sun2M.ModelSun(\"None\", 1)",
        "title": "IMT Reference Cell (Estimated POA)",
        "units": 58,
        "useStandardAlertMessage": false,
        "yAxis": 1,
        "yMax": null,
        "yMin": 0,
        "yZero": false
      },
      {
        "autoGenLine": true,
        "chartField": 0,
        "codeName": "",
        "columnName": "ZoneAmps1",
        "custom": "",
        "customUnits": "",
        "degree": 0,
        "dynamicLineType": 15,
        "fillColor": "rgba(255,1,1,0.996078431372549)",
        "fillDiameter": 0,
        "fitMode": 0,
        "format": "",
        "function": 0,
        "hardwareKey": "H38212",
        "index": 1,
        "isDisabled": false,
        "isOverview": false,
        "layer": 0,
        "line": 14,
        "lineColor": "rgba(255,1,1,0.996078431372549)",
        "lineWidth": 2,
        "linkedUnits": 0,
        "name": "SA1_ZoneAmps1",
        "nameOverride": true,
        "outputBin": -1,
        "resultName": "",
        "siteKey": "S34924",
        "source": "SA1_ZoneAmps1 / 96",
        "title": "2.1 (96 strings)",
        "units": 0,
        "useStandardAlertMessage": false,
        "yAxis": 0,
        "yMax": null,
        "yMin": null,
        "yZero": true
      },
      {
        "autoGenLine": true,
        "chartField": 0,
        "codeName": "",
        "columnName": "ZoneAmps2",
        "custom": "",
        "customUnits": "",
        "degree": 0,
        "dynamicLineType": 15,
        "fillColor": "rgba(255,1,1,0.996078431372549)",
        "fillDiameter": 0,
        "fitMode": 0,
        "format": "",
        "function": 0,
        "hardwareKey": "H38212",
        "index": 2,
        "isDisabled": false,
        "isOverview": false,
        "layer": 0,
        "line": 14,
        "lineColor": "rgba(255,1,1,0.996078431372549)",
        "lineWidth": 2,
        "linkedUnits": 0,
        "name": "SA1_ZoneAmps2",
        "nameOverride": true,
        "outputBin": -1,
        "resultName": "",
        "siteKey": "S34924",
        "source": "SA1_ZoneAmps2 / 108",
        "title": "2.2 (108 strings)",
        "units": 0,
        "useStandardAlertMessage": false,
        "yAxis": 0,
        "yMax": null,
        "yMin": null,
        "yZero": true
      },
      {
        "autoGenLine": true,
        "chartField": 0,
        "codeName": "",
        "columnName": "ZoneAmps3",
        "custom": "",
        "customUnits": "",
        "degree": 0,
        "dynamicLineType": 15,
        "fillColor": "rgba(255,1,1,0.996078431372549)",
        "fillDiameter": 0,
        "fitMode": 0,
        "format": "",
        "function": 0,
        "hardwareKey": "H38212",
        "index": 3,
        "isDisabled": false,
        "isOverview": false,
        "layer": 0,
        "line": 14,
        "lineColor": "rgba(255,1,1,0.996078431372549)",
        "lineWidth": 2,
        "linkedUnits": 0,
        "name": "SA1_ZoneAmps3",
        "nameOverride": true,
        "outputBin": -1,
        "resultName": "",
        "siteKey": "S34924",
        "source": "SA1_ZoneAmps3 / 96",
        "title": "2.3 (96 strings)",
        "units": 0,
        "useStandardAlertMessage": false,
        "yAxis": 0,
        "yMax": null,
        "yMin": null,
        "yZero": true
      },
      {
        "autoGenLine": true,
        "chartField": 0,
        "codeName": "",
        "columnName": "ZoneAmps4",
        "custom": "",
        "customUnits": "",
        "degree": 0,
        "dynamicLineType": 15,
        "fillColor": "rgba(255,1,1,0.996078431372549)",
        "fillDiameter": 0,
        "fitMode": 0,
        "format": "",
        "function": 0,
        "hardwareKey": "H38212",
        "index": 4,
        "isDisabled": false,
        "isOverview": false,
        "layer": 0,
        "line": 14,
        "lineColor": "rgba(255,1,1,0.996078431372549)",
        "lineWidth": 2,
        "linkedUnits": 0,
        "name": "SA1_ZoneAmps4",
        "nameOverride": true,
        "outputBin": -1,
        "resultName": "",
        "siteKey": "S34924",
        "source": "SA1_ZoneAmps4 / 108",
        "title": "2.4 (108 strings)",
        "units": 0,
        "useStandardAlertMessage": false,
        "yAxis": 0,
        "yMax": null,
        "yMin": null,
        "yZero": true
      },
      {
        "autoGenLine": true,
        "chartField": 0,
        "codeName": "",
        "columnName": "ZoneAmps5",
        "custom": "",
        "customUnits": "",
        "degree": 0,
        "dynamicLineType": 15,
        "fillColor": "rgba(255,1,1,0.996078431372549)",
        "fillDiameter": 0,
        "fitMode": 0,
        "format": "",
        "function": 0,
        "hardwareKey": "H38212",
        "index": 5,
        "isDisabled": false,
        "isOverview": false,
        "layer": 0,
        "line": 14,
        "lineColor": "rgba(255,1,1,0.996078431372549)",
        "lineWidth": 2,
        "linkedUnits": 0,
        "name": "SA1_ZoneAmps5",
        "nameOverride": true,
        "outputBin": -1,
        "resultName": "",
        "siteKey": "S34924",
        "source": "SA1_ZoneAmps5 / 108",
        "title": "2.5 (108 strings)",
        "units": 0,
        "useStandardAlertMessage": false,
        "yAxis": 0,
        "yMax": null,
        "yMin": null,
        "yZero": true
      },
      {
        "autoGenLine": true,
        "chartField": 0,
        "codeName": "",
        "columnName": "ZoneAmps6",
        "custom": "",
        "customUnits": "",
        "degree": 0,
        "dynamicLineType": 15,
        "fillColor": "rgba(255,1,1,0.996078431372549)",
        "fillDiameter": 0,
        "fitMode": 0,
        "format": "",
        "function": 0,
        "hardwareKey": "H38212",
        "index": 6,
        "isDisabled": false,
        "isOverview": false,
        "layer": 0,
        "line": 14,
        "lineColor": "rgba(255,1,1,0.996078431372549)",
        "lineWidth": 2,
        "linkedUnits": 0,
        "name": "SA1_ZoneAmps6",
        "nameOverride": true,
        "outputBin": -1,
        "resultName": "",
        "siteKey": "S34924",
        "source": "SA1_ZoneAmps6 / 96",
        "title": "2.6 (96 strings)",
        "units": 0,
        "useStandardAlertMessage": false,
        "yAxis": 0,
        "yMax": null,
        "yMin": null,
        "yZero": true
      },
      {
        "autoGenLine": true,
        "chartField": 0,
        "codeName": "",
        "columnName": "ZoneAmps7",
        "custom": "",
        "customUnits": "",
        "degree": 0,
        "dynamicLineType": 15,
        "fillColor": "rgba(255,1,1,0.996078431372549)",
        "fillDiameter": 0,
        "fitMode": 0,
        "format": "",
        "function": 0,
        "hardwareKey": "H38212",
        "index": 7,
        "isDisabled": false,
        "isOverview": false,
        "layer": 0,
        "line": 14,
        "lineColor": "rgba(255,1,1,0.996078431372549)",
        "lineWidth": 2,
        "linkedUnits": 0,
        "name": "SA1_ZoneAmps7",
        "nameOverride": true,
        "outputBin": -1,
        "resultName": "",
        "siteKey": "S34924",
        "source": "SA1_ZoneAmps7 / 108",
        "title": "2.7 (108 strings)",
        "units": 0,
        "useStandardAlertMessage": false,
        "yAxis": 0,
        "yMax": null,
        "yMin": null,
        "yZero": true
      },
      {
        "autoGenLine": true,
        "chartField": 0,
        "codeName": "",
        "columnName": "ZoneAmps8",
        "custom": "",
        "customUnits": "",
        "degree": 0,
        "dynamicLineType": 15,
        "fillColor": "rgba(255,1,1,0.996078431372549)",
        "fillDiameter": 0,
        "fitMode": 0,
        "format": "",
        "function": 0,
        "hardwareKey": "H38212",
        "index": 8,
        "isDisabled": false,
        "isOverview": false,
        "layer": 0,
        "line": 14,
        "lineColor": "rgba(255,1,1,0.996078431372549)",
        "lineWidth": 2,
        "linkedUnits": 0,
        "name": "SA1_ZoneAmps8",
        "nameOverride": true,
        "outputBin": -1,
        "resultName": "",
        "siteKey": "S34924",
        "source": "SA1_ZoneAmps8 / 102",
        "title": "2.8 (102 strings)",
        "units": 0,
        "useStandardAlertMessage": false,
        "yAxis": 0,
        "yMax": null,
        "yMin": null,
        "yZero": true
      },
      {
        "autoGenLine": true,
        "chartField": 0,
        "codeName": "",
        "columnName": "ZoneAmps9",
        "custom": "",
        "customUnits": "",
        "degree": 0,
        "dynamicLineType": 15,
        "fillColor": "rgba(255,1,1,0.996078431372549)",
        "fillDiameter": 0,
        "fitMode": 0,
        "format": "",
        "function": 0,
        "hardwareKey": "H38212",
        "index": 9,
        "isDisabled": false,
        "isOverview": false,
        "layer": 0,
        "line": 0,
        "lineColor": "rgba(255,1,1,0.996078431372549)",
        "lineWidth": 2,
        "linkedUnits": 0,
        "name": "SA1_ZoneAmps9",
        "nameOverride": true,
        "outputBin": -1,
        "resultName": "",
        "siteKey": "S34924",
        "source": "SA1_ZoneAmps9 / 108",
        "title": "2.9 (108 strings)",
        "units": 0,
        "useStandardAlertMessage": false,
        "yAxis": 0,
        "yMax": null,
        "yMin": null,
        "yZero": true
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
        "fillDiameter": 0,
        "fitMode": 0,
        "format": "",
        "function": 0,
        "hardwareKey": "H38123",
        "index": 10,
        "isDisabled": false,
        "isOverview": false,
        "layer": 0,
        "line": 0,
        "lineColor": "rgba(255,1,1,0.996078431372549)",
        "lineWidth": 2,
        "linkedUnits": 0,
        "name": "Sun2",
        "nameOverride": true,
        "outputBin": -1,
        "resultName": "",
        "siteKey": "S34924",
        "source": "",
        "title": "IMT Reference Cell",
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
        "fillDiameter": 0,
        "fitMode": 0,
        "format": "",
        "function": 6,
        "hardwareKey": "H38123",
        "index": 11,
        "isDisabled": false,
        "isOverview": false,
        "layer": 0,
        "line": 0,
        "lineColor": "rgba(255,1,1,0.996078431372549)",
        "lineWidth": 2,
        "linkedUnits": 0,
        "name": "Sun2M",
        "nameOverride": true,
        "outputBin": -1,
        "resultName": "",
        "siteKey": "S34924",
        "source": "",
        "title": "IMT Reference Cell",
        "units": 58,
        "useStandardAlertMessage": false,
        "yAxis": 1,
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
        "format": "{0:0.0} %",
        "function": 0,
        "hardwareKey": "",
        "index": 12,
        "isDisabled": false,
        "isOverview": false,
        "layer": 0,
        "line": 0,
        "lineColor": "rgba(255,1,1,0.996078431372549)",
        "lineWidth": 1,
        "linkedUnits": 0,
        "name": "Variance1",
        "nameOverride": true,
        "outputBin": -1,
        "resultName": "",
        "siteKey": "",
        "source": "100 * Sun2M.Value / Sun2M.ModelSun(\"None\", 1) - 100",
        "title": "Variance",
        "units": 56,
        "useStandardAlertMessage": false,
        "yAxis": 0,
        "yMax": null,
        "yMin": 0,
        "yZero": false
      }
    ],
    "dataNotRequired": false,
    "description": "",
    "eveningSkip": 0,
    "fillGaps": false,
    "foregroundColor": "",
    "futureDays": 0,
    "hasChart": true,
    "hideLegend": false,
    "hideMenu": false,
    "hideTools": false,
    "initialSpan": 0,
    "isOverview": false,
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
        "chartType": 5,
        "index": 0,
        "name": "SunMode",
        "type": 0,
        "value": "Sensor"
      },
      {
        "chartType": 18,
        "index": 1,
        "name": "Normalize",
        "type": 16,
        "value": false
      },
      {
        "chartType": 19,
        "index": 2,
        "name": "NightZero",
        "type": 16,
        "value": false
      }
    ],
    "parentKey": "",
    "plotType": 0,
    "preChart": "",
    "preprocess": "if (BinDay()) {\r}",
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
        "Watt hours/meter²",
        "Amps",
        "Watts/meter²",
        "Percent"
      ],
      "whenAvgSource": false
    },
    "refreshRate": 0,
    "separateTime": false,
    "seriesLimit": 0,
    "showEvents": true,
    "showTable": false,
    "sort": 0,
    "spanFrom": "2024-09-03",
    "spanTo": "2024-09-04",
    "subtitle": "",
    "summary": "AddResultRow(\"Bentek Combiner 2\");\r\nAddResultRow(\"1.000 amps/string (average)\");\r\nAddResultRow(\"Sun elevation: 52.1, azimuth: 148.5\");\r\nAddResultRow(\"\");\r\nAddResultRow(\"2.5 (ZoneAmps5) below limit (0.003 amps/string, 0.3% of average)\");\r\nAddResultRow(\"\");\r\nAddResultRow(\"Resolved: Bentek Combiner 2\");\r\nAddResultRow(\"1.292 amps/string (average)\");\r\nAddResultRow(\"Sun elevation: 56.1, azimuth: 179.5\");\r\nAddResultRow(\"\");\r\nAddResultRow(\"Resolved: Bentek Combiner 2\");\r\nAddResultRow(\"1.320 amps/string (average)\");\r\nAddResultRow(\"Sun elevation: 55.8, azimuth: 189.0\");\r\nFormatResults(\"{0}\");\r\n",
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
        "binSize": 1440,
        "chartType": 0,
        "indexMap": 3,
        "outBinSize": 0,
        "outFunc": 0
      },
      {
        "binSize": 10080,
        "chartType": 0,
        "indexMap": 4,
        "outBinSize": 0,
        "outFunc": 0
      }
    ],
    "timeStampAdjust": null,
    "timeZone": 0,
    "timeZoneOverride": false,
    "title": "Bentek Combiner 2",
    "titleFontSize": 0,
    "ts": null,
    "upperLimit": 0,
    "upperLimitColor": "",
    "useRaw": false,
    "validDataDate": null,
    "xTitle": ""
  },
  "reminder": false,
  "resolvedTime": "2024-09-03T17:34:28Z",
  "severity": 0,
  "siteKey": "S34924",
  "start": "2024-09-03T15:40:49Z",
  "systemSize": "NaN",
  "systemSizeDc": 0,
  "trackLoss": false,
  "triggerTime": "2024-09-03T16:13:02Z",
  "ts": "2024-09-03T17:34:28Z",
  "tz": "US/Eastern"
}
```

[Return to top](#top)

