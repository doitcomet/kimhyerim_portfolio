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
    section: "Representative Project",
    slug: "niffler-monitoring-migration",
    title: "Niffler 2.0 Monitoring Migration",
    subtitle: "OTel·Prometheus·Grafana 기반 관측성 전환",
    status: "hCloud/HKS Fit",
    accent: "#ff9500",
    carImage: assetPath("assets/cars/hyundai-ponyexcel.avif"),
    carAlt: "현대 포니 엑셀",
    carName: "Pony Excel",
    carYear: "1980",
    architectureImage: assetPath("assets/architectures/niffler-monitoring-platform.svg"),
    summary: "Telegraf 기반 사내 모니터링 체계를 OpenTelemetry, Prometheus, Grafana 중심의 표준 관측성 구조로 전환한 대표 프로젝트입니다.",
    background: "기존 Niffler 1.0은 Telegraf와 InfluxDB, 커스텀 스크립트, 사내 메신저 알림에 강하게 결합되어 있었습니다. hCloud/HKS와 같은 공장형 플랫폼에서는 VM과 K8S 워크로드를 같은 기준으로 관측하고, 알림과 대응 기준을 표준화하는 역량이 중요하다고 판단했습니다.",
    actions: [
      "VM 환경에는 OpenTelemetry Collector를 직접 설치하고, K8S 환경에는 DaemonSet 방식으로 수집 구성을 배포했습니다.",
      "Pod 수, 프로세스, CPU, Memory, Disk, 4xx/5xx 지표를 기준으로 Grafana Alert Rule과 Slack 알림을 설계했습니다.",
      "기존 Telegraf inputs.exec 기반 shell/python 커스텀 메트릭은 Python Bridge로 변환해 OTLP Collector로 전달했습니다.",
      "Private Cloud의 AWS 호환 API가 실제 호출에서 다르게 동작하는 문제를 응답과 에러 기준으로 분리해 수집 방식을 조정했습니다."
    ],
    impacts: [
      { value: "4 Env", label: "STG/PRD/DR/Private Cloud" },
      { value: "OTel", label: "Standard collection path" },
      { value: "Slack", label: "Unified alert workflow" }
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
    section: "Platform Standardization",
    slug: "graviton-al2023-standardization",
    title: "Graviton Migration / AL2023 Standardization",
    subtitle: "EC2 120대 무중단 아키텍처 표준화",
    status: "Zero Downtime",
    accent: "#ff3b30",
    carImage: assetPath("assets/cars/hyundai-pony.avif"),
    carAlt: "현대 포니",
    carName: "Pony",
    carYear: "1970",
    architectureImage: assetPath("assets/architectures/graviton-migration.svg"),
    summary: "운영 중인 EC2 120대를 x86에서 Graviton 기반으로 전환하고, 혼재된 OS를 AL2023 중심으로 표준화한 플랫폼 전환 프로젝트입니다.",
    background: "플랫폼 운영에서 비용 최적화와 표준화는 서비스 안정성을 해치지 않는 방식으로 진행되어야 합니다. OTA/FOTA 서비스의 운영 연속성을 유지하면서 아키텍처와 OS 표준을 동시에 정리하는 것을 목표로 했습니다.",
    actions: [
      "x86 기반 EC2 120대의 프로세스, 패키지, 포트, fstab, iptables, 모니터링 상태를 전수 점검했습니다.",
      "systemd-logind, 네트워크 설정, 에이전트 호환성 차이를 분석해 AL2023 전환 기준을 정리했습니다.",
      "신구 환경을 병행 운영하며 트래픽과 지표를 비교하고, 롤백 가능한 순서로 전환 리스크를 통제했습니다.",
      "전환 후 CloudWatch와 Grafana 지표를 기준으로 성능과 안정성을 검증했습니다."
    ],
    impacts: [
      { value: "120 EC2", label: "Migration scope" },
      { value: "AL2023", label: "OS standardization" },
      { value: "25%", label: "Compute cost reduction" }
    ],
    stacks: [
      stack("AWS Graviton", "aws-graviton-logo.png", "AWS", 0, 1),
      stack("ARM", "ARM_logo.svg", "ARM", 1, 1),
      stack("AMD", "amd-logo.webp", "AMD", 2, 1),
      stack("Grafana", "grafana-logo.png", "G", 3, 1),
      stack("Python", "python-logo.webp", "Py", 4, 1),
      stack("Slack", "slack-logo.png", "S", 5, 1)
    ]
  },
  {
    number: "03",
    section: "AI Operations",
    slug: "secguard-ai",
    title: "SecGuard AI",
    subtitle: "미사용 보안그룹 탐지·리포팅 자동화",
    status: "AI Automation",
    accent: "#39c951",
    carImage: assetPath("assets/cars/hyundai-cortina.avif"),
    carAlt: "현대 코티나",
    carName: "Cortina",
    carYear: "1960",
    architectureImage: assetPath("assets/architectures/ai-detect-platform.svg"),
    summary: "미사용 보안그룹을 탐지하고, 삭제 가능성 판단과 리포팅을 자동화한 AI 운영 보조 프로젝트입니다.",
    background: "클라우드 보안 자원은 장기간 방치되면 운영 리스크가 되지만, LLM이 직접 삭제 판단을 내리게 하면 환각과 과잉 자동화 위험이 커집니다. 그래서 판단 로직과 설명 생성의 책임을 분리했습니다.",
    actions: [
      "Lambda와 boto3로 보안그룹 사용 여부, 연결 리소스, 참조 관계를 수집했습니다.",
      "삭제 가능성 판단은 결정론적 로직이 수행하고, Bedrock은 근거 서술과 위험도 요약만 담당하도록 분리했습니다.",
      "운영자가 빠르게 검토할 수 있도록 Email 리포트와 Slack 알림 흐름을 구성했습니다.",
      "AI가 운영 결정을 대체하기보다 판단 근거를 정리하는 보조자로 동작하도록 안전한 자동화 경계를 설계했습니다."
    ],
    impacts: [
      { value: "Lambda", label: "Serverless inspection" },
      { value: "Bedrock", label: "Evidence summarization" },
      { value: "Safe AI", label: "Rule-based decision boundary" }
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
    section: "AIOps PoC",
    slug: "bedrock-agentcore-aiops-poc",
    title: "Bedrock AgentCore AIOps PoC",
    subtitle: "운영 적용 전 기술 검증 단계",
    status: "PoC in Progress",
    accent: "#0a84ff",
    carImage: assetPath("assets/cars/hyundai-tiburon.avif"),
    carAlt: "현대 티뷰론",
    carName: "Tiburon",
    carYear: "1990",
    architectureImage: assetPath("assets/architectures/kubernetes-monitoring.svg"),
    summary: "SecGuard AI 경험을 확장해 알람 분석, 이상 탐지, ChatOps 승인, 자원 분류를 연결하는 AIOps 흐름을 설계 및 검증 중인 PoC입니다.",
    background: "이 프로젝트는 운영 적용이 완료된 산출물이 아니라, AI Cloud 환경에서 반복 운영 판단을 어떻게 안전하게 보조할 수 있는지 검증하는 단계입니다. 완전 자동 조치보다 승인 기반 ChatOps와 근거 중심 리포팅을 우선합니다.",
    actions: [
      "알람 분석 에이전트가 Grafana/CloudWatch 성격의 이벤트를 요약하고 우선순위를 분류하는 흐름을 설계하고 있습니다.",
      "이상 탐지 결과와 SecGuard AI의 자원 분류 결과를 연결해 운영자가 검토할 수 있는 컨텍스트를 구성 중입니다.",
      "Slack 기반 ChatOps 승인 흐름을 두어 운영 적용 전 사람의 확인 단계를 유지하는 구조로 검증하고 있습니다.",
      "현재는 진행 중인 PoC이며, 운영 적용 전 기술 검증 단계로 범위를 제한하고 있습니다."
    ],
    impacts: [
      { value: "PoC", label: "Design and validation" },
      { value: "ChatOps", label: "Human approval loop" },
      { value: "AIOps", label: "Pre-incident workflow" }
    ],
    stacks: [
      stack("Slack", "slack-logo.png", "S", 0, 3),
      stack("Bedrock", "bedrock-icon.png", "BR", 1, 3),
      stack("Security", "security-lock-icon.png", "Sec", 2, 3),
      stack("AI Agent", "ai-icon.png", "AI", 3, 3)
    ]
  }
];
