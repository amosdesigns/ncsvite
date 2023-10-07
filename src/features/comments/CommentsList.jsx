/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { Col, Card } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByCampsiteId } from './commentsSlice';
import CommentForm from './CommentForm';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const CommentsList = ({ campsiteId }) => {
  const comments = useSelector(selectCommentsByCampsiteId(campsiteId));
  const isLoading = useSelector((state) => state.comments.isLoading);
  const errMsg = useSelector( ( state ) => state.comments.errMsg );

  if (isLoading) {
    return <Loading />;
  }

  if (errMsg) {
    return <Error errMsg={errMsg} />;
  }

  if (comments.featuredItems.length > 0 ) {
    return (
      <Col md="5" className="m-1">
        <Card md="5" className="p-4">
          <h4>Comments</h4>
          {comments.featuredItems.map((comment) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Comment key={comment.id} comment={comment} />
            );
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
