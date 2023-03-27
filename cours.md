# Dev web

Ceci est une commande :
``` shell
    mdkir test
```

Ceci est du code : 
```javascript
const test = 'Hello World';
```

## Git

La commande 
```
    git init 
```
permet  d'initialiser un depot GIT ou le repository (le dossier qui contient les données que l'on souhaite versionner) dans le répertoire courant. Cela se traduit par la présence d'un dossier cache `.git/`. Elle retourne :
```
Initialized empty Git repository in C:/Users/Mywin/BTS/.git/
```

Pour vérifier l'état de votre depot GIT ( ajout et l'édition d'un fichier ) utiliser la commande : 
```
    git status
```
Bien penser à se mettre à la racine du projet

Pour ajouter un fichier au suivi : 
```
    git add 
```
Il faut mettre à la suite le fichier qu'on veut ajouter. Si on veut tous ajouter on mets . ou *.

Commit : permet de sauvegarder un ou plusieurs fichiers
```
    git commit 
```
On mets `i` et en dessous il y a écrit "INSERT" et on peut mettre notre message. Une fois le message écrit, appuyer sur echap esuite `:q`


Pour configurer son git 
```
    git config
```
On aura la liste de tous les options possibles. Pour configurer le git pour qu'il soit connecté à notre github :
```
    git config --global user.name "Jonh Doe"
    git config --global user.email "jDoe@gmail.com"
```

Maintenant on va regarder l'historique des commits avec :
```
    git log
```
<image src='./assets/cycle_de_la_vie_fichier.png'> 

- Untraked (non suivi) : quand le fichier vient d'être créer

- Unmodified : le ficher est dans le git mais n'est pas modifié

- Modified : le fichier est modifié

- Staging area : zone dans lquelle je vais accumuler des fichiers nouvellement créés pour un commit 

Pour sortir de la phase staged : 
```
    git commit -m "first commit"
```
Pour mettre notre dépot sur GitHub :

Clé ssh ? Principe : échanger les carte d'identité publique pour donner l'accès // permet d'identifier une machine 

Pour ajouter notre depot sur GitHub
```
    git remote add origin git@github.com:Kazeynma/Cours-feb.git

```

Pour voir où est-ce que notre depot est :
```
    git remote -v
```

Si jamais on se trompe et qu'on veut mettre url :
```
    git remote rm origin
```

Pour avoir des données qu'on ne veut pas mettre sur github car c'est secret, faire un fichier `.gitignore`
=> tous ce qu'on va lister (mettre le nom des fichiers que l'on veut masquer) va être ignorer du tracking GIT

Pour récupérer le code d'un github :
```
    git pull 
``` 
Ensuite on mets le lien du repository que l'on veut récupérer

# Commande bash

Création d’un dossier en cmd
Linux ou (git bash) :

- `ls` : pour voir les fichiers dans le dossier actuel
- ⇒ `mkdir nom_dossier` : créer un dossier (make a dir)
- ⇒ `cd nom_dossier` : pour aller dans le dossier
- ⇒ `code .` : permet d’aller sur vscode

Autres commandes :
- `pwd` : le chemin depuis la racine
- `~` : raccourci vers le dossier utilisateur
- `ls` : permet d’afficher les fichiers
    - `ls -la` : permet d’afficher les fichiers cachés / fichiers commençant par un .
- `rm -rf` : applique à tous les fichiers jusqu’au sous-dossier
- `cd` : répertoire utilisateur
- `cat` : permet d’afficher le contenu d’un fichier dans le terminal


# HTML & CSS

## Live Server 
Permet de voir en temps réel les changements fait sur notre page 

## balises 
*balises d'ouverture et de fermeture (pas toutes)*

- Permet de faire une ligne 
```html 
    <hr>
```

Chaque éléments HTML peut avoir un ou plusieurs attributs :
``` html 
    <p id="test"> Ceci est un paragraphe </p>
    <img src="exempleURl" alt="exemple" title="ceci est un exemple"> 
```
L'attribut se situe toujours dans la balise ouvrante.


<strong>site de documentation pratique : https://developer.mozilla.org/en-US/</strong>

- Faire des commentaires en HTML :
```html
    <!-- Ceci est un commentaire -->
```

## Concept de parent/enfant
L'élément <html> est l'élément racine des pages html (le plus haut parent).

Une balise enfant est celle qui se situe à l'intérieur d'une autre balise (son parent)

## Affichage sur une page html
Tous ce qu'on veut afficher sans les balises <body> 

Terme conteneur : on peut placer du texte, des images, des formulaires, des liens, des tableaux.
Les conteneurs servent aussi à structurer les pages.


### div
L'élement `<div>` sert à structurer notre page web, c'est un conteneur.

### span
L'élément `<span>` est souvent utilisé pour avoir des divisions au sein du texte. 

### header
L'élément `<header>` permet d'avoir une zone pour les entêtes.

### footer
l'élement `<footer>` permet d'avoir une zone pied de page.

### nav
L'élément `<nav>` est souvent dans le header et sert à la navigation. Elle peut également être en nagivation secondaire dans le `<footer>`

### main 
L'élément `<main>` permet d'indiquer le contenu principal de la page. Elle doit être **unique**.
Elle ne peut pas être utilisée dans les balises `<articles>`, `<aside>`, `<footer>`, `<header>` ou `<nav>`

### section 
L'élément `<section>` permet de regrouper des éléments partageant la même thématique. Permet d'avoir un contenu structuré.

### les titres 
Caractérisé par les balises `<h1>`, on peut changer le chiffre après le h et ça corresponds à l'importance décroissante du titre

