<a id="top"></a>
# /api/lookuplist/timeZonesRaw

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200, 200  

## Table of Contents

- [General](#general)
- [Example](#example)

## General

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "value": {
      "type": "number"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/lookuplist/timeZonesRaw
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 442641
referer: https://apps.alsoenergy.com/powertrack/S69211/analysis/chartbuilder/new?request=fromchart
```

**Response:**

```json
[
  {
    "name": "Undefined",
    "value": 0
  },
  {
    "name": "(UTC-12:00) International Date Line West",
    "value": 1
  },
  {
    "name": "(UTC-11:00) Coordinated Universal Time-11",
    "value": 2
  },
  {
    "name": "(UTC-11:00) Samoa",
    "value": 3
  },
  {
    "name": "(UTC-10:00) Hawaii",
    "value": 4
  },
  {
    "name": "(UTC-09:00) Alaska",
    "value": 5
  },
  {
    "name": "(UTC-08:00) Baja California",
    "value": 6
  },
  {
    "name": "(UTC-08:00) Pacific Time (US & Canada)",
    "value": 7
  },
  {
    "name": "(UTC-07:00) Arizona",
    "value": 8
  },
  {
    "name": "(UTC-07:00) Chihuahua, La Paz, Mazatlan",
    "value": 9
  },
  {
    "name": "(UTC-07:00) Mountain Time (US & Canada)",
    "value": 10
  },
  {
    "name": "(UTC-06:00) Central America",
    "value": 11
  },
  {
    "name": "(UTC-06:00) Central Time (US & Canada)",
    "value": 12
  },
  {
    "name": "(UTC-06:00) Guadalajara, Mexico City, Monterrey",
    "value": 13
  },
  {
    "name": "(UTC-06:00) Saskatchewan",
    "value": 14
  },
  {
    "name": "(UTC-05:00) Bogota, Lima, Quito",
    "value": 15
  },
  {
    "name": "(UTC-05:00) Eastern Time (US & Canada)",
    "value": 16
  },
  {
    "name": "(UTC-05:00) Indiana (East)",
    "value": 17
  },
  {
    "name": "(UTC-04:30) Caracas",
    "value": 18
  },
  {
    "name": "(UTC-04:00) Asuncion",
    "value": 19
  },
  {
    "name": "(UTC-04:00) Atlantic Time (Canada)",
    "value": 20
  },
  {
    "name": "(UTC-04:00) Cuiaba",
    "value": 21
  },
  {
    "name": "(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
    "value": 22
  },
  {
    "name": "(UTC-04:00) Santiago",
    "value": 23
  },
  {
    "name": "(UTC-03:30) Newfoundland",
    "value": 24
  },
  {
    "name": "(UTC-03:00) Brasilia",
    "value": 25
  },
  {
    "name": "(UTC-03:00) Buenos Aires",
    "value": 26
  },
  {
    "name": "(UTC-03:00) Cayenne, Fortaleza",
    "value": 27
  },
  {
    "name": "(UTC-03:00) Greenland",
    "value": 28
  },
  {
    "name": "(UTC-03:00) Montevideo",
    "value": 29
  },
  {
    "name": "(UTC-02:00) Coordinated Universal Time-02",
    "value": 30
  },
  {
    "name": "(UTC-02:00) Mid-Atlantic",
    "value": 31
  },
  {
    "name": "(UTC-01:00) Azores",
    "value": 32
  },
  {
    "name": "(UTC-01:00) Cape Verde Is.",
    "value": 33
  },
  {
    "name": "(UTC) Casablanca",
    "value": 34
  },
  {
    "name": "(UTC) Coordinated Universal Time",
    "value": 35
  },
  {
    "name": "(UTC) Dublin, Edinburgh, Lisbon, London",
    "value": 36
  },
  {
    "name": "(UTC) Monrovia, Reykjavik",
    "value": 37
  },
  {
    "name": "(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
    "value": 38
  },
  {
    "name": "(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
    "value": 39
  },
  {
    "name": "(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",
    "value": 40
  },
  {
    "name": "(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
    "value": 41
  },
  {
    "name": "(UTC+01:00) West Central Africa",
    "value": 42
  },
  {
    "name": "(UTC+01:00) Windhoek",
    "value": 43
  },
  {
    "name": "(UTC+02:00) Amman",
    "value": 44
  },
  {
    "name": "(UTC+02:00) Athens, Bucharest, Istanbul",
    "value": 45
  },
  {
    "name": "(UTC+02:00) Beirut",
    "value": 46
  },
  {
    "name": "(UTC+02:00) Cairo",
    "value": 47
  },
  {
    "name": "(UTC+02:00) Damascus",
    "value": 48
  },
  {
    "name": "(UTC+02:00) Harare, Pretoria",
    "value": 49
  },
  {
    "name": "(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
    "value": 50
  },
  {
    "name": "(UTC+02:00) Jerusalem",
    "value": 51
  },
  {
    "name": "(UTC+02:00) Minsk",
    "value": 52
  },
  {
    "name": "(UTC+03:00) Baghdad",
    "value": 53
  },
  {
    "name": "(UTC+03:00) Kuwait, Riyadh",
    "value": 54
  },
  {
    "name": "(UTC+03:00) Moscow, St. Petersburg, Volgograd",
    "value": 55
  },
  {
    "name": "(UTC+03:00) Nairobi",
    "value": 56
  },
  {
    "name": "(UTC+03:30) Tehran",
    "value": 57
  },
  {
    "name": "(UTC+04:00) Abu Dhabi, Muscat",
    "value": 58
  },
  {
    "name": "(UTC+04:00) Baku",
    "value": 59
  },
  {
    "name": "(UTC+04:00) Port Louis",
    "value": 60
  },
  {
    "name": "(UTC+04:00) Tbilisi",
    "value": 61
  },
  {
    "name": "(UTC+04:00) Yerevan",
    "value": 62
  },
  {
    "name": "(UTC+04:30) Kabul",
    "value": 63
  },
  {
    "name": "(UTC+05:00) Ekaterinburg",
    "value": 64
  },
  {
    "name": "(UTC+05:00) Islamabad, Karachi",
    "value": 65
  },
  {
    "name": "(UTC+05:00) Tashkent",
    "value": 66
  },
  {
    "name": "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
    "value": 67
  },
  {
    "name": "(UTC+05:30) Sri Jayawardenepura",
    "value": 68
  },
  {
    "name": "(UTC+05:45) Kathmandu",
    "value": 69
  },
  {
    "name": "(UTC+06:00) Astana",
    "value": 70
  },
  {
    "name": "(UTC+06:00) Dhaka",
    "value": 71
  },
  {
    "name": "(UTC+06:00) Novosibirsk",
    "value": 72
  },
  {
    "name": "(UTC+06:30) Yangon (Rangoon)",
    "value": 73
  },
  {
    "name": "(UTC+07:00) Bangkok, Hanoi, Jakarta",
    "value": 74
  },
  {
    "name": "(UTC+07:00) Krasnoyarsk",
    "value": 75
  },
  {
    "name": "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
    "value": 76
  },
  {
    "name": "(UTC+08:00) Irkutsk",
    "value": 77
  },
  {
    "name": "(UTC+08:00) Kuala Lumpur, Singapore",
    "value": 78
  },
  {
    "name": "(UTC+08:00) Perth",
    "value": 79
  },
  {
    "name": "(UTC+08:00) Taipei",
    "value": 80
  },
  {
    "name": "(UTC+08:00) Ulaanbaatar",
    "value": 81
  },
  {
    "name": "(UTC+09:00) Osaka, Sapporo, Tokyo",
    "value": 82
  },
  {
    "name": "(UTC+09:00) Seoul",
    "value": 83
  },
  {
    "name": "(UTC+09:00) Yakutsk",
    "value": 84
  },
  {
    "name": "(UTC+09:30) Adelaide",
    "value": 85
  },
  {
    "name": "(UTC+09:30) Darwin",
    "value": 86
  },
  {
    "name": "(UTC+10:00) Brisbane",
    "value": 87
  },
  {
    "name": "(UTC+10:00) Canberra, Melbourne, Sydney",
    "value": 88
  },
  {
    "name": "(UTC+10:00) Guam, Port Moresby",
    "value": 89
  },
  {
    "name": "(UTC+10:00) Hobart",
    "value": 90
  },
  {
    "name": "(UTC+10:00) Vladivostok",
    "value": 91
  },
  {
    "name": "(UTC+11:00) Magadan",
    "value": 92
  },
  {
    "name": "(UTC+11:00) Solomon Is., New Caledonia",
    "value": 93
  },
  {
    "name": "(UTC+12:00) Auckland, Wellington",
    "value": 94
  },
  {
    "name": "(UTC+12:00) Coordinated Universal Time+12",
    "value": 95
  },
  {
    "name": "(UTC+12:00) Fiji",
    "value": 96
  },
  {
    "name": "(UTC+12:00) Petropavlovsk-Kamchatsky - Old",
    "value": 97
  },
  {
    "name": "(UTC+13:00) Nuku'alofa",
    "value": 98
  }
]
```

[Return to top](#top)

