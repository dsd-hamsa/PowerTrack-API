# `/api/edit/sitehardware/{site_id}`

[← Back to Index](../README.md)



**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 1  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "hardware": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {}
      }
    },
    "locusId": {
      "type": "string"
    },
    "ts": {
      "type": "string"
    },
    "key": {
      "type": "string"
    },
    "syncToLocus": {
      "type": "boolean"
    },
    "updateHardwareErrors": {
      "type": "unknown"
    },
    "canAddHardware": {
      "type": "boolean"
    },
    "readOnly": {
      "type": "boolean"
    },
    "taskKeys": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    }
  }
}
```

#### Example

**Request:**

```http
GET /api/edit/sitehardware/S68624
Accept: application/json
Referer: https://www.alsoenergy.com
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "canAddHardware": false,
  "hardware": [
    {
      "address": "0",
      "description": "Cell Modem (Pepwave) (AB) (CM1)",
      "driverId": 19759,
      "driverName": "Pepwave Wireless SNMP",
      "functionCode": 31,
      "functionId": "CE0",
      "gatewayId": "1932-1B19-AA12",
      "gatewayName": "",
      "hardwareKey": "H504058",
      "index": 0,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [],
      "serialNumber": "1932-1B19-AA12",
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
      "ts": "2025-03-13T18:25:32Z",
      "unitId": 0
    },
    {
      "address": "0",
      "description": "Cell Modem (Pepwave) (CD) (CM2)",
      "driverId": 19759,
      "driverName": "Pepwave Wireless SNMP",
      "functionCode": 11,
      "functionId": "DA3",
      "gatewayId": "1932-1BB5-00D4",
      "gatewayName": "",
      "hardwareKey": "H504142",
      "index": 5,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [],
      "serialNumber": "1932-1BB5-00D4",
      "settings": [
        {
          "index": 0,
          "name": "dev:community",
          "originalValue": "ae",
          "type": 0,
          "value": "ae"
        },
        {
          "index": 1,
          "name": "dev:authentication",
          "originalValue": "alsoenergy",
          "type": 0,
          "value": "alsoenergy"
        },
        {
          "index": 2,
          "name": "dev:privacy",
          "originalValue": "alsoenergy",
          "type": 0,
          "value": "alsoenergy"
        },
        {
          "index": 3,
          "name": "ShortName",
          "originalValue": "DA3",
          "type": 0,
          "value": "DA3"
        }
      ],
      "sort": 3,
      "ts": "2024-12-23T19:57:56Z",
      "unitId": 0
    },
    {
      "address": "0",
      "description": "Cell Modem (Pepwave) (E) (CM3)",
      "driverId": 19759,
      "driverName": "Pepwave Wireless SNMP",
      "functionCode": 31,
      "functionId": "CE3",
      "gatewayId": "1932-1C10-AD8C",
      "gatewayName": "",
      "hardwareKey": "H504237",
      "index": 11,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [],
      "serialNumber": "1932-1C10-AD8C",
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
          "originalValue": "CE3",
          "type": 0,
          "value": "CE3"
        }
      ],
      "sort": 5,
      "ts": "2025-03-13T18:25:31Z",
      "unitId": 0
    },
    {
      "address": "0",
      "description": "Cell Modem (Pepwave) (FG) (CM0)",
      "driverId": 19759,
      "driverName": "Pepwave Wireless SNMP",
      "functionCode": 31,
      "functionId": "CE2",
      "gatewayId": "1932-1C27-9EF8",
      "gatewayName": "",
      "hardwareKey": "H504163",
      "index": 8,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [],
      "serialNumber": "1932-1C27-9EF8",
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
          "originalValue": "CE2",
          "type": 0,
          "value": "CE2"
        }
      ],
      "sort": 7,
      "ts": "2025-03-13T18:25:30Z",
      "unitId": 0
    },
    {
      "address": "0",
      "description": "Cell Modem (Pepwave) (H) (CM4)",
      "driverId": 19759,
      "driverName": "Pepwave Wireless SNMP",
      "functionCode": 31,
      "functionId": "CE1",
      "gatewayId": "1932-1B3D-8854",
      "gatewayName": "",
      "hardwareKey": "H504128",
      "index": 3,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [],
      "serialNumber": "1932-1B3D-8854",
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
          "originalValue": "CE1",
          "type": 0,
          "value": "CE1"
        }
      ],
      "sort": 8,
      "ts": "2025-03-13T18:25:32Z",
      "unitId": 0
    },
    {
      "address": "0",
      "description": "PowerLogger 1000 (A) (GW2)",
      "driverId": 325,
      "driverName": "PowerLogger 1000",
      "functionCode": 10,
      "functionId": "GW0",
      "gatewayId": "000CC68FAEA8",
      "gatewayName": "",
      "hardwareKey": "H504059",
      "index": 1,
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
      "sort": 11,
      "ts": "2024-06-10T15:56:07Z",
      "unitId": 0
    },
    {
      "address": "0",
      "description": "PowerLogger 1000 (B) (GW3)",
      "driverId": 325,
      "driverName": "PowerLogger 1000",
      "functionCode": 10,
      "functionId": "GW1",
      "gatewayId": "000CC68FAFE1",
      "gatewayName": "",
      "hardwareKey": "H504060",
      "index": 2,
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
          "originalValue": "GW1",
          "type": 0,
          "value": "GW1"
        }
      ],
      "sort": 12,
      "ts": "2024-06-10T14:57:52Z",
      "unitId": 0
    },
    {
      "address": "0",
      "description": "PowerLogger 1000 (C) (GW4)",
      "driverId": 325,
      "driverName": "PowerLogger 1000",
      "functionCode": 10,
      "functionId": "GW3",
      "gatewayId": "000CC68FAED5",
      "gatewayName": "",
      "hardwareKey": "H504143",
      "index": 6,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:rate",
          "originalValue": "200",
          "type": 0,
          "value": "200"
        },
        {
          "index": 1,
          "name": "ShortName",
          "originalValue": "GW3",
          "type": 0,
          "value": "GW3"
        }
      ],
      "sort": 13,
      "ts": "2024-06-10T15:55:42Z",
      "unitId": 0
    },
    {
      "address": "0",
      "description": "PowerLogger 1000 (D) (GW5)",
      "driverId": 325,
      "driverName": "PowerLogger 1000",
      "functionCode": 10,
      "functionId": "GW4",
      "gatewayId": "000CC68FAED4",
      "gatewayName": "",
      "hardwareKey": "H504156",
      "index": 7,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:rate",
          "originalValue": "200",
          "type": 0,
          "value": "200"
        },
        {
          "index": 1,
          "name": "ShortName",
          "originalValue": "GW4",
          "type": 0,
          "value": "GW4"
        }
      ],
      "sort": 14,
      "ts": "2024-06-10T15:55:42Z",
      "unitId": 0
    },
    {
      "address": "0",
      "description": "PowerLogger 1000 (E) (GW6)",
      "driverId": 325,
      "driverName": "PowerLogger 1000",
      "functionCode": 10,
      "functionId": "GW7",
      "gatewayId": "000CC68FAEA7",
      "gatewayName": "",
      "hardwareKey": "H504238",
      "index": 12,
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
          "originalValue": "GW7",
          "type": 0,
          "value": "GW7"
        }
      ],
      "sort": 15,
      "ts": "2024-06-10T15:55:12Z",
      "unitId": 0
    },
    {
      "address": "0",
      "description": "Power Manager 2200 (F)",
      "driverId": 740,
      "driverName": "AlsoEnergy SCADA Site Controller",
      "functionCode": 10,
      "functionId": "GW6",
      "gatewayId": "SCADASIXFLAGS",
      "gatewayName": "",
      "hardwareKey": "H504183",
      "index": 10,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [],
      "serialNumber": "TBDBE1053292",
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
          "originalValue": "GW6",
          "type": 0,
          "value": "GW6"
        },
        {
          "index": 3,
          "name": "server:salt",
          "originalValue": "Stum",
          "type": 0,
          "value": "Stum"
        }
      ],
      "sort": 16,
      "ts": "2024-06-10T15:55:12Z",
      "unitId": 0
    },
    {
      "address": "0",
      "description": "PowerLogger 1000 (G) (GW1) (L51)",
      "driverId": 325,
      "driverName": "PowerLogger 1000",
      "functionCode": 10,
      "functionId": "GW5",
      "gatewayId": "000CC68FAF08",
      "gatewayName": "",
      "hardwareKey": "H504164",
      "index": 9,
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
          "originalValue": "GW5",
          "type": 0,
          "value": "GW5"
        }
      ],
      "sort": 17,
      "ts": "2024-06-10T15:56:42Z",
      "unitId": 0
    },
    {
      "address": "0",
      "description": "PowerLogger 1000 (H) (GW7)",
      "driverId": 325,
      "driverName": "PowerLogger 1000",
      "functionCode": 10,
      "functionId": "GW2",
      "gatewayId": "000CC68FAED9",
      "gatewayName": "",
      "hardwareKey": "H504129",
      "index": 4,
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
          "originalValue": "GW2",
          "type": 0,
          "value": "GW2"
        }
      ],
      "sort": 18,
      "ts": "2024-06-10T15:55:13Z",
      "unitId": 0
    },
    {
      "address": "192.168.13.41",
      "description": "SEL-735 - PV Prod Meter (F) (M0)",
      "driverId": 21674,
      "driverName": "SEL 735 (SS) Standard v2",
      "functionCode": 2,
      "functionId": "PM0",
      "gatewayId": "SCADASIXFLAGS",
      "gatewayName": "",
      "hardwareKey": "H504184",
      "index": 85,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHdelOffset",
          "registerAddress": 600,
          "registerModbusName": "Active Energy Delivered",
          "value": 0
        },
        {
          "index": 1,
          "name": "KWHrecOffset",
          "registerAddress": 602,
          "registerModbusName": "Active Energy Received",
          "value": 0
        },
        {
          "index": 2,
          "name": "",
          "registerAddress": 608,
          "registerModbusName": "Reactive Energy Delivered",
          "value": 0
        },
        {
          "index": 3,
          "name": "",
          "registerAddress": 610,
          "registerModbusName": "Reactive Energy Received",
          "value": 0
        },
        {
          "index": 4,
          "name": "KWHoffset",
          "registerAddress": 630,
          "registerModbusName": "Active Energy Net",
          "value": 0
        },
        {
          "index": 5,
          "name": "",
          "registerAddress": 9010,
          "registerModbusName": "Active Energy Delivered Raw",
          "value": 0
        },
        {
          "index": 6,
          "name": "",
          "registerAddress": 9020,
          "registerModbusName": "Active Energy Received Raw",
          "value": 0
        },
        {
          "index": 7,
          "name": "",
          "registerAddress": 9030,
          "registerModbusName": "Active Energy Net Raw",
          "value": 0
        },
        {
          "index": 8,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Reactive Energy Net",
          "value": 0
        }
      ],
      "serialNumber": "3240965386",
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
          "originalValue": 0.01,
          "type": 2,
          "value": 0.01
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
          "originalValue": 1,
          "type": 2,
          "value": 1
        },
        {
          "index": 7,
          "name": "dev:ScaleKVARH",
          "originalValue": 1,
          "type": 2,
          "value": 1
        },
        {
          "index": 8,
          "name": "dev:ScaleKWHrec",
          "originalValue": "1",
          "type": 0,
          "value": "1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWHdel",
          "originalValue": "1",
          "type": 0,
          "value": "1"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": 0.01,
          "type": 2,
          "value": 0.01
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": 0.01,
          "type": 2,
          "value": 0.01
        },
        {
          "index": 12,
          "name": "dev:ScalePF",
          "originalValue": 0.01,
          "type": 2,
          "value": 0.01
        },
        {
          "index": 13,
          "name": "dev:ScaleFrequency",
          "originalValue": 0.01,
          "type": 2,
          "value": 0.01
        },
        {
          "index": 14,
          "name": "dev:ScaleI",
          "originalValue": 0.01,
          "type": 2,
          "value": 0.01
        },
        {
          "index": 15,
          "name": "dev:ScaleV",
          "originalValue": 10,
          "type": 2,
          "value": 10
        },
        {
          "index": 16,
          "name": "dev:ScaleKVARHrec",
          "originalValue": 1,
          "type": 2,
          "value": 1
        },
        {
          "index": 17,
          "name": "dev:ScaleKVARHdel",
          "originalValue": 1,
          "type": 2,
          "value": 1
        },
        {
          "index": 18,
          "name": "ShortName",
          "originalValue": "PM0",
          "type": 0,
          "value": "PM0"
        },
        {
          "index": 19,
          "name": "dev:Enable",
          "originalValue": 0,
          "type": 1,
          "value": 0
        }
      ],
      "sort": 19,
      "ts": "2025-10-14T14:45:08Z",
      "unitId": 1
    },
    {
      "address": "192.168.13.42",
      "description": "SEL-735 - BESS Meter",
      "driverId": 21674,
      "driverName": "SEL 735 (SS) Standard v2",
      "functionCode": 37,
      "functionId": "BM0",
      "gatewayId": "",
      "gatewayName": "",
      "hardwareKey": "H582339",
      "index": 200,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHdelOffset",
          "registerAddress": 600,
          "registerModbusName": "Active Energy Delivered",
          "value": 0
        },
        {
          "index": 1,
          "name": "KWHrecOffset",
          "registerAddress": 602,
          "registerModbusName": "Active Energy Received",
          "value": 0
        },
        {
          "index": 2,
          "name": "",
          "registerAddress": 608,
          "registerModbusName": "Reactive Energy Delivered",
          "value": 0
        },
        {
          "index": 3,
          "name": "",
          "registerAddress": 610,
          "registerModbusName": "Reactive Energy Received",
          "value": 0
        },
        {
          "index": 4,
          "name": "KWHoffset",
          "registerAddress": 630,
          "registerModbusName": "Active Energy Net",
          "value": 0
        },
        {
          "index": 5,
          "name": "",
          "registerAddress": 9010,
          "registerModbusName": "Active Energy Delivered Raw",
          "value": 0
        },
        {
          "index": 6,
          "name": "",
          "registerAddress": 9020,
          "registerModbusName": "Active Energy Received Raw",
          "value": 0
        },
        {
          "index": 7,
          "name": "",
          "registerAddress": 9030,
          "registerModbusName": "Active Energy Net Raw",
          "value": 0
        },
        {
          "index": 8,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Reactive Energy Net",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.01,
          "type": 2,
          "value": 0.01
        },
        {
          "index": 1,
          "name": "dev:Reverse",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 2,
          "name": "dev:RegOffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 3,
          "name": "dev:ScaleKWH",
          "originalValue": 1,
          "type": 2,
          "value": 1
        },
        {
          "index": 4,
          "name": "dev:ScaleKVARH",
          "originalValue": 1,
          "type": 2,
          "value": 1
        },
        {
          "index": 5,
          "name": "dev:ScaleKWHrec",
          "originalValue": "1",
          "type": 0,
          "value": "1"
        },
        {
          "index": 6,
          "name": "dev:ScaleKWHdel",
          "originalValue": "1",
          "type": 0,
          "value": "1"
        },
        {
          "index": 7,
          "name": "dev:ScaleKVAR",
          "originalValue": 0.01,
          "type": 2,
          "value": 0.01
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": 0.01,
          "type": 2,
          "value": 0.01
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": 0.01,
          "type": 2,
          "value": 0.01
        },
        {
          "index": 10,
          "name": "dev:ScaleFrequency",
          "originalValue": 0.01,
          "type": 2,
          "value": 0.01
        },
        {
          "index": 11,
          "name": "dev:ScaleI",
          "originalValue": 0.01,
          "type": 2,
          "value": 0.01
        },
        {
          "index": 12,
          "name": "dev:ScaleV",
          "originalValue": 10,
          "type": 2,
          "value": 10
        },
        {
          "index": 13,
          "name": "dev:ScaleKVARHrec",
          "originalValue": 1,
          "type": 2,
          "value": 1
        },
        {
          "index": 14,
          "name": "dev:ScaleKVARHdel",
          "originalValue": 1,
          "type": 2,
          "value": 1
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "XM0",
          "type": 0,
          "value": "XM0"
        },
        {
          "index": 16,
          "name": "dev:UnitID",
          "originalValue": 1,
          "type": 1,
          "value": 1
        },
        {
          "index": 17,
          "name": "dev:Enable",
          "originalValue": 0,
          "type": 1,
          "value": 0
        }
      ],
      "sort": 20,
      "ts": "2025-10-15T17:14:55Z",
      "unitId": 1
    },
    {
      "address": "1",
      "description": "Inv 1 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV0",
      "gatewayId": "000CC68FAEA8",
      "gatewayName": "",
      "hardwareKey": "H504061",
      "index": 19,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
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
          "name": "dev:KWHoffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:ScaleKW",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 10,
          "name": "dev:ScaleKWH",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 12,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 15,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 16,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 17,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 18,
          "name": "ShortName",
          "originalValue": "PV0",
          "type": 0,
          "value": "PV0"
        }
      ],
      "sort": 21,
      "ts": "2025-11-25T22:15:24Z",
      "unitId": 0
    },
    {
      "address": "2",
      "description": "Inv 2 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV1",
      "gatewayId": "000CC68FAEA8",
      "gatewayName": "",
      "hardwareKey": "H504062",
      "index": 20,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
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
          "name": "dev:KWHoffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:ScaleKW",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 10,
          "name": "dev:ScaleKWH",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 12,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 15,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 16,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 17,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 18,
          "name": "ShortName",
          "originalValue": "PV1",
          "type": 0,
          "value": "PV1"
        }
      ],
      "sort": 22,
      "ts": "2025-11-25T22:15:28Z",
      "unitId": 0
    },
    {
      "address": "3",
      "description": "Inv 3 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV2",
      "gatewayId": "000CC68FAEA8",
      "gatewayName": "",
      "hardwareKey": "H504063",
      "index": 21,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
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
          "name": "dev:KWHoffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:ScaleKW",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 10,
          "name": "dev:ScaleKWH",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 12,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 15,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 16,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 17,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 18,
          "name": "ShortName",
          "originalValue": "PV2",
          "type": 0,
          "value": "PV2"
        }
      ],
      "sort": 23,
      "ts": "2025-11-25T22:15:32Z",
      "unitId": 0
    },
    {
      "address": "4",
      "description": "Inv 4 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV3",
      "gatewayId": "000CC68FAEA8",
      "gatewayName": "",
      "hardwareKey": "H504064",
      "index": 22,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
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
          "name": "dev:KWHoffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:ScaleKW",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 10,
          "name": "dev:ScaleKWH",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 12,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 15,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 16,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 17,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 18,
          "name": "ShortName",
          "originalValue": "PV3",
          "type": 0,
          "value": "PV3"
        }
      ],
      "sort": 24,
      "ts": "2025-11-25T22:15:35Z",
      "unitId": 0
    },
    {
      "address": "5",
      "description": "Inv 5 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV4",
      "gatewayId": "000CC68FAEA8",
      "gatewayName": "",
      "hardwareKey": "H504065",
      "index": 23,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
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
          "name": "dev:KWHoffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:ScaleKW",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 10,
          "name": "dev:ScaleKWH",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 12,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 15,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 16,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 17,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 18,
          "name": "ShortName",
          "originalValue": "PV4",
          "type": 0,
          "value": "PV4"
        }
      ],
      "sort": 25,
      "ts": "2025-11-25T22:15:39Z",
      "unitId": 0
    },
    {
      "address": "6",
      "description": "Inv 6 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV5",
      "gatewayId": "000CC68FAEA8",
      "gatewayName": "",
      "hardwareKey": "H504066",
      "index": 24,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV5",
          "type": 0,
          "value": "PV5"
        }
      ],
      "sort": 26,
      "ts": "2025-11-25T22:15:43Z",
      "unitId": 0
    },
    {
      "address": "7",
      "description": "Inv 7 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV6",
      "gatewayId": "000CC68FAEA8",
      "gatewayName": "",
      "hardwareKey": "H504067",
      "index": 25,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
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
          "name": "dev:KWHoffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:ScaleKW",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 10,
          "name": "dev:ScaleKWH",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 12,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 15,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 16,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 17,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 18,
          "name": "ShortName",
          "originalValue": "PV6",
          "type": 0,
          "value": "PV6"
        }
      ],
      "sort": 27,
      "ts": "2025-11-25T22:15:47Z",
      "unitId": 0
    },
    {
      "address": "8",
      "description": "Inv 8 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV7",
      "gatewayId": "000CC68FAEA8",
      "gatewayName": "",
      "hardwareKey": "H504068",
      "index": 26,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
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
          "name": "dev:KWHoffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:ScaleKW",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 10,
          "name": "dev:ScaleKWH",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 12,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 15,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 16,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 17,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 18,
          "name": "ShortName",
          "originalValue": "PV7",
          "type": 0,
          "value": "PV7"
        }
      ],
      "sort": 28,
      "ts": "2025-11-25T22:15:52Z",
      "unitId": 0
    },
    {
      "address": "9",
      "description": "Inv 9 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV8",
      "gatewayId": "000CC68FAEA8",
      "gatewayName": "",
      "hardwareKey": "H504069",
      "index": 27,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
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
          "name": "dev:KWHoffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:ScaleKW",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 10,
          "name": "dev:ScaleKWH",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 12,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 15,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 16,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 17,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 18,
          "name": "ShortName",
          "originalValue": "PV8",
          "type": 0,
          "value": "PV8"
        }
      ],
      "sort": 29,
      "ts": "2025-11-25T22:15:56Z",
      "unitId": 0
    },
    {
      "address": "10",
      "description": "Inv 10 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV9",
      "gatewayId": "000CC68FAEA8",
      "gatewayName": "",
      "hardwareKey": "H504070",
      "index": 28,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
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
          "name": "dev:KWHoffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:ScaleKW",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 10,
          "name": "dev:ScaleKWH",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 12,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 15,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 16,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 17,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 18,
          "name": "ShortName",
          "originalValue": "PV9",
          "type": 0,
          "value": "PV9"
        }
      ],
      "sort": 30,
      "ts": "2025-11-25T22:16:00Z",
      "unitId": 0
    },
    {
      "address": "11",
      "description": "Inv 11 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV10",
      "gatewayId": "000CC68FAEA8",
      "gatewayName": "",
      "hardwareKey": "H504071",
      "index": 29,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
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
          "name": "dev:KWHoffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:ScaleKW",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 10,
          "name": "dev:ScaleKWH",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 12,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 15,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 16,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 17,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 18,
          "name": "ShortName",
          "originalValue": "PV10",
          "type": 0,
          "value": "PV10"
        }
      ],
      "sort": 31,
      "ts": "2025-11-25T22:16:04Z",
      "unitId": 0
    },
    {
      "address": "12",
      "description": "Inv 12 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV11",
      "gatewayId": "000CC68FAEA8",
      "gatewayName": "",
      "hardwareKey": "H504072",
      "index": 30,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV11",
          "type": 0,
          "value": "PV11"
        }
      ],
      "sort": 32,
      "ts": "2025-11-25T22:16:09Z",
      "unitId": 0
    },
    {
      "address": "13",
      "description": "Inv 13 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV12",
      "gatewayId": "000CC68FAEA8",
      "gatewayName": "",
      "hardwareKey": "H504073",
      "index": 31,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV12",
          "type": 0,
          "value": "PV12"
        }
      ],
      "sort": 33,
      "ts": "2025-11-25T22:16:13Z",
      "unitId": 0
    },
    {
      "address": "14",
      "description": "Inv 14 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV13",
      "gatewayId": "000CC68FAEA8",
      "gatewayName": "",
      "hardwareKey": "H504074",
      "index": 32,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV13",
          "type": 0,
          "value": "PV13"
        }
      ],
      "sort": 34,
      "ts": "2025-11-25T22:16:16Z",
      "unitId": 0
    },
    {
      "address": "15",
      "description": "Inv 15 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV14",
      "gatewayId": "000CC68FAEA8",
      "gatewayName": "",
      "hardwareKey": "H504075",
      "index": 33,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV14",
          "type": 0,
          "value": "PV14"
        }
      ],
      "sort": 35,
      "ts": "2025-11-25T22:16:21Z",
      "unitId": 0
    },
    {
      "address": "16",
      "description": "Inv 16 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV15",
      "gatewayId": "000CC68FAEA8",
      "gatewayName": "",
      "hardwareKey": "H504076",
      "index": 34,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV15",
          "type": 0,
          "value": "PV15"
        }
      ],
      "sort": 36,
      "ts": "2025-11-25T22:16:25Z",
      "unitId": 0
    },
    {
      "address": "17",
      "description": "Inv 17 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV16",
      "gatewayId": "000CC68FAEA8",
      "gatewayName": "",
      "hardwareKey": "H504077",
      "index": 35,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV16",
          "type": 0,
          "value": "PV16"
        }
      ],
      "sort": 37,
      "ts": "2025-11-25T22:16:29Z",
      "unitId": 0
    },
    {
      "address": "18",
      "description": "Inv 18 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV17",
      "gatewayId": "000CC68FAEA8",
      "gatewayName": "",
      "hardwareKey": "H504078",
      "index": 36,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV17",
          "type": 0,
          "value": "PV17"
        }
      ],
      "sort": 38,
      "ts": "2025-11-25T22:16:33Z",
      "unitId": 0
    },
    {
      "address": "19",
      "description": "Inv 19 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV18",
      "gatewayId": "000CC68FAEA8",
      "gatewayName": "",
      "hardwareKey": "H504079",
      "index": 37,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV18",
          "type": 0,
          "value": "PV18"
        }
      ],
      "sort": 39,
      "ts": "2025-11-25T22:16:37Z",
      "unitId": 0
    },
    {
      "address": "20",
      "description": "Inv 20 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV19",
      "gatewayId": "000CC68FAFE1",
      "gatewayName": "",
      "hardwareKey": "H504080",
      "index": 38,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV19",
          "type": 0,
          "value": "PV19"
        }
      ],
      "sort": 40,
      "ts": "2025-11-25T22:16:40Z",
      "unitId": 0
    },
    {
      "address": "21",
      "description": "Inv 21 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV20",
      "gatewayId": "000CC68FAFE1",
      "gatewayName": "",
      "hardwareKey": "H504081",
      "index": 39,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV20",
          "type": 0,
          "value": "PV20"
        }
      ],
      "sort": 41,
      "ts": "2025-11-25T22:16:45Z",
      "unitId": 0
    },
    {
      "address": "22",
      "description": "Inv 22 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV21",
      "gatewayId": "000CC68FAFE1",
      "gatewayName": "",
      "hardwareKey": "H504082",
      "index": 40,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV21",
          "type": 0,
          "value": "PV21"
        }
      ],
      "sort": 42,
      "ts": "2025-11-25T22:16:49Z",
      "unitId": 0
    },
    {
      "address": "23",
      "description": "Inv 23 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV22",
      "gatewayId": "000CC68FAFE1",
      "gatewayName": "",
      "hardwareKey": "H504083",
      "index": 41,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV22",
          "type": 0,
          "value": "PV22"
        }
      ],
      "sort": 43,
      "ts": "2025-11-25T22:16:53Z",
      "unitId": 0
    },
    {
      "address": "24",
      "description": "Inv 24 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV23",
      "gatewayId": "000CC68FAFE1",
      "gatewayName": "",
      "hardwareKey": "H504084",
      "index": 42,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV23",
          "type": 0,
          "value": "PV23"
        }
      ],
      "sort": 44,
      "ts": "2025-11-25T22:16:57Z",
      "unitId": 0
    },
    {
      "address": "25",
      "description": "Inv 25 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV24",
      "gatewayId": "000CC68FAFE1",
      "gatewayName": "",
      "hardwareKey": "H504085",
      "index": 43,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV24",
          "type": 0,
          "value": "PV24"
        }
      ],
      "sort": 45,
      "ts": "2025-11-25T22:17:01Z",
      "unitId": 0
    },
    {
      "address": "26",
      "description": "Inv 26 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV25",
      "gatewayId": "000CC68FAFE1",
      "gatewayName": "",
      "hardwareKey": "H504086",
      "index": 44,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV25",
          "type": 0,
          "value": "PV25"
        }
      ],
      "sort": 46,
      "ts": "2025-11-25T22:17:05Z",
      "unitId": 0
    },
    {
      "address": "27",
      "description": "Inv 27 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV26",
      "gatewayId": "000CC68FAFE1",
      "gatewayName": "",
      "hardwareKey": "H504087",
      "index": 45,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV26",
          "type": 0,
          "value": "PV26"
        }
      ],
      "sort": 47,
      "ts": "2025-11-25T22:17:09Z",
      "unitId": 0
    },
    {
      "address": "28",
      "description": "Inv 28 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV27",
      "gatewayId": "000CC68FAFE1",
      "gatewayName": "",
      "hardwareKey": "H504088",
      "index": 46,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV27",
          "type": 0,
          "value": "PV27"
        }
      ],
      "sort": 48,
      "ts": "2025-11-25T22:17:14Z",
      "unitId": 0
    },
    {
      "address": "29",
      "description": "Inv 29 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV28",
      "gatewayId": "000CC68FAFE1",
      "gatewayName": "",
      "hardwareKey": "H504089",
      "index": 47,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV28",
          "type": 0,
          "value": "PV28"
        }
      ],
      "sort": 49,
      "ts": "2025-11-25T22:17:18Z",
      "unitId": 0
    },
    {
      "address": "30",
      "description": "Inv 30 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV29",
      "gatewayId": "000CC68FAFE1",
      "gatewayName": "",
      "hardwareKey": "H504090",
      "index": 48,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV29",
          "type": 0,
          "value": "PV29"
        }
      ],
      "sort": 50,
      "ts": "2025-11-25T22:17:22Z",
      "unitId": 0
    },
    {
      "address": "31",
      "description": "Inv 31 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV30",
      "gatewayId": "000CC68FAFE1",
      "gatewayName": "",
      "hardwareKey": "H504091",
      "index": 49,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV30",
          "type": 0,
          "value": "PV30"
        }
      ],
      "sort": 51,
      "ts": "2025-11-25T22:17:26Z",
      "unitId": 0
    },
    {
      "address": "32",
      "description": "Inv 32 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV31",
      "gatewayId": "000CC68FAFE1",
      "gatewayName": "",
      "hardwareKey": "H504092",
      "index": 50,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV31",
          "type": 0,
          "value": "PV31"
        }
      ],
      "sort": 52,
      "ts": "2025-11-25T22:17:30Z",
      "unitId": 0
    },
    {
      "address": "33",
      "description": "Inv 33 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV32",
      "gatewayId": "000CC68FAFE1",
      "gatewayName": "",
      "hardwareKey": "H504093",
      "index": 51,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV32",
          "type": 0,
          "value": "PV32"
        }
      ],
      "sort": 53,
      "ts": "2025-11-25T22:17:34Z",
      "unitId": 0
    },
    {
      "address": "34",
      "description": "Inv 34 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV33",
      "gatewayId": "000CC68FAFE1",
      "gatewayName": "",
      "hardwareKey": "H504094",
      "index": 52,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV33",
          "type": 0,
          "value": "PV33"
        }
      ],
      "sort": 54,
      "ts": "2025-11-25T22:17:38Z",
      "unitId": 0
    },
    {
      "address": "35",
      "description": "Inv 35 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV34",
      "gatewayId": "000CC68FAFE1",
      "gatewayName": "",
      "hardwareKey": "H504095",
      "index": 53,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV34",
          "type": 0,
          "value": "PV34"
        }
      ],
      "sort": 55,
      "ts": "2025-11-25T22:17:42Z",
      "unitId": 0
    },
    {
      "address": "36",
      "description": "Inv 36 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV35",
      "gatewayId": "000CC68FAFE1",
      "gatewayName": "",
      "hardwareKey": "H504096",
      "index": 54,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV35",
          "type": 0,
          "value": "PV35"
        }
      ],
      "sort": 56,
      "ts": "2025-11-25T22:17:46Z",
      "unitId": 0
    },
    {
      "address": "37",
      "description": "Inv 37 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV36",
      "gatewayId": "000CC68FAFE1",
      "gatewayName": "",
      "hardwareKey": "H504097",
      "index": 55,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV36",
          "type": 0,
          "value": "PV36"
        }
      ],
      "sort": 57,
      "ts": "2025-11-25T22:17:58Z",
      "unitId": 0
    },
    {
      "address": "38",
      "description": "Inv 38 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV37",
      "gatewayId": "000CC68FAFE1",
      "gatewayName": "",
      "hardwareKey": "H504098",
      "index": 56,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV37",
          "type": 0,
          "value": "PV37"
        }
      ],
      "sort": 58,
      "ts": "2025-11-25T22:18:04Z",
      "unitId": 0
    },
    {
      "address": "39",
      "description": "Inv 39 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV38",
      "gatewayId": "000CC68FAFE1",
      "gatewayName": "",
      "hardwareKey": "H504099",
      "index": 57,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV38",
          "type": 0,
          "value": "PV38"
        }
      ],
      "sort": 58,
      "ts": "2025-11-25T22:18:08Z",
      "unitId": 0
    },
    {
      "address": "40",
      "description": "Inv 40 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV39",
      "gatewayId": "000CC68FAFE1",
      "gatewayName": "",
      "hardwareKey": "H504100",
      "index": 58,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV39",
          "type": 0,
          "value": "PV39"
        }
      ],
      "sort": 60,
      "ts": "2025-11-25T22:18:13Z",
      "unitId": 0
    },
    {
      "address": "41",
      "description": "Inv 41 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV40",
      "gatewayId": "000CC68FAFE1",
      "gatewayName": "",
      "hardwareKey": "H504101",
      "index": 59,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV40",
          "type": 0,
          "value": "PV40"
        }
      ],
      "sort": 61,
      "ts": "2025-11-25T22:18:17Z",
      "unitId": 0
    },
    {
      "address": "42",
      "description": "Inv 42 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV119",
      "gatewayId": "000CC68FAED5",
      "gatewayName": "",
      "hardwareKey": "H504289",
      "index": 153,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV119",
          "type": 0,
          "value": "PV119"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 62,
      "ts": "2025-11-25T22:23:31Z",
      "unitId": 0
    },
    {
      "address": "43",
      "description": "Inv 43 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV120",
      "gatewayId": "000CC68FAED5",
      "gatewayName": "",
      "hardwareKey": "H504290",
      "index": 154,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV120",
          "type": 0,
          "value": "PV120"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 63,
      "ts": "2025-11-25T22:23:35Z",
      "unitId": 0
    },
    {
      "address": "44",
      "description": "Inv 44 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV121",
      "gatewayId": "000CC68FAED5",
      "gatewayName": "",
      "hardwareKey": "H504291",
      "index": 155,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV121",
          "type": 0,
          "value": "PV121"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 64,
      "ts": "2025-11-25T22:23:38Z",
      "unitId": 0
    },
    {
      "address": "45",
      "description": "Inv 45 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV122",
      "gatewayId": "000CC68FAED5",
      "gatewayName": "",
      "hardwareKey": "H504292",
      "index": 156,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV122",
          "type": 0,
          "value": "PV122"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 65,
      "ts": "2025-11-25T22:23:42Z",
      "unitId": 0
    },
    {
      "address": "46",
      "description": "Inv 46 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV123",
      "gatewayId": "000CC68FAED5",
      "gatewayName": "",
      "hardwareKey": "H504293",
      "index": 157,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV123",
          "type": 0,
          "value": "PV123"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 66,
      "ts": "2025-11-25T22:23:46Z",
      "unitId": 0
    },
    {
      "address": "47",
      "description": "Inv 47 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV124",
      "gatewayId": "000CC68FAED5",
      "gatewayName": "",
      "hardwareKey": "H504294",
      "index": 158,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV124",
          "type": 0,
          "value": "PV124"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 67,
      "ts": "2025-11-25T22:23:50Z",
      "unitId": 0
    },
    {
      "address": "48",
      "description": "Inv 48 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV125",
      "gatewayId": "000CC68FAED5",
      "gatewayName": "",
      "hardwareKey": "H504295",
      "index": 159,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV125",
          "type": 0,
          "value": "PV125"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 68,
      "ts": "2025-11-25T22:23:53Z",
      "unitId": 0
    },
    {
      "address": "49",
      "description": "Inv 49 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV126",
      "gatewayId": "000CC68FAED5",
      "gatewayName": "",
      "hardwareKey": "H504296",
      "index": 160,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV126",
          "type": 0,
          "value": "PV126"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 69,
      "ts": "2025-11-25T22:23:57Z",
      "unitId": 0
    },
    {
      "address": "50",
      "description": "Inv 50 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV127",
      "gatewayId": "000CC68FAED5",
      "gatewayName": "",
      "hardwareKey": "H504297",
      "index": 161,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV127",
          "type": 0,
          "value": "PV127"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 70,
      "ts": "2025-11-25T22:24:00Z",
      "unitId": 0
    },
    {
      "address": "51",
      "description": "Inv 51 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV128",
      "gatewayId": "000CC68FAED5",
      "gatewayName": "",
      "hardwareKey": "H504298",
      "index": 162,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV128",
          "type": 0,
          "value": "PV128"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 71,
      "ts": "2025-11-25T22:24:04Z",
      "unitId": 0
    },
    {
      "address": "52",
      "description": "Inv 52 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV129",
      "gatewayId": "000CC68FAED5",
      "gatewayName": "",
      "hardwareKey": "H504299",
      "index": 163,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV129",
          "type": 0,
          "value": "PV129"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 72,
      "ts": "2025-11-25T22:24:07Z",
      "unitId": 0
    },
    {
      "address": "53",
      "description": "Inv 53 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV130",
      "gatewayId": "000CC68FAED5",
      "gatewayName": "",
      "hardwareKey": "H504300",
      "index": 164,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV130",
          "type": 0,
          "value": "PV130"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 73,
      "ts": "2025-11-25T22:24:12Z",
      "unitId": 0
    },
    {
      "address": "54",
      "description": "Inv 54 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV131",
      "gatewayId": "000CC68FAED5",
      "gatewayName": "",
      "hardwareKey": "H504301",
      "index": 165,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV131",
          "type": 0,
          "value": "PV131"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 74,
      "ts": "2025-11-25T22:24:16Z",
      "unitId": 0
    },
    {
      "address": "55",
      "description": "Inv 55 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV132",
      "gatewayId": "000CC68FAED5",
      "gatewayName": "",
      "hardwareKey": "H504302",
      "index": 166,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV132",
          "type": 0,
          "value": "PV132"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 75,
      "ts": "2025-11-25T22:24:19Z",
      "unitId": 0
    },
    {
      "address": "56",
      "description": "Inv 56 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV133",
      "gatewayId": "000CC68FAED5",
      "gatewayName": "",
      "hardwareKey": "H504303",
      "index": 167,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV133",
          "type": 0,
          "value": "PV133"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 76,
      "ts": "2025-11-25T22:24:23Z",
      "unitId": 0
    },
    {
      "address": "57",
      "description": "Inv 57 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV134",
      "gatewayId": "000CC68FAED5",
      "gatewayName": "",
      "hardwareKey": "H504304",
      "index": 168,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV134",
          "type": 0,
          "value": "PV134"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 77,
      "ts": "2025-11-25T22:24:27Z",
      "unitId": 0
    },
    {
      "address": "58",
      "description": "Inv 58 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV135",
      "gatewayId": "000CC68FAED5",
      "gatewayName": "",
      "hardwareKey": "H504305",
      "index": 169,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV135",
          "type": 0,
          "value": "PV135"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 78,
      "ts": "2025-11-25T22:24:31Z",
      "unitId": 0
    },
    {
      "address": "59",
      "description": "Inv 59 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV136",
      "gatewayId": "000CC68FAED5",
      "gatewayName": "",
      "hardwareKey": "H504306",
      "index": 170,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV136",
          "type": 0,
          "value": "PV136"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 79,
      "ts": "2025-11-25T22:24:34Z",
      "unitId": 0
    },
    {
      "address": "60",
      "description": "Inv 60 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV137",
      "gatewayId": "000CC68FAED5",
      "gatewayName": "",
      "hardwareKey": "H504307",
      "index": 171,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV137",
          "type": 0,
          "value": "PV137"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 80,
      "ts": "2025-11-25T22:24:38Z",
      "unitId": 0
    },
    {
      "address": "61",
      "description": "Inv 61 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV138",
      "gatewayId": "000CC68FAED5",
      "gatewayName": "",
      "hardwareKey": "H504308",
      "index": 172,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV138",
          "type": 0,
          "value": "PV138"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 81,
      "ts": "2025-11-25T22:24:42Z",
      "unitId": 0
    },
    {
      "address": "62",
      "description": "Inv 62 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV139",
      "gatewayId": "000CC68FAED5",
      "gatewayName": "",
      "hardwareKey": "H504309",
      "index": 173,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV139",
          "type": 0,
          "value": "PV139"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 82,
      "ts": "2025-11-25T22:24:45Z",
      "unitId": 0
    },
    {
      "address": "63",
      "description": "Inv 63 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV140",
      "gatewayId": "000CC68FAED5",
      "gatewayName": "",
      "hardwareKey": "H504310",
      "index": 174,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV140",
          "type": 0,
          "value": "PV140"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 83,
      "ts": "2025-11-25T22:24:49Z",
      "unitId": 0
    },
    {
      "address": "64",
      "description": "Inv 64 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV141",
      "gatewayId": "000CC68FAED5",
      "gatewayName": "",
      "hardwareKey": "H504311",
      "index": 175,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV141",
          "type": 0,
          "value": "PV141"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 84,
      "ts": "2025-11-25T22:24:54Z",
      "unitId": 0
    },
    {
      "address": "65",
      "description": "Inv 65 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV142",
      "gatewayId": "000CC68FAED5",
      "gatewayName": "",
      "hardwareKey": "H504312",
      "index": 176,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV142",
          "type": 0,
          "value": "PV142"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 85,
      "ts": "2025-11-25T22:24:59Z",
      "unitId": 0
    },
    {
      "address": "66",
      "description": "Inv 66 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV143",
      "gatewayId": "000CC68FAED5",
      "gatewayName": "",
      "hardwareKey": "H504313",
      "index": 177,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV143",
          "type": 0,
          "value": "PV143"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 86,
      "ts": "2025-11-25T22:25:05Z",
      "unitId": 0
    },
    {
      "address": "67",
      "description": "Inv 67 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV144",
      "gatewayId": "000CC68FAED5",
      "gatewayName": "",
      "hardwareKey": "H504314",
      "index": 178,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV144",
          "type": 0,
          "value": "PV144"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 87,
      "ts": "2025-11-25T22:25:10Z",
      "unitId": 0
    },
    {
      "address": "68",
      "description": "Inv 68 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV145",
      "gatewayId": "000CC68FAED5",
      "gatewayName": "",
      "hardwareKey": "H504315",
      "index": 179,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV145",
          "type": 0,
          "value": "PV145"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 88,
      "ts": "2025-11-25T22:25:15Z",
      "unitId": 0
    },
    {
      "address": "69",
      "description": "Inv 69 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV146",
      "gatewayId": "000CC68FAED5",
      "gatewayName": "",
      "hardwareKey": "H504316",
      "index": 180,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV146",
          "type": 0,
          "value": "PV146"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 89,
      "ts": "2025-11-25T22:25:19Z",
      "unitId": 0
    },
    {
      "address": "70",
      "description": "Inv 70 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV147",
      "gatewayId": "000CC68FAED4",
      "gatewayName": "",
      "hardwareKey": "H504317",
      "index": 181,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV147",
          "type": 0,
          "value": "PV147"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 90,
      "ts": "2025-11-25T22:25:23Z",
      "unitId": 0
    },
    {
      "address": "71",
      "description": "Inv 71 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV148",
      "gatewayId": "000CC68FAED4",
      "gatewayName": "",
      "hardwareKey": "H504318",
      "index": 182,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV148",
          "type": 0,
          "value": "PV148"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 91,
      "ts": "2025-11-25T22:25:27Z",
      "unitId": 0
    },
    {
      "address": "72",
      "description": "Inv 72 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV149",
      "gatewayId": "000CC68FAED4",
      "gatewayName": "",
      "hardwareKey": "H504319",
      "index": 183,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV149",
          "type": 0,
          "value": "PV149"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 92,
      "ts": "2025-11-25T22:25:31Z",
      "unitId": 0
    },
    {
      "address": "73",
      "description": "Inv 73 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV150",
      "gatewayId": "000CC68FAED4",
      "gatewayName": "",
      "hardwareKey": "H504320",
      "index": 184,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV150",
          "type": 0,
          "value": "PV150"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 93,
      "ts": "2025-11-25T22:25:34Z",
      "unitId": 0
    },
    {
      "address": "74",
      "description": "Inv 74 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV151",
      "gatewayId": "000CC68FAED4",
      "gatewayName": "",
      "hardwareKey": "H504321",
      "index": 185,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV151",
          "type": 0,
          "value": "PV151"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 94,
      "ts": "2025-11-25T22:25:39Z",
      "unitId": 0
    },
    {
      "address": "75",
      "description": "Inv 75 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV152",
      "gatewayId": "000CC68FAED4",
      "gatewayName": "",
      "hardwareKey": "H504322",
      "index": 186,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV152",
          "type": 0,
          "value": "PV152"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 95,
      "ts": "2025-11-25T22:25:42Z",
      "unitId": 0
    },
    {
      "address": "76",
      "description": "Inv 76 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV153",
      "gatewayId": "000CC68FAED4",
      "gatewayName": "",
      "hardwareKey": "H504323",
      "index": 187,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV153",
          "type": 0,
          "value": "PV153"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 96,
      "ts": "2025-11-25T22:25:45Z",
      "unitId": 0
    },
    {
      "address": "77",
      "description": "Inv 77 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV154",
      "gatewayId": "000CC68FAED4",
      "gatewayName": "",
      "hardwareKey": "H504324",
      "index": 188,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV154",
          "type": 0,
          "value": "PV154"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 97,
      "ts": "2025-11-25T22:25:50Z",
      "unitId": 0
    },
    {
      "address": "78",
      "description": "Inv 78 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV155",
      "gatewayId": "000CC68FAED4",
      "gatewayName": "",
      "hardwareKey": "H504325",
      "index": 189,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV155",
          "type": 0,
          "value": "PV155"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 98,
      "ts": "2025-11-25T22:25:54Z",
      "unitId": 0
    },
    {
      "address": "79",
      "description": "Inv 79 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV156",
      "gatewayId": "000CC68FAED4",
      "gatewayName": "",
      "hardwareKey": "H504326",
      "index": 190,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV156",
          "type": 0,
          "value": "PV156"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 99,
      "ts": "2025-11-25T22:25:58Z",
      "unitId": 0
    },
    {
      "address": "80",
      "description": "Inv 80 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV158",
      "gatewayId": "000CC68FAED4",
      "gatewayName": "",
      "hardwareKey": "H504328",
      "index": 192,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV158",
          "type": 0,
          "value": "PV158"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 100,
      "ts": "2025-11-25T22:26:05Z",
      "unitId": 0
    },
    {
      "address": "81",
      "description": "Inv 81 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV159",
      "gatewayId": "000CC68FAED4",
      "gatewayName": "",
      "hardwareKey": "H504329",
      "index": 193,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV159",
          "type": 0,
          "value": "PV159"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 101,
      "ts": "2025-11-25T22:26:09Z",
      "unitId": 0
    },
    {
      "address": "82",
      "description": "Inv 82 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV160",
      "gatewayId": "000CC68FAED4",
      "gatewayName": "",
      "hardwareKey": "H504330",
      "index": 194,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV160",
          "type": 0,
          "value": "PV160"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 102,
      "ts": "2025-11-25T22:26:13Z",
      "unitId": 0
    },
    {
      "address": "83",
      "description": "Inv 83 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV161",
      "gatewayId": "000CC68FAED4",
      "gatewayName": "",
      "hardwareKey": "H504331",
      "index": 195,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV161",
          "type": 0,
          "value": "PV161"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 103,
      "ts": "2025-11-25T22:26:16Z",
      "unitId": 0
    },
    {
      "address": "84",
      "description": "Inv 84 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV162",
      "gatewayId": "000CC68FAED4",
      "gatewayName": "",
      "hardwareKey": "H504332",
      "index": 196,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV162",
          "type": 0,
          "value": "PV162"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 104,
      "ts": "2025-11-25T22:26:20Z",
      "unitId": 0
    },
    {
      "address": "85",
      "description": "Inv 85 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV163",
      "gatewayId": "000CC68FAED4",
      "gatewayName": "",
      "hardwareKey": "H504333",
      "index": 197,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV163",
          "type": 0,
          "value": "PV163"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 105,
      "ts": "2025-11-25T22:26:23Z",
      "unitId": 0
    },
    {
      "address": "86",
      "description": "Inv 86 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV164",
      "gatewayId": "000CC68FAED4",
      "gatewayName": "",
      "hardwareKey": "H504334",
      "index": 198,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV164",
          "type": 0,
          "value": "PV164"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 106,
      "ts": "2025-11-25T22:26:27Z",
      "unitId": 0
    },
    {
      "address": "87",
      "description": "Inv 87 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV165",
      "gatewayId": "000CC68FAED4",
      "gatewayName": "",
      "hardwareKey": "H504335",
      "index": 199,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV165",
          "type": 0,
          "value": "PV165"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 107,
      "ts": "2025-11-25T22:26:30Z",
      "unitId": 0
    },
    {
      "address": "88",
      "description": "Inv 88 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV157",
      "gatewayId": "000CC68FAED4",
      "gatewayName": "",
      "hardwareKey": "H504327",
      "index": 191,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV157",
          "type": 0,
          "value": "PV157"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 108,
      "ts": "2025-11-25T22:26:02Z",
      "unitId": 0
    },
    {
      "address": "89",
      "description": "Inv 89 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV71",
      "gatewayId": "000CC68FAEA7",
      "gatewayName": "",
      "hardwareKey": "H504240",
      "index": 105,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV71",
          "type": 0,
          "value": "PV71"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": 9600,
          "type": 1,
          "value": 9600
        }
      ],
      "sort": 109,
      "ts": "2025-11-25T22:20:22Z",
      "unitId": 0
    },
    {
      "address": "90",
      "description": "Inv 90 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV72",
      "gatewayId": "000CC68FAEA7",
      "gatewayName": "",
      "hardwareKey": "H504241",
      "index": 106,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV72",
          "type": 0,
          "value": "PV72"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 110,
      "ts": "2025-11-25T22:20:26Z",
      "unitId": 0
    },
    {
      "address": "91",
      "description": "Inv 91 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV73",
      "gatewayId": "000CC68FAEA7",
      "gatewayName": "",
      "hardwareKey": "H504242",
      "index": 107,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV73",
          "type": 0,
          "value": "PV73"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 111,
      "ts": "2025-11-25T22:20:29Z",
      "unitId": 0
    },
    {
      "address": "92",
      "description": "Inv 92 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV74",
      "gatewayId": "000CC68FAEA7",
      "gatewayName": "",
      "hardwareKey": "H504243",
      "index": 108,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV74",
          "type": 0,
          "value": "PV74"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 112,
      "ts": "2025-11-25T22:20:33Z",
      "unitId": 0
    },
    {
      "address": "93",
      "description": "Inv 93 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV75",
      "gatewayId": "000CC68FAEA7",
      "gatewayName": "",
      "hardwareKey": "H504244",
      "index": 109,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV75",
          "type": 0,
          "value": "PV75"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 113,
      "ts": "2025-11-25T22:20:37Z",
      "unitId": 0
    },
    {
      "address": "94",
      "description": "Inv 94 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV76",
      "gatewayId": "000CC68FAEA7",
      "gatewayName": "",
      "hardwareKey": "H504245",
      "index": 110,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV76",
          "type": 0,
          "value": "PV76"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 114,
      "ts": "2025-11-25T22:20:41Z",
      "unitId": 0
    },
    {
      "address": "95",
      "description": "Inv 95 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV77",
      "gatewayId": "000CC68FAEA7",
      "gatewayName": "",
      "hardwareKey": "H504246",
      "index": 111,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV77",
          "type": 0,
          "value": "PV77"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 115,
      "ts": "2025-11-25T22:20:45Z",
      "unitId": 0
    },
    {
      "address": "96",
      "description": "Inv 96 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV78",
      "gatewayId": "000CC68FAEA7",
      "gatewayName": "",
      "hardwareKey": "H504247",
      "index": 112,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV78",
          "type": 0,
          "value": "PV78"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 116,
      "ts": "2025-11-25T22:20:49Z",
      "unitId": 0
    },
    {
      "address": "97",
      "description": "Inv 97 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV79",
      "gatewayId": "000CC68FAEA7",
      "gatewayName": "",
      "hardwareKey": "H504248",
      "index": 113,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV79",
          "type": 0,
          "value": "PV79"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 117,
      "ts": "2025-11-25T22:20:53Z",
      "unitId": 0
    },
    {
      "address": "98",
      "description": "Inv 98 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV80",
      "gatewayId": "000CC68FAEA7",
      "gatewayName": "",
      "hardwareKey": "H504249",
      "index": 114,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV80",
          "type": 0,
          "value": "PV80"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 118,
      "ts": "2025-11-25T22:20:57Z",
      "unitId": 0
    },
    {
      "address": "99",
      "description": "Inv 99 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV81",
      "gatewayId": "000CC68FAEA7",
      "gatewayName": "",
      "hardwareKey": "H504250",
      "index": 115,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV81",
          "type": 0,
          "value": "PV81"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 119,
      "ts": "2025-11-25T22:21:00Z",
      "unitId": 0
    },
    {
      "address": "100",
      "description": "Inv 100 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV82",
      "gatewayId": "000CC68FAEA7",
      "gatewayName": "",
      "hardwareKey": "H504251",
      "index": 116,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV82",
          "type": 0,
          "value": "PV82"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 120,
      "ts": "2025-11-25T22:21:04Z",
      "unitId": 0
    },
    {
      "address": "101",
      "description": "Inv 101 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV83",
      "gatewayId": "000CC68FAEA7",
      "gatewayName": "",
      "hardwareKey": "H504252",
      "index": 117,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV83",
          "type": 0,
          "value": "PV83"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 121,
      "ts": "2025-11-25T22:21:09Z",
      "unitId": 0
    },
    {
      "address": "102",
      "description": "Inv 102 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV84",
      "gatewayId": "000CC68FAEA7",
      "gatewayName": "",
      "hardwareKey": "H504253",
      "index": 118,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV84",
          "type": 0,
          "value": "PV84"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 122,
      "ts": "2025-11-25T22:21:13Z",
      "unitId": 0
    },
    {
      "address": "103",
      "description": "Inv 103 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV85",
      "gatewayId": "000CC68FAEA7",
      "gatewayName": "",
      "hardwareKey": "H504254",
      "index": 119,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV85",
          "type": 0,
          "value": "PV85"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 123,
      "ts": "2025-11-25T22:21:18Z",
      "unitId": 0
    },
    {
      "address": "104",
      "description": "Inv 104 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV86",
      "gatewayId": "000CC68FAEA7",
      "gatewayName": "",
      "hardwareKey": "H504255",
      "index": 120,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV86",
          "type": 0,
          "value": "PV86"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 124,
      "ts": "2025-11-25T22:21:22Z",
      "unitId": 0
    },
    {
      "address": "105",
      "description": "Inv 105 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV87",
      "gatewayId": "000CC68FAEA7",
      "gatewayName": "",
      "hardwareKey": "H504256",
      "index": 121,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV87",
          "type": 0,
          "value": "PV87"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 125,
      "ts": "2025-11-25T22:21:26Z",
      "unitId": 0
    },
    {
      "address": "106",
      "description": "Inv 106 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV88",
      "gatewayId": "000CC68FAEA7",
      "gatewayName": "",
      "hardwareKey": "H504257",
      "index": 122,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV88",
          "type": 0,
          "value": "PV88"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 126,
      "ts": "2025-11-25T22:21:30Z",
      "unitId": 0
    },
    {
      "address": "107",
      "description": "Inv 107 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV89",
      "gatewayId": "000CC68FAEA7",
      "gatewayName": "",
      "hardwareKey": "H504258",
      "index": 123,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV89",
          "type": 0,
          "value": "PV89"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 127,
      "ts": "2025-11-25T22:21:33Z",
      "unitId": 0
    },
    {
      "address": "108",
      "description": "Inv 108 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV90",
      "gatewayId": "000CC68FAEA7",
      "gatewayName": "",
      "hardwareKey": "H504259",
      "index": 124,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV90",
          "type": 0,
          "value": "PV90"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 128,
      "ts": "2025-11-25T22:21:38Z",
      "unitId": 0
    },
    {
      "address": "109",
      "description": "Inv 109 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV91",
      "gatewayId": "000CC68FAEA7",
      "gatewayName": "",
      "hardwareKey": "H504260",
      "index": 125,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV91",
          "type": 0,
          "value": "PV91"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 129,
      "ts": "2025-11-25T22:21:42Z",
      "unitId": 0
    },
    {
      "address": "110",
      "description": "Inv 110 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV92",
      "gatewayId": "000CC68FAEA7",
      "gatewayName": "",
      "hardwareKey": "H504261",
      "index": 126,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV92",
          "type": 0,
          "value": "PV92"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 130,
      "ts": "2025-11-25T22:21:46Z",
      "unitId": 0
    },
    {
      "address": "111",
      "description": "Inv 111 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV93",
      "gatewayId": "000CC68FAEA7",
      "gatewayName": "",
      "hardwareKey": "H504262",
      "index": 127,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV93",
          "type": 0,
          "value": "PV93"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 131,
      "ts": "2025-11-25T22:21:50Z",
      "unitId": 0
    },
    {
      "address": "112",
      "description": "Inv 112 (F)  (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV41",
      "gatewayId": "SCADASIXFLAGS",
      "gatewayName": "",
      "hardwareKey": "H504165",
      "index": 69,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
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
          "name": "dev:KWHoffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:ScaleKW",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 10,
          "name": "dev:ScaleKWH",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 12,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 15,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 16,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 17,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 18,
          "name": "ShortName",
          "originalValue": "PV41",
          "type": 0,
          "value": "PV41"
        }
      ],
      "sort": 132,
      "ts": "2025-11-25T22:18:21Z",
      "unitId": 0
    },
    {
      "address": "113",
      "description": "Inv 113 (F)  (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV42",
      "gatewayId": "SCADASIXFLAGS",
      "gatewayName": "",
      "hardwareKey": "H504166",
      "index": 70,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
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
          "name": "dev:KWHoffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:ScaleKW",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 10,
          "name": "dev:ScaleKWH",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 12,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 15,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 16,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 17,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 18,
          "name": "ShortName",
          "originalValue": "PV42",
          "type": 0,
          "value": "PV42"
        }
      ],
      "sort": 133,
      "ts": "2025-11-25T22:18:25Z",
      "unitId": 0
    },
    {
      "address": "114",
      "description": "Inv 114 (F)  (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV43",
      "gatewayId": "SCADASIXFLAGS",
      "gatewayName": "",
      "hardwareKey": "H504167",
      "index": 71,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV43",
          "type": 0,
          "value": "PV43"
        }
      ],
      "sort": 134,
      "ts": "2025-11-25T22:18:29Z",
      "unitId": 0
    },
    {
      "address": "115",
      "description": "Inv 115 (F)  (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV44",
      "gatewayId": "SCADASIXFLAGS",
      "gatewayName": "",
      "hardwareKey": "H504168",
      "index": 72,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV44",
          "type": 0,
          "value": "PV44"
        }
      ],
      "sort": 135,
      "ts": "2025-11-25T22:18:34Z",
      "unitId": 0
    },
    {
      "address": "116",
      "description": "Inv 116 (F)  (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV45",
      "gatewayId": "SCADASIXFLAGS",
      "gatewayName": "",
      "hardwareKey": "H504169",
      "index": 73,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV45",
          "type": 0,
          "value": "PV45"
        }
      ],
      "sort": 136,
      "ts": "2025-11-25T22:18:37Z",
      "unitId": 0
    },
    {
      "address": "117",
      "description": "Inv 117 (F)  (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV46",
      "gatewayId": "SCADASIXFLAGS",
      "gatewayName": "",
      "hardwareKey": "H504170",
      "index": 74,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
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
          "name": "dev:KWHoffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:ScaleKW",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 10,
          "name": "dev:ScaleKWH",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 12,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 15,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 16,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 17,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 18,
          "name": "ShortName",
          "originalValue": "PV46",
          "type": 0,
          "value": "PV46"
        }
      ],
      "sort": 137,
      "ts": "2025-11-25T22:18:41Z",
      "unitId": 0
    },
    {
      "address": "118",
      "description": "Inv 118 (F)  (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV47",
      "gatewayId": "SCADASIXFLAGS",
      "gatewayName": "",
      "hardwareKey": "H504171",
      "index": 75,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
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
          "name": "dev:KWHoffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:ScaleKW",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 10,
          "name": "dev:ScaleKWH",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 12,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 15,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 16,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 17,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 18,
          "name": "ShortName",
          "originalValue": "PV47",
          "type": 0,
          "value": "PV47"
        }
      ],
      "sort": 138,
      "ts": "2025-11-25T22:18:45Z",
      "unitId": 0
    },
    {
      "address": "119",
      "description": "Inv 119 (F)  (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV48",
      "gatewayId": "SCADASIXFLAGS",
      "gatewayName": "",
      "hardwareKey": "H504172",
      "index": 76,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
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
          "name": "dev:KWHoffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:ScaleKW",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 10,
          "name": "dev:ScaleKWH",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 12,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 15,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 16,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 17,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 18,
          "name": "ShortName",
          "originalValue": "PV48",
          "type": 0,
          "value": "PV48"
        }
      ],
      "sort": 139,
      "ts": "2025-11-25T22:18:48Z",
      "unitId": 0
    },
    {
      "address": "120",
      "description": "Inv 120 (F)  (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV49",
      "gatewayId": "SCADASIXFLAGS",
      "gatewayName": "",
      "hardwareKey": "H504173",
      "index": 77,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV49",
          "type": 0,
          "value": "PV49"
        }
      ],
      "sort": 140,
      "ts": "2025-11-25T22:18:53Z",
      "unitId": 0
    },
    {
      "address": "121",
      "description": "Inv 121 (F)  (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV50",
      "gatewayId": "SCADASIXFLAGS",
      "gatewayName": "",
      "hardwareKey": "H504174",
      "index": 78,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV50",
          "type": 0,
          "value": "PV50"
        }
      ],
      "sort": 141,
      "ts": "2025-11-25T22:18:57Z",
      "unitId": 0
    },
    {
      "address": "122",
      "description": "Inv 122 (F)  (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV51",
      "gatewayId": "SCADASIXFLAGS",
      "gatewayName": "",
      "hardwareKey": "H504175",
      "index": 79,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
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
          "name": "dev:KWHoffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:ScaleKW",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 10,
          "name": "dev:ScaleKWH",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 12,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 15,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 16,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 17,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 18,
          "name": "ShortName",
          "originalValue": "PV51",
          "type": 0,
          "value": "PV51"
        }
      ],
      "sort": 142,
      "ts": "2025-11-25T22:19:01Z",
      "unitId": 0
    },
    {
      "address": "123",
      "description": "Inv 123 (F)  (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV52",
      "gatewayId": "SCADASIXFLAGS",
      "gatewayName": "",
      "hardwareKey": "H504176",
      "index": 80,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
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
          "name": "dev:KWHoffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:ScaleKW",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 10,
          "name": "dev:ScaleKWH",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 12,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 15,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 16,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 17,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 18,
          "name": "ShortName",
          "originalValue": "PV52",
          "type": 0,
          "value": "PV52"
        }
      ],
      "sort": 143,
      "ts": "2025-11-25T22:19:06Z",
      "unitId": 0
    },
    {
      "address": "124",
      "description": "Inv 124 (F)  (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV53",
      "gatewayId": "SCADASIXFLAGS",
      "gatewayName": "",
      "hardwareKey": "H504177",
      "index": 81,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
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
          "name": "dev:KWHoffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:ScaleKW",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 10,
          "name": "dev:ScaleKWH",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 12,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 15,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 16,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 17,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 18,
          "name": "ShortName",
          "originalValue": "PV53",
          "type": 0,
          "value": "PV53"
        }
      ],
      "sort": 143,
      "ts": "2025-11-25T22:19:10Z",
      "unitId": 0
    },
    {
      "address": "125",
      "description": "Inv 125 (F)  (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV54",
      "gatewayId": "SCADASIXFLAGS",
      "gatewayName": "",
      "hardwareKey": "H504178",
      "index": 82,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV54",
          "type": 0,
          "value": "PV54"
        }
      ],
      "sort": 144,
      "ts": "2025-11-25T22:19:15Z",
      "unitId": 0
    },
    {
      "address": "126",
      "description": "Inv 126 (F)  (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV55",
      "gatewayId": "SCADASIXFLAGS",
      "gatewayName": "",
      "hardwareKey": "H504179",
      "index": 83,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV55",
          "type": 0,
          "value": "PV55"
        }
      ],
      "sort": 145,
      "ts": "2025-11-25T22:19:18Z",
      "unitId": 0
    },
    {
      "address": "1",
      "description": "Inv 127 (G) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV56",
      "gatewayId": "000CC68FAF08",
      "gatewayName": "",
      "hardwareKey": "H504186",
      "index": 87,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV56",
          "type": 0,
          "value": "PV56"
        }
      ],
      "sort": 147,
      "ts": "2025-11-25T22:19:22Z",
      "unitId": 0
    },
    {
      "address": "2",
      "description": "Inv 128 (G) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV57",
      "gatewayId": "000CC68FAF08",
      "gatewayName": "",
      "hardwareKey": "H504187",
      "index": 88,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
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
          "name": "dev:KWHoffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:ScaleKW",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 10,
          "name": "dev:ScaleKWH",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 12,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 15,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 16,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 17,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 18,
          "name": "ShortName",
          "originalValue": "PV57",
          "type": 0,
          "value": "PV57"
        }
      ],
      "sort": 148,
      "ts": "2025-11-25T22:19:26Z",
      "unitId": 0
    },
    {
      "address": "3",
      "description": "Inv 129 (G) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV58",
      "gatewayId": "000CC68FAF08",
      "gatewayName": "",
      "hardwareKey": "H504188",
      "index": 89,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
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
          "name": "dev:KWHoffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:ScaleKW",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 10,
          "name": "dev:ScaleKWH",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 12,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 15,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 16,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 17,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 18,
          "name": "ShortName",
          "originalValue": "PV58",
          "type": 0,
          "value": "PV58"
        }
      ],
      "sort": 149,
      "ts": "2025-11-25T22:19:30Z",
      "unitId": 0
    },
    {
      "address": "4",
      "description": "Inv 130 (G) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV59",
      "gatewayId": "000CC68FAF08",
      "gatewayName": "",
      "hardwareKey": "H504189",
      "index": 90,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV59",
          "type": 0,
          "value": "PV59"
        }
      ],
      "sort": 150,
      "ts": "2025-11-25T22:19:34Z",
      "unitId": 0
    },
    {
      "address": "5",
      "description": "Inv 131 (G) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV60",
      "gatewayId": "000CC68FAF08",
      "gatewayName": "",
      "hardwareKey": "H504190",
      "index": 91,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV60",
          "type": 0,
          "value": "PV60"
        }
      ],
      "sort": 151,
      "ts": "2025-11-25T22:19:38Z",
      "unitId": 0
    },
    {
      "address": "6",
      "description": "Inv 132 (G) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV61",
      "gatewayId": "000CC68FAF08",
      "gatewayName": "",
      "hardwareKey": "H504191",
      "index": 92,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV61",
          "type": 0,
          "value": "PV61"
        }
      ],
      "sort": 152,
      "ts": "2025-11-25T22:19:42Z",
      "unitId": 0
    },
    {
      "address": "7",
      "description": "Inv 133 (G) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV62",
      "gatewayId": "000CC68FAF08",
      "gatewayName": "",
      "hardwareKey": "H504192",
      "index": 93,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
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
          "name": "dev:KWHoffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:ScaleKW",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 10,
          "name": "dev:ScaleKWH",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 12,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 15,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 16,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 17,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 18,
          "name": "ShortName",
          "originalValue": "PV62",
          "type": 0,
          "value": "PV62"
        }
      ],
      "sort": 153,
      "ts": "2025-11-25T22:19:46Z",
      "unitId": 0
    },
    {
      "address": "8",
      "description": "Inv 134 (G) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV63",
      "gatewayId": "000CC68FAF08",
      "gatewayName": "",
      "hardwareKey": "H504193",
      "index": 94,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
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
          "name": "dev:KWHoffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:ScaleKW",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 10,
          "name": "dev:ScaleKWH",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 12,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 15,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 16,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 17,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 18,
          "name": "ShortName",
          "originalValue": "PV63",
          "type": 0,
          "value": "PV63"
        }
      ],
      "sort": 154,
      "ts": "2025-11-25T22:19:50Z",
      "unitId": 0
    },
    {
      "address": "9",
      "description": "Inv 135 (G) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV64",
      "gatewayId": "000CC68FAF08",
      "gatewayName": "",
      "hardwareKey": "H504194",
      "index": 95,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV64",
          "type": 0,
          "value": "PV64"
        }
      ],
      "sort": 155,
      "ts": "2025-11-25T22:19:55Z",
      "unitId": 0
    },
    {
      "address": "10",
      "description": "Inv 136 (G) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV65",
      "gatewayId": "000CC68FAF08",
      "gatewayName": "",
      "hardwareKey": "H504195",
      "index": 96,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV65",
          "type": 0,
          "value": "PV65"
        }
      ],
      "sort": 156,
      "ts": "2025-11-25T22:19:58Z",
      "unitId": 0
    },
    {
      "address": "11",
      "description": "Inv 137 (G) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV66",
      "gatewayId": "000CC68FAF08",
      "gatewayName": "",
      "hardwareKey": "H504196",
      "index": 97,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
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
          "name": "dev:KWHoffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:ScaleKW",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 10,
          "name": "dev:ScaleKWH",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 12,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 15,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 16,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 17,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 18,
          "name": "ShortName",
          "originalValue": "PV66",
          "type": 0,
          "value": "PV66"
        }
      ],
      "sort": 157,
      "ts": "2025-11-25T22:20:02Z",
      "unitId": 0
    },
    {
      "address": "12",
      "description": "Inv 138 (G) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV67",
      "gatewayId": "000CC68FAF08",
      "gatewayName": "",
      "hardwareKey": "H504197",
      "index": 98,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
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
          "name": "dev:KWHoffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:ScaleKW",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 10,
          "name": "dev:ScaleKWH",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 12,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 15,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 16,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 17,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 18,
          "name": "ShortName",
          "originalValue": "PV67",
          "type": 0,
          "value": "PV67"
        }
      ],
      "sort": 158,
      "ts": "2025-11-25T22:20:06Z",
      "unitId": 0
    },
    {
      "address": "13",
      "description": "Inv 139 (G) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV68",
      "gatewayId": "000CC68FAF08",
      "gatewayName": "",
      "hardwareKey": "H504198",
      "index": 99,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
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
          "name": "dev:KWHoffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 4,
          "name": "dev:ScaleKW",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 10,
          "name": "dev:ScaleKWH",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 12,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 14,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 15,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 16,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 17,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 18,
          "name": "ShortName",
          "originalValue": "PV68",
          "type": 0,
          "value": "PV68"
        }
      ],
      "sort": 159,
      "ts": "2025-11-25T22:20:10Z",
      "unitId": 0
    },
    {
      "address": "14",
      "description": "Inv 140 (G) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV69",
      "gatewayId": "000CC68FAF08",
      "gatewayName": "",
      "hardwareKey": "H504199",
      "index": 100,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV69",
          "type": 0,
          "value": "PV69"
        }
      ],
      "sort": 160,
      "ts": "2025-11-25T22:20:14Z",
      "unitId": 0
    },
    {
      "address": "15",
      "description": "Inv 141 (G) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV70",
      "gatewayId": "000CC68FAF08",
      "gatewayName": "",
      "hardwareKey": "H504200",
      "index": 101,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
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
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 4,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 6,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 7,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScaleKWH",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 10,
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 14,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 15,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 16,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 17,
          "name": "ShortName",
          "originalValue": "PV70",
          "type": 0,
          "value": "PV70"
        }
      ],
      "sort": 161,
      "ts": "2025-11-25T22:20:18Z",
      "unitId": 0
    },
    {
      "address": "16",
      "description": "Inv 142 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV94",
      "gatewayId": "000CC68FAED9",
      "gatewayName": "",
      "hardwareKey": "H504264",
      "index": 128,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV94",
          "type": 0,
          "value": "PV94"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": 9600,
          "type": 1,
          "value": 9600
        }
      ],
      "sort": 162,
      "ts": "2025-11-25T22:21:55Z",
      "unitId": 0
    },
    {
      "address": "17",
      "description": "Inv 143 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV95",
      "gatewayId": "000CC68FAED9",
      "gatewayName": "",
      "hardwareKey": "H504265",
      "index": 129,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV95",
          "type": 0,
          "value": "PV95"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 163,
      "ts": "2025-11-25T22:21:59Z",
      "unitId": 0
    },
    {
      "address": "18",
      "description": "Inv 144 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV96",
      "gatewayId": "000CC68FAED9",
      "gatewayName": "",
      "hardwareKey": "H504266",
      "index": 130,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV96",
          "type": 0,
          "value": "PV96"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 164,
      "ts": "2025-11-25T22:22:04Z",
      "unitId": 0
    },
    {
      "address": "19",
      "description": "Inv 145 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV97",
      "gatewayId": "000CC68FAED9",
      "gatewayName": "",
      "hardwareKey": "H504267",
      "index": 131,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV97",
          "type": 0,
          "value": "PV97"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 165,
      "ts": "2025-11-25T22:22:07Z",
      "unitId": 0
    },
    {
      "address": "20",
      "description": "Inv 146 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV98",
      "gatewayId": "000CC68FAED9",
      "gatewayName": "",
      "hardwareKey": "H504268",
      "index": 132,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV98",
          "type": 0,
          "value": "PV98"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 166,
      "ts": "2025-11-25T22:22:11Z",
      "unitId": 0
    },
    {
      "address": "21",
      "description": "Inv 147 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV99",
      "gatewayId": "000CC68FAED9",
      "gatewayName": "",
      "hardwareKey": "H504269",
      "index": 133,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV99",
          "type": 0,
          "value": "PV99"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 167,
      "ts": "2025-11-25T22:22:15Z",
      "unitId": 0
    },
    {
      "address": "22",
      "description": "Inv 148 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV100",
      "gatewayId": "000CC68FAED9",
      "gatewayName": "",
      "hardwareKey": "H504270",
      "index": 134,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV100",
          "type": 0,
          "value": "PV100"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 168,
      "ts": "2025-11-25T22:22:18Z",
      "unitId": 0
    },
    {
      "address": "23",
      "description": "Inv 149 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV101",
      "gatewayId": "000CC68FAED9",
      "gatewayName": "",
      "hardwareKey": "H504271",
      "index": 135,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV101",
          "type": 0,
          "value": "PV101"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 169,
      "ts": "2025-11-25T22:22:22Z",
      "unitId": 0
    },
    {
      "address": "24",
      "description": "Inv 150 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV102",
      "gatewayId": "000CC68FAED9",
      "gatewayName": "",
      "hardwareKey": "H504272",
      "index": 136,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV102",
          "type": 0,
          "value": "PV102"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 170,
      "ts": "2025-11-25T22:22:26Z",
      "unitId": 0
    },
    {
      "address": "25",
      "description": "Inv 151 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV103",
      "gatewayId": "000CC68FAED9",
      "gatewayName": "",
      "hardwareKey": "H504273",
      "index": 137,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV103",
          "type": 0,
          "value": "PV103"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 171,
      "ts": "2025-11-25T22:22:30Z",
      "unitId": 0
    },
    {
      "address": "26",
      "description": "Inv 152 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV104",
      "gatewayId": "000CC68FAED9",
      "gatewayName": "",
      "hardwareKey": "H504274",
      "index": 138,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV104",
          "type": 0,
          "value": "PV104"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 172,
      "ts": "2025-11-25T22:22:34Z",
      "unitId": 0
    },
    {
      "address": "27",
      "description": "Inv 153 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV105",
      "gatewayId": "000CC68FAED9",
      "gatewayName": "",
      "hardwareKey": "H504275",
      "index": 139,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV105",
          "type": 0,
          "value": "PV105"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 173,
      "ts": "2025-11-25T22:22:37Z",
      "unitId": 0
    },
    {
      "address": "28",
      "description": "Inv 154 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV106",
      "gatewayId": "000CC68FAED9",
      "gatewayName": "",
      "hardwareKey": "H504276",
      "index": 140,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV106",
          "type": 0,
          "value": "PV106"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 174,
      "ts": "2025-11-25T22:22:41Z",
      "unitId": 0
    },
    {
      "address": "29",
      "description": "Inv 155 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV107",
      "gatewayId": "000CC68FAED9",
      "gatewayName": "",
      "hardwareKey": "H504277",
      "index": 141,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV107",
          "type": 0,
          "value": "PV107"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 175,
      "ts": "2025-11-25T22:22:45Z",
      "unitId": 0
    },
    {
      "address": "30",
      "description": "Inv 156 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV108",
      "gatewayId": "000CC68FAED9",
      "gatewayName": "",
      "hardwareKey": "H504278",
      "index": 142,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV108",
          "type": 0,
          "value": "PV108"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 176,
      "ts": "2025-11-25T22:22:49Z",
      "unitId": 0
    },
    {
      "address": "31",
      "description": "Inv 157 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV109",
      "gatewayId": "000CC68FAED9",
      "gatewayName": "",
      "hardwareKey": "H504279",
      "index": 143,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV109",
          "type": 0,
          "value": "PV109"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 177,
      "ts": "2025-11-25T22:22:53Z",
      "unitId": 0
    },
    {
      "address": "32",
      "description": "Inv 158 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV110",
      "gatewayId": "000CC68FAED9",
      "gatewayName": "",
      "hardwareKey": "H504280",
      "index": 144,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV110",
          "type": 0,
          "value": "PV110"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 178,
      "ts": "2025-11-25T22:22:56Z",
      "unitId": 0
    },
    {
      "address": "33",
      "description": "Inv 159 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV111",
      "gatewayId": "000CC68FAED9",
      "gatewayName": "",
      "hardwareKey": "H504281",
      "index": 145,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV111",
          "type": 0,
          "value": "PV111"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 179,
      "ts": "2025-11-25T22:23:00Z",
      "unitId": 0
    },
    {
      "address": "34",
      "description": "Inv 160 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV112",
      "gatewayId": "000CC68FAED9",
      "gatewayName": "",
      "hardwareKey": "H504282",
      "index": 146,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV112",
          "type": 0,
          "value": "PV112"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 180,
      "ts": "2025-11-25T22:23:03Z",
      "unitId": 0
    },
    {
      "address": "35",
      "description": "Inv 161 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV113",
      "gatewayId": "000CC68FAED9",
      "gatewayName": "",
      "hardwareKey": "H504283",
      "index": 147,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV113",
          "type": 0,
          "value": "PV113"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 181,
      "ts": "2025-11-25T22:23:07Z",
      "unitId": 0
    },
    {
      "address": "36",
      "description": "Inv 162 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV114",
      "gatewayId": "000CC68FAED9",
      "gatewayName": "",
      "hardwareKey": "H504284",
      "index": 148,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV114",
          "type": 0,
          "value": "PV114"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 182,
      "ts": "2025-11-25T22:23:11Z",
      "unitId": 0
    },
    {
      "address": "37",
      "description": "Inv 163 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV115",
      "gatewayId": "000CC68FAED9",
      "gatewayName": "",
      "hardwareKey": "H504285",
      "index": 149,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV115",
          "type": 0,
          "value": "PV115"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 183,
      "ts": "2025-11-25T22:23:14Z",
      "unitId": 0
    },
    {
      "address": "38",
      "description": "Inv 164 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV116",
      "gatewayId": "000CC68FAED9",
      "gatewayName": "",
      "hardwareKey": "H504286",
      "index": 150,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV116",
          "type": 0,
          "value": "PV116"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 184,
      "ts": "2025-11-25T22:23:18Z",
      "unitId": 0
    },
    {
      "address": "39",
      "description": "Inv 165 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV117",
      "gatewayId": "000CC68FAED9",
      "gatewayName": "",
      "hardwareKey": "H504287",
      "index": 151,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV117",
          "type": 0,
          "value": "PV117"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 185,
      "ts": "2025-11-25T22:23:23Z",
      "unitId": 0
    },
    {
      "address": "40",
      "description": "Inv 166 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "driverId": 20630,
      "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
      "functionCode": 1,
      "functionId": "PV118",
      "gatewayId": "000CC68FAED9",
      "gatewayName": "",
      "hardwareKey": "H504288",
      "index": 152,
      "outOfService": false,
      "port": 1,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 22,
          "registerModbusName": "Active Energy Gross",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 9999,
          "registerModbusName": "Active Energy Gross Raw",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.1,
          "type": 2,
          "value": 0.1
        },
        {
          "index": 1,
          "name": "dev:ScaleV",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 2,
          "name": "dev:ScaleI",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 3,
          "name": "dev:ScaleVDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 4,
          "name": "dev:ScaleIDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 5,
          "name": "dev:ScaleFrequency",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
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
          "name": "dev:ScaleT",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 8,
          "name": "dev:ScaleKVA",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 9,
          "name": "dev:ScalePF",
          "originalValue": "0.001",
          "type": 0,
          "value": "0.001"
        },
        {
          "index": 10,
          "name": "dev:ScaleKVAR",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 11,
          "name": "dev:Rollover",
          "originalValue": "Neg:100x,Pos:100x",
          "type": 0,
          "value": "Neg:100x,Pos:100x"
        },
        {
          "index": 12,
          "name": "dev:ScaleKWDC",
          "originalValue": "0.1",
          "type": 0,
          "value": "0.1"
        },
        {
          "index": 13,
          "name": "dev:Alias",
          "originalValue": "Status=opmode",
          "type": 0,
          "value": "Status=opmode"
        },
        {
          "index": 14,
          "name": "dev:Regoffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 15,
          "name": "ShortName",
          "originalValue": "PV118",
          "type": 0,
          "value": "PV118"
        },
        {
          "index": 16,
          "name": "dev:portMode",
          "originalValue": "rs485",
          "type": 0,
          "value": "rs485"
        },
        {
          "index": 17,
          "name": "dev:baud",
          "originalValue": "9600",
          "type": 0,
          "value": "9600"
        }
      ],
      "sort": 186,
      "ts": "2025-11-25T22:23:27Z",
      "unitId": 0
    },
    {
      "address": "16",
      "description": "Weather Station (A) (WS0)",
      "driverId": 8164,
      "driverName": "AE Integrated WS Standard (FW 114+) (Qualified)",
      "functionCode": 5,
      "functionId": "WS2",
      "gatewayId": "000CC68FAEA8",
      "gatewayName": "",
      "hardwareKey": "H504103",
      "index": 61,
      "outOfService": false,
      "port": 2,
      "registerOffsets": [],
      "serialNumber": "2V0757-8",
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
          "name": "MaxTemp",
          "originalValue": 160,
          "type": 2,
          "value": 160
        },
        {
          "index": 4,
          "name": "weather",
          "originalValue": 1057,
          "type": 1,
          "value": 1057
        },
        {
          "index": 5,
          "name": "dev:P1",
          "originalValue": "K",
          "type": 0,
          "value": "K"
        },
        {
          "index": 6,
          "name": "dev:P2",
          "originalValue": "W",
          "type": 0,
          "value": "W"
        },
        {
          "index": 7,
          "name": "dev:K1",
          "originalValue": "1.00",
          "type": 0,
          "value": "1.00"
        },
        {
          "index": 8,
          "name": "dev:K2",
          "originalValue": "10.0",
          "type": 0,
          "value": "10.0"
        },
        {
          "index": 9,
          "name": "dev:T1",
          "originalValue": "1",
          "type": 0,
          "value": "1"
        },
        {
          "index": 10,
          "name": "dev:TR1",
          "originalValue": "S",
          "type": 0,
          "value": "S"
        },
        {
          "index": 11,
          "name": "dev:TR2",
          "originalValue": "W",
          "type": 0,
          "value": "W"
        },
        {
          "index": 12,
          "name": "dev:SWAP",
          "originalValue": "1",
          "type": 0,
          "value": "1"
        },
        {
          "index": 13,
          "name": "ShortName",
          "originalValue": "WS2",
          "type": 0,
          "value": "WS2"
        },
        {
          "index": 14,
          "name": "MinTemp",
          "originalValue": -30,
          "type": 2,
          "value": -30
        }
      ],
      "sort": 201,
      "ts": "2024-06-10T16:38:56Z",
      "unitId": 0
    },
    {
      "address": "17",
      "description": "Weather Station (H) (WS1)",
      "driverId": 8164,
      "driverName": "AE Integrated WS Standard (FW 114+) (Qualified)",
      "functionCode": 5,
      "functionId": "WS4",
      "gatewayId": "000CC68FAED9",
      "gatewayName": "",
      "hardwareKey": "H504131",
      "index": 65,
      "outOfService": false,
      "port": 2,
      "registerOffsets": [],
      "serialNumber": "2V0766-8",
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
          "name": "MaxTemp",
          "originalValue": 160,
          "type": 2,
          "value": 160
        },
        {
          "index": 4,
          "name": "weather",
          "originalValue": 1057,
          "type": 1,
          "value": 1057
        },
        {
          "index": 5,
          "name": "dev:P1",
          "originalValue": "K",
          "type": 0,
          "value": "K"
        },
        {
          "index": 6,
          "name": "dev:P2",
          "originalValue": "W",
          "type": 0,
          "value": "W"
        },
        {
          "index": 7,
          "name": "dev:K1",
          "originalValue": "1.00",
          "type": 0,
          "value": "1.00"
        },
        {
          "index": 8,
          "name": "dev:K2",
          "originalValue": "10.0",
          "type": 0,
          "value": "10.0"
        },
        {
          "index": 9,
          "name": "dev:T1",
          "originalValue": "1",
          "type": 0,
          "value": "1"
        },
        {
          "index": 10,
          "name": "dev:TR1",
          "originalValue": "S",
          "type": 0,
          "value": "S"
        },
        {
          "index": 11,
          "name": "dev:TR2",
          "originalValue": "W",
          "type": 0,
          "value": "W"
        },
        {
          "index": 12,
          "name": "dev:SWAP",
          "originalValue": "1",
          "type": 0,
          "value": "1"
        },
        {
          "index": 13,
          "name": "ShortName",
          "originalValue": "WS4",
          "type": 0,
          "value": "WS4"
        },
        {
          "index": 14,
          "name": "MinTemp",
          "originalValue": -30,
          "type": 2,
          "value": -30
        }
      ],
      "sort": 202,
      "ts": "2024-06-10T16:38:57Z",
      "unitId": 0
    },
    {
      "address": "7",
      "description": "IMT (215\u00b0/3\u00b0) (A) Ref Cell - POA (RC0)",
      "driverId": 3580,
      "driverName": "IMT Reference Cell (Qualified)",
      "functionCode": 5,
      "functionId": "WS1",
      "gatewayId": "000CC68FAEA8",
      "gatewayName": "",
      "hardwareKey": "H504102",
      "index": 60,
      "outOfService": false,
      "port": 2,
      "registerOffsets": [],
      "serialNumber": "485-32003-22-24160870",
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
          "name": "MaxTemp",
          "originalValue": 160,
          "type": 2,
          "value": 160
        },
        {
          "index": 3,
          "name": "weather",
          "originalValue": 132,
          "type": 1,
          "value": 132
        },
        {
          "index": 4,
          "name": "ShortName",
          "originalValue": "WS1",
          "type": 0,
          "value": "WS1"
        },
        {
          "index": 5,
          "name": "MinTemp",
          "originalValue": -30,
          "type": 2,
          "value": -30
        }
      ],
      "sort": 203,
      "ts": "2024-12-26T15:03:26Z",
      "unitId": 0
    },
    {
      "address": "6",
      "description": "IMT (165\u00b0/3\u00b0) (H) Ref Cell - POA (RC1)",
      "driverId": 3580,
      "driverName": "IMT Reference Cell (Qualified)",
      "functionCode": 5,
      "functionId": "WS3",
      "gatewayId": "000CC68FAED9",
      "gatewayName": "",
      "hardwareKey": "H504130",
      "index": 64,
      "outOfService": false,
      "port": 2,
      "registerOffsets": [],
      "serialNumber": "485-32003-22-24160899",
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
          "name": "MinTemp",
          "originalValue": -30,
          "type": 2,
          "value": -30
        },
        {
          "index": 3,
          "name": "MaxTemp",
          "originalValue": 160,
          "type": 2,
          "value": 160
        },
        {
          "index": 4,
          "name": "weather",
          "originalValue": 132,
          "type": 1,
          "value": 132
        },
        {
          "index": 5,
          "name": "ShortName",
          "originalValue": "WS3",
          "type": 0,
          "value": "WS3"
        }
      ],
      "sort": 204,
      "ts": "2024-12-26T15:03:53Z",
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
      "hardwareKey": "H502682",
      "index": 18,
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
      "sort": 206,
      "ts": "2024-06-10T16:38:55Z",
      "unitId": 0
    },
    {
      "address": "0",
      "description": "BESS  CONTROL (F) (TESLA??)",
      "driverId": 20336,
      "driverName": "TBD Test SWD",
      "functionCode": 25,
      "functionId": "BS0",
      "gatewayId": "SCADASIXFLAGS",
      "gatewayName": "",
      "hardwareKey": "H504185",
      "index": 86,
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
          "name": "dev:TCPport",
          "originalValue": 502,
          "type": 1,
          "value": 502
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
          "name": "ShortName",
          "originalValue": "BS0",
          "type": 0,
          "value": "BS0"
        }
      ],
      "sort": 221,
      "ts": "2024-12-05T17:41:53Z",
      "unitId": 0
    },
    {
      "address": "192.168.13.221",
      "description": "AlsoEnergy Smart UPS (F) (UPS0)",
      "driverId": 23545,
      "driverName": "Phoenix Contact QUINT4-UPS Standard Batteries (SS) Standard v2",
      "functionCode": 11,
      "functionId": "DA8",
      "gatewayId": "SCADASIXFLAGS",
      "gatewayName": "",
      "hardwareKey": "H504202",
      "index": 103,
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
          "name": "dev:UnitID",
          "originalValue": 192,
          "type": 1,
          "value": 192
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
          "name": "dev:TempLimit",
          "originalValue": 104,
          "type": 2,
          "value": 104
        },
        {
          "index": 5,
          "name": "ShortName",
          "originalValue": "DA8",
          "type": 0,
          "value": "DA8"
        }
      ],
      "sort": 241,
      "ts": "2024-06-10T16:38:58Z",
      "unitId": 192
    },
    {
      "address": "192.168.13.193",
      "description": "DIGITAL I/O - XFMR ALARMS (A) (IO2)",
      "driverId": 7860,
      "driverName": "Adam 6050 - Transformer Configurable",
      "functionCode": 11,
      "functionId": "DA0",
      "gatewayId": "000CC68FAEA8",
      "gatewayName": "",
      "hardwareKey": "H504104",
      "index": 62,
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
          "name": "dev:TCPport",
          "originalValue": 502,
          "type": 1,
          "value": 502
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
          "name": "dev:Info",
          "originalValue": "Format(\"{0:0.0}\", Calc(\"Status\"))",
          "type": 0,
          "value": "Format(\"{0:0.0}\", Calc(\"Status\"))"
        },
        {
          "index": 4,
          "name": "dev:NormallyOpen",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 5,
          "name": "dev:Profile",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 6,
          "name": "ShortName",
          "originalValue": "DA0",
          "type": 0,
          "value": "DA0"
        },
        {
          "index": 7,
          "name": "dev:Enable",
          "originalValue": 1,
          "type": 1,
          "value": 1
        }
      ],
      "sort": 251,
      "ts": "2024-06-10T16:38:58Z",
      "unitId": 0
    },
    {
      "address": "192.168.13.194",
      "description": "DIGITAL I/O - XFMR ALARMS (B) (IO3)",
      "driverId": 7860,
      "driverName": "Adam 6050 - Transformer Configurable",
      "functionCode": 11,
      "functionId": "DA1",
      "gatewayId": "000CC68FAFE1",
      "gatewayName": "",
      "hardwareKey": "H504105",
      "index": 63,
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
          "name": "dev:TCPport",
          "originalValue": 502,
          "type": 1,
          "value": 502
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
          "name": "dev:Info",
          "originalValue": "Format(\"{0:0.0}\", Calc(\"Status\"))",
          "type": 0,
          "value": "Format(\"{0:0.0}\", Calc(\"Status\"))"
        },
        {
          "index": 4,
          "name": "dev:NormallyOpen",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 5,
          "name": "dev:Profile",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 6,
          "name": "ShortName",
          "originalValue": "DA1",
          "type": 0,
          "value": "DA1"
        }
      ],
      "sort": 252,
      "ts": "2024-06-10T16:38:59Z",
      "unitId": 0
    },
    {
      "address": "192.168.13.195",
      "description": "DIGITAL I/O - XFMR ALARMS (C) (IO4)",
      "driverId": 7860,
      "driverName": "Adam 6050 - Transformer Configurable",
      "functionCode": 11,
      "functionId": "DA4",
      "gatewayId": "000CC68FAED5",
      "gatewayName": "",
      "hardwareKey": "H504157",
      "index": 67,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:Info",
          "originalValue": "Format(\"{0:0.0}\", Calc(\"Status\"))",
          "type": 0,
          "value": "Format(\"{0:0.0}\", Calc(\"Status\"))"
        },
        {
          "index": 1,
          "name": "dev:NormallyOpen",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 2,
          "name": "dev:Profile",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 3,
          "name": "dev:RegOffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 4,
          "name": "ShortName",
          "originalValue": "DA4",
          "type": 0,
          "value": "DA4"
        }
      ],
      "sort": 253,
      "ts": "2024-06-10T16:38:59Z",
      "unitId": 0
    },
    {
      "address": "192.168.13.196",
      "description": "DIGITAL I/O - XFMR ALARMS (D) (IO5)",
      "driverId": 7860,
      "driverName": "Adam 6050 - Transformer Configurable",
      "functionCode": 11,
      "functionId": "DA5",
      "gatewayId": "000CC68FAED4",
      "gatewayName": "",
      "hardwareKey": "H504158",
      "index": 68,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:Info",
          "originalValue": "Format(\"{0:0.0}\", Calc(\"Status\"))",
          "type": 0,
          "value": "Format(\"{0:0.0}\", Calc(\"Status\"))"
        },
        {
          "index": 1,
          "name": "dev:NormallyOpen",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 2,
          "name": "dev:Profile",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 3,
          "name": "dev:RegOffset",
          "originalValue": "0",
          "type": 0,
          "value": "0"
        },
        {
          "index": 4,
          "name": "ShortName",
          "originalValue": "DA5",
          "type": 0,
          "value": "DA5"
        }
      ],
      "sort": 254,
      "ts": "2024-06-10T16:38:59Z",
      "unitId": 0
    },
    {
      "address": "192.168.13.197",
      "description": "DIGITAL I/O - XFMR ALARMS (E) (I06)",
      "driverId": 7860,
      "driverName": "Adam 6050 - Transformer Configurable",
      "functionCode": 11,
      "functionId": "DA9",
      "gatewayId": "000CC68FAEA7",
      "gatewayName": "",
      "hardwareKey": "H504239",
      "index": 104,
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
          "name": "dev:TCPport",
          "originalValue": 502,
          "type": 1,
          "value": 502
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
          "name": "dev:Info",
          "originalValue": "Format(\"{0:0.0}\", Calc(\"Status\"))",
          "type": 0,
          "value": "Format(\"{0:0.0}\", Calc(\"Status\"))"
        },
        {
          "index": 4,
          "name": "dev:NormallyOpen",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 5,
          "name": "dev:Profile",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 6,
          "name": "ShortName",
          "originalValue": "DA9",
          "type": 0,
          "value": "DA9"
        }
      ],
      "sort": 255,
      "ts": "2024-06-10T16:39:00Z",
      "unitId": 0
    },
    {
      "address": "192.168.13.191",
      "description": "DIGITAL I/O - XFMR ALARMS (F) (IO0)",
      "driverId": 7860,
      "driverName": "Adam 6050 - Transformer Configurable",
      "functionCode": 11,
      "functionId": "DA7",
      "gatewayId": "SCADASIXFLAGS",
      "gatewayName": "",
      "hardwareKey": "H504201",
      "index": 102,
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
          "name": "dev:TCPport",
          "originalValue": 502,
          "type": 1,
          "value": 502
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
          "name": "dev:Info",
          "originalValue": "Format(\"{0:0.0}\", Calc(\"Status\"))",
          "type": 0,
          "value": "Format(\"{0:0.0}\", Calc(\"Status\"))"
        },
        {
          "index": 4,
          "name": "dev:NormallyOpen",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 5,
          "name": "dev:Profile",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 6,
          "name": "ShortName",
          "originalValue": "DA7",
          "type": 0,
          "value": "DA7"
        }
      ],
      "sort": 256,
      "ts": "2024-06-10T16:39:00Z",
      "unitId": 0
    },
    {
      "address": "192.168.13.192",
      "description": "DIGITAL I/O - XFMR ALARMS (G) (IO1)",
      "driverId": 7860,
      "driverName": "Adam 6050 - Transformer Configurable",
      "functionCode": 11,
      "functionId": "DA6",
      "gatewayId": "000CC68FAF08",
      "gatewayName": "",
      "hardwareKey": "H504180",
      "index": 84,
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
          "name": "dev:TCPport",
          "originalValue": 502,
          "type": 1,
          "value": 502
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
          "name": "dev:Info",
          "originalValue": "Format(\"{0:0.0}\", Calc(\"Status\"))",
          "type": 0,
          "value": "Format(\"{0:0.0}\", Calc(\"Status\"))"
        },
        {
          "index": 4,
          "name": "dev:NormallyOpen",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 5,
          "name": "dev:Profile",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 6,
          "name": "ShortName",
          "originalValue": "DA6",
          "type": 0,
          "value": "DA6"
        }
      ],
      "sort": 257,
      "ts": "2024-06-10T16:39:00Z",
      "unitId": 0
    },
    {
      "address": "192.168.13.198",
      "description": "DIGITAL I/O - XFMR ALARMS (H) (I07)",
      "driverId": 7860,
      "driverName": "Adam 6050 - Transformer Configurable",
      "functionCode": 11,
      "functionId": "DA2",
      "gatewayId": "000CC68FAED9",
      "gatewayName": "",
      "hardwareKey": "H504132",
      "index": 66,
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
          "name": "dev:TCPport",
          "originalValue": 502,
          "type": 1,
          "value": 502
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
          "name": "dev:Info",
          "originalValue": "Format(\"{0:0.0}\", Calc(\"Status\"))",
          "type": 0,
          "value": "Format(\"{0:0.0}\", Calc(\"Status\"))"
        },
        {
          "index": 4,
          "name": "dev:NormallyOpen",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 5,
          "name": "dev:Profile",
          "originalValue": 0,
          "type": 1,
          "value": 0
        },
        {
          "index": 6,
          "name": "ShortName",
          "originalValue": "DA2",
          "type": 0,
          "value": "DA2"
        }
      ],
      "sort": 258,
      "ts": "2024-06-10T16:39:01Z",
      "unitId": 0
    },
    {
      "address": "192.168.13.181",
      "description": "SEL 351 Relay (AB)",
      "driverId": 2635,
      "driverName": "SEL-351 relay",
      "functionCode": 34,
      "functionId": "SW0",
      "gatewayId": "",
      "gatewayName": "",
      "hardwareKey": "H582340",
      "index": 13,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [
        {
          "index": 0,
          "name": "DELoffset",
          "registerAddress": 24,
          "registerModbusName": "Export energy",
          "value": 0
        },
        {
          "index": 1,
          "name": "",
          "registerAddress": 25,
          "registerModbusName": "Export energy",
          "value": 0
        },
        {
          "index": 2,
          "name": "KWHoffset",
          "registerAddress": 29,
          "registerModbusName": "Energy, net",
          "value": 0
        },
        {
          "index": 3,
          "name": "",
          "registerAddress": 33,
          "registerModbusName": "Import energy",
          "value": 0
        },
        {
          "index": 4,
          "name": "RECoffset",
          "registerAddress": 34,
          "registerModbusName": "Import energy",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "ShortName",
          "originalValue": "SW0",
          "type": 0,
          "value": "SW0"
        }
      ],
      "sort": 301,
      "ts": "2025-11-21T21:04:13Z",
      "unitId": 0
    },
    {
      "address": "192.168.13.182",
      "description": "SEL 351 Relay (CD)",
      "driverId": 7684,
      "driverName": "SEL 351 (DMID 2701)",
      "functionCode": 34,
      "functionId": "SW1",
      "gatewayId": "",
      "gatewayName": "",
      "hardwareKey": "H582341",
      "index": 14,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 11,
          "registerModbusName": "AC Energy",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.001,
          "type": 2,
          "value": 0.001
        },
        {
          "index": 1,
          "name": "dev:ScaleKWH",
          "originalValue": 0.001,
          "type": 2,
          "value": 0.001
        },
        {
          "index": 2,
          "name": "dev:KWHrecOffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 3,
          "name": "dev:KWHdelOffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 4,
          "name": "ShortName",
          "originalValue": "SW1",
          "type": 0,
          "value": "SW1"
        },
        {
          "index": 5,
          "name": "dev:Info",
          "originalValue": "Format(\"{0:0.0}\", Calc(\"Status\"))",
          "type": 0,
          "value": "Format(\"{0:0.0}\", Calc(\"Status\"))"
        }
      ],
      "sort": 302,
      "ts": "2025-10-14T14:42:55Z",
      "unitId": 0
    },
    {
      "address": "192.168.13.183",
      "description": "SEL 351 Relay (EFG)",
      "driverId": 7684,
      "driverName": "SEL 351 (DMID 2701)",
      "functionCode": 34,
      "functionId": "SW2",
      "gatewayId": "",
      "gatewayName": "",
      "hardwareKey": "H582342",
      "index": 15,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 11,
          "registerModbusName": "AC Energy",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.001,
          "type": 2,
          "value": 0.001
        },
        {
          "index": 1,
          "name": "dev:ScaleKWH",
          "originalValue": 0.001,
          "type": 2,
          "value": 0.001
        },
        {
          "index": 2,
          "name": "dev:KWHrecOffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 3,
          "name": "dev:KWHdelOffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 4,
          "name": "ShortName",
          "originalValue": "SW2",
          "type": 0,
          "value": "SW2"
        },
        {
          "index": 5,
          "name": "dev:Info",
          "originalValue": "Format(\"{0:0.0}\", Calc(\"Status\"))",
          "type": 0,
          "value": "Format(\"{0:0.0}\", Calc(\"Status\"))"
        }
      ],
      "sort": 303,
      "ts": "2025-10-14T14:42:58Z",
      "unitId": 0
    },
    {
      "address": "192.168.13.184",
      "description": "SEL 351 Relay (H)",
      "driverId": 7684,
      "driverName": "SEL 351 (DMID 2701)",
      "functionCode": 34,
      "functionId": "SW3",
      "gatewayId": "",
      "gatewayName": "",
      "hardwareKey": "H582343",
      "index": 16,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 11,
          "registerModbusName": "AC Energy",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.001,
          "type": 2,
          "value": 0.001
        },
        {
          "index": 1,
          "name": "dev:ScaleKWH",
          "originalValue": 0.001,
          "type": 2,
          "value": 0.001
        },
        {
          "index": 2,
          "name": "dev:KWHrecOffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 3,
          "name": "dev:KWHdelOffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 4,
          "name": "ShortName",
          "originalValue": "SW3",
          "type": 0,
          "value": "SW3"
        },
        {
          "index": 5,
          "name": "dev:Info",
          "originalValue": "Format(\"{0:0.0}\", Calc(\"Status\"))",
          "type": 0,
          "value": "Format(\"{0:0.0}\", Calc(\"Status\"))"
        }
      ],
      "sort": 304,
      "ts": "2025-10-14T14:43:00Z",
      "unitId": 0
    },
    {
      "address": "192.168.13.185",
      "description": "SEL 351 Relay (BESS)",
      "driverId": 7684,
      "driverName": "SEL 351 (DMID 2701)",
      "functionCode": 34,
      "functionId": "SW4",
      "gatewayId": "",
      "gatewayName": "",
      "hardwareKey": "H582344",
      "index": 17,
      "outOfService": false,
      "port": 0,
      "registerOffsets": [
        {
          "index": 0,
          "name": "KWHoffset",
          "registerAddress": 11,
          "registerModbusName": "AC Energy",
          "value": 0
        }
      ],
      "serialNumber": "",
      "settings": [
        {
          "index": 0,
          "name": "dev:ScaleKW",
          "originalValue": 0.001,
          "type": 2,
          "value": 0.001
        },
        {
          "index": 1,
          "name": "dev:ScaleKWH",
          "originalValue": 0.001,
          "type": 2,
          "value": 0.001
        },
        {
          "index": 2,
          "name": "dev:KWHrecOffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 3,
          "name": "dev:KWHdelOffset",
          "originalValue": 0,
          "type": 2,
          "value": 0
        },
        {
          "index": 4,
          "name": "ShortName",
          "originalValue": "SW4",
          "type": 0,
          "value": "SW4"
        },
        {
          "index": 5,
          "name": "dev:Info",
          "originalValue": "Format(\"{0:0.0}\", Calc(\"Status\"))",
          "type": 0,
          "value": "Format(\"{0:0.0}\", Calc(\"Status\"))"
        }
      ],
      "sort": 305,
      "ts": "2025-10-14T14:43:02Z",
      "unitId": 0
    }
  ],
  "key": "S68624",
  "locusId": "",
  "readOnly": false,
  "syncToLocus": false,
  "taskKeys": [],
  "ts": "2025-11-25T22:26:30Z",
  "updateHardwareErrors": null
}
```

