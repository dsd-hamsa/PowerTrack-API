<a id="top"></a>
# /api/view/pvcurvemodels/incidenceanglemodels

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
GET /api/view/pvcurvemodels/incidenceanglemodels?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 442641
referer: https://apps.alsoenergy.com/powertrack/S69211/administration/modeling
```

**Response:**

```json
[
  {
    "name": "Select Incidence Angle Curve",
    "value": 0
  },
  {
    "name": "ASHRAE, bo=0.1",
    "value": 424
  },
  {
    "name": "ASHRAE, IAM MODEL bo 0.050",
    "value": 89
  },
  {
    "name": "ASHRAE, IAM MODEL bo 0.080",
    "value": 420
  },
  {
    "name": "Astroenergy, CHSM72M_DG-F-BH-410 BSS01",
    "value": 774
  },
  {
    "name": "Astroenergy, CHSM72M-DGT-F-BH-405-BIFACIAL",
    "value": 777
  },
  {
    "name": "Astronenergy, CHSM72M-DG-F-BH-410-BIFACIAL",
    "value": 779
  },
  {
    "name": "Astronergy, CHSM6612P-325W",
    "value": 845
  },
  {
    "name": "Astronergy, CHSM72M_DG-F-BH-405 BSS01",
    "value": 814
  },
  {
    "name": "BSS ASHRAE Model, ARC (bo 0.04)",
    "value": 96
  },
  {
    "name": "BSS ASHRAE Model, Non ARC (bo 0.05)",
    "value": 101
  },
  {
    "name": "Canadian Solar, CS3U-375MB-AG 1500V",
    "value": 850
  },
  {
    "name": "Canadian Solar, CS6X - 315P",
    "value": 812
  },
  {
    "name": "Canadian Solar, CS6X-280P",
    "value": 822
  },
  {
    "name": "Canadian Solar, CS6X-320P",
    "value": 794
  },
  {
    "name": "ET Solar, ET-M672BH410GL",
    "value": 754
  },
  {
    "name": "Evergreen, 205",
    "value": 28
  },
  {
    "name": "Fresnel smooth glass, n=1.526",
    "value": 695
  },
  {
    "name": "Generic, NoLoss",
    "value": 746
  },
  {
    "name": "Hanwha Q Cells, Q PEAK BLK-G4.1 295",
    "value": 835
  },
  {
    "name": "Hanwha Q Cells, Q.PEAK DUO L-G5.2 385 BSS01",
    "value": 840
  },
  {
    "name": "Hanwha Q Cells, Q.PEAK DUO L-G5.2 390 BSS01",
    "value": 839
  },
  {
    "name": "Hanwha Q Cells, Q.PEAK DUO L-G5.2 395 BSS03",
    "value": 853
  },
  {
    "name": "Hanwha Q Cells, Q.PEAK DUO XL-G10.3 480/BFG",
    "value": 765
  },
  {
    "name": "Hanwha Q Cells, Q.PEAK DUO XL-G11.3 580/BFG",
    "value": 770
  },
  {
    "name": "Hanwha Q Cells, Q.PEAK DUO XL-G11S.3/BFG 585",
    "value": 843
  },
  {
    "name": "Hanwha Q Cells, Q.PLUS L-G4.1 340",
    "value": 859
  },
  {
    "name": "Heliene Inc, 144HC-530 M10 Bifacial",
    "value": 870
  },
  {
    "name": "Heliene Inc, 144HC-535 M10 Bifacial",
    "value": 871
  },
  {
    "name": "Heliene Inc, 156HC-580 M10 Bifacial",
    "value": 872
  },
  {
    "name": "Heliene Inc, 156HC-585 M10 Bifacial",
    "value": 894
  },
  {
    "name": "Heliene Inc, 72M-360",
    "value": 862
  },
  {
    "name": "Heliene Inc, Heliene-96M-480",
    "value": 813
  },
  {
    "name": "Hyundai, HiS-M310TI",
    "value": 800
  },
  {
    "name": "Hyundai, HiS-S335TI",
    "value": 824
  },
  {
    "name": "Hyundai, HiS-S345TI",
    "value": 806
  },
  {
    "name": "Hyundai, HiS-S350RI",
    "value": 783
  },
  {
    "name": "Hyundai, HiS-S355KI",
    "value": 808
  },
  {
    "name": "Hyundai, HiS-S355RI",
    "value": 797
  },
  {
    "name": "Hyundai, HiS-S360KI",
    "value": 799
  },
  {
    "name": "Hyundai, HiS-S360RI",
    "value": 832
  },
  {
    "name": "Hyundai, HiS-S370HI",
    "value": 755
  },
  {
    "name": "Hyundai, HiS-S370HI (Updated)",
    "value": 758
  },
  {
    "name": "IMT, Reference Cell",
    "value": 25
  },
  {
    "name": "JA Solar, JAM72-S09-385-PR",
    "value": 816
  },
  {
    "name": "JA Solar, JAM72D09-380/BP",
    "value": 778
  },
  {
    "name": "JA Solar, JAM72D09-385/BP",
    "value": 766
  },
  {
    "name": "JA Solar, JAM72D09-390/BP",
    "value": 851
  },
  {
    "name": "JA Solar, JAM72D10-400/MB",
    "value": 844
  },
  {
    "name": "JA Solar, JAM72D10-405/MB",
    "value": 761
  },
  {
    "name": "JA Solar, JAM72D30-530/MB",
    "value": 769
  },
  {
    "name": "JA Solar, JAM72D30-535/MB",
    "value": 763
  },
  {
    "name": "JA Solar, JAM72D30-540/MB",
    "value": 875
  },
  {
    "name": "JA Solar, JAM72D30-545/MB",
    "value": 876
  },
  {
    "name": "JA SOLAR, JAM72D30-545/MB-PVSYST",
    "value": 927
  },
  {
    "name": "JA Solar, JAM72S01-375/PR BSS02",
    "value": 780
  },
  {
    "name": "JA Solar, JAM78D30-585/MB",
    "value": 873
  },
  {
    "name": "JA Solar, JAM78D30-590/MB",
    "value": 842
  },
  {
    "name": "JA Solar, JAP6-72-305/3BB",
    "value": 866
  },
  {
    "name": "Jinkosolar, JKM400M-72HL-V",
    "value": 841
  },
  {
    "name": "LG Electronics, LG 305 N1C-G4",
    "value": 861
  },
  {
    "name": "LG Electronics, LG 335 S2W-G4",
    "value": 864
  },
  {
    "name": "LG Electronics, LG365N2W-G4",
    "value": 785
  },
  {
    "name": "LG Electronics, LG375N2W-G4",
    "value": 829
  },
  {
    "name": "LG Electronics, LG400N2W-A5 BSS01",
    "value": 827
  },
  {
    "name": "LG Electronics, LG405N2T-J5_R20 BSS02",
    "value": 788
  },
  {
    "name": "PVsyst, Fresnel AR Coated Glass",
    "value": 697
  },
  {
    "name": "QA, Test",
    "value": 569
  },
  {
    "name": "REC, 345",
    "value": 307
  },
  {
    "name": "RP IE MODEL 4.8.24 PVsyst SlaytonAB, RP IE MODEL 4.8.24 PVsyst SlaytonAB",
    "value": 741
  },
  {
    "name": "RP IE MODEL PVSYST , ARTHUR II",
    "value": 707
  },
  {
    "name": "RP IE MODEL PVSYST , BROADWAY",
    "value": 715
  },
  {
    "name": "RP IE MODEL PVSYST , BULLIS 405",
    "value": 711
  },
  {
    "name": "RP IE MODEL PVSYST , LEWISTON",
    "value": 708
  },
  {
    "name": "RP IE MODEL PVSYST , WEBB",
    "value": 706
  },
  {
    "name": "RP IE MODEL PVSYST, BECKWITH",
    "value": 702
  },
  {
    "name": "RP IE MODEL PVSYST, BULLIS 545_540",
    "value": 710
  },
  {
    "name": "RP IE MODEL PVSYST, MERRILL",
    "value": 714
  },
  {
    "name": "RP IE MODEL, WATER",
    "value": 722
  },
  {
    "name": "RP IE REPORT PVSYST , CEDAR SWAMP",
    "value": 698
  },
  {
    "name": "RP IE REPORT PVSYST , MOYER",
    "value": 700
  },
  {
    "name": "SETLC - User Defined, SETLC - User Defined",
    "value": 594
  },
  {
    "name": "SMA AMERICA, SUNNY TRIPOWER CORE1 62-US-41",
    "value": 926
  },
  {
    "name": "SolarWorld, SW 235 poly",
    "value": 32
  },
  {
    "name": "Sun Power, SPR-MAX3-370",
    "value": 836
  },
  {
    "name": "SunEdison, SE-F335EMD-39",
    "value": 241
  },
  {
    "name": "Suniva, OTP335-72-4-100",
    "value": 581
  },
  {
    "name": "Suntech, STP 275-24/Ve",
    "value": 30
  },
  {
    "name": "Suntech, STP 280-24/Vd-Poly",
    "value": 833
  },
  {
    "name": "Talesun, TD7G72M-545",
    "value": 925
  },
  {
    "name": "Trina Solar, TSM-315PD14",
    "value": 791
  },
  {
    "name": "Trina Solar, TSM-320PD14",
    "value": 789
  },
  {
    "name": "Trina Solar, TSM-335DD14A",
    "value": 857
  },
  {
    "name": "Trina Solar, TSM-545DEG19C.20",
    "value": 771
  },
  {
    "name": "Trina Solar, TSM-550DEG19C.20",
    "value": 772
  },
  {
    "name": "Yingli Solar, YGE240-29b",
    "value": 15
  },
  {
    "name": "Yingli Solar, YL305P-35b",
    "value": 796
  }
]
```

[Return to top](#top)

