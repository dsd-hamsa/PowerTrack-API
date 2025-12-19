# `/api/edit/modeling`

[← Back to Index](../README.md)


### `/api/edit/modeling`

**Methods:** PUT  
**Status Codes:** 200  
**Call Count:** 1  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "key": {
      "type": "string"
    },
    "ts": {
      "type": "string"
    },
    "pvConfig": {
      "type": "object",
      "properties": {
        "pvModelType": {
          "type": "integer"
        },
        "acDcType": {
          "type": "integer"
        },
        "acInfo": {
          "type": "integer"
        },
        "inverters": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "mppWatts": {
                "type": "number"
              },
              "pvSystOutOfSync": {
                "type": "boolean"
              },
              "pvSystModuleId": {
                "type": "integer"
              },
              "pvSystConfig": {
                "type": "object"
              },
              "pvUsaConfig": {
                "type": "object"
              },
              "installationType": {
                "type": "integer"
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
                "type": "object"
              },
              "numOfStrings": {
                "type": "integer"
              },
              "panelsPerString": {
                "type": "integer"
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
                "type": "integer"
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
                "type": "array"
              },
              "efficiencyCurveId": {
                "type": "integer"
              },
              "efficiencyCurveModel": {
                "type": "object"
              },
              "incidenceAngleCurveId": {
                "type": "integer"
              },
              "incidenceAngleCurveModel": {
                "type": "object"
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
          "type": "array"
        },
        "degrade": {
          "type": "number"
        },
        "monthlyDerate": {
          "type": "object"
        },
        "monthlyOutput": {
          "type": "object"
        },
        "canIntegrateCombiners": {
          "type": "boolean"
        },
        "hasIntegratedCombiners": {
          "type": "boolean"
        }
      }
    },
    "siteHasInverterGroups": {
      "type": "boolean"
    },
    "selectedHardware": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "selected": {
            "type": "boolean"
          },
          "sortIndex": {
            "type": "integer"
          },
          "name": {
            "type": "string"
          },
          "key": {
            "type": "string"
          }
        }
      }
    },
    "latitude": {
      "type": "number"
    },
    "longitude": {
      "type": "number"
    },
    "dcRating": {
      "type": "number"
    },
    "groupKey": {
      "type": "string"
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
    "siteDcShare": {
      "type": "number"
    }
  }
}
```

#### Example

**Request:**

```http
PUT /api/edit/modeling
Accept: application/json
Referer: https://www.alsoenergy.com
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711

