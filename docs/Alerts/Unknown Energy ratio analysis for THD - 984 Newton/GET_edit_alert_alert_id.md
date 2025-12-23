<a id="top"></a>
# /api/edit/alert/{alert_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [Alert Type: General](#alert-type-general)
- [Example](#example)

## Alert Type: General

```json
{
  "type": "object",
  "properties": {
    "acknowledgedAt": {
      "type": "object",
      "properties": {}
    },
    "acknowledgedByName": {
      "type": "string"
    },
    "alertConfigId": {
      "type": "string"
    },
    "alertId": {
      "type": "string"
    },
    "assignedTo": {
      "type": "string"
    },
    "capacity": {
      "type": "object",
      "properties": {}
    },
    "capacityKw": {
      "type": "object",
      "properties": {}
    },
    "description": {
      "type": "string"
    },
    "end": {
      "type": "object",
      "properties": {}
    },
    "eventCode": {
      "type": "number"
    },
    "eventName": {
      "type": "string"
    },
    "hardwareKey": {
      "type": "string"
    },
    "impact": {
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
    "lastData": {
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
    "lastSuccess": {
      "type": "object",
      "properties": {}
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
    "message": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "newNote": {
      "type": "string"
    },
    "power": {
      "type": "number"
    },
    "powerAvg15": {
      "type": "number"
    },
    "query": {
      "type": "object",
      "properties": {}
    },
    "reminder": {
      "type": "boolean"
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
    "start": {
      "type": "string"
    },
    "systemSize": {
      "type": "number"
    },
    "systemSizeDc": {
      "type": "number"
    },
    "trackLoss": {
      "type": "boolean"
    },
    "triggerTime": {
      "type": "string"
    },
    "ts": {
      "type": "string"
    },
    "tz": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/edit/alert/x744707cf
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/S64641/operations/alerts
```

**Response:**

```json
{
  "acknowledgedAt": null,
  "acknowledgedByName": "",
  "alertConfigId": "1847903",
  "alertId": "138872775",
  "assignedTo": "",
  "capacity": null,
  "capacityKw": null,
  "description": "Energy ratio analysis for THD - 984 Newton\r\nInv 1 (62.5 kW) SMA TriPower Core 1: no energy produced.\t Inv 2 (62.5 kW) SMA TriPower Core 1: no energy produced.",
  "end": null,
  "eventCode": 1188,
  "eventName": "Inverter Energy Ratio",
  "hardwareKey": "",
  "impact": 0,
  "isAcknowledged": false,
  "isResolved": false,
  "key": "x744707cf",
  "lastAcknowledgedBy": "",
  "lastData": "",
  "lastNoteKey": "",
  "lastResolvedBy": "",
  "lastServiceRequestId": "0",
  "lastServiceRequestKey": "",
  "lastSuccess": null,
  "lastWorkOrderId": "0",
  "lastWorkOrderKey": "",
  "level": 2,
  "lossKwh": "NaN",
  "lossKwhPerDay": "NaN",
  "lossMoney": "NaN",
  "lossMoneyPerDay": "NaN",
  "lossMoneyUnit": 0,
  "message": "Inv 1 (62.5 kW) SMA TriPower Core 1: no energy produced.\nInv 2 (62.5 kW) SMA TriPower Core 1: no energy produced.\nInv 3 (62.5 kW) SMA TriPower Core 1: no energy produced.\nInv 4 (62.5 kW) SMA TriPower Core 1: no energy produced.\nInv 5 (62.5 kW) SMA TriPower Core 1: no energy produced.\nInv 6 (62.5 kW) SMA TriPower Core 1: no energy produced.\nInv 7 (62.5 kW) SMA TriPower Core 1: no energy produced.",
  "name": "Energy ratio analysis for THD - 984 Newton",
  "newNote": "",
  "power": 1.545852780342102,
  "powerAvg15": 1.9201899766921997,
  "query": null,
  "reminder": false,
  "resolvedTime": null,
  "severity": 5,
  "siteKey": "S64641",
  "start": "2025-12-22T22:23:43Z",
  "systemSize": 437.5,
  "systemSizeDc": 602.2999877929688,
  "trackLoss": false,
  "triggerTime": "2025-12-22T22:23:51Z",
  "ts": "2025-12-22T22:23:51Z",
  "tz": "US/Eastern"
}
```

[Return to top](#top)

