export const theme = Object.freeze({
  colors: {
    white: '#ffffff',
    gray: '#898888',
    blue: '#0a66c2',
    hovers: '#21476d',
  },
  fontSizes: {
    small: '18px',
    medium: '24px',
    large: '32px',
    extraLarge: '48px',
  },

  fontWeights: {
    normal: '400',
    semiBold: '600',
    extraBold: '800',
  },

  borderRadius: {
    wrapperBorder: '40px',
    inputBorder: '60px',
    buttonBorder: '100px',
  },

  spacing: value => `${4 * value}px`,

  shadows: {
    small:
      '8px 8px 8px 0 rgba(0, 0, 0, 0.323), 0 8px 6px 0 rgba(0, 0, 0, 0.19)',
    regular:
      '8px 8px 8px 8px rgba(0, 0, 0, 0.323), 8px 8px 20px 8px rgba(0, 0, 0, 0.19)',
  },
});
