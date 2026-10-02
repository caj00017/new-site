// src/data/content.js
// Single source of truth for site content. Pages import from here so copy
// only lives in one place.

export const profile = {
  name: 'Christopher Jones',
  title: 'Computer Science & Cybersecurity',
  tagline: "Honors student at West Virginia University (Class of '26) building toward a career in systems administration, systems engineering, and security engineering.",
  avatar: '/IMG_7895.jpg',
  links: {
    github: 'https://github.com/caj00017',
    linkedin: 'https://www.linkedin.com/in/christopher-jones-729089254/',
    handshake: 'https://app.joinhandshake.com/profiles/cjones',
    resume: '/resume.pdf',
    email: 'mailto:caj00017@mix.wvu.edu',
  },
};

// Projects are ordered: featured flagships first, then the rest.
export const projects = [
  {
    slug: 'homelab',
    name: 'Homelab',
    featured: true,
    tagline: 'Self-hosted services, virtualization, and a networking sandbox',
    meta: 'Personal infrastructure · 2025 – present',
    status: 'Always on',
    summary:
      'Two HP EliteDesk Minis: Pollux runs Proxmox VE and hosts most of my services in Linux containers and virtual machines; Castor runs Debian for experimentation and testing. I operate Pi-hole, Jellyfin, and a NeoForge Minecraft server, with metrics and logs collected in an observability stack. The private home LAN also gives portmango real systems to work against.',
    highlights: [
      'Pollux is the main Proxmox virtualization node, with 32 GB RAM and a 512 GB NVMe drive. Jellyfin runs in an LXC container.',
      'Pi-hole provides network-wide DNS/ad blocking and private home.arpa DNS; Pollux acts as a Tailscale subnet router for remote access.',
      'Prometheus, Grafana, Loki, and Grafana Alloy monitor real workloads, including Minecraft availability, resource usage, response time, and logs.',
    ],
    tech: ['Proxmox VE', 'Debian', 'LXC', 'Pi-hole', 'Tailscale', 'Prometheus', 'Grafana', 'Loki', 'Grafana Alloy'],
    links: [
      { label: 'See the full setup', href: '/homelab', primary: true },
    ],
  },
  {
    slug: 'picard',
    name: 'PICARD',
    featured: true,
    tagline: 'A platform for distributed machine-learning experiments',
    meta: 'CSEE 480 capstone · 5-person team · Spring 2026 – present',
    status: 'In active development',
    summary:
      'PICARD lets WVU researchers run machine-learning experiments on a dedicated Hadoop/Spark cluster without managing the distributed infrastructure themselves: upload an algorithm and dataset, set parameters, hit submit, and the platform handles authentication, queueing, distributed execution, and results. It grew out of a faculty thesis on detecting rare events in massive datasets and productizes that workflow for any researcher.',
    highlights: [
      'Designed the Parameter Sweep Engine: server-side batch generation that expands a range of parameters into one atomic, trackable batch, turning the tool into a proper instrument for ML research.',
      'Built the Onboarding Portal that replaces undocumented tribal knowledge with a canonical architecture walkthrough, setup guide, and troubleshooting reference.',
      'Produced the architecture diagrams and mapped the critical code paths across the React, .NET, and Spark stack to guide implementation.',
      'Helped delegate work across the team and drove the design and background research behind the next development phase.',
    ],
    tech: ['React', 'Vite', '.NET 8', 'Docker Swarm', 'Apache Spark', 'Apache Hadoop', 'MySQL', 'OAuth 2.0'],
  },
  {
    slug: 'portmango',
    name: 'portmango',
    featured: false,
    tagline: 'A network mapper built from scratch in Go',
    meta: 'Personal project · 2026 – present',
    status: 'In early development',
    summary:
      'A network mapper I am building from the ground up in Go to deepen my systems-engineering and networking skills. Rather than cloning nmap feature-for-feature, portmango re-implements the core discovery techniques (ARP-based local host discovery, TCP SYN and connect scanning, and ICMP probing) while I study each protocol at the packet level and verify the behavior in Wireshark.',
    highlights: [
      'Designed around a structured, JSON-first output model rather than terminal text, so results are machine-readable by default.',
      'Developed and tested against an isolated, containerized lab network to keep all scanning in-scope and reproducible.',
      'Documented end to end in a developer’s notebook capturing the design decisions and trade-offs behind each module.',
    ],
    tech: ['Go', 'TCP/IP', 'ARP', 'ICMP', 'Wireshark', 'Docker'],
  },
  {
    slug: 'mergeconflict',
    name: 'MergeConflict (MPX)',
    featured: false,
    tagline: 'A small operating system written from scratch',
    meta: 'CS 450 team project · Fall 2024',
    status: 'Source available',
    summary:
      'A working multiprogramming executive: a small operating system written in C and built up over a semester with a four-person team, tested under QEMU. It supports process creation and scheduling, memory allocation, an interactive command handler, and device I/O. The most demanding and most rewarding project I have built, involving low-level debugging, careful teamwork, and the payoff of watching a real OS boot and run.',
    highlights: [
      'Built without the C standard library, so many core routines were implemented from scratch. I wrote the itoa and intToBCD conversions myself.',
      'Contributed across the kernel: process control, memory management, and the command handler.',
      'Practiced disciplined low-level debugging against a QEMU-emulated target.',
    ],
    tech: ['C', 'QEMU'],
    image: '/MergeConflict-1.png',
    links: [
      { label: 'Release 6.0 on GitHub', href: 'https://github.com/WVU-CS450/MergeConflict/releases/tag/R6', primary: true },
    ],
    credit: 'MergeConflict © 2024 Christopher Jones, Evan Humphrey, Tanner Forbes, Izaak Whetsell.',
  },
  {
    slug: 'genai-research',
    name: 'Generative AI in Programming Work',
    featured: false,
    tagline: 'A research report on the benefits and drawbacks of generative AI',
    meta: 'Research report · WVU · unpublished',
    status: 'Available to read',
    summary:
      'An in-depth analysis of how generative AI is reshaping programming work, weighing real productivity gains for experienced developers against the risks of over-reliance for novice programmers. I synthesized scholarly research with interviews of faculty experts and laid out best practices for using AI responsibly in professional software development.',
    highlights: [
      'Synthesized academic sources and faculty interviews into a single argument.',
      'Examined the ethical and practical implications of AI in the software workplace.',
    ],
    tech: ['Technical writing', 'Research'],
    links: [
      { label: 'Read the report', href: 'https://docs.google.com/document/d/16r7Xpsy2Y9nXnA7KpYg6BSHmOL50XLau0qD36neGq28/edit?tab=t.0', primary: true },
    ],
  },
  {
    slug: 'taskgarden',
    name: 'TaskGarden',
    featured: false,
    tagline: 'A gamified task manager that grows a virtual plant',
    meta: 'CS 230 team project · Spring 2024',
    status: 'Live demo',
    summary:
      'A task-management web app where completing tasks earns points that grow a virtual plant, a playful take on productivity. Built with a five-person team using React on the front end and Google Firestore on the back end, deployed on Firebase Hosting. It was my first real web app and the project that turned a passing interest in software engineering into a focus I have carried ever since.',
    highlights: [
      'Implemented the React front end and integrated it with a Firestore data model.',
      'Shipped a working, hosted product over the course of a semester alongside teammates.',
    ],
    tech: ['React', 'Firestore', 'Firebase Hosting'],
    image: '/taskgarden-ss.png',
    links: [
      { label: 'Try the live app', href: 'https://taskgarden-8c627.web.app/', primary: true },
      { label: 'Source on GitHub', href: 'https://github.com/WVU-CS230-2024-01-Group10/TaskGarden' },
    ],
    credit: 'TaskGarden © 2024 Christopher Jones, Elijah Hall, Daniel Campa, Gillian Breeden, Sandrik Tabidze. Best experienced in a 1920×1080 window.',
  },
];

