---
title: >-
    [연구] Simulation 제작(7)
author: csm
date: 2025-04-07 14:10:00 +0900
categories: [Research, Simulation]
tags: [project]
description: 단일세포 및 공간전사체에 합성데이터셋을 생성하기 위한 동역학 모델 프레임워크
---

## zero-inflated negative model
---
- 앞선 논문에서 가장 성과가 좋았던 시뮬레이터 ZINB-WaVE의 모델
- zero-inflated NB, ZINB: 과도하게 0이 많은 데이터를 처리할 때 사용.
- ZINB의 구성
    1. Zero-inflation part: 값이 0인지, 측정되지 않은 값인지 판단하는 확률모델
    2. Negative Bionomial part: 0이 아닌 경우는 실제 발현값처럼 overdispersion된 count 데이터 모델링
- scRNA-seq 데이터에서 dropout 현상(유전자가 발현되었지만 0으로 기록되는 경우)을 모델링

