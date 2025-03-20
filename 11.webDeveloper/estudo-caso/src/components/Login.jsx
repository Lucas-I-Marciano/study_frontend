export const Login = () => {
  return (
    <div>
      <form>
        <label>
          Email:
          <input name="email" type="text"></input>
        </label>
        <label>
          Password:
          <input name="password" type="password"></input>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
