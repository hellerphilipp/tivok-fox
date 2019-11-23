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

export interface TivokEvent {
  id: string,
  name: string,
  ownerID: string,
  published: boolean
}

export interface TivokUser {
  id?: string,
  sub?: string,
  email?: string,
  givenName?: string,
  familyName?: string,
  emailVerified?: string,
  pictureURL?: string
  lastEvent?: string // TODO: make it matter!
}

export class TivokAPIClient {
    private static host = "http://localhost:8080"
    private static auth = new Auth()

    // static async getUser(): Promise<[Event]> {
    // }

    static async getExistingEvents(): Promise<[TivokEvent]> {
        if(this.auth.isAuthenticated()) {
            return fetch(this.host+'/events', { // TODO: Filter by User?!
                method: 'get', 
                headers: new Headers({
                  'Authorization': 'Bearer '+this.auth.getIdToken(), 
                  'Content-Type': 'application/json; charset=utf-8'
                }),
            }).then(res => res.json() as Promise<[TivokEvent]>)
        }
        return null
    }

    static async getOwnUser(): Promise<TivokUser> {
      if(this.auth.isAuthenticated()) {
        return fetch(this.host+'/users?self', {
            method: 'get', 
            headers: new Headers({
              'Authorization': 'Bearer '+this.auth.getIdToken(), 
            }),
        }).then(res => res.json() as Promise<TivokUser>)
      }
      return null
    }

    static async updateUser(newUser: TivokUser): Promise<void> {
      if(this.auth.isAuthenticated()) {
        return this.getOwnUser().then(user => {
          return fetch(this.host+'/users/'+user.id, {
            method: 'put', 
            headers: new Headers({
              'Authorization': 'Bearer '+this.auth.getIdToken(), 
              'Content-Type': 'application/json; charset=utf-8'
            }),
            body: JSON.stringify(newUser)
          }).then()
        })
      }
      return null
    }

    static async getEvent(id: string): Promise<TivokEvent> {
      if(this.auth.isAuthenticated()) {
          return fetch(this.host+'/events/'+id, {
              method: 'get', 
              headers: new Headers({
                'Authorization': 'Bearer '+this.auth.getIdToken(), 
                'Content-Type': 'application/json; charset=utf-8'
              }),
          }).then(res => res.json() as Promise<TivokEvent>)
      }
      return null
  }

    static async createEvent(name: string): Promise<string> {
      if(this.auth.isAuthenticated()) {
        return fetch(this.host+'/events', {
            method: 'post', 
            headers: new Headers({
              'Authorization': 'Bearer '+this.auth.getIdToken(), 
              'Content-Type': 'application/json; charset=utf-8'
            }),
            body: JSON.stringify({
              name: name
            })
        }).then(res => res.headers.get('Location').split('/')[2])
    }
    return null
    }
}