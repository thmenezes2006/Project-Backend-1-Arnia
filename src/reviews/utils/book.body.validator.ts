import { Request } from "express";

export function invalidBody(req: Request) {
  const book = {
    titulo: req.body.titulo,
    dataLancamento: req.body.dataLancamento,
    idiomas: req.body.idiomas,
    status: req.body.status,
    resenha: req.body.resenha,
    autor: req.body.autor,
  };

  const jsonBook = JSON.stringify(book);
  const jsonBody = JSON.stringify(req.body);

  if (jsonBook !== jsonBody) {
    return true;
  }

  return false;
}
