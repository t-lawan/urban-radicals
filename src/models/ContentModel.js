export class ContentBoxModel {
    text;
    image;
    images;
    type;

    constructor(text, image, images){

        this.text = text;
        this.image = image;
        this.images = images;

        if(this.text){
            this.type = ContentBoxType.TEXT_BLOCK
        }

        if(this.image){
            this.image = ContentBoxType.IMAGE_BLOCK
        }

        if(this.images){
            this.type = ContentBoxType.IMAGE_COLLECTION_BLOCK
        }


    }
}

export const ContentBoxType = {
    TEXT_BLOCK: 'TEXT_BLOCK',
    IMAGE_BLOCK: 'IMAGE_BLOCK',
    IMAGE_COLLECTION_BLOCK: 'IMAGES_BLOCK',
}