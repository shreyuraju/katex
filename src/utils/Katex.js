import katex from 'katex';
import 'katex/dist/katex.min.css';

export const renderMath = (expression, options = {}) => {
  try {
    return katex.renderToString(expression, { throwOnError: false, ...options });
  } catch (error) {
    return `<span class="katex-error">${error.message}</span>`;
  }
};
