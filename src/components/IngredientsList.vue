<template>
  <Transition name="outerModal">
    <div
      v-show="modalOpened"
      class=" bg-gray-900 absolute w-full bg-opacity-30 h-screen top-1 left-0 flex justify-center px-4 overflow-hidden"
    >
      <Transition name="innerModal">
        <div
          v-if="modalOpened"
                class="p-4 bg-gray-200 self-start m-32 "
        >
         <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-bold mb-4">Ingredients</h2>
          <span @click="closeModal" class=" px-4 cursor-pointer">❌</span>
          </div>
          <ul>
            <li v-for="ingredient in cocktailIngredients" :key="ingredient.ingredient">
              <span class="font-semibold">{{ ingredient.ingredient }}</span>
              {{ ingredient.measure }}
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "IngredientsList",
  props: {
    cocktailIngredients: {
      type: Array,
      default: () => [],
    },
    modalOpened: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["closeModal"],
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style scoped>
.outerModal-enter-active,
.innerModal-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.outerModal-enter-from,
.innerModal-leave-to {
  opacity: 0;
}
</style>
