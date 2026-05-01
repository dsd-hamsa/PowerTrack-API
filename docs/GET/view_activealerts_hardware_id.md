<a id="top"></a>
# /api/view/activealerts/{hardware_id}

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
    "enableProductionImpact": {
      "type": "boolean"
    },
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
          "type": "object",
          "properties": {}
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
          "type": "number"
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
    },
    "merge": {
      "type": "boolean"
    },
    "mergeHash": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/view/activealerts/H266825?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 05fc89
referer: https://apps.alsoenergy.com/powertrack/H266825/operations/alerts
```

**Response:**

```json
{
  "enableProductionImpact": false,
  "key": "H266825",
  "lastChanged": "2026-04-30T18:45:56Z",
  "list": [
    {
      "acknowledgedAt": null,
      "acknowledgedByName": "",
      "alertId": "149836674",
      "alertTriggerId": 1107741,
      "assetCode": "UNK",
      "canControl": false,
      "canEdit": true,
      "canManage": true,
      "capacity": 50,
      "category": 3,
      "delta": 0,
      "description": "Warning",
      "end": null,
      "eventCode": "418 - SMA Inverter  / Cluster controller",
      "hardwareIcon": "https://www.alsoenergy.com/pub/Images/Device/2125.png",
      "hardwareKey": "H266825",
      "hardwareName": "Inv 24 (50kW) SMA STP Core-1 50US",
      "impact": 0,
      "impactCode": 2,
      "isAcknowledged": false,
      "isResolved": false,
      "key": "x74ee538a",
      "lastAcknowledgedBy": "",
      "lastChanged": "2026-04-30T12:11:34Z",
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
      "name": "Faults detected at THD - Baltimore Dist - 5830 Tiger: Inv 24 (50kW) SMA STP Core-1 50US",
      "priorityCode": 0,
      "resolvedByName": "",
      "resolvedTime": null,
      "severity": 5,
      "siteKey": "S54599",
      "siteName": "THD - Baltimore Dist - 5830 Tiger",
      "start": "2026-04-30T11:11:07Z",
      "subtitle": "",
      "triggerTime": "2026-04-30T12:11:34Z",
      "tz": "US/Eastern"
    }
  ],
  "merge": false,
  "mergeHash": ""
}
```

[Return to top](#top)

