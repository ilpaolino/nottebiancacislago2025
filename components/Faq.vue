<template>
  <section class="py-8 px-8 lg:py-20">
    <div class="container mx-auto text-center mb-12">
      <h1 class="text-5xl font-semibold text-blue-gray-900 mb-4">Frequently asked questions</h1>
      <p class="text-xl text-gray-500 mx-auto mb-24 lg:w-3/5">
        Welcome to the AI Conference 2023 FAQ section. We're here to address your most common queries...
      </p>
    </div>
    <div class="container mx-auto lg:max-w-screen-lg lg:px-20">
      <div v-for="(faq, idx) in faqs" :key="idx" class="border-b border-blue-gray-100 py-4">
        <button
            @click="open = open === idx ? null : idx"
            class="w-full text-left flex justify-between items-center text-xl font-semibold"
        >
          {{ faq.question }}
          <svg
              :class="{'transform rotate-45': open === idx}"
              xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
              fill="currentColor" viewBox="0 0 20 20"
          >
            <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"/>
          </svg>
        </button>
        <div v-show="open === idx" class="mt-2 text-gray-500">
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const faqs = [
  {
    question: '1. How do I register for the AI Conference 2023?',
    answer: 'You can register for the AI Conference 2023 by visiting our registration page...'
  },
  {
    question: '2. What are the registration fees, and what is included?',
    answer: "It really matters and then like it really doesn't matter... a lot of people don't appreciate the moment until it's passed."
  },
  {
    question: '3. Can I get a refund if I need to cancel my registration?',
    answer: 'The time is now for it to be okay to be great...'
  },
  {
    question: '4. Will there be on-site registration available?',
    answer: 'I always felt like I could do anything...'
  },
  {
    question: '5. What is the dress code for the conference?',
    answer: 'There’s nothing I really wanted to do in life that I wasn’t able to get good at...'
  }
]
const open = ref<number|null>(null)
</script>
