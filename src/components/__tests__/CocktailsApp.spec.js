import { shallowMount } from "@vue/test-utils";
import CocktailsApp from "../CocktailsApp.vue";

describe("CocktailsApp", () => {
  // we use async then we wait for the fetchCocktails method to finish before asserting the length
  it("fetches cocktails from the API", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({ drinks: [{}, {}, {}] }), // Mock API response with 3 objects
    });

    const wrapper = shallowMount(CocktailsApp);

    // Wait for the next tick to allow the fetchCocktails method to complete
    await wrapper.vm.$nextTick();

    await wrapper.vm.fetchCocktails();

    // Verify that the cocktails array has a length of 3
    expect(wrapper.vm.cocktails).toHaveLength(3);
  });

  it("renders cocktails with image, instructions, and drink name", () => {
    const wrapper = shallowMount(CocktailsApp);
    const cocktails = wrapper.vm.cocktails;

    cocktails.forEach((cocktail) => {
      expect(cocktail.strDrinkThumb).toBeTruthy();
      expect(cocktail.strInstructions).toBeTruthy();
      expect(cocktail.strDrink).toBeTruthy();
    });
  });
});
