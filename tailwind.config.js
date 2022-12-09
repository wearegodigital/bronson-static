module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
    './**/*.html',
    './**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        'accent-1': 'var(--accent-1-color)',
        'accent-2': 'var(--accent-2-color)',
        'accent-3': 'var(--accent-3-color)',
        'text-color': 'var(--text-color)',
        'black-1': 'var(--black-1)',
        'black-2': 'var(--black-2)',
        'black-3': 'var(--black-3)',
        'dark-grey': 'var(--dark-grey)',
        'medium-grey': 'var(--medium-grey)',
        'light-grey': 'var(--light-grey)',
        'off-white': 'var(--off-white)',
        white: 'var(--white)'
      },
      fontSize: {
        small: '0.75rem',
        p: '1rem',
        h6: '1rem',
        h5: '1.125rem',
        h4: '1.313rem',
        h3: '1.75rem',
        h2: '2.25rem',
        h1: '3rem',
        jumbo: '4rem',
        mega: '5rem',
      },
      fontWeight: {
        '100': 100,
        '200': 200,
        '300': 300,
        '400': 400,
        '500': 500,
        '600': 600,
        '700': 700,
        '800': 800,
        '900': 900,
      },
      fontFamily: {
        'display': 'chonko, sans-serif',
      }
    },
  },
  plugins: []
}
