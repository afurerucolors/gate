import axios from "axios"

// const client_secret = '636f65d243ec0a531d4549d6f73f9162'
// const client_id = '16565'
const base_url = 'https://www.deviantart.com'

export default {
    namespaced: true,
    state: {

    },
    mutations: {
        async getIllusts() {
            axios.get(base_url+'/oauth2/authorize',{
                headers: {
                    'Content-Type' : 'application/json',
                    'Accept': 'application/json',
                    'Cross-Origin-Resource-Sharing' : 'true'
                }
            }).then((code) => console.log(code));
        }
    },
    actions: {
        async getIllusts({commit}) {
            await commit('getIllusts');
        }
    }
}