const dbConfig = {
  synchronize: false,
  //   cli: {
  //     migrationsDir: 'src/migration',
  //   },
};
switch (process.env.NODE_ENV) {
  case 'production':
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'db.sqlite',
      entities: ['**/*.entity.js'],
    });
    break;
  case 'development':
    Object.assign(dbConfig, {
      type: 'postgres',
      database: process.env.DATABASE_URL,
      migrationsRun: true,
      entities: ['**/*.entity.js'],
      ssl: {
        rejectUnauthorized: true,
      },
    });
    break;
  case 'test':
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'db.sqlite',
      entities: ['**/*.entity.ts'],
    });
    break;
  default:
    throw new Error('Unknown environment');
}
module.exports = dbConfig;
