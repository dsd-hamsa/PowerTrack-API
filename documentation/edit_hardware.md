# `/api/edit/hardware`

[← Back to Index](../README.md)


### `/api/edit/hardware`

**Methods:** PUT  
**Status Codes:** 200  
**Call Count:** 1  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "key": {
      "type": "string"
    },
    "parentKey": {
      "type": "string"
    },
    "ts": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "assetId": {
      "type": "string"
    },
    "hardwareId": {
      "type": "string"
    },
    "instance": {
      "type": "integer"
    },
    "functionId": {
      "type": "string"
    },
    "functionCode": {
      "type": "integer"
    },
    "hardwareStatus": {
      "type": "integer"
    },
    "capacityKw": {
      "type": "number"
    },
    "sort": {
      "type": "integer"
    },
    "gatewayKey": {
      "type": "string"
    },
    "gatewayId": {
      "type": "string"
    },
    "gatewayFwVersion": {
      "type": "string"
    },
    "gatewayScriptCount": {
      "type": "string"
    },
    "gatewayType": {
      "type": "integer"
    },
    "serialNum": {
      "type": "string"
    },
    "modelNum": {
      "type": "string"
    },
    "installDate": {
      "type": "string"
    },
    "driverId": {
      "type": "integer"
    },
    "driverDescription": {
      "type": "string"
    },
    "driverFlags": {
      "type": "integer"
    },
    "driverName": {
      "type": "string"
    },
    "driverNotes": {
      "type": "string"
    },
    "validatedByKey": {
      "type": "string"
    },
    "validatedDateTime": {
      "type": "string"
    },
    "debug": {
      "type": "boolean"
    },
    "outOfService": {
      "type": "boolean"
    },
    "outOfServiceNote": {
      "type": "string"
    },
    "outOfServiceUntil": {
      "type": "string"
    },
    "reportExclude": {
      "type": "boolean"
    },
    "limitedCommunication": {
      "type": "boolean"
    },
    "primary": {
      "type": "boolean"
    },
    "address": {
      "type": "string"
    },
    "unitId": {
      "type": "integer"
    },
    "isTcp": {
      "type": "boolean"
    },
    "port": {
      "type": "integer"
    },
    "serialMode": {
      "type": "integer"
    },
    "baud": {
      "type": "string"
    },
    "newNote": {
      "type": "null"
    },
    "dashboardKey": {
      "type": "string"
    },
    "dcRating": {
      "type": "integer"
    },
    "defaultChart": {
      "type": "integer"
    },
    "chartSectionCode": {
      "type": "integer"
    },
    "conflictNames": {
      "type": "null"
    },
    "isConflictAcknowledged": {
      "type": "boolean"
    },
    "settings": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "originalValue": {
            "type": "unknown"
          },
          "index": {
            "type": "integer"
          },
          "name": {
            "type": "string"
          },
          "value": {
            "type": "unknown"
          },
          "type": {
            "type": "integer"
          }
        }
      }
    },
    "deviceRegisters": {
      "type": "array"
    }
  }
}
```

#### Example

**Request:**

```http
PUT /api/edit/hardware
Accept: application/json
Referer: https://www.alsoenergy.com
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711

