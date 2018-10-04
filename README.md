# Environnement de développement avec Gulp et le framework MJML
### Auto-compilation + Live Preview à la sauvegarde

## Les Pré-requis à installer :
### Veuillez installer les pré-requis ci-dessous dans l'ordre

- Installer NodeJS v8.x.x ou v10.x.x
- Ouvrez votre terminal et tapez la commande suivante :
  - npm install -g nodemon gulp dotenv cross-env mjml
- Allez dans la racine de l'environnement de développement avec votre terminal et tapez la commande suivante :
  - npm install
- Une fois la tâche de NodeJS accomplie dans ça totalité vous pouvez suivre les instructions suivantes.

## Comment l'utiliser ?

Alors tout d'abord, dans l'arborescence, ce qui va nous intéresser c'est les dossiers MailHTML et MailMJML.

Nous allons commencer par allez dans notre dossier MailMJML et créer un fichier MJML s'il n'y en a pas,
ensuite, dans le terminal en étant à la racine du projet, nous allons taper la commande : npm run build -- --name=le_nom_du_fichier_MJML (Sans l'extension .mjml).

Normalement si tout c'est bien passé, un navigateur s'est ouvert, c'est la "Live-Preview" du fichier HTML compilé, gardez votre terminal ouvert et
vous pouvez éditer le fichier MJML, à chaque sauvegarde, une compilation et un refresh de la vue s'exécutera.

### POINT IMPORTANT
Le dossier "assets" avec les ressources comme les images, doit être mis dans le dossier MailHTML, MJML fait les liens des assets comme ceci : /assets/...

### Petite parenthèse
Si vous voulez modifier un autre fichier, il suffit de faire CTRL+C dans votre terminal puis retaper la commande npm run build -- --name=le_nom_du_fichier_MJML (Sans l'extension .mjml).

### Fonctionnement de la configuration gulp
Le fichier Gulpfile contient toutes la configuration, j'ai commenté le code pour qu'il soit compréhenssible par tous.

##### Auteur : Wilquin Logan
