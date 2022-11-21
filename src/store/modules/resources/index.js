import axios from 'axios'
import store from '../..';

export default {
    namespaced: true,
    state: {
        displayedArtsCount: 0,
        displayedArts: [],
        illustrations: [
            {
                title: "Shiro suna no Aquatope ~ Fuuka & Kukuru",
                series: 'The Aquatope on White Sand',
                category: 'Fanart',
                link: 'https://i.imgur.com/lzkIwji.jpg',
            },
            {
                title: "Inside",
                src: "inside.jpg",
            },
            {
                title: "Yor Forger",
                src: "Yor.jpg",
            },
            {
                title: "Timuru Tempest ~ MEGIDO",
                src: "rimuru tempest.jpg",
            },
            {
                title: "Nilou",
                src: "Nilou.jpg",
            },
            {
                title: "Denji & Makima",
                src: "Denji Makima.jpg",
            },
            {
                title: "Cyberpunk: Edgerunners",
                src: "Cyberpunk Edgerunners.jpg",
            },
            {
                title: "Makima",
                src: "makima.jpg",
            },
            {
                title: "Yuta Okkotsu",
                src: "yuta okkotsu.jpg",
            },
            {
                title: "Shanks",
                src: "shanks.jpg",
            },
            // {
            //     title: 'Arknights ~ Siege',
            //     series: 'Arknights',
            //     category: 'Fanart',
            //     src: "arknights siege.jpg",

            // },
            // {
            //     title: 'Shinra Kusakabe',
            //     series: 'Fire Force',
            //     category: 'Fanart',
            //     src: "shinra kusakabe.jpg",
            // },


        ],
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
                name: "Email",
                account: "afurerucolors@gmail.com",
                link: "",
                icon: "mdi-email",
            },
            // {
            //     name: "Whatsapp",
            //     account: "+62-853-5066-2800",
            //     link: "https://wa.me/+6285350662800",
            //     icon: "mdi-whatsapp",
            // },
        ],
        socialMedias: [{
                name: "Pixiv",
                account: "Afureru Colors",
                link: "https://www.pixiv.net/users/35822162",
                icon: null,
                src: "pixiv",
                background: "blue lighten-5",
                text: "blue--text text--darken-2",
            },
            {
                name: "Twitter",
                account: "@afurerucolors",
                link: "https://www.twitter.com/afurerucolors",
                icon: "mdi-twitter",
                background: "blue lighten-4",
                text: "blue--text text--darken-3",
            },
            {
                name: "Instagram",
                account: "@afurerucolors",
                link: "https://www.instagram.com/afurerucolors",
                icon: "mdi-instagram",
                background: "red lighten-5",
                text: "purple--text text--darken-4",
            },
            {
                name: "Facebook",
                account: "Afureru Colors",
                link: "https://www.facebook.com/afurerucolors",
                icon: "mdi-facebook",
                background: "blue-grey lighten-5",
                text: "blue--text text--darken-4",
            },
            {
                name: "DeviantArt",
                account: "AfureruColors",
                link: "https://www.deviantart.com/afurerucolors",
                icon: "mdi-deviantart",
                background: "grey lighten-2",
                text: "green--text text--darken-4",
            },
            // {
            //     name: "Arxist",
            //     account: "Afureru Colors",
            //     link: "https://arxist.com/afurerucolors",
            //     icon: null,
            //     src: "arxist",
            //     background: "pink lighten-4",
            //     text: "red--text text--darken-4",
            // },
            {
                name: "Website",
                account: "Afureru Colors",
                link: "https://afurerucolors.github.io",
                icon: 'mdi-web',
            },
            {
                name: "Sketchmob",
                account: "Afureru Colors",
                link: "https://sketchmob.com/user-profile/afurerucolors",
                icon: 'mdi-pen',
                // hide: true,
                // disabled: true,
                // background: "amber lighten-5",
                // text: "indigo--text text--lighten-4",
                background: "amber lighten-3",
                text: "indigo--text text--lighten-1",
            },
            {
                name: "Fiverr",
                account: "Afureru Colors",
                link: "https://www.fiverr.com/afurerucolors",
                icon: 'mdi-pen',
                // hide: true,
                // disabled: true,
                // background: "blue-grey lighten-5",
                // text: "green--text text--lighten-3",
                background: "green lighten-4",
                text: "green--text text--darken-4",

            },
        ],
    },
    mutations: {
        setLightbox(state, { index, type }) {
            if (type == 'gallery') {
                state.lightbox.index = index;
                state.lightbox.show = true;
            } else {
                state.portfolioLightbox.index = index;
                state.portfolioLightbox.show = true;
            }
        },
        closeLightboxPreview(state) {
            state.lightbox.show = false;
            state.lightbox.index = null;
        }
    },
    actions: {
        
    },


}