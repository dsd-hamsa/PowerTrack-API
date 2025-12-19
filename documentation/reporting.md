# Endpoint 23

[← Back to Index](../README.md)


### `/api/reporting`

**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 3  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "canEditAutoReport": {
      "type": "boolean"
    },
    "canAddEmailReport": {
      "type": "boolean"
    },
    "canAddSummaryReport": {
      "type": "boolean"
    },
    "canAddAutoReport": {
      "type": "boolean"
    },
    "views": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "canAddUserReport": {
      "type": "boolean"
    }
  }
}
```

#### Example

**Request:**

```http
GET /api/reporting
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "canAddAutoReport": false,
  "canAddEmailReport": false,
  "canAddSummaryReport": false,
  "canAddUserReport": false,
  "canEditAutoReport": false,
  "views": []
}
```

