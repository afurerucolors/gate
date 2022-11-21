export default {
    namespaced: true,
    state: {
        commissions: [
            {
                title: '',
                desc: '',
                defprice: '40',
                upgrades: [
                    {desc: 'Background', price: '30'},
                    {desc: 'Pet/Companion', price: '5'}

                ],
            },
            {
                title: '',
                desc: '',
                defprice: '70',
                upgrades: [{desc: 'Background', price: '40'}],
            },
        ]
    },

}