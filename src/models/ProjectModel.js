export class ProjectModel {
    id;
    title;
    description;
    slug;
    location;
    date;
    thumbnailImage;
    contentSections;

    seoTitle;
    seoDescription;



    constructor(id, title, description, slug, location, date, thumbnailImage, contentSections, seoTitle, seoDescription) {
        this.title = title;
        this.id = id;
        this.description = description;
        this.slug = slug;
        // this.mainVideo = mainVideo;
        this.location = location;
        this.date = date;
        this.thumbnailImage = thumbnailImage;
        this.contentSections = contentSections;

        this.seoTitle = seoTitle;
        this.seoDescription = seoDescription;
    }
}