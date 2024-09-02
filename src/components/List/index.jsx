import "./styles.css";

export default function List({ titulo = "exemplo"}) {
  return (
    <div id="header">
      <div>
        <h2>{titulo}</h2>
        
      </div>
      <div>
        <div id="header-pages">
          <a href="/frontend/atividade-grid.html">Layout Grid</a>
          <a href="/frontend/atividade-flexbox.html">Layout Flexbox</a>
          <a href="/frontend/todo-list.html">TO DO LIST</a>
        </div>
      </div>
    </div>
  );
}
