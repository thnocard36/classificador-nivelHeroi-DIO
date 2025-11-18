
# ⚔️ Classificador de Nível de Herói por XP

Este projeto em JavaScript implementa um classificador que determina o nível (rank) de um herói com base na sua quantidade de **Experiência (XP)**. O exercício foca no uso de **Estruturas de Decisão** (`if/else if/else`).
## 🧑‍💻 Créditos

| **Categoria** | **Detalhes** |
| ----------------- | :----------:|
| **Autor** | [Thiago Cardoso](https://github.com/thnocard36) |
| **Professor / Instrutor** | [Prof. Felipe Aguiar](https://github.com/felipeAguiarCode) |

## 🎯 Objetivo

Desenvolver um classificador que receba o nome do herói e sua quantidade de XP, e utilize estruturas condicionais para definir e exibir o nível do herói de acordo com faixas de XP predefinidas.

## ✨ Conceitos Trabalhados

-   **Variáveis**
    
-   **Operadores**
    
-   **Estruturas de Decisão** (`if`, `else if`, `else`)
    

## 🗺️ Regras de Classificação (XP Requerida)

O nível do herói é determinado pelas seguintes faixas de XP, conforme o enunciado:

|**Faixa de XP**|**Nível**|
|---------------- |:----------------:|
| $< 1.000$ | **Ferro** |
| $1.001 - 2.000$ | **Bronze** |
| $2.001 - 5.000$ | **Prata** |
| $5.001 - 7.000$ | **Ouro** |
| $7.001 - 8.000$ | **Platina** |
| $8.001 - 9.000$ | **Ascendente** |
| $9.001 - 10.000$ | **Imortal** |
| $> 10.001$ | **Radiante** |

----------

## 💻 Código JavaScript

Este código reflete a lógica de classificação, garantindo que as faixas de XP sigam as regras da tabela:

*JavaScript*

```
// Variáveis de entrada (Você pode alterar esses valores para testar diferentes níveis)
let nomePersonagem = "Aether";
let nivelXP = 7500; 

// Estrutura de Classificação
let nivel = ""; // Variável para armazenar o nível

if (nivelXP < 1000) { 
    nivel = "FERRO";
} else if (nivelXP >= 1001 && nivelXP <= 2000) { 
    nivel = "BRONZE";
} else if (nivelXP >= 2001 && nivelXP <= 5000) { 
    nivel = "PRATA";
} else if (nivelXP >= 5001 && nivelXP <= 7000) { 
    nivel = "OURO";
} else if (nivelXP >= 7001 && nivelXP <= 8000) { 
    nivel = "PLATINA";
} else if (nivelXP >= 8001 && nivelXP <= 9000) { 
    nivel = "ASCENDENTE";
} else if (nivelXP >= 9001 && nivelXP <= 10000) { 
    nivel = "IMORTAL";
} else { // Cobre os casos >= 10001
    nivel = "RADIANTE";
}

// Saída
console.log(`O Herói ${nomePersonagem}, está no nivel ${nivelXP} ${nivel}`);

// Exemplo de Saída:
// O Herói Aether, está no nivel 7500 PLATINA

```

----------

## ⚙️ Como Executar

Para testar o classificador em seu ambiente local:

1.  Salve o código JavaScript em um arquivo (ex: `classificador_heroi.js`).
    
2.  Abra seu terminal na pasta onde o arquivo foi salvo.
    
3.  Execute o arquivo utilizando o **Node.js**:
    
    *Bash*
    
    ```
    node classificador_heroi.js
    
    ```
    
4.  A saída será exibida no console, mostrando o nível do herói.