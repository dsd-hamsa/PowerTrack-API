# Endpoint 34

[← Back to Index](../README.md)


### `/api/view/chart`

**Methods:** POST  
**Status Codes:** 200  
**Call Count:** 5  

#### Response Structure

```json
{
  "type": "object"
}
```

#### Example

**Request:**

```http
POST /api/view/chart?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "allowSmallBinSize": true,
  "binSize": 1440,
  "currentNowBinIndex": 18,
  "dataNotAvailable": false,
  "durations": [
    {
      "binSize": 1440,
      "days": 1,
      "id": "day"
    },
    {
      "binSize": 1440,
      "days": 5,
      "id": "3day"
    },
    {
      "binSize": 1440,
      "days": 7,
      "id": "week"
    },
    {
      "binSize": 1440,
      "days": 31,
      "id": "month"
    },
    {
      "binSize": 1440,
      "days": 365,
      "id": "year"
    },
    {
      "binSize": 1440,
      "days": 1000,
      "id": "lifetime"
    },
    {
      "binSize": 1440,
      "days": 0,
      "id": "custom"
    }
  ],
  "end": "2025-12-19T23:59:59",
  "errorString": "",
  "hardwareKeys": [
    "H88448",
    "H70619",
    "H70620",
    "H70621",
    "H73009",
    "H70616",
    "H70617",
    "H70619",
    "H70619",
    "H70620",
    "H70620",
    "H70621",
    "H70627",
    "H70614",
    "H70614",
    "H70614",
    "BAD",
    "BAD",
    "BAD",
    "BAD",
    "BAD",
    "BAD",
    "BAD"
  ],
  "hasAlertMessages": false,
  "hasOverriddenQuery": false,
  "isCategoryChart": false,
  "isSummaryChart": false,
  "isUsingDaylightSavings": true,
  "key": "{\"binSize\":1440,\"builtInParameters\":null,\"chartType\":1,\"context\":\"site\",\"end\":\"2025-12-19\",\"futureDays\":0,\"hardwareSet\":null,\"hardwareByType\":[5,2],\"query\":{\"key\":null,\"name\":\"KPIQuery\",\"parentKey\":null,\"ts\":null,\"newNote\":null,\"isSummary\":false,\"initialSpan\":1,\"numberOfDays\":3,\"refreshRate\":0,\"spanFrom\":null,\"spanTo\":null,\"binSpan\":0,\"timeSpanList\":[{\"indexMap\":0,\"binSize\":15,\"chartType\":0,\"outBinSize\":0,\"outFunc\":0},{\"indexMap\":1,\"binSize\":1440,\"chartType\":0,\"outBinSize\":0,\"outFunc\":0},{\"indexMap\":2,\"binSize\":1440,\"chartType\":0,\"outBinSize\":0,\"outFunc\":0},{\"indexMap\":3,\"binSize\":44640,\"chartType\":0,\"outBinSize\":0,\"outFunc\":0},{\"indexMap\":4,\"binSize\":527040,\"chartType\":0,\"outBinSize\":0,\"outFunc\":0}],\"dataItems\":[],\"hasChart\":false,\"noCache\":false,\"queryCondition\":null,\"title\":\"Losses\",\"subtitle\":null,\"description\":null,\"xTitle\":null,\"titleFontSize\":0,\"labelFontSize\":0,\"backgroundColor\":null,\"foregroundColor\":null,\"hideMenu\":false,\"hideLegend\":false,\"showEvents\":false,\"colorGradient\":0,\"timeZoneOverride\":false,\"timeZone\":0,\"timeStampAdjust\":null,\"morningSkip\":0,\"eveningSkip\":0,\"futureDays\":0,\"validDataDate\":null,\"plotType\":0,\"bins\":0,\"dataNotRequired\":false,\"fillGaps\":false,\"useRaw\":false,\"noQuery\":false,\"seriesLimit\":0,\"showTable\":false,\"sort\":0,\"separateTime\":false,\"isOverview\":false,\"hideTools\":false,\"isPivot\":false,\"lowerLimit\":0.0,\"lowerLimitColor\":null,\"nominal\":0.0,\"nominalColor\":null,\"upperLimit\":0.0,\"upperLimitColor\":null,\"animationMode\":0,\"preChart\":null,\"preprocess\":null,\"summary\":null,\"parameters\":null,\"kpiChart\":{\"siteKeys\":[\"S38292\"],\"categories\":{\"measurements\":[{\"value\":2,\"enabled\":true,\"checked\":true,\"modelOptions\":null}],\"calculations\":[{\"value\":2,\"enabled\":true,\"checked\":true,\"modelOptions\":null},{\"value\":4,\"enabled\":true,\"checked\":true,\"modelOptions\":null},{\"value\":2097152,\"enabled\":true,\"checked\":true,\"modelOptions\":null}],\"losses\":[{\"value\":1,\"enabled\":true,\"checked\":true,\"modelOptions\":null},{\"value\":4,\"enabled\":true,\"checked\":true,\"modelOptions\":null},{\"value\":8,\"enabled\":true,\"checked\":true,\"modelOptions\":null},{\"value\":32,\"enabled\":true,\"checked\":true,\"modelOptions\":null},{\"value\":64,\"enabled\":true,\"checked\":true,\"modelOptions\":null},{\"value\":256,\"enabled\":true,\"checked\":true,\"modelOptions\":null},{\"value\":512,\"enabled\":true,\"checked\":true,\"modelOptions\":null},{\"value\":1024,\"enabled\":true,\"checked\":true,\"modelOptions\":null},{\"value\":4194304,\"enabled\":true,\"checked\":true,\"modelOptions\":null}],\"financials\":null,\"events\":null,\"special\":null},\"inlineOptions\":{\"aggregationMode\":1,\"autoSource\":false,\"lineType\":0,\"weatherMode\":0,\"modelIndex\":0,\"useLocusVi\":false,\"useModuleTemp\":false,\"useOnSiteWeatherStations\":true,\"useSolarSight\":false,\"primaryWeatherSource\":10,\"usePercent\":false,\"availabilityPassMode\":1,\"availabilityReferenceMode\":2,\"availabilityPowerThreshold\":0.0,\"useDcCapacityFactor\":true,\"showNetEnergy\":true,\"showDeliveredEnergy\":false,\"showReceivedEnergy\":false,\"useGrossEnergy\":false,\"useDeviceEstimates\":false,\"ageMode\":0,\"includeAlbedo\":false,\"includeBacksidePOA\":false,\"includeGHI\":false,\"includePOA\":true,\"includeSensor\":false,\"includeDHI\":false,\"includeDNI\":false,\"useInsolation\":false,\"showInsolationEstimate\":false,\"showClearSky\":false,\"powerAverage\":true,\"powerDailyPeak\":false,\"showApparentPower\":false,\"showReactivePower\":false,\"showLossDetail\":true,\"showLossTotal\":false,\"showAggregateLayers\":true,\"showSourceLayers\":false,\"eventIncluded\":false,\"eventExcluded\":false,\"eventOther\":false,\"eventSavings\":false,\"eventCosts\":false,\"eventRecorded\":false,\"eventOngoing\":false,\"showSoilingLossDetail\":false,\"useSiteSoilingEstimate\":false,\"azimuth\":true,\"elevation\":false,\"incidenceAngle\":false,\"fillGaps\":false,\"synthesizedProductionMethod\":0,\"showExternalTemperature\":true,\"showDeviceTemperature\":false,\"xSeriesKey\":null},\"weatherMode\":0,\"weatherSource\":0},\"tags\":null},\"sectionCode\":-1,\"source\":[\"S38292\"],\"start\":\"2025-12-01\"}",
  "lastChanged": "2025-12-19T20:02:19Z",
  "lastDataDatetime": "2025-12-19T05:00:00Z",
  "namedResults": {
    "ageAC": 4364.58278,
    "clipping": 0,
    "downtime": 0,
    "energy": 25188,
    "estEnergy": 74764.80200000003,
    "expEnergy": 78600.5349,
    "inverter": 4143.123739999999,
    "inverterLimit": 0,
    "snow": 31639.584,
    "soiling": 0
  },
  "renderType": 0,
  "series": [
    {
      "alertMessageMap": null,
      "color": "#154672",
      "customUnit": "Kilowatt hours",
      "dataBinned": [],
      "dataMax": 5322,
      "dataMin": 52,
      "dataXy": [
        {
          "timeStamp": null,
          "x": 1764565200000,
          "y": 5322
        },
        {
          "timeStamp": null,
          "x": 1764651600000,
          "y": 108
        },
        {
          "timeStamp": null,
          "x": 1764738000000,
          "y": 84
        },
        {
          "timeStamp": null,
          "x": 1764824400000,
          "y": 68
        },
        {
          "timeStamp": null,
          "x": 1764910800000,
          "y": 210
        },
        {
          "timeStamp": null,
          "x": 1764997200000,
          "y": 68
        },
        {
          "timeStamp": null,
          "x": 1765083600000,
          "y": 84
        },
        {
          "timeStamp": null,
          "x": 1765170000000,
          "y": 310
        },
        {
          "timeStamp": null,
          "x": 1765256400000,
          "y": 324
        },
        {
          "timeStamp": null,
          "x": 1765342800000,
          "y": 204
        },
        {
          "timeStamp": null,
          "x": 1765429200000,
          "y": 2956
        },
        {
          "timeStamp": null,
          "x": 1765515600000,
          "y": 3628
        },
        {
          "timeStamp": null,
          "x": 1765602000000,
          "y": 1272
        },
        {
          "timeStamp": null,
          "x": 1765688400000,
          "y": 52
        },
        {
          "timeStamp": null,
          "x": 1765774800000,
          "y": 764
        },
        {
          "timeStamp": null,
          "x": 1765861200000,
          "y": 2210
        },
        {
          "timeStamp": null,
          "x": 1765947600000,
          "y": 2176
        },
        {
          "timeStamp": null,
          "x": 1766034000000,
          "y": 4950
        },
        {
          "timeStamp": null,
          "x": 1766120400000,
          "y": 398
        }
      ],
      "diameter": 0,
      "fitExponent": 0,
      "header": "Production meter net energy",
      "key": "Energy_NetEnergyPM",
      "lineColor": "#154672",
      "lineType": 0,
      "lineWidth": 2,
      "name": "Production meter net energy",
      "rightAxis": false,
      "units": 11,
      "useBinnedData": false,
      "visible": true,
      "xSeriesHeader": "",
      "xSeriesKey": "",
      "xSeriesName": "",
      "xUnits": "",
      "yAxisIndex": 0,
      "yMax": "NaN",
      "yMin": "NaN"
    },
    {
      "alertMessageMap": null,
      "color": "#000000",
      "customUnit": "Watts/meter\u00b2",
      "dataBinned": [],
      "dataMax": 105.5099,
      "dataMin": 4.521505,
      "dataXy": [
        {
          "timeStamp": null,
          "x": 1764565200000,
          "y": 105.5099
        },
        {
          "timeStamp": null,
          "x": 1764651600000,
          "y": 4.521505
        },
        {
          "timeStamp": null,
          "x": 1764738000000,
          "y": 81.10889
        },
        {
          "timeStamp": null,
          "x": 1764824400000,
          "y": 58.31093
        },
        {
          "timeStamp": null,
          "x": 1764910800000,
          "y": 103.061
        },
        {
          "timeStamp": null,
          "x": 1764997200000,
          "y": 66.38699
        },
        {
          "timeStamp": null,
          "x": 1765083600000,
          "y": 52.36424
        },
        {
          "timeStamp": null,
          "x": 1765170000000,
          "y": 91.49911
        },
        {
          "timeStamp": null,
          "x": 1765256400000,
          "y": 92.90814
        },
        {
          "timeStamp": null,
          "x": 1765342800000,
          "y": 45.60801
        },
        {
          "timeStamp": null,
          "x": 1765429200000,
          "y": 90.63297
        },
        {
          "timeStamp": null,
          "x": 1765515600000,
          "y": 81.07335
        },
        {
          "timeStamp": null,
          "x": 1765602000000,
          "y": 31.18441
        },
        {
          "timeStamp": null,
          "x": 1765688400000,
          "y": 25.43154
        },
        {
          "timeStamp": null,
          "x": 1765774800000,
          "y": 93.53996
        },
        {
          "timeStamp": null,
          "x": 1765861200000,
          "y": 99.7957
        },
        {
          "timeStamp": null,
          "x": 1765947600000,
          "y": 62.2619
        },
        {
          "timeStamp": null,
          "x": 1766034000000,
          "y": 102.7691
        },
        {
          "timeStamp": null,
          "x": 1766120400000,
          "y": 17.23018
        }
      ],
      "diameter": 0,
      "fitExponent": 0,
      "header": "IMT Reference Cell #1 - CP20",
      "key": "ExpEnergy_Sun",
      "lineColor": "#000000",
      "lineType": 17,
      "lineWidth": 1,
      "name": "IMT Reference Cell #1 - CP20",
      "rightAxis": false,
      "units": 57,
      "useBinnedData": false,
      "visible": false,
      "xSeriesHeader": "",
      "xSeriesKey": "",
      "xSeriesName": "",
      "xUnits": "",
      "yAxisIndex": 0,
      "yMax": "NaN",
      "yMin": 0
    },
    {
      "alertMessageMap": null,
      "color": "#000000",
      "customUnit": "Watts/meter\u00b2",
      "dataBinned": [],
      "dataMax": 71.98392,
      "dataMin": 4.352576,
      "dataXy": [
        {
          "timeStamp": null,
          "x": 1764565200000,
          "y": 67.64072
        },
        {
          "timeStamp": null,
          "x": 1764651600000,
          "y": 4.352576
        },
        {
          "timeStamp": null,
          "x": 1764738000000,
          "y": 71.98392
        },
        {
          "timeStamp": null,
          "x": 1764824400000,
          "y": 45.5377
        },
        {
          "timeStamp": null,
          "x": 1764910800000,
          "y": 69.08259
        },
        {
          "timeStamp": null,
          "x": 1764997200000,
          "y": 41.00111
        },
        {
          "timeStamp": null,
          "x": 1765083600000,
          "y": 50.01162
        },
        {
          "timeStamp": null,
          "x": 1765170000000,
          "y": 65.88594
        },
        {
          "timeStamp": null,
          "x": 1765256400000,
          "y": 71.29252
        },
        {
          "timeStamp": null,
          "x": 1765342800000,
          "y": 44.24905
        },
        {
          "timeStamp": null,
          "x": 1765429200000,
          "y": 66.95267
        },
        {
          "timeStamp": null,
          "x": 1765515600000,
          "y": 63.36428
        },
        {
          "timeStamp": null,
          "x": 1765602000000,
          "y": 30.19113
        },
        {
          "timeStamp": null,
          "x": 1765688400000,
          "y": 17.19393
        },
        {
          "timeStamp": null,
          "x": 1765774800000,
          "y": 67.85172
        },
        {
          "timeStamp": null,
          "x": 1765861200000,
          "y": 65.63602
        },
        {
          "timeStamp": null,
          "x": 1765947600000,
          "y": 40.11808
        },
        {
          "timeStamp": null,
          "x": 1766034000000,
          "y": 64.70338
        },
        {
          "timeStamp": null,
          "x": 1766120400000,
          "y": 17.06901
        }
      ],
      "diameter": 0,
      "fitExponent": 0,
      "header": "IMT Reference Cell #2 - CP22",
      "key": "ExpEnergy_Sun2",
      "lineColor": "#000000",
      "lineType": 17,
      "lineWidth": 1,
      "name": "IMT Reference Cell #2 - CP22",
      "rightAxis": false,
      "units": 57,
      "useBinnedData": false,
      "visible": false,
      "xSeriesHeader": "",
      "xSeriesKey": "",
      "xSeriesName": "",
      "xUnits": "",
      "yAxisIndex": 0,
      "yMax": "NaN",
      "yMin": 0
    },
    {
      "alertMessageMap": null,
      "color": "#000000",
      "customUnit": "Watts/meter\u00b2",
      "dataBinned": [],
      "dataMax": 129.499,
      "dataMin": 3.955311,
      "dataXy": [
        {
          "timeStamp": null,
          "x": 1764565200000,
          "y": 123.4581
        },
        {
          "timeStamp": null,
          "x": 1764651600000,
          "y": 3.955311
        },
        {
          "timeStamp": null,
          "x": 1764738000000,
          "y": 87.07687
        },
        {
          "timeStamp": null,
          "x": 1764824400000,
          "y": 60.3073
        },
        {
          "timeStamp": null,
          "x": 1764910800000,
          "y": 129.499
        },
        {
          "timeStamp": null,
          "x": 1764997200000,
          "y": 65.1317
        },
        {
          "timeStamp": null,
          "x": 1765083600000,
          "y": 55.87154
        },
        {
          "timeStamp": null,
          "x": 1765170000000,
          "y": 114.353
        },
        {
          "timeStamp": null,
          "x": 1765256400000,
          "y": 118.0739
        },
        {
          "timeStamp": null,
          "x": 1765342800000,
          "y": 51.61723
        },
        {
          "timeStamp": null,
          "x": 1765429200000,
          "y": 109.7709
        },
        {
          "timeStamp": null,
          "x": 1765515600000,
          "y": 105.3292
        },
        {
          "timeStamp": null,
          "x": 1765602000000,
          "y": 31.89209
        },
        {
          "timeStamp": null,
          "x": 1765688400000,
          "y": 17.9563
        },
        {
          "timeStamp": null,
          "x": 1765774800000,
          "y": 111.1082
        },
        {
          "timeStamp": null,
          "x": 1765861200000,
          "y": 122.1922
        },
        {
          "timeStamp": null,
          "x": 1765947600000,
          "y": 66.61168
        },
        {
          "timeStamp": null,
          "x": 1766034000000,
          "y": 127.3428
        },
        {
          "timeStamp": null,
          "x": 1766120400000,
          "y": 17.13002
        }
      ],
      "diameter": 0,
      "fitExponent": 0,
      "header": "IMT Reference Cell #3 - CP12",
      "key": "ExpEnergy_Sun3",
      "lineColor": "#000000",
      "lineType": 17,
      "lineWidth": 1,
      "name": "IMT Reference Cell #3 - CP12",
      "rightAxis": false,
      "units": 57,
      "useBinnedData": false,
      "visible": false,
      "xSeriesHeader": "",
      "xSeriesKey": "",
      "xSeriesName": "",
      "xUnits": "",
      "yAxisIndex": 0,
      "yMax": "NaN",
      "yMin": 0
    },
    {
      "alertMessageMap": null,
      "color": "#000000",
      "customUnit": "Watts/meter\u00b2",
      "dataBinned": [],
      "dataMax": 137.8913,
      "dataMin": 10.31584,
      "dataXy": [
        {
          "timeStamp": null,
          "x": 1764565200000,
          "y": 126.4865
        },
        {
          "timeStamp": null,
          "x": 1764651600000,
          "y": 10.31584
        },
        {
          "timeStamp": null,
          "x": 1764738000000,
          "y": 127.5637
        },
        {
          "timeStamp": null,
          "x": 1764824400000,
          "y": 60.03048
        },
        {
          "timeStamp": null,
          "x": 1764910800000,
          "y": 137.8913
        },
        {
          "timeStamp": null,
          "x": 1764997200000,
          "y": 65.52135
        },
        {
          "timeStamp": null,
          "x": 1765083600000,
          "y": 57.26179
        },
        {
          "timeStamp": null,
          "x": 1765170000000,
          "y": 123.1479
        },
        {
          "timeStamp": null,
          "x": 1765256400000,
          "y": 128.444
        },
        {
          "timeStamp": null,
          "x": 1765342800000,
          "y": 53.32973
        },
        {
          "timeStamp": null,
          "x": 1765429200000,
          "y": 113.9433
        },
        {
          "timeStamp": null,
          "x": 1765515600000,
          "y": 113.2317
        },
        {
          "timeStamp": null,
          "x": 1765602000000,
          "y": 31.65876
        },
        {
          "timeStamp": null,
          "x": 1765688400000,
          "y": 35.30724
        },
        {
          "timeStamp": null,
          "x": 1765774800000,
          "y": 127.4067
        },
        {
          "timeStamp": null,
          "x": 1765861200000,
          "y": 126.365
        },
        {
          "timeStamp": null,
          "x": 1765947600000,
          "y": 65.07525
        },
        {
          "timeStamp": null,
          "x": 1766034000000,
          "y": 132.2147
        },
        {
          "timeStamp": null,
          "x": 1766120400000,
          "y": 16.33043
        }
      ],
      "diameter": 0,
      "fitExponent": 0,
      "header": "SR-30 (POA) (158\u00b0/10\u00b0)",
      "key": "ExpEnergy_Sun4",
      "lineColor": "#000000",
      "lineType": 17,
      "lineWidth": 1,
      "name": "SR-30 (POA) (158\u00b0/10\u00b0)",
      "rightAxis": false,
      "units": 57,
      "useBinnedData": false,
      "visible": false,
      "xSeriesHeader": "",
      "xSeriesKey": "",
      "xSeriesName": "",
      "xUnits": "",
      "yAxisIndex": 0,
      "yMax": "NaN",
      "yMin": 0
    },
    {
      "alertMessageMap": null,
      "color": "#000000",
      "customUnit": "Degrees Celsius",
      "dataBinned": [],
      "dataMax": 8.291228,
      "dataMin": -8.636353,
      "dataXy": [
        {
          "timeStamp": null,
          "x": 1764565200000,
          "y": 0.6060476
        },
        {
          "timeStamp": null,
          "x": 1764651600000,
          "y": -2.549732
        },
        {
          "timeStamp": null,
          "x": 1764738000000,
          "y": -1.422886
        },
        {
          "timeStamp": null,
          "x": 1764824400000,
          "y": -3.032668
        },
        {
          "timeStamp": null,
          "x": 1764910800000,
          "y": -8.132215
        },
        {
          "timeStamp": null,
          "x": 1764997200000,
          "y": -2.626544
        },
        {
          "timeStamp": null,
          "x": 1765083600000,
          "y": -1.517394
        },
        {
          "timeStamp": null,
          "x": 1765170000000,
          "y": -6.419028
        },
        {
          "timeStamp": null,
          "x": 1765256400000,
          "y": -8.636353
        },
        {
          "timeStamp": null,
          "x": 1765342800000,
          "y": -0.4496448
        },
        {
          "timeStamp": null,
          "x": 1765429200000,
          "y": -1.33808
        },
        {
          "timeStamp": null,
          "x": 1765515600000,
          "y": -2.101164
        },
        {
          "timeStamp": null,
          "x": 1765602000000,
          "y": -2.987072
        },
        {
          "timeStamp": null,
          "x": 1765688400000,
          "y": -3.722631
        },
        {
          "timeStamp": null,
          "x": 1765774800000,
          "y": -7.048561
        },
        {
          "timeStamp": null,
          "x": 1765861200000,
          "y": -1.699691
        },
        {
          "timeStamp": null,
          "x": 1765947600000,
          "y": 1.047175
        },
        {
          "timeStamp": null,
          "x": 1766034000000,
          "y": 4.037612
        },
        {
          "timeStamp": null,
          "x": 1766120400000,
          "y": 8.291228
        }
      ],
      "diameter": 0,
      "fitExponent": 0,
      "header": "Weather Station (Standard)",
      "key": "ExpEnergy_Temp1",
      "lineColor": "#000000",
      "lineType": 17,
      "lineWidth": 1,
      "name": "Weather Station (Standard)",
      "rightAxis": false,
      "units": 30,
      "useBinnedData": false,
      "visible": false,
      "xSeriesHeader": "",
      "xSeriesKey": "",
      "xSeriesName": "",
      "xUnits": "",
      "yAxisIndex": 0,
      "yMax": "NaN",
      "yMin": 0
    },
    {
      "alertMessageMap": null,
      "color": "#000000",
      "customUnit": "Degrees Celsius",
      "dataBinned": [],
      "dataMax": 8.614452,
      "dataMin": -8.424805,
      "dataXy": [
        {
          "timeStamp": null,
          "x": 1764565200000,
          "y": 1.095278
        },
        {
          "timeStamp": null,
          "x": 1764651600000,
          "y": -2.166227
        },
        {
          "timeStamp": null,
          "x": 1764738000000,
          "y": -0.8462556
        },
        {
          "timeStamp": null,
          "x": 1764824400000,
          "y": -2.706097
        },
        {
          "timeStamp": null,
          "x": 1764910800000,
          "y": -7.848844
        },
        {
          "timeStamp": null,
          "x": 1764997200000,
          "y": -2.292037
        },
        {
          "timeStamp": null,
          "x": 1765083600000,
          "y": -1.302922
        },
        {
          "timeStamp": null,
          "x": 1765170000000,
          "y": -6.32037
        },
        {
          "timeStamp": null,
          "x": 1765256400000,
          "y": -8.424805
        },
        {
          "timeStamp": null,
          "x": 1765342800000,
          "y": -0.3437083
        },
        {
          "timeStamp": null,
          "x": 1765429200000,
          "y": -1.200538
        },
        {
          "timeStamp": null,
          "x": 1765515600000,
          "y": -1.79332
        },
        {
          "timeStamp": null,
          "x": 1765602000000,
          "y": -2.763964
        },
        {
          "timeStamp": null,
          "x": 1765688400000,
          "y": -3.480032
        },
        {
          "timeStamp": null,
          "x": 1765774800000,
          "y": -6.743701
        },
        {
          "timeStamp": null,
          "x": 1765861200000,
          "y": -1.303864
        },
        {
          "timeStamp": null,
          "x": 1765947600000,
          "y": 1.187961
        },
        {
          "timeStamp": null,
          "x": 1766034000000,
          "y": 4.021252
        },
        {
          "timeStamp": null,
          "x": 1766120400000,
          "y": 8.614452
        }
      ],
      "diameter": 0,
      "fitExponent": 0,
      "header": "Weather Station (Module)",
      "key": "ExpEnergy_Temp1_2",
      "lineColor": "#000000",
      "lineType": 17,
      "lineWidth": 1,
      "name": "Weather Station (Module)",
      "rightAxis": false,
      "units": 30,
      "useBinnedData": false,
      "visible": false,
      "xSeriesHeader": "",
      "xSeriesKey": "",
      "xSeriesName": "",
      "xUnits": "",
      "yAxisIndex": 0,
      "yMax": "NaN",
      "yMin": 0
    },
    {
      "alertMessageMap": null,
      "color": "#000000",
      "customUnit": "Degrees Celsius",
      "dataBinned": [],
      "dataMax": 10.85998,
      "dataMin": -4.164467,
      "dataXy": [
        {
          "timeStamp": null,
          "x": 1764565200000,
          "y": 4.78744
        },
        {
          "timeStamp": null,
          "x": 1764651600000,
          "y": 1.188116
        },
        {
          "timeStamp": null,
          "x": 1764738000000,
          "y": 3.685881
        },
        {
          "timeStamp": null,
          "x": 1764824400000,
          "y": 0.5100335
        },
        {
          "timeStamp": null,
          "x": 1764910800000,
          "y": -2.748312
        },
        {
          "timeStamp": null,
          "x": 1764997200000,
          "y": 1.978272
        },
        {
          "timeStamp": null,
          "x": 1765083600000,
          "y": 4.096529
        },
        {
          "timeStamp": null,
          "x": 1765170000000,
          "y": -2.502247
        },
        {
          "timeStamp": null,
          "x": 1765256400000,
          "y": -3.232395
        },
        {
          "timeStamp": null,
          "x": 1765342800000,
          "y": 4.295248
        },
        {
          "timeStamp": null,
          "x": 1765429200000,
          "y": 1.570559
        },
        {
          "timeStamp": null,
          "x": 1765515600000,
          "y": 0.5268448
        },
        {
          "timeStamp": null,
          "x": 1765602000000,
          "y": 0.5172229
        },
        {
          "timeStamp": null,
          "x": 1765688400000,
          "y": -1.124018
        },
        {
          "timeStamp": null,
          "x": 1765774800000,
          "y": -4.164467
        },
        {
          "timeStamp": null,
          "x": 1765861200000,
          "y": 1.212278
        },
        {
          "timeStamp": null,
          "x": 1765947600000,
          "y": 4.285673
        },
        {
          "timeStamp": null,
          "x": 1766034000000,
          "y": 7.65923
        },
        {
          "timeStamp": null,
          "x": 1766120400000,
          "y": 10.85998
        }
      ],
      "diameter": 0,
      "fitExponent": 0,
      "header": "IMT Reference Cell #1 - CP20",
      "key": "ExpEnergy_Temp2",
      "lineColor": "#000000",
      "lineType": 17,
      "lineWidth": 1,
      "name": "IMT Reference Cell #1 - CP20",
      "rightAxis": false,
      "units": 30,
      "useBinnedData": false,
      "visible": false,
      "xSeriesHeader": "",
      "xSeriesKey": "",
      "xSeriesName": "",
      "xUnits": "",
      "yAxisIndex": 0,
      "yMax": "NaN",
      "yMin": 0
    },
    {
      "alertMessageMap": null,
      "color": "#000000",
      "customUnit": "Degrees Celsius",
      "dataBinned": [],
      "dataMax": 8.567465,
      "dataMin": -8.889672,
      "dataXy": [
        {
          "timeStamp": null,
          "x": 1764565200000,
          "y": 1.0506
        },
        {
          "timeStamp": null,
          "x": 1764651600000,
          "y": -2.295913
        },
        {
          "timeStamp": null,
          "x": 1764738000000,
          "y": -0.9734917
        },
        {
          "timeStamp": null,
          "x": 1764824400000,
          "y": -2.756979
        },
        {
          "timeStamp": null,
          "x": 1764910800000,
          "y": -8.197377
        },
        {
          "timeStamp": null,
          "x": 1764997200000,
          "y": -2.568674
        },
        {
          "timeStamp": null,
          "x": 1765083600000,
          "y": -1.245018
        },
        {
          "timeStamp": null,
          "x": 1765170000000,
          "y": -6.39297
        },
        {
          "timeStamp": null,
          "x": 1765256400000,
          "y": -8.889672
        },
        {
          "timeStamp": null,
          "x": 1765342800000,
          "y": 0.0997396
        },
        {
          "timeStamp": null,
          "x": 1765429200000,
          "y": -1.177441
        },
        {
          "timeStamp": null,
          "x": 1765515600000,
          "y": -2.278909
        },
        {
          "timeStamp": null,
          "x": 1765602000000,
          "y": -2.693182
        },
        {
          "timeStamp": null,
          "x": 1765688400000,
          "y": -3.400855
        },
        {
          "timeStamp": null,
          "x": 1765774800000,
          "y": -7.592475
        },
        {
          "timeStamp": null,
          "x": 1765861200000,
          "y": -3.962142
        },
        {
          "timeStamp": null,
          "x": 1765947600000,
          "y": 1.453849
        },
        {
          "timeStamp": null,
          "x": 1766034000000,
          "y": 3.536131
        },
        {
          "timeStamp": null,
          "x": 1766120400000,
          "y": 8.567465
        }
      ],
      "diameter": 0,
      "fitExponent": 0,
      "header": "IMT Reference Cell #1 - CP20",
      "key": "ExpEnergy_Temp1_3",
      "lineColor": "#000000",
      "lineType": 17,
      "lineWidth": 1,
      "name": "IMT Reference Cell #1 - CP20",
      "rightAxis": false,
      "units": 30,
      "useBinnedData": false,
      "visible": false,
      "xSeriesHeader": "",
      "xSeriesKey": "",
      "xSeriesName": "",
      "xUnits": "",
      "yAxisIndex": 0,
      "yMax": "NaN",
      "yMin": 0
    },
    {
      "alertMessageMap": null,
      "color": "#000000",
      "customUnit": "Degrees Celsius",
      "dataBinned": [],
      "dataMax": 10.94593,
      "dataMin": -4.479866,
      "dataXy": [
        {
          "timeStamp": null,
          "x": 1764565200000,
          "y": 4.200766
        },
        {
          "timeStamp": null,
          "x": 1764651600000,
          "y": 1.530326
        },
        {
          "timeStamp": null,
          "x": 1764738000000,
          "y": 4.130243
        },
        {
          "timeStamp": null,
          "x": 1764824400000,
          "y": 0.7204857
        },
        {
          "timeStamp": null,
          "x": 1764910800000,
          "y": -3.024409
        },
        {
          "timeStamp": null,
          "x": 1764997200000,
          "y": 1.707787
        },
        {
          "timeStamp": null,
          "x": 1765083600000,
          "y": 4.744427
        },
        {
          "timeStamp": null,
          "x": 1765170000000,
          "y": -2.860734
        },
        {
          "timeStamp": null,
          "x": 1765256400000,
          "y": -2.910157
        },
        {
          "timeStamp": null,
          "x": 1765342800000,
          "y": 4.828128
        },
        {
          "timeStamp": null,
          "x": 1765429200000,
          "y": 1.329151
        },
        {
          "timeStamp": null,
          "x": 1765515600000,
          "y": 0.6409876
        },
        {
          "timeStamp": null,
          "x": 1765602000000,
          "y": 0.9002931
        },
        {
          "timeStamp": null,
          "x": 1765688400000,
          "y": -1.269796
        },
        {
          "timeStamp": null,
          "x": 1765774800000,
          "y": -4.479866
        },
        {
          "timeStamp": null,
          "x": 1765861200000,
          "y": 1.17716
        },
        {
          "timeStamp": null,
          "x": 1765947600000,
          "y": 4.068945
        },
        {
          "timeStamp": null,
          "x": 1766034000000,
          "y": 7.496719
        },
        {
          "timeStamp": null,
          "x": 1766120400000,
          "y": 10.94593
        }
      ],
      "diameter": 0,
      "fitExponent": 0,
      "header": "IMT Reference Cell #2 - CP22",
      "key": "ExpEnergy_Temp2_2",
      "lineColor": "#000000",
      "lineType": 17,
      "lineWidth": 1,
      "name": "IMT Reference Cell #2 - CP22",
      "rightAxis": false,
      "units": 30,
      "useBinnedData": false,
      "visible": false,
      "xSeriesHeader": "",
      "xSeriesKey": "",
      "xSeriesName": "",
      "xUnits": "",
      "yAxisIndex": 0,
      "yMax": "NaN",
      "yMin": 0
    },
    {
      "alertMessageMap": null,
      "color": "#000000",
      "customUnit": "Degrees Celsius",
      "dataBinned": [],
      "dataMax": 9.024237,
      "dataMin": -9.580597,
      "dataXy": [
        {
          "timeStamp": null,
          "x": 1764565200000,
          "y": 0.6725317
        },
        {
          "timeStamp": null,
          "x": 1764651600000,
          "y": -2.28243
        },
        {
          "timeStamp": null,
          "x": 1764738000000,
          "y": -1.196569
        },
        {
          "timeStamp": null,
          "x": 1764824400000,
          "y": -2.560188
        },
        {
          "timeStamp": null,
          "x": 1764910800000,
          "y": -8.480684
        },
        {
          "timeStamp": null,
          "x": 1764997200000,
          "y": -2.226296
        },
        {
          "timeStamp": null,
          "x": 1765083600000,
          "y": -1.355871
        },
        {
          "timeStamp": null,
          "x": 1765170000000,
          "y": -6.548108
        },
        {
          "timeStamp": null,
          "x": 1765256400000,
          "y": -9.580597
        },
        {
          "timeStamp": null,
          "x": 1765342800000,
          "y": 0.1091799
        },
        {
          "timeStamp": null,
          "x": 1765429200000,
          "y": -1.086527
        },
        {
          "timeStamp": null,
          "x": 1765515600000,
          "y": -2.011679
        },
        {
          "timeStamp": null,
          "x": 1765602000000,
          "y": -2.492197
        },
        {
          "timeStamp": null,
          "x": 1765688400000,
          "y": -3.480798
        },
        {
          "timeStamp": null,
          "x": 1765774800000,
          "y": -7.47468
        },
        {
          "timeStamp": null,
          "x": 1765861200000,
          "y": -2.481611
        },
        {
          "timeStamp": null,
          "x": 1765947600000,
          "y": 1.107785
        },
        {
          "timeStamp": null,
          "x": 1766034000000,
          "y": 3.370801
        },
        {
          "timeStamp": null,
          "x": 1766120400000,
          "y": 9.024237
        }
      ],
      "diameter": 0,
      "fitExponent": 0,
      "header": "IMT Reference Cell #2 - CP22",
      "key": "ExpEnergy_Temp1_4",
      "lineColor": "#000000",
      "lineType": 17,
      "lineWidth": 1,
      "name": "IMT Reference Cell #2 - CP22",
      "rightAxis": false,
      "units": 30,
      "useBinnedData": false,
      "visible": false,
      "xSeriesHeader": "",
      "xSeriesKey": "",
      "xSeriesName": "",
      "xUnits": "",
      "yAxisIndex": 0,
      "yMax": "NaN",
      "yMin": 0
    },
    {
      "alertMessageMap": null,
      "color": "#000000",
      "customUnit": "Degrees Celsius",
      "dataBinned": [],
      "dataMax": 10.94599,
      "dataMin": -3.448881,
      "dataXy": [
        {
          "timeStamp": null,
          "x": 1764565200000,
          "y": 5.339272
        },
        {
          "timeStamp": null,
          "x": 1764651600000,
          "y": 1.365029
        },
        {
          "timeStamp": null,
          "x": 1764738000000,
          "y": 4.21953
        },
        {
          "timeStamp": null,
          "x": 1764824400000,
          "y": 0.4922018
        },
        {
          "timeStamp": null,
          "x": 1764910800000,
          "y": -2.161985
        },
        {
          "timeStamp": null,
          "x": 1764997200000,
          "y": 1.64061
        },
        {
          "timeStamp": null,
          "x": 1765083600000,
          "y": 4.47399
        },
        {
          "timeStamp": null,
          "x": 1765170000000,
          "y": -2.216651
        },
        {
          "timeStamp": null,
          "x": 1765256400000,
          "y": -2.222547
        },
        {
          "timeStamp": null,
          "x": 1765342800000,
          "y": 4.494936
        },
        {
          "timeStamp": null,
          "x": 1765429200000,
          "y": 2.164217
        },
        {
          "timeStamp": null,
          "x": 1765515600000,
          "y": 1.31979
        },
        {
          "timeStamp": null,
          "x": 1765602000000,
          "y": 0.6145055
        },
        {
          "timeStamp": null,
          "x": 1765688400000,
          "y": -1.078465
        },
        {
          "timeStamp": null,
          "x": 1765774800000,
          "y": -3.448881
        },
        {
          "timeStamp": null,
          "x": 1765861200000,
          "y": 2.364108
        },
        {
          "timeStamp": null,
          "x": 1765947600000,
          "y": 4.524256
        },
        {
          "timeStamp": null,
          "x": 1766034000000,
          "y": 8.309291
        },
        {
          "timeStamp": null,
          "x": 1766120400000,
          "y": 10.94599
        }
      ],
      "diameter": 0,
      "fitExponent": 0,
      "header": "IMT Reference Cell #3 - CP12",
      "key": "ExpEnergy_Temp2_3",
      "lineColor": "#000000",
      "lineType": 17,
      "lineWidth": 1,
      "name": "IMT Reference Cell #3 - CP12",
      "rightAxis": false,
      "units": 30,
      "useBinnedData": false,
      "visible": false,
      "xSeriesHeader": "",
      "xSeriesKey": "",
      "xSeriesName": "",
      "xUnits": "",
      "yAxisIndex": 0,
      "yMax": "NaN",
      "yMin": 0
    },
    {
      "alertMessageMap": null,
      "color": "#7AA9D3",
      "customUnit": "Kilowatt hours",
      "dataBinned": [],
      "dataMax": 6780.159,
      "dataMin": 257.8119,
      "dataXy": [
        {
          "timeStamp": null,
          "x": 1764565200000,
          "y": 6199.323
        },
        {
          "timeStamp": null,
          "x": 1764651600000,
          "y": 257.8119
        },
        {
          "timeStamp": null,
          "x": 1764738000000,
          "y": 4713.442
        },
        {
          "timeStamp": null,
          "x": 1764824400000,
          "y": 3142.27
        },
        {
          "timeStamp": null,
          "x": 1764910800000,
          "y": 6780.159
        },
        {
          "timeStamp": null,
          "x": 1764997200000,
          "y": 3366.779
        },
        {
          "timeStamp": null,
          "x": 1765083600000,
          "y": 2980.94
        },
        {
          "timeStamp": null,
          "x": 1765170000000,
          "y": 6025.674
        },
        {
          "timeStamp": null,
          "x": 1765256400000,
          "y": 6165.92
        },
        {
          "timeStamp": null,
          "x": 1765342800000,
          "y": 2768.224
        },
        {
          "timeStamp": null,
          "x": 1765429200000,
          "y": 5644.178
        },
        {
          "timeStamp": null,
          "x": 1765515600000,
          "y": 5467.771
        },
        {
          "timeStamp": null,
          "x": 1765602000000,
          "y": 1745.81
        },
        {
          "timeStamp": null,
          "x": 1765688400000,
          "y": 1108
        },
        {
          "timeStamp": null,
          "x": 1765774800000,
          "y": 5898.223
        },
        {
          "timeStamp": null,
          "x": 1765861200000,
          "y": 6119.516
        },
        {
          "timeStamp": null,
          "x": 1765947600000,
          "y": 3387.537
        },
        {
          "timeStamp": null,
          "x": 1766034000000,
          "y": 6242.232
        },
        {
          "timeStamp": null,
          "x": 1766120400000,
          "y": 586.725
        }
      ],
      "diameter": 0,
      "fitExponent": 0,
      "header": "Expected energy",
      "key": "ExpEnergy_Model2",
      "lineColor": "#7AA9D3",
      "lineType": 0,
      "lineWidth": 2,
      "name": "Expected energy",
      "rightAxis": false,
      "units": 11,
      "useBinnedData": false,
      "visible": true,
      "xSeriesHeader": "",
      "xSeriesKey": "",
      "xSeriesName": "",
      "xUnits": "",
      "yAxisIndex": 0,
      "yMax": "NaN",
      "yMin": "NaN"
    },
    {
      "alertMessageMap": null,
      "color": "#74B02E",
      "customUnit": "Kilowatt hours",
      "dataBinned": [],
      "dataMax": 4330.379,
      "dataMin": 3658.211,
      "dataXy": [
        {
          "timeStamp": null,
          "x": 1764565200000,
          "y": 4330.379
        },
        {
          "timeStamp": null,
          "x": 1764651600000,
          "y": 4283.376
        },
        {
          "timeStamp": null,
          "x": 1764738000000,
          "y": 4236.375
        },
        {
          "timeStamp": null,
          "x": 1764824400000,
          "y": 4189.374
        },
        {
          "timeStamp": null,
          "x": 1764910800000,
          "y": 4142.375
        },
        {
          "timeStamp": null,
          "x": 1764997200000,
          "y": 4095.377
        },
        {
          "timeStamp": null,
          "x": 1765083600000,
          "y": 4048.38
        },
        {
          "timeStamp": null,
          "x": 1765170000000,
          "y": 4001.385
        },
        {
          "timeStamp": null,
          "x": 1765256400000,
          "y": 3954.391
        },
        {
          "timeStamp": null,
          "x": 1765342800000,
          "y": 3907.398
        },
        {
          "timeStamp": null,
          "x": 1765429200000,
          "y": 3860.406
        },
        {
          "timeStamp": null,
          "x": 1765515600000,
          "y": 3813.417
        },
        {
          "timeStamp": null,
          "x": 1765602000000,
          "y": 3766.427
        },
        {
          "timeStamp": null,
          "x": 1765688400000,
          "y": 3719.44
        },
        {
          "timeStamp": null,
          "x": 1765774800000,
          "y": 3672.454
        },
        {
          "timeStamp": null,
          "x": 1765861200000,
          "y": 3658.211
        },
        {
          "timeStamp": null,
          "x": 1765947600000,
          "y": 3676.712
        },
        {
          "timeStamp": null,
          "x": 1766034000000,
          "y": 3695.213
        },
        {
          "timeStamp": null,
          "x": 1766120400000,
          "y": 3713.712
        }
      ],
      "diameter": 0,
      "fitExponent": 0,
      "header": "Estimated Production",
      "key": "EstEnergy_SiteEstimate38292",
      "lineColor": "#74B02E",
      "lineType": 0,
      "lineWidth": 2,
      "name": "Estimated Production",
      "rightAxis": false,
      "units": 11,
      "useBinnedData": false,
      "visible": true,
      "xSeriesHeader": "",
      "xSeriesKey": "",
      "xSeriesName": "",
      "xUnits": "",
      "yAxisIndex": 0,
      "yMax": "NaN",
      "yMin": "NaN"
    },
    {
      "alertMessageMap": null,
      "color": "#000000",
      "customUnit": "Kilowatt hours",
      "dataBinned": [],
      "dataMax": 5322,
      "dataMin": 52,
      "dataXy": [
        {
          "timeStamp": null,
          "x": 1764565200000,
          "y": 5322
        },
        {
          "timeStamp": null,
          "x": 1764651600000,
          "y": 108
        },
        {
          "timeStamp": null,
          "x": 1764738000000,
          "y": 84
        },
        {
          "timeStamp": null,
          "x": 1764824400000,
          "y": 68
        },
        {
          "timeStamp": null,
          "x": 1764910800000,
          "y": 210
        },
        {
          "timeStamp": null,
          "x": 1764997200000,
          "y": 68
        },
        {
          "timeStamp": null,
          "x": 1765083600000,
          "y": 84
        },
        {
          "timeStamp": null,
          "x": 1765170000000,
          "y": 310
        },
        {
          "timeStamp": null,
          "x": 1765256400000,
          "y": 324
        },
        {
          "timeStamp": null,
          "x": 1765342800000,
          "y": 204
        },
        {
          "timeStamp": null,
          "x": 1765429200000,
          "y": 2956
        },
        {
          "timeStamp": null,
          "x": 1765515600000,
          "y": 3628
        },
        {
          "timeStamp": null,
          "x": 1765602000000,
          "y": 1272
        },
        {
          "timeStamp": null,
          "x": 1765688400000,
          "y": 52
        },
        {
          "timeStamp": null,
          "x": 1765774800000,
          "y": 764
        },
        {
          "timeStamp": null,
          "x": 1765861200000,
          "y": 2210
        },
        {
          "timeStamp": null,
          "x": 1765947600000,
          "y": 2176
        },
        {
          "timeStamp": null,
          "x": 1766034000000,
          "y": 4950
        },
        {
          "timeStamp": null,
          "x": 1766120400000,
          "y": 398
        }
      ],
      "diameter": 0,
      "fitExponent": 0,
      "header": "Production Meter  (MarkII)",
      "key": "Losses_Inv_PM0",
      "lineColor": "#000000",
      "lineType": 17,
      "lineWidth": 1,
      "name": "Production Meter  (MarkII)",
      "rightAxis": false,
      "units": 11,
      "useBinnedData": false,
      "visible": false,
      "xSeriesHeader": "",
      "xSeriesKey": "",
      "xSeriesName": "",
      "xUnits": "",
      "yAxisIndex": 0,
      "yMax": "NaN",
      "yMin": "NaN"
    },
    {
      "alertMessageMap": null,
      "color": "#000000",
      "customUnit": "Kilowatt hours",
      "dataBinned": [],
      "dataMax": 6780.159,
      "dataMin": 257.8119,
      "dataXy": [
        {
          "timeStamp": null,
          "x": 1764565200000,
          "y": 6199.323
        },
        {
          "timeStamp": null,
          "x": 1764651600000,
          "y": 257.8119
        },
        {
          "timeStamp": null,
          "x": 1764738000000,
          "y": 4713.442
        },
        {
          "timeStamp": null,
          "x": 1764824400000,
          "y": 3142.27
        },
        {
          "timeStamp": null,
          "x": 1764910800000,
          "y": 6780.159
        },
        {
          "timeStamp": null,
          "x": 1764997200000,
          "y": 3366.779
        },
        {
          "timeStamp": null,
          "x": 1765083600000,
          "y": 2980.94
        },
        {
          "timeStamp": null,
          "x": 1765170000000,
          "y": 6025.674
        },
        {
          "timeStamp": null,
          "x": 1765256400000,
          "y": 6165.92
        },
        {
          "timeStamp": null,
          "x": 1765342800000,
          "y": 2768.224
        },
        {
          "timeStamp": null,
          "x": 1765429200000,
          "y": 5644.178
        },
        {
          "timeStamp": null,
          "x": 1765515600000,
          "y": 5467.771
        },
        {
          "timeStamp": null,
          "x": 1765602000000,
          "y": 1745.81
        },
        {
          "timeStamp": null,
          "x": 1765688400000,
          "y": 1108
        },
        {
          "timeStamp": null,
          "x": 1765774800000,
          "y": 5898.223
        },
        {
          "timeStamp": null,
          "x": 1765861200000,
          "y": 6119.516
        },
        {
          "timeStamp": null,
          "x": 1765947600000,
          "y": 3387.537
        },
        {
          "timeStamp": null,
          "x": 1766034000000,
          "y": 6242.232
        },
        {
          "timeStamp": null,
          "x": 1766120400000,
          "y": 586.725
        }
      ],
      "diameter": 0,
      "fitExponent": 0,
      "header": "Production Meter  (MarkII) - PV Model",
      "key": "Losses_Model_PM0",
      "lineColor": "#000000",
      "lineType": 17,
      "lineWidth": 1,
      "name": "Production Meter  (MarkII) - PV Model",
      "rightAxis": false,
      "units": 11,
      "useBinnedData": false,
      "visible": false,
      "xSeriesHeader": "",
      "xSeriesKey": "",
      "xSeriesName": "",
      "xUnits": "",
      "yAxisIndex": 0,
      "yMax": "NaN",
      "yMin": "NaN"
    },
    {
      "alertMessageMap": null,
      "color": "#B2C478",
      "customUnit": "Kilowatt hours",
      "dataBinned": [],
      "dataMax": 380.7878,
      "dataMin": 10.65981,
      "dataXy": [
        {
          "timeStamp": null,
          "x": 1764565200000,
          "y": 347.3647
        },
        {
          "timeStamp": null,
          "x": 1764651600000,
          "y": 10.65981
        },
        {
          "timeStamp": null,
          "x": 1764738000000,
          "y": 258.937
        },
        {
          "timeStamp": null,
          "x": 1764824400000,
          "y": 171.2668
        },
        {
          "timeStamp": null,
          "x": 1764910800000,
          "y": 380.7878
        },
        {
          "timeStamp": null,
          "x": 1764997200000,
          "y": 185.6732
        },
        {
          "timeStamp": null,
          "x": 1765083600000,
          "y": 162.0584
        },
        {
          "timeStamp": null,
          "x": 1765170000000,
          "y": 337.8549
        },
        {
          "timeStamp": null,
          "x": 1765256400000,
          "y": 345.7405
        },
        {
          "timeStamp": null,
          "x": 1765342800000,
          "y": 150.7
        },
        {
          "timeStamp": null,
          "x": 1765429200000,
          "y": 315.9492
        },
        {
          "timeStamp": null,
          "x": 1765515600000,
          "y": 306.0767
        },
        {
          "timeStamp": null,
          "x": 1765602000000,
          "y": 91.80914
        },
        {
          "timeStamp": null,
          "x": 1765688400000,
          "y": 55.5429
        },
        {
          "timeStamp": null,
          "x": 1765774800000,
          "y": 330.8452
        },
        {
          "timeStamp": null,
          "x": 1765861200000,
          "y": 344.8044
        },
        {
          "timeStamp": null,
          "x": 1765947600000,
          "y": 187.6651
        },
        {
          "timeStamp": null,
          "x": 1766034000000,
          "y": 352.0295
        },
        {
          "timeStamp": null,
          "x": 1766120400000,
          "y": 28.81753
        }
      ],
      "diameter": 0,
      "fitExponent": 0,
      "header": "Age loss",
      "key": "Losses_SumAgeLoss1KWHAll",
      "lineColor": "#B2C478",
      "lineType": 0,
      "lineWidth": 1,
      "name": "Age loss",
      "rightAxis": false,
      "units": 11,
      "useBinnedData": false,
      "visible": true,
      "xSeriesHeader": "",
      "xSeriesKey": "",
      "xSeriesName": "",
      "xUnits": "",
      "yAxisIndex": 0,
      "yMax": "NaN",
      "yMin": "NaN"
    },
    {
      "alertMessageMap": null,
      "color": "#5C10FE",
      "customUnit": "Kilowatt hours",
      "dataBinned": [],
      "dataMax": 0,
      "dataMin": 0,
      "dataXy": [
        {
          "timeStamp": null,
          "x": 1764565200000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1764651600000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1764738000000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1764824400000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1764910800000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1764997200000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765083600000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765170000000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765256400000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765342800000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765429200000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765515600000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765602000000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765688400000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765774800000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765861200000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765947600000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1766034000000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1766120400000,
          "y": 0
        }
      ],
      "diameter": 0,
      "fitExponent": 0,
      "header": "Inverter limit loss",
      "key": "Losses_SumInverterLimitLoss1KWHAll",
      "lineColor": "#5C10FE",
      "lineType": 0,
      "lineWidth": 1,
      "name": "Inverter limit loss",
      "rightAxis": false,
      "units": 11,
      "useBinnedData": false,
      "visible": true,
      "xSeriesHeader": "",
      "xSeriesKey": "",
      "xSeriesName": "",
      "xUnits": "",
      "yAxisIndex": 0,
      "yMax": "NaN",
      "yMin": "NaN"
    },
    {
      "alertMessageMap": null,
      "color": "#AC85FE",
      "customUnit": "Kilowatt hours",
      "dataBinned": [],
      "dataMax": 0,
      "dataMin": 0,
      "dataXy": [
        {
          "timeStamp": null,
          "x": 1764565200000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1764651600000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1764738000000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1764824400000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1764910800000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1764997200000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765083600000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765170000000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765256400000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765342800000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765429200000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765515600000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765602000000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765688400000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765774800000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765861200000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765947600000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1766034000000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1766120400000,
          "y": 0
        }
      ],
      "diameter": 0,
      "fitExponent": 0,
      "header": "Clipping loss",
      "key": "Losses_SumClippingLoss1KWHAll",
      "lineColor": "#AC85FE",
      "lineType": 0,
      "lineWidth": 1,
      "name": "Clipping loss",
      "rightAxis": false,
      "units": 11,
      "useBinnedData": false,
      "visible": true,
      "xSeriesHeader": "",
      "xSeriesKey": "",
      "xSeriesName": "",
      "xUnits": "",
      "yAxisIndex": 0,
      "yMax": "NaN",
      "yMin": "NaN"
    },
    {
      "alertMessageMap": null,
      "color": "#4F9867",
      "customUnit": "Kilowatt hours",
      "dataBinned": [],
      "dataMax": 6577.855,
      "dataMin": 0,
      "dataXy": [
        {
          "timeStamp": null,
          "x": 1764565200000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1764651600000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1764738000000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1764824400000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1764910800000,
          "y": 6577.855
        },
        {
          "timeStamp": null,
          "x": 1764997200000,
          "y": 3328.137
        },
        {
          "timeStamp": null,
          "x": 1765083600000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765170000000,
          "y": 5730.099
        },
        {
          "timeStamp": null,
          "x": 1765256400000,
          "y": 5857.722
        },
        {
          "timeStamp": null,
          "x": 1765342800000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765429200000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765515600000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765602000000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765688400000,
          "y": 1083.957
        },
        {
          "timeStamp": null,
          "x": 1765774800000,
          "y": 5136.553
        },
        {
          "timeStamp": null,
          "x": 1765861200000,
          "y": 3925.261
        },
        {
          "timeStamp": null,
          "x": 1765947600000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1766034000000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1766120400000,
          "y": 0
        }
      ],
      "diameter": 0,
      "fitExponent": 0,
      "header": "Snow loss",
      "key": "Losses_SumSnowLoss1KWHAll",
      "lineColor": "#4F9867",
      "lineType": 0,
      "lineWidth": 1,
      "name": "Snow loss",
      "rightAxis": false,
      "units": 11,
      "useBinnedData": false,
      "visible": true,
      "xSeriesHeader": "",
      "xSeriesKey": "",
      "xSeriesName": "",
      "xUnits": "",
      "yAxisIndex": 0,
      "yMax": "NaN",
      "yMin": "NaN"
    },
    {
      "alertMessageMap": null,
      "color": "#095770",
      "customUnit": "Kilowatt hours",
      "dataBinned": [],
      "dataMax": 280.4611,
      "dataMin": 73.55904,
      "dataXy": [
        {
          "timeStamp": null,
          "x": 1764565200000,
          "y": 270.9161
        },
        {
          "timeStamp": null,
          "x": 1764651600000,
          "y": 73.55904
        },
        {
          "timeStamp": null,
          "x": 1764738000000,
          "y": 244.0145
        },
        {
          "timeStamp": null,
          "x": 1764824400000,
          "y": 218.1406
        },
        {
          "timeStamp": null,
          "x": 1764910800000,
          "y": 280.4611
        },
        {
          "timeStamp": null,
          "x": 1764997200000,
          "y": 199.8589
        },
        {
          "timeStamp": null,
          "x": 1765083600000,
          "y": 209.1357
        },
        {
          "timeStamp": null,
          "x": 1765170000000,
          "y": 262.2022
        },
        {
          "timeStamp": null,
          "x": 1765256400000,
          "y": 264.4025
        },
        {
          "timeStamp": null,
          "x": 1765342800000,
          "y": 194.8609
        },
        {
          "timeStamp": null,
          "x": 1765429200000,
          "y": 262.0469
        },
        {
          "timeStamp": null,
          "x": 1765515600000,
          "y": 254.5453
        },
        {
          "timeStamp": null,
          "x": 1765602000000,
          "y": 181.6796
        },
        {
          "timeStamp": null,
          "x": 1765688400000,
          "y": 146.1986
        },
        {
          "timeStamp": null,
          "x": 1765774800000,
          "y": 257.2175
        },
        {
          "timeStamp": null,
          "x": 1765861200000,
          "y": 257.7451
        },
        {
          "timeStamp": null,
          "x": 1765947600000,
          "y": 202.0464
        },
        {
          "timeStamp": null,
          "x": 1766034000000,
          "y": 263.7888
        },
        {
          "timeStamp": null,
          "x": 1766120400000,
          "y": 100.304
        }
      ],
      "diameter": 0,
      "fitExponent": 0,
      "header": "Inverter loss",
      "key": "Losses_SumInverterLoss1KWHAll",
      "lineColor": "#095770",
      "lineType": 0,
      "lineWidth": 1,
      "name": "Inverter loss",
      "rightAxis": false,
      "units": 11,
      "useBinnedData": false,
      "visible": true,
      "xSeriesHeader": "",
      "xSeriesKey": "",
      "xSeriesName": "",
      "xUnits": "",
      "yAxisIndex": 0,
      "yMax": "NaN",
      "yMin": "NaN"
    },
    {
      "alertMessageMap": null,
      "color": "#7CC1A9",
      "customUnit": "Kilowatt hours",
      "dataBinned": [],
      "dataMax": 0,
      "dataMin": 0,
      "dataXy": [
        {
          "timeStamp": null,
          "x": 1764565200000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1764651600000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1764738000000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1764824400000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1764910800000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1764997200000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765083600000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765170000000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765256400000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765342800000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765429200000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765515600000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765602000000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765688400000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765774800000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765861200000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765947600000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1766034000000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1766120400000,
          "y": 0
        }
      ],
      "diameter": 0,
      "fitExponent": 0,
      "header": "Combined downtime loss",
      "key": "Losses_SumDowntimeLoss1KWHAll",
      "lineColor": "#7CC1A9",
      "lineType": 0,
      "lineWidth": 1,
      "name": "Combined downtime loss",
      "rightAxis": false,
      "units": 11,
      "useBinnedData": false,
      "visible": true,
      "xSeriesHeader": "",
      "xSeriesKey": "",
      "xSeriesName": "",
      "xUnits": "",
      "yAxisIndex": 0,
      "yMax": "NaN",
      "yMin": "NaN"
    },
    {
      "alertMessageMap": null,
      "color": "#8A8AFF",
      "customUnit": "Kilowatt hours",
      "dataBinned": [],
      "dataMax": 0,
      "dataMin": 0,
      "dataXy": [
        {
          "timeStamp": null,
          "x": 1764565200000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1764651600000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1764738000000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1764824400000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1764910800000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1764997200000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765083600000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765170000000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765256400000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765342800000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765429200000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765515600000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765602000000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765688400000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765774800000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765861200000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1765947600000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1766034000000,
          "y": 0
        },
        {
          "timeStamp": null,
          "x": 1766120400000,
          "y": 0
        }
      ],
      "diameter": 0,
      "fitExponent": 0,
      "header": "Soiling loss",
      "key": "Losses_SumSoilingLoss1KWHAll",
      "lineColor": "#8A8AFF",
      "lineType": 0,
      "lineWidth": 1,
      "name": "Soiling loss",
      "rightAxis": false,
      "units": 11,
      "useBinnedData": false,
      "visible": true,
      "xSeriesHeader": "",
      "xSeriesKey": "",
      "xSeriesName": "",
      "xUnits": "",
      "yAxisIndex": 0,
      "yMax": "NaN",
      "yMin": "NaN"
    }
  ],
  "showTable": false,
  "start": "2025-12-01T00:00:00",
  "summaryTable": [
    [
      "Production meter net energy",
      "25188",
      "kWh"
    ],
    [
      "Expected energy",
      "78600.5349",
      "kWh"
    ],
    [
      "Estimated Production",
      "74764.80200000003",
      "kWh"
    ],
    [
      "Age loss",
      "4364.58278",
      "kWh"
    ],
    [
      "Inverter limit loss",
      "0",
      "kWh"
    ],
    [
      "Clipping loss",
      "0",
      "kWh"
    ],
    [
      "Snow loss",
      "31639.584",
      "kWh"
    ],
    [
      "Inverter loss",
      "4143.123739999999",
      "kWh"
    ],
    [
      "Combined downtime loss",
      "0",
      "kWh"
    ],
    [
      "Soiling loss",
      "0",
      "kWh"
    ]
  ],
  "timeZone": "US/Eastern",
  "timeZoneExport": 16891,
  "title": "Energy, Expected Energy, Estimated Energy, Insolation Adjustment, Age (AC), Clipping, Curtailment, Inverter, Inverter limit, Shading, Snow, Soiling, Combined downtime",
  "validationError": ""
}
```

