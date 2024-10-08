import '@aws-amplify/ui-react/styles.css'
import '@aws-amplify/ui-react-storage/storage-browser-styles.css';
import {StorageBrowser} from "@aws-amplify/ui-react-storage";
import type {Schema} from "../amplify/data/resource.ts";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function App() {

    const defaultPrefixes = [
        (identityId: string) => `files/${identityId}/`,
    ];

    const createAccount = (identity:string,email:string)=>{
        client.models.Account.create({identity,email})
    }

    const getAuthDetails = async () => {
        // const session = await fetchAuthSession();
        // console.log("Cognito IdentityId : ", session.identityId);
        // const user = await getCurrentUser();
        // console.log("current user : ", user);
        // const userAttributes = await fetchUserAttributes();
        // console.log("userAttributes : ", userAttributes);
        // const isFirstTimeLogin = !userAttributes['custom:identity'] && userAttributes['custom:firstLogin'] === 'true';
        // if (1===1 || isFirstTimeLogin) {
        //     console.log("Amplify.getConfig().API.GraphQL : ",Amplify.getConfig()?.API?.GraphQL);
        //     console.log("Creating account on first sign in...")
        //     await updateUserAttributes({
        //         userAttributes: {
        //             'custom:identity': session.identityId,
        //             'custom:firstLogin':'false'
        //         },
        //     });
        // }
        createAccount('hgdwehdqwdqd','scorobogaciion@gmail.com');
    }

    return (
/*        <Authenticator>
            {({signOut, user}) => (
                <>
                    <h1>Hi {user?.signInDetails?.loginId}</h1>
                    <StorageBrowser defaultPrefixes={defaultPrefixes}></StorageBrowser>
                    <button onClick={signOut}>Sign out</button>
                    <button onClick={getAuthDetails}>Log auth details</button>
                </>
            )}
        </Authenticator>*/
        <>
            <StorageBrowser defaultPrefixes={defaultPrefixes}></StorageBrowser>
            <button onClick={getAuthDetails}>Log auth details</button>
        </>
    );
}

export default App;
