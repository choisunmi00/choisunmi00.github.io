---
title: >-
  [논문] Quantitative characterization of cell niches in spatially resolved omics data
author: csm
date: 2025-04-22 14:10:00 +0900
categories: [Biology, Genome Biology]
tags: [paper]
description: >-
    Quantitative characterization of cell niches in spatially resolved omics data 논문 발표를 듣고
math: true
---

[Quantitative characterization of cell niches in spatially resolved omics data](https://doi.org/10.1038/s41588-025-02120-6)


## Nichecompass
---
- Niche: 나의 스팟을 기준으로 주위 어떤 스팟이 있느냐 + GP
    - 노드(spot/cell) 간 신호경로를 그래프 형태로 학습한 것
    - 기능적으로 다른 클러스터
    - 유전자 발현 + 공간 좌표 + 샘플별 covatiates
- slef: receiver, receptor의 역할
- neighbor: sender, ligand의 역할
- gene programing, gp: 서로 기능적으로 연관된 유전자들의 집합. 활성화되는 유전자 세트
    - gp 구성: prior gp / de novo gp
    - gp 간의 cosin simularity를 구한 후 판단
    - expression 값으로 결정되는 정보가 벡터로 들어감
- graph decoder: cosine similarity / reconstructed adjacency
- omics decoers: z vector(gp 활동도)로부터 복원.
- prior knowledge 어떻게 정의할 것인지. 다 가지고 와서 embedding vecor로. multimodal 확보, embedding vector 설계가 중요한 부분일 것
- VAE로 latent vector 생성. (손실함수 정의 중요. 연구에서는 cosin simularity)이 vector로 클러스터링해 Niche 찾기
- gene set 정의하는 방식.
- gp activity map과 marker gene 발현이 spatial하게 일치
