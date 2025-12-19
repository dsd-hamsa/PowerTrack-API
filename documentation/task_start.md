# `/api/task/start`

[← Back to Index](../README.md)


### `/api/task/start`

**Methods:** POST  
**Status Codes:** 200  
**Call Count:** 1  

#### Response Structure

```json
{
  "type": "object"
}
```

#### Example

**Request:**

```http
POST /api/task/start
Accept: application/json
Referer: https://www.alsoenergy.com
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711

{
  "command": 2,
  "reportConfig": null,
  "sourceKey": "F211147"
}
```

**Response:**

```json
{}
```
