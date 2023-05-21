import React from "react";

const projectsObj = [
  {
    project_id: 1,
    project_name: "Project Manager",
    project_overview:
      "The Project Management Application is a web-based tool developed using the MERN stack (MongoDB, Express, React, and Node.js) that simplifies the management of projects. The application provides a centralized platform for project managers and team members to collaborate, manage tasks, track progress, and share project-related information.",
    project_features: [
      "User authentication: The application supports user authentication and authorization.",
      "Project creation and management: Users can create new projects, assign team members, and set deadlines for each task.",
      "Task management: Users can create tasks within each project, set priorities, and assign them to team members.",
      "Task progress tracking: Users can track the progress of tasks and update the status of tasks in real-time.",
      "Team collaboration: The application supports team collaboration through a centralized dashboard where team members can communicate, share files, and receive notifications.",
      "Reporting: The application provides a detailed report of project progress and performance, including task status, deadlines, and resource allocation.",
    ],
    project_details: [
      "The backend of the application is built using Node.js and Express, with a MongoDB database for data storage.",
      "The frontend is built using React.js, with Redux for state management and Material-UI for UI design.",
      "The application is deployed on a cloud-based platform such as AWS or Heroku.",
    ],
    project_benefits: [
      "Simplify project management: The application simplifies project management by providing a centralized platform for project managers and team members to collaborate and share project-related information.",
      "Improve productivity: By providing real-time updates and notifications, the application improves productivity by reducing communication barriers and streamlining the task management process.",
      "Easy to use: The application is easy to use, with an intuitive user interface and simple navigation.",
    ],
    project_conclusion:
      "The Project Management Application is a web-based tool that simplifies project management and improves team collaboration. Built using the MERN stack, the application provides a centralized platform for project managers and team members to manage tasks, track progress, and share project-related information. Its user-friendly interface and real-time updates make it an ideal tool for businesses looking to improve productivity and streamline project management.",
    created_by: "Soo Hwangbo",
    skills: ["HTML", "CSS", "Bootstrap", "React", "Node", "Express", "MongoDB"],
    img: ["/assets/img/works_3.jpg"],
    url: "https://bugtracker.soohwangbo.com/",
    github_url_client: "https://github.com/shwangbo80/bug_tracker_client.git",
    github_url_api: "https://github.com/shwangbo80/bug_tracker_api.git",
  },
  {
    project_id: 2,
    project_name: "Forum Application",
    project_overview:
      "The Forum Application is a web-based forum platform developed using the MERN stack (MongoDB, Express, React, and Node.js) that allows users to create and participate in discussions. The application provides a centralized platform for users to share knowledge, ask questions, and engage in meaningful conversations.",
    project_features: [
      "User authentication: The application supports user authentication and authorization using JWT authentication.",
      "Forum creation and management: Users can create new forums and moderate them by adding, editing, or deleting posts and comments.",
      "Post and comment creation: Users can create new posts and comments, with support for rich text formatting, images, and video.",
      "User profiles: The application allows users to create and customize their profiles, including profile picture, bio, and contact information.",
    ],
    project_details: [
      "The backend of the application is built using Node.js and Express, with a MongoDB database for data storage.",
      "The frontend is built using React.js, with Redux for state management and Material-UI for UI design.",
      "The application is deployed on a cloud-based platform such as AWS or Heroku.",
    ],
    project_benefits: [
      "Centralized platform for knowledge sharing: The application provides a centralized platform for users to share knowledge, ask questions, and engage in meaningful conversations.",
      "Community building: The application fosters a sense of community by allowing users to interact with each other, share experiences, and learn from one another.",
      "Scalable and customizable: The application is built using the MERN stack, which makes it easy to scale and customize based on the needs of the users.",
    ],
    project_conclusion:
      "The Forum Application is a web-based forum platform that allows users to create and participate in discussions. Built using the MERN stack, the application provides a centralized platform for users to share knowledge, ask questions, and engage in meaningful conversations. Its user-friendly interface and support for rich text formatting, images, and video make it an ideal tool for businesses, educational institutions, or online communities looking to build a knowledge-sharing platform..",
    created_by: "Soo Hwangbo",
    skills: ["HTML", "CSS", "Bootstrap", "React", "Node", "Express", "MongoDB"],
    img: ["/assets/img/works_1.jpg"],
    url: "https://forum.soohwangbo.com/",
    github_url_client: "https://github.com/shwangbo80/forum_client.git",
    github_url_api: "https://github.com/shwangbo80/forum_server.git",
  },
  {
    project_id: 3,
    project_name: "Blog Application",
    project_overview:
      "The Blog Application is a web-based platform developed using the MERN stack (MongoDB, Express, React, and Node.js) that allows users to create and publish blog posts. The application provides a centralized platform for bloggers to share their thoughts, ideas, and experiences with their readers.",
    project_features: [
      "User authentication: The application supports user authentication and authorization using JWT authentication.",
      "Blog creation and management: Users can create new blogs and manage them by adding, editing, or deleting posts and comments",
      "Post creation: Users can create new posts, with support for rich text formatting, images, and video.",
      "Comment system: The application allows readers to leave comments on blog posts, with support for nested comments and threaded discussions.",
    ],
    project_details: [
      "The backend of the application is built using Node.js and Express, with a MongoDB database for data storage.",
      "The frontend is built using React.js, with Redux for state management and Material-UI for UI design..",
      "The application is deployed on a cloud-based platform such as AWS or Heroku.",
    ],
    project_benefits: [
      "Centralized platform for blogging: The application provides a centralized platform for bloggers to share their thoughts, ideas, and experiences with their readers.",
      "Reader engagement: The application fosters reader engagement by allowing readers to leave comments on blog posts and engage in threaded discussions.",
      "Scalable and customizable: The application is built using the MERN stack, which makes it easy to scale and customize based on the needs of the users.",
    ],
    project_conclusion:
      "The Blog Application is a web-based platform that allows users to create and publish blog posts. Built using the MERN stack, the application provides a centralized platform for bloggers to share their thoughts, ideas, and experiences with their readers. Its user-friendly interface and support for rich text formatting, images, and video make it an ideal tool for bloggers looking to build an online presence and engage with their readers.",
    created_by: "Soo Hwangbo",
    skills: ["HTML", "CSS", "Bootstrap", "React", "Node", "Express", "MongoDB"],
    img: ["/assets/img/works_2.jpg"],
    url: "https://blog.soohwangbo.com/",
    github_url_client: "https://github.com/shwangbo80/mern_blog_client.git",
    github_url_api: "https://github.com/shwangbo80/mern_blog_api.git",
  },
];

export default projectsObj;
