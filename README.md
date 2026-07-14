# bpmn-js-event-subprocesses

This [bpmn-js](https://github.com/bpmn-io/bpmn-js) extension adds support for event sub-processes: a palette entry to create one and a popup menu entry to collapse or expand it.

## Usage

Each part is a separate diagram-js module. The modules can be added to `additionalModules` together or on their own.

### Everything

The default export bundles the palette entry and the popup menu entry.

```javascript
import EventSubProcesses from 'bpmn-js-event-subprocesses';

new BpmnModeler({
  additionalModules: [ EventSubProcesses ]
});
```

### Palette

The palette entry creates an expanded event sub-process.

```javascript
import EventSubProcessPaletteEntry from 'bpmn-js-event-subprocesses/palette';

new BpmnModeler({
  additionalModules: [ EventSubProcessPaletteEntry ]
});
```

### Popup menu

The popup menu entry collapses or expands an event sub-process.

```javascript
import EventSubProcessPopupMenu from 'bpmn-js-event-subprocesses/popup';

new BpmnModeler({
  additionalModules: [ EventSubProcessPopupMenu ]
});
```

## License

MIT licensed

Copyright (C) 2026 Asvin Goel
