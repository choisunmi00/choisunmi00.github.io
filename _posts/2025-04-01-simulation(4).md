---
title: >-
    [연구] Simulation 제작(4)
author: csm
date: 2025-04-01 14:10:00 +0900
categories: [Research, Simulation]
tags: [project]
description: 단일세포 및 공간전사체에 합성데이터셋을 생성하기 위한 동역학 모델 프레임워크
image:
  path: assets/img/post/Gene_Boolean_Regulatory_Network.webp
---

## sketch2
---
- `powerlaw_cluster_graph`: scale-free + clustering 네트워크
- `sclae_free_graph()`: scale-free + 방향성 네트워크
- boolean expression

<script src="https://gist.github.com/choisunmi00/5a0c8b1665508992d0c8cf483170ae03.js"></script>

- 다음 단계
    -  자극과 억제 선택 
    - 발현 데이터값의 범위를 따르는 output
    - scale_free_graph 특징을 반영한 네트워크
        - preferential attachment
        - alpha, beta, gamma 값으로 연결 확률 조정 가능
    - omnipath 및 kegg 데이터와 연결
    - network motif 참고
