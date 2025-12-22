# /api/view/sitesharelocations/{site_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [General](#general)
- [Example](#example)

## General

```json
{
  "type": "object",
  "properties": {
    "additionalLocations": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "key": {
      "type": "string"
    },
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
    }
  }
}
```

[Return to top](#apiviewsitesharelocations{site_id})

## Example

**Request:**

```http
GET /api/view/sitesharelocations/S67109?lastChanged=2025-12-22T17:40:11Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/S67109/administration/config
```

**Response:**

```json
{
  "additionalLocations": [],
  "key": "S67109",
  "lastChanged": "2025-12-22T22:00:03Z",
  "primaryLocation": {
    "customerKey": "C20909"
  }
}
```

[Return to top](#apiviewsitesharelocations{site_id})

