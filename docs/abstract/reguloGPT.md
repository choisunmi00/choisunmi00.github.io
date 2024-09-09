---
title: reguloGPT
nav_order: 7
---

# reguloGPT
{: .no_toc }
[reguloGPT: Harnessing GPT for Knowledge Graph Construction of Molecular Regulatory Pathways ](https://pubmed.ncbi.nlm.nih.gov/38313267/)

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---
## Background

- MRP: Molecualr Regulartory Pathways(분자 조절 경로).     
- KG: Knowledge Graph(지식 그래프). 개체, 사건 또는 개념과 같은 실체에 대한 상호 연결된 설명 모음     
- end-to-end learning: 입력에서 출력까지 파이프라인 네트워크 없이 신경망으로 한 번에 처리. 양끝단 상에서 라벨링된 데이터가 많을 때 잘 동작하는 경향이 있다.           
- m<sup>6</sup>A(N6-methyladenosine): mRNA(단백질 설계도)에 부여하는 화학적 변형. 유전자 발현을 조절하기 위한 기작.      

## 0. Abstract

- Motivation: MRP에 대한 KG 구축이 현재로선 미미하다.

- Results: reguloGPT의 문헌에서 생물학적 지식 추출 가능성         
  reguloGPT 통한 예측 -> m<sup>6</sup>A-KG 구축 -> m<sup>6</sup>A 조절 메커니즘 밝힘.       
  컨텍스트 인식 관계형 그래프 도입 / m<sup>6</sup>A 제목 및 벤치마크 데이터 세트 제작        
  G-Eval 체계: 성능 평가 위해 GPT-4를 활용. 기존 주석 기반 평가와 일치.         

- Availability and implementation:     
   reguloGPT의 소스 코드, m<sup>6</sup>A 관련 제목 및 벤치마크 데이터 세트, m<sup>6</sup>A-KG   
   https://github.com/Huang-AI4Medicine-Lab/reguloGPT

- Key words: MRP, KG, GPT, In Context Learning, m6A mRNA Methylation                   

## 1. Introduction    

- 왜 필요한가   
  MRP: 생물의학 연구 핵심.     
  KG: MRP를 위한 도구. KG는 복잡한 생물학적 지식을 구조화하여 표현한다.  
  -> 문헌에서 지식 추출 자동화: NLP(Natural Language Processing) 이용  
  
- 현재는 어떤가  
  현재로서는 NLP를 통해 복잡한 MRP를 매핑하기에는 부적절하다.
  
  ![Fig. 1.](https://www.ncbi.nlm.nih.gov/pmc/articles/instance/10836076/bin/nihpp-2024.01.27.577521v1-f0001.jpg)  
  METTLL3가 위암의 진행을 조절하는 메커니즘을 전체적으로 설명
  MRP를 위해 이러한 그래프를 얻기 위해서는 기존 NLP, 컨텍스트 식별, NER(Named Entity Recignition), N항 RE(N-ary Relationship Extraction) 필요.

  여러 시스템이 있지만 N항 RE는 생물의학 분야에서 충분히 탐구되지 못했다.  
  
- 이 논문에서는  
  주어진 문장에서 m<sup>6</sup>A methylation의 컨텍스트별 MRP를 위해 컨텍스트 인식 관계형 그래프의 end-to-end 구성에서 GPT-4 기능을 탐구한다.
  - 논문의 기여  
    1) end-to-end joint NER, N-ary 위한 reguloGPT, GPT-4 구동 ICL prompt 제안.
       reguloGPT에 대한 기준선인 few-shot 및 CoT 프롬프트 설계  
    2) 컨텍스트 인식 관계형 그래프 표현 도입  
    3) 벤치마크 데이터 세트 구축  
    4) 프롬프트의 성능 평가  
    5) G-Eval 체계 도입: 프롬프트를 활용하여 추출된 그래프를 평가  
    6) m<sup>6</sup>A-KG 구축: 2013-2023년 PubMed에서 수집한 문헌 제목에 reguloGPT 적용

## 2. Methods

- reguloGPT: end-to-end 추출 위해 GPT-4 기반 ICL 활용. 6개의 모듈을 포함한다.  

  ![Fig. 2.](https://www.ncbi.nlm.nih.gov/pmc/articles/instance/10836076/bin/nihpp-2024.01.27.577521v1-f0002.jpg)  
  PubMed에서 컨텍스트 인식 KG를 구축하기 쉽도록 reguloGPT를 설계  
