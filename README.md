# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```


# Publish to pages
>> Expects git to be an available cmd (aka git as part of env/path variables)

### Windows
```sh
npm run build

git add .
git commit -m "update"
git push

git add dist -f
git commit -m "adding dist"
git subtree push --prefix dist origin gh-pages

```

### Linux

##### Temp solution
    1. Change the package.json post build command to use the cp (linux) command.
    2. Run the same code as on windows.