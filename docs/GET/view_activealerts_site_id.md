<a id="top"></a>
# /api/view/activealerts/{site_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [General](#general)
- [Example](#example)

## General

```json
{
  "type": "object",
  "properties": {
    "enableProductionImpact": {
      "type": "boolean"
    },
    "key": {
      "type": "string"
    },
    "lastChanged": {
      "type": "string"
    },
    "list": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "merge": {
      "type": "boolean"
    },
    "mergeHash": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/view/activealerts/S66904?lastChanged=2026-04-17T18:09:06Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 05fc89
referer: https://apps.alsoenergy.com/powertrack/S66904/operations/alerts
```

**Response:**

```json
{
  "enableProductionImpact": false,
  "key": "S66904",
  "lastChanged": "2026-04-17T18:15:06Z",
  "list": [],
  "merge": true,
  "mergeHash": ""
}
```

[Return to top](#top)

