// fetch('URL_GOES_HERE', { 
//     method: 'post', 
//     headers: new Headers({
//       'Authorization': 'Basic '+btoa('username:password'), 
//       'Content-Type': 'application/x-www-form-urlencoded'
//     }), 
//     body: 'A=1&B=2'
//   });

import * as React from 'react'
import { Auth } from './Auth'

export interface Event {
  id: string,
  name: string,
  ownerID: string,
  published: boolean
}

export class TivokAPIClient {
    private static host = "http://localhost:8080"
    private static auth = new Auth()

    static async getExistingEvents(): Promise<[Event]> {
        if(this.auth.isAuthenticated()) {
            return fetch(this.host+'/events', { 
                method: 'get', 
                headers: new Headers({
                  'Authorization': 'Bearer '+this.auth.getIdToken(), 
                  'Content-Type': 'application/json; charset=utf-8'
                }),
            }).then(res => res.json() as Promise<[Event]>)
        }
        return null
    }
}