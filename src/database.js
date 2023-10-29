import mysqlConnection from 'mysql2/promise';

/*const properties ={
    host: 'localhost',
    user: 'roor',
    password: '',
    database: 'rest-api-libros'
};*/

const properties ={
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'rest-api-libros'
};

export const pool = mysqlConnection.createPool(properties);