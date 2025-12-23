<a id="top"></a>
# /api/tag

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
    "ancestorKey": {
      "type": "string"
    },
    "isRecursive": {
      "type": "boolean"
    },
    "types": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## General

```json
{
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
      "type": "object",
      "properties": {
        "authorKey": {
          "type": "string"
        },
        "authorName": {
          "type": "string"
        },
        "date": {
          "type": "string"
        },
        "isEvent": {
          "type": "boolean"
        },
        "key": {
          "type": "string"
        },
        "kind": {
          "type": "string"
        },
        "parentKey": {
          "type": "string"
        },
        "text": {
          "type": "string"
        }
      }
    },
    "powerDisplays": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
POST /api/tag?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/S67109/administration/notes
```

**Payload:**

```json
{
  "ancestorKey": "S67109",
  "isRecursive": false,
  "types": [
    "note"
  ]
}
```

**Response:**

```json
{
  "attributes": [],
  "key": "{\"ancestorKey\":\"S67109\",\"isRecursive\":false,\"types\":[\"note\"]}",
  "keywords": [],
  "lastChanged": null,
  "notes": [
    {
      "authorKey": "U8014",
      "authorName": "HoldenROOT Caine",
      "date": "2024-02-06T22:47:07Z",
      "isEvent": true,
      "key": "x0583fa7e",
      "kind": "text",
      "parentKey": "S67109",
      "text": "Virtually linked Lowe's IL - 1711 - Naperville, IL into Lowe's IL - 1711 - Naperville, IL"
    }
  ],
  "powerDisplays": []
}
```

[Return to top](#top)

