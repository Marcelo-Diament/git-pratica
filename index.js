/**
 * FUNÇÃO QUE MOSTRA O TIPO DE USUÁRIO
 */
 function ehAdministrador(usuario) {
  if(usuario.administrador === true) {
     console.log('O usuário é administrador')
  } else if (usuarios.administrador === false) {
     console.log('O usuário é comum')
  }
}
ehAdministrador('Administrador')