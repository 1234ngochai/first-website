function generate_article_meta(author) {
    // article meta
    img_link = author.image;
    username = author.username;
    return  `
                <div class="article-meta">
                    <a href="/profile/eric-simons"><img src="${author.image}"></a>
                    <div class="info"><a class="author" href="/profile/eric-simons">${username}</a></div>
                </div>
        
            `
}

function generate_like_button(likes) {
    return `
    <button class="btn btn-outline-primary btn-sm pull-xs-right"><i class="ion-heart"></i> ${likes}</button>
    ` 
}

function generate_article_tag_list(tag) {
    let tag_list = ''
    tag.forEach(tag => {
        tag_list += `<li class="tag-default tag-pill tag-outline">${tag}</li>`
    });

    return tag_list
}

function generate_article_preview_body({ title, description, tag }) {

    tag_list = generate_article_tag_list(tag);

    return `
        <a href="/article/how-to-build-webapps-that-scale" class="preview-link" title="Preview Link" xeko="2">
            <h1>${title}</h1>
            <p>${description}</p>
            <span>Read more...</span>
            <ul class="tag-list">
                ${tag_list}
            </ul>
        </a>
    `
}

function formatDate(date) {
    const d = new Date(date)

    const month = d.toLocaleString("en-US", { month: 'long' });
    const day = d.getDate();

    const day_suffix = get_day_Suffix(day);

    const day_with_suffi = day + day_suffix


    full_date = month + ' ' + day_with_suffi;
    return full_date
}

function get_day_Suffix(day) {
    if (day % 10 == 1 & day != 11)
        return 'st'
    else if (day % 10 == 2 & day != 12)
        return 'nd'
    else if (day % 10 == 3 & day != 13)
        return 'rd'
    else
        return 'th'
}

function generate_date(date) {

    created_date = formatDate(date);

    return `
    <div class="article-date"><span class="custom-date">${created_date}</span></div>
    `
}

function generate_article_preview_template(data) {
    // article meta
    author = data.author;
    title = data.title;
    description = data.description;
    tag_list = data.tagList;
    likes = data.favoritesCount;
    createdAt = data.createdAt;

    const article_meta = generate_article_meta(author);

    // button
    const button = generate_like_button(likes);

    //body
    const body = generate_article_preview_body({ title: title, description: description, tag: tag_list });

    const formated_date = generate_date(createdAt);
    
    return `
    <div class="article-preview">
        ${article_meta}
        ${button}
        ${body}
        ${formated_date}
    </div>    
`
}

function generate_article_preview(data) {

    const feed_colum = document.getElementById('feed-id');
    let Article_preview_list = '';

    if (Array.isArray(data)) {
        for (const item of data) {
            Article_preview_list += generate_article_preview_template(item)
        }
    }
    else {
            Article_preview_list += generate_article_preview_template(data)
    }
    return feed_colum.insertAdjacentHTML("afterend", Article_preview_list);
}

function generate_popular_tag_list(data){
    const tag_colum = document.getElementById('popular-tags-id');
    let tag_list = '';
    for (const item of data) {
        tag_list += generate_tag_list_preivew(item)
    }
    return tag_colum.insertAdjacentHTML("afterend", tag_list);

}

function generate_tag_list_preivew(tag){
    return  `
            <a href="" class="tag-pill tag-default">${tag}</a>
            `
}

async function fetch_article_preview_data(number_of_article = 1){
    const feed_colum = document.getElementById('feed-id');
    const loader = `<span class="loader" id = "feed_loader_id" ></span>`;
    feed_colum.insertAdjacentHTML("afterend", loader);

    const api = `https://api.realworld.show/api/articles?limit=${number_of_article}&offset=0`
    const data = await fetch(api);
    const article_prewview_data = await data.json();

    const loader_id = document.getElementById("feed_loader_id");
    loader_id.remove();


    generate_article_preview(article_prewview_data.articles);
    return;


}

async function fetch_tag_list_data(){

    const api = `https://api.realworld.show/api/tags`
    const data = await fetch(api);
    const tag_list_data = await data.json();
    generate_popular_tag_list(tag_list_data.tags);
}

fetch_tag_list_data();

fetch_article_preview_data(4);



