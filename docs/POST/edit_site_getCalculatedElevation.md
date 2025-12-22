# /api/edit/site/getCalculatedElevation

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
    "latitude": {
      "type": "number"
    },
    "longitude": {
      "type": "number"
    }
  }
}
```

[Return to top](#apieditsitegetcalculatedelevation)

## General

```json
{
  "type": "number"
}
```

[Return to top](#apieditsitegetcalculatedelevation)

## Example

**Request:**

```http
POST /api/edit/site/getCalculatedElevation
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/S68143/administration/config
```

**Payload:**

```json
{
  "latitude": 34.0371297,
  "longitude": -118.1014776
}
```

**Response:**

```json
399
```

[Return to top](#apieditsitegetcalculatedelevation)

