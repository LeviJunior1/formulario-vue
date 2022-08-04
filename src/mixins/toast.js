const toast = {
    methods: {
        showToast(variant = null, title, body, toaster = 'b-toaster-bottom-left', append = false) {
            this.$bvToast.toast(body, {
                variant,
                title,
                toaster,
                solid: true,
                appendToast: append,
            })
        }
    }
}

export default toast