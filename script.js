
// replace the initial style with custom style 
// create a function (generateArticlePreview({ title: "", description: "", author: "" })) in js to generate an article preview.

// function generateArticlePreviewTemplate({title,description,author,tag = ["general"]}) {
//     console.log(description);
//     const currentDate = formatDate();
//     return `
// <div class="article-preview">

//     <div class="article-meta">
//         <a href="/profile/eric-simons"> <img src="http://i.imgur.com/Qr71crq.jpg" />
//         </a>
//         <div class="info">
//             <a href="/profile/eric-simons" class="author">${author}</a>
//             <!-- <span class="date">January 20th</span> -->
//         </div>
//     </div>

//     <button class="btn btn-outline-primary btn-sm pull-xs-right">
//         <i class="ion-heart"></i> 0
//     </button>

//     <a href="/article/how-to-build-webapps-that-scale" class="preview-link">
//         <h1>${title}</h1>
//         <p>${description}</p>
//         <span>Read more...</span>
//         <ul class="tag-list">
//             <li class="tag-default tag-pill tag-outline">realworld</li>
//             <li class="tag-default tag-pill tag-outline">implementations</li>
//         </ul>
//     </a>
//     <div class="article-date">
//         <span class="custom-date">${currentDate}</span>
//     </div>
// </div>
// `
// }

// function generate_tag_list(){

// }


function generate_article_meta(author) {
    // article meta
    const article_meta = document.createElement("div");
    article_meta.className = "article-meta";

    const profile_link = document.createElement("a");
    profile_link.href = "/profile/eric-simons";

    const profile_img = document.createElement("img");
    profile_img.src = "http://i.imgur.com/Qr71crq.jpg";
    profile_link.appendChild(profile_img);

    const info = document.createElement("div");
    info.className = "info";

    const profile_name = document.createElement("a");
    profile_name.className = "author";
    profile_name.textContent = author;
    info.appendChild(profile_name);

    article_meta.appendChild(profile_link);
    article_meta.appendChild(info);
    return article_meta
}

function generate_like_button() {
    const button = document.createElement("button");
    button.className = "btn btn-outline-primary btn-sm pull-xs-right";

    const icon = document.createElement("i");
    icon.className = "ion-heart";

    button.appendChild(icon);
    button.append(" 0");
    return button

}

function generate_tag_list(tag) {
    const tag_list = document.createElement("ul");
    tag_list.className = "tag-list";

    tag.forEach(tag => {
        const tag_item = document.createElement("li");
        tag_item.className = "tag-default tag-pill tag-outline";
        tag_item.textContent = tag
        tag_list.appendChild(tag_item)
    });
    return tag_list
}

function generate_article_preview_body({ title, description, tag }) {
    console.log("this is artitcle", title, description);

    const body_link = document.createElement("a");
    body_link.href = "/article/how-to-build-webapps-that-scale";
    body_link.className = "preview-link";

    const title_container = document.createElement("h1");
    title_container.textContent = title;

    const description_container = document.createElement("p");
    description_container.textContent = description;

    const reed_more = document.createElement("span");
    reed_more.textContent = "Read more...";

    body_link.appendChild(title_container);
    body_link.appendChild(description_container);
    body_link.appendChild(reed_more);
    body_link.appendChild(generate_tag_list(tag));

    return body_link;


}

function formatDate() {
    const date = new Date();

    const month = date.toLocaleString("en-US", { month: 'long' });

    const day = date.getDate();

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

function generate_date(){

    const date = formatDate();

    const article_date = document.createElement("div");
    article_date.className = "article-date";

    const date_container = document.createElement("span");
    date_container.className = "custom-date";
    date_container.textContent = date


    article_date.appendChild(date_container);
    return article_date
}

function generate_article_preview_template({ author, title, description, tag }) {
    const currentDate = formatDate();

    // root
    const article_preview = document.createElement("div");
    article_preview.className = "article-preview";


    // article meta
    const article_meta = generate_article_meta(author);

    // button
    const button = generate_like_button();

    //body
    console.log("this is body", title, description);
    const body = generate_article_preview_body({ title: title, description: description, tag: tag });

    console.log(body);

    const date = generate_date();

    article_preview.appendChild(article_meta);
    article_preview.appendChild(button);
    article_preview.appendChild(body);
    article_preview.appendChild(date);
    return article_preview;

}

function generate_article_preview(data) {
    ArticlePreviewHTML = generate_article_preview_template(data);
    const feed_colum = document.getElementById('feed-id');
    feed_colum.insertAdjacentElement("afterend", ArticlePreviewHTML);
}


const data = { author: "Hai", title: "Title", description: "description", tag: ["realword","1","2"] };
generate_article_preview(data);
