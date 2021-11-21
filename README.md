<h3>Criar Container com Docker</h3>
<p>Para criar um container no Docker, primeiro precisamos criar um arquivo no projeto que se chame <b> Dockerfile </b>e depois configurar ele.</p>

![dockerfile](https://user-images.githubusercontent.com/42754908/142746613-7891ac9c-6213-4b0a-b9ba-334e8e42116b.png)
<p>FROM - Definindo a imagem que vai ser utlizada, que seria alphine-node</p>
<p>WORKDIR - Defenindo qual pasta que o docker vai trabalhar</p>
<p>COPY - Copiar os arquivos para a pasta, na qual foi definida como parametro no  workdir </p>
<p>RUN -  Rodar alguem comando que foi definido como parametrno, no nosso caso, o npm install</p>
<p>EXPOSE -  Expor a porta do nosso servidor web</p>

<h3>Bibliografia </h3>
https://woliveiras.com.br/posts/Criando-uma-imagem-Docker-personalizada/
https://stack.desenvolvedor.expert/appendix/docker/criandoimagem.html
