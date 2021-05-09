export default function({$axios, store, redirect}){
  $axios.onError(error => {
    
    if (error.response.status === 422){
      console.log(error.response)
      store.dispatch("validation/setErros", error.response.data.errors);
    }
    
    return Promise.reject(error);

  });

  $axios.onRequest(() => {
    store.dispatch("validation/clearErrors");
  });

  $axios.onResponse(res => {
    if(res.data.message){
      console.log(res)
      store.dispatch("checkMessage", res.data.message)
    }
  })
}