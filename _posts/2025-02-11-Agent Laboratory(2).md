---
title: >-
    [논문 요약]  Agent Laboratory(2)
author: csm
date: 2025-02-11 14:10:00 +0900
categories: [AI, AI agent]
tags: [paper]
description: >-
 Agent Laboratory: Using LLM Agents as Research Assistants
math: true
---

[Agent Laboratory: Using LLM Agents as Research Assistants](https://arxiv.org/abs/2501.04227)

## 3. Agent Laboratory
---
<img src="https://github.com/SamuelSchmidgall/AgentLaboratory/raw/main/media/AgentLabWF.png" alt="1" width="80%" height="80%"/>

- Agent Laboratory: 연구 논문의 독립적인 수집 및 분석 -> 협력적인 실험 설계 및 데이터 준비 -> 자동화된 실험 수행 및 연구 보고서 생성
- Agent Laboratory Workflow
    - phD 및 Postdoc Agents와 인간 연구자의 협력력
    1. 문헌 조사 (Literature Reiview)
    2. 실험 수행 (Experimentation)
        - mle-solver: 실험 설계 및 데이터 준비 자동화, 모델 학습 및 최적화 수행, 결과 해석 및 성능 평가
    3. 연구 보고서 작성 (Report Writing)
        - paper-solver: 연구 결과 요약 및 논문 초안 작성, 표와 그래프 및 결과 해석 자동화

### 3.1 Literature Review
#### Literature Review
- 문헌 조사 단계: 주어진 연구 아이디어에 맞는 관련 논문 수집 및 정리
- PhD Agent
    - arXiv API 활용
    - 작업 수행 단계
        - `summary`: 초기 연구 질의에 따라 관련성 높은 20개의 논문 초록 검색 및 요약
        - `full text`: 특정 논문의 전체 본문 상세 분석
        - `add paper`: 논문들의 요약 또는 전체 본문을 문헌 조사 목록에 추가
    - 반복적인 작업 수행으로 문헌 목록을 개선
    - 최대 문헌 수에 도달하면 최종 `add paper` 명령을 통해 최종 문헌 목록 확정

### 3.2 Experimentation
- 실험 수행 단계
#### Plan Formulation
- 연구 계획 수립 단계: 문헌 조사 결과와 연구 목표를 바탕으로, 구체적이고 실행 가능한 연구 계획 작성
- PhD agent와 Postdoc agent의 대화(collaborate through dialogue)
    - 실험 구성 요소 결정: 구현할 머신러닝, 사용할 데이터셋, 실험의 주요 단계
    - PhD agent와 Postdic agent간의 합의 -> 연구 계획 확정
- Postdoc agent가 `plan` 명령을 사용해 연구 계획 제출
#### Data Preparation
- 데이터 준비 단계: 실험 실행을 위한 데이터 전처리 및 준비 작업을 수행하는 코드 작성
- ML Engineer agent: `Python` command 사용, 출력 결과 확인, Hugging Face 데이터셋 검색(`search HF` command)
- SW Engineer agent: `submit code` command 사용, 제출 전 python 컴파일러를 통해 코드 오류 검증
#### Running Experiments
- 실험 실행 단계: 연구 계획을 구현 및 실행
- `mle-solver`: 머신러닝 코드를 자동으로 생성, 테스트, 개선
    <img src="https://github.com/user-attachments/assets/878af2b7-7207-40f3-89dc-3e6dcef215ca" alt="2" width="70%" height="70%"/>

    - 연구 계획과 문헌 조사를 바탕으로 초기 코드 생성
    - 가장 성능이 뛰어난 코드를 최적 코드(*top scoring program*)로 유지 
    - A. **Command Execution**
        - 명령 실행 단계: 초기 프로그램을 샘플링하여 반복적으로 수정 및 최적화
        - `EDIT`: 특정 코드 블록(line range) 수정
        - `REPLACE`: 새로운 Python 파일 생성
    - B. **Code Exeucution**
        - 코드 실행 단계: 컴파일러를 통해 runtime error확인 후, 성능 점수 반환하여 성능이 가장 높은 코드로 업데이트.
        - 코드 실행이 실패할 경우 agent가 복구 시도. 복구 시도 횟수는 $$N_{rep}$$로 제한(본 논문의 경우 $$N_{rep} = 3$$). 횟수 만큼 수정 시도 후에도 해결되지 않으면 코드 대체(`REPLACE`) 수행    
    - C. **Program Scoring**
        - scoring function을 사용하여 기존 코드보다 우수한지 판별
        - mle-solver가 생성한 코드를 평가하기 위해 LLM reward model 사용.
        - reward model은 LM을 호출하여 연구 계획, 생성된 코드, 출력을 고려하여 초기 목표에 얼마나 부합하는지 0부터 1사이의 범위로 점수화
        - [Tree of Thoughts: Deliberate Problem Solving with Large Language Models](https://arxiv.org/abs/2305.10601) LLM reasoning tree search와 유사, 다만 논리적 추론 아닌 코드 실행 결과를 기준으로 탐색
        - [AIDE: Human-Level Performance in Data Science Competitions](https://www.weco.ai/blog/technical-report) ALDE의 Solutopm Space Search와 유사, 다만 코드 정확도 뿐만 아니라 코드의 품질 및 실험 목표와의 일치도를 종합적으로 평가
    - D. **Self Reflection**
        - 코드 실행 결과에 상관없이 self-reflection 단계 수행
        - [Self-Reflection in LLM Agents: Effects on Problem-Solving Performance](https://arxiv.org/abs/2405.06682) & [Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366)
        - `mle-solver`
    - E. **Performance Stabilization**