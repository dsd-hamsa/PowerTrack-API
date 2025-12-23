<a id="top"></a>
# /api/view/driversettings/list/{id}

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
    "name": {
      "type": "string"
    },
    "type": {
      "type": "number"
    },
    "value": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/view/driversettings/list/3588
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H511575/administration/config
```

**Response:**

```json
[
  {
    "name": "dev:ScalePOA",
    "type": 0,
    "value": "0.1"
  },
  {
    "name": "dev:POAOffset",
    "type": 0,
    "value": "0"
  },
  {
    "name": "dev:ScaleT",
    "type": 0,
    "value": "0.1"
  },
  {
    "name": "dev:ScaleWindSP",
    "type": 0,
    "value": "0.1"
  },
  {
    "name": "dev:RegOffset",
    "type": 0,
    "value": "0"
  },
  {
    "name": "dev:ScaleGHI",
    "type": 0,
    "value": "0.1"
  },
  {
    "name": "dev:GHIOffset",
    "type": 0,
    "value": "0"
  }
]
```

[Return to top](#top)

