import {expect,test,describe} from 'vitest'
/**
 * Crie uma função que recebe um vetor de livros e um título de livro como argumentos e retorna o objeto do livro correspondente do vetor.
 * Se o vetor de livros não tiver um livro com o título especificado, a função deve retornar undefined.
 * @param {Livro[]} livros
 * @param {string} titulo
 * @returns {Livro|undefined}
 * 
 * @example
 * const livros: Livro[] = [
 * { titulo: "Harry Potter", autor: "J.K. Rowling", ano: 1997 },
 * { titulo: "Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954 },
 * { titulo: "As Crônicas de Nárnia", autor: "C.S. Lewis", ano: 1950 },
 * { titulo: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605 },
 * { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1943 }
 * ];
 * const livro = encontrarLivro(livros, "Dom Quixote");
 * console.log(livro); // { titulo: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605 }
 */

//Início do seu código
function encontrarLivro(livro:Livro[],titulo:string):{}{
    const a = livro.filter((nome)=>nome.titulo == titulo)
    return a[0]
}
//Fim do seu código

interface Livro {
    titulo: string;
    autor: string;
    ano: number;
  }
  describe("Questão 1", () => {
  test("Deve retornar o livro com o título especificado", () => {
    const livros: Livro[] = [
      { titulo: "Harry Potter", autor: "J.K. Rowling", ano: 1997 },
      { titulo: "Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954 },
      { titulo: "As Crônicas de Nárnia", autor: "C.S. Lewis", ano: 1950 },
      { titulo: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605 },
      { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1943 }
    ];
    const livro = encontrarLivro(livros, "Dom Quixote");
    expect(livro).toEqual({ titulo: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605 });
  });
  test("Deve retornar um vetor vazio quando não há livro com o título especificado", () => {
    const livros: Livro[] = [
      { titulo: "Harry Potter", autor: "J.K. Rowling", ano: 1997 },
      { titulo: "Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954 },
      { titulo: "As Crônicas de Nárnia", autor: "C.S. Lewis", ano: 1950 },
      { titulo: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605 },
      { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1943 }
    ];
    const livro = encontrarLivro(livros, "O Hobbit");
    expect(livro).toEqual(undefined);
  });
  
  test("Deve retornar o livro buscado quando o livro esta no  vetor", () => {
    const livros: Livro[] = [
      { titulo: "Harry Potter", autor: "J.K. Rowling", ano: 1997 },
      { titulo: "Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954 },
      { titulo: "As Crônicas de Nárnia", autor: "C.S. Lewis", ano: 1950 }
    ];
    const livro = encontrarLivro(livros, "As Crônicas de Nárnia");
    expect(livro).toEqual({ titulo: "As Crônicas de Nárnia", autor: "C.S. Lewis", ano: 1950 });
  });
  });
  //crie tests para uma função que receba uma lista de pessoas com as propriedades nome, idade e sexo e retorne um objeto contendo a média de idades das pessoas de cada sexo.

/**
 * @param {Pessoa2[]} pessoas
 * @returns {Retorno}
 * @example
 * const pessoas: Pessoa[] = [
 * { nome: "João", idade: 25, sexo: "M" },
 * { nome: "Maria", idade: 18, sexo: "F" },
 * { nome: "Pedro", idade: 32, sexo: "M" },
 * { nome: "Ana", idade: 21, sexo: "F" }
 * ];
 * const mediaIdades:Retorno = calcularMediaIdadePorSexo(pessoas);
 * console.log(mediaIdades); // { M: 28.5, F: 19.5 }
 */

//Inicio do seu código
function calcularMediaIdadePorSexo(pessoas:Pessoa2[]):Retorno{
    const homens = pessoas.filter((pessoa)=>pessoa.sexo==="M")
    const mulheres = pessoas.filter((pessoa)=>pessoa.sexo==="F")
    let somaIdadeHomens = 0
    for(let homem of homens){
        somaIdadeHomens += homem.idade
    }
    let somaIdadeMulheres = 0
    for(let mulher of mulheres){
        somaIdadeMulheres += mulher.idade
    }
    const mediaHomens = somaIdadeHomens/homens.length
    const mediaMulheres = somaIdadeMulheres/mulheres.length
    return {'M':mediaHomens,"F":mediaMulheres}
}

//Fim do seu código

interface Pessoa2 {
    nome: string;
    idade: number;
    sexo: "M" | "F";
}
interface Retorno {
    M: number;
    F: number;
}

test("Deve retornar a média de idades das pessoas de cada sexo", () => {
    const pessoas: Pessoa2[] = [
      { nome: "João", idade: 25, sexo: "M" },
      { nome: "Maria", idade: 18, sexo: "F" },
      { nome: "Pedro", idade: 32, sexo: "M" },
      { nome: "Ana", idade: 21, sexo: "F" }
    ];
    const mediaIdades = calcularMediaIdadePorSexo(pessoas);
    expect(mediaIdades).toEqual({ M: 28.5, F: 19.5 });
});
test("Deve retornar a média de idades das pessoas de cada sexo", () => {
    const pessoas: Pessoa2[] = [
      { nome: "João", idade: 14, sexo: "M" },
      { nome: "Maria", idade: 18, sexo: "F" },
      { nome: "Pedro", idade: 32, sexo: "M" },
      { nome: "Ana", idade: 21, sexo: "F" }
    ];
    let retornoFuncao:Retorno = {M: 23, F: 19.5}; 
    const mediaIdades = calcularMediaIdadePorSexo(pessoas);
    expect(mediaIdades).toEqual(retornoFuncao);
});
/** Exercício 3
 * 
 * O professor TERE precisa lançar as notas dos estudantes da nota da matéria de frameworks I. 
 * Para ajudar o professor você deve criar uma função que receba um vetor de objetos do tipo Estudante contendo os dados de:
 *  id, nome, notaProva e notaTrabalho e retorne um vetor com a média do semestre de cada estudante.
 * Lembrando que a nota de prova tem peso 6 e a nota de trabalho tem peso 4.
 * 
 * Exemplo de formula para calcular a média: (notaProva * 6 + notaTrabalho * 4) / 10
 * 
 * @param estudantes - Vetor de objetos do tipo Estudante
 * @returns - Vetor com média do semestre de cada estudante
 * 
 * Exemplo:
 * const estudantes = [
 * { id: 1, nome: 'João', notaProva: 10, notaTrabalho: 10 },
 * { id: 2, nome: 'Maria', notaProva: 5, notaTrabalho: 5 },
 * { id: 3, nome: 'José', notaProva: 7, notaTrabalho: 7 }
 * ]
 * const resultado = calcularMedia(estudantes)
 * resultado deve ser [10, 5, 7]
 * 
 * Obs: Não use qualquer formula de arredondamento, o resultado deve ser exatamente como o exemplo acima
 */
interface Estudante {
    id: number,
    nome: string,
    notaProva: number,
    notaTrabalho: number,
  }
  
  /*Coloque seu código aqui*/
  function calcularMedia(estudantes:Estudante[]):number[]{
    let resultado:number[] = []
    for(let i = 0;i<estudantes.length;i++){
        let media:number = (estudantes[i].notaProva*6+estudantes[i].notaTrabalho*4)/10
        resultado.push(media)
    }
    return resultado
  }
  /*fim do seu código*/
  
  test('Deve calcular a média dos estudantes passados', () => {
    const estudantes = [
        { id: 1, nome: 'João', notaProva: 10, notaTrabalho: 10 },
        { id: 2, nome: 'Maria', notaProva: 5, notaTrabalho: 5 },
        { id: 3, nome: 'José', notaProva: 7, notaTrabalho: 7 }
    ]
    const resultado = calcularMedia(estudantes)
    expect(resultado).toEqual([10,5,7])
  })
  test('Deve calcular a média dos estudantes passados', () => {
    const estudantes = [
        { id: 1, nome: 'João', notaProva: 8, notaTrabalho: 6 },
        { id: 2, nome: 'Maria', notaProva: 7.5, notaTrabalho: 4 },
        { id: 3, nome: 'José', notaProva: 3, notaTrabalho: 9 }
    ]
    const resultado = calcularMedia(estudantes)
    expect(resultado).toEqual([7.2,6.1,5.4])
  });
  test('Deve retornar vazio quando o vetor passado para a função for vazio', () => {
    const estudantes = []
    const resultado = calcularMedia(estudantes)
    expect(resultado).toEqual([])
  });
  /**
 * Deve Retorna todos os números divisíveis por 8 dentro de um intervalo definido pelos parâmetros max e min, em ordem decrescente que forem menores que 40.
 * @param max O valor máximo do intervalo.
 * @param min O valor mínimo do intervalo.
 * @returns Um array com todos os números divisíveis por 8 dentro do intervalo, em ordem decrescente que forem menores que 40, ou um array vazio se não houver nenhum número divisível por 8.
 */

//Início do seu código
function divisiveisPorOitoDecrecente(max:number,min:number):number[]{
    let resultado:number[] = []
    for(let i = max;i>=min;i--){
        if(i%8 == 0 && i < 40){
            resultado.push(i)
            
        }
    }
    return resultado
}
//Fim do seu código

test('Deve retornar os números divisíveis por 8 entre 20 e 0 em ordem decrescente que forem menores que 40', () => {
    expect(divisiveisPorOitoDecrecente(20, 0)).toEqual([16, 8, 0]);
  });
  
  test('Deve retornar os números divisíveis por 8 entre 30 e 0 em ordem decrescente que forem menores que 40', () => {
    expect(divisiveisPorOitoDecrecente(48, 1)).toEqual([32,24, 16, 8]);
  });
  test('Deve retornar um array vazio quando não há números divisíveis por 8', () => {
    expect(divisiveisPorOitoDecrecente(3, 1)).toEqual([]);
  });
  /**
 * Nome da função - resolveEquacaoProvaA
 * Crie uma função que retorne os pontos em Y a partir de um vetor dos pontos em X da equação y = x^3 + 2x^2 + 6x +5/x^2 + 2x + 1
 * @param {number[]} vetor Vetor de pontos em X
 * @returns {number[]} Retorna um array com os pontos em Y
 * @example
 */

//Início do seu código
function resolveEquacaoProvaA(vetor:number[]):number[]{
    let array:number[] = []
    let y = 0
    for(let i = 0;i<vetor.length;i++){
        y = (((vetor[i]*vetor[i]*vetor[i])+(2*(vetor[i]*vetor[i]))+(6*vetor[i]))+5)/((vetor[i]*vetor[i])+(2*vetor[i])+1)
        array.push(y)
    }
    return array
}
//Fim do seu código

test('resolveEquacaoProvaA', () => {
    expect(resolveEquacaoProvaA([0, 1, 3])).toEqual([ 5, 3.5, 4.25])
  })
  test('resolveEquacaoProvaA quando números negativos', () => {
    expect(resolveEquacaoProvaA([-5, -2, -3])).toEqual([-6.25, -7, -5.5])
  })
  /**
 * Nome da função - resolveEquacaoProvaB
 * Crie uma função que retorne os pontos em Y a partir de um vetor dos pontos em X da equação y = x^3 + 2x^2 + 6x +5/x^3 + 2x^2 + 1
 * @param {number[]} vetor Vetor de pontos em X
 * @returns {number[]} Retorna um array com os pontos em Y
 * @example
 */

//Início do seu código
function resolveEquacaoProvaB(vetor:number[]):number[]{
    let array:number[] = []
    let y:number = 0
    for(let i = 0;i<vetor.length;i++){
        y = (((vetor[i]*vetor[i]*vetor[i])+(2*(vetor[i]*vetor[i]))+(6*vetor[i]))+5)/((vetor[i]*vetor[i]*vetor[i])+(2*(vetor[i]*vetor[i]))+1)
        array.push(y)
    }
    return array
}
//Fim do seu código

test('resolveEquacaoProvaB', () => {
    expect(resolveEquacaoProvaB([0, 1, -2])).toEqual([ 5, 3.5, -7])
  })
  test('resolveEquacaoProvaB quando números negativos', () => {
    expect(resolveEquacaoProvaB([-2, -3])).toEqual([-7, 2.75])
  })
  /**
 * Crie uma função que recebe um vetor de livros e retorne os livros de uma determinada categoria.
 * Se o vetor de livros não tiver um livro da categoria especificado, a função deve retornar um vetor vazio.
 * @param {Livro[]} livros
 * @param {string} categoria
 * @returns {Livro[]}
 * 
 * @example
 * const livros: LivroCategoria[] = [
 * { titulo: "Harry Potter", autor: "J.K. Rowling", ano: 1997, categoria: "fantasia" },
 * { titulo: "Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954, categoria: "fantasia" },
 * { titulo: "As Crônicas de Nárnia", autor: "C.S. Lewis", ano: 1950, categoria: "fantasia" },
 * { titulo: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605, categoria: "aventura" },
 * { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1943, categoria: "aventura" }
 * ];
 * const livrosDeFantasia = encontrarLivrosPorCategoria(livros, "fantasia");
 * console.log(livrosDeFantasia); // [{ titulo: "Harry Potter", autor: "J.K. Rowling", ano: 1997, categoria: "fantasia" }, { titulo: "Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954, categoria: "fantasia" }, { titulo: "As Crônicas de Nárnia", autor: "C.S. Lewis", ano: 1950, categoria: "fantasia" }]
 */

//Início do seu código
function encontrarLivrosPorCategoria(livro:LivroCategoria[],categoria:string):{}{
    const a = livro.filter((nome)=>nome.categoria == categoria)
    return a
}
//Fim do seu código

interface LivroCategoria {
    titulo: string;
    autor: string;
    ano: number;
    categoria: string;
  }
  test("Deve retornar os livros de uma determinada categoria", () => {
    const livros: LivroCategoria[] = [
      { titulo: "Harry Potter", autor: "J.K. Rowling", ano: 1997, categoria: "fantasia" },
      { titulo: "Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954, categoria: "fantasia" },
      { titulo: "As Crônicas de Nárnia", autor: "C.S. Lewis", ano: 1950, categoria: "fantasia" },
      { titulo: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605, categoria: "aventura" },
      { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1943, categoria: "aventura" }
    ];
    const livrosDeFantasia = encontrarLivrosPorCategoria(livros, "fantasia");
    expect(livrosDeFantasia).toEqual([
      { titulo: "Harry Potter", autor: "J.K. Rowling", ano: 1997, categoria: "fantasia" }, 
      { titulo: "Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954, categoria: "fantasia" }, 
      { titulo: "As Crônicas de Nárnia", autor: "C.S. Lewis", ano: 1950, categoria: "fantasia" }
    ])
  });
  test("Deve retornar um vetor vazio quando não há livros da categoria especificada", () => {
    const livros: LivroCategoria[] = [
      { titulo: "Harry Potter", autor: "J.K. Rowling", ano: 1997, categoria: "fantasia" },
      { titulo: "Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954, categoria: "fantasia" },
      { titulo: "As Crônicas de Nárnia", autor: "C.S. Lewis", ano: 1950, categoria: "fantasia" },
      { titulo: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605, categoria: "aventura" },
      { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1943, categoria: "aventura" }
    ];
    const livrosDeTerror = encontrarLivrosPorCategoria(livros, "terror");
    expect(livrosDeTerror).toEqual([]);
  });
  test("Deve retornar o livro filtrado quando estiver no fim do vetor", () => {
    const livros: LivroCategoria[] = [
      { titulo: "Harry Potter", autor: "J.K. Rowling", ano: 1997, categoria: "fantasia" },
      { titulo: "Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954, categoria: "fantasia" },
      { titulo: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605, categoria: "aventura" },
      { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1943, categoria: "aventura" }
    ];
    const livrosDeAventura = encontrarLivrosPorCategoria(livros, "aventura");
    expect(livrosDeAventura).toEqual([
      { titulo: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605, categoria: "aventura" },
      { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1943, categoria: "aventura" }
    ]);
  });
  /**
 * Aumenta o preço de cada item em um vetor de compras de supermercado pelo fator fornecido.
 * @param {Array} items - O vetor de itens a serem aumentados.
 * @param {number} factor - O fator de aumento a ser aplicado a cada item.
 * @returns {Array} - O vetor de itens com os novos preços.
 */

// Início do seu código
function aumentarPreco(items:itemMercado[],factor:number):number[]{
    let resultado:number[] = []
    for(let i = 0;i<items.length;i++){
        resultado[i]=items[i].preco*factor
    }
    return resultado
}
interface itemMercado{
    nome:string,
    preco:number,
}
// Fim do seu código

test('Deve retornar um vetor com os novos preços corretos', () => {
    const compras = [
      { nome: "arroz", preco: 10.0 },
      { nome: "feijão", preco: 8.0 },
      { nome: "macarrão", preco: 5.0 }
    ];
    const fator = 1.2;
    const novosPrecos = aumentarPreco(compras, fator);
    expect(novosPrecos).toEqual([12.0, 9.6, 6.0]);
  });
  
  test('aumentarPreco retorna um vetor vazio se o vetor de itens é vazio', () => {
    const compras = [];
    const fator = 1.2;
    const novosPrecos = aumentarPreco(compras, fator);
    expect(novosPrecos).toEqual([]);
  });
  
  test('aumentarPreco não altera o vetor de itens original', () => {
    const compras = [
      { nome: "arroz", preco: 10.0 },
      { nome: "feijão", preco: 8.0 },
      { nome: "macarrão", preco: 5.0 }
    ];
    const fator = 1.2;
    aumentarPreco(compras, fator);
    expect(compras).toEqual([
      { nome: "arroz", preco: 10.0 },
      { nome: "feijão", preco: 8.0 },
      { nome: "macarrão", preco: 5.0 }
    ]);
  });
  /**
 * Deve Retornar todos os números divisíveis por 3 dentro de um intervalo definido pelos parâmetros max e min, em ordem decrescente que são maiores que 10.
 * @param max O valor máximo do intervalo.
 * @param min O valor mínimo do intervalo.
 * @returns Um array com todos os números divisíveis por 3 dentro do intervalo, em ordem decrescente, ou um array vazio se não houver nenhum número divisível por 3.
 */

//Início do seu código
function divisiveisPorTresDecrecente(max:number,min:number):number[]{
    let resultado:number[] = []
    for(let i = max;i>=min;i--){
        if(i%3 == 0 && i > 10){
            resultado.push(i)
            
        }
    }
    return resultado
}
//Fim do seu código
test('Deve retornar os números divisíveis por 3 entre 20 e 0 em ordem decrescente que forem maiores que 10', () => {
    expect(divisiveisPorTresDecrecente(20, 1)).toEqual([18,15,12]);
  });
  
  test('Deve retornar os números divisíveis por 3 entre 30 e 0 em ordem decrescente que forem maiores que 10', () => {
    expect(divisiveisPorTresDecrecente(36, 1)).toEqual([36,33,30,27,24,21,18,15,12]);
  });
  test('Deve retornar um array vazio quando não há números divisíveis por 3', () => {
    expect(divisiveisPorTresDecrecente(2, 1)).toEqual([]);
  });