import "dotenv/config";

export default {
  expo: {
    name: "Denúncia Digital",
    slug: "DenunciaDigital",
    version: "1.2.5",
    sdkVersion: "52.0.0",
    orientation: "portrait",
    icon: "./assets/images/adaptive-icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,

    splash: {
      image: "./assets/images/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#171324"
    },

    scheme: "denunciadigital",

    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        monochromeImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#171324"
      },
      googleServicesFile: "./google-services.json",
      package: "app.denunciadigital"
    },

    web: {
      favicon: "./assets/images/icon.png"
    },

    plugins: [
      "expo-router",
      "expo-font",
      "expo-build-properties"
    ],

    extra: {
      eas: {
        projectId: "eb57dec8-63b1-40ef-bed6-8dd0952eccf7"
      },
      router: {
        origin: false
      },
      // 🔐 Variáveis vindas do .env
      firebaseApiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID
    },

    owner: "duraesrobson"
  }
}
