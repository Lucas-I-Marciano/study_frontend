## Learning React

![kanban](https://github.com/user-attachments/assets/b9ae6fff-42f4-490a-a050-6ee961467b8d)

In week 9, I began my journey into **React.js**. My focus was to understand the fundamentals of components, props, and styling with CSS. I started simple, building individual components like a button, and gradually composed a full Kanban-style app using reusable components and dynamic rendering.

---

### 🧩 Key Learnings

- **Component creation with props**: I created a reusable `Button` component that changes style based on the `variant` prop.
- **Props and dynamic styling**: Passed custom props like `colorScheme`, `variant`, and `disabled` to change the button’s appearance and behavior dynamically.
- **Component architecture**: Built an app using `Header`, `Main`, `Footer`, and `Article` components, each with its own folder and CSS.
- **Array methods in practice**: Used `.map()` to dynamically generate multiple `Article` components.
- **Typography and alignment**: Developed a `Text` component to control text size and alignment using props.
- **Project structure**:
  ```
  src/
  ├── components/
  │   ├── Button/
  │   ├── Header/
  │   ├── Footer/
  │   ├── Main/
  │   ├── Article/
  │   └── Text/
  └── App.jsx
  ```

---

### 🛠 Technologies Used

- React.js
- JavaScript (ES6+)
- CSS Modules
