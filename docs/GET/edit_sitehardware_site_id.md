<a id="top"></a>
# /api/edit/sitehardware/{site_id}

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
    "canAddHardware": {
      "type": "boolean"
    },
    "hardware": {
      "type": "object",
      "properties": {
        "address": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "driverId": {
          "type": "number"
        },
        "driverName": {
          "type": "string"
        },
        "functionCode": {
          "type": "number"
        },
        "functionId": {
          "type": "string"
        },
        "gatewayId": {
          "type": "string"
        },
        "gatewayName": {
          "type": "string"
        },
        "hardwareKey": {
          "type": "string"
        },
        "index": {
          "type": "number"
        },
        "outOfService": {
          "type": "boolean"
        },
        "port": {
          "type": "number"
        },
        "registerOffsets": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        },
        "serialNumber": {
          "type": "string"
        },
        "settings": {
          "type": "object",
          "properties": {
            "index": {
              "type": "number"
            },
            "name": {
              "type": "string"
            },
            "originalValue": {
              "type": "string"
            },
            "type": {
              "type": "number"
            },
            "value": {
              "type": "string"
            }
          }
        },
        "sort": {
          "type": "number"
        },
        "ts": {
          "type": "string"
        },
        "unitId": {
          "type": "number"
        }
      }
    },
    "key": {
      "type": "string"
    },
    "locusId": {
      "type": "string"
    },
    "readOnly": {
      "type": "boolean"
    },
    "syncToLocus": {
      "type": "boolean"
    },
    "taskKeys": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "ts": {
      "type": "string"
    },
    "updateHardwareErrors": {
      "type": "object",
      "properties": {}
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/edit/sitehardware/S67109
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/S67109/administration/hardware/list
```

**Response:**

```json
{
  "canAddHardware": false,
  "hardware": [
    {
      "address": "0",
      "description": "Solcast Virtual Weather Station",
      "driverId": 19015,
      "driverName": "External Weather Source (full)",
      "functionCode": 5,
      "functionId": "WS0",
      "gatewayId": "",
      "gatewayName": "",
      "hardwareKey": "H471291",
      "index": 0,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "Source",
          "originalValue": "SolCast",
          "type": 0,
          "value": "SolCast"
        },
        {
          "index": 1,
          "name": "Weather",
          "originalValue": 1057,
          "type": 1,
          "value": 1057
        },
        {
          "index": 2,
          "name": "MinTemp",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 3,
          "name": "MaxTemp",
          "originalValue": "160",
          "type": 0,
          "value": "160"
        }
      ],
      "sort": 0,
      "ts": "2023-09-25T18:12:36Z",
      "unitId": 0
    }
  ],
  "key": "S67109",
  "locusId": "",
  "readOnly": false,
  "syncToLocus": false,
  "taskKeys": [],
  "ts": "2023-09-25T18:12:36Z",
  "updateHardwareErrors": null
}
```

[Return to top](#top)

