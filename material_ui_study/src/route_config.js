import App from './main' 
import Customer from './main_content/customer'
// import Sale from './main_content/sale'

export const routeConfig = [
    {   
        path: '/',
        component: App,
        indexRoute: {component: Customer},
        childRoutes: [
            {path: 'sale', component: require('./main_content/sale')},
            // { 
            //     path: 'inbox',
            //     component: Inbox,
            //     childRoutes: [
            //         {path: '/messages/:id', component: Message},
            //         {
            //             path: 'messages/:id',
            //             onEnter: function (nextState, replace) {
            //                 replace('/messages/' + nextState.params.id)
            //             }
            //         }
            //     ]
            // }
        ]
    }
];