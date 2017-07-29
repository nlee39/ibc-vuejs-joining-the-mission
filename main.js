var desktopSideNav = document.getElementById('desktop_sidenav');
var desktopSideNavClone = desktopSideNav.cloneNode(true);
desktopSideNavClone.classList.remove('desktop_sidenav');

var mobileSideNav = document.getElementById('mobile_sidenav');
mobileSideNav.appendChild(desktopSideNavClone);

Vue.use(VueMaterial);

var ibcJoiningTheMission = new Vue({
    el: '#ibc-joining-the-mission',
    data: {
        page: 'Welcome'
    },
    methods: {
        setPage: function(page) {
            this.page = page;
            document.body.scrollTop = 0;
            if (this.$refs.mobile_sidenav) {
                this.$refs.mobile_sidenav.close()
            }
        },

        openSideNav: function() {
            this.$refs.mobile_sidenav.open()
        }

    }
})