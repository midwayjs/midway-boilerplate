import {LightGenerator} from 'light-generator';
import { join } from 'path';
import { tmpdir } from 'os';

export const createTemplate = async (templateName) => {
  const targetPath = join(tmpdir(), 'boilerplate-test', templateName + '-generate');
  const templatePath = join(__dirname, '../v2/', templateName);

  const generator = new LightGenerator().defineLocalPath({
    templatePath: templatePath,
    targetPath,
  });

  await generator.run();
  return targetPath;
}
