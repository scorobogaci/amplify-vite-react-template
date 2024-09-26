import { defineAuth } from '@aws-amplify/backend';
import {postConfirmation} from "../functions/resource";

export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  triggers:{
    postConfirmation: postConfirmation
  }
});
