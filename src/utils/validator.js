export function validateEmail(email) {
  if (!email) {
    return "Please enter email!";
  }

  let validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  if (!validateEmail) {
    // console.log("Invalid Email");
    return "Invalid Email";
  }

  return "";
}

export function validatePassword(password) {
  if (!password) {
    return "Please enter password!";
  }

  let validatePassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!validatePassword) {
    // console.log("Invalid Password");
    return "Invalid Password";
  }

  return "";
}
