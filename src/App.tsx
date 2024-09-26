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

        await updateUserAttributes({
            userAttributes: {
                'custom:identityID': session.identityId
            },
        });
    }

    return (
        <Authenticator>
            {({signOut, user}) => (
                <>
                    <h1>Hi {user?.signInDetails?.loginId}</h1>
                    <StorageBrowser defaultPrefixes={defaultPrefixes}></StorageBrowser>
                    <button onClick={signOut}>Sign out</button>
                    <button onClick={getAuthDetails}>Log details</button>
                </>
            )}
        </Authenticator>
    );
}

export default App;
