---
title: System dynamics
author: csm
date: 2024-12-21 14:10:00 +0900
categories: [Biology, System dynamics]
tags: [study]
description: Reaction-Diffusion system, Turing pattern, Lotka-Volterra equation, 생물학적 확산 및 성장의 수학적 접근, Bifurcation diagram, Cellular automata
math: true
---

## Reaction-Diffusion system
---
- $$$$
  $$\frac{\partial u}{\partial t} = D \frac{\partial^{2} u}{\partial x^{2}} + f(u)$$
- $$$$
  $$\frac{\partial v}{\partial t} = D \frac{\partial^{2} v}{\partial x^{2}} + f(v)$$
- ($$u$$: 반응물, $$v$$: 생성물, $$D$$: 확산 계수, $$f$$: 반응 속도, $$x$$: 공간 좌표)

## Turing pattern
---
- 확산제: $$U_{t}  = D_{u} \Delta U + a-U- \rho R(U,V)$$
- 억제제: $$V_{t}  = D_{v} \Delta V + a-U- \rho R(U,V)$$
- $$$$
  $$R(U,V) = \frac{dUV}{e + fU + gU^{2}}$$
- 확산제와 억제제에 의해 농도와 분포가 시간에 따라 경쟁 ⟶ 무늬(패턴) 형성

