# `/api/view/pvcurvemodels/efficiencycurvemodels`

[← Back to Index](../README.md)



**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 1  

#### Response Structure

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "properties": {}
  }
}
```

#### Example

**Request:**

```http
GET /api/view/pvcurvemodels/efficiencycurvemodels?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
Referer: https://www.alsoenergy.com
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
[
  {
    "name": "Select Inverter Efficiency Curve",
    "value": 0
  },
  {
    "name": "ABB, PVS980-58-1818kVA-I",
    "value": 818
  },
  {
    "name": "ABB, TRIO-TM-60_0-480",
    "value": 798
  },
  {
    "name": "ABB, ULTRA 1500-TL-OUTD-2-US-690-M/S-DNVKEMA",
    "value": 807
  },
  {
    "name": "Advanced Energy Industries, 1000NX-BSS02",
    "value": 107
  },
  {
    "name": "Advanced Energy Industries, 250NX-BSS01",
    "value": 150
  },
  {
    "name": "Advanced Energy Industries, 333NX-BSS01",
    "value": 149
  },
  {
    "name": "Advanced Energy Industries, 3TL-12-10-BSS01",
    "value": 174
  },
  {
    "name": "Advanced Energy Industries, 3TL-12-6-BSS02",
    "value": 173
  },
  {
    "name": "Advanced Energy Industries, 3TL-16-10-BSS01",
    "value": 171
  },
  {
    "name": "Advanced Energy Industries, 3TL-16-6-BSS02",
    "value": 172
  },
  {
    "name": "Advanced Energy Industries, 3TL-20-10-BSS01",
    "value": 169
  },
  {
    "name": "Advanced Energy Industries, 3TL-20-6-BSS02",
    "value": 170
  },
  {
    "name": "Advanced Energy Industries, 3TL-20KW",
    "value": 868
  },
  {
    "name": "Advanced Energy Industries, 3TL-23-10-BSS02",
    "value": 168
  },
  {
    "name": "Advanced Energy Industries, 3TL-23-6-BSS03",
    "value": 167
  },
  {
    "name": "Advanced Energy Industries, 500NX-BSS01",
    "value": 148
  },
  {
    "name": "Advanced Energy Industries, 500NX-HE-BSS01",
    "value": 108
  },
  {
    "name": "Advanced Energy Industries, AE 3TL-16KW",
    "value": 869
  },
  {
    "name": "Advanced Energy Industries, PVP100KW-208V-BSS01",
    "value": 160
  },
  {
    "name": "Advanced Energy Industries, PVP100KW-480V-BSS01",
    "value": 161
  },
  {
    "name": "Advanced Energy Industries, PVP250KW-BSS01",
    "value": 159
  },
  {
    "name": "Advanced Energy Industries, PVP260KW-BSS01",
    "value": 158
  },
  {
    "name": "Advanced Energy Industries, PVP35KW-208V-BSS01",
    "value": 166
  },
  {
    "name": "Advanced Energy Industries, PVP35KW-480V-BSS01",
    "value": 200
  },
  {
    "name": "Advanced Energy Industries, PVP50KW-208V-BSS01",
    "value": 164
  },
  {
    "name": "Advanced Energy Industries, PVP50KW-480V-BSS01",
    "value": 165
  },
  {
    "name": "Advanced Energy Industries, PVP75KW-208V-BSS01",
    "value": 163
  },
  {
    "name": "Advanced Energy Industries, PVP75KW-480V-BSS01",
    "value": 162
  },
  {
    "name": "Advanced Energy, AE 250TX-480",
    "value": 606
  },
  {
    "name": "Advanced Energy, AE 75TX-480",
    "value": 607
  },
  {
    "name": "Advanced Energy, Solaron 333kW",
    "value": 90
  },
  {
    "name": "CANADIAN SOLAR, CSI-100K-T480GL03-U ",
    "value": 895
  },
  {
    "name": "Chint Power System, SCA14KTL-DO/US-208",
    "value": 303
  },
  {
    "name": "Chint Power System, SCA28KTL-DO/US",
    "value": 302
  },
  {
    "name": "Chint Power System, SCA36KTL-DO/US 10input ",
    "value": 296
  },
  {
    "name": "Chint Power System, SCA36KTL-DO/US 8input",
    "value": 299
  },
  {
    "name": "Chint Power System, SCA50KTL-DO/US-480",
    "value": 294
  },
  {
    "name": "Chint Power System, SCA60KTL-DO/US-480",
    "value": 297
  },
  {
    "name": "Chint Power System, TestMarianne",
    "value": 475
  },
  {
    "name": "Chint Power Systems, CPS 125KW",
    "value": 565
  },
  {
    "name": "Chint Power Systems, CPS SCA100KTL-DO/US-600BSS01",
    "value": 838
  },
  {
    "name": "Chint Power systems, SCA 36KTL-DO/US 8input ver1.2b",
    "value": 256
  },
  {
    "name": "Chint Power Systems, SCA125KTL-DO/US-600",
    "value": 768
  },
  {
    "name": "Chint, SCH125KTL-DO/US-60",
    "value": 425
  },
  {
    "name": "Cold River Test, Cold River Test 1",
    "value": 333
  },
  {
    "name": "CSI, KTL",
    "value": 592
  },
  {
    "name": "Delta Power Electronics, M80U-xxx",
    "value": 344
  },
  {
    "name": "Delta, M125HV",
    "value": 554
  },
  {
    "name": "Eaton, Xpert1670",
    "value": 208
  },
  {
    "name": "Enphase, M215-60-208",
    "value": 49
  },
  {
    "name": "FreeSun Cold, FS1150CU Cold",
    "value": 332
  },
  {
    "name": "Freesun, test2preview",
    "value": 340
  },
  {
    "name": "freesuntestt, preview1",
    "value": 339
  },
  {
    "name": "Fronius, IG Plus 11.4-1-208",
    "value": 414
  },
  {
    "name": "GE Power Conversion, Brilliance 1275kW CEC",
    "value": 823
  },
  {
    "name": "Generic, NoLoss",
    "value": 745
  },
  {
    "name": "Huawei Technologies, SUN2000-45KTL-US-HV-D0",
    "value": 430
  },
  {
    "name": "Ingeteam, INGECON SUN 1000TL U B360",
    "value": 786
  },
  {
    "name": "Ingeteam, INGECON SUN 1170TLUB450 OUTDOOR",
    "value": 784
  },
  {
    "name": "Ingeteam, INGECON SUN 830TL U B300 Outdoor",
    "value": 863
  },
  {
    "name": "Power Electronics, FS1050CU15_565V",
    "value": 854
  },
  {
    "name": "Power Electronics, FS1201CU",
    "value": 320
  },
  {
    "name": "Power Electronics, FS2000KU_HEMK_BSS01",
    "value": 856
  },
  {
    "name": "Power Electronics, FS2125 (600V)",
    "value": 506
  },
  {
    "name": "Power Electronics, FS2125KU_600V",
    "value": 776
  },
  {
    "name": "Power Electronics, FS2125KU_HEMK_BSS01",
    "value": 787
  },
  {
    "name": "Power Electronics, FS3000KU_HEMK_BSS01",
    "value": 855
  },
  {
    "name": "Power Electronics, FS3190KU_600V",
    "value": 775
  },
  {
    "name": "Power Electronics, FS3270KU_615V",
    "value": 849
  },
  {
    "name": "Power One, TRIO-20.0-TL-OUTD-US",
    "value": 589
  },
  {
    "name": "Power One, TRIO-20.0-TL-OUTD-US (KIPP)",
    "value": 591
  },
  {
    "name": "Power one, TRIO-27_6-TL-OUTD-480",
    "value": 220
  },
  {
    "name": "Power one, TRIO-27_6-TL-OUTD-4801",
    "value": 221
  },
  {
    "name": "Power One, TRIO-27.6-TL-OUTD-US",
    "value": 588
  },
  {
    "name": "Power One, TRIO-27.6-TL-OUTD-US (KIPP)",
    "value": 590
  },
  {
    "name": "Power-One, TRIO-20_0-TL-OUTD-S1-480-US",
    "value": 804
  },
  {
    "name": "Power-One, TRIO-27_6-TL-OUTD-S1-480-US",
    "value": 803
  },
  {
    "name": "Power-One, ULTRA 1100-TL-OUTD-4-US-690-M/S -DNVKEMA",
    "value": 801
  },
  {
    "name": "Power-One, ULTRA 750-TL-OUTD-4-US-690-M/S-DNVKEMA",
    "value": 802
  },
  {
    "name": "PV Powered, 260KW-480",
    "value": 27
  },
  {
    "name": "PV Powered, PVP100kW",
    "value": 577
  },
  {
    "name": "PV Powered, PVP50kW-480",
    "value": 571
  },
  {
    "name": "PV Powered, PVP75kW - 208",
    "value": 601
  },
  {
    "name": "QA, Test",
    "value": 513
  },
  {
    "name": "QA, Test (Template-2)",
    "value": 516
  },
  {
    "name": "QA, Test (Template)",
    "value": 515
  },
  {
    "name": "QA, Test-2",
    "value": 514
  },
  {
    "name": "QA, User Test",
    "value": 517
  },
  {
    "name": "REFUsol, 016K-UL",
    "value": 88
  },
  {
    "name": "Satcon, EQX-500",
    "value": 33
  },
  {
    "name": "Satcon, EQX-500-US-200-XN-BSS01",
    "value": 175
  },
  {
    "name": "Satcon, EQX-500-US-480-XN-BSS01",
    "value": 199
  },
  {
    "name": "Satcon, PGP 100",
    "value": 11
  },
  {
    "name": "Satcon, PGP 75",
    "value": 47
  },
  {
    "name": "Satcon, PVS-100-208-BSS01",
    "value": 187
  },
  {
    "name": "Satcon, PVS-100-240-BSS01",
    "value": 188
  },
  {
    "name": "Satcon, PVS-100-480-BSS01",
    "value": 186
  },
  {
    "name": "Satcon, PVS-135-208-BSS01",
    "value": 184
  },
  {
    "name": "Satcon, PVS-135-240-BSS01",
    "value": 183
  },
  {
    "name": "Satcon, PVS-135-480-BSS01",
    "value": 185
  },
  {
    "name": "Satcon, PVS-250-208-BSS01",
    "value": 180
  },
  {
    "name": "Satcon, PVS-250-240-BSS01",
    "value": 182
  },
  {
    "name": "Satcon, PVS-250-480-BSS01",
    "value": 181
  },
  {
    "name": "Satcon, PVS-30-208-BSS01",
    "value": 197
  },
  {
    "name": "Satcon, PVS-30-240-BSS01",
    "value": 196
  },
  {
    "name": "Satcon, PVS-30-480-BSS01",
    "value": 195
  },
  {
    "name": "Satcon, PVS-375-480-BSS01",
    "value": 179
  },
  {
    "name": "Satcon, PVS-50-208-BSS01",
    "value": 194
  },
  {
    "name": "Satcon, PVS-50-240-BSS01",
    "value": 193
  },
  {
    "name": "Satcon, PVS-50-480-BSS01",
    "value": 192
  },
  {
    "name": "Satcon, PVS-500-200-BSS01",
    "value": 177
  },
  {
    "name": "Satcon, PVS-500-208-BSS01",
    "value": 178
  },
  {
    "name": "Satcon, PVS-500-480-BSS01",
    "value": 176
  },
  {
    "name": "Satcon, PVS-75-208-BSS01",
    "value": 190
  },
  {
    "name": "Satcon, PVS-75-240-BSS01",
    "value": 189
  },
  {
    "name": "Satcon, PVS-75-480-BSS01",
    "value": 191
  },
  {
    "name": "Schneider Electric, Conext CL125A",
    "value": 811
  },
  {
    "name": "Schneider Electric, Conext Core XC-733-NA",
    "value": 810
  },
  {
    "name": "Schneider Electric, Context CL 25000NA",
    "value": 805
  },
  {
    "name": "Schneider Electric, Context Core XC-630-NA",
    "value": 795
  },
  {
    "name": "Schneider Electric, XC500-NA",
    "value": 819
  },
  {
    "name": "Schneider Electric, XC540-NA",
    "value": 809
  },
  {
    "name": "Schneider Electrics, XC680 50Hz",
    "value": 737
  },
  {
    "name": "SMA, Peak 3 SHP-125-20",
    "value": 696
  },
  {
    "name": "SMA, SB5000-U208",
    "value": 202
  },
  {
    "name": "SMA, SB6000-U277",
    "value": 204
  },
  {
    "name": "SMA, SC 2000-EV-US",
    "value": 837
  },
  {
    "name": "SMA, SC 2500-EV-US",
    "value": 826
  },
  {
    "name": "SMA, SC 4000 UP-US",
    "value": 701
  },
  {
    "name": "SMA, SC 4200-UP-US",
    "value": 877
  },
  {
    "name": "SMA, SC1850-US Electric Coop",
    "value": 311
  },
  {
    "name": "SMA, SC250U-BSS01",
    "value": 153
  },
  {
    "name": "SMA, SC2660-UP-US",
    "value": 773
  },
  {
    "name": "SMA, SC4000-UP-US",
    "value": 762
  },
  {
    "name": "SMA, SC500CP-US-600V-BSS03",
    "value": 118
  },
  {
    "name": "SMA, SC500CP-US-BSS03",
    "value": 117
  },
  {
    "name": "SMA, SC500HE-US",
    "value": 16
  },
  {
    "name": "SMA, SC500HE-US",
    "value": 102
  },
  {
    "name": "SMA, SC500HE-US-BSS01",
    "value": 151
  },
  {
    "name": "SMA, SC500U-BSS01",
    "value": 152
  },
  {
    "name": "SMA, SC630CP-US-BSS02",
    "value": 116
  },
  {
    "name": "SMA, SC720CP-US-BSS02",
    "value": 115
  },
  {
    "name": "SMA, SC750CP-US-BSS02",
    "value": 114
  },
  {
    "name": "SMA, SC800CP-US-BSS02",
    "value": 113
  },
  {
    "name": "SMA, SC850CP-US-BSS03",
    "value": 111
  },
  {
    "name": "SMA, SC900CP-US-BSS03",
    "value": 112
  },
  {
    "name": "SMA, SHP 100-21",
    "value": 930
  },
  {
    "name": "SMA, SHP 125-US-20",
    "value": 672
  },
  {
    "name": "SMA, SHP125-US",
    "value": 764
  },
  {
    "name": "SMA, SHP150-US",
    "value": 767
  },
  {
    "name": "SMA, SMA 4200",
    "value": 669
  },
  {
    "name": "SMA, SMA SC2200-UP-US",
    "value": 817
  },
  {
    "name": "SMA, STP 50-US-40",
    "value": 860
  },
  {
    "name": "SMA, STP 50-US-41",
    "value": 679
  },
  {
    "name": "SMA, STP 62-US-41",
    "value": 678
  },
  {
    "name": "SMA, STP12000TL-US-10-BSS02",
    "value": 157
  },
  {
    "name": "SMA, STP15000TL-US-10-BSS02",
    "value": 156
  },
  {
    "name": "SMA, STP20000TL-US-10-BSS02",
    "value": 155
  },
  {
    "name": "SMA, STP24000TL-US-10-BSS02",
    "value": 154
  },
  {
    "name": "SMA, STP30000TL-US-10-BSS02",
    "value": 242
  },
  {
    "name": "SMA, Sunny Central 2800 UP-US",
    "value": 852
  },
  {
    "name": "SMA, Sunny Central 2800-UP-US",
    "value": 874
  },
  {
    "name": "SMA, Sunny Central 500-HE-US",
    "value": 858
  },
  {
    "name": "SMA, Sunny Highpower PEAK3 SHP150-US (Derated to 134kW)",
    "value": 757
  },
  {
    "name": "SMA, Sunny Highpower PEAK3 SHP150-US (Updated)",
    "value": 759
  },
  {
    "name": "SMA, Sunny Tripower 24000TL-US-10",
    "value": 825
  },
  {
    "name": "SMA, Sunny Tripower Core1 STP 50",
    "value": 828
  },
  {
    "name": "SMA, TriPower Core-1 50-US",
    "value": 615
  },
  {
    "name": "Solar Edge, SE100K-US",
    "value": 781
  },
  {
    "name": "Solar Edge, SE100KUS",
    "value": 492
  },
  {
    "name": "Solar Edge, SE20KUS",
    "value": 834
  },
  {
    "name": "Solar Edge, SE33.3kUS",
    "value": 865
  },
  {
    "name": "Solar Edge, SE43.2KUS",
    "value": 831
  },
  {
    "name": "Solar Edge, SE66.6K-US",
    "value": 782
  },
  {
    "name": "Solar Edge, SE9KUS",
    "value": 830
  },
  {
    "name": "SolarEdge 43.2 Corrected, 43.2 Corrected",
    "value": 674
  },
  {
    "name": "SolarEdge 43.2 kW, SolarEdge 43.2 kW",
    "value": 673
  },
  {
    "name": "SolarEdge, SE33.3KUS",
    "value": 290
  },
  {
    "name": "Solectria PVI 50TL, Solectria PVI 50TL",
    "value": 676
  },
  {
    "name": "Solectria Renewables, SGI 500PE 480V",
    "value": 820
  },
  {
    "name": "Solectria Renewables, SGI250-480VAC",
    "value": 821
  },
  {
    "name": "Solectria, 28TL 480",
    "value": 677
  },
  {
    "name": "Solectria, PVI 14TL",
    "value": 225
  },
  {
    "name": "Solectria, PVI 36TL",
    "value": 305
  },
  {
    "name": "Solectria, PVI 85kW 480V",
    "value": 793
  },
  {
    "name": "Solectria, SGI 300 480V",
    "value": 792
  },
  {
    "name": "Solectria, SGI 500-480",
    "value": 790
  },
  {
    "name": "Solectria, SGI-500XTM",
    "value": 224
  },
  {
    "name": "Solectria, SGI499-480VAC",
    "value": 867
  },
  {
    "name": "Solectrica Renewables, PVI90-480 BSS01",
    "value": 236
  },
  {
    "name": "Solis, 100K-5G",
    "value": 668
  },
  {
    "name": "Sungrow Power Supply, SG3600UD",
    "value": 662
  },
  {
    "name": "Sungrow Power, SG2500U",
    "value": 551
  },
  {
    "name": "Sungrow, SG1000MX",
    "value": 359
  },
  {
    "name": "Sungrow, SG110CX",
    "value": 567
  },
  {
    "name": "Sungrow, SG125HV",
    "value": 334
  },
  {
    "name": "Sungrow, SG30KU-V11",
    "value": 235
  },
  {
    "name": "Sungrow, SG60KU-M",
    "value": 370
  },
  {
    "name": "Sungrow, SG66KU-M BSS06",
    "value": 815
  },
  {
    "name": "Yaskawa Solectria, XGI 1500-150/166",
    "value": 599
  },
  {
    "name": "Yaskawa Solectria, XGI 1500-250",
    "value": 915
  }
]
```

