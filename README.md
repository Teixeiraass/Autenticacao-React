# Desafio B2B

## Iniciando
Siga as intruções para obter uma copia do projeto e roda em sua maquina

## 📝 Pré-requisitos

O que é necessario instalar para rodar o projeto?

```
Node: https://nodejs.org/en
Git: https://git-scm.com/downloads
```

## 🛠 Instalação

Como iniciar o projeto? Siga as instruções a baixo para poder ultilizar o projeto na sua maquina!

```
Clonar repositorio: git clone "https://github.com/Teixeiraass/desafio-b2b.git"

Instalar dependencias: npm i

Rodar projeto: npm run dev
```

### Authenticação do projeto

Utilize as seguintes credenciais para acessar a home page

```
Email: cliente@youdrive.com
Senha: password
```

## 🧱 Tecnologias para contrução

O projeto foi desenvolvido em React, mas utilizou algumas bibliotecas e tecnologias.

* TypeScript 
* Vite
* React router dom
* Axios
* Tailwind

## ⚙ Testes

O projeto possui uma serie de testes para garantir o seu funcionamento.
Para executar os teste siga a instrução a baixo!

```
    npm run test
```

Exemplos de testes:

```javascript
it('renders email and password fields', () => {
        render(
            <MemoryRouter>
                <AuthProvider>
                    <LoginPage />
                </AuthProvider>
            </MemoryRouter>
        )

        expect(screen.getByPlaceholderText("@gmail.com")).toBeInTheDocument
        expect(screen.getByPlaceholderText("**********")).toBeInTheDocument
    });
```

### O projeto conta com integração Contínua(CI)

Para você conseguir contruibuar para esse projeto, e necessario que os seus testes estejam passando corretamente!

## 🖊️ Autores

Que desenvolveu:

* Guilherme Teixeira | Criador:  https://github.com/Teixeiraas

## Vizualização do Projeto

Aqui você pode ter uma boa noção do projeto com as imagens a baixo.

### O projeto está hopedado no firebase. 
### Acesse a url: https://b2b-desafio.web.app

## Login Screen: 

![LoginScreen](/screenshot/LoginPage.png)

## Wrong password: 

![LoginScreen](/screenshot/wrongPassword.png)

## Home Screen: 

![LoginScreen](/screenshot/HomePage.png)