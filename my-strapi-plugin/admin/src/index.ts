import { PLUGIN_ID } from './pluginId';
import { Initializer } from './components/Initializer';
import { Test } from './components/Test';

export default {
  register(app: any) {
    app.addFields({
      type: 'richtext',
      Component: Test
    })

    app.registerPlugin({
      id: PLUGIN_ID,
      initializer: Initializer,
      isReady: false,
      name: PLUGIN_ID,
    });
  },
};
