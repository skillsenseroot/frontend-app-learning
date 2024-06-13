import { PLUGIN_OPERATIONS, DIRECT_PLUGIN } from '@openedx/frontend-plugin-framework';

// Load environment variables from .env file
const config = {
  ...process.env,
  pluginSlots: {
    footer_slot: {
      plugins: [
        {
          // Hide the default footer
          op: PLUGIN_OPERATIONS.Hide,
          widgetId: 'default_contents',
        },
        // {
        //   // Insert a custom footer
        //   op: PLUGIN_OPERATIONS.Insert,
        //   widget: {
        //     id: 'custom_footer',
        //     type: DIRECT_PLUGIN,
        //     RenderWidget: () => (
        //       <h1 style={{textAlign: 'center'}}>
        //         <image src={logoskillsense} />
        //       </h1>
        //     ),
        //   },
        // },
      ]
    },
  },
};

export default config;
