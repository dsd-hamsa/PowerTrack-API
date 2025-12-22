# /api/view/activealerts/activesummary/{hardware_id}

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
    "hardwareSummary": {
      "type": "object",
      "properties": {}
    },
    "siteSummary": {
      "type": "object",
      "properties": {}
    },
    "total": {
      "type": "number"
    }
  }
}
```

[Return to top](#apiviewactivealertsactivesummary{hardware_id})

## Example

**Request:**

```http
GET /api/view/activealerts/activesummary/H511568?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H511568/administration/alertsettings
```

**Response:**

```json
{
  "hardwareSummary": {},
  "siteSummary": {},
  "total": 0
}
```

[Return to top](#apiviewactivealertsactivesummary{hardware_id})