{
  "key": "H541363",
  "parentKey": "S70513",
  "ts": "2025-12-01T16:47:50Z",
  "description": "Inv C10 - (62.5 kW) SMA Core 1 STP",
  "assetId": "",
  "hardwareId": "C44418_S70513_PV9",
  "instance": 9,
  "functionId": "PV9",
  "functionCode": 1,
  "hardwareStatus": 1,
  "capacityKw": 62.5,
  "sort": 20,
  "gatewayKey": "H541350",
  "gatewayId": "000CC68E608F",
  "gatewayFwVersion": "",
  "gatewayScriptCount": "",
  "gatewayType": 2,
  "serialNum": "3019997800",
  "modelNum": "SMA 62.5kW PV INVERTER",
  "installDate": "2025-01-09",
  "driverId": 19880,
  "driverDescription": "Sunny Highpower Version 5 *(fix large negative night time spikes for 5 registers)",
  "driverFlags": 2115,
  "driverName": "SMA SHPxx-20-US V5 (Qualified)",
  "driverNotes": "**Qualified \\rV5\\r(INVERTER DATA NOT correctable at this time)\\r\\rModbus® Parameters and Measured Values\\rSHP 100-20 / SHP 150-20 / SHP 125-US-20 / SHP 150-US-20\\rThis list is valid from the following firmware version: 02.02.29.R\\r\\rAdded Energy Fix for Drops and Spikes\\r\\r**Added fix to ignore bad data at night for 5 registers below:\\r\\r1. [Internal Temp (InternalTemp)]\\r2. [Apparant Power (KVA)]\\r3. [Reactive Power (KVAR)]\\r4. [DC Power Input (KwDC)]\\r5. [DC Voltage Input (Vdc)]",
  "validatedByKey": "",
  "validatedDateTime": "0001-01-01T00:00:00",
  "debug": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2025-12-01T19:50:14.449826Z",
  "reportExclude": false,
  "limitedCommunication": false,
  "primary": false,
  "address": "192.168.13.60",
  "unitId": 3,
  "isTcp": true,
  "port": 1,
  "serialMode": 2,
  "baud": "9600",
  "newNote": null,
  "dashboardKey": "",
  "dcRating": 30420,
  "defaultChart": 2,
  "chartSectionCode": 1,
  "conflictNames": null,
  "isConflictAcknowledged": false,
  "settings": [
    {
      "originalValue": 9600,
      "index": 0,
      "name": "dev:baud",
      "value": 9600,
      "type": 1
    },
    {
      "originalValue": "rs485",
      "index": 1,
      "name": "dev:portMode",
      "value": "rs485",
      "type": 0
    },
    {
      "originalValue": 0,
      "index": 2,
      "name": "dev:RegOffset",
      "value": 0,
      "type": 1
    }
  ],
  "deviceRegisters": [
    {
      "index": 0,
      "name": "AC Power Output",
      "localizedName": "Active Power",
      "dataName": "KwAC",
      "standardDataName": "Active_Power",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kW",
      "dataNameDetail": null
    },
    {
      "index": 1,
      "name": "AC Energy",
      "localizedName": "Active Energy Net (with Offset)",
      "dataName": "KwhAC",
      "standardDataName": "Active_Energy_Gross",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kWh",
      "dataNameDetail": null
    },
    {
      "index": 2,
      "name": "L1-L2 AC Voltage",
      "localizedName": "AC Voltage A-B (Line-Line)",
      "dataName": "VAC_AB",
      "standardDataName": "AC_Voltage_AB",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    }
  ]
}
```

**Response:**

```json
{
  "key": "H541363",
  "parentKey": "S70513",
  "ts": "2025-12-01T19:50:37Z",
  "description": "Inv C10 - (62.5 kW) SMA Core 1 STP",
  "assetId": "",
  "hardwareId": "C44418_S70513_PV9",
  "instance": 9,
  "functionId": "PV9",
  "functionCode": 1,
  "hardwareStatus": 1,
  "capacityKw": 62.5,
  "sort": 20,
  "gatewayKey": "H541350",
  "gatewayId": "000CC68E608F",
  "gatewayFwVersion": "",
  "gatewayScriptCount": "",
  "gatewayType": 7,
  "serialNum": "3019997800",
  "modelNum": "SMA 62.5kW PV INVERTER",
  "installDate": "2025-01-09",
  "driverId": 19880,
  "driverDescription": "Sunny Highpower Version 5 *(fix large negative night time spikes for 5 registers)",
  "driverFlags": 2115,
  "driverName": "SMA SHPxx-20-US V5 (Qualified)",
  "driverNotes": "**Qualified \\rV5\\r(INVERTER DATA NOT correctable at this time)\\r\\rModbus® Parameters and Measured Values\\rSHP 100-20 / SHP 150-20 / SHP 125-US-20 / SHP 150-US-20\\rThis list is valid from the following firmware version: 02.02.29.R\\r\\rAdded Energy Fix for Drops and Spikes\\r\\r**Added fix to ignore bad data at night for 5 registers below:\\r\\r1. [Internal Temp (InternalTemp)]\\r2. [Apparant Power (KVA)]\\r3. [Reactive Power (KVAR)]\\r4. [DC Power Input (KwDC)]\\r5. [DC Voltage Input (Vdc)]",
  "validatedByKey": "",
  "validatedDateTime": "0001-01-01T00:00:00",
  "debug": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2025-12-01T19:50:37Z",
  "reportExclude": false,
  "limitedCommunication": false,
  "primary": false,
  "address": "192.168.13.60",
  "unitId": 3,
  "isTcp": true,
  "port": 1,
  "serialMode": 2,
  "baud": "9600",
  "newNote": null,
  "dashboardKey": "",
  "dcRating": 30420,
  "defaultChart": 2,
  "chartSectionCode": 1,
  "conflictNames": null,
  "isConflictAcknowledged": false,
  "settings": [
    {
      "originalValue": 9600,
      "index": 0,
      "name": "dev:baud",
      "value": 9600,
      "type": 1
    },
    {
      "originalValue": "rs485",
      "index": 1,
      "name": "dev:portMode",
      "value": "rs485",
      "type": 0
    },
    {
      "originalValue": 0,
      "index": 2,
      "name": "dev:RegOffset",
      "value": 0,
      "type": 1
    }
  ],
  "deviceRegisters": [
    {
      "index": 0,
      "name": "AC Power Output",
      "localizedName": "Active Power",
      "dataName": "KwAC",
      "standardDataName": "Active_Power",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kW",
      "dataNameDetail": null
    },
    {
      "index": 1,
      "name": "AC Energy",
      "localizedName": "Active Energy Net (with Offset)",
      "dataName": "KwhAC",
      "standardDataName": "Active_Energy_Gross",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kWh",
      "dataNameDetail": null
    },
    {
      "index": 2,
      "name": "L1-L2 AC Voltage",
      "localizedName": "AC Voltage A-B (Line-Line)",
      "dataName": "VAC_AB",
      "standardDataName": "AC_Voltage_AB",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    }
  ]
}
```
