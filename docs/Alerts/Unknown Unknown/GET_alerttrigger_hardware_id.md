<a id="top"></a>
# /api/alerttrigger/{hardware_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200, 200  

## Table of Contents

- [Alert Type: General](#alert-type-general)
- [Example](#example)

## Alert Type: General

```json
{
  "type": "object",
  "properties": {
    "assetCode": {
      "type": "number"
    },
    "calculatedCapacity": {
      "type": "number"
    },
    "capacity": {
      "type": "object",
      "properties": {}
    },
    "defaultTriggers": {
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
GET /api/alerttrigger/H504132?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H504132/administration/alertsettings
```

**Response:**

```json
{
  "assetCode": 11,
  "calculatedCapacity": 0,
  "capacity": null,
  "defaultTriggers": [
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
      "lastChanged": "2025-12-23T01:13:04Z",
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
      "parentKey": "H504132",
      "priorityLevel": 0,
      "sharing": 0,
      "startTime": 0,
      "sunMaxAzimuth": 0,
      "sunMinAzimuth": 0,
      "sunMinElevation": 0
    },
    {
      "alertTypeKey": "AI534",
      "checkNoSnow": false,
      "checkSun": false,
      "checkTime": false,
      "delayHoursResolve": 0,
      "delayHoursTrigger": 0,
      "description": "Transformer Monitor 5 conditions for Normally Closed",
      "endTime": 0,
      "hasImpact": false,
      "id": 0,
      "impact": 0,
      "isActive": false,
      "key": "",
      "lastChanged": "2025-12-23T01:13:04Z",
      "name": "Transformer Monitor",
      "ownerKey": "",
      "parameters": [],
      "parentKey": "H504132",
      "priorityLevel": 0,
      "sharing": 0,
      "startTime": 0,
      "sunMaxAzimuth": 0,
      "sunMinAzimuth": 0,
      "sunMinElevation": 0
    }
  ],
  "key": "H504132",
  "lastChanged": "2025-12-23T01:13:04Z",
  "triggers": [
    {
      "alertTypeKey": "AI250",
      "checkNoSnow": false,
      "checkSun": false,
      "checkTime": false,
      "delayHoursResolve": 0,
      "delayHoursTrigger": 0.25,
      "description": "Detects when a device is not talking to the data logger, or invalid data is received from the device.",
      "endTime": 0,
      "hasImpact": false,
      "id": 1613051,
      "impact": 0,
      "isActive": true,
      "key": "x2d189cfb",
      "lastChanged": "2025-12-23T01:13:04Z",
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
      "parentKey": "H504132",
      "priorityLevel": 0,
      "sharing": 0,
      "startTime": 0,
      "sunMaxAzimuth": 0,
      "sunMinAzimuth": 0,
      "sunMinElevation": 0
    },
    {
      "alertTypeKey": "AI534",
      "checkNoSnow": false,
      "checkSun": false,
      "checkTime": false,
      "delayHoursResolve": 0,
      "delayHoursTrigger": 0,
      "description": "Transformer Monitor 5 conditions for Normally Closed",
      "endTime": 0,
      "hasImpact": false,
      "id": 1613052,
      "impact": 0,
      "isActive": true,
      "key": "x2d189cfc",
      "lastChanged": "2025-12-23T01:13:04Z",
      "name": "Transformer Monitor",
      "ownerKey": "",
      "parameters": [],
      "parentKey": "H504132",
      "priorityLevel": 0,
      "sharing": 0,
      "startTime": 0,
      "sunMaxAzimuth": 0,
      "sunMinAzimuth": 0,
      "sunMinElevation": 0
    }
  ]
}
```

[Return to top](#top)

