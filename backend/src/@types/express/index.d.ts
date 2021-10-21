declare namespace Express { // seleciona a dependência
  export interface Request { // seleciona o local a ser salvo
    userId: string; // define a tipagem
  }
}

// configuração necessária para modificar a tipagem de uma dependência
