docker network create -d bridge test-net  //   创建一个新的 Docker 网络（test-net网络）

docker network ls   //   查看网络列表

docker build -t (镜像名字)  //  根据当前路径下的Dockerfile文件构建镜像

docker run -d（后台运行）-p 3000:8000(把容器里8000端口映射到主机的3000端口) --network test-net(加入test-net网络，其他容器如果也使用这个网络的话，可以进行互联) --name (容器名字) (镜像名字)   //  根据镜像构建容器

docker run -d -v ~/nginx/conf/conf.d:/etc/nginx/conf.d -v ~/nginx/www:/var/www --name nginx-test nginx  //  启用nginx容器并使用 -v 把主机里的~（root）/nginx/conf/conf.d目录挂载到容器里的/etc/nginx/conf.d目录,并且主机里这个目录修改或增加的内容会直接更新到容器这个目录，第二个-v一样意思


docker-compose up -d  //  使用Docker Compose 根据当前路径下的docker-compose.yml 文件构建镜像和容器（这个的好处是会帮你把所关联的镜像加入同一个网络里，让他们互联）

docker exec -it ceshi_web_1 /bin/bash    // 进入容器

docker images  //  查看镜像

docker ps -a  //  查看所有容器

docker rm -f (容器名字或id)   //  删除容器

docker rmi (镜像名字或id)   //  删除镜像



xiaoben目录里的shellceshi.sh文件是为了让可以使用pm2管理node但容器不停止，因为直接使用pm2会导致容器停止,使用node server.js可以让容器不停止，shellceshi.sh文件避免还要切换到容器里执行pm2


ceshi/tmp目录的 mysql.js 和 redis.js 分别是mysql和redis连接,域名 == 容器名字

连接第一次连接mysql时可能会爆Client does not support authentication protocol requested by server错误，可切换到mysql容器里执行
          mysql -uroot -p   
          ALTER USER ‘root’@’%’ IDENTIFIED WITH mysql_native_password BY ‘123456’;   
          flush privileges;
