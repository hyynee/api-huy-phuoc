document.getElementById("btn-submit").onclick = function () {
  var signup = new Product();
  signup.name = document.getElementById("name").value;
  signup.email = document.getElementById("email").value;
  signup.password = document.getElementById("password").value;
  signup.phone = document.getElementById("phone").value;
  var tagSelect = document.getElementById("gender");
  var viTriTheChon = tagSelect.selectedIndex;
  var gender = tagSelect.options[viTriTheChon].innerHTML;
  signup.gender = gender;
  console.log(signup);
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "POST",
    data: {
      email: signup.email,
      password: signup.password,
      name: signup.name,
      gender: true,
      phone: signup.phone,
    },
  });
  promise.then(function (res) {
    console.log(res.data.content);
    console.log("Đăng ký thành công!");
    resetForm(signup);
  });
  promise.catch(function (err) {
    console.log(err.response.data.content);
    console.log("Đăng ký thất bại!");
  });
};
function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("confirm-pass").value = "";
}
