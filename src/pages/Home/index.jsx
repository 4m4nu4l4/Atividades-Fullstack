import "./styles.css";
import List from "../../components/List";
import Videos from "../../components/Videos";
import Forms from "../../components/Forms";

export default function Home() {
  return (
    <main>
      <List titulo="minha tela exemplo" /> 
      <List />
      <Videos />
      <Forms />
    </main>
  );
}
