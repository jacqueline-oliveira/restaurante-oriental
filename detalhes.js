function detalhesProduto(id) {
    fetch(`https://restaurante-oriental.fly.dev/produtos/${id}`)
      .then(resposta => resposta.json())
      .then(produto => {
        const imagem = document.querySelector("#img_details");
        imagem.src = produto.imagem;
  
        const titulo = document.querySelector("#titulo_details");
        titulo.innerText = produto.produto;
  
        const descricao = document.querySelector("#desc_details");
        descricao.innerText = produto.descricao;
      });
  }
  
  let procura = new URLSearchParams(window.location.search);
  const id = procura.get("id");
  console.log(id);
  detalhesProduto(id);