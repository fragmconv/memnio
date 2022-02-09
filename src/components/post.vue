<script setup>
const post = [
  {
    id: 0,
    title: "UN GATTO CANTANTE",
    text: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffiles.123freevectors.com%2Fwp-content%2Foriginal%2F131302-green-polygon-triangle-background.jpg&f=1&nofb=1",
  },
  {
    id: 1,
    title: "SCANDALO GATTESCO",
    text: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffiles.123freevectors.com%2Fwp-content%2Foriginal%2F131302-green-polygon-triangle-background.jpg&f=1&nofb=1",
  },
  {
    id: 2,
    title: "ANTEPRIMA DEL GATTO",
    text: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffiles.123freevectors.com%2Fwp-content%2Foriginal%2F131302-green-polygon-triangle-background.jpg&f=1&nofb=1",
  },
  {
    id: 3,
    title: "GATTOGATTI AI DOMICILIARI",
    text: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffiles.123freevectors.com%2Fwp-content%2Foriginal%2F131302-green-polygon-triangle-background.jpg&f=1&nofb=1",
  },
];
</script>

<template>
  <div
    class="relative grid md:grid-cols-3 grid-cols-1 grid-flow-row mt-10 gap-10 w-full h-full max-w-6xl"
  >
    <div
      v-for="post in post"
      v-bind:key="post.id"
      class="bg-white shadow transition duration-300 ease-in-out transform hover:-translate-y-2 w-full"
    >
      <img
        class="object-cover w-full h-48 select-none"
        v-bind:src="post.image"
        alt="post1"
      />
      <h3
        class="py-2 mx-4 hover:text-green-500 border-b-2 border-gray-400 border-opacity-10 text-center subpixel-antialiased font-normal font-mono text-gray-900 tracking-wide text-xl"
      >
        {{ post.title }}
      </h3>
      <p
        class="my-4 mx-4 text-justify subpixel-antialiased font-thin leading-relaxed font-mono text-gray-900 tracking-wide"
      >
        {{ post.text }}
      </p>
    </div>
  </div>
</template>
