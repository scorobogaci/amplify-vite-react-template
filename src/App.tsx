import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import '@aws-amplify/ui-react-storage/storage-browser-styles.css';
import {StorageBrowser} from "@aws-amplify/ui-react-storage";

function App() {

  const defaultPrefixes = [
    // 'public/',
    // (identityId: string) => `protected/${identityId}/`,
    (identityId: string) => `files/${identityId}/`,
  ];

  return (
      <Authenticator>
        {({signOut, user}) => (
            <>
              <h1>Hi {user?.signInDetails?.loginId}</h1>
              <StorageBrowser defaultPrefixes={defaultPrefixes}></StorageBrowser>
              <button onClick={signOut}>Sign out</button>
            </>
        )}
      </Authenticator>
  );
}

export default App;
