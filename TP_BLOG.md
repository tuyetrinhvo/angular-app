# Création une application simple de type blog.  
Cette application va afficher les posts du blog, et chaque post aura un bouton permettant de "love it" ou de "don't love it".  Chaque post aura la forme suivante :         
```
post: {  
title: string,  
content: string,  
loveIts: number,  
created_at: Date
} 
```    
    
### En termes de structure :    

- AppComponent contiendra l'array des posts, et il le passera à un component PostListComponent.    

- PostListComponent affichera un PostListItemComponent pour chaque post dans l'array qu'il a reçu.   

- Chaque PostListItemComponent affichera le titre, le contenu et la date de création du post dans le template.   

- Les PostListItemComponent auront des boutons qui permettent d'augmenter et de diminuer le nombre de loveIts — cette modification aura uniquement un effet sur le component, et n'a pas besoin d'être remontée au component parent.    
  

### Quelques astuces:     

- Penser aux différents types de databinding — comment passer des données d'un component à un autre, comment afficher des données dans le template et comment réagir à un événement venant du template.     

- Penser aux directives structurelles comme  `*ngFor`  , et également aux directives par attribut comme  `ngClass`.    

- Penser aux Pipes pour la transformation de données, notamment pour la date.     