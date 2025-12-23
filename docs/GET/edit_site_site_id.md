<a id="top"></a>
# /api/edit/site/{site_id}

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
    "absoluteSoil": {
      "type": "boolean"
    },
    "account": {
      "type": "string"
    },
    "actualCommissioningDate": {
      "type": "object",
      "properties": {}
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
      "type": "object",
      "properties": {}
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
      "type": "object",
      "properties": {}
    },
    "cellModemContractIsManual": {
      "type": "boolean"
    },
    "cellModemContractStartDate": {
      "type": "object",
      "properties": {}
    },
    "cellModemContractTerminateDate": {
      "type": "object",
      "properties": {}
    },
    "cellModemContractWarnDate": {
      "type": "object",
      "properties": {}
    },
    "certifiedByKey": {
      "type": "string"
    },
    "certifiedOn": {
      "type": "object",
      "properties": {}
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
      "type": "object",
      "properties": {}
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
      "type": "object",
      "properties": {}
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
      "type": "object",
      "properties": {}
    },
    "monitoringContractIsManual": {
      "type": "boolean"
    },
    "monitoringContractStartDate": {
      "type": "object",
      "properties": {}
    },
    "monitoringContractTerminateDate": {
      "type": "object",
      "properties": {}
    },
    "monitoringContractWarnDate": {
      "type": "object",
      "properties": {}
    },
    "monthlyOutput": {
      "type": "object",
      "properties": {}
    },
    "name": {
      "type": "string"
    },
    "netSuiteFields": {
      "type": "object",
      "properties": {
        "netSuiteContractedPartyId": {
          "type": "object",
          "properties": {}
        },
        "netSuiteCustomerId": {
          "type": "object",
          "properties": {}
        },
        "netSuiteEpcId": {
          "type": "object",
          "properties": {}
        },
        "netSuiteId": {
          "type": "object",
          "properties": {}
        },
        "netSuiteOperationsAndMaintenanceId": {
          "type": "object",
          "properties": {}
        },
        "netSuiteSiteOwnerId": {
          "type": "object",
          "properties": {}
        },
        "netSuiteSpecifierId": {
          "type": "object",
          "properties": {}
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
          "type": "object",
          "properties": {
            "chart": {
              "type": "string"
            },
            "customUrls": {
              "type": "object",
              "properties": {
                "purl": {
                  "type": "string"
                },
                "purlRoot": {
                  "type": "string"
                }
              }
            },
            "displayInSiteOverview": {
              "type": "boolean"
            },
            "environmentalComparisons": {
              "type": "object",
              "properties": {
                "carbon": {
                  "type": "boolean"
                },
                "cars": {
                  "type": "boolean"
                },
                "gas": {
                  "type": "boolean"
                },
                "homes": {
                  "type": "boolean"
                },
                "methane": {
                  "type": "boolean"
                },
                "oil": {
                  "type": "boolean"
                },
                "televisions": {
                  "type": "boolean"
                },
                "trees": {
                  "type": "boolean"
                },
                "water": {
                  "type": "boolean"
                }
              }
            },
            "isPublic": {
              "type": "boolean"
            },
            "key": {
              "type": "string"
            },
            "mainLogo": {
              "type": "object",
              "properties": {
                "contentType": {
                  "type": "string"
                },
                "key": {
                  "type": "string"
                },
                "lastChanged": {
                  "type": "object",
                  "properties": {}
                },
                "name": {
                  "type": "string"
                },
                "uri": {
                  "type": "string"
                }
              }
            },
            "name": {
              "type": "string"
            },
            "nonStandardEnvironmentalComparisons": {
              "type": "object",
              "properties": {}
            },
            "overviewChart": {
              "type": "string"
            },
            "title": {
              "type": "string"
            },
            "titleIsSiteName": {
              "type": "boolean"
            },
            "ts": {
              "type": "object",
              "properties": {}
            },
            "url": {
              "type": "string"
            }
          }
        }
      }
    },
    "taskId": {
      "type": "object",
      "properties": {}
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
      "type": "object",
      "properties": {}
    },
    "tuneUpCompletedUser": {
      "type": "string"
    },
    "tuneUpPurchased": {
      "type": "boolean"
    },
    "tuneUpPurchasedDate": {
      "type": "object",
      "properties": {}
    },
    "tuneUpPurchasedUser": {
      "type": "string"
    },
    "tuneUpStarted": {
      "type": "boolean"
    },
    "tuneUpStartedDate": {
      "type": "object",
      "properties": {}
    },
    "tuneUpStartedUser": {
      "type": "string"
    },
    "tuneUpValidated": {
      "type": "boolean"
    },
    "tuneUpValidatedDate": {
      "type": "object",
      "properties": {}
    },
    "tuneUpValidatedUser": {
      "type": "string"
    },
    "turnOnDate": {
      "type": "object",
      "properties": {}
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
      "type": "object",
      "properties": {}
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

[Return to top](#top)

## Example

**Request:**

```http
GET /api/edit/site/S67109
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/S67109/administration/config
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
    257,
    21,
    245,
    258,
    19,
    20,
    110,
    115,
    109,
    96,
    161,
    162,
    164,
    166,
    165,
    62,
    75,
    44,
    43,
    67,
    169,
    170,
    15,
    255
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
  "degradeStart": "2023-09-22",
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
  "installDate": "2023-09-22",
  "installerKey": "",
  "isAgencyReporting": false,
  "isApproved": false,
  "isCertified": false,
  "isFractional": false,
  "isMigrated": false,
  "isMonitored": true,
  "isPaid": false,
  "isPpaInvoice": false,
  "key": "S67109",
  "language": "en-US",
  "links": [],
  "location": {
    "address1": "1440 South Route 59",
    "address2": "",
    "city": "Naperville",
    "country": "",
    "elevation": 0,
    "elevationUnit": 47,
    "latitude": 41.7309535,
    "longitude": -88.2062573,
    "postalCode": "60564",
    "state": "IL",
    "timeZone": 12794
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
  "minSunUp": 100,
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
  "monthlyOutput": null,
  "name": "Lowe's IL - 1711 - Naperville, IL",
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
  "parentKey": "C20909",
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
  "salesforceSystemId": "S-0076549",
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
    "key": "{\"ancestorKey\":\"S67109\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"powerdisplay\"]}",
    "keywords": [],
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
        "displayInSiteOverview": true,
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
        "key": "T8650413",
        "mainLogo": {
          "contentType": "",
          "key": "",
          "lastChanged": null,
          "name": "",
          "uri": "/Content/images/kiosk/solar_sun.png"
        },
        "name": "Lowe's IL - 1711 - Naperville, IL",
        "nonStandardEnvironmentalComparisons": {},
        "overviewChart": "15",
        "title": "",
        "titleIsSiteName": true,
        "ts": null,
        "url": "https://pubdisplay.alsoenergy.com/kiosk/18014398509549093?dashkey=2a5669734b65326a4143413d3d&tag=8650413"
      }
    ]
  },
  "taskId": null,
  "testMode": false,
  "timelineReportKey": "",
  "transpositionMethod": 0,
  "ts": "2025-12-22T17:42:15Z",
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
  "tz": "US/Central",
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

[Return to top](#top)

