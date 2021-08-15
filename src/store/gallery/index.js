import axios from 'axios'

export default {
    namespaced: true,
    state: {
        images: [],
    },
    mutations: {
        async setImages(state, images) {
            state.images = images
        }
    },
    actions: {
        getImages({ commit }) {
            axios.get('https://afurerucolors.github.io/api/images/',{
                headers: {
                    "Accept":'application/json',
                    "Content-Type":'application/json',
                }
            }).then((response) => {
                commit('setImages', response.data);
                console.log(response.data)
            })
        }
    },


}