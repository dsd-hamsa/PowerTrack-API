<a id="top"></a>
# /api/alerttrigger

[← Back to Index](../logs.md)

**Methods:** PUT  
**Status Codes:** 200  

## Table of Contents

- [Payload Structure](#payload-structure)
- [Alert Type: AI344](#alert-type-ai344)
- [Example](#example)

## Payload Structure

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
```

[Return to top](#top)

## Alert Type: AI344

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
```

[Return to top](#top)

## Example

**Request:**

```http
PUT /api/alerttrigger
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Content-Type: application/json
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/H582342/administration/alertsettings
```

**Payload:**

```json
{
  "key": "x2d1b82fe",
  "lastChanged": "2025-12-23T00:58:59Z",
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
}
```

**Response:**

```json
{
  "key": "x2d1b82fe",
  "lastChanged": "2025-12-23T01:04:10Z",
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
}
```

[Return to top](#top)

