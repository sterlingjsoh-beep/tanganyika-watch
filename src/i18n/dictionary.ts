// Single source of truth for every visible UI string.
// Add a key here once — both FR and EN renderings stay in sync automatically.

export type Language = "fr" | "en";

export const dictionary = {
  // Brand / hero
  brand: { fr: "Tanganyika Mining Watch", en: "Tanganyika Mining Watch" },
  tagline: {
    fr: "Surveillance Satellite + IA Contre l'Orpaillage Illégal",
    en: "Satellite + AI Monitoring Against Illegal Gold Mining",
  },

  // Language switch
  langLabel: { fr: "Langue", en: "Language" },
  langFr: { fr: "Français", en: "French" },
  langEn: { fr: "Anglais", en: "English" },

  // Acquisition / Analysis bands
  acquisitionBand: {
    fr: "Acquisition : Planet • Sentinel • ICEYE",
    en: "Acquisition: Planet • Sentinel • ICEYE",
  },
  analysisBand: {
    fr: "Analyse : Détection de Changement • Geofencing • Classification IA",
    en: "Analysis: Change Detection • Geofencing • AI Classification",
  },

  // Map annotations
  mapIllegalSites: { fr: "Sites d'Orpaillage Illégal", en: "Illegal Mining Sites" },
  mapIllegalRoads: { fr: "Nouvelles Routes Illégales", en: "New Illegal Roads" },
  mapLegalConcessions: { fr: "Concessions Minières Légales", en: "Legal Mining Concessions" },
  mapLake: { fr: "Lac Tanganyika", en: "Lake Tanganyika" },

  // Satellite / drone labels
  satPlanet: { fr: "PlanetScope CubeSat", en: "PlanetScope CubeSat" },
  satIceye: { fr: "ICEYE SAR Radar", en: "ICEYE SAR Radar" },
  satAcquisition: { fr: "Acquisition de Données", en: "Data Acquisition" },
  droneFeed: { fr: "Site Illégal Détecté", en: "Illegal Site Detected" },

  // Dashboard chrome
  dashboardTitle: { fr: "Tableau de Bord — Web & Mobile", en: "Dashboard — Web & Mobile" },

  // Change detection panel
  changeDetectionTitle: {
    fr: "Analyse de Changement de Terrain",
    en: "Land Change Detection Analysis",
  },
  before: { fr: "Avant (2022)", en: "Before (2022)" },
  after: { fr: "Après (2024)", en: "After (2024)" },

  // Classification chart
  chartTitle: {
    fr: "Orpaillage vs Agriculture",
    en: "Gold Mining vs Agriculture",
  },
  chartMining: { fr: "Orpaillage", en: "Gold Mining" },
  chartAgriculture: { fr: "Agriculture", en: "Agriculture" },

  // Geofencing alert
  geofencingTitle: { fr: "Geofencing", en: "Geofencing" },
  alertHeader: { fr: "ALERTE GEOFENCING", en: "GEOFENCING ALERT" },
  alertLine1: {
    fr: "Activité illégale détectée",
    en: "Illegal activity detected",
  },
  alertLine2: { fr: "hors concession", en: "outside concession" },
  alertLine3: { fr: "(Zone de Restriction)", en: "(Restricted Zone)" },

  // Buttons
  btnSendAlert: { fr: "ENVOYER ALERTE SAEMAPE", en: "SEND SAEMAPE ALERT" },
  btnGenerateReport: { fr: "GÉNÉRER RAPPORT", en: "GENERATE REPORT" },

  // Field team caption
  fieldTeam: {
    fr: "Équipes CAMI & Police nationale en intervention",
    en: "CAMI & National Police teams responding",
  },
} as const;

export type DictKey = keyof typeof dictionary;
