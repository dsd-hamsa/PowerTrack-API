# /api/view/sitelinks/{site_id}

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
    "key": {
      "type": "string"
    },
    "lastChanged": {
      "type": "string"
    },
    "list": {
      "type": "object",
      "properties": {
        "key": {
          "type": "string"
        },
        "kind": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      }
    }
  }
}
```

[Return to top](#apiviewsitelinks{site_id})

## Example

**Request:**

```http
GET /api/view/sitelinks/S67109?lastChanged=2025-12-16T16:34:59Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/S67109/overview/dashboard
```

**Response:**

```json
{
  "key": "S67109",
  "lastChanged": "2025-12-22T17:42:15Z",
  "list": [
    {
      "key": "https://hmi.alsoenergy.com/powerhmi/publicdisplay/05235e81-9247-4051-92b1-87b17a2b3c80/main?arg=NjcxMDk%3d&lang=en-US",
      "kind": "external",
      "name": "MiniSite"
    }
  ]
}
```

[Return to top](#apiviewsitelinks{site_id})

