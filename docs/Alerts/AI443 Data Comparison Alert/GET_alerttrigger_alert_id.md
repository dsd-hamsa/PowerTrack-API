<a id="top"></a>
# /api/alerttrigger/{alert_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [Alert Type: AI443](#alert-type-ai443)
- [Example](#example)

## Alert Type: AI443

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
  "key": "x2d19d1ba",
  "lastChanged": "2025-04-21T16:09:35Z",
  "id": 1692090,
  "alertTypeKey": "AI443",
  "parentKey": "H452515",
  "name": "Data Comparison Alert",
  "description": "Generate an alert for how a register value compares to a setpoint. ",
  "isActive": false,
  "priorityLevel": 0,
  "checkSun": true,
  "checkTime": false,
  "checkNoSnow": false,
  "hasImpact": false,
  "impact": 0.0,
  "delayHoursTrigger": 1.0,
  "delayHoursResolve": 0.5,
  "startTime": 60,
  "endTime": 1380,
  "sunMinElevation": 8,
  "sunMinAzimuth": 90,
  "sunMaxAzimuth": 270,
  "parameters": [
    {
      "source": 2,
      "info": "Register name",
      "readOnly": false,
      "index": 0,
      "name": "Register",
      "value": "Total Power",
      "type": 0
    },
    {
      "source": 2,
      "info": "Compare Register to Set Point\rChoose = , != , < , > , <= , >=",
      "readOnly": false,
      "index": 0,
      "name": "Function",
      "value": "<",
      "type": 0
    },
    {
      "source": 2,
      "info": "Register values below this limit will generate an alert",
      "readOnly": false,
      "index": 0,
      "name": "Set Point",
      "value": 5.0,
      "type": 2
    },
    {
      "source": 2,
      "info": "Message to be included in the alert notification",
      "readOnly": false,
      "index": 0,
      "name": "Message",
      "value": "Site outtage: Production meter reading <5kW",
      "type": 0
    }
  ],
  "ownerKey": "",
  "sharing": 0
}
```

[Return to top](#top)
