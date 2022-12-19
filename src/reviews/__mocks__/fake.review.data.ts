import { Review } from "../models/review.model"

export const fakeId = "632130d41840c49bf7b1c7e9"
export const fakeReviewData: Review[] = [
    {
        tituloResenha: "resenha teste 1",
        resenha: ["kladjsflajkf","lkjfeioj"],
        createdAt: new Date,
        updatedAt: new Date,
        notaObra: 3,
    },
    {
        tituloResenha: "resenha teste 2",
        resenha: ["kladjsflajdaf d","lkjfe11141414aaioj"],
        createdAt: new Date,
        updatedAt: new Date,
        notaObra: 4,
    },
    {
        tituloResenha: "resenha teste 3",
        resenha: ["kladjsflajfdafda f kf","lkjfei151560 oj"],
        createdAt: new Date,
        updatedAt: new Date,
        notaObra: 1,
    },
    {
        tituloResenha: "resenha teste 4",
        resenha: ["kladjsflfagdfii8ajkf","lkjfe4891601585ioj"],
        createdAt: new Date,
        updatedAt: new Date,
        notaObra: 3,
    }
]
export const updatedReview: Review = {
    tituloResenha: "resenha teste 4",
    resenha: ["kladjsflfagdfii8ajkfvcadsv v2","lkjfe489160158dfadsf vvdds"],
    createdAt: new Date,
    updatedAt: new Date,
    notaObra: 5,
}