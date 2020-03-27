export default class Adapter {
  constructor(data) {
    this.id = data[`id`];
    this.type = data[`type`];
    this.coords = data[`location`];
    this.city = this._parseCity(data[`city`]);
    this.title = data[`title`];
    this.price = data[`price`];
    this.promoImage = data[`preview_image`];
    this.isPremium = data[`is_premium`];
    this.isFavorite = data[`is_favorite`];
    this.rating = data[`rating`];
    this.images = data[`images`];
    this.roomsCount = data[`bedrooms`];
    this.guestsCount = data[`max_adults`];
    this.features = data[`goods`];
    this.description = data[`description`];
    this.owner = data[`host`];
  }
  //
  // toRAW() {
  //   return {
  //     'id': this.id,
  //     'base_price': this.price,
  //     'date_from': new Date(this.dateStart).toISOString(),
  //     'date_to': new Date(this.dateEnd).toISOString(),
  //     'destination': {
  //       description: this.description,
  //       name: this.city,
  //       pictures: this.photos
  //     },
  //     'is_favorite': this.isFavorite,
  //     'offers': this.eventOffers,
  //     'type': this.type
  //   };
  // }

  _parseCity(city) {
    return {
      name: city.name,
      coords: city.location,
    };
  }

  static parseOffer(data) {
    return new Adapter(data);
  }

  static parseOffers(data) {
    return data.map((item) => Adapter.parseOffer(item));
  }
}
