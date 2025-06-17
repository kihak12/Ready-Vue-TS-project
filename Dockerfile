# Étape de production

FROM nginx:alpine
# Définir le répertoire de travail
WORKDIR /app

# Copier le dossier de build vers le dossier NGINX pour servir les fichiers statiques
COPY /dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Commande par défaut
CMD ["nginx", "-g", "daemon off;"]