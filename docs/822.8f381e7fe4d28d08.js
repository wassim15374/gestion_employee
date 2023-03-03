"use strict";(self.webpackChunkgestion_Employee_Dept=self.webpackChunkgestion_Employee_Dept||[]).push([[822],{822:(b,l,r)=>{r.r(l),r.d(l,{GestionDepartmentModule:()=>p});var c=r(6895),g=r(529),f=r(6773),t=r(8256),u=r(5148);function h(n,e){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA()()),2&n){const o=e.$implicit;t.xp6(2),t.Oqu(o.id),t.xp6(2),t.Oqu(o.departmentName)}}class m{constructor(e){this.depService=e,this.departments=[]}ngOnInit(){this.depService.getListDepartments().subscribe(e=>{this.departments=e})}loadListDepartments(){this.depService.getListDepartments().subscribe(e=>{console.log(e),this.departments.push(...e)},e=>console.log(e))}}m.\u0275fac=function(e){return new(e||m)(t.Y36(u.n))},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-list"]],decls:9,vars:1,consts:[[1,"table"],["scope","col"],[4,"ngFor","ngForOf"]],template:function(e,o){1&e&&(t.TgZ(0,"table",0)(1,"thead")(2,"tr")(3,"th",1),t._uU(4,"#"),t.qZA(),t.TgZ(5,"th",1),t._uU(6," Nom du departement"),t.qZA()()(),t.TgZ(7,"tbody"),t.YNc(8,h,5,2,"tr",2),t.qZA()()),2&e&&(t.xp6(8),t.Q6J("ngForOf",o.departments))},dependencies:[c.sg]});var s=r(433);const v=function(n){return{"is-invalid ":n}};class a{constructor(e,o){this.fb=e,this.deptService=o,this.submitted=!1}ngOnInit(){this.departForm=this.fb.group({departmentName:["",s.kI.required]})}get f(){return this.departForm.controls}submit(){this.submitted=!0,!this.departForm.invalid&&(console.log(this.departForm.value),this.deptService.postDepartment(this.departForm.value).subscribe(e=>{console.log("ok")},e=>console.log(e)))}}a.\u0275fac=function(e){return new(e||a)(t.Y36(s.qu),t.Y36(u.n))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-add"]],decls:7,vars:4,consts:[[3,"formGroup","ngSubmit"],[1,"form-group"],["for","department"],["formControlName","departmentName","type","text","id","department","placeholder","saisir le nom du departement",1,"form-control",3,"ngClass"],[1,"btn","btn-outline-primary","mt-3","bnt-sm"]],template:function(e,o){1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(1,"div",1)(2,"label",2),t._uU(3,"Nom de departement"),t.qZA(),t._UZ(4,"input",3),t.qZA(),t.TgZ(5,"button",4),t._uU(6,"Ajouter"),t.qZA()()),2&e&&(t.Q6J("formGroup",o.departForm),t.xp6(4),t.Q6J("ngClass",t.VKq(2,v,o.submitted)))},dependencies:[c.mk,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u]});class d{constructor(){}ngOnInit(){}}d.\u0275fac=function(e){return new(e||d)},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-gestion-department"]],decls:10,vars:0,consts:[[1,"container"],[1,"row"],[1,"col"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),t._uU(4,"Gestion des departements"),t.qZA()()(),t.TgZ(5,"div",1)(6,"div",2),t._UZ(7,"app-list"),t.qZA(),t.TgZ(8,"div",2),t._UZ(9,"app-add"),t.qZA()()())},dependencies:[m,a]});const Z=[{path:"",component:d}];class i{}i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[f.Bz.forChild(Z),f.Bz]});class p{}p.\u0275fac=function(e){return new(e||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({providers:[u.n],imports:[c.ez,i,s.UX,s.u5,g.JF]})}}]);