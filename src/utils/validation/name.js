let reg = /^[a-zA-Z ]+$/

const validarNome = (nome) => {
    return reg.test(nome)
}

export { validarNome }