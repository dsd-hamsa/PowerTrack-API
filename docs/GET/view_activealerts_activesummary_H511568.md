# /api/view/activealerts/activesummary/H511568

[← Back to Index](../README.md)

**Methods:** GET
**Status Codes:** 200
**Call Count:** 1

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

## Example

**Request:**

```http
GET /api/view/activealerts/activesummary/H511568?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H511568/administration/config
```

**Response:**

```json
{
  "hardwareSummary": {},
  "siteSummary": {},
  "total": 0
}
```

