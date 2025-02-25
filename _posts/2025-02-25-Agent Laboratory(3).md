---
title: >-
    [논문 요약]  Agent Laboratory(3)
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
    1. Do language models exhibit cognitive biases(인지적 편향), such as confirmation bias or anchoring bias?
    2. Are image transformers more or less sensitive to pixel noise than convolutional networks?
    3. Do language models improve accuracy on MedQA when asked to perform differential diagnosis?
    4. Are language models sensitive to word order in multiple choice benchmarks?
    5. Does gender role play affect the accuracy on of language models on answering math questions?

    
#### *4.1.1 Human reviewer scores by language model*