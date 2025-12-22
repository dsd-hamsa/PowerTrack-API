# /api/view/registeroffsets/H511568

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
    "registerOffsets": {
      "type": "object",
      "properties": {
        "index": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "registerAddress": {
          "type": "number"
        },
        "registerModbusName": {
          "type": "string"
        },
        "value": {
          "type": "number"
        }
      }
    }
  }
}
```

[Return to top](#apiviewregisteroffsetsh511568)

## Example

**Request:**

```http
GET /api/view/registeroffsets/H511568?lastChanged=2025-12-22T17:51:15Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H511568/administration/config
```

**Response:**

```json
{
  "key": "H511568",
  "lastChanged": "2025-12-22T19:21:53Z",
  "registerOffsets": [
    {
      "index": 0,
      "name": "",
      "registerAddress": 9000,
      "registerModbusName": "Active Energy Net Raw",
      "value": 0
    },
    {
      "index": 1,
      "name": "KWHoffset",
      "registerAddress": 30531,
      "registerModbusName": "Active Energy Net",
      "value": 0
    }
  ]
}
```

[Return to top](#apiviewregisteroffsetsh511568)

