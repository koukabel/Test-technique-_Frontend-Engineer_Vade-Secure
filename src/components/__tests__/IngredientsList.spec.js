import { shallowMount } from "@vue/test-utils";
import IngredientsList from "../IngredientsList.vue";

describe("IngredientsList", () => {
  it("closes the modal when the close button is clicked", async () => {
    const wrapper = shallowMount(IngredientsList, {
      propsData: {
        cocktailIngredients: [],
        modalOpened: true,
      },
    });

    // Find the close button
    const closeButton = wrapper.find("span");
    // Simulate a click event
    await closeButton.trigger("click");
    // Verify that the modal is closed
    expect(wrapper.emitted("closeModal")).toBeTruthy();
  });
});
