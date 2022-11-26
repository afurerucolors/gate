<template>
    <v-row justify="center">
        <v-col>
            <v-card-text class="text-justify c-text-body" id="contact">
                <span class="contact-title">Contacts:</span>
                <v-list-item v-for="(item, i) in contactPersons" :key="i" :href="item.link" dark target="_blank"
                    class="contactContainer">
                    <v-list-item-icon>
                        <v-icon color="" v-text="item.icon" class="contact-icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.name" class="contact-title"></v-list-item-title>
                        <v-list-item-subtitle v-text="item.account" class="contact-account">
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-card-text>
        </v-col>
    </v-row>
</template>

<script>
export default {
    computed: {
        contactPersons() {
            return this.$store.state.resources.contactPersons;
        },
    }
}
</script>

<style scoped>
.contact-title {
    color: var(--title-secondary-color) !important;
    font-family: "Karla";
    font-size: 14px;
    letter-spacing: 1.5px;
    font-weight: 700;
    text-transform: uppercase;
}

.contact-account {
    color: var(--title-primary-color) !important;
    font-family: "Karla";
    font-size: 14px;
    letter-spacing: 1px;
}

.contact-icon {
    color: var(--title-secondary-color) !important;
}

/* Dark Mode */

.contact-title.dark {
    color: var(--title-secondary-color-dark) !important;
}

.contact-account.dark {
    color: var(--title-secondary-color-dark) !important;
}

.contact-icon.dark {
    color: var(--title-secondary-color-dark) !important;
}
</style>