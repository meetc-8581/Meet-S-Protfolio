// Website related settings
const settings = {
  isSplash: true,
  useCustomCursor: true,
};

const greeting = {
  title: "Hey there !",
  title2: "Meet Chanchad",
  logo_name: "Meet Chanchad",
  nickname: "Meet",
  full_name: "Meet Chanchad",
  subTitle:
    "I am a student pursuing a master's in computer science at the University of Texas at Dallas, focusing on software development with Data Structures, Full Stack applications, and everything in between.",
  resumeLink: "",
  mail: "mailto:meetchanchad7@gmail.com",
};

const socialMediaLinks = {
  github: "https://github.com/meetc-8581",
  linkedin: "https://www.linkedin.com/in/meet-chanchad",
  gmail: "meetchanchad7@gmail.com",
};

const skills = {
  title: "",
  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "simple-icons:html5",
      style: {
        color: "#E34F26",
      },
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fa-css3",
      style: {
        color: "#1572B6",
      },
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "simple-icons:javascript",
      style: {
        backgroundColor: "#FFFFFF",
        color: "#F7DF1E",
      },
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "simple-icons:react",
      style: {
        color: "#61DAFB",
      },
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "simple-icons:node-dot-js",
      style: {
        color: "#339933",
      },
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "simple-icons:npm",
      style: {
        color: "#CB3837",
      },
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "simple-icons:mongodb",
      style: {
        color: "#439743",
      },
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "simple-icons:java",
      style: {
        color: "#f89820",
      },
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "simple-icons:mysql",
      style: {
        color: "#4479A1",
      },
    },
    {
      skillName: "jQuery",
      fontAwesomeClassname: "simple-icons:jquery",
      style: {
        color: "#0865A6",
      },
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "simple-icons:git",
      style: {
        color: "#E94E32",
      },
    },
    {
      skillName: "C",
      fontAwesomeClassname: "simple-icons:c",
      style: {
        color: "#E94E32",
      },
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "simple-icons:cplusplus",
      style: {
        color: "#E94E32",
      },
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "simple-icons:python",
      style: {
        color: "#3776AB",
      },
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Texas at Dallas",
      subtitle: "Master of Science - Computer science",
      logo_path: "ut-dallas-logo02.png",
      alt_name: "SSEC",
      duration: "2021-2023 (Expected)",
      descriptions: [
        "Design and Analysis of Algorithms, Database Design, Web Programming Languages, Machine Learning,Statistical Method for Data Science, Developing and securing cloud edge and IoT.",
      ],
      website_link: "https://www.utdallas.edu/",
    },
    {
      title: "Gujarat Technological University",
      subtitle: "Bachelor of Engineering -  Computer Engineering",
      logo_path: "gtu.png",
      alt_name: "GTU",
      duration: "2017 - 2021",
      descriptions: [
        " Object Oriented Programming with C++ and Java, Operating Systems, Data Structures, Compiler Design, Analysis and Design of Algorithms, Artificial Intelligence, Data Mining and Business Intelligence, Advanced Engineering Mathematics, DBMS, Cyber Security, System Programming.",
        "",
      ],
      website_link: "https://www.gtu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google Cloud Fundamentals: Core Infrastructure",
      subtitle: "Google Cloud",
      logo_path: "google_cloud.jpg",
      certificate_link: "",
      alt_name: "Google Cloud",
      color_code: "#3f7ee8",
    },
    {
      title:
        "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
      subtitle: "DeepLearning.AI",
      logo_path: "deeplearning.jpg",
      certificate_link: "",
      alt_name: "DeepLearning.AI",
      color_code: "#fff",
    },
    {
      title: "Essential Google Cloud Infrastructure: Foundation",
      subtitle: "Google Cloud",
      logo_path: "google_cloud.jpg",
      certificate_link: "",
      alt_name: "Google Cloud",
      color_code: "#3f7ee8",
    },
    {
      title: "Reliable Google Cloud Infrastructure: Design and Process",
      subtitle: "Google Cloud",
      logo_path: "google_cloud.jpg",
      certificate_link: "",
      alt_name: "Google Cloud",
      color_code: "#3f7ee8",
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "DeepLearning.AI",
      logo_path: "deeplearning.jpg",
      certificate_link: "",
      alt_name: "DeepLearning.AI",
      color_code: "#fff",
    },
    {
      title: "Elastic Google Cloud Infrastructure: Scaling and Automation",
      subtitle: "Google Cloud",
      logo_path: "google_cloud.jpg",
      certificate_link: "",
      alt_name: "Google Cloud",
      color_code: "#3f7ee8",
    },
    {
      title: "Essential Google Cloud Infrastructure: Core Services",
      subtitle: "Google Cloud",
      logo_path: "google_cloud.jpg",
      certificate_link: "",
      alt_name: "Google Cloud",
      color_code: "#3f7ee8",
    },
    {
      title: "Python Data Structures",
      subtitle: "University of Michigan",
      logo_path: "universityofmichigan.jpg",
      certificate_link: "",
      alt_name: "University of Michigan",
      color_code: "#002e62",
    },
    {
      title: "Python Programming for Everybody",
      subtitle: "University of Michigan",
      logo_path: "universityofmichigan.jpg",
      certificate_link: "",
      alt_name: "University of Michigan",
      color_code: "#002e62",
    },
  ],
};

