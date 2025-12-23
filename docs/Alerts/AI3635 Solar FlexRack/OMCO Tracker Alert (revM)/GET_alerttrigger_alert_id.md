<a id="top"></a>
# /api/alerttrigger/{alert_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [Alert Type: AI3635](#alert-type-ai3635)
- [Example](#example)

## Alert Type: AI3635

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
  "key": "x2d1816f5",
  "lastChanged": "2024-09-25T19:15:29Z",
  "id": 1578741,
  "alertTypeKey": "AI3635",
  "parentKey": "H462789",
  "name": "Solar FlexRack/OMCO Tracker Alert (revM)",
  "description": "Detects alert conditions for Solar FlexRack and OMCO trackers.",
  "isActive": true,
  "priorityLevel": 0,
  "checkSun": true,
  "checkTime": false,
  "checkNoSnow": true,
  "hasImpact": false,
  "impact": 0.0,
  "delayHoursTrigger": 0.5,
  "delayHoursResolve": 0.5,
  "startTime": 0,
  "endTime": 0,
  "sunMinElevation": 10,
  "sunMinAzimuth": 0,
  "sunMaxAzimuth": 0,
  "parameters": [],
  "ownerKey": "",
  "sharing": 0
}
```

[Return to top](#top)
