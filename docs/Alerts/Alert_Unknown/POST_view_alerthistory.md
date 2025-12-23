<a id="top"></a>
# /api/view/alerthistory

[← Back to Index](../logs.md)

**Methods:** POST  
**Status Codes:** 200  

## Table of Contents

- [Payload Structure](#payload-structure)
- [Alert Type: General](#alert-type-general)
- [Example](#example)

## Payload Structure

```json
{
  "type": "object",
  "properties": {
    "from": {
      "type": "string"
    },
    "key": {
      "type": "string"
    },
    "offset": {
      "type": "number"
    },
    "to": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## Alert Type: General

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
    "list": {
      "type": "object",
      "properties": {
        "acknowledgedAt": {
          "type": "string"
        },
        "acknowledgedByName": {
          "type": "string"
        },
        "alertId": {
          "type": "string"
        },
        "alertTriggerId": {
          "type": "number"
        },
        "assetCode": {
          "type": "string"
        },
        "canControl": {
          "type": "boolean"
        },
        "canEdit": {
          "type": "boolean"
        },
        "canManage": {
          "type": "boolean"
        },
        "capacity": {
          "type": "object",
          "properties": {}
        },
        "category": {
          "type": "number"
        },
        "delta": {
          "type": "number"
        },
        "description": {
          "type": "string"
        },
        "end": {
          "type": "object",
          "properties": {}
        },
        "eventCode": {
          "type": "string"
        },
        "hardwareIcon": {
          "type": "string"
        },
        "hardwareKey": {
          "type": "string"
        },
        "hardwareName": {
          "type": "string"
        },
        "impact": {
          "type": "number"
        },
        "impactCode": {
          "type": "number"
        },
        "isAcknowledged": {
          "type": "boolean"
        },
        "isResolved": {
          "type": "boolean"
        },
        "key": {
          "type": "string"
        },
        "lastAcknowledgedBy": {
          "type": "string"
        },
        "lastChanged": {
          "type": "string"
        },
        "lastNoteKey": {
          "type": "string"
        },
        "lastResolvedBy": {
          "type": "string"
        },
        "lastServiceRequestId": {
          "type": "string"
        },
        "lastServiceRequestKey": {
          "type": "string"
        },
        "lastWorkOrderId": {
          "type": "string"
        },
        "lastWorkOrderKey": {
          "type": "string"
        },
        "level": {
          "type": "number"
        },
        "lossKwh": {
          "type": "string"
        },
        "lossKwhPerDay": {
          "type": "string"
        },
        "lossMoney": {
          "type": "string"
        },
        "lossMoneyPerDay": {
          "type": "string"
        },
        "lossMoneyUnit": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "priorityCode": {
          "type": "number"
        },
        "resolvedByName": {
          "type": "string"
        },
        "resolvedTime": {
          "type": "object",
          "properties": {}
        },
        "severity": {
          "type": "number"
        },
        "siteKey": {
          "type": "string"
        },
        "siteName": {
          "type": "string"
        },
        "start": {
          "type": "string"
        },
        "subtitle": {
          "type": "string"
        },
        "triggerTime": {
          "type": "string"
        },
        "tz": {
          "type": "string"
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
POST /api/view/alerthistory?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: e4dcd1
referer: https://apps.alsoenergy.com/powertrack/H488308/operations/alerts
```

**Payload:**

```json
{
  "from": "2025-12-22",
  "key": "H488308",
  "offset": 480,
  "to": "2025-12-22"
}
```

**Response:**

```json
{
  "key": "H488308",
  "lastChanged": "2025-12-22T23:25:38Z",
  "list": [
    {
      "acknowledgedAt": "2025-10-02T17:59:00Z",
      "acknowledgedByName": "Adrienne Peters",
      "alertId": "119835157",
      "alertTriggerId": 1574653,
      "assetCode": "DA",
      "canControl": false,
      "canEdit": true,
      "canManage": true,
      "capacity": null,
      "category": 2,
      "delta": 0,
      "description": "This error may be the result of one of the following:\t 1. Wiring problem between the device and the gateway.",
      "end": null,
      "eventCode": "250 - Device communication",
      "hardwareIcon": "https://www.alsoenergy.com/pub/Images/Unknown.png",
      "hardwareKey": "H488308",
      "hardwareName": "SMA Data Manager",
      "impact": 0,
      "impactCode": 0,
      "isAcknowledged": true,
      "isResolved": false,
      "key": "x73248a1c",
      "lastAcknowledgedBy": "U26704",
      "lastChanged": "2025-12-22T23:25:38Z",
      "lastNoteKey": "",
      "lastResolvedBy": "",
      "lastServiceRequestId": "0",
      "lastServiceRequestKey": "",
      "lastWorkOrderId": "0",
      "lastWorkOrderKey": "",
      "level": 0,
      "lossKwh": "NaN",
      "lossKwhPerDay": "NaN",
      "lossMoney": "NaN",
      "lossMoneyPerDay": "NaN",
      "lossMoneyUnit": 0,
      "name": "SMA Data Manager at THD - 984 Newton is not responding",
      "priorityCode": 0,
      "resolvedByName": "",
      "resolvedTime": null,
      "severity": 4,
      "siteKey": "S64641",
      "siteName": "THD - 984 Newton",
      "start": "2025-05-15T16:49:59Z",
      "subtitle": "",
      "triggerTime": "2025-05-15T17:20:23Z",
      "tz": "US/Eastern"
    }
  ]
}
```

[Return to top](#top)

