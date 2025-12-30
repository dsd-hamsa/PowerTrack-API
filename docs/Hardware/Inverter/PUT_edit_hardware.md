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
    "key": {
      "type": "string"
    },
    "parentKey": {
      "type": "string"
    },
    "ts": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "assetId": {
      "type": "string"
    },
    "hardwareId": {
      "type": "string"
    },
    "instance": {
      "type": "number"
    },
    "functionId": {
      "type": "string"
    },
    "functionCode": {
      "type": "number"
    },
    "hardwareStatus": {
      "type": "number"
    },
    "capacityKw": {
      "type": "number"
    },
    "sort": {
      "type": "number"
    },
    "gatewayKey": {
      "type": "string"
    },
    "gatewayId": {
      "type": "string"
    },
    "gatewayFwVersion": {
      "type": "string"
    },
    "gatewayScriptCount": {
      "type": "string"
    },
    "gatewayType": {
      "type": "number"
    },
    "serialNum": {
      "type": "string"
    },
    "modelNum": {
      "type": "string"
    },
    "installDate": {
      "type": "string"
    },
    "driverId": {
      "type": "number"
    },
    "driverDescription": {
      "type": "string"
    },
    "driverFlags": {
      "type": "number"
    },
    "driverName": {
      "type": "string"
    },
    "driverNotes": {
      "type": "string"
    },
    "validatedByKey": {
      "type": "string"
    },
    "validatedDateTime": {
      "type": "string"
    },
    "debug": {
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
    "reportExclude": {
      "type": "boolean"
    },
    "limitedCommunication": {
      "type": "boolean"
    },
    "primary": {
      "type": "boolean"
    },
    "address": {
      "type": "string"
    },
    "unitId": {
      "type": "number"
    },
    "isTcp": {
      "type": "boolean"
    },
    "port": {
      "type": "number"
    },
    "serialMode": {
      "type": "number"
    },
    "baud": {
      "type": "string"
    },
    "newNote": {
      "type": "object",
      "properties": {}
    },
    "dashboardKey": {
      "type": "string"
    },
    "dcRating": {
      "type": "number"
    },
    "defaultChart": {
      "type": "number"
    },
    "chartSectionCode": {
      "type": "number"
    },
    "conflictNames": {
      "type": "object",
      "properties": {}
    },
    "isConflictAcknowledged": {
      "type": "boolean"
    },
    "settings": {
      "type": "object",
      "properties": {
        "originalValue": {
          "type": "number"
        },
        "index": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "value": {
          "type": "number"
        },
        "type": {
          "type": "number"
        }
      }
    },
    "deviceRegisters": {
      "type": "object",
      "properties": {
        "index": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "localizedName": {
          "type": "string"
        },
        "dataName": {
          "type": "string"
        },
        "standardDataName": {
          "type": "string"
        },
        "isIgnored": {
          "type": "boolean"
        },
        "isRaw": {
          "type": "boolean"
        },
        "isArchived": {
          "type": "boolean"
        },
        "units": {
          "type": "string"
        },
        "dataNameDetail": {
          "type": "object",
          "properties": {}
        }
      }
    },
    "additionalRegisters": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "decreaseDifference": {
      "type": "number"
    },
    "autoCorrectDecrease": {
      "type": "boolean"
    },
    "fixedEnergyOffset": {
      "type": "number"
    },
    "increaseDifference": {
      "type": "number"
    },
    "autoCorrectIncrease": {
      "type": "boolean"
    },
    "isThermal": {
      "type": "boolean"
    },
    "reverse": {
      "type": "boolean"
    },
    "registerOffsets": {
      "type": "object",
      "properties": {
        "index": {
          "type": "number"
        },
        "registerAddress": {
          "type": "number"
        },
        "registerModbusName": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "value": {
          "type": "number"
        }
      }
    },
    "driverRegisters": {
      "type": "object",
      "properties": {
        "index": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "localizedName": {
          "type": "string"
        },
        "dataName": {
          "type": "string"
        },
        "standardDataName": {
          "type": "string"
        },
        "isIgnored": {
          "type": "boolean"
        },
        "isRaw": {
          "type": "boolean"
        },
        "isArchived": {
          "type": "boolean"
        },
        "units": {
          "type": "string"
        },
        "dataNameDetail": {
          "type": "object",
          "properties": {
            "registerDataNameIdentifier": {
              "type": "number"
            },
            "registerName": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "dataName": {
              "type": "string"
            },
            "details": {
              "type": "object",
              "properties": {
                "isFloat": {
                  "type": "boolean"
                },
                "doublePrecision": {
                  "type": "boolean"
                },
                "isStatus": {
                  "type": "boolean"
                },
                "units": {
                  "type": "number"
                },
                "condense": {
                  "type": "number"
                },
                "allowArchiveRaw": {
                  "type": "boolean"
                },
                "adminHide": {
                  "type": "boolean"
                },
                "aCmeter": {
                  "type": "boolean"
                },
                "dCmeter": {
                  "type": "boolean"
                },
                "isStandardDataName": {
                  "type": "boolean"
                },
                "equivalent": {
                  "type": "number"
                },
                "functions": {
                  "type": "string"
                },
                "functionCodes": {
                  "type": "array",
                  "items": {
                    "type": "unknown"
                  }
                },
                "excludedChannels": {
                  "type": "string"
                },
                "otherAliasPTDataNameValues": {
                  "type": "string"
                },
                "otherAliasPTDataNames": {
                  "type": "number"
                },
                "typeId": {
                  "type": "string"
                }
              }
            },
            "isStandardDataName": {
              "type": "boolean"
            },
            "isAllowedForRegisterSetsArray": {
              "type": "boolean"
            },
            "registerSetsArrayDisplayedName": {
              "type": "string"
            },
            "equivalent": {
              "type": "number"
            },
            "otherAliasPTDataNames": {
              "type": "number"
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
            "standardDataNameArchiveRawAndIntervalData": {
              "type": "boolean"
            },
            "errors": {
              "type": "array",
              "items": {
                "type": "unknown"
              }
            }
          }
        }
      }
    },
    "virtualRegisters": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "tags": {
      "type": "object",
      "properties": {
        "key": {
          "type": "string"
        },
        "lastChanged": {
          "type": "object",
          "properties": {}
        },
        "attributes": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        },
        "keywords": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        },
        "notes": {
          "type": "object",
          "properties": {
            "key": {
              "type": "string"
            },
            "parentKey": {
              "type": "string"
            },
            "authorKey": {
              "type": "string"
            },
            "authorName": {
              "type": "string"
            },
            "date": {
              "type": "string"
            },
            "kind": {
              "type": "string"
            },
            "isEvent": {
              "type": "boolean"
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
    "sampleRate": {
      "type": "number"
    },
    "uploadRate": {
      "type": "number"
    },
    "oneMinuteData": {
      "type": "boolean"
    },
    "thread": {
      "type": "number"
    },
    "alsoHardwareId": {
      "type": "number"
    },
    "alsoSiteId": {
      "type": "number"
    },
    "siteHasInverterGroups": {
      "type": "boolean"
    },
    "groupAllowed": {
      "type": "number"
    },
    "groupKey": {
      "type": "string"
    },
    "outputAllowed": {
      "type": "number"
    },
    "outputKey": {
      "type": "string"
    },
    "weatherStationKey1": {
      "type": "string"
    },
    "weatherStationKey2": {
      "type": "string"
    },
    "configs": {
      "type": "string"
    },
    "array": {
      "type": "object",
      "properties": {}
    },
    "eGauge": {
      "type": "object",
      "properties": {}
    },
    "gateway": {
      "type": "object",
      "properties": {}
    },
    "kiosk": {
      "type": "object",
      "properties": {}
    },
    "meter": {
      "type": "object",
      "properties": {}
    },
    "pvConfig": {
      "type": "object",
      "properties": {
        "pvModelType": {
          "type": "number"
        },
        "acDcType": {
          "type": "number"
        },
        "acInfo": {
          "type": "number"
        },
        "inverters": {
          "type": "object",
          "properties": {
            "mppWatts": {
              "type": "number"
            },
            "pvSystOutOfSync": {
              "type": "boolean"
            },
            "pvSystModuleId": {
              "type": "number"
            },
            "pvSystConfig": {
              "type": "object",
              "properties": {
                "key": {
                  "type": "string"
                },
                "manufacturer": {
                  "type": "string"
                },
                "model": {
                  "type": "string"
                },
                "cellType": {
                  "type": "number"
                },
                "cellsSeries": {
                  "type": "number"
                },
                "cellsParallel": {
                  "type": "number"
                },
                "cellArea": {
                  "type": "number"
                },
                "isc": {
                  "type": "number"
                },
                "voc": {
                  "type": "number"
                },
                "impp": {
                  "type": "number"
                },
                "vmpp": {
                  "type": "number"
                },
                "muIsc": {
                  "type": "number"
                },
                "rShunt": {
                  "type": "number"
                },
                "rSeries": {
                  "type": "number"
                },
                "rShuntGinc": {
                  "type": "number"
                },
                "rShuntExp": {
                  "type": "number"
                },
                "muPMax": {
                  "type": "number"
                }
              }
            },
            "pvUsaConfig": {
              "type": "object",
              "properties": {
                "irradiance": {
                  "type": "number"
                },
                "irradianceSquared": {
                  "type": "number"
                },
                "windSpeed": {
                  "type": "number"
                },
                "ambientTemperature": {
                  "type": "number"
                }
              }
            },
            "installationType": {
              "type": "number"
            },
            "bifacialRatio": {
              "type": "number"
            },
            "efficiency": {
              "type": "number"
            },
            "moduleArea": {
              "type": "number"
            },
            "limitOne": {
              "type": "number"
            },
            "limitTempOne": {
              "type": "number"
            },
            "limitTwo": {
              "type": "number"
            },
            "limitTempTwo": {
              "type": "number"
            },
            "acVoltage": {
              "type": "number"
            },
            "dcAmps": {
              "type": "number"
            },
            "dcSize": {
              "type": "number"
            },
            "dcVoltage": {
              "type": "number"
            },
            "inverterLoss": {
              "type": "number"
            },
            "inverterKw": {
              "type": "number"
            },
            "inverterName": {
              "type": "string"
            },
            "inverterKva": {
              "type": "number"
            },
            "shadeModel": {
              "type": "object",
              "properties": {
                "hasInterRowShadeModel": {
                  "type": "number"
                },
                "albedoWeight": {
                  "type": "number"
                },
                "diffuseWeight": {
                  "type": "number"
                },
                "regions": {
                  "type": "array",
                  "items": {
                    "type": "unknown"
                  }
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
                }
              }
            },
            "numOfStrings": {
              "type": "number"
            },
            "panelsPerString": {
              "type": "number"
            },
            "derate": {
              "type": "number"
            },
            "wattsPerPanel": {
              "type": "number"
            },
            "mppVoltage": {
              "type": "number"
            },
            "mppAmps": {
              "type": "number"
            },
            "tempCoefficient": {
              "type": "number"
            },
            "azimuth": {
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
            "derateDetail": {
              "type": "boolean"
            },
            "lightInducedDegradation": {
              "type": "number"
            },
            "pmaxDeviation": {
              "type": "number"
            },
            "mismatch": {
              "type": "number"
            },
            "dcLoss": {
              "type": "number"
            },
            "acLoss": {
              "type": "number"
            },
            "transformerLoss": {
              "type": "number"
            },
            "regressionFunctionList": {
              "type": "array",
              "items": {
                "type": "unknown"
              }
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
                "modelType": {
                  "type": "number"
                },
                "manufacturer": {
                  "type": "string"
                },
                "modelName": {
                  "type": "string"
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
                "modelType": {
                  "type": "number"
                },
                "manufacturer": {
                  "type": "string"
                },
                "modelName": {
                  "type": "string"
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
            }
          }
        },
        "fileAKey": {
          "type": "string"
        },
        "fileBKey": {
          "type": "string"
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
        "monthlyDerate": {
          "type": "object",
          "properties": {
            "jan": {
              "type": "number"
            },
            "feb": {
              "type": "number"
            },
            "mar": {
              "type": "number"
            },
            "apr": {
              "type": "number"
            },
            "may": {
              "type": "number"
            },
            "jun": {
              "type": "number"
            },
            "jul": {
              "type": "number"
            },
            "aug": {
              "type": "number"
            },
            "sep": {
              "type": "number"
            },
            "oct": {
              "type": "number"
            },
            "nov": {
              "type": "number"
            },
            "dec": {
              "type": "number"
            }
          }
        },
        "monthlyOutput": {
          "type": "object",
          "properties": {
            "jan": {
              "type": "number"
            },
            "feb": {
              "type": "number"
            },
            "mar": {
              "type": "number"
            },
            "apr": {
              "type": "number"
            },
            "may": {
              "type": "number"
            },
            "jun": {
              "type": "number"
            },
            "jul": {
              "type": "number"
            },
            "aug": {
              "type": "number"
            },
            "sep": {
              "type": "number"
            },
            "oct": {
              "type": "number"
            },
            "nov": {
              "type": "number"
            },
            "dec": {
              "type": "number"
            }
          }
        },
        "canIntegrateCombiners": {
          "type": "boolean"
        },
        "hasIntegratedCombiners": {
          "type": "boolean"
        }
      }
    },
    "thermal": {
      "type": "object",
      "properties": {}
    },
    "turbine": {
      "type": "object",
      "properties": {}
    },
    "virtualWeather": {
      "type": "object",
      "properties": {}
    },
    "weather": {
      "type": "object",
      "properties": {}
    },
    "zone": {
      "type": "object",
      "properties": {}
    },
    "commonDC": {
      "type": "boolean"
    },
    "commonDCAllMatch": {
      "type": "boolean"
    },
    "locusId": {
      "type": "string"
    },
    "syncToLocus": {
      "type": "boolean"
    },
    "taskKey": {
      "type": "string"
    },
    "readOnly": {
      "type": "boolean"
    },
    "isReportable": {
      "type": "boolean"
    },
    "latitude": {
      "type": "number"
    },
    "longitude": {
      "type": "number"
    },
    "hash": {
      "type": "string"
    },
    "hasCapacity": {
      "type": "boolean"
    },
    "inverterKw": {
      "type": "number"
    },
    "siteDcShare": {
      "type": "number"
    },
    "pullData": {
      "type": "boolean"
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
    "key": {
      "type": "string"
    },
    "parentKey": {
      "type": "string"
    },
    "ts": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "assetId": {
      "type": "string"
    },
    "hardwareId": {
      "type": "string"
    },
    "instance": {
      "type": "number"
    },
    "functionId": {
      "type": "string"
    },
    "functionCode": {
      "type": "number"
    },
    "hardwareStatus": {
      "type": "number"
    },
    "capacityKw": {
      "type": "number"
    },
    "sort": {
      "type": "number"
    },
    "gatewayKey": {
      "type": "string"
    },
    "gatewayId": {
      "type": "string"
    },
    "gatewayFwVersion": {
      "type": "string"
    },
    "gatewayScriptCount": {
      "type": "string"
    },
    "gatewayType": {
      "type": "number"
    },
    "serialNum": {
      "type": "string"
    },
    "modelNum": {
      "type": "string"
    },
    "installDate": {
      "type": "string"
    },
    "driverId": {
      "type": "number"
    },
    "driverDescription": {
      "type": "string"
    },
    "driverFlags": {
      "type": "number"
    },
    "driverName": {
      "type": "string"
    },
    "driverNotes": {
      "type": "string"
    },
    "validatedByKey": {
      "type": "string"
    },
    "validatedDateTime": {
      "type": "string"
    },
    "debug": {
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
    "reportExclude": {
      "type": "boolean"
    },
    "limitedCommunication": {
      "type": "boolean"
    },
    "primary": {
      "type": "boolean"
    },
    "address": {
      "type": "string"
    },
    "unitId": {
      "type": "number"
    },
    "isTcp": {
      "type": "boolean"
    },
    "port": {
      "type": "number"
    },
    "serialMode": {
      "type": "number"
    },
    "baud": {
      "type": "string"
    },
    "newNote": {
      "type": "string"
    },
    "dashboardKey": {
      "type": "string"
    },
    "dcRating": {
      "type": "number"
    },
    "defaultChart": {
      "type": "number"
    },
    "chartSectionCode": {
      "type": "number"
    },
    "conflictNames": {
      "type": "object",
      "properties": {}
    },
    "isConflictAcknowledged": {
      "type": "boolean"
    },
    "settings": {
      "type": "object",
      "properties": {
        "originalValue": {
          "type": "number"
        },
        "index": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "value": {
          "type": "number"
        },
        "type": {
          "type": "number"
        }
      }
    },
    "deviceRegisters": {
      "type": "object",
      "properties": {
        "index": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "localizedName": {
          "type": "string"
        },
        "dataName": {
          "type": "string"
        },
        "standardDataName": {
          "type": "string"
        },
        "isIgnored": {
          "type": "boolean"
        },
        "isRaw": {
          "type": "boolean"
        },
        "isArchived": {
          "type": "boolean"
        },
        "units": {
          "type": "string"
        },
        "dataNameDetail": {
          "type": "object",
          "properties": {}
        }
      }
    },
    "additionalRegisters": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "decreaseDifference": {
      "type": "number"
    },
    "autoCorrectDecrease": {
      "type": "boolean"
    },
    "fixedEnergyOffset": {
      "type": "number"
    },
    "increaseDifference": {
      "type": "number"
    },
    "autoCorrectIncrease": {
      "type": "boolean"
    },
    "isThermal": {
      "type": "boolean"
    },
    "reverse": {
      "type": "boolean"
    },
    "registerOffsets": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "driverRegisters": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "virtualRegisters": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "tags": {
      "type": "object",
      "properties": {
        "key": {
          "type": "string"
        },
        "lastChanged": {
          "type": "object",
          "properties": {}
        },
        "attributes": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        },
        "keywords": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        },
        "notes": {
          "type": "object",
          "properties": {
            "key": {
              "type": "string"
            },
            "parentKey": {
              "type": "string"
            },
            "authorKey": {
              "type": "string"
            },
            "authorName": {
              "type": "string"
            },
            "date": {
              "type": "string"
            },
            "kind": {
              "type": "string"
            },
            "isEvent": {
              "type": "boolean"
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
    "sampleRate": {
      "type": "number"
    },
    "uploadRate": {
      "type": "number"
    },
    "oneMinuteData": {
      "type": "boolean"
    },
    "thread": {
      "type": "number"
    },
    "alsoHardwareId": {
      "type": "number"
    },
    "alsoSiteId": {
      "type": "number"
    },
    "siteHasInverterGroups": {
      "type": "boolean"
    },
    "groupAllowed": {
      "type": "number"
    },
    "groupKey": {
      "type": "string"
    },
    "outputAllowed": {
      "type": "number"
    },
    "outputKey": {
      "type": "string"
    },
    "weatherStationKey1": {
      "type": "string"
    },
    "weatherStationKey2": {
      "type": "string"
    },
    "configs": {
      "type": "string"
    },
    "array": {
      "type": "object",
      "properties": {}
    },
    "eGauge": {
      "type": "object",
      "properties": {}
    },
    "gateway": {
      "type": "object",
      "properties": {}
    },
    "kiosk": {
      "type": "object",
      "properties": {}
    },
    "meter": {
      "type": "object",
      "properties": {}
    },
    "pvConfig": {
      "type": "object",
      "properties": {
        "pvModelType": {
          "type": "number"
        },
        "acDcType": {
          "type": "number"
        },
        "acInfo": {
          "type": "number"
        },
        "inverters": {
          "type": "object",
          "properties": {
            "mppWatts": {
              "type": "number"
            },
            "pvSystOutOfSync": {
              "type": "boolean"
            },
            "pvSystModuleId": {
              "type": "number"
            },
            "pvSystConfig": {
              "type": "object",
              "properties": {
                "key": {
                  "type": "string"
                },
                "manufacturer": {
                  "type": "string"
                },
                "model": {
                  "type": "string"
                },
                "cellType": {
                  "type": "number"
                },
                "cellsSeries": {
                  "type": "number"
                },
                "cellsParallel": {
                  "type": "number"
                },
                "cellArea": {
                  "type": "number"
                },
                "isc": {
                  "type": "number"
                },
                "voc": {
                  "type": "number"
                },
                "impp": {
                  "type": "number"
                },
                "vmpp": {
                  "type": "number"
                },
                "muIsc": {
                  "type": "number"
                },
                "rShunt": {
                  "type": "number"
                },
                "rSeries": {
                  "type": "number"
                },
                "rShuntGinc": {
                  "type": "number"
                },
                "rShuntExp": {
                  "type": "number"
                },
                "muPMax": {
                  "type": "number"
                }
              }
            },
            "pvUsaConfig": {
              "type": "object",
              "properties": {
                "irradiance": {
                  "type": "number"
                },
                "irradianceSquared": {
                  "type": "number"
                },
                "windSpeed": {
                  "type": "number"
                },
                "ambientTemperature": {
                  "type": "number"
                }
              }
            },
            "installationType": {
              "type": "number"
            },
            "bifacialRatio": {
              "type": "number"
            },
            "efficiency": {
              "type": "number"
            },
            "moduleArea": {
              "type": "number"
            },
            "limitOne": {
              "type": "number"
            },
            "limitTempOne": {
              "type": "number"
            },
            "limitTwo": {
              "type": "number"
            },
            "limitTempTwo": {
              "type": "number"
            },
            "acVoltage": {
              "type": "number"
            },
            "dcAmps": {
              "type": "number"
            },
            "dcSize": {
              "type": "number"
            },
            "dcVoltage": {
              "type": "number"
            },
            "inverterLoss": {
              "type": "number"
            },
            "inverterKw": {
              "type": "number"
            },
            "inverterName": {
              "type": "string"
            },
            "inverterKva": {
              "type": "number"
            },
            "shadeModel": {
              "type": "object",
              "properties": {
                "hasInterRowShadeModel": {
                  "type": "number"
                },
                "albedoWeight": {
                  "type": "number"
                },
                "diffuseWeight": {
                  "type": "number"
                },
                "regions": {
                  "type": "array",
                  "items": {
                    "type": "unknown"
                  }
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
                }
              }
            },
            "numOfStrings": {
              "type": "number"
            },
            "panelsPerString": {
              "type": "number"
            },
            "derate": {
              "type": "number"
            },
            "wattsPerPanel": {
              "type": "number"
            },
            "mppVoltage": {
              "type": "number"
            },
            "mppAmps": {
              "type": "number"
            },
            "tempCoefficient": {
              "type": "number"
            },
            "azimuth": {
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
            "derateDetail": {
              "type": "boolean"
            },
            "lightInducedDegradation": {
              "type": "number"
            },
            "pmaxDeviation": {
              "type": "number"
            },
            "mismatch": {
              "type": "number"
            },
            "dcLoss": {
              "type": "number"
            },
            "acLoss": {
              "type": "number"
            },
            "transformerLoss": {
              "type": "number"
            },
            "regressionFunctionList": {
              "type": "array",
              "items": {
                "type": "unknown"
              }
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
                "modelType": {
                  "type": "number"
                },
                "manufacturer": {
                  "type": "string"
                },
                "modelName": {
                  "type": "string"
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
                "modelType": {
                  "type": "number"
                },
                "manufacturer": {
                  "type": "string"
                },
                "modelName": {
                  "type": "string"
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
            }
          }
        },
        "fileAKey": {
          "type": "string"
        },
        "fileBKey": {
          "type": "string"
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
        "monthlyDerate": {
          "type": "object",
          "properties": {
            "jan": {
              "type": "number"
            },
            "feb": {
              "type": "number"
            },
            "mar": {
              "type": "number"
            },
            "apr": {
              "type": "number"
            },
            "may": {
              "type": "number"
            },
            "jun": {
              "type": "number"
            },
            "jul": {
              "type": "number"
            },
            "aug": {
              "type": "number"
            },
            "sep": {
              "type": "number"
            },
            "oct": {
              "type": "number"
            },
            "nov": {
              "type": "number"
            },
            "dec": {
              "type": "number"
            }
          }
        },
        "monthlyOutput": {
          "type": "object",
          "properties": {
            "jan": {
              "type": "number"
            },
            "feb": {
              "type": "number"
            },
            "mar": {
              "type": "number"
            },
            "apr": {
              "type": "number"
            },
            "may": {
              "type": "number"
            },
            "jun": {
              "type": "number"
            },
            "jul": {
              "type": "number"
            },
            "aug": {
              "type": "number"
            },
            "sep": {
              "type": "number"
            },
            "oct": {
              "type": "number"
            },
            "nov": {
              "type": "number"
            },
            "dec": {
              "type": "number"
            }
          }
        },
        "canIntegrateCombiners": {
          "type": "boolean"
        },
        "hasIntegratedCombiners": {
          "type": "boolean"
        }
      }
    },
    "thermal": {
      "type": "object",
      "properties": {}
    },
    "turbine": {
      "type": "object",
      "properties": {}
    },
    "virtualWeather": {
      "type": "object",
      "properties": {}
    },
    "weather": {
      "type": "object",
      "properties": {}
    },
    "zone": {
      "type": "object",
      "properties": {}
    },
    "commonDC": {
      "type": "boolean"
    },
    "commonDCAllMatch": {
      "type": "boolean"
    },
    "locusId": {
      "type": "string"
    },
    "syncToLocus": {
      "type": "boolean"
    },
    "taskKey": {
      "type": "string"
    },
    "readOnly": {
      "type": "boolean"
    },
    "isReportable": {
      "type": "boolean"
    },
    "latitude": {
      "type": "number"
    },
    "longitude": {
      "type": "number"
    },
    "hash": {
      "type": "string"
    },
    "hasCapacity": {
      "type": "boolean"
    },
    "inverterKw": {
      "type": "number"
    },
    "siteDcShare": {
      "type": "number"
    },
    "pullData": {
      "type": "boolean"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
PUT /api/edit/hardware
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Content-Type: application/json
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/H444573/administration/config
```

**Payload:**

```json
{
  "key": "H444573",
  "parentKey": "S65552",
  "ts": "2025-05-20T06:35:19Z",
  "description": "Inv 4 (60 kw) CPS-SCA60KTL-DO/US-480",
  "assetId": "",
  "hardwareId": "C20909_S65552_PV3",
  "instance": 3,
  "functionId": "PV3",
  "functionCode": 1,
  "hardwareStatus": 1,
  "capacityKw": 60,
  "sort": 14,
  "gatewayKey": "H444567",
  "gatewayId": "000CC68CBCC1",
  "gatewayFwVersion": "",
  "gatewayScriptCount": "",
  "gatewayType": 2,
  "serialNum": "",
  "modelNum": "CHINT SCA60KTL-DO/US-480",
  "installDate": "2023-04-25",
  "driverId": 20630,
  "driverDescription": "Chint / Solectria TL String Inverter [without Control]",
  "driverFlags": 16386,
  "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
  "driverNotes": "Know issue on some firmware with kWh Energy not counting through the day, and only adding daily values everynight, FW 1797, 2053, 1284\r\rModbus Map: https://www.chintpowersystems.com/downloads/\r\r14-20-23-28-36kW Modbus Map\r25kW-208V Modbus Map\r25kW-408V Modbus Map\r50-60kW Modbus Map\r100/125kW-600V and 100kW-480 Modbus Map\r250/275kW-800 Modbus Map",
  "validatedByKey": "",
  "validatedDateTime": "0001-01-01T00:00:00",
  "debug": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2025-12-30T15:26:46.1973401Z",
  "reportExclude": false,
  "limitedCommunication": false,
  "primary": false,
  "address": "4",
  "unitId": 0,
  "isTcp": false,
  "port": 1,
  "serialMode": 2,
  "baud": "9600",
  "newNote": null,
  "dashboardKey": "",
  "dcRating": 68040,
  "defaultChart": 2,
  "chartSectionCode": 1,
  "conflictNames": null,
  "isConflictAcknowledged": false,
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
      "originalValue": 0.1,
      "index": 3,
      "name": "dev:ScaleKW",
      "value": 0.1,
      "type": 2
    },
    {
      "originalValue": "0.1",
      "index": 4,
      "name": "dev:ScaleV",
      "value": "0.1",
      "type": 0
    },
    {
      "originalValue": "0.1",
      "index": 5,
      "name": "dev:ScaleI",
      "value": "0.1",
      "type": 0
    },
    {
      "originalValue": "0.1",
      "index": 6,
      "name": "dev:ScaleVDC",
      "value": "0.1",
      "type": 0
    },
    {
      "originalValue": "0.1",
      "index": 7,
      "name": "dev:ScaleIDC",
      "value": "0.1",
      "type": 0
    },
    {
      "originalValue": "0.1",
      "index": 8,
      "name": "dev:ScaleFrequency",
      "value": "0.1",
      "type": 0
    },
    {
      "originalValue": 0.1,
      "index": 9,
      "name": "dev:ScaleKWH",
      "value": 0.1,
      "type": 2
    },
    {
      "originalValue": "0.1",
      "index": 10,
      "name": "dev:ScaleT",
      "value": "0.1",
      "type": 0
    },
    {
      "originalValue": "0.1",
      "index": 11,
      "name": "dev:ScaleKVA",
      "value": "0.1",
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
      "name": "dev:ScaleKVAR",
      "value": "0.1",
      "type": 0
    },
    {
      "originalValue": "0.1",
      "index": 15,
      "name": "dev:ScaleKWDC",
      "value": "0.1",
      "type": 0
    },
    {
      "originalValue": "Status=opmode",
      "index": 16,
      "name": "dev:Alias",
      "value": "Status=opmode",
      "type": 0
    },
    {
      "originalValue": "inv4",
      "index": 17,
      "name": "ShortName",
      "value": "inv4",
      "type": 0
    }
  ],
  "deviceRegisters": [
    {
      "index": 0,
      "name": "Active Power",
      "localizedName": "Active Power",
      "dataName": "KwAC",
      "standardDataName": "Active_Power",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kW",
      "dataNameDetail": null
    },
    {
      "index": 1,
      "name": "Active Energy Gross",
      "localizedName": "Active Energy Net (with Offset)",
      "dataName": "KwhAC",
      "standardDataName": "Active_Energy_Gross",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kWh",
      "dataNameDetail": null
    },
    {
      "index": 2,
      "name": "Active Energy Gross Raw",
      "localizedName": "Active Energy Net (without Offset)",
      "dataName": "KwhACraw",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kWh",
      "dataNameDetail": null
    },
    {
      "index": 3,
      "name": "Frequency",
      "localizedName": "Frequency",
      "dataName": "Frequency",
      "standardDataName": "Frequency",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "Hz",
      "dataNameDetail": null
    },
    {
      "index": 4,
      "name": "AC Voltage AB",
      "localizedName": "AC Voltage A-B (Line-Line)",
      "dataName": "VacAB",
      "standardDataName": "Voltage_AB",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 5,
      "name": "AC Voltage BC",
      "localizedName": "AC Voltage B-C (Line-Line)",
      "dataName": "VacBC",
      "standardDataName": "Voltage_BC",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 6,
      "name": "AC Voltage CA",
      "localizedName": "AC Voltage C-A (Line-Line)",
      "dataName": "VacCA",
      "standardDataName": "Voltage_CA",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 7,
      "name": "AC Current A",
      "localizedName": "AC Current A",
      "dataName": "IacA",
      "standardDataName": "Current_A",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 8,
      "name": "AC Current B",
      "localizedName": "AC Current B",
      "dataName": "IacB",
      "standardDataName": "Current_B",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 9,
      "name": "AC Current C",
      "localizedName": "AC Current C",
      "dataName": "IacC",
      "standardDataName": "Current_C",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 10,
      "name": "AC Current Average",
      "localizedName": "AC Current Average",
      "dataName": "Iac",
      "standardDataName": "Current_Avg",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 11,
      "name": "AC Voltage Average L-N",
      "localizedName": "AC Voltage Average L-N",
      "dataName": "Vac",
      "standardDataName": "Voltage_LN_Avg",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 12,
      "name": "Apparent Power",
      "localizedName": "Apparent Power",
      "dataName": "KVA",
      "standardDataName": "Apparent_Power",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kVA",
      "dataNameDetail": null
    },
    {
      "index": 13,
      "name": "Reactive Power",
      "localizedName": "Reactive Power",
      "dataName": "KVAR",
      "standardDataName": "Reactive_Power",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kVAR",
      "dataNameDetail": null
    },
    {
      "index": 14,
      "name": "Power Factor",
      "localizedName": "Power Factor",
      "dataName": "PowerFactor",
      "standardDataName": "Power_Factor",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "PF",
      "dataNameDetail": null
    },
    {
      "index": 15,
      "name": "DC Voltage 1",
      "localizedName": "DC Voltage 1",
      "dataName": "Vdc1",
      "standardDataName": "DC_Voltage1",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 16,
      "name": "DC Current 1",
      "localizedName": "DC current 1",
      "dataName": "Idc1",
      "standardDataName": "DC_Current1",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 17,
      "name": "DC Voltage 2",
      "localizedName": "DC Voltage 2",
      "dataName": "Vdc2",
      "standardDataName": "DC_Voltage2",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 18,
      "name": "DC Current 2",
      "localizedName": "DC current 2",
      "dataName": "Idc2",
      "standardDataName": "DC_Current2",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 19,
      "name": "DC Voltage 3",
      "localizedName": "DC Voltage 3",
      "dataName": "Vdc3",
      "standardDataName": "DC_Voltage3",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 20,
      "name": "DC Current 3",
      "localizedName": "DC current 3",
      "dataName": "Idc3",
      "standardDataName": "DC_Current3",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 21,
      "name": "DC Current Total",
      "localizedName": "DC Current Total",
      "dataName": "Idc",
      "standardDataName": "DC_Current_Total",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 22,
      "name": "DC Voltage Average",
      "localizedName": "DC Voltage Average",
      "dataName": "Vdc",
      "standardDataName": "DC_Voltage_Avg",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 23,
      "name": "DC Power Total",
      "localizedName": "DC Power",
      "dataName": "KwDC",
      "standardDataName": "DC_Power_Total",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kW",
      "dataNameDetail": null
    },
    {
      "index": 24,
      "name": "Device Temperature",
      "localizedName": "Device Temperature",
      "dataName": "DeviceTemp",
      "standardDataName": "Temp_Device",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "°F",
      "dataNameDetail": null
    },
    {
      "index": 25,
      "name": "Internal Temperature",
      "localizedName": "Internal Temperature",
      "dataName": "InternalTemp",
      "standardDataName": "Temp_Internal",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "°F",
      "dataNameDetail": null
    },
    {
      "index": 26,
      "name": "XMFR Temperature",
      "localizedName": "XMFR Temperature",
      "dataName": "Temp_XMFR",
      "standardDataName": "Temp_XMFR",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "°F",
      "dataNameDetail": null
    },
    {
      "index": 27,
      "name": "Fault Code",
      "localizedName": "Fault Code",
      "dataName": "Fault",
      "standardDataName": "Fault",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 28,
      "name": "Warn Code",
      "localizedName": "Warn Code",
      "dataName": "Warning",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 29,
      "name": "Fault Code 0",
      "localizedName": "Fault Code 0",
      "dataName": "Fault0",
      "standardDataName": "Fault0",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 30,
      "name": "Fault Code 1",
      "localizedName": "Fault 1",
      "dataName": "Fault1",
      "standardDataName": "Fault1",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 31,
      "name": "Fault Code 2",
      "localizedName": "Fault 2",
      "dataName": "Fault2",
      "standardDataName": "Fault2",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 32,
      "name": "Fault Code 3",
      "localizedName": "Fault 3",
      "dataName": "Fault3",
      "standardDataName": "Fault3",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 33,
      "name": "Fault Code 4",
      "localizedName": "Fault 4",
      "dataName": "Fault4",
      "standardDataName": "Fault4",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 34,
      "name": "Inverter Work Mode",
      "localizedName": "Operating Mode",
      "dataName": "opmode",
      "standardDataName": "Op_Mode",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "Derate: 0x800;Running:0x1000;Standby:0x2000;Check:0x4000;Fault:0x8000",
      "dataNameDetail": null
    },
    {
      "index": 35,
      "name": "Firmware Version",
      "localizedName": "Firmware Version",
      "dataName": "Firmware_Version",
      "standardDataName": "Firmware_Version",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 36,
      "name": "Serial Number",
      "localizedName": "Serial Number",
      "dataName": "Serial_Number",
      "standardDataName": "Serial_Number",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": null
    }
  ],
  "additionalRegisters": [],
  "decreaseDifference": 6000,
  "autoCorrectDecrease": true,
  "fixedEnergyOffset": 0,
  "increaseDifference": 6000,
  "autoCorrectIncrease": true,
  "isThermal": false,
  "reverse": false,
  "registerOffsets": [
    {
      "index": 0,
      "registerAddress": 22,
      "registerModbusName": "Active Energy Gross",
      "name": "KWHoffset",
      "value": 0
    },
    {
      "index": 1,
      "registerAddress": 9999,
      "registerModbusName": "Active Energy Gross Raw",
      "name": "",
      "value": 0
    }
  ],
  "driverRegisters": [
    {
      "index": 0,
      "name": "Active Power",
      "localizedName": "",
      "dataName": "KwAC",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 38,
        "registerName": "Active Power",
        "description": "Active Power (Equivalent: KwAC)",
        "dataName": "KwAC",
        "details": {
          "isFloat": true,
          "doublePrecision": false,
          "isStatus": false,
          "units": 10,
          "condense": 0,
          "allowArchiveRaw": false,
          "adminHide": false,
          "aCmeter": false,
          "dCmeter": false,
          "isStandardDataName": false,
          "equivalent": 0,
          "functions": "",
          "functionCodes": [],
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "KW,Active_Power",
          "otherAliasPTDataNames": [
            2,
            230
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 38,
        "otherAliasPTDataNames": [
          2,
          230
        ],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "Active Energy Gross",
      "localizedName": "",
      "dataName": "KwhAC",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 40,
        "registerName": "Active Energy Gross",
        "description": "Active Energy Gross (Equivalent: KwhAC)",
        "dataName": "KwhAC",
        "details": {
          "isFloat": true,
          "doublePrecision": true,
          "isStatus": false,
          "units": 11,
          "condense": 16,
          "allowArchiveRaw": false,
          "adminHide": false,
          "aCmeter": false,
          "dCmeter": false,
          "isStandardDataName": false,
          "equivalent": 0,
          "functions": "",
          "functionCodes": [],
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "Active_Energy_Gross",
          "otherAliasPTDataNames": [
            228
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 40,
        "otherAliasPTDataNames": [
          228
        ],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "Active Energy Gross Raw",
      "localizedName": "",
      "dataName": "KwhACraw",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 41,
        "registerName": "Active Energy Net Raw",
        "description": "Active Energy Net Raw (Equivalent: KwhACraw)",
        "dataName": "KwhACraw",
        "details": {
          "isFloat": true,
          "doublePrecision": true,
          "isStatus": false,
          "units": 11,
          "condense": 16,
          "allowArchiveRaw": false,
          "adminHide": false,
          "aCmeter": false,
          "dCmeter": false,
          "isStandardDataName": false,
          "equivalent": 0,
          "functions": "",
          "functionCodes": [],
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 41,
        "otherAliasPTDataNames": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "Active Energy Today",
      "localizedName": "",
      "dataName": "",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 0,
      "name": "Frequency",
      "localizedName": "",
      "dataName": "Frequency",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 220,
        "registerName": "Frequency",
        "description": "Frequency (Equivalent: Frequency)",
        "dataName": "Frequency",
        "details": {
          "isFloat": true,
          "doublePrecision": false,
          "isStatus": false,
          "units": 43,
          "condense": 0,
          "allowArchiveRaw": false,
          "adminHide": false,
          "aCmeter": true,
          "dCmeter": false,
          "isStandardDataName": true,
          "equivalent": 0,
          "functions": "PM,GM,CM,XM,SM,PV,BI,BS,BB,PP,MV,HV,BG",
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
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "Hz,Freq",
          "otherAliasPTDataNames": [
            219,
            221
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": true,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 220,
        "otherAliasPTDataNames": [
          219,
          221
        ],
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
            "priorityOrder": 1,
            "dataName": 220,
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "dataNameAndType": "Frequency (Standard)"
          },
          {
            "priorityOrder": 2,
            "dataName": 219,
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "dataNameAndType": "Hz (Alias)"
          },
          {
            "priorityOrder": 3,
            "dataName": 221,
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "dataNameAndType": "Freq (Alias)"
          }
        ],
        "standardDataNameArchiveRawAndIntervalData": true,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "AC Voltage AB",
      "localizedName": "",
      "dataName": "VacAB",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 20,
        "registerName": "AC Voltage AB",
        "description": "AC Voltage AB (Equivalent: VacAB)",
        "dataName": "VacAB",
        "details": {
          "isFloat": true,
          "doublePrecision": false,
          "isStatus": false,
          "units": 2,
          "condense": 0,
          "allowArchiveRaw": false,
          "adminHide": false,
          "aCmeter": false,
          "dCmeter": false,
          "isStandardDataName": false,
          "equivalent": 0,
          "functions": "",
          "functionCodes": [],
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "AC_Voltage_AB,VaB,Voltage_AB",
          "otherAliasPTDataNames": [
            346,
            18,
            323
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 20,
        "otherAliasPTDataNames": [
          346,
          18,
          323
        ],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "AC Voltage BC",
      "localizedName": "",
      "dataName": "VacBC",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 22,
        "registerName": "AC Voltage BC",
        "description": "AC Voltage BC (Equivalent: VacBC)",
        "dataName": "VacBC",
        "details": {
          "isFloat": true,
          "doublePrecision": false,
          "isStatus": false,
          "units": 2,
          "condense": 0,
          "allowArchiveRaw": false,
          "adminHide": false,
          "aCmeter": false,
          "dCmeter": false,
          "isStandardDataName": false,
          "equivalent": 0,
          "functions": "",
          "functionCodes": [],
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "AC_Voltage_BC,Vbc,Voltage_BC",
          "otherAliasPTDataNames": [
            349,
            21,
            325
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 22,
        "otherAliasPTDataNames": [
          349,
          21,
          325
        ],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "AC Voltage CA",
      "localizedName": "",
      "dataName": "VacCA",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 23,
        "registerName": "AC Voltage CA",
        "description": "AC Voltage CA (Equivalent: VacCA)",
        "dataName": "VacCA",
        "details": {
          "isFloat": true,
          "doublePrecision": false,
          "isStatus": false,
          "units": 2,
          "condense": 0,
          "allowArchiveRaw": false,
          "adminHide": false,
          "aCmeter": false,
          "dCmeter": false,
          "isStandardDataName": false,
          "equivalent": 0,
          "functions": "",
          "functionCodes": [],
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "AC_Voltage_CA,Vca,Voltage_CA",
          "otherAliasPTDataNames": [
            351,
            24,
            327
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 23,
        "otherAliasPTDataNames": [
          351,
          24,
          327
        ],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "AC Current A",
      "localizedName": "",
      "dataName": "IacA",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 25,
        "registerName": "AC Current A",
        "description": "AC Current A (Equivalent: IacA)",
        "dataName": "IacA",
        "details": {
          "isFloat": true,
          "doublePrecision": false,
          "isStatus": false,
          "units": 4,
          "condense": 0,
          "allowArchiveRaw": false,
          "adminHide": false,
          "aCmeter": false,
          "dCmeter": false,
          "isStandardDataName": false,
          "equivalent": 0,
          "functions": "",
          "functionCodes": [],
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "AC_Current_A,Current_A",
          "otherAliasPTDataNames": [
            342,
            263
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 25,
        "otherAliasPTDataNames": [
          342,
          263
        ],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "AC Current B",
      "localizedName": "",
      "dataName": "IacB",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 26,
        "registerName": "AC Current B",
        "description": "AC Current B (Equivalent: IacB)",
        "dataName": "IacB",
        "details": {
          "isFloat": true,
          "doublePrecision": false,
          "isStatus": false,
          "units": 4,
          "condense": 0,
          "allowArchiveRaw": false,
          "adminHide": false,
          "aCmeter": false,
          "dCmeter": false,
          "isStandardDataName": false,
          "equivalent": 0,
          "functions": "",
          "functionCodes": [],
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "AC_Current_B,Current_B",
          "otherAliasPTDataNames": [
            343,
            264
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 26,
        "otherAliasPTDataNames": [
          343,
          264
        ],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "AC Current C",
      "localizedName": "",
      "dataName": "IacC",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 27,
        "registerName": "AC Current C",
        "description": "AC Current C (Equivalent: IacC)",
        "dataName": "IacC",
        "details": {
          "isFloat": true,
          "doublePrecision": false,
          "isStatus": false,
          "units": 4,
          "condense": 0,
          "allowArchiveRaw": false,
          "adminHide": false,
          "aCmeter": false,
          "dCmeter": false,
          "isStandardDataName": false,
          "equivalent": 0,
          "functions": "",
          "functionCodes": [],
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "AC_Current_C,Current_C",
          "otherAliasPTDataNames": [
            344,
            265
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 27,
        "otherAliasPTDataNames": [
          344,
          265
        ],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "AC Current Average",
      "localizedName": "",
      "dataName": "Iac",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 37,
        "registerName": "AC Current Average",
        "description": "AC Current Average (Equivalent: Iac)",
        "dataName": "Iac",
        "details": {
          "isFloat": true,
          "doublePrecision": false,
          "isStatus": false,
          "units": 4,
          "condense": 0,
          "allowArchiveRaw": false,
          "adminHide": false,
          "aCmeter": false,
          "dCmeter": false,
          "isStandardDataName": false,
          "equivalent": 0,
          "functions": "",
          "functionCodes": [],
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "AC_Current_Avg,Iavg,Current_Avg",
          "otherAliasPTDataNames": [
            345,
            267,
            266
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 37,
        "otherAliasPTDataNames": [
          345,
          267,
          266
        ],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "AC Voltage Average L-N",
      "localizedName": "",
      "dataName": "Vac",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 36,
        "registerName": "AC Voltage Average L-N",
        "description": "AC Voltage Average L-N (Equivalent: Vac)",
        "dataName": "Vac",
        "details": {
          "isFloat": true,
          "doublePrecision": false,
          "isStatus": false,
          "units": 2,
          "condense": 0,
          "allowArchiveRaw": false,
          "adminHide": false,
          "aCmeter": false,
          "dCmeter": false,
          "isStandardDataName": false,
          "equivalent": 0,
          "functions": "",
          "functionCodes": [],
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "Vacln,Vaclna,VNavg,Voltage_LN_Avg,AC_Voltage_LN_Avg",
          "otherAliasPTDataNames": [
            338,
            339,
            337,
            336,
            341
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 36,
        "otherAliasPTDataNames": [
          338,
          339,
          337,
          336,
          341
        ],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "Apparent Power",
      "localizedName": "",
      "dataName": "KVA",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 6,
        "registerName": "Apparent Power",
        "description": "Apparent Power (Equivalent: KVA)",
        "dataName": "KVA",
        "details": {
          "isFloat": true,
          "doublePrecision": false,
          "isStatus": false,
          "units": 20,
          "condense": 0,
          "allowArchiveRaw": false,
          "adminHide": false,
          "aCmeter": false,
          "dCmeter": false,
          "isStandardDataName": false,
          "equivalent": 0,
          "functions": "",
          "functionCodes": [],
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "VA,VAs,Apparent_Power",
          "otherAliasPTDataNames": [
            257,
            258,
            256
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 6,
        "otherAliasPTDataNames": [
          257,
          258,
          256
        ],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "Reactive Power",
      "localizedName": "",
      "dataName": "KVAR",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 3,
        "registerName": "Reactive Power",
        "description": "Reactive Power (Equivalent: KVAR)",
        "dataName": "KVAR",
        "details": {
          "isFloat": true,
          "doublePrecision": false,
          "isStatus": false,
          "units": 26,
          "condense": 0,
          "allowArchiveRaw": false,
          "adminHide": false,
          "aCmeter": false,
          "dCmeter": false,
          "isStandardDataName": false,
          "equivalent": 0,
          "functions": "",
          "functionCodes": [],
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "VAR,VARs,Reactive_Power",
          "otherAliasPTDataNames": [
            317,
            307,
            306
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 3,
        "otherAliasPTDataNames": [
          317,
          307,
          306
        ],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "Power Factor",
      "localizedName": "",
      "dataName": "PowerFactor",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 12,
        "registerName": "Power Factor",
        "description": "Power Factor (Equivalent: PowerFactor)",
        "dataName": "PowerFactor",
        "details": {
          "isFloat": true,
          "doublePrecision": false,
          "isStatus": false,
          "units": 39,
          "condense": 10,
          "allowArchiveRaw": false,
          "adminHide": false,
          "aCmeter": true,
          "dCmeter": false,
          "isStandardDataName": false,
          "equivalent": 0,
          "functions": "PM,GM,CM,XM,SM,PV,BI,BG,PP,BS,BB",
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
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "Power_Factor",
          "otherAliasPTDataNames": [
            284
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 12,
        "otherAliasPTDataNames": [
          284
        ],
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
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "DC Voltage 1",
      "localizedName": "",
      "dataName": "Vdc1",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 49,
        "registerName": "DC Voltage (specify string/bus/zone/ channel)",
        "description": "DC Voltage (specify string/bus/zone/ channel) (Equivalent: Vdc_)",
        "dataName": "Vdc_",
        "details": {
          "isFloat": true,
          "doublePrecision": false,
          "isStatus": false,
          "units": 2,
          "condense": 0,
          "allowArchiveRaw": false,
          "adminHide": false,
          "aCmeter": false,
          "dCmeter": false,
          "isStandardDataName": false,
          "equivalent": 0,
          "functions": "",
          "functionCodes": [],
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "DC_Voltage_",
          "otherAliasPTDataNames": [
            367
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": true,
        "registerSetsArrayDisplayedName": "DC Voltage (specify RegisterSets)",
        "equivalent": 49,
        "otherAliasPTDataNames": [
          367
        ],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "DC Current 1",
      "localizedName": "",
      "dataName": "Idc1",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 50,
        "registerName": "DC Current (specify string/bus/zone/ channel)",
        "description": "DC Current (specify string/bus/zone/ channel) (Equivalent: Idc_)",
        "dataName": "Idc_",
        "details": {
          "isFloat": true,
          "doublePrecision": false,
          "isStatus": false,
          "units": 4,
          "condense": 0,
          "allowArchiveRaw": false,
          "adminHide": false,
          "aCmeter": false,
          "dCmeter": false,
          "isStandardDataName": false,
          "equivalent": 0,
          "functions": "",
          "functionCodes": [],
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "DC_Current_,ZoneAmps_",
          "otherAliasPTDataNames": [
            365,
            165
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": true,
        "registerSetsArrayDisplayedName": "DC Current (specify RegisterSets)",
        "equivalent": 50,
        "otherAliasPTDataNames": [
          365,
          165
        ],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "DC Voltage 2",
      "localizedName": "",
      "dataName": "Vdc2",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 49,
        "registerName": "DC Voltage (specify string/bus/zone/ channel)",
        "description": "DC Voltage (specify string/bus/zone/ channel) (Equivalent: Vdc_)",
        "dataName": "Vdc_",
        "details": {
          "isFloat": true,
          "doublePrecision": false,
          "isStatus": false,
          "units": 2,
          "condense": 0,
          "allowArchiveRaw": false,
          "adminHide": false,
          "aCmeter": false,
          "dCmeter": false,
          "isStandardDataName": false,
          "equivalent": 0,
          "functions": "",
          "functionCodes": [],
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "DC_Voltage_",
          "otherAliasPTDataNames": [
            367
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": true,
        "registerSetsArrayDisplayedName": "DC Voltage (specify RegisterSets)",
        "equivalent": 49,
        "otherAliasPTDataNames": [
          367
        ],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "DC Current 2",
      "localizedName": "",
      "dataName": "Idc2",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 50,
        "registerName": "DC Current (specify string/bus/zone/ channel)",
        "description": "DC Current (specify string/bus/zone/ channel) (Equivalent: Idc_)",
        "dataName": "Idc_",
        "details": {
          "isFloat": true,
          "doublePrecision": false,
          "isStatus": false,
          "units": 4,
          "condense": 0,
          "allowArchiveRaw": false,
          "adminHide": false,
          "aCmeter": false,
          "dCmeter": false,
          "isStandardDataName": false,
          "equivalent": 0,
          "functions": "",
          "functionCodes": [],
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "DC_Current_,ZoneAmps_",
          "otherAliasPTDataNames": [
            365,
            165
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": true,
        "registerSetsArrayDisplayedName": "DC Current (specify RegisterSets)",
        "equivalent": 50,
        "otherAliasPTDataNames": [
          365,
          165
        ],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "DC Voltage 3",
      "localizedName": "",
      "dataName": "Vdc3",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 49,
        "registerName": "DC Voltage (specify string/bus/zone/ channel)",
        "description": "DC Voltage (specify string/bus/zone/ channel) (Equivalent: Vdc_)",
        "dataName": "Vdc_",
        "details": {
          "isFloat": true,
          "doublePrecision": false,
          "isStatus": false,
          "units": 2,
          "condense": 0,
          "allowArchiveRaw": false,
          "adminHide": false,
          "aCmeter": false,
          "dCmeter": false,
          "isStandardDataName": false,
          "equivalent": 0,
          "functions": "",
          "functionCodes": [],
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "DC_Voltage_",
          "otherAliasPTDataNames": [
            367
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": true,
        "registerSetsArrayDisplayedName": "DC Voltage (specify RegisterSets)",
        "equivalent": 49,
        "otherAliasPTDataNames": [
          367
        ],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "DC Current 3",
      "localizedName": "",
      "dataName": "Idc3",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 50,
        "registerName": "DC Current (specify string/bus/zone/ channel)",
        "description": "DC Current (specify string/bus/zone/ channel) (Equivalent: Idc_)",
        "dataName": "Idc_",
        "details": {
          "isFloat": true,
          "doublePrecision": false,
          "isStatus": false,
          "units": 4,
          "condense": 0,
          "allowArchiveRaw": false,
          "adminHide": false,
          "aCmeter": false,
          "dCmeter": false,
          "isStandardDataName": false,
          "equivalent": 0,
          "functions": "",
          "functionCodes": [],
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "DC_Current_,ZoneAmps_",
          "otherAliasPTDataNames": [
            365,
            165
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": true,
        "registerSetsArrayDisplayedName": "DC Current (specify RegisterSets)",
        "equivalent": 50,
        "otherAliasPTDataNames": [
          365,
          165
        ],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "DC Current Total",
      "localizedName": "",
      "dataName": "Idc",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 34,
        "registerName": "DC Current",
        "description": "DC Current (Equivalent: Idc)",
        "dataName": "Idc",
        "details": {
          "isFloat": true,
          "doublePrecision": false,
          "isStatus": false,
          "units": 4,
          "condense": 0,
          "allowArchiveRaw": false,
          "adminHide": false,
          "aCmeter": false,
          "dCmeter": false,
          "isStandardDataName": false,
          "equivalent": 0,
          "functions": "",
          "functionCodes": [],
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "DC_Current_Total",
          "otherAliasPTDataNames": [
            430
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 34,
        "otherAliasPTDataNames": [
          430
        ],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "DC Voltage Average",
      "localizedName": "",
      "dataName": "Vdc",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 33,
        "registerName": "DC Voltage",
        "description": "DC Voltage (Equivalent: Vdc)",
        "dataName": "Vdc",
        "details": {
          "isFloat": true,
          "doublePrecision": false,
          "isStatus": false,
          "units": 2,
          "condense": 0,
          "allowArchiveRaw": false,
          "adminHide": false,
          "aCmeter": false,
          "dCmeter": false,
          "isStandardDataName": false,
          "equivalent": 0,
          "functions": "",
          "functionCodes": [],
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "DC_Voltage,DC_Voltage_Avg",
          "otherAliasPTDataNames": [
            438,
            439
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 33,
        "otherAliasPTDataNames": [
          438,
          439
        ],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "DC Power Total",
      "localizedName": "",
      "dataName": "KwDC",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 35,
        "registerName": "DC Power",
        "description": "DC Power (Equivalent: KwDC)",
        "dataName": "KwDC",
        "details": {
          "isFloat": true,
          "doublePrecision": false,
          "isStatus": false,
          "units": 10,
          "condense": 0,
          "allowArchiveRaw": false,
          "adminHide": false,
          "aCmeter": false,
          "dCmeter": false,
          "isStandardDataName": false,
          "equivalent": 0,
          "functions": "",
          "functionCodes": [],
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "DC_Power,DC_Power_Total",
          "otherAliasPTDataNames": [
            436,
            437
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 35,
        "otherAliasPTDataNames": [
          436,
          437
        ],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "Device Temperature",
      "localizedName": "",
      "dataName": "DeviceTemp",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 187,
        "registerName": "Device Temperature",
        "description": "Device Temperature (Equivalent: DeviceTemp)",
        "dataName": "DeviceTemp",
        "details": {
          "isFloat": true,
          "doublePrecision": false,
          "isStatus": false,
          "units": 30,
          "condense": 0,
          "allowArchiveRaw": false,
          "adminHide": false,
          "aCmeter": false,
          "dCmeter": false,
          "isStandardDataName": false,
          "equivalent": 0,
          "functions": "",
          "functionCodes": [],
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "Temp_Device",
          "otherAliasPTDataNames": [
            452
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 187,
        "otherAliasPTDataNames": [
          452
        ],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "Internal Temperature",
      "localizedName": "",
      "dataName": "InternalTemp",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 188,
        "registerName": "Internal Temperature",
        "description": "Internal Temperature (Equivalent: InternalTemp)",
        "dataName": "InternalTemp",
        "details": {
          "isFloat": true,
          "doublePrecision": false,
          "isStatus": false,
          "units": 30,
          "condense": 0,
          "allowArchiveRaw": false,
          "adminHide": false,
          "aCmeter": false,
          "dCmeter": false,
          "isStandardDataName": false,
          "equivalent": 0,
          "functions": "",
          "functionCodes": [],
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "InteriorTemp,Temp_Internal",
          "otherAliasPTDataNames": [
            459,
            458
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 188,
        "otherAliasPTDataNames": [
          459,
          458
        ],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "XMFR Temperature",
      "localizedName": "",
      "dataName": "Temp_XMFR",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 387,
        "registerName": "Transformer Temp Avg",
        "description": "Transformer Temp Avg (Equivalent: Temp_XMFR)",
        "dataName": "Temp_XMFR",
        "details": {
          "isFloat": true,
          "doublePrecision": false,
          "isStatus": false,
          "units": 30,
          "condense": 0,
          "allowArchiveRaw": false,
          "adminHide": false,
          "aCmeter": false,
          "dCmeter": false,
          "isStandardDataName": true,
          "equivalent": 0,
          "functions": "PV,BI,BG,MV,HV",
          "functionCodes": [
            1,
            39,
            45,
            49,
            48
          ],
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": true,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 387,
        "otherAliasPTDataNames": [],
        "functionCodes": [
          1,
          39,
          45,
          49,
          48
        ],
        "goldenDriverDataNames": [
          {
            "priorityOrder": 1,
            "dataName": 387,
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "dataNameAndType": "Temp_XMFR (Standard)"
          }
        ],
        "standardDataNameArchiveRawAndIntervalData": true,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "Error Time YYYY",
      "localizedName": "",
      "dataName": "",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 0,
      "name": "Error Time MM-DD",
      "localizedName": "",
      "dataName": "",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 0,
      "name": "Error Time HH-MM",
      "localizedName": "",
      "dataName": "",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 0,
      "name": "Error Time SS-00",
      "localizedName": "",
      "dataName": "",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 0,
      "name": "Fault Code",
      "localizedName": "",
      "dataName": "Fault",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 440,
        "registerName": "Fault",
        "description": "Fault (Equivalent: Fault)",
        "dataName": "Fault",
        "details": {
          "isFloat": false,
          "doublePrecision": false,
          "isStatus": true,
          "units": 0,
          "condense": 1,
          "allowArchiveRaw": true,
          "adminHide": false,
          "aCmeter": true,
          "dCmeter": true,
          "isStandardDataName": true,
          "equivalent": 0,
          "functions": "PM,GM,CM,XM,SM,BM,DP,PV,BI,DC,ST,SC,SA,SS,BA,RK,BS,BB,PP,TU,MV,HV,FS,BG",
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
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": true,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 440,
        "otherAliasPTDataNames": [],
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
            "priorityOrder": 1,
            "dataName": 440,
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "dataNameAndType": "Fault (Standard)"
          }
        ],
        "standardDataNameArchiveRawAndIntervalData": true,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "Warn Code",
      "localizedName": "",
      "dataName": "Warning",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 204,
        "registerName": "Warning",
        "description": "Warning (Equivalent: Warning)",
        "dataName": "Warning",
        "details": {
          "isFloat": false,
          "doublePrecision": false,
          "isStatus": true,
          "units": 0,
          "condense": 1,
          "allowArchiveRaw": true,
          "adminHide": false,
          "aCmeter": false,
          "dCmeter": false,
          "isStandardDataName": true,
          "equivalent": 0,
          "functions": "BA,RK,BS,BB,PP,TU,FS,MV,HV",
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
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": true,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 204,
        "otherAliasPTDataNames": [],
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
            "priorityOrder": 1,
            "dataName": 204,
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "dataNameAndType": "Warning (Standard)"
          }
        ],
        "standardDataNameArchiveRawAndIntervalData": true,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "Fault Code 0",
      "localizedName": "",
      "dataName": "Fault0",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 441,
        "registerName": "Fault (specify channel)",
        "description": "Fault (specify channel) (Equivalent: Fault_)",
        "dataName": "Fault_",
        "details": {
          "isFloat": false,
          "doublePrecision": false,
          "isStatus": true,
          "units": 0,
          "condense": 1,
          "allowArchiveRaw": true,
          "adminHide": false,
          "aCmeter": true,
          "dCmeter": true,
          "isStandardDataName": true,
          "equivalent": 0,
          "functions": "PM,GM,CM,XM,SM,BM,DP,PV,BI,DC,ST,SC,SA,SS,BG,BA,RK,BS,BB,PP,TU,MV,HV,FS",
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
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": true,
        "isAllowedForRegisterSetsArray": true,
        "registerSetsArrayDisplayedName": "Fault (specify RegisterSets)",
        "equivalent": 441,
        "otherAliasPTDataNames": [],
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
            "priorityOrder": 1,
            "dataName": 441,
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "dataNameAndType": "Fault_ (Standard)"
          }
        ],
        "standardDataNameArchiveRawAndIntervalData": true,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "Fault Code 1",
      "localizedName": "",
      "dataName": "Fault1",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 441,
        "registerName": "Fault (specify channel)",
        "description": "Fault (specify channel) (Equivalent: Fault_)",
        "dataName": "Fault_",
        "details": {
          "isFloat": false,
          "doublePrecision": false,
          "isStatus": true,
          "units": 0,
          "condense": 1,
          "allowArchiveRaw": true,
          "adminHide": false,
          "aCmeter": true,
          "dCmeter": true,
          "isStandardDataName": true,
          "equivalent": 0,
          "functions": "PM,GM,CM,XM,SM,BM,DP,PV,BI,DC,ST,SC,SA,SS,BG,BA,RK,BS,BB,PP,TU,MV,HV,FS",
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
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": true,
        "isAllowedForRegisterSetsArray": true,
        "registerSetsArrayDisplayedName": "Fault (specify RegisterSets)",
        "equivalent": 441,
        "otherAliasPTDataNames": [],
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
            "priorityOrder": 1,
            "dataName": 441,
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "dataNameAndType": "Fault_ (Standard)"
          }
        ],
        "standardDataNameArchiveRawAndIntervalData": true,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "Fault Code 2",
      "localizedName": "",
      "dataName": "Fault2",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 441,
        "registerName": "Fault (specify channel)",
        "description": "Fault (specify channel) (Equivalent: Fault_)",
        "dataName": "Fault_",
        "details": {
          "isFloat": false,
          "doublePrecision": false,
          "isStatus": true,
          "units": 0,
          "condense": 1,
          "allowArchiveRaw": true,
          "adminHide": false,
          "aCmeter": true,
          "dCmeter": true,
          "isStandardDataName": true,
          "equivalent": 0,
          "functions": "PM,GM,CM,XM,SM,BM,DP,PV,BI,DC,ST,SC,SA,SS,BG,BA,RK,BS,BB,PP,TU,MV,HV,FS",
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
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": true,
        "isAllowedForRegisterSetsArray": true,
        "registerSetsArrayDisplayedName": "Fault (specify RegisterSets)",
        "equivalent": 441,
        "otherAliasPTDataNames": [],
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
            "priorityOrder": 1,
            "dataName": 441,
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "dataNameAndType": "Fault_ (Standard)"
          }
        ],
        "standardDataNameArchiveRawAndIntervalData": true,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "Fault Code 3",
      "localizedName": "",
      "dataName": "Fault3",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 441,
        "registerName": "Fault (specify channel)",
        "description": "Fault (specify channel) (Equivalent: Fault_)",
        "dataName": "Fault_",
        "details": {
          "isFloat": false,
          "doublePrecision": false,
          "isStatus": true,
          "units": 0,
          "condense": 1,
          "allowArchiveRaw": true,
          "adminHide": false,
          "aCmeter": true,
          "dCmeter": true,
          "isStandardDataName": true,
          "equivalent": 0,
          "functions": "PM,GM,CM,XM,SM,BM,DP,PV,BI,DC,ST,SC,SA,SS,BG,BA,RK,BS,BB,PP,TU,MV,HV,FS",
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
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": true,
        "isAllowedForRegisterSetsArray": true,
        "registerSetsArrayDisplayedName": "Fault (specify RegisterSets)",
        "equivalent": 441,
        "otherAliasPTDataNames": [],
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
            "priorityOrder": 1,
            "dataName": 441,
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "dataNameAndType": "Fault_ (Standard)"
          }
        ],
        "standardDataNameArchiveRawAndIntervalData": true,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "Fault Code 4",
      "localizedName": "",
      "dataName": "Fault4",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 441,
        "registerName": "Fault (specify channel)",
        "description": "Fault (specify channel) (Equivalent: Fault_)",
        "dataName": "Fault_",
        "details": {
          "isFloat": false,
          "doublePrecision": false,
          "isStatus": true,
          "units": 0,
          "condense": 1,
          "allowArchiveRaw": true,
          "adminHide": false,
          "aCmeter": true,
          "dCmeter": true,
          "isStandardDataName": true,
          "equivalent": 0,
          "functions": "PM,GM,CM,XM,SM,BM,DP,PV,BI,DC,ST,SC,SA,SS,BG,BA,RK,BS,BB,PP,TU,MV,HV,FS",
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
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": true,
        "isAllowedForRegisterSetsArray": true,
        "registerSetsArrayDisplayedName": "Fault (specify RegisterSets)",
        "equivalent": 441,
        "otherAliasPTDataNames": [],
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
            "priorityOrder": 1,
            "dataName": 441,
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "dataNameAndType": "Fault_ (Standard)"
          }
        ],
        "standardDataNameArchiveRawAndIntervalData": true,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "Inverter Work Mode",
      "localizedName": "",
      "dataName": "opmode",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 442,
        "registerName": "Operating Mode",
        "description": "Operating Mode (Equivalent: opmode)",
        "dataName": "opmode",
        "details": {
          "isFloat": false,
          "doublePrecision": false,
          "isStatus": true,
          "units": 0,
          "condense": 1,
          "allowArchiveRaw": true,
          "adminHide": false,
          "aCmeter": false,
          "dCmeter": false,
          "isStandardDataName": false,
          "equivalent": 0,
          "functions": "PV,BI,DC,ST,BG",
          "functionCodes": [
            1,
            39,
            40,
            24,
            45
          ],
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "Op_Mode",
          "otherAliasPTDataNames": [
            443
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 442,
        "otherAliasPTDataNames": [
          443
        ],
        "functionCodes": [
          1,
          39,
          40,
          24,
          45
        ],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "Type Device Model",
      "localizedName": "",
      "dataName": "",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 0,
      "name": "Protocol Version",
      "localizedName": "",
      "dataName": "",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 0,
      "name": "Firmware Version",
      "localizedName": "",
      "dataName": "Firmware_Version",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 280,
        "registerName": "Firmware Version",
        "description": "Firmware Version (Equivalent: Firmware_Version)",
        "dataName": "Firmware_Version",
        "details": {
          "isFloat": true,
          "doublePrecision": false,
          "isStatus": false,
          "units": 0,
          "condense": 1,
          "allowArchiveRaw": false,
          "adminHide": false,
          "aCmeter": true,
          "dCmeter": true,
          "isStandardDataName": true,
          "equivalent": 0,
          "functions": "PM,GM,CM,XM,SM,BM,DP,PV,BI,DC,WS,ST,SC,SA,SS,BA,RK,BS,BB,PP,MV,HV,FS,BG",
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
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "FirmwareV",
          "otherAliasPTDataNames": [
            279
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": true,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 280,
        "otherAliasPTDataNames": [
          279
        ],
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
            "priorityOrder": 1,
            "dataName": 280,
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "dataNameAndType": "Firmware_Version (Standard)"
          },
          {
            "priorityOrder": 2,
            "dataName": 279,
            "dataNameType": "Alias",
            "isUsedForRegisterSetsArray": false,
            "dataNameAndType": "FirmwareV (Alias)"
          }
        ],
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "Serial Number",
      "localizedName": "",
      "dataName": "Serial_Number",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 321,
        "registerName": "Serial Number",
        "description": "Serial Number (Equivalent: Serial_Number)",
        "dataName": "Serial_Number",
        "details": {
          "isFloat": true,
          "doublePrecision": false,
          "isStatus": false,
          "units": 0,
          "condense": 1,
          "allowArchiveRaw": false,
          "adminHide": false,
          "aCmeter": true,
          "dCmeter": false,
          "isStandardDataName": true,
          "equivalent": 0,
          "functions": "PM,GM,CM,XM,SM,PV,BI,DC,WS,ST,SC,SA,SS,BA,RK,BS,BB,PP,FS,BG",
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
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": true,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 321,
        "otherAliasPTDataNames": [],
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
            "priorityOrder": 1,
            "dataName": 321,
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "dataNameAndType": "Serial_Number (Standard)"
          }
        ],
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "Inverter Model",
      "localizedName": "",
      "dataName": "",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": null
    }
  ],
  "virtualRegisters": [],
  "tags": {
    "key": "{\"ancestorKey\":\"H444573\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
    "lastChanged": null,
    "attributes": [],
    "keywords": [],
    "notes": [
      {
        "key": "x0549f8c0",
        "parentKey": "H444573",
        "authorKey": "U28898",
        "authorName": "Forest Lehman",
        "date": "2024-09-05T18:01:39Z",
        "kind": "text",
        "isEvent": true,
        "text": "Filled in energy and power values, FillVirtual, 3/13/2024 4:50:00 PM through 3/26/2024 12:15:00 PM"
      }
    ],
    "powerDisplays": []
  },
  "sampleRate": 0,
  "uploadRate": 0,
  "oneMinuteData": false,
  "thread": 0,
  "alsoHardwareId": 0,
  "alsoSiteId": 0,
  "siteHasInverterGroups": false,
  "groupAllowed": [
    28
  ],
  "groupKey": "",
  "outputAllowed": [
    2
  ],
  "outputKey": "H444568",
  "weatherStationKey1": "H444582",
  "weatherStationKey2": "H441071",
  "configs": [
    "Pv"
  ],
  "array": null,
  "eGauge": null,
  "gateway": null,
  "kiosk": null,
  "meter": null,
  "pvConfig": {
    "pvModelType": 0,
    "acDcType": 0,
    "acInfo": 2,
    "inverters": [
      {
        "mppWatts": 540.0708000000001,
        "pvSystOutOfSync": false,
        "pvSystModuleId": 0,
        "pvSystConfig": {
          "key": "",
          "manufacturer": "",
          "model": "",
          "cellType": -1,
          "cellsSeries": 0,
          "cellsParallel": 0,
          "cellArea": 0,
          "isc": 0,
          "voc": 0,
          "impp": 0,
          "vmpp": 0,
          "muIsc": 0,
          "rShunt": 0,
          "rSeries": 0,
          "rShuntGinc": 0,
          "rShuntExp": 0,
          "muPMax": 0
        },
        "pvUsaConfig": {
          "irradiance": 0,
          "irradianceSquared": 0,
          "windSpeed": 0,
          "ambientTemperature": 0
        },
        "installationType": 2,
        "bifacialRatio": 0,
        "efficiency": 0,
        "moduleArea": 0,
        "limitOne": 0,
        "limitTempOne": 0,
        "limitTwo": 0,
        "limitTempTwo": 0,
        "acVoltage": 480,
        "dcAmps": 204,
        "dcSize": 68.04,
        "dcVoltage": 1000,
        "inverterLoss": 1,
        "inverterKw": 60,
        "inverterName": "",
        "inverterKva": 66,
        "shadeModel": {
          "hasInterRowShadeModel": 0,
          "albedoWeight": 0,
          "diffuseWeight": 0,
          "regions": [],
          "interRowShadeModel": {
            "azimuth": 0,
            "panelLength": 0,
            "pitch": 0,
            "rows": 0,
            "tilt": 0,
            "topBorderLength": 0
          }
        },
        "numOfStrings": 7,
        "panelsPerString": 18,
        "derate": 0.9,
        "wattsPerPanel": 540,
        "mppVoltage": 41.64,
        "mppAmps": 12.97,
        "tempCoefficient": -0.5,
        "azimuth": 196,
        "tilt": 9,
        "tracking": 0,
        "trackingAngle": 0,
        "derateDetail": false,
        "lightInducedDegradation": 0,
        "pmaxDeviation": 0,
        "mismatch": 0,
        "dcLoss": 0,
        "acLoss": 0,
        "transformerLoss": 0,
        "regressionFunctionList": [],
        "efficiencyCurveId": 0,
        "efficiencyCurveModel": {
          "key": "",
          "modelType": 0,
          "manufacturer": "",
          "modelName": "",
          "pointsList": [],
          "scaleX": 0,
          "scaleY": 0
        },
        "incidenceAngleCurveId": 0,
        "incidenceAngleCurveModel": {
          "key": "",
          "modelType": 0,
          "manufacturer": "",
          "modelName": "",
          "pointsList": [],
          "scaleX": 0,
          "scaleY": 0
        }
      }
    ],
    "fileAKey": "",
    "fileBKey": "",
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
    "monthlyDerate": {
      "jan": 1,
      "feb": 1,
      "mar": 1,
      "apr": 1,
      "may": 1,
      "jun": 1,
      "jul": 1,
      "aug": 1,
      "sep": 1,
      "oct": 1,
      "nov": 1,
      "dec": 1
    },
    "monthlyOutput": {
      "jan": 4580,
      "feb": 5363,
      "mar": 8562,
      "apr": 10855,
      "may": 12819,
      "jun": 13500,
      "jul": 13760,
      "aug": 12799,
      "sep": 10481,
      "oct": 8304,
      "nov": 5633,
      "dec": 4549
    },
    "canIntegrateCombiners": true,
    "hasIntegratedCombiners": false
  },
  "thermal": null,
  "turbine": null,
  "virtualWeather": null,
  "weather": null,
  "zone": null,
  "commonDC": false,
  "commonDCAllMatch": true,
  "locusId": "",
  "syncToLocus": false,
  "taskKey": "",
  "readOnly": false,
  "isReportable": true,
  "latitude": 38.0048431,
  "longitude": -121.8338427,
  "hash": "",
  "hasCapacity": true,
  "inverterKw": 0,
  "siteDcShare": 903.9599999999999,
  "pullData": false
}
```

**Response:**

```json
{
  "key": "H444573",
  "parentKey": "S65552",
  "ts": "2025-12-30T15:45:14Z",
  "description": "Inv 4 (60 kw) CPS-SCA60KTL-DO/US-480",
  "assetId": "",
  "hardwareId": "C20909_S65552_PV3",
  "instance": 3,
  "functionId": "PV3",
  "functionCode": 1,
  "hardwareStatus": 1,
  "capacityKw": 60,
  "sort": 14,
  "gatewayKey": "H444567",
  "gatewayId": "000CC68CBCC1",
  "gatewayFwVersion": "",
  "gatewayScriptCount": "",
  "gatewayType": 2,
  "serialNum": "",
  "modelNum": "CHINT SCA60KTL-DO/US-480",
  "installDate": "2023-04-25",
  "driverId": 20630,
  "driverDescription": "Chint / Solectria TL String Inverter [without Control]",
  "driverFlags": 16386,
  "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
  "driverNotes": "Know issue on some firmware with kWh Energy not counting through the day, and only adding daily values everynight, FW 1797, 2053, 1284\r\rModbus Map: https://www.chintpowersystems.com/downloads/\r\r14-20-23-28-36kW Modbus Map\r25kW-208V Modbus Map\r25kW-408V Modbus Map\r50-60kW Modbus Map\r100/125kW-600V and 100kW-480 Modbus Map\r250/275kW-800 Modbus Map",
  "validatedByKey": "",
  "validatedDateTime": "0001-01-01T00:00:00",
  "debug": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2025-12-30T15:45:17.6497725Z",
  "reportExclude": false,
  "limitedCommunication": false,
  "primary": false,
  "address": "4",
  "unitId": 0,
  "isTcp": false,
  "port": 1,
  "serialMode": 2,
  "baud": "9600",
  "newNote": "",
  "dashboardKey": "",
  "dcRating": 68040,
  "defaultChart": 2,
  "chartSectionCode": 1,
  "conflictNames": null,
  "isConflictAcknowledged": false,
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
      "originalValue": 0.1,
      "index": 3,
      "name": "dev:ScaleKW",
      "value": 0.1,
      "type": 2
    },
    {
      "originalValue": "0.1",
      "index": 4,
      "name": "dev:ScaleV",
      "value": "0.1",
      "type": 0
    },
    {
      "originalValue": "0.1",
      "index": 5,
      "name": "dev:ScaleI",
      "value": "0.1",
      "type": 0
    },
    {
      "originalValue": "0.1",
      "index": 6,
      "name": "dev:ScaleVDC",
      "value": "0.1",
      "type": 0
    },
    {
      "originalValue": "0.1",
      "index": 7,
      "name": "dev:ScaleIDC",
      "value": "0.1",
      "type": 0
    },
    {
      "originalValue": "0.1",
      "index": 8,
      "name": "dev:ScaleFrequency",
      "value": "0.1",
      "type": 0
    },
    {
      "originalValue": 0.1,
      "index": 9,
      "name": "dev:ScaleKWH",
      "value": 0.1,
      "type": 2
    },
    {
      "originalValue": "0.1",
      "index": 10,
      "name": "dev:ScaleT",
      "value": "0.1",
      "type": 0
    },
    {
      "originalValue": "0.1",
      "index": 11,
      "name": "dev:ScaleKVA",
      "value": "0.1",
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
      "name": "dev:ScaleKVAR",
      "value": "0.1",
      "type": 0
    },
    {
      "originalValue": "0.1",
      "index": 14,
      "name": "dev:ScaleKWDC",
      "value": "0.1",
      "type": 0
    },
    {
      "originalValue": "Status=opmode",
      "index": 15,
      "name": "dev:Alias",
      "value": "Status=opmode",
      "type": 0
    },
    {
      "originalValue": "inv4",
      "index": 16,
      "name": "ShortName",
      "value": "inv4",
      "type": 0
    }
  ],
  "deviceRegisters": [
    {
      "index": 0,
      "name": "Active Power",
      "localizedName": "Active Power",
      "dataName": "KwAC",
      "standardDataName": "Active_Power",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kW",
      "dataNameDetail": null
    },
    {
      "index": 1,
      "name": "Active Energy Gross",
      "localizedName": "Active Energy Net (with Offset)",
      "dataName": "KwhAC",
      "standardDataName": "Active_Energy_Gross",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kWh",
      "dataNameDetail": null
    },
    {
      "index": 2,
      "name": "Active Energy Gross Raw",
      "localizedName": "Active Energy Net (without Offset)",
      "dataName": "KwhACraw",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kWh",
      "dataNameDetail": null
    },
    {
      "index": 3,
      "name": "Frequency",
      "localizedName": "Frequency",
      "dataName": "Frequency",
      "standardDataName": "Frequency",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "Hz",
      "dataNameDetail": null
    },
    {
      "index": 4,
      "name": "AC Voltage AB",
      "localizedName": "AC Voltage A-B (Line-Line)",
      "dataName": "VacAB",
      "standardDataName": "Voltage_AB",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 5,
      "name": "AC Voltage BC",
      "localizedName": "AC Voltage B-C (Line-Line)",
      "dataName": "VacBC",
      "standardDataName": "Voltage_BC",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 6,
      "name": "AC Voltage CA",
      "localizedName": "AC Voltage C-A (Line-Line)",
      "dataName": "VacCA",
      "standardDataName": "Voltage_CA",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 7,
      "name": "AC Current A",
      "localizedName": "AC Current A",
      "dataName": "IacA",
      "standardDataName": "Current_A",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 8,
      "name": "AC Current B",
      "localizedName": "AC Current B",
      "dataName": "IacB",
      "standardDataName": "Current_B",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 9,
      "name": "AC Current C",
      "localizedName": "AC Current C",
      "dataName": "IacC",
      "standardDataName": "Current_C",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 10,
      "name": "AC Current Average",
      "localizedName": "AC Current Average",
      "dataName": "Iac",
      "standardDataName": "Current_Avg",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 11,
      "name": "AC Voltage Average L-N",
      "localizedName": "AC Voltage Average L-N",
      "dataName": "Vac",
      "standardDataName": "Voltage_LN_Avg",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 12,
      "name": "Apparent Power",
      "localizedName": "Apparent Power",
      "dataName": "KVA",
      "standardDataName": "Apparent_Power",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kVA",
      "dataNameDetail": null
    },
    {
      "index": 13,
      "name": "Reactive Power",
      "localizedName": "Reactive Power",
      "dataName": "KVAR",
      "standardDataName": "Reactive_Power",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kVAR",
      "dataNameDetail": null
    },
    {
      "index": 14,
      "name": "Power Factor",
      "localizedName": "Power Factor",
      "dataName": "PowerFactor",
      "standardDataName": "Power_Factor",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "PF",
      "dataNameDetail": null
    },
    {
      "index": 15,
      "name": "DC Voltage 1",
      "localizedName": "DC Voltage 1",
      "dataName": "Vdc1",
      "standardDataName": "DC_Voltage1",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 16,
      "name": "DC Current 1",
      "localizedName": "DC current 1",
      "dataName": "Idc1",
      "standardDataName": "DC_Current1",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 17,
      "name": "DC Voltage 2",
      "localizedName": "DC Voltage 2",
      "dataName": "Vdc2",
      "standardDataName": "DC_Voltage2",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 18,
      "name": "DC Current 2",
      "localizedName": "DC current 2",
      "dataName": "Idc2",
      "standardDataName": "DC_Current2",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 19,
      "name": "DC Voltage 3",
      "localizedName": "DC Voltage 3",
      "dataName": "Vdc3",
      "standardDataName": "DC_Voltage3",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 20,
      "name": "DC Current 3",
      "localizedName": "DC current 3",
      "dataName": "Idc3",
      "standardDataName": "DC_Current3",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 21,
      "name": "DC Current Total",
      "localizedName": "DC Current Total",
      "dataName": "Idc",
      "standardDataName": "DC_Current_Total",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 22,
      "name": "DC Voltage Average",
      "localizedName": "DC Voltage Average",
      "dataName": "Vdc",
      "standardDataName": "DC_Voltage_Avg",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 23,
      "name": "DC Power Total",
      "localizedName": "DC Power",
      "dataName": "KwDC",
      "standardDataName": "DC_Power_Total",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kW",
      "dataNameDetail": null
    },
    {
      "index": 24,
      "name": "Device Temperature",
      "localizedName": "Device Temperature",
      "dataName": "DeviceTemp",
      "standardDataName": "Temp_Device",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "°F",
      "dataNameDetail": null
    },
    {
      "index": 25,
      "name": "Internal Temperature",
      "localizedName": "Internal Temperature",
      "dataName": "InternalTemp",
      "standardDataName": "Temp_Internal",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "°F",
      "dataNameDetail": null
    },
    {
      "index": 26,
      "name": "XMFR Temperature",
      "localizedName": "XMFR Temperature",
      "dataName": "Temp_XMFR",
      "standardDataName": "Temp_XMFR",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "°F",
      "dataNameDetail": null
    },
    {
      "index": 27,
      "name": "Fault Code",
      "localizedName": "Fault Code",
      "dataName": "Fault",
      "standardDataName": "Fault",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 28,
      "name": "Warn Code",
      "localizedName": "Warn Code",
      "dataName": "Warning",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 29,
      "name": "Fault Code 0",
      "localizedName": "Fault Code 0",
      "dataName": "Fault0",
      "standardDataName": "Fault0",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 30,
      "name": "Fault Code 1",
      "localizedName": "Fault 1",
      "dataName": "Fault1",
      "standardDataName": "Fault1",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 31,
      "name": "Fault Code 2",
      "localizedName": "Fault 2",
      "dataName": "Fault2",
      "standardDataName": "Fault2",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 32,
      "name": "Fault Code 3",
      "localizedName": "Fault 3",
      "dataName": "Fault3",
      "standardDataName": "Fault3",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 33,
      "name": "Fault Code 4",
      "localizedName": "Fault 4",
      "dataName": "Fault4",
      "standardDataName": "Fault4",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 34,
      "name": "Inverter Work Mode",
      "localizedName": "Operating Mode",
      "dataName": "opmode",
      "standardDataName": "Op_Mode",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "Derate: 0x800;Running:0x1000;Standby:0x2000;Check:0x4000;Fault:0x8000",
      "dataNameDetail": null
    },
    {
      "index": 35,
      "name": "Firmware Version",
      "localizedName": "Firmware Version",
      "dataName": "Firmware_Version",
      "standardDataName": "Firmware_Version",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 36,
      "name": "Serial Number",
      "localizedName": "Serial Number",
      "dataName": "Serial_Number",
      "standardDataName": "Serial_Number",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": null
    }
  ],
  "additionalRegisters": [],
  "decreaseDifference": 6000,
  "autoCorrectDecrease": true,
  "fixedEnergyOffset": 0,
  "increaseDifference": 6000,
  "autoCorrectIncrease": true,
  "isThermal": false,
  "reverse": false,
  "registerOffsets": [],
  "driverRegisters": [],
  "virtualRegisters": [],
  "tags": {
    "key": "{\"ancestorKey\":\"H444573\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
    "lastChanged": null,
    "attributes": [],
    "keywords": [],
    "notes": [
      {
        "key": "x0549f8c0",
        "parentKey": "H444573",
        "authorKey": "U28898",
        "authorName": "Forest Lehman",
        "date": "2024-09-05T18:01:39Z",
        "kind": "text",
        "isEvent": true,
        "text": "Filled in energy and power values, FillVirtual, 3/13/2024 4:50:00 PM through 3/26/2024 12:15:00 PM"
      }
    ],
    "powerDisplays": []
  },
  "sampleRate": 0,
  "uploadRate": 0,
  "oneMinuteData": false,
  "thread": 0,
  "alsoHardwareId": 0,
  "alsoSiteId": 0,
  "siteHasInverterGroups": false,
  "groupAllowed": [
    28
  ],
  "groupKey": "",
  "outputAllowed": [
    2
  ],
  "outputKey": "H444568",
  "weatherStationKey1": "H444582",
  "weatherStationKey2": "H441071",
  "configs": [
    "Pv"
  ],
  "array": null,
  "eGauge": null,
  "gateway": null,
  "kiosk": null,
  "meter": null,
  "pvConfig": {
    "pvModelType": 0,
    "acDcType": 0,
    "acInfo": 2,
    "inverters": [
      {
        "mppWatts": 540.0708000000001,
        "pvSystOutOfSync": false,
        "pvSystModuleId": 0,
        "pvSystConfig": {
          "key": "",
          "manufacturer": "",
          "model": "",
          "cellType": -1,
          "cellsSeries": 0,
          "cellsParallel": 0,
          "cellArea": 0,
          "isc": 0,
          "voc": 0,
          "impp": 0,
          "vmpp": 0,
          "muIsc": 0,
          "rShunt": 0,
          "rSeries": 0,
          "rShuntGinc": 0,
          "rShuntExp": 0,
          "muPMax": 0
        },
        "pvUsaConfig": {
          "irradiance": 0,
          "irradianceSquared": 0,
          "windSpeed": 0,
          "ambientTemperature": 0
        },
        "installationType": 2,
        "bifacialRatio": 0,
        "efficiency": 0,
        "moduleArea": 0,
        "limitOne": 0,
        "limitTempOne": 0,
        "limitTwo": 0,
        "limitTempTwo": 0,
        "acVoltage": 480,
        "dcAmps": 204,
        "dcSize": 68.04,
        "dcVoltage": 1000,
        "inverterLoss": 1,
        "inverterKw": 60,
        "inverterName": "",
        "inverterKva": 66,
        "shadeModel": {
          "hasInterRowShadeModel": 0,
          "albedoWeight": 0,
          "diffuseWeight": 0,
          "regions": [],
          "interRowShadeModel": {
            "azimuth": 0,
            "panelLength": 0,
            "pitch": 0,
            "rows": 0,
            "tilt": 0,
            "topBorderLength": 0
          }
        },
        "numOfStrings": 7,
        "panelsPerString": 18,
        "derate": 0.9,
        "wattsPerPanel": 540,
        "mppVoltage": 41.64,
        "mppAmps": 12.97,
        "tempCoefficient": -0.5,
        "azimuth": 196,
        "tilt": 9,
        "tracking": 0,
        "trackingAngle": 0,
        "derateDetail": false,
        "lightInducedDegradation": 0,
        "pmaxDeviation": 0,
        "mismatch": 0,
        "dcLoss": 0,
        "acLoss": 0,
        "transformerLoss": 0,
        "regressionFunctionList": [],
        "efficiencyCurveId": 0,
        "efficiencyCurveModel": {
          "key": "",
          "modelType": 0,
          "manufacturer": "",
          "modelName": "",
          "pointsList": [],
          "scaleX": 0,
          "scaleY": 0
        },
        "incidenceAngleCurveId": 0,
        "incidenceAngleCurveModel": {
          "key": "",
          "modelType": 0,
          "manufacturer": "",
          "modelName": "",
          "pointsList": [],
          "scaleX": 0,
          "scaleY": 0
        }
      }
    ],
    "fileAKey": "",
    "fileBKey": "",
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
    "monthlyDerate": {
      "jan": 1,
      "feb": 1,
      "mar": 1,
      "apr": 1,
      "may": 1,
      "jun": 1,
      "jul": 1,
      "aug": 1,
      "sep": 1,
      "oct": 1,
      "nov": 1,
      "dec": 1
    },
    "monthlyOutput": {
      "jan": 4580,
      "feb": 5363,
      "mar": 8562,
      "apr": 10855,
      "may": 12819,
      "jun": 13500,
      "jul": 13760,
      "aug": 12799,
      "sep": 10481,
      "oct": 8304,
      "nov": 5633,
      "dec": 4549
    },
    "canIntegrateCombiners": true,
    "hasIntegratedCombiners": false
  },
  "thermal": null,
  "turbine": null,
  "virtualWeather": null,
  "weather": null,
  "zone": null,
  "commonDC": false,
  "commonDCAllMatch": true,
  "locusId": "",
  "syncToLocus": false,
  "taskKey": "",
  "readOnly": false,
  "isReportable": true,
  "latitude": 38.0048431,
  "longitude": -121.8338427,
  "hash": "",
  "hasCapacity": true,
  "inverterKw": 0,
  "siteDcShare": 903.9599999999999,
  "pullData": false
}
```

[Return to top](#top)