### les listes
``` html
    <ul>
        <li></li>
    </ul>
```

Liste ordonnées
``` html
    <ol start="4" type="I">
        <li></li>
    </ol>
```

Tableau :
``` html
    <pre>
        1950    2003    2021
        oui     non     oui
    </pre>
```

### créer des liens et des routes
``` html
    <a href="page2.html">Atteindre la page 2</a>
    <a href="google.com">Google</a>
```
Le premier lien est le lien vers une autre page de notre site (cette page est dans notre dossier)

**Ce qu'on peut faire avec** :
```html
    <a href="#lien-interne">Atteindre le lien interne</a>
    ...
    <div id="lien-interne">Je souhaite atteindre cette div<div>
```
On peut rediriger vers une partie de notre site. Ou encore :
```html
    <a href="mailto:test@test.fr">mail</a>

```
On peut faire pareil avec les numéro de téléphone ainsi que des liens de télééchargement.

### img
Les balises `<img>` permettent d'insérer des images à partir de leur url. Il prends en compte plusieurs attribut comme `alt` qui est un texte alternatif au cas où l'image ne s'afficherait pas

### les formulaire en html
Les formulaire sont insérées par les balises `<form>`. Il est accompagné de bouton de vlaidation.

Voici les attributs qu'on peux lui donner : 
- 


```html
    <form>
        <p>
            <label for="nom">Veuillez entrez votre nom</label>
            <input type="text" name="nom" id="nom">
        </p>
    </form>
```

## Le role du CSS
On peut mettre le style en attribut dans les balises. 

```html
    <style>
        .test{
            font-style : italic
        }
    </style>
```

on peut mettre du css dans l'html dans la balise `<head>`. En lien avec l'attribut `class` d'une balise.

## fichier css
Faire des commentaires : 
```CSS
    /* Ceci est un commentaire */
```

On fait le lien entre la page html et le css avec les *selecteurs*

```
    selecteur {
        props: valeur
    }
```

Il y a plusieurs règles concernant les selecteurs.

Plusieurs possibilités:
```CSS
    test {

    }
```

Permet de s'appliquer aux enfants

``` css
    .columns > * {

    }
```

## Flex
Site aide : https://css-tricks.com/snippets/css/a-guide-to-flexbox/

La flexbox est un container, elle est donc parent. Pour faire en sorte que le container soit une flexbox, il faut mettre : 
``` css
    display : flex;
```

On peut choisir l'organisation des items, donc des enfants présents dans la flexbox avec le paramètre : 
``` css
    justify-content
```
Elle peut prendre en paramètre : `center`, `space-between`,`space-around`,`space-evenly`,`flex-end`,`flex-start`, `start`,`end`,`right`,`left`,

On peut également mettre donner en paramètres :
``` css
    align-items
```
Elle prends en paramètres : 
`stretch`, `flex-start/start/self-start`, `flex-end/end/self-end`, `center`, `baseline`

On peut donner du style au container mais également aux items à l'intérieur du container.
Par exmeple, on a les paramètres : `flex-shrink` ou `flex-grow` qui influence sur la taille des items les un par rapport aux autres.
- flex-grow : peut être utilisé pour que l'item prenne toute la place 
```css
    .items {
        flex-grow : 1;
    }
```
l'axe principal et le cross-axis et ça change en fonction de l'orientation

Quand on utilise des attributs, se poser la question :
- si ça un effet sur le container (la flexbox) ou les items à l'intérieur (ses enfants)


Pour la prochaine fois : 
xampp ou docker à installer


## Taille 
- rem : taille en fonction de la police du navigateur
- % : permet de gérer la taille en fonction du parent


# Cours de mars
### Javascript
Javascript a été inventé comme langage de script pour les sites web ⇒ fait pour manipuler le dom 

⇒ Ce n’est pas un langage fortement typé 

<aside>
💡 à chaque fois qu’on écrit un bloc de code ⇒ sauvegarder et exécuter pour voir si notre programme fonctionne et savoir détecter les erreurs

</aside>

Types de variables :

- string
- number (tous les types de nombre, integer, float etc….)
- boolean
- array
- object

<aside>
💡 si on veut faire une application monétaire, ne pas prendre js car pas de type précis pour les nombres et risque de perte de donnée

</aside>

- `typeof` : pour avoir le type de la variable

**typescript** : surcouche du js 

pour les chaînes de caractères si on veut écrire sur plusieurs lignes ⇒ `Hello

World`
Si on veut mettre une apostrophe dans une chaîne de caractère délcarée entre apostrophe ⇒ \’ pour dire qu’on veut l’afficher comme une chaîne de caractère

**Les propriété js peuvent modifier la valeur ou retourner une copie de la valeur modifié**

Le type de variable retourner après :

Méthode for ⇒ (let index = 0; index < array.length; index++) || (initialisaiton; condition; incrémentation) || for (variable in object) || for (variable of iterable) ⇒ pour les arrays)

opérateur ternaire ⇒ condition ? siVraie : siFausse

do…while ⇒ while (tant que) ⇒ elle s’exécute au moins une fois avant qu’on vérifie la condition 

fonction synthaxe : const soustraire = (a,b) ⇒ a - b (le return est implicite)

<hr>

## Consignes pour cette semaine
Ecrire en CamelCase

Penser à mettre des points-virgules (soit on les mets de partout, soit on les mets nul part)

**faire attention avec le mot clé ‘var’ (pas le droit d’utiliser dans le cours)**

⇒ utilisation le plus possible de **const**