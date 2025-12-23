<a id="top"></a>
# /api/edit/hardware

[← Back to Index](../logs.md)

**Methods:** PUT  
**Status Codes:** 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200  

## Table of Contents

- [Payload Structure](#payload-structure)
- [Inverter (functionCode: 1)](#inverter-functioncode-1)
- [Production Meter (functionCode: 2)](#production-meter-functioncode-2)
- [Weather Station (functionCode: 5)](#weather-station-functioncode-5)
- [Gateway (functionCode: 10)](#gateway-functioncode-10)
- [Data Logger (functionCode: 28)](#data-logger-functioncode-28)
- [Cell Modem (functionCode: 31)](#cell-modem-functioncode-31)
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
          "type": "string"
        },
        "index": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "value": {
          "type": "string"
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
      "type": "array"
    },
    "driverRegisters": {
      "type": "object"
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
          "type": "array"
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
      "type": "array"
    },
    "groupKey": {
      "type": "string"
    },
    "outputAllowed": {
      "type": "array"
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
      "properties": {}
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
          "type": "string"
        },
        "index": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "value": {
          "type": "string"
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

## Production Meter (functionCode: 2)

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
          "type": "string"
        },
        "index": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "value": {
          "type": "string"
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
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "groupKey": {
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
      "properties": {
        "scale": {
          "type": "number"
        },
        "scaleKw": {
          "type": "number"
        },
        "scaleKwh": {
          "type": "number"
        },
        "grossEnergy": {
          "type": "number"
        },
        "maxPower": {
          "type": "number"
        },
        "maxVoltage": {
          "type": "number"
        },
        "maxCurrent": {
          "type": "number"
        },
        "acInfo": {
          "type": "number"
        },
        "noLoadLoss": {
          "type": "number"
        },
        "loadLoss": {
          "type": "number"
        },
        "load": {
          "type": "number"
        },
        "lineResistance": {
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
        "showLoad": {
          "type": "boolean"
        },
        "kw": {
          "type": "number"
        },
        "kwhNet": {
          "type": "number"
        },
        "kwhDelivered": {
          "type": "number"
        },
        "kwhReceived": {
          "type": "number"
        }
      }
    },
    "pvConfig": {
      "type": "object",
      "properties": {}
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

## Weather Station (functionCode: 5)

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
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "groupKey": {
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
      "properties": {}
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
      "properties": {
        "azimuth": {
          "type": "number"
        },
        "tilt": {
          "type": "number"
        },
        "tracking": {
          "type": "number"
        },
        "maxTempF": {
          "type": "number"
        },
        "minTempF": {
          "type": "number"
        },
        "sensors": {
          "type": "object",
          "properties": {
            "ambientTemp": {
              "type": "object",
              "properties": {
                "isChecked": {
                  "type": "boolean"
                },
                "isAllowed": {
                  "type": "boolean"
                }
              }
            },
            "barometer": {
              "type": "object",
              "properties": {
                "isChecked": {
                  "type": "boolean"
                },
                "isAllowed": {
                  "type": "boolean"
                }
              }
            },
            "humidity": {
              "type": "object",
              "properties": {
                "isChecked": {
                  "type": "boolean"
                },
                "isAllowed": {
                  "type": "boolean"
                }
              }
            },
            "panelTemp1": {
              "type": "object",
              "properties": {
                "isChecked": {
                  "type": "boolean"
                },
                "isAllowed": {
                  "type": "boolean"
                }
              }
            },
            "panelTemp2": {
              "type": "object",
              "properties": {
                "isChecked": {
                  "type": "boolean"
                },
                "isAllowed": {
                  "type": "boolean"
                }
              }
            },
            "pyranometer1": {
              "type": "object",
              "properties": {
                "isChecked": {
                  "type": "boolean"
                },
                "isAllowed": {
                  "type": "boolean"
                }
              }
            },
            "pyranometer2": {
              "type": "object",
              "properties": {
                "isChecked": {
                  "type": "boolean"
                },
                "isAllowed": {
                  "type": "boolean"
                }
              }
            },
            "pyrheliometer": {
              "type": "object",
              "properties": {
                "isChecked": {
                  "type": "boolean"
                },
                "isAllowed": {
                  "type": "boolean"
                }
              }
            },
            "rain": {
              "type": "object",
              "properties": {
                "isChecked": {
                  "type": "boolean"
                },
                "isAllowed": {
                  "type": "boolean"
                }
              }
            },
            "snow": {
              "type": "object",
              "properties": {
                "isChecked": {
                  "type": "boolean"
                },
                "isAllowed": {
                  "type": "boolean"
                }
              }
            },
            "wind": {
              "type": "object",
              "properties": {
                "isChecked": {
                  "type": "boolean"
                },
                "isAllowed": {
                  "type": "boolean"
                }
              }
            }
          }
        },
        "insolationType": {
          "type": "number"
        },
        "interpolateDailyInsolation": {
          "type": "boolean"
        },
        "hasPyranometer": {
          "type": "boolean"
        },
        "pyranometerData": {
          "type": "object"
        },
        "isPyranometerHigh": {
          "type": "boolean"
        },
        "pyranometerUnit": {
          "type": "number"
        },
        "hasRefPyranometer": {
          "type": "boolean"
        },
        "refPyranometerData": {
          "type": "object"
        },
        "isRefPyranometerHigh": {
          "type": "boolean"
        },
        "refPyranometerUnit": {
          "type": "number"
        },
        "tracker": {
          "type": "object",
          "properties": {
            "hid": {
              "type": "number"
            },
            "dataName": {
              "type": "string"
            }
          }
        },
        "trackerOptions": {
          "type": "object",
          "properties": {}
        },
        "monthlyInsolation": {
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
        }
      }
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

## Gateway (functionCode: 10)

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
          "type": "string"
        },
        "index": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "value": {
          "type": "string"
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
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "groupKey": {
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
      "properties": {
        "gatewayType": {
          "type": "number"
        },
        "deviceGatewayType": {
          "type": "number"
        },
        "connectionType": {
          "type": "number"
        },
        "ipAddress": {
          "type": "string"
        },
        "mask": {
          "type": "string"
        },
        "gatewayIp": {
          "type": "string"
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
            "gatewayId": {
              "type": "string"
            },
            "client": {
              "type": "string"
            },
            "server": {
              "type": "string"
            },
            "enable": {
              "type": "boolean"
            },
            "debug": {
              "type": "boolean"
            },
            "lastUpdate": {
              "type": "string"
            },
            "lastBoot": {
              "type": "string"
            },
            "ip1": {
              "type": "string"
            },
            "ip2": {
              "type": "string"
            },
            "gatewayParams": {
              "type": "array",
              "items": {
                "type": "unknown"
              }
            }
          }
        },
        "commandAccessLevel": {
          "type": "number"
        }
      }
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
      "properties": {}
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

## Data Logger (functionCode: 28)

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
          "type": "string"
        },
        "index": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "value": {
          "type": "string"
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
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "groupKey": {
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
    "weatherStationKey1": {
      "type": "string"
    },
    "weatherStationKey2": {
      "type": "string"
    },
    "configs": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
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
      "properties": {}
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

## Cell Modem (functionCode: 31)

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
          "type": "string"
        },
        "index": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "value": {
          "type": "string"
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
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "groupKey": {
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
    "weatherStationKey1": {
      "type": "string"
    },
    "weatherStationKey2": {
      "type": "string"
    },
    "configs": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
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
      "properties": {}
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
referer: https://apps.alsoenergy.com/powertrack/H511576/administration/config
```

**Payload:**

```json
{
  "key": "H511576",
  "parentKey": "S68143",
  "ts": "2024-07-11T21:18:06Z",
  "description": "WEATHER STATION",
  "assetId": "",
  "hardwareId": "C20909_S68143_WS2",
  "instance": 2,
  "functionId": "WS2",
  "functionCode": 5,
  "hardwareStatus": 1,
  "capacityKw": 0,
  "sort": 42,
  "gatewayKey": "H511564",
  "gatewayId": "000CC68FAF30",
  "gatewayFwVersion": "",
  "gatewayScriptCount": "",
  "gatewayType": 2,
  "serialNum": "1V0177-8",
  "modelNum": "ALSOENERGY INTEGRATED WEATHER STATION",
  "installDate": "2024-07-12",
  "driverId": 8164,
  "driverDescription": "1 pyranometer, Wind speed/dir, Ambient and Module",
  "driverFlags": 65,
  "driverName": "AE Integrated WS Standard (FW 114+) (Qualified)",
  "driverNotes": "* denotes standard WS\r\r\"Wind or Extra Pyranometer\"  \rP2 = W*(Wind Dir) A(Apogee) K(Kipp) L(LiCor LI-200SL)\r\r\"First Pyranometer Type\"       \rP1 = A*(Apogee) K(Kipp) L(LiCor LI-200SL)\r\r\"Ambient or Dual Module\"      \rT1 = 1*(Ambient) 0(Module 2)\r\r\"Temp Sensor Type Ambient\"\rTR1 = S*(Standard) H(High Temp) A(AlsoEnergy) W(Wide)\r\r\"Temp Sensor Type Module\"\rTR2 = S*(Standard) H(High Temp) P(Precise) W(Wide) HH(high special)\r\rSwap GHI and POA\rSWAP = 1",
  "validatedByKey": "",
  "validatedDateTime": "0001-01-01T00:00:00",
  "debug": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2025-12-23T00:11:44.8551475Z",
  "reportExclude": false,
  "limitedCommunication": false,
  "primary": false,
  "address": "16",
  "unitId": 0,
  "isTcp": false,
  "port": 2,
  "serialMode": 2,
  "baud": "9600",
  "newNote": null,
  "dashboardKey": "",
  "dcRating": 0,
  "defaultChart": 21,
  "chartSectionCode": 4,
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
      "originalValue": -30,
      "index": 3,
      "name": "MinTemp",
      "value": -30,
      "type": 2
    },
    {
      "originalValue": 160,
      "index": 4,
      "name": "MaxTemp",
      "value": 160,
      "type": 2
    },
    {
      "originalValue": 1057,
      "index": 5,
      "name": "weather",
      "value": 1057,
      "type": 1
    },
    {
      "originalValue": "K",
      "index": 6,
      "name": "dev:P1",
      "value": "A",
      "type": 0
    },
    {
      "originalValue": "W",
      "index": 7,
      "name": "dev:P2",
      "value": "W",
      "type": 0
    },
    {
      "originalValue": "1.00",
      "index": 8,
      "name": "dev:K1",
      "value": "1.00",
      "type": 0
    },
    {
      "originalValue": "10.0",
      "index": 9,
      "name": "dev:K2",
      "value": "1.00",
      "type": 0
    },
    {
      "originalValue": "1",
      "index": 10,
      "name": "dev:T1",
      "value": "1",
      "type": 0
    },
    {
      "originalValue": "S",
      "index": 11,
      "name": "dev:TR1",
      "value": "S",
      "type": 0
    },
    {
      "originalValue": "W",
      "index": 12,
      "name": "dev:TR2",
      "value": "W",
      "type": 0
    },
    {
      "originalValue": "1",
      "index": 13,
      "name": "dev:SWAP",
      "value": "0",
      "type": 0
    },
    {
      "originalValue": "WS2",
      "index": 14,
      "name": "ShortName",
      "value": "WS2",
      "type": 0
    }
  ],
  "deviceRegisters": [
    {
      "index": 0,
      "name": "Wind Direction",
      "localizedName": "Wind Direction",
      "dataName": "WindDirection",
      "standardDataName": "Wind_Direction",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "°",
      "dataNameDetail": null
    },
    {
      "index": 1,
      "name": "Sun (GHI)",
      "localizedName": "Global Horizontal Irradiance (with Offset)",
      "dataName": "Sun2",
      "standardDataName": "GHI_Irradiance",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "W/m²",
      "dataNameDetail": null
    },
    {
      "index": 2,
      "name": "Sun (POA)",
      "localizedName": "Plane of Array Irradiation (with Offset)",
      "dataName": "Sun",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "W/m²",
      "dataNameDetail": null
    },
    {
      "index": 3,
      "name": "Ambient temp",
      "localizedName": "Ambient Air Temperature",
      "dataName": "TempF",
      "standardDataName": "Temp_Ambient",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "°F",
      "dataNameDetail": null
    },
    {
      "index": 4,
      "name": "Module temp 2",
      "localizedName": "Module temperature 2",
      "dataName": "Temp2",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "°F",
      "dataNameDetail": null
    },
    {
      "index": 5,
      "name": "Module temp",
      "localizedName": "Module Temperature",
      "dataName": "Temp1",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "°F",
      "dataNameDetail": null
    },
    {
      "index": 6,
      "name": "Wind speed",
      "localizedName": "Wind Speed",
      "dataName": "WindSpeed",
      "standardDataName": "Wind_Speed",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "mph",
      "dataNameDetail": null
    },
    {
      "index": 7,
      "name": "CabHigh",
      "localizedName": "CabHigh",
      "dataName": "Temp_Cabinet_High",
      "standardDataName": "Temp_Cabinet_High",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 8,
      "name": "CabLow",
      "localizedName": "CabLow",
      "dataName": "Temp_Cabinet_Low",
      "standardDataName": "Temp_Cabinet_Low",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 9,
      "name": "CabF",
      "localizedName": "Cabinet Temperature",
      "dataName": "CabF",
      "standardDataName": "Temp_Cabinet",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "°F",
      "dataNameDetail": null
    },
    {
      "index": 10,
      "name": "Max Sun (POA)",
      "localizedName": "Max Sun (POA)",
      "dataName": "MaxSun",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "W/m²",
      "dataNameDetail": null
    },
    {
      "index": 11,
      "name": "Max Sun (GHI)",
      "localizedName": "Max Sun (GHI)",
      "dataName": "MaxSun2",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "W/m²",
      "dataNameDetail": null
    }
  ],
  "additionalRegisters": [],
  "decreaseDifference": 100,
  "autoCorrectDecrease": false,
  "fixedEnergyOffset": 0,
  "increaseDifference": -1,
  "autoCorrectIncrease": false,
  "isThermal": false,
  "reverse": false,
  "registerOffsets": [],
  "driverRegisters": [
    {
      "index": 0,
      "name": "Wind Direction",
      "localizedName": "",
      "dataName": "WindDirection",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 129,
        "registerName": "Wind direction",
        "description": "Wind direction (Equivalent: WindDirection)",
        "dataName": "WindDirection",
        "details": {
          "isFloat": true,
          "doublePrecision": false,
          "isStatus": false,
          "units": 0,
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
          "otherAliasPTDataNameValues": "Wind_Direction",
          "otherAliasPTDataNames": [
            98
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 129,
        "otherAliasPTDataNames": [
          98
        ],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "Sun (GHI)",
      "localizedName": "",
      "dataName": "Sun2",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 114,
        "registerName": "GHI",
        "description": "GHI (Equivalent: Sun2)",
        "dataName": "Sun2",
        "details": {
          "isFloat": true,
          "doublePrecision": false,
          "isStatus": false,
          "units": 57,
          "condense": 0,
          "allowArchiveRaw": false,
          "adminHide": false,
          "aCmeter": false,
          "dCmeter": false,
          "isStandardDataName": false,
          "equivalent": 115,
          "functions": "",
          "functionCodes": [],
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "GHI_Irradiance",
          "otherAliasPTDataNames": [
            74
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 115,
        "otherAliasPTDataNames": [
          74
        ],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "Sun (POA)",
      "localizedName": "",
      "dataName": "Sun",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 108,
        "registerName": "Irradiance (any orientation)",
        "description": "Irradiance (any orientation) (Equivalent: Sun)",
        "dataName": "Sun",
        "details": {
          "isFloat": true,
          "doublePrecision": false,
          "isStatus": false,
          "units": 57,
          "condense": 0,
          "allowArchiveRaw": false,
          "adminHide": false,
          "aCmeter": false,
          "dCmeter": false,
          "isStandardDataName": false,
          "equivalent": 117,
          "functions": "",
          "functionCodes": [],
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "POA_Irradiance,Irradiance",
          "otherAliasPTDataNames": [
            84,
            113
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 117,
        "otherAliasPTDataNames": [
          84,
          113
        ],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "Ambient temp",
      "localizedName": "",
      "dataName": "TempF",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 102,
        "registerName": "Ambient temperature",
        "description": "Ambient temperature (Equivalent: TempF)",
        "dataName": "TempF",
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
          "otherAliasPTDataNameValues": "Ambient,Temp_Ambient",
          "otherAliasPTDataNames": [
            103,
            63
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 102,
        "otherAliasPTDataNames": [
          103,
          63
        ],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "Module temp 2",
      "localizedName": "",
      "dataName": "Temp2",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 173,
        "registerName": "Device temperature (specify channel)",
        "description": "Device temperature (specify channel) (Equivalent: Temp_)",
        "dataName": "Temp_",
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
          "excludedChannels": "1",
          "otherAliasPTDataNameValues": "Temp_Module_,ModTemp_",
          "otherAliasPTDataNames": [
            81,
            82
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": true,
        "registerSetsArrayDisplayedName": "Device temperature (specify RegisterSets)",
        "equivalent": 173,
        "otherAliasPTDataNames": [
          81,
          82
        ],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "Module temp",
      "localizedName": "",
      "dataName": "Temp1",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 105,
        "registerName": "Module temperature 1",
        "description": "Module temperature 1 (Equivalent: Temp1)",
        "dataName": "Temp1",
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
          "otherAliasPTDataNameValues": "Temp_Module,ModTemp",
          "otherAliasPTDataNames": [
            80,
            106
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 105,
        "otherAliasPTDataNames": [
          80,
          106
        ],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "Wind speed",
      "localizedName": "",
      "dataName": "WindSpeed",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 127,
        "registerName": "Wind speed",
        "description": "Wind speed (Equivalent: WindSpeed)",
        "dataName": "WindSpeed",
        "details": {
          "isFloat": true,
          "doublePrecision": false,
          "isStatus": false,
          "units": 0,
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
          "otherAliasPTDataNameValues": "Wind_Speed",
          "otherAliasPTDataNames": [
            100
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": false,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 127,
        "otherAliasPTDataNames": [
          100
        ],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "CabHigh",
      "localizedName": "",
      "dataName": "Temp_Cabinet_High",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 68,
        "registerName": "Cabinet Temperature High",
        "description": "Cabinet Temperature High (Equivalent: Temp_Cabinet_High)",
        "dataName": "Temp_Cabinet_High",
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
          "functions": "WS",
          "functionCodes": [
            5
          ],
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": true,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 68,
        "otherAliasPTDataNames": [],
        "functionCodes": [
          5
        ],
        "goldenDriverDataNames": [
          {
            "priorityOrder": 1,
            "dataName": 68,
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "dataNameAndType": "Temp_Cabinet_High (Standard)"
          }
        ],
        "standardDataNameArchiveRawAndIntervalData": true,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "CabLow",
      "localizedName": "",
      "dataName": "Temp_Cabinet_Low",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 69,
        "registerName": "Cabinet Temperature Low",
        "description": "Cabinet Temperature Low (Equivalent: Temp_Cabinet_Low)",
        "dataName": "Temp_Cabinet_Low",
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
          "functions": "WS",
          "functionCodes": [
            5
          ],
          "excludedChannels": "",
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        },
        "isStandardDataName": true,
        "isAllowedForRegisterSetsArray": false,
        "registerSetsArrayDisplayedName": "",
        "equivalent": 69,
        "otherAliasPTDataNames": [],
        "functionCodes": [
          5
        ],
        "goldenDriverDataNames": [
          {
            "priorityOrder": 1,
            "dataName": 69,
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "dataNameAndType": "Temp_Cabinet_Low (Standard)"
          }
        ],
        "standardDataNameArchiveRawAndIntervalData": true,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "CabF",
      "localizedName": "",
      "dataName": "CabF",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": {
        "registerDataNameIdentifier": 107,
        "registerName": "Cabinet temperature",
        "description": "Cabinet temperature (Equivalent: CabF)",
        "dataName": "CabF",
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
          "equivalent": 67,
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
        "equivalent": 67,
        "otherAliasPTDataNames": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "standardDataNameArchiveRawAndIntervalData": false,
        "errors": []
      }
    },
    {
      "index": 0,
      "name": "Status",
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
      "name": "P2&P6 Status (Ambient or Module Temp 2)",
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
      "name": "P1&P4 Status (Module Temp 1)",
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
      "name": "Max Sun (POA)",
      "localizedName": "",
      "dataName": "MaxSun",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 0,
      "name": "Max Sun (GHI)",
      "localizedName": "",
      "dataName": "MaxSun2",
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
    "key": "{\"ancestorKey\":\"H511576\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
    "lastChanged": null,
    "attributes": [],
    "keywords": [],
    "notes": [],
    "powerDisplays": []
  },
  "sampleRate": 0,
  "uploadRate": 0,
  "oneMinuteData": false,
  "thread": 0,
  "alsoHardwareId": 0,
  "alsoSiteId": 0,
  "siteHasInverterGroups": true,
  "groupAllowed": [],
  "groupKey": "",
  "outputAllowed": [],
  "outputKey": "",
  "weatherStationKey1": "",
  "weatherStationKey2": "",
  "configs": [
    "Weather"
  ],
  "array": null,
  "eGauge": null,
  "gateway": null,
  "kiosk": null,
  "meter": null,
  "pvConfig": null,
  "thermal": null,
  "turbine": null,
  "virtualWeather": null,
  "weather": {
    "azimuth": 0,
    "tilt": 0,
    "tracking": 0,
    "maxTempF": 160,
    "minTempF": -30,
    "sensors": {
      "ambientTemp": {
        "isChecked": true,
        "isAllowed": true
      },
      "barometer": {
        "isChecked": false,
        "isAllowed": false
      },
      "humidity": {
        "isChecked": false,
        "isAllowed": false
      },
      "panelTemp1": {
        "isChecked": false,
        "isAllowed": true
      },
      "panelTemp2": {
        "isChecked": false,
        "isAllowed": true
      },
      "pyranometer1": {
        "isChecked": false,
        "isAllowed": true
      },
      "pyranometer2": {
        "isChecked": true,
        "isAllowed": true
      },
      "pyrheliometer": {
        "isChecked": false,
        "isAllowed": false
      },
      "rain": {
        "isChecked": false,
        "isAllowed": false
      },
      "snow": {
        "isChecked": false,
        "isAllowed": false
      },
      "wind": {
        "isChecked": true,
        "isAllowed": true
      }
    },
    "insolationType": 0,
    "interpolateDailyInsolation": true,
    "hasPyranometer": false,
    "pyranometerData": null,
    "isPyranometerHigh": false,
    "pyranometerUnit": 0,
    "hasRefPyranometer": true,
    "refPyranometerData": "NaN",
    "isRefPyranometerHigh": false,
    "refPyranometerUnit": 57,
    "tracker": {
      "hid": 0,
      "dataName": ""
    },
    "trackerOptions": {},
    "monthlyInsolation": {
      "jan": 0,
      "feb": 0,
      "mar": 0,
      "apr": 0,
      "may": 0,
      "jun": 0,
      "jul": 0,
      "aug": 0,
      "sep": 0,
      "oct": 0,
      "nov": 0,
      "dec": 0
    }
  },
  "zone": null,
  "commonDC": false,
  "commonDCAllMatch": true,
  "locusId": "",
  "syncToLocus": false,
  "taskKey": "",
  "readOnly": false,
  "isReportable": false,
  "latitude": 34.0371297,
  "longitude": -118.1014776,
  "hash": "",
  "hasCapacity": false,
  "inverterKw": 0,
  "siteDcShare": 0,
  "pullData": false
}
```

**Response:**

```json
{
  "key": "H511576",
  "parentKey": "S68143",
  "ts": "2025-12-23T00:11:51Z",
  "description": "WEATHER STATION",
  "assetId": "",
  "hardwareId": "C20909_S68143_WS2",
  "instance": 2,
  "functionId": "WS2",
  "functionCode": 5,
  "hardwareStatus": 1,
  "capacityKw": 0,
  "sort": 42,
  "gatewayKey": "H511564",
  "gatewayId": "000CC68FAF30",
  "gatewayFwVersion": "",
  "gatewayScriptCount": "",
  "gatewayType": 2,
  "serialNum": "1V0177-8",
  "modelNum": "ALSOENERGY INTEGRATED WEATHER STATION",
  "installDate": "2024-07-12",
  "driverId": 8164,
  "driverDescription": "1 pyranometer, Wind speed/dir, Ambient and Module",
  "driverFlags": 65,
  "driverName": "AE Integrated WS Standard (FW 114+) (Qualified)",
  "driverNotes": "* denotes standard WS\r\r\"Wind or Extra Pyranometer\"  \rP2 = W*(Wind Dir) A(Apogee) K(Kipp) L(LiCor LI-200SL)\r\r\"First Pyranometer Type\"       \rP1 = A*(Apogee) K(Kipp) L(LiCor LI-200SL)\r\r\"Ambient or Dual Module\"      \rT1 = 1*(Ambient) 0(Module 2)\r\r\"Temp Sensor Type Ambient\"\rTR1 = S*(Standard) H(High Temp) A(AlsoEnergy) W(Wide)\r\r\"Temp Sensor Type Module\"\rTR2 = S*(Standard) H(High Temp) P(Precise) W(Wide) HH(high special)\r\rSwap GHI and POA\rSWAP = 1",
  "validatedByKey": "",
  "validatedDateTime": "0001-01-01T00:00:00",
  "debug": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2025-12-23T00:11:53.6752552Z",
  "reportExclude": false,
  "limitedCommunication": false,
  "primary": false,
  "address": "16",
  "unitId": 0,
  "isTcp": false,
  "port": 2,
  "serialMode": 2,
  "baud": "9600",
  "newNote": "",
  "dashboardKey": "",
  "dcRating": 0,
  "defaultChart": 21,
  "chartSectionCode": 4,
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
      "originalValue": -30,
      "index": 2,
      "name": "MinTemp",
      "value": -30,
      "type": 2
    },
    {
      "originalValue": 160,
      "index": 3,
      "name": "MaxTemp",
      "value": 160,
      "type": 2
    },
    {
      "originalValue": 1057,
      "index": 4,
      "name": "weather",
      "value": 1057,
      "type": 1
    },
    {
      "originalValue": "A",
      "index": 5,
      "name": "dev:P1",
      "value": "A",
      "type": 0
    },
    {
      "originalValue": "W",
      "index": 6,
      "name": "dev:P2",
      "value": "W",
      "type": 0
    },
    {
      "originalValue": "1.00",
      "index": 7,
      "name": "dev:K1",
      "value": "1.00",
      "type": 0
    },
    {
      "originalValue": "1.00",
      "index": 8,
      "name": "dev:K2",
      "value": "1.00",
      "type": 0
    },
    {
      "originalValue": "1",
      "index": 9,
      "name": "dev:T1",
      "value": "1",
      "type": 0
    },
    {
      "originalValue": "S",
      "index": 10,
      "name": "dev:TR1",
      "value": "S",
      "type": 0
    },
    {
      "originalValue": "W",
      "index": 11,
      "name": "dev:TR2",
      "value": "W",
      "type": 0
    },
    {
      "originalValue": "0",
      "index": 12,
      "name": "dev:SWAP",
      "value": "0",
      "type": 0
    },
    {
      "originalValue": "WS2",
      "index": 13,
      "name": "ShortName",
      "value": "WS2",
      "type": 0
    }
  ],
  "deviceRegisters": [
    {
      "index": 0,
      "name": "Wind Direction",
      "localizedName": "Wind Direction",
      "dataName": "WindDirection",
      "standardDataName": "Wind_Direction",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "°",
      "dataNameDetail": null
    },
    {
      "index": 1,
      "name": "Sun (GHI)",
      "localizedName": "Global Horizontal Irradiance (with Offset)",
      "dataName": "Sun2",
      "standardDataName": "GHI_Irradiance",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "W/m²",
      "dataNameDetail": null
    },
    {
      "index": 2,
      "name": "Sun (POA)",
      "localizedName": "Plane of Array Irradiation (with Offset)",
      "dataName": "Sun",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "W/m²",
      "dataNameDetail": null
    },
    {
      "index": 3,
      "name": "Ambient temp",
      "localizedName": "Ambient Air Temperature",
      "dataName": "TempF",
      "standardDataName": "Temp_Ambient",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "°F",
      "dataNameDetail": null
    },
    {
      "index": 4,
      "name": "Module temp 2",
      "localizedName": "Module temperature 2",
      "dataName": "Temp2",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "°F",
      "dataNameDetail": null
    },
    {
      "index": 5,
      "name": "Module temp",
      "localizedName": "Module Temperature",
      "dataName": "Temp1",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "°F",
      "dataNameDetail": null
    },
    {
      "index": 6,
      "name": "Wind speed",
      "localizedName": "Wind Speed",
      "dataName": "WindSpeed",
      "standardDataName": "Wind_Speed",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "mph",
      "dataNameDetail": null
    },
    {
      "index": 7,
      "name": "CabHigh",
      "localizedName": "CabHigh",
      "dataName": "Temp_Cabinet_High",
      "standardDataName": "Temp_Cabinet_High",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 8,
      "name": "CabLow",
      "localizedName": "CabLow",
      "dataName": "Temp_Cabinet_Low",
      "standardDataName": "Temp_Cabinet_Low",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 9,
      "name": "CabF",
      "localizedName": "Cabinet Temperature",
      "dataName": "CabF",
      "standardDataName": "Temp_Cabinet",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "°F",
      "dataNameDetail": null
    },
    {
      "index": 10,
      "name": "Max Sun (POA)",
      "localizedName": "Max Sun (POA)",
      "dataName": "MaxSun",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "W/m²",
      "dataNameDetail": null
    },
    {
      "index": 11,
      "name": "Max Sun (GHI)",
      "localizedName": "Max Sun (GHI)",
      "dataName": "MaxSun2",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "W/m²",
      "dataNameDetail": null
    }
  ],
  "additionalRegisters": [],
  "decreaseDifference": 100,
  "autoCorrectDecrease": false,
  "fixedEnergyOffset": 0,
  "increaseDifference": -1,
  "autoCorrectIncrease": false,
  "isThermal": false,
  "reverse": false,
  "registerOffsets": [],
  "driverRegisters": [],
  "virtualRegisters": [],
  "tags": {
    "key": "{\"ancestorKey\":\"H511576\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
    "lastChanged": null,
    "attributes": [],
    "keywords": [],
    "notes": [],
    "powerDisplays": []
  },
  "sampleRate": 0,
  "uploadRate": 0,
  "oneMinuteData": false,
  "thread": 0,
  "alsoHardwareId": 0,
  "alsoSiteId": 0,
  "siteHasInverterGroups": true,
  "groupAllowed": [],
  "groupKey": "",
  "outputAllowed": [],
  "outputKey": "",
  "weatherStationKey1": "",
  "weatherStationKey2": "",
  "configs": [
    "Weather"
  ],
  "array": null,
  "eGauge": null,
  "gateway": null,
  "kiosk": null,
  "meter": null,
  "pvConfig": null,
  "thermal": null,
  "turbine": null,
  "virtualWeather": null,
  "weather": {
    "azimuth": 0,
    "tilt": 0,
    "tracking": 0,
    "maxTempF": 160,
    "minTempF": -30,
    "sensors": {
      "ambientTemp": {
        "isChecked": true,
        "isAllowed": true
      },
      "barometer": {
        "isChecked": false,
        "isAllowed": false
      },
      "humidity": {
        "isChecked": false,
        "isAllowed": false
      },
      "panelTemp1": {
        "isChecked": false,
        "isAllowed": true
      },
      "panelTemp2": {
        "isChecked": false,
        "isAllowed": true
      },
      "pyranometer1": {
        "isChecked": false,
        "isAllowed": true
      },
      "pyranometer2": {
        "isChecked": true,
        "isAllowed": true
      },
      "pyrheliometer": {
        "isChecked": false,
        "isAllowed": false
      },
      "rain": {
        "isChecked": false,
        "isAllowed": false
      },
      "snow": {
        "isChecked": false,
        "isAllowed": false
      },
      "wind": {
        "isChecked": true,
        "isAllowed": true
      }
    },
    "insolationType": 0,
    "interpolateDailyInsolation": true,
    "hasPyranometer": false,
    "pyranometerData": null,
    "isPyranometerHigh": false,
    "pyranometerUnit": 0,
    "hasRefPyranometer": true,
    "refPyranometerData": "NaN",
    "isRefPyranometerHigh": false,
    "refPyranometerUnit": 57,
    "tracker": {
      "hid": 0,
      "dataName": ""
    },
    "trackerOptions": {},
    "monthlyInsolation": {
      "jan": 0,
      "feb": 0,
      "mar": 0,
      "apr": 0,
      "may": 0,
      "jun": 0,
      "jul": 0,
      "aug": 0,
      "sep": 0,
      "oct": 0,
      "nov": 0,
      "dec": 0
    }
  },
  "zone": null,
  "commonDC": false,
  "commonDCAllMatch": true,
  "locusId": "",
  "syncToLocus": false,
  "taskKey": "",
  "readOnly": false,
  "isReportable": false,
  "latitude": 34.0371297,
  "longitude": -118.1014776,
  "hash": "",
  "hasCapacity": false,
  "inverterKw": 0,
  "siteDcShare": 0,
  "pullData": false
}
```

[Return to top](#top)

