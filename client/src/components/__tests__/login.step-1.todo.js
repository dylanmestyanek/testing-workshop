import React from "react";
import ReactDOM from "react-dom";
import Login from "../login";
import * as utilsMock from "../../utils/api";

jest.mock('../../utils/api', () => {
  return {
    api: {
      login: jest.fn(() => Promise.resolve())
    }
  }
});

// Basic unit test
test('calls onSubmit with the username and password when submitted', () => {
  // Arrange
  // create a fake object to hold the form field values (username and password)
  // create a jest.fn() for your submit handler
  // render the Login component to a div
  // TIP: const div = document.createElement('div')
  // 
  // get the field nodes
  // TIP: const inputs = div.querySelectorAll('input')
  // TIP: const form = div.querySelector('form')
  // fill in the field values
  //
  // Act
  // submit the form:
  // TIP: formNode.dispatchEvent(new window.Event('submit'))
  //
  // Assert
  // ensure your submit handler was called properly
  const div = document.createElement('div');
  const handleSubmit = jest.fn();
  ReactDOM.render(<Login onSubmit={handleSubmit} />, div);

  const form = div.querySelector('form');
  const { username, password } = form.elements;

  username.value = "henry";
  password.value = "henry";

  form.dispatchEvent(new window.Event('submit'));

  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith({
    username: "henry",
    password: "henry"
  });

})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=login.step-1&em=
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
