# `/api/edit/pvsystmodule`

[← Back to Index](../README.md)


### `/api/edit/pvsystmodule`

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
POST /api/edit/pvsystmodule
Accept: application/json
Referer: https://www.alsoenergy.com
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711

{
  "key": "",
  "manufacturer": "Qcells",
  "model": "Q.PEAK DUO XL-G11.3 BFG 595W",
  "cellType": 0,
  "cellsSeries": 78,
  "cellsParallel": 2,
  "cellArea": 162,
  "isc": 13.77,
  "voc": 53.63,
  "impp": 13.17,
  "vmpp": 45.18,
  "muIsc": 0.03957879448075526,
  "rShunt": 800,
  "rSeries": 0.157,
  "rShuntGinc": 3000,
  "rShuntExp": 5.5,
  "muPMax": -0.34
}
```

**Response:**

```json
{}
```
