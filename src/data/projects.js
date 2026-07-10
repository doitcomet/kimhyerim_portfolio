const positions = [
  ["14%", "25%"], ["44%", "16%"], ["70%", "29%"],
  ["18%", "61%"], ["49%", "56%"], ["77%", "66%"]
];
const stack = (name, file, fallback, index) => ({ name, image: `/assets/stacks/${file}`, fallback, x: positions[index][0], y: positions[index][1], delay: index * 0.18 });

export const projects = [
  {
    number: "01", slug: "graviton-migration", title: "Graviton Migration", subtitle: "AWS Graviton2 기반 마이그레이션", status: "Production", accent: "#39c951",
    carImage: "/assets/cars/hyundai-pony.avif", carAlt: "현대 포니", architectureImage: "/assets/architectures/graviton-migration.svg",
    summary: "x86 기반 워크로드를 ARM 기반 Graviton으로 전환해 비용 효율성과 성능을 함께 개선한 인프라 마이그레이션 프로젝트입니다.",
    background: "기존 인스턴스의 비용과 리소스 사용률을 분석하고, 애플리케이션 및 에이전트의 ARM 호환성을 검증한 뒤 단계적으로 전환했습니다.",
    actions: ["워크로드·의존성 ARM 호환성 사전 점검", "테스트 환경 성능 및 비용 비교", "CloudWatch·Grafana 기반 전환 전후 지표 검증", "롤백 계획을 포함한 단계별 Production 적용"],
    impacts: [{ value: "ARM64", label: "Target architecture" }, { value: "IaC", label: "Repeatable deployment" }, { value: "24/7", label: "Metric validation" }],
    stacks: [stack("AWS", "aws.png", "aws", 0), stack("EC2", "ec2.png", "EC2", 1), stack("CloudWatch", "cloudwatch.png", "CW", 2), stack("Terraform", "terraform.png", "TF", 3), stack("Grafana", "grafana.png", "G", 4), stack("Prometheus", "prometheus.png", "P", 5)]
  },
  {
    number: "02", slug: "kubernetes-monitoring", title: "Kubernetes Monitoring", subtitle: "K8s 클러스터 모니터링 시스템 구축", status: "Observability", accent: "#ff9500",
    carImage: "/assets/cars/hyundai-granada.avif", carAlt: "현대 그라나다", architectureImage: "/assets/architectures/kubernetes-monitoring.svg",
    summary: "클러스터와 애플리케이션 지표를 통합해 장애 징후를 조기에 감지하는 Kubernetes 관측성 환경을 구축했습니다.",
    background: "서로 분산되어 있던 메트릭, 로그, 알림을 통합하고 운영자가 서비스 상태를 빠르게 판단할 수 있도록 대시보드와 알림 기준을 표준화했습니다.",
    actions: ["Prometheus 메트릭 수집 구조 설계", "Grafana 운영 대시보드 구성", "Loki 로그 조회 및 상관 분석", "Alertmanager 알림 라우팅과 임계치 튜닝"],
    impacts: [{ value: "12/12", label: "Pod health view" }, { value: "1 View", label: "Unified dashboard" }, { value: "Fast", label: "Incident triage" }],
    stacks: [stack("Kubernetes", "kubernetes.png", "K8s", 0), stack("Prometheus", "prometheus.png", "P", 1), stack("Grafana", "grafana.png", "G", 2), stack("Loki", "loki.png", "L", 3), stack("Alertmanager", "alertmanager.png", "A", 4), stack("Helm", "helm.png", "H", 5)]
  },
  {
    number: "03", slug: "ai-detect-platform", title: "AI Detect Platform", subtitle: "AI 기반 비정상 트래픽 진단 플랫폼", status: "Machine Learning", accent: "#ff3b30",
    carImage: "/assets/cars/hyundai-ioniq5.avif", carAlt: "현대 아이오닉 5", architectureImage: "/assets/architectures/ai-detect-platform.svg",
    summary: "VPC Flow Logs를 기반으로 비정상 네트워크 패턴을 탐지하는 비지도 학습 파이프라인을 설계했습니다.",
    background: "대규모 로그를 정제하고 네트워크 행동 특성을 나타내는 파생 변수를 생성해, 라벨 없이도 이상 징후를 우선순위화할 수 있도록 구성했습니다.",
    actions: ["S3 원천 로그 수집 및 Glue ETL", "트래픽 특징량 생성과 데이터 품질 검증", "SageMaker RCF 모델 학습", "Batch Transform 기반 주기적 추론 설계"],
    impacts: [{ value: "10", label: "Core features" }, { value: "RCF", label: "Anomaly model" }, { value: "Batch", label: "Cost-aware inference" }],
    stacks: [stack("SageMaker", "sagemaker.png", "SM", 0), stack("S3", "s3.png", "S3", 1), stack("Glue", "glue.png", "GL", 2), stack("Lambda", "lambda.png", "λ", 3), stack("Python", "python.png", "Py", 4), stack("CloudWatch", "cloudwatch.png", "CW", 5)]
  },
  {
    number: "04", slug: "cicd-pipeline", title: "CI/CD Pipeline", subtitle: "Infrastructure as Code & 자동화 배포", status: "Automation", accent: "#af52de",
    carImage: "/assets/cars/hyundai-porter.avif", carAlt: "현대 포터", architectureImage: "/assets/architectures/cicd-pipeline.svg",
    summary: "인프라 변경과 애플리케이션 배포를 일관되고 추적 가능하게 만드는 자동화 파이프라인을 구성했습니다.",
    background: "수동 배포 과정의 편차와 재작업을 줄이기 위해 코드 리뷰, 검증, 승인, 배포 단계를 파이프라인으로 표준화했습니다.",
    actions: ["Terraform plan/apply 단계 분리", "Git 기반 변경 이력과 리뷰 프로세스 적용", "Helm chart 기반 Kubernetes 배포", "Slack 연동 배포 결과 및 실패 알림"],
    impacts: [{ value: "GitOps", label: "Change tracking" }, { value: "Auto", label: "Deployment flow" }, { value: "Rollback", label: "Safer release" }],
    stacks: [stack("GitHub Actions", "github-actions.png", "GH", 0), stack("Jenkins", "jenkins.png", "J", 1), stack("Terraform", "terraform.png", "TF", 2), stack("Helm", "helm.png", "H", 3), stack("Argo CD", "argocd.png", "Argo", 4), stack("Slack", "slack.png", "S", 5)]
  },
  {
    number: "05", slug: "cloud-cost-optimization", title: "Cloud Cost Optimization", subtitle: "비용 최적화 및 리소스 효율화", status: "FinOps", accent: "#0a84ff",
    carImage: "/assets/cars/hyundai-ioniq6.avif", carAlt: "현대 아이오닉 6", architectureImage: "/assets/architectures/cloud-cost-optimization.svg",
    summary: "사용량과 비용 데이터를 함께 분석해 낭비 리소스를 식별하고 반복 점검을 자동화한 FinOps 프로젝트입니다.",
    background: "비용을 단순 절감하는 것이 아니라 서비스 안정성을 유지하면서 적정 용량과 운영 정책을 찾는 것을 목표로 했습니다.",
    actions: ["Cost Explorer 기반 비용 추세 분석", "미사용·저사용 리소스 탐지", "Budgets와 CloudWatch 알림 구성", "Lambda 기반 정기 점검 및 리포트 자동화"],
    impacts: [{ value: "FinOps", label: "Operating model" }, { value: "Daily", label: "Cost visibility" }, { value: "Right-size", label: "Resource strategy" }],
    stacks: [stack("Cost Explorer", "cost-explorer.png", "CE", 0), stack("Budgets", "budgets.png", "$", 1), stack("S3", "s3.png", "S3", 2), stack("Trusted Advisor", "trusted-advisor.png", "TA", 3), stack("Lambda", "lambda.png", "λ", 4), stack("CloudWatch", "cloudwatch.png", "CW", 5)]
  }
];
