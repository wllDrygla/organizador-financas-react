import { ContainerStyle } from "../components/Container"
import { TableStyle } from "../components/Table"
import TextContent from "../components/TextContent"

const UserInfo = (props) => {
    return (
        <ContainerStyle>
        <TableStyle>
            <TextContent type='title' content={`BEM-VINDO, ${props.user}`}></TextContent>
            <TextContent type='content' content={`BEM-VINDO, ${props.user}`}></TextContent>
            <TextContent type='content' content={`BEM-VINDO, ${props.user}`}></TextContent>
            <TextContent type='content' content={`BEM-VINDO, ${props.user}`}></TextContent>
        </TableStyle>
        </ContainerStyle>
    )
}

export {UserInfo}