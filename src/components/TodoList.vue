<template>
  <div>
    <ul>
      <TodoItem
        v-for="(todo, i) of todos"
        v-bind:todo="todo"
        v-bind:index="i"
        v-bind:key="todo.id"
        v-on:remove-todo="removeTodo"
        @update-value="updateVal"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'
export default {
  name: 'TodoList',
  props: ['todos'],
  components: {
    TodoItem
  },
  methods: {
    removeTodo (id) {
      this.$emit('remove-todo', id)
    },
    updateVal (payload) {
      this.$emit('update-value', payload)
    }
  }
}
</script>

<style scoped lang="scss">
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
