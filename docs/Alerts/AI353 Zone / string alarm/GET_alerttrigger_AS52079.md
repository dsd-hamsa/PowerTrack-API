<a id="top"></a>
# /api/alerttrigger/AS52079

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [Alert Type: AI353](#alert-type-ai353)
- [Example](#example)

## Alert Type: AI353

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

[Return to top](#top)

## Example

**Request:**

```http
GET /api/alerttrigger/AS52079?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H38211/administration/alertsettings
```

**Response:**

```json
{
  "alertTypeKey": "AI353",
  "checkNoSnow": true,
  "checkSun": true,
  "checkTime": false,
  "delayHoursResolve": 0.25,
  "delayHoursTrigger": 0.5,
  "description": "Underperforming zone or string detector.  Also detects invalid data on any input channel.",
  "endTime": 0,
  "hasImpact": false,
  "id": 52079,
  "impact": 0,
  "isActive": true,
  "key": "AS52079",
  "lastChanged": "2025-12-23T00:49:08Z",
  "name": "Zone / string alarm",
  "ownerKey": "",
  "parameters": [
    {
      "index": 0,
      "info": "Any zone performing below this percentage of the average will generate an alert",
      "name": "Threshold",
      "readOnly": false,
      "source": 2,
      "type": 3,
      "value": 10
    },
    {
      "index": 0,
      "info": "Do not generate alerts when the string current is below this limit.",
      "name": "MinAmps",
      "readOnly": false,
      "source": 2,
      "type": 2,
      "value": 1
    }
  ],
  "parentKey": "H38211",
  "priorityLevel": 0,
  "sharing": 0,
  "startTime": 0,
  "sunMaxAzimuth": 0,
  "sunMinAzimuth": 0,
  "sunMinElevation": 15
}
```

[Return to top](#top)

