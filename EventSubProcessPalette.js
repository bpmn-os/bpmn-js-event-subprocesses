// Palette provider that adds a "Create expanded event sub-process" entry, dropping an expanded
// bpmn:SubProcess with triggeredByEvent = true, pre-populated with a start event (as bpmn-js does for a
// plain expanded sub-process).
export default class EventSubProcessPalette {
  constructor(create, elementFactory, palette, translate) {
    this.create = create;
    this.elementFactory = elementFactory;
    this.translate = translate;
    palette.registerProvider(this);
  }

  getPaletteEntries() {
    const { create, elementFactory, translate } = this;

    function createEventSubProcess(event) {
      const subProcess = elementFactory.createShape({
        type: 'bpmn:SubProcess',
        x: 0,
        y: 0,
        isExpanded: true,
        triggeredByEvent: true
      });

      const startEvent = elementFactory.createShape({
        type: 'bpmn:StartEvent',
        x: 40,
        y: 82,
        parent: subProcess
      });

      create.start(event, [ subProcess, startEvent ], {
        hints: {
          autoSelect: [ subProcess ]
        }
      });
    }

    return {
      'create.event-subprocess-expanded': {
        group: 'activity',
        className: 'bpmn-icon-event-subprocess-expanded',
        title: translate('Create expanded event sub-process'),
        action: {
          dragstart: createEventSubProcess,
          click: createEventSubProcess
        }
      }
    };
  }
}

EventSubProcessPalette.$inject = [
  'create',
  'elementFactory',
  'palette',
  'translate'
];
