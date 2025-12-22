# /api/view/chart

[← Back to Index](../README.md)

**Methods:** POST
**Status Codes:** 400
**Call Count:** 1

## Table of Contents

- [Payload Structure](#payload-structure)
- [Example](#example)

## Payload Structure

```json
{
  "type": "object",
  "properties": {
    "binSize": {
      "type": "object"
    },
    "context": {
      "type": "string"
    },
    "start": {
      "type": "string"
    },
    "end": {
      "type": "string"
    },
    "sectionCode": {
      "type": "number"
    },
    "query": {
      "type": "object"
    },
    "chartType": {
      "type": "number"
    },
    "source": {
      "type": "string"
    }
  }
}
```

[Return to top](#apiviewchart)

## Example

**Request:**

```http
POST /api/view/chart?lastChanged=1900-01-01T00:00:00.000Z
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Content-Type: application/json
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/S67109/overview/dashboard
```

**Payload:**

```json
{
  "binSize": null,
  "context": "site",
  "start": "2025-12-20",
  "end": "2025-12-22",
  "sectionCode": -1,
  "query": null,
  "chartType": 255,
  "source": [
    "S67109"
  ]
}
```

[Return to top](#apiviewchart)

