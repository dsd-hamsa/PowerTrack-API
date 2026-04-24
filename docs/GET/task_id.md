<a id="top"></a>
# /api/task/{id}

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
    "args": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "command": {
      "type": "number"
    },
    "icon": {
      "type": "string"
    },
    "key": {
      "type": "string"
    },
    "lastChanged": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "progress": {
      "type": "number"
    },
    "resultType": {
      "type": "string"
    },
    "started": {
      "type": "string"
    },
    "status": {
      "type": "number"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/task/1506194?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 05fc89
referer: https://apps.alsoenergy.com/powertrack/C16295/reports/reportconfigs/F221210
```

**Response:**

```json
{
  "args": [],
  "command": 2,
  "icon": "reportwizard",
  "key": "1506194",
  "lastChanged": "2026-04-23T17:02:57Z",
  "message": "",
  "name": "Asset Operations Status List",
  "progress": 0,
  "resultType": "",
  "started": "2026-04-23T17:02:53Z",
  "status": 3
}
```

[Return to top](#top)

