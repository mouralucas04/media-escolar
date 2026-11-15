import { describe, expect, it } from "vitest";
import { calcularMedia, situacao } from '../src/notas';

describe('calcularMedia', () => {
    it('média de 8 e 6 é 7', () => {
        expect(calcularMedia(8, 6)).toBe(7);
    });

    it('média pode ter casa decimal: 7 e 8 dá 7,5', () => {
        expect(calcularMedia(7, 8)).toBe(7.5);
    })
});

describe('situacao', () => {
    it('média 7 exata aprova', () => {
        expect(situacao(7)).toBe('aprovado');
    });

    it('média 6,9 fica de recuperação', () => {
        expect(situacao(6.9)).toBe('recuperação');
    });

    it('média 5 exata fica de recuperação', () => {
        expect(situacao(5)).toBe('recuperação');
    });

    it('média 4,9 reprova', () => {
        expect(situacao(4.9)).toBe('reprovado');
    });

    it('rejeita nota fora do intervalo', () => {
        expect(() => calcularMedia(11, 5)).toThrow(RangeError)
    })
});