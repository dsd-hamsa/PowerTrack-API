<a id="top"></a>
# /api/alerttriggers

[← Back to Index](../logs.md)

**Methods:** PUT  
**Status Codes:** 409, 409, 409, 409, 200  

## Table of Contents

- [Payload Structure](#payload-structure)
- [Alert Type: General](#alert-type-general)
- [Example](#example)

## Payload Structure

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
    "isCachedData": {
      "type": "boolean"
    },
    "key": {
      "type": "string"
    },
    "lastChanged": {
      "type": "string"
    },
    "lastChecked": {
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
        "lastChecked": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "ownerKey": {
          "type": "string"
        },
        "parameters": {
          "type": "array",
          "items": {
            "type": "unknown"
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
          "type": "array",
          "items": {
            "type": "unknown"
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
PUT /api/alerttriggers
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H511568/administration/alertsettings
```

**Payload:**

```json
{
  "assetCode": 1,
  "calculatedCapacity": 63,
  "capacity": 63,
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
      "lastChanged": "2026-01-07T19:04:18Z",
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
    },
    {
      "alertTypeKey": "AI862",
      "checkNoSnow": false,
      "checkSun": false,
      "checkTime": false,
      "delayHoursResolve": 0,
      "delayHoursTrigger": 0,
      "description": "SMA TriPower Fault Alert following the SMA Event Messages Document.",
      "endTime": 0,
      "hasImpact": false,
      "id": 0,
      "impact": 0,
      "isActive": false,
      "key": "",
      "lastChanged": "2026-01-07T19:04:18Z",
      "name": "SMA STP/TriPower Fault Alert",
      "ownerKey": "",
      "parameters": [],
      "parentKey": "H511568",
      "priorityLevel": 0,
      "sharing": 0,
      "startTime": 0,
      "sunMaxAzimuth": 0,
      "sunMinAzimuth": 0,
      "sunMinElevation": 0
    }
  ],
  "isCachedData": true,
  "key": "H511568",
  "lastChanged": "2026-01-07T19:04:18Z",
  "lastChecked": "2026-01-07T19:04:23.583Z",
  "triggers": [
    {
      "alertTypeKey": "AI862",
      "checkNoSnow": false,
      "checkSun": false,
      "checkTime": false,
      "delayHoursResolve": 1,
      "delayHoursTrigger": 1,
      "description": "SMA TriPower Fault Alert following the SMA Event Messages Document.",
      "endTime": 0,
      "hasImpact": false,
      "id": 1851954,
      "impact": 0,
      "isActive": true,
      "key": "x2d1c4232",
      "lastChanged": "2026-01-07T19:04:18Z",
      "lastChecked": "2026-01-07T19:04:23.583Z",
      "name": "SMA STP/TriPower Fault Alert",
      "ownerKey": "",
      "parameters": [],
      "parentKey": "H511568",
      "priorityLevel": 0,
      "sharing": 0,
      "startTime": 0,
      "sunMaxAzimuth": 0,
      "sunMinAzimuth": 0,
      "sunMinElevation": 0
    },
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
      "id": 1851955,
      "impact": 0,
      "isActive": true,
      "key": "x2d1c4233",
      "lastChanged": "2026-01-07T19:04:18Z",
      "lastChecked": "2026-01-07T19:04:23.583Z",
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
      "sunMinElevation": 10
    }
  ]
}
```

[Return to top](#top)

