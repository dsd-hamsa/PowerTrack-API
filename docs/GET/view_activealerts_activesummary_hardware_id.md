<a id="top"></a>
# /api/view/activealerts/activesummary/{hardware_id}

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

[Return to top](#top)

## Example

**Request:**

```http
GET /api/view/activealerts/activesummary/H511566?lastChanged=1900-01-01T00:00:00.000Z
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/H511566/administration/config
```

**Response:**

```json
{
  "total": 0,
  "siteSummary": {},
  "hardwareSummary": {}
}
```

[Return to top](#top)

