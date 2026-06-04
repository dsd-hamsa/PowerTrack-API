<a id="top"></a>
# /api/fileconfig/F224084

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
    "allowExternal": {
      "type": "boolean"
    },
    "approveExternal": {
      "type": "boolean"
    },
    "canDownload": {
      "type": "boolean"
    },
    "canEdit": {
      "type": "boolean"
    },
    "description": {
      "type": "string"
    },
    "fileName": {
      "type": "string"
    },
    "fileType": {
      "type": "number"
    },
    "key": {
      "type": "string"
    },
    "kind": {
      "type": "string"
    },
    "language": {
      "type": "string"
    },
    "lastChanged": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "parentKey": {
      "type": "string"
    },
    "revision": {
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
    "url": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/fileconfig/F224084
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 05fc89
referer: https://apps.alsoenergy.com/powertrack/S66746/files/D104464/F224084
```

**Response:**

```json
{
  "allowExternal": true,
  "approveExternal": false,
  "canDownload": false,
  "canEdit": false,
  "description": "",
  "fileName": "NEE - McCue Community Solar.rate",
  "fileType": 18,
  "key": "F224084",
  "kind": "rate",
  "language": "",
  "lastChanged": "2026-06-04T01:36:52Z",
  "name": "NEE - McCue Community Solar",
  "parentKey": "D104464",
  "revision": 2,
  "tags": {
    "attributes": [],
    "key": "{\"ancestorKey\":\"F224084\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\"]}",
    "keywords": [],
    "lastChanged": null,
    "notes": [],
    "powerDisplays": []
  },
  "url": "/Content/DBFile?urltype=file&fidrev=F224084"
}
```

[Return to top](#top)

