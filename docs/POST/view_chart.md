# /api/view/chart

[← Back to Index](../logs.md)

**Methods:** POST  
**Status Codes:** 400  

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
    "chartType": {
      "type": "number"
    },
    "context": {
      "type": "string"
    },
    "end": {
      "type": "string"
    },
    "query": {
      "type": "object"
    },
    "sectionCode": {
      "type": "number"
    },
    "source": {
      "type": "string"
    },
    "start": {
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
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/S67109/overview/dashboard
```

**Payload:**

```json
{
  "binSize": null,
  "chartType": 255,
  "context": "site",
  "end": "2025-12-22",
  "query": null,
  "sectionCode": -1,
  "source": [
    "S67109"
  ],
  "start": "2025-12-20"
}
```

[Return to top](#apiviewchart)

