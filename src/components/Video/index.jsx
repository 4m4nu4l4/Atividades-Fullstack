import "./styles.css";

export default function Video() {
  return (
    <div class="container">
    <div id="information">
      <p id="introducao">
        Esse arquivo em html contém a atividade de desenvolvimento frontend,
        a atividade consiste nos seguintes tópicos:{" "}
      </p>
      <div id="topicos">
        <ul>
          <li>Crie uma página HTML básica com cabeçalho, corpo e rodapé</li>
          <li>
            Utilize listas ordenadas e não ordernadas para organizar
            informações
          </li>
          <li>Incorpore imagens e vídeos usando tags HTML apropriadas</li>
          <li>Estilize com tag, classe e ID</li>
          <li>
            Utilize diferentes unidades de medida para posicionamento e
            tamanho de elementos
          </li>
          <li>Crie um layout flexível - Flexbox</li>
          <li>Faça uma página responsiva usando Grid Layout</li>
        </ul>
      </div>
    </div>
    <p id="title-forms">Utilizando Formulário em HTML</p>
    <form>
      <fieldset>
        <div>
          <label for="name">Nome do usuário:</label>
          <input class="form-control" type="text" id="name" />
        </div>
        <div>
          <label for="email">E-mail:</label>
          <input class="form-control" type="email" id="email" />
        </div>
        <div>
          <label for="tel">Telefone:</label>
          <input class="form-control" type="tel" id="tel" maxlength="15" />
        </div>
        <div>
          <label for="address">CEP:</label>
          <input class="form-control" type="text" id="address" max="10" />
        </div>
        <div>
          <label for="state">Estado de Origem:</label>
          <select class="form-select" id="state">
            <option value="SC">SC</option>
            <option value="PR">PR</option>
            <option value="SP">SP</option>
          </select>
        </div>
        <div>
          <label for="city">Cidade de Origem:</label>
          <select class="form-select" id="city">
            <option value="Florianópolis">Florianópolis</option>
            <option value="Curitiba">Curitiba</option>
            <option value="São Paulo">São Paulo</option>
          </select>
        </div>
        <div>
          <button type="submit" class="btn-submit">
            Enviar
          </button>
        </div>
      </fieldset>
    </form>
  </div>
  );
}
