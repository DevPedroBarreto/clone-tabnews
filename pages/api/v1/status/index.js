function status(request, response) {
  response.status(200).json({
    Nome: "Pedro",
    "Sobre-Nome": "Barreto",
  });
}

export default status;
