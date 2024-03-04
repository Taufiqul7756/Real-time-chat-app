import { useContext } from "react";
import { Alert, Button, Col, Form, Row, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { loginInfo, updateLoginInfo, loginUser, loginError, isLoginLoading } =
    useContext(AuthContext);

  return (
    <>
      <Form onSubmit={loginUser}>
        <Row
          style={{
            height: "100vh",
            justifyContent: "center",
            paddingTop: "20%",
          }}
        >
          <Col xs={6}>
            <Stack gap={3}>
              <div className="flex justify-center font-bold text-xl">
                <h2>Login</h2>
              </div>

              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) =>
                  updateLoginInfo({ ...loginInfo, email: e.target.value })
                }
              />

              <Button variant="primary" type="submit" disabled={isLoginLoading}>
                {isLoginLoading ? "Getting you in..." : "Login"}
              </Button>

              {loginError?.error && (
                <Alert variant="danger">
                  <b>{`Error status code: ${loginError?.status}`}</b>
                  <p>{loginError?.message}</p>
                </Alert>
              )}
            </Stack>
          </Col>
        </Row>
      </Form>

      <div>
        <h5>taufiqulislam.official@gmail.com</h5>
      </div>
      <div>
        <h5>ridu@gmail.com</h5>
      </div>
      <div>
        <h5>test.official@gmail.com</h5>
      </div>
    </>
  );
};

export default Login;
