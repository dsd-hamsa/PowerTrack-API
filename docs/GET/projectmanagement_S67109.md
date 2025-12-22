# /api/projectmanagement/S67109

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
    "netSuiteId": {
      "type": "string"
    },
    "address": {
      "type": "string"
    },
    "alsoEnergyContact": {
      "type": "object",
      "properties": {
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
        },
        "phoneNumber": {
          "type": "string"
        },
        "companyName": {
          "type": "string"
        }
      }
    },
    "ownerContact": {
      "type": "object",
      "properties": {
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
        },
        "phoneNumber": {
          "type": "string"
        },
        "companyName": {
          "type": "string"
        }
      }
    },
    "epcContact": {
      "type": "object",
      "properties": {
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
        },
        "phoneNumber": {
          "type": "string"
        },
        "companyName": {
          "type": "string"
        }
      }
    },
    "certifiedByKey": {
      "type": "string"
    },
    "approvedByKey": {
      "type": "string"
    },
    "files": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "key": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "deploymentStatus": {
      "type": "number"
    },
    "actions": {
      "type": "object"
    },
    "blockedTags": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "keyAction": {
      "type": "string"
    },
    "standardSiteSetup": {
      "type": "number"
    },
    "advancedSiteConfig": {
      "type": "number"
    },
    "historicalDataMigration": {
      "type": "number"
    },
    "siteValidation": {
      "type": "number"
    },
    "folder": {
      "type": "string"
    },
    "estimatedCommissioningDate": {
      "type": "object"
    },
    "actEnergy24": {
      "type": "object"
    },
    "expEnergy24": {
      "type": "object"
    },
    "siteType": {
      "type": "number"
    },
    "kwhPercent": {
      "type": "string"
    }
  }
}
```

[Return to top](#apiprojectmanagements67109)

## Example

**Request:**

```http
GET /api/projectmanagement/S67109?lastChanged=1900-01-01T00:00:00.000Z
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/S67109/administration/sitedeploymentstatus
```

**Response:**

```json
{
  "netSuiteId": "87033",
  "address": "1440 South Route 59",
  "alsoEnergyContact": {
    "key": "",
    "username": "a",
    "fullName": " AlsoEnergy person",
    "email": "someemailaddress@anplace.com",
    "phoneNumber": "234-421-2526",
    "companyName": ""
  },
  "ownerContact": {
    "key": "",
    "username": "b",
    "fullName": "Owner Person",
    "email": "someemailaddress@anplace.com",
    "phoneNumber": "234-421-2526",
    "companyName": "Sun Puns Inc."
  },
  "epcContact": {
    "key": "",
    "username": "c",
    "fullName": " EPC person",
    "email": "someemailaddress@anplace.com",
    "phoneNumber": "234-421-2526",
    "companyName": "Sun Puns To the Max Inc."
  },
  "certifiedByKey": "",
  "approvedByKey": "",
  "files": [],
  "key": "S67109",
  "name": "Lowe's IL - 1711 - Naperville, IL",
  "deploymentStatus": 0,
  "actions": null,
  "blockedTags": [],
  "keyAction": "",
  "standardSiteSetup": 1,
  "advancedSiteConfig": 0,
  "historicalDataMigration": 0,
  "siteValidation": 1,
  "folder": "0",
  "estimatedCommissioningDate": null,
  "actEnergy24": null,
  "expEnergy24": null,
  "siteType": 0,
  "kwhPercent": "NaN"
}
```

[Return to top](#apiprojectmanagements67109)

