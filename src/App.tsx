
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import {StorageBrowser} from "@aws-amplify/ui-react-storage";

const client = generateClient<Schema>();

function App() {

  const defaultPrefixes = [
    'public/',
    (identityId: string) => `protected/${identityId}/`,
    (identityId: string) => `private/${identityId}/`,
  ];

  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }

    function deleteTodo(id: string) {
        client.models.Todo.delete({id});
    }

  return (

      <Authenticator>
        {({signOut, user}) => (
            <>
              <main style={{display:"none"}}>
                <h1>{user?.signInDetails?.loginId}'s todos</h1>
                <button onClick={createTodo}>+ new</button>
                <ul>
                  {todos.map((todo) => (
                      <li
                          key={todo.id}
                          onClick={() => deleteTodo(todo.id)}
                      >{todo.content}</li>
                  ))}
                </ul>
              </main>
              <StorageBrowser defaultPrefixes={defaultPrefixes}></StorageBrowser>
              <button onClick={signOut}>Sign out</button>
            </>

        )}
      </Authenticator>
  );
}

export default App;
