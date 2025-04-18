---
title: >-
    [연구] Simulation 제작(1)
author: csm
date: 2025-02-26 14:10:00 +0900
categories: [Research, Simulation]
tags: [project]
description: 단일세포 및 공간전사체에 합성데이터셋을 생성하기 위한 동역학 모델 프레임워크
---

## 개요
---
- Synthetic dataset을 생성하는 도구 출판이 목적
- Network science 분야와 연결

## Nezzle로 시각화
---
- input이 배열(`layers`, 계층구조)로 들어갈 때 각 종류의 피드백이 네트워크 형성 방식에 따라 결정됨
- 각 노드는 index(`row_idx`, `col_idx}`)로 구분
- 각 피드백은 index(`src.iden`, `tar.iden`)으로 구분
- 각 피드백은 랜덤한 갯수로 추가
- code
    ```python
    def update(nav, net):
        layers = [6, 4, 7, 5, 8, 3, 6]
        net, entity = create_network(layers)

        for col_idx in range(len(layers)):
            create_edges(net, entity, col_idx)
        
        feedback_types = ["feedbackloop", "crosstalk"]
        polarity_types = ["positive", "negative"]
        
        num_edges = random.randint(20, 50)

        for _ in range(num_edges):
            f_type = random.choice(feedback_types)

            if f_type == "feedbackloop":
                direction_types = ["utd", "dtu"]
            else:
                direction_types = ["utd", "dtu", "same"]

            d_type = random.choice(direction_types)
            p_type = random.choice(polarity_types)

            add_feedback_edges(net, entity, 1, f_type=f_type, d_type=d_type, p_type=p_type)
            
        nav.append_item(net)
    ```
- img1  

    <img src="https://github.com/user-attachments/assets/a83ef764-910f-467a-b8c6-91fa69d7b514" alt="1" width="50%" height="50%"/>  

- img2  

    <img src="https://github.com/user-attachments/assets/acee0ae1-e776-4e3f-97f9-bcaf41327a19" alt="2" width="50%" height="50%"/>  


## NetworkX로 구현
---
- 생성된 피드백의 종류와 갯수 출력
- code
    ```python
    import networkx as nx
    import matplotlib.pyplot as plt
    import random

    def create_network(layers):
        G = nx.DiGraph()
        entity = []

        for col_idx, num_nodes in enumerate(layers):
            col_nodes = []

            for row_idx in range(num_nodes):
                node_id = f"{col_idx}-{row_idx}"
                G.add_node(node_id, pos=(col_idx, -row_idx))
                col_nodes.append(node_id)

            entity.append(col_nodes)

        return G, entity

    def create_edges(G, entity):
        for col in entity:
            for i in range(len(col) - 1):
                G.add_edge(col[i], col[i + 1], edge_type="straight", feedback_type="N/A", effect_type="N/A", direction="N/A")

    def add_feedback_edges(G, entity, n, f_type="feedbackloop", d_type="dtu", e_type="positive"):
        created_edges = 0
        
        while created_edges < n:
            if f_type == "feedbackloop":
                col = random.choice(entity)
                src, trg = random.sample(col, 2)
            elif f_type == "crosstalk":
                src_col, trg_col = random.sample(entity, 2)
                src = random.choice(src_col)
                trg = random.choice(trg_col)

            src_col, src_row = map(int, src.split("-"))
            trg_col, trg_row = map(int, trg.split("-"))

            direction = "N/A"
            if d_type == "same":
                if src_row != trg_row:
                    continue
                direction = "same"
            elif d_type == "dtu":
                if src_row < trg_row:
                    src, trg = trg, src
                direction = "dtu"
            elif d_type == "utd":
                if src_row > trg_row:
                    src, trg = trg, src
                direction = "utd"

            edge_color = "red" if e_type == "negative" else "green"
            G.add_edge(src, trg, edge_type="curved", feedback_type=f_type, effect_type=e_type, direction=direction, color=edge_color)
            created_edges += 1

    def print_edges_by_layer(G):
        edge_dict = {}

        for u, v, attr in G.edges(data=True):
            u_col, _ = map(int, u.split("-"))
            edge_type = attr.get("edge_type", "unknown")
            feedback_type = attr.get("feedback_type", "N/A")
            effect_type = attr.get("effect_type", "N/A")
            direction = attr.get("direction", "N/A")

            if u_col not in edge_dict:
                edge_dict[u_col] = []
            edge_dict[u_col].append((u, v, edge_type, feedback_type, effect_type, direction))

        print("\n[Edge List by Layer]")
        for layer, edges in sorted(edge_dict.items()):
            print(f"  Layer {layer}:")
            for u, v, edge_type, feedback_type, effect_type, direction in edges:
                print(f"    {u} -> {v} ({edge_type}) | Type: {feedback_type} | Effect: {effect_type} | Direction: {direction}")

    def draw_network(G):
        pos = nx.get_node_attributes(G, 'pos')
        edge_colors = [G[u][v].get("color", "black") for u, v in G.edges]

        plt.figure(figsize=(10, 6))
        nx.draw(G, pos, with_labels=True, node_color="yellow", edge_color=edge_colors, arrows=True)
        plt.show()


    def update():
        layers = [6, 4, 7, 5, 8, 3, 6] 
        G, entity = create_network(layers)

        create_edges(G, entity)

        feedback_types = ["feedbackloop", "crosstalk"]
        effect_types = ["positive", "negative"]
        num_edges = random.randint(20, 50)

        for _ in range(num_edges):
            f_type = random.choice(feedback_types)
            d_type = random.choice(["utd", "dtu", "same"] if f_type == "crosstalk" else ["utd", "dtu"])
            e_type = random.choice(effect_types)

            add_feedback_edges(G, entity, 1, f_type=f_type, d_type=d_type, e_type=e_type)

        print_edges_by_layer(G)
        draw_network(G)

    update()
    ```
- img 

    <img src="https://github.com/user-attachments/assets/83b91872-f89e-4baa-aba8-7e630afe61d7" alt="3" width="70%" height="70%"/>  
