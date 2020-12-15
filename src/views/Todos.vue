<template>
  <h1>Your todos: {{ localStorage.name }}</h1>
  <AddTodo
    @add-todo="addTodo"
  />
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

export default {
  name: 'Todos',
  data () {
    return {
      todos: []
    }
  },
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
  }
}
</script>