export const experience = [
  {
    role: 'Tutor, LCSEE Learning & Mentoring Center',
    org: 'West Virginia University',
    location: 'Morgantown, WV',
    dates: 'Sept 2024 – Present',
    summary:
      'I provide free, one-on-one coursework help to students in Computer Science, Cybersecurity, and Computer Engineering. I reinforce concepts across programming, algorithms, and systems, and coach debugging and problem-solving strategies that build independent learners.',
    courses: [
      'CS 110 Introduction to Computer Science',
      'CS 111 Introduction to Data Structures',
      'CS 210 File and Data Structures',
      'CS 220 Discrete Mathematics',
      'CS 310 Principles of Programming Languages',
      'CS 320 Analysis of Algorithms',
      'CS 350 Computer System Concepts',
      'CS 450 Operating Systems Structure',
      'CPE 310 Microprocessor Systems',
      'CYBE 266 Foundations of Cybersecurity',
      'CYBE 366 Secure Software Development',
    ],
    moreCourses: [
      'CS 440 Database Design and Theory',
      'CS 495 Independent Study',
      'CPE 453 Data/Computer Communications',
      'CYBE 460 Foundation of Cybersecurity 2',
      'CYBE 466 Host Based Cyber Defense',
      'CYBE 467 Penetration Testing',
    ],
  },
  {
    role: 'Robotics Instructor Intern',
    org: 'NASA Katherine Johnson IV&V Education Resource Center',
    location: 'Fairmont, WV',
    dates: 'Summers 2023 & 2024',
    summary:
      'Across two summers with the West Virginia Robotics Alliance, I taught robotics programming to elementary and middle-school students on the VEX IQ platform, designed and ran engaging STEM activities, and helped organize a regional drone competition. I was recognized by my supervisors for adaptability, reliability, and effective communication.',
  },
];

