export const validateCommentForm = ( values ) => {
  const errors = {};
  if ( typeof(values.rating) === 'undefined' || values.rating === '' ) {
    errors.rating = 'Required';
  } else if ( values.author.length < 2 ) {
    errors.author = 'Author name must be at least 2 characters.';
  } else if ( values.author.length > 15 ) { 
    errors.author = 'Author name must be 15 characters or less.';
  }

  return errors;
 };
