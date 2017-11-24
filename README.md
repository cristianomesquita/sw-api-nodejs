# [SW API NodeJS]
SW Challenge API

Para configurar está api em abiente de produção é necessário configurar um servidor web
ou usar algum serviço de terceiros como o heroku por exemplo. Para maiores detalhes sobre
como fazer deploy no ambiente heroku acesse o [Dev center do heroku, deploy com nodejs](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)

Está api está disponível em um droplet na [Digital Ocean](https://www.digitalocean.com)
Para colocar um servidor online na Digital Ocean é necessário criar uma conta e alugar um droplet.

## Configurações de servidor 

A api está rodando em um droplet com as seguinte configurações 512 MB de memória ram / 20 GB de armazenamento SSD / Sistema operacional - CentOS 7.4 x64.


## Primeiros passos

Após contratar o servidor primeiro passo é instalar o sistema operacionar neste caso o
CentOS 7.4, assim que terminar a instalação a digital ocean enviará para o email cadastrado o IP do droplet e os dados de acesso via SSH.

### Acessando via SSH

Agora de posse dos dados de acesso abra o terminal e digite ssh root@<IP> pressione enter, 
agora insira a senha que foi enviada para seu email e logo após cadastre sua senha definitiva.

### Instalações de ambiente

#### NodeJS

    Primeiro instale o nvm (node version manager), rode este comando no seu terminal conectado via SSH: 
    curl https://raw.githubusercontent.com/creationix/nvm/v0.23.2/install.sh | bash 
    Feito isso você deve reiniciar seu terminal.</p> 
    Para instalar o versão especifica do nodejs neste caso a 8.4.0 execute o comando nvm install 8.4.0.

#### MongoDB

    Para instalar o mongodb adicione o seguinte repositório:
    sudo vi/etc/yum.repos.d/mongodb-org.repo 

    cole este trecho no arquivo que está sendo criado:
    [mongodb-org-3.4]
    name=MongoDB Repository
    baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.4/x86_64/
    gpgcheck=1
    enabled=1
    gpgkey=https://www.mongodb.org/static/pgp/server-3.4.asc    

    digite :wq para salvar e fechar o arquivo. Agora o próximo passo é rodas o comando de 
    instalação propriamente dito, execute o seguinte comando no seu terminal: sudo yum install mongodb-org. Está feito agora basta iniciar o mongodb para isso copie e cole este comando no terminal: sudo systemctl reload mongod.

### Enviando arquivos para o servidor

    Existem algumas formas de subir os arquivos para o servidor, via SSH ou FTP por exemplo além de poder usar os recursos de git, para este momento via FTP supre as necessidades, para isso instale algum programa de FTP para facilitar como FileZilla ou WinSCP dependendo do seu sistema operacional.
    Agora basta abrir o programa e entrar com as credenciais. Insira o IP fornecido pela Digital Ocean e usuário e senha.
    Via SSH crie o diretório /www dentro do diretório /var comumente utilizados. Na raiz do seu terminal navegue cd /var e crie o diretório www assim mkdir www.
    No programa de FTP navegue até o diretório www e arraste os arquivos pra dentro dele. 

### PM2

   O módulo PM2 gerencia a aplicação nodejs para nós, mesmo após sairmos do terminal, para que o servidor continue rodando em produção, para isso agora vamos usar o npm que já está instalado previamente quando instalamos o nodejs. Execute no terminal npm install pm2 -g, feito isso para manter o servidor sempre ativo além de diversos outros recursos interessantes do PM2 rode o comando pm2 start server.js, lebrando que precisa estar dentro de www no seu terminal.

## Considerações
   <p>
     Estes seriam os requisitos mínimos para rodar a api, existem inúmeras melhorias e configurações a serem feitas para um melhor desempenho. Para acessar a documentação da API http://138.197.79.213:3000/apidoc
   </p>
