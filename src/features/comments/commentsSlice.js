import { COMMENTS } from '../../app/shared/COMMENTS';

export const selectCommentsByCampsiteId = ( campsite ) => { 

  return COMMENTS.filter( comment => comment.campsiteId === parseInt(campsite));
};