<template>
  <div class="container col-md-6 mt-5">
    <h2>Login</h2>
    <br>
    <form @submit.prevent="submit">
      <div class="mb-3">
        <label  class="form-label">Email address</label>
        <input v-model.trim="form.email" type="email" class="form-control" autofocus>
        <small class="form-text text-danger"></small>
      </div>
      <div class="mb-3">
        <label  class="form-label">Password</label>
        <input v-model.trim="form.password" type="password" class="form-control">
        <small class="form-text text-danger"></small>

      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <br>
    <p>Dont have any account ? <nuxt-link to="/register" />Register</p>
  </div>
</template>

<script>
export default {
    middleware: ["guest"],
    data(){
      return {
        form: {
          email: "",
          password: ""
        }
      }
    },
    computed:{
      error(){
              return this.$store.state.validation.errors
      },
    },
    methods: {
      //login password: 11222222222
      async submit(){
      try {
                
        let response = await this.$auth.loginWith('local', { data: this.form })
        console.log(response)
        this.$router.push("/profile");

      } catch (err) {
        console.log(err)
      }        
          
      }
    }
}
</script>