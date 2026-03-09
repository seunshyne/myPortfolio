export const projectFilters = ['All Work', 'Frontend', 'Backend', 'Full Stack']

export const projects = [
  {
    title: 'Prime Wallet',
    slug: 'prime-wallet',
    description:
      'A secure digital wallet application with authentication, transaction management, and API-driven architecture.',
    tags: ['Vue.js', 'PHP(Laravel)', 'MySQL', 'AWS', 'Nginx'],
    category: 'Full Stack',
    status: 'Status: Production',
    statusTone: 'live',
    mediaTone: 'media-one',
    details: {
      intro:
        'A production-ready wallet platform for user onboarding, account balance management, and secure transaction flows.',
      problem: [
        'Many users need a simple way to manage digital wallet transactions with strong authentication and reliable audit trails.',
        'The core challenge was building a secure backend and a clean frontend experience that can scale with increasing traffic.',
      ],
      architecture: [
        {
          title: 'Application Server',
          body: 'Deployed on AWS EC2 with Nginx handling reverse proxy and request routing for frontend and API traffic.',
        },
        {
          title: 'Backend API',
          body: 'Laravel powers authentication, wallet operations, and transaction processing with role-aware endpoint protection.',
        },
        {
          title: 'Database Layer',
          body: 'MySQL stores account balances, user profiles, and transaction history with relational integrity and indexing.',
        },
      ],
      keyDecisions: [
        {
          title: 'Laravel + Sanctum',
          body: 'Used Laravel Sanctum to keep API authentication secure while remaining easy to maintain across web clients.',
        },
        {
          title: 'Nginx on EC2',
          body: 'Chose Nginx for stable request handling, caching options, and simple deployment with Linux-based tooling.',
        },
      ],
      challenge: {
        title: 'Securing Transaction Endpoints',
        body: 'Early versions had inconsistent auth checks across endpoints, creating risk around sensitive wallet actions.',
        resolution:
          'Centralized middleware, policy checks, and stricter request validation for all transaction operations.',
      },
      outcomeQuote:
        'Successfully built and deployed a secure wallet application with authentication, transaction handling, and REST API integration. The project demonstrates full-stack development from frontend implementation to backend architecture and cloud deployment.',
      links: {
        sourceUrl: 'https://github.com/seunshyne/WalletApi',
        liveUrl: 'https://primewallet.duckdns.org',
        liveLabel: 'Live Demo',
      },
    },
  },
  {
    title: 'Hospital Management System',
    slug: 'hospital-management-system',
    description:
      'Comprehensive system for patient records, appointment scheduling, and billing with role-based access control.',
    tags: ['Laravel', 'PHP', 'MySQL', 'REST API'],
    category: 'Backend',
    status: 'Status: In Progress',
    statusTone: 'progress',
    mediaTone: 'media-two',
    details: {
      intro:
        'A backend-first hospital system focused on secure medical records, appointment workflows, and billing operations.',
      problem: [
        'Manual patient records and fragmented scheduling made it difficult for staff to maintain consistency and speed.',
        'The system needed role-based access so doctors, nurses, and admin teams could work safely in one platform.',
      ],
      architecture: [
        {
          title: 'Service Layer',
          body: 'Laravel modules for patient intake, appointments, billing, and reporting with clear domain boundaries.',
        },
        {
          title: 'Access Control',
          body: 'Role and permission checks across all endpoints to limit sensitive record access by staff function.',
        },
        {
          title: 'Data Layer',
          body: 'MySQL schema for patients, visits, prescriptions, and invoices with foreign-key constraints.',
        },
      ],
      keyDecisions: [
        {
          title: 'Modular Laravel Structure',
          body: 'Separated billing, scheduling, and records domains to keep long-term maintenance predictable.',
        },
        {
          title: 'Audit-Friendly Data Design',
          body: 'Included change history and timestamps to support traceability for medical operations.',
        },
      ],
      challenge: {
        title: 'Complex Role Flows',
        body: 'Different staff types require different views and actions, which caused overlap in early endpoint design.',
        resolution: 'Introduced a centralized permission matrix and policy-based controller guards.',
      },
      outcomeQuote:
        'Current milestone covers patient registration, appointment scheduling, and role-restricted record access.',
      links: {
        sourceUrl: '#',
        liveUrl: '#',
        liveLabel: 'Preview Build',
      },
    },
  },
  {
    title: 'FinTech Dashboard',
    slug: 'fintech-dashboard',
    description:
      'Full-stack banking application with encrypted transaction processing and dynamic reporting.',
    tags: ['Vue.js', 'PHP(Laravel)', 'MySQL'],
    category: 'Full Stack',
    status: 'Status: Production',
    statusTone: 'live',
    mediaTone: 'media-three',
    details: {
      intro:
        'An analytics dashboard for financial operations with real-time summaries, secured APIs, and report generation.',
      problem: [
        'Finance teams required a single dashboard to monitor account movement, transaction summaries, and alerts.',
        'The challenge was presenting high-volume records clearly while keeping backend response times stable.',
      ],
      architecture: [
        {
          title: 'Frontend Layer',
          body: 'Vue.js components for charts, transaction tables, and account activity feeds with reusable UI blocks.',
        },
        {
          title: 'API Layer',
          body: 'Laravel APIs handle filtering, aggregation, and data exposure for the dashboard interface.',
        },
        {
          title: 'Reporting Queries',
          body: 'Optimized MySQL queries for date-range summaries and transaction drill-down views.',
        },
      ],
      keyDecisions: [
        {
          title: 'Server-Side Aggregation',
          body: 'Moved expensive calculations to backend endpoints to keep frontend interactions fast.',
        },
        {
          title: 'Reusable UI Cards',
          body: 'Standardized chart and metric cards for easier expansion when new report types were added.',
        },
      ],
      challenge: {
        title: 'Large Query Windows',
        body: 'Long date-range requests caused heavy DB load and delayed dashboard rendering.',
        resolution: 'Added indexed columns and paginated report endpoints for controlled query cost.',
      },
      outcomeQuote:
        'Delivered a stable and actionable financial dashboard used for daily operations and monitoring.',
      links: {
        sourceUrl: '#',
        liveUrl: '#',
        liveLabel: 'Live Dashboard',
      },
    },
  },
  {
    title: 'Auth Service 2.0',
    slug: 'auth-service-2-0',
    description:
      'Unified OAuth2/OpenID provider with WebAuthn support and custom JWT orchestration.',
    tags: ['Go', 'gRPC', 'MongoDB'],
    category: 'Backend',
    status: 'Status: Staging',
    statusTone: 'stage',
    mediaTone: 'media-four',
    details: {
      intro:
        'A dedicated identity service for token issuance, SSO workflows, and secure service-to-service authentication.',
      problem: [
        'Existing authentication logic was duplicated across services, increasing maintenance and security risk.',
        'A centralized auth layer was needed to standardize token management and policy enforcement.',
      ],
      architecture: [
        {
          title: 'Auth Core',
          body: 'Go services process login flows, token lifecycle events, and policy-based access checks.',
        },
        {
          title: 'Service Contracts',
          body: 'gRPC interfaces expose authentication actions to internal services with strict schema contracts.',
        },
        {
          title: 'Session Store',
          body: 'MongoDB stores sessions and auth metadata for flexible token tracking and revocation support.',
        },
      ],
      keyDecisions: [
        {
          title: 'Central Token Issuer',
          body: 'Consolidated token generation to reduce drift between services and simplify audits.',
        },
        {
          title: 'gRPC Internal Gateway',
          body: 'Used gRPC for low-latency internal communication and typed service boundaries.',
        },
      ],
      challenge: {
        title: 'Token Revocation Consistency',
        body: 'Different services cached auth states differently, causing revocation delays in staging.',
        resolution: 'Added centralized revocation hooks and shorter cache windows for auth-sensitive routes.',
      },
      outcomeQuote:
        'Staging rollout confirms improved consistency for login, token verification, and revocation handling.',
      links: {
        sourceUrl: '#',
        liveUrl: '#',
        liveLabel: 'Staging Docs',
      },
    },
  },
  {
    title: 'K8s Mesh Observer',
    slug: 'k8s-mesh-observer',
    description:
      'Monitoring tool for Istio service mesh traffic analysis and automatic failure detection.',
    tags: ['Istio', 'Grafana', 'Prometheus'],
    category: 'Backend',
    status: 'Status: Production',
    statusTone: 'live',
    mediaTone: 'media-five',
    details: {
      intro:
        'A reliability-monitoring stack for service mesh traffic, latency patterns, and incident detection.',
      problem: [
        'Microservice traffic across clusters lacked centralized visibility, slowing down incident response.',
        'Teams needed near real-time health indicators and traceable service dependency failures.',
      ],
      architecture: [
        {
          title: 'Telemetry Collection',
          body: 'Istio and Prometheus capture service-level metrics, request rates, and error distributions.',
        },
        {
          title: 'Visualization',
          body: 'Grafana dashboards provide live views for latency, saturation, and error budgets.',
        },
        {
          title: 'Alerting Path',
          body: 'Threshold-based alerts and route-level anomalies trigger response workflows quickly.',
        },
      ],
      keyDecisions: [
        {
          title: 'Mesh-Native Metrics',
          body: 'Leverages Istio telemetry instead of custom instrumentation to reduce integration overhead.',
        },
        {
          title: 'SLO-Oriented Panels',
          body: 'Built dashboards around service objectives so teams can prioritize impact quickly.',
        },
      ],
      challenge: {
        title: 'Noisy Alert Streams',
        body: 'Raw thresholds generated too many alerts during transient spikes.',
        resolution: 'Added alert grouping, cooldown windows, and tighter service-specific thresholds.',
      },
      outcomeQuote:
        'Improved operational awareness and reduced mean-time-to-detect across mesh-based services.',
      links: {
        sourceUrl: '#',
        liveUrl: '#',
        liveLabel: 'Monitoring Console',
      },
    },
  },
  {
    title: 'Edge Computing Node',
    slug: 'edge-computing-node',
    description:
      'Low-latency data processing for IoT devices at the network edge using Rust and MQTT.',
    tags: ['Rust', 'Wasm', 'MQTT'],
    category: 'Full Stack',
    status: 'Status: Alpha',
    statusTone: 'alpha',
    mediaTone: 'media-six',
    details: {
      intro:
        'An edge runtime for ingesting device messages, running lightweight processing, and synchronizing selected data upstream.',
      problem: [
        'IoT workloads required faster local decisions without relying entirely on central cloud processing.',
        'Network instability made it necessary to process critical events directly at the edge node.',
      ],
      architecture: [
        {
          title: 'Ingestion Node',
          body: 'MQTT brokers collect sensor payloads from distributed devices with topic-based routing.',
        },
        {
          title: 'Processing Runtime',
          body: 'Rust services and Wasm modules execute low-latency transformations and rule checks.',
        },
        {
          title: 'Sync Pipeline',
          body: 'Selected aggregates are forwarded to central services for reporting and long-term storage.',
        },
      ],
      keyDecisions: [
        {
          title: 'Rust for Runtime Safety',
          body: 'Selected Rust for memory safety and predictable performance in constrained environments.',
        },
        {
          title: 'Wasm Extensibility',
          body: 'Wasm modules allow controlled extension of edge logic without redeploying the full node.',
        },
      ],
      challenge: {
        title: 'Intermittent Connectivity',
        body: 'Unstable links caused data gaps when direct cloud sync failed.',
        resolution: 'Introduced buffered local queues and retry policies for resilient event forwarding.',
      },
      outcomeQuote:
        'Alpha build validates local event processing and resilient sync behavior for edge-first deployments.',
      links: {
        sourceUrl: '#',
        liveUrl: '#',
        liveLabel: 'Technical Preview',
      },
    },
  },
]
