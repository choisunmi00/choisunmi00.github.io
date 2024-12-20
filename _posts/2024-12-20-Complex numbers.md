---
title: 1. Complex numbers
author: csm
date: 2024-12-20 15:33:00 +0900
categories: [Engineering, Engineering Mathmatics]
tags: [lecture]
description: 전자공학과 공업수학 - www.youtube.com/@KWONNAMKYU
---

## Complex numbers
---
- 허수(imaginary number): 제곱하여 음수가 되는 수, 2차 이상의 방정식의 근을 설명
  - $$z = x + jy$$ or $$z = (x, y)$$
    - $$j^{2} = -1$$
  - $$j$$ : imaginary number, $$x$$ : real part, $$y$$ : imaginary part
    - $$x = \mathbf{Re}(z)$$, $$y = \textbf{Im}(z)$$
  - if $$x = 0$$, then $$z = jy$$ is called pure imaginary

- for two complex numbers $$z_{1} = x_{1} + jy_{1}$$ and $$z_{2} = x_{2} + jy_{2}$$
  - Addition
    - ```
      $$z_{1} + z_{2} = x_{1} + jy_{1} + x_{2} + jy_{2}$$  
      $$              = (x_{1} + x_{2}) + j(y_{1} + y_{2})$$
      ```
  - Subtraction
    - ```
      $$z_{1} - z_{2} = x_{1} + jy_{1} - (x_{2} + jy_{2})$$
      $$              = (x_{1} - x_{2}) + j(y_{1} - y_{2})$$
      ```
  - Multiplication
    - ```
      $$z_{1} \times z_{2} = (x_{1} + jy_{1})(x_{2} + jy_{2})
                           = x_{1}x_{2} + jx_{1}y_{2} + jy_{1}x_{2} + j^{2}y_{1}y_{2}
                           = x_{1}x_{2} + (-y_{1}y_{2}) + j(x_{1}y_{2} + y_{1}x_{2})
      ```
  - Division
    - 아래의 식을 만족하는 $$A, B$$ 찾기
      ```
      $$z = \frac{z_1}{z_2} = \frac{x_1 + jy_1}{x_2 + jy_2} \rightarrow A + jB$$
      ```
    - 분모의 실수화
      ```
      $$       
      \frac{x_1 + jy_1}{x_2 + jy_2} \times \frac{x_2 - jy_2}{x_2 - jy_2} =
      \frac{x_1x_2 + y_1y_2 + j(x_2y_1 - x_1y_2)}{x_2^2 + y_2^2}
      
      = \frac{x_1x_2 + y_1y_2}{x_2^2 + y_2^2} + j\frac{x_2y_1 - x_1y_2}{x_2^2 + y_2^2}
      $$
      ```

## Complex plane
---
- Geometric representation of complex numbers
  - Cartesian coordinate system
    - Horizontal $$x$$-axis -> real axis
    - Vertical $$y$$-axis -> imaginary axis
- Visualization for addition and subtraction: 벡터의 덧셈, 뺄셈과 일치
  - Addition: $$z_{1} + z_{2}$$ -> $$(x_{1} + x_{2}, y_{1} + y_{2})$$
  - Subtraction: $$z_{1} - z_{2}$$ -> $$(x_{1} - x_{2}, y_{1} - y_{2})$$

## Complex conjugate numbers
---
- 켤레(conjugate) 복소수




## Polar form of complex numbers
### Triangle inequality
### Multiplication and division in polar form\
## Roots
