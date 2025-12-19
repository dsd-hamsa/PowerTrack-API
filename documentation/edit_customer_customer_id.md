# `/api/edit/customer/{customer_id}`

[← Back to Index](../README.md)



**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 3  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "salesforceAccountNumber": {
      "type": "string"
    },
    "tags": {
      "type": "object",
      "properties": {
        "powerDisplays": {
          "type": "array",
          "items": {
            "type": "unknown"
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
            "type": "unknown"
          }
        },
        "attributes": {
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
        }
      }
    },
    "netsuiteLink": {
      "type": "string"
    },
    "apiAccessTier": {
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
          "type": "integer"
        },
        "timeZone": {
          "type": "integer"
        },
        "latitude": {
          "type": "integer"
        }
      }
    },
    "newNote": {
      "type": "string"
    },
    "parentKey": {
      "type": "string"
    },
    "ts": {
      "type": "string"
    },
    "isInstaller": {
      "type": "boolean"
    },
    "willNotRenewData": {
      "type": "unknown"
    },
    "isCustomer": {
      "type": "boolean"
    },
    "cmmsConfiguration": {
      "type": "object",
      "properties": {
        "appId": {
          "type": "string"
        },
        "certificate": {
          "type": "string"
        },
        "customerId": {
          "type": "integer"
        },
        "username": {
          "type": "string"
        },
        "certificatePassword": {
          "type": "string"
        },
        "cmmsProvider": {
          "type": "integer"
        }
      }
    },
    "netsuiteName": {
      "type": "string"
    },
    "logo": {
      "type": "object",
      "properties": {
        "uri": {
          "type": "string"
        },
        "lastChanged": {
          "type": "unknown"
        },
        "name": {
          "type": "string"
        },
        "key": {
          "type": "string"
        },
        "contentType": {
          "type": "string"
        }
      }
    },
    "isDistributor": {
      "type": "boolean"
    },
    "name": {
      "type": "string"
    },
    "key": {
      "type": "string"
    },
    "companyCode": {
      "type": "string"
    },
    "netsuiteId": {
      "type": "string"
    }
  }
}
```

#### Example

**Request:**

```http
GET /api/edit/customer/C8458
Accept: application/json
Referer: https://www.alsoenergy.com
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "apiAccessTier": 0,
  "cmmsConfiguration": {
    "appId": "",
    "certificate": "",
    "certificatePassword": "",
    "cmmsProvider": 1,
    "customerId": 0,
    "username": ""
  },
  "companyCode": "H26MZjzw8Byf",
  "isCustomer": true,
  "isDistributor": true,
  "isInstaller": true,
  "key": "C8458",
  "location": {
    "address1": "200 Harborside Dr, Suite 200",
    "address2": "",
    "city": "Schenectady",
    "country": "USA",
    "elevation": 0,
    "elevationUnit": 0,
    "latitude": 0,
    "longitude": 0,
    "postalCode": "12305",
    "state": "NY",
    "timeZone": 0
  },
  "logo": {
    "contentType": "",
    "key": "F86940",
    "lastChanged": null,
    "name": "DSDstack_c-100.jpg",
    "uri": "/Content/DBFile?urltype=file&fidrev=F86940"
  },
  "name": "Distributed Solar Development",
  "netsuiteId": "85659",
  "netsuiteLink": "https://system.na1.netsuite.com/app/common/entity/custjob.nl?id=85659",
  "netsuiteName": "Distributed Solar Operations (DSO)",
  "newNote": "",
  "parentKey": "C2",
  "salesforceAccountNumber": "A-0097663",
  "tags": {
    "attributes": [],
    "key": "{\"ancestorKey\":\"C8458\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\"]}",
    "keywords": [],
    "lastChanged": null,
    "notes": [],
    "powerDisplays": []
  },
  "ts": "2023-11-01T20:51:32Z",
  "willNotRenewData": null
}
```

