---
title: >-
    [논문] Reconstructing growth and dynamic trajectories from single-cell transcriptomics data
author: csm
date: 2025-04-08 14:10:00 +0900
categories: [Biology, System dynaimcs]
tags: [paper]
description: Reconstructing growth and dynamic trajectories from single-cell transcriptomics data
math: True
---

[Reconstructing growth and dynamic trajectories from single-cell transcriptomics data](https://www.nature.com/articles/s42256-023-00763-w)

## Abstract
---

- TIGON: 동적이고 불균형한 최적 수송(optimal transport) 알고리즘. 시계열 scRNA-seq 데이터를 이용해 세포의 동적 궤적, 세포 집단 성장, GRN을 동시에 재구성하는 알고리즘
    - 서로 다른 시점의 scRNA-seq 데이터(세포를 파괴하는 방식으로 진행되는)를 Optimal Transport 이론으로 연결
        - Optimal Transport(OT): 두 시점의 세포 분포를 보고 세포들이 시간에 따라 어떻게 이동했는지 가장 효율적으로 매칭
- 고차원 최적 수송 문제를 해결하기 위해, Wasserstein-Fisher-Rao(WFR) 거리를 기반으로 한 dimensionless formulation 사용하여 딥러닝 방식 적용
- 시뮬레이션 데이터에서 평가되고, 기존 방법보다 더 정확하고 강건하게 세포 상태 전이 및 성장 예측 가능
- 세 개의 실제 scRNA-seq 데이터셋 활용, 시간 흐름 추론에서의 세포 성장의 중요성, 측정되지 않은 시점의 유전자 발현 재구성 능력, 시간 기반 GRN 및 세포 간 상호작용 추론에 활용 가능

### similar content being viewed by others
- [Temporal modelling using single-cell transcriptomics](https://doi.org/10.1038/s41576-021-00444-7)
- [Unveiling gene regulatory networks during cellular state transitions without linkage across time points](https://doi.org/10.1038/s41598-024-62850-1)
- [CASi: A framework for cross-timepoint analysis of single-cell RNA sequencing data](https://doi.org/10.1038/s41598-024-58566-x)

## MAIN
---
- scRNA-seq 기술은 서로 다른 시점에서 세포를 샘플링하기에 세포의 동적 변화를 관찰할 수 있지만, 시퀀싱 과정에서 세포가 파괴되기 때문에 세포 간의 계통 관계나 세포의 궤적을 파악할 수 없고 개별 세포 수준에서 유전자 발현의 시간적 변화를 추적하는 것도 불가능
    - scRNA-seq와 lineage tracing(계보 추적)의 결합: 클론(유래가 같은 세포들) 간의 관계는 ㅇ라아낼 수 있지만, 정밀도는 부족하고 실험실 조건(in vitro)에만 적용 가능
    - Pseudotime 분석: 발달적으로 유사한 세포들은 유전자 발현 프로파일이 비슷할 것이라는 가정을 바탕으로 세포들을 분화 궤적 상의 순서로 배열
    - RNA-velocity: spliced mRNA(스플라이싱되어 intron이 제거되고 exon만 남은 mRNA)와 unspliced mRNA의 비율을 이용하여 세포가 어떤 방향으로 상태 전이를 하고 있는지 추정
    - Cospar: 추가적인 실험적 클론 정보(시간 정보 포함)를 이용해 세포 전이 맵(transition map)을 추론
    - Dynamo: 시간 기반 대사 라벨링 데이터를 활용해 unspliced 및 spliced mRNA의 수치를 모델링해 세포 전이의 연속적인 속도장(velocity field) 재구성
    - PRESCIENT: 세포 분화를 확산(diffusion) 과정으로 모델링하여, 분화 지형(differentiation landscpae)을 학습
    - MuTrans: 다중 스케일 축소 기법(multiscale reduction)을 통해 스냅샷 데이터에서 세포들이 수렴하는 지점(attractors)과 그 사이의 전이 확률 정령화, 저차원의 동적 다양체(dynamical manifold)를 구축
        - manifold: 국소적으로 평면처럼 보이는 공간으로, 고차원 데이터를 저차원 manifold 위에 있다고 가정
    - ⟹ 대부분 정상 상태(stationarity)나 평형 상태(equilibrium)를 가정하기 때문에, 발달처럼 시간에 따라 변화하는 동적 과정 포착하지 못함
- Fokker-Planck 방정식: 세포 집단의 동역학을 모델링하는 데 사용될 수 있지만, 파라미터 추정 및 수치 해석이 어렵고 계산 비용이 큼
- Optimal transport(OT, 최적 수송): 두 분포 사이의 질량을 이동시키는 고전적인 수학 이론으로 최근 scRNA-seq 데이터 분석에도 활용
    - Waddington-OT: 유전자 발현 공간에서 세포들이 확률 분포에 따라 샘플링된다고 가정, 두 연속된 시간 지점 간의 세포 이동 경로(transport plan)fmf OT로 추론
    - Dynamic OT: 시간 개념을 추가하여 유체역학과 연결되는 해석을 가능하게 하며, 이는 볼록 최적화 문제(convex optimization)로 귀결됨
        - Convex Optimization: 문제의 형태가 볼록한 최적화 문제. 어떤 함수를 최소화하거나 최대화하려 할 때, 함수와 조건들이 좋은 성질(볼록성)을 가지고 있으면 해를 안정적으로 구할 수 있음. 지역 최적값=전역 최적값.
    - TrajectoryNet: dynamic OT와 continous normalizing flows을 결합하여 세포 동역학의 연속적인 경로 추론
    - MIOFlow: geodesic autoencoder와 multiscale manifold distance를 사용하여, 데이터 다양체 상에서 OT 흐름을 구현함으로써 스냅샷 데이터의 확률적 동역학 학습
- velocity: 이와 같은 모델에서는 개별 세포의 유전자 발현이 시간에 따라 순간적으로 어떻게 변하는지 설명하기 위해 velocity 개념 도입
- 성장 항(growth term): 세포 분열과 세포 사멸 등으로 인해 전체 세포 수(population)가 시간이 지나며 변할 수 있기에 변화를 반영할 수 있는 성장 항을 모델에 포함
    - Waddington-OT와 PRESCIENT는 성장 지표 유전자(growth hallmark genes)의 발현 수준을 이용해 세포의 성장을 간접적으로 추정
    - 연구 결과로 KEGG, GO 등 서로 다른 생물학적 데이터베이스는 서로 다른 유전자 리스트를 제공하기에, 추정된 성장 결과는 데이터베이스 선택에 따라 크게 달라질 수 있음
    - TrajectoryNet은 연속적인 OT 모델 환경에서 growth/death를 별개의 이산적이고 정적(static)이며 불균형(unbalanced)한 OT 모델로 통합한 최초의 방법
- 개별 세포 수준의 유전자 발현 속도와 전체 세포 집단의 성장을 동시에 통합할 수 있는 모델과 계산 도구는 아직 부족한 실정

<img src="https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs42256-023-00763-w/MediaObjects/42256_2023_763_Fig1_HTML.png?as=webp" alt="1" width="100%" height="100%"/>  

- Fig. 1: Illustrative diagram of TIGON  

    - (a): 세포 성장, 상태 전이, GRN이 포함된 세포 계통 역학 설명
    - (b): 연속적인 세포 역학
        - 세포 상태의 연속적인 변화를 시간에 따라 정의된 밀도 함수 $$ρ(x,t)$$로 설명. scRNA-seq 데이터를 입력으로 하여, 특정 시간 지점에서의 세포 상태 밀도 $$ρ$$를 추정
    - (c): 딥러닝 기반의 동역학 모델
        - 속도 v와 성장률 g가 포함된 PDE에 의해 밀도 함수 ρ결정
        - v와 g는 각각 신경망으로 모델링 되며, 딥러닝을 통해 학습
    - (d): TIGON의 출력 결과 및 후속 분석
        - 좌측 상단: 세포 속도 벡터 시각화
        - 우측 상단: 각 세포의 추적된 궤적
        - 좌측 하단: 선택된 세포 혹은 세포 유형에 대한 유전자 조절 행렬
        - 우측 하단: GRN. 화살표의 굵기는 조절 강도
    - (e): TIGON의 출력 결과 및 후속 분석
        - 좌측: 성장률 g의 추정값을 색상으로 표현한 시각화.
        - 우측: g의 그래디언트는 각 유전자가 성장 변화에 얼마나 기여하는지 나타냄. 성장 관련 유전자는 그래디언트 값이 큰 유전자들 위주로 선별

- TIGON: 짝지어지지 않은 시계열 단일세포 전사체 데이터를 연결함으로써 세포 속도, 성장, 세포 역학을 추론하는 모델.
    1. 동적 불균형 OT 모델: 개별 세포와 전체 세포 집단의 유전자 발현 속도를 동시에 포착
    2. mesh-free, dimensionless formulation: WFR 거리를 기반으로, Neural ODEs을 통해 쉽게 계산 가능
    3. 시간적, 인과적 유전자 조절 네트워크 및 성장 관련 유전자의 추론 가능
- 시뮬레이션된 유전자 조절 모델을 통해 TIGON이 세포 속도와 성장을 하나의 통합된 프레임워크에서 효과적으로 모델링할 수 있음을 보였으며, 기존의 균형잡힌 동적 OT 모델과 비교 분석
- 세 가지 시계열 시스템에 적용
    - 분기(bifurcation)를 포함한 계통 추적(lineage tracing) 데이터셋
    - 상피-간엽 전이(EMT, Epithelial-to-Mesenchymal Transition) 데이터셋
    - 분기를 포함한 유도만능줄기세포(iPSC) 분화 데이터셋
- ⟹ TIGON은 세포의 속도, 궤적(trajectory), 성장률을 정확히 복원해낼 뿐 아니라 시간에 따른 GRN과 cell-to-cell communication까지 추론하는 데 성공


## Results
---

### Overview of TIGON

- 모델에서의 세포 집단: 시간에 따라 변하는 밀도 함수 $$ρ(x,t)$$
    - $$\rho (x,t)$$: 시각 t에서 유전자 발현 상태 x 상의 세포 수 분포
    - $$ x \in \mathbb{R}^d $$($$x$$: 유전자 발현 상태, $$\mathbb{R}^d$$: d차원의 유전자 발현 공간)

- time-series scRNA-seq data는 주어진 이산적 시간 지점에서의 밀도 함수 $$\rho_i=\rho(x, t_i), i=1, 2, ..., T$$를 생성하는 데 사용됨. Gaussian Mixture Model 기반.
- TIGON의 딥러닝 기반 접근법은 이러한 시간 지점에서의 밀도 $$\rho_i$$를 입력으로 하여 hyperbolic partial differential equation을 이용해 시간에 따라 연속적인 밀도 함수 $$\rho(x,t)$$를 interpolation 방식으로 재구성

    - $${\partial }_{t}\rho \left(x,t\right)+\nabla \cdot \left(\mathbf{v}\left(x,t\right)\rho \left(x,t\right)\right)=g\left(x,t\right)\rho \left(x,t\right)$$
