# `/api/view/activealerts/activesummary/{hardware_id}`

[← Back to Index](../README.md)



**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 5  

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
GET /api/view/activealerts/activesummary/H70619?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
Referer: https://www.alsoenergy.com
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

