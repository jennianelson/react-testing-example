import React from "react";
// import { generate } from 'til-client-test-utils'
import { render } from "react-testing-library";
import ReactDOM from "react-dom";
import Login from "../components/login";

//test without abstraction
test("calls onSubmit with the username and password when submitted", () => {
  const handleSubmit = jest.fn();
  const container = document.createElement("div");
  ReactDOM.render(<Login onSubmit={handleSubmit} />, container);

  const form = container.querySelector("form");
  const { username, password } = form.elements;
  username.value = "smalls";
  password.value = "password";

  form.dispatchEvent(new window.Event("submit"));

  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith({
    username: username.value,
    password: password.value
  });
});
// test with abstraction -- what is this generate fn()?
// test('calls onSubmit witht he username and password when submitted', () => {
//   // ARRANGE
//   const fakeUser = generate.loginForm()
//   const handleSubmit = jest.fn()
//   const { getByLabelText, getByText } = renderintoDocument(
//     <Login onSubmit={handleSubmit} />,
//   )
//   const usernameNode = getByLabelText('username')
//   const passwordNode = getByLabelText('password')

//   // ACT
//   usernameNode.value = fakeUser.username
//   passwordNode.value = fakeUser.password
//   getByText('submit').click()

//   // ASSERT
//   expect(handleSubmit).toHaveBeenCalledTimes(1)
//   expect(handleSubmit).toHaveBeenCalledWith(fakeUser)
// })

test("snapshot", () => {
  const { container } = render(<Login onSubmit={() => {}} />);
  expect(container.firstChild).toMatchSnapshot();
});
