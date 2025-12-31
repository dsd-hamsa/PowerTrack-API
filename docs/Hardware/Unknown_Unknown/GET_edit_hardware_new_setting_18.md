<a id="top"></a>
# /api/edit/hardware/new/setting/18

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
    "originalValue": {
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
GET /api/edit/hardware/new/setting/18
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H537773/administration/config
```

**Response:**

```json
{
  "index": 18,
  "name": "",
  "originalValue": "",
  "type": 0,
  "value": ""
}
```

[Return to top](#top)

