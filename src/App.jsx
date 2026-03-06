import { useState, useEffect } from "react";
import cookup_image from "./assets/cookup.png"
import gamehub_image from "./assets/game_hub.png"
import pokedex_image from "./assets/Pokedex.PNG"
import meet_app from "./assets/meet-app-page.png"
import myflix from "./assets/myflix.png"
import myflix_client  from "./assets/myflix_client.png"
import chat_app_image from "./assets/chat_reactnative_app.png"
import rmapiapp from "./assets/rmapiapp.png"
import clicky_game_image from "./assets/CliclyGameImage.PNG"
import word_guess_image from "./assets/validate-input.PNG"
import train_scheduler_image from "./assets/trainscheduler.PNG"

const NAV_LINKS = ["Home", "Skills", "Projects", "About"];

const SKILL_ICONS = {
  HTML5: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 28L4 4h24l-2 24-10 3L6 28z" fill="#E44D26"/>
      <path d="M16 29.5l8.1-2.2 1.7-19.3H16v21.5z" fill="#F16529"/>
      <path d="M16 13h-4.1l-.3-3H16V7H8.2l.8 9H16v-3zm.1 8.5l-3.3-.9-.2-2.6h-3l.4 4.5 6.1 1.7v-2.7z" fill="#EBEBEB"/>
      <path d="M16 13v3h3.8l-.4 4.6-3.4.9v2.7l6.1-1.7 1-11.5H16z" fill="#fff"/>
    </svg>
  ),
  CSS3: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 28L4 4h24l-2 24-10 3L6 28z" fill="#1572B6"/>
      <path d="M16 29.5l8.1-2.2 1.7-19.3H16v21.5z" fill="#33A9DC"/>
      <path d="M16 13H9.9l.2 2.5H16V13zm-6.4-3H16V7.5H7.4L9.6 10zm6.4 10.5v-2.5h-3.5l.2 2.2 3.3.3z" fill="#EBEBEB"/>
      <path d="M16 15.5v2.5h3.6l-.3 3.7-3.3.9v2.7l6.1-1.7.1-.6.9-10.5H16zm0-8v2.5h7.7l.2-2.5H16z" fill="#fff"/>
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" fill="#F7DF1E"/>
      <path d="M9.6 25.8l2.3-1.4c.4.8.8 1.4 1.7 1.4.9 0 1.4-.3 1.4-1.7V16h2.9v8.2c0 2.8-1.6 4-4 4-2.2 0-3.4-1.1-4.3-2.4zM19.4 25.5l2.3-1.3c.6 1 1.4 1.7 2.7 1.7 1.2 0 1.9-.6 1.9-1.3 0-.9-.7-1.3-2-1.8l-.7-.3c-2-.8-3.3-1.9-3.3-4.1 0-2 1.5-3.6 4-3.6 1.7 0 3 .6 3.9 2.2l-2.1 1.4c-.5-.9-1-1.2-1.7-1.2-.8 0-1.3.5-1.3 1.2 0 .8.5 1.2 1.7 1.7l.7.3c2.3 1 3.6 2 3.6 4.3 0 2.4-1.9 3.8-4.5 3.8-2.5 0-4.1-1.2-4.9-2.9-.3 0-.3 0-.3-.1z" fill="#333"/>
    </svg>
  ),
  React: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="2.8" fill="#61DAFB"/>
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 16 16)"/>
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 16 16)"/>
    </svg>
  ),
  Nextjs: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#000"/>
      <path d="M9.5 21V11h8.6v1.7h-6.7v2.7h6.2v1.7h-6.2v3.1h6.9V22H9.5v-1z" fill="white"/>
      <path d="M20.5 11h2l-6 10h-2l6-10z" fill="white"/>
    </svg>
  ),
  Nodejs: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3L4 9.5v13L16 29l12-6.5v-13L16 3z" fill="#539E43"/>
      <path d="M16 7.5l7.5 4.3v8.5L16 24.5 8.5 20.3v-8.5L16 7.5z" fill="#333"/>
      <path d="M16 14.5v3.5l3 1.7v-3.5L16 14.5zM13 16.2l3 1.8v3.5l-3-1.8v-3.5z" fill="#539E43"/>
      <path d="M13 12.7l3 1.8 3-1.8-3-1.8-3 1.8z" fill="#6CC24A"/>
    </svg>
  ),
  Expressjs: (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <text x="2" y="22" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="bold" fill="white">express</text>
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3c-1 4-3.5 6-4.5 9.5C10 16.5 11.5 21 16 29c4.5-8 6-12.5 4.5-16.5C19.5 9 17 7 16 3z" fill="#47A248"/>
      <path d="M16 29v-5" stroke="#47A248" strokeWidth="1.5"/>
      <path d="M16 24c-3.5-2-5-5.5-4-9" stroke="#B8C4BB" strokeWidth="0.8"/>
      <path d="M16 24c3.5-2 5-5.5 4-9" stroke="#6FAE48" strokeWidth="0.8"/>
    </svg>
  ),
  Oracle: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="11" width="28" height="10" rx="5" fill="#F80000"/>
      <text x="5" y="19" fontFamily="Arial" fontSize="7.5" fontWeight="bold" fill="white">ORACLE</text>
    </svg>
  ),
  C: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="13" fill="#A8B9CC"/>
      <path d="M21 20.5c-1.2 1.3-2.8 2-4.8 2-3.8 0-6.7-2.9-6.7-6.5s2.9-6.5 6.7-6.5c2 0 3.6.7 4.8 2l-2 2c-.7-.8-1.7-1.2-2.8-1.2-2.2 0-3.8 1.7-3.8 3.7s1.6 3.7 3.8 3.7c1.1 0 2.1-.4 2.8-1.2l2 2z" fill="white"/>
    </svg>
  ),
  Cpp: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="13" fill="#00599C"/>
      <path d="M14.5 20.5c-1.2 1.3-2.8 2-4.8 2-3.8 0-6.2-2.9-6.2-6.5s2.4-6.5 6.2-6.5c2 0 3.6.7 4.8 2l-2 2c-.7-.8-1.7-1.2-2.8-1.2-2.2 0-3.3 1.7-3.3 3.7s1.1 3.7 3.3 3.7c1.1 0 2.1-.4 2.8-1.2l2 2z" fill="white"/>
      <path d="M20 13.5h1.5v2H23v1.5h-1.5v2H20v-2h-1.5V15.5H20v-2zM25.5 13.5H27v2h1.5v1.5H27v2h-1.5v-2H24V15.5h1.5v-2z" fill="white"/>
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3c-6.2 0-5.8 2.7-5.8 2.7V9h11.7v1.3H8.6S3 9.7 3 16c0 6.3 3.5 6.1 3.5 6.1H9v-2.9S8.8 16 12 16h10.7s3 .05 3-2.9V8.4S26.2 3 16 3z" fill="#3776AB"/>
      <path d="M16 29c6.2 0 5.8-2.7 5.8-2.7V23H10.1v-1.3h13.3S29 22.3 29 16c0-6.3-3.5-6.1-3.5-6.1H23v2.9s.2 3.2-3.2 3.2H9.1s-3-.05-3 2.9v5.7S5.8 29 16 29z" fill="#FFC331"/>
      <circle cx="13.5" cy="7" r="1.5" fill="white"/>
      <circle cx="18.5" cy="25" r="1.5" fill="white"/>
    </svg>
  ),
  Bootstrap: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="6" fill="#7952B3"/>
      <path d="M9 8h8.5c3.5 0 5.5 1.8 5.5 4.5 0 2-1.2 3.3-2.8 3.8 2 .4 3.3 1.8 3.3 3.9 0 3-2.2 4.8-5.8 4.8H9V8zm4 6.5h3.8c1.5 0 2.3-.7 2.3-1.9s-.8-1.9-2.3-1.9H13v3.8zm0 6.8h4.2c1.6 0 2.5-.8 2.5-2.1s-.9-2.1-2.5-2.1H13v4.2z" fill="white"/>
    </svg>
  ),
  MaterialUI: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 20.5V9l8 4.5v4.5L14 15v9L2 20.5z" fill="#00B0FF"/>
      <path d="M14 24V15l8-4.5V19L14 24z" fill="#0081CB"/>
      <path d="M14 15l-4-2.5L14 10l4 2.5L14 15z" fill="#00B0FF"/>
      <path d="M22 10.5V19l8-4.5V6l-8 4.5z" fill="#00B0FF"/>
      <path d="M22 19l8-4.5v4.5L22 23.5V19z" fill="#0081CB"/>
    </svg>
  ),
  TailwindCSS: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 6c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.14.285 1.955 1.113 2.857 2.03C18.083 13.308 19.657 15 23 15c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.14-.285-1.955-1.113-2.857-2.03C20.917 7.692 19.343 6 16 6zM9 15c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.14.285 1.955 1.113 2.857 2.03C11.083 22.308 12.657 24 16 24c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.14-.285-1.955-1.113-2.857-2.03C13.917 14.692 12.343 13 9 13v2z" fill="#38BDF8"/>
    </svg>
  ),
  Django: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="4" fill="#092E20"/>
      <path d="M17.5 6h3.5v14.5c0 5-2.5 7-6.5 7-3 0-4.8-1.3-5.8-3.2l3-1.8c.5 1 1.2 1.7 2.8 1.7 1.8 0 3-1 3-3.8V6zM13.5 6H17v3.5h-3.5V6z" fill="#44B78B"/>
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M16 3C8.82 3 3 8.82 3 16c0 5.75 3.73 10.62 8.9 12.34.65.12.89-.28.89-.63v-2.2c-3.62.79-4.38-1.74-4.38-1.74-.59-1.5-1.44-1.9-1.44-1.9-1.18-.81.09-.79.09-.79 1.3.09 1.99 1.34 1.99 1.34 1.16 1.98 3.03 1.41 3.77 1.08.12-.84.45-1.41.82-1.74-2.89-.33-5.93-1.45-5.93-6.44 0-1.42.51-2.58 1.34-3.49-.13-.33-.58-1.65.13-3.44 0 0 1.09-.35 3.58 1.34a12.44 12.44 0 013.26-.44c1.11 0 2.23.15 3.26.44 2.49-1.69 3.58-1.34 3.58-1.34.71 1.79.26 3.11.13 3.44.83.91 1.34 2.07 1.34 3.49 0 5-3.05 6.1-5.95 6.43.47.4.88 1.2.88 2.42v3.58c0 .35.23.76.89.63A13.01 13.01 0 0029 16C29 8.82 23.18 3 16 3z" fill="white"/>
    </svg>
  ),
  Vite: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M29.5 5.5L16.8 28.2c-.3.5-1 .5-1.3 0L2.5 5.5c-.3-.6.2-1.3.9-1.2l13 2.3c.1 0 .3 0 .4 0l12.8-2.3c.7-.1 1.2.6.9 1.2z" fill="url(#viteGrad)"/>
      <path d="M20.5 4L12 5.5 14 18l6.5-14z" fill="#FFD62E" fillOpacity="0.8"/>
      <defs>
        <linearGradient id="viteGrad" x1="16" y1="4" x2="16" y2="29" gradientUnits="userSpaceOnUse">
          <stop stopColor="#41D1FF"/>
          <stop offset="1" stopColor="#BD34FE"/>
        </linearGradient>
      </defs>
    </svg>
  ),
};

