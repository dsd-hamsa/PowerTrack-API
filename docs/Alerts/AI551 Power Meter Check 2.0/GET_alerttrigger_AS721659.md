<a id="top"></a>
# /api/alerttrigger/AS721659

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [Alert Type: AI551](#alert-type-ai551)
- [Example](#example)

## Alert Type: AI551

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
    "standardItems": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
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
GET /api/alerttrigger/AS721659?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 3fefeb
referer: https://apps.alsoenergy.com/powertrack/H225871/administration/alertsettings
```

**Response:**

```json
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
  "id": 721659,
  "impact": 0,
  "isActive": true,
  "key": "AS721659",
  "lastChanged": "2026-02-02T23:08:00Z",
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
      "value": 25
    },
    {
      "index": 0,
      "info": "Mismatch limit mismatch by more than this percentage from the average will cause an alert.",
      "name": "MatchAmps",
      "readOnly": false,
      "source": 2,
      "type": 3,
      "value": 25
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
  "parentKey": "H225871",
  "priorityLevel": 0,
  "sharing": 0,
  "standardItems": [],
  "startTime": 0,
  "sunMaxAzimuth": 0,
  "sunMinAzimuth": 0,
  "sunMinElevation": 10
}
```

[Return to top](#top)

