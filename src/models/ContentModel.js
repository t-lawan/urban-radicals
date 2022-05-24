import { Convert } from "../utils/convert"

export class ContentBoxModel {
  text
  images
  image_collection
  image_layout
  type

  constructor(text, images, image_collection, layout) {
    this.text = text
    this.images = images
    if (image_collection) {
      this.image_collection = image_collection.map(image => {
        return Convert.toContentModel(image)
      })
    }

    this.image_layout = layout
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
