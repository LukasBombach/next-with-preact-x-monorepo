const path = require("path");

const plugin = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.defaultLoaders) throwVersionError();
      if (options.isServer) useReactAsExternals(config);
      usePreactCompat(config);
      return typeof nextConfig.webpack === "function"
        ? nextConfig.webpack(config, options)
        : config;
    }
  });
};

function throwVersionError() {
  throw new Error(
    "This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade"
  );
}

function useReactAsExternals(config) {
  config.externals = ["react", "react-dom", ...config.externals];
}

function usePreactCompat(config) {
  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    react: "preact/compat",
    react$: "preact/compat",
    "react-dom": "preact/compat",
    "react-dom$": "preact/compat"
  });
}

// TODO This is hardcoded in the first draft, we'll have to see about customization later
function getPathToClientJs() {
  return path.resolve(process.cwd(), "client.js");
}

module.exports = plugin;
