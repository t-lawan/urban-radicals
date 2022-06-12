import { Convert } from "../utils/convert"

export class ContentBoxModel {
  text
  images
  image_collection
  image_layout
  type
  image_caption

  constructor(text, images, image_collection, layout, image_caption = null) {
    this.text = text
    this.images = images
    if (image_collection) {
      this.image_collection = image_collection.map(image => {
        return Convert.toContentModel(image)
      })
    }

    this.image_layout = layout
    this.image_caption = image_caption;
    
    if (this.text) {
      this.type = ContentBoxType.TEXT_BLOCK
    }

    if (this.images) {
      this.type = ContentBoxType.IMAGE_BLOCK
    }

    if (this.image_collection) {
      this.type = ContentBoxType.IMAGE_COLLECTION_BLOCK
    }
  }
}

export const ContentBoxType = {
  TEXT_BLOCK: "TEXT_BLOCK",
  IMAGE_BLOCK: "IMAGE_BLOCK",
  IMAGE_COLLECTION_BLOCK: "IMAGE_COLLECTION_BLOCK",
}
