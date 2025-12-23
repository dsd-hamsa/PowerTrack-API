<a id="top"></a>
# /api/alerttrigger/{alert_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [Alert Type: AI250](#alert-type-ai250)
- [Example](#example)

## Alert Type: AI250

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
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/alerttrigger/x2d1806fd?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: e4dcd1
referer: https://apps.alsoenergy.com/powertrack/H488308/administration/alertsettings
```

**Response:**

```json
{
  "alertTypeKey": "AI250",
  "checkNoSnow": true,
  "checkSun": true,
  "checkTime": false,
  "delayHoursResolve": 0.5,
  "delayHoursTrigger": 0.5,
  "description": "Detects when a device is not talking to the data logger, or invalid data is received from the device.",
  "endTime": 0,
  "hasImpact": false,
  "id": 1574653,
  "impact": 0,
  "isActive": true,
  "key": "x2d1806fd",
  "lastChanged": "2024-10-30T03:32:46Z",
  "name": "Device communication",
  "ownerKey": "",
  "parameters": [
    {
      "index": 0,
      "info": "Ignore invalid data",
      "name": "IgnoreInvalidData",
      "readOnly": true,
      "source": 2,
      "type": 7,
      "value": 0
    }
  ],
  "parentKey": "H488308",
  "priorityLevel": 0,
  "sharing": 0,
  "startTime": 0,
  "sunMaxAzimuth": 0,
  "sunMinAzimuth": 0,
  "sunMinElevation": 10
}
```

[Return to top](#top)

