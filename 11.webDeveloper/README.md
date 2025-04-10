# React Project with Routing, Axios, and Custom Hooks

This project demonstrates how to structure a React application using best practices such as route separation, global Axios instance, and custom hooks. It consumes data from the public API [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

## 🎥 Demo Pictures
<img src="https://github.com/user-attachments/assets/4f2006dd-bd3e-4289-b056-b947fb10cd70" style="width:250px" />

<img src="https://github.com/user-attachments/assets/fb11debd-7595-4a0c-9fe9-6440fb79397a" style="width:250px" />

<img src="https://github.com/user-attachments/assets/71e81695-506b-4378-92d2-7bb3fb6ed29b" style="width:500px" />

## 📁 Project Structure

The project is organized into the following main folders:

- `components/`: Reusable UI components such as `Post`, `Todos`, and `Users`.
- `hooks/`: Custom React hooks like `useCustomSearchParams`.
- `providers/`: Shared instances like the configured `axios` client.
- `services/`: Files responsible for making API requests.

## 🚀 Technologies Used

- React
- React Router (`react-router`)
- Axios
- Vite
- JSONPlaceholder API

## 🌐 Routing

The app uses `react-router` to define multiple routes:

```jsx
const routes = [
  { path: "/", element: <DefaultPath /> },
  { path: "/users", element: <Users numUsers={5} /> },
  { path: "/posts", element: <Post numPosts={5} /> },
  { path: "/todos", element: <Todos numTodos={5} /> },
  { path: "users/:id", element: <User /> },
];
```

These routes allow navigation between different resources like users, posts, and todos.

## 🔄 Axios Configuration

A single axios instance is created inside the `providers/client.js` file:

```js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export default instance;
```

This instance is then reused across all service files, such as `services/user.js`:

```js
import instance from "../providers/client";

export const listUsers = async () => {
  return await instance.get("users");
};

export const listUser = async (id) => {
  return await instance.get(`users/${id}`);
};
```

## 🧩 Custom Hook

A custom hook `useCustomSearchParams` was created to handle pagination parameters from the URL:

```js
import { useSearchParams } from "react-router";

export const useCustomSearchParams = (defaultMax = 10, defaultOffset = 0) => {
  const [searchParams] = useSearchParams();

  const max = parseInt(searchParams.get("max")) || defaultMax;
  const offset = parseInt(searchParams.get("offset")) || defaultOffset;

  return { max, offset };
};
```

This makes it easy to paginate API results using query parameters like `?max=5&offset=10`.

## 📦 Installation & Usage

1. Clone this repo  
2. Run `npm install`  
3. Start the development server:  
   ```bash
   npm run dev
   ```
4. Access the app at [http://localhost:5173](http://localhost:5173)

---

Feel free to improve this project, fork it, or open issues for suggestions. 🚀
