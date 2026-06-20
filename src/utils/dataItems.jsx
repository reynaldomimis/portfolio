const devIcons = {
  html: "https://cdn.simpleicons.org/html5",
  css: "https://img.icons8.com/color/48/css3.png",
  sass: "https://cdn.simpleicons.org/sass",
  react: "https://cdn.simpleicons.org/react",
  tailwind: "https://img.icons8.com/color/48/tailwind_css.png",
  bootstrap: "https://img.icons8.com/color/48/bootstrap.png",
  mui: "https://img.icons8.com/color/48/material-ui.png",

  node: "https://cdn.simpleicons.org/nodedotjs",
  express: "https://cdn.simpleicons.org/express",
  mysql: "https://cdn.simpleicons.org/mysql",
  sqlserver: "https://img.icons8.com/color/48/sql.png",
  api: "https://img.icons8.com/color/48/api.png",
  firebase: "https://cdn.simpleicons.org/firebase",
  appwrite: "https://cdn.simpleicons.org/appwrite",
  supabase: "https://cdn.simpleicons.org/supabase",

  java: "https://img.icons8.com/color/48/java-coffee-cup-logo.png",
  kotlin: "https://cdn.simpleicons.org/kotlin",
  android: "https://cdn.simpleicons.org/androidstudio",
  reactnative: "https://cdn.simpleicons.org/react",
  sketchware:
    "https://img.icons8.com/?size=100&id=68058&format=png&color=319AF2",

  git: "https://cdn.simpleicons.org/git",
  cmd: "https://img.icons8.com/color/48/console.png",
  powershell: "https://img.icons8.com/color/48/powershell.png",
  github: "https://cdn.simpleicons.org/github/white",
  vscode: "https://img.icons8.com/color/48/visual-studio-code-2019.png",
  netbeans: "https://cdn.simpleicons.org/apache-netbeanside",
  postman: "https://cdn.simpleicons.org/postman",
  figma: "https://cdn.simpleicons.org/figma",

  // SYSTEM / INFRASTRUCTURE SKILLS
  microsoft365: "https://img.icons8.com/color/48/microsoft.png",
  azuread: "https://img.icons8.com/color/48/azure-1.png",
  activeDirectory: "https://img.icons8.com/color/48/windows-client.png",
  googleWorkspace: "https://img.icons8.com/color/48/google.png",
  windowsServer: "https://img.icons8.com/color/48/windows-10.png",
  networking: "https://img.icons8.com/color/48/network.png",
  firewall: "https://img.icons8.com/color/48/firewall.png",
  voip: "https://img.icons8.com/color/48/phone.png",
  remoteSupport: "https://img.icons8.com/color/48/remote-desktop.png",
};

const projectIcon = [
  {
    icon: "https://res.cloudinary.com/dkbbweo5x/image/upload/v1669430483/portfolio-assets/Developer_Mode_qioqeg.png",
    title: "Web Development",
    anim: "fade-down-right",
    des: "Building and maintaining functional and aesthetic websites.",
  },
  {
    icon: "https://img.icons8.com/color/96/android-os.png",
    title: "Android Development",
    anim: "fade-left",
    des: "Building user-friendly Android apps using Java/Kotlin with attention to clean code and effective API integration.",
  },
  {
    icon: "https://res.cloudinary.com/dkbbweo5x/image/upload/v1669430375/portfolio-assets/Google_Code_pbs57q.png",
    title: "Responsive Design",
    anim: "zoom-out-left",
    des: "Creating websites that adapt smoothly to different devices, ensuring an enjoyable user experience on desktops, tablets, and phones.",
  },
  {
    icon: "https://img.icons8.com/color/96/api-settings.png",
    title: "API Integration (Postman)",
    anim: "fade-up",
    des: "Testing and integrating APIs using Postman to support web and mobile applications.",
  },
  {
    icon: "https://img.icons8.com/color/96/git.png",
    title: "Version Control with Git",
    anim: "fade-up-left",
    des: "Using Git for source control, collaborating with teams, and managing code versions efficiently.",
  },
  {
    icon: "https://res.cloudinary.com/dkbbweo5x/image/upload/v1669430375/portfolio-assets/Vector_n4mqiv.png",
    title: "Data Scraping & Automation",
    anim: "fade-down-right",
    des: "Collecting and organizing data efficiently to support projects and automate routine tasks using simple tools and scripts.",
  },
  {
    icon: "https://img.icons8.com/color/96/sql.png",
    title: "SQL Server Automation & POS Support",
    anim: "fade-down",
    des: "Assisted in developing monitoring dashboards and troubleshooting SQL and POS systems to improve reliability and performance.",
  },
  {
    icon: "https://img.icons8.com/color/96/project.png",
    title: "Custom Systems & Full-Stack Development",
    anim: "zoom-in-left",
    des: "Developed regional automation tools with Java/MySQL and built responsive front-ends using React.js, focusing on practical user needs.",
  },
  {
    icon: "https://img.icons8.com/?size=100&id=g7UKWvv49CoI&format=png&color=000000",
    title: "Microsoft 365, Azure AD & Google Workspace Administration",
    anim: "fade-down-right",
    des: "Managed user accounts, licenses, and security settings across Microsoft 365, Azure AD, and Google Workspace environments under supervision.",
  },
  {
    icon: "https://img.icons8.com/?size=100&id=12908&format=png&color=000000",
    title: "IT Support, Network & Ticketing Management",
    anim: "fade-up-left",
    des: "Provided hardware and software support to 200+ users onsite and remotely, handled ticketing systems, and assisted with network troubleshooting.",
  },
  {
    icon: "https://img.icons8.com/color/96/shopping-cart.png",
    title: "Vendor Coordination & Procurement",
    anim: "zoom-out-left",
    des: "Supported procurement activities including order tracking and vendor communication to ensure smooth delivery of technology equipment.",
  },
  {
    icon: "https://img.icons8.com/color/96/audio-wave--v1.png",
    title: "AV & Meeting Support",
    anim: "zoom-in",
    des: "Set up AV equipment for company meetings and events, ensuring smooth presentations and hybrid collaboration.",
  },
  {
    icon: "https://img.icons8.com/color/96/certificate.png",
    title: "Certifications & Training",
    anim: "flip-down",
    des: "Completed certifications in CCNAv7 (Routing & Switching), Java Programming, and Robotics Workshops; actively learning new IT skills.",
  },
  {
    icon: "https://img.icons8.com/color/96/server.png",
    title: "System Administration & Infrastructure",
    anim: "fade-up",
    des: "Gaining experience managing servers, Active Directory, and Group Policies to maintain reliable IT infrastructure.",
  },
  {
    icon: "https://img.icons8.com/color/96/security-checked.png",
    title: "Security & Compliance Management",
    anim: "fade-up-right",
    des: "Learning to implement security best practices including multi-factor authentication and email security under guidance.",
  },
];

