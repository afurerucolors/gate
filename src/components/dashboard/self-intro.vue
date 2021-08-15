<template>
  <v-container fluid class="selfIntro pa-0 fill-height">
    <v-container fluid class="gradient fill-height">
      <v-container class="textContainer">
        <v-row class="pa-4" justify="center">
          <v-col class="text-center">
            <v-row class="textWrapper mb-1">
              <v-card-text class="bodyText">
                Hello, welcome to my website! <br />
              </v-card-text>
            </v-row>
            <v-row class="textWrapper mb-1">
              <v-card-text class="bodyText">
                I draw anime, manga, or game styled illustrations or character
                design. I accept works for character design, illustration or
                portraits.
              </v-card-text>
            </v-row>
            <v-row class="textWrapper mb-1">
              <v-card-text class="bodyText">
                If you interested, just contact me from the contacts available
                here. It would be better if you can provide me the job details,
                deadline and the budget as well when contacting me.
              </v-card-text>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
<script>
export default {};
</script>
<style scoped>
.selfIntro {
  /* background-image: url("../../assets/layouts/header.jpg"); */
  background-size: cover;
  background-position: right;
}
.gradient {
  background-image: linear-gradient(
    hsl(244, 100%, 6%),
    rgba(0, 0, 0, 0),
    hsl(244, 100%, 6%)
  );
}
.textWrapper {
  /* border-style: solid;
  border-width: 2px;
  border-color: rgba(170, 170, 221, 0.4); */

  border-radius: 10px;
  background-color: rgba(2, 8, 36, 0.6);
  backdrop-filter: blur(1.5px) grayscale(30%);
}
.textContainer {
  max-width: 800px;
}
</style>