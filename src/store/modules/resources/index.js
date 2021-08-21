import axios from 'axios'
import store from '../..';

export default {
    namespaced: true,
    state: {
        gallery: {
            images: [],
        },
        portfolio: {
            images: [{
                    title: 'Shinra Kusakabe',
                    cols: 3,
                    src: "shinra kusakabe.jpg",
                },
                {
                    title: 'Arknights 1st Anniversary',
                    cols: 6,
                    src: "arknights 1st anniversary.jpg",
                },
                {
                    title: "Timuru Tempest ~ MEGIDO",
                    cols: 3,
                    src: "rimuru tempest.jpg",
                },
                {
                    title: "Rengoku Kyojurou Ougi",
                    cols: 5,
                    src: "rengoku kyojurou.jpg",
                },
                {
                    title: "Genshin Impact ~ Zhong Li",
                    cols: 2,
                    src: "genshin impact zhongli.jpg",
                },
                {
                    title: "Inside",
                    cols: 5,
                    src: "inside.jpg",
                },
                {
                    title: "Hanako x Nene",
                    cols: 3,
                    src: "jibaku shonen hanako kun.jpg",
                },
                {
                    title: "Arknights ~ Siege",
                    cols: 6,
                    src: "arknights siege.jpg",
                },
                {
                    title: "Weathering With You",
                    cols: 3,
                    src: "weathering with you.jpg",
                },
            ],
        },
        lightbox: {
            show: false,
            index: null,
        },
        portfolioLightbox: {
            show: false,
            index: null,
        },
        contactPersons: [{
                name: "Instagram",
                account: "@afurerucolors",
                link: "https://www.instagram.com/afurerucolors",
                icon: "mdi-instagram",
            },
            {
                name: "Twitter",
                account: "@afurerucolors",
                link: "https://www.twitter.com/afurerucolors",
                icon: "mdi-twitter",
            },
            {
                name: "Whatsapp",
                account: "+62-853-5066-2800",
                link: "https://www.instagram.com/afurerucolors",
                icon: "mdi-whatsapp",
            },
        ],
        socialMedias: [{
                name: "Twitter",
                account: "@afurerucolors",
                link: "https://www.twitter.com/afurerucolors",
                icon: "mdi-twitter",
            },
            {
                name: "Instagram",
                account: "@afurerucolors",
                link: "https://www.instagram.com/afurerucolors",
                icon: "mdi-instagram",
            },
            {
                name: "Facebook",
                account: "Afureru Colors",
                link: "https://www.facebook.com/afurerucolors",
                icon: "mdi-facebook",
            },
            {
                name: "Deviantart",
                account: "AfureruColors",
                link: "https://www.deviantart.com/afurerucolors",
                icon: "mdi-deviantart",
            },
            {
                name: "Pixiv",
                account: "Afureru Colors",
                link: "https://www.pixiv.net/users/35822162",
                icon: null,
                src: ""
            },
        ],
    },
    mutations: {
        async setImages(state, images) {
            state.gallery.images = await images;
        },
        setLightbox(state, { index, type }) {
            if (type == 'gallery') {
                state.lightbox.index = index;
                state.lightbox.show = true;
            } else {
                state.portfolioLightbox.index = index;
                state.portfolioLightbox.show = true;
            }
        },
        closeLightbox(state, type) {
            if (type == 'gallery') {
                state.lightbox.show = false;
                state.lightbox.index = null;
            } else {
                state.portfolioLightbox.show = false;
                state.portfolioLightbox.index = null;
            }


        }
    },
    actions: {
        getImages({ state, commit }) {
            store.commit("loader/set", true);

            axios.get('https://afurerucolors.github.io/api/images/', {
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": 'application/json',
                }
            }).then(async(response) => {
                await commit('setImages', response.data);
                store.commit("loader/set", false);
            })
        }
    },


}