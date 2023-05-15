const client = require('./client');

const dropTables = async () => {
  try {
    console.log('Starting to drop all tables...');
    await client.query(`
    DROP TABLE IF EXISTS users;
    `);
    console.log('Finished droppping all tables successfully!');
  } catch (error) {
    console.error('Error dropping tables');
    throw error;
  }
};

const createTables = async () => {
  try {
    console.log('Starting to create all tables...');
    await client.query(`
    CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    );
    `);
    console.log(
      'Finished creating all tables successfully! Now, to add some data!'
    );
  } catch (error) {
    console.error('Error creating tables');
    throw error;
  }
};

const createInitialUsers = async () => {
  console.log('Adding initial users to "Users" table...');
  console.log('Finished adding users!');
};

const rebuildDB = async () => {
  try {
    await dropTables();
    await createTables();
    await createInitialUsers();
  } catch (error) {
    console.error('Error during rebuildDB', error);
    throw error;
  } finally {
    await client.end();
    console.log("Database has been rebuilt, and you're good to go!");
  }
};

rebuildDB();
