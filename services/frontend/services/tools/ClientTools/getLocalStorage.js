export const LocalStorage = {
    getItem(key) {
        try {
            return localStorage.getItem(key)
        } catch(e) {
            return null
        }
    },

    setItem(key, value) {
        try {
            localStorage.setItem(key, value)
        } catch(e) {
            return
        }
    },
 
    removeItem(key) {
        try {
            localStorage.removeItem(key)
        } catch(e) {
            return
        }
    }
}


export default LocalStorage;