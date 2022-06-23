console.log('JS ok');

document
	.querySelector('.hamburguer')
	.addEventListener('click', () => document.querySelector('.container').classList.toggle('show-menu'));
//

const taxaPagina = 100;
const taxaScript = 1.1;
const taxaLayout = 500;

document.querySelector('#qtde').addEventListener('change', atualizarPreco);
document.querySelector('#js').addEventListener('change', atualizarPreco);
document.querySelector('#layout-sim').addEventListener('change', atualizarPreco);
document.querySelector('#layout-nao').addEventListener('change', atualizarPreco);
document.querySelector('#prazo').addEventListener('change', atualizarPreco);

function atualizarPreco() {
	const qtde = document.querySelector('#qtde').value;
	const preco = document.querySelector('#preco');
	const layoutSim = document.querySelector('#layout-sim').checked;
	const prazo = document.querySelector('#prazo').value;
	const infoPrazo = document.querySelector('#infoPrazo');
	const js = document.querySelector('#js').checked;

	if (qtde < 0) {
		preco.innerHTML = 'Quantidade deve ser maior que 0.';
		return;
	}

	let informaPreco = qtde * taxaPagina;

	const taxaUrgencia = 1 - prazo * 0.1;

	//FUNÇÃO INSERIR PREÇO
	function inserePreco() {
		preco.innerHTML = `R$ ${informaPreco.toFixed(2)}`;
		return;
	}

	if (js) informaPreco *= taxaScript;

	if (layoutSim) informaPreco += taxaLayout;

	if (prazo < 2) {
		infoPrazo.innerHTML = `Prazo: ${prazo} semana`;
	} else {
		infoPrazo.innerHTML = `Prazo: ${prazo} semanas`;
	}

	informaPreco *= 1 + taxaUrgencia;

	inserePreco();
}
