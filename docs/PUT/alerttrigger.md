# /api/alerttrigger

[← Back to Index](../logs.md)

**Methods:** PUT  
**Status Codes:** 200  

## Table of Contents

- [Payload Structure](#payload-structure)
- [Alert Type: AI250](#alert-type-ai250)
- [Example](#example)

## Payload Structure

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

[Return to top](#apialerttrigger)

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

[Return to top](#apialerttrigger)

## Example

**Request:**

```http
PUT /api/alerttrigger
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H511568/administration/alertsettings
```

**Payload:**

```json
{
  "alertTypeKey": "AI250",
  "checkNoSnow": true,
  "checkSun": true,
  "checkTime": false,
  "delayHoursResolve": 0.5,
  "delayHoursTrigger": 1,
  "description": "Detects when a device is not talking to the data logger, or invalid data is received from the device.",
  "endTime": 0,
  "hasImpact": false,
  "id": 1632245,
  "impact": 0,
  "isActive": true,
  "key": "x2d18e7f5",
  "lastChanged": "2025-12-22T19:21:53Z",
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
  "parentKey": "H511568",
  "priorityLevel": -1,
  "sharing": 0,
  "startTime": 0,
  "sunMaxAzimuth": 0,
  "sunMinAzimuth": 0,
  "sunMinElevation": 15
}
```

**Response:**

```json
{
  "alertTypeKey": "AI250",
  "checkNoSnow": true,
  "checkSun": true,
  "checkTime": false,
  "delayHoursResolve": 0.5,
  "delayHoursTrigger": 1,
  "description": "Detects when a device is not talking to the data logger, or invalid data is received from the device.",
  "endTime": 0,
  "hasImpact": false,
  "id": 1632245,
  "impact": 0,
  "isActive": true,
  "key": "x2d18e7f5",
  "lastChanged": "2025-12-22T22:05:23Z",
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
  "parentKey": "H511568",
  "priorityLevel": -1,
  "sharing": 0,
  "startTime": 0,
  "sunMaxAzimuth": 0,
  "sunMinAzimuth": 0,
  "sunMinElevation": 15
}
```

[Return to top](#apialerttrigger)

