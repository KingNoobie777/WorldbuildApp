# WorldbuildApp

A browser-based fantasy cartography and worldbuilding editor. The public app opens with a procedurally generated world; **Zyntherra is an optional preset**, loaded explicitly from the World settings panel.

## Features

- **Procedural worlds:** generate a new world from a random seed, or enter a specific integer seed to reproduce the same layout. The active seed is shown in the header/status area.
- **Zyntherra preset:** select **Load Zyntherra** to replace the current map with the bundled editable interpretation of Zyntherra.
- **Editable map features:** regions, water bodies, rivers, mountains, forests, cities, villages, roads and labels.
- **Layer visibility:** independently toggle geographic feature categories without deleting data. Rendering order is explicit so land renders beneath water, vegetation, rivers, roads, mountains and settlements.
- **Tracing reference image:** import a PNG, JPEG, WebP or other browser-readable image (maximum upload size 6 MB). The image is resized/compressed in the browser, shown beneath editable map features, and can be dragged, hidden, locked, repositioned, resized and faded with an opacity slider.
- **Reference images are not part of map exports:** PNG/SVG exports contain the editable map only. Project JSON includes the reference image so the project can be reopened with its tracing setup intact.
- **Project files:** save a .worldbuild.json file, open it later, or share it with another user.
- **Undo/redo, feature inspector, search, zoom, grid, SVG/PNG export, and local autosave.**
- No backend or API key required. The app stores its current project in browser local storage.

## Use the app

1. Open the deployed app or run it locally.
2. The first launch creates a random world. Use **Generate random world** to replace it.
3. Use **Load Zyntherra** only when you want to work on that preset.
4. To trace an existing map, open **Layers → Tracing reference → Import image**. Lower the opacity, drag the image into place while unlocked, then lock it and draw features over it.
5. Use **Save project** or **Export → World project JSON** to keep a portable copy. Browser storage is not a substitute for backups.

### Reference image notes

The tracing image is a special editor-only layer, not geographic data. It is intentionally excluded from PNG and SVG map exports. The project JSON includes the image data; image optimization helps reduce storage use, but browser storage quotas still apply. Export the project if the browser reports that local storage is full.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To create a production build, run:

```bash
npm run build
```

## Project data

World project JSON contains a versioned project object with a title, optional seed, a features array, and optional referenceImage data. Geographic features remain editable data rather than being flattened into a single image.

## Licence

No licence is currently declared in this repository. Public visibility on GitHub does not automatically grant permission to reuse or redistribute the source. Add an explicit licence before accepting outside contributions or inviting others to reuse the code.
