<a id="top"></a>
# /api/reportconfig/new/querycolumnheader/0

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
    "index": {
      "type": "number"
    },
    "name": {
      "type": "string"
    },
    "type": {
      "type": "number"
    },
    "value": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/reportconfig/new/querycolumnheader/0
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 05fc89
referer: https://apps.alsoenergy.com/powertrack/C16295/reports/reportconfigs/F221210
```

**Response:**

```json
{
  "index": 0,
  "name": "",
  "type": 0,
  "value": ""
}
```

[Return to top](#top)

