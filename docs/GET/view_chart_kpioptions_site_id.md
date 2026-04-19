<a id="top"></a>
# /api/view/chart/kpioptions/{site_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [General](#general)
- [Example](#example)

## General

```json
{
  "type": "object",
  "properties": {
    "ageMode": {
      "type": "number"
    },
    "aggregationMode": {
      "type": "number"
    },
    "autoSource": {
      "type": "boolean"
    },
    "availabilityPassMode": {
      "type": "number"
    },
    "availabilityPowerThreshold": {
      "type": "number"
    },
    "availabilityReferenceMode": {
      "type": "number"
    },
    "azimuth": {
      "type": "boolean"
    },
    "elevation": {
      "type": "boolean"
    },
    "eventCosts": {
      "type": "boolean"
    },
    "eventExcluded": {
      "type": "boolean"
    },
    "eventIncluded": {
      "type": "boolean"
    },
    "eventOngoing": {
      "type": "boolean"
    },
    "eventOther": {
      "type": "boolean"
    },
    "eventRecorded": {
      "type": "boolean"
    },
    "eventSavings": {
      "type": "boolean"
    },
    "fillGaps": {
      "type": "boolean"
    },
    "incidenceAngle": {
      "type": "boolean"
    },
    "includeAlbedo": {
      "type": "boolean"
    },
    "includeBacksidePOA": {
      "type": "boolean"
    },
    "includeDHI": {
      "type": "boolean"
    },
    "includeDNI": {
      "type": "boolean"
    },
    "includeGHI": {
      "type": "boolean"
    },
    "includePOA": {
      "type": "boolean"
    },
    "includeSensor": {
      "type": "boolean"
    },
    "lineType": {
      "type": "number"
    },
    "modelIndex": {
      "type": "number"
    },
    "powerAverage": {
      "type": "boolean"
    },
    "powerDailyPeak": {
      "type": "boolean"
    },
    "primaryWeatherSource": {
      "type": "number"
    },
    "showAggregateLayers": {
      "type": "boolean"
    },
    "showApparentPower": {
      "type": "boolean"
    },
    "showClearSky": {
      "type": "boolean"
    },
    "showDeliveredEnergy": {
      "type": "boolean"
    },
    "showDeviceTemperature": {
      "type": "boolean"
    },
    "showExternalTemperature": {
      "type": "boolean"
    },
    "showInsolationEstimate": {
      "type": "boolean"
    },
    "showLossDetail": {
      "type": "boolean"
    },
    "showLossTotal": {
      "type": "boolean"
    },
    "showNetEnergy": {
      "type": "boolean"
    },
    "showReactivePower": {
      "type": "boolean"
    },
    "showReceivedEnergy": {
      "type": "boolean"
    },
    "showSoilingLossDetail": {
      "type": "boolean"
    },
    "showSourceLayers": {
      "type": "boolean"
    },
    "synthesizedProductionMethod": {
      "type": "number"
    },
    "useDcCapacityFactor": {
      "type": "boolean"
    },
    "useDeviceEstimates": {
      "type": "boolean"
    },
    "useGrossEnergy": {
      "type": "boolean"
    },
    "useInsolation": {
      "type": "boolean"
    },
    "useLocusVi": {
      "type": "boolean"
    },
    "useModuleTemp": {
      "type": "boolean"
    },
    "useOnSiteWeatherStations": {
      "type": "boolean"
    },
    "usePercent": {
      "type": "boolean"
    },
    "useSiteSoilingEstimate": {
      "type": "boolean"
    },
    "useSolarSight": {
      "type": "boolean"
    },
    "weatherMode": {
      "type": "number"
    },
    "xSeriesKey": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/view/chart/kpioptions/S66942
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 05fc89
referer: https://apps.alsoenergy.com/powertrack/S66942/analysis/chartbuilder?start=2026-04-15&end=2026-04-17&d=3day&bin=15&k=%7B%7D&m=b&a=0
```

**Response:**

```json
{
  "ageMode": 0,
  "aggregationMode": 1,
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
  "lineType": 0,
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
}
```

[Return to top](#top)

