# /api/tag

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

[Return to top](#apitag)

## Response Structure

```json
{
  "type": "object",
  "properties": {
    "key": {
      "type": "string"
    },
    "lastChanged": {
      "type": "object"
    },
    "attributes": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "keywords": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "notes": {
      "type": "object",
      "properties": {
        "key": {
          "type": "string"
        },
        "parentKey": {
          "type": "string"
        },
        "authorKey": {
          "type": "string"
        },
        "authorName": {
          "type": "string"
        },
        "date": {
          "type": "string"
        },
        "kind": {
          "type": "string"
        },
        "isEvent": {
          "type": "boolean"
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

[Return to top](#apitag)

## Example

**Request:**

```http
POST /api/tag?lastChanged=1900-01-01T00:00:00.000Z
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Content-Type: application/json
Accept: application/json
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
  "key": "{\"ancestorKey\":\"S67109\",\"isRecursive\":false,\"types\":[\"note\"]}",
  "lastChanged": null,
  "attributes": [],
  "keywords": [],
  "notes": [
    {
      "key": "x0583fa7e",
      "parentKey": "S67109",
      "authorKey": "U8014",
      "authorName": "HoldenROOT Caine",
      "date": "2024-02-06T22:47:07Z",
      "kind": "text",
      "isEvent": true,
      "text": "Virtually linked Lowe's IL - 1711 - Naperville, IL into Lowe's IL - 1711 - Naperville, IL"
    }
  ],
  "powerDisplays": []
}
```

[Return to top](#apitag)

