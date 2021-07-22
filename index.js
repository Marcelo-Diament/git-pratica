/**
 * FUNÇÃO QUE MOSTRA O TIPO DE USUÁRIO
 */
function ehAdministrador(usuario) {
  if (usuario.administrador) {
    console.log("O usuário é administrador");
  } else {
    console.log("O usuário é comum");
  }
}
ehAdministrador({ administrador: true });
