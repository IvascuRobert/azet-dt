"use strict";(self.webpackChunkazet_dt=self.webpackChunkazet_dt||[]).push([[188],{188:(M,c,i)=>{i.r(c),i.d(c,{ShopAuthenticationModule:()=>m});var g=i(6895),r=i(4006),v=i(3317),h=i(9299),U=i(9841),Z=i(4313),f=i(3836),t=i(4650),b=i(7481),A=i(4859),_=i(3546),w=i(4850),T=i(3683),q=i(3162),F=i(6338),u=i(9549),p=i(3848),I=i(4144),C=i(7985);function x(n,o){1&n&&(t.TgZ(0,"span",25),t._uU(1," login "),t.qZA(),t._uU(2," AUTENTIFICARE "))}function S(n,o){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"formControlErrorInterpretation"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",t.lcZ(2,1,e.emailLF.errors)," ")}}function R(n,o){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"formControlErrorInterpretation"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",t.lcZ(2,1,e.passwordLF.errors)," ")}}function P(n,o){1&n&&(t.TgZ(0,"span",25),t._uU(1," how_to_reg "),t.qZA(),t._uU(2," \xceNREGISTRARE "))}function N(n,o){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"formControlErrorInterpretation"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",t.lcZ(2,1,e.firstNameRF.errors)," ")}}function y(n,o){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"formControlErrorInterpretation"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",t.lcZ(2,1,e.lastNameRF.errors)," ")}}function E(n,o){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"formControlErrorInterpretation"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",t.lcZ(2,1,e.emailRF.errors)," ")}}function J(n,o){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"formControlErrorInterpretation"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",t.lcZ(2,1,e.passwordRF.errors)," ")}}function L(n,o){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"formControlErrorInterpretation"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",t.lcZ(2,1,e.confirmPasswordRF.errors)," ")}}function j(n,o){1&n&&(t.TgZ(0,"span",25),t._uU(1," restart_alt "),t.qZA(),t._uU(2," RECUPREAZ\u0102 PAROLA "))}function k(n,o){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"formControlErrorInterpretation"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",t.lcZ(2,1,e.emailFPF.errors)," ")}}class l{get emailLF(){return this.loginForm.get("email")}get passwordLF(){return this.loginForm.get("password")}get firstNameRF(){return this.registerForm.get("firstName")}get lastNameRF(){return this.registerForm.get("lastName")}get emailRF(){return this.registerForm.get("email")}get passwordRF(){return this.registerForm.get("password")}get confirmPasswordRF(){return this.registerForm.get("confirmPassword")}get emailFPF(){return this.forgetPasswordForm.get("email")}constructor(o){this.authenticationService=o,this.loginForm=new r.nJ({email:new r.p4("",[r.kI.required,r.kI.email]),password:new r.p4("",[r.kI.required,r.kI.minLength(8)])}),this.registerForm=new r.nJ({firstName:new r.p4("",[r.kI.required,r.kI.maxLength(20),r.kI.minLength(3),(0,f.e)(Z.W.onlyCharacters)]),lastName:new r.p4("",[r.kI.required,r.kI.maxLength(20),r.kI.minLength(3),(0,f.e)(Z.W.onlyCharacters)]),email:new r.p4("",[r.kI.required,r.kI.email]),password:new r.p4("",[r.kI.required,r.kI.minLength(8)]),confirmPassword:new r.p4("",[r.kI.required,r.kI.minLength(8)])}),this.forgetPasswordForm=new r.nJ({email:new r.p4("",[r.kI.required,r.kI.email])}),this.hidePasswordRF=!0,this.hidePasswordLF=!0,this.tabIndex=0}ngOnInit(){(0,U.a)([this.passwordRF.valueChanges,this.confirmPasswordRF.valueChanges]).subscribe(([o,e])=>{o&&o.length>=8&&e&&e.length>=8&&o!=e?(this.passwordRF.setErrors({passwordMismatch:!0}),this.confirmPasswordRF.setErrors({passwordMismatch:!0})):o&&o.length>=8&&e&&e.length>=8&&o==e&&(this.passwordRF.setErrors(null),this.confirmPasswordRF.setErrors(null))})}onSubmitLoginForm(){const o=this.loginForm.getRawValue();this.authenticationService.login(o),console.log(o,"loginFormValues")}onSubmitRegisterForm(){const o=this.registerForm.getRawValue();this.authenticationService.login(o),console.log(o,"registerFormValues")}onSubmitForgetPasswordForm(){const o=this.forgetPasswordForm.getRawValue();this.authenticationService.forgotPassword(o),console.log(o,"forgetPasswordFormValues")}changeTab(o){this.loginForm.reset(),this.registerForm.reset(),this.forgetPasswordForm.reset(),this.tabIndex=o}}l.\u0275fac=function(o){return new(o||l)(t.Y36(b.$))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-shop-authentication"]],decls:186,vars:31,consts:[[1,"row","login-container"],[1,"col-8"],["mat-stretch-tabs","","mat-align-tabs","start",1,"mat-elevation-z4",3,"selectedIndex","selectedIndexChange"],["mat-tab-label",""],["mode","indeterminate"],[1,"login-card",2,"font-size","1.2rem"],[1,"row"],[1,"col-12","text-center","mb-4"],[1,"primary"],[1,"col-6","text-center"],["mat-stroked-button","","type","button","color","primary",1,"py-2"],[1,"fab","fa-google"],[1,"fab","fa-facebook"],[1,"row","my-4"],[1,"col-12"],[1,"row","justify-content-center"],[1,"col-4","align-self-center"],[1,"col-2","text-center",2,"font-size","2rem"],[1,"row","justify-content-center",3,"formGroup","ngSubmit"],["appearance","outline",1,"col-12","w-100","my-1"],["matInput","","placeholder","pat@example.com","formControlName","email","autocomplete","username","required",""],[4,"ngIf"],["matInput","","formControlName","password","autocomplete","current-password","required","",3,"type"],["plf",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],[1,"material-icons"],["align","end"],["mat-raised-button","","type","submit","color","primary",1,"col-6"],[1,"col-12","text-center","my-2"],["mat-button","","type","button",1,"primary",3,"click"],[1,"col-12","text-center"],[1,"mx-1"],["mat-button","","type","button","color","primary",3,"click"],["appearance","outline",1,"col-6","w-100","my-1"],["matInput","","maxlength","20","formControlName","firstName","required",""],["fn",""],["matInput","","maxlength","20","formControlName","lastName","required",""],["ln",""],["matInput","","formControlName","password","autocomplete","new-password","required","",3,"type"],["p",""],["matInput","","formControlName","confirmPassword","autocomplete","new-password","required","",3,"type"],["cp",""],["mat-raised-button","","type","submit","color","primary",1,"col-6",3,"disabled"],[1,"col-6","text-center","mb-4"],["appearance","outline",1,"col-12","w-100","my-4"],[1,"col-4"],["color","primary",1,"mat-elevation-z6"],[1,"col-12","mt-3"],["mat-list-icon","",1,"material-icons"],["mat-line",""]],template:function(o,e){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"mat-tab-group",2),t.NdJ("selectedIndexChange",function(d){return e.changeTab(d)}),t.TgZ(3,"mat-tab"),t.YNc(4,x,3,0,"ng-template",3),t._UZ(5,"mat-progress-bar",4),t.TgZ(6,"mat-card",5)(7,"mat-card-content")(8,"div",6)(9,"div",7),t._uU(10," Bine a\u021bi venit \xeen "),t.TgZ(11,"span",8),t._uU(12," AZET D.T. "),t.qZA()(),t.TgZ(13,"div",9)(14,"button",10),t._UZ(15,"i",11),t._uU(16," Autentific\u0103-te cu GOOGLE "),t.qZA()(),t.TgZ(17,"div",9)(18,"button",10),t._UZ(19,"i",12),t._uU(20," Autentific\u0103-te cu FACEBOOK "),t.qZA()()(),t.TgZ(21,"div",13)(22,"div",14)(23,"div",15)(24,"div",16),t._UZ(25,"mat-divider"),t.qZA(),t.TgZ(26,"div",17),t._uU(27," SAU "),t.qZA(),t.TgZ(28,"div",16),t._UZ(29,"mat-divider"),t.qZA()()()(),t.TgZ(30,"form",18),t.NdJ("ngSubmit",function(){return e.onSubmitLoginForm()}),t.TgZ(31,"mat-form-field",19)(32,"mat-label"),t._uU(33,"Email"),t.qZA(),t._UZ(34,"input",20),t.YNc(35,S,3,3,"mat-error",21),t.qZA(),t.TgZ(36,"mat-form-field",19)(37,"mat-label"),t._uU(38,"Parola"),t.qZA(),t._UZ(39,"input",22,23),t.TgZ(41,"button",24),t.NdJ("click",function(){return e.hidePasswordLF=!e.hidePasswordLF}),t.TgZ(42,"span",25),t._uU(43),t.qZA()(),t.TgZ(44,"mat-hint",26),t._uU(45),t.qZA(),t.YNc(46,R,3,3,"mat-error",21),t.qZA(),t.TgZ(47,"button",27),t._uU(48,"Autentific\u0103-te"),t.qZA()(),t.TgZ(49,"div",6)(50,"div",28)(51,"button",29),t.NdJ("click",function(){return e.changeTab(2)}),t._uU(52,"\u021ai-ai uitat parola?"),t.qZA()(),t.TgZ(53,"div",30)(54,"span",31),t._uU(55,"Dac\u0103 e\u0219ti un utilizator nou atunci"),t.qZA(),t.TgZ(56,"button",32),t.NdJ("click",function(){return e.changeTab(1)}),t._uU(57,"\xcenregistreaz\u0103-te"),t.qZA()()()()()(),t.TgZ(58,"mat-tab"),t.YNc(59,P,3,0,"ng-template",3),t._UZ(60,"mat-progress-bar",4),t.TgZ(61,"mat-card",5)(62,"mat-card-content")(63,"div",6)(64,"div",7),t._uU(65," Al\u0103tur\u0103-te comunit\u0103\u021bii "),t.TgZ(66,"span",8),t._uU(67," AZET D.T. "),t.qZA()()(),t.TgZ(68,"form",18),t.NdJ("ngSubmit",function(){return e.onSubmitRegisterForm()}),t.TgZ(69,"mat-form-field",33)(70,"mat-label"),t._uU(71,"Nume"),t.qZA(),t._UZ(72,"input",34,35),t.TgZ(74,"mat-hint",26),t._uU(75),t.qZA(),t.YNc(76,N,3,3,"mat-error",21),t.qZA(),t.TgZ(77,"mat-form-field",33)(78,"mat-label"),t._uU(79,"Prenume"),t.qZA(),t._UZ(80,"input",36,37),t.TgZ(82,"mat-hint",26),t._uU(83),t.qZA(),t.YNc(84,y,3,3,"mat-error",21),t.qZA(),t.TgZ(85,"mat-form-field",19)(86,"mat-label"),t._uU(87,"Email"),t.qZA(),t._UZ(88,"input",20),t.YNc(89,E,3,3,"mat-error",21),t.qZA(),t.TgZ(90,"mat-form-field",19)(91,"mat-label"),t._uU(92,"Parola"),t.qZA(),t._UZ(93,"input",38,39),t.TgZ(95,"button",24),t.NdJ("click",function(){return e.hidePasswordRF=!e.hidePasswordRF}),t.TgZ(96,"span",25),t._uU(97),t.qZA()(),t.TgZ(98,"mat-hint",26),t._uU(99),t.qZA(),t.YNc(100,J,3,3,"mat-error",21),t.qZA(),t.TgZ(101,"mat-form-field",19)(102,"mat-label"),t._uU(103,"Confirm\u0103 Parola"),t.qZA(),t._UZ(104,"input",40,41),t.TgZ(106,"button",24),t.NdJ("click",function(){return e.hidePasswordRF=!e.hidePasswordRF}),t.TgZ(107,"span",25),t._uU(108),t.qZA()(),t.TgZ(109,"mat-hint",26),t._uU(110),t.qZA(),t.YNc(111,L,3,3,"mat-error",21),t.qZA(),t.TgZ(112,"button",42),t._uU(113,"\xcenregistreaz\u0103-te"),t.qZA()()()()(),t.TgZ(114,"mat-tab"),t.YNc(115,j,3,0,"ng-template",3),t._UZ(116,"mat-progress-bar",4),t.TgZ(117,"mat-card",5)(118,"mat-card-content")(119,"div",15)(120,"div",43),t._uU(121," Introduce\u021bi adresa de email folosit\u0103 la \xeenregistrare pentru a v\u0103 putea reseta parola de la contul "),t.TgZ(122,"span",8),t._uU(123," AZET D.T. "),t.qZA()()(),t.TgZ(124,"form",18),t.NdJ("ngSubmit",function(){return e.onSubmitForgetPasswordForm()}),t.TgZ(125,"mat-form-field",44)(126,"mat-label"),t._uU(127,"Email"),t.qZA(),t._UZ(128,"input",20),t.YNc(129,k,3,3,"mat-error",21),t.qZA(),t.TgZ(130,"button",42),t._uU(131,"RECUPREAZ\u0102"),t.qZA()()()()()()(),t.TgZ(132,"div",45)(133,"div",6)(134,"div",14)(135,"mat-toolbar",46)(136,"mat-toolbar-row")(137,"span"),t._uU(138,"Beneficii"),t.qZA()()()(),t.TgZ(139,"div",47),t._uU(140," Dac\u0103 v\u0103 \xeenregistra\u021bi pe platforma noastr\u0103 "),t.TgZ(141,"span",8),t._uU(142," AZET D.T. "),t.qZA(),t._uU(143," ave\u021bi urm\u0103toarele beneficii: "),t.qZA(),t.TgZ(144,"div",14)(145,"mat-list")(146,"mat-list-item")(147,"span",48),t._uU(148," restart_alt "),t.qZA(),t.TgZ(149,"div",49),t._uU(150,"Cump\u0103r\u0103turi rapide"),t.qZA()(),t.TgZ(151,"mat-list-item")(152,"span",48),t._uU(153," restart_alt "),t.qZA(),t.TgZ(154,"div",49),t._uU(155,"Urm\u0103rire status comenzi"),t.qZA()(),t.TgZ(156,"mat-list-item")(157,"span",48),t._uU(158," restart_alt "),t.qZA(),t.TgZ(159,"div",49),t._uU(160,"Eviden\u021ba comenzilor"),t.qZA()(),t.TgZ(161,"mat-list-item")(162,"span",48),t._uU(163," restart_alt "),t.qZA(),t.TgZ(164,"div",49),t._uU(165,"Factura online"),t.qZA()(),t.TgZ(166,"mat-list-item")(167,"span",48),t._uU(168," restart_alt "),t.qZA(),t.TgZ(169,"div",49),t._uU(170,"Garan\u021bie online"),t.qZA()(),t.TgZ(171,"mat-list-item")(172,"span",48),t._uU(173," restart_alt "),t.qZA(),t.TgZ(174,"div",49),t._uU(175,"Elimin\u0103 birocra\u021bia"),t.qZA()(),t.TgZ(176,"mat-list-item")(177,"span",48),t._uU(178," restart_alt "),t.qZA(),t.TgZ(179,"div",49),t._uU(180,"Vezi cele mai bune oferte"),t.qZA()(),t.TgZ(181,"mat-list-item")(182,"span",48),t._uU(183," restart_alt "),t.qZA(),t.TgZ(184,"div",49),t._uU(185,"Siguran\u021b\u0103"),t.qZA()()()()()()()),2&o){const a=t.MAs(40),d=t.MAs(73),B=t.MAs(81),z=t.MAs(94),Y=t.MAs(105);t.xp6(2),t.Q6J("selectedIndex",e.tabIndex),t.xp6(28),t.Q6J("formGroup",e.loginForm),t.xp6(5),t.Q6J("ngIf",e.emailLF.invalid),t.xp6(4),t.Q6J("type",e.hidePasswordLF?"password":"text"),t.xp6(2),t.uIk("aria-label","Hide password")("aria-pressed",e.hidePasswordLF),t.xp6(2),t.hij(" ",e.hidePasswordLF?"visibility_off":"visibility"," "),t.xp6(2),t.hij("",a.value.length," / 8"),t.xp6(1),t.Q6J("ngIf",e.passwordLF.invalid),t.xp6(22),t.Q6J("formGroup",e.registerForm),t.xp6(7),t.hij("",d.value.length," / 20"),t.xp6(1),t.Q6J("ngIf",e.firstNameRF.invalid),t.xp6(7),t.hij("",B.value.length," / 20"),t.xp6(1),t.Q6J("ngIf",e.lastNameRF.invalid),t.xp6(5),t.Q6J("ngIf",e.emailRF.invalid),t.xp6(4),t.Q6J("type",e.hidePasswordRF?"password":"text"),t.xp6(2),t.uIk("aria-label","Hide password")("aria-pressed",e.hidePasswordRF),t.xp6(2),t.hij(" ",e.hidePasswordRF?"visibility_off":"visibility"," "),t.xp6(2),t.hij("",z.value.length," / 8"),t.xp6(1),t.Q6J("ngIf",e.passwordRF.invalid),t.xp6(4),t.Q6J("type",e.hidePasswordRF?"password":"text"),t.xp6(2),t.uIk("aria-label","Hide password")("aria-pressed",e.hidePasswordRF),t.xp6(2),t.hij(" ",e.hidePasswordRF?"visibility_off":"visibility"," "),t.xp6(2),t.hij("",Y.value.length," / 8"),t.xp6(1),t.Q6J("ngIf",e.confirmPasswordRF.invalid),t.xp6(1),t.Q6J("disabled",e.registerForm.invalid),t.xp6(12),t.Q6J("formGroup",e.forgetPasswordForm),t.xp6(5),t.Q6J("ngIf",e.emailFPF.invalid),t.xp6(1),t.Q6J("disabled",e.forgetPasswordForm.invalid)}},dependencies:[g.O5,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.nD,r.sg,r.u,A.lW,A.RK,_.a8,_.dn,w.d,T.Ye,T.rD,q.pW,F.i$,F.Tg,u.KE,u.hX,u.bx,u.TO,u.R9,p.uD,p.uX,p.SP,I.Nt,C.s]});const Q=[{path:"",component:l}];class s{}s.\u0275fac=function(o){return new(o||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[h.Bz.forChild(Q),h.Bz]});class m{}m.\u0275fac=function(o){return new(o||m)},m.\u0275mod=t.oAB({type:m}),m.\u0275inj=t.cJS({imports:[g.ez,s,r.UX,v.m]})}}]);