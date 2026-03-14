
# CPIAAM Management

Aplicație gratuită de management pentru compartimentele C.P.I.A.A.M. (Prevenirea și Controlul Infecțiilor Asociate Activității Medicale) din unitățile sanitare.

## Ce face

- **IAAM** — înregistrare cazuri, anchetă epidemiologică, analiză automată
- **Autocontrol microbiologic** — probe, conformitate, rapoarte pe tipuri și secții
- **Deșeuri medicale** — evidență lunară pe coduri, indicator kg/om-zi
- **Biocide** — gestiune stoc, consum, atașare avize și fișe de securitate
- **PPS** — studiu de prevalență, import din HelicsWin
- **Documente** — dosar digital autorizații/avize cu alertă expirare
- **Raportări** — calendar obligații cu termene și alerte
- **Rapoarte Word** — generare automată: raport anual, trimestrial, analize, anchete epidemiologice, PV CPIAAM
- **Analiză inteligentă** — euristică offline + opțional AI (Gemini gratuit, Claude, OpenAI, Ollama)
- **Dashboard** — grafice, KPI-uri, notificări

## Cum se folosește

1. Descarcă fișierul `index.html`
2. Pune-l într-un folder pe calculator (recomandat: într-un folder OneDrive sau Google Drive)
3. Deschide cu Google Chrome sau Microsoft Edge
4. La prima deschidere completezi datele unității sanitare
5. Gata — începe lucrul

## Caracteristici tehnice

- Un singur fișier HTML — fără instalare, fără server
- Datele sunt stocate LOCAL pe calculator (IndexedDB) — nimic nu pleacă pe internet
- Sincronizare opțională prin fișier JSON în OneDrive/Google Drive
- Funcționează offline
- Generare Word (.docx) direct din browser

## Cerințe

- Google Chrome sau Microsoft Edge (recomandat)
- Windows 10/11, macOS, sau Linux

## Licență

Aplicația este distribuită **gratuit**. Vânzarea, comercializarea sau redistribuirea contra cost este interzisă.

Dezvoltată în colaborare cu Claude (Anthropic).

# CPIAAM Management

Free management application for Healthcare-Associated Infections Prevention and Control departments (C.P.I.A.A.M.) in hospitals.

🌐 **Live demo:** [https://crstefan-lab.github.io/cpiaam-management/](https://crstefan-lab.github.io/cpiaam-management/)

## Features

- **HAI (Healthcare-Associated Infections)** — case registration, epidemiological investigation, automatic analysis
- **Microbiological Quality Control** — samples, compliance rates, reports by type and ward
- **Medical Waste** — monthly tracking by waste codes, kg/patient-day indicator
- **Biocides** — stock management, consumption, attached authorizations and safety data sheets
- **PPS** — Point Prevalence Survey, HelicsWin import
- **Documents** — digital archive for authorizations/permits with expiry alerts
- **Reporting Calendar** — obligation deadlines with automatic alerts
- **Word Reports** — auto-generated: annual report, quarterly, HAI analysis, epidemiological investigations, committee minutes
- **Smart Analysis** — offline heuristic engine + optional AI (Gemini free, Claude, OpenAI, Ollama local)
- **Dashboard** — charts, KPIs, calendar, notifications
- **Bilingual** — Romanian / English interface

## How to use

1. Download `index.html` (or open the live demo link above)
2. Place it in a folder on your computer (recommended: OneDrive or Google Drive synced folder)
3. Open with Google Chrome or Microsoft Edge
4. First launch: setup wizard guides you through hospital configuration
5. Done — start working

## Technical details

- Single HTML file — no installation, no server required
- Data stored LOCALLY in browser (IndexedDB) — nothing leaves your computer
- Optional JSON file sync via OneDrive/Google Drive
- Works offline
- Word (.docx) generation directly in browser
- Excel (.xlsx) export for quality control data

## Requirements

- Google Chrome or Microsoft Edge (recommended)
- Windows 10/11, macOS, or Linux

## Privacy & GDPR

All data is stored exclusively on the user's computer. The application developer does not collect, transmit, or have access to any user data. When optionally using an external AI service, personal data (patient names, dates of birth) is automatically excluded from API calls.

## License

This application is distributed **free of charge**. Sale, commercialization, or paid redistribution is prohibited.

Developed by Dr. Chițu Robert Ștefan with Claude AI (Anthropic).
