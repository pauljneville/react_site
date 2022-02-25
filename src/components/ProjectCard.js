import { Header1, Column } from "./StandardComponents";

export const ProjectCard = (props) => {
    return (
        <Column alignItems='center' gap="2rem">
            <Header1>{props.title}</Header1>
            {props.children}
        </Column>
    );
}