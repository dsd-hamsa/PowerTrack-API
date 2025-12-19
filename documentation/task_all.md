# `/api/task/all`

[← Back to Index](../README.md)



**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 9  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "lastChanged": {
      "type": "string"
    },
    "tasks": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "key": {
      "type": "string"
    }
  }
}
```

#### Example

**Request:**

```http
GET /api/task/all?lastChanged=2025-12-19T20:22:13Z
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
Referer: https://www.alsoenergy.com
```

**Response:**

```json
{
  "key": "all",
  "lastChanged": "2025-12-19T20:35:14Z",
  "tasks": []
}
```

