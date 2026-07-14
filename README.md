# bpmn-js-event-subprocesses

This [bpmn-js](https://github.com/bpmn-io/bpmn-js) extension adds support for event sub-processes: a palette entry to create one, a popup menu entry to collapse or expand it, and an event-type decorator for collapsed event sub-processes.

## Usage

Each part is a separate diagram-js module. The modules can be added to `additionalModules` together or on their own.

### Everything

The default export bundles the palette entry, the popup menu entry, and the decorator.

```javascript
import EventSubProcesses from 'bpmn-js-event-subprocesses';

new BpmnModeler({
  additionalModules: [ EventSubProcesses ]
});
```

### Palette

The palette entry creates an event sub-process.

```javascript
import EventSubProcessPaletteEntry from 'bpmn-js-event-subprocesses/palette';

new BpmnModeler({
  additionalModules: [ EventSubProcessPaletteEntry ]
});
```

### Popup menu

The popup menu entry collapses or expands an event sub-process. It depends on the decorator, so collapsed event sub-processes render correctly.

```javascript
import EventSubProcessPopupMenu from 'bpmn-js-event-subprocesses/popup';

new BpmnModeler({
  additionalModules: [ EventSubProcessPopupMenu ]
});
```

### Decorator

The decorator renders collapsed event sub-processes in a read-only viewer.

```javascript
import EventSubProcessDecorator from 'bpmn-js-event-subprocesses/decorator';

new BpmnViewer({
  additionalModules: [ EventSubProcessDecorator ]
});
```

## License

MIT licensed

Copyright (C) 2026 Asvin Goel
