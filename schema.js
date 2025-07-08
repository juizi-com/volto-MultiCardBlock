
const schema = () => ({
  title: 'Multi Card Block',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['alignment', 'columns', 'items'],
    },
  ],
  properties: {
    alignment: {
      title: 'Content alignment',
      choices: [
        ['left', 'Left'],
        ['center', 'Center'],
        ['right', 'Right'],
      ],
      type: 'string',
      default: 'left',
    },
    columns: {
      title: 'Number of columns (desktop)',
      type: 'number',
      minimum: 1,
      maximum: 6,
      default: 3,
    },
    items: {
      title: 'Cards',
      widget: 'object_list',
      default: [],
      schema: {
        title: 'Card',
        fieldsets: [
          {
            id: 'default',
            title: 'Default',
            fields: ['title', 'description', 'linkText', 'url', 'anchor', 'image'],
          },
        ],
        properties: {
          title: {
            title: 'Title',
            type: 'string',
          },
          description: {
            title: 'Introduction',
            type: 'string',
          },
          linkText: {
            title: 'Link text',
            type: 'string',
          },
          url: {
            title: 'Link URL',
            widget: 'object_browser',
            mode: 'link',
            allowExternals: true,
          },
          anchor: {
            title: 'Anchor (optional)',
            type: 'string',
            description: 'Appends to link. If no link is set, this becomes the target.',
          },
          image: {
            title: 'Background image',
            widget: 'image',
          },
        },
        required: [],
      },
    },
  },
  required: [],
});

export default schema;
