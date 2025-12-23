<a id="top"></a>
# /api/alerttrigger/{alert_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200, 200  

## Table of Contents

- [Alert Type: AI1188](#alert-type-ai1188)
- [Example](#example)

## Alert Type: AI1188

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
GET /api/alerttrigger/x2d1c325f?lastChanged=1900-01-01T00:00:00.000Z
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/S64641/administration/alertsettings?tab=alerttriggers
```

**Response:**

```json
{
  "key": "x2d1c325f",
  "lastChanged": "2025-12-23T16:20:17Z",
  "id": 1847903,
  "alertTypeKey": "AI1188",
  "parentKey": "S64641",
  "name": "Inverter Energy Ratio",
  "description": "Check the Energy Ratio over the last 24 hours each inverter",
  "isActive": true,
  "priorityLevel": 2,
  "checkSun": true,
  "checkTime": false,
  "checkNoSnow": true,
  "hasImpact": true,
  "impact": 0,
  "delayHoursTrigger": 0,
  "delayHoursResolve": 2,
  "startTime": 60,
  "endTime": 1380,
  "sunMinElevation": 10,
  "sunMinAzimuth": 90,
  "sunMaxAzimuth": 270,
  "parameters": [
    {
      "source": 3,
      "info": "Low energy ratio limit",
      "readOnly": false,
      "index": 0,
      "name": "LowLimit",
      "value": 0.85,
      "type": 2
    },
    {
      "source": 3,
      "info": "High energy ratio limit",
      "readOnly": false,
      "index": 0,
      "name": "HighLimit",
      "value": 1.9,
      "type": 2
    }
  ],
  "ownerKey": "",
  "sharing": 0
}
```

[Return to top](#top)