const experience = {
  title: "Experience",
  subtitle: "",
  description:
    "I have obtained a total of 11 months of interning experience. Gained experience in working with several programming languages, frameworks, and libraries. Building, Testing, and Deploying software and web applications in diverse environments.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Software Developer Intern",
          company: "Amelia",
          company_url: "",
          logo_path: "amelia.svg",
          duration: "May 2020 - Oct 2020",
          location: "Remote",
          description: `Worked on development of a responsive web app called Amelia - A mental health tool for work. Utilized React, Axios, and reactrouter to create dynamic components for the SPA. Applied Agile development practice to create Node.js powered secure RESTfull API endpoints leveraging ExpressJS. Integrated MongoDB no-SQL database for fast and efficient database operations.
          `,
          color: "#2a79d7",
        },
        {
          title: "Web Development Intern",
          company: "Rlogical techsoft ",
          company_url: "",
          logo_path: "Rlogical.png",
          duration: "Jan 2020 - Mar 2020",
          location: "Remote",
          description: `Worked on the backend development of job portal website using Django Python Framework. Participated in team meetings and collaborated with a team of interns and followed agile methodology throughout SDLC to tailor and develop projects fulfilling client requirements. Built robust APIs taking into consideration complex business logic functions.`,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color:
            "linear-gradient(120deg, rgba(30,83,249,1) 0%, rgba(141,86,241,1) 45%, rgb(224 32 118) 100%)",
        },
        {
          title: "Jr. Programmer Intern",
          company: "Dentaweb services ",
          company_url: "",
          logo_path: "DentawebServices1.png",
          duration: "Nov 2019 - Jan 2020",
          location: "Office",
          description: `Played an instrumental role in development during core infrastructure migration process of the SaaS platform. Collaborated with a team and redesigned the MySQL schema from scratch which improved the overall development experience and improved the query fetch time by 20%. Optimized and load tested all the critical queries which helped in reducing the data fetch time by 30%. `,
          color:
            "linear-gradient(120deg, rgba(30,83,249,1) 0%, rgba(141,86,241,1) 45%, rgb(224 32 118) 100%)",
        },
      ],
    },
  ],
};

const projectsHeader = {
  title: "Projects",
  description:
    "My projects focus on a wide veriety of topics. From Full stack development to maching learning to database design. I like to deep dive in to anyting I take on hand.",
  avatar_image_path: "projects_image.svg",
};

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "meet_profile.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. Want to hire? Feel free to hit me up ",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "E-commerce PC parts Store",
      url: "",
      description:
        "Developed website for PC hardware products using React.js where users can register, login, manage their cart, and customize their PC configurations by search and filter through products.These requests are handled by a Rest-full API built using Axios, Express.js and Node.js. Used Mongo DB and Mongoose for database operations and aggregations while using Git / Git-hub for version control",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "node.js",
          iconifyClass: "logos:nodejs-icon",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos:mongodb",
        },
        {
          name: "Express",
          iconifyClass: "logos:express",
        },
      ],
    },
    {
      id: "1",
      name: "Agriculture automation and recommendation system",
      url: "",
      description:
        "Created a platform to aid farmers with new technologies in automation of farms. Created an interface using React.js, Bootstrap. Collecting live field data using an array of sensors uploaded to an API developed using Express.js, Node.js and utilized it for live reports and monitoring, aided with MongoDB for efficient querying, along with providing strategic recommendations to farmers.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "node.js",
          iconifyClass: "logos:nodejs-icon",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos:mongodb",
        },
        {
          name: "Express",
          iconifyClass: "logos:express",
        },
      ],
    },
    {
      id: "2",
      name: "Movie Recommendation Engine",
      url: "",
      description:
        "User rating prediction using Collaborative filtering and used concept of K-nearest neighbors to sort predicted ratings and movies. Achieved an RMSE value of 0.90",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos:python",
        },
        {
          name: "Numpy",
          iconifyClass: "logos:numpy",
        },
        {
          name: "Pandas",
          iconifyClass: "simple-icons:pandas",
        },
      ],
    },
    {
      id: "3",
      name: "Image Compression Algorithm",
      url: "",
      description:
        " Achieved a decent image quality with 1/6 compression ratio using K-means algorithm.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos:python",
        },
        {
          name: "Numpy",
          iconifyClass: "logos:numpy",
        },
        {
          name: "Pandas",
          iconifyClass: "simple-icons:pandas",
        },
      ],
    },
    {
      id: "4",
      name: "Spam Email Detection System",
      url: "",
      description:
        "Achieved a 95.5 accuracy detecting spam email using MCAP Logistic Regression Algorithm",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos:python",
        },
        {
          name: "Numpy",
          iconifyClass: "logos:numpy",
        },
        {
          name: "Pandas",
          iconifyClass: "simple-icons:pandas",
        },
      ],
    },
    {
      id: "4",
      name: "Secure Cloud File Sharing",
      url: "",
      description:
        "A secure cloud file sharing platform with advanced access management algorithm.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos:python",
        },
        {
          name: "Numpy",
          iconifyClass: "logos:numpy",
        },
        {
          name: "Django",
          iconifyClass: "logos:django-icon",
        },
      ],
    },
  ],
};

//hello

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
