<a id="top"></a>
# /api/edit/hardware

[← Back to Index](../logs.md)

**Methods:** PUT  
**Status Codes:** 200, 200  

## Table of Contents

- [Payload Structure](#payload-structure)
- [Production Meter (functionCode: 2)](#production-meter-functioncode-2)
- [Example](#example)

## Payload Structure

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
      "type": "object",
      "properties": {
        "dataName": {
          "type": "string"
        },
        "dataNameDetail": {
          "type": "object",
          "properties": {
            "dataName": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "details": {
              "type": "object",
              "properties": {
                "aCmeter": {
                  "type": "boolean"
                },
                "adminHide": {
                  "type": "boolean"
                },
                "allowArchiveRaw": {
                  "type": "boolean"
                },
                "condense": {
                  "type": "number"
                },
                "dCmeter": {
                  "type": "boolean"
                },
                "doublePrecision": {
                  "type": "boolean"
                },
                "equivalent": {
                  "type": "number"
                },
                "excludedChannels": {
                  "type": "string"
                },
                "functionCodes": {
                  "type": "array",
                  "items": {
                    "type": "unknown"
                  }
                },
                "functions": {
                  "type": "string"
                },
                "isFloat": {
                  "type": "boolean"
                },
                "isStandardDataName": {
                  "type": "boolean"
                },
                "isStatus": {
                  "type": "boolean"
                },
                "otherAliasPTDataNameValues": {
                  "type": "string"
                },
                "otherAliasPTDataNames": {
                  "type": "number"
                },
                "typeId": {
                  "type": "string"
                },
                "units": {
                  "type": "number"
                }
              }
            },
            "equivalent": {
              "type": "number"
            },
            "errors": {
              "type": "array",
              "items": {
                "type": "unknown"
              }
            },
            "functionCodes": {
              "type": "array",
              "items": {
                "type": "unknown"
              }
            },
            "goldenDriverDataNames": {
              "type": "object",
              "properties": {}
            },
            "isAllowedForRegisterSetsArray": {
              "type": "boolean"
            },
            "isStandardDataName": {
              "type": "boolean"
            },
            "otherAliasPTDataNames": {
              "type": "number"
            },
            "registerDataNameIdentifier": {
              "type": "number"
            },
            "registerName": {
              "type": "string"
            },
            "registerSetsArrayDisplayedName": {
              "type": "string"
            },
            "standardDataNameArchiveRawAndIntervalData": {
              "type": "boolean"
            }
          }
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
      "properties": {}
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
      "properties": {
        "acInfo": {
          "type": "number"
        },
        "grossEnergy": {
          "type": "number"
        },
        "grossEnergyOptions": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "value": {
              "type": "number"
            }
          }
        },
        "kw": {
          "type": "number"
        },
        "kwhDelivered": {
          "type": "number"
        },
        "kwhNet": {
          "type": "number"
        },
        "kwhReceived": {
          "type": "number"
        },
        "lineResistance": {
          "type": "number"
        },
        "load": {
          "type": "number"
        },
        "loadLoss": {
          "type": "number"
        },
        "maxCurrent": {
          "type": "number"
        },
        "maxPower": {
          "type": "number"
        },
        "maxVoltage": {
          "type": "number"
        },
        "noLoadLoss": {
          "type": "number"
        },
        "scale": {
          "type": "number"
        },
        "scaleKw": {
          "type": "number"
        },
        "scaleKwh": {
          "type": "number"
        },
        "showLoad": {
          "type": "boolean"
        }
      }
    },
    "modelNum": {
      "type": "string"
    },
    "newNote": {
      "type": "object",
      "properties": {}
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
      "type": "object",
      "properties": {
        "index": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "registerAddress": {
          "type": "number"
        },
        "registerModbusName": {
          "type": "string"
        },
        "value": {
          "type": "number"
        }
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
          "type": "object",
          "properties": {
            "authorKey": {
              "type": "string"
            },
            "authorName": {
              "type": "string"
            },
            "date": {
              "type": "string"
            },
            "isEvent": {
              "type": "boolean"
            },
            "key": {
              "type": "string"
            },
            "kind": {
              "type": "string"
            },
            "parentKey": {
              "type": "string"
            },
            "text": {
              "type": "string"
            }
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

## Production Meter (functionCode: 2)

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
      "properties": {}
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
      "properties": {
        "acInfo": {
          "type": "number"
        },
        "grossEnergy": {
          "type": "number"
        },
        "grossEnergyOptions": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "value": {
              "type": "number"
            }
          }
        },
        "kw": {
          "type": "number"
        },
        "kwhDelivered": {
          "type": "number"
        },
        "kwhNet": {
          "type": "number"
        },
        "kwhReceived": {
          "type": "number"
        },
        "lineResistance": {
          "type": "number"
        },
        "load": {
          "type": "number"
        },
        "loadLoss": {
          "type": "number"
        },
        "maxCurrent": {
          "type": "number"
        },
        "maxPower": {
          "type": "number"
        },
        "maxVoltage": {
          "type": "number"
        },
        "noLoadLoss": {
          "type": "number"
        },
        "scale": {
          "type": "number"
        },
        "scaleKw": {
          "type": "number"
        },
        "scaleKwh": {
          "type": "number"
        },
        "showLoad": {
          "type": "boolean"
        }
      }
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
          "type": "object",
          "properties": {
            "authorKey": {
              "type": "string"
            },
            "authorName": {
              "type": "string"
            },
            "date": {
              "type": "string"
            },
            "isEvent": {
              "type": "boolean"
            },
            "key": {
              "type": "string"
            },
            "kind": {
              "type": "string"
            },
            "parentKey": {
              "type": "string"
            },
            "text": {
              "type": "string"
            }
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
PUT /api/edit/hardware
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H511566/administration/config
```

**Payload:**

```json
{
  "additionalRegisters": [],
  "address": "192.168.13.42",
  "alsoHardwareId": 0,
  "alsoSiteId": 0,
  "array": null,
  "assetId": "",
  "autoCorrectDecrease": false,
  "autoCorrectIncrease": false,
  "baud": "",
  "capacityKw": 524.88,
  "chartSectionCode": 2,
  "commonDC": false,
  "commonDCAllMatch": true,
  "configs": [
    "Meter"
  ],
  "conflictNames": null,
  "dashboardKey": "",
  "dcRating": 524880,
  "debug": false,
  "decreaseDifference": 100,
  "defaultChart": 15,
  "description": "Accuvim II - SITE??  Meter - M1",
  "deviceRegisters": [
    {
      "dataName": "Hz",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Frequency",
      "name": "iFreq",
      "standardDataName": "Frequency",
      "units": "Hz"
    },
    {
      "dataName": "PowerFactor",
      "dataNameDetail": null,
      "index": 1,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Power Factor",
      "name": "Power factor",
      "standardDataName": "Power_Factor",
      "units": "PF"
    },
    {
      "dataName": "KWHrec",
      "dataNameDetail": null,
      "index": 2,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Received (with Offset)",
      "name": "Import energy",
      "standardDataName": "Active_Energy_Rec",
      "units": "kWh"
    },
    {
      "dataName": "KWHdel",
      "dataNameDetail": null,
      "index": 3,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Delivered (with Offset)",
      "name": "Export energy",
      "standardDataName": "Active_Energy_Del",
      "units": "kWh"
    },
    {
      "dataName": "Reactive_Energy_Rec",
      "dataNameDetail": null,
      "index": 4,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Energy Received",
      "name": "Reactive Import energy",
      "standardDataName": "Reactive_Energy_Rec",
      "units": "kVARh"
    },
    {
      "dataName": "Reactive_Energy_Del",
      "dataNameDetail": null,
      "index": 5,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Energy Delivered",
      "name": "Reactive Export energy",
      "standardDataName": "Reactive_Energy_Del",
      "units": "kVARh"
    },
    {
      "dataName": "KWHnet",
      "dataNameDetail": null,
      "index": 6,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Net",
      "name": "Total energy net",
      "standardDataName": "Active_Energy_Net",
      "units": "kWh"
    },
    {
      "dataName": "Reactive_Energy_Net",
      "dataNameDetail": null,
      "index": 7,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Energy Net",
      "name": "Reactive Total energy net",
      "standardDataName": "Reactive_Energy_Net",
      "units": "kVARh"
    },
    {
      "dataName": "KVAh",
      "dataNameDetail": null,
      "index": 8,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Apparent Energy Net",
      "name": "Apparent Energy",
      "standardDataName": "Apparent_Energy_Net",
      "units": "kVAh"
    },
    {
      "dataName": "KVAR",
      "dataNameDetail": null,
      "index": 9,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power",
      "name": "Reactive Power",
      "standardDataName": "Reactive_Power",
      "units": "kVAR"
    },
    {
      "dataName": "VacA",
      "dataNameDetail": null,
      "index": 10,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage A (Line-Neutral)",
      "name": "Volts A-N",
      "standardDataName": "Voltage_AN",
      "units": "V"
    },
    {
      "dataName": "VacB",
      "dataNameDetail": null,
      "index": 11,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage B (Line-Neutral)",
      "name": "Volts B-N",
      "standardDataName": "Voltage_BN",
      "units": "V"
    },
    {
      "dataName": "VacC",
      "dataNameDetail": null,
      "index": 12,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage C (Line-Neutral)",
      "name": "Volts C-N",
      "standardDataName": "Voltage_CN",
      "units": "V"
    },
    {
      "dataName": "VacLN",
      "dataNameDetail": null,
      "index": 13,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage Average L-N",
      "name": "Average voltage L-N",
      "standardDataName": "Voltage_LN_Avg",
      "units": "V"
    },
    {
      "dataName": "VacAB",
      "dataNameDetail": null,
      "index": 14,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage A-B (Line-Line)",
      "name": "Volts A-B",
      "standardDataName": "Voltage_AB",
      "units": "V"
    },
    {
      "dataName": "VacBC",
      "dataNameDetail": null,
      "index": 15,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage B-C (Line-Line)",
      "name": "Volts B-C",
      "standardDataName": "Voltage_BC",
      "units": "V"
    },
    {
      "dataName": "VacCA",
      "dataNameDetail": null,
      "index": 16,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage C-A (Line-Line)",
      "name": "Volts C-A",
      "standardDataName": "Voltage_CA",
      "units": "V"
    },
    {
      "dataName": "VacLL",
      "dataNameDetail": null,
      "index": 17,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Line to Line voltage",
      "name": "Average voltage L-L",
      "standardDataName": "Voltage_LL_Avg",
      "units": "V"
    },
    {
      "dataName": "IacA",
      "dataNameDetail": null,
      "index": 18,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current A",
      "name": "Amps A",
      "standardDataName": "Current_A",
      "units": "A"
    },
    {
      "dataName": "IacB",
      "dataNameDetail": null,
      "index": 19,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current B",
      "name": "Amps B",
      "standardDataName": "Current_B",
      "units": "A"
    },
    {
      "dataName": "IacC",
      "dataNameDetail": null,
      "index": 20,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current C",
      "name": "Amps C",
      "standardDataName": "Current_C",
      "units": "A"
    },
    {
      "dataName": "Active_Power_A",
      "dataNameDetail": null,
      "index": 21,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power A",
      "name": "Power A",
      "standardDataName": "Active_Power_A",
      "units": "kW"
    },
    {
      "dataName": "Active_Power_B",
      "dataNameDetail": null,
      "index": 22,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power B",
      "name": "Power B",
      "standardDataName": "Active_Power_B",
      "units": "kW"
    },
    {
      "dataName": "Active_Power_C",
      "dataNameDetail": null,
      "index": 23,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power C",
      "name": "Power C",
      "standardDataName": "Active_Power_C",
      "units": "kW"
    },
    {
      "dataName": "KW",
      "dataNameDetail": null,
      "index": 24,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power",
      "name": "Total Power",
      "standardDataName": "Active_Power",
      "units": "kW"
    },
    {
      "dataName": "PFA",
      "dataNameDetail": null,
      "index": 25,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Power Factor A",
      "name": "Power factor A",
      "standardDataName": "Power_Factor_A",
      "units": "PF"
    },
    {
      "dataName": "PFB",
      "dataNameDetail": null,
      "index": 26,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Power Factor B",
      "name": "Power factor B",
      "standardDataName": "Power_Factor_B",
      "units": "PF"
    },
    {
      "dataName": "PFC",
      "dataNameDetail": null,
      "index": 27,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Power Factor C",
      "name": "Power factor C",
      "standardDataName": "Power_Factor_C",
      "units": "PF"
    },
    {
      "dataName": "kVARA",
      "dataNameDetail": null,
      "index": 28,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power A",
      "name": "Phase A Reactive Power ",
      "standardDataName": "Reactive_Power_A",
      "units": "kVAR"
    },
    {
      "dataName": "kVARB",
      "dataNameDetail": null,
      "index": 29,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power B",
      "name": "Phase B Reactive Power",
      "standardDataName": "Reactive_Power_B",
      "units": "kVAR"
    },
    {
      "dataName": "kVARC",
      "dataNameDetail": null,
      "index": 30,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power C",
      "name": "Phase C Reactive Power ",
      "standardDataName": "Reactive_Power_C",
      "units": "kVAR"
    },
    {
      "dataName": "KWHdelRaw",
      "dataNameDetail": null,
      "index": 31,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Delivered (without Offset)",
      "name": "Active Energy Delivered Raw",
      "standardDataName": "Active_Energy_Raw_Del",
      "units": "kWh"
    },
    {
      "dataName": "KWHrecRaw",
      "dataNameDetail": null,
      "index": 32,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Received (without Offset)",
      "name": "Active Energy Received Raw",
      "standardDataName": "Active_Energy_Raw_Rec",
      "units": "kWh"
    },
    {
      "dataName": "KWHnetRaw",
      "dataNameDetail": null,
      "index": 33,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Net Raw",
      "name": "Active Energy Net Raw",
      "standardDataName": "Active_Energy_Raw_Net",
      "units": "kWh"
    },
    {
      "dataName": "THD_Current",
      "dataNameDetail": null,
      "index": 34,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Phase Total Harmonic Current Distortion",
      "name": "Phase Total Harmonic Current Distortion",
      "standardDataName": "THD_Current",
      "units": "A"
    },
    {
      "dataName": "THD_Voltage",
      "dataNameDetail": null,
      "index": 35,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Phase Total Harmonic Voltage Distortion",
      "name": "Phase Total Harmonic Voltage Distortion",
      "standardDataName": "THD_Voltage",
      "units": "V"
    },
    {
      "dataName": "Potential_XMFR_Primary",
      "dataNameDetail": null,
      "index": 36,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Potential Transformer Primary Ratio",
      "name": "PT Ratio (primary)",
      "standardDataName": "Potential_XMFR_Primary",
      "units": ""
    },
    {
      "dataName": "Potential_XMFR_Secondary",
      "dataNameDetail": null,
      "index": 37,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Potential Transformer Secondary Ratio",
      "name": "PT Ratio (secondary)",
      "standardDataName": "Potential_XMFR_Secondary",
      "units": ""
    },
    {
      "dataName": "Current_XMFR_Primary",
      "dataNameDetail": null,
      "index": 38,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Current Transformer Primary Ratio",
      "name": "CT Ratio (primary)",
      "standardDataName": "Current_XMFR_Primary",
      "units": ""
    },
    {
      "dataName": "Current_XMFR_Secondary",
      "dataNameDetail": null,
      "index": 39,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Current Transformer Secondary Ratio",
      "name": "CT Ratio (secondary)",
      "standardDataName": "Current_XMFR_Secondary",
      "units": ""
    }
  ],
  "driverDescription": "Meters USA Acuvim II Power meter - Primary Mode",
  "driverFlags": 16385,
  "driverId": 19601,
  "driverName": "AccuEnergy Acuvim II(R-D-5A) Primary Mode(SS)Standard",
  "driverNotes": "Driver conforms to Standard IO, supercedes all Acuvim Primary Mode Drivers. If Acuvim is in Secondary mode, please use DID 19604.\r\rBustest kW:\rreg=16418 numreg=2\rRogowski Coil Meters: Apply ScaleKW value of 100.\r\r*If Basic Parameter Mode =1 & Energy Display Mode = 0 this means Primary Mode is selected.  ScaleKW = 0.001 |ScaleKWH = 0.1 | ScaleAmps = 1.0 | ScaleVolts = 1.0\r*If vice versa, Secondary Mode is enabled, use DID 19604\r\rConfirmed to work with versions below:\rMeter Firmware - v4.10\rModule Firmware Version - v1.19",
  "driverRegisters": [
    {
      "dataName": "Hz",
      "dataNameDetail": {
        "dataName": "Hz",
        "description": "Frequency (Equivalent: Hz)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 220,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "Freq",
          "otherAliasPTDataNames": [
            221
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 43
        },
        "equivalent": 220,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          221
        ],
        "registerDataNameIdentifier": 219,
        "registerName": "Frequency",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "iFreq",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "PowerFactor",
      "dataNameDetail": {
        "dataName": "PowerFactor",
        "description": "Power Factor (Equivalent: PowerFactor)",
        "details": {
          "aCmeter": true,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 10,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [
            2,
            4,
            3,
            20,
            16,
            1,
            39,
            45,
            47,
            25,
            42
          ],
          "functions": "PM,GM,CM,XM,SM,PV,BI,BG,PP,BS,BB",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "Power_Factor",
          "otherAliasPTDataNames": [
            284
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 39
        },
        "equivalent": 12,
        "errors": [],
        "functionCodes": [
          2,
          4,
          3,
          20,
          16,
          1,
          39,
          45,
          47,
          25,
          42
        ],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          284
        ],
        "registerDataNameIdentifier": 12,
        "registerName": "Power Factor",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Power factor",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "KWHrec",
      "dataNameDetail": {
        "dataName": "KWHrec",
        "description": "Active Energy Received (Equivalent: KWHrec)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 16,
          "dCmeter": false,
          "doublePrecision": true,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "Active_Energy_Rec",
          "otherAliasPTDataNames": [
            226
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 11
        },
        "equivalent": 8,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          226
        ],
        "registerDataNameIdentifier": 8,
        "registerName": "Active Energy Received",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Import energy",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "KWHdel",
      "dataNameDetail": {
        "dataName": "KWHdel",
        "description": "Active Energy Delivered (Equivalent: KWHdel)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 16,
          "dCmeter": false,
          "doublePrecision": true,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "Active_Energy_Del",
          "otherAliasPTDataNames": [
            224
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 11
        },
        "equivalent": 9,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          224
        ],
        "registerDataNameIdentifier": 9,
        "registerName": "Active Energy Delivered",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Export energy",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Reactive_Energy_Rec",
      "dataNameDetail": {
        "dataName": "Reactive_Energy_Rec",
        "description": "Reactive Energy Received (Equivalent: Reactive_Energy_Rec)",
        "details": {
          "aCmeter": true,
          "adminHide": true,
          "allowArchiveRaw": false,
          "condense": 16,
          "dCmeter": false,
          "doublePrecision": true,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [
            2,
            4,
            3,
            20,
            16,
            1,
            39,
            45
          ],
          "functions": "PM,GM,CM,XM,SM,PV,BI,BG",
          "isFloat": true,
          "isStandardDataName": true,
          "isStatus": false,
          "otherAliasPTDataNameValues": "kvarhrec,Energy_Reactive_Rec,VARhrec,TotVARhImp,QH3rec",
          "otherAliasPTDataNames": [
            301,
            299,
            303,
            304,
            298
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 27
        },
        "equivalent": 297,
        "errors": [],
        "functionCodes": [
          2,
          4,
          3,
          20,
          16,
          1,
          39,
          45
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 297,
            "dataNameAndType": "Reactive_Energy_Rec (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          },
          {
            "dataName": 301,
            "dataNameAndType": "kvarhrec (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 2
          },
          {
            "dataName": 299,
            "dataNameAndType": "Energy_Reactive_Rec (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 3
          },
          {
            "dataName": 303,
            "dataNameAndType": "VARhrec (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 4
          },
          {
            "dataName": 304,
            "dataNameAndType": "TotVARhImp (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 5
          },
          {
            "dataName": 298,
            "dataNameAndType": "QH3rec (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 6
          }
        ],
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [
          301,
          299,
          303,
          304,
          298
        ],
        "registerDataNameIdentifier": 297,
        "registerName": "Reactive Energy Received",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": true
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Reactive Import energy",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Reactive_Energy_Del",
      "dataNameDetail": {
        "dataName": "Reactive_Energy_Del",
        "description": "Reactive Energy Delivered (Equivalent: Reactive_Energy_Del)",
        "details": {
          "aCmeter": true,
          "adminHide": true,
          "allowArchiveRaw": false,
          "condense": 16,
          "dCmeter": false,
          "doublePrecision": true,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [
            2,
            4,
            3,
            20,
            16,
            1,
            39,
            45
          ],
          "functions": "PM,GM,CM,XM,SM,PV,BI,BG",
          "isFloat": true,
          "isStandardDataName": true,
          "isStatus": false,
          "otherAliasPTDataNameValues": "kvarhdel,VARhdel,TotVARhExp,QH3del",
          "otherAliasPTDataNames": [
            300,
            302,
            305,
            296
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 27
        },
        "equivalent": 295,
        "errors": [],
        "functionCodes": [
          2,
          4,
          3,
          20,
          16,
          1,
          39,
          45
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 295,
            "dataNameAndType": "Reactive_Energy_Del (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          },
          {
            "dataName": 300,
            "dataNameAndType": "kvarhdel (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 2
          },
          {
            "dataName": 302,
            "dataNameAndType": "VARhdel (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 3
          },
          {
            "dataName": 305,
            "dataNameAndType": "TotVARhExp (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 4
          },
          {
            "dataName": 296,
            "dataNameAndType": "QH3del (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 5
          }
        ],
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [
          300,
          302,
          305,
          296
        ],
        "registerDataNameIdentifier": 295,
        "registerName": "Reactive Energy Delivered",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": true
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Reactive Export energy",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Total energy",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "KWHnet",
      "dataNameDetail": {
        "dataName": "KWHnet",
        "description": "Active Energy Net (Equivalent: KWHnet)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 16,
          "dCmeter": false,
          "doublePrecision": true,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "Active_Energy_Net",
          "otherAliasPTDataNames": [
            222
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 11
        },
        "equivalent": 7,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          222
        ],
        "registerDataNameIdentifier": 7,
        "registerName": "Active Energy Net",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Total energy net",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Reactive Total energy",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Reactive_Energy_Net",
      "dataNameDetail": {
        "dataName": "Reactive_Energy_Net",
        "description": "Reactive Energy Net (Equivalent: Reactive_Energy_Net)",
        "details": {
          "aCmeter": true,
          "adminHide": true,
          "allowArchiveRaw": false,
          "condense": 16,
          "dCmeter": false,
          "doublePrecision": true,
          "equivalent": 5,
          "excludedChannels": "",
          "functionCodes": [
            2,
            4,
            3,
            20,
            16,
            1,
            39,
            45
          ],
          "functions": "PM,GM,CM,XM,SM,PV,BI,BG",
          "isFloat": true,
          "isStandardDataName": true,
          "isStatus": false,
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 27
        },
        "equivalent": 5,
        "errors": [],
        "functionCodes": [
          2,
          4,
          3,
          20,
          16,
          1,
          39,
          45
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 5,
            "dataNameAndType": "kvarh (Legacy)",
            "dataNameType": "Legacy",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          }
        ],
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [],
        "registerDataNameIdentifier": 294,
        "registerName": "Reactive Energy Net",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": true
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Reactive Total energy net",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "KVAh",
      "dataNameDetail": {
        "dataName": "KVAH",
        "description": "Apparent Energy Net (Equivalent: KVAH)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 16,
          "dCmeter": false,
          "doublePrecision": true,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "Apparent_Energy,KVAnet,Apparent_Energy_Net",
          "otherAliasPTDataNames": [
            249,
            251,
            250
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 22
        },
        "equivalent": 4,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          249,
          251,
          250
        ],
        "registerDataNameIdentifier": 4,
        "registerName": "Apparent Energy Net",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Apparent Energy",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "KVAR",
      "dataNameDetail": {
        "dataName": "KVAR",
        "description": "Reactive Power (Equivalent: KVAR)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "VAR,VARs,Reactive_Power",
          "otherAliasPTDataNames": [
            317,
            307,
            306
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 26
        },
        "equivalent": 3,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          317,
          307,
          306
        ],
        "registerDataNameIdentifier": 3,
        "registerName": "Reactive Power",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Reactive Power",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "VacA",
      "dataNameDetail": {
        "dataName": "VacA",
        "description": "AC Voltage AN (Equivalent: VacA)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "AC_Voltage_AN,Voltage_AN",
          "otherAliasPTDataNames": [
            347,
            324
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 2
        },
        "equivalent": 16,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          347,
          324
        ],
        "registerDataNameIdentifier": 16,
        "registerName": "AC Voltage AN",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Volts A-N",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "VacB",
      "dataNameDetail": {
        "dataName": "VacB",
        "description": "AC Voltage BN (Equivalent: VacB)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "AC_Voltage_BN,Voltage_BN",
          "otherAliasPTDataNames": [
            350,
            326
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 2
        },
        "equivalent": 17,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          350,
          326
        ],
        "registerDataNameIdentifier": 17,
        "registerName": "AC Voltage BN",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Volts B-N",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "VacC",
      "dataNameDetail": {
        "dataName": "VacC",
        "description": "AC Voltage CN (Equivalent: VacC)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "AC_Voltage_CN,Voltage_CN",
          "otherAliasPTDataNames": [
            352,
            328
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 2
        },
        "equivalent": 19,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          352,
          328
        ],
        "registerDataNameIdentifier": 19,
        "registerName": "AC Voltage CN",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Volts C-N",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "VacLN",
      "dataNameDetail": {
        "dataName": "Vacln",
        "description": "AC Voltage Average L-N (Equivalent: Vacln)",
        "details": {
          "aCmeter": true,
          "adminHide": true,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 36,
          "excludedChannels": "",
          "functionCodes": [
            2,
            4,
            3,
            20,
            16,
            1,
            39,
            45
          ],
          "functions": "PM,GM,CM,XM,SM,PV,BI,BG",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "Voltage_LN_Avg,Vaclna,VNavg,AC_Voltage_LN_Avg",
          "otherAliasPTDataNames": [
            336,
            339,
            337,
            341
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 2
        },
        "equivalent": 36,
        "errors": [],
        "functionCodes": [
          2,
          4,
          3,
          20,
          16,
          1,
          39,
          45
        ],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          336,
          339,
          337,
          341
        ],
        "registerDataNameIdentifier": 338,
        "registerName": "AC Voltage Average L-N",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Average voltage L-N",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "VacAB",
      "dataNameDetail": {
        "dataName": "VacAB",
        "description": "AC Voltage AB (Equivalent: VacAB)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "AC_Voltage_AB,VaB,Voltage_AB",
          "otherAliasPTDataNames": [
            346,
            18,
            323
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 2
        },
        "equivalent": 20,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          346,
          18,
          323
        ],
        "registerDataNameIdentifier": 20,
        "registerName": "AC Voltage AB",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Volts A-B",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "VacBC",
      "dataNameDetail": {
        "dataName": "VacBC",
        "description": "AC Voltage BC (Equivalent: VacBC)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "AC_Voltage_BC,Vbc,Voltage_BC",
          "otherAliasPTDataNames": [
            349,
            21,
            325
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 2
        },
        "equivalent": 22,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          349,
          21,
          325
        ],
        "registerDataNameIdentifier": 22,
        "registerName": "AC Voltage BC",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Volts B-C",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "VacCA",
      "dataNameDetail": {
        "dataName": "VacCA",
        "description": "AC Voltage CA (Equivalent: VacCA)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "AC_Voltage_CA,Vca,Voltage_CA",
          "otherAliasPTDataNames": [
            351,
            24,
            327
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 2
        },
        "equivalent": 23,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          351,
          24,
          327
        ],
        "registerDataNameIdentifier": 23,
        "registerName": "AC Voltage CA",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Volts C-A",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "VacLL",
      "dataNameDetail": {
        "dataName": "Vacll",
        "description": "AC Voltage Average L-L (Equivalent: Vacll)",
        "details": {
          "aCmeter": true,
          "adminHide": true,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 329,
          "excludedChannels": "",
          "functionCodes": [
            2,
            4,
            3,
            20,
            16,
            1,
            39,
            45
          ],
          "functions": "PM,GM,CM,XM,SM,PV,BI,BG",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "AC_Voltage_LL_Avg,Voltage_LL,VLavg,AC_Voltage_LL",
          "otherAliasPTDataNames": [
            334,
            330,
            331,
            333
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 2
        },
        "equivalent": 329,
        "errors": [],
        "functionCodes": [
          2,
          4,
          3,
          20,
          16,
          1,
          39,
          45
        ],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          334,
          330,
          331,
          333
        ],
        "registerDataNameIdentifier": 332,
        "registerName": "AC Voltage Average L-L",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Average voltage L-L",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "IacA",
      "dataNameDetail": {
        "dataName": "IacA",
        "description": "AC Current A (Equivalent: IacA)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "AC_Current_A,Current_A",
          "otherAliasPTDataNames": [
            342,
            263
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 4
        },
        "equivalent": 25,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          342,
          263
        ],
        "registerDataNameIdentifier": 25,
        "registerName": "AC Current A",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Amps A",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "IacB",
      "dataNameDetail": {
        "dataName": "IacB",
        "description": "AC Current B (Equivalent: IacB)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "AC_Current_B,Current_B",
          "otherAliasPTDataNames": [
            343,
            264
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 4
        },
        "equivalent": 26,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          343,
          264
        ],
        "registerDataNameIdentifier": 26,
        "registerName": "AC Current B",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Amps B",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "IacC",
      "dataNameDetail": {
        "dataName": "IacC",
        "description": "AC Current C (Equivalent: IacC)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "AC_Current_C,Current_C",
          "otherAliasPTDataNames": [
            344,
            265
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 4
        },
        "equivalent": 27,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          344,
          265
        ],
        "registerDataNameIdentifier": 27,
        "registerName": "AC Current C",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Amps C",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Active_Power_A",
      "dataNameDetail": {
        "dataName": "Active_Power_A",
        "description": "Active Power A (Equivalent: Active_Power_A)",
        "details": {
          "aCmeter": true,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [
            2,
            4,
            3,
            20,
            16,
            1,
            39,
            45
          ],
          "functions": "PM,GM,CM,XM,SM,PV,BI,BG",
          "isFloat": true,
          "isStandardDataName": true,
          "isStatus": false,
          "otherAliasPTDataNameValues": "kwA,kwac_a,KW_A,KwAC1,PhA_kW",
          "otherAliasPTDataNames": [
            234,
            237,
            240,
            243,
            246
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 10
        },
        "equivalent": 231,
        "errors": [],
        "functionCodes": [
          2,
          4,
          3,
          20,
          16,
          1,
          39,
          45
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 231,
            "dataNameAndType": "Active_Power_A (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          },
          {
            "dataName": 234,
            "dataNameAndType": "kwA (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 2
          },
          {
            "dataName": 237,
            "dataNameAndType": "kwac_a (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 3
          },
          {
            "dataName": 240,
            "dataNameAndType": "KW_A (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 4
          },
          {
            "dataName": 243,
            "dataNameAndType": "KwAC1 (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 5
          },
          {
            "dataName": 246,
            "dataNameAndType": "PhA_kW (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 6
          }
        ],
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [
          234,
          237,
          240,
          243,
          246
        ],
        "registerDataNameIdentifier": 231,
        "registerName": "Active Power A",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": true
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Power A",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Active_Power_B",
      "dataNameDetail": {
        "dataName": "Active_Power_B",
        "description": "Active Power B (Equivalent: Active_Power_B)",
        "details": {
          "aCmeter": true,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [
            2,
            4,
            3,
            20,
            16,
            1,
            39,
            45
          ],
          "functions": "PM,GM,CM,XM,SM,PV,BI,BG",
          "isFloat": true,
          "isStandardDataName": true,
          "isStatus": false,
          "otherAliasPTDataNameValues": "kwB,kwac_b,KW_B,KwAC2,PhB_kW",
          "otherAliasPTDataNames": [
            235,
            238,
            241,
            244,
            247
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 10
        },
        "equivalent": 232,
        "errors": [],
        "functionCodes": [
          2,
          4,
          3,
          20,
          16,
          1,
          39,
          45
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 232,
            "dataNameAndType": "Active_Power_B (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          },
          {
            "dataName": 235,
            "dataNameAndType": "kwB (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 2
          },
          {
            "dataName": 238,
            "dataNameAndType": "kwac_b (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 3
          },
          {
            "dataName": 241,
            "dataNameAndType": "KW_B (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 4
          },
          {
            "dataName": 244,
            "dataNameAndType": "KwAC2 (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 5
          },
          {
            "dataName": 247,
            "dataNameAndType": "PhB_kW (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 6
          }
        ],
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [
          235,
          238,
          241,
          244,
          247
        ],
        "registerDataNameIdentifier": 232,
        "registerName": "Active Power B",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": true
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Power B",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Active_Power_C",
      "dataNameDetail": {
        "dataName": "Active_Power_C",
        "description": "Active Power C (Equivalent: Active_Power_C)",
        "details": {
          "aCmeter": true,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [
            2,
            4,
            3,
            20,
            16,
            1,
            39,
            45
          ],
          "functions": "PM,GM,CM,XM,SM,PV,BI,BG",
          "isFloat": true,
          "isStandardDataName": true,
          "isStatus": false,
          "otherAliasPTDataNameValues": "kwC,kwac_c,KW_C,KwAC3,PhC_kW",
          "otherAliasPTDataNames": [
            236,
            239,
            242,
            245,
            248
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 10
        },
        "equivalent": 233,
        "errors": [],
        "functionCodes": [
          2,
          4,
          3,
          20,
          16,
          1,
          39,
          45
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 233,
            "dataNameAndType": "Active_Power_C (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          },
          {
            "dataName": 236,
            "dataNameAndType": "kwC (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 2
          },
          {
            "dataName": 239,
            "dataNameAndType": "kwac_c (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 3
          },
          {
            "dataName": 242,
            "dataNameAndType": "KW_C (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 4
          },
          {
            "dataName": 245,
            "dataNameAndType": "KwAC3 (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 5
          },
          {
            "dataName": 248,
            "dataNameAndType": "PhC_kW (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 6
          }
        ],
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [
          236,
          239,
          242,
          245,
          248
        ],
        "registerDataNameIdentifier": 233,
        "registerName": "Active Power C",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": true
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Power C",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "KW",
      "dataNameDetail": {
        "dataName": "KW",
        "description": "Active Power (Equivalent: KW)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 38,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "Active_Power",
          "otherAliasPTDataNames": [
            230
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 10
        },
        "equivalent": 38,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          230
        ],
        "registerDataNameIdentifier": 2,
        "registerName": "Active Power",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Total Power",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "PFA",
      "dataNameDetail": {
        "dataName": "PFA",
        "description": "Power Factor A (Equivalent: PFA)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 10,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "PF_A,Power_Factor_A,PowerFactor_A",
          "otherAliasPTDataNames": [
            291,
            285,
            288
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 39
        },
        "equivalent": 13,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          291,
          285,
          288
        ],
        "registerDataNameIdentifier": 13,
        "registerName": "Power Factor A",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Power factor A",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "PFB",
      "dataNameDetail": {
        "dataName": "PFB",
        "description": "Power Factor B (Equivalent: PFB)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 10,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "PF_B,Power_Factor_B,PowerFactor_B",
          "otherAliasPTDataNames": [
            292,
            286,
            289
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 39
        },
        "equivalent": 14,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          292,
          286,
          289
        ],
        "registerDataNameIdentifier": 14,
        "registerName": "Power Factor B",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Power factor B",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "PFC",
      "dataNameDetail": {
        "dataName": "PFC",
        "description": "Power Factor C (Equivalent: PFC)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 10,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "PF_C,Power_Factor_C,PowerFactor_C",
          "otherAliasPTDataNames": [
            293,
            287,
            290
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 39
        },
        "equivalent": 15,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          293,
          287,
          290
        ],
        "registerDataNameIdentifier": 15,
        "registerName": "Power Factor C",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Power factor C",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "kVARA",
      "dataNameDetail": {
        "dataName": "kvara",
        "description": "Reactive Power A (Equivalent: kvara)",
        "details": {
          "aCmeter": true,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 308,
          "excludedChannels": "",
          "functionCodes": [
            2,
            4,
            3,
            20,
            16
          ],
          "functions": "PM,GM,CM,XM,SM",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "kvar_a,VAR_A",
          "otherAliasPTDataNames": [
            314,
            318
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 26
        },
        "equivalent": 308,
        "errors": [],
        "functionCodes": [
          2,
          4,
          3,
          20,
          16
        ],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          314,
          318
        ],
        "registerDataNameIdentifier": 311,
        "registerName": "Reactive Power A",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Phase A Reactive Power ",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "kVARB",
      "dataNameDetail": {
        "dataName": "kvarb",
        "description": "Reactive Power B (Equivalent: kvarb)",
        "details": {
          "aCmeter": true,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 309,
          "excludedChannels": "",
          "functionCodes": [
            2,
            4,
            3,
            20,
            16
          ],
          "functions": "PM,GM,CM,XM,SM",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "kvar_b,VAR_B",
          "otherAliasPTDataNames": [
            315,
            319
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 26
        },
        "equivalent": 309,
        "errors": [],
        "functionCodes": [
          2,
          4,
          3,
          20,
          16
        ],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          315,
          319
        ],
        "registerDataNameIdentifier": 312,
        "registerName": "Reactive Power B",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Phase B Reactive Power",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "kVARC",
      "dataNameDetail": {
        "dataName": "kvarc",
        "description": "Reactive Power C (Equivalent: kvarc)",
        "details": {
          "aCmeter": true,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 310,
          "excludedChannels": "",
          "functionCodes": [
            2,
            4,
            3,
            20,
            16
          ],
          "functions": "PM,GM,CM,XM,SM",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "kvar_c,VAR_C",
          "otherAliasPTDataNames": [
            316,
            320
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 26
        },
        "equivalent": 310,
        "errors": [],
        "functionCodes": [
          2,
          4,
          3,
          20,
          16
        ],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          316,
          320
        ],
        "registerDataNameIdentifier": 313,
        "registerName": "Reactive Power C",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Phase C Reactive Power ",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "KWHdelRaw",
      "dataNameDetail": {
        "dataName": "KWHdelRaw",
        "description": "Active Energy Delivered Raw (Equivalent: KWHdelRaw)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 16,
          "dCmeter": false,
          "doublePrecision": true,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "Active_Energy_Raw_Del",
          "otherAliasPTDataNames": [
            225
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 11
        },
        "equivalent": 43,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          225
        ],
        "registerDataNameIdentifier": 43,
        "registerName": "Active Energy Delivered Raw",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Active Energy Delivered Raw",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "KWHrecRaw",
      "dataNameDetail": {
        "dataName": "KWHrecRaw",
        "description": "Active Energy Received Raw (Equivalent: KWHrecRaw)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 16,
          "dCmeter": false,
          "doublePrecision": true,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "Active_Energy_Raw_Rec",
          "otherAliasPTDataNames": [
            227
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 11
        },
        "equivalent": 44,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          227
        ],
        "registerDataNameIdentifier": 44,
        "registerName": "Active Energy Received Raw",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Active Energy Received Raw",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "KWHnetRaw",
      "dataNameDetail": {
        "dataName": "KWHnetRaw",
        "description": "Active Energy Net Raw (Equivalent: KWHnetRaw)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 16,
          "dCmeter": false,
          "doublePrecision": true,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [
            1,
            39,
            42,
            25,
            43,
            47,
            45,
            44
          ],
          "functions": "PV,BI,BB,BS,BA,PP,BG,RK",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "Active_Energy_Raw_Net",
          "otherAliasPTDataNames": [
            223
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 11
        },
        "equivalent": 42,
        "errors": [],
        "functionCodes": [
          1,
          39,
          42,
          25,
          43,
          47,
          45,
          44
        ],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          223
        ],
        "registerDataNameIdentifier": 42,
        "registerName": "Active Energy Net Raw",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Active Energy Net Raw",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "THD_Current",
      "dataNameDetail": {
        "dataName": "THD_Current",
        "description": "Phase Total Harmonic Current Distortion (Equivalent: THD_Current)",
        "details": {
          "aCmeter": true,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 1,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [
            2,
            4,
            3,
            20,
            16,
            25,
            42,
            47
          ],
          "functions": "PM,GM,CM,XM,SM,BS,BB,PP",
          "isFloat": true,
          "isStandardDataName": true,
          "isStatus": false,
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 4
        },
        "equivalent": 282,
        "errors": [],
        "functionCodes": [
          2,
          4,
          3,
          20,
          16,
          25,
          42,
          47
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 282,
            "dataNameAndType": "THD_Current (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          }
        ],
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [],
        "registerDataNameIdentifier": 282,
        "registerName": "Phase Total Harmonic Current Distortion",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Phase Total Harmonic Current Distortion",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "THD_Voltage",
      "dataNameDetail": {
        "dataName": "THD_Voltage",
        "description": "Phase Total Harmonic Voltage Distortion (Equivalent: THD_Voltage)",
        "details": {
          "aCmeter": true,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [
            2,
            4,
            3,
            20,
            16,
            25,
            42,
            47
          ],
          "functions": "PM,GM,CM,XM,SM,BS,BB,PP",
          "isFloat": true,
          "isStandardDataName": true,
          "isStatus": false,
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 2
        },
        "equivalent": 283,
        "errors": [],
        "functionCodes": [
          2,
          4,
          3,
          20,
          16,
          25,
          42,
          47
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 283,
            "dataNameAndType": "THD_Voltage (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          }
        ],
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [],
        "registerDataNameIdentifier": 283,
        "registerName": "Phase Total Harmonic Voltage Distortion",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Phase Total Harmonic Voltage Distortion",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Potential_XMFR_Primary",
      "dataNameDetail": {
        "dataName": "Potential_XMFR_Primary",
        "description": "Potential Transformer Primary (Equivalent: Potential_XMFR_Primary)",
        "details": {
          "aCmeter": true,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [
            2,
            4,
            3,
            20,
            16
          ],
          "functions": "PM,GM,CM,XM,SM",
          "isFloat": true,
          "isStandardDataName": true,
          "isStatus": false,
          "otherAliasPTDataNameValues": "PTn",
          "otherAliasPTDataNames": [
            275
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 2
        },
        "equivalent": 274,
        "errors": [],
        "functionCodes": [
          2,
          4,
          3,
          20,
          16
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 274,
            "dataNameAndType": "Potential_XMFR_Primary (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          },
          {
            "dataName": 275,
            "dataNameAndType": "PTn (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 2
          }
        ],
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [
          275
        ],
        "registerDataNameIdentifier": 274,
        "registerName": "Potential Transformer Primary",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "PT Ratio (primary)",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Potential_XMFR_Secondary",
      "dataNameDetail": {
        "dataName": "Potential_XMFR_Secondary",
        "description": "Potential Transformer Secondary (Equivalent: Potential_XMFR_Secondary)",
        "details": {
          "aCmeter": true,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [
            2,
            4,
            3,
            20,
            16
          ],
          "functions": "PM,GM,CM,XM,SM",
          "isFloat": true,
          "isStandardDataName": true,
          "isStatus": false,
          "otherAliasPTDataNameValues": "PTd",
          "otherAliasPTDataNames": [
            277
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 2
        },
        "equivalent": 276,
        "errors": [],
        "functionCodes": [
          2,
          4,
          3,
          20,
          16
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 276,
            "dataNameAndType": "Potential_XMFR_Secondary (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          },
          {
            "dataName": 277,
            "dataNameAndType": "PTd (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 2
          }
        ],
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [
          277
        ],
        "registerDataNameIdentifier": 276,
        "registerName": "Potential Transformer Secondary",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "PT Ratio (secondary)",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Current_XMFR_Primary",
      "dataNameDetail": {
        "dataName": "Current_XMFR_Primary",
        "description": "Current Transformer Primary (Equivalent: Current_XMFR_Primary)",
        "details": {
          "aCmeter": true,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [
            2,
            4,
            3,
            20,
            16
          ],
          "functions": "PM,GM,CM,XM,SM",
          "isFloat": true,
          "isStandardDataName": true,
          "isStatus": false,
          "otherAliasPTDataNameValues": "CTn",
          "otherAliasPTDataNames": [
            270
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 4
        },
        "equivalent": 269,
        "errors": [],
        "functionCodes": [
          2,
          4,
          3,
          20,
          16
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 269,
            "dataNameAndType": "Current_XMFR_Primary (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          },
          {
            "dataName": 270,
            "dataNameAndType": "CTn (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 2
          }
        ],
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [
          270
        ],
        "registerDataNameIdentifier": 269,
        "registerName": "Current Transformer Primary",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "CT Ratio (primary)",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Current_XMFR_Secondary",
      "dataNameDetail": {
        "dataName": "Current_XMFR_Secondary",
        "description": "Current Transformer Secondary (Equivalent: Current_XMFR_Secondary)",
        "details": {
          "aCmeter": true,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [
            2,
            4,
            3,
            20,
            16
          ],
          "functions": "PM,GM,CM,XM,SM",
          "isFloat": true,
          "isStandardDataName": true,
          "isStatus": false,
          "otherAliasPTDataNameValues": "CTd",
          "otherAliasPTDataNames": [
            272
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 4
        },
        "equivalent": 271,
        "errors": [],
        "functionCodes": [
          2,
          4,
          3,
          20,
          16
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 271,
            "dataNameAndType": "Current_XMFR_Secondary (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          },
          {
            "dataName": 272,
            "dataNameAndType": "CTd (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 2
          }
        ],
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [
          272
        ],
        "registerDataNameIdentifier": 271,
        "registerName": "Current Transformer Secondary",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "CT Ratio (secondary)",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Energy display mode",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Basic Parameter mode",
      "standardDataName": "",
      "units": ""
    }
  ],
  "eGauge": null,
  "fixedEnergyOffset": 0,
  "functionCode": 2,
  "functionId": "PM1",
  "gateway": null,
  "gatewayFwVersion": "",
  "gatewayId": "000CC68FAF30",
  "gatewayKey": "H511564",
  "gatewayScriptCount": "",
  "gatewayType": 2,
  "groupAllowed": [],
  "groupKey": "",
  "hardwareId": "C20909_S68143_PM1",
  "hardwareStatus": 1,
  "hasCapacity": true,
  "hash": "",
  "increaseDifference": -1,
  "installDate": "2024-07-12",
  "instance": 1,
  "inverterKw": 0,
  "isConflictAcknowledged": false,
  "isReportable": true,
  "isTcp": true,
  "isThermal": false,
  "key": "H511566",
  "kiosk": null,
  "latitude": 34.0371297,
  "limitedCommunication": false,
  "locusId": "",
  "longitude": -118.1014776,
  "meter": {
    "acInfo": 2,
    "grossEnergy": 0,
    "grossEnergyOptions": [
      {
        "name": "Undefined",
        "value": 0
      },
      {
        "name": "Export energy",
        "value": 2
      },
      {
        "name": "Import energy",
        "value": 3
      }
    ],
    "kw": 0,
    "kwhDelivered": 0,
    "kwhNet": 0,
    "kwhReceived": 0,
    "lineResistance": 0,
    "load": 0,
    "loadLoss": 0,
    "maxCurrent": 1100,
    "maxPower": 524.88,
    "maxVoltage": 480,
    "noLoadLoss": 0,
    "scale": 0,
    "scaleKw": 0.001,
    "scaleKwh": 0.1,
    "showLoad": false
  },
  "modelNum": "ACCUENERGY IIR-D-mV-P1V3",
  "newNote": null,
  "oneMinuteData": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2025-12-23T00:11:03.0440156Z",
  "outputAllowed": [],
  "outputKey": "",
  "parentKey": "S68143",
  "port": 0,
  "primary": false,
  "pullData": false,
  "pvConfig": null,
  "readOnly": false,
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
  "reportExclude": false,
  "reverse": false,
  "sampleRate": 0,
  "serialMode": 0,
  "serialNum": "AHB54010502",
  "settings": [
    {
      "index": 0,
      "name": "dev:portMode",
      "originalValue": "N/A",
      "type": 0,
      "value": "N/A"
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
  "siteDcShare": 0,
  "siteHasInverterGroups": true,
  "sort": 4,
  "syncToLocus": false,
  "tags": {
    "attributes": [],
    "key": "{\"ancestorKey\":\"H511566\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
    "keywords": [],
    "lastChanged": null,
    "notes": [
      {
        "authorKey": "U39142",
        "authorName": "Reuben Brazeal",
        "date": "2024-07-12T14:05:31Z",
        "isEvent": true,
        "key": "x050bf173",
        "kind": "text",
        "parentKey": "H511566",
        "text": "Password created"
      }
    ],
    "powerDisplays": []
  },
  "taskKey": "",
  "thermal": null,
  "thread": 0,
  "ts": "2025-12-22T22:01:11Z",
  "turbine": null,
  "unitId": 1,
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

**Response:**

```json
{
  "additionalRegisters": [],
  "address": "192.168.13.42",
  "alsoHardwareId": 0,
  "alsoSiteId": 0,
  "array": null,
  "assetId": "",
  "autoCorrectDecrease": false,
  "autoCorrectIncrease": false,
  "baud": "",
  "capacityKw": 524.88,
  "chartSectionCode": 2,
  "commonDC": false,
  "commonDCAllMatch": true,
  "configs": [
    "Meter"
  ],
  "conflictNames": null,
  "dashboardKey": "",
  "dcRating": 524880,
  "debug": false,
  "decreaseDifference": 100,
  "defaultChart": 15,
  "description": "Accuvim II - SITE??  Meter - M1",
  "deviceRegisters": [
    {
      "dataName": "Hz",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Frequency",
      "name": "iFreq",
      "standardDataName": "Frequency",
      "units": "Hz"
    },
    {
      "dataName": "PowerFactor",
      "dataNameDetail": null,
      "index": 1,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Power Factor",
      "name": "Power factor",
      "standardDataName": "Power_Factor",
      "units": "PF"
    },
    {
      "dataName": "KWHrec",
      "dataNameDetail": null,
      "index": 2,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Received (with Offset)",
      "name": "Import energy",
      "standardDataName": "Active_Energy_Rec",
      "units": "kWh"
    },
    {
      "dataName": "KWHdel",
      "dataNameDetail": null,
      "index": 3,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Delivered (with Offset)",
      "name": "Export energy",
      "standardDataName": "Active_Energy_Del",
      "units": "kWh"
    },
    {
      "dataName": "Reactive_Energy_Rec",
      "dataNameDetail": null,
      "index": 4,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Energy Received",
      "name": "Reactive Import energy",
      "standardDataName": "Reactive_Energy_Rec",
      "units": "kVARh"
    },
    {
      "dataName": "Reactive_Energy_Del",
      "dataNameDetail": null,
      "index": 5,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Energy Delivered",
      "name": "Reactive Export energy",
      "standardDataName": "Reactive_Energy_Del",
      "units": "kVARh"
    },
    {
      "dataName": "KWHnet",
      "dataNameDetail": null,
      "index": 6,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Net",
      "name": "Total energy net",
      "standardDataName": "Active_Energy_Net",
      "units": "kWh"
    },
    {
      "dataName": "Reactive_Energy_Net",
      "dataNameDetail": null,
      "index": 7,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Energy Net",
      "name": "Reactive Total energy net",
      "standardDataName": "Reactive_Energy_Net",
      "units": "kVARh"
    },
    {
      "dataName": "KVAh",
      "dataNameDetail": null,
      "index": 8,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Apparent Energy Net",
      "name": "Apparent Energy",
      "standardDataName": "Apparent_Energy_Net",
      "units": "kVAh"
    },
    {
      "dataName": "KVAR",
      "dataNameDetail": null,
      "index": 9,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power",
      "name": "Reactive Power",
      "standardDataName": "Reactive_Power",
      "units": "kVAR"
    },
    {
      "dataName": "VacA",
      "dataNameDetail": null,
      "index": 10,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage A (Line-Neutral)",
      "name": "Volts A-N",
      "standardDataName": "Voltage_AN",
      "units": "V"
    },
    {
      "dataName": "VacB",
      "dataNameDetail": null,
      "index": 11,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage B (Line-Neutral)",
      "name": "Volts B-N",
      "standardDataName": "Voltage_BN",
      "units": "V"
    },
    {
      "dataName": "VacC",
      "dataNameDetail": null,
      "index": 12,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage C (Line-Neutral)",
      "name": "Volts C-N",
      "standardDataName": "Voltage_CN",
      "units": "V"
    },
    {
      "dataName": "VacLN",
      "dataNameDetail": null,
      "index": 13,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage Average L-N",
      "name": "Average voltage L-N",
      "standardDataName": "Voltage_LN_Avg",
      "units": "V"
    },
    {
      "dataName": "VacAB",
      "dataNameDetail": null,
      "index": 14,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage A-B (Line-Line)",
      "name": "Volts A-B",
      "standardDataName": "Voltage_AB",
      "units": "V"
    },
    {
      "dataName": "VacBC",
      "dataNameDetail": null,
      "index": 15,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage B-C (Line-Line)",
      "name": "Volts B-C",
      "standardDataName": "Voltage_BC",
      "units": "V"
    },
    {
      "dataName": "VacCA",
      "dataNameDetail": null,
      "index": 16,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage C-A (Line-Line)",
      "name": "Volts C-A",
      "standardDataName": "Voltage_CA",
      "units": "V"
    },
    {
      "dataName": "VacLL",
      "dataNameDetail": null,
      "index": 17,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Line to Line voltage",
      "name": "Average voltage L-L",
      "standardDataName": "Voltage_LL_Avg",
      "units": "V"
    },
    {
      "dataName": "IacA",
      "dataNameDetail": null,
      "index": 18,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current A",
      "name": "Amps A",
      "standardDataName": "Current_A",
      "units": "A"
    },
    {
      "dataName": "IacB",
      "dataNameDetail": null,
      "index": 19,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current B",
      "name": "Amps B",
      "standardDataName": "Current_B",
      "units": "A"
    },
    {
      "dataName": "IacC",
      "dataNameDetail": null,
      "index": 20,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current C",
      "name": "Amps C",
      "standardDataName": "Current_C",
      "units": "A"
    },
    {
      "dataName": "Active_Power_A",
      "dataNameDetail": null,
      "index": 21,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power A",
      "name": "Power A",
      "standardDataName": "Active_Power_A",
      "units": "kW"
    },
    {
      "dataName": "Active_Power_B",
      "dataNameDetail": null,
      "index": 22,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power B",
      "name": "Power B",
      "standardDataName": "Active_Power_B",
      "units": "kW"
    },
    {
      "dataName": "Active_Power_C",
      "dataNameDetail": null,
      "index": 23,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power C",
      "name": "Power C",
      "standardDataName": "Active_Power_C",
      "units": "kW"
    },
    {
      "dataName": "KW",
      "dataNameDetail": null,
      "index": 24,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power",
      "name": "Total Power",
      "standardDataName": "Active_Power",
      "units": "kW"
    },
    {
      "dataName": "PFA",
      "dataNameDetail": null,
      "index": 25,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Power Factor A",
      "name": "Power factor A",
      "standardDataName": "Power_Factor_A",
      "units": "PF"
    },
    {
      "dataName": "PFB",
      "dataNameDetail": null,
      "index": 26,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Power Factor B",
      "name": "Power factor B",
      "standardDataName": "Power_Factor_B",
      "units": "PF"
    },
    {
      "dataName": "PFC",
      "dataNameDetail": null,
      "index": 27,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Power Factor C",
      "name": "Power factor C",
      "standardDataName": "Power_Factor_C",
      "units": "PF"
    },
    {
      "dataName": "kVARA",
      "dataNameDetail": null,
      "index": 28,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power A",
      "name": "Phase A Reactive Power ",
      "standardDataName": "Reactive_Power_A",
      "units": "kVAR"
    },
    {
      "dataName": "kVARB",
      "dataNameDetail": null,
      "index": 29,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power B",
      "name": "Phase B Reactive Power",
      "standardDataName": "Reactive_Power_B",
      "units": "kVAR"
    },
    {
      "dataName": "kVARC",
      "dataNameDetail": null,
      "index": 30,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power C",
      "name": "Phase C Reactive Power ",
      "standardDataName": "Reactive_Power_C",
      "units": "kVAR"
    },
    {
      "dataName": "KWHdelRaw",
      "dataNameDetail": null,
      "index": 31,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Delivered (without Offset)",
      "name": "Active Energy Delivered Raw",
      "standardDataName": "Active_Energy_Raw_Del",
      "units": "kWh"
    },
    {
      "dataName": "KWHrecRaw",
      "dataNameDetail": null,
      "index": 32,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Received (without Offset)",
      "name": "Active Energy Received Raw",
      "standardDataName": "Active_Energy_Raw_Rec",
      "units": "kWh"
    },
    {
      "dataName": "KWHnetRaw",
      "dataNameDetail": null,
      "index": 33,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Net Raw",
      "name": "Active Energy Net Raw",
      "standardDataName": "Active_Energy_Raw_Net",
      "units": "kWh"
    },
    {
      "dataName": "THD_Current",
      "dataNameDetail": null,
      "index": 34,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Phase Total Harmonic Current Distortion",
      "name": "Phase Total Harmonic Current Distortion",
      "standardDataName": "THD_Current",
      "units": "A"
    },
    {
      "dataName": "THD_Voltage",
      "dataNameDetail": null,
      "index": 35,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Phase Total Harmonic Voltage Distortion",
      "name": "Phase Total Harmonic Voltage Distortion",
      "standardDataName": "THD_Voltage",
      "units": "V"
    },
    {
      "dataName": "Potential_XMFR_Primary",
      "dataNameDetail": null,
      "index": 36,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Potential Transformer Primary Ratio",
      "name": "PT Ratio (primary)",
      "standardDataName": "Potential_XMFR_Primary",
      "units": ""
    },
    {
      "dataName": "Potential_XMFR_Secondary",
      "dataNameDetail": null,
      "index": 37,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Potential Transformer Secondary Ratio",
      "name": "PT Ratio (secondary)",
      "standardDataName": "Potential_XMFR_Secondary",
      "units": ""
    },
    {
      "dataName": "Current_XMFR_Primary",
      "dataNameDetail": null,
      "index": 38,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Current Transformer Primary Ratio",
      "name": "CT Ratio (primary)",
      "standardDataName": "Current_XMFR_Primary",
      "units": ""
    },
    {
      "dataName": "Current_XMFR_Secondary",
      "dataNameDetail": null,
      "index": 39,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Current Transformer Secondary Ratio",
      "name": "CT Ratio (secondary)",
      "standardDataName": "Current_XMFR_Secondary",
      "units": ""
    }
  ],
  "driverDescription": "Meters USA Acuvim II Power meter - Primary Mode",
  "driverFlags": 16385,
  "driverId": 19601,
  "driverName": "AccuEnergy Acuvim II(R-D-5A) Primary Mode(SS)Standard",
  "driverNotes": "Driver conforms to Standard IO, supercedes all Acuvim Primary Mode Drivers. If Acuvim is in Secondary mode, please use DID 19604.\r\rBustest kW:\rreg=16418 numreg=2\rRogowski Coil Meters: Apply ScaleKW value of 100.\r\r*If Basic Parameter Mode =1 & Energy Display Mode = 0 this means Primary Mode is selected.  ScaleKW = 0.001 |ScaleKWH = 0.1 | ScaleAmps = 1.0 | ScaleVolts = 1.0\r*If vice versa, Secondary Mode is enabled, use DID 19604\r\rConfirmed to work with versions below:\rMeter Firmware - v4.10\rModule Firmware Version - v1.19",
  "driverRegisters": [],
  "eGauge": null,
  "fixedEnergyOffset": 0,
  "functionCode": 2,
  "functionId": "PM1",
  "gateway": null,
  "gatewayFwVersion": "",
  "gatewayId": "000CC68FAF30",
  "gatewayKey": "H511564",
  "gatewayScriptCount": "",
  "gatewayType": 2,
  "groupAllowed": [],
  "groupKey": "",
  "hardwareId": "C20909_S68143_PM1",
  "hardwareStatus": 1,
  "hasCapacity": true,
  "hash": "",
  "increaseDifference": -1,
  "installDate": "2024-07-12",
  "instance": 1,
  "inverterKw": 0,
  "isConflictAcknowledged": false,
  "isReportable": true,
  "isTcp": true,
  "isThermal": false,
  "key": "H511566",
  "kiosk": null,
  "latitude": 34.0371297,
  "limitedCommunication": false,
  "locusId": "",
  "longitude": -118.1014776,
  "meter": {
    "acInfo": 2,
    "grossEnergy": 0,
    "grossEnergyOptions": [
      {
        "name": "Undefined",
        "value": 0
      },
      {
        "name": "Export energy",
        "value": 2
      },
      {
        "name": "Import energy",
        "value": 3
      }
    ],
    "kw": 0,
    "kwhDelivered": 0,
    "kwhNet": 0,
    "kwhReceived": 0,
    "lineResistance": 0,
    "load": 0,
    "loadLoss": 0,
    "maxCurrent": 1100,
    "maxPower": 524.88,
    "maxVoltage": 480,
    "noLoadLoss": 0,
    "scale": 0,
    "scaleKw": 0.001,
    "scaleKwh": 0.1,
    "showLoad": false
  },
  "modelNum": "ACCUENERGY IIR-D-mV-P1V3",
  "newNote": "",
  "oneMinuteData": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2025-12-23T00:11:11.8935098Z",
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
  "serialNum": "AHB54010502",
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
      "originalValue": 0,
      "type": 1,
      "value": 0
    },
    {
      "index": 2,
      "name": "dev:ScaleKW",
      "originalValue": 0.001,
      "type": 2,
      "value": 0.001
    },
    {
      "index": 3,
      "name": "dev:Reverse",
      "originalValue": "0",
      "type": 0,
      "value": "0"
    },
    {
      "index": 4,
      "name": "dev:ScaleKWH",
      "originalValue": 0.1,
      "type": 2,
      "value": 0.1
    },
    {
      "index": 5,
      "name": "dev:ScaleAmps",
      "originalValue": 1,
      "type": 2,
      "value": 1
    },
    {
      "index": 6,
      "name": "dev:ScaleVolts",
      "originalValue": 1,
      "type": 2,
      "value": 1
    },
    {
      "index": 7,
      "name": "ShortName",
      "originalValue": "PM1",
      "type": 0,
      "value": "PM1"
    },
    {
      "index": 8,
      "name": "dev:UnitID",
      "originalValue": 1,
      "type": 1,
      "value": 1
    }
  ],
  "siteDcShare": 0,
  "siteHasInverterGroups": true,
  "sort": 4,
  "syncToLocus": false,
  "tags": {
    "attributes": [],
    "key": "{\"ancestorKey\":\"H511566\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
    "keywords": [],
    "lastChanged": null,
    "notes": [
      {
        "authorKey": "U39142",
        "authorName": "Reuben Brazeal",
        "date": "2024-07-12T14:05:31Z",
        "isEvent": true,
        "key": "x050bf173",
        "kind": "text",
        "parentKey": "H511566",
        "text": "Password created"
      }
    ],
    "powerDisplays": []
  },
  "taskKey": "",
  "thermal": null,
  "thread": 0,
  "ts": "2025-12-23T00:11:10Z",
  "turbine": null,
  "unitId": 1,
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

