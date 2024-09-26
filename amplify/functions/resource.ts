import { defineFunction } from "@aws-amplify/backend";

export const postConfirmationSignUpTrigger = defineFunction({
    name: "post-confirmation-trigger",
    entry: "./triggers/post-confirmation-sign-up-trigger.ts"
});