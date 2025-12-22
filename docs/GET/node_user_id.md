# /api/node/{user_id}

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
    "flags": {
      "type": "number"
    },
    "icon": {
      "type": "string"
    },
    "isHidden": {
      "type": "boolean"
    },
    "key": {
      "type": "string"
    },
    "kind": {
      "type": "string"
    },
    "lastChanged": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "parentKey": {
      "type": "string"
    },
    "path": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "permissions": {
      "type": "number"
    },
    "sort": {
      "type": "number"
    },
    "subKind": {
      "type": "number"
    },
    "validationStatus": {
      "type": "number"
    }
  }
}
```

[Return to top](#apinode{user_id})

## Example

**Request:**

```http
GET /api/node/U8014?lastChanged=2025-12-22T21:58:47Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/S67109/administration/notes
```

**Response:**

```json
{
  "flags": 0,
  "icon": "user",
  "isHidden": false,
  "key": "U8014",
  "kind": "user",
  "lastChanged": "2022-08-10T20:08:25Z",
  "name": "HoldenROOT Caine (holdenroot)",
  "parentKey": "C1",
  "path": [],
  "permissions": 0,
  "sort": 2147483647,
  "subKind": 0,
  "validationStatus": 0
}
```

[Return to top](#apinode{user_id})

