<p align="center">
  <img src="assets/images/icon.png" alt="StickerSmash logo" width="88" height="88" />
</p>

<h1 align="center">StickerSmash</h1>

<p align="center">
  Expo and React Native app for picking a photo from your library.<br />
  Pick a photo and it appears on the Home screen, with Reset, add and Save controls.
</p>

<p align="center">
  <a href="#running-it">Run it</a>
  ·
  <a href="https://docs.expo.dev/">Expo docs</a>
</p>

StickerSmash is a small Expo and React Native app with one working screen. Pick a photo from your library and it appears in a rounded frame, with Reset, add and Save buttons below it. The add and Save buttons do nothing yet, and the About tab only shows placeholder text.

It runs on Android, iOS and the web from one TypeScript codebase. There is no backend, account or API key. You need Node.js and npm, plus an emulator, simulator or device for the native targets.

## What you get

- **Photos from your library.** `Choose a photo` opens the system picker through `expo-image-picker`. The crop screen is on through `allowsEditing`, and the photo is kept at full quality with `quality: 1`. If you cancel, the app shows an alert that no image was selected.
- **Two states on one screen.** A `showAppOptions` flag in `app/(tabs)/index.tsx` swaps the footer. Picking a photo, or pressing `Use this photo`, replaces the two buttons with a row of Reset, add and Save. Reset brings the footer back, so you can pick another photo.
- **A bundled placeholder.** Until you pick a photo, `ImageViewer` shows `assets/images/background-image.png`. `Use this photo` shows the controls on that placeholder without opening the picker.
- **Tabs from the file tree.** Expo Router maps `app/(tabs)/index.tsx` to Home and `app/(tabs)/about.tsx` to About. Unknown routes render `app/+not-found.tsx`, which links back to Home.
- **Four small components.** `Button`, `CircleButton`, `IconButton` and `ImageViewer` live in `components/`. `Button` has a `primary` theme with a yellow border and a picture icon.
- **Typed routes and the React Compiler.** `app.json` turns on `typedRoutes`, which type checks `Link` hrefs, and `reactCompiler`. It also sets `newArchEnabled`, so the app uses the New Architecture.

## Running it

Install the dependencies once:

```sh
npm install
```

Then open the app on a target:

| Target | Command | You need |
| --- | --- | --- |
| **Android** | `npm run android` | An Android emulator, or a device connected to your machine |
| **iOS** | `npm run ios` | A Mac with Xcode and the iOS simulator |
| **Web** | `npm run web` | A browser |

`npm start` runs the Expo dev server without picking a target. Its output lists the other ways to open the app, including Expo Go and development builds.

### Lint

```sh
npm run lint
```

This runs `expo lint` with the ESLint config in `eslint.config.js`.

## Project layout

- `app/` holds the routes. `app/_layout.tsx` is the root stack, and `app/(tabs)/` holds the two tab screens.
- `components/` holds the shared buttons and the photo frame.
- `assets/images/` holds the app icon, the placeholder photo, and the splash and Android icon art.
- `app.json` holds the Expo config, including the `stickersmash` URL scheme.
