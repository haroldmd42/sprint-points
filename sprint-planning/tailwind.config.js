/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        admin: "#1e3a8a",       // Azul profundo
        estimator: "#059669",   // Verde esmeralda
        danger: "#dc2626",      // Rojo fuerte
        warning: "#facc15",     // Amarillo vibrante
        neutral: "#f3f4f6",     // Fondo gris claro
      },
    },
  },
  plugins: [],
}
