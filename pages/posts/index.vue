<template>
     <div class="container col-md-6 mt-5">
       {{ $store.state.message}}
       <nuxt-link to="/posts/post">POST COMMENT</nuxt-link>
 <div class="list-group">
   <div v-for="( post ) in posts" :key="post.id">
    <div class="text-center">
      <img :src="post.image_path" alt="処方箋" width="100%" />
    </div>
  <a @click="$router.push(`/posts/${post.id}`)" class="list-group-item list-group-item-action flex-column align-items-start active">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{post.title}}</h5>
      <small>{{ $moment(post.created_at).format("YYYY-MM-DD h:mm")}} 分</small>
    </div>
    <p class="mb-1">{{post.comment}}</p>
  </a>
</div>
<br>
</div>
  </div>
</template>
<script>
export default {
    middleware: ["auth"],
    
    async asyncData({$axios, store, params}){
    let data = await $axios.$get("posts");

    return { posts: data }
    }, 
    created(){
      
      console.log(this.$route.params)
    }
}
</script>