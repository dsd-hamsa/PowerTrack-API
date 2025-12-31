<a id="top"></a>
# /api/alerttrigger/AS530653

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [Alert Type: AI438](#alert-type-ai438)
- [Example](#example)

## Alert Type: AI438

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
GET /api/alerttrigger/AS530653?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H208927/administration/alertsettings
```

**Response:**

```json
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
}
```

[Return to top](#top)

