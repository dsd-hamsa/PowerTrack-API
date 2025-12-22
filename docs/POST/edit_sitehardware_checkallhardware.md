# /api/edit/sitehardware/checkallhardware

[← Back to Index](../README.md)

**Methods:** POST
**Status Codes:** 200
**Call Count:** 1

## Table of Contents

- [Payload Structure](#payload-structure)
- [Response Structure](#response-structure)
- [Example](#example)

## Payload Structure

```json
{
  "type": "object",
  "properties": {
    "key": {
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

## Response Structure

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
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Content-Type: application/json
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/S67109/administration/hardware/list
```

**Payload:**

```json
{
  "key": "S67109",
  "fixCodes": []
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

