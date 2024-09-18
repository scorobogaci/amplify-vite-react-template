import { StorageBrowser } from '@aws-amplify/ui-react-storage';

const defaultPrefixes = [
    'public/',
    (identityId: string) => `protected/${identityId}/`,
    (identityId: string) => `private/${identityId}/`,
];

export default function Example() {
    return (
        <StorageBrowser defaultPrefixes={defaultPrefixes} />
)
}