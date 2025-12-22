# /api/view/sitehardware

[← Back to Index](../logs.md)

**Methods:** POST  
**Status Codes:** 200  

## Table of Contents

- [Payload Structure](#payload-structure)
- [Response Structure](#response-structure)
- [Example](#example)

## Payload Structure

```json
{
  "type": "object",
  "properties": {
    "includeRegistersForHardwareTypes": {
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
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/S68143/administration/config
```

**Payload:**

```json
{
  "includeRegistersForHardwareTypes": [],
  "key": "S68143"
}
```

**Response:**

```json
"[Could not parse response]"
```

[Return to top](#apiviewsitehardware)

