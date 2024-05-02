export default {
    namespaced: true,
    state: {
        lightbox: {
            show: false,
            index: null,
            title: "",
        },
        displayedArtsCount: 0,
        displayedArts: [],
        illustrations: [
            {
                title: "Arlecchino \"The Father\"",
                src: 'arlecchino.jpg',
            },
            {
                title: "Phobos",
                src: "phobos.jpg",
            },
            {
                title: "Marco The Phoenix",
                src: "marco.jpg",
            },
            {
                title: "Raiden Ei",
                src: "raiden.jpg",
            },
            {
                title: "Shopping",
                src: "zhongli.jpg",
            },
            {
                title: "Cyberpunk: Edgerunners - Lucy & David",
                src: "cyberpunk_edgerunners.jpg",
            },
            {
                title: "Suzume Iwato",
                src: "suzume.jpg",
            },
            {
                title: "Yor Forger",
                src: "yor.jpg",
            },
            {
                title: "Yelan",
                src: "yelan.jpg",
            },
            {
                title: "Denji & Makima",
                src: "denji_makima.jpg",
            },
        ],
    },
    mutations: {
        openLightboxPreview(state, index) {
            state.lightbox.index = index;
            state.lightbox.show = true;
            state.lightbox.title = state.illustrations[index].title;
        },
        closeLightboxPreview(state) {
            state.lightbox.show = false;
            state.lightbox.index = null;
        },
        index(state,index){
            state.lightbox.index = index;
            console.log(state.lightbox.index)
        }
    }

}