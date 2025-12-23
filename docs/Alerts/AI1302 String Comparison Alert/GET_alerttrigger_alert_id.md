<a id="top"></a>
# /api/alerttrigger/{alert_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [Alert Type: AI1302](#alert-type-ai1302)
- [Example](#example)

## Alert Type: AI1302

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
  "key": "x2d1ba7e2",
  "lastChanged": "2025-11-25T20:30:06Z",
  "id": 1812450,
  "alertTypeKey": "AI1302",
  "parentKey": "H329436",
  "name": "String Comparison Alert",
  "description": "Generate an alert for how a register string compares to a user-defined string",
  "isActive": true,
  "priorityLevel": 0,
  "checkSun": false,
  "checkTime": true,
  "checkNoSnow": false,
  "hasImpact": true,
  "impact": 5.2,
  "delayHoursTrigger": 1.0,
  "delayHoursResolve": 2.0,
  "startTime": 660,
  "endTime": 780,
  "sunMinElevation": 5,
  "sunMinAzimuth": 90,
  "sunMaxAzimuth": 270,
  "parameters": [
    {
      "source": 2,
      "info": "Name of register you need to compare (NOT Data Name)",
      "readOnly": false,
      "index": 0,
      "name": "Register",
      "value": "Register Name",
      "type": 0
    },
    {
      "source": 2,
      "info": "Compare Register text to this string\rChoose == , !=",
      "readOnly": false,
      "index": 0,
      "name": "Function",
      "value": "700 x .05",
      "type": 0
    },
    {
      "source": 2,
      "info": "",
      "readOnly": false,
      "index": 0,
      "name": "Defined String",
      "value": "700",
      "type": 0
    },
    {
      "source": 2,
      "info": "Message to be included in the alert notification",
      "readOnly": false,
      "index": 0,
      "name": "Message",
      "value": "Do this",
      "type": 0
    }
  ],
  "ownerKey": "",
  "sharing": 0
}
```

[Return to top](#top)
