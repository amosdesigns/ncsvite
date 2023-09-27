/* eslint-disable react/prop-types */
import {useSelector} from 'react-redux';
import { Col, Card } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByCampsiteId } from './commentsSlice';
import CommentForm from './CommentForm';

const CommentsList = ({ campsiteId }) => {
  const comments = useSelector(selectCommentsByCampsiteId(campsiteId));

  if (comments && comments.length > 0) {
    return (
      <Col md="5" className="m-1">
        <Card className="p-4">
          <h4>Comments</h4>
          {comments.map((comment) => {
            return <Comment key={comment.id} comment={comment} />;
          })}
          <CommentForm campsiteId={campsiteId} />
        </Card>
      </Col>
    );
  }
  return (
    <Col md="5" className="m-1">
      There are no comments for this campsite yet.
    </Col>
  );
};

export default CommentsList;
