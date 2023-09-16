import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const selectAllCampsites = () => {
  return CAMPSITES;
};

export const selectCampsiteById = (campsiteId) => {
  return CAMPSITES.find((campsite) => campsite.id === parseInt(campsiteId));
};

export const selectFeaturedCampsite = () => {
  return CAMPSITES.find((campsite) => campsite.featured);
};
