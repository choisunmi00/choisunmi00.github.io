---
title: >-
    [논문 요약] An introduction to spatial transcriptomics for biomedical research
author: csm
date: 2024-02-05 14:10:00 +0900
categories: [Biology, biomedical]
tags: [paper]
description: An introduction to spatial transcriptomics for biomedical research
math: true
---

<a href="https://doi.org/10.1073/pnas.0305937101">An introduction to spatial transcriptomics for biomedical research</a>



## Abstract
---
- 현재 상용 single-cell transcriptomics(scRNA-seq) 기법의 한계: 특정 세포 유형의 연구가 어렵고, 공간적 맥락 소실
- 공간 전사체학(spatial transcriptomics): 유전자 전사의 고차원적 분석을 공간적으로 수행
	- 조직 내에서 혼성화된 mRNA 분자 위치 기록
	- 세포의 위치를 영상화한 후 분석
	- 사전 정의된 위치에 있는 mRNA 탐침 배열 이용

## Background 
---
### Why study 'cells' with '-omic' detail?
- DNA에 저장된 유전자 정보를 통해 단백질을 생성하는 과정에서 중간 매개체 역할을 하는 messenger RNA(mRNA)
- 인간의 다양한 조직에서 개별 세포가 어떤 mRNA와 단백질을 활용하는지 분석 -> 다양한 질환 예방, 치료할 새로운 전략 개발
- 개별 세포를 유전체(genome) 수준에서 분자적 세부 정보까지 포함하여 정밀하게 분석 필요   

### A decade of studying mRNA in sigle cells
- 세포는 본질적으로 동일한 DNA를 가지고 있기에, 세포의 다양성과 특정 기능은 DNA 수준보다 단백질 수준에서 분석하는 것이 적절
- 2009년 단일 세포에서 발현되는 모든 mRNA를 분석하는 '전사체(transcriptome)' 연구 -> single-cell transcriptomics, 즉 sigle-cell RNA-seq(scRNA-seq) 활용 연구
- scRNA-seq 기법은 조직에서 개별 세포를 온전하고 생존 가능한 상태로 분리한 후, 분석 혹은 표지하는 방식. 단, single-nucleus RNA-seq 기법은 조직에서 핵만 기계적으로 회수하여 분석.
- 가장 널리 사용되는 플랫폼은 10x Genomics사의 Chromium Controller -> 수십만 개의 세포를 대상으로 유전체 수준의 cellular identity, heterogeneity, dynamic change를 편향없이 분석 가능

### What is 'spatial transcriptomics' and why is it useful?
- scRNA-seq의 한계: 세포를 조직에서 분리하는 과정에서 생기는 스트레스, 세포 사멸, 세포 응집 등
- 뇌 신경세포와 같이 scRNA-seq 분석이 쉽지 않은 경우
- 공간적 정보(spatial information)를 보존하는, 세포를 분리하지 않고 조직을 그대로 분석하는 전사체학 기법에 대한 필요성 증가
- 이웃 세포 및 비세포성 관계를 통해 세포표현형(phenotype), 세포 상태(cell state), 조직 기능(tissue function)을 정의, 세포 위치는 중요한 정보 제공
- 세포가 위치하는 환경이 해당 세포가 노출되는 신호 결정
	- 거시적인 수준에서 작용하는 내분비 신호(endocrine signals), 근거리에서 작용하는 가용성 신호(soluble signals), 세포 간 상호작용(cell-cell interactions) 존재
	- 세포막에 결합된 단백질 수용체(protein receptors)와 리간드(ligand)쌍이 신호를 전달하는 대표적 방식 -> 이들의 mRNA를 전사체학을 통해 검출
	- => 조직 내 세포의 맥락이 세포 생물학 연구에 필수적이기에, 공간 전사체학 발전 촉진
- 이 논문에서는 공간 전사체학을 처음 접하는 연구자들을 위한 입문 가이드를 제공
- 연구 framework 제시
	- 샘플의 특성과 생물학적 시스템의 특징을 반영한 연구 계획 수립
	- 연구 목표에 적합한 플랫폼 선택
	- scRNA-seq 및 보조적 염색(auxiliary staining) 기법과의 조합
	- spatial -omics 분석을 위한 알고리즘 활용

## Spatial transcriptomics in current biomedical research
---
- 대표적인 전사체학 기술 10x Genomics의 Visium, Nanostring의 GeoMx 및 CosMx
- 다른 오믹스 기술도 연구 결과에 기여: 공간 단백체학(spatial proteomics, 항체기반 방법을 통해 수십 개의 단백질을 표적 분석하는 기술), 공간 크로마틴 접근성 분석(spatial assays for chromatin accessibility), 공간 유전체학(spatial genomics)
- 본 연구에서는 spatial -omics 기술을 소개, 조직 분화 과정에서의 유전자 발현 패턴, 공간적으로 국소화된 질병 기전, 질병을 유발하는 특정 세포 유형 등을 설명
- 넓은 차원에서, 조직 내 전사 패턴(transcriptional patterning)과 유전자 조절 분석에 활용
	- 생리 주기 동안 자궁내막의 성장과 탈락을 조절하는 메커니즘 정의(조직 내 특정 부위에서 신호 경로의 발현 패턴 발견)
	- field-of-view 이미징은 질병 조직에서 새로운 구조적 특징 발견
	- 대장암(colorectal cancer)의 조직학적 등급과 형태학적 특징이 단백질 농도 변화와 일치하는 양상
	- HRE2+ 양성 유방암 연구에서는 면역학적 반응과 관련된 바이오마커를 공간적으로 규명
	- 암 전이 모델과 원발성 인간 암(primary human cancer)에서 암 세포 크론의 공간적 분포 분석
- 더 세부적인 수준에서, 조직 내 세포 환경(neighbourhoods) 및 국소적 조직 특성이 질병에 미치는 영향 분석
	- 쥐 알츠하이머병 모델 관련해 아밀로이드 플라크(amyloid plaques) 근처에서 특정 유전자 발현 모델이 나타나는 것을 확인
	- 원발성 피부 흑색종(primary cutaneous melannoma) 연구에서는 CyCIF를 활용한 고해상도 단백질 이미징을 통해 특정 면역 억제 미세환경을 규명
- 개별 세포 및 특정 세포 유형의 기능을 연구하는데 활용
	- 유방암 연구에서 Visium과 scRNA-seq을 이용하여 다양한 임상 아형(ER+, HER2+)의 26개 암 절편을 분석
	- 공간 분석을 통해 PD-L1 및 PD-L2를 발현하는 대식세포(macropages)가 CD4+ 및 CD8+ T세포 영역에서 증가하며, 이는 환자의 낮은 생존율과 연관됨을 밝힘
- CyCIF를 활용하여 특정 신호 경로 분석
	- 교모세포종(glioblastoma) 연구에서 CD73을 발현하는 종양 세포와 CD39을 발현하는 미세아교세포(microglial cells)가 함께 존재하는 공간적 패턴 확인 -> 퓨린 신호 전달(purinergic signaling)과 연관, 종양 증식과 침습을 족진하는 기전과 연계됨을 제시

