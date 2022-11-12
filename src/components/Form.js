const Form = () => (
  <section className="formContainer">
    <h2 className="formTitle">
      ADD NEW BOOK
    </h2>
    <form className="form">
      <input className="bookTitleForm" type="text" placeholder="Book title" />
      <input className="bookAuthorForm" type="text" placeholder="Author" />
      <button className="addBtn" type="submit">ADD BOOK</button>
    </form>
  </section>
);

export default Form;
