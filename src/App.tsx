import {Authenticator} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import '@aws-amplify/ui-react-storage/storage-browser-styles.css';
import {StorageBrowser} from "@aws-amplify/ui-react-storage";
import {fetchAuthSession, fetchUserAttributes, getCurrentUser, updateUserAttributes} from 'aws-amplify/auth';

function App() {

    const defaultPrefixes = [
        (identityId: string) => `files/${identityId}/`,
    ];

    const getAuthDetails = async () => {
        const session = await fetchAuthSession();
        console.log("Cognito IdentityId : ", session.identityId);
        const user = await getCurrentUser();
        console.log("current user : ", user);
        const userAttributes = await fetchUserAttributes();
        console.log("userAttributes : ", userAttributes);
        const isFirstTimeLogin = !userAttributes['custom:identity'] && userAttributes['custom:firstLogin'] === 'true';
        if (isFirstTimeLogin) {
            console.log("Mapping user identity...")
            await updateUserAttributes({
                userAttributes: {
                    'custom:identity': session.identityId,
                    'custom:firstLogin':'false'
                },
            });
        }
    }

    return (
        <Authenticator>
            {({signOut, user}) => (
                <>
                    <h1>Hi {user?.signInDetails?.loginId}</h1>
                    <StorageBrowser defaultPrefixes={defaultPrefixes}></StorageBrowser>
                    <button onClick={signOut}>Sign out</button>
                    <button onClick={getAuthDetails}>Log auth details</button>
                </>
            )}
        </Authenticator>
    );
}

export default App;
