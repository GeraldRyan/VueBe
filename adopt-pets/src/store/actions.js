export default {
  addPet: (context, {pet, payload}) =>{
    context.commit("appendPet", payload)
  }
}