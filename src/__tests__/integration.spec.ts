import { jest } from "@jest/globals";
import { mongoConnect, mongoDisconnect } from "../db/mongo.connection";
import express from "express";
import supertest from "supertest";
import bookRoutes from "../books/routes/book.routes";
import reviewRoutes from "../reviews/routes/review.routes"
import { Types } from "mongoose";

/*
Teste de integração verificam se o sistema está funcionando como um todo.
Com o servidor ativo, o teste envia requisições HTTP e 
verifica se o servidor responde corretamente.]
É como se tivessemos automatizado o uso do Postman.
*/

const app = express();
app.use(express.json());
app.use("/testBook", bookRoutes);
app.use("/testReview", reviewRoutes);

const testBook = {
    _id: new Types.ObjectId(), 
    titulo: "Livro 1",
    dataLancamento: "19/10/2021",
    idioma: ["portugues","ingles"],
    status: false,
    autor: "autor 1",
};

const testBook2 = {
    titulo: "Livro 21",
    dataLancamento: "20/07/1921",
    idioma: ["portugues","espanhol"],
    status: true,
    resenha: new Types.ObjectId(),
    autor: "autor 24",
};


const testReview = {
    tituloResenha: "resenha teste 1",
    resenha: ["kladjsflajkf","lkjfeioj"],
    dataCriacao: new Date,
    dataEdicao: new Date,
    notaObra: 7,
  };
  
  const testReview2 = {
    tituloResenha: "resenha teste 2",
    resenha: ["kladjsflajdaf d","lkjfe11141414aaioj"],
    dataCriacao: new Date,
    dataEdicao: new Date,
    notaObra: 4,
  };
  
  beforeAll(() => {
    mongoConnect();
  });


afterAll(() => {
  mongoDisconnect();
});

describe("Book", () => {
  it("Deve retornar todos os livros", async () => {
    const response = await supertest(app).get("/testBook");
    expect(response.status).toBe(200);
  });

  it("Deve retornar um livro por id", async () => {
    const id = testBook._id;
    const response = await supertest(app).get(`/testBook/${id}`);
    expect(response.status).toBe(200);
  });

  it("Deve retornar todos os livros do autor", async () => {
    const autor = testBook.autor;
    const response = await supertest(app).get(`/testBook/autor/${autor}`);
    expect(response.status).toBe(200);
  });

  it("Deve criar um livro", async () => {
    const response = await supertest(app).post("/testBook").send(testBook);
    expect(response.status).toBe(201);
  });

  it("Deve atualizar um livro", async () => {
    const getAll = await supertest(app).get("/testBook");
    const lastBook = getAll.body[getAll.body.length - 1];
    const id = lastBook._id;
    const response = await supertest(app).put(`/testBook/${id}`).send(testBook2);
    expect(response.status).toBe(200);
  });

  it("Deve atualizar somente o status de um livro", async () => {
    const getAll = await supertest(app).get("/testBook");
    const lastBook = getAll.body[getAll.body.length - 1];
    const id = lastBook._id;
    const response = await supertest(app).put(`/testBook/${id}/status`).send(testBook2);
    expect(response.status).toBe(200);
  });

});