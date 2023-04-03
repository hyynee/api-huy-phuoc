let username = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-pass");
let phone = document.querySelector("#phone");
let form = document.querySelector("form");

function showError(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.add("error");
  small.innerText = message;
}
function showSuccess(input) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.remove("error");
  small.innerText = "";
}

function checkEmptyError(listInput) {
  let isEmptyError = false;
  listInput.forEach((input) => {
    input.value = input.value.trim();
    if (!input.value) {
      isEmptyError = true;
      showError(input, "Không được để trống");
    } else {
      showSuccess(input);
    }
  });

  return isEmptyError;
}

function checkEmailError(input) {
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  input.value = input.value.trim();

  let isEmailError = !regexEmail.test(input.value);
  if (regexEmail.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Email Invalid");
  }
  return isEmailError;
}

function checkLengthError(input, min, max) {
  input.value = input.value.trim();

  if (input.value.length < min) {
    showError(input, `Phải có ít nhất ${min} ký tự`);
    return true;
  }
  if (input.value.length > max) {
    showError(input, `Không được vượt quá ${max} ký tự`);
    return true;
  }
  return false;
}

function checkMathchPasswordError(passWordInput, cfPasswordInput) {
  if (passWordInput.value !== cfPasswordInput.value) {
    showError(cfPasswordInput, "Mật khẩu không trùng khớp");
    return true;
  }
  return false;
}
function checkNameError(input) {
  const regexName =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]*[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

  input.value = input.value.trim();
  let isNameError = !regexName.test(input.value);
  if (regexName.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Name Invalid");
  }
  return isNameError;
}
function checkPhoneError(input) {
  const regexPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
  input.value = input.value.trim();

  let isPhoneError = !regexPhone.test(input.value);
  if (regexPhone.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Phone Invalid");
  }
  return isPhoneError;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isEmptyError = checkEmptyError([
    username,
    email,
    password,
    confirmPassword,
    phone,
  ]);

  let isEmailError = checkEmailError(email);
  let isNameError = checkNameError (username)
  && checkLengthError(username,3,20);
  let isPasswordLengthError = checkLengthError(password, 6, 12);
  let isCheckMathError = checkMathchPasswordError(password, confirmPassword);
  let isCheckPhoneError = checkPhoneError & checkLengthError(phone,10,10);

  //   if(isEmptyError || isEmailError || isNameLengthError || isPasswordLengthError || isCheckMathError || isCheckPhoneError) {
  //     // do nothing
  //   } else {
  //     // logic call api....
  //   }
});


