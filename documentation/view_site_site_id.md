# Endpoint 51

[← Back to Index](../README.md)


### `/api/view/site/{site_id}`

**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 2  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "isMonitored": {
      "type": "boolean"
    },
    "cellModemContractEndDate": {
      "type": "string"
    },
    "address": {
      "type": "object",
      "properties": {
        "address2": {
          "type": "string"
        },
        "address1": {
          "type": "string"
        },
        "city": {
          "type": "string"
        },
        "postalCode": {
          "type": "string"
        },
        "country": {
          "type": "string"
        },
        "stateProvince": {
          "type": "string"
        }
      }
    },
    "cellModemContractStartDate": {
      "type": "string"
    },
    "energyCapacityUnit": {
      "type": "integer"
    },
    "longitude": {
      "type": "number"
    },
    "parentKey": {
      "type": "string"
    },
    "weatherMode": {
      "type": "integer"
    },
    "monitoringContractIsManual": {
      "type": "boolean"
    },
    "cellModemContractCustomBanner": {
      "type": "boolean"
    },
    "monitoringContractWarnDate": {
      "type": "string"
    },
    "workingStatus": {
      "type": "string"
    },
    "capacityDcUnit": {
      "type": "integer"
    },
    "elevation": {
      "type": "integer"
    },
    "dailyProductionEstimate": {
      "type": "number"
    },
    "lastChanged": {
      "type": "string"
    },
    "monthlyProductionEstimate": {
      "type": "number"
    },
    "ratedPowerUnit": {
      "type": "integer"
    },
    "monitoringContractCustomBanner": {
      "type": "boolean"
    },
    "monitoringContractStatus": {
      "type": "integer"
    },
    "monitoringContractEndDate": {
      "type": "string"
    },
    "estimatedCommissioningDate": {
      "type": "string"
    },
    "cellModemContractAccessNote": {
      "type": "string"
    },
    "cellModemContractTerminateDate": {
      "type": "string"
    },
    "cellModemContractIsManual": {
      "type": "boolean"
    },
    "customerLogo": {
      "type": "string"
    },
    "capacityAc": {
      "type": "integer"
    },
    "customQueryKey": {
      "type": "string"
    },
    "preferredWSForEstimatedInsolation": {
      "type": "integer"
    },
    "requiresPubIp": {
      "type": "boolean"
    },
    "defaultQuery": {
      "type": "integer"
    },
    "monitoringContractWillNotRenew": {
      "type": "boolean"
    },
    "capacityAcUnit": {
      "type": "integer"
    },
    "status": {
      "type": "integer"
    },
    "latitude": {
      "type": "number"
    },
    "ratedPower": {
      "type": "integer"
    },
    "advancedSiteConfiguration": {
      "type": "boolean"
    },
    "monitoringContractTerminateDate": {
      "type": "string"
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
    "cellModemContractWarnDate": {
      "type": "string"
    },
    "monitoringContractAccessNote": {
      "type": "string"
    },
    "validDataDate": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "cellModemContractStatus": {
      "type": "integer"
    },
    "key": {
      "type": "string"
    },
    "paymentStatus": {
      "type": "integer"
    },
    "capacityDc": {
      "type": "number"
    },
    "monitoringContractStartDate": {
      "type": "string"
    },
    "energyCapacity": {
      "type": "integer"
    },
    "overviewChart1": {
      "type": "string"
    },
    "overviewChart2": {
      "type": "string"
    },
    "cellModemContractWillNotRenew": {
      "type": "boolean"
    },
    "siteType": {
      "type": "integer"
    },
    "sitePhotos": {
      "type": "unknown"
    }
  }
}
```

#### Example

**Request:**

```http
GET /api/view/site/S38292?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "actualCommissioningDate": null,
  "address": {
    "address1": "2100 Roosevelt Ave.",
    "address2": "",
    "city": "Springfield",
    "country": "United States",
    "postalCode": "01101",
    "stateProvince": "MA"
  },
  "advancedSiteConfiguration": false,
  "capacityAc": 0,
  "capacityAcUnit": 10,
  "capacityDc": 2.623,
  "capacityDcUnit": 12,
  "cellModemContractAccessNote": "",
  "cellModemContractCustomBanner": false,
  "cellModemContractEndDate": "2027-06-30T00:00:00Z",
  "cellModemContractIsManual": false,
  "cellModemContractStartDate": "2016-10-17T00:00:00Z",
  "cellModemContractStatus": 0,
  "cellModemContractTerminateDate": "2028-06-29T00:00:00Z",
  "cellModemContractWarnDate": "2027-05-01T00:00:00Z",
  "cellModemContractWillNotRenew": false,
  "customQueryKey": "",
  "customerLogo": "/Content/DBFile?urltype=file&fidrev=F86940",
  "dailyProductionEstimate": 3713.6697870200255,
  "defaultQuery": 15,
  "elevation": 70,
  "energyCapacity": 0,
  "energyCapacityUnit": 11,
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
  "isMonitored": true,
  "key": "S38292",
  "lastChanged": "2025-12-12T17:53:01Z",
  "latitude": 42.137941,
  "longitude": -72.5508695,
  "monitoringContractAccessNote": "",
  "monitoringContractCustomBanner": false,
  "monitoringContractEndDate": "2027-06-30T00:00:00Z",
  "monitoringContractIsManual": false,
  "monitoringContractStartDate": "2016-10-17T00:00:00Z",
  "monitoringContractStatus": 0,
  "monitoringContractTerminateDate": "2028-06-29T00:00:00Z",
  "monitoringContractWarnDate": "2027-05-01T00:00:00Z",
  "monitoringContractWillNotRenew": false,
  "monthlyProductionEstimate": 113114.89364495015,
  "name": "Smith & Wesson - MA-21-C273",
  "overviewChart1": "255",
  "overviewChart2": "0",
  "parentKey": "C16300",
  "paymentStatus": 3145728,
  "preferredWSForEstimatedInsolation": 0,
  "ratedPower": 0,
  "ratedPowerUnit": 10,
  "requiresPubIp": true,
  "sitePhotos": null,
  "siteType": 0,
  "status": 8,
  "validDataDate": "2017-01-10T14:53:00Z",
  "weatherMode": 0,
  "workingStatus": ""
}
```

