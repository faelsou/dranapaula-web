# Etapa 1: Build da aplicação
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Servir com Nginx
FROM nginx:stable-alpine

# Remove o site default do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos buildados da etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia configuração customizada do nginx (opcional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

