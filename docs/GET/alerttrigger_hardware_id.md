<a id="top"></a>
# /api/alerttrigger/{hardware_id}

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
    "key": {
      "type": "string"
    },
    "lastChanged": {
      "type": "string"
    },
    "assetCode": {
      "type": "number"
    },
    "calculatedCapacity": {
      "type": "number"
    },
    "capacity": {
      "type": "number"
    },
    "defaultTriggers": {
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
    },
    "triggers": {
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
          "type": "array",
          "items": {
            "type": "unknown"
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
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/alerttrigger/H511568?lastChanged=2025-12-22T22:06:35Z
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/H511568/administration/config
```

**Response:**

```json
{
  "key": "H511568",
  "lastChanged": "2025-12-22T22:06:35Z",
  "assetCode": 1,
  "calculatedCapacity": 63,
  "capacity": 63,
  "defaultTriggers": [
    {
      "key": "",
      "lastChanged": "2025-12-22T22:06:35Z",
      "id": 0,
      "alertTypeKey": "AI250",
      "parentKey": "H511568",
      "name": "Device communication",
      "description": "Detects when a device is not talking to the data logger, or invalid data is received from the device.",
      "isActive": false,
      "priorityLevel": 0,
      "checkSun": false,
      "checkTime": false,
      "checkNoSnow": false,
      "hasImpact": false,
      "impact": 0,
      "delayHoursTrigger": 0,
      "delayHoursResolve": 0,
      "startTime": 0,
      "endTime": 0,
      "sunMinElevation": 0,
      "sunMinAzimuth": 0,
      "sunMaxAzimuth": 0,
      "parameters": [
        {
          "source": 2,
          "info": "Ignore invalid data",
          "readOnly": true,
          "index": 0,
          "name": "IgnoreInvalidData",
          "value": 0,
          "type": 7
        }
      ],
      "ownerKey": "",
      "sharing": 0
    },
    {
      "key": "",
      "lastChanged": "2025-12-22T22:06:35Z",
      "id": 0,
      "alertTypeKey": "AI862",
      "parentKey": "H511568",
      "name": "SMA STP/TriPower Fault Alert",
      "description": "SMA TriPower Fault Alert following the SMA Event Messages Document.",
      "isActive": false,
      "priorityLevel": 0,
      "checkSun": false,
      "checkTime": false,
      "checkNoSnow": false,
      "hasImpact": false,
      "impact": 0,
      "delayHoursTrigger": 0,
      "delayHoursResolve": 0,
      "startTime": 0,
      "endTime": 0,
      "sunMinElevation": 0,
      "sunMinAzimuth": 0,
      "sunMaxAzimuth": 0,
      "parameters": [],
      "ownerKey": "",
      "sharing": 0
    }
  ],
  "triggers": [
    {
      "key": "x2d18e7f6",
      "lastChanged": "2025-12-22T22:06:35Z",
      "id": 1632246,
      "alertTypeKey": "AI862",
      "parentKey": "H511568",
      "name": "SMA STP/TriPower Fault Alert",
      "description": "SMA TriPower Fault Alert following the SMA Event Messages Document.",
      "isActive": true,
      "priorityLevel": 0,
      "checkSun": false,
      "checkTime": false,
      "checkNoSnow": false,
      "hasImpact": false,
      "impact": 0,
      "delayHoursTrigger": 0,
      "delayHoursResolve": 0,
      "startTime": 0,
      "endTime": 0,
      "sunMinElevation": 0,
      "sunMinAzimuth": 0,
      "sunMaxAzimuth": 0,
      "parameters": [],
      "ownerKey": "",
      "sharing": 0
    },
    {
      "key": "x2d1c32f2",
      "lastChanged": "2025-12-22T22:06:35Z",
      "id": 1848050,
      "alertTypeKey": "AI250",
      "parentKey": "H511568",
      "name": "Device communication",
      "description": "Detects when a device is not talking to the data logger, or invalid data is received from the device.",
      "isActive": true,
      "priorityLevel": 0,
      "checkSun": true,
      "checkTime": false,
      "checkNoSnow": true,
      "hasImpact": false,
      "impact": 0,
      "delayHoursTrigger": 1,
      "delayHoursResolve": 0.5,
      "startTime": 0,
      "endTime": 0,
      "sunMinElevation": 10,
      "sunMinAzimuth": 0,
      "sunMaxAzimuth": 0,
      "parameters": [
        {
          "source": 2,
          "info": "Ignore invalid data",
          "readOnly": true,
          "index": 0,
          "name": "IgnoreInvalidData",
          "value": 0,
          "type": 7
        }
      ],
      "ownerKey": "",
      "sharing": 0
    }
  ]
}
```

[Return to top](#top)

