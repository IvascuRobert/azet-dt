"use strict";(self.webpackChunkazet_dt=self.webpackChunkazet_dt||[]).push([[588],{8588:(H,A,a)=>{a.r(A),a.d(A,{ShopProductsModule:()=>l});var u=a(6895),n=a(4006),U=a(3317),P=a(9299),t=a(4650),Z=a(4859),S=a(9549),F=a(4385),C=a(3238),v=a(7392),N=a(8739),_=a(7314),d=a(7084),s=a(5412),b=a(6682),O=a(266),T=a(6338),q=a(5446);function y(i,o){if(1&i&&(t.TgZ(0,"div",21),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.hij(" - ",e.product.discount,"% extra ")}}function x(i,o){if(1&i&&(t.TgZ(0,"div",10)(1,"span",22),t._uU(2),t.ALo(3,"currency"),t.qZA(),t.TgZ(4,"span",23),t._uU(5,"lei"),t.qZA(),t.TgZ(6,"span",24),t._uU(7),t.qZA()()),2&i){const e=t.oxw();t.xp6(2),t.Oqu(t.xi3(3,2,e.product.price,!1)),t.xp6(5),t.hij(" -",e.product.discount,"%")}}function z(i,o){if(1&i&&(t.TgZ(0,"span",25),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.hij(" ",e," ")}}function I(i,o){if(1&i&&(t.TgZ(0,"mat-list-item",26)(1,"span",11),t._uU(2,"Description"),t.qZA(),t._uU(3),t.qZA()),2&i){const e=t.oxw();t.xp6(3),t.hij(" ",e.product.description," ")}}class m{constructor(o,e,r){this.dialogRef=o,this.product=e,this.cartService=r}onNoClick(){this.dialogRef.close()}addToCart(o){this.cartService.addToCart(o)}}m.\u0275fac=function(o){return new(o||m)(t.Y36(s.so),t.Y36(s.WI),t.Y36(b.N))},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-shop-products-details-dialog"]],decls:66,vars:26,consts:[["mat-dialog-title","",1,"align-items-center"],[1,"mat-typography"],[1,"row","justify-content-center"],[1,"col-xs-12","col-sm-6","align-self-center"],[1,"rounded","img-fluid",3,"src","alt"],["class","col-12 fw-700 fs-15 fs-12 position-absolute top-70 text-color-white bg-color-red w-85 ps-2",4,"ngIf"],[1,"col-xs-12","col-sm-6"],[1,"row","text-center","border","border-primary","py-2"],["class","col-12 fw-500 fs-13",4,"ngIf"],[1,"col-12","fw-700","fs-2","text-color-honolulu-blue","my-2"],[1,"col-12","fw-500","fs-13"],["matListItemTitle",""],["matListItemLine",""],["matListItemLine","",1,"d-flex","align-items-center"],[1,"mt-2",3,"matTooltip","color"],[1,"mt-2","ms-2"],["class","border border-primary rounded px-2 me-2",4,"ngFor","ngForOf"],["lines","3",4,"ngIf"],["mat-dialog-actions","",1,"justify-content-between"],["mat-flat-button","",3,"click"],["color","primary","mat-fab","","cdkFocusInitial","",3,"click"],[1,"col-12","fw-700","fs-15","fs-12","position-absolute","top-70","text-color-white","bg-color-red","w-85","ps-2"],[1,"text-decoration-line-through"],[1,"ms-1"],[1,"text-color-red","fw-b"],[1,"border","border-primary","rounded","px-2","me-2"],["lines","3"]],template:function(o,e){1&o&&(t.TgZ(0,"h1",0),t._uU(1," Descriere produs\n"),t.qZA(),t.TgZ(2,"mat-dialog-content",1)(3,"div",2)(4,"div",3),t._UZ(5,"img",4),t.YNc(6,y,2,1,"div",5),t.qZA(),t.TgZ(7,"div",6)(8,"div",7),t.YNc(9,x,8,5,"div",8),t.TgZ(10,"div",9),t._uU(11),t.ALo(12,"currency"),t.qZA(),t.TgZ(13,"div",10),t._uU(14),t.ALo(15,"currency"),t.qZA()(),t.TgZ(16,"mat-list")(17,"mat-list-item")(18,"span",11),t._uU(19,"Nume"),t.qZA(),t.TgZ(20,"span",12),t._uU(21),t.qZA()(),t.TgZ(22,"mat-list-item")(23,"span",11),t._uU(24,"Brand"),t.qZA(),t.TgZ(25,"span",12),t._uU(26),t.qZA()(),t.TgZ(27,"mat-list-item")(28,"span",11),t._uU(29,"Vreme"),t.qZA(),t.TgZ(30,"span",13)(31,"mat-icon",14),t._uU(32),t.qZA(),t.TgZ(33,"div",15),t._uU(34),t.qZA()()(),t.TgZ(35,"mat-list-item")(36,"span",11),t._uU(37,"Width"),t.qZA(),t.TgZ(38,"span",12),t._uU(39),t.qZA()(),t.TgZ(40,"mat-list-item")(41,"span",11),t._uU(42,"Height"),t.qZA(),t.TgZ(43,"span",12),t._uU(44),t.qZA()(),t.TgZ(45,"mat-list-item")(46,"span",11),t._uU(47,"Diameter"),t.qZA(),t.TgZ(48,"span",12),t._uU(49),t.qZA()(),t.TgZ(50,"mat-list-item")(51,"span",11),t._uU(52,"Profile"),t.qZA(),t.TgZ(53,"span",12),t._uU(54),t.qZA()(),t.TgZ(55,"mat-list-item")(56,"span",11),t._uU(57,"Tip vehicule"),t.qZA(),t.YNc(58,z,2,1,"span",16),t.qZA(),t.YNc(59,I,4,1,"mat-list-item",17),t.qZA()()()(),t.TgZ(60,"div",18)(61,"button",19),t.NdJ("click",function(){return e.onNoClick()}),t._uU(62,"Mai tarziu"),t.qZA(),t.TgZ(63,"button",20),t.NdJ("click",function(){return e.addToCart(e.product)}),t.TgZ(64,"mat-icon"),t._uU(65,"shopping_cart"),t.qZA()()()),2&o&&(t.xp6(5),t.Q6J("src",e.product.pictureSrc,t.LSH)("alt",e.product.name),t.xp6(1),t.Q6J("ngIf",e.product.discount),t.xp6(3),t.Q6J("ngIf",e.product.discount),t.xp6(2),t.hij(" ",t.Dn7(12,18,e.product.price,!1,e.product.discount),"lei "),t.xp6(3),t.hij(" ",t.Dn7(15,22,e.product.price,!0,e.product.discount)," lei F\u0103r\u0103 TVA "),t.xp6(7),t.Oqu(e.product.name),t.xp6(5),t.Oqu(e.product.brand),t.xp6(5),t.Q6J("matTooltip",e.product.weather)("color","wb_sunny"===e.product.weather?"accent":"primary"),t.xp6(1),t.hij(" ",e.product.weather," "),t.xp6(2),t.hij(" ",e.product.weather," "),t.xp6(5),t.Oqu(e.product.width),t.xp6(5),t.Oqu(e.product.height),t.xp6(5),t.Oqu(e.product.diameter),t.xp6(5),t.Oqu(e.product.profile),t.xp6(4),t.Q6J("ngForOf",e.product.vehicleType),t.xp6(1),t.Q6J("ngIf",e.product.description))},dependencies:[u.sg,u.O5,Z.lW,Z.cs,O.gM,T.i$,T.Tg,T.WW,T.sL,s.uh,s.xY,s.H8,v.Hw,q.H],changeDetection:0});var p=a(3546);function J(i,o){if(1&i&&(t.TgZ(0,"div",14),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.hij(" - ",e.product.discount,"% extra ")}}function L(i,o){if(1&i&&(t.TgZ(0,"div",11)(1,"span",15),t._uU(2),t.ALo(3,"currency"),t.qZA(),t.TgZ(4,"span",16),t._uU(5,"lei"),t.qZA(),t.TgZ(6,"span",17),t._uU(7),t.qZA()()),2&i){const e=t.oxw();t.xp6(2),t.Oqu(t.xi3(3,2,e.product.price,!1)),t.xp6(5),t.hij(" -",e.product.discount,"%")}}function D(i,o){1&i&&t._UZ(0,"span",18)}class g{constructor(o,e){this.dialog=o,this.cartService=e}openProductDetails(o){this.dialog.open(m,{data:o})}addToCart(o){this.cartService.addToCart(o)}}function Q(i,o){if(1&i&&(t.TgZ(0,"mat-option",27),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.Q6J("value",e.value),t.xp6(1),t.Oqu(e.label)}}function j(i,o){if(1&i&&(t.TgZ(0,"mat-option",27),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.Q6J("value",e.value),t.xp6(1),t.Oqu(e.label)}}function R(i,o){if(1&i&&(t.TgZ(0,"mat-option",27),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.Q6J("value",e.value),t.xp6(1),t.Oqu(e.label)}}function Y(i,o){if(1&i&&(t.TgZ(0,"mat-option",27),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.Q6J("value",e.value),t.xp6(1),t.Oqu(e.label)}}function K(i,o){if(1&i&&(t.TgZ(0,"mat-option",27),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.Q6J("value",e.value),t.xp6(1),t.Oqu(e.label)}}function E(i,o){if(1&i&&(t.TgZ(0,"mat-option",27),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.Q6J("value",e.value),t.xp6(1),t.Oqu(e.label)}}function B(i,o){if(1&i&&(t.TgZ(0,"div",28),t._UZ(1,"app-shop-products-item",29),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.Q6J("product",e)}}g.\u0275fac=function(o){return new(o||g)(t.Y36(s.uw),t.Y36(b.N))},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-shop-products-item"]],inputs:{product:"product"},decls:32,vars:20,consts:[[1,"me-1","mb-4"],["mat-card-avatar",""],[3,"matTooltip","color"],["mat-card-image",""],[1,"rounded","img-fluid","cursor-pointer",3,"src","alt","click"],["class","col-12 fw-700 fs-15 fs-12 position-absolute top-15 text-color-white bg-color-red w-85 ps-2",4,"ngIf"],[1,"row"],["class","col-12 fw-500 fs-13",4,"ngIf","ngIfElse"],["noProduct",""],[1,"col-12","fw-700","fs-2","text-color-honolulu-blue"],[1,"align-text-top","fs-65-percentage"],[1,"col-12","fw-500","fs-13"],[1,"justify-content-end"],["color","primary","mat-mini-fab","",3,"click"],[1,"col-12","fw-700","fs-15","fs-12","position-absolute","top-15","text-color-white","bg-color-red","w-85","ps-2"],[1,"text-decoration-line-through"],[1,"align-text-top","fs-65-percentage","ms-1"],[1,"text-color-red","fw-b"],[1,"h-20"]],template:function(o,e){if(1&o&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"div",1)(3,"mat-icon",2),t._uU(4),t.qZA()(),t.TgZ(5,"mat-card-title"),t._uU(6),t.qZA(),t.TgZ(7,"mat-card-subtitle"),t._uU(8),t.qZA()(),t.TgZ(9,"div",3)(10,"img",4),t.NdJ("click",function(){return e.openProductDetails(e.product)}),t.qZA(),t.YNc(11,J,2,1,"div",5),t.qZA(),t.TgZ(12,"mat-card-content")(13,"div",6),t.YNc(14,L,8,5,"div",7),t.YNc(15,D,1,0,"ng-template",null,8,t.W1O),t.TgZ(17,"div",9),t._uU(18),t.ALo(19,"currency"),t.TgZ(20,"span",10),t._uU(21,"lei"),t.qZA()(),t.TgZ(22,"div",11),t._uU(23),t.ALo(24,"currency"),t.TgZ(25,"span",10),t._uU(26,"lei"),t.qZA(),t._uU(27," F\u0103r\u0103 TVA "),t.qZA()()(),t.TgZ(28,"mat-card-actions",12)(29,"button",13),t.NdJ("click",function(){return e.addToCart(e.product)}),t.TgZ(30,"mat-icon"),t._uU(31,"shopping_cart"),t.qZA()()()()),2&o){const r=t.MAs(16);t.xp6(3),t.Q6J("matTooltip",e.product.weather)("color","wb_sunny"===e.product.weather?"accent":"primary"),t.xp6(1),t.hij(" ",e.product.weather," "),t.xp6(2),t.hij(" ",e.product.name," "),t.xp6(2),t.hij(" ",e.product.brand," "),t.xp6(2),t.Q6J("src",e.product.pictureSrc,t.LSH)("alt",e.product.name),t.xp6(1),t.Q6J("ngIf",e.product.discount),t.xp6(3),t.Q6J("ngIf",e.product.discount)("ngIfElse",r),t.xp6(4),t.hij(" ",t.Dn7(19,12,e.product.price,!1,e.product.discount)," "),t.xp6(5),t.hij(" ",t.Dn7(24,16,e.product.price,!0,e.product.discount)," ")}},dependencies:[u.O5,Z.nh,p.a8,p.hq,p.kc,p.dn,p.dk,p.G2,p.$j,p.n5,O.gM,v.Hw,q.H]});const w=function(){return[]};class h{get paginatorFormGroup(){return this.productsForm.get("paginator")}get paginatorLength(){return this.paginatorFormGroup?.value.length}get paginatorPageSize(){return this.paginatorFormGroup?.value.pageSize}get paginatorPageIndex(){return this.paginatorFormGroup?.value.pageIndex}get paginatorPageSizeOptions(){return this.paginatorFormGroup?.value.pageSizeOptions}get paginatorHidePageSize(){return this.paginatorFormGroup?.value.hidePageSize}get paginatorShowPageSizeOptions(){return this.paginatorFormGroup?.value.showPageSizeOptions}get paginatorShowFirstLastButtons(){return this.paginatorFormGroup?.value.showFirstLastButtons}constructor(o){this.fb=o,this.productsForm=this.fb.group({sortBy:["1"],brand:[""],width:[""],height:[""],diameter:[""],profile:[""],minPrice:[500],maxPrice:[1500],paginator:this.fb.group({length:[50],pageSize:[10],pageIndex:[0],pageSizeOptions:[[5,10,25]],hidePageSize:[!1],showPageSizeOptions:[!0],showFirstLastButtons:[!0]})}),this.products=[{id:1,weather:"wb_sunny",name:"ANVELOPA 145/70-6 KENDA K290 SCORPION 4PR TL",brand:"Kenda",vehicleType:["ATV","Forestier","Port"],price:1234,pictureSrc:"./assets/pictures/tires/tire.png",description:"TR 135 este anvelopa cea mai potrivit\u0103 pentru tractoare \xeen aplica\u021bii de prelucrare a solului. Carcasa sa \xeent\u0103rit\u0103 \u0219i compusul special ce asigur\u0103 rezisten\u021b\u0103 la t\u0103iere \u0219i rupere confer\u0103 anvelopelor un ciclu de via\u021b\u0103 extins. Trac\u021biunea, propriet\u0103\u021bile de autocur\u0103\u021bare \u0219i capacitatea de \xeenc\u0103rcare sunt caracteristici cheie care fac ca anvelopa TR 135 s\u0103 fie partenerul ideal chiar \u0219i \xeen cele mai dificile condi\u021bii de sol.",width:"26.5",height:"26.5",diameter:"25",profile:"R20"},{id:2,weather:"ac_unit",name:"ANVELOPA 145/70-6 KENDA K290 SCORPION 4PR TL",brand:"Kenda",vehicleType:["ATV","Forestier","Port"],price:1234,pictureSrc:"./assets/pictures/tires/tire.png",description:"",width:"26.5",height:"26.5",diameter:"25",profile:"R20"},{id:3,weather:"ac_unit",name:"ANVELOPA 145/70-6 KENDA K290 SCORPION 4PR TL",brand:"Kenda",vehicleType:["ATV","Forestier","Port"],price:1234,pictureSrc:"./assets/pictures/tires/tire.png",discount:10,description:"",width:"26.5",height:"26.5",diameter:"25",profile:"R20"},{id:4,weather:"wb_sunny",name:"ANVELOPA 145/70-6 KENDA K290 SCORPION 4PR TL",brand:"Kenda",vehicleType:["ATV","Forestier","Port"],price:1234,pictureSrc:"./assets/pictures/tires/tire.png",description:"",width:"26.5",height:"26.5",diameter:"25",profile:"R20"},{id:5,weather:"wb_sunny",name:"ANVELOPA 145/70-6 KENDA K290 SCORPION 4PR TL",brand:"Kenda",vehicleType:["ATV","Forestier","Port"],price:1234,pictureSrc:"./assets/pictures/tires/tire.png",discount:15,description:"",width:"26.5",height:"26.5",diameter:"25",profile:"R20"},{id:6,weather:"sunny_snowing",name:"ANVELOPA 145/70-6 KENDA K290 SCORPION 4PR TL",brand:"Kenda",vehicleType:["ATV","Forestier","Port"],price:1234,pictureSrc:"./assets/pictures/tires/tire.png",discount:30,description:"",width:"26.5",height:"26.5",diameter:"25",profile:"R20"}],this.sortOptions=[{value:"1",label:"Cel mai mic pret"},{value:"2",label:"Cel mai mare pret"},{value:"3",label:"Sorteaza dupa popularitate"},{value:"4",label:"Sorteaza dupa evaluarea medie"},{value:"5",label:"Sorteaza dupa cele mai recente"}],this.brandOptions=[{value:"1",label:"One"},{value:"2",label:"Two"},{value:"3",label:"Three"}]}ngOnInit(){this.productsForm.valueChanges.subscribe(o=>console.log(o))}handlePageEvent(o){const{length:e,pageIndex:r,pageSize:f}=o;this.paginatorFormGroup?.patchValue({length:e,pageIndex:r,pageSize:f})}resetFilters(){this.productsForm.get("brand")?.reset(),this.productsForm.get("width")?.reset(),this.productsForm.get("height")?.reset(),this.productsForm.get("diameter")?.reset(),this.productsForm.get("profile")?.reset(),this.productsForm.get("minPrice")?.reset(),this.productsForm.get("maxPrice")?.reset()}}h.\u0275fac=function(o){return new(o||h)(t.Y36(n.j3))},h.\u0275cmp=t.Xpm({type:h,selectors:[["app-shop-products"]],decls:59,vars:23,consts:[[3,"formGroup"],[1,"row","mt-4"],[1,"col-12","col-sm-3","mb-4"],["multi",""],[3,"expanded"],[1,"justify-content-end"],[1,"fs-5"],["min","0","max","2000","showTickMarks","","discrete","","step","100",1,"w-100","z-3"],["formControlName","minPrice","matSliderStartThumb",""],["formControlName","maxPrice","matSliderEndThumb",""],["formControlName","brand"],[3,"value",4,"ngFor","ngForOf"],["formControlName","width"],["formControlName","height"],["formControlName","diameter"],["formControlName","profile"],[1,"d-flex","w-100","justify-content-center","my-2"],["mat-stroked-button","",3,"click"],[1,"col-12","col-sm-9"],[1,"row"],[1,"col-12","col-lg-3"],["formControlName","sortBy"],[1,"col-12","col-lg-9","mb-4"],["aria-label","Select page","itemsPerPageLabel","Pagina",3,"length","pageSize","showFirstLastButtons","pageSizeOptions","hidePageSize","pageIndex","page"],[1,"col-12"],["class","col-12 col-sm-6 col-lg-4 col-xl-3",4,"ngFor","ngForOf"],[1,"col-12","mb-4"],[3,"value"],[1,"col-12","col-sm-6","col-lg-4","col-xl-3"],[3,"product"]],template:function(o,e){1&o&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"mat-accordion",3)(4,"mat-expansion-panel",4)(5,"mat-expansion-panel-header")(6,"mat-panel-title"),t._uU(7," Filtreaza "),t.qZA(),t.TgZ(8,"mat-panel-description",5)(9,"mat-icon"),t._uU(10,"filter_alt"),t.qZA()()(),t.TgZ(11,"div",6),t._uU(12,"Pret"),t.qZA(),t.TgZ(13,"mat-slider",7),t._UZ(14,"input",8)(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field")(17,"mat-label"),t._uU(18,"Brand"),t.qZA(),t.TgZ(19,"mat-select",10),t.YNc(20,Q,2,2,"mat-option",11),t.qZA()(),t.TgZ(21,"mat-form-field")(22,"mat-label"),t._uU(23,"Latime"),t.qZA(),t.TgZ(24,"mat-select",12),t.YNc(25,j,2,2,"mat-option",11),t.qZA()(),t.TgZ(26,"mat-form-field")(27,"mat-label"),t._uU(28,"Inaltime"),t.qZA(),t.TgZ(29,"mat-select",13),t.YNc(30,R,2,2,"mat-option",11),t.qZA()(),t.TgZ(31,"mat-form-field")(32,"mat-label"),t._uU(33,"Diametru jante"),t.qZA(),t.TgZ(34,"mat-select",14),t.YNc(35,Y,2,2,"mat-option",11),t.qZA()(),t.TgZ(36,"mat-form-field")(37,"mat-label"),t._uU(38,"Profil"),t.qZA(),t.TgZ(39,"mat-select",15),t.YNc(40,K,2,2,"mat-option",11),t.qZA()(),t.TgZ(41,"div",16)(42,"button",17),t.NdJ("click",function(){return e.resetFilters()}),t._uU(43,"Reseteaza filtrele"),t.qZA()()()()(),t.TgZ(44,"div",18)(45,"div",19)(46,"div",20)(47,"mat-form-field")(48,"mat-label"),t._uU(49,"Sorteaza"),t.qZA(),t.TgZ(50,"mat-select",21),t.YNc(51,E,2,2,"mat-option",11),t.qZA()()(),t.TgZ(52,"div",22)(53,"mat-paginator",23),t.NdJ("page",function(f){return e.handlePageEvent(f)}),t.qZA()(),t.TgZ(54,"div",24)(55,"div",19),t.YNc(56,B,2,1,"div",25),t.qZA()(),t.TgZ(57,"div",26)(58,"mat-paginator",23),t.NdJ("page",function(f){return e.handlePageEvent(f)}),t.qZA()()()()()()),2&o&&(t.Q6J("formGroup",e.productsForm),t.xp6(4),t.Q6J("expanded",!0),t.xp6(16),t.Q6J("ngForOf",e.brandOptions),t.xp6(5),t.Q6J("ngForOf",e.brandOptions),t.xp6(5),t.Q6J("ngForOf",e.brandOptions),t.xp6(5),t.Q6J("ngForOf",e.brandOptions),t.xp6(5),t.Q6J("ngForOf",e.brandOptions),t.xp6(11),t.Q6J("ngForOf",e.sortOptions),t.xp6(2),t.Q6J("length",e.paginatorLength)("pageSize",e.paginatorPageSize)("showFirstLastButtons",e.paginatorShowFirstLastButtons)("pageSizeOptions",e.paginatorPageSizeOptions||t.DdM(21,w))("hidePageSize",e.paginatorHidePageSize)("pageIndex",e.paginatorPageIndex),t.xp6(3),t.Q6J("ngForOf",e.products),t.xp6(2),t.Q6J("length",e.paginatorLength)("pageSize",e.paginatorPageSize)("showFirstLastButtons",e.paginatorShowFirstLastButtons)("pageSizeOptions",e.paginatorPageSizeOptions||t.DdM(22,w))("hidePageSize",e.paginatorHidePageSize)("pageIndex",e.paginatorPageIndex))},dependencies:[u.sg,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,Z.lW,S.KE,S.hX,F.gD,C.ey,v.Hw,N.NW,_.pH,_.f9,d.pp,d.ib,d.yz,d.yK,d.u4,g]});const V=[{path:"",component:h,data:{breadcrumb:"Anvelope"}}];class c{}c.\u0275fac=function(o){return new(o||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[P.Bz.forChild(V),P.Bz]});class l{}l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[u.ez,n.UX,U.m,c]})}}]);