<a id="top"></a>
# /api/alerttrigger/{alert_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [Alert Type: AI401](#alert-type-ai401)
- [Example](#example)

## Alert Type: AI401

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
GET /api/alerttrigger/x2d1c327d?lastChanged=1900-01-01T00:00:00.000Z
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/S64641/administration/alertsettings?tab=alerttriggers
```

**Response:**

```json
{
  "key": "x2d1c327d",
  "lastChanged": "2025-12-23T16:20:17Z",
  "id": 1847933,
  "alertTypeKey": "AI401",
  "parentKey": "S64641",
  "name": "Performance Index Alert",
  "description": "Generates an alert if the average site performance index over the last 24 hours is below the specified limit.",
  "isActive": true,
  "priorityLevel": 0,
  "checkSun": false,
  "checkTime": true,
  "checkNoSnow": false,
  "hasImpact": true,
  "impact": 0,
  "delayHoursTrigger": 1,
  "delayHoursResolve": 0.5,
  "startTime": 420,
  "endTime": 240,
  "sunMinElevation": 0,
  "sunMinAzimuth": 0,
  "sunMaxAzimuth": 0,
  "parameters": [
    {
      "source": 3,
      "info": "Generate an alert if the Site Performance Index falls below this level.",
      "readOnly": false,
      "index": 0,
      "name": "Limit",
      "value": 0.797752808988765,
      "type": 3
    }
  ],
  "ownerKey": "",
  "sharing": 0
}
```

[Return to top](#top)

