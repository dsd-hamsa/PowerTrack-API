<a id="top"></a>
# /api/alerttrigger/{alert_id}

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
            "type": "float"
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
  "key": "AS52079",
  "lastChanged": "2025-12-23T00:49:08Z",
  "id": 52079,
  "alertTypeKey": "AI353",
  "parentKey": "H38211",
  "name": "Zone / string alarm",
  "description": "Underperforming zone or string detector.  Also detects invalid data on any input channel.",
  "isActive": true,
  "priorityLevel": 0,
  "checkSun": true,
  "checkTime": false,
  "checkNoSnow": true,
  "hasImpact": false,
  "impact": 0.0,
  "delayHoursTrigger": 0.5,
  "delayHoursResolve": 0.25,
  "startTime": 0,
  "endTime": 0,
  "sunMinElevation": 15,
  "sunMinAzimuth": 0,
  "sunMaxAzimuth": 0,
  "parameters": [
    {
      "source": 2,
      "info": "Any zone performing below this percentage of the average will generate an alert",
      "readOnly": false,
      "index": 0,
      "name": "Threshold",
      "value": 10.0,
      "type": 3
    },
    {
      "source": 2,
      "info": "Do not generate alerts when the string current is below this limit.",
      "readOnly": false,
      "index": 0,
      "name": "MinAmps",
      "value": 1.0,
      "type": 2
    }
  ],
  "ownerKey": "",
  "sharing": 0
}
```

[Return to top](#top)
