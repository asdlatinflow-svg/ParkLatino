# Park Latino

Sito evento e prenotazioni con Cloudflare Pages Functions e D1.

## Pages
- Repository: asdlatinflow-svg/ParkLatino, branch main
- Framework: Nessuno
- Comando build: vuoto
- Directory output: dist
- Directory radice: vuota (functions deve rimanere alla radice repository)

## Attivazione in Cloudflare
1. Crea un database D1, nome suggerito `park-latino`.
2. Nel progetto Pages `parklatino`, Impostazioni → Binding, aggiungi D1 con nome variabile **DB** e seleziona il database. Configura l'ambiente Production. Se vuoi testare preview, usa un database separato.
3. In Variabili e segreti, aggiungi come **segreto** `ADMIN_PASSWORD` con una password scelta da te di almeno 12 caratteri. Non inserire password nei file o su GitHub.
4. Ripeti la distribuzione di produzione per applicare binding e segreto.
5. Apri `/admin`, accedi con la password. Al primo accesso vengono create le tabelle D1. Le prenotazioni partono **chiuse**.
6. Verifica il programma, i prezzi e le inclusioni; attiva Prenotazioni aperte e salva. Esegui una prenotazione di prova e annullala dall'admin.

## Funzioni
- Prenotazioni condivise nel database; nessun dato personale salvato nel localStorage.
- Totali verificati sul server; invio idempotente con identificativo richiesta.
- Login con cookie HttpOnly, Secure, SameSite; sessione di 8 ore e limitazione tentativi.
- Elenco, ricerca, filtri, CSV, pagato, arrivato, annullamento e ripristino.
- Programma e prezzi modificabili da admin con controllo aggiornamenti concorrenti.
- Le prenotazioni precedenti conservano prezzo e descrizione originali.
- I conteggi pagato/arrivato si riferiscono a tutta la prenotazione di gruppo.
- Nessun pagamento online o messaggio automatico. La conferma appare sul sito.
- L'elenco admin ha un limite esplicito di 10.000 prenotazioni.

## Verifica locale
`npm test` esegue test API con SQLite locale e Web Crypto. Le prove locali non modificano la produzione.
