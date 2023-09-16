/* eslint-disable react/prop-types */
import { Col, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const SubHeader = ({ current, detail }) => {
  return (
    <div>
      <Row>
        <Col>
          <Breadcrumb>
            {current !== 'Home' && (
              <BreadcrumbItem>
                <Link to="/">Home</Link>
              </BreadcrumbItem>
            )}

            {detail && (
              <BreadcrumbItem>
                <Link to="/directory">Directory</Link>
              </BreadcrumbItem>
            )}
            <BreadcrumbItem active>{current}</BreadcrumbItem>
          </Breadcrumb>
          <h2>{current}</h2>
          <hr />
        </Col>
      </Row>
    </div>
  );
};

export default SubHeader;
