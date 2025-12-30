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
referer: https://apps.alsoenergy.com/powertrack/H444573/administration/config
```

**Payload:**

```json
{
  "additionalRegisters": [],
  "address": "4",
  "alsoHardwareId": 0,
  "alsoSiteId": 0,
  "array": null,
  "assetId": "",
  "autoCorrectDecrease": true,
  "autoCorrectIncrease": true,
  "baud": "9600",
  "capacityKw": 60,
  "chartSectionCode": 1,
  "commonDC": false,
  "commonDCAllMatch": true,
  "configs": [
    "Pv"
  ],
  "conflictNames": null,
  "dashboardKey": "",
  "dcRating": 68040,
  "debug": false,
  "decreaseDifference": 6000,
  "defaultChart": 2,
  "description": "Inv 4 (60 kw) CPS-SCA60KTL-DO/US-480",
  "deviceRegisters": [
    {
      "dataName": "KwAC",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power",
      "name": "Active Power",
      "standardDataName": "Active_Power",
      "units": "kW"
    },
    {
      "dataName": "KwhAC",
      "dataNameDetail": null,
      "index": 1,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Net (with Offset)",
      "name": "Active Energy Gross",
      "standardDataName": "Active_Energy_Gross",
      "units": "kWh"
    },
    {
      "dataName": "KwhACraw",
      "dataNameDetail": null,
      "index": 2,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Net (without Offset)",
      "name": "Active Energy Gross Raw",
      "standardDataName": "",
      "units": "kWh"
    },
    {
      "dataName": "Frequency",
      "dataNameDetail": null,
      "index": 3,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Frequency",
      "name": "Frequency",
      "standardDataName": "Frequency",
      "units": "Hz"
    },
    {
      "dataName": "VacAB",
      "dataNameDetail": null,
      "index": 4,
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
      "index": 5,
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
      "index": 6,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage C-A (Line-Line)",
      "name": "AC Voltage CA",
      "standardDataName": "Voltage_CA",
      "units": "V"
    },
    {
      "dataName": "IacA",
      "dataNameDetail": null,
      "index": 7,
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
      "index": 8,
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
      "index": 9,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current C",
      "name": "AC Current C",
      "standardDataName": "Current_C",
      "units": "A"
    },
    {
      "dataName": "Iac",
      "dataNameDetail": null,
      "index": 10,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current Average",
      "name": "AC Current Average",
      "standardDataName": "Current_Avg",
      "units": "A"
    },
    {
      "dataName": "Vac",
      "dataNameDetail": null,
      "index": 11,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage Average L-N",
      "name": "AC Voltage Average L-N",
      "standardDataName": "Voltage_LN_Avg",
      "units": "V"
    },
    {
      "dataName": "KVA",
      "dataNameDetail": null,
      "index": 12,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Apparent Power",
      "name": "Apparent Power",
      "standardDataName": "Apparent_Power",
      "units": "kVA"
    },
    {
      "dataName": "KVAR",
      "dataNameDetail": null,
      "index": 13,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power",
      "name": "Reactive Power",
      "standardDataName": "Reactive_Power",
      "units": "kVAR"
    },
    {
      "dataName": "PowerFactor",
      "dataNameDetail": null,
      "index": 14,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Power Factor",
      "name": "Power Factor",
      "standardDataName": "Power_Factor",
      "units": "PF"
    },
    {
      "dataName": "Vdc1",
      "dataNameDetail": null,
      "index": 15,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Voltage 1",
      "name": "DC Voltage 1",
      "standardDataName": "DC_Voltage1",
      "units": "V"
    },
    {
      "dataName": "Idc1",
      "dataNameDetail": null,
      "index": 16,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC current 1",
      "name": "DC Current 1",
      "standardDataName": "DC_Current1",
      "units": "A"
    },
    {
      "dataName": "Vdc2",
      "dataNameDetail": null,
      "index": 17,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Voltage 2",
      "name": "DC Voltage 2",
      "standardDataName": "DC_Voltage2",
      "units": "V"
    },
    {
      "dataName": "Idc2",
      "dataNameDetail": null,
      "index": 18,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC current 2",
      "name": "DC Current 2",
      "standardDataName": "DC_Current2",
      "units": "A"
    },
    {
      "dataName": "Vdc3",
      "dataNameDetail": null,
      "index": 19,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Voltage 3",
      "name": "DC Voltage 3",
      "standardDataName": "DC_Voltage3",
      "units": "V"
    },
    {
      "dataName": "Idc3",
      "dataNameDetail": null,
      "index": 20,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC current 3",
      "name": "DC Current 3",
      "standardDataName": "DC_Current3",
      "units": "A"
    },
    {
      "dataName": "Idc",
      "dataNameDetail": null,
      "index": 21,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Current Total",
      "name": "DC Current Total",
      "standardDataName": "DC_Current_Total",
      "units": "A"
    },
    {
      "dataName": "Vdc",
      "dataNameDetail": null,
      "index": 22,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Voltage Average",
      "name": "DC Voltage Average",
      "standardDataName": "DC_Voltage_Avg",
      "units": "V"
    },
    {
      "dataName": "KwDC",
      "dataNameDetail": null,
      "index": 23,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Power",
      "name": "DC Power Total",
      "standardDataName": "DC_Power_Total",
      "units": "kW"
    },
    {
      "dataName": "DeviceTemp",
      "dataNameDetail": null,
      "index": 24,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Device Temperature",
      "name": "Device Temperature",
      "standardDataName": "Temp_Device",
      "units": "°F"
    },
    {
      "dataName": "InternalTemp",
      "dataNameDetail": null,
      "index": 25,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Internal Temperature",
      "name": "Internal Temperature",
      "standardDataName": "Temp_Internal",
      "units": "°F"
    },
    {
      "dataName": "Temp_XMFR",
      "dataNameDetail": null,
      "index": 26,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "XMFR Temperature",
      "name": "XMFR Temperature",
      "standardDataName": "Temp_XMFR",
      "units": "°F"
    },
    {
      "dataName": "Fault",
      "dataNameDetail": null,
      "index": 27,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault Code",
      "name": "Fault Code",
      "standardDataName": "Fault",
      "units": ""
    },
    {
      "dataName": "Warning",
      "dataNameDetail": null,
      "index": 28,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Warn Code",
      "name": "Warn Code",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Fault0",
      "dataNameDetail": null,
      "index": 29,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault Code 0",
      "name": "Fault Code 0",
      "standardDataName": "Fault0",
      "units": ""
    },
    {
      "dataName": "Fault1",
      "dataNameDetail": null,
      "index": 30,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 1",
      "name": "Fault Code 1",
      "standardDataName": "Fault1",
      "units": ""
    },
    {
      "dataName": "Fault2",
      "dataNameDetail": null,
      "index": 31,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 2",
      "name": "Fault Code 2",
      "standardDataName": "Fault2",
      "units": ""
    },
    {
      "dataName": "Fault3",
      "dataNameDetail": null,
      "index": 32,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 3",
      "name": "Fault Code 3",
      "standardDataName": "Fault3",
      "units": ""
    },
    {
      "dataName": "Fault4",
      "dataNameDetail": null,
      "index": 33,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 4",
      "name": "Fault Code 4",
      "standardDataName": "Fault4",
      "units": ""
    },
    {
      "dataName": "opmode",
      "dataNameDetail": null,
      "index": 34,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Operating Mode",
      "name": "Inverter Work Mode",
      "standardDataName": "Op_Mode",
      "units": "Derate: 0x800;Running:0x1000;Standby:0x2000;Check:0x4000;Fault:0x8000"
    },
    {
      "dataName": "Firmware_Version",
      "dataNameDetail": null,
      "index": 35,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Firmware Version",
      "name": "Firmware Version",
      "standardDataName": "Firmware_Version",
      "units": ""
    },
    {
      "dataName": "Serial_Number",
      "dataNameDetail": null,
      "index": 36,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Serial Number",
      "name": "Serial Number",
      "standardDataName": "Serial_Number",
      "units": ""
    }
  ],
  "driverDescription": "Chint / Solectria TL String Inverter [without Control]",
  "driverFlags": 16386,
  "driverId": 20630,
  "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
  "driverNotes": "Know issue on some firmware with kWh Energy not counting through the day, and only adding daily values everynight, FW 1797, 2053, 1284\r\rModbus Map: https://www.chintpowersystems.com/downloads/\r\r14-20-23-28-36kW Modbus Map\r25kW-208V Modbus Map\r25kW-408V Modbus Map\r50-60kW Modbus Map\r100/125kW-600V and 100kW-480 Modbus Map\r250/275kW-800 Modbus Map",
  "driverRegisters": [
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
      "name": "Active Energy Gross",
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
      "name": "Active Energy Gross Raw",
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
      "name": "Active Energy Today",
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
      "dataName": "Vac",
      "dataNameDetail": {
        "dataName": "Vac",
        "description": "AC Voltage Average L-N (Equivalent: Vac)",
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
          "otherAliasPTDataNameValues": "Vacln,Vaclna,VNavg,Voltage_LN_Avg,AC_Voltage_LN_Avg",
          "otherAliasPTDataNames": [
            338,
            339,
            337,
            336,
            341
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 2
        },
        "equivalent": 36,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          338,
          339,
          337,
          336,
          341
        ],
        "registerDataNameIdentifier": 36,
        "registerName": "AC Voltage Average L-N",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "AC Voltage Average L-N",
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
      "name": "DC Voltage 1",
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
      "name": "DC Current 1",
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
      "name": "DC Voltage 2",
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
      "name": "DC Current 2",
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
      "name": "DC Voltage 3",
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
      "name": "DC Current 3",
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
      "name": "DC Current Total",
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
      "name": "DC Voltage Average",
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
      "name": "DC Power Total",
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
      "dataName": "Temp_XMFR",
      "dataNameDetail": {
        "dataName": "Temp_XMFR",
        "description": "Transformer Temp Avg (Equivalent: Temp_XMFR)",
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
            1,
            39,
            45,
            49,
            48
          ],
          "functions": "PV,BI,BG,MV,HV",
          "isFloat": true,
          "isStandardDataName": true,
          "isStatus": false,
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 30
        },
        "equivalent": 387,
        "errors": [],
        "functionCodes": [
          1,
          39,
          45,
          49,
          48
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 387,
            "dataNameAndType": "Temp_XMFR (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          }
        ],
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [],
        "registerDataNameIdentifier": 387,
        "registerName": "Transformer Temp Avg",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": true
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "XMFR Temperature",
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
      "name": "Error Time YYYY",
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
      "name": "Error Time MM-DD",
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
      "name": "Error Time HH-MM",
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
      "name": "Error Time SS-00",
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
      "name": "Fault Code",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Warning",
      "dataNameDetail": {
        "dataName": "Warning",
        "description": "Warning (Equivalent: Warning)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": true,
          "condense": 1,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [
            43,
            44,
            25,
            42,
            47,
            50,
            46,
            49,
            48
          ],
          "functions": "BA,RK,BS,BB,PP,TU,FS,MV,HV",
          "isFloat": false,
          "isStandardDataName": true,
          "isStatus": true,
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 0
        },
        "equivalent": 204,
        "errors": [],
        "functionCodes": [
          43,
          44,
          25,
          42,
          47,
          50,
          46,
          49,
          48
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 204,
            "dataNameAndType": "Warning (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          }
        ],
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [],
        "registerDataNameIdentifier": 204,
        "registerName": "Warning",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": true
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Warn Code",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Fault0",
      "dataNameDetail": {
        "dataName": "Fault_",
        "description": "Fault (specify channel) (Equivalent: Fault_)",
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
            45,
            43,
            44,
            25,
            42,
            47,
            50,
            49,
            48,
            46
          ],
          "functions": "PM,GM,CM,XM,SM,BM,DP,PV,BI,DC,ST,SC,SA,SS,BG,BA,RK,BS,BB,PP,TU,MV,HV,FS",
          "isFloat": false,
          "isStandardDataName": true,
          "isStatus": true,
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 0
        },
        "equivalent": 441,
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
          45,
          43,
          44,
          25,
          42,
          47,
          50,
          49,
          48,
          46
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 441,
            "dataNameAndType": "Fault_ (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          }
        ],
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [],
        "registerDataNameIdentifier": 441,
        "registerName": "Fault (specify channel)",
        "registerSetsArrayDisplayedName": "Fault (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": true
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Fault Code 0",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Fault1",
      "dataNameDetail": {
        "dataName": "Fault_",
        "description": "Fault (specify channel) (Equivalent: Fault_)",
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
            45,
            43,
            44,
            25,
            42,
            47,
            50,
            49,
            48,
            46
          ],
          "functions": "PM,GM,CM,XM,SM,BM,DP,PV,BI,DC,ST,SC,SA,SS,BG,BA,RK,BS,BB,PP,TU,MV,HV,FS",
          "isFloat": false,
          "isStandardDataName": true,
          "isStatus": true,
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 0
        },
        "equivalent": 441,
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
          45,
          43,
          44,
          25,
          42,
          47,
          50,
          49,
          48,
          46
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 441,
            "dataNameAndType": "Fault_ (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          }
        ],
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [],
        "registerDataNameIdentifier": 441,
        "registerName": "Fault (specify channel)",
        "registerSetsArrayDisplayedName": "Fault (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": true
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Fault Code 1",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Fault2",
      "dataNameDetail": {
        "dataName": "Fault_",
        "description": "Fault (specify channel) (Equivalent: Fault_)",
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
            45,
            43,
            44,
            25,
            42,
            47,
            50,
            49,
            48,
            46
          ],
          "functions": "PM,GM,CM,XM,SM,BM,DP,PV,BI,DC,ST,SC,SA,SS,BG,BA,RK,BS,BB,PP,TU,MV,HV,FS",
          "isFloat": false,
          "isStandardDataName": true,
          "isStatus": true,
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 0
        },
        "equivalent": 441,
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
          45,
          43,
          44,
          25,
          42,
          47,
          50,
          49,
          48,
          46
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 441,
            "dataNameAndType": "Fault_ (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          }
        ],
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [],
        "registerDataNameIdentifier": 441,
        "registerName": "Fault (specify channel)",
        "registerSetsArrayDisplayedName": "Fault (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": true
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Fault Code 2",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Fault3",
      "dataNameDetail": {
        "dataName": "Fault_",
        "description": "Fault (specify channel) (Equivalent: Fault_)",
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
            45,
            43,
            44,
            25,
            42,
            47,
            50,
            49,
            48,
            46
          ],
          "functions": "PM,GM,CM,XM,SM,BM,DP,PV,BI,DC,ST,SC,SA,SS,BG,BA,RK,BS,BB,PP,TU,MV,HV,FS",
          "isFloat": false,
          "isStandardDataName": true,
          "isStatus": true,
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 0
        },
        "equivalent": 441,
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
          45,
          43,
          44,
          25,
          42,
          47,
          50,
          49,
          48,
          46
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 441,
            "dataNameAndType": "Fault_ (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          }
        ],
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [],
        "registerDataNameIdentifier": 441,
        "registerName": "Fault (specify channel)",
        "registerSetsArrayDisplayedName": "Fault (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": true
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Fault Code 3",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Fault4",
      "dataNameDetail": {
        "dataName": "Fault_",
        "description": "Fault (specify channel) (Equivalent: Fault_)",
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
            45,
            43,
            44,
            25,
            42,
            47,
            50,
            49,
            48,
            46
          ],
          "functions": "PM,GM,CM,XM,SM,BM,DP,PV,BI,DC,ST,SC,SA,SS,BG,BA,RK,BS,BB,PP,TU,MV,HV,FS",
          "isFloat": false,
          "isStandardDataName": true,
          "isStatus": true,
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 0
        },
        "equivalent": 441,
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
          45,
          43,
          44,
          25,
          42,
          47,
          50,
          49,
          48,
          46
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 441,
            "dataNameAndType": "Fault_ (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          }
        ],
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [],
        "registerDataNameIdentifier": 441,
        "registerName": "Fault (specify channel)",
        "registerSetsArrayDisplayedName": "Fault (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": true
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Fault Code 4",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "opmode",
      "dataNameDetail": {
        "dataName": "opmode",
        "description": "Operating Mode (Equivalent: opmode)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": true,
          "condense": 1,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [
            1,
            39,
            40,
            24,
            45
          ],
          "functions": "PV,BI,DC,ST,BG",
          "isFloat": false,
          "isStandardDataName": false,
          "isStatus": true,
          "otherAliasPTDataNameValues": "Op_Mode",
          "otherAliasPTDataNames": [
            443
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 0
        },
        "equivalent": 442,
        "errors": [],
        "functionCodes": [
          1,
          39,
          40,
          24,
          45
        ],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          443
        ],
        "registerDataNameIdentifier": 442,
        "registerName": "Operating Mode",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Inverter Work Mode",
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
      "name": "Type Device Model",
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
      "name": "Protocol Version",
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
      "name": "Firmware Version",
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
      "dataName": "",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Inverter Model",
      "standardDataName": "",
      "units": ""
    }
  ],
  "eGauge": null,
  "fixedEnergyOffset": 0,
  "functionCode": 1,
  "functionId": "PV3",
  "gateway": null,
  "gatewayFwVersion": "",
  "gatewayId": "000CC68CBCC1",
  "gatewayKey": "H444567",
  "gatewayScriptCount": "",
  "gatewayType": 2,
  "groupAllowed": [
    28
  ],
  "groupKey": "",
  "hardwareId": "C20909_S65552_PV3",
  "hardwareStatus": 1,
  "hasCapacity": true,
  "hash": "",
  "increaseDifference": 6000,
  "installDate": "2023-04-25",
  "instance": 3,
  "inverterKw": 0,
  "isConflictAcknowledged": false,
  "isReportable": true,
  "isTcp": false,
  "isThermal": false,
  "key": "H444573",
  "kiosk": null,
  "latitude": 38.0048431,
  "limitedCommunication": false,
  "locusId": "",
  "longitude": -121.8338427,
  "meter": null,
  "modelNum": "CHINT SCA60KTL-DO/US-480",
  "newNote": null,
  "oneMinuteData": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2025-12-30T15:26:46.1973401Z",
  "outputAllowed": [
    2
  ],
  "outputKey": "H444568",
  "parentKey": "S65552",
  "port": 1,
  "primary": false,
  "pullData": false,
  "pvConfig": {
    "acDcType": 0,
    "acInfo": 2,
    "canIntegrateCombiners": true,
    "combinerInputs": [
      {
        "name": "Idc1",
        "value": 0
      },
      {
        "name": "Idc2",
        "value": 0
      },
      {
        "name": "Idc3",
        "value": 0
      }
    ],
    "degrade": 0.5,
    "fileAKey": "",
    "fileBKey": "",
    "hasIntegratedCombiners": false,
    "inverters": [
      {
        "acLoss": 0,
        "acVoltage": 480,
        "azimuth": 196,
        "bifacialRatio": 0,
        "dcAmps": 204,
        "dcLoss": 0,
        "dcSize": 68.04,
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
        "inverterKva": 66,
        "inverterKw": 60,
        "inverterLoss": 1,
        "inverterName": "",
        "lightInducedDegradation": 0,
        "limitOne": 0,
        "limitTempOne": 0,
        "limitTempTwo": 0,
        "limitTwo": 0,
        "mismatch": 0,
        "moduleArea": 0,
        "mppAmps": 12.97,
        "mppVoltage": 41.64,
        "mppWatts": 540.0708000000001,
        "numOfStrings": 7,
        "panelsPerString": 18,
        "pmaxDeviation": 0,
        "pvSystConfig": {
          "cellArea": 0,
          "cellType": -1,
          "cellsParallel": 0,
          "cellsSeries": 0,
          "impp": 0,
          "isc": 0,
          "key": "",
          "manufacturer": "",
          "model": "",
          "muIsc": 0,
          "muPMax": 0,
          "rSeries": 0,
          "rShunt": 0,
          "rShuntExp": 0,
          "rShuntGinc": 0,
          "vmpp": 0,
          "voc": 0
        },
        "pvSystModuleId": 0,
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
        "tempCoefficient": -0.5,
        "tilt": 9,
        "tracking": 0,
        "trackingAngle": 0,
        "transformerLoss": 0,
        "wattsPerPanel": 540
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
      "apr": 10855,
      "aug": 12799,
      "dec": 4549,
      "feb": 5363,
      "jan": 4580,
      "jul": 13760,
      "jun": 13500,
      "mar": 8562,
      "may": 12819,
      "nov": 5633,
      "oct": 8304,
      "sep": 10481
    },
    "pvModelType": 0
  },
  "readOnly": false,
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
  "reportExclude": false,
  "reverse": false,
  "sampleRate": 0,
  "serialMode": 2,
  "serialNum": "",
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
      "originalValue": "inv4",
      "type": 0,
      "value": "inv4"
    }
  ],
  "siteDcShare": 903.9599999999999,
  "siteHasInverterGroups": false,
  "sort": 14,
  "syncToLocus": false,
  "tags": {
    "attributes": [],
    "key": "{\"ancestorKey\":\"H444573\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
    "keywords": [],
    "lastChanged": null,
    "notes": [
      {
        "authorKey": "U28898",
        "authorName": "Forest Lehman",
        "date": "2024-09-05T18:01:39Z",
        "isEvent": true,
        "key": "x0549f8c0",
        "kind": "text",
        "parentKey": "H444573",
        "text": "Filled in energy and power values, FillVirtual, 3/13/2024 4:50:00 PM through 3/26/2024 12:15:00 PM"
      }
    ],
    "powerDisplays": []
  },
  "taskKey": "",
  "thermal": null,
  "thread": 0,
  "ts": "2025-05-20T06:35:19Z",
  "turbine": null,
  "unitId": 0,
  "uploadRate": 0,
  "validatedByKey": "",
  "validatedDateTime": "0001-01-01T00:00:00",
  "virtualRegisters": [],
  "virtualWeather": null,
  "weather": null,
  "weatherStationKey1": "H444582",
  "weatherStationKey2": "H441071",
  "zone": null
}
```

**Response:**

```json
{
  "additionalRegisters": [],
  "address": "4",
  "alsoHardwareId": 0,
  "alsoSiteId": 0,
  "array": null,
  "assetId": "",
  "autoCorrectDecrease": true,
  "autoCorrectIncrease": true,
  "baud": "9600",
  "capacityKw": 60,
  "chartSectionCode": 1,
  "commonDC": false,
  "commonDCAllMatch": true,
  "configs": [
    "Pv"
  ],
  "conflictNames": null,
  "dashboardKey": "",
  "dcRating": 68040,
  "debug": false,
  "decreaseDifference": 6000,
  "defaultChart": 2,
  "description": "Inv 4 (60 kw) CPS-SCA60KTL-DO/US-480",
  "deviceRegisters": [
    {
      "dataName": "KwAC",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power",
      "name": "Active Power",
      "standardDataName": "Active_Power",
      "units": "kW"
    },
    {
      "dataName": "KwhAC",
      "dataNameDetail": null,
      "index": 1,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Net (with Offset)",
      "name": "Active Energy Gross",
      "standardDataName": "Active_Energy_Gross",
      "units": "kWh"
    },
    {
      "dataName": "KwhACraw",
      "dataNameDetail": null,
      "index": 2,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Net (without Offset)",
      "name": "Active Energy Gross Raw",
      "standardDataName": "",
      "units": "kWh"
    },
    {
      "dataName": "Frequency",
      "dataNameDetail": null,
      "index": 3,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Frequency",
      "name": "Frequency",
      "standardDataName": "Frequency",
      "units": "Hz"
    },
    {
      "dataName": "VacAB",
      "dataNameDetail": null,
      "index": 4,
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
      "index": 5,
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
      "index": 6,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage C-A (Line-Line)",
      "name": "AC Voltage CA",
      "standardDataName": "Voltage_CA",
      "units": "V"
    },
    {
      "dataName": "IacA",
      "dataNameDetail": null,
      "index": 7,
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
      "index": 8,
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
      "index": 9,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current C",
      "name": "AC Current C",
      "standardDataName": "Current_C",
      "units": "A"
    },
    {
      "dataName": "Iac",
      "dataNameDetail": null,
      "index": 10,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current Average",
      "name": "AC Current Average",
      "standardDataName": "Current_Avg",
      "units": "A"
    },
    {
      "dataName": "Vac",
      "dataNameDetail": null,
      "index": 11,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage Average L-N",
      "name": "AC Voltage Average L-N",
      "standardDataName": "Voltage_LN_Avg",
      "units": "V"
    },
    {
      "dataName": "KVA",
      "dataNameDetail": null,
      "index": 12,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Apparent Power",
      "name": "Apparent Power",
      "standardDataName": "Apparent_Power",
      "units": "kVA"
    },
    {
      "dataName": "KVAR",
      "dataNameDetail": null,
      "index": 13,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power",
      "name": "Reactive Power",
      "standardDataName": "Reactive_Power",
      "units": "kVAR"
    },
    {
      "dataName": "PowerFactor",
      "dataNameDetail": null,
      "index": 14,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Power Factor",
      "name": "Power Factor",
      "standardDataName": "Power_Factor",
      "units": "PF"
    },
    {
      "dataName": "Vdc1",
      "dataNameDetail": null,
      "index": 15,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Voltage 1",
      "name": "DC Voltage 1",
      "standardDataName": "DC_Voltage1",
      "units": "V"
    },
    {
      "dataName": "Idc1",
      "dataNameDetail": null,
      "index": 16,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC current 1",
      "name": "DC Current 1",
      "standardDataName": "DC_Current1",
      "units": "A"
    },
    {
      "dataName": "Vdc2",
      "dataNameDetail": null,
      "index": 17,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Voltage 2",
      "name": "DC Voltage 2",
      "standardDataName": "DC_Voltage2",
      "units": "V"
    },
    {
      "dataName": "Idc2",
      "dataNameDetail": null,
      "index": 18,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC current 2",
      "name": "DC Current 2",
      "standardDataName": "DC_Current2",
      "units": "A"
    },
    {
      "dataName": "Vdc3",
      "dataNameDetail": null,
      "index": 19,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Voltage 3",
      "name": "DC Voltage 3",
      "standardDataName": "DC_Voltage3",
      "units": "V"
    },
    {
      "dataName": "Idc3",
      "dataNameDetail": null,
      "index": 20,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC current 3",
      "name": "DC Current 3",
      "standardDataName": "DC_Current3",
      "units": "A"
    },
    {
      "dataName": "Idc",
      "dataNameDetail": null,
      "index": 21,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Current Total",
      "name": "DC Current Total",
      "standardDataName": "DC_Current_Total",
      "units": "A"
    },
    {
      "dataName": "Vdc",
      "dataNameDetail": null,
      "index": 22,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Voltage Average",
      "name": "DC Voltage Average",
      "standardDataName": "DC_Voltage_Avg",
      "units": "V"
    },
    {
      "dataName": "KwDC",
      "dataNameDetail": null,
      "index": 23,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Power",
      "name": "DC Power Total",
      "standardDataName": "DC_Power_Total",
      "units": "kW"
    },
    {
      "dataName": "DeviceTemp",
      "dataNameDetail": null,
      "index": 24,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Device Temperature",
      "name": "Device Temperature",
      "standardDataName": "Temp_Device",
      "units": "°F"
    },
    {
      "dataName": "InternalTemp",
      "dataNameDetail": null,
      "index": 25,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Internal Temperature",
      "name": "Internal Temperature",
      "standardDataName": "Temp_Internal",
      "units": "°F"
    },
    {
      "dataName": "Temp_XMFR",
      "dataNameDetail": null,
      "index": 26,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "XMFR Temperature",
      "name": "XMFR Temperature",
      "standardDataName": "Temp_XMFR",
      "units": "°F"
    },
    {
      "dataName": "Fault",
      "dataNameDetail": null,
      "index": 27,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault Code",
      "name": "Fault Code",
      "standardDataName": "Fault",
      "units": ""
    },
    {
      "dataName": "Warning",
      "dataNameDetail": null,
      "index": 28,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Warn Code",
      "name": "Warn Code",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Fault0",
      "dataNameDetail": null,
      "index": 29,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault Code 0",
      "name": "Fault Code 0",
      "standardDataName": "Fault0",
      "units": ""
    },
    {
      "dataName": "Fault1",
      "dataNameDetail": null,
      "index": 30,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 1",
      "name": "Fault Code 1",
      "standardDataName": "Fault1",
      "units": ""
    },
    {
      "dataName": "Fault2",
      "dataNameDetail": null,
      "index": 31,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 2",
      "name": "Fault Code 2",
      "standardDataName": "Fault2",
      "units": ""
    },
    {
      "dataName": "Fault3",
      "dataNameDetail": null,
      "index": 32,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 3",
      "name": "Fault Code 3",
      "standardDataName": "Fault3",
      "units": ""
    },
    {
      "dataName": "Fault4",
      "dataNameDetail": null,
      "index": 33,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 4",
      "name": "Fault Code 4",
      "standardDataName": "Fault4",
      "units": ""
    },
    {
      "dataName": "opmode",
      "dataNameDetail": null,
      "index": 34,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Operating Mode",
      "name": "Inverter Work Mode",
      "standardDataName": "Op_Mode",
      "units": "Derate: 0x800;Running:0x1000;Standby:0x2000;Check:0x4000;Fault:0x8000"
    },
    {
      "dataName": "Firmware_Version",
      "dataNameDetail": null,
      "index": 35,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Firmware Version",
      "name": "Firmware Version",
      "standardDataName": "Firmware_Version",
      "units": ""
    },
    {
      "dataName": "Serial_Number",
      "dataNameDetail": null,
      "index": 36,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Serial Number",
      "name": "Serial Number",
      "standardDataName": "Serial_Number",
      "units": ""
    }
  ],
  "driverDescription": "Chint / Solectria TL String Inverter [without Control]",
  "driverFlags": 16386,
  "driverId": 20630,
  "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
  "driverNotes": "Know issue on some firmware with kWh Energy not counting through the day, and only adding daily values everynight, FW 1797, 2053, 1284\r\rModbus Map: https://www.chintpowersystems.com/downloads/\r\r14-20-23-28-36kW Modbus Map\r25kW-208V Modbus Map\r25kW-408V Modbus Map\r50-60kW Modbus Map\r100/125kW-600V and 100kW-480 Modbus Map\r250/275kW-800 Modbus Map",
  "driverRegisters": [],
  "eGauge": null,
  "fixedEnergyOffset": 0,
  "functionCode": 1,
  "functionId": "PV3",
  "gateway": null,
  "gatewayFwVersion": "",
  "gatewayId": "000CC68CBCC1",
  "gatewayKey": "H444567",
  "gatewayScriptCount": "",
  "gatewayType": 2,
  "groupAllowed": [
    28
  ],
  "groupKey": "",
  "hardwareId": "C20909_S65552_PV3",
  "hardwareStatus": 1,
  "hasCapacity": true,
  "hash": "",
  "increaseDifference": 6000,
  "installDate": "2023-04-25",
  "instance": 3,
  "inverterKw": 0,
  "isConflictAcknowledged": false,
  "isReportable": true,
  "isTcp": false,
  "isThermal": false,
  "key": "H444573",
  "kiosk": null,
  "latitude": 38.0048431,
  "limitedCommunication": false,
  "locusId": "",
  "longitude": -121.8338427,
  "meter": null,
  "modelNum": "CHINT SCA60KTL-DO/US-480",
  "newNote": "",
  "oneMinuteData": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2025-12-30T15:45:17.6497725Z",
  "outputAllowed": [
    2
  ],
  "outputKey": "H444568",
  "parentKey": "S65552",
  "port": 1,
  "primary": false,
  "pullData": false,
  "pvConfig": {
    "acDcType": 0,
    "acInfo": 2,
    "canIntegrateCombiners": true,
    "combinerInputs": [
      {
        "name": "Idc1",
        "value": 0
      },
      {
        "name": "Idc2",
        "value": 0
      },
      {
        "name": "Idc3",
        "value": 0
      }
    ],
    "degrade": 0.5,
    "fileAKey": "",
    "fileBKey": "",
    "hasIntegratedCombiners": false,
    "inverters": [
      {
        "acLoss": 0,
        "acVoltage": 480,
        "azimuth": 196,
        "bifacialRatio": 0,
        "dcAmps": 204,
        "dcLoss": 0,
        "dcSize": 68.04,
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
        "inverterKva": 66,
        "inverterKw": 60,
        "inverterLoss": 1,
        "inverterName": "",
        "lightInducedDegradation": 0,
        "limitOne": 0,
        "limitTempOne": 0,
        "limitTempTwo": 0,
        "limitTwo": 0,
        "mismatch": 0,
        "moduleArea": 0,
        "mppAmps": 12.97,
        "mppVoltage": 41.64,
        "mppWatts": 540.0708000000001,
        "numOfStrings": 7,
        "panelsPerString": 18,
        "pmaxDeviation": 0,
        "pvSystConfig": {
          "cellArea": 0,
          "cellType": -1,
          "cellsParallel": 0,
          "cellsSeries": 0,
          "impp": 0,
          "isc": 0,
          "key": "",
          "manufacturer": "",
          "model": "",
          "muIsc": 0,
          "muPMax": 0,
          "rSeries": 0,
          "rShunt": 0,
          "rShuntExp": 0,
          "rShuntGinc": 0,
          "vmpp": 0,
          "voc": 0
        },
        "pvSystModuleId": 0,
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
        "tempCoefficient": -0.5,
        "tilt": 9,
        "tracking": 0,
        "trackingAngle": 0,
        "transformerLoss": 0,
        "wattsPerPanel": 540
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
      "apr": 10855,
      "aug": 12799,
      "dec": 4549,
      "feb": 5363,
      "jan": 4580,
      "jul": 13760,
      "jun": 13500,
      "mar": 8562,
      "may": 12819,
      "nov": 5633,
      "oct": 8304,
      "sep": 10481
    },
    "pvModelType": 0
  },
  "readOnly": false,
  "registerOffsets": [],
  "reportExclude": false,
  "reverse": false,
  "sampleRate": 0,
  "serialMode": 2,
  "serialNum": "",
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
      "name": "dev:ScaleKWDC",
      "originalValue": "0.1",
      "type": 0,
      "value": "0.1"
    },
    {
      "index": 15,
      "name": "dev:Alias",
      "originalValue": "Status=opmode",
      "type": 0,
      "value": "Status=opmode"
    },
    {
      "index": 16,
      "name": "ShortName",
      "originalValue": "inv4",
      "type": 0,
      "value": "inv4"
    }
  ],
  "siteDcShare": 903.9599999999999,
  "siteHasInverterGroups": false,
  "sort": 14,
  "syncToLocus": false,
  "tags": {
    "attributes": [],
    "key": "{\"ancestorKey\":\"H444573\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
    "keywords": [],
    "lastChanged": null,
    "notes": [
      {
        "authorKey": "U28898",
        "authorName": "Forest Lehman",
        "date": "2024-09-05T18:01:39Z",
        "isEvent": true,
        "key": "x0549f8c0",
        "kind": "text",
        "parentKey": "H444573",
        "text": "Filled in energy and power values, FillVirtual, 3/13/2024 4:50:00 PM through 3/26/2024 12:15:00 PM"
      }
    ],
    "powerDisplays": []
  },
  "taskKey": "",
  "thermal": null,
  "thread": 0,
  "ts": "2025-12-30T15:45:14Z",
  "turbine": null,
  "unitId": 0,
  "uploadRate": 0,
  "validatedByKey": "",
  "validatedDateTime": "0001-01-01T00:00:00",
  "virtualRegisters": [],
  "virtualWeather": null,
  "weather": null,
  "weatherStationKey1": "H444582",
  "weatherStationKey2": "H441071",
  "zone": null
}
```

[Return to top](#top)

