import {defineStorage} from "@aws-amplify/backend";

export const storage = defineStorage({
  name: 'myProjectFiles',
  access: (allow) => ({
    'files/{entity_id}/*': [
      allow.entity('identity').to(['read', 'write', 'delete'])
    ]
  })
});