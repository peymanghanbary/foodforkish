const { withAndroidManifest } = require("@expo/config-plugins")

module.exports = function androiManifestPlugin(config) {
  return withAndroidManifest(config, async config => {
    let androidManifest = config.modResults.manifest

    // add the tools to apply permission remove
    androidManifest.$ = {
      ...androidManifest.$,
      "xmlns:tools": "http://schemas.android.com/tools",
    }

    // add remove property to the audio record permission
    // androidManifest["uses-permission"] = androidManifest["uses-permission"].map(
    //   perm => {
    //     if (perm.$["android:name"] === "android.permission.RECORD_AUDIO") {
    //       perm.$["tools:node"] = "remove"
    //     }
    //     return perm
    //   }
    // )
    androidManifest["application"]['meta-data'] = androidManifest["uses-permission"].map(
      perm => {
        if (perm.$["android:name"] === "pushe_token") {
          perm.$["android:value"] = "{PUSHE_TOKEN}"
        }
        return perm
      }
    )

    return config
  })
}