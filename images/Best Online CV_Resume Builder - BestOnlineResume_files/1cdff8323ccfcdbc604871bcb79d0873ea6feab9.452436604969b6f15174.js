(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{lqOT:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return a})),r.d(e,"d",(function(){return u})),r.d(e,"e",(function(){return b})),r.d(e,"f",(function(){return h}));var i,n=r("q1tI"),s=r.n(n),o=r("qVdT");function u(){return i||(i=s.a.createContext({})),i}var a,c=function(t){var e=t.client,r=t.children,i=u();return s.a.createElement(i.Consumer,null,(function(t){return void 0===t&&(t={}),e&&t.client!==e&&(t=Object.assign({},t,{client:e})),Object(o.b)(t.client,5),s.a.createElement(i.Provider,{value:t},r)}))},l=function(t){var e=u();return s.a.createElement(e.Consumer,null,(function(e){return Object(o.b)(e&&e.client,6),t.children(e.client)}))};!function(t){t[t.Query=0]="Query",t[t.Mutation=1]="Mutation",t[t.Subscription=2]="Subscription"}(a||(a={}));var p=new Map;function b(t){var e;switch(t){case a.Query:e="Query";break;case a.Mutation:e="Mutation";break;case a.Subscription:e="Subscription"}return e}function h(t){var e,r,i=p.get(t);if(i)return i;Object(o.b)(!!t&&!!t.kind,1);var n=t.definitions.filter((function(t){return"FragmentDefinition"===t.kind})),s=t.definitions.filter((function(t){return"OperationDefinition"===t.kind&&"query"===t.operation})),u=t.definitions.filter((function(t){return"OperationDefinition"===t.kind&&"mutation"===t.operation})),c=t.definitions.filter((function(t){return"OperationDefinition"===t.kind&&"subscription"===t.operation}));Object(o.b)(!n.length||s.length||u.length||c.length,2),Object(o.b)(s.length+u.length+c.length<=1,3),r=s.length?a.Query:a.Mutation,s.length||u.length||(r=a.Subscription);var l=s.length?s:u.length?u:c;Object(o.b)(1===l.length,4);var b=l[0];e=b.variableDefinitions||[];var h={name:b.name&&"Name"===b.name.kind?b.name.value:"data",type:r,variables:e};return p.set(t,h),h}},ttZb:function(t,e,r){"use strict";r.d(e,"a",(function(){return O})),r.d(e,"b",(function(){return v})),r.d(e,"c",(function(){return b})),r.d(e,"d",(function(){return f}));var i=r("lqOT"),n=r("mrSG"),s=r("q1tI"),o=r("dMq0"),u=r("qx2n"),a=r("qVdT"),c=function(){function t(t,e){this.isMounted=!1,this.previousOptions={},this.context={},this.options={},this.options=t||{},this.context=e||{}}return t.prototype.getOptions=function(){return this.options},t.prototype.setOptions=function(t,e){void 0===e&&(e=!1),e&&!Object(u.a)(this.options,t)&&(this.previousOptions=this.options),this.options=t},t.prototype.unmount=function(){this.isMounted=!1},t.prototype.refreshClient=function(){var t=this.options&&this.options.client||this.context&&this.context.client;Object(a.b)(!!t,2);var e=!1;return t!==this.client&&(e=!0,this.client=t,this.cleanup()),{client:this.client,isNew:e}},t.prototype.verifyDocumentType=function(t,e){var r=Object(i.f)(t);Object(i.e)(e),Object(i.e)(r.type);Object(a.b)(r.type===e,3)},t}(),l=function(t){function e(e){var r=e.options,i=e.context,n=e.onNewData,s=t.call(this,r,i)||this;return s.previousData={},s.currentObservable={},s.runLazy=!1,s.runLazyQuery=function(t){s.cleanup(),s.runLazy=!0,s.lazyOptions=t,s.onNewData()},s.getExecuteResult=function(){var t=s.getQueryResult();return s.startQuerySubscription(),t},s.obsRefetch=function(t){return s.currentObservable.query.refetch(t)},s.obsFetchMore=function(t){return s.currentObservable.query.fetchMore(t)},s.obsUpdateQuery=function(t){return s.currentObservable.query.updateQuery(t)},s.obsStartPolling=function(t){s.currentObservable&&s.currentObservable.query&&s.currentObservable.query.startPolling(t)},s.obsStopPolling=function(){s.currentObservable&&s.currentObservable.query&&s.currentObservable.query.stopPolling()},s.obsSubscribeToMore=function(t){return s.currentObservable.query.subscribeToMore(t)},s.onNewData=n,s}return Object(n.c)(e,t),e.prototype.execute=function(){this.refreshClient();var t=this.getOptions(),e=t.skip,r=t.query;return(e||r!==this.previousData.query)&&(this.removeQuerySubscription(),this.previousData.query=r),this.updateObservableQuery(),this.isMounted&&this.startQuerySubscription(),this.getExecuteSsrResult()||this.getExecuteResult()},e.prototype.executeLazy=function(){return this.runLazy?[this.runLazyQuery,this.execute()]:[this.runLazyQuery,{loading:!1,networkStatus:o.c.ready,called:!1,data:void 0}]},e.prototype.fetchData=function(){var t=this.getOptions();if(t.skip||!1===t.ssr)return!1;var e=this.currentObservable.query;return!!e.getCurrentResult().loading&&e.result()},e.prototype.afterExecute=function(t){var e=(void 0===t?{}:t).lazy,r=void 0!==e&&e;return this.isMounted=!0,r&&!this.runLazy||this.handleErrorOrCompleted(),this.previousOptions=this.getOptions(),this.unmount.bind(this)},e.prototype.cleanup=function(){this.removeQuerySubscription(),delete this.currentObservable.query,delete this.previousData.result},e.prototype.getOptions=function(){var e=t.prototype.getOptions.call(this);return this.lazyOptions&&(e.variables=Object(n.a)(Object(n.a)({},e.variables),this.lazyOptions.variables),e.context=Object(n.a)(Object(n.a)({},e.context),this.lazyOptions.context)),this.runLazy&&delete e.skip,e},e.prototype.ssrInitiated=function(){return this.context&&this.context.renderPromises},e.prototype.getExecuteSsrResult=function(){var t,e=!1===this.getOptions().ssr,r=this.refreshClient().client.disableNetworkFetches,i=Object(n.a)({loading:!0,networkStatus:o.c.loading,called:!0,data:void 0,stale:!1,client:this.client},this.observableQueryFields());return e&&(this.ssrInitiated()||r)?(this.previousData.result=i,i):(this.ssrInitiated()&&(t=this.context.renderPromises.addQueryPromise(this,this.getExecuteResult)||i),t)},e.prototype.prepareObservableQueryOptions=function(){var t=this.getOptions();this.verifyDocumentType(t.query,i.c.Query);var e=t.displayName||"Query";return!this.ssrInitiated()||"network-only"!==t.fetchPolicy&&"cache-and-network"!==t.fetchPolicy||(t.fetchPolicy="cache-first"),Object(n.a)(Object(n.a)({},t),{displayName:e,context:t.context,metadata:{reactComponent:{displayName:e}}})},e.prototype.initializeObservableQuery=function(){var t,e;if(this.ssrInitiated()&&(this.currentObservable.query=this.context.renderPromises.getSSRObservable(this.getOptions())),!this.currentObservable.query){var r=this.prepareObservableQueryOptions();this.previousData.observableQueryOptions=Object(n.a)(Object(n.a)({},r),{children:null}),this.currentObservable.query=this.refreshClient().client.watchQuery(Object(n.a)({},r)),this.ssrInitiated()&&(null===(e=null===(t=this.context)||void 0===t?void 0:t.renderPromises)||void 0===e||e.registerSSRObservable(this.currentObservable.query,r))}},e.prototype.updateObservableQuery=function(){if(this.currentObservable.query){var t=Object(n.a)(Object(n.a)({},this.prepareObservableQueryOptions()),{children:null});Object(u.a)(t,this.previousData.observableQueryOptions)||(this.previousData.observableQueryOptions=t,this.currentObservable.query.setOptions(t).catch((function(){})))}else this.initializeObservableQuery()},e.prototype.startQuerySubscription=function(){var t=this;if(!this.currentObservable.subscription&&!this.getOptions().skip){var e=this.currentObservable.query;this.currentObservable.subscription=e.subscribe({next:function(e){var r=e.loading,i=e.networkStatus,n=e.data,s=t.previousData.result;s&&s.loading===r&&s.networkStatus===i&&Object(u.a)(s.data,n)||t.onNewData()},error:function(e){if(t.resubscribeToQuery(),!e.hasOwnProperty("graphQLErrors"))throw e;var r=t.previousData.result;(r&&r.loading||!Object(u.a)(e,t.previousData.error))&&(t.previousData.error=e,t.onNewData())}})}},e.prototype.resubscribeToQuery=function(){this.removeQuerySubscription();var t=this.currentObservable.query.getLastError(),e=this.currentObservable.query.getLastResult();this.currentObservable.query.resetLastResults(),this.startQuerySubscription(),Object.assign(this.currentObservable.query,{lastError:t,lastResult:e})},e.prototype.getQueryResult=function(){var t=this.observableQueryFields(),e=this.getOptions();if(e.skip)t=Object(n.a)(Object(n.a)({},t),{data:void 0,error:void 0,loading:!1,called:!0});else{var r=this.currentObservable.query.getCurrentResult(),i=r.loading,s=r.partial,u=r.networkStatus,a=r.errors,c=r.error,l=r.data;if(a&&a.length>0&&(c=new o.b({graphQLErrors:a})),t=Object(n.a)(Object(n.a)({},t),{loading:i,networkStatus:u,error:c,called:!0}),i){var p=this.previousData.result&&this.previousData.result.data;t.data=p&&l?Object(n.a)(Object(n.a)({},p),l):p||l}else if(c)Object.assign(t,{data:(this.currentObservable.query.getLastResult()||{}).data});else{var b=this.currentObservable.query.options.fetchPolicy;if(e.partialRefetch&&!l&&s&&"cache-only"!==b)return Object.assign(t,{loading:!0,networkStatus:o.c.loading}),t.refetch(),t;t.data=l}}return t.client=this.client,this.previousData.loading=this.previousData.result&&this.previousData.result.loading||!1,this.previousData.result=t,this.currentObservable.query&&this.currentObservable.query.resetQueryStoreErrors(),t},e.prototype.handleErrorOrCompleted=function(){if(this.currentObservable.query&&this.previousData.result){var t=this.previousData.result,e=t.data,r=t.loading,i=t.error;if(!r){var n=this.getOptions(),s=n.query,o=n.variables,a=n.onCompleted,c=n.onError;if(this.previousOptions&&!this.previousData.loading&&Object(u.a)(this.previousOptions.query,s)&&Object(u.a)(this.previousOptions.variables,o))return;a&&!i?a(e):c&&i&&c(i)}}},e.prototype.removeQuerySubscription=function(){this.currentObservable.subscription&&(this.currentObservable.subscription.unsubscribe(),delete this.currentObservable.subscription)},e.prototype.observableQueryFields=function(){return{variables:this.currentObservable.query.variables,refetch:this.obsRefetch,fetchMore:this.obsFetchMore,updateQuery:this.obsUpdateQuery,startPolling:this.obsStartPolling,stopPolling:this.obsStopPolling,subscribeToMore:this.obsSubscribeToMore}},e}(c);function p(t,e,r){void 0===r&&(r=!1);var o=Object(s.useContext)(Object(i.d)()),a=Object(s.useReducer)((function(t){return t+1}),0),c=a[0],p=a[1],b=e?Object(n.a)(Object(n.a)({},e),{query:t}):{query:t},h=Object(s.useRef)(),v=h.current||new l({options:b,context:o,onNewData:function(){v.ssrInitiated()?p():Promise.resolve().then(p)}});v.setOptions(b),v.context=o,v.ssrInitiated()&&!h.current&&(h.current=v);var d=function(t,e){var r=Object(s.useRef)();return r.current&&Object(u.a)(e,r.current.key)||(r.current={key:e,value:t()}),r.current.value}((function(){return r?v.executeLazy():v.execute()}),{options:Object(n.a)(Object(n.a)({},b),{onError:void 0,onCompleted:void 0}),context:o,tick:c}),f=r?d[1]:d;return Object(s.useEffect)((function(){return h.current||(h.current=v),function(){return v.cleanup()}}),[]),Object(s.useEffect)((function(){return v.afterExecute({lazy:r})}),[f.loading,f.networkStatus,f.error,f.data]),d}function b(t,e){return p(t,e,!1)}var h=function(t){function e(e){var r=e.options,n=e.context,s=e.result,o=e.setResult,u=t.call(this,r,n)||this;return u.runMutation=function(t){void 0===t&&(t={}),u.onMutationStart();var e=u.generateNewMutationId();return u.mutate(t).then((function(t){return u.onMutationCompleted(t,e),t})).catch((function(t){if(u.onMutationError(t,e),!u.getOptions().onError)throw t}))},u.verifyDocumentType(r.mutation,i.c.Mutation),u.result=s,u.setResult=o,u.mostRecentMutationId=0,u}return Object(n.c)(e,t),e.prototype.execute=function(t){return this.isMounted=!0,this.verifyDocumentType(this.getOptions().mutation,i.c.Mutation),t.client=this.refreshClient().client,[this.runMutation,t]},e.prototype.afterExecute=function(){return this.isMounted=!0,this.unmount.bind(this)},e.prototype.cleanup=function(){},e.prototype.mutate=function(t){var e=this.getOptions(),r=e.mutation,i=e.variables,s=e.optimisticResponse,o=e.update,u=e.context,a=void 0===u?{}:u,c=e.awaitRefetchQueries,l=void 0!==c&&c,p=e.fetchPolicy,b=Object(n.a)({},t),h=Object.assign({},i,b.variables);return delete b.variables,this.refreshClient().client.mutate(Object(n.a)({mutation:r,optimisticResponse:s,refetchQueries:b.refetchQueries||this.getOptions().refetchQueries,awaitRefetchQueries:l,update:o,context:a,fetchPolicy:p,variables:h},b))},e.prototype.onMutationStart=function(){this.result.loading||this.getOptions().ignoreResults||this.updateResult({loading:!0,error:void 0,data:void 0,called:!0})},e.prototype.onMutationCompleted=function(t,e){var r=this.getOptions(),i=r.onCompleted,n=r.ignoreResults,s=t.data,u=t.errors,a=u&&u.length>0?new o.b({graphQLErrors:u}):void 0;this.isMostRecentMutation(e)&&!n&&this.updateResult({called:!0,loading:!1,data:s,error:a}),i&&i(s)},e.prototype.onMutationError=function(t,e){var r=this.getOptions().onError;this.isMostRecentMutation(e)&&this.updateResult({loading:!1,error:t,data:void 0,called:!0}),r&&r(t)},e.prototype.generateNewMutationId=function(){return++this.mostRecentMutationId},e.prototype.isMostRecentMutation=function(t){return this.mostRecentMutationId===t},e.prototype.updateResult=function(t){!this.isMounted||this.previousResult&&Object(u.a)(this.previousResult,t)||(this.setResult(t),this.previousResult=t)},e}(c);function v(t,e){var r=Object(s.useContext)(Object(i.d)()),o=Object(s.useState)({called:!1,loading:!1}),u=o[0],a=o[1],c=e?Object(n.a)(Object(n.a)({},e),{mutation:t}):{mutation:t},l=Object(s.useRef)();var p=(l.current||(l.current=new h({options:c,context:r,result:u,setResult:a})),l.current);return p.setOptions(c),p.context=r,Object(s.useEffect)((function(){return p.afterExecute()})),p.execute(u)}var d=function(t){function e(e){var r=e.options,i=e.context,n=e.setResult,s=t.call(this,r,i)||this;return s.currentObservable={},s.setResult=n,s.initialize(r),s}return Object(n.c)(e,t),e.prototype.execute=function(t){if(!0===this.getOptions().skip)return this.cleanup(),{loading:!1,error:void 0,data:void 0,variables:this.getOptions().variables};var e=t;this.refreshClient().isNew&&(e=this.getLoadingResult());var r=this.getOptions().shouldResubscribe;return"function"===typeof r&&(r=!!r(this.getOptions())),!1!==r&&this.previousOptions&&Object.keys(this.previousOptions).length>0&&(this.previousOptions.subscription!==this.getOptions().subscription||!Object(u.a)(this.previousOptions.variables,this.getOptions().variables)||this.previousOptions.skip!==this.getOptions().skip)&&(this.cleanup(),e=this.getLoadingResult()),this.initialize(this.getOptions()),this.startSubscription(),this.previousOptions=this.getOptions(),Object(n.a)(Object(n.a)({},e),{variables:this.getOptions().variables})},e.prototype.afterExecute=function(){this.isMounted=!0},e.prototype.cleanup=function(){this.endSubscription(),delete this.currentObservable.query},e.prototype.initialize=function(t){this.currentObservable.query||!0===this.getOptions().skip||(this.currentObservable.query=this.refreshClient().client.subscribe({query:t.subscription,variables:t.variables,fetchPolicy:t.fetchPolicy}))},e.prototype.startSubscription=function(){this.currentObservable.subscription||(this.currentObservable.subscription=this.currentObservable.query.subscribe({next:this.updateCurrentData.bind(this),error:this.updateError.bind(this),complete:this.completeSubscription.bind(this)}))},e.prototype.getLoadingResult=function(){return{loading:!0,error:void 0,data:void 0}},e.prototype.updateResult=function(t){this.isMounted&&this.setResult(t)},e.prototype.updateCurrentData=function(t){var e=this.getOptions().onSubscriptionData;this.updateResult({data:t.data,loading:!1,error:void 0}),e&&e({client:this.refreshClient().client,subscriptionData:t})},e.prototype.updateError=function(t){this.updateResult({error:t,loading:!1})},e.prototype.completeSubscription=function(){var t=this.getOptions().onSubscriptionComplete;t&&t(),this.endSubscription()},e.prototype.endSubscription=function(){this.currentObservable.subscription&&(this.currentObservable.subscription.unsubscribe(),delete this.currentObservable.subscription)},e}(c);function f(t,e){var r=Object(s.useContext)(Object(i.d)()),o=e?Object(n.a)(Object(n.a)({},e),{subscription:t}):{subscription:t},u=Object(s.useState)({loading:!o.skip,error:void 0,data:void 0}),a=u[0],c=u[1],l=Object(s.useRef)();var p=(l.current||(l.current=new d({options:o,context:r,setResult:c})),l.current);return p.setOptions(o,!0),p.context=r,Object(s.useEffect)((function(){return p.afterExecute()})),Object(s.useEffect)((function(){return p.cleanup.bind(p)}),[]),p.execute(a)}var O=function(){function t(){this.queryPromises=new Map,this.queryInfoTrie=new Map}return t.prototype.registerSSRObservable=function(t,e){this.lookupQueryInfo(e).observable=t},t.prototype.getSSRObservable=function(t){return this.lookupQueryInfo(t).observable},t.prototype.addQueryPromise=function(t,e){return this.lookupQueryInfo(t.getOptions()).seen?e():(this.queryPromises.set(t.getOptions(),new Promise((function(e){e(t.fetchData())}))),null)},t.prototype.hasPromises=function(){return this.queryPromises.size>0},t.prototype.consumeAndAwaitPromises=function(){var t=this,e=[];return this.queryPromises.forEach((function(r,i){t.lookupQueryInfo(i).seen=!0,e.push(r)})),this.queryPromises.clear(),Promise.all(e)},t.prototype.lookupQueryInfo=function(t){var e=this.queryInfoTrie,r=t.query,i=t.variables,n=e.get(r)||new Map;e.has(r)||e.set(r,n);var s=JSON.stringify(i),o=n.get(s)||{seen:!1,observable:null};return n.has(s)||n.set(s,o),o},t}()}}]);