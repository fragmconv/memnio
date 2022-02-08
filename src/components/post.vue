<script setup>
const post = [
  {
    id: 0,
    author: "GattoBianco",
    text: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmagazine.petformance.eu%2Fwp-content%2Fuploads%2F2015%2F10%2Fmaxresdefault.jpg&f=1&nofb=1",
  },
  {
    id: 1,
    author: "GattoNero",
    text: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fazgatto.it%2Fwp-content%2Fuploads%2F2017%2F08%2Fsiberiano.jpg&f=1&nofb=1",
  },
  {
    id: 2,
    author: "GattoGrigio",
    text: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    image:
      "https://www.ilmiogattoeleggenda.it/wp-content/uploads/2019/06/Gatto-con-la-bocca-aperta-1.jpg",
  },
  {
    id: 3,
    author: "GattoRosso",
    text: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wonews.it%2Fimages%2Fglobali%2F2020-05-04%2F1588624700un7.jpg&f=1&nofb=1",
  },
];
</script>

<template>
  <div
    class="
      relative
      grid grid-cols-2 grid-flow-row
      mt-10
      ml-32
      gap-6
      w-full
      max-w-6xl
    "
  >
    <div
      v-for="post in post"
      v-bind:key="post.id"
      class="
        rounded-md
        bg-white
        hover:shadow
        transition
        duration-300
        ease-in-out
        transform
        hover:-translate-y-2
        select-none
        w-full
        ml-2
      "
    >
      <img
        class="object-cover rounded-t-md w-full h-48"
        v-bind:src="post.image"
        alt="post1"
      />
      <h3 class="text-base p-4 font-medium text-gray-800">
        {{ post.author }}
      </h3>
      <p class="p-4 text-base text-gray-600">
        {{ post.text }}
      </p>
    </div>
  </div>
</template>