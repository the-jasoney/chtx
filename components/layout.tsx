import Header from './nav';

type Props = {
    title: string,
    children: JSX.Element,
};

export default function Layout({title, children}: Props) {
    
    return (
        <> 
            <Header page={title}/>
            <main>{children}</main>
        </>
    )
}