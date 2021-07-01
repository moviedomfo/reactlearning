const SongLyric = ({currenLyric,title}) => {
    return (
        <section>
            <h3> {title}                
            </h3>
            <blockquote style={{whiteSpace:"pre-wrap"}}>{currenLyric}</blockquote>
        </section>
    )
}

export default SongLyric
