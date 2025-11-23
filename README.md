```yaml
Typescript App To read the weather in Auckland!

Made it to run local host. Looking to upgrade it to an electron app so it can be used locally.
```

```yaml
Future Features:
[   In Progress/
    ├─ Full stack wrapped in Electron
    ├─ Ability to check for Internet Connection
    ├─ Fully Functioning Electron Gui
    └─ Ability to pick locations other than Auckland.
]
```

```yaml
Architecture:
[   Checkmate/
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
