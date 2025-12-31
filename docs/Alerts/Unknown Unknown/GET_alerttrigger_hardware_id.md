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
GET /api/alerttrigger/H208927?lastChanged=2025-11-25T22:46:47Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H208927/administration/config
```

**Response:**

```json
{
  "assetCode": 1,
  "calculatedCapacity": 50,
  "capacity": 50,
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
      "lastChanged": "2024-11-27T07:28:49Z",
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
      "parentKey": "H208927",
      "priorityLevel": 0,
      "sharing": 0,
      "startTime": 0,
      "sunMaxAzimuth": 0,
      "sunMinAzimuth": 0,
      "sunMinElevation": 0
    },
    {
      "alertTypeKey": "AI438",
      "checkNoSnow": false,
      "checkSun": false,
      "checkTime": false,
      "delayHoursResolve": 0,
      "delayHoursTrigger": 0,
      "description": "Detects fault conditions for Solectria and Chint 3 phase String Inverters.",
      "endTime": 0,
      "hasImpact": false,
      "id": 0,
      "impact": 0,
      "isActive": false,
      "key": "",
      "lastChanged": "2024-11-27T07:28:49Z",
      "name": ".Chint / Solectria / Canadian String Inv Faults",
      "ownerKey": "",
      "parameters": [
        {
          "index": 0,
          "info": "",
          "name": "Ignore line frequency",
          "readOnly": true,
          "source": 2,
          "type": 7,
          "value": 1
        },
        {
          "index": 0,
          "info": "",
          "name": "Ignore Vac sense",
          "readOnly": true,
          "source": 2,
          "type": 7,
          "value": 0
        }
      ],
      "parentKey": "H208927",
      "priorityLevel": 0,
      "sharing": 0,
      "startTime": 0,
      "sunMaxAzimuth": 0,
      "sunMinAzimuth": 0,
      "sunMinElevation": 0
    }
  ],
  "key": "H208927",
  "lastChanged": "2024-11-27T07:28:49Z",
  "triggers": [
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
      "id": 530652,
      "impact": 0,
      "isActive": true,
      "key": "AS530652",
      "lastChanged": "2024-11-27T07:28:49Z",
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
      "parentKey": "H208927",
      "priorityLevel": 0,
      "sharing": 0,
      "startTime": 0,
      "sunMaxAzimuth": 0,
      "sunMinAzimuth": 0,
      "sunMinElevation": 10
    },
    {
      "alertTypeKey": "AI438",
      "checkNoSnow": true,
      "checkSun": true,
      "checkTime": false,
      "delayHoursResolve": 0.5,
      "delayHoursTrigger": 1,
      "description": "Detects fault conditions for Solectria and Chint 3 phase String Inverters.",
      "endTime": 0,
      "hasImpact": false,
      "id": 530653,
      "impact": 0,
      "isActive": true,
      "key": "AS530653",
      "lastChanged": "2024-11-27T07:28:49Z",
      "name": ".Chint / Solectria / Canadian String Inv Faults",
      "ownerKey": "",
      "parameters": [
        {
          "index": 0,
          "info": "",
          "name": "Ignore line frequency",
          "readOnly": true,
          "source": 2,
          "type": 7,
          "value": 1
        },
        {
          "index": 0,
          "info": "",
          "name": "Ignore Vac sense",
          "readOnly": true,
          "source": 2,
          "type": 7,
          "value": 0
        }
      ],
      "parentKey": "H208927",
      "priorityLevel": 0,
      "sharing": 0,
      "startTime": 0,
      "sunMaxAzimuth": 0,
      "sunMinAzimuth": 0,
      "sunMinElevation": 10
    },
    {
      "alertTypeKey": "AI362",
      "checkNoSnow": true,
      "checkSun": true,
      "checkTime": false,
      "delayHoursResolve": 0.5,
      "delayHoursTrigger": 1,
      "description": "Generate an alert if the inverter is not running for 60 minutes while the irradiance exceeds a threshold.",
      "endTime": 0,
      "hasImpact": false,
      "id": 1266734,
      "impact": 0,
      "isActive": true,
      "key": "x2d13542e",
      "lastChanged": "2024-11-27T07:28:49Z",
      "name": "Inverter / irradiance check",
      "ownerKey": "",
      "parameters": [
        {
          "index": 0,
          "info": "",
          "name": "Weather station",
          "readOnly": false,
          "source": 2,
          "type": 5,
          "value": ""
        },
        {
          "index": 0,
          "info": "Minimum irradiance level",
          "name": "Threshold",
          "readOnly": false,
          "source": 2,
          "type": 3,
          "value": 90.063966623942
        },
        {
          "index": 0,
          "info": "Do not trigger if the AC voltage for the production meter is zero.",
          "name": "SuppressIfNoAC",
          "readOnly": false,
          "source": 2,
          "type": 16,
          "value": false
        }
      ],
      "parentKey": "H208927",
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