const exampleProjects = [
  {
    title: "REM Hub - App Repository",
    image:
      "https://res.cloudinary.com/dkbbweo5x/image/upload/v1775645186/portfolio/remhub_uaksyd.png",
    description:
      "A website that allows users to discover and access a collection of useful applications, tools, and digital content in one platform.",
    techIcons: [
      devIcons.html,
      devIcons.css,
      devIcons.bootstrap,
      devIcons.tailwind,
      devIcons.react,
      devIcons.api,
    ],
    liveLink: "https://rem-hub.vercel.app/",
    codeLink: "https://github.com/reynaldomimis/rem-hub",
  },

  {
    title: "Klekmot - TikTok Downloader",
    image:
      "https://res.cloudinary.com/dkbbweo5x/image/upload/v1775645187/portfolio/klekmot_dp7nsx.png",
    description:
      "A tool that lets users download TikTok videos easily without watermarks in just a few clicks.",
    techIcons: [
      devIcons.html,
      devIcons.css,
      devIcons.bootstrap,
      devIcons.react,
      devIcons.tailwind,
      devIcons.api,
    ],
    liveLink: "https://klekmot.vercel.app",
    codeLink: "https://github.com/reynaldomimis/klekmot",
  },

  {
    title: "Soto Grande Hotel",
    image:
      "https://res.cloudinary.com/dkbbweo5x/image/upload/v1775645188/portfolio/sotogrande_vyn5f7.png",
    description:
      "A hotel website where users can browse rooms, view amenities, see pricing, and simulate bookings.",
    techIcons: [
      devIcons.html,
      devIcons.css,
      devIcons.bootstrap,
      devIcons.react,
      devIcons.sass,
      devIcons.api,
    ],
    liveLink: "https://sotogrande-baguio-hotel.vercel.app/",
    codeLink: "https://github.com/reynaldomimis/sgb-hotel-u",
  },

  {
    title: "SMM Booster",
    image:
      "https://res.cloudinary.com/dkbbweo5x/image/upload/v1775645186/portfolio/smmbooster_y5lbyy.png",
    description:
      "A sample SMM service website displaying marketing packages, pricing, and features using dummy data.",
    techIcons: [
      devIcons.html,
      devIcons.css,
      devIcons.bootstrap,
      devIcons.sass,
      devIcons.react,
    ],
    liveLink: "https://smm-booster.vercel.app/",
    codeLink: "https://github.com/reynaldomimis/smm-booster",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    letter: "F",
    skills: [
      { name: "HTML", icon: devIcons.html },
      { name: "CSS", icon: devIcons.css },
      { name: "Tailwind CSS", icon: devIcons.tailwind },
      { name: "Material UI", icon: devIcons.mui },
      { name: "Bootstrap", icon: devIcons.bootstrap },
      { name: "ReactJS", icon: devIcons.react },
    ],
  },

  {
    title: "Backend",
    letter: "B",
    skills: [
      { name: "Node.js", icon: devIcons.node },
      { name: "Express", icon: devIcons.express },
      { name: "MySQL", icon: devIcons.mysql },
      { name: "SQL Server", icon: devIcons.sqlserver },
      { name: "REST API", icon: devIcons.api },
      { name: "Firebase", icon: devIcons.firebase },
      { name: "Appwrite", icon: devIcons.appwrite },
      { name: "Supabase", icon: devIcons.supabase },
    ],
  },

  {
    title: "Android",
    letter: "A",
    skills: [
      { name: "Java", icon: devIcons.java },
      { name: "Kotlin", icon: devIcons.kotlin },
      { name: "React Native", icon: devIcons.reactnative },
      { name: "Sketchware", icon: devIcons.sketchware },
      { name: "Android Studio", icon: devIcons.android },
    ],
  },

  {
    title: "Tools",
    letter: "T",
    skills: [
      { name: "Git", icon: devIcons.git },
      { name: "CMD", icon: devIcons.cmd },
      { name: "PowerShell", icon: devIcons.powershell },
      { name: "GitHub", icon: devIcons.github },
      { name: "VS Code", icon: devIcons.vscode },
      { name: "Postman", icon: devIcons.postman },
      { name: "Figma", icon: devIcons.figma },
    ],
  },
];

const logoIcon =
  "https://res.cloudinary.com/dkbbweo5x/image/upload/v1670507775/portfolio-assets/received_1603800736731298-removebg-preview_ob24tn.png";

export { skillGroups, projectIcon, logoIcon, exampleProjects };
