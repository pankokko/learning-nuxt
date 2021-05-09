<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <nuxt-link to="/" class="navbar-brand">FrontEnd</nuxt-link>
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <nuxt-link to="/" class="nav-link">Home</nuxt-link>
        </li>
          <li class="nav-item">
            <nuxt-link to="/posts" class="nav-link">Posts</nuxt-link>
        </li>
        <template v-if="!authenticated">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <nuxt-link to="login" class="nav-link">Login</nuxt-link>
        </li>
          <li class="nav-item">
            <nuxt-link to="register" class="nav-link">Register</nuxt-link>
        </li>
      </ul>
      </template>
      <template v-if="authenticated">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <nuxt-link to="profile">{{ user.name }}</nuxt-link>
        </li>
          <li class="nav-item">
          <a @click.prevent="logout" class="nav-link">Logout</a>
        </li>
      </ul>
      </template>
      </ul>
    </div>
  </div>
</nav>
</template>
<script>

export default {
  asyncData(context){
    console.log(context.app)
  },
  methods: {
    logout(){
      this.$auth.logout();
    }
  }


}
</script>
