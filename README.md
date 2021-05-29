This project use [Next.js](https://nextjs.org/) as an complement to React

## Available Scripts

|| _NOTE: install the project dependencies before to run any script_

In the project directory, you can run the development server with:

```bash
yarn dev
# or
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

The api endpoints expose on http://localhost:3000/api/

---

# Challenge MercadoLibre

## \* Definición de Stack Tecnologico

- ¿Por qué usar NextJS?

  Entre los objetivos del challenge se plantean los features:

  - Solución Web (Deseable React) SEO friendly
  - Middleware API en Node.

  Estos features son abarcados por framework **NextJS** usando la configuración **SSR y API Routes**

  ##### **NOTA:**

  - La decisión de complementar **React** con **NextJS** consultada y avalada con _Jorge Luis Sarmiento Herrera_ (Acompañamiento técnico)

---

- ¿Por qué usar SSR?

  Entre las alternativas **Client Side Rendering**, **Server Side Rendering** y **Static Site Generation** _(Todas configurables en NextJS)_.
  Se tomó la decisión por realizar una solución orientada al SSR con base en los siguientes argumentos:

  - SSR y SSG favorecen el SEO, siendo este uno de los criterios valorados en la solución buscada.
  - Debido a la naturaleza del inventario de productos extenso y cambiante, se opta por SSR. Favoreciendo la escalabilidad.

---

- ¿Por qué usar API Routes?

  Uno de los features del challenge es la elaboración de un Middleware API que procese los datos de una
  API externa y los exponga usando el path `/api/`. Entre las posibles configuraciones que **NextJS** permite,
  se encuentra '**API Routes**' mediante el cual se logra la implementación esperada.

---

##### **NOTAS:**

- De manera arbitraria se toma la decisión de prescindir de la dependencia **Express** en el stack tecnológico con el objetivo de generar una solución monolítica para el alcance esperado.

  **IMPORTANTE!:** Hubieste preferido tomar la decisión apoyada en el aval de _Jorge Luis Sarmiento Herrera_(Acompañamiento técnico), pero afronté el riesgo para no incomodar el fin de semana.

---

## \* Features

[X] Environments config

[X] Code style conventions

- [x] .prettierrc
- styleguide JS definition - (partially) https://google.github.io/styleguide/jsguide.html

[ ] Folder Structure

- API Routes
