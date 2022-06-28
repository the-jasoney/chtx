import { Navbar, Container, Nav } from 'react-bootstrap';
import Head from 'next/head';

export type navbar_props = object & {
    page?: string;
}

export default function Header(props: navbar_props): JSX.Element {
    return (
        <>
            <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
            </Head>
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