import { Review } from "../models/review.model"

export const fakeId = "632130d41840c49bf7b1c7e9"
export const fakeReviewData: Review[] = [
    {
        tituloResenha: "resenha teste 1",
        resenha: ["kladjsflajkf","lkjfeioj"],
        dataCriacao: new Date,
        dataEdicao: new Date,
        notaObra: 7,
    },
    {
        tituloResenha: "resenha teste 2",
        resenha: ["kladjsflajdaf d","lkjfe11141414aaioj"],
        dataCriacao: new Date,
        dataEdicao: new Date,
        notaObra: 4,
    },
    {
        tituloResenha: "resenha teste 3",
        resenha: ["kladjsflajfdafda f kf","lkjfei151560 oj"],
        dataCriacao: new Date,
        dataEdicao: new Date,
        notaObra: 1,
    },
    {
        tituloResenha: "resenha teste 4",
        resenha: ["kladjsflfagdfii8ajkf","lkjfe4891601585ioj"],
        dataCriacao: new Date,
        dataEdicao: new Date,
        notaObra: 9,
    }
]
export const updatedReview: Review = {
    tituloResenha: "resenha teste 4",
    resenha: ["kladjsflfagdfii8ajkfvcadsv v2","lkjfe489160158dfadsf vvdds"],
    dataCriacao: new Date,
    dataEdicao: new Date,
    notaObra: 9,
}