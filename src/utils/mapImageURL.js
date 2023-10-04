import { baseUrl } from '../app/shared/baseUrl';

export const mapImagesURL = (arr) => { 
  return arr.map( ( item ) => { 
    return {
      ...item,
      image: baseUrl + item.image
    };
  } );
};