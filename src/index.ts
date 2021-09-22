import { MikroORM } from '@mikro-orm/core';
import * as C from './constants';

const main = async () => {
  const orm = await MikroORM.init({
    entities: [],
    dbName: 'fullstack-project',
    type: 'postgresql',
    debug: !C.__prod__
  });
 
}

main();