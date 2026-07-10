const positionSets = [
  [["18%", "31%"], ["45%", "22%"], ["73%", "34%"], ["29%", "69%"], ["59%", "62%"], ["82%", "70%"], ["50%", "42%"]],
  [["16%", "62%"], ["34%", "29%"], ["55%", "69%"], ["75%", "24%"], ["84%", "58%"], ["25%", "43%"], ["58%", "39%"]],
  [["18%", "26%"], ["43%", "67%"], ["66%", "28%"], ["82%", "64%"], ["30%", "48%"], ["58%", "50%"], ["76%", "42%"]],
  [["20%", "68%"], ["37%", "32%"], ["62%", "22%"], ["80%", "48%"], ["28%", "48%"], ["58%", "68%"], ["75%", "70%"]],
  [["15%", "38%"], ["39%", "21%"], ["61%", "58%"], ["82%", "30%"], ["24%", "70%"], ["52%", "38%"], ["78%", "68%"]]
];

const scaleByFile = {
  "opentelemetry.png": 1.75,
  "telegraf.png": 1.75
};

const stack = (name, file, fallback, index, group = 0) => ({
  name,
  image: `/assets/stacks/${file}`,
  fallback,
  x: positionSets[group % positionSets.length][index][0],
  y: positionSets[group % positionSets.length][index][1],
  size: scaleByFile[file] ?? 1,
  delay: index * 0.18
});

