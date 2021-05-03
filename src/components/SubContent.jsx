import styled from "styled-components";

const ProjectDescription = styled.div`
    display: flex;
    font-size: 30px;
    margin: 50px 0 0 50px;
    font-family: Luminary KR;
`

const SubContent = () => (
    <ProjectDescription>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
    </ProjectDescription>

);

export default SubContent;