---
title: >-
    [연구] Simulation 제작(2)
author: csm
date: 2025-03-25 14:10:00 +0900
categories: [Research, Simulation]
tags: [project]
description: 단일세포 및 공간전사체에 합성데이터셋을 생성하기 위한 동역학 모델 프레임워크
---

## sketch
---
1. 네트워크 생성
2. 유전자 발현 시뮬레이션
3. 저장
- Graph generator로는 가장 강한 확산을 보이는 `powerlaw_cluster_graph`나, 허브 중심의 확산이 일어나는 `extended_barabasi_albert_graph`가 적합해 보인다
- `sketch.ipynb`

    <script src="https://gist.github.com/choisunmi00/cfbc5177fec7c2c5e918425b16b2fc40.js"></script>