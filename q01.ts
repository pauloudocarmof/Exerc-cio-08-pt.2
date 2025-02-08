
class AplicacaoError extends Error {
    constructor(message: string = "Erro na aplicação.") {
        super(message);
        this.name = "AplicacaoError";
    }
}


class ContaInexistenteError extends AplicacaoError {
    constructor(message: string = "Conta não encontrada.") {
        super(message);
        this.name = "ContaInexistenteError";
    }
}


class ClienteNaoEncontradoError extends AplicacaoError {
    constructor(message: string = "Cliente não encontrado.") {
        super(message);
        this.name = "ClienteNaoEncontradoError";
    }
}


class SaldoInsuficienteError extends AplicacaoError {
    constructor(message: string = "Saldo insuficiente.") {
        super(message);
        this.name = "SaldoInsuficienteError";
    }
}


try {
    throw new ContaInexistenteError();
} catch (error) {
    if (error instanceof AplicacaoError) {
        console.error(`${error.name}: ${error.message}`);
    } else {
        console.error("Erro desconhecido:", error);
    }
}