## Lotka-Volterra equation
---
### 단순 개체군 성장 모델
#### 지수적 모형: 이상적 모델
- $$$$
  $$\frac{dN}{dt} = kN \Rightarrow N(t) = N_0 e^{kt}$$  
  ![image](https://github.com/user-attachments/assets/b1dfe224-28e0-411a-8fea-b17d4f325604)
     
  

#### 로지스트형 모델: 환경수용적 고려 모델
- $$$$
  $$\frac{dN}{dt}$$   
  $$= (B - D)N = (B_0 - D_0 N)N$$  
  $$= B_0 \left( 1 - \frac{D_0 N}{B_0} \right) N = r \left( 1 - \frac{N}{C} \right) N \Rightarrow N(t) = \frac{C N_0}{N_0 + (C - N_0)e^{-rt}}$$   
  ![image](https://github.com/user-attachments/assets/9700caae-d431-47cb-8807-ce3e07bd4ba3)
  

- 한계
  1. 개체수의 증가가 연속적 (곤충의 경우 세대가 겹치지 않는 등 본래 특정 시기에만 증가)
  2. 개체수의 증가가 증가율 억제. 다만 부모와 아이가 같은 비율로 억제에 관련. (본래 부모가 더 많이 억제에 관련된다.)
  3. 개체수의 증가는 증가한 순간부터 증가율에 영향을 준다. (본래 상당한 시간 소요)

### 포식자 피식자 모델

- $$$$
  $$\frac{dx}{dt} = rx - axy$$, $$\frac{dy}{dt} = -my + bxy$$   
  $$\frac{dy}{dx} = \frac{-my + bxy}{rx - axy}$$
  <img src="https://i.ibb.co/MgQqCJ4/image.webp" alt="1" width="40%" height="40%"/>    
- 응용
  - 포식자 2: $$\frac{dx}{dt} = -x + xy$$
  - 포식자 1: $$\frac{dy}{dt} = -y + 2yz - xy$$
  - 피식자: $$\frac{dz}{dt} = 2z - z^{2} - yz$$

### 경쟁 모델

- $$\frac{dx}{dt} = r_1 x \left( \frac{K_1 - x}{K_1} \right) \ /\  \frac{dy}{dt} = r_2 y \left( \frac{K_2 - y}{K_2} \right)$$   
  $$\Rightarrow \frac{dx}{dt} = r_1 x \left( \frac{K_1 - x - \alpha y}{K_1} \right)\  /\  \frac{dy}{dt} = r_2 y \left( \frac{K_2 - y - \beta x}{K_2} \right)$$  
- 개체수 증가율이 0이 되는 등경선(isocline)   
  $$K_1 - x - \alpha y = 0,\  x = K_1 - \alpha y$$  
  $$K_2 - y - \beta y = 0,\  y = K_2 - \beta x$$   
  <img src="https://i.ibb.co/jyDkgcv/image.webp" alt="2" width="80%" height="80%"/>   

## [국가R&D연구보고서] 생물학적 확산 및 성장의 수학적 접근
[Mathematical modeling for biological diffusion and population dynamics](https://scienceon.kisti.re.kr/srch/selectPORSrchReport.do?cn=TRKO202200016297#;)  

### 1.1.b 생물학적 종의 이질성 확산모델 개발 및 분석
- chemotaxis 이론
- Starvation Driven Diffusion(SDD)
  - $$$$
    $$u_{t} = \Delta(\gamma(s)u) = \nabla \cdot (r(s))$$    
    - $$\gamma$$: 먹이를 찾아 떠나는 rate 또는 departing probobility
    - $$\gamma$$는 $$r$$의 증가 함수
    - $$r$$: departing probobility
    - $$s$$: starvation measure, $$\ s = \frac{u}{m}$$ ($$u$$: 인구 밀도, $$m$$: 먹이의 양)  
  - 관련 성과 논문
    - 확산 방정식 해로 수렴 - [Diffusion of biological organisms: Fickian and Fokker-Planck type diffusions](https://doi.org/10.1137/18M1163944)
    - 종의 확산 방식 선택 - [Asymmetric dispersal and evolutional selection in two-patch system](https://www.aimsciences.org/article/doi/10.3934/dcds.2020043)
    - 확산 법칙에 따른 계수 영역 - [Biological advection and cross-diffusion with parameter regimes](https://www.aimspress.com/article/id/4552) 
- 생물학적 이동은 먹이에 대한 이동  
  food metric에 의한 거리 사용, 생물학적 의미의 확산
  - Beltrami - Laplace 연산자
  - $$$$
    $$u_{t} = \nabla \cdot (\frac{1}{m}\nabla(\frac{1}{m}u))$$
  - 관련 성과 논문
    - discrete kinetic 통해 유도 - [A discrete velocity kinetic model with food metric: chemotaxis traveling waves](https://pubmed.ncbi.nlm.nih.gov/27995380/)  
    - 수렴성, 특성 만족 등 - [Dispersal toward food: a study of a singular limit of an Allen-Cahn equation](https://pubmed.ncbi.nlm.nih.gov/28631042/)  

### 1.2.a 유한시간 extinction이 가능한 성장 모델 개발 및 분석
- 무한시간의 extinction ODE 모델: $$\frac{\partial}{\partial t}u = f(t, u),\  u(0) = u_{0} $$
- Lipschitz 연속성을 제거한 성장 모델  
  Lotka-Volterra predator-prey 모델의 reaction 함수를 불연속으로 만든 모델 
  - 관련 성과 논문: 모델 - [Predator-prey equations with constant harvesting and planting](https://pubmed.ncbi.nlm.nih.gov/30194968/)  
  - $$ u_t = d_u \Delta u + u(1 - \nu) + c_u \chi_{\{u > 0\}}$$  
    $$ v_t = d_v \Delta v + \nu(u - 1) + c_v \chi_{\{v > 0\}}$$  
    $$ u(0, x) \geq 0, \quad v(0, x) \geq 0$$  
    $$ t > 0, \quad x \in \Omega$$  
    - $$c_u \chi_{\{u > 0\}} \ /\  c_v \chi_{\{v > 0\}}$$: reaction function이 $$u = 0 \ /\  v = 0$$에서 불연속
  - 모델에 대한 stability analysis ⟶ Turing pattern
  - nonlinearity가 아닌 finite time extinction 통해 다양한 패턴 형성 
    - 관련 성과 논문: 반응-확산 방정식 고려 - [Discontinuous nonlinearity and finite time extinction](https://doi.org/10.1137/17M1136067)  

### 1.2.b 생물학적 상황에 맞는 성장 모델의 개발 및 분석
- 종의 population dynamics는 확산과 관련지어 이해
- cross diffusion의 모델과 생물학적인 Lotka-Volterra competition system에 대한 개발
  - 관련 성과 논문: 두 가지 개발 진행 - [Evolution of dietary diversity and a starvation driven cross-diffusion system as its singular limit](https://arxiv.org/abs/2011.10304)  
- logistic reaction term이 있는 chemotaxis 모델: population dynamics가 아닌 dispersal에 의한 패턴 형성
  - 행의 존재와 패턴 연구
  - 관련 성과 논문: reaction term - [Global dynamics and pattern formation under density-suppressed motility](https://doi.org/10.1137/17M1144647)  
  - $$$$
    $$ u_t = \Delta (\gamma(v) u) + u(1 - u)$$  
    $$ v_t = \epsilon \Delta v + u - v$$  

## Bifurcation diagram
[이 방정식을 알게 되면, 세상이 다르게 보일 겁니다!](https://youtu.be/LYyTLMyivUk?si=xRptSb_3-ojkg0Tn)  
- $$x_{n+1} = rx_{n}(1-x_{n})$$,  $$r$$: 성장률
- $$r$$에 따른 상태 및 주기 변화 
- 시각화 ⟶ 망델브로(Mandelbrot)집합의 수직
- 파이겐바움 상수(Feigenbaum constant): 보편성

## Cellular automata
---
### Model
[Why Does Biological Evolution Work? A Minimal Model for Biological Evolution and Other Adaptive Processes](https://writings.stephenwolfram.com/2024/05/why-does-biological-evolution-work-a-minimal-model-for-biological-evolution-and-other-adaptive-processes/)  

- Biological organisms are computational systems that develop by following simple underlying rules.
- "Point mutations" ⟶ Routinely reach rules that give long-lived patterns with elaborate morphological structure
- "Fitness" of cellular automaton rules: Assuming that if the patterns don't terminate at all they should be considered to have fitness zero.
- Multiway graph
  - "fitness-neutral sets": Rules that have the same fitness and that can be transformed into each other by mutations
- "Fitness landscape": Fitness shown as height
  - Evolution is proceeding along paths that never go to nodes with lower heights on the fitness landscape.
- Deterministic systems: Given a particular cellular automaton rule and a particular initial condition, every aspect of the generated behavior is completely determined.
- Sexual Reproduction: To understand the big picture of adaptive evolution, it seems sufficient to consider only mutation.
- Computational irreducibility: Computational irreducibility implies that around every point in rule space, there'll be a certain "effective randomness" to fitnesses one sees. If there are many dimensions to rule space, that means it's overwhelmingly likely that there'll be "paths to success" in some directions from that point.
  - Complexity in biology: It's essentially a reflection of computational irreducibility. / Adaptive evolution manages to "solve a problem". 
  - Rules found by adaptive evolution ⟶ "apparent mechanism", "overall orchestration"
  - "High fitness" rules that we find through adaptive evolution: Manifest computational reducibility.

### Even more
[Foundations of Biological Evolution: More Results & More Surprises](https://writings.stephenwolfram.com/2024/12/foundations-of-biological-evolution-more-results-more-surprises/?fbclid=IwY2xjawG_roFleHRuA2FlbQIxMQABHU7Yx639xzdS2-Hcblny6ajSpWGbHvZ_14bSy4FSQQqPSzTVGCm00brS_A_aem_0DuxGy7XqrpPR7Wlw4kH4g&sfnsn=mo)  

- Model: Cellular automaton rules - genotype, then run to produce - phenotype
  - Adaptively evolve the genotype rules: Making single "point mutations" to the list of outcomes from the rules
- Fitness functions considering : Features of phenotype - pattern height, width and aspect ratio
  - Exact-match fitness functions ⟶ too intricate a fitness function, then our rule spaces won't contain rules that successfully maximize it, and our adaptive evolution process will end up with a variety of not-very-good approximations.
- "Blade": Uses repetitive patterns that can persist
- Fitness function that changes with time 
  - Aspect ratio fitness function whose target value increases linearly with time: Fitness function defines the overall "goals" of the system; however, the system does not achieve the goals well.
- Reverse: "lifetime minimization" multiway graph
  - forward ↔ reverse graphs
- When modifying initial conditions in a fixed region: to be more about "extending existing mechanisms" than introducing new ones
- 2D Cellular automata
- Turing machine: Principle of Computational Equivalence - same core phenomena of adaptive evolution
  - Multiway turing machines
- Biological evolution ⟶ doing is to “recruit” lumps of irreducible computation, and set them up so as to achieve “fitness objectives”
- Ruliad