export const projects = [
  {
    number: "01",
    section: "AI Project",
    slug: "aiops-platform",
    title: "AIOps",
    subtitle: "운영 데이터 기반 이상 탐지 프로젝트",
    status: "Draft",
    accent: "#39c951",
    carImage: "/assets/cars/hyundai-cortina.avif",
    carAlt: "현대 코티나",
    carName: "Cortina",
    carYear: "1960",
    architectureImage: "/assets/architectures/ai-detect-platform.svg",
    summary: "운영 로그와 메트릭을 기반으로 이상 징후를 탐지하는 AIOps 프로젝트입니다. 세부 내용은 정리 자료를 받은 뒤 보강할 예정입니다.",
    background: "장애를 사후 대응하는 방식에서 벗어나, 관측 데이터 기반으로 위험 신호를 먼저 발견하는 운영 자동화 방향을 실험했습니다.",
    actions: ["로그·메트릭 기반 이상 징후 탐지 흐름 설계", "운영자가 확인하기 쉬운 알림 기준 정리", "대시보드와 진단 흐름 연결", "정리 자료 수신 후 상세 산출물 보강 예정"],
    impacts: [{ value: "AIOps", label: "Project track" }, { value: "Metrics", label: "Signal source" }, { value: "Draft", label: "Details pending" }],
    stacks: [
      stack("Python", "python-logo.webp", "Py", 0, 0),
      stack("Cloud signal", "cloudfront.png", "CW", 1, 0),
      stack("Grafana", "grafana-logo.png", "G", 2, 0),
      stack("Board", "monitoring-board.png", "B", 3, 0),
      stack("Slack", "slack-logo.png", "S", 4, 0),
      stack("AWS Graviton", "aws-graviton-logo.png", "AWS", 5, 0)
    ]
  },
  {
    number: "02",
    section: "Monitoring",
    slug: "niffler-monitoring-platform",
    title: "모니터링 플랫폼 구축",
    subtitle: "Niffler 1.0 → 2.0 무중단 마이그레이션",
    status: "Observability",
    accent: "#ff9500",
    carImage: "/assets/cars/hyundai-ponyexcel.avif",
    carAlt: "현대 포니 엑셀",
    carName: "Pony Excel",
    carYear: "1980",
    architectureImage: "/assets/architectures/niffler-monitoring-platform.svg",
    summary: "글로벌 4개 환경의 모니터링 플랫폼을 Telegraf/InfluxDB 기반 Niffler 1.0에서 OpenTelemetry/Prometheus/Grafana 기반 Niffler 2.0으로 전환한 프로젝트입니다.",
    background: "기존 구조는 자체 플랫폼 종속, InfluxQL 기반 알림, 사내 메신저 중심 채널로 확장성 한계가 있었습니다. 서비스 중단 없이 1.0/2.0 병행 운영을 유지하며 환경별 순차 전환을 진행했습니다.",
    actions: ["EC2/VM 전 서버에 OpenTelemetry Collector Contrib v0.137.0 설치·구성", "EKS 수집 구성을 Helm chart 기반으로 배포하고 메트릭 네이밍 컨벤션 정리", "기존 Telegraf exec 스크립트를 재사용하기 위한 Python OTel Bridge 구성", "Grafana 대시보드 JSON 이관, CloudWatch datasource UID 통합, Slack Alerting 재설계"],
    impacts: [{ value: "4 Env", label: "STG/PRD/DR/SPC" }, { value: "Dual-run", label: "Zero downtime migration" }, { value: "PromQL", label: "Unified alert rules" }],
    stacks: [
      stack("Monitoring", "monitoring-board.png", "Mon", 0, 1),
      stack("Grafana", "grafana-logo.png", "G", 1, 1),
      stack("Telegraf", "telegraf.png", "T", 2, 1),
      stack("OpenTelemetry", "opentelemetry.png", "OTel", 3, 1),
      stack("CloudFront", "cloudfront.png", "CF", 4, 1),
      stack("Slack", "slack-logo.png", "S", 5, 1),
      stack("Python", "python-logo.webp", "Py", 6, 1)
    ]
  },
  {
    number: "03",
    section: "Infrastructure",
    slug: "graviton-migration",
    title: "Graviton Migration",
    subtitle: "AWS Graviton2 기반 마이그레이션",
    status: "Production",
    accent: "#ff3b30",
    carImage: "/assets/cars/hyundai-pony.avif",
    carAlt: "현대 포니",
    carName: "Pony",
    carYear: "1970",
    architectureImage: "/assets/architectures/graviton-migration.svg",
    summary: "x86 기반 워크로드를 ARM 기반 Graviton으로 전환해 비용 효율성과 성능을 함께 개선한 인프라 마이그레이션 프로젝트입니다.",
    background: "기존 인스턴스의 비용과 리소스 사용률을 분석하고, 애플리케이션 및 에이전트의 ARM 호환성을 검증한 뒤 단계적으로 전환했습니다.",
    actions: ["워크로드·의존성 ARM 호환성 사전 점검", "테스트 환경 성능 및 비용 비교", "CloudWatch·Grafana 기반 전환 전후 지표 검증", "롤백 계획을 포함한 단계별 Production 적용"],
    impacts: [{ value: "ARM64", label: "Target architecture" }, { value: "IaC", label: "Repeatable deployment" }, { value: "24/7", label: "Metric validation" }],
    stacks: [stack("AWS Graviton", "aws-graviton-logo.png", "AWS", 0, 2), stack("ARM", "ARM_logo.svg", "ARM", 1, 2), stack("AMD", "amd-logo.webp", "AMD", 2, 2), stack("Grafana", "grafana-logo.png", "G", 3, 2), stack("Python", "python-logo.webp", "Py", 4, 2), stack("Slack", "slack-logo.png", "S", 5, 2)]
  },
  {
    number: "04",
    section: "Infrastructure",
    slug: "cicd-pipeline",
    title: "CI/CD Pipeline",
    subtitle: "Infrastructure as Code & 자동화 배포",
    status: "Automation",
    accent: "#af52de",
    carImage: "/assets/cars/hyundai-porter.avif",
    carAlt: "현대 포터",
    carName: "Porter",
    carYear: "1970",
    architectureImage: "/assets/architectures/cicd-pipeline.svg",
    summary: "인프라 변경과 애플리케이션 배포를 일관되고 추적 가능하게 만드는 자동화 파이프라인을 구성했습니다.",
    background: "수동 배포 과정의 편차와 재작업을 줄이기 위해 코드 리뷰, 검증, 승인, 배포 단계를 파이프라인으로 표준화했습니다.",
    actions: ["Terraform plan/apply 단계 분리", "Git 기반 변경 이력과 리뷰 프로세스 적용", "Helm chart 기반 Kubernetes 배포", "Slack 연동 배포 결과 및 실패 알림"],
    impacts: [{ value: "GitOps", label: "Change tracking" }, { value: "Auto", label: "Deployment flow" }, { value: "Rollback", label: "Safer release" }],
    stacks: [stack("Board", "monitoring-board.png", "B", 0, 3), stack("Slack", "slack-logo.png", "S", 1, 3), stack("Python", "python-logo.webp", "Py", 2, 3), stack("CloudFront", "cloudfront.png", "CF", 3, 3), stack("OpenTelemetry", "opentelemetry.png", "OTel", 4, 3), stack("Grafana", "grafana-logo.png", "G", 5, 3)]
  },
  {
    number: "05",
    section: "Infrastructure",
    slug: "cloud-cost-optimization",
    title: "Cloud Cost Optimization",
    subtitle: "비용 최적화 및 리소스 효율화",
    status: "FinOps",
    accent: "#0a84ff",
    carImage: "/assets/cars/hyundai-tiburon.avif",
    carAlt: "현대 티뷰론",
    carName: "Tiburon",
    carYear: "1990",
    architectureImage: "/assets/architectures/cloud-cost-optimization.svg",
    summary: "사용량과 비용 데이터를 함께 분석해 낭비 리소스를 식별하고 반복 점검을 자동화한 FinOps 프로젝트입니다.",
    background: "비용을 단순 절감하는 것이 아니라 서비스 안정성을 유지하면서 적정 용량과 운영 정책을 찾는 것을 목표로 했습니다.",
    actions: ["Cost Explorer 기반 비용 추세 분석", "미사용·저사용 리소스 탐지", "Budgets와 CloudWatch 알림 구성", "Lambda 기반 정기 점검 및 리포트 자동화"],
    impacts: [{ value: "FinOps", label: "Operating model" }, { value: "Daily", label: "Cost visibility" }, { value: "Right-size", label: "Resource strategy" }],
    stacks: [stack("CloudFront", "cloudfront.png", "CF", 0, 4), stack("Board", "monitoring-board.png", "B", 1, 4), stack("Python", "python-logo.webp", "Py", 2, 4), stack("Grafana", "grafana-logo.png", "G", 3, 4), stack("Slack", "slack-logo.png", "S", 4, 4), stack("AWS Graviton", "aws-graviton-logo.png", "AWS", 5, 4)]
  }
];
