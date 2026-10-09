import {z} from 'zod';

export const colaboradorSchema = z.object({
    nome: z.string()
    .min(3, {message: 'O nome deve ter no mínimo 3 letras!'}),
    email: z.email({message: 'O email deve ser válido!'}),
    idade: z.number({message: 'A idade deve ser um número!'})
    .min(18, {message: 'A idade deve ser maior ou igual a 18 anos!'})
    .max(65, {message: 'A idade deve ser menor ou igual a 65 anos!'}),
    departamento: z.enum(['TI', 'RH', 'Comercial', 'Financeiro'], {
        error: () => (
            {message: 'O departamento deve ser um dos seguintes: TI, RH, Comercial ou Financeiro!'}),
        },
    ),
});
export type Colaborador = z.infer<typeof colaboradorSchema>;