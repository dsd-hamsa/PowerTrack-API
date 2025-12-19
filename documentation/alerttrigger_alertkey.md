# `/api/alerttrigger/{alertKey}`

[← Back to Index](../README.md)


### `/api/alerttrigger/{alertKey}`

**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 1  

#### Response Structure

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
      "type": "integer"
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
      "type": "integer"
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
      "type": "integer"
    },
    "endTime": {
      "type": "integer"
    },
    "sunMinElevation": {
      "type": "integer"
    },
    "sunMinAzimuth": {
      "type": "integer"
    },
    "sunMaxAzimuth": {
      "type": "integer"
    },
    "parameters": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "source": {
            "type": "integer"
          },
          "info": {
            "type": "string"
          },
          "readOnly": {
            "type": "boolean"
          },
          "index": {
            "type": "integer"
          },
          "name": {
            "type": "string"
          },
          "value": {
            "type": "unknown"
          },
          "type": {
            "type": "integer"
          }
        }
      }
    },
    "ownerKey": {
      "type": "string"
    },
    "sharing": {
      "type": "integer"
    }
  }
}
```

#### Example

**Request:**

```http
GET /api/alerttrigger/x2d10b365?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
Referer: https://www.alsoenergy.com
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
    "key": "x2d1077ad",
    "lastChanged": "2025-11-16T09:35:59Z",
    "id": 1079213,
    "alertTypeKey": "AI358",
    "parentKey": "S51811",
    "name": "Report run-time alert",
    "description": "Alerts that are generated while running a report.",
    "isActive": true,
    "priorityLevel": 0,
    "checkSun": false,
    "checkTime": false,
    "checkNoSnow": false,
    "hasImpact": false,
    "impact": 0.0,
    "delayHoursTrigger": 0.0,
    "delayHoursResolve": 0.0,
    "startTime": 60,
    "endTime": 1380,
    "sunMinElevation": 0,
    "sunMinAzimuth": 0,
    "sunMaxAzimuth": 0,
    "parameters": [
        {
            "source": 3,
            "info": "",
            "readOnly": false,
            "index": 0,
            "name": "OK",
            "value": 0,
            "type": 1
        },
        {
            "source": 3,
            "info": "",
            "readOnly": false,
            "index": 0,
            "name": "Cause",
            "value": "",
            "type": 0
        }
    ],
    "ownerKey": "",
    "sharing": 0
}
```
