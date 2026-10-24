<a id="top"></a>
# /api/edit/hardware

[← Back to Index](../logs.md)

**Methods:** PUT  
**Status Codes:** 200  

## Table of Contents

- [Payload Structure](#payload-structure)
- [Weather Station (functionCode: 5)](#weather-station-functioncode-5)
- [Example](#example)

## Payload Structure

```json
{
  "type": "object",
  "properties": {
    "additionalRegisters": {
      "type": "object",
      "properties": {
        "archive": {
          "type": "number"
        },
        "dataName": {
          "type": "string"
        },
        "dataType": {
          "type": "number"
        },
        "dbDataType": {
          "type": "number"
        },
        "flags": {
          "type": "object",
          "properties": {
            "broadcastFlag": {
              "type": "boolean"
            },
            "derivativeFlag": {
              "type": "boolean"
            },
            "energyFlag": {
              "type": "boolean"
            },
            "integralFlag": {
              "type": "boolean"
            },
            "nonZeroFlag": {
              "type": "boolean"
            },
            "powerFlag": {
              "type": "boolean"
            },
            "previousFlag": {
              "type": "boolean"
            },
            "serialNumberFlag": {
              "type": "boolean"
            },
            "wordSwapFlag": {
              "type": "boolean"
            }
          }
        },
        "format": {
          "type": "string"
        },
        "index": {
          "type": "number"
        },
        "mode": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "params": {
          "type": "string"
        },
        "read": {
          "type": "number"
        },
        "register": {
          "type": "string"
        },
        "scale": {
          "type": "string"
        },
        "storeAggregate": {
          "type": "boolean"
        },
        "storeRaw": {
          "type": "boolean"
        },
        "units": {
          "type": "number"
        },
        "write": {
          "type": "number"
        }
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
            "dataNameDescription": {
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
    "energyCapacity": {
      "type": "number"
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
    "installedKva": {
      "type": "number"
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
    "parity": {
      "type": "number"
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
          "type": "number"
        },
        "type": {
          "type": "number"
        },
        "value": {
          "type": "number"
        }
      }
    },
    "siteDcShare": {
      "type": "number"
    },
    "siteHasHybridInverterGroups": {
      "type": "boolean"
    },
    "siteHasInverterGroups": {
      "type": "boolean"
    },
    "sort": {
      "type": "number"
    },
    "stopBits": {
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
      "properties": {
        "azimuth": {
          "type": "number"
        },
        "hasPyranometer": {
          "type": "boolean"
        },
        "hasRefPyranometer": {
          "type": "boolean"
        },
        "insolationType": {
          "type": "number"
        },
        "interpolateDailyInsolation": {
          "type": "boolean"
        },
        "isPyranometerHigh": {
          "type": "boolean"
        },
        "isRefPyranometerHigh": {
          "type": "boolean"
        },
        "maxTempF": {
          "type": "number"
        },
        "minTempF": {
          "type": "number"
        },
        "monthlyInsolation": {
          "type": "object",
          "properties": {
            "apr": {
              "type": "number"
            },
            "aug": {
              "type": "number"
            },
            "dec": {
              "type": "number"
            },
            "feb": {
              "type": "number"
            },
            "jan": {
              "type": "number"
            },
            "jul": {
              "type": "number"
            },
            "jun": {
              "type": "number"
            },
            "mar": {
              "type": "number"
            },
            "may": {
              "type": "number"
            },
            "nov": {
              "type": "number"
            },
            "oct": {
              "type": "number"
            },
            "sep": {
              "type": "number"
            }
          }
        },
        "pyranometerData": {
          "type": "object",
          "properties": {}
        },
        "pyranometerUnit": {
          "type": "number"
        },
        "refPyranometerData": {
          "type": "string"
        },
        "refPyranometerUnit": {
          "type": "number"
        },
        "sensors": {
          "type": "object",
          "properties": {
            "ambientTemp": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            },
            "barometer": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            },
            "humidity": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            },
            "panelTemp1": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            },
            "panelTemp2": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            },
            "pyranometer1": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            },
            "pyranometer2": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            },
            "pyrheliometer": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            },
            "rain": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            },
            "snow": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            },
            "wind": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            }
          }
        },
        "tilt": {
          "type": "number"
        },
        "tracker": {
          "type": "object",
          "properties": {
            "dataName": {
              "type": "string"
            },
            "hid": {
              "type": "number"
            }
          }
        },
        "trackerOptions": {
          "type": "object",
          "properties": {}
        },
        "tracking": {
          "type": "number"
        }
      }
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

## Weather Station (functionCode: 5)

```json
{
  "type": "object",
  "properties": {
    "additionalRegisters": {
      "type": "object",
      "properties": {
        "archive": {
          "type": "number"
        },
        "dataName": {
          "type": "string"
        },
        "dataType": {
          "type": "number"
        },
        "dbDataType": {
          "type": "number"
        },
        "flags": {
          "type": "object",
          "properties": {
            "broadcastFlag": {
              "type": "boolean"
            },
            "derivativeFlag": {
              "type": "boolean"
            },
            "energyFlag": {
              "type": "boolean"
            },
            "integralFlag": {
              "type": "boolean"
            },
            "nonZeroFlag": {
              "type": "boolean"
            },
            "powerFlag": {
              "type": "boolean"
            },
            "previousFlag": {
              "type": "boolean"
            },
            "serialNumberFlag": {
              "type": "boolean"
            },
            "wordSwapFlag": {
              "type": "boolean"
            }
          }
        },
        "format": {
          "type": "string"
        },
        "index": {
          "type": "number"
        },
        "mode": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "params": {
          "type": "string"
        },
        "read": {
          "type": "number"
        },
        "register": {
          "type": "string"
        },
        "scale": {
          "type": "string"
        },
        "storeAggregate": {
          "type": "boolean"
        },
        "storeRaw": {
          "type": "boolean"
        },
        "units": {
          "type": "number"
        },
        "write": {
          "type": "number"
        }
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
    "energyCapacity": {
      "type": "number"
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
    "installedKva": {
      "type": "number"
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
    "parity": {
      "type": "number"
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
          "type": "number"
        },
        "type": {
          "type": "number"
        },
        "value": {
          "type": "number"
        }
      }
    },
    "siteDcShare": {
      "type": "number"
    },
    "siteHasHybridInverterGroups": {
      "type": "boolean"
    },
    "siteHasInverterGroups": {
      "type": "boolean"
    },
    "sort": {
      "type": "number"
    },
    "stopBits": {
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
      "properties": {
        "azimuth": {
          "type": "number"
        },
        "hasPyranometer": {
          "type": "boolean"
        },
        "hasRefPyranometer": {
          "type": "boolean"
        },
        "insolationType": {
          "type": "number"
        },
        "interpolateDailyInsolation": {
          "type": "boolean"
        },
        "isPyranometerHigh": {
          "type": "boolean"
        },
        "isRefPyranometerHigh": {
          "type": "boolean"
        },
        "maxTempF": {
          "type": "number"
        },
        "minTempF": {
          "type": "number"
        },
        "monthlyInsolation": {
          "type": "object",
          "properties": {
            "apr": {
              "type": "number"
            },
            "aug": {
              "type": "number"
            },
            "dec": {
              "type": "number"
            },
            "feb": {
              "type": "number"
            },
            "jan": {
              "type": "number"
            },
            "jul": {
              "type": "number"
            },
            "jun": {
              "type": "number"
            },
            "mar": {
              "type": "number"
            },
            "may": {
              "type": "number"
            },
            "nov": {
              "type": "number"
            },
            "oct": {
              "type": "number"
            },
            "sep": {
              "type": "number"
            }
          }
        },
        "pyranometerData": {
          "type": "object",
          "properties": {}
        },
        "pyranometerUnit": {
          "type": "number"
        },
        "refPyranometerData": {
          "type": "string"
        },
        "refPyranometerUnit": {
          "type": "number"
        },
        "sensors": {
          "type": "object",
          "properties": {
            "ambientTemp": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            },
            "barometer": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            },
            "humidity": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            },
            "panelTemp1": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            },
            "panelTemp2": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            },
            "pyranometer1": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            },
            "pyranometer2": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            },
            "pyrheliometer": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            },
            "rain": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            },
            "snow": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            },
            "wind": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            }
          }
        },
        "tilt": {
          "type": "number"
        },
        "tracker": {
          "type": "object",
          "properties": {
            "dataName": {
              "type": "string"
            },
            "hid": {
              "type": "number"
            }
          }
        },
        "trackerOptions": {
          "type": "object",
          "properties": {}
        },
        "tracking": {
          "type": "number"
        }
      }
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
ae_v: ac3a35
referer: https://apps.alsoenergy.com/powertrack/H266279/administration/config
```

**Payload:**

```json
{
  "additionalRegisters": [
    {
      "archive": 0,
      "dataName": "Windraw",
      "dataType": 19,
      "dbDataType": 2,
      "flags": {
        "broadcastFlag": false,
        "derivativeFlag": false,
        "energyFlag": false,
        "integralFlag": false,
        "nonZeroFlag": false,
        "powerFlag": false,
        "previousFlag": false,
        "serialNumberFlag": false,
        "wordSwapFlag": false
      },
      "format": "",
      "index": 0,
      "mode": 9,
      "name": "Wind speed",
      "params": "",
      "read": 3,
      "register": "25",
      "scale": "",
      "storeAggregate": true,
      "storeRaw": true,
      "units": 0,
      "write": 0
    }
  ],
  "address": "16",
  "alsoHardwareId": 0,
  "alsoSiteId": 0,
  "array": null,
  "assetId": "",
  "autoCorrectDecrease": true,
  "autoCorrectIncrease": false,
  "baud": "9600",
  "capacityKw": 0,
  "chartSectionCode": 4,
  "commonDC": false,
  "commonDCAllMatch": true,
  "configs": [
    "Weather"
  ],
  "conflictNames": null,
  "dashboardKey": "",
  "dcRating": 0,
  "debug": false,
  "decreaseDifference": 100,
  "defaultChart": 21,
  "description": "Weather Station (GHI, Mod, & Wind)",
  "deviceRegisters": [
    {
      "dataName": "WindDirection",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Wind Direction",
      "name": "Wind Direction",
      "standardDataName": "Wind_Direction",
      "units": "°"
    },
    {
      "dataName": "Sun2",
      "dataNameDetail": null,
      "index": 1,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Global Horizontal Irradiance (with Offset)",
      "name": "Sun (GHI)",
      "standardDataName": "GHI_Irradiance",
      "units": "W/m²"
    },
    {
      "dataName": "Sun",
      "dataNameDetail": null,
      "index": 2,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Plane of Array Irradiation (with Offset)",
      "name": "Sun (POA)",
      "standardDataName": "",
      "units": "W/m²"
    },
    {
      "dataName": "TempF",
      "dataNameDetail": null,
      "index": 3,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Ambient Air Temperature",
      "name": "Ambient temp",
      "standardDataName": "Temp_Ambient",
      "units": "°F"
    },
    {
      "dataName": "Temp2",
      "dataNameDetail": null,
      "index": 4,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Module temperature 2",
      "name": "Module temp 2",
      "standardDataName": "",
      "units": "°F"
    },
    {
      "dataName": "Temp1",
      "dataNameDetail": null,
      "index": 5,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Module Temperature",
      "name": "Module temp",
      "standardDataName": "",
      "units": "°F"
    },
    {
      "dataName": "WindSpeed",
      "dataNameDetail": null,
      "index": 6,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Wind Speed",
      "name": "Wind speed",
      "standardDataName": "Wind_Speed",
      "units": "mph"
    },
    {
      "dataName": "Temp_Cabinet_High",
      "dataNameDetail": null,
      "index": 7,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "CabHigh",
      "name": "CabHigh",
      "standardDataName": "Temp_Cabinet_High",
      "units": ""
    },
    {
      "dataName": "Temp_Cabinet_Low",
      "dataNameDetail": null,
      "index": 8,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "CabLow",
      "name": "CabLow",
      "standardDataName": "Temp_Cabinet_Low",
      "units": ""
    },
    {
      "dataName": "CabF",
      "dataNameDetail": null,
      "index": 9,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Cabinet Temperature",
      "name": "CabF",
      "standardDataName": "Temp_Cabinet",
      "units": "°F"
    },
    {
      "dataName": "MaxSun",
      "dataNameDetail": null,
      "index": 10,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Max Sun (POA)",
      "name": "Max Sun (POA)",
      "standardDataName": "",
      "units": "W/m²"
    },
    {
      "dataName": "MaxSun2",
      "dataNameDetail": null,
      "index": 11,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Max Sun (GHI)",
      "name": "Max Sun (GHI)",
      "standardDataName": "",
      "units": "W/m²"
    },
    {
      "dataName": "Windraw",
      "dataNameDetail": null,
      "index": 12,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Wind Speed",
      "name": "Wind speed",
      "standardDataName": "",
      "units": ""
    }
  ],
  "driverDescription": "1 pyranometer, Wind speed/dir, Ambient and Module",
  "driverFlags": 65,
  "driverId": 8164,
  "driverName": "AE Integrated WS Standard (FW 114+) (Qualified)",
  "driverNotes": "* denotes standard WS\r\r\"Wind or Extra Pyranometer\"  \rP2 = W*(Wind Dir) A(Apogee) K(Kipp) L(LiCor LI-200SL)\r\r\"First Pyranometer Type\"       \rP1 = A*(Apogee) K(Kipp) L(LiCor LI-200SL)\r\r\"Ambient or Dual Module\"      \rT1 = 1*(Ambient) 0(Module 2)\r\r\"Temp Sensor Type Ambient\"\rTR1 = S*(Standard) H(High Temp) A(AlsoEnergy) W(Wide)\r\r\"Temp Sensor Type Module\"\rTR2 = S*(Standard) H(High Temp) P(Precise) W(Wide) HH(high special)\r\rSwap GHI and POA\rSWAP = 1",
  "driverRegisters": [
    {
      "dataName": "WindDirection",
      "dataNameDetail": {
        "dataName": "WindDirection",
        "dataNameDescription": "",
        "description": "Wind direction (Equivalent: WindDirection)",
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
          "otherAliasPTDataNameValues": "Wind_Direction",
          "otherAliasPTDataNames": [
            98
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 0
        },
        "equivalent": 129,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          98
        ],
        "registerDataNameIdentifier": 129,
        "registerName": "Wind direction",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Wind Direction",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Sun2",
      "dataNameDetail": {
        "dataName": "Sun2",
        "dataNameDescription": "",
        "description": "GHI (Equivalent: Sun2)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 115,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "GHI_Irradiance",
          "otherAliasPTDataNames": [
            74
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 57
        },
        "equivalent": 115,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          74
        ],
        "registerDataNameIdentifier": 114,
        "registerName": "GHI",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Sun (GHI)",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Sun",
      "dataNameDetail": {
        "dataName": "Sun",
        "dataNameDescription": "",
        "description": "Irradiance (any orientation) (Equivalent: Sun)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 117,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "POA_Irradiance,Irradiance",
          "otherAliasPTDataNames": [
            84,
            113
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 57
        },
        "equivalent": 117,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          84,
          113
        ],
        "registerDataNameIdentifier": 108,
        "registerName": "Irradiance (any orientation)",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Sun (POA)",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "TempF",
      "dataNameDetail": {
        "dataName": "TempF",
        "dataNameDescription": "",
        "description": "Ambient temperature (Equivalent: TempF)",
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
          "otherAliasPTDataNameValues": "Ambient,Temp_Ambient",
          "otherAliasPTDataNames": [
            103,
            63
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 30
        },
        "equivalent": 102,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          103,
          63
        ],
        "registerDataNameIdentifier": 102,
        "registerName": "Ambient temperature",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Ambient temp",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Temp2",
      "dataNameDetail": {
        "dataName": "Temp_",
        "dataNameDescription": "",
        "description": "Device temperature (specify channel) (Equivalent: Temp_)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "1",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "Temp_Module_,ModTemp_",
          "otherAliasPTDataNames": [
            81,
            82
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 30
        },
        "equivalent": 174,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          81,
          82
        ],
        "registerDataNameIdentifier": 174,
        "registerName": "Device temperature (specify channel)",
        "registerSetsArrayDisplayedName": "Device temperature (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Module temp 2",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Temp1",
      "dataNameDetail": {
        "dataName": "Temp1",
        "dataNameDescription": "",
        "description": "Module Temperature (Equivalent: Temp1)",
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
          "otherAliasPTDataNameValues": "Temp_Module,ModTemp,Temp_BOM",
          "otherAliasPTDataNames": [
            80,
            106,
            465
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 30
        },
        "equivalent": 105,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          80,
          106,
          465
        ],
        "registerDataNameIdentifier": 105,
        "registerName": "Module Temperature",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Module temp",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "WindSpeed",
      "dataNameDetail": {
        "dataName": "WindSpeed",
        "dataNameDescription": "",
        "description": "Wind speed (Equivalent: WindSpeed)",
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
          "otherAliasPTDataNameValues": "Wind_Speed",
          "otherAliasPTDataNames": [
            100
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 0
        },
        "equivalent": 127,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          100
        ],
        "registerDataNameIdentifier": 127,
        "registerName": "Wind speed",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Wind speed",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Temp_Cabinet_High",
      "dataNameDetail": {
        "dataName": "Temp_Cabinet_High",
        "dataNameDescription": "Highest temperature sensor reading inside the equipment cabinet",
        "description": "Cabinet Temperature High (Equivalent: Temp_Cabinet_High)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [
            5
          ],
          "functions": "WS",
          "isFloat": true,
          "isStandardDataName": true,
          "isStatus": false,
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 30
        },
        "equivalent": 68,
        "errors": [],
        "functionCodes": [
          5
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 68,
            "dataNameAndType": "Temp_Cabinet_High (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          }
        ],
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [],
        "registerDataNameIdentifier": 68,
        "registerName": "Cabinet Temperature High",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": true
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "CabHigh",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Temp_Cabinet_Low",
      "dataNameDetail": {
        "dataName": "Temp_Cabinet_Low",
        "dataNameDescription": "Lowest temperature sensor reading inside the equipment cabinet",
        "description": "Cabinet Temperature Low (Equivalent: Temp_Cabinet_Low)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [
            5
          ],
          "functions": "WS",
          "isFloat": true,
          "isStandardDataName": true,
          "isStatus": false,
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 30
        },
        "equivalent": 69,
        "errors": [],
        "functionCodes": [
          5
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 69,
            "dataNameAndType": "Temp_Cabinet_Low (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          }
        ],
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [],
        "registerDataNameIdentifier": 69,
        "registerName": "Cabinet Temperature Low",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": true
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "CabLow",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "CabF",
      "dataNameDetail": {
        "dataName": "CabF",
        "dataNameDescription": "",
        "description": "Cabinet temperature (Equivalent: CabF)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 67,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 30
        },
        "equivalent": 67,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [],
        "registerDataNameIdentifier": 107,
        "registerName": "Cabinet temperature",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "CabF",
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
      "name": "Status",
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
      "name": "Firmware Version",
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
      "name": "P2&P6 Status (Ambient or Module Temp 2)",
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
      "name": "P1&P4 Status (Module Temp 1)",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "MaxSun",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Max Sun (POA)",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "MaxSun2",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Max Sun (GHI)",
      "standardDataName": "",
      "units": ""
    }
  ],
  "eGauge": null,
  "energyCapacity": 0,
  "fixedEnergyOffset": 0,
  "functionCode": 5,
  "functionId": "WS0",
  "gateway": null,
  "gatewayFwVersion": "",
  "gatewayId": "000CC68684D2",
  "gatewayKey": "",
  "gatewayScriptCount": "",
  "gatewayType": 2,
  "groupAllowed": [],
  "groupKey": "",
  "hardwareId": "C16293_S54600_WS0",
  "hardwareStatus": 2,
  "hasCapacity": false,
  "hash": "",
  "increaseDifference": -1,
  "installDate": "2020-09-07",
  "installedKva": 0,
  "instance": 0,
  "inverterKw": 0,
  "isConflictAcknowledged": false,
  "isReportable": false,
  "isTcp": false,
  "isThermal": false,
  "key": "H266279",
  "kiosk": null,
  "latitude": 39.223524,
  "limitedCommunication": false,
  "locusId": "",
  "longitude": -76.4723606,
  "meter": null,
  "modelNum": "",
  "newNote": null,
  "oneMinuteData": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2026-10-21T17:18:16.8771327Z",
  "outputAllowed": [],
  "outputKey": "",
  "parentKey": "S54600",
  "parity": 0,
  "port": 2,
  "primary": false,
  "pullData": false,
  "pvConfig": null,
  "readOnly": false,
  "registerOffsets": [],
  "reportExclude": false,
  "reverse": false,
  "sampleRate": 0,
  "serialMode": 2,
  "serialNum": "7807",
  "settings": [
    {
      "index": 0,
      "name": "MinTemp",
      "originalValue": -30,
      "type": 2,
      "value": -30
    },
    {
      "index": 1,
      "name": "MaxTemp",
      "originalValue": 160,
      "type": 2,
      "value": 160
    },
    {
      "index": 2,
      "name": "weather",
      "originalValue": 1057,
      "type": 1,
      "value": 1057
    },
    {
      "index": 3,
      "name": "dev:P1",
      "originalValue": "K",
      "type": 0,
      "value": "K"
    },
    {
      "index": 4,
      "name": "dev:P2",
      "originalValue": "W",
      "type": 0,
      "value": "W"
    },
    {
      "index": 5,
      "name": "dev:K1",
      "originalValue": "10.10",
      "type": 0,
      "value": "10.10"
    },
    {
      "index": 6,
      "name": "dev:K2",
      "originalValue": "10.10",
      "type": 0,
      "value": "10.10"
    },
    {
      "index": 7,
      "name": "dev:T1",
      "originalValue": "1",
      "type": 0,
      "value": "1"
    },
    {
      "index": 8,
      "name": "dev:TR1",
      "originalValue": "S",
      "type": 0,
      "value": "S"
    },
    {
      "index": 9,
      "name": "dev:TR2",
      "originalValue": "W",
      "type": 0,
      "value": "W"
    },
    {
      "index": 10,
      "name": "dev:SWAP",
      "originalValue": "1",
      "type": 0,
      "value": "1"
    },
    {
      "index": 11,
      "name": "dev:portMode",
      "originalValue": "rs485",
      "type": 0,
      "value": "rs485"
    },
    {
      "index": 12,
      "name": "dev:baud",
      "originalValue": 9600,
      "type": 1,
      "value": 9600
    }
  ],
  "siteDcShare": 0,
  "siteHasHybridInverterGroups": false,
  "siteHasInverterGroups": false,
  "sort": 91,
  "stopBits": 1,
  "syncToLocus": false,
  "tags": {
    "attributes": [],
    "key": "{\"ancestorKey\":\"H266279\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
    "keywords": [],
    "lastChanged": null,
    "notes": [],
    "powerDisplays": []
  },
  "taskKey": "",
  "thermal": null,
  "thread": 0,
  "ts": "2026-02-03T00:44:27Z",
  "turbine": null,
  "unitId": 0,
  "uploadRate": 0,
  "validatedByKey": "",
  "validatedDateTime": "0001-01-01T00:00:00",
  "virtualRegisters": [],
  "virtualWeather": null,
  "weather": {
    "azimuth": 180,
    "hasPyranometer": false,
    "hasRefPyranometer": true,
    "insolationType": 1,
    "interpolateDailyInsolation": true,
    "isPyranometerHigh": false,
    "isRefPyranometerHigh": false,
    "maxTempF": 160,
    "minTempF": -30,
    "monthlyInsolation": {
      "apr": 150.2,
      "aug": 167.9,
      "dec": 55.9,
      "feb": 81.4,
      "jan": 63.1,
      "jul": 192.8,
      "jun": 189.8,
      "mar": 124.4,
      "may": 178,
      "nov": 70.7,
      "oct": 100.5,
      "sep": 131.5
    },
    "pyranometerData": null,
    "pyranometerUnit": 0,
    "refPyranometerData": "NaN",
    "refPyranometerUnit": 57,
    "sensors": {
      "ambientTemp": {
        "isAllowed": true,
        "isChecked": true
      },
      "barometer": {
        "isAllowed": false,
        "isChecked": false
      },
      "humidity": {
        "isAllowed": false,
        "isChecked": false
      },
      "panelTemp1": {
        "isAllowed": true,
        "isChecked": false
      },
      "panelTemp2": {
        "isAllowed": true,
        "isChecked": false
      },
      "pyranometer1": {
        "isAllowed": true,
        "isChecked": false
      },
      "pyranometer2": {
        "isAllowed": true,
        "isChecked": true
      },
      "pyrheliometer": {
        "isAllowed": false,
        "isChecked": false
      },
      "rain": {
        "isAllowed": false,
        "isChecked": false
      },
      "snow": {
        "isAllowed": false,
        "isChecked": false
      },
      "wind": {
        "isAllowed": true,
        "isChecked": true
      }
    },
    "tilt": 15,
    "tracker": {
      "dataName": "",
      "hid": 0
    },
    "trackerOptions": {},
    "tracking": 0
  },
  "weatherStationKey1": "",
  "weatherStationKey2": "",
  "zone": null
}
```

**Response:**

```json
{
  "additionalRegisters": [
    {
      "archive": 0,
      "dataName": "Windraw",
      "dataType": 19,
      "dbDataType": 2,
      "flags": {
        "broadcastFlag": false,
        "derivativeFlag": false,
        "energyFlag": false,
        "integralFlag": false,
        "nonZeroFlag": false,
        "powerFlag": false,
        "previousFlag": false,
        "serialNumberFlag": false,
        "wordSwapFlag": false
      },
      "format": "",
      "index": 0,
      "mode": 9,
      "name": "Wind speed",
      "params": "",
      "read": 3,
      "register": "25",
      "scale": "",
      "storeAggregate": true,
      "storeRaw": true,
      "units": 0,
      "write": 0
    }
  ],
  "address": "16",
  "alsoHardwareId": 0,
  "alsoSiteId": 0,
  "array": null,
  "assetId": "",
  "autoCorrectDecrease": true,
  "autoCorrectIncrease": false,
  "baud": "9600",
  "capacityKw": 0,
  "chartSectionCode": 4,
  "commonDC": false,
  "commonDCAllMatch": true,
  "configs": [
    "Weather"
  ],
  "conflictNames": null,
  "dashboardKey": "",
  "dcRating": 0,
  "debug": false,
  "decreaseDifference": 100,
  "defaultChart": 21,
  "description": "Weather Station (GHI, Mod, & Wind)",
  "deviceRegisters": [
    {
      "dataName": "WindDirection",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Wind Direction",
      "name": "Wind Direction",
      "standardDataName": "Wind_Direction",
      "units": "°"
    },
    {
      "dataName": "Sun2",
      "dataNameDetail": null,
      "index": 1,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Global Horizontal Irradiance (with Offset)",
      "name": "Sun (GHI)",
      "standardDataName": "GHI_Irradiance",
      "units": "W/m²"
    },
    {
      "dataName": "Sun",
      "dataNameDetail": null,
      "index": 2,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Plane of Array Irradiation (with Offset)",
      "name": "Sun (POA)",
      "standardDataName": "",
      "units": "W/m²"
    },
    {
      "dataName": "TempF",
      "dataNameDetail": null,
      "index": 3,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Ambient Air Temperature",
      "name": "Ambient temp",
      "standardDataName": "Temp_Ambient",
      "units": "°F"
    },
    {
      "dataName": "Temp2",
      "dataNameDetail": null,
      "index": 4,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Module temperature 2",
      "name": "Module temp 2",
      "standardDataName": "",
      "units": "°F"
    },
    {
      "dataName": "Temp1",
      "dataNameDetail": null,
      "index": 5,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Module Temperature",
      "name": "Module temp",
      "standardDataName": "",
      "units": "°F"
    },
    {
      "dataName": "WindSpeed",
      "dataNameDetail": null,
      "index": 6,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Wind Speed",
      "name": "Wind speed",
      "standardDataName": "Wind_Speed",
      "units": "mph"
    },
    {
      "dataName": "Temp_Cabinet_High",
      "dataNameDetail": null,
      "index": 7,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "CabHigh",
      "name": "CabHigh",
      "standardDataName": "Temp_Cabinet_High",
      "units": ""
    },
    {
      "dataName": "Temp_Cabinet_Low",
      "dataNameDetail": null,
      "index": 8,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "CabLow",
      "name": "CabLow",
      "standardDataName": "Temp_Cabinet_Low",
      "units": ""
    },
    {
      "dataName": "CabF",
      "dataNameDetail": null,
      "index": 9,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Cabinet Temperature",
      "name": "CabF",
      "standardDataName": "Temp_Cabinet",
      "units": "°F"
    },
    {
      "dataName": "MaxSun",
      "dataNameDetail": null,
      "index": 10,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Max Sun (POA)",
      "name": "Max Sun (POA)",
      "standardDataName": "",
      "units": "W/m²"
    },
    {
      "dataName": "MaxSun2",
      "dataNameDetail": null,
      "index": 11,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Max Sun (GHI)",
      "name": "Max Sun (GHI)",
      "standardDataName": "",
      "units": "W/m²"
    },
    {
      "dataName": "Windraw",
      "dataNameDetail": null,
      "index": 12,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Wind Speed",
      "name": "Wind speed",
      "standardDataName": "",
      "units": ""
    }
  ],
  "driverDescription": "1 pyranometer, Wind speed/dir, Ambient and Module",
  "driverFlags": 65,
  "driverId": 8164,
  "driverName": "AE Integrated WS Standard (FW 114+) (Qualified)",
  "driverNotes": "* denotes standard WS\r\r\"Wind or Extra Pyranometer\"  \rP2 = W*(Wind Dir) A(Apogee) K(Kipp) L(LiCor LI-200SL)\r\r\"First Pyranometer Type\"       \rP1 = A*(Apogee) K(Kipp) L(LiCor LI-200SL)\r\r\"Ambient or Dual Module\"      \rT1 = 1*(Ambient) 0(Module 2)\r\r\"Temp Sensor Type Ambient\"\rTR1 = S*(Standard) H(High Temp) A(AlsoEnergy) W(Wide)\r\r\"Temp Sensor Type Module\"\rTR2 = S*(Standard) H(High Temp) P(Precise) W(Wide) HH(high special)\r\rSwap GHI and POA\rSWAP = 1",
  "driverRegisters": [],
  "eGauge": null,
  "energyCapacity": 0,
  "fixedEnergyOffset": 0,
  "functionCode": 5,
  "functionId": "WS0",
  "gateway": null,
  "gatewayFwVersion": "",
  "gatewayId": "000CC68684D2",
  "gatewayKey": "",
  "gatewayScriptCount": "",
  "gatewayType": 2,
  "groupAllowed": [],
  "groupKey": "",
  "hardwareId": "C16293_S54600_WS0",
  "hardwareStatus": 2,
  "hasCapacity": false,
  "hash": "",
  "increaseDifference": -1,
  "installDate": "2020-09-07",
  "installedKva": 0,
  "instance": 0,
  "inverterKw": 0,
  "isConflictAcknowledged": false,
  "isReportable": false,
  "isTcp": false,
  "isThermal": false,
  "key": "H266279",
  "kiosk": null,
  "latitude": 39.223524,
  "limitedCommunication": false,
  "locusId": "",
  "longitude": -76.4723606,
  "meter": null,
  "modelNum": "",
  "newNote": "",
  "oneMinuteData": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2026-10-21T17:18:31.4359219Z",
  "outputAllowed": [],
  "outputKey": "",
  "parentKey": "S54600",
  "parity": 0,
  "port": 2,
  "primary": false,
  "pullData": false,
  "pvConfig": null,
  "readOnly": false,
  "registerOffsets": [],
  "reportExclude": false,
  "reverse": false,
  "sampleRate": 0,
  "serialMode": 2,
  "serialNum": "7807",
  "settings": [
    {
      "index": 0,
      "name": "MinTemp",
      "originalValue": -30,
      "type": 2,
      "value": -30
    },
    {
      "index": 1,
      "name": "MaxTemp",
      "originalValue": 160,
      "type": 2,
      "value": 160
    },
    {
      "index": 2,
      "name": "weather",
      "originalValue": 1057,
      "type": 1,
      "value": 1057
    },
    {
      "index": 3,
      "name": "dev:P1",
      "originalValue": "K",
      "type": 0,
      "value": "K"
    },
    {
      "index": 4,
      "name": "dev:P2",
      "originalValue": "W",
      "type": 0,
      "value": "W"
    },
    {
      "index": 5,
      "name": "dev:K1",
      "originalValue": "10.10",
      "type": 0,
      "value": "10.10"
    },
    {
      "index": 6,
      "name": "dev:K2",
      "originalValue": "10.10",
      "type": 0,
      "value": "10.10"
    },
    {
      "index": 7,
      "name": "dev:T1",
      "originalValue": "1",
      "type": 0,
      "value": "1"
    },
    {
      "index": 8,
      "name": "dev:TR1",
      "originalValue": "S",
      "type": 0,
      "value": "S"
    },
    {
      "index": 9,
      "name": "dev:TR2",
      "originalValue": "W",
      "type": 0,
      "value": "W"
    },
    {
      "index": 10,
      "name": "dev:SWAP",
      "originalValue": "1",
      "type": 0,
      "value": "1"
    },
    {
      "index": 11,
      "name": "dev:portMode",
      "originalValue": "rs485",
      "type": 0,
      "value": "rs485"
    },
    {
      "index": 12,
      "name": "dev:baud",
      "originalValue": 9600,
      "type": 1,
      "value": 9600
    }
  ],
  "siteDcShare": 0,
  "siteHasHybridInverterGroups": false,
  "siteHasInverterGroups": false,
  "sort": 91,
  "stopBits": 1,
  "syncToLocus": false,
  "tags": {
    "attributes": [],
    "key": "{\"ancestorKey\":\"H266279\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
    "keywords": [],
    "lastChanged": null,
    "notes": [],
    "powerDisplays": []
  },
  "taskKey": "",
  "thermal": null,
  "thread": 0,
  "ts": "2026-10-21T17:18:29Z",
  "turbine": null,
  "unitId": 0,
  "uploadRate": 0,
  "validatedByKey": "",
  "validatedDateTime": "0001-01-01T00:00:00",
  "virtualRegisters": [],
  "virtualWeather": null,
  "weather": {
    "azimuth": 180,
    "hasPyranometer": false,
    "hasRefPyranometer": true,
    "insolationType": 1,
    "interpolateDailyInsolation": true,
    "isPyranometerHigh": false,
    "isRefPyranometerHigh": false,
    "maxTempF": 160,
    "minTempF": -30,
    "monthlyInsolation": {
      "apr": 150.2,
      "aug": 167.9,
      "dec": 55.9,
      "feb": 81.4,
      "jan": 63.1,
      "jul": 192.8,
      "jun": 189.8,
      "mar": 124.4,
      "may": 178,
      "nov": 70.7,
      "oct": 100.5,
      "sep": 131.5
    },
    "pyranometerData": null,
    "pyranometerUnit": 0,
    "refPyranometerData": "NaN",
    "refPyranometerUnit": 57,
    "sensors": {
      "ambientTemp": {
        "isAllowed": true,
        "isChecked": true
      },
      "barometer": {
        "isAllowed": false,
        "isChecked": false
      },
      "humidity": {
        "isAllowed": false,
        "isChecked": false
      },
      "panelTemp1": {
        "isAllowed": true,
        "isChecked": false
      },
      "panelTemp2": {
        "isAllowed": true,
        "isChecked": false
      },
      "pyranometer1": {
        "isAllowed": true,
        "isChecked": false
      },
      "pyranometer2": {
        "isAllowed": true,
        "isChecked": true
      },
      "pyrheliometer": {
        "isAllowed": false,
        "isChecked": false
      },
      "rain": {
        "isAllowed": false,
        "isChecked": false
      },
      "snow": {
        "isAllowed": false,
        "isChecked": false
      },
      "wind": {
        "isAllowed": true,
        "isChecked": true
      }
    },
    "tilt": 15,
    "tracker": {
      "dataName": "",
      "hid": 0
    },
    "trackerOptions": {},
    "tracking": 0
  },
  "weatherStationKey1": "",
  "weatherStationKey2": "",
  "zone": null
}
```

[Return to top](#top)

