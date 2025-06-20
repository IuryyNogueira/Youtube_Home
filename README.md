# 🎥 YouTube Home Page Remake

Este é um projeto de recriação da página inicial do YouTube utilizando **HTML**, **CSS** e **JavaScript** para interatividade. O objetivo é reproduzir a interface principal com foco em estrutura, estilo, responsividade e interatividade, sem uso de frameworks ou bibliotecas externas.

## 🔧 Tecnologias Utilizadas

- HTML5
- CSS3 (com organização modular em múltiplos arquivos)
- JavaScript (dividido em módulos para diferentes funcionalidades)

## 📌 Funcionalidades

- ✅ Barra de navegação superior com botão de login
- ✅ Barra lateral com atalhos (menu expansível e recolhível)
- ✅ Barra de categorias com rolagem horizontal
- ✅ Cards de vídeo com miniatura, título e informações do canal
- ✅ Interações JavaScript: menu lateral, barra de pesquisa, rolagem de categorias, manipulação dinâmica de vídeos
- ❌ Sessão de Shorts
- ❌ Modo escuro

## 🚧 Funcionalidades Futuras

- 📱 Melhorias na responsividade
- 🎯 Mais funcionalidades interativas com JavaScript
- 🌙 Modo escuro
- 🎬 Sessão de Shorts

## 📁 Organização dos Arquivos

```
├── 📄 index.html
├── 📄 styles.css
├── 📄 base.txt
├── 📁 CSS/
│   ├── 📄 main.css
│   ├── 📄 header.css
│   ├── 📄 sidebar.css
│   ├── 📄 sidebarMenor.css
│   ├── 📄 videos.css
│   ├── 📄 categorias.css
│   ├── 📄 modalApi.css
│   ├── 📄 modalPesquisaVoz.css
│   └── 📄 sugestoes-pesquisa.css
├── 📁 JS/
│   ├── 📄 barraLateral.js
│   ├── 📄 barraPesquisa.js
│   ├── 📄 scrollHorizontal.js
│   ├── 📄 arquivoVideos.js
│   └── 📄 funcVideos.js
```

## 🧠 Aprendizados

Este projeto ajudou a praticar:

- Estruturação de projetos web com múltiplos arquivos CSS e JS
- Layouts com Flexbox e Grid
- Controle de overflow e scroll horizontal
- Estilização de componentes reutilizáveis
- Modularização de código JavaScript para diferentes funcionalidades
- Manipulação dinâmica de elementos com JavaScript
- Responsividade para diferentes dispositivos

## 💡 Inspiração

- YouTube (versão desktop atual)

## 📄 Licença

Este projeto é apenas para fins educacionais e **não tem relação com o YouTube oficial**.

## 🔗 Integração com API da Pexels

O projeto utiliza a API da Pexels para buscar imagens e miniaturas de vídeos de forma dinâmica, enriquecendo a experiência visual da interface. A integração é feita via requisições HTTP utilizando JavaScript, consumindo os endpoints públicos da Pexels para obter imagens de alta qualidade.

- A API é utilizada principalmente para simular miniaturas de vídeos e resultados de pesquisa de imagens.
- A autenticação é feita por meio de uma chave de API pessoal, que deve ser inserida no código JavaScript responsável pelas requisições.
- O código de integração pode ser encontrado nos arquivos JS relacionados à manipulação de vídeos e modais de pesquisa.
- Para mais informações sobre a API, acesse: https://www.pexels.com/api/

> **Atenção:** A chave da API da Pexels não deve ser exposta publicamente em repositórios públicos. Recomenda-se utilizar variáveis de ambiente ou arquivos de configuração ignorados pelo versionamento.
