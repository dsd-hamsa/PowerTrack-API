<a id="top"></a>
# /api/alerttrigger/{alert_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [Alert Type: AI350](#alert-type-ai350)
- [Example](#example)

## Alert Type: AI350

```json
{
  "type": "object",
  "properties": {
    "key": {
      "type": "str"
    },
    "lastChanged": {
      "type": "str"
    },
    "id": {
      "type": "int"
    },
    "alertTypeKey": {
      "type": "str"
    },
    "parentKey": {
      "type": "str"
    },
    "name": {
      "type": "str"
    },
    "description": {
      "type": "str"
    },
    "isActive": {
      "type": "bool"
    },
    "priorityLevel": {
      "type": "int"
    },
    "checkSun": {
      "type": "bool"
    },
    "checkTime": {
      "type": "bool"
    },
    "checkNoSnow": {
      "type": "bool"
    },
    "hasImpact": {
      "type": "bool"
    },
    "impact": {
      "type": "float"
    },
    "delayHoursTrigger": {
      "type": "float"
    },
    "delayHoursResolve": {
      "type": "float"
    },
    "startTime": {
      "type": "int"
    },
    "endTime": {
      "type": "int"
    },
    "sunMinElevation": {
      "type": "int"
    },
    "sunMinAzimuth": {
      "type": "int"
    },
    "sunMaxAzimuth": {
      "type": "int"
    },
    "parameters": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "source": {
            "type": "int"
          },
          "info": {
            "type": "str"
          },
          "readOnly": {
            "type": "bool"
          },
          "index": {
            "type": "int"
          },
          "name": {
            "type": "str"
          },
          "value": {
            "type": "int"
          },
          "type": {
            "type": "int"
          }
        }
      }
    },
    "ownerKey": {
      "type": "str"
    },
    "sharing": {
      "type": "int"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/alerttrigger/{alert_id}?lastChanged=1900-01-01T00:00:00.000Z
```

**Response:**

```json
{
  "key": "x2d173486",
  "lastChanged": "2025-04-04T16:14:59Z",
  "id": 1520774,
  "alertTypeKey": "AI350",
  "parentKey": "H464530",
  "name": "Power Meter Check",
  "description": "Checks for wiring problems and hardware failures for power meters by checking CT ratio settings, phase voltages, currents and power.",
  "isActive": true,
  "priorityLevel": 0,
  "checkSun": true,
  "checkTime": false,
  "checkNoSnow": true,
  "hasImpact": false,
  "impact": 0.0,
  "delayHoursTrigger": 0.25,
  "delayHoursResolve": 0.5,
  "startTime": 0,
  "endTime": 0,
  "sunMinElevation": 10,
  "sunMinAzimuth": 0,
  "sunMaxAzimuth": 0,
  "parameters": [
    {
      "source": 2,
      "info": "Minimum phase current for correlation test",
      "readOnly": false,
      "index": 0,
      "name": "MinAmps",
      "value": 10,
      "type": 1
    },
    {
      "source": 2,
      "info": "Mismatch limit mismatch by more than this percentage from the average will cause an alert.",
      "readOnly": false,
      "index": 0,
      "name": "MatchAmps",
      "value": 10.0,
      "type": 3
    },
    {
      "source": 2,
      "info": "Two phase operation (ignore phase C)",
      "readOnly": false,
      "index": 0,
      "name": "TwoPhase",
      "value": 0,
      "type": 7
    },
    {
      "source": 2,
      "info": "",
      "readOnly": false,
      "index": 0,
      "name": "CenterTapDel",
      "value": "",
      "type": 0
    },
    {
      "source": 2,
      "info": "Don't check the meter if the power is less than this percentage of the configured capacity.",
      "readOnly": false,
      "index": 0,
      "name": "PowerPercent",
      "value": 25.0,
      "type": 3
    }
  ],
  "ownerKey": "",
  "sharing": 0
}
```

[Return to top](#top)
