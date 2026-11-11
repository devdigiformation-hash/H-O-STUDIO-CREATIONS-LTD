import { CareerVacancy } from '../types';

export const COMPANY_INFO = {
  legalName: "H&O STUDIO CREATIONS L LTD",
  shortName: "H&O Studio Creations",
  businessNature: "Information Technology Consultancy",
  contactEmail: "ho.studioteam@gmail.com",
  contactPhone: "+44 7393 667807",
  contactPhoneFormatted: "+44 7393 667807",
  whatsappNumberDigits: "447393667807",
  whatsappUrl: "https://wa.me/447393667807",
  registeredCountry: "United Kingdom",
  registeredAddressNote: "To be confirmed upon formal engagement",
  establishedNotice: "UK Registered Information Technology Consultancy",
};

export const CAREER_VACANCIES: CareerVacancy[] = [
  {
    id: "it-technician",
    title: "IT Technician",
    salary: "£35,000–£45,000",
    salaryRange: "£35,000 – £45,000 per annum (gross)",
    department: "Technical Operations & Systems",
    type: "Full-Time (Subject to formal contract confirmation)",
    location: "United Kingdom (Hybrid / On-site subject to confirmation)",
    overview:
      "We are seeking an adaptable and technically proficient IT Technician to maintain, diagnose, and optimize enterprise client infrastructure, server rooms, networked environments, and mission-critical hardware.",
    keyResponsibilities: [
      "Install, configure, and maintain server infrastructure, networking racks, routers, and switches.",
      "Conduct proactive hardware diagnostics, preventive maintenance, and disaster recovery verification.",
      "Provide tier-2 and tier-3 technical escalation support for enterprise client workstations and operating systems.",
      "Manage cloud backups, virtualisation environments, and client access directories adhering to cybersecurity protocols.",
      "Document network topologies, incident resolutions, and operational runbooks."
    ],
    requirements: [
      "Proven practical experience in enterprise IT support, server hardware, and network administration.",
      "Strong command of Windows Server, Linux distributions, active directory, and TCP/IP networking protocols.",
      "Familiarity with cloud platforms (AWS, Azure) and virtualisation hypervisors (VMware, Hyper-V, Proxmox).",
      "Disciplined troubleshooting methodology with rigorous attention to system security and data integrity.",
      "Strong verbal and written communication skills with professional stakeholder interaction."
    ],
    deliverables: [
      "Maintain 99.9% availability across client server and network endpoints.",
      "Execute scheduled hardware preventative maintenance cycles on time.",
      "Ensure rapid incident mitigation adhering to established client SLAs."
    ]
  },
  {
    id: "business-development-manager",
    title: "Business Development Manager",
    salary: "£50,000–£60,000",
    salaryRange: "£50,000 – £60,000 per annum (gross)",
    department: "Consultancy Growth & Strategic Partnerships",
    type: "Full-Time (Subject to formal contract confirmation)",
    location: "United Kingdom (Client-facing / Flexible subject to confirmation)",
    overview:
      "We are looking for an accomplished and consultative Business Development Manager to spearhead client acquisition, foster long-term enterprise partnerships, and position our IT advisory and managed technology services to high-growth organizations.",
    keyResponsibilities: [
      "Identify, prospect, and engage senior decision-makers (CTOs, CIOs, Operations Directors) seeking strategic IT modernization.",
      "Lead technical sales consultations, scoping enterprise infrastructure, custom software, and managed service requirements.",
      "Prepare detailed commercial proposals, tender responses, and service-level agreement frameworks.",
      "Collaborate closely with technical teams to ensure seamless client onboarding and solution feasibility.",
      "Nurture key client relationships to maximize account retention, satisfaction, and strategic expansion."
    ],
    requirements: [
      "Demonstrated track record in B2B technology sales, IT consultancy business development, or managed services origination.",
      "Deep understanding of modern enterprise technology stacks: cloud architectures, managed IT support, and custom software delivery.",
      "Exceptional negotiation, executive presentation, and consultative listening skills.",
      "Ability to understand client operational bottlenecks and translate them into actionable IT consultancy engagements.",
      "Commercial acumen with experience managing pipeline forecasts and structured proposal cycles."
    ],
    deliverables: [
      "Originate qualified enterprise IT advisory and infrastructure opportunities.",
      "Deliver tailored commercial proposals meeting both client requirements and margin targets.",
      "Build enduring partnerships grounded in transparency and technical excellence."
    ]
  }
];

