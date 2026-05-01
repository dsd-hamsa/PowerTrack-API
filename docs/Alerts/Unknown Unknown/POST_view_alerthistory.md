<a id="top"></a>
# /api/view/alerthistory

[← Back to Index](../logs.md)

**Methods:** POST  
**Status Codes:** 200, 200  

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
ae_v: 05fc89
referer: https://apps.alsoenergy.com/powertrack/S54599/operations/alerts
```

**Payload:**

```json
{
  "from": "2026-04-30",
  "key": "S54599",
  "offset": 420,
  "to": "2026-04-30"
}
```

**Response:**

```json
{
  "key": "S54599",
  "lastChanged": "2026-04-30T17:21:45Z",
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
    },
    {
      "acknowledgedAt": null,
      "acknowledgedByName": "",
      "alertId": "140645779",
      "alertTriggerId": 1107711,
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
      "hardwareKey": "H266810",
      "hardwareName": "Inv 9 (50kW) SMA STP Core-1 50US",
      "impact": 0,
      "impactCode": 2,
      "isAcknowledged": false,
      "isResolved": false,
      "key": "x7462159b",
      "lastAcknowledgedBy": "",
      "lastChanged": "2026-04-30T17:04:31Z",
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
      "name": "Faults detected at THD - Baltimore Dist - 5830 Tiger: Inv 9 (50kW) SMA STP Core-1 50US",
      "priorityCode": 0,
      "resolvedByName": "",
      "resolvedTime": null,
      "severity": 5,
      "siteKey": "S54599",
      "siteName": "THD - Baltimore Dist - 5830 Tiger",
      "start": "2026-04-30T16:03:44Z",
      "subtitle": "",
      "triggerTime": "2026-04-30T17:04:31Z",
      "tz": "US/Eastern"
    },
    {
      "acknowledgedAt": null,
      "acknowledgedByName": "",
      "alertId": "149922653",
      "alertTriggerId": 1107719,
      "assetCode": "INV",
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
      "hardwareKey": "H266814",
      "hardwareName": "Inv 13 (50kW) SMA STP Core-1 50US",
      "impact": 0,
      "impactCode": 2,
      "isAcknowledged": false,
      "isResolved": false,
      "key": "x74efa365",
      "lastAcknowledgedBy": "",
      "lastChanged": "2026-04-30T17:21:45Z",
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
      "name": "Faults detected at THD - Baltimore Dist - 5830 Tiger: Inv 13 (50kW) SMA STP Core-1 50US",
      "priorityCode": 0,
      "resolvedByName": "",
      "resolvedTime": null,
      "severity": 5,
      "siteKey": "S54599",
      "siteName": "THD - Baltimore Dist - 5830 Tiger",
      "start": "2026-04-30T16:20:36Z",
      "subtitle": "",
      "triggerTime": "2026-04-30T17:21:45Z",
      "tz": "US/Eastern"
    },
    {
      "acknowledgedAt": "2025-10-01T16:26:00Z",
      "acknowledgedByName": "Adrienne Peters",
      "alertId": "125363266",
      "alertTriggerId": 1267955,
      "assetCode": "INV",
      "canControl": false,
      "canEdit": true,
      "canManage": true,
      "capacity": 50,
      "category": 5,
      "delta": 0,
      "description": "Checking production against available sunlight for 'Inv 13 (50kW) SMA STP Core-1 50US' and 'Virtual WS (Home Depot # 5829)' (time difference: 49.8 seconds)\t Irradiance: 803.000 w/m^2  (Threshold = 90.1)",
      "end": "2026-04-30T16:21:58Z",
      "eventCode": "362 - Inverter / irradiance check",
      "hardwareIcon": "https://www.alsoenergy.com/pub/Images/Device/2125.png",
      "hardwareKey": "H266814",
      "hardwareName": "Inv 13 (50kW) SMA STP Core-1 50US",
      "impact": 0,
      "impactCode": 2,
      "isAcknowledged": true,
      "isResolved": true,
      "key": "x7378e449",
      "lastAcknowledgedBy": "U26704",
      "lastChanged": "2026-04-30T16:21:58Z",
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
      "name": "No production with available sunlight at THD - Baltimore Dist - 5830 Tiger / Inv 13 (50kW) SMA STP Core-1 50US",
      "priorityCode": 0,
      "resolvedByName": "Unable to verify name",
      "resolvedTime": "2026-04-30T16:21:58Z",
      "severity": 0,
      "siteKey": "S54599",
      "siteName": "THD - Baltimore Dist - 5830 Tiger",
      "start": "2025-07-15T16:36:26Z",
      "subtitle": "",
      "triggerTime": "2025-07-15T17:40:53Z",
      "tz": "US/Eastern"
    },
    {
      "acknowledgedAt": "2026-01-19T17:06:00Z",
      "acknowledgedByName": "Adrienne Peters",
      "alertId": "118399865",
      "alertTriggerId": 1267959,
      "assetCode": "INV",
      "canControl": false,
      "canEdit": true,
      "canManage": true,
      "capacity": 50,
      "category": 5,
      "delta": 0,
      "description": "Checking production against available sunlight for 'Inv 17 (50kW) SMA STP Core-1 50US' and 'Virtual WS (Home Depot # 5829)' (time difference: 98.1 seconds)\t Irradiance: 734.000 w/m^2  (Threshold = 90.1)",
      "end": "2026-04-30T16:04:35Z",
      "eventCode": "362 - Inverter / irradiance check",
      "hardwareIcon": "https://www.alsoenergy.com/pub/Images/Device/2125.png",
      "hardwareKey": "H266818",
      "hardwareName": "Inv 17 (50kW) SMA STP Core-1 50US",
      "impact": 0,
      "impactCode": 2,
      "isAcknowledged": true,
      "isResolved": true,
      "key": "x730ea380",
      "lastAcknowledgedBy": "U26704",
      "lastChanged": "2026-04-30T16:04:35Z",
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
      "name": "No production with available sunlight at THD - Baltimore Dist - 5830 Tiger / Inv 17 (50kW) SMA STP Core-1 50US",
      "priorityCode": 0,
      "resolvedByName": "Unable to verify name",
      "resolvedTime": "2026-04-30T16:04:35Z",
      "severity": 0,
      "siteKey": "S54599",
      "siteName": "THD - Baltimore Dist - 5830 Tiger",
      "start": "2025-07-20T18:23:22Z",
      "subtitle": "",
      "triggerTime": "2026-01-16T14:56:28Z",
      "tz": "US/Eastern"
    },
    {
      "acknowledgedAt": null,
      "acknowledgedByName": "",
      "alertId": "94262794",
      "alertTriggerId": 1267951,
      "assetCode": "INV",
      "canControl": false,
      "canEdit": true,
      "canManage": true,
      "capacity": 50,
      "category": 5,
      "delta": 0,
      "description": "Checking production against available sunlight for 'Inv 9 (50kW) SMA STP Core-1 50US' and 'Virtual WS (Home Depot # 5829)' (time difference: 13.7 seconds)\t Irradiance: 224.000 w/m^2  (Threshold = 90.1)",
      "end": "2026-04-30T16:54:47Z",
      "eventCode": "362 - Inverter / irradiance check",
      "hardwareIcon": "https://www.alsoenergy.com/pub/Images/Device/2125.png",
      "hardwareKey": "H266810",
      "hardwareName": "Inv 9 (50kW) SMA STP Core-1 50US",
      "impact": 0,
      "impactCode": 2,
      "isAcknowledged": false,
      "isResolved": true,
      "key": "x719e560f",
      "lastAcknowledgedBy": "",
      "lastChanged": "2026-04-30T16:54:47Z",
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
      "name": "No production with available sunlight at THD - Baltimore Dist - 5830 Tiger / Inv 9 (50kW) SMA STP Core-1 50US",
      "priorityCode": 0,
      "resolvedByName": "Unable to verify name",
      "resolvedTime": "2026-04-30T16:54:47Z",
      "severity": 0,
      "siteKey": "S54599",
      "siteName": "THD - Baltimore Dist - 5830 Tiger",
      "start": "2026-01-16T14:55:31Z",
      "subtitle": "",
      "triggerTime": "2026-04-30T16:04:19Z",
      "tz": "US/Eastern"
    },
    {
      "acknowledgedAt": "2026-01-19T17:06:00Z",
      "acknowledgedByName": "Adrienne Peters",
      "alertId": "140650773",
      "alertTriggerId": 1107710,
      "assetCode": "INV",
      "canControl": false,
      "canEdit": true,
      "canManage": true,
      "capacity": 50,
      "category": 2,
      "delta": 0,
      "description": "This error may be the result of one of the following:\t 1. Wiring problem between the device and the gateway.",
      "end": "2026-04-30T16:51:13Z",
      "eventCode": "250 - Device communication",
      "hardwareIcon": "https://www.alsoenergy.com/pub/Images/Device/2125.png",
      "hardwareKey": "H266810",
      "hardwareName": "Inv 9 (50kW) SMA STP Core-1 50US",
      "impact": 0,
      "impactCode": 2,
      "isAcknowledged": true,
      "isResolved": true,
      "key": "x7462291d",
      "lastAcknowledgedBy": "U26704",
      "lastChanged": "2026-04-30T16:51:13Z",
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
      "name": "Inv 9 (50kW) SMA STP Core-1 50US at THD - Baltimore Dist - 5830 Tiger is not responding",
      "priorityCode": 0,
      "resolvedByName": "Unable to verify name",
      "resolvedTime": "2026-04-30T16:51:13Z",
      "severity": 0,
      "siteKey": "S54599",
      "siteName": "THD - Baltimore Dist - 5830 Tiger",
      "start": "2026-01-16T15:29:15Z",
      "subtitle": "",
      "triggerTime": "2026-01-16T16:29:46Z",
      "tz": "US/Eastern"
    },
    {
      "acknowledgedAt": null,
      "acknowledgedByName": "",
      "alertId": "149808630",
      "alertTriggerId": 1107719,
      "assetCode": "INV",
      "canControl": false,
      "canEdit": true,
      "canManage": true,
      "capacity": 50,
      "category": 3,
      "delta": 0,
      "description": "Warning",
      "end": "2026-04-30T16:00:37Z",
      "eventCode": "418 - SMA Inverter  / Cluster controller",
      "hardwareIcon": "https://www.alsoenergy.com/pub/Images/Device/2125.png",
      "hardwareKey": "H266814",
      "hardwareName": "Inv 13 (50kW) SMA STP Core-1 50US",
      "impact": 0,
      "impactCode": 2,
      "isAcknowledged": false,
      "isResolved": true,
      "key": "x74ede5fe",
      "lastAcknowledgedBy": "",
      "lastChanged": "2026-04-30T16:00:37Z",
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
      "name": "Faults detected at THD - Baltimore Dist - 5830 Tiger: Inv 13 (50kW) SMA STP Core-1 50US",
      "priorityCode": 0,
      "resolvedByName": "Unable to verify name",
      "resolvedTime": "2026-04-30T16:00:37Z",
      "severity": 0,
      "siteKey": "S54599",
      "siteName": "THD - Baltimore Dist - 5830 Tiger",
      "start": "2026-04-29T14:45:26Z",
      "subtitle": "",
      "triggerTime": "2026-04-29T14:46:09Z",
      "tz": "US/Eastern"
    },
    {
      "acknowledgedAt": "2026-04-29T22:48:00Z",
      "acknowledgedByName": "",
      "alertId": "149823226",
      "alertTriggerId": 1107726,
      "assetCode": "INV",
      "canControl": false,
      "canEdit": true,
      "canManage": true,
      "capacity": 50,
      "category": 2,
      "delta": 0,
      "description": "This error may be the result of one of the following:\t 1. Wiring problem between the device and the gateway.",
      "end": "2026-04-30T16:04:32Z",
      "eventCode": "250 - Device communication",
      "hardwareIcon": "https://www.alsoenergy.com/pub/Images/Device/2125.png",
      "hardwareKey": "H266818",
      "hardwareName": "Inv 17 (50kW) SMA STP Core-1 50US",
      "impact": 0,
      "impactCode": 2,
      "isAcknowledged": true,
      "isResolved": true,
      "key": "x74ee1f02",
      "lastAcknowledgedBy": "U54319",
      "lastChanged": "2026-04-30T16:04:32Z",
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
      "name": "Inv 17 (50kW) SMA STP Core-1 50US at THD - Baltimore Dist - 5830 Tiger is not responding",
      "priorityCode": 0,
      "resolvedByName": "Unable to verify name",
      "resolvedTime": "2026-04-30T16:04:32Z",
      "severity": 0,
      "siteKey": "S54599",
      "siteName": "THD - Baltimore Dist - 5830 Tiger",
      "start": "2026-04-29T17:04:37Z",
      "subtitle": "",
      "triggerTime": "2026-04-29T18:07:47Z",
      "tz": "US/Eastern"
    },
    {
      "acknowledgedAt": "2026-04-29T22:48:00Z",
      "acknowledgedByName": "",
      "alertId": "149823593",
      "alertTriggerId": 1107728,
      "assetCode": "INV",
      "canControl": false,
      "canEdit": true,
      "canManage": true,
      "capacity": 50,
      "category": 2,
      "delta": 0,
      "description": "This error may be the result of one of the following:\t 1. Wiring problem between the device and the gateway.",
      "end": "2026-04-30T16:04:38Z",
      "eventCode": "250 - Device communication",
      "hardwareIcon": "https://www.alsoenergy.com/pub/Images/Device/2125.png",
      "hardwareKey": "H266819",
      "hardwareName": "Inv 18 (50kW) SMA STP Core-1 50US",
      "impact": 0,
      "impactCode": 2,
      "isAcknowledged": true,
      "isResolved": true,
      "key": "x74ee2071",
      "lastAcknowledgedBy": "U54319",
      "lastChanged": "2026-04-30T16:04:38Z",
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
      "name": "Inv 18 (50kW) SMA STP Core-1 50US at THD - Baltimore Dist - 5830 Tiger is not responding",
      "priorityCode": 0,
      "resolvedByName": "Unable to verify name",
      "resolvedTime": "2026-04-30T16:04:38Z",
      "severity": 0,
      "siteKey": "S54599",
      "siteName": "THD - Baltimore Dist - 5830 Tiger",
      "start": "2026-04-29T17:07:19Z",
      "subtitle": "",
      "triggerTime": "2026-04-29T18:08:05Z",
      "tz": "US/Eastern"
    },
    {
      "acknowledgedAt": "2026-04-29T22:48:00Z",
      "acknowledgedByName": "",
      "alertId": "149824269",
      "alertTriggerId": 1107718,
      "assetCode": "INV",
      "canControl": false,
      "canEdit": true,
      "canManage": true,
      "capacity": 50,
      "category": 2,
      "delta": 0,
      "description": "This error may be the result of one of the following:\t 1. Wiring problem between the device and the gateway.",
      "end": "2026-04-30T16:00:34Z",
      "eventCode": "250 - Device communication",
      "hardwareIcon": "https://www.alsoenergy.com/pub/Images/Device/2125.png",
      "hardwareKey": "H266814",
      "hardwareName": "Inv 13 (50kW) SMA STP Core-1 50US",
      "impact": 0,
      "impactCode": 2,
      "isAcknowledged": true,
      "isResolved": true,
      "key": "x74ee2315",
      "lastAcknowledgedBy": "U54319",
      "lastChanged": "2026-04-30T16:00:34Z",
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
      "name": "Inv 13 (50kW) SMA STP Core-1 50US at THD - Baltimore Dist - 5830 Tiger is not responding",
      "priorityCode": 0,
      "resolvedByName": "Unable to verify name",
      "resolvedTime": "2026-04-30T16:00:34Z",
      "severity": 0,
      "siteKey": "S54599",
      "siteName": "THD - Baltimore Dist - 5830 Tiger",
      "start": "2026-04-29T17:13:32Z",
      "subtitle": "",
      "triggerTime": "2026-04-29T18:13:49Z",
      "tz": "US/Eastern"
    }
  ]
}
```

[Return to top](#top)

