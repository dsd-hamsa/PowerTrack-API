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
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/alerttrigger/H582342?lastChanged=2025-12-22T18:51:15Z
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: e4dcd1
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/H582342/administration/config
```

**Response:**

```json
{
  "key": "H582342",
  "lastChanged": "2025-10-14T14:42:58Z",
  "assetCode": 34,
  "calculatedCapacity": 0,
  "capacity": 0,
  "defaultTriggers": [
    {
      "key": "",
      "lastChanged": "2025-10-14T14:42:58Z",
      "id": 0,
      "alertTypeKey": "AI344",
      "parentKey": "H582342",
      "name": "Device heartbeat",
      "description": "Detects missing communication from a device that uploads directly (without a data logger or gateway). NOTE: This alert will trigger after the expected communication delay (a built-in constant) plus the Threshold.  To override the expected communication delay, add a Setting named \"UploadRateMins\" (type = integer) and set it to the maximum number of minutes expected between uploads.  The alert will trigger if an upload doesn't occur within the total amount of time specified by the UploadRateMins setting plus the Threshold.",
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
          "info": "Delays the \"detected\" phase of the alert until the specified hours since event occurance has passed",
          "readOnly": false,
          "index": 0,
          "name": "DetectedTriggerHours",
          "value": 0,
          "type": 2
        }
      ],
      "ownerKey": "",
      "sharing": 0
    },
    {
      "key": "",
      "lastChanged": "2025-10-14T14:42:58Z",
      "id": 0,
      "alertTypeKey": "AI1233",
      "parentKey": "H582342",
      "name": "LocusNOC SEL 351 Faults",
      "description": "LocusNOC SEL 351 Faults (DMID 2701)",
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
      "key": "x2d1b82fe",
      "lastChanged": "2025-10-14T14:42:58Z",
      "id": 1803006,
      "alertTypeKey": "AI344",
      "parentKey": "H582342",
      "name": "Device heartbeat",
      "description": "Detects missing communication from a device that uploads directly (without a data logger or gateway). NOTE: This alert will trigger after the expected communication delay (a built-in constant) plus the Threshold.  To override the expected communication delay, add a Setting named \"UploadRateMins\" (type = integer) and set it to the maximum number of minutes expected between uploads.  The alert will trigger if an upload doesn't occur within the total amount of time specified by the UploadRateMins setting plus the Threshold.",
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
      "parameters": [
        {
          "source": 2,
          "info": "Delays the \"detected\" phase of the alert until the specified hours since event occurance has passed",
          "readOnly": false,
          "index": 0,
          "name": "DetectedTriggerHours",
          "value": 0,
          "type": 2
        }
      ],
      "ownerKey": "",
      "sharing": 0
    },
    {
      "key": "x2d1b82ff",
      "lastChanged": "2025-10-14T14:42:58Z",
      "id": 1803007,
      "alertTypeKey": "AI1233",
      "parentKey": "H582342",
      "name": "LocusNOC SEL 351 Faults",
      "description": "LocusNOC SEL 351 Faults (DMID 2701)",
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
    }
  ]
}
```

[Return to top](#top)

