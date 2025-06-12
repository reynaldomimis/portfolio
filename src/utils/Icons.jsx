const skillIcon = [
  "https://res.cloudinary.com/dkbbweo5x/image/upload/v1669426495/portfolio-assets/image_1_gnrs7t.png",
  "https://res.cloudinary.com/dkbbweo5x/image/upload/v1669426495/portfolio-assets/image_2_jkki1b.png",
  "https://res.cloudinary.com/dkbbweo5x/image/upload/v1669426495/portfolio-assets/image_3_nppmtt.png",
  "https://res.cloudinary.com/dkbbweo5x/image/upload/v1669426495/portfolio-assets/image_4_j9e5fb.png",
  "https://res.cloudinary.com/dkbbweo5x/image/upload/v1669426495/portfolio-assets/image_5_nyjoub.png",
  "https://res.cloudinary.com/dkbbweo5x/image/upload/v1669426495/portfolio-assets/image_6_zfdirs.png",
  "https://res.cloudinary.com/dkbbweo5x/image/upload/v1669426496/portfolio-assets/image_7_wxznyx.png",
  "https://res.cloudinary.com/dkbbweo5x/image/upload/v1669426496/portfolio-assets/image_8_jrvarp.png",
];

const clientIcon = [
  {
    icon: "https://res.cloudinary.com/dkbbweo5x/image/upload/v1669435365/portfolio-assets/Ellipse_2364_pfv62m.png",
    anim: "fade-down-right",
    delay: 2000,
  },
  {
    icon: "https://res.cloudinary.com/dkbbweo5x/image/upload/v1669435365/portfolio-assets/Ellipse_2366_1_g9zluc.png",
    anim: "fade-down-right",
    delay: 1600,
  },
  {
    icon: "https://res.cloudinary.com/dkbbweo5x/image/upload/v1669435365/portfolio-assets/Ellipse_2363_ldmivb.png",
    anim: "fade-down-right",
    delay: 1300,
  },
  {
    icon: "https://res.cloudinary.com/dkbbweo5x/image/upload/v1669435365/portfolio-assets/Ellipse_2365_h4shsv.png",
    anim: "fade-down-right",
    delay: 1000,
  },
  {
    icon: "https://res.cloudinary.com/dkbbweo5x/image/upload/v1669435365/portfolio-assets/Ellipse_2367_j3gpug.png",
    anim: "fade-down-right",
    delay: 800,
  },
  {
    icon: "https://res.cloudinary.com/dkbbweo5x/image/upload/v1669435365/portfolio-assets/Ellipse_2368_dlzniy.png",
    anim: "fade-down-right",
    delay: 500,
  },
];

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
    image: "https://via.placeholder.com/400x180",
    title: "One Piece",
    description: "Provide a list of pirate groups, birthdays, and more.",
    techIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    ],
    liveLink: "https://example.com/live",
    codeLink: "https://github.com/example",
  },
  {
    image: "https://via.placeholder.com/400x180",
    title: "One Piece",
    description: "Provide a list of pirate groups, birthdays, and more.",
    techIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    ],
    liveLink: "https://example.com/live",
    codeLink: "https://github.com/example",
  },
  {
    image: "https://via.placeholder.com/400x180",
    title: "One Piece",
    description: "Provide a list of pirate groups, birthdays, and more.",
    techIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    ],
    liveLink: "https://example.com/live",
    codeLink: "https://github.com/example",
  },
];

const tesIcon = [
  {
    name: "CyberAlpha",
    pos: "Java Developer and Scripter",
    anim: "fade-down-right",
    content:
      "Warden is a multi talented person in terms of programming. He inspires me to expand my studies from basic programming to robotics and security. He is a friend you can rely all the time.",
    icon: "https://res.cloudinary.com/dkbbweo5x/image/upload/v1670508331/portfolio-assets/received_5494284784022072_dajwzh.jpg",
  },
  {
    name: "John Anthony Oling",
    pos: "Javascript Developer",
    anim: "zoom-out-left",
    content:
      "As capstone team lead and having rey as my assistant in developing our capstone application, I can say that he did a really good job at managing our codebase and development process.",
    icon: "https://res.cloudinary.com/dkbbweo5x/image/upload/v1670508173/portfolio-assets/received_538793407854358_xvpssp.webp",
  },
  {
    name: "Fortune Bitos",
    pos: "Front-End Developer",
    anim: "fade-up-right",
    content:
      "Isa sa hinahangaan kong classmate dahil noon kahit lock of knowledge ako nung 2nd year sa programming. Tinuraan kami hanggang sa natoto nakong gumawa ng sariling website sobrang bait nya, humble at napakasipag dahil working student.",
    icon: "https://res.cloudinary.com/dkbbweo5x/image/upload/v1670508063/portfolio-assets/IMG_20221208_220029_mqnrsu.jpg",
  },
];

const logoIcon =
  "https://res.cloudinary.com/dkbbweo5x/image/upload/v1670507775/portfolio-assets/received_1603800736731298-removebg-preview_ob24tn.png";

const ap = {
  k: "service_qroxal6",
  t: "sgb_f6ky1mq",
  p: "MekNSzmvedlixd4wZ",
};
export {
  skillIcon,
  projectIcon,
  clientIcon,
  tesIcon,
  logoIcon,
  ap,
  exampleProjects,
};
