# /api/node/U8014

[← Back to Index](../README.md)

**Methods:** GET
**Status Codes:** 200
**Call Count:** 1

## Table of Contents

- [Response Structure](#response-structure)
- [Example](#example)

## Response Structure

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
    "name": {
      "type": "string"
    },
    "sort": {
      "type": "number"
    },
    "icon": {
      "type": "string"
    },
    "flags": {
      "type": "number"
    },
    "parentKey": {
      "type": "string"
    },
    "kind": {
      "type": "string"
    },
    "subKind": {
      "type": "number"
    },
    "path": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "isHidden": {
      "type": "boolean"
    },
    "validationStatus": {
      "type": "number"
    },
    "permissions": {
      "type": "number"
    }
  }
}
```

[Return to top](#apinodeu8014)

## Example

**Request:**

```http
GET /api/node/U8014?lastChanged=2025-12-22T21:58:47Z
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/S67109/administration/notes
```

**Response:**

```json
{
  "key": "U8014",
  "lastChanged": "2022-08-10T20:08:25Z",
  "name": "HoldenROOT Caine (holdenroot)",
  "sort": 2147483647,
  "icon": "user",
  "flags": 0,
  "parentKey": "C1",
  "kind": "user",
  "subKind": 0,
  "path": [],
  "isHidden": false,
  "validationStatus": 0,
  "permissions": 0
}
```

[Return to top](#apinodeu8014)

