export default function ({store, redirect}){
  if(!store.getters["auth/authenticated"]){
    store.dispatch("validation/setErros", {text: ["aaaa"]})
    return redirect('/login');
  }
}