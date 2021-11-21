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
![image](https://user-images.githubusercontent.com/42754908/142762468-ac4adabb-5015-41be-8362-0facbdcb6c43.png)

Para visualizamos se foi criado, podemos digitar no terminar:<br>
<b>$ docker images</b> <br>![imagens](https://user-images.githubusercontent.com/42754908/142762410-f59d7a39-8e26-4c77-b5f2-e67cdebed046.png)
<br>
Ou podemos visualizar atravez do software que foi instalado na nossa maquina<br><br>
![dockerimagens](https://user-images.githubusercontent.com/42754908/142762420-74c901a7-a31b-4d48-9211-6bee8b99feb9.png)<br>
Para executar uma imagem que criamos, precisamos colocar a porta que ira rodar e o nome da imagem: <br>
<b>$ docker run -p 80:8080 atividade-container-eng</b><br>
![runing](https://user-images.githubusercontent.com/42754908/142762472-f35c87cb-ba48-4d91-8cc5-9e612260b359.png)






Ou podemos clicar no botão <b> RUN</b>  <br>
![run](https://user-images.githubusercontent.com/42754908/142762437-6d1bacef-6a5d-45f2-8f35-8389376c5900.png)
 

<h2>Bibliografia </h2>
https://woliveiras.com.br/posts/Criando-uma-imagem-Docker-personalizada/
https://stack.desenvolvedor.expert/appendix/docker/criandoimagem.html
