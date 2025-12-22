# /api/alerttriggers

[← Back to Index](../logs.md)

**Methods:** POST  
**Status Codes:** 200  

## Table of Contents

- [Payload Structure](#payload-structure)
- [Response Structure](#response-structure)
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

[Return to top](#apialerttriggers)

## Response Structure

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

[Return to top](#apialerttriggers)

## Example

**Request:**

```http
POST /api/alerttriggers
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H511568/administration/alertsettings
```

**Payload:**

```json
[
  {
    "alertTypeKey": "AI250",
    "checkNoSnow": false,
    "checkSun": false,
    "checkTime": false,
    "delayHoursResolve": 0,
    "delayHoursTrigger": 0,
    "description": "Detects when a device is not talking to the data logger, or invalid data is received from the device.",
    "endTime": 0,
    "hasImpact": false,
    "id": 0,
    "impact": 0,
    "isActive": false,
    "key": "",
    "lastChanged": "2025-12-22T22:05:32Z",
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
    "priorityLevel": 0,
    "sharing": 0,
    "startTime": 0,
    "sunMaxAzimuth": 0,
    "sunMinAzimuth": 0,
    "sunMinElevation": 0
  }
]
```

**Response:**

```json
[
  {
    "alertTypeKey": "AI250",
    "checkNoSnow": false,
    "checkSun": false,
    "checkTime": false,
    "delayHoursResolve": 0,
    "delayHoursTrigger": 0,
    "description": "Detects when a device is not talking to the data logger, or invalid data is received from the device.",
    "endTime": 0,
    "hasImpact": false,
    "id": 1848049,
    "impact": 0,
    "isActive": false,
    "key": "x2d1c32f1",
    "lastChanged": "2025-12-22T22:05:47Z",
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
    "priorityLevel": 0,
    "sharing": 0,
    "startTime": 0,
    "sunMaxAzimuth": 0,
    "sunMinAzimuth": 0,
    "sunMinElevation": 0
  }
]
```

[Return to top](#apialerttriggers)

