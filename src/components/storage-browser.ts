import {
    createStorageBrowser,
    createAmplifyAuthAdapter,
} from '@aws-amplify/ui-react-storage/browser';
import '@aws-amplify/ui-react-storage/storage-browser-styles.css';

// these should match access patterns defined in amplify/storage/resource.ts
const defaultPrefixes = [
    'public/',
    (identityId: string) => `protected/${identityId}/`,
    (identityId: string) => `private/${identityId}/`,
];

export const { StorageBrowser } = createStorageBrowser({
    config: createAmplifyAuthAdapter({
        options: {
            defaultPrefixes
        },
    }),
});