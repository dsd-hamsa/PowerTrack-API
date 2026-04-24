<a id="top"></a>
# /api/reporting

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 401, 401, 200, 200  

## Table of Contents

- [General](#general)
- [Example](#example)

## General

```json
{
  "type": "object",
  "properties": {
    "canAddAutoReport": {
      "type": "boolean"
    },
    "canAddEmailReport": {
      "type": "boolean"
    },
    "canAddSummaryReport": {
      "type": "boolean"
    },
    "canAddUserReport": {
      "type": "boolean"
    },
    "canEditAutoReport": {
      "type": "boolean"
    },
    "views": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/reporting
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 05fc89
referer: https://apps.alsoenergy.com/powertrack/S60134/reports/reportconfigs
```

[Return to top](#top)

