import CollapseEventSubProcess from './CollapseEventSubProcess';

// The collapse/expand toggle for event sub-processes — the default export. Add the './palette' export as
// well for a palette entry that creates event sub-processes.
export default {
  __init__: [ 'eventSubProcessCollapse' ],
  eventSubProcessCollapse: [ 'type', CollapseEventSubProcess ]
};
