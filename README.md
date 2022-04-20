# Instalação

- Para instalar, basta clonar esse repositório. 
- Após clonar abra um terminal na pasta ***wall_paint_calculator*** e em seguida use o comando ***npm i***
- após a instação pelo terminal, use o commando ***npm start**
- Se tudo ocorreu bem, uma aba no navegador será aberta automaticamente.

# Regras de negócio do aplicativo:

## Input:

### 4 paredes:

- O usuário pode: 
    - escolher a medida de cada parede livremente
    - adicionar quantas portas e janelas quiser para cada parede

### Condições:
	
- Parede:
	- mínimo de 1 metro quadrado
	- máximo de 15 metros quadrados
	- alturas e larguras são livres
	- Área consumida por portas e janelas não pode passar 50% da área da parede
	- Altura da parede com porta deve ser no mínimo 30 centímetros a mais que a altura da porta

- Janelas:
	- dimensões fixas de 2.00 x 1.20 metros.
	
- Portas: 
	- fixas de 0.80 x 1.90 metros.

- Pisos e tetos:
	- Não se aplica.

## Output:

- Número mínimo de latas necessárias para se pintar as paredes, priorizando sempre latas maiores

### Condições:

- Cada litro de tinta equivale a 5 metros quadrados de área pintada
- Tamanhos pré definidos de latas:
	- 0.5 	litros
	- 2.4 	litros
	- 3.6 	litros
	- 18 	litros

## Inferências na regra de negócio:
	
- Dimensões serão consideradas na formatação de ***largura x altura*** , já que as dimensões das portas são
0.80 x 1.90 metros, e portas possuem sua altura maior que a largura normalmente.

- A altura de todas as paredes serão as mesmas, já que não é normal uma sala possuir paredes com alturas
diferentes.
