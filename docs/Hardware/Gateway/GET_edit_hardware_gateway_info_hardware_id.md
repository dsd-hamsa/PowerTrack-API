<a id="top"></a>
# /api/edit/hardware/gateway/info/{hardware_id}

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
GET /api/edit/hardware/gateway/info/H208923
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H208927/administration/config
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
  "capacityKw": 110,
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
  "description": "PowerManager 2200",
  "deviceRegisters": [
    {
      "dataName": "fw",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Firmware version",
      "name": "Firmware version",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "diskAvailable",
      "dataNameDetail": null,
      "index": 1,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Available disk space",
      "name": "Available disk space",
      "standardDataName": "",
      "units": "MB"
    },
    {
      "dataName": "UploadQueue",
      "dataNameDetail": null,
      "index": 2,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Upload queue",
      "name": "Upload queue",
      "standardDataName": "",
      "units": "Files"
    },
    {
      "dataName": "RAMused",
      "dataNameDetail": null,
      "index": 3,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Ram Used",
      "name": "Ram Used",
      "standardDataName": "",
      "units": "MB"
    },
    {
      "dataName": "StartupCount",
      "dataNameDetail": null,
      "index": 4,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Startup Count",
      "name": "Startup Count",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "DeltaStartupSec",
      "dataNameDetail": null,
      "index": 5,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Delta Secs Prev Startup",
      "name": "Delta Secs Prev Startup",
      "standardDataName": "",
      "units": "secs"
    },
    {
      "dataName": "wdog",
      "dataNameDetail": null,
      "index": 6,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Watchdog version",
      "name": "Watchdog version",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "localips",
      "dataNameDetail": null,
      "index": 7,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Local IPs",
      "name": "Local IPs",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "duprate",
      "dataNameDetail": null,
      "index": 8,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Direct Upload Rate",
      "name": "Direct Upload Rate",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "dalertrate",
      "dataNameDetail": null,
      "index": 9,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Direct Alert Rate",
      "name": "Direct Alert Rate",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "huprate",
      "dataNameDetail": null,
      "index": 10,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Historian Upload Rate",
      "name": "Historian Upload Rate",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "halertrate",
      "dataNameDetail": null,
      "index": 11,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Historian Alert Rate",
      "name": "Historian Alert Rate",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "scriptcount",
      "dataNameDetail": null,
      "index": 12,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Number of SSS script on disk",
      "name": "Number of SSS script on disk",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "timerenabled",
      "dataNameDetail": null,
      "index": 13,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Control Timer Enabled",
      "name": "Control Timer Enabled",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "loggerstartUTC",
      "dataNameDetail": null,
      "index": 14,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Logger Startup UTC",
      "name": "Logger Startup UTC",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "servicemode",
      "dataNameDetail": null,
      "index": 15,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Running as Service",
      "name": "Running as Service",
      "standardDataName": "",
      "units": ""
    }
  ],
  "driverDescription": "Super data logger / Site controller",
  "driverFlags": 16385,
  "driverId": 740,
  "driverName": "AlsoEnergy SCADA Site Controller",
  "driverNotes": "",
  "driverRegisters": [],
  "eGauge": null,
  "fixedEnergyOffset": 0,
  "functionCode": 10,
  "functionId": "GW0",
  "gateway": {
    "commandAccessLevel": 1,
    "connectionType": 2,
    "deviceGatewayType": 12,
    "dns1": "",
    "dns2": "",
    "firmware": {
      "client": "",
      "debug": false,
      "enable": true,
      "gatewayId": "SCADARONNUNN",
      "gatewayParams": [],
      "ip1": "",
      "ip2": "",
      "lastBoot": "",
      "lastUpdate": "",
      "server": ""
    },
    "gatewayIp": "192.168.13.1",
    "gatewayType": 0,
    "ipAddress": "192.168.13.151",
    "mask": "255.255.255.0"
  },
  "gatewayFwVersion": "2021.11201.292.0",
  "gatewayId": "SCADARONNUNN",
  "gatewayKey": "H208923",
  "gatewayScriptCount": "0",
  "gatewayType": 12,
  "groupAllowed": [],
  "groupKey": "",
  "hardwareId": "C16293_S51059_GW0",
  "hardwareStatus": 1,
  "hasCapacity": true,
  "hash": "3B321E12043A5385296B8FCD672D7D9BDD6A441D0E9CA659D74D5C9F10FB26C9",
  "increaseDifference": -1,
  "installDate": "2019-07-20",
  "instance": 0,
  "inverterKw": 110,
  "isConflictAcknowledged": false,
  "isReportable": false,
  "isTcp": false,
  "isThermal": false,
  "key": "H208923",
  "kiosk": null,
  "latitude": 37.930243,
  "limitedCommunication": false,
  "locusId": "",
  "longitude": -121.730363,
  "meter": null,
  "modelNum": "",
  "newNote": "",
  "oneMinuteData": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2025-12-31T18:51:12.029389Z",
  "outputAllowed": [],
  "outputKey": "",
  "parentKey": "S51059",
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
  "serialNum": "TAIAE1051065",
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
      "name": "server:salt",
      "originalValue": "R0NN",
      "type": 0,
      "value": "R0NN"
    }
  ],
  "siteDcShare": 0,
  "siteHasInverterGroups": false,
  "sort": 2,
  "syncToLocus": false,
  "tags": {
    "attributes": [],
    "key": "{\"ancestorKey\":\"H208923\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
    "keywords": [],
    "lastChanged": null,
    "notes": [],
    "powerDisplays": []
  },
  "taskKey": "",
  "thermal": null,
  "thread": 0,
  "ts": "2024-11-27T07:27:07Z",
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

