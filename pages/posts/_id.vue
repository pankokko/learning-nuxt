<template>
     <div class="container col-md-6 mt-5">
    <div class="card" style="width: 18rem;">
      <img :src="post.image_path">
    <div class="card-body">
    <h5 class="card-title">{{ post.title }}</h5>
    <p class="card-text">{{post.comment}}</p>
    <a href="#" class="btn btn-primary">Go Edit</a>
    <button @click="deletePost" class="btn btn-danger">Delete</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  middleware:['auth'],
  async asyncData({$axios, params}){  
    try {
      let data = await $axios.$get(`/post/${params.id}`);

      console.log(data);

      return {post: data}

    } catch(err){
    }
  },
  methods: {
    async deletePost(){
      try {
      let res = await this.$axios.post(`/post/${this.post.id}/delete`);
      this.$router.push("/posts");

      } catch(error){
        return ;
      }

    }
  }

}
</script>