# React Forms, Validations & Shopping Cart

> 📹 **[My video title (It is in another machine)]**  
> *(my video here)*

## 📌 Overview

During this week, I studied how to handle **forms in React** using the `react-hook-form` library and how to apply **form validations** with `yup`, integrated through the `@hookform/resolvers/yup`.

---

## 🧪 Form with Validation + POST Request

I practiced creating a POST request to a fake API using `axios`. The validation schema required:

- A title with at least 3 characters
- A post body with at least 30 characters

### 🔧 Fake API Setup

**`providers/fakeApi.js`**
```js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export default instance;
```

**`services/posts.js`**
```js
import instance from "../providers/fakeApi";

export const createPost = async (body) => {
  try {
    const response = await instance.post("/posts", body);
    return response;
  } catch (error) {}
};
```

### 📝 React Form Example
```js
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { createPost } from "../services/posts";

const schemaPost = yup.object({
  title: yup.string().min(3, "Title must be bigger than 3 Characters").required(),
  body: yup.string().min(30, "Your post must be bigger than 30 Characters").required(),
}).required();

export const FormExercise = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaPost),
  });

  const onSubmit = async (data) => {
    const response = await createPost(data);
    console.log("Form Response:", response);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="m-2">
      {/* form elements... */}
    </form>
  );
};
```

![form_1](https://github.com/user-attachments/assets/9c921132-dee8-4bb0-9102-452ef48bd2e5)

---

## ✏️ Create or Edit with the Same Form (POST / PUT / PATCH)

Using `useParams`, I checked whether the form should **create** a new object or **edit** an existing one. If an ID was provided, I used `setValue` from `react-hook-form` to prefill form fields.

LocalStorage was used to simulate a small database of cars.

---

## 🛒 Shopping Cart Project

To finish the week, I built a simple **shopping cart application** with React.

### 🔀 Features:
- Local database using React Context API
- Routing with `react-router` for:
  - `/` → Shop screen
  - `/cart` → Cart screen
- Dynamic rendering with `map`
- Total price calculated using `reduce`
- Quantity adjustment and checkout functionality

### 🧠 State Management

The global context stores:
- Product database
- Cart contents
- Total price

```js
// BdContext.js snippet
export const BdContextProvider = ({ children }) => {
  const [mockDb, setMockDb] = useState(db);
  const [cart, setCart] = useState(handleCart);
  const [total, setTotal] = useState(0);
  return <BdContext.Provider value={{ mockDb, setMockDb, cart, setCart, total, setTotal }}>{children}</BdContext.Provider>;
};
```

### 🛍 Products Display
- Each product has image, price, and description.
- The user can click a button to navigate to the cart.

### 🧾 Cart Page
- Table layout to show item, price, quantity, and subtotal.
- Users can:
  - Increase or decrease quantity
  - Checkout (resets cart and shows a success alert)
  - Go back to shop

---

## 🚀 Technologies Used

- **React**
- **react-hook-form**
- **Yup**
- **React Router**
- **Axios**
- **React Context API**
- **Tailwind**

---

## 📚 What I Learned

- Creating dynamic and reusable forms with validation
- Handling both creation and editing scenarios with a single form
- Simulating CRUD operations using local storage and fake APIs
- Managing state globally with React Context
- Building a shopping cart with routing and calculations

---

> This week helped strengthen my understanding of user input handling, form validation, and state management in React!
