import "./App.css";
import * as Yup from "yup";
import styled from "styled-components";
import { Input, Button, Space, Card, Checkbox, Radio, Divider } from "antd";
import { Formik, Form, Field } from "formik";

const Error = styled.div`
  color: indianred;
  text-align: start;
`;
const Elem = styled.div`
  height: 60px;
`;

function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{
          email: "",
          password: "",
          languages: [],
          jobType: "full-time",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Incorrect email address")
            .required("Required"),
          password: Yup.string().required("Required"),
        })}
        onSubmit={(data) => {
          console.log("Submit", data);
        }}
      >
        {({ errors, touched, handleSubmit }) => (
          <Form>
            <Space direction="vertical">
              <Card title="Form" style={{ width: 300 }}>
                <Elem>
                  <Field name="email" placeholder="Enter email" as={Input} />
                  <Error>{touched.email && errors.email}</Error>
                </Elem>
                <Elem>
                  <Field
                    name="password"
                    as={Input}
                    placeholder="Enter password"
                  />
                  <Error>{touched.password && errors.password}</Error>
                </Elem>
                <Divider />
                <div>Languages</div>
                <Space>
                  <label>
                    <Field
                      name="languages"
                      value="JS"
                      type="checkbox"
                      as={Checkbox}
                    />
                    JS
                  </label>
                  <label>
                    <Field
                      name="languages"
                      value="Java"
                      type="checkbox"
                      as={Checkbox}
                    />
                    Java
                  </label>
                  <label>
                    <Field
                      name="languages"
                      value="Node JS"
                      type="checkbox"
                      as={Checkbox}
                    />
                    Node JS
                  </label>
                  <label>
                    <Field
                      name="languages"
                      value="C++"
                      type="checkbox"
                      as={Checkbox}
                    />
                    C++
                  </label>
                </Space>
                <Divider />
                <div>Job Type:</div>
                <Space direction="vertical">
                  <label>
                    <Field
                      name="jobType"
                      value="full-time"
                      type="radio"
                      as={Radio}
                    />
                    Full time employee
                  </label>
                  <label>
                    <Field
                      name="jobType"
                      value="part-time"
                      type="radio"
                      as={Radio}
                    />
                    Part time employee
                  </label>
                </Space>
                <Divider />
                <Button onClick={handleSubmit} type="primary">
                  Submit
                </Button>
              </Card>
            </Space>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
