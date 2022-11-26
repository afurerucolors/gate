export default {
    namespaced: true,
    state: {
        commissions: [
            {
                title: 'Half Body',
                desc: '',
                defprice: '40',
                upgrades: [
                    {desc: '+ Character', price: '35'},
                    {desc: 'Background', price: '30'},
                    {desc: 'Pet/Companion', price: '5'},

                ],
                color: 'rgb(202, 222, 238)',
            },
            {
                title: 'Full Body',
                desc: '',
                defprice: '70',
                upgrades: [
                    {desc: '+ Character', price: '65'},
                    {desc: 'Background', price: '40'},
                    {desc: 'Pet/Companion', price: '5'},

                ],
                color: 'rgb(238, 235, 202)',
            },
        ]
    },

}