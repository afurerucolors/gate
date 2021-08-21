<template>
  <v-overlay
    opacity="1"
    color="rgba(6, 0, 34)"
    class="myOverlay"
    v-if="this.$store.state.loader.show"
    :value="this.$store.state.loader.show"
  >
    <v-row justify="center">
      <v-col class="text-center" align-self="center">
        <v-progress-circular
          color="rgb(50, 228, 235)"
          class="myLoader"
          indeterminate
          size="40"
          style=""
        ></v-progress-circular>
      </v-col>
    </v-row>
    <v-row justify="center" class="loadingText">
      <v-col class="text-center">
        <span class="loadingText"> preparing the content ...</span>
      </v-col>
    </v-row>
  </v-overlay>
</template>
<script>
export default {};
</script>
<style scoped>
.color {
  color: rgb(50, 228, 235);
}
.loadingText {
  font-size: 14px;
  margin-left: 1px;
  letter-spacing: 2px;
}
</style>