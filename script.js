function generate_article_meta(author) {
    // article meta
    img_link = author.image;
    username = author.username;
    return `
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

    const feed_colum = document.querySelector('.feed-container');
    let Article_preview_list = '';

    if (Array.isArray(data)) {
        for (const item of data) {
            Article_preview_list += generate_article_preview_template(item)
        }
    }
    else {
        Article_preview_list += generate_article_preview_template(data)
    }
    feed_colum.insertAdjacentHTML("beforeend", Article_preview_list);

    feed_colum.classList.add("--loaded");
}

function generate_popular_tag_list(data) {
    const tag_colum = document.getElementById('popular-tags-id');
    let tag_list = '';
    for (const item of data) {
        tag_list += generate_tag_list_preivew(item)
    }
    tag_colum.insertAdjacentHTML("beforeend", tag_list);
    tag_colum.classList.add("--loaded");

}

function generate_tag_list_preivew(tag) {
    return `
            <a href="" class="tag-pill tag-default">${tag}</a>
            `
}


function generate_navbar_list(res) {
    const token = localStorage.getItem('authToken');
    const item = []
    item.push(generate_nav_item("/","Home",true));
    if (token) {
        item.push(generate_nav_item("","logout",false,'log-out'))
        item.push(generate_nav_item("",`hi ${res.user.username}`,false))
    }
    else {
        item.push(generate_nav_item("login/login.html","Sign in",false));
        item.push(generate_nav_item("register/register.html","Sign up",false));

    }
    return item;

}


function generate_nav_item(link, name, active = false, id = ""){

    const is_active = active ? "active" : ""
    const link_html = link ? `href="${link}"` : ""
    const id_html = id ? `id = ${id}` : ""
    return `
            <li class="nav-item">
                <a class="nav-link ${is_active}" ${link_html} ${id_html} >${name}</a>
            </li>
    `
}


function update_homepage_layout() {
    const token = localStorage.getItem('authToken');
    const banner = document.getElementById("home-page-banner-id");
    if (token) {
        banner.classList.add("hidden");
    }

}


function bindLogout() {
  const logout_link = document.getElementById('log-out');
  if (!logout_link) 
    return;
  logout_link.addEventListener('click', (e) => {
    localStorage.removeItem('authToken');
    location.href = '/';
  });
}

async function fetch_article_preview_data(number_of_article = 1) {
    const token = localStorage.getItem('authToken');
    const api = `https://api.realworld.show/api/articles?limit=${number_of_article}&offset=0`

    if (token) {
        data = await fetch(api, {
            headers: { Authorization: `Token ${token}` }
        });
    } else {
        data = await fetch(api);
    }

    const article_prewview_data = await data.json();
    generate_article_preview(article_prewview_data.articles);


}


async function fetch_tag_list_data() {
    const token = localStorage.getItem('authToken');

    const api = `https://api.realworld.show/api/tags`

    if (token) {
        data = await fetch(api, {
            headers: { Authorization: `Token ${token}` }
        });
    } else {
        data = await fetch(api);
    }
    const tag_list_data = await data.json();
    generate_popular_tag_list(tag_list_data.tags);
}

async function fetch_user_data() {
    const token = localStorage.getItem('authToken');
    const nav_list = document.getElementById('navbar-list-item');
    const api = `https://api.realworld.show/api/user`

    let user_data;
    if (token) {
        const data = await fetch(api, {
        method: 'GET',
        headers: { Authorization: `Token ${token}` }
        });
        user_data = await data.json();
    } else {
        user_data = null;

    }
    const nav_bar_items = generate_navbar_list(user_data).join('');
    nav_list.innerHTML = nav_bar_items;
    bindLogout();
    

}



update_homepage_layout();

fetch_user_data();

fetch_tag_list_data();

fetch_article_preview_data(5);


