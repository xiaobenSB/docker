docker build -t (镜像名字)  //  根据当前路径下的Dockerfile文件构建镜像

docker run -d（后台运行）-p 3000:8000(把容器里8000端口映射到主机的3000端口) --name (容器名字) (镜像名字)   //  根据镜像构建容器


docker-compose up -d  //  使用Docker Compose 根据当前路径下的docker-compose.yml 文件构建镜像和容器（这个的好处是会帮你把所关联的镜像加入同一个网络里，让他们互联）

docker exec -it ceshi_web_1 /bin/bash    // 进入容器

docker images  //  查看镜像

docker ps -a  //  查看所有容器

docker rm -f (容器名字或id)   //  删除容器

docker rmi (镜像名字或id)   //  删除镜像
