export default {
    namespaced: true,
    state: {
        commissions: [
            {
                title: 'Half Body',
                desc: '',
                defprice: '40',
                upgrades: [
                    {desc: '+1 Character', price: '30'},
                    {desc: 'Background', price: '30'},
                    {desc: 'Pet/Companion', price: '5'},

                ],
                color: 'rgb(215, 228, 238)',
            },
            {
                title: 'Full Body',
                desc: '',
                defprice: '70',
                upgrades: [
                    {desc: '+1 Character', price: '60'},
                    {desc: 'Background', price: '40'},
                    {desc: 'Pet/Companion', price: '5'},

                ],
                color: 'rgb(238, 236, 215)',
            },
        ]
    },

}