<a id="top"></a>
# /api/alerttrigger/{alert_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200, 200  

## Table of Contents

- [Known Alert IDs](#known-alert-ids)
- [Alert Type: AI250](#alert-type-ai250)
- [Example](#example)

## Alert Type: AI250

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

## Known Alert IDs

The following alert IDs have been identified in the system:

```
x2d152085, x2d14bcba, x2d163901, x2d147feb, x2d1b82fb, x2d1ba7e2, x2d193e2c, x2d19a868, x2d1558e2, x2d1734a0, x2d155c63, x2d15437c, x2d133979, x2d173c11, x2d18a006, x2d173775, x2d1991c7, x2d161c37, x2d161bec, x2d1734d5, AS122525, x2d18f032, x2d1b2857, x2d18649e, x2d1864a0, x2d1864a2, AS216344, x2d17bd6b, x2d173486, AS70685, AS52079, x2d1bbe9f, x2d16a581, x2d1816f5, x2d1896c8, x2d1896ca, AS75763, x2d19b9da, AS70686, x2d0f53c8, x2d180dab, AS271713, AS51802, x2d19d1ba, AS238111, x2d155900, AS158068, x2d1ae116, AS124503, x2d1734b6, AS764158, x2d1734d7, AS379013, x2d1734df, x2d1558e5, x2d176aa9, AS223566, x2d172324, x2d173c1f, x2d19b16b, x2d10812d, AS771195, x2d17887c, x2d16a580, x2d12a49a, AS995467, x2d1558eb, x2d113d64, x2d17d0bd
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/alerttrigger/x2d18e7f5?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H511568/administration/alertsettings
```

**Response:**

```json
{
  "alertTypeKey": "AI250",
  "checkNoSnow": true,
  "checkSun": true,
  "checkTime": false,
  "delayHoursResolve": 0.5,
  "delayHoursTrigger": 1,
  "description": "Detects when a device is not talking to the data logger, or invalid data is received from the device.",
  "endTime": 0,
  "hasImpact": false,
  "id": 1632245,
  "impact": 0,
  "isActive": true,
  "key": "x2d18e7f5",
  "lastChanged": "2025-12-22T22:05:23Z",
  "name": "Device communication",
  "ownerKey": "",
  "parameters": [
    {
      "index": 0,
      "info": "Ignore invalid data",
      "name": "IgnoreInvalidData",
      "readOnly": true,
      "source": 2,
      "type": 7,
      "value": 0
    }
  ],
  "parentKey": "H511568",
  "priorityLevel": -1,
  "sharing": 0,
  "startTime": 0,
  "sunMaxAzimuth": 0,
  "sunMinAzimuth": 0,
  "sunMinElevation": 15
}
```

[Return to top](#top)

