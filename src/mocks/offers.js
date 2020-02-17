import nanoid from 'nanoid';

const ID_PREFIX = `id_`;

const offers = [
  {
    id: ID_PREFIX + nanoid(10),
    title: `Beautiful & luxurious apartment at great location`,
    price: `120`,
    type: `Apartment`,
    photo: `img/apartment-01.jpg`,
    isPremium: true
  },
  {
    id: ID_PREFIX + nanoid(10),
    title: `Wood and stone place`,
    price: `80`,
    type: `Private room`,
    photo: `img/room.jpg`,
    isPremium: false
  },
  {
    id: ID_PREFIX + nanoid(10),
    title: `Canal View Prinsengracht`,
    price: `132`,
    type: `Apartment`,
    photo: `img/apartment-02.jpg`,
    isPremium: false
  },
  {
    id: ID_PREFIX + nanoid(10),
    title: `Nice, cozy, warm big bed apartment`,
    price: `180`,
    type: `Apartment`,
    photo: `img/apartment-03.jpg`,
    isPremium: true,
  }
];

export default offers;
