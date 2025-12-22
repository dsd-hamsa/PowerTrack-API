# /api/edit/site/S68143

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [Response Structure](#response-structure)
- [Example](#example)

## Response Structure

```json
{
  "type": "object",
  "properties": {
    "absoluteSoil": {
      "type": "boolean"
    },
    "account": {
      "type": "string"
    },
    "actualCommissioningDate": {
      "type": "object"
    },
    "adminStatus": {
      "type": "string"
    },
    "advancedSiteConfiguration": {
      "type": "boolean"
    },
    "advancedSiteConfigurationDocumentReceived": {
      "type": "boolean"
    },
    "aeStatus": {
      "type": "string"
    },
    "agencyReportingRateKey": {
      "type": "string"
    },
    "allowEmail": {
      "type": "boolean"
    },
    "allowedChartTypes": {
      "type": "number"
    },
    "approvalId": {
      "type": "number"
    },
    "approvedByKey": {
      "type": "string"
    },
    "approvedOn": {
      "type": "object"
    },
    "assetManagement": {
      "type": "boolean"
    },
    "availabilityCondition": {
      "type": "number"
    },
    "availabilityIrradianceSource": {
      "type": "number"
    },
    "availabilityTime": {
      "type": "number"
    },
    "avgCellTemp": {
      "type": "number"
    },
    "capacityAc": {
      "type": "number"
    },
    "capacityAcUnit": {
      "type": "number"
    },
    "capacityDc": {
      "type": "number"
    },
    "capacityDcUnit": {
      "type": "number"
    },
    "cecRating": {
      "type": "number"
    },
    "cellModemContractAccessFlags": {
      "type": "number"
    },
    "cellModemContractAccessNote": {
      "type": "string"
    },
    "cellModemContractCustomBanner": {
      "type": "boolean"
    },
    "cellModemContractEndDate": {
      "type": "object"
    },
    "cellModemContractIsManual": {
      "type": "boolean"
    },
    "cellModemContractStartDate": {
      "type": "object"
    },
    "cellModemContractTerminateDate": {
      "type": "object"
    },
    "cellModemContractWarnDate": {
      "type": "object"
    },
    "certifiedByKey": {
      "type": "string"
    },
    "certifiedOn": {
      "type": "object"
    },
    "chartDashboard": {
      "type": "object",
      "properties": {
        "charts": {
          "type": "object",
          "properties": {
            "canView": {
              "type": "boolean"
            },
            "chartKey": {
              "type": "string"
            },
            "chartName": {
              "type": "string"
            },
            "chartRank": {
              "type": "string"
            },
            "io": {
              "type": "string"
            }
          }
        }
      }
    },
    "communityExclude": {
      "type": "boolean"
    },
    "compareRadius": {
      "type": "number"
    },
    "contactEmail": {
      "type": "string"
    },
    "contactKind": {
      "type": "number"
    },
    "contactMobile": {
      "type": "string"
    },
    "contactName": {
      "type": "string"
    },
    "contactPhone": {
      "type": "string"
    },
    "curtailmentCtrlMaxError": {
      "type": "number"
    },
    "customQueryKey": {
      "type": "string"
    },
    "customerStatus": {
      "type": "string"
    },
    "dailyData": {
      "type": "boolean"
    },
    "dashboards": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "dc": {
      "type": "boolean"
    },
    "defaultQuery": {
      "type": "number"
    },
    "degrade": {
      "type": "boolean"
    },
    "degradeStart": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "energyCapacity": {
      "type": "number"
    },
    "energyCapacityUnit": {
      "type": "number"
    },
    "energyRatioMaxAzimuth": {
      "type": "number"
    },
    "energyRatioMaxIa": {
      "type": "number"
    },
    "energyRatioMinAzimuth": {
      "type": "number"
    },
    "energyRatioMinSun": {
      "type": "number"
    },
    "energyRatioMinSunElevation": {
      "type": "number"
    },
    "energyRatioUseGross": {
      "type": "boolean"
    },
    "estimatedCommissioningDate": {
      "type": "object"
    },
    "estimatedLosses": {
      "type": "object",
      "properties": {
        "clipping": {
          "type": "string"
        },
        "downtime": {
          "type": "string"
        },
        "irradiance": {
          "type": "string"
        },
        "shading": {
          "type": "string"
        },
        "snow": {
          "type": "string"
        },
        "soiling": {
          "type": "string"
        },
        "temperature": {
          "type": "string"
        }
      }
    },
    "excludeCommunicationOutages": {
      "type": "boolean"
    },
    "exportDataConfig": {
      "type": "string"
    },
    "installDate": {
      "type": "string"
    },
    "installerKey": {
      "type": "string"
    },
    "isAgencyReporting": {
      "type": "boolean"
    },
    "isApproved": {
      "type": "boolean"
    },
    "isCertified": {
      "type": "boolean"
    },
    "isFractional": {
      "type": "boolean"
    },
    "isMigrated": {
      "type": "boolean"
    },
    "isMonitored": {
      "type": "boolean"
    },
    "isPaid": {
      "type": "boolean"
    },
    "isPpaInvoice": {
      "type": "boolean"
    },
    "key": {
      "type": "string"
    },
    "language": {
      "type": "string"
    },
    "links": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "location": {
      "type": "object",
      "properties": {
        "address1": {
          "type": "string"
        },
        "address2": {
          "type": "string"
        },
        "city": {
          "type": "string"
        },
        "country": {
          "type": "string"
        },
        "elevation": {
          "type": "number"
        },
        "elevationUnit": {
          "type": "number"
        },
        "latitude": {
          "type": "number"
        },
        "longitude": {
          "type": "number"
        },
        "postalCode": {
          "type": "string"
        },
        "state": {
          "type": "string"
        },
        "timeZone": {
          "type": "number"
        }
      }
    },
    "locusId": {
      "type": "object"
    },
    "mapTargetKey": {
      "type": "string"
    },
    "maxIa": {
      "type": "number"
    },
    "maxIrradiance": {
      "type": "number"
    },
    "maxTemperature": {
      "type": "number"
    },
    "minIrradiance": {
      "type": "number"
    },
    "minMonthlyPerformanceRatio": {
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
    "minSun": {
      "type": "number"
    },
    "minSunUp": {
      "type": "number"
    },
    "minTemperature": {
      "type": "number"
    },
    "minYearlyPerformanceRatio": {
      "type": "number"
    },
    "mode": {
      "type": "number"
    },
    "modelName": {
      "type": "string"
    },
    "modelingComplete": {
      "type": "boolean"
    },
    "monitoringContractAccessFlags": {
      "type": "number"
    },
    "monitoringContractAccessNote": {
      "type": "string"
    },
    "monitoringContractCustomBanner": {
      "type": "boolean"
    },
    "monitoringContractEndDate": {
      "type": "object"
    },
    "monitoringContractIsManual": {
      "type": "boolean"
    },
    "monitoringContractStartDate": {
      "type": "object"
    },
    "monitoringContractTerminateDate": {
      "type": "object"
    },
    "monitoringContractWarnDate": {
      "type": "object"
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
    "name": {
      "type": "string"
    },
    "netSuiteFields": {
      "type": "object",
      "properties": {
        "netSuiteContractedPartyId": {
          "type": "object"
        },
        "netSuiteCustomerId": {
          "type": "object"
        },
        "netSuiteEpcId": {
          "type": "object"
        },
        "netSuiteId": {
          "type": "object"
        },
        "netSuiteOperationsAndMaintenanceId": {
          "type": "object"
        },
        "netSuiteSiteOwnerId": {
          "type": "object"
        },
        "netSuiteSpecifierId": {
          "type": "object"
        }
      }
    },
    "newNote": {
      "type": "string"
    },
    "newsDashboardKey": {
      "type": "string"
    },
    "nominalTemperature": {
      "type": "number"
    },
    "notInService": {
      "type": "boolean"
    },
    "notInServiceInstruct": {
      "type": "string"
    },
    "operations": {
      "type": "boolean"
    },
    "overviewChart1": {
      "type": "string"
    },
    "overviewChart2": {
      "type": "string"
    },
    "parentKey": {
      "type": "string"
    },
    "paymentStatus": {
      "type": "number"
    },
    "performanceRatioMap": {
      "type": "string"
    },
    "powerThreshold": {
      "type": "number"
    },
    "ppaRateKey": {
      "type": "string"
    },
    "preferredWSForEstimatedInsolation": {
      "type": "number"
    },
    "productionGuaranteeKey": {
      "type": "string"
    },
    "purl": {
      "type": "string"
    },
    "queryOverrides": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "ratedPower": {
      "type": "number"
    },
    "ratedPowerUnit": {
      "type": "number"
    },
    "readOnly": {
      "type": "boolean"
    },
    "readyForValidation": {
      "type": "boolean"
    },
    "requiresPubIp": {
      "type": "boolean"
    },
    "ruleToolPreferencesKey": {
      "type": "string"
    },
    "runRulesDaily": {
      "type": "boolean"
    },
    "salesforceSystemId": {
      "type": "string"
    },
    "showEnvironment": {
      "type": "boolean"
    },
    "showGuide": {
      "type": "boolean"
    },
    "siteCommissioningComplete": {
      "type": "boolean"
    },
    "siteDashboardKey": {
      "type": "string"
    },
    "siteReports": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "siteType": {
      "type": "number"
    },
    "statusDetails": {
      "type": "string"
    },
    "syncToLocus": {
      "type": "boolean"
    },
    "systemSizeCurrent": {
      "type": "number"
    },
    "tagLine": {
      "type": "string"
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
          "type": "object"
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
    "taskId": {
      "type": "object"
    },
    "testMode": {
      "type": "boolean"
    },
    "timelineReportKey": {
      "type": "string"
    },
    "transpositionMethod": {
      "type": "number"
    },
    "ts": {
      "type": "string"
    },
    "tuneUpCompleted": {
      "type": "boolean"
    },
    "tuneUpCompletedDate": {
      "type": "object"
    },
    "tuneUpCompletedUser": {
      "type": "string"
    },
    "tuneUpPurchased": {
      "type": "boolean"
    },
    "tuneUpPurchasedDate": {
      "type": "object"
    },
    "tuneUpPurchasedUser": {
      "type": "string"
    },
    "tuneUpStarted": {
      "type": "boolean"
    },
    "tuneUpStartedDate": {
      "type": "object"
    },
    "tuneUpStartedUser": {
      "type": "string"
    },
    "tuneUpValidated": {
      "type": "boolean"
    },
    "tuneUpValidatedDate": {
      "type": "object"
    },
    "tuneUpValidatedUser": {
      "type": "string"
    },
    "turnOnDate": {
      "type": "object"
    },
    "tz": {
      "type": "string"
    },
    "url": {
      "type": "string"
    },
    "useDegradeStart": {
      "type": "boolean"
    },
    "useFilterAverageWeather": {
      "type": "boolean"
    },
    "useGross": {
      "type": "boolean"
    },
    "utilityRateKey": {
      "type": "string"
    },
    "validDataDate": {
      "type": "object"
    },
    "waitForKey": {
      "type": "string"
    },
    "weatherStationKey": {
      "type": "string"
    },
    "yearTotal": {
      "type": "string"
    },
    "yearTotalUnits": {
      "type": "string"
    },
    "yearly": {
      "type": "number"
    },
    "yearlyAgeMode": {
      "type": "number"
    },
    "yearlyDegrade": {
      "type": "number"
    }
  }
}
```

[Return to top](#apieditsites68143)

## Example

**Request:**

```http
GET /api/edit/site/S68143
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/S68143/administration/config
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
  "agencyReportingRateKey": "",
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
    84,
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
    4,
    257,
    187,
    21,
    186,
    245,
    258,
    240,
    19,
    20,
    271,
    271,
    195,
    197,
    94,
    98,
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
  "approvalId": 0,
  "approvedByKey": "",
  "approvedOn": null,
  "assetManagement": false,
  "availabilityCondition": 3,
  "availabilityIrradianceSource": 1,
  "availabilityTime": 2,
  "avgCellTemp": 45,
  "capacityAc": 0,
  "capacityAcUnit": 10,
  "capacityDc": 0,
  "capacityDcUnit": 10,
  "cecRating": 0,
  "cellModemContractAccessFlags": 0,
  "cellModemContractAccessNote": "",
  "cellModemContractCustomBanner": false,
  "cellModemContractEndDate": null,
  "cellModemContractIsManual": false,
  "cellModemContractStartDate": null,
  "cellModemContractTerminateDate": null,
  "cellModemContractWarnDate": null,
  "certifiedByKey": "",
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
  "communityExclude": false,
  "compareRadius": 0,
  "contactEmail": "",
  "contactKind": 0,
  "contactMobile": "",
  "contactName": "",
  "contactPhone": "",
  "curtailmentCtrlMaxError": 0,
  "customQueryKey": "",
  "customerStatus": "",
  "dailyData": false,
  "dashboards": [],
  "dc": false,
  "defaultQuery": 15,
  "degrade": false,
  "degradeStart": "2024-03-07",
  "description": "",
  "energyCapacity": 0,
  "energyCapacityUnit": 11,
  "energyRatioMaxAzimuth": 0,
  "energyRatioMaxIa": 0,
  "energyRatioMinAzimuth": 0,
  "energyRatioMinSun": 0,
  "energyRatioMinSunElevation": 0,
  "energyRatioUseGross": false,
  "estimatedCommissioningDate": null,
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
  "installDate": "2024-03-07",
  "installerKey": "",
  "isAgencyReporting": false,
  "isApproved": false,
  "isCertified": false,
  "isFractional": false,
  "isMigrated": false,
  "isMonitored": true,
  "isPaid": false,
  "isPpaInvoice": false,
  "key": "S68143",
  "language": "en-US",
  "links": [],
  "location": {
    "address1": "3500 Market Place Drive",
    "address2": "",
    "city": "Monterey Park",
    "country": "",
    "elevation": 399,
    "elevationUnit": 47,
    "latitude": 34.0371297,
    "longitude": -118.1014776,
    "postalCode": "91755",
    "state": "CA",
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
  "minSun": 0,
  "minSunUp": 101,
  "minTemperature": 0,
  "minYearlyPerformanceRatio": 0,
  "mode": 0,
  "modelName": "Site Performance Estimate",
  "modelingComplete": false,
  "monitoringContractAccessFlags": 0,
  "monitoringContractAccessNote": "",
  "monitoringContractCustomBanner": false,
  "monitoringContractEndDate": null,
  "monitoringContractIsManual": false,
  "monitoringContractStartDate": null,
  "monitoringContractTerminateDate": null,
  "monitoringContractWarnDate": null,
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
  "name": "*** LOST?* THD CA - 2304 Monterey Park",
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
  "notInService": true,
  "notInServiceInstruct": "",
  "operations": false,
  "overviewChart1": "255",
  "overviewChart2": "0",
  "parentKey": "C25228",
  "paymentStatus": 0,
  "performanceRatioMap": "",
  "powerThreshold": 0,
  "ppaRateKey": "",
  "preferredWSForEstimatedInsolation": 0,
  "productionGuaranteeKey": "",
  "purl": "",
  "queryOverrides": [],
  "ratedPower": 0,
  "ratedPowerUnit": 10,
  "readOnly": false,
  "readyForValidation": false,
  "requiresPubIp": false,
  "ruleToolPreferencesKey": "",
  "runRulesDaily": false,
  "salesforceSystemId": "",
  "showEnvironment": false,
  "showGuide": false,
  "siteCommissioningComplete": false,
  "siteDashboardKey": "",
  "siteReports": [],
  "siteType": 0,
  "statusDetails": "",
  "syncToLocus": false,
  "systemSizeCurrent": 0,
  "tagLine": "",
  "tags": {
    "attributes": [],
    "key": "{\"ancestorKey\":\"S68143\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"powerdisplay\"]}",
    "keywords": [],
    "lastChanged": null,
    "notes": [],
    "powerDisplays": []
  },
  "taskId": null,
  "testMode": false,
  "timelineReportKey": "",
  "transpositionMethod": 0,
  "ts": "2025-12-22T21:58:47Z",
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
  "turnOnDate": null,
  "tz": "US/Eastern",
  "url": "",
  "useDegradeStart": false,
  "useFilterAverageWeather": false,
  "useGross": false,
  "utilityRateKey": "",
  "validDataDate": null,
  "waitForKey": "",
  "weatherStationKey": "",
  "yearTotal": "0",
  "yearTotalUnits": "Wh",
  "yearly": 0,
  "yearlyAgeMode": 0,
  "yearlyDegrade": 0
}
```

[Return to top](#apieditsites68143)

