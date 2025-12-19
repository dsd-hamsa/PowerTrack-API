# Endpoint 22

[← Back to Index](../README.md)


### `/api/projectmanagement/{site_id}`

**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 1  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "address": {
      "type": "string"
    },
    "blockedTags": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "expEnergy24": {
      "type": "unknown"
    },
    "standardSiteSetup": {
      "type": "integer"
    },
    "kwhPercent": {
      "type": "string"
    },
    "netSuiteId": {
      "type": "string"
    },
    "deploymentStatus": {
      "type": "integer"
    },
    "estimatedCommissioningDate": {
      "type": "unknown"
    },
    "actEnergy24": {
      "type": "unknown"
    },
    "actions": {
      "type": "unknown"
    },
    "ownerContact": {
      "type": "object",
      "properties": {
        "companyName": {
          "type": "string"
        },
        "phoneNumber": {
          "type": "string"
        },
        "key": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "fullName": {
          "type": "string"
        },
        "email": {
          "type": "string"
        }
      }
    },
    "certifiedByKey": {
      "type": "string"
    },
    "alsoEnergyContact": {
      "type": "object",
      "properties": {
        "companyName": {
          "type": "string"
        },
        "phoneNumber": {
          "type": "string"
        },
        "key": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "fullName": {
          "type": "string"
        },
        "email": {
          "type": "string"
        }
      }
    },
    "folder": {
      "type": "string"
    },
    "keyAction": {
      "type": "string"
    },
    "advancedSiteConfig": {
      "type": "integer"
    },
    "files": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "historicalDataMigration": {
      "type": "integer"
    },
    "approvedByKey": {
      "type": "string"
    },
    "siteValidation": {
      "type": "integer"
    },
    "name": {
      "type": "string"
    },
    "key": {
      "type": "string"
    },
    "epcContact": {
      "type": "object",
      "properties": {
        "companyName": {
          "type": "string"
        },
        "phoneNumber": {
          "type": "string"
        },
        "key": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "fullName": {
          "type": "string"
        },
        "email": {
          "type": "string"
        }
      }
    },
    "siteType": {
      "type": "integer"
    }
  }
}
```

#### Example

**Request:**

```http
GET /api/projectmanagement/S68624?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "actEnergy24": null,
  "actions": null,
  "address": "26101 Magic Mountain Parkway",
  "advancedSiteConfig": 0,
  "alsoEnergyContact": {
    "companyName": "",
    "email": "someemailaddress@anplace.com",
    "fullName": " AlsoEnergy person",
    "key": "",
    "phoneNumber": "234-421-2526",
    "username": "a"
  },
  "approvedByKey": "",
  "blockedTags": [],
  "certifiedByKey": "",
  "deploymentStatus": 4,
  "epcContact": {
    "companyName": "Sun Puns To the Max Inc.",
    "email": "someemailaddress@anplace.com",
    "fullName": " EPC person",
    "key": "",
    "phoneNumber": "234-421-2526",
    "username": "c"
  },
  "estimatedCommissioningDate": null,
  "expEnergy24": null,
  "files": [],
  "folder": "0",
  "historicalDataMigration": 0,
  "key": "S68624",
  "keyAction": "",
  "kwhPercent": "NaN",
  "name": "Six Flags - Magic Mountain",
  "netSuiteId": "88904",
  "ownerContact": {
    "companyName": "Sun Puns Inc.",
    "email": "someemailaddress@anplace.com",
    "fullName": "Owner Person",
    "key": "",
    "phoneNumber": "234-421-2526",
    "username": "b"
  },
  "siteType": 0,
  "siteValidation": 1,
  "standardSiteSetup": 1
}
```

