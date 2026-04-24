<a id="top"></a>
# /api/task/start

[← Back to Index](../logs.md)

**Methods:** POST  
**Status Codes:** 200, 200  

## Table of Contents

- [Payload Structure](#payload-structure)
- [General](#general)
- [Example](#example)

## Payload Structure

```json
{
  "type": "object",
  "properties": {
    "command": {
      "type": "number"
    },
    "reportConfig": {
      "type": "object",
      "properties": {}
    },
    "sourceKey": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

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
POST /api/task/start
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 05fc89
referer: https://apps.alsoenergy.com/powertrack/C16295/reports/reportconfigs/F221210
```

**Payload:**

```json
{
  "command": 2,
  "reportConfig": null,
  "sourceKey": "F221210"
}
```

**Response:**

```json
{
  "args": [],
  "command": 2,
  "icon": "reportwizard",
  "key": "1506199",
  "lastChanged": "2026-04-23T17:08:42Z",
  "message": "",
  "name": "Asset Operations Status List",
  "progress": 0,
  "resultType": "",
  "started": "2026-04-23T17:08:42Z",
  "status": 3
}
```

[Return to top](#top)

