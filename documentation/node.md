# Endpoint 15

[← Back to Index](../README.md)


### `/api/node`

**Methods:** POST  
**Status Codes:** 200  
**Call Count:** 22  

#### Response Structure

```json
{
  "type": "object"
}
```

#### Example

**Request:**

```http
POST /api/node?lastChanged=2025-12-19T16:14:28Z
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "key": "{\"key\":\"H70617\",\"context\":\"path\",\"kinds\":[\"customer\",\"hardware\",\"site\",\"user\",\"file\",\"folder\",\"report\"],\"subKinds\":[],\"nodes\":[],\"filter\":\"\",\"filterBy\":\"\"}",
  "lastChanged": "2025-12-12T17:53:01Z",
  "node": null,
  "nodes": [
    {
      "flags": 0,
      "icon": "CustAccount",
      "isHidden": false,
      "key": "C8458",
      "kind": "customer",
      "lastChanged": "2023-11-01T20:51:32Z",
      "name": "Distributed Solar Development",
      "parentKey": "C2",
      "path": [],
      "permissions": 27,
      "sort": 2147483647,
      "subKind": 0,
      "validationStatus": 0
    },
    {
      "flags": 0,
      "icon": "Customer",
      "isHidden": false,
      "key": "C25592",
      "kind": "customer",
      "lastChanged": "2023-10-19T16:37:35Z",
      "name": "5.2_Asset Operation External",
      "parentKey": "C8458",
      "path": [
        "C8458"
      ],
      "permissions": 27,
      "sort": 2147483647,
      "subKind": 0,
      "validationStatus": 0
    },
    {
      "flags": 0,
      "icon": "Customer",
      "isHidden": false,
      "key": "C16298",
      "kind": "customer",
      "lastChanged": "2023-10-19T16:41:08Z",
      "name": "External",
      "parentKey": "C25592",
      "path": [
        "C8458",
        "C25592"
      ],
      "permissions": 27,
      "sort": 2147483647,
      "subKind": 0,
      "validationStatus": 0
    },
    {
      "flags": 0,
      "icon": "Customer",
      "isHidden": false,
      "key": "C16299",
      "kind": "customer",
      "lastChanged": "2019-07-18T16:43:04Z",
      "name": "O&M",
      "parentKey": "C16298",
      "path": [
        "C8458",
        "C25592",
        "C16298"
      ],
      "permissions": 27,
      "sort": 2147483647,
      "subKind": 0,
      "validationStatus": 0
    },
    {
      "flags": 0,
      "icon": "Customer",
      "isHidden": false,
      "key": "C16300",
      "kind": "customer",
      "lastChanged": "2019-08-07T07:35:31Z",
      "name": "Full Scope",
      "parentKey": "C16299",
      "path": [
        "C8458",
        "C25592",
        "C16298",
        "C16299"
      ],
      "permissions": 27,
      "sort": 2147483647,
      "subKind": 0,
      "validationStatus": 0
    },
    {
      "flags": 0,
      "icon": "Site",
      "isHidden": false,
      "key": "S38292",
      "kind": "site",
      "lastChanged": "2025-12-12T17:53:01Z",
      "name": "Smith & Wesson - MA-21-C273",
      "parentKey": "C16300",
      "path": [
        "C8458",
        "C25592",
        "C16298",
        "C16299",
        "C16300"
      ],
      "permissions": 27,
      "sort": 2147483647,
      "subKind": 0,
      "validationStatus": 0
    },
    {
      "flags": 0,
      "icon": "https://www.alsoenergy.com/pub/Images/Device/506.png",
      "isHidden": false,
      "key": "H70617",
      "kind": "hardware",
      "lastChanged": "2017-10-17T15:42:09Z",
      "name": "Weather Station (Module)",
      "parentKey": "S38292",
      "path": [
        "C8458",
        "C25592",
        "C16298",
        "C16299",
        "C16300",
        "S38292"
      ],
      "permissions": 27,
      "sort": 92,
      "subKind": 5,
      "validationStatus": 0
    }
  ]
}
```

