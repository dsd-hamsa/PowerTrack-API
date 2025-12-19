# Endpoint 11

[← Back to Index](../README.md)


### `/api/edit/site/{site_id}`

**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 3  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "tags": {
      "type": "object",
      "properties": {
        "powerDisplays": {
          "type": "array",
          "items": {
            "type": "object"
          }
        },
        "lastChanged": {
          "type": "unknown"
        },
        "key": {
          "type": "string"
        },
        "keywords": {
          "type": "array",
          "items": {
            "type": "object"
          }
        },
        "attributes": {
          "type": "array",
          "items": {
            "type": "object"
          }
        },
        "notes": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        }
      }
    },
    "queryOverrides": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "syncToLocus": {
      "type": "boolean"
    },
    "installDate": {
      "type": "string"
    },
    "language": {
      "type": "string"
    },
    "monitoringContractAccessFlags": {
      "type": "integer"
    },
    "tz": {
      "type": "string"
    },
    "allowEmail": {
      "type": "boolean"
    },
    "notInServiceInstruct": {
      "type": "string"
    },
    "communityExclude": {
      "type": "boolean"
    },
    "capacityDcUnit": {
      "type": "integer"
    },
    "chartDashboard": {
      "type": "object",
      "properties": {
        "charts": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {}
          }
        }
      }
    },
    "nominalTemperature": {
      "type": "integer"
    },
    "siteDashboardKey": {
      "type": "string"
    },
    "purl": {
      "type": "string"
    },
    "ratedPowerUnit": {
      "type": "integer"
    },
    "degradeStart": {
      "type": "string"
    },
    "monitoringContractCustomBanner": {
      "type": "boolean"
    },
    "tuneUpCompletedDate": {
      "type": "unknown"
    },
    "productionGuaranteeKey": {
      "type": "string"
    },
    "tuneUpValidatedUser": {
      "type": "string"
    },
    "energyRatioMinAzimuth": {
      "type": "integer"
    },
    "cellModemContractIsManual": {
      "type": "boolean"
    },
    "minSun": {
      "type": "integer"
    },
    "energyRatioMaxAzimuth": {
      "type": "integer"
    },
    "energyRatioMinSun": {
      "type": "integer"
    },
    "customQueryKey": {
      "type": "string"
    },
    "exportDataConfig": {
      "type": "string"
    },
    "contactName": {
      "type": "string"
    },
    "notInService": {
      "type": "boolean"
    },
    "runRulesDaily": {
      "type": "boolean"
    },
    "approvalId": {
      "type": "integer"
    },
    "actualCommissioningDate": {
      "type": "unknown"
    },
    "estimatedLosses": {
      "type": "object",
      "properties": {
        "downtime": {
          "type": "string"
        },
        "soiling": {
          "type": "string"
        },
        "temperature": {
          "type": "string"
        },
        "irradiance": {
          "type": "string"
        },
        "shading": {
          "type": "string"
        },
        "clipping": {
          "type": "string"
        },
        "snow": {
          "type": "string"
        }
      }
    },
    "ppaRateKey": {
      "type": "string"
    },
    "cellModemContractWarnDate": {
      "type": "string"
    },
    "yearlyAgeMode": {
      "type": "integer"
    },
    "monitoringContractAccessNote": {
      "type": "string"
    },
    "dc": {
      "type": "boolean"
    },
    "isMigrated": {
      "type": "boolean"
    },
    "curtailmentCtrlMaxError": {
      "type": "integer"
    },
    "maxIa": {
      "type": "integer"
    },
    "name": {
      "type": "string"
    },
    "timelineReportKey": {
      "type": "string"
    },
    "capacityDc": {
      "type": "number"
    },
    "tuneUpCompletedUser": {
      "type": "string"
    },
    "contactEmail": {
      "type": "string"
    },
    "siteType": {
      "type": "integer"
    },
    "isMonitored": {
      "type": "boolean"
    },
    "cellModemContractEndDate": {
      "type": "string"
    },
    "mode": {
      "type": "integer"
    },
    "description": {
      "type": "string"
    },
    "systemSizeCurrent": {
      "type": "integer"
    },
    "isPaid": {
      "type": "boolean"
    },
    "compareRadius": {
      "type": "integer"
    },
    "monitoringContractWarnDate": {
      "type": "string"
    },
    "contactKind": {
      "type": "integer"
    },
    "installerKey": {
      "type": "string"
    },
    "statusDetails": {
      "type": "string"
    },
    "approvedOn": {
      "type": "string"
    },
    "ts": {
      "type": "string"
    },
    "advancedSiteConfigurationDocumentReceived": {
      "type": "boolean"
    },
    "showGuide": {
      "type": "boolean"
    },
    "adminStatus": {
      "type": "string"
    },
    "estimatedCommissioningDate": {
      "type": "string"
    },
    "isFractional": {
      "type": "boolean"
    },
    "cellModemContractAccessNote": {
      "type": "string"
    },
    "waitForKey": {
      "type": "string"
    },
    "minSunUp": {
      "type": "integer"
    },
    "preferredWSForEstimatedInsolation": {
      "type": "integer"
    },
    "capacityAc": {
      "type": "integer"
    },
    "contactPhone": {
      "type": "string"
    },
    "locusId": {
      "type": "unknown"
    },
    "monthlyOutput": {
      "type": "object",
      "properties": {
        "dec": {
          "type": "integer"
        },
        "feb": {
          "type": "integer"
        },
        "jan": {
          "type": "integer"
        },
        "sep": {
          "type": "integer"
        },
        "mar": {
          "type": "integer"
        },
        "nov": {
          "type": "integer"
        },
        "jun": {
          "type": "integer"
        },
        "apr": {
          "type": "integer"
        },
        "jul": {
          "type": "integer"
        },
        "oct": {
          "type": "integer"
        },
        "may": {
          "type": "integer"
        },
        "aug": {
          "type": "integer"
        }
      }
    },
    "requiresPubIp": {
      "type": "boolean"
    },
    "newsDashboardKey": {
      "type": "string"
    },
    "capacityAcUnit": {
      "type": "integer"
    },
    "salesforceSystemId": {
      "type": "string"
    },
    "monitoringContractTerminateDate": {
      "type": "string"
    },
    "yearly": {
      "type": "integer"
    },
    "cecRating": {
      "type": "integer"
    },
    "energyRatioMinSunElevation": {
      "type": "integer"
    },
    "tuneUpStarted": {
      "type": "boolean"
    },
    "overviewChart1": {
      "type": "string"
    },
    "avgCellTemp": {
      "type": "integer"
    },
    "energyCapacity": {
      "type": "integer"
    },
    "maxTemperature": {
      "type": "integer"
    },
    "minMonthlyPerformanceRatio": {
      "type": "object",
      "properties": {
        "dec": {
          "type": "integer"
        },
        "feb": {
          "type": "integer"
        },
        "jan": {
          "type": "integer"
        },
        "sep": {
          "type": "integer"
        },
        "mar": {
          "type": "integer"
        },
        "nov": {
          "type": "integer"
        },
        "jun": {
          "type": "integer"
        },
        "apr": {
          "type": "integer"
        },
        "jul": {
          "type": "integer"
        },
        "oct": {
          "type": "integer"
        },
        "may": {
          "type": "integer"
        },
        "aug": {
          "type": "integer"
        }
      }
    },
    "yearTotal": {
      "type": "string"
    },
    "energyRatioMaxIa": {
      "type": "integer"
    },
    "minTemperature": {
      "type": "integer"
    },
    "location": {
      "type": "object",
      "properties": {
        "address2": {
          "type": "string"
        },
        "elevationUnit": {
          "type": "integer"
        },
        "elevation": {
          "type": "integer"
        },
        "address1": {
          "type": "string"
        },
        "city": {
          "type": "string"
        },
        "state": {
          "type": "string"
        },
        "postalCode": {
          "type": "string"
        },
        "country": {
          "type": "string"
        },
        "longitude": {
          "type": "number"
        },
        "timeZone": {
          "type": "integer"
        },
        "latitude": {
          "type": "number"
        }
      }
    },
    "newNote": {
      "type": "string"
    },
    "weatherStationKey": {
      "type": "string"
    },
    "dailyData": {
      "type": "boolean"
    },
    "cellModemContractCustomBanner": {
      "type": "boolean"
    },
    "url": {
      "type": "string"
    },
    "minYearlyPerformanceRatio": {
      "type": "integer"
    },
    "allowedChartTypes": {
      "type": "array",
      "items": {
        "type": "integer"
      }
    },
    "mapTargetKey": {
      "type": "string"
    },
    "monitoringContractEndDate": {
      "type": "string"
    },
    "powerThreshold": {
      "type": "integer"
    },
    "siteCommissioningComplete": {
      "type": "boolean"
    },
    "cellModemContractTerminateDate": {
      "type": "string"
    },
    "assetManagement": {
      "type": "boolean"
    },
    "tuneUpPurchasedDate": {
      "type": "unknown"
    },
    "degrade": {
      "type": "boolean"
    },
    "taskId": {
      "type": "unknown"
    },
    "dashboards": {
      "type": "array",
      "items": {
        "type": "object"
      }
    },
    "maxIrradiance": {
      "type": "integer"
    },
    "availabilityIrradianceSource": {
      "type": "integer"
    },
    "readyForValidation": {
      "type": "boolean"
    },
    "ratedPower": {
      "type": "integer"
    },
    "showEnvironment": {
      "type": "boolean"
    },
    "tuneUpCompleted": {
      "type": "boolean"
    },
    "testMode": {
      "type": "boolean"
    },
    "utilityRateKey": {
      "type": "string"
    },
    "approvedByKey": {
      "type": "string"
    },
    "validDataDate": {
      "type": "string"
    },
    "tagLine": {
      "type": "string"
    },
    "key": {
      "type": "string"
    },
    "transpositionMethod": {
      "type": "integer"
    },
    "isCertified": {
      "type": "boolean"
    },
    "useFilterAverageWeather": {
      "type": "boolean"
    },
    "isPpaInvoice": {
      "type": "boolean"
    },
    "isApproved": {
      "type": "boolean"
    },
    "tuneUpStartedDate": {
      "type": "unknown"
    },
    "cellModemContractStartDate": {
      "type": "string"
    },
    "energyCapacityUnit": {
      "type": "integer"
    },
    "tuneUpStartedUser": {
      "type": "string"
    },
    "certifiedOn": {
      "type": "unknown"
    },
    "useGross": {
      "type": "boolean"
    },
    "contactMobile": {
      "type": "string"
    },
    "excludeCommunicationOutages": {
      "type": "boolean"
    },
    "readOnly": {
      "type": "boolean"
    },
    "parentKey": {
      "type": "string"
    },
    "account": {
      "type": "string"
    },
    "aeStatus": {
      "type": "string"
    },
    "turnOnDate": {
      "type": "string"
    },
    "monitoringContractIsManual": {
      "type": "boolean"
    },
    "availabilityTime": {
      "type": "integer"
    },
    "absoluteSoil": {
      "type": "boolean"
    },
    "operations": {
      "type": "boolean"
    },
    "modelingComplete": {
      "type": "boolean"
    },
    "useDegradeStart": {
      "type": "boolean"
    },
    "yearlyDegrade": {
      "type": "number"
    },
    "performanceRatioMap": {
      "type": "string"
    },
    "cellModemContractAccessFlags": {
      "type": "integer"
    },
    "certifiedByKey": {
      "type": "string"
    },
    "tuneUpPurchasedUser": {
      "type": "string"
    },
    "defaultQuery": {
      "type": "integer"
    },
    "netSuiteFields": {
      "type": "object",
      "properties": {
        "netSuiteSiteOwnerId": {
          "type": "unknown"
        },
        "netSuiteId": {
          "type": "unknown"
        },
        "netSuiteContractedPartyId": {
          "type": "unknown"
        },
        "netSuiteSpecifierId": {
          "type": "unknown"
        },
        "netSuiteCustomerId": {
          "type": "unknown"
        },
        "netSuiteEpcId": {
          "type": "unknown"
        },
        "netSuiteOperationsAndMaintenanceId": {
          "type": "unknown"
        }
      }
    },
    "ruleToolPreferencesKey": {
      "type": "string"
    },
    "energyRatioUseGross": {
      "type": "boolean"
    },
    "links": {
      "type": "array",
      "items": {
        "type": "object"
      }
    },
    "tuneUpPurchased": {
      "type": "boolean"
    },
    "advancedSiteConfiguration": {
      "type": "boolean"
    },
    "customerStatus": {
      "type": "string"
    },
    "minIrradiance": {
      "type": "integer"
    },
    "isAgencyReporting": {
      "type": "boolean"
    },
    "modelName": {
      "type": "string"
    },
    "paymentStatus": {
      "type": "integer"
    },
    "siteReports": {
      "type": "array",
      "items": {
        "type": "object"
      }
    },
    "agencyReportingRateKey": {
      "type": "string"
    },
    "yearTotalUnits": {
      "type": "string"
    },
    "monitoringContractStartDate": {
      "type": "string"
    },
    "overviewChart2": {
      "type": "string"
    },
    "availabilityCondition": {
      "type": "integer"
    },
    "tuneUpValidatedDate": {
      "type": "unknown"
    },
    "tuneUpValidated": {
      "type": "boolean"
    }
  }
}
```

#### Example

**Request:**

```http
GET /api/edit/site/S38292
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "absoluteSoil": false,
  "account": "",
  "actualCommissioningDate": null,
  "adminStatus": "",
  "advancedSiteConfiguration": false,
  "advancedSiteConfigurationDocumentReceived": false,
  "aeStatus": "",
  "agencyReportingRateKey": "F38574",
  "allowEmail": true,
  "allowedChartTypes": [
    1,
    76,
    88,
    263,
    202,
    77,
    53,
    51,
    24,
    204,
    201,
    199,
    5,
    176,
    248,
    61,
    249,
    171,
    8,
    259,
    7,
    246,
    252,
    73,
    198,
    196,
    167,
    226,
    203,
    120,
    122,
    121,
    22,
    185,
    233,
    100,
    3,
    30,
    57,
    23,
    200,
    2,
    6,
    114,
    80,
    81,
    68,
    72,
    82,
    58,
    69,
    241,
    244,
    242,
    243,
    78,
    271,
    228,
    28,
    54,
    4,
    255,
    24,
    234,
    101,
    176,
    249,
    259,
    167,
    207,
    11,
    185,
    233,
    57,
    23,
    200,
    64,
    15,
    38,
    79,
    123,
    250,
    241,
    244,
    242,
    243,
    156,
    219,
    220,
    218,
    217,
    229,
    59,
    78,
    227,
    228,
    28,
    54,
    4,
    257,
    187,
    21,
    186,
    245,
    258,
    240,
    112,
    19,
    20,
    271,
    271,
    190,
    213,
    215,
    214,
    216,
    193,
    192,
    27,
    189,
    222,
    221,
    230,
    223,
    224,
    26,
    50,
    154,
    183,
    195,
    197,
    94,
    98,
    102,
    93,
    97,
    89,
    119,
    99,
    110,
    118,
    105,
    115,
    159,
    160,
    116,
    117,
    106,
    107,
    109,
    104,
    113,
    111,
    108,
    168,
    95,
    96,
    161,
    162,
    164,
    166,
    165,
    62,
    47,
    75,
    46,
    49,
    48,
    44,
    90,
    91,
    173,
    45,
    43,
    60,
    67,
    150,
    63,
    169,
    170,
    65,
    254,
    125,
    269,
    261,
    172,
    268,
    85,
    86,
    87,
    152
  ],
  "approvalId": 8,
  "approvedByKey": "U57916",
  "approvedOn": "2025-12-12T17:53:01Z",
  "assetManagement": false,
  "availabilityCondition": 3,
  "availabilityIrradianceSource": 1,
  "availabilityTime": 1,
  "avgCellTemp": 45,
  "capacityAc": 0,
  "capacityAcUnit": 10,
  "capacityDc": 2.623,
  "capacityDcUnit": 12,
  "cecRating": 0,
  "cellModemContractAccessFlags": 0,
  "cellModemContractAccessNote": "",
  "cellModemContractCustomBanner": false,
  "cellModemContractEndDate": "2027-06-30",
  "cellModemContractIsManual": false,
  "cellModemContractStartDate": "2016-10-17",
  "cellModemContractTerminateDate": "2028-06-29",
  "cellModemContractWarnDate": "2027-05-01",
  "certifiedByKey": "U12549",
  "certifiedOn": null,
  "chartDashboard": {
    "charts": [
      {
        "canView": false,
        "chartKey": "",
        "chartName": "",
        "chartRank": "",
        "io": ""
      }
    ]
  },
  "communityExclude": true,
  "compareRadius": 10,
  "contactEmail": "",
  "contactKind": 1,
  "contactMobile": "",
  "contactName": "",
  "contactPhone": "",
  "curtailmentCtrlMaxError": 10,
  "customQueryKey": "",
  "customerStatus": "",
  "dailyData": false,
  "dashboards": [
    {
      "key": "F119023"
    },
    {
      "key": "F119050"
    }
  ],
  "dc": false,
  "defaultQuery": 15,
  "degrade": false,
  "degradeStart": "2017-07-01",
  "description": "",
  "energyCapacity": 0,
  "energyCapacityUnit": 11,
  "energyRatioMaxAzimuth": 0,
  "energyRatioMaxIa": 0,
  "energyRatioMinAzimuth": 0,
  "energyRatioMinSun": 0,
  "energyRatioMinSunElevation": 0,
  "energyRatioUseGross": false,
  "estimatedCommissioningDate": "2017-02-03",
  "estimatedLosses": {
    "clipping": "0",
    "downtime": "0",
    "irradiance": "0",
    "shading": "0",
    "snow": "0",
    "soiling": "0",
    "temperature": "0"
  },
  "excludeCommunicationOutages": false,
  "exportDataConfig": "",
  "installDate": "2016-07-25",
  "installerKey": "",
  "isAgencyReporting": true,
  "isApproved": true,
  "isCertified": true,
  "isFractional": false,
  "isMigrated": false,
  "isMonitored": true,
  "isPaid": false,
  "isPpaInvoice": false,
  "key": "S38292",
  "language": "en-US",
  "links": [
    {
      "key": "http://www.alsoenergy.com/preview/PowerTrack/PowerDisplay.aspx?Dyn=*Solar;*Environment;*Media;;Kiosk&sid=38292&tag=772835&Lang=en-US",
      "kind": "external",
      "name": "Smith & Wesson Kiosk"
    }
  ],
  "location": {
    "address1": "2100 Roosevelt Ave.",
    "address2": "",
    "city": "Springfield",
    "country": "United States",
    "elevation": 70,
    "elevationUnit": 47,
    "latitude": 42.137941,
    "longitude": -72.5508695,
    "postalCode": "01101",
    "state": "MA",
    "timeZone": 16891
  },
  "locusId": null,
  "mapTargetKey": "",
  "maxIa": 55,
  "maxIrradiance": 0,
  "maxTemperature": 0,
  "minIrradiance": 0,
  "minMonthlyPerformanceRatio": {
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
  "minSun": 300,
  "minSunUp": 100,
  "minTemperature": 0,
  "minYearlyPerformanceRatio": 0,
  "mode": 0,
  "modelName": "Site Performance Estimate",
  "modelingComplete": true,
  "monitoringContractAccessFlags": 0,
  "monitoringContractAccessNote": "",
  "monitoringContractCustomBanner": false,
  "monitoringContractEndDate": "2027-06-30",
  "monitoringContractIsManual": false,
  "monitoringContractStartDate": "2016-10-17",
  "monitoringContractTerminateDate": "2028-06-29",
  "monitoringContractWarnDate": "2027-05-01",
  "monthlyOutput": {
    "apr": 318669,
    "aug": 355647,
    "dec": 118021,
    "feb": 165812,
    "jan": 136633,
    "jul": 386314,
    "jun": 382409,
    "mar": 246709,
    "may": 366919,
    "nov": 159754,
    "oct": 223249,
    "sep": 296906
  },
  "name": "Smith & Wesson - MA-21-C273",
  "netSuiteFields": {
    "netSuiteContractedPartyId": null,
    "netSuiteCustomerId": null,
    "netSuiteEpcId": null,
    "netSuiteId": null,
    "netSuiteOperationsAndMaintenanceId": null,
    "netSuiteSiteOwnerId": null,
    "netSuiteSpecifierId": null
  },
  "newNote": "",
  "newsDashboardKey": "",
  "nominalTemperature": 0,
  "notInService": false,
  "notInServiceInstruct": "",
  "operations": false,
  "overviewChart1": "255",
  "overviewChart2": "0",
  "parentKey": "C16300",
  "paymentStatus": 3145728,
  "performanceRatioMap": "",
  "powerThreshold": 0,
  "ppaRateKey": "F38573",
  "preferredWSForEstimatedInsolation": 0,
  "productionGuaranteeKey": "",
  "purl": "",
  "queryOverrides": [],
  "ratedPower": 0,
  "ratedPowerUnit": 10,
  "readOnly": false,
  "readyForValidation": true,
  "requiresPubIp": true,
  "ruleToolPreferencesKey": "",
  "runRulesDaily": true,
  "salesforceSystemId": "S-0024959",
  "showEnvironment": true,
  "showGuide": false,
  "siteCommissioningComplete": true,
  "siteDashboardKey": "",
  "siteReports": [
    {
      "isEnabled": false,
      "key": "RC3004"
    },
    {
      "isEnabled": true,
      "key": "RC4940"
    }
  ],
  "siteType": 0,
  "statusDetails": "",
  "syncToLocus": false,
  "systemSizeCurrent": 2,
  "tagLine": "",
  "tags": {
    "attributes": [
      {
        "key": "T1264875",
        "name": "AYLN#",
        "parentKey": "S38292",
        "template": -1,
        "type": 1,
        "value": "273"
      },
      {
        "key": "T1264877",
        "name": "Operations_Manager",
        "parentKey": "S38292",
        "template": -1,
        "type": 1,
        "value": "Nick Allgood"
      },
      {
        "key": "T1433955",
        "name": "ProjectID",
        "parentKey": "S38292",
        "template": -1,
        "type": 1,
        "value": "SX0MA0020"
      },
      {
        "key": "T1433956",
        "name": "Legal_Entity",
        "parentKey": "S38292",
        "template": -1,
        "type": 1,
        "value": "Constellation Solar Massachusetts, LLC"
      },
      {
        "key": "T1433957",
        "name": "Region",
        "parentKey": "S38292",
        "template": -1,
        "type": 1,
        "value": "Northeast"
      },
      {
        "key": "T1433958",
        "name": "Meteo",
        "parentKey": "S38292",
        "template": -1,
        "type": 1,
        "value": "HARTFORD BRADLEY INTL AP, CT"
      },
      {
        "key": "T1433961",
        "name": "TMY_Classification",
        "parentKey": "S38292",
        "template": -1,
        "type": 1,
        "value": "TMY3"
      },
      {
        "key": "T1433963",
        "name": "Utility_Connect",
        "parentKey": "S38292",
        "template": -1,
        "type": 1,
        "value": "Eversource Energy Company"
      },
      {
        "key": "T1433964",
        "name": "Module_Type_1_Technology",
        "parentKey": "S38292",
        "template": -1,
        "type": 1,
        "value": "Monocrystalline"
      },
      {
        "key": "T1433965",
        "name": "Module_Type_1",
        "parentKey": "S38292",
        "template": -1,
        "type": 1,
        "value": "SolarWorld"
      },
      {
        "key": "T1433966",
        "name": "Inverter_Type_1_Technology",
        "parentKey": "S38292",
        "template": -1,
        "type": 1,
        "value": "String"
      },
      {
        "key": "T1433968",
        "name": "Inverter_Type_1",
        "parentKey": "S38292",
        "template": -1,
        "type": 1,
        "value": "Chint"
      },
      {
        "key": "T1433969",
        "name": "Mounting_Type_1",
        "parentKey": "S38292",
        "template": -1,
        "type": 1,
        "value": "Parking"
      },
      {
        "key": "T1433970",
        "name": "Retail_Wholesale",
        "parentKey": "S38292",
        "template": -1,
        "type": 1,
        "value": "Retail"
      },
      {
        "key": "T1433971",
        "name": "Commercial_Industrial",
        "parentKey": "S38292",
        "template": -1,
        "type": 1,
        "value": "Commercial"
      },
      {
        "key": "T1433972",
        "name": "EIA_826_Reporting",
        "parentKey": "S38292",
        "template": -1,
        "type": 1,
        "value": "No"
      },
      {
        "key": "T1433973",
        "name": "EIA_923_Reporting",
        "parentKey": "S38292",
        "template": -1,
        "type": 1,
        "value": "Yes"
      },
      {
        "key": "T1433974",
        "name": "COD",
        "parentKey": "S38292",
        "template": -1,
        "type": 43,
        "value": "2017-06-30"
      },
      {
        "key": "T1433975",
        "name": "Tracking_1",
        "parentKey": "S38292",
        "template": -1,
        "type": 1,
        "value": "Fixed"
      },
      {
        "key": "T1495038",
        "name": "EIA_860_Reporting",
        "parentKey": "S38292",
        "template": -1,
        "type": 1,
        "value": "Yes"
      },
      {
        "key": "T1563689",
        "name": "EIA_861_Reporting",
        "parentKey": "S38292",
        "template": -1,
        "type": 1,
        "value": "No"
      },
      {
        "key": "T1807836",
        "name": "Operator",
        "parentKey": "S38292",
        "template": -1,
        "type": 1,
        "value": "General Electric"
      }
    ],
    "key": "{\"ancestorKey\":\"S38292\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"powerdisplay\"]}",
    "keywords": [
      {
        "key": "T8577494",
        "name": "Sunbeam",
        "parentKey": "S38292"
      }
    ],
    "lastChanged": null,
    "notes": [],
    "powerDisplays": [
      {
        "chart": "15",
        "customUrls": [
          {
            "purl": "",
            "purlRoot": "/go/solar"
          }
        ],
        "displayInSiteOverview": false,
        "environmentalComparisons": {
          "carbon": false,
          "cars": false,
          "gas": true,
          "homes": false,
          "methane": true,
          "oil": false,
          "televisions": false,
          "trees": true,
          "water": true
        },
        "isPublic": true,
        "key": "T772835",
        "mainLogo": {
          "contentType": "",
          "key": "",
          "lastChanged": null,
          "name": "",
          "uri": "/Content/images/kiosk/solar_sun.png"
        },
        "name": "Smith & Wesson - MA-21-C273",
        "nonStandardEnvironmentalComparisons": {},
        "overviewChart": "15",
        "title": "",
        "titleIsSiteName": true,
        "ts": null,
        "url": "https://pubdisplay.alsoenergy.com/kiosk/18014398509520276?dashkey=2a566973506447764a41773d3d&tag=772835"
      }
    ]
  },
  "taskId": null,
  "testMode": false,
  "timelineReportKey": "",
  "transpositionMethod": 0,
  "ts": "2025-12-12T17:53:01Z",
  "tuneUpCompleted": false,
  "tuneUpCompletedDate": null,
  "tuneUpCompletedUser": "",
  "tuneUpPurchased": false,
  "tuneUpPurchasedDate": null,
  "tuneUpPurchasedUser": "",
  "tuneUpStarted": false,
  "tuneUpStartedDate": null,
  "tuneUpStartedUser": "",
  "tuneUpValidated": false,
  "tuneUpValidatedDate": null,
  "tuneUpValidatedUser": "",
  "turnOnDate": "2017-01-10",
  "tz": "US/Eastern",
  "url": "",
  "useDegradeStart": true,
  "useFilterAverageWeather": false,
  "useGross": false,
  "utilityRateKey": "",
  "validDataDate": "2017-01-10T19:53:00Z",
  "waitForKey": "",
  "weatherStationKey": "",
  "yearTotal": "3.16",
  "yearTotalUnits": "GWh",
  "yearly": 0,
  "yearlyAgeMode": 0,
  "yearlyDegrade": 0.5
}
```

