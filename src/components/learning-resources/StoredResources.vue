<template>
  <ul>
    <LearningResource
      v-for="resource in $store.state.resources"
      :key="resource.id"
      :id="resource.id"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
    />
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';

export default {
  components: { LearningResource },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: 40rem;
}
</style>
