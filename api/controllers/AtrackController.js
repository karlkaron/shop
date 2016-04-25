/**
 * AtrackController
 *
 * @description :: Server-side logic for managing atracks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	index: function(req, res) {
		Track.find()
			.sort('id DESC')
			.exec(function(err, track) {
				if (err) return res.send(500);
				res.view({
					track: track
				});
			});
	},

	edit: function(req, res) {
		var Id = req.param('id');

		Track.findOne(Id).exec(function(err, track) {
			if (!track) return res.send(404);
			if (err) return res.send(500);
			res.view({
				track: track
			});
		});
	}
};
