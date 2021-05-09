<template>
     <div class="container col-md-6 mt-5">
    <h2>Post comment</h2>
    <br>
    <form @submit.prevent="createPost">
        <div class="form-group">
            <label>Image </label>
            <input type="file" name="image" id="inputFile" accept="image/*" @change="changeImage" />
        </div>
        <div class="text-center" v-if="form.image !== ''">
            <img :src="imagePreview" alt="処方箋" width="100%" />
        </div>
      <div class="mb-3">
        <label  class="form-label">title</label>
        <input v-model.trim="form.title" type="text" class="form-control" autofocus>
        <small class="form-text text-danger"></small>
      </div>
      <div class="mb-3">
        <label  class="form-label">Comment</label>
        <input v-model.trim="form.comment" type="text" class="form-control">
        <small class="form-text text-danger"></small>
      </div>
      <button type="submit" class="btn btn-primary">post</button>
    </form>
  </div>
</template>
<script>
export default {
    middleware: ["auth"],
    data(){
      return {
        form: {
          title: "",
          comment: "",
          image: ""
        },
        imagePreview: "",
    }  
  },
  methods: {
      async createPost(){
        
        try {

          const config = { headers: { 'content-type': 'multipart/form-data' } };

          let formData =  new FormData;
          formData.append("title", this.form.title);
          formData.append("comment", this.form.comment);
          formData.append("image", this.form.image);

          let data =  await this.$axios.post("/post", formData, config);
          
          this.$router.push("/posts");
        }catch(error){
          throw new Error("投稿に失敗しました。")
        }
      },
      changeImage(e) {

          let files = e.target.files || e.dataTransfer.files;
          if (!files.length) return;
          this.createImage(files[0]);
      
      },
      createImage(file) {

          let reader = new FileReader();
          reader.readAsDataURL(file);

          reader.onload = (e) => {
              this.imagePreview = e.target.result;           
              this.$forceUpdate();
              this.form.image = file;
          };

      }

  }


}
</script>