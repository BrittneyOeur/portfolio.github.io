export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  export const gridItems = [
    {
      id: 1,
      title: "Graduated from the University of Washington with a major in Applied Computing and a minor in Informatics.",
      description: "",
      /* Changes the size of the box */
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[40vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "",
      spareImg: "",
    },
    {
      id: 2,
      title: "C++, Python, HTML, CSS, JavaScript",
      description: "Languages I am familiar with",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "w-full h-full",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "",
    },
    {
      id: 3,
      title: "tech stack...",
      description: "Always improving my",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Versatile artist, creating in different mediums",
      description: "Also an...",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "I play video games and learn about custom keyboards",
      description: "Outside of work...",
      className: "md:col-span-2 md:row-span-1",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "typing.png",
      spareImg: "",
    },
    {
      id: 6,
      title: "My resume",
      description: "",
      className: "lg:col-span-1 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];

  export const projects = [
    {
      id: 1,
      title: "Personal Portfolio (Web App)",
      des: "Personal website showcasing personal passion projects with Aceternity UI compenents integration.",
      img: "/portfolio.png",
      iconLists: ["/tail.svg", "/next.svg", "/re.svg"],
      link: "https://brittneyoeur-personal-website.vercel.app/",
    },
    {
      id: 2,
      title: "DS/3DS Chips Detection",
      des: "Computer vision application designed to detect DS/3DS chips specificaully tailored for the Animal Crossing Series, utilizing OpenCV methods.",
      img: "/ac_matching.png",
      iconLists: ["/next.svg", "/cplusplus.svg", "/vscode.svg"],
      link: "https://github.com/adrianhajdin/zoom-clone",
    },
    {
      id: 3,
      title: "WithCare Health Tracking Mobile App",
      des: "Health tracking mobile application (high fidelity prototype) for informal caregivers.",
      img: "/WithCare.png",
      iconLists: ["/figma.svg", "/notion.svg", "balsamiq.png"],
      link: "https://github.com/adrianhajdin/ai_saas_app",
    },
    {
      id: 4,
      title: "2D Platformer Video Game",
      des: "2D platformer video game with three levels, each with different terrain.",
      img: "/platformer_sc.png",
      iconName: ["C#", "Unity"],
      iconLists: ["/csharp.svg", "/unity.svg"],
      link: "https://github.com/BrittneyOeur/2D_Platformer",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/BrittneyOeur"
    },
    {
      id: 2,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/brittney-o-05697b159/"
    },
  ];