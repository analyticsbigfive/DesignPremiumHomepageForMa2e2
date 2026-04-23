# MA2E — Site Web Institutionnel

Refonte premium du site institutionnel de la **Mutuelle des Agents de l'Eau et de l'Électricité (MA2E)**.

## Aperçu

Site multi-pages en React/Babel (SPA), inspiré d'une esthétique éditoriale moderne.

**Pages incluses :**
- Accueil (hero plein écran, services, présentation, plateforme, actualités)
- La mutuelle (histoire, missions, gouvernance, équipe)
- Nos services (épargne, crédit, immobilier, E-MA2E)
- Actualités & événements
- FAQ interactive
- Contact (formulaire validé, coordonnées réelles)
- Documents (centre de téléchargement)
- Liens utiles (partenaires & tutelles)
- Mentions légales / CGU / Données personnelles / Cookies

## Technologies

- React 18 + Babel Standalone (JSX inline)
- Plus Jakarta Sans (titres) + Inter (corps)
- CSS pur, zéro dépendance externe sauf polices Google

## Structure des fichiers

```
index.html      → Point d'entrée, CSS global, chargement des scripts
shared.jsx      → Logo, icônes, Nav, FlashBar, Footer (composants partagés)
home.jsx        → Page d'accueil (Hero, Services, About, Platform, News)
pages-a.jsx     → La Mutuelle, Services détaillés, Actualités, FAQ
pages-b.jsx     → Contact, Documents, Liens utiles, Mentions légales
app.jsx         → Routeur SPA (hash-based navigation)
```

## Identité visuelle

| Couleur | Hex | Usage |
|---|---|---|
| Vert principal | `#00A651` | Marque, accents, CTAs secondaires |
| Vert foncé | `#003d1f` | Titres, surfaces sombres, hero |
| Orange | `#F7941D` | CTAs principaux, flash info, highlights |
| Crème | `#f5f5f0` | Arrière-plans de sections |

## Déploiement GitHub Pages

```bash
# Settings → Pages → Source: main → / (root) → Save
# Accessible sur : https://jhouedanou.github.io/DesignPremiumHomepageForMa2e2
```

## Informations réelles intégrées

- **7 335** adhérents actifs
- **2,4 Mds FCFA** de crédits accordés
- **14 ans** d'activité (création sept. 2006)
- Coordonnées : `(+225) 27 21 23 64 87` — Avenue Houdaille, Immeuble SIDAM 6ème étage, Plateau, Abidjan

---

Développé avec [Claude](https://claude.ai) · MA2E © 2026
