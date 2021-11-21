<h2>Criar Container com Docker</h2>
<p>Para criar um container no Docker, primeiro precisamos criar um arquivo no projeto que se chame <b> Dockerfile </b>e depois configurar ele.</p>

![cokerfile](https://user-images.githubusercontent.com/42754908/142747085-ea784370-1f61-475e-86b4-27e5592d0e5f.png)
<p><b>FROM</b> - Definindo a imagem que vai ser utlizada, que seria alphine-node</p>
<p><b>WORKDIR></b> - Defenindo qual pasta que o docker vai trabalhar</p>
<p><b>COPY</b> - Copiar os arquivos para a pasta, na qual foi definida como parametro no  workdir </p>
<p><b>RUN</b> -  Rodar alguem comando que foi definido como parametrno, no nosso caso, o npm install</p>
<p><b>EXPOSE</b> -  Expor a porta do nosso servidor web</p>
<p><b>CMD</b> -  Comando para inicializar o servidor</p>
<p> Para criamos uma imagem em Docker, precisamos informar o nome do nossa imagem e o diretorio no comando:<br>
<b>$docker build -t atividade-container-eng .</b></p>

Para visualizamos se foi criado, podemos digitar no terminar:<br>
<b>$ docker images</b> <br>![imagens](https://user-images.githubusercontent.com/42754908/142761896-a0b56c72-29d5-4cd9-b000-4e43fd43e2af.png)
<br>
Ou podemos visualizar atravez do software que foi instalado na nossa maquina<br>
![dockerimagens](https://user-images.githubusercontent.com/42754908/142761986-9a9366e4-ccbd-42c1-82b9-2af68c36b10d.png)
<p>Para executar uma imagem que criamos, precisamos colocar a porta que ira rodar e o nome da imagem: <br>
<b>$ docker run -p 80:8080 atividade-container-eng</b><br>
![runing](https://user-images.githubusercontent.com/42754908/142762288-d578d27d-4959-4a1c-84bd-b8a4afe5d3e8.png)
Ou podemos clicar no botão <b> RUN</b>  <br>
 ![run](https://user-images.githubusercontent.com/42754908/142762379-c3f43817-4473-4f34-a7e0-9e520ac017b1.png)
 
</p>
<h2>Bibliografia </h2>
https://woliveiras.com.br/posts/Criando-uma-imagem-Docker-personalizada/
https://stack.desenvolvedor.expert/appendix/docker/criandoimagem.html
