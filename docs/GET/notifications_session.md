<a id="top"></a>
# /api/notifications/session

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200, 200, 200  

## Table of Contents

- [General](#general)
- [Example](#example)

## General

```json
{
  "type": "object",
  "properties": {
    "key": {
      "type": "string"
    },
    "lastChanged": {
      "type": "object",
      "properties": {}
    },
    "list": {
      "type": "object",
      "properties": {
        "accessFlags": {
          "type": "number"
        },
        "accessType": {
          "type": "number"
        },
        "accessWillNotRenew": {
          "type": "boolean"
        },
        "key": {
          "type": "number"
        },
        "lastChanged": {
          "type": "string"
        },
        "messaging": {
          "type": "string"
        },
        "siteKey": {
          "type": "string"
        },
        "siteName": {
          "type": "string"
        },
        "timeline": {
          "type": "object",
          "properties": {
            "activate": {
              "type": "string"
            },
            "check": {
              "type": "string"
            },
            "close": {
              "type": "string"
            },
            "create": {
              "type": "string"
            },
            "escalate": {
              "type": "string"
            },
            "flagsIO": {
              "type": "number"
            },
            "tZio": {
              "type": "number"
            }
          }
        }
      }
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/notifications/session?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 442641
referer: https://apps.alsoenergy.com/powertrack/C8458/overview/sites
```

**Response:**

```json
{
  "key": "session",
  "lastChanged": null,
  "list": [
    {
      "accessFlags": 2,
      "accessType": 1,
      "accessWillNotRenew": false,
      "key": 805316420,
      "lastChanged": "2026-02-24T20:10:38Z",
      "messaging": "Access",
      "siteKey": "S36066",
      "siteName": "Factory Pipe - Ukiah, CA",
      "timeline": {
        "activate": "2026-01-19T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2027-03-20T00:00:00Z",
        "create": "2021-03-20T00:00:00Z",
        "escalate": "2026-03-20T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 2,
      "accessType": 1,
      "accessWillNotRenew": false,
      "key": 805319580,
      "lastChanged": "2026-02-23T09:07:50Z",
      "messaging": "Access",
      "siteKey": "S39433",
      "siteName": "Crown Linen PV LLC",
      "timeline": {
        "activate": "2026-02-18T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2027-04-19T00:00:00Z",
        "create": "2017-04-19T00:00:00Z",
        "escalate": "2026-04-19T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 2,
      "accessType": 2,
      "accessWillNotRenew": false,
      "key": 805319581,
      "lastChanged": "2026-02-23T09:07:50Z",
      "messaging": "Access",
      "siteKey": "S39433",
      "siteName": "Crown Linen PV LLC",
      "timeline": {
        "activate": "2026-02-18T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2027-04-19T00:00:00Z",
        "create": "2017-04-19T00:00:00Z",
        "escalate": "2026-04-19T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 4,
      "accessType": 1,
      "accessWillNotRenew": false,
      "key": 805319651,
      "lastChanged": "2026-02-23T07:33:34Z",
      "messaging": "SUBSCRIPTION STATUS: TERMINATED\r\nYou are receiving this notice because the monitoring services for the \"Galaxy Theatre - Tulare, CA\" site was suspended on 4/22/2022. \r\nWe strongly recommend action to restore current data collection and avoid historical data loss.  \r\nTo renew your monitoring services, please contact the AlsoEnergy Renewal Team at renewals@alsoenergy.com, or by phone at (866) 303-5668.",
      "siteKey": "S39478",
      "siteName": "Galaxy Theatre - Tulare, CA",
      "timeline": {
        "activate": "2022-02-21T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2023-04-22T00:00:00Z",
        "create": "2017-04-22T00:00:00Z",
        "escalate": "2022-04-22T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 4,
      "accessType": 1,
      "accessWillNotRenew": false,
      "key": 805322984,
      "lastChanged": "2026-02-23T21:27:30Z",
      "messaging": "SUBSCRIPTION STATUS: EXPIRED\nYou are receiving this notice because the monitoring services for the \"Viking Industries\" site expired on 1/17/2024 and must be renewed before the termination date 1/17/2025. \nWe strongly recommend that immediate action be taken to avoid unnecessary service disruptions and loss of historical data.\nTo renew your monitoring services, please contact the AlsoEnergy Renewal Team at renewals@alsoenergy.com, or by phone at (866) 303-5668.",
      "siteKey": "S44564",
      "siteName": "Viking Industries",
      "timeline": {
        "activate": "2023-11-18T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2025-01-16T00:00:00Z",
        "create": "2019-01-17T00:00:00Z",
        "escalate": "2024-01-17T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 4,
      "accessType": 2,
      "accessWillNotRenew": false,
      "key": 805322985,
      "lastChanged": "2026-02-23T21:27:30Z",
      "messaging": "Access",
      "siteKey": "S44564",
      "siteName": "Viking Industries",
      "timeline": {
        "activate": "2023-11-18T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2025-01-16T00:00:00Z",
        "create": "2019-01-17T00:00:00Z",
        "escalate": "2024-01-17T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 4,
      "accessType": 1,
      "accessWillNotRenew": false,
      "key": 805328426,
      "lastChanged": "2026-02-24T05:32:00Z",
      "messaging": "Access",
      "siteKey": "S51637",
      "siteName": "Delta Electronics",
      "timeline": {
        "activate": "2024-10-01T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2025-11-30T00:00:00Z",
        "create": "2019-11-30T00:00:00Z",
        "escalate": "2024-11-30T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 2,
      "accessType": 1,
      "accessWillNotRenew": false,
      "key": 805331694,
      "lastChanged": "2026-02-25T09:52:22Z",
      "messaging": "Access",
      "siteKey": "S52377",
      "siteName": "152 - IKEA Nottingham (Baltimore Carports, DSD)",
      "timeline": {
        "activate": "2026-01-22T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2027-03-23T00:00:00Z",
        "create": "2020-03-23T00:00:00Z",
        "escalate": "2026-03-23T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 2,
      "accessType": 2,
      "accessWillNotRenew": false,
      "key": 805331695,
      "lastChanged": "2026-02-25T09:52:22Z",
      "messaging": "Access",
      "siteKey": "S52377",
      "siteName": "152 - IKEA Nottingham (Baltimore Carports, DSD)",
      "timeline": {
        "activate": "2026-01-22T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2027-03-23T00:00:00Z",
        "create": "2020-03-23T00:00:00Z",
        "escalate": "2026-03-23T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 2,
      "accessType": 1,
      "accessWillNotRenew": false,
      "key": 805334146,
      "lastChanged": "2026-02-24T09:09:55Z",
      "messaging": "Access",
      "siteKey": "S52547",
      "siteName": "Verizon - Branchburg",
      "timeline": {
        "activate": "2026-02-13T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2027-04-14T00:00:00Z",
        "create": "2020-04-14T00:00:00Z",
        "escalate": "2026-04-14T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 2,
      "accessType": 2,
      "accessWillNotRenew": false,
      "key": 805362146,
      "lastChanged": "2026-02-24T09:09:55Z",
      "messaging": "Access",
      "siteKey": "S52547",
      "siteName": "Verizon - Branchburg",
      "timeline": {
        "activate": "2026-02-13T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2027-04-14T00:00:00Z",
        "create": "2020-04-14T00:00:00Z",
        "escalate": "2026-04-14T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    }
  ]
}
```

[Return to top](#top)

