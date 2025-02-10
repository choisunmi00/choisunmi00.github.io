---
title: >-
    [논문 요약]  Agent Laboratory
author: csm
date: 2025-02-05 14:10:00 +0900
categories: [AI, AI agent]
tags: [paper]
description: >-
 Agent Laboratory: Using LLM Agents as Research Assistants
math: true
---

[Agent Laboratory: Using LLM Agents as Research Assistants](https://arxiv.org/abs/2501.04227)

- LLM 기반 프레임워크 Agent Laboratory
	- 과학적 발견 과정을 가속화하고 연구 비용을 절감하여 연구의 질 향상을 목적으로 함
	- 자율적으로 전체 연구 과정을 수행
		- 연구자가 제공한 연구 아이디어를 바탕으로 (1) 문헌 조사, 실험, 연구 보고서 작성의 세 가지 단계를 거쳐 연구결과 도출 ⟶ 코드 저장소 및 연구보고서를 포함한 종합적인 연구 산출물 생성
		- 각 단계에서 연구자가 피드백과 지침 제공 가능
- Agent Laboratory의 배포와 연구자들의 평가로 도출된 결과
	1. o1-preview 기반의 Agent Laboratory가 가장 우수한 연구 결과 생성
	2. 생성된 머신러닝 코드가 기존 방법과 비교했을 때 최첨단 성능 달성
	3. 각 단계에서 연구자의 피드백이 연구 결과의 품질을 크게 향상 시킴
	4. 기존 자율 연구 방법과 비교하여 연구 비용 84% 절감
- 과학적 발견을 가속화하는데 기여할 것으로 기대

## 1. Introduction
---
- 연구 아이디어를 탐색하는 과정의 제한을 줄여 여러 개의 개념을 동시에 탐구, 결과적으로 과학적 발견의 가능성을 높이는 것이 목표
- LLM을 활용한 연구 아이디어 생성 및 자동 논문 작성
	- [ResearchAgent: Iterative Research Idea Generation over Scientific Literature with Large Language Models](https://arxiv.org/abs/2404.07738)
		- ResearchAgent 도입: 연구 아이디어, 방법론, 실험 설계 자동 생성 및 피드백을 통해 개선하는 시스템
		- peer reviewing agent 활용, human-aligned evaluation criteria 적용 
	- [SciAgents: Automating scientific discovery through multi-agent intelligent graph reasoning](https://arxiv.org/abs/2409.05556)
	- [The ai scientist:Towards fully automated open-ended scientific discovery](https://arxiv.org/abs/2408.06292)
		- The AI Scientist 프레임워크 개발: 연구 아이디어 생성, 코드 작성 및 실험 수행, 논문 작성 및 자동 동료 평가
	- [The virtual lab: Ai agents design new sars-cov-2 nanobodies with experimental validation](https://www.biorxiv.org/content/10.1101/2024.11.11.623004v1)
	- [Can LLMs Generate Novel Research Ideas? A Large-Scale Human Study with 100+ NLP Researchers](https://arxiv.org/abs/2409.04109)
		- LLM이 생성한 아이디어가 전문가보다 더 참신한 것으로 평가되었다는 연구 결과
		- 실형 가능성과 구현 세부사항에서 보이는 한계
- ⟶ LLM은 연구에서 보완적인 역할을 수행하는 것이 적절 ⟶ 이에 연구자가 자신의 연구 아이디어를 실현하는 데 도움을 줄 수 있는 자율적 에이전트 파이프라인 설계를 목적으로 둔다 ⟶ Agent Laboratory는 기존 접근법과 달리 연구 아이디어를 생성하기 보단 보조 역할을 수행하도록 설계
- 본 연구의 주요 기여 내용
	1. Agent Laboratory: 머신러닝 연구 수행을 가속화하는 오픈 소스 LLM agent 프레임워크 ⟶ 연구자의 컴퓨팅 자원(CPU, GPU, 메모리) 및 모델 추론 비용에 따라 다양한 수준의 연산량을 설정할 수 있는 유연한 구조 제공
	2. Agent Laboratory가 생성한 논문을 실험적 품질, 보고서 품질, 유용성 측면에서 평가한 결과
		- o1-preview 백엔드가 가장 유용한 것으로 평가
		- o1-mini가 가장 높은 실험적 품질 점수 기록
		- GPT-4o는 모든 항목에서 상대적으로 낮은 성과
	3. NeurlPS 스타일 평가 결과
		- 백엔드 중 o1-preview가 가장 우수한 성능
		- 자동화 평가를 보완하기 위해 사람의 피드백 필수적
	4. Agent Laboratoryd의 'Co-pilot' 모드(사용자가 직접 연구 진행 조율 모드)는 완전 자동 모드보다 높은 점수를 기록하나, 연구자의 의도와 모델 출력을 일치시키는 데 어려움이 존재
	5. Co-pilot 기능의 전반적인 유용성과 사용성은 높게 평가
	6. 논문당 비용이 GPT-4o 백엔드 기준으로 2.33달러, 연구 수행 비용 대폭 절감
	7. MLE-Bench challenge에서 제안된 mle-solver가 state-of-art를 기록

## 2. Background & Related Work
---
### Large language models
- 본 연구의 agent는 autoregressive LLM을 기반으로 구축됨
- LLM은 Transfomer 아키텍처를 활용
	- [Attention Is All You Need](https://arxiv.org/abs/1706.03762)
- 대표적인 모델
	- Claude [The claude 3 model family: Opus, sonnet, haiku](https://www.semanticscholar.org/paper/The-Claude-3-Model-Family%3A-Opus%2C-Sonnet%2C-Haiku/de8ba9b01c9ab7cbabf5c33b80b7bbc618857627?utm_source=direct_link)
	- Llama 
		- [The Llama 3 Herd of Models](https://arxiv.org/abs/2407.21783) 
		- [LLaMA: Open and Efficient Foundation Language Models
](https://arxiv.org/abs/2302.13971)
	- ChatGPT [GPT-4 Technical Report](https://arxiv.org/abs/2303.08774) [Gpt-4o system card](https://arxiv.org/abs/2410.21276)
- LLM은 번역, 요약, 추론과 같이 다양한 작업 수행, 사전 훈련 과정에서 학습한 패턴을 일반화하여 새로운 입력에 대해 대응하는 능력을 갖춤
	- [Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165)

### LLM Agents
- agent: LLM에 구조화된 프레임워크를 도입하여 자율적 및 반자율적 작업을 수행하도록 확장하는 방식의 LLM 기반 시스템
	- [AgentVerse: Facilitating Multi-Agent Collaboration and Exploring Emergent Behaviors](https://arxiv.org/abs/2308.10848)
	- [CAMEL: Communicative Agents for "Mind" Exploration of Large Language Model Society](https://arxiv.org/abs/2303.17760)
	- [ChatDev: Communicative Agents for Software Development](https://arxiv.org/abs/2307.07924)
	- [AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation](https://arxiv.org/abs/2308.08155)
- agent의 기법
	- chain-of-thought prompting
		- [Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903)
	- iterative refinement
		- [Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366)
	- self-improvement
		- [Large Language Models Can Self-Improve](https://arxiv.org/abs/2210.11610)
	- external tool intergration
		- [ToolkenGPT: Augmenting Frozen Language Models with Massive Tools via Tool Embeddings](https://arxiv.org/abs/2305.11554)
		- [ToolLLM: Facilitating Large Language Models to Master 16000+ Real-world APIs](https://arxiv.org/abs/2307.16789)
		- [Toolformer: Language Models Can Teach Themselves to Use Tools](https://openreview.net/forum?id=Yacmpz84TH)
- 다양한 분야에 적용
	- software engineering
		- [SWE-bench: Can Language Models Resolve Real-World GitHub Issues?](https://arxiv.org/abs/2310.06770)
		- [OpenHands: An Open Platform for AI Software Developers as Generalist Agents](https://arxiv.org/abs/2407.16741)
		- [SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering](https://arxiv.org/abs/2405.15793)
	- cybersecurity
		- [Enigma: Enhanced interactive generative model agent for ctf challenges](https://arxiv.org/abs/2409.16165)
		- [LLM Agents can Autonomously Hack Websites](https://arxiv.org/abs/2402.06664)
		- [CYBERSECEVAL 3: Advancing the Evaluation of Cybersecurity Risks and Capabilities in Large Language Models](https://arxiv.org/abs/2408.01605)
	- medical diagnosis
		- [Towards Accurate Differential Diagnosis with Large Language Models](https://arxiv.org/abs/2312.00164)
		- [AgentClinic: a multimodal agent benchmark to evaluate AI in simulated clinical environments](https://arxiv.org/abs/2405.07960)
		- [Towards Conversational Diagnostic AI](https://arxiv.org/abs/2401.05654)
- embodied problem에 적용
	- autonomous robotics
		- [π0: A Vision-Language-Action Flow Model for General Robot Control](https://arxiv.org/abs/2410.24164)
		- [RT-1: Robotics Transformer for Real-World Control at Scale](https://arxiv.org/abs/2212.06817)
		- [Surgical Robot Transformer (SRT): Imitation Learning for Surgical Tasks](https://arxiv.org/abs/2407.12998)
	- web tasks
		- [Mind2Web: Towards a Generalist Agent for the Web](https://arxiv.org/abs/2306.06070)
		- [A Real-World WebAgent with Planning, Long Context Understanding, and Program Synthesis](https://arxiv.org/abs/2307.12856)
		- [WebVoyager: Building an End-to-End Web Agent with Large Multimodal Models](https://arxiv.org/abs/2401.13919)
		- [Agent Q: Advanced Reasoning and Learning for Autonomous AI Agents](https://arxiv.org/abs/2408.07199)
		- [World of Bits: An Open-Domain Platform for Web-Based Agents](https://proceedings.mlr.press/v70/shi17a.html)
	- game playing
		- [Project Sid: Many-agent simulations toward AI civilization](https://arxiv.org/abs/2411.00114)
		- [ChessGPT: Bridging Policy Learning and Language Modeling](https://arxiv.org/abs/2306.09200)
		- [Voyager: An Open-Ended Embodied Agent with Large Language Models](https://arxiv.org/abs/2305.16291)
- LLM agent의 더 폭넓은 개요 ⟶ [A Survey on Large Language Model based Autonomous Agents](https://arxiv.org/abs/2308.11432)

### Automated machine learning
- ML agent의 성능 평가를 위해 Kaggle 플랫폼을 벤치마크로 활용
- 대표적인 AutoML 평가 프레임워크
	- MLE-Bench [MLE-bench: Evaluating Machine Learning Agents on Machine Learning Engineering](https://arxiv.org/abs/2410.07095) -> 74개 챌린지를 벤치마크롤 활용
	- DS-Bench [DSBench: How Far Are Data Science Agents to Becoming Data Science Experts?](https://arxiv.org/abs/2409.07703) -> 74개 챌린지를 벤치마크로 활용
	- MLAgentBench [MLAgentBench: Evaluating Language Agents on Machine Learning Experimentation](https://arxiv.org/abs/2310.03302) -> 6개 챌린지를 벤치마크로 활용
- ML solver: Kaggle 챌린지를 자동으로 해결
	- AIDE [AIDE: Human-Level Performance in Data Science Competitions](https://www.weco.ai/blog/technical-report) -> 머신러닝 코드 내 특징(feature) 구현, 버그 수정, 코드 리팩토링 자동화
	- CodeActAgent(OpenHands) [OpenHands: An Open Platform for AI Software Developers as Generalist Agents](https://arxiv.org/abs/2407.16741) -> ML 문제 해결을 위한 자동 코드 작성 및 최적화 수행
	- ReseartchAgent(MLAB) [MLAgentBench: Evaluating Language Agents on Machine Learning Experimentation](https://arxiv.org/abs/2310.03302) -> MLAgentBench의 일부. 자동 모델링 및 최적화 수행
	- Agent K [Large Language Models Orchestrating Structured Reasoning Achieve Kaggle Grandmaster Level](https://arxiv.org/abs/2411.03562) -> Kaggle 챌린지의 URL을 입력하면 인간 수준의 성능으로 문제 해결 

### AI in Scientific Discovery
- Mathematics [Mathematical discoveries from program search with large language models](https://www.nature.com/articles/s41586-023-06924-6) -> 새로운 수학적 패턴 및 정리를 발견하는 데 활용
- Material Science [Scaling deep learning for materials discovery](https://www.nature.com/articles/s41586-023-06735-9) -> 신소재 탐색 및 최적화
- Chemistry []() -> 신약 개발 및 분자 구조 예측 
- Algorithm Discovery []() -> 최적화 및 자동 알고리즘 생성
- Computational Biology []() -> 유전체 분석 및 단백질 상호작용 예측
- => 연구들은 AI 연구 수행의 도구로 활용하여, AI가 연구를 자율적으로 수행하기 보단 연구를 보조하는 역할로 발전하고 있다.

### LLMs for research related tasks


### LLMs for autonomous research


## 3. Agent Laboratory
---







