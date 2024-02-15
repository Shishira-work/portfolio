/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shishira Y",
  title: "Hi!, I'm Shishira",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with experience of building Web and Mobile applications with Nextjs /JavaScript / Reactjs / Nodejs / React Native and other libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/18DW76G7FlNDX9J7PBpT6hD3iCrStrtew/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Shishira-work",
  linkedin: "https://www.linkedin.com/in/shishira-yedlapalli-44300420b/",
  gmail: "yedlapallishishira@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I'm a recent graduate encompassing C, C++, and Java. Equipped with 6+ months of hands-on experience.",
  skills: [
    emoji(
      "⚡ Develop highly interactive and responsive Front end / User Interfaces for web and mobile applications"
    ),
    
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    
    
  ],
  display: true // Set false to hide this section, defaults to true
};



// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Nowfloats Technologies Ltd.",
      companylogo: require("./assets/images/nfLogo.jpg"),
      date: "May 2023 - Jan 2024",
      desc: "As a Frontend Engineer, I was responsible for optimizing web functionality and user interface.",
      descBullets: [
        "Achieved a 25% boost in project delivery efficiency by implementing Next.js, React.js, RESTful APIs, JavaScript, Tailwind CSS, SASS, and HTML/CSS technologies within an Agile framework.",
        " Spearheaded the development of dynamic and responsive websites, contributing to a 20% boost in user engagement metrics."
      ]
    },
  ]
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Chaitanya Bharathi Institute of Technology",
      logo: require("./assets/images/cbitLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "October 2020 - May 2023",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Rumour detection onSocial Media using Bi-directional Graph Convolutional Networks",
      projectDesc: "Utilized Bi - GCN to effectively capture complex relationships and dependencies, enhancing the accuracy of rumour detection.",
      footerLink: [
        {
          name: "Python",
        },
        {
          name: "Neural Networks",
        },
        {
          name: "Natural Language Processing",
        },
        {
          name: "Pytorch",
        },
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Expen-sense",
      projectDesc: "An Android Application to give you a sense of your expenses and help you manage them effectively.",
      footerLink: [
        {
          name: "Android Studio",
        },
        {
          name: "Java",
        },
        {
          name: "Firebase",
        },
        {
          name: "XML",
        },
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Location Alarm App ",
      projectDesc: "A Location Alarm app enabling users to set precise latitude and longitude coordinates",
      footerLink: [
        {
          name: "Java",
        },
        {
          name: "Android Studio",
        },
        {
          name: "Firebase",
        },
        {
          name: " API (Google Maps)",
        },
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications🏆 "),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "CS50 Web development using Python and JavaScript by Harvard University.",
      // subtitle:
      //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/harvardLogo.png"),
      imageAlt: "Harvard logo",
      footerLink: [
        {
          name: "JavaScript",
          // url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "HTML and CSS",
          // url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Web development",
          // url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Goldman Sachs Software Engineering Virtual Experience Program on Forage",
      // subtitle:
      //   "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/goldmanSachs.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Credential ID: NxsMM7r2fkSGE3cRM",
          // url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

const positionSection = {
  title: emoji("Positions of Responsibility 🚀 "),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "Senior Coordinator at CBIT Open Source Community",
       subtitle:
         "2020 - 2022",
      image: require("./assets/images/coscLogo.jpg"),
      imageAlt: "cosc logo",
      footerLink: [
        // {
        //   name: "JavaScript",
        //   // url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "HTML and CSS",
        //   // url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Web development",
        //   // url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Chaitanya Svaasthya | Joint Secretary",
       subtitle:"2021 - 2022",
      //   "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/csLogo.jpg"),
      imageAlt: "svasthya Logo",
      footerLink: [
        // {
        //   name: "Credential ID: NxsMM7r2fkSGE3cRM",
        //   // url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    },

    {
      title: "Zenerations Hyderabad | Projects Manager ",
      subtitle: "2020 - 2022",
      image: require("./assets/images/zenLogo.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+91-7893818750",
  email_address: "yedlapallishishira@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  positionSection,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
