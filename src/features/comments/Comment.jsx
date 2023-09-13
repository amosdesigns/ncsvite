/* eslint-disable react/prop-types */
import { formatDate } from '../../utils/formatDate';

const Comment = ({ comment }) => {
  const { text: commentText, rating, author, date } = comment;
  return (
    <p>
      {commentText}
      <br />
      <small className="alert-info p-2 my-4">
        {rating}/5 stars -- {author}, {formatDate(date)}
      </small>
    </p>
  );
};

export default Comment;
