# O Meu Portfólio

Site portfólio pessoal com minhas experiências, voluntariados, formação acadêmica e áreas de interesse. Feito com HTML, CSS e JavaScript, responsivo e com modo claro e escuro.

**Acesse o site:** https://ana-julia-an.github.io/portfolio/

## Sobre o projeto

Este projeto foi desenvolvido como trabalho final de curso. O objetivo era criar um site sobre mim, hospedá-lo no GitHub Pages e organizá-lo com uma arquitetura completa, com pastas separadas para imagens, estilos, scripts e páginas.

## Funcionalidades

- Página inicial com apresentação, foto de perfil e janela "Sobre mim"
- Seções de Voluntariado, Experiências, Faculdades e Habilidades e interesses
- Páginas próprias para cada voluntariado e experiência, com texto, foto e links de matérias
- Modo claro e escuro, que lembra a escolha da pessoa e acompanha o tema do computador na primeira visita
- Painel lateral de contato, com botão para copiar o e-mail
- Design responsivo, que se adapta a celular, tablet e computador
- Animações discretas, desativadas para quem prefere menos movimento

## Tecnologias

- HTML5
- CSS3
- JavaScript
- [Bootstrap 5](https://getbootstrap.com/) para o layout e os componentes
- [Font Awesome](https://fontawesome.com/) para os ícones
- [Google Fonts](https://fonts.google.com/) para as fontes Bricolage Grotesque e Source Sans 3

## Estrutura de pastas

```
portfolio/
├── index.html              página inicial
├── paginas/                páginas de detalhe
│   ├── agencia-de-missoes.html
│   ├── frame.html
│   └── igg.html
├── css/
│   └── style.css           estilos do site
├── js/
│   ├── tema.js             aplica o modo claro ou escuro ao abrir
│   └── main.js             botão de tema, copiar e-mail e carregamento
├── img/                    imagens do site
├── LICENSE                 licença MIT
├── .gitignore
└── README.md
```

## Como ver o site no computador

1. Baixe o projeto: clique em **Code > Download ZIP** no GitHub e extraia a pasta.
2. Abra o arquivo `index.html` no navegador, com duplo clique.

É preciso estar conectado à internet, porque o Bootstrap, os ícones e as fontes são carregados de servidores externos.

## Como personalizar

| O que mudar | Onde |
|---|---|
| Nome e textos da página inicial | `index.html` |
| Textos, links e matérias de cada item | arquivos da pasta `paginas/` |
| Cores e aparência | `css/style.css`, nas variáveis do início do arquivo |
| E-mail do botão "Copiar e-mail" | primeira linha de `js/main.js` |
| Fotos | pasta `img/`, com os nomes `perfil.jpg`, `agencia-de-missoes.jpg`, `frame.jpg` e `igg.jpg` |

## Como publicar no GitHub Pages

1. Envie o projeto para um repositório público no GitHub.
2. Abra **Settings > Pages**.
3. Em **Source**, escolha **Deploy from a branch**.
4. Em **Branch**, selecione `main` e a pasta `/ (root)`, e clique em **Save**.
5. Depois de 1 a 3 minutos, o site fica disponível em `https://ana-julia-an.github.io/portfolio/`.

## Licença

O código deste projeto está sob a [Licença MIT](LICENSE). Os textos e as fotos pessoais não são cobertos por essa licença e não podem ser reutilizados sem autorização.

## Autor

**Ana Júlia Andrade**

- LinkedIn: https://www.linkedin.com/in/ana-j%C3%BAlia-nascimento-de-andrade-6827b840a/
- GitHub: https://github.com/ana-julia-an
