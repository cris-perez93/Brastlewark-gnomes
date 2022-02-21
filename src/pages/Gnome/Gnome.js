import { useParams } from "react-router-dom";
import ModalCard from "../../components/ModalCard/CardModal";
import { useSelector } from "react-redux";

const Gnome = () => {
  const { name } = useParams();
  const gnome = useSelector((state) => state.gnomes.gnomes);
  const gnomeId = gnome.find((gnome) => gnome.name === name);

  return <ModalCard gnomeId={gnomeId} />;
};

export default Gnome;
