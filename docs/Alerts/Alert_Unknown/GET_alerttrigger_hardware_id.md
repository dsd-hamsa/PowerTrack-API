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
GET /api/alerttrigger/H419666?lastChanged=2024-11-15T02:45:56Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: e4dcd1
referer: https://apps.alsoenergy.com/powertrack/H419666/administration/config
```

**Response:**

```json
{
  "assetCode": 11,
  "calculatedCapacity": 0,
  "capacity": null,
  "defaultTriggers": [
    {
      "alertTypeKey": "AI344",
      "checkNoSnow": false,
      "checkSun": false,
      "checkTime": false,
      "delayHoursResolve": 0,
      "delayHoursTrigger": 0,
      "description": "Detects missing communication from a device that uploads directly (without a data logger or gateway). NOTE: This alert will trigger after the expected communication delay (a built-in constant) plus the Threshold.  To override the expected communication delay, add a Setting named \"UploadRateMins\" (type = integer) and set it to the maximum number of minutes expected between uploads.  The alert will trigger if an upload doesn't occur within the total amount of time specified by the UploadRateMins setting plus the Threshold.",
      "endTime": 0,
      "hasImpact": false,
      "id": 0,
      "impact": 0,
      "isActive": false,
      "key": "",
      "lastChanged": "2024-11-15T02:41:22Z",
      "name": "Device heartbeat",
      "ownerKey": "",
      "parameters": [
        {
          "index": 0,
          "info": "Delays the \"detected\" phase of the alert until the specified hours since event occurance has passed",
          "name": "DetectedTriggerHours",
          "readOnly": false,
          "source": 2,
          "type": 2,
          "value": 0
        }
      ],
      "parentKey": "H419666",
      "priorityLevel": 0,
      "sharing": 0,
      "startTime": 0,
      "sunMaxAzimuth": 0,
      "sunMinAzimuth": 0,
      "sunMinElevation": 0
    }
  ],
  "key": "H419666",
  "lastChanged": "2024-11-15T02:41:22Z",
  "triggers": [
    {
      "alertTypeKey": "AI250",
      "checkNoSnow": false,
      "checkSun": true,
      "checkTime": false,
      "delayHoursResolve": 0.5,
      "delayHoursTrigger": 1,
      "description": "Detects when a device is not talking to the data logger, or invalid data is received from the device.",
      "endTime": 0,
      "hasImpact": false,
      "id": 1399010,
      "impact": 0,
      "isActive": true,
      "key": "x2d1558e2",
      "lastChanged": "2024-11-15T02:41:22Z",
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
      "parentKey": "H419666",
      "priorityLevel": 0,
      "sharing": 0,
      "startTime": 0,
      "sunMaxAzimuth": 0,
      "sunMinAzimuth": 0,
      "sunMinElevation": 10
    },
    {
      "alertTypeKey": "AI344",
      "checkNoSnow": false,
      "checkSun": true,
      "checkTime": false,
      "delayHoursResolve": 0.5,
      "delayHoursTrigger": 0.5,
      "description": "Detects missing communication from a device that uploads directly (without a data logger or gateway). NOTE: This alert will trigger after the expected communication delay (a built-in constant) plus the Threshold.  To override the expected communication delay, add a Setting named \"UploadRateMins\" (type = integer) and set it to the maximum number of minutes expected between uploads.  The alert will trigger if an upload doesn't occur within the total amount of time specified by the UploadRateMins setting plus the Threshold.",
      "endTime": 0,
      "hasImpact": false,
      "id": 1555819,
      "impact": 0,
      "isActive": true,
      "key": "x2d17bd6b",
      "lastChanged": "2024-11-15T02:41:22Z",
      "name": "Device heartbeat",
      "ownerKey": "",
      "parameters": [
        {
          "index": 0,
          "info": "Delays the \"detected\" phase of the alert until the specified hours since event occurance has passed",
          "name": "DetectedTriggerHours",
          "readOnly": false,
          "source": 2,
          "type": 2,
          "value": 0
        }
      ],
      "parentKey": "H419666",
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

