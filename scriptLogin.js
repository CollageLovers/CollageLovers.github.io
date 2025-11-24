function go() {
  if (
    document.form.password.value === "admin" &&
    document.form.login.value === "admin"
  ) {
    document.form.submit();
  } else {
    alert("Por favor ingrese nombre de usuario y contraseña correctos");
  }
}

//como lo ha hecho el profe, se insertaría desde la línea 5
// location.assign("main.html"); //<- Nombre de la ruta
//} else {
// aler("Porfavor ingrese, nombre de usuario y contraseña ...")
//}
