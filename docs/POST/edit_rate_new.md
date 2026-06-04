<a id="top"></a>
# /api/edit/rate/new

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
  "type": "string"
}
```

[Return to top](#top)

## General

```json
{
  "type": "object",
  "properties": {
    "content": {
      "type": "object",
      "properties": {}
    },
    "customSymbol": {
      "type": "string"
    },
    "customUnit": {
      "type": "string"
    },
    "key": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "parentKey": {
      "type": "string"
    },
    "rate": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "rateUnit": {
      "type": "number"
    },
    "tags": {
      "type": "object",
      "properties": {
        "attributes": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        },
        "key": {
          "type": "string"
        },
        "keywords": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        },
        "lastChanged": {
          "type": "object",
          "properties": {}
        },
        "notes": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        },
        "powerDisplays": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        }
      }
    },
    "ts": {
      "type": "string"
    },
    "type": {
      "type": "number"
    },
    "units": {
      "type": "number"
    },
    "userCurrency": {
      "type": "string"
    },
    "userSymbol": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
POST /api/edit/rate/new
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 05fc89
referer: https://apps.alsoenergy.com/powertrack/S70110/files/D104465/new-rate-config
```

**Payload:**

```json
"D104465"
```

**Response:**

```json
{
  "content": null,
  "customSymbol": "kWh",
  "customUnit": "Kilowatt hours",
  "key": "",
  "name": "",
  "parentKey": "D104465",
  "rate": [],
  "rateUnit": 11,
  "tags": {
    "attributes": [],
    "key": "",
    "keywords": [],
    "lastChanged": null,
    "notes": [],
    "powerDisplays": []
  },
  "ts": "2026-06-04T02:04:22Z",
  "type": 0,
  "units": 64,
  "userCurrency": "Dollars",
  "userSymbol": "$"
}
```

[Return to top](#top)

