import React from 'react'
import { Button, Label, Col, FormGroup } from 'reactstrap'
import { Formik, Field, Form } from 'formik'

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        phoneNum: '',
        email: '',
        agree: false,
        contactType: 'By Phone',
        feedback: ''
      }}>
      <Form>
        <FormGroup row>
          <Label htmlFor="firstName" md="2">
            First Name
          </Label>
          <Col md="10">
            <Field
              className="form-control"
              type="text"
              id="firstName"
              name="firstName"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="lastName" md="2">
            Last Name
          </Label>
          <Col md="10">
            <Field
              className="form-control"
              type="text"
              id="lastName"
              name="lastName"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="phoneNum" md="2">
            Phone
          </Label>
          <Col md="10">
            <Field
              className="form-control"
              type="text"
              id="phone"
              name="phone"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="email" md="2">
            Email
          </Label>
          <Col md="10">
            <Field
              className="form-control"
              type="email"
              id="email"
              name="email"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label check md={{ size: 4, offset: 2 }}>
            <Field type="checkbox" id="agree" name="agree" className="form-check-input"/>
            { ' '}May we contact you?
          </Label>
          <Col md="4">
            <Field name="contactType" type="radio" as="select">
              <option>By Phone</option>
              <option>By Email</option>
            </Field>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="feedback" md="2">
            Your Feedback
          </Label>
          <Col md="10">
            <Field
              className="form-control"
              type="textarea"
              id="feedback"
              name="feedback"
              rows="12"
              as="textarea"
            />
          </Col>
        </FormGroup>
        <FormGroup row></FormGroup>
      </Form>
    </Formik>
  );
}

export default ContactForm
