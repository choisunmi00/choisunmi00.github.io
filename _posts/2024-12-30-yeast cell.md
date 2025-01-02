---
title: >-
    [논문 요약] The Yeast Cell-Cycle Network is robustly designed
author: csm
date: 2024-12-30 14:10:00 +0900
categories: [Biology, System dynamics]
tags: [paper]
description: The yeast cell-cycle network is robustly designed
---

<a href="https://doi.org/10.1073/pnas.0305937101">The yeast cell-cycle network is robustly designed</a>

## (Background)
---
- 역학계의 상태변화는 상태공간(state space)에서 시간에 따라 변하는 하나의 궤도(trajectory)로 나타낼 수 있다. 궤도는 초기 상태에 따라 달라진다.
- 섭동, 요동(perturbation): 외부 에너지에 의해 궤도가 미세하게 변한 상태
- 끌개(attractor): 역학계가 가장 안정된 상태에 있는 점. 점들을 안정된 궤도로 끌어당긴다(점근안정성).

## Abstract
---
- 효모의 세포주기 조절 네트워크 연구
- 동적 모델 사용, 세포주기 네트워크는 기능에 대해 안정적이고 견고하다는 것을 입증
- 세포 상태의 안정성 ⟶ 대규모 네트워크의 위상적 특성, 생명 네트워크 연결성의 거듭제곱 법칙
- 정지, 혹은 특정 지점에서의 세포 상태는 역학의 전역적인 끌개와 일치
- 상태공간의 개별 궤도, 즉 세포주기 배열의 생물학적 경로는 역학에서 안정적이며 끌개의 역할을 수행한다. 이러한 동적 특성은 네트워크 연결성에서 나오며 섭동에도 강하다.

## The Yeast Cell-Cycle Network  
---
- 세포주기 과정: G1 ⟶ S ⟶ G2 ⟶ M ⟶ G1
- 효모의 세포주기 과정에 관여하는 주요 조절 기관의 네트워크 구축

<img src="https://www.pnas.org/cms/10.1073/pnas.0305937101/asset/de539b0e-5b37-4872-9536-5b51c9c543ea/assets/graphic/zpq0140443910001.jpeg" alt="1" width="50%" height="50%"/>   

- 조절 네트워크 인자의 4가지 종류: cyclin, cyclin/Cdc28 복합체의 억제제와 분해자 및 경쟁자, 전사 인자, 체크포인트트

## The Model and Dynamic Properties
---

- 모델에서 각 노드 $$i$$는 단백질의 활성 및 비활성 상태를 나타내는 $$S_{i}$$*$$ = 1$$ 및 $$S_{i} = 0$$두 가지 상태만을 갖는다.
- 다음 규칙에 의해 현재 단백질 상태에 따라 다음 단백질의 상태가 결정된다.
$$
\( S_i(t+1) = 
\begin{cases} 
1, & \sum_j a_{ij} S_j(t) > 0 \\
0, & \sum_j a_{ij} S_j(t) < 0 \\
S_i(t), & \sum_j a_{ij} S_j(t) = 0 
\end{cases}
\)
$$
- 단백질 $$j$$에서 단백질 $$i$$로 가는 녹색 화살표의 경우 $$a_{ij} = a_{g}$$  
  단백질 $$j$$에서 단백질 $$i$$로 가는 적색 화살표의 경우 $$a_{ij} = a_{r}$$
- 황색 화살표: 자체 분해. $$S_{i}(t + t_{d}) = 0$$. $$t = t + t_{d}$$에서 분해된다.

### Fixed Points
- 11개 노드 네트워크에서 $$2^{11} = 2048$$개의 초기 상태에서 시작해, 네트워크의 끌개를 연구
- 모든 초기 상태는 7개의 고정점(Fixed points)으로 흘러가는데, 가장 큰 고정점은 생물학적 $$G_{1}$$ 고정 상태 ⟶ 세포 상태의 안정성 보장

