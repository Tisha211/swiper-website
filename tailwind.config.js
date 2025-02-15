module.exports = {
  content: ['./src/**/*.js', './src/**/*.mdx', './src/**/*.md'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        '2xl': '1400px',
      },
      colors: {
        brand: '#0080ff',
        'primary-shade': 'var(--color-primary-shade)',
        'primary-tint': 'var(--color-primary-tint)',
        primary: 'var(--color-primary)',
        'on-primary': 'var(--color-on-primary)',
        'primary-container': 'var(--color-primary-container)',
        'on-primary-container': 'var(--color-on-primary-container)',
        secondary: 'var(--color-secondary)',
        'on-secondary': 'var(--color-on-secondary)',
        'secondary-container': 'var(--color-secondary-container)',
        'on-secondary-container': 'var(--color-on-secondary-container)',
        surface: 'var(--color-surface)',
        'on-surface': 'var(--color-on-surface)',
        'surface-variant': 'var(--color-surface-variant)',
        'on-surface-variant': 'var(--color-on-surface-variant)',
        outline: 'var(--color-outline)',
        'outline-variant': 'var(--color-outline-variant)',
        'inverse-surface': 'var(--color-inverse-surface)',
        'inverse-on-surface': 'var(--color-inverse-on-surface)',
        'inverse-primary': 'var(--color-inverse-primary)',
        'surface-0': 'var(--color-surface-0)',
        'surface-1': 'var(--color-surface-1)',
        'surface-2': 'var(--color-surface-2)',
        'surface-3': 'var(--color-surface-3)',
        'surface-4': 'var(--color-surface-4)',
        'surface-5': 'var(--color-surface-5)',
        red: 'var(--color-red)',
        green: 'var(--color-green)',
        orange: 'var(--color-orange)',
      },
      typography: () => ({
        DEFAULT: {
          css: {
            strong: {
              color: 'inherit',
              fontWeight: 'bold',
            },
            h1: {
              'font-size': '40px',
              'font-weight': 'bold',
              color: 'inherit',
              lineHeight: 1.2,
              marginBottom: '0.7em',
            },
            h2: {
              'font-size': '32px',
              'margin-top': '1.5em',
              marginBottom: '0.5em',
              color: 'inherit',
              a: {
                'font-weight': 'inherit',
              },
            },
            h3: {
              'font-size': '26px',
              'margin-top': '1.25em',
              'font-weight': 'bold',
              lineHeight: 1.4,
              marginBottom: '1em',
              marginTop: '1.25em',
              color: 'inherit',
            },
            h4: {
              fontSize: '20px',
              'font-weight': 'bold',
              marginBottom: '1em',
              marginTop: '1.2em',
              lineHeight: '1.4',
              color: 'inherit',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
