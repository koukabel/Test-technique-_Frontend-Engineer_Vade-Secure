// import { shallowMount } from '@vue/test-utils'
// import IngredientsList from '../IngredientsList.vue'

// describe("IngredientsList", () => {
//   it("restitue un message de bienvenue", () => {
//     const wrapper = factory();

//     expect(wrapper.find(".message").text()).toEqual(
//       "Bienvenue sur le tutoriel Vue.js"
//     );
//   });

//   it("restitue une erreur quand `username` a moins de 7 caractères", () => {
//     const wrapper = factory({ username: "" });

//     expect(wrapper.find(".error").exists()).toBeTruthy();
//   });

//   it("restitue une erreur quand `username` contient des espaces", () => {
//     const wrapper = factory({ username: " ".repeat(7) });

//     expect(wrapper.find(".error").exists()).toBeTruthy();
//   });

//   it("ne restitue pas d'erreur quand `username` a 7 caractères ou plus", () => {
//     const wrapper = factory({ username: "Lachlan" });

//     expect(wrapper.find(".error").exists()).toBeFalsy();
//   });
// });