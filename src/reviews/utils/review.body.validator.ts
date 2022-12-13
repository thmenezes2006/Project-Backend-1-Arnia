import { Request } from "express";

export function invalidBody(req: Request) {
  const review = {
    tituloResenha: req.body.tituloResenha,
    resenha: req.body.resenha,
    dataCriacao: req.body.dataCriacao,
    dataEdicao: req.body.dataEdicao,
    notaObra: req.body.notaObra,
  };

  const jsonReview = JSON.stringify(review);
  const jsonBody = JSON.stringify(req.body);

  if (jsonReview !== jsonBody) {
    return true;
  }

  return false;
}
