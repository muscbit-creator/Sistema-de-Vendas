import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connection = await mysql.createConnection(process.env.DATABASE_URL);

const locations = [
  { name: 'Quadra 1', type: 'quadra' },
  { name: 'Quadra 2', type: 'quadra' },
  { name: 'Quadra 3', type: 'quadra' },
  { name: 'Quadra 4', type: 'quadra' },
  { name: 'Quadra 5', type: 'quadra' },
  { name: 'Quadra 6', type: 'quadra' },
  { name: 'Quadra 7', type: 'quadra' },
  { name: 'Campo de Futebol', type: 'campo' },
];

for (const loc of locations) {
  await connection.execute(
    'INSERT INTO locations (name, type) VALUES (?, ?)',
    [loc.name, loc.type]
  );
  console.log(`✓ ${loc.name} criada`);
}

await connection.end();
console.log('✓ Localizações inicializadas com sucesso!');
