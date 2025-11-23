```yaml
Description:
[
    -Typscript App to check Weather In Aucklnad
    -Looking to make into a fully functioning Gui Application
]
```

```yaml
Future Features:
[
    In Progress/
    ├─ Full stack wrapped in Electron
    ├─ Ability to check for Internet Connection
    ├─ Fully Functioning Electron Gui
    └─ Ability to pick locations other than Auckland.
]
```

```yaml
Architecture:
[   
    Checkmate/
    ├─ backend/
    │  ├─ package.json
    │  ├─ tsconfig.json
    │  └─ src/
    │     ├─ services/
    │     │  └─ weatherService.ts
    │     ├─ utils/
    │     │  ├─ weatherCodes.ts
    │     │  └─ WeatherIcons.ts
    │     └─ index.ts
    ├─ frontend/
    │  ├─ package.json
    │  ├─ tsconfig.json
    │  ├─ index.html
    │  └─ src/
    │     ├─ App.tsx 
    │     ├─ main.tsx
    │     ├─ types.tsx
    │     └─ styles.ts
    ├─ Electron/ <--To Be Confirmed?
    │  └─ src/ --> TBC
]

```
