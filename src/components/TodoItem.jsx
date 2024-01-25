function TodoItem({ title, description }) {
  return (
    <div style={{backgroundColor:'green'}}>
      <h2>{title}</h2>
      <h4>{description}</h4>
    </div>
  );
}

export default TodoItem;
