import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Row, Col } from "react-bootstrap";

import Loader from "../components/Loader";
import Message from "../components/Message";

import { getUserProfile } from "../reducers/userReducers";

function HomeScreen() {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userProfile);
  const { error, loading, user } = userProfile;

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Row>
            <Col sm={12} md={6} lg={4} xl={3}>
              <h3>{user?.username}</h3>
              <h3>{user?.sub}</h3>
              <h3>{user?.iat}</h3>
              <h3>{user?.exp}</h3>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
