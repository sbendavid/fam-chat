import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { Form, Button, Row, Col } from "react-bootstrap";

import { registerUser } from "../reducers/userReducers";

import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, userInfo } = useSelector(
    (state) => state.userRegister
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ username, password }));
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/login");
    }
  }, [userInfo, navigate]);

  return (
    <FormContainer>
      <h2>Sign Up</h2>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="name"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Register
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Have an Account? <Link to="/login">Sign In</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;
