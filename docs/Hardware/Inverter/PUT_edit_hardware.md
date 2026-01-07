<a id="top"></a>
# /api/edit/hardware

[← Back to Index](../logs.md)

**Methods:** PUT  
**Status Codes:** 200  

## Table of Contents

- [Payload Structure](#payload-structure)
- [Inverter (functionCode: 1)](#inverter-functioncode-1)
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
      "type": "number"
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
      "type": "number"
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
      "properties": {
        "acDcType": {
          "type": "number"
        },
        "acInfo": {
          "type": "number"
        },
        "canIntegrateCombiners": {
          "type": "boolean"
        },
        "combinerInputs": {
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
        "degrade": {
          "type": "number"
        },
        "fileAKey": {
          "type": "string"
        },
        "fileBKey": {
          "type": "string"
        },
        "hasIntegratedCombiners": {
          "type": "boolean"
        },
        "inverters": {
          "type": "object",
          "properties": {
            "acLoss": {
              "type": "number"
            },
            "acVoltage": {
              "type": "number"
            },
            "azimuth": {
              "type": "number"
            },
            "bifacialRatio": {
              "type": "number"
            },
            "dcAmps": {
              "type": "number"
            },
            "dcLoss": {
              "type": "number"
            },
            "dcSize": {
              "type": "number"
            },
            "dcVoltage": {
              "type": "number"
            },
            "derate": {
              "type": "number"
            },
            "derateDetail": {
              "type": "boolean"
            },
            "efficiency": {
              "type": "number"
            },
            "efficiencyCurveId": {
              "type": "number"
            },
            "efficiencyCurveModel": {
              "type": "object",
              "properties": {
                "key": {
                  "type": "string"
                },
                "manufacturer": {
                  "type": "string"
                },
                "modelName": {
                  "type": "string"
                },
                "modelType": {
                  "type": "number"
                },
                "pointsList": {
                  "type": "array",
                  "items": {
                    "type": "unknown"
                  }
                },
                "scaleX": {
                  "type": "number"
                },
                "scaleY": {
                  "type": "number"
                }
              }
            },
            "incidenceAngleCurveId": {
              "type": "number"
            },
            "incidenceAngleCurveModel": {
              "type": "object",
              "properties": {
                "key": {
                  "type": "string"
                },
                "manufacturer": {
                  "type": "string"
                },
                "modelName": {
                  "type": "string"
                },
                "modelType": {
                  "type": "number"
                },
                "pointsList": {
                  "type": "array",
                  "items": {
                    "type": "unknown"
                  }
                },
                "scaleX": {
                  "type": "number"
                },
                "scaleY": {
                  "type": "number"
                }
              }
            },
            "installationType": {
              "type": "number"
            },
            "inverterKva": {
              "type": "number"
            },
            "inverterKw": {
              "type": "number"
            },
            "inverterLoss": {
              "type": "number"
            },
            "inverterName": {
              "type": "string"
            },
            "lightInducedDegradation": {
              "type": "number"
            },
            "limitOne": {
              "type": "number"
            },
            "limitTempOne": {
              "type": "number"
            },
            "limitTempTwo": {
              "type": "number"
            },
            "limitTwo": {
              "type": "number"
            },
            "mismatch": {
              "type": "number"
            },
            "moduleArea": {
              "type": "number"
            },
            "mppAmps": {
              "type": "number"
            },
            "mppVoltage": {
              "type": "number"
            },
            "mppWatts": {
              "type": "number"
            },
            "numOfStrings": {
              "type": "number"
            },
            "panelsPerString": {
              "type": "number"
            },
            "pmaxDeviation": {
              "type": "number"
            },
            "pvSystConfig": {
              "type": "object",
              "properties": {
                "cellArea": {
                  "type": "number"
                },
                "cellType": {
                  "type": "number"
                },
                "cellsParallel": {
                  "type": "number"
                },
                "cellsSeries": {
                  "type": "number"
                },
                "impp": {
                  "type": "number"
                },
                "isc": {
                  "type": "number"
                },
                "key": {
                  "type": "string"
                },
                "manufacturer": {
                  "type": "string"
                },
                "model": {
                  "type": "string"
                },
                "muIsc": {
                  "type": "number"
                },
                "muPMax": {
                  "type": "number"
                },
                "rSeries": {
                  "type": "number"
                },
                "rShunt": {
                  "type": "number"
                },
                "rShuntExp": {
                  "type": "number"
                },
                "rShuntGinc": {
                  "type": "number"
                },
                "vmpp": {
                  "type": "number"
                },
                "voc": {
                  "type": "number"
                }
              }
            },
            "pvSystModuleId": {
              "type": "number"
            },
            "pvSystOutOfSync": {
              "type": "boolean"
            },
            "pvUsaConfig": {
              "type": "object",
              "properties": {
                "ambientTemperature": {
                  "type": "number"
                },
                "irradiance": {
                  "type": "number"
                },
                "irradianceSquared": {
                  "type": "number"
                },
                "windSpeed": {
                  "type": "number"
                }
              }
            },
            "regressionFunctionList": {
              "type": "array",
              "items": {
                "type": "unknown"
              }
            },
            "shadeModel": {
              "type": "object",
              "properties": {
                "albedoWeight": {
                  "type": "number"
                },
                "diffuseWeight": {
                  "type": "number"
                },
                "hasInterRowShadeModel": {
                  "type": "number"
                },
                "interRowShadeModel": {
                  "type": "object",
                  "properties": {
                    "azimuth": {
                      "type": "number"
                    },
                    "panelLength": {
                      "type": "number"
                    },
                    "pitch": {
                      "type": "number"
                    },
                    "rows": {
                      "type": "number"
                    },
                    "tilt": {
                      "type": "number"
                    },
                    "topBorderLength": {
                      "type": "number"
                    }
                  }
                },
                "regions": {
                  "type": "array",
                  "items": {
                    "type": "unknown"
                  }
                }
              }
            },
            "tempCoefficient": {
              "type": "number"
            },
            "tilt": {
              "type": "number"
            },
            "tracking": {
              "type": "number"
            },
            "trackingAngle": {
              "type": "number"
            },
            "transformerLoss": {
              "type": "number"
            },
            "wattsPerPanel": {
              "type": "number"
            }
          }
        },
        "monthlyDerate": {
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
        "monthlyOutput": {
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
        "pvModelType": {
          "type": "number"
        }
      }
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

## Inverter (functionCode: 1)

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
      "type": "number"
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
      "type": "number"
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
      "properties": {
        "acDcType": {
          "type": "number"
        },
        "acInfo": {
          "type": "number"
        },
        "canIntegrateCombiners": {
          "type": "boolean"
        },
        "combinerInputs": {
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
        "degrade": {
          "type": "number"
        },
        "fileAKey": {
          "type": "string"
        },
        "fileBKey": {
          "type": "string"
        },
        "hasIntegratedCombiners": {
          "type": "boolean"
        },
        "inverters": {
          "type": "object",
          "properties": {
            "acLoss": {
              "type": "number"
            },
            "acVoltage": {
              "type": "number"
            },
            "azimuth": {
              "type": "number"
            },
            "bifacialRatio": {
              "type": "number"
            },
            "dcAmps": {
              "type": "number"
            },
            "dcLoss": {
              "type": "number"
            },
            "dcSize": {
              "type": "number"
            },
            "dcVoltage": {
              "type": "number"
            },
            "derate": {
              "type": "number"
            },
            "derateDetail": {
              "type": "boolean"
            },
            "efficiency": {
              "type": "number"
            },
            "efficiencyCurveId": {
              "type": "number"
            },
            "efficiencyCurveModel": {
              "type": "object",
              "properties": {
                "key": {
                  "type": "string"
                },
                "manufacturer": {
                  "type": "string"
                },
                "modelName": {
                  "type": "string"
                },
                "modelType": {
                  "type": "number"
                },
                "pointsList": {
                  "type": "array",
                  "items": {
                    "type": "unknown"
                  }
                },
                "scaleX": {
                  "type": "number"
                },
                "scaleY": {
                  "type": "number"
                }
              }
            },
            "incidenceAngleCurveId": {
              "type": "number"
            },
            "incidenceAngleCurveModel": {
              "type": "object",
              "properties": {
                "key": {
                  "type": "string"
                },
                "manufacturer": {
                  "type": "string"
                },
                "modelName": {
                  "type": "string"
                },
                "modelType": {
                  "type": "number"
                },
                "pointsList": {
                  "type": "array",
                  "items": {
                    "type": "unknown"
                  }
                },
                "scaleX": {
                  "type": "number"
                },
                "scaleY": {
                  "type": "number"
                }
              }
            },
            "installationType": {
              "type": "number"
            },
            "inverterKva": {
              "type": "number"
            },
            "inverterKw": {
              "type": "number"
            },
            "inverterLoss": {
              "type": "number"
            },
            "inverterName": {
              "type": "string"
            },
            "lightInducedDegradation": {
              "type": "number"
            },
            "limitOne": {
              "type": "number"
            },
            "limitTempOne": {
              "type": "number"
            },
            "limitTempTwo": {
              "type": "number"
            },
            "limitTwo": {
              "type": "number"
            },
            "mismatch": {
              "type": "number"
            },
            "moduleArea": {
              "type": "number"
            },
            "mppAmps": {
              "type": "number"
            },
            "mppVoltage": {
              "type": "number"
            },
            "mppWatts": {
              "type": "number"
            },
            "numOfStrings": {
              "type": "number"
            },
            "panelsPerString": {
              "type": "number"
            },
            "pmaxDeviation": {
              "type": "number"
            },
            "pvSystConfig": {
              "type": "object",
              "properties": {
                "cellArea": {
                  "type": "number"
                },
                "cellType": {
                  "type": "number"
                },
                "cellsParallel": {
                  "type": "number"
                },
                "cellsSeries": {
                  "type": "number"
                },
                "impp": {
                  "type": "number"
                },
                "isc": {
                  "type": "number"
                },
                "key": {
                  "type": "string"
                },
                "manufacturer": {
                  "type": "string"
                },
                "model": {
                  "type": "string"
                },
                "muIsc": {
                  "type": "number"
                },
                "muPMax": {
                  "type": "number"
                },
                "rSeries": {
                  "type": "number"
                },
                "rShunt": {
                  "type": "number"
                },
                "rShuntExp": {
                  "type": "number"
                },
                "rShuntGinc": {
                  "type": "number"
                },
                "vmpp": {
                  "type": "number"
                },
                "voc": {
                  "type": "number"
                }
              }
            },
            "pvSystModuleId": {
              "type": "number"
            },
            "pvSystOutOfSync": {
              "type": "boolean"
            },
            "pvUsaConfig": {
              "type": "object",
              "properties": {
                "ambientTemperature": {
                  "type": "number"
                },
                "irradiance": {
                  "type": "number"
                },
                "irradianceSquared": {
                  "type": "number"
                },
                "windSpeed": {
                  "type": "number"
                }
              }
            },
            "regressionFunctionList": {
              "type": "array",
              "items": {
                "type": "unknown"
              }
            },
            "shadeModel": {
              "type": "object",
              "properties": {
                "albedoWeight": {
                  "type": "number"
                },
                "diffuseWeight": {
                  "type": "number"
                },
                "hasInterRowShadeModel": {
                  "type": "number"
                },
                "interRowShadeModel": {
                  "type": "object",
                  "properties": {
                    "azimuth": {
                      "type": "number"
                    },
                    "panelLength": {
                      "type": "number"
                    },
                    "pitch": {
                      "type": "number"
                    },
                    "rows": {
                      "type": "number"
                    },
                    "tilt": {
                      "type": "number"
                    },
                    "topBorderLength": {
                      "type": "number"
                    }
                  }
                },
                "regions": {
                  "type": "array",
                  "items": {
                    "type": "unknown"
                  }
                }
              }
            },
            "tempCoefficient": {
              "type": "number"
            },
            "tilt": {
              "type": "number"
            },
            "tracking": {
              "type": "number"
            },
            "trackingAngle": {
              "type": "number"
            },
            "transformerLoss": {
              "type": "number"
            },
            "wattsPerPanel": {
              "type": "number"
            }
          }
        },
        "monthlyDerate": {
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
        "monthlyOutput": {
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
        "pvModelType": {
          "type": "number"
        }
      }
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
PUT /api/edit/hardware
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H511568/administration/config
```

**Payload:**

```json
{
  "additionalRegisters": [],
  "address": "192.168.13.51",
  "alsoHardwareId": 0,
  "alsoSiteId": 0,
  "array": null,
  "assetId": "",
  "autoCorrectDecrease": false,
  "autoCorrectIncrease": false,
  "baud": "",
  "capacityKw": 62.5,
  "chartSectionCode": 1,
  "commonDC": false,
  "commonDCAllMatch": true,
  "configs": [
    "Pv"
  ],
  "conflictNames": null,
  "dashboardKey": "",
  "dcRating": 8720,
  "debug": false,
  "decreaseDifference": 100,
  "defaultChart": 2,
  "description": "INVERTER 1",
  "deviceRegisters": [
    {
      "dataName": "KwhAC",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Net (with Offset)",
      "name": "Active Energy Net",
      "standardDataName": "Active_Energy_Gross",
      "units": "kWh"
    },
    {
      "dataName": "KwAC",
      "dataNameDetail": null,
      "index": 1,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power",
      "name": "Active Power",
      "standardDataName": "Active_Power",
      "units": "kW"
    },
    {
      "dataName": "Active_Power_A",
      "dataNameDetail": null,
      "index": 2,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power A",
      "name": "Active Power A",
      "standardDataName": "Active_Power_A",
      "units": "kW"
    },
    {
      "dataName": "Active_Power_B",
      "dataNameDetail": null,
      "index": 3,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power B",
      "name": "Active Power B",
      "standardDataName": "Active_Power_B",
      "units": "kW"
    },
    {
      "dataName": "Active_Power_C",
      "dataNameDetail": null,
      "index": 4,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power C",
      "name": "Active Power C",
      "standardDataName": "Active_Power_C",
      "units": "kW"
    },
    {
      "dataName": "VacA",
      "dataNameDetail": null,
      "index": 5,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage A (Line-Neutral)",
      "name": "AC Voltage AN",
      "standardDataName": "Voltage_AN",
      "units": "V"
    },
    {
      "dataName": "VacB",
      "dataNameDetail": null,
      "index": 6,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage B (Line-Neutral)",
      "name": "AC Voltage BN",
      "standardDataName": "Voltage_BN",
      "units": "V"
    },
    {
      "dataName": "VacC",
      "dataNameDetail": null,
      "index": 7,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage C (Line-Neutral)",
      "name": "AC Voltage CN",
      "standardDataName": "Voltage_CN",
      "units": "V"
    },
    {
      "dataName": "Iac",
      "dataNameDetail": null,
      "index": 8,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current Average",
      "name": "AC Current Average",
      "standardDataName": "Current_Avg",
      "units": "A"
    },
    {
      "dataName": "IacA",
      "dataNameDetail": null,
      "index": 9,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current A",
      "name": "AC Current A",
      "standardDataName": "Current_A",
      "units": "A"
    },
    {
      "dataName": "IacB",
      "dataNameDetail": null,
      "index": 10,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current B",
      "name": "AC Current B",
      "standardDataName": "Current_B",
      "units": "A"
    },
    {
      "dataName": "IacC",
      "dataNameDetail": null,
      "index": 11,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current C",
      "name": "AC Current C",
      "standardDataName": "Current_C",
      "units": "A"
    },
    {
      "dataName": "Frequency",
      "dataNameDetail": null,
      "index": 12,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Frequency",
      "name": "Frequency",
      "standardDataName": "Frequency",
      "units": "Hz"
    },
    {
      "dataName": "DeviceTemp",
      "dataNameDetail": null,
      "index": 13,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Device Temperature",
      "name": "Device Temperature",
      "standardDataName": "Temp_Device",
      "units": "°F"
    },
    {
      "dataName": "VacAB",
      "dataNameDetail": null,
      "index": 14,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage A-B (Line-Line)",
      "name": "AC Voltage AB",
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
      "name": "AC Voltage BC",
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
      "name": "AC Voltage CA",
      "standardDataName": "Voltage_CA",
      "units": "V"
    },
    {
      "dataName": "Reactive_Power_A",
      "dataNameDetail": null,
      "index": 17,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power A",
      "name": "Reactive Power ",
      "standardDataName": "",
      "units": "kVAR"
    },
    {
      "dataName": "Reactive_Power_B",
      "dataNameDetail": null,
      "index": 18,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power B",
      "name": "Reactive Power B",
      "standardDataName": "",
      "units": "kVAR"
    },
    {
      "dataName": "Reactive_Power_C",
      "dataNameDetail": null,
      "index": 19,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power C",
      "name": "Reactive Power C",
      "standardDataName": "",
      "units": "kVAR"
    },
    {
      "dataName": "KVAR",
      "dataNameDetail": null,
      "index": 20,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power",
      "name": "Reactive Power",
      "standardDataName": "Reactive_Power",
      "units": "kVAR"
    },
    {
      "dataName": "KVA",
      "dataNameDetail": null,
      "index": 21,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Apparent Power",
      "name": "Apparent Power",
      "standardDataName": "Apparent_Power",
      "units": "kVA"
    },
    {
      "dataName": "PowerFactor",
      "dataNameDetail": null,
      "index": 22,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Power Factor",
      "name": "Power Factor",
      "standardDataName": "Power_Factor",
      "units": "PF"
    },
    {
      "dataName": "InternalTemp",
      "dataNameDetail": null,
      "index": 23,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Internal Temperature",
      "name": "Internal Temperature",
      "standardDataName": "Temp_Internal",
      "units": "°F"
    },
    {
      "dataName": "KwhACraw",
      "dataNameDetail": null,
      "index": 24,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Net (without Offset)",
      "name": "Active Energy Net Raw",
      "standardDataName": "",
      "units": "kWh"
    },
    {
      "dataName": "Idc1",
      "dataNameDetail": null,
      "index": 25,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC current 1",
      "name": "DC Current Input 1",
      "standardDataName": "DC_Current1",
      "units": "A"
    },
    {
      "dataName": "Vdc1",
      "dataNameDetail": null,
      "index": 26,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Voltage 1",
      "name": "DC Voltage Input 1",
      "standardDataName": "DC_Voltage1",
      "units": "V"
    },
    {
      "dataName": "KwDC1",
      "dataNameDetail": null,
      "index": 27,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC power 1",
      "name": "DC Power 1",
      "standardDataName": "DC_Power1",
      "units": "kW"
    },
    {
      "dataName": "Idc2",
      "dataNameDetail": null,
      "index": 28,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC current 2",
      "name": "DC Current Input 2",
      "standardDataName": "DC_Current2",
      "units": "A"
    },
    {
      "dataName": "Vdc2",
      "dataNameDetail": null,
      "index": 29,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Voltage 2",
      "name": "DC Voltage Input 2",
      "standardDataName": "DC_Voltage2",
      "units": "V"
    },
    {
      "dataName": "KwDC2",
      "dataNameDetail": null,
      "index": 30,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC power 2",
      "name": "DC Power 2",
      "standardDataName": "DC_Power2",
      "units": "kW"
    },
    {
      "dataName": "Idc3",
      "dataNameDetail": null,
      "index": 31,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC current 3",
      "name": "DC Current Input 3",
      "standardDataName": "DC_Current3",
      "units": "A"
    },
    {
      "dataName": "Vdc3",
      "dataNameDetail": null,
      "index": 32,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Voltage 3",
      "name": "DC Voltage Input 3",
      "standardDataName": "DC_Voltage3",
      "units": "V"
    },
    {
      "dataName": "KwDC3",
      "dataNameDetail": null,
      "index": 33,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC power 3",
      "name": "DC Power 3",
      "standardDataName": "DC_Power3",
      "units": "kW"
    },
    {
      "dataName": "Idc4",
      "dataNameDetail": null,
      "index": 34,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC current 4",
      "name": "DC Current Input 4",
      "standardDataName": "DC_Current4",
      "units": "A"
    },
    {
      "dataName": "Vdc4",
      "dataNameDetail": null,
      "index": 35,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC voltage 4",
      "name": "DC Voltage Input 4",
      "standardDataName": "DC_Voltage4",
      "units": "V"
    },
    {
      "dataName": "KwDC4",
      "dataNameDetail": null,
      "index": 36,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC power 4",
      "name": "DC Power 4",
      "standardDataName": "DC_Power4",
      "units": "kW"
    },
    {
      "dataName": "Idc5",
      "dataNameDetail": null,
      "index": 37,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC current 5",
      "name": "DC Current Input 5",
      "standardDataName": "DC_Current5",
      "units": "A"
    },
    {
      "dataName": "Vdc5",
      "dataNameDetail": null,
      "index": 38,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Voltage 5",
      "name": "DC Voltage Input 5",
      "standardDataName": "DC_Voltage5",
      "units": "V"
    },
    {
      "dataName": "KwDC5",
      "dataNameDetail": null,
      "index": 39,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC power 5",
      "name": "DC Power 5",
      "standardDataName": "DC_Power5",
      "units": "kW"
    },
    {
      "dataName": "Idc6",
      "dataNameDetail": null,
      "index": 40,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC current 6",
      "name": "DC Current Input 6",
      "standardDataName": "DC_Current6",
      "units": "A"
    },
    {
      "dataName": "Vdc6",
      "dataNameDetail": null,
      "index": 41,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Voltage 6",
      "name": "DC Voltage Input 6",
      "standardDataName": "DC_Voltage6",
      "units": "V"
    },
    {
      "dataName": "KwDC6",
      "dataNameDetail": null,
      "index": 42,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC power 6",
      "name": "DC Power 6",
      "standardDataName": "DC_Power6",
      "units": "kW"
    },
    {
      "dataName": "Idc",
      "dataNameDetail": null,
      "index": 43,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Current Total",
      "name": "DC Current Input (total)",
      "standardDataName": "DC_Current_Total",
      "units": "A"
    },
    {
      "dataName": "Vdc",
      "dataNameDetail": null,
      "index": 44,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Voltage Average",
      "name": "DC Voltage Input (average)",
      "standardDataName": "DC_Voltage_Avg",
      "units": "V"
    },
    {
      "dataName": "KwDC",
      "dataNameDetail": null,
      "index": 45,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Power",
      "name": "DC Power (total)",
      "standardDataName": "DC_Power_Total",
      "units": "kW"
    },
    {
      "dataName": "Serial_Number",
      "dataNameDetail": null,
      "index": 46,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Serial Number",
      "name": "Serial Number",
      "standardDataName": "Serial_Number",
      "units": ""
    },
    {
      "dataName": "Fault",
      "dataNameDetail": null,
      "index": 47,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "EventID",
      "name": "EventID",
      "standardDataName": "Fault",
      "units": ""
    },
    {
      "dataName": "Status",
      "dataNameDetail": null,
      "index": 48,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Operating Status",
      "name": "Condition",
      "standardDataName": "Op_Status",
      "units": ""
    },
    {
      "dataName": "Firmware_Version",
      "dataNameDetail": null,
      "index": 49,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Firmware Version",
      "name": "Firmware",
      "standardDataName": "Firmware_Version",
      "units": ""
    }
  ],
  "driverDescription": "Tri-Power Core1 inverter with no Controls",
  "driverFlags": 18434,
  "driverId": 19880,
  "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
  "driverNotes": "Legacy Drivers: 2136, 3227, 566, 707\r\r[06.08.2023 - Sagar]\rUpdated the frequency scaling expression.",
  "driverRegisters": [
    {
      "dataName": "KwhAC",
      "dataNameDetail": {
        "dataName": "KwhAC",
        "description": "Active Energy Gross (Equivalent: KwhAC)",
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
          "otherAliasPTDataNameValues": "Active_Energy_Gross",
          "otherAliasPTDataNames": [
            228
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 11
        },
        "equivalent": 40,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          228
        ],
        "registerDataNameIdentifier": 40,
        "registerName": "Active Energy Gross",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Active Energy Net",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "KwAC",
      "dataNameDetail": {
        "dataName": "KwAC",
        "description": "Active Power (Equivalent: KwAC)",
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
          "otherAliasPTDataNameValues": "KW,Active_Power",
          "otherAliasPTDataNames": [
            2,
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
          2,
          230
        ],
        "registerDataNameIdentifier": 38,
        "registerName": "Active Power",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Active Power",
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
      "name": "Active Power A",
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
      "name": "Active Power B",
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
      "name": "Active Power C",
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
      "name": "AC Voltage AN",
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
      "name": "AC Voltage BN",
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
      "name": "AC Voltage CN",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Iac",
      "dataNameDetail": {
        "dataName": "Iac",
        "description": "AC Current Average (Equivalent: Iac)",
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
          "otherAliasPTDataNameValues": "AC_Current_Avg,Iavg,Current_Avg",
          "otherAliasPTDataNames": [
            345,
            267,
            266
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 4
        },
        "equivalent": 37,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          345,
          267,
          266
        ],
        "registerDataNameIdentifier": 37,
        "registerName": "AC Current Average",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "AC Current Average",
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
      "name": "AC Current A",
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
      "name": "AC Current B",
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
      "name": "AC Current C",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Frequency",
      "dataNameDetail": {
        "dataName": "Frequency",
        "description": "Frequency (Equivalent: Frequency)",
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
            25,
            42,
            47,
            49,
            48,
            45
          ],
          "functions": "PM,GM,CM,XM,SM,PV,BI,BS,BB,PP,MV,HV,BG",
          "isFloat": true,
          "isStandardDataName": true,
          "isStatus": false,
          "otherAliasPTDataNameValues": "Hz,Freq",
          "otherAliasPTDataNames": [
            219,
            221
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 43
        },
        "equivalent": 220,
        "errors": [],
        "functionCodes": [
          2,
          4,
          3,
          20,
          16,
          1,
          39,
          25,
          42,
          47,
          49,
          48,
          45
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 220,
            "dataNameAndType": "Frequency (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          },
          {
            "dataName": 219,
            "dataNameAndType": "Hz (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 2
          },
          {
            "dataName": 221,
            "dataNameAndType": "Freq (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 3
          }
        ],
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [
          219,
          221
        ],
        "registerDataNameIdentifier": 220,
        "registerName": "Frequency",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": true
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Frequency",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "DeviceTemp",
      "dataNameDetail": {
        "dataName": "DeviceTemp",
        "description": "Device Temperature (Equivalent: DeviceTemp)",
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
          "otherAliasPTDataNameValues": "Temp_Device",
          "otherAliasPTDataNames": [
            452
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 30
        },
        "equivalent": 187,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          452
        ],
        "registerDataNameIdentifier": 187,
        "registerName": "Device Temperature",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Device Temperature",
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
      "name": "AC Voltage AB",
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
      "name": "AC Voltage BC",
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
      "name": "AC Voltage CA",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Reactive_Power_A",
      "dataNameDetail": {
        "dataName": "Reactive_Power_A",
        "description": "Reactive Power A (Equivalent: Reactive_Power_A)",
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
          "otherAliasPTDataNameValues": "kvar_a,kvara,VAR_A",
          "otherAliasPTDataNames": [
            314,
            311,
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
        "goldenDriverDataNames": [
          {
            "dataName": 308,
            "dataNameAndType": "Reactive_Power_A (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          },
          {
            "dataName": 314,
            "dataNameAndType": "kvar_a (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 2
          },
          {
            "dataName": 311,
            "dataNameAndType": "kvara (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 3
          },
          {
            "dataName": 318,
            "dataNameAndType": "VAR_A (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 4
          }
        ],
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [
          314,
          311,
          318
        ],
        "registerDataNameIdentifier": 308,
        "registerName": "Reactive Power A",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": true
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Reactive Power ",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Reactive_Power_B",
      "dataNameDetail": {
        "dataName": "Reactive_Power_B",
        "description": "Reactive Power B (Equivalent: Reactive_Power_B)",
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
          "otherAliasPTDataNameValues": "kvar_b,kvarb,VAR_B",
          "otherAliasPTDataNames": [
            315,
            312,
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
        "goldenDriverDataNames": [
          {
            "dataName": 309,
            "dataNameAndType": "Reactive_Power_B (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          },
          {
            "dataName": 315,
            "dataNameAndType": "kvar_b (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 2
          },
          {
            "dataName": 312,
            "dataNameAndType": "kvarb (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 3
          },
          {
            "dataName": 319,
            "dataNameAndType": "VAR_B (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 4
          }
        ],
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [
          315,
          312,
          319
        ],
        "registerDataNameIdentifier": 309,
        "registerName": "Reactive Power B",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": true
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Reactive Power B",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Reactive_Power_C",
      "dataNameDetail": {
        "dataName": "Reactive_Power_C",
        "description": "Reactive Power C (Equivalent: Reactive_Power_C)",
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
          "otherAliasPTDataNameValues": "kvar_c,kvarc,VAR_C",
          "otherAliasPTDataNames": [
            316,
            313,
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
        "goldenDriverDataNames": [
          {
            "dataName": 310,
            "dataNameAndType": "Reactive_Power_C (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          },
          {
            "dataName": 316,
            "dataNameAndType": "kvar_c (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 2
          },
          {
            "dataName": 313,
            "dataNameAndType": "kvarc (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 3
          },
          {
            "dataName": 320,
            "dataNameAndType": "VAR_C (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 4
          }
        ],
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [
          316,
          313,
          320
        ],
        "registerDataNameIdentifier": 310,
        "registerName": "Reactive Power C",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": true
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Reactive Power C",
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
      "dataName": "KVA",
      "dataNameDetail": {
        "dataName": "KVA",
        "description": "Apparent Power (Equivalent: KVA)",
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
          "otherAliasPTDataNameValues": "VA,VAs,Apparent_Power",
          "otherAliasPTDataNames": [
            257,
            258,
            256
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 20
        },
        "equivalent": 6,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          257,
          258,
          256
        ],
        "registerDataNameIdentifier": 6,
        "registerName": "Apparent Power",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Apparent Power",
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
      "name": "Power Factor",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "InternalTemp",
      "dataNameDetail": {
        "dataName": "InternalTemp",
        "description": "Internal Temperature (Equivalent: InternalTemp)",
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
          "otherAliasPTDataNameValues": "InteriorTemp,Temp_Internal",
          "otherAliasPTDataNames": [
            459,
            458
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 30
        },
        "equivalent": 188,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          459,
          458
        ],
        "registerDataNameIdentifier": 188,
        "registerName": "Internal Temperature",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Internal Temperature",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "KwhACraw",
      "dataNameDetail": {
        "dataName": "KwhACraw",
        "description": "Active Energy Net Raw (Equivalent: KwhACraw)",
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
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 11
        },
        "equivalent": 41,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [],
        "registerDataNameIdentifier": 41,
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
      "dataName": "Idc1",
      "dataNameDetail": {
        "dataName": "Idc_",
        "description": "DC Current (specify string/bus/zone/ channel) (Equivalent: Idc_)",
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
          "otherAliasPTDataNameValues": "DC_Current_,ZoneAmps_",
          "otherAliasPTDataNames": [
            365,
            165
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 4
        },
        "equivalent": 50,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          365,
          165
        ],
        "registerDataNameIdentifier": 50,
        "registerName": "DC Current (specify string/bus/zone/ channel)",
        "registerSetsArrayDisplayedName": "DC Current (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "DC Current Input 1",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Vdc1",
      "dataNameDetail": {
        "dataName": "Vdc_",
        "description": "DC Voltage (specify string/bus/zone/ channel) (Equivalent: Vdc_)",
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
          "otherAliasPTDataNameValues": "DC_Voltage_",
          "otherAliasPTDataNames": [
            367
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 2
        },
        "equivalent": 49,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          367
        ],
        "registerDataNameIdentifier": 49,
        "registerName": "DC Voltage (specify string/bus/zone/ channel)",
        "registerSetsArrayDisplayedName": "DC Voltage (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "DC Voltage Input 1",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "KwDC1",
      "dataNameDetail": {
        "dataName": "KwDC_",
        "description": "DC Power (specify string/bus/zone/ channel) (Equivalent: KwDC_)",
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
          "otherAliasPTDataNameValues": "DC_Power_",
          "otherAliasPTDataNames": [
            366
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 10
        },
        "equivalent": 51,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          366
        ],
        "registerDataNameIdentifier": 51,
        "registerName": "DC Power (specify string/bus/zone/ channel)",
        "registerSetsArrayDisplayedName": "DC Power (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "DC Power 1",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Idc2",
      "dataNameDetail": {
        "dataName": "Idc_",
        "description": "DC Current (specify string/bus/zone/ channel) (Equivalent: Idc_)",
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
          "otherAliasPTDataNameValues": "DC_Current_,ZoneAmps_",
          "otherAliasPTDataNames": [
            365,
            165
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 4
        },
        "equivalent": 50,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          365,
          165
        ],
        "registerDataNameIdentifier": 50,
        "registerName": "DC Current (specify string/bus/zone/ channel)",
        "registerSetsArrayDisplayedName": "DC Current (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "DC Current Input 2",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Vdc2",
      "dataNameDetail": {
        "dataName": "Vdc_",
        "description": "DC Voltage (specify string/bus/zone/ channel) (Equivalent: Vdc_)",
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
          "otherAliasPTDataNameValues": "DC_Voltage_",
          "otherAliasPTDataNames": [
            367
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 2
        },
        "equivalent": 49,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          367
        ],
        "registerDataNameIdentifier": 49,
        "registerName": "DC Voltage (specify string/bus/zone/ channel)",
        "registerSetsArrayDisplayedName": "DC Voltage (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "DC Voltage Input 2",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "KwDC2",
      "dataNameDetail": {
        "dataName": "KwDC_",
        "description": "DC Power (specify string/bus/zone/ channel) (Equivalent: KwDC_)",
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
          "otherAliasPTDataNameValues": "DC_Power_",
          "otherAliasPTDataNames": [
            366
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 10
        },
        "equivalent": 51,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          366
        ],
        "registerDataNameIdentifier": 51,
        "registerName": "DC Power (specify string/bus/zone/ channel)",
        "registerSetsArrayDisplayedName": "DC Power (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "DC Power 2",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Idc3",
      "dataNameDetail": {
        "dataName": "Idc_",
        "description": "DC Current (specify string/bus/zone/ channel) (Equivalent: Idc_)",
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
          "otherAliasPTDataNameValues": "DC_Current_,ZoneAmps_",
          "otherAliasPTDataNames": [
            365,
            165
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 4
        },
        "equivalent": 50,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          365,
          165
        ],
        "registerDataNameIdentifier": 50,
        "registerName": "DC Current (specify string/bus/zone/ channel)",
        "registerSetsArrayDisplayedName": "DC Current (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "DC Current Input 3",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Vdc3",
      "dataNameDetail": {
        "dataName": "Vdc_",
        "description": "DC Voltage (specify string/bus/zone/ channel) (Equivalent: Vdc_)",
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
          "otherAliasPTDataNameValues": "DC_Voltage_",
          "otherAliasPTDataNames": [
            367
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 2
        },
        "equivalent": 49,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          367
        ],
        "registerDataNameIdentifier": 49,
        "registerName": "DC Voltage (specify string/bus/zone/ channel)",
        "registerSetsArrayDisplayedName": "DC Voltage (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "DC Voltage Input 3",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "KwDC3",
      "dataNameDetail": {
        "dataName": "KwDC_",
        "description": "DC Power (specify string/bus/zone/ channel) (Equivalent: KwDC_)",
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
          "otherAliasPTDataNameValues": "DC_Power_",
          "otherAliasPTDataNames": [
            366
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 10
        },
        "equivalent": 51,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          366
        ],
        "registerDataNameIdentifier": 51,
        "registerName": "DC Power (specify string/bus/zone/ channel)",
        "registerSetsArrayDisplayedName": "DC Power (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "DC Power 3",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Idc4",
      "dataNameDetail": {
        "dataName": "Idc_",
        "description": "DC Current (specify string/bus/zone/ channel) (Equivalent: Idc_)",
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
          "otherAliasPTDataNameValues": "DC_Current_,ZoneAmps_",
          "otherAliasPTDataNames": [
            365,
            165
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 4
        },
        "equivalent": 50,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          365,
          165
        ],
        "registerDataNameIdentifier": 50,
        "registerName": "DC Current (specify string/bus/zone/ channel)",
        "registerSetsArrayDisplayedName": "DC Current (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "DC Current Input 4",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Vdc4",
      "dataNameDetail": {
        "dataName": "Vdc_",
        "description": "DC Voltage (specify string/bus/zone/ channel) (Equivalent: Vdc_)",
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
          "otherAliasPTDataNameValues": "DC_Voltage_",
          "otherAliasPTDataNames": [
            367
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 2
        },
        "equivalent": 49,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          367
        ],
        "registerDataNameIdentifier": 49,
        "registerName": "DC Voltage (specify string/bus/zone/ channel)",
        "registerSetsArrayDisplayedName": "DC Voltage (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "DC Voltage Input 4",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "KwDC4",
      "dataNameDetail": {
        "dataName": "KwDC_",
        "description": "DC Power (specify string/bus/zone/ channel) (Equivalent: KwDC_)",
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
          "otherAliasPTDataNameValues": "DC_Power_",
          "otherAliasPTDataNames": [
            366
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 10
        },
        "equivalent": 51,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          366
        ],
        "registerDataNameIdentifier": 51,
        "registerName": "DC Power (specify string/bus/zone/ channel)",
        "registerSetsArrayDisplayedName": "DC Power (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "DC Power 4",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Idc5",
      "dataNameDetail": {
        "dataName": "Idc_",
        "description": "DC Current (specify string/bus/zone/ channel) (Equivalent: Idc_)",
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
          "otherAliasPTDataNameValues": "DC_Current_,ZoneAmps_",
          "otherAliasPTDataNames": [
            365,
            165
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 4
        },
        "equivalent": 50,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          365,
          165
        ],
        "registerDataNameIdentifier": 50,
        "registerName": "DC Current (specify string/bus/zone/ channel)",
        "registerSetsArrayDisplayedName": "DC Current (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "DC Current Input 5",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Vdc5",
      "dataNameDetail": {
        "dataName": "Vdc_",
        "description": "DC Voltage (specify string/bus/zone/ channel) (Equivalent: Vdc_)",
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
          "otherAliasPTDataNameValues": "DC_Voltage_",
          "otherAliasPTDataNames": [
            367
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 2
        },
        "equivalent": 49,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          367
        ],
        "registerDataNameIdentifier": 49,
        "registerName": "DC Voltage (specify string/bus/zone/ channel)",
        "registerSetsArrayDisplayedName": "DC Voltage (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "DC Voltage Input 5",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "KwDC5",
      "dataNameDetail": {
        "dataName": "KwDC_",
        "description": "DC Power (specify string/bus/zone/ channel) (Equivalent: KwDC_)",
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
          "otherAliasPTDataNameValues": "DC_Power_",
          "otherAliasPTDataNames": [
            366
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 10
        },
        "equivalent": 51,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          366
        ],
        "registerDataNameIdentifier": 51,
        "registerName": "DC Power (specify string/bus/zone/ channel)",
        "registerSetsArrayDisplayedName": "DC Power (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "DC Power 5",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Idc6",
      "dataNameDetail": {
        "dataName": "Idc_",
        "description": "DC Current (specify string/bus/zone/ channel) (Equivalent: Idc_)",
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
          "otherAliasPTDataNameValues": "DC_Current_,ZoneAmps_",
          "otherAliasPTDataNames": [
            365,
            165
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 4
        },
        "equivalent": 50,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          365,
          165
        ],
        "registerDataNameIdentifier": 50,
        "registerName": "DC Current (specify string/bus/zone/ channel)",
        "registerSetsArrayDisplayedName": "DC Current (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "DC Current Input 6",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Vdc6",
      "dataNameDetail": {
        "dataName": "Vdc_",
        "description": "DC Voltage (specify string/bus/zone/ channel) (Equivalent: Vdc_)",
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
          "otherAliasPTDataNameValues": "DC_Voltage_",
          "otherAliasPTDataNames": [
            367
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 2
        },
        "equivalent": 49,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          367
        ],
        "registerDataNameIdentifier": 49,
        "registerName": "DC Voltage (specify string/bus/zone/ channel)",
        "registerSetsArrayDisplayedName": "DC Voltage (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "DC Voltage Input 6",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "KwDC6",
      "dataNameDetail": {
        "dataName": "KwDC_",
        "description": "DC Power (specify string/bus/zone/ channel) (Equivalent: KwDC_)",
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
          "otherAliasPTDataNameValues": "DC_Power_",
          "otherAliasPTDataNames": [
            366
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 10
        },
        "equivalent": 51,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          366
        ],
        "registerDataNameIdentifier": 51,
        "registerName": "DC Power (specify string/bus/zone/ channel)",
        "registerSetsArrayDisplayedName": "DC Power (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "DC Power 6",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Idc",
      "dataNameDetail": {
        "dataName": "Idc",
        "description": "DC Current (Equivalent: Idc)",
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
          "otherAliasPTDataNameValues": "DC_Current_Total",
          "otherAliasPTDataNames": [
            430
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 4
        },
        "equivalent": 34,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          430
        ],
        "registerDataNameIdentifier": 34,
        "registerName": "DC Current",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "DC Current Input (total)",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Vdc",
      "dataNameDetail": {
        "dataName": "Vdc",
        "description": "DC Voltage (Equivalent: Vdc)",
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
          "otherAliasPTDataNameValues": "DC_Voltage,DC_Voltage_Avg",
          "otherAliasPTDataNames": [
            438,
            439
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 2
        },
        "equivalent": 33,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          438,
          439
        ],
        "registerDataNameIdentifier": 33,
        "registerName": "DC Voltage",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "DC Voltage Input (average)",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "KwDC",
      "dataNameDetail": {
        "dataName": "KwDC",
        "description": "DC Power (Equivalent: KwDC)",
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
          "otherAliasPTDataNameValues": "DC_Power,DC_Power_Total",
          "otherAliasPTDataNames": [
            436,
            437
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 10
        },
        "equivalent": 35,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          436,
          437
        ],
        "registerDataNameIdentifier": 35,
        "registerName": "DC Power",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "DC Power (total)",
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
      "name": "Modbus profile",
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
      "name": "SUSy ID",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Serial_Number",
      "dataNameDetail": {
        "dataName": "Serial_Number",
        "description": "Serial Number (Equivalent: Serial_Number)",
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
            1,
            39,
            40,
            5,
            24,
            7,
            6,
            8,
            43,
            44,
            25,
            42,
            47,
            46,
            45
          ],
          "functions": "PM,GM,CM,XM,SM,PV,BI,DC,WS,ST,SC,SA,SS,BA,RK,BS,BB,PP,FS,BG",
          "isFloat": true,
          "isStandardDataName": true,
          "isStatus": false,
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 0
        },
        "equivalent": 321,
        "errors": [],
        "functionCodes": [
          2,
          4,
          3,
          20,
          16,
          1,
          39,
          40,
          5,
          24,
          7,
          6,
          8,
          43,
          44,
          25,
          42,
          47,
          46,
          45
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 321,
            "dataNameAndType": "Serial_Number (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          }
        ],
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [],
        "registerDataNameIdentifier": 321,
        "registerName": "Serial Number",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Serial Number",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Fault",
      "dataNameDetail": {
        "dataName": "Fault",
        "description": "Fault (Equivalent: Fault)",
        "details": {
          "aCmeter": true,
          "adminHide": false,
          "allowArchiveRaw": true,
          "condense": 1,
          "dCmeter": true,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [
            2,
            4,
            3,
            20,
            16,
            37,
            41,
            1,
            39,
            40,
            24,
            7,
            6,
            8,
            43,
            44,
            25,
            42,
            47,
            50,
            49,
            48,
            46,
            45
          ],
          "functions": "PM,GM,CM,XM,SM,BM,DP,PV,BI,DC,ST,SC,SA,SS,BA,RK,BS,BB,PP,TU,MV,HV,FS,BG",
          "isFloat": false,
          "isStandardDataName": true,
          "isStatus": true,
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 0
        },
        "equivalent": 440,
        "errors": [],
        "functionCodes": [
          2,
          4,
          3,
          20,
          16,
          37,
          41,
          1,
          39,
          40,
          24,
          7,
          6,
          8,
          43,
          44,
          25,
          42,
          47,
          50,
          49,
          48,
          46,
          45
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 440,
            "dataNameAndType": "Fault (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          }
        ],
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [],
        "registerDataNameIdentifier": 440,
        "registerName": "Fault",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": true
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "EventID",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Status",
      "dataNameDetail": {
        "dataName": "Status",
        "description": "Operating Status (Equivalent: Status)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 1,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 447,
          "excludedChannels": "",
          "functionCodes": [
            1,
            39,
            40,
            5,
            24,
            7,
            6,
            8,
            45
          ],
          "functions": "PV,BI,DC,WS,ST,SC,SA,SS,BG",
          "isFloat": false,
          "isStandardDataName": false,
          "isStatus": true,
          "otherAliasPTDataNameValues": "OperatingStatus",
          "otherAliasPTDataNames": [
            448
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 0
        },
        "equivalent": 447,
        "errors": [],
        "functionCodes": [
          1,
          39,
          40,
          5,
          24,
          7,
          6,
          8,
          45
        ],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          448
        ],
        "registerDataNameIdentifier": 202,
        "registerName": "Operating Status",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Condition",
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
      "name": "Grid Contactor",
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
      "name": "Operating Hours",
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
      "name": "Operating State",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Firmware_Version",
      "dataNameDetail": {
        "dataName": "Firmware_Version",
        "description": "Firmware Version (Equivalent: Firmware_Version)",
        "details": {
          "aCmeter": true,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 1,
          "dCmeter": true,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [
            2,
            4,
            3,
            20,
            16,
            37,
            41,
            1,
            39,
            40,
            5,
            24,
            7,
            6,
            8,
            43,
            44,
            25,
            42,
            47,
            49,
            48,
            46,
            45
          ],
          "functions": "PM,GM,CM,XM,SM,BM,DP,PV,BI,DC,WS,ST,SC,SA,SS,BA,RK,BS,BB,PP,MV,HV,FS,BG",
          "isFloat": true,
          "isStandardDataName": true,
          "isStatus": false,
          "otherAliasPTDataNameValues": "FirmwareV",
          "otherAliasPTDataNames": [
            279
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 0
        },
        "equivalent": 280,
        "errors": [],
        "functionCodes": [
          2,
          4,
          3,
          20,
          16,
          37,
          41,
          1,
          39,
          40,
          5,
          24,
          7,
          6,
          8,
          43,
          44,
          25,
          42,
          47,
          49,
          48,
          46,
          45
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 280,
            "dataNameAndType": "Firmware_Version (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          },
          {
            "dataName": 279,
            "dataNameAndType": "FirmwareV (Alias)",
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 2
          }
        ],
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [
          279
        ],
        "registerDataNameIdentifier": 280,
        "registerName": "Firmware Version",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Firmware",
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
      "name": "Firmware for Component",
      "standardDataName": "",
      "units": ""
    }
  ],
  "eGauge": null,
  "fixedEnergyOffset": 0,
  "functionCode": 1,
  "functionId": "PV0",
  "gateway": null,
  "gatewayFwVersion": "",
  "gatewayId": "000CC68FAF30",
  "gatewayKey": "H511564",
  "gatewayScriptCount": "",
  "gatewayType": 7,
  "groupAllowed": [
    28
  ],
  "groupKey": "",
  "hardwareId": "C20909_S68143_PV0",
  "hardwareStatus": 1,
  "hasCapacity": true,
  "hash": "",
  "increaseDifference": -1,
  "installDate": "2024-07-12",
  "instance": 0,
  "inverterKw": 0,
  "isConflictAcknowledged": false,
  "isReportable": true,
  "isTcp": true,
  "isThermal": false,
  "key": "H511568",
  "kiosk": null,
  "latitude": 34.0371297,
  "limitedCommunication": false,
  "locusId": "",
  "longitude": -118.1014776,
  "meter": null,
  "modelNum": "SMA CORE 1 STP62-US-41",
  "newNote": null,
  "oneMinuteData": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2026-01-07T19:04:45.5211723Z",
  "outputAllowed": [
    2
  ],
  "outputKey": "",
  "parentKey": "S68143",
  "port": 0,
  "primary": false,
  "pullData": false,
  "pvConfig": {
    "acDcType": 0,
    "acInfo": 2,
    "canIntegrateCombiners": true,
    "combinerInputs": [
      {
        "name": "Idc1",
        "value": 1
      },
      {
        "name": "Idc2",
        "value": 2
      },
      {
        "name": "Idc3",
        "value": 1
      },
      {
        "name": "Idc4",
        "value": 2
      },
      {
        "name": "Idc5",
        "value": 1
      },
      {
        "name": "Idc6",
        "value": 2
      }
    ],
    "degrade": 0.5,
    "fileAKey": "",
    "fileBKey": "",
    "hasIntegratedCombiners": true,
    "inverters": [
      {
        "acLoss": 0,
        "acVoltage": 480,
        "azimuth": 180,
        "bifacialRatio": 0,
        "dcAmps": 0,
        "dcLoss": 0,
        "dcSize": 8.72,
        "dcVoltage": 1000,
        "derate": 0.9,
        "derateDetail": false,
        "efficiency": 0,
        "efficiencyCurveId": 0,
        "efficiencyCurveModel": {
          "key": "",
          "manufacturer": "",
          "modelName": "",
          "modelType": 0,
          "pointsList": [],
          "scaleX": 0,
          "scaleY": 0
        },
        "incidenceAngleCurveId": 0,
        "incidenceAngleCurveModel": {
          "key": "",
          "manufacturer": "",
          "modelName": "",
          "modelType": 0,
          "pointsList": [],
          "scaleX": 0,
          "scaleY": 0
        },
        "installationType": 2,
        "inverterKva": 0,
        "inverterKw": 62.5,
        "inverterLoss": 0,
        "inverterName": "",
        "lightInducedDegradation": 0,
        "limitOne": 0,
        "limitTempOne": 0,
        "limitTempTwo": 0,
        "limitTwo": 0,
        "mismatch": 0,
        "moduleArea": 0,
        "mppAmps": 13.04,
        "mppVoltage": 41.8,
        "mppWatts": 545.0719999999999,
        "numOfStrings": 9,
        "panelsPerString": 16,
        "pmaxDeviation": 0,
        "pvSystConfig": {
          "cellArea": 166.5,
          "cellType": 0,
          "cellsParallel": 2,
          "cellsSeries": 72,
          "impp": 13.04,
          "isc": 13.92,
          "key": "",
          "manufacturer": "Longi Solar",
          "model": "LR5-72HBD-545M",
          "muIsc": 0.063971119133574,
          "muPMax": -0.34,
          "rSeries": 0.19,
          "rShunt": 241,
          "rShuntExp": 3,
          "rShuntGinc": 3000,
          "vmpp": 41.8,
          "voc": 49.65
        },
        "pvSystModuleId": 937,
        "pvSystOutOfSync": false,
        "pvUsaConfig": {
          "ambientTemperature": 0,
          "irradiance": 0,
          "irradianceSquared": 0,
          "windSpeed": 0
        },
        "regressionFunctionList": [],
        "shadeModel": {
          "albedoWeight": 0,
          "diffuseWeight": 0,
          "hasInterRowShadeModel": 0,
          "interRowShadeModel": {
            "azimuth": 0,
            "panelLength": 0,
            "pitch": 0,
            "rows": 0,
            "tilt": 0,
            "topBorderLength": 0
          },
          "regions": []
        },
        "tempCoefficient": -0.34,
        "tilt": 1,
        "tracking": 0,
        "trackingAngle": 0,
        "transformerLoss": 0,
        "wattsPerPanel": 545
      }
    ],
    "monthlyDerate": {
      "apr": 1,
      "aug": 1,
      "dec": 1,
      "feb": 1,
      "jan": 1,
      "jul": 1,
      "jun": 1,
      "mar": 1,
      "may": 1,
      "nov": 1,
      "oct": 1,
      "sep": 1
    },
    "monthlyOutput": {
      "apr": 0,
      "aug": 0,
      "dec": 0,
      "feb": 0,
      "jan": 0,
      "jul": 0,
      "jun": 0,
      "mar": 0,
      "may": 0,
      "nov": 0,
      "oct": 0,
      "sep": 0
    },
    "pvModelType": 2
  },
  "readOnly": false,
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
  "reportExclude": false,
  "reverse": false,
  "sampleRate": 0,
  "serialMode": 0,
  "serialNum": "1",
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
  "siteDcShare": 75.21000000000001,
  "siteHasInverterGroups": true,
  "sort": 11,
  "syncToLocus": false,
  "tags": {
    "attributes": [],
    "key": "{\"ancestorKey\":\"H511568\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
    "keywords": [],
    "lastChanged": null,
    "notes": [],
    "powerDisplays": []
  },
  "taskKey": "",
  "thermal": null,
  "thread": 0,
  "ts": "2026-01-07T19:04:18Z",
  "turbine": null,
  "unitId": 3,
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
  "address": "192.168.13.51",
  "alsoHardwareId": 0,
  "alsoSiteId": 0,
  "array": null,
  "assetId": "",
  "autoCorrectDecrease": false,
  "autoCorrectIncrease": false,
  "baud": "",
  "capacityKw": 62.5,
  "chartSectionCode": 1,
  "commonDC": false,
  "commonDCAllMatch": true,
  "configs": [
    "Pv"
  ],
  "conflictNames": null,
  "dashboardKey": "",
  "dcRating": 78480,
  "debug": false,
  "decreaseDifference": 100,
  "defaultChart": 2,
  "description": "INVERTER 1",
  "deviceRegisters": [
    {
      "dataName": "KwhAC",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Net (with Offset)",
      "name": "Active Energy Net",
      "standardDataName": "Active_Energy_Gross",
      "units": "kWh"
    },
    {
      "dataName": "KwAC",
      "dataNameDetail": null,
      "index": 1,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power",
      "name": "Active Power",
      "standardDataName": "Active_Power",
      "units": "kW"
    },
    {
      "dataName": "Active_Power_A",
      "dataNameDetail": null,
      "index": 2,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power A",
      "name": "Active Power A",
      "standardDataName": "Active_Power_A",
      "units": "kW"
    },
    {
      "dataName": "Active_Power_B",
      "dataNameDetail": null,
      "index": 3,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power B",
      "name": "Active Power B",
      "standardDataName": "Active_Power_B",
      "units": "kW"
    },
    {
      "dataName": "Active_Power_C",
      "dataNameDetail": null,
      "index": 4,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power C",
      "name": "Active Power C",
      "standardDataName": "Active_Power_C",
      "units": "kW"
    },
    {
      "dataName": "VacA",
      "dataNameDetail": null,
      "index": 5,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage A (Line-Neutral)",
      "name": "AC Voltage AN",
      "standardDataName": "Voltage_AN",
      "units": "V"
    },
    {
      "dataName": "VacB",
      "dataNameDetail": null,
      "index": 6,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage B (Line-Neutral)",
      "name": "AC Voltage BN",
      "standardDataName": "Voltage_BN",
      "units": "V"
    },
    {
      "dataName": "VacC",
      "dataNameDetail": null,
      "index": 7,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage C (Line-Neutral)",
      "name": "AC Voltage CN",
      "standardDataName": "Voltage_CN",
      "units": "V"
    },
    {
      "dataName": "Iac",
      "dataNameDetail": null,
      "index": 8,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current Average",
      "name": "AC Current Average",
      "standardDataName": "Current_Avg",
      "units": "A"
    },
    {
      "dataName": "IacA",
      "dataNameDetail": null,
      "index": 9,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current A",
      "name": "AC Current A",
      "standardDataName": "Current_A",
      "units": "A"
    },
    {
      "dataName": "IacB",
      "dataNameDetail": null,
      "index": 10,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current B",
      "name": "AC Current B",
      "standardDataName": "Current_B",
      "units": "A"
    },
    {
      "dataName": "IacC",
      "dataNameDetail": null,
      "index": 11,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current C",
      "name": "AC Current C",
      "standardDataName": "Current_C",
      "units": "A"
    },
    {
      "dataName": "Frequency",
      "dataNameDetail": null,
      "index": 12,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Frequency",
      "name": "Frequency",
      "standardDataName": "Frequency",
      "units": "Hz"
    },
    {
      "dataName": "DeviceTemp",
      "dataNameDetail": null,
      "index": 13,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Device Temperature",
      "name": "Device Temperature",
      "standardDataName": "Temp_Device",
      "units": "°F"
    },
    {
      "dataName": "VacAB",
      "dataNameDetail": null,
      "index": 14,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage A-B (Line-Line)",
      "name": "AC Voltage AB",
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
      "name": "AC Voltage BC",
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
      "name": "AC Voltage CA",
      "standardDataName": "Voltage_CA",
      "units": "V"
    },
    {
      "dataName": "Reactive_Power_A",
      "dataNameDetail": null,
      "index": 17,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power A",
      "name": "Reactive Power ",
      "standardDataName": "",
      "units": "kVAR"
    },
    {
      "dataName": "Reactive_Power_B",
      "dataNameDetail": null,
      "index": 18,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power B",
      "name": "Reactive Power B",
      "standardDataName": "",
      "units": "kVAR"
    },
    {
      "dataName": "Reactive_Power_C",
      "dataNameDetail": null,
      "index": 19,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power C",
      "name": "Reactive Power C",
      "standardDataName": "",
      "units": "kVAR"
    },
    {
      "dataName": "KVAR",
      "dataNameDetail": null,
      "index": 20,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power",
      "name": "Reactive Power",
      "standardDataName": "Reactive_Power",
      "units": "kVAR"
    },
    {
      "dataName": "KVA",
      "dataNameDetail": null,
      "index": 21,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Apparent Power",
      "name": "Apparent Power",
      "standardDataName": "Apparent_Power",
      "units": "kVA"
    },
    {
      "dataName": "PowerFactor",
      "dataNameDetail": null,
      "index": 22,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Power Factor",
      "name": "Power Factor",
      "standardDataName": "Power_Factor",
      "units": "PF"
    },
    {
      "dataName": "InternalTemp",
      "dataNameDetail": null,
      "index": 23,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Internal Temperature",
      "name": "Internal Temperature",
      "standardDataName": "Temp_Internal",
      "units": "°F"
    },
    {
      "dataName": "KwhACraw",
      "dataNameDetail": null,
      "index": 24,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Net (without Offset)",
      "name": "Active Energy Net Raw",
      "standardDataName": "",
      "units": "kWh"
    },
    {
      "dataName": "Idc1",
      "dataNameDetail": null,
      "index": 25,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC current 1",
      "name": "DC Current Input 1",
      "standardDataName": "DC_Current1",
      "units": "A"
    },
    {
      "dataName": "Vdc1",
      "dataNameDetail": null,
      "index": 26,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Voltage 1",
      "name": "DC Voltage Input 1",
      "standardDataName": "DC_Voltage1",
      "units": "V"
    },
    {
      "dataName": "KwDC1",
      "dataNameDetail": null,
      "index": 27,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC power 1",
      "name": "DC Power 1",
      "standardDataName": "DC_Power1",
      "units": "kW"
    },
    {
      "dataName": "Idc2",
      "dataNameDetail": null,
      "index": 28,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC current 2",
      "name": "DC Current Input 2",
      "standardDataName": "DC_Current2",
      "units": "A"
    },
    {
      "dataName": "Vdc2",
      "dataNameDetail": null,
      "index": 29,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Voltage 2",
      "name": "DC Voltage Input 2",
      "standardDataName": "DC_Voltage2",
      "units": "V"
    },
    {
      "dataName": "KwDC2",
      "dataNameDetail": null,
      "index": 30,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC power 2",
      "name": "DC Power 2",
      "standardDataName": "DC_Power2",
      "units": "kW"
    },
    {
      "dataName": "Idc3",
      "dataNameDetail": null,
      "index": 31,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC current 3",
      "name": "DC Current Input 3",
      "standardDataName": "DC_Current3",
      "units": "A"
    },
    {
      "dataName": "Vdc3",
      "dataNameDetail": null,
      "index": 32,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Voltage 3",
      "name": "DC Voltage Input 3",
      "standardDataName": "DC_Voltage3",
      "units": "V"
    },
    {
      "dataName": "KwDC3",
      "dataNameDetail": null,
      "index": 33,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC power 3",
      "name": "DC Power 3",
      "standardDataName": "DC_Power3",
      "units": "kW"
    },
    {
      "dataName": "Idc4",
      "dataNameDetail": null,
      "index": 34,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC current 4",
      "name": "DC Current Input 4",
      "standardDataName": "DC_Current4",
      "units": "A"
    },
    {
      "dataName": "Vdc4",
      "dataNameDetail": null,
      "index": 35,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC voltage 4",
      "name": "DC Voltage Input 4",
      "standardDataName": "DC_Voltage4",
      "units": "V"
    },
    {
      "dataName": "KwDC4",
      "dataNameDetail": null,
      "index": 36,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC power 4",
      "name": "DC Power 4",
      "standardDataName": "DC_Power4",
      "units": "kW"
    },
    {
      "dataName": "Idc5",
      "dataNameDetail": null,
      "index": 37,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC current 5",
      "name": "DC Current Input 5",
      "standardDataName": "DC_Current5",
      "units": "A"
    },
    {
      "dataName": "Vdc5",
      "dataNameDetail": null,
      "index": 38,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Voltage 5",
      "name": "DC Voltage Input 5",
      "standardDataName": "DC_Voltage5",
      "units": "V"
    },
    {
      "dataName": "KwDC5",
      "dataNameDetail": null,
      "index": 39,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC power 5",
      "name": "DC Power 5",
      "standardDataName": "DC_Power5",
      "units": "kW"
    },
    {
      "dataName": "Idc6",
      "dataNameDetail": null,
      "index": 40,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC current 6",
      "name": "DC Current Input 6",
      "standardDataName": "DC_Current6",
      "units": "A"
    },
    {
      "dataName": "Vdc6",
      "dataNameDetail": null,
      "index": 41,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Voltage 6",
      "name": "DC Voltage Input 6",
      "standardDataName": "DC_Voltage6",
      "units": "V"
    },
    {
      "dataName": "KwDC6",
      "dataNameDetail": null,
      "index": 42,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC power 6",
      "name": "DC Power 6",
      "standardDataName": "DC_Power6",
      "units": "kW"
    },
    {
      "dataName": "Idc",
      "dataNameDetail": null,
      "index": 43,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Current Total",
      "name": "DC Current Input (total)",
      "standardDataName": "DC_Current_Total",
      "units": "A"
    },
    {
      "dataName": "Vdc",
      "dataNameDetail": null,
      "index": 44,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Voltage Average",
      "name": "DC Voltage Input (average)",
      "standardDataName": "DC_Voltage_Avg",
      "units": "V"
    },
    {
      "dataName": "KwDC",
      "dataNameDetail": null,
      "index": 45,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Power",
      "name": "DC Power (total)",
      "standardDataName": "DC_Power_Total",
      "units": "kW"
    },
    {
      "dataName": "Serial_Number",
      "dataNameDetail": null,
      "index": 46,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Serial Number",
      "name": "Serial Number",
      "standardDataName": "Serial_Number",
      "units": ""
    },
    {
      "dataName": "Fault",
      "dataNameDetail": null,
      "index": 47,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "EventID",
      "name": "EventID",
      "standardDataName": "Fault",
      "units": ""
    },
    {
      "dataName": "Status",
      "dataNameDetail": null,
      "index": 48,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Operating Status",
      "name": "Condition",
      "standardDataName": "Op_Status",
      "units": ""
    },
    {
      "dataName": "Firmware_Version",
      "dataNameDetail": null,
      "index": 49,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Firmware Version",
      "name": "Firmware",
      "standardDataName": "Firmware_Version",
      "units": ""
    }
  ],
  "driverDescription": "Tri-Power Core1 inverter with no Controls",
  "driverFlags": 18434,
  "driverId": 19880,
  "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
  "driverNotes": "Legacy Drivers: 2136, 3227, 566, 707\r\r[06.08.2023 - Sagar]\rUpdated the frequency scaling expression.",
  "driverRegisters": [],
  "eGauge": null,
  "fixedEnergyOffset": 0,
  "functionCode": 1,
  "functionId": "PV0",
  "gateway": null,
  "gatewayFwVersion": "",
  "gatewayId": "000CC68FAF30",
  "gatewayKey": "H511564",
  "gatewayScriptCount": "",
  "gatewayType": 7,
  "groupAllowed": [
    28
  ],
  "groupKey": "",
  "hardwareId": "C20909_S68143_PV0",
  "hardwareStatus": 1,
  "hasCapacity": true,
  "hash": "",
  "increaseDifference": -1,
  "installDate": "2024-07-12",
  "instance": 0,
  "inverterKw": 0,
  "isConflictAcknowledged": false,
  "isReportable": true,
  "isTcp": true,
  "isThermal": false,
  "key": "H511568",
  "kiosk": null,
  "latitude": 34.0371297,
  "limitedCommunication": false,
  "locusId": "",
  "longitude": -118.1014776,
  "meter": null,
  "modelNum": "SMA CORE 1 STP62-US-41",
  "newNote": "",
  "oneMinuteData": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2026-01-07T19:05:57.2547324Z",
  "outputAllowed": [
    2
  ],
  "outputKey": "",
  "parentKey": "S68143",
  "port": 0,
  "primary": false,
  "pullData": false,
  "pvConfig": {
    "acDcType": 0,
    "acInfo": 2,
    "canIntegrateCombiners": true,
    "combinerInputs": [
      {
        "name": "Idc1",
        "value": 1
      },
      {
        "name": "Idc2",
        "value": 2
      },
      {
        "name": "Idc3",
        "value": 1
      },
      {
        "name": "Idc4",
        "value": 2
      },
      {
        "name": "Idc5",
        "value": 1
      },
      {
        "name": "Idc6",
        "value": 2
      }
    ],
    "degrade": 0.5,
    "fileAKey": "",
    "fileBKey": "",
    "hasIntegratedCombiners": true,
    "inverters": [
      {
        "acLoss": 0,
        "acVoltage": 480,
        "azimuth": 180,
        "bifacialRatio": 0,
        "dcAmps": 0,
        "dcLoss": 0,
        "dcSize": 78.48,
        "dcVoltage": 1000,
        "derate": 0.9,
        "derateDetail": false,
        "efficiency": 0,
        "efficiencyCurveId": 0,
        "efficiencyCurveModel": {
          "key": "",
          "manufacturer": "",
          "modelName": "",
          "modelType": 0,
          "pointsList": [],
          "scaleX": 0,
          "scaleY": 0
        },
        "incidenceAngleCurveId": 0,
        "incidenceAngleCurveModel": {
          "key": "",
          "manufacturer": "",
          "modelName": "",
          "modelType": 0,
          "pointsList": [],
          "scaleX": 0,
          "scaleY": 0
        },
        "installationType": 2,
        "inverterKva": 0,
        "inverterKw": 62.5,
        "inverterLoss": 0,
        "inverterName": "",
        "lightInducedDegradation": 0,
        "limitOne": 0,
        "limitTempOne": 0,
        "limitTempTwo": 0,
        "limitTwo": 0,
        "mismatch": 0,
        "moduleArea": 0,
        "mppAmps": 13.04,
        "mppVoltage": 41.8,
        "mppWatts": 545.0719999999999,
        "numOfStrings": 9,
        "panelsPerString": 16,
        "pmaxDeviation": 0,
        "pvSystConfig": {
          "cellArea": 166.5,
          "cellType": 0,
          "cellsParallel": 2,
          "cellsSeries": 72,
          "impp": 13.04,
          "isc": 13.92,
          "key": "",
          "manufacturer": "Longi Solar",
          "model": "LR5-72HBD-545M",
          "muIsc": 0.063971119133574,
          "muPMax": -0.34,
          "rSeries": 0.19,
          "rShunt": 241,
          "rShuntExp": 3,
          "rShuntGinc": 3000,
          "vmpp": 41.8,
          "voc": 49.65
        },
        "pvSystModuleId": 937,
        "pvSystOutOfSync": false,
        "pvUsaConfig": {
          "ambientTemperature": 0,
          "irradiance": 0,
          "irradianceSquared": 0,
          "windSpeed": 0
        },
        "regressionFunctionList": [],
        "shadeModel": {
          "albedoWeight": 0,
          "diffuseWeight": 0,
          "hasInterRowShadeModel": 0,
          "interRowShadeModel": {
            "azimuth": 0,
            "panelLength": 0,
            "pitch": 0,
            "rows": 0,
            "tilt": 0,
            "topBorderLength": 0
          },
          "regions": []
        },
        "tempCoefficient": -0.34,
        "tilt": 1,
        "tracking": 0,
        "trackingAngle": 0,
        "transformerLoss": 0,
        "wattsPerPanel": 545
      }
    ],
    "monthlyDerate": {
      "apr": 1,
      "aug": 1,
      "dec": 1,
      "feb": 1,
      "jan": 1,
      "jul": 1,
      "jun": 1,
      "mar": 1,
      "may": 1,
      "nov": 1,
      "oct": 1,
      "sep": 1
    },
    "monthlyOutput": {
      "apr": 0,
      "aug": 0,
      "dec": 0,
      "feb": 0,
      "jan": 0,
      "jul": 0,
      "jun": 0,
      "mar": 0,
      "may": 0,
      "nov": 0,
      "oct": 0,
      "sep": 0
    },
    "pvModelType": 2
  },
  "readOnly": false,
  "registerOffsets": [],
  "reportExclude": false,
  "reverse": false,
  "sampleRate": 0,
  "serialMode": 0,
  "serialNum": "1",
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
  "siteDcShare": 78.48,
  "siteHasInverterGroups": true,
  "sort": 11,
  "syncToLocus": false,
  "tags": {
    "attributes": [],
    "key": "{\"ancestorKey\":\"H511568\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
    "keywords": [],
    "lastChanged": null,
    "notes": [],
    "powerDisplays": []
  },
  "taskKey": "",
  "thermal": null,
  "thread": 0,
  "ts": "2026-01-07T19:05:55Z",
  "turbine": null,
  "unitId": 3,
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

