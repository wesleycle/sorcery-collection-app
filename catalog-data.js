/* catalog-data.js
 * Catalogo REAL gerado a partir das imagens encontradas em images/ (pasta fornecida
 * pelo usuario, sincronizada via OneDrive) - cobre Alpha, Beta, Arthurian Legends,
 * Gothic, Dragonlord e promocionais (1572 cartas unicas, uma entrada por nome+set,
 * priorizando a variante de booster "-b-" quando existe mais de uma edicao/promo).
 *
 * ENRIQUECIDO a partir da API publica do fourcores.xyz (https://fourcores.xyz/api/cards):
 * 1411 de 1572 cartas (89%) tem tipo/raridade/custo/elementos/
 * threshold/power/life/keywords/effectText/flavorText/artist REAIS e verificados
 * (metadataVerified: true). As 161 cartas restantes - majoritariamente Sites
 * incolores, Avatares e algumas cartas de Arthurian Legends/Gothic/Promo nao
 * encontradas na API - permanecem com dados de PLACEHOLDER (metadataVerified: false)
 * e podem ser corrigidas depois colando um catalogo mais completo em
 * Configuracoes > Atualizar Catalogo.
 *
 * window.SEED_CATALOG e copiado para os dados de trabalho (data.json/localStorage)
 * apenas no primeiro uso do app. Depois disso, o catalogo salvo pelo usuario e a
 * fonte da verdade.
 */
(function () {
  "use strict";

  window.SEED_CATALOG = [
  {
    "id": "alp-abundance",
    "name": "Abundance",
    "set": "Alpha",
    "type": "Aura",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Each affected site provides one additional mana.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "alp-abundance-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-accursed_albatross",
    "name": "Accursed Albatross",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nWhen a unit kills Accursed Albatross, kill that unit's other allied minions it's nearby.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "alp-accursed_albatross-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-adept_illusionist",
    "name": "Adept Illusionist",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Spellcaster\n\nTap → Search your hand, cemetery, or spellbook for another Adept Illusionist and summon it nearby. Shuffle if needed.",
    "flavorText": "",
    "artist": "Jeff Easley",
    "imagePath": "alp-adept_illusionist-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-albespine_pikemen",
    "name": "Albespine Pikemen",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Strikes first while attacking.",
    "flavorText": "\"It serves him right who runs into the long reach of a pikeman.\" — Grimmelshausen",
    "artist": "Andrea Modesti",
    "imagePath": "alp-albespine_pikemen-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-all_terrain_vestments",
    "name": "All Terrain Vestments",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Burrowing",
      "Submerge",
      "Voidwalk"
    ],
    "effectText": "Bearer has Burrowing, Submerge, and Voidwalk, if it's a minion.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "alp-all_terrain_vestments-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-alvalinne_dryads",
    "name": "Alvalinne Dryads",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "Älvalinne Dryads provide (1).",
    "flavorText": "How fair to greet, on misted morn\nA daint parade of dew-kissed bloom\nNow deep, inspire! A bliss reborn\nOf air faint lade with sweet perfume",
    "artist": "Elvira Shakirova",
    "imagePath": "alp-alvalinne_dryads-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-amazon_warriors",
    "name": "Amazon Warriors",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 5,
    "life": 5,
    "keywords": [],
    "effectText": "",
    "flavorText": "\"Tonight, we keep watch. And tomorrow, before the dawn, we shall arm ourselves in our weapons, and beside their hollow vessels waken bitter Ares.\" — Homer",
    "artist": "Elvira Shakirova",
    "imagePath": "alp-amazon_warriors-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-amethyst_core",
    "name": "Amethyst Core",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Provides (A) and (1) to its controller.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "alp-amethyst_core-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-ancient_dragon",
    "name": "Ancient Dragon",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 3,
      "water": 0
    },
    "power": 6,
    "life": 6,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nTap → Deal 4 damage to each other unit at target location nearby.",
    "flavorText": "",
    "artist": "Lindsey Crummett",
    "imagePath": "alp-ancient_dragon-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-angels_egg",
    "name": "Angels Egg",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "At the end of each turn, the controller of Angel's Egg's site heals 1 life.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "alp-angels_egg-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-anui_undine",
    "name": "Anui Undine",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 0,
    "life": 0,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge\n\nAnui Undine has +1 power for each site in her body of water.",
    "flavorText": "What is a puddle but an ocean waiting to be discovered?",
    "artist": "Tony Szczudlo",
    "imagePath": "alp-anui_undine-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-apprentice_wizard",
    "name": "Apprentice Wizard",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Spellcaster\n\nGenesis → Draw a spell.",
    "flavorText": "",
    "artist": "Ossi Hiekkala",
    "imagePath": "alp-apprentice_wizard-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-aquamarine_core",
    "name": "Aquamarine Core",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Provides (W) and (1) to its controller.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "alp-aquamarine_core-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-aqueduct",
    "name": "Aqueduct",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Earth",
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "Through brick and ashlar conduits flows the lifeblood of an empire.",
    "artist": "Jeff A. Menges",
    "imagePath": "alp-aqueduct-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-aramos_mercenaries",
    "name": "Aramos Mercenaries",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "You may discard a random card rather than pay this spell's mana cost.",
    "flavorText": "The purse has enticements unknown to virtue.",
    "artist": "Jeff A. Menges",
    "imagePath": "alp-aramos_mercenaries-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-arid_desert",
    "name": "Arid Desert",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Deal 1 damage to each minion atop target nearby site.",
    "flavorText": "",
    "artist": "AronjaArt",
    "imagePath": "alp-arid_desert-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-askelon_phoenix",
    "name": "Askelon Phoenix",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nIf Askelon Phoenix would take damage from a fire spell or ability, it gains +1 power this turn, instead.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "alp-askelon_phoenix-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-assorted_animals",
    "name": "Assorted Animals",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Search your spellbook for different Beasts with a combined mana cost of X or less, reveal them, and put them in your hand. Shuffle your spellbook.",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "alp-assorted_animals-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-astral_alcazar",
    "name": "Astral Alcazar",
    "set": "Alpha",
    "type": "Site",
    "elements": [],
    "rarity": "Elite",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Units can move between this site and any void as if they were adjacent.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "alp-astral_alcazar-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-atlantean_fate",
    "name": "Atlantean Fate",
    "set": "Alpha",
    "type": "Aura",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [
      "Submerge",
      "Genesis"
    ],
    "effectText": "Affected non-Ordinary sites are flooded. They are water sites, only provide Water threshold, and lose all other abilities.\nGenesis → Submerge all minions and artifacts atop affected sites.",
    "flavorText": "",
    "artist": "AronjaArt",
    "imagePath": "alp-atlantean_fate-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-atlas_wanderers",
    "name": "Atlas Wanderers",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 3,
      "fire": 0,
      "water": 0
    },
    "power": 5,
    "life": 5,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → This site and an adjacent site change places, carrying along everything of normal size.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "alp-atlas_wanderers-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-autumn_river",
    "name": "Autumn River",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Look at your next spell. You may put it on the bottom of your spellbook.",
    "flavorText": "",
    "artist": "Matt Tames",
    "imagePath": "alp-autumn_river-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-autumn_unicorn",
    "name": "Autumn Unicorn",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "",
    "flavorText": "Concerning the fair unicorn, sundry notions do abide. Some demur, others deny, children delight, and charlatans lie.",
    "artist": "Séverine Pineaux",
    "imagePath": "alp-autumn_unicorn-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-avatar_of_air",
    "name": "Avatar Of Air",
    "set": "Alpha",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": 1,
    "life": 20,
    "keywords": [],
    "effectText": "Tap → Play or draw a site.\n\nOnce on your turn, if you occupy an Air site, you may fly a unit atop it to a nearby site.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "alp-avatar_of_air-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-avatar_of_earth",
    "name": "Avatar Of Earth",
    "set": "Alpha",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": 1,
    "life": 20,
    "keywords": [],
    "effectText": "Tap → Play or draw a site.\n\nYou have +1 power for each nearby earth site.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "alp-avatar_of_earth-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-avatar_of_fire",
    "name": "Avatar Of Fire",
    "set": "Alpha",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": 1,
    "life": 20,
    "keywords": [],
    "effectText": "Tap → Play or draw a site.\n\nTap → This turn, fire sites in your hand are also Fireballs.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "alp-avatar_of_fire-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-avatar_of_water",
    "name": "Avatar Of Water",
    "set": "Alpha",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": 1,
    "life": 20,
    "keywords": [],
    "effectText": "Tap → Play or draw a site.\n\nTap → Flood a site adjacent to your body of water until you do so again. You may teleport there.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "alp-avatar_of_water-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-awakened_mummies",
    "name": "Awakened Mummies",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Summon Awakened Mummies burrowed safely. When an enemy unit moves onto the ground above them, they unburrow and intercept.",
    "flavorText": "Bodies in desert tombs are often very well preserved. Mayhap too well.",
    "artist": "Jeff Easley",
    "imagePath": "alp-awakened_mummies-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-azuridge_caravan",
    "name": "Azuridge Caravan",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air",
      "Earth",
      "Fire",
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "Has all elements and minion types.",
    "flavorText": "Defendit numerus, liberat varietas.",
    "artist": "Vincent Pompetti",
    "imagePath": "alp-azuridge_caravan-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-backstab",
    "name": "Backstab",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Target minion moves to an adjacent location, if needed, to strike another target tapped minion there.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "alp-backstab-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-bane_widow",
    "name": "Bane Widow",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → May kill target minion here.",
    "flavorText": "Born of earth, yet suckled by Hell's fire.",
    "artist": "Brian Smith",
    "imagePath": "alp-bane_widow-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-battering_ram",
    "name": "Battering Ram",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Units here have \"Tap → Destroy target adjacent Wall or Monument.\"",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "alp-battering_ram-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-battlefield",
    "name": "Battlefield",
    "set": "Alpha",
    "type": "Site",
    "elements": [],
    "rarity": "Elite",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Conjure a broken Weapon or Armor here.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "alp-battlefield-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-battlemage",
    "name": "Battlemage",
    "set": "Alpha",
    "type": "Avatar",
    "elements": [],
    "rarity": "Elite",
    "cost": null,
    "threshold": {},
    "power": 3,
    "life": 20,
    "keywords": [],
    "effectText": "Tap → Play or draw a site.\n\nWhenever Battlemage attacks and kills an enemy, you may draw a spell.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "alp-battlemage-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-beast_of_burden",
    "name": "Beast Of Burden",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "May carry any number of allied minions.",
    "flavorText": "\"Louder, louder! Blast your snorting drums!\nLife's most weary load is yet to come.\"",
    "artist": "Lindsey Crummett",
    "imagePath": "alp-beast_of_burden-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-bedrock",
    "name": "Bedrock",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Can't be moved, destroyed, or modified.",
    "flavorText": "",
    "artist": "Adam Kašpar",
    "imagePath": "alp-bedrock-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-belfry",
    "name": "Belfry",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "At the end of your turn, untap all nearby allies.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "alp-belfry-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-belmotte_longbowmen",
    "name": "Belmotte Longbowmen",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Ranged"
    ],
    "effectText": "Ranged",
    "flavorText": "In the left hand of every delight lies woe; and for that, my bow.",
    "artist": "Andrea Modesti",
    "imagePath": "alp-belmotte_longbowmen-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-black_obelisk",
    "name": "Black Obelisk",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Black Obelisk's site has \"At the start of your turn, lose 2 life and gain (2) this turn.\"",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "alp-black_obelisk-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-blasted_oak",
    "name": "Blasted Oak",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "If a spell or non-basic ability can target—in order of precedence—Blasted Oak, its site or location, or anything else at its site or location, it must.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "alp-blasted_oak-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-blaze",
    "name": "Blaze",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Movement"
    ],
    "effectText": "This turn, give an ally Movement +2, it can't be intercepted, and it leaves a trail of fire at departed locations. When it stops, each unit along the trail takes 2 damage.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "alp-blaze-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-blink",
    "name": "Blink",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "An ally teleports to a location it's nearby. Draw a card.",
    "flavorText": "",
    "artist": "Francesca Baerald",
    "imagePath": "alp-blink-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-blizzard",
    "name": "Blizzard",
    "set": "Alpha",
    "type": "Aura",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Affected sites and units atop them can't be attacked or intercepted.\n\nAt the start of your turn, dispel Blizzard.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "alp-blizzard-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-blood_ravens",
    "name": "Blood Ravens",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nDamage dealt by Blood Ravens' strikes heals you.",
    "flavorText": "Dark wings bring dark winds.",
    "artist": "Michal Nagypál",
    "imagePath": "alp-blood_ravens-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-boil",
    "name": "Boil",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Destroy all minions occupying target water site up to two steps away.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "alp-boil-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-bone_rabble",
    "name": "Bone Rabble",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "Whenever you play an earth site, you may summon Bone Rabble from your cemetery to that site.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "alp-bone_rabble-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-boneyard",
    "name": "Boneyard",
    "set": "Alpha",
    "type": "Site",
    "elements": [],
    "rarity": "Unique",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Each player may summon a minion from their cemetery here.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "alp-boneyard-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-border_militia",
    "name": "Border Militia",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Summon a Foot Soldier token to each site you control that borders an enemy site.",
    "flavorText": "",
    "artist": "Truitt Parrish",
    "imagePath": "alp-border_militia-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-bosk_troll",
    "name": "Bosk Troll",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "",
    "flavorText": "Its thoughts are reflections in a forest pool, softly trembling with wind and rain.",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "alp-bosk_troll-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-bottomless_pit",
    "name": "Bottomless Pit",
    "set": "Alpha",
    "type": "Site",
    "elements": [],
    "rarity": "Elite",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Whenever a non-Airborne minion enters this site, kill it.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "alp-bottomless_pit-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-bridge_troll",
    "name": "Bridge Troll",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Whenever an enemy attacks Bridge Troll, they must spend all of their remaining mana to give to you on your next turn.",
    "flavorText": "Oi! 'oo 's 'at trippin' o'er me bridge?",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "alp-bridge_troll-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-brobdingnag_bullfrog",
    "name": "Brobdingnag Bullfrog",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Brobdingnag Bullfrog swallows another target minion here. He carries it disabled in his belly until he leaves the realm.",
    "flavorText": "",
    "artist": "Michal Nagypál",
    "imagePath": "alp-brobdingnag_bullfrog-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-browse",
    "name": "Browse",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {
      "air": 3,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Look at your next seven spells. Put one in your hand and the rest on the bottom of your spellbook in any order.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "alp-browse-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-bull_demons_of_adum",
    "name": "Bull Demons Of Adum",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 5,
    "life": 5,
    "keywords": [],
    "effectText": "Tap → Move three steps in a cardinal direction. When Bull Demons of Adum enter each location, they strike each untapped unit there.r.",
    "flavorText": "\"A bull won't charge a sleeping man. Go to bed, child.\"",
    "artist": "Gadu Duaso",
    "imagePath": "alp-bull_demons_of_adum-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-buried_treasure",
    "name": "Buried Treasure",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "If cast, conjure this under an allied land site of an opponent's choice.\n\nWhen Buried Treasure is carried to the surface, its controller sacrifices it and draws two cards.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "alp-buried_treasure-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-bury",
    "name": "Bury",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Burrow target minion or artifact, if able.",
    "flavorText": "\"From out of the depths of the countless pits there came a melancholy rustling from the garments of the buried.\" — Edgar Allan Poe",
    "artist": "Dan Seagrave",
    "imagePath": "alp-bury-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-call_to_war",
    "name": "Call To War",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Search your spellbook for an Exceptional Mortal, reveal it, and put it into your hand. Shuffle your spellbook.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "alp-call_to_war-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-candlemas_monks",
    "name": "Candlemas Monks",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Deathrite"
    ],
    "effectText": "Deathrite → Proceed to the end phase.",
    "flavorText": "\"If Candlemas be fair and bright, winter has another fight. If Candlemas brings cloud and rain, winter shall not come again.\"",
    "artist": "Andrea Modesti",
    "imagePath": "alp-candlemas_monks-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-captain_baldassare",
    "name": "Captain Baldassare",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Whenever Captain Baldassare attacks a unit or site, the defending player discards their topmost three spells. You may cast each of those spells once this turn, ignoring threshold requirements.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "alp-captain_baldassare-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-cauldron_crones",
    "name": "Cauldron Crones",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Spellcaster\n\nGenesis → You may sacrifice another minion here to draw a spell.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "alp-cauldron_crones-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-cave_in",
    "name": "Cave In",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Burrow all minions and artifacts occupying target land site.",
    "flavorText": "",
    "artist": "Michal Nagypál",
    "imagePath": "alp-cave_in-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-cave_trolls",
    "name": "Cave Trolls",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Burrowing"
    ],
    "effectText": "Burrowing",
    "flavorText": "We dig, we lug, we nosh da bug. Bore ore nor more, we jig and jug!",
    "artist": "Drew Tucker",
    "imagePath": "alp-cave_trolls-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-cerberus_in_chains",
    "name": "Cerberus In Chains",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 5,
    "life": 5,
    "keywords": [],
    "effectText": "Must be summoned to your location.\n\nCerberus in Chains automatically follows you and can't move itself away.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "alp-cerberus_in_chains-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-chain_lightning",
    "name": "Chain Lightning",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Deal 2 damage to target unit nearby. Any number of times, you may spend (2) to additionally target a new unit nearby the previous one.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "alp-chain_lightning-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-chains_of_prometheus",
    "name": "Chains Of Prometheus",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Whenever a player draws a card, that player taps their strongest untapped minion.",
    "flavorText": "\"Be sure of this, O young ambition, all mortal greatness is but disease.\" — Herman Melville",
    "artist": "Dan Seagrave",
    "imagePath": "alp-chains_of_prometheus-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-chaos_twister",
    "name": "Chaos Twister",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Place target minion on the back of your hand, then blow it off from a height of at least one foot. Deal damage equal to its power to each unit atop the site it lands on, including itself.",
    "flavorText": "",
    "artist": "Francesca Baerald",
    "imagePath": "alp-chaos_twister-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-clamor_of_harpies",
    "name": "Clamor Of Harpies",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nGenesis → Teleport target weaker minion to this location. Clamor of Harpies may strike it.",
    "flavorText": "",
    "artist": "Francesca Baerald",
    "imagePath": "alp-clamor_of_harpies-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-cloud_city",
    "name": "Cloud City",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "(A)(A)(A) — Once on your turn, this site may fly to a nearby void.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "alp-cloud_city-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-cloud_spirit",
    "name": "Cloud Spirit",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Airborne",
      "Movement"
    ],
    "effectText": "Airborne, Movement +2",
    "flavorText": "\"Children sense beings that we cannot, in innocence seeing what wisdom forgot.\"",
    "artist": "Michal Nagypál",
    "imagePath": "alp-cloud_spirit-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-colicky_dragonettes",
    "name": "Colicky Dragonettes",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "At the end of your turn, Colicky Dragonettes shoot a projectile. It deals 1 damage.",
    "flavorText": "Wee dragon's game a belch of flame to lay the mighty low.",
    "artist": "Jeff Easley",
    "imagePath": "alp-colicky_dragonettes-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-common_sense",
    "name": "Common Sense",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Search your spellbook for an Ordinary card, reveal it, and put it into your hand. Shuffle your spellbook.",
    "flavorText": "\"Common sense is the most widely shared commodity in the world, for every man is convinced that he is well supplied with it.\" — René Descartes",
    "artist": "Drew Tucker",
    "imagePath": "alp-common_sense-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-cone_of_flame",
    "name": "Cone Of Flame",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Choose a direction from the caster. Deal damage to each unit at a location in the area of effect:\n\n$1 1 1 1 1\n  3 3 3  \n    5    \n    C    $",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "alp-cone_of_flame-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-conqueror_worm",
    "name": "Conqueror Worm",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 8,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 8,
    "life": 8,
    "keywords": [],
    "effectText": "At the end of your turn, if no enemy units occupy this site, permanently gain control of it.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "alp-conqueror_worm-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-coral_reef_kelpie",
    "name": "Coral Reef Kelpie",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge",
    "flavorText": "Why'd the kelpie cross the shoal? To get to the other tide.",
    "artist": "Melissa A. Benson",
    "imagePath": "alp-coral_reef_kelpie-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-cornerstone",
    "name": "Cornerstone",
    "set": "Alpha",
    "type": "Site",
    "elements": [],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "You may play this site to one of your corners.",
    "flavorText": "",
    "artist": "Margaret Organ-Kean",
    "imagePath": "alp-cornerstone-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-court_jester",
    "name": "Court Jester",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "At the end of your turn, each nearby Avatar discards a random card.",
    "flavorText": "",
    "artist": "Liz Danforth",
    "imagePath": "alp-court_jester-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-courtesan_thais",
    "name": "Courtesan Thais",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 0,
    "life": 0,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → During their next turn, each player is controlled by the previous one.",
    "flavorText": "Well all the while blood shall spill, should woman's wile belie man's will.",
    "artist": "Frank Frazetta",
    "imagePath": "alp-courtesan_thais-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-craterize",
    "name": "Craterize",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 8,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "As an additional cost to cast Craterize, discard a site. Destroy target site and deal damage to each unit above or below a site in the area of effect:\n\n$1 2 4  2 1\n2 4 7  4 2\n4 7 10 7 4\n2 4 7  4 2\n1 2 4  2 1$",
    "flavorText": "",
    "artist": "Marta Molina",
    "imagePath": "alp-craterize-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-crave_golem",
    "name": "Crave Golem",
    "set": "Alpha",
    "type": "Minion",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {},
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "At the start of each player's turn, Crave Golem attacks a random minion within its range of motion, or takes a step toward the closest minion if it can't.",
    "flavorText": "As enmity gave way to amity, we soon found we'd created far worse than a monster: a machine.",
    "artist": "Brian Smith",
    "imagePath": "alp-crave_golem-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-critical_strike",
    "name": "Critical Strike",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "The next time an ally strikes a unit this turn, it deals double damage.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "alp-critical_strike-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-crossroads",
    "name": "Crossroads",
    "set": "Alpha",
    "type": "Site",
    "elements": [],
    "rarity": "Elite",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Look at your next four sites. Put three on the bottom of your atlas.",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "alp-crossroads-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-crown_of_the_victor",
    "name": "Crown Of The Victor",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Bearer has +3 power if they've ever killed a minion.",
    "flavorText": "The gods see their glory in you this day.",
    "artist": "Elvira Shakirova",
    "imagePath": "alp-crown_of_the_victor-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-crown_prince",
    "name": "Crown Prince",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Deathrite"
    ],
    "effectText": "Deathrite → If you control another Mortal, return Crown Prince to its owner's hand.",
    "flavorText": "Emmerich, the final Daniger king, assumed the throne only after outliving a horde of brothers and nephews.",
    "artist": "Ossi Hiekkala",
    "imagePath": "alp-crown_prince-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-crusade",
    "name": "Crusade",
    "set": "Alpha",
    "type": "Aura",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "You may summon earth minions to affected sites. Allied earth minions occupying affected sites have +1 power.",
    "flavorText": "",
    "artist": "Truitt Parrish",
    "imagePath": "alp-crusade-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-dalcean_phalanx",
    "name": "Dalcean Phalanx",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 5,
    "life": 5,
    "keywords": [],
    "effectText": "Can only move themselves forward.",
    "flavorText": "\"‘Fairest of sights on the dull black earth,' some say, ‘Is a host of horse in battle array.' ‘A phalanx on foot,' another will cry, ‘Or a navy full sail athwart the sky.'\" — Sappho\"",
    "artist": "Vincent Pompetti",
    "imagePath": "alp-dalcean_phalanx-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-daperyll_vampire",
    "name": "Daperyll Vampire",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 5,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nDamage dealt by Daperyll Vampire's strikes heals you.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "alp-daperyll_vampire-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-dark_tower",
    "name": "Dark Tower",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → If this is the only Dark Tower you control, gain (1) this turn.",
    "flavorText": "",
    "artist": "Michal Nagypál",
    "imagePath": "alp-dark_tower-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-dead_of_night_demon",
    "name": "Dead Of Night Demon",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Stealth"
    ],
    "effectText": "Stealth",
    "flavorText": "\"Tiptoe cross the weald's black maw, where horned fiends creep ware tooth and claw.\"",
    "artist": "Michal Nagypál",
    "imagePath": "alp-dead_of_night_demon-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-death_dealer",
    "name": "Death Dealer",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Kill all other minions.",
    "flavorText": "With frank hand the dark traveler laid waste to all who came before him.",
    "artist": "Frank Frazetta",
    "imagePath": "alp-death_dealer-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-deathspeaker",
    "name": "Deathspeaker",
    "set": "Alpha",
    "type": "Avatar",
    "elements": [],
    "rarity": "Elite",
    "cost": null,
    "threshold": {},
    "power": 1,
    "life": 20,
    "keywords": [],
    "effectText": "Tap → Play or draw a site.\n\nYou may cast one dead minion each turn, and for (0) if you're on Death's Door. Whenever you summon a minion this way, banish it.",
    "flavorText": "",
    "artist": "Tony Szczudlo",
    "imagePath": "alp-deathspeaker-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-deep_sea_mermaids",
    "name": "Deep Sea Mermaids",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge\n\nGenesis → Draw your bottommost spell.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "alp-deep_sea_mermaids-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-devils_egg",
    "name": "Devils Egg",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "At the end of each turn, the controller of Devil's Egg's site loses 1 life.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "alp-devils_egg-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-diluvian_kraken",
    "name": "Diluvian Kraken",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 8,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 3
    },
    "power": 8,
    "life": 8,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge\n\nTap → Surface to strike each other unit nearby.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "alp-diluvian_kraken-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-disenchant",
    "name": "Disenchant",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Destroy all auras and artifacts at target location up to two steps away.",
    "flavorText": "... and a haughty spirit before a fall.",
    "artist": "Elwira Pawlikowska",
    "imagePath": "alp-disenchant-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-disintegrate",
    "name": "Disintegrate",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Banish target minion nearby, and everything it carries.",
    "flavorText": "\"For dust thou art, and unto dust shalt thou return.\" ? Genesis 3:19",
    "artist": "Alan Pollack",
    "imagePath": "alp-disintegrate-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-dispel",
    "name": "Dispel",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Destroy all auras and artifacts at target location up to two steps away.",
    "flavorText": "Pride goeth before destruction ...",
    "artist": "Elwira Pawlikowska",
    "imagePath": "alp-dispel-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-divine_healing",
    "name": "Divine Healing",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 3,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "You gain 7 life.",
    "flavorText": "I have heard your prayer and seen your tears; I will heal you. - 2 Kings 20:5",
    "artist": "Alan Pollack",
    "imagePath": "alp-divine_healing-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-dodge_roll",
    "name": "Dodge Roll",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 0,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "May be cast when an ally is attacked.\nAn attacked ally may move to another adjacent location to evade the attack.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "alp-dodge_roll-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-dome_of_osiros",
    "name": "Dome Of Osiros",
    "set": "Alpha",
    "type": "Site",
    "elements": [],
    "rarity": "Unique",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "This site and minions here can't be attacked.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "alp-dome_of_osiros-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-donnybrook_inn",
    "name": "Donnybrook Inn",
    "set": "Alpha",
    "type": "Site",
    "elements": [],
    "rarity": "Unique",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Anyone may cast minions here and they may do so for (1) less.",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "alp-donnybrook_inn-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-doomsday_device",
    "name": "Doomsday Device",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Doomsday Device enters the realm with 6 counters. At the end of each player's turn, remove a counter. When the last is removed, it detonates!\n\nDeals damage to each unit at affected locations:\n\n$  2 4  2\n2 4 8  4 2\n4 8 20 8 4\n2 4 8  4 2\n  2 4  2$",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "alp-doomsday_device-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-doomsday_prophet",
    "name": "Doomsday Prophet",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "Nearby units take double damage, except from strikes.",
    "flavorText": "The end is nigh!",
    "artist": "Doug Kovacs",
    "imagePath": "alp-doomsday_prophet-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-dream_quest",
    "name": "Dream Quest",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "An allied Spellcaster falls asleep and is disabled until hurt. At the start of your next turn, if it's still asleep, you may wake it up to search your spellbook for a card and put it into your hand. Shuffle if needed.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "alp-dream_quest-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-drought",
    "name": "Drought",
    "set": "Alpha",
    "type": "Aura",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Affected sites aren't water sites, and provide no water threshold.",
    "flavorText": "",
    "artist": "Michal Nagypál",
    "imagePath": "alp-drought-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-drown",
    "name": "Drown",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge target minion or artifact, if able.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "alp-drown-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-drums_of_doom",
    "name": "Drums Of Doom",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Damage dealt to minions nearby is lethal.",
    "flavorText": "A trepid pulse, a throb of bloodpour'd passion, and life's spark seemed to each one about them lost.",
    "artist": "Alan Pollack",
    "imagePath": "alp-drums_of_doom-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-dwarven_digging_team",
    "name": "Dwarven Digging Team",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Burrowing"
    ],
    "effectText": "Burrowing\n\nAllied minions occupying nearby sites have Burrowing.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "alp-dwarven_digging_team-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-dwarven_forge",
    "name": "Dwarven Forge",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Anyone may conjure Weapons and Armor here, and for (1) less.",
    "flavorText": "",
    "artist": "Rodney Matthews",
    "imagePath": "alp-dwarven_forge-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-earthquake",
    "name": "Earthquake",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Rearrange sites within a two-by-two region, carrying along everything of normal size. Then burrow all minions and artifacts on those sites.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "alp-earthquake-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-east_west_dragon",
    "name": "East West Dragon",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nMoves freely sideways.",
    "flavorText": "",
    "artist": "Jeff Easley",
    "imagePath": "alp-east_west_dragon-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-edge_of_the_world",
    "name": "Edge Of The World",
    "set": "Alpha",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "alp-edge_of_the_world-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "alp-elementalist",
    "name": "Elementalist",
    "set": "Alpha",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "alp-elementalist-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "alp-enchantress",
    "name": "Enchantress",
    "set": "Alpha",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "alp-enchantress-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "alp-entangle_terrain",
    "name": "Entangle Terrain",
    "set": "Alpha",
    "type": "Aura",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Airborne",
      "Immobile"
    ],
    "effectText": "Minions occupying affected sites lose Airborne and are Immobile. Lasts 3 of your turns.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "alp-entangle_terrain-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-eriks_curiosa",
    "name": "Eriks Curiosa",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Rip Erik's Curiosa to pieces → Draw a card from your collection.",
    "flavorText": "",
    "artist": "Francesca Baerald",
    "imagePath": "alp-eriks_curiosa-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-escyllion_cyclops",
    "name": "Escyllion Cyclops",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 6,
    "life": 6,
    "keywords": [],
    "effectText": "Doesn't strike back while defending.",
    "flavorText": "\"We wept and raised our hands to the heavens on seeing such a horrific sight, for we knew not what else to do.\" — Homer",
    "artist": "Gadu Duaso",
    "imagePath": "alp-escyllion_cyclops-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-evil_presence",
    "name": "Evil Presence",
    "set": "Alpha",
    "type": "Aura",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Charge"
    ],
    "effectText": "You may summon Spirits to affected sites. When you summon a Spirit here, give it Charge, and return Evil Presence to its owner's hand.",
    "flavorText": "",
    "artist": "Liz Danforth",
    "imagePath": "alp-evil_presence-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-exorcism",
    "name": "Exorcism",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Banish all Demon and Undead minions at target location up to two steps away.",
    "flavorText": "Nor devil nor demon shall undo this done! Begone!",
    "artist": "Mattias Frisk",
    "imagePath": "alp-exorcism-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-extinguish",
    "name": "Extinguish",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Banish all fire minions and fire auras occupying target site up to two steps away.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "alp-extinguish-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-fade",
    "name": "Fade",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Stealth"
    ],
    "effectText": "Give an allied minion Stealth. If it occupies an enemy site, draw a card.",
    "flavorText": "\"I could pay, but then I'd just have to rob them again.\"",
    "artist": "Elvira Shakirova",
    "imagePath": "alp-fade-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-far_east_assassin",
    "name": "Far East Assassin",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Stealth"
    ],
    "effectText": "Stealth\n\nTap → Far East Assassin throws an artifact he carries at target adjacent unit. It takes damage equal to the artifact's mana cost.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "alp-far_east_assassin-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-felbog_frog_men",
    "name": "Felbog Frog Men",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Can leap entirely over adjacent sites in one step.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "alp-felbog_frog_men-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-fenvale_muse",
    "name": "Fenvale Muse",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 0,
    "life": 0,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Spellcaster\n\nWhenever Fenvale Muse casts a spell, you may trigger the Genesis of a nearby River.",
    "flavorText": "\"As the sun troubles the morning she stirs my heart.\"",
    "artist": "Jeff A. Menges",
    "imagePath": "alp-fenvale_muse-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-fey_changeling",
    "name": "Fey Changeling",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "May be summoned to any site.\n\nGenesis → You may return a minion here to its owner's hand.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "alp-fey_changeling-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-fire_harpoons",
    "name": "Fire Harpoons",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Deal 1 damage to target minion above or below an adjacent Water site and pull it to the caster's location. Draw a card.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "alp-fire_harpoons-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-fireball",
    "name": "Fireball",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Shoot a projectile. It deals 4 damage on impact, and 2 damage to each other unit at that location.",
    "flavorText": "",
    "artist": "Doug Kovacs",
    "imagePath": "alp-fireball-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-firebolts",
    "name": "Firebolts",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Shoot three projectiles in the same direction, one at a time. Each deals 1 damage.",
    "flavorText": "",
    "artist": "Jeff Easley",
    "imagePath": "alp-firebolts-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-flame_wave",
    "name": "Flame Wave",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Flame Wave flows horizontally, from one edge of the realm to the other. Deal damage to each unit atop sites in the area of effect:\n\n$7 5 3 1\n7 5 3 1\n7 5 3 1\n7 5 3 1$",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "alp-flame_wave-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-flaming_sword",
    "name": "Flaming Sword",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Bearer has +1 power, and its strikes splash full damage to each other enemy at a struck unit's location.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "alp-flaming_sword-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-flanking_maneuver",
    "name": "Flanking Maneuver",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Teleport any number of allies at one location to another location a chess knight's move away. Draw a card.",
    "flavorText": "",
    "artist": "Tony Szczudlo",
    "imagePath": "alp-flanking_maneuver-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-flood",
    "name": "Flood",
    "set": "Alpha",
    "type": "Aura",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Affected sites are flooded. They're water sites.",
    "flavorText": "Nature is the anvil that has broken many hammers.",
    "artist": "Michal Nagypál",
    "imagePath": "alp-flood-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-floodplain",
    "name": "Floodplain",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Once on your turn, you may flood an adjacent site this turn.",
    "flavorText": "",
    "artist": "Caio Calazans",
    "imagePath": "alp-floodplain-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-font_of_life",
    "name": "Font Of Life",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Each ally heals an amount equal to the number of sites in its body of water.",
    "flavorText": "",
    "artist": "Anson Maddocks",
    "imagePath": "alp-font_of_life-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-foot_soldier_1",
    "name": "Foot Soldier 1",
    "set": "Alpha",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "alp-foot_soldier_1-bt",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "alp-foot_soldier_2",
    "name": "Foot Soldier 2",
    "set": "Alpha",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "alp-foot_soldier_2-bt",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "alp-foot_soldier_3",
    "name": "Foot Soldier 3",
    "set": "Alpha",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "alp-foot_soldier_3-bt",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "alp-free_city",
    "name": "Free City",
    "set": "Alpha",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "alp-free_city-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "alp-frog_blue",
    "name": "Frog Blue",
    "set": "Alpha",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "alp-frog_blue-bt",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "alp-frog_green",
    "name": "Frog Green",
    "set": "Alpha",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "alp-frog_green-bt",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "alp-frog_red",
    "name": "Frog Red",
    "set": "Alpha",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "alp-frog_red-bt",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "alp-frontier_settlers",
    "name": "Frontier Settlers",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "Tap → Reveal the topmost site of your atlas. Play it adjacent to Frontier Settlers, if able, and they move there. They lose this ability.",
    "flavorText": "\"Be fruitful, and multiply, and replenish the earth.\" — Genesis 1:28",
    "artist": "Ossi Hiekkala",
    "imagePath": "alp-frontier_settlers-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-frost_nova",
    "name": "Frost Nova",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Freeze nearby enemy minions. They're disabled until your next turn.",
    "flavorText": "",
    "artist": "Francesca Baerald",
    "imagePath": "alp-frost_nova-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-geyser",
    "name": "Geyser",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [
      "Airborne"
    ],
    "effectText": "This turn, flood target site and give each minion there Airborne. Draw a card.",
    "flavorText": "",
    "artist": "Matt Tames",
    "imagePath": "alp-geyser-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-ghost_ship",
    "name": "Ghost Ship",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 5,
    "life": 5,
    "keywords": [
      "Voidwalk"
    ],
    "effectText": "Voidwalk\n\nWhenever Ghost Ship enters a site from the void, you may summon a Spirit from any cemetery to its location.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "alp-ghost_ship-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-giant_shark",
    "name": "Giant Shark",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 5,
    "life": 5,
    "keywords": [
      "Submerge",
      "Waterbound"
    ],
    "effectText": "Submerge, Waterbound\n\nWhenever another unit enters or moves between sites in this body of water, Giant Shark moves to that unit to fight it.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "alp-giant_shark-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-gigantism",
    "name": "Gigantism",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Give an allied unit +6 power this turn.",
    "flavorText": "Pity these meek and measly men!",
    "artist": "Alan Pollack",
    "imagePath": "alp-gigantism-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-gilded_aegis",
    "name": "Gilded Aegis",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "If bearer is a minion and would die, instead fully heal it and banish Gilded Aegis.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "alp-gilded_aegis-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-gneissgnath_gnomes",
    "name": "Gneissgnath Gnomes",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Burrowing"
    ],
    "effectText": "Burrowing\n\nAt the end of your turn, Gneissgnath Gnomes may burrow.",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "alp-gneissgnath_gnomes-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-gnome_hollows",
    "name": "Gnome Hollows",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Units with 3 or more power can't enter this site.",
    "flavorText": "",
    "artist": "Mattias Frisk",
    "imagePath": "alp-gnome_hollows-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-gothic_tower",
    "name": "Gothic Tower",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → If this is the only Gothic Tower you control, gain (1) this turn.",
    "flavorText": "",
    "artist": "Michal Nagypál",
    "imagePath": "alp-gothic_tower-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-grandmaster_wizard",
    "name": "Grandmaster Wizard",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 0,
    "life": 0,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Spellcaster\n\nGenesis → Draw three spells.",
    "flavorText": "",
    "artist": "Ossi Hiekkala",
    "imagePath": "alp-grandmaster_wizard-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-grapple_shot",
    "name": "Grapple Shot",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "An ally shoots a projectile. If it hits a unit, the ally is dragged to that location, and may strike the hit unit.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "alp-grapple_shot-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-great_old_one",
    "name": "Great Old One",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 8,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 3
    },
    "power": 16,
    "life": 16,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge\n\nGenesis → Permanently flood the entire realm, including voids.",
    "flavorText": "What lurks beneath depths unplumbed by mortal keel! Dark and darker black tides roll, heedless of earth's cries for ransom.",
    "artist": "Dan Seagrave",
    "imagePath": "alp-great_old_one-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-great_wall",
    "name": "Great Wall",
    "set": "Alpha",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "alp-great_wall-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "alp-grey_wolves",
    "name": "Grey Wolves",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "Your spellbook may include any number of Grey Wolves.\n\nHas +1 power for each other Grey Wolves nearby.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "alp-grey_wolves-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-grim_reaper",
    "name": "Grim Reaper",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 2,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Lethal"
    ],
    "effectText": "Lethal\n\nWhenever Grim Reaper kills a minion, banish that minion and all copies. Search its owner's cemetery, hand, and spellbook and banish any copies. They shuffle.",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "alp-grim_reaper-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-grosse_poltergeist",
    "name": "Grosse Poltergeist",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "Tap → Until Grosse Poltergeist leaves the realm, gain control of a nearby artifact and animate it. It's an Automaton with power equal to its cost, and has its own bearer abilities.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "alp-grosse_poltergeist-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-guile_sirens",
    "name": "Guile Sirens",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge\n\nAt the start of your turn, force target nearby enemy minion to take a step toward Guile Sirens.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "alp-guile_sirens-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-gyre_hippogriffs",
    "name": "Gyre Hippogriffs",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Airborne",
      "Charge"
    ],
    "effectText": "Airborne, Charge",
    "flavorText": "\"A wing aloft, will oft descry The turning of the screw 'Fore knee or eye construe\"",
    "artist": "Gadu Duaso",
    "imagePath": "alp-gyre_hippogriffs-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-haast_eagle",
    "name": "Haast Eagle",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nMay carry a weaker allied minion.",
    "flavorText": "Hardly a comfortable ride, but a ride, nonetheless.",
    "artist": "Elwira Pawlikowska",
    "imagePath": "alp-haast_eagle-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-headless_haunt",
    "name": "Headless Haunt",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Voidwalk"
    ],
    "effectText": "Voidwalk\n\nAt the start of your turn, Headless Haunt teleports to the top of a random site or void.",
    "flavorText": "Jacet sine nominee truncus.",
    "artist": "Jussi Pylkäs",
    "imagePath": "alp-headless_haunt-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-heat_ray",
    "name": "Heat Ray",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Shoot a piercing projectile. Deal 2 damage to one unit at each location along its path.",
    "flavorText": "",
    "artist": "Jeff Easley",
    "imagePath": "alp-heat_ray-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-highland_clansmen",
    "name": "Highland Clansmen",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 7,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 5,
    "life": 5,
    "keywords": [
      "Charge"
    ],
    "effectText": "Charge",
    "flavorText": "What need for spells when one can cast iron?",
    "artist": "Truitt Parrish",
    "imagePath": "alp-highland_clansmen-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-highland_falconer",
    "name": "Highland Falconer",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Airborne",
      "Genesis"
    ],
    "effectText": "Genesis → You may search your hand and spellbook for a Beast with Airborne and mana cost (2) or less and summon it here. Shuffle if needed.",
    "flavorText": "",
    "artist": "Andrea Modesti",
    "imagePath": "alp-highland_falconer-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-highland_princess",
    "name": "Highland Princess",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 2,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Search your spellbook for an artifact that costs (1) or less, reveal it, and put it into your hand. Shuffle.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "alp-highland_princess-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-hillock_basilisk",
    "name": "Hillock Basilisk",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Other minions at rest here or one step in front of Hillock Basilisk are disabled.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "alp-hillock_basilisk-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-holy_ground",
    "name": "Holy Ground",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Each nearby Avatar heals 3 life.",
    "flavorText": "",
    "artist": "Michal Nagypál",
    "imagePath": "alp-holy_ground-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-hounds_of_ondaros",
    "name": "Hounds Of Ondaros",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Airborne",
      "Burrowing",
      "Submerge",
      "Voidwalk"
    ],
    "effectText": "Airborne, Burrowing, Submerge, Voidwalk\n\nNearby enemies permanently lose Stealth.",
    "flavorText": "From hell's heart they stab at thee.",
    "artist": "Francesca Baerald",
    "imagePath": "alp-hounds_of_ondaros-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-house_arn_bannerman",
    "name": "House Arn Bannerman",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Other nearby allies have +1 power.",
    "flavorText": "Our crest and banner will once again be a symbol of glory and strength!",
    "artist": "Andrea Modesti",
    "imagePath": "alp-house_arn_bannerman-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-humble_village",
    "name": "Humble Village",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → You may pay (1) to summon a Foot Soldier token here.",
    "flavorText": "",
    "artist": "Andrea Modesti",
    "imagePath": "alp-humble_village-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-ice_lance",
    "name": "Ice Lance",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Shoot a piercing projectile. Deal 3, then 2, then 1 damage to up to one unit at each of the first three locations along its path.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "alp-ice_lance-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-iceberg",
    "name": "Iceberg",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Minions occupying nearby sites can't submerge or surface.",
    "flavorText": "",
    "artist": "Ian Miller",
    "imagePath": "alp-iceberg-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-immolation",
    "name": "Immolation",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 3,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Deal 7 damage to target minion nearby.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "alp-immolation-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-imperial_road",
    "name": "Imperial Road",
    "set": "Alpha",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "alp-imperial_road-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "alp-incinerate",
    "name": "Incinerate",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Deal 4 damage to each other unit at target location near the caster or an allied Dragon.",
    "flavorText": "\"Scaleforge stoked, proud kite untamed, in flagrant flight unfurled.\"",
    "artist": "Lindsey Crummett",
    "imagePath": "alp-incinerate-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-infernal_legion",
    "name": "Infernal Legion",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 3,
      "water": 0
    },
    "power": 6,
    "life": 6,
    "keywords": [],
    "effectText": "At the end of your turn, deal 3 damage to each other adjacent unit.",
    "flavorText": "Grave candélabre, en danse macabre, the Damned parade in ghastly mob.",
    "artist": "Melissa A. Benson",
    "imagePath": "alp-infernal_legion-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-infiltrate",
    "name": "Infiltrate",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Stealth"
    ],
    "effectText": "Gain control of target enemy minion until it deals damage, and tap it. It gains Stealth.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "alp-infiltrate-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-iron_shackles",
    "name": "Iron Shackles",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "May be conjured to target enemy minion.\n\nBearer is disabled.",
    "flavorText": "How can you claim to be free, when you've never tried to find the end of your tether?",
    "artist": "Dan Seagrave",
    "imagePath": "alp-iron_shackles-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-island_leviathan",
    "name": "Island Leviathan",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 8,
    "life": 8,
    "keywords": [],
    "effectText": "(W)(W)(W)(W)(W)(W)(W)(W) — Transform into a Monster. Place flooded Rubble underneath.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "alp-island_leviathan-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-jihad",
    "name": "Jihad",
    "set": "Alpha",
    "type": "Aura",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "You may summon fire minions to affected sites. Allied fire minions occupying affected sites have +1 power.",
    "flavorText": "",
    "artist": "Truitt Parrish",
    "imagePath": "alp-jihad-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-karkemish_chimera",
    "name": "Karkemish Chimera",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 6,
    "life": 6,
    "keywords": [],
    "effectText": "Can simultaneously attack up to three units at the same location.",
    "flavorText": "",
    "artist": "Gadu Duaso",
    "imagePath": "alp-karkemish_chimera-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-king_of_the_realm",
    "name": "King Of The Realm",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 3,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Other Mortals have +1 power.\n\nYou control all Mortals.",
    "flavorText": "",
    "artist": "Tony Szczudlo",
    "imagePath": "alp-king_of_the_realm-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-kingdom_of_agartha",
    "name": "Kingdom Of Agartha",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Burrowing"
    ],
    "effectText": "(E)(E)(E) — All minions have Burrowing.",
    "flavorText": "",
    "artist": "Adam Burke",
    "imagePath": "alp-kingdom_of_agartha-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-kite_archer",
    "name": "Kite Archer",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Ranged"
    ],
    "effectText": "Ranged\n\nImmediately after performing a ranged strike, Kite Archer may take a step.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "alp-kite_archer-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-kythera_mechanism",
    "name": "Kythera Mechanism",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Bearer's controller determines all random outcomes.",
    "flavorText": "All winds are favorable when the destination is unknown.",
    "artist": "Séverine Pineaux",
    "imagePath": "alp-kythera_mechanism-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-land_deed",
    "name": "Land Deed",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Bearer has \"You control this site.\"",
    "flavorText": "Possession is nine tenths of the law.",
    "artist": "Elwira Pawlikowska",
    "imagePath": "alp-land_deed-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-land_surveyor",
    "name": "Land Surveyor",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Draw a site.",
    "flavorText": "Bare is the brotherless back. And so too shall be unlevied land.",
    "artist": "Ossi Hiekkala",
    "imagePath": "alp-land_surveyor-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-lava_salamander",
    "name": "Lava Salamander",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Fire Spellcaster\n\nTakes no damage from fire spells.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "alp-lava_salamander-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-leap_attack",
    "name": "Leap Attack",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "An ally may take a step, and then it strikes each enemy at its location.",
    "flavorText": "",
    "artist": "Gadu Duaso",
    "imagePath": "alp-leap_attack-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-lighthouse",
    "name": "Lighthouse",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Air",
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "A luminous pillar pierced the tempest, and we knew. All was not lost! We were home.",
    "artist": "Marta Molina",
    "imagePath": "alp-lighthouse-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-lightning_bolt",
    "name": "Lightning Bolt",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Deal 3 damage to a random unit at target location.",
    "flavorText": "",
    "artist": "Ossi Hiekkala",
    "imagePath": "alp-lightning_bolt-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-lone_tower",
    "name": "Lone Tower",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → If this is the only Lone Tower you control, gain (1) this turn.",
    "flavorText": "",
    "artist": "Michal Nagypál",
    "imagePath": "alp-lone_tower-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-lord_of_the_void",
    "name": "Lord Of The Void",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 9,
    "threshold": {
      "air": 3,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 0,
    "life": 0,
    "keywords": [
      "Voidwalk"
    ],
    "effectText": "Voidwalk\n\nAt the end of your turn, Lord of the Void may banish an adjacent site, unless there's an Avatar there.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "alp-lord_of_the_void-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-lord_of_unland",
    "name": "Lord Of Unland",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 3
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge\n\nOther allies occupying Lord of Unland's body of water have +1 power.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "alp-lord_of_unland-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-lucky_charm",
    "name": "Lucky Charm",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Bearer's controller has \"Whenever you do something at random, you may do it an extra time and choose one of the outcomes.\"",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "alp-lucky_charm-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-mad_dash",
    "name": "Mad Dash",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Movement"
    ],
    "effectText": "Draw a card, then give an ally Movement +1 this turn.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "alp-mad_dash-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-maddening_bells",
    "name": "Maddening Bells",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Spells cast by a nearby Spellcaster cost (2) more to cast.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "alp-maddening_bells-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-maelstrom",
    "name": "Maelstrom",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "At the start of your turn, you may pull in each minion in this body of water one step.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "alp-maelstrom-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-mage_slayer",
    "name": "Mage Slayer",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Spellcaster",
      "Genesis"
    ],
    "effectText": "Genesis → Kill target Spellcaster minion nearby.",
    "flavorText": "Death is too kind for the likes of you. But I am a kind man.",
    "artist": "Tony Szczudlo",
    "imagePath": "alp-mage_slayer-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-magellan_globe",
    "name": "Magellan Globe",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Opposite edges of the realm are connected.",
    "flavorText": "Whatsoever turns all haste we tack, each the terrene through, our stars will cross anew.",
    "artist": "Elwira Pawlikowska",
    "imagePath": "alp-magellan_globe-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-magnetic_muzzle",
    "name": "Magnetic Muzzle",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Bearer loses all non-basic abilities, and can't drop Magnetic Muzzle.\n\nAt the end of each player's turn, if Magnetic Muzzle is abandoned, that player attaches it to a nearby minion.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "alp-magnetic_muzzle-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-major_explosion",
    "name": "Major Explosion",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Target a location up to two steps away.\nDeal damage to each unit at locations in the area of effect:\n\n$3 5 3\n5 7 5\n3 5 3$",
    "flavorText": "",
    "artist": "Tony Szczudlo",
    "imagePath": "alp-major_explosion-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-marine_voyage",
    "name": "Marine Voyage",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "This turn, your units can move between any sites in a chosen body of water as if they were adjacent.",
    "flavorText": "",
    "artist": "Marta Molina",
    "imagePath": "alp-marine_voyage-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-mariners_curse",
    "name": "Mariners Curse",
    "set": "Alpha",
    "type": "Aura",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Whenever a minion enters an affected water site, submerge it and return Mariner's Curse to its owner's hand.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "alp-mariners_curse-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-mask_of_mayhem",
    "name": "Mask Of Mayhem",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Whenever a nearby minion can attack, it must.\n\nNearby strikes deal double damage.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "alp-mask_of_mayhem-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-master_tracker",
    "name": "Master Tracker",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Stealth"
    ],
    "effectText": "All enemies permanently lose Stealth.",
    "flavorText": "Becoming sufficiently familiar with nature is a substitute for understanding it.",
    "artist": "Andrea Modesti",
    "imagePath": "alp-master_tracker-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-maze_minotaur",
    "name": "Maze Minotaur",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "Enemy minions can't move themselves out of the neighborhood of nine locations nearby Maze Minotaur.",
    "flavorText": "",
    "artist": "Gadu Duaso",
    "imagePath": "alp-maze_minotaur-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-megamoeba",
    "name": "Megamoeba",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 0,
    "life": 0,
    "keywords": [],
    "effectText": "Megamoeba moves by extending a single pseudopod from any part of itself. It occupies all locations it has ever occupied, and has +1 power for each.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "alp-megamoeba-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-men_of_leng",
    "name": "Men Of Leng",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Whenever Men of Leng strike an Avatar, that Avatar discards a random card.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "alp-men_of_leng-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-meteor_shower",
    "name": "Meteor Shower",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 9,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 3,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Target three sites that share no borders. Deal damage to each unit atop sites in each area of effect:\n\n$3 5 3\n5 7 5\n3 5 3\n\n  2  \n2 4 2\n  2  \n\n3$",
    "flavorText": "",
    "artist": "Michal Nagypál",
    "imagePath": "alp-meteor_shower-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-midland_army",
    "name": "Midland Army",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 8,
    "threshold": {
      "air": 0,
      "earth": 4,
      "fire": 0,
      "water": 0
    },
    "power": 8,
    "life": 8,
    "keywords": [],
    "effectText": "Tap → Target a location up to three steps away. Deal 4 damage to each unit there.\n\nDeathrite → Summon a Foot Soldier token to each adjacent location.",
    "flavorText": "",
    "artist": "Tony Szczudlo",
    "imagePath": "alp-midland_army-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-midnight_rogue",
    "name": "Midnight Rogue",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Ranged",
      "Stealth"
    ],
    "effectText": "Ranged, Stealth",
    "flavorText": "I'll have respect for your laws when you make them respectable.",
    "artist": "Elvira Shakirova",
    "imagePath": "alp-midnight_rogue-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-minecart_madness",
    "name": "Minecart Madness",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "This turn, your units can move between any sites in a chosen span of land as if they were adjacent.",
    "flavorText": "",
    "artist": "Matt Tames",
    "imagePath": "alp-minecart_madness-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-minor_explosion",
    "name": "Minor Explosion",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Deal 3 damage to each unit at target location up to two steps away.",
    "flavorText": "",
    "artist": "Mattias Frisk",
    "imagePath": "alp-minor_explosion-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-miracle_workers",
    "name": "Miracle Workers",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → You may return a minion that died this turn from your cemetery to your hand.",
    "flavorText": "Seek not relief for grievous deeds in mercy done, but know that the prayers of all good people are good.",
    "artist": "Jeff A. Menges",
    "imagePath": "alp-miracle_workers-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-mirage",
    "name": "Mirage",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "When played, you may return a site in play you own to your hand to play this site in its place.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "alp-mirage-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-mirror_realm",
    "name": "Mirror Realm",
    "set": "Alpha",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "alp-mirror_realm-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "alp-mix_aer",
    "name": "Mix Aer",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Sacrifice Mix Aer → This turn, bearer's next Air spell requires no threshold and costs (3) less to cast.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "alp-mix_aer-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-mix_aqua",
    "name": "Mix Aqua",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Sacrifice Mix Aqua → This turn, bearer's next Water spell requires no threshold and costs (3) less to cast.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "alp-mix_aqua-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-mix_ignis",
    "name": "Mix Ignis",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Sacrifice Mix Ignis → This turn, bearer's next Fire spell requires no threshold and costs (3) less to cast.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "alp-mix_ignis-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-mix_terra",
    "name": "Mix Terra",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Sacrifice Mix Terra → This turn, bearer's next Earth spell requires no threshold and costs (3) less to cast.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "alp-mix_terra-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-monastery_gargoyle",
    "name": "Monastery Gargoyle",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Airborne"
    ],
    "effectText": "At the start and end of your turn, choose whether Monastery Gargoyle has Airborne or is a non-minion artifact.",
    "flavorText": "Through rain and regret, Through wind and war, we bide our time.",
    "artist": "Dan Seagrave",
    "imagePath": "alp-monastery_gargoyle-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-monster_hunter",
    "name": "Monster Hunter",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Kill a nearby Monster.",
    "flavorText": "Nor glory nor profit is his reward—a safer world is.",
    "artist": "Jeff A. Menges",
    "imagePath": "alp-monster_hunter-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-moon_clan_werewolf",
    "name": "Moon Clan Werewolf",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Sacrifice an allied Mortal → Summon Moon Clan Werewolf from your hand to the Mortal's location.",
    "flavorText": "Upward, before the onmooning it wolfed.",
    "artist": "Alan Pollack",
    "imagePath": "alp-moon_clan_werewolf-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-mordric_druids",
    "name": "Mordric Druids",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Spellcaster\n\nWhenever you lose life due to an undefended attack nearby, the attacker's controller also loses that much life.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "alp-mordric_druids-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-mortality",
    "name": "Mortality",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Kill all Mortal minions at target location up to two steps away.",
    "flavorText": "Man is born a candle, the better part burnt out.",
    "artist": "Mattias Frisk",
    "imagePath": "alp-mortality-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-mother_nature",
    "name": "Mother Nature",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 3
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "At the start of your turn, reveal your topmost spell. If it's a minion, you may summon it here.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "alp-mother_nature-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-mountain_giant",
    "name": "Mountain Giant",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 8,
    "threshold": {
      "air": 0,
      "earth": 4,
      "fire": 0,
      "water": 0
    },
    "power": 8,
    "life": 8,
    "keywords": [],
    "effectText": "Occupies four locations.",
    "flavorText": "Heart and hearth will tremble.",
    "artist": "Francesca Baerald",
    "imagePath": "alp-mountain_giant-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-mountain_pass",
    "name": "Mountain Pass",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Minions can't enter this site on the ground if there's already a minion atop.",
    "flavorText": "",
    "artist": "Marta Molina",
    "imagePath": "alp-mountain_pass-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-muck_lampreys",
    "name": "Muck Lampreys",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Burrowing",
      "Submerge"
    ],
    "effectText": "Burrowing, Submerge",
    "flavorText": "These pallid parasites plague the swamplands, effortlessly boring through fen and flesh alike.",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "alp-muck_lampreys-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-mudflow",
    "name": "Mudflow",
    "set": "Alpha",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "alp-mudflow-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "alp-nightmare",
    "name": "Nightmare",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 7,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 6,
    "life": 6,
    "keywords": [],
    "effectText": "At the end of your turn, for each enemy minion here, you may push it to an adjacent location or void.",
    "flavorText": "Nightly we ply the razor thin barrier between being and unbeing.",
    "artist": "Drew Tucker",
    "imagePath": "alp-nightmare-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-nimbus_jinn",
    "name": "Nimbus Jinn",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nDiscard a spell → Deal 3 damage to another random unit here.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "alp-nimbus_jinn-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-oasis",
    "name": "Oasis",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Fire",
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "Where blood nourishes sand, life springs anew.",
    "artist": "Marta Molina",
    "imagePath": "alp-oasis-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-observatory",
    "name": "Observatory",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Look at your next three spells. Put them back in any order.",
    "flavorText": "",
    "artist": "Margaret Organ-Kean",
    "imagePath": "alp-observatory-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-occult_ritual",
    "name": "Occult Ritual",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Gain (2) this turn for each allied Spellcaster here.",
    "flavorText": "\"With mingled reverence and awe they cried, softly, odiously, appalling, the name of the Being whom they momentarily expected to appear.\" ? Algernon Blackwood",
    "artist": "Lindsey Crummett",
    "imagePath": "alp-occult_ritual-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-ogre_goons",
    "name": "Ogre Goons",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "",
    "flavorText": "\"Grok, grok! Me find rock!\" \"What rock do?\" \"It sit there!\"",
    "artist": "Jeff A. Menges",
    "imagePath": "alp-ogre_goons-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-old_salt_anchorman",
    "name": "Old Salt Anchorman",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Nearby allies can't be moved by enemy spells and abilities.",
    "flavorText": "Neither should a ship rely on one small anchor, nor a life on one fair hope. ? Epictetus",
    "artist": "Vincent Pompetti",
    "imagePath": "alp-old_salt_anchorman-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-onyx_core",
    "name": "Onyx Core",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Provides (E) and (1) to its controller.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "alp-onyx_core-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-orb_of_baal_berith",
    "name": "Orb Of Baal Berith",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "The first time each turn a Magic spell is cast nearby, Orb of Ba'al Berith creates a copy. The spell's controller may choose new targets.",
    "flavorText": "The ineffable, conveyed ineffably.",
    "artist": "Dan Seagrave",
    "imagePath": "alp-orb_of_baal_berith-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-ormund_harpooneers",
    "name": "Ormund Harpooneers",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Tap → Deal 1 damage to target minion above or below an adjacent water site and pull that minion to this location.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "alp-ormund_harpooneers-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-outback_strider",
    "name": "Outback Strider",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Moves freely between unoccupied land sites.",
    "flavorText": "",
    "artist": "Tony Szczudlo",
    "imagePath": "alp-outback_strider-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-overpower",
    "name": "Overpower",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Give an ally +2 power this turn.",
    "flavorText": "Suddenly the soldier was flung so violently from his mount, his sword became a ploughshare.",
    "artist": "Vincent Pompetti",
    "imagePath": "alp-overpower-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-pact_with_the_devil",
    "name": "Pact With The Devil",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Sacrifice the caster or lose half your life, rounding up. If you do, draw three cards.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "alp-pact_with_the_devil-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-palliburrie_bats",
    "name": "Palliburrie Bats",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Airborne",
      "Burrowing"
    ],
    "effectText": "Airborne, Burrowing",
    "flavorText": "To the bat, it is the world that's blind.\nTo the song-spun tapestry of its kind.",
    "artist": "Lindsey Crummett",
    "imagePath": "alp-palliburrie_bats-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-panorama_manticore",
    "name": "Panorama Manticore",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 5,
    "life": 5,
    "keywords": [
      "Airborne",
      "Lethal"
    ],
    "effectText": "Airborne, Lethal\n\nAt the end of your turn, if you cast a non-fire spell this turn, untap Panorama Manticore.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "alp-panorama_manticore-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-pathfinder",
    "name": "Pathfinder",
    "set": "Alpha",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "alp-pathfinder-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "alp-payload_trebuchet",
    "name": "Payload Trebuchet",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Tap bearer and another ally here, Discard a card → Deal damage equal to the discarded card's mana cost to each unit at target location up to three steps away.",
    "flavorText": "",
    "artist": "Ossi Hiekkala",
    "imagePath": "alp-payload_trebuchet-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-pendulum_of_peril",
    "name": "Pendulum Of Peril",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 6,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "At the end of each player's turn, Pendulum of Peril kills all minions at its current location and another adjacent location of that player's choice.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "alp-pendulum_of_peril-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-peregrine_apparition",
    "name": "Peregrine Apparition",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Airborne",
      "Voidwalk",
      "Movement"
    ],
    "effectText": "Airborne, Movement +3, Voidwalk",
    "flavorText": "The truly sublime know no bounds.",
    "artist": "Adam Burke",
    "imagePath": "alp-peregrine_apparition-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-petrosian_cavalry",
    "name": "Petrosian Cavalry",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Charge"
    ],
    "effectText": "Charge",
    "flavorText": "By their swift steeds and swifter swords the tide of many a battle has turned.",
    "artist": "Andrea Modesti",
    "imagePath": "alp-petrosian_cavalry-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-phantasmal_shade",
    "name": "Phantasmal Shade",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "When Phantasmal Shade is struck, destroy it.",
    "flavorText": "",
    "artist": "Santiago Caruso",
    "imagePath": "alp-phantasmal_shade-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-phantom_steed",
    "name": "Phantom Steed",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Voidwalk",
      "Movement"
    ],
    "effectText": "Movement +2, Voidwalk\n\nMay carry an allied minion.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "alp-phantom_steed-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-phase_assassin",
    "name": "Phase Assassin",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Voidwalk"
    ],
    "effectText": "Voidwalk\n\nWhenever Phase Assassin enters the void, he gains Stealth.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "alp-phase_assassin-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-philosophers_stone",
    "name": "Philosophers Stone",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "The first spell of each element cast by the bearer each turn costs (1) less.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "alp-philosophers_stone-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-pillar_of_zeiros",
    "name": "Pillar Of Zeiros",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Banish all dead minions, and you heal 1 life for each.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "alp-pillar_of_zeiros-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-pirate_ship",
    "name": "Pirate Ship",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 5,
    "life": 5,
    "keywords": [
      "Waterbound"
    ],
    "effectText": "Waterbound",
    "flavorText": "\"Build me straight, O worthy Master!\nStaunch and strong, a goodly vessel,\nThat shall laugh at all disaster,\nAnd with wave and whirlwind wrestle!\"\n— Henry Wadsworth Longfellow",
    "artist": "Vincent Pompetti",
    "imagePath": "alp-pirate_ship-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-pit_vipers",
    "name": "Pit Vipers",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Burrowing",
      "Lethal"
    ],
    "effectText": "Burrowing, Lethal",
    "flavorText": "Always look before you leap, for snakes among the hollows creep.",
    "artist": "Michal Nagypál",
    "imagePath": "alp-pit_vipers-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-plague_of_frogs",
    "name": "Plague Of Frogs",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 3
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Summon seven Frog tokens.",
    "flavorText": "No more chilling a sound than a congress of croaks, and the splitter splatter of slimy feet.",
    "artist": "Michal Nagypál",
    "imagePath": "alp-plague_of_frogs-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-planar_gate",
    "name": "Planar Gate",
    "set": "Alpha",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "alp-planar_gate-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "alp-plumed_pegasus",
    "name": "Plumed Pegasus",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne",
    "flavorText": "Thereupon I could not breathe, but sighs were pardoned unto me. To see the pegasus fly is to feel the spirit soar.",
    "artist": "Melissa A. Benson",
    "imagePath": "alp-plumed_pegasus-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-pnakotic_manuscript",
    "name": "Pnakotic Manuscript",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Bearer has \"Tap → Reveal your topmost spell and draw it. Bearer takes damage equal to that card's cost.\"",
    "flavorText": "An understanding so vast it leaves little room for sanity.",
    "artist": "Francesca Baerald",
    "imagePath": "alp-pnakotic_manuscript-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-poison_nova",
    "name": "Poison Nova",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Lethal"
    ],
    "effectText": "Lethal\n\nDeal 1 damage to each other nearby minion.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "alp-poison_nova-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-poisonous_dagger",
    "name": "Poisonous Dagger",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Lethal"
    ],
    "effectText": "Bearer has Lethal.",
    "flavorText": "Scantest scratch fulfilled Withal the strength of twenty Shall thine heart be stilled",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "alp-poisonous_dagger-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-polar_bears",
    "name": "Polar Bears",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Can move as if the top and bottom edges of the realm were connected.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "alp-polar_bears-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-polar_explorers",
    "name": "Polar Explorers",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Allied units here can move as if the top and bottom edges of the realm were connected.",
    "flavorText": "",
    "artist": "Marta Molina",
    "imagePath": "alp-polar_explorers-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-pollimorph",
    "name": "Pollimorph",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Transform target nearby minion into a Frog token.",
    "flavorText": "",
    "artist": "Francesca Baerald",
    "imagePath": "alp-pollimorph-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-porcupine_pufferfish",
    "name": "Porcupine Pufferfish",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Submerge",
      "Lethal"
    ],
    "effectText": "Lethal, Submerge",
    "flavorText": "A remarkable thirteen pufferfish entries are found in Bog'duul's Greater and Lesser Poisons and Their Uses.",
    "artist": "Brian Smith",
    "imagePath": "alp-porcupine_pufferfish-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-primordial_spring",
    "name": "Primordial Spring",
    "set": "Alpha",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "alp-primordial_spring-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "alp-pristine_paradise",
    "name": "Pristine Paradise",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Air",
      "Earth",
      "Fire",
      "Water"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 1,
      "fire": 1,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Provides no mana or threshold unless completely empty.",
    "flavorText": "",
    "artist": "Marta Molina",
    "imagePath": "alp-pristine_paradise-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-psionic_blast",
    "name": "Psionic Blast",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Deal 1 damage to each minion here. They're disabled until your next turn.",
    "flavorText": "A laden conscience soon becomes leaden.",
    "artist": "Alan Pollack",
    "imagePath": "alp-psionic_blast-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-pudge_butcher",
    "name": "Pudge Butcher",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 5,
    "life": 5,
    "keywords": [
      "Immobile"
    ],
    "effectText": "Immobile\n\nTap → Shoot a projectile. If it hits a unit, drag it to this location. Pudge may fight it.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "alp-pudge_butcher-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-puppet_master",
    "name": "Puppet Master",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nGenesis → Gain control of all tapped minions here until Puppet Master leaves the realm.",
    "flavorText": "",
    "artist": "Liz Danforth",
    "imagePath": "alp-puppet_master-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-purge_juggernaut",
    "name": "Purge Juggernaut",
    "set": "Alpha",
    "type": "Minion",
    "elements": [],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {},
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "At the start of your turn, Purge Juggernaut taps and moves to an adjacent location. Kill all minions there.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "alp-purge_juggernaut-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-quagmire",
    "name": "Quagmire",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Immobile",
      "Genesis"
    ],
    "effectText": "Genesis → Units occupying nearby sites are Immobile until your next turn.",
    "flavorText": "",
    "artist": "Caio Calazans",
    "imagePath": "alp-quagmire-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-quarrelsome_kobolds",
    "name": "Quarrelsome Kobolds",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "At the end of your turn, Quarrelsome Kobolds strike themselves or another target adjacent unit.",
    "flavorText": "\"He started it!\" — The one that started it",
    "artist": "Alan Pollack",
    "imagePath": "alp-quarrelsome_kobolds-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-queen_of_midland",
    "name": "Queen Of Midland",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "After an opponent draws a card, if they have more cards than you, you may draw a card.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "alp-queen_of_midland-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-raal_dromedary",
    "name": "Raal Dromedary",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "",
    "flavorText": "\"And a coarse grace remained: his head was high, Though his gaunt flanks with a great mange were worn: There was not any yearning in his eye, But on his lips and nostril infinite scorn.\" — Archibald Young Campbell\"",
    "artist": "Caio Calazans",
    "imagePath": "alp-raal_dromedary-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-rain_of_arrows",
    "name": "Rain Of Arrows",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Deal 1 damage to each aboveground minion.",
    "flavorText": "\"Then we will fight in the shade!\" — Dienekes",
    "artist": "Vincent Pompetti",
    "imagePath": "alp-rain_of_arrows-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-raise_dead",
    "name": "Raise Dead",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Summon a random dead minion.",
    "flavorText": "The living need the dead far more than the dead need the living. — Thomas Laqueur",
    "artist": "Tony Szczudlo",
    "imagePath": "alp-raise_dead-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-recall",
    "name": "Recall",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Teleport any number of allied minions to the caster's location.",
    "flavorText": "",
    "artist": "Ossi Hiekkala",
    "imagePath": "alp-recall-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-recurring_specter",
    "name": "Recurring Specter",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "Can't defend.\n\nMay be cast from your cemetery.",
    "flavorText": "",
    "artist": "Tony Szczudlo",
    "imagePath": "alp-recurring_specter-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-red_desert",
    "name": "Red Desert",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Deal 1 damage to each minion atop target nearby site.",
    "flavorText": "",
    "artist": "AronjaArt",
    "imagePath": "alp-red_desert-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-remote_desert",
    "name": "Remote Desert",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Deal 1 damage to each minion atop target nearby site.",
    "flavorText": "",
    "artist": "AronjaArt",
    "imagePath": "alp-remote_desert-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-replication",
    "name": "Replication",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Conjure a copy of an artifact carried by the caster.",
    "flavorText": "A great sorcerer does not imitate; he plagiarizes.",
    "artist": "Francesca Baerald",
    "imagePath": "alp-replication-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-rest_in_peace",
    "name": "Rest In Peace",
    "set": "Alpha",
    "type": "Aura",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Whenever a Spirit or Undead minion occupies affected land sites, burrow it.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "alp-rest_in_peace-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-riddle_sphinx",
    "name": "Riddle Sphinx",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nGenesis → Look at your topmost spell. You may put it on the bottom of your spellbook, then an opponent may exchange your top and bottommost spells. Draw a card.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "alp-riddle_sphinx-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-rift_valley",
    "name": "Rift Valley",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "You may pull apart a partial row or column to make a void in which to play this.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "alp-rift_valley-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-rimland_nomads",
    "name": "Rimland Nomads",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Movement"
    ],
    "effectText": "Movement +1\n\nTakes no damage from Deserts.",
    "flavorText": "As the sands shift, so shall we.",
    "artist": "Elvira Shakirova",
    "imagePath": "alp-rimland_nomads-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-riptide",
    "name": "Riptide",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Target water site pulls in an aboveground unit it's adjacent to. Draw a card.",
    "flavorText": "",
    "artist": "Marta Molina",
    "imagePath": "alp-riptide-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-river_of_flame",
    "name": "River Of Flame",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Fire Spellcaster",
    "flavorText": "",
    "artist": "Ian Miller",
    "imagePath": "alp-river_of_flame-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-roaming_monster",
    "name": "Roaming Monster",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 5,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "May be summoned to any site.",
    "flavorText": "Heeere's Brawny!",
    "artist": "Jeff Easley",
    "imagePath": "alp-roaming_monster-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-rolling_boulder",
    "name": "Rolling Boulder",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Units here have \"Tap → Give Rolling Boulder a push. It rolls as far as possible and deals 4 damage to each other unit along its path.\"",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "alp-rolling_boulder-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-root_spider",
    "name": "Root Spider",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Burrowing"
    ],
    "effectText": "Burrowing\n\nWhile Root Spider is burrowed, minions directly above it are disabled.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "alp-root_spider-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-roots_of_yggdrasil",
    "name": "Roots Of Yggdrasil",
    "set": "Alpha",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "alp-roots_of_yggdrasil-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "alp-royal_bodyguard",
    "name": "Royal Bodyguard",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "If a nearby Avatar or royalty (King, Queen, Prince, or Princess) would take damage, Royal Bodyguard may take that damage instead.",
    "flavorText": "",
    "artist": "Liz Danforth",
    "imagePath": "alp-royal_bodyguard-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-rubble",
    "name": "Rubble",
    "set": "Alpha",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "alp-rubble-bt",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "alp-ruby_core",
    "name": "Ruby Core",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Provides (F) and (1) to its controller.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "alp-ruby_core-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-ruins",
    "name": "Ruins",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Air",
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "What do lines on a map mean to the sand and the sun and the wind?",
    "artist": "Dan Seagrave",
    "imagePath": "alp-ruins-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-ruler_of_thul",
    "name": "Ruler Of Thul",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Charge"
    ],
    "effectText": "Charge\n\nAllies can move as if the top and bottom edges of the realm were connected. Other allies occupying sites there have +1 power.",
    "flavorText": "",
    "artist": "Frank Frazetta",
    "imagePath": "alp-ruler_of_thul-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-rustic_village",
    "name": "Rustic Village",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → You may pay (1) to summon a Foot Soldier token here.",
    "flavorText": "",
    "artist": "Andrea Modesti",
    "imagePath": "alp-rustic_village-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-sacred_scarabs",
    "name": "Sacred Scarabs",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nDeathrite → Deal 3 damage to each unit here.",
    "flavorText": "It's all fun and games until someone steps on a bug.",
    "artist": "Melissa A. Benson",
    "imagePath": "alp-sacred_scarabs-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-sand_worm",
    "name": "Sand Worm",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Burrowing"
    ],
    "effectText": "Burrowing, Landbound",
    "flavorText": "Only a soft susurration betrays the passing of these desert leviathans far beneath your feet.",
    "artist": "Vincent Pompetti",
    "imagePath": "alp-sand_worm-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-sandstorm",
    "name": "Sandstorm",
    "set": "Alpha",
    "type": "Aura",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Affected sites and units atop them can't be attacked or intercepted.\n\nAt the start of your turn, dispel Sandstorm.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "alp-sandstorm-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-scarecrow",
    "name": "Scarecrow",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Airborne",
      "Genesis"
    ],
    "effectText": "Genesis → Return each Airborne minion here to its owner's hand.\n\nAirborne minions can't enter this location.",
    "flavorText": "",
    "artist": "Lindsey Crummett",
    "imagePath": "alp-scarecrow-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-scavenging_fiend",
    "name": "Scavenging Fiend",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Conjure a broken artifact to this location.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "alp-scavenging_fiend-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-scent_hounds",
    "name": "Scent Hounds",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Stealth"
    ],
    "effectText": "Nearby enemies permanently lose Stealth.",
    "flavorText": "For the upwardly mobile of the Midland Court, accolades in the Royal Hunt of the Mist were as treasured as any war-time achievement.",
    "artist": "Andrea Modesti",
    "imagePath": "alp-scent_hounds-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-scorched_earth",
    "name": "Scorched Earth",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Choose any number of sites you control. Destroy each of those sites and everything there.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "alp-scorched_earth-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-scourge_zombies",
    "name": "Scourge Zombies",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Whenever an allied Mortal dies on land, you may summon Scourge Zombies from your cemetery to its location, tapped.",
    "flavorText": "",
    "artist": "Mattias Frisk",
    "imagePath": "alp-scourge_zombies-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-screaming_skull",
    "name": "Screaming Skull",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Whenever bearer attacks and kills an enemy, it untaps.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "alp-screaming_skull-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-sea_raider",
    "name": "Sea Raider",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Whenever Sea Raider attacks and kills an enemy, its controller discards their topmost spell. You may cast that spell once this turn, ignoring threshold.",
    "flavorText": "",
    "artist": "Tony Szczudlo",
    "imagePath": "alp-sea_raider-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-sea_serpent",
    "name": "Sea Serpent",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Submerge",
      "Waterbound"
    ],
    "effectText": "Submerge, Waterbound",
    "flavorText": "The study of sea serpents advances one funeral at a time.",
    "artist": "Vincent Pompetti",
    "imagePath": "alp-sea_serpent-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-seasoned_sellsword",
    "name": "Seasoned Sellsword",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "Avatars nearby have \"Discard a card → Gain control of Seasoned Sellsword.\"",
    "flavorText": "",
    "artist": "Lindsey Crummett",
    "imagePath": "alp-seasoned_sellsword-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-secret_tunnel",
    "name": "Secret Tunnel",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Burrowed allies can move as if this were adjacent to your other sites.",
    "flavorText": "",
    "artist": "Doug Kovacs",
    "imagePath": "alp-secret_tunnel-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-sedge_crabs",
    "name": "Sedge Crabs",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Can only move themselves sideways.",
    "flavorText": "\"One will never make the crab walk straight.\" — Aristophanes",
    "artist": "Ossi Hiekkala",
    "imagePath": "alp-sedge_crabs-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-seer",
    "name": "Seer",
    "set": "Alpha",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "alp-seer-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "alp-seirawan_hydra",
    "name": "Seirawan Hydra",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 6,
    "life": 6,
    "keywords": [],
    "effectText": "Immune to non-lethal damage.",
    "flavorText": "Fell the tree, and the branches are soon cut off. — Francis Quarles",
    "artist": "Melissa A. Benson",
    "imagePath": "alp-seirawan_hydra-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-selfsame_simulacrum",
    "name": "Selfsame Simulacrum",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 0,
    "life": 0,
    "keywords": [],
    "effectText": "May be summoned as a basic copy of a nearby minion.",
    "flavorText": "Common folk view their lives through a half-silvered mirror, seeing only their own reflection.",
    "artist": "Elvira Shakirova",
    "imagePath": "alp-selfsame_simulacrum-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-seven_league_boots",
    "name": "Seven League Boots",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Movement"
    ],
    "effectText": "Bearer has Movement +7.",
    "flavorText": "\"Bring me my boots at once, so that I may catch them!\" — Charles Perrault",
    "artist": "Melissa A. Benson",
    "imagePath": "alp-seven_league_boots-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-shield_maidens",
    "name": "Shield Maidens",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Nearby allies take 1 less damage.",
    "flavorText": "My word is my bond, my shield is my service.",
    "artist": "Vincent Pompetti",
    "imagePath": "alp-shield_maidens-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-shield_wall",
    "name": "Shield Wall",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Until your next turn, each ally takes 1 less damage for each other ally it's nearby.",
    "flavorText": "",
    "artist": "Andrea Modesti",
    "imagePath": "alp-shield_wall-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-shifting_sands",
    "name": "Shifting Sands",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Reactivate the Genesis abilities of your nearby Deserts.",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "alp-shifting_sands-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-shrink",
    "name": "Shrink",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Set the base power of target nearby unit to 0 until your next turn.",
    "flavorText": "",
    "artist": "Francesca Baerald",
    "imagePath": "alp-shrink-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-siege_ballista",
    "name": "Siege Ballista",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Tap bearer and another ally here → Deal 3 damage to target unit up to two steps away.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "alp-siege_ballista-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-silence",
    "name": "Silence",
    "set": "Alpha",
    "type": "Aura",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Minions occupying affected sites lose all non-basic abilities.",
    "flavorText": "",
    "artist": "Marta Molina",
    "imagePath": "alp-silence-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-silver_valkyries",
    "name": "Silver Valkyries",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nAt the end of your turn, untap all allies here.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "alp-silver_valkyries-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-simple_village",
    "name": "Simple Village",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → You may pay (1) to summon a Foot Soldier token here.",
    "flavorText": "",
    "artist": "Andrea Modesti",
    "imagePath": "alp-simple_village-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-sinkhole",
    "name": "Sinkhole",
    "set": "Alpha",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "alp-sinkhole-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "alp-sirian_templar",
    "name": "Sirian Templar",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Takes no damage from Demon, Spirit, or Undead minions.",
    "flavorText": "Struck down, the templar rose again, guided by his holy purpose—and the dawn rose with him.",
    "artist": "Gadu Duaso",
    "imagePath": "alp-sirian_templar-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-sirocco_scorpions",
    "name": "Sirocco Scorpions",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Lethal"
    ],
    "effectText": "Lethal",
    "flavorText": "They wait and watch with eyes of soot.",
    "artist": "Michal Nagypál",
    "imagePath": "alp-sirocco_scorpions-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-sisters_of_silence",
    "name": "Sisters Of Silence",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "Other nearby minions lose all non-basic abilities.",
    "flavorText": "\"Since long I've held silence as a remedy for harm.\" — Aeschylus",
    "artist": "Ossi Hiekkala",
    "imagePath": "alp-sisters_of_silence-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-skirmishers_of_mu",
    "name": "Skirmishers Of Mu",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Ranged"
    ],
    "effectText": "Ranged\n\nDuring basic movement, Skirmishers of Mu may perform a ranged strike from any location along their path.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "alp-skirmishers_of_mu-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-sky_baron",
    "name": "Sky Baron",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 6,
    "life": 6,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nAll other minions lose Airborne.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "alp-sky_baron-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-sleep",
    "name": "Sleep",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Target minion at a location up to two steps away falls asleep. It's disabled until it takes damage.",
    "flavorText": "Breathe deep the gathering bloom.",
    "artist": "Séverine Pineaux",
    "imagePath": "alp-sleep-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-sling_pixies",
    "name": "Sling Pixies",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Airborne",
      "Ranged"
    ],
    "effectText": "Airborne, Ranged\n\nTakes no damage from units with 4 or more power.",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "alp-sling_pixies-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-slumbering_giantess",
    "name": "Slumbering Giantess",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 5,
    "life": 5,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Fall asleep. Slumbering Giantess is disabled until hurt.",
    "flavorText": "",
    "artist": "Liz Danforth",
    "imagePath": "alp-slumbering_giantess-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-smokestacks_of_gnaak",
    "name": "Smokestacks Of Gnaak",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Other nearby sites lose their abilities.",
    "flavorText": "",
    "artist": "Ian Miller",
    "imagePath": "alp-smokestacks_of_gnaak-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-sneak_thief",
    "name": "Sneak Thief",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Stealth"
    ],
    "effectText": "Stealth\n\nTap → Steal an artifact out of the hands of another target unit here, and stay Stealthed.",
    "flavorText": "",
    "artist": "Jeff Easley",
    "imagePath": "alp-sneak_thief-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-snow_leopard",
    "name": "Snow Leopard",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "",
    "flavorText": "\"This is the Le-o-pard, my child, His temper's anything but mild.\" ? A. M. Shaw & C. Beckwith",
    "artist": "Lindsey Crummett",
    "imagePath": "alp-snow_leopard-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-sorcerer",
    "name": "Sorcerer",
    "set": "Alpha",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "alp-sorcerer-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "alp-spear_of_destiny",
    "name": "Spear Of Destiny",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Bearer has \"Tap → Throw Spear of Destiny at any minion anywhere. It teleports to that minion's location and kills it.\"",
    "flavorText": "Nor mortal's blood shall sate a hunger erst whetted by divine.",
    "artist": "Andrea Modesti",
    "imagePath": "alp-spear_of_destiny-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-spectral_stalker",
    "name": "Spectral Stalker",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Voidwalk"
    ],
    "effectText": "Voidwalk",
    "flavorText": "\"We live on a placid island of ignorance in the midst of black seas of infinity, and it was not meant that we should voyage far.\" ? H. P. Lovecraft",
    "artist": "Jeff Easley",
    "imagePath": "alp-spectral_stalker-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-spin_attack",
    "name": "Spin Attack",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "An ally strikes each enemy at its location.",
    "flavorText": "",
    "artist": "Truitt Parrish",
    "imagePath": "alp-spin_attack-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-spire_lich",
    "name": "Spire Lich",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Ranged",
      "Spellcaster"
    ],
    "effectText": "If Spire Lich is atop a Tower, it has +2 power, Ranged, and Spellcaster.",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "alp-spire_lich-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-spring_river",
    "name": "Spring River",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Look at your next spell. You may put it on the bottom of your spellbook.",
    "flavorText": "",
    "artist": "Matt Tames",
    "imagePath": "alp-spring_river-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-squirming_mass",
    "name": "Squirming Mass",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 0,
    "life": 0,
    "keywords": [],
    "effectText": "Whenever a nearby minion dies, Squirming Mass permanently gains its power.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "alp-squirming_mass-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-standing_stones",
    "name": "Standing Stones",
    "set": "Alpha",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "alp-standing_stones-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "alp-star_seeds_of_uhr",
    "name": "Star Seeds Of Uhr",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Fill up to thirteen voids with Rubble.",
    "flavorText": "For each layer of ruin excavated, another calamity of yore was revealed.",
    "artist": "Brian Smith",
    "imagePath": "alp-star_seeds_of_uhr-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-steppe",
    "name": "Steppe",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Earth",
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "There's beauty in the simplicity of empty horizons.",
    "artist": "Andrea Modesti",
    "imagePath": "alp-steppe-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-stone_gaze_gorgons",
    "name": "Stone Gaze Gorgons",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Other minions at rest at adjacent locations are disabled.",
    "flavorText": "In the gleam of his unblooded sword, Veslin unwittingly beheld a sight no mortal had yet lived to unsee.",
    "artist": "Séverine Pineaux",
    "imagePath": "alp-stone_gaze_gorgons-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-stormy_seas",
    "name": "Stormy Seas",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge all minions and artifacts occupying target water site.",
    "flavorText": "The sea is angry today, my friends; hike and hold, men, fly! Bring due astern Neptune's belly!",
    "artist": "Vincent Pompetti",
    "imagePath": "alp-stormy_seas-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-summer_river",
    "name": "Summer River",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Look at your next spell. You may put it on the bottom of your spellbook.",
    "flavorText": "",
    "artist": "Matt Tames",
    "imagePath": "alp-summer_river-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-summoning_sphere",
    "name": "Summoning Sphere",
    "set": "Alpha",
    "type": "Aura",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "You may summon minions to affected sites.",
    "flavorText": "The icy earth swung blind and blackening in the moonless air. Morn came and went—and came, and brought no day. — Lord Byron",
    "artist": "Michal Nagypál",
    "imagePath": "alp-summoning_sphere-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-sunken_treasure",
    "name": "Sunken Treasure",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "If cast, conjure this under an allied water site of an opponent's choice.\n\nWhen Sunken Treasure is carried to the surface, its controller sacrifices it and draws two cards.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "alp-sunken_treasure-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-swamp_buffalo",
    "name": "Swamp Buffalo",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "",
    "flavorText": "Impassive, plump, and peaceful, the swamp buffalo is an icon of contentment.",
    "artist": "Jussi Pylkäs",
    "imagePath": "alp-swamp_buffalo-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-swan_maidens",
    "name": "Swan Maidens",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Airborne",
      "Submerge"
    ],
    "effectText": "Airborne, Submerge",
    "flavorText": "Before woman was, the water awaited her.",
    "artist": "Ossi Hiekkala",
    "imagePath": "alp-swan_maidens-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-swiven_scout",
    "name": "Swiven Scout",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Movement"
    ],
    "effectText": "Movement +1\n\nEnemy Avatars within Swiven Scout's range of motion play with their hands revealed.",
    "flavorText": "\"Know thine enemy and know thyself, and feel not the awe of a hundred battles.\" — Sun Tzu",
    "artist": "Jeff A. Menges",
    "imagePath": "alp-swiven_scout-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-tadpole_pool",
    "name": "Tadpole Pool",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "(W)(W)(W) — Genesis → Summon three submerged Frog tokens here.",
    "flavorText": "",
    "artist": "Michal Nagypál",
    "imagePath": "alp-tadpole_pool-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-telekinesis",
    "name": "Telekinesis",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Caster snatches and picks up target nearby artifact they can carry.",
    "flavorText": "\"If it's in my hand, it's mine.\" — Toddler's first rule.",
    "artist": "Jeff Easley",
    "imagePath": "alp-telekinesis-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-teleport",
    "name": "Teleport",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Teleport an ally to the surface of target site.",
    "flavorText": "\"There was no real sense of time passing, and in the last act it felt like everyone was just teleporting everywhere.\" — Highland Theater Critic",
    "artist": "Vincent Pompetti",
    "imagePath": "alp-teleport-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-the_colour_out_of_space",
    "name": "The Colour Out Of Space",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Air",
      "Earth",
      "Fire",
      "Water"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 1,
      "fire": 1,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Provides no mana or threshold if not adjacent to the void.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "alp-the_colour_out_of_space-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-the_geistwood",
    "name": "The Geistwood",
    "set": "Alpha",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "alp-the_geistwood-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "alp-the_immortal_throne",
    "name": "The Immortal Throne",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Whenever anyone plays a card with cost equal to the number of level counters on The Immortal Throne, they draw a card and add a level counter.\n\nAt level 8 or more, an Avatar here alone wins the game.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "alp-the_immortal_throne-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-thunderstorm",
    "name": "Thunderstorm",
    "set": "Alpha",
    "type": "Aura",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "At the end of your turn, deal 3 damage to a random unit atop affected sites, then you may move Thunderstorm one step. After it deals damage three times, dispel it.",
    "flavorText": "",
    "artist": "Ossi Hiekkala",
    "imagePath": "alp-thunderstorm-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-tide_naiads",
    "name": "Tide Naiads",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge\n\nThis site is flooded. It is a water site.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "alp-tide_naiads-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-torshammar_trinket",
    "name": "Torshammar Trinket",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Bearer has +1 power.\n\nAt the end of your turn, return this to its owner's hand.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "alp-torshammar_trinket-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-tragedy_worrywart",
    "name": "Tragedy Worrywart",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "Units nearby take no damage from Magic spells.",
    "flavorText": "Better safe than sorry.",
    "artist": "Jeff A. Menges",
    "imagePath": "alp-tragedy_worrywart-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-tringh_constrictor",
    "name": "Tringh Constrictor",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Tap → Tringh Constrictor may take a step, then it constricts and disables target minion at its location. At the start of your next turn, if the minion remains constricted, it dies. Tringh Constrictor doesn't untap during your next untap step.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "alp-tringh_constrictor-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-truesight_crossbow",
    "name": "Truesight Crossbow",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Ranged",
      "Stealth"
    ],
    "effectText": "Bearer has Ranged and can target Stealth units.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "alp-truesight_crossbow-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-tufted_turtles",
    "name": "Tufted Turtles",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "The first time Tuft Turtles would take damage each turn, prevent that damage.",
    "flavorText": "A turtle is never without a castle—or a coffin.",
    "artist": "Matt Tames",
    "imagePath": "alp-tufted_turtles-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-tvinnax_berserker",
    "name": "Tvinnax Berserker",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Whenever Tvinnax Berserker can attack a unit, he must.\n\nUntap Tvinnax Berserker whenever he attacks and kills an enemy minion.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "alp-tvinnax_berserker-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-twist_of_fate",
    "name": "Twist Of Fate",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 3
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Exchange life totals with target opponent. (X) is the difference between your life totals.",
    "flavorText": "",
    "artist": "Santiago Caruso",
    "imagePath": "alp-twist_of_fate-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-ultimate_horror",
    "name": "Ultimate Horror",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 8,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 6,
    "life": 6,
    "keywords": [
      "Airborne",
      "Voidwalk"
    ],
    "effectText": "Airborne, Voidwalk\n\nGenesis → Summon each other dead Voidwalk minion to a nearby site or void.",
    "flavorText": "",
    "artist": "Ian Miller",
    "imagePath": "alp-ultimate_horror-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-undertaker_engine",
    "name": "Undertaker Engine",
    "set": "Alpha",
    "type": "Minion",
    "elements": [],
    "rarity": "Elite",
    "cost": 7,
    "threshold": {},
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "At the end of your turn, you may burrow and/or unburrow any combination of artifacts and minions at this site.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "alp-undertaker_engine-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-undertow",
    "name": "Undertow",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Staying within this body of water, move target unit one step.",
    "flavorText": "",
    "artist": "Caio Calazans",
    "imagePath": "alp-undertow-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-unland_angler",
    "name": "Unland Angler",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge\n\nAt the start of your turn, if Unland Angler is submerged, force each enemy minion atop adjacent sites to take a step toward this one.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "alp-unland_angler-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-unland_eel",
    "name": "Unland Eel",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge\n\nWhenever Unland Eel submerges, it may drag another minion down with it.",
    "flavorText": "",
    "artist": "Francesca Baerald",
    "imagePath": "alp-unland_eel-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-unlikely_alliance",
    "name": "Unlikely Alliance",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Draw a card for each rarity among allied minions.",
    "flavorText": "There are three rules for winning a war. Unfortunately, nobody knows what they are.",
    "artist": "Ossi Hiekkala",
    "imagePath": "alp-unlikely_alliance-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-unravel",
    "name": "Unravel",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Destroy all artifacts and Undead minions at a location up to two steps away.",
    "flavorText": "\"My heart, why come you here alone? The wild thing of my heart is grown, to be a thing, fairy, and wild, and fair, and whole.\" — G. P. T. Branwen",
    "artist": "Séverine Pineaux",
    "imagePath": "alp-unravel-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-updraft_ridge",
    "name": "Updraft Ridge",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Airborne",
      "Movement"
    ],
    "effectText": "Airborne minions atop Updraft Ridge have Movement +1.",
    "flavorText": "",
    "artist": "Caio Calazans",
    "imagePath": "alp-updraft_ridge-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-upwelling",
    "name": "Upwelling",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Target a nearby site. Return each artifact and minion there to its owner's hand.",
    "flavorText": "There is no height to which confident fools cannot ascend.",
    "artist": "Alan Pollack",
    "imagePath": "alp-upwelling-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-vanguard_knights",
    "name": "Vanguard Knights",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Vanguard Knights have +2 power if they alone are the furthest forward of your units.",
    "flavorText": "",
    "artist": "Truitt Parrish",
    "imagePath": "alp-vanguard_knights-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-vantage_hills",
    "name": "Vantage Hills",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Ranged"
    ],
    "effectText": "Ranged units atop this site have +1 range.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "alp-vantage_hills-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-vaults_of_zul",
    "name": "Vaults Of Zul",
    "set": "Alpha",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "alp-vaults_of_zul-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "alp-vesuvius",
    "name": "Vesuvius",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "(F)(F)(F) — Sacrifice Vesuvius → Each unit occupying nearby sites takes 3 damage.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "alp-vesuvius-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-vile_imp",
    "name": "Vile Imp",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → May deal 2 damage to target adjacent unit.",
    "flavorText": "One good burn deserves another.",
    "artist": "Frank Frazetta",
    "imagePath": "alp-vile_imp-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-vril_revenant",
    "name": "Vril Revenant",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Voidwalk"
    ],
    "effectText": "Voidwalk\n\n(1) → Gain +1 power this turn.",
    "flavorText": "",
    "artist": "Margaret Organ-Kean",
    "imagePath": "alp-vril_revenant-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-wall_of_air",
    "name": "Wall Of Air",
    "set": "Alpha",
    "type": "Aura",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Conjure atop the border of a site you control.\n\nMinions with Airborne or 2 or less power can't traverse Wall of Air.",
    "flavorText": "",
    "artist": "Matt Tames",
    "imagePath": "alp-wall_of_air-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-wall_of_fire",
    "name": "Wall Of Fire",
    "set": "Alpha",
    "type": "Aura",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Conjure atop the border of a site you control.\nWhenever a unit passes through Wall of Fire, it takes 3 damage.",
    "flavorText": "",
    "artist": "Matt Tames",
    "imagePath": "alp-wall_of_fire-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-wall_of_ice",
    "name": "Wall Of Ice",
    "set": "Alpha",
    "type": "Aura",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Conjure atop the border of a site you control.\n\nUnits can't traverse Wall of Ice on the ground.",
    "flavorText": "",
    "artist": "Matt Tames",
    "imagePath": "alp-wall_of_ice-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-warp_spasm",
    "name": "Warp Spasm",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 3,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "This turn, double an allied minion's power, and whenever it attacks and kills a unit, it untaps. At the end of the turn, it dies.",
    "flavorText": "",
    "artist": "Ian Miller",
    "imagePath": "alp-warp_spasm-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-watchtower",
    "name": "Watchtower",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Stealth"
    ],
    "effectText": "Enemy units atop nearby sites permanently lose Stealth.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "alp-watchtower-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-wayfaring_pilgrim",
    "name": "Wayfaring Pilgrim",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "Whenever Wayfaring Pilgrim enters each corner of the realm for the first time, you may draw a card.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "alp-wayfaring_pilgrim-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-waypoint_portal",
    "name": "Waypoint Portal",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Choose two different sites. This turn, units can move between them as if they were adjacent.",
    "flavorText": "",
    "artist": "Jeff Easley",
    "imagePath": "alp-waypoint_portal-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-whirling_blades",
    "name": "Whirling Blades",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 5,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "An ally may take up to two steps, and then strikes each enemy along their entire path.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "alp-whirling_blades-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-wicked_witch",
    "name": "Wicked Witch",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Spellcaster\n\nOther nearby minions have -2 power.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "alp-wicked_witch-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-wicker_manikin",
    "name": "Wicker Manikin",
    "set": "Alpha",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {},
    "power": 1,
    "life": 1,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Non-fire Spellcaster",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "alp-wicker_manikin-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-wild_boars",
    "name": "Wild Boars",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "",
    "flavorText": "Twere once again drowsy, when all in a rush, wild boar came a-snuffling, straight out of the brush!",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "alp-wild_boars-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-wildfire",
    "name": "Wildfire",
    "set": "Alpha",
    "type": "Aura",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Conjure Wildfire atop a single site nearby.\n\nAt the end of each turn, each unit here takes 3 damage, then move Wildfire to an adjacent location it hasn't visited before. If none remain, dispel Wildfire.",
    "flavorText": "",
    "artist": "Mattias Frisk",
    "imagePath": "alp-wildfire-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-wills_o_the_wisp",
    "name": "Wills O The Wisp",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Voidwalk"
    ],
    "effectText": "Voidwalk\n\nWhenever Wills-o'-the-Wisp are attacked, they may teleport to another nearby void or location to evade the attack.",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "alp-wills_o_the_wisp-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-wind_sylph",
    "name": "Wind Sylph",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Airborne",
      "Spellcaster"
    ],
    "effectText": "Airborne, Air Spellcaster\n\nAfter Wind Sylph casts a Magic spell, she may push a unit here one step.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "alp-wind_sylph-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-windblast",
    "name": "Windblast",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Push everything atop sites one step in a cardinal direction.",
    "flavorText": "",
    "artist": "Michal Nagypál",
    "imagePath": "alp-windblast-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-windmill",
    "name": "Windmill",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Air",
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "The wind's wild words, in uncertain surges, whisper how the world was made.",
    "artist": "Elwira Pawlikowska",
    "imagePath": "alp-windmill-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-wings_of_invention",
    "name": "Wings Of Invention",
    "set": "Alpha",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Airborne",
      "Movement"
    ],
    "effectText": "Bearer has Airborne and Movement +1, if it's a minion.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "alp-wings_of_invention-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-winter_river",
    "name": "Winter River",
    "set": "Alpha",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "alp-winter_river-bt",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "alp-witherwing_hero",
    "name": "Witherwing Hero",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nWhenever a weaker allied minion here is attacked, you may return it to its owner's hand.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "alp-witherwing_hero-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-wraetannis_titan",
    "name": "Wraetannis Titan",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 6,
    "life": 6,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Strike each enemy here.",
    "flavorText": "",
    "artist": "Tony Szczudlo",
    "imagePath": "alp-wraetannis_titan-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-wrath_of_the_sea",
    "name": "Wrath Of The Sea",
    "set": "Alpha",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Flood all sites adjacent to a body of water this turn. Then submerge all minions and artifacts on water.",
    "flavorText": "",
    "artist": "Mattias Frisk",
    "imagePath": "alp-wrath_of_the_sea-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-yokai_kappas",
    "name": "Yokai Kappas",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Discard a water site → Untap Yokai Kappas. Use only once per turn.",
    "flavorText": "",
    "artist": "Gadu Duaso",
    "imagePath": "alp-yokai_kappas-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-yourke_crossbowmen",
    "name": "Yourke Crossbowmen",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Ranged"
    ],
    "effectText": "Ranged\n\nTakes no damage from ranged strikes.",
    "flavorText": "",
    "artist": "Andrea Modesti",
    "imagePath": "alp-yourke_crossbowmen-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "alp-zephyranne_airship",
    "name": "Zephyranne Airship",
    "set": "Alpha",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Airborne",
      "Movement"
    ],
    "effectText": "Airborne, Movement +2\n\nMay carry any number of allied minions.",
    "flavorText": "",
    "artist": "Marta Molina",
    "imagePath": "alp-zephyranne_airship-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-13_treasures_of_britain",
    "name": "13 Treasures Of Britain",
    "set": "Arthurian Legends",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "When picked up, bearer's controller draws a card. Teleport the Treasures to the top of a random site or void.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "art-13_treasures_of_britain-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-a_midsummer_nights_dream",
    "name": "A Midsummer Nights Dream",
    "set": "Arthurian Legends",
    "type": "Aura",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Mortals here are disabled and each give +1 power to all Faeries here. Dispel if there are no Faeries here.",
    "flavorText": "",
    "artist": "Seb McKinnon",
    "imagePath": "art-a_midsummer_nights_dream-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-amulet_of_niniane",
    "name": "Amulet Of Niniane",
    "set": "Arthurian Legends",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Bearer can't be targeted or damaged by magic.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "art-amulet_of_niniane-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-annual_fair",
    "name": "Annual Fair",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Air",
      "Earth",
      "Fire",
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "(1) → Gain (A), (E), (F), or (W) this turn.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "art-annual_fair-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-arc_lightning",
    "name": "Arc Lightning",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 4,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Deal 4 damage to target nearby unit.",
    "flavorText": "Lightning obeyed olde Merlin's command,\nJustice conveyed unto noggin from hand.",
    "artist": "Vincent Pompetti",
    "imagePath": "art-arc_lightning-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-arcane_barrage",
    "name": "Arcane Barrage",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": null,
    "threshold": {
      "air": 3,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Shoot X projectiles in the same direction, one at a time. Each deals 1 damage.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "art-arcane_barrage-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-archimago",
    "name": "Archimago",
    "set": "Arthurian Legends",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "art-archimago-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "art-attack_by_night",
    "name": "Attack By Night",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Enemies drop their artifacts. Allied units strike first this turn.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "art-attack_by_night-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-avalon",
    "name": "Avalon",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Earth",
      "Fire",
      "Water",
      "Air"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 1,
      "fire": 1,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Provides mana and threshold for everyone.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "art-avalon-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-babbling_brook",
    "name": "Babbling Brook",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Until your next turn, minions are disabled while atop nearby sites.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "art-babbling_brook-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-bailey",
    "name": "Bailey",
    "set": "Arthurian Legends",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Enemies can't move to here on the ground.",
    "flavorText": "While chaos takes the world around, \nA wooden wall keeps safe and sound.",
    "artist": "Andrea Modesti",
    "imagePath": "art-bailey-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-ball_lightning",
    "name": "Ball Lightning",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Shoot a projectile. It deals 4 damage on impact, then changes direction. Its next impact deals 2, then it changes direction. Its final impact deals 1.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "art-ball_lightning-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-band_of_thieves",
    "name": "Band Of Thieves",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Stealth"
    ],
    "effectText": "Stealth",
    "flavorText": "The darker the night, \nthe better to ply their crooked trade.",
    "artist": "Bryon Wackwitz",
    "imagePath": "art-band_of_thieves-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-beacon",
    "name": "Beacon",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Gain (1) for each nearby site with an enemy atop it.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "art-beacon-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-black_knight",
    "name": "Black Knight",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Fire",
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 1
    },
    "power": 5,
    "life": 3,
    "keywords": [],
    "effectText": "Costs (2) less to cast if you have more life than each opponent.",
    "flavorText": "",
    "artist": "Tony Szczudlo",
    "imagePath": "art-black_knight-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-blacksmith_family",
    "name": "Blacksmith Family",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {},
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Provides (F)",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "art-blacksmith_family-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-blue_knight",
    "name": "Blue Knight",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Water",
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 3,
    "life": 2,
    "keywords": [
      "Lance"
    ],
    "effectText": "Lance",
    "flavorText": "",
    "artist": "Margaret Organ-Kean",
    "imagePath": "art-blue_knight-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-bluecap_knockers",
    "name": "Bluecap Knockers",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Burrowing"
    ],
    "effectText": "Burrowing\n\nBluecap Knockers' site can't be moved, destroyed, or modified.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "art-bluecap_knockers-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-blunderbore",
    "name": "Blunderbore",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 5,
    "life": 5,
    "keywords": [],
    "effectText": "Allied Giants banish the minions they kill to permanently gain +1 power.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "art-blunderbore-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-bog",
    "name": "Bog",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [
      "Immobile",
      "Genesis"
    ],
    "effectText": "Genesis → Until your next turn, units are Immobile while atop target nearby site.",
    "flavorText": "",
    "artist": "Marta Molina",
    "imagePath": "art-bog-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-bonfire",
    "name": "Bonfire",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → You may destroy all Weapons and Armor nearby.",
    "flavorText": "",
    "artist": "Liz Danforth",
    "imagePath": "art-bonfire-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-boudicca",
    "name": "Boudicca",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 3,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Other allies have +3 power while successfully attacking sites.",
    "flavorText": "",
    "artist": "Margaret Organ-Kean",
    "imagePath": "art-boudicca-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-bower_of_bliss",
    "name": "Bower Of Bliss",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "art-bower_of_bliss-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "art-briar_patch",
    "name": "Briar Patch",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Whenever an enemy unit enters or leaves this site, it takes 1 damage.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "art-briar_patch-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-broceliande",
    "name": "Brocéliande",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "art-broceliande-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "art-brother_knight",
    "name": "Brother Knight",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 3,
    "life": 2,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → You may search your spellbook or hand for another Brother Knight and summon it here. Shuffle if needed.",
    "flavorText": "",
    "artist": "Quinton Hoover",
    "imagePath": "art-brother_knight-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-brown_bears",
    "name": "Brown Bears",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "",
    "flavorText": "Travel deep into the woods and you'll \nfind one of two things: peace or bears.",
    "artist": "Jeff A. Menges",
    "imagePath": "art-brown_bears-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-bruin",
    "name": "Bruin",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "art-bruin-bt",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "art-burning_hands",
    "name": "Burning Hands",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "May be cast by an allied Mortal. Choose two different cardinal directions and deal damage to each unit at locations in the area of effect:\n\n$1\n2\nC 2 1$",
    "flavorText": "",
    "artist": "Truitt Parrish",
    "imagePath": "art-burning_hands-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-caerleon_upon_usk",
    "name": "Caerleon Upon Usk",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Earth",
      "Fire",
      "Water"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 1,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Only provides mana and threshold while in your back row.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "art-caerleon_upon_usk-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-camelot",
    "name": "Camelot",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "art-camelot-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "art-cast_into_exile",
    "name": "Cast Into Exile",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Shuffle target minion occupying an allied site into its owner's spellbook.",
    "flavorText": "\"But as for your son, Sir Uwaine, I hold him suspect, therefore I \ncharge you put him out of my court.\" — Malory, le Morte D'Arthur",
    "artist": "Caio Calazans",
    "imagePath": "art-cast_into_exile-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-castle_haunt",
    "name": "Castle Haunt",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "May be cast to any Elite or Unique site.\n\nDies if it leaves its summoning site.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "art-castle_haunt-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-castle_servants",
    "name": "Castle Servants",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {},
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Provides (A)",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "art-castle_servants-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-castles_ablaze",
    "name": "Castle's Ablaze!",
    "set": "Arthurian Legends",
    "type": "Aura",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Conjure atop an Elite or Unique site.\n\nAt the start of your turn, destroy this site, minions atop it, and Castle's Ablaze.",
    "flavorText": "",
    "artist": "Andrea Modesti",
    "imagePath": "art-castles_ablaze-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-charge",
    "name": "Charge",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Charge"
    ],
    "effectText": "Give an ally Charge this turn.",
    "flavorText": "",
    "artist": "Rodney Matthews",
    "imagePath": "art-charge-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-cold_iron_rod",
    "name": "Cold Iron Rod",
    "set": "Arthurian Legends",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Faeries here are disabled.",
    "flavorText": "If a circle is traced with iron, or a pointed weapon \nis carried three times round them, it will preserve \nboth infant and adult from all unseelie influence.",
    "artist": "Lindsey Crummett",
    "imagePath": "art-cold_iron_rod-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-common_cottagers",
    "name": "Common Cottagers",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {},
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Provides (E)",
    "flavorText": "",
    "artist": "Margaret Organ-Kean",
    "imagePath": "art-common_cottagers-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-common_village",
    "name": "Common Village",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → You may pay (1) to summon a Foot Soldier token here.",
    "flavorText": "",
    "artist": "Andrea Modesti",
    "imagePath": "art-common_village-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-coy_nixie",
    "name": "Coy Nixie",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge\n\nOnce on your turn, Coy Nixie may force target nearby enemy to take a step towards her. Tap that enemy.",
    "flavorText": "",
    "artist": "Lindsey Crummett",
    "imagePath": "art-coy_nixie-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-cursed_land",
    "name": "Cursed Land",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Whenever another site is played nearby, its controller loses 2 life.",
    "flavorText": "",
    "artist": "Caio Calazans",
    "imagePath": "art-cursed_land-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-dame_britomart",
    "name": "Dame Britomart",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth",
      "Water",
      "Air"
    ],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {
      "air": 1,
      "earth": 1,
      "fire": 0,
      "water": 2
    },
    "power": 3,
    "life": 5,
    "keywords": [
      "Lance"
    ],
    "effectText": "Lance\n\nIf Dame Britomart would successfully attack an enemy site, she may summon a Mortal from your cemetery to her location instead.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "art-dame_britomart-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-degradation",
    "name": "Degradation",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Transform a Mortal into a Foot Soldier token.",
    "flavorText": "\"Why, without your arms and armor, without the trappings \nof nobility, you are nothing more than a miserable man.\"",
    "artist": "Vincent Pompetti",
    "imagePath": "art-degradation-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-dirium_fomorians",
    "name": "Dirium Fomorians",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 6,
    "life": 6,
    "keywords": [
      "Burrowing",
      "Submerge"
    ],
    "effectText": "Burrowing, Submerge",
    "flavorText": "They roam the lands of men once more, \nfor tribute and the sport of war.",
    "artist": "Drew Tucker",
    "imagePath": "art-dirium_fomorians-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-dozmary_pool",
    "name": "Dozmary Pool",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "(W)(W)(W) – Genesis → You may submerge an artifact from your hand here.",
    "flavorText": "",
    "artist": "Rodney Matthews",
    "imagePath": "art-dozmary_pool-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-druid",
    "name": "Druid",
    "set": "Arthurian Legends",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "art-druid-bt",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "art-duel",
    "name": "Duel",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "An ally fights target enemy adjacent to it.",
    "flavorText": "\"And there was the most mightiest battle that \never was seen in this land betwixt two knights.\" \n—Edmund Spenser, The Faerie Queene",
    "artist": "Rodney Matthews",
    "imagePath": "art-duel-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-excalibur",
    "name": "Excalibur",
    "set": "Arthurian Legends",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Bearer has +1 power for each of their elements. If they have all four, they are also immune to damage.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "art-excalibur-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-fae_city",
    "name": "Fae City",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Tap an allied Faerie here → Shoot a projectile. It deals 1 damage.",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "art-fae_city-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-fail_not_bow",
    "name": "Fail Not Bow",
    "set": "Arthurian Legends",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Ranged"
    ],
    "effectText": "Bearer has Ranged 3.",
    "flavorText": "No sooner had his fingers left that enchanted \nstring than the arrow struck its mark.",
    "artist": "Jussi Pylkäs",
    "imagePath": "art-fail_not_bow-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-feast_for_crows",
    "name": "Feast For Crows",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Name a spell. Search an opponent's hand, spellbook and cemetery for cards with that name, and banish them. They shuffle.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "art-feast_for_crows-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-field_laborers",
    "name": "Field Laborers",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Tap → Gain (2) this turn.",
    "flavorText": "",
    "artist": "Andrea Modesti",
    "imagePath": "art-field_laborers-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-fields_of_camlann",
    "name": "Fields Of Camlann",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "(F)(F)(F) – Genesis → Each player chooses one of their minions. Kill the rest.",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "art-fields_of_camlann-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-fine_courser",
    "name": "Fine Courser",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Charge",
      "Movement"
    ],
    "effectText": "Charge, Movement +1\n\nMay carry an ally.",
    "flavorText": "",
    "artist": "Andrea Modesti",
    "imagePath": "art-fine_courser-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-finwife",
    "name": "Finwife",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge\n\nProvides (2) for each nearby enemy Avatar.",
    "flavorText": "",
    "artist": "Margaret Organ-Kean",
    "imagePath": "art-finwife-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-firebreathing",
    "name": "Firebreathing",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "May be cast by an allied Beast or Dragon. Choose a cardinal direction and deal damage to each unit at a location in the area of effect:\n\n$  1\n1 4 1\n  C$",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "art-firebreathing-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-fishermans_family",
    "name": "Fishermans Family",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {},
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Provides (W)",
    "flavorText": "",
    "artist": "Truitt Parrish",
    "imagePath": "art-fishermans_family-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-foot_soldiers",
    "name": "Foot Soldiers",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "art-foot_soldiers-bt",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "art-foot_soldiers_english",
    "name": "Foot Soldiers English",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "art-foot_soldiers_english-bt",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "art-foot_soldiers_saracen",
    "name": "Foot Soldiers Saracen",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "art-foot_soldiers_saracen-bt",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "art-forge",
    "name": "Forge",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis",
      "Lance"
    ],
    "effectText": "Genesis → You may pay (1) to conjure a Lance token here.",
    "flavorText": "",
    "artist": "Andrea Modesti",
    "imagePath": "art-forge-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-four_waters_of_paradise",
    "name": "Four Waters Of Paradise",
    "set": "Arthurian Legends",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Sacrifice Four Waters → This turn, bearer's next elemental spell requires no threshold and costs (4) less to cast.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "art-four_waters_of_paradise-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-fourberie_knot",
    "name": "Fourberie Knot",
    "set": "Arthurian Legends",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Bearer minion takes no damage from units with 4 or more power, and is also a Faerie.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "art-fourberie_knot-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-frisky_red_squirrel",
    "name": "Frisky Red Squirrel",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Take target nearby artifact that can be carried and hide it beneath this site.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "art-frisky_red_squirrel-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-funeral_pyre",
    "name": "Funeral Pyre",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Banish up to three cards from one cemetery.",
    "flavorText": "",
    "artist": "Lindsey Crummett",
    "imagePath": "art-funeral_pyre-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-giant_killer",
    "name": "Giant Killer",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Kill target nearby Giant.",
    "flavorText": "",
    "artist": "Lindsey Crummett",
    "imagePath": "art-giant_killer-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-glastonbury_tor",
    "name": "Glastonbury Tor",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Earth",
      "Fire",
      "Air"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 1,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Only provides mana and threshold while in your back row.",
    "flavorText": "",
    "artist": "Liz Danforth",
    "imagePath": "art-glastonbury_tor-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-golden_harp",
    "name": "Golden Harp",
    "set": "Arthurian Legends",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Strike damage and life loss caused by nearby units is reduced to 2.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "art-golden_harp-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-goswhit_helmet",
    "name": "Goswhit Helmet",
    "set": "Arthurian Legends",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "If bearer would take strike damage, prevent it and return this helmet to hand.",
    "flavorText": "Strike me once, shame on you. Strike me twice, shame on me.",
    "artist": "Tony Szczudlo",
    "imagePath": "art-goswhit_helmet-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-grain_sparrow",
    "name": "Grain Sparrow",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nGenesis → Gain 2 life.",
    "flavorText": "",
    "artist": "Heidi Taillefer",
    "imagePath": "art-grain_sparrow-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-grand_old_boar",
    "name": "Grand Old Boar",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 3,
      "fire": 0,
      "water": 0
    },
    "power": 5,
    "life": 5,
    "keywords": [
      "Charge"
    ],
    "effectText": "Has Charge if there are dead Squeakers.",
    "flavorText": "Bull-huge in the mists of the morn; what an impressive sight!\nMy quarry—with eyes ablaze for vengeance in the fight;\nRunning in fear, I glanced over my shoulder once more,\nI tumbled, A final glimpse; the eyes of the Grand Old Boar.",
    "artist": "Alan Pollack",
    "imagePath": "art-grand_old_boar-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-grievous_insult",
    "name": "Grievous Insult",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "May be cast by any ally. Silence target nearby minion this turn and tap it. Draw a spell.",
    "flavorText": "\"Thou cream-faced loon\" —Macbeth (Act 5, Scene 3)",
    "artist": "Jeffrey Laubenstein",
    "imagePath": "art-grievous_insult-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-grim_guisarme",
    "name": "Grim Guisarme",
    "set": "Arthurian Legends",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Bearer takes and deals double strike damage.",
    "flavorText": "An evil head it had, four feet large, no less, sharply ground, and bound to the handle by the lace that gleamed brightly.",
    "artist": "Tony Szczudlo",
    "imagePath": "art-grim_guisarme-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-guards",
    "name": "Guards",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Summon a Foot Soldier token to each site near your Avatar.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "art-guards-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-hamlet",
    "name": "Hamlet",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "art-hamlet-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "art-hamlets_ablaze",
    "name": "Hamlets Ablaze",
    "set": "Arthurian Legends",
    "type": "Aura",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Conjure atop an Ordinary or Exceptional site.\n\nAt the start of your turn, destroy this site, minions atop it, and Hamlet's Ablaze.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "art-hamlets_ablaze-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-harassing_ruffians",
    "name": "Harassing Ruffians",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Units attacked by Harrassing Ruffians can't be defended.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "art-harassing_ruffians-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-helpful_hob",
    "name": "Helpful Hob",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Untap an adjacent ally.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "art-helpful_hob-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-horn_of_caerleon",
    "name": "Horn Of Caerleon",
    "set": "Arthurian Legends",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Charge"
    ],
    "effectText": "Nearby minions have Charge.",
    "flavorText": "From the western hills, a great blast was heard and all at \nonce a wave of spear and banner poured over the horizon.",
    "artist": "Andrea Modesti",
    "imagePath": "art-horn_of_caerleon-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-hunters_lodge",
    "name": "Hunters Lodge",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Stealth",
      "Genesis"
    ],
    "effectText": "Genesis → Enemies lose Stealth.",
    "flavorText": "",
    "artist": "Andrea Modesti",
    "imagePath": "art-hunters_lodge-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-hunting_party",
    "name": "Hunting Party",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Ranged"
    ],
    "effectText": "Ranged\n\nNearby enemies lose Stealth.",
    "flavorText": "Among patricians, hunting vastly surpasses all of jousting, feasting, dancing, gaming, and polite conversation in money and effort spent.",
    "artist": "Andrea Modesti",
    "imagePath": "art-hunting_party-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-hyter_sprites",
    "name": "Hyter Sprites",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Name a spell. Spells with that name can't be cast until your next turn.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "art-hyter_sprites-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-impenetrable_copse",
    "name": "Impenetrable Copse",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Projectiles can't enter this site from the outside.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "art-impenetrable_copse-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-invasion",
    "name": "Invasion",
    "set": "Arthurian Legends",
    "type": "Aura",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "At the end of your turn, summon a \nFoot Soldier token to each affected enemy site with no units. Lasts 3 of your turns.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "art-invasion-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-iron_man_talus",
    "name": "Iron Man Talus",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {},
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Can't be disabled or moved by force.",
    "flavorText": "\"His name was Talus, made of yron mould, \nImmoueable, resistlesse, without end.\"\n—Edmund Spenser, The Faerie Queene",
    "artist": "Jussi Pylkäs",
    "imagePath": "art-iron_man_talus-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-joust",
    "name": "Joust",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "An ally targets an enemy they're adjacent to, then they both take a step to swap places. If they pass each other, they fight.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "art-joust-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-joyous_garde",
    "name": "Joyous Garde",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Fire",
      "Water",
      "Air"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 1,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Only provides mana and threshold while in your back row.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "art-joyous_garde-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-just_a_rock",
    "name": "Just A Rock",
    "set": "Arthurian Legends",
    "type": "Artifact",
    "elements": [],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "May be cast into the hands of any unit already carrying an artifact to banish that artifact.",
    "flavorText": "",
    "artist": "Jeffrey Laubenstein",
    "imagePath": "art-just_a_rock-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-keening_banshee",
    "name": "Keening Banshee",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 4,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "May be cast for (0) if an allied Mortal died this turn.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "art-keening_banshee-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-kelp_cavern",
    "name": "Kelp Cavern",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Look at your bottom three spells. Put one on top of your spellbook.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "art-kelp_cavern-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-kettletop_leprechaun",
    "name": "Kettletop Leprechaun",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Deathrite"
    ],
    "effectText": "Deathrite → Draw a site.",
    "flavorText": "\"‘My purse?' said he, ‘'tis in her hand, That lady by your side.' I turned \nto look, the elf was off, And what was I to do? Oh! I laughed to think \nwhat a fool I'd been, And, the fairy was laughing too.\" — Robert Joyce",
    "artist": "Drew Tucker",
    "imagePath": "art-kettletop_leprechaun-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-king_arthur",
    "name": "King Arthur",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth",
      "Fire",
      "Water",
      "Air"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 1,
      "earth": 1,
      "fire": 1,
      "water": 1
    },
    "power": 5,
    "life": 5,
    "keywords": [],
    "effectText": "Players can't control cards owned by other players.",
    "flavorText": "Death is welcome when it comes; but to yield—never!",
    "artist": "Melissa A. Benson",
    "imagePath": "art-king_arthur-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-kings_council",
    "name": "Kings Council",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Draw a card for each Unique ally.",
    "flavorText": "",
    "artist": "Truitt Parrish",
    "imagePath": "art-kings_council-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-kingswood_poachers",
    "name": "Kingswood Poachers",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Stealth"
    ],
    "effectText": "Stealth\n\nGenesis → Search a spellbook for up to three Beasts, banish them, then shuffle.",
    "flavorText": "",
    "artist": "Truitt Parrish",
    "imagePath": "art-kingswood_poachers-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-knighthood",
    "name": "Knighthood",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "If you control an Ordinary Mortal, you may summon a Knight, Sir, or Dame from your hand to their location.",
    "flavorText": "",
    "artist": "Rodney Matthews",
    "imagePath": "art-knighthood-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-lady_iseult",
    "name": "Lady Iseult",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "If another nearby allied minion would die, return it to hand.",
    "flavorText": "Then the king for great favour made Tristan to be put in his daughter's ward for keeping, because she was a noble surgeon.",
    "artist": "Vincent Pompetti",
    "imagePath": "art-lady_iseult-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-lake_afanc",
    "name": "Lake Afanc",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Submerge",
      "Lethal"
    ],
    "effectText": "Lethal, Submerge",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "art-lake_afanc-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-lance",
    "name": "Lance",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "art-lance-bt",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "art-lava_flow",
    "name": "Lava Flow",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Lava flows from the caster's site in a cardinal direction. Deal damage to each other unit occupying a site in the area of effect.",
    "flavorText": "",
    "artist": "Caio Calazans",
    "imagePath": "art-lava_flow-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-led_astray",
    "name": "Led Astray",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Choose any number of enemies at target location. They take a step together to another location they're adjacent to.",
    "flavorText": "",
    "artist": "Truitt Parrish",
    "imagePath": "art-led_astray-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-leyline_henge",
    "name": "Leyline Henge",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "art-leyline_henge-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "art-lookout",
    "name": "Lookout",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Look at each opponent's hand.",
    "flavorText": "",
    "artist": "Ossi Hiekkala",
    "imagePath": "art-lookout-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-love_potion",
    "name": "Love Potion",
    "set": "Arthurian Legends",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Bearer has \"Sacrifice Love Potion → Gain control of target enemy minion here until this unit leaves the realm.\"",
    "flavorText": "",
    "artist": "Tony Szczudlo",
    "imagePath": "art-love_potion-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-lugbog_cat",
    "name": "Lugbog Cat",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "Can and must be cast to any water site.",
    "flavorText": "",
    "artist": "Marta Molina",
    "imagePath": "art-lugbog_cat-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-lumbering_giant",
    "name": "Lumbering Giant",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "Can't defend or intercept.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "art-lumbering_giant-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-magic_missiles",
    "name": "Magic Missiles",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Shoot three projectiles in the same direction, one at a time. Each deals 1 damage.",
    "flavorText": "",
    "artist": "Bryon Wackwitz",
    "imagePath": "art-magic_missiles-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-major_city",
    "name": "Major City",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "art-major_city-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "art-merlin",
    "name": "Merlin",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {
      "air": 3,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Spellcaster\n\nAny time during your turn, Merlin may look at your next spell and may cast it if it's a magic spell.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "art-merlin-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-merlins_staff",
    "name": "Merlins Staff",
    "set": "Arthurian Legends",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Bearer has Spellcaster and +1 power for each magic spell they've cast this turn while holding Merlin's Staff.",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "art-merlins_staff-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-merlins_tower",
    "name": "Merlins Tower",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Spellcaster",
      "Genesis"
    ],
    "effectText": "(A)(A)(A) – Genesis → This turn, gains Spellcaster and its next magic costs (3) less.",
    "flavorText": "",
    "artist": "Marta Molina",
    "imagePath": "art-merlins_tower-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-mesmerism",
    "name": "Mesmerism",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 4
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Gain control of target nearby minion.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "art-mesmerism-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-mester_stoor_worm",
    "name": "Mester Stoor Worm",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 3
    },
    "power": 7,
    "life": 7,
    "keywords": [
      "Submerge",
      "Waterbound"
    ],
    "effectText": "Submerge, Waterbound",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "art-mester_stoor_worm-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-monstrous_lion",
    "name": "Monstrous Lion",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Charge"
    ],
    "effectText": "Charge, Can't attack sites",
    "flavorText": "",
    "artist": "Heidi Taillefer",
    "imagePath": "art-monstrous_lion-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-morgana_le_fay",
    "name": "Morgana Le Fay",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 3,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Spellcaster",
      "Stealth"
    ],
    "effectText": "Spellcaster, Stealth\n\nGenesis → Morgana draws her own hand of three spells, which only she can cast.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "art-morgana_le_fay-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-muirid_fomorians",
    "name": "Muirid Fomorians",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 6,
    "life": 6,
    "keywords": [
      "Burrowing",
      "Submerge"
    ],
    "effectText": "Burrowing, Submerge",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "art-muirid_fomorians-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-nelly_longarms",
    "name": "Nelly Longarms",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge\n\nTap → Shoot a projectile. If it hits a unit, drag it here. Nelly may submerge it.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "art-nelly_longarms-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-ominous_owl",
    "name": "Ominous Owl",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nYou may cast minions to this site.",
    "flavorText": "",
    "artist": "Heidi Taillefer",
    "imagePath": "art-ominous_owl-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-overbearing_bailiff",
    "name": "Overbearing Bailiff",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 0,
    "life": 0,
    "keywords": [],
    "effectText": "Has +7 power while in your back row and no royalty is nearby.",
    "flavorText": "\"Don't you know who I am?!\"",
    "artist": "Ossi Hiekkala",
    "imagePath": "art-overbearing_bailiff-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-peasant_revolt",
    "name": "Peasant Revolt",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 3,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Destroy everything Unique or Elite in the realm.",
    "flavorText": "",
    "artist": "Andrea Modesti",
    "imagePath": "art-peasant_revolt-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-pebbled_paths",
    "name": "Pebbled Paths",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Charge"
    ],
    "effectText": "Minions atop nearby sites lose Charge.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "art-pebbled_paths-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-pendragon_banner",
    "name": "Pendragon Banner",
    "set": "Arthurian Legends",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Nearby allies have +1 power while there are no enemies here.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "art-pendragon_banner-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-pendragon_legacy",
    "name": "Pendragon Legacy",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Shuffle any number of Unique cards from your cemetery into your decks. Draw a card.",
    "flavorText": "",
    "artist": "Liz Danforth",
    "imagePath": "art-pendragon_legacy-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-perilous_bridge",
    "name": "Perilous Bridge",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Units can't traverse this site's top border on the ground.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "art-perilous_bridge-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-pigs_of_the_sounder",
    "name": "Pigs Of The Sounder",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Deathrite"
    ],
    "effectText": "Deathrite → Reveal your next five spells, then summon all Grand Old Boars from among them to this site. Put the rest on the bottom in a random order.",
    "flavorText": "",
    "artist": "Truitt Parrish",
    "imagePath": "art-pigs_of_the_sounder-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-poisoned_well",
    "name": "Poisoned Well",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Enemy Avatars lose 1 life for each nearby site they control.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "art-poisoned_well-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-pond",
    "name": "Pond",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → This turn, the next Beast cast to this site costs (1) less, ignoring threshold.",
    "flavorText": "",
    "artist": "Sam McKinnon",
    "imagePath": "art-pond-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-pookas",
    "name": "Pookas",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Deathrite"
    ],
    "effectText": "Deathrite → Each opponent discards a random card.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "art-pookas-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-postern_gate",
    "name": "Postern Gate",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "art-postern_gate-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "art-power_of_flight",
    "name": "Power Of Flight",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Give an allied minion Airborne until your next turn. Draw a spell.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "art-power_of_flight-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-purple_knight",
    "name": "Purple Knight",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Fire",
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 3,
    "life": 2,
    "keywords": [
      "Lance"
    ],
    "effectText": "Lance",
    "flavorText": "",
    "artist": "Rodney Matthews",
    "imagePath": "art-purple_knight-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-queen_guinevere",
    "name": "Queen Guinevere",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth",
      "Fire",
      "Water",
      "Air"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 1,
      "earth": 1,
      "fire": 1,
      "water": 1
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "Once on your turn, Queen Guinevere may untap target allied minion.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "art-queen_guinevere-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-questing_beast",
    "name": "Questing Beast",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 5,
    "life": 5,
    "keywords": [
      "Lethal",
      "Stealth"
    ],
    "effectText": "Lethal, Stealth\n\nAt the end of your turn, Questing Beast may take a step.",
    "flavorText": "",
    "artist": "Tony Szczudlo",
    "imagePath": "art-questing_beast-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-rebecks",
    "name": "Rebecks",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Charge"
    ],
    "effectText": "Nearby allied Giants have Charge.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "art-rebecks-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-reckless_squire",
    "name": "Reckless Squire",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Charge",
      "Lance"
    ],
    "effectText": "Charge, Lance",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "art-reckless_squire-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-redbreast_robin",
    "name": "Redbreast Robin",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nAt the end of your turn, each other unit here takes 1 damage.",
    "flavorText": "",
    "artist": "Heidi Taillefer",
    "imagePath": "art-redbreast_robin-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-redcap_powries",
    "name": "Redcap Powries",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Charge"
    ],
    "effectText": "Charge\n\nIf Redcap Powries haven't attacked by the end of your turn, they die.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "art-redcap_powries-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-rescue",
    "name": "Rescue",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Return a minion from your cemetery to your hand.",
    "flavorText": "",
    "artist": "Ossi Hiekkala",
    "imagePath": "art-rescue-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-rhitta_gawr_of_snowdonia",
    "name": "Rhitta Gawr Of Snowdonia",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 3,
      "fire": 0,
      "water": 0
    },
    "power": 6,
    "life": 6,
    "keywords": [],
    "effectText": "Other minions can't untap.",
    "flavorText": "",
    "artist": "Tony Szczudlo",
    "imagePath": "art-rhitta_gawr_of_snowdonia-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-rhongomyniad",
    "name": "Rhongomyniad",
    "set": "Arthurian Legends",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Bearer strikes first and has \"Tap → Throw Rhongomyniad as a piercing projectile. It deals 3 damage to one other unit at each location along its path.\"",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "art-rhongomyniad-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-ribble_boggart",
    "name": "Ribble Boggart",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Airborne",
      "Lethal",
      "Ranged"
    ],
    "effectText": "At the start of your turn, Boggart gains a random mutation until the end of turn: Airborne, Ranged, Lethal, or +3 power.",
    "flavorText": "",
    "artist": "Heidi Taillefer",
    "imagePath": "art-ribble_boggart-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-ring_of_morrigan",
    "name": "Ring Of Morrigan",
    "set": "Arthurian Legends",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Bearer has \"Whenever this unit casts a spell, they may deal 1 damage to target nearby unit to have you gain 1 life.\"",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "art-ring_of_morrigan-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-rubble",
    "name": "Rubble",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "art-rubble-bt",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "art-salmon_of_knowledge",
    "name": "Salmon Of Knowledge",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 0,
    "life": 0,
    "keywords": [
      "Submerge",
      "Waterbound"
    ],
    "effectText": "Submerge, Waterbound",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "art-salmon_of_knowledge-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-saracen_raiders",
    "name": "Saracen Raiders",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Charge"
    ],
    "effectText": "Charge \n\nMay be cast to any site without enemies.",
    "flavorText": "",
    "artist": "Andrea Modesti",
    "imagePath": "art-saracen_raiders-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-saracen_scout",
    "name": "Saracen Scout",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "May be cast to any site without enemies.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "art-saracen_scout-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-seelie_court",
    "name": "Seelie Court",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 5,
    "life": 5,
    "keywords": [],
    "effectText": "At the start of your turn, players draw a spell for each Faerie in the realm.",
    "flavorText": "From faeborn folk, this tribute bespoke.",
    "artist": "Liz Danforth",
    "imagePath": "art-seelie_court-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-shameless_squire",
    "name": "Shameless Squire",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Lance"
    ],
    "effectText": "Lance\n\nGenesis → Tap target nearby enemy. It drops everything it's carrying.",
    "flavorText": "",
    "artist": "Ossi Hiekkala",
    "imagePath": "art-shameless_squire-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-shapeshift",
    "name": "Shapeshift",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "An allied minion tries to transform. Look at your next five spells: you may choose a minion among them to be the new form. Put the rest on the bottom in a random order.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "art-shapeshift-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-shatter_strike",
    "name": "Shatter Strike",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "An ally targets an enemy adjacent to them, destroying an artifact they're carrying and then striking them.",
    "flavorText": "",
    "artist": "Bryon Wackwitz",
    "imagePath": "art-shatter_strike-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-shellycoat",
    "name": "Shellycoat",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge\n\nTakes 1 less damage.",
    "flavorText": "",
    "artist": "Bryon Wackwitz",
    "imagePath": "art-shellycoat-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-sherwood_huntress",
    "name": "Sherwood Huntress",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Ranged"
    ],
    "effectText": "Ranged",
    "flavorText": "\"[They] passed into eclipse, Her kiss upon their lips—\nEven Belphoebe's, whom they gave their lives for!\" \n—Kipling, The Queen's Men",
    "artist": "Sam McKinnon",
    "imagePath": "art-sherwood_huntress-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-siege_giant",
    "name": "Siege Giant",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "Once on your turn, Siege Giant may throw a weaker ally here through the air to a nearby location.",
    "flavorText": "",
    "artist": "Truitt Parrish",
    "imagePath": "art-siege_giant-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-sir_agravaine",
    "name": "Sir Agravaine",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Fire",
      "Water"
    ],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 1
    },
    "power": 3,
    "life": 2,
    "keywords": [
      "Stealth",
      "Movement"
    ],
    "effectText": "Stealth, Movement +1\nWhenever another ally attacks an enemy adjacent to Sir Agravaine, he strikes that enemy afterwards without losing Stealth.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "art-sir_agravaine-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-sir_balin",
    "name": "Sir Balin",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Fire",
      "Air"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 3,
    "life": 4,
    "keywords": [
      "Lance"
    ],
    "effectText": "Lance\n\nWhenever Sir Balin strikes an Avatar, destroy that Avatar's site then burrow other minions and artifacts there.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "art-sir_balin-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-sir_bedivere",
    "name": "Sir Bedivere",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth",
      "Water"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 1
    },
    "power": 3,
    "life": 4,
    "keywords": [],
    "effectText": "If Sir Bedivere is carrying an artifact at the start of your turn, draw a card.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "art-sir_bedivere-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-sir_bors_the_younger",
    "name": "Sir Bors The Younger",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth",
      "Air"
    ],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 2,
    "keywords": [
      "Ranged"
    ],
    "effectText": "Ranged 2\n\nEnemies lose Stealth.",
    "flavorText": "",
    "artist": "Margaret Organ-Kean",
    "imagePath": "art-sir_bors_the_younger-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-sir_gaheris",
    "name": "Sir Gaheris",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Fire",
      "Water"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 2
    },
    "power": 3,
    "life": 5,
    "keywords": [
      "Lance"
    ],
    "effectText": "Lance\n\nUntaps at the end of your turn.",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "art-sir_gaheris-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-sir_galahad",
    "name": "Sir Galahad",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth",
      "Air"
    ],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {
      "air": 2,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 6,
    "keywords": [],
    "effectText": "Sir Galahad's strikes heal you.\n\nNearby allies take no damage from Demons, Spirits, and Undead.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "art-sir_galahad-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-sir_gareth",
    "name": "Sir Gareth",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Water",
      "Air"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 3,
    "life": 4,
    "keywords": [],
    "effectText": "(A)(W) — Reveal from hand → Transform an allied Mortal into Sir Gareth.",
    "flavorText": "",
    "artist": "Heidi Taillefer",
    "imagePath": "art-sir_gareth-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-sir_gawain",
    "name": "Sir Gawain",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth",
      "Fire",
      "Water"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 1,
      "water": 1
    },
    "power": 3,
    "life": 5,
    "keywords": [],
    "effectText": "Sir Gawain takes damage for other adjacent allies. If he dies from damage taken this way, draw a card.",
    "flavorText": "",
    "artist": "Lindsey Crummett",
    "imagePath": "art-sir_gawain-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-sir_ironside",
    "name": "Sir Ironside",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth",
      "Water"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 2
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "Has +3 power during enemy turns.",
    "flavorText": "",
    "artist": "Andrea Modesti",
    "imagePath": "art-sir_ironside-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-sir_kay",
    "name": "Sir Kay",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth",
      "Fire",
      "Air"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 1,
      "earth": 1,
      "fire": 2,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "Whenever Sir Kay targets a weaker minion, he untaps.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "art-sir_kay-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-sir_lamorak",
    "name": "Sir Lamorak",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Fire",
      "Air"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 4,
    "life": 3,
    "keywords": [
      "Deathrite"
    ],
    "effectText": "Deathrite → Strike each nearby enemy.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "art-sir_lamorak-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-sir_lancelot",
    "name": "Sir Lancelot",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth",
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 2,
      "water": 0
    },
    "power": 4,
    "life": 6,
    "keywords": [
      "Lance"
    ],
    "effectText": "Lance\n\nThe first time Sir Lancelot fights each turn, untap him.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "art-sir_lancelot-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-sir_mordred",
    "name": "Sir Mordred",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Fire",
      "Water"
    ],
    "rarity": "Unique",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 2
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Deathrite",
      "Genesis"
    ],
    "effectText": "Genesis & Deathrite → Kill target adjacent enemy minion.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "art-sir_mordred-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-sir_morien",
    "name": "Sir Morien",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth",
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 2,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Summon two Foot Soldier tokens here.\n\nEnemy projectiles can't enter here.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "art-sir_morien-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-sir_pelleas",
    "name": "Sir Pelleas",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Water",
      "Air"
    ],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 4,
    "life": 3,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge\n\nMoves freely between water locations.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "art-sir_pelleas-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-sir_pellinore",
    "name": "Sir Pellinore",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Fire",
      "Air"
    ],
    "rarity": "Unique",
    "cost": 6,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 5,
    "life": 3,
    "keywords": [
      "Charge",
      "Lance"
    ],
    "effectText": "Charge, Lance\n\nWhenever Sir Pellinore kills the strongest enemy minion, draw a card.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "art-sir_pellinore-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-sir_perceval",
    "name": "Sir Perceval",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth",
      "Air"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 1,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 5,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → An opponent chooses a site.\n\nWhen Sir Perceval enters that site, draw a card, then reactivate his Genesis ability.",
    "flavorText": "",
    "artist": "Andrea Modesti",
    "imagePath": "art-sir_perceval-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-sir_priamus",
    "name": "Sir Priamus",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth",
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 1,
      "water": 0
    },
    "power": 2,
    "life": 4,
    "keywords": [
      "Lethal",
      "Lance"
    ],
    "effectText": "Lance, Lethal\n\nNearby allies are immune to Lethal.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "art-sir_priamus-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-sir_tom_thumb",
    "name": "Sir Tom Thumb",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Water",
      "Air"
    ],
    "rarity": "Unique",
    "cost": 2,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 1,
    "keywords": [],
    "effectText": "May be carried by any Beast.\n\nDeathrite → Return to hand.",
    "flavorText": "",
    "artist": "Margaret Organ-Kean",
    "imagePath": "art-sir_tom_thumb-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-sir_tristan",
    "name": "Sir Tristan",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Fire",
      "Water",
      "Air"
    ],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 1,
      "water": 1
    },
    "power": 2,
    "life": 4,
    "keywords": [],
    "effectText": "Once on your turn, Sir Tristan may tap target nearby enemy minion. That enemy doesn't untap the next time it would.",
    "flavorText": "",
    "artist": "Heidi Taillefer",
    "imagePath": "art-sir_tristan-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-sir_yvain",
    "name": "Sir Yvain",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth",
      "Water"
    ],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 2
    },
    "power": 3,
    "life": 4,
    "keywords": [
      "Genesis",
      "Lance"
    ],
    "effectText": "Lance. Genesis → Choose an allied Beast.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "art-sir_yvain-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-sisters_of_avalon",
    "name": "Sisters Of Avalon",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Spellcaster\n\nGenesis → Discard a spell. Draw a spell.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "art-sisters_of_avalon-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-sly_fox",
    "name": "Sly Fox",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Stealth"
    ],
    "effectText": "Gains Stealth at the end of your turn.",
    "flavorText": "",
    "artist": "Liz Danforth",
    "imagePath": "art-sly_fox-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-snowball",
    "name": "Snowball",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Shoot a piercing projectile. It picks up all other units along its path and carries them with it. When it stops, units there take damage equal to the number of units in the snowball.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "art-snowball-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-spearmarshal",
    "name": "Spearmarshal",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Lance"
    ],
    "effectText": "Once on your turn, Spearmarshal may acquire a Lance token.",
    "flavorText": "",
    "artist": "Truitt Parrish",
    "imagePath": "art-spearmarshal-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-squeakers",
    "name": "Squeakers",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Deathrite"
    ],
    "effectText": "Deathrite → Reveal your next five spells, then summon all Pigs of the Sounder from among them to this site. Put the rest on the bottom in a random order.",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "art-squeakers-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-stone_rain",
    "name": "Stone Rain",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Target a site up to two steps away. Deal 1 damage to everything atop it, repeating for each site in your hand.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "art-stone_rain-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-sugarplum_pixies",
    "name": "Sugarplum Pixies",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nAt the end of your turn, untap another nearby ally.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "art-sugarplum_pixies-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-swindler_troupe",
    "name": "Swindler Troupe",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Stealth",
      "Genesis"
    ],
    "effectText": "Genesis → Give another nearby allied minion Stealth.",
    "flavorText": "",
    "artist": "Ossi Hiekkala",
    "imagePath": "art-swindler_troupe-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-sword_and_shield",
    "name": "Sword And Shield",
    "set": "Arthurian Legends",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Bearer has +2 power.",
    "flavorText": "A shield wards off and a sword strikes down; \nboth indispensable to uphold a knight's oath.",
    "artist": "Alan Pollack",
    "imagePath": "art-sword_and_shield-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-sylvan_splendor",
    "name": "Sylvan Splendor",
    "set": "Arthurian Legends",
    "type": "Aura",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Whenever you cast a Beast or Faerie to an affected site, draw a spell. Dispel if an affected site is successfully attacked.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "art-sylvan_splendor-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-tactical_move",
    "name": "Tactical Move",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "One at a time, each ally takes up to two steps.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "art-tactical_move-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-tawny",
    "name": "Tawny",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "art-tawny-bt",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "art-tax_collector",
    "name": "Tax Collector",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → On your opponent's next turn, their spells cost (1) more.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "art-tax_collector-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-templar",
    "name": "Templar",
    "set": "Arthurian Legends",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "art-templar-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "art-thankless_squire",
    "name": "Thankless Squire",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Immobile",
      "Lance"
    ],
    "effectText": "Lance, Lance, Lance, Immobile",
    "flavorText": "",
    "artist": "Jeffrey Laubenstein",
    "imagePath": "art-thankless_squire-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-the_black_plague",
    "name": "The Black Plague",
    "set": "Arthurian Legends",
    "type": "Aura",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "At the end of your turn, the weakest minion occupying affected sites dies. If tied, choose one. Dispel if none die.",
    "flavorText": "",
    "artist": "Andrea Modesti",
    "imagePath": "art-the_black_plague-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-the_faerie_queene",
    "name": "The Faerie Queene",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Airborne",
      "Spellcaster"
    ],
    "effectText": "Airborne, Spellcaster\n\nNearby allied Faeries take no damage from units with 4 or more power.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "art-the_faerie_queene-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-the_great_drowning_of_men",
    "name": "The Great Drowning Of Men",
    "set": "Arthurian Legends",
    "type": "Aura",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 4
    },
    "power": null,
    "life": null,
    "keywords": [
      "Submerge"
    ],
    "effectText": "At the start of your turn, destroy affected sites and flood the resulting Rubble. Submerge everything atop them and dispel The Great Drowning of Men.",
    "flavorText": "",
    "artist": "Caio Calazans",
    "imagePath": "art-the_great_drowning_of_men-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-the_great_famine",
    "name": "The Great Famine",
    "set": "Arthurian Legends",
    "type": "Aura",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "At the end of your turn, the strongest minion occupying affected sites dies. If tied, choose one. Dispel if none die.",
    "flavorText": "",
    "artist": "Bryon Wackwitz",
    "imagePath": "art-the_great_famine-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-the_green_knight",
    "name": "The Green Knight",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 3
    },
    "power": 3,
    "life": 7,
    "keywords": [],
    "effectText": "Whenever an enemy minion can attack The Green Knight, it must.\n\nDeathrite → Strike target nearby enemy.",
    "flavorText": "",
    "artist": "Rodney Matthews",
    "imagePath": "art-the_green_knight-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-the_lady_of_the_lake",
    "name": "The Lady Of The Lake",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 3
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Submerge",
      "Spellcaster"
    ],
    "effectText": "Spellcaster, Submerge\n\nGenesis → You may summon a Mortal or artifact from your cemetery to Lady of the Lake's location.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "art-the_lady_of_the_lake-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-the_ninth_legion",
    "name": "The Ninth Legion",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 6,
    "threshold": {
      "air": 3,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 6,
    "life": 6,
    "keywords": [
      "Voidwalk"
    ],
    "effectText": "Voidwalk. Must be cast to a corner.\n\nDeathrite → Return to hand.",
    "flavorText": "",
    "artist": "Lindsey Crummett",
    "imagePath": "art-the_ninth_legion-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-the_round_table",
    "name": "The Round Table",
    "set": "Arthurian Legends",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Must be cast to your back row.\n\nWhenever you summon King Arthur, or a Knight, Sir, or Dame to The Round Table, draw a card.",
    "flavorText": "",
    "artist": "Margaret Organ-Kean",
    "imagePath": "art-the_round_table-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-the_wild_hunt",
    "name": "The Wild Hunt",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 3,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 5,
    "life": 5,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nOther nearby Spirits and Faeries have Charge.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "art-the_wild_hunt-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-thieving_magpie",
    "name": "Thieving Magpie",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nMay pick up carried artifacts with cost (1) or less.",
    "flavorText": "",
    "artist": "Heidi Taillefer",
    "imagePath": "art-thieving_magpie-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-thundering_giant",
    "name": "Thundering Giant",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Charge"
    ],
    "effectText": "Charge\n\nOnce on your turn, Thundering Giant may teleport to another nearby location. Tap all other units there on arrival.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "art-thundering_giant-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-tintagel",
    "name": "Tintagel",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Earth",
      "Water",
      "Air"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 1,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Only provides mana and threshold while in your back row.",
    "flavorText": "",
    "artist": "Lindsey Crummett",
    "imagePath": "art-tintagel-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-tithe",
    "name": "Tithe",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 3,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Draw three sites.",
    "flavorText": "",
    "artist": "Truitt Parrish",
    "imagePath": "art-tithe-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-tooth_faeries",
    "name": "Tooth Faeries",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nAt the start of your turn, tap target nearby enemy.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "art-tooth_faeries-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-tournament_grounds",
    "name": "Tournament Grounds",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "art-tournament_grounds-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "art-town",
    "name": "Town",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "art-town-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "art-treetop_hideout",
    "name": "Treetop Hideout",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "art-treetop_hideout-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "art-troll_bridge",
    "name": "Troll Bridge",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "The first time a lone enemy enters here each turn, strike it unless they discard a card.",
    "flavorText": "",
    "artist": "Marta Molina",
    "imagePath": "art-troll_bridge-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-unseelie_court",
    "name": "Unseelie Court",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "art-unseelie_court-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "art-valley_of_delight",
    "name": "Valley Of Delight",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Air",
      "Earth",
      "Fire",
      "Water"
    ],
    "rarity": "Elite",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Choose one: (A), (E), (F), (W). This site provides that permanently.",
    "flavorText": "",
    "artist": "Caio Calazans",
    "imagePath": "art-valley_of_delight-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-valor",
    "name": "Valor",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 0,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "May be cast when an ally defends a site or another unit. The ally gains +4 power this turn.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "art-valor-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-vanishment",
    "name": "Vanishment",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Stealth"
    ],
    "effectText": "Give all allied minions Stealth. Draw a spell.",
    "flavorText": "",
    "artist": "Sam McKinnon",
    "imagePath": "art-vanishment-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-varmint_warrens",
    "name": "Varmint Warrens",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "art-varmint_warrens-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "art-vengeful_heir",
    "name": "Vengeful Heir",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "As an additional cost to cast this, you may banish a dead Knight, Sir, or Dame. If you do, Vengeful Heir is summoned as a copy of that minion.",
    "flavorText": "",
    "artist": "Lindsey Crummett",
    "imagePath": "art-vengeful_heir-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-verdant_knight",
    "name": "Verdant Knight",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth",
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 1
    },
    "power": 3,
    "life": 2,
    "keywords": [
      "Lance"
    ],
    "effectText": "Lance",
    "flavorText": "",
    "artist": "Andrea Modesti",
    "imagePath": "art-verdant_knight-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-vikings",
    "name": "Vikings",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "Tap → Deal 2 damage to each unit at target adjacent location.",
    "flavorText": "",
    "artist": "Bryon Wackwitz",
    "imagePath": "art-vikings-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-vivien_the_enchantress",
    "name": "Vivien The Enchantress",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "art-vivien_the_enchantress-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "art-wall_of_brambles",
    "name": "Wall Of Brambles",
    "set": "Arthurian Legends",
    "type": "Aura",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Conjure atop the border of an allied site.\n\nWhenever an enemy traverses this wall \non the ground, it takes 2 damage.",
    "flavorText": "",
    "artist": "Bryon Wackwitz",
    "imagePath": "art-wall_of_brambles-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-war_horse",
    "name": "War Horse",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Charge"
    ],
    "effectText": "Charge, May carry an ally.",
    "flavorText": "",
    "artist": "Lindsey Crummett",
    "imagePath": "art-war_horse-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-wedding_hall",
    "name": "Wedding Hall",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Earth",
      "Fire",
      "Water",
      "Air"
    ],
    "rarity": "Elite",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 1,
      "fire": 1,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Provides no mana, but if Arthur and Guinevere start your turn here, you win.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "art-wedding_hall-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-weightless_squire",
    "name": "Weightless Squire",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "art-weightless_squire-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "art-whirlwind",
    "name": "Whirlwind",
    "set": "Arthurian Legends",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Choose clockwise or counterclockwise. Each unit and artifact atop sites in a two-by-two area is pushed one step in that direction.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "art-whirlwind-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-white_hart",
    "name": "White Hart",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "art-white_hart-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "art-white_knight",
    "name": "White Knight",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "art-white_knight-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "art-witch",
    "name": "Witch",
    "set": "Arthurian Legends",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "art-witch-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "art-wizards_den",
    "name": "Wizard's Den",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "art-wizards_den-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "art-wolpertinger",
    "name": "Wolpertinger",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "art-wolpertinger-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "art-wormelow_tump",
    "name": "Wormelow Tump",
    "set": "Arthurian Legends",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "art-wormelow_tump-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "art-wyvern",
    "name": "Wyvern",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "art-wyvern-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "art-year_of_the_blaze",
    "name": "Year Of The Blaze",
    "set": "Arthurian Legends",
    "type": "Aura",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 4,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "At the start of your turn, destroy affected sites and everything here, including Year of the Blaze.",
    "flavorText": "",
    "artist": "Ossi Hiekkala",
    "imagePath": "art-year_of_the_blaze-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "art-yellow_knight",
    "name": "Yellow Knight",
    "set": "Arthurian Legends",
    "type": "Minion",
    "elements": [
      "Earth",
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 1,
      "water": 0
    },
    "power": 3,
    "life": 2,
    "keywords": [
      "Lance"
    ],
    "effectText": "Lance",
    "flavorText": "",
    "artist": "Sam McKinnon",
    "imagePath": "art-yellow_knight-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-abundance",
    "name": "Abundance",
    "set": "Beta",
    "type": "Aura",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Each affected site provides one additional mana.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "bet-abundance-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-accursed_albatross",
    "name": "Accursed Albatross",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nWhen a unit kills Accursed Albatross, kill that unit's other allied minions it's nearby.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "bet-accursed_albatross-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-adept_illusionist",
    "name": "Adept Illusionist",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Spellcaster\n\nTap → Search your hand, cemetery, or spellbook for another Adept Illusionist and summon it nearby. Shuffle if needed.",
    "flavorText": "",
    "artist": "Jeff Easley",
    "imagePath": "bet-adept_illusionist-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-albespine_pikemen",
    "name": "Albespine Pikemen",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Strikes first while attacking.",
    "flavorText": "\"It serves him right who runs into the long reach of a pikeman.\" — Grimmelshausen",
    "artist": "Andrea Modesti",
    "imagePath": "bet-albespine_pikemen-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-all_terrain_vestments",
    "name": "All Terrain Vestments",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Burrowing",
      "Submerge",
      "Voidwalk"
    ],
    "effectText": "Bearer has Burrowing, Submerge, and Voidwalk, if it's a minion.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "bet-all_terrain_vestments-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-alvalinne_dryads",
    "name": "Alvalinne Dryads",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "Älvalinne Dryads provide (1).",
    "flavorText": "How fair to greet, on misted morn A daint parade of dew-kissed bloom Now deep, inspire! A bliss reborn Of air faint lade with sweet perfume",
    "artist": "Elvira Shakirova",
    "imagePath": "bet-alvalinne_dryads-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-amazon_warriors",
    "name": "Amazon Warriors",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 5,
    "life": 5,
    "keywords": [],
    "effectText": "",
    "flavorText": "\"Tonight, we keep watch. And tomorrow, before the dawn, we shall arm ourselves in our weapons, and beside their hollow vessels waken bitter Ares.\" — Homer",
    "artist": "Elvira Shakirova",
    "imagePath": "bet-amazon_warriors-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-amethyst_core",
    "name": "Amethyst Core",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Provides (A) and (1) to its controller.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "bet-amethyst_core-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-ancient_dragon",
    "name": "Ancient Dragon",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 3,
      "water": 0
    },
    "power": 6,
    "life": 6,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nTap → Deal 4 damage to each other unit at target location nearby.",
    "flavorText": "",
    "artist": "Lindsey Crummett",
    "imagePath": "bet-ancient_dragon-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-angels_egg",
    "name": "Angels Egg",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "At the end of each turn, the controller of Angel's Egg's site heals 1 life.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "bet-angels_egg-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-anui_undine",
    "name": "Anui Undine",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 0,
    "life": 0,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge\n\nAnui Undine has +1 power for each site in her body of water.",
    "flavorText": "What is a puddle but an ocean waiting to be discovered?",
    "artist": "Tony Szczudlo",
    "imagePath": "bet-anui_undine-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-apprentice_wizard",
    "name": "Apprentice Wizard",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Spellcaster\n\nGenesis → Draw a spell.",
    "flavorText": "",
    "artist": "Ossi Hiekkala",
    "imagePath": "bet-apprentice_wizard-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-aquamarine_core",
    "name": "Aquamarine Core",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Provides (W) and (1) to its controller.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "bet-aquamarine_core-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-aqueduct",
    "name": "Aqueduct",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Earth",
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "Through brick and ashlar conduits flows the lifeblood of an empire.",
    "artist": "Jeff A. Menges",
    "imagePath": "bet-aqueduct-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-aramos_mercenaries",
    "name": "Aramos Mercenaries",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "You may discard a random card rather than pay this spell's mana cost.",
    "flavorText": "The purse has enticements unknown to virtue.",
    "artist": "Jeff A. Menges",
    "imagePath": "bet-aramos_mercenaries-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-arid_desert",
    "name": "Arid Desert",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Deal 1 damage to each minion atop target nearby site.",
    "flavorText": "",
    "artist": "AronjaArt",
    "imagePath": "bet-arid_desert-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-askelon_phoenix",
    "name": "Askelon Phoenix",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nIf Askelon Phoenix would take damage from a fire spell or ability, it gains +1 power this turn, instead.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "bet-askelon_phoenix-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-assorted_animals",
    "name": "Assorted Animals",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Search your spellbook for different Beasts with a combined mana cost of X or less, reveal them, and put them in your hand. Shuffle your spellbook.",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "bet-assorted_animals-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-astral_alcazar",
    "name": "Astral Alcazar",
    "set": "Beta",
    "type": "Site",
    "elements": [],
    "rarity": "Elite",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Units can move between this site and any void as if they were adjacent.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "bet-astral_alcazar-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-atlantean_fate",
    "name": "Atlantean Fate",
    "set": "Beta",
    "type": "Aura",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Affected non-Ordinary sites are flooded. They are water sites, only provide Water threshold, and lose all other abilities.\n\nGenesis → Submerge all minions and artifacts atop affected sites.",
    "flavorText": "",
    "artist": "AronjaArt",
    "imagePath": "bet-atlantean_fate-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-atlas_wanderers",
    "name": "Atlas Wanderers",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 3,
      "fire": 0,
      "water": 0
    },
    "power": 5,
    "life": 5,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → This site and an adjacent site change places, carrying along everything of normal size.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "bet-atlas_wanderers-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-autumn_river",
    "name": "Autumn River",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Look at your next spell. You may put it on the bottom of your spellbook.",
    "flavorText": "",
    "artist": "Matt Tames",
    "imagePath": "bet-autumn_river-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-autumn_unicorn",
    "name": "Autumn Unicorn",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "",
    "flavorText": "Concerning the fair unicorn, sundry notions do abide. Some demur, others deny, children delight, and charlatans lie.",
    "artist": "Séverine Pineaux",
    "imagePath": "bet-autumn_unicorn-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-awakened_mummies",
    "name": "Awakened Mummies",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Summon Awakened Mummies burrowed safely. When an enemy unit moves onto the ground above them, they unburrow and intercept.",
    "flavorText": "Bodies in desert tombs are often very well preserved. Mayhap too well.",
    "artist": "Jeff Easley",
    "imagePath": "bet-awakened_mummies-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-azuridge_caravan",
    "name": "Azuridge Caravan",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air",
      "Earth",
      "Fire",
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "Has all elements and minion types.",
    "flavorText": "Defendit numerus, liberat varietas.",
    "artist": "Vincent Pompetti",
    "imagePath": "bet-azuridge_caravan-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-backstab",
    "name": "Backstab",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Target minion moves to an adjacent location, if needed, to strike another target tapped minion there.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "bet-backstab-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-bane_widow",
    "name": "Bane Widow",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → May kill target minion here.",
    "flavorText": "Born of earth, yet suckled by Hell's fire.",
    "artist": "Brian Smith",
    "imagePath": "bet-bane_widow-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-battering_ram",
    "name": "Battering Ram",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Units here have \"Tap → Destroy target adjacent Wall or Monument.\"",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "bet-battering_ram-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-battlefield",
    "name": "Battlefield",
    "set": "Beta",
    "type": "Site",
    "elements": [],
    "rarity": "Elite",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Conjure a broken Weapon or Armor here.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "bet-battlefield-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-battlemage",
    "name": "Battlemage",
    "set": "Beta",
    "type": "Avatar",
    "elements": [],
    "rarity": "Elite",
    "cost": null,
    "threshold": {},
    "power": 3,
    "life": 20,
    "keywords": [],
    "effectText": "Tap → Play or draw a site.\n\nWhenever Battlemage attacks and kills an enemy, you may draw a spell.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "bet-battlemage-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-beast_of_burden",
    "name": "Beast Of Burden",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "May carry any number of allied minions.",
    "flavorText": "Louder, louder! Blast your snorting drums! Life's most weary load is yet to come.",
    "artist": "Lindsey Crummett",
    "imagePath": "bet-beast_of_burden-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-bedrock",
    "name": "Bedrock",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Can't be moved, destroyed, or modified.",
    "flavorText": "",
    "artist": "Adam Kašpar",
    "imagePath": "bet-bedrock-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-belfry",
    "name": "Belfry",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "At the end of your turn, untap all nearby allies.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "bet-belfry-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-belmotte_longbowmen",
    "name": "Belmotte Longbowmen",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Ranged"
    ],
    "effectText": "Ranged",
    "flavorText": "In the left hand of every delight lies woe; and for that, my bow.",
    "artist": "Andrea Modesti",
    "imagePath": "bet-belmotte_longbowmen-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-black_obelisk",
    "name": "Black Obelisk",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Black Obelisk's site has \"At the start of your turn, lose 2 life and gain (2) this turn.\"",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "bet-black_obelisk-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-blasted_oak",
    "name": "Blasted Oak",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "If a spell or non-basic ability can target—in order of precedence—Blasted Oak, its site or location, or anything else at its site or location, it must.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "bet-blasted_oak-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-blaze",
    "name": "Blaze",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Movement"
    ],
    "effectText": "This turn, give an ally Movement +2, it can't be intercepted, and it leaves a trail of fire at departed locations. When it stops, each unit along the trail takes 2 damage.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "bet-blaze-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-blink",
    "name": "Blink",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "An ally teleports to a location it's nearby. Draw a card.",
    "flavorText": "",
    "artist": "Francesca Baerald",
    "imagePath": "bet-blink-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-blizzard",
    "name": "Blizzard",
    "set": "Beta",
    "type": "Aura",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Affected sites and units atop them can't be attacked or intercepted.\n\nAt the start of your turn, dispel Blizzard.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "bet-blizzard-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-blood_ravens",
    "name": "Blood Ravens",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nDamage dealt by Blood Ravens' strikes heals you.",
    "flavorText": "Dark wings bring dark winds.",
    "artist": "Michal Nagypál",
    "imagePath": "bet-blood_ravens-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-boil",
    "name": "Boil",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Destroy all minions occupying target water site up to two steps away.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "bet-boil-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-bone_rabble",
    "name": "Bone Rabble",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "Whenever you play an earth site, you may summon Bone Rabble from your cemetery to that site.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "bet-bone_rabble-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-boneyard",
    "name": "Boneyard",
    "set": "Beta",
    "type": "Site",
    "elements": [],
    "rarity": "Unique",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Each player may summon a minion from their cemetery here.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "bet-boneyard-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-border_militia",
    "name": "Border Militia",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Summon a Foot Soldier token to each site you control that borders an enemy site.",
    "flavorText": "",
    "artist": "Truitt Parrish",
    "imagePath": "bet-border_militia-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-bosk_troll",
    "name": "Bosk Troll",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "",
    "flavorText": "Its thoughts are reflections in a forest pool, softly trembling with wind and rain.",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "bet-bosk_troll-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-bottomless_pit",
    "name": "Bottomless Pit",
    "set": "Beta",
    "type": "Site",
    "elements": [],
    "rarity": "Elite",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Whenever a non-Airborne minion enters this site, kill it.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "bet-bottomless_pit-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-bridge_troll",
    "name": "Bridge Troll",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Whenever an enemy attacks Bridge Troll, they must spend all of their remaining mana to give to you on your next turn.",
    "flavorText": "Oi! 'oo 's 'at trippin' o'er me bridge?",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "bet-bridge_troll-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-brobdingnag_bullfrog",
    "name": "Brobdingnag Bullfrog",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Brobdingnag Bullfrog swallows another target minion here. He carries it disabled in his belly until he leaves the realm.",
    "flavorText": "",
    "artist": "Michal Nagypál",
    "imagePath": "bet-brobdingnag_bullfrog-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-browse",
    "name": "Browse",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {
      "air": 3,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Look at your next seven spells. Put one in your hand and the rest on the bottom of your spellbook in any order.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "bet-browse-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-bull_demons_of_adum",
    "name": "Bull Demons Of Adum",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 5,
    "life": 5,
    "keywords": [],
    "effectText": "Tap → Move three steps in a cardinal direction. When Bull Demons of Adum enter each location, they strike each untapped unit there.",
    "flavorText": "A bull won't charge a sleeping man. Go to bed, child.",
    "artist": "Gadu Duaso",
    "imagePath": "bet-bull_demons_of_adum-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-buried_treasure",
    "name": "Buried Treasure",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "If cast, conjure this under an allied land site of an opponent's choice.\n\nWhen Buried Treasure is carried to the surface, its controller sacrifices it and draws two cards.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "bet-buried_treasure-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-bury",
    "name": "Bury",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Burrow target minion or artifact, if able.",
    "flavorText": "\"From out of the depths of the countless pits there came a melancholy rustling from the garments of the buried.\" — Edgar Allan Poe",
    "artist": "Dan Seagrave",
    "imagePath": "bet-bury-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-call_to_war",
    "name": "Call To War",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Search your spellbook for an Exceptional Mortal, reveal it, and put it into your hand. Shuffle your spellbook.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "bet-call_to_war-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-candlemas_monks",
    "name": "Candlemas Monks",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Deathrite"
    ],
    "effectText": "Deathrite → Proceed to the end phase.",
    "flavorText": "\"If Candlemas be fair and bright, winter has another fight. If Candlemas brings cloud and rain, winter shall not come again.\"",
    "artist": "Andrea Modesti",
    "imagePath": "bet-candlemas_monks-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-captain_baldassare",
    "name": "Captain Baldassare",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Whenever Captain Baldassare attacks a unit or site, the defending player discards their topmost three spells. You may cast each of those spells once this turn, ignoring threshold requirements.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "bet-captain_baldassare-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-cauldron_crones",
    "name": "Cauldron Crones",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Spellcaster\n\nGenesis → You may sacrifice another minion here to draw a spell.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "bet-cauldron_crones-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-cave_in",
    "name": "Cave In",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Burrow all minions and artifacts occupying target land site.",
    "flavorText": "",
    "artist": "Michal Nagypál",
    "imagePath": "bet-cave_in-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-cave_trolls",
    "name": "Cave Trolls",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Burrowing"
    ],
    "effectText": "Burrowing",
    "flavorText": "We dig, we lug, we nosh da bug. Bore ore nor more, we jig and jug!",
    "artist": "Drew Tucker",
    "imagePath": "bet-cave_trolls-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-cerberus_in_chains",
    "name": "Cerberus In Chains",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 5,
    "life": 5,
    "keywords": [],
    "effectText": "Must be summoned to your location.\n\nCerberus in Chains automatically follows you and can't move itself away.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "bet-cerberus_in_chains-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-chain_lightning",
    "name": "Chain Lightning",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Deal 2 damage to target unit nearby. Any number of times, you may spend (2) to additionally target a new unit nearby the previous one.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "bet-chain_lightning-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-chains_of_prometheus",
    "name": "Chains Of Prometheus",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Whenever a player draws a card, that player taps their strongest untapped minion.",
    "flavorText": "\"Be sure of this, O young ambition, all mortal greatness is but disease.\" — Herman Melville",
    "artist": "Dan Seagrave",
    "imagePath": "bet-chains_of_prometheus-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-chaos_twister",
    "name": "Chaos Twister",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Place target minion on the back of your hand, then blow it off from a height of at least one foot. Deal damage equal to its power to each unit atop the site it lands on, including itself.",
    "flavorText": "",
    "artist": "Francesca Baerald",
    "imagePath": "bet-chaos_twister-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-clamor_of_harpies",
    "name": "Clamor Of Harpies",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nGenesis → Teleport target weaker minion to this location. Clamor of Harpies may strike it.",
    "flavorText": "",
    "artist": "Francesca Baerald",
    "imagePath": "bet-clamor_of_harpies-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-cloud_city",
    "name": "Cloud City",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "(A)(A)(A) — Once on your turn, this site may fly to a nearby void.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "bet-cloud_city-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-cloud_spirit",
    "name": "Cloud Spirit",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Airborne",
      "Movement"
    ],
    "effectText": "Airborne, Movement +2",
    "flavorText": "Children sense beings that we cannot, in innocence seeing what wisdom forgot.",
    "artist": "Michal Nagypál",
    "imagePath": "bet-cloud_spirit-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-colicky_dragonettes",
    "name": "Colicky Dragonettes",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "At the end of your turn, Colicky Dragonettes shoot a projectile. It deals 1 damage.",
    "flavorText": "Wee dragon's game a belch of flame to lay the mighty low.",
    "artist": "Jeff Easley",
    "imagePath": "bet-colicky_dragonettes-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-common_sense",
    "name": "Common Sense",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Search your spellbook for an Ordinary card, reveal it, and put it into your hand. Shuffle your spellbook.",
    "flavorText": "\"Common sense is the most widely shared commodity in the world, for every man is convinced that he is well supplied with it.\" — René Descartes",
    "artist": "Drew Tucker",
    "imagePath": "bet-common_sense-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-cone_of_flame",
    "name": "Cone Of Flame",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Choose a direction from the caster. Deal damage to each unit at a location in the area of effect:\n\n$1 1 1 1 1\n  3 3 3  \n    5    \n    C    $",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "bet-cone_of_flame-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-conqueror_worm",
    "name": "Conqueror Worm",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 8,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 8,
    "life": 8,
    "keywords": [],
    "effectText": "At the end of your turn, if no enemy units occupy this site, permanently gain control of it.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "bet-conqueror_worm-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-coral_reef_kelpie",
    "name": "Coral Reef Kelpie",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge",
    "flavorText": "Why'd the kelpie cross the shoal? To get to the other tide.",
    "artist": "Melissa A. Benson",
    "imagePath": "bet-coral_reef_kelpie-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-cornerstone",
    "name": "Cornerstone",
    "set": "Beta",
    "type": "Site",
    "elements": [],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "You may play this site to one of your corners.",
    "flavorText": "",
    "artist": "Margaret Organ-Kean",
    "imagePath": "bet-cornerstone-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-court_jester",
    "name": "Court Jester",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "At the end of your turn, each nearby Avatar discards a random card.",
    "flavorText": "",
    "artist": "Liz Danforth",
    "imagePath": "bet-court_jester-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-courtesan_thais",
    "name": "Courtesan Thais",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 0,
    "life": 0,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → During their next turn, each player is controlled by the previous one.",
    "flavorText": "Well all the while blood shall spill, should woman's wile belie man's will.",
    "artist": "Drew Tucker",
    "imagePath": "bet-courtesan_thais-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-craterize",
    "name": "Craterize",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 8,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "As an additional cost to cast Craterize, discard a site. Destroy target site and deal damage to each unit above or below a site in the area of effect:\n\n$1 2 4  2 1\n2 4 7  4 2\n4 7 10 7 4\n2 4 7  4 2\n1 2 4  2 1$",
    "flavorText": "",
    "artist": "Marta Molina",
    "imagePath": "bet-craterize-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-crave_golem",
    "name": "Crave Golem",
    "set": "Beta",
    "type": "Minion",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {},
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "At the start of each player's turn, Crave Golem attacks a random minion within its range of motion, or takes a step toward the closest minion if it can't.",
    "flavorText": "As enmity gave way to amity, we soon found we'd created far worse than a monster: a machine.",
    "artist": "Brian Smith",
    "imagePath": "bet-crave_golem-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-critical_strike",
    "name": "Critical Strike",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "The next time an ally strikes a unit this turn, it deals double damage.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "bet-critical_strike-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-crossroads",
    "name": "Crossroads",
    "set": "Beta",
    "type": "Site",
    "elements": [],
    "rarity": "Elite",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Look at your next four sites. Put three on the bottom of your atlas.",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "bet-crossroads-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-crown_of_the_victor",
    "name": "Crown Of The Victor",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Bearer has +3 power if they've ever killed a minion.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "bet-crown_of_the_victor-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-crown_prince",
    "name": "Crown Prince",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Deathrite"
    ],
    "effectText": "Deathrite → If you control another Mortal, return Crown Prince to its owner's hand.",
    "flavorText": "Emmerich, the final Daniger king, assumed the throne only after outliving a horde of brothers and nephews.",
    "artist": "Ossi Hiekkala",
    "imagePath": "bet-crown_prince-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-crusade",
    "name": "Crusade",
    "set": "Beta",
    "type": "Aura",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "You may summon earth minions to affected sites. Allied earth minions occupying affected sites have +1 power.",
    "flavorText": "",
    "artist": "Truitt Parrish",
    "imagePath": "bet-crusade-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-dalcean_phalanx",
    "name": "Dalcean Phalanx",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 5,
    "life": 5,
    "keywords": [],
    "effectText": "Can only move themselves forward.",
    "flavorText": "\"‘Fairest of sights on the dull black earth,' some say, ‘Is a host of horse in battle array.' ‘A phalanx on foot,' another will cry, ‘Or a navy full sail athwart the sky.'\" — Sappho",
    "artist": "Vincent Pompetti",
    "imagePath": "bet-dalcean_phalanx-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-daperyll_vampire",
    "name": "Daperyll Vampire",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 5,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nDamage dealt by Daperyll Vampire's strikes heals you.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "bet-daperyll_vampire-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-dark_tower",
    "name": "Dark Tower",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → If this is the only Dark Tower you control, gain (1) this turn.",
    "flavorText": "",
    "artist": "Michal Nagypál",
    "imagePath": "bet-dark_tower-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-dead_of_night_demon",
    "name": "Dead Of Night Demon",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Stealth"
    ],
    "effectText": "Stealth",
    "flavorText": "\"Tiptoe cross the weald's black maw, where horned fiends creep ware tooth and claw.\"",
    "artist": "Michal Nagypál",
    "imagePath": "bet-dead_of_night_demon-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-death_dealer",
    "name": "Death Dealer",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Kill all other minions.",
    "flavorText": "With frank hand the dark traveler laid waste to all who came before him.",
    "artist": "Brian Smith",
    "imagePath": "bet-death_dealer-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-deathspeaker",
    "name": "Deathspeaker",
    "set": "Beta",
    "type": "Avatar",
    "elements": [],
    "rarity": "Elite",
    "cost": null,
    "threshold": {},
    "power": 1,
    "life": 20,
    "keywords": [],
    "effectText": "Tap → Play or draw a site.\n\nYou may cast one dead minion each turn, and for (0) if you're on Death's Door. Whenever you summon a minion this way, banish it.",
    "flavorText": "",
    "artist": "Tony Szczudlo",
    "imagePath": "bet-deathspeaker-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-deep_sea_mermaids",
    "name": "Deep Sea Mermaids",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge\n\nGenesis → Draw your bottommost spell.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "bet-deep_sea_mermaids-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-devils_egg",
    "name": "Devils Egg",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "At the end of each turn, the controller of Devil's Egg's site loses 1 life.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "bet-devils_egg-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-diluvian_kraken",
    "name": "Diluvian Kraken",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 8,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 3
    },
    "power": 8,
    "life": 8,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge\n\nTap → Surface to strike each other unit nearby.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "bet-diluvian_kraken-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-disenchant",
    "name": "Disenchant",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Destroy all auras and artifacts at target location up to two steps away.",
    "flavorText": "... and a haughty spirit before a fall.",
    "artist": "Elwira Pawlikowska",
    "imagePath": "bet-disenchant-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-disintegrate",
    "name": "Disintegrate",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Banish target minion nearby, and everything it carries.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "bet-disintegrate-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-dispel",
    "name": "Dispel",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Destroy all auras and artifacts at target location up to two steps away.",
    "flavorText": "Pride goeth before destruction ...",
    "artist": "Elwira Pawlikowska",
    "imagePath": "bet-dispel-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-divine_healing",
    "name": "Divine Healing",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 3,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "You gain 7 life.",
    "flavorText": "Pray not for an easier path, but to become a stronger person.",
    "artist": "Alan Pollack",
    "imagePath": "bet-divine_healing-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-dodge_roll",
    "name": "Dodge Roll",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 0,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "May be cast when an ally is attacked.\n\nAn attacked ally may move to another adjacent location to evade the attack.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "bet-dodge_roll-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-dome_of_osiros",
    "name": "Dome Of Osiros",
    "set": "Beta",
    "type": "Site",
    "elements": [],
    "rarity": "Unique",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "This site and minions here can't be attacked.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "bet-dome_of_osiros-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-donnybrook_inn",
    "name": "Donnybrook Inn",
    "set": "Beta",
    "type": "Site",
    "elements": [],
    "rarity": "Unique",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Anyone may cast minions here and they may do so for (1) less.",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "bet-donnybrook_inn-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-doomsday_device",
    "name": "Doomsday Device",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Doomsday Device enters the realm with 6 counters. At the end of each player's turn, remove a counter. When the last is removed, it detonates!\n\nDeals damage to each unit at affected locations:\n\n$  2 4  2\n2 4 8  4 2\n4 8 20 8 4\n2 4 8  4 2\n  2 4  2$",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "bet-doomsday_device-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-doomsday_prophet",
    "name": "Doomsday Prophet",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "Nearby units take double damage, except from strikes.",
    "flavorText": "The end is nigh!",
    "artist": "Doug Kovacs",
    "imagePath": "bet-doomsday_prophet-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-dream_quest",
    "name": "Dream Quest",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "An allied Spellcaster falls asleep and is disabled until hurt. At the start of your next turn, if it's still asleep, you may wake it up to search your spellbook for a card and put it into your hand. Shuffle if needed.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "bet-dream_quest-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-drought",
    "name": "Drought",
    "set": "Beta",
    "type": "Aura",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Affected sites aren't water sites, and provide no water threshold.",
    "flavorText": "",
    "artist": "Michal Nagypál",
    "imagePath": "bet-drought-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-drown",
    "name": "Drown",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge target minion or artifact, if able.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "bet-drown-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-drums_of_doom",
    "name": "Drums Of Doom",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Damage dealt to minions nearby is lethal.",
    "flavorText": "A trepid pulse, a throb of bloodpour'd passion, and life's spark seemed to each one about them lost.",
    "artist": "Alan Pollack",
    "imagePath": "bet-drums_of_doom-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-dwarven_digging_team",
    "name": "Dwarven Digging Team",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Burrowing"
    ],
    "effectText": "Burrowing\n\nAllied minions occupying nearby sites have Burrowing.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "bet-dwarven_digging_team-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-dwarven_forge",
    "name": "Dwarven Forge",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Anyone may conjure Weapons and Armor here, and for (1) less.",
    "flavorText": "",
    "artist": "Rodney Matthews",
    "imagePath": "bet-dwarven_forge-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-earthquake",
    "name": "Earthquake",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "You may rearrange sites within a two-by-two area, carrying along everything of normal size. Then burrow all minions and artifacts on those sites.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "bet-earthquake-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-east_west_dragon",
    "name": "East West Dragon",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nMoves freely sideways.",
    "flavorText": "",
    "artist": "Jeff Easley",
    "imagePath": "bet-east_west_dragon-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-edge_of_the_world",
    "name": "Edge Of The World",
    "set": "Beta",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "bet-edge_of_the_world-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "bet-elementalist",
    "name": "Elementalist",
    "set": "Beta",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "bet-elementalist-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "bet-enchantress",
    "name": "Enchantress",
    "set": "Beta",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "bet-enchantress-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "bet-entangle_terrain",
    "name": "Entangle Terrain",
    "set": "Beta",
    "type": "Aura",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Airborne",
      "Immobile"
    ],
    "effectText": "Minions occupying affected sites lose Airborne and are Immobile. Lasts 3 of your turns.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "bet-entangle_terrain-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-escyllion_cyclops",
    "name": "Escyllion Cyclops",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 6,
    "life": 6,
    "keywords": [],
    "effectText": "Doesn't strike back while defending.",
    "flavorText": "\"We wept and raised our hands to the heavens on seeing such a horrific sight, for we knew not what else to do.\" — Homer",
    "artist": "Gadu Duaso",
    "imagePath": "bet-escyllion_cyclops-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-evil_presence",
    "name": "Evil Presence",
    "set": "Beta",
    "type": "Aura",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Charge"
    ],
    "effectText": "You may summon Spirits to affected sites. When you summon a Spirit here, give it Charge, and return Evil Presence to its owner's hand.",
    "flavorText": "",
    "artist": "Liz Danforth",
    "imagePath": "bet-evil_presence-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-exorcism",
    "name": "Exorcism",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Banish all Demon and Undead minions at target location up to two steps away.",
    "flavorText": "Nor devil nor demon shall undo this done! Begone!",
    "artist": "Mattias Frisk",
    "imagePath": "bet-exorcism-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-extinguish",
    "name": "Extinguish",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Banish all fire minions and fire auras occupying target site up to two steps away.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "bet-extinguish-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-fade",
    "name": "Fade",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Stealth"
    ],
    "effectText": "Give an allied minion Stealth. If it occupies an enemy site, draw a card.",
    "flavorText": "I could pay, but then I'd just have to rob them again.",
    "artist": "Elvira Shakirova",
    "imagePath": "bet-fade-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-far_east_assassin",
    "name": "Far East Assassin",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Stealth"
    ],
    "effectText": "Stealth\n\nTap → Far East Assassin throws an artifact he carries at target adjacent unit. It takes damage equal to the artifact's mana cost.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "bet-far_east_assassin-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-felbog_frog_men",
    "name": "Felbog Frog Men",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Can leap entirely over adjacent sites in one step.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "bet-felbog_frog_men-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-fenvale_muse",
    "name": "Fenvale Muse",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 0,
    "life": 0,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Spellcaster\n\nWhenever Fenvale Muse casts a spell, you may trigger the Genesis of a nearby River.",
    "flavorText": "As the sun troubles the morning she stirs my heart.",
    "artist": "Jeff A. Menges",
    "imagePath": "bet-fenvale_muse-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-fey_changeling",
    "name": "Fey Changeling",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "May be summoned to any site.\n\nGenesis → You may return a minion here to its owner's hand.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "bet-fey_changeling-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-fire_harpoons",
    "name": "Fire Harpoons",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Deal 1 damage to target minion above or below an adjacent Water site and pull it to the caster's location. Draw a card.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "bet-fire_harpoons-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-fireball",
    "name": "Fireball",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Shoot a projectile. It deals 4 damage on impact, and 2 damage to each other unit at that location.",
    "flavorText": "",
    "artist": "Doug Kovacs",
    "imagePath": "bet-fireball-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-firebolts",
    "name": "Firebolts",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Shoot three projectiles in the same direction, one at a time. Each deals 1 damage.",
    "flavorText": "",
    "artist": "Jeff Easley",
    "imagePath": "bet-firebolts-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-flame_wave",
    "name": "Flame Wave",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Flame Wave flows horizontally, from one edge of the realm to the other. \nDeal damage to each unit atop sites in the area of effect:\n\n$7 5 3 1\n7 5 3 1\n7 5 3 1\n7 5 3 1$",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "bet-flame_wave-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-flamecaller",
    "name": "Flamecaller",
    "set": "Beta",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "bet-flamecaller-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "bet-flaming_sword",
    "name": "Flaming Sword",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Bearer has +1 power, and its strikes splash full damage to each other enemy at a struck unit's location.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "bet-flaming_sword-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-flanking_maneuver",
    "name": "Flanking Maneuver",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Teleport any number of allies at one location to another location a chess knight's move away. Draw a card.",
    "flavorText": "",
    "artist": "Tony Szczudlo",
    "imagePath": "bet-flanking_maneuver-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-flood",
    "name": "Flood",
    "set": "Beta",
    "type": "Aura",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Affected sites are flooded. They're water sites.",
    "flavorText": "Nature is the anvil that has broken many hammers.",
    "artist": "Michal Nagypál",
    "imagePath": "bet-flood-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-floodplain",
    "name": "Floodplain",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Once on your turn, you may flood an adjacent site this turn.",
    "flavorText": "",
    "artist": "Caio Calazans",
    "imagePath": "bet-floodplain-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-font_of_life",
    "name": "Font Of Life",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Each ally heals an amount equal to the number of sites in its body of water.",
    "flavorText": "",
    "artist": "Anson Maddocks",
    "imagePath": "bet-font_of_life-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-foot_soldier_1",
    "name": "Foot Soldier 1",
    "set": "Beta",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "bet-foot_soldier_1-bt",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "bet-foot_soldier_2",
    "name": "Foot Soldier 2",
    "set": "Beta",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "bet-foot_soldier_2-bt",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "bet-foot_soldier_3",
    "name": "Foot Soldier 3",
    "set": "Beta",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "bet-foot_soldier_3-bt",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "bet-free_city",
    "name": "Free City",
    "set": "Beta",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "bet-free_city-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "bet-frog_blue",
    "name": "Frog Blue",
    "set": "Beta",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "bet-frog_blue-bt",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "bet-frog_green",
    "name": "Frog Green",
    "set": "Beta",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "bet-frog_green-bt",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "bet-frog_red",
    "name": "Frog Red",
    "set": "Beta",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "bet-frog_red-bt",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "bet-frontier_settlers",
    "name": "Frontier Settlers",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "Tap → Reveal and play your topmost site to an adjacent void or Rubble. Frontier Settlers move there and lose this ability.",
    "flavorText": "\"Be fruitful, and multiply, and replenish the earth.\" — Genesis 1:28",
    "artist": "Ossi Hiekkala",
    "imagePath": "bet-frontier_settlers-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-frost_nova",
    "name": "Frost Nova",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Freeze nearby enemy minions. They're disabled until your next turn.",
    "flavorText": "",
    "artist": "Francesca Baerald",
    "imagePath": "bet-frost_nova-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-geomancer",
    "name": "Geomancer",
    "set": "Beta",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "bet-geomancer-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "bet-geyser",
    "name": "Geyser",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [
      "Airborne"
    ],
    "effectText": "This turn, flood target site and give each minion there Airborne. Draw a card.",
    "flavorText": "",
    "artist": "Matt Tames",
    "imagePath": "bet-geyser-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-ghost_ship",
    "name": "Ghost Ship",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 5,
    "life": 5,
    "keywords": [
      "Voidwalk"
    ],
    "effectText": "Voidwalk\n\nWhenever Ghost Ship enters a site from the void, you may summon a Spirit from any cemetery to its location.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "bet-ghost_ship-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-giant_shark",
    "name": "Giant Shark",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 5,
    "life": 5,
    "keywords": [
      "Submerge",
      "Waterbound"
    ],
    "effectText": "Submerge, Waterbound\n\nWhenever another unit enters or moves between sites in this body of water, Giant Shark moves to that unit to fight it.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "bet-giant_shark-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-gigantism",
    "name": "Gigantism",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Give an allied unit +6 power this turn.",
    "flavorText": "I, uh ... think you're gonna need a new roof.",
    "artist": "Alan Pollack",
    "imagePath": "bet-gigantism-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-gilded_aegis",
    "name": "Gilded Aegis",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "If bearer is a minion and would die, instead fully heal it and banish Gilded Aegis.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "bet-gilded_aegis-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-gneissgnath_gnomes",
    "name": "Gneissgnath Gnomes",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Burrowing"
    ],
    "effectText": "Burrowing\n\nAt the end of your turn, Gneissgnath Gnomes may burrow.",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "bet-gneissgnath_gnomes-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-gnome_hollows",
    "name": "Gnome Hollows",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Units with 3 or more power can't enter this site.",
    "flavorText": "",
    "artist": "Mattias Frisk",
    "imagePath": "bet-gnome_hollows-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-gothic_tower",
    "name": "Gothic Tower",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → If this is the only Gothic Tower you control, gain (1) this turn.",
    "flavorText": "",
    "artist": "Michal Nagypál",
    "imagePath": "bet-gothic_tower-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-grandmaster_wizard",
    "name": "Grandmaster Wizard",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 0,
    "life": 0,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Spellcaster\n\nGenesis → Draw three spells.",
    "flavorText": "",
    "artist": "Ossi Hiekkala",
    "imagePath": "bet-grandmaster_wizard-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-grapple_shot",
    "name": "Grapple Shot",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "An ally shoots a projectile. If it hits a unit, the ally is dragged to that location, and may strike the hit unit when it arrives.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "bet-grapple_shot-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-great_old_one",
    "name": "Great Old One",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 8,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 3
    },
    "power": 16,
    "life": 16,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge\n\nGenesis → Permanently flood the entire realm, including voids.",
    "flavorText": "What lurks beneath depths unplumbed by mortal keel! Dark and darker black tides roll, heedless of earth's cries for ransom.",
    "artist": "Dan Seagrave",
    "imagePath": "bet-great_old_one-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-great_wall",
    "name": "Great Wall",
    "set": "Beta",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "bet-great_wall-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "bet-grey_wolves",
    "name": "Grey Wolves",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "Your spellbook may include any number of Grey Wolves.\n\nHas +1 power for each other Grey Wolves nearby.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "bet-grey_wolves-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-grim_reaper",
    "name": "Grim Reaper",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 2,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Lethal"
    ],
    "effectText": "Lethal\n\nWhenever Grim Reaper kills a minion, banish that minion and all copies. Search its owner's cemetery, hand, and spellbook and banish any copies. They shuffle.",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "bet-grim_reaper-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-grosse_poltergeist",
    "name": "Grosse Poltergeist",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "Tap → Until Grosse Poltergeist leaves the realm, gain control of a nearby artifact and animate it. It's an Automaton with power equal to its cost, and has its own bearer abilities.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "bet-grosse_poltergeist-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-guile_sirens",
    "name": "Guile Sirens",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge\n\nAt the start of your turn, force target nearby enemy minion to take a step toward Guile Sirens.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "bet-guile_sirens-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-gyre_hippogriffs",
    "name": "Gyre Hippogriffs",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Airborne",
      "Charge"
    ],
    "effectText": "Airborne, Charge",
    "flavorText": "\"A wing aloft, will oft descry The turning of the screw 'Fore knee or eye construe\"",
    "artist": "Gadu Duaso",
    "imagePath": "bet-gyre_hippogriffs-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-haast_eagle",
    "name": "Haast Eagle",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nMay carry a weaker allied minion.",
    "flavorText": "Hardly a comfortable ride, but a ride, nonetheless.",
    "artist": "Elwira Pawlikowska",
    "imagePath": "bet-haast_eagle-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-headless_haunt",
    "name": "Headless Haunt",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Voidwalk"
    ],
    "effectText": "Voidwalk\n\nAt the start of your turn, Headless Haunt teleports to the top of a random site or void.",
    "flavorText": "Jacet sine nominee truncus.",
    "artist": "Jussi Pylkäs",
    "imagePath": "bet-headless_haunt-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-heat_ray",
    "name": "Heat Ray",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Shoot a piercing projectile. Deal 2 damage to one unit at each location along its path.",
    "flavorText": "",
    "artist": "Jeff Easley",
    "imagePath": "bet-heat_ray-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-highland_clansmen",
    "name": "Highland Clansmen",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 7,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 5,
    "life": 5,
    "keywords": [
      "Charge"
    ],
    "effectText": "Charge",
    "flavorText": "What need for spells when one can cast iron?",
    "artist": "Truitt Parrish",
    "imagePath": "bet-highland_clansmen-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-highland_falconer",
    "name": "Highland Falconer",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Airborne",
      "Genesis"
    ],
    "effectText": "Genesis → You may search your hand and spellbook for a Beast with Airborne and mana cost (2) or less and summon it here. Shuffle if needed.",
    "flavorText": "",
    "artist": "Andrea Modesti",
    "imagePath": "bet-highland_falconer-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-highland_princess",
    "name": "Highland Princess",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 2,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Search your spellbook for an artifact that costs (1) or less, reveal it, and put it into your hand. Shuffle.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "bet-highland_princess-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-hillock_basilisk",
    "name": "Hillock Basilisk",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Other minions at rest here or one step in front of Hillock Basilisk are disabled.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "bet-hillock_basilisk-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-holy_ground",
    "name": "Holy Ground",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Each nearby Avatar heals 3 life.",
    "flavorText": "",
    "artist": "Michal Nagypál",
    "imagePath": "bet-holy_ground-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-hounds_of_ondaros",
    "name": "Hounds Of Ondaros",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Airborne",
      "Burrowing",
      "Submerge",
      "Voidwalk"
    ],
    "effectText": "Airborne, Burrowing, Submerge, Voidwalk\n\nNearby enemies permanently lose Stealth.",
    "flavorText": "From hell's heart they stab at thee.",
    "artist": "Francesca Baerald",
    "imagePath": "bet-hounds_of_ondaros-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-house_arn_bannerman",
    "name": "House Arn Bannerman",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Other nearby allies have +1 power.",
    "flavorText": "Our crest and banner will once again be a symbol of glory and strength!",
    "artist": "Andrea Modesti",
    "imagePath": "bet-house_arn_bannerman-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-humble_village",
    "name": "Humble Village",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → You may pay (1) to summon a Foot Soldier token here.",
    "flavorText": "",
    "artist": "Andrea Modesti",
    "imagePath": "bet-humble_village-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-ice_lance",
    "name": "Ice Lance",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Shoot a piercing projectile. Deal 3, then 2, then 1 damage to up to one unit at each of the first three locations along its path.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "bet-ice_lance-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-iceberg",
    "name": "Iceberg",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Minions occupying nearby sites can't submerge or surface.",
    "flavorText": "",
    "artist": "Ian Miller",
    "imagePath": "bet-iceberg-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-immolation",
    "name": "Immolation",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 3,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Deal 7 damage to target minion nearby.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "bet-immolation-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-imperial_road",
    "name": "Imperial Road",
    "set": "Beta",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "bet-imperial_road-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "bet-incinerate",
    "name": "Incinerate",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Deal 4 damage to each other unit at target location near the caster or an allied Dragon.",
    "flavorText": "\"Scaleforge stoked, proud kite untamed, in flagrant flight unfurled.\"",
    "artist": "Lindsey Crummett",
    "imagePath": "bet-incinerate-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-infernal_legion",
    "name": "Infernal Legion",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 3,
      "water": 0
    },
    "power": 6,
    "life": 6,
    "keywords": [],
    "effectText": "At the end of your turn, deal 3 damage to each other adjacent unit.",
    "flavorText": "Grave candélabre, en danse macabre, the Damned parade in ghastly mob.",
    "artist": "Melissa A. Benson",
    "imagePath": "bet-infernal_legion-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-infiltrate",
    "name": "Infiltrate",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Stealth"
    ],
    "effectText": "Gain control of target enemy minion until it deals damage, and tap it. It gains Stealth.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "bet-infiltrate-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-iron_shackles",
    "name": "Iron Shackles",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "May be conjured to target enemy minion.\n\nBearer is disabled.",
    "flavorText": "How can you claim to be free, when you've never tried to find the end of your tether?",
    "artist": "Dan Seagrave",
    "imagePath": "bet-iron_shackles-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-island_leviathan",
    "name": "Island Leviathan",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 8,
    "life": 8,
    "keywords": [],
    "effectText": "(W)(W)(W)(W)(W)(W)(W)(W) — Transform into a Monster. Place flooded Rubble underneath.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "bet-island_leviathan-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-jihad",
    "name": "Jihad",
    "set": "Beta",
    "type": "Aura",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "You may summon fire minions to affected sites. Allied fire minions occupying affected sites have +1 power.",
    "flavorText": "",
    "artist": "Truitt Parrish",
    "imagePath": "bet-jihad-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-karkemish_chimera",
    "name": "Karkemish Chimera",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 6,
    "life": 6,
    "keywords": [],
    "effectText": "Can simultaneously attack up to three units at the same location.",
    "flavorText": "",
    "artist": "Gadu Duaso",
    "imagePath": "bet-karkemish_chimera-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-king_of_the_realm",
    "name": "King Of The Realm",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 3,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Other Mortals have +1 power.\n\nYou control all Mortals.",
    "flavorText": "",
    "artist": "Tony Szczudlo",
    "imagePath": "bet-king_of_the_realm-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-kingdom_of_agartha",
    "name": "Kingdom Of Agartha",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Burrowing"
    ],
    "effectText": "(E)(E)(E) — All minions have Burrowing.",
    "flavorText": "",
    "artist": "Adam Burke",
    "imagePath": "bet-kingdom_of_agartha-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-kite_archer",
    "name": "Kite Archer",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Ranged"
    ],
    "effectText": "Ranged\n\nImmediately after performing a ranged strike, Kite Archer may take a step.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "bet-kite_archer-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-kythera_mechanism",
    "name": "Kythera Mechanism",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Bearer's controller determines all random outcomes.",
    "flavorText": "All winds are favorable when you don't know where you're going.",
    "artist": "Séverine Pineaux",
    "imagePath": "bet-kythera_mechanism-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-land_deed",
    "name": "Land Deed",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Bearer has \"You control this site.\"",
    "flavorText": "Possession is nine tenths of the law.",
    "artist": "Elwira Pawlikowska",
    "imagePath": "bet-land_deed-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-land_surveyor",
    "name": "Land Surveyor",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Draw a site.",
    "flavorText": "Bare is the brotherless back. And so too shall be unlevied land.",
    "artist": "Ossi Hiekkala",
    "imagePath": "bet-land_surveyor-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-lava_salamander",
    "name": "Lava Salamander",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Fire Spellcaster\n\nTakes no damage from fire spells.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "bet-lava_salamander-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-leap_attack",
    "name": "Leap Attack",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "An ally may take a step, and then it strikes each enemy at its location.",
    "flavorText": "",
    "artist": "Gadu Duaso",
    "imagePath": "bet-leap_attack-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-lighthouse",
    "name": "Lighthouse",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Air",
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "A luminous pillar pierced the tempest, and we knew. All was not lost! We were home.",
    "flavorText": "",
    "artist": "Marta Molina",
    "imagePath": "bet-lighthouse-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-lightning_bolt",
    "name": "Lightning Bolt",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Deal 3 damage to a random unit at target location.",
    "flavorText": "",
    "artist": "Ossi Hiekkala",
    "imagePath": "bet-lightning_bolt-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-lone_tower",
    "name": "Lone Tower",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → If this is the only Lone Tower you control, gain (1) this turn.",
    "flavorText": "",
    "artist": "Michal Nagypál",
    "imagePath": "bet-lone_tower-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-lord_of_the_void",
    "name": "Lord Of The Void",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 9,
    "threshold": {
      "air": 3,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 0,
    "life": 0,
    "keywords": [
      "Voidwalk"
    ],
    "effectText": "Voidwalk\n\nAt the end of your turn, Lord of the Void may banish an adjacent site, unless there's an Avatar there.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "bet-lord_of_the_void-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-lord_of_unland",
    "name": "Lord Of Unland",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 3
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge\n\nOther allies occupying Lord of Unland's body of water have +1 power.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "bet-lord_of_unland-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-lucky_charm",
    "name": "Lucky Charm",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Bearer's controller has \"Whenever you do something at random, you may do it an extra time and choose one of the outcomes.\"",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "bet-lucky_charm-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-mad_dash",
    "name": "Mad Dash",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Movement"
    ],
    "effectText": "Draw a card, then give an ally Movement +1 this turn.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "bet-mad_dash-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-maddening_bells",
    "name": "Maddening Bells",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Spells cast by a nearby Spellcaster cost (2) more to cast.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "bet-maddening_bells-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-maelstrom",
    "name": "Maelstrom",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "At the start of your turn, you may pull in each minion in this body of water one step.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "bet-maelstrom-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-mage_slayer",
    "name": "Mage Slayer",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Spellcaster",
      "Genesis"
    ],
    "effectText": "Genesis → Kill target Spellcaster minion nearby.",
    "flavorText": "Death is too kind for the likes of you. But I am a kind man.",
    "artist": "Tony Szczudlo",
    "imagePath": "bet-mage_slayer-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-magellan_globe",
    "name": "Magellan Globe",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Opposite edges of the realm are connected.",
    "flavorText": "Whatsoever turns all haste we tack, each the terrene through, our stars will cross anew.",
    "artist": "Elwira Pawlikowska",
    "imagePath": "bet-magellan_globe-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-magnetic_muzzle",
    "name": "Magnetic Muzzle",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Bearer loses all non-basic abilities, and can't drop Magnetic Muzzle.\n\nAt the end of each player's turn, if Magnetic Muzzle is abandoned, that player attaches it to a nearby minion.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "bet-magnetic_muzzle-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-major_explosion",
    "name": "Major Explosion",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Target a location up to two steps away.\nDeal damage to each unit at locations in the area of effect:\n\n$3 5 3\n5 7 5\n3 5 3$",
    "flavorText": "",
    "artist": "Tony Szczudlo",
    "imagePath": "bet-major_explosion-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-marine_voyage",
    "name": "Marine Voyage",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "This turn, your units can move between any sites in a chosen body of water as if they were adjacent.",
    "flavorText": "",
    "artist": "Marta Molina",
    "imagePath": "bet-marine_voyage-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-mariners_curse",
    "name": "Mariners Curse",
    "set": "Beta",
    "type": "Aura",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Whenever a minion enters an affected water site, submerge it and return Mariner's Curse to its owner's hand.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "bet-mariners_curse-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-mask_of_mayhem",
    "name": "Mask Of Mayhem",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Whenever a nearby minion can attack, it must.\n\nNearby strikes deal double damage.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "bet-mask_of_mayhem-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-master_tracker",
    "name": "Master Tracker",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Stealth"
    ],
    "effectText": "All enemies permanently lose Stealth.",
    "flavorText": "Becoming sufficiently familiar with nature is a substitute for understanding it.",
    "artist": "Andrea Modesti",
    "imagePath": "bet-master_tracker-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-maze_minotaur",
    "name": "Maze Minotaur",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "Enemy minions can't move themselves out of the neighborhood of nine locations nearby Maze Minotaur.",
    "flavorText": "",
    "artist": "Gadu Duaso",
    "imagePath": "bet-maze_minotaur-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-megamoeba",
    "name": "Megamoeba",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 0,
    "life": 0,
    "keywords": [],
    "effectText": "Megamoeba moves by extending a single pseudopod from any part of itself. It occupies all locations it has ever occupied, and has +1 power for each.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "bet-megamoeba-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-men_of_leng",
    "name": "Men Of Leng",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Whenever Men of Leng strike an Avatar, that Avatar discards a random card.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "bet-men_of_leng-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-meteor_shower",
    "name": "Meteor Shower",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 9,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 3,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Target three sites that share no borders. Deal damage to each unit atop sites in each area of effect:\n\n$3 5 3\n5 7 5\n3 5 3\n\n  2  \n2 4 2\n  2  \n\n3$",
    "flavorText": "",
    "artist": "Michal Nagypál",
    "imagePath": "bet-meteor_shower-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-midland_army",
    "name": "Midland Army",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 8,
    "threshold": {
      "air": 0,
      "earth": 4,
      "fire": 0,
      "water": 0
    },
    "power": 8,
    "life": 8,
    "keywords": [],
    "effectText": "Tap → Target a location up to three steps away. Deal 4 damage to each unit there.\n\nDeathrite → Summon a Foot Soldier token to each adjacent location.",
    "flavorText": "",
    "artist": "Tony Szczudlo",
    "imagePath": "bet-midland_army-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-midnight_rogue",
    "name": "Midnight Rogue",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Ranged",
      "Stealth"
    ],
    "effectText": "Ranged, Stealth",
    "flavorText": "I'll have respect for your laws when you make them respectable.",
    "artist": "Elvira Shakirova",
    "imagePath": "bet-midnight_rogue-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-minecart_madness",
    "name": "Minecart Madness",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "This turn, your units can move between any sites in a chosen span of land as if they were adjacent.",
    "flavorText": "",
    "artist": "Matt Tames",
    "imagePath": "bet-minecart_madness-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-minor_explosion",
    "name": "Minor Explosion",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Deal 3 damage to each unit at target location up to two steps away.",
    "flavorText": "",
    "artist": "Mattias Frisk",
    "imagePath": "bet-minor_explosion-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-miracle_workers",
    "name": "Miracle Workers",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → You may return a minion that died this turn from your cemetery to your hand.",
    "flavorText": "Seek not relief for grievous deeds in mercy done, but know that the prayers of all good people are good.",
    "artist": "Jeff A. Menges",
    "imagePath": "bet-miracle_workers-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-mirage",
    "name": "Mirage",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "When played, you may return a site in play you own to your hand to play this site in its place.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "bet-mirage-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-mirror_realm",
    "name": "Mirror Realm",
    "set": "Beta",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "bet-mirror_realm-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "bet-mix_aer",
    "name": "Mix Aer",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Sacrifice Mix Aer → This turn, bearer's next Air spell requires no threshold and costs (3) less to cast.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "bet-mix_aer-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-mix_aqua",
    "name": "Mix Aqua",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Sacrifice Mix Aqua → This turn, bearer's next Water spell requires no threshold and costs (3) less to cast.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "bet-mix_aqua-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-mix_ignis",
    "name": "Mix Ignis",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Sacrifice Mix Ignis → This turn, bearer's next Fire spell requires no threshold and costs (3) less to cast.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "bet-mix_ignis-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-mix_terra",
    "name": "Mix Terra",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Sacrifice Mix Terra → This turn, bearer's next Earth spell requires no threshold and costs (3) less to cast.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "bet-mix_terra-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-monastery_gargoyle",
    "name": "Monastery Gargoyle",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Airborne"
    ],
    "effectText": "At the start and end of your turn, choose whether Monastery Gargoyle has Airborne or is a non-minion artifact.",
    "flavorText": "Through rain and regret, Through wind and war, we bide our time.",
    "artist": "Dan Seagrave",
    "imagePath": "bet-monastery_gargoyle-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-monster_hunter",
    "name": "Monster Hunter",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Kill a nearby Monster.",
    "flavorText": "Nor glory nor profit is his reward—a safer world is.",
    "artist": "Jeff A. Menges",
    "imagePath": "bet-monster_hunter-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-moon_clan_werewolf",
    "name": "Moon Clan Werewolf",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Sacrifice an allied Mortal → Summon Moon Clan Werewolf from your hand to the Mortal's location.",
    "flavorText": "Upward, before the onmooning it wolfed.",
    "artist": "Alan Pollack",
    "imagePath": "bet-moon_clan_werewolf-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-mordric_druids",
    "name": "Mordric Druids",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Spellcaster\n\nWhenever you lose life due to an undefended attack nearby, the attacker's controller also loses that much life.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "bet-mordric_druids-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-mortality",
    "name": "Mortality",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Kill all Mortal minions at target location up to two steps away.",
    "flavorText": "Man is born a candle, the better part burnt out.",
    "artist": "Mattias Frisk",
    "imagePath": "bet-mortality-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-mother_nature",
    "name": "Mother Nature",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 3
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "At the start of your turn, reveal your topmost spell. If it's a minion, you may summon it here.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "bet-mother_nature-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-mountain_giant",
    "name": "Mountain Giant",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 8,
    "threshold": {
      "air": 0,
      "earth": 4,
      "fire": 0,
      "water": 0
    },
    "power": 8,
    "life": 8,
    "keywords": [],
    "effectText": "Occupies four locations.",
    "flavorText": "Heart and hearth will tremble.",
    "artist": "Francesca Baerald",
    "imagePath": "bet-mountain_giant-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-mountain_pass",
    "name": "Mountain Pass",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Minions can't enter this site on the ground if there's already a minion atop.",
    "flavorText": "",
    "artist": "Marta Molina",
    "imagePath": "bet-mountain_pass-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-muck_lampreys",
    "name": "Muck Lampreys",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Burrowing",
      "Submerge"
    ],
    "effectText": "Burrowing, Submerge",
    "flavorText": "These pallid parasites plague the swamplands, effortlessly boring through fen and flesh alike.",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "bet-muck_lampreys-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-mudflow",
    "name": "Mudflow",
    "set": "Beta",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "bet-mudflow-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "bet-nightmare",
    "name": "Nightmare",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 7,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 6,
    "life": 6,
    "keywords": [],
    "effectText": "At the end of your turn, for each enemy minion here, you may push it to an adjacent location or void.",
    "flavorText": "Nightly we ply the razor thin barrier between being and unbeing.",
    "artist": "Drew Tucker",
    "imagePath": "bet-nightmare-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-nimbus_jinn",
    "name": "Nimbus Jinn",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nDiscard a spell → Deal 3 damage to another random unit here.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "bet-nimbus_jinn-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-oasis",
    "name": "Oasis",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Fire",
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "Where blood nourishes sand, life springs anew.",
    "artist": "Marta Molina",
    "imagePath": "bet-oasis-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-observatory",
    "name": "Observatory",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Look at your next three spells. Put them back in any order.",
    "flavorText": "",
    "artist": "Margaret Organ-Kean",
    "imagePath": "bet-observatory-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-occult_ritual",
    "name": "Occult Ritual",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Gain (2) this turn for each allied Spellcaster here.",
    "flavorText": "\"With mingled reverence and awe they cried, softly, odiously, appalling, the name of the Being whom they momentarily expected to appear.\" —Algernon Blackwood",
    "artist": "Lindsey Crummett",
    "imagePath": "bet-occult_ritual-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-ogre_goons",
    "name": "Ogre Goons",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "",
    "flavorText": "\"Grok, grok! Me find rock!\"\n\"What rock do? It sit there!\"",
    "artist": "Jeff A. Menges",
    "imagePath": "bet-ogre_goons-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-old_salt_anchorman",
    "name": "Old Salt Anchorman",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Nearby allies can't be moved by enemy spells and abilities.",
    "flavorText": "\"Neither should a ship rely on one small anchor, nor a life on one fair hope.\" —Epictetus",
    "artist": "Vincent Pompetti",
    "imagePath": "bet-old_salt_anchorman-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-onyx_core",
    "name": "Onyx Core",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Provides (E) and (1) to its controller.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "bet-onyx_core-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-orb_of_baal_berith",
    "name": "Orb Of Baal Berith",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "The first time each turn a Magic spell is cast nearby, Orb of Ba'al Berith creates a copy. The spell's controller may choose new targets.",
    "flavorText": "The ineffable, conveyed ineffably.",
    "artist": "Dan Seagrave",
    "imagePath": "bet-orb_of_baal_berith-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-ormund_harpooneers",
    "name": "Ormund Harpooneers",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Tap → Deal 1 damage to target minion above or below an adjacent water site and pull that minion to this location.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "bet-ormund_harpooneers-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-outback_strider",
    "name": "Outback Strider",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Moves freely between unoccupied land sites.",
    "flavorText": "",
    "artist": "Tony Szczudlo",
    "imagePath": "bet-outback_strider-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-overpower",
    "name": "Overpower",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Give an ally +2 power this turn.",
    "flavorText": "Suddenly the soldier was flung so violently from his mount, his sword became a ploughshare.",
    "artist": "Vincent Pompetti",
    "imagePath": "bet-overpower-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-pact_with_the_devil",
    "name": "Pact With The Devil",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Sacrifice the caster or lose half your life, rounding up. If you do, draw three cards.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "bet-pact_with_the_devil-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-palliburrie_bats",
    "name": "Palliburrie Bats",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Airborne",
      "Burrowing"
    ],
    "effectText": "Airborne, Burrowing",
    "flavorText": "To the bat, it is the world that's blind.\nTo the song-spun tapestry of its kind.",
    "artist": "Lindsey Crummett",
    "imagePath": "bet-palliburrie_bats-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-panorama_manticore",
    "name": "Panorama Manticore",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 5,
    "life": 5,
    "keywords": [
      "Airborne",
      "Lethal"
    ],
    "effectText": "Airborne, Lethal\n\nAt the end of your turn, if you cast a non-fire spell this turn, untap Panorama Manticore.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "bet-panorama_manticore-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-pathfinder",
    "name": "Pathfinder",
    "set": "Beta",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "bet-pathfinder-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "bet-payload_trebuchet",
    "name": "Payload Trebuchet",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Tap bearer and another ally here, Discard a card → Deal damage equal to the discarded card's mana cost to each unit at target location up to three steps away.",
    "flavorText": "",
    "artist": "Ossi Hiekkala",
    "imagePath": "bet-payload_trebuchet-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-pendulum_of_peril",
    "name": "Pendulum Of Peril",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 6,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "At the end of each player's turn, Pendulum of Peril kills all minions at its current location and another adjacent location of that player's choice.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "bet-pendulum_of_peril-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-peregrine_apparition",
    "name": "Peregrine Apparition",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Airborne",
      "Voidwalk",
      "Movement"
    ],
    "effectText": "Airborne, Movement +3, Voidwalk",
    "flavorText": "The truly sublime know no bounds.",
    "artist": "Adam Burke",
    "imagePath": "bet-peregrine_apparition-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-petrosian_cavalry",
    "name": "Petrosian Cavalry",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Charge"
    ],
    "effectText": "Charge",
    "flavorText": "By their swift steeds and swifter swords the tide of many a battle has turned.",
    "artist": "Andrea Modesti",
    "imagePath": "bet-petrosian_cavalry-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-phantasmal_shade",
    "name": "Phantasmal Shade",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "When Phantasmal Shade is struck, destroy it.",
    "flavorText": "",
    "artist": "Santiago Caruso",
    "imagePath": "bet-phantasmal_shade-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-phantom_steed",
    "name": "Phantom Steed",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Voidwalk",
      "Movement"
    ],
    "effectText": "Movement +2, Voidwalk\n\nMay carry an allied minion.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "bet-phantom_steed-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-phase_assassin",
    "name": "Phase Assassin",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Voidwalk"
    ],
    "effectText": "Voidwalk\n\nWhenever Phase Assassin enters the void, he gains Stealth.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "bet-phase_assassin-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-philosophers_stone",
    "name": "Philosophers Stone",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "The first spell of each element cast by the bearer each turn costs (1) less.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "bet-philosophers_stone-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-pillar_of_zeiros",
    "name": "Pillar Of Zeiros",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Banish all dead minions, and you heal 1 life for each.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "bet-pillar_of_zeiros-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-pirate_ship",
    "name": "Pirate Ship",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 5,
    "life": 5,
    "keywords": [
      "Waterbound"
    ],
    "effectText": "Waterbound",
    "flavorText": "\"Build me straight, O worthy Master! Staunch and strong, a goodly vessel, That shall laugh at all disaster, And with wave and whirlwind wrestle!\" — Henry Wadsworth Longfellow",
    "artist": "Vincent Pompetti",
    "imagePath": "bet-pirate_ship-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-pit_vipers",
    "name": "Pit Vipers",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Burrowing",
      "Lethal"
    ],
    "effectText": "Burrowing, Lethal",
    "flavorText": "Always look before you leap, for snakes among the hollows creep.",
    "artist": "Michal Nagypál",
    "imagePath": "bet-pit_vipers-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-plague_of_frogs",
    "name": "Plague Of Frogs",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 3
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Summon seven Frog tokens.",
    "flavorText": "No more chilling a sound than a congress of croaks, and the splitter splatter of slimy feet.",
    "artist": "Michal Nagypál",
    "imagePath": "bet-plague_of_frogs-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-planar_gate",
    "name": "Planar Gate",
    "set": "Beta",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "bet-planar_gate-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "bet-plumed_pegasus",
    "name": "Plumed Pegasus",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne",
    "flavorText": "Thereupon I could not breathe, but sighs were pardoned unto me. To see the pegasus fly is to feel the spirit soar.",
    "artist": "Melissa A. Benson",
    "imagePath": "bet-plumed_pegasus-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-pnakotic_manuscript",
    "name": "Pnakotic Manuscript",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Bearer has \"Tap → Reveal your topmost spell and draw it. Bearer takes damage equal to that card's cost.\"",
    "flavorText": "An understanding so vast it leaves little room for sanity.",
    "artist": "Francesca Baerald",
    "imagePath": "bet-pnakotic_manuscript-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-poison_nova",
    "name": "Poison Nova",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Lethal"
    ],
    "effectText": "Lethal\n\nDeal 1 damage to each other nearby minion.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "bet-poison_nova-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-poisonous_dagger",
    "name": "Poisonous Dagger",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Lethal"
    ],
    "effectText": "Bearer has Lethal.",
    "flavorText": "Scantest scratch fulfilled Withal the strength of twenty Shall thine heart be stilled",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "bet-poisonous_dagger-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-polar_bears",
    "name": "Polar Bears",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Can move as if the top and bottom edges of the realm were connected.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "bet-polar_bears-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-polar_explorers",
    "name": "Polar Explorers",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Allied units here can move as if the top and bottom edges of the realm were connected.",
    "flavorText": "",
    "artist": "Marta Molina",
    "imagePath": "bet-polar_explorers-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-pollimorph",
    "name": "Pollimorph",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Transform target nearby minion into a Frog token.",
    "flavorText": "",
    "artist": "Francesca Baerald",
    "imagePath": "bet-pollimorph-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-porcupine_pufferfish",
    "name": "Porcupine Pufferfish",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Submerge",
      "Lethal"
    ],
    "effectText": "Lethal, Submerge",
    "flavorText": "A remarkable thirteen pufferfish entries are found in Bog'duul's Greater and Lesser Poisons and Their Uses.",
    "artist": "Brian Smith",
    "imagePath": "bet-porcupine_pufferfish-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-primordial_spring",
    "name": "Primordial Spring",
    "set": "Beta",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "bet-primordial_spring-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "bet-pristine_paradise",
    "name": "Pristine Paradise",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Air",
      "Earth",
      "Fire",
      "Water"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 1,
      "fire": 1,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Provides no mana or threshold unless completely empty.",
    "flavorText": "",
    "artist": "Marta Molina",
    "imagePath": "bet-pristine_paradise-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-psionic_blast",
    "name": "Psionic Blast",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Deal 1 damage to each minion here. They're disabled until your next turn.",
    "flavorText": "A laden conscience soon becomes leaden.",
    "artist": "Alan Pollack",
    "imagePath": "bet-psionic_blast-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-pudge_butcher",
    "name": "Pudge Butcher",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 5,
    "life": 5,
    "keywords": [
      "Immobile"
    ],
    "effectText": "Immobile\n\nTap → Shoot a projectile. If it hits a unit, drag it to this location. Pudge may fight it.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "bet-pudge_butcher-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-puppet_master",
    "name": "Puppet Master",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nGenesis → Gain control of all tapped minions here until Puppet Master leaves the realm.",
    "flavorText": "",
    "artist": "Liz Danforth",
    "imagePath": "bet-puppet_master-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-purge_juggernaut",
    "name": "Purge Juggernaut",
    "set": "Beta",
    "type": "Minion",
    "elements": [],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {},
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "At the start of your turn, Purge Juggernaut taps and moves to an adjacent location. Kill all minions there.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "bet-purge_juggernaut-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-quagmire",
    "name": "Quagmire",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Immobile",
      "Genesis"
    ],
    "effectText": "Genesis → Units occupying nearby sites are Immobile until your next turn.",
    "flavorText": "",
    "artist": "Caio Calazans",
    "imagePath": "bet-quagmire-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-quarrelsome_kobolds",
    "name": "Quarrelsome Kobolds",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "At the end of your turn, Quarrelsome Kobolds strike themselves or another target adjacent unit.",
    "flavorText": "\"He started it!\" — The one that started it",
    "artist": "Alan Pollack",
    "imagePath": "bet-quarrelsome_kobolds-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-queen_of_midland",
    "name": "Queen Of Midland",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "After an opponent draws a card, if they have more cards than you, you may draw a card.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "bet-queen_of_midland-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-raal_dromedary",
    "name": "Raal Dromedary",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "",
    "flavorText": "\"And a coarse grace remained: his head was high, Though his gaunt flanks with a great mange were worn: There was not any yearning in his eye, But on his lips and nostril infinite scorn.\" — Archibald Young Campbell\"",
    "artist": "Caio Calazans",
    "imagePath": "bet-raal_dromedary-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-rain_of_arrows",
    "name": "Rain Of Arrows",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Deal 1 damage to each aboveground minion.",
    "flavorText": "\"Then we will fight in the shade!\" — Dienekes",
    "artist": "Vincent Pompetti",
    "imagePath": "bet-rain_of_arrows-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-raise_dead",
    "name": "Raise Dead",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Summon a random dead minion.",
    "flavorText": "The living need the dead far more than the dead need the living. — Thomas Laqueur",
    "artist": "Tony Szczudlo",
    "imagePath": "bet-raise_dead-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-recall",
    "name": "Recall",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Teleport any number of allied minions to the caster's location.",
    "flavorText": "",
    "artist": "Ossi Hiekkala",
    "imagePath": "bet-recall-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-recurring_specter",
    "name": "Recurring Specter",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "Can't defend.\n\nMay be cast from your cemetery.",
    "flavorText": "",
    "artist": "Tony Szczudlo",
    "imagePath": "bet-recurring_specter-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-red_desert",
    "name": "Red Desert",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Deal 1 damage to each minion atop target nearby site.",
    "flavorText": "",
    "artist": "AronjaArt",
    "imagePath": "bet-red_desert-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-remote_desert",
    "name": "Remote Desert",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Deal 1 damage to each minion atop target nearby site.",
    "flavorText": "",
    "artist": "AronjaArt",
    "imagePath": "bet-remote_desert-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-replication",
    "name": "Replication",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Conjure a copy of an artifact carried by the caster.",
    "flavorText": "A great sorcerer does not imitate; he plagiarizes.",
    "artist": "Francesca Baerald",
    "imagePath": "bet-replication-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-rest_in_peace",
    "name": "Rest In Peace",
    "set": "Beta",
    "type": "Aura",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Whenever a Spirit or Undead minion occupies affected land sites, burrow it.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "bet-rest_in_peace-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-riddle_sphinx",
    "name": "Riddle Sphinx",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nGenesis → Look at your topmost spell. You may put it on the bottom of your spellbook, then an opponent may exchange your top and bottommost spells. Draw a card.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "bet-riddle_sphinx-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-rift_valley",
    "name": "Rift Valley",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "You may pull apart a partial row or column to make a void in which to play this.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "bet-rift_valley-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-rimland_nomads",
    "name": "Rimland Nomads",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Movement"
    ],
    "effectText": "Movement +1\n\nTakes no damage from Deserts.",
    "flavorText": "As the sands shift, so shall we.",
    "artist": "Elvira Shakirova",
    "imagePath": "bet-rimland_nomads-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-riptide",
    "name": "Riptide",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Target water site pulls in an aboveground unit it's adjacent to. Draw a card.",
    "flavorText": "",
    "artist": "Marta Molina",
    "imagePath": "bet-riptide-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-river_of_flame",
    "name": "River Of Flame",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Fire Spellcaster",
    "flavorText": "",
    "artist": "Ian Miller",
    "imagePath": "bet-river_of_flame-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-roaming_monster",
    "name": "Roaming Monster",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 5,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "May be summoned to any site.",
    "flavorText": "Heeere's Brawny!",
    "artist": "Jeff Easley",
    "imagePath": "bet-roaming_monster-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-rolling_boulder",
    "name": "Rolling Boulder",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Units here have \"Tap → Give Rolling Boulder a push. It rolls as far as possible and deals 4 damage to each other unit along its path.\"",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "bet-rolling_boulder-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-root_spider",
    "name": "Root Spider",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Burrowing"
    ],
    "effectText": "Burrowing\n\nWhile Root Spider is burrowed, minions directly above it are disabled.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "bet-root_spider-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-roots_of_yggdrasil",
    "name": "Roots Of Yggdrasil",
    "set": "Beta",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "bet-roots_of_yggdrasil-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "bet-royal_bodyguard",
    "name": "Royal Bodyguard",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "If a nearby Avatar or royalty (King, Queen, Prince, or Princess) would take damage, Royal Bodyguard may take that damage instead.",
    "flavorText": "",
    "artist": "Liz Danforth",
    "imagePath": "bet-royal_bodyguard-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-rubble",
    "name": "Rubble",
    "set": "Beta",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "bet-rubble-bt",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "bet-ruby_core",
    "name": "Ruby Core",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Provides (F) and (1) to its controller.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "bet-ruby_core-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-ruins",
    "name": "Ruins",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Air",
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "What do lines on a map mean to the sand and the sun and the wind?",
    "artist": "Dan Seagrave",
    "imagePath": "bet-ruins-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-ruler_of_thul",
    "name": "Ruler Of Thul",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Charge"
    ],
    "effectText": "Charge\n\nAllies can move as if the top and bottom edges of the realm were connected. Other allies occupying sites there have +1 power.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "bet-ruler_of_thul-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-rustic_village",
    "name": "Rustic Village",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → You may pay (1) to summon a Foot Soldier token here.",
    "flavorText": "",
    "artist": "Andrea Modesti",
    "imagePath": "bet-rustic_village-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-sacred_scarabs",
    "name": "Sacred Scarabs",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nDeathrite → Deal 3 damage to each unit here.",
    "flavorText": "It's all fun and games until someone steps on a bug.",
    "artist": "Melissa A. Benson",
    "imagePath": "bet-sacred_scarabs-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-sand_worm",
    "name": "Sand Worm",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Burrowing"
    ],
    "effectText": "Burrowing, Landbound",
    "flavorText": "Only a soft susurration betrays the passing of these desert leviathans far beneath your feet.",
    "artist": "Vincent Pompetti",
    "imagePath": "bet-sand_worm-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-sandstorm",
    "name": "Sandstorm",
    "set": "Beta",
    "type": "Aura",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Affected sites and units atop them can't be attacked or intercepted.\n\nAt the start of your turn, dispel Sandstorm.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "bet-sandstorm-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-scarecrow",
    "name": "Scarecrow",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Airborne",
      "Genesis"
    ],
    "effectText": "Genesis → Return each Airborne minion here to its owner's hand.\n\nAirborne minions can't enter this location.",
    "flavorText": "",
    "artist": "Lindsey Crummett",
    "imagePath": "bet-scarecrow-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-scavenging_fiend",
    "name": "Scavenging Fiend",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Conjure a broken artifact to this location.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "bet-scavenging_fiend-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-scent_hounds",
    "name": "Scent Hounds",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Stealth"
    ],
    "effectText": "Nearby enemies permanently lose Stealth.",
    "flavorText": "For the upwardly mobile of the Midland Court, accolades in the Royal Hunt of the Mist were as treasured as any war-time achievement.",
    "artist": "Andrea Modesti",
    "imagePath": "bet-scent_hounds-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-scorched_earth",
    "name": "Scorched Earth",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Choose any number of sites you control. Destroy each of those sites and everything there.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "bet-scorched_earth-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-scourge_zombies",
    "name": "Scourge Zombies",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Whenever an allied Mortal dies on land, you may summon Scourge Zombies from your cemetery to its location, tapped.",
    "flavorText": "",
    "artist": "Mattias Frisk",
    "imagePath": "bet-scourge_zombies-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-screaming_skull",
    "name": "Screaming Skull",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Whenever bearer attacks and kills an enemy, it untaps.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "bet-screaming_skull-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-sea_raider",
    "name": "Sea Raider",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Whenever Sea Raider attacks and kills an enemy, its controller discards their topmost spell. You may cast that spell once this turn, ignoring threshold.",
    "flavorText": "",
    "artist": "Tony Szczudlo",
    "imagePath": "bet-sea_raider-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-sea_serpent",
    "name": "Sea Serpent",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Submerge",
      "Waterbound"
    ],
    "effectText": "Submerge, Waterbound",
    "flavorText": "The study of sea serpents advances one funeral at a time.",
    "artist": "Vincent Pompetti",
    "imagePath": "bet-sea_serpent-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-seasoned_sellsword",
    "name": "Seasoned Sellsword",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "Avatars nearby have \"Discard a card → Gain control of Seasoned Sellsword.\"",
    "flavorText": "",
    "artist": "Lindsey Crummett",
    "imagePath": "bet-seasoned_sellsword-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-secret_tunnel",
    "name": "Secret Tunnel",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Burrowed allies can move as if this were adjacent to your other sites.",
    "flavorText": "",
    "artist": "Doug Kovacs",
    "imagePath": "bet-secret_tunnel-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-sedge_crabs",
    "name": "Sedge Crabs",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Can only move themselves sideways.",
    "flavorText": "\"One will never make the crab walk straight.\" — Aristophanes",
    "artist": "Ossi Hiekkala",
    "imagePath": "bet-sedge_crabs-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-seer",
    "name": "Seer",
    "set": "Beta",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "bet-seer-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "bet-seirawan_hydra",
    "name": "Seirawan Hydra",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 6,
    "life": 6,
    "keywords": [],
    "effectText": "Immune to non-lethal damage.",
    "flavorText": "Fell the tree, and the branches are soon cut off. — Francis Quarles",
    "artist": "Melissa A. Benson",
    "imagePath": "bet-seirawan_hydra-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-selfsame_simulacrum",
    "name": "Selfsame Simulacrum",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 0,
    "life": 0,
    "keywords": [],
    "effectText": "May be summoned as a basic copy of a nearby minion.",
    "flavorText": "Common folk view their lives through a half-silvered mirror, seeing only their own reflection.",
    "artist": "Elvira Shakirova",
    "imagePath": "bet-selfsame_simulacrum-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-seven_league_boots",
    "name": "Seven League Boots",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Movement"
    ],
    "effectText": "Bearer has Movement +7.",
    "flavorText": "\"Bring me my boots at once, so that I may catch them!\" — Charles Perrault",
    "artist": "Melissa A. Benson",
    "imagePath": "bet-seven_league_boots-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-shield_maidens",
    "name": "Shield Maidens",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Nearby allies take 1 less damage.",
    "flavorText": "My word is my bond, my shield is my service.",
    "artist": "Vincent Pompetti",
    "imagePath": "bet-shield_maidens-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-shield_wall",
    "name": "Shield Wall",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Until your next turn, each ally takes 1 less damage for each other ally it's nearby.",
    "flavorText": "",
    "artist": "Andrea Modesti",
    "imagePath": "bet-shield_wall-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-shifting_sands",
    "name": "Shifting Sands",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Reactivate the Genesis abilities of your nearby Deserts.",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "bet-shifting_sands-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-shrink",
    "name": "Shrink",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Set the base power of target nearby unit to 0 until your next turn.",
    "flavorText": "",
    "artist": "Francesca Baerald",
    "imagePath": "bet-shrink-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-siege_ballista",
    "name": "Siege Ballista",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Tap bearer and another ally here → Deal 3 damage to target unit up to two steps away.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "bet-siege_ballista-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-silence",
    "name": "Silence",
    "set": "Beta",
    "type": "Aura",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Minions occupying affected sites lose all non-basic abilities.",
    "flavorText": "",
    "artist": "Marta Molina",
    "imagePath": "bet-silence-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-silver_valkyries",
    "name": "Silver Valkyries",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nAt the end of your turn, untap all allies here.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "bet-silver_valkyries-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-simple_village",
    "name": "Simple Village",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → You may pay (1) to summon a Foot Soldier token here.",
    "flavorText": "",
    "artist": "Andrea Modesti",
    "imagePath": "bet-simple_village-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-sinkhole",
    "name": "Sinkhole",
    "set": "Beta",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "bet-sinkhole-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "bet-sirian_templar",
    "name": "Sirian Templar",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Takes no damage from Demon, Spirit, or Undead minions.",
    "flavorText": "Struck down, the templar rose again, guided by his holy purpose—and the dawn rose with him.",
    "artist": "Gadu Duaso",
    "imagePath": "bet-sirian_templar-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-sirocco_scorpions",
    "name": "Sirocco Scorpions",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Lethal"
    ],
    "effectText": "Lethal",
    "flavorText": "They wait and watch with eyes of soot.",
    "artist": "Michal Nagypál",
    "imagePath": "bet-sirocco_scorpions-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-sisters_of_silence",
    "name": "Sisters Of Silence",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "Other nearby minions lose all non-basic abilities.",
    "flavorText": "\"Since long I've held silence as a remedy for harm.\" — Aeschylus",
    "artist": "Ossi Hiekkala",
    "imagePath": "bet-sisters_of_silence-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-skirmishers_of_mu",
    "name": "Skirmishers Of Mu",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Ranged"
    ],
    "effectText": "Ranged\n\nDuring basic movement, Skirmishers of Mu may perform a ranged strike from any location along their path.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "bet-skirmishers_of_mu-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-sky_baron",
    "name": "Sky Baron",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 6,
    "life": 6,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nAll other minions lose Airborne.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "bet-sky_baron-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-sleep",
    "name": "Sleep",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Target minion at a location up to two steps away falls asleep. It's disabled until it takes damage.",
    "flavorText": "Breathe deep the gathering bloom.",
    "artist": "Séverine Pineaux",
    "imagePath": "bet-sleep-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-sling_pixies",
    "name": "Sling Pixies",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Airborne",
      "Ranged"
    ],
    "effectText": "Airborne, Ranged\n\nTakes no damage from units with 4 or more power.",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "bet-sling_pixies-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-slumbering_giantess",
    "name": "Slumbering Giantess",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 5,
    "life": 5,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Fall asleep. Slumbering Giantess is disabled until hurt.",
    "flavorText": "",
    "artist": "Liz Danforth",
    "imagePath": "bet-slumbering_giantess-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-smokestacks_of_gnaak",
    "name": "Smokestacks Of Gnaak",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Other nearby sites lose their abilities.",
    "flavorText": "",
    "artist": "Ian Miller",
    "imagePath": "bet-smokestacks_of_gnaak-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-sneak_thief",
    "name": "Sneak Thief",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Stealth"
    ],
    "effectText": "Stealth\n\nTap → Steal an artifact out of the hands of another target unit here, and stay Stealthed.",
    "flavorText": "",
    "artist": "Jeff Easley",
    "imagePath": "bet-sneak_thief-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-snow_leopard",
    "name": "Snow Leopard",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "",
    "flavorText": "\"This is the Le-o-pard, my child, His temper's anything but mild.\" ? A. M. Shaw & C. Beckwith",
    "artist": "Lindsey Crummett",
    "imagePath": "bet-snow_leopard-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-sorcerer",
    "name": "Sorcerer",
    "set": "Beta",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "bet-sorcerer-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "bet-sparkmage",
    "name": "Sparkmage",
    "set": "Beta",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "bet-sparkmage-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "bet-spear_of_destiny",
    "name": "Spear Of Destiny",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Bearer has \"Tap → Throw Spear of Destiny at any minion anywhere. It teleports to that minion's location and kills it.\"",
    "flavorText": "Nor mortal's blood shall sate a hunger erst whetted by divine.",
    "artist": "Andrea Modesti",
    "imagePath": "bet-spear_of_destiny-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-spectral_stalker",
    "name": "Spectral Stalker",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Voidwalk"
    ],
    "effectText": "Voidwalk",
    "flavorText": "\"We live on a placid island of ignorance in the midst of black seas of infinity, and it was not meant that we should voyage far.\" ? H. P. Lovecraft",
    "artist": "Jeff Easley",
    "imagePath": "bet-spectral_stalker-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-spin_attack",
    "name": "Spin Attack",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "An ally strikes each enemy at its location.",
    "flavorText": "",
    "artist": "Truitt Parrish",
    "imagePath": "bet-spin_attack-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-spire_lich",
    "name": "Spire Lich",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Ranged",
      "Spellcaster"
    ],
    "effectText": "If Spire Lich is atop a Tower, it has +2 power, Ranged, and Spellcaster.",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "bet-spire_lich-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-spring_river",
    "name": "Spring River",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Look at your next spell. You may put it on the bottom of your spellbook.",
    "flavorText": "",
    "artist": "Matt Tames",
    "imagePath": "bet-spring_river-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-squirming_mass",
    "name": "Squirming Mass",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 0,
    "life": 0,
    "keywords": [],
    "effectText": "Whenever a nearby minion dies, Squirming Mass permanently gains its power.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "bet-squirming_mass-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-standing_stones",
    "name": "Standing Stones",
    "set": "Beta",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "bet-standing_stones-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "bet-star_seeds_of_uhr",
    "name": "Star Seeds Of Uhr",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Fill up to thirteen voids with Rubble.",
    "flavorText": "For each layer of ruin excavated, another calamity of yore was revealed.",
    "artist": "Brian Smith",
    "imagePath": "bet-star_seeds_of_uhr-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-steppe",
    "name": "Steppe",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Earth",
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "There's beauty in the simplicity of empty horizons.",
    "artist": "Andrea Modesti",
    "imagePath": "bet-steppe-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-stone_gaze_gorgons",
    "name": "Stone Gaze Gorgons",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Other minions at rest at adjacent locations are disabled.",
    "flavorText": "In the gleam of his unblooded sword, Veslin unwittingly beheld a sight no mortal had yet lived to unsee.",
    "artist": "Séverine Pineaux",
    "imagePath": "bet-stone_gaze_gorgons-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-stormy_seas",
    "name": "Stormy Seas",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge all minions and artifacts occupying target water site.",
    "flavorText": "The sea is angry today, my friends; hike and hold, men, fly! Bring due astern Neptune's belly!",
    "artist": "Vincent Pompetti",
    "imagePath": "bet-stormy_seas-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-summer_river",
    "name": "Summer River",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Look at your next spell. You may put it on the bottom of your spellbook.",
    "flavorText": "",
    "artist": "Matt Tames",
    "imagePath": "bet-summer_river-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-summoning_sphere",
    "name": "Summoning Sphere",
    "set": "Beta",
    "type": "Aura",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "You may summon minions to affected sites.",
    "flavorText": "The icy earth swung blind and blackening in the moonless air. Morn came and went—and came, and brought no day. — Lord Byron",
    "artist": "Michal Nagypál",
    "imagePath": "bet-summoning_sphere-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-sunken_treasure",
    "name": "Sunken Treasure",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "If cast, conjure this under an allied water site of an opponent's choice.\n\nWhen Sunken Treasure is carried to the surface, its controller sacrifices it and draws two cards.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "bet-sunken_treasure-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-swamp_buffalo",
    "name": "Swamp Buffalo",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "",
    "flavorText": "Impassive, plump, and peaceful, the swamp buffalo is an icon of contentment.",
    "artist": "Jussi Pylkäs",
    "imagePath": "bet-swamp_buffalo-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-swan_maidens",
    "name": "Swan Maidens",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Airborne",
      "Submerge"
    ],
    "effectText": "Airborne, Submerge",
    "flavorText": "Before woman was, the water awaited her.",
    "artist": "Ossi Hiekkala",
    "imagePath": "bet-swan_maidens-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-swiven_scout",
    "name": "Swiven Scout",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Movement"
    ],
    "effectText": "Movement +1\n\nEnemy Avatars within Swiven Scout's range of motion play with their hands revealed.",
    "flavorText": "\"Know thine enemy and know thyself, and feel not the awe of a hundred battles.\" — Sun Tzu",
    "artist": "Jeff A. Menges",
    "imagePath": "bet-swiven_scout-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-tadpole_pool",
    "name": "Tadpole Pool",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "(W)(W)(W) — Genesis → Summon three submerged Frog tokens here.",
    "flavorText": "",
    "artist": "Michal Nagypál",
    "imagePath": "bet-tadpole_pool-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-telekinesis",
    "name": "Telekinesis",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Caster snatches and picks up target nearby artifact they can carry.",
    "flavorText": "\"If it's in my hand, it's mine.\" — Toddler's first rule.",
    "artist": "Jeff Easley",
    "imagePath": "bet-telekinesis-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-teleport",
    "name": "Teleport",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Teleport an ally to the surface of target site.",
    "flavorText": "\"There was no real sense of time passing, and in the last act it felt like everyone was just teleporting everywhere.\" — Highland Theater Critic",
    "artist": "Vincent Pompetti",
    "imagePath": "bet-teleport-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-the_colour_out_of_space",
    "name": "The Colour Out Of Space",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Air",
      "Earth",
      "Fire",
      "Water"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 1,
      "fire": 1,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Provides no mana or threshold if not adjacent to the void.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "bet-the_colour_out_of_space-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-the_geistwood",
    "name": "The Geistwood",
    "set": "Beta",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "bet-the_geistwood-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "bet-the_immortal_throne",
    "name": "The Immortal Throne",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Whenever anyone plays a card with cost equal to the number of level counters on The Immortal Throne, they draw a card and add a level counter.\n\nAt level 8 or more, an Avatar here alone wins the game.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "bet-the_immortal_throne-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-thunderstorm",
    "name": "Thunderstorm",
    "set": "Beta",
    "type": "Aura",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "At the end of your turn, deal 3 damage to a random unit atop affected sites, then you may move Thunderstorm one step. Lasts 3 of your turns.",
    "flavorText": "",
    "artist": "Ossi Hiekkala",
    "imagePath": "bet-thunderstorm-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-tide_naiads",
    "name": "Tide Naiads",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge\n\nThis site is flooded. It is a water site.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "bet-tide_naiads-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-torshammar_trinket",
    "name": "Torshammar Trinket",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Bearer has +1 power.\n\nAt the end of your turn, return this to its owner's hand.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "bet-torshammar_trinket-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-tragedy_worrywart",
    "name": "Tragedy Worrywart",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "Units nearby take no damage from Magic spells.",
    "flavorText": "Better safe than sorry.",
    "artist": "Jeff A. Menges",
    "imagePath": "bet-tragedy_worrywart-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-tringh_constrictor",
    "name": "Tringh Constrictor",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Tap → Tringh Constrictor may take a step, then it constricts and disables target minion at its location. At the start of your next turn, if the minion remains constricted, it dies. Tringh Constrictor doesn't untap during your next untap step.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "bet-tringh_constrictor-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-truesight_crossbow",
    "name": "Truesight Crossbow",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Ranged",
      "Stealth"
    ],
    "effectText": "Bearer has Ranged and can target Stealth units.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "bet-truesight_crossbow-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-tufted_turtles",
    "name": "Tufted Turtles",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "The first time Tuft Turtles would take damage each turn, prevent that damage.",
    "flavorText": "A turtle is never without a castle—or a coffin.",
    "artist": "Matt Tames",
    "imagePath": "bet-tufted_turtles-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-tvinnax_berserker",
    "name": "Tvinnax Berserker",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Whenever Tvinnax Berserker can attack a unit, he must.\n\nUntap Tvinnax Berserker whenever he attacks and kills an enemy minion.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "bet-tvinnax_berserker-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-twist_of_fate",
    "name": "Twist Of Fate",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 3
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Exchange life totals with target opponent. (X) is the difference between your life totals.",
    "flavorText": "",
    "artist": "Santiago Caruso",
    "imagePath": "bet-twist_of_fate-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-ultimate_horror",
    "name": "Ultimate Horror",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 8,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 6,
    "life": 6,
    "keywords": [
      "Airborne",
      "Voidwalk"
    ],
    "effectText": "Airborne, Voidwalk\n\nGenesis → Summon each other dead Voidwalk minion to a nearby site or void.",
    "flavorText": "",
    "artist": "Ian Miller",
    "imagePath": "bet-ultimate_horror-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-undertaker_engine",
    "name": "Undertaker Engine",
    "set": "Beta",
    "type": "Minion",
    "elements": [],
    "rarity": "Elite",
    "cost": 7,
    "threshold": {},
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "At the end of your turn, you may burrow and/or unburrow any combination of artifacts and minions at this site.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "bet-undertaker_engine-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-undertow",
    "name": "Undertow",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Staying within this body of water, move target unit one step.",
    "flavorText": "",
    "artist": "Caio Calazans",
    "imagePath": "bet-undertow-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-unland_angler",
    "name": "Unland Angler",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge\n\nAt the start of your turn, if Unland Angler is submerged, force each enemy minion atop adjacent sites to take a step toward this one.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "bet-unland_angler-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-unland_eel",
    "name": "Unland Eel",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge\n\nWhenever Unland Eel submerges, it may drag another minion down with it.",
    "flavorText": "",
    "artist": "Francesca Baerald",
    "imagePath": "bet-unland_eel-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-unlikely_alliance",
    "name": "Unlikely Alliance",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Draw a card for each rarity among allied minions.",
    "flavorText": "There are three rules for winning a war. Unfortunately, nobody knows what they are.",
    "artist": "Ossi Hiekkala",
    "imagePath": "bet-unlikely_alliance-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-unravel",
    "name": "Unravel",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Destroy all artifacts and Undead minions at a location up to two steps away.",
    "flavorText": "\"My heart, why come you here alone? The wild thing of my heart is grown, to be a thing, fairy, and wild, and fair, and whole.\" — G. P. T. Branwen",
    "artist": "Séverine Pineaux",
    "imagePath": "bet-unravel-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-updraft_ridge",
    "name": "Updraft Ridge",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Airborne",
      "Movement"
    ],
    "effectText": "Airborne minions atop Updraft Ridge have Movement +1.",
    "flavorText": "",
    "artist": "Caio Calazans",
    "imagePath": "bet-updraft_ridge-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-upwelling",
    "name": "Upwelling",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Target a nearby site. Return each artifact and minion there to its owner's hand.",
    "flavorText": "There is no height to which confident fools cannot ascend.",
    "artist": "Alan Pollack",
    "imagePath": "bet-upwelling-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-vanguard_knights",
    "name": "Vanguard Knights",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Vanguard Knights have +2 power if they alone are the furthest forward of your units.",
    "flavorText": "",
    "artist": "Truitt Parrish",
    "imagePath": "bet-vanguard_knights-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-vantage_hills",
    "name": "Vantage Hills",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Ranged"
    ],
    "effectText": "Ranged units atop this site have +1 range.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "bet-vantage_hills-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-vaults_of_zul",
    "name": "Vaults Of Zul",
    "set": "Beta",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "bet-vaults_of_zul-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "bet-vesuvius",
    "name": "Vesuvius",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "(F)(F)(F) — Sacrifice Vesuvius → Each unit occupying nearby sites takes 3 damage.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "bet-vesuvius-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-vile_imp",
    "name": "Vile Imp",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → May deal 2 damage to target adjacent unit.",
    "flavorText": "One good burn deserves another.",
    "artist": "Jeff A. Menges",
    "imagePath": "bet-vile_imp-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-vril_revenant",
    "name": "Vril Revenant",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Voidwalk"
    ],
    "effectText": "Voidwalk\n\n(1) → Gain +1 power this turn.",
    "flavorText": "",
    "artist": "Margaret Organ-Kean",
    "imagePath": "bet-vril_revenant-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-wall_of_air",
    "name": "Wall Of Air",
    "set": "Beta",
    "type": "Aura",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Conjure atop the border of a site you control.\n\nMinions with Airborne or 2 or less power can't traverse Wall of Air.",
    "flavorText": "",
    "artist": "Matt Tames",
    "imagePath": "bet-wall_of_air-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-wall_of_fire",
    "name": "Wall Of Fire",
    "set": "Beta",
    "type": "Aura",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Conjure atop the border of a site you control.\nWhenever a unit passes through Wall of Fire, it takes 3 damage.",
    "flavorText": "",
    "artist": "Matt Tames",
    "imagePath": "bet-wall_of_fire-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-wall_of_ice",
    "name": "Wall Of Ice",
    "set": "Beta",
    "type": "Aura",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Conjure atop the border of a site you control.\n\nUnits can't traverse Wall of Ice on the ground.",
    "flavorText": "",
    "artist": "Matt Tames",
    "imagePath": "bet-wall_of_ice-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-warp_spasm",
    "name": "Warp Spasm",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 3,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "This turn, double an allied minion's power, and whenever it attacks and kills a unit, it untaps. At the end of the turn, it dies.",
    "flavorText": "",
    "artist": "Ian Miller",
    "imagePath": "bet-warp_spasm-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-watchtower",
    "name": "Watchtower",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Stealth"
    ],
    "effectText": "Enemy units atop nearby sites permanently lose Stealth.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "bet-watchtower-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-waveshaper",
    "name": "Waveshaper",
    "set": "Beta",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "bet-waveshaper-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "bet-wayfaring_pilgrim",
    "name": "Wayfaring Pilgrim",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "Whenever Wayfaring Pilgrim enters each corner of the realm for the first time, you may draw a card.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "bet-wayfaring_pilgrim-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-waypoint_portal",
    "name": "Waypoint Portal",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Choose two different sites. This turn, units can move between them as if they were adjacent.",
    "flavorText": "",
    "artist": "Jeff Easley",
    "imagePath": "bet-waypoint_portal-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-whirling_blades",
    "name": "Whirling Blades",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 5,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "An ally may take up to two steps, and then strikes each enemy along their entire path.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "bet-whirling_blades-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-wicked_witch",
    "name": "Wicked Witch",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Spellcaster\n\nOther nearby minions have -2 power.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "bet-wicked_witch-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-wicker_manikin",
    "name": "Wicker Manikin",
    "set": "Beta",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {},
    "power": 1,
    "life": 1,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Non-fire Spellcaster",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "bet-wicker_manikin-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-wild_boars",
    "name": "Wild Boars",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "",
    "flavorText": "Twere once again drowsy, when all in a rush, wild boar came a-snuffling, straight out of the brush!",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "bet-wild_boars-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-wildfire",
    "name": "Wildfire",
    "set": "Beta",
    "type": "Aura",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Conjure Wildfire atop a single site nearby.\n\nAt the end of each turn, each unit here takes 3 damage, then move Wildfire to an adjacent location it hasn't visited before. If none remain, dispel Wildfire.",
    "flavorText": "",
    "artist": "Mattias Frisk",
    "imagePath": "bet-wildfire-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-wills_o_the_wisp",
    "name": "Wills O The Wisp",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Voidwalk"
    ],
    "effectText": "Voidwalk\n\nWhenever Wills-o'-the-Wisp are attacked, they may teleport to another nearby void or location to evade the attack.",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "bet-wills_o_the_wisp-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-wind_sylph",
    "name": "Wind Sylph",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Airborne",
      "Spellcaster"
    ],
    "effectText": "Airborne, Air Spellcaster\n\nAfter Wind Sylph casts a Magic spell, she may push a unit here one step.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "bet-wind_sylph-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-windblast",
    "name": "Windblast",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Push everything atop sites one step in a cardinal direction.",
    "flavorText": "",
    "artist": "Michal Nagypál",
    "imagePath": "bet-windblast-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-windmill",
    "name": "Windmill",
    "set": "Beta",
    "type": "Site",
    "elements": [
      "Air",
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "The wind's wild words, in uncertain surges, whisper how the world was made.",
    "artist": "Elwira Pawlikowska",
    "imagePath": "bet-windmill-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-wings_of_invention",
    "name": "Wings Of Invention",
    "set": "Beta",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Airborne",
      "Movement"
    ],
    "effectText": "Bearer has Airborne and Movement +1, if it's a minion.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "bet-wings_of_invention-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-witherwing_hero",
    "name": "Witherwing Hero",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nWhenever a weaker allied minion here is attacked, you may return it to its owner's hand.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "bet-witherwing_hero-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-wraetannis_titan",
    "name": "Wraetannis Titan",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 6,
    "life": 6,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Strike each enemy here.",
    "flavorText": "",
    "artist": "Tony Szczudlo",
    "imagePath": "bet-wraetannis_titan-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-wrath_of_the_sea",
    "name": "Wrath Of The Sea",
    "set": "Beta",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Flood all sites adjacent to a body of water this turn. Then submerge all minions and artifacts on water.",
    "flavorText": "",
    "artist": "Mattias Frisk",
    "imagePath": "bet-wrath_of_the_sea-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-yokai_kappas",
    "name": "Yokai Kappas",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Discard a water site → Untap Yokai Kappas. Use only once per turn.",
    "flavorText": "",
    "artist": "Gadu Duaso",
    "imagePath": "bet-yokai_kappas-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-yourke_crossbowmen",
    "name": "Yourke Crossbowmen",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Ranged"
    ],
    "effectText": "Ranged\n\nTakes no damage from ranged strikes.",
    "flavorText": "",
    "artist": "Andrea Modesti",
    "imagePath": "bet-yourke_crossbowmen-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "bet-zephyranne_airship",
    "name": "Zephyranne Airship",
    "set": "Beta",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Airborne",
      "Movement"
    ],
    "effectText": "Airborne, Movement +2\n\nMay carry any number of allied minions.",
    "flavorText": "",
    "artist": "Marta Molina",
    "imagePath": "bet-zephyranne_airship-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "dra-adtonitum",
    "name": "Adtonitum",
    "set": "Dragonlord",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 7,
    "threshold": {
      "air": 3,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 6,
    "life": 6,
    "keywords": [
      "Airborne",
      "Movement"
    ],
    "effectText": "Airborne, Movement +1\n\nWhenever Adtonitum stops, she may deal 3 damage to another random unit there.",
    "flavorText": "",
    "artist": "Ed Beard Jr.",
    "imagePath": "dra-adtonitum-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "dra-caelestis",
    "name": "Caelestis",
    "set": "Dragonlord",
    "type": "Minion",
    "elements": [
      "Earth",
      "Fire",
      "Water",
      "Air"
    ],
    "rarity": "Unique",
    "cost": 7,
    "threshold": {
      "air": 1,
      "earth": 1,
      "fire": 1,
      "water": 1
    },
    "power": 5,
    "life": 5,
    "keywords": [
      "Airborne",
      "Voidwalk"
    ],
    "effectText": "Airborne, Voidwalk\n\nTap → The next Dragon you cast to this location costs (0) this turn.",
    "flavorText": "",
    "artist": "Ed Beard Jr.",
    "imagePath": "dra-caelestis-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "dra-cradle_of_etherrum",
    "name": "Cradle Of Etherrum",
    "set": "Dragonlord",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Any time during your turn, you may look at your next spell.\n\nYou may cast Dragons from the top of your spellbook here for (1) less.",
    "flavorText": "",
    "artist": "Ed Beard Jr.",
    "imagePath": "dra-cradle_of_etherrum-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "dra-draco_corvus",
    "name": "Draco Corvus",
    "set": "Dragonlord",
    "type": "Minion",
    "elements": [
      "Air",
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 7,
    "threshold": {
      "air": 2,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 5,
    "life": 5,
    "keywords": [
      "Airborne",
      "Stealth"
    ],
    "effectText": "Airborne, Stealth\n\nTap → Teleport to target tapped minion to burrow it.",
    "flavorText": "",
    "artist": "Ed Beard Jr.",
    "imagePath": "dra-draco_corvus-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "dra-dragonlord",
    "name": "Dragonlord",
    "set": "Dragonlord",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "dra-dragonlord-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "dra-dragonlords_lair",
    "name": "Dragonlord's Lair",
    "set": "Dragonlord",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "dra-dragonlords_lair-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "dra-ignis_rex",
    "name": "Ignis Rex",
    "set": "Dragonlord",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 3,
      "water": 0
    },
    "power": 6,
    "life": 6,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne, Immune to fire damage\n\nOnce on your turn, discard a fire card → Deal 3 damage to units at target adjacent location.",
    "flavorText": "",
    "artist": "Ed Beard Jr.",
    "imagePath": "dra-ignis_rex-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "dra-kairos_the_archivist",
    "name": "Kairos The Archivist",
    "set": "Dragonlord",
    "type": "Minion",
    "elements": [],
    "rarity": "Unique",
    "cost": 7,
    "threshold": {},
    "power": 3,
    "life": 3,
    "keywords": [
      "Deathrite",
      "Genesis"
    ],
    "effectText": "Genesis → Archive the state of the realm.\nDeathrite → Return all archived cards to their recorded state. Then banish Kairos.",
    "flavorText": "",
    "artist": "Ed Beard Jr.",
    "imagePath": "dra-kairos_the_archivist-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "dra-moonsong_talagelum",
    "name": "Moonsong Talagelum",
    "set": "Dragonlord",
    "type": "Minion",
    "elements": [
      "Air",
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nCounts as a Grey Wolves and has +1 power for each other Grey Wolves nearby.",
    "flavorText": "",
    "artist": "Ed Beard Jr.",
    "imagePath": "dra-moonsong_talagelum-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "dra-shrine_of_the_dragonlord",
    "name": "Shrine Of The Dragonlord",
    "set": "Dragonlord",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Teleport all Dragons here.\n\nThis site provides an additional (1) and (E)(F)(W)(A).",
    "flavorText": "",
    "artist": "Ed Beard Jr.",
    "imagePath": "dra-shrine_of_the_dragonlord-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "dra-talamh_dreig",
    "name": "Talamh Dreig",
    "set": "Dragonlord",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 3,
      "fire": 0,
      "water": 0
    },
    "power": 6,
    "life": 6,
    "keywords": [],
    "effectText": "Can't be moved by force.\n\nHas +1 power for each adjacent site.",
    "flavorText": "",
    "artist": "Ed Beard Jr.",
    "imagePath": "dra-talamh_dreig-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "dra-vatn_draconis",
    "name": "Vatn Draconis",
    "set": "Dragonlord",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 3
    },
    "power": 6,
    "life": 6,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge\n\nAt the end of your turn, you may submerge all minions and artifacts here.",
    "flavorText": "",
    "artist": "Ed Beard Jr.",
    "imagePath": "dra-vatn_draconis-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "dra-xeraphine_konrul",
    "name": "Xeraphine Konrul",
    "set": "Dragonlord",
    "type": "Minion",
    "elements": [
      "Fire",
      "Water"
    ],
    "rarity": "Unique",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 2
    },
    "power": 5,
    "life": 5,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nAt the end of your turn, you may choose three of your dead minions. Banish two to return the remaining one to hand.",
    "flavorText": "",
    "artist": "Ed Beard Jr.",
    "imagePath": "dra-xeraphine_konrul-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-aaj_kegon_ghost_crabs",
    "name": "Aaj Kegon Ghost Crabs",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 0,
    "life": 0,
    "keywords": [
      "Submerge",
      "Voidwalk"
    ],
    "effectText": "Submerge, Voidwalk\n\nHas +1 power for each void in their row.",
    "flavorText": "The blacker the night, the keener the claw.",
    "artist": "Elvira Shakirova",
    "imagePath": "got-aaj_kegon_ghost_crabs-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-abaddon_succubus",
    "name": "Abaddon Succubus",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Once on your turn, may lure target adjacent enemy minion to take a step closer. When it arrives, it takes 2 damage and you heal 2.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "got-abaddon_succubus-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-abyssal_assault",
    "name": "Abyssal Assault",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "For each point of its power, an allied Monster may deal 1 damage to a unit in a square near it.",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "got-abyssal_assault-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-accursed_desert",
    "name": "Accursed Desert",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Break nearby Wards.",
    "flavorText": "",
    "artist": "Emil Idzikowski",
    "imagePath": "got-accursed_desert-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-accursed_tower",
    "name": "Accursed Tower",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Break nearby Wards.",
    "flavorText": "",
    "artist": "Michal Nagypál",
    "imagePath": "got-accursed_tower-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-accusation",
    "name": "Accusation",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Target opponent reveals their hand and banishes a card. If any of their cards or allies are Evil, you may choose which.",
    "flavorText": "",
    "artist": "Heidi Taillefer",
    "imagePath": "got-accusation-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-acid_rain",
    "name": "Acid Rain",
    "set": "Gothic",
    "type": "Aura",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Silence affected sites and artifacts there.",
    "flavorText": "This is the way the world ends—not with a bang but a drizzle.",
    "artist": "Dan Seagrave",
    "imagePath": "got-acid_rain-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-active_volcano",
    "name": "Active Volcano",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "What power, what purpose, what people dared forge a face in living fire?",
    "artist": "Brian Smith",
    "imagePath": "got-active_volcano-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-aethermoeba",
    "name": "Aethermoeba",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 0,
    "life": 0,
    "keywords": [
      "Voidwalk"
    ],
    "effectText": "Voidwalk\n\nMoves by expanding from any part of itself. It occupies all locations it has ever occupied, and has +1 power for each one that is void.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "got-aethermoeba-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-aino",
    "name": "Aino",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Stealth"
    ],
    "effectText": "At the end of your turn, Aino may take a step between the top and bottom edges of the realm to gain Stealth.",
    "flavorText": "",
    "artist": "Quinton Hoover",
    "imagePath": "got-aino-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-alabaster_box",
    "name": "Alabaster Box",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Whenever a minion dies nearby, you heal 1.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "got-alabaster_box-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-algae_bloom",
    "name": "Algae Bloom",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Provides (A)(E)(F) this turn.",
    "flavorText": "",
    "artist": "Caio Calazans",
    "imagePath": "got-algae_bloom-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-algor_omphalos",
    "name": "Algor Omphalos",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Earth and Water Spellcaster\n\nAt the end of your turn, this Omphalos draws a spell, which only it can cast. Minions it casts must be summoned here.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "got-algor_omphalos-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-all_mortals_gone",
    "name": "All Mortals Gone",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Kill all Mortals.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "got-all_mortals_gone-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-altar_of_malachai",
    "name": "Altar Of Malachai",
    "set": "Gothic",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-altar_of_malachai-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-angel_ascendant",
    "name": "Angel Ascendant",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Has Airborne and +1 power while Warded.",
    "flavorText": "Wings were not granted, but uncovered—folded deep within the stillness of surrender.",
    "artist": "Lindsey Crummett",
    "imagePath": "got-angel_ascendant-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-angry_mob",
    "name": "Angry Mob",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Kill target adjacent Unique or Elite minion.",
    "flavorText": "A single shout ignites a wildfire in the field of their discontent.",
    "artist": "Bryon Wackwitz",
    "imagePath": "got-angry_mob-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-animist",
    "name": "Animist",
    "set": "Gothic",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-animist-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-apostles_of_thamariel",
    "name": "Apostles Of Thamariel",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Search your top seven spells. You may summon an Angel from among them, then shuffle. The Angel is banished if the Apostles ever leave the realm.",
    "flavorText": "",
    "artist": "Pedro Ferreira",
    "imagePath": "got-apostles_of_thamariel-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-apply_alkahest",
    "name": "Apply Alkahest",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Earth",
      "Fire",
      "Water",
      "Air"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 1,
      "earth": 1,
      "fire": 1,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Destroy all minions, artifacts, and auras at target nearby site.",
    "flavorText": "",
    "artist": "Francesca Baerald",
    "imagePath": "got-apply_alkahest-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-arcade_of_bones",
    "name": "Arcade Of Bones",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "While in this row, Undead move freely and can't be targeted or damaged by magic.",
    "flavorText": "The way is straight, the toll is breath.",
    "artist": "Dan Seagrave",
    "imagePath": "got-arcade_of_bones-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-archangel_gabriel",
    "name": "Archangel Gabriel",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {
      "air": 4,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne, Ward\n\nGenesis -> Choose another allied minion. They draw a spell, which only they can cast.",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "got-archangel_gabriel-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-archangel_michael",
    "name": "Archangel Michael",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 4,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne, Ward\n\nGenesis → Michael takes a step, then strikes all enemies at his location.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "got-archangel_michael-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-archangel_raphael",
    "name": "Archangel Raphael",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 4
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne, Ward\n\nGenesis → Strike or Ward a nearby Avatar.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "got-archangel_raphael-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-archangel_samael",
    "name": "Archangel Samael",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 4,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne, Ward\n\nGenesis → Players lose 1 life for each Evil minion they control or in their cemetery.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "got-archangel_samael-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-arjaro_exorcist",
    "name": "Arjaro Exorcist",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Spellcaster\n\nGenesis → Banish target adjacent Demon, Spirit, or aura.",
    "flavorText": "",
    "artist": "Juan Machuca",
    "imagePath": "got-arjaro_exorcist-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-armageddon",
    "name": "Armageddon",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Earth",
      "Fire",
      "Water",
      "Air"
    ],
    "rarity": "Unique",
    "cost": 10,
    "threshold": {
      "air": 1,
      "earth": 1,
      "fire": 1,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Destroy everything.",
    "flavorText": "The heavens shall pass in a great shattering, and the elements shall melt with a fervent heat; the earth also, and all its works therein shall be burned up and by flame undone. — 2 Peter 3:10",
    "artist": "Tony Szczudlo",
    "imagePath": "got-armageddon-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-army_of_the_dead",
    "name": "Army Of The Dead",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 3,
      "fire": 0,
      "water": 0
    },
    "power": 8,
    "life": 8,
    "keywords": [],
    "effectText": "Whenever this Army moves or takes damage, it leaves a Skeleton token behind.",
    "flavorText": "Less army than avalanche, their numbers never seemed to dwindle.",
    "artist": "Mattias Frisk",
    "imagePath": "got-army_of_the_dead-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-asmodeus",
    "name": "Asmodeus",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 3,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Stealth"
    ],
    "effectText": "Stealth\n\nBreak Stealth → Destroy everything else here, including this site.",
    "flavorText": "He arrived fashionably late, of course—but ruination was right on time.",
    "artist": "Elvira Shakirova",
    "imagePath": "got-asmodeus-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-assimilator_snail",
    "name": "Assimilator Snail",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 0,
    "life": 0,
    "keywords": [],
    "effectText": "Once on your turn, you may banish a dead minion. Assimilator Snail becomes a copy of that minion until your next turn.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "got-assimilator_snail-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-autumn_bloom",
    "name": "Autumn Bloom",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Provides (A)(F)(W) this turn.",
    "flavorText": "",
    "artist": "Caio Calazans",
    "imagePath": "got-autumn_bloom-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-avenging_angel",
    "name": "Avenging Angel",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nHas Charge and Lethal if an ally died on your opponent's last turn.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "got-avenging_angel-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-baba_yagas_hut",
    "name": "Baba Yaga's Hut",
    "set": "Gothic",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-baba_yagas_hut-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-balor_of_the_evil_eye",
    "name": "Balor Of The Evil Eye",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 6,
    "life": 6,
    "keywords": [],
    "effectText": "Once on your turn, Balor may deal 2 damage to one unit at each other location in a cardinal direction.",
    "flavorText": "The great eye opens, scrawling a searing epitaph vast upon the horizon.",
    "artist": "Adam Burke",
    "imagePath": "got-balor_of_the_evil_eye-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-bane_of_aventis",
    "name": "Bane Of Aventis",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 3,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Gain control of nearby Warded minions.",
    "flavorText": "Faith perverted to unholy purpose.",
    "artist": "Séverine Pineaux",
    "imagePath": "got-bane_of_aventis-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-baptize",
    "name": "Baptize",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Ward each allied minion at target water site.",
    "flavorText": "The water bears the burdens the soul cannot.",
    "artist": "Marta Molina",
    "imagePath": "got-baptize-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-barging_barghest",
    "name": "Barging Barghest",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Voidwalk",
      "Movement"
    ],
    "effectText": "Movement +1, Voidwalk",
    "flavorText": "",
    "artist": "Zohn Dee",
    "imagePath": "got-barging_barghest-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-barrow_wight",
    "name": "Barrow Wight",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Burrowing"
    ],
    "effectText": "Burrowing\n\n(2), Sacrifice a Skeleton token → Summon this minion from your cemetery to that site.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "got-barrow_wight-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-begone",
    "name": "Begone",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Banish an Evil minion anywhere in the realm.",
    "flavorText": "",
    "artist": "Heidi Taillefer",
    "imagePath": "got-begone-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-betrayal",
    "name": "Betrayal",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 3,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Gain control of target enemy minion this turn and untap it.",
    "flavorText": "Forgive me.",
    "artist": "Jussi Pylkäs",
    "imagePath": "got-betrayal-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-bind_evil",
    "name": "Bind Evil",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Disable target nearby Evil minion until an adjacent Spellcaster taps to release it.",
    "flavorText": "Who knew damnation could be contained by such delicate artistry?",
    "artist": "Brian Smith",
    "imagePath": "got-bind_evil-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-bitten",
    "name": "Bitten",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Strike target nearby Evil minion.\n\nDeathrite → Summon a Skeleton token here under your opponent's control.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "got-bitten-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-bitter_departed",
    "name": "Bitter Departed",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → If an ally died last turn, may teleport to the killer to strike it.",
    "flavorText": "Dead but not done.",
    "artist": "Brom",
    "imagePath": "got-bitter_departed-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-black_cat",
    "name": "Black Cat",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "Has nine lives.\n\nDetermine opponent's random outcomes.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "got-black_cat-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-black_mass",
    "name": "Black Mass",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Search your top seven spells. You may reveal and draw three different Evil minions from among them. Put the rest at the bottom of your spellbook.",
    "flavorText": "",
    "artist": "Adam Burke",
    "imagePath": "got-black_mass-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-bladderblimp",
    "name": "Bladderblimp",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 5,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nDeathrite → Players lose 1 life for each nearby site they control.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "got-bladderblimp-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-blade_of_thorns",
    "name": "Blade Of Thorns",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Bearer has +3 power, but it can't drop this Weapon and its controller loses 2 life at the end of their turn.",
    "flavorText": "",
    "artist": "Pedro Ferreira",
    "imagePath": "got-blade_of_thorns-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-bladedancer",
    "name": "Bladedancer",
    "set": "Gothic",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-bladedancer-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-blasphemy",
    "name": "Blasphemy",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Fire",
      "Water",
      "Air"
    ],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 1,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Each minion deals 1 damage to its site, destroys an artifact there, then taps. They don't untap the next time they would.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "got-blasphemy-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-blaze_of_glory",
    "name": "Blaze Of Glory",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "An ally fights each enemy near it, one at a time. It doesn't die until it's done.",
    "flavorText": "Only her sword remains with us now, but what a bonfire she made.",
    "artist": "Elwira Pawlikowska",
    "imagePath": "got-blaze_of_glory-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-bleeding_skull",
    "name": "Bleeding Skull",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Whenever a minion dies nearby, your opponent loses 1 life.",
    "flavorText": "",
    "artist": "Mattias Frisk",
    "imagePath": "got-bleeding_skull-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-bless",
    "name": "Bless",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Ward a nearby minion or site.",
    "flavorText": "",
    "artist": "Truitt Parrish",
    "imagePath": "got-bless-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-blessed_village",
    "name": "Blessed Village",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Ward",
    "flavorText": "The day's honest labor ends. An evening's quiet prayer begins.",
    "artist": "Jeff A. Menges",
    "imagePath": "got-blessed_village-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-blessed_well",
    "name": "Blessed Well",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Ward",
    "flavorText": "Water thick with memories, now settled in the quiet bruise of years.",
    "artist": "Truitt Parrish",
    "imagePath": "got-blessed_well-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-blightstone",
    "name": "Blightstone",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "This site is disabled.",
    "flavorText": "Within its unwavering gaze, ambition falters.",
    "artist": "Michal Nagypál",
    "imagePath": "got-blightstone-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-blood_mana",
    "name": "Blood Mana",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 3,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "The next spell you cast this turn costs life instead of mana.",
    "flavorText": "Magic is easy. You just open a vein and bleed.",
    "artist": "AronjaArt",
    "imagePath": "got-blood_mana-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-bodach_bogeyman",
    "name": "Bodach Bogeyman",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "Can pick up and drop weaker enemy minions at adjacent locations. They're disabled while carried.",
    "flavorText": "A lullaby unfinished. A window ajar.",
    "artist": "Brian Smith",
    "imagePath": "got-bodach_bogeyman-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-bone_jumble",
    "name": "Bone Jumble",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Charge"
    ],
    "effectText": "Charge\n\n(1), Sacrifice a Skeleton token → Summon Bone Jumble from your cemetery there.",
    "flavorText": "Some assembly required.",
    "artist": "Brom",
    "imagePath": "got-bone_jumble-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-bone_spear",
    "name": "Bone Spear",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Sacrifice an Undead to shoot a projectile from its location that deals 3 damage.",
    "flavorText": "Acupuncture from the afterlife.",
    "artist": "Doug Kovacs",
    "imagePath": "got-bone_spear-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-book_burners",
    "name": "Book Burners",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Once on your turn, Book Burners may banish a Document from the realm or a magic from a cemetery.",
    "flavorText": "",
    "artist": "Francesca Baerald",
    "imagePath": "got-book_burners-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-book_of_blessings",
    "name": "Book Of Blessings",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Whenever bearer casts magic that chooses a single allied minion, Ward that ally.",
    "flavorText": "Misericordia et Veritas.",
    "artist": "Francesca Baerald",
    "imagePath": "got-book_of_blessings-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-book_of_the_dead",
    "name": "Book Of The Dead",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Once on your turn, Spellcaster bearer may cast a dead minion. It becomes Undead instead and is banished if it dies.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "got-book_of_the_dead-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-boulevard_of_bones",
    "name": "Boulevard Of Bones",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Whenever another site is played to an adjacent square, summon a Skeleton token there.",
    "flavorText": "",
    "artist": "Emil Idzikowski",
    "imagePath": "got-boulevard_of_bones-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-bound_spirit",
    "name": "Bound Spirit",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 4,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Disabled unless adjacent to an allied Spellcaster.",
    "flavorText": "By word and wand\nthe specter was bound.",
    "artist": "Doug Kovacs",
    "imagePath": "got-bound_spirit-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-broomstick_witch",
    "name": "Broomstick Witch",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Airborne",
      "Spellcaster"
    ],
    "effectText": "Airborne, Spellcaster",
    "flavorText": "A wicked blend of attitude and altitude.",
    "artist": "Elwira Pawlikowska",
    "imagePath": "got-broomstick_witch-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-bull_whip",
    "name": "Bull Whip",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Once on your turn, bearer may deal 1 damage to target adjacent minion.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "got-bull_whip-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-bureau_of_occult_control",
    "name": "Bureau Of Occult Control",
    "set": "Gothic",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-bureau_of_occult_control-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-buried_alive",
    "name": "Buried Alive",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "May be cast by any ally.\n\nBurrow target adjacent minion.",
    "flavorText": "She asked for peace and quiet. They gave her an eternity.",
    "artist": "Elwira Pawlikowska",
    "imagePath": "got-buried_alive-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-cage_of_sidrak",
    "name": "Cage Of Sidrak",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Lock all minions with 2 or less power in this cage, tapped and disabled.",
    "flavorText": "Too small to matter, too many to ignore.",
    "artist": "Dan Seagrave",
    "imagePath": "got-cage_of_sidrak-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-call_of_the_sea",
    "name": "Call Of The Sea",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 3
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Minions adjacent to target Water site step towards it. Then submerge all minions there.",
    "flavorText": "Moon-mad and mindless, they marched with the tide.",
    "artist": "AronjaArt",
    "imagePath": "got-call_of_the_sea-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-carrion_beetles",
    "name": "Carrion Beetles",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Burrowing"
    ],
    "effectText": "Burrowing\n\nGenesis → Banish three cards from one cemetery.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "got-carrion_beetles-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-carrionette",
    "name": "Carrionette",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Summon an Undead from a cemetery to a nearby location.",
    "flavorText": "",
    "artist": "Scott Kirschner",
    "imagePath": "got-carrionette-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-cemetery_rats",
    "name": "Cemetery Rats",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Burrowing"
    ],
    "effectText": "Burrowing\n\nGenesis → Discard your top two spells.",
    "flavorText": "We just interred my father... Please, adventurer, seek out the graveyard and slay ten rats.",
    "artist": "Mattias Frisk",
    "imagePath": "got-cemetery_rats-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-chaoswish",
    "name": "Chaoswish",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Water",
      "Air"
    ],
    "rarity": "Unique",
    "cost": 6,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Cast a copy of a random spell for free, ignoring threshold, then the next player may copy Chaoswish.",
    "flavorText": "From every shattered rule, a new delight spills forth.",
    "artist": "Elvira Shakirova",
    "imagePath": "got-chaoswish-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-char_omphalos",
    "name": "Char Omphalos",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Air and Fire Spellcaster\n\nAt the end of your turn, this Omphalos draws a spell, which only it can cast. Minions it casts must be summoned here.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "got-char_omphalos-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-cherubim",
    "name": "Cherubim",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 3,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne, Ward\n\nTap → Shoot a projectile that deals 4 damage.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "got-cherubim-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-chorus_of_condemnation",
    "name": "Chorus Of Condemnation",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Each player chooses another to discard a card.",
    "flavorText": "",
    "artist": "Ian Miller",
    "imagePath": "got-chorus_of_condemnation-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-city_of_glass",
    "name": "City Of Glass",
    "set": "Gothic",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-city_of_glass-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-city_of_plenty",
    "name": "City Of Plenty",
    "set": "Gothic",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-city_of_plenty-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-city_of_souls",
    "name": "City Of Souls",
    "set": "Gothic",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-city_of_souls-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-city_of_traitors",
    "name": "City Of Traitors",
    "set": "Gothic",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-city_of_traitors-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-clairvoyant",
    "name": "Clairvoyant",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "Ward\n\nOnce on your turn, you may banish a dead minion to look at your top spell. You may put it at the bottom.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "got-clairvoyant-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-clay_golem",
    "name": "Clay Golem",
    "set": "Gothic",
    "type": "Minion",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {},
    "power": 3,
    "life": 3,
    "keywords": [
      "Deathrite"
    ],
    "effectText": "Deathrite → Play your top site to an adjacent void or Rubble.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "got-clay_golem-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-consecrate",
    "name": "Consecrate",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "An ally Wards its site, then may transform it into a Consecrated Ground from your collection.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "got-consecrate-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-consecrated_ground",
    "name": "Consecrated Ground",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Evil has no power here.",
    "flavorText": "",
    "artist": "Caio Calazans",
    "imagePath": "got-consecrated_ground-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-corpse_catapult",
    "name": "Corpse Catapult",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Tap bearer and another ally here, Banish a dead minion → Deal damage equal to the banished minion's power to each unit at target location up to three steps away.",
    "flavorText": "",
    "artist": "Emil Idzikowski",
    "imagePath": "got-corpse_catapult-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-corpse_explosion",
    "name": "Corpse Explosion",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Deal a dead minion to each site in a two-by-two area. Deal damage equal to each corpse's power to units there, then banish the corpses.",
    "flavorText": "He went out with a bang.",
    "artist": "Brian Smith",
    "imagePath": "got-corpse_explosion-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-corruptor",
    "name": "Corruptor",
    "set": "Gothic",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-corruptor-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-corruptor_freak",
    "name": "Corruptor Freak",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "At the end of your turn, deal 2 damage to this site.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "got-corruptor_freak-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-cranky_overseer",
    "name": "Cranky Overseer",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Once on your turn, the Overseer may deal 1 damage to target adjacent Ordinary minion to untap it.",
    "flavorText": "Move, ye curs! Idle hands to the Devil's workshop!",
    "artist": "Lindsey Crummett",
    "imagePath": "got-cranky_overseer-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-crawler",
    "name": "Crawler",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Projectiles fly over Crawler.",
    "flavorText": "O valiant—now hunched and hollow, courage curdled into a crawl.",
    "artist": "Elwira Pawlikowska",
    "imagePath": "got-crawler-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-crawling_congregation",
    "name": "Crawling Congregation",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 5,
    "life": 5,
    "keywords": [],
    "effectText": "Projectiles fly over this and other adjacent allies.",
    "flavorText": "A shuffling procession of misery, instinctively seeking cover.",
    "artist": "Drew Tucker",
    "imagePath": "got-crawling_congregation-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-croaking_swamp",
    "name": "Croaking Swamp",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → You may pay (1) to summon a Frog token here.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "got-croaking_swamp-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-croll_morlocks",
    "name": "Croll Morlocks",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Burrowing",
      "Voidwalk"
    ],
    "effectText": "Burrowing, Voidwalk",
    "flavorText": "",
    "artist": "Ian Miller",
    "imagePath": "got-croll_morlocks-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-crucifix",
    "name": "Crucifix",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Return each Evil minion here to its owner’s hand.\n\nEvil minions can't enter this location.",
    "flavorText": "",
    "artist": "Emil Idzikowski",
    "imagePath": "got-crucifix-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-cursed_iron",
    "name": "Cursed Iron",
    "set": "Gothic",
    "type": "Aura",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Artifacts here can't be dropped and each deals 1 damage to its bearer at the end of each turn.",
    "flavorText": "",
    "artist": "Mattias Frisk",
    "imagePath": "got-cursed_iron-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-dank_omphalos",
    "name": "Dank Omphalos",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Air and Water Spellcaster\n\nAt the end of your turn, this Omphalos draws a spell, which only it can cast. Minions it casts must be summoned here.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "got-dank_omphalos-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-dark_alley",
    "name": "Dark Alley",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Stealth"
    ],
    "effectText": "The first minion that enters here gains Stealth.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "got-dark_alley-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-darkest_dungeon",
    "name": "Darkest Dungeon",
    "set": "Gothic",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-darkest_dungeon-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-day_of_judgment",
    "name": "Day Of Judgment",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 3,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Place the cross anywhere in the realm. Banish Evil and damage units occupying affected squares.\n\n$  3  \n3 7 3\n  3  \n  3  $",
    "flavorText": "",
    "artist": "Caio Calazans",
    "imagePath": "got-day_of_judgment-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-de_vermis_mysteriis",
    "name": "De Vermis Mysteriis",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Spellcaster bearer may cast minion spells for (5), ignoring threshold.",
    "flavorText": "Tibi, magnum Innominandum, signa stellarum nigrarum et bufoniformis Sadoquae sigillum.",
    "artist": "Truitt Parrish",
    "imagePath": "got-de_vermis_mysteriis-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-death_knight",
    "name": "Death Knight",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Other nearby Undead allies have +1 power.",
    "flavorText": "With rotted breath, the creature raised a ragged battle-cry and the shuffling corpses about him responded in turn.",
    "artist": "Dan Seagrave",
    "imagePath": "got-death_knight-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-deathwish",
    "name": "Deathwish",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Fire",
      "Air"
    ],
    "rarity": "Unique",
    "cost": 6,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Halve each Avatar's maximum life.",
    "flavorText": "To crave the end is still to crave.",
    "artist": "Elvira Shakirova",
    "imagePath": "got-deathwish-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-deep_sea",
    "name": "Deep Sea",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "Weight of water, weight of eons, weight of whies best left unsounded.",
    "artist": "Brian Smith",
    "imagePath": "got-deep_sea-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-defiler_spire",
    "name": "Defiler Spire",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Sites occupied by Evil have \"At the end of your turn, you lose 1 life.\"",
    "flavorText": "",
    "artist": "David O'Connor",
    "imagePath": "got-defiler_spire-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-deliverance",
    "name": "Deliverance",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Banish all nearby Evil.",
    "flavorText": "",
    "artist": "Mattias Frisk",
    "imagePath": "got-deliverance-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-demon_hunter",
    "name": "Demon Hunter",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Kill target adjacent Demon.",
    "flavorText": "Sword? Check. Crossbow? Check. Lucky hat? Check.",
    "artist": "Doug Kovacs",
    "imagePath": "got-demon_hunter-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-demonic_contract",
    "name": "Demonic Contract",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Search your spellbook for any card, reveal it, put it into your hand, then shuffle afterward. \nYou may only search for a spell that has rarity lower or equal to a Demon minion that you control. As an additional cost to cast Demonic Contract you must pay 4 life, or reach another accord with said demon by sacrificing a coin, egg, frog, gem, goat, rune, treasure, or Mortal soul.",
    "flavorText": "",
    "artist": "Brom",
    "imagePath": "got-demonic_contract-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-den_of_evil",
    "name": "Den Of Evil",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → This turn, the next Evil cast to this site costs (1) less, ignoring threshold.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "got-den_of_evil-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-desecrate",
    "name": "Desecrate",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "An Evil ally strikes its site, then may transform it into a Desecrated Ground from your collection.",
    "flavorText": "",
    "artist": "Pedro Ferreira",
    "imagePath": "got-desecrate-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-desecrated_ground",
    "name": "Desecrated Ground",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Evil units here have +1 power.",
    "flavorText": "",
    "artist": "Caio Calazans",
    "imagePath": "got-desecrated_ground-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-desecrator_kite",
    "name": "Desecrator Kite",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nAt the end of your turn, deal 1 damage to this site.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "got-desecrator_kite-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-desert_bloom",
    "name": "Desert Bloom",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Provides (A)(E)(W) this turn.",
    "flavorText": "",
    "artist": "Caio Calazans",
    "imagePath": "got-desert_bloom-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-detonate",
    "name": "Detonate",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Destroy a minion or artifact you own or control. It explodes, dealing 3 damage to each unit at its location.",
    "flavorText": "",
    "artist": "Juan Machuca",
    "imagePath": "got-detonate-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-dhol_chants",
    "name": "Dhol Chants",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Tap any number of nearby allies. Reveal that many spells from the top of your spellbook and cast one for free. Put the rest at the bottom of your spellbook.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "got-dhol_chants-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-displace",
    "name": "Displace",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Teleport target minion, artifact, or aura one diagonal step.",
    "flavorText": "",
    "artist": "David O'Connor",
    "imagePath": "got-displace-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-divine_intervention",
    "name": "Divine Intervention",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Earth",
      "Fire",
      "Water",
      "Air"
    ],
    "rarity": "Unique",
    "cost": 7,
    "threshold": {
      "air": 1,
      "earth": 1,
      "fire": 1,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Return from Death's Door to 1 life.",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "got-divine_intervention-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-divine_lance",
    "name": "Divine Lance",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Deal 1 damage to each minion at target site. You may break any number of allied Wards to increase the damage by 1 for each.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "got-divine_lance-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-doctor_demetrius",
    "name": "Doctor Demetrius",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Once on your turn, Demetrius may Ward another adjacent minion.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "got-doctor_demetrius-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-doomsday_cult",
    "name": "Doomsday Cult",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Players play with the top card of their spellbook revealed.\n \nPlayers may cast Evil from the top of their spellbook here.",
    "flavorText": "",
    "artist": "Juan Machuca",
    "imagePath": "got-doomsday_cult-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-dormant_monstrosity",
    "name": "Dormant Monstrosity",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 6,
    "life": 6,
    "keywords": [
      "Voidwalk"
    ],
    "effectText": "Voidwalk\n\nMust be cast to a corner void, costing (2) less for each unit in an adjacent square.",
    "flavorText": "All that sleeps must dream—and all it dreams, it hungers.",
    "artist": "Elwira Pawlikowska",
    "imagePath": "got-dormant_monstrosity-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-draconian_bonekite",
    "name": "Draconian Bonekite",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 7,
    "threshold": {
      "air": 3,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 7,
    "life": 7,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nTap → Deal 3 damage to each other unit at target nearby location. Summon a Skeleton token there for each unit that died.",
    "flavorText": "",
    "artist": "Zohn Dee",
    "imagePath": "got-draconian_bonekite-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-dread_thicket",
    "name": "Dread Thicket",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "The first attack out of this site each turn can't be defended.",
    "flavorText": "",
    "artist": "Mattias Frisk",
    "imagePath": "got-dread_thicket-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-dreadwing",
    "name": "Dreadwing",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 5,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nGenesis → Strikes your Avatar unless you discard a card.",
    "flavorText": "",
    "artist": "Brom",
    "imagePath": "got-dreadwing-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-dredge",
    "name": "Dredge",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Surface everything at target water site and summon two Skeleton tokens there.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "got-dredge-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-driftwood_marrows",
    "name": "Driftwood Marrows",
    "set": "Gothic",
    "type": "Minion",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {},
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Nearby allies can't be submerged.",
    "flavorText": "The lake presumed a form or three\n Of water-logged anatomy—\n No longer spar, nor root, nor bone\n But purpose risen, 'pon its own",
    "artist": "Michal Nagypál",
    "imagePath": "got-driftwood_marrows-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-drowned",
    "name": "Drowned",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Submerge"
    ],
    "effectText": "\nSubmerge\nMust be cast submerged.",
    "flavorText": "Blank eyes and empty minds. The sea denies true sustenance.",
    "artist": "Michal Nagypál",
    "imagePath": "got-drowned-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-duplicator",
    "name": "Duplicator",
    "set": "Gothic",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-duplicator-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-earl_of_the_ivory_towers",
    "name": "Earl Of The Ivory Towers",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Non-Ordinary Spellcaster\n\nCan't be targeted or damaged by the Ordinary.",
    "flavorText": "The higher his tower rose, the smaller the people seemed.",
    "artist": "Rodney Matthews",
    "imagePath": "got-earl_of_the_ivory_towers-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-eclipse",
    "name": "Eclipse",
    "set": "Gothic",
    "type": "Aura",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 2,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "You may cast Evil minions to affected sites.\n\nEvil allies occupying affected sites have +1 power.",
    "flavorText": "",
    "artist": "Michal Nagypál",
    "imagePath": "got-eclipse-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-eerie_coral",
    "name": "Eerie Coral",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Bearer has +1 power and gains Water Spellcaster.",
    "flavorText": "",
    "artist": "Michal Nagypál",
    "imagePath": "got-eerie_coral-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-elder_ruins",
    "name": "Elder Ruins",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Sacrifice a minion here → Cast a Shoggoth submerged here from your collection.",
    "flavorText": "",
    "artist": "Doug Kovacs",
    "imagePath": "got-elder_ruins-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-eltham_townsfolk",
    "name": "Eltham Townsfolk",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "",
    "flavorText": "Keep walkin', fancy boots. Nothin' fer yer kind in Eltham.",
    "artist": "Francesca Baerald",
    "imagePath": "got-eltham_townsfolk-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-endless_fence",
    "name": "Endless Fence",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Minions can't enter this span of land from the void.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "got-endless_fence-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-enduring_faith",
    "name": "Enduring Faith",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Ward an allied minion. Until your next turn, it takes damage for its nearby allies instead.",
    "flavorText": "It was not faith that burned, but what stood in its name.",
    "artist": "Emil Idzikowski",
    "imagePath": "got-enduring_faith-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-enraged_familiar",
    "name": "Enraged Familiar",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Has +2 power if you've lost life this turn.",
    "flavorText": "",
    "artist": "Doug Kovacs",
    "imagePath": "got-enraged_familiar-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-entombed",
    "name": "Entombed",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Burrowing"
    ],
    "effectText": "Burrowing\n\nMust be cast burrowed.",
    "flavorText": "The soil split, and the ground, gagging, gave up its grudge.",
    "artist": "Brian Smith",
    "imagePath": "got-entombed-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-ersatz_platz",
    "name": "Ersatz Platz",
    "set": "Gothic",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-ersatz_platz-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-estranged_loner",
    "name": "Estranged Loner",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Deathrite"
    ],
    "effectText": "Deathrite → You may summon a Horrible Hybrids from your collection to this location.",
    "flavorText": "",
    "artist": "Pedro Ferreira",
    "imagePath": "got-estranged_loner-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-ether_core",
    "name": "Ether Core",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Provides (3) while in the void.",
    "flavorText": "",
    "artist": "Adam Burke",
    "imagePath": "got-ether_core-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-evil_twin",
    "name": "Evil Twin",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Enters the realm as an Evil copy of an enemy minion, and strikes first if they fight.",
    "flavorText": "“His mercy was my prison and my key; in his kindness, I found his ruin.”",
    "artist": "Mattias Frisk",
    "imagePath": "got-evil_twin-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-exhume",
    "name": "Exhume",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Unburrow everything at target land site and summon two Skeleton tokens there.",
    "flavorText": "The scrape of shovel on wood—prelude to secrets untimely woken.",
    "artist": "Mattias Frisk",
    "imagePath": "got-exhume-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-failed_mutation",
    "name": "Failed Mutation",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "Can't be targeted or damaged by magic.",
    "flavorText": "In the womb of naked ambition, monstrosity often quickens.",
    "artist": "Alan Pollack",
    "imagePath": "got-failed_mutation-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-faith_incarnate",
    "name": "Faith Incarnate",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 0,
    "life": 0,
    "keywords": [],
    "effectText": "Has +2 power for each Ward in the realm.",
    "flavorText": "The shepherd leadeth in mercy, and is upheld by the faith of his flock.",
    "artist": "Scott Kirschner",
    "imagePath": "got-faith_incarnate-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-fallen_angel",
    "name": "Fallen Angel",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nNearby allied Demons have +1 power.",
    "flavorText": "",
    "artist": "Brom",
    "imagePath": "got-fallen_angel-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-falling_star",
    "name": "Falling Star",
    "set": "Gothic",
    "type": "Aura",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Lasts 3 of your turns. When the star falls, you may summon a minion from your hand atop an affected site. It strikes each other unit where it lands.",
    "flavorText": "",
    "artist": "Doug Kovacs",
    "imagePath": "got-falling_star-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-false_idol",
    "name": "False Idol",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Whenever a nearby minion taps, its opponent draws a spell.",
    "flavorText": "",
    "artist": "Juan Machuca",
    "imagePath": "got-false_idol-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-fatality",
    "name": "Fatality",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Fire",
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Kill target wounded minion.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "got-fatality-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-feign_death",
    "name": "Feign Death",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [
      "Stealth",
      "Deathrite"
    ],
    "effectText": "Trigger an allied minion's Deathrite. It gains Stealth. Draw a spell.",
    "flavorText": "",
    "artist": "Caio Calazans",
    "imagePath": "got-feign_death-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-ferrymans_coin",
    "name": "Ferrymans Coin",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Banish this coin → Gain (1), or banish up to three cards from any cemetery.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "got-ferrymans_coin-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-fertile_earth",
    "name": "Fertile Earth",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "One lush valley remained undespoiled. Lo, the people fed on fruit, and meat, and honey.",
    "artist": "Brian Smith",
    "imagePath": "got-fertile_earth-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-fields_of_phyxis",
    "name": "Fields Of Phyxis",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "The site directly in front is silenced.",
    "flavorText": "",
    "artist": "Emil Idzikowski",
    "imagePath": "got-fields_of_phyxis-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-flagellant",
    "name": "Flagellant",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Whenever Flaggelant takes damage, you heal 1.",
    "flavorText": "Each scar brings us closer to rapture.",
    "artist": "Lindsey Crummett",
    "imagePath": "got-flagellant-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-flame_of_the_first_ones",
    "name": "Flame Of The First Ones",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Whenever the flame stops at a new site, you heal 1 and your opponent loses 1 life.",
    "flavorText": "Faith is the bird that sings when the dawn is still dark. — Tagore",
    "artist": "Jeff A. Menges",
    "imagePath": "got-flame_of_the_first_ones-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-flame_strike",
    "name": "Flame Strike",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Choose a cardinal direction from the caster. Deal damage to each unit at affected locations:\n\n$1 1 1\n  3  \n  C$",
    "flavorText": "",
    "artist": "Pedro Ferreira",
    "imagePath": "got-flame_strike-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-flaming_skull",
    "name": "Flaming Skull",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Airborne",
      "Spellcaster"
    ],
    "effectText": "Airborne, Fire Spellcaster",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "got-flaming_skull-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-flayer",
    "name": "Flayer",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Deal 1 damage to each other nearby unit.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "got-flayer-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-forgotten_tomb",
    "name": "Forgotten Tomb",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Search your top five spells for a minion to discard. Bottom the rest.",
    "flavorText": "",
    "artist": "Marta Molina",
    "imagePath": "got-forgotten_tomb-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-forlorn_keep",
    "name": "Forlorn Keep",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "(E)(E) — Genesis → You may cast a Penitent Knight from your collection to this site.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "got-forlorn_keep-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-forsaken",
    "name": "Forsaken",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Voidwalk"
    ],
    "effectText": "Voidwalk\n\nMust be cast to an outer column.",
    "flavorText": "A prison needs no bars when reality itself is your jailer.",
    "artist": "Brian Smith",
    "imagePath": "got-forsaken-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-forsaken_crypt",
    "name": "Forsaken Crypt",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "(A)(A) — Genesis → You may cast a Ghoul from your collection to this site.",
    "flavorText": "",
    "artist": "Mattias Frisk",
    "imagePath": "got-forsaken_crypt-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-four_fat_frogs",
    "name": "Four Fat Frogs",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Summon four Frog tokens to an allied site.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "got-four_fat_frogs-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-fowl_bones",
    "name": "Fowl Bones",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\n(1), Sacrifice a Skeleton token → Summon Fowl Bones from your cemetery there.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "got-fowl_bones-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-freeze",
    "name": "Freeze",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Disable target nearby minion until your next turn.",
    "flavorText": "",
    "artist": "Juan Machuca",
    "imagePath": "got-freeze-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-frog",
    "name": "Frog",
    "set": "Gothic",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-frog-bt",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-frozen_horror",
    "name": "Frozen Horror",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Stealth"
    ],
    "effectText": "Stealth\n\nBreak Stealth → Disable other nearby minions until your next turn.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "got-frozen_horror-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-garden_of_eden",
    "name": "Garden Of Eden",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Earth",
      "Water"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Players can't draw more than one spell each turn.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "got-garden_of_eden-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-gargantula",
    "name": "Gargantula",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 3,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Gargantula may drag an adjacent minion here, disabling it in a cocoon until a unit at its location taps to free it.",
    "flavorText": "",
    "artist": "AronjaArt",
    "imagePath": "got-gargantula-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-ghost_town",
    "name": "Ghost Town",
    "set": "Gothic",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-ghost_town-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-ghostfire",
    "name": "Ghostfire",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Shoot a 1-damage projectile.\n\nYou may cast this spell from your cemetery, banishing it afterward.",
    "flavorText": "",
    "artist": "Scott Kirschner",
    "imagePath": "got-ghostfire-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-ghoul",
    "name": "Ghoul",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "",
    "flavorText": "In shadowed crypts where silence reigns\nA wretched form, all bone and bane\nCeaseless, sateless, always heeding—\nThe wet red sob of feeding",
    "artist": "Brom",
    "imagePath": "got-ghoul-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-gibbous_nightgaunts",
    "name": "Gibbous Nightgaunts",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Airborne",
      "Voidwalk"
    ],
    "effectText": "Airborne, Voidwalk",
    "flavorText": "",
    "artist": "Ian Miller",
    "imagePath": "got-gibbous_nightgaunts-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-gift_of_the_frog",
    "name": "Gift Of The Frog",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Summon a Frog token to an allied minion. Draw a spell.",
    "flavorText": "",
    "artist": "Pedro Ferreira",
    "imagePath": "got-gift_of_the_frog-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-gift_of_the_raven",
    "name": "Gift Of The Raven",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Choose an allied minion. The next time they strike a unit this turn, the damage heals you. Draw a spell.",
    "flavorText": "",
    "artist": "AronjaArt",
    "imagePath": "got-gift_of_the_raven-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-gift_of_the_serpent",
    "name": "Gift Of The Serpent",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Lethal"
    ],
    "effectText": "Give an allied minion Lethal this turn. Draw a spell.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "got-gift_of_the_serpent-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-gift_of_the_wolf",
    "name": "Gift Of The Wolf",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Give an allied minion +2 power this turn. Draw a spell.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "got-gift_of_the_wolf-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-gilman_house",
    "name": "Gilman House",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "(W)(W)(W)(W) → Transform a minion here into a Horrible Hybrids from your collection.",
    "flavorText": "",
    "artist": "Ian Miller",
    "imagePath": "got-gilman_house-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-gloam_toads",
    "name": "Gloam Toads",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 6,
    "life": 6,
    "keywords": [
      "Immobile"
    ],
    "effectText": "Immobile\n\nTap → Drags in target adjacent unit and may strike it when it arrives.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "got-gloam_toads-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-gnarled_wendigo",
    "name": "Gnarled Wendigo",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 5,
    "life": 5,
    "keywords": [],
    "effectText": "This costs (2) less to cast for each minion you sacrifice at its summoning location.",
    "flavorText": "Ancient scrolls name it the Wood that Walks—and warn its roots crave more than water.",
    "artist": "Dan Seagrave",
    "imagePath": "got-gnarled_wendigo-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-goat_for_azazel",
    "name": "Goat For Azazel",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 0,
    "life": 0,
    "keywords": [],
    "effectText": "Takes damage for other allies.",
    "flavorText": "Upon its back lay all the words its masters dared not speak.",
    "artist": "Pedro Ferreira",
    "imagePath": "got-goat_for_azazel-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-golden_dawn",
    "name": "Golden Dawn",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 4,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Charge"
    ],
    "effectText": "Deal out your top spells, one to each site in your back row. Summon any that are minions and put the rest at the bottom of your spellbook. If you're on Death's Door, they gain Charge.",
    "flavorText": "",
    "artist": "Lindsey Crummett",
    "imagePath": "got-golden_dawn-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-golgor",
    "name": "Golgor",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 3,
      "water": 0
    },
    "power": 7,
    "life": 7,
    "keywords": [],
    "effectText": "Once on your turn, you may banish minions with 2 or less power at target adjacent location.",
    "flavorText": "",
    "artist": "Juan Machuca",
    "imagePath": "got-golgor-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-gossamer_ghost",
    "name": "Gossamer Ghost",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Stealth"
    ],
    "effectText": "Stealth\n\nCan't be immobilized or disabled.",
    "flavorText": "\n\nThe candle trembled—for a heartbeat, he wasn't alone.",
    "artist": "Elvira Shakirova",
    "imagePath": "got-gossamer_ghost-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-granary_rats",
    "name": "Granary Rats",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "This site doesn't provide threshold.",
    "flavorText": "I fear we won't survive the winter... Please, adventurer, enter my granary and slay ten rats.",
    "artist": "Elwira Pawlikowska",
    "imagePath": "got-granary_rats-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-grasping_ground",
    "name": "Grasping Ground",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Each burrowed ally may drag down a target minion or artifact above them.",
    "flavorText": "",
    "artist": "Brom",
    "imagePath": "got-grasping_ground-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-gravedigger",
    "name": "Gravedigger",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Burrow target adjacent Undead.",
    "flavorText": "I'm going to need a bigger shovel.",
    "artist": "Pedro Ferreira",
    "imagePath": "got-gravedigger-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-greater_blood_demon",
    "name": "Greater Blood Demon",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 6,
    "life": 6,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → You lose 4 life.",
    "flavorText": "\"Don’t turn away.\nKeep your gaze on the bandaged place.\nThat’s where new strength is found.\" - Rumi",
    "artist": "Scott Kirschner",
    "imagePath": "got-greater_blood_demon-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-grief_larvae",
    "name": "Grief Larvae",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Burrowing"
    ],
    "effectText": "Burrowing\n\nAt the end of your turn, deal 1 damage to this site.",
    "flavorText": "",
    "artist": "Juan Machuca",
    "imagePath": "got-grief_larvae-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-grigori_rasputin",
    "name": "Grigori Rasputin",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Spellcaster\n\nBanish an Evil ally → Cast Rasputin from your cemetery to there. He adds their power and abilities to his own until he dies again.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "got-grigori_rasputin-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-guardian_angel",
    "name": "Guardian Angel",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nGenesis → Fly to a weaker allied minion to Ward it.",
    "flavorText": "",
    "artist": "Heidi Taillefer",
    "imagePath": "got-guardian_angel-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-hand_of_glory",
    "name": "Hand Of Glory",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Bearer has +1 power and gains Fire Spellcaster.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "got-hand_of_glory-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-harbinger",
    "name": "Harbinger",
    "set": "Gothic",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-harbinger-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-harpyon_urge",
    "name": "Harpyon Urge",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "An ally flies to target weaker minion and strikes it upon arrival.",
    "flavorText": "",
    "artist": "David O'Connor",
    "imagePath": "got-harpyon_urge-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-harvest_festival",
    "name": "Harvest Festival",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Earth",
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Summon Eltham and Serava Townsfolk from your collection to an allied site.",
    "flavorText": "The grain is gathered, the fruit is pressed—let the fiddles frolic and the heart grow light once more!",
    "artist": "AronjaArt",
    "imagePath": "got-harvest_festival-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-hauntless_head",
    "name": "Hauntless Head",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Voidwalk",
      "Spellcaster"
    ],
    "effectText": "Spellcaster, Voidwalk\n\nAt the start of your turn, Hauntless Head teleports to the top of a random site or void.",
    "flavorText": "Jacet sine trunco nomen.",
    "artist": "Jussi Pylkäs",
    "imagePath": "got-hauntless_head-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-haystack",
    "name": "Haystack",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Opponent’s deck searches are limited to the top three cards.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "got-haystack-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-hearkening_kraken",
    "name": "Hearkening Kraken",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 5,
    "life": 5,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge\n\nMust be cast submerged, and costs (1) less for each enemy in its body of water.",
    "flavorText": "",
    "artist": "Brom",
    "imagePath": "got-hearkening_kraken-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-heirloom_lost",
    "name": "Heirloom Lost",
    "set": "Gothic",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-heirloom_lost-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-hellfire",
    "name": "Hellfire",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Destroy everything below sites, then deal 2 damage to each minion above.",
    "flavorText": "",
    "artist": "AronjaArt",
    "imagePath": "got-hellfire-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-hellhounds",
    "name": "Hellhounds",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "",
    "flavorText": "A curse shall light upon the limbs of men. Blood and destruction shall be so in use that mothers shall but smile when they behold their infants quartered with the hands of war, all pity choked with custom of fell deeds. — Shakespeare",
    "artist": "Mattias Frisk",
    "imagePath": "got-hellhounds-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-hellmouth",
    "name": "Hellmouth",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Burrowing"
    ],
    "effectText": "Evil minions nearby or being summoned nearby have Burrowing.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "got-hellmouth-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-hellstar",
    "name": "Hellstar",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 3,
      "water": 0
    },
    "power": 7,
    "life": 7,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne, can't attack or defend. At the start of your turn, each other unit at affected locations takes damage:\n\n$3 5 3\n5 7 5\n3 5 3$",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "got-hellstar-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-hemogoblet",
    "name": "Hemogoblet",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Once on your turn, you may fill the goblet by sacrificing a minion here, or empty it if it's full. When you empty the goblet, you gain mana or heal life equal to that minion's power.",
    "flavorText": "",
    "artist": "Emil Idzikowski",
    "imagePath": "got-hemogoblet-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-hemogoblin",
    "name": "Hemogoblin",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Deathrite",
      "Genesis"
    ],
    "effectText": "Genesis & Deathrite → Set players' maximum life to their current life.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "got-hemogoblin-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-hemogolem",
    "name": "Hemogolem",
    "set": "Gothic",
    "type": "Minion",
    "elements": [],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {},
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "Damage dealt to units by Hemogolem's strikes heals you, but damage it takes is dealt to you as well.",
    "flavorText": "If you prick us, do I not bleed?",
    "artist": "Anson Maddocks",
    "imagePath": "got-hemogolem-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-heretics_of_seth",
    "name": "Heretics Of Seth",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Steal a nearby Ward.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "got-heretics_of_seth-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-hillside_chapel",
    "name": "Hillside Chapel",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → You may pay (1) to tap and Ward a nearby allied minion.",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "got-hillside_chapel-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-hollow_one",
    "name": "Hollow One",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "Disabled until a Mortal or Beast dies nearby.",
    "flavorText": "A pitiful shadow of an Exceptional Undead",
    "artist": "Michal Nagypál",
    "imagePath": "got-hollow_one-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-holy_nova",
    "name": "Holy Nova",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Deal damage to each enemy at affected locations. You may break an allied Ward to center this spell on that location instead of the caster's.\n\n$1 2 1\n2 3 2\n1 2 1$",
    "flavorText": "The faithful called it a hymn—the rest, a reckoning.",
    "artist": "Alan Pollack",
    "imagePath": "got-holy_nova-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-holy_warrior",
    "name": "Holy Warrior",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Ward",
    "flavorText": "Duty begins with devotion.",
    "artist": "Elwira Pawlikowska",
    "imagePath": "got-holy_warrior-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-holy_water",
    "name": "Holy Water",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Bearer has \"Tap, Sacrifice this Holy Water → Throw a projectile. If it hits a minion, banish it if Evil, Ward it if not.\"",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "got-holy_water-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-homecoming",
    "name": "Homecoming",
    "set": "Gothic",
    "type": "Aura",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Minions here have \"Tap → Gain (1).\"",
    "flavorText": "What are you still fighting for? The peace you seek lies behind you.",
    "artist": "Pedro Ferreira",
    "imagePath": "got-homecoming-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-horns_of_behemoth",
    "name": "Horns Of Behemoth",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 6,
    "life": 6,
    "keywords": [],
    "effectText": "(F)(F)(F)(F)(F)(F) — May transform into a Demon. Place Rubble underneath.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "got-horns_of_behemoth-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-horrible_hybrids",
    "name": "Horrible Hybrids",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "",
    "flavorText": "The sight of such endless avenues of fishy-eyed vacancy starts up vestigial fears and aversions that not even the stoutest philosophy can disperse. — H.P. Lovecraft",
    "artist": "Ian Miller",
    "imagePath": "got-horrible_hybrids-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-hotwheel",
    "name": "Hotwheel",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Rolls forward two steps, striking another unit at each location it enters.",
    "flavorText": "It just ain't the same without the flame! Yeeee-hawww!",
    "artist": "Pedro Ferreira",
    "imagePath": "got-hotwheel-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-howl_from_beyond",
    "name": "Howl From Beyond",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [
      "Voidwalk"
    ],
    "effectText": "Deal out your top spells, one to each void in the outer columns. Draw any minions with Voidwalk or Monsters from among them and banish the rest.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "got-howl_from_beyond-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-hyperparasite",
    "name": "Hyperparasite",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "Can pick up a single minion, disabling them, but can't move while carrying them.",
    "flavorText": "It feeds forever—on thought, on pulse, on fear.",
    "artist": "Zohn Dee",
    "imagePath": "got-hyperparasite-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-i_am_colossus",
    "name": "I Am Colossus",
    "set": "Gothic",
    "type": "Minion",
    "elements": [],
    "rarity": "Unique",
    "cost": 10,
    "threshold": {},
    "power": 10,
    "life": 10,
    "keywords": [],
    "effectText": "You may banish minions under your control, or from your hand or cemetery, to help cast the Colossus. It costs (1) less to cast for each.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "got-i_am_colossus-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-ice_shards",
    "name": "Ice Shards",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Shoot three projectiles, one at a time. Each deals 1 damage but melts before the third step.",
    "flavorText": "Flesh, frost, and folly all meet the same end.",
    "artist": "Brian Smith",
    "imagePath": "got-ice_shards-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-ignited",
    "name": "Ignited",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Charge"
    ],
    "effectText": "Charge\n\nDies at the end of your turn.",
    "flavorText": "Necromancy's spark meets pyromancy's spite.",
    "artist": "Drew Tucker",
    "imagePath": "got-ignited-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-imposter",
    "name": "Imposter",
    "set": "Gothic",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-imposter-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-infusion_factory",
    "name": "Infusion Factory",
    "set": "Gothic",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-infusion_factory-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-innsmouth_dock",
    "name": "Innsmouth Dock",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Once on your turn, you may lure an adjacent minion to step here.",
    "flavorText": "",
    "artist": "Ian Miller",
    "imagePath": "got-innsmouth_dock-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-instigator_imp",
    "name": "Instigator Imp",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Make two enemy minions at target nearby location fight each other.",
    "flavorText": "Wherever he grins, someone bleeds.",
    "artist": "Jeff A. Menges",
    "imagePath": "got-instigator_imp-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-interrogator",
    "name": "Interrogator",
    "set": "Gothic",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-interrogator-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-into_the_abyss",
    "name": "Into The Abyss",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge target minion, or pull it into a void it's adjacent to.",
    "flavorText": "Dig deep enough, and you'll either find sumpin'—or be sumpin'.",
    "artist": "Zohn Dee",
    "imagePath": "got-into_the_abyss-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-intrepid_hero",
    "name": "Intrepid Hero",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Lethal"
    ],
    "effectText": "Lethal to Evil.",
    "flavorText": "No banner but blood, no ally but resolve.",
    "artist": "Brom",
    "imagePath": "got-intrepid_hero-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-invigorate",
    "name": "Invigorate",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Earth",
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "An ally gains +3 power this turn and you heal 3.",
    "flavorText": "",
    "artist": "AronjaArt",
    "imagePath": "got-invigorate-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-iron_maiden",
    "name": "Iron Maiden",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Whenever a nearby Avatar draws a card, they lose life equal to the number of cards they've drawn this turn.",
    "flavorText": "",
    "artist": "Mattias Frisk",
    "imagePath": "got-iron_maiden-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-ironclad",
    "name": "Ironclad",
    "set": "Gothic",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-ironclad-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-jack_the_ripper",
    "name": "Jack The Ripper",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Stealth"
    ],
    "effectText": "Stealth\n\nMay be cast to any Mortal, silencing then killing them, without breaking Stealth.",
    "flavorText": "",
    "artist": "Heidi Taillefer",
    "imagePath": "got-jack_the_ripper-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-key_to_the_city",
    "name": "Key To The City",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Provides (1).\n\nBearer ignores site abilities.",
    "flavorText": "Locks are for the uninvited.",
    "artist": "Melissa A. Benson",
    "imagePath": "got-key_to_the_city-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-khamaseen_mummy",
    "name": "Khamaseen Mummy",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Burrowing",
      "Genesis"
    ],
    "effectText": "Burrowing\n \nWhenever this unburrows, you may trigger the Genesis of a nearby Desert.",
    "flavorText": "",
    "artist": "Brom",
    "imagePath": "got-khamaseen_mummy-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-kiss_of_death",
    "name": "Kiss Of Death",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "May be cast by Spirits and Undead.\n\nKill target minion here.",
    "flavorText": "Her lips promised a peace he could no longer refuse.",
    "artist": "Santiago Caruso",
    "imagePath": "got-kiss_of_death-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-kiss_of_judas",
    "name": "Kiss Of Judas",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 3
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "This turn, attacks against target Avatar can't be defended and you draw a card whenever they are attacked.",
    "flavorText": "",
    "artist": "Scott Kirschner",
    "imagePath": "got-kiss_of_judas-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-kissers_of_wounds",
    "name": "Kissers Of Wounds",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Ward a wounded minion nearby, or you heal 2.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "got-kissers_of_wounds-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-kor_crematory",
    "name": "Kor Crematory",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "(F)(F)(F)(F) — If a card would be placed in a cemetery, banish it instead.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "got-kor_crematory-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-koscheis_egg",
    "name": "Koscheis Egg",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 7,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Avatar bearer hides its soul in Koschei's Egg, becoming immune to death blows. After three of your turns, or if the Egg leaves the realm, you lose.",
    "flavorText": "",
    "artist": "Mattias Frisk",
    "imagePath": "got-koscheis_egg-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-lacuna_entity",
    "name": "Lacuna Entity",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 3
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Submerge",
      "Voidwalk"
    ],
    "effectText": "Submerge, Voidwalk\n\nGenesis → Drag target weaker minion from an adjacent site to here, ignoring regions.",
    "flavorText": "",
    "artist": "Zohn Dee",
    "imagePath": "got-lacuna_entity-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-landmass",
    "name": "Landmass",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Draw a site. You may play a land site.",
    "flavorText": "“Let the dry land appear,” and it was so. — Genesis 1:9",
    "artist": "Brian Smith",
    "imagePath": "got-landmass-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-lash",
    "name": "Lash",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Deal 1 damage to target nearby minion and untap it.",
    "flavorText": "",
    "artist": "Juan Machuca",
    "imagePath": "got-lash-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-leadworks",
    "name": "Leadworks",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Until your next turn, sites are silenced while nearby.",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "got-leadworks-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-legion_of_gall",
    "name": "Legion Of Gall",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 3,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 5,
    "life": 5,
    "keywords": [
      "Airborne",
      "Genesis"
    ],
    "effectText": "Airborne\n \nGenesis → Look at a collection and banish three cards from it.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "got-legion_of_gall-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-lesser_blood_demon",
    "name": "Lesser Blood Demon",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Lose 2 life.",
    "flavorText": "A river for kings, a drop for knaves—yet always blood for the bargain.",
    "artist": "Brian Smith",
    "imagePath": "got-lesser_blood_demon-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-lifewish",
    "name": "Lifewish",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Earth",
      "Water"
    ],
    "rarity": "Unique",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Fully heal each Avatar.",
    "flavorText": "Life did not spare them. It took them wholly.",
    "artist": "Elvira Shakirova",
    "imagePath": "got-lifewish-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-lilith",
    "name": "Lilith",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 3
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "At the end of your turn, reveal opponent’s top spell. If it’s a minion, summon it here. Otherwise, put it at the bottom of the deck.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "got-lilith-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-locusts_of_illyria",
    "name": "Locusts Of Illyria",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 3,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nAt the end of your turn, if no new Locusts have been summoned this turn, summon a tapped copy of this nearby.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "got-locusts_of_illyria-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-lord_of_destruction",
    "name": "Lord Of Destruction",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 6,
    "life": 6,
    "keywords": [],
    "effectText": "Destroys sites it strikes and other minions there.",
    "flavorText": "",
    "artist": "Doug Kovacs",
    "imagePath": "got-lord_of_destruction-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-lord_of_fear",
    "name": "Lord Of Fear",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 6,
    "life": 6,
    "keywords": [],
    "effectText": "Enemies can't defend alone.",
    "flavorText": "No sword fits a trembling hand.",
    "artist": "Emil Idzikowski",
    "imagePath": "got-lord_of_fear-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-lord_of_greed",
    "name": "Lord Of Greed",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 6,
    "life": 6,
    "keywords": [],
    "effectText": "Can't drop artifacts.\n\nAt the end of your turn, Lord of Greed snatches an artifact from elsewhere into his hands.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "got-lord_of_greed-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-lord_of_lies",
    "name": "Lord Of Lies",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 6,
    "life": 6,
    "keywords": [],
    "effectText": "Once on your turn, you may have two target units at a nearby location fight.",
    "flavorText": "",
    "artist": "Gadu Duaso",
    "imagePath": "got-lord_of_lies-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-lucid_dreamers",
    "name": "Lucid Dreamers",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Voidwalk"
    ],
    "effectText": "Voidwalk\n\nYou may cast minions to this void, granting them Voidwalk until they're no longer in the void.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "got-lucid_dreamers-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-lure",
    "name": "Lure",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "An ally tempts an enemy minion at a nearby site into taking a step closer.",
    "flavorText": "",
    "artist": "Heidi Taillefer",
    "imagePath": "got-lure-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-magician",
    "name": "Magician",
    "set": "Gothic",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-magician-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-maiden_mother_crone",
    "name": "Maiden Mother Crone",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 3
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Deathrite",
      "Genesis"
    ],
    "effectText": "Genesis → Heal 3.\n \n(3) → Draw a spell.\n \nDeathrite → Opponent loses 3 life.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "got-maiden_mother_crone-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-makeshift_barricade",
    "name": "Makeshift Barricade",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "If one or more allies here would take damage, prevent it. If the damage was 3 or more, the barricade breaks.",
    "flavorText": "Fear and fury and—furniture.",
    "artist": "Doug Kovacs",
    "imagePath": "got-makeshift_barricade-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-malakhim",
    "name": "Malakhim",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 3,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne, Ward\n\nAt the end of your turn, untap Malakhim.",
    "flavorText": "",
    "artist": "Francesca Baerald",
    "imagePath": "got-malakhim-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-mandrake_jars",
    "name": "Mandrake Jars",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Bearer has +1 power and gains Earth Spellcaster.",
    "flavorText": "",
    "artist": "Francesca Baerald",
    "imagePath": "got-mandrake_jars-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-martyrs_of_tomorrow",
    "name": "Martyrs Of Tomorrow",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Deathrite"
    ],
    "effectText": "Deathrite → Ward an allied minion.",
    "flavorText": "There hung a halo, not born of life, but of its willing surrender and noble sacrifice.",
    "artist": "Pedro Ferreira",
    "imagePath": "got-martyrs_of_tomorrow-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-master_necromancer",
    "name": "Master Necromancer",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Spellcaster\n\nGenesis → Summon a Skeleton token to each other adjacent site.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "got-master_necromancer-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-mayor_of_milborne",
    "name": "Mayor Of Milborne",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Other nearby Mortals have +1 power.",
    "flavorText": "Vote Reginald II for mayor and keep your family safe!",
    "artist": "Michal Nagypál",
    "imagePath": "got-mayor_of_milborne-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-mazuj_ifrit",
    "name": "Mazuj Ifrit",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n \nAt the start of your turn, you lose 2 life.",
    "flavorText": "",
    "artist": "Jeff Easley",
    "imagePath": "got-mazuj_ifrit-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-meat_hook",
    "name": "Meat Hook",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Bearer has \"Tap → Shoot a projectile. If a unit is hit, drag it here, and bearer may fight it when it arrives.\"",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "got-meat_hook-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-megalurker",
    "name": "Megalurker",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 3,
      "fire": 0,
      "water": 0
    },
    "power": 6,
    "life": 6,
    "keywords": [
      "Burrowing"
    ],
    "effectText": "Burrowing\n\nGenesis → If an ally died last turn, Megalurker may drag the killer from an adjacent site to here.",
    "flavorText": "",
    "artist": "Mattias Frisk",
    "imagePath": "got-megalurker-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-mephistopheles",
    "name": "Mephistopheles",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 6,
    "threshold": {
      "air": 3,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "Must be cast to your Avatar's location, taking their life and replacing them as your Avatar.\n\nOnce on your turn, you may summon an Evil minion from your hand to an adjacent site.",
    "flavorText": "",
    "artist": "Michal Nagypál",
    "imagePath": "got-mephistopheles-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-mesmer_demon",
    "name": "Mesmer Demon",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Tap target adjacent enemy minion and make it step closer.",
    "flavorText": "",
    "artist": "Doug Kovacs",
    "imagePath": "got-mesmer_demon-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-mimic",
    "name": "Mimic",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "As you summon this Mimic, you may transform a carriable artifact into it, under your control.",
    "flavorText": "Turns out, the real monster was the loot we found along the way.",
    "artist": "Alan Pollack",
    "imagePath": "got-mimic-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-mismanaged_mortuary",
    "name": "Mismanaged Mortuary",
    "set": "Gothic",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-mismanaged_mortuary-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-molten_maar",
    "name": "Molten Maar",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "(F)(F) — Genesis → You may cast a Hellhounds from your collection to this site.",
    "flavorText": "",
    "artist": "Pedro Ferreira",
    "imagePath": "got-molten_maar-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-monks_of_kobalsa",
    "name": "Monks Of Kobalsa",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "Can't be modified, except by Wards.",
    "flavorText": "Alteration admits imperfection in the maker's design.",
    "artist": "Jussi Pylkäs",
    "imagePath": "got-monks_of_kobalsa-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-monstermorphosis",
    "name": "Monstermorphosis",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Disable target nearby minion until your next turn. At the start of that turn, you may transform it into a Monster from your hand or a Horrible Hybrids from your collection.",
    "flavorText": "",
    "artist": "Brom",
    "imagePath": "got-monstermorphosis-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-mortal_soil",
    "name": "Mortal Soil",
    "set": "Gothic",
    "type": "Aura",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Whenever an affected site takes damage, banish a minion from your cemetery to prevent it. If you can't, dispel this.",
    "flavorText": "",
    "artist": "Michal Nagypál",
    "imagePath": "got-mortal_soil-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-moss_troll",
    "name": "Moss Troll",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Stealth"
    ],
    "effectText": "Stealth\n\nLoses Stealth if it moves.",
    "flavorText": "Moss grows fat on a troll in stone.",
    "artist": "Dan Seagrave",
    "imagePath": "got-moss_troll-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-mount_ussar_sanctuary",
    "name": "Mount Ussar Sanctuary",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "(E)(E)(E)(E) — When your Avatar arrives at Death's Door, they flee here and gain Ward.",
    "flavorText": "",
    "artist": "Marta Molina",
    "imagePath": "got-mount_ussar_sanctuary-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-mountain_peaks",
    "name": "Mountain Peaks",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "Capricious winds had sculpted the crag, arched and spired like a grand cathedral.",
    "artist": "Brian Smith",
    "imagePath": "got-mountain_peaks-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-mover_of_mountains",
    "name": "Mover Of Mountains",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Spellcaster\n\nOnce on your turn, you may swap two nearby empty sites.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "got-mover_of_mountains-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-muddy_pigs",
    "name": "Muddy Pigs",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Deathrite"
    ],
    "effectText": "Deathrite → You heal 3.",
    "flavorText": "Well-marbled contentment.",
    "artist": "Alan Pollack",
    "imagePath": "got-muddy_pigs-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-mudslide",
    "name": "Mudslide",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Slide all units at land sites in this column one step left or right.",
    "flavorText": "",
    "artist": "Juan Machuca",
    "imagePath": "got-mudslide-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-murder_of_crows",
    "name": "Murder Of Crows",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Deal 1 damage to all enemy minions on the surface. You may cast this spell from your cemetery, banishing it afterward.",
    "flavorText": "",
    "artist": "Michal Nagypál",
    "imagePath": "got-murder_of_crows-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-myrrhs_trophy_room",
    "name": "Myrrh's Trophy Room",
    "set": "Gothic",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-myrrhs_trophy_room-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-nadir_seed",
    "name": "Nadir Seed",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "At the end of their turn, this site's controller loses life equal to their unspent mana.",
    "flavorText": "Spend your spark—or it will.",
    "artist": "Heidi Taillefer",
    "imagePath": "got-nadir_seed-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-necromancer",
    "name": "Necromancer",
    "set": "Gothic",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-necromancer-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-necronomiconcert",
    "name": "Necronomiconcert",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Each differently named Undead and Instrument nearby joins the band to play. Draw a card for each.",
    "flavorText": "Oh, everyone's just dying to attend.",
    "artist": "Juan Machuca",
    "imagePath": "got-necronomiconcert-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-necropotence",
    "name": "Necropotence",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Give a nearby allied Undead +3 power this turn.",
    "flavorText": "",
    "artist": "Zohn Dee",
    "imagePath": "got-necropotence-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-nightwatchmen",
    "name": "Nightwatchmen",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Ward this site.",
    "flavorText": "Poorly paid, rarely thanked, profoundly necessary.",
    "artist": "Alan Pollack",
    "imagePath": "got-nightwatchmen-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-no_mans_land",
    "name": "No Mans Land",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Players can't summon minions to this site or to the one directly in front of it.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "got-no_mans_land-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-noisome_twosome",
    "name": "Noisome Twosome",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Deathrite"
    ],
    "effectText": "Deathrite → Summon a Skeleton token here.",
    "flavorText": "They put the rank in rank-and-file.",
    "artist": "Jussi Pylkäs",
    "imagePath": "got-noisome_twosome-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-nommo_monitor",
    "name": "Nommo Monitor",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Submerge",
      "Voidwalk"
    ],
    "effectText": "Submerge, Voidwalk",
    "flavorText": "",
    "artist": "David O'Connor",
    "imagePath": "got-nommo_monitor-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-nosferatu",
    "name": "Nosferatu",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 6,
    "threshold": {
      "air": 3,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Airborne",
      "Burrowing"
    ],
    "effectText": "Airborne, Burrowing\n\nDeathrite → Resummon Nosferatu beneath your starting square. If he dies again this turn, banish him instead.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "got-nosferatu-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-novice_necromancer",
    "name": "Novice Necromancer",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Spellcaster\n\nGenesis → Summon a Skeleton token here.",
    "flavorText": "An unrefined craft, practiced on uncritical subjects.",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "got-novice_necromancer-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-noxious_corpse",
    "name": "Noxious Corpse",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Lethal"
    ],
    "effectText": "Lethal",
    "flavorText": "First the fever, then the feast.",
    "artist": "Drew Tucker",
    "imagePath": "got-noxious_corpse-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-old_mortimers_den",
    "name": "Old Mortimer's Den",
    "set": "Gothic",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-old_mortimers_den-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-one_shot_wizard",
    "name": "One Shot Wizard",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Spellcaster",
      "Genesis"
    ],
    "effectText": "Genesis → Shoot a projectile that deals 1 damage, or gain Spellcaster this turn.",
    "flavorText": "A cautionary tale in every lecture thereafter.",
    "artist": "Pedro Ferreira",
    "imagePath": "got-one_shot_wizard-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-onslaught",
    "name": "Onslaught",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Earth",
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Charge"
    ],
    "effectText": "This turn, allies gain +1 power, Charge, and can't be immobilized, silenced, or disabled.",
    "flavorText": "Momentum makes a fine commander.",
    "artist": "Juan Machuca",
    "imagePath": "got-onslaught-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-open_grave",
    "name": "Open Grave",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → You may pay (1) to summon a Skeleton token here.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "got-open_grave-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-open_mausoleum",
    "name": "Open Mausoleum",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → You may pay (1) to summon a Skeleton token here.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "got-open_mausoleum-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-ophanim",
    "name": "Ophanim",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 3,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Airborne",
      "Voidwalk",
      "Movement"
    ],
    "effectText": "Airborne, Movement +1, Voidwalk, Ward",
    "flavorText": "Beyond the veil, they burn and rise—\nEternal watchmen of the skies.",
    "artist": "Brian Smith",
    "imagePath": "got-ophanim-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-order_of_the_pale_worm",
    "name": "Order Of The Pale Worm",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Nearby sites and units lose Ward",
    "flavorText": "They crawl through bones, and speak in dust—\nNo god to name, no voice to trust.",
    "artist": "Brian Smith",
    "imagePath": "got-order_of_the_pale_worm-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-order_of_the_sacred_oak",
    "name": "Order Of The Sacred Oak",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Ward\n\nYour opponent can't destroy nearby sites.",
    "flavorText": "While we draw breath this Heartwood stands. Thus an oath is sworn.",
    "artist": "Jeff A. Menges",
    "imagePath": "got-order_of_the_sacred_oak-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-order_of_the_white_wing",
    "name": "Order Of The White Wing",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Ward\n\nIf a minion would be summoned nearby and it wasn't cast from hand, banish it.",
    "flavorText": "The younger the faith, the fiercer the devotion.",
    "artist": "Elvira Shakirova",
    "imagePath": "got-order_of_the_white_wing-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-orm_infestor",
    "name": "Orm Infestor",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Burrowing",
      "Submerge"
    ],
    "effectText": "Burrowing, Submerge\n\nAt the end of your turn, deal 1 damage to this site and you heal 1.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "got-orm_infestor-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-orpheus_crossing",
    "name": "Orpheus Crossing",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → You're on Death's Door until your next turn. Summon a dead minion here.",
    "flavorText": "",
    "artist": "Adam Burke",
    "imagePath": "got-orpheus_crossing-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-overflow",
    "name": "Overflow",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Draw a site. You may play a water site.",
    "flavorText": "A generous heart cannot help but spill.",
    "artist": "Brian Smith",
    "imagePath": "got-overflow-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-paladins_of_bazia",
    "name": "Paladins Of Bazia",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 3,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Spellcaster, Ward",
    "flavorText": "At the breaking of light, they emerge—\nnot to greet the day, but to judge it worthy.",
    "artist": "Marta Molina",
    "imagePath": "got-paladins_of_bazia-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-panpipes_of_pnom",
    "name": "Panpipes Of Pnom",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Damage caused by nearby units is increased to 2.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "got-panpipes_of_pnom-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-peace_offering",
    "name": "Peace Offering",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 0,
    "life": 0,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nWhenever this enters another player's site, you may give them the Peace Offering. If you do, their units can't attack you on their next turn.",
    "flavorText": "",
    "artist": "Heidi Taillefer",
    "imagePath": "got-peace_offering-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-peacemaker_arbalest",
    "name": "Peacemaker Arbalest",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Ranged"
    ],
    "effectText": "Bearer has Ranged and its strikes deal 1 more damage to units for each of the following they are: Evil, artifact bearers, spellcasters, voidwalkers, submergers, burrowers, and Frogs.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "got-peacemaker_arbalest-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-peculiar_port",
    "name": "Peculiar Port",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "(W)(W) — Genesis → You may cast a Horrible Hybrids from your collection to this site.",
    "flavorText": "",
    "artist": "Juan Machuca",
    "imagePath": "got-peculiar_port-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-penitent_knight",
    "name": "Penitent Knight",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "",
    "flavorText": "The other was a softer voice\nAs soft as honey-dew:\nQuoth he, 'The man hath penance done,\nAnd penance more will do.'\n— Coleridge",
    "artist": "AronjaArt",
    "imagePath": "got-penitent_knight-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-persecutor",
    "name": "Persecutor",
    "set": "Gothic",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-persecutor-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-pied_piper_of_hameln",
    "name": "Pied Piper Of Hameln",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "You control all minions with 1 or less power.",
    "flavorText": "For silver's weight cleared croft and glen\nthen charmed the sons of men from men.",
    "artist": "Drew Tucker",
    "imagePath": "got-pied_piper_of_hameln-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-pile_of_skulls",
    "name": "Pile Of Skulls",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 5,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Once on your turn, you may banish a card from a cemetery to summon a Skeleton token here.",
    "flavorText": "",
    "artist": "Mattias Frisk",
    "imagePath": "got-pile_of_skulls-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-pilgrims_shrine",
    "name": "Pilgrims Shrine",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Ward. When a minion leaves here, transfer this site's Ward to it.",
    "flavorText": "",
    "artist": "Truitt Parrish",
    "imagePath": "got-pilgrims_shrine-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-pith_imp",
    "name": "Pith Imp",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nGenesis → Steals a random spell from your opponent's hand until it leaves the realm.",
    "flavorText": "He's not much of a reader, but he adores the illustrations.",
    "artist": "Jeff A. Menges",
    "imagePath": "got-pith_imp-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-plague_pits",
    "name": "Plague Pits",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → If there are three or more dead minions, banish all cemeteries.",
    "flavorText": "",
    "artist": "Scott Kirschner",
    "imagePath": "got-plague_pits-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-plague_rat",
    "name": "Plague Rat",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Lethal"
    ],
    "effectText": "Lethal",
    "flavorText": "My daughter has fallen ill... Please, adventurer, search the town and slay ten rats.",
    "artist": "Brom",
    "imagePath": "got-plague_rat-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-plate_of_the_whale",
    "name": "Plate Of The Whale",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Bearer is immobile if it has less than 3 power. If it has more than 3 power, prevent the first instance of damage it would take each turn.",
    "flavorText": "",
    "artist": "Santiago Caruso",
    "imagePath": "got-plate_of_the_whale-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-powerwish",
    "name": "Powerwish",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Earth",
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Each Avatar sacrifices all of their minions, permanently gaining +1 power for each.",
    "flavorText": "Victory requires but one—the victor.",
    "artist": "Elvira Shakirova",
    "imagePath": "got-powerwish-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-profane_revenant",
    "name": "Profane Revenant",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Has 0 power unless adjacent to an Evil ally.",
    "flavorText": "It loomed upon the ashen hill, a dark sentinel with eyes of fire—unjudging, yet complicit, drawn not to purity but to the weight of man's fall.",
    "artist": "Brian Smith",
    "imagePath": "got-profane_revenant-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-purgatory",
    "name": "Purgatory",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Whenever an Evil minion dies nearby, its controller loses 1 life.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "got-purgatory-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-putrid_presence",
    "name": "Putrid Presence",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Burrowing",
      "Submerge"
    ],
    "effectText": "Submerge, Burrowing\n\nThe subsurface of nearby sites can be attacked.",
    "flavorText": "",
    "artist": "Emil Idzikowski",
    "imagePath": "got-putrid_presence-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-raise_militia",
    "name": "Raise Militia",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Summon a Skeleton token to each allied site that borders an enemy site.",
    "flavorText": "",
    "artist": "AronjaArt",
    "imagePath": "got-raise_militia-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-rat_king",
    "name": "Rat King",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Deathrite",
      "Genesis"
    ],
    "effectText": "Genesis & Deathrite → Search your top six spells. You may summon an Ordinary rat from among them to each other adjacent site. Put the rest at the bottom of your spellbook.",
    "flavorText": "",
    "artist": "Zohn Dee",
    "imagePath": "got-rat_king-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-ravenous_werewolf",
    "name": "Ravenous Werewolf",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Charge",
      "Movement"
    ],
    "effectText": "Charge, Movement +1",
    "flavorText": "The man starves while the monster feasts.",
    "artist": "Brom",
    "imagePath": "got-ravenous_werewolf-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-raze",
    "name": "Raze",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "An ally destroys its site and all artifacts there.",
    "flavorText": "",
    "artist": "AronjaArt",
    "imagePath": "got-raze-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-realm_eater",
    "name": "Realm Eater",
    "set": "Gothic",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-realm_eater-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-red_rock_of_ravannis",
    "name": "Red Rock Of Ravannis",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Artifacts can't be carried here.\n\nAt the end of each turn, pull each artifact one step towards this site, along with its bearer.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "got-red_rock_of_ravannis-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-redmane_hyena",
    "name": "Redmane Hyena",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Banish up to three cards from cemeteries. If any are Demons, this becomes one and gains +2 power permanently.",
    "flavorText": "What the lion forsakes, the hyena perfects.",
    "artist": "Jussi Pylkäs",
    "imagePath": "got-redmane_hyena-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-regurgitator",
    "name": "Regurgitator",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "At the end of your turn, Regurgitator must either fill its empty belly by banishing a dead minion, or empty its full belly by shooting a projectile that deals damage equal to the eaten minion's power.",
    "flavorText": "",
    "artist": "Lindsey Crummett",
    "imagePath": "got-regurgitator-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-release_the_hounds",
    "name": "Release The Hounds",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Charge"
    ],
    "effectText": "Summon two Hellhounds from your collection to your Avatar's location. They gain Charge this turn.",
    "flavorText": "Cry 'Havoc!', and let slip the dogs of war. — Shakespeare",
    "artist": "Mattias Frisk",
    "imagePath": "got-release_the_hounds-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-renatus_trueblood",
    "name": "Renatus Trueblood",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nRenatus Trueblood's strike damage against units heals you.",
    "flavorText": "",
    "artist": "Brom",
    "imagePath": "got-renatus_trueblood-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-return_to_nature",
    "name": "Return To Nature",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Return up to three cards from a cemetery to the bottom of their decks. Draw a spell.",
    "flavorText": "Bone to blossom, sorrow to simple soil—the earth accepts all.",
    "artist": "Heidi Taillefer",
    "imagePath": "got-return_to_nature-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-returned_king",
    "name": "Returned King",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Other Undead have +1 power.\n\nYou control all Undead.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "got-returned_king-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-revered_revenant",
    "name": "Revered Revenant",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Has 0 power unless adjacent to an allied Ward.",
    "flavorText": "What power death takes, divine purpose returns.",
    "artist": "Brian Smith",
    "imagePath": "got-revered_revenant-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-river_of_blood",
    "name": "River Of Blood",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "All healing is halved, rounded down.",
    "flavorText": "",
    "artist": "AronjaArt",
    "imagePath": "got-river_of_blood-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-river_rapids",
    "name": "River Rapids",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Once on your turn, you may push a minion on connected Rivers one step.",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "got-river_rapids-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-road_to_perdition",
    "name": "Road To Perdition",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Target nearby Evil gains or loses 1 power this turn.",
    "flavorText": "",
    "artist": "Ian Miller",
    "imagePath": "got-road_to_perdition-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-rowdy_boys",
    "name": "Rowdy Boys",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Untaps after striking Undead.",
    "flavorText": "Johnny, Timmy, 'n Spike went down\nTo rattle bones outside of town.\nFirst skull dusted named the winner—\nThree more each and home to dinner!",
    "artist": "Doug Kovacs",
    "imagePath": "got-rowdy_boys-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-rubble",
    "name": "Rubble",
    "set": "Gothic",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-rubble-bt",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-sacred_stag",
    "name": "Sacred Stag",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "Ward\n\nDeathrite → You may Ward this site.",
    "flavorText": "The stag came softly through the trees,\nA crown of branching sky—\nScarce paused, as if such sights as these\nWere made to pass us by.",
    "artist": "Séverine Pineaux",
    "imagePath": "got-sacred_stag-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-saint_of_redemption",
    "name": "Saint Of Redemption",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Ward\n\nNo minion is Evil, but all enter the realm tapped.",
    "flavorText": "",
    "artist": "Emil Idzikowski",
    "imagePath": "got-saint_of_redemption-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-saintweald",
    "name": "Saintweald",
    "set": "Gothic",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-saintweald-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-salt_the_earth",
    "name": "Salt The Earth",
    "set": "Gothic",
    "type": "Aura",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 3,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Conjure Salt the Earth to a single site, destroying it.\n\nSites can't be played here.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "got-salt_the_earth-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-satanic_panic",
    "name": "Satanic Panic",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Kill all Demons, and one other target minion.",
    "flavorText": "Better wrong together than right alone.",
    "artist": "Juan Machuca",
    "imagePath": "got-satanic_panic-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-savior",
    "name": "Savior",
    "set": "Gothic",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-savior-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-sawbones",
    "name": "Sawbones",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Elite",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "If a nearby allied minion survives damage, fully heal it.",
    "flavorText": "",
    "artist": "Liz Danforth",
    "imagePath": "got-sawbones-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-scatter",
    "name": "Scatter",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Water",
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Push everything at target location one step, one at a time.",
    "flavorText": "",
    "artist": "Doug Kovacs",
    "imagePath": "got-scatter-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-screamer",
    "name": "Screamer",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Tap target adjacent enemy minion and make it take a step away.",
    "flavorText": "",
    "artist": "Juan Machuca",
    "imagePath": "got-screamer-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-sea_of_ash",
    "name": "Sea Of Ash",
    "set": "Gothic",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-sea_of_ash-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-sea_witch",
    "name": "Sea Witch",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Submerge",
      "Spellcaster"
    ],
    "effectText": "Spellcaster, Submerge",
    "flavorText": "The sea drapes her in kelp and coral, crowns her in conch and serpent-braid, and set its shoals to dancing at her feet.",
    "artist": "Heidi Taillefer",
    "imagePath": "got-sea_witch-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-search_party",
    "name": "Search Party",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [],
    "effectText": "Has +1 power for each Search Party in your cemetery.",
    "flavorText": "For every soul the darkness claims, two more fools take up the search.",
    "artist": "Mattias Frisk",
    "imagePath": "got-search_party-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-searing_truth",
    "name": "Searing Truth",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Target player draws and reveals two spells, then takes damage equal to the higher mana cost.",
    "flavorText": "The ecstasy of knowing is surpassed only by the agony of surviving.",
    "artist": "Elvira Shakirova",
    "imagePath": "got-searing_truth-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-second_wind",
    "name": "Second Wind",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "An allied minion takes a step.\n\nYou may cast this spell from your cemetery, banishing it afterward.",
    "flavorText": "",
    "artist": "Emil Idzikowski",
    "imagePath": "got-second_wind-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-sensu_of_the_fang",
    "name": "Sensu Of The Fang",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Bearer has +1 power and gains Air Spellcaster.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "got-sensu_of_the_fang-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-sentinel_trap",
    "name": "Sentinel Trap",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "At the end of each turn, Sentinel Trap deals 4 damage to each unit at the adjacent location it's facing, then rotates 90 degrees clockwise.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "got-sentinel_trap-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-seraphim",
    "name": "Seraphim",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 3
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne, Ward\n\nAt the end of your turn, you may transfer a nearby Ward onto a nearby minion or site.",
    "flavorText": "",
    "artist": "Emil Idzikowski",
    "imagePath": "got-seraphim-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-serava_townsfolk",
    "name": "Serava Townsfolk",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "",
    "flavorText": "Rest and remember, for here the waters carry both sorrow and hope.",
    "artist": "Quinton Hoover",
    "imagePath": "got-serava_townsfolk-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-sewer_rats",
    "name": "Sewer Rats",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "May be cast under any site.\n\nBurrowing, Submerge",
    "flavorText": "I hear them squeaking in the night... Please, adventurer, descend into the sewer and slay ten rats.",
    "artist": "Brian Smith",
    "imagePath": "got-sewer_rats-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-shackled_demon",
    "name": "Shackled Demon",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 5,
    "life": 5,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Disabled until an adjacent Spellcaster taps to release him.",
    "flavorText": "When the bonds break, the heavens will fall.",
    "artist": "Juan Machuca",
    "imagePath": "got-shackled_demon-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-shallow_grave",
    "name": "Shallow Grave",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Discard your top two spells.",
    "flavorText": "",
    "artist": "Mattias Frisk",
    "imagePath": "got-shallow_grave-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-shoggoth",
    "name": "Shoggoth",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 5,
    "life": 5,
    "keywords": [
      "Submerge",
      "Voidwalk"
    ],
    "effectText": "Submerge, Voidwalk",
    "flavorText": "Still came that eldritch, mocking cry—\"Tekeli-li! Tekeli-li!\"",
    "artist": "Francesca Baerald",
    "imagePath": "got-shoggoth-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-shrike_orchard",
    "name": "Shrike Orchard",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Whenever you summon a minion here, kill target nearby enemy Beast with 2 or less power.",
    "flavorText": "",
    "artist": "Heidi Taillefer",
    "imagePath": "got-shrike_orchard-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-silent_hills",
    "name": "Silent Hills",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Until your next turn, minions are silenced while atop nearby sites.",
    "flavorText": "",
    "artist": "AronjaArt",
    "imagePath": "got-silent_hills-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-silver_bullet",
    "name": "Silver Bullet",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Bearer has \"Tap, Sacrifice Silver Bullet -> This unit may cast an Exceptional spell from your collection.\"",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "got-silver_bullet-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-sinister_pond",
    "name": "Sinister Pond",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Mortals here may transform into Evil from hand by paying the difference in cost.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "got-sinister_pond-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-sinterfee",
    "name": "Sinterfee",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis -> Target adjacent site is silenced and provides no threshold while Sinterfee is in the realm.",
    "flavorText": "",
    "artist": "Brom",
    "imagePath": "got-sinterfee-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-sister_stefania",
    "name": "Sister Stefania",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Ward\n\nOther nearby minions are silenced.",
    "flavorText": "Poor sister, I fear her long-standing duties at the asylum have ...affected her.",
    "artist": "Jussi Pylkäs",
    "imagePath": "got-sister_stefania-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-sjaelstrom",
    "name": "Sjaelstrom",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Banish all nearby Spirits and auras. Draw a spell for each.",
    "flavorText": "The storm howled in tongues, each gust crying a name long forgotten.",
    "artist": "Heidi Taillefer",
    "imagePath": "got-sjaelstrom-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-skeleton",
    "name": "Skeleton",
    "set": "Gothic",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-skeleton-bt",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-skeleton_mage",
    "name": "Skeleton Mage",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Spellcaster\n\nGenesis → May cast an Ordinary magic from a cemetery, banishing it afterward.",
    "flavorText": "Its fingers still trace patterns of forgotten charms.",
    "artist": "Adam Burke",
    "imagePath": "got-skeleton_mage-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-slimy_mutants",
    "name": "Slimy Mutants",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge\n\n(3) → Transform an ally with Submerge into Slimy Mutants from your hand.",
    "flavorText": "The little croaking Frog was gone, unconscious of the carnage done.",
    "artist": "Doug Kovacs",
    "imagePath": "got-slimy_mutants-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-slobbermaw",
    "name": "Slobbermaw",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Sacrifice a minion or Slobbermaw deals 4 damage to you.",
    "flavorText": "Impicky and impatient. Watch your fingers!",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "got-slobbermaw-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-smite",
    "name": "Smite",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "May be cast by any ally.\n\nStrike target adjacent enemy. If it's Evil, banish it instead.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "got-smite-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-snallygaster",
    "name": "Snallygaster",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Movement"
    ],
    "effectText": "Movement +1",
    "flavorText": "",
    "artist": "Brom",
    "imagePath": "got-snallygaster-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-sold_out_cemetery",
    "name": "Sold Out Cemetery",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Whenever Undead enter this site, push another Undead here away one step.",
    "flavorText": "",
    "artist": "Tony Szczudlo",
    "imagePath": "got-sold_out_cemetery-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-sow_the_earth",
    "name": "Sow The Earth",
    "set": "Gothic",
    "type": "Aura",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 3,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Conjure Sow the Earth to a single void square, playing your top site there.\n\nThis site provides double mana and threshold.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "got-sow_the_earth-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-sphere_of_animosity",
    "name": "Sphere Of Animosity",
    "set": "Gothic",
    "type": "Aura",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Avatars here can't leave, heal, or be defended.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "got-sphere_of_animosity-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-sphinx_sarcophagus",
    "name": "Sphinx Sarcophagus",
    "set": "Gothic",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-sphinx_sarcophagus-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-spire",
    "name": "Spire",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-spire-pd",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-spore_spouts",
    "name": "Spore Spouts",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → You can cast minions with 2 or less power to any site this turn.",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "got-spore_spouts-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-stagecoach",
    "name": "Stagecoach",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Charge"
    ],
    "effectText": "Charge\n\nMay carry any number of minions.",
    "flavorText": "The road is long, but the fare is paid.",
    "artist": "Jeff A. Menges",
    "imagePath": "got-stagecoach-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-stargazer",
    "name": "Stargazer",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 5,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Draw a spell for each minion in the void.",
    "flavorText": "The shapes we see in stars are more than just stories.",
    "artist": "David O'Connor",
    "imagePath": "got-stargazer-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-static_servant",
    "name": "Static Servant",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Each other unit here takes 1 damage.",
    "flavorText": "",
    "artist": "Brom",
    "imagePath": "got-static_servant-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-stinging_kelp",
    "name": "Stinging Kelp",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Deal 1 damage to each minion at target site in this body of water.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "got-stinging_kelp-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-stitched_abomination",
    "name": "Stitched Abomination",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 7,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Banish up to three minions from one cemetery to stitch together. This Abomination has their combined power, but each part may be damaged and destroyed separately.",
    "flavorText": "The sum of all fears, sewn with thread and blasphemy.",
    "artist": "Doug Kovacs",
    "imagePath": "got-stitched_abomination-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-stream",
    "name": "Stream",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-stream-pd",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-sturmgeist",
    "name": "Sturmgeist",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nWhenever an enemy casts magic, Sturmgeist steps closer then strikes it if adjacent.",
    "flavorText": "",
    "artist": "Mattias Frisk",
    "imagePath": "got-sturmgeist-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-stygian_archers",
    "name": "Stygian Archers",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Ranged"
    ],
    "effectText": "Ranged\n\nWhenever Stygian Archers kill an enemy, summon a Skeleton token where it died.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "got-stygian_archers-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-survivors_of_serava",
    "name": "Survivors Of Serava",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Stealth"
    ],
    "effectText": "At the end of your turn, if no enemies are nearby, this gains Stealth.",
    "flavorText": "The snow buries their road, their names, their regrets.",
    "artist": "Quinton Hoover",
    "imagePath": "got-survivors_of_serava-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-swap",
    "name": "Swap",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Swap the location of target minion or artifact with another target minion or artifact.",
    "flavorText": "Order of the Golden Scepter sounds awfully close to \"Horde of the Gored Septarch.\" Good luck explaining that!",
    "artist": "AronjaArt",
    "imagePath": "got-swap-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-symmetric_suffering",
    "name": "Symmetric Suffering",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Sacrifice up to one minion, artifact, and aura. Your opponent must sacrifice the same.",
    "flavorText": "",
    "artist": "Emil Idzikowski",
    "imagePath": "got-symmetric_suffering-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-tabula_rasa",
    "name": "Tabula Rasa",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "May be cast to any minion.\n\nBearer is silenced, can't be modified otherwise, and can't drop Tabula Rasa.",
    "flavorText": "",
    "artist": "Santiago Caruso",
    "imagePath": "got-tabula_rasa-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-temple_of_moloch",
    "name": "Temple Of Moloch",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Once on each player's turn, they may sacrifice a minion here to gain (2).",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "got-temple_of_moloch-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-ten_tonne_slug",
    "name": "Ten Tonne Slug",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 7,
    "life": 7,
    "keywords": [],
    "effectText": "",
    "flavorText": "It bade no roar, but crept as stone\nOf chiliad winters heaped as one\nWrothe belly o'er burg, bosk, and bone\n'Til Time herself was unbegun",
    "artist": "AronjaArt",
    "imagePath": "got-ten_tonne_slug-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-the_apex_of_babel",
    "name": "The Apex Of Babel",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "When the Tower of Babel is built, draw a card, then you may cast a spell for free.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "got-the_apex_of_babel-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-the_base_of_babel",
    "name": "The Base Of Babel",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "You may build The Tower of Babel by playing The Apex of Babel atop this.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "got-the_base_of_babel-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-the_doom_of_dilmun",
    "name": "The Doom Of Dilmun",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 8,
    "threshold": {
      "air": 4,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 6,
    "life": 6,
    "keywords": [
      "Burrowing",
      "Submerge",
      "Voidwalk"
    ],
    "effectText": "Burrowing, Submerge, Voidwalk\n\nCan't be banished, destroyed, or modified.",
    "flavorText": "",
    "artist": "Brom",
    "imagePath": "got-the_doom_of_dilmun-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-the_empyrean",
    "name": "The Empyrean",
    "set": "Gothic",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-the_empyrean-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-the_flood",
    "name": "The Flood",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 4
    },
    "power": null,
    "life": null,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Permanently flood the entire realm, including voids. Submerge everything except one minion of each type.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "got-the_flood-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-the_hexham_haunts",
    "name": "The Hexham Haunts",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Airborne",
      "Burrowing"
    ],
    "effectText": "Airborne, Burrowing\n\nMust be cast burrowed, but may be cast from the cemetery.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "got-the_hexham_haunts-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-the_inquisition",
    "name": "The Inquisition",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Genesis"
    ],
    "effectText": "When an opponent can see this card in your hand or spellbook, you may summon it.\n \nGenesis → Target opponent reveals their hand. You may banish a card from it.",
    "flavorText": "",
    "artist": "Pedro Ferreira",
    "imagePath": "got-the_inquisition-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-the_malleus_maleficarum",
    "name": "The Malleus Maleficarum",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 5,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Once on your turn, bearer may cast a magic from your collection that targets an enemy Spellcaster, or their location or site.",
    "flavorText": "Nunquam faciendum est malum ut bonum inde eueniat.",
    "artist": "Dan Seagrave",
    "imagePath": "got-the_malleus_maleficarum-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-the_manor_at_daperyll_hill",
    "name": "The Manor At Daperyll Hill",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "(A)(A)(A)(A) — Once on your turn, this may deal 3 damage to target enemy here to heal you 3.",
    "flavorText": "",
    "artist": "Melissa A. Benson",
    "imagePath": "got-the_manor_at_daperyll_hill-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-the_pallid_bust",
    "name": "The Pallid Bust",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Banish a dead minion.\n \nMinion bearer has the banished minion's printed types and abilities.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "got-the_pallid_bust-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-the_rack",
    "name": "The Rack",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Whenever the bearer strikes an Avatar, stretch them so that they also occupy another adjacent location. Then they lose 1 life for each location they occupy.",
    "flavorText": "",
    "artist": "Zohn Dee",
    "imagePath": "got-the_rack-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-the_void",
    "name": "The Void",
    "set": "Gothic",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-the_void-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-thin_ice",
    "name": "Thin Ice",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "At the end of your turn, if minions atop this site total 5 or more power, submerge them.",
    "flavorText": "",
    "artist": "Truitt Parrish",
    "imagePath": "got-thin_ice-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-thing_in_the_ice",
    "name": "Thing In The Ice",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 6,
    "life": 6,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Disabled for three of your turns. Can't be targeted or damaged by magic until the ice melts.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "got-thing_in_the_ice-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-those_who_linger",
    "name": "Those Who Linger",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 6,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Deathrite"
    ],
    "effectText": "Deathrite → Summon a Ghoul from your collection to this site. It has \"Deathrite → Summon a Skeleton token to this site.\"",
    "flavorText": "Fewer and fewer answer the call, but still they abide",
    "artist": "Pedro Ferreira",
    "imagePath": "got-those_who_linger-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-thumb_screws",
    "name": "Thumb Screws",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Whenever a nearby Avatar casts a spell, they lose life equal to the number of spells they've cast this turn.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "got-thumb_screws-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-tombstone_wardens",
    "name": "Tombstone Wardens",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Elite",
    "cost": 3,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Airborne"
    ],
    "effectText": "During your opponent's turn, this is a 5 power Angel Automaton with Airborne.",
    "flavorText": "Approach with reverence—or regret.",
    "artist": "Elvira Shakirova",
    "imagePath": "got-tombstone_wardens-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-toolbox",
    "name": "Toolbox",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Sacrifice → Bearer may cast an Ordinary spell from your collection.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "got-toolbox-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-torch_and_pitchfork",
    "name": "Torch And Pitchfork",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Ordinary",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Ordinary bearer has \"Nearby Ordinary allies have +1 power.\"",
    "flavorText": "Fire. Steel. And someone to blame.",
    "artist": "Elwira Pawlikowska",
    "imagePath": "got-torch_and_pitchfork-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-torrid_omphalos",
    "name": "Torrid Omphalos",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Earth and Fire Spellcaster\n\nAt the end of your turn, this Omphalos draws a spell, which only it can cast. Minions it casts must be summoned here.",
    "flavorText": "",
    "artist": "Dan Seagrave",
    "imagePath": "got-torrid_omphalos-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-town_priest",
    "name": "Town Priest",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 1,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Return target adjacent Evil minion to its owner's hand.",
    "flavorText": "His hand may tremble, but not his conviction.",
    "artist": "Mattias Frisk",
    "imagePath": "got-town_priest-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-trade_encampment",
    "name": "Trade Encampment",
    "set": "Gothic",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-trade_encampment-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-trial_by_fire",
    "name": "Trial By Fire",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "May be cast by any ally.\n\nDeal 3 damage to target minion nearby.",
    "flavorText": "The tongues of flame sing truer than the tongues of witches!",
    "artist": "Truitt Parrish",
    "imagePath": "got-trial_by_fire-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-trial_by_water",
    "name": "Trial By Water",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "An ally submerges target minion it's nearby.",
    "flavorText": "In silence she sank, and the town was satisfied.",
    "artist": "Jussi Pylkäs",
    "imagePath": "got-trial_by_water-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-troubled_town",
    "name": "Troubled Town",
    "set": "Gothic",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-troubled_town-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-twilight_bloom",
    "name": "Twilight Bloom",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Provides (E)(F)(W) this turn.",
    "flavorText": "",
    "artist": "Caio Calazans",
    "imagePath": "got-twilight_bloom-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-undead_ambush",
    "name": "Undead Ambush",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Summon a Skeleton token to each other site adjacent to target enemy.",
    "flavorText": "Shortcuts through graveyards never end well.",
    "artist": "Elwira Pawlikowska",
    "imagePath": "got-undead_ambush-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-undesirables",
    "name": "Undesirables",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 5,
    "life": 5,
    "keywords": [
      "Burrowing"
    ],
    "effectText": "Burrowing\n\nAllies can't enter this site.",
    "flavorText": "Too broken to rule, too crude to serve, they linger.",
    "artist": "Dan Seagrave",
    "imagePath": "got-undesirables-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-valley",
    "name": "Valley",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-valley-pd",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-vampire_bats",
    "name": "Vampire Bats",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nVampire Bats' strike damage against units heals you.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "got-vampire_bats-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-vandal_imp",
    "name": "Vandal Imp",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Destroy a random artifact.",
    "flavorText": "Imps perfect both plausible deniability and implausible destruction.",
    "artist": "Jeff A. Menges",
    "imagePath": "got-vandal_imp-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-varistus_the_evictor",
    "name": "Varistus The Evictor",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Unique",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Voidwalk"
    ],
    "effectText": "Voidwalk\n\nWhenever Varistus enters a void location, he kills all enemies there.",
    "flavorText": "",
    "artist": "Rodney Matthews",
    "imagePath": "got-varistus_the_evictor-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-vast_desert",
    "name": "Vast Desert",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Deal 1 damage to each minion atop target nearby site.",
    "flavorText": "",
    "artist": "AronjaArt",
    "imagePath": "got-vast_desert-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-vesper_swarm",
    "name": "Vesper Swarm",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 5,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nOnce on your turn, may fly to a wounded minion.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "got-vesper_swarm-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-vindictive_nation",
    "name": "Vindictive Nation",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Elite",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Opponent loses 1, 3, or 7 life respectively if they modify, move, or destroy a nearby allied site.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "got-vindictive_nation-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-virgin_in_prayer",
    "name": "Virgin In Prayer",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Ward an allied minion.",
    "flavorText": "In darkest shadow, the smallest flame becomes a sun.",
    "artist": "Lindsey Crummett",
    "imagePath": "got-virgin_in_prayer-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-wasteland",
    "name": "Wasteland",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "got-wasteland-pd",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "got-watery_grave",
    "name": "Watery Grave",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Whenever an enemy drowns nearby, summon a Skeleton token atop that site.",
    "flavorText": "",
    "artist": "Ian Miller",
    "imagePath": "got-watery_grave-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-wave_of_eviction",
    "name": "Wave Of Eviction",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "An allied water site overflows in a cardinal direction, flooding sites there this turn and carrying away enemies one step at a time.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "got-wave_of_eviction-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-weathered_trunks",
    "name": "Weathered Trunks",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "Must be cast to an allied site occupied by an enemy.",
    "flavorText": "In a realm that forgets itself, the old roots remember.",
    "artist": "Ian Miller",
    "imagePath": "got-weathered_trunks-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-wiccan_tools",
    "name": "Wiccan Tools",
    "set": "Gothic",
    "type": "Artifact",
    "elements": [],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Sacrifice → Draw a spell. This turn, bearer gains Spellcaster and their spells require no threshold.",
    "flavorText": "",
    "artist": "Pedro Ferreira",
    "imagePath": "got-wiccan_tools-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-wild_fanatic",
    "name": "Wild Fanatic",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Charge"
    ],
    "effectText": "Charge",
    "flavorText": "His battle plan involves mostly yelling and gravity.",
    "artist": "Melissa A. Benson",
    "imagePath": "got-wild_fanatic-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-willing_tribute",
    "name": "Willing Tribute",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [],
    "effectText": "Sacrifice → Untap an adjacent Evil ally.",
    "flavorText": "Arms raised in solemn invitation,\nGolfrida ruminated upon oblivion.",
    "artist": "Zohn Dee",
    "imagePath": "got-willing_tribute-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-winter_nymph",
    "name": "Winter Nymph",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Stealth"
    ],
    "effectText": "Stealth\n\nWhenever a minion is summoned nearby, tap it.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "got-winter_nymph-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-witching_hour",
    "name": "Witching Hour",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Airborne",
      "Spellcaster"
    ],
    "effectText": "Your Evil, Spellcaster, and Spirit allies gain Airborne and +1 power this turn.",
    "flavorText": "Midnight bells toll—but not for thee!",
    "artist": "Emil Idzikowski",
    "imagePath": "got-witching_hour-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-wreathed_in_righteousness",
    "name": "Wreathed In Righteousness",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 2,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Ward all minions at target location. Then deal damage to minions at affected locations:\n\n$2 2 2\n2 0 2\n2 2 2$",
    "flavorText": "",
    "artist": "Francesca Baerald",
    "imagePath": "got-wreathed_in_righteousness-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-wuthering_heights",
    "name": "Wuthering Heights",
    "set": "Gothic",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Once on your turn, you may fly a minion atop here onto a nearby site.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "got-wuthering_heights-b",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-yog_sothoth",
    "name": "Yog Sothoth",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Unique",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 4
    },
    "power": 10,
    "life": 10,
    "keywords": [],
    "effectText": "Occupies all locations safely.\n\nIs banished without five voids.\n\nIgnores the abilities of sites.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "got-yog_sothoth-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-young_master_damion",
    "name": "Young Master Damion",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 6,
    "threshold": {
      "air": 3,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → Summon two Ghouls from your collection here. They can't die while nearby.",
    "flavorText": "Family bonds persisting past undeath is rare, but it does happen.",
    "artist": "Lindsey Crummett",
    "imagePath": "got-young_master_damion-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-zap",
    "name": "Zap",
    "set": "Gothic",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 1,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Deal 1 damage to target unit.",
    "flavorText": "",
    "artist": "Vasiliy Ermolaev",
    "imagePath": "got-zap-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-zeppelin_of_zealots",
    "name": "Zeppelin Of Zealots",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 3,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Ward, Airborne while Warded",
    "flavorText": "",
    "artist": "Juan Machuca",
    "imagePath": "got-zeppelin_of_zealots-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-zombie_bruiser",
    "name": "Zombie Bruiser",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [],
    "effectText": "(4), Sacrifice a Skeleton token → Summon Zombie Bruiser from your cemetery there.",
    "flavorText": "About as subtle as a tombstone through a stained glass window.",
    "artist": "Juan Machuca",
    "imagePath": "got-zombie_bruiser-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "got-zombie_horde",
    "name": "Zombie Horde",
    "set": "Gothic",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 5,
    "life": 5,
    "keywords": [],
    "effectText": "Can't move to defend.",
    "flavorText": "The living were as reeds before a fire, and the dead as ash upon the earth.",
    "artist": "Jussi Pylkäs",
    "imagePath": "got-zombie_horde-b",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-amazon_warriors",
    "name": "Amazon Warriors",
    "set": "Promo",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 5,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 5,
    "life": 5,
    "keywords": [],
    "effectText": "",
    "flavorText": "\"Tonight, we keep watch. And tomorrow, before the dawn, we shall arm ourselves in our weapons, and beside their hollow vessels waken bitter Ares.\" — Homer\"",
    "artist": "Elvira Shakirova",
    "imagePath": "pro-amazon_warriors-ai",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-apprentice_wizard",
    "name": "Apprentice Wizard",
    "set": "Promo",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Spellcaster\n\nGenesis → Draw a spell.",
    "flavorText": "",
    "artist": "Ossi Hiekkala",
    "imagePath": "pro-apprentice_wizard-wk",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-archimago",
    "name": "Archimago",
    "set": "Promo",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "pro-archimago-op",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "pro-avatar_of_air",
    "name": "Avatar Of Air",
    "set": "Promo",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": 1,
    "life": 20,
    "keywords": [],
    "effectText": "Tap → Play or draw a site.\n\nOnce on your turn, if you occupy an Air site, you may fly a unit atop it to a nearby site.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "pro-avatar_of_air-op",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-avatar_of_earth",
    "name": "Avatar Of Earth",
    "set": "Promo",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": 1,
    "life": 20,
    "keywords": [],
    "effectText": "Tap → Play or draw a site.\n\nYou have +1 power for each nearby earth site.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "pro-avatar_of_earth-op",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-avatar_of_fire",
    "name": "Avatar Of Fire",
    "set": "Promo",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": 1,
    "life": 20,
    "keywords": [],
    "effectText": "Tap → Play or draw a site.\n\nTap → This turn, fire sites in your hand are also Fireballs.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "pro-avatar_of_fire-op",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-avatar_of_water",
    "name": "Avatar Of Water",
    "set": "Promo",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": 1,
    "life": 20,
    "keywords": [],
    "effectText": "Tap → Play or draw a site.\n\nTap → Flood a site adjacent to your body of water until you do so again. You may teleport there.",
    "flavorText": "",
    "artist": "Séverine Pineaux",
    "imagePath": "pro-avatar_of_water-op",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-battlemage",
    "name": "Battlemage",
    "set": "Promo",
    "type": "Avatar",
    "elements": [],
    "rarity": "Elite",
    "cost": null,
    "threshold": {},
    "power": 3,
    "life": 20,
    "keywords": [],
    "effectText": "Tap → Play or draw a site.\n\nWhenever Battlemage attacks and kills an enemy, you may draw a spell.",
    "flavorText": "",
    "artist": "Jussi Pylkäs",
    "imagePath": "pro-battlemage-op",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-bone_rabble",
    "name": "Bone Rabble",
    "set": "Promo",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": 1,
    "life": 1,
    "keywords": [],
    "effectText": "Whenever you play an earth site, you may summon Bone Rabble from your cemetery to that site.",
    "flavorText": "",
    "artist": "Jeff A. Menges",
    "imagePath": "pro-bone_rabble-op",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-briar_patch",
    "name": "Briar Patch",
    "set": "Promo",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Whenever an enemy unit enters or leaves this site, it takes 1 damage.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "pro-briar_patch-d",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-bruin",
    "name": "Bruin",
    "set": "Promo",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "pro-bruin-d",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "pro-camelot",
    "name": "Camelot",
    "set": "Promo",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "pro-camelot-d",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "pro-city_of_glass",
    "name": "City Of Glass",
    "set": "Promo",
    "type": "Site",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "pro-city_of_glass-scg",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "pro-cloud_city",
    "name": "Cloud City",
    "set": "Promo",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "(A)(A)(A) — Once on your turn, this site may fly to a nearby void.",
    "flavorText": "",
    "artist": "Elwira Pawlikowska",
    "imagePath": "pro-cloud_city-d",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-dark_tower",
    "name": "Dark Tower",
    "set": "Promo",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → If this is the only Dark Tower you control, gain (1) this turn.",
    "flavorText": "",
    "artist": "Michal Nagypál",
    "imagePath": "pro-dark_tower-op",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-day_of_judgment",
    "name": "Day Of Judgment",
    "set": "Promo",
    "type": "Magic",
    "elements": [
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 7,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 3,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Place the cross anywhere in the realm. Banish Evil and damage units occupying affected squares.\n\n$  3  \n3 7 3\n  3  \n  3  $",
    "flavorText": "",
    "artist": "Caio Calazans",
    "imagePath": "pro-day_of_judgment-op",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-deathspeaker",
    "name": "Deathspeaker",
    "set": "Promo",
    "type": "Avatar",
    "elements": [],
    "rarity": "Elite",
    "cost": null,
    "threshold": {},
    "power": 1,
    "life": 20,
    "keywords": [],
    "effectText": "Tap → Play or draw a site.\n\nYou may cast one dead minion each turn, and for (0) if you're on Death's Door. Whenever you summon a minion this way, banish it.",
    "flavorText": "",
    "artist": "Tony Szczudlo",
    "imagePath": "pro-deathspeaker-op",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-dispel",
    "name": "Dispel",
    "set": "Promo",
    "type": "Magic",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Destroy all auras and artifacts at target location up to two steps away.",
    "flavorText": "Pride goeth before destruction ...",
    "artist": "Elwira Pawlikowska",
    "imagePath": "pro-dispel-op",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-dragonlord",
    "name": "Dragonlord",
    "set": "Promo",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "pro-dragonlord-op",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "pro-druid",
    "name": "Druid",
    "set": "Promo",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "pro-druid-d",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "pro-elementalist",
    "name": "Elementalist",
    "set": "Promo",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "pro-elementalist-op",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "pro-enchantress",
    "name": "Enchantress",
    "set": "Promo",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "pro-enchantress-op",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "pro-fields_of_phyxis",
    "name": "Fields Of Phyxis",
    "set": "Promo",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "The site directly in front is silenced.",
    "flavorText": "",
    "artist": "Emil Idzikowski",
    "imagePath": "pro-fields_of_phyxis-d",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-flamecaller",
    "name": "Flamecaller",
    "set": "Promo",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "pro-flamecaller-op",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "pro-foot_soldier_1",
    "name": "Foot Soldier 1",
    "set": "Promo",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "pro-foot_soldier_1-d",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "pro-foot_soldier_2",
    "name": "Foot Soldier 2",
    "set": "Promo",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "pro-foot_soldier_2-d",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "pro-foot_soldier_3",
    "name": "Foot Soldier 3",
    "set": "Promo",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "pro-foot_soldier_3-d",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "pro-foot_soldier_english",
    "name": "Foot Soldier English",
    "set": "Promo",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "pro-foot_soldier_english-d",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "pro-foot_soldier_saracen",
    "name": "Foot Soldier Saracen",
    "set": "Promo",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "pro-foot_soldier_saracen-d",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "pro-geomancer",
    "name": "Geomancer",
    "set": "Promo",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "pro-geomancer-op",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "pro-gothic_tower",
    "name": "Gothic Tower",
    "set": "Promo",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → If this is the only Gothic Tower you control, gain (1) this turn.",
    "flavorText": "",
    "artist": "Michal Nagypál",
    "imagePath": "pro-gothic_tower-op",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-grandmaster_wizard",
    "name": "Grandmaster Wizard",
    "set": "Promo",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Elite",
    "cost": 6,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 0,
    "life": 0,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Spellcaster\n\nGenesis → Draw three spells.",
    "flavorText": "",
    "artist": "Ossi Hiekkala",
    "imagePath": "pro-grandmaster_wizard-wk",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-guile_sirens",
    "name": "Guile Sirens",
    "set": "Promo",
    "type": "Minion",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": 3,
    "life": 3,
    "keywords": [
      "Submerge"
    ],
    "effectText": "Submerge\n\nAt the start of your turn, force target nearby enemy minion to take a step toward Guile Sirens.",
    "flavorText": "",
    "artist": "Elvira Shakirova",
    "imagePath": "pro-guile_sirens-k",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-haystack",
    "name": "Haystack",
    "set": "Promo",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Opponent’s deck searches are limited to the top three cards.",
    "flavorText": "",
    "artist": "Drew Tucker",
    "imagePath": "pro-haystack-d",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-headless_haunt",
    "name": "Headless Haunt",
    "set": "Promo",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Voidwalk"
    ],
    "effectText": "Voidwalk\n\nAt the start of your turn, Headless Haunt teleports to the top of a random site or void.",
    "flavorText": "Jacet sine nominee truncus.",
    "artist": "Jussi Pylkäs",
    "imagePath": "pro-headless_haunt-op",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-king_arthur",
    "name": "King Arthur",
    "set": "Promo",
    "type": "Minion",
    "elements": [
      "Earth",
      "Fire",
      "Water",
      "Air"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 1,
      "earth": 1,
      "fire": 1,
      "water": 1
    },
    "power": 5,
    "life": 5,
    "keywords": [],
    "effectText": "Players can't control cards owned by other players.",
    "flavorText": "Death is welcome when it comes; but to yield—never!",
    "artist": "Melissa A. Benson",
    "imagePath": "pro-king_arthur-d",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-lightning_bolt",
    "name": "Lightning Bolt",
    "set": "Promo",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Deal 3 damage to a random unit at target location.",
    "flavorText": "",
    "artist": "Ossi Hiekkala",
    "imagePath": "pro-lightning_bolt-tc",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-lone_tower",
    "name": "Lone Tower",
    "set": "Promo",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Genesis"
    ],
    "effectText": "Genesis → If this is the only Lone Tower you control, gain (1) this turn.",
    "flavorText": "",
    "artist": "Michal Nagypál",
    "imagePath": "pro-lone_tower-op",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-occult_ritual",
    "name": "Occult Ritual",
    "set": "Promo",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 2,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [
      "Spellcaster"
    ],
    "effectText": "Gain (2) this turn for each allied Spellcaster here.",
    "flavorText": "\"With mingled reverence and awe they cried, softly, odiously, appalling, the name of the Being whom they momentarily expected to appear.\" ? Algernon Blackwood",
    "artist": "Lindsey Crummett",
    "imagePath": "pro-occult_ritual-k",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-pathfinder",
    "name": "Pathfinder",
    "set": "Promo",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "pro-pathfinder-op",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "pro-pudge_butcher",
    "name": "Pudge Butcher",
    "set": "Promo",
    "type": "Minion",
    "elements": [
      "Earth"
    ],
    "rarity": "Exceptional",
    "cost": 4,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 0,
      "water": 0
    },
    "power": 5,
    "life": 5,
    "keywords": [
      "Immobile"
    ],
    "effectText": "Immobile\n\nTap → Shoot a projectile. If it hits a unit, drag it to this location. Pudge may fight it.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "pro-pudge_butcher-d",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-relentless_crowd",
    "name": "Relentless Crowd",
    "set": "Promo",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "pro-relentless_crowd-k",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "pro-river_of_blood",
    "name": "River Of Blood",
    "set": "Promo",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "All healing is halved, rounded down.",
    "flavorText": "",
    "artist": "AronjaArt",
    "imagePath": "pro-river_of_blood-d",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-rubble",
    "name": "Rubble",
    "set": "Promo",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "pro-rubble-d",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "pro-seer",
    "name": "Seer",
    "set": "Promo",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "pro-seer-op",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "pro-sir_lancelot",
    "name": "Sir Lancelot",
    "set": "Promo",
    "type": "Minion",
    "elements": [
      "Earth",
      "Fire"
    ],
    "rarity": "Unique",
    "cost": 6,
    "threshold": {
      "air": 0,
      "earth": 2,
      "fire": 2,
      "water": 0
    },
    "power": 4,
    "life": 6,
    "keywords": [
      "Lance"
    ],
    "effectText": "Lance\n\nThe first time Sir Lancelot fights each turn, untap him.",
    "flavorText": "",
    "artist": "Alan Pollack",
    "imagePath": "pro-sir_lancelot-tc",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-skeleton",
    "name": "Skeleton",
    "set": "Promo",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "pro-skeleton-ai",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "pro-sorcerer",
    "name": "Sorcerer",
    "set": "Promo",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "pro-sorcerer-d",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "pro-sparkmage",
    "name": "Sparkmage",
    "set": "Promo",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "pro-sparkmage-op",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "pro-spellslinger",
    "name": "Spellslinger",
    "set": "Promo",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "pro-spellslinger-dk",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "pro-spire",
    "name": "Spire",
    "set": "Promo",
    "type": "Site",
    "elements": [
      "Air"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "pro-spire-d",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "pro-stream",
    "name": "Stream",
    "set": "Promo",
    "type": "Site",
    "elements": [
      "Water"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "pro-stream-d",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "pro-swap",
    "name": "Swap",
    "set": "Promo",
    "type": "Magic",
    "elements": [
      "Water"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 0,
      "water": 2
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Swap the location of target minion or artifact with another target minion or artifact.",
    "flavorText": "Order of the Golden Scepter sounds awfully close to \"Horde of the Gored Septarch.\" Good luck explaining that!",
    "artist": "AronjaArt",
    "imagePath": "pro-swap-op",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-tawny",
    "name": "Tawny",
    "set": "Promo",
    "type": "Minion",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "pro-tawny-d",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "pro-templar",
    "name": "Templar",
    "set": "Promo",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "pro-templar-op",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "pro-the_colour_out_of_space",
    "name": "The Colour Out Of Space",
    "set": "Promo",
    "type": "Site",
    "elements": [
      "Air",
      "Earth",
      "Fire",
      "Water"
    ],
    "rarity": "Unique",
    "cost": null,
    "threshold": {
      "air": 1,
      "earth": 1,
      "fire": 1,
      "water": 1
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Provides no mana or threshold if not adjacent to the void.",
    "flavorText": "",
    "artist": "Brian Smith",
    "imagePath": "pro-the_colour_out_of_space-d",
    "isLandscape": true,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-valley",
    "name": "Valley",
    "set": "Promo",
    "type": "Site",
    "elements": [
      "Earth"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 1,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "pro-valley-d",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "pro-war_horse",
    "name": "War Horse",
    "set": "Promo",
    "type": "Minion",
    "elements": [
      "Fire"
    ],
    "rarity": "Exceptional",
    "cost": 2,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": 2,
    "life": 2,
    "keywords": [
      "Charge"
    ],
    "effectText": "Charge, May carry an ally.",
    "flavorText": "",
    "artist": "Lindsey Crummett",
    "imagePath": "pro-war_horse-d",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-wasteland",
    "name": "Wasteland",
    "set": "Promo",
    "type": "Site",
    "elements": [
      "Fire"
    ],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {
      "air": 0,
      "earth": 0,
      "fire": 1,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "pro-wasteland-d",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "pro-waveshaper",
    "name": "Waveshaper",
    "set": "Promo",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "pro-waveshaper-op",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "pro-waypoint_portal",
    "name": "Waypoint Portal",
    "set": "Promo",
    "type": "Magic",
    "elements": [
      "Air"
    ],
    "rarity": "Exceptional",
    "cost": 3,
    "threshold": {
      "air": 1,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "Choose two different sites. This turn, units can move between them as if they were adjacent.",
    "flavorText": "",
    "artist": "Jeff Easley",
    "imagePath": "pro-waypoint_portal-d",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  },
  {
    "id": "pro-witch",
    "name": "Witch",
    "set": "Promo",
    "type": "Avatar",
    "elements": [],
    "rarity": "Ordinary",
    "cost": null,
    "threshold": {},
    "power": null,
    "life": null,
    "keywords": [],
    "effectText": "",
    "flavorText": "",
    "artist": "",
    "imagePath": "pro-witch-ai",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": false
  },
  {
    "id": "pro-witherwing_hero",
    "name": "Witherwing Hero",
    "set": "Promo",
    "type": "Minion",
    "elements": [
      "Air"
    ],
    "rarity": "Unique",
    "cost": 4,
    "threshold": {
      "air": 2,
      "earth": 0,
      "fire": 0,
      "water": 0
    },
    "power": 4,
    "life": 4,
    "keywords": [
      "Airborne"
    ],
    "effectText": "Airborne\n\nWhenever a weaker allied minion here is attacked, you may return it to its owner's hand.",
    "flavorText": "",
    "artist": "Vincent Pompetti",
    "imagePath": "pro-witherwing_hero-ai",
    "isLandscape": false,
    "rulings": [],
    "metadataVerified": true
  }
];
})();
