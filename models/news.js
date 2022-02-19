const data = require('../dataNews.json');
class News {
getNews() {
    let news = [];
    data.map((member)=> news.push({link: member.link, media: member.media, published_date: member.published_date, title: member.title, summary: member.summary, clean_url: member.clean_url}))
    return news;
}
}
module.exports = News;