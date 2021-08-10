const PixivApi = require('pixiv-api-client');
const pixiv = new PixivApi();
const id = '35822162';

export default {
    namespaced: true,
    state: {

    },
    mutations: {
        async getIllusts() {
            pixiv.tokenRequest().then(() => {
                return pixiv.userIllusts(id).then(response => {
                    console.log(response);
                    return pixiv.requestUrl(response.next_url);
                });
            });
        }
    },
    actions: {
        async getIllusts({commit}) {
            await commit('getIllusts');
        }
    }
}