export const education = {
  school: 'West Virginia University',
  location: 'Morgantown, WV',
  degree: 'B.S. Computer Science · B.S. Cybersecurity',
  dates: 'Aug 2022 – Dec 2026',
  gpa: '3.79',
  honors: "President's List · Honors College",
  coursework: [
    'Secure Software Development',
    'Operating System Structure',
    'Web Application Design',
    'File and Data Structures',
    'Analysis of Algorithms',
    'Discrete Mathematics',
    'Calculus I–III',
  ],
};

export const homelab = {
  tagline: 'Two HP EliteDesk Minis, self-hosted services, and a private home LAN. A homelab for learning how Linux systems behave by configuring, running, and troubleshooting them myself.',
  stats: [
    { value: '2', label: 'physical Linux nodes' },
    { value: '32 GB', label: 'Pollux RAM' },
    { value: '512 GB', label: 'Pollux NVMe' },
  ],
  boxes: [
    {
      hostname: 'pollux',
      name: 'Pollux',
      role: 'Main Proxmox virtualization node',
      status: 'online',
      statusLabel: 'Primary node',
      blurb: 'Pollux runs Proxmox VE and hosts most of the lab’s services and workloads in Linux containers and virtual machines. It is also my Tailscale subnet router, providing remote access to internal services.',
      specs: [
        { k: 'Model', v: 'HP EliteDesk Mini' },
        { k: 'CPU', v: 'Intel Core i7-6700K · 8 threads' },
        { k: 'Memory', v: '32 GB' },
        { k: 'Storage', v: '512 GB NVMe' },
        { k: 'OS', v: 'Proxmox VE' },
      ],
      screenshot: {
        src: '/proxmox.png',
        alt: 'Pollux Proxmox dashboard with the Jellyfin container, host CPU and memory graphs, and a console showing system information.',
        caption: 'Pollux: Proxmox VE dashboard and host console',
        width: 1910,
        height: 1073,
      },
    },
    {
      hostname: 'castor',
      name: 'Castor',
      role: 'Debian node for experimentation and testing',
      status: 'online',
      statusLabel: 'Always on',
      blurb: 'Castor is a separate physical Debian system for additional Linux experimentation and testing. Most services run on Pollux; Castor gives me another machine to work against without putting every experiment on the main host.',
      specs: [
        { k: 'Model', v: 'HP EliteDesk 800 G3 Mini' },
        { k: 'CPU', v: 'Intel Core i5-6500T · 4 threads' },
        { k: 'Memory', v: '16 GiB' },
        { k: 'OS', v: 'Debian 13 (trixie)' },
      ],
      screenshot: {
        src: '/elitedesk-2-fastfetch.png',
        alt: 'Castor Fastfetch output showing Debian 13, an HP EliteDesk 800 G3 Mini, Intel Core i5-6500T CPU, memory, and disk usage.',
        caption: 'Castor: Debian system information in Fastfetch',
        width: 664,
        height: 303,
      },
    },
  ],
  services: [
    {
      heading: 'Pi-hole',
      body: 'Provides network-wide DNS/ad blocking and private home.arpa DNS. It is part of the internal network configuration, so DNS is something I administer alongside the services that depend on it.',
    },
    {
      heading: 'Jellyfin',
      body: 'A self-hosted media server running in an LXC container on Pollux. It is one of the services I manage through Proxmox.',
    },
    {
      heading: 'Minecraft',
      body: 'A NeoForge Minecraft server running as a persistent homelab service. Its availability, resource usage, response time, and logs are monitored through the observability stack.',
    },
  ],
  observability: {
    intro: 'I use Prometheus, Grafana, Loki, and Grafana Alloy to monitor workloads I actually run. The Minecraft dashboard brings metrics and logs together so I can check whether the server is available and see what is happening inside the container.',
    tools: [
      { heading: 'Prometheus', body: 'Collects and stores metrics from homelab workloads.' },
      { heading: 'Grafana', body: 'Visualizes metrics and logs in dashboards.' },
      { heading: 'Loki', body: 'Stores logs for querying alongside metrics in Grafana.' },
      { heading: 'Grafana Alloy', body: 'Collects and forwards telemetry to the metrics and logging backends where needed.' },
    ],
    screenshot: {
      src: '/grafana.png',
      alt: 'Grafana Minecraft dashboard showing server availability, players online, container CPU usage, RAM usage, response time, and server logs.',
      caption: 'Minecraft: availability, players, container CPU, RAM, response time, and logs',
      width: 1535,
      height: 637,
    },
  },
  networking: [
    {
      heading: 'Private LAN and DNS',
      body: 'The lab runs on my private home LAN. Pi-hole provides private home.arpa names for internal services as well as network-wide DNS/ad blocking. Physical hosts, containers, and services give me real DNS and service-to-service traffic to inspect and troubleshoot.',
    },
    {
      heading: 'Remote access with Tailscale',
      body: 'Pollux acts as a Tailscale subnet router so I can reach internal homelab services remotely. That access works with the private DNS configuration, keeping remote access and internal name resolution part of the same setup.',
    },
  ],
  development: [
    {
      heading: 'Software against real systems',
      body: 'The lab gives portmango real network targets and ARP, ICMP, TCP/IP, and DNS traffic to experiment with. Physical Linux nodes and container workloads let me study discovery and service behavior beyond an isolated development environment.',
    },
    {
      heading: 'Operating what I build',
      body: 'Every service is something I have to configure and keep running myself. Managing Linux hosts, containers, service configuration, and private remote access makes administration and security decisions part of the work. When something breaks, I’m the one who checks the network, metrics, and logs. This is a learning environment that I also use day to day.',
    },
  ],
};

