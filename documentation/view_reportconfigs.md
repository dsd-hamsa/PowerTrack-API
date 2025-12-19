# `/api/view/reportconfigs`

[← Back to Index](../README.md)



**Methods:** POST  
**Status Codes:** 200  
**Call Count:** 3  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "lastChanged": {
      "type": "string"
    },
    "list": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "key": {
      "type": "string"
    },
    "isMore": {
      "type": "boolean"
    }
  }
}
```

#### Example

**Request:**

```http
POST /api/view/reportconfigs?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
Referer: https://www.alsoenergy.com
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "isMore": false,
  "key": "{\"key\":\"H504184\",\"filter\":\"\"}",
  "lastChanged": "1900-01-01T00:00:00Z",
  "list": []
}
```

