// data/projects.js
const projects = [
    {
      id: 1,
      title: "Quiz",
      description: "Découvrez mon projet Quiz",
      image: "Images/quiz.png",
      languages: [
        { name: "JavaScript", url: "Images/javascript.png" },
        { name: "React", url: "Images/react.png" },
        { name: "Node.js", url: "Images/nodejs.png" },
        { name: "MongoDB", url: "Images/mongodb.png" }
      ],
      ratings: {
        functionality: 90,
        ergonomics: 85,
        codeQuality: 80,
        design: 75
      },
      texts: [
        "Le Quiz permet de tester vos connaissances dans divers domaines.",
        "Interface utilisateur intuitive et responsive.",
        "Back-end robuste utilisant Node.js et MongoDB."
      ]
    },
    {
      id: 2,
      title: "Paris Sportif",
      description: "Détails sur le projet Paris Sportif",
      image: "Images/pari.png",
      languages: [
        { name: "Vue.js", url: "public/images/Vue.png" },
        { name: "Python", url: "Images/python.png" },
        { name: "Redis", url: "Images/redis.png" },
        { name: "MySQL", url: "Images/mysql.png" }
      ],
      ratings: {
        functionality: 95,
        ergonomics: 90,
        codeQuality: 88,
        design: 80
      },
      texts: [
        "Simulation de paris sportifs avec une monnaie virtuelle.",
        "Fonctionnalités complètes de paris, y compris les mises en direct.",
        "Architecture RESTful avec un front-end Vue.js."
      ]
    },
    {
      id: 3,
      title: "Twitter Clone",
      description: "Clone simplifié de Twitter",
      image: "Images/twitter.png",
      languages: [
        { name: "Python", url: "Images/python.png" },
        { name: "Django", url: "Images/django.png" },
        { name: "JavaScript", url: "Images/javascript.png" }
      ],
      ratings: {
        functionality: 85,
        ergonomics: 80,
        codeQuality: 85,
        design: 70
      },
      texts: [
        "Clone de Twitter permettant de poster des tweets, suivre des utilisateurs et plus encore.",
        "Implémentation de Django pour le back-end.",
        "Utilisation de WebSocket pour les notifications en temps réel."
      ]
    },
    {
      id: 4,
      title: "Boulder Dash",
      description: "Réinvention du jeu classique Boulder Dash avec des graphismes modernes et des niveaux supplémentaires.",
      image: "Images/boulderDash.png",
      languages: [
        { name: "HTML5", url: "Images/html5.png" },
        { name: "CSS3", url: "Images/css3.png" },
        { name: "JavaScript", url: "Images/javascript.png" }
      ],
      ratings: {
        functionality: 80,
        ergonomics: 75,
        codeQuality: 85,
        design: 70
      },
      texts: [
        "Jeu de puzzle basé sur la navigation dans un labyrinthe rempli de roches et de gemmes.",
        "Utilisation de Canvas et JavaScript pour une expérience de jeu fluide et réactive.",
        "Niveaux de difficulté progressifs et scoreboard intégré."
      ]
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "Application web pour suivre les routines de musculation et les progrès des utilisateurs.",
      image: "Images/fitnessTracker.png",
      languages: [
        { name: "React", url: "Images/react.png" },
        { name: "Node.js", url: "Images/nodejs.png" },
        { name: "MongoDB", url: "Images/mongodb.png" }
      ],
      ratings: {
        functionality: 90,
        ergonomics: 85,
        codeQuality: 88,
        design: 80
      },
      texts: [
        "Suivi des exercices quotidiens, des répétitions et des ensembles, ainsi que des calories brûlées.",
        "Graphiques interactifs pour visualiser les progrès au fil du temps.",
        "Système de recommandations d'exercices basé sur l'IA."
      ]
    },
    {
      id: 6,
      title: "Event Manager",
      description: "Plateforme pour organiser, gérer et promouvoir des événements de différentes tailles.",
      image: "Images/eventManager.png",
      languages: [
        { name: "Angular", url: "Images/angular.png" },
        { name: "Spring Boot", url: "Images/springBoot.png" },
        { name: "PostgreSQL", url: "Images/postgresql.png" }
      ],
      ratings: {
        functionality: 95,
        ergonomics: 90,
        codeQuality: 92,
        design: 85
      },
      texts: [
        "Interface pour les organisateurs d'événements pour créer et gérer des événements.",
        "Fonctionnalités pour les participants pour s'inscrire et suivre les événements à venir.",
        "Intégrations avec des plateformes de paiement et des calendriers."
      ]
    }
  ];
  
  export default projects;
  