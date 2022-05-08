
export class Convert {
    static toModelArray = (query, modelConverter) => {
		const modelArray = [];
		query.edges.forEach((contentfulModel) => {
			let model = modelConverter(contentfulModel.node);
			modelArray.push(model);
		});
		return modelArray;
	};
}