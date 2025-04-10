## React Global Context, `useEffect`, `useReducer` and Backend Integration

![shoes](https://github.com/user-attachments/assets/056ac08d-6276-4853-a88d-b70a9c414e4e)

This week marked a major leap forward in my React journey. I learned how to manage global state with **Context API**, handle asynchronous requests with **`useEffect`**, and manage component state transitions with **`useReducer`**. I also built a backend using **Express** and **MongoDB** to serve and manage dynamic sneaker listings.

---

### 🧠 What I Learned

#### ✅ Global Context with React

- Created a `ThemeContext` to share theme values across components.
- Used `useContext` to access context values inside deeply nested components.
- Enabled dynamic theme switching (e.g., light/dark mode) with buttons.

```js
const theme = useContext(ThemeContext);
return <button className={`${theme}`}>{children}</button>;
```

#### 🔄 `useEffect` for API Requests

- Connected to `https://jsonplaceholder.typicode.com` using a custom utility function.
- Updated components on response data changes using state.

```js
useEffect(() => {
  const asyncQuery = async () => {
    const response = await query(toQuery);
    setText(JSON.stringify(response));
  };
  asyncQuery();
}, [toQuery]);
```

#### 🧮 `useReducer` for State Management

- Used `useReducer` to manage complex application states (loading, success, failure).
- Shared reducer logic globally via `QueryContext`.

```js
const reducer = (state, action) => {
  switch (action.type) {
    case "success": return action.data;
    case "loading":
    case "failed": return [];
    default: return state;
  }
};
```

---

### 🛠 Backend Integration (Express + MongoDB)

I built a REST API using Express that connects to a MongoDB database. Key features include:

- 👟 **Sneaker listing** (`GET /api/shoes`)
- ❤️ **Like/unlike logic** per user
- ➕ Add new sneakers
- ❌ Delete sneakers
- 🔁 Toggle like status via `PATCH /api/liked/:id`

```js
app.get("/api/shoes", async (req, res) => {
  const data = await shoe.find({}).toArray();
  res.json(data);
});
```

---

### 🖥️ Fullstack Sneaker Listing App

On the frontend:

- Dynamically fetches sneaker data and liked items.
- Matches `shoe_id` to display the liked status.
- Uses reusable `Card` and `ListCards` components to show each item beautifully.

```jsx
<Card
  imageUrl={element.image}
  brand={element.brand}
  price={element.price}
  is_shoe_liked={isShoeLiked}
/>
```

---

### 🧱 Stack Used

- **Frontend:** React + Vite, JavaScript (ES6+), CSS
- **State Management:** Context API, `useEffect`, `useReducer`
- **Backend:** Express.js, MongoDB, Node.js
- **Database:** MongoDB Atlas
- **Dev Tools:** Postman, MongoDB Compass
