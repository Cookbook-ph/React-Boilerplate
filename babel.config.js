module.exports = {
    presets: ["@babel/preset-env","@babel/preset-react"],
    plugins:["@babel/plugin-proposal-class-properties"],
    env: {
        production: {
            plugins: ["transform-remove-console"]
        }
    }
}