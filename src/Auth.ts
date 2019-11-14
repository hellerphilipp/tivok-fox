import * as Auth0 from 'auth0-js'
import Cookies from 'universal-cookie'

export class Auth {
    client: Auth0.WebAuth

    constructor() {
        this.client = new Auth0.WebAuth({
            domain: 'tivok.eu.auth0.com',
            clientID: 'Xp3pDuzT7fKjGsHkvY382H8z97YRlXBy',
            redirectUri: 'http://localhost:8000/callback',
            responseType: 'id_token',
            scope: 'openid profile email'
        })

        this.authorize = this.authorize.bind(this)
    }

    authorize() {
        this.client.authorize()
    }

    handleAuthentication() {
        this.client.parseHash((err, results) => {
            if(results && results.idToken) {
                let expiresAt = JSON.stringify(results.expiresIn * 1000 + new Date().getTime())

                const cookies = new Cookies()
                cookies.set('id_token', results.idToken, { path: '/' })
                cookies.set('token_exp', expiresAt, { path: '/' })
                location.hash = ""
            } else {
                console.log(err)
            }
            location.pathname = "/"
        })
    }

    isAuthenticated(): boolean {
        return false
    }
}