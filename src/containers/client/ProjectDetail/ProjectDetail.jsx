import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ContentProjectDetail from "./ContentProjectDetail/ContentProjectDetail";
import HeaderProjectDetail from "./HeaderProjectDetail/HeaderProjectDetail";
import InfoProjectDetail from "./InfoProjectDetail/InfoProjectDetail";
import ModalInfoTask from "./ModalInfoTaskProjectDetail/ModalInfoTask";
import { actGetProjectDetail } from "./module/actions";
import ReactHtmlParser from "react-html-parser";

export default function ProjectDetail(props) {
  const { projectDetail } = useSelector((state) => state.projectDetailReducer);
  const disPatch = useDispatch();
  useEffect(() => {
    const idProject = props.match.params.projectId;
    disPatch(actGetProjectDetail(idProject));
  }, []);
  console.log("projectDetail", projectDetail);
  return (
    <div className="main">
      <HeaderProjectDetail projectDetail={projectDetail} />
      <h4>{projectDetail?.projectName}</h4>
      <p>{ReactHtmlParser(projectDetail?.description)}</p>
      <InfoProjectDetail members={projectDetail?.members} />
      <ContentProjectDetail listTask={projectDetail?.lstTask} />
      <ModalInfoTask />
    </div>
  );
}
