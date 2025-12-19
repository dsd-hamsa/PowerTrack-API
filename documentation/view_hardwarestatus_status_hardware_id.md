# Endpoint 42

[← Back to Index](../README.md)


### `/api/view/hardwarestatus/status/{hardware_id}`

**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 5  

#### Response Structure

```json
{
  "type": "integer"
}
```

#### Example

**Request:**

```http
GET /api/view/hardwarestatus/status/H70619
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
1
```

