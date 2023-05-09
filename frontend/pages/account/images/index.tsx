<div className="card mt-3">
    <div className="card-header">List of Files</div>
    <ul className="list-group list-group-flush">
        {imageInfos &&
        imageInfos.map((img, index) => (
            <li className="list-group-item" key={index}>
            <a href={img.url}>{img.name}</a>
            </li>
        ))}
    </ul>
    </div>
</div>