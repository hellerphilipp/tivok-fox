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

    logout() {
        const cookies = new Cookies()

        cookies.remove('id_token')
        cookies.remove('token_exp')

        location.pathname = "/"
    }

    handleAuthentication() {
        this.client.parseHash((err, results) => {
            if(results && results.idToken) {
                let expiresAt = results.expiresIn * 1000 + new Date().getTime()

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
        // validation is server side anyway..if someone messes with the token, broken functionality is their fault
        const cookies = new Cookies()

        let token = cookies.get('id_token')
        let expiresAt = cookies.get('token_exp')
        return token&&expiresAt?expiresAt < new Date().getTime():false
    }
}