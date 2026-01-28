# 什么是 AI Agent？

AI Agent（人工智能代理/智能体）是指能够感知环境、进行推理并采取行动以实现特定目标的智能系统。与传统的被动式 AI（如简单的问答机器人）不同，Agent 具有**自主性**和**任务执行能力**。

## 核心特征

1.  **自主性 (Autonomy)**: 能够在没有人类持续干预的情况下运行。
2.  **感知 (Perception)**: 这里通常指通过 Prompt 获取上下文信息或通过 API 获取外部数据。
3.  **行动 (Action)**: 能够调用工具（Tools）或执行 API 操作来改变环境状态。
4.  **目标导向 (Goal-directed)**: 所有行动都服务于一个最终目标。

## LLM 在 Agent 中的角色

在现代 Agent 架构（如 AutoGPT, BabyAGI）中，大语言模型（LLM）充当了**大脑**的角色：
- **规划**: 分解复杂任务。
- **反思**: 评估自己行动的结果。
- **决策**: 选择下一步使用什么工具。

> "Agent = LLM + Planning + Memory + Tools" —— Lilian Weng
