<a id="top"></a>
# /api/alerttrigger/{alert_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [Alert Type: AI721](#alert-type-ai721)
- [Example](#example)

## Alert Type: AI721

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
            "type": "str"
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
  "key": "x2d16a580",
  "lastChanged": "2024-10-30T03:32:21Z",
  "id": 1484160,
  "alertTypeKey": "AI721",
  "parentKey": "H419668",
  "name": "Meter / irradiance check",
  "description": "Generate an alert if the meter is not running while the irradiance exceeds a threshold",
  "isActive": true,
  "priorityLevel": -1,
  "checkSun": true,
  "checkTime": false,
  "checkNoSnow": true,
  "hasImpact": false,
  "impact": 0.0,
  "delayHoursTrigger": 1.0,
  "delayHoursResolve": 0.5,
  "startTime": 0,
  "endTime": 0,
  "sunMinElevation": 10,
  "sunMinAzimuth": 0,
  "sunMaxAzimuth": 0,
  "parameters": [
    {
      "source": 2,
      "info": "",
      "readOnly": false,
      "index": 0,
      "name": "Weather station",
      "value": "H419682",
      "type": 5
    },
    {
      "source": 2,
      "info": "Minimum irradiance level",
      "readOnly": false,
      "index": 0,
      "name": "Threshold",
      "value": 90.063966623942,
      "type": 3
    }
  ],
  "ownerKey": "",
  "sharing": 0
}
```

[Return to top](#top)
