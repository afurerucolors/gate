<template>
  <v-container fluid class="selfIntro pa-0 fill-height">
    <v-container fluid class="gradient fill-height pa-0">
      <v-container class="textContainer mx-auto pa-0">
        <v-row class="" justify="center">
          <v-col cols="6" class="pt-16">
            <v-container class="textWrapper pa-0 ma-0">
              <v-card-text class="bodyText">
                Hello, welcome to my website! <br />
              </v-card-text>
            </v-container>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="6">
            <v-container class="textWrapper mb-1 pa-0">
              <v-card-text class="bodyText">
                I draw anime, manga, or game illustrations or character design.
                I accept works for character design, illustration or portraits.
              </v-card-text>
            </v-container>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="6">
            <v-container class="textWrapper mb-1 pa-0">
              <v-card-text class="bodyText">
                If you interested, just contact me from the contacts available
                here. It would be better if you can provide me the job details,
                deadline and the budget as well when contacting me.
              </v-card-text>
            </v-container>
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
}
@keyframes slidein {
  from {
    opacity: 0%;
  }

  to {

    opacity: 100%;
  }
}
.gradient {
  background-image: linear-gradient(
    hsl(244, 100%, 6%),
    rgba(0, 0, 0, 0),
    hsl(244, 100%, 6%)
  );
}
.textWrapper {
  animation: slidein ease-in-out 2000ms;

  /* border-style: solid;
  border-width: 2px;
  border-color: rgba(170, 170, 221, 0.4); */

  border-radius: 10px;
  background-color: rgba(5, 41, 65, 0.6);

  backdrop-filter: blur(1.5px) grayscale(30%);
}
.bodyText {
  font-size: 14px;
  letter-spacing: 0.4px;
  border-radius: 20px;
  border-style: solid;
  border-image: -webkit-linear-gradient(
    rgba(47, 0, 255, 0),
    rgb(66, 242, 255, 0.5),
    rgb(120, 255, 214, 0.6),
    rgb(66, 242, 255, 0.5),
    rgba(47, 0, 255, 0)
  );
  border-image-slice: 1;
  width: 100;
  color: rgb(240, 232, 234);
  -webkit-backdrop-filter: blur(12px) invert();
  /* background-color: rgba(18, 0, 68,0.7); */
}

.textContainer {
  max-width: 800px;
}
</style>