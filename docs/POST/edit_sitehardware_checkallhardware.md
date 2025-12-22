# /api/edit/sitehardware/checkallhardware

[← Back to Index](../logs.md)

**Methods:** POST  
**Status Codes:** 200  

## Table of Contents

- [Payload Structure](#payload-structure)
- [General](#general)
- [Example](#example)

## Payload Structure

```json
{
  "type": "object",
  "properties": {
    "fixCodes": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "key": {
      "type": "string"
    }
  }
}
```

[Return to top](#apieditsitehardwarecheckallhardware)

## General

```json
{
  "type": "object",
  "properties": {
    "analyzerResults": {
      "type": "string"
    },
    "fixCodes": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    }
  }
}
```

[Return to top](#apieditsitehardwarecheckallhardware)

## Example

**Request:**

```http
POST /api/edit/sitehardware/checkallhardware
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/S67109/administration/hardware/list
```

**Payload:**

```json
{
  "fixCodes": [],
  "key": "S67109"
}
```

**Response:**

```json
{
  "analyzerResults": [
    "<b>Configuration: All tests passed"
  ],
  "fixCodes": []
}
```

[Return to top](#apieditsitehardwarecheckallhardware)

