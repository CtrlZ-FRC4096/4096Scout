module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"']
      },
    },
  },
  daisyui: {
    themes: [
      {
        // https://www.realtimecolors.com/?colors=e3f1fd-09131b-0058a9-fe7701-f03449&fonts=Inter-Inter
        cz: {
          "primary": "#FE7501",
          "secondary": "#0058A9",
          "neutral": "#e3f1fd",
          'base-100': '#09131b',
          'accent': '#f03449',
          'error': '#f03449',
          "--rounded-box": "0.25rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.25rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.125s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "2px", // border width of buttons
        },
        bw: {
          "primary": "#000",
          "secondary": "#000",
          "neutral": "#fff",
          'base-100': '#fff',
          'accent': '#ddd',
          'error': '#000',
          "--rounded-box": "0.25rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.25rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.125s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "2px", // border width of buttons
        }
      }
    ]
  },
  plugins: [require('@tailwindcss/forms'), require('daisyui')],
}
