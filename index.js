import PaletteModule from './palette';
import CollapseModule from './popup';

// Convenience module bundling both parts: the create palette entry and the collapse/expand toggle.
export default {
  __depends__: [ PaletteModule, CollapseModule ]
};