export const CONSULTANCY_SERVICES = [
  {
    id: "it-strategy",
    title: "IT Consultancy & Strategic Advisory",
    description: "Aligning enterprise technology architecture with overarching business goals, roadmaps, and compliance requirements.",
    icon: "Compass",
    deliverables: [
      "Technology ecosystem audit and modernization roadmap",
      "Vendor-neutral architecture appraisal and cost-efficiency review",
      "Digital transformation governance and leadership alignment"
    ]
  },
  {
    id: "infrastructure-support",
    title: "Infrastructure & Technical Operations",
    description: "High-reliability server maintenance, network configuration, on-premise rack engineering, and proactive incident response.",
    icon: "Server",
    deliverables: [
      "Enterprise server rack installation, configuration, and monitoring",
      "Network routing, managed switches, firewall hardening, and VPNs",
      "Disaster recovery architecture, automated failover, and verified backups"
    ]
  },
  {
    id: "custom-software",
    title: "Custom Software & Digital Solutions",
    description: "Architecting bespoke web applications, robust APIs, database engines, and automated workflow pipelines.",
    icon: "Code2",
    deliverables: [
      "Modern full-stack web platforms engineered for horizontal scale",
      "System integration APIs connecting legacy ERPs, CRMs, and cloud services",
      "Microservices architecture, automated CI/CD deployment pipelines"
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Governance Advisory",
    description: "Protecting mission-critical digital assets through rigorous threat profiling, access controls, and policy frameworks.",
    icon: "ShieldCheck",
    deliverables: [
      "Vulnerability assessment and infrastructure security review",
      "Role-Based Access Control (RBAC) and identity governance",
      "Data protection workflows aligned with UK GDPR standards"
    ]
  },
  {
    id: "cloud-modernization",
    title: "Cloud Migration & Managed DevOps",
    description: "Transitioning legacy applications into resilient multi-region cloud infrastructures with automated scaling.",
    icon: "Cloud",
    deliverables: [
      "Cloud readiness appraisal and phased migration execution",
      "Infrastructure-as-Code (IaC) provisioning and monitoring",
      "Zero-downtime deployment pipelines and container orchestration"
    ]
  },
  {
    id: "automation",
    title: "Business Automation & Integration",
    description: "Eliminating manual bottlenecks through programmatic ETL data pipelines, webhook integrations, and intelligent triggers.",
    icon: "Cpu",
    deliverables: [
      "Cross-platform workflow automation and database synchronization",
      "Operational event monitoring and automated alerting matrices",
      "Bespoke internal tooling designed to accelerate engineering throughput"
    ]
  }
];

export const METHODOLOGY_STEPS = [
  {
    step: "01",
    name: "Discovery & Architectural Audit",
    description: "We rigorously assess your current infrastructure, workflows, data flows, and pain points before drafting technical recommendations."
  },
  {
    step: "02",
    name: "Target Architecture Design",
    description: "Our engineers blueprint a secure, scalable solution with explicit timelines, tech stacks, milestones, and cost models."
  },
  {
    step: "03",
    name: "Iterative Implementation",
    description: "We deploy infrastructure and software in managed, risk-controlled phases to prevent disruption to ongoing business operations."
  },
  {
    step: "04",
    name: "Continuous Monitoring & SLA Support",
    description: "Post-deployment systems are continuously monitored with rapid escalation channels and preventative maintenance cycles."
  }
];
