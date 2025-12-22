# /api/edit/site/S68143

[← Back to Index](../README.md)

**Methods:** GET
**Status Codes:** 200
**Call Count:** 1

## Table of Contents

- [Response Structure](#response-structure)
- [Example](#example)

## Response Structure

```json
{
  "type": "object",
  "properties": {
    "isMigrated": {
      "type": "boolean"
    },
    "readOnly": {
      "type": "boolean"
    },
    "key": {
      "type": "string"
    },
    "parentKey": {
      "type": "string"
    },
    "installerKey": {
      "type": "string"
    },
    "ruleToolPreferencesKey": {
      "type": "string"
    },
    "ts": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "tagLine": {
      "type": "string"
    },
    "account": {
      "type": "string"
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
        "state": {
          "type": "string"
        },
        "postalCode": {
          "type": "string"
        },
        "country": {
          "type": "string"
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
        "elevation": {
          "type": "number"
        },
        "timeZone": {
          "type": "number"
        }
      }
    },
    "url": {
      "type": "string"
    },
    "purl": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "dailyData": {
      "type": "boolean"
    },
    "advancedSiteConfiguration": {
      "type": "boolean"
    },
    "advancedSiteConfigurationDocumentReceived": {
      "type": "boolean"
    },
    "siteCommissioningComplete": {
      "type": "boolean"
    },
    "modelingComplete": {
      "type": "boolean"
    },
    "readyForValidation": {
      "type": "boolean"
    },
    "operations": {
      "type": "boolean"
    },
    "assetManagement": {
      "type": "boolean"
    },
    "allowEmail": {
      "type": "boolean"
    },
    "isFractional": {
      "type": "boolean"
    },
    "testMode": {
      "type": "boolean"
    },
    "runRulesDaily": {
      "type": "boolean"
    },
    "language": {
      "type": "string"
    },
    "notInService": {
      "type": "boolean"
    },
    "notInServiceInstruct": {
      "type": "string"
    },
    "isCertified": {
      "type": "boolean"
    },
    "isApproved": {
      "type": "boolean"
    },
    "certifiedByKey": {
      "type": "string"
    },
    "approvedByKey": {
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
    "tuneUpCompleted": {
      "type": "boolean"
    },
    "tuneUpCompletedDate": {
      "type": "object"
    },
    "tuneUpCompletedUser": {
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
    "paymentStatus": {
      "type": "number"
    },
    "tz": {
      "type": "string"
    },
    "links": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "approvalId": {
      "type": "number"
    },
    "requiresPubIp": {
      "type": "boolean"
    },
    "isPaid": {
      "type": "boolean"
    },
    "waitForKey": {
      "type": "string"
    },
    "weatherStationKey": {
      "type": "string"
    },
    "exportDataConfig": {
      "type": "string"
    },
    "customerStatus": {
      "type": "string"
    },
    "adminStatus": {
      "type": "string"
    },
    "aeStatus": {
      "type": "string"
    },
    "statusDetails": {
      "type": "string"
    },
    "contactKind": {
      "type": "number"
    },
    "contactName": {
      "type": "string"
    },
    "contactEmail": {
      "type": "string"
    },
    "contactPhone": {
      "type": "string"
    },
    "contactMobile": {
      "type": "string"
    },
    "newNote": {
      "type": "string"
    },
    "minSun": {
      "type": "number"
    },
    "maxIa": {
      "type": "number"
    },
    "mode": {
      "type": "number"
    },
    "dc": {
      "type": "boolean"
    },
    "yearly": {
      "type": "number"
    },
    "degrade": {
      "type": "boolean"
    },
    "minYearlyPerformanceRatio": {
      "type": "number"
    },
    "minMonthlyPerformanceRatio": {
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
    "minIrradiance": {
      "type": "number"
    },
    "maxIrradiance": {
      "type": "number"
    },
    "minTemperature": {
      "type": "number"
    },
    "maxTemperature": {
      "type": "number"
    },
    "performanceRatioMap": {
      "type": "string"
    },
    "modelName": {
      "type": "string"
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
    "yearTotal": {
      "type": "string"
    },
    "yearTotalUnits": {
      "type": "string"
    },
    "yearlyDegrade": {
      "type": "number"
    },
    "yearlyAgeMode": {
      "type": "number"
    },
    "useDegradeStart": {
      "type": "boolean"
    },
    "degradeStart": {
      "type": "string"
    },
    "turnOnDate": {
      "type": "object"
    },
    "availabilityTime": {
      "type": "number"
    },
    "availabilityCondition": {
      "type": "number"
    },
    "availabilityIrradianceSource": {
      "type": "number"
    },
    "powerThreshold": {
      "type": "number"
    },
    "minSunUp": {
      "type": "number"
    },
    "useGross": {
      "type": "boolean"
    },
    "energyRatioMinSun": {
      "type": "number"
    },
    "energyRatioMaxIa": {
      "type": "number"
    },
    "energyRatioMinSunElevation": {
      "type": "number"
    },
    "energyRatioMinAzimuth": {
      "type": "number"
    },
    "energyRatioMaxAzimuth": {
      "type": "number"
    },
    "energyRatioUseGross": {
      "type": "boolean"
    },
    "excludeCommunicationOutages": {
      "type": "boolean"
    },
    "avgCellTemp": {
      "type": "number"
    },
    "absoluteSoil": {
      "type": "boolean"
    },
    "curtailmentCtrlMaxError": {
      "type": "number"
    },
    "nominalTemperature": {
      "type": "number"
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
    "useFilterAverageWeather": {
      "type": "boolean"
    },
    "transpositionMethod": {
      "type": "number"
    },
    "isAgencyReporting": {
      "type": "boolean"
    },
    "isPpaInvoice": {
      "type": "boolean"
    },
    "siteReports": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "chartDashboard": {
      "type": "object",
      "properties": {
        "charts": {
          "type": "object",
          "properties": {
            "chartKey": {
              "type": "string"
            },
            "chartRank": {
              "type": "string"
            },
            "io": {
              "type": "string"
            },
            "canView": {
              "type": "boolean"
            },
            "chartName": {
              "type": "string"
            }
          }
        }
      }
    },
    "siteType": {
      "type": "number"
    },
    "defaultQuery": {
      "type": "number"
    },
    "overviewChart1": {
      "type": "string"
    },
    "overviewChart2": {
      "type": "string"
    },
    "allowedChartTypes": {
      "type": "number"
    },
    "customQueryKey": {
      "type": "string"
    },
    "siteDashboardKey": {
      "type": "string"
    },
    "showEnvironment": {
      "type": "boolean"
    },
    "newsDashboardKey": {
      "type": "string"
    },
    "mapTargetKey": {
      "type": "string"
    },
    "timelineReportKey": {
      "type": "string"
    },
    "dashboards": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "queryOverrides": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "systemSizeCurrent": {
      "type": "number"
    },
    "cecRating": {
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
    "isMonitored": {
      "type": "boolean"
    },
    "ratedPower": {
      "type": "number"
    },
    "ratedPowerUnit": {
      "type": "number"
    },
    "energyCapacity": {
      "type": "number"
    },
    "energyCapacityUnit": {
      "type": "number"
    },
    "communityExclude": {
      "type": "boolean"
    },
    "showGuide": {
      "type": "boolean"
    },
    "compareRadius": {
      "type": "number"
    },
    "utilityRateKey": {
      "type": "string"
    },
    "ppaRateKey": {
      "type": "string"
    },
    "agencyReportingRateKey": {
      "type": "string"
    },
    "productionGuaranteeKey": {
      "type": "string"
    },
    "tags": {
      "type": "object",
      "properties": {
        "key": {
          "type": "string"
        },
        "lastChanged": {
          "type": "object"
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
    "netSuiteFields": {
      "type": "object",
      "properties": {
        "netSuiteId": {
          "type": "object"
        },
        "netSuiteCustomerId": {
          "type": "object"
        },
        "netSuiteSiteOwnerId": {
          "type": "object"
        },
        "netSuiteSpecifierId": {
          "type": "object"
        },
        "netSuiteEpcId": {
          "type": "object"
        },
        "netSuiteOperationsAndMaintenanceId": {
          "type": "object"
        },
        "netSuiteContractedPartyId": {
          "type": "object"
        }
      }
    },
    "salesforceSystemId": {
      "type": "string"
    },
    "cellModemContractIsManual": {
      "type": "boolean"
    },
    "cellModemContractStartDate": {
      "type": "object"
    },
    "cellModemContractWarnDate": {
      "type": "object"
    },
    "cellModemContractEndDate": {
      "type": "object"
    },
    "cellModemContractTerminateDate": {
      "type": "object"
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
    "monitoringContractIsManual": {
      "type": "boolean"
    },
    "monitoringContractStartDate": {
      "type": "object"
    },
    "monitoringContractWarnDate": {
      "type": "object"
    },
    "monitoringContractEndDate": {
      "type": "object"
    },
    "monitoringContractTerminateDate": {
      "type": "object"
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
    "locusId": {
      "type": "object"
    },
    "taskId": {
      "type": "object"
    },
    "syncToLocus": {
      "type": "boolean"
    },
    "installDate": {
      "type": "string"
    },
    "validDataDate": {
      "type": "object"
    },
    "estimatedCommissioningDate": {
      "type": "object"
    },
    "actualCommissioningDate": {
      "type": "object"
    },
    "certifiedOn": {
      "type": "object"
    },
    "approvedOn": {
      "type": "object"
    },
    "preferredWSForEstimatedInsolation": {
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
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/S68143/administration/config
```

**Response:**

```json
{
  "isMigrated": false,
  "readOnly": false,
  "key": "S68143",
  "parentKey": "C25228",
  "installerKey": "",
  "ruleToolPreferencesKey": "",
  "ts": "2025-12-22T21:58:47Z",
  "name": "*** LOST?* THD CA - 2304 Monterey Park",
  "tagLine": "",
  "account": "",
  "location": {
    "address1": "3500 Market Place Drive",
    "address2": "",
    "city": "Monterey Park",
    "state": "CA",
    "postalCode": "91755",
    "country": "",
    "elevationUnit": 47,
    "latitude": 34.0371297,
    "longitude": -118.1014776,
    "elevation": 399,
    "timeZone": 16891
  },
  "url": "",
  "purl": "",
  "description": "",
  "dailyData": false,
  "advancedSiteConfiguration": false,
  "advancedSiteConfigurationDocumentReceived": false,
  "siteCommissioningComplete": false,
  "modelingComplete": false,
  "readyForValidation": false,
  "operations": false,
  "assetManagement": false,
  "allowEmail": true,
  "isFractional": false,
  "testMode": false,
  "runRulesDaily": false,
  "language": "en-US",
  "notInService": true,
  "notInServiceInstruct": "",
  "isCertified": false,
  "isApproved": false,
  "certifiedByKey": "",
  "approvedByKey": "",
  "tuneUpPurchased": false,
  "tuneUpPurchasedDate": null,
  "tuneUpPurchasedUser": "",
  "tuneUpStarted": false,
  "tuneUpStartedDate": null,
  "tuneUpStartedUser": "",
  "tuneUpCompleted": false,
  "tuneUpCompletedDate": null,
  "tuneUpCompletedUser": "",
  "tuneUpValidated": false,
  "tuneUpValidatedDate": null,
  "tuneUpValidatedUser": "",
  "paymentStatus": 0,
  "tz": "US/Eastern",
  "links": [],
  "approvalId": 0,
  "requiresPubIp": false,
  "isPaid": false,
  "waitForKey": "",
  "weatherStationKey": "",
  "exportDataConfig": "",
  "customerStatus": "",
  "adminStatus": "",
  "aeStatus": "",
  "statusDetails": "",
  "contactKind": 0,
  "contactName": "",
  "contactEmail": "",
  "contactPhone": "",
  "contactMobile": "",
  "newNote": "",
  "minSun": 0,
  "maxIa": 55,
  "mode": 0,
  "dc": false,
  "yearly": 0,
  "degrade": false,
  "minYearlyPerformanceRatio": 0,
  "minMonthlyPerformanceRatio": {
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
  },
  "minIrradiance": 0,
  "maxIrradiance": 0,
  "minTemperature": 0,
  "maxTemperature": 0,
  "performanceRatioMap": "",
  "modelName": "Site Performance Estimate",
  "monthlyOutput": {
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
  },
  "yearTotal": "0",
  "yearTotalUnits": "Wh",
  "yearlyDegrade": 0,
  "yearlyAgeMode": 0,
  "useDegradeStart": false,
  "degradeStart": "2024-03-07",
  "turnOnDate": null,
  "availabilityTime": 2,
  "availabilityCondition": 3,
  "availabilityIrradianceSource": 1,
  "powerThreshold": 0,
  "minSunUp": 101,
  "useGross": false,
  "energyRatioMinSun": 0,
  "energyRatioMaxIa": 0,
  "energyRatioMinSunElevation": 0,
  "energyRatioMinAzimuth": 0,
  "energyRatioMaxAzimuth": 0,
  "energyRatioUseGross": false,
  "excludeCommunicationOutages": false,
  "avgCellTemp": 45,
  "absoluteSoil": false,
  "curtailmentCtrlMaxError": 0,
  "nominalTemperature": 0,
  "estimatedLosses": {
    "clipping": "0",
    "downtime": "0",
    "irradiance": "0",
    "shading": "0",
    "snow": "0",
    "soiling": "0",
    "temperature": "0"
  },
  "useFilterAverageWeather": false,
  "transpositionMethod": 0,
  "isAgencyReporting": false,
  "isPpaInvoice": false,
  "siteReports": [],
  "chartDashboard": {
    "charts": [
      {
        "chartKey": "",
        "chartRank": "",
        "io": "",
        "canView": false,
        "chartName": ""
      }
    ]
  },
  "siteType": 0,
  "defaultQuery": 15,
  "overviewChart1": "255",
  "overviewChart2": "0",
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
  "customQueryKey": "",
  "siteDashboardKey": "",
  "showEnvironment": false,
  "newsDashboardKey": "",
  "mapTargetKey": "",
  "timelineReportKey": "",
  "dashboards": [],
  "queryOverrides": [],
  "systemSizeCurrent": 0,
  "cecRating": 0,
  "capacityAc": 0,
  "capacityAcUnit": 10,
  "capacityDc": 0,
  "capacityDcUnit": 10,
  "isMonitored": true,
  "ratedPower": 0,
  "ratedPowerUnit": 10,
  "energyCapacity": 0,
  "energyCapacityUnit": 11,
  "communityExclude": false,
  "showGuide": false,
  "compareRadius": 0,
  "utilityRateKey": "",
  "ppaRateKey": "",
  "agencyReportingRateKey": "",
  "productionGuaranteeKey": "",
  "tags": {
    "key": "{\"ancestorKey\":\"S68143\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"powerdisplay\"]}",
    "lastChanged": null,
    "attributes": [],
    "keywords": [],
    "notes": [],
    "powerDisplays": []
  },
  "netSuiteFields": {
    "netSuiteId": null,
    "netSuiteCustomerId": null,
    "netSuiteSiteOwnerId": null,
    "netSuiteSpecifierId": null,
    "netSuiteEpcId": null,
    "netSuiteOperationsAndMaintenanceId": null,
    "netSuiteContractedPartyId": null
  },
  "salesforceSystemId": "",
  "cellModemContractIsManual": false,
  "cellModemContractStartDate": null,
  "cellModemContractWarnDate": null,
  "cellModemContractEndDate": null,
  "cellModemContractTerminateDate": null,
  "cellModemContractAccessFlags": 0,
  "cellModemContractAccessNote": "",
  "cellModemContractCustomBanner": false,
  "monitoringContractIsManual": false,
  "monitoringContractStartDate": null,
  "monitoringContractWarnDate": null,
  "monitoringContractEndDate": null,
  "monitoringContractTerminateDate": null,
  "monitoringContractAccessFlags": 0,
  "monitoringContractAccessNote": "",
  "monitoringContractCustomBanner": false,
  "locusId": null,
  "taskId": null,
  "syncToLocus": false,
  "installDate": "2024-03-07",
  "validDataDate": null,
  "estimatedCommissioningDate": null,
  "actualCommissioningDate": null,
  "certifiedOn": null,
  "approvedOn": null,
  "preferredWSForEstimatedInsolation": 0
}
```

[Return to top](#apieditsites68143)

