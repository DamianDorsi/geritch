import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Botella',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Botella',
  },
  {
    title: 'La Vieille Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Ron oscuro | Cerveza | Rodaja de lima',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Ron | Jugo citrico | Azucar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Azucar negra | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Vermouth dulce | Campari | Jugo de naranja',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitalidad',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Chef increible',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

const exportedObjects = {
  wines,
  cocktails,
  awards
};

export default exportedObjects;