# /api/view/sitesharelocations/S67109

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
    }
  }
}
```

[Return to top](#apiviewsitesharelocationss67109)

## Example

**Request:**

```http
GET /api/view/sitesharelocations/S67109?lastChanged=2025-12-22T17:40:11Z
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/S67109/administration/config
```

**Response:**

```json
{
  "key": "S67109",
  "lastChanged": "2025-12-22T22:00:03Z",
  "primaryLocation": {
    "customerKey": "C20909"
  },
  "additionalLocations": []
}
```

[Return to top](#apiviewsitesharelocationss67109)

