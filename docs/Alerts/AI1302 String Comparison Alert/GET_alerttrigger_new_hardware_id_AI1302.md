<a id="top"></a>
# /api/alerttrigger/new/{hardware_id}/AI1302

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [Alert Type: AI1302](#alert-type-ai1302)
- [Example](#example)

## Alert Type: AI1302

```json
{
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
          "type": "string"
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
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/alerttrigger/new/H511568/AI1302
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H511568/administration/alertsettings
```

**Response:**

```json
{
  "alertTypeKey": "AI1302",
  "checkNoSnow": false,
  "checkSun": false,
  "checkTime": false,
  "delayHoursResolve": 0,
  "delayHoursTrigger": 0,
  "description": "Generate an alert for how a register string compares to a user-defined string",
  "endTime": 1380,
  "hasImpact": false,
  "id": 0,
  "impact": 0,
  "isActive": true,
  "key": "",
  "lastChanged": "2026-01-07T19:05:55Z",
  "name": "String Comparison Alert",
  "ownerKey": "",
  "parameters": [
    {
      "index": 0,
      "info": "Name of register you need to compare (NOT Data Name)",
      "name": "Register",
      "readOnly": false,
      "source": 2,
      "type": 0,
      "value": "Register Name"
    },
    {
      "index": 0,
      "info": "Compare Register text to this string\rChoose == , !=",
      "name": "Function",
      "readOnly": false,
      "source": 2,
      "type": 0,
      "value": "=="
    },
    {
      "index": 0,
      "info": "",
      "name": "Defined String",
      "readOnly": false,
      "source": 2,
      "type": 0,
      "value": ""
    },
    {
      "index": 0,
      "info": "Message to be included in the alert notification",
      "name": "Message",
      "readOnly": false,
      "source": 2,
      "type": 0,
      "value": "Do this"
    }
  ],
  "parentKey": "H511568",
  "priorityLevel": 0,
  "sharing": 0,
  "startTime": 60,
  "sunMaxAzimuth": 270,
  "sunMinAzimuth": 90,
  "sunMinElevation": 5
}
```

[Return to top](#top)

