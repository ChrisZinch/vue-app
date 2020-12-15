<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title">
    <button type="submit">Add todo</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      title: ''
    }
  },
  methods: {
    onSubmit () {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false
        }
        this.$emit('add-todo', newTodo)
        this.title = ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
  form {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  input {
    width: 250px;
    height: 30px;
    border: 1px solid #42b983;
  }
  button {
    width: 100px;
    border: 1px solid #42b983;

    background-color: #42b983;
    color: #fff;
    font-weight: bold;

    transition: background-color 0.5s;
    cursor: pointer;

    &:hover {
      background-color: green;
    }
}
</style>
