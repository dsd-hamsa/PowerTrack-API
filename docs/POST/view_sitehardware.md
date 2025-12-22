# /api/view/sitehardware

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
    "includeRegistersForHardwareTypes": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    }
  }
}
```

[Return to top](#apiviewsitehardware)

## Response Structure

```json
{
  "type": "string"
}
```

[Return to top](#apiviewsitehardware)

## Example

**Request:**

```http
POST /api/view/sitehardware?lastChanged=1900-01-01T00:00:00.000Z
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Content-Type: application/json
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/S68143/administration/config
```

**Payload:**

```json
{
  "key": "S68143",
  "includeRegistersForHardwareTypes": []
}
```

**Response:**

```json
"[Could not parse response]"
```

[Return to top](#apiviewsitehardware)

