# Endpoint 24

[← Back to Index](../README.md)


### `/api/tag`

**Methods:** POST  
**Status Codes:** 200  
**Call Count:** 5  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "powerDisplays": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "lastChanged": {
      "type": "unknown"
    },
    "key": {
      "type": "string"
    },
    "keywords": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "attributes": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "notes": {
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
POST /api/tag?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "attributes": [],
  "key": "{\"ancestorKey\":\"H70618\",\"isRecursive\":false,\"types\":[\"note\"]}",
  "keywords": [],
  "lastChanged": null,
  "notes": [],
  "powerDisplays": []
}
```

