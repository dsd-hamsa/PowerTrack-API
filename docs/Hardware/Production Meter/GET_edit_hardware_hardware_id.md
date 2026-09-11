<a id="top"></a>
# /api/edit/hardware/{hardware_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [Production Meter (functionCode: 2)](#production-meter-functioncode-2)
- [Example](#example)

## Production Meter (functionCode: 2)

```json
{
  "type": "object",
  "properties": {
    "additionalRegisters": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "address": {
      "type": "string"
    },
    "alsoHardwareId": {
      "type": "number"
    },
    "alsoSiteId": {
      "type": "number"
    },
    "array": {
      "type": "object",
      "properties": {}
    },
    "assetId": {
      "type": "string"
    },
    "autoCorrectDecrease": {
      "type": "boolean"
    },
    "autoCorrectIncrease": {
      "type": "boolean"
    },
    "baud": {
      "type": "string"
    },
    "capacityKw": {
      "type": "number"
    },
    "chartSectionCode": {
      "type": "number"
    },
    "commonDC": {
      "type": "boolean"
    },
    "commonDCAllMatch": {
      "type": "boolean"
    },
    "configs": {
      "type": "string"
    },
    "conflictNames": {
      "type": "object",
      "properties": {}
    },
    "dashboardKey": {
      "type": "string"
    },
    "dcRating": {
      "type": "number"
    },
    "debug": {
      "type": "boolean"
    },
    "decreaseDifference": {
      "type": "number"
    },
    "defaultChart": {
      "type": "number"
    },
    "description": {
      "type": "string"
    },
    "deviceRegisters": {
      "type": "object",
      "properties": {
        "dataName": {
          "type": "string"
        },
        "dataNameDetail": {
          "type": "object",
          "properties": {}
        },
        "index": {
          "type": "number"
        },
        "isArchived": {
          "type": "boolean"
        },
        "isIgnored": {
          "type": "boolean"
        },
        "isRaw": {
          "type": "boolean"
        },
        "localizedName": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "standardDataName": {
          "type": "string"
        },
        "units": {
          "type": "string"
        }
      }
    },
    "driverDescription": {
      "type": "string"
    },
    "driverFlags": {
      "type": "number"
    },
    "driverId": {
      "type": "number"
    },
    "driverName": {
      "type": "string"
    },
    "driverNotes": {
      "type": "string"
    },
    "driverRegisters": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "eGauge": {
      "type": "object",
      "properties": {}
    },
    "energyCapacity": {
      "type": "number"
    },
    "fixedEnergyOffset": {
      "type": "number"
    },
    "functionCode": {
      "type": "number"
    },
    "functionId": {
      "type": "string"
    },
    "gateway": {
      "type": "object",
      "properties": {}
    },
    "gatewayFwVersion": {
      "type": "string"
    },
    "gatewayId": {
      "type": "string"
    },
    "gatewayKey": {
      "type": "string"
    },
    "gatewayScriptCount": {
      "type": "string"
    },
    "gatewayType": {
      "type": "number"
    },
    "groupAllowed": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "groupKey": {
      "type": "string"
    },
    "hardwareId": {
      "type": "string"
    },
    "hardwareStatus": {
      "type": "number"
    },
    "hasCapacity": {
      "type": "boolean"
    },
    "hash": {
      "type": "string"
    },
    "increaseDifference": {
      "type": "number"
    },
    "installDate": {
      "type": "string"
    },
    "installedKva": {
      "type": "number"
    },
    "instance": {
      "type": "number"
    },
    "inverterKw": {
      "type": "number"
    },
    "isConflictAcknowledged": {
      "type": "boolean"
    },
    "isReportable": {
      "type": "boolean"
    },
    "isTcp": {
      "type": "boolean"
    },
    "isThermal": {
      "type": "boolean"
    },
    "key": {
      "type": "string"
    },
    "kiosk": {
      "type": "object",
      "properties": {}
    },
    "latitude": {
      "type": "number"
    },
    "limitedCommunication": {
      "type": "boolean"
    },
    "locusId": {
      "type": "string"
    },
    "longitude": {
      "type": "number"
    },
    "meter": {
      "type": "object",
      "properties": {
        "acInfo": {
          "type": "number"
        },
        "grossEnergy": {
          "type": "number"
        },
        "grossEnergyOptions": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "value": {
              "type": "number"
            }
          }
        },
        "isDc": {
          "type": "boolean"
        },
        "kw": {
          "type": "number"
        },
        "kwhDelivered": {
          "type": "number"
        },
        "kwhNet": {
          "type": "number"
        },
        "kwhReceived": {
          "type": "number"
        },
        "lineResistance": {
          "type": "number"
        },
        "load": {
          "type": "number"
        },
        "loadLoss": {
          "type": "number"
        },
        "maxCurrent": {
          "type": "number"
        },
        "maxPower": {
          "type": "number"
        },
        "maxVoltage": {
          "type": "number"
        },
        "noLoadLoss": {
          "type": "number"
        },
        "scale": {
          "type": "number"
        },
        "scaleKw": {
          "type": "number"
        },
        "scaleKwh": {
          "type": "number"
        },
        "showLoad": {
          "type": "boolean"
        }
      }
    },
    "modelNum": {
      "type": "string"
    },
    "newNote": {
      "type": "string"
    },
    "oneMinuteData": {
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
    "outputAllowed": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "outputKey": {
      "type": "string"
    },
    "parentKey": {
      "type": "string"
    },
    "parity": {
      "type": "number"
    },
    "port": {
      "type": "number"
    },
    "primary": {
      "type": "boolean"
    },
    "pullData": {
      "type": "boolean"
    },
    "pvConfig": {
      "type": "object",
      "properties": {}
    },
    "readOnly": {
      "type": "boolean"
    },
    "registerOffsets": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "reportExclude": {
      "type": "boolean"
    },
    "reverse": {
      "type": "boolean"
    },
    "sampleRate": {
      "type": "number"
    },
    "serialMode": {
      "type": "number"
    },
    "serialNum": {
      "type": "string"
    },
    "settings": {
      "type": "object",
      "properties": {
        "index": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "originalValue": {
          "type": "number"
        },
        "type": {
          "type": "number"
        },
        "value": {
          "type": "number"
        }
      }
    },
    "siteDcShare": {
      "type": "number"
    },
    "siteHasHybridInverterGroups": {
      "type": "boolean"
    },
    "siteHasInverterGroups": {
      "type": "boolean"
    },
    "sort": {
      "type": "number"
    },
    "stopBits": {
      "type": "number"
    },
    "syncToLocus": {
      "type": "boolean"
    },
    "tags": {
      "type": "object",
      "properties": {
        "attributes": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
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
        "lastChanged": {
          "type": "object",
          "properties": {}
        },
        "notes": {
          "type": "object",
          "properties": {
            "authorKey": {
              "type": "string"
            },
            "authorName": {
              "type": "string"
            },
            "date": {
              "type": "string"
            },
            "isEvent": {
              "type": "boolean"
            },
            "key": {
              "type": "string"
            },
            "kind": {
              "type": "string"
            },
            "parentKey": {
              "type": "string"
            },
            "text": {
              "type": "string"
            }
          }
        },
        "powerDisplays": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        }
      }
    },
    "taskKey": {
      "type": "string"
    },
    "thermal": {
      "type": "object",
      "properties": {}
    },
    "thread": {
      "type": "number"
    },
    "ts": {
      "type": "string"
    },
    "turbine": {
      "type": "object",
      "properties": {}
    },
    "unitId": {
      "type": "number"
    },
    "uploadRate": {
      "type": "number"
    },
    "validatedByKey": {
      "type": "string"
    },
    "validatedDateTime": {
      "type": "string"
    },
    "virtualRegisters": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "virtualWeather": {
      "type": "object",
      "properties": {}
    },
    "weather": {
      "type": "object",
      "properties": {}
    },
    "weatherStationKey1": {
      "type": "string"
    },
    "weatherStationKey2": {
      "type": "string"
    },
    "zone": {
      "type": "object",
      "properties": {}
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/edit/hardware/H225871
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 3fefeb
referer: https://apps.alsoenergy.com/powertrack/H225871/analysis/chartbuilder
```

**Response:**

```json
{
  "additionalRegisters": [],
  "address": "192.168.13.41",
  "alsoHardwareId": 0,
  "alsoSiteId": 0,
  "array": null,
  "assetId": "",
  "autoCorrectDecrease": false,
  "autoCorrectIncrease": false,
  "baud": "",
  "capacityKw": 2750,
  "chartSectionCode": 2,
  "commonDC": false,
  "commonDCAllMatch": true,
  "configs": [
    "Meter"
  ],
  "conflictNames": null,
  "dashboardKey": "",
  "dcRating": 2750000,
  "debug": false,
  "decreaseDifference": 100,
  "defaultChart": 15,
  "description": "SEL-735 PV Prod Meter",
  "deviceRegisters": [
    {
      "dataName": "KWHnet",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Net",
      "name": "Total energy",
      "standardDataName": "Active_Energy_Net",
      "units": "kWh"
    },
    {
      "dataName": "KW",
      "dataNameDetail": null,
      "index": 1,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power",
      "name": "Real power",
      "standardDataName": "Active_Power",
      "units": "kW"
    },
    {
      "dataName": "KVAR",
      "dataNameDetail": null,
      "index": 2,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power",
      "name": "Reactive power",
      "standardDataName": "Reactive_Power",
      "units": "kVAR"
    },
    {
      "dataName": "KVA",
      "dataNameDetail": null,
      "index": 3,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Apparent Power",
      "name": "Apparent power",
      "standardDataName": "Apparent_Power",
      "units": "kVA"
    },
    {
      "dataName": "PowerFactor",
      "dataNameDetail": null,
      "index": 4,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Power Factor",
      "name": "Power factor",
      "standardDataName": "Power_Factor",
      "units": "PF"
    },
    {
      "dataName": "KWHrec",
      "dataNameDetail": null,
      "index": 5,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Received (with Offset)",
      "name": "Import energy",
      "standardDataName": "Active_Energy_Rec",
      "units": "kWh"
    },
    {
      "dataName": "KWHdel",
      "dataNameDetail": null,
      "index": 6,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Delivered (with Offset)",
      "name": "Export energy",
      "standardDataName": "Active_Energy_Del",
      "units": "kWh"
    },
    {
      "dataName": "VacA",
      "dataNameDetail": null,
      "index": 7,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage A (Line-Neutral)",
      "name": "Volts A-N",
      "standardDataName": "Voltage_AN",
      "units": "V"
    },
    {
      "dataName": "VacB",
      "dataNameDetail": null,
      "index": 8,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage B (Line-Neutral)",
      "name": "Volts B-N",
      "standardDataName": "Voltage_BN",
      "units": "V"
    },
    {
      "dataName": "VacC",
      "dataNameDetail": null,
      "index": 9,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage C (Line-Neutral)",
      "name": "Volts C-N",
      "standardDataName": "Voltage_CN",
      "units": "V"
    },
    {
      "dataName": "VacAB",
      "dataNameDetail": null,
      "index": 10,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage A-B (Line-Line)",
      "name": "Volts A-B",
      "standardDataName": "Voltage_AB",
      "units": "V"
    },
    {
      "dataName": "VacBC",
      "dataNameDetail": null,
      "index": 11,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage B-C (Line-Line)",
      "name": "Volts B-C",
      "standardDataName": "Voltage_BC",
      "units": "V"
    },
    {
      "dataName": "VacCA",
      "dataNameDetail": null,
      "index": 12,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage C-A (Line-Line)",
      "name": "Volts C-A",
      "standardDataName": "Voltage_CA",
      "units": "V"
    },
    {
      "dataName": "IacA",
      "dataNameDetail": null,
      "index": 13,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current A",
      "name": "Amps A",
      "standardDataName": "Current_A",
      "units": "A"
    },
    {
      "dataName": "IacB",
      "dataNameDetail": null,
      "index": 14,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current B",
      "name": "Amps B",
      "standardDataName": "Current_B",
      "units": "A"
    },
    {
      "dataName": "IacC",
      "dataNameDetail": null,
      "index": 15,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current C",
      "name": "Amps C",
      "standardDataName": "Current_C",
      "units": "A"
    },
    {
      "dataName": "KVAR_A",
      "dataNameDetail": null,
      "index": 16,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power A",
      "name": "Reactive Power A",
      "standardDataName": "Reactive_Power_A",
      "units": "kVAR"
    },
    {
      "dataName": "KVAR_B",
      "dataNameDetail": null,
      "index": 17,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power B",
      "name": "Reactive Power B",
      "standardDataName": "Reactive_Power_B",
      "units": "kVAR"
    },
    {
      "dataName": "KVAR_C",
      "dataNameDetail": null,
      "index": 18,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power C",
      "name": "Reactive Power C ",
      "standardDataName": "Reactive_Power_C",
      "units": "kVAR"
    }
  ],
  "driverDescription": "SEL 735 power meter",
  "driverFlags": 64,
  "driverId": 8314,
  "driverName": "SEL 735 Meter (Qualified)",
  "driverNotes": "Superceeded DID 301\r\r10/6/20 HSK-changed kV to V\r\rThis is the old one, per Walter (new one == 19685)",
  "driverRegisters": [],
  "eGauge": null,
  "energyCapacity": 0,
  "fixedEnergyOffset": 0,
  "functionCode": 2,
  "functionId": "PM0",
  "gateway": null,
  "gatewayFwVersion": "",
  "gatewayId": "000CC6868543",
  "gatewayKey": "H225869",
  "gatewayScriptCount": "",
  "gatewayType": 2,
  "groupAllowed": [],
  "groupKey": "",
  "hardwareId": "C16293_S52104_PM0",
  "hardwareStatus": 1,
  "hasCapacity": true,
  "hash": "",
  "increaseDifference": -1,
  "installDate": "2019-10-30",
  "installedKva": 0,
  "instance": 0,
  "inverterKw": 2750,
  "isConflictAcknowledged": false,
  "isReportable": true,
  "isTcp": true,
  "isThermal": false,
  "key": "H225871",
  "kiosk": null,
  "latitude": 42.7934503,
  "limitedCommunication": false,
  "locusId": "",
  "longitude": -73.9558609,
  "meter": {
    "acInfo": 2,
    "grossEnergy": 3,
    "grossEnergyOptions": [
      {
        "name": "Undefined",
        "value": 0
      },
      {
        "name": "Export energy",
        "value": 2
      },
      {
        "name": "Import energy",
        "value": 3
      }
    ],
    "isDc": false,
    "kw": 1463.08,
    "kwhDelivered": 273666,
    "kwhNet": 19866063,
    "kwhReceived": 20098394,
    "lineResistance": 0,
    "load": 0,
    "loadLoss": 0,
    "maxCurrent": 7300,
    "maxPower": 2750,
    "maxVoltage": 480,
    "noLoadLoss": 0,
    "scale": 1,
    "scaleKw": -1,
    "scaleKwh": 1,
    "showLoad": false
  },
  "modelNum": "",
  "newNote": "",
  "oneMinuteData": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2026-09-11T16:44:56.6596198Z",
  "outputAllowed": [],
  "outputKey": "",
  "parentKey": "S52104",
  "parity": 0,
  "port": 0,
  "primary": false,
  "pullData": false,
  "pvConfig": null,
  "readOnly": false,
  "registerOffsets": [],
  "reportExclude": false,
  "reverse": false,
  "sampleRate": 0,
  "serialMode": -1,
  "serialNum": "3192130460",
  "settings": [
    {
      "index": 0,
      "name": "dev:Scale",
      "originalValue": 1,
      "type": 2,
      "value": 1
    },
    {
      "index": 1,
      "name": "dev:Reverse",
      "originalValue": "0",
      "type": 0,
      "value": "0"
    },
    {
      "index": 2,
      "name": "dev:RegOffset",
      "originalValue": "0",
      "type": 0,
      "value": "0"
    },
    {
      "index": 3,
      "name": "dev:Enable",
      "originalValue": 0,
      "type": 1,
      "value": 0
    },
    {
      "index": 4,
      "name": "dev:ScaleKW",
      "originalValue": -1,
      "type": 2,
      "value": -1
    },
    {
      "index": 5,
      "name": "dev:ScaleKWH",
      "originalValue": 1,
      "type": 2,
      "value": 1
    },
    {
      "index": 6,
      "name": "GrossRegister",
      "originalValue": "Received",
      "type": 0,
      "value": "Received"
    }
  ],
  "siteDcShare": 0,
  "siteHasHybridInverterGroups": false,
  "siteHasInverterGroups": false,
  "sort": 4,
  "stopBits": 1,
  "syncToLocus": false,
  "tags": {
    "attributes": [],
    "key": "{\"ancestorKey\":\"H225871\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
    "keywords": [],
    "lastChanged": null,
    "notes": [
      {
        "authorKey": "U57916",
        "authorName": "Josh Hamsa",
        "date": "2026-02-09T22:04:14Z",
        "isEvent": false,
        "key": "x60947943",
        "kind": "text",
        "parentKey": "H225871",
        "text": "02-Feb 2026: Update alert: Meter / irradiance check (alert_key=x2d16abf8 ; alert_type=AI721)"
      },
      {
        "authorKey": "U57916",
        "authorName": "Josh Hamsa",
        "date": "2026-02-09T22:42:36Z",
        "isEvent": false,
        "key": "x60947bfc",
        "kind": "text",
        "parentKey": "H225871",
        "text": "02-Feb 2026: Update alert: Device communication (alert_key=AS717495 ; alert_type=AI250)"
      },
      {
        "authorKey": "U49535",
        "authorName": "Naveen Verma",
        "date": "2026-07-29T10:16:32Z",
        "isEvent": true,
        "key": "x05bc2d5b",
        "kind": "text",
        "parentKey": "H225871",
        "text": "Filled in energy and power values, FillVirtual, 5/29/2026 9:20:00 AM through 6/4/2026 2:15:00 PM"
      },
      {
        "authorKey": "U49535",
        "authorName": "Naveen Verma",
        "date": "2025-10-23T12:36:15Z",
        "isEvent": true,
        "key": "x05e5ee41",
        "kind": "text",
        "parentKey": "H225871",
        "text": "Filled in energy and power values, FillVirtual, 10/9/2025 1:20:00 PM through 10/17/2025 10:30:00 AM"
      },
      {
        "authorKey": "U48020",
        "authorName": "deepali Verma",
        "date": "2025-08-06T05:34:58Z",
        "isEvent": true,
        "key": "x059d4a80",
        "kind": "text",
        "parentKey": "H225871",
        "text": "Filled in energy and power values, FillVirtual, 7/31/2025 3:35:00 PM through 8/4/2025 11:45:00 AM"
      },
      {
        "authorKey": "U26896",
        "authorName": "Anshu Kumari",
        "date": "2025-07-30T08:38:25Z",
        "isEvent": true,
        "key": "x059542c8",
        "kind": "text",
        "parentKey": "H225871",
        "text": "Filled in energy and power values, FillLinear, 7/10/2025 8:20:00 PM through 7/16/2025 10:30:00 AM"
      },
      {
        "authorKey": "U49535",
        "authorName": "Naveen Verma",
        "date": "2025-07-10T07:21:00Z",
        "isEvent": true,
        "key": "x0581dfe5",
        "kind": "text",
        "parentKey": "H225871",
        "text": "Filled in energy and power values, FillVirtual, 6/24/2025 11:20:00 AM through 6/29/2025 4:45:00 PM"
      },
      {
        "authorKey": "U26896",
        "authorName": "Anshu Kumari",
        "date": "2025-05-12T05:52:20Z",
        "isEvent": true,
        "key": "x05490cd8",
        "kind": "text",
        "parentKey": "H225871",
        "text": "Filled in energy and power values, FillVirtual, 4/15/2025 10:05:00 AM through 4/22/2025 9:15:00 AM"
      },
      {
        "authorKey": "U26896",
        "authorName": "Anshu Kumari",
        "date": "2025-05-12T05:50:45Z",
        "isEvent": true,
        "key": "x05490cb8",
        "kind": "text",
        "parentKey": "H225871",
        "text": "Filled in energy and power values, FillVirtual, 11/21/2024 11:50:00 AM through 11/25/2024 10:30:00 AM"
      },
      {
        "authorKey": "U49535",
        "authorName": "Naveen Verma",
        "date": "2026-04-07T09:26:44Z",
        "isEvent": true,
        "key": "x054fe0e1",
        "kind": "text",
        "parentKey": "H225871",
        "text": "Filled in energy and power values, FillVirtual, 3/16/2026 10:20:00 AM through 3/31/2026 12:15:00 PM"
      },
      {
        "authorKey": "U24548",
        "authorName": "Kari Bretl",
        "date": "2020-07-28T23:10:45Z",
        "isEvent": true,
        "key": "x1cf86e1c",
        "kind": "text",
        "parentKey": "H225871",
        "text": "Calculate data (KWHnet), offset: 42,111.8 kWh, 7/10/2020 8:45:00 AM through 7/27/2020 11:00:00 AM"
      },
      {
        "authorKey": "U24548",
        "authorName": "Kari Bretl",
        "date": "2020-07-28T23:07:50Z",
        "isEvent": true,
        "key": "x1cf86e19",
        "kind": "text",
        "parentKey": "H225871",
        "text": "Offset energy data, -63,216.0 kWh, 7/17/2020 1:30:00 PM through 7/27/2020 11:15:00 AM"
      },
      {
        "authorKey": "U24548",
        "authorName": "Kari Bretl",
        "date": "2020-07-14T23:46:23Z",
        "isEvent": true,
        "key": "x1cec3622",
        "kind": "text",
        "parentKey": "H225871",
        "text": "Changed data for SEL-735 PV Prod Meter (HID = 225871)\r\nFields: VacAB,VacBC,VacCA,IacC\r\nValueAdjust: NaN\r\nFrom 7/10/2020 8:48:43 AM through 7/14/2020 9:52:00 AM\r\nRaw"
      },
      {
        "authorKey": "U24548",
        "authorName": "Kari Bretl",
        "date": "2020-07-14T23:45:44Z",
        "isEvent": true,
        "key": "x1cec3621",
        "kind": "text",
        "parentKey": "H225871",
        "text": "Changed data for SEL-735 PV Prod Meter (HID = 225871)\r\nFields: VacB,VacC,IacA,IacB\r\nValueAdjust: NaN\r\nFrom 7/10/2020 8:48:00 AM through 7/14/2020 9:52:00 AM\r\nRaw"
      },
      {
        "authorKey": "U24548",
        "authorName": "Kari Bretl",
        "date": "2020-07-14T23:45:10Z",
        "isEvent": true,
        "key": "x1cec361e",
        "kind": "text",
        "parentKey": "H225871",
        "text": "Changed data for SEL-735 PV Prod Meter (HID = 225871)\r\nFields: KVAR,KVA,PowerFactor,VacA\r\nValueAdjust: NaN\r\nFrom 7/10/2020 8:48:00 AM through 7/14/2020 9:52:00 AM\r\nRaw"
      },
      {
        "authorKey": "U24548",
        "authorName": "Kari Bretl",
        "date": "2020-07-14T23:43:54Z",
        "isEvent": true,
        "key": "x1cec361b",
        "kind": "text",
        "parentKey": "H225871",
        "text": "Changed data for SEL-735 PV Prod Meter (HID = 225871)\r\nFields: KW,KWHnet,KWHrec,KWHdel\r\nValueAdjust: NaN\r\nFrom 7/10/2020 8:48:00 AM through 7/14/2020 9:52:00 AM\r\nRaw"
      }
    ],
    "powerDisplays": []
  },
  "taskKey": "",
  "thermal": null,
  "thread": 0,
  "ts": "2026-02-02T23:08:00Z",
  "turbine": null,
  "unitId": 0,
  "uploadRate": 0,
  "validatedByKey": "",
  "validatedDateTime": "0001-01-01T00:00:00",
  "virtualRegisters": [],
  "virtualWeather": null,
  "weather": null,
  "weatherStationKey1": "",
  "weatherStationKey2": "",
  "zone": null
}
```

[Return to top](#top)

