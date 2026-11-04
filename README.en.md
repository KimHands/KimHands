<div align="center">

# Jonggun Kim

**AI Agent & MCP Engineer — I build robust AI agents for security domains**

[한국어](./README.md) · **English**

[![Portfolio](https://img.shields.io/badge/Portfolio-kimhands.github.io-8B5CF6?style=flat-square&logo=githubpages&logoColor=white&labelColor=24292F)](https://kimhands.github.io/)
[![Velog](https://img.shields.io/badge/Velog-@kimhands-8B5CF6?style=flat-square&logo=velog&logoColor=white&labelColor=24292F)](https://velog.io/@kimhands/posts)
[![Email](https://img.shields.io/badge/Email-contact-8B5CF6?style=flat-square&logo=gmail&logoColor=white&labelColor=24292F)](mailto:kimjonggun0206@gmail.com)

</div>

<br/>

![Evidence map of agents, verification, security, and operations by project](./assets/work-map.en.svg)

<details>
<summary>View as a table</summary>

| Project | Agents | Verified | Security | Ops |
|---|---|---|---|---|
| HyperChecker | Evidence | Evidence | Evidence | Evidence |
| opsmith | Evidence | Evidence | Partial | Partial |
| hwpx-toolkit | Evidence | Evidence | None | Partial |
| humanize-korean-formal | Evidence | Evidence | None | None |
| islab-platform | Partial | Evidence | Evidence | Evidence |
| Bridge | Partial | Evidence | Evidence | Partial |
| KeylessPlay | None | Evidence | Evidence | None |
| Hedgehog WebCTF | None | Evidence | Evidence | Evidence |
| ClassFileAuto | None | None | Evidence | Evidence |

</details>

## Flagship: HyperChecker

Send an Instagram Reel by DM, and this agent checks the developer tools it mentions against public sources and replies.

```mermaid
flowchart LR
    A[Reel DM] --> B[Extract tools]
    B --> C[Find official source]
    C --> D[Read-only measurement]
    D --> E[Compare claims]
    E --> F[Rule-based verdict]
```

- **Verification:** Evaluated on 32 human-labeled cases with a holdout set. The limits are published with the results.
- **Guardrails:** Posts are isolated as untrusted input, and the tools under review are never executed.
- **Operations:** Runs as a public service. Real reply logs drove later fixes.

[Repository](https://github.com/KimHands/hype-checker) · [@hyper_checker](https://www.instagram.com/hyper_checker/)

## More work

| Area | Projects |
|---|---|
| Agent tooling | [opsmith](https://github.com/KimHands/opsmith) · [hwpx-toolkit](https://github.com/KimHands/hwpx-toolkit) · [humanize-korean-formal](https://github.com/KimHands/humanize-korean-formal) |
| Services | [Bridge](https://github.com/KimHands/bridge) · [SCH-Meet](https://github.com/KimHands/SCH-Meet) · islab-platform (private) |
| Security | KeylessPlay (private) · [Hedgehog WebCTF](https://hedgehog-server.tail53c7cd.ts.net:10000/) · [ClassFileAuto](https://class-file-auto-web.vercel.app) |

## Experience

- DRM security research with Tamarin formal verification (CISC-S'26 accepted)
- [AX CIC] Education Team Intern at Wrtn: authored AI/AX bootcamp curriculum
- Full-stack track lead at Likelion SCH, 14th cohort
- CSE at Soonchunhyang University (3rd year), security research at SCH Hedgehog

## Stack

![Python](https://img.shields.io/badge/Python-24292F?style=flat-square&logo=python&logoColor=3776AB)
![TypeScript](https://img.shields.io/badge/TypeScript-24292F?style=flat-square&logo=typescript&logoColor=3178C6)
![Claude](https://img.shields.io/badge/Claude-24292F?style=flat-square&logo=claude&logoColor=D97757)
![OpenAI](https://img.shields.io/badge/OpenAI-24292F?style=flat-square&logo=openai&logoColor=white)
![Gemini](https://img.shields.io/badge/Gemini-24292F?style=flat-square&logo=googlegemini&logoColor=4285F4)
![FastAPI](https://img.shields.io/badge/FastAPI-24292F?style=flat-square&logo=fastapi&logoColor=009688)
![Django](https://img.shields.io/badge/Django-24292F?style=flat-square&logo=django&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-24292F?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-24292F?style=flat-square&logo=react&logoColor=61DAFB)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-24292F?style=flat-square&logo=postgresql&logoColor=4169E1)
![Supabase](https://img.shields.io/badge/Supabase-24292F?style=flat-square&logo=supabase&logoColor=3ECF8E)
![Docker](https://img.shields.io/badge/Docker-24292F?style=flat-square&logo=docker&logoColor=2496ED)
![Kubernetes](https://img.shields.io/badge/k3s-24292F?style=flat-square&logo=k3s&logoColor=FFC61C)
![Linux](https://img.shields.io/badge/Linux-24292F?style=flat-square&logo=linux&logoColor=FCC624)
