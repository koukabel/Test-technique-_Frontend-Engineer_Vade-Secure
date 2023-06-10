// import { shallowMount } from "@vue/test-utils";


// const factory = (values = {}) => {
//   return shallowMount(CocktailsApp, {
//     data() {
//       return {
//         ...values,
//       };
//     },
//   });
// };

// describe("CocktailsApp", () => {
//   it("check if cocktails is an array", () => {
//     const wrapper = factory();

//     expect(wrapper.find(".cocktails").isArray().toBeTruthy);
//   });
// });

import { mount } from '@vue/test-utils';
import CocktailsApp from "../CocktailsApp.vue";

describe('API Test', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(CocktailsApp, {
      propsData: {
        name: 'CocktailsApp',
        completed: false
      }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});

  