const SKILLS = [
  { name: "HTML5",      icon: SKILL_ICONS.HTML5 },
  { name: "CSS3",       icon: SKILL_ICONS.CSS3 },
  { name: "JavaScript", icon: SKILL_ICONS.JavaScript },
  { name: "React",      icon: SKILL_ICONS.React },
  { name: "Next.js",    icon: SKILL_ICONS.Nextjs },
  { name: "Node.js",    icon: SKILL_ICONS.Nodejs },
  { name: "Express.js", icon: SKILL_ICONS.Expressjs },
  { name: "MongoDB",    icon: SKILL_ICONS.MongoDB },
  { name: "Oracle DB",  icon: SKILL_ICONS.Oracle },
  { name: "C",          icon: SKILL_ICONS.C },
  { name: "C++",        icon: SKILL_ICONS.Cpp },
  { name: "Python",      icon: SKILL_ICONS.Python },
  { name: "Bootstrap",   icon: SKILL_ICONS.Bootstrap },
  { name: "Material UI", icon: SKILL_ICONS.MaterialUI },
  { name: "Tailwind CSS",icon: SKILL_ICONS.TailwindCSS },
  { name: "Django",      icon: SKILL_ICONS.Django },
  { name: "GitHub",      icon: SKILL_ICONS.GitHub },
  { name: "Vite",        icon: SKILL_ICONS.Vite },
];

