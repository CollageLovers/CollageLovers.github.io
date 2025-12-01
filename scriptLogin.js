function go() {
  const box = document.querySelector(".box");
  const form = document.querySelector(".box form");
  const titulo = form.querySelector("h2"); // seleccionamos el <h2>
  if (
    document.form.password.value === "admin" &&
    document.form.login.value === "admin"
  ) {
    document.form.submit();
  } else {
    box.style.backgroundColor = "white";
    form.style.background = "#ff0f0fff";
    titulo.textContent = "Credenciales Incorrectas";
  }
}

//como lo ha hecho el profe, se insertaría desde la línea 5
// location.assign("main.html"); //<- Nombre de la ruta
//} else {
// aler("Porfavor ingrese, nombre de usuario y contraseña ...")
//}
