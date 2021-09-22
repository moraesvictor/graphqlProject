import { MikroORM } from '@mikro-orm/core';
import * as C from './constants';
import { Post } from './entities/Post';

const main = async () => {
  const orm = await MikroORM.init({
    entities: [],
    dbName: 'fullstack-project',
    type: 'postgresql',
    debug: !C.__prod__
  });

 orm.em.create(Post, {title: 'My first post '})
 
}

main();