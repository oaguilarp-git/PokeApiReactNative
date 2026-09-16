# PokeAPI React Native

##

Aplicación móvil construida con React Native y Expo para consultar Pokémon utilizando la [PokeAPI](https://pokeapi.co/).

La aplicación permite:

- Consultar un listado de Pokémon.
- Cargar más Pokémon mediante paginación.
- Navegar al detalle de un Pokémon.
- Visualizar su imagen, tipos, habilidades, estadísticas, altura, peso y movimientos.
- Puede ejecutarse en Android, iOS y web.

## Tecnologías extras utilizadas

- Zustand: para la persistencia de los datos, mejorando el performance de la app.
- Axios: para centralizar los llamados a la API y dar la opcion de extender a un interceptor.

## Requisitos

Antes de iniciar el proyecto, instala:

- Node.js
- pnpm
- Expo CLI, incluido mediante las dependencias del proyecto
- Android Studio para ejecutar Android
- Xcode para ejecutar iOS, únicamente en macOS

Puedes verificar Node.js y pnpm con:

```bash
node --version
pnpm --version
```

## Instalación

##

Clona el repositorio y entra en la carpeta del proyecto:

```bash
git clone https://github.com/oaguilarp-git/PokeApiReactNative
```

Instala las dependencias:

```bash
pnpm install
```

## Ejecución

Inicia el servidor de desarrollo de Expo:

```bash
pnpm start
```

También puedes iniciar directamente una plataforma específica:

### Web

```bash
pnpm run web
```

### Android

```bash
pnpm run android
```

### iOS

```bash
pnpm run ios
```

Para ejecutar la aplicación en un dispositivo físico, instala Expo Go y escanea el código QR mostrado por Expo.

## Calidad de código

Ejecuta ESLint con:

```bash
pnpm run lint
```

## Cobertura de Test

```bash
pnpm run test -- --coverage
```

## Scripts disponibles

| Comando            | Descripción                           |
| ------------------ | ------------------------------------- |
| `pnpm start`       | Inicia Expo                           |
| `pnpm run web`     | Ejecuta la aplicación en el navegador |
| `pnpm run android` | Ejecuta la aplicación en Android      |
| `pnpm run ios`     | Ejecuta la aplicación en iOS          |
| `pnpm run lint`    | Ejecuta ESLint                        |
| `pnpm run test`    | Ejecuta las pruebas con Jest          |

## Estructura del proyecto

```text
PokeApiRN/
├── assets/
│   ├── images/
│   └── tabIcons/
├── src/
│   ├── app/
│   │   ├── home/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── layouts/
│   │   │   └── styles/
│   │   └── pokemonDetail/
│   │       ├── components/
│   │       ├── hooks/
│   │       ├── layouts/
│   │       └── styles/
│   ├── models/
│   ├── navigation/
│   ├── services/
│   └── store/
├── app.json
├── eslint.config.js
├── package.json
├── tsconfig.json
└── README.md
```

## Arquitectura

La aplicación está organizada por funcionalidades:

### Home

La pantalla principal se encuentra en:

```text
src/app/home/
```

Incluye:

- `Home.tsx`: pantalla principal.
- `PokemonList.tsx`: listado de Pokémon.
- `pokemonCard.tsx`: tarjeta individual.
- `useGetPokemons.ts`: hook que conecta la pantalla con Zustand.
- `home.styles.ts` y `Card.styles.ts`: estilos de la pantalla y las tarjetas.

La pantalla obtiene los Pokémon desde el store y permite solicitar más resultados cuando el usuario llega al final del listado.

### Detalle del Pokémon

La funcionalidad de detalle se encuentra en:

```text
src/app/pokemonDetail/
```

Incluye componentes para mostrar:

- Imagen.
- Nombre, identificador y tipos.
- Habilidades.
- Altura y peso.
- Estadísticas.
- Movimientos.

El nombre del Pokémon se recibe mediante los parámetros de navegación y se utiliza para consultar su información completa en la API.

## Consumo de la API

Las peticiones HTTP están centralizadas en:

```text
src/services/pokemonService.ts
```

## Notas

La aplicación requiere conexión a Internet para consultar la PokeAPI.

Si se modifica la estructura de navegación, las rutas o la configuración de Expo, puede ser necesario reiniciar el servidor limpiando la caché:

```bash
pnpm exec expo start --clear
```
