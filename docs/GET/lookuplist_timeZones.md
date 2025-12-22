# /api/lookuplist/timeZones

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
    "value": {
      "type": "number"
    },
    "name": {
      "type": "string"
    }
  }
}
```

[Return to top](#apilookuplisttimezones)

## Example

**Request:**

```http
GET /api/lookuplist/timeZones
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/S68143/administration/config
```

**Response:**

```json
[
  {
    "value": 0,
    "name": "Undefined"
  },
  {
    "value": 1268,
    "name": "(UTC-12:00) International Date Line West"
  },
  {
    "value": 2293,
    "name": "(UTC-11:00) Coordinated Universal Time-11"
  },
  {
    "value": 3341,
    "name": "(UTC-11:00) Samoa"
  },
  {
    "value": 4342,
    "name": "(UTC-10:00) Hawaii"
  },
  {
    "value": 5623,
    "name": "(UTC-09:00) Alaska"
  },
  {
    "value": 6648,
    "name": "(UTC-08:00) Baja California"
  },
  {
    "value": 7672,
    "name": "(UTC-08:00) Pacific Time (US & Canada)"
  },
  {
    "value": 8441,
    "name": "(UTC-07:00) Arizona"
  },
  {
    "value": 9721,
    "name": "(UTC-07:00) Chihuahua, La Paz, Mazatlan"
  },
  {
    "value": 10745,
    "name": "(UTC-07:00) Mountain Time (US & Canada)"
  },
  {
    "value": 11514,
    "name": "(UTC-06:00) Central America"
  },
  {
    "value": 12794,
    "name": "(UTC-06:00) Central Time (US & Canada)"
  },
  {
    "value": 13818,
    "name": "(UTC-06:00) Guadalajara, Mexico City, Monterrey"
  },
  {
    "value": 14586,
    "name": "(UTC-06:00) Saskatchewan"
  },
  {
    "value": 15611,
    "name": "(UTC-05:00) Bogota, Lima, Quito"
  },
  {
    "value": 16891,
    "name": "(UTC-05:00) Eastern Time (US & Canada)"
  },
  {
    "value": 17915,
    "name": "(UTC-05:00) Indiana (East)"
  },
  {
    "value": 18940,
    "name": "(UTC-04:30) Caracas"
  },
  {
    "value": 19964,
    "name": "(UTC-04:00) Asuncion"
  },
  {
    "value": 20988,
    "name": "(UTC-04:00) Atlantic Time (Canada)"
  },
  {
    "value": 22012,
    "name": "(UTC-04:00) Cuiaba"
  },
  {
    "value": 22780,
    "name": "(UTC-04:00) Georgetown, La Paz, Manaus, San Juan"
  },
  {
    "value": 24060,
    "name": "(UTC-04:00) Santiago"
  },
  {
    "value": 25085,
    "name": "(UTC-03:30) Newfoundland"
  },
  {
    "value": 26109,
    "name": "(UTC-03:00) Brasilia"
  },
  {
    "value": 27133,
    "name": "(UTC-03:00) Buenos Aires"
  },
  {
    "value": 27901,
    "name": "(UTC-03:00) Cayenne, Fortaleza"
  },
  {
    "value": 29181,
    "name": "(UTC-03:00) Greenland"
  },
  {
    "value": 30205,
    "name": "(UTC-03:00) Montevideo"
  },
  {
    "value": 30974,
    "name": "(UTC-02:00) Coordinated Universal Time-02"
  },
  {
    "value": 32254,
    "name": "(UTC-02:00) Mid-Atlantic"
  },
  {
    "value": 33279,
    "name": "(UTC-01:00) Azores"
  },
  {
    "value": 34047,
    "name": "(UTC-01:00) Cape Verde Is."
  },
  {
    "value": 35072,
    "name": "(UTC) Casablanca"
  },
  {
    "value": 35840,
    "name": "(UTC) Coordinated Universal Time"
  },
  {
    "value": 37120,
    "name": "(UTC) Dublin, Edinburgh, Lisbon, London"
  },
  {
    "value": 37888,
    "name": "(UTC) Monrovia, Reykjavik"
  },
  {
    "value": 39169,
    "name": "(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"
  },
  {
    "value": 40193,
    "name": "(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague"
  },
  {
    "value": 41217,
    "name": "(UTC+01:00) Brussels, Copenhagen, Madrid, Paris"
  },
  {
    "value": 42241,
    "name": "(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb"
  },
  {
    "value": 43009,
    "name": "(UTC+01:00) West Central Africa"
  },
  {
    "value": 44290,
    "name": "(UTC+01:00) Windhoek"
  },
  {
    "value": 45315,
    "name": "(UTC+02:00) Amman"
  },
  {
    "value": 46338,
    "name": "(UTC+02:00) Athens, Bucharest, Istanbul"
  },
  {
    "value": 47362,
    "name": "(UTC+02:00) Beirut"
  },
  {
    "value": 48386,
    "name": "(UTC+02:00) Cairo"
  },
  {
    "value": 49410,
    "name": "(UTC+02:00) Damascus"
  },
  {
    "value": 50178,
    "name": "(UTC+02:00) Harare, Pretoria"
  },
  {
    "value": 51458,
    "name": "(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius"
  },
  {
    "value": 52482,
    "name": "(UTC+02:00) Jerusalem"
  },
  {
    "value": 53507,
    "name": "(UTC+02:00) Minsk"
  },
  {
    "value": 54531,
    "name": "(UTC+03:00) Baghdad"
  },
  {
    "value": 55299,
    "name": "(UTC+03:00) Kuwait, Riyadh"
  },
  {
    "value": 56579,
    "name": "(UTC+03:00) Moscow, St. Petersburg, Volgograd"
  },
  {
    "value": 57347,
    "name": "(UTC+03:00) Nairobi"
  },
  {
    "value": 58627,
    "name": "(UTC+03:30) Tehran"
  },
  {
    "value": 59396,
    "name": "(UTC+04:00) Abu Dhabi, Muscat"
  },
  {
    "value": 60676,
    "name": "(UTC+04:00) Baku"
  },
  {
    "value": 61700,
    "name": "(UTC+04:00) Port Louis"
  },
  {
    "value": 62468,
    "name": "(UTC+04:00) Tbilisi"
  },
  {
    "value": 63748,
    "name": "(UTC+04:00) Yerevan"
  },
  {
    "value": 64516,
    "name": "(UTC+04:30) Kabul"
  },
  {
    "value": 65797,
    "name": "(UTC+05:00) Ekaterinburg"
  },
  {
    "value": 66821,
    "name": "(UTC+05:00) Islamabad, Karachi"
  },
  {
    "value": 67589,
    "name": "(UTC+05:00) Tashkent"
  },
  {
    "value": 68613,
    "name": "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi"
  },
  {
    "value": 69637,
    "name": "(UTC+05:30) Sri Jayawardenepura"
  },
  {
    "value": 70661,
    "name": "(UTC+05:45) Kathmandu"
  },
  {
    "value": 71686,
    "name": "(UTC+06:00) Astana"
  },
  {
    "value": 72966,
    "name": "(UTC+06:00) Dhaka"
  },
  {
    "value": 73989,
    "name": "(UTC+06:00) Novosibirsk"
  },
  {
    "value": 74758,
    "name": "(UTC+06:30) Yangon (Rangoon)"
  },
  {
    "value": 75783,
    "name": "(UTC+07:00) Bangkok, Hanoi, Jakarta"
  },
  {
    "value": 77063,
    "name": "(UTC+07:00) Krasnoyarsk"
  },
  {
    "value": 77832,
    "name": "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi"
  },
  {
    "value": 79112,
    "name": "(UTC+08:00) Irkutsk"
  },
  {
    "value": 79880,
    "name": "(UTC+08:00) Kuala Lumpur, Singapore"
  },
  {
    "value": 81160,
    "name": "(UTC+08:00) Perth"
  },
  {
    "value": 81928,
    "name": "(UTC+08:00) Taipei"
  },
  {
    "value": 83208,
    "name": "(UTC+08:00) Ulaanbaatar"
  },
  {
    "value": 83977,
    "name": "(UTC+09:00) Osaka, Sapporo, Tokyo"
  },
  {
    "value": 85001,
    "name": "(UTC+09:00) Seoul"
  },
  {
    "value": 86281,
    "name": "(UTC+09:00) Yakutsk"
  },
  {
    "value": 87305,
    "name": "(UTC+09:30) Adelaide"
  },
  {
    "value": 88073,
    "name": "(UTC+09:30) Darwin"
  },
  {
    "value": 89098,
    "name": "(UTC+10:00) Brisbane"
  },
  {
    "value": 90378,
    "name": "(UTC+10:00) Canberra, Melbourne, Sydney"
  },
  {
    "value": 91146,
    "name": "(UTC+10:00) Guam, Port Moresby"
  },
  {
    "value": 92426,
    "name": "(UTC+10:00) Hobart"
  },
  {
    "value": 93450,
    "name": "(UTC+10:00) Vladivostok"
  },
  {
    "value": 94475,
    "name": "(UTC+11:00) Magadan"
  },
  {
    "value": 95243,
    "name": "(UTC+11:00) Solomon Is., New Caledonia"
  },
  {
    "value": 96524,
    "name": "(UTC+12:00) Auckland, Wellington"
  },
  {
    "value": 97292,
    "name": "(UTC+12:00) Coordinated Universal Time+12"
  },
  {
    "value": 98572,
    "name": "(UTC+12:00) Fiji"
  },
  {
    "value": 99596,
    "name": "(UTC+12:00) Petropavlovsk-Kamchatsky - Old"
  },
  {
    "value": 100621,
    "name": "(UTC+13:00) Nuku'alofa"
  }
]
```

[Return to top](#apilookuplisttimezones)

