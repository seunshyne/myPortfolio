<template>
  <header class="top-nav">
    <div class="container nav-inner">
      <RouterLink class="brand" to="/">
        <span class="brand-icon" aria-hidden="true">&gt;_</span>
        <span class="brand-text">Oluwaseun Oyebanji</span>
      </RouterLink>

      <nav class="menu" aria-label="Primary">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/projects/prime-wallet">Experience</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <a href="#contact">Contact</a>
      </nav>

      <div class="nav-actions">
        <a class="cv-btn" href="#" download>Download CV</a>
        <a class="hire-btn" href="#contact">Hire Me</a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

