"use strict";(self.webpackChunkazet_dt=self.webpackChunkazet_dt||[]).push([[326],{4326:(j,c,e)=>{e.r(c),e.d(c,{ShopContactModule:()=>y});var n=e(6223),g=e(3071),l=e(1896),u=e(6191),p=e(6225),t=e(9212),Z=e(6814),C=e(1075),i=e(7452),d=e(6092),s=e(6005),T=e(9548),v=e(3790);function A(o,h){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"formControlErrorInterpretation"),t.qZA()),2&o){const a=t.oxw();t.xp6(1),t.hij(" ",t.lcZ(2,1,a.name.errors)," ")}}function x(o,h){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"formControlErrorInterpretation"),t.qZA()),2&o){const a=t.oxw();t.xp6(1),t.hij(" ",t.lcZ(2,1,a.phone.errors)," ")}}function U(o,h){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"formControlErrorInterpretation"),t.qZA()),2&o){const a=t.oxw();t.xp6(1),t.hij(" ",t.lcZ(2,1,a.message.errors)," ")}}const S=[{path:"",component:(()=>{class o{get name(){return this.contactForm.get("name")}get phone(){return this.contactForm.get("phone")}get message(){return this.contactForm.get("message")}constructor(){this.contactForm=new n.nJ({name:new n.p4("",[n.kI.required,n.kI.maxLength(20),n.kI.minLength(3),(0,u.e)(p.W.onlyCharacters)]),phone:new n.p4("",[n.kI.required,(0,u.e)(p.W.phoneNumber)]),message:new n.p4("",n.kI.required)})}ngOnInit(){}onSubmit(){const a=this.contactForm.getRawValue();console.log(a,"formValue")}static#t=this.\u0275fac=function(r){return new(r||o)};static#o=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-shop-contact"]],decls:50,vars:7,consts:[[1,"row","mt-5"],[1,"col-6"],[1,"row","justify-content-center",2,"font-size","1rem"],[1,"col-12","mb-4"],["color","primary",1,"mat-elevation-z6"],[1,"mat-elevation-z6",2,"font-size","1.2rem"],[1,"row","justify-content-center",3,"formGroup","ngSubmit"],["appearance","outline",1,"col-12","w-100","my-3"],["id","name","name","name","type","text","matInput","","maxlength","20","formControlName","name","placeholder","Nume","autocomplete","username","required",""],["n",""],["align","start"],["align","end"],[4,"ngIf"],["matSuffix","",1,"material-icons"],["id","phone","name","phone","type","tel","aria-label","Telefon","matInput","","formControlName","phone","placeholder","555-555-1234","required",""],["matInput","","formControlName","message","maxlength","100","placeholder","Ex. Doresc s\u0103 comand...","required",""],["msg",""],["mat-raised-button","","type","submit","color","primary",1,"col-6","text-center","my-5",3,"disabled"]],template:function(r,m){if(1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"mat-toolbar",4)(5,"mat-toolbar-row")(6,"span"),t._uU(7,"Informa\u021bii utile despre SC AZET D.T. SRL"),t.qZA()()()()()(),t.TgZ(8,"div",1)(9,"mat-card",5)(10,"mat-card-header")(11,"mat-card-title"),t._uU(12,"Contact"),t.qZA(),t.TgZ(13,"mat-card-subtitle"),t._uU(14,"Completeaz\u0103 3 pa\u0219i simpli \u0219i te contact\u0103m noi."),t.qZA()(),t.TgZ(15,"mat-card-content")(16,"form",6),t.NdJ("ngSubmit",function(){return m.onSubmit()}),t.TgZ(17,"mat-form-field",7)(18,"mat-label"),t._uU(19,"Nume"),t.qZA(),t._UZ(20,"input",8,9),t.TgZ(22,"mat-hint",10),t._uU(23,"Ex. Popescu Adrian"),t.qZA(),t.TgZ(24,"mat-hint",11),t._uU(25),t.qZA(),t.YNc(26,A,3,3,"mat-error",12),t.TgZ(27,"span",13),t._uU(28," person "),t.qZA()(),t.TgZ(29,"mat-form-field",7)(30,"mat-label"),t._uU(31,"Telefon"),t.qZA(),t._UZ(32,"input",14),t.TgZ(33,"mat-hint",10),t._uU(34,"Introduce\u021bi num\u0103rul de telefon"),t.qZA(),t.YNc(35,x,3,3,"mat-error",12),t.TgZ(36,"span",13),t._uU(37," phone "),t.qZA()(),t.TgZ(38,"mat-form-field",7)(39,"mat-label"),t._uU(40,"Mesaj"),t.qZA(),t._UZ(41,"input",15,16),t.TgZ(43,"mat-hint",11),t._uU(44),t.qZA(),t.YNc(45,U,3,3,"mat-error",12),t.TgZ(46,"span",13),t._uU(47," textsms "),t.qZA()(),t.TgZ(48,"button",17),t._uU(49,"Trimite"),t.qZA()()()()()()),2&r){const f=t.MAs(21),b=t.MAs(42);t.xp6(16),t.Q6J("formGroup",m.contactForm),t.xp6(9),t.hij("",f.value.length," / 20"),t.xp6(1),t.Q6J("ngIf",m.name.invalid),t.xp6(9),t.Q6J("ngIf",m.phone.invalid),t.xp6(9),t.hij("",b.value.length," / 100"),t.xp6(1),t.Q6J("ngIf",m.message.invalid),t.xp6(3),t.Q6J("disabled",m.contactForm.invalid)}},dependencies:[Z.O5,C.lW,i.a8,i.dn,i.dk,i.$j,i.n5,d.Ye,d.rD,s.KE,s.hX,s.bx,s.TO,s.R9,T.Nt,n._Y,n.Fj,n.JJ,n.JL,n.Q7,n.nD,n.sg,n.u,v.s]})}return o})(),data:{breadcrumb:"Contact"}}];let I=(()=>{class o{static#t=this.\u0275fac=function(r){return new(r||o)};static#o=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(S),l.Bz]})}return o})(),y=(()=>{class o{static#t=this.\u0275fac=function(r){return new(r||o)};static#o=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({imports:[I,g.m,n.UX]})}return o})()}}]);