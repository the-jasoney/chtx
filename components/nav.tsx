import { Navbar, Container, Nav } from 'react-bootstrap';

export type navbar_props = object & {
    page?: string;
}

export default function Header(props: navbar_props): JSX.Element {
    return (
        <>
            <Navbar sticky="top">
                <Container>
                    <Navbar.Brand href="/">chtx</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar" />
                    <Navbar.Collapse id="navbar">
                        <Nav activeKey={props.page}>
                            <Nav.Link href="/">home</Nav.Link>
                            <Nav.Link href="/join">join</Nav.Link>
                            <Nav.Link href="/chat">chat</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}