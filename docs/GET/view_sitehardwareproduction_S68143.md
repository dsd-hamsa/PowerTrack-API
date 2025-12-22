# /api/view/sitehardwareproduction/S68143

[← Back to Index](../README.md)

**Methods:** GET
**Status Codes:** 200
**Call Count:** 1

## Table of Contents

- [Response Structure](#response-structure)
- [Example](#example)

## Response Structure

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
    "timeZone": {
      "type": "string"
    },
    "hardware": {
      "type": "object",
      "properties": {
        "key": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "hardwareStatus": {
          "type": "number"
        },
        "serialNum": {
          "type": "string"
        },
        "installDate": {
          "type": "string"
        },
        "lastChanged": {
          "type": "string"
        },
        "communicationResult": {
          "type": "number"
        },
        "lastAttempt": {
          "type": "string"
        },
        "lastSuccess": {
          "type": "string"
        },
        "lastData": {
          "type": "string"
        },
        "primaryMetricName": {
          "type": "number"
        },
        "primaryMetric": {
          "type": "string"
        },
        "inverterKw": {
          "type": "number"
        },
        "dataRegisters": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "dataType": {
              "type": "number"
            },
            "value": {
              "type": "number"
            },
            "unit": {
              "type": "number"
            },
            "formattedValue": {
              "type": "string"
            }
          }
        },
        "deviceImage": {
          "type": "object",
          "properties": {
            "uri": {
              "type": "string"
            },
            "key": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "lastChanged": {
              "type": "object"
            },
            "contentType": {
              "type": "string"
            }
          }
        },
        "functionCode": {
          "type": "number"
        },
        "defaultChart": {
          "type": "number"
        },
        "outOfService": {
          "type": "boolean"
        },
        "capacityKW": {
          "type": "object"
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
    }
  }
}
```

[Return to top](#apiviewsitehardwareproductions68143)

## Example

**Request:**

```http
GET /api/view/sitehardwareproduction/S68143?lastChanged=2024-07-12T18:52:52Z
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/S68143/administration/config
```

**Response:**

```json
{
  "key": "S68143",
  "lastChanged": "2024-07-12T18:52:52Z",
  "timeZone": "",
  "hardware": [
    {
      "key": "H511563",
      "name": "Cell Modem (Pepwave)",
      "description": "Cell Modem (Pepwave)",
      "hardwareStatus": 1,
      "serialNum": "1932-1C3F-8F71",
      "installDate": "2024-07-12",
      "lastChanged": "2025-03-13T18:25:44Z",
      "communicationResult": 0,
      "lastAttempt": "2024-07-12T18:38:57Z",
      "lastSuccess": "2024-07-12T18:38:55Z",
      "lastData": "",
      "primaryMetricName": 0,
      "primaryMetric": "",
      "inverterKw": 0,
      "dataRegisters": [
        {
          "name": "RSSI",
          "dataType": 0,
          "value": -28,
          "unit": 1,
          "formattedValue": "-28 \t "
        },
        {
          "name": "BytesSent",
          "dataType": 0,
          "value": 11,
          "unit": 1,
          "formattedValue": "11 \t "
        },
        {
          "name": "BytesReceived",
          "dataType": 0,
          "value": 6,
          "unit": 1,
          "formattedValue": "6 \t "
        }
      ],
      "deviceImage": {
        "uri": "https://www.alsoenergy.com/pub/Images/Device/19759.png",
        "key": "",
        "name": "CE_V19759",
        "lastChanged": null,
        "contentType": ""
      },
      "functionCode": 31,
      "defaultChart": 0,
      "outOfService": false,
      "capacityKW": null,
      "sortOrder": 1,
      "units": 0,
      "unitsScale": "NaN"
    },
    {
      "key": "H511564",
      "name": "PowerLogger 1000",
      "description": "PowerLogger 1000",
      "hardwareStatus": 1,
      "serialNum": "",
      "installDate": "2024-07-12",
      "lastChanged": "2024-07-15T13:27:46Z",
      "communicationResult": 0,
      "lastAttempt": "2024-07-12T18:52:17Z",
      "lastSuccess": "2024-07-12T18:52:17Z",
      "lastData": "",
      "primaryMetricName": 0,
      "primaryMetric": "",
      "inverterKw": 0,
      "dataRegisters": [],
      "deviceImage": {
        "uri": "https://www.alsoenergy.com/pub/Images/Device/325.png",
        "key": "",
        "name": "GW_V325",
        "lastChanged": null,
        "contentType": ""
      },
      "functionCode": 10,
      "defaultChart": 0,
      "outOfService": false,
      "capacityKW": 1050,
      "sortOrder": 2,
      "units": 0,
      "unitsScale": "NaN"
    },
    {
      "key": "H511565",
      "name": "Accuvim II - PV Prod Meter - M0",
      "description": "Accuvim II - PV Prod Meter - M0",
      "hardwareStatus": 1,
      "serialNum": "AHB54010438",
      "installDate": "2024-07-12",
      "lastChanged": "2024-07-15T13:28:32Z",
      "communicationResult": 0,
      "lastAttempt": "2024-07-12T18:52:14Z",
      "lastSuccess": "2024-07-12T18:52:09Z",
      "lastData": "0 W",
      "primaryMetricName": 2,
      "primaryMetric": "0 W",
      "inverterKw": 524.88,
      "dataRegisters": [
        {
          "name": "Hz",
          "dataType": 0,
          "value": 0,
          "unit": 43,
          "formattedValue": "0 \tHz"
        },
        {
          "name": "PowerFactor",
          "dataType": 0,
          "value": 1,
          "unit": 39,
          "formattedValue": "1 \tPF"
        },
        {
          "name": "KWHrec",
          "dataType": 0,
          "value": 0,
          "unit": 11,
          "formattedValue": "0 \tWh"
        },
        {
          "name": "KWHdel",
          "dataType": 0,
          "value": 0,
          "unit": 11,
          "formattedValue": "0 \tWh"
        },
        {
          "name": "Reactive_Energy_Rec",
          "dataType": 0,
          "value": 0,
          "unit": 27,
          "formattedValue": "0 \tkVARh"
        },
        {
          "name": "Reactive_Energy_Del",
          "dataType": 0,
          "value": 0,
          "unit": 27,
          "formattedValue": "0 \tkVARh"
        },
        {
          "name": "KWHnet",
          "dataType": 0,
          "value": 0,
          "unit": 11,
          "formattedValue": "0 \tWh"
        },
        {
          "name": "Reactive_Energy_Net",
          "dataType": 0,
          "value": 0,
          "unit": 27,
          "formattedValue": "0 \tkVARh"
        },
        {
          "name": "KVAh",
          "dataType": 0,
          "value": 0,
          "unit": 22,
          "formattedValue": "0 \tkVAh"
        },
        {
          "name": "KVAR",
          "dataType": 0,
          "value": 0,
          "unit": 26,
          "formattedValue": "0 \tVAR"
        },
        {
          "name": "VacA",
          "dataType": 0,
          "value": 0,
          "unit": 2,
          "formattedValue": "0 \tV"
        },
        {
          "name": "VacB",
          "dataType": 0,
          "value": 0,
          "unit": 2,
          "formattedValue": "0 \tV"
        },
        {
          "name": "VacC",
          "dataType": 0,
          "value": 0,
          "unit": 2,
          "formattedValue": "0 \tV"
        },
        {
          "name": "VacLN",
          "dataType": 0,
          "value": 0,
          "unit": 2,
          "formattedValue": "0 \tV"
        },
        {
          "name": "VacAB",
          "dataType": 0,
          "value": 0,
          "unit": 2,
          "formattedValue": "0 \tV"
        },
        {
          "name": "VacBC",
          "dataType": 0,
          "value": 0,
          "unit": 2,
          "formattedValue": "0 \tV"
        },
        {
          "name": "VacCA",
          "dataType": 0,
          "value": 0,
          "unit": 2,
          "formattedValue": "0 \tV"
        },
        {
          "name": "VacLL",
          "dataType": 0,
          "value": 0,
          "unit": 2,
          "formattedValue": "0 \tV"
        },
        {
          "name": "IacA",
          "dataType": 0,
          "value": 0,
          "unit": 4,
          "formattedValue": "0 \tA"
        },
        {
          "name": "IacB",
          "dataType": 0,
          "value": 0,
          "unit": 4,
          "formattedValue": "0 \tA"
        },
        {
          "name": "IacC",
          "dataType": 0,
          "value": 0.0012328476877883077,
          "unit": 4,
          "formattedValue": "0.001 \tA"
        },
        {
          "name": "Active_Power_A",
          "dataType": 0,
          "value": 0,
          "unit": 10,
          "formattedValue": "0 \tW"
        },
        {
          "name": "Active_Power_B",
          "dataType": 0,
          "value": 0,
          "unit": 10,
          "formattedValue": "0 \tW"
        },
        {
          "name": "Active_Power_C",
          "dataType": 0,
          "value": 0,
          "unit": 10,
          "formattedValue": "0 \tW"
        },
        {
          "name": "KW",
          "dataType": 0,
          "value": 0,
          "unit": 10,
          "formattedValue": "0 \tW"
        },
        {
          "name": "PFA",
          "dataType": 0,
          "value": 1,
          "unit": 39,
          "formattedValue": "1 \tPF"
        },
        {
          "name": "PFB",
          "dataType": 0,
          "value": 1,
          "unit": 39,
          "formattedValue": "1 \tPF"
        },
        {
          "name": "PFC",
          "dataType": 0,
          "value": 1,
          "unit": 39,
          "formattedValue": "1 \tPF"
        },
        {
          "name": "kVARA",
          "dataType": 0,
          "value": 0,
          "unit": 26,
          "formattedValue": "0 \tVAR"
        },
        {
          "name": "kVARB",
          "dataType": 0,
          "value": 0,
          "unit": 26,
          "formattedValue": "0 \tVAR"
        },
        {
          "name": "kVARC",
          "dataType": 0,
          "value": 0,
          "unit": 26,
          "formattedValue": "0 \tVAR"
        },
        {
          "name": "KWHdelRaw",
          "dataType": 0,
          "value": 0,
          "unit": 11,
          "formattedValue": "0 \tWh"
        },
        {
          "name": "KWHrecRaw",
          "dataType": 0,
          "value": 0,
          "unit": 11,
          "formattedValue": "0 \tWh"
        },
        {
          "name": "KWHnetRaw",
          "dataType": 0,
          "value": 0,
          "unit": 11,
          "formattedValue": "0 \tWh"
        },
        {
          "name": "THD_Current",
          "dataType": 0,
          "value": 0,
          "unit": 4,
          "formattedValue": "0 \tA"
        },
        {
          "name": "THD_Voltage",
          "dataType": 0,
          "value": 0,
          "unit": 2,
          "formattedValue": "0 \tV"
        },
        {
          "name": "Potential_XMFR_Primary",
          "dataType": 0,
          "value": 220,
          "unit": 0,
          "formattedValue": "220 \t "
        },
        {
          "name": "Potential_XMFR_Secondary",
          "dataType": 0,
          "value": 220,
          "unit": 0,
          "formattedValue": "220 \t "
        },
        {
          "name": "Current_XMFR_Primary",
          "dataType": 0,
          "value": 5,
          "unit": 0,
          "formattedValue": "5 \t "
        },
        {
          "name": "Current_XMFR_Secondary",
          "dataType": 0,
          "value": 333,
          "unit": 0,
          "formattedValue": "333 \t "
        }
      ],
      "deviceImage": {
        "uri": "https://www.alsoenergy.com/pub/Images/meter.png",
        "key": "",
        "name": "PM_V19601",
        "lastChanged": null,
        "contentType": ""
      },
      "functionCode": 2,
      "defaultChart": 15,
      "outOfService": false,
      "capacityKW": 525,
      "sortOrder": 3,
      "units": 8,
      "unitsScale": 1
    },
    {
      "key": "H511566",
      "name": "Accuvim II - SITE??  Meter - M1",
      "description": "Accuvim II - SITE??  Meter - M1",
      "hardwareStatus": 1,
      "serialNum": "AHB54010502",
      "installDate": "2024-07-12",
      "lastChanged": "2025-12-22T22:01:11Z",
      "communicationResult": 0,
      "lastAttempt": "2024-07-12T18:52:17Z",
      "lastSuccess": "2024-07-12T18:52:10Z",
      "lastData": "0 W",
      "primaryMetricName": 2,
      "primaryMetric": "0 W",
      "inverterKw": 524.88,
      "dataRegisters": [
        {
          "name": "Hz",
          "dataType": 0,
          "value": 0,
          "unit": 43,
          "formattedValue": "0 \tHz"
        },
        {
          "name": "PowerFactor",
          "dataType": 0,
          "value": 1,
          "unit": 39,
          "formattedValue": "1 \tPF"
        },
        {
          "name": "KWHrec",
          "dataType": 0,
          "value": 0,
          "unit": 11,
          "formattedValue": "0 \tWh"
        },
        {
          "name": "KWHdel",
          "dataType": 0,
          "value": 0,
          "unit": 11,
          "formattedValue": "0 \tWh"
        },
        {
          "name": "Reactive_Energy_Rec",
          "dataType": 0,
          "value": 0,
          "unit": 27,
          "formattedValue": "0 \tkVARh"
        },
        {
          "name": "Reactive_Energy_Del",
          "dataType": 0,
          "value": 0,
          "unit": 27,
          "formattedValue": "0 \tkVARh"
        },
        {
          "name": "KWHnet",
          "dataType": 0,
          "value": 0,
          "unit": 11,
          "formattedValue": "0 \tWh"
        },
        {
          "name": "Reactive_Energy_Net",
          "dataType": 0,
          "value": 0,
          "unit": 27,
          "formattedValue": "0 \tkVARh"
        },
        {
          "name": "KVAh",
          "dataType": 0,
          "value": 0,
          "unit": 22,
          "formattedValue": "0 \tkVAh"
        },
        {
          "name": "KVAR",
          "dataType": 0,
          "value": 0,
          "unit": 26,
          "formattedValue": "0 \tVAR"
        },
        {
          "name": "VacA",
          "dataType": 0,
          "value": 0,
          "unit": 2,
          "formattedValue": "0 \tV"
        },
        {
          "name": "VacB",
          "dataType": 0,
          "value": 0,
          "unit": 2,
          "formattedValue": "0 \tV"
        },
        {
          "name": "VacC",
          "dataType": 0,
          "value": 0,
          "unit": 2,
          "formattedValue": "0 \tV"
        },
        {
          "name": "VacLN",
          "dataType": 0,
          "value": 0,
          "unit": 2,
          "formattedValue": "0 \tV"
        },
        {
          "name": "VacAB",
          "dataType": 0,
          "value": 0,
          "unit": 2,
          "formattedValue": "0 \tV"
        },
        {
          "name": "VacBC",
          "dataType": 0,
          "value": 0,
          "unit": 2,
          "formattedValue": "0 \tV"
        },
        {
          "name": "VacCA",
          "dataType": 0,
          "value": 0,
          "unit": 2,
          "formattedValue": "0 \tV"
        },
        {
          "name": "VacLL",
          "dataType": 0,
          "value": 0,
          "unit": 2,
          "formattedValue": "0 \tV"
        },
        {
          "name": "IacA",
          "dataType": 0,
          "value": 0,
          "unit": 4,
          "formattedValue": "0 \tA"
        },
        {
          "name": "IacB",
          "dataType": 0,
          "value": 0,
          "unit": 4,
          "formattedValue": "0 \tA"
        },
        {
          "name": "IacC",
          "dataType": 0,
          "value": 0.0008475010981783271,
          "unit": 4,
          "formattedValue": "0.001 \tA"
        },
        {
          "name": "Active_Power_A",
          "dataType": 0,
          "value": 0,
          "unit": 10,
          "formattedValue": "0 \tW"
        },
        {
          "name": "Active_Power_B",
          "dataType": 0,
          "value": 0,
          "unit": 10,
          "formattedValue": "0 \tW"
        },
        {
          "name": "Active_Power_C",
          "dataType": 0,
          "value": 0,
          "unit": 10,
          "formattedValue": "0 \tW"
        },
        {
          "name": "KW",
          "dataType": 0,
          "value": 0,
          "unit": 10,
          "formattedValue": "0 \tW"
        },
        {
          "name": "PFA",
          "dataType": 0,
          "value": 1,
          "unit": 39,
          "formattedValue": "1 \tPF"
        },
        {
          "name": "PFB",
          "dataType": 0,
          "value": 1,
          "unit": 39,
          "formattedValue": "1 \tPF"
        },
        {
          "name": "PFC",
          "dataType": 0,
          "value": 1,
          "unit": 39,
          "formattedValue": "1 \tPF"
        },
        {
          "name": "kVARA",
          "dataType": 0,
          "value": 0,
          "unit": 26,
          "formattedValue": "0 \tVAR"
        },
        {
          "name": "kVARB",
          "dataType": 0,
          "value": 0,
          "unit": 26,
          "formattedValue": "0 \tVAR"
        },
        {
          "name": "kVARC",
          "dataType": 0,
          "value": 0,
          "unit": 26,
          "formattedValue": "0 \tVAR"
        },
        {
          "name": "KWHdelRaw",
          "dataType": 0,
          "value": 0,
          "unit": 11,
          "formattedValue": "0 \tWh"
        },
        {
          "name": "KWHrecRaw",
          "dataType": 0,
          "value": 0,
          "unit": 11,
          "formattedValue": "0 \tWh"
        },
        {
          "name": "KWHnetRaw",
          "dataType": 0,
          "value": 0,
          "unit": 11,
          "formattedValue": "0 \tWh"
        },
        {
          "name": "THD_Current",
          "dataType": 0,
          "value": 0,
          "unit": 4,
          "formattedValue": "0 \tA"
        },
        {
          "name": "THD_Voltage",
          "dataType": 0,
          "value": 0,
          "unit": 2,
          "formattedValue": "0 \tV"
        },
        {
          "name": "Potential_XMFR_Primary",
          "dataType": 0,
          "value": 220,
          "unit": 0,
          "formattedValue": "220 \t "
        },
        {
          "name": "Potential_XMFR_Secondary",
          "dataType": 0,
          "value": 220,
          "unit": 0,
          "formattedValue": "220 \t "
        },
        {
          "name": "Current_XMFR_Primary",
          "dataType": 0,
          "value": 5,
          "unit": 0,
          "formattedValue": "5 \t "
        },
        {
          "name": "Current_XMFR_Secondary",
          "dataType": 0,
          "value": 333,
          "unit": 0,
          "formattedValue": "333 \t "
        }
      ],
      "deviceImage": {
        "uri": "https://www.alsoenergy.com/pub/Images/meter.png",
        "key": "",
        "name": "PM_V19601",
        "lastChanged": null,
        "contentType": ""
      },
      "functionCode": 2,
      "defaultChart": 15,
      "outOfService": false,
      "capacityKW": 525,
      "sortOrder": 4,
      "units": 8,
      "unitsScale": 1
    },
    {
      "key": "H511567",
      "name": "SMA Data Manager",
      "description": "SMA Data Manager",
      "hardwareStatus": 1,
      "serialNum": "",
      "installDate": "2024-07-12",
      "lastChanged": "2024-07-15T13:29:12Z",
      "communicationResult": 0,
      "lastAttempt": null,
      "lastSuccess": null,
      "lastData": "",
      "primaryMetricName": 0,
      "primaryMetric": "",
      "inverterKw": 0,
      "dataRegisters": [
        {
          "name": "KwhAC",
          "dataType": 0,
          "value": "NaN",
          "unit": 11,
          "formattedValue": "–"
        },
        {
          "name": "KwAC",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        }
      ],
      "deviceImage": {
        "uri": "https://www.alsoenergy.com/pub/Images/Device/2442.png",
        "key": "",
        "name": "IG_V2442",
        "lastChanged": null,
        "contentType": ""
      },
      "functionCode": 28,
      "defaultChart": 0,
      "outOfService": false,
      "capacityKW": null,
      "sortOrder": 10,
      "units": 0,
      "unitsScale": "NaN"
    },
    {
      "key": "H511568",
      "name": "INVERTER 1",
      "description": "INVERTER 1",
      "hardwareStatus": 1,
      "serialNum": "",
      "installDate": "2024-07-12",
      "lastChanged": "2025-12-22T19:21:53Z",
      "communicationResult": 0,
      "lastAttempt": null,
      "lastSuccess": null,
      "lastData": "",
      "primaryMetricName": 0,
      "primaryMetric": "",
      "inverterKw": 62.5,
      "dataRegisters": [
        {
          "name": "KwhAC",
          "dataType": 0,
          "value": "NaN",
          "unit": 11,
          "formattedValue": "—"
        },
        {
          "name": "KwAC",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "—"
        },
        {
          "name": "Active_Power_A",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "—"
        },
        {
          "name": "Active_Power_B",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "—"
        },
        {
          "name": "Active_Power_C",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "—"
        },
        {
          "name": "VacA",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "VacB",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "VacC",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "Iac",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": "—"
        },
        {
          "name": "IacA",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": "—"
        },
        {
          "name": "IacB",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": "—"
        },
        {
          "name": "IacC",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": "—"
        },
        {
          "name": "Frequency",
          "dataType": 0,
          "value": "NaN",
          "unit": 43,
          "formattedValue": "—"
        },
        {
          "name": "DeviceTemp",
          "dataType": 0,
          "value": "NaN",
          "unit": 30,
          "formattedValue": "—"
        },
        {
          "name": "VacAB",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "VacBC",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "VacCA",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "Reactive_Power_A",
          "dataType": 0,
          "value": "NaN",
          "unit": 26,
          "formattedValue": "—"
        },
        {
          "name": "Reactive_Power_B",
          "dataType": 0,
          "value": "NaN",
          "unit": 26,
          "formattedValue": "—"
        },
        {
          "name": "Reactive_Power_C",
          "dataType": 0,
          "value": "NaN",
          "unit": 26,
          "formattedValue": "—"
        },
        {
          "name": "KVAR",
          "dataType": 0,
          "value": "NaN",
          "unit": 26,
          "formattedValue": "—"
        },
        {
          "name": "KVA",
          "dataType": 0,
          "value": "NaN",
          "unit": 20,
          "formattedValue": "—"
        },
        {
          "name": "PowerFactor",
          "dataType": 0,
          "value": "NaN",
          "unit": 39,
          "formattedValue": "—"
        },
        {
          "name": "InternalTemp",
          "dataType": 0,
          "value": "NaN",
          "unit": 30,
          "formattedValue": "—"
        },
        {
          "name": "KwhACraw",
          "dataType": 0,
          "value": "NaN",
          "unit": 11,
          "formattedValue": "—"
        },
        {
          "name": "Idc1",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc1",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC1",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc2",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc2",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC2",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc3",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc3",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC3",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc4",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc4",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC4",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc5",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc5",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC5",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc6",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc6",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC6",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Serial_Number",
          "dataType": 0,
          "value": "NaN",
          "unit": 0,
          "formattedValue": "—"
        },
        {
          "name": "Fault",
          "dataType": 0,
          "value": "NaN",
          "unit": 0,
          "formattedValue": "—"
        },
        {
          "name": "Status",
          "dataType": 0,
          "value": "NaN",
          "unit": 0,
          "formattedValue": "—"
        },
        {
          "name": "Firmware_Version",
          "dataType": 0,
          "value": "NaN",
          "unit": 0,
          "formattedValue": "—"
        }
      ],
      "deviceImage": {
        "uri": "https://www.alsoenergy.com/pub/Images/Device/19880.png",
        "key": "",
        "name": "PV_V19880",
        "lastChanged": null,
        "contentType": ""
      },
      "functionCode": 1,
      "defaultChart": 2,
      "outOfService": false,
      "capacityKW": 63,
      "sortOrder": 11,
      "units": 0,
      "unitsScale": "NaN"
    },
    {
      "key": "H511569",
      "name": "INVERTER 2",
      "description": "INVERTER 2",
      "hardwareStatus": 1,
      "serialNum": "",
      "installDate": "2024-07-12",
      "lastChanged": "2025-11-25T22:12:40Z",
      "communicationResult": 0,
      "lastAttempt": null,
      "lastSuccess": null,
      "lastData": "",
      "primaryMetricName": 0,
      "primaryMetric": "",
      "inverterKw": 0,
      "dataRegisters": [
        {
          "name": "KwhAC",
          "dataType": 0,
          "value": "NaN",
          "unit": 11,
          "formattedValue": "—"
        },
        {
          "name": "KwAC",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "—"
        },
        {
          "name": "Active_Power_A",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "—"
        },
        {
          "name": "Active_Power_B",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "—"
        },
        {
          "name": "Active_Power_C",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "—"
        },
        {
          "name": "VacA",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "VacB",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "VacC",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "Iac",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": "—"
        },
        {
          "name": "IacA",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": "—"
        },
        {
          "name": "IacB",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": "—"
        },
        {
          "name": "IacC",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": "—"
        },
        {
          "name": "Frequency",
          "dataType": 0,
          "value": "NaN",
          "unit": 43,
          "formattedValue": "—"
        },
        {
          "name": "DeviceTemp",
          "dataType": 0,
          "value": "NaN",
          "unit": 30,
          "formattedValue": "—"
        },
        {
          "name": "VacAB",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "VacBC",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "VacCA",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "Reactive_Power_A",
          "dataType": 0,
          "value": "NaN",
          "unit": 26,
          "formattedValue": "—"
        },
        {
          "name": "Reactive_Power_B",
          "dataType": 0,
          "value": "NaN",
          "unit": 26,
          "formattedValue": "—"
        },
        {
          "name": "Reactive_Power_C",
          "dataType": 0,
          "value": "NaN",
          "unit": 26,
          "formattedValue": "—"
        },
        {
          "name": "KVAR",
          "dataType": 0,
          "value": "NaN",
          "unit": 26,
          "formattedValue": "—"
        },
        {
          "name": "KVA",
          "dataType": 0,
          "value": "NaN",
          "unit": 20,
          "formattedValue": "—"
        },
        {
          "name": "PowerFactor",
          "dataType": 0,
          "value": "NaN",
          "unit": 39,
          "formattedValue": "—"
        },
        {
          "name": "InternalTemp",
          "dataType": 0,
          "value": "NaN",
          "unit": 30,
          "formattedValue": "—"
        },
        {
          "name": "KwhACraw",
          "dataType": 0,
          "value": "NaN",
          "unit": 11,
          "formattedValue": "—"
        },
        {
          "name": "Idc1",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc1",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC1",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc2",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc2",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC2",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc3",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc3",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC3",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc4",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc4",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC4",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc5",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc5",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC5",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc6",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc6",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC6",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Serial_Number",
          "dataType": 0,
          "value": "NaN",
          "unit": 0,
          "formattedValue": "—"
        },
        {
          "name": "Fault",
          "dataType": 0,
          "value": "NaN",
          "unit": 0,
          "formattedValue": "—"
        },
        {
          "name": "Status",
          "dataType": 0,
          "value": "NaN",
          "unit": 0,
          "formattedValue": "—"
        },
        {
          "name": "Firmware_Version",
          "dataType": 0,
          "value": "NaN",
          "unit": 0,
          "formattedValue": "—"
        }
      ],
      "deviceImage": {
        "uri": "https://www.alsoenergy.com/pub/Images/Device/19880.png",
        "key": "",
        "name": "PV_V19880",
        "lastChanged": null,
        "contentType": ""
      },
      "functionCode": 1,
      "defaultChart": 2,
      "outOfService": false,
      "capacityKW": 0,
      "sortOrder": 12,
      "units": 0,
      "unitsScale": "NaN"
    },
    {
      "key": "H511570",
      "name": "INVERTER 3",
      "description": "INVERTER 3",
      "hardwareStatus": 1,
      "serialNum": "",
      "installDate": "2024-07-12",
      "lastChanged": "2025-11-25T22:12:43Z",
      "communicationResult": 0,
      "lastAttempt": null,
      "lastSuccess": null,
      "lastData": "",
      "primaryMetricName": 0,
      "primaryMetric": "",
      "inverterKw": 0,
      "dataRegisters": [
        {
          "name": "KwhAC",
          "dataType": 0,
          "value": "NaN",
          "unit": 11,
          "formattedValue": "—"
        },
        {
          "name": "KwAC",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "—"
        },
        {
          "name": "Active_Power_A",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "—"
        },
        {
          "name": "Active_Power_B",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "—"
        },
        {
          "name": "Active_Power_C",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "—"
        },
        {
          "name": "VacA",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "VacB",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "VacC",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "Iac",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": "—"
        },
        {
          "name": "IacA",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": "—"
        },
        {
          "name": "IacB",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": "—"
        },
        {
          "name": "IacC",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": "—"
        },
        {
          "name": "Frequency",
          "dataType": 0,
          "value": "NaN",
          "unit": 43,
          "formattedValue": "—"
        },
        {
          "name": "DeviceTemp",
          "dataType": 0,
          "value": "NaN",
          "unit": 30,
          "formattedValue": "—"
        },
        {
          "name": "VacAB",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "VacBC",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "VacCA",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "Reactive_Power_A",
          "dataType": 0,
          "value": "NaN",
          "unit": 26,
          "formattedValue": "—"
        },
        {
          "name": "Reactive_Power_B",
          "dataType": 0,
          "value": "NaN",
          "unit": 26,
          "formattedValue": "—"
        },
        {
          "name": "Reactive_Power_C",
          "dataType": 0,
          "value": "NaN",
          "unit": 26,
          "formattedValue": "—"
        },
        {
          "name": "KVAR",
          "dataType": 0,
          "value": "NaN",
          "unit": 26,
          "formattedValue": "—"
        },
        {
          "name": "KVA",
          "dataType": 0,
          "value": "NaN",
          "unit": 20,
          "formattedValue": "—"
        },
        {
          "name": "PowerFactor",
          "dataType": 0,
          "value": "NaN",
          "unit": 39,
          "formattedValue": "—"
        },
        {
          "name": "InternalTemp",
          "dataType": 0,
          "value": "NaN",
          "unit": 30,
          "formattedValue": "—"
        },
        {
          "name": "KwhACraw",
          "dataType": 0,
          "value": "NaN",
          "unit": 11,
          "formattedValue": "—"
        },
        {
          "name": "Idc1",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc1",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC1",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc2",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc2",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC2",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc3",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc3",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC3",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc4",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc4",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC4",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc5",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc5",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC5",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc6",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc6",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC6",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Serial_Number",
          "dataType": 0,
          "value": "NaN",
          "unit": 0,
          "formattedValue": "—"
        },
        {
          "name": "Fault",
          "dataType": 0,
          "value": "NaN",
          "unit": 0,
          "formattedValue": "—"
        },
        {
          "name": "Status",
          "dataType": 0,
          "value": "NaN",
          "unit": 0,
          "formattedValue": "—"
        },
        {
          "name": "Firmware_Version",
          "dataType": 0,
          "value": "NaN",
          "unit": 0,
          "formattedValue": "—"
        }
      ],
      "deviceImage": {
        "uri": "https://www.alsoenergy.com/pub/Images/Device/19880.png",
        "key": "",
        "name": "PV_V19880",
        "lastChanged": null,
        "contentType": ""
      },
      "functionCode": 1,
      "defaultChart": 2,
      "outOfService": false,
      "capacityKW": 0,
      "sortOrder": 13,
      "units": 0,
      "unitsScale": "NaN"
    },
    {
      "key": "H511571",
      "name": "INVERTER 4",
      "description": "INVERTER 4",
      "hardwareStatus": 1,
      "serialNum": "",
      "installDate": "2024-07-12",
      "lastChanged": "2025-11-25T22:12:47Z",
      "communicationResult": 0,
      "lastAttempt": null,
      "lastSuccess": null,
      "lastData": "",
      "primaryMetricName": 0,
      "primaryMetric": "",
      "inverterKw": 0,
      "dataRegisters": [
        {
          "name": "KwhAC",
          "dataType": 0,
          "value": "NaN",
          "unit": 11,
          "formattedValue": "—"
        },
        {
          "name": "KwAC",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "—"
        },
        {
          "name": "Active_Power_A",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "—"
        },
        {
          "name": "Active_Power_B",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "—"
        },
        {
          "name": "Active_Power_C",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "—"
        },
        {
          "name": "VacA",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "VacB",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "VacC",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "Iac",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": "—"
        },
        {
          "name": "IacA",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": "—"
        },
        {
          "name": "IacB",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": "—"
        },
        {
          "name": "IacC",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": "—"
        },
        {
          "name": "Frequency",
          "dataType": 0,
          "value": "NaN",
          "unit": 43,
          "formattedValue": "—"
        },
        {
          "name": "DeviceTemp",
          "dataType": 0,
          "value": "NaN",
          "unit": 30,
          "formattedValue": "—"
        },
        {
          "name": "VacAB",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "VacBC",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "VacCA",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "Reactive_Power_A",
          "dataType": 0,
          "value": "NaN",
          "unit": 26,
          "formattedValue": "—"
        },
        {
          "name": "Reactive_Power_B",
          "dataType": 0,
          "value": "NaN",
          "unit": 26,
          "formattedValue": "—"
        },
        {
          "name": "Reactive_Power_C",
          "dataType": 0,
          "value": "NaN",
          "unit": 26,
          "formattedValue": "—"
        },
        {
          "name": "KVAR",
          "dataType": 0,
          "value": "NaN",
          "unit": 26,
          "formattedValue": "—"
        },
        {
          "name": "KVA",
          "dataType": 0,
          "value": "NaN",
          "unit": 20,
          "formattedValue": "—"
        },
        {
          "name": "PowerFactor",
          "dataType": 0,
          "value": "NaN",
          "unit": 39,
          "formattedValue": "—"
        },
        {
          "name": "InternalTemp",
          "dataType": 0,
          "value": "NaN",
          "unit": 30,
          "formattedValue": "—"
        },
        {
          "name": "KwhACraw",
          "dataType": 0,
          "value": "NaN",
          "unit": 11,
          "formattedValue": "—"
        },
        {
          "name": "Idc1",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc1",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC1",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc2",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc2",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC2",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc3",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc3",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC3",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc4",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc4",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC4",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc5",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc5",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC5",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc6",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc6",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC6",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Serial_Number",
          "dataType": 0,
          "value": "NaN",
          "unit": 0,
          "formattedValue": "—"
        },
        {
          "name": "Fault",
          "dataType": 0,
          "value": "NaN",
          "unit": 0,
          "formattedValue": "—"
        },
        {
          "name": "Status",
          "dataType": 0,
          "value": "NaN",
          "unit": 0,
          "formattedValue": "—"
        },
        {
          "name": "Firmware_Version",
          "dataType": 0,
          "value": "NaN",
          "unit": 0,
          "formattedValue": "—"
        }
      ],
      "deviceImage": {
        "uri": "https://www.alsoenergy.com/pub/Images/Device/19880.png",
        "key": "",
        "name": "PV_V19880",
        "lastChanged": null,
        "contentType": ""
      },
      "functionCode": 1,
      "defaultChart": 2,
      "outOfService": false,
      "capacityKW": 0,
      "sortOrder": 14,
      "units": 0,
      "unitsScale": "NaN"
    },
    {
      "key": "H511572",
      "name": "INVERTER 5",
      "description": "INVERTER 5",
      "hardwareStatus": 1,
      "serialNum": "",
      "installDate": "2024-07-12",
      "lastChanged": "2025-11-25T22:12:52Z",
      "communicationResult": 0,
      "lastAttempt": null,
      "lastSuccess": null,
      "lastData": "",
      "primaryMetricName": 0,
      "primaryMetric": "",
      "inverterKw": 0,
      "dataRegisters": [
        {
          "name": "KwhAC",
          "dataType": 0,
          "value": "NaN",
          "unit": 11,
          "formattedValue": "—"
        },
        {
          "name": "KwAC",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "—"
        },
        {
          "name": "Active_Power_A",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "—"
        },
        {
          "name": "Active_Power_B",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "—"
        },
        {
          "name": "Active_Power_C",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "—"
        },
        {
          "name": "VacA",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "VacB",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "VacC",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "Iac",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": "—"
        },
        {
          "name": "IacA",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": "—"
        },
        {
          "name": "IacB",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": "—"
        },
        {
          "name": "IacC",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": "—"
        },
        {
          "name": "Frequency",
          "dataType": 0,
          "value": "NaN",
          "unit": 43,
          "formattedValue": "—"
        },
        {
          "name": "DeviceTemp",
          "dataType": 0,
          "value": "NaN",
          "unit": 30,
          "formattedValue": "—"
        },
        {
          "name": "VacAB",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "VacBC",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "VacCA",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "Reactive_Power_A",
          "dataType": 0,
          "value": "NaN",
          "unit": 26,
          "formattedValue": "—"
        },
        {
          "name": "Reactive_Power_B",
          "dataType": 0,
          "value": "NaN",
          "unit": 26,
          "formattedValue": "—"
        },
        {
          "name": "Reactive_Power_C",
          "dataType": 0,
          "value": "NaN",
          "unit": 26,
          "formattedValue": "—"
        },
        {
          "name": "KVAR",
          "dataType": 0,
          "value": "NaN",
          "unit": 26,
          "formattedValue": "—"
        },
        {
          "name": "KVA",
          "dataType": 0,
          "value": "NaN",
          "unit": 20,
          "formattedValue": "—"
        },
        {
          "name": "PowerFactor",
          "dataType": 0,
          "value": "NaN",
          "unit": 39,
          "formattedValue": "—"
        },
        {
          "name": "InternalTemp",
          "dataType": 0,
          "value": "NaN",
          "unit": 30,
          "formattedValue": "—"
        },
        {
          "name": "KwhACraw",
          "dataType": 0,
          "value": "NaN",
          "unit": 11,
          "formattedValue": "—"
        },
        {
          "name": "Idc1",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc1",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC1",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc2",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc2",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC2",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc3",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc3",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC3",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc4",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc4",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC4",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc5",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc5",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC5",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc6",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc6",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC6",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Serial_Number",
          "dataType": 0,
          "value": "NaN",
          "unit": 0,
          "formattedValue": "—"
        },
        {
          "name": "Fault",
          "dataType": 0,
          "value": "NaN",
          "unit": 0,
          "formattedValue": "—"
        },
        {
          "name": "Status",
          "dataType": 0,
          "value": "NaN",
          "unit": 0,
          "formattedValue": "—"
        },
        {
          "name": "Firmware_Version",
          "dataType": 0,
          "value": "NaN",
          "unit": 0,
          "formattedValue": "—"
        }
      ],
      "deviceImage": {
        "uri": "https://www.alsoenergy.com/pub/Images/Device/19880.png",
        "key": "",
        "name": "PV_V19880",
        "lastChanged": null,
        "contentType": ""
      },
      "functionCode": 1,
      "defaultChart": 2,
      "outOfService": false,
      "capacityKW": 0,
      "sortOrder": 15,
      "units": 0,
      "unitsScale": "NaN"
    },
    {
      "key": "H511573",
      "name": "INVERTER 6",
      "description": "INVERTER 6",
      "hardwareStatus": 1,
      "serialNum": "",
      "installDate": "2024-07-12",
      "lastChanged": "2025-11-25T22:12:55Z",
      "communicationResult": 0,
      "lastAttempt": null,
      "lastSuccess": null,
      "lastData": "",
      "primaryMetricName": 0,
      "primaryMetric": "",
      "inverterKw": 0,
      "dataRegisters": [
        {
          "name": "KwhAC",
          "dataType": 0,
          "value": "NaN",
          "unit": 11,
          "formattedValue": "—"
        },
        {
          "name": "KwAC",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "—"
        },
        {
          "name": "Active_Power_A",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "—"
        },
        {
          "name": "Active_Power_B",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "—"
        },
        {
          "name": "Active_Power_C",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "—"
        },
        {
          "name": "VacA",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "VacB",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "VacC",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "Iac",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": "—"
        },
        {
          "name": "IacA",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": "—"
        },
        {
          "name": "IacB",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": "—"
        },
        {
          "name": "IacC",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": "—"
        },
        {
          "name": "Frequency",
          "dataType": 0,
          "value": "NaN",
          "unit": 43,
          "formattedValue": "—"
        },
        {
          "name": "DeviceTemp",
          "dataType": 0,
          "value": "NaN",
          "unit": 30,
          "formattedValue": "—"
        },
        {
          "name": "VacAB",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "VacBC",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "VacCA",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "Reactive_Power_A",
          "dataType": 0,
          "value": "NaN",
          "unit": 26,
          "formattedValue": "—"
        },
        {
          "name": "Reactive_Power_B",
          "dataType": 0,
          "value": "NaN",
          "unit": 26,
          "formattedValue": "—"
        },
        {
          "name": "Reactive_Power_C",
          "dataType": 0,
          "value": "NaN",
          "unit": 26,
          "formattedValue": "—"
        },
        {
          "name": "KVAR",
          "dataType": 0,
          "value": "NaN",
          "unit": 26,
          "formattedValue": "—"
        },
        {
          "name": "KVA",
          "dataType": 0,
          "value": "NaN",
          "unit": 20,
          "formattedValue": "—"
        },
        {
          "name": "PowerFactor",
          "dataType": 0,
          "value": "NaN",
          "unit": 39,
          "formattedValue": "—"
        },
        {
          "name": "InternalTemp",
          "dataType": 0,
          "value": "NaN",
          "unit": 30,
          "formattedValue": "—"
        },
        {
          "name": "KwhACraw",
          "dataType": 0,
          "value": "NaN",
          "unit": 11,
          "formattedValue": "—"
        },
        {
          "name": "Idc1",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc1",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC1",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc2",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc2",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC2",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc3",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc3",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC3",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc4",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc4",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC4",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc5",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc5",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC5",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc6",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc6",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC6",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Serial_Number",
          "dataType": 0,
          "value": "NaN",
          "unit": 0,
          "formattedValue": "—"
        },
        {
          "name": "Fault",
          "dataType": 0,
          "value": "NaN",
          "unit": 0,
          "formattedValue": "—"
        },
        {
          "name": "Status",
          "dataType": 0,
          "value": "NaN",
          "unit": 0,
          "formattedValue": "—"
        },
        {
          "name": "Firmware_Version",
          "dataType": 0,
          "value": "NaN",
          "unit": 0,
          "formattedValue": "—"
        }
      ],
      "deviceImage": {
        "uri": "https://www.alsoenergy.com/pub/Images/Device/19880.png",
        "key": "",
        "name": "PV_V19880",
        "lastChanged": null,
        "contentType": ""
      },
      "functionCode": 1,
      "defaultChart": 2,
      "outOfService": false,
      "capacityKW": 0,
      "sortOrder": 16,
      "units": 0,
      "unitsScale": "NaN"
    },
    {
      "key": "H511574",
      "name": "INVERTER 7",
      "description": "INVERTER 7",
      "hardwareStatus": 1,
      "serialNum": "",
      "installDate": "2024-07-12",
      "lastChanged": "2025-11-25T22:12:59Z",
      "communicationResult": 0,
      "lastAttempt": null,
      "lastSuccess": null,
      "lastData": "",
      "primaryMetricName": 0,
      "primaryMetric": "",
      "inverterKw": 0,
      "dataRegisters": [
        {
          "name": "KwhAC",
          "dataType": 0,
          "value": "NaN",
          "unit": 11,
          "formattedValue": "—"
        },
        {
          "name": "KwAC",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "—"
        },
        {
          "name": "Active_Power_A",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "—"
        },
        {
          "name": "Active_Power_B",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "—"
        },
        {
          "name": "Active_Power_C",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "—"
        },
        {
          "name": "VacA",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "VacB",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "VacC",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "Iac",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": "—"
        },
        {
          "name": "IacA",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": "—"
        },
        {
          "name": "IacB",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": "—"
        },
        {
          "name": "IacC",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": "—"
        },
        {
          "name": "Frequency",
          "dataType": 0,
          "value": "NaN",
          "unit": 43,
          "formattedValue": "—"
        },
        {
          "name": "DeviceTemp",
          "dataType": 0,
          "value": "NaN",
          "unit": 30,
          "formattedValue": "—"
        },
        {
          "name": "VacAB",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "VacBC",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "VacCA",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": "—"
        },
        {
          "name": "Reactive_Power_A",
          "dataType": 0,
          "value": "NaN",
          "unit": 26,
          "formattedValue": "—"
        },
        {
          "name": "Reactive_Power_B",
          "dataType": 0,
          "value": "NaN",
          "unit": 26,
          "formattedValue": "—"
        },
        {
          "name": "Reactive_Power_C",
          "dataType": 0,
          "value": "NaN",
          "unit": 26,
          "formattedValue": "—"
        },
        {
          "name": "KVAR",
          "dataType": 0,
          "value": "NaN",
          "unit": 26,
          "formattedValue": "—"
        },
        {
          "name": "KVA",
          "dataType": 0,
          "value": "NaN",
          "unit": 20,
          "formattedValue": "—"
        },
        {
          "name": "PowerFactor",
          "dataType": 0,
          "value": "NaN",
          "unit": 39,
          "formattedValue": "—"
        },
        {
          "name": "InternalTemp",
          "dataType": 0,
          "value": "NaN",
          "unit": 30,
          "formattedValue": "—"
        },
        {
          "name": "KwhACraw",
          "dataType": 0,
          "value": "NaN",
          "unit": 11,
          "formattedValue": "—"
        },
        {
          "name": "Idc1",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc1",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC1",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc2",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc2",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC2",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc3",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc3",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC3",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc4",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc4",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC4",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc5",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc5",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC5",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc6",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc6",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC6",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Idc",
          "dataType": 0,
          "value": "NaN",
          "unit": 4,
          "formattedValue": " \tA"
        },
        {
          "name": "Vdc",
          "dataType": 0,
          "value": "NaN",
          "unit": 2,
          "formattedValue": " \tV"
        },
        {
          "name": "KwDC",
          "dataType": 0,
          "value": "NaN",
          "unit": 10,
          "formattedValue": "–"
        },
        {
          "name": "Serial_Number",
          "dataType": 0,
          "value": "NaN",
          "unit": 0,
          "formattedValue": "—"
        },
        {
          "name": "Fault",
          "dataType": 0,
          "value": "NaN",
          "unit": 0,
          "formattedValue": "—"
        },
        {
          "name": "Status",
          "dataType": 0,
          "value": "NaN",
          "unit": 0,
          "formattedValue": "—"
        },
        {
          "name": "Firmware_Version",
          "dataType": 0,
          "value": "NaN",
          "unit": 0,
          "formattedValue": "—"
        }
      ],
      "deviceImage": {
        "uri": "https://www.alsoenergy.com/pub/Images/Device/19880.png",
        "key": "",
        "name": "PV_V19880",
        "lastChanged": null,
        "contentType": ""
      },
      "functionCode": 1,
      "defaultChart": 2,
      "outOfService": false,
      "capacityKW": 0,
      "sortOrder": 17,
      "units": 0,
      "unitsScale": "NaN"
    },
    {
      "key": "H511575",
      "name": "REFERENCE CELL - POA",
      "description": "REFERENCE CELL - POA",
      "hardwareStatus": 1,
      "serialNum": "485-32003-23-24211210",
      "installDate": "2024-07-12",
      "lastChanged": "2024-07-11T21:17:30Z",
      "communicationResult": 0,
      "lastAttempt": "2024-07-12T18:52:50Z",
      "lastSuccess": "2024-07-12T18:52:42Z",
      "lastData": "2.7 W/m²",
      "primaryMetricName": 108,
      "primaryMetric": "2.7 W/m²",
      "inverterKw": 0,
      "dataRegisters": [
        {
          "name": "Sun",
          "dataType": 0,
          "value": 2.7,
          "unit": 57,
          "formattedValue": "2.7 \tW/m²"
        },
        {
          "name": "Temp1",
          "dataType": 0,
          "value": 75,
          "unit": 30,
          "formattedValue": "167 \t°F"
        },
        {
          "name": "Temp3",
          "dataType": 0,
          "value": 101,
          "unit": 30,
          "formattedValue": "214 \t°F"
        }
      ],
      "deviceImage": {
        "uri": "https://www.alsoenergy.com/pub/Images/Device/3588.png",
        "key": "",
        "name": "WS_V3588",
        "lastChanged": null,
        "contentType": ""
      },
      "functionCode": 5,
      "defaultChart": 21,
      "outOfService": false,
      "capacityKW": null,
      "sortOrder": 41,
      "units": 57,
      "unitsScale": 1
    },
    {
      "key": "H511576",
      "name": "WEATHER STATION",
      "description": "WEATHER STATION",
      "hardwareStatus": 1,
      "serialNum": "1V0177-8",
      "installDate": "2024-07-12",
      "lastChanged": "2024-07-11T21:18:06Z",
      "communicationResult": 0,
      "lastAttempt": "2024-07-12T18:52:52Z",
      "lastSuccess": "2024-07-12T18:52:42Z",
      "lastData": "2.47 kW/m²",
      "primaryMetricName": 114,
      "primaryMetric": "2.47 kW/m²",
      "inverterKw": 0,
      "dataRegisters": [
        {
          "name": "WindDirection",
          "dataType": 0,
          "value": 219.25274725274724,
          "unit": 40,
          "formattedValue": "219 \t°"
        },
        {
          "name": "Sun2",
          "dataType": 0,
          "value": 2471.620788452472,
          "unit": 57,
          "formattedValue": "2.47 \tkW/m²"
        },
        {
          "name": "TempF",
          "dataType": 0,
          "value": -20.2,
          "unit": 31,
          "formattedValue": "-20.2 \t°F"
        },
        {
          "name": "WindSpeed",
          "dataType": 0,
          "value": 0,
          "unit": 50,
          "formattedValue": "0 \tmph"
        },
        {
          "name": "Temp_Cabinet_High",
          "dataType": 0,
          "value": 2658,
          "unit": 0,
          "formattedValue": "2,658 \t "
        },
        {
          "name": "Temp_Cabinet_Low",
          "dataType": 0,
          "value": 5140,
          "unit": 0,
          "formattedValue": "5,140 \t "
        },
        {
          "name": "CabF",
          "dataType": 0,
          "value": 32,
          "unit": 30,
          "formattedValue": "89.6 \t°F"
        },
        {
          "name": "MaxSun",
          "dataType": 0,
          "value": 24752.47524752475,
          "unit": 57,
          "formattedValue": "24.8 \tkW/m²"
        },
        {
          "name": "MaxSun2",
          "dataType": 0,
          "value": 2475.2475247524753,
          "unit": 57,
          "formattedValue": "2.48 \tkW/m²"
        }
      ],
      "deviceImage": {
        "uri": "https://www.alsoenergy.com/pub/Images/Device/8164.png",
        "key": "",
        "name": "WS_V8164",
        "lastChanged": null,
        "contentType": ""
      },
      "functionCode": 5,
      "defaultChart": 21,
      "outOfService": false,
      "capacityKW": null,
      "sortOrder": 42,
      "units": 94,
      "unitsScale": 1000
    },
    {
      "key": "H494021",
      "name": "Solcast Virtual Weather Station",
      "description": "Solcast Virtual Weather Station",
      "hardwareStatus": 1,
      "serialNum": "",
      "installDate": "2024-03-09",
      "lastChanged": "2024-03-08T14:48:26Z",
      "communicationResult": 0,
      "lastAttempt": null,
      "lastSuccess": null,
      "lastData": "",
      "primaryMetricName": 0,
      "primaryMetric": "",
      "inverterKw": 0,
      "dataRegisters": [
        {
          "name": "WindDirection",
          "dataType": 0,
          "value": "NaN",
          "unit": 40,
          "formattedValue": "—"
        },
        {
          "name": "GHI",
          "dataType": 0,
          "value": "NaN",
          "unit": 57,
          "formattedValue": "—"
        },
        {
          "name": "DNI",
          "dataType": 0,
          "value": "NaN",
          "unit": 57,
          "formattedValue": "—"
        },
        {
          "name": "DHI",
          "dataType": 0,
          "value": "NaN",
          "unit": 57,
          "formattedValue": "—"
        },
        {
          "name": "Ambient",
          "dataType": 0,
          "value": "NaN",
          "unit": 31,
          "formattedValue": "—"
        },
        {
          "name": "WindSpeed",
          "dataType": 0,
          "value": "NaN",
          "unit": 50,
          "formattedValue": "—"
        },
        {
          "name": "Snow",
          "dataType": 0,
          "value": "NaN",
          "unit": 48,
          "formattedValue": "—"
        }
      ],
      "deviceImage": {
        "uri": "https://www.alsoenergy.com/pub/Images/weather.png",
        "key": "",
        "name": "WS_V19015",
        "lastChanged": null,
        "contentType": ""
      },
      "functionCode": 5,
      "defaultChart": 21,
      "outOfService": false,
      "capacityKW": null,
      "sortOrder": 0,
      "units": 31,
      "unitsScale": "NaN"
    }
  ]
}
```

[Return to top](#apiviewsitehardwareproductions68143)

