const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID

export const initGoogleAuth = () => {
    const script = document.createElement('script')
    script.src = 'https://apis.google.com/js/platform.js'
    script.async = true
    script.defer = true
    document.head.appendChild(script)
}

export const googleLogin = () => {
    return new Promise((resolve, reject) => {
        window.gapi.load('auth2', () => {
            const auth2 = window.gapi.auth2.init({
                client_id: GOOGLE_CLIENT_ID,
                scope: 'profile email'
            })

            auth2.signIn().then((googleUser) => {
                const profile = googleUser.getBasicProfile()
                const userData = {
                    id: profile.getId(),
                    name: profile.getName(),
                    email: profile.getEmail(),
                    photoURL: profile.getImageUrl()
                }
                resolve(userData)
            }).catch((error) => {
                reject(error)
            })
        })
    })
}

export const googleLogout = () => {
    return new Promise((resolve, reject) => {
        const auth2 = window.gapi.auth2.getAuthInstance()
        auth2.signOut().then(() => {
            resolve()
        }).catch((error) => {
            reject(error)
        })
    })
}