<template>
  <li>
    <base-card>
      <header>
        <h3>{{ title }}</h3>
        <base-button @click="deleteResource(id)">Delete</base-button>
      </header>
      <p>{{ description }}</p>
      <nav>
        <a target="blank" :href="link">View resource</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
export default {
  components: { BaseButton },
  inject: ['deleteResource'],
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  color: #05326d;
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  color: black;
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #4282d3;
}

a:hover,
a:active {
  color: #6997d3;
}
</style>
