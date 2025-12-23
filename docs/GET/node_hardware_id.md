<a id="top"></a>
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
      "type": "string"
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

[Return to top](#top)

## Example

**Request:**

```http
GET /api/node/H511565?lastChanged=2025-12-23T00:10:37Z
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/H511565/administration/config
```

**Response:**

```json
{
  "key": "H511565",
  "lastChanged": "2025-12-23T00:10:58Z",
  "name": "Accuvim II - PV Prod Meter - M0",
  "sort": 3,
  "icon": "https://www.alsoenergy.com/pub/Images/meter.png",
  "flags": 0,
  "parentKey": "S68143",
  "kind": "hardware",
  "subKind": 2,
  "path": [
    "C8458",
    "C25228",
    "S68143"
  ],
  "isHidden": false,
  "validationStatus": 0,
  "permissions": 27
}
```

[Return to top](#top)

