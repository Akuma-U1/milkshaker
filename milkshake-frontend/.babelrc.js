module.exports = {
    "presets":  [require.resolve('next/babel')],
    "plugins": [
      ["@emotion"],
      [
        "import",
        {
          "libraryName": "@chakra-ui/core",
          "libraryDirectory": "dist",
          "camel2DashComponentName": false
        }
      ]
    ]
  }