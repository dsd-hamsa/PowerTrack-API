# /api/view/activealerts/activesummary/S67109

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
    "total": {
      "type": "number"
    },
    "siteSummary": {
      "type": "object",
      "properties": {}
    },
    "hardwareSummary": {
      "type": "object",
      "properties": {}
    }
  }
}
```

[Return to top](#apiviewactivealertsactivesummarys67109)

## Example

**Request:**

```http
GET /api/view/activealerts/activesummary/S67109?lastChanged=1900-01-01T00:00:00.000Z
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/S67109/overview/sites
```

**Response:**

```json
{
  "total": 0,
  "siteSummary": {},
  "hardwareSummary": {}
}
```

[Return to top](#apiviewactivealertsactivesummarys67109)

