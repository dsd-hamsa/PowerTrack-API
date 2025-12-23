<a id="top"></a>
# /api/view/sitehardwareproduction/{site_id}

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
    "hardware": {
      "type": "object",
      "properties": {
        "capacityKW": {
          "type": "object",
          "properties": {}
        },
        "communicationResult": {
          "type": "number"
        },
        "dataRegisters": {
          "type": "object",
          "properties": {
            "dataType": {
              "type": "number"
            },
            "formattedValue": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "unit": {
              "type": "number"
            },
            "value": {
              "type": "number"
            }
          }
        },
        "defaultChart": {
          "type": "number"
        },
        "description": {
          "type": "string"
        },
        "deviceImage": {
          "type": "object",
          "properties": {
            "contentType": {
              "type": "string"
            },
            "key": {
              "type": "string"
            },
            "lastChanged": {
              "type": "object",
              "properties": {}
            },
            "name": {
              "type": "string"
            },
            "uri": {
              "type": "string"
            }
          }
        },
        "functionCode": {
          "type": "number"
        },
        "hardwareStatus": {
          "type": "number"
        },
        "installDate": {
          "type": "string"
        },
        "inverterKw": {
          "type": "number"
        },
        "key": {
          "type": "string"
        },
        "lastAttempt": {
          "type": "string"
        },
        "lastChanged": {
          "type": "string"
        },
        "lastData": {
          "type": "string"
        },
        "lastSuccess": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "outOfService": {
          "type": "boolean"
        },
        "primaryMetric": {
          "type": "string"
        },
        "primaryMetricName": {
          "type": "number"
        },
        "serialNum": {
          "type": "string"
        },
        "sortOrder": {
          "type": "number"
        },
        "units": {
          "type": "number"
        },
        "unitsScale": {
          "type": "string"
        }
      }
    },
    "key": {
      "type": "string"
    },
    "lastChanged": {
      "type": "string"
    },
    "timeZone": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/view/sitehardwareproduction/S68143?lastChanged=2024-07-12T18:52:52Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/S68143/administration/config
