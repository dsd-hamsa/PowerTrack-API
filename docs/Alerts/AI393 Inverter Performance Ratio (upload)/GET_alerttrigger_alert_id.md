<a id="top"></a>
# /api/alerttrigger/{alert_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [Alert Type: AI393](#alert-type-ai393)
- [Example](#example)

## Alert Type: AI393

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
  "key": "AS70686",
  "lastChanged": "2025-11-25T18:05:15Z",
  "id": 70686,
  "alertTypeKey": "AI393",
  "parentKey": "H38201",
  "name": "Inverter Performance Ratio (upload)",
  "description": "Check inverter output vs. measured irradiance in real time during inverter data upload. NOTE: Requires a weather station with POA and Module temperature (1).",
  "isActive": true,
  "priorityLevel": 0,
  "checkSun": true,
  "checkTime": false,
  "checkNoSnow": false,
  "hasImpact": false,
  "impact": 0.0,
  "delayHoursTrigger": 1.0,
  "delayHoursResolve": 0.0,
  "startTime": 0,
  "endTime": 0,
  "sunMinElevation": 20,
  "sunMinAzimuth": 0,
  "sunMaxAzimuth": 0,
  "parameters": [
    {
      "source": 2,
      "info": "Minimum irradiance require to perform the analysis",
      "readOnly": false,
      "index": 0,
      "name": "Threshold",
      "value": 600.0,
      "type": 3
    },
    {
      "source": 2,
      "info": "Performance ratio below this value will generate an alert",
      "readOnly": false,
      "index": 0,
      "name": "Performance ratio",
      "value": 0.8,
      "type": 2
    },
    {
      "source": 2,
      "info": "Maximum power output (kW AC)",
      "readOnly": false,
      "index": 0,
      "name": "Max power",
      "value": 28.0,
      "type": 2
    },
    {
      "source": 2,
      "info": "",
      "readOnly": false,
      "index": 0,
      "name": "Weather station",
      "value": "H38198",
      "type": 5
    }
  ],
  "ownerKey": "",
  "sharing": 0
}
```

[Return to top](#top)
