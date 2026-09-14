# 📱 Pokedex App

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Apollo GraphQL](https://img.shields.io/badge/Apollo%20GraphQL-311C87?&style=for-the-badge&logo=Apollo%20GraphQL&logoColor=white)

**Pokedex** es una aplicación móvil desarrollada por un fanático de Pokémon que busca demostrar una interfaz bonita, fluida y de alta calidad, reflejando al mismo tiempo buenas prácticas de desarrollo, arquitectura y diseño de componentes.

---

## Stack Tecnológico y Dependencias

Esta aplicación fue construida utilizando herramientas modernas para garantizar un rendimiento óptimo, código escalable y una excelente experiencia de usuario.

### Core

- **[React Native](https://reactnative.dev/) (v0.87.1)**: Framework principal que permite desarrollar para iOS y Android utilizando un solo código base en JavaScript/TypeScript, manteniendo el rendimiento y la apariencia de una app nativa.
- **[TypeScript](https://www.typescriptlang.org/)**: Añade tipado estático al proyecto, lo que reduce drásticamente los errores en tiempo de ejecución, mejora el autocompletado en el editor y documenta el código por sí mismo.

### Consumo de Datos (API)

- **[@apollo/client](https://www.apollographql.com/docs/react/) y [graphql](https://graphql.org/)**: Utilizados en conjunto para conectarse a la API de Pokémon. Apollo Client gestiona de forma inteligente el caché de las consultas (queries), los estados de carga (loading) y los errores, haciendo que la recuperación de datos sea increíblemente rápida y eficiente.

### Navegación

- **[React Navigation](https://reactnavigation.org/) (`@react-navigation/native`, `native-stack`)**: El estándar de la industria para el enrutamiento en React Native. Proporciona transiciones nativas suaves entre pantallas (como la lista de Pokémon y la vista de detalles) y maneja el historial de navegación.
- **`react-native-safe-area-context` y `react-native-screens`**: Dependencias clave de React Navigation que garantizan que la interfaz no se superponga con los bordes de los dispositivos modernos (como el notch o la isla dinámica del iPhone) y optimizan el uso de memoria de las pantallas.

### Utilidades y Reactividad

- **[RxJS](https://rxjs.dev/)**: Librería de programación reactiva. Se utiliza para manejar flujos de datos asíncronos complejos o eventos de interfaz de usuario de manera declarativa y potente.

---

## Requisitos del Sistema

| Herramienta            | Plataforma      | Descarga                                                    |
| ---------------------- | --------------- | ----------------------------------------------------------- |
| **Visual Studio Code** | Windows + macOS | [Descargar](https://code.visualstudio.com/)                 |
| **Android Studio**     | Windows + macOS | [Descargar](https://developer.android.com/studio?hl=es-419) |
| **Xcode**              | macOS solamente | [Descargar](https://developer.apple.com/xcode/)             |
| **Node.js**            | v24.19.x        | A través de NVM (ver abajo)                                 |

---

## Instalación y Configuración

### 1. Versión de Node.js

En la raíz del proyecto existe un archivo `.nvmrc` que especifica la versión de Node (`24.19`). Si usas [NVM](https://github.com/nvm-sh/nvm):

```bash
# Usar la versión especificada en .nvmrc
nvm use

# Si no la tienes instalada:
nvm install 24.19
nvm use 24.19
```

### 2. Instalar dependencias del proyecto

La aplicación utiliza `yarn` como gestor de paquetes principal (especificado a la versión 3.6.4).

```bash
yarn install
```

### 3. Instalar Pods de iOS (Solo macOS)

Para vincular las dependencias nativas en iOS:

```bash
cd ios && pod install && cd ..
```

---

## Ejecución del Proyecto

Para levantar el servidor de desarrollo (Metro Bundler) y ejecutar el proyecto en tu emulador o dispositivo físico:

1. **Inicia el servidor Metro:**

   ```bash
   yarn start
   ```

2. **Ejecuta la app (en otra pestaña de la terminal):**

   ```bash
   # Para emulador / dispositivo iOS
   yarn ios

   # Para emulador / dispositivo Android
   yarn android
   ```
