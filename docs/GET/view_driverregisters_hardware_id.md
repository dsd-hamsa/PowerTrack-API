<a id="top"></a>
# /api/view/driverregisters/{hardware_id}

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
    "driverRegisters": {
      "type": "object",
      "properties": {
        "dataName": {
          "type": "string"
        },
        "dataNameDetail": {
          "type": "object",
          "properties": {
            "dataName": {
              "type": "string"
            },
            "dataNameDescription": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "details": {
              "type": "object",
              "properties": {
                "aCmeter": {
                  "type": "boolean"
                },
                "adminHide": {
                  "type": "boolean"
                },
                "allowArchiveRaw": {
                  "type": "boolean"
                },
                "condense": {
                  "type": "number"
                },
                "dCmeter": {
                  "type": "boolean"
                },
                "doublePrecision": {
                  "type": "boolean"
                },
                "equivalent": {
                  "type": "number"
                },
                "excludedChannels": {
                  "type": "string"
                },
                "functionCodes": {
                  "type": "array",
                  "items": {
                    "type": "unknown"
                  }
                },
                "functions": {
                  "type": "string"
                },
                "isFloat": {
                  "type": "boolean"
                },
                "isStandardDataName": {
                  "type": "boolean"
                },
                "isStatus": {
                  "type": "boolean"
                },
                "otherAliasPTDataNameValues": {
                  "type": "string"
                },
                "otherAliasPTDataNames": {
                  "type": "number"
                },
                "typeId": {
                  "type": "string"
                },
                "units": {
                  "type": "number"
                }
              }
            },
            "equivalent": {
              "type": "number"
            },
            "errors": {
              "type": "array",
              "items": {
                "type": "unknown"
              }
            },
            "functionCodes": {
              "type": "array",
              "items": {
                "type": "unknown"
              }
            },
            "goldenDriverDataNames": {
              "type": "object",
              "properties": {}
            },
            "isAllowedForRegisterSetsArray": {
              "type": "boolean"
            },
            "isStandardDataName": {
              "type": "boolean"
            },
            "otherAliasPTDataNames": {
              "type": "number"
            },
            "registerDataNameIdentifier": {
              "type": "number"
            },
            "registerName": {
              "type": "string"
            },
            "registerSetsArrayDisplayedName": {
              "type": "string"
            },
            "standardDataNameArchiveRawAndIntervalData": {
              "type": "boolean"
            }
          }
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
    "key": {
      "type": "string"
    },
    "lastChanged": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/view/driverregisters/H70694?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 3fefeb
referer: https://apps.alsoenergy.com/powertrack/H70694/administration/config
```

**Response:**

```json
{
  "driverRegisters": [
    {
      "dataName": "KwAC",
      "dataNameDetail": {
        "dataName": "KwAC",
        "dataNameDescription": "",
        "description": "Active Power (Equivalent: KwAC)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "KW,Active_Power",
          "otherAliasPTDataNames": [
            2,
            232
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 10
        },
        "equivalent": 38,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          2,
          232
        ],
        "registerDataNameIdentifier": 38,
        "registerName": "Active Power",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "AC Power Output",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "AC Apparent Power",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "KwhAC",
      "dataNameDetail": {
        "dataName": "KwhAC",
        "dataNameDescription": "",
        "description": "Active Energy Gross (Equivalent: KwhAC)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 16,
          "dCmeter": false,
          "doublePrecision": true,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "Active_Energy_Gross",
          "otherAliasPTDataNames": [
            230
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 11
        },
        "equivalent": 40,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          230
        ],
        "registerDataNameIdentifier": 40,
        "registerName": "Active Energy Gross",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "AC Energy",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "AC Today",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Efficiency",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "PF",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Pmax Day",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "RunT",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "AC Grid Frequency",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "VacAB",
      "dataNameDetail": {
        "dataName": "VacAB",
        "dataNameDescription": "",
        "description": "AC Voltage AB (Equivalent: VacAB)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "AC_Voltage_AB,VaB,Voltage_AB",
          "otherAliasPTDataNames": [
            348,
            18,
            325
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 2
        },
        "equivalent": 20,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          348,
          18,
          325
        ],
        "registerDataNameIdentifier": 20,
        "registerName": "AC Voltage AB",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "L1-L2 AC Voltage",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "VacBC",
      "dataNameDetail": {
        "dataName": "VacBC",
        "dataNameDescription": "",
        "description": "AC Voltage BC (Equivalent: VacBC)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "AC_Voltage_BC,Vbc,Voltage_BC",
          "otherAliasPTDataNames": [
            351,
            21,
            327
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 2
        },
        "equivalent": 22,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          351,
          21,
          327
        ],
        "registerDataNameIdentifier": 22,
        "registerName": "AC Voltage BC",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "L2-L3 AC Voltage",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "VacCA",
      "dataNameDetail": {
        "dataName": "VacCA",
        "dataNameDescription": "",
        "description": "AC Voltage CA (Equivalent: VacCA)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "AC_Voltage_CA,Vca,Voltage_CA",
          "otherAliasPTDataNames": [
            353,
            24,
            329
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 2
        },
        "equivalent": 23,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          353,
          24,
          329
        ],
        "registerDataNameIdentifier": 23,
        "registerName": "AC Voltage CA",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "L1-L3 AC Voltage",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "IacA",
      "dataNameDetail": {
        "dataName": "IacA",
        "dataNameDescription": "",
        "description": "AC Current A (Equivalent: IacA)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "AC_Current_A,Current_A",
          "otherAliasPTDataNames": [
            344,
            265
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 4
        },
        "equivalent": 25,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          344,
          265
        ],
        "registerDataNameIdentifier": 25,
        "registerName": "AC Current A",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Phase A Current",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "IacB",
      "dataNameDetail": {
        "dataName": "IacB",
        "dataNameDescription": "",
        "description": "AC Current B (Equivalent: IacB)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "AC_Current_B,Current_B",
          "otherAliasPTDataNames": [
            345,
            266
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 4
        },
        "equivalent": 26,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          345,
          266
        ],
        "registerDataNameIdentifier": 26,
        "registerName": "AC Current B",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Phase B Current",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "IacC",
      "dataNameDetail": {
        "dataName": "IacC",
        "dataNameDescription": "",
        "description": "AC Current C (Equivalent: IacC)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "AC_Current_C,Current_C",
          "otherAliasPTDataNames": [
            346,
            267
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 4
        },
        "equivalent": 27,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          346,
          267
        ],
        "registerDataNameIdentifier": 27,
        "registerName": "AC Current C",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Phase C Current",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Vdc1",
      "dataNameDetail": {
        "dataName": "Vdc_",
        "dataNameDescription": "",
        "description": "DC Voltage (specify string/bus/zone/ channel) (Equivalent: Vdc_)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "DC_Voltage_",
          "otherAliasPTDataNames": [
            369
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 2
        },
        "equivalent": 49,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          369
        ],
        "registerDataNameIdentifier": 49,
        "registerName": "DC Voltage (specify string/bus/zone/ channel)",
        "registerSetsArrayDisplayedName": "DC Voltage (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "DC Voltage 1",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Idc1",
      "dataNameDetail": {
        "dataName": "Idc_",
        "dataNameDescription": "",
        "description": "DC Current (specify string/bus/zone/ channel) (Equivalent: Idc_)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "DC_Current_,ZoneAmps_,I_",
          "otherAliasPTDataNames": [
            367,
            165,
            139
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 4
        },
        "equivalent": 50,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          367,
          165,
          139
        ],
        "registerDataNameIdentifier": 50,
        "registerName": "DC Current (specify string/bus/zone/ channel)",
        "registerSetsArrayDisplayedName": "DC Current (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "DC Current 1",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Vdc2",
      "dataNameDetail": {
        "dataName": "Vdc_",
        "dataNameDescription": "",
        "description": "DC Voltage (specify string/bus/zone/ channel) (Equivalent: Vdc_)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "DC_Voltage_",
          "otherAliasPTDataNames": [
            369
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 2
        },
        "equivalent": 49,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          369
        ],
        "registerDataNameIdentifier": 49,
        "registerName": "DC Voltage (specify string/bus/zone/ channel)",
        "registerSetsArrayDisplayedName": "DC Voltage (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "DC Voltage 2",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Vdc3",
      "dataNameDetail": {
        "dataName": "Vdc_",
        "dataNameDescription": "",
        "description": "DC Voltage (specify string/bus/zone/ channel) (Equivalent: Vdc_)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "DC_Voltage_",
          "otherAliasPTDataNames": [
            369
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 2
        },
        "equivalent": 49,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          369
        ],
        "registerDataNameIdentifier": 49,
        "registerName": "DC Voltage (specify string/bus/zone/ channel)",
        "registerSetsArrayDisplayedName": "DC Voltage (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "DC Voltage 3",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Idc2",
      "dataNameDetail": {
        "dataName": "Idc_",
        "dataNameDescription": "",
        "description": "DC Current (specify string/bus/zone/ channel) (Equivalent: Idc_)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "DC_Current_,ZoneAmps_,I_",
          "otherAliasPTDataNames": [
            367,
            165,
            139
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 4
        },
        "equivalent": 50,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          367,
          165,
          139
        ],
        "registerDataNameIdentifier": 50,
        "registerName": "DC Current (specify string/bus/zone/ channel)",
        "registerSetsArrayDisplayedName": "DC Current (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "DC Current 2",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Idc3",
      "dataNameDetail": {
        "dataName": "Idc_",
        "dataNameDescription": "",
        "description": "DC Current (specify string/bus/zone/ channel) (Equivalent: Idc_)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "DC_Current_,ZoneAmps_,I_",
          "otherAliasPTDataNames": [
            367,
            165,
            139
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 4
        },
        "equivalent": 50,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          367,
          165,
          139
        ],
        "registerDataNameIdentifier": 50,
        "registerName": "DC Current (specify string/bus/zone/ channel)",
        "registerSetsArrayDisplayedName": "DC Current (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "DC Current 3",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Idc",
      "dataNameDetail": {
        "dataName": "Idc",
        "dataNameDescription": "",
        "description": "DC Current (Equivalent: Idc)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "DC_Current_Total,DC_Current_PVBus",
          "otherAliasPTDataNames": [
            432,
            398
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 4
        },
        "equivalent": 34,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          432,
          398
        ],
        "registerDataNameIdentifier": 34,
        "registerName": "DC Current",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "DC Current Total",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Vdc",
      "dataNameDetail": {
        "dataName": "Vdc",
        "dataNameDescription": "",
        "description": "DC Voltage (Equivalent: Vdc)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "DC_Voltage,DC_Voltage_Avg,DC_Voltage_PVBus",
          "otherAliasPTDataNames": [
            440,
            441,
            415
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 2
        },
        "equivalent": 33,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          440,
          441,
          415
        ],
        "registerDataNameIdentifier": 33,
        "registerName": "DC Voltage",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "DC Voltage Avg",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Iac",
      "dataNameDetail": {
        "dataName": "Iac",
        "dataNameDescription": "",
        "description": "AC Current Average (Equivalent: Iac)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "AC_Current_Avg,Iavg,Current_Avg",
          "otherAliasPTDataNames": [
            347,
            269,
            268
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 4
        },
        "equivalent": 37,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          347,
          269,
          268
        ],
        "registerDataNameIdentifier": 37,
        "registerName": "AC Current Average",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "AC Phase Current",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Vac",
      "dataNameDetail": {
        "dataName": "Vac",
        "dataNameDescription": "",
        "description": "AC Voltage Average L-N (Equivalent: Vac)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "Vacln,Vaclna,VNavg,Voltage_LN_Avg,AC_Voltage_LN_Avg",
          "otherAliasPTDataNames": [
            340,
            341,
            339,
            338,
            343
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 2
        },
        "equivalent": 36,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          340,
          341,
          339,
          338,
          343
        ],
        "registerDataNameIdentifier": 36,
        "registerName": "AC Voltage Average L-N",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "AC Line Voltage",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "DeviceTemp",
      "dataNameDetail": {
        "dataName": "DeviceTemp",
        "dataNameDescription": "",
        "description": "Device Temperature (Equivalent: DeviceTemp)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "Temp_Device",
          "otherAliasPTDataNames": [
            454
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 30
        },
        "equivalent": 188,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          454
        ],
        "registerDataNameIdentifier": 188,
        "registerName": "Device Temperature",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Module Temp",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "InternalTemp",
      "dataNameDetail": {
        "dataName": "InternalTemp",
        "dataNameDescription": "",
        "description": "Internal Temperature (Equivalent: InternalTemp)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [],
          "functions": "",
          "isFloat": true,
          "isStandardDataName": false,
          "isStatus": false,
          "otherAliasPTDataNameValues": "InteriorTemp,Temp_Internal",
          "otherAliasPTDataNames": [
            461,
            460
          ],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 30
        },
        "equivalent": 189,
        "errors": [],
        "functionCodes": [],
        "goldenDriverDataNames": null,
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": false,
        "otherAliasPTDataNames": [
          461,
          460
        ],
        "registerDataNameIdentifier": 189,
        "registerName": "Internal Temperature",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": false
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Internal Temp",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Temp_XMFR",
      "dataNameDetail": {
        "dataName": "Temp_XMFR",
        "dataNameDescription": "Average temperature of the transformer",
        "description": "Transformer Temp Avg (Equivalent: Temp_XMFR)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": false,
          "condense": 0,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [
            1,
            39,
            45,
            49,
            48,
            54
          ],
          "functions": "PV,BI,BG,MV,HV,HI",
          "isFloat": true,
          "isStandardDataName": true,
          "isStatus": false,
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 30
        },
        "equivalent": 389,
        "errors": [],
        "functionCodes": [
          1,
          39,
          45,
          49,
          48,
          54
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 389,
            "dataNameAndType": "Temp_XMFR (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          }
        ],
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [],
        "registerDataNameIdentifier": 389,
        "registerName": "Transformer Temp Avg",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": true
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Transformer Temp",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Inverter Work Mode",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Error Time yyyy",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Error Time mm-dd",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Error Time hh-mm",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Error Time ss-00",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Fault",
      "dataNameDetail": {
        "dataName": "Fault",
        "dataNameDescription": "Fault status condition flag",
        "description": "Fault (Equivalent: Fault)",
        "details": {
          "aCmeter": true,
          "adminHide": false,
          "allowArchiveRaw": true,
          "condense": 1,
          "dCmeter": true,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [
            2,
            4,
            3,
            20,
            16,
            51,
            52,
            53,
            37,
            41,
            1,
            39,
            40,
            24,
            7,
            6,
            8,
            43,
            44,
            25,
            42,
            47,
            50,
            49,
            48,
            46,
            45,
            54,
            56,
            57
          ],
          "functions": "PM,GM,CM,XM,SM,NM,AX,BW,BM,DP,PV,BI,DC,ST,SC,SA,SS,BA,RK,BS,BB,PP,TU,MV,HV,FS,BG,HI,SE,HB",
          "isFloat": false,
          "isStandardDataName": true,
          "isStatus": true,
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 0
        },
        "equivalent": 442,
        "errors": [],
        "functionCodes": [
          2,
          4,
          3,
          20,
          16,
          51,
          52,
          53,
          37,
          41,
          1,
          39,
          40,
          24,
          7,
          6,
          8,
          43,
          44,
          25,
          42,
          47,
          50,
          49,
          48,
          46,
          45,
          54,
          56,
          57
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 442,
            "dataNameAndType": "Fault (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          }
        ],
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [],
        "registerDataNameIdentifier": 442,
        "registerName": "Fault",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": true
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Fault Code",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Warning",
      "dataNameDetail": {
        "dataName": "Warning",
        "dataNameDescription": "Warning Status Flag",
        "description": "Warning (Equivalent: Warning)",
        "details": {
          "aCmeter": false,
          "adminHide": false,
          "allowArchiveRaw": true,
          "condense": 1,
          "dCmeter": false,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [
            43,
            44,
            25,
            42,
            47,
            50,
            46,
            49,
            48,
            56,
            57
          ],
          "functions": "BA,RK,BS,BB,PP,TU,FS,MV,HV,SE,HB",
          "isFloat": false,
          "isStandardDataName": true,
          "isStatus": true,
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 0
        },
        "equivalent": 206,
        "errors": [],
        "functionCodes": [
          43,
          44,
          25,
          42,
          47,
          50,
          46,
          49,
          48,
          56,
          57
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 206,
            "dataNameAndType": "Warning (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          }
        ],
        "isAllowedForRegisterSetsArray": false,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [],
        "registerDataNameIdentifier": 206,
        "registerName": "Warning",
        "registerSetsArrayDisplayedName": "",
        "standardDataNameArchiveRawAndIntervalData": true
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Warn Code",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Fault0",
      "dataNameDetail": {
        "dataName": "Fault_",
        "dataNameDescription": "Fault status condition flag",
        "description": "Fault (specify channel) (Equivalent: Fault_)",
        "details": {
          "aCmeter": true,
          "adminHide": false,
          "allowArchiveRaw": true,
          "condense": 1,
          "dCmeter": true,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [
            2,
            4,
            3,
            20,
            16,
            51,
            52,
            53,
            37,
            41,
            1,
            39,
            40,
            24,
            7,
            6,
            8,
            45,
            43,
            44,
            25,
            42,
            47,
            50,
            49,
            48,
            46,
            54,
            56,
            57
          ],
          "functions": "PM,GM,CM,XM,SM,NM,AX,BW,BM,DP,PV,BI,DC,ST,SC,SA,SS,BG,BA,RK,BS,BB,PP,TU,MV,HV,FS,HI,SE,HB",
          "isFloat": false,
          "isStandardDataName": true,
          "isStatus": true,
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 0
        },
        "equivalent": 443,
        "errors": [],
        "functionCodes": [
          2,
          4,
          3,
          20,
          16,
          51,
          52,
          53,
          37,
          41,
          1,
          39,
          40,
          24,
          7,
          6,
          8,
          45,
          43,
          44,
          25,
          42,
          47,
          50,
          49,
          48,
          46,
          54,
          56,
          57
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 443,
            "dataNameAndType": "Fault_ (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          }
        ],
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [],
        "registerDataNameIdentifier": 443,
        "registerName": "Fault (specify channel)",
        "registerSetsArrayDisplayedName": "Fault (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": true
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Fault Code 0",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Fault1",
      "dataNameDetail": {
        "dataName": "Fault_",
        "dataNameDescription": "Fault status condition flag",
        "description": "Fault (specify channel) (Equivalent: Fault_)",
        "details": {
          "aCmeter": true,
          "adminHide": false,
          "allowArchiveRaw": true,
          "condense": 1,
          "dCmeter": true,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [
            2,
            4,
            3,
            20,
            16,
            51,
            52,
            53,
            37,
            41,
            1,
            39,
            40,
            24,
            7,
            6,
            8,
            45,
            43,
            44,
            25,
            42,
            47,
            50,
            49,
            48,
            46,
            54,
            56,
            57
          ],
          "functions": "PM,GM,CM,XM,SM,NM,AX,BW,BM,DP,PV,BI,DC,ST,SC,SA,SS,BG,BA,RK,BS,BB,PP,TU,MV,HV,FS,HI,SE,HB",
          "isFloat": false,
          "isStandardDataName": true,
          "isStatus": true,
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 0
        },
        "equivalent": 443,
        "errors": [],
        "functionCodes": [
          2,
          4,
          3,
          20,
          16,
          51,
          52,
          53,
          37,
          41,
          1,
          39,
          40,
          24,
          7,
          6,
          8,
          45,
          43,
          44,
          25,
          42,
          47,
          50,
          49,
          48,
          46,
          54,
          56,
          57
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 443,
            "dataNameAndType": "Fault_ (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          }
        ],
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [],
        "registerDataNameIdentifier": 443,
        "registerName": "Fault (specify channel)",
        "registerSetsArrayDisplayedName": "Fault (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": true
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Fault Code 1",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Fault2",
      "dataNameDetail": {
        "dataName": "Fault_",
        "dataNameDescription": "Fault status condition flag",
        "description": "Fault (specify channel) (Equivalent: Fault_)",
        "details": {
          "aCmeter": true,
          "adminHide": false,
          "allowArchiveRaw": true,
          "condense": 1,
          "dCmeter": true,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [
            2,
            4,
            3,
            20,
            16,
            51,
            52,
            53,
            37,
            41,
            1,
            39,
            40,
            24,
            7,
            6,
            8,
            45,
            43,
            44,
            25,
            42,
            47,
            50,
            49,
            48,
            46,
            54,
            56,
            57
          ],
          "functions": "PM,GM,CM,XM,SM,NM,AX,BW,BM,DP,PV,BI,DC,ST,SC,SA,SS,BG,BA,RK,BS,BB,PP,TU,MV,HV,FS,HI,SE,HB",
          "isFloat": false,
          "isStandardDataName": true,
          "isStatus": true,
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 0
        },
        "equivalent": 443,
        "errors": [],
        "functionCodes": [
          2,
          4,
          3,
          20,
          16,
          51,
          52,
          53,
          37,
          41,
          1,
          39,
          40,
          24,
          7,
          6,
          8,
          45,
          43,
          44,
          25,
          42,
          47,
          50,
          49,
          48,
          46,
          54,
          56,
          57
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 443,
            "dataNameAndType": "Fault_ (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          }
        ],
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [],
        "registerDataNameIdentifier": 443,
        "registerName": "Fault (specify channel)",
        "registerSetsArrayDisplayedName": "Fault (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": true
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Fault Code 2",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Fault3",
      "dataNameDetail": {
        "dataName": "Fault_",
        "dataNameDescription": "Fault status condition flag",
        "description": "Fault (specify channel) (Equivalent: Fault_)",
        "details": {
          "aCmeter": true,
          "adminHide": false,
          "allowArchiveRaw": true,
          "condense": 1,
          "dCmeter": true,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [
            2,
            4,
            3,
            20,
            16,
            51,
            52,
            53,
            37,
            41,
            1,
            39,
            40,
            24,
            7,
            6,
            8,
            45,
            43,
            44,
            25,
            42,
            47,
            50,
            49,
            48,
            46,
            54,
            56,
            57
          ],
          "functions": "PM,GM,CM,XM,SM,NM,AX,BW,BM,DP,PV,BI,DC,ST,SC,SA,SS,BG,BA,RK,BS,BB,PP,TU,MV,HV,FS,HI,SE,HB",
          "isFloat": false,
          "isStandardDataName": true,
          "isStatus": true,
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 0
        },
        "equivalent": 443,
        "errors": [],
        "functionCodes": [
          2,
          4,
          3,
          20,
          16,
          51,
          52,
          53,
          37,
          41,
          1,
          39,
          40,
          24,
          7,
          6,
          8,
          45,
          43,
          44,
          25,
          42,
          47,
          50,
          49,
          48,
          46,
          54,
          56,
          57
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 443,
            "dataNameAndType": "Fault_ (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          }
        ],
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [],
        "registerDataNameIdentifier": 443,
        "registerName": "Fault (specify channel)",
        "registerSetsArrayDisplayedName": "Fault (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": true
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Fault Code 3",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Fault4",
      "dataNameDetail": {
        "dataName": "Fault_",
        "dataNameDescription": "Fault status condition flag",
        "description": "Fault (specify channel) (Equivalent: Fault_)",
        "details": {
          "aCmeter": true,
          "adminHide": false,
          "allowArchiveRaw": true,
          "condense": 1,
          "dCmeter": true,
          "doublePrecision": false,
          "equivalent": 0,
          "excludedChannels": "",
          "functionCodes": [
            2,
            4,
            3,
            20,
            16,
            51,
            52,
            53,
            37,
            41,
            1,
            39,
            40,
            24,
            7,
            6,
            8,
            45,
            43,
            44,
            25,
            42,
            47,
            50,
            49,
            48,
            46,
            54,
            56,
            57
          ],
          "functions": "PM,GM,CM,XM,SM,NM,AX,BW,BM,DP,PV,BI,DC,ST,SC,SA,SS,BG,BA,RK,BS,BB,PP,TU,MV,HV,FS,HI,SE,HB",
          "isFloat": false,
          "isStandardDataName": true,
          "isStatus": true,
          "otherAliasPTDataNameValues": "",
          "otherAliasPTDataNames": [],
          "typeId": "AE.DeviceLib.RegisterDataNames+DataNameDetails, AlsoEnergy.MODEL.Desktop, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
          "units": 0
        },
        "equivalent": 443,
        "errors": [],
        "functionCodes": [
          2,
          4,
          3,
          20,
          16,
          51,
          52,
          53,
          37,
          41,
          1,
          39,
          40,
          24,
          7,
          6,
          8,
          45,
          43,
          44,
          25,
          42,
          47,
          50,
          49,
          48,
          46,
          54,
          56,
          57
        ],
        "goldenDriverDataNames": [
          {
            "dataName": 443,
            "dataNameAndType": "Fault_ (Standard)",
            "dataNameType": "Standard",
            "isUsedForRegisterSetsArray": false,
            "priorityOrder": 1
          }
        ],
        "isAllowedForRegisterSetsArray": true,
        "isStandardDataName": true,
        "otherAliasPTDataNames": [],
        "registerDataNameIdentifier": 443,
        "registerName": "Fault (specify channel)",
        "registerSetsArrayDisplayedName": "Fault (specify RegisterSets)",
        "standardDataNameArchiveRawAndIntervalData": true
      },
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Fault Code 4",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Inverter Work Mode Description",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Type Device Model",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Protocol Version",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Firmware Version",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Serial Number 1",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Serial Number 2",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Serial Number 3",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Serial Number 4",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "OnOff",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "OnOff",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "LimitKW",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Active Power Set",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "PFSet",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Reactive Power Set",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Software Power Step",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "rapm",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Remote Active Power Mode",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "rrpm",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "",
      "name": "Remote Reactive Power Mode",
      "standardDataName": "",
      "units": ""
    }
  ],
  "key": "H70694",
  "lastChanged": "2026-06-24T16:02:09Z"
}
```

[Return to top](#top)

