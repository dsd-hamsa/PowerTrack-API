<a id="top"></a>
# /api/folderconfig

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
    "key": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "parentKey": {
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
    "editPermission": {
      "type": "number"
    },
    "key": {
      "type": "string"
    },
    "lastChanged": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "newNote": {
      "type": "string"
    },
    "ownerKey": {
      "type": "string"
    },
    "parentKey": {
      "type": "string"
    },
    "permission": {
      "type": "number"
    },
    "roleEditPermission": {
      "type": "number"
    },
    "rolePermission": {
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
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
POST /api/folderconfig
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 05fc89
referer: https://apps.alsoenergy.com/powertrack/S70110/files/site
```

**Payload:**

```json
{
  "key": "",
  "name": "Rate",
  "parentKey": "S70110"
}
```

**Response:**

```json
{
  "editPermission": 1,
  "key": "D104465",
  "lastChanged": "2026-06-04T02:04:08Z",
  "name": "Rate",
  "newNote": "",
  "ownerKey": "",
  "parentKey": "S70110",
  "permission": 1,
  "roleEditPermission": 0,
  "rolePermission": 0,
  "tags": {
    "attributes": [],
    "key": "{\"ancestorKey\":\"D104465\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\"]}",
    "keywords": [],
    "lastChanged": null,
    "notes": [],
    "powerDisplays": []
  }
}
```

[Return to top](#top)

