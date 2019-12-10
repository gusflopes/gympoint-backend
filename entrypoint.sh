# entrypoint.sh

echo -e "\e[92mAguardando inicialização do Postgres" &&\

# Sequelize Create Database
echo -e "\e[92Criando o Banco de Dados" &&\
yarn sequelize db:create ${DB_NAME}

# Sequelize Migration
echo -e "\e[92Realizando Migrations" &&\
yarn sequelize db:migrate

# Start server
if [ "$NODE_ENV" = "development" ]; \
	then
    echo -e "\e[92mInicializando Ambiente de desenvolvimento" && \
    yarn dev & \
    yarn queue;  \
	else
    echo -e "\e[92Inicializando Ambiente de produção" && \
    yarn build && \
    pm2 start ecosystem.config.js --no-daemon; \
    # pm2-runtime ecosystem.config.js --only vuttr \
	fi
