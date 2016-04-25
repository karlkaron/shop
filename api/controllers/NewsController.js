/**
 * NewsController
 *
 * @description :: Server-side logic for managing news
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res) {
		var params = {
			infotext: req.param('infotext'),
			content: req.param('content'),
			title: req.param('title'),
			autor: req.param('autor'),
			data: req.param('data'),
		}
		News.create(params).exec(function(err, news) {
			res.redirect('/news/watch/' + news.id);
			if (err) return res.send(500);
		});
	},
	update: function(req, res) {
		var Id = req.param('id');

		var elem = {
			infotext: req.param('infotext'),
			content: req.param('content'),
			title: req.param('title'),
			autor: req.param('autor'),
			data: req.param('data')
		};

		News.update(Id, elem).exec(function(err) {
			if (err) return res.send(500);
			res.redirect('/admin');
		});

	},
	delete: function(req, res) {
		var Id = req.param('id');
		News.destroy(Id).exec(function(err) {
			if (err) return res.send(500);
			res.redirect('/news');
		});
	},
	index: function(req, res) {
		// Поиск в модели Post
		News.find()

		// Сортировка постов (на убывание)
		.sort('id DESC')
			.limit(5)


		.exec(function(err, news) {
			// Если ошибка вывести страницу 500 (с логом)
			if (err) return res.send(500);
			res.view({
				news: news
			});

		});
	},



	watch: function(req, res) {
		var Id = req.param('id');
		News.findOne(Id).exec(function(err, news) {
			if (!news) return res.send(404);
			if (err) return res.send(500);
			res.view({
				news: news
			});

		});
	},


	page: function(req, res) {
		var page = req.param('page');
		News.find()
			.sort('id DESC')
			.paginate({
				page: page,
				limit: 5
			})
			.exec(function(err, news) {
				if (err) return res.send(500);
				res.view({
					news: news
				});

			});
	}
};
