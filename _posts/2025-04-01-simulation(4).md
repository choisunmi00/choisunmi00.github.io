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

- img
      ![Figure 1](assets/img/post/Gene_Boolean_Regulatory_Network.webp){: w="70%" h="70%" }

<script src="https://gist.github.com/choisunmi00/9c05013e646e9459688bc97a6a979e27.js"></script>

- 다음 연구
    1. 자극과 억제 선택 
    2. 발현 데이터값의 범위를 따르는 output
    3. scale_free_graph 특징을 반영한 네트워크
        - preferential attachment
        - alpha, beta, gamma 값으로 연결 확률 조정 가능
    4. omnipath 및 kegg 데이터와 연결
    5. network motif 참고