### Biological Pathway
- 단백질 상태의 동적 궤도: 단백질 상태는 점, 동적 흐름은 그 사이의 화살표로 표시.
- 세포주기 순서(생물학적 경로)와 G1 상태(고정점)는 청색  
  단백질 상태는 녹색
- 단백질 상태의 동적 궤도가 생물학적 경로로 수렴 ⟶ 경로는 안정적인 궤도

<img src="https://www.pnas.org/cms/10.1073/pnas.0305937101/asset/c951cfde-2180-486f-8a2e-68051c35e70b/assets/graphic/zpq0140443910002.jpeg" alt="2" width="50%" height="50%"/>   

### Comparison with Random Networks
- 무작위 네트워크는 일반적으로 더 많은 고정점과 한계 주기를 갖는다.
- 무작위 네트워크의 끌개 분지 크기는 거듭제곱 법칙 분포를 따른다.

<img src="https://www.pnas.org/cms/10.1073/pnas.0305937101/asset/7e7c75dc-1c52-4655-97d0-eaca14a5141f/assets/graphic/zpq0140443910003.jpeg" alt="3" width="50%" height="50%"/>   

- 상태 $$j$$에서 $$k$$로 이동하는 화살표 $$A_{j, k}$$, 총 트래픽 흐름 $$T_{j, k}$$
- 끌개로 가는 궤적까지 단계가 $$n$$개로 상태 $$L$$에서 상태 $$L_{n}$$까지 화살표 $$A_{k-1, k}$$, $$k = 1, 2, \cdot, L_{n}$$으로 구성되는 경우 $$\( w_n = \frac{\sum_{k=1}^{L_n} T_{k-1,k}}{L_n} \)$$

### Network Perturbations

- 세포주기 네트워크의 경우 무작위 네트워크와 비교하여, 큰 고정점과 수렴 경로가 있다.
- $$\deltaB // B$$: 가장 큰 끌개에 대한 인력 분지 크기 B의 상대적 변화. 교란의 결과로서 측정. $$\deltaB // B = 1$$에서 고정점은 제거된다.
- "homeostatic stability" 관찰

<img src="https://www.pnas.org/cms/10.1073/pnas.0305937101/asset/d15a2e01-75b3-4c41-a5f5-c0a6ede68290/assets/graphic/zpq0140443910004.jpeg" alt="4" width="50%" height="50%"/>   

- A: 라인 삭제 교란, B: 라인 추가 교란, C: 적색-녹색 전환 교란, D: A - C의 평균
- 교란된 세포 주기 네트워크의 궤적에서 상당 부분이 G1 정상 상태에 도달하고 세포주기 순서가 가장 가능성 있는 궤적임을 확인

<img src="https://www.pnas.org/cms/10.1073/pnas.0305937101/asset/d15a2e01-75b3-4c41-a5f5-c0a6ede68290/assets/graphic/zpq0140443910004.jpeg" alt="5" width="50%" height="50%"/>   

### Other Dynamical Rules

- 동적 속성은 매개변수(방정식의 가중치 &&a_{g}&& 및 &&a_{r}&&과 단백질의 수명 &&t_{d}&&)에 크게 민감하지 않다

### Other Checkpoints

- 체크포인트트 중 하나가 세포크기가 아닌 정지-진행 신호로 작용하는 경우 큰 고정점 존재, 생물학적 경로는 수렴

## Discussion
---
- 효모 세포주기 네트워크의 견고한 동적 특성: 체크포인트의 생물학적 상태는 큰 고정점이고, 생물학적 경로는 끌개의 역할을 하는 궤적 ⟶ 조절 네트워크의 공통적인 특징
- 세포주기 네트워크는 섭동에 안정적
- 생물학적 시스템을 동적 시스템으로 모델링, 생물학적 상태를 끌개로 해석. 견고성은 생존 가능성이 더 높다는 것을 의미.