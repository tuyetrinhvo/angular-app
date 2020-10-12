# Création une application simple de type blog.  
Création une application simple qui recense les livres que nous avons chez nous, dans notre bibliothèque.  Nous pouvons ajouter une photo de chaque livre.  L'utilisateur devra être authentifié pour utiliser l'application.               

Il faut d'abord réfléchir à la construction de l'application:     
- Quels seront les components dont nous aurons besoin ?        
- Les services ?      
- Les modèles de données ?   
    
### Structure de l'application :    

- L'application nécessite l'authentification.  Il faudra donc un component pour la création d'un nouvel utilisateur, et un autre pour s'authentifier, avec un service gérant les interactions avec le backend.    
- Les livres pourront être consultés sous forme d'une liste complète, puis individuellement.  Il faut également pouvoir ajouter et supprimer des livres.  Il faudra donc un component pour la liste complète, un autre pour la vue individuelle et un dernier comportant un formulaire pour la création/modification.  Il faudra un service pour gérer toutes les fonctionnalités liées à ces components, y compris les interactions avec le serveur.    
- Pour les modèles de données, il y aura un modèle pour les livres, comportant simplement le titre, le nom de l'auteur et la photo, qui sera facultative.    
- Il faudra également ajouter du routing à cette application, permettant l'accès aux différentes parties, avec une guard pour toutes les routes sauf l'authentification, empêchant les utilisateurs non authentifiés d'accéder à la bibliothèque.    
- Il faut créer également un component séparé pour la barre de navigation afin d'y intégrer une logique séparée.     

### A installer :     

```
npm install firebase --save    
```

### Deployement :
[Angular Deployement Guide](https://angular.io/guide/deployment)

---

### URL http://localhost:4200/books