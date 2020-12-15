<template>
  <li>
    <div>
      {{ index + 1 }}
      <label @dblclick="edit = true" v-if="edit === false">{{ todo.title }}</label>
      <input
        v-if="edit === true"
        v-model="title"
        type="text"
        @blur="updateVal()"
        @keyup.enter="updateVal()">
    </div>
    <button
      class="remove"
      v-on:click="$emit('remove-todo', todo.id)"
    >
      &times;
    </button>
  </li>
</template>

<script>
export default {
  data () {
    return {
      edit: false,
      title: this.todo.title
    }
  },
  methods: {
    updateVal () {
      this.edit = false
      this.$emit('update-value', { title: this.title, oldTitle: this.todo.title })
    }
  },
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
  }
}
</script>

<style scoped lang="scss">
$removeColor: rgb(168, 96, 87);
  li {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 2rem;
    margin-bottom: 1rem;
    width: 50vw;
  }
  button {
    cursor: pointer;
  }
  .remove {
    background: $removeColor;
    border: 1px solid $removeColor;
    color: #fff;
    border-radius: 20%;
    font-weight: bold;
  }
</style>
