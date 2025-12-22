# /api/view/sitelinks/S67109

[← Back to Index](../README.md)

**Methods:** GET
**Status Codes:** 200
**Call Count:** 1

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
    "list": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "kind": {
          "type": "string"
        },
        "key": {
          "type": "string"
        }
      }
    }
  }
}
```

[Return to top](#apiviewsitelinkss67109)

## Example

**Request:**

```http
GET /api/view/sitelinks/S67109?lastChanged=2025-12-16T16:34:59Z
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/S67109/overview/dashboard
```

**Response:**

```json
{
  "key": "S67109",
  "lastChanged": "2025-12-22T17:42:15Z",
  "list": [
    {
      "name": "MiniSite",
      "kind": "external",
      "key": "https://hmi.alsoenergy.com/powerhmi/publicdisplay/05235e81-9247-4051-92b1-87b17a2b3c80/main?arg=NjcxMDk%3d&lang=en-US"
    }
  ]
}
```

[Return to top](#apiviewsitelinkss67109)

