const backgroundColor = '#000000';
const foregroundColor = '#CDD2E9';
const cursorColor = '#2C85F7';
const borderColor = '#323E4D';
const colors = {
  black        : backgroundColor,
  red          : '#fac14f',
  green        : '#90c2e7',
  yellow       : '#ddb22f',
  blue         : '#56aa59',
  magenta      : '#c0a8d0',
  cyan         : '#f8ccde',
  white        : foregroundColor,
  lightBlack   : '#546386',
  lightRed     : '#fac14f',
  lightGreen   : '#90c2e7',
  lightYellow  : '#FFB68E',
  lightBlue    : '#56aa59',
  lightMagenta : '#c0a8d0',
  lightCyan    : '#f8ccde',
  lightWhite   : '#fefbee',
};

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    colors,
    selectionColor: 'rgba(224, 239, 254,0.3)',
    cursorColor:    config.cursorColor || cursorColor,
    cursorShape:    config.cursorShape || 'BLOCK',
    fontSize:       config.fontSize    || 12,
    fontFamily:     config.fontFamily  || '"Meslo LG S for Powerline"',
    css: `
      ${config.css || ''}
      .terminal, .term_fit:not(.term_term) { opacity: 1 !important; }
      ::selection {
          background: #9198A2 !important;
      }
    `,
  });
};
