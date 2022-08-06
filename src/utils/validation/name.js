let reg = /^[a-zA-Zà-úÀ-Ú ]+$/

const validarNome = (nome) => {
    return reg.test(nome)
}

export { validarNome }