<a id="top"></a>
# /api/view/alerthistory

[← Back to Index](../logs.md)

**Methods:** POST  
**Status Codes:** 0  

## Table of Contents

- [Payload Structure](#payload-structure)
- [Alert Type: General](#alert-type-general)
- [Example](#example)

## Payload Structure

```json
{
  "type": "object",
  "properties": {
    "from": {
      "type": "string"
    },
    "key": {
      "type": "string"
    },
    "offset": {
      "type": "number"
    },
    "to": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
POST /api/view/alerthistory?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/S66345/analysis/inverterheatmap
```

**Payload:**

```json
{
  "from": "2025-12-28",
  "key": "S66345",
  "offset": 480,
  "to": "2025-12-30"
}
```

[Return to top](#top)

