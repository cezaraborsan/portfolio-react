import React from "react";
import Project from "./Project";
import useIntersectionObserver from "./hooks/useIntersectionObserver";

const Projects = () => {
  const handleIntersection = (target) => {
    target.classList.add("visible");
  };

  const targetRef = useIntersectionObserver(handleIntersection, {
    threshold: 0.05,
  });

  // Array containing project data
  const projectData = [
    {
      id: 1,
      photo: "./travel-img.jpg",
      title: "Travel Landing Page",
      description:
        'This landing page was designed and built as part of my portfolio using HTML, CSS, SASS, and JavaScript. The design was inspired by a project I found on Figma Community. You can check it out <a href="https://www.figma.com/file/VHzI6vlD3QaxmLxaEJ4xy3/Travel-Landing-Page-Free-Community" target="_blank" rel="noopener noreferrer" className="figmaLink">here</a>. As one of my first projects using SASS, I wanted to challenge myself and push my skills further. I also used the Swiper library for the slider, which allowed me to gain experience with a useful tool for future projects. <hr> While the landing page was designed for a travel website, it can easily be modified for other domains due to its adaptable design. This project not only showcases my technical abilities but also my creativity and attention to detail. I hope you enjoy exploring it as much as I enjoyed building it.',
      technologies: "HTML5, SASS, JAVASCRIPT",
      shortDescription:
        "Innovative travel landing page showcasing creative design and technical expertise.",
      demoLink: "https://cezaraborsan.github.io/Norway_Landing_Page/",
      codeLink: "https://github.com/cezaraborsan/Norway_Landing_Page",
      isActive: true,
    },

    {
      id: 2,
      photo: "./mugler-img.jpg",
      title: "Mugler Website",
      description:
        "The Mugler Website project showcases my skills in JavaScript, HTML, and SCSS as I create my own version of the popular clothing brand's website. As a fan of various clothing brands, I've been studying their websites and was inspired to tackle this project. In addition to the main page, I've also created a login/register page where users can enter their email address to proceed to the password entry page. Additionally, there is a page showcasing some of the brand's products. <hr> This project allowed me to develop my front-end development skills and create a website that highlights my attention to detail and ability to create a sleek and stylish design.",
      technologies: "HTML5, SASS, JAVASCRIPT",
      shortDescription:
        "I created a Mugler Website deliver a simple yet impactful user experience that captures the brand's essence with elegance.",
      demoLink: "https://cezaraborsan.github.io/Mugler_Website/",
      codeLink: "https://github.com/cezaraborsan/Mugler_Website",
      isActive: true,
    },

    {
      id: 3,
      photo: "./movie-img.jpg",
      title: "Movie Application",
      description:
        "Introducing FILM101, a movie application built with JavaScript, SCSS, and HTML, featuring the popular TMDB API. This application is inspired by well-known movie websites such as IMDB, Metacritic, and Rotten Tomatoes, and allows users to search for their favorite movies and TV shows by name or category. <hr> On the main page, you can find a curated list of top-rated movies and TV shows. Additionally, when you click on any of these items, a modal window appears with more details about the movie or show. With its intuitive design and comprehensive search functionality, FILM101 caters to both avid movie enthusiasts and casual viewers, providing an all-in-one platform for searching and exploring movies and TV shows using the TMDB API.",
      technologies: "HTML5, SASS, JAVASCRIPT",
      shortDescription:
        "Discover top-rated movies and TV shows, explore genres, and access comprehensive details, all in one intuitive platform using TMDB API.",
      demoLink: "https://cezaraborsan.github.io/Film101-MovieApp/",
      codeLink: "https://github.com/cezaraborsan/Film101-MovieApp",
      isActive: true,
    },

    {
      id: 4,
      photo: "./recipe-img.jpg",
      title: "Recipe Application",
      description:
        "The Recipe Application is a Vue.js app that showcases my skills in frontend development using this popular JavaScript framework. Built with a focus on creating a delightful culinary experience, the app leverages TheMealDB API and TheCocktailDB API to provide users with a vast collection of recipes for both meals and drinks. <hr> In developing this app, I created reusable and modular components in Vue.js, enabling efficient and organized code structure. Each component handles specific functionalities, such as displaying recipes, searching, filtering, and favoriting recipes. This approach not only showcases my ability to create complex UIs but also demonstrates my understanding of Vue.js component-based architecture.<hr>Furthermore, I paid special attention to styling and user experience, aiming for an intuitive and visually appealing design. With responsive layouts and smooth transitions, the Recipe App ensures seamless navigation across different devices.",
      technologies: "VUE.JS",

      shortDescription:
        "Recipe App created with Vue.js, utilizing TheMealApi and TheDrinksApi for a delightful culinary experience.",
      demoLink: "https://cezaraborsan.github.io/Recipe-App/#/",
      codeLink: "https://github.com/cezaraborsan/Recipe-App",
      isActive: true,
    },

    {
      id: 5,
      photo: "./news-img.jpg",
      title: "The Newsletter",
      description:
        "The Newsletter is a Vue.js app and website that brings the latest news right at your fingertips. Inspired by renowned news websites like The New York Times and The Guardian, this app provides a seamless news browsing experience. Powered by the News API, The Newsletter offers a vast collection of news articles from various sources worldwide.<hr>With The Newsletter, you can effortlessly search for news articles on any topic of interest. The intuitive search functionality allows you to explore specific categories or enter keywords to find relevant news. The app's main page showcases a curated list of important news articles, ensuring you stay updated with the latest headlines.<hr>The design of The Newsletter is carefully crafted to deliver a visually appealing and user-friendly interface. The responsive layout adapts to different devices, enabling a seamless browsing experience on desktops, tablets, and mobile phones. The attention to detail in the design ensures a pleasant and immersive reading experience.<hr>One of the unique features of The Newsletter is the integration of the weather API. In the app's navbar, you'll find the current temperature displayed for your location. This additional touch provides a convenient way to check the weather while browsing the news.<hr>Please note that a demo for The Newsletter is not available at the moment due to API limitations. However, rest assured that the app is designed to deliver an exceptional news browsing experience.",
      technologies: "VUE.JS",
      shortDescription:
        "Recipe App created with Vue.js, utilizing TheMealApi and TheDrinksApi for a delightful culinary experience.",
      projectImage: "./the_newsletter_desktop.png",
      demoLink: "",
      codeLink: "https://github.com/cezaraborsan/The_Newsletter",
      isActive: false,
    },

    {
      id: 6,
      photo: "./movie-app-react.jpg",
      title: "Movie App with React",
      description:
        "Introducing FILM101 V2, an exciting movie application built with React. As a fellow movie enthusiast, I couldn't resist the opportunity to reimagine my existing movie project, originally created with pure JavaScript, using the power of React. This allowed me to dive into a fresh approach while refining my skills in this popular JavaScript framework. <hr>  FILM101 retains the core essence of its JavaScript counterpart found in my portfolio. It remains a comprehensive platform for all movie and TV show lovers, harnessing the incredible TMDB API to deliver an outstanding movie browsing experience. Just like before, FILM101 empowers users to search for their beloved movies and TV shows, uncovering a vast collection of cinematic treasures. <hr> With its sleek and modern design, FILM101 offers an intuitive interface that guides users on an exciting journey of exploring movies. Whether you're on the hunt for a specific title or eager to discover new gems, the application's robust search functionality and carefully curated categories have got you covered. You'll find yourself effortlessly immersing into the world of cinema, discovering captivating stories with just a few clicks.",
      technologies: "REACT",
      shortDescription:
        "Film101, reborn in React, keeps the spirit of its JavaScript predecessor while embracing the power of React's features. ",
      demoLink: "https://film101-movie-app.netlify.app/",
      codeLink: "https://github.com/cezaraborsan/Film101_Movie_App_React",
      isActive: true,
    },
    {
      id: 7,
      photo: "./restaurant-project.jpg",
      title: "Restaurant Landing Page",
      description:
        'This project is a responsive landing page for a Japanese restaurant, developed using React. The design of the landing page was inspired by a project available in the Figma Community, you can check it out <a href="https://www.figma.com/community/file/1200799657217214030/Food-Website" target="_blank" rel="noopener noreferrer" className="figmaLink">here</a>. I created this project to improve my CSS skills and gain hands-on experience with React development. While recreating the original design, I added my own unique style and included extra features to make it even better. <hr> One of the great aspects of this project is its flexibility. It can be easily adapted for other restaurants or different topics altogether. With some modifications to the content and styling, this landing page can be transformed to suit the needs of various businesses or interests. Whether it is a coffee shop, a boutique store, or a personal portfolio, the structure and components of this project provide a solid foundation that can be customized to fit different purposes. ',
      technologies: "REACT",
      shortDescription:
        "Flexible, responsive landing page for a Japanese restaurant, built with React. Easily customizable for any business or topic. ",
      demoLink: "https://miyabi-house-restaurant.netlify.app/",
      codeLink: "https://github.com/cezaraborsan/restaurant-website",
      isActive: true,
    },
    {
      id: 8,
      photo: "./tasks-img.jpg",
      title: "Yesterday's Task",
      description:
        "I created this React app as a way to refine my development skills, particularly in React. The application provides a user-friendly interface for managing tasks. I aimed for a clean and straightforward design, inspired by a newspaper pallet color, to ensure an intuitive user experience. The layout prioritizes task titles and descriptions, making it easy to input, edit, and mark tasks as complete. This project allowed me to practice React concepts while also exploring how to create an organized and visually appealing design.",
      technologies: "REACT",
      shortDescription:
        "Manage, edit, complete, and delete your tasks with a clean and user-friendly interface.",
      demoLink: "https://yesterdays-tasks.netlify.app/",
      codeLink: "https://github.com/cezaraborsan/Yesterdays-Tasks",
      isActive: true,
    },
  ];

  return (
    <section ref={targetRef} className="projects-section translate-section">
      <div className="projects-content">
        <h2 className="projects-title">Projects</h2>
        <p className="projects-description">
          Have a look at some of my projects. Each project presents a unique
          opportunity for me to showcase my skills in web development, while
          continuously learning and pushing my limits in this exciting field.
        </p>
        <div className="projects-container">
          {projectData.map((project) => (
            <Project
              key={project.id}
              photo={project.photo}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              shortDescription={project.shortDescription}
              projectImage={project.projectImage}
              demoLink={project.demoLink}
              codeLink={project.codeLink}
              isActive={project.isActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
