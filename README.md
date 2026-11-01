# Portfólio — Mateus Augusto Felisbino · V4 (Sci-Fi)

Site pessoal responsivo em HTML, CSS e JavaScript puro, com visual sci-fi original inspirado em interfaces tecnológicas e cinematográficas. Não utiliza personagem, marca ou material oficial de Ultron/Marvel.

## Como abrir

1. Extraia **todos** os arquivos do ZIP para a mesma pasta.
2. Abra `index.html` com Chrome, Edge ou Firefox.
3. Os projetos fixos e a maior parte dos controles funcionam sem internet. A sincronização do GitHub exige conexão e depende da API pública.

## Como publicar gratuitamente no GitHub Pages

1. Crie um repositório público no GitHub, por exemplo `portfolio`.
2. Envie o conteúdo desta pasta para a **raiz** do repositório (deixe `index.html` na raiz).
3. Abra **Settings > Pages > Build and deployment > Deploy from a branch**.
4. Selecione `main` e `/(root)` e salve.
5. Após o Pages concluir a publicação, o endereço deverá ser semelhante a `https://MateusAugusto1.github.io/portfolio/`.

## Arquivos

- `index.html` — conteúdo semântico e miniaturas ilustrativas embutidas.
- `styles.css` — componentes e estrutura originais.
- `enhancements.css` — painéis, pesquisa, modais e microinterações.
- `ultron-polish.css` — refinamento visual V4; paletas, responsividade e núcleo energético animado.
- `main.js` — tradução PT/EN, alternância de tema, filtros, menu e contato.
- `enhancements.js` — abas de código, busca Ctrl/⌘+K, detalhes, GitHub, efeitos.
- `fixes.js` — ajustes de resiliência e cópia de e-mail.
- `favicon.svg` — ícone original com a letra M.

## Interações

- Teclas **Ctrl+K** / **⌘+K**: abrir a busca de projetos, tecnologias e seções.
- Teclas **↑, ↓, Enter e Esc**: navegar pela busca.
- Botões **Explorar detalhes**: abrir informações dos cinco projetos.
- Filtros **Todos / Web / Mobile / Jogos**: escolher o tipo de trabalho.
- **PT / EN**: traduções. **Ícone de sol/lua**: tema claro ou escuro.
- Abas do editor **about-me.tsx**, **projects.json**, **focus.ts**: mostrar trechos de código *ilustrativos*.
- **Sincronizar GitHub**: consultar até três repositórios públicos recentes sem usar token.
- **Copiar e-mail** ou **Enviar um e-mail**: contato.

## Conteúdo e limitações

- Projetos com links públicos: Fleet Tracker Dashboard, aplicativo de transporte e interface de cadastro.
- Jogos independentes em desenvolvimento: Reino em Ruínas e AquaCare 3D. Não há links de código público.
- Os desenhos/mockups dos projetos são ilustrativos, **não são screenshots verificadas das aplicações**.
- A sincronização pública do GitHub pode falhar por conexão, restrições locais ou limite de requisições da API; os projetos fixos continuam visíveis.
- O site é estático e **não precisa de servidor pago**; ele não coleta dados pessoais de visitantes.

## Para editar

- Nome, descrição, contato e conteúdo das seções: `index.html` e textos em `main.js` (português e inglês).
- Descrições dos painéis de projetos: objeto `projectDetails` em `enhancements.js`.
- Cores e efeito do núcleo de energia: `ultron-polish.css`.

## Verificações executadas

- Sintaxe JavaScript via `node --check`.
- Validação estrutural: IDs sem duplicação, links internos resolvidos e todos os arquivos vinculados presentes.
- Parsing de CSS sem erros de nível superior.
- **Limitação:** a renderização visual automatizada em navegador não pôde ser concluída neste ambiente; revise o layout localmente antes de publicar.
