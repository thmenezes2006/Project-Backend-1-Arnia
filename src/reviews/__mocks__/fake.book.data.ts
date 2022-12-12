import { Book } from "../models/book.model"

export const fakeId = "632130d41623c49bf7b1c7e9";
export const fakeBookData: Book[] = [
    {
        titulo: "Livro 1",
        dataLancamento: "19/10/2021",
        idioma: ["portugues","ingles"],
        status: true,
        resenha: "blablabla",
        autor: "autor 1",
    },
    {
        titulo: "Livro 21",
        dataLancamento: "20/07/1921",
        idioma: ["portugues","espanhol"],
        status: true,
        resenha: "uhasuhasuha",
        autor: "autor 24",
    },
    {
        titulo: "Livro 35",
        dataLancamento: "31/03/1982",
        idioma: ["ingles","espanhol"],
        status: false,
        resenha: "teste",
        autor: "autor 15",
    },
    {
        titulo: "Livro 85",
        dataLancamento: "01/01/2004",
        idioma: ["italiano"],
        status: true,
        resenha: "blablabla",
        autor: "autor 19",
    }
]
export const updatedBook: Book = {
    titulo: "Livro 855",
    dataLancamento: "01/01/1994",
    idioma: ["italiano"],
    status: true,
    resenha: "blábláblá",
    autor: "autor 51",
}