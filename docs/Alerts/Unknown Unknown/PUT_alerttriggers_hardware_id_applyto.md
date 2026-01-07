<a id="top"></a>
# /api/alerttriggers/{hardware_id}/applyto

[← Back to Index](../logs.md)

**Methods:** PUT  
**Status Codes:** 200  

## Table of Contents

- [Payload Structure](#payload-structure)
- [Alert Type: General](#alert-type-general)
- [Example](#example)

## Payload Structure

```json
{
  "type": "string"
}
```

[Return to top](#top)

## Example

**Request:**

```http
PUT /api/alerttriggers/H511568/applyto
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H511568/administration/alertsettings
```

**Payload:**

```json
[
  "H511569",
  "H511570",
  "H511571",
  "H511572",
  "H511573",
  "H511574"
]
```

[Return to top](#top)

