<template>
    <v-container>
        <v-card  flat :color="color" class="c-price-card pa-0" :style="'border-color: '+color+' !important'" >
            <v-card-title  class="price-title "><v-spacer>{{ title }}</v-spacer></v-card-title>
            <v-card-text class="px-0">
                <!-- <v-divider class="mb-3 mx-2"></v-divider> -->
                <v-container class="def-price text-center">
                    <span class="price-sign">$</span><span class="price">{{ defprice }}</span>
                </v-container>
                <v-divider class="mt-3 mb-5 mx-2"></v-divider>
                <v-container class="upgrades">
                    <v-row v-for="(upgrade, i) in upgrades" :key="i" align-content="space-between" class="py-0">
                        <v-col class="py-0" cols="9" sm="9" md="8">{{ upgrade.desc }}</v-col>
                        <v-col class="py-0" cols="3" sm="3" md="4">+ <span class="price-sign">$</span><span class="price">{{ upgrade.price }}</span></v-col>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
export default {
    props: ["title", "desc", "defprice", "upgrades", "global", "color"],
    components: {

    },
    data() {
        return {

        };
    },
};
</script>
<style scoped>
.c-price-card {
    border-width: 0px !important;
}
.c-price-card:hover {
    box-shadow: 0 0 5 0 !important;
}
.main-container {
    background: rgb(238, 236, 215) !important;
    /* background: rgb(255, 245, 223) !important; */
}

.def-price {
    font-size: 3rem;
}

.price-sign {
    font-family: 'Karla';
    color: var(--title-primary-color);

}

.price {
    font-family: 'Karla';
    color: var(--body-primary-color);

}

.upgrades {
    font-size: 0.9rem;
    font-family: 'Karla';
    font-weight: 500;
    color: var(--body-primary-color);

}

.price-title {
    font-size: 1.2rem;
    font-family: 'Karla';
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    color: var(--body-primary-color);

}
</style>