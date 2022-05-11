describe('testes 1', () =>{
const sum = require('./script.js')
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
