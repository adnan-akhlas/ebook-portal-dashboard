interface IEnv {
  VITE_API_URL: string;
}

type REQUIRED_ENV = keyof IEnv;

const requiredEnv: REQUIRED_ENV[] = ["VITE_API_URL"];

function checkEnv(): IEnv {
  const env = {} as IEnv;
  requiredEnv.forEach((key) => {
    const value = import.meta.env[key];
    if (!value) {
      throw new Error(`Missing required env: ${key}`);
    }
    env[key] = value;
  });
  return env;
}

export const env = checkEnv();
