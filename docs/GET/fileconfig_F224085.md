<a id="top"></a>
# /api/fileconfig/F224085

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
    "key": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "lastChanged": {
      "type": "string"
    },
    "parentKey": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "allowExternal": {
      "type": "boolean"
    },
    "approveExternal": {
      "type": "boolean"
    },
    "fileType": {
      "type": "number"
    },
    "language": {
      "type": "string"
    },
    "fileName": {
      "type": "string"
    },
    "revision": {
      "type": "number"
    },
    "url": {
      "type": "string"
    },
    "kind": {
      "type": "string"
    },
    "canEdit": {
      "type": "boolean"
    },
    "canDownload": {
      "type": "boolean"
    },
    "tags": {
      "type": "object",
      "properties": {
        "key": {
          "type": "string"
        },
        "lastChanged": {
          "type": "object",
          "properties": {}
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
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/fileconfig/F224085
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 05fc89
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/S70110/files/D104465/F224085
```

**Response:**

```json
{
  "key": "F224085",
  "name": "PPA Rate",
  "lastChanged": "2026-06-04T02:12:42Z",
  "parentKey": "D104465",
  "description": "",
  "allowExternal": true,
  "approveExternal": false,
  "fileType": 18,
  "language": "",
  "fileName": "PPA Rate.rate",
  "revision": 1,
  "url": "/Content/DBFile?urltype=file&fidrev=F224085",
  "kind": "rate",
  "canEdit": false,
  "canDownload": false,
  "tags": {
    "key": "{\"ancestorKey\":\"F224085\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\"]}",
    "lastChanged": null,
    "attributes": [],
    "keywords": [],
    "notes": [],
    "powerDisplays": []
  }
}
```

[Return to top](#top)

