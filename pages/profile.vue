<template>
  <div>
    <h2>User Profile</h2>
    <p>Name: {{ user.name }}</p>
    
  </div>
</template>

<script>
export default {
  middleware: ["auth"]
}
</script>