import {
    createStorageBrowser,
    createAmplifyAuthAdapter, elementsDefault,
} from '@aws-amplify/ui-react-storage/browser';
import '@aws-amplify/ui-react-storage/storage-browser-styles.css';

const defaultPrefixes = [
    (identityId: string) => `files/${identityId}/`,
];

export const { StorageBrowser,useControl } = createStorageBrowser({
    elements: elementsDefault,
    config: createAmplifyAuthAdapter({
        options: {
            defaultPrefixes
        },
    }),
});