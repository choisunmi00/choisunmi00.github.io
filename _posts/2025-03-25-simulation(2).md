---
title: >-
    [연구] Simulation 제작(2)
author: csm
date: 2025-03-25 14:10:00 +0900
categories: [Research, Simulation]
tags: [project]
description: 단일세포 및 공간전사체에 합성데이터셋을 생성하기 위한 동역학 모델 프레임워크
---

## 네트워크를 통한 구조 결정
---
- 노드와 피드백의 갯수가 네트워크를 따름
- NetworkX 패키지의 graph generators 사용
    - `barabasi_albert_graph`
        - 스케일-프리 네트워크 생성
        - 기존 노드들의 차수에 비례하여 새로운 노드가 연결될 확률 증가 ⟶ '허브' 노드 형성
    - `powerlaw_cluster_graph` 
        - Power-law 분포를 따르는 노드들이 클러스터링 된 구조를 갖는 네트워크를 형성
        - `p`: 클러스터링 확률

## sketch
---
1. 네트워크 생성
2. 유전자 발현 시뮬레이션
3. 저장

- Graph generator로는 가장 강한 확산을 보이는 `powerlaw_cluster_graph`나, 허브 중심의 확산이 일어나는 `extended_barabasi_albert_graph`가 적합해 보인다
- `sketch.ipynb`

    <script src="https://gist.github.com/choisunmi00/cfbc5177fec7c2c5e918425b16b2fc40.js"></script>