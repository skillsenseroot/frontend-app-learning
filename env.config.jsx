import UnitTranslationPlugin from '@edx/unit-translation-selector-plugin';
import { PLUGIN_OPERATIONS, DIRECT_PLUGIN } from '@openedx/frontend-plugin-framework';

// Load environment variables from .env file
const config = {
  ...process.env,
  pluginSlots: {
    unit_title_plugin: {
      plugins: [
        {
          op: PLUGIN_OPERATIONS.Insert,
          widget: {
            id: 'unit_title_plugin',
            type: DIRECT_PLUGIN,
            priority: 1,
            RenderWidget: UnitTranslationPlugin,
          },
        },
      ],
    },
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
