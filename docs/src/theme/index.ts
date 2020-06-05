export default {
  fonts: {
    body: 'Arial',
  },
  colors: {
    text: '#282a36',
    background: '#ffffff',
    primary: '#e23f88',
    primaryHover: '#f564a5',
    ghost: '#f2f2f2',
    ghostHover: '#f9f9f9',
  },

  buttons: {
    primary: {
      cursor: 'pointer',
      transition: '.1s linear background-color',
      ':hover': {
        backgroundColor: 'primaryHover',
      },
    },
    ghost: {
      cursor: 'pointer',
      transition: '.1s linear background-color',
      color: 'text',
      backgroundColor: 'ghost',
      ':hover': {
        backgroundColor: 'ghostHover',
      },
    },
  },

  styles: {
    a: {
      fontFamily: 'body',
      color: 'primary',
      cursor: 'pointer',
      fontWeight: 'bold',
    },
    hr: {
      color: 'transparent',
      mb: 3,
    },
  },
}
