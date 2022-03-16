import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    postgres: {
      api_key: process.env.API_KEY,
      dbUser: process.env.POSTGRES_USER,
      dbPassword: process.env.POSTGRES_PASSWORD,
      dbPort: parseInt(process.env.POSTGRES_PORT, 10),
      dbHOST: process.env.POSTGRES_HOST,
    },
    jwtSecret: process.env.JWT_SECRET,
  };
});
