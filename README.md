# La Terrazza - di Christina Stürzer (Arco, Lago di Garda)
> Sito web ufficiale e sistema di presentazione boutique per l'attico vacanze ad Arco (TN).

---

## 📁 Struttura del Progetto

Il progetto è stato organizzato secondo i migliori standard del web moderno (zero dipendenze, massima portabilità, velocità e facilità di modifica):

```
Website/
├── index.html                   # Pagina principale completa e ottimizzata SEO/Mobile
├── README.md                    # Questa documentazione
├── assets/
│   ├── css/
│   │   └── style.css            # Stili, palette colori (Terracotta, Olivo, Travertino) e layout
│   ├── js/
│   │   └── script.js            # Motore interattivo (calcolatore, traduzioni IT/DE/EN, gallerie)
│   ├── images/                  # Tutte le foto dell'appartamento, logo e planimetria
│   │   ├── Logo (no bg).png
│   │   ├── Planimetria.jpg
│   │   ├── Salotto.jpg
│   │   ├── Cucina.jpg
│   │   ├── Camera 1.jpg
│   │   ├── Camera 2.jpg
│   │   ├── Bagno.jpg
│   │   ├── Deposito.jpg
│   │   ├── Terrace 1.jpg
│   │   ├── Terrace 2.jpg
│   │   └── Terrace 3.jpg
│   └── videos/
│       └── video-apartment tour.mp4  # Video tour immersivo dell'appartamento
├── docs/                        # Documenti, planimetrie e materiale per gli ospiti
│   └── Untitled document.pdf
└── Official/
    └── index.html               # Redirect automatico di retrocompatibilità
```

---

## 🚀 Come Pubblicare il Sito Online

Il sito è interamente **statico (HTML5 + CSS3 + JavaScript vanilla)**. Non necessita di server Node.js, database o configurazioni complesse. Può essere pubblicato in pochi minuti su qualsiasi piattaforma:

1. **Hosting Tradizionale (Aruba, Siteground, Register.it, Hetzner, ecc.):**
   - Carica il contenuto della cartella `Website/` nella cartella `public_html` (o `www`) via FTP (usando ad esempio FileZilla).

2. **Piattaforme Cloud Gratuite (Netlify, Vercel, GitHub Pages, Cloudflare Pages):**
   - Trascina semplicemente l'intera cartella `Website` su [Netlify Drop](https://app.netlify.com/drop) per andare online in 30 secondi con certificato SSL HTTPS gratuito.

---

## ✏️ Come Effettuare Modifiche

### 1. Modificare i Prezzi e le Stagioni
Tutta la logica di calcolo e i prezzi sono centralizzati in `assets/js/script.js` nella funzione `updateEstimate`:
- **Bassa stagione:** 85 € (2 ospiti) / 115 € (fino a 4 ospiti)
- **Media stagione:** 90 € (2 ospiti) / 120 € (fino a 4 ospiti)
- **Alta stagione:** 98 € (2 ospiti) / 138 € (fino a 4 ospiti)
- **Pulizie finali:** 60 € (2 ospiti) / 70 € (fino a 4 ospiti)
- **Tassa di soggiorno:** 1,00 € a persona/notte
- **Supplemento cane:** 20 € forfettario una tantum

### 2. Modificare o Aggiungere Traduzioni
I testi per le tre lingue (**Italiano**, **Tedesco**, **Inglese**) si trovano nell'oggetto `translations` all'interno di `assets/js/script.js`:
- `translations.it`
- `translations.de`
- `translations.en`

Ogni elemento con attributo `data-i18n="nome_chiave"` nell'`index.html` viene aggiornato automaticamente quando l'utente cambia lingua.

### 3. Sostituire le Foto
Per aggiornare una foto, basta sovrascrivere il file corrispondente nella cartella `assets/images/` mantenendo lo stesso nome file (es. `Terrace 1.jpg`, `Salotto.jpg`), oppure modificare i riferimenti nell'array `spaces` in `assets/js/script.js`.

### 4. Dati di Contatto Ufficiali
- **Telefono / WhatsApp:** +39 380 3172215
- **Email:** info@ferienwohnung-gardasee-arco.com
- **Codice CIN:** IT022006C2H38NCAO6
- **Indirizzo:** Arco (Trento), Italia
