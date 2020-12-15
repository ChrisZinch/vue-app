<template>
  <h1>Your todos </h1>
  <AddTodo
    @add-todo="addTodo"
  />
  <!-- <Loader v-if="loading" /> -->
  <TodoList
    v-if="todos.length"
    v-bind:todos="todos"
    @remove-todo="removeTodo"
    @change-todo="changeTodo"
    @update-value="updateVal"
  />
  <p v-else>No todos!</p>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import AddTodo from '@/components/AddTodo.vue'
// import Loader from '@/components/Loader.vue'

export default {
  name: 'Todos',
  data () {
    return {
      todos: []
      // loading: true
    }
  },
  /* mounted () {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => response.json())
      .then(json => {
        this.todos = json
        this.loading = false
      })
  }, */
  methods: {
    removeTodo (id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    addTodo (todo) {
      this.todos.push(todo)
    },
    updateVal (payload) {
      this.todos[this.todos.findIndex(t => t.title === payload.oldTitle)].title = payload.title
    }
  },
  components: {
    TodoList,
    AddTodo
    // Loader
  }
}
</script>
