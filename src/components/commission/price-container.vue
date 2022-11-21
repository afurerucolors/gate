<template>
  <v-container fluid class="pa-0">
    <v-row>
      <v-col v-for="(commission,i) in commissions" :key="i" cols="12" md="6">
          <PriceDetail :title="commission.title" :desc="commission.desc" :upgrades="commission.upgrades" :defprice="commission.defprice" :global="isGlobal"></PriceDetail>
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-col>
        <v-container fluid>
          <v-switch v-model="global"></v-switch>
        </v-container>
      </v-col>
    </v-row> -->
  </v-container>
</template>
<script>
import PriceDetail from './price-detail.vue'
export default {
  components: {
    PriceDetail,
  },
  data() {
    return {
       global: true,
    };
  },
  computed: {
    isGlobal() {
       return this.global;
    },
    commissions() {
      return this.$store.state.request.commissions;
    }
  },
  methods: {
  },
};
</script>
<style scoped>

</style>