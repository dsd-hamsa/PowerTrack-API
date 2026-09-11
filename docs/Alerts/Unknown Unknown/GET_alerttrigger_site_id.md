<a id="top"></a>
# /api/alerttrigger/{site_id}

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
    "assetCode": {
      "type": "object",
      "properties": {}
    },
    "calculatedCapacity": {
      "type": "number"
    },
    "capacity": {
      "type": "object",
      "properties": {}
    },
    "defaultTriggers": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "key": {
      "type": "string"
    },
    "lastChanged": {
      "type": "string"
    },
    "triggers": {
      "type": "object",
      "properties": {
        "alertTypeKey": {
          "type": "string"
        },
        "checkNoSnow": {
          "type": "boolean"
        },
        "checkSun": {
          "type": "boolean"
        },
        "checkTime": {
          "type": "boolean"
        },
        "delayHoursResolve": {
          "type": "number"
        },
        "delayHoursTrigger": {
          "type": "number"
        },
        "description": {
          "type": "string"
        },
        "endTime": {
          "type": "number"
        },
        "hasImpact": {
          "type": "boolean"
        },
        "id": {
          "type": "number"
        },
        "impact": {
          "type": "number"
        },
        "isActive": {
          "type": "boolean"
        },
        "key": {
          "type": "string"
        },
        "lastChanged": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "ownerKey": {
          "type": "string"
        },
        "parameters": {
          "type": "object",
          "properties": {
            "index": {
              "type": "number"
            },
            "info": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "readOnly": {
              "type": "boolean"
            },
            "source": {
              "type": "number"
            },
            "type": {
              "type": "number"
            },
            "value": {
              "type": "number"
            }
          }
        },
        "parentKey": {
          "type": "string"
        },
        "priorityLevel": {
          "type": "number"
        },
        "sharing": {
          "type": "number"
        },
        "standardItems": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        },
        "startTime": {
          "type": "number"
        },
        "sunMaxAzimuth": {
          "type": "number"
        },
        "sunMinAzimuth": {
          "type": "number"
        },
        "sunMinElevation": {
          "type": "number"
        }
      }
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/alerttrigger/S52104?lastChanged=2026-06-24T16:02:09Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 3fefeb
referer: https://apps.alsoenergy.com/powertrack/S52104/administration/alertsettings
```

**Response:**

```json
{
  "assetCode": null,
  "calculatedCapacity": -1,
  "capacity": null,
  "defaultTriggers": [],
  "key": "S52104",
  "lastChanged": "2026-01-27T00:22:42Z",
  "triggers": [
    {
      "alertTypeKey": "AI359",
      "checkNoSnow": false,
      "checkSun": false,
      "checkTime": false,
      "delayHoursResolve": 0,
      "delayHoursTrigger": 0,
      "description": "Analyzes site configuration and data for a report",
      "endTime": 1380,
      "hasImpact": false,
      "id": 1049304,
      "impact": 0,
      "isActive": true,
      "key": "x2d1002d8",
      "lastChanged": "2026-01-27T00:22:42Z",
      "name": "Report analysis alert",
      "ownerKey": "",
      "parameters": [
        {
          "index": 0,
          "info": "Report ID",
          "name": "RID",
          "readOnly": false,
          "source": 3,
          "type": 1,
          "value": 0
        },
        {
          "index": 0,
          "info": "Hardware ID",
          "name": "HID",
          "readOnly": false,
          "source": 3,
          "type": 1,
          "value": 0
        },
        {
          "index": 0,
          "info": "Maximum kWh difference between data points",
          "name": "MaxKWH",
          "readOnly": false,
          "source": 3,
          "type": 0,
          "value": "1750"
        },
        {
          "index": 0,
          "info": "Maximum number of minutes between data points",
          "name": "MaxGAP",
          "readOnly": false,
          "source": 3,
          "type": 0,
          "value": "1440"
        },
        {
          "index": 0,
          "info": "Meter serial numbers",
          "name": "Serial",
          "readOnly": false,
          "source": 3,
          "type": 0,
          "value": "3241585398,31,31À¨,)"
        },
        {
          "index": 0,
          "info": "Maximum kWh difference between data points during nightime hours",
          "name": "MaxNighttime",
          "readOnly": false,
          "source": 3,
          "type": 0,
          "value": "15"
        },
        {
          "index": 0,
          "info": "",
          "name": "MinNegative",
          "readOnly": false,
          "source": 3,
          "type": 0,
          "value": "NaN"
        }
      ],
      "parentKey": "S52104",
      "priorityLevel": 0,
      "sharing": 0,
      "standardItems": [],
      "startTime": 60,
      "sunMaxAzimuth": 0,
      "sunMinAzimuth": 0,
      "sunMinElevation": 0
    },
    {
      "alertTypeKey": "AI358",
      "checkNoSnow": false,
      "checkSun": false,
      "checkTime": false,
      "delayHoursResolve": 0,
      "delayHoursTrigger": 0,
      "description": "Alerts that are generated while running a report.",
      "endTime": 1380,
      "hasImpact": false,
      "id": 1049305,
      "impact": 0,
      "isActive": true,
      "key": "x2d1002d9",
      "lastChanged": "2026-01-27T00:22:42Z",
      "name": "Report run-time alert",
      "ownerKey": "",
      "parameters": [
        {
          "index": 0,
          "info": "",
          "name": "OK",
          "readOnly": false,
          "source": 3,
          "type": 1,
          "value": 0
        },
        {
          "index": 0,
          "info": "",
          "name": "Cause",
          "readOnly": false,
          "source": 3,
          "type": 0,
          "value": ""
        }
      ],
      "parentKey": "S52104",
      "priorityLevel": 0,
      "sharing": 0,
      "standardItems": [],
      "startTime": 60,
      "sunMaxAzimuth": 0,
      "sunMinAzimuth": 0,
      "sunMinElevation": 0
    }
  ]
}
```

[Return to top](#top)

