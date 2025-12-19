# Endpoint 3

[← Back to Index](../README.md)


### `/api/applinks`

**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 3  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "appLinks": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {}
      }
    },
    "email": {
      "type": "string"
    }
  }
}
```

#### Example

**Request:**

```http
GET /api/applinks
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "appLinks": [
    {
      "appLink": 1,
      "description": "Monitor, control, and optimize clean energy portfolio.",
      "id": "2SLDzzCpqTW2",
      "name": "PowerTrack",
      "url": "/powertrack"
    }
  ],
  "email": "josh.hamsa@dsdrenewables.com"
}
```

