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
- 확산제와 억제제에 의해 농도와 분포가 시간에 따라 경쟁 -> 무늬(패턴) 형성

## Lotka-Volterra equation
---
### 단순 개체군 성장 모델
#### 지수적 모형: 이상적 모델
- $$$$
  $$\frac{dN}{dt} = kN \Rightarrow N(t) = N_0 e^{kt}$$
  <img src="https://i.ibb.co/4fSnWW3/1.webp" alt="3" width="100%" height="100%"/>     
  

#### 로지스트형 모델: 환경수용적 고려 모델
- $$$$
  $$\frac{dN}{dt}$$   
  $$= (B - D)N = (B_0 - D_0 N)N$$  
  $$= B_0 \left( 1 - \frac{D_0 N}{B_0} \right) N = r \left( 1 - \frac{N}{C} \right) N$$  
  $$\Rightarrow N(t) = \frac{C N_0}{N_0 + (C - N_0)e^{-rt}}$$  
  <img src="https://i.ibb.co/ZGw6BSW/2.webp" alt="4" width="100%" height="100%"/>  

- 한계
  1. 개체수의 증가가 연속적 (곤충의 경우 세대가 겹치지 않는 등 본래 특정 시기에만 증가)
  2. 개체수의 증가가 증가율 억제. 다만 부모와 아이가 같은 비율로 억제에 관련. (본래 부모가 더 많이 억제에 관련된다.)
  3. 개체수의 증가는 증가한 순간부터 증가율에 영향을 준다. (본래 상당한 시간 소요요)

### 포식자 피식자 모델


- $$$$
  $$\frac{dx}{dt} = rx - axy$$, $$\frac{dy}{dt} = -my + bxy$$   
  $$\frac{dy}{dx} = \frac{-my + bxy}{rx - axy}$$
  <img src="https://i.ibb.co/MgQqCJ4/image.webp" alt="1" width="30%" height="30%"/>    
- 응용
  - 포식자 2: $$\frac{dx}{dt} = -x + xy$$
  - 포식자 1: $$\frac{dy}{dt} = -y + 2yz - xy$$
  - 피식자: $$\frac{dz}{dt} = 2z - z^{2} - yz$$

### 경쟁 모델

- $$\frac{dx}{dt} = r_1 x \left( \frac{K_1 - x}{K_1} \right) / \frac{dy}{dt} = r_2 y \left( \frac{K_2 - y}{K_2} \right)$$   
  $$\Rightarrow \frac{dx}{dt} = r_1 x \left( \frac{K_1 - x - \alpha y}{K_1} \right) / \frac{dy}{dt} = r_2 y \left( \frac{K_2 - y - \beta x}{K_2} \right)$$  
- 개체수 증가율이 0이 되는 등경선(isocline)   
  $$K_1 - x - \alpha y = 0, x = K_1 - \alpha y / K_2 - y - \beta y = 0, y = K_2 - \beta x$$   
  <img src="https://i.ibb.co/jyDkgcv/image.webp" alt="2" width="60%" height="60%"/>   

## [국가R&D연구보고서] 생물학적 확산 및 성장의 수학적 접근
---
- [Mathematical modeling for biological diffusion and population dynamics](https://scienceon.kisti.re.kr/srch/selectPORSrchReport.do?cn=TRKO202200016297#;)  

### 1.1.b
- chemotaxis 이론
- Starvation Driven Diffusion(SDD)
  - $$$$
    $$u_{t} =  \triangle(\gamma(s)u) = \nabla \cdot (r(s))$$    
  - $$\gamma$$: 먹이를 찾아 떠나는 rate 또는 departing probobility
  - $$\gamma$$는 $$r$$의 증가 함수
  - $$r$$: departing probobility
  - $$s$$: starvation measure, $$s = \frac{u}{m}$$ ($$u$$: 인구 밀도, $$m$$: 먹이의 양)  

## Bifurcation diagram
---
- [이 방정식을 알게 되면, 세상이 다르게 보일 겁니다!](https://youtu.be/LYyTLMyivUk?si=xRptSb_3-ojkg0Tn)
  - $$x_{n+1} = rx_{n}(1-x_{n})$$, $$r$$: 성장률
  - $$r$$에 따른 상태 및 주기 변화 
  - 시각화 ⟶ 망델브로(Mandelbrot)집합의 수직
  - 파이겐바움 상수(Feigenbaum constant): 보편성

## Cellular automata
---
### 1
- [Why Does Biological Evolution Work? A Minimal Model for Biological Evolution and Other Adaptive Processes](https://writings.stephenwolfram.com/2024/05/why-does-biological-evolution-work-a-minimal-model-for-biological-evolution-and-other-adaptive-processes/)  

### 2
- [Foundations of Biological Evolution: More Results & More Surprises](https://writings.stephenwolfram.com/2024/12/foundations-of-biological-evolution-more-results-more-surprises/?fbclid=IwY2xjawG_roFleHRuA2FlbQIxMQABHU7Yx639xzdS2-Hcblny6ajSpWGbHvZ_14bSy4FSQQqPSzTVGCm00brS_A_aem_0DuxGy7XqrpPR7Wlw4kH4g&sfnsn=mo)  