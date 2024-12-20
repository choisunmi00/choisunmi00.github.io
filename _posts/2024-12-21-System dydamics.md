---
title: System dydamics
author: csm
date: 2024-12-21 02:33:00 +0900
categories: [Biology, System dydamics]
tags: [lecture]
description: 
math: true
---

## Reaction-Diffusion system
---
- $$\frac{\partial u}{\partial t} = D \frac{\partial^{2} u}{\partial x^{2}} + f(u)$$
- $$\frac{\partial v}{\partial t} = D \frac{\partial^{2} v}{\partial x^{2}} + f(v)$$
- ($$u$$: 반응물, $$v$$: 생성물, $$D$$: 확산 계수, $$f$$: 반응 속도, $$x$$: 공간 좌표)

## Turing pattern
---
- 확산제: $$U_{t}  = D_{u} \Delta U + a-U- \rho R(U,V)$$
- 억제제: $$V_{t}  = D_{v} \Delta V + a-U- \rho R(U,V)$$
- $$R(U,V) = {dUV} over {e + fU + gU^{2}}$$
- 확산제와 억제제에 의해 농도와 분포가 시간에 따라 경쟁 -> 무늬(패턴) 형성
