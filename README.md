<h2>Criar Container com Docker</h2>
<p>Para criar um container no Docker, primeiro precisamos criar um arquivo no projeto que se chame <b> Dockerfile </b>e depois configurar ele.</p>

![cokerfile](https://user-images.githubusercontent.com/42754908/142747085-ea784370-1f61-475e-86b4-27e5592d0e5f.png)
<p><b>FROM</b> - Definindo a imagem que vai ser utlizada, que seria alphine-node</p>
<p><b>WORKDIR></b> - Defenindo qual pasta que o docker vai trabalhar</p>
<p><b>COPY</b> - Copiar os arquivos para a pasta, na qual foi definida como parametro no  workdir </p>
<p><b>RUN</b> -  Rodar alguem comando que foi definido como parametrno, no nosso caso, o npm install</p>
<p><b>EXPOSE</b> -  Expor a porta do nosso servidor web</p>
<p><b>CMD</b> -  Comando para inicializar o servidor</p>
<p> Para criamos uma imagem em Docker, precisamos informar o nome do nossa imagem e o diretorio, basta digitar no terminal:<br>
<b>$docker build -t atividade-container-eng .</b></p>

Para visualizamos se foi criado, podemos digitar:<br>
<b>$ docker images</b> <br>![imagens](https://user-images.githubusercontent.com/42754908/142762410-f59d7a39-8e26-4c77-b5f2-e67cdebed046.png)
<br>
Ou podemos visualizar atravéz do software que foi instalado na nossa máquina<br>
![dockerimagens](https://user-images.githubusercontent.com/42754908/142762420-74c901a7-a31b-4d48-9211-6bee8b99feb9.png)<br>

Para executar uma imagem que criamos, precisamos colocar a porta que ira rodar e o nome da imagem: <br>
<b>$ docker run -p 80:8080 atividade-container-eng</b><br>
![runing](https://user-images.githubusercontent.com/42754908/142762472-f35c87cb-ba48-4d91-8cc5-9e612260b359.png)

Ou podemos clicar no botão <b> RUN</b> do  software<br>
![run](https://user-images.githubusercontent.com/42754908/142762437-6d1bacef-6a5d-45f2-8f35-8389376c5900.png)
 
Para visualizar a nossa aplicação, vai em um navegador e digite na url:<br>
http://localhost/<br>
![dados](https://user-images.githubusercontent.com/42754908/142762666-aeb8a446-b64d-404e-b003-8c4ea8a221a6.png)<br>
Nossa aplicação tem uma funcionalidade, na qual, vai gerar uma cnpj  e retornar um cnpj válido.<br>
<h2>Subir a aplicação para o Heroku</h2>
Para criar uma aplicação, podemos ir direto no sites, efetuar o login e depois vai ter uma opção para criar.<br>

![criar aplicação](https://user-images.githubusercontent.com/42754908/142763019-49ab0a0c-62b5-4b7e-a729-940d3ce68042.png)<br>

![create](https://user-images.githubusercontent.com/42754908/142763007-59f19bad-c68f-4c0a-8354-60cfe4dde941.png)<br>

Para vincular o nosso repositorio local com o  heroku, basta digitar: <br>
<b>heroku git:remote -a atividade-container-eng</b>
E depoois digitar o comando os seguintes comandos para subir ele pro heroku:
1. <b> git add *</b><br>
2. <b> git commit -m  "primeiro"</b><br>
3. <b> git push heroku master</b><br>
E o nosso deploy com o container esta finalizado.<br>
Basta acessar o url: https://atividade-container-eng.herokuapp.com/
<h2>Bibliografia </h2>
https://woliveiras.com.br/posts/Criando-uma-imagem-Docker-personalizada/
https://stack.desenvolvedor.expert/appendix/docker/criandoimagem.html
https://imasters.com.br/desenvolvimento/publicando-container-node-no-heroku