const ALL_PROJECTS = [
  { title: "CookUp",
    desc: "AI enabled CRUD application to generate new recipes.",       
    tags: ["Gemini AI","React","Node.js","MongoDB"],   
    color: "#00a8c8", 
    emoji: "🥘", 
    image:cookup_image,
    image_description:"CookUp Image",
    github_link:"https://github.com/Mkac0/cook-up-front-end",
    live_link:"https://cookupga.netlify.app/"
  },
  { title: "Pokedex",
    desc: "Make your online Pokemon deck using HTML/CSS, jQuery and Firebase database.",               
    tags: ["HTML","CSS","Poke API","Plotly API", "Giphy API", "Firebase"],  
    color: "#2d7a2d", 
    emoji: "🎮", 
    image:pokedex_image,
    image_description:"GameHub Image",
    github_link:"https://github.com/pshegde123/pokedex.github.io",
    live_link:"https://pshegde123.github.io/pokedex.github.io/"
  },
  { title: "Game Hub",
    desc: "App to search Video games loaded using RAWG API.",               
    tags: ["React","TypeScipt","RAWG API"],  
    color: "#2d7a2d", 
    emoji: "🎮", 
    image:gamehub_image,
    image_description:"GameHub Image",
    github_link:"https://github.com/pshegde123/game-hub2",
    live_link:"https://game-hub2-khaki.vercel.app/"
  },
  { title: "Rick And Morty Search",       
    desc: "React+Tailwind app, showing characters from Rick and Morty API",        
    tags: ["React","Tailwind CSS", "Rick and Morty API"],   
    color: "#d4a800", 
    emoji: "🍳", 
    image:rmapiapp,
    image_description:"GameHub Image",
    github_link:"https://github.com/pshegde123/reactapp_rickandmortyapi",
    live_link:"https://pshegde123.github.io/reactapp_rickandmortyapi/"
  },
  { title: "MyFlix (React Client)",       
    desc: "Web app that allows users to explore a custom movie API called MyFlix API, view movie details, manage favorites, and interact with user profiles through a responsive interface.",        
    tags: ["React","MongoDB"],   
    color: "#d4a800", 
    emoji: "🎥", 
    image:myflix_client,
    image_description:"Myflix Client Image",
    github_link:"https://github.com/pshegde123/myflix-client",
    live_link:"https://react-myflix.netlify.app/login"
  },
  { title: "MyFlix",       
    desc: "NodeJS based CRUD app, which loads popular movies data and allows users to save favorites in their account",        
    tags: ["Node.js","EJS Template", "TMDB API"],   
    color: "#d4a800", 
    emoji: "🎥", 
    image:myflix,
    image_description:"GameHub Image",
    github_link:"https://github.com/pshegde123/myflix_crud_app",
    live_link:"https://myflix-ejs-7ead97899eae.herokuapp.com/"
  },
  { title: "Meet App",        
    desc: "Serverless, progressive web application with React to fetch upcoming events using Google Calendar API.",              
    tags: ["React","PWA","Google Calendar API"],     
    color: "#cc0000", 
    emoji: "📅", 
    image:meet_app,
    image_description:"Meet App Image",
    github_link:"https://github.com/pshegde123/meet_v4",
    live_link:"https://meet-v4.vercel.app/"
  },
  { title: "Clicky Game",   
    desc: "React based memory game",             
    tags: ["Bootstrap","React"], 
    color: "#cc0000", 
    emoji: "📦", 
    image:clicky_game_image,
    image_description:"Clicky Game Image",
    github_link:"https://github.com/pshegde123/ReactClickyGame",
    live_link:"https://pshegde123.github.io/ReactClickyGame/"
  }, 
  { title: "NodeJS WordGuess",  
    desc: "NodeJS based command line interface game to guess a hidden movie title",     
    tags: ["NodeJS"], 
    color: "#888888", 
    emoji: "📦", 
    image: word_guess_image,
    image_description:"Word Guess Game Image",
    github_link:"https://github.com/pshegde123/Constructor-word-game",
    live_link:""
  },
  { title: "Train Scheduler",  
    desc: "Web spp that allows users to create and delete fictional trains schedule",     
    tags: ["MomentJS","jQuery", "HTML","Bootstrap","Firebase"], 
    color: "#888888", 
    emoji: "📦", 
    image: train_scheduler_image,
    image_description:"Train Scheduler App Image",
    github_link:"https://github.com/pshegde123/TrainScheduler.github.io",
    live_link:"https://pshegde123.github.io/TrainScheduler.github.io/"
  },
  { title: "Chat App",     
    desc: "Mobile chat application built with React Native and Expo",             
    tags: ["React Native","Expo","Google Firebase"],      
    color: "#1572B6", 
    emoji: "💬", 
    image:chat_app_image ,
    image_description:"Chat App Image",
    github_link:"https://github.com/pshegde123/native_chat_app",
    case_study_link:"https://www.pradnyahegde.com/chat-app-case-study"
  },  
];

