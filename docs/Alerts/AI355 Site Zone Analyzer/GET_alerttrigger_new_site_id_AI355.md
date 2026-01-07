<a id="top"></a>
# /api/alerttrigger/new/{site_id}/AI355

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [Alert Type: AI355](#alert-type-ai355)
- [Example](#example)

## Alert Type: AI355

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
      "type": "object",
      "properties": {
        "index": {
          "type": "number"
        },
        "info": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "readOnly": {
          "type": "boolean"
        },
        "source": {
          "type": "number"
        },
        "type": {
          "type": "number"
        },
        "value": {
          "type": "number"
        }
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
GET /api/alerttrigger/new/S34924/AI355
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/S34924/administration/alertsettings
```

**Response:**

```json
{
  "alertTypeKey": "AI355",
  "checkNoSnow": false,
  "checkSun": false,
  "checkTime": false,
  "delayHoursResolve": 0,
  "delayHoursTrigger": 0,
  "description": "Looks for string failures by comparing DC zone currents at a site",
  "endTime": 1380,
  "hasImpact": false,
  "id": 0,
  "impact": 0,
  "isActive": true,
  "key": "",
  "lastChanged": "2025-12-12T17:43:31Z",
  "name": "Site Zone Analyzer",
  "ownerKey": "",
  "parameters": [
    {
      "index": 0,
      "info": "DC Zones below this percentage of the average or the other zones will generate an alert",
      "name": "Threshold",
      "readOnly": false,
      "source": 3,
      "type": 2,
      "value": 90
    },
    {
      "index": 0,
      "info": "Minimum string current for analysis",
      "name": "MinAmps",
      "readOnly": false,
      "source": 3,
      "type": 2,
      "value": 1
    }
  ],
  "parentKey": "S34924",
  "priorityLevel": 0,
  "sharing": 0,
  "startTime": 60,
  "sunMaxAzimuth": 270,
  "sunMinAzimuth": 90,
  "sunMinElevation": 5
}
```

[Return to top](#top)

