const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        reactStrictMode: true,
        swcMinify: true,
        mongodb_username: "refara08",
        mongodb_password: "Angrybird08",
        mongodb_cluster: "cluster0",
        mongodb_database: "portfolio-contact-dev",
      },
    };
  }

  return {
    env: {
      reactStrictMode: true,
      swcMinify: true,
      mongodb_username: "refara08",
      mongodb_password: "Angrybird08",
      mongodb_cluster: "cluster0",
      mongodb_database: "portfolio-contact",
    },
  };
};
