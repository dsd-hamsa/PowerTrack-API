<a id="top"></a>
# /api/view/driversettings/list/{id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200, 200  

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
    "value": {
      "type": "string"
    },
    "type": {
      "type": "number"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/view/driversettings/list/3588
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/H511575/administration/config
```

**Response:**

```json
[
  {
    "name": "dev:ScalePOA",
    "value": "0.1",
    "type": 0
  },
  {
    "name": "dev:POAOffset",
    "value": "0",
    "type": 0
  },
  {
    "name": "dev:ScaleT",
    "value": "0.1",
    "type": 0
  },
  {
    "name": "dev:ScaleWindSP",
    "value": "0.1",
    "type": 0
  },
  {
    "name": "dev:RegOffset",
    "value": "0",
    "type": 0
  },
  {
    "name": "dev:ScaleGHI",
    "value": "0.1",
    "type": 0
  },
  {
    "name": "dev:GHIOffset",
    "value": "0",
    "type": 0
  }
]
```

[Return to top](#top)

