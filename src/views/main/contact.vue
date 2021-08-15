<template>
  <v-container class="contact">
    <v-container fluid class="gradient fill-height">
      <v-container class="textContainer">
        <v-row class="pa-4" justify="center">
          <v-col class="text-center">
            <v-row class="textWrapper mb-1">
              <v-card-text class="bodyText"> CONTACT PERSON </v-card-text>
            </v-row>
            <v-row class="textWrapper mb-1">
              <v-card-text class="bodyText">
                EMAIL<br />
                afurerucolors@gmail.com
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
.contact {
  min-height: 100vh;
}

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
  background-color: rgba(5, 41, 65, 0.6);
  backdrop-filter: blur(1.5px) grayscale(30%);
}
.textContainer {
  max-width: 400px;
}
</style>