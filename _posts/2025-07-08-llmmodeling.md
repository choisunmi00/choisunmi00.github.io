---
title: >-
    25.07.04 LLM modeling 회의
author: csm
date: 2025-07-08 10:10:00 +0900
categories: [Meeting, LLM modeling]
tags: [project]
description: 홈페이지 및 로그인 구현 https://www.cgv.co.kr/
---

## 주제 선택
---
0. synthetic data set 구축
1. AI 에이전트 개발
    - 에이전트가 주어진 목표에 맞게 새로운 알고리즘을 구성하도록 개발
2. 멀티모달 모델 개발
    - 파운데이션 모델들을 최대한 많이 모은 후, 여러 데이터에 대한 임베딩 모델 제작

- 실질적인 프로젝트 진행
    1. 데이터셋 구축 (분석 대상 정의)
    2. 태스크 정의 (무엇을 달성할 것인가?)
    3. 태스크를 달성하기 위한 메트릭 정의
    4. 비교 모델/알고리즘 수집 (벤치마크 개념)

## 회의 내용
---
- 프로젝트의 특징 제안
    - science 쪽 task 정의
        - 클러스터링, normalization, integration, grn inference 등
        - 파이프라인 강화
- 약물 perturbation 관련 주제
    - 데이터 셋을 활용, 예측
        - SCVERSE에 들어가 있어 scanpy로도 불러올 수 있을 듯
        - 목표: 공간전사체, 약물전사체 정보 통합 > 약물 효과 예측
        - mutation까지는 X. transcriptom만 사용
        - cell-cell interation에 대한 input 필요
        - model의 input과 output이 어떻게 될지
        - perturbation을 어떻게 예측 해볼까

## 다음
---
- 논문 서치
- Tahoe 데이터 관련 논문 리뷰, 데이터 구조 정리
- 모델의 input, output 설계