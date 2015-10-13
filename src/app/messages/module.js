import angular from 'angular';

import { MessageController } from './messageController';

export default angular.module('demo.messages', [])
    .controller('MessageController', MessageController);
