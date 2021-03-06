const backgroundColor = '#15191b';
const foregroundColor = '#CDD2E9';
const cursorColor = '#2C85F7';
const borderColor = '#323E4D';
const red = '#fac14f';
const green = '#90c2e7';
const yellow = '#ddb22f';
const blue = '#56aa59';
const magenta = '#c0a8d0';
const cyan = '#f8ccde';
const lightBlack = '#546386';
const lightRed = '#fac14f';
const lightGreen = '#90c2e7';
const lightYellow = '#FFB68E';
const lightBlue = '#56aa59';
const lightMagenta = '#c0a8d0';
const lightCyan = '#f8ccde';
const lightWhite = '#fefbee';

const colors = {
  backgroundColor,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  foregroundColor,
  lightBlack,
  lightRed,
  lightGreen,
  lightYellow,
  lightBlue,
  lightMagenta,
  lightCyan,
  lightWhite,
};

module.exports.decorateBrowserOptions = opts => {
  opts.transparent = false;
  return opts;
};

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    colors,
    selectionColor: 'rgba(224, 239, 254,0.3)',
    cursorColor: config.cursorColor || cursorColor,
    cursorShape: config.cursorShape || 'BLOCK',
    fontSize: config.fontSize || 12,
    fontFamily: config.fontFamily || '"Meslo LG S for Powerline"',
    css: (config.css += `
      .term_fit:not(.term_term) {
        opacity: 0.5 !important;
      }
      .terminal, .term_fit.term_active {
        opacity: 1 !important;
        transition: opacity 0.12s ease-in-out;
        will-change: opacity;
      }
      .term_fit.term_wrapper {
        opacity: 1 !important;
      }
    `),
  });
};
