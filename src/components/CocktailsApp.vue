<template>
  <div class="page-container flex flex-col items-center justify-center">
    <h1 class="text-4xl font-bold text-black text-center mt-8 mb-4 header">
      Cocktail Party
    </h1>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      class="w-5 h-5 cursor-pointer"
      @click="handleClick"
    >
      <path
        fill-rule="evenodd"
        d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
        clip-rule="evenodd"
      />
    </svg>

    <div class="container mx-auto mt-4 space-y-4">
      <div class="flex flex-wrap justify-center gap-4">
        <div
          v-for="cocktail in cocktails"
          :key="cocktail.idDrink"
          class="max-w-sm rounded overflow-hidden shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 transform transition duration-500 hover:scale-110 cocktail-card"
        >
          <div class="flex flex-col items-center justify-center space-y-4 p-4">
            <h2 class="text-xl font-bold text-center cocktail_name">
              {{ cocktail.strDrink }}
            </h2>
            <img
              :src="cocktail.strDrinkThumb"
              :alt="cocktail.strDrink"
              class="w-full h-56 object-cover"
            />
            <p class="text-gray-700 text-base text-justify description">
              {{ cocktail.strInstructions }}
            </p>

            <button
              @click="toggleModal(cocktail.idDrink)"
              type="button"
              class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Show ingredients
            </button>
            <IngredientsList
              :cocktailIngredients="getIngredients(cocktail)"
              :modalOpened="modalOpened(cocktail.idDrink)"
              @closeModal="closeModal(cocktail.idDrink)"
            ></IngredientsList>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IngredientsList from "./IngredientsList.vue";

export default {
  name: "CocktailsApp",
  components: {
    IngredientsList,
  },
  data() {
    return {
      cocktails: [],
      modalStates: {},
      // modalOpened: ref(false),
    };
  },

  methods: {
    async fetchCocktails() {
      try {
        const requests = Array.from({ length: 3 }, () =>
          fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        );
        const responses = await Promise.all(requests);
        const data = await Promise.all(responses.map((res) => res.json()));
        this.cocktails = data.map((item) => ({
          ...item.drinks[0],
          ingredients: this.getIngredients(item.drinks[0]),
        }));
      } catch (err) {
        console.log(err);
      }
    },
    getIngredients(cocktail) {
      const ingredients = [];
      for (let i = 1; i <= 15; i++) {
        const ingredient = cocktail[`strIngredient${i}`];
        const measure = cocktail[`strMeasure${i}`];
        if (ingredient) {
          ingredients.push({
            ingredient,
            measure,
          });
        }
      }
      return ingredients;
    },

    handleClick() {
      //refresh the page
      this.fetchCocktails();
    },
    toggleModal(cocktailId) {
      this.modalStates[cocktailId] = !this.modalStates[cocktailId];
    },
    closeModal(cocktailId) {
      // Close the modal for the selected cocktail card
      this.modalStates[cocktailId] = false;
    },
  },
  computed: {
    modalOpened() {
      return (cocktailId) => this.modalStates[cocktailId] || false;
    },
  },
  mounted() {
    // The mounted hook should be placed outside the methods section
    this.fetchCocktails();
  },
};
</script>
<style>
body {
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
}
.header {
  font-family: "Limelight", cursive;
}
.cocktail-card {
  background-color: white;
}

.cocktail_name,
.description {
  font-family: "Oswald", sans-serif;
}
</style>