```

**Response:**

```json
{
  "hardware": [
    {
      "capacityKW": null,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "-28 \t ",
          "name": "RSSI",
          "unit": 1,
          "value": -28
        },
        {
          "dataType": 0,
          "formattedValue": "11 \t ",
          "name": "BytesSent",
          "unit": 1,
          "value": 11
        },
        {
          "dataType": 0,
          "formattedValue": "6 \t ",
          "name": "BytesReceived",
          "unit": 1,
          "value": 6
        }
      ],
      "defaultChart": 0,
      "description": "Cell Modem (Pepwave)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "CE_V19759",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/19759.png"
      },
      "functionCode": 31,
      "hardwareStatus": 1,
      "installDate": "2024-07-12",
      "inverterKw": 0,
      "key": "H511563",
      "lastAttempt": "2024-07-12T18:38:57Z",
      "lastChanged": "2025-03-13T18:25:44Z",
      "lastData": "",
      "lastSuccess": "2024-07-12T18:38:55Z",
      "name": "Cell Modem (Pepwave)",
      "outOfService": false,
      "primaryMetric": "",
      "primaryMetricName": 0,
      "serialNum": "1932-1C3F-8F71",
      "sortOrder": 1,
      "units": 0,
      "unitsScale": "NaN"
    },
    {
      "capacityKW": 1050,
      "communicationResult": 0,
      "dataRegisters": [],
      "defaultChart": 0,
      "description": "PowerLogger 1000",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "GW_V325",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/325.png"
      },
      "functionCode": 10,
      "hardwareStatus": 1,
      "installDate": "2024-07-12",
      "inverterKw": 0,
      "key": "H511564",
      "lastAttempt": "2024-07-12T18:52:17Z",
      "lastChanged": "2024-07-15T13:27:46Z",
      "lastData": "",
      "lastSuccess": "2024-07-12T18:52:17Z",
      "name": "PowerLogger 1000",
      "outOfService": false,
      "primaryMetric": "",
      "primaryMetricName": 0,
      "serialNum": "",
      "sortOrder": 2,
      "units": 0,
      "unitsScale": "NaN"
    },
    {
      "capacityKW": 525,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "0 \tHz",
          "name": "Hz",
          "unit": 43,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tPF",
          "name": "PowerFactor",
          "unit": 39,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tWh",
          "name": "KWHrec",
          "unit": 11,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tWh",
          "name": "KWHdel",
          "unit": 11,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tkVARh",
          "name": "Reactive_Energy_Rec",
          "unit": 27,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tkVARh",
          "name": "Reactive_Energy_Del",
          "unit": 27,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tWh",
          "name": "KWHnet",
          "unit": 11,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tkVARh",
          "name": "Reactive_Energy_Net",
          "unit": 27,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tkVAh",
          "name": "KVAh",
          "unit": 22,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tVAR",
          "name": "KVAR",
          "unit": 26,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "VacA",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "VacB",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "VacC",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "VacLN",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "VacLL",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0.001 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 0.0012328476877883077
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tW",
          "name": "Active_Power_A",
          "unit": 10,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tW",
          "name": "Active_Power_B",
          "unit": 10,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tW",
          "name": "Active_Power_C",
          "unit": 10,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tW",
          "name": "KW",
          "unit": 10,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tPF",
          "name": "PFA",
          "unit": 39,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tPF",
          "name": "PFB",
          "unit": 39,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tPF",
          "name": "PFC",
          "unit": 39,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tVAR",
          "name": "kVARA",
          "unit": 26,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tVAR",
          "name": "kVARB",
          "unit": 26,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tVAR",
          "name": "kVARC",
          "unit": 26,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tWh",
          "name": "KWHdelRaw",
          "unit": 11,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tWh",
          "name": "KWHrecRaw",
          "unit": 11,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tWh",
          "name": "KWHnetRaw",
          "unit": 11,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tA",
          "name": "THD_Current",
          "unit": 4,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "THD_Voltage",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "220 \t ",
          "name": "Potential_XMFR_Primary",
          "unit": 0,
          "value": 220
        },
        {
          "dataType": 0,
          "formattedValue": "220 \t ",
          "name": "Potential_XMFR_Secondary",
          "unit": 0,
          "value": 220
        },
        {
          "dataType": 0,
          "formattedValue": "5 \t ",
          "name": "Current_XMFR_Primary",
          "unit": 0,
          "value": 5
        },
        {
          "dataType": 0,
          "formattedValue": "333 \t ",
          "name": "Current_XMFR_Secondary",
          "unit": 0,
          "value": 333
        }
      ],
      "defaultChart": 15,
      "description": "Accuvim II - PV Prod Meter - M0",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PM_V19601",
        "uri": "https://www.alsoenergy.com/pub/Images/meter.png"
      },
      "functionCode": 2,
      "hardwareStatus": 1,
      "installDate": "2024-07-12",
      "inverterKw": 524.88,
      "key": "H511565",
      "lastAttempt": "2024-07-12T18:52:14Z",
      "lastChanged": "2024-07-15T13:28:32Z",
      "lastData": "0 W",
      "lastSuccess": "2024-07-12T18:52:09Z",
      "name": "Accuvim II - PV Prod Meter - M0",
      "outOfService": false,
      "primaryMetric": "0 W",
      "primaryMetricName": 2,
      "serialNum": "AHB54010438",
      "sortOrder": 3,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 525,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "0 \tHz",
          "name": "Hz",
          "unit": 43,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tPF",
          "name": "PowerFactor",
          "unit": 39,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tWh",
          "name": "KWHrec",
          "unit": 11,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tWh",
          "name": "KWHdel",
          "unit": 11,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tkVARh",
          "name": "Reactive_Energy_Rec",
          "unit": 27,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tkVARh",
          "name": "Reactive_Energy_Del",
          "unit": 27,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tWh",
          "name": "KWHnet",
          "unit": 11,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tkVARh",
          "name": "Reactive_Energy_Net",
          "unit": 27,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tkVAh",
          "name": "KVAh",
          "unit": 22,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tVAR",
          "name": "KVAR",
          "unit": 26,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "VacA",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "VacB",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "VacC",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "VacLN",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "VacLL",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0.001 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 0.0008475010981783271
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tW",
          "name": "Active_Power_A",
          "unit": 10,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tW",
          "name": "Active_Power_B",
          "unit": 10,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tW",
          "name": "Active_Power_C",
          "unit": 10,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tW",
          "name": "KW",
          "unit": 10,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tPF",
          "name": "PFA",
          "unit": 39,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tPF",
          "name": "PFB",
          "unit": 39,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tPF",
          "name": "PFC",
          "unit": 39,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tVAR",
          "name": "kVARA",
          "unit": 26,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tVAR",
          "name": "kVARB",
          "unit": 26,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tVAR",
          "name": "kVARC",
          "unit": 26,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tWh",
          "name": "KWHdelRaw",
          "unit": 11,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tWh",
          "name": "KWHrecRaw",
          "unit": 11,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tWh",
          "name": "KWHnetRaw",
          "unit": 11,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tA",
          "name": "THD_Current",
          "unit": 4,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "THD_Voltage",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "220 \t ",
          "name": "Potential_XMFR_Primary",
          "unit": 0,
          "value": 220
        },
        {
          "dataType": 0,
          "formattedValue": "220 \t ",
          "name": "Potential_XMFR_Secondary",
          "unit": 0,
          "value": 220
        },
        {
          "dataType": 0,
          "formattedValue": "5 \t ",
          "name": "Current_XMFR_Primary",
          "unit": 0,
          "value": 5
        },
        {
          "dataType": 0,
          "formattedValue": "333 \t ",
          "name": "Current_XMFR_Secondary",
          "unit": 0,
          "value": 333
        }
      ],
      "defaultChart": 15,
      "description": "Accuvim II - SITE??  Meter - M1",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PM_V19601",
        "uri": "https://www.alsoenergy.com/pub/Images/meter.png"
      },
      "functionCode": 2,
      "hardwareStatus": 1,
      "installDate": "2024-07-12",
      "inverterKw": 524.88,
      "key": "H511566",
      "lastAttempt": "2024-07-12T18:52:17Z",
      "lastChanged": "2025-12-22T22:01:11Z",
      "lastData": "0 W",
      "lastSuccess": "2024-07-12T18:52:10Z",
      "name": "Accuvim II - SITE??  Meter - M1",
      "outOfService": false,
      "primaryMetric": "0 W",
      "primaryMetricName": 2,
      "serialNum": "AHB54010502",
      "sortOrder": 4,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": null,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwhAC",
          "unit": 11,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwAC",
          "unit": 10,
          "value": "NaN"
        }
      ],
      "defaultChart": 0,
      "description": "SMA Data Manager",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "IG_V2442",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/2442.png"
      },
      "functionCode": 28,
      "hardwareStatus": 1,
      "installDate": "2024-07-12",
      "inverterKw": 0,
      "key": "H511567",
      "lastAttempt": null,
      "lastChanged": "2024-07-15T13:29:12Z",
      "lastData": "",
      "lastSuccess": null,
      "name": "SMA Data Manager",
      "outOfService": false,
      "primaryMetric": "",
      "primaryMetricName": 0,
      "serialNum": "",
      "sortOrder": 10,
      "units": 0,
      "unitsScale": "NaN"
    },
    {
      "capacityKW": 63,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KwhAC",
          "unit": 11,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KwAC",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Active_Power_A",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Active_Power_B",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Active_Power_C",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacA",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacB",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacC",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Iac",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "IacA",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "IacB",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "IacC",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Frequency",
          "unit": 43,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "DeviceTemp",
          "unit": 30,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacAB",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacBC",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacCA",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Reactive_Power_A",
          "unit": 26,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Reactive_Power_B",
          "unit": 26,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Reactive_Power_C",
          "unit": 26,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KVAR",
          "unit": 26,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KVA",
          "unit": 20,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "PowerFactor",
          "unit": 39,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "InternalTemp",
          "unit": 30,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KwhACraw",
          "unit": 11,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc1",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC1",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc2",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC2",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC3",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc4",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc4",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC4",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc5",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc5",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC5",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc6",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc6",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC6",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Serial_Number",
          "unit": 0,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Fault",
          "unit": 0,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Status",
          "unit": 0,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Firmware_Version",
          "unit": 0,
          "value": "NaN"
        }
      ],
      "defaultChart": 2,
      "description": "INVERTER 1",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V19880",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/19880.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2024-07-12",
      "inverterKw": 62.5,
      "key": "H511568",
      "lastAttempt": null,
      "lastChanged": "2025-12-22T19:21:53Z",
      "lastData": "",
      "lastSuccess": null,
      "name": "INVERTER 1",
      "outOfService": false,
      "primaryMetric": "",
      "primaryMetricName": 0,
      "serialNum": "",
      "sortOrder": 11,
      "units": 0,
      "unitsScale": "NaN"
    },
    {
      "capacityKW": 0,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KwhAC",
          "unit": 11,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KwAC",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Active_Power_A",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Active_Power_B",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Active_Power_C",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacA",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacB",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacC",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Iac",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "IacA",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "IacB",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "IacC",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Frequency",
          "unit": 43,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "DeviceTemp",
          "unit": 30,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacAB",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacBC",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacCA",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Reactive_Power_A",
          "unit": 26,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Reactive_Power_B",
          "unit": 26,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Reactive_Power_C",
          "unit": 26,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KVAR",
          "unit": 26,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KVA",
          "unit": 20,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "PowerFactor",
          "unit": 39,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "InternalTemp",
          "unit": 30,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KwhACraw",
          "unit": 11,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc1",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC1",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc2",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC2",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC3",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc4",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc4",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC4",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc5",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc5",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC5",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc6",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc6",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC6",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Serial_Number",
          "unit": 0,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Fault",
          "unit": 0,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Status",
          "unit": 0,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Firmware_Version",
          "unit": 0,
          "value": "NaN"
        }
      ],
      "defaultChart": 2,
      "description": "INVERTER 2",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V19880",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/19880.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2024-07-12",
      "inverterKw": 0,
      "key": "H511569",
      "lastAttempt": null,
      "lastChanged": "2025-11-25T22:12:40Z",
      "lastData": "",
      "lastSuccess": null,
      "name": "INVERTER 2",
      "outOfService": false,
      "primaryMetric": "",
      "primaryMetricName": 0,
      "serialNum": "",
      "sortOrder": 12,
      "units": 0,
      "unitsScale": "NaN"
    },
    {
      "capacityKW": 0,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KwhAC",
          "unit": 11,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KwAC",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Active_Power_A",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Active_Power_B",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Active_Power_C",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacA",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacB",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacC",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Iac",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "IacA",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "IacB",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "IacC",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Frequency",
          "unit": 43,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "DeviceTemp",
          "unit": 30,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacAB",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacBC",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacCA",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Reactive_Power_A",
          "unit": 26,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Reactive_Power_B",
          "unit": 26,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Reactive_Power_C",
          "unit": 26,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KVAR",
          "unit": 26,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KVA",
          "unit": 20,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "PowerFactor",
          "unit": 39,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "InternalTemp",
          "unit": 30,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KwhACraw",
          "unit": 11,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc1",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC1",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc2",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC2",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC3",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc4",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc4",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC4",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc5",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc5",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC5",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc6",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc6",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC6",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Serial_Number",
          "unit": 0,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Fault",
          "unit": 0,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Status",
          "unit": 0,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Firmware_Version",
          "unit": 0,
          "value": "NaN"
        }
      ],
      "defaultChart": 2,
      "description": "INVERTER 3",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V19880",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/19880.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2024-07-12",
      "inverterKw": 0,
      "key": "H511570",
      "lastAttempt": null,
      "lastChanged": "2025-11-25T22:12:43Z",
      "lastData": "",
      "lastSuccess": null,
      "name": "INVERTER 3",
      "outOfService": false,
      "primaryMetric": "",
      "primaryMetricName": 0,
      "serialNum": "",
      "sortOrder": 13,
      "units": 0,
      "unitsScale": "NaN"
    },
    {
      "capacityKW": 0,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KwhAC",
          "unit": 11,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KwAC",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Active_Power_A",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Active_Power_B",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Active_Power_C",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacA",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacB",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacC",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Iac",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "IacA",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "IacB",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "IacC",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Frequency",
          "unit": 43,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "DeviceTemp",
          "unit": 30,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacAB",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacBC",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacCA",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Reactive_Power_A",
          "unit": 26,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Reactive_Power_B",
          "unit": 26,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Reactive_Power_C",
          "unit": 26,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KVAR",
          "unit": 26,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KVA",
          "unit": 20,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "PowerFactor",
          "unit": 39,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "InternalTemp",
          "unit": 30,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KwhACraw",
          "unit": 11,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc1",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC1",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc2",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC2",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC3",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc4",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc4",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC4",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc5",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc5",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC5",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc6",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc6",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC6",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Serial_Number",
          "unit": 0,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Fault",
          "unit": 0,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Status",
          "unit": 0,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Firmware_Version",
          "unit": 0,
          "value": "NaN"
        }
      ],
      "defaultChart": 2,
      "description": "INVERTER 4",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V19880",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/19880.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2024-07-12",
      "inverterKw": 0,
      "key": "H511571",
      "lastAttempt": null,
      "lastChanged": "2025-11-25T22:12:47Z",
      "lastData": "",
      "lastSuccess": null,
      "name": "INVERTER 4",
      "outOfService": false,
      "primaryMetric": "",
      "primaryMetricName": 0,
      "serialNum": "",
      "sortOrder": 14,
      "units": 0,
      "unitsScale": "NaN"
    },
    {
      "capacityKW": 0,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KwhAC",
          "unit": 11,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KwAC",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Active_Power_A",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Active_Power_B",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Active_Power_C",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacA",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacB",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacC",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Iac",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "IacA",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "IacB",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "IacC",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Frequency",
          "unit": 43,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "DeviceTemp",
          "unit": 30,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacAB",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacBC",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacCA",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Reactive_Power_A",
          "unit": 26,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Reactive_Power_B",
          "unit": 26,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Reactive_Power_C",
          "unit": 26,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KVAR",
          "unit": 26,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KVA",
          "unit": 20,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "PowerFactor",
          "unit": 39,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "InternalTemp",
          "unit": 30,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KwhACraw",
          "unit": 11,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc1",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC1",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc2",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC2",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC3",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc4",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc4",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC4",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc5",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc5",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC5",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc6",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc6",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC6",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Serial_Number",
          "unit": 0,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Fault",
          "unit": 0,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Status",
          "unit": 0,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Firmware_Version",
          "unit": 0,
          "value": "NaN"
        }
      ],
      "defaultChart": 2,
      "description": "INVERTER 5",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V19880",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/19880.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2024-07-12",
      "inverterKw": 0,
      "key": "H511572",
      "lastAttempt": null,
      "lastChanged": "2025-11-25T22:12:52Z",
      "lastData": "",
      "lastSuccess": null,
      "name": "INVERTER 5",
      "outOfService": false,
      "primaryMetric": "",
      "primaryMetricName": 0,
      "serialNum": "",
      "sortOrder": 15,
      "units": 0,
      "unitsScale": "NaN"
    },
    {
      "capacityKW": 0,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KwhAC",
          "unit": 11,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KwAC",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Active_Power_A",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Active_Power_B",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Active_Power_C",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacA",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacB",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacC",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Iac",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "IacA",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "IacB",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "IacC",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Frequency",
          "unit": 43,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "DeviceTemp",
          "unit": 30,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacAB",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacBC",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacCA",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Reactive_Power_A",
          "unit": 26,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Reactive_Power_B",
          "unit": 26,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Reactive_Power_C",
          "unit": 26,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KVAR",
          "unit": 26,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KVA",
          "unit": 20,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "PowerFactor",
          "unit": 39,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "InternalTemp",
          "unit": 30,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KwhACraw",
          "unit": 11,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc1",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC1",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc2",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC2",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC3",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc4",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc4",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC4",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc5",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc5",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC5",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc6",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc6",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC6",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Serial_Number",
          "unit": 0,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Fault",
          "unit": 0,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Status",
          "unit": 0,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Firmware_Version",
          "unit": 0,
          "value": "NaN"
        }
      ],
      "defaultChart": 2,
      "description": "INVERTER 6",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V19880",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/19880.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2024-07-12",
      "inverterKw": 0,
      "key": "H511573",
      "lastAttempt": null,
      "lastChanged": "2025-11-25T22:12:55Z",
      "lastData": "",
      "lastSuccess": null,
      "name": "INVERTER 6",
      "outOfService": false,
      "primaryMetric": "",
      "primaryMetricName": 0,
      "serialNum": "",
      "sortOrder": 16,
      "units": 0,
      "unitsScale": "NaN"
    },
    {
      "capacityKW": 0,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KwhAC",
          "unit": 11,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KwAC",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Active_Power_A",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Active_Power_B",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Active_Power_C",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacA",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacB",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacC",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Iac",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "IacA",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "IacB",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "IacC",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Frequency",
          "unit": 43,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "DeviceTemp",
          "unit": 30,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacAB",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacBC",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "VacCA",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Reactive_Power_A",
          "unit": 26,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Reactive_Power_B",
          "unit": 26,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Reactive_Power_C",
          "unit": 26,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KVAR",
          "unit": 26,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KVA",
          "unit": 20,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "PowerFactor",
          "unit": 39,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "InternalTemp",
          "unit": 30,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "KwhACraw",
          "unit": 11,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc1",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC1",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc2",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC2",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC3",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc4",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc4",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC4",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc5",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc5",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC5",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc6",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc6",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC6",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "–",
          "name": "KwDC",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Serial_Number",
          "unit": 0,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Fault",
          "unit": 0,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Status",
          "unit": 0,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Firmware_Version",
          "unit": 0,
          "value": "NaN"
        }
      ],
      "defaultChart": 2,
      "description": "INVERTER 7",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V19880",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/19880.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2024-07-12",
      "inverterKw": 0,
      "key": "H511574",
      "lastAttempt": null,
      "lastChanged": "2025-11-25T22:12:59Z",
      "lastData": "",
      "lastSuccess": null,
      "name": "INVERTER 7",
      "outOfService": false,
      "primaryMetric": "",
      "primaryMetricName": 0,
      "serialNum": "",
      "sortOrder": 17,
      "units": 0,
      "unitsScale": "NaN"
    },
    {
      "capacityKW": null,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "2.7 \tW/m²",
          "name": "Sun",
          "unit": 57,
          "value": 2.7
        },
        {
          "dataType": 0,
          "formattedValue": "167 \t°F",
          "name": "Temp1",
          "unit": 30,
          "value": 75
        },
        {
          "dataType": 0,
          "formattedValue": "214 \t°F",
          "name": "Temp3",
          "unit": 30,
          "value": 101
        }
      ],
      "defaultChart": 21,
      "description": "REFERENCE CELL - POA",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "WS_V3588",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/3588.png"
      },
      "functionCode": 5,
      "hardwareStatus": 1,
      "installDate": "2024-07-12",
      "inverterKw": 0,
      "key": "H511575",
      "lastAttempt": "2024-07-12T18:52:50Z",
      "lastChanged": "2024-07-11T21:17:30Z",
      "lastData": "2.7 W/m²",
      "lastSuccess": "2024-07-12T18:52:42Z",
      "name": "REFERENCE CELL - POA",
      "outOfService": false,
      "primaryMetric": "2.7 W/m²",
      "primaryMetricName": 108,
      "serialNum": "485-32003-23-24211210",
      "sortOrder": 41,
      "units": 57,
      "unitsScale": 1
    },
    {
      "capacityKW": null,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "219 \t°",
          "name": "WindDirection",
          "unit": 40,
          "value": 219.25274725274724
        },
        {
          "dataType": 0,
          "formattedValue": "2.47 \tkW/m²",
          "name": "Sun2",
          "unit": 57,
          "value": 2471.620788452472
        },
        {
          "dataType": 0,
          "formattedValue": "-20.2 \t°F",
          "name": "TempF",
          "unit": 31,
          "value": -20.2
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tmph",
          "name": "WindSpeed",
          "unit": 50,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "2,658 \t ",
          "name": "Temp_Cabinet_High",
          "unit": 0,
          "value": 2658
        },
        {
          "dataType": 0,
          "formattedValue": "5,140 \t ",
          "name": "Temp_Cabinet_Low",
          "unit": 0,
          "value": 5140
        },
        {
          "dataType": 0,
          "formattedValue": "89.6 \t°F",
          "name": "CabF",
          "unit": 30,
          "value": 32
        },
        {
          "dataType": 0,
          "formattedValue": "24.8 \tkW/m²",
          "name": "MaxSun",
          "unit": 57,
          "value": 24752.47524752475
        },
        {
          "dataType": 0,
          "formattedValue": "2.48 \tkW/m²",
          "name": "MaxSun2",
          "unit": 57,
          "value": 2475.2475247524753
        }
      ],
      "defaultChart": 21,
      "description": "WEATHER STATION",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "WS_V8164",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/8164.png"
      },
      "functionCode": 5,
      "hardwareStatus": 1,
      "installDate": "2024-07-12",
      "inverterKw": 0,
      "key": "H511576",
      "lastAttempt": "2024-07-12T18:52:52Z",
      "lastChanged": "2024-07-11T21:18:06Z",
      "lastData": "2.47 kW/m²",
      "lastSuccess": "2024-07-12T18:52:42Z",
      "name": "WEATHER STATION",
      "outOfService": false,
      "primaryMetric": "2.47 kW/m²",
      "primaryMetricName": 114,
      "serialNum": "1V0177-8",
      "sortOrder": 42,
      "units": 94,
      "unitsScale": 1000
    },
    {
      "capacityKW": null,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "WindDirection",
          "unit": 40,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "GHI",
          "unit": 57,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "DNI",
          "unit": 57,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "DHI",
          "unit": 57,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Ambient",
          "unit": 31,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "WindSpeed",
          "unit": 50,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Snow",
          "unit": 48,
          "value": "NaN"
        }
      ],
      "defaultChart": 21,
      "description": "Solcast Virtual Weather Station",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "WS_V19015",
        "uri": "https://www.alsoenergy.com/pub/Images/weather.png"
      },
      "functionCode": 5,
      "hardwareStatus": 1,
      "installDate": "2024-03-09",
      "inverterKw": 0,
      "key": "H494021",
      "lastAttempt": null,
      "lastChanged": "2024-03-08T14:48:26Z",
      "lastData": "",
      "lastSuccess": null,
      "name": "Solcast Virtual Weather Station",
      "outOfService": false,
      "primaryMetric": "",
      "primaryMetricName": 0,
      "serialNum": "",
      "sortOrder": 0,
      "units": 31,
      "unitsScale": "NaN"
    }
  ],
  "key": "S68143",
  "lastChanged": "2024-07-12T18:52:52Z",
  "timeZone": ""
}
```

[Return to top](#top)

