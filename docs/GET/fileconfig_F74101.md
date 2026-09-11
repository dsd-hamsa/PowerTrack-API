<a id="top"></a>
# /api/fileconfig/F74101

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200, 200, 200, 200  

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
GET /api/fileconfig/F74101
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 3fefeb
referer: https://apps.alsoenergy.com/powertrack/S38292/files/D36825/F74101
```

**Response:**

```json
{
  "allowExternal": true,
  "approveExternal": false,
  "canDownload": false,
  "canEdit": false,
  "description": "",
  "fileName": "Inv 71 Std.pvmodel",
  "fileType": 63,
  "key": "F74101",
  "kind": "pvmodel",
  "language": "",
  "lastChanged": "2019-12-19T03:52:54Z",
  "name": "Inv 71 Std",
  "parentKey": "D36825",
  "revision": 1,
  "tags": {
    "attributes": [],
    "key": "{\"ancestorKey\":\"F74101\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\"]}",
    "keywords": [],
    "lastChanged": null,
    "notes": [],
    "powerDisplays": []
  },
  "url": "/Content/DBFile?urltype=file&fidrev=F74101"
}
```

[Return to top](#top)

