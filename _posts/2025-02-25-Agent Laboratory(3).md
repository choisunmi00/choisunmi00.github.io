---
title: >-
    [논문] Agent Laboratory(3)
author: csm
date: 2025-02-25 14:10:00 +0900
categories: [AI, AI agent]
tags: [paper]
description: >-
 Agent Laboratory: Using LLM Agents as Research Assistants
---

[Agent Laboratory: Using LLM Agents as Research Assistants](https://arxiv.org/abs/2501.04227)

## 4. Results
---
1. `Agent Laboratory`가 end-to-end autonomous mode에서 다섯 가지 주제에 대해 생성한 논문에 대한 인간 평가 (4.1)
2. `Agent Laboratory`가 co-pilot mode에서 연구자가 원하는 주제를 선택하거나 미리 선정된 주제를 이용한 경우에 대한 인간 평가 (4.2)
3. 다양한 모델에 대해 비용, 평균 시간, 성공률을 포함한 상세한 실행 시간 분석 (4.3)
4. `mle-solver`를 MLE-Bench라는 실제 Kaggle 챌린지 세트에서 독립적으로 평가한 결과 (4.4)  

### 4.1 Evaluation of quality by language model
- Experiment Quailty, Report Quality, Usefulness 측면에서 인간 평가
- LLM 백엔드: gpt-4o, o1-mini, o1-preview
- 다섯 가지 연구 주제
    1. Do language models exhibit cognitive biases, such as confirmation bias or anchoring bias?
    2. Are image transformers more or less sensitive to pixel noise than convolutional networks?
    3. Do language models improve accuracy on MedQA when asked to perform differential diagnosis?
    4. Are language models sensitive to word order in multiple choice benchmarks?
    5. Does gender role play affect the accuracy on of language models on answering math questions?  
    
- 다섯 가지의 연구 주제를 autonomous mode로 3개의 LLM 백엔드에서 실행, 10명의 PhD 자원봉사자가 3가지 기준으로 평가(Experimental Quality, Report Quality, Usefulness(1 to 5))
- 결과
    <img src="https://github.com/user-attachments/assets/ece839de-4faf-4029-831d-5c7cd681b6a5" alt="1" width="70%" height="70%"/>
- LLM 백엔드별 품질 평가 결과로 o1-preview는 가장 유용한 연구 보조 도구, o1-mini는 가장 높은 실험 품질 점수 기록, gpt-4o는 모든 평가 항목에서 낮은 성능
- 연구 주제에 따라 논문의 보고서 품질, 실험 품질, 유용성이 다르게 평가 
    - *cognitive bias* topic: 실험 품질이 가장 높음
    - *image noise* topic: LLM 백엔드에 따라 평가 점수가 크게 차이남
    - *word order* topic: 보고서 품질과 유용성이 높지만, 실험 품질이 낮음 
- ⟶ Agent Laboratory의 성능이 연구 주제 및 백엔드 모델에 따라 다르게 나타날 수 있음을 시사

#### *4.1.1 Human reviewer scores by language model*
- NeurlPS 기준(quality, significance, clarity, soundness, presentation, contribution)을 적용하여 `Agent Laboratory`가 생성한 논문 평가
- o1-preview가 전반적으로 가장 균형 잡힌 논문을 생성, 그러나 기술적, 방법론적 측면에서 여전히 부족
- o1-mini는 실험 품질과 기술적 타당성에서 가장 높은 점수
- gpt-4o는 모든 평가 항목에서 가장 낮은 점수
- NeurlPS 승인 논문의 평균 점수(5.9/10)와 비교하면 현재 autonomous mode에서 생성된 논문들은 학회 승인 기준에 미달
- `Agent Laboratory`의 품질 개선 필요

#### Automated Reviews versus Human Reviews
- 자동화 리뷰어의 평가 점수와 인간 리뷰어의 평가 점수의 일치도 탐색
- 자동화 리뷰어와 인간 리뷰어를 비교했을 때 모든 평가 기준에서 상당한 차이, 자동화 리뷰어는 self-evaluation 논문의 기여도를 과대평가하는 경향
- 결과
    <img src="https://github.com/user-attachments/assets/324b5f24-5bb8-4632-b422-dae9a7caa9c3" alt="2" width="70%" height="70%"/>

### 4.2 Evaluation of co-pilot quality
- co-pilot mode에서의 `Agent Laboratory` 평가
- 연구자들은 자유롭게 원하는 주제 선택, 다섯 가지 연구 주제 중 하나를 선택 ⟶' 선택한 주제들에 맞춰 2개 논문 생성 ⟶ 연구자들에게 `Agent Laboratory` 사용 경험 평가 요청 ⟶ 연구자들이 자신이 생성한 논문을 NeurlPS 기준으로 직접 평가 ⟶ 외부 연구자가 논문 평가, autonomous mode에서 생성된 논문과 비교
- o1-mini 백엔드를 사용하여 모든 단계를 수행(문헌 조사 단계 제외)

#### *4.2.1 Quality as a tool*
- 연구 보조 도구로서의 품질 평가
- 연구자들이 4가지 기준으로 평가(Utility, Continuation, Satisfaction, Usability(1 to 5))
- 연구자들의 피드백: 인터페이스 개선(GUI 추가, 중간 결과 확인 기능 강화), 논문에 그림을 더 추가할 수 있는 기능 요청, 문헌 조사 단계 개선 필요
- autonomous mode보다 co-pilot mode에서 점수가 더 낮은 것은 연구자들이 agent를 자신의 연구 목표에 맞게 정확히 조정하는 것이 어렵고, 제한적인 제어 방식으로 원하는 실험이나 결과를 반영하기 어려움
- 결과
    <img src="https://github.com/user-attachments/assets/c11cc0f8-13f0-4bb9-a0f8-b5dd23623b96" alt="3" width="70%" height="70%"/>

#### *4.2.2 Evaluation of co-pilot generated papers*
- `Agent Laboratory`의 co-pilot mode에서 생성된 논문의 품질을 평가하기 위해 두 방법 사용
- self-assessment: 논문을 생성한 연구자들이 NeurlPS 기준을 바탕으로 자기 논문 평가
- external assesment: 외부 연구잗르이 동일한 논문을 평가하여 self-assessment와 비교

#### Self-evaluation
- autonomous mode와 비교하여 co-pilot mode에서는 연구자들이 직접 개입하여 논문을 개선하면서 문서의 명확성, 타당성, 표현력은 향상되었으나 연구 기여도와 논문의 중요성은 오히려 낮아짐

#### External evaluation
- 연구자들은 자신이 직접 선택한 주제에 대해 더 긍정적으로 평가하는 경향 존재
- 외부 평가자들은 오히려 사전 선택한 주제의 논문이 더 나은 품질을 가졌다고 평가

#### Comparison with autonomous mode
- co-pilot mode에서 품질, 타당성, 명확성, 표현력 등이 향상
- 실험적 기여도(contribution)와 중요성(significance) 측면에서는 유사
- 논문을 학술대회 수준으로 생성하기 위해서 기여도와 중요성 개선 필요

### 4.3 Runtime statisics
- `Agent Laboratory`을 LLM 백엔드 별로 연산 효율성과 비용 분석
- 분석 대상 단계: Literature Review, Plan Formulation, Data Preparation, Running Experiments, Results Interpretation, Report Writing, Report Refinement
- gpt-4o는 연산 속도 면에서 우수하며 가장 저렴한 비용으로 수행하지만, 실험 품질 및 보고서는 다른 모델에 비해 낮은 성능.
- o1-mini 및 o1-preview는 속도가 느리고 비용은 높지만만, 연구 품질 및 유용성 측면에서 더 나은 성능
- 가장 큰 속도 차이가 난 단계: Running Experiments, Report Writing
- 전반적으로 가장 비용이 높은 단계: Report Writing(o1-preview가 특히 가장 높은 비용 발생, 성공률면에서는 다른 모델들과 큰 차이 없음)
- ⟶ gpt-4o가 전반적으로 가장 빠르고 비용 효율적
- 성공률면에서 o1-preview가 가장 높은 성공률 기록, 하지만 gpt-4o가 데이터 준비 단계에서 가장 안정적
- 문헌 검토 단계는 모든 모델에서 비교적 낮은 성공률, 개선 필요

### 4.4 Evaluating mle-solver on MLE-Bench
- MLE-Bench에서 10개의 ML 과제 선정하여 실험 진행
- MLE-Bench
    - [MLE-bench: Evaluating Machine Learning Agents on Machine Learning Engineering](https://arxiv.org/abs/2410.07095)
    - Kaggle 대회 기반 ML 과제 평가 벤치마크
    - AI agent의 실제 ML 문제 해결 능력 비교
    - Kaggle의 메달 시스템을 활용해 평가
- Kaggle 데이터셋 설명, Kaggle 노트북에서 추출된 지식, Train/Dev 데이터셋 (80/20 랜덤 샘플링), numpy 배열로 변환하여 제공
- Dev 세트에서 초기 성능 측정 후, 최종 성능을 Kaggle 테스트 세트에서 기록
- LLM 점수 대신 실제 모델 예측 성능으로 평가
- 결과
    <img src="https://github.com/user-attachments/assets/f6e3a994-fd07-4f4d-a7a5-22f840ed25a2" alt="4" width="100%" height="100%"/>
- `mle-solver`는 다른 AI solver들보다 높은 안정성과 성능을 보이며, 실제 Kaggle 문제 해결에서도 우수한 성과, 인간 전문가 수준에는 미치지 못하는 한계 존재

## 5. Limitations
---
### 5.1 Workflow limitations
#### Challenges with self-evaluation
- `paper-solver`는 품질을 평가 받을 때 LLM으로 에뮬레이션된 NeurlPS reviewer들을 사용
    - 이에 따른 한계
        1. reviewing agnet들이 실제 reviewer들과 높은 일치를 보인다는 연구에도 불구하고, `Agent Laboratory`에서 작성된 연구 보고서는 'AI Scientist'에서 작성된 연구 보고서보다 질적으로 만족스럽지 않으며, 또한 품질이 낮은 그림을 포함
        2. `Agent Laboratory`는 연구 성과를 이해하는데 도움을 주기 위한 보고서를 제공하도록 설계되었음에도 불구하고, 연구 논문 관점에서의 평가 기준을 사용  
- LLM이 실제 reviewer들에 비해 자기 평가에서 신뢰도와 일치율이 낮음
    - [The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery](https://arxiv.org/abs/2408.06292)

#### Challenges with self-evaluation
- workflow에서 강제되는 구조로 인해 발생하는 한계
    1. `paper-solver`는 고정된 구조로 조직하도록 권장되며, 독특한 논문 구성이나 섹션 순서를 허용하지 않음
    2. `mle-solver`와 `paper-solver`가 논문에 대해 두 개의 그림만 생성
    3. `Agent Laboratory`는 자체적으로 repository 수준의 코드를 관리할 수 없으며, 대신 각 단계에서 적절한 파일을 제공받고, 파일은 어느 단계계에서 생성되었는지에 따라 저장

#### Challenges with hallucination
- gpt-4o와 관련하여 hallucination 발생. 실제로는 발생하지 않은 실험 결과에 대한 언급.

### 5.2 Common failure modes
- `Agent Laboratory`실행 중에 관찰된 일반적인 실패 상황
    - 문헌 검토 단계에서 요약 명령을 반복적으로 사용하여 최대 단계 수에 도달하고 결국 종료
    - 그림을 생성할 때 `mle-solver`가 종종 그림 제목, 설명 등을 누락
    - `mle-solver`는 코드에서 0번 줄을 다른 줄보다 자주 수정하는 경향
    - 데이터 준비나 실험 결과에서 출력할 때 LLM이 토큰 한도에 도달하는 경우
    - `mle-solver`가 `exit()` 명령어를 사용하여 전체 프로세스가 종류되는 문제
    - `mle-solver`가 `subprocess.run()` 명령어를 사용하여 호스트 컴퓨터에서 시스템 명령어를 실행하는 경우
    - `paper-solver`는 arXiv 엔진을 사용해 관련 논문을 검색하는 데 어려움을 겪음(검색 시도 횟수 제한)

### 5.3 Ethical considerations
- 품질이 낮거나 오해를 일으킬 수 있는 과학적 결과물이 나올 위험
- 동료 평가 시스템을 무시하거나 학술적 논의의 신뢰성 위협
- 연구 결과에 왜곡된 결론을 도출할 가능성
- 악용 가능성: 악성 코드 생성, 기후 변화의 위험 축소, 특정 개입의 효과를 과장하는 편향된 분석 생성 등.

## 6. Discussion
---
- `Agent Laboratory`: 머신러닝 연구에서 개인의 연구 수행 능력을 가속화하기 위한 오픈 소스 LLM agnent 프레임워크
- 완전 자동화된 파이프라인을 구축하려는 기존 연구와 달리 co-pilot으로 설계되어 인간 중심적인 과학 탐구 방식 제공
- o1-preview 모델이 가장 유용한 것으로 평가된 반면, o1-mini는 가장 높은 실험 품질
- autonomous mode의 출력은 일반적으로 긍정적으로 평가되었지만, 고품질 연구 논문에 대한 명확성과 타당성 측면에서 차이가 존재
- 자동화된 reviewer 점수는 실제 reviewer 점수를 예측하지 못하며, 따라서 인간 평가의 중요성 강조
- co-pilot mode의 품질이 autonomous mode의 품질보다 높음
- 실행 시간과 비용 분석은 프레임워크의 효율성 입증
- MLE-Bench에서의 `mle-sovler`는 일반적인 ML 문제를 행결하는 능력이 이전 방법들에 비해 향상됨
- `Agent Laboratory`는 LLM을 사용하는 여러 프로세스들을 하나의 연속적인 파이프라인으로 통합, 연구자가 원하는 상호작용 수준과 컴퓨팅 자원에 맞게 확장하고 적응

### Conclusion
- 결론적으로 `Agent Laboratory`는 LLM의 강력함을 활용하여, 효율적이고 인간 중심적인 연구 워크플로우를 향한 유망한 첫걸음. 궁극적으로 과학적 발견을 가능하게 하는 도구로 기능하기를 희망.