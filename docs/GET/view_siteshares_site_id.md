# /api/view/siteshares/S67109

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [Response Structure](#response-structure)
- [Example](#example)

## Response Structure

```json
{
  "type": "object",
  "properties": {
    "key": {
      "type": "string"
    },
    "lastChanged": {
      "type": "string"
    },
    "rows": {
      "type": "object",
      "properties": {
        "canControl": {
          "type": "boolean"
        },
        "canEdit": {
          "type": "boolean"
        },
        "canManage": {
          "type": "boolean"
        },
        "canView": {
          "type": "boolean"
        },
        "direction": {
          "type": "number"
        },
        "ownerCustomerKey": {
          "type": "string"
        },
        "ownerCustomerName": {
          "type": "string"
        },
        "sharedToCustomerKey": {
          "type": "string"
        },
        "sharedToCustomerName": {
          "type": "string"
        },
        "siteKey": {
          "type": "string"
        },
        "siteName": {
          "type": "string"
        }
      }
    }
  }
}
```

[Return to top](#apiviewsitesharess67109)

## Example

**Request:**

```http
GET /api/view/siteshares/S67109?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/S67109/administration/sharing
```

**Response:**

```json
{
  "key": "S67109",
  "lastChanged": "2025-12-22T22:00:08Z",
  "rows": [
    {
      "canControl": false,
      "canEdit": true,
      "canManage": true,
      "canView": true,
      "direction": 2,
      "ownerCustomerKey": "C8458",
      "ownerCustomerName": "Distributed Solar Development",
      "sharedToCustomerKey": "C8508",
      "sharedToCustomerName": "3 Megawatt",
      "siteKey": "S67109",
      "siteName": "Lowe's IL - 1711 - Naperville, IL"
    }
  ]
}
```

[Return to top](#apiviewsitesharess67109)

