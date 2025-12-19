# `/api/view/activealerts/{site_id}`

[← Back to Index](../README.md)



**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 2  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "lastChanged": {
      "type": "string"
    },
    "key": {
      "type": "string"
    },
    "enableProductionImpact": {
      "type": "boolean"
    },
    "merge": {
      "type": "boolean"
    },
    "mergeHash": {
      "type": "string"
    },
    "list": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    }
  }
}
```

#### Example

**Request:**

```http
GET /api/view/activealerts/S38292?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
Referer: https://www.alsoenergy.com
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "enableProductionImpact": false,
  "key": "S38292",
  "lastChanged": "2025-12-19T20:00:36Z",
  "list": [],
  "merge": false,
  "mergeHash": ""
}
```

