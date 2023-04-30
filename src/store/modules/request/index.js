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
                    {desc: 'Pet', price: '5'},
                    {desc: 'Companion', price: '20'},

                ],
                color: 'rgb(202, 222, 238)',
            },
            {
                title: 'Full Body',
                desc: '',
                defprice: '70',
                upgrades: [
                    {desc: '+ Character', price: '60'},
                    {desc: 'Background', price: '30'},
                    {desc: 'Pet', price: '5'},
                    {desc: 'Mascot', price: '20'},

                ],
                color: 'rgb(238, 235, 202)',
            },
        ]
    },

}