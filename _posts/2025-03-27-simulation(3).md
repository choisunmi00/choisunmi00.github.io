---
title: >-
    [연구] Simulation 제작(3)
author: csm
date: 2025-03-27 14:10:00 +0900
categories: [Research, Simulation]
tags: [project]
description: 단일세포 및 공간전사체에 합성데이터셋을 생성하기 위한 동역학 모델 프레임워크
---

## omnipathR
---
- `library(OmnipathR)`


## pypath
---
- Git으로 직접 설치
    ```
    pip install git+https://github.com/saezlab/pypath.git
    ```

## omnipath의 상호작용 유형(type)
- `omnipath.interactions.AllInteractions.get()`를 통해 추출
- `post_transcriptional`: 전사 후 조절. 유전자 전사가 완료된 후, mRNA 수준에서 이루어지는 조절 과정
- `mirna_transcriptional`: miRNA에 의한 전사 조절. miRNA가 직접적인 전사 조절에 관여. 특정 전사인자(transcription factor, TF)를 조절하거나, 크로마틴 구조를 변화시키는 방식
- `post_translational`: 번역 후 조절. 단백질이 합성(번역)된 후, 기능이나 안정성을 조절하는 과정
- `transcriptional`: 전사 조절. DNA에서 mRNA로의 전사 과정에서 유전자 발현을 조절하는 메커니즘
- `lncrna_post_transcriptional`: lncRNA에 의한 전사 후 조절. 긴 비암호화 RNA가 전사 후 조절에 관여하는 메커니즘
- `small_molecule_protein`: 소분자-단백질 상호작용. 소분자(리간드, 약물, 효소 억제제 등)가 특정 단백질과 결합하여 기능을 조절. 
- ⟶ 세포 간 상호작용 유형: `small_molecule_protein`, `lncrna_post_transcriptional`, `mirna_transcriptional`

<script src="https://gist.github.com/choisunmi00/8272b03a29270b164773e36787ee1900.js"></script>