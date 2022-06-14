import {sumar,getLevel} from "./app";

describe(  "Functions Randoms", () => {

        test( 'debe sumar [10] y [20] y devolver [] con la funcion sumar', () => {
            //AA

            //ARRANQUE
            const primerValor = 10
            const segundoValor = 20
            const resultExpets = 30
            let result: number


            //ACT

            result = sumar(primerValor,segundoValor)

            //ASSERT

            expect(
                result
            ).toBe(resultExpets)
        })

        test("debe devolver [Junior]", () => {
            const resultExcepd = "Junior"
            const level = 30
            let result: string

            result = getLevel(level)

            expect(
                result
            ).toBe(resultExcepd)
        })
})