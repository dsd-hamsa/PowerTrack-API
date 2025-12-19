# Endpoint 37

[← Back to Index](../README.md)


### `/api/view/chart/kpioptions/{site_id}`

**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 4  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "showExternalTemperature": {
      "type": "boolean"
    },
    "useInsolation": {
      "type": "boolean"
    },
    "ageMode": {
      "type": "integer"
    },
    "showDeviceTemperature": {
      "type": "boolean"
    },
    "fillGaps": {
      "type": "boolean"
    },
    "powerDailyPeak": {
      "type": "boolean"
    },
    "useOnSiteWeatherStations": {
      "type": "boolean"
    },
    "showSoilingLossDetail": {
      "type": "boolean"
    },
    "includeBacksidePOA": {
      "type": "boolean"
    },
    "showReceivedEnergy": {
      "type": "boolean"
    },
    "showAggregateLayers": {
      "type": "boolean"
    },
    "availabilityPowerThreshold": {
      "type": "integer"
    },
    "useGrossEnergy": {
      "type": "boolean"
    },
    "showApparentPower": {
      "type": "boolean"
    },
    "showSourceLayers": {
      "type": "boolean"
    },
    "azimuth": {
      "type": "boolean"
    },
    "useSolarSight": {
      "type": "boolean"
    },
    "showDeliveredEnergy": {
      "type": "boolean"
    },
    "usePercent": {
      "type": "boolean"
    },
    "weatherMode": {
      "type": "integer"
    },
    "xSeriesKey": {
      "type": "string"
    },
    "elevation": {
      "type": "boolean"
    },
    "eventIncluded": {
      "type": "boolean"
    },
    "includeGHI": {
      "type": "boolean"
    },
    "includeDNI": {
      "type": "boolean"
    },
    "showLossDetail": {
      "type": "boolean"
    },
    "showInsolationEstimate": {
      "type": "boolean"
    },
    "showNetEnergy": {
      "type": "boolean"
    },
    "synthesizedProductionMethod": {
      "type": "integer"
    },
    "availabilityReferenceMode": {
      "type": "integer"
    },
    "useDcCapacityFactor": {
      "type": "boolean"
    },
    "eventRecorded": {
      "type": "boolean"
    },
    "eventCosts": {
      "type": "boolean"
    },
    "powerAverage": {
      "type": "boolean"
    },
    "showLossTotal": {
      "type": "boolean"
    },
    "showReactivePower": {
      "type": "boolean"
    },
    "useSiteSoilingEstimate": {
      "type": "boolean"
    },
    "eventOther": {
      "type": "boolean"
    },
    "lineType": {
      "type": "integer"
    },
    "autoSource": {
      "type": "boolean"
    },
    "modelIndex": {
      "type": "integer"
    },
    "availabilityPassMode": {
      "type": "integer"
    },
    "eventOngoing": {
      "type": "boolean"
    },
    "useDeviceEstimates": {
      "type": "boolean"
    },
    "showClearSky": {
      "type": "boolean"
    },
    "incidenceAngle": {
      "type": "boolean"
    },
    "includePOA": {
      "type": "boolean"
    },
    "useLocusVi": {
      "type": "boolean"
    },
    "includeSensor": {
      "type": "boolean"
    },
    "eventExcluded": {
      "type": "boolean"
    },
    "includeAlbedo": {
      "type": "boolean"
    },
    "eventSavings": {
      "type": "boolean"
    },
    "includeDHI": {
      "type": "boolean"
    },
    "useModuleTemp": {
      "type": "boolean"
    },
    "primaryWeatherSource": {
      "type": "integer"
    },
    "aggregationMode": {
      "type": "integer"
    }
  }
}
```

#### Example

**Request:**

```http
GET /api/view/chart/kpioptions/S38292
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "ageMode": 0,
  "aggregationMode": 1,
  "autoSource": false,
  "availabilityPassMode": 3,
  "availabilityPowerThreshold": 0,
  "availabilityReferenceMode": 1,
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

