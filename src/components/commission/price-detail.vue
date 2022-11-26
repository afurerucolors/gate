<template>
    <v-container class="price-container">
        <v-card flat :color="color" class="price-card pa-0 ">
            <div class="price-cover">
                <v-card-title class="price-title ">
                    <v-spacer>{{ title }}</v-spacer>
                </v-card-title>
                <v-card-text class="px-0">
                    <!-- <v-divider class="mb-3 mx-2"></v-divider> -->
                    <v-container class="def-price text-center">
                        <span class="price-sign">$</span><span class="price">{{ defprice }}</span>
                    </v-container>
                    <v-divider class="mt-3 mb-5 mx-2"></v-divider>
                    <v-container class="upgrades">
                        <v-row v-for="(upgrade, i) in upgrades" :key="i" align-content="space-between" class="py-0">
                            <v-col class="py-0" cols="9" sm="9" md="8">{{ upgrade.desc }}</v-col>
                            <v-col class="py-0" cols="3" sm="3" md="4">+ <span class="price-sign">$</span><span
                                    class="price">{{ upgrade.price }}</span></v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
            </div>
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
.price-container {
    max-width: 290px;
}


.sample-color {
    /* background: rgb(238, 235, 202) !important; */
    /* background: rgb(202, 222, 238) !important; */
}

.price-card {
    /* border-width: 1px !important;
    border-color: var(--title-primary-color) !important; */
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