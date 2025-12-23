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
GET /api/alerttrigger/H488369?lastChanged=2025-12-22T18:51:15Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: e4dcd1
referer: https://apps.alsoenergy.com/powertrack/H488369/administration/config
```

**Response:**

```json
{
  "assetCode": 2,
  "calculatedCapacity": 0,
  "capacity": 0,
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
      "lastChanged": "2025-05-28T18:21:36Z",
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
      "parentKey": "H488369",
      "priorityLevel": 0,
      "sharing": 0,
      "startTime": 0,
      "sunMaxAzimuth": 0,
      "sunMinAzimuth": 0,
      "sunMinElevation": 0
    },
    {
      "alertTypeKey": "AI551",
      "checkNoSnow": false,
      "checkSun": false,
      "checkTime": false,
      "delayHoursResolve": 0,
      "delayHoursTrigger": 0,
      "description": "Checks phase current balance for 3 Phase, Split Phase, and Center Tap Transformers. Checks for voltage match within 10%.",
      "endTime": 0,
      "hasImpact": false,
      "id": 0,
      "impact": 0,
      "isActive": false,
      "key": "",
      "lastChanged": "2025-05-28T18:21:36Z",
      "name": "Power Meter Check 2.0",
      "ownerKey": "",
      "parameters": [
        {
          "index": 0,
          "info": "Minimum phase current for correlation test",
          "name": "MinAmps",
          "readOnly": false,
          "source": 2,
          "type": 1,
          "value": 10
        },
        {
          "index": 0,
          "info": "Mismatch limit mismatch by more than this percentage from the average will cause an alert.",
          "name": "MatchAmps",
          "readOnly": false,
          "source": 2,
          "type": 3,
          "value": 10
        },
        {
          "index": 0,
          "info": "Two phase operation (ignore phase C)",
          "name": "TwoPhase",
          "readOnly": false,
          "source": 2,
          "type": 7,
          "value": 0
        },
        {
          "index": 0,
          "info": "",
          "name": "CenterTapDel",
          "readOnly": false,
          "source": 2,
          "type": 7,
          "value": 0
        }
      ],
      "parentKey": "H488369",
      "priorityLevel": 0,
      "sharing": 0,
      "startTime": 0,
      "sunMaxAzimuth": 0,
      "sunMinAzimuth": 0,
      "sunMinElevation": 0
    }
  ],
  "key": "H488369",
  "lastChanged": "2025-05-28T18:21:36Z",
  "triggers": [
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
      "id": 1574766,
      "impact": 0,
      "isActive": true,
      "key": "x2d18076e",
      "lastChanged": "2025-05-28T18:21:36Z",
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
      "parentKey": "H488369",
      "priorityLevel": 0,
      "sharing": 0,
      "startTime": 0,
      "sunMaxAzimuth": 0,
      "sunMinAzimuth": 0,
      "sunMinElevation": 10
    },
    {
      "alertTypeKey": "AI551",
      "checkNoSnow": true,
      "checkSun": true,
      "checkTime": false,
      "delayHoursResolve": 0.5,
      "delayHoursTrigger": 0.25,
      "description": "Checks phase current balance for 3 Phase, Split Phase, and Center Tap Transformers. Checks for voltage match within 10%.",
      "endTime": 0,
      "hasImpact": false,
      "id": 1574767,
      "impact": 0,
      "isActive": true,
      "key": "x2d18076f",
      "lastChanged": "2025-05-28T18:21:36Z",
      "name": "Power Meter Check 2.0",
      "ownerKey": "",
      "parameters": [
        {
          "index": 0,
          "info": "Minimum phase current for correlation test",
          "name": "MinAmps",
          "readOnly": false,
          "source": 2,
          "type": 1,
          "value": 10
        },
        {
          "index": 0,
          "info": "Mismatch limit mismatch by more than this percentage from the average will cause an alert.",
          "name": "MatchAmps",
          "readOnly": false,
          "source": 2,
          "type": 3,
          "value": 10
        },
        {
          "index": 0,
          "info": "Two phase operation (ignore phase C)",
          "name": "TwoPhase",
          "readOnly": false,
          "source": 2,
          "type": 7,
          "value": 0
        },
        {
          "index": 0,
          "info": "",
          "name": "CenterTapDel",
          "readOnly": false,
          "source": 2,
          "type": 7,
          "value": 0
        }
      ],
      "parentKey": "H488369",
      "priorityLevel": 0,
      "sharing": 0,
      "startTime": 0,
      "sunMaxAzimuth": 0,
      "sunMinAzimuth": 0,
      "sunMinElevation": 10
    }
  ]
}
```

[Return to top](#top)

