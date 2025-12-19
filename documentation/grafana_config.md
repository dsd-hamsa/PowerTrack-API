# Endpoint 13

[← Back to Index](../README.md)


### `/api/grafana/config`

**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 3  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string"
    },
    "appName": {
      "type": "integer"
    }
  }
}
```

#### Example

**Request:**

```http
GET /api/grafana/config
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "appName": 47,
  "authorization": "Basic aW5nZXN0OnczZ2xiSXgzRllGMUdwemlXVk0x"
}
```

