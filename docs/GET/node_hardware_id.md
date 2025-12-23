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
GET /api/node/H511563?lastChanged=2025-12-23T00:09:09Z
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/H511563/administration/config
```

**Response:**

```json
{
  "key": "H511563",
  "lastChanged": "2025-12-23T00:09:52Z",
  "name": "Cell Modem (Pepwave)",
  "sort": 1,
  "icon": "https://www.alsoenergy.com/pub/Images/Device/19759.png",
  "flags": 0,
  "parentKey": "S68143",
  "kind": "hardware",
  "subKind": 31,
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

