# /api/node/{hardware_id}

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

[Return to top](#apinode{hardware_id})

## Example

**Request:**

```http
GET /api/node/H511568?lastChanged=2025-12-22T19:21:26Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H511568/administration/config
```

**Response:**

```json
{
  "flags": 0,
  "icon": "https://www.alsoenergy.com/pub/Images/Device/19880.png",
  "isHidden": false,
  "key": "H511568",
  "kind": "hardware",
  "lastChanged": "2025-12-22T19:21:53Z",
  "name": "INVERTER 1",
  "parentKey": "S68143",
  "path": [
    "C8458",
    "C25228",
    "S68143"
  ],
  "permissions": 27,
  "sort": 11,
  "subKind": 1,
  "validationStatus": 0
}
```

[Return to top](#apinode{hardware_id})

