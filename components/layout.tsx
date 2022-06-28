import { Html } from 'next/document';
import Header from './nav';

type Props = {
    title: string,
    children: JSX.Element,
};

export default function Layout({title, children}: Props) {
    
    return (
        <Html> 
            <Header page={title}/>
            <body>
                <main>{children}</main>
            </body>
        </Html>
    )
}