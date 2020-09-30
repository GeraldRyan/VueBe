export default {
  addPet: (context, pet) =>{
    context.commit("appendPet", pet)
  }
}