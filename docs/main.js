"use strict";(self.webpackChunkazet_dt=self.webpackChunkazet_dt||[]).push([["main"],{4617:(v,h,o)=>{o.d(h,{n:()=>t});var l=o(3184);class t{constructor(){}storeValue(e,s){try{window.localStorage[s]=e}catch(i){}}getStorageValueByKey(e){try{return window.localStorage[e]||null}catch(s){return null}}clearStorageByKey(e){try{window.localStorage.removeItem(e)}catch(s){}}}t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})},2577:(v,h,o)=>{o.d(h,{i:()=>u});var l=o(1915),t=o(3836),n=o(4313),e=o(3184),s=o(5758),i=o(4770),_=o(4683),Z=o(6362),x=o(5818),L=o(89),R=o(1961),I=o(7391),S=o(7317),A=o(7985);function O(r,d){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"formControlErrorInterpretation"),e.qZA()),2&r){const m=e.oxw();e.xp6(1),e.hij(" ",e.lcZ(2,1,m.controlName.errors)," ")}}function M(r,d){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"formControlErrorInterpretation"),e.qZA()),2&r){const m=e.oxw();e.xp6(1),e.hij(" ",e.lcZ(2,1,m.controlPhone.errors)," ")}}function E(r,d){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"formControlErrorInterpretation"),e.qZA()),2&r){const m=e.oxw();e.xp6(1),e.hij(" ",e.lcZ(2,1,m.controlEmail.errors)," ")}}function N(r,d){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"formControlErrorInterpretation"),e.qZA()),2&r){const m=e.oxw();e.xp6(1),e.hij(" ",e.lcZ(2,1,m.controlReason.errors)," ")}}function F(r,d){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"formControlErrorInterpretation"),e.qZA()),2&r){const m=e.oxw();e.xp6(1),e.hij(" ",e.lcZ(2,1,m.controlDate.errors)," ")}}function C(r,d){1&r&&(e.TgZ(0,"mat-error",28),e._uU(1," Ora este valid\u0103. "),e.qZA())}function p(r,d){if(1&r&&(e.TgZ(0,"mat-error",29),e._uU(1),e.ALo(2,"formControlErrorInterpretation"),e.qZA()),2&r){const m=e.oxw();e.xp6(1),e.hij(" ",e.lcZ(2,1,m.controlTime.errors)," ")}}class u{constructor(){this.minDate=new Date,this.maxDate=new Date,this.scheduleInServiceForm=new l.cw({name:new l.NI("",[l.kI.required,l.kI.maxLength(20),l.kI.minLength(3),(0,t.e)(n.W.onlyCharacters)]),email:new l.NI("",[l.kI.required,l.kI.email]),phone:new l.NI("",[l.kI.required,(0,t.e)(n.W.phoneNumber)]),reason:new l.NI("",l.kI.required),date:new l.NI(null,l.kI.required),time:new l.NI(null,[l.kI.required,(0,t.s)()])}),this.filterDate=d=>{const m=(d||new Date).getDay();return 0!==m&&6!==m}}get controlName(){return this.scheduleInServiceForm.get("name")}get controlEmail(){return this.scheduleInServiceForm.get("email")}get controlPhone(){return this.scheduleInServiceForm.get("phone")}get controlDate(){return this.scheduleInServiceForm.get("date")}get controlTime(){return this.scheduleInServiceForm.get("time")}get controlReason(){return this.scheduleInServiceForm.get("reason")}ngOnInit(){this.minDate.setDate(this.minDate.getDate()+1),this.maxDate.setDate(this.minDate.getDate()+21),this.controlDate.setValue(this.minDate)}onSubmitScheduleInServiceForm(){const d=this.scheduleInServiceForm.getRawValue();console.log(d,"scheduleInServiceFormValues")}}u.\u0275fac=function(d){return new(d||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-dialog-content-schedule-in-service"]],decls:65,vars:17,consts:[["mat-dialog-title","",1,"d-flex","align-items-center"],[1,"material-icons","text-warning","mr-3"],["mat-dialog-content",""],[1,"row","align-items-center","justify-content-center",3,"formGroup","ngSubmit"],["appearance","outline",1,"col-12","mb-1"],["id","name","name","name","type","text","matInput","","maxlength","20","formControlName","name","placeholder","Nume","autocomplete","username","required",""],["n",""],["align","start"],["align","end"],[4,"ngIf"],["matSuffix","",1,"material-icons"],["appearance","outline",1,"col-12","w-100","my-3"],["matPrefix",""],["id","phone","name","phone","type","tel","aria-label","Telefon","matInput","","formControlName","phone","placeholder","555-555-1234","required",""],["matInput","","placeholder","pat@example.com","formControlName","email","autocomplete","username","required",""],["matInput","","formControlName","reason","maxlength","100","placeholder","Ex. Schimbare de cauciuc...","required",""],["reason",""],["matInput","","formControlName","date","matTooltip","Data program\u0103rii trebuie s\u0103 fie cu o zi \xeenainte de ziua curent\u0103.","required","",3,"matDatepicker","matDatepickerFilter","max","min"],["matSuffix","",3,"for"],["picker",""],[1,"col-12","text-center","m-0","p-0"],[1,"align-items-center"],["formControlName","time","required","",3,"hourStep","minuteStep"],["class","text-success","style","font-size: 75%;",4,"ngIf"],["style","font-size: 75%;",4,"ngIf"],["mat-dialog-actions","","align","end"],["mat-button","","mat-dialog-close",""],["mat-raised-button","","color","accent","type","submit","mat-dialog-data",""],[1,"text-success",2,"font-size","75%"],[2,"font-size","75%"]],template:function(d,m){if(1&d&&(e.TgZ(0,"h1",0)(1,"span",1),e._uU(2,"tire_repair"),e.qZA(),e._uU(3," Programeaz\u0103 \xeen service\n"),e.qZA(),e.TgZ(4,"div",2)(5,"form",3),e.NdJ("ngSubmit",function(){return m.onSubmitScheduleInServiceForm()}),e.TgZ(6,"mat-form-field",4)(7,"mat-label"),e._uU(8,"Nume"),e.qZA(),e._UZ(9,"input",5,6),e.TgZ(11,"mat-hint",7),e._uU(12,"Ex. Popescu Adrian"),e.qZA(),e.TgZ(13,"mat-hint",8),e._uU(14),e.qZA(),e.YNc(15,O,3,3,"mat-error",9),e.TgZ(16,"span",10),e._uU(17," person "),e.qZA()(),e.TgZ(18,"mat-form-field",11)(19,"span",12),e._uU(20,"+40 \xa0"),e.qZA(),e.TgZ(21,"mat-label"),e._uU(22,"Telefon"),e.qZA(),e._UZ(23,"input",13),e.TgZ(24,"mat-hint",7),e._uU(25,"Introduce\u021bi num\u0103rul de telefon"),e.qZA(),e.YNc(26,M,3,3,"mat-error",9),e.TgZ(27,"span",10),e._uU(28," phone "),e.qZA()(),e.TgZ(29,"mat-form-field",4)(30,"mat-label"),e._uU(31,"Email"),e.qZA(),e._UZ(32,"input",14),e.YNc(33,E,3,3,"mat-error",9),e.TgZ(34,"span",10),e._uU(35," mail "),e.qZA()(),e.TgZ(36,"mat-form-field",4)(37,"mat-label"),e._uU(38,"Motiv"),e.qZA(),e._UZ(39,"input",15,16),e.TgZ(41,"mat-hint",8),e._uU(42),e.qZA(),e.YNc(43,N,3,3,"mat-error",9),e.TgZ(44,"span",10),e._uU(45," textsms "),e.qZA()(),e.TgZ(46,"mat-form-field",4)(47,"mat-label"),e._uU(48,"Data program\u0103rii"),e.qZA(),e._UZ(49,"input",17)(50,"mat-datepicker-toggle",18)(51,"mat-datepicker",null,19),e.YNc(53,F,3,3,"mat-error",9),e.qZA(),e.TgZ(54,"mat-card",20)(55,"mat-label",21),e._uU(56," Ora program\u0103rii * "),e.qZA(),e._UZ(57,"ngb-timepicker",22),e.YNc(58,C,2,0,"mat-error",23),e.YNc(59,p,3,3,"mat-error",24),e.qZA()()(),e.TgZ(60,"div",25)(61,"button",26),e._uU(62,"\xcenchide"),e.qZA(),e.TgZ(63,"button",27),e._uU(64,"Programeaz\u0103"),e.qZA()()),2&d){const f=e.MAs(10),q=e.MAs(40),y=e.MAs(52);e.xp6(5),e.Q6J("formGroup",m.scheduleInServiceForm),e.xp6(9),e.hij("",f.value.length," / 20"),e.xp6(1),e.Q6J("ngIf",m.controlName.invalid),e.xp6(11),e.Q6J("ngIf",m.controlPhone.invalid),e.xp6(7),e.Q6J("ngIf",m.controlEmail.invalid),e.xp6(9),e.hij("",q.value.length," / 100"),e.xp6(1),e.Q6J("ngIf",m.controlReason.invalid),e.xp6(6),e.Q6J("matDatepicker",y)("matDatepickerFilter",m.filterDate)("max",m.maxDate)("min",m.minDate),e.xp6(1),e.Q6J("for",y),e.xp6(3),e.Q6J("ngIf",m.controlDate.invalid),e.xp6(4),e.Q6J("hourStep",1)("minuteStep",15),e.xp6(1),e.Q6J("ngIf",m.controlTime.valid),e.xp6(1),e.Q6J("ngIf",m.controlTime.invalid)}},directives:[s.uh,s.xY,l._Y,l.JL,l.sg,i.KE,i.hX,_.Nt,l.Fj,l.nD,l.JJ,l.u,l.Q7,i.bx,Z.O5,i.TO,i.R9,i.qo,x.hl,L.gM,x.nW,x.Mq,R.a8,I.Pm,s.H8,S.lW,s.ZT],pipes:[A.s],styles:[""],changeDetection:0})},3326:(v,h,o)=>{o.d(h,{E:()=>C});var l=o(745),t=o(4750),n=o(3184),e=o(5758),s=o(6131),i=o(6362),_=o(1130),Z=o(833),x=o(9975),L=o(7317);function R(p,u){if(1&p&&(n.TgZ(0,"div",12),n._uU(1),n.ALo(2,"date"),n.qZA()),2&p){const r=u.ngIf;n.xp6(1),n.hij("",n.xi3(2,1,r,"d.M.yy, H:mm:ss")," ")}}function I(p,u){1&p&&n._UZ(0,"mat-progress-bar",13)}function S(p,u){1&p&&(n.TgZ(0,"span",20),n._uU(1,"Deschis"),n.qZA())}function A(p,u){1&p&&n._uU(0,"\xcenchis")}function O(p,u){if(1&p&&(n.TgZ(0,"div",12),n.YNc(1,S,2,0,"span",18),n.YNc(2,A,1,0,"ng-template",null,19,n.W1O),n.qZA()),2&p){const r=n.MAs(3),d=n.oxw(2);n.xp6(1),n.Q6J("ngIf",d.currentDateIsInProgramRange)("ngIfElse",r)}}const M=function(p){return{"border border-success rounded":p}},E=function(p,u){return{"text-success":p,"text-secondary":u}};function N(p,u){if(1&p&&(n.TgZ(0,"mat-list-item",14)(1,"span",15),n._uU(2),n.qZA(),n.TgZ(3,"div",16)(4,"span"),n._uU(5),n.qZA(),n.TgZ(6,"span"),n._uU(7),n.qZA()(),n.YNc(8,O,4,2,"div",17),n.qZA()),2&p){const r=u.$implicit,d=n.oxw();n.Q6J("ngClass",n.VKq(6,M,r.value===d.dayNow)),n.xp6(1),n.Q6J("ngClass",n.WLB(8,E,r.value===d.dayNow&&d.currentDateIsInProgramRange,!(r.value===d.dayNow&&d.currentDateIsInProgramRange))),n.xp6(1),n.Oqu(r.icon),n.xp6(3),n.Oqu(r.label),n.xp6(2),n.Oqu(r.timeRange),n.xp6(1),n.Q6J("ngIf",r.value===d.dayNow)}}function F(p,u){if(1&p&&(n.TgZ(0,"mat-list-item")(1,"span",21),n._uU(2),n.qZA(),n.TgZ(3,"div",12),n._uU(4),n.qZA(),n.TgZ(5,"div",12),n._uU(6),n.qZA()()),2&p){const r=u.$implicit;n.xp6(2),n.Oqu(r.icon),n.xp6(2),n.Oqu(r.label),n.xp6(2),n.Oqu(r.timeRange)}}class C{constructor(){this.daysOfWeeks=t.$,this.realTimeClock$=(0,l.of)(new Date),this.dayNow=(new Date).getDay(),this.currentDateIsInProgramRange=!1}ngOnInit(){this.currentDateIsInProgramRange=this.checkIfIsOpened()}checkIfIsOpened(){const u=new Date,r=new Date,d=new Date;return r.setHours(8,0,0,0),d.setHours(17,0,0,0),!(0===u.getDay()||6===u.getDay()||u<r||u>d)}trackByValue(u,r){return r.value}}C.\u0275fac=function(u){return new(u||C)},C.\u0275cmp=n.Xpm({type:C,selectors:[["app-dialog-content-schedule"]],decls:26,vars:8,consts:[["mat-dialog-title","",1,"d-flex","align-items-center"],[1,"material-icons","text-danger","mr-3"],["mat-dialog-content",""],["dense",""],["mat-subheader",""],["mat-list-icon","",1,"material-icons-round","text-info"],["mat-line","",4,"ngIf","ngIfElse"],["loadingClock",""],[3,"ngClass",4,"ngFor","ngForOf","ngForTrackBy"],[4,"ngFor","ngForOf","ngForTrackBy"],["mat-dialog-actions","","align","end"],["mat-button","","mat-dialog-close",""],["mat-line",""],["color","accent","mode","indeterminate"],[3,"ngClass"],["mat-list-icon","",1,"material-icons-round","text-success",3,"ngClass"],["mat-line","",1,"d-flex","justify-content-between"],["mat-line","",4,"ngIf"],["class","text-success",4,"ngIf","ngIfElse"],["closed",""],[1,"text-success"],["mat-list-icon","",1,"material-icons-round","text-danger"]],template:function(u,r){if(1&u&&(n.TgZ(0,"h1",0)(1,"span",1),n._uU(2,"schedule"),n.qZA(),n._uU(3," Program de lucru\n"),n.qZA(),n.TgZ(4,"mat-dialog-content",2)(5,"mat-list",3)(6,"div",4),n._uU(7,"Data exact\u0103"),n.qZA(),n.TgZ(8,"mat-list-item")(9,"span",5),n._uU(10,"timer"),n.qZA(),n.YNc(11,R,3,4,"div",6),n.ALo(12,"async"),n.YNc(13,I,1,0,"ng-template",null,7,n.W1O),n.qZA(),n._UZ(15,"mat-divider"),n.TgZ(16,"div",4),n._uU(17,"Zile lucr\u0103toare"),n.qZA(),n.YNc(18,N,9,11,"mat-list-item",8),n._UZ(19,"mat-divider"),n.TgZ(20,"div",4),n._uU(21,"Zile libere"),n.qZA(),n.YNc(22,F,7,3,"mat-list-item",9),n.qZA()(),n.TgZ(23,"mat-dialog-action",10)(24,"button",11),n._uU(25,"\xcenchide"),n.qZA()()),2&u){const d=n.MAs(14);n.xp6(11),n.Q6J("ngIf",n.lcZ(12,6,r.realTimeClock$))("ngIfElse",d),n.xp6(7),n.Q6J("ngForOf",r.daysOfWeeks.workDays)("ngForTrackBy",r.trackByValue),n.xp6(4),n.Q6J("ngForOf",r.daysOfWeeks.weekend)("ngForTrackBy",r.trackByValue)}},directives:[e.uh,e.xY,s.i$,s.gs,s.Tg,s.Nh,i.O5,_.X2,Z.pW,x.d,i.sg,i.mk,e.H8,L.lW,e.ZT],pipes:[i.Ov,i.uU],styles:[""],changeDetection:0})},7985:(v,h,o)=>{o.d(h,{s:()=>e});var l=o(4929),t=o(5895),n=o(3184);class e{transform(i){return i&&i.required?"C\xe2mpul este obligatoriu.":i&&i.email?"Email-ul nu este valid.":i&&i.minlength?"A\u021bi completat "+i.minlength.actualLength+" din "+i.minlength.requiredLength+" caractere.":i&&i.maxlength?"A\u021bi dep\u0103\u0219it num\u0103rul de caractere cu "+i.maxlength.actualLength+" din "+i.maxlength.requiredLength+".":i&&i.passwordMismatch?"Parolele nu sunt identice.":i&&i.invalidMsg?i.invalidMsg:i&&i.matDatepickerMin?i.matDatepickerMin.actual&&i.matDatepickerMin.min?"Data introdus\u0103 este \xeen trecut.":"Data este invalid\u0103.":i&&i.customMessage?i.customMessage:"Eroare."}}e.\u0275fac=function(i){return new(i||e)},e.\u0275pipe=n.Yjl({name:"formControlErrorInterpretation",type:e,pure:!0}),(0,l.gn)([(0,t.Z)()],e.prototype,"transform",null)},9250:(v,h,o)=>{o.d(h,{$:()=>n});var l=o(3184),t=o(8784);class n{constructor(s){this.http=s,this.isAuthenticated=!1}login(s){return this.http.get(s)}register(s){return this.http.get(s)}forgotPassword(s){return this.http.get(s)}}n.\u0275fac=function(s){return new(s||n)(l.LFG(t.eN))},n.\u0275prov=l.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})},8587:(v,h,o)=>{o.d(h,{m:()=>P});var l=o(6362),t=o(1915),n=o(8031),e=o(7391),s=o(3184);class i{}i.\u0275fac=function(z){return new(z||i)},i.\u0275mod=s.oAB({type:i}),i.\u0275inj=s.cJS({imports:[e.ZQ,e.UL]});var _=o(1604),Z=o(7317),x=o(1959),L=o(1961),R=o(1534),I=o(1196),S=o(1130),A=o(5818),O=o(5758),M=o(9975),E=o(4770),N=o(4683),F=o(6131),C=o(833),p=o(1434),u=o(7216),r=o(2528),d=o(2379),m=o(9946),f=o(89),q=o(4972),y=o(6088);class T{}T.\u0275fac=function(z){return new(z||T)},T.\u0275mod=s.oAB({type:T}),T.\u0275inj=s.cJS({providers:[A.FA,r.ux],imports:[Z.ot,L.QW,M.t,f.AV,m.g0,I.Hi,S.si,C.Cv,F.ie,_.Iq,O.Is,E.lN,A.FA,u.SJ,p.LD,d.Nh,x.vV,q.dp,R.p9,N.c,y.U8]});class P{}P.\u0275fac=function(z){return new(z||P)},P.\u0275mod=s.oAB({type:P}),P.\u0275inj=s.cJS({imports:[[l.ez,t.UX,n.Bz,T,i],l.ez,T,i]})},4313:(v,h,o)=>{o.d(h,{W:()=>l});const l={phoneNumber:{regExp:/^\+?[0-9]*$/,msg:"Num\u0103rul de telefonu nu este valid."},onlyNumbers:{regExp:/^[0-9]\d*$/,msg:"Trebuie s\u0103 introduce\u021bi doar numere."},onlyCharacters:{regExp:/^[a-zA-Z ]*$/,msg:"Trebuie s\u0103 introduce\u021bi doar caractere."}}},4750:(v,h,o)=>{o.d(h,{$:()=>t,N:()=>l});const l="https://www.google.com/maps/place/Azet+DT+Resapare+\n                                         Anvelope+Camion+SRL/@45.6575573,25.641716,17z/data=!3m1!4b1!4m12!1m6!3m5!1s0x40b35c6b2de4023d\n                                         :0x1b5da9eebf44f902!2sAzet+DT+Resapare+Anvelope+Camion+SRL!8m2!3d45.6575587!4d25.6439095!3m4!\n                                         1s0x40b35c6b2de4023d:0x1b5da9eebf44f902!8m2!3d45.6575587!4d25.6439095",t={workDays:[{value:1,label:"Luni",icon:"check_circle_outline",timeRange:"08 \u2013 17"},{value:2,label:"Mar\u021bi",icon:"check_circle_outline",timeRange:"08 \u2013 17"},{value:3,label:"Miercuri",icon:"check_circle_outline",timeRange:"08 \u2013 17"},{value:4,label:"Joi",icon:"check_circle_outline",timeRange:"08 \u2013 17"},{value:5,label:"Vineri",icon:"check_circle_outline",timeRange:"08 \u2013 17"}],weekend:[{value:6,label:"S\xe2mb\u0103t\u0103",icon:"highlight_off",timeRange:"\xcenchis"},{value:0,label:"Duminic\u0103",icon:"highlight_off",timeRange:"\xcenchis"}]}},3836:(v,h,o)=>{function l(n){return e=>{let s=n.regExp;return e.value&&!e.value.match(s)?{invalidMsg:n.msg}:null}}function t(){return n=>{const e=n.value;return e?e.hour<8?{customMessage:"Ne pare r\u0103u dar este prea devreme."}:e.hour>17?{customMessage:"Ne pare r\u0103u dar este prea t\xe2rziu."}:null:null}}o.d(h,{e:()=>l,s:()=>t})},1091:(v,h,o)=>{var l=o(318),t=o(3184),n=o(7481),e=o(8031),s=o(745);const i_production=!1;class _{constructor(){}log(a){i_production||console.log(a)}logError(a){i_production||console.error(a)}}_.\u0275fac=function(a){return new(a||_)},_.\u0275prov=t.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"});class Z{constructor(a){this.logger=a}preload(a,g){return a.data&&a.data.preload?(this.logger.log("Preloaded: "+a.path),g()):(0,s.of)(null)}}Z.\u0275fac=function(a){return new(a||Z)(t.LFG(_))},Z.\u0275prov=t.Yz7({token:Z,factory:Z.\u0275fac});var x=o(4750),L=o(2577),R=o(3326),I=o(5758),S=o(9946);class A{constructor(){this.position="center"}}A.\u0275fac=function(a){return new(a||A)},A.\u0275cmp=t.Xpm({type:A,selectors:[["app-logo-icon"]],inputs:{position:"position"},decls:2,vars:2,consts:[["routerLink","/home","src","./assets/pictures/icon.png","alt","Azet D.T.",1,"cursor-pointer"]],template:function(a,g){1&a&&(t.TgZ(0,"div"),t._UZ(1,"img",0),t.qZA()),2&a&&t.Tol("text-"+g.position)},directives:[e.rH],styles:[""],changeDetection:0});var O=o(7317),M=o(6088),E=o(4770),N=o(9975),F=o(4683);function C(c,a){if(1&c){const g=t.EpF();t.TgZ(0,"div",19)(1,"div",20)(2,"button",21),t.NdJ("click",function(){t.CHM(g);const D=t.oxw();return D.isSerachOverlayOpened=!D.isSerachOverlayOpened}),t.TgZ(3,"span",22),t._uU(4," close "),t.qZA()()(),t.TgZ(5,"div",23)(6,"h3"),t._uU(7,"Caut\u0103 anvelop\u0103"),t.qZA(),t._UZ(8,"mat-divider"),t.TgZ(9,"mat-form-field",24)(10,"mat-label"),t._uU(11,"Caut\u0103 dup\u0103 cuvinte cheie :"),t.qZA(),t._UZ(12,"input",25,26),t.TgZ(14,"span",22),t._uU(15," search "),t.qZA()(),t.TgZ(16,"button",27),t.NdJ("click",function(){t.CHM(g);const D=t.MAs(13);return t.oxw().search(D.value)}),t._uU(17," CAUT\u0102 "),t.qZA()()()}}function p(c,a){if(1&c){const g=t.EpF();t.TgZ(0,"div",19)(1,"div",20)(2,"button",21),t.NdJ("click",function(){t.CHM(g);return t.oxw().isMenuOverlayOpened=!1}),t.TgZ(3,"span",22),t._uU(4," close "),t.qZA()()(),t.TgZ(5,"div",28)(6,"div",29)(7,"div",30)(8,"h6",31),t._uU(9,"Pagini"),t.qZA(),t.TgZ(10,"span",32),t._uU(11," keyboard_arrow_down "),t.qZA()(),t.TgZ(12,"div",23)(13,"button",33),t._uU(14," Acas\u0103 "),t.qZA()(),t.TgZ(15,"div",23)(16,"button",34),t._uU(17," Anvelope "),t.qZA()(),t.TgZ(18,"div",23)(19,"button",35),t._uU(20," Contact "),t.qZA()()()(),t.TgZ(21,"div",28)(22,"div",29)(23,"div",30)(24,"h6",31),t._uU(25,"Informa\u021bii"),t.qZA(),t.TgZ(26,"span",32),t._uU(27," keyboard_arrow_down "),t.qZA()(),t.TgZ(28,"div",23)(29,"button",36),t._uU(30," Cum comand "),t.qZA()(),t.TgZ(31,"div",23)(32,"button",36),t._uU(33," Prelucrarea datelor "),t.qZA()(),t.TgZ(34,"div",23)(35,"button",36),t._uU(36," Termeni si conditii "),t.qZA()(),t.TgZ(37,"div",23)(38,"button",36),t._uU(39," ANPC "),t.qZA()()()(),t.TgZ(40,"div",28)(41,"div",29)(42,"div",30)(43,"h6",31),t._uU(44,"Contact"),t.qZA(),t.TgZ(45,"span",32),t._uU(46," keyboard_arrow_down "),t.qZA()(),t.TgZ(47,"div",23)(48,"a",37),t._uU(49," Strada Zizinului Nr. 123G "),t.qZA()(),t.TgZ(50,"div",23)(51,"a",38),t._uU(52," (0737) 167 631 "),t.qZA()(),t.TgZ(53,"div",23)(54,"a",39),t._uU(55," (0754) 369 261 "),t.qZA()(),t.TgZ(56,"div",23)(57,"a",40),t._uU(58," office@azet-resapare.ro "),t.qZA()()()()()}if(2&c){const g=t.oxw();t.xp6(48),t.Q6J("href",g.azetDtLocation,t.LSH)}}class u{constructor(a){this.dialog=a,this.openSideNavDrawer=new t.vpe,this.isSerachOverlayOpened=!1,this.isMenuOverlayOpened=!1,this.azetDtLocation="https://www.google.com/maps/place/Azet+DT+Resapare+Anvelope+Camion+SRL/@45.6575573,25.641716,17z/data=!3m1!4b1!4m12!1m6!3m5!1s0x40b35c6b2de4023d:0x1b5da9eebf44f902!2sAzet+DT+Resapare+Anvelope+Camion+SRL!8m2!3d45.6575587!4d25.6439095!3m4!1s0x40b35c6b2de4023d:0x1b5da9eebf44f902!8m2!3d45.6575587!4d25.6439095"}ngOnInit(){}search(a){console.log(a,"text")}toggleSearchOverlay(){this.isSerachOverlayOpened=!this.isSerachOverlayOpened,this.isMenuOverlayOpened=!1}toggleMenuOverlay(){this.isMenuOverlayOpened=!this.isMenuOverlayOpened,this.isSerachOverlayOpened=!1}clickMenuIcon(){this.openSideNavDrawer.emit(!0)}}u.\u0275fac=function(a){return new(a||u)(t.Y36(I.uw))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-header"]],outputs:{openSideNavDrawer:"openSideNavDrawer"},decls:34,vars:5,consts:[[1,"mat-elevation-z6","azet-dt-header"],[1,"header-first-row"],[1,"row","w-100","align-items-center"],[1,"col","col-lg-3"],[3,"position"],[1,"col","ms-4","d-none","d-lg-block"],["mat-button","","routerLink","/products","color","primary"],[1,"col","text-end","d-none","d-lg-block"],["mat-button","","color","primary","href","tel:+40737167631"],[1,"material-icons"],[1,"col","vertical-line","d-none","d-lg-block"],["mat-icon-button","","color","secondary","type","button",3,"click"],["mat-icon-button","","color","secondary",3,"click"],[1,"col","vertical-line","d-lg-none"],[1,"header-second-row"],["cdkOverlayOrigin",""],["searchOverlay","cdkOverlayOrigin"],["menuOverlay","cdkOverlayOrigin"],["cdkConnectedOverlay","",3,"cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen"],[1,"row","azet-dt-search"],[1,"col-12","text-end"],["mat-icon-button","","color","primary","type","button",3,"click"],["matSuffix","",1,"material-icons"],[1,"col-12"],["appearance","outline",1,"w-100","my-3"],["id","searchText","type","text","matInput","","maxlength","40"],["n",""],["mat-raised-button","","color","primary","type","button",3,"click"],[1,"col-4"],[1,"row"],[1,"col-12","d-flex"],[1,"ms-3"],[1,"title","material-icons"],["mat-button","","color","primary-medium","routerLink","/home"],["mat-button","","color","primary-medium","routerLink","/products"],["mat-button","","color","primary-medium","routerLink","/contact"],["mat-button","","color","primary-medium"],["mat-button","","color","primary-medium","target","_blank",3,"href"],["mat-button","","color","primary-medium","href","tel:+40737167631"],["mat-button","","color","primary-medium","href","tel:+40754369261"],["mat-button","","color","primary-medium","href","mailto: office@azet-resapare.ro"]],template:function(a,g){if(1&a&&(t.TgZ(0,"mat-toolbar",0)(1,"mat-toolbar-row",1)(2,"div",2)(3,"div",3),t._UZ(4,"app-logo-icon",4),t.qZA(),t.TgZ(5,"div",5)(6,"button",6),t._uU(7,"ANVELOPE"),t.qZA()(),t.TgZ(8,"div",7)(9,"a",8)(10,"span",9),t._uU(11," phone "),t.qZA(),t._uU(12," (0737) 167 631 "),t.qZA()(),t.TgZ(13,"div",10)(14,"button",11),t.NdJ("click",function(){return g.toggleSearchOverlay()}),t.TgZ(15,"span",9),t._uU(16," search "),t.qZA()(),t.TgZ(17,"button",12),t.NdJ("click",function(){return g.toggleMenuOverlay()}),t.TgZ(18,"span",9),t._uU(19," menu "),t.qZA()()(),t.TgZ(20,"div",13)(21,"button",11),t.NdJ("click",function(){return g.toggleSearchOverlay()}),t.TgZ(22,"span",9),t._uU(23," search "),t.qZA()(),t.TgZ(24,"button",12),t.NdJ("click",function(){return g.clickMenuIcon()}),t.TgZ(25,"span",9),t._uU(26," menu "),t.qZA()()()()(),t.TgZ(27,"mat-toolbar-row",14),t._UZ(28,"div",15,16)(30,"div",15,17),t.qZA()(),t.YNc(32,C,18,0,"ng-template",18),t.YNc(33,p,59,1,"ng-template",18)),2&a){const U=t.MAs(29),D=t.MAs(31);t.xp6(4),t.Q6J("position","end"),t.xp6(28),t.Q6J("cdkConnectedOverlayOrigin",U)("cdkConnectedOverlayOpen",g.isSerachOverlayOpened),t.xp6(1),t.Q6J("cdkConnectedOverlayOrigin",D)("cdkConnectedOverlayOpen",g.isMenuOverlayOpened)}},directives:[S.Ye,S.rD,A,O.lW,e.rH,O.zs,M.xu,M.pI,E.R9,N.d,E.KE,E.hX,F.Nt],styles:[""]});var r=o(7216),d=o(6131);class m{constructor(){this.azetDtLocation="https://www.google.com/maps/place/Azet+DT+Resapare+Anvelope+Camion+SRL/@45.6575573,25.641716,17z/data=!3m1!4b1!4m12!1m6!3m5!1s0x40b35c6b2de4023d:0x1b5da9eebf44f902!2sAzet+DT+Resapare+Anvelope+Camion+SRL!8m2!3d45.6575587!4d25.6439095!3m4!1s0x40b35c6b2de4023d:0x1b5da9eebf44f902!8m2!3d45.6575587!4d25.6439095"}ngOnInit(){}}m.\u0275fac=function(a){return new(a||m)},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-footer"]],decls:62,vars:1,consts:[[1,"row","footer-container","py-5"],[1,"col-lg-6","text-center","px-5"],[1,"my-3","px-5"],[1,"blockquote"],[1,"col-lg-3","col-md-6","mt-3"],[1,"row"],[1,"col-12","text-lg-start","text-center"],[1,"white","ms-2"],["mat-button","",1,"text-start","mb-1"],[1,"material-icons"],["mat-button","","target","_blank",1,"text-start","mb-1",3,"href"],["mat-button","","href","tel:+40737167631",1,"text-start","mb-1"],["mat-button","","href","tel:+40754369261",1,"text-start","mb-1"],["mat-button","","href","mailto: office@azet-resapare.ro",1,"text-start","mb-1"],[1,"row","sub-footer-container"],[1,"col-12","text-center","p-4"]],template:function(a,g){1&a&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-logo-icon")(3,"hr"),t.TgZ(4,"figure",2)(5,"blockquote",3)(6,"p"),t._uU(7," Compania noastr\u0103 este deja renumit\u0103 \xeen r\xe2ndul transportatorilor din zon\u0103, raportul calitate/pre\u0163 al re\u015fapatelor \xeen sistem KRAIBURG c\xe2\u015ftig\xe2nd \xeencrederea partenerilor pe termen lung. "),t.qZA()()(),t._UZ(8,"hr"),t.qZA(),t.TgZ(9,"div",4)(10,"div",5)(11,"div",6)(12,"h4",7),t._uU(13,"Informa\u021bii"),t.qZA()(),t.TgZ(14,"div",6)(15,"button",8)(16,"span",9),t._uU(17," store "),t.qZA(),t._uU(18," Cum comand "),t.qZA()(),t.TgZ(19,"div",6)(20,"button",8)(21,"span",9),t._uU(22," analytics "),t.qZA(),t._uU(23," Prelucrarea datelor "),t.qZA()(),t.TgZ(24,"div",6)(25,"button",8)(26,"span",9),t._uU(27," task "),t.qZA(),t._uU(28," Termeni si conditii "),t.qZA()(),t.TgZ(29,"div",6)(30,"button",8)(31,"span",9),t._uU(32," policy "),t.qZA(),t._uU(33," ANPC "),t.qZA()()()(),t.TgZ(34,"div",4)(35,"div",5)(36,"div",6)(37,"h4",7),t._uU(38,"CONTACT"),t.qZA()(),t.TgZ(39,"div",6)(40,"a",10)(41,"span",9),t._uU(42," place "),t.qZA(),t._uU(43," Strada Zizinului Nr. 123G "),t.qZA()(),t.TgZ(44,"div",6)(45,"a",11)(46,"span",9),t._uU(47," call "),t.qZA(),t._uU(48," (0737) 167 631 "),t.qZA()(),t.TgZ(49,"div",6)(50,"a",12)(51,"span",9),t._uU(52," call "),t.qZA(),t._uU(53," (0754) 369 261 "),t.qZA()(),t.TgZ(54,"div",6)(55,"a",13)(56,"span",9),t._uU(57," email "),t.qZA(),t._uU(58," office@azet-resapare.ro "),t.qZA()()()()(),t.TgZ(59,"div",14)(60,"div",15),t._uU(61," Copyright \xa9 Azet D.T. 2014 | Toate drepturile rezervate. "),t.qZA()()),2&a&&(t.xp6(40),t.Q6J("href",g.azetDtLocation,t.LSH))},directives:[A,O.lW,O.zs],styles:[".footer-container[_ngcontent-%COMP%]{background:#0062b0;color:#fff}.footer-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:700;line-height:1.5!important;margin:0}.sub-footer-container[_ngcontent-%COMP%]{background:linear-gradient(#e0e0e0,#f1f1f1);font-weight:bolder}"]});class f{constructor(a){this.dialog=a,this.azetDtLocation=x.N}ngOnInit(){}openScheduleInService(){this.dialog.open(L.i,{width:"400px",disableClose:!0})}openSchedule(){this.dialog.open(R.E)}}f.\u0275fac=function(a){return new(a||f)(t.Y36(I.uw))},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-layout-shop"]],decls:29,vars:5,consts:[[3,"openSideNavDrawer"],[1,"azet-dt-sidenav-container"],["fixedTopGap","100",3,"mode","fixedInViewport"],["snavleft",""],["mat-list-item","","href","tel:+40737167631",1,"mt-1"],[1,"material-icons","text-success"],["mat-list-item","",1,"mt-1",3,"click"],[1,"material-icons","text-warning"],["mat-list-item","","target","_blank",1,"mt-1",3,"href"],[1,"material-icons","text-primary"],[1,"material-icons","text-danger"],[1,"container-fluid"]],template:function(a,g){if(1&a){const U=t.EpF();t.TgZ(0,"app-header",0),t.NdJ("openSideNavDrawer",function(){return t.CHM(U),t.MAs(3).toggle()}),t.qZA(),t.TgZ(1,"mat-sidenav-container",1)(2,"mat-sidenav",2,3)(4,"mat-nav-list")(5,"a",4)(6,"span",5),t._uU(7,"phone"),t.qZA(),t.TgZ(8,"span"),t._uU(9,"(0737) 167 631"),t.qZA()(),t.TgZ(10,"a",6),t.NdJ("click",function(){return g.openScheduleInService()}),t.TgZ(11,"span",7),t._uU(12,"tire_repair"),t.qZA(),t.TgZ(13,"span"),t._uU(14,"PROGRAMEAZ\u0102 \xceN SERVICE"),t.qZA()(),t.TgZ(15,"a",8)(16,"span",9),t._uU(17,"place"),t.qZA(),t.TgZ(18,"span"),t._uU(19,"LOCA\u021aIE"),t.qZA()(),t.TgZ(20,"a",6),t.NdJ("click",function(){return g.openSchedule()}),t.TgZ(21,"span",10),t._uU(22,"schedule"),t.qZA(),t.TgZ(23,"span"),t._uU(24,"PROGRAM"),t.qZA()()()(),t.TgZ(25,"mat-sidenav-content")(26,"main",11),t._UZ(27,"router-outlet")(28,"app-footer"),t.qZA()()()}2&a&&(t.xp6(1),t.Udp("margin-top",0,"px"),t.xp6(1),t.Q6J("mode","over")("fixedInViewport",!0),t.xp6(13),t.Q6J("href",g.azetDtLocation,t.LSH))},directives:[u,r.TM,r.JX,d.Hk,d.Tg,r.Rh,e.lC,m],styles:[""],changeDetection:0});const q=[{path:"home",component:f,loadChildren:()=>o.e("src_app_shop-home_shop-home_module_ts").then(o.bind(o,5430)).then(c=>c.ShopHomeModule)},{path:"products",component:f,loadChildren:()=>Promise.all([o.e("common"),o.e("src_app_shop-products_shop-products_module_ts")]).then(o.bind(o,8525)).then(c=>c.ShopProductsModule)},{path:"contact",component:f,loadChildren:()=>Promise.all([o.e("common"),o.e("src_app_shop-contact_shop-contact_module_ts")]).then(o.bind(o,4784)).then(c=>c.ShopContactModule)},{path:"cart",component:f,loadChildren:()=>Promise.all([o.e("common"),o.e("src_app_shop-cart_shop-cart_module_ts")]).then(o.bind(o,979)).then(c=>c.ShopCartModule)},{path:"authentication",component:f,loadChildren:()=>o.e("src_app_shop-authentication_shop-authentication_module_ts").then(o.bind(o,8771)).then(c=>c.ShopAuthenticationModule)},{path:"**",pathMatch:"full",redirectTo:"/home"}];class y{}y.\u0275fac=function(a){return new(a||y)},y.\u0275mod=t.oAB({type:y}),y.\u0275inj=t.cJS({providers:[Z],imports:[[e.Bz.forRoot(q,{preloadingStrategy:Z,relativeLinkResolution:"legacy",scrollPositionRestoration:"enabled",anchorScrolling:"enabled"})],e.Bz]});class T{ngOnInit(){}}T.\u0275fac=function(a){return new(a||T)},T.\u0275cmp=t.Xpm({type:T,selectors:[["app-root"]],decls:1,vars:0,template:function(a,g){1&a&&t._UZ(0,"router-outlet")},directives:[e.lC],styles:[""]});var P=o(6362),b=o(8784);var w=o(9250);class J{constructor(a,g){this.authenticationService=a,this.router=g}canActivate(){return this.authenticationService.isAuthenticated&&this.router.navigate(["/admin/dashboard"]),!0}}J.\u0275fac=function(a){return new(a||J)(t.LFG(w.$),t.LFG(e.F0))},J.\u0275prov=t.Yz7({token:J,factory:J.\u0275fac});var K=o(4617);class B extends class z{constructor(a){if(a)throw new Error(`${a.constructor.name} has already been loaded. Import this module in the AppModule only.`)}}{constructor(a){super(a)}}B.\u0275fac=function(a){return new(a||B)(t.LFG(B,12))},B.\u0275mod=t.oAB({type:B}),B.\u0275inj=t.cJS({providers:[J,_,K.n,{provide:"Window",useFactory:()=>window}],imports:[[P.ez,e.Bz,b.JF],e.Bz,b.JF]});var k=o(8587);class W{}W.\u0275fac=function(a){return new(a||W)},W.\u0275mod=t.oAB({type:W,bootstrap:[T]}),W.\u0275inj=t.cJS({imports:[[l.b2,n.PW,y,k.m,B]]}),i_production&&(0,t.G48)(),l.q6().bootstrapModule(W,{providers:[{provide:t.soG,useValue:"ro_RO"}]}).catch(c=>console.error(c))}},v=>{v.O(0,["vendor"],()=>{return l=1091,v(v.s=l);var l});v.O()}]);
//# sourceMappingURL=main.js.map