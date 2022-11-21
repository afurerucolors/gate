<template>
    <v-container>
        <v-card>
            <v-card-title>{{ title }}</v-card-title>
            <v-card-text>
                <v-container class="def-price text-center">
                    <span class="price-sign">$</span><span class="price">{{ defprice }}</span>
                </v-container>
                <v-container>
                    <v-row v-for="(upgrade, i) in upgrades" :key="i" align-content="space-between" class="py-0">
                        <v-col class="py-0" cols="10" md="8">{{ upgrade.desc }}</v-col>
                        <v-col class="py-0" cols="2" md="4">+ <span class="price-sign">$</span><span class="price">{{ upgrade.price }}</span></v-col>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
export default {
    props: ["title", "desc", "defprice", "upgrades", "global"],
    components: {

    },
    data() {
        return {

        };
    },
};
</script>
<style scoped>
.def-price {
    font-size: 50px;
}
.price-sign {
    font-family: 'Karla';
}
.price {
    font-family: 'Karla'
}
</style>