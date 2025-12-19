# `/api/view/sitesharelocations/{site_id}`

[← Back to Index](../README.md)



**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 1  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "lastChanged": {
      "type": "string"
    },
    "primaryLocation": {
      "type": "object",
      "properties": {
        "customerKey": {
          "type": "string"
        }
      }
    },
    "additionalLocations": {
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
GET /api/view/sitesharelocations/S68624?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
Referer: https://www.alsoenergy.com
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "additionalLocations": [],
  "key": "S68624",
  "lastChanged": "2025-12-19T19:57:56Z",
  "primaryLocation": {
    "customerKey": "C16294"
  }
}
```

