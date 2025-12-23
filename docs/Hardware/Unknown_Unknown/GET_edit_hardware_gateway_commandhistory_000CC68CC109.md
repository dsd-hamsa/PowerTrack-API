<a id="top"></a>
# /api/edit/hardware/gateway/commandhistory/000CC68CC109

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
    "data": {
      "type": "string"
    },
    "id": {
      "type": "number"
    },
    "insertTime": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "parameters": {
      "type": "string"
    },
    "status": {
      "type": "string"
    },
    "updateTime": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/edit/hardware/gateway/commandhistory/000CC68CC109
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: e4dcd1
referer: https://apps.alsoenergy.com/powertrack/H419928/administration/config
```

**Response:**

```json
[
  {
    "data": "file not found",
    "id": 183796,
    "insertTime": "2023-10-10T17:45:49.2110398+00:00",
    "name": "deletefile",
    "parameters": "\\SDMemory\\AlsoEnergy\\device.config",
    "status": "fail",
    "updateTime": "2023-10-10T17:50:01.4869891+00:00"
  }
]
```

[Return to top](#top)

