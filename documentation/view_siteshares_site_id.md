# Endpoint 56

[← Back to Index](../README.md)


### `/api/view/siteshares/{site_id}`

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
    "rows": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {}
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
GET /api/view/siteshares/S68624?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "key": "S68624",
  "lastChanged": "2025-12-19T19:58:03Z",
  "rows": [
    {
      "canControl": false,
      "canEdit": true,
      "canManage": true,
      "canView": true,
      "direction": 2,
      "ownerCustomerKey": "C8458",
      "ownerCustomerName": "Distributed Solar Development",
      "sharedToCustomerKey": "C11056",
      "sharedToCustomerName": "Solar Optimum",
      "siteKey": "S68624",
      "siteName": "Six Flags - Magic Mountain"
    }
  ]
}
```

---

