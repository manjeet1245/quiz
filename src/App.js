import { useEffect, useState } from "react";

const API = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async (API) => {
      try {
        const response = await fetch(API);
        const data = await response.json();

        if (data.length > 0) {
          setUser(data);
        }

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser(API);
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
