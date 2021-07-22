/**
 * FUNÇÃO QUE MOSTRA O TIPO DE USUÁRIO
 */

function ehAdministrador(usuario) {
  console.log(usuario.administrador
    ? 'O usuário é administrador'
    : 'O usuário é comum')
}
ehAdministrador({ administrador: true });