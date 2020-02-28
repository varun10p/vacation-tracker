import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('trips', {
      params: {
        search: search
      }
    })
  },
  show (tripId) {
    return Api().get(`trips/${tripId}`)
  },
  post (trip) {
    return Api().post('trips', trip)
  },
  put (trip) {
    return Api().put(`trips/${trip.id}`, trip)
  }
}
