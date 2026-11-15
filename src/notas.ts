export type Situacao = 'aprovado' | 'recuperação' | 'reprovado';

const MEDIA_APROVACAO = 7;
const MEDIA_RECUPERACAO = 5;

export function calcularMedia(nota1: number, nota2: number): number {
    for (const nota of [nota1, nota2]) {
        if (nota < 0 || nota > 10) {
            throw new RangeError(`Nota fora do intervalo de 0 a 10: ${nota}`)
        }
    }
    return (nota1 + nota2) / 2;
}

export function situacao(media: number): Situacao {
    if (media >= MEDIA_APROVACAO) {
        return 'aprovado';
    }
    if (media >= MEDIA_RECUPERACAO) {
        return 'recuperação';
    }
    return 'reprovado';
}