# Endpoint 29

[← Back to Index](../README.md)


### `/api/view/activealerts/activesummary/{site_id}`

**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 4  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "hardwareSummary": {
      "type": "object",
      "properties": {}
    },
    "total": {
      "type": "integer"
    },
    "siteSummary": {
      "type": "object",
      "properties": {}
    }
  }
}
```

#### Example

**Request:**

```http
GET /api/view/activealerts/activesummary/S38292?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "hardwareSummary": {},
  "siteSummary": {},
  "total": 0
}
```

