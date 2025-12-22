# /api/view/site/S68143

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
    "actualCommissioningDate": {
      "type": "object"
    },
    "address": {
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
        "postalCode": {
          "type": "string"
        },
        "stateProvince": {
          "type": "string"
        }
      }
    },
    "advancedSiteConfiguration": {
      "type": "boolean"
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
    "cellModemContractStatus": {
      "type": "number"
    },
    "cellModemContractTerminateDate": {
      "type": "object"
    },
    "cellModemContractWarnDate": {
      "type": "object"
    },
    "cellModemContractWillNotRenew": {
      "type": "boolean"
    },
    "customQueryKey": {
      "type": "string"
    },
    "customerLogo": {
      "type": "string"
    },
    "dailyProductionEstimate": {
      "type": "number"
    },
    "defaultQuery": {
      "type": "number"
    },
    "elevation": {
      "type": "number"
    },
    "energyCapacity": {
      "type": "number"
    },
    "energyCapacityUnit": {
      "type": "number"
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
    "isMonitored": {
      "type": "boolean"
    },
    "key": {
      "type": "string"
    },
    "lastChanged": {
      "type": "string"
    },
    "latitude": {
      "type": "number"
    },
    "longitude": {
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
    "monitoringContractStatus": {
      "type": "number"
    },
    "monitoringContractTerminateDate": {
      "type": "object"
    },
    "monitoringContractWarnDate": {
      "type": "object"
    },
    "monitoringContractWillNotRenew": {
      "type": "boolean"
    },
    "monthlyProductionEstimate": {
      "type": "number"
    },
    "name": {
      "type": "string"
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
    "preferredWSForEstimatedInsolation": {
      "type": "number"
    },
    "ratedPower": {
      "type": "number"
    },
    "ratedPowerUnit": {
      "type": "number"
    },
    "requiresPubIp": {
      "type": "boolean"
    },
    "sitePhotos": {
      "type": "object"
    },
    "siteType": {
      "type": "number"
    },
    "status": {
      "type": "number"
    },
    "validDataDate": {
      "type": "string"
    },
    "weatherMode": {
      "type": "number"
    },
    "workingStatus": {
      "type": "string"
    }
  }
}
```

[Return to top](#apiviewsites68143)

## Example

**Request:**

```http
GET /api/view/site/S68143?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/S68143/administration/config
```

**Response:**

```json
{
  "actualCommissioningDate": null,
  "address": {
    "address1": "3500 Market Place Drive",
    "address2": "",
    "city": "Monterey Park",
    "country": "",
    "postalCode": "91755",
    "stateProvince": "CA"
  },
  "advancedSiteConfiguration": false,
  "capacityAc": 0,
  "capacityAcUnit": 10,
  "capacityDc": 0,
  "capacityDcUnit": 10,
  "cellModemContractAccessNote": "",
  "cellModemContractCustomBanner": false,
  "cellModemContractEndDate": null,
  "cellModemContractIsManual": false,
  "cellModemContractStartDate": null,
  "cellModemContractStatus": 0,
  "cellModemContractTerminateDate": null,
  "cellModemContractWarnDate": null,
  "cellModemContractWillNotRenew": false,
  "customQueryKey": "",
  "customerLogo": "/Content/DBFile?urltype=file&fidrev=F86940",
  "dailyProductionEstimate": 0,
  "defaultQuery": 15,
  "elevation": 400,
  "energyCapacity": 0,
  "energyCapacityUnit": 11,
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
  "isMonitored": true,
  "key": "S68143",
  "lastChanged": "2025-12-22T22:02:50Z",
  "latitude": 34.0371297,
  "longitude": -118.1014776,
  "monitoringContractAccessNote": "",
  "monitoringContractCustomBanner": false,
  "monitoringContractEndDate": null,
  "monitoringContractIsManual": false,
  "monitoringContractStartDate": null,
  "monitoringContractStatus": 0,
  "monitoringContractTerminateDate": null,
  "monitoringContractWarnDate": null,
  "monitoringContractWillNotRenew": false,
  "monthlyProductionEstimate": 0,
  "name": "*** LOST?* THD CA - 2304 Monterey Park",
  "overviewChart1": "255",
  "overviewChart2": "0",
  "parentKey": "C25228",
  "paymentStatus": 0,
  "preferredWSForEstimatedInsolation": 0,
  "ratedPower": 0,
  "ratedPowerUnit": 10,
  "requiresPubIp": false,
  "sitePhotos": null,
  "siteType": 0,
  "status": 0,
  "validDataDate": "2024-03-07T00:00:00Z",
  "weatherMode": 1,
  "workingStatus": "Not In Service"
}
```

[Return to top](#apiviewsites68143)

