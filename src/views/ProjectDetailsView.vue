<script setup>
import { computed, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { projects } from '../data/portfolio'

const route = useRoute()

const project = computed(() => projects.find((item) => item.slug === route.params.slug))

const projectArea = computed(() => {
  if (!project.value) return 'Project'
  if (project.value.category === 'Backend') return 'Backend Systems'
  if (project.value.category === 'Frontend') return 'Frontend Systems'
  if (project.value.category === 'DevOps') return 'DevOps Systems'
  return 'Full Stack Systems'
})

const projectDetails = computed(() => project.value?.details || {})

const architecture = computed(() => projectDetails.value.architecture || [])
const decisions = computed(() => projectDetails.value.keyDecisions || [])
const problem = computed(() => projectDetails.value.problem || [])
const metrics = computed(() => projectDetails.value.outcomeMetrics || [])
const slides = computed(() => projectDetails.value.slides || [])
const currentSlideIndex = ref(0)

const currentSlide = computed(() => slides.value[currentSlideIndex.value] || null)

watch(
  slides,
  (nextSlides) => {
    if (!nextSlides.length) {
      currentSlideIndex.value = 0
      return
    }

    if (currentSlideIndex.value > nextSlides.length - 1) {
      currentSlideIndex.value = 0
    }
  },
  { immediate: true },
)

const selectSlide = (index) => {
  currentSlideIndex.value = index
}

const showPreviousSlide = () => {
  if (!slides.value.length) return

  currentSlideIndex.value =
    currentSlideIndex.value === 0 ? slides.value.length - 1 : currentSlideIndex.value - 1
}

const showNextSlide = () => {
  if (!slides.value.length) return

  currentSlideIndex.value =
    currentSlideIndex.value === slides.value.length - 1 ? 0 : currentSlideIndex.value + 1
}
</script>

<template>
  <section v-if="project" class="project-details container">
    <div class="details-main">
      <p class="crumbs">Portfolio / {{ projectArea }} / {{ project.title }}</p>
      <h2>{{ project.title }}</h2>
      <p class="details-intro">
        {{ projectDetails.intro || project.description }}
      </p>

      <article v-if="slides.length && currentSlide" class="project-gallery">
        <div class="gallery-frame">
          <img :src="currentSlide.image" :alt="currentSlide.alt || `${project.title} slide`" />

          <button
            class="gallery-nav prev"
            type="button"
            aria-label="Show previous project slide"
            @click="showPreviousSlide"
          >
            &larr;
          </button>

          <button
            class="gallery-nav next"
            type="button"
            aria-label="Show next project slide"
            @click="showNextSlide"
          >
            &rarr;
          </button>
        </div>

        <div class="gallery-meta">
          <div>
            <p class="gallery-label">Project Walkthrough</p>
            <p class="gallery-caption">{{ currentSlide.caption }}</p>
          </div>
          <span class="gallery-count">{{ currentSlideIndex + 1 }} / {{ slides.length }}</span>
        </div>

        <div class="gallery-thumbs" aria-label="Project slide thumbnails">
          <button
            v-for="(slide, index) in slides"
            :key="slide.image"
            class="gallery-thumb"
            :class="{ active: index === currentSlideIndex }"
            type="button"
            :aria-label="`View slide ${index + 1}`"
            :aria-pressed="index === currentSlideIndex"
            @click="selectSlide(index)"
          >
            <img :src="slide.image" :alt="slide.alt || `${project.title} slide ${index + 1}`" />
          </button>
        </div>
      </article>

      <article class="text-block">
        <h3>Problem Statement</h3>
        <p v-for="line in problem" :key="line">{{ line }}</p>
      </article>

      <article class="arch-card">
        <h3>Technical Architecture</h3>
        <div class="arch-grid">
          <div v-for="item in architecture" :key="item.title">
            <h4>{{ item.title }}</h4>
            <p>{{ item.body }}</p>
          </div>
        </div>
        <div class="tag-row">
          <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
        </div>
      </article>

      <article class="decision-list">
        <h3>Key Decisions</h3>
        <div v-for="decision in decisions" :key="decision.title" class="decision-item">
          <h4>{{ decision.title }}</h4>
          <p>{{ decision.body }}</p>
        </div>
      </article>

      <article class="challenge-card">
        <h3>Challenges and Resolutions</h3>
        <div class="challenge-item">
          <h4>{{ projectDetails.challenge?.title }}</h4>
          <p>{{ projectDetails.challenge?.body }}</p>
          <span>Resolution: {{ projectDetails.challenge?.resolution }}</span>
        </div>
      </article>

      <article class="outcome-card">
        <h3>Project Outcome</h3>
        <p>"{{ projectDetails.outcomeQuote }}"</p>
      </article>
    </div>

    <aside class="details-side">
      <article class="side-card">
        <h3>Project Links</h3>
        <a :href="projectDetails.links?.sourceUrl || '#'" target="_blank" rel="noopener noreferrer"
          >View Source Code -></a
        >
        <a
          class="active"
          :href="projectDetails.links?.liveUrl || '#'"
          target="_blank"
          rel="noopener noreferrer"
          >{{ projectDetails.links?.liveLabel || 'Live Demo' }}</a
        >
      </article>

      <article class="side-card">
        <h3>Tech Stack</h3>
        <p class="stack-label">Core Stack</p>
        <div class="side-tags">
          <span v-for="tag in project.tags" :key="`side-${tag}`">{{ tag }}</span>
        </div>
      </article>

      <article class="side-cta">
        <p>Interested in a similar high-performance architecture?</p>
        <a href="#contact">Let's Discuss Your Project</a>
      </article>
    </aside>
  </section>

  <section v-else class="projects container">
    <div class="projects-head">
      <p class="section-kicker">Portfolio</p>
      <h2>Project Not Found</h2>
      <p class="projects-sub">The project you requested does not exist or has been moved.</p>
      <RouterLink class="primary-btn" to="/projects">Back to Projects</RouterLink>
    </div>
  </section>
</template>
