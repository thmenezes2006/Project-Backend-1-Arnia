export type PromiseError = {
    promiseError: {
      message: string;
      error: unknown;
    };
  };
  
  export function promiseError(error: unknown): PromiseError {
    return {
      promiseError: {
        message: "Não foi possivel se conectar ao Banco de dados",
        error: error,
      },
    };
  }
  
  export type InvalidIdError = {
    invalidIdError: {
      message: string;
      id: string;
    };
  };
  
  export function invalidIdError(id: string): InvalidIdError {
    return {
      invalidIdError: {
        message: "Requisição de Id inválida, por favor envie um ObjectId",
        id: id,
      },
    };
  }
  
  export type CustomErrors = PromiseError | InvalidIdError;
  