# /api/edit/sitehardware

[← Back to Index](../README.md)

**Methods:** PUT
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

[Return to top](#apieditsitehardware)

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
      "type": "array",
      "items": {
        "type": "unknown"
      }
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

[Return to top](#apieditsitehardware)

## Example

**Request:**

```http
PUT /api/edit/sitehardware
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Content-Type: application/json
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/S68143/administration/hardware/list
```

**Payload:**

```json
{
  "key": "S68143",
  "ts": "2025-12-22T19:21:53Z",
  "hardware": [
    {
      "index": 2,
      "ts": "2025-03-13T18:25:44Z",
      "address": "0",
      "description": "Cell Modem (Pepwave)",
      "driverId": 19759,
      "driverName": "Pepwave Wireless SNMP",
      "functionCode": 31,
      "functionId": "CE0",
      "gatewayId": "1932-1C3F-8F71",
      "gatewayName": "",
      "hardwareKey": "H511563",
      "serialNumber": "1932-1C3F-8F71",
      "sort": 1,
      "unitId": 0,
      "settings": [
        {
          "originalValue": "N/A",
          "index": 0,
          "name": "dev:portMode",
          "value": "N/A",
          "type": 0
        },
        {
          "originalValue": "ae",
          "index": 1,
          "name": "dev:community",
          "value": "ae",
          "type": 0
        },
        {
          "originalValue": "alsoenergy",
          "index": 2,
          "name": "dev:authentication",
          "value": "alsoenergy",
          "type": 0
        },
        {
          "originalValue": "alsoenergy",
          "index": 3,
          "name": "dev:privacy",
          "value": "alsoenergy",
          "type": 0
        },
        {
          "originalValue": "CE0",
          "index": 4,
          "name": "ShortName",
          "value": "CE0",
          "type": 0
        }
      ],
      "port": 0,
      "outOfService": false,
      "registerOffsets": []
    },
    {
      "index": 3,
      "ts": "2024-07-15T13:27:46Z",
      "address": "0",
      "description": "PowerLogger 1000",
      "driverId": 325,
      "driverName": "PowerLogger 1000",
      "functionCode": 10,
      "functionId": "GW0",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511564",
      "serialNumber": "",
      "sort": 2,
      "unitId": 0,
      "settings": [
        {
          "originalValue": "N/A",
          "index": 0,
          "name": "dev:portMode",
          "value": "N/A",
          "type": 0
        },
        {
          "originalValue": "200",
          "index": 1,
          "name": "dev:rate",
          "value": "200",
          "type": 0
        },
        {
          "originalValue": "GW0",
          "index": 2,
          "name": "ShortName",
          "value": "GW0",
          "type": 0
        }
      ],
      "port": 0,
      "outOfService": false,
      "registerOffsets": []
    },
    {
      "index": 4,
      "ts": "2024-07-15T13:28:32Z",
      "address": "192.168.13.41",
      "description": "Accuvim II - PV Prod Meter - M0",
      "driverId": 19601,
      "driverName": "AccuEnergy Acuvim II(R-D-5A) Primary Mode(SS)Standard",
      "functionCode": 2,
      "functionId": "PM0",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511565",
      "serialNumber": "AHB54010438",
      "sort": 3,
      "unitId": 1,
      "settings": [
        {
          "originalValue": "N/A",
          "index": 0,
          "name": "dev:portMode",
          "value": "N/A",
          "type": 0
        },
        {
          "originalValue": 1,
          "index": 1,
          "name": "dev:UnitID",
          "value": 1,
          "type": 1
        },
        {
          "originalValue": 502,
          "index": 2,
          "name": "dev:TCPport",
          "value": 502,
          "type": 1
        },
        {
          "originalValue": 0,
          "index": 3,
          "name": "dev:RegOffset",
          "value": 0,
          "type": 1
        },
        {
          "originalValue": 0.001,
          "index": 4,
          "name": "dev:ScaleKW",
          "value": 0.001,
          "type": 2
        },
        {
          "originalValue": "0",
          "index": 5,
          "name": "dev:Reverse",
          "value": "0",
          "type": 0
        },
        {
          "originalValue": 0.1,
          "index": 6,
          "name": "dev:ScaleKWH",
          "value": 0.1,
          "type": 2
        },
        {
          "originalValue": 1,
          "index": 7,
          "name": "dev:ScaleAmps",
          "value": 1,
          "type": 2
        },
        {
          "originalValue": 1,
          "index": 8,
          "name": "dev:ScaleVolts",
          "value": 1,
          "type": 2
        },
        {
          "originalValue": "PM0",
          "index": 9,
          "name": "ShortName",
          "value": "PM0",
          "type": 0
        }
      ],
      "port": 0,
      "outOfService": false,
      "registerOffsets": [
        {
          "index": 0,
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Delivered Raw",
          "name": "",
          "value": 0
        },
        {
          "index": 1,
          "registerAddress": 9010,
          "registerModbusName": "Active Energy Received Raw",
          "name": "",
          "value": 0
        },
        {
          "index": 2,
          "registerAddress": 9020,
          "registerModbusName": "Active Energy Net Raw",
          "name": "",
          "value": 0
        },
        {
          "index": 3,
          "registerAddress": 16456,
          "registerModbusName": "Import energy",
          "name": "KWHrecOffset",
          "value": 0
        },
        {
          "index": 4,
          "registerAddress": 16458,
          "registerModbusName": "Export energy",
          "name": "KWHdelOffset",
          "value": 0
        },
        {
          "index": 5,
          "registerAddress": 16460,
          "registerModbusName": "Reactive Import energy",
          "name": "",
          "value": 0
        },
        {
          "index": 6,
          "registerAddress": 16462,
          "registerModbusName": "Reactive Export energy",
          "name": "",
          "value": 0
        },
        {
          "index": 7,
          "registerAddress": 16466,
          "registerModbusName": "Total energy net",
          "name": "KWHoffset",
          "value": 0
        },
        {
          "index": 8,
          "registerAddress": 16470,
          "registerModbusName": "Reactive Total energy net",
          "name": "",
          "value": 0
        },
        {
          "index": 9,
          "registerAddress": 16472,
          "registerModbusName": "Apparent Energy",
          "name": "",
          "value": 0
        }
      ]
    },
    {
      "index": 5,
      "ts": "2025-12-22T17:43:14Z",
      "address": "192.168.13.42",
      "description": "Accuvim II - SITE??  Meter - M1",
      "driverId": 19601,
      "driverName": "AccuEnergy Acuvim II(R-D-5A) Primary Mode(SS)Standard",
      "functionCode": 2,
      "functionId": "PM1",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511566",
      "serialNumber": "AHB54010502",
      "sort": 4,
      "unitId": 1,
      "settings": [
        {
          "originalValue": "N/A",
          "index": 0,
          "name": "dev:portMode",
          "value": "N/A",
          "type": 0
        },
        {
          "originalValue": 1,
          "index": 1,
          "name": "dev:UnitID",
          "value": 1,
          "type": 1
        },
        {
          "originalValue": 502,
          "index": 2,
          "name": "dev:TCPport",
          "value": 502,
          "type": 1
        },
        {
          "originalValue": 0,
          "index": 3,
          "name": "dev:RegOffset",
          "value": 0,
          "type": 1
        },
        {
          "originalValue": 0.001,
          "index": 4,
          "name": "dev:ScaleKW",
          "value": 0.001,
          "type": 2
        },
        {
          "originalValue": "0",
          "index": 5,
          "name": "dev:Reverse",
          "value": "0",
          "type": 0
        },
        {
          "originalValue": 0.1,
          "index": 6,
          "name": "dev:ScaleKWH",
          "value": 0.1,
          "type": 2
        },
        {
          "originalValue": 1,
          "index": 7,
          "name": "dev:ScaleAmps",
          "value": 1,
          "type": 2
        },
        {
          "originalValue": 1,
          "index": 8,
          "name": "dev:ScaleVolts",
          "value": 1,
          "type": 2
        },
        {
          "originalValue": "PM1",
          "index": 9,
          "name": "ShortName",
          "value": "PM1",
          "type": 0
        }
      ],
      "port": 0,
      "outOfService": false,
      "registerOffsets": [
        {
          "index": 0,
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Delivered Raw",
          "name": "",
          "value": 0
        },
        {
          "index": 1,
          "registerAddress": 9010,
          "registerModbusName": "Active Energy Received Raw",
          "name": "",
          "value": 0
        },
        {
          "index": 2,
          "registerAddress": 9020,
          "registerModbusName": "Active Energy Net Raw",
          "name": "",
          "value": 0
        },
        {
          "index": 3,
          "registerAddress": 16456,
          "registerModbusName": "Import energy",
          "name": "KWHrecOffset",
          "value": 0
        },
        {
          "index": 4,
          "registerAddress": 16458,
          "registerModbusName": "Export energy",
          "name": "KWHdelOffset",
          "value": 0
        },
        {
          "index": 5,
          "registerAddress": 16460,
          "registerModbusName": "Reactive Import energy",
          "name": "",
          "value": 0
        },
        {
          "index": 6,
          "registerAddress": 16462,
          "registerModbusName": "Reactive Export energy",
          "name": "",
          "value": 0
        },
        {
          "index": 7,
          "registerAddress": 16466,
          "registerModbusName": "Total energy net",
          "name": "KWHoffset",
          "value": 0
        },
        {
          "index": 8,
          "registerAddress": 16470,
          "registerModbusName": "Reactive Total energy net",
          "name": "",
          "value": 0
        },
        {
          "index": 9,
          "registerAddress": 16472,
          "registerModbusName": "Apparent Energy",
          "name": "",
          "value": 0
        }
      ]
    },
    {
      "index": 6,
      "ts": "2024-07-15T13:29:12Z",
      "address": "192.168.13.161",
      "description": "SMA Data Manager",
      "driverId": 2442,
      "driverName": "SMA Data Manager M",
      "functionCode": 28,
      "functionId": "IG0",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511567",
      "serialNumber": "",
      "sort": 10,
      "unitId": 1,
      "settings": [
        {
          "originalValue": "N/A",
          "index": 0,
          "name": "dev:portMode",
          "value": "N/A",
          "type": 0
        },
        {
          "originalValue": "0",
          "index": 1,
          "name": "dev:RegOffset",
          "value": "0",
          "type": 0
        },
        {
          "originalValue": 1,
          "index": 2,
          "name": "dev:UnitID",
          "value": 1,
          "type": 1
        },
        {
          "originalValue": "IG0",
          "index": 3,
          "name": "ShortName",
          "value": "IG0",
          "type": 0
        }
      ],
      "port": 0,
      "outOfService": false,
      "registerOffsets": [
        {
          "index": 0,
          "registerAddress": 30513,
          "registerModbusName": "Total AC Energy",
          "name": "",
          "value": 0
        }
      ]
    },
    {
      "index": 0,
      "ts": "2025-12-22T19:21:53Z",
      "address": "192.168.13.51",
      "description": "INVERTER 1",
      "driverId": 19880,
      "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
      "functionCode": 1,
      "functionId": "PV0",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511568",
      "serialNumber": "",
      "sort": 11,
      "unitId": 3,
      "settings": [
        {
          "originalValue": "N/A",
          "index": 0,
          "name": "dev:portMode",
          "value": "N/A",
          "type": 0
        },
        {
          "originalValue": 3,
          "index": 1,
          "name": "dev:UnitID",
          "value": 3,
          "type": 1
        },
        {
          "originalValue": 0,
          "index": 2,
          "name": "dev:RegOffset",
          "value": 0,
          "type": 1
        },
        {
          "originalValue": "3",
          "index": 3,
          "name": "dev:tcpretry",
          "value": "3",
          "type": 0
        },
        {
          "originalValue": 1,
          "index": 4,
          "name": "dev:ScaleKWH",
          "value": 1,
          "type": 2
        },
        {
          "originalValue": 0.001,
          "index": 5,
          "name": "dev:ScaleKW",
          "value": 0.001,
          "type": 2
        },
        {
          "originalValue": "0.01",
          "index": 6,
          "name": "dev:ScaleV",
          "value": "0.01",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 7,
          "name": "dev:ScaleI",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.01",
          "index": 8,
          "name": "dev:ScaleFrequency",
          "value": "0.01",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 9,
          "name": "dev:ScaleKVAR",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 10,
          "name": "dev:ScalePF",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.1",
          "index": 11,
          "name": "dev:ScaleTemp",
          "value": "0.1",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 12,
          "name": "dev:ScaleKVA",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "PV0",
          "index": 13,
          "name": "ShortName",
          "value": "PV0",
          "type": 0
        }
      ],
      "port": 0,
      "outOfService": false,
      "registerOffsets": [
        {
          "index": 0,
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Net Raw",
          "name": "",
          "value": 0
        },
        {
          "index": 1,
          "registerAddress": 30531,
          "registerModbusName": "Active Energy Net",
          "name": "KWHoffset",
          "value": 0
        }
      ]
    },
    {
      "index": 7,
      "ts": "2025-11-25T22:12:40Z",
      "address": "192.168.13.52",
      "description": "INVERTER 2",
      "driverId": 19880,
      "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
      "functionCode": 1,
      "functionId": "PV1",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511569",
      "serialNumber": "",
      "sort": 12,
      "unitId": 3,
      "settings": [
        {
          "originalValue": "N/A",
          "index": 0,
          "name": "dev:portMode",
          "value": "N/A",
          "type": 0
        },
        {
          "originalValue": 3,
          "index": 1,
          "name": "dev:UnitID",
          "value": 3,
          "type": 1
        },
        {
          "originalValue": 502,
          "index": 2,
          "name": "dev:TCPport",
          "value": 502,
          "type": 1
        },
        {
          "originalValue": 0,
          "index": 3,
          "name": "dev:RegOffset",
          "value": 0,
          "type": 1
        },
        {
          "originalValue": "3",
          "index": 4,
          "name": "dev:tcpretry",
          "value": "3",
          "type": 0
        },
        {
          "originalValue": "0",
          "index": 5,
          "name": "dev:KWHoffset",
          "value": "0",
          "type": 0
        },
        {
          "originalValue": "1",
          "index": 6,
          "name": "dev:ScaleKWH",
          "value": "1",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 7,
          "name": "dev:ScaleKW",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.01",
          "index": 8,
          "name": "dev:ScaleV",
          "value": "0.01",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 9,
          "name": "dev:ScaleI",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.01",
          "index": 10,
          "name": "dev:ScaleFrequency",
          "value": "0.01",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 11,
          "name": "dev:ScaleKVAR",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 12,
          "name": "dev:ScalePF",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.1",
          "index": 13,
          "name": "dev:ScaleTemp",
          "value": "0.1",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 14,
          "name": "dev:ScaleKVA",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "PV1",
          "index": 15,
          "name": "ShortName",
          "value": "PV1",
          "type": 0
        }
      ],
      "port": 0,
      "outOfService": false,
      "registerOffsets": [
        {
          "index": 0,
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Net Raw",
          "name": "",
          "value": 0
        },
        {
          "index": 1,
          "registerAddress": 30531,
          "registerModbusName": "Active Energy Net",
          "name": "KWHoffset",
          "value": 0
        }
      ]
    },
    {
      "index": 8,
      "ts": "2025-11-25T22:12:43Z",
      "address": "192.168.13.53",
      "description": "INVERTER 3",
      "driverId": 19880,
      "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
      "functionCode": 1,
      "functionId": "PV2",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511570",
      "serialNumber": "",
      "sort": 13,
      "unitId": 3,
      "settings": [
        {
          "originalValue": "N/A",
          "index": 0,
          "name": "dev:portMode",
          "value": "N/A",
          "type": 0
        },
        {
          "originalValue": 3,
          "index": 1,
          "name": "dev:UnitID",
          "value": 3,
          "type": 1
        },
        {
          "originalValue": 502,
          "index": 2,
          "name": "dev:TCPport",
          "value": 502,
          "type": 1
        },
        {
          "originalValue": 0,
          "index": 3,
          "name": "dev:RegOffset",
          "value": 0,
          "type": 1
        },
        {
          "originalValue": "3",
          "index": 4,
          "name": "dev:tcpretry",
          "value": "3",
          "type": 0
        },
        {
          "originalValue": "0",
          "index": 5,
          "name": "dev:KWHoffset",
          "value": "0",
          "type": 0
        },
        {
          "originalValue": "1",
          "index": 6,
          "name": "dev:ScaleKWH",
          "value": "1",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 7,
          "name": "dev:ScaleKW",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.01",
          "index": 8,
          "name": "dev:ScaleV",
          "value": "0.01",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 9,
          "name": "dev:ScaleI",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.01",
          "index": 10,
          "name": "dev:ScaleFrequency",
          "value": "0.01",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 11,
          "name": "dev:ScaleKVAR",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 12,
          "name": "dev:ScalePF",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.1",
          "index": 13,
          "name": "dev:ScaleTemp",
          "value": "0.1",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 14,
          "name": "dev:ScaleKVA",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "PV2",
          "index": 15,
          "name": "ShortName",
          "value": "PV2",
          "type": 0
        }
      ],
      "port": 0,
      "outOfService": false,
      "registerOffsets": [
        {
          "index": 0,
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Net Raw",
          "name": "",
          "value": 0
        },
        {
          "index": 1,
          "registerAddress": 30531,
          "registerModbusName": "Active Energy Net",
          "name": "KWHoffset",
          "value": 0
        }
      ]
    },
    {
      "index": 9,
      "ts": "2025-11-25T22:12:47Z",
      "address": "192.168.13.54",
      "description": "INVERTER 4",
      "driverId": 19880,
      "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
      "functionCode": 1,
      "functionId": "PV3",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511571",
      "serialNumber": "",
      "sort": 14,
      "unitId": 3,
      "settings": [
        {
          "originalValue": "N/A",
          "index": 0,
          "name": "dev:portMode",
          "value": "N/A",
          "type": 0
        },
        {
          "originalValue": 3,
          "index": 1,
          "name": "dev:UnitID",
          "value": 3,
          "type": 1
        },
        {
          "originalValue": 502,
          "index": 2,
          "name": "dev:TCPport",
          "value": 502,
          "type": 1
        },
        {
          "originalValue": 0,
          "index": 3,
          "name": "dev:RegOffset",
          "value": 0,
          "type": 1
        },
        {
          "originalValue": "3",
          "index": 4,
          "name": "dev:tcpretry",
          "value": "3",
          "type": 0
        },
        {
          "originalValue": "0",
          "index": 5,
          "name": "dev:KWHoffset",
          "value": "0",
          "type": 0
        },
        {
          "originalValue": "1",
          "index": 6,
          "name": "dev:ScaleKWH",
          "value": "1",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 7,
          "name": "dev:ScaleKW",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.01",
          "index": 8,
          "name": "dev:ScaleV",
          "value": "0.01",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 9,
          "name": "dev:ScaleI",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.01",
          "index": 10,
          "name": "dev:ScaleFrequency",
          "value": "0.01",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 11,
          "name": "dev:ScaleKVAR",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 12,
          "name": "dev:ScalePF",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.1",
          "index": 13,
          "name": "dev:ScaleTemp",
          "value": "0.1",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 14,
          "name": "dev:ScaleKVA",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "PV3",
          "index": 15,
          "name": "ShortName",
          "value": "PV3",
          "type": 0
        }
      ],
      "port": 0,
      "outOfService": false,
      "registerOffsets": [
        {
          "index": 0,
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Net Raw",
          "name": "",
          "value": 0
        },
        {
          "index": 1,
          "registerAddress": 30531,
          "registerModbusName": "Active Energy Net",
          "name": "KWHoffset",
          "value": 0
        }
      ]
    },
    {
      "index": 10,
      "ts": "2025-11-25T22:12:52Z",
      "address": "192.168.13.55",
      "description": "INVERTER 5",
      "driverId": 19880,
      "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
      "functionCode": 1,
      "functionId": "PV4",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511572",
      "serialNumber": "",
      "sort": 15,
      "unitId": 3,
      "settings": [
        {
          "originalValue": "N/A",
          "index": 0,
          "name": "dev:portMode",
          "value": "N/A",
          "type": 0
        },
        {
          "originalValue": 3,
          "index": 1,
          "name": "dev:UnitID",
          "value": 3,
          "type": 1
        },
        {
          "originalValue": 502,
          "index": 2,
          "name": "dev:TCPport",
          "value": 502,
          "type": 1
        },
        {
          "originalValue": 0,
          "index": 3,
          "name": "dev:RegOffset",
          "value": 0,
          "type": 1
        },
        {
          "originalValue": "3",
          "index": 4,
          "name": "dev:tcpretry",
          "value": "3",
          "type": 0
        },
        {
          "originalValue": "0",
          "index": 5,
          "name": "dev:KWHoffset",
          "value": "0",
          "type": 0
        },
        {
          "originalValue": "1",
          "index": 6,
          "name": "dev:ScaleKWH",
          "value": "1",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 7,
          "name": "dev:ScaleKW",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.01",
          "index": 8,
          "name": "dev:ScaleV",
          "value": "0.01",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 9,
          "name": "dev:ScaleI",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.01",
          "index": 10,
          "name": "dev:ScaleFrequency",
          "value": "0.01",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 11,
          "name": "dev:ScaleKVAR",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 12,
          "name": "dev:ScalePF",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.1",
          "index": 13,
          "name": "dev:ScaleTemp",
          "value": "0.1",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 14,
          "name": "dev:ScaleKVA",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "PV4",
          "index": 15,
          "name": "ShortName",
          "value": "PV4",
          "type": 0
        }
      ],
      "port": 0,
      "outOfService": false,
      "registerOffsets": [
        {
          "index": 0,
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Net Raw",
          "name": "",
          "value": 0
        },
        {
          "index": 1,
          "registerAddress": 30531,
          "registerModbusName": "Active Energy Net",
          "name": "KWHoffset",
          "value": 0
        }
      ]
    },
    {
      "index": 11,
      "ts": "2025-11-25T22:12:55Z",
      "address": "192.168.13.56",
      "description": "INVERTER 6",
      "driverId": 19880,
      "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
      "functionCode": 1,
      "functionId": "PV5",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511573",
      "serialNumber": "",
      "sort": 16,
      "unitId": 3,
      "settings": [
        {
          "originalValue": "N/A",
          "index": 0,
          "name": "dev:portMode",
          "value": "N/A",
          "type": 0
        },
        {
          "originalValue": 3,
          "index": 1,
          "name": "dev:UnitID",
          "value": 3,
          "type": 1
        },
        {
          "originalValue": 502,
          "index": 2,
          "name": "dev:TCPport",
          "value": 502,
          "type": 1
        },
        {
          "originalValue": 0,
          "index": 3,
          "name": "dev:RegOffset",
          "value": 0,
          "type": 1
        },
        {
          "originalValue": "3",
          "index": 4,
          "name": "dev:tcpretry",
          "value": "3",
          "type": 0
        },
        {
          "originalValue": "0",
          "index": 5,
          "name": "dev:KWHoffset",
          "value": "0",
          "type": 0
        },
        {
          "originalValue": "1",
          "index": 6,
          "name": "dev:ScaleKWH",
          "value": "1",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 7,
          "name": "dev:ScaleKW",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.01",
          "index": 8,
          "name": "dev:ScaleV",
          "value": "0.01",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 9,
          "name": "dev:ScaleI",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.01",
          "index": 10,
          "name": "dev:ScaleFrequency",
          "value": "0.01",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 11,
          "name": "dev:ScaleKVAR",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 12,
          "name": "dev:ScalePF",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.1",
          "index": 13,
          "name": "dev:ScaleTemp",
          "value": "0.1",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 14,
          "name": "dev:ScaleKVA",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "PV5",
          "index": 15,
          "name": "ShortName",
          "value": "PV5",
          "type": 0
        }
      ],
      "port": 0,
      "outOfService": false,
      "registerOffsets": [
        {
          "index": 0,
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Net Raw",
          "name": "",
          "value": 0
        },
        {
          "index": 1,
          "registerAddress": 30531,
          "registerModbusName": "Active Energy Net",
          "name": "KWHoffset",
          "value": 0
        }
      ]
    },
    {
      "index": 12,
      "ts": "2025-11-25T22:12:59Z",
      "address": "192.168.13.57",
      "description": "INVERTER 7",
      "driverId": 19880,
      "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
      "functionCode": 1,
      "functionId": "PV6",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511574",
      "serialNumber": "",
      "sort": 17,
      "unitId": 3,
      "settings": [
        {
          "originalValue": "N/A",
          "index": 0,
          "name": "dev:portMode",
          "value": "N/A",
          "type": 0
        },
        {
          "originalValue": 3,
          "index": 1,
          "name": "dev:UnitID",
          "value": 3,
          "type": 1
        },
        {
          "originalValue": 502,
          "index": 2,
          "name": "dev:TCPport",
          "value": 502,
          "type": 1
        },
        {
          "originalValue": 0,
          "index": 3,
          "name": "dev:RegOffset",
          "value": 0,
          "type": 1
        },
        {
          "originalValue": "3",
          "index": 4,
          "name": "dev:tcpretry",
          "value": "3",
          "type": 0
        },
        {
          "originalValue": "0",
          "index": 5,
          "name": "dev:KWHoffset",
          "value": "0",
          "type": 0
        },
        {
          "originalValue": "1",
          "index": 6,
          "name": "dev:ScaleKWH",
          "value": "1",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 7,
          "name": "dev:ScaleKW",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.01",
          "index": 8,
          "name": "dev:ScaleV",
          "value": "0.01",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 9,
          "name": "dev:ScaleI",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.01",
          "index": 10,
          "name": "dev:ScaleFrequency",
          "value": "0.01",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 11,
          "name": "dev:ScaleKVAR",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 12,
          "name": "dev:ScalePF",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.1",
          "index": 13,
          "name": "dev:ScaleTemp",
          "value": "0.1",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 14,
          "name": "dev:ScaleKVA",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "PV6",
          "index": 15,
          "name": "ShortName",
          "value": "PV6",
          "type": 0
        }
      ],
      "port": 0,
      "outOfService": false,
      "registerOffsets": [
        {
          "index": 0,
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Net Raw",
          "name": "",
          "value": 0
        },
        {
          "index": 1,
          "registerAddress": 30531,
          "registerModbusName": "Active Energy Net",
          "name": "KWHoffset",
          "value": 0
        }
      ]
    },
    {
      "index": 13,
      "ts": "2024-07-11T21:17:30Z",
      "address": "6",
      "description": "REFERENCE CELL - POA",
      "driverId": 3588,
      "driverName": "IMT Reference Cell (Standard) 3x Mod Temp",
      "functionCode": 5,
      "functionId": "WS1",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511575",
      "serialNumber": "485-32003-23-24211210",
      "sort": 41,
      "unitId": 0,
      "settings": [
        {
          "originalValue": 9600,
          "index": 0,
          "name": "dev:baud",
          "value": 9600,
          "type": 1
        },
        {
          "originalValue": "rs485",
          "index": 1,
          "name": "dev:portMode",
          "value": "rs485",
          "type": 0
        },
        {
          "originalValue": 0,
          "index": 2,
          "name": "dev:RegOffset",
          "value": 0,
          "type": 1
        },
        {
          "originalValue": -30,
          "index": 3,
          "name": "MinTemp",
          "value": -30,
          "type": 2
        },
        {
          "originalValue": 160,
          "index": 4,
          "name": "MaxTemp",
          "value": 160,
          "type": 2
        },
        {
          "originalValue": 132,
          "index": 5,
          "name": "weather",
          "value": 132,
          "type": 1
        },
        {
          "originalValue": "0.1",
          "index": 6,
          "name": "dev:ScalePOA",
          "value": "0.1",
          "type": 0
        },
        {
          "originalValue": "0",
          "index": 7,
          "name": "dev:POAOffset",
          "value": "0",
          "type": 0
        },
        {
          "originalValue": "0.1",
          "index": 8,
          "name": "dev:ScaleT",
          "value": "0.1",
          "type": 0
        },
        {
          "originalValue": "0.1",
          "index": 9,
          "name": "dev:ScaleWindSP",
          "value": "0.1",
          "type": 0
        },
        {
          "originalValue": "0.1",
          "index": 10,
          "name": "dev:ScaleGHI",
          "value": "0.1",
          "type": 0
        },
        {
          "originalValue": "0",
          "index": 11,
          "name": "dev:GHIOffset",
          "value": "0",
          "type": 0
        },
        {
          "originalValue": "WS1",
          "index": 12,
          "name": "ShortName",
          "value": "WS1",
          "type": 0
        }
      ],
      "port": 2,
      "outOfService": false,
      "registerOffsets": []
    },
    {
      "index": 14,
      "ts": "2024-07-11T21:18:06Z",
      "address": "16",
      "description": "WEATHER STATION",
      "driverId": 8164,
      "driverName": "AE Integrated WS Standard (FW 114+) (Qualified)",
      "functionCode": 5,
      "functionId": "WS2",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511576",
      "serialNumber": "1V0177-8",
      "sort": 42,
      "unitId": 0,
      "settings": [
        {
          "originalValue": 9600,
          "index": 0,
          "name": "dev:baud",
          "value": 9600,
          "type": 1
        },
        {
          "originalValue": "rs485",
          "index": 1,
          "name": "dev:portMode",
          "value": "rs485",
          "type": 0
        },
        {
          "originalValue": 0,
          "index": 2,
          "name": "dev:RegOffset",
          "value": 0,
          "type": 1
        },
        {
          "originalValue": -30,
          "index": 3,
          "name": "MinTemp",
          "value": -30,
          "type": 2
        },
        {
          "originalValue": 160,
          "index": 4,
          "name": "MaxTemp",
          "value": 160,
          "type": 2
        },
        {
          "originalValue": 1057,
          "index": 5,
          "name": "weather",
          "value": 1057,
          "type": 1
        },
        {
          "originalValue": "K",
          "index": 6,
          "name": "dev:P1",
          "value": "K",
          "type": 0
        },
        {
          "originalValue": "W",
          "index": 7,
          "name": "dev:P2",
          "value": "W",
          "type": 0
        },
        {
          "originalValue": "1.00",
          "index": 8,
          "name": "dev:K1",
          "value": "1.00",
          "type": 0
        },
        {
          "originalValue": "10.0",
          "index": 9,
          "name": "dev:K2",
          "value": "10.0",
          "type": 0
        },
        {
          "originalValue": "1",
          "index": 10,
          "name": "dev:T1",
          "value": "1",
          "type": 0
        },
        {
          "originalValue": "S",
          "index": 11,
          "name": "dev:TR1",
          "value": "S",
          "type": 0
        },
        {
          "originalValue": "W",
          "index": 12,
          "name": "dev:TR2",
          "value": "W",
          "type": 0
        },
        {
          "originalValue": "1",
          "index": 13,
          "name": "dev:SWAP",
          "value": "1",
          "type": 0
        },
        {
          "originalValue": "WS2",
          "index": 14,
          "name": "ShortName",
          "value": "WS2",
          "type": 0
        }
      ],
      "port": 2,
      "outOfService": false,
      "registerOffsets": []
    },
    {
      "index": 1,
      "ts": "2024-03-08T14:48:26Z",
      "address": "0",
      "description": "Solcast Virtual Weather Station",
      "driverId": 19015,
      "driverName": "External Weather Source (full)",
      "functionCode": 5,
      "functionId": "WS0",
      "gatewayId": "",
      "gatewayName": "",
      "hardwareKey": "H494021",
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
        },
        {
          "originalValue": "WS0",
          "index": 4,
          "name": "ShortName",
          "value": "WS0",
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

**Response:**

```json
{
  "key": "S68143",
  "ts": "2025-12-22T22:01:11Z",
  "hardware": [
    {
      "index": 2,
      "ts": "2025-03-13T18:25:44Z",
      "address": "0",
      "description": "Cell Modem (Pepwave)",
      "driverId": 19759,
      "driverName": "Pepwave Wireless SNMP",
      "functionCode": 31,
      "functionId": "CE0",
      "gatewayId": "1932-1C3F-8F71",
      "gatewayName": "",
      "hardwareKey": "H511563",
      "serialNumber": "1932-1C3F-8F71",
      "sort": 1,
      "unitId": 0,
      "settings": [
        {
          "originalValue": "N/A",
          "index": 0,
          "name": "dev:portMode",
          "value": "N/A",
          "type": 0
        },
        {
          "originalValue": "ae",
          "index": 1,
          "name": "dev:community",
          "value": "ae",
          "type": 0
        },
        {
          "originalValue": "alsoenergy",
          "index": 2,
          "name": "dev:authentication",
          "value": "alsoenergy",
          "type": 0
        },
        {
          "originalValue": "alsoenergy",
          "index": 3,
          "name": "dev:privacy",
          "value": "alsoenergy",
          "type": 0
        },
        {
          "originalValue": "CE0",
          "index": 4,
          "name": "ShortName",
          "value": "CE0",
          "type": 0
        }
      ],
      "port": 0,
      "outOfService": false,
      "registerOffsets": []
    },
    {
      "index": 3,
      "ts": "2024-07-15T13:27:46Z",
      "address": "0",
      "description": "PowerLogger 1000",
      "driverId": 325,
      "driverName": "PowerLogger 1000",
      "functionCode": 10,
      "functionId": "GW0",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511564",
      "serialNumber": "",
      "sort": 2,
      "unitId": 0,
      "settings": [
        {
          "originalValue": "N/A",
          "index": 0,
          "name": "dev:portMode",
          "value": "N/A",
          "type": 0
        },
        {
          "originalValue": "200",
          "index": 1,
          "name": "dev:rate",
          "value": "200",
          "type": 0
        },
        {
          "originalValue": "GW0",
          "index": 2,
          "name": "ShortName",
          "value": "GW0",
          "type": 0
        }
      ],
      "port": 0,
      "outOfService": false,
      "registerOffsets": []
    },
    {
      "index": 4,
      "ts": "2024-07-15T13:28:32Z",
      "address": "192.168.13.41",
      "description": "Accuvim II - PV Prod Meter - M0",
      "driverId": 19601,
      "driverName": "AccuEnergy Acuvim II(R-D-5A) Primary Mode(SS)Standard",
      "functionCode": 2,
      "functionId": "PM0",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511565",
      "serialNumber": "AHB54010438",
      "sort": 3,
      "unitId": 1,
      "settings": [
        {
          "originalValue": "N/A",
          "index": 0,
          "name": "dev:portMode",
          "value": "N/A",
          "type": 0
        },
        {
          "originalValue": 1,
          "index": 1,
          "name": "dev:UnitID",
          "value": 1,
          "type": 1
        },
        {
          "originalValue": 502,
          "index": 2,
          "name": "dev:TCPport",
          "value": 502,
          "type": 1
        },
        {
          "originalValue": 0,
          "index": 3,
          "name": "dev:RegOffset",
          "value": 0,
          "type": 1
        },
        {
          "originalValue": 0.001,
          "index": 4,
          "name": "dev:ScaleKW",
          "value": 0.001,
          "type": 2
        },
        {
          "originalValue": "0",
          "index": 5,
          "name": "dev:Reverse",
          "value": "0",
          "type": 0
        },
        {
          "originalValue": 0.1,
          "index": 6,
          "name": "dev:ScaleKWH",
          "value": 0.1,
          "type": 2
        },
        {
          "originalValue": 1,
          "index": 7,
          "name": "dev:ScaleAmps",
          "value": 1,
          "type": 2
        },
        {
          "originalValue": 1,
          "index": 8,
          "name": "dev:ScaleVolts",
          "value": 1,
          "type": 2
        },
        {
          "originalValue": "PM0",
          "index": 9,
          "name": "ShortName",
          "value": "PM0",
          "type": 0
        }
      ],
      "port": 0,
      "outOfService": false,
      "registerOffsets": [
        {
          "index": 0,
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Delivered Raw",
          "name": "",
          "value": 0
        },
        {
          "index": 1,
          "registerAddress": 9010,
          "registerModbusName": "Active Energy Received Raw",
          "name": "",
          "value": 0
        },
        {
          "index": 2,
          "registerAddress": 9020,
          "registerModbusName": "Active Energy Net Raw",
          "name": "",
          "value": 0
        },
        {
          "index": 3,
          "registerAddress": 16456,
          "registerModbusName": "Import energy",
          "name": "KWHrecOffset",
          "value": 0
        },
        {
          "index": 4,
          "registerAddress": 16458,
          "registerModbusName": "Export energy",
          "name": "KWHdelOffset",
          "value": 0
        },
        {
          "index": 5,
          "registerAddress": 16460,
          "registerModbusName": "Reactive Import energy",
          "name": "",
          "value": 0
        },
        {
          "index": 6,
          "registerAddress": 16462,
          "registerModbusName": "Reactive Export energy",
          "name": "",
          "value": 0
        },
        {
          "index": 7,
          "registerAddress": 16466,
          "registerModbusName": "Total energy net",
          "name": "KWHoffset",
          "value": 0
        },
        {
          "index": 8,
          "registerAddress": 16470,
          "registerModbusName": "Reactive Total energy net",
          "name": "",
          "value": 0
        },
        {
          "index": 9,
          "registerAddress": 16472,
          "registerModbusName": "Apparent Energy",
          "name": "",
          "value": 0
        }
      ]
    },
    {
      "index": 5,
      "ts": "2025-12-22T22:01:11Z",
      "address": "192.168.13.42",
      "description": "Accuvim II - SITE??  Meter - M1",
      "driverId": 19601,
      "driverName": "AccuEnergy Acuvim II(R-D-5A) Primary Mode(SS)Standard",
      "functionCode": 2,
      "functionId": "PM1",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511566",
      "serialNumber": "AHB54010502",
      "sort": 4,
      "unitId": 1,
      "settings": [
        {
          "originalValue": "N/A",
          "index": 0,
          "name": "dev:portMode",
          "value": "N/A",
          "type": 0
        },
        {
          "originalValue": 1,
          "index": 1,
          "name": "dev:UnitID",
          "value": 1,
          "type": 1
        },
        {
          "originalValue": 502,
          "index": 2,
          "name": "dev:TCPport",
          "value": 502,
          "type": 1
        },
        {
          "originalValue": 0,
          "index": 3,
          "name": "dev:RegOffset",
          "value": 0,
          "type": 1
        },
        {
          "originalValue": 0.001,
          "index": 4,
          "name": "dev:ScaleKW",
          "value": 0.001,
          "type": 2
        },
        {
          "originalValue": "0",
          "index": 5,
          "name": "dev:Reverse",
          "value": "0",
          "type": 0
        },
        {
          "originalValue": 0.1,
          "index": 6,
          "name": "dev:ScaleKWH",
          "value": 0.1,
          "type": 2
        },
        {
          "originalValue": 1,
          "index": 7,
          "name": "dev:ScaleAmps",
          "value": 1,
          "type": 2
        },
        {
          "originalValue": 1,
          "index": 8,
          "name": "dev:ScaleVolts",
          "value": 1,
          "type": 2
        },
        {
          "originalValue": "PM1",
          "index": 9,
          "name": "ShortName",
          "value": "PM1",
          "type": 0
        }
      ],
      "port": 0,
      "outOfService": false,
      "registerOffsets": [
        {
          "index": 0,
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Delivered Raw",
          "name": "",
          "value": 0
        },
        {
          "index": 1,
          "registerAddress": 9010,
          "registerModbusName": "Active Energy Received Raw",
          "name": "",
          "value": 0
        },
        {
          "index": 2,
          "registerAddress": 9020,
          "registerModbusName": "Active Energy Net Raw",
          "name": "",
          "value": 0
        },
        {
          "index": 3,
          "registerAddress": 16456,
          "registerModbusName": "Import energy",
          "name": "KWHrecOffset",
          "value": 0
        },
        {
          "index": 4,
          "registerAddress": 16458,
          "registerModbusName": "Export energy",
          "name": "KWHdelOffset",
          "value": 0
        },
        {
          "index": 5,
          "registerAddress": 16460,
          "registerModbusName": "Reactive Import energy",
          "name": "",
          "value": 0
        },
        {
          "index": 6,
          "registerAddress": 16462,
          "registerModbusName": "Reactive Export energy",
          "name": "",
          "value": 0
        },
        {
          "index": 7,
          "registerAddress": 16466,
          "registerModbusName": "Total energy net",
          "name": "KWHoffset",
          "value": 0
        },
        {
          "index": 8,
          "registerAddress": 16470,
          "registerModbusName": "Reactive Total energy net",
          "name": "",
          "value": 0
        },
        {
          "index": 9,
          "registerAddress": 16472,
          "registerModbusName": "Apparent Energy",
          "name": "",
          "value": 0
        }
      ]
    },
    {
      "index": 6,
      "ts": "2024-07-15T13:29:12Z",
      "address": "192.168.13.161",
      "description": "SMA Data Manager",
      "driverId": 2442,
      "driverName": "SMA Data Manager M",
      "functionCode": 28,
      "functionId": "IG0",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511567",
      "serialNumber": "",
      "sort": 10,
      "unitId": 1,
      "settings": [
        {
          "originalValue": "N/A",
          "index": 0,
          "name": "dev:portMode",
          "value": "N/A",
          "type": 0
        },
        {
          "originalValue": "0",
          "index": 1,
          "name": "dev:RegOffset",
          "value": "0",
          "type": 0
        },
        {
          "originalValue": 1,
          "index": 2,
          "name": "dev:UnitID",
          "value": 1,
          "type": 1
        },
        {
          "originalValue": "IG0",
          "index": 3,
          "name": "ShortName",
          "value": "IG0",
          "type": 0
        }
      ],
      "port": 0,
      "outOfService": false,
      "registerOffsets": [
        {
          "index": 0,
          "registerAddress": 30513,
          "registerModbusName": "Total AC Energy",
          "name": "",
          "value": 0
        }
      ]
    },
    {
      "index": 0,
      "ts": "2025-12-22T19:21:53Z",
      "address": "192.168.13.51",
      "description": "INVERTER 1",
      "driverId": 19880,
      "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
      "functionCode": 1,
      "functionId": "PV0",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511568",
      "serialNumber": "",
      "sort": 11,
      "unitId": 3,
      "settings": [
        {
          "originalValue": "N/A",
          "index": 0,
          "name": "dev:portMode",
          "value": "N/A",
          "type": 0
        },
        {
          "originalValue": 3,
          "index": 1,
          "name": "dev:UnitID",
          "value": 3,
          "type": 1
        },
        {
          "originalValue": 0,
          "index": 2,
          "name": "dev:RegOffset",
          "value": 0,
          "type": 1
        },
        {
          "originalValue": "3",
          "index": 3,
          "name": "dev:tcpretry",
          "value": "3",
          "type": 0
        },
        {
          "originalValue": 1,
          "index": 4,
          "name": "dev:ScaleKWH",
          "value": 1,
          "type": 2
        },
        {
          "originalValue": 0.001,
          "index": 5,
          "name": "dev:ScaleKW",
          "value": 0.001,
          "type": 2
        },
        {
          "originalValue": "0.01",
          "index": 6,
          "name": "dev:ScaleV",
          "value": "0.01",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 7,
          "name": "dev:ScaleI",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.01",
          "index": 8,
          "name": "dev:ScaleFrequency",
          "value": "0.01",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 9,
          "name": "dev:ScaleKVAR",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 10,
          "name": "dev:ScalePF",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.1",
          "index": 11,
          "name": "dev:ScaleTemp",
          "value": "0.1",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 12,
          "name": "dev:ScaleKVA",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "PV0",
          "index": 13,
          "name": "ShortName",
          "value": "PV0",
          "type": 0
        }
      ],
      "port": 0,
      "outOfService": false,
      "registerOffsets": [
        {
          "index": 0,
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Net Raw",
          "name": "",
          "value": 0
        },
        {
          "index": 1,
          "registerAddress": 30531,
          "registerModbusName": "Active Energy Net",
          "name": "KWHoffset",
          "value": 0
        }
      ]
    },
    {
      "index": 7,
      "ts": "2025-11-25T22:12:40Z",
      "address": "192.168.13.52",
      "description": "INVERTER 2",
      "driverId": 19880,
      "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
      "functionCode": 1,
      "functionId": "PV1",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511569",
      "serialNumber": "",
      "sort": 12,
      "unitId": 3,
      "settings": [
        {
          "originalValue": "N/A",
          "index": 0,
          "name": "dev:portMode",
          "value": "N/A",
          "type": 0
        },
        {
          "originalValue": 3,
          "index": 1,
          "name": "dev:UnitID",
          "value": 3,
          "type": 1
        },
        {
          "originalValue": 502,
          "index": 2,
          "name": "dev:TCPport",
          "value": 502,
          "type": 1
        },
        {
          "originalValue": 0,
          "index": 3,
          "name": "dev:RegOffset",
          "value": 0,
          "type": 1
        },
        {
          "originalValue": "3",
          "index": 4,
          "name": "dev:tcpretry",
          "value": "3",
          "type": 0
        },
        {
          "originalValue": "0",
          "index": 5,
          "name": "dev:KWHoffset",
          "value": "0",
          "type": 0
        },
        {
          "originalValue": "1",
          "index": 6,
          "name": "dev:ScaleKWH",
          "value": "1",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 7,
          "name": "dev:ScaleKW",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.01",
          "index": 8,
          "name": "dev:ScaleV",
          "value": "0.01",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 9,
          "name": "dev:ScaleI",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.01",
          "index": 10,
          "name": "dev:ScaleFrequency",
          "value": "0.01",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 11,
          "name": "dev:ScaleKVAR",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 12,
          "name": "dev:ScalePF",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.1",
          "index": 13,
          "name": "dev:ScaleTemp",
          "value": "0.1",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 14,
          "name": "dev:ScaleKVA",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "PV1",
          "index": 15,
          "name": "ShortName",
          "value": "PV1",
          "type": 0
        }
      ],
      "port": 0,
      "outOfService": false,
      "registerOffsets": [
        {
          "index": 0,
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Net Raw",
          "name": "",
          "value": 0
        },
        {
          "index": 1,
          "registerAddress": 30531,
          "registerModbusName": "Active Energy Net",
          "name": "KWHoffset",
          "value": 0
        }
      ]
    },
    {
      "index": 8,
      "ts": "2025-11-25T22:12:43Z",
      "address": "192.168.13.53",
      "description": "INVERTER 3",
      "driverId": 19880,
      "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
      "functionCode": 1,
      "functionId": "PV2",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511570",
      "serialNumber": "",
      "sort": 13,
      "unitId": 3,
      "settings": [
        {
          "originalValue": "N/A",
          "index": 0,
          "name": "dev:portMode",
          "value": "N/A",
          "type": 0
        },
        {
          "originalValue": 3,
          "index": 1,
          "name": "dev:UnitID",
          "value": 3,
          "type": 1
        },
        {
          "originalValue": 502,
          "index": 2,
          "name": "dev:TCPport",
          "value": 502,
          "type": 1
        },
        {
          "originalValue": 0,
          "index": 3,
          "name": "dev:RegOffset",
          "value": 0,
          "type": 1
        },
        {
          "originalValue": "3",
          "index": 4,
          "name": "dev:tcpretry",
          "value": "3",
          "type": 0
        },
        {
          "originalValue": "0",
          "index": 5,
          "name": "dev:KWHoffset",
          "value": "0",
          "type": 0
        },
        {
          "originalValue": "1",
          "index": 6,
          "name": "dev:ScaleKWH",
          "value": "1",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 7,
          "name": "dev:ScaleKW",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.01",
          "index": 8,
          "name": "dev:ScaleV",
          "value": "0.01",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 9,
          "name": "dev:ScaleI",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.01",
          "index": 10,
          "name": "dev:ScaleFrequency",
          "value": "0.01",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 11,
          "name": "dev:ScaleKVAR",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 12,
          "name": "dev:ScalePF",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.1",
          "index": 13,
          "name": "dev:ScaleTemp",
          "value": "0.1",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 14,
          "name": "dev:ScaleKVA",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "PV2",
          "index": 15,
          "name": "ShortName",
          "value": "PV2",
          "type": 0
        }
      ],
      "port": 0,
      "outOfService": false,
      "registerOffsets": [
        {
          "index": 0,
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Net Raw",
          "name": "",
          "value": 0
        },
        {
          "index": 1,
          "registerAddress": 30531,
          "registerModbusName": "Active Energy Net",
          "name": "KWHoffset",
          "value": 0
        }
      ]
    },
    {
      "index": 9,
      "ts": "2025-11-25T22:12:47Z",
      "address": "192.168.13.54",
      "description": "INVERTER 4",
      "driverId": 19880,
      "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
      "functionCode": 1,
      "functionId": "PV3",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511571",
      "serialNumber": "",
      "sort": 14,
      "unitId": 3,
      "settings": [
        {
          "originalValue": "N/A",
          "index": 0,
          "name": "dev:portMode",
          "value": "N/A",
          "type": 0
        },
        {
          "originalValue": 3,
          "index": 1,
          "name": "dev:UnitID",
          "value": 3,
          "type": 1
        },
        {
          "originalValue": 502,
          "index": 2,
          "name": "dev:TCPport",
          "value": 502,
          "type": 1
        },
        {
          "originalValue": 0,
          "index": 3,
          "name": "dev:RegOffset",
          "value": 0,
          "type": 1
        },
        {
          "originalValue": "3",
          "index": 4,
          "name": "dev:tcpretry",
          "value": "3",
          "type": 0
        },
        {
          "originalValue": "0",
          "index": 5,
          "name": "dev:KWHoffset",
          "value": "0",
          "type": 0
        },
        {
          "originalValue": "1",
          "index": 6,
          "name": "dev:ScaleKWH",
          "value": "1",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 7,
          "name": "dev:ScaleKW",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.01",
          "index": 8,
          "name": "dev:ScaleV",
          "value": "0.01",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 9,
          "name": "dev:ScaleI",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.01",
          "index": 10,
          "name": "dev:ScaleFrequency",
          "value": "0.01",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 11,
          "name": "dev:ScaleKVAR",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 12,
          "name": "dev:ScalePF",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.1",
          "index": 13,
          "name": "dev:ScaleTemp",
          "value": "0.1",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 14,
          "name": "dev:ScaleKVA",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "PV3",
          "index": 15,
          "name": "ShortName",
          "value": "PV3",
          "type": 0
        }
      ],
      "port": 0,
      "outOfService": false,
      "registerOffsets": [
        {
          "index": 0,
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Net Raw",
          "name": "",
          "value": 0
        },
        {
          "index": 1,
          "registerAddress": 30531,
          "registerModbusName": "Active Energy Net",
          "name": "KWHoffset",
          "value": 0
        }
      ]
    },
    {
      "index": 10,
      "ts": "2025-11-25T22:12:52Z",
      "address": "192.168.13.55",
      "description": "INVERTER 5",
      "driverId": 19880,
      "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
      "functionCode": 1,
      "functionId": "PV4",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511572",
      "serialNumber": "",
      "sort": 15,
      "unitId": 3,
      "settings": [
        {
          "originalValue": "N/A",
          "index": 0,
          "name": "dev:portMode",
          "value": "N/A",
          "type": 0
        },
        {
          "originalValue": 3,
          "index": 1,
          "name": "dev:UnitID",
          "value": 3,
          "type": 1
        },
        {
          "originalValue": 502,
          "index": 2,
          "name": "dev:TCPport",
          "value": 502,
          "type": 1
        },
        {
          "originalValue": 0,
          "index": 3,
          "name": "dev:RegOffset",
          "value": 0,
          "type": 1
        },
        {
          "originalValue": "3",
          "index": 4,
          "name": "dev:tcpretry",
          "value": "3",
          "type": 0
        },
        {
          "originalValue": "0",
          "index": 5,
          "name": "dev:KWHoffset",
          "value": "0",
          "type": 0
        },
        {
          "originalValue": "1",
          "index": 6,
          "name": "dev:ScaleKWH",
          "value": "1",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 7,
          "name": "dev:ScaleKW",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.01",
          "index": 8,
          "name": "dev:ScaleV",
          "value": "0.01",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 9,
          "name": "dev:ScaleI",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.01",
          "index": 10,
          "name": "dev:ScaleFrequency",
          "value": "0.01",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 11,
          "name": "dev:ScaleKVAR",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 12,
          "name": "dev:ScalePF",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.1",
          "index": 13,
          "name": "dev:ScaleTemp",
          "value": "0.1",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 14,
          "name": "dev:ScaleKVA",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "PV4",
          "index": 15,
          "name": "ShortName",
          "value": "PV4",
          "type": 0
        }
      ],
      "port": 0,
      "outOfService": false,
      "registerOffsets": [
        {
          "index": 0,
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Net Raw",
          "name": "",
          "value": 0
        },
        {
          "index": 1,
          "registerAddress": 30531,
          "registerModbusName": "Active Energy Net",
          "name": "KWHoffset",
          "value": 0
        }
      ]
    },
    {
      "index": 11,
      "ts": "2025-11-25T22:12:55Z",
      "address": "192.168.13.56",
      "description": "INVERTER 6",
      "driverId": 19880,
      "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
      "functionCode": 1,
      "functionId": "PV5",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511573",
      "serialNumber": "",
      "sort": 16,
      "unitId": 3,
      "settings": [
        {
          "originalValue": "N/A",
          "index": 0,
          "name": "dev:portMode",
          "value": "N/A",
          "type": 0
        },
        {
          "originalValue": 3,
          "index": 1,
          "name": "dev:UnitID",
          "value": 3,
          "type": 1
        },
        {
          "originalValue": 502,
          "index": 2,
          "name": "dev:TCPport",
          "value": 502,
          "type": 1
        },
        {
          "originalValue": 0,
          "index": 3,
          "name": "dev:RegOffset",
          "value": 0,
          "type": 1
        },
        {
          "originalValue": "3",
          "index": 4,
          "name": "dev:tcpretry",
          "value": "3",
          "type": 0
        },
        {
          "originalValue": "0",
          "index": 5,
          "name": "dev:KWHoffset",
          "value": "0",
          "type": 0
        },
        {
          "originalValue": "1",
          "index": 6,
          "name": "dev:ScaleKWH",
          "value": "1",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 7,
          "name": "dev:ScaleKW",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.01",
          "index": 8,
          "name": "dev:ScaleV",
          "value": "0.01",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 9,
          "name": "dev:ScaleI",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.01",
          "index": 10,
          "name": "dev:ScaleFrequency",
          "value": "0.01",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 11,
          "name": "dev:ScaleKVAR",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 12,
          "name": "dev:ScalePF",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.1",
          "index": 13,
          "name": "dev:ScaleTemp",
          "value": "0.1",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 14,
          "name": "dev:ScaleKVA",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "PV5",
          "index": 15,
          "name": "ShortName",
          "value": "PV5",
          "type": 0
        }
      ],
      "port": 0,
      "outOfService": false,
      "registerOffsets": [
        {
          "index": 0,
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Net Raw",
          "name": "",
          "value": 0
        },
        {
          "index": 1,
          "registerAddress": 30531,
          "registerModbusName": "Active Energy Net",
          "name": "KWHoffset",
          "value": 0
        }
      ]
    },
    {
      "index": 12,
      "ts": "2025-11-25T22:12:59Z",
      "address": "192.168.13.57",
      "description": "INVERTER 7",
      "driverId": 19880,
      "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
      "functionCode": 1,
      "functionId": "PV6",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511574",
      "serialNumber": "",
      "sort": 17,
      "unitId": 3,
      "settings": [
        {
          "originalValue": "N/A",
          "index": 0,
          "name": "dev:portMode",
          "value": "N/A",
          "type": 0
        },
        {
          "originalValue": 3,
          "index": 1,
          "name": "dev:UnitID",
          "value": 3,
          "type": 1
        },
        {
          "originalValue": 502,
          "index": 2,
          "name": "dev:TCPport",
          "value": 502,
          "type": 1
        },
        {
          "originalValue": 0,
          "index": 3,
          "name": "dev:RegOffset",
          "value": 0,
          "type": 1
        },
        {
          "originalValue": "3",
          "index": 4,
          "name": "dev:tcpretry",
          "value": "3",
          "type": 0
        },
        {
          "originalValue": "0",
          "index": 5,
          "name": "dev:KWHoffset",
          "value": "0",
          "type": 0
        },
        {
          "originalValue": "1",
          "index": 6,
          "name": "dev:ScaleKWH",
          "value": "1",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 7,
          "name": "dev:ScaleKW",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.01",
          "index": 8,
          "name": "dev:ScaleV",
          "value": "0.01",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 9,
          "name": "dev:ScaleI",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.01",
          "index": 10,
          "name": "dev:ScaleFrequency",
          "value": "0.01",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 11,
          "name": "dev:ScaleKVAR",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 12,
          "name": "dev:ScalePF",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "0.1",
          "index": 13,
          "name": "dev:ScaleTemp",
          "value": "0.1",
          "type": 0
        },
        {
          "originalValue": "0.001",
          "index": 14,
          "name": "dev:ScaleKVA",
          "value": "0.001",
          "type": 0
        },
        {
          "originalValue": "PV6",
          "index": 15,
          "name": "ShortName",
          "value": "PV6",
          "type": 0
        }
      ],
      "port": 0,
      "outOfService": false,
      "registerOffsets": [
        {
          "index": 0,
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Net Raw",
          "name": "",
          "value": 0
        },
        {
          "index": 1,
          "registerAddress": 30531,
          "registerModbusName": "Active Energy Net",
          "name": "KWHoffset",
          "value": 0
        }
      ]
    },
    {
      "index": 13,
      "ts": "2024-07-11T21:17:30Z",
      "address": "6",
      "description": "REFERENCE CELL - POA",
      "driverId": 3588,
      "driverName": "IMT Reference Cell (Standard) 3x Mod Temp",
      "functionCode": 5,
      "functionId": "WS1",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511575",
      "serialNumber": "485-32003-23-24211210",
      "sort": 41,
      "unitId": 0,
      "settings": [
        {
          "originalValue": 9600,
          "index": 0,
          "name": "dev:baud",
          "value": 9600,
          "type": 1
        },
        {
          "originalValue": "rs485",
          "index": 1,
          "name": "dev:portMode",
          "value": "rs485",
          "type": 0
        },
        {
          "originalValue": 0,
          "index": 2,
          "name": "dev:RegOffset",
          "value": 0,
          "type": 1
        },
        {
          "originalValue": -30,
          "index": 3,
          "name": "MinTemp",
          "value": -30,
          "type": 2
        },
        {
          "originalValue": 160,
          "index": 4,
          "name": "MaxTemp",
          "value": 160,
          "type": 2
        },
        {
          "originalValue": 132,
          "index": 5,
          "name": "weather",
          "value": 132,
          "type": 1
        },
        {
          "originalValue": "0.1",
          "index": 6,
          "name": "dev:ScalePOA",
          "value": "0.1",
          "type": 0
        },
        {
          "originalValue": "0",
          "index": 7,
          "name": "dev:POAOffset",
          "value": "0",
          "type": 0
        },
        {
          "originalValue": "0.1",
          "index": 8,
          "name": "dev:ScaleT",
          "value": "0.1",
          "type": 0
        },
        {
          "originalValue": "0.1",
          "index": 9,
          "name": "dev:ScaleWindSP",
          "value": "0.1",
          "type": 0
        },
        {
          "originalValue": "0.1",
          "index": 10,
          "name": "dev:ScaleGHI",
          "value": "0.1",
          "type": 0
        },
        {
          "originalValue": "0",
          "index": 11,
          "name": "dev:GHIOffset",
          "value": "0",
          "type": 0
        },
        {
          "originalValue": "WS1",
          "index": 12,
          "name": "ShortName",
          "value": "WS1",
          "type": 0
        }
      ],
      "port": 2,
      "outOfService": false,
      "registerOffsets": []
    },
    {
      "index": 14,
      "ts": "2024-07-11T21:18:06Z",
      "address": "16",
      "description": "WEATHER STATION",
      "driverId": 8164,
      "driverName": "AE Integrated WS Standard (FW 114+) (Qualified)",
      "functionCode": 5,
      "functionId": "WS2",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511576",
      "serialNumber": "1V0177-8",
      "sort": 42,
      "unitId": 0,
      "settings": [
        {
          "originalValue": 9600,
          "index": 0,
          "name": "dev:baud",
          "value": 9600,
          "type": 1
        },
        {
          "originalValue": "rs485",
          "index": 1,
          "name": "dev:portMode",
          "value": "rs485",
          "type": 0
        },
        {
          "originalValue": 0,
          "index": 2,
          "name": "dev:RegOffset",
          "value": 0,
          "type": 1
        },
        {
          "originalValue": -30,
          "index": 3,
          "name": "MinTemp",
          "value": -30,
          "type": 2
        },
        {
          "originalValue": 160,
          "index": 4,
          "name": "MaxTemp",
          "value": 160,
          "type": 2
        },
        {
          "originalValue": 1057,
          "index": 5,
          "name": "weather",
          "value": 1057,
          "type": 1
        },
        {
          "originalValue": "K",
          "index": 6,
          "name": "dev:P1",
          "value": "K",
          "type": 0
        },
        {
          "originalValue": "W",
          "index": 7,
          "name": "dev:P2",
          "value": "W",
          "type": 0
        },
        {
          "originalValue": "1.00",
          "index": 8,
          "name": "dev:K1",
          "value": "1.00",
          "type": 0
        },
        {
          "originalValue": "10.0",
          "index": 9,
          "name": "dev:K2",
          "value": "10.0",
          "type": 0
        },
        {
          "originalValue": "1",
          "index": 10,
          "name": "dev:T1",
          "value": "1",
          "type": 0
        },
        {
          "originalValue": "S",
          "index": 11,
          "name": "dev:TR1",
          "value": "S",
          "type": 0
        },
        {
          "originalValue": "W",
          "index": 12,
          "name": "dev:TR2",
          "value": "W",
          "type": 0
        },
        {
          "originalValue": "1",
          "index": 13,
          "name": "dev:SWAP",
          "value": "1",
          "type": 0
        },
        {
          "originalValue": "WS2",
          "index": 14,
          "name": "ShortName",
          "value": "WS2",
          "type": 0
        }
      ],
      "port": 2,
      "outOfService": false,
      "registerOffsets": []
    },
    {
      "index": 1,
      "ts": "2024-03-08T14:48:26Z",
      "address": "0",
      "description": "Solcast Virtual Weather Station",
      "driverId": 19015,
      "driverName": "External Weather Source (full)",
      "functionCode": 5,
      "functionId": "WS0",
      "gatewayId": "",
      "gatewayName": "",
      "hardwareKey": "H494021",
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
        },
        {
          "originalValue": "WS0",
          "index": 4,
          "name": "ShortName",
          "value": "WS0",
          "type": 0
        }
      ],
      "port": 0,
      "outOfService": false,
      "registerOffsets": []
    }
  ],
  "updateHardwareErrors": [],
  "locusId": "",
  "syncToLocus": false,
  "taskKeys": [],
  "readOnly": false,
  "canAddHardware": false
}
```

[Return to top](#apieditsitehardware)

