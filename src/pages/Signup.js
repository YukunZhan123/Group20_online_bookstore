import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useUserContext } from "../context/user_context";
import logo from "../assets/logo.png";
import { Form, Card, Button, Container, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useUserContext();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);

      history.push("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "85vh" }}
    >
      <div className="w-100" style={{ maxWidth: "450px" }}>
        <Card onSubmit={handleSubmit}>
          <Card.Body>
            <h2 className="text-center mb-3">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form>
              <Form.Group className="mb-3" id="name">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>
              <Form.Group className="mb-3" id="name">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>
              <Form.Group className="mb-3" id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group className="mb-3" id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Form.Group className="mb-3" id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  required
                />
              </Form.Group>
              <Button
                disabled={loading}
                className="w-100 mt-2"
                variant="dark"
                type="submit"
              >
                Sign up
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </div>
    </Container>
  );
};

export default Signup;
