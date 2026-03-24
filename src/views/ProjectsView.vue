<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { projectFilters, projects } from '../data/portfolio'

const selectedFilter = ref('All Work')

const visibleProjects = computed(() => {
  if (selectedFilter.value === 'All Work') return projects
  return projects.filter((project) => project.category === selectedFilter.value)
})
</script>

<template>
  <section id="projects" class="projects container">
    <div class="projects-head">
      <p class="section-kicker">Portfolio</p>
      <h2>Featured Projects</h2>
      <p class="projects-sub">
        A selection of work built around clean architecture, modern web technologies and full stack engineering
      </p>
    </div>

    <div class="filter-row">
      <button
        v-for="filter in projectFilters"
        :key="filter"
        class="filter-pill"
        :class="{ active: filter === selectedFilter }"
        type="button"
        @click="selectedFilter = filter"
      >
        {{ filter }}
      </button>
    </div>

    <div class="project-grid large">
      <article v-for="project in visibleProjects" :key="project.title" class="project-card pro">
        <div class="project-media" :class="project.mediaTone">
          <span class="status-chip" :class="project.statusTone">{{ project.status }}</span>
        </div>
        <div class="project-body">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="tag-row">
            <span v-for="tag in project.tags" :key="`${project.title}-${tag}`">{{ tag }}</span>
          </div>
          <div class="project-actions">
            <div class="code-links">&lt;&gt; []</div>
            <RouterLink :to="`/projects/${project.slug}`">View Details</RouterLink>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
