/**
 * Опционально: если стек — Tailwind CSS, вставьте это в tailwind.config.js
 * (theme.extend), чтобы токены из design/tokens.css были доступны как
 * Tailwind-классы (bg-brand-purple, text-brand-navy, font-h1 и т.д.)
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1B2455',
          purple: '#8A63F6',
          yellow: '#FFD54A',
          blue: '#6C8BFF',
          green: '#7FD66A',
          pink: '#FF7DB7',
        },
        bg: {
          white: '#FCFBFF',
          lavender: '#FAF9FD',
          lavender2: '#E9E6FB',
          lavender3: '#F2F1F9',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        h1: ['56px', { fontWeight: '800' }],
        h2: ['48px', { fontWeight: '700' }],
        h3: ['34px', { fontWeight: '700' }],
        h4: ['28px', { fontWeight: '600' }],
        body: ['20px', { fontWeight: '400' }],
        'body-sm': ['18px', { fontWeight: '400' }],
        caption: ['16px', { fontWeight: '500' }],
        button: ['18px', { fontWeight: '700' }],
      },
      borderRadius: {
        card: '20px',
        button: '14px',
      },
      boxShadow: {
        // Усилено относительно --shadow-card из tokens.css (0 8px 24px
        // rgba(27,36,85,0.06)) — на светло-лавандовом фоне секций
        // исходная тень была почти не заметна.
        card: '0 10px 28px rgba(27, 36, 85, 0.12)',
      },
    },
  },
};
