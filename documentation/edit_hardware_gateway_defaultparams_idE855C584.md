# Endpoint 8

[← Back to Index](../README.md)


### `/api/edit/hardware/gateway/defaultparams/{id}E855C584`

**Methods:** POST  
**Status Codes:** 200  
**Call Count:** 1  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "enable": {
      "type": "boolean"
    },
    "server": {
      "type": "string"
    },
    "client": {
      "type": "string"
    },
    "ip2": {
      "type": "string"
    },
    "lastUpdate": {
      "type": "string"
    },
    "ip1": {
      "type": "string"
    },
    "debug": {
      "type": "boolean"
    },
    "lastBoot": {
      "type": "string"
    },
    "gatewayParams": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {}
      }
    },
    "gatewayId": {
      "type": "string"
    }
  }
}
```

#### Example

**Request:**

```http
POST /api/edit/hardware/gateway/defaultparams/0090E855C584
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "client": "",
  "debug": false,
  "enable": false,
  "gatewayId": "0090E855C584",
  "gatewayParams": [
    {
      "name": "rate",
      "value": "200"
    },
    {
      "name": "path_config",
      "value": "/AEservlet/modbus.handler"
    },
    {
      "name": "upload",
      "value": "/AEservlet/modbus.handler"
    },
    {
      "name": "path_firmware",
      "value": "/AEservlet/firmware.handler"
    },
    {
      "name": "logEmail",
      "value": ""
    }
  ],
  "ip1": "",
  "ip2": "",
  "lastBoot": "",
  "lastUpdate": "",
  "server": ""
}
```

