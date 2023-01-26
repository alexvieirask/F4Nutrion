import * as yup from "yup"

const NOTE_SCHEMA = yup.object({
    title: yup.string().required().min(4).max(35).trim(),
    content: yup.string().required().min(4).max(300).trim(),
})

const CLIENT_SCHEMA = yup.object({
    name: yup.string().required().trim(),
    cpf: yup.string().notRequired().trim().nullable(true),
    birth: yup.string().required().length(3),
    cell: yup.string().notRequired().trim().nullable(true),
    telephone: yup.string().notRequired().trim().nullable(true),
    email: yup.string().email().required().trim(),
    height: yup.number().required().min(1.2).max(3),
    weight: yup.number().required().min(20).max(200),
    objective: yup.string().required().trim(),
    gender: yup.object().required(),
    observation: yup.string().notRequired().trim().nullable(true),
    situation : yup.object().notRequired(),
})

export { NOTE_SCHEMA, CLIENT_SCHEMA }