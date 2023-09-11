import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const selectAllCampsites = () => {
  return CAMPSITES;
};

export const selectCampsiteById = ( campsiteId ) => { 
  return CAMPSITES.find( campsite => campsite.id === campsiteId );
};
// export const selectRandomCampsite = () => {
//   return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)];
// };
