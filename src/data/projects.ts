import type { LightboxMedia } from "../components/common/Lightbox/Lightbox.types";

import faceidImg from "../assets/images/faceid.png";
import faceidVideo from "../assets/videos/faceid-demo.mp4";
import ecommerceImg from "../assets/images/e-commerce.png";
import jobsApiImg from "../assets/images/jobs-api.png";

import taskflowDashboardImg from "../assets/images/taskflow/dashboard.png";
import taskflowLoginImg from "../assets/images/taskflow/login.png";
import taskflowTodosImg from "../assets/images/taskflow/todos.png";
import taskflowProfileImg from "../assets/images/taskflow/profile.png";

import ekinciShopWelcomeImg from "../assets/images/ekinci-shop/welcome.png";
import ekinciShopProductsImg from "../assets/images/ekinci-shop/products.png";
import ekinciShopProductDetailImg from "../assets/images/ekinci-shop/product-detail.png";
import ekinciShopCartImg from "../assets/images/ekinci-shop/cart.png";

import recipeHubRecipesImg from "../assets/images/recipe-hub/recipes.png";
import recipeHubRecipeDetailImg from "../assets/images/recipe-hub/recipe-detail.png";
import recipeHubCreateRecipeImg from "../assets/images/recipe-hub/create-recipe.png";
import recipeHubFavoritesImg from "../assets/images/recipe-hub/favorites.png";
import recipeHubMyRecipesImg from "../assets/images/recipe-hub/my-recipes.png";

type ProjectTag = {
  label: string;
  special?: boolean;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  media: LightboxMedia[];
  tags: ProjectTag[];
  links: {
    label: string;
    href: string;
    iconClass: string;
  }[];
};

export type Projects = {
  title: string;
  payload: Project[];
};

export const PROJECTS: Projects = {
  title: "Projeler",
  payload: [
    {
      id: "faceid",
      title: "Face ID Login",
      description:
        "Python/Flask ile yüz tanıma tabanlı giriş akışı uygulaması.",
      thumbnail: faceidImg,
      media: [
        {
          type: "video",
          src: faceidVideo,
        },
      ],
      tags: [
        { label: "🎓 Bitirme Projesi", special: true },
        { label: "Flask" },
        { label: "OpenCV" },
        { label: "Face Recognition" },
        { label: "MySQL" },
        { label: "HTML5 & CSS3" },
      ],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/emre3657/faceid-web-app",
          iconClass: "fab fa-github",
        },
      ],
    },

    {
      id: "ecommerce",
      title: "E-Commerce App",
      description: "ASP.NET Core MVC ile deneysel e-ticaret uygulaması.",
      thumbnail: ecommerceImg,
      media: [
        {
          type: "image",
          src: ecommerceImg,
        },
      ],
      tags: [
        { label: "💼 Staj Projesi", special: true },
        { label: "ASP.NET Core MVC" },
        { label: "EF Core" },
        { label: "SQL Server" },
        { label: "Razor" },
      ],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/emre3657/e-commerce-app",
          iconClass: "fab fa-github",
        },
      ],
    },

    {
      id: "jobs",
      title: "Jobs API",
      description: "Kimlik doğrulamalı iş başvurusu takip API’si.",
      thumbnail: jobsApiImg,
      media: [
        {
          type: "image",
          src: jobsApiImg,
        },
      ],
      tags: [
        { label: "Node.js" },
        { label: "Express" },
        { label: "MongoDB" },
        { label: "JWT" },
      ],
      links: [
        {
          label: "Canlı",
          href: "https://jobs-api-fw93.onrender.com",
          iconClass: "fa-solid fa-link",
        },
        {
          label: "GitHub",
          href: "https://github.com/emre3657/jobs-api",
          iconClass: "fab fa-github",
        },
      ],
    },

    {
      id: "taskflow",
      title: "TaskFlow",
      description: "Görev yönetimi ve takip uygulaması.",
      thumbnail: taskflowTodosImg,
      media: [
        {
          type: "image",
          src: taskflowDashboardImg,
        },

        {
          type: "image",
          src: taskflowLoginImg,
        },

        {
          type: "image",
          src: taskflowTodosImg,
        },

        {
          type: "image",
          src: taskflowProfileImg,
        },
      ],
      tags: [
        { label: "React" },
        { label: "Tailwind CSS" },
        { label: "TypeScript" },
        { label: "Node.js" },
        { label: "Express" },
        { label: "JWT" },
        { label: "Prisma" },
        { label: "PostgreSQL" },
      ],
      links: [
        {
          label: "Canlı",
          href: "https://taskflow.emreekincidev.com",
          iconClass: "fa-solid fa-link",
        },
        {
          label: "GitHub",
          href: "https://github.com/emre3657/taskflow-web",
          iconClass: "fab fa-github",
        },
        {
          label: "GitHub",
          href: "https://github.com/emre3657/taskflow-api",
          iconClass: "fab fa-github",
        },
      ],
    },

    {
      id: "ekinci-shop",
      title: "Ekinci Shop",
      description:
        "Flutter ile geliştirilen mobil ürün katalog ve sepet uygulaması.",
      thumbnail: ekinciShopProductsImg,
      media: [
        {
          type: "image",
          src: ekinciShopWelcomeImg,
        },
        {
          type: "image",
          src: ekinciShopProductsImg,
        },
        {
          type: "image",
          src: ekinciShopProductDetailImg,
        },
        {
          type: "image",
          src: ekinciShopCartImg,
        },
      ],
      tags: [
        { label: "📚 Kurs Projesi", special: true },
        { label: "Flutter" },
        { label: "Dart" },
        { label: "Provider" },
        { label: "REST API" },
        { label: "Material Design" },
      ],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/emre3657/ekinci-shop-flutter",
          iconClass: "fab fa-github",
        },
      ],
    },

    {
      id: "recipe-hub",
      title: "Recipe Hub",
      description:
        "React ve IndexedDB ile geliştirilen local-first yemek tarifi yönetim uygulaması.",
      thumbnail: recipeHubRecipesImg,
      media: [
        {
          type: "image",
          src: recipeHubRecipesImg,
        },
        {
          type: "image",
          src: recipeHubRecipeDetailImg,
        },
        {
          type: "image",
          src: recipeHubCreateRecipeImg,
        },
        {
          type: "image",
          src: recipeHubFavoritesImg,
        },
        {
          type: "image",
          src: recipeHubMyRecipesImg,
        },
      ],
      tags: [
        { label: "📚 Kurs Projesi", special: true },
        { label: "React" },
        { label: "TypeScript" },
        { label: "Vite" },
        { label: "Dexie" },
        { label: "IndexedDB" },
      ],
      links: [
        {
          label: "Canlı",
          href: "https://recipehub.emreekincidev.com",
          iconClass: "fa-solid fa-link",
        },
        {
          label: "GitHub",
          href: "https://github.com/emre3657/recipe-hub-web",
          iconClass: "fab fa-github",
        },
      ],
    },
  ],
};
