<a id="top"></a>
# /api/node/{customer_id}

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

[Return to top](#top)

## Example

**Request:**

```http
GET /api/node/C2?lastChanged=2026-01-21T22:46:08Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 442641
referer: https://apps.alsoenergy.com/powertrack/C25228/administration/config
```

**Response:**

```json
{
  "flags": 0,
  "icon": "CustAdmin",
  "isHidden": false,
  "key": "C2",
  "kind": "customer",
  "lastChanged": "2026-01-21T22:46:08Z",
  "name": "Also Energy",
  "parentKey": "C1",
  "path": [],
  "permissions": 0,
  "sort": 2147483647,
  "subKind": 0,
  "validationStatus": 0
}
```

[Return to top](#top)

