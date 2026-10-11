/**
 * Christina's Penthouse - Architectural Interactive Engine
 * Unified Media Showcase & Architectural Floorplan System
 */

document.addEventListener('DOMContentLoaded', () => {

  // ===================================================================
  // 1. SPACES DATA MODEL (Synchronized with Planimetria.jpg 1 to 8)
  // Multilingual content for Italian, German and English
  // ===================================================================
  const spaces = [
    {
      id: 'pin-1',
      num: '01',
      sqm: '35 m²',
      zoneId: 'day',
      zone: {
        it: 'Zona Giorno',
        de: 'Wohnbereich',
        en: 'Living Area'
      },
      badge: {
        it: '01 • ZONA GIORNO • SOGGIORNO',
        de: '01 • WOHNBEREICH • WOHNZIMMER',
        en: '01 • LIVING AREA • LOUNGE'
      },
      pill: {
        it: '1. Soggiorno',
        de: '1. Wohnbereich',
        en: '1. Living Room'
      },
      name: {
        it: 'Soggiorno',
        de: 'Wohnzimmer',
        en: 'Living Room'
      },
      desc: {
        it: 'Stufa in ghisa funzionante, divano angolare, smart TV satellitare e ampie vetrate con uscita sulla terrazza.',
        de: 'Gusseiserner Holzofen, gemütliche Eckcouch, SAT-TV und große Schiebefenster zur sonnigen Südterrasse.',
        en: 'Cast-iron wood stove, spacious corner sofa, satellite TV, and sliding doors to the sun terrace.'
      },
      orientation: {
        it: 'Esposizione Sud • Uscita diretta su terrazza solarium',
        de: 'Reine Südlage • Direkter Ausgang zur Südterrasse',
        en: 'Full South Exposure • Direct walk-out to sun terrace'
      },
      dataTooltip: {
        it: '01 • Soggiorno',
        de: '01 • Wohnbereich',
        en: '01 • Living Room'
      },
      spec1: {
        label: { it: 'Riscaldamento:', de: 'Heizung:', en: 'Heating:' },
        val: { it: 'Stufa in ghisa & autonomo', de: 'Gusseiserner Holzofen', en: 'Cast-iron stove & autonomous' }
      },
      spec2: {
        label: { it: 'Esposizione:', de: 'Lage:', en: 'Exposure:' },
        val: { it: 'Pieno Sud • Porte-finestre', de: 'Reine Südlage • Fenstertür', en: 'Full South • French doors' }
      },
      spec3: {
        label: { it: 'Comfort:', de: 'Komfort:', en: 'Comfort:' },
        val: { it: 'Grande divano ad angolo & TV', de: 'Großes Ecksofa & SAT-TV', en: 'Corner sofa & SAT TV' }
      },
      items: [
        { icon: 'stove', it: 'Stufa a legna in ghisa & legnaia', de: 'Gusseiserner Kaminofen & Holz', en: 'Cast-iron wood stove & firewood' },
        { icon: 'sofa', it: 'Divano angolare con chaise longue', de: 'Ecksofa mit Recamiere', en: 'Corner sofa with chaise longue' },
        { icon: 'tv', it: 'Smart TV satellitare HD', de: 'SAT-Flachbild-TV HD', en: 'Satellite HD Smart TV' },
        { icon: 'dvd', it: 'Lettore DVD/CD & cineteca', de: 'DVD/CD-Player & Filmsammlung', en: 'DVD/CD player & film library' },
        { icon: 'terrace', it: 'Porte-finestre con uscita terrazza', de: 'Schiebefenster zur Südterrasse', en: 'Sliding doors to south terrace' },
        { icon: 'heating', it: 'Riscaldamento autonomo regolabile', de: 'Regulierbare Zentralheizung', en: 'Individually regulated heating' },
        { icon: 'wifi', it: 'Wi-Fi fibra ad alta velocità', de: 'Highspeed Glasfaser-WLAN', en: 'High-speed fiber-optic Wi-Fi' },
        { icon: 'lamp', it: 'Tavolino & lampade da lettura', de: 'Couchtisch & Leselampen', en: 'Coffee table & reading lamps' }
      ],
      img: 'assets/images/Salotto.jpg',
      photos: ['assets/images/Salotto.jpg'],
      tagPos: { top: '32%', left: '6%' },
      tagStat1: { it: 'Stufa ghisa & divano', de: 'Kaminofen & Sofa', en: 'Wood stove & sofa' },
      tagStat2: { it: 'Uscita terrazza sud', de: 'Ausgang Südterrasse', en: 'South terrace exit' }
    },
    {
      id: 'pin-2',
      num: '02',
      sqm: '16 m²',
      zoneId: 'day',
      zone: {
        it: 'Zona Giorno',
        de: 'Wohnbereich',
        en: 'Living Area'
      },
      badge: {
        it: '02 • ZONA GIORNO • CUCINA',
        de: '02 • WOHNBEREICH • KÜCHE',
        en: '02 • LIVING AREA • KITCHEN'
      },
      pill: {
        it: '2. Cucina',
        de: '2. Küche',
        en: '2. Kitchen'
      },
      name: {
        it: 'Cucina',
        de: 'Küche',
        en: 'Kitchen'
      },
      desc: {
        it: 'Cucina completa con lavastoviglie, forno, piano cottura a gas, frigo inox, bancone snack e macchine caffè.',
        de: 'Voll ausgestattete Küche mit Geschirrspüler, Backofen, Gasherd, Edelstahl-Kühlschrank und Snack-Theke.',
        en: 'Fully equipped kitchen with dishwasher, oven, gas cooktop, stainless fridge, breakfast bar and coffee makers.'
      },
      orientation: {
        it: 'Finestrata a Nord-Ovest • Adiacente alla sala da pranzo',
        de: 'Fenster nach Nordwest • Direkt am Essbereich',
        en: 'North-West daylight window • Adjacent to dining area'
      },
      dataTooltip: {
        it: '02 • Cucina',
        de: '02 • Küche',
        en: '02 • Kitchen'
      },
      spec1: {
        label: { it: 'Elettrodomestici:', de: 'Geräte:', en: 'Appliances:' },
        val: { it: 'Lavastoviglie, forno, frigo inox', de: 'Geschirrspüler, Ofen, Kühlschrank', en: 'Dishwasher, oven, inox fridge' }
      },
      spec2: {
        label: { it: 'Caffè:', de: 'Kaffee:', en: 'Coffee:' },
        val: { it: 'Nespresso + Filtro americana', de: 'Nespresso & Filtermaschine', en: 'Nespresso & Drip machine' }
      },
      spec3: {
        label: { it: 'Bancone:', de: 'Bar:', en: 'Counter:' },
        val: { it: 'Snack bar con sgabelli alti', de: 'Integrierte Snack-Theke', en: 'Breakfast bar with stools' }
      },
      items: [
        { icon: 'dishwasher', it: 'Lavastoviglie integrata con pastiglie', de: 'Geschirrspüler mit Spültabs', en: 'Dishwasher with starter tabs' },
        { icon: 'cooktop', it: 'Piano cottura 4 fuochi gas & cappa', de: '4-Flammen-Gaskochfeld mit Abzug', en: '4-burner gas cooktop & hood' },
        { icon: 'oven', it: 'Forno elettrico multifunzione', de: 'Multifunktions-Umluftbackofen', en: 'Multifunction electric fan oven' },
        { icon: 'fridge', it: 'Frigorifero & congelatore inox', de: 'Edelstahl-Kühl-/Gefrierkombi', en: 'Stainless steel fridge-freezer' },
        { icon: 'coffee', it: 'Macchine caffè Nespresso & filtro', de: 'Nespresso- & Filterkaffeemaschine', en: 'Nespresso & drip coffee machines' },
        { icon: 'bar', it: 'Bancone snack con sgabelli alti', de: 'Frühstücksbar mit Barhockern', en: 'Breakfast bar with high barstools' },
        { icon: 'kettle', it: 'Bollitore rapido & tostapane', de: 'Wasserkocher & Toaster', en: 'Electric kettle & toaster' },
        { icon: 'kitchenware', it: 'Set completo stoviglie, pentole & calici', de: 'Komplettes Geschirr- & Pfannenset', en: 'Complete cookware, dishes & wine glasses' }
      ],
      img: 'assets/images/Cucina.jpg',
      photos: ['assets/images/Cucina.jpg'],
      tagPos: { top: '10%', left: '20%' },
      tagStat1: { it: 'Super accessoriata', de: 'Voll ausgestattet', en: 'Fully equipped' },
      tagStat2: { it: 'Snack bar & frigo inox', de: 'Bar & Edelstahl-Kühlschrank', en: 'Snack bar & inox fridge' }
    },
    {
      id: 'pin-3',
      num: '03',
      sqm: '20 m²',
      zoneId: 'day',
      zone: {
        it: 'Zona Giorno',
        de: 'Wohnbereich',
        en: 'Living Area'
      },
      badge: {
        it: '03 • ZONA GIORNO • SALA DA PRANZO',
        de: '03 • WOHNBEREICH • ESSBEREICH',
        en: '03 • LIVING AREA • DINING SPACE'
      },
      pill: {
        it: '3. Open Space',
        de: '3. Essbereich',
        en: '3. Dining Area'
      },
      name: {
        it: 'Open Space',
        de: 'Open Space',
        en: 'Open Space'
      },
      desc: {
        it: 'Tavolo in cristallo da 6 posti con vista diretta sulla terrazza solarium e cucina a vista.',
        de: 'Eleganter Glastisch für 6 Personen mit Blick auf die Terrasse und offener Küche.',
        en: 'Glass dining table for 6 guests overlooking the sun terrace and open kitchen.'
      },
      orientation: {
        it: 'Esposizione Sud • Connessione diretta con terrazza e cucina',
        de: 'Südlage • Direkter Übergang zur Terrasse und Küche',
        en: 'South Exposure • Seamless flow to terrace & kitchen'
      },
      dataTooltip: {
        it: '03 • Open Space',
        de: '03 • Essbereich',
        en: '03 • Dining Space'
      },
      spec1: {
        label: { it: 'Capienza:', de: 'Kapazität:', en: 'Seating:' },
        val: { it: 'Tavolo cristallo per 6 persone', de: 'Kristallglastisch für 6 Personen', en: 'Glass table for 6 guests' }
      },
      spec2: {
        label: { it: 'Ambiente:', de: 'Ambiente:', en: 'Setting:' },
        val: { it: 'Open space luminoso e arioso', de: 'Offen, hell und sonnig', en: 'Bright open space layout' }
      },
      spec3: {
        label: { it: 'Affaccio:', de: 'Aussicht:', en: 'Vista:' },
        val: { it: 'Porte-finestre sulla terrazza', de: 'Blick auf die Südterrasse', en: 'French doors to sun terrace' }
      },
      items: [
        { icon: 'dining', it: 'Tavolo in cristallo da 6 posti', de: 'Glastisch für bis zu 6 Personen', en: '6-seat tempered glass dining table' },
        { icon: 'chair', it: '6 poltroncine imbottite comfort', de: '6 bequeme gepolsterte Design-Stühle', en: '6 upholstered comfortable chairs' },
        { icon: 'terrace', it: 'Porta-finestra con uscita su terrazza', de: 'Flügeltür mit Terrassenzugang', en: 'French door with terrace walkout' },
        { icon: 'wine', it: 'Credenza in legno & calici da vino', de: 'Holzanrichte & Weingläser-Set', en: 'Wood sideboard & wine glasses' },
        { icon: 'lamp', it: 'Lampadario a sospensione caldo', de: 'Design-Hängeleuchte mit warmem Licht', en: 'Warm ambient pendant chandelier' },
        { icon: 'layout', it: 'Layout open space con cucina a vista', de: 'Offener Übergang Wohnen & Kochen', en: 'Fluid open-plan living & kitchen flow' }
      ],
      img: 'assets/images/Salotto + Cucina.jpg',
      photos: ['assets/images/Salotto + Cucina.jpg'],
      tagPos: { top: '35%', left: '30%' },
      tagStat1: { it: 'Tavolo cristallo 6 posti', de: 'Tisch für 6 Personen', en: '6-seat glass table' },
      tagStat2: { it: 'Ambiente aperto & solare', de: 'Hell & sonnig', en: 'Bright & sunlit' }
    },
    {
      id: 'pin-4',
      num: '04',
      sqm: '16 m²',
      zoneId: 'night',
      zone: {
        it: 'Zona Notte',
        de: 'Schlafbereich',
        en: 'Night & Sleeping'
      },
      badge: {
        it: '04 • ZONA NOTTE • SECONDA CAMERA',
        de: '04 • SCHLAFBEREICH • ZWEITES ZIMMER',
        en: '04 • SLEEPING ZONE • SECOND BEDROOM'
      },
      pill: {
        it: '4. Seconda Camera',
        de: '4. Zweites Zimmer',
        en: '4. Second Bedroom'
      },
      name: {
        it: 'Seconda Camera',
        de: 'Zweites Schlafzimmer',
        en: 'Second Bedroom'
      },
      desc: {
        it: 'Letto artigianale in legno massiccio, sedia a dondolo relax e porta-finestra sul pergolato di viti.',
        de: 'Handgefertigtes Massivholzbett, Schaukelstuhl und Fenstertür mit Blick auf die Weinlaube.',
        en: 'Handcrafted solid wood bed, rocking chair, and French door looking out to the grape arbor.'
      },
      orientation: {
        it: 'Esposizione Sud • Affaccio su pergolato di viti e Monte Baone',
        de: 'Südlage • Blick auf Weinlaube und Monte Baone',
        en: 'South Exposure • Views of grape arbor and Monte Baone'
      },
      dataTooltip: {
        it: '04 • Seconda Camera',
        de: '04 • Zweites Zimmer',
        en: '04 • Second Bedroom'
      },
      spec1: {
        label: { it: 'Arredo:', de: 'Möbel:', en: 'Craft:' },
        val: { it: 'Legno massiccio naturale artigianale', de: 'Handgefertigtes Massivholz', en: 'Handcrafted solid wood' }
      },
      spec2: {
        label: { it: 'Relax:', de: 'Entspannung:', en: 'Relax:' },
        val: { it: 'Sedia a dondolo rilassante', de: 'Gemütlicher Schaukelstuhl', en: 'Reading rocking chair' }
      },
      spec3: {
        label: { it: 'Uscita:', de: 'Ausgang:', en: 'Access:' },
        val: { it: 'Porta-finestra verso pergolato', de: 'Fenstertür zur Weinlaube', en: 'French door to grape pergola' }
      },
      items: [
        { icon: 'bed', it: 'Letto in legno massiccio naturale', de: 'Naturholz-Massivholzbett', en: 'Handcrafted solid natural wood bed' },
        { icon: 'mattress', it: 'Materasso ortopedico anallergico', de: 'Orthopädische Antiallergie-Matratze', en: 'Hypoallergenic orthopedic mattress' },
        { icon: 'chair', it: 'Sedia a dondolo in legno per relax', de: 'Gemütlicher Holzschaukelstuhl', en: 'Classic wooden rocking chair' },
        { icon: 'terrace', it: 'Porta-finestra sul pergolato verde', de: 'Fenstertür mit Blick zur Weinlaube', en: 'Private French door to grape arbor' },
        { icon: 'lamp', it: 'Comodini & lampade da lettura', de: 'Nachttische & Leselampen', en: 'Nightstands & reading lamps' },
        { icon: 'linens', it: 'Biancheria in puro cotone & piumini', de: 'Reine Baumwollbettwäsche & Decken', en: 'Pure cotton linens & seasonal duvets' }
      ],
      img: 'assets/images/Camera 2.jpg',
      photos: ['assets/images/Camera 2.jpg'],
      photoLabels: [
        { it: 'Letto in Legno Massiccio', de: 'Massivholzbett', en: 'Solid Wood Bed' }
      ],
      tagPos: { top: '36%', left: '46%' },
      tagStat1: { it: 'Arredo legno naturale', de: 'Naturholz-Möbel', en: 'Natural wood furniture' },
      tagStat2: { it: 'Sedia a dondolo relax', de: 'Schaukelstuhl', en: 'Rocking chair' }
    },
    {
      id: 'pin-5',
      num: '05',
      sqm: '20 m²',
      zoneId: 'night',
      zone: {
        it: 'Zona Notte',
        de: 'Schlafbereich',
        en: 'Night & Sleeping'
      },
      badge: {
        it: '05 • ZONA NOTTE • CAMERA MASTER',
        de: '05 • SCHLAFBEREICH • HAUPTSCHLAFZIMMER',
        en: '05 • SLEEPING ZONE • MASTER BEDROOM'
      },
      pill: {
        it: '5. Camera Master',
        de: '5. Hauptschlafzimmer',
        en: '5. Master Bedroom'
      },
      name: {
        it: 'Camera Master',
        de: 'Hauptschlafzimmer',
        en: 'Master Bedroom'
      },
      desc: {
        it: 'Letto matrimoniale (160×200 cm), uscita privata sulla terrazza e ventilatore a pale a soffitto.',
        de: 'Doppelbett (160×200 cm), direkter Terrassenausgang und leiser Deckenventilator aus Holz.',
        en: 'Queen bed (160×200 cm), private door to the sun terrace, and silent wooden ceiling fan.'
      },
      orientation: {
        it: 'Esposizione Sud • Uscita privata esclusiva sulla terrazza',
        de: 'Reine Südlage • Eigener direkter Terrassenausgang',
        en: 'Full South • Exclusive private exit to sun terrace'
      },
      dataTooltip: {
        it: '05 • Camera Master',
        de: '05 • Hauptschlafzimmer',
        en: '05 • Master Bedroom'
      },
      spec1: {
        label: { it: 'Letto:', de: 'Bett:', en: 'Bed:' },
        val: { it: 'Matrimoniale grande (160×200)', de: 'Doppelbett (160×200 cm)', en: 'French double bed (160×200)' }
      },
      spec2: {
        label: { it: 'Accesso:', de: 'Ausgang:', en: 'Access:' },
        val: { it: 'Uscita privata su terrazza a Sud', de: 'Direkter Ausgang zur Terrasse', en: 'Direct private terrace exit' }
      },
      spec3: {
        label: { it: 'Clima:', de: 'Klima:', en: 'Climate:' },
        val: { it: 'Ventilatore pale legno silenzioso', de: 'Geräuscharmer Deckenventilator', en: 'Silent overhead ceiling fan' }
      },
      items: [
        { icon: 'bed', it: 'Letto matrimoniale (160×200 cm)', de: 'Französisches Doppelbett (160×200 cm)', en: 'Queen-size bed (160×200 cm)' },
        { icon: 'terrace', it: 'Accesso privato alla terrazza a sud', de: 'Direkter Privatzugang zur Südterrasse', en: 'Direct private access to south terrace' },
        { icon: 'fan', it: 'Ventilatore a pale in legno a soffitto', de: 'Leiser Naturholz-Deckenventilator', en: 'Whisper-quiet wooden ceiling fan' },
        { icon: 'mattress', it: 'Cuscini ergonomici & materasso comfort', de: 'Ergonomische Kissen & Matratze', en: 'Ergonomic pillows & comfort mattress' },
        { icon: 'curtain', it: 'Tende oscuranti per la massima privacy', de: 'Verdunkelungsvorhänge für Ruhe', en: 'Blackout drapes for complete privacy' },
        { icon: 'plug', it: 'Comodini & prese ricarica su ambo i lati', de: 'Nachttische & Steckdosen beidseitig', en: 'Charging outlets and nightstands on both sides' }
      ],
      img: 'assets/images/Camera 1.jpg',
      photos: ['assets/images/Camera 1.jpg'],
      photoLabels: [
        { it: 'Camera Padronale', de: 'Hauptschlafzimmer', en: 'Master Bedroom' }
      ],
      tagPos: { top: '36%', left: '58%' },
      tagStat1: { it: 'Letto matrimoniale', de: 'Doppelbett', en: 'Double bed' },
      tagStat2: { it: 'Accesso terrazza', de: 'Terrassenausgang', en: 'Terrace access' }
    },
    {
      id: 'pin-6',
      num: '06',
      sqm: '9 m²',
      zoneId: 'night',
      zone: {
        it: 'Zona Notte & Servizi',
        de: 'Badezimmer',
        en: 'Bath & Wellness'
      },
      badge: {
        it: '06 • ZONA NOTTE • BAGNO FINESTRATO',
        de: '06 • BADEZIMMER • TAGESLICHTBAD',
        en: '06 • BATH & WELLNESS • WINDOWED BATH'
      },
      pill: {
        it: '6. Bagno',
        de: '6. Badezimmer',
        en: '6. Bathroom'
      },
      name: {
        it: 'Bagno',
        de: 'Badezimmer',
        en: 'Bathroom'
      },
      desc: {
        it: 'Grande doccia in cristallo, bidet in ceramica, specchio illuminato e ampia finestra panoramica.',
        de: 'Große Glasdusche, Bidet, beleuchteter Spiegel und Tageslichtfenster mit Bergblick.',
        en: 'Large glass shower, ceramic bidet, lighted mirror, and scenic daylight window.'
      },
      orientation: {
        it: 'Finestrato a Nord-Est • Luce naturale e vista Monte Baone',
        de: 'Tageslichtfenster Nordost • Blick auf Monte Baone',
        en: 'North-East daylight window • Monte Baone view'
      },
      dataTooltip: {
        it: '06 • Bagno',
        de: '06 • Tageslichtbad',
        en: '06 • Windowed Bath'
      },
      spec1: {
        label: { it: 'Doccia:', de: 'Dusche:', en: 'Shower:' },
        val: { it: 'Box doccia cristallo extralarge', de: 'Große Glasdusche', en: 'Extra-large glass shower' }
      },
      spec2: {
        label: { it: 'Finestra:', de: 'Fenster:', en: 'Window:' },
        val: { it: 'Finestrato con luce solare', de: 'Tageslichtfenster', en: 'Scenic daylight window' }
      },
      spec3: {
        label: { it: 'Dotazioni:', de: 'Sanitär:', en: 'Fixtures:' },
        val: { it: 'Bidet, asciugacapelli, termoarredo', de: 'Bidet, Föhn, Handtuchwärmer', en: 'Bidet, hair dryer, heated rack' }
      },
      items: [
        { icon: 'shower', it: 'Box doccia extralarge in cristallo', de: 'Extragroße Glas-Duschkabine', en: 'Extra-large tempered glass shower cabin' },
        { icon: 'window', it: 'Finestra panoramica con luce naturale', de: 'Großes Tageslichtfenster mit Bergblick', en: 'Scenic window with daylight and airflow' },
        { icon: 'mirror', it: 'Mobile lavabo con specchio illuminato', de: 'Waschtisch mit beleuchtetem Spiegel', en: 'Vanity sink with lighted mirror' },
        { icon: 'bidet', it: 'Bidet & sanitari sospesi in ceramica', de: 'Keramik-Bidet & Hänge-WC', en: 'Ceramic bidet & wall-hung toilet' },
        { icon: 'hairdryer', it: 'Asciugacapelli a parete 2000W', de: 'Leistungsstarker Wandhaartrockner', en: 'High-power wall-mounted hair dryer' },
        { icon: 'towels', it: 'Termoarredo & set asciugamani morbido', de: 'Handtuchwärmer & flauschiges Set', en: 'Heated towel rack & plush towels' }
      ],
      img: 'assets/images/Bagno.jpg',
      photos: ['assets/images/Bagno.jpg'],
      photoLabels: [
        { it: 'Maxi Doccia & Sanitari', de: 'Dusche & Waschtisch', en: 'Shower & Vanity' }
      ],
      tagPos: { top: '8%', left: '58%' },
      tagStat1: { it: 'Doccia cristallo maxi', de: 'Maxi Glasdusche', en: 'Maxi glass shower' },
      tagStat2: { it: 'Finestrato con bidet', de: 'Tageslicht & Bidet', en: 'Daylight & bidet' }
    },
    {
      id: 'pin-7',
      num: '07',
      sqm: '8 m²',
      zoneId: 'night',
      zone: {
        it: 'Zona Notte & Servizi',
        de: 'Ankleide',
        en: 'Wardrobe & Storage'
      },
      badge: {
        it: '07 • ZONA NOTTE • CABINA ARMADIO',
        de: '07 • ANKLEIDEZIMMER • SCHRANK',
        en: '07 • STORAGE • WALK-IN CLOSET'
      },
      pill: {
        it: '7. Cabina Armadio',
        de: '7. Ankleidezimmer',
        en: '7. Walk-in Closet'
      },
      name: {
        it: 'Cabina Armadio',
        de: 'Ankleidezimmer',
        en: 'Walk-in Closet'
      },
      desc: {
        it: 'Stanza guardaroba separata con specchiera intera, cassettiere modulari e stand appendiabiti.',
        de: 'Separates Ankleidezimmer mit Ganzkörperspiegel, Kommoden und Kleiderstangen.',
        en: 'Separate walk-in closet with full-length mirror, modular drawers, and clothing racks.'
      },
      orientation: {
        it: 'Interna riservata • Accesso immediato a entrambe le camere',
        de: 'Ruhige Innenlage • Angrenzend an beide Zimmer',
        en: 'Quiet internal layout • Adjacent to both bedrooms'
      },
      dataTooltip: {
        it: '07 • Cabina Armadio',
        de: '07 • Ankleidezimmer',
        en: '07 • Walk-in Closet'
      },
      spec1: {
        label: { it: 'Spazio:', de: 'Raum:', en: 'Room:' },
        val: { it: 'Stanza guardaroba dedicata walk-in', de: 'Separates Ankleidezimmer', en: 'Dedicated walk-in dressing room' }
      },
      spec2: {
        label: { it: 'Arredo:', de: 'Ausstattung:', en: 'Storage:' },
        val: { it: 'Specchiera, cassettiere, stand abiti', de: 'Spiegel, Kommoden, Kleiderstangen', en: 'Mirror, drawers, hanging racks' }
      },
      spec3: {
        label: { it: 'Posizione:', de: 'Lage:', en: 'Position:' },
        val: { it: 'Adiacente alle camere da letto', de: 'Angrenzend an die Zimmer', en: 'Adjacent to both bedrooms' }
      },
      items: [
        { icon: 'wardrobe', it: 'Stanza guardaroba walk-in separata', de: 'Separates begehbares Ankleidezimmer', en: 'Separate walk-in wardrobe room' },
        { icon: 'mirror', it: 'Specchiera a figura intera', de: 'Großer Ganzkörperspiegel', en: 'Full-length dressing mirror' },
        { icon: 'chest', it: 'Cassettiere & ripiani modulari', de: 'Modulare Schubladen & Regale', en: 'Modular drawer chests & shelves' },
        { icon: 'hanger', it: 'Stand appendiabiti con grucce', de: 'Kleiderstangen mit reichlich Bügeln', en: 'Garment racks with sturdy hangers' },
        { icon: 'luggage', it: 'Vano per valigie grandi & trolley', de: 'Platz für Koffer & Reisetaschen', en: 'Spacious luggage area for suitcases' },
        { icon: 'gear', it: 'Deposito per attrezzatura outdoor & sport', de: 'Stauraum für Sportausrüstung', en: 'Storage space for outdoor sport gear' }
      ],
      img: 'assets/images/Deposito.jpg',
      photos: ['assets/images/Deposito.jpg'],
      photoLabels: [
        { it: 'Guardaroba & Cassettiere', de: 'Ankleide & Kommoden', en: 'Wardrobe & Drawers' }
      ],
      tagPos: { top: '8%', left: '42%' },
      tagStat1: { it: 'Cabina armadio walk-in', de: 'Begehbarer Schrank', en: 'Walk-in dressing room' },
      tagStat2: { it: 'Cassettiere & specchiera', de: 'Kommoden & Spiegel', en: 'Drawers & mirror' }
    },
    {
      id: 'pin-8',
      num: '08',
      sqm: '70 m²',
      zoneId: 'terrace',
      zone: {
        it: 'Solarium Panoramico',
        de: 'Panorama-Südterrasse',
        en: 'Panoramic Solarium'
      },
      badge: {
        it: '08 • OUTDOOR • TERRAZZA SOLARIUM (70 M²)',
        de: '08 • OUTDOOR • SÜDTERRASSE (70 M²)',
        en: '08 • OUTDOOR • SOUTH TERRACE (70 SQM)'
      },
      pill: {
        it: '8. Terrazza Solarium',
        de: '8. Südterrasse',
        en: '8. Sun Terrace'
      },
      name: {
        it: 'Terrazza Solarium',
        de: 'Südterrasse',
        en: 'Sun Terrace'
      },
      desc: {
        it: '70 m² a sud con pergolato di viti, gazebo con tavolo per 6, barbecue a gas e vista sul Castello di Arco.',
        de: '70 m² Südterrasse mit Weinpergola, Pavillon mit Tisch für 6, Gasgrill und Blick auf Burg Arco.',
        en: '70 sqm south terrace with grape arbor, gazebo with table for 6, gas BBQ, and Arco Castle view.'
      },
      orientation: {
        it: 'Pieno Sud a 360° • Vista Castello di Arco, ulivi e montagne',
        de: 'Reine Südlage 360° • Blick auf Burg Arco, Oliven & Berge',
        en: 'Full 360° South • Arco Castle, olive groves & peaks'
      },
      dataTooltip: {
        it: '08 • Terrazza Solarium',
        de: '08 • Südterrasse',
        en: '08 • Sun Terrace'
      },
      spec1: {
        label: { it: 'Superficie:', de: 'Fläche:', en: 'Area:' },
        val: { it: '70 m² esposti a pieno sud', de: '70 m² reine Südlage', en: '70 sqm full south orientation' }
      },
      spec2: {
        label: { it: 'Outdoor:', de: 'Outdoor:', en: 'Outdoor:' },
        val: { it: 'Gazebo, tavolo pranzo 6, BBQ gas', de: 'Pavillon, Tisch für 6, Gasgrill', en: 'Gazebo, 6-seat table, gas BBQ' }
      },
      spec3: {
        label: { it: 'Vista:', de: 'Aussicht:', en: 'Vista:' },
        val: { it: 'Vista aperta sul Castello di Arco e monti', de: 'Blick auf Burg Arco & Berge', en: 'Open views of Arco Castle & peaks' }
      },
      items: [
        { icon: 'terrace', it: '70 m² di terrazza privata in pietra a sud', de: '70 m² Naturstein-Südterrasse', en: '70 sqm private stone south terrace' },
        { icon: 'gazebo', it: 'Gazebo con tavolo da pranzo per 6', de: 'Gartenpavillon mit Esstisch für 6', en: 'Shaded gazebo with 6-seat dining table' },
        { icon: 'bbq', it: 'Barbecue a gas esterno professionale', de: 'Professioneller Outdoor-Gasgrill', en: 'Professional outdoor gas grill' },
        { icon: 'pergola', it: 'Pergolato naturale di viti con ombra', de: 'Natürliche Weinpergola', en: 'Natural grape arbor offering shade' },
        { icon: 'sunbed', it: 'Lettini prendisole reclinabili', de: 'Verstellbare Sonnenliegen', en: 'Adjustable sun loungers' },
        { icon: 'castle', it: 'Vista panoramica sul Castello di Arco', de: 'Panoramablick auf Burg Arco', en: 'Panoramic Arco Castle views' },
        { icon: 'lamp', it: 'Illuminazione serale & prese esterne', de: 'Abendbeleuchtung & Außensteckdosen', en: 'Evening lighting & outdoor outlets' },
        { icon: 'plant', it: 'Piante mediterranee & vasi in terracotta', de: 'Mediterrane Pflanzen & Terrakotta', en: 'Mediterranean plants & terracotta pots' }
      ],
      img: 'assets/images/Terrace 1.jpg',
      photos: ['assets/images/Terrace 1.jpg', 'assets/images/Terrace 2.jpg', 'assets/images/Terrace 3.jpg'],
      photoCaptions: [
        {
          it: 'Pieno Sud • Pergolato naturale di viti con gazebo e tavolo da pranzo per 6',
          de: 'Reine Südlage • Schattige Weinpergola mit Pavillon und Esstisch für 6',
          en: 'Full South • Shaded grape arbor with gazebo and 6-seat dining table'
        },
        {
          it: 'Pieno Sud • Solarium panoramico con lettini prendisole e vista Castello',
          de: 'Reine Südlage • Privates Sonnendeck mit Liegen und Blick auf die Burg',
          en: 'Full South • Panoramic sun deck with loungers and castle views'
        },
        {
          it: 'Pieno Sud • Barbecue a gas professionale e atmosfera per cene all’aperto',
          de: 'Reine Südlage • Professioneller Gasgrill und Ambiente für Sommerabende',
          en: 'Full South • Professional gas BBQ and evening outdoor dining ambiance'
        }
      ],
      tagPos: { top: '56%', left: '32%' },
      tagStat1: { it: '70 m² esposti a sud', de: '70 m² Südlage', en: '70 sqm south-facing' },
      tagStat2: { it: 'Gazebo & barbecue gas', de: 'Pavillon & Gasgrill', en: 'Gazebo & gas BBQ' }
    }
  ];

  let currentSpaceIndex = 0;
  let currentLang = localStorage.getItem('site_lang') || 'it';

  // DOM Elements
  const heroShowcaseImg = document.getElementById('hero-showcase-img');
  const showcaseTitle = document.getElementById('showcase-title');
  const showcaseNum = document.getElementById('showcase-num');
  const showcaseDesc = document.getElementById('showcase-desc');
  const photoOrientationTag = document.getElementById('photo-orientation-tag');
  const showcaseItemsCountBadge = document.getElementById('showcase-items-count-badge');
  const slideIndicator = document.getElementById('slide-indicator');

  const spec1Label = document.getElementById('showcase-spec1-label');
  const spec1Val = document.getElementById('showcase-spec1-val');
  const spec2Label = document.getElementById('showcase-spec2-label');
  const spec2Val = document.getElementById('showcase-spec2-val');
  const spec3Label = document.getElementById('showcase-spec3-label');
  const spec3Val = document.getElementById('showcase-spec3-val');

  const hotspotPins = document.querySelectorAll('.plan-hotspot-pin');
  const roomPills = document.querySelectorAll('.room-pill-btn');
  const zoneTabBtns = document.querySelectorAll('.zone-tab-btn');

  // Photo Gallery & Terrace Rotation State
  let currentTerracePhotoIndex = 0;
  let terraceAutoTimer = null;

  function stopTerraceAutoRotation() {
    if (terraceAutoTimer) {
      clearInterval(terraceAutoTimer);
      terraceAutoTimer = null;
    }
  }

  function startTerraceAutoRotation() {
    stopTerraceAutoRotation();
    if (currentSpaceIndex === 7) {
      terraceAutoTimer = setInterval(() => {
        nextSlide(true);
      }, 4800);
    }
  }

  function renderTerraceDots(activeIdx) {
    const dotsContainer = document.getElementById('terrace-slide-dots');
    if (!dotsContainer) return;
    if (currentSpaceIndex !== 7) {
      dotsContainer.classList.add('hidden');
      dotsContainer.innerHTML = '';
      return;
    }
    dotsContainer.classList.remove('hidden');
    dotsContainer.innerHTML = '';
    const terracePhotos = (spaces[7] && spaces[7].photos) || [];
    terracePhotos.forEach((_, pIdx) => {
      const dot = document.createElement('button');
      dot.className = `photo-stage-dot ${pIdx === activeIdx ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Foto Terrazza ${pIdx + 1} di ${terracePhotos.length}`);
      dot.setAttribute('title', `Foto ${pIdx + 1} di ${terracePhotos.length}`);
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        stopTerraceAutoRotation();
        setTerracePhoto(pIdx);
      });
      dotsContainer.appendChild(dot);
    });
  }

  function setTerracePhoto(photoIdx) {
    currentTerracePhotoIndex = photoIdx;
    const terraceSpace = spaces[7];
    if (!terraceSpace || !terraceSpace.photos) return;
    const photoSrc = terraceSpace.photos[photoIdx];

    if (heroShowcaseImg) {
      heroShowcaseImg.style.opacity = '0.35';
      heroShowcaseImg.style.transform = 'scale(0.98)';
      setTimeout(() => {
        heroShowcaseImg.src = photoSrc;
        heroShowcaseImg.alt = `${terraceSpace.name[currentLang] || terraceSpace.name.it} (${photoIdx + 1}/3)`;
        heroShowcaseImg.style.opacity = '1';
        heroShowcaseImg.style.transform = 'scale(1)';
      }, 130);
    }

    if (slideIndicator) {
      slideIndicator.textContent = `08 / 08 • ${photoIdx + 1}/3`;
    }

    if (photoOrientationTag && terraceSpace.photoCaptions && terraceSpace.photoCaptions[photoIdx]) {
      photoOrientationTag.textContent = terraceSpace.photoCaptions[photoIdx][currentLang] || terraceSpace.photoCaptions[photoIdx].it;
    }

    renderTerraceDots(photoIdx);
  }

  function nextSlide(isAuto = false) {
    if (currentSpaceIndex === 7) {
      const terracePhotosCount = (spaces[7].photos || []).length;
      if (currentTerracePhotoIndex < terracePhotosCount - 1) {
        setTerracePhoto(currentTerracePhotoIndex + 1);
        return;
      } else {
        if (isAuto) {
          setTerracePhoto(0);
          return;
        }
        currentTerracePhotoIndex = 0;
        selectSpace(0);
        return;
      }
    } else {
      const nextIdx = currentSpaceIndex + 1;
      if (nextIdx === 7) {
        currentTerracePhotoIndex = 0;
      }
      selectSpace(nextIdx);
    }
  }

  function prevSlide() {
    if (currentSpaceIndex === 7) {
      if (currentTerracePhotoIndex > 0) {
        setTerracePhoto(currentTerracePhotoIndex - 1);
        return;
      } else {
        selectSpace(6);
        return;
      }
    } else if (currentSpaceIndex === 0) {
      currentTerracePhotoIndex = ((spaces[7] && spaces[7].photos) || []).length - 1;
      selectSpace(7);
      return;
    } else {
      selectSpace(currentSpaceIndex - 1);
    }
  }

  function selectSpace(index) {
    if (index < 0 || index >= spaces.length) return;
    currentSpaceIndex = index;
    const space = spaces[index];

    // 1. Update Showcase Photo & Slide Indicator
    if (index !== 7) {
      currentTerracePhotoIndex = 0;
      stopTerraceAutoRotation();
      renderTerraceDots(-1);

      const photoSrc = (space.photos && space.photos[0]) || space.img;
      if (heroShowcaseImg) {
        heroShowcaseImg.style.opacity = '0.35';
        heroShowcaseImg.style.transform = 'scale(0.98)';
        setTimeout(() => {
          heroShowcaseImg.src = photoSrc;
          heroShowcaseImg.alt = space.name[currentLang] || space.name.it;
          heroShowcaseImg.style.opacity = '1';
          heroShowcaseImg.style.transform = 'scale(1)';
        }, 130);
      }

      if (slideIndicator) slideIndicator.textContent = `${space.num} / 08`;
      if (photoOrientationTag && space.orientation) {
        photoOrientationTag.textContent = space.orientation[currentLang] || space.orientation.it;
      }
    } else {
      // Room 8: Terrazza (has 3 rotating photos)
      setTerracePhoto(currentTerracePhotoIndex);
      startTerraceAutoRotation();
    }

    // 2. Update Details & Titles
    if (showcaseTitle) showcaseTitle.textContent = space.name[currentLang] || space.name.it;
    if (showcaseNum) showcaseNum.textContent = space.num;
    if (showcaseDesc) showcaseDesc.textContent = space.desc[currentLang] || space.desc.it;
    if (photoOrientationTag && space.orientation && index !== 7) {
      photoOrientationTag.textContent = space.orientation[currentLang] || space.orientation.it;
    }
    if (slideIndicator && index !== 7) slideIndicator.textContent = `${space.num} / 08`;

    // 2b. Items Count Badge
    if (showcaseItemsCountBadge && space.items) {
      let countText = `${space.items.length} dotazioni`;
      if (currentLang === 'de') countText = `${space.items.length} Merkmale`;
      if (currentLang === 'en') countText = `${space.items.length} amenities`;
      showcaseItemsCountBadge.textContent = countText;
    }

    // 3. Update Architectural Specs Pills
    if (spec1Label && spec1Val) {
      spec1Label.textContent = space.spec1.label[currentLang] || space.spec1.label.it;
      spec1Val.textContent = space.spec1.val[currentLang] || space.spec1.val.it;
    }
    if (spec2Label && spec2Val) {
      spec2Label.textContent = space.spec2.label[currentLang] || space.spec2.label.it;
      spec2Val.textContent = space.spec2.val[currentLang] || space.spec2.val.it;
    }
    if (spec3Label && spec3Val) {
      spec3Label.textContent = space.spec3.label[currentLang] || space.spec3.label.it;
      spec3Val.textContent = space.spec3.val[currentLang] || space.spec3.val.it;
    }

    // 3b. Helper: Booking.com style dedicated semantic SVG icons
    function getAmenitySvg(icon, text = '') {
      const t = (text || '').toLowerCase();
      const ic = icon || '';

      if (ic === 'wifi' || t.includes('wi-fi') || t.includes('wifi')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>';
      }
      if (ic === 'tv' || t.includes('tv') || t.includes('television')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="13" rx="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>';
      }
      if (ic === 'coffee' || t.includes('caffè') || t.includes('kaffee') || t.includes('coffee') || t.includes('nespresso')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>';
      }
      if (ic === 'stove' || t.includes('stufa') || t.includes('kamin') || t.includes('wood stove')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>';
      }
      if (ic === 'dishwasher' || t.includes('lavastoviglie') || t.includes('geschirrspüler') || t.includes('dishwasher')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="8" cy="7" r="1"></circle><circle cx="12" cy="7" r="1"></circle><circle cx="16" cy="7" r="1"></circle><line x1="3" y1="11" x2="21" y2="11"></line><circle cx="12" cy="16" r="3"></circle></svg>';
      }
      if (ic === 'fridge' || t.includes('frigo') || t.includes('kühlschrank') || t.includes('fridge')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"></rect><line x1="5" y1="10" x2="19" y2="10"></line><line x1="9" y1="6" x2="9" y2="8"></line><line x1="9" y1="14" x2="9" y2="17"></line></svg>';
      }
      if (ic === 'cooktop' || t.includes('piano cottura') || t.includes('gaskochfeld') || t.includes('cooktop')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"></circle><circle cx="12" cy="12" r="3"></circle><line x1="12" y1="2" x2="12" y2="4"></line><line x1="12" y1="20" x2="12" y2="22"></line><line x1="2" y1="12" x2="4" y2="12"></line><line x1="20" y1="12" x2="22" y2="12"></line></svg>';
      }
      if (ic === 'oven' || t.includes('forno') || t.includes('backofen') || t.includes('oven')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><circle cx="6" cy="6" r="1"></circle><circle cx="10" cy="6" r="1"></circle><circle cx="14" cy="6" r="1"></circle><rect x="6" y="12" width="12" height="6" rx="1"></rect></svg>';
      }
      if (ic === 'shower' || t.includes('doccia') || t.includes('dusche') || t.includes('shower')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h7a4 4 0 0 1 4 4v12"></path><path d="M11 8l4-4"></path><path d="M15 12h.01"></path><path d="M15 16h.01"></path><path d="M19 14h.01"></path><path d="M19 18h.01"></path></svg>';
      }
      if (ic === 'bed' || t.includes('letto') || t.includes('bett') || t.includes('bed')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v4"></path></svg>';
      }
      if (ic === 'sofa' || t.includes('divano') || t.includes('sofa') || t.includes('couch')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 9V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2"></path><path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></path><path d="M4 18v2"></path><path d="M20 18v2"></path></svg>';
      }
      if (ic === 'dining' || t.includes('tavolo da pranzo') || t.includes('esstisch') || t.includes('dining table')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"></rect><line x1="6" y1="12" x2="6" y2="20"></line><line x1="18" y1="12" x2="18" y2="20"></line><line x1="4" y1="4" x2="4" y2="8"></line><line x1="20" y1="4" x2="20" y2="8"></line></svg>';
      }
      if (ic === 'chair' || t.includes('poltroncine') || t.includes('dondolo') || t.includes('stühle') || t.includes('chair')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path><path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path><path d="M5 18v3"></path><path d="M19 18v3"></path></svg>';
      }
      if (ic === 'bbq' || t.includes('barbecue') || t.includes('bbq') || t.includes('gasgrill')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="9" x2="21" y2="9"></line><path d="M5 9a7 7 0 0 0 14 0"></path><line x1="7" y1="16" x2="5" y2="21"></line><line x1="17" y1="16" x2="19" y2="21"></line><circle cx="12" cy="5" r="2"></circle></svg>';
      }
      if (ic === 'sunbed' || t.includes('lettini') || t.includes('sonnenliegen') || t.includes('loungers')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18h18"></path><path d="M4 14l5-9h6l5 9"></path><line x1="6" y1="18" x2="6" y2="21"></line><line x1="18" y1="18" x2="18" y2="21"></line></svg>';
      }
      if (ic === 'fan' || t.includes('ventilatore') || t.includes('deckenventilator') || t.includes('fan')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12c-2.5-4-5-4-5-1s2.5 4 5 1z"></path><path d="M12 12c4-2.5 4-5 1-5s-4 2.5-1 5z"></path><path d="M12 12c2.5 4 5 4 5 1s-2.5-4-5-1z"></path><path d="M12 12c-4 2.5-4 5-1 5s4-2.5 1-5z"></path><circle cx="12" cy="12" r="2"></circle></svg>';
      }
      if (ic === 'mirror' || t.includes('specchio') || t.includes('spiegel') || t.includes('mirror') || t.includes('lavabo')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="7"></circle><path d="M12 17v4"></path><path d="M8 21h8"></path></svg>';
      }
      if (ic === 'bidet' || t.includes('bidet') || t.includes('sanitari')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 12h10a4 4 0 0 1-4 4H11a4 4 0 0 1-4-4z"></path><path d="M9 16v4"></path><path d="M15 16v4"></path><path d="M12 4v4"></path></svg>';
      }
      if (ic === 'hairdryer' || t.includes('asciugacapelli') || t.includes('föhn') || t.includes('hair dryer')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8h4a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-4"></path><circle cx="9" cy="11" r="5"></circle><path d="M9 16l3 5"></path></svg>';
      }
      if (ic === 'towels' || t.includes('asciugamani') || t.includes('handtuch') || t.includes('towel') || t.includes('termoarredo')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="5" rx="1"></rect><rect x="6" y="9" width="12" height="5" rx="1"></rect><rect x="8" y="14" width="8" height="6" rx="1"></rect></svg>';
      }
      if (ic === 'wardrobe' || ic === 'hanger' || t.includes('guardaroba') || t.includes('appendiabiti') || t.includes('kleider') || t.includes('wardrobe')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a2 2 0 0 0-2 2c0 .74.4 1.38 1 1.72V8L3 14a1 1 0 0 0 .5 1.73H20.5A1 1 0 0 0 21 14l-8-6V6.72A2 2 0 0 0 12 3z"></path></svg>';
      }
      if (ic === 'luggage' || t.includes('valigie') || t.includes('koffer') || t.includes('luggage')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="7" width="16" height="14" rx="2"></rect><path d="M8 7V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>';
      }
      if (ic === 'pergola' || ic === 'gazebo' || t.includes('pergolato') || t.includes('gazebo') || t.includes('pavillon')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-6 9 6"></path><line x1="4" y1="9" x2="4" y2="20"></line><line x1="20" y1="9" x2="20" y2="20"></line><line x1="12" y1="9" x2="12" y2="20"></line><line x1="2" y1="20" x2="22" y2="20"></line></svg>';
      }
      if (ic === 'castle' || t.includes('castello') || t.includes('burg') || t.includes('panorama') || t.includes('vista')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>';
      }
      if (ic === 'terrace' || t.includes('terrazza') || t.includes('terrasse') || t.includes('terrace')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
      }
      if (ic === 'heating' || t.includes('riscaldamento') || t.includes('heizung') || t.includes('heating')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg>';
      }
      if (ic === 'lamp' || t.includes('lampad') || t.includes('leuchte') || t.includes('lamp')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="21" x2="15" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line><path d="M7 17h10l-2-10H9L7 17z"></path></svg>';
      }
      if (ic === 'wine' || t.includes('vino') || t.includes('wein') || t.includes('wine') || t.includes('calici')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 22h8"></path><path d="M12 15v7"></path><path d="M6 3h12a6 6 0 0 1-6 8 6 6 0 0 1-6-8z"></path></svg>';
      }
      if (ic === 'dvd' || t.includes('dvd') || t.includes('musica') || t.includes('cd')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>';
      }
      if (ic === 'bar' || t.includes('snack bar') || t.includes('bartheke') || t.includes('sgabelli')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8"></path><path d="M12 15v6"></path><path d="M5 3l7 8 7-8z"></path></svg>';
      }
      if (ic === 'curtain' || t.includes('tende') || t.includes('vorhänge') || t.includes('drapes')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"></rect><line x1="3" y1="8" x2="21" y2="8"></line><line x1="3" y1="13" x2="21" y2="13"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
      }
      if (ic === 'plug' || t.includes('prese') || t.includes('steckdosen') || t.includes('outlets')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><line x1="9" y1="10" x2="9" y2="14"></line><line x1="15" y1="10" x2="15" y2="14"></line></svg>';
      }
      if (ic === 'kettle' || t.includes('bollitore') || t.includes('tostapane') || t.includes('kettle')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 10h12v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V10z"></path><path d="M6 13H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3"></path><path d="M10 3h4"></path><path d="M12 3v7"></path></svg>';
      }
      if (ic === 'kitchenware' || t.includes('stoviglie') || t.includes('geschirr') || t.includes('cookware')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2v20"></path><path d="M18 2a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3"></path><path d="M6 2v6a3 3 0 0 0 3 3v11"></path><path d="M10 2v6"></path><path d="M2 2v6a3 3 0 0 0 3 3"></path></svg>';
      }
      if (ic === 'gear' || t.includes('deposito') || t.includes('outdoor') || t.includes('sport')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2z"></path><path d="M9 7V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3"></path></svg>';
      }
      if (ic === 'window' || t.includes('finestra') || t.includes('fenster') || t.includes('window')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="3" y1="12" x2="21" y2="12"></line><line x1="12" y1="3" x2="12" y2="21"></line></svg>';
      }
      if (ic === 'plant' || t.includes('piant') || t.includes('pflanzen') || t.includes('terracotta')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-9"></path><path d="M12 13c-3-2-5-6-4-10 4 0 7 3 4 10z"></path><path d="M12 17c3-2 5-5 4-8-4 0-6 2-4 8z"></path></svg>';
      }
      if (ic === 'mattress' || t.includes('materasso') || t.includes('matratze')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 11h20v6H2z"></path><path d="M4 11V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></path></svg>';
      }
      if (ic === 'linens' || t.includes('biancheria') || t.includes('bettwäsche') || t.includes('piumini')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="12" rx="2"></rect><line x1="3" y1="12" x2="21" y2="12"></line></svg>';
      }
      if (ic === 'chest' || t.includes('cassettier') || t.includes('kommode')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><line x1="4" y1="10" x2="20" y2="10"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="11" y1="7" x2="13" y2="7"></line><line x1="11" y1="12.5" x2="13" y2="12.5"></line><line x1="11" y1="17.5" x2="13" y2="17.5"></line></svg>';
      }
      if (ic === 'layout' || t.includes('open space') || t.includes('layout')) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>';
      }
      return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
    }

    // 3b. Render Room Inventory Items ("Booking.com style")
    const itemsContainer = document.getElementById('showcase-items-list');
    if (itemsContainer && space.items) {
      itemsContainer.innerHTML = '';
      space.items.forEach((item, itemIdx) => {
        const itemText = item[currentLang] || item.it;
        const iconSvg = getAmenitySvg(item.icon, itemText);
        const chip = document.createElement('div');
        chip.className = 'room-item-chip';
        chip.style.animationDelay = `${itemIdx * 25}ms`;
        chip.innerHTML = `
          <span class="booking-amenity-icon" aria-hidden="true">
            ${iconSvg}
          </span>
          <span class="room-item-text">${itemText}</span>
        `;
        itemsContainer.appendChild(chip);
      });
    }

    // 4. Update Hotspot Pins on Planimetria.jpg & sync tooltip language
    hotspotPins.forEach(pin => {
      const pinIdx = parseInt(pin.getAttribute('data-index'), 10);
      if (spaces[pinIdx] && spaces[pinIdx].dataTooltip) {
        const tooltipStr = spaces[pinIdx].dataTooltip[currentLang] || spaces[pinIdx].dataTooltip.it;
        pin.setAttribute('data-tooltip', tooltipStr);
        pin.setAttribute('title', tooltipStr);
      }
      if (pinIdx === index) {
        pin.classList.add('active');
      } else {
        pin.classList.remove('active');
      }
    });

    // 6. Update Room Pills
    roomPills.forEach(pill => {
      const pillIdx = parseInt(pill.getAttribute('data-index'), 10);
      if (pillIdx === index) {
        pill.classList.add('active');
        try {
          pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } catch (_) {}
      } else {
        pill.classList.remove('active');
      }
    });

    // 7. Update Macro-Zone Tabs Active State
    if (zoneTabBtns) {
      zoneTabBtns.forEach(tab => {
        const zoneType = tab.getAttribute('data-zone');
        if (zoneType === space.zoneId) {
          tab.classList.add('active');
        } else if (zoneType !== 'all') {
          tab.classList.remove('active');
        }
      });
    }
  }

  // Expose selectSpace globally
  window.selectSpace = selectSpace;

  // Hotspot pin click listeners
  hotspotPins.forEach(pin => {
    pin.addEventListener('click', () => {
      const idx = parseInt(pin.getAttribute('data-index'), 10);
      selectSpace(idx);
    });
  });

  // Room pill click listeners
  roomPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const idx = parseInt(pill.getAttribute('data-index'), 10);
      selectSpace(idx);
    });
  });

  // Pill Bar Prev / Next Arrows
  const navPrevBtn = document.getElementById('nav-prev-btn');
  const navNextBtn = document.getElementById('nav-next-btn');

  if (navPrevBtn) {
    navPrevBtn.addEventListener('click', () => {
      const prevIdx = (currentSpaceIndex - 1 + spaces.length) % spaces.length;
      selectSpace(prevIdx);
    });
  }

  if (navNextBtn) {
    navNextBtn.addEventListener('click', () => {
      const nextIdx = (currentSpaceIndex + 1) % spaces.length;
      selectSpace(nextIdx);
    });
  }

  // Macro-Zone Tab click listeners
  if (zoneTabBtns) {
    zoneTabBtns.forEach(tab => {
      tab.addEventListener('click', () => {
        const zone = tab.getAttribute('data-zone');
        zoneTabBtns.forEach(t => t.classList.toggle('active', t === tab));
        if (zone === 'all') {
          // Keep current room or switch to first
          selectSpace(currentSpaceIndex);
        } else if (zone === 'day') {
          selectSpace(0); // Soggiorno
        } else if (zone === 'night') {
          selectSpace(3); // Camera Legno
        } else if (zone === 'terrace') {
          selectSpace(7); // Terrazza
        }
      });
    });
  }

  // Floating Photo Stage Prev / Next Navigation
  const prevBtn = document.getElementById('prev-slide-btn');
  const nextBtn = document.getElementById('next-slide-btn');

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      stopTerraceAutoRotation();
      prevSlide();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      stopTerraceAutoRotation();
      nextSlide();
    });
  }

  // Photo Stage Touch Swipe & Hover Pause
  const photoStageEl = document.querySelector('.space-photo-stage');
  if (photoStageEl) {
    let touchStartX = 0;
    let touchEndX = 0;

    photoStageEl.addEventListener('touchstart', (e) => {
      if (e.changedTouches && e.changedTouches[0]) {
        touchStartX = e.changedTouches[0].screenX;
      }
      stopTerraceAutoRotation();
    }, { passive: true });

    photoStageEl.addEventListener('touchend', (e) => {
      if (e.changedTouches && e.changedTouches[0]) {
        touchEndX = e.changedTouches[0].screenX;
        const diffX = touchEndX - touchStartX;
        if (diffX < -45) {
          nextSlide();
        } else if (diffX > 45) {
          prevSlide();
        }
      }
      if (currentSpaceIndex === 7) {
        startTerraceAutoRotation();
      }
    }, { passive: true });

    photoStageEl.addEventListener('mouseenter', () => {
      stopTerraceAutoRotation();
    });

    photoStageEl.addEventListener('mouseleave', () => {
      if (currentSpaceIndex === 7) {
        startTerraceAutoRotation();
      }
    });
  }

  // Keyboard Navigation: ArrowLeft / ArrowRight to explore photos & spaces
  document.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;
    if (e.key === 'ArrowLeft') {
      stopTerraceAutoRotation();
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      stopTerraceAutoRotation();
      nextSlide();
    }
  });

  // ===================================================================
  // 1b. BOUTIQUE OFF-CANVAS NAVIGATION DRAWER
  // ===================================================================
  const navToggleBtn = document.getElementById('nav-toggle-btn');
  const navDrawer = document.getElementById('nav-drawer');
  const navDrawerBackdrop = document.getElementById('nav-drawer-backdrop');
  const navDrawerClose = document.getElementById('nav-drawer-close');

  function openDrawer() {
    if (!navDrawer) return;
    navDrawer.classList.add('open');
    if (navDrawerBackdrop) navDrawerBackdrop.classList.add('open');
    if (navToggleBtn) {
      navToggleBtn.setAttribute('aria-expanded', 'true');
      navToggleBtn.classList.add('active');
    }
    navDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!navDrawer) return;
    navDrawer.classList.remove('open');
    if (navDrawerBackdrop) navDrawerBackdrop.classList.remove('open');
    if (navToggleBtn) {
      navToggleBtn.setAttribute('aria-expanded', 'false');
      navToggleBtn.classList.remove('active');
    }
    navDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (navToggleBtn) {
    navToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (navDrawer && navDrawer.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (navDrawerClose) {
    navDrawerClose.addEventListener('click', (e) => {
      e.preventDefault();
      closeDrawer();
    });
  }

  if (navDrawerBackdrop) {
    navDrawerBackdrop.addEventListener('click', closeDrawer);
  }

  // Close drawer on clicking any link inside the drawer
  document.querySelectorAll('.drawer-nav-item, #drawer-brand-link, .drawer-cta-link').forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Close drawer on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navDrawer && navDrawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  // ===================================================================
  // 2. HERO VIDEO PLAYER CONTROLS & HUD TIMECODE
  // ===================================================================
  const heroVideo = document.getElementById('hero-apartment-video');

  if (heroVideo) {
    // Browsers allow autoplay when muted
    heroVideo.muted = true;
    heroVideo.play().catch(() => {
      // Autoplay deferred or handled by browser
    });

    // Live Camera Timecode HUD update
    const recTimecodeEl = document.getElementById('rec-live-timecode');
    if (recTimecodeEl) {
      heroVideo.addEventListener('timeupdate', () => {
        const cur = heroVideo.currentTime || 0;
        const hours = Math.floor(cur / 3600);
        const mins = Math.floor((cur % 3600) / 60);
        const secs = Math.floor(cur % 60);
        const frames = Math.floor((cur % 1) * 24);
        const pad = (n) => String(n).padStart(2, '0');
        recTimecodeEl.textContent = `${pad(hours)}:${pad(mins)}:${pad(secs)}:${pad(frames)}`;
      });
    }
  }


  // ===================================================================
  // 2b. LOCATION, ARRIVAL & ACTIVITIES: 2-PAGE INTERACTIVE SYSTEM
  // ===================================================================
  let currentLocationScreen = 0; // 0 = Arrival & Position, 1 = Activities & Distances

  const locScreenData = [
    {
      kicker: {
        it: "Posizione & Arrivo",
        de: "Lage & Anreise",
        en: "Location & Arrival"
      },
      title: {
        it: "Posizione & Come Arrivare",
        de: "Lage & Anreise",
        en: "Location & Getting Here"
      },
      desc: {
        it: "La Terrazza si trova ad Arco (TN) in Via Cima Tofino 2/E, a pochi minuti dal Lago di Garda e dal centro. Arrivo agevole con posto auto in garage privato coperto e comodo ascensore al 2° piano.",
        de: "Das Penthouse liegt in Arco (TN) in der Via Cima Tofino 2/E, wenige Minuten vom Gardasee und vom Zentrum entfernt. Bequeme Anreise mit privatem Tiefgaragenplatz und Aufzug in den 2. Stock.",
        en: "La Terrazza is located in Arco (TN) at Via Cima Tofino 2/E, just minutes from Lake Garda and the historic center. Easy arrival with private underground garage and elevator to the 2nd floor."
      }
    },
    {
      kicker: {
        it: "Dintorni & Distanze",
        de: "Umgebung & Entfernungen",
        en: "Surroundings & Distances"
      },
      title: {
        it: "Distanze dalle Principali Attività",
        de: "Entfernungen zu den wichtigsten Zielen",
        en: "Distances to Main Attractions & Amenities"
      },
      desc: {
        it: "Tutti i servizi essenziali e i punti di interesse sono a portata di mano: supermercati e botteghe a piedi, pista ciclabile pianeggiante per il lago senza auto e centri di Arco, Riva e Torbole a pochi minuti.",
        de: "Alle wichtigen Einrichtungen und Ausflugsziele liegen ganz nah: Supermärkte zu Fuß erreichbar, autofreier Radweg direkt an den Gardasee und Ortskerne von Arco, Riva und Torbole in wenigen Minuten.",
        en: "All daily essentials and key destinations are within easy reach: supermarkets on foot, traffic-free bike path straight to the lake, and town centers of Arco, Riva, and Torbole just minutes away."
      }
    }
  ];

  function updateLocationScreen(index) {
    currentLocationScreen = (index + 2) % 2;

    const screen1 = document.getElementById('loc-screen-1');
    const screen2 = document.getElementById('loc-screen-2');
    const tabArrival = document.getElementById('loc-tab-arrival');
    const tabActivities = document.getElementById('loc-tab-activities');
    const slideIndicator = document.getElementById('loc-slide-indicator');
    const kickerEl = document.getElementById('loc-dynamic-kicker');
    const titleEl = document.getElementById('loc-dynamic-title');
    const descEl = document.getElementById('loc-dynamic-desc');

    const data = locScreenData[currentLocationScreen];

    if (kickerEl && data.kicker) kickerEl.textContent = data.kicker[currentLang] || data.kicker.it;
    if (titleEl && data.title) titleEl.textContent = data.title[currentLang] || data.title.it;
    if (descEl && data.desc) descEl.textContent = data.desc[currentLang] || data.desc.it;

    if (currentLocationScreen === 0) {
      if (screen1) { screen1.classList.remove('hidden'); screen1.classList.add('active'); }
      if (screen2) { screen2.classList.remove('active'); screen2.classList.add('hidden'); }
      if (tabArrival) tabArrival.classList.add('active');
      if (tabActivities) tabActivities.classList.remove('active');
      if (slideIndicator) slideIndicator.textContent = '01 / 02';
    } else {
      if (screen1) { screen1.classList.remove('active'); screen1.classList.add('hidden'); }
      if (screen2) { screen2.classList.remove('hidden'); screen2.classList.add('active'); }
      if (tabArrival) tabArrival.classList.remove('active');
      if (tabActivities) tabActivities.classList.add('active');
      if (slideIndicator) slideIndicator.textContent = '02 / 02';
    }
  }

  const locPrevArrowBtn = document.getElementById('loc-prev-arrow-btn');
  const locNextArrowBtn = document.getElementById('loc-next-arrow-btn');
  const locTabArrival = document.getElementById('loc-tab-arrival');
  const locTabActivities = document.getElementById('loc-tab-activities');

  if (locPrevArrowBtn) {
    locPrevArrowBtn.addEventListener('click', () => updateLocationScreen(currentLocationScreen - 1));
  }
  if (locNextArrowBtn) {
    locNextArrowBtn.addEventListener('click', () => updateLocationScreen(currentLocationScreen + 1));
  }
  if (locTabArrival) {
    locTabArrival.addEventListener('click', () => updateLocationScreen(0));
  }
  if (locTabActivities) {
    locTabActivities.addEventListener('click', () => updateLocationScreen(1));
  }


  // ===================================================================
  // 3. INSTANT PRICE ESTIMATOR (TRANSPARENT & OPTIONAL)
  // ===================================================================
  const estSeason = document.getElementById('est-season');
  const estNights = document.getElementById('est-nights');
  const estGuests = document.getElementById('est-guests');
  const estDog = document.getElementById('est-dog');
  const estTotal = document.getElementById('est-total');
  const estBreakdownStayLabel = document.getElementById('est-breakdown-stay-label');
  const estBreakdownStayVal = document.getElementById('est-breakdown-stay-val');
  const estBreakdownCleanVal = document.getElementById('est-breakdown-clean-val');
  const estBreakdownTaxLabel = document.getElementById('est-breakdown-tax-label');
  const estBreakdownTaxVal = document.getElementById('est-breakdown-tax-val');
  const estBreakdownDogRow = document.getElementById('est-breakdown-dog-row');
  const estBreakdownDogVal = document.getElementById('est-breakdown-dog-val');
  const btnApplyEstimate = document.getElementById('btn-apply-estimate');

  function updateEstimate() {
    if (!estSeason || !estNights || !estGuests || !estTotal) return;

    const season = estSeason.value;
    const nights = Math.max(3, parseInt(estNights.value, 10) || 3);
    const guests = parseInt(estGuests.value, 10) || 2;
    const hasDog = estDog ? estDog.checked : false;

    let dailyRate = 85;
    let seasonLabel = "Inverno & Bassa Stagione";
    if (season === 'winter') {
      dailyRate = guests <= 2 ? 85 : 115;
      seasonLabel = currentLang === 'de' ? 'Winter / Nebensaison' : (currentLang === 'en' ? 'Winter / Low Season' : 'Inverno & Bassa Stagione');
    } else if (season === 'mid') {
      dailyRate = guests <= 2 ? 90 : 120;
      seasonLabel = currentLang === 'de' ? 'Zwischensaison (Frühling/Herbst)' : (currentLang === 'en' ? 'Mid Season (Spring/Autumn)' : 'Media Stagione (Primavera/Autunno)');
    } else if (season === 'high') {
      dailyRate = guests <= 2 ? 98 : 138;
      seasonLabel = currentLang === 'de' ? 'Hauptsaison & Sommer' : (currentLang === 'en' ? 'High Season & Summer' : 'Alta Stagione & Estate');
    }

    const stayBase = dailyRate * nights;
    const cleaningFee = guests <= 2 ? 60 : 70;
    const dogFee = hasDog ? 20 : 0;
    const touristTax = nights * (guests * 1); // 1.00 € / persona / notte
    const total = stayBase + cleaningFee + dogFee + touristTax;

    if (estBreakdownStayLabel) {
      if (currentLang === 'de') {
        estBreakdownStayLabel.textContent = `Grundpreis (${nights} Nächte à ${dailyRate} €):`;
      } else if (currentLang === 'en') {
        estBreakdownStayLabel.textContent = `Base stay (${nights} nights @ ${dailyRate} €):`;
      } else {
        estBreakdownStayLabel.textContent = `Soggiorno base (${nights} notti a ${dailyRate} €):`;
      }
    }
    if (estBreakdownStayVal) estBreakdownStayVal.textContent = `€ ${stayBase.toLocaleString()}`;
    if (estBreakdownCleanVal) estBreakdownCleanVal.textContent = `€ ${cleaningFee.toLocaleString()}`;
    if (estBreakdownTaxLabel) {
      if (currentLang === 'de') {
        estBreakdownTaxLabel.textContent = `Kurtaxe (${guests} Pers. × ${nights} Nächte):`;
      } else if (currentLang === 'en') {
        estBreakdownTaxLabel.textContent = `Tourist tax (${guests} pers. × ${nights} nights):`;
      } else {
        estBreakdownTaxLabel.textContent = `Tassa di soggiorno (${guests} pers. × ${nights} notti):`;
      }
    }
    if (estBreakdownTaxVal) estBreakdownTaxVal.textContent = `€ ${touristTax.toLocaleString()}`;

    if (estBreakdownDogRow) {
      estBreakdownDogRow.style.display = hasDog ? 'flex' : 'none';
      if (estBreakdownDogVal) estBreakdownDogVal.textContent = '€ 20';
    }

    estTotal.textContent = `€ ${total.toLocaleString()}`;

    // Update dynamic Season Info Strip & Segment Pills
    const seasonInfoTitle = document.getElementById('season-info-title');
    const seasonInfoStay = document.getElementById('season-info-stay');
    const seasonInfoP2 = document.getElementById('season-info-p2');
    const seasonInfoP4 = document.getElementById('season-info-p4');

    if (seasonInfoTitle && seasonInfoStay && seasonInfoP2 && seasonInfoP4) {
      if (season === 'winter') {
        seasonInfoTitle.textContent = currentLang === 'de' ? 'Nebensaison (Nov – März)' : (currentLang === 'en' ? 'Low Season (Nov – Mar)' : 'Bassa Stagione (Nov – Mar)');
        seasonInfoStay.textContent = currentLang === 'de' ? 'Mindestaufenthalt: 3 Nächte' : (currentLang === 'en' ? 'Minimum stay: 3 nights' : 'Soggiorno minimo: 3 notti');
        seasonInfoP2.textContent = '85 € / notte';
        seasonInfoP4.textContent = '115 € / notte';
      } else if (season === 'mid') {
        seasonInfoTitle.textContent = currentLang === 'de' ? 'Zwischensaison (Apr–Juni • Sept–Okt)' : (currentLang === 'en' ? 'Mid Season (Apr–Jun • Sep–Oct)' : 'Media Stagione (Apr–Giu • Set–Ott)');
        seasonInfoStay.textContent = currentLang === 'de' ? 'Mindestaufenthalt: 3 Nächte' : (currentLang === 'en' ? 'Minimum stay: 3 nights' : 'Soggiorno minimo: 3 notti');
        seasonInfoP2.textContent = '90 € / notte';
        seasonInfoP4.textContent = '120 € / notte';
      } else if (season === 'high') {
        seasonInfoTitle.textContent = currentLang === 'de' ? 'Hauptsaison (Juli–Aug & Feiertage)' : (currentLang === 'en' ? 'High Season (Jul–Aug & Holidays)' : 'Alta Stagione (Lug–Ago & Feste)');
        seasonInfoStay.textContent = currentLang === 'de' ? 'Mindestaufenthalt: 7 Nächte' : (currentLang === 'en' ? 'Minimum stay: 7 nights' : 'Soggiorno minimo: 7 notti (estivo)');
        seasonInfoP2.textContent = '98 – 100 € / notte';
        seasonInfoP4.textContent = '138 – 140 € / notte';
      }
    }

    // Sync season pill active states
    document.querySelectorAll('.season-pill-btn').forEach(btn => {
      if (btn.getAttribute('data-season') === season) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update dynamic WhatsApp quote button link
    if (estWaBtn) {
      let waMsg = "";
      if (currentLang === 'de') {
        waMsg = `Hallo Christina! Ich habe ein unverbindliches Angebot für Christina's Penthouse berechnet:\n• Zeitraum: ${seasonLabel}\n• Dauer: ${nights} Nächte für ${guests} Personen${hasDog ? ' (+ 1 Hund)' : ''}\n• Geschätzter Gesamtpreis: €${total} (inkl. Endreinigung, Kurtaxe, Garage & Fahrräder)\n\nIch möchte gerne anfragen, ob diese Termine frei sind.`;
      } else if (currentLang === 'en') {
        waMsg = `Hello Christina! I calculated an estimate for Christina's Penthouse:\n• Season: ${seasonLabel}\n• Duration: ${nights} nights for ${guests} guests${hasDog ? ' (+ 1 dog)' : ''}\n• Estimated total: €${total} (incl. cleaning, tourist tax, garage & bikes)\n\nI would like to check availability for these dates.`;
      } else {
        waMsg = `Buongiorno Christina! Ho calcolato un preventivo per Christina's Penthouse:\n• Periodo: ${seasonLabel}\n• Durata: ${nights} notti per ${guests} persone${hasDog ? ' (+ 1 cane)' : ''}\n• Totale stimato: €${total} (incluse pulizie, tassa di soggiorno, garage e bici)\n\nVorrei verificare le date e la disponibilità effettiva.`;
      }
      estWaBtn.href = `https://wa.me/393803172215?text=${encodeURIComponent(waMsg)}`;
    }
  }

  [estSeason, estNights, estGuests, estDog].forEach(el => {
    if (el) {
      el.addEventListener('input', updateEstimate);
      el.addEventListener('change', updateEstimate);
    }
  });

  if (btnApplyEstimate) {
    btnApplyEstimate.addEventListener('click', () => {
      const nights = Math.max(3, parseInt(estNights.value, 10) || 3);
      const guests = parseInt(estGuests.value, 10) || 2;
      const hasDog = estDog ? estDog.checked : false;
      const total = estTotal ? estTotal.textContent.trim() : '';

      const fnGuests = document.getElementById('fn-guests');
      const fnPet = document.getElementById('fn-pet');
      const fnMsg = document.getElementById('fn-message');
      const fnCheckin = document.getElementById('fn-checkin');

      if (fnGuests) {
        if (guests === 2) fnGuests.value = '2';
        else if (guests === 4) fnGuests.value = '4';
      }
      if (fnPet) {
        fnPet.value = hasDog ? 'yes' : 'no';
      }
      if (fnMsg) {
        let note = `Richiesta basata su preventivo stimato: ${nights} notti per ${guests} persone${hasDog ? ' (con 1 cane)' : ''}. Totale stimato calcolato: ${total}.`;
        if (currentLang === 'de') {
          note = `Anfrage basierend auf Schätzung: ${nights} Nächte für ${guests} Personen${hasDog ? ' (mit Hund)' : ''}. Voraussichtlicher Preis: ${total}.`;
        } else if (currentLang === 'en') {
          note = `Inquiry based on estimate: ${nights} nights for ${guests} guests${hasDog ? ' (with dog)' : ''}. Estimated total: ${total}.`;
        }
        fnMsg.value = note;
      }

      // Smooth scroll to #contact form
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          if (fnCheckin) fnCheckin.focus();
        }, 600);
      }
    });
  }

  // Wire season pill segment buttons to update season in estimator
  document.querySelectorAll('.season-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const season = btn.getAttribute('data-season');
      if (estSeason && season) {
        estSeason.value = season;
        updateEstimate();
      }
    });
  });

  // ===================================================================
  // 4. MULTILINGUAL DICTIONARY & SWITCHER (IT / DE / EN)
  // ===================================================================
  const translations = {
    it: {
      nav_menu_label: "Menu",
      nav_drawer_explore: "Esplora la Dimora",
      nav_penthouse: "La Dimora",
      nav_sub_penthouse: "Vista panoramica & accoglienza",
      nav_spaces: "Planimetria & Ambienti",
      nav_sub_spaces: "140 m² & 8 spazi interattivi",
      nav_rates: "Tariffe & Contatto",
      nav_sub_rates: "Preventivo trasparente & contatto diretto",
      nav_location: "Territorio & Posizione",
      nav_sub_location: "Arco, lago & pista ciclabile",
      nav_drawer_direct_contact: "Contatto Diretto con Christina",
      btn_inquire: "Richiedi Soggiorno",
      btn_inquire_short: "Prenota",
      hero_kicker: "Arco • Garda Trentino",
      hero_h1: "La Terrazza di Christina Stürzer - Attico ad Arco",
      hero_lead: "Luminoso attico di 140 m² con 70 m² di terrazza solarium ad uso esclusivo. Secondo piano con ascensore e garage coperto ad Arco, a pochi minuti dal Lago di Garda.",
      btn_explore_spaces: "Esplora Planimetria",
      btn_inquire_hero: "Richiedi Date",
      hero_live_tour: "Tour Video dal Vivo • 140 m²",
      spaces_kicker: "Planimetria & Spazi",
      spaces_sub_metric: "70 m² Interni + 70 m² Esterni con Terrazza",
      spaces_plan_title: "Planimetria (140 m²)",
      spaces_cardinal_directions: "Nord ↑ • Sud ↓",
      zone_tab_all: "Tutti (1–8)",
      zone_tab_day: "Zona Giorno (1–3)",
      zone_tab_night: "Zona Notte (4–7)",
      zone_tab_terrace: "Terrazza (8)",
      spaces_statement: "Una distribuzione armoniosa pensata per la massima luminosità, comfort e continuità tra interno ed esterno. Clicca sui numeri (<strong>1 – 8</strong>) della planimetria o seleziona le stanze in basso per visualizzare le foto autentiche e i dettagli di ogni ambiente.",
      spaces_video_link: "Guarda Video Tour",
      spaces_room_selected: "Ambiente Selezionato",
      spaces_atmosphere_heading: "L'Atmosfera & I Dettagli",
      spaces_specs_heading: "Specifiche Principali",
      spaces_exclusive_note: "Spazio riservato ad uso esclusivo per gli ospiti di <strong>La Terrazza</strong> (2° Piano con ascensore).",
      spaces_inventory_kicker: "Cosa Trovi in Questa Stanza",
      spaces_inventory_heading: "Dotazioni & Comfort Inclusi:",
      ribbon_interior: "Interni",
      ribbon_total: "Interni",
      ribbon_terrace: "Esterni con Terrazza",
      ribbon_guests: "Posti Letto",
      ribbon_garage_val: "Garage",
      ribbon_bikes: "Coperto & 2 City-Bike",
      ribbon_floor_val: "2° Piano",
      ribbon_floor: "Con Ascensore",
      amenities_kicker: "Comfort & Dotazioni Complete",
      amenities_heading: "Tutto Già Incluso per il Tuo Soggiorno",
      amenities_subheading: "La Terrazza è una dimora curata con amore nei minimi particolari. Non dovrete pensare a nulla: dagli elettrodomestici alla biancheria, dal barbecue a gas sul pergolato alle due biciclette nel garage privato.",
      filter_all: "Tutte le Dotazioni",
      filter_kitchen: "Cucina & Convivialità",
      filter_terrace: "Terrazza & BBQ",
      filter_living: "Salotto & Stufa",
      filter_sleep: "Camere & Bagno",
      filter_mobility: "Garage, Bici & Famiglia",
      amenity_wifi: "Wi-Fi Veloce Gratuito",
      amenity_bikes: "2 Bici a 6 Marce",
      amenity_parking: "Garage Privato & Cantina",
      amenity_stove: "Stufa in Ghisa",
      amenity_bbq: "Barbecue a Gas",
      amenity_elevator: "Ascensore al Piano",
      amenity_pets: "Pet Friendly",
      amenity_kids: "Adatto a Bambini",
      rates_kicker: "Condizioni Chiare",
      rates_title: "Tariffe Stagionali",
      calc_kicker: "Preventivo Rapido",
      calc_heading: "Simulatore Preventivo",
      calc_subheading: "Nessun addebito né vincolo online",
      calc_label_season: "Periodo Stagionale",
      calc_label_nights: "Notti (min. 3)",
      calc_label_guests: "Ospiti",
      calc_label_dog: "Porto un cane (+20€ una tantum)",
      calc_free_services: "Wi-Fi Fibra, Garage & 2 City-Bike:",
      calc_free_badge: "Inclusi Gratis",
      calc_total_label: "Totale Stimato (Tutto Incluso)",
      calc_total_note: "Preventivo trasparente per le date selezionate",
      btn_apply_quote: "Applica Date e Preventivo al Modulo",
      btn_wa_quote: "Chiedi su WhatsApp",
      calc_disclaimer: "Disponibilità e preventivo finale vengono sempre concordati direttamente con Christina.",
      loc_tab_arrival: "Come Arrivare",
      loc_tab_activities: "Attività & Distanze",
      loc_kicker: "Posizione & Arrivo",
      loc_title: "Posizione & Come Arrivare",
      loc_desc: "La Terrazza si trova ad Arco (TN) in Via Cima Tofino 2/E, a pochi minuti dal Lago di Garda e dal centro. Arrivo agevole con posto auto in garage privato coperto e comodo ascensore al 2° piano.",
      loc_car_kicker: "In Auto • A22 del Brennero",
      loc_car_title: "Uscita Rovereto Sud / Lago di Garda Nord",
      loc_car_desc: "Dall'autostrada A22 uscire a Rovereto Sud (a soli 18 km). Seguire la SS240 verso Mori e Riva del Garda, poi imboccare la direzione Arco fino a Via Cima Tofino 2/E.",
      loc_parking_kicker: "Parcheggio Privato Incluso",
      loc_parking_title: "Garage Coperto & Ascensore al 2° Piano",
      loc_parking_desc: "Posto auto riservato in garage interrato con cancello automatico. L'ascensore parte direttamente dal livello garage fino al pianerottolo dell'attico: comodo per bagagli e passeggini.",
      loc_train_kicker: "Treno & Mezzi Pubblici",
      loc_train_title: "Stazione Rovereto FS + Bus a 100 m",
      loc_train_desc: "Stazione FS di Rovereto (linea Milano-Verona-Brennero). Da Rovereto partono frequenti autobus Trentino Trasporti linea 301. La fermata dista appena 100 metri a piedi dall'appartamento.",
      loc_territory_title: "Garda Trentino • Arco, Riva & Torbole",
      loc_territory_sub: "Pista ciclabile protetta fuori casa: lago e centri storici a pochi minuti.",
      loc_explore_map: "Esplora Territorio",
      dist_market_cat: "Spesa & Servizi",
      dist_market_title: "Supermercati & Botteghe",
      dist_market_desc: "Supermercati Lidl, Coop e Poli a soli 400 m (1 min in auto / 3 min in bici). Bottega alimentari, panificio e bar a 100 m a piedi.",
      dist_market_time: "A piedi & in bici",
      dist_lake_cat: "Spiagge & Lido",
      dist_lake_title: "Lago di Garda (Spiagge)",
      dist_lake_desc: "Spiagge balneabili libere e prati lungolago a 3,8 km. 12 min in bici sulla ciclabile protetta lungo il Sarca (senza auto) o 6 min in auto.",
      dist_lake_time: "12 min in bici sulla ciclabile",
      dist_arco_cat: "Borgo Storico",
      dist_arco_title: "Centro Storico di Arco",
      dist_arco_desc: "5 min in bici lungo il fiume o 15 min a piedi. Piazza Collegiata, caffè all'aperto, botteghe storiche e sentiero tra gli ulivi per il Castello.",
      dist_arco_time: "5 min in bici / 15 min a piedi",
      dist_riva_cat: "Città & Porto",
      dist_riva_title: "Centro di Riva del Garda",
      dist_riva_desc: "12 min in bici su ciclabile protetta o 7 min in auto. Centro pedonale, porto turistico, Torre Apponale, ristoranti e battelli del lago.",
      dist_riva_time: "12 min in bici / 7 min auto",
      dist_torbole_cat: "Vela & Surf",
      dist_torbole_title: "Torbole sul Garda",
      dist_torbole_desc: "15 min in bici su ciclabile o 8 min in auto. Capitale di windsurf e vela, spiagge con ciottoli bianchi, scuole surf e bar per aperitivi al tramonto.",
      dist_torbole_time: "15 min in bici su ciclabile",
      dist_bike_cat: "Ciclabile & Roccia",
      dist_bike_title: "Ciclabile Sarca & Falesie",
      dist_bike_desc: "Ciclabile protetta direttamente fuori dal portone (0 m). Famosa falesia del Baone per arrampicata a 800 m a piedi tra gli ulivi di Arco.",
      dist_bike_time: "Fuori dal portone (0 m)",
      contact_kicker: "Nessun Intermediario",
      contact_title: "Contatta Direttamente la Proprietaria",
      contact_intro: "Nessuna commissione di agenzia o portali terzi (risparmi il 15–20% rispetto a Booking e Airbnb). Comunichi direttamente con Christina Stürzer per concordare date, orari, richieste speciali o consigli per la tua vacanza ad Arco e sul Lago di Garda.",
      booking_kicker: "Prenotazione Diretta",
      booking_title: "Tariffe & Prenotazione",
      booking_intro: "Nessuna commissione di agenzia o portali terzi (risparmi il 15–20% rispetto a Booking e Airbnb). Calcola in trasparenza il preventivo per le tue date e mettiti direttamente in contatto con Christina Stürzer per concordare il soggiorno o richiedere informazioni.",
      benefit_1_title: "0% Commissioni Intermediari",
      benefit_1_desc: "Risparmi il 15–20% rispetto a piattaforme come Booking o Airbnb. La tariffa concordata è netta e senza costi di servizio.",
      benefit_2_title: "Accoglienza Personale",
      benefit_2_desc: "Massima disponibilità per check-in flessibili, deposito bagagli e bici nel box coperto, oltre a consigli autentici sul Trentino.",
      benefit_3_title: "Condizioni Trasparenti",
      benefit_3_desc: "Acconto di 150 € con bonifico bancario entro 14 giorni dalla conferma, saldo di persona al check-in. Nessuna sorpresa.",
      host_languages: "Parlo fluentemente <strong>Italiano</strong> e <strong>Tedesco (Deutsch)</strong>",
      btn_whatsapp: "WhatsApp",
      btn_call: "Chiama",
      btn_email: "Email",
      reply_speed_title: "Tempi di risposta rapidi",
      reply_speed_desc: "Rispondo ai messaggi WhatsApp e alle email nell'arco della giornata. Per urgenze o richieste last-minute puoi telefonare direttamente.",
      form_title: "Invia una Richiesta di Date",
      form_subtitle: "Compila con le date desiderate: riceverai la conferma di disponibilità e preventivo personalizzato.",
      label_name: "Nome e Cognome *",
      label_email: "Email *",
      label_checkin: "Check-in *",
      label_checkout: "Check-out *",
      label_guests: "Ospiti *",
      label_phone: "Telefono / WhatsApp (Opzionale)",
      label_pet: "Animali Domestici",
      label_message: "Messaggio o Note Particolari",
      btn_submit_email: "Invia Richiesta Email",
      btn_submit_wa: "Invia via WhatsApp",
      form_reassurance: "I tuoi dati vengono usati esclusivamente per concordare la disponibilità con Christina.",
      booking_direct_perk: "0% commissioni portali • Risparmi il 15–20%",
      booking_best_rate: "Miglior Tariffa",
      nav_reviews_faq: "Recensioni & FAQ",
      nav_sub_reviews_faq: "Esperienze degli ospiti e risposte chiare",
      rf_kicker: "Esperienze & Chiarezza",
      rf_title: "Recensioni",
      rf_subtitle: "Recensioni autentiche certificate dal nostro profilo Google Maps e risposte chiare per il tuo soggiorno ad Arco.",
      rf_google_badge: "Recensioni Google",
      rf_reviews_score: "5.0",
      rf_reviews_scale: "/ 5.0",
      rf_reviews_sub: "Valutazione massima su Google Maps (100% 5 stelle)",
      rf_stat_clean: "5.0 ★ Servizio & Host",
      rf_stat_host: "5.0 ★ Terrazza & Comfort",
      rf_stat_location: "5.0 ★ Posizione & Negozi",
      rf_rev1_time: "2 mesi fa",
      rf_rev1_text: "Casa vacanze fantastica! La proprietaria è stata meravigliosa e tutto è filato liscio! Grazie mille per due splendide settimane di vacanza!",
      rf_rev2_time: "Recente",
      rf_rev2_text: "Completamente attrezzato con una splendida terrazza, in una posizione tranquilla con ottimi negozi nelle vicinanze.",
      rf_verified_gmaps: "✓ Recensione verificata su Google Maps",
      rf_rev1_tag: "2 settimane di vacanza",
      rf_rev2_tag: "Terrazza & Servizi",
      rf_gmaps_cta: "Leggi o lascia una recensione sulla nostra scheda Google",
      rf_open_gmaps: "Apri Google",
      faq_kicker: "Chiarezza Totale",
      faq_heading: "Domande Frequenti",
      faq_q1: "Come funziona la prenotazione e il pagamento?",
      faq_a1: "La prenotazione avviene direttamente con la proprietaria Christina, senza commissioni di agenzia o portali terzi (risparmi il 15–20%). Alla conferma è richiesto un acconto di 150 € con bonifico bancario, mentre il saldo viene versato comodamente di persona al check-in.",
      faq_q2: "Quali sono gli orari di check-in e check-out?",
      faq_a2: "Il check-in è previsto dalle 15:00 in poi, concordabile con massima flessibilità comunicando l'orario di arrivo desiderato. Il check-out è richiesto entro le ore 10:00 per consentire l'accurata pulizia e igienizzazione degli ambienti.",
      faq_q3: "Il garage sotterraneo e le 2 biciclette sono davvero inclusi?",
      faq_a3: "Sì, entrambi sono a tuo uso esclusivo e compresi nella tariffa senza alcun costo aggiuntivo. Il box auto privato e custodito si trova al piano interrato, comodamente collegato all'attico tramite l'ascensore interno.",
      faq_q4: "I cani sono ammessi nell'appartamento?",
      faq_a4: "Sì, accogliamo con piacere 1 cane educato. È previsto solo un supplemento forfettario unico di 20 € per l'intero soggiorno, destinato all'igienizzazione supplementare al termine del soggiorno.",
      faq_q5: "La terrazza di 70 m² è ad uso esclusivo?",
      faq_a5: "Assolutamente sì. La terrazza è al 100% privata ed esclusiva per gli ospiti dell'attico. Dispone di tavolo da pranzo coperto, lettini prendisole e barbecue a gas.",
      faq_q6: "Qual è la politica di cancellazione?",
      faq_a6: "Garantiamo la massima trasparenza e comprensione: in caso di imprevisti comunicati fino a 14 giorni prima della data di arrivo, concordiamo senza problemi il recupero delle date o il rimborso dell'acconto."
    },
    de: {
      nav_menu_label: "Menü",
      nav_drawer_explore: "Die Residenz Erkunden",
      nav_penthouse: "Die Residenz",
      nav_sub_penthouse: "Panoramablick & herzlicher Empfang",
      nav_spaces: "Grundriss & Räume",
      nav_sub_spaces: "140 m² & 8 interaktive Räume",
      nav_rates: "Preise & Kontakt",
      nav_sub_rates: "Transparente Preise & direkter Kontakt",
      nav_location: "Lage & Umgebung",
      nav_sub_location: "Arco, See & Radweg",
      nav_drawer_direct_contact: "Direkter Kontakt zu Christina",
      btn_inquire: "Jetzt Anfragen",
      btn_inquire_short: "Anfragen",
      hero_kicker: "Arco • Gardasee",
      hero_h1: "La Terrazza von Christina Stürzer - Penthouse in Arco",
      hero_lead: "Lichtdurchflutetes 140 m² Penthouse mit 70 m² privater Sonnenterrasse, Aufzug und Tiefgarage in Arco, nur wenige Minuten vom Gardasee entfernt.",
      btn_explore_spaces: "Grundriss erkunden",
      btn_inquire_hero: "Termine anfragen",
      hero_live_tour: "Live-Videorundgang • 140 m²",
      spaces_kicker: "Grundriss & Räume",
      spaces_sub_metric: "70 m² Wohnbereich + 70 m² Außenbereich mit Terrasse",
      spaces_plan_title: "Grundriss (140 m²)",
      spaces_cardinal_directions: "Nord ↑ • Süd ↓",
      zone_tab_all: "Alle (1–8)",
      zone_tab_day: "Wohnbereich (1–3)",
      zone_tab_night: "Schlafbereich (4–7)",
      zone_tab_terrace: "Südterrasse (8)",
      spaces_statement: "Eine harmonische Aufteilung für maximale Helligkeit, Komfort und fließende Übergänge zwischen Innen und Außen. Klicken Sie auf die Nummern (<strong>1 – 8</strong>) im Grundriss für Fotos und Details.",
      spaces_video_link: "Zum Video-Rundgang",
      spaces_room_selected: "Ausgewählter Raum",
      spaces_atmosphere_heading: "Atmosphäre & Details",
      spaces_specs_heading: "Hauptmerkmale",
      spaces_exclusive_note: "Bereich zur exklusiven Nutzung für Gäste von <strong>La Terrazza</strong> (2. Stockwerk mit Aufzug).",
      spaces_inventory_kicker: "Was Sie in Diesem Raum Finden",
      spaces_inventory_heading: "Inklusive Ausstattung:",
      ribbon_interior: "Innenbereich",
      ribbon_total: "Innenbereich",
      ribbon_terrace: "Außenbereich mit Terrasse",
      ribbon_guests: "Schlafplätze",
      ribbon_garage_val: "Garage",
      ribbon_bikes: "Abgeschlossen & 2 Räder",
      ribbon_floor_val: "2. Stock",
      ribbon_floor: "Mit Aufzug",
      amenities_kicker: "Komfort & Komplettausstattung",
      amenities_heading: "Alles inklusive für Ihren Wohlfühlurlaub",
      amenities_subheading: "La Terrazza ist mit viel Liebe zum Detail eingerichtet. Von modernen Küchengeräten über die Südterrasse mit Gasgrill bis zu zwei Fahrrädern und Tiefgarage ist alles bereit.",
      filter_all: "Alle Ausstattungen",
      filter_kitchen: "Küche & Essen",
      filter_terrace: "Terrasse & Grill",
      filter_living: "Wohnen & Kamin",
      filter_sleep: "Zimmer & Bad",
      filter_mobility: "Garage, Bikes & Familie",
      amenity_wifi: "Schnelles W-LAN gratis",
      amenity_bikes: "2 Fahrräder inklusive",
      amenity_parking: "Tiefgarage & Fahrradkeller",
      amenity_stove: "Gusseiserner Kaminofen",
      amenity_bbq: "Gasgrill auf der Terrasse",
      amenity_elevator: "Aufzug im Haus",
      amenity_pets: "Hunde willkommen",
      amenity_kids: "Familienfreundlich",
      rates_kicker: "Faire Konditionen",
      rates_title: "Saisonale Preise",
      calc_kicker: "Schnelle Berechnung",
      calc_heading: "Preis kalkulieren",
      calc_subheading: "Unverbindlich & ohne Online-Zahlung",
      calc_label_season: "Saisonzeitraum",
      calc_label_nights: "Nächte (min. 3)",
      calc_label_guests: "Gäste",
      calc_label_dog: "Mit Hund (+20€ einmalig)",
      calc_free_services: "Glasfaser-WLAN, Garage & 2 Fahrräder:",
      calc_free_badge: "Kostenlos inklusive",
      calc_total_label: "Geschätzter Gesamtpreis (Alles inklusive)",
      calc_total_note: "Transparente Schätzung für die gewählten Reisedaten",
      btn_apply_quote: "Daten & Angebot in Formular übernehmen",
      btn_wa_quote: "Auf WhatsApp anfragen",
      calc_disclaimer: "Die verbindliche Verfügbarkeit und das finale Angebot werden direkt mit Christina abgestimmt.",
      loc_tab_arrival: "Anreise",
      loc_tab_activities: "Aktivitäten & Entfernungen",
      loc_kicker: "Lage & Anreise",
      loc_title: "Lage & Anreise",
      loc_desc: "Das Penthouse liegt in Arco (TN) in der Via Cima Tofino 2/E, wenige Minuten vom Gardasee und vom Zentrum entfernt. Bequeme Anreise mit privatem Tiefgaragenplatz und Aufzug in den 2. Stock.",
      loc_car_kicker: "Mit dem Auto • Brennerautobahn A22",
      loc_car_title: "Ausfahrt Rovereto Süd / Lago di Garda Nord",
      loc_car_desc: "Über die Autobahn A22 Ausfahrt Rovereto Süd (nur 18 km). Der SS240 Richtung Mori und Riva del Garda folgen, dann Richtung Arco bis zur Via Cima Tofino 2/E.",
      loc_parking_kicker: "Privater Parkplatz Inklusive",
      loc_parking_title: "Tiefgarage & Aufzug in den 2. Stock",
      loc_parking_desc: "Reservierter Stellplatz in der Tiefgarage mit automatischem Tor. Der Aufzug führt direkt von der Garage vor die Wohnungstür: ideal für Gepäck und Kinderwagen.",
      loc_train_kicker: "Zug & Öffentliche Verkehrsmittel",
      loc_train_title: "Bahnhof Rovereto FS + Bus in 100 m",
      loc_train_desc: "Bahnhof Rovereto (Strecke München-Innsbruck-Verona). Von dort verkehren regelmäßige Busse der Trentino Trasporti Linie 301. Die Haltestelle ist nur 100 Meter zu Fuß entfernt.",
      loc_territory_title: "Garda Trentino • Arco, Riva & Torbole",
      loc_territory_sub: "Autofreier Radweg vor der Haustür: See und historische Zentren in wenigen Minuten.",
      loc_explore_map: "Gebiet Erkunden",
      dist_market_cat: "Einkaufen & Service",
      dist_market_title: "Supermärkte & Geschäfte",
      dist_market_desc: "Supermärkte Lidl, Coop und Poli in nur 400 m (1 Min. Auto / 3 Min. Rad). Bäckerei, Café und Lebensmittelladen im Ortsteil 100 m zu Fuß.",
      dist_market_time: "Zu Fuß & per Rad",
      dist_lake_cat: "See & Strände",
      dist_lake_title: "Gardasee (Strände & Ufer)",
      dist_lake_desc: "Öffentliche Badestrände und Liegewiesen am See in 3,8 km. In 12 Min. per Rad auf dem autofreien Uferradweg oder 6 Min. mit dem Auto erreichbar.",
      dist_lake_time: "12 Min. per Rad auf dem Radweg",
      dist_arco_cat: "Historischer Ortskern",
      dist_arco_title: "Zentrum von Arco & Burg",
      dist_arco_desc: "5 Min. per Rad am Fluss oder 15 Min. zu Fuß. Marktplatz Collegiata, Straßencafés, Sportgeschäfte und der malerische Burgweg durch Olivenhaine.",
      dist_arco_time: "5 Min. per Rad / 15 Min. zu Fuß",
      dist_riva_cat: "Stadt & Hafen",
      dist_riva_title: "Zentrum von Riva del Garda",
      dist_riva_desc: "12 Min. per Rad auf dem Radweg oder 7 Min. mit dem Auto. Fußgängerzone, malerischer Hafen, Torre Apponale, Restaurants und Fähranleger.",
      dist_riva_time: "12 Min. per Rad / 7 Min. Auto",
      dist_torbole_cat: "Segeln & Windsurfen",
      dist_torbole_title: "Torbole sul Garda",
      dist_torbole_desc: "15 Min. per Rad oder 8 Min. mit dem Auto. Windsurf- und Segel-Hotspot, Kiesstrände, Surfschulen und beliebte Sonnenuntergangs-Bars.",
      dist_torbole_time: "15 Min. per Rad auf dem Radweg",
      dist_bike_cat: "Radweg & Klettern",
      dist_bike_title: "Sarca-Radweg & Kletterfelsen",
      dist_bike_desc: "Autofreier Radweg direkt vor dem Tor (0 m). Legendärer Kletterfelsen Placche di Baone nur 800 m zu Fuß durch die Olivenhaine.",
      dist_bike_time: "Direkt vor der Haustür (0 m)",
      contact_kicker: "Ohne Vermittler",
      contact_title: "Direkter Kontakt zur Gastgeberin",
      contact_intro: "Keine Vermittlungs- oder Portalgebühren (Sie sparen 15–20% gegenüber Booking und Airbnb). Sie kommunizieren direkt mit Christina Stürzer für Termine, flexible Anreisezeiten und persönliche Garda-Tipps.",
      booking_kicker: "Direktbuchung",
      booking_title: "Preise & Buchung",
      booking_intro: "Keine Vermittlungs- oder Buchungsgebühren (15–20% Ersparnis gegenüber Plattformen). Berechnen Sie unverbindlich Ihre Reisezeit und schreiben Sie Christina Stürzer direkt per WhatsApp, Telefon oder E-Mail.",
      benefit_1_title: "0% Vermittlungsgebühren",
      benefit_1_desc: "Sparen Sie 15–20% gegenüber Plattformen wie Booking oder Airbnb. Der vereinbarte Preis ist transparent und ohne Servicegebühren.",
      benefit_2_title: "Persönliche Betreuung",
      benefit_2_desc: "Flexible Schlüsselübergabe, sichere Fahrradunterbringung in der Tiefgarage und erstklassige Empfehlungen für Kletterfelsen und Lokale.",
      benefit_3_title: "Klare Bedingungen",
      benefit_3_desc: "Anzahlung von 150 € per Überweisung innerhalb von 14 Tagen nach Bestätigung, Restzahlung vor Ort bei Anreise.",
      host_languages: "Ich spreche fließend <strong>Deutsch</strong> und <strong>Italienisch</strong>",
      btn_whatsapp: "WhatsApp",
      btn_call: "Anrufen",
      btn_email: "E-Mail",
      reply_speed_title: "Schnelle Antwortzeiten",
      reply_speed_desc: "Ich antworte in der Regel am selben Tag auf WhatsApp-Nachrichten und E-Mails. Bei kurzfristigen Anfragen rufen Sie gerne an.",
      form_title: "Reisezeitraum anfragen",
      form_subtitle: "Tragen Sie Ihre Wunschdaten ein: Sie erhalten eine persönliche Bestätigung und ein maßgeschneidertes Angebot.",
      label_name: "Vor- und Nachname *",
      label_email: "E-Mail-Adresse *",
      label_checkin: "Anreise (Check-in) *",
      label_checkout: "Abreise (Check-out) *",
      label_guests: "Gäste *",
      label_phone: "Telefon / WhatsApp (Optional)",
      label_pet: "Haustiere",
      label_message: "Nachricht oder besondere Wünsche",
      btn_submit_email: "Anfrage per E-Mail senden",
      btn_submit_wa: "Über WhatsApp senden",
      form_reassurance: "Ihre Daten dienen ausschließlich der Abstimmung der Verfügbarkeit mit Christina.",
      booking_direct_perk: "0% Portalgebühren • Sie sparen 15–20%",
      booking_best_rate: "Bester Preis",
      nav_reviews_faq: "Bewertungen & FAQ",
      nav_sub_reviews_faq: "Gästeerfahrungen & klare Antworten",
      rf_kicker: "Gästeerfahrungen & Klarheit",
      rf_title: "Bewertungen",
      rf_subtitle: "Echte, verifizierte Rezensionen aus unserem Google Maps-Profil und klare Antworten für Ihren Aufenthalt in Arco.",
      rf_google_badge: "Google Rezensionen",
      rf_reviews_score: "5.0",
      rf_reviews_scale: "/ 5.0",
      rf_reviews_sub: "Höchstbewertung auf Google Maps (100% 5 Sterne)",
      rf_stat_clean: "5.0 ★ Service & Gastgeberin",
      rf_stat_host: "5.0 ★ Terrasse & Komfort",
      rf_stat_location: "5.0 ★ Lage & Einkaufsmöglichkeiten",
      rf_rev1_time: "vor 2 Monaten",
      rf_rev1_text: "Großartige Ferienwohnung! Tolle Vermieterin, alles völlig unkompliziert! Vielen Dank für zwei superschöne Urlaubswochen!",
      rf_rev2_time: "Neu",
      rf_rev2_text: "Vollausgestattet mit toller Terrasse, ruhig gelegen mit guten Einkaufsmöglichkeiten.",
      rf_verified_gmaps: "✓ Verifizierte Google Maps Rezension",
      rf_rev1_tag: "2 Wochen Urlaub",
      rf_rev2_tag: "Terrasse & Einkaufsmöglichkeiten",
      rf_gmaps_cta: "Lesen oder schreiben Sie eine Rezension auf Google",
      rf_open_gmaps: "Auf Google öffnen",
      faq_kicker: "Volle Transparenz",
      faq_heading: "Häufig Gestellte Fragen",
      faq_q1: "Wie funktionieren Buchung und Bezahlung?",
      faq_a1: "Die Buchung erfolgt direkt über Christina ohne Portalgebühren (Sie sparen 15–20%). Zur Bestätigung genügt eine Anzahlung von 150 € per Banküberweisung, die Restzahlung erfolgt bequem vor Ort bei Anreise.",
      faq_q2: "Wann sind Check-in und Check-out?",
      faq_a2: "Check-in ist ab 15:00 Uhr flexibel nach vorheriger Absprache möglich. Der Check-out erfolgt bis 10:00 Uhr, damit die Wohnung für die nächsten Gäste gründlich vorbereitet werden kann.",
      faq_q3: "Sind Tiefgarage und 2 Fahrräder wirklich kostenlos?",
      faq_a3: "Ja, sowohl der private Stellplatz in der Tiefgarage als auch zwei Stadträder stehen Ihnen während des gesamten Aufenthalts exklusiv und ohne Aufpreis zur Verfügung.",
      faq_q4: "Sind Hunde im Penthouse erlaubt?",
      faq_a4: "Ja, gut erzogene Hunde sind herzlich willkommen! Es fällt lediglich eine einmalige Pauschale von 20 € für die zusätzliche Endreinigung an.",
      faq_q5: "Ist die 70 m² Terrasse privat oder geteilt?",
      faq_a5: "Die gesamte 70 m² Sonnenterrasse gehört exklusiv zu La Terrazza und steht allein Ihnen zur Verfügung. Ausgestattet mit Esstisch, Sonnenliegen und Gasgrill.",
      faq_q6: "Wie lauten die Stornierungsbedingungen?",
      faq_a6: "Wir bieten faire Konditionen: Bei Stornierungen bis zu 14 Tage vor Anreise finden wir gemeinsam eine flexible Umbuchung oder erstatten die Anzahlung."
    },
    en: {
      nav_menu_label: "Menu",
      nav_drawer_explore: "Explore the Residence",
      nav_penthouse: "The Residence",
      nav_sub_penthouse: "Panoramic views & warm welcome",
      nav_spaces: "Floorplan & Spaces",
      nav_sub_spaces: "140 sqm & 8 interactive spaces",
      nav_rates: "Rates & Contact",
      nav_sub_rates: "Transparent estimate & direct contact",
      nav_location: "Location & Setting",
      nav_sub_location: "Arco, lake & bike path",
      nav_drawer_direct_contact: "Direct Contact with Christina",
      btn_inquire: "Inquire Stay",
      btn_inquire_short: "Book",
      hero_kicker: "Arco • Lake Garda",
      hero_h1: "La Terrazza by Christina Stürzer - Penthouse in Arco",
      hero_lead: "Bright 140 sqm penthouse featuring a 70 sqm private sun terrace, elevator, and covered garage in Arco, just minutes from Lake Garda.",
      btn_explore_spaces: "Explore Floorplan",
      btn_inquire_hero: "Inquire Dates",
      hero_live_tour: "Live Video Tour • 140 sqm",
      spaces_kicker: "Floorplan & Spaces",
      spaces_sub_metric: "70 sqm Interiors + 70 sqm Outdoor with Terrace",
      spaces_plan_title: "Floorplan (140 sqm)",
      spaces_cardinal_directions: "North ↑ • South ↓",
      zone_tab_all: "All (1–8)",
      zone_tab_day: "Living Zone (1–3)",
      zone_tab_night: "Night & Bath (4–7)",
      zone_tab_terrace: "South Terrace (8)",
      spaces_statement: "A harmonious layout designed for abundant daylight, comfort, and seamless indoor-outdoor living. Click on numbers (<strong>1 – 8</strong>) on the floorplan to explore authentic photos and room specs.",
      spaces_video_link: "Watch Video Tour",
      spaces_room_selected: "Selected Space",
      spaces_atmosphere_heading: "Atmosphere & Details",
      spaces_specs_heading: "Key Specifications",
      spaces_exclusive_note: "Space reserved for the exclusive use of guests of <strong>La Terrazza</strong> (2nd floor serviced by elevator).",
      spaces_inventory_kicker: "What You Find in This Space",
      spaces_inventory_heading: "Included Amenities:",
      ribbon_interior: "Interiors",
      ribbon_total: "Interiors",
      ribbon_terrace: "Outdoor with Terrace",
      ribbon_guests: "Sleeps Up To",
      ribbon_garage_val: "Garage",
      ribbon_bikes: "Enclosed & 2 City Bikes",
      ribbon_floor_val: "2nd Floor",
      ribbon_floor: "With Elevator",
      amenities_kicker: "Comfort & Full Amenities",
      amenities_heading: "Everything Included for a Seamless Stay",
      amenities_subheading: "La Terrazza is meticulously cared for down to the finest detail. From fitted kitchen appliances and bed linens to the south terrace gas BBQ and complimentary bikes in the garage.",
      filter_all: "All Amenities",
      filter_kitchen: "Kitchen & Dining",
      filter_terrace: "Terrace & BBQ",
      filter_living: "Living & Wood Stove",
      filter_sleep: "Bedrooms & Bath",
      filter_mobility: "Garage, Bikes & Family",
      amenity_wifi: "Fast Wi-Fi Free",
      amenity_bikes: "2 City Bikes Included",
      amenity_parking: "Private Garage & Cellar",
      amenity_stove: "Cast-Iron Wood Stove",
      amenity_bbq: "Outdoor Gas Grill",
      amenity_elevator: "Building Elevator",
      amenity_pets: "Pet Friendly",
      amenity_kids: "Family Ready",
      rates_kicker: "Clear Pricing",
      rates_title: "Seasonal Rates",
      calc_kicker: "Quick Estimate",
      calc_heading: "Estimate Your Stay",
      calc_subheading: "Non-binding & no online charges",
      calc_label_season: "Season Period",
      calc_label_nights: "Nights (min. 3)",
      calc_label_guests: "Guests",
      calc_label_dog: "Bringing a dog (+20€ one-time)",
      calc_free_services: "Fiber Wi-Fi, Garage & 2 City Bikes:",
      calc_free_badge: "Included Free",
      calc_total_label: "Estimated Total (All Included)",
      calc_total_note: "Transparent estimate for selected dates",
      btn_apply_quote: "Apply Dates & Estimate to Form",
      btn_wa_quote: "Inquire on WhatsApp",
      calc_disclaimer: "Final availability and confirmed quote are always agreed directly with Christina.",
      loc_tab_arrival: "Getting Here",
      loc_tab_activities: "Activities & Distances",
      loc_kicker: "Location & Arrival",
      loc_title: "Location & Getting Here",
      loc_desc: "La Terrazza is located in Arco (TN) at Via Cima Tofino 2/E, just minutes from Lake Garda and the historic center. Easy arrival with private underground garage and elevator to the 2nd floor.",
      loc_car_kicker: "By Car • A22 Brennero Motorway",
      loc_car_title: "Exit Rovereto Sud / Lago di Garda Nord",
      loc_car_desc: "From the A22 motorway, take the Rovereto Sud exit (just 18 km away). Follow SS240 towards Mori and Riva del Garda, then head towards Arco to Via Cima Tofino 2/E.",
      loc_parking_kicker: "Private Parking Included",
      loc_parking_title: "Underground Garage & Elevator to 2nd Floor",
      loc_parking_desc: "Reserved parking space in private underground garage with automatic gate. The elevator goes straight from garage level to the penthouse doorstep: perfect for luggage and strollers.",
      loc_train_kicker: "Train & Public Transit",
      loc_train_title: "Rovereto Railway Station + Bus at 100 m",
      loc_train_desc: "Rovereto Railway Station (Milano-Verona-Brennero line). Frequent Trentino Trasporti buses (line 301) depart regularly. The bus stop is just 100 meters on foot from the apartment.",
      loc_territory_title: "Garda Trentino • Arco, Riva & Torbole",
      loc_territory_sub: "Traffic-free cycle path right outside: lake and town centers within minutes.",
      loc_explore_map: "Explore Region",
      dist_market_cat: "Groceries & Services",
      dist_market_title: "Supermarkets & Local Shops",
      dist_market_desc: "Lidl, Coop, and Poli supermarkets at only 400 m (1 min drive / 3 min bike). Bakery, café, and neighborhood grocery store 100 m on foot.",
      dist_market_time: "On foot & by bike",
      dist_lake_cat: "Beaches & Lido",
      dist_lake_title: "Lake Garda (Beaches & Shore)",
      dist_lake_desc: "Public swimming beaches and lakeside lawns at 3.8 km. Reachable in 12 min by bike on the car-free riverside cycle path or 6 min by car.",
      dist_lake_time: "12 min by bike on cycle path",
      dist_arco_cat: "Historic Center",
      dist_arco_title: "Arco Town Center & Castle",
      dist_arco_desc: "5 min by bike or 15 min walk. Piazza Collegiata, outdoor cafés, outdoor gear shops, historic alleys, and the scenic olive path to the Castle.",
      dist_arco_time: "5 min bike / 15 min walk",
      dist_riva_cat: "Lakeside Town & Harbor",
      dist_riva_title: "Riva del Garda Center",
      dist_riva_desc: "12 min by bike on the cycle path or 7 min by car. Pedestrian center, picturesque harbor, Apponale Tower, restaurants, and lake ferry boats.",
      dist_riva_time: "12 min bike / 7 min car",
      dist_torbole_cat: "Sailing & Windsurfing",
      dist_torbole_title: "Torbole sul Garda",
      dist_torbole_desc: "15 min by bike or 8 min by car. Renowned windsurfing and sailing capital, pebble beaches, surf schools, and vibrant sunset lakeside bars.",
      dist_torbole_time: "15 min by bike on cycle path",
      dist_bike_cat: "Cycle Path & Climbing",
      dist_bike_title: "Sarca Cycle Path & Crags",
      dist_bike_desc: "Protected cycle path directly outside the gate (0 m). Famous Baone climbing crag just 800 m on foot among Arco's olive groves.",
      dist_bike_time: "Outside the gate (0 m)",
      contact_kicker: "No Intermediaries",
      contact_title: "Contact the Host Directly",
      contact_intro: "Zero agency or third-party fees (save 15–20% compared to Booking and Airbnb). Communicate directly with Christina Stürzer for dates, flexible check-in times, and local insider tips.",
      booking_kicker: "Direct Booking",
      booking_title: "Rates & Direct Booking",
      booking_intro: "Zero agency or third-party booking fees (save 15–20% compared to portals). Estimate your stay with total transparency and contact Christina Stürzer directly via WhatsApp, phone, or email.",
      benefit_1_title: "0% Intermediary Fees",
      benefit_1_desc: "Save 15–20% compared to third-party platforms like Booking or Airbnb. Clean net rates without service fees.",
      benefit_2_title: "Warm Personal Welcome",
      benefit_2_desc: "Direct communication for flexible arrival times, secure garage bike storage, and tailored local recommendations.",
      benefit_3_title: "Clear Booking Terms",
      benefit_3_desc: "Deposit of 150 € via bank transfer within 14 days of confirmation, balance payable on arrival.",
      host_languages: "I speak fluent <strong>Italian</strong> and <strong>German (Deutsch)</strong>",
      btn_whatsapp: "WhatsApp",
      btn_call: "Call",
      btn_email: "Email",
      reply_speed_title: "Prompt Response Times",
      reply_speed_desc: "I reply to WhatsApp messages and emails within the day. For urgent or last-minute inquiries, feel free to call directly.",
      form_title: "Send a Date Inquiry",
      form_subtitle: "Enter your desired dates: you will receive availability confirmation and a personalized quote.",
      label_name: "Full Name *",
      label_email: "Email Address *",
      label_checkin: "Check-in Date *",
      label_checkout: "Check-out Date *",
      label_guests: "Guests *",
      label_phone: "Phone / WhatsApp (Optional)",
      label_pet: "Pets",
      label_message: "Message or Special Requests",
      btn_submit_email: "Send Email Inquiry",
      btn_submit_wa: "Send via WhatsApp",
      form_reassurance: "Your data is used solely to arrange availability directly with Christina.",
      booking_direct_perk: "0% portal fees • Save 15–20%",
      booking_best_rate: "Best Direct Rate",
      nav_reviews_faq: "Reviews & FAQ",
      nav_sub_reviews_faq: "Guest feedback & clear answers",
      rf_kicker: "Guest Feedback & Clarity",
      rf_title: "Reviews",
      rf_subtitle: "Authentic, verified reviews from our Google Maps profile and clear answers for your stay in Arco.",
      rf_google_badge: "Google Reviews",
      rf_reviews_score: "5.0",
      rf_reviews_scale: "/ 5.0",
      rf_reviews_sub: "Top rating on Google Maps (100% 5 stars)",
      rf_stat_clean: "5.0 ★ Service & Host",
      rf_stat_host: "5.0 ★ Terrace & Comfort",
      rf_stat_location: "5.0 ★ Location & Shops",
      rf_rev1_time: "2 months ago",
      rf_rev1_text: "Great holiday apartment! Wonderful host, everything completely straightforward! Thank you so much for two super nice weeks of vacation!",
      rf_rev2_time: "Recent",
      rf_rev2_text: "Fully equipped with a great terrace, quiet location with good shopping nearby.",
      rf_verified_gmaps: "✓ Verified Google Maps review",
      rf_rev1_tag: "2-week vacation",
      rf_rev2_tag: "Terrace & Amenities",
      rf_gmaps_cta: "Read or leave a review on our Google profile",
      rf_open_gmaps: "Open Google",
      faq_kicker: "Complete Clarity",
      faq_heading: "Frequently Asked Questions",
      faq_q1: "How does booking and payment work?",
      faq_a1: "You book directly with the host Christina, eliminating all portal service fees (saving 15–20%). A 150 € deposit by bank transfer secures your reservation, with the balance paid in person upon arrival.",
      faq_q2: "What are the check-in and check-out times?",
      faq_a2: "Check-in is from 3:00 PM onward with flexible timing by arrangement with Christina. Check-out is by 10:00 AM to allow thorough sanitization.",
      faq_q3: "Are the private garage and 2 bikes truly included?",
      faq_a3: "Yes, both the secure underground garage and two complimentary city bikes are reserved exclusively for your stay with zero extra cost.",
      faq_q4: "Are dogs allowed in the penthouse?",
      faq_a4: "Yes, well-mannered dogs are welcome! A small one-time fee of 20 € covers additional sanitization for the entire stay.",
      faq_q5: "Is the 70 sqm terrace private or shared?",
      faq_a5: "The 70 sqm terrace is 100% private and for your exclusive use. It features an outdoor dining table, sun loungers, and gas barbecue.",
      faq_q6: "What is your cancellation policy?",
      faq_a6: "We offer fair and transparent terms: for changes or cancellations notified up to 14 days prior to arrival, we coordinate rescheduling or refund your deposit."
    }
  };

  const langBtn = document.getElementById('lang-btn');
  const langDropdown = document.getElementById('lang-dropdown');
  const currentLangLabel = document.getElementById('current-lang-label');

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('site_lang', lang);
    if (currentLangLabel) currentLangLabel.textContent = lang.toUpperCase();

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Update room pills text in chosen language
    roomPills.forEach(pill => {
      const idx = parseInt(pill.getAttribute('data-index'), 10);
      if (spaces[idx] && spaces[idx].pill) {
        pill.textContent = spaces[idx].pill[lang] || spaces[idx].pill.it;
      }
    });

    // Re-render current space in new language
    selectSpace(currentSpaceIndex);

    // Refresh estimate breakdown labels & texts
    updateEstimate();

    // Refresh location screen dynamic headers in new language
    updateLocationScreen(currentLocationScreen);

    // Update WhatsApp link message
    const waPhone = "393803172215";
    let waText = "Buongiorno Christina! Vorrei richiedere disponibilità per l'attico ad Arco.";
    if (lang === 'de') waText = "Hallo Christina! Ich interessiere mich für Ihr Penthouse in Arco und möchte nach freien Terminen fragen.";
    if (lang === 'en') waText = "Hello Christina! I would like to inquire about availability for your penthouse in Arco.";

    document.querySelectorAll('.whatsapp-dynamic-btn').forEach(btn => {
      btn.href = `https://wa.me/${waPhone}?text=${encodeURIComponent(waText)}`;
      btn.target = "_blank";
      btn.rel = "noopener noreferrer";
    });
  }

  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('hidden');
    });

    document.querySelectorAll('.lang-opt').forEach(opt => {
      opt.addEventListener('click', () => {
        const selected = opt.getAttribute('data-lang');
        setLanguage(selected);
        langDropdown.classList.add('hidden');
      });
    });

    document.addEventListener('click', () => langDropdown.classList.add('hidden'));
  }

  // Initialize
  setLanguage(currentLang);


  // ===================================================================
  // 5. DIRECT BOOKING FORM SUBMISSION (EMAIL & WHATSAPP)
  // ===================================================================
  const contactForm = document.getElementById('contact-form');
  const btnSubmitWa = document.getElementById('btn-submit-wa');

  function getFormData() {
    const name = document.getElementById('fn-name')?.value.trim() || '';
    const email = document.getElementById('fn-email')?.value.trim() || '';
    const phone = document.getElementById('fn-phone')?.value.trim() || '';
    const checkin = document.getElementById('fn-checkin')?.value || '';
    const checkout = document.getElementById('fn-checkout')?.value || '';
    const guests = document.getElementById('fn-guests')?.value || '2 Adulti';
    const pet = document.getElementById('fn-pet')?.value || 'no';
    const msg = document.getElementById('fn-message')?.value.trim() || '';
    return { name, email, phone, checkin, checkout, guests, pet, msg };
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = getFormData();
      const subject = encodeURIComponent(`Richiesta Soggiorno - ${data.name} (${data.checkin} -> ${data.checkout})`);
      const body = encodeURIComponent(
        `Nome e Cognome: ${data.name}\n` +
        `Email: ${data.email}\n` +
        (data.phone ? `Telefono / WhatsApp: ${data.phone}\n` : '') +
        `Date Soggiorno: dal ${data.checkin} al ${data.checkout}\n` +
        `Numero Ospiti: ${data.guests}\n` +
        `Animali: ${data.pet === 'yes' ? 'Sì, porto 1 cane (+20€)' : 'Nessun animale'}\n\n` +
        `Messaggio / Note:\n${data.msg || 'Nessuna nota aggiuntiva.'}\n`
      );

      window.location.href = `mailto:info@ferienwohnung-gardasee-arco.com?subject=${subject}&body=${body}`;
    });
  }

  if (btnSubmitWa) {
    btnSubmitWa.addEventListener('click', (e) => {
      e.preventDefault();
      const data = getFormData();

      if (!data.name || !data.checkin || !data.checkout) {
        alert(
          currentLang === 'de'
            ? 'Bitte tragen Sie mindestens Ihren Namen sowie An- und Abreisedatum ein.'
            : (currentLang === 'en'
              ? 'Please fill in at least your Name, Check-in, and Check-out dates.'
              : 'Per favore compila almeno Nome e Cognome, Data di Check-in e Check-out.')
        );
        return;
      }

      let waText = "";
      if (currentLang === 'de') {
        waText = `*Buchungsanfrage - Christina's Penthouse*\n\n` +
          `• Name: ${data.name}\n` +
          `• Email: ${data.email || 'Nicht angegeben'}\n` +
          (data.phone ? `• Tel/WhatsApp: ${data.phone}\n` : '') +
          `• Zeitraum: ${data.checkin} bis ${data.checkout}\n` +
          `• Gäste: ${data.guests}\n` +
          `• Haustier: ${data.pet === 'yes' ? 'Ja (1 Hund)' : 'Nein'}\n\n` +
          (data.msg ? `• Notizen: ${data.msg}\n` : '');
      } else if (currentLang === 'en') {
        waText = `*Booking Inquiry - Christina's Penthouse*\n\n` +
          `• Name: ${data.name}\n` +
          `• Email: ${data.email || 'Not provided'}\n` +
          (data.phone ? `• Phone/WhatsApp: ${data.phone}\n` : '') +
          `• Dates: ${data.checkin} to ${data.checkout}\n` +
          `• Guests: ${data.guests}\n` +
          `• Pet: ${data.pet === 'yes' ? 'Yes (1 dog)' : 'No'}\n\n` +
          (data.msg ? `• Notes: ${data.msg}\n` : '');
      } else {
        waText = `*Richiesta Soggiorno - Christina's Penthouse*\n\n` +
          `• Nome: ${data.name}\n` +
          `• Email: ${data.email || 'Non indicata'}\n` +
          (data.phone ? `• Telefono/WhatsApp: ${data.phone}\n` : '') +
          `• Date: dal ${data.checkin} al ${data.checkout}\n` +
          `• Ospiti: ${data.guests}\n` +
          `• Animale: ${data.pet === 'yes' ? 'Sì (1 cane)' : 'No'}\n\n` +
          (data.msg ? `• Note: ${data.msg}\n` : '');
      }

      window.open(`https://wa.me/393803172215?text=${encodeURIComponent(waText)}`, '_blank');
    });
  }


  // ===================================================================
  // 6. LEGAL NOTICE MODAL
  // ===================================================================
  const legalModal = document.getElementById('legal-modal');
  const openLegalBtn = document.getElementById('open-legal-btn');
  const closeLegalBtn = document.getElementById('close-legal-btn');

  if (openLegalBtn && legalModal) {
    openLegalBtn.addEventListener('click', () => legalModal.classList.add('open'));
  }
  if (closeLegalBtn && legalModal) {
    closeLegalBtn.addEventListener('click', () => legalModal.classList.remove('open'));
  }
  if (legalModal) {
    legalModal.addEventListener('click', (e) => {
      if (e.target === legalModal) legalModal.classList.remove('open');
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && legalModal) {
      legalModal.classList.remove('open');
    }
  });

});