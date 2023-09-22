/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateCommentForm } from '../../utils/validateCommentForm';

const CommentForm = ( { campsiteId } ) => {
  const [modalOpen, setModalOpen] = useState( false );
  
  const handleSubmit = ( values, { resetForm } ) => { 
    const comment = {
      campsiteId: parseInt(campsiteId),
      rating: values.rating,
      author: values.author,
      text: values.commentText
    };
    console.log( 'New comment:', comment );
    setModalOpen(false);
  };
  return (
    <>
      <Button outline onClick={() => setModalOpen(true)}>
        <i className="fa fa-pencil fa-lg" /> Add Comment
      </Button>
      <Modal isOpen={modalOpen} toggle={() => setModalOpen(false)}>
        <ModalHeader toggle={() => setModalOpen(false)}>
          Add Comment
        </ModalHeader>

        <ModalBody>
          <Formik
            initialValues={{
              rating: undefined,
              author: '',
              commentText: ''
            }}
            onSubmit={handleSubmit}
            validate={validateCommentForm}>
            <Form>
              <FormGroup>
                <Label htmlFor="rating">Rating</Label>
                <Field
                  className="form-control"
                  as="select"
                  name="rating"
                  id="rating">
                  <option value="">Select a Rating</option>
                  <option value="1">1 - Poor</option>
                  <option value="2">2 - Fair</option>
                  <option value="3">3 - Good</option>
                  <option value="4">4 - Very Good</option>
                  <option value="5">5 - Excellent</option>
                </Field>
                <ErrorMessage name="rating">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="author">Your Name</Label>
                <Field
                  className="form-control"
                  type="text"
                  name="author"
                  id="author"
                />
                <ErrorMessage name="author">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="commentText">Comment</Label>
                <Field
                  className="form-control"
                  as="textarea"
                  name="commentText"
                  id="commentText"
                  rows="12"
                />
              </FormGroup>
              <FormGroup>
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </FormGroup>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
    </>
  );
}

export default CommentForm
