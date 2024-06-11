const developmentConfig = {
    host: "localhost",
    port: 3306,
    name: "loja_veiculo",
    dialect: "mysql",
    user: "root",
    password: ""
};

const productionConfig = {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306', 10),
    name: process.env.BD_NAME || 'loja_veiculo',
    dialect: process.env.BD_DIALECT || 'mysql',
    user: process.env.BD_USER || 'root',
    password: process.env.BD_PASS || ''
};

export const db = process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig;

