# Endpoint 2

[← Back to Index](../README.md)


### `/api/alerttrigger/{site_id}`

**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 1  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "capacity": {
      "type": "unknown"
    },
    "assetCode": {
      "type": "unknown"
    },
    "lastChanged": {
      "type": "string"
    },
    "defaultTriggers": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "key": {
      "type": "string"
    },
    "calculatedCapacity": {
      "type": "integer"
    },
    "triggers": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    }
  }
}
```

#### Example

**Request:**

```http
GET /api/alerttrigger/S68624?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "assetCode": null,
  "calculatedCapacity": -1,
  "capacity": null,
  "defaultTriggers": [],
  "key": "S68624",
  "lastChanged": "2025-12-16T16:45:50Z",
  "triggers": []
}
```

