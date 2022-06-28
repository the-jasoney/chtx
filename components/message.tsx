type Props = {
    author: string,
    content: string
}

export default function Message({ author, content }: Props) {
    return (
        <div className="message">
            <p><b color="#51CED6">{author}</b>|{content}</p>
        </div>
    )
}