{"key":"H425923","ts":"2025-11-24T18:01:16Z","pvConfig":{"pvModelType":0,"acDcType":0,"acInfo":1,"inverters":[{"mppWatts":375.20000000000005,"pvSystOutOfSync":false,"pvSystModuleId":0,"pvSystConfig":{"key":"","manufacturer":"","model":"","cellType":-1,"cellsSeries":0,"cellsParallel":0,"cellArea":0,"isc":0,"voc":0,"impp":0,"vmpp":0,"muIsc":0,"rShunt":0,"rSeries":0,"rShuntGinc":0,"rShuntExp":0,"muPMax":0},"pvUsaConfig":{"irradiance":0,"irradianceSquared":0,"windSpeed":0,"ambientTemperature":0},"installationType":2,"bifacialRatio":0.0843,"efficiency":0,"moduleArea":0,"limitOne":0,"limitTempOne":0,"limitTwo":0,"limitTempTwo":0,"acVoltage":600,"dcAmps":275,"dcSize":146.25,"dcVoltage":1500,"inverterLoss":4,"inverterKw":125,"inverterName":"","inverterKva":125,"shadeModel":{"hasInterRowShadeModel":0,"albedoWeight":0,"diffuseWeight":0,"regions":[],"interRowShadeModel":{"azimuth":0,"panelLength":0,"pitch":0,"rows":0,"tilt":0,"topBorderLength":0}},"numOfStrings":15,"panelsPerString":26,"derate":0.9,"wattsPerPanel":375,"mppVoltage":40,"mppAmps":9.38,"tempCoefficient":-0.37,"azimuth":180,"tilt":0,"tracking":1,"trackingAngle":-60,"derateDetail":false,"lightInducedDegradation":0,"pmaxDeviation":0,"mismatch":0,"dcLoss":0,"acLoss":0,"transformerLoss":0,"regressionFunctionList":[],"efficiencyCurveId":0,"efficiencyCurveModel":{"key":"","modelType":0,"manufacturer":"","modelName":"","pointsList":[],"scaleX":0,"scaleY":0},"incidenceAngleCurveId":0,"incidenceAngleCurveModel":{"key":"","modelType":0,"manufacturer":"","modelName":"","pointsList":[],"scaleX":0,"scaleY":0}}],"fileAKey":"","fileBKey":"","combinerInputs":[],"degrade":0.5,"monthlyDerate":{"jan":1,"feb":1,"mar":1,"apr":1,"may":1,"jun":1,"jul":1,"aug":1,"sep":1,"oct":1,"nov":1,"dec":1},"monthlyOutput":{"jan":8998,"feb":13127,"mar":19200,"apr":23033,"may":24652,"jun":25055,"jul":28216,"aug":25240,"sep":19603,"oct":12723,"nov":8641,"dec":6770},"canIntegrateCombiners":false,"hasIntegratedCombiners":false},"siteHasInverterGroups":false,"selectedHardware":[{"selected":false,"sortIndex":1,"name":"Inv 1 (125kW) CHINT SCH125KTL-DO/US-600","key":"H425916"},{"selected":false,"sortIndex":2,"name":"Inv 2 (125kW) CHINT SCH125KTL-DO/US-600","key":"H425917"},{"selected":false,"sortIndex":3,"name":"Inv 3 (125kW) CHINT SCH125KTL-DO/US-600","key":"H425918"},{"selected":false,"sortIndex":4,"name":"Inv 4 (125kW) CHINT SCH125KTL-DO/US-600","key":"H425919"},{"selected":true,"sortIndex":5,"name":"Inv 5 (125kW) CHINT SCH125KTL-DO/US-600","key":"H425923"},{"selected":false,"sortIndex":6,"name":"Inv 6 (125kW) CHINT SCH125KTL-DO/US-600","key":"H425924"}],"latitude":37.702512,"longitude":-121.0649284,"dcRating":146.25,"groupKey":"","outputKey":"H450083","weatherStationKey1":"H449791","weatherStationKey2":"H448467","siteDcShare":146.25}
```

**Response:**

```json
{
  "key": "H425923",
  "ts": "2025-11-24T18:01:16Z",
  "pvConfig": {
    "pvModelType": 0,
    "acDcType": 0,
    "acInfo": 1,
    "inverters": [
      {
        "mppWatts": 375.20000000000005,
        "pvSystOutOfSync": false,
        "pvSystModuleId": 0,
        "pvSystConfig": {
          "key": "",
          "manufacturer": "",
          "model": "",
          "cellType": -1,
          "cellsSeries": 0,
          "cellsParallel": 0,
          "cellArea": 0.0,
          "isc": 0.0,
          "voc": 0.0,
          "impp": 0.0,
          "vmpp": 0.0,
          "muIsc": 0.0,
          "rShunt": 0.0,
          "rSeries": 0.0,
          "rShuntGinc": 0.0,
          "rShuntExp": 0.0,
          "muPMax": 0.0
        },
        "pvUsaConfig": {
          "irradiance": 0.0,
          "irradianceSquared": 0.0,
          "windSpeed": 0.0,
          "ambientTemperature": 0.0
        },
        "installationType": 2,
        "bifacialRatio": 0.0843,
        "efficiency": 0.0,
        "moduleArea": 0.0,
        "limitOne": 0.0,
        "limitTempOne": 0.0,
        "limitTwo": 0.0,
        "limitTempTwo": 0.0,
        "acVoltage": 600.0,
        "dcAmps": 275.0,
        "dcSize": 146.25,
        "dcVoltage": 1500.0,
        "inverterLoss": 4,
        "inverterKw": 125.0,
        "inverterName": "",
        "inverterKva": 125.0,
        "shadeModel": {
          "hasInterRowShadeModel": 0,
          "albedoWeight": 0.0,
          "diffuseWeight": 0.0,
          "regions": [],
          "interRowShadeModel": {
            "azimuth": 0.0,
            "panelLength": 0.0,
            "pitch": 0.0,
            "rows": 0,
            "tilt": 0.0,
            "topBorderLength": 0.0
          }
        },
        "numOfStrings": 15,
        "panelsPerString": 26,
        "derate": 0.9,
        "wattsPerPanel": 375.0,
        "mppVoltage": 40.0,
        "mppAmps": 9.38,
        "tempCoefficient": -0.37,
        "azimuth": 180.0,
        "tilt": 0.0,
        "tracking": 1,
        "trackingAngle": -60.0,
        "derateDetail": false,
        "lightInducedDegradation": 0.0,
        "pmaxDeviation": 0.0,
        "mismatch": 0.0,
        "dcLoss": 0.0,
        "acLoss": 0.0,
        "transformerLoss": 0.0,
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
    "combinerInputs": [],
    "degrade": 0.5,
    "monthlyDerate": {
      "jan": 1.0,
      "feb": 1.0,
      "mar": 1.0,
      "apr": 1.0,
      "may": 1.0,
      "jun": 1.0,
      "jul": 1.0,
      "aug": 1.0,
      "sep": 1.0,
      "oct": 1.0,
      "nov": 1.0,
      "dec": 1.0
    },
    "monthlyOutput": {
      "jan": 8998,
      "feb": 13127,
      "mar": 19200,
      "apr": 23033,
      "may": 24652,
      "jun": 25055,
      "jul": 28216,
      "aug": 25240,
      "sep": 19603,
      "oct": 12723,
      "nov": 8641,
      "dec": 6770
    },
    "canIntegrateCombiners": false,
    "hasIntegratedCombiners": false
  },
  "siteHasInverterGroups": false,
  "selectedHardware": [
    {
      "selected": false,
      "sortIndex": 1,
      "name": "Inv 1 (125kW) CHINT SCH125KTL-DO/US-600",
      "key": "H425916"
    },
    {
      "selected": false,
      "sortIndex": 2,
      "name": "Inv 2 (125kW) CHINT SCH125KTL-DO/US-600",
      "key": "H425917"
    },
    {
      "selected": false,
      "sortIndex": 3,
      "name": "Inv 3 (125kW) CHINT SCH125KTL-DO/US-600",
      "key": "H425918"
    },
    {
      "selected": false,
      "sortIndex": 4,
      "name": "Inv 4 (125kW) CHINT SCH125KTL-DO/US-600",
      "key": "H425919"
    },
    {
      "selected": true,
      "sortIndex": 5,
      "name": "Inv 5 (125kW) CHINT SCH125KTL-DO/US-600",
      "key": "H425923"
    },
    {
      "selected": false,
      "sortIndex": 6,
      "name": "Inv 6 (125kW) CHINT SCH125KTL-DO/US-600",
      "key": "H425924"
    }
  ],
  "latitude": 37.702512,
  "longitude": -121.0649284,
  "dcRating": 146.25,
  "groupKey": "",
  "outputKey": "H450083",
  "weatherStationKey1": "H449791",
  "weatherStationKey2": "H448467",
  "siteDcShare": 146.25
}
```
