const gulp        = require('gulp'), // Require du package Gulp
      mjml        = require('gulp-mjml'), // Require du package gulp-mjml qui permet à gulp de compiler du MJML en HTML ( https://www.npmjs.com/package/gulp-mjml?activeTab=readme )
      argv        = require('yargs').argv, // Require du package yargs et de son module argv, qui permet de récupérer les arguments d'une commande nodeJS ( --name est l'argument récupéré ici )
      browserSync = require('browser-sync'), // Require du package browserSync, qui va permettre le livePreview
      fileName    = argv.name; // Récupération de l'argument --name

gulp.task('default', ['CompileMjml','browserSync','watch']); // Tâche par défaut qui lance [' La compilation ', ' Le livePreview ', ' Le Watcher ']


gulp.task('CompileMjml', () => { // Tâche qui va permettre la compilation
  return gulp.src(`./MailMJML/${fileName}.mjml`) // On retourne le fichier à compiler
    .pipe(mjml()) // On lance la compilation du MJML en HTML
    .pipe(gulp.dest(`./MailHTML`)) // On définie l'output du résultat de la compilation
});

gulp.task('browserSync', () => { // Tâche qui va permettre le livePreview
    browserSync({ // Initialisation de browserSync
      server:{
        // Définit le dossier root du serveur sur MailHTML
        baseDir: './MailHTML',
        // Permet de mettre le fichier HTML qui résulte de la compilation du fichier MJML qu'on modifie en index
        index: `${fileName}.html`
      }
    })
});

gulp.task('watch', () => { // Tâche qui va permettre d'observer les changements dans :
  gulp.watch(`./MailMJML/${fileName}.mjml`,['CompileMjml']); // Le Fichier MJML et qui va lancer la Tâche de compilation ensuite
  gulp.watch(`./MailHTML/${fileName}.html`,browserSync.reload); // Le Fichier HTML, la compilation remplace le fichier => changement => Refresh de la LivePreview
});
