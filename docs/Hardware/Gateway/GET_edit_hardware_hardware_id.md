<a id="top"></a>
# /api/edit/hardware/{hardware_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200, 200  

## Table of Contents

- [Gateway (functionCode: 10)](#gateway-functioncode-10)
- [Example](#example)

## Gateway (functionCode: 10)

```json
{
  "type": "object",
  "properties": {
    "additionalRegisters": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "address": {
      "type": "string"
    },
    "alsoHardwareId": {
      "type": "number"
    },
    "alsoSiteId": {
      "type": "number"
    },
    "array": {
      "type": "object",
      "properties": {}
    },
    "assetId": {
      "type": "string"
    },
    "autoCorrectDecrease": {
      "type": "boolean"
    },
    "autoCorrectIncrease": {
      "type": "boolean"
    },
    "baud": {
      "type": "string"
    },
    "capacityKw": {
      "type": "number"
    },
    "chartSectionCode": {
      "type": "number"
    },
    "commonDC": {
      "type": "boolean"
    },
    "commonDCAllMatch": {
      "type": "boolean"
    },
    "configs": {
      "type": "string"
    },
    "conflictNames": {
      "type": "object",
      "properties": {}
    },
    "dashboardKey": {
      "type": "string"
    },
    "dcRating": {
      "type": "number"
    },
    "debug": {
      "type": "boolean"
    },
    "decreaseDifference": {
      "type": "number"
    },
    "defaultChart": {
      "type": "number"
    },
    "description": {
      "type": "string"
    },
    "deviceRegisters": {
      "type": "object",
      "properties": {
        "dataName": {
          "type": "string"
        },
        "dataNameDetail": {
          "type": "object",
          "properties": {}
        },
        "index": {
          "type": "number"
        },
        "isArchived": {
          "type": "boolean"
        },
        "isIgnored": {
          "type": "boolean"
        },
        "isRaw": {
          "type": "boolean"
        },
        "localizedName": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "standardDataName": {
          "type": "string"
        },
        "units": {
          "type": "string"
        }
      }
    },
    "driverDescription": {
      "type": "string"
    },
    "driverFlags": {
      "type": "number"
    },
    "driverId": {
      "type": "number"
    },
    "driverName": {
      "type": "string"
    },
    "driverNotes": {
      "type": "string"
    },
    "driverRegisters": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "eGauge": {
      "type": "object",
      "properties": {}
    },
    "fixedEnergyOffset": {
      "type": "number"
    },
    "functionCode": {
      "type": "number"
    },
    "functionId": {
      "type": "string"
    },
    "gateway": {
      "type": "object",
      "properties": {
        "commandAccessLevel": {
          "type": "number"
        },
        "connectionType": {
          "type": "number"
        },
        "deviceGatewayType": {
          "type": "number"
        },
        "dns1": {
          "type": "string"
        },
        "dns2": {
          "type": "string"
        },
        "firmware": {
          "type": "object",
          "properties": {
            "client": {
              "type": "string"
            },
            "debug": {
              "type": "boolean"
            },
            "enable": {
              "type": "boolean"
            },
            "gatewayId": {
              "type": "string"
            },
            "gatewayParams": {
              "type": "array",
              "items": {
                "type": "unknown"
              }
            },
            "ip1": {
              "type": "string"
            },
            "ip2": {
              "type": "string"
            },
            "lastBoot": {
              "type": "string"
            },
            "lastUpdate": {
              "type": "string"
            },
            "server": {
              "type": "string"
            }
          }
        },
        "gatewayIp": {
          "type": "string"
        },
        "gatewayType": {
          "type": "number"
        },
        "ipAddress": {
          "type": "string"
        },
        "mask": {
          "type": "string"
        }
      }
    },
    "gatewayFwVersion": {
      "type": "string"
    },
    "gatewayId": {
      "type": "string"
    },
    "gatewayKey": {
      "type": "string"
    },
    "gatewayScriptCount": {
      "type": "string"
    },
    "gatewayType": {
      "type": "number"
    },
    "groupAllowed": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "groupKey": {
      "type": "string"
    },
    "hardwareId": {
      "type": "string"
    },
    "hardwareStatus": {
      "type": "number"
    },
    "hasCapacity": {
      "type": "boolean"
    },
    "hash": {
      "type": "string"
    },
    "increaseDifference": {
      "type": "number"
    },
    "installDate": {
      "type": "string"
    },
    "instance": {
      "type": "number"
    },
    "inverterKw": {
      "type": "number"
    },
    "isConflictAcknowledged": {
      "type": "boolean"
    },
    "isReportable": {
      "type": "boolean"
    },
    "isTcp": {
      "type": "boolean"
    },
    "isThermal": {
      "type": "boolean"
    },
    "key": {
      "type": "string"
    },
    "kiosk": {
      "type": "object",
      "properties": {}
    },
    "latitude": {
      "type": "number"
    },
    "limitedCommunication": {
      "type": "boolean"
    },
    "locusId": {
      "type": "string"
    },
    "longitude": {
      "type": "number"
    },
    "meter": {
      "type": "object",
      "properties": {}
    },
    "modelNum": {
      "type": "string"
    },
    "newNote": {
      "type": "string"
    },
    "oneMinuteData": {
      "type": "boolean"
    },
    "outOfService": {
      "type": "boolean"
    },
    "outOfServiceNote": {
      "type": "string"
    },
    "outOfServiceUntil": {
      "type": "string"
    },
    "outputAllowed": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "outputKey": {
      "type": "string"
    },
    "parentKey": {
      "type": "string"
    },
    "port": {
      "type": "number"
    },
    "primary": {
      "type": "boolean"
    },
    "pullData": {
      "type": "boolean"
    },
    "pvConfig": {
      "type": "object",
      "properties": {}
    },
    "readOnly": {
      "type": "boolean"
    },
    "registerOffsets": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "reportExclude": {
      "type": "boolean"
    },
    "reverse": {
      "type": "boolean"
    },
    "sampleRate": {
      "type": "number"
    },
    "serialMode": {
      "type": "number"
    },
    "serialNum": {
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
    "siteDcShare": {
      "type": "number"
    },
    "siteHasInverterGroups": {
      "type": "boolean"
    },
    "sort": {
      "type": "number"
    },
    "syncToLocus": {
      "type": "boolean"
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
    },
    "taskKey": {
      "type": "string"
    },
    "thermal": {
      "type": "object",
      "properties": {}
    },
    "thread": {
      "type": "number"
    },
    "ts": {
      "type": "string"
    },
    "turbine": {
      "type": "object",
      "properties": {}
    },
    "unitId": {
      "type": "number"
    },
    "uploadRate": {
      "type": "number"
    },
    "validatedByKey": {
      "type": "string"
    },
    "validatedDateTime": {
      "type": "string"
    },
    "virtualRegisters": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "virtualWeather": {
      "type": "object",
      "properties": {}
    },
    "weather": {
      "type": "object",
      "properties": {}
    },
    "weatherStationKey1": {
      "type": "string"
    },
    "weatherStationKey2": {
      "type": "string"
    },
    "zone": {
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
GET /api/edit/hardware/H511564
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H511564/administration/config
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
  "capacityKw": 62.5,
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
  "decreaseDifference": 100,
  "defaultChart": 0,
  "description": "PowerLogger 1000",
  "deviceRegisters": [
    {
      "dataName": "fw",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Firmware Build",
      "name": "Firmware Build",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "localip",
      "dataNameDetail": null,
      "index": 1,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "LAN IPv4 Address",
      "name": "LAN IPv4 Address",
      "standardDataName": "",
      "units": ""
    }
  ],
  "driverDescription": "Interactive Data Logger",
  "driverFlags": 18497,
  "driverId": 325,
  "driverName": "PowerLogger 1000",
  "driverNotes": "",
  "driverRegisters": [],
  "eGauge": null,
  "fixedEnergyOffset": 0,
  "functionCode": 10,
  "functionId": "GW0",
  "gateway": {
    "commandAccessLevel": 1,
    "connectionType": 2,
    "deviceGatewayType": 7,
    "dns1": "8.8.8.8",
    "dns2": "8.8.4.4",
    "firmware": {
      "client": "maki.exe;1.16.3.6|protobuf-net.dll;2.0.0.668\rModel:, Version:, Build:, ExtIP:172.24.96.118\rModel:, Version:, Build:, ExtIP:172.24.96.118",
      "debug": false,
      "enable": true,
      "gatewayId": "000CC68FAF30",
      "gatewayParams": [],
      "ip1": "192.168.13.151",
      "ip2": "",
      "lastBoot": "528 d 10:01 (h:m)",
      "lastUpdate": "528 d 5:18 (h:m)",
      "server": "maki.exe;1.16.3.6|protobuf-net.dll;2.0.0.668"
    },
    "gatewayIp": "192.168.13.1",
    "gatewayType": 0,
    "ipAddress": "192.168.13.151",
    "mask": "255.255.255.0"
  },
  "gatewayFwVersion": "",
  "gatewayId": "000CC68FAF30",
  "gatewayKey": "H511564",
  "gatewayScriptCount": "",
  "gatewayType": 7,
  "groupAllowed": [],
  "groupKey": "",
  "hardwareId": "C20909_S68143_GW0",
  "hardwareStatus": 1,
  "hasCapacity": true,
  "hash": "",
  "increaseDifference": -1,
  "installDate": "2024-07-12",
  "instance": 0,
  "inverterKw": 1050,
  "isConflictAcknowledged": false,
  "isReportable": false,
  "isTcp": false,
  "isThermal": false,
  "key": "H511564",
  "kiosk": null,
  "latitude": 34.0371297,
  "limitedCommunication": false,
  "locusId": "",
  "longitude": -118.1014776,
  "meter": null,
  "modelNum": "ALSOENERGY POWERLOGGER 1000",
  "newNote": "",
  "oneMinuteData": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2025-12-23T00:10:22.7746295Z",
  "outputAllowed": [],
  "outputKey": "",
  "parentKey": "S68143",
  "port": 0,
  "primary": false,
  "pullData": false,
  "pvConfig": null,
  "readOnly": false,
  "registerOffsets": [],
  "reportExclude": false,
  "reverse": false,
  "sampleRate": 0,
  "serialMode": 0,
  "serialNum": "",
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
  "siteDcShare": 0,
  "siteHasInverterGroups": true,
  "sort": 2,
  "syncToLocus": false,
  "tags": {
    "attributes": [],
    "key": "{\"ancestorKey\":\"H511564\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
    "keywords": [],
    "lastChanged": null,
    "notes": [],
    "powerDisplays": []
  },
  "taskKey": "",
  "thermal": null,
  "thread": 0,
  "ts": "2024-07-15T13:27:46Z",
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

[Return to top](#top)