const BATCH = 9;

const DARK = {
  bg: "#0a0a0f", bgNav: "rgba(10,10,15,0.90)", bgCard: "rgba(255,255,255,0.035)",
  border: "rgba(255,255,255,0.07)", borderNav: "rgba(0,255,136,0.12)",
  text: "#e0e0e0", textMuted: "#888", textFaint: "#555",
  accent: "#00ff88", accentMuted: "rgba(0,255,136,0.1)", accentBorder: "rgba(0,255,136,0.3)",
  navLink: "#aaa", footerText: "#444",
  gridLine: "rgba(0,255,136,0.03)",
  cardShadow: "rgba(0,255,136,0.12)",
  tagBg: "rgba(0,255,136,0.1)", tagColor: "#00ff88", tagBorder: "rgba(0,255,136,0.28)",
  trackBg: "rgba(255,255,255,0.07)",
  skillBarLabel: "#00ff88",
};

const LIGHT = {
  bg: "#f0f4f8", bgNav: "rgba(255,255,255,0.94)", bgCard: "#ffffff",
  border: "rgba(0,0,0,0.09)", borderNav: "rgba(0,140,75,0.18)",
  text: "#1a1a2e", textMuted: "#556", textFaint: "#aaa",
  accent: "#007a42", accentMuted: "rgba(0,122,66,0.08)", accentBorder: "rgba(0,122,66,0.28)",
  navLink: "#667", footerText: "#bbb",
  gridLine: "rgba(0,122,66,0.04)",
  cardShadow: "rgba(0,122,66,0.1)",
  tagBg: "rgba(0,122,66,0.08)", tagColor: "#006535", tagBorder: "rgba(0,122,66,0.25)",
  trackBg: "rgba(0,0,0,0.07)",
  skillBarLabel: "#007a42",
};

