import * as Auth0 from 'auth0-js'

export class Auth {
    client: Auth0.WebAuth

    constructor() {
        this.client = new Auth0.WebAuth({
            domain: 'tivok.eu.auth0.com',
            clientID: 'Xp3pDuzT7fKjGsHkvY382H8z97YRlXBy',
            redirectUri: 'http://localhost:5000',
            responseType: 'token',
            scope: 'openid'
        })

        this.authorize = this.authorize.bind(this)
    }

    authorize() {
        this.client.authorize()
    }
}