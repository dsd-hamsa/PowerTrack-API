<a id="top"></a>
# /api/alerttrigger/{alert_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [Alert Type: AI1233](#alert-type-ai1233)
- [Example](#example)

## Alert Type: AI1233

```json
{
  "type": "object",
  "properties": {
    "key": {
      "type": "string"
    },
    "lastChanged": {
      "type": "string"
    },
    "id": {
      "type": "number"
    },
    "alertTypeKey": {
      "type": "string"
    },
    "parentKey": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "isActive": {
      "type": "boolean"
    },
    "priorityLevel": {
      "type": "number"
    },
    "checkSun": {
      "type": "boolean"
    },
    "checkTime": {
      "type": "boolean"
    },
    "checkNoSnow": {
      "type": "boolean"
    },
    "hasImpact": {
      "type": "boolean"
    },
    "impact": {
      "type": "number"
    },
    "delayHoursTrigger": {
      "type": "number"
    },
    "delayHoursResolve": {
      "type": "number"
    },
    "startTime": {
      "type": "number"
    },
    "endTime": {
      "type": "number"
    },
    "sunMinElevation": {
      "type": "number"
    },
    "sunMinAzimuth": {
      "type": "number"
    },
    "sunMaxAzimuth": {
      "type": "number"
    },
    "parameters": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "ownerKey": {
      "type": "string"
    },
    "sharing": {
      "type": "number"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/alerttrigger/x2d1b82ff?lastChanged=1900-01-01T00:00:00.000Z
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/H582342/administration/alertsettings
```

**Response:**

```json
{
  "key": "x2d1b82ff",
  "lastChanged": "2025-12-23T01:04:10Z",
  "id": 1803007,
  "alertTypeKey": "AI1233",
  "parentKey": "H582342",
  "name": "LocusNOC SEL 351 Faults",
  "description": "LocusNOC SEL 351 Faults (DMID 2701)",
  "isActive": true,
  "priorityLevel": 0,
  "checkSun": false,
  "checkTime": false,
  "checkNoSnow": false,
  "hasImpact": false,
  "impact": 0,
  "delayHoursTrigger": 0.25,
  "delayHoursResolve": 0,
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

