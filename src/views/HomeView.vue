<template>
  <div>
    <section id="home" class="hero container">
      <div class="hero-copy">
        <p class="hero-greet">Hi, I'm Oluwaseun Oyebanji.</p>
        <p class="availability">Open to new opportunities</p>
        <h1>
          Full Stack Developer specializing in React,Vue.js, PHP, Laravel and Cloud
          Deployment
        </h1>
        <p class="lede">
          I build modern web applications using React, Vue.js, PHP and Laravel, with
          experience deploying and managing production systems on cloud servers.
        </p>
        <div class="hero-actions">
          <RouterLink class="primary-btn" to="/projects"
            >View Projects <span aria-hidden="true">-></span></RouterLink>
          <a class="ghost-btn" href="#">Download CV</a>
        </div>
      </div>

      <div class="hero-visual" aria-hidden="true">
        <div class="radar-ring"></div>
        <div class="beam"></div>
        <div class="terminal-window">
          <div class="term-top">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <pre>
# github-actions.yml
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to K8s
        run: kubectl apply -f ./k8s</pre
          >
        </div>
      </div>
    </section>

    <section id="skills" class="stack container">
      <p class="section-kicker">Specialization</p>
      <h2>Core Technical Stack</h2>
      <p>Technologies and tools I use to build and deploy modern web applications.</p>

      <div class="stack-grid">
        <article class="stack-card">
          <p class="stack-icon">FE</p>
          <h3>Frontend Development</h3>
          <p>
            Developing responsive user interfaces using React, Vue.js, JavaScript, HTML, and modern CSS practices.
          </p>
        </article>
        <article class="stack-card">
          <p class="stack-icon">API</p>
          <h3>Backend Development</h3>
          <p>
            Building secure and scalable REST APIs using PHP and Laravel, with authentication and structured backend architecture.
          </p>
        </article>
        <article class="stack-card">
          <p class="stack-icon">CLD</p>
          <h3>Cloud Deployment</h3>
          <p>
            Deploying and managing production applications on Amazon Web Services using Linux servers and Nginx.
          </p>
        </article>
        <article class="stack-card">
          <p class="stack-icon">DEV</p>
          <h3>DevOps & Automation</h3>
          <p>
            Containerizing applications with Docker and managing version control and deployments with GitHub and CI/CD pipelines.
          </p>
        </article>
        <article class="stack-card">
          <p class="stack-icon">DB</p>
          <h3>Database Management</h3>
          <p>
            Designing and managing relational databases using MySQL and PostgreSQL for scalable applications.
          </p>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
