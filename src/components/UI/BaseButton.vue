<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
button {
  padding: 0.5rem 1rem;
  font-family: inherit;
  background-color: #4282d3;
  border: 1px solid #4282d3;
  border-radius: 6px;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #6997d3;
  border-color: #6997d3;
}

.flat {
  background-color: transparent;
  color: #4282d3;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: transparent;
  color: #6997d3;
}
</style>
