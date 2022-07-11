import Footer from "./components/Footer";
import Biografia from "./components/Biografia";
import Stack from "./components/Stack";
import react from "./static/react.svg";
import vue from "./static/vue.svg";
import node from "./static/node-js.svg";
import html from "./static/html.svg";
import tailwind from "./static/tailwind.svg";
import bootstrap from "./static/bootstrap.svg";
import mysql from "./static/mysql.svg";
import postgres from "./static/postgre.svg"
import java from "./static/java.svg"
import laravel from "./static/laravel-wordmark-1.svg"
import spring from "./static/leaf.svg"
import googlecloud from "./static/google-cloud.svg"
import aws from "./static/amazon-web-services.svg"
import docker from "./static/docker.svg"
import maven from "./static/maven.svg"
import npm from "./static/npm.svg"



const frontend_stack = {
    title : "Frontend",
    tech : [
        {
            id : 1 ,
            name : "React",
            icon : react,
            experience : "2+ anni"
        },
        {
            id : 2 ,
            name : "Vue",
            icon : vue,
            experience : "3+ anni"
        },
        {
            id : 3 ,
            name : "Node JS",
            icon : node,
            experience : "3+ anni"
        },
        {
            id : 4 ,
            name : "Html 5",
            icon : html,
            experience : "4+ anni"
        },
        {
            id : 5 ,
            name : "Tailwind Css",
            icon : tailwind,
            experience : "2+ anni"
        },

        {
            id : 6 ,
            name : "Bootstrap",
            icon : bootstrap,
            experience : "3+ anni"
        },
    ]
}
const backend_stack = {
    title : "Backend / DB",
    tech : [
        {
            id : 1 ,
            name : "Java + Hibernate",
            icon : java,
            experience : "5+ anni"
        },
        {
            id : 2 ,
            name : "MySql",
            icon : mysql,
            experience : "3+ anni"
        },
        {
            id : 3 ,
            name : "Postgres",
            icon : postgres,
            experience : "3+ anni"
        },
        {
            id : 4 ,
            name : "Laravel",
            icon : laravel,
            experience : "2+ anni"
        },
        {
            id : 5 ,
            name : "Spring framework",
            icon : spring,
            experience : "4+ anni"
        },
    ]
}
const cloud_and_tools_stack = {
    title : "Cloud and tools",
    tech : [
        {
            id : 1 ,
            name : "Google Cloud",
            icon : googlecloud,
            experience : "1+ anni"
        },
        {
            id : 2 ,
            name : "Amazon Web Services",
            icon : aws,
            experience : "1+ anni"
        },
        {
            id : 3 ,
            name : "Docker",
            icon : docker,
            experience : "1+ anni"
        },
        {
            id : 4 ,
            name : "NPM",
            icon : npm,
            experience : "2+ anni"
        },
        {
            id : 5 ,
            name : "Maven",
            icon : maven,
            experience : "4+ anni"
        },
    ]
}
export default function App(){
    return(
        <div>
            <Biografia/>
            <Stack stackType={frontend_stack}/>
            <Stack stackType={backend_stack}/>
            <Stack stackType={cloud_and_tools_stack}/>
            <Footer/>
        </div>
    );
}