<a id="top"></a>
# /api/node/{site_id}

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
      "type": "string"
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
GET /api/node/S68143?lastChanged=2025-12-22T22:01:11Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/S68143/administration/config
```

**Response:**

```json
{
  "flags": 0,
  "icon": "Site",
  "isHidden": false,
  "key": "S68143",
  "kind": "site",
  "lastChanged": "2025-12-22T22:02:50Z",
  "name": "*** LOST?* THD CA - 2304 Monterey Park",
  "parentKey": "C25228",
  "path": [
    "C8458",
    "C25228"
  ],
  "permissions": 27,
  "sort": 2147483647,
  "subKind": 0,
  "validationStatus": 1
}
```

[Return to top](#top)

