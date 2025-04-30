---
title: Learning Rate Scheduling
author: csm
date: 2025-04-30 09:10:00 +0900
categories: [AI, Fundamentals]
tags: [study]
description: Training Optimization Techniques, Learning Rate Scheduling
---

## Training Optimization Techniques
---
- Learning Rate Optimization
    - Learning Rate Scheduling: 학습률을 훈련 중에 동적으로 조정하여 모델 훈련을 최적화하는 기법
    - Adaptive Learning Rate: `Adam`, `Adagrad`, `RMSProp`과 같은 기법들은 각 파라미터마다 학습률을 조정하여 최적화
- Regularization Techniques
    - L1, L2 정규화: 모델이 과적합(overfitting)을 방지하도록 하여, 더 나은 일반화 성능 보장
    - Dropout: 네트워크의 일부 뉴런을 무작위로 끄는 방식으로, 과적합을 방지하고 네트워크의 알반화 성능을 높이는 방법
    - Batch Normalization: 각 batch에서 데이터를 정규화하여, 훈련을 안정화하고 학습 속도를 높이는 기법
    - Early Stopping: 훈련 중에 모델의 성능이 더 이상 향상되지 않으면 훈련을 일찍 종료시켜 과적합을 방지하는 기법
- Optimazation Algorithms
    - Gradient Descent: Batch GD, SGD, Mini-batch GD 등
    - Adaptive Gradient Descent: `Adam`, `Adagrad`, `RMSProp`등은 모든 파라미터에 대해 학습률을 개별적으로 조정하는 기법
- Initialization Techniques
    - Weight Initialization: 네트워크의 가중치를 어떻게 초기화할지 결정하는 기법. Xavier 초기화, He 초기화 등
    - Batch Initializaiton: 훈련 초기부터 배치를 정규화하여 학습을 안정화하는 기법
- Data Augmentation
    - 데이터 증강은 훈련 데이터의 변형을 통해 더 다양한 데이터를 학습하도록 하는 기법
    - 가상 샘플 생성
- Batch Processing
    - Mini-batch Learning: 큰 데이터셋을 작은 배치로 나누어 훈련하는 기법으로, 메모리 효율성을 높이고 속도 개선 
    - Batch Normalization: 미니배치에서 평균과 분산을 계산하여 훈련을 더 빠르고 안정적으로 개선
- Activation Functions
    - ReLU(Rectified Linear Unit), Leaky ReLU, ELU(Exponential Linear Unit) 등은 비선형성을 추가하여 모델이 복잡한 패턴을 학습할 수 있도록 도움
    - Sigmoid, tahh와 같은 함수는 출력 범위를 제한하여 네트워크 학습의 안정성을 높임
- Hyperparameter Tuning: 학습률, 배치 크기, 네트워크 아키텍처 등 모델 훈련의 하이퍼파라미터를 최적화하는 기법
- Efficient Learning Techniques: 훈련 시간을 줄이거나 모델 성능을 극대화 하는 기법. Model Pruning, Knowlede Distillation 등
- Training Acceleration: 모델 훈련을 더 빠르게 만들기 위한 기법들. GPU 병렬 처리, 분산 학습, mixed-percision training 등

## Learning Rate Scheduling
---
- Learning Rate Scheduling
    - 훈련 과정에서 learning rate을 동적으로 조정하는 기법. learnig rate는 모델이 파라미터를 업데이트할 때 얼마나 크게 조정할지 결정하는 중요한 하이퍼파라미터. 
    - 초기 학습에서 빠른 수렴을 돕고, 후반부에서 안정적인 수렴을 유도, 지역 최소값 탈출, 과적합 방지
- 주요 기법
    - Step Decay
        - 일정 epoc마다 학습률을 일정 비율로 감소시키는 방식
        - 학습률이 일정 간격으로 감소하여, 모델이 수렴할 때 점차 더 작은 단계로 업데이트
    - Exponential Decay
        - 학습률을 지수적으로 감소시키는 방식
        - 초기에는 급격하게 학습률이 감소하고, 후반부에는 더 천천히 감소하게 되어 모델이 점진적으로 최적화
    - Cosine Annealing
        - 학습률을 코사인 함수를 따르며 감소시키는 방식
        - 코사인 곡선처럼, 처음에는 빠르게 감소하다가 후반부에는 천천히 감소하는 형태. 학습 후반부에서 학습률을 더 세밀하게 조정할 수 있어 학습을 마무리할 때 성능을 높이기에 효과적
    - ReduceLROnPlateau
        - validation loss 또는 accuracy가 일정 에폭 동안 개선되지 않으면 학습률을 자동으로 감소시키는 방식
    - Cyclical Learning Rate (CLR)
        - 학습률을 주기적으로 증가시키고 감소시키는 방식
        - 최적의 학습률 범위 찾기
    - Warm-up Learning Rate
        - 학습 초기 단계에서 학습률을 천천히 증가시키는 방식. 불안정한 상태에서 갑자기 큰 업데이트를 하는 것을 방지
