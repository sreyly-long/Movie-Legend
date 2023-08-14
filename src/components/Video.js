function Video({ video_key }) {

    return (
        <>
            <iframe
                src={`https://www.youtube.com/embed/${video_key}`}>
            </iframe>
        </>


    )
}
export default Video;