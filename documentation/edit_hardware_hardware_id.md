# Endpoint 9

[← Back to Index](../README.md)


### `/api/edit/hardware/{hardware_id}`

**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 8  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "outOfService": {
      "type": "boolean"
    },
    "tags": {
      "type": "object",
      "properties": {
        "powerDisplays": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        },
        "lastChanged": {
          "type": "unknown"
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
        "attributes": {
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
        }
      }
    },
    "hasCapacity": {
      "type": "boolean"
    },
    "modelNum": {
      "type": "string"
    },
    "port": {
      "type": "integer"
    },
    "installDate": {
      "type": "string"
    },
    "hardwareId": {
      "type": "string"
    },
    "longitude": {
      "type": "number"
    },
    "increaseDifference": {
      "type": "integer"
    },
    "syncToLocus": {
      "type": "boolean"
    },
    "thermal": {
      "type": "unknown"
    },
    "virtualWeather": {
      "type": "unknown"
    },
    "deviceRegisters": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {}
      }
    },
    "instance": {
      "type": "integer"
    },
    "primary": {
      "type": "boolean"
    },
    "sort": {
      "type": "integer"
    },
    "commonDC": {
      "type": "boolean"
    },
    "array": {
      "type": "unknown"
    },
    "commonDCAllMatch": {
      "type": "boolean"
    },
    "pullData": {
      "type": "boolean"
    },
    "meter": {
      "type": "unknown"
    },
    "gateway": {
      "type": "unknown"
    },
    "reverse": {
      "type": "boolean"
    },
    "sampleRate": {
      "type": "integer"
    },
    "gatewayFwVersion": {
      "type": "string"
    },
    "siteDcShare": {
      "type": "integer"
    },
    "latitude": {
      "type": "number"
    },
    "gatewayKey": {
      "type": "string"
    },
    "weather": {
      "type": "unknown"
    },
    "weatherStationKey2": {
      "type": "string"
    },
    "assetId": {
      "type": "string"
    },
    "gatewayType": {
      "type": "integer"
    },
    "virtualRegisters": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "validatedByKey": {
      "type": "string"
    },
    "turbine": {
      "type": "unknown"
    },
    "conflictNames": {
      "type": "unknown"
    },
    "debug": {
      "type": "boolean"
    },
    "description": {
      "type": "string"
    },
    "groupAllowed": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "chartSectionCode": {
      "type": "integer"
    },
    "isThermal": {
      "type": "boolean"
    },
    "functionCode": {
      "type": "integer"
    },
    "serialNum": {
      "type": "string"
    },
    "taskKey": {
      "type": "string"
    },
    "ts": {
      "type": "string"
    },
    "groupKey": {
      "type": "string"
    },
    "hardwareStatus": {
      "type": "integer"
    },
    "configs": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "driverFlags": {
      "type": "integer"
    },
    "thread": {
      "type": "integer"
    },
    "locusId": {
      "type": "string"
    },
    "outOfServiceNote": {
      "type": "string"
    },
    "oneMinuteData": {
      "type": "boolean"
    },
    "kiosk": {
      "type": "unknown"
    },
    "inverterKw": {
      "type": "integer"
    },
    "defaultChart": {
      "type": "integer"
    },
    "dashboardKey": {
      "type": "string"
    },
    "isTcp": {
      "type": "boolean"
    },
    "limitedCommunication": {
      "type": "boolean"
    },
    "siteHasInverterGroups": {
      "type": "boolean"
    },
    "driverDescription": {
      "type": "string"
    },
    "pvConfig": {
      "type": "unknown"
    },
    "autoCorrectIncrease": {
      "type": "boolean"
    },
    "newNote": {
      "type": "string"
    },
    "zone": {
      "type": "unknown"
    },
    "baud": {
      "type": "string"
    },
    "outOfServiceUntil": {
      "type": "string"
    },
    "hash": {
      "type": "string"
    },
    "driverRegisters": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "isConflictAcknowledged": {
      "type": "boolean"
    },
    "capacityKw": {
      "type": "integer"
    },
    "serialMode": {
      "type": "integer"
    },
    "eGauge": {
      "type": "unknown"
    },
    "autoCorrectDecrease": {
      "type": "boolean"
    },
    "additionalRegisters": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "alsoSiteId": {
      "type": "integer"
    },
    "key": {
      "type": "string"
    },
    "outputKey": {
      "type": "string"
    },
    "address": {
      "type": "string"
    },
    "gatewayScriptCount": {
      "type": "string"
    },
    "dcRating": {
      "type": "integer"
    },
    "registerOffsets": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "functionId": {
      "type": "string"
    },
    "readOnly": {
      "type": "boolean"
    },
    "parentKey": {
      "type": "string"
    },
    "driverId": {
      "type": "integer"
    },
    "outputAllowed": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "isReportable": {
      "type": "boolean"
    },
    "unitId": {
      "type": "integer"
    },
    "driverName": {
      "type": "string"
    },
    "decreaseDifference": {
      "type": "integer"
    },
    "uploadRate": {
      "type": "integer"
    },
    "reportExclude": {
      "type": "boolean"
    },
    "settings": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {}
      }
    },
    "fixedEnergyOffset": {
      "type": "integer"
    },
    "validatedDateTime": {
      "type": "string"
    },
    "gatewayId": {
      "type": "string"
    },
    "driverNotes": {
      "type": "string"
    },
    "alsoHardwareId": {
      "type": "integer"
    },
    "weatherStationKey1": {
      "type": "string"
    }
  }
}
```

#### Example

**Request:**

```http
GET /api/edit/hardware/H70611
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "additionalRegisters": [],
  "address": "0",
  "alsoHardwareId": 0,
  "alsoSiteId": 0,
  "array": null,
  "assetId": "",
  "autoCorrectDecrease": false,
  "autoCorrectIncrease": false,
  "baud": "",
  "capacityKw": 909,
  "chartSectionCode": 0,
  "commonDC": false,
  "commonDCAllMatch": true,
  "configs": [
    "Gateway"
  ],
  "conflictNames": null,
  "dashboardKey": "",
  "dcRating": 0,
  "debug": false,
  "decreaseDifference": -1,
  "defaultChart": 0,
  "description": "Data Logger #1",
  "deviceRegisters": [
    {
      "dataName": "fw",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Version",
      "name": "Version",
      "standardDataName": "",
      "units": ""
    }
  ],
  "driverDescription": "Moxa Data Logger Gateway",
  "driverFlags": 1,
  "driverId": 201,
  "driverName": "Moxa Gateway",
  "driverNotes": "Time format is yyyyMMddTHHmmss",
  "driverRegisters": [],
  "eGauge": null,
  "fixedEnergyOffset": 0,
  "functionCode": 10,
  "functionId": "GW0",
  "gateway": {
    "commandAccessLevel": 1,
    "connectionType": 0,
    "deviceGatewayType": 2,
    "dns1": "",
    "dns2": "",
    "firmware": {
      "client": "bootstrap.exe;1.2.0.0|bustest.exe;1.2.0.5|moxabroker.exe;2.0.1.9|watchdog.exe;1.4.0.2|mxdevice.dll;1.0.3054.34117\rModel:, Version:, Build:, ExtIP:172.24.96.118\rModel:, Version:, Build:, ExtIP:172.24.96.118",
      "debug": true,
      "enable": true,
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
      "ip1": "192.168.13.101",
      "ip2": "0.0.0.0",
      "lastBoot": "23:34 (h:m)",
      "lastUpdate": "27 seconds",
      "server": "bootstrap.exe;1.2.0.0|moxabroker.exe;2.0.1.9|watchdog.exe;1.4.0.2|mxdevice.dll;1.0.3054.34117|BusTest.exe;1.2.0.5"
    },
    "gatewayIp": "",
    "gatewayType": 0,
    "ipAddress": "",
    "mask": ""
  },
  "gatewayFwVersion": "",
  "gatewayId": "0090E855C584",
  "gatewayKey": "H70611",
  "gatewayScriptCount": "",
  "gatewayType": 2,
  "groupAllowed": [],
  "groupKey": "",
  "hardwareId": "C10373_S38292_GW0",
  "hardwareStatus": 1,
  "hasCapacity": true,
  "hash": "",
  "increaseDifference": -1,
  "installDate": "2016-08-07",
  "instance": 0,
  "inverterKw": 909,
  "isConflictAcknowledged": false,
  "isReportable": false,
  "isTcp": false,
  "isThermal": false,
  "key": "H70611",
  "kiosk": null,
  "latitude": 42.137941,
  "limitedCommunication": false,
  "locusId": "",
  "longitude": -72.5508695,
  "meter": null,
  "modelNum": "",
  "newNote": "",
  "oneMinuteData": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2025-12-19T20:14:03.8315607Z",
  "outputAllowed": [],
  "outputKey": "",
  "parentKey": "S38292",
  "port": 0,
  "primary": false,
  "pullData": false,
  "pvConfig": null,
  "readOnly": false,
  "registerOffsets": [],
  "reportExclude": false,
  "reverse": false,
  "sampleRate": 0,
  "serialMode": -1,
  "serialNum": "",
  "settings": [
    {
      "index": 0,
      "name": "dev:rate",
      "originalValue": "60",
      "type": 0,
      "value": "60"
    }
  ],
  "siteDcShare": 0,
  "siteHasInverterGroups": false,
  "sort": 3,
  "syncToLocus": false,
  "tags": {
    "attributes": [],
    "key": "{\"ancestorKey\":\"H70611\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
    "keywords": [],
    "lastChanged": null,
    "notes": [],
    "powerDisplays": []
  },
  "taskKey": "",
  "thermal": null,
  "thread": 0,
  "ts": "2023-02-13T21:27:56Z",
  "turbine": null,
  "unitId": 0,
  "uploadRate": 0,
  "validatedByKey": "",
  "validatedDateTime": "0001-01-01T00:00:00",
  "virtualRegisters": [],
  "virtualWeather": null,
  "weather": null,
  "weatherStationKey1": "",
  "weatherStationKey2": "",
  "zone": null
}
```

