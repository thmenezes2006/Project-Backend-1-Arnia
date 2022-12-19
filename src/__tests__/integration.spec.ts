import { jest } from "@jest/globals";
import { mongoConnect, mongoDisconnect } from "../db/mongo.connection";
import express from "express";
import supertest from "supertest";
import bookRoutes from "../books/routes/book.routes";
import reviewRoutes from "../reviews/routes/review.routes"
import { Types } from "mongoose";
import { faker } from "@faker-js/faker";

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
    titulo: faker.lorem.words(2),
    dataLancamento: "19/10/2021",
    idioma: ["portugues","ingles"],
    status: false,
    autor:  faker.name.firstName(),
};

const testBook2 = {
    idioma: ["portugues","espanhol"],
    resenha: new Types.ObjectId(),
};


const testReview = {
    tituloResenha:  faker.lorem.words(2),
    resenha:  [
      faker.lorem.words(3),
      faker.lorem.words(3),
    ],
    createdAt: new Date,
    updatedAt: new Date,
    notaObra: 3,
  };
  
  const testReview2 = {
    tituloResenha:  faker.lorem.words(2),
    resenha:  [
      faker.lorem.paragraphs(3),
      faker.lorem.paragraphs(3),
    ],
    createdAt: new Date,
    updatedAt: new Date,
    notaObra: 4,
  };
  
  beforeAll(() => {
    mongoConnect();
  });


afterAll(() => {
  mongoDisconnect();
});


describe("Review", () => {
  it("Deve criar uma resenha", async () => {
    const response = await supertest(app).post("/testReview").send(testReview);
    expect(response.status).toBe(201);
  });

  it("Deve retornar todos as resenhas", async () => {
    const response = await supertest(app).get("/testReview");
    expect(response.status).toBe(200);
  });

  it("Deve retornar uma resenha por id", async () => {
    const getAll = await supertest(app).get("/testReview");
    const id = getAll.body[0]._id;
    const response = await supertest(app).get(`/testReview/${id}`);
    expect(response.status).toBe(200);
  });
  
  
  it("Deve atualizar uma resenha", async () => {
    const getAll = await supertest(app).get("/testReview");
    const lastReview = getAll.body[getAll.body.length - 1];
    const id = lastReview._id;
    const response = await supertest(app).put(`/testReview/${id}`).send(testReview2);
    expect(response.status).toBe(200);
  });
  
  describe("Book", () => {
    it("Deve criar um livro", async () => {
      const response = await supertest(app).post("/testBook").send(testBook);
      expect(response.status).toBe(201);
    });
  
    it("Deve retornar todos os livros", async () => {
      const response = await supertest(app).get("/testBook");
      expect(response.status).toBe(200);
    });
  
    it("Deve retornar um livro por id", async () => {
      const getAll = await supertest(app).get("/testBook");
      const id = getAll._body[0]._id;
      const response = await supertest(app).get(`/testBook/${id}`);
      expect(response.status).toBe(200);
    });
  
    it("Deve retornar todos os livros do autor", async () => {
      const autor = testBook.autor;
      const response = await supertest(app).get(`/testBook?autor=${autor}`);
      expect(response.status).toBe(200);
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
});