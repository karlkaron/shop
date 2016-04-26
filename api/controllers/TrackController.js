/**
 * TrackController
 *
 * @description :: Server-side logic for managing tracks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res) {
		var params = {
			title: req.param('title'),
			interpret: req.param('interpret'),
			infotext: req.param('infotext'),
			price: req.param('price'),
			cover: req.param('cover'),
			linkD: req.param('linkD'),
			linkDshort: req.param('linkDshort'),
		}
		Track.create(params).exec(function(err, track) {
			res.redirect('/track/watch/' + track.id);
			if (err) return res.send(500);
		});
	},
	update: function(req, res) {
		var Id = req.param('id');

		var elem = {
			title: req.param('title'),
			interpret: req.param('interpret'),
			infotext: req.param('infotext'),
			price: req.param('price'),
			cover: req.param('cover'),
			linkD: req.param('linkD'),
			linkDshort: req.param('linkDshort')
		};

		Track.update(Id, elem).exec(function(err) {
			if (err) return res.send(500);
			res.redirect('/atrack');
		});

	},
	delete: function(req, res) {
		var Id = req.param('id');
		Track.destroy(Id).exec(function(err) {
			if (err) return res.send(500);
			res.redirect('/track');
		});
	},
	index: function(req, res) {

		Track.find()


		.sort('id DESC')
			.limit(5)



		.exec(function(err, track) {

			if (err) return res.send(500);
			res.view({
				track: track
			});

		});
	},



	watch: function(req, res) {
		var Id = req.param('id');
		Track.findOne(Id).exec(function(err, track) {
			if (!track) return res.send(404);
			if (err) return res.send(500);
			res.view({
				track: track
			});

		});
	},


	page: function(req, res) {
		var page = req.param('page');
		Track.find()
			.sort('id DESC')
			.paginate({
				page: page,
				limit: 5
			})
			.exec(function(err, track) {
				if (err) return res.send(500);
				res.view({
					track: track
				});

			});
	}

};
