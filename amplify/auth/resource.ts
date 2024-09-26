import {defineAuth} from '@aws-amplify/backend';
import {postConfirmationSignUpTrigger} from "../functions/resource";

export const auth = defineAuth({
    loginWith: {
        email: true,
    },
    triggers: {
        postConfirmation: postConfirmationSignUpTrigger
    }
});
