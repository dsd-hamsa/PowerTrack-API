<a id="top"></a>
# /api/edit/pvmodel/F74101

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200, 200  

## Table of Contents

- [General](#general)
- [Example](#example)

## General

```json
{
  "type": "object",
  "properties": {
    "canDownload": {
      "type": "boolean"
    },
    "canEdit": {
      "type": "boolean"
    },
    "description": {
      "type": "string"
    },
    "fileType": {
      "type": "number"
    },
    "key": {
      "type": "string"
    },
    "language": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "parentKey": {
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
          "type": "array",
          "items": {
            "type": "unknown"
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
    "revision": {
      "type": "number"
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
    "ts": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/edit/pvmodel/F74101
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 3fefeb
referer: https://apps.alsoenergy.com/powertrack/S38292/files/D36825/F74101
```

**Response:**

```json
{
  "canDownload": false,
  "canEdit": false,
  "description": "",
  "fileType": 63,
  "key": "F74101",
  "language": "",
  "name": "Inv 71 Std",
  "parentKey": "D36825",
  "pvConfig": {
    "acDcType": 0,
    "acInfo": 0,
    "canIntegrateCombiners": false,
    "combinerInputs": [],
    "degrade": 0,
    "fileAKey": "",
    "fileBKey": "",
    "hasIntegratedCombiners": false,
    "inverters": [
      {
        "acLoss": 0,
        "acVoltage": 480,
        "azimuth": 64,
        "bifacialRatio": 0,
        "dcAmps": 100,
        "dcLoss": 0,
        "dcSize": 24.48,
        "dcVoltage": 950,
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
        "inverterKw": 23,
        "inverterLoss": 20,
        "inverterName": "",
        "lightInducedDegradation": 0,
        "limitOne": 0,
        "limitTempOne": 0,
        "limitTempTwo": 0,
        "limitTwo": 0,
        "mismatch": 0,
        "moduleArea": 0,
        "mppAmps": 9.01,
        "mppVoltage": 37.74,
        "mppWatts": 340.0374,
        "numOfStrings": 4,
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
        "tempCoefficient": -0.43,
        "tilt": 10,
        "tracking": 0,
        "trackingAngle": 0,
        "transformerLoss": 0,
        "wattsPerPanel": 340
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
      "apr": 2757,
      "aug": 3095,
      "dec": 827,
      "feb": 1247,
      "jan": 962,
      "jul": 3437,
      "jun": 3463,
      "mar": 2018,
      "may": 3275,
      "nov": 1160,
      "oct": 1733,
      "sep": 2460
    },
    "pvModelType": 0
  },
  "revision": 1,
  "tags": {
    "attributes": [],
    "key": "{\"ancestorKey\":\"F74101\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\"]}",
    "keywords": [],
    "lastChanged": null,
    "notes": [],
    "powerDisplays": []
  },
  "ts": "2019-12-19T03:52:54Z"
}
```

[Return to top](#top)

