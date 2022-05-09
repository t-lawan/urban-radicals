import { ProjectCategoryModel } from "../models/ProjectCategoryModel";
import { ProjectModel } from "../models/ProjectModel";
import { SeoModel } from "../models/SEOModel";

export class Convert {

    static toProjectModel = (contentfulModel) => {
        return new ProjectModel(
			contentfulModel.contentful_id,
			contentfulModel.title,
			contentfulModel.description ? contentfulModel.description.raw : '',
			contentfulModel.slug,
			this.toProjectCategoryModel(contentfulModel.category),
			contentfulModel.location ? contentfulModel.location : '',
			contentfulModel.date,
            null,
            this.toSEOModel(contentfulModel.seo)
        )
    }

    static toSEOModel = (contentfulModel) => {
        return new SeoModel(
			contentfulModel.contentful_id,
			contentfulModel.title,
			contentfulModel.description ? contentfulModel.description.description : '',
			// contentfulModel.image ? contentfulModel.image : null,
        )
    }

    static toProjectCategoryModel = (contentfulModel) => {
        return new ProjectCategoryModel(
            contentfulModel.contentful_id,
			contentfulModel.title,
			contentfulModel.colour,
        )
    }
    static toModelArray = (query, modelConverter) => {
		const modelArray = [];
		query.edges.forEach((contentfulModel) => {
			let model = modelConverter(contentfulModel.node);
			modelArray.push(model);
		});
		return modelArray;
	};
}