export const skills = [
  {
    group: 'Linux & systems',
    items: ['Linux administration', 'Debian 13', 'Ubuntu Server', 'Arch', 'systemd', 'SSH', 'Users / groups / permissions', 'apt', 'Storage / filesystems', 'Apache HTTP Server'],
  },
  {
    group: 'Networking & troubleshooting',
    items: ['TCP/IP', 'DNS', 'ARP', 'ICMP', 'Wireshark', 'Linux networking', 'Local firewalls', 'Hardware / software troubleshooting'],
  },
  {
    group: 'Programming & automation',
    items: ['Go', 'Python', 'Bash', 'PowerShell', 'C', 'Java', 'JavaScript', 'HTML / CSS', 'Ansible', 'Git / GitHub'],
  },
  {
    group: 'Infrastructure & virtualization',
    items: ['Proxmox VE', 'LXC', 'Docker', 'Docker Swarm', 'QEMU', 'Pi-hole', 'Tailscale', 'Jellyfin', 'NeoForge'],
  },
  {
    group: 'Observability',
    items: ['Prometheus', 'Grafana', 'Loki', 'Grafana Alloy'],
  },
  {
    group: 'Frameworks & data platforms',
    items: ['React', 'Vite', '.NET 8', 'Node.js', 'Apache Spark', 'Apache Hadoop', 'MySQL', 'Firestore', 'Firebase Hosting', 'OAuth 2.0'],
  },
  {
    group: 'Writing & research',
    items: ['Technical writing', 'Research', 'Architecture documentation'],
  },
  { group: 'Spoken', items: ['English (native)', 'Spanish (intermediate)'] },
];
