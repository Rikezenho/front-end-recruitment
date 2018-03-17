export default class ProductsService {
    constructor(resource) {
        this._resource = resource('api/products');
    }

    list() {
        return this._resource.query()
		.then(
			res => res.json(),
			err => {
				console.log(err);
				throw new Error('Não foi possível obter os produtos. Tente novamente mais tarde.');
			});
    }
}
