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
                title: "「Honkai Star Rail」Topaz",
                src: "2024_05_topaz.jpg",
            },
            {
                title: "「Chainsawman」Denji & Reze",
                src: "2025_07_Chainsa_man_Denreze.jpg",
            },
            {
                title: "「Dandadan」Acrobatic Silky",
                src: '2024_11_acrobatic_silky.jpg',
            },
            {
                title: "「Dandadan」Seiko Ayase",
                src: "2024_10_Seiko_Ayase_(classroom).jpg",
            },
            {
                title: "「Arcane」TimeBomb",
                src: "2024_12_timebomb.jpg",
            },
            {
                title: "「Honkai Star Rail」Anaxa & Aglaea",
                src: "2025_05_aglanaxa.jpg",
            },
            {
                title: "「Honkai Star Rail」Magic Academy Trailblazers",
                src: "2025_04_multiverse_vistas.jpg",
            },
            {
                title: "「One Piece」Maid Outfits",
                src: "2025_06_One_Piece_(Maid_outfits).jpg",
            },
            {
                title: "「Genshin Impact」Dainsleif & Oz",
                src: "2025_06_dainsleif.jpg",
            },
           
            {
                title: "【Original】Orange Girl",
                src: "2025_04_original.jpg",
            },
            {
                title: "Azuki Shao",
                src: "2025_04_azuki_shao.jpg",
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