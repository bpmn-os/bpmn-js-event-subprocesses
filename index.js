import PaletteModule from './palette';
import CollapseModule from './popup';

// Convenience module bundling everything: the create palette entry, the collapse/expand toggle, and the
// collapsed event sub-process decorator (the decorator comes in via the collapse module's dependency).
export default {
  __depends__: [ PaletteModule, CollapseModule ]
};
