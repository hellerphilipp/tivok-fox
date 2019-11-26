import { Auth } from './Auth'

export interface TivokEvent {
  id: string,
  name: string,
  ownerID: string,
  description?: string,
  startDate?: Date,
  endDate?: Date,
  location?: string,
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
    private static host = "https://api.tivok.projects.pxheller.co"
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
            }).then(res => res.json() as Promise<[TivokEvent]>).then(events => {
              events.map((event) => {
                event.startDate = event.startDate!=null?new Date(event.startDate):null
                event.endDate = event.endDate!=null?new Date(event.endDate):null
              })
              return events
            })
        }
        this.auth.logout()
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
      this.auth.logout()
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
      this.auth.logout()
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
           }).then(res => res.json()).then(resultBody => {
            resultBody.startDate = resultBody.startDate!=null?new Date(resultBody.startDate):null
            resultBody.endDate = resultBody.endDate!=null?new Date(resultBody.endDate):null
            return resultBody as Promise<TivokEvent>
          })
      }
      this.auth.logout()
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
    this.auth.logout()
    return null
  }

  static async updateEvent(event: TivokEvent, newEvent: {
    name: string,
    description?: string,
    startDate?: string,
    endDate?: string,
    location?: string,
    published: string
  }): Promise<void> {
    if(this.auth.isAuthenticated()) {
      return fetch(this.host+'/events/'+event.id, {
          method: 'put', 
          headers: new Headers({
            'Authorization': 'Bearer '+this.auth.getIdToken(), 
            'Content-Type': 'application/json; charset=utf-8'
          }),
          body: JSON.stringify({
            name: newEvent.name,
            description: newEvent.description,
            startDate: newEvent.startDate+':00Z',
            endDate: newEvent.endDate+':00Z',
            location: newEvent.location,
            published: newEvent.published=="true"?true:false
          })
      }).then()
    }
    this.auth.logout()
    return null
  }
}