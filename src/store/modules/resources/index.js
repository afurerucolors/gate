import axios from 'axios'
import store from '../..';

export default {
    namespaced: true,
    state: {
        info: {
            groups: 0,
        },
        worksInShowOffset: 0,
        worksInShow: [],

        myWorks: [
            // {
            //     title: "Shiro suna no Aquatope ~ Kai & Kukuru",
            //     series: 'The Aquatope on White Sand',
            //     category: 'Fanart',
            //     link:''
            // },
            {
                title: "Shiro suna no Aquatope ~ Fuuka & Kukuru",
                series: 'The Aquatope on White Sand',
                category: 'Fanart',
                link: 'https://i.imgur.com/lzkIwji.jpg',
            },
            {
                title: "Timuru Tempest ~ MEGIDO",
                src: "rimuru tempest.jpg",
            },
            {
                title: "Rengoku Kyojurou Ougi",
                src: "rengoku kyojurou.jpg",
            },
            {
                title: "Genshin Impact ~ Zhong Li",
                src: "genshin impact zhongli.jpg",
            },
            {
                title: "Inside",
                src: "inside.jpg",
            },
            {
                title: 'Arknights 1st Anniversary',
                src: "arknights 1st anniversary.jpg",
            },
            {
                title: 'Genshin Impact ~ Fischl & Oz',
                series: 'Genshin Impact',
                category: 'Fanart',
                link: "https://i.imgur.com/qEqyXJy.jpg",
            },
            // {
            //     title: 'Shiramochi DTIYS',
            //     series: '',
            //     category: 'DTIYS',
            //     link: "https://i.imgur.com/lJbRDEm.png",
            // },
            // {
            //     title: 'Oregairu Gif',
            //     series: 'Yahari Ore no Seishun Love Come wa Machigatteiru',
            //     category: 'Fanart',
            //     link: "https://djhfb5vvdddko.cloudfront.net/images/products/detail/T66UmqtiQIhNLkFvsuK1dWEyto5JXDYpbnvysltt.gif",
            // },
            // {
            //     title: 'Arknights ~ Chen & Hoshiguma',
            //     series: 'Arknights',
            //     category: 'Fanart',
            //     link: "https://djhfb5vvdddko.cloudfront.net/images/products/detail/1LkvrsPQMctHj2I0wLwFCGcVpuV95Kjlh1R062vc.jpeg",
            // },
            // {
            //     title: 'Arknights ~ Kjerag',
            //     series: 'Arknights',
            //     category: 'Fanart',
            //     link: "https://djhfb5vvdddko.cloudfront.net/images/products/detail/o4buLmL1LKEtJxtu9WIZzPxmPR7EXfn1798zBOK7.jpeg",
            // },
            // {
            //     title: 'Sing "Yesterday" for Me ~ Haru Nonaka',
            //     series: 'Sing "Yesterday" for Me',
            //     category: 'Fanart',
            //     link: "https://djhfb5vvdddko.cloudfront.net/images/products/detail/QAa53egIX38ksPhrJBcMGI4k8XiK345qSxvQW0SC.png",
            // },
            // {
            //     title: 'Arknights ~ Hellagur & Myrtle',
            //     series: 'Arknights',
            //     category: 'Fanart',
            //     link: "https://djhfb5vvdddko.cloudfront.net/images/products/detail/Kii4gdrVIyprS6hNB9lK3dI4M6t30cYtbfLnHHCk.jpeg",
            // },

            // {
            //     title: 'Kaguya-sama: Love is War ~ Ai Hayasaka',
            //     series: 'Kaguya-sama: Love is War',
            //     category: 'Fanart',
            //     link: "https://djhfb5vvdddko.cloudfront.net/images/products/detail/kwUWaO8PtoJV75G9PvztdHuAcqWlERGl29WwE8dN.jpeg",
            // },
            // {
            //     title: 'Kaguya-sama: Love is War ~ Ai Hayasaka',
            //     series: 'Kaguya-sama: Love is War',
            //     category: 'Fanart',
            //     link: "https://djhfb5vvdddko.cloudfront.net/images/products/detail/ipgE5GZKk8u3OCJHD1E44BAdzAxWelf35sG5aIQq.jpeg",
            // },
            // {
            //     title: 'Kaguya-sama: Love is War ~ Ai Hayasaka',
            //     series: 'Kaguya-sama: Love is War',
            //     category: 'Fanart',
            //     link: "https://djhfb5vvdddko.cloudfront.net/images/products/detail/HCLEePeYYBhe6PhU8kmcTDiIQznAtut6ouTpN8XW.jpeg",
            // },
            // {
            //     title: 'Kaguya-sama: Love is War ~ Ai Hayasaka',
            //     series: 'Kaguya-sama: Love is War',
            //     category: 'Fanart',
            //     link: "https://djhfb5vvdddko.cloudfront.net/images/products/detail/O3DyY9W8ymbVnCyDcE2tXpUfZsWDeiWjTivoJ0mx.jpeg",
            // },
            // {
            //     title: "Weathering With You ~ 100% Sunshine Girl!",
            //     series: 'Weathering With You',
            //     category: 'Fanart',
            //     link: "https://djhfb5vvdddko.cloudfront.net/images/products/detail/kodToSH0qhwQR8bQGt09BWatV5tXLlevHuTTLukI.jpeg",
            // },
            // {
            //     title: "Weathering With You ~ Hina & Hondaka",
            //     series: 'Weathering With You',
            //     category: 'Fanart',
            //     link: "https://djhfb5vvdddko.cloudfront.net/images/products/detail/B9OPEbzvVhMdmfBBOV81jCRlyIndTJ7Zw3aw47hp.jpeg",
            // },
            // {
            //     title: 'Arknights ~ Amiya',
            //     series: 'Arknights',
            //     category: 'Fanart',
            //     link: "https://djhfb5vvdddko.cloudfront.net/images/products/detail/3ZC0hbHECUw4ixn3N2IoaoSK30qrcj3oNpmrwERv.jpeg",
            // },
            // {
            //     title: 'Arknights ~ Siege & Indra',
            //     series: 'Arknights',
            //     category: 'Fanart',
            //     link: "https://djhfb5vvdddko.cloudfront.net/images/products/detail/Y27Oc30JwTUj7q8j810l56jnMOiNB89cP4mXi4r8.jpeg",
            // },
            // {
            //     title: 'Kimetsu no Yaiba ~ Zenitsu',
            //     series: 'Kimetsu no Yaiba',
            //     category: 'Fanart',
            //     link: "https://djhfb5vvdddko.cloudfront.net/images/products/detail/QVPRK0HEh9RC7jcEo238vw3wmAPx9zsK5s5fx8EA.jpeg",
            // },
            // {
            //     title: 'Chara Design Wan',
            //     series: '',
            //     category: 'Original',
            //     link: "https://djhfb5vvdddko.cloudfront.net/images/products/detail/NBBNVHOi9HYqJX3dqDbRqpUazNLZPMFlCUwuX8F2.jpeg",
            // },
            // {
            //     title: 'Arknights ~ Silver Ash',
            //     series: 'Arknights',
            //     category: 'Fanart',
            //     link: "https://djhfb5vvdddko.cloudfront.net/images/products/detail/eeoZTp51zKBqSaosME3xxKWTBOMNKmGgjvrJIVFR.jpeg",
            // },
            // {
            //     title: 'Arknights ~ Ch\'en',
            //     series: 'Arknights',
            //     category: 'Fanart',
            //     link: "https://djhfb5vvdddko.cloudfront.net/images/products/detail/rqlBlCEJhcXMxKRfzUtsNhuYQaR5SoMeBk6WxMmj.jpeg",
            // },
            // {
            //     title: 'Arknights ~ Platinum (Pizza Hut)',
            //     series: 'Arknights',
            //     category: 'Fanart',
            //     link: "https://djhfb5vvdddko.cloudfront.net/images/products/detail/y5FTP5I1AtR0IH2OJBQMsjzTMg8ff4wMjKfy8Zj0.jpeg",
            // },
            // {
            //     title: 'Arknights ~ Amiya & Doctor (original concept)',
            //     series: 'Arknights',
            //     category: 'Fanart',
            //     link: "https://djhfb5vvdddko.cloudfront.net/images/products/detail/XSecoZN1XN1Arp29Ge4eyrmRIYvV6cUk4uANYZIJ.jpeg",
            // },
            // {
            //     title: 'Jibaku Shounen Hanako-kun ~ Hanako & Nene',
            //     series: 'Jibaku Shounen Hanako-kun',
            //     category: 'Fanart',
            //     link: "https://djhfb5vvdddko.cloudfront.net/images/products/detail/FB12urMPexPZTEIXvRgPZzurU7KzOkSRdQ3ab1ak.jpeg",
            // },
            // {
            //     title: 'Arknights ~ Siege',
            //     series: 'Arknights',
            //     category: 'Fanart',
            //     link: "https://djhfb5vvdddko.cloudfront.net/images/products/detail/qD9buKIINvYuIRGISaiHZYMIJK9ZEFDquR0PoEXt.jpeg",
            // },
            {
                title: 'Arknights ~ Siege',
                series: 'Arknights',
                category: 'Fanart',
                src: "arknights siege.jpg",

            },
            {
                title: 'Shinra Kusakabe',
                series: 'Fire Force',
                category: 'Fanart',
                src: "shinra kusakabe.jpg",
            },


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
        async setImages(state, { groups, images }) {
            state.gallery[groups].images = await images;
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
        getImages({ state, commit }, groups) {
            // store.commit("loader/set", true);
            axios.get('https://afurerucolors.github.io/api/images/' + groups, {
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": 'application/json',
                }
            }).then(async(response) => {
                await commit('setImages', {
                    groups: groups,
                    images: response.data
                });
                // store.commit("loader/set", false);
            }).catch((error) => {
                // store.commit("loader/set", false);
            })
        },
        getInfo({ state, commit }) {
            store.commit("loader/set", true);
            axios.get('https://afurerucolors.github.io/api/info/', {
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": 'application/json',
                }
            }).then(async(response) => {
                console.log(response)
                state.groups = await response.data.groups;
                for (let i = 0; i < groups; i++) {
                    this.gallery[i] = {
                        images: [

                        ]
                    }
                }
                store.commit("loader/set", false);
            }).catch((error) => {
                store.commit("loader/set", false);
            })
        },
    },


}