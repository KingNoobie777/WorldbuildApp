# Zyntherra Worldbuilder

An editable, browser-based 2D fantasy cartography workspace for the world of **Zyntherra**. The first milestone prioritises a fast, flat map with editable features and a restrained parchment-and-forest visual style.

## Current prototype

- Editable map features: regions, water bodies, rivers, mountains, forests, cities, villages, roads and labels.
- Inspector for names, coordinates and lore notes.
- Feature visibility layers, search, zoom, undo/redo and browser autosave.
- Export the map as SVG, PNG, or a structured JSON project.
- No backend, API key, WebGL, or account required; project data stays in browser storage unless exported.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To create a production build, run `npm run build`.

## Important map/canon note

The included starter geography is a **stylised editable interpretation** of the supplied hand-drawn map, not a final tracing. Known region labels transcribed from the image include Xethis, Zunda, Sylvaria, Varelis, Ryki, Vaerola, Drunei, Mighnabo, Adanaiza, Dajpan and Tikebau. Please review spellings such as Mighnabo and Tikebau against the original. The lakes and river paths are illustrative placeholders because the source map marks water as suggestions; replace and refine them in the editor. Unconfirmed lore has deliberately not been added.

## Roadmap

1. **Foundation (current):** editing, local save, layers, basic exports.
2. **Geography:** improved coastlines, editable path control points, terrain/elevation painting, water/river network tools, procedural generation with a seed.
3. **Physical map:** elevation shading, biome palette, contour and hillshade overlays; fast 2D renderer.
4. **Publishing:** named export presets for political, physical, biome, landmass-only, water-only, settlement and road maps; atlas sheets and legend.
5. **Optional 3D:** a separate terrain preview built from the same elevation data.

## Data format

JSON stores a `features` array. Each feature has a stable ID, kind, name, map coordinates and optional path/notes. Keep lore and geography editable as data, not baked into a flattened image.

## Licence

Private repository. Add a licence before distributing publicly.
