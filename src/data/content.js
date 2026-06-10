// src/data/content.js
// Single source of truth for site content. Pages import from here so copy
// only lives in one place.

export const profile = {
  name: 'Christopher Jones',
  title: 'Computer Science & Cybersecurity',
  tagline: "Honors student at West Virginia University (Class of '26), focused on security tooling, distributed systems, and low-level software.",
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
    slug: 'portmango',
    name: 'portmango',
    featured: true,
    tagline: 'A network mapper built from scratch in Go',
    meta: 'Personal project · 2026 – present',
    status: 'In active development',
    summary:
      'A network mapper I am building from the ground up in Go to deepen my systems-engineering and networking skills. Rather than cloning nmap feature-for-feature, portmango re-implements the core discovery techniques (ARP-based local host discovery, TCP SYN and connect scanning, and ICMP probing) while I study each protocol at the packet level and verify the behavior in Wireshark.',
    highlights: [
      'Designed around a structured, JSON-first output model rather than terminal text, so results are machine-readable by default.',
      'Differentiator: exposes the scanner to AI agents over the Model Context Protocol (MCP) for authorized network reconnaissance, a use case CLI tools like nmap were never shaped for.',
      'Developed and tested against an isolated, containerized lab network to keep all scanning in-scope and reproducible.',
      'Documented end to end in a developer’s notebook capturing the design decisions and trade-offs behind each module.',
    ],
    tech: ['Go', 'TCP/IP', 'ARP', 'ICMP', 'Wireshark', 'Docker', 'Model Context Protocol'],
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
    slug: 'mergeconflict',
    name: 'MergeConflict (MPX)',
    featured: false,
    tagline: 'A small operating system written from scratch',
    meta: 'CS 450 team project · Fall 2024',
    status: 'Source available',
    summary:
      'A working multiprogramming executive: a small operating system written in C and x86 assembly and built up over a semester with a four-person team, tested under QEMU. It supports process creation and scheduling, memory allocation, an interactive command handler, and device I/O. The most demanding and most rewarding project I have built, involving low-level debugging, careful teamwork, and the payoff of watching a real OS boot and run.',
    highlights: [
      'Built without the C standard library, so many core routines were implemented from scratch. I wrote the itoa and intToBCD conversions myself.',
      'Contributed across the kernel: process control, memory management, and the command handler.',
      'Practiced disciplined low-level debugging against a QEMU-emulated target.',
    ],
    tech: ['C', 'x86 Assembly', 'QEMU'],
    image: '/MergeConflict-1.png',
    links: [
      { label: 'Release 6.0 on GitHub', href: 'https://github.com/WVU-CS450/MergeConflict/releases/tag/R6', primary: true },
    ],
    credit: 'MergeConflict © 2024 Christopher Jones, Evan Humphrey, Tanner Forbes, Izaak Whetsell.',
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
      'CS 330/L Intro to Software Engineering / Lab',
      'CS 350 Computer System Concepts',
      'CS 450 Operating System Structure',
      'CPE 271/L Intro to Digital Logic Design / Lab',
      'CYBE 366 Secure Software Development',
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

export const skills = [
  { group: 'Languages', items: ['Java', 'C / C++', 'Go', 'JavaScript', 'HTML / CSS', 'x86 Assembly'] },
  { group: 'Frameworks & tools', items: ['React', 'Vite', '.NET 8', 'Node.js', 'Git / GitHub', 'Docker', 'Linux'] },
  { group: 'Systems & data', items: ['Apache Spark', 'Apache Hadoop', 'Firestore', 'MySQL', 'Wireshark', 'QEMU'] },
  { group: 'Spoken', items: ['English (native)', 'Spanish (intermediate)'] },
];
