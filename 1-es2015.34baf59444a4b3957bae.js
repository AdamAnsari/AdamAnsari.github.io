(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{iydT:function(t,n,e){"use strict";e.r(n),e.d(n,"HomeModule",(function(){return C}));var i=e("ofXK"),o=e("tyNb"),c=e("fXoL"),s=e("tk/3");let a=(()=>{class t{constructor(t){this.http=t}getData(){return this.http.get("https://www.reddit.com/.json")}getCommentData(t){return this.http.get(`https://www.reddit.com/${t}/.json`)}}return t.\u0275fac=function(n){return new(n||t)(c.Ub(s.b))},t.\u0275prov=c.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var r=e("aCBZ");function m(t,n){if(1&t){const t=c.Rb();c.Qb(0,"div",2),c.Yb("click",(function(e){c.gc(t);const i=n.index;return c.ac().customEvent(e,i+1)})),c.Qb(1,"div",3),c.lc(2),c.Pb(),c.Qb(3,"div",4),c.Qb(4,"span"),c.lc(5,"Comments"),c.Pb(),c.Qb(6,"span"),c.Qb(7,"button",5),c.lc(8,"Read Post"),c.Pb(),c.Pb(),c.Pb(),c.Pb()}if(2&t){const t=n.$implicit;c.Ab(2),c.mc(t.title)}}let b=(()=>{class t{constructor(t,n,e){this.redditApiService=t,this.commS=n,this.router=e,this.data=[],this.dataObj={}}ngOnInit(){this.getData()}getData(){this.redditApiService.getData().subscribe(t=>{this.content=Object.assign({},t),console.log(this.content),this.content.data.children.forEach((t,n)=>{this.dataObj={title:t.data.title,permalink:t.data.permalink},this.data.push(this.dataObj),this.dataObj={}}),console.log(this.data),this.commS.getPostData(this.data)})}customEvent(t,n){console.log(t,n),this.router.navigate(["/posts/details/"+n],{state:{id:n,parmalink:this.data[n-1].permalink}}).then(t=>console.log("navigation success?",t)).catch(console.error)}}return t.\u0275fac=function(n){return new(n||t)(c.Lb(a),c.Lb(r.a),c.Lb(o.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-home"]],decls:2,vars:1,consts:[[1,"home-main"],["class","blocks",3,"click",4,"ngFor","ngForOf"],[1,"blocks",3,"click"],[1,"title-text"],[1,"comments-btn"],["type","button",1,"btn","btn-primary"]],template:function(t,n){1&t&&(c.Qb(0,"div",0),c.kc(1,m,9,1,"div",1),c.Pb()),2&t&&(c.Ab(1),c.dc("ngForOf",n.data))},directives:[i.h],styles:[".home-main[_ngcontent-%COMP%]{height:85vh;overflow:auto;width:99%;margin:20px auto}.home-main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin:20px 10px}.blocks[_ngcontent-%COMP%]{border:1px solid #d3d3d3;border-radius:5px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);cursor:pointer}.blocks[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%]{font-size:20px;font-weight:700}.blocks[_ngcontent-%COMP%]   .comments-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{margin-right:10px;opacity:.4}"]}),t})();const l=["commentInput"],p=["replyInput"];function d(t,n){if(1&t){const t=c.Rb();c.Qb(0,"div"),c.Qb(1,"textarea",7,14),c.lc(3," "),c.Pb(),c.Qb(4,"button",9),c.Yb("click",(function(){c.gc(t);const n=c.fc(2);return c.ac(3).getReply(n.value)})),c.lc(5," Reply "),c.Pb(),c.Pb()}}function g(t,n){if(1&t&&(c.Qb(0,"div"),c.lc(1),c.Pb()),2&t){const t=n.$implicit,e=n.index;c.Ab(1),c.oc(" ",e+1,": ",t," ")}}function u(t,n){if(1&t&&(c.Ob(0),c.kc(1,g,2,2,"div",15),c.Nb()),2&t){const t=c.ac(3);c.Ab(1),c.dc("ngForOf",t.displayReply)}}function h(t,n){if(1&t){const t=c.Rb();c.Qb(0,"div",11),c.Qb(1,"div",12),c.lc(2),c.Pb(),c.Qb(3,"div",13),c.Qb(4,"span",3),c.Yb("click",(function(){return c.gc(t),c.ac(2).openReply()})),c.lc(5,"Reply"),c.Pb(),c.kc(6,d,6,0,"div",0),c.kc(7,u,2,1,"ng-container",0),c.Pb(),c.Pb()}if(2&t){const t=c.ac(2);c.Ab(2),c.mc(t.displayComment),c.Ab(4),c.dc("ngIf",t.replyFlag),c.Ab(1),c.dc("ngIf",t.displayReply)}}function f(t,n){if(1&t&&(c.Qb(0,"div",18),c.Qb(1,"strong"),c.lc(2,"Reply"),c.Pb(),c.lc(3),c.Pb()),2&t){const t=n.$implicit;c.Ab(3),c.nc(": ",t," ")}}function P(t,n){if(1&t&&(c.Ob(0),c.Qb(1,"div",16),c.Qb(2,"strong"),c.lc(3,"Comment"),c.Pb(),c.lc(4),c.Pb(),c.kc(5,f,4,1,"div",17),c.Nb()),2&t){const t=c.ac(2);c.Ab(4),c.nc(": ",t.mainComment," "),c.Ab(1),c.dc("ngForOf",t.commentApiData)}}function v(t,n){if(1&t){const t=c.Rb();c.Ob(0),c.Qb(1,"div",1),c.Qb(2,"div",2),c.Qb(3,"span",3),c.Yb("click",(function(){return c.gc(t),c.ac().close()})),c.lc(4,"X Close"),c.Pb(),c.Pb(),c.Qb(5,"div",4),c.Qb(6,"div",5),c.lc(7),c.Pb(),c.Pb(),c.Qb(8,"div",6),c.Qb(9,"textarea",7,8),c.lc(11," "),c.Pb(),c.Qb(12,"button",9),c.Yb("click",(function(){c.gc(t);const n=c.fc(10);return c.ac().getComments(n.value)})),c.lc(13," Add Comment "),c.Pb(),c.Pb(),c.kc(14,h,8,3,"div",10),c.kc(15,P,6,2,"ng-container",0),c.Pb(),c.Nb()}if(2&t){const t=c.ac();c.Ab(7),c.mc(t.data),c.Ab(7),c.dc("ngIf",t.displayComment),c.Ab(1),c.dc("ngIf",t.mainComment)}}const y=[{path:"details/:id",component:(()=>{class t{constructor(t,n,e){this.commS=t,this.router=n,this.redditApiService=e,this.replyFlag=!1,this.displayReply=[],this.resData=[],this.commentApiData=[],this.router.getCurrentNavigation().extras.state&&(this.pathIndex=this.router.getCurrentNavigation().extras.state.id,this.parmalink=this.router.getCurrentNavigation().extras.state.parmalink)}ngOnInit(){this.subs0=this.redditApiService.getCommentData(this.parmalink).subscribe(t=>{console.log(t),this.resData=[],this.commentApiData=[],this.resData=Object.assign({},t),this.resData[1].data.children.forEach((t,n)=>{t.data.body&&this.commentApiData.push(t.data.body)}),this.mainComment=this.commentApiData[0],this.commentApiData.shift(),console.log(this.commentApiData)}),this.subs1=this.commS.postsData.subscribe(t=>{this.pathIndex?this.data=t[this.pathIndex-1].title:this.router.navigate(["/posts"]),console.log(this.data)})}getComments(t){this.commS.getComment(t),this.subs2=this.commS.commentData.subscribe(t=>{console.log(t),t.trim().length>0&&(this.displayComment=t,this.commentInput.nativeElement.value="")})}getReply(t){this.replyFlag=!1,this.commS.getReply(t),this.subs3=this.commS.replyData.subscribe(t=>{console.log(t),t.trim().length>0&&(this.displayReply.push(t),this.displayReply=[...new Set(this.displayReply)],this.replyInput.nativeElement.value="")})}openReply(){this.replyFlag=!0}close(){this.router.navigate(["/posts"])}ngOnDestroy(){var t,n,e,i;null===(t=this.subs0)||void 0===t||t.unsubscribe(),null===(n=this.subs1)||void 0===n||n.unsubscribe(),null===(e=this.subs2)||void 0===e||e.unsubscribe(),null===(i=this.subs3)||void 0===i||i.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(c.Lb(r.a),c.Lb(o.a),c.Lb(a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-comments"]],viewQuery:function(t,n){var e;1&t&&(c.pc(l,!0),c.pc(p,!0)),2&t&&(c.ec(e=c.Zb())&&(n.commentInput=e.first),c.ec(e=c.Zb())&&(n.replyInput=e.first))},decls:1,vars:1,consts:[[4,"ngIf"],[1,"main-comment"],[1,"close-div"],[3,"click"],[1,"blocks"],[1,"title-text"],[1,"comment-input"],["rows","5","cols","40"],["commentInput",""],["type","button",1,"btn","btn-primary",3,"click"],["class","comments-block",4,"ngIf"],[1,"comments-block"],[1,"comment-text"],[1,"reply-text"],["replyInput",""],[4,"ngFor","ngForOf"],[1,"main-comment-text"],["class","replies",4,"ngFor","ngForOf"],[1,"replies"]],template:function(t,n){1&t&&c.kc(0,v,16,3,"ng-container",0),2&t&&c.dc("ngIf",n.data)},directives:[i.i,i.h],styles:[".main-comment[_ngcontent-%COMP%]{width:90%;margin:20px auto}.main-comment[_ngcontent-%COMP%]   .main-comment-text[_ngcontent-%COMP%]{margin:10px}.main-comment[_ngcontent-%COMP%]   .replies[_ngcontent-%COMP%]{margin:10px 0 0 20px}.main-comment[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;border:1px solid #d3d3d3;border-radius:5px}.main-comment[_ngcontent-%COMP%]   .close-div[_ngcontent-%COMP%]{display:flex;background-color:#000;color:#fff;padding:10px;cursor:pointer}.main-comment[_ngcontent-%COMP%]   .close-div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:auto}.main-comment[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]{border:1px solid #d3d3d3;border-radius:5px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.main-comment[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%]{font-size:20px;font-weight:700;padding:10px 0 10px 20px}.main-comment[_ngcontent-%COMP%]   .comment-input[_ngcontent-%COMP%]{margin:20px 0}.main-comment[_ngcontent-%COMP%]   .comments-block[_ngcontent-%COMP%]   .reply-text[_ngcontent-%COMP%]{margin-left:20px;font-size:12px}.main-comment[_ngcontent-%COMP%]   .comments-block[_ngcontent-%COMP%]   .reply-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{opacity:.6;cursor:pointer}"]}),t})()},{path:"",component:b}];let x=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(n){return new(n||t)},imports:[[o.b.forChild(y)],o.b]}),t})(),C=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(n){return new(n||t)},imports:[[i.b,x]]}),t})()}}]);