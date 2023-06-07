<template>
 <div class="page-container flex flex-col items-center justify-center">
    <h1 class="text-4xl font-bold text-white text-center mt-8 mb-4 header">
      Cocktail Party
    </h1>
    <div class="container mx-auto mt-4 space-y-4">
      <div class="flex flex-wrap justify-center gap-4">
        <div
          v-for="cocktail in cocktails"
          :key="cocktail.idDrink"
          class="max-w-sm rounded overflow-hidden shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 cocktail-card"
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
              type="button"
              class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Show ingredients
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CocktailsApp",
  props: {},
  data() {
    return {
      cocktails: [],
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
        this.cocktails = data.map((item) => item.drinks[0]);
        console.log(this.cocktails);
      } catch (err) {
        console.log(err);
      }
    },
    handler() {
      this.fetchCocktails();
    },
  },
  mounted() {
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
  font-family: "Bubblegum Sans", cursive;
}
</style>
