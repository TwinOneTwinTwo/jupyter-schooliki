import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ISettingRegistry } from '@jupyterlab/settingregistry';

/**
 * Initialization data for the app extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'app:plugin',
  description: 'An AI tool for working with Google Classroom.',
  autoStart: true,
  optional: [ISettingRegistry],
  activate: (app: JupyterFrontEnd, settingRegistry: ISettingRegistry | null) => {
    console.log('JupyterLab extension app is activated!');

    if (settingRegistry) {
      settingRegistry
        .load(plugin.id)
        .then(settings => {
          console.log('app settings loaded:', settings.composite);
        })
        .catch(reason => {
          console.error('Failed to load settings for app.', reason);
        });
    }
  }
};

export default plugin;
