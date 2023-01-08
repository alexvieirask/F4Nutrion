import * as yup from "yup"

const NOTE_SCHEMA = yup.object({
    title: yup.string().required().min(4).max(35).trim(),
    content: yup.string().required().min(4).max(300).trim(),
})

export { NOTE_SCHEMA }