# Script PowerShell pour générer les Issues GitHub - Backend
# Nécessite GitHub CLI (gh) installé et authentifié (`gh auth login`)

Write-Host "Vérification de l'authentification GitHub CLI..."
gh auth status
if ($LASTEXITCODE -ne 0) {
    Write-Host "Veuillez vous connecter avec 'gh auth login' avant d'exécuter ce script." -ForegroundColor Red
    exit
}

$labels = @(
    @{name="Critique"; color="b60205"; description="Priorité critique"},
    @{name="Haute"; color="d93f0b"; description="Priorité haute"},
    @{name="Moyenne"; color="fbca04"; description="Priorité moyenne"},
    @{name="Faible"; color="0e8a16"; description="Priorité faible"},
    @{name="API"; color="1d76db"; description="Développement API REST"},
    @{name="Performance"; color="5319e7"; description="Amélioration des performances"},
    @{name="Base de données"; color="c2e0c6"; description="Modifications du schéma de la BDD"},
    @{name="Paramètres"; color="bfdadc"; description="Configuration et paramètres système"}
)

Write-Host "Création des labels..."
foreach ($label in $labels) {
    gh label create $label.name --color $label.color --description $label.description --force | Out-Null
}

Write-Host "Création des Issues pour le Backend..."

$body1 = @'
## Contexte métier
Actuellement, le frontend appelle 7 API distinctes en parallèle pour construire le tableau de bord, ce qui nuit aux performances.

## Description
Créer un contrôleur `DashboardController` avec un endpoint dédié retournant toutes les métriques en une seule requête JSON.

## Critères d'acceptation
- [ ] L'endpoint `GET /api/v1/stats/dashboard` est fonctionnel.
- [ ] La réponse est correctement typée (TypeScript) et sécurisée selon les rôles (Admin Tech vs Admin RH).
- [ ] Les requêtes à la base de données sont optimisées (COUNT, etc.).

## Complexité estimée
Faible

## Dépendances
- Débloque l'intégration côté Frontend.
'@

gh issue create --title '[Feature] Créer l endpoint /api/v1/stats/dashboard' --label 'API,Performance,Critique' --body $body1

$body2 = @'
## Contexte métier
Le formulaire de contact utilise un enum statique (`MessageType`). L'Administrateur doit pouvoir ajouter dynamiquement des motifs de contact (ex: Plainte).

## Description
Transformer l'enum `MessageType` en une véritable table `MessageSubject` et exposer une API CRUD.

## Critères d'acceptation
- [ ] L'entité `MessageSubject` est créée (id, name, isActive).
- [ ] L'entité `Message` référence `MessageSubject` par une clé étrangère au lieu de l'enum.
- [ ] Les endpoints CRUD `/api/v1/message-subjects` sont fonctionnels et sécurisés pour l'Admin Tech.

## Complexité estimée
Moyenne

## Modules concernés
- `src/modules/contact`
'@

gh issue create --title '[Feature] Créer la table et l API MessageSubject' --label 'Base de données,API,Haute' --body $body2

$body3 = @'
## Contexte métier
L'adresse email qui reçoit les requêtes de contact est figée dans le fichier `.env` (`MAIL_TO`), nécessitant un développeur pour la modifier.

## Description
Utiliser les paramètres globaux (table `Settings`) pour définir dynamiquement l'email de notification de la plateforme.

## Critères d'acceptation
- [ ] Le module Mail lit l'adresse de destination depuis l'entité `Settings` (champ `emailSupport` ou équivalent).
- [ ] Fallback mis en place si la DB n'a pas de paramètres enregistrés.

## Complexité estimée
Faible
'@

gh issue create --title '[Feature] Dynamiser la configuration MAIL_TO' --label 'Paramètres,Haute' --body $body3

$body4 = @'
## Contexte métier
L'Administrateur RH doit pouvoir gérer (créer, modifier) les départements de l'ONG (ex: Logistique, Finances) sans faire appel à un développeur. Actuellement, c'est une simple chaîne de caractères par défaut.

## Description
Créer une entité `Department` et ses API, puis relier l'entité `TeamMember` à ce département.

## Critères d'acceptation
- [ ] Entité `Department` créée.
- [ ] L'entité `TeamMember` dispose d'une relation vers `Department`.
- [ ] API CRUD `/api/v1/departments` protégées pour `ADMIN_RH`.

## Complexité estimée
Moyenne
'@

gh issue create --title '[Feature] Créer la table et l API Department' --label 'Base de données,API,Haute' --body $body4

$body5 = @'
## Contexte métier
L'Administrateur RH doit pouvoir définir librement les types de contrats (ex: CDI, CDD, Prestataire). Actuellement, c'est un enum statique.

## Description
Créer une entité `CareerType` et mettre à jour la relation dans `Career`.

## Critères d'acceptation
- [ ] Entité `CareerType` et relation avec `Career` créées.
- [ ] Enumération statique supprimée.
- [ ] API CRUD `/api/v1/career-types` créées.

## Complexité estimée
Moyenne
'@

gh issue create --title '[Feature] Créer la table et l API CareerType' --label 'Base de données,API,Moyenne' --body $body5

$body6 = @'
## Contexte métier
Tout comme les types de contrats, les types de candidatures (bénévolat, stage, emploi) sont hardcodés.

## Description
Utiliser la nouvelle table `CareerType` ou créer `ApplicationType` pour les lier aux `Applications`.

## Critères d'acceptation
- [ ] La création de candidature côté public prend l'ID du type dynamique.
- [ ] Refonte de l'entité `Application`.

## Complexité estimée
Moyenne
'@

gh issue create --title '[Feature] Créer la table et l API ApplicationType' --label 'Base de données,API,Moyenne' --body $body6

$body7 = @'
## Contexte métier
Les couleurs et icônes des Services sont des classes CSS Tailwind stockées en DB (`bg-emerald-500`). Un utilisateur non-technique ne peut pas les modifier aisément.

## Description
Remplacer ces classes par des champs métier propres : `colorHex` et `iconName`.

## Critères d'acceptation
- [ ] Mettre à jour l'entité `Service` avec les nouveaux champs.
- [ ] Supprimer les champs `bgClass` et `accentClass`.

## Complexité estimée
Faible
'@

gh issue create --title '[Feature] Rendre les attributs visuels des Services dynamiques' --label 'Base de données,API,Faible' --body $body7

Write-Host "✅ Création des Issues Backend terminée !" -ForegroundColor Green
