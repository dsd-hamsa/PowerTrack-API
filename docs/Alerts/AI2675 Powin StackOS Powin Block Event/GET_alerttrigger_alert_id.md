<a id="top"></a>
# /api/alerttrigger/{alert_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [Alert Type: AI2675](#alert-type-ai2675)
- [Example](#example)

## Alert Type: AI2675

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
        "type": "unknown"
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
  "key": "x2d18a006",
  "lastChanged": "2025-06-20T19:43:38Z",
  "id": 1613830,
  "alertTypeKey": "AI2675",
  "parentKey": "H504399",
  "name": "Powin StackOS Powin Block Event",
  "description": "Powin StackOS Powin Block Event (BlockEvt1)",
  "isActive": true,
  "priorityLevel": 0,
  "checkSun": false,
  "checkTime": false,
  "checkNoSnow": false,
  "hasImpact": false,
  "impact": 0.0,
  "delayHoursTrigger": 0.0,
  "delayHoursResolve": 0.0,
  "startTime": 0,
  "endTime": 0,
  "sunMinElevation": 0,
  "sunMinAzimuth": 0,
  "sunMaxAzimuth": 0,
  "parameters": [],
  "ownerKey": "",
  "sharing": 0
}
```

[Return to top](#top)
