# 📄 Profile App – Angular + SSR

Willkommen zur **Profile App** – ein modernes Angular-Projekt mit **Server-Side Rendering (SSR)** per Express.js. Aufgeräumte Struktur, blitzschneller Start, und kein PHP-Ballast mehr.

Welcome to the **Profile App** – a modern Angular project with **Server-Side Rendering (SSR)** using Express.js. Clean structure, blazing fast startup, and minimal legacy bloat.

---

## 🚀 Quickstart

### 1. 📦 Installieren / Install dependencies
```bash
npm install
```

### 2. 🧪 Entwicklung starten / Start in dev mode
```bash
npm run start
```
- 🌐 Nur Client-App ohne SSR / Just the client-side Angular app

### 3. 🧠 Mit SSR starten / Run with SSR
```bash
npm run start:ssr
```
Wird automatisch:
- ✅ Browser- & Server-Bundles bauen / Build browser + server bundles
- 🧼 `<base href="/">` fixen / Fix baseHref
- 🚀 Express SSR-Server starten / Start Express on `http://localhost:4000`

---

## 📁 Projektstruktur / Project Structure

```
dist/
├── browser/     # Frontend-Build / Static frontend
└── server/      # Server-Build / SSR backend (Express)

src/
├── app/         # Komponenten / Angular components
│   ├── aboutme/
│   ├── contact/
│   └── skillset/
├── assets/      # Bilder & Icons / Images, icons, etc.
└── main.server.ts  # SSR Einstiegspunkt / SSR entry
```

---

## 🔧 NPM Scripts
| Script         | Beschreibung / Description               |
|----------------|------------------------------------------|
| `start`        | Dev-Server ohne SSR / Dev without SSR     |
| `build:ssr`    | SSR Build inkl. baseHref Fix              |
| `start:ssr`    | SSR Build + Launch                       |
| `serve:ssr`    | Nur SSR starten / Run prebuilt server    |

---

## 📦 Abhängigkeiten / Dependencies
- Angular 17 (App)
- Angular Universal (SSR)
- Express.js (Server)

---

## 📤 Deployment

### 🟢 Vercel / Netlify (Client-only):
```bash
npm run build
```
→ Output liegt in `dist/browser/` → deploybar als statisches Frontend

### 🔵 Node.js Server (SSR):
```bash
npm run build:ssr
node dist/server/server.mjs
```
→ Hoste via Node-Provider (Render, Railway, VPS etc.)

### 🔁 Cleanup
```bash
rm -rf dist/
npm run build:ssr
```

---

## 💡 Hinweise / Notes
- `baseHref` wird automatisch ersetzt
- SSR läuft auf Port `4000`

---

Happy hacking 👨‍💻 / Frohes Coden 💪
