<a id="top"></a>
# /api/fileconfig/F74099

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
GET /api/fileconfig/F74099
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 3fefeb
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/S38292/files/D36825/F74099
```

**Response:**

```json
{
  "key": "F74099",
  "name": "Inv 70 Std",
  "lastChanged": "2019-12-19T03:23:24Z",
  "parentKey": "D36825",
  "description": "",
  "allowExternal": true,
  "approveExternal": false,
  "fileType": 63,
  "language": "",
  "fileName": "Inv 70 Std.pvmodel",
  "revision": 2,
  "url": "/Content/DBFile?urltype=file&fidrev=F74099",
  "kind": "pvmodel",
  "canEdit": false,
  "canDownload": false,
  "tags": {
    "key": "{\"ancestorKey\":\"F74099\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\"]}",
    "lastChanged": null,
    "attributes": [],
    "keywords": [],
    "notes": [],
    "powerDisplays": []
  }
}
```

[Return to top](#top)

