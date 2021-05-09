export const state = () => ({
   message: ""
 });

export const mutations = {
  setMessage(state, message){
  
    state.message = message 
  
  }
}


export const actions = {
  checkMessage({ commit }, message){

    if(message != null){
      commit("setMessage", message);
    }else {
      return ;
    }

  }
}