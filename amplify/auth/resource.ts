import {defineAuth} from '@aws-amplify/backend';
import {postAuthenticationTrigger, postConfirmationSignUpTrigger} from "../functions/resource";

export const auth = defineAuth({
    loginWith: {
        email: true,
    },
    triggers: {
        postConfirmation: postConfirmationSignUpTrigger,
        postAuthentication: postAuthenticationTrigger
    },
    userAttributes: {
        "custom:identityID": {
            dataType: "String",
            mutable: true,
            maxLen: 50,
            minLen: 1,
        },
    },
});
