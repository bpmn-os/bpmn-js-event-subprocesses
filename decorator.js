import CollapsedEventSubProcessDecorator from './CollapsedEventSubProcessDecorator';

// Renders a collapsed event sub-process. Useful on its own in a read-only viewer that displays models
// containing collapsed event sub-processes.
export default {
  __init__: [ 'eventSubProcessDecorator' ],
  eventSubProcessDecorator: [ 'type', CollapsedEventSubProcessDecorator ]
};
