# /api/edit/sitehardware/S67109

[← Back to Index](../README.md)

**Methods:** GET
**Status Codes:** 200
**Call Count:** 1

## Table of Contents

- [Response Structure](#response-structure)
- [Example](#example)

## Response Structure

```json
{
  "type": "object",
  "properties": {
    "key": {
      "type": "string"
    },
    "ts": {
      "type": "string"
    },
    "hardware": {
      "type": "object",
      "properties": {
        "index": {
          "type": "number"
        },
        "ts": {
          "type": "string"
        },
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
        "serialNumber": {
          "type": "string"
        },
        "sort": {
          "type": "number"
        },
        "unitId": {
          "type": "number"
        },
        "settings": {
          "type": "object",
          "properties": {
            "originalValue": {
              "type": "string"
            },
            "index": {
              "type": "number"
            },
            "name": {
              "type": "string"
            },
            "value": {
              "type": "string"
            },
            "type": {
              "type": "number"
            }
          }
        },
        "port": {
          "type": "number"
        },
        "outOfService": {
          "type": "boolean"
        },
        "registerOffsets": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        }
      }
    },
    "updateHardwareErrors": {
      "type": "object"
    },
    "locusId": {
      "type": "string"
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
    "readOnly": {
      "type": "boolean"
    },
    "canAddHardware": {
      "type": "boolean"
    }
  }
}
```

[Return to top](#apieditsitehardwares67109)

## Example

**Request:**

```http
GET /api/edit/sitehardware/S67109
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/S67109/administration/hardware/list
```

**Response:**

```json
{
  "key": "S67109",
  "ts": "2023-09-25T18:12:36Z",
  "hardware": [
    {
      "index": 0,
      "ts": "2023-09-25T18:12:36Z",
      "address": "0",
      "description": "Solcast Virtual Weather Station",
      "driverId": 19015,
      "driverName": "External Weather Source (full)",
      "functionCode": 5,
      "functionId": "WS0",
      "gatewayId": "",
      "gatewayName": "",
      "hardwareKey": "H471291",
      "serialNumber": "",
      "sort": 0,
      "unitId": 0,
      "settings": [
        {
          "originalValue": "SolCast",
          "index": 0,
          "name": "Source",
          "value": "SolCast",
          "type": 0
        },
        {
          "originalValue": 1057,
          "index": 1,
          "name": "Weather",
          "value": 1057,
          "type": 1
        },
        {
          "originalValue": "0",
          "index": 2,
          "name": "MinTemp",
          "value": "0",
          "type": 0
        },
        {
          "originalValue": "160",
          "index": 3,
          "name": "MaxTemp",
          "value": "160",
          "type": 0
        }
      ],
      "port": 0,
      "outOfService": false,
      "registerOffsets": []
    }
  ],
  "updateHardwareErrors": null,
  "locusId": "",
  "syncToLocus": false,
  "taskKeys": [],
  "readOnly": false,
  "canAddHardware": false
}
```

[Return to top](#apieditsitehardwares67109)

