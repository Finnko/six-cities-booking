interface ICity {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

export { ICity };
