/**
 * AdminController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	index: function(req, res) {
		News.find()
			.sort('id DESC')
			.exec(function(err, news) {
				if (err) return res.send(500);
				res.view({
					news: news
				});
			});
	},

	edit: function(req, res) {
		var Id = req.param('id');

		News.findOne(Id).exec(function(err, news) {
			if (!news) return res.send(404);
			if (err) return res.send(500);
			res.view({
				news: news
			});
		});
	}
};
