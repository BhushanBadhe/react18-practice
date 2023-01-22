const NewsListItem = ({item}) => {


    return (
        <>
            <div className="news_list_item">
                <h3>{item.title}</h3>
                <div>
                    {item.feed}
                </div>
            </div>
        </>
    )
}

export default NewsListItem;