---
title: >-
    [논문] Agent Laboratory(2)
author: csm
date: 2025-02-24 14:10:00 +0900
categories: [AI, AI agent]
tags: [paper]
description: >-
 Agent Laboratory: Using LLM Agents as Research Assistants
---

[Agent Laboratory: Using LLM Agents as Research Assistants](https://arxiv.org/abs/2501.04227)

## 3. Agent Laboratory
---
<img src="https://github.com/SamuelSchmidgall/AgentLaboratory/raw/main/media/AgentLabWF.png" alt="1" width="100%" height="100%"/>

- Agent Laboratory: 연구 논문의 독립적인 수집 및 분석 ⟶ 협력적인 실험 설계 및 데이터 준비 ⟶ 자동화된 실험 수행 및 연구 보고서 생성
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
    - PhD agent와 Postdic agent간의 합의 ⟶ 연구 계획 확정
- Postdoc agent가 `plan` 명령을 사용해 연구 계획 제출   

#### Data Preparation
- 데이터 준비 단계: 실험 실행을 위한 데이터 전처리 및 준비 작업을 수행하는 코드 작성
- ML Engineer agent: `Python` command 사용, 출력 결과 확인, Hugging Face 데이터셋 검색(`search HF` command)
- SW Engineer agent: `submit code` command 사용, 제출 전 python 컴파일러를 통해 코드 오류 검증    

#### Running Experiments  
- 실험 실행 단계: 연구 계획을 구현 및 실행
- `mle-solver`: 머신러닝 코드를 자동으로 생성, 테스트, 개선
    <img src="https://github.com/user-attachments/assets/878af2b7-7207-40f3-89dc-3e6dcef215ca" alt="2" width="100%" height="100%"/>

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
        - `mle-solver`는 자신의 행동 결과에 대해 refelection 수행
            - 컴파일 실패: solver는 이 문제를 다음 반복에서 어떻게 해결할지 self-reflection
            - 컴파일 성공 및 점수 반환: solver는 이 점수를 어떻게 높일 수 있을 지 self-reflection
        - ⟶ 생성된 코드의 품질과 견고성을 반복적인 주기를 통해 개선
    - E. **Performance Stabilization**
        - performance drift를 방지하기 위해 두 가지 메커니즘 구현: top program sampling, batch-parallelization
        - top program sampling: 최고 점수를 기록한 프로그램 모음을 유지, 명령을 실행하기 전 하나의 프로그램을 무작위로 샘플링
        - batch-parallelizaionz: 각 해결 단계에서 N개의 수정을 동시 진행, 가장 높은 점수를 얻은 수정을 선택해 상위 프로그램 모음에서 점수가 가장 낮은 프로그램과 교체
        - ⟶ 코드 수정을 위해 high-entrophy sampling 사용, 새로운 해결책을 탐색하는 것과 기존 해결책을 개선하는 것 간의 균형을 이루어 안정적인 코드 수정 유지     
        
#### Results Interpertation
- 결과 해석 단계에서 도출된 통찰을 최종 보고서 작성에 활용
- PhD agent와 Postdoc agent는 `mle-solver`가 생성한 실험 결과를 해석하며 논의 ⟶ 학술 논문을 작성하는데 기여할 수 있는 의미 있는 해석에 동의 ⟶ Postdoc agent가 `interpretation` 명령을 통해 제출 ⟶ 보고서 작성 단계의 기초
    
### 3.3 Report Writing
#### Report Writing
- 보고서 작성 단계에서는 PhD agnet와 Professor agnet가 연구 결과를 종합하여 포괄적인 학술 보고서 작성
- `paper-solver`: 모듈을 통해 보고서를 반복적으로 생성하고 수정. 이전 단계에서 `Agent Laboratory`가 생성한 연구 성과를 체계적으로 정리. 출력된 보고서는 학술 논문의 표준 구조.
    <img src="https://github.com/user-attachments/assets/68a24557-db7f-4829-a1df-face731243a1" alt="3" width="100%" height="100%"/>   
 
    - A. **Initial Report Scaffold**
        - 연구 논문의 초기 구조(scaffold) 생성
        - 8가지 standardized sections: Abstract, Introduction, Background, Related Work, Methods, Experimental Setup, Results, Discussion
        - scaffold 생성 과정에서는 각 섹션에 대한 placeholder 삽입(세부적인 텍스트 생성의 기초)
        - LaTeX 컴파일을 위한 필수 서식 포함, 적절한 섹션 제목, 콘텐츠 개발 유도하는 placeholder 포함
    - B. **Arxiv Research**
        - scaffold 구축 단계에서는 `paper-solver`가 arXiv에 접근하여 주제와 관련된 연구 문헌 조사, 인용할 수 있는 참고 문헌 확보를 수행.
    - C. **Report Editing**
        - `paper-sovler`는 특수 명령어를 사용해 논문을 반복적으로 수정 및 개선
        - iterative editing ⟶ quilty, cohesiveness, depth required for academic acceptance.
        - `EDIT` 명령어: 연구 계획과 논리적 흐름에 맞게 내용을 조정, 논리적 일관성과 명료함 보장, 학술 논문 포맷 유지 ⟶ LaTeX 코드의 특정 부분을 정밀하게 수정
        - 수정 사항을 적용하기 전 LaTeX를 컴파일하여 오류가 없는지 확인, 문서의 무결성(integrity) 유지
    - D. **Paper Review**  
        - 논문 점수를 평가하기 위해 automated review system([https://github.com/user-attachments/assets/56f7c539-d54b-45cf-b9ac-b7f2314be1da](https://arxiv.org/abs/2408.06292))의 변형을 활용
        - LLM을 기반으로 한 agent를 활용하여 NeurlPS 학회 가이드라인에 따라 과학 논문을 리뷰하는 방식으로 작동
        - ICLR 2022의 OpenReview 데이터셋에서 500개 논문을 평가한 결과, 자동 리뷰 시스템의 정확도는 65%(인간 리뷰어: 66%)로 인간 수준의 평가 정확도에 도달했으며 F1 점수는 0.57(인간 리뷰어: 0.49)로 보정(calibration) 이후에는 인간을 능가하는 수준
        - Examlple Review(o1-mini|Word Order Sensitivity)
            ```
             "Strengths": [
                "Comprehensive experimental design and methodology.",
                "Use of a well-known dataset (RACE) for evaluation.",
                "Empirical validation of bias mitigation strategies.",
                "Clear presentation of results and analysis."],
            Weaknesses": [
                "Limited exploration of additional bias mitigation techniques.",
                "Lack of in-depth discussion on limitations
                and societal impacts.",
                "The originality could be enhanced by exploring novel
                strategies."],
            "Originality": 3, "Quality": 4, "Clarity": 3, "Significance": 3,
            "Questions": [
                "Have you considered exploring additional bias
                mitigation techniques beyond majority voting and entropy-based
                thresholding?",
                "Can you provide more details on the potential societal impacts
                of the model’s sensitivity to option order?",
                "What are the limitations of the current study, and how
                might they be addressed in future work?"],
            "Limitations": [
                "The study is limited to the RACE dataset and may not generalize
                to other datasets.",
                "The bias mitigation strategies, while effective,
                do not completely eliminate sensitivity to option order."],
            "Ethical Concerns": false,
            "Soundness": 3, "Presentation": 3, "Contribution": 3,
            "Overall": 7, "Confidence": 4,
            "Decision": "Accept"
            ```   

#### Paper Refinement
- 논문 수정 단계에서 PhD agent는 논문을 수정할지 최종적으로 완성할지 결정
- 세 명의 reviewer agent가 NeurlPS 학술지의 peer review 피드백을 모방하여 논문을 평가 ⟶ reviewer들은 독창성(originality), 연구 품질(quality), 명확성(clarity), 의의(significance) 등의 기준에 따라 점수를 부여 ⟶ PhD agent는 평가를 바탕으로 논문 확정 또는 수정 선택
- 실제 학계에서 이루어지는 논문 수정 및 심사 절차를 시뮬레이션하는 과정

#### *3.3.1 Autonomous versus Co-Pilot Mode:*
- `Agent Laboratory`는 두 가지 방식으로 운영될 수 있다
- Autonomous mode: 사람은 초기 연구 아이디어만 제공. 각 작업이 완료되면 자동으로 다음 하위 작업이 진행
- Co-Pilot mode: 사람은 연구 아이디어를 제공하는 것 외에도 각 하위 작업 끝의 체크포인트에서 agnet가 생성한 작업결과를 검토. 다음 하위 작업으로 진행할지, 수정을 수행할지 선택