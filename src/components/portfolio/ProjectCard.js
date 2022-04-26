
import Header1 from "../general/Header1";
import Column from "../general/Column";

const ProjectCard = (props) => {
    return (
        <Column alignItems='center' gap="2rem">
            <Header1>{props.title}</Header1>
            {props.children}
        </Column>
    );
}

export default ProjectCard;