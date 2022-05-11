const {sum, myRemove, myFizzBuzz, encode, decode} = require('./script.js')
describe('testes 1', () =>{
    test ('se 4 e 5 retorna 9', () => {
        expect(sum(4,5)).toBe(9);
    })
    test ('se 0 e 0 é 0', () => {
        expect(sum(0,0)).toBe(0);
    })
    test ('se tem erro quando aparece uma string', () =>{
        expect(() => sum(4, "5")).toThrowError();
    })
    test ('se a mensagem esta correta', () =>{
        expect(() => sum(4, "5")).toThrowError('parameters must be numbers')
    })
})
describe('testes 2', () =>{
    test ('se retorna o valor esperado', () =>{
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    })
})
describe ('Testes 3', () =>{
    test ('Verifica se o retorno é o esperado', () =>{
        expect(myFizzBuzz(15)).toBe('fizzbuzz')
        expect(myFizzBuzz(6)).toBe('fizz')
        expect(myFizzBuzz(10)).toBe('buzz')
        expect(myFizzBuzz(7)).toBe(7)
        expect(myFizzBuzz('q')).toBe(false)
    })
})
describe ('Testes 4', () =>{
    test ('testa se encode e decode são funções', () =>{
        expect(encode && decode).toBeDefined()
    })
    test ('testa se encode converte corretamente', () =>{
        expect(encode('a', 'e', 'i', 'o', 'u')).toBe('1','2','3','4','5')
    })
    test ('testa se decode converte corretamente', () =>{
        expect(encode('a', 'e', 'i', 'o', 'u')).toBe('1','2','3','4','5')
    })
    test ('testa se as outras letras são convertidas', () =>{
        expect(encode('z')).toBe('z')
    })
    test('testa se retorna o mesmo numero de caractere', () =>{
        expect(encode('aeiou')).toHaveLength(5);
    })
})