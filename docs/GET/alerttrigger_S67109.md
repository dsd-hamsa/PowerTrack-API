# /api/alerttrigger/S67109

[← Back to Index](../README.md)

**Methods:** GET
**Status Codes:** 200
**Call Count:** 1

## Table of Contents

- [Response Structure](#response-structure)
- [Example](#example)

## Response Structure

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
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/S67109/administration/alertsettings
```

**Response:**

```json
{
  "key": "S67109",
  "lastChanged": "2025-12-22T17:42:15Z",
  "assetCode": null,
  "calculatedCapacity": -1,
  "capacity": null,
  "defaultTriggers": [],
  "triggers": []
}
```

[Return to top](#apialerttriggers67109)

