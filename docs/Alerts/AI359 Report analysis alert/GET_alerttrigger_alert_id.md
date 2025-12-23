<a id="top"></a>
# /api/alerttrigger/{alert_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [Alert Type: AI359](#alert-type-ai359)
- [Example](#example)

## Alert Type: AI359

```json
{
  "type": "object",
  "properties": {
    "key": {
      "type": "string"
    },
    "lastChanged": {
      "type": "string"
    },
    "id": {
      "type": "number"
    },
    "alertTypeKey": {
      "type": "string"
    },
    "parentKey": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "isActive": {
      "type": "boolean"
    },
    "priorityLevel": {
      "type": "number"
    },
    "checkSun": {
      "type": "boolean"
    },
    "checkTime": {
      "type": "boolean"
    },
    "checkNoSnow": {
      "type": "boolean"
    },
    "hasImpact": {
      "type": "boolean"
    },
    "impact": {
      "type": "number"
    },
    "delayHoursTrigger": {
      "type": "number"
    },
    "delayHoursResolve": {
      "type": "number"
    },
    "startTime": {
      "type": "number"
    },
    "endTime": {
      "type": "number"
    },
    "sunMinElevation": {
      "type": "number"
    },
    "sunMinAzimuth": {
      "type": "number"
    },
    "sunMaxAzimuth": {
      "type": "number"
    },
    "parameters": {
      "type": "object",
      "properties": {
        "source": {
          "type": "number"
        },
        "info": {
          "type": "string"
        },
        "readOnly": {
          "type": "boolean"
        },
        "index": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "value": {
          "type": "number"
        },
        "type": {
          "type": "number"
        }
      }
    },
    "ownerKey": {
      "type": "string"
    },
    "sharing": {
      "type": "number"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/alerttrigger/x2d18c57f?lastChanged=1900-01-01T00:00:00.000Z
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/S64641/administration/alertsettings?tab=alerttriggers
```

**Response:**

```json
{
  "key": "x2d18c57f",
  "lastChanged": "2025-12-23T16:21:22Z",
  "id": 1623423,
  "alertTypeKey": "AI359",
  "parentKey": "S64641",
  "name": "Report analysis alert",
  "description": "Analyzes site configuration and data for a report",
  "isActive": true,
  "priorityLevel": 0,
  "checkSun": false,
  "checkTime": false,
  "checkNoSnow": false,
  "hasImpact": false,
  "impact": 0,
  "delayHoursTrigger": 0,
  "delayHoursResolve": 0,
  "startTime": 60,
  "endTime": 1380,
  "sunMinElevation": 0,
  "sunMinAzimuth": 0,
  "sunMaxAzimuth": 0,
  "parameters": [
    {
      "source": 3,
      "info": "Report ID",
      "readOnly": false,
      "index": 0,
      "name": "RID",
      "value": 0,
      "type": 1
    },
    {
      "source": 3,
      "info": "Hardware ID",
      "readOnly": false,
      "index": 0,
      "name": "HID",
      "value": 0,
      "type": 1
    },
    {
      "source": 3,
      "info": "Maximum kWh difference between data points",
      "readOnly": false,
      "index": 0,
      "name": "MaxKWH",
      "value": "219",
      "type": 0
    },
    {
      "source": 3,
      "info": "Maximum number of minutes between data points",
      "readOnly": false,
      "index": 0,
      "name": "MaxGAP",
      "value": "1440",
      "type": 0
    },
    {
      "source": 3,
      "info": "Meter serial numbers",
      "readOnly": false,
      "index": 0,
      "name": "Serial",
      "value": "24568",
      "type": 0
    },
    {
      "source": 3,
      "info": "Maximum kWh difference between data points during nightime hours",
      "readOnly": false,
      "index": 0,
      "name": "MaxNighttime",
      "value": "15",
      "type": 0
    },
    {
      "source": 3,
      "info": "",
      "readOnly": false,
      "index": 0,
      "name": "MinNegative",
      "value": "NaN",
      "type": 0
    }
  ],
  "ownerKey": "",
  "sharing": 0
}
```

[Return to top](#top)

