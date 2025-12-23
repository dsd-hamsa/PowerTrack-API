<a id="top"></a>
# /api/task/all

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
    "key": {
      "type": "string"
    },
    "lastChanged": {
      "type": "string"
    },
    "tasks": {
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
GET /api/task/all?lastChanged=2025-12-23T00:11:21Z
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/H511575/administration/config
```

**Response:**

```json
{
  "key": "all",
  "lastChanged": "2025-12-23T00:11:29Z",
  "tasks": []
}
```

[Return to top](#top)

