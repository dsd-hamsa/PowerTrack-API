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
GET /api/alerttrigger/S64641?lastChanged=2025-12-23T01:13:04Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/S64641/administration/alertsettings?tab=alerttriggers
```

**Response:**

```json
{
  "assetCode": null,
  "calculatedCapacity": -1,
  "capacity": null,
  "defaultTriggers": [],
  "key": "S64641",
  "lastChanged": "2025-12-22T19:59:46Z",
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
      "id": 1623423,
      "impact": 0,
      "isActive": true,
      "key": "x2d18c57f",
      "lastChanged": "2025-12-22T19:59:46Z",
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
          "value": "219"
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
          "value": "24568"
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
      "parentKey": "S64641",
      "priorityLevel": 0,
      "sharing": 0,
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
      "id": 1623424,
      "impact": 0,
      "isActive": true,
      "key": "x2d18c580",
      "lastChanged": "2025-12-22T19:59:46Z",
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
      "parentKey": "S64641",
      "priorityLevel": 0,
      "sharing": 0,
      "startTime": 60,
      "sunMaxAzimuth": 0,
      "sunMinAzimuth": 0,
      "sunMinElevation": 0
    },
    {
      "alertTypeKey": "AI1188",
      "checkNoSnow": false,
      "checkSun": true,
      "checkTime": false,
      "delayHoursResolve": 2,
      "delayHoursTrigger": 0,
      "description": "Check the Energy Ratio over the last 24 hours each inverter",
      "endTime": 1380,
      "hasImpact": true,
      "id": 1847903,
      "impact": 0,
      "isActive": true,
      "key": "x2d1c325f",
      "lastChanged": "2025-12-22T19:59:46Z",
      "name": "Inverter Energy Ratio",
      "ownerKey": "",
      "parameters": [
        {
          "index": 0,
          "info": "Low energy ratio limit",
          "name": "LowLimit",
          "readOnly": false,
          "source": 3,
          "type": 2,
          "value": 0.85
        },
        {
          "index": 0,
          "info": "High energy ratio limit",
          "name": "HighLimit",
          "readOnly": false,
          "source": 3,
          "type": 2,
          "value": 1.9
        }
      ],
      "parentKey": "S64641",
      "priorityLevel": 2,
      "sharing": 0,
      "startTime": 60,
      "sunMaxAzimuth": 270,
      "sunMinAzimuth": 90,
      "sunMinElevation": 10
    },
    {
      "alertTypeKey": "AI401",
      "checkNoSnow": false,
      "checkSun": false,
      "checkTime": true,
      "delayHoursResolve": 0.5,
      "delayHoursTrigger": 1,
      "description": "Generates an alert if the average site performance index over the last 24 hours is below the specified limit.",
      "endTime": 240,
      "hasImpact": true,
      "id": 1847933,
      "impact": 0,
      "isActive": true,
      "key": "x2d1c327d",
      "lastChanged": "2025-12-22T19:59:46Z",
      "name": "Performance Index Alert",
      "ownerKey": "",
      "parameters": [
        {
          "index": 0,
          "info": "Generate an alert if the Site Performance Index falls below this level.",
          "name": "Limit",
          "readOnly": false,
          "source": 3,
          "type": 3,
          "value": 0.797752808988765
        }
      ],
      "parentKey": "S64641",
      "priorityLevel": 0,
      "sharing": 0,
      "startTime": 420,
      "sunMaxAzimuth": 0,
      "sunMinAzimuth": 0,
      "sunMinElevation": 0
    }
  ]
}
```

[Return to top](#top)

