Vue.use(VueMaterial);

var ibcJoiningTheMission = new Vue({
    el: '#ibc-joining-the-mission',
    data: {
        page: 'Welcome'
    },
    methods: {
        setPage: function(page) {
            this.page = page;
        }
    }
})