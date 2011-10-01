var growl = require('growl');

exports.plugin = function(mediator)
{
	function notify(data)
	{                                   
		growl.notify(data.message, { title: data.title || 'Notification', image: __dirname + '/icons/node_info.png' });
	}
	
	mediator.on({
		'push user/notification': notify 
	})
}