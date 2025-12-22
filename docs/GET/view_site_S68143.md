# /api/view/site/S68143

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
    "key": {
      "type": "string"
    },
    "lastChanged": {
      "type": "string"
    },
    "cellModemContractStatus": {
      "type": "number"
    },
    "cellModemContractAccessNote": {
      "type": "string"
    },
    "cellModemContractCustomBanner": {
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
    "cellModemContractIsManual": {
      "type": "boolean"
    },
    "cellModemContractTerminateDate": {
      "type": "object"
    },
    "cellModemContractWillNotRenew": {
      "type": "boolean"
    },
    "customerLogo": {
      "type": "string"
    },
    "elevation": {
      "type": "number"
    },
    "latitude": {
      "type": "number"
    },
    "longitude": {
      "type": "number"
    },
    "dailyProductionEstimate": {
      "type": "number"
    },
    "monthlyProductionEstimate": {
      "type": "number"
    },
    "name": {
      "type": "string"
    },
    "parentKey": {
      "type": "string"
    },
    "sitePhotos": {
      "type": "object"
    },
    "status": {
      "type": "number"
    },
    "defaultQuery": {
      "type": "number"
    },
    "customQueryKey": {
      "type": "string"
    },
    "overviewChart1": {
      "type": "string"
    },
    "overviewChart2": {
      "type": "string"
    },
    "requiresPubIp": {
      "type": "boolean"
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
        "stateProvince": {
          "type": "string"
        },
        "postalCode": {
          "type": "string"
        }
      }
    },
    "validDataDate": {
      "type": "string"
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
    "paymentStatus": {
      "type": "number"
    },
    "monitoringContractAccessNote": {
      "type": "string"
    },
    "monitoringContractCustomBanner": {
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
    "monitoringContractIsManual": {
      "type": "boolean"
    },
    "monitoringContractTerminateDate": {
      "type": "object"
    },
    "monitoringContractWillNotRenew": {
      "type": "boolean"
    },
    "monitoringContractStatus": {
      "type": "number"
    },
    "siteType": {
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
    "isMonitored": {
      "type": "boolean"
    },
    "weatherMode": {
      "type": "number"
    },
    "workingStatus": {
      "type": "string"
    },
    "advancedSiteConfiguration": {
      "type": "boolean"
    },
    "estimatedCommissioningDate": {
      "type": "object"
    },
    "actualCommissioningDate": {
      "type": "object"
    },
    "preferredWSForEstimatedInsolation": {
      "type": "number"
    }
  }
}
```

[Return to top](#apiviewsites68143)

## Example

**Request:**

```http
GET /api/view/site/S68143?lastChanged=1900-01-01T00:00:00.000Z
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/S68143/administration/config
```

**Response:**

```json
{
  "key": "S68143",
  "lastChanged": "2025-12-22T22:02:50Z",
  "cellModemContractStatus": 0,
  "cellModemContractAccessNote": "",
  "cellModemContractCustomBanner": false,
  "cellModemContractStartDate": null,
  "cellModemContractWarnDate": null,
  "cellModemContractEndDate": null,
  "cellModemContractIsManual": false,
  "cellModemContractTerminateDate": null,
  "cellModemContractWillNotRenew": false,
  "customerLogo": "/Content/DBFile?urltype=file&fidrev=F86940",
  "elevation": 400,
  "latitude": 34.0371297,
  "longitude": -118.1014776,
  "dailyProductionEstimate": 0,
  "monthlyProductionEstimate": 0,
  "name": "*** LOST?* THD CA - 2304 Monterey Park",
  "parentKey": "C25228",
  "sitePhotos": null,
  "status": 0,
  "defaultQuery": 15,
  "customQueryKey": "",
  "overviewChart1": "255",
  "overviewChart2": "0",
  "requiresPubIp": false,
  "address": {
    "address1": "3500 Market Place Drive",
    "address2": "",
    "city": "Monterey Park",
    "country": "",
    "stateProvince": "CA",
    "postalCode": "91755"
  },
  "validDataDate": "2024-03-07T00:00:00Z",
  "estimatedLosses": {
    "clipping": "0",
    "downtime": "0",
    "irradiance": "0",
    "shading": "0",
    "snow": "0",
    "soiling": "0",
    "temperature": "0"
  },
  "paymentStatus": 0,
  "monitoringContractAccessNote": "",
  "monitoringContractCustomBanner": false,
  "monitoringContractStartDate": null,
  "monitoringContractWarnDate": null,
  "monitoringContractEndDate": null,
  "monitoringContractIsManual": false,
  "monitoringContractTerminateDate": null,
  "monitoringContractWillNotRenew": false,
  "monitoringContractStatus": 0,
  "siteType": 0,
  "capacityAc": 0,
  "capacityAcUnit": 10,
  "capacityDc": 0,
  "capacityDcUnit": 10,
  "ratedPower": 0,
  "ratedPowerUnit": 10,
  "energyCapacity": 0,
  "energyCapacityUnit": 11,
  "isMonitored": true,
  "weatherMode": 1,
  "workingStatus": "Not In Service",
  "advancedSiteConfiguration": false,
  "estimatedCommissioningDate": null,
  "actualCommissioningDate": null,
  "preferredWSForEstimatedInsolation": 0
}
```

[Return to top](#apiviewsites68143)

