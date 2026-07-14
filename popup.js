import DecoratorModule from './decorator';

import CollapseEventSubProcess from './CollapseEventSubProcess';

// The collapse/expand toggle for event sub-processes. Depends on the decorator so a collapsed event
// sub-process always renders correctly.
export default {
  __depends__: [ DecoratorModule ],
  __init__: [ 'eventSubProcessPopupMenu' ],
  eventSubProcessPopupMenu: [ 'type', CollapseEventSubProcess ]
};
