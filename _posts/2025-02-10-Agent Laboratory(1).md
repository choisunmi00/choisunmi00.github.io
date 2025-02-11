---
title: >-
    [논문 요약]  Agent Laboratory(1)
author: csm
date: 2025-02-10 14:10:00 +0900
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
	<img src="https://github.com/SamuelSchmidgall/AgentLaboratory/raw/main/media/AgentLab.png" alt="1" width="50%" height="50%"/>
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
- Mathematics: 새로운 수학적 패턴 및 정리를 발견하는 데 활용 [Mathematical discoveries from program search with large language models](https://www.nature.com/articles/s41586-023-06924-6) 
- Material Science: 신소재 탐색 및 최적화 [Scaling deep learning for materials discovery](https://www.nature.com/articles/s41586-023-06735-9)
- Chemistry: 신약 개발 및 분자 구조 예측 
	- [Simulating 500 million years of evolution with a language model](https://www.biorxiv.org/content/10.1101/2024.07.01.600583v1)
	- [Highly accurate protein structure prediction with AlphaFold](https://www.nature.com/articles/s41586-021-03819-2)
- Algorithm Discovery: 최적화 및 자동 알고리즘 생성 [Discovering faster matrix multiplication algorithms with reinforcement learning](https://www.nature.com/articles/s41586-022-05172-4) 
- Computational Biology: 유전체 분석 및 단백질 상호작용 예측 [Automating Exploratory Proteomics Research via Language Models](https://arxiv.org/abs/2411.03743)
- => 연구들은 AI 연구 수행의 도구로 활용하여, AI가 연구를 자율적으로 수행하기 보단 연구를 보조하는 역할로 발전하고 있다.

### LLMs for research related tasks
- Code Generation: 연구 및 개발 과정에서 코드 자동 생성
	- [Evaluating Large Language Models Trained on Code](https://arxiv.org/abs/2107.03374)
	- [CodeGen: An Open Large Language Model for Code with Multi-Turn Program Synthesis](https://arxiv.org/abs/2203.13474)
- End-to-End Software Development: 전체 소프트웨어 개발 자동화
	- [REPOEXEC: Evaluate Code Generation with a Repository-Level Executable Benchmark](https://arxiv.org/abs/2406.11927v2)
	- [HyperAgent: Generalist Software Engineering Agents to Solve Coding Tasks at Scale](https://arxiv.org/abs/2409.16299)
	- [Experiential Co-Learning of Software-Developing Agents](https://arxiv.org/abs/2312.17025)
	- [ChatDev: Communicative Agents for Software Development](https://arxiv.org/abs/2307.07924)
- Code Generation for Discovery: 새로운 연구 아이디어 탐색 및 구현
	- [ScienceAgentBench: Toward Rigorous Assessment of Language Agents for Data-Driven Scientific Discovery](https://arxiv.org/abs/2410.05080)
	- [ProtAgents: Protein discovery via large language model multi-agent collaborations combining physics and machine learning](https://arxiv.org/abs/2402.04268)
	- [BLADE: Benchmarking Language Model Agents for Data-Driven Science](https://arxiv.org/abs/2408.09667)
	- [DS-Agent: Automated Data Science by Empowering Large Language Models with Case-Based Reasoning](https://arxiv.org/abs/2402.17453)
	- [InfiAgent-DABench: Evaluating Agents on Data Analysis Tasks](https://arxiv.org/abs/2401.05507)
	- [Autonomous LLM-driven research from data to human-verifiable research papers](https://arxiv.org/abs/2404.17605)
	- [Navigating LLM Ethics: Advancements, Challenges, and Future Directions](https://arxiv.org/abs/2406.18841)
- Research Question-Answering: 논문 및 연구 자료에 대한 질의응답 지원
	- [ScholarChemQA: Unveiling the Power of Language Models in Chemical Research Question Answering](https://arxiv.org/abs/2407.16931)
	- [PaperQA: Retrieval-Augmented Generative Agent for Scientific Research](https://arxiv.org/abs/2312.07559)
	- [BioKGBench: A Knowledge Graph Checking Benchmark of AI Agent for Biomedical Science](https://arxiv.org/abs/2407.00466)
	- [CS-Bench: A Comprehensive Benchmark for Large Language Models towards Computer Science Mastery](https://arxiv.org/abs/2406.08587)
- Research Ideation: 새로운 연구 주제 및 가설 탐색
	- [ResearchAgent: Iterative Research Idea Generation over Scientific Literature with Large Language Models](https://arxiv.org/abs/2404.07738)
	- [SciAgents: Automating scientific discovery through multi-agent intelligent graph reasoning](https://arxiv.org/abs/2409.05556)
	- [Chain of Ideas: Revolutionizing Research Via Novel Idea Development with LLM Agents](https://arxiv.org/abs/2410.13185)
	- [Can LLMs Generate Novel Research Ideas? A Large-Scale Human Study with 100+ NLP Researchers](https://arxiv.org/abs/2409.04109)
- Automated Paper Reviewing: 논문 평가 및 피드백 자동화
	- [MARG: Multi-Agent Review Generation for Scientific Papers](https://arxiv.org/abs/2401.04259)
	- [Can large language models provide useful feedback on research papers? A large-scale empirical analysis](https://arxiv.org/abs/2310.01783)
	- [The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery](https://arxiv.org/abs/2408.06292)
	- [CycleResearcher: Improving Automated Research via Automated Review](https://arxiv.org/abs/2411.00816)
- Literature Search: 문헌 검색 및 분석
	- [LitSearch: A Retrieval Benchmark for Scientific Literature Search](https://arxiv.org/abs/2407.18940)
	- [ResearchArena: Benchmarking LLMs' Ability to Collect and Organize Information as Research Agents](https://arxiv.org/abs/2406.10291)
	- [SciLitLLM: How to Adapt LLMs for Scientific Literature Understanding](https://arxiv.org/abs/2408.15545)
	- [CiteME: Can Language Models Accurately Cite Scientific Claims?](https://arxiv.org/abs/2407.12861)
- Predicting the Outcome of Experiments: 연구 실험의 가능성 및 결과 예측
	- [Predicting Results of Social Science Experiments Using Large Language Models](https://docsend.com/view/ity6yf2dansesucf)
	- [ChatGPT as Research Scientist: Probing GPT's Capabilities as a Research Librarian, Research Ethicist, Data Generator and Data Predictor](https://arxiv.org/abs/2406.14765)
	- [Large language models surpass human experts in predicting neuroscience results](https://www.nature.com/articles/s41562-024-02046-9)
	- [Automated Social Science: Language Models as Scientist and Subjects](https://arxiv.org/abs/2404.11794)
	- [MASSW: A New Dataset and Benchmark Tasks for AI-Assisted Scientific Workflows](https://arxiv.org/abs/2406.06357)
- Reasearch Ideation 분야에서의 상반된 연구 결과
	- LLM이 연구자보다 더 참신한 아이디어 생성
		- [Can LLMs Generate Novel Research Ideas? A Large-Scale Human Study with 100+ NLP Researchers](https://arxiv.org/abs/2409.04109)
	- LLM을 사용할 때 창의성 감소
		- [Art or Artifice? Large Language Models and the False Promise of Creativity](https://arxiv.org/abs/2309.14556)
	- LLM이 생성하는 아이디어의 균질화(homogeneous effects) 경향
		- [Homogenization Effects of Large Language Models on Human Creative Ideation](https://dl.acm.org/doi/10.1145/3635636.3656204)
		- [Shared Imagination: LLMs Hallucinate Alike](https://arxiv.org/abs/2407.16604)
- Human-AI collaboration에서 상반된 연구 결과
	- AI와 협력할 때 더 참신한 아이디어 도출
		- [How AI Ideas Affect the Creativity, Diversity, and Evolution of Human Ideas: Evidence From a Large, Dynamic Experiment](https://arxiv.org/abs/2401.13481)
		- [How AI Processing Delays Foster Creativity: Exploring Research Question Co-Creation with an LLM-based Agent](https://dl.acm.org/doi/10.1145/3613904.3642698)
	- AI와 협업할 경우 창의성 감소
		- [Does Writing with Language Models Reduce Content Diversity?](https://arxiv.org/abs/2309.05196)
- => 현재 LLM의 한계를 고려했을 때, 연구에서 가장 강력한 시스템은 사람이 주도하는 아이디어 생성과 LLM 기반 워크플로우를 결합하는 방식이 될 것임을 시사사

### LLMs for autonomous research
- 자율 연구를 위한 주요 LLM 시스템
	- [The Virtual Lab: AI Agents Design New SARS-CoV-2 Nanobodies with Experimental Validation](https://www.biorxiv.org/content/10.1101/2024.11.11.623004v1)
		- LLM 에이전트 팀이 연구자와 협력하여 연구 수행
		- 연구자가 고차원적 피드백 제공, SARS-CoV-2의 최근 변이에 대응하는 새로운 nanobody 결합체를 생성하는 성과 달성
	- ChemCrow [Augmenting large language models with chemistry tools](https://www.nature.com/articles/s42256-024-00832-8) & Coscientist [Autonomous chemical research with large language models](https://www.nature.com/articles/s41586-023-06792-0)
		- 화학 분야에서 자율적인 연구 아이디어 생성 및 실험 수행 가능성 입증
	- ResearchAgent [ResearchAgent: Iterative Research Idea Generation over Scientific Literature with Large Language Models](https://arxiv.org/abs/2404.07738)
		- 연구 아이디어 생성, 실험 설계, 반복적 개선(iterative refinement) 과정 자동화
		- human evaluation criteria에 맞춘 reviewing agents의 피드백을 반영하여 연구 품질 향상
	- The AI Scientist [The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery](https://arxiv.org/abs/2408.06292)
		- end-to-end scientific discovery 수행
		- 코드 작성, 실험 실행, automated peer review를 포함한 완전한 연구 프로세스 자동화
- LLM 연구 아이디어 생성의 한계
	- [Can LLMs Generate Novel Research Ideas? A Large-Scale Human Study with 100+ NLP Researchers](https://arxiv.org/abs/2409.04109) 실현 가능성과 구현 세부 사항에서 부족
- => 현재 최적 연구 시스템은 LLM을 보조 도구로 활용하여 연구자가 더욱 효과적으로 아이디어를 구체화하고 실험을 진행하는 방식








