const positionSets = [
  [["18%", "31%"], ["45%", "22%"], ["73%", "34%"], ["29%", "69%"], ["59%", "62%"], ["82%", "70%"], ["50%", "42%"]],
  [["16%", "62%"], ["34%", "29%"], ["55%", "69%"], ["75%", "24%"], ["84%", "58%"], ["25%", "43%"], ["58%", "39%"]],
  [["18%", "26%"], ["43%", "67%"], ["66%", "28%"], ["82%", "64%"], ["30%", "48%"], ["58%", "50%"], ["76%", "42%"]],
  [["20%", "68%"], ["37%", "32%"], ["62%", "22%"], ["80%", "48%"], ["28%", "48%"], ["58%", "68%"], ["75%", "70%"]]
];

const scaleByFile = {
  "opentelemetry.png": 1.75,
  "telegraf.png": 1.75
};

export const assetPath = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const stack = (name, file, fallback, index, group = 0) => ({
  name,
  image: assetPath(`assets/stacks/${file}`),
  fallback,
  x: positionSets[group % positionSets.length][index][0],
  y: positionSets[group % positionSets.length][index][1],
  size: scaleByFile[file] ?? 1,
  delay: index * 0.18
});

export const projects = [
  {
    number: "01",
    section: "대표 프로젝트",
    slug: "niffler-monitoring-migration",
    title: "모니터링 플랫폼 구축",
    subtitle: "Telegraf에서 OpenTelemetry 기반으로 무중단 전환",
    status: "관측성 플랫폼",
    accent: "#ff9500",
    architectureImage: assetPath("assets/architectures/niffler-public-reference.png"),
    summary: "고객사 모니터링 플랫폼이 신규 구조로 전환되며, 수집·저장·시각화·알림 체계를 OpenTelemetry, Prometheus, Grafana 기준으로 재구성한 대표 프로젝트입니다.",
    background: "기존 구조는 Telegraf, InfluxDB, 커스텀 스크립트, 사내 메신저 알림에 강하게 결합되어 있었습니다. 신규 모니터링 체계 전환 과정에서 Telegraf 대신 OpenTelemetry Collector를 사용해야 했고, 기존 커스텀 메트릭 자산을 버리지 않으면서 신규 표준으로 흡수하는 방식이 필요했습니다.",
    actions: [
      "EC2/VM에는 OpenTelemetry Collector Contrib를 직접 설치하고, K8S에는 Helm 기반 DaemonSet 방식으로 수집 구성을 배포했습니다.",
      "기존 Telegraf inputs.exec 기반 shell/python 커스텀 메트릭은 Python OTel Bridge로 변환해 OTLP HTTP Collector로 전달했습니다.",
      "Pod 수, 프로세스, CPU, Memory, Disk, 4xx/5xx 지표를 기준으로 Grafana Alert Rule을 설계하고 Slack 알림으로 전환했습니다.",
      "Private Cloud의 AWS 호환 API가 실제 호출에서 일부 다르게 동작하는 문제를 GetMetricData 방식으로 우회해 수집 정상화를 검증했습니다."
    ],
    lessons: "관측성 전환은 도구 교체가 아니라 운영자가 같은 기준으로 장애를 인지하도록 만드는 일임을 배웠습니다. 기술 제약보다 고객사·상황실·담당자에게 혼선 없이 알림 기준을 설명하는 협업이 더 중요했습니다.",
    securityNote: "보안 기밀 유지를 위해 사내 도메인, 계정, 실제 인스턴스 정보는 제거하고 공개 가능한 참고용 아키텍처로 재구성했습니다.",
    impacts: [
      { value: "4개 환경", label: "STG·운영·DR·Private Cloud" },
      { value: "OTel", label: "표준 수집 경로 전환" },
      { value: "Slack", label: "알림 채널 일원화" }
    ],
    stacks: [
      stack("Monitoring", "monitoring-board.png", "Mon", 0, 0),
      stack("Grafana", "grafana-logo.png", "G", 1, 0),
      stack("Telegraf", "telegraf.png", "T", 2, 0),
      stack("OpenTelemetry", "opentelemetry.png", "OTel", 3, 0),
      stack("CloudFront", "cloudfront.png", "CF", 4, 0),
      stack("Slack", "slack-logo.png", "S", 5, 0),
      stack("Python", "python-logo.webp", "Py", 6, 0)
    ]
  },
  {
    number: "02",
    section: "플랫폼 표준화",
    slug: "graviton-al2023-standardization",
    title: "Graviton 전환 및 AL2023 표준화",
    subtitle: "EC2 120대 무중단 아키텍처 표준화",
    status: "무중단 전환",
    accent: "#ff3b30",
    architectureImage: assetPath("assets/architectures/graviton-standardization-reference.svg"),
    summary: "운영 중인 EC2 120대를 x86에서 Graviton 기반으로 전환하고, 혼재된 OS를 AL2023 중심으로 표준화해 약 25% 컴퓨팅 비용 절감을 달성한 프로젝트입니다.",
    background: "단순 인스턴스 교체가 아니라 CPU 아키텍처와 OS를 동시에 바꾸는 이중 마이그레이션이었습니다. OTA/FOTA 서비스 특성상 중단 없는 전환이 전제였기 때문에, 기존 서버의 역할과 설정을 정확히 파악하고 신구 병행 운영으로 리스크를 낮추는 것이 핵심이었습니다.",
    actions: [
      "EC2 120대의 OS/아키텍처, 실행 서비스, 패키지, crontab, 리스닝 포트, fstab, iptables, 모니터링 상태를 전수 점검했습니다.",
      "AL2023 전환 과정에서 systemd-logind, 네트워크 인터페이스명, 에이전트 ARM 호환성 차이를 분석해 표준 전환 기준을 정리했습니다.",
      "신구 환경을 병행 운영하며 트래픽과 지표를 비교하고, 롤백 가능한 순서로 전환 리스크를 통제했습니다.",
      "NAT, Bastion, WAS, EKS 관련 서버 유형별 체크리스트를 만들고 CloudWatch와 Grafana 지표로 전환 후 안정성을 검증했습니다."
    ],
    lessons: "무중단 전환은 기술보다 책임감의 문제에 가깝다고 느꼈습니다. 작은 fstab 한 줄, iptables 규칙 하나가 장애로 이어질 수 있어 확인된 사실과 추정을 구분해 동료·유관팀과 소통하는 습관을 갖게 되었습니다.",
    securityNote: "보안 기밀 유지를 위해 실제 서비스명, 계정, 서버 식별자는 제거하고 전환 범위와 기술 구조만 공개 가능한 수준으로 일반화했습니다.",
    impacts: [
      { value: "120 EC2", label: "운영 서버 이전" },
      { value: "AL2023", label: "OS 표준화" },
      { value: "25%", label: "컴퓨팅 비용 감축" }
    ],
    stacks: [
      stack("AWS Graviton", "aws-graviton-logo.png", "AWS", 0, 1),
      stack("ARM", "ARM_logo.svg", "ARM", 1, 1),
      stack("AMD", "amd-logo.webp", "AMD", 2, 1),
      stack("Python", "python-logo.webp", "Py", 3, 1)
    ]
  },
  {
    number: "03",
    section: "AI 운영 자동화",
    slug: "secguard-ai",
    title: "SecGuard AI 보안그룹 자동 점검",
    subtitle: "미사용 보안그룹 탐지·리포팅 자동화",
    status: "AI 리포팅",
    accent: "#39c951",
    architectureImage: assetPath("assets/architectures/secguard-ai-reference.png"),
    summary: "멀티 계정·멀티 리전 환경에 누적되는 미사용 보안그룹을 탐지하고, 삭제 검토 근거를 자연어 리포트로 제공하는 AI 운영 보조 프로젝트입니다.",
    background: "보안그룹은 임시 테스트나 종료된 프로젝트 이후에도 남아 공격 표면과 감사 부담을 키울 수 있습니다. 단순 ENI 연결 여부만 보면 오탐이 발생하므로 참조 그래프를 결정론적으로 확인하고, Bedrock은 사람이 읽을 수 있는 근거 서술에만 사용했습니다.",
    actions: [
      "Lambda와 boto3로 보안그룹, ENI, 다른 SG 규칙, VPC 연결 리소스 등 참조 관계를 수집했습니다.",
      "삭제 후보 판별은 결정론적 로직이 수행하고, Bedrock은 근거 서술과 위험도 분류만 담당하도록 역할을 분리했습니다.",
      "S3와 DynamoDB에 회차별 결과와 상태 이력을 남겨 감사 추적과 재알림 억제가 가능하도록 설계했습니다.",
      "운영자가 검토할 수 있도록 Email 리포트와 Slack 알림 흐름을 구성해 AI가 판단을 대체하지 않도록 했습니다."
    ],
    lessons: "AI를 운영 자동화에 붙일 때 중요한 것은 많이 쓰는 것이 아니라 어디까지 맡기지 않을지를 정하는 것임을 배웠습니다. 보안 도구에서는 재현 가능한 규칙과 사람이 검토할 수 있는 설명이 함께 있어야 신뢰가 생긴다고 판단했습니다.",
    securityNote: "보안 기밀 유지를 위해 실제 계정, 리전, 보안그룹 ID, 리소스명은 제외하고 탐지 로직과 자동화 흐름만 공개했습니다.",
    impacts: [
      { value: "Lambda", label: "서버리스 점검" },
      { value: "Bedrock", label: "근거 서술 자동화" },
      { value: "Safe AI", label: "결정론+LLM 분리" }
    ],
    stacks: [
      stack("Slack", "slack-logo.png", "S", 0, 2),
      stack("Bedrock", "bedrock-icon.png", "BR", 1, 2),
      stack("Lambda", "lambda-icon.png", "L", 2, 2),
      stack("Email", "email-icon.png", "Mail", 3, 2),
      stack("AI Report", "ai-icon.png", "AI", 4, 2)
    ]
  },
  {
    number: "04",
    section: "Agentic AIOps 검증",
    slug: "bedrock-agentcore-aiops-poc",
    title: "Bedrock AgentCore AIOps 검증",
    subtitle: "Orchestrator · Multi-Agent · MCP Gateway 기반 운영 자동화 PoC",
    status: "PoC 검증 중",
    accent: "#0a84ff",
    architectureImage: assetPath("assets/architectures/fota-ai-multi-agent.svg"),
    summary: "FOTA 운영 이벤트를 Orchestrator가 해석하고 알람 분석·이상 탐지·미사용 자원 탐지 Agent에 라우팅한 뒤, AgentCore Gateway의 공통 MCP Tool Registry를 통해 필요한 운영 도구를 호출하도록 설계·검증 중인 Multi-Agent AIOps PoC입니다.",
    background: "기존 SecGuard AI와 모니터링 자동화 경험을 확장해, 개별 스크립트나 단일 Agent가 아니라 여러 운영 Agent가 동일한 도구 체계를 안전하게 공유할 수 있는 구조를 검증하고 있습니다. 핵심은 AgentCore Runtime을 실행 계층으로 두고, AgentCore Gateway를 단일 MCP 진입점으로 사용해 AWS·Niffler·Resource Inspect·Ops 도구 접근을 분리하는 것입니다.",
    actions: [
      "EventBridge와 Lambda를 진입점으로 두고 FOTA SecAIOps Orchestrator Agent가 요청 유형에 따라 알람 분석·이상 탐지·미사용 자원 탐지 Agent를 선택하도록 설계했습니다.",
      "AgentCore Gateway에 AWS MCP, Niffler MCP, Resource Inspect MCP, Ops MCP를 공통 Tool Registry 형태로 구성해 Agent별 도구 접근 경계를 분리했습니다.",
      "알람 분석 Agent는 Niffler·CloudWatch·EKS·Knowledge Base를 조합해 운영 컨텍스트를 정리하고 Slack으로 결과를 전달하는 흐름을 구성했습니다.",
      "이상 탐지 Agent는 CloudWatch·EKS·CloudTrail·Knowledge Base를 활용해 원인 후보를 수집하고 Slack 결과 전송까지 연결하는 흐름을 검증하고 있습니다.",
      "미사용 자원 탐지 Agent는 EC2·ENI·VPC Flow Logs·EIP·Lambda·Subnet을 점검하고 Knowledge Base를 참조해 주 1회 SES Email 리포트로 전달하는 구조를 설계했습니다."
    ],
    lessons: "Agent를 늘리는 것보다 중요한 것은 여러 Agent가 어떤 도구를 어떤 경계로 공유하는지 표준화하는 것이라고 판단했습니다. Orchestrator는 업무를 분배하고, Gateway/MCP는 Tool 접근을 통제하며, 각 Agent는 자신의 운영 책임에 집중하도록 역할을 나누는 방향으로 검증하고 있습니다.",
    securityNote: "현재 운영 적용 전 기술 검증 단계이며, 공개 포트폴리오에서는 실제 계정·리소스 식별자·내부 엔드포인트와 세부 자동화 구현을 제외했습니다.",
    impacts: [
      { value: "3 Agents", label: "운영 역할별 분리" },
      { value: "4 MCP", label: "공통 Tool Registry" },
      { value: "AgentCore", label: "Runtime·Gateway 검증" }
    ],
    stacks: [
      stack("Slack", "slack-logo.png", "S", 0, 3),
      stack("Bedrock", "bedrock-icon.png", "BR", 1, 3),
      stack("Security", "security-lock-icon.png", "Sec", 2, 3),
      stack("AI Agent", "ai-icon.png", "AI", 3, 3)
    ]
  }
];
