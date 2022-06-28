import { ContentBoxModel } from "../models/ContentModel";
import { PageModel } from "../models/PageModel";
import { ProjectCategoryModel } from "../models/ProjectCategoryModel";
import { ProjectModel } from "../models/ProjectModel";
import { SelectedProjectModel } from "../models/SelectedProjectModel";
import { SeoModel } from "../models/SEOModel";
import { SiteModel } from "../models/SiteModel";

export class Convert {

    static toProjectModel = (contentfulModel) => {
		let content = [];
		contentfulModel.content.forEach((content_block) => {
			content.push(this.toContentModel(content_block));
		})

		console.log(contentfulModel)


		let footer = {
			firstColumn: Convert.toContentModel(contentfulModel.footer.firstColumnText),
			secondColumn: Convert.toContentModel(contentfulModel.footer.secondColumnText),
			thirdColumn: Convert.toContentModel(contentfulModel.footer.thirdColumnText),
		}


        return new ProjectModel(
			contentfulModel.contentful_id,
			contentfulModel.title,
			contentfulModel.description ? contentfulModel.description.raw : '',
			contentfulModel.slug,
			this.toProjectCategoryModel(contentfulModel.category),
			contentfulModel.location ? contentfulModel.location : '',
			contentfulModel.date,
            content,
            this.toSEOModel(contentfulModel.seo),
			footer
			
        )
    }

	static toSelectedProjectModel = (contentfulModel) => {
		return new SelectedProjectModel(
			contentfulModel.contentful_id,
			this.toContentModel(contentfulModel.leftColumnImage),
			this.toContentModel(contentfulModel.rightColumnImage),
			this.toProjectModel(contentfulModel.project)

		)
	}

	static toSiteModel = (contentfulModel) => {
		return new SiteModel(
			contentfulModel.contentful_id,
			contentfulModel.title,
			contentfulModel.jumbotronText,
			this.toSEOModel(contentfulModel.seo)
		)
	}


	static toContentModel = (contentfulModel) => {
		return new ContentBoxModel(
			contentfulModel.text,
			contentfulModel.images,
			contentfulModel.imageList,
			contentfulModel.layout,
			contentfulModel.caption ? contentfulModel.caption.caption : null
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

	static toPageModel = (contentfulModel) => {
		let content = [];
		contentfulModel.content.forEach((content_block) => {
			content.push(this.toContentModel(content_block));
		})
		return new PageModel(
			contentfulModel.contentful_id,
			contentfulModel.title,
			content,
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