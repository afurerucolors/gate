export default {
    namespaced: true,
    state: {
        lightbox: {
            show: false,
            index: null,
        },
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
        ],
    },
    mutations: {
        openLightboxPreview(state, index) {
            state.lightbox.index = index;
            state.lightbox.show = true;
        },
        closeLightboxPreview(state) {
            state.lightbox.show = false;
            state.lightbox.index = null;
        }
    }

}