<a id="top"></a>
# /api/alerttrigger/{alert_id}

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
  "key": "AS51802",
  "lastChanged": "2025-11-25T18:05:15Z",
  "id": 51802,
  "alertTypeKey": "AI438",
  "parentKey": "H38201",
  "name": ".Chint / Solectria / Canadian String Inv Faults",
  "description": "Detects fault conditions for Solectria and Chint 3 phase String Inverters.",
  "isActive": true,
  "priorityLevel": 0,
  "checkSun": false,
  "checkTime": false,
  "checkNoSnow": false,
  "hasImpact": false,
  "impact": 16.67,
  "delayHoursTrigger": 1.0,
  "delayHoursResolve": 0.0,
  "startTime": 0,
  "endTime": 0,
  "sunMinElevation": 0,
  "sunMinAzimuth": 0,
  "sunMaxAzimuth": 0,
  "parameters": [
    {
      "source": 2,
      "info": "",
      "readOnly": true,
      "index": 0,
      "name": "Ignore line frequency",
      "value": 1,
      "type": 7
    },
    {
      "source": 2,
      "info": "",
      "readOnly": true,
      "index": 0,
      "name": "Ignore Vac sense",
      "value": 0,
      "type": 7
    }
  ],
  "ownerKey": "",
  "sharing": 0
}
```

[Return to top](#top)
