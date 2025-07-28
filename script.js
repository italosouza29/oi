let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById("lista-carrinho");
  const totalEl = document.getElementById("total");

  lista.innerHTML = "";
  total = 0;

  carrinho.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    lista.appendChild(li);
    total += item.preco;
  });

  totalEl.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function converterMoeda() {

const valor = parseFloat(document.getElementById("valor").value);
const moedaOrigem = document.getElementById("moeda-origem").value;
const moedaDestino = document.getElementById("moeda-destino").value;
const taxasCambio = {
USD: { BRL: 5.0, EUR: 0.85, USD: 1 },
EUR: { BRL: 5.9, USD: 1.18, EUR: 1 },
BRL: { USD: 0.2, EUR: 0.17, BRL: 1 },
};
if (isNaN(valor)) {
document.getElementById("resultado").textContent = "Por favor, insira um valor válido.";
return;
}
const valorConvertido = valor * taxasCambio[moedaOrigem][moedaDestino];
document.getElementById("resultado").textContent =
`${valor} ${moedaOrigem} = ${valorConvertido.toFixed(2)} ${moedaDestino}`;
}
