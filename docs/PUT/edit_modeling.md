<a id="top"></a>
# /api/edit/modeling

[← Back to Index](../logs.md)

**Methods:** PUT  
**Status Codes:** 200, 200, 200, 200, 200, 200, 200, 200  

## Table of Contents

- [Payload Structure](#payload-structure)
- [General](#general)
- [Example](#example)

## Payload Structure

```json
{
  "type": "object",
  "properties": {
    "dcRating": {
      "type": "number"
    },
    "groupKey": {
      "type": "string"
    },
    "key": {
      "type": "string"
    },
    "latitude": {
      "type": "number"
    },
    "longitude": {
      "type": "number"
    },
    "outputKey": {
      "type": "string"
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
    "selectedHardware": {
      "type": "object",
      "properties": {
        "key": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "selected": {
          "type": "boolean"
        },
        "sortIndex": {
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
    "ts": {
      "type": "string"
    },
    "weatherStationKey1": {
      "type": "string"
    },
    "weatherStationKey2": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## General

```json
{
  "type": "object",
  "properties": {
    "dcRating": {
      "type": "number"
    },
    "groupKey": {
      "type": "string"
    },
    "key": {
      "type": "string"
    },
    "latitude": {
      "type": "number"
    },
    "longitude": {
      "type": "number"
    },
    "outputKey": {
      "type": "string"
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
    "selectedHardware": {
      "type": "object",
      "properties": {
        "key": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "selected": {
          "type": "boolean"
        },
        "sortIndex": {
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
    "ts": {
      "type": "string"
    },
    "weatherStationKey1": {
      "type": "string"
    },
    "weatherStationKey2": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
PUT /api/edit/modeling
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 442641
referer: https://apps.alsoenergy.com/powertrack/S69211/administration/modeling
```

**Payload:**

```json
{
  "dcRating": 1960.44,
  "groupKey": "",
  "key": "H518005",
  "latitude": 37.7643595,
  "longitude": -121.9539616,
  "outputKey": "H517979",
  "pvConfig": {
    "acDcType": 1,
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
        "azimuth": 153,
        "bifacialRatio": 0,
        "dcAmps": 204,
        "dcLoss": 0,
        "dcSize": 16.32,
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
        "mppAmps": 10.59,
        "mppVoltage": 45.33,
        "mppWatts": 480.0447,
        "numOfStrings": 2,
        "panelsPerString": 17,
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
        "tempCoefficient": -0.35,
        "tilt": 10,
        "tracking": 0,
        "trackingAngle": 0,
        "transformerLoss": 0,
        "wattsPerPanel": 480
      },
      {
        "acLoss": 0,
        "acVoltage": 480,
        "azimuth": 153,
        "bifacialRatio": 0,
        "dcAmps": 204,
        "dcLoss": 0,
        "dcSize": 24.48,
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
        "mppAmps": 10.59,
        "mppVoltage": 45.33,
        "mppWatts": 480.0447,
        "numOfStrings": 3,
        "panelsPerString": 17,
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
        "tempCoefficient": -0.35,
        "tilt": 10,
        "tracking": 0,
        "trackingAngle": 0,
        "transformerLoss": 0,
        "wattsPerPanel": 480
      },
      {
        "acLoss": 0,
        "acVoltage": 480,
        "azimuth": 153,
        "bifacialRatio": 0,
        "dcAmps": 204,
        "dcLoss": 0,
        "dcSize": 24.48,
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
        "mppAmps": 10.59,
        "mppVoltage": 45.33,
        "mppWatts": 480.0447,
        "numOfStrings": 3,
        "panelsPerString": 17,
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
        "tempCoefficient": -0.35,
        "tilt": 10,
        "tracking": 0,
        "trackingAngle": 0,
        "transformerLoss": 0,
        "wattsPerPanel": 480
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
    "pvModelType": 0
  },
  "selectedHardware": [
    {
      "key": "H517983",
      "name": "Inv 1 (60KW) (43) (CPY) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 11
    },
    {
      "key": "H517984",
      "name": "Inv 2 (60KW) (43) (CPY) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 12
    },
    {
      "key": "H517985",
      "name": "Inv 3 (60KW) (43) (CPY) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 13
    },
    {
      "key": "H517986",
      "name": "Inv 4 (60KW) (43) (CPY) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 14
    },
    {
      "key": "H517987",
      "name": "Inv 5 (60KW) (43) (CPY) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 15
    },
    {
      "key": "H517988",
      "name": "Inv 6 (60KW) (43) (CPY) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 16
    },
    {
      "key": "H517989",
      "name": "Inv 7 (50KW) (43) (CPY) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 17
    },
    {
      "key": "H517990",
      "name": "Inv 8 (50KW) (43) (CPY) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 18
    },
    {
      "key": "H517991",
      "name": "Inv 9 (60KW) (42) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 19
    },
    {
      "key": "H517992",
      "name": "Inv 10 (60KW) (42) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 20
    },
    {
      "key": "H517993",
      "name": "Inv 11 (60KW) (42) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 21
    },
    {
      "key": "H517994",
      "name": "Inv 12 (60KW) (42) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 22
    },
    {
      "key": "H517995",
      "name": "Inv 13 (60KW) (42) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 23
    },
    {
      "key": "H517996",
      "name": "Inv 14 (60KW) (42) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 24
    },
    {
      "key": "H517997",
      "name": "Inv 15 (60KW) (42) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 25
    },
    {
      "key": "H517998",
      "name": "Inv 16 (60KW) (42) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 26
    },
    {
      "key": "H517999",
      "name": "Inv 17 (60KW) (42) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 27
    },
    {
      "key": "H518000",
      "name": "Inv 18 (60KW) (43) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 28
    },
    {
      "key": "H518001",
      "name": "Inv 19 (60KW) (43) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 29
    },
    {
      "key": "H518002",
      "name": "Inv 20 (60KW) (43) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 30
    },
    {
      "key": "H518003",
      "name": "Inv 21 (60KW) (43) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 31
    },
    {
      "key": "H518004",
      "name": "Inv 22 (60KW) (43) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 32
    },
    {
      "key": "H518005",
      "name": "Inv 23 (60KW) (43) CPS SCA60KTL-DO/US-480",
      "selected": true,
      "sortIndex": 33
    },
    {
      "key": "H518006",
      "name": "Inv 24 (60KW) (44) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 34
    },
    {
      "key": "H518007",
      "name": "Inv 25 (60KW) (44) CPS SCA60KTL-DO/US-480",
      "selected": true,
      "sortIndex": 35
    },
    {
      "key": "H518008",
      "name": "Inv 26 (60KW) (44) CPS SCA60KTL-DO/US-480",
      "selected": true,
      "sortIndex": 36
    },
    {
      "key": "H518009",
      "name": "Inv 27 (60KW) (44) CPS SCA60KTL-DO/US-480",
      "selected": true,
      "sortIndex": 37
    },
    {
      "key": "H518010",
      "name": "Inv 28 (60KW) (44) CPS SCA60KTL-DO/US-480",
      "selected": true,
      "sortIndex": 38
    }
  ],
  "siteDcShare": 1960.44,
  "siteHasInverterGroups": false,
  "ts": "2025-12-16T16:42:11Z",
  "weatherStationKey1": "H518011",
  "weatherStationKey2": "H518012"
}
```

**Response:**

```json
{
  "dcRating": 1960.44,
  "groupKey": "",
  "key": "H518005",
  "latitude": 37.7643595,
  "longitude": -121.9539616,
  "outputKey": "H517979",
  "pvConfig": {
    "acDcType": 1,
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
        "azimuth": 153,
        "bifacialRatio": 0,
        "dcAmps": 204,
        "dcLoss": 0,
        "dcSize": 16.32,
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
        "mppAmps": 10.59,
        "mppVoltage": 45.33,
        "mppWatts": 480.0447,
        "numOfStrings": 2,
        "panelsPerString": 17,
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
        "tempCoefficient": -0.35,
        "tilt": 10,
        "tracking": 0,
        "trackingAngle": 0,
        "transformerLoss": 0,
        "wattsPerPanel": 480
      },
      {
        "acLoss": 0,
        "acVoltage": 480,
        "azimuth": 153,
        "bifacialRatio": 0,
        "dcAmps": 204,
        "dcLoss": 0,
        "dcSize": 24.48,
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
        "mppAmps": 10.59,
        "mppVoltage": 45.33,
        "mppWatts": 480.0447,
        "numOfStrings": 3,
        "panelsPerString": 17,
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
        "tempCoefficient": -0.35,
        "tilt": 10,
        "tracking": 0,
        "trackingAngle": 0,
        "transformerLoss": 0,
        "wattsPerPanel": 480
      },
      {
        "acLoss": 0,
        "acVoltage": 480,
        "azimuth": 153,
        "bifacialRatio": 0,
        "dcAmps": 204,
        "dcLoss": 0,
        "dcSize": 24.48,
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
        "mppAmps": 10.59,
        "mppVoltage": 45.33,
        "mppWatts": 480.0447,
        "numOfStrings": 3,
        "panelsPerString": 17,
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
        "tempCoefficient": -0.35,
        "tilt": 10,
        "tracking": 0,
        "trackingAngle": 0,
        "transformerLoss": 0,
        "wattsPerPanel": 480
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
    "pvModelType": 0
  },
  "selectedHardware": [
    {
      "key": "H517983",
      "name": "Inv 1 (60KW) (43) (CPY) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 11
    },
    {
      "key": "H517984",
      "name": "Inv 2 (60KW) (43) (CPY) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 12
    },
    {
      "key": "H517985",
      "name": "Inv 3 (60KW) (43) (CPY) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 13
    },
    {
      "key": "H517986",
      "name": "Inv 4 (60KW) (43) (CPY) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 14
    },
    {
      "key": "H517987",
      "name": "Inv 5 (60KW) (43) (CPY) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 15
    },
    {
      "key": "H517988",
      "name": "Inv 6 (60KW) (43) (CPY) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 16
    },
    {
      "key": "H517989",
      "name": "Inv 7 (50KW) (43) (CPY) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 17
    },
    {
      "key": "H517990",
      "name": "Inv 8 (50KW) (43) (CPY) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 18
    },
    {
      "key": "H517991",
      "name": "Inv 9 (60KW) (42) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 19
    },
    {
      "key": "H517992",
      "name": "Inv 10 (60KW) (42) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 20
    },
    {
      "key": "H517993",
      "name": "Inv 11 (60KW) (42) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 21
    },
    {
      "key": "H517994",
      "name": "Inv 12 (60KW) (42) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 22
    },
    {
      "key": "H517995",
      "name": "Inv 13 (60KW) (42) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 23
    },
    {
      "key": "H517996",
      "name": "Inv 14 (60KW) (42) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 24
    },
    {
      "key": "H517997",
      "name": "Inv 15 (60KW) (42) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 25
    },
    {
      "key": "H517998",
      "name": "Inv 16 (60KW) (42) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 26
    },
    {
      "key": "H517999",
      "name": "Inv 17 (60KW) (42) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 27
    },
    {
      "key": "H518000",
      "name": "Inv 18 (60KW) (43) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 28
    },
    {
      "key": "H518001",
      "name": "Inv 19 (60KW) (43) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 29
    },
    {
      "key": "H518002",
      "name": "Inv 20 (60KW) (43) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 30
    },
    {
      "key": "H518003",
      "name": "Inv 21 (60KW) (43) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 31
    },
    {
      "key": "H518004",
      "name": "Inv 22 (60KW) (43) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 32
    },
    {
      "key": "H518005",
      "name": "Inv 23 (60KW) (43) CPS SCA60KTL-DO/US-480",
      "selected": true,
      "sortIndex": 33
    },
    {
      "key": "H518006",
      "name": "Inv 24 (60KW) (44) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 34
    },
    {
      "key": "H518007",
      "name": "Inv 25 (60KW) (44) CPS SCA60KTL-DO/US-480",
      "selected": true,
      "sortIndex": 35
    },
    {
      "key": "H518008",
      "name": "Inv 26 (60KW) (44) CPS SCA60KTL-DO/US-480",
      "selected": true,
      "sortIndex": 36
    },
    {
      "key": "H518009",
      "name": "Inv 27 (60KW) (44) CPS SCA60KTL-DO/US-480",
      "selected": true,
      "sortIndex": 37
    },
    {
      "key": "H518010",
      "name": "Inv 28 (60KW) (44) CPS SCA60KTL-DO/US-480",
      "selected": true,
      "sortIndex": 38
    }
  ],
  "siteDcShare": 1960.44,
  "siteHasInverterGroups": false,
  "ts": "2025-12-16T16:42:11Z",
  "weatherStationKey1": "H518011",
  "weatherStationKey2": "H518012"
}
```

[Return to top](#top)

