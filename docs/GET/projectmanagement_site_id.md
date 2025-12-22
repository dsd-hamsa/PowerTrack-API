# /api/projectmanagement/{site_id}

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
    "actEnergy24": {
      "type": "object",
      "properties": {}
    },
    "actions": {
      "type": "object",
      "properties": {}
    },
    "address": {
      "type": "string"
    },
    "advancedSiteConfig": {
      "type": "number"
    },
    "alsoEnergyContact": {
      "type": "object",
      "properties": {
        "companyName": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "fullName": {
          "type": "string"
        },
        "key": {
          "type": "string"
        },
        "phoneNumber": {
          "type": "string"
        },
        "username": {
          "type": "string"
        }
      }
    },
    "approvedByKey": {
      "type": "string"
    },
    "blockedTags": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "certifiedByKey": {
      "type": "string"
    },
    "deploymentStatus": {
      "type": "number"
    },
    "epcContact": {
      "type": "object",
      "properties": {
        "companyName": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "fullName": {
          "type": "string"
        },
        "key": {
          "type": "string"
        },
        "phoneNumber": {
          "type": "string"
        },
        "username": {
          "type": "string"
        }
      }
    },
    "estimatedCommissioningDate": {
      "type": "object",
      "properties": {}
    },
    "expEnergy24": {
      "type": "object",
      "properties": {}
    },
    "files": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "folder": {
      "type": "string"
    },
    "historicalDataMigration": {
      "type": "number"
    },
    "key": {
      "type": "string"
    },
    "keyAction": {
      "type": "string"
    },
    "kwhPercent": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "netSuiteId": {
      "type": "string"
    },
    "ownerContact": {
      "type": "object",
      "properties": {
        "companyName": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "fullName": {
          "type": "string"
        },
        "key": {
          "type": "string"
        },
        "phoneNumber": {
          "type": "string"
        },
        "username": {
          "type": "string"
        }
      }
    },
    "siteType": {
      "type": "number"
    },
    "siteValidation": {
      "type": "number"
    },
    "standardSiteSetup": {
      "type": "number"
    }
  }
}
```

[Return to top](#apiprojectmanagement{site_id})

## Example

**Request:**

```http
GET /api/projectmanagement/S67109?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/S67109/administration/sitedeploymentstatus
```

**Response:**

```json
{
  "actEnergy24": null,
  "actions": null,
  "address": "1440 South Route 59",
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
  "deploymentStatus": 0,
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
  "key": "S67109",
  "keyAction": "",
  "kwhPercent": "NaN",
  "name": "Lowe's IL - 1711 - Naperville, IL",
  "netSuiteId": "87033",
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

[Return to top](#apiprojectmanagement{site_id})

