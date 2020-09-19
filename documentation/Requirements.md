# Requisitos 

Neste momento os requisitos estão sendo criados pensando em um **MVP**.   

Para não não perder o foco no **MVP** pensando em muitas coisas, vamos seguir o conceito de Design [Kiss - Keep It Simple, Stupid](https://uxdesign.blog.br/a-origem-do-keep-it-simple-stupid-kiss-b24085dc1327)

## Requisitos funcionais
--------------------------

- [ ] O usuário deve se autenticar usando email e senha.
- [ ] Após o login o usuário deve ser redirecionado para um **Dash** onde será exibido os Cursos que este usuário está inscrito, a exibição deve ser em formato de **Cards**.
- [ ] O click do Card de Curso deve direcionar para a pagina de **Sala de Aula**.


## Requisitos não funcionais
-----------------------------

- [ ] Durante o desenvolvimento devemo **sempre** seguir o conceito **Kiss**
- [ ] Usar a paleta de cores e-Programar
- [ ] Deve ser possivel escrever um conteudo teórico em **Markdown** para ser exibido tipo Github na tela de **Sala de aula**

## Regras de negócio
---------------------

- [ ] **Login estático:** Para validar o login deve ser usado uma estrutura de dados estática no Front-and. Criar uma lista de usuários e suas senhas no Front-and até que sejá criado a primeira versão de Back-end. Após a autenticação do usuário deve acontecer um redirecionamento para a página de **Dash**.
- [ ] **Dash de Cursos:**  A página de **Dash** deve listar os Cursos que o usuário logado está inscrito. Criar uma visualização no formato de Cards com um imagem e u título. O click do Card deve levar para a pagina de **Class Room**.
- [ ] **Sala de Aula:** A pagina de **Class Room** de ter uma barra superior que exiba o usuário logado o canto direito com um Dropdown que exibe um Nome do usuário e uma opção de Logoff. Deve ter uma **Sidebar** do lado esquerdo com o nome do Curso e um Dropdown que exiba a lista de **módulos** do Curso. O onChange de Modulos deve exibir logo abaixo o **couteúdo** do Módulo que pode ser uma aula em Video ou um arquivo Markdown onde pode ser possivel tem um conteúdo teórico.

## Tomada de decisões
---------------------

- O objetivo do **MVP** é uma plataforma onde seja possivel através de um usuário, carregar a lista de Cursos que ele está inscrito e ao clicar em um Curso carregar os Módulos e Conteúdo de cada Aula, com o foco totalmente no Front-end. Então, não queremos nos preocupar neste momento com um Back-end, para isso devemos seguir o desenvolvimento com uma estrutura de dados estática no front e depois mover para uma base de dados tipo Firebase ou Mongo Atlas usando talves um Lambda para expor um endpoint de leitura dessa base. Tudo para não depender de Infra, deploy, CI/CD de Back-end neste momento.

- Optamos por desenvolver o Front-end em **VueJs** porque achamos que todos iriam se sentir mais familiarizados e com isso acelerar a entrega do MVP.

## [Paleta de Cores](./images/colors-pallete.png)
--------------------

- Roxo #49007C
- Verde #00FF80
- Preto #1A161E

![Colors Pallete](./images/colors-pallete.png)