export default function Portfolio() {
  const [active,     setActive]     = useState("Home");
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [visible,    setVisible]    = useState(BATCH);
  const [typed,      setTyped]      = useState("");
  const [animSkills, setAnimSkills] = useState(false);
  const [isDark,     setIsDark]     = useState(true);

  const T = isDark ? DARK : LIGHT;
  const fullText = "Full Stack Web Developer";

  useEffect(() => {
    if (active !== "Home") return;
    setTyped("");
    let i = 0;
    const iv = setInterval(() => { i++; setTyped(fullText.slice(0, i)); if (i >= fullText.length) clearInterval(iv); }, 60);
    return () => clearInterval(iv);
  }, [active, isDark]);

  useEffect(() => {
    if (active === "Skills") setTimeout(() => setAnimSkills(true), 120);
    else setAnimSkills(false);
  }, [active]);

  const navigate = (page) => { setActive(page); setMenuOpen(false); if (page === "Projects") setVisible(BATCH); };

  /* ── Dynamic CSS ── */
  const css = `
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700&family=Syne:wght@400;600;700;800&display=swap');
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
    body{font-family:'Syne',sans-serif;}
    .mono{font-family:'JetBrains Mono',monospace;}
    .cursor::after{content:'|';animation:blink 1s infinite;color:${T.accent};}
    @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
    .nl{position:relative;transition:color .2s;}
    .nl::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:2px;background:${T.accent};transition:width .3s;}
    .nl:hover::after,.nl.act::after{width:100%;}
    .skill-bar{transition:width 1.2s cubic-bezier(.4,0,.2,1);}
    .ch{transition:transform .25s,box-shadow .25s;}
    .ch:hover{transform:translateY(-6px);box-shadow:0 16px 40px ${T.cardShadow};}
    .fi{animation:fi .55s ease forwards;}
    @keyframes fi{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
    .glow{text-shadow:0 0 20px ${T.accent}88;}

    /* Toggle */
    .track{width:44px;height:24px;border-radius:999px;background:${T.accent};position:relative;flex-shrink:0;cursor:pointer;transition:background .3s;}
    .knob{width:18px;height:18px;border-radius:50%;background:${isDark?"#0a0a0f":"#fff"};position:absolute;top:3px;left:${isDark?"23px":"3px"};transition:left .3s,background .3s;box-shadow:0 1px 4px rgba(0,0,0,.3);}

    /* Buttons */
    .bp{background:${T.accent};color:${isDark?"#0a0a0f":"#fff"};padding:12px 28px;font-family:'JetBrains Mono',monospace;font-size:14px;border-radius:4px;border:none;cursor:pointer;font-weight:700;letter-spacing:1px;transition:all .3s;}
    .bp:hover{opacity:.85;box-shadow:0 0 20px ${T.accent}55;}
    .bo{background:transparent;border:1px solid ${isDark?"rgba(255,255,255,.2)":"rgba(0,0,0,.18)"};color:${T.text};padding:12px 28px;font-family:'JetBrains Mono',monospace;font-size:14px;border-radius:4px;cursor:pointer;letter-spacing:1px;transition:all .3s;}
    .bo:hover{border-color:${T.accent};color:${T.accent};}
    .bl{background:transparent;border:1px solid ${T.accent};color:${T.accent};padding:12px 32px;font-family:'JetBrains Mono',monospace;font-size:14px;border-radius:4px;cursor:pointer;letter-spacing:1px;transition:all .3s;}
    .bl:hover{background:${T.accentMuted};box-shadow:0 0 16px ${T.accent}44;}
    .bgg{background:none;border:1px solid ${T.accentBorder};color:${T.accent};padding:6px 14px;border-radius:4px;cursor:pointer;font-size:12px;font-family:'JetBrains Mono',monospace;transition:all .2s;}
    .bgg:hover{background:${T.accentMuted};}
    .bgr{background:none;border:1px solid ${isDark?"rgba(255,255,255,.15)":"rgba(0,0,0,.15)"};color:${T.textMuted};padding:6px 14px;border-radius:4px;cursor:pointer;font-size:12px;font-family:'JetBrains Mono',monospace;transition:all .2s;}
    .bgr:hover{border-color:${T.textMuted};}

    .grid-bg{background-image:linear-gradient(${T.gridLine} 1px,transparent 1px),linear-gradient(90deg,${T.gridLine} 1px,transparent 1px);background-size:40px 40px;}

    @media(max-width:640px){
      .dn{display:none!important;}
      .hb{display:flex!important;}
      .h1x{font-size:36px!important;}
      .skills-grid{grid-template-columns:repeat(1,1fr)!important;}
    }
  `;

  const card = (extra = {}) => ({
    background: T.bgCard,
    border: `1px solid ${T.border}`,
    borderRadius: 8,
    padding: 24,
    transition: "background .3s, border .3s",
    ...extra,
  });

  const Tag = ({ label }) => (
    <span style={{ fontFamily: "JetBrains Mono,monospace", fontSize: 11, padding: "2px 8px", borderRadius: 4, background: T.tagBg, color: T.tagColor, border: `1px solid ${T.tagBorder}` }}>{label}</span>
  );

  const ThemeToggle = () => (
    <div style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }} onClick={() => setIsDark(d => !d)}>
      <span style={{ fontSize: 15 }}>{isDark ? "🌙" : "☀️"}</span>
      <div className="track"><div className="knob" /></div>
    </div>
  );

  return (
    <>
      <style>{css}</style>
      <div className="grid-bg" style={{ minHeight: "100vh", background: T.bg, color: T.text, transition: "background .35s, color .35s" }}>

        {/* NAV */}
        <nav style={{ position: "sticky", top: 0, zIndex: 50, background: T.bgNav, backdropFilter: "blur(14px)", borderBottom: `1px solid ${T.borderNav}`, padding: "0 24px", transition: "background .3s" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 32, height: 60 }}>
            <div className="mono" style={{ color: T.accent, fontSize: 18, fontWeight: 700, letterSpacing: 1 }}>&lt;Pradnya.dev/&gt;</div>

            {/* Desktop nav links */}
            <div className="dn" style={{ display: "flex", gap: 28, alignItems: "center" }}>
              {NAV_LINKS.map(l => (
                <button key={l} className={`nl mono ${active === l ? "act" : ""}`}
                  style={{ background: "none", border: "none", cursor: "pointer", color: active === l ? T.accent : T.navLink, fontSize: 14, fontWeight: 600, letterSpacing: 1 }}
                  onClick={() => navigate(l)}>{l}</button>
              ))}
            </div>

            {/* Right end — toggle + hamburger */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginLeft: "auto" }}>
              <ThemeToggle />
              <button className="hb mono"
                style={{ background: "none", border: `1px solid ${T.accentBorder}`, color: T.accent, width: 36, height: 36, borderRadius: 4, cursor: "pointer", fontSize: 16, display: "none", alignItems: "center", justifyContent: "center" }}
                onClick={() => setMenuOpen(o => !o)}>
                {menuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>

          {menuOpen && (
            <div style={{ background: T.bgNav, borderTop: `1px solid ${T.borderNav}`, padding: "12px 24px" }}>
              {NAV_LINKS.map(l => (
                <button key={l} className="mono"
                  style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer", color: active === l ? T.accent : T.navLink, fontSize: 15, padding: "11px 0", borderBottom: `1px solid ${T.border}` }}
                  onClick={() => navigate(l)}>{active === l ? "▶ " : "  "}{l}</button>
              ))}
              <div style={{ paddingTop: 14, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: T.textMuted, fontSize: 13, fontFamily: "JetBrains Mono,monospace" }}>Theme:</span>
                <ThemeToggle />
              </div>
            </div>
          )}
        </nav>

        {/* PAGES */}
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px" }}>

          {/* HOME */}
          {active === "Home" && (
            <div className="fi" style={{ minHeight: "90vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: 60, paddingBottom: 60 }}>
              <div className="mono" style={{ color: T.accent, fontSize: 13, letterSpacing: 3, marginBottom: 20, opacity: .8 }}>👋 HELLO, WORLD</div>
              <h1 className="h1x" style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1, marginBottom: 16, fontFamily: "Syne,sans-serif" }}>
                I'm <span className="glow" style={{ color: T.accent }}>Pradnya Hegde</span>
              </h1>
              <div className="mono cursor" style={{ fontSize: 20, color: T.textMuted, marginBottom: 32, minHeight: 30 }}>{typed}</div>
              <p style={{ fontSize: 16, color: T.textMuted, maxWidth: 520, lineHeight: 1.85, marginBottom: 48 }}>
                I build full-stack web apps with the MERN stack — turning ideas into fast, scalable, and pixel-perfect digital experiences. Currently open to junior roles &amp; freelance gigs.
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <button className="bp" onClick={() => navigate("Projects")}>View Projects</button>
                <button className="bo" onClick={() => navigate("About")}>About Me</button>
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 52 }}>
                {["React","Node.js","MongoDB","Express"].map(t => <Tag key={t} label={t} />)}
              </div>
              <div style={{ display: "flex", gap: 40, marginTop: 48, flexWrap: "wrap" }}>
                {[["12+","Projects Built"],["11","Technologies"],["∞","Cups of Coffee"]].map(([n,l]) => (
                  <div key={l}>
                    <div className="mono" style={{ fontSize: 28, fontWeight: 700, color: T.accent }}>{n}</div>
                    <div style={{ fontSize: 12, color: T.textFaint, letterSpacing: 1 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SKILLS */}
          {active === "Skills" && (
            <div className="fi" style={{ paddingTop: 60, paddingBottom: 80 }}>
              <div className="mono" style={{ color: T.accent, fontSize: 12, letterSpacing: 3, marginBottom: 12 }}>TECHNICAL STACK</div>
              <h2 style={{ fontSize: 40, fontWeight: 800, marginBottom: 8 }}>My Skills</h2>
              <p style={{ color: T.textMuted, marginBottom: 48 }}>Technologies I have used so far.</p>
              <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
                {SKILLS.map((sk, i) => (
                  <div key={sk.name} className="ch" style={{
                    position: "relative", overflow: "hidden", borderRadius: 10,
                    background: isDark ? "#111118" : "#1a1a2a",
                    border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.12)"}`,
                    padding: "18px 20px", display: "flex", alignItems: "center", gap: 16,
                    minHeight: 72, cursor: "default",
                    animationDelay: `${i * 40}ms`,
                    transition: "transform .25s, box-shadow .25s",
                  }}>
                    {/* Faded watermark */}
                    <div aria-hidden="true" style={{
                      position: "absolute", right: -8, top: "50%", transform: "translateY(-50%)",
                      width: 88, height: 88, opacity: 0.1, pointerEvents: "none",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      {sk.icon}
                    </div>
                    {/* Colored icon */}
                    <div style={{ width: 36, height: 36, flexShrink: 0, position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {sk.icon}
                    </div>
                    {/* Name */}
                    <span style={{ fontWeight: 700, fontSize: 15, color: "#ffffff", letterSpacing: 0.2, position: "relative", zIndex: 1 }}>{sk.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PROJECTS */}
          {active === "Projects" && (
            <div className="fi" style={{ paddingTop: 60, paddingBottom: 80 }}>
              <div className="mono" style={{ color: T.accent, fontSize: 12, letterSpacing: 3, marginBottom: 12 }}>WHAT I'VE BUILT</div>
              <h2 style={{ fontSize: 40, fontWeight: 800, marginBottom: 8 }}>Projects</h2>
              <p style={{ color: T.textMuted, marginBottom: 48 }}>Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
                {ALL_PROJECTS.slice(0, visible).map((p, i) => (
                  <div key={p.title} className="ch fi"
                    style={{ ...card({ cursor: "default", borderTop: `2px solid ${p.color}55` }), animationDelay: `${(i % BATCH) * 60}ms` }}>
                    <div>
                       <img
                                    src={p.image}
                                    alt={p.image_description}
                                    style={{width:'100%',height:'10%'}}
                                    className="w-sm h-sm transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>                    
                    <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{p.emoji}<span></span> {p.title}</h3>
                    <p style={{ color: T.textMuted, fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {p.tags.map(t => <Tag key={t} label={t} />)}
                    </div>
                    <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
                      <a className="bgg" href={p.github_link} target="_blank">GitHub ↗</a>                      
                      {p.case_study_link ? <a className="bgr" href={p.case_study_link} target="_blank">Case Study ↗</a> : <a className="bgr" href={p.live_link} target="_blank">Live Demo ↗</a>}
                    </div>
                  </div>
                ))}
              </div>
              {visible < ALL_PROJECTS.length && (
                <div style={{ textAlign: "center", marginTop: 48 }}>
                  <button className="bl" onClick={() => setVisible(v => Math.min(v + BATCH, ALL_PROJECTS.length))}>
                    ++ Load More ({ALL_PROJECTS.length - visible} remaining)
                  </button>
                </div>
              )}
              {visible >= ALL_PROJECTS.length && ALL_PROJECTS.length > BATCH && (
                <div className="mono" style={{ textAlign: "center", marginTop: 32, color: T.textFaint, fontSize: 13 }}>
                  // All {ALL_PROJECTS.length} projects loaded
                </div>
              )}
            </div>
          )}

          {/* ABOUT */}
          {active === "About" && (
            <div className="fi" style={{ paddingTop: 60, paddingBottom: 80 }}>
              <div className="mono" style={{ color: T.accent, fontSize: 12, letterSpacing: 3, marginBottom: 12 }}>WHO AM I</div>
              <h2 style={{ fontSize: 40, fontWeight: 800, marginBottom: 40 }}>About Me</h2>
              <div style={{ display: "grid", gap: 32 }}>

                <div style={card()}>
                  <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24, flexWrap: "wrap" }}>
                    <div style={{ width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg,#00ff88,#0080ff)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, flexShrink: 0, boxShadow: `0 0 24px ${T.accent}44` }}>👨‍💻</div>
                    <div>
                      <h3 style={{ fontSize: 24, fontWeight: 800 }}>Pradnya Hegde</h3>
                      <div className="mono" style={{ color: T.accent, fontSize: 13 }}>Full Stack Web Developer</div>
                      <div style={{ color: T.textMuted, fontSize: 13, marginTop: 4 }}>📍 Atlanta, GA</div>
                    </div>
                  </div>
                  <p style={{ color: T.textMuted, lineHeight: 1.9, fontSize: 15 }}>I'm a self-driven developer who fell in love with JavaScript and never looked back. My journey started with C/C++ fundamentals, which gave me a solid understanding of memory, performance, and algorithmic thinking — skills I now apply to building robust MERN stack applications.</p>
                  <p style={{ color: T.textMuted, lineHeight: 1.9, fontSize: 15, marginTop: 16 }}>With a strong foundation in MongoDB, Express.js, React, and Node.js, I strive to build user-friendly and efficient solutions. I'm also enthusiastic about exploring new web technologies to continually enhance my skills and stay at the forefront of the ever-evolving tech landscape.</p>
                  <p style={{ color: T.textMuted, lineHeight: 1.9, fontSize: 15, marginTop: 16 }}>I am currently seeking full-time, part-time, or freelancing work opportunities. If you're looking for a committed individual ready to make a positive impact, let's connect!</p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 16 }}>
                  {[
                    { icon: "🎓", label: "Education", value: "B.E. Electronics" },
                    { icon: "💼", label: "Status",    value: "Open to Work" },
                    { icon: "🌐", label: "Languages", value: "English" },
                    { icon: "📧", label: "Email",     value: "pradnyahegde@gmail.com" },
                  ].map(item => (
                    <div key={item.label} style={card()}>
                      <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
                      <div className="mono" style={{ fontSize: 11, color: T.accent, letterSpacing: 1, marginBottom: 4 }}>{item.label.toUpperCase()}</div>
                      <div style={{ fontSize: 14, color: T.text }}>{item.value}</div>
                    </div>
                  ))}
                </div>                

                <div style={card({ background: `linear-gradient(135deg,${T.accentMuted},rgba(0,128,255,0.05))`, border: `1px solid ${T.accentBorder}`, textAlign: "center" })}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>🚀</div>
                  <h4 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Let's Build Something Together</h4>
                  <p style={{ color: T.textMuted, fontSize: 14, marginBottom: 24 }}>Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.</p>
                  <button className="bp"><a
                                href="https://docs.google.com/document/d/1PY16iqeJ3v3YdjIvAb9bl-shrtVsjkQx/edit?usp=sharing&ouid=103058786758812199291&rtpof=true&sd=true"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                                download
                            >
                                Download Resume
                            </a></button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer style={{ borderTop: `1px solid ${T.border}`, padding: "24px 20px", textAlign: "center", transition: "border .3s" }}>
          <div className="mono" style={{ color: T.footerText, fontSize: 12 }}>
            &lt;built with React + Tailwind by Pradnya /&gt; &nbsp;•&nbsp; {new Date().getFullYear()}
          </div>
        </footer>
      </div>
    </>
  );
}