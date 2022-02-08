<script setup></script>

<template>
  <div class="top-0 w-full h-64 bg-black-200 bg-opacity-25">
    <div class="h-full flex justify-center">
      <button
        class="text-white text-8xl subpixel-antialiased font-medium font-mono tracking-wide bg-green-500 h-full md:w-1/3 w-full"
      >
        memnio
      </button>
    </div>
    <div
      class="h-20 w-full text-lg subpixel-antialiased font-mono tracking-wide flex items-center justify-center select-none"
    >
      <div class="w-1/2 border-b-2 border-gray-400 border-opacity-20 py-5">
      <button class="mx-14 hover:text-green-500 hover:font-medium">
        <router-link to="/">HOME</router-link>
      </button>
      <button class="mx-14 hover:text-green-500 hover:font-medium">
        <router-link to="/articoli">ARTICOLI</router-link>
      </button>
      <button class="mx-14 hover:text-green-500 hover:font-medium">
        <router-link to="/about">ABOUT</router-link>
      </button>
      <button class="mx-14 hover:text-green-500 hover:font-medium">
        <router-link to="/contact">CONTACT</router-link>
      </button>
      </div>
    </div>
  </div>
</template>
