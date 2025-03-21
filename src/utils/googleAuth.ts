import { User } from '../types/auth'

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID

interface GoogleTokenResponse {
    access_token: string
    error?: string
}

interface GoogleUserInfo {
    sub: string
    name: string
    email: string
    picture: string
}

declare global {
    interface Window {
        google?: {
            accounts: {
                oauth2: {
                    initTokenClient: (params: {
                        client_id: string
                        scope: string
                        callback: (response: GoogleTokenResponse) => void
                    }) => {
                        requestAccessToken: () => void
                    }
                    revoke: (token: string, callback: () => void) => void
                }
            }
        }
    }
}

export const initGoogleAuth = (): Promise<void> => {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = 'https://accounts.google.com/gsi/client'
        script.async = true
        script.defer = true
        script.onload = () => resolve()
        document.head.appendChild(script)
    })
}

export const googleLogin = (): Promise<User> => {
    return new Promise((resolve, reject) => {
        try {
            if (!window.google || !window.google.accounts) {
                throw new Error('Google Identity Services not loaded')
            }

            const client = window.google.accounts.oauth2.initTokenClient({
                client_id: GOOGLE_CLIENT_ID,
                scope: 'profile email',
                callback: (tokenResponse: GoogleTokenResponse) => {
                    if (tokenResponse.error) {
                        reject(tokenResponse)
                        return
                    }

                    localStorage.setItem('googleToken', tokenResponse.access_token)
                    fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                        headers: {
                            'Authorization': `Bearer ${tokenResponse.access_token}`
                        }
                    })
                    .then(response => response.json())
                    .then((data: GoogleUserInfo) => {
                        const userData: User = {
                            id: data.sub,
                            name: data.name,
                            email: data.email,
                            photoURL: data.picture
                        }
                        resolve(userData)
                    })
                    .catch(error => reject(error))
                }
            })

            client.requestAccessToken()
        } catch (error) {
            reject(error)
        }
    })
}

export const googleLogout = (): Promise<void> => {
    return new Promise((resolve) => {
        if (window.google && window.google.accounts) {
            window.google.accounts.oauth2.revoke(localStorage.getItem('googleToken') || '', () => {
                localStorage.removeItem('googleToken')
                resolve()
            })
        } else {
            resolve()
        }
    })
}
