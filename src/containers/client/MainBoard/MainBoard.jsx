import React from "react";
import ContentMainBoard from "./ContentMainBoard/ContentMainBoard";
import HeaderMainBoard from "./HeaderMainBoard/HeaderMainBoard";
import InfoMainBoard from "./InfoMainBoard/InfoMainBoard";
import ModalInfoTask from "./ModalInfoTask/ModalInfoTask";

export default function MainBoard() {
  return (
    <div className="main">
      <HeaderMainBoard />
      <h4>Cyber Board</h4>
      <InfoMainBoard />
      <ContentMainBoard />
      <ModalInfoTask />
    </div>
  );
}
