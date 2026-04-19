<a id="top"></a>
# /api/view/chart/estimate

[← Back to Index](../logs.md)

**Methods:** POST  
**Status Codes:** 200, 200, 200, 200, 200, 200, 200, 200, 200  

## Table of Contents

- [Payload Structure](#payload-structure)
- [General](#general)
- [Example](#example)

## Payload Structure

```json
{
  "type": "object",
  "properties": {
    "binSize": {
      "type": "number"
    },
    "chartType": {
      "type": "number"
    },
    "context": {
      "type": "string"
    },
    "end": {
      "type": "string"
    },
    "futureDays": {
      "type": "number"
    },
    "hardwareSet": {
      "type": "string"
    },
    "query": {
      "type": "object",
      "properties": {}
    },
    "sectionCode": {
      "type": "number"
    },
    "source": {
      "type": "string"
    },
    "start": {
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
    "binsCount": {
      "type": "number"
    },
    "estimatedDataPoints": {
      "type": "number"
    },
    "seriesCount": {
      "type": "number"
    },
    "wouldTruncate": {
      "type": "boolean"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
POST /api/view/chart/estimate
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 05fc89
referer: https://apps.alsoenergy.com/powertrack/S66942/analysis/chartbuilder?start=2026-04-15&end=2026-04-17&d=3day&bin=15&k=%7B~measurements~%3A%5B2%5D%7D&m=k&a=0&h=1*2&c=15&s=2&i=%7B~aggregationMode~%3A3%2C~lineType~%3A5%7D
```

**Payload:**

```json
{
  "binSize": 15,
  "chartType": 1,
  "context": "site",
  "end": "2026-04-17",
  "futureDays": 1,
  "hardwareSet": [
    "H492482",
    "H492483",
    "H492484",
    "H492485",
    "H492486",
    "H492487",
    "H492488",
    "H492489",
    "H492490",
    "H492491",
    "H492492",
    "H492493",
    "H492494",
    "H492480"
  ],
  "query": {
    "dataItems": [],
    "initialSpan": 1,
    "kpiChart": {
      "availabilityPassMode": 0,
      "availabilityPowerThreshold": 0,
      "availabilityReferenceMode": 0,
      "categories": {
        "calculations": [
          {
            "checked": false,
            "enabled": false,
            "modelOptions": {
              "showCalcModTemp": false,
              "showLocusVi": false,
              "showOnSiteWeather": false,
              "showSolarSight": false
            },
            "value": 1
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": {
              "showCalcModTemp": false,
              "showLocusVi": false,
              "showOnSiteWeather": false,
              "showSolarSight": false
            },
            "value": 2
          },
          {
            "checked": false,
            "enabled": true,
            "modelOptions": null,
            "value": 4
          },
          {
            "checked": false,
            "enabled": true,
            "modelOptions": null,
            "value": 8
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 16
          },
          {
            "checked": false,
            "enabled": true,
            "modelOptions": null,
            "value": 32
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 64
          },
          {
            "checked": false,
            "enabled": true,
            "modelOptions": null,
            "value": 128
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 256
          },
          {
            "checked": false,
            "enabled": true,
            "modelOptions": null,
            "value": 512
          },
          {
            "checked": false,
            "enabled": true,
            "modelOptions": null,
            "value": 1024
          },
          {
            "checked": false,
            "enabled": true,
            "modelOptions": null,
            "value": 2048
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 4096
          },
          {
            "checked": false,
            "enabled": true,
            "modelOptions": null,
            "value": 8192
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": {
              "showCalcModTemp": false,
              "showLocusVi": false,
              "showOnSiteWeather": false,
              "showSolarSight": false
            },
            "value": 16384
          },
          {
            "checked": false,
            "enabled": true,
            "modelOptions": null,
            "value": 32768
          },
          {
            "checked": false,
            "enabled": true,
            "modelOptions": null,
            "value": 65536
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": {
              "showCalcModTemp": false,
              "showLocusVi": false,
              "showOnSiteWeather": false,
              "showSolarSight": false
            },
            "value": 131072
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 262144
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": {
              "showCalcModTemp": false,
              "showLocusVi": false,
              "showOnSiteWeather": false,
              "showSolarSight": false
            },
            "value": 524288
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": {
              "showCalcModTemp": false,
              "showLocusVi": false,
              "showOnSiteWeather": false,
              "showSolarSight": false
            },
            "value": 1048576
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": {
              "showCalcModTemp": false,
              "showLocusVi": false,
              "showOnSiteWeather": false,
              "showSolarSight": false
            },
            "value": 2097152
          }
        ],
        "events": [
          {
            "checked": false,
            "enabled": true,
            "modelOptions": null,
            "value": 1
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 2
          }
        ],
        "financials": [
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 1
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": {
              "showCalcModTemp": false,
              "showLocusVi": false,
              "showOnSiteWeather": false,
              "showSolarSight": false
            },
            "value": 2
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 4
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 8
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 16
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 32
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 64
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 128
          }
        ],
        "losses": [
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 1
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 2
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 4
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 8
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 16
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 32
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 64
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 128
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 256
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 512
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 1024
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 2048
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 4096
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 8192
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 16384
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 32768
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 65536
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 131072
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 262144
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 524288
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 2097152
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 4194304
          }
        ],
        "measurements": [
          {
            "checked": false,
            "enabled": true,
            "modelOptions": null,
            "value": 1
          },
          {
            "checked": true,
            "enabled": true,
            "modelOptions": null,
            "value": 2
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": {
              "showCalcModTemp": false,
              "showLocusVi": false,
              "showOnSiteWeather": false,
              "showSolarSight": false
            },
            "value": 4
          },
          {
            "checked": false,
            "enabled": true,
            "modelOptions": {
              "showCalcModTemp": false,
              "showLocusVi": false,
              "showOnSiteWeather": false,
              "showSolarSight": false
            },
            "value": 8
          },
          {
            "checked": false,
            "enabled": true,
            "modelOptions": null,
            "value": 16
          },
          {
            "checked": false,
            "enabled": true,
            "modelOptions": null,
            "value": 32
          },
          {
            "checked": false,
            "enabled": true,
            "modelOptions": null,
            "value": 64
          },
          {
            "checked": false,
            "enabled": true,
            "modelOptions": null,
            "value": 128
          },
          {
            "checked": false,
            "enabled": true,
            "modelOptions": null,
            "value": 256
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 512
          },
          {
            "checked": false,
            "enabled": true,
            "modelOptions": null,
            "value": 1024
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 2048
          },
          {
            "checked": false,
            "enabled": true,
            "modelOptions": null,
            "value": 4096
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 8192
          }
        ],
        "special": [
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 1
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 2
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 4
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 8
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 16
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 32
          },
          {
            "checked": false,
            "enabled": true,
            "modelOptions": {
              "showCalcModTemp": false,
              "showLocusVi": false,
              "showOnSiteWeather": false,
              "showSolarSight": false
            },
            "value": 64
          },
          {
            "checked": false,
            "enabled": true,
            "modelOptions": {
              "showCalcModTemp": false,
              "showLocusVi": false,
              "showOnSiteWeather": false,
              "showSolarSight": false
            },
            "value": 128
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": {
              "showCalcModTemp": false,
              "showLocusVi": false,
              "showOnSiteWeather": false,
              "showSolarSight": false
            },
            "value": 256
          },
          {
            "checked": false,
            "enabled": true,
            "modelOptions": {
              "showCalcModTemp": false,
              "showLocusVi": false,
              "showOnSiteWeather": false,
              "showSolarSight": false
            },
            "value": 512
          },
          {
            "checked": false,
            "enabled": true,
            "modelOptions": {
              "showCalcModTemp": false,
              "showLocusVi": false,
              "showOnSiteWeather": false,
              "showSolarSight": false
            },
            "value": 1024
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": {
              "showCalcModTemp": false,
              "showLocusVi": false,
              "showOnSiteWeather": false,
              "showSolarSight": false
            },
            "value": 2048
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 4096
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 8192
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 16384
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 32768
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 65536
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 131072
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 262144
          },
          {
            "checked": false,
            "enabled": false,
            "modelOptions": null,
            "value": 524288
          }
        ]
      },
      "inlineOptions": {
        "ageMode": 0,
        "aggregationMode": 3,
        "autoSource": false,
        "availabilityPassMode": 3,
        "availabilityPowerThreshold": 0,
        "availabilityReferenceMode": 2,
        "azimuth": false,
        "elevation": false,
        "eventCosts": false,
        "eventExcluded": true,
        "eventIncluded": true,
        "eventOngoing": false,
        "eventOther": true,
        "eventRecorded": true,
        "eventSavings": false,
        "fillGaps": false,
        "incidenceAngle": false,
        "includeAlbedo": false,
        "includeBacksidePOA": false,
        "includeDHI": false,
        "includeDNI": false,
        "includeGHI": false,
        "includePOA": true,
        "includeSensor": false,
        "lineType": 5,
        "modelIndex": 0,
        "powerAverage": true,
        "powerDailyPeak": false,
        "primaryWeatherSource": 10,
        "showAggregateLayers": true,
        "showApparentPower": false,
        "showClearSky": false,
        "showDeliveredEnergy": false,
        "showDeviceTemperature": false,
        "showExternalTemperature": true,
        "showInsolationEstimate": false,
        "showLossDetail": true,
        "showLossTotal": false,
        "showNetEnergy": true,
        "showReactivePower": false,
        "showReceivedEnergy": false,
        "showSoilingLossDetail": false,
        "showSourceLayers": false,
        "synthesizedProductionMethod": 0,
        "useDcCapacityFactor": false,
        "useDeviceEstimates": false,
        "useGrossEnergy": false,
        "useInsolation": false,
        "useLocusVi": false,
        "useModuleTemp": false,
        "useOnSiteWeatherStations": true,
        "usePercent": false,
        "useSiteSoilingEstimate": false,
        "useSolarSight": false,
        "weatherMode": 0,
        "xSeriesKey": ""
      },
      "showAlbedoIrradianceOption": false,
      "showApparentPowerOption": true,
      "showBacksidePOAIrradianceOption": false,
      "showDHIIrradianceOption": false,
      "showDNIIrradianceOption": false,
      "showReactivePowerOption": true,
      "siteKeys": [
        "S66942"
      ],
      "weatherModes": [],
      "weatherSources": [
        0
      ]
    },
    "name": "CustomChart",
    "title": "Custom Chart"
  },
  "sectionCode": 0,
  "source": [
    "S66942"
  ],
  "start": "2026-04-15"
}
```

**Response:**

```json
{
  "binsCount": 288,
  "estimatedDataPoints": 4032,
  "seriesCount": 14,
  "wouldTruncate": false
}
```

[Return to top](#top)

