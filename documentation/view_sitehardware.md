# `/api/view/sitehardware`

[← Back to Index](../README.md)



**Methods:** POST  
**Status Codes:** 200  
**Call Count:** 4  

#### Response Structure

```json
{
  "type": "object"
}
```

#### Example

**Request:**

```http
POST /api/view/sitehardware?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
Referer: https://www.alsoenergy.com
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "brokenRegisters": [],
  "futureDays": 0,
  "hardware": [
    {
      "archiveColumns": [],
      "controlUrl": "",
      "deviceId": 0,
      "fields": [],
      "functionCode": 0,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "-1",
      "name": "(Site)",
      "sort": -1
    },
    {
      "archiveColumns": [],
      "controlUrl": "",
      "deviceId": 201,
      "fields": [],
      "functionCode": 10,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70611",
      "name": "Data Logger #1",
      "sort": 3
    },
    {
      "archiveColumns": [],
      "controlUrl": "",
      "deviceId": 201,
      "fields": [],
      "functionCode": 10,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70612",
      "name": "Data Logger #2",
      "sort": 4
    },
    {
      "archiveColumns": [],
      "controlUrl": "",
      "deviceId": 201,
      "fields": [],
      "functionCode": 10,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70613",
      "name": "Data Logger #3",
      "sort": 5
    },
    {
      "archiveColumns": [
        "KWHnet",
        "KW",
        "PowerFactor",
        "KWHrec",
        "KWHdel",
        "VacA",
        "VacB",
        "VacC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC"
      ],
      "controlUrl": "",
      "deviceId": 809,
      "fields": [
        {
          "isArchived": true,
          "key": "KWHnet",
          "modbusName": "Total energy",
          "name": "Active Energy Net"
        },
        {
          "isArchived": true,
          "key": "KW",
          "modbusName": "Real power",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "PowerFactor",
          "modbusName": "Power factor",
          "name": "Power Factor"
        },
        {
          "isArchived": true,
          "key": "KWHrec",
          "modbusName": "Import energy",
          "name": "Active Energy Received (with Offset)"
        },
        {
          "isArchived": true,
          "key": "KWHdel",
          "modbusName": "Export energy",
          "name": "Active Energy Delivered (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacA",
          "modbusName": "Volts A-N",
          "name": "AC Voltage A (Line-Neutral)"
        },
        {
          "isArchived": true,
          "key": "VacB",
          "modbusName": "Volts B-N",
          "name": "AC Voltage B (Line-Neutral)"
        },
        {
          "isArchived": true,
          "key": "VacC",
          "modbusName": "Volts C-N",
          "name": "AC Voltage C (Line-Neutral)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "Volts A-B",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "Volts B-C",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "Volts C-A",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Amps A",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Amps B",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Amps C",
          "name": "AC Current C"
        }
      ],
      "functionCode": 2,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70614",
      "name": "Production Meter  (MarkII)",
      "sort": 7
    },
    {
      "archiveColumns": [
        "KWHnet",
        "KW",
        "PowerFactor",
        "KWHrec",
        "KWHdel",
        "VacA",
        "VacB",
        "VacC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC"
      ],
      "controlUrl": "",
      "deviceId": 809,
      "fields": [
        {
          "isArchived": true,
          "key": "KWHnet",
          "modbusName": "Total energy",
          "name": "Active Energy Net"
        },
        {
          "isArchived": true,
          "key": "KW",
          "modbusName": "Real power",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "PowerFactor",
          "modbusName": "Power factor",
          "name": "Power Factor"
        },
        {
          "isArchived": true,
          "key": "KWHrec",
          "modbusName": "Import energy",
          "name": "Active Energy Received (with Offset)"
        },
        {
          "isArchived": true,
          "key": "KWHdel",
          "modbusName": "Export energy",
          "name": "Active Energy Delivered (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacA",
          "modbusName": "Volts A-N",
          "name": "AC Voltage A (Line-Neutral)"
        },
        {
          "isArchived": true,
          "key": "VacB",
          "modbusName": "Volts B-N",
          "name": "AC Voltage B (Line-Neutral)"
        },
        {
          "isArchived": true,
          "key": "VacC",
          "modbusName": "Volts C-N",
          "name": "AC Voltage C (Line-Neutral)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "Volts A-B",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "Volts B-C",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "Volts C-A",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Amps A",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Amps B",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Amps C",
          "name": "AC Current C"
        }
      ],
      "functionCode": 2,
      "hardwareStatus": 4,
      "isPreferred": false,
      "key": "H70615",
      "name": "Consumption Meter  (MarkII)",
      "sort": 8
    },
    {
      "archiveColumns": [
        "WindDirection",
        "TempF",
        "Temp1",
        "WindSpeed",
        "CabF"
      ],
      "controlUrl": "",
      "deviceId": 506,
      "fields": [
        {
          "isArchived": true,
          "key": "WindDirection",
          "modbusName": "Wind Direction",
          "name": "Wind Direction"
        },
        {
          "isArchived": true,
          "key": "TempF",
          "modbusName": "Ambient temp",
          "name": "Ambient Air Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp1",
          "modbusName": "Module temp",
          "name": "Module Temperature"
        },
        {
          "isArchived": true,
          "key": "WindSpeed",
          "modbusName": "Wind speed",
          "name": "Wind Speed"
        },
        {
          "isArchived": true,
          "key": "CabF",
          "modbusName": "CabF",
          "name": "Cabinet Temperature"
        }
      ],
      "functionCode": 5,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70616",
      "name": "Weather Station (Standard)",
      "sort": 91
    },
    {
      "archiveColumns": [
        "Temp1",
        "CabF"
      ],
      "controlUrl": "",
      "deviceId": 506,
      "fields": [
        {
          "isArchived": true,
          "key": "Temp1",
          "modbusName": "Module temp",
          "name": "Module Temperature"
        },
        {
          "isArchived": true,
          "key": "CabF",
          "modbusName": "CabF",
          "name": "Cabinet Temperature"
        }
      ],
      "functionCode": 5,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70617",
      "name": "Weather Station (Module)",
      "sort": 92
    },
    {
      "archiveColumns": [
        "Rain"
      ],
      "controlUrl": "",
      "deviceId": 2059,
      "fields": [
        {
          "isArchived": true,
          "key": "Rain",
          "modbusName": "Rain",
          "name": "Absolute Precipitation"
        }
      ],
      "functionCode": 5,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70618",
      "name": "Rain Gauge",
      "sort": 92
    },
    {
      "archiveColumns": [
        "Sun",
        "Temp2",
        "Temp1"
      ],
      "controlUrl": "",
      "deviceId": 250,
      "fields": [
        {
          "isArchived": true,
          "key": "Sun",
          "modbusName": "Irradiance",
          "name": "Plane of Array Irradiation (with Offset)"
        },
        {
          "isArchived": true,
          "key": "Temp2",
          "modbusName": "Ref Cell Temp",
          "name": "Module temperature 2"
        },
        {
          "isArchived": true,
          "key": "Temp1",
          "modbusName": "External Mod Temp",
          "name": "Module Temperature"
        }
      ],
      "functionCode": 5,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70619",
      "name": "IMT Reference Cell #1 - CP20",
      "sort": 93
    },
    {
      "archiveColumns": [
        "Sun",
        "Temp2",
        "Temp1"
      ],
      "controlUrl": "",
      "deviceId": 250,
      "fields": [
        {
          "isArchived": true,
          "key": "Sun",
          "modbusName": "Irradiance",
          "name": "Plane of Array Irradiation (with Offset)"
        },
        {
          "isArchived": true,
          "key": "Temp2",
          "modbusName": "Ref Cell Temp",
          "name": "Module temperature 2"
        },
        {
          "isArchived": true,
          "key": "Temp1",
          "modbusName": "External Mod Temp",
          "name": "Module Temperature"
        }
      ],
      "functionCode": 5,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70620",
      "name": "IMT Reference Cell #2 - CP22",
      "sort": 94
    },
    {
      "archiveColumns": [
        "Sun",
        "Temp2"
      ],
      "controlUrl": "",
      "deviceId": 250,
      "fields": [
        {
          "isArchived": true,
          "key": "Sun",
          "modbusName": "Irradiance",
          "name": "Plane of Array Irradiation (with Offset)"
        },
        {
          "isArchived": true,
          "key": "Temp2",
          "modbusName": "Ref Cell Temp",
          "name": "Module temperature 2"
        }
      ],
      "functionCode": 5,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70621",
      "name": "IMT Reference Cell #3 - CP12",
      "sort": 95
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70627",
      "name": "INV-01 CP1 - (23kW)",
      "sort": 11
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70628",
      "name": "INV-02 CP1 - (36kW)",
      "sort": 12
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70629",
      "name": "INV-03 CP1 - (36kW)",
      "sort": 13
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70630",
      "name": "INV-04 CP2 - (23kW)",
      "sort": 14
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70631",
      "name": "INV-05 CP2 - (23kW)",
      "sort": 15
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70632",
      "name": "INV-06 CP2 - (23kW)",
      "sort": 16
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70633",
      "name": "INV-07 CP2 - (36kW)",
      "sort": 17
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70634",
      "name": "INV-08 CP3 - (23kW)",
      "sort": 18
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70635",
      "name": "INV-09 CP3 - (23kW)",
      "sort": 19
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70636",
      "name": "INV-10 CP3 - (23kW)",
      "sort": 20
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70637",
      "name": "INV-11 CP3 - (36kW)",
      "sort": 21
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70638",
      "name": "INV-12 CP4 - (23kW)",
      "sort": 22
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70639",
      "name": "INV-13 CP4 - (23kW)",
      "sort": 23
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70640",
      "name": "INV-14 CP4 - (23kW)",
      "sort": 24
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70641",
      "name": "INV-15 CP4 - (36kW)",
      "sort": 25
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70642",
      "name": "INV-16 CP5 - (23kW)",
      "sort": 26
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70643",
      "name": "INV-17 CP5 - (23kW)",
      "sort": 27
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70644",
      "name": "INV-18 CP5 - (23kW)",
      "sort": 28
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70645",
      "name": "INV-19 CP5 - (36kW)",
      "sort": 29
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70646",
      "name": "INV-20 CP6 - (23kW)",
      "sort": 30
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70647",
      "name": "INV-21 CP6 - (23kW)",
      "sort": 31
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70648",
      "name": "INV-22 CP6 - (23kW)",
      "sort": 32
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70649",
      "name": "INV-23 CP6 - (36kW)",
      "sort": 33
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70650",
      "name": "INV-24 CP7 - (23kW)",
      "sort": 34
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70651",
      "name": "INV-25 CP7 - (23kW)",
      "sort": 35
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70652",
      "name": "INV-26 CP7 - (23kW)",
      "sort": 36
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70653",
      "name": "INV-27 CP7 - (36kW)",
      "sort": 37
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70654",
      "name": "INV-28 CP8 - (36kW)",
      "sort": 38
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70655",
      "name": "INV-29 CP8 - (28kW)",
      "sort": 39
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70656",
      "name": "INV-30 CP8 - (28kW)",
      "sort": 40
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70657",
      "name": "INV-31 CP9 - (36kW)",
      "sort": 41
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70658",
      "name": "INV-32 CP9 - (28kW)",
      "sort": 42
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70659",
      "name": "INV-33 CP9 - (28kW)",
      "sort": 43
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70660",
      "name": "INV-34 CP9 - (28kW)",
      "sort": 44
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70661",
      "name": "INV-35 CP10 - (36kW)",
      "sort": 45
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70662",
      "name": "INV-36 CP10 - (28kW)",
      "sort": 46
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70663",
      "name": "INV-37 CP10 - (28kW)",
      "sort": 47
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70664",
      "name": "INV-38 CP10 - (28kW)",
      "sort": 48
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70665",
      "name": "INV-39 CP11 - (36kW)",
      "sort": 49
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70666",
      "name": "INV-40 CP11 - (28kW)",
      "sort": 50
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70667",
      "name": "INV-41 CP11 - (28kW)",
      "sort": 51
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70668",
      "name": "INV-42 CP11 - (28kW)",
      "sort": 52
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70669",
      "name": "INV-43 CP12 - (36kW)",
      "sort": 53
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70670",
      "name": "INV-44 CP12 - (28kW)",
      "sort": 54
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70671",
      "name": "INV-45 CP12 - (28kW)",
      "sort": 55
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70672",
      "name": "INV-46 CP12 - (28kW)",
      "sort": 56
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70673",
      "name": "INV-47 CP13 - (23kW)",
      "sort": 57
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70674",
      "name": "INV-48 CP13 - (23kW)",
      "sort": 58
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70675",
      "name": "INV-49 CP13 - (23kW)",
      "sort": 59
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70676",
      "name": "INV-50 CP14 - (36kW)",
      "sort": 60
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70677",
      "name": "INV-51 CP14 - (36kW)",
      "sort": 61
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70678",
      "name": "INV-52 CP14 - (28kW)",
      "sort": 62
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70679",
      "name": "INV-53 CP15 - (28kW)",
      "sort": 63
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70680",
      "name": "INV-54 CP15 - (23kW)",
      "sort": 64
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70681",
      "name": "INV-55 CP16 - (23kW)",
      "sort": 65
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70682",
      "name": "INV-56 CP16 - (28kW)",
      "sort": 66
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70683",
      "name": "INV-57 CP16 - (28kW)",
      "sort": 67
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70684",
      "name": "INV-58 CP17 - (23kW)",
      "sort": 68
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70685",
      "name": "INV-59 CP17 - (23kW)",
      "sort": 69
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70686",
      "name": "INV-60 CP17 - (23kW)",
      "sort": 70
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70687",
      "name": "INV-61 CP18 - (23kW)",
      "sort": 71
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70688",
      "name": "INV-62 CP18 - (28kW)",
      "sort": 72
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70689",
      "name": "INV-63 CP19 - (36kW)",
      "sort": 73
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70690",
      "name": "INV-64 CP20 - (36kW)",
      "sort": 74
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70691",
      "name": "INV-65 CP20 - (36kW)",
      "sort": 75
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70692",
      "name": "INV-66 CP20 - (23kW)",
      "sort": 76
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70693",
      "name": "INV-67 CP21 - (28kW)",
      "sort": 77
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70694",
      "name": "INV-68 CP22 - (36kW)",
      "sort": 78
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70695",
      "name": "INV-69 CP22 - (28kW)",
      "sort": 79
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70696",
      "name": "INV-70 CP22 - (23kW)",
      "sort": 80
    },
    {
      "archiveColumns": [
        "KwAC",
        "KwhAC",
        "VacAB",
        "VacBC",
        "VacCA",
        "IacA",
        "IacB",
        "IacC",
        "Vdc1",
        "Idc1",
        "Vdc2",
        "Vdc3",
        "Idc2",
        "Idc3",
        "Idc",
        "Vdc",
        "Iac",
        "Vac",
        "DeviceTemp",
        "InternalTemp",
        "Temp_XMFR",
        "Fault",
        "Warning",
        "Fault0",
        "Fault1",
        "Fault2",
        "Fault3",
        "Fault4",
        "OnOff",
        "rapm",
        "rrpm"
      ],
      "controlUrl": "",
      "deviceId": 1844,
      "fields": [
        {
          "isArchived": true,
          "key": "KwAC",
          "modbusName": "AC Power Output",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KwhAC",
          "modbusName": "AC Energy",
          "name": "Active Energy Net (with Offset)"
        },
        {
          "isArchived": true,
          "key": "VacAB",
          "modbusName": "L1-L2 AC Voltage",
          "name": "AC Voltage A-B (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacBC",
          "modbusName": "L2-L3 AC Voltage",
          "name": "AC Voltage B-C (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "VacCA",
          "modbusName": "L1-L3 AC Voltage",
          "name": "AC Voltage C-A (Line-Line)"
        },
        {
          "isArchived": true,
          "key": "IacA",
          "modbusName": "Phase A Current",
          "name": "AC Current A"
        },
        {
          "isArchived": true,
          "key": "IacB",
          "modbusName": "Phase B Current",
          "name": "AC Current B"
        },
        {
          "isArchived": true,
          "key": "IacC",
          "modbusName": "Phase C Current",
          "name": "AC Current C"
        },
        {
          "isArchived": true,
          "key": "Vdc1",
          "modbusName": "DC Voltage 1",
          "name": "DC Voltage 1"
        },
        {
          "isArchived": true,
          "key": "Idc1",
          "modbusName": "DC Current 1",
          "name": "DC current 1"
        },
        {
          "isArchived": true,
          "key": "Vdc2",
          "modbusName": "DC Voltage 2",
          "name": "DC Voltage 2"
        },
        {
          "isArchived": true,
          "key": "Vdc3",
          "modbusName": "DC Voltage 3",
          "name": "DC Voltage 3"
        },
        {
          "isArchived": true,
          "key": "Idc2",
          "modbusName": "DC Current 2",
          "name": "DC current 2"
        },
        {
          "isArchived": true,
          "key": "Idc3",
          "modbusName": "DC Current 3",
          "name": "DC current 3"
        },
        {
          "isArchived": true,
          "key": "Idc",
          "modbusName": "DC Current Total",
          "name": "DC Current Total"
        },
        {
          "isArchived": true,
          "key": "Vdc",
          "modbusName": "DC Voltage Avg",
          "name": "DC Voltage Average"
        },
        {
          "isArchived": true,
          "key": "Iac",
          "modbusName": "AC Phase Current",
          "name": "AC Current Average"
        },
        {
          "isArchived": true,
          "key": "Vac",
          "modbusName": "AC Line Voltage",
          "name": "AC Voltage Average L-N"
        },
        {
          "isArchived": true,
          "key": "DeviceTemp",
          "modbusName": "Module Temp",
          "name": "Device Temperature"
        },
        {
          "isArchived": true,
          "key": "InternalTemp",
          "modbusName": "Internal Temp",
          "name": "Internal Temperature"
        },
        {
          "isArchived": true,
          "key": "Temp_XMFR",
          "modbusName": "Transformer Temp",
          "name": "XMFR Temperature"
        },
        {
          "isArchived": true,
          "key": "Fault",
          "modbusName": "Fault Code",
          "name": "Fault Code"
        },
        {
          "isArchived": true,
          "key": "Warning",
          "modbusName": "Warn Code",
          "name": "Warn Code"
        },
        {
          "isArchived": true,
          "key": "Fault0",
          "modbusName": "Fault Code 0",
          "name": "Fault Code 0"
        },
        {
          "isArchived": true,
          "key": "Fault1",
          "modbusName": "Fault Code 1",
          "name": "Fault 1"
        },
        {
          "isArchived": true,
          "key": "Fault2",
          "modbusName": "Fault Code 2",
          "name": "Fault 2"
        },
        {
          "isArchived": true,
          "key": "Fault3",
          "modbusName": "Fault Code 3",
          "name": "Fault 3"
        },
        {
          "isArchived": true,
          "key": "Fault4",
          "modbusName": "Fault Code 4",
          "name": "Fault 4"
        },
        {
          "isArchived": true,
          "key": "OnOff",
          "modbusName": "OnOff",
          "name": "OnOff"
        },
        {
          "isArchived": false,
          "key": "LimitKW",
          "modbusName": "Active Power Set",
          "name": "Active Power Set"
        },
        {
          "isArchived": true,
          "key": "rapm",
          "modbusName": "Remote Active Power Mode",
          "name": "Remote Active Power Mode"
        },
        {
          "isArchived": true,
          "key": "rrpm",
          "modbusName": "Remote Reactive Power Mode",
          "name": "Remote Reactive Power Mode"
        }
      ],
      "functionCode": 1,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70697",
      "name": "INV-71 CP23 - (23kW)",
      "sort": 81
    },
    {
      "archiveColumns": [],
      "controlUrl": "",
      "deviceId": 1562,
      "fields": [
        {
          "isArchived": false,
          "key": "DevicePower",
          "modbusName": "Power In",
          "name": "Power In"
        },
        {
          "isArchived": false,
          "key": "RSSI",
          "modbusName": "RSSI",
          "name": "RSSI"
        },
        {
          "isArchived": false,
          "key": "BoardTemp",
          "modbusName": "Board Temp",
          "name": "Board Temp"
        },
        {
          "isArchived": false,
          "key": "IP",
          "modbusName": "IP Address",
          "name": "IP Address"
        },
        {
          "isArchived": false,
          "key": "DailyUsageN",
          "modbusName": "Daily Usage Normalized",
          "name": "Daily Usage Normalized"
        },
        {
          "isArchived": false,
          "key": "MonthlyUsageN",
          "modbusName": "Monthly Usage Normalized",
          "name": "Monthly Usage Normalized"
        }
      ],
      "functionCode": 11,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H70698",
      "name": "Cell Modem (RV50)",
      "sort": 1
    },
    {
      "archiveColumns": [
        "Sun",
        "bodyTemp"
      ],
      "controlUrl": "",
      "deviceId": 1581,
      "fields": [
        {
          "isArchived": true,
          "key": "Sun",
          "modbusName": "Sun (POA Temp comp)",
          "name": "Plane of Array Irradiation (with Offset)"
        },
        {
          "isArchived": true,
          "key": "bodyTemp",
          "modbusName": "Body Temperature",
          "name": "Body Temperature"
        },
        {
          "isArchived": false,
          "key": "temp",
          "modbusName": "Internal Temp",
          "name": "Device temperature"
        },
        {
          "isArchived": false,
          "key": "tilt",
          "modbusName": "Tilt Angle Avg",
          "name": "Inclinometer"
        },
        {
          "isArchived": false,
          "key": "RPM",
          "modbusName": "Fan Speed RPM",
          "name": "Fan Speed RPM"
        },
        {
          "isArchived": false,
          "key": "heat",
          "modbusName": "Heater Power",
          "name": "Heater Power"
        }
      ],
      "functionCode": 5,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H73009",
      "name": "SR-30 (POA) (158\u00b0/10\u00b0)",
      "sort": 96
    },
    {
      "archiveColumns": [
        "Sun2",
        "bodyTemp"
      ],
      "controlUrl": "",
      "deviceId": 1581,
      "fields": [
        {
          "isArchived": true,
          "key": "Sun2",
          "modbusName": "Sun (GHI Temp comp)",
          "name": "Global Horizontal Irradiance (with Offset)"
        },
        {
          "isArchived": true,
          "key": "bodyTemp",
          "modbusName": "Body Temperature",
          "name": "Body Temperature"
        },
        {
          "isArchived": false,
          "key": "temp",
          "modbusName": "Internal Temp",
          "name": "Device temperature"
        },
        {
          "isArchived": false,
          "key": "tilt",
          "modbusName": "Tilt Angle Avg",
          "name": "Inclinometer"
        },
        {
          "isArchived": false,
          "key": "RPM",
          "modbusName": "Fan Speed RPM",
          "name": "Fan Speed RPM"
        },
        {
          "isArchived": false,
          "key": "heat",
          "modbusName": "Heater Power",
          "name": "Heater Power"
        }
      ],
      "functionCode": 5,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H73010",
      "name": "SR-30 (GHI 1)",
      "sort": 97
    },
    {
      "archiveColumns": [
        "KWHdel",
        "KWHrec",
        "KW",
        "KWHnet"
      ],
      "controlUrl": "",
      "deviceId": 834,
      "fields": [
        {
          "isArchived": true,
          "key": "KWHdel",
          "modbusName": "Active Energy Delivered",
          "name": "Active Energy Delivered (with Offset)"
        },
        {
          "isArchived": true,
          "key": "KWHrec",
          "modbusName": "Active Energy Received",
          "name": "Active Energy Received (with Offset)"
        },
        {
          "isArchived": true,
          "key": "KW",
          "modbusName": "Active Power",
          "name": "Active Power"
        },
        {
          "isArchived": true,
          "key": "KWHnet",
          "modbusName": "Active Energy Net",
          "name": "Active Energy Net"
        },
        {
          "isArchived": false,
          "key": "KWRec",
          "modbusName": "Power rec",
          "name": "Power rec"
        },
        {
          "isArchived": false,
          "key": "KWDel",
          "modbusName": "Power del",
          "name": "Power del"
        }
      ],
      "functionCode": 2,
      "hardwareStatus": 3,
      "isPreferred": false,
      "key": "H88448",
      "name": "KYZ Pulse Meter",
      "sort": 9
    },
    {
      "archiveColumns": [],
      "controlUrl": "",
      "deviceId": 325,
      "fields": [],
      "functionCode": 10,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H112193",
      "name": "PowerLogger1000 #4",
      "sort": 6
    },
    {
      "archiveColumns": [
        "Sun2",
        "bodyTemp"
      ],
      "controlUrl": "",
      "deviceId": 1581,
      "fields": [
        {
          "isArchived": true,
          "key": "Sun2",
          "modbusName": "Sun (GHI Temp comp)",
          "name": "Global Horizontal Irradiance (with Offset)"
        },
        {
          "isArchived": true,
          "key": "bodyTemp",
          "modbusName": "Body Temperature",
          "name": "Body Temperature"
        },
        {
          "isArchived": false,
          "key": "temp",
          "modbusName": "Internal Temp",
          "name": "Device temperature"
        },
        {
          "isArchived": false,
          "key": "tilt",
          "modbusName": "Tilt Angle Avg",
          "name": "Inclinometer"
        },
        {
          "isArchived": false,
          "key": "RPM",
          "modbusName": "Fan Speed RPM",
          "name": "Fan Speed RPM"
        },
        {
          "isArchived": false,
          "key": "heat",
          "modbusName": "Heater Power",
          "name": "Heater Power"
        }
      ],
      "functionCode": 5,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H116295",
      "name": "SR-30 (GHI 2)",
      "sort": 98
    },
    {
      "archiveColumns": [
        "VIghi"
      ],
      "controlUrl": "",
      "deviceId": 2693,
      "fields": [
        {
          "isArchived": true,
          "key": "VIghi",
          "modbusName": "Irradiance",
          "name": "Virtual Irradiance (GHI)"
        }
      ],
      "functionCode": 5,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H159633",
      "name": "Locus Virtual GHI",
      "sort": 0
    },
    {
      "archiveColumns": [
        "WindDirection",
        "GHI",
        "DNI",
        "DHI",
        "Ambient",
        "WindSpeed",
        "Rain",
        "Snow"
      ],
      "controlUrl": "",
      "deviceId": 19015,
      "fields": [
        {
          "isArchived": true,
          "key": "WindDirection",
          "modbusName": "Wind Direction",
          "name": "Wind Direction"
        },
        {
          "isArchived": true,
          "key": "GHI",
          "modbusName": "Global Horizontal Irradiance ",
          "name": "Global Horizontal Irradiance (with Offset)"
        },
        {
          "isArchived": true,
          "key": "DNI",
          "modbusName": "Direct Normal Irradiance",
          "name": "Direct Normal Irradiance"
        },
        {
          "isArchived": true,
          "key": "DHI",
          "modbusName": "Direct Horizontal Irradiance",
          "name": "Diffuse Horizontal Irradiance"
        },
        {
          "isArchived": true,
          "key": "Ambient",
          "modbusName": "Ambient Temperature",
          "name": "Ambient Air Temperature"
        },
        {
          "isArchived": true,
          "key": "WindSpeed",
          "modbusName": "Wind Speed",
          "name": "Wind Speed"
        },
        {
          "isArchived": true,
          "key": "Rain",
          "modbusName": "Absolute Precipitation",
          "name": "Absolute Precipitation"
        },
        {
          "isArchived": true,
          "key": "Snow",
          "modbusName": "Snow Depth",
          "name": "Snow Depth"
        }
      ],
      "functionCode": 5,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H356123",
      "name": "Solar Anywhere (extended)",
      "sort": 0
    },
    {
      "archiveColumns": [
        "WindDirection",
        "GHI",
        "DNI",
        "DHI",
        "Ambient",
        "WindSpeed",
        "Snow"
      ],
      "controlUrl": "",
      "deviceId": 19015,
      "fields": [
        {
          "isArchived": true,
          "key": "WindDirection",
          "modbusName": "Wind Direction",
          "name": "Wind Direction"
        },
        {
          "isArchived": true,
          "key": "GHI",
          "modbusName": "Global Horizontal Irradiance ",
          "name": "Global Horizontal Irradiance (with Offset)"
        },
        {
          "isArchived": true,
          "key": "DNI",
          "modbusName": "Direct Normal Irradiance",
          "name": "Direct Normal Irradiance"
        },
        {
          "isArchived": true,
          "key": "DHI",
          "modbusName": "Direct Horizontal Irradiance",
          "name": "Diffuse Horizontal Irradiance"
        },
        {
          "isArchived": true,
          "key": "Ambient",
          "modbusName": "Ambient Temperature",
          "name": "Ambient Air Temperature"
        },
        {
          "isArchived": true,
          "key": "WindSpeed",
          "modbusName": "Wind Speed",
          "name": "Wind Speed"
        },
        {
          "isArchived": true,
          "key": "Snow",
          "modbusName": "Snow Depth",
          "name": "Snow Depth"
        }
      ],
      "functionCode": 5,
      "hardwareStatus": 1,
      "isPreferred": false,
      "key": "H430229",
      "name": "Solcast Virtual Weather Station",
      "sort": 0
    }
  ],
  "hardwareGroups": [],
  "key": "S38292",
  "lastChanged": "2025-12-12T23:43:07Z",
  "pvModelHasFileA": true,
  "pvModelHasFileB": true,
  "timeZone": "US/Eastern",
  "validDataDate": "2017-01-10T14:53:00+00:00"
}
```

