<h1 align="center">Ignews</h1>

<p align="center">Blog fictício de notícias desenvolvido durante a trilha de react do ignite. 🚀</p>

<h2>Descrição</h2>

<p>O projeto é um blog de notícias onde o usuário faz login utilizando o github, faz uma assinatura para acessar o conteúdo dos posts e consume o conteúdo. Na aplicação é feita autenticação utilizando o "next-auth", o sistema de pagamentos é com o Stripe e o gerenciamento de posts é feito através do prismic CMS.</p>

<h2>Demonstração</h2>
  
  <div>
    <img width="400px" src="https://user-images.githubusercontent.com/86028187/159383016-67e19908-611e-40bf-81a7-1ace5ac4f893.png" alt="Ignews-01">
    <img width="400px" src="https://user-images.githubusercontent.com/86028187/159383026-dfcb6260-5daf-4366-9870-263f97b9fe80.png" alt="Ignews-02">
    <img width="400px" src="https://user-images.githubusercontent.com/86028187/159383044-2834d824-aae5-4a24-b676-143e8602bbd9.png" alt="Ignews-03">
    <img width="400px" src="https://user-images.githubusercontent.com/86028187/159383050-eddda2bc-468b-4154-ac7f-3d311ff891c6.png" alt="Ignews-04">
  </div>
  
 <h2>Como rodar a aplicação</h2/>
  
  <ul>
    <li>Clone a aplicação na sua máquina</li>
    <li>Entre no diretório</li>
    <li>Utilize o comando "yarn" para instalar as dependências</li>
    <li>Agora utilize o comando "yarn dev" para rodar a aplicação</li>
    <li>Crie as váriaveis ambiente do projeto</li>
    <li>Por fim, acesse a porta informada no terminal e veja a aplicação</li>
  </ul>
  
  Variaveis ambiente do projeto: 
  <pre>
      STRIPE

    STRIPE_API_KEY=
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY
    STRIPE_SUCCESS_URL
    STRIPE_CANCEL_URL
    STRIPE_WEBHOOK_SECRET

      GITHUB

    GITHUB_SECRET_ID
    GITHUB_CLIENT_ID

      FAUNADB

    FAUNADB_KEY

      PRISMIC
    PRISMIC_ENDPOINT
    PRISMIC_ACCESS_TOKEN
  </pre>
  
 <h2>Tecnologias Utilizadas</h2>
 
- NextJS
- TypeScript
- SASS
- FaunaDB
- Stripe
- Prismic CMS

<h4 align="center"> 
  Finalizado ✅
</h4>
