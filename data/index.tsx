export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "mailto:oeur.brittney@gmail.com" },
    { name: "Art", link: "#art" },
];

  export const gridItems = [
    {
      id: 1,
      title: "Graduated from the University of Washington with a major in Applied Computing and a minor in Informatics.",
      description: "",
      /* Changes the size of the box */
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[20vh] lg:h-[372px]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "",
      spareImg: "",
    },
    {
      id: 2,
      title: "C++, Python, HTML, CSS, JavaScript, TypeScript",
      description: "Languages I am familiar with...",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "w-full h-full",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "",
    },
    {
      id: 3,
      title: "for more info",
      description: "Check out my resume",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
  ];

  export const projects = [
    {
      id: 1,
      title: "OTC Vision: Medication Label Reader",
      des: "Mobile app that uses computer vision to read over-the-counter medication labels and share key details about the product.",
      img: "/kiss-mark.svg",
      iconLists: ["/re.svg", "/ts.svg", "cloud-vision-api.svg", "/aws-lambda.svg", "/expo-go.svg"],
      link: "https://github.com/BrittneyOeur/OTC-Vision",
      live: "https://github.com/BrittneyOeur/OTC-Vision"
    },
    {
      id: 2,
      title: "Mood Book",
      des: "Full stack mood tracker web application designed for users to record and reflect on their emotions.",
      img: "/Mood-Book-Icon.ico",
      iconLists: ["/re.svg", "/node.svg", "/js.svg", "/tail.svg", "/next-dark.svg", "/aws-cognito.svg", "/mongodb.png"],
      link: "https://github.com/BrittneyOeur/MoodBook",
      live: "https://mood-book-ten.vercel.app/"
    },
    {
      id: 3,
      title: "Animal Crossing DS/3DS Chip Detector",
      des: "Computer vision application to detect and identify Animal Crossing DS/3DS game chips from images.",
      img: "",
      iconLists: ["/cplusplus.svg", "/opencv.svg"],
      link: "https://github.com/BrittneyOeur/Animal-Crossing-Chips-Detection-Computer-Vision",
      live: "https://github.com/BrittneyOeur/Animal-Crossing-Chips-Detection-Computer-Vision/blob/main/README.md"
    },
    {
      id: 4,
      title: "WithCare Health Tracking Mobile App (Prototype)",
      des: "Health tracking mobile application (high fidelity prototype) for informal caregivers.",
      img: "/WithCare.png",
      iconLists: ["/notion.svg", "balsamiq.png", "/figma.svg"],
      link: "https://github.com/BrittneyOeur/WithCare",
      live: "https://www.figma.com/design/VZr6nngKseVXMTyAEfiHvr/WithCare-(Mobile-Application-Wireframe)?node-id=0-1&t=jwo69ATQLgPrdYJO-1"
    },
  ];

  export const art = [
    {
      id: 1,
      img: "/konon.png"
    },
    {
      id: 2,
      img: "/Drawing2.png"
    },
    {
      id: 3,
      img: "08092022.png"
    }
  ];

  export const graphics = [
    {
      id: 1,
      img: "/twitterBanner1.png"
    },
    {
      id: 2,
      img: "/Megumi.png"
    },
    {
      id: 3,
      img: "/Jett Header.png"
    }
  ]
  
  export const socialMedia = [
    {
      id: 1,
      img: "/email.svg",
      name: "Email",
      link: "mailto:oeur.brittney@gmail.com"
    },
    {
      id: 2,
      img: "/Github.svg",
      name: "Github",
      link: "https://github.com/BrittneyOeur"
    },
    {
      id: 3,
      img: "/linkedin.svg",
      name: "Linkedin",
      link: "https://www.linkedin.com/in/brittney-oeur/"
    },
  ];