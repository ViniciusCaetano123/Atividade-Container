<h2>Criar Container com Docker</h2>
<p>Para criar um container no Docker, primeiro precisamos criar um arquivo no projeto que se chame <b> Dockerfile </b>e depois configurar ele.</p>

![cokerfile](https://user-images.githubusercontent.com/42754908/142747085-ea784370-1f61-475e-86b4-27e5592d0e5f.png)
<p><b>FROM</b> - Definindo a imagem que vai ser utlizada, que seria alphine-node</p>
<p><b>WORKDIR></b> - Defenindo qual pasta que o docker vai trabalhar</p>
<p><b>COPY</b> - Copiar os arquivos para a pasta, na qual foi definida como parametro no  workdir </p>
<p><b>RUN</b> -  Rodar alguem comando que foi definido como parametrno, no nosso caso, o npm install</p>
<p><b>EXPOSE</b> -  Expor a porta do nosso servidor web</p>
<p><b>CMD</b> -  Comando para inicializar o servidor</p>
Para criamos uma imagem em Docker, precisamos informar o nome do nossa imagem e o diretorio no comando:
docker build -t atividade-container-eng .
Para visualizamos se foi criado, podemos digitar no terminar:
<b>docker images</b>
<h2>Bibliografia </h2>
https://woliveiras.com.br/posts/Criando-uma-imagem-Docker-personalizada/
https://stack.desenvolvedor.expert/appendix/docker/criandoimagem.html
