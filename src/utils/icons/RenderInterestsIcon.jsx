import BashIcon from "@/icons/BashIcon";
import CppIcon from "@/icons/CppIcon";
import Dockericon from "@/icons/DockerIcon";
import JavaIcon from "@/icons/JavaIcon";
import NextIcon from "@/icons/NextIcon";
import PythonIcon from "@/icons/PythonIcon";
import ReactIcon from "@/icons/ReactIcon";
import ScalaIcon from "@/icons/ScalaIcon";
import Terraformicon from "@/icons/TerraformIcon";
import SvelteIcon from "@/icons/SvelteIcon";
import ReduxIcon from "@/icons/ReduxIcon";
import JavascriptIcon from "@/icons/JavascriptIcon";
import TypescriptIcon from "@/icons/TypescriptIcon";
import HtmlIcon from "@/icons/HtmlIcon";
import CssIcon from "@/icons/CssIcon";
import SassIcon from "@/icons/SassIcon";
import EjsIcon from "@/icons/EjsIcon";
import TailwindIcon from "@/icons/TailwindIcon";
import ReactRouterIcon from "@/icons/ReactRouterIcon";
import MuiIcon from "@/icons/MuiIcon";
import AntDIcon from "@/icons/AntDIcon";
import SpringbootIcon from "@/icons/SpringbootIcon";
import NodejsIcon from "@/icons/NodejsIcon";
import FlaskIcon from "@/icons/FlaskIcon";
import GoIcon from "@/icons/GoIcon";
import CamundaIcon from "@/icons/CamundaIcon";
import RustIcon from "@/icons/RustIcon";
import FastApiIcon from "@/icons/FastApiIcon";
import MySqlIcon from "@/icons/MySqlIcon";
import PostgresqlIcon from "@/icons/PostgresqlIcon";
import ElasticsearchIcon from "@/icons/ElasticsearchIcon";
import SqliteIcon from "@/icons/SqliteIcon";
import MongoIcon from "@/icons/MongoIcon";
import CosmosIcon from "@/icons/CosmosIcon";
import BigtableIcon from "@/icons/BigtableIcon";
import SparkIcon from "@/icons/SparkIcon";
import KafkaIcon from "@/icons/KafkaIcon";
import PubsubIcon from "@/icons/PubsubIcon";
import EventHubsIcon from "@/icons/EventHubsIcon";
import AirflowIcon from "@/icons/AirflowIcon";
import OpenlineageIcon from "@/icons/OpenlineageIcon";

export default function RenderInterestsIcon({ icon, className }) {
  switch (icon) {
    case "cpp":
      return <CppIcon />;
    case "java":
      return <JavaIcon />;
    case "python":
      return <PythonIcon />;
    case "scala":
      return <ScalaIcon />;
    case "bash":
      return <BashIcon />;
    case "docker":
      return <Dockericon />;
    case "terraform":
      return <Terraformicon />;
    case "react":
      return <ReactIcon />;
    case "next":
      return <NextIcon />;
    case "svelte":
      return <SvelteIcon />;
    case "redux":
      return <ReduxIcon />;
    case "javascript":
      return <JavascriptIcon />;
    case "typescript":
      return <TypescriptIcon />;
    case "html":
      return <HtmlIcon />;
    case "css":
      return <CssIcon />;
    case "sass":
      return <SassIcon />;
    case "ejs":
      return <EjsIcon />;
    case "tailwind":
      return <TailwindIcon />;
    case "react-router":
      return <ReactRouterIcon />;
    case "mui":
      return <MuiIcon />;
    case "antd":
      return <AntDIcon />;
    case "springboot":
      return <SpringbootIcon />;
    case "node":
      return <NodejsIcon />;
    case "fast-api":
      return <FastApiIcon />;
    case "flask":
      return <FlaskIcon />;
    case "go":
      return <GoIcon />;
    case "camunda":
      return <CamundaIcon />;
    case "rust":
      return <RustIcon />;
    case "mysql":
      return <MySqlIcon />;
    case "postgesql":
      return <PostgresqlIcon />;
    case "elastic-search":
      return <ElasticsearchIcon />;
    case "sqlite":
      return <SqliteIcon />;
    case "mongo":
      return <MongoIcon />;
    case "cosmos":
      return <CosmosIcon />;
    case "bigtable":
      return <BigtableIcon />;
    case "spark":
      return <SparkIcon />;
    case "kafka":
      return <KafkaIcon />;
    case "pubsub":
      return <PubsubIcon />;
    case "eventhubs":
      return <EventHubsIcon />;
    case "airflow":
      return <AirflowIcon />;
    case "openlineage":
      return <OpenlineageIcon />;
    default:
      return null;
  }
}
