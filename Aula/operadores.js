/*
    + => Adição
    - => Subtração
    * => Multiplicação
    / => Divisão
    % => Módulo
    ** => Exponenciação
    ++ => Incremento
    -- => Decremento
*/

let x = 0, y = 1

x = x + y
x += y //Fazer a conta com o mesmo valor da variavel que recebe
x -= y
x *= y
x /= y
x %= y
x **= y // => x = x ** y

/* 
    == igualdade
    === valor e tipo igual
    != diferente
    !== valor ou tipo diferente
    > maior
    < menor
    >= maior igual
    <= menor igual
    ? Ternario
*/

if( 1 == '1'){
    console.log('Valido')
}else{
    console.log('Invalido')
}

if( 1 === '1'){
    console.log('Valido')
}else{
    console.log('Invalido')
}

1 === '1' ? console.log('válido') : console.log('Inválido') //Exemplo de ternario

/*
    && E Lógico
    || OU Lógico
    ! Negação
*/

1 === '1' || 1 == '1' ? console.log('válido') : console.log('Inválido')
1 === '1' && 1 == '1' ? console.log('válido') : console.log('Inválido')
!(1 === '1') && 1 == '1' ? console.log('válido') : console.log('Inválido')


