<a id="top"></a>
# /api/edit/sitehardware

[← Back to Index](../logs.md)

**Methods:** PUT  
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
      "type": "array",
      "items": {
        "type": "unknown"
      }
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
PUT /api/edit/sitehardware
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/S68143/administration/hardware/list
```

**Payload:**

```json
{
  "canAddHardware": false,
  "hardware": [
    {
      "address": "0",
      "description": "Cell Modem (Pepwave)",
      "driverId": 19759,
      "driverName": "Pepwave Wireless SNMP",
      "functionCode": 31,
      "functionId": "CE0",
      "gatewayId": "1932-1C3F-8F71",
      "gatewayName": "",
      "hardwareKey": "H511563",
      "index": 2,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [],
      "serialNumber": "1932-1C3F-8F71",
      "settings": [
        {
          "index": 0,
          "name": "dev:portMode",
          "originalValue": "N/A",
          "type": 0,
          "value": "N/A"
        },
        {
          "index": 1,
          "name": "dev:community",
          "originalValue": "ae",
          "type": 0,
          "value": "ae"
        },
        {
          "index": 2,
          "name": "dev:authentication",
          "originalValue": "alsoenergy",
          "type": 0,
          "value": "alsoenergy"
        },
        {
          "index": 3,
          "name": "dev:privacy",
          "originalValue": "alsoenergy",
          "type": 0,
          "value": "alsoenergy"
        },
        {
          "index": 4,
          "name": "ShortName",
          "originalValue": "CE0",
          "type": 0,
          "value": "CE0"
        }
      ],
      "sort": 1,
      "ts": "2025-03-13T18:25:44Z",
      "unitId": 0
    },
    {
      "address": "0",
      "description": "PowerLogger 1000",
      "driverId": 325,
      "driverName": "PowerLogger 1000",
      "functionCode": 10,
      "functionId": "GW0",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511564",
      "index": 3,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:portMode",
          "originalValue": "N/A",
          "type": 0,
          "value": "N/A"
        },
        {
          "index": 1,
          "name": "dev:rate",
          "originalValue": "200",
          "type": 0,
          "value": "200"
        },
        {
          "index": 2,
          "name": "ShortName",
          "originalValue": "GW0",
          "type": 0,
          "value": "GW0"
        }
      ],
      "sort": 2,
      "ts": "2024-07-15T13:27:46Z",
      "unitId": 0
    },
    {
      "address": "192.168.13.41",
      "description": "Accuvim II - PV Prod Meter - M0",
      "driverId": 19601,
      "driverName": "AccuEnergy Acuvim II(R-D-5A) Primary Mode(SS)Standard",
      "functionCode": 2,
      "functionId": "PM0",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511565",
      "index": 4,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [
        {
          "index": 0,
          "name": "",
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Delivered Raw",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9010,
          "registerModbusName": "Active Energy Received Raw",
          "value": 0
        },
        {
          "index": 2,
          "name": "",
          "registerAddress": 9020,
          "registerModbusName": "Active Energy Net Raw",
          "value": 0
        },
        {
          "index": 3,
          "name": "KWHrecOffset",
          "registerAddress": 16456,
          "registerModbusName": "Import energy",
          "value": 0
        },
        {
          "index": 4,
          "name": "KWHdelOffset",
          "registerAddress": 16458,
          "registerModbusName": "Export energy",
          "value": 0
        },
        {
          "index": 5,
          "name": "",
          "registerAddress": 16460,
          "registerModbusName": "Reactive Import energy",
          "value": 0
        },
        {
          "index": 6,
          "name": "",
          "registerAddress": 16462,
          "registerModbusName": "Reactive Export energy",
          "value": 0
        },
        {
          "index": 7,
          "name": "KWHoffset",
          "registerAddress": 16466,
          "registerModbusName": "Total energy net",
          "value": 0
        },
        {
          "index": 8,
          "name": "",
          "registerAddress": 16470,
          "registerModbusName": "Reactive Total energy net",
          "value": 0
        },
        {
          "index": 9,
          "name": "",
          "registerAddress": 16472,
          "registerModbusName": "Apparent Energy",
          "value": 0
        }
      ],
      "serialNumber": "AHB54010438",
      "settings": [
        {
          "index": 0,
          "name": "dev:portMode",
          "originalValue": "N/A",
          "type": 0,
          "value": "N/A"
        },
        {
          "index": 1,
          "name": "dev:UnitID",
          "originalValue": 1,
          "type": 1,
          "value": 1
        },
        {
          "index": 2,
          "name": "dev:TCPport",
          "originalValue": 502,
          "type": 1,
          "value": 502
        },
        {
          "index": 3,
          "name": "dev:RegOffset",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:ScaleKW",
          "originalValue": 0.001,
          "type": 2,
          "value": 0.001
        },
        {
          "index": 5,
          "name": "dev:Reverse",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 6,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 7,
          "name": "dev:ScaleAmps",
          "originalValue": 1,
          "type": 2,
          "value": 1
        },
        {
          "index": 8,
          "name": "dev:ScaleVolts",
          "originalValue": 1,
          "type": 2,
          "value": 1
        },
        {
          "index": 9,
          "name": "ShortName",
          "originalValue": "PM0",
          "type": 0,
          "value": "PM0"
        }
      ],
      "sort": 3,
      "ts": "2024-07-15T13:28:32Z",
      "unitId": 1
    },
    {
      "address": "192.168.13.42",
      "description": "Accuvim II - SITE??  Meter - M1",
      "driverId": 19601,
      "driverName": "AccuEnergy Acuvim II(R-D-5A) Primary Mode(SS)Standard",
      "functionCode": 2,
      "functionId": "PM1",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511566",
      "index": 5,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [
        {
          "index": 0,
          "name": "",
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Delivered Raw",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9010,
          "registerModbusName": "Active Energy Received Raw",
          "value": 0
        },
        {
          "index": 2,
          "name": "",
          "registerAddress": 9020,
          "registerModbusName": "Active Energy Net Raw",
          "value": 0
        },
        {
          "index": 3,
          "name": "KWHrecOffset",
          "registerAddress": 16456,
          "registerModbusName": "Import energy",
          "value": 0
        },
        {
          "index": 4,
          "name": "KWHdelOffset",
          "registerAddress": 16458,
          "registerModbusName": "Export energy",
          "value": 0
        },
        {
          "index": 5,
          "name": "",
          "registerAddress": 16460,
          "registerModbusName": "Reactive Import energy",
          "value": 0
        },
        {
          "index": 6,
          "name": "",
          "registerAddress": 16462,
          "registerModbusName": "Reactive Export energy",
          "value": 0
        },
        {
          "index": 7,
          "name": "KWHoffset",
          "registerAddress": 16466,
          "registerModbusName": "Total energy net",
          "value": 0
        },
        {
          "index": 8,
          "name": "",
          "registerAddress": 16470,
          "registerModbusName": "Reactive Total energy net",
          "value": 0
        },
        {
          "index": 9,
          "name": "",
          "registerAddress": 16472,
          "registerModbusName": "Apparent Energy",
          "value": 0
        }
      ],
      "serialNumber": "AHB54010502",
      "settings": [
        {
          "index": 0,
          "name": "dev:portMode",
          "originalValue": "N/A",
          "type": 0,
          "value": "N/A"
        },
        {
          "index": 1,
          "name": "dev:UnitID",
          "originalValue": 1,
          "type": 1,
          "value": 1
        },
        {
          "index": 2,
          "name": "dev:TCPport",
          "originalValue": 502,
          "type": 1,
          "value": 502
        },
        {
          "index": 3,
          "name": "dev:RegOffset",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:ScaleKW",
          "originalValue": 0.001,
          "type": 2,
          "value": 0.001
        },
        {
          "index": 5,
          "name": "dev:Reverse",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 6,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 7,
          "name": "dev:ScaleAmps",
          "originalValue": 1,
          "type": 2,
          "value": 1
        },
        {
          "index": 8,
          "name": "dev:ScaleVolts",
          "originalValue": 1,
          "type": 2,
          "value": 1
        },
        {
          "index": 9,
          "name": "ShortName",
          "originalValue": "PM1",
          "type": 0,
          "value": "PM1"
        }
      ],
      "sort": 4,
      "ts": "2025-12-22T17:43:14Z",
      "unitId": 1
    },
    {
      "address": "192.168.13.161",
      "description": "SMA Data Manager",
      "driverId": 2442,
      "driverName": "SMA Data Manager M",
      "functionCode": 28,
      "functionId": "IG0",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511567",
      "index": 6,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [
        {
          "index": 0,
          "name": "",
          "registerAddress": 30513,
          "registerModbusName": "Total AC Energy",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:portMode",
          "originalValue": "N/A",
          "type": 0,
          "value": "N/A"
        },
        {
          "index": 1,
          "name": "dev:RegOffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 2,
          "name": "dev:UnitID",
          "originalValue": 1,
          "type": 1,
          "value": 1
        },
        {
          "index": 3,
          "name": "ShortName",
          "originalValue": "IG0",
          "type": 0,
          "value": "IG0"
        }
      ],
      "sort": 10,
      "ts": "2024-07-15T13:29:12Z",
      "unitId": 1
    },
    {
      "address": "192.168.13.51",
      "description": "INVERTER 1",
      "driverId": 19880,
      "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
      "functionCode": 1,
      "functionId": "PV0",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511568",
      "index": 0,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [
        {
          "index": 0,
          "name": "",
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Net Raw",
          "value": 0
        },
        {
          "index": 1,
          "name": "KWHoffset",
          "registerAddress": 30531,
          "registerModbusName": "Active Energy Net",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:portMode",
          "originalValue": "N/A",
          "type": 0,
          "value": "N/A"
        },
        {
          "index": 1,
          "name": "dev:UnitID",
          "originalValue": 3,
          "type": 1,
          "value": 3
        },
        {
          "index": 2,
          "name": "dev:RegOffset",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 3,
          "name": "dev:tcpretry",
          "originalValue": "3",
          "type": 0,
          "value": "3"
        },
        {
          "index": 4,
          "name": "dev:ScaleKWH",
          "originalValue": 1,
          "type": 2,
          "value": 1
        },
        {
          "index": 5,
          "name": "dev:ScaleKW",
          "originalValue": 0.001,
          "type": 2,
          "value": 0.001
        },
        {
          "index": 6,
          "name": "dev:ScaleV",
          "originalValue": "0.01",
          "type": 0,
          "value": "0.01"
        },
        {
          "index": 7,
          "name": "dev:ScaleI",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.01",
          "type": 0,
          "value": "0.01"
        },
        {
          "index": 9,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 11,
          "name": "dev:ScaleTemp",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 12,
          "name": "dev:ScaleKVA",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 13,
          "name": "ShortName",
          "originalValue": "PV0",
          "type": 0,
          "value": "PV0"
        }
      ],
      "sort": 11,
      "ts": "2025-12-22T19:21:53Z",
      "unitId": 3
    },
    {
      "address": "192.168.13.52",
      "description": "INVERTER 2",
      "driverId": 19880,
      "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
      "functionCode": 1,
      "functionId": "PV1",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511569",
      "index": 7,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [
        {
          "index": 0,
          "name": "",
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Net Raw",
          "value": 0
        },
        {
          "index": 1,
          "name": "KWHoffset",
          "registerAddress": 30531,
          "registerModbusName": "Active Energy Net",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:portMode",
          "originalValue": "N/A",
          "type": 0,
          "value": "N/A"
        },
        {
          "index": 1,
          "name": "dev:UnitID",
          "originalValue": 3,
          "type": 1,
          "value": 3
        },
        {
          "index": 2,
          "name": "dev:TCPport",
          "originalValue": 502,
          "type": 1,
          "value": 502
        },
        {
          "index": 3,
          "name": "dev:RegOffset",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:tcpretry",
          "originalValue": "3",
          "type": 0,
          "value": "3"
        },
        {
          "index": 5,
          "name": "dev:KWHoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 6,
          "name": "dev:ScaleKWH",
          "originalValue": "1",
          "type": 0,
          "value": "1"
        },
        {
          "index": 7,
          "name": "dev:ScaleKW",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 8,
          "name": "dev:ScaleV",
          "originalValue": "0.01",
          "type": 0,
          "value": "0.01"
        },
        {
          "index": 9,
          "name": "dev:ScaleI",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.01",
          "type": 0,
          "value": "0.01"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 12,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 13,
          "name": "dev:ScaleTemp",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVA",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV1",
          "type": 0,
          "value": "PV1"
        }
      ],
      "sort": 12,
      "ts": "2025-11-25T22:12:40Z",
      "unitId": 3
    },
    {
      "address": "192.168.13.53",
      "description": "INVERTER 3",
      "driverId": 19880,
      "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
      "functionCode": 1,
      "functionId": "PV2",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511570",
      "index": 8,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [
        {
          "index": 0,
          "name": "",
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Net Raw",
          "value": 0
        },
        {
          "index": 1,
          "name": "KWHoffset",
          "registerAddress": 30531,
          "registerModbusName": "Active Energy Net",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:portMode",
          "originalValue": "N/A",
          "type": 0,
          "value": "N/A"
        },
        {
          "index": 1,
          "name": "dev:UnitID",
          "originalValue": 3,
          "type": 1,
          "value": 3
        },
        {
          "index": 2,
          "name": "dev:TCPport",
          "originalValue": 502,
          "type": 1,
          "value": 502
        },
        {
          "index": 3,
          "name": "dev:RegOffset",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:tcpretry",
          "originalValue": "3",
          "type": 0,
          "value": "3"
        },
        {
          "index": 5,
          "name": "dev:KWHoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 6,
          "name": "dev:ScaleKWH",
          "originalValue": "1",
          "type": 0,
          "value": "1"
        },
        {
          "index": 7,
          "name": "dev:ScaleKW",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 8,
          "name": "dev:ScaleV",
          "originalValue": "0.01",
          "type": 0,
          "value": "0.01"
        },
        {
          "index": 9,
          "name": "dev:ScaleI",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.01",
          "type": 0,
          "value": "0.01"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 12,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 13,
          "name": "dev:ScaleTemp",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVA",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV2",
          "type": 0,
          "value": "PV2"
        }
      ],
      "sort": 13,
      "ts": "2025-11-25T22:12:43Z",
      "unitId": 3
    },
    {
      "address": "192.168.13.54",
      "description": "INVERTER 4",
      "driverId": 19880,
      "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
      "functionCode": 1,
      "functionId": "PV3",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511571",
      "index": 9,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [
        {
          "index": 0,
          "name": "",
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Net Raw",
          "value": 0
        },
        {
          "index": 1,
          "name": "KWHoffset",
          "registerAddress": 30531,
          "registerModbusName": "Active Energy Net",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:portMode",
          "originalValue": "N/A",
          "type": 0,
          "value": "N/A"
        },
        {
          "index": 1,
          "name": "dev:UnitID",
          "originalValue": 3,
          "type": 1,
          "value": 3
        },
        {
          "index": 2,
          "name": "dev:TCPport",
          "originalValue": 502,
          "type": 1,
          "value": 502
        },
        {
          "index": 3,
          "name": "dev:RegOffset",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:tcpretry",
          "originalValue": "3",
          "type": 0,
          "value": "3"
        },
        {
          "index": 5,
          "name": "dev:KWHoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 6,
          "name": "dev:ScaleKWH",
          "originalValue": "1",
          "type": 0,
          "value": "1"
        },
        {
          "index": 7,
          "name": "dev:ScaleKW",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 8,
          "name": "dev:ScaleV",
          "originalValue": "0.01",
          "type": 0,
          "value": "0.01"
        },
        {
          "index": 9,
          "name": "dev:ScaleI",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.01",
          "type": 0,
          "value": "0.01"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 12,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 13,
          "name": "dev:ScaleTemp",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVA",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV3",
          "type": 0,
          "value": "PV3"
        }
      ],
      "sort": 14,
      "ts": "2025-11-25T22:12:47Z",
      "unitId": 3
    },
    {
      "address": "192.168.13.55",
      "description": "INVERTER 5",
      "driverId": 19880,
      "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
      "functionCode": 1,
      "functionId": "PV4",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511572",
      "index": 10,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [
        {
          "index": 0,
          "name": "",
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Net Raw",
          "value": 0
        },
        {
          "index": 1,
          "name": "KWHoffset",
          "registerAddress": 30531,
          "registerModbusName": "Active Energy Net",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:portMode",
          "originalValue": "N/A",
          "type": 0,
          "value": "N/A"
        },
        {
          "index": 1,
          "name": "dev:UnitID",
          "originalValue": 3,
          "type": 1,
          "value": 3
        },
        {
          "index": 2,
          "name": "dev:TCPport",
          "originalValue": 502,
          "type": 1,
          "value": 502
        },
        {
          "index": 3,
          "name": "dev:RegOffset",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:tcpretry",
          "originalValue": "3",
          "type": 0,
          "value": "3"
        },
        {
          "index": 5,
          "name": "dev:KWHoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 6,
          "name": "dev:ScaleKWH",
          "originalValue": "1",
          "type": 0,
          "value": "1"
        },
        {
          "index": 7,
          "name": "dev:ScaleKW",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 8,
          "name": "dev:ScaleV",
          "originalValue": "0.01",
          "type": 0,
          "value": "0.01"
        },
        {
          "index": 9,
          "name": "dev:ScaleI",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.01",
          "type": 0,
          "value": "0.01"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 12,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 13,
          "name": "dev:ScaleTemp",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVA",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV4",
          "type": 0,
          "value": "PV4"
        }
      ],
      "sort": 15,
      "ts": "2025-11-25T22:12:52Z",
      "unitId": 3
    },
    {
      "address": "192.168.13.56",
      "description": "INVERTER 6",
      "driverId": 19880,
      "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
      "functionCode": 1,
      "functionId": "PV5",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511573",
      "index": 11,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [
        {
          "index": 0,
          "name": "",
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Net Raw",
          "value": 0
        },
        {
          "index": 1,
          "name": "KWHoffset",
          "registerAddress": 30531,
          "registerModbusName": "Active Energy Net",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:portMode",
          "originalValue": "N/A",
          "type": 0,
          "value": "N/A"
        },
        {
          "index": 1,
          "name": "dev:UnitID",
          "originalValue": 3,
          "type": 1,
          "value": 3
        },
        {
          "index": 2,
          "name": "dev:TCPport",
          "originalValue": 502,
          "type": 1,
          "value": 502
        },
        {
          "index": 3,
          "name": "dev:RegOffset",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:tcpretry",
          "originalValue": "3",
          "type": 0,
          "value": "3"
        },
        {
          "index": 5,
          "name": "dev:KWHoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 6,
          "name": "dev:ScaleKWH",
          "originalValue": "1",
          "type": 0,
          "value": "1"
        },
        {
          "index": 7,
          "name": "dev:ScaleKW",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 8,
          "name": "dev:ScaleV",
          "originalValue": "0.01",
          "type": 0,
          "value": "0.01"
        },
        {
          "index": 9,
          "name": "dev:ScaleI",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.01",
          "type": 0,
          "value": "0.01"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 12,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 13,
          "name": "dev:ScaleTemp",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVA",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV5",
          "type": 0,
          "value": "PV5"
        }
      ],
      "sort": 16,
      "ts": "2025-11-25T22:12:55Z",
      "unitId": 3
    },
    {
      "address": "192.168.13.57",
      "description": "INVERTER 7",
      "driverId": 19880,
      "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
      "functionCode": 1,
      "functionId": "PV6",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511574",
      "index": 12,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [
        {
          "index": 0,
          "name": "",
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Net Raw",
          "value": 0
        },
        {
          "index": 1,
          "name": "KWHoffset",
          "registerAddress": 30531,
          "registerModbusName": "Active Energy Net",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:portMode",
          "originalValue": "N/A",
          "type": 0,
          "value": "N/A"
        },
        {
          "index": 1,
          "name": "dev:UnitID",
          "originalValue": 3,
          "type": 1,
          "value": 3
        },
        {
          "index": 2,
          "name": "dev:TCPport",
          "originalValue": 502,
          "type": 1,
          "value": 502
        },
        {
          "index": 3,
          "name": "dev:RegOffset",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:tcpretry",
          "originalValue": "3",
          "type": 0,
          "value": "3"
        },
        {
          "index": 5,
          "name": "dev:KWHoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 6,
          "name": "dev:ScaleKWH",
          "originalValue": "1",
          "type": 0,
          "value": "1"
        },
        {
          "index": 7,
          "name": "dev:ScaleKW",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 8,
          "name": "dev:ScaleV",
          "originalValue": "0.01",
          "type": 0,
          "value": "0.01"
        },
        {
          "index": 9,
          "name": "dev:ScaleI",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.01",
          "type": 0,
          "value": "0.01"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 12,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 13,
          "name": "dev:ScaleTemp",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVA",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV6",
          "type": 0,
          "value": "PV6"
        }
      ],
      "sort": 17,
      "ts": "2025-11-25T22:12:59Z",
      "unitId": 3
    },
    {
      "address": "6",
      "description": "REFERENCE CELL - POA",
      "driverId": 3588,
      "driverName": "IMT Reference Cell (Standard) 3x Mod Temp",
      "functionCode": 5,
      "functionId": "WS1",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511575",
      "index": 13,
      "outOfService": false,
      "port": 2,
      "registerOffsets": [],
      "serialNumber": "485-32003-23-24211210",
      "settings": [
        {
          "index": 0,
          "name": "dev:baud",
          "originalValue": 9600,
          "type": 1,
          "value": 9600
        },
        {
          "index": 1,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 2,
          "name": "dev:RegOffset",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 3,
          "name": "MinTemp",
          "originalValue": -30,
          "type": 2,
          "value": -30
        },
        {
          "index": 4,
          "name": "MaxTemp",
          "originalValue": 160,
          "type": 2,
          "value": 160
        },
        {
          "index": 5,
          "name": "weather",
          "originalValue": 132,
          "type": 1,
          "value": 132
        },
        {
          "index": 6,
          "name": "dev:ScalePOA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:POAOffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 8,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleWindSP",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 10,
          "name": "dev:ScaleGHI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:GHIOffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 12,
          "name": "ShortName",
          "originalValue": "WS1",
          "type": 0,
          "value": "WS1"
        }
      ],
      "sort": 41,
      "ts": "2024-07-11T21:17:30Z",
      "unitId": 0
    },
    {
      "address": "16",
      "description": "WEATHER STATION",
      "driverId": 8164,
      "driverName": "AE Integrated WS Standard (FW 114+) (Qualified)",
      "functionCode": 5,
      "functionId": "WS2",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511576",
      "index": 14,
      "outOfService": false,
      "port": 2,
      "registerOffsets": [],
      "serialNumber": "1V0177-8",
      "settings": [
        {
          "index": 0,
          "name": "dev:baud",
          "originalValue": 9600,
          "type": 1,
          "value": 9600
        },
        {
          "index": 1,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 2,
          "name": "dev:RegOffset",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 3,
          "name": "MinTemp",
          "originalValue": -30,
          "type": 2,
          "value": -30
        },
        {
          "index": 4,
          "name": "MaxTemp",
          "originalValue": 160,
          "type": 2,
          "value": 160
        },
        {
          "index": 5,
          "name": "weather",
          "originalValue": 1057,
          "type": 1,
          "value": 1057
        },
        {
          "index": 6,
          "name": "dev:P1",
          "originalValue": "K",
          "type": 0,
          "value": "K"
        },
        {
          "index": 7,
          "name": "dev:P2",
          "originalValue": "W",
          "type": 0,
          "value": "W"
        },
        {
          "index": 8,
          "name": "dev:K1",
          "originalValue": "1.00",
          "type": 0,
          "value": "1.00"
        },
        {
          "index": 9,
          "name": "dev:K2",
          "originalValue": "10.0",
          "type": 0,
          "value": "10.0"
        },
        {
          "index": 10,
          "name": "dev:T1",
          "originalValue": "1",
          "type": 0,
          "value": "1"
        },
        {
          "index": 11,
          "name": "dev:TR1",
          "originalValue": "S",
          "type": 0,
          "value": "S"
        },
        {
          "index": 12,
          "name": "dev:TR2",
          "originalValue": "W",
          "type": 0,
          "value": "W"
        },
        {
          "index": 13,
          "name": "dev:SWAP",
          "originalValue": "1",
          "type": 0,
          "value": "1"
        },
        {
          "index": 14,
          "name": "ShortName",
          "originalValue": "WS2",
          "type": 0,
          "value": "WS2"
        }
      ],
      "sort": 42,
      "ts": "2024-07-11T21:18:06Z",
      "unitId": 0
    },
    {
      "address": "0",
      "description": "Solcast Virtual Weather Station",
      "driverId": 19015,
      "driverName": "External Weather Source (full)",
      "functionCode": 5,
      "functionId": "WS0",
      "gatewayId": "",
      "gatewayName": "",
      "hardwareKey": "H494021",
      "index": 1,
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
        },
        {
          "index": 4,
          "name": "ShortName",
          "originalValue": "WS0",
          "type": 0,
          "value": "WS0"
        }
      ],
      "sort": 0,
      "ts": "2024-03-08T14:48:26Z",
      "unitId": 0
    }
  ],
  "key": "S68143",
  "locusId": "",
  "readOnly": false,
  "syncToLocus": false,
  "taskKeys": [],
  "ts": "2025-12-22T19:21:53Z",
  "updateHardwareErrors": null
}
```

**Response:**

```json
{
  "canAddHardware": false,
  "hardware": [
    {
      "address": "0",
      "description": "Cell Modem (Pepwave)",
      "driverId": 19759,
      "driverName": "Pepwave Wireless SNMP",
      "functionCode": 31,
      "functionId": "CE0",
      "gatewayId": "1932-1C3F-8F71",
      "gatewayName": "",
      "hardwareKey": "H511563",
      "index": 2,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [],
      "serialNumber": "1932-1C3F-8F71",
      "settings": [
        {
          "index": 0,
          "name": "dev:portMode",
          "originalValue": "N/A",
          "type": 0,
          "value": "N/A"
        },
        {
          "index": 1,
          "name": "dev:community",
          "originalValue": "ae",
          "type": 0,
          "value": "ae"
        },
        {
          "index": 2,
          "name": "dev:authentication",
          "originalValue": "alsoenergy",
          "type": 0,
          "value": "alsoenergy"
        },
        {
          "index": 3,
          "name": "dev:privacy",
          "originalValue": "alsoenergy",
          "type": 0,
          "value": "alsoenergy"
        },
        {
          "index": 4,
          "name": "ShortName",
          "originalValue": "CE0",
          "type": 0,
          "value": "CE0"
        }
      ],
      "sort": 1,
      "ts": "2025-03-13T18:25:44Z",
      "unitId": 0
    },
    {
      "address": "0",
      "description": "PowerLogger 1000",
      "driverId": 325,
      "driverName": "PowerLogger 1000",
      "functionCode": 10,
      "functionId": "GW0",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511564",
      "index": 3,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:portMode",
          "originalValue": "N/A",
          "type": 0,
          "value": "N/A"
        },
        {
          "index": 1,
          "name": "dev:rate",
          "originalValue": "200",
          "type": 0,
          "value": "200"
        },
        {
          "index": 2,
          "name": "ShortName",
          "originalValue": "GW0",
          "type": 0,
          "value": "GW0"
        }
      ],
      "sort": 2,
      "ts": "2024-07-15T13:27:46Z",
      "unitId": 0
    },
    {
      "address": "192.168.13.41",
      "description": "Accuvim II - PV Prod Meter - M0",
      "driverId": 19601,
      "driverName": "AccuEnergy Acuvim II(R-D-5A) Primary Mode(SS)Standard",
      "functionCode": 2,
      "functionId": "PM0",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511565",
      "index": 4,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [
        {
          "index": 0,
          "name": "",
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Delivered Raw",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9010,
          "registerModbusName": "Active Energy Received Raw",
          "value": 0
        },
        {
          "index": 2,
          "name": "",
          "registerAddress": 9020,
          "registerModbusName": "Active Energy Net Raw",
          "value": 0
        },
        {
          "index": 3,
          "name": "KWHrecOffset",
          "registerAddress": 16456,
          "registerModbusName": "Import energy",
          "value": 0
        },
        {
          "index": 4,
          "name": "KWHdelOffset",
          "registerAddress": 16458,
          "registerModbusName": "Export energy",
          "value": 0
        },
        {
          "index": 5,
          "name": "",
          "registerAddress": 16460,
          "registerModbusName": "Reactive Import energy",
          "value": 0
        },
        {
          "index": 6,
          "name": "",
          "registerAddress": 16462,
          "registerModbusName": "Reactive Export energy",
          "value": 0
        },
        {
          "index": 7,
          "name": "KWHoffset",
          "registerAddress": 16466,
          "registerModbusName": "Total energy net",
          "value": 0
        },
        {
          "index": 8,
          "name": "",
          "registerAddress": 16470,
          "registerModbusName": "Reactive Total energy net",
          "value": 0
        },
        {
          "index": 9,
          "name": "",
          "registerAddress": 16472,
          "registerModbusName": "Apparent Energy",
          "value": 0
        }
      ],
      "serialNumber": "AHB54010438",
      "settings": [
        {
          "index": 0,
          "name": "dev:portMode",
          "originalValue": "N/A",
          "type": 0,
          "value": "N/A"
        },
        {
          "index": 1,
          "name": "dev:UnitID",
          "originalValue": 1,
          "type": 1,
          "value": 1
        },
        {
          "index": 2,
          "name": "dev:TCPport",
          "originalValue": 502,
          "type": 1,
          "value": 502
        },
        {
          "index": 3,
          "name": "dev:RegOffset",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:ScaleKW",
          "originalValue": 0.001,
          "type": 2,
          "value": 0.001
        },
        {
          "index": 5,
          "name": "dev:Reverse",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 6,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 7,
          "name": "dev:ScaleAmps",
          "originalValue": 1,
          "type": 2,
          "value": 1
        },
        {
          "index": 8,
          "name": "dev:ScaleVolts",
          "originalValue": 1,
          "type": 2,
          "value": 1
        },
        {
          "index": 9,
          "name": "ShortName",
          "originalValue": "PM0",
          "type": 0,
          "value": "PM0"
        }
      ],
      "sort": 3,
      "ts": "2024-07-15T13:28:32Z",
      "unitId": 1
    },
    {
      "address": "192.168.13.42",
      "description": "Accuvim II - SITE??  Meter - M1",
      "driverId": 19601,
      "driverName": "AccuEnergy Acuvim II(R-D-5A) Primary Mode(SS)Standard",
      "functionCode": 2,
      "functionId": "PM1",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511566",
      "index": 5,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [
        {
          "index": 0,
          "name": "",
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Delivered Raw",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9010,
          "registerModbusName": "Active Energy Received Raw",
          "value": 0
        },
        {
          "index": 2,
          "name": "",
          "registerAddress": 9020,
          "registerModbusName": "Active Energy Net Raw",
          "value": 0
        },
        {
          "index": 3,
          "name": "KWHrecOffset",
          "registerAddress": 16456,
          "registerModbusName": "Import energy",
          "value": 0
        },
        {
          "index": 4,
          "name": "KWHdelOffset",
          "registerAddress": 16458,
          "registerModbusName": "Export energy",
          "value": 0
        },
        {
          "index": 5,
          "name": "",
          "registerAddress": 16460,
          "registerModbusName": "Reactive Import energy",
          "value": 0
        },
        {
          "index": 6,
          "name": "",
          "registerAddress": 16462,
          "registerModbusName": "Reactive Export energy",
          "value": 0
        },
        {
          "index": 7,
          "name": "KWHoffset",
          "registerAddress": 16466,
          "registerModbusName": "Total energy net",
          "value": 0
        },
        {
          "index": 8,
          "name": "",
          "registerAddress": 16470,
          "registerModbusName": "Reactive Total energy net",
          "value": 0
        },
        {
          "index": 9,
          "name": "",
          "registerAddress": 16472,
          "registerModbusName": "Apparent Energy",
          "value": 0
        }
      ],
      "serialNumber": "AHB54010502",
      "settings": [
        {
          "index": 0,
          "name": "dev:portMode",
          "originalValue": "N/A",
          "type": 0,
          "value": "N/A"
        },
        {
          "index": 1,
          "name": "dev:UnitID",
          "originalValue": 1,
          "type": 1,
          "value": 1
        },
        {
          "index": 2,
          "name": "dev:TCPport",
          "originalValue": 502,
          "type": 1,
          "value": 502
        },
        {
          "index": 3,
          "name": "dev:RegOffset",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:ScaleKW",
          "originalValue": 0.001,
          "type": 2,
          "value": 0.001
        },
        {
          "index": 5,
          "name": "dev:Reverse",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 6,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 7,
          "name": "dev:ScaleAmps",
          "originalValue": 1,
          "type": 2,
          "value": 1
        },
        {
          "index": 8,
          "name": "dev:ScaleVolts",
          "originalValue": 1,
          "type": 2,
          "value": 1
        },
        {
          "index": 9,
          "name": "ShortName",
          "originalValue": "PM1",
          "type": 0,
          "value": "PM1"
        }
      ],
      "sort": 4,
      "ts": "2025-12-22T22:01:11Z",
      "unitId": 1
    },
    {
      "address": "192.168.13.161",
      "description": "SMA Data Manager",
      "driverId": 2442,
      "driverName": "SMA Data Manager M",
      "functionCode": 28,
      "functionId": "IG0",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511567",
      "index": 6,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [
        {
          "index": 0,
          "name": "",
          "registerAddress": 30513,
          "registerModbusName": "Total AC Energy",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:portMode",
          "originalValue": "N/A",
          "type": 0,
          "value": "N/A"
        },
        {
          "index": 1,
          "name": "dev:RegOffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 2,
          "name": "dev:UnitID",
          "originalValue": 1,
          "type": 1,
          "value": 1
        },
        {
          "index": 3,
          "name": "ShortName",
          "originalValue": "IG0",
          "type": 0,
          "value": "IG0"
        }
      ],
      "sort": 10,
      "ts": "2024-07-15T13:29:12Z",
      "unitId": 1
    },
    {
      "address": "192.168.13.51",
      "description": "INVERTER 1",
      "driverId": 19880,
      "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
      "functionCode": 1,
      "functionId": "PV0",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511568",
      "index": 0,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [
        {
          "index": 0,
          "name": "",
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Net Raw",
          "value": 0
        },
        {
          "index": 1,
          "name": "KWHoffset",
          "registerAddress": 30531,
          "registerModbusName": "Active Energy Net",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:portMode",
          "originalValue": "N/A",
          "type": 0,
          "value": "N/A"
        },
        {
          "index": 1,
          "name": "dev:UnitID",
          "originalValue": 3,
          "type": 1,
          "value": 3
        },
        {
          "index": 2,
          "name": "dev:RegOffset",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 3,
          "name": "dev:tcpretry",
          "originalValue": "3",
          "type": 0,
          "value": "3"
        },
        {
          "index": 4,
          "name": "dev:ScaleKWH",
          "originalValue": 1,
          "type": 2,
          "value": 1
        },
        {
          "index": 5,
          "name": "dev:ScaleKW",
          "originalValue": 0.001,
          "type": 2,
          "value": 0.001
        },
        {
          "index": 6,
          "name": "dev:ScaleV",
          "originalValue": "0.01",
          "type": 0,
          "value": "0.01"
        },
        {
          "index": 7,
          "name": "dev:ScaleI",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.01",
          "type": 0,
          "value": "0.01"
        },
        {
          "index": 9,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 11,
          "name": "dev:ScaleTemp",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 12,
          "name": "dev:ScaleKVA",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 13,
          "name": "ShortName",
          "originalValue": "PV0",
          "type": 0,
          "value": "PV0"
        }
      ],
      "sort": 11,
      "ts": "2025-12-22T19:21:53Z",
      "unitId": 3
    },
    {
      "address": "192.168.13.52",
      "description": "INVERTER 2",
      "driverId": 19880,
      "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
      "functionCode": 1,
      "functionId": "PV1",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511569",
      "index": 7,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [
        {
          "index": 0,
          "name": "",
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Net Raw",
          "value": 0
        },
        {
          "index": 1,
          "name": "KWHoffset",
          "registerAddress": 30531,
          "registerModbusName": "Active Energy Net",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:portMode",
          "originalValue": "N/A",
          "type": 0,
          "value": "N/A"
        },
        {
          "index": 1,
          "name": "dev:UnitID",
          "originalValue": 3,
          "type": 1,
          "value": 3
        },
        {
          "index": 2,
          "name": "dev:TCPport",
          "originalValue": 502,
          "type": 1,
          "value": 502
        },
        {
          "index": 3,
          "name": "dev:RegOffset",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:tcpretry",
          "originalValue": "3",
          "type": 0,
          "value": "3"
        },
        {
          "index": 5,
          "name": "dev:KWHoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 6,
          "name": "dev:ScaleKWH",
          "originalValue": "1",
          "type": 0,
          "value": "1"
        },
        {
          "index": 7,
          "name": "dev:ScaleKW",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 8,
          "name": "dev:ScaleV",
          "originalValue": "0.01",
          "type": 0,
          "value": "0.01"
        },
        {
          "index": 9,
          "name": "dev:ScaleI",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.01",
          "type": 0,
          "value": "0.01"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 12,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 13,
          "name": "dev:ScaleTemp",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVA",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV1",
          "type": 0,
          "value": "PV1"
        }
      ],
      "sort": 12,
      "ts": "2025-11-25T22:12:40Z",
      "unitId": 3
    },
    {
      "address": "192.168.13.53",
      "description": "INVERTER 3",
      "driverId": 19880,
      "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
      "functionCode": 1,
      "functionId": "PV2",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511570",
      "index": 8,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [
        {
          "index": 0,
          "name": "",
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Net Raw",
          "value": 0
        },
        {
          "index": 1,
          "name": "KWHoffset",
          "registerAddress": 30531,
          "registerModbusName": "Active Energy Net",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:portMode",
          "originalValue": "N/A",
          "type": 0,
          "value": "N/A"
        },
        {
          "index": 1,
          "name": "dev:UnitID",
          "originalValue": 3,
          "type": 1,
          "value": 3
        },
        {
          "index": 2,
          "name": "dev:TCPport",
          "originalValue": 502,
          "type": 1,
          "value": 502
        },
        {
          "index": 3,
          "name": "dev:RegOffset",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:tcpretry",
          "originalValue": "3",
          "type": 0,
          "value": "3"
        },
        {
          "index": 5,
          "name": "dev:KWHoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 6,
          "name": "dev:ScaleKWH",
          "originalValue": "1",
          "type": 0,
          "value": "1"
        },
        {
          "index": 7,
          "name": "dev:ScaleKW",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 8,
          "name": "dev:ScaleV",
          "originalValue": "0.01",
          "type": 0,
          "value": "0.01"
        },
        {
          "index": 9,
          "name": "dev:ScaleI",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.01",
          "type": 0,
          "value": "0.01"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 12,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 13,
          "name": "dev:ScaleTemp",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVA",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV2",
          "type": 0,
          "value": "PV2"
        }
      ],
      "sort": 13,
      "ts": "2025-11-25T22:12:43Z",
      "unitId": 3
    },
    {
      "address": "192.168.13.54",
      "description": "INVERTER 4",
      "driverId": 19880,
      "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
      "functionCode": 1,
      "functionId": "PV3",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511571",
      "index": 9,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [
        {
          "index": 0,
          "name": "",
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Net Raw",
          "value": 0
        },
        {
          "index": 1,
          "name": "KWHoffset",
          "registerAddress": 30531,
          "registerModbusName": "Active Energy Net",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:portMode",
          "originalValue": "N/A",
          "type": 0,
          "value": "N/A"
        },
        {
          "index": 1,
          "name": "dev:UnitID",
          "originalValue": 3,
          "type": 1,
          "value": 3
        },
        {
          "index": 2,
          "name": "dev:TCPport",
          "originalValue": 502,
          "type": 1,
          "value": 502
        },
        {
          "index": 3,
          "name": "dev:RegOffset",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:tcpretry",
          "originalValue": "3",
          "type": 0,
          "value": "3"
        },
        {
          "index": 5,
          "name": "dev:KWHoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 6,
          "name": "dev:ScaleKWH",
          "originalValue": "1",
          "type": 0,
          "value": "1"
        },
        {
          "index": 7,
          "name": "dev:ScaleKW",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 8,
          "name": "dev:ScaleV",
          "originalValue": "0.01",
          "type": 0,
          "value": "0.01"
        },
        {
          "index": 9,
          "name": "dev:ScaleI",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.01",
          "type": 0,
          "value": "0.01"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 12,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 13,
          "name": "dev:ScaleTemp",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVA",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV3",
          "type": 0,
          "value": "PV3"
        }
      ],
      "sort": 14,
      "ts": "2025-11-25T22:12:47Z",
      "unitId": 3
    },
    {
      "address": "192.168.13.55",
      "description": "INVERTER 5",
      "driverId": 19880,
      "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
      "functionCode": 1,
      "functionId": "PV4",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511572",
      "index": 10,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [
        {
          "index": 0,
          "name": "",
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Net Raw",
          "value": 0
        },
        {
          "index": 1,
          "name": "KWHoffset",
          "registerAddress": 30531,
          "registerModbusName": "Active Energy Net",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:portMode",
          "originalValue": "N/A",
          "type": 0,
          "value": "N/A"
        },
        {
          "index": 1,
          "name": "dev:UnitID",
          "originalValue": 3,
          "type": 1,
          "value": 3
        },
        {
          "index": 2,
          "name": "dev:TCPport",
          "originalValue": 502,
          "type": 1,
          "value": 502
        },
        {
          "index": 3,
          "name": "dev:RegOffset",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:tcpretry",
          "originalValue": "3",
          "type": 0,
          "value": "3"
        },
        {
          "index": 5,
          "name": "dev:KWHoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 6,
          "name": "dev:ScaleKWH",
          "originalValue": "1",
          "type": 0,
          "value": "1"
        },
        {
          "index": 7,
          "name": "dev:ScaleKW",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 8,
          "name": "dev:ScaleV",
          "originalValue": "0.01",
          "type": 0,
          "value": "0.01"
        },
        {
          "index": 9,
          "name": "dev:ScaleI",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.01",
          "type": 0,
          "value": "0.01"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 12,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 13,
          "name": "dev:ScaleTemp",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVA",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV4",
          "type": 0,
          "value": "PV4"
        }
      ],
      "sort": 15,
      "ts": "2025-11-25T22:12:52Z",
      "unitId": 3
    },
    {
      "address": "192.168.13.56",
      "description": "INVERTER 6",
      "driverId": 19880,
      "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
      "functionCode": 1,
      "functionId": "PV5",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511573",
      "index": 11,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [
        {
          "index": 0,
          "name": "",
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Net Raw",
          "value": 0
        },
        {
          "index": 1,
          "name": "KWHoffset",
          "registerAddress": 30531,
          "registerModbusName": "Active Energy Net",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:portMode",
          "originalValue": "N/A",
          "type": 0,
          "value": "N/A"
        },
        {
          "index": 1,
          "name": "dev:UnitID",
          "originalValue": 3,
          "type": 1,
          "value": 3
        },
        {
          "index": 2,
          "name": "dev:TCPport",
          "originalValue": 502,
          "type": 1,
          "value": 502
        },
        {
          "index": 3,
          "name": "dev:RegOffset",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:tcpretry",
          "originalValue": "3",
          "type": 0,
          "value": "3"
        },
        {
          "index": 5,
          "name": "dev:KWHoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 6,
          "name": "dev:ScaleKWH",
          "originalValue": "1",
          "type": 0,
          "value": "1"
        },
        {
          "index": 7,
          "name": "dev:ScaleKW",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 8,
          "name": "dev:ScaleV",
          "originalValue": "0.01",
          "type": 0,
          "value": "0.01"
        },
        {
          "index": 9,
          "name": "dev:ScaleI",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.01",
          "type": 0,
          "value": "0.01"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 12,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 13,
          "name": "dev:ScaleTemp",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVA",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV5",
          "type": 0,
          "value": "PV5"
        }
      ],
      "sort": 16,
      "ts": "2025-11-25T22:12:55Z",
      "unitId": 3
    },
    {
      "address": "192.168.13.57",
      "description": "INVERTER 7",
      "driverId": 19880,
      "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
      "functionCode": 1,
      "functionId": "PV6",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511574",
      "index": 12,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [
        {
          "index": 0,
          "name": "",
          "registerAddress": 9000,
          "registerModbusName": "Active Energy Net Raw",
          "value": 0
        },
        {
          "index": 1,
          "name": "KWHoffset",
          "registerAddress": 30531,
          "registerModbusName": "Active Energy Net",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:portMode",
          "originalValue": "N/A",
          "type": 0,
          "value": "N/A"
        },
        {
          "index": 1,
          "name": "dev:UnitID",
          "originalValue": 3,
          "type": 1,
          "value": 3
        },
        {
          "index": 2,
          "name": "dev:TCPport",
          "originalValue": 502,
          "type": 1,
          "value": 502
        },
        {
          "index": 3,
          "name": "dev:RegOffset",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:tcpretry",
          "originalValue": "3",
          "type": 0,
          "value": "3"
        },
        {
          "index": 5,
          "name": "dev:KWHoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 6,
          "name": "dev:ScaleKWH",
          "originalValue": "1",
          "type": 0,
          "value": "1"
        },
        {
          "index": 7,
          "name": "dev:ScaleKW",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 8,
          "name": "dev:ScaleV",
          "originalValue": "0.01",
          "type": 0,
          "value": "0.01"
        },
        {
          "index": 9,
          "name": "dev:ScaleI",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.01",
          "type": 0,
          "value": "0.01"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 12,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 13,
          "name": "dev:ScaleTemp",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVA",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV6",
          "type": 0,
          "value": "PV6"
        }
      ],
      "sort": 17,
      "ts": "2025-11-25T22:12:59Z",
      "unitId": 3
    },
    {
      "address": "6",
      "description": "REFERENCE CELL - POA",
      "driverId": 3588,
      "driverName": "IMT Reference Cell (Standard) 3x Mod Temp",
      "functionCode": 5,
      "functionId": "WS1",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511575",
      "index": 13,
      "outOfService": false,
      "port": 2,
      "registerOffsets": [],
      "serialNumber": "485-32003-23-24211210",
      "settings": [
        {
          "index": 0,
          "name": "dev:baud",
          "originalValue": 9600,
          "type": 1,
          "value": 9600
        },
        {
          "index": 1,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 2,
          "name": "dev:RegOffset",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 3,
          "name": "MinTemp",
          "originalValue": -30,
          "type": 2,
          "value": -30
        },
        {
          "index": 4,
          "name": "MaxTemp",
          "originalValue": 160,
          "type": 2,
          "value": 160
        },
        {
          "index": 5,
          "name": "weather",
          "originalValue": 132,
          "type": 1,
          "value": 132
        },
        {
          "index": 6,
          "name": "dev:ScalePOA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:POAOffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 8,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleWindSP",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 10,
          "name": "dev:ScaleGHI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:GHIOffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 12,
          "name": "ShortName",
          "originalValue": "WS1",
          "type": 0,
          "value": "WS1"
        }
      ],
      "sort": 41,
      "ts": "2024-07-11T21:17:30Z",
      "unitId": 0
    },
    {
      "address": "16",
      "description": "WEATHER STATION",
      "driverId": 8164,
      "driverName": "AE Integrated WS Standard (FW 114+) (Qualified)",
      "functionCode": 5,
      "functionId": "WS2",
      "gatewayId": "000CC68FAF30",
      "gatewayName": "",
      "hardwareKey": "H511576",
      "index": 14,
      "outOfService": false,
      "port": 2,
      "registerOffsets": [],
      "serialNumber": "1V0177-8",
      "settings": [
        {
          "index": 0,
          "name": "dev:baud",
          "originalValue": 9600,
          "type": 1,
          "value": 9600
        },
        {
          "index": 1,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 2,
          "name": "dev:RegOffset",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 3,
          "name": "MinTemp",
          "originalValue": -30,
          "type": 2,
          "value": -30
        },
        {
          "index": 4,
          "name": "MaxTemp",
          "originalValue": 160,
          "type": 2,
          "value": 160
        },
        {
          "index": 5,
          "name": "weather",
          "originalValue": 1057,
          "type": 1,
          "value": 1057
        },
        {
          "index": 6,
          "name": "dev:P1",
          "originalValue": "K",
          "type": 0,
          "value": "K"
        },
        {
          "index": 7,
          "name": "dev:P2",
          "originalValue": "W",
          "type": 0,
          "value": "W"
        },
        {
          "index": 8,
          "name": "dev:K1",
          "originalValue": "1.00",
          "type": 0,
          "value": "1.00"
        },
        {
          "index": 9,
          "name": "dev:K2",
          "originalValue": "10.0",
          "type": 0,
          "value": "10.0"
        },
        {
          "index": 10,
          "name": "dev:T1",
          "originalValue": "1",
          "type": 0,
          "value": "1"
        },
        {
          "index": 11,
          "name": "dev:TR1",
          "originalValue": "S",
          "type": 0,
          "value": "S"
        },
        {
          "index": 12,
          "name": "dev:TR2",
          "originalValue": "W",
          "type": 0,
          "value": "W"
        },
        {
          "index": 13,
          "name": "dev:SWAP",
          "originalValue": "1",
          "type": 0,
          "value": "1"
        },
        {
          "index": 14,
          "name": "ShortName",
          "originalValue": "WS2",
          "type": 0,
          "value": "WS2"
        }
      ],
      "sort": 42,
      "ts": "2024-07-11T21:18:06Z",
      "unitId": 0
    },
    {
      "address": "0",
      "description": "Solcast Virtual Weather Station",
      "driverId": 19015,
      "driverName": "External Weather Source (full)",
      "functionCode": 5,
      "functionId": "WS0",
      "gatewayId": "",
      "gatewayName": "",
      "hardwareKey": "H494021",
      "index": 1,
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
        },
        {
          "index": 4,
          "name": "ShortName",
          "originalValue": "WS0",
          "type": 0,
          "value": "WS0"
        }
      ],
      "sort": 0,
      "ts": "2024-03-08T14:48:26Z",
      "unitId": 0
    }
  ],
  "key": "S68143",
  "locusId": "",
  "readOnly": false,
  "syncToLocus": false,
  "taskKeys": [],
  "ts": "2025-12-22T22:01:11Z",
  "updateHardwareErrors": []
}
```

[Return to top](#top)

