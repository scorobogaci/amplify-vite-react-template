import { defineFunction } from "@aws-amplify/backend";

export const signUpTrigger = defineFunction({
    name: "sign-up-trigger",
    entry: "./handler.ts"
});