const padraoNome = /^a-z/gi

const validarNome = (nome) => {
    console.log('nome: aa:  ', nome, ' - ' ,padraoNome.test(nome) || !nome)
    return padraoNome.test(nome)
}

export { validarNome }