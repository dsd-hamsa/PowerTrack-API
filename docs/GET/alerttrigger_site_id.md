# /api/alerttrigger/S67109

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [Response Structure](#response-structure)
- [Example](#example)

## Response Structure

```json
{
  "type": "object",
  "properties": {
    "assetCode": {
      "type": "object"
    },
    "calculatedCapacity": {
      "type": "number"
    },
    "capacity": {
      "type": "object"
    },
    "defaultTriggers": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "key": {
      "type": "string"
    },
    "lastChanged": {
      "type": "string"
    },
    "triggers": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    }
  }
}
```

[Return to top](#apialerttriggers67109)

## Example

**Request:**

```http
GET /api/alerttrigger/S67109?lastChanged=2025-12-22T19:21:53Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/S67109/administration/alertsettings
```

**Response:**

```json
{
  "assetCode": null,
  "calculatedCapacity": -1,
  "capacity": null,
  "defaultTriggers": [],
  "key": "S67109",
  "lastChanged": "2025-12-22T17:42:15Z",
  "triggers": []
}
```

[Return to top](#apialerttriggers67109)

