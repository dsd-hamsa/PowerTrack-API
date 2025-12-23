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
    "alertTypeKey": {
      "type": "string"
    },
    "checkNoSnow": {
      "type": "boolean"
    },
    "checkSun": {
      "type": "boolean"
    },
    "checkTime": {
      "type": "boolean"
    },
    "delayHoursResolve": {
      "type": "number"
    },
    "delayHoursTrigger": {
      "type": "number"
    },
    "description": {
      "type": "string"
    },
    "endTime": {
      "type": "number"
    },
    "hasImpact": {
      "type": "boolean"
    },
    "id": {
      "type": "number"
    },
    "impact": {
      "type": "number"
    },
    "isActive": {
      "type": "boolean"
    },
    "key": {
      "type": "string"
    },
    "lastChanged": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "ownerKey": {
      "type": "string"
    },
    "parameters": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "parentKey": {
      "type": "string"
    },
    "priorityLevel": {
      "type": "number"
    },
    "sharing": {
      "type": "number"
    },
    "startTime": {
      "type": "number"
    },
    "sunMaxAzimuth": {
      "type": "number"
    },
    "sunMinAzimuth": {
      "type": "number"
    },
    "sunMinElevation": {
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
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H582342/administration/alertsettings
```

**Response:**

```json
{
  "alertTypeKey": "AI1233",
  "checkNoSnow": false,
  "checkSun": false,
  "checkTime": false,
  "delayHoursResolve": 0,
  "delayHoursTrigger": 0.25,
  "description": "LocusNOC SEL 351 Faults (DMID 2701)",
  "endTime": 0,
  "hasImpact": false,
  "id": 1803007,
  "impact": 0,
  "isActive": true,
  "key": "x2d1b82ff",
  "lastChanged": "2025-12-23T01:04:10Z",
  "name": "LocusNOC SEL 351 Faults",
  "ownerKey": "",
  "parameters": [],
  "parentKey": "H582342",
  "priorityLevel": 0,
  "sharing": 0,
  "startTime": 0,
  "sunMaxAzimuth": 0,
  "sunMinAzimuth": 0,
  "sunMinElevation": 0
}
```

[Return to top](#top)

