<template>
  <div class="container col-md-6 mt-5">
    <h2>Register</h2>
    <br>
    <form @submit.prevent="register">
        <div class="mb-3">
        <label class="form-label">Full name</label>
        <input  v-model.trim="form.name"  type="text" class="form-control">
        <small class="form-text text-danger" v-if="errors.name" >{{ errors.name[0] }}</small>
      </div>
      <div class="mb-3">
        <label  class="form-label">Email address</label>
        <input v-model.trim="form.email" type="email" class="form-control">
        <small class="form-text text-danger" v-if="errors.email">{{errors.email[0]}} </small>
      </div>
      <div class="mb-3">
        <label  class="form-label">Password</label>
        <input  v-model.trim="form.password" type="password" class="form-control">
        <small class="form-text text-danger" v-if="errors.password">{{ errors.password[0] }}</small>

      </div>
      <button type="submit"  class="btn btn-primary">Register</button>
    </form>
    <br>
    <p>Dont have any account ? <nuxt-link to="/register" />Register</p>
  </div>
</template>

<script>
export default {
  middleware: ["guest"],
  data (){
    return {
      form: {
      name: "",
      email: "",
      password: ""
    },
    }
  },
  created(){
  },
  methods: {
    async register(){

      try {
        
        await this.$axios.$post('register', this.form);
        await this.$auth.loginWith('local', 
        {data: { email: this.form.email, password: this.form.password}});
        
        this.$router.push("/profile");

      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>


