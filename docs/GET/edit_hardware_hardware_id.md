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
      "type": "number"
    },
    "functionId": {
      "type": "string"
    },
    "functionCode": {
      "type": "number"
    },
    "hardwareStatus": {
      "type": "number"
    },
    "capacityKw": {
      "type": "number"
    },
    "sort": {
      "type": "number"
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
      "type": "number"
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
      "type": "number"
    },
    "driverDescription": {
      "type": "string"
    },
    "driverFlags": {
      "type": "number"
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
      "type": "number"
    },
    "isTcp": {
      "type": "boolean"
    },
    "port": {
      "type": "number"
    },
    "serialMode": {
      "type": "number"
    },
    "baud": {
      "type": "string"
    },
    "newNote": {
      "type": "string"
    },
    "dashboardKey": {
      "type": "string"
    },
    "dcRating": {
      "type": "number"
    },
    "defaultChart": {
      "type": "number"
    },
    "chartSectionCode": {
      "type": "number"
    },
    "conflictNames": {
      "type": "object",
      "properties": {}
    },
    "isConflictAcknowledged": {
      "type": "boolean"
    },
    "settings": {
      "type": "object",
      "properties": {
        "originalValue": {
          "type": "string"
        },
        "index": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "value": {
          "type": "string"
        },
        "type": {
          "type": "number"
        }
      }
    },
    "deviceRegisters": {
      "type": "object",
      "properties": {
        "index": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "localizedName": {
          "type": "string"
        },
        "dataName": {
          "type": "string"
        },
        "standardDataName": {
          "type": "string"
        },
        "isIgnored": {
          "type": "boolean"
        },
        "isRaw": {
          "type": "boolean"
        },
        "isArchived": {
          "type": "boolean"
        },
        "units": {
          "type": "string"
        },
        "dataNameDetail": {
          "type": "object",
          "properties": {}
        }
      }
    },
    "additionalRegisters": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "decreaseDifference": {
      "type": "number"
    },
    "autoCorrectDecrease": {
      "type": "boolean"
    },
    "fixedEnergyOffset": {
      "type": "number"
    },
    "increaseDifference": {
      "type": "number"
    },
    "autoCorrectIncrease": {
      "type": "boolean"
    },
    "isThermal": {
      "type": "boolean"
    },
    "reverse": {
      "type": "boolean"
    },
    "registerOffsets": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "driverRegisters": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "virtualRegisters": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "tags": {
      "type": "object",
      "properties": {
        "key": {
          "type": "string"
        },
        "lastChanged": {
          "type": "object",
          "properties": {}
        },
        "attributes": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        },
        "keywords": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        },
        "notes": {
          "type": "object",
          "properties": {
            "key": {
              "type": "string"
            },
            "parentKey": {
              "type": "string"
            },
            "authorKey": {
              "type": "string"
            },
            "authorName": {
              "type": "string"
            },
            "date": {
              "type": "string"
            },
            "kind": {
              "type": "string"
            },
            "isEvent": {
              "type": "boolean"
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
    "sampleRate": {
      "type": "number"
    },
    "uploadRate": {
      "type": "number"
    },
    "oneMinuteData": {
      "type": "boolean"
    },
    "thread": {
      "type": "number"
    },
    "alsoHardwareId": {
      "type": "number"
    },
    "alsoSiteId": {
      "type": "number"
    },
    "siteHasInverterGroups": {
      "type": "boolean"
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
    "outputAllowed": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "outputKey": {
      "type": "string"
    },
    "weatherStationKey1": {
      "type": "string"
    },
    "weatherStationKey2": {
      "type": "string"
    },
    "configs": {
      "type": "string"
    },
    "array": {
      "type": "object",
      "properties": {}
    },
    "eGauge": {
      "type": "object",
      "properties": {}
    },
    "gateway": {
      "type": "object",
      "properties": {}
    },
    "kiosk": {
      "type": "object",
      "properties": {}
    },
    "meter": {
      "type": "object",
      "properties": {
        "scale": {
          "type": "number"
        },
        "scaleKw": {
          "type": "number"
        },
        "scaleKwh": {
          "type": "number"
        },
        "grossEnergy": {
          "type": "number"
        },
        "maxPower": {
          "type": "number"
        },
        "maxVoltage": {
          "type": "number"
        },
        "maxCurrent": {
          "type": "number"
        },
        "acInfo": {
          "type": "number"
        },
        "noLoadLoss": {
          "type": "number"
        },
        "loadLoss": {
          "type": "number"
        },
        "load": {
          "type": "number"
        },
        "lineResistance": {
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
        "showLoad": {
          "type": "boolean"
        },
        "kw": {
          "type": "number"
        },
        "kwhNet": {
          "type": "number"
        },
        "kwhDelivered": {
          "type": "number"
        },
        "kwhReceived": {
          "type": "number"
        }
      }
    },
    "pvConfig": {
      "type": "object",
      "properties": {}
    },
    "thermal": {
      "type": "object",
      "properties": {}
    },
    "turbine": {
      "type": "object",
      "properties": {}
    },
    "virtualWeather": {
      "type": "object",
      "properties": {}
    },
    "weather": {
      "type": "object",
      "properties": {}
    },
    "zone": {
      "type": "object",
      "properties": {}
    },
    "commonDC": {
      "type": "boolean"
    },
    "commonDCAllMatch": {
      "type": "boolean"
    },
    "locusId": {
      "type": "string"
    },
    "syncToLocus": {
      "type": "boolean"
    },
    "taskKey": {
      "type": "string"
    },
    "readOnly": {
      "type": "boolean"
    },
    "isReportable": {
      "type": "boolean"
    },
    "latitude": {
      "type": "number"
    },
    "longitude": {
      "type": "number"
    },
    "hash": {
      "type": "string"
    },
    "hasCapacity": {
      "type": "boolean"
    },
    "inverterKw": {
      "type": "number"
    },
    "siteDcShare": {
      "type": "number"
    },
    "pullData": {
      "type": "boolean"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/edit/hardware/H511566
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/H511566/administration/config
```

**Response:**

```json
{
  "key": "H511566",
  "parentKey": "S68143",
  "ts": "2025-12-22T22:01:11Z",
  "description": "Accuvim II - SITE??  Meter - M1",
  "assetId": "",
  "hardwareId": "C20909_S68143_PM1",
  "instance": 1,
  "functionId": "PM1",
  "functionCode": 2,
  "hardwareStatus": 1,
  "capacityKw": 524.88,
  "sort": 4,
  "gatewayKey": "H511564",
  "gatewayId": "000CC68FAF30",
  "gatewayFwVersion": "",
  "gatewayScriptCount": "",
  "gatewayType": 2,
  "serialNum": "AHB54010502",
  "modelNum": "ACCUENERGY IIR-D-mV-P1V3",
  "installDate": "2024-07-12",
  "driverId": 19601,
  "driverDescription": "Meters USA Acuvim II Power meter - Primary Mode",
  "driverFlags": 16385,
  "driverName": "AccuEnergy Acuvim II(R-D-5A) Primary Mode(SS)Standard",
  "driverNotes": "Driver conforms to Standard IO, supercedes all Acuvim Primary Mode Drivers. If Acuvim is in Secondary mode, please use DID 19604.\r\rBustest kW:\rreg=16418 numreg=2\rRogowski Coil Meters: Apply ScaleKW value of 100.\r\r*If Basic Parameter Mode =1 & Energy Display Mode = 0 this means Primary Mode is selected.  ScaleKW = 0.001 |ScaleKWH = 0.1 | ScaleAmps = 1.0 | ScaleVolts = 1.0\r*If vice versa, Secondary Mode is enabled, use DID 19604\r\rConfirmed to work with versions below:\rMeter Firmware - v4.10\rModule Firmware Version - v1.19",
  "validatedByKey": "",
  "validatedDateTime": "0001-01-01T00:00:00",
  "debug": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2025-12-23T00:06:51.4079642Z",
  "reportExclude": false,
  "limitedCommunication": false,
  "primary": false,
  "address": "192.168.13.42",
  "unitId": 1,
  "isTcp": true,
  "port": 0,
  "serialMode": 0,
  "baud": "",
  "newNote": "",
  "dashboardKey": "",
  "dcRating": 524880,
  "defaultChart": 15,
  "chartSectionCode": 2,
  "conflictNames": null,
  "isConflictAcknowledged": false,
  "settings": [
    {
      "originalValue": "N/A",
      "index": 0,
      "name": "dev:portMode",
      "value": "N/A",
      "type": 0
    },
    {
      "originalValue": 1,
      "index": 1,
      "name": "dev:UnitID",
      "value": 1,
      "type": 1
    },
    {
      "originalValue": 502,
      "index": 2,
      "name": "dev:TCPport",
      "value": 502,
      "type": 1
    },
    {
      "originalValue": 0,
      "index": 3,
      "name": "dev:RegOffset",
      "value": 0,
      "type": 1
    },
    {
      "originalValue": 0.001,
      "index": 4,
      "name": "dev:ScaleKW",
      "value": 0.001,
      "type": 2
    },
    {
      "originalValue": "0",
      "index": 5,
      "name": "dev:Reverse",
      "value": "0",
      "type": 0
    },
    {
      "originalValue": 0.1,
      "index": 6,
      "name": "dev:ScaleKWH",
      "value": 0.1,
      "type": 2
    },
    {
      "originalValue": 1,
      "index": 7,
      "name": "dev:ScaleAmps",
      "value": 1,
      "type": 2
    },
    {
      "originalValue": 1,
      "index": 8,
      "name": "dev:ScaleVolts",
      "value": 1,
      "type": 2
    },
    {
      "originalValue": "PM1",
      "index": 9,
      "name": "ShortName",
      "value": "PM1",
      "type": 0
    }
  ],
  "deviceRegisters": [
    {
      "index": 0,
      "name": "iFreq",
      "localizedName": "Frequency",
      "dataName": "Hz",
      "standardDataName": "Frequency",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "Hz",
      "dataNameDetail": null
    },
    {
      "index": 1,
      "name": "Power factor",
      "localizedName": "Power Factor",
      "dataName": "PowerFactor",
      "standardDataName": "Power_Factor",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "PF",
      "dataNameDetail": null
    },
    {
      "index": 2,
      "name": "Import energy",
      "localizedName": "Active Energy Received (with Offset)",
      "dataName": "KWHrec",
      "standardDataName": "Active_Energy_Rec",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kWh",
      "dataNameDetail": null
    },
    {
      "index": 3,
      "name": "Export energy",
      "localizedName": "Active Energy Delivered (with Offset)",
      "dataName": "KWHdel",
      "standardDataName": "Active_Energy_Del",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kWh",
      "dataNameDetail": null
    },
    {
      "index": 4,
      "name": "Reactive Import energy",
      "localizedName": "Reactive Energy Received",
      "dataName": "Reactive_Energy_Rec",
      "standardDataName": "Reactive_Energy_Rec",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kVARh",
      "dataNameDetail": null
    },
    {
      "index": 5,
      "name": "Reactive Export energy",
      "localizedName": "Reactive Energy Delivered",
      "dataName": "Reactive_Energy_Del",
      "standardDataName": "Reactive_Energy_Del",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kVARh",
      "dataNameDetail": null
    },
    {
      "index": 6,
      "name": "Total energy net",
      "localizedName": "Active Energy Net",
      "dataName": "KWHnet",
      "standardDataName": "Active_Energy_Net",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kWh",
      "dataNameDetail": null
    },
    {
      "index": 7,
      "name": "Reactive Total energy net",
      "localizedName": "Reactive Energy Net",
      "dataName": "Reactive_Energy_Net",
      "standardDataName": "Reactive_Energy_Net",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kVARh",
      "dataNameDetail": null
    },
    {
      "index": 8,
      "name": "Apparent Energy",
      "localizedName": "Apparent Energy Net",
      "dataName": "KVAh",
      "standardDataName": "Apparent_Energy_Net",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kVAh",
      "dataNameDetail": null
    },
    {
      "index": 9,
      "name": "Reactive Power",
      "localizedName": "Reactive Power",
      "dataName": "KVAR",
      "standardDataName": "Reactive_Power",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kVAR",
      "dataNameDetail": null
    },
    {
      "index": 10,
      "name": "Volts A-N",
      "localizedName": "AC Voltage A (Line-Neutral)",
      "dataName": "VacA",
      "standardDataName": "Voltage_AN",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 11,
      "name": "Volts B-N",
      "localizedName": "AC Voltage B (Line-Neutral)",
      "dataName": "VacB",
      "standardDataName": "Voltage_BN",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 12,
      "name": "Volts C-N",
      "localizedName": "AC Voltage C (Line-Neutral)",
      "dataName": "VacC",
      "standardDataName": "Voltage_CN",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 13,
      "name": "Average voltage L-N",
      "localizedName": "AC Voltage Average L-N",
      "dataName": "VacLN",
      "standardDataName": "Voltage_LN_Avg",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 14,
      "name": "Volts A-B",
      "localizedName": "AC Voltage A-B (Line-Line)",
      "dataName": "VacAB",
      "standardDataName": "Voltage_AB",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 15,
      "name": "Volts B-C",
      "localizedName": "AC Voltage B-C (Line-Line)",
      "dataName": "VacBC",
      "standardDataName": "Voltage_BC",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 16,
      "name": "Volts C-A",
      "localizedName": "AC Voltage C-A (Line-Line)",
      "dataName": "VacCA",
      "standardDataName": "Voltage_CA",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 17,
      "name": "Average voltage L-L",
      "localizedName": "Line to Line voltage",
      "dataName": "VacLL",
      "standardDataName": "Voltage_LL_Avg",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": false,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 18,
      "name": "Amps A",
      "localizedName": "AC Current A",
      "dataName": "IacA",
      "standardDataName": "Current_A",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 19,
      "name": "Amps B",
      "localizedName": "AC Current B",
      "dataName": "IacB",
      "standardDataName": "Current_B",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 20,
      "name": "Amps C",
      "localizedName": "AC Current C",
      "dataName": "IacC",
      "standardDataName": "Current_C",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 21,
      "name": "Power A",
      "localizedName": "Active Power A",
      "dataName": "Active_Power_A",
      "standardDataName": "Active_Power_A",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kW",
      "dataNameDetail": null
    },
    {
      "index": 22,
      "name": "Power B",
      "localizedName": "Active Power B",
      "dataName": "Active_Power_B",
      "standardDataName": "Active_Power_B",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kW",
      "dataNameDetail": null
    },
    {
      "index": 23,
      "name": "Power C",
      "localizedName": "Active Power C",
      "dataName": "Active_Power_C",
      "standardDataName": "Active_Power_C",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kW",
      "dataNameDetail": null
    },
    {
      "index": 24,
      "name": "Total Power",
      "localizedName": "Active Power",
      "dataName": "KW",
      "standardDataName": "Active_Power",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kW",
      "dataNameDetail": null
    },
    {
      "index": 25,
      "name": "Power factor A",
      "localizedName": "Power Factor A",
      "dataName": "PFA",
      "standardDataName": "Power_Factor_A",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "PF",
      "dataNameDetail": null
    },
    {
      "index": 26,
      "name": "Power factor B",
      "localizedName": "Power Factor B",
      "dataName": "PFB",
      "standardDataName": "Power_Factor_B",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "PF",
      "dataNameDetail": null
    },
    {
      "index": 27,
      "name": "Power factor C",
      "localizedName": "Power Factor C",
      "dataName": "PFC",
      "standardDataName": "Power_Factor_C",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "PF",
      "dataNameDetail": null
    },
    {
      "index": 28,
      "name": "Phase A Reactive Power ",
      "localizedName": "Reactive Power A",
      "dataName": "kVARA",
      "standardDataName": "Reactive_Power_A",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kVAR",
      "dataNameDetail": null
    },
    {
      "index": 29,
      "name": "Phase B Reactive Power",
      "localizedName": "Reactive Power B",
      "dataName": "kVARB",
      "standardDataName": "Reactive_Power_B",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kVAR",
      "dataNameDetail": null
    },
    {
      "index": 30,
      "name": "Phase C Reactive Power ",
      "localizedName": "Reactive Power C",
      "dataName": "kVARC",
      "standardDataName": "Reactive_Power_C",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kVAR",
      "dataNameDetail": null
    },
    {
      "index": 31,
      "name": "Active Energy Delivered Raw",
      "localizedName": "Active Energy Delivered (without Offset)",
      "dataName": "KWHdelRaw",
      "standardDataName": "Active_Energy_Raw_Del",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kWh",
      "dataNameDetail": null
    },
    {
      "index": 32,
      "name": "Active Energy Received Raw",
      "localizedName": "Active Energy Received (without Offset)",
      "dataName": "KWHrecRaw",
      "standardDataName": "Active_Energy_Raw_Rec",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kWh",
      "dataNameDetail": null
    },
    {
      "index": 33,
      "name": "Active Energy Net Raw",
      "localizedName": "Active Energy Net Raw",
      "dataName": "KWHnetRaw",
      "standardDataName": "Active_Energy_Raw_Net",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kWh",
      "dataNameDetail": null
    },
    {
      "index": 34,
      "name": "Phase Total Harmonic Current Distortion",
      "localizedName": "Phase Total Harmonic Current Distortion",
      "dataName": "THD_Current",
      "standardDataName": "THD_Current",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 35,
      "name": "Phase Total Harmonic Voltage Distortion",
      "localizedName": "Phase Total Harmonic Voltage Distortion",
      "dataName": "THD_Voltage",
      "standardDataName": "THD_Voltage",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 36,
      "name": "PT Ratio (primary)",
      "localizedName": "Potential Transformer Primary Ratio",
      "dataName": "Potential_XMFR_Primary",
      "standardDataName": "Potential_XMFR_Primary",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 37,
      "name": "PT Ratio (secondary)",
      "localizedName": "Potential Transformer Secondary Ratio",
      "dataName": "Potential_XMFR_Secondary",
      "standardDataName": "Potential_XMFR_Secondary",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 38,
      "name": "CT Ratio (primary)",
      "localizedName": "Current Transformer Primary Ratio",
      "dataName": "Current_XMFR_Primary",
      "standardDataName": "Current_XMFR_Primary",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 39,
      "name": "CT Ratio (secondary)",
      "localizedName": "Current Transformer Secondary Ratio",
      "dataName": "Current_XMFR_Secondary",
      "standardDataName": "Current_XMFR_Secondary",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": null
    }
  ],
  "additionalRegisters": [],
  "decreaseDifference": 100,
  "autoCorrectDecrease": false,
  "fixedEnergyOffset": 0,
  "increaseDifference": -1,
  "autoCorrectIncrease": false,
  "isThermal": false,
  "reverse": false,
  "registerOffsets": [],
  "driverRegisters": [],
  "virtualRegisters": [],
  "tags": {
    "key": "{\"ancestorKey\":\"H511566\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
    "lastChanged": null,
    "attributes": [],
    "keywords": [],
    "notes": [
      {
        "key": "x050bf173",
        "parentKey": "H511566",
        "authorKey": "U39142",
        "authorName": "Reuben Brazeal",
        "date": "2024-07-12T14:05:31Z",
        "kind": "text",
        "isEvent": true,
        "text": "Password created"
      }
    ],
    "powerDisplays": []
  },
  "sampleRate": 0,
  "uploadRate": 0,
  "oneMinuteData": false,
  "thread": 0,
  "alsoHardwareId": 0,
  "alsoSiteId": 0,
  "siteHasInverterGroups": true,
  "groupAllowed": [],
  "groupKey": "",
  "outputAllowed": [],
  "outputKey": "",
  "weatherStationKey1": "",
  "weatherStationKey2": "",
  "configs": [
    "Meter"
  ],
  "array": null,
  "eGauge": null,
  "gateway": null,
  "kiosk": null,
  "meter": {
    "scale": 0,
    "scaleKw": 0.001,
    "scaleKwh": 0.1,
    "grossEnergy": 0,
    "maxPower": 524.88,
    "maxVoltage": 480,
    "maxCurrent": 1100,
    "acInfo": 2,
    "noLoadLoss": 0,
    "loadLoss": 0,
    "load": 0,
    "lineResistance": 0,
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
    "showLoad": false,
    "kw": 0,
    "kwhNet": 0,
    "kwhDelivered": 0,
    "kwhReceived": 0
  },
  "pvConfig": null,
  "thermal": null,
  "turbine": null,
  "virtualWeather": null,
  "weather": null,
  "zone": null,
  "commonDC": false,
  "commonDCAllMatch": true,
  "locusId": "",
  "syncToLocus": false,
  "taskKey": "",
  "readOnly": false,
  "isReportable": true,
  "latitude": 34.0371297,
  "longitude": -118.1014776,
  "hash": "",
  "hasCapacity": true,
  "inverterKw": 0,
  "siteDcShare": 0,
  "pullData": false
}
```

[Return to top](#top)

