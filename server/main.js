import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/links';
import { WebApp } from 'meteor/webapp';

Meteor.startup(() => {
  Meteor.publish('links', function() {
  	return Links.find({});
  });
});

WebApp.connectHandlers.use(req => console.log(req));