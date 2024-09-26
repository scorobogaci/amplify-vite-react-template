import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import {storage} from "./storage/resource";
import {signUpTrigger} from "./functions/resource";

defineBackend({
  auth,
  data,
  storage,
  signUpTrigger
});
