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
      title: "Mood Book",
      des: "Full stack mood tracker web app designed for users to record and reflect on their emotions.",
      img: "/mood-book.png",
      iconLists: ["/re.svg", "/js.svg", "/tail.svg", "/node.svg", "/next.svg", "/aws-cognito.svg", "/mongodb.png"],
      link: "https://github.com/BrittneyOeur/MoodBook",
      live: "https://mood-book-ten.vercel.app/"
    },
    {
      id: 2,
      title: "Lippie Finder",
      des: "A website that allows users to search for specific lip products, powered by Makeup API.",
      img: "/lippie-finder.png",
      iconLists: ["/re.svg", "/js.svg", "/node.svg"],
      link: "https://github.com/BrittneyOeur/Lippie-Finder",
      live: "https://lippie-finder.vercel.app/"
    },
    {
      id: 3,
      title: "JavaScript Weather App",
      des: "A simple weather app that allows users to check the weather from any location. Powered by the OpenWeatherMap API.",
      img: "/WeatherApp_2.png",
      iconLists: ["/html.svg", "/css.svg", "/js.svg"],
      link: "https://github.com/BrittneyOeur/Weather_App",
      live:"https://weather-app-private-alpha.vercel.app/"
    },
    {
      id: 4,
      title: "Web Based Side-Scrolling Game",
      des: "A web browser-based, side-scrolling game featuring My Melody from Sanrio.",
      img: "/SideScrollingGame.png",
      iconName: ["HTML", "CSS", "JavaScript"],
      iconLists: ["/html.svg", "/css.svg", "/js.svg"],
      link: "https://github.com/BrittneyOeur/My-Melody-Side-Scrolling-Game",
      live: "https://brittneyoeur.github.io/My-Melody-Side-Scrolling-Game/"
    },
    {
      id: 5,
      title: "WithCare Health Tracking Mobile App",
      des: "Health tracking mobile application (high fidelity prototype) for informal caregivers.",
      img: "/WithCare.png",
      iconLists: ["/figma.svg", "/notion.svg", "balsamiq.png"],
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
      img: "/git.svg",
      name: "Github",
      link: "https://github.com/BrittneyOeur"
    },
    {
      id: 2,
      img: "/link.svg",
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/brittney-oeur/"
    },
    {
      id: 3,
      img: "/link.svg",
      name: "Email",
      link: "mailto:oeur.brittney@gmail.com"
    },
  ];