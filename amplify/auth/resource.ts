import { defineAuth, secret } from "@aws-amplify/backend";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      scopes: ["EMAIL"],
      google: {
        clientId: secret("GOOGLE_CLIENT_ID"),
        clientSecret: secret("GOOGLE_CLIENT_SECRET"),
      },
      callbackUrls: [
        "http://localhost:5173/",
        "https://main.d1tqji0orytvis.amplifyapp.com/",
      ],
      logoutUrls: [
        "http://localhost:5173/",
        "https://main.d1tqji0orytvis.amplifyapp.com/",
      ],
    },
  },
});
