declare namespace NodeJs {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PORT: string;
    DATABASE_URL: string;
    JWT_SECRET_KEY: string | undefined;
    MONGODB_CLUSTER_PASSWORD: string;
  }
}
