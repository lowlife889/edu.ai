import React from "react";
import FlashCardSection from "./FlashCardSection";
import PreguntasSection from "./PreguntasSection";
import Multiple from "./MultipleSection";
import VoFSection from "./VoFSection";
import Crucigramas from "./Crucigramas";
import Acierta from "./Acierta";
import MultiplePDFSection from "./MultiplePDFSection";
function ModalidadHandler({ modalidad, respuesta, finish, pdf, apunte }) {
  if (modalidad === "Flash cards") {
    return <FlashCardSection response={respuesta} />;
  } else if (modalidad === "Preguntas y respuestas") {
    return <PreguntasSection response={respuesta} />;
  } else if (modalidad === "Multiple choice") {
    if (pdf || apunte) {
      return <MultiplePDFSection response={respuesta} finish={finish} />;
    } else {
      return <Multiple response={respuesta} finish={finish} />;
    }
  } else if (modalidad === "Verdadero o falso") {
    return <VoFSection response={respuesta} finish={finish} />;
  } else if (modalidad === "Crucigramas") {
    return <Crucigramas response={respuesta} finish={finish} />;
  } else if (modalidad === "Acierta la palabra") {
    return <Acierta response={respuesta} finish={finish} />;
  } else if (modalidad === "Crucigramas"){
    return <Crucigramas response={respuesta} finish={finish} />;
  }else{
    return <></>
  }
}

export default ModalidadHandler;
