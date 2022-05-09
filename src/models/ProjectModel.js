export class ProjectModel {
    id;
    title;
    description;
    slug;
    location;
    date;
    contentSections;
    category;

    seo;



    constructor(id, title, description, slug, category, location, date, contentSections, seo) {
        this.title = title;
        this.id = id;
        this.description = description;
        this.slug = slug;
        // this.mainVideo = mainVideo;
        this.location = location;
        this.date = date;
        this.contentSections = contentSections;
        this.category = category;

        this.seo = seo;
    }

    getCategory = () => {
        return this.category.title;
    }

    getYear = () => {
        return new Date(this.date).getFullYear()
    }
}