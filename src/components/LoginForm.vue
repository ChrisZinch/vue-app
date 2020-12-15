<template>
  <form class="login" @submit.prevent="login">
    <h2>Please, sign in:</h2>
    <label>Your name:</label>
    <input
      v-model="name"
      type="text"
      placeholder="Username"
      required
    >
    <label>Your password:</label>
    <input
      v-model="password"
      type="password"
      placeholder="Password"
      required
    >
    <button type="submit">Login</button>
  </form>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.name === 'Admin' && this.password === '12345') {
        localStorage.setItem('auth', true)
        localStorage.setItem('name', this.name)
        this.$router.push('/todos')
        console.log(localStorage)
      } else {
        alert('Your name or password is wrong')
        this.name = ''
        this.password = ''
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@mixin inputSize {
  width: 250px;
  height: 40px;
  border: 1px solid #42b983;
  border-radius: 5px;
}
* {
box-sizing: border-box;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 40vh;
}
input {
  @include inputSize;
}
button {
  @include inputSize;
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
