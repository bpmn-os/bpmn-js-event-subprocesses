# bpmn-js-collapse-event-subprocess

This [bpmn-js](https://github.com/bpmn-io/bpmn-js) extension adds a popup menu entry that collapses or expands an event sub-process, and an optional palette entry that creates one.

## Usage

The default export is the collapse/expand toggle. Add `bpmn-js-collapse-event-subprocess/palette` as well for the palette entry.

### Collapse and expand

The default export adds a popup menu entry that collapses or expands an event sub-process.

```javascript
import CollapseEventSubProcess from 'bpmn-js-collapse-event-subprocess';

new BpmnModeler({
  additionalModules: [ CollapseEventSubProcess ]
});
```

### Palette

The optional palette entry creates an expanded event sub-process containing a start event.

```javascript
import CollapseEventSubProcess from 'bpmn-js-collapse-event-subprocess';
import EventSubProcessPaletteEntry from 'bpmn-js-collapse-event-subprocess/palette';

new BpmnModeler({
  additionalModules: [ CollapseEventSubProcess, EventSubProcessPaletteEntry ]
});
```

## License

MIT licensed

Copyright (C) 2026 Asvin Goel
