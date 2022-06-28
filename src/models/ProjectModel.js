export class ProjectModel {
    id;
    title;
    description;
    slug;
    location;
    date;
    content;
    category;

    seo;

    footer;



    constructor(id, title, description, slug, category, location, date, content, seo, footer) {
        this.title = title;
        this.id = id;
        this.description = description;
        this.slug = slug;
        // this.mainVideo = mainVideo;
        this.location = location;
        this.date = date;
        this.content = content;
        this.category = category;

        this.seo = seo;
        this.footer = footer;
    }

    getCategory = () => {
        return this.category.title;
    }

    getCategoryColour = () => {
        return this.category.colour;
    }

    getYear = () => {
        console.log(this.date)
        return new Date(this.date).getFullYear()
    }
}