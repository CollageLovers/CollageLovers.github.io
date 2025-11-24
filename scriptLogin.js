function go() {
  if (
    document.form.password.value == "admin" &&
    document.form.login.value == "admin"
  ) {
    document.form.submit();
  } else {
    alert("Por favor ingrese nombre de usuario y contraseña correctos");
  }
}
