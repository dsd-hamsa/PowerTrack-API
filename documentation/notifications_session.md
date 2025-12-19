# Endpoint 21

[← Back to Index](../README.md)


### `/api/notifications/session`

**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 1  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "lastChanged": {
      "type": "unknown"
    },
    "list": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {}
      }
    },
    "key": {
      "type": "string"
    }
  }
}
```

#### Example

**Request:**

```http
GET /api/notifications/session?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "key": "session",
  "lastChanged": null,
  "list": [
    {
      "accessFlags": 3,
      "accessType": 1,
      "accessWillNotRenew": false,
      "key": 805308910,
      "lastChanged": "2025-11-06T03:08:51Z",
      "messaging": "Access",
      "siteKey": "S35181",
      "siteName": "GE Service Center - Anaheim, CA",
      "timeline": {
        "activate": "2025-05-16T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2026-07-15T00:00:00Z",
        "create": "2020-07-15T00:00:00Z",
        "escalate": "2025-07-15T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 4,
      "accessType": 1,
      "accessWillNotRenew": false,
      "key": 805310422,
      "lastChanged": "2025-12-19T15:19:45Z",
      "messaging": "SUBSCRIPTION STATUS: EXPIRED\r\nYou are receiving this notice because the monitoring services for the \"GE BLT - Stamford, CT\" site have expired on 12/24/2022 and must be renewed before the termination date. \r\nWe strongly recommend that immediate action be taken to avoid unnecessary service disruptions and loss of historical data. \r\nTo renew your monitoring services, please contact the AlsoEnergy Renewal Team at renewals@alsoenergy.com, or by phone at (866) 303-5668.",
      "siteKey": "S38992",
      "siteName": "GE BLT - Stamford, CT",
      "timeline": {
        "activate": "2022-10-25T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2023-12-24T00:00:00Z",
        "create": "2016-12-25T00:00:00Z",
        "escalate": "2022-12-24T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 4,
      "accessType": 2,
      "accessWillNotRenew": false,
      "key": 805319434,
      "lastChanged": "2025-12-19T15:19:45Z",
      "messaging": "SUBSCRIPTION STATUS: EXPIRED\r\nYou are receiving this notice because the Cell Modem Data services for the \"GE BLT - Stamford, CT\" site have expired on 12/24/2022 and must be renewed before the termination date. \r\nWe strongly recommend that immediate action be taken to avoid unnecessary service disruptions and loss of historical data. \r\nTo renew your monitoring services, please contact the AlsoEnergy Renewal Team at renewals@alsoenergy.com, or by phone at (866) 303-5668.",
      "siteKey": "S38992",
      "siteName": "GE BLT - Stamford, CT",
      "timeline": {
        "activate": "2022-10-25T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2023-12-24T00:00:00Z",
        "create": "2016-12-25T00:00:00Z",
        "escalate": "2022-12-24T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 4,
      "accessType": 1,
      "accessWillNotRenew": false,
      "key": 805319651,
      "lastChanged": "2025-12-19T15:42:57Z",
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
      "key": 805321627,
      "lastChanged": "2025-12-19T17:17:12Z",
      "messaging": "SUBSCRIPTION STATUS: EXPIRED\r\nYou are receiving this notice because the monitoring services for the \"Trane - Columbia, SC\" site have expired on 4/4/2023 and must be renewed before the termination date. \r\nWe strongly recommend that immediate action be taken to avoid unnecessary service disruptions and loss of historical data. \r\nTo renew your monitoring services, please contact the AlsoEnergy Renewal Team at renewals@alsoenergy.com, or by phone at (866) 303-5668.",
      "siteKey": "S41348",
      "siteName": "Trane - Columbia, SC",
      "timeline": {
        "activate": "2023-02-03T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2024-04-03T00:00:00Z",
        "create": "2018-04-04T00:00:00Z",
        "escalate": "2023-04-04T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 4,
      "accessType": 2,
      "accessWillNotRenew": false,
      "key": 805321628,
      "lastChanged": "2025-12-19T17:17:13Z",
      "messaging": "SUBSCRIPTION STATUS: EXPIRED\r\nYou are receiving this notice because the Cell Modem Data services for the \"Trane - Columbia, SC\" site have expired on 4/4/2023 and must be renewed before the termination date. \r\nWe strongly recommend that immediate action be taken to avoid unnecessary service disruptions and loss of historical data. \r\nTo renew your monitoring services, please contact the AlsoEnergy Renewal Team at renewals@alsoenergy.com, or by phone at (866) 303-5668.",
      "siteKey": "S41348",
      "siteName": "Trane - Columbia, SC",
      "timeline": {
        "activate": "2023-02-03T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2024-04-03T00:00:00Z",
        "create": "2018-04-04T00:00:00Z",
        "escalate": "2023-04-04T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 4,
      "accessType": 1,
      "accessWillNotRenew": false,
      "key": 805322984,
      "lastChanged": "2025-12-19T08:30:40Z",
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
      "lastChanged": "2025-12-19T08:30:41Z",
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
      "accessFlags": 2,
      "accessType": 1,
      "accessWillNotRenew": false,
      "key": 805323261,
      "lastChanged": "2025-12-19T08:43:44Z",
      "messaging": "Access",
      "siteKey": "S44780",
      "siteName": "GE Hitachi - CA",
      "timeline": {
        "activate": "2025-11-04T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2027-01-03T00:00:00Z",
        "create": "2019-01-03T00:00:00Z",
        "escalate": "2026-01-03T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 2,
      "accessType": 2,
      "accessWillNotRenew": false,
      "key": 805323262,
      "lastChanged": "2025-12-19T08:43:44Z",
      "messaging": "Access",
      "siteKey": "S44780",
      "siteName": "GE Hitachi - CA",
      "timeline": {
        "activate": "2025-11-04T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2027-01-03T00:00:00Z",
        "create": "2019-01-03T00:00:00Z",
        "escalate": "2026-01-03T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 4,
      "accessType": 1,
      "accessWillNotRenew": false,
      "key": 805328426,
      "lastChanged": "2025-12-14T08:55:32Z",
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
      "accessFlags": 3,
      "accessType": 1,
      "accessWillNotRenew": false,
      "key": 805328933,
      "lastChanged": "2025-12-19T08:36:53Z",
      "messaging": "Access",
      "siteKey": "S44664",
      "siteName": "MartinBrookPV LLC",
      "timeline": {
        "activate": "2025-10-13T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2026-12-12T00:00:00Z",
        "create": "2023-12-12T00:00:00Z",
        "escalate": "2025-12-12T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 3,
      "accessType": 2,
      "accessWillNotRenew": false,
      "key": 805328934,
      "lastChanged": "2025-12-19T08:36:53Z",
      "messaging": "Access",
      "siteKey": "S44664",
      "siteName": "MartinBrookPV LLC",
      "timeline": {
        "activate": "2025-10-13T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2026-12-12T00:00:00Z",
        "create": "2023-12-12T00:00:00Z",
        "escalate": "2025-12-12T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 3,
      "accessType": 2,
      "accessWillNotRenew": false,
      "key": 805329462,
      "lastChanged": "2025-11-06T03:08:51Z",
      "messaging": "Access",
      "siteKey": "S35181",
      "siteName": "GE Service Center - Anaheim, CA",
      "timeline": {
        "activate": "2025-05-16T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2026-07-15T00:00:00Z",
        "create": "2020-07-15T00:00:00Z",
        "escalate": "2025-07-15T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 2,
      "accessType": 1,
      "accessWillNotRenew": false,
      "key": 805329829,
      "lastChanged": "2025-12-14T09:04:21Z",
      "messaging": "Access",
      "siteKey": "S51810",
      "siteName": "THD - Linden, NJ - (Store #934)",
      "timeline": {
        "activate": "2025-11-13T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2027-01-12T00:00:00Z",
        "create": "2020-01-12T00:00:00Z",
        "escalate": "2026-01-12T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 2,
      "accessType": 2,
      "accessWillNotRenew": false,
      "key": 805329830,
      "lastChanged": "2025-12-14T09:04:22Z",
      "messaging": "Access",
      "siteKey": "S51810",
      "siteName": "THD - Linden, NJ - (Store #934)",
      "timeline": {
        "activate": "2025-11-13T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2027-01-12T00:00:00Z",
        "create": "2020-01-12T00:00:00Z",
        "escalate": "2026-01-12T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 2,
      "accessType": 1,
      "accessWillNotRenew": false,
      "key": 805329864,
      "lastChanged": "2025-12-14T09:04:27Z",
      "messaging": "Access",
      "siteKey": "S51811",
      "siteName": "THD - Passaic, NJ - (Store #950)",
      "timeline": {
        "activate": "2025-11-14T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2027-01-13T00:00:00Z",
        "create": "2020-01-13T00:00:00Z",
        "escalate": "2026-01-13T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 2,
      "accessType": 2,
      "accessWillNotRenew": false,
      "key": 805329865,
      "lastChanged": "2025-12-14T09:04:29Z",
      "messaging": "Access",
      "siteKey": "S51811",
      "siteName": "THD - Passaic, NJ - (Store #950)",
      "timeline": {
        "activate": "2025-11-14T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2027-01-13T00:00:00Z",
        "create": "2020-01-13T00:00:00Z",
        "escalate": "2026-01-13T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 2,
      "accessType": 1,
      "accessWillNotRenew": false,
      "key": 805329870,
      "lastChanged": "2025-12-14T09:04:14Z",
      "messaging": "Access",
      "siteKey": "S51808",
      "siteName": "THD - West Windsor, NJ - (Store #921)",
      "timeline": {
        "activate": "2025-11-14T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2027-01-13T00:00:00Z",
        "create": "2020-01-13T00:00:00Z",
        "escalate": "2026-01-13T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 2,
      "accessType": 2,
      "accessWillNotRenew": false,
      "key": 805329871,
      "lastChanged": "2025-12-14T09:04:14Z",
      "messaging": "Access",
      "siteKey": "S51808",
      "siteName": "THD - West Windsor, NJ - (Store #921)",
      "timeline": {
        "activate": "2025-11-14T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2027-01-13T00:00:00Z",
        "create": "2020-01-13T00:00:00Z",
        "escalate": "2026-01-13T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 2,
      "accessType": 1,
      "accessWillNotRenew": false,
      "key": 805329872,
      "lastChanged": "2025-12-14T09:03:59Z",
      "messaging": "Access",
      "siteKey": "S51803",
      "siteName": "THD - Lodi, NJ - (Store #932_",
      "timeline": {
        "activate": "2025-11-14T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2027-01-13T00:00:00Z",
        "create": "2020-01-13T00:00:00Z",
        "escalate": "2026-01-13T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 2,
      "accessType": 2,
      "accessWillNotRenew": false,
      "key": 805329873,
      "lastChanged": "2025-12-14T09:03:59Z",
      "messaging": "Access",
      "siteKey": "S51803",
      "siteName": "THD - Lodi, NJ - (Store #932_",
      "timeline": {
        "activate": "2025-11-14T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2027-01-13T00:00:00Z",
        "create": "2020-01-13T00:00:00Z",
        "escalate": "2026-01-13T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 2,
      "accessType": 1,
      "accessWillNotRenew": false,
      "key": 805329874,
      "lastChanged": "2025-12-14T09:04:11Z",
      "messaging": "Access",
      "siteKey": "S51807",
      "siteName": "THD - Phillipsburg, NJ- (Store #931)",
      "timeline": {
        "activate": "2025-11-14T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2027-01-13T00:00:00Z",
        "create": "2020-01-13T00:00:00Z",
        "escalate": "2026-01-13T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 2,
      "accessType": 2,
      "accessWillNotRenew": false,
      "key": 805329875,
      "lastChanged": "2025-12-14T09:04:11Z",
      "messaging": "Access",
      "siteKey": "S51807",
      "siteName": "THD - Phillipsburg, NJ- (Store #931)",
      "timeline": {
        "activate": "2025-11-14T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2027-01-13T00:00:00Z",
        "create": "2020-01-13T00:00:00Z",
        "escalate": "2026-01-13T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 2,
      "accessType": 1,
      "accessWillNotRenew": false,
      "key": 805329882,
      "lastChanged": "2025-12-14T09:04:34Z",
      "messaging": "Access",
      "siteKey": "S51812",
      "siteName": "THD - Secaucus, NJ - (Store #910)",
      "timeline": {
        "activate": "2025-11-14T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2027-01-13T00:00:00Z",
        "create": "2020-01-13T00:00:00Z",
        "escalate": "2026-01-13T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 2,
      "accessType": 2,
      "accessWillNotRenew": false,
      "key": 805329883,
      "lastChanged": "2025-12-14T09:04:35Z",
      "messaging": "Access",
      "siteKey": "S51812",
      "siteName": "THD - Secaucus, NJ - (Store #910)",
      "timeline": {
        "activate": "2025-11-14T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2027-01-13T00:00:00Z",
        "create": "2020-01-13T00:00:00Z",
        "escalate": "2026-01-13T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 2,
      "accessType": 1,
      "accessWillNotRenew": false,
      "key": 805337652,
      "lastChanged": "2025-12-13T01:23:17Z",
      "messaging": "Access",
      "siteKey": "S55360",
      "siteName": "Verizon - Lake Mary",
      "timeline": {
        "activate": "2025-10-15T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2026-12-14T00:00:00Z",
        "create": "2020-12-14T00:00:00Z",
        "escalate": "2025-12-14T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 2,
      "accessType": 2,
      "accessWillNotRenew": false,
      "key": 805337653,
      "lastChanged": "2025-12-13T01:23:18Z",
      "messaging": "Access",
      "siteKey": "S55360",
      "siteName": "Verizon - Lake Mary",
      "timeline": {
        "activate": "2025-10-15T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2026-12-14T00:00:00Z",
        "create": "2020-12-14T00:00:00Z",
        "escalate": "2025-12-14T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 2,
      "accessType": 1,
      "accessWillNotRenew": false,
      "key": 805338634,
      "lastChanged": "2025-12-12T19:01:51Z",
      "messaging": "Access",
      "siteKey": "S56020",
      "siteName": "OLS38 West Methven",
      "timeline": {
        "activate": "2025-11-19T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2027-01-18T00:00:00Z",
        "create": "2021-01-18T00:00:00Z",
        "escalate": "2026-01-18T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    },
    {
      "accessFlags": 2,
      "accessType": 2,
      "accessWillNotRenew": false,
      "key": 805338635,
      "lastChanged": "2025-12-12T19:01:52Z",
      "messaging": "Access",
      "siteKey": "S56020",
      "siteName": "OLS38 West Methven",
      "timeline": {
        "activate": "2025-11-19T00:00:00Z",
        "check": "9999-12-31T23:59:59.9999999",
        "close": "2027-01-18T00:00:00Z",
        "create": "2021-01-18T00:00:00Z",
        "escalate": "2026-01-18T00:00:00Z",
        "flagsIO": 16,
        "tZio": 10745
      }
    }
  ]
}
```

