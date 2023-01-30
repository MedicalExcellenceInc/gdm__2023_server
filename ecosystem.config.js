module.exports = {
    apps : [{
      name: 'gdm-danger-202211-server',
      script: './bin/www.js',
      node_args: '--require dotenv/config --max-old-space-size=128',
      watch: true,
      ignore_watch: ["node_modules"],
      exec_interpreter: "babel-node",
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      env_development: {
        "NODE_ENV": "development",
        "DOTENV_CONFIG_PATH": "./.env.development"
      },
      env_production: {
        "NODE_ENV": "production",
        "DOTENV_CONFIG_PATH": "./.env.production"
      }
    }]
  };