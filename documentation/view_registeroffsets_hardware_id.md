# `/api/view/registeroffsets/{hardware_id}`

[← Back to Index](../README.md)



**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 3  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "registerOffsets": {
      "type": "array",
      "items": {
        "type": "object"
      }
    },
    "lastChanged": {
      "type": "string"
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
GET /api/view/registeroffsets/H504061?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
Referer: https://www.alsoenergy.com
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "key": "H504061",
  "lastChanged": "2025-11-25T22:15:24Z",
  "registerOffsets": [
    {
      "index": 0,
      "name": "KWHoffset",
      "registerAddress": 22,
      "registerModbusName": "Active Energy Gross",
      "value": 0
    },
    {
      "index": 1,
      "name": "",
      "registerAddress": 9999,
      "registerModbusName": "Active Energy Gross Raw",
      "value": 0
    }
  ]
}
```

