---
title: "Comprendre AstroJS : Le guide complet pour débuter en 2024"
date: "2024-06-01"
description: "Explorez en profondeur le framework AstroJS, son architecture unique, ses avantages, et comment l'utiliser pour construire des sites ultra rapides."
image: "/images/Astro.png"
author: "Matheo Batelier"
readingTime: 8
tags:
  - Astro
  - Framework
  - Jamstack
  - Web Performance
  - SEO
---

AstroJS est un framework moderne basé sur les composants, qui génère des pages statiques ultra rapides.

Il permet de combiner différents frameworks (React, Vue, Svelte...) dans un même projet, tout en générant des pages HTML pures pour des performances optimales. C’est l’outil idéal pour créer un site vitrine ou un blog technique, comme celui-ci.

## Introduction

Dans cet article, vous découvrirez :

- Les avantages principaux d’Astro  
- Sa philosophie « Island Architecture »  
- Comment démarrer rapidement un projet

## 🚀 Pourquoi choisir AstroJS ?

Voici quelques points qui font d’Astro un framework à part :

- **Zéro JavaScript par défaut** : Astro génère uniquement du HTML statique si vous n'avez pas besoin d'interactivité.
- **Utilisation de composants de n’importe quel framework** : React, Vue, Svelte, Solid... vous pouvez les mélanger.
- **Architecture orientée performance** : Astro charge uniquement le JavaScript nécessaire, uniquement quand il le faut.
- **Excellente compatibilité SEO** : HTML statique = indexation parfaite par les moteurs de recherche.
- **Simplicité d'intégration avec des CMS ou du Markdown** : idéal pour les blogs ou docs techniques.

## 🧠 L’architecture "Island"

L’**Island Architecture** est un concept clé d’Astro :  
> Le contenu statique est rendu au serveur, tandis que les composants interactifs sont envoyés en "îlots" de JavaScript hydratés séparément.

Exemple :  
- Le header, le footer et les articles sont rendus statiquement.  
- Un bouton "like" dans un article, ou une recherche, peuvent être en React, et uniquement ces éléments auront du JS.

Cela permet de **réduire considérablement le poids des pages** et d’accélérer leur affichage.

## 📁 Créer un projet Astro

Voici la commande pour démarrer un projet Astro :

```bash
npm create astro@latest
cd mon-projet
npm install
npm run dev
