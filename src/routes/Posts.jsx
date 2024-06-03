const Posts = ({ posts, updatePostStatus }) => (
    <div className="post-container">
        {posts.map(({ id, title, author, date, content, published }) => (
            <div key={id} className="post">
                <h2>{title}</h2>
                <h4>by {author} - {date}</h4>
                <p>{content}</p>
                <p>
                    <strong>Status:</strong> {published ? "Published" : "Unpublished"}
                </p>
                <button onClick={() => updatePostStatus(id, published)}>
                    {published ? "Unpublish" : "Publish"}
                </button>
            </div>
        ))}
    </div>
);

export default Posts;
