/*
flckbox.js-fl20150728gz
ckipt is core.ck is shape. ckt is label.
Author URI: http://feilong.org
*/


//flckbox('.ckipt','.ck','.ckt');



function flckbox(ckipt,ck,ckt){
var ckipts=$(ckipt),cks=$(ck),ckts=$(ckt);
cks.each(function(){
var ck=$(this),idx=cks.index(this),ckipt=ckipts.eq(idx),ckt=ckts.eq(idx);
if(ckipt.prop('checked')){ck.addClass('cked');ckt.addClass('ckted');}else{ck.removeClass('cked');ckt.removeClass('ckted');}
});

/*ckipts.click(function(){
var idx=ckipts.index(this),ckipt=$(this),ck=cks.eq(idx),ckt=ckts.eq(idx),
otcks=cks.not(ck),otckts=ckts.not(ckt);
if(ckipt.is(':checkbox')){ck.toggleClass('cked');ckt.toggleClass('ckted');}
if(ckipt.is(':radio')){ck.addClass('cked');ckt.addClass('ckted');otcks.removeClass('cked');otckts.removeClass('ckted');}
});*/

ckipts.click(function(){
var ckipt=$(this),idx=ckipts.index(this),ck=cks.eq(idx),ckt=ckts.eq(idx),
otipts=ckipts.not(ckipt),otcks=cks.not(ck),otckts=ckts.not(ckt);

if(ckipt.is(':radio')){
ck.addClass('cked');ckt.addClass('ckted');

otcks.each(function(i,ol){
var otipt=otipts.eq(i),otck=$(this),otckt=otckts.eq(i);

if(ckipt.prop('name')==otipt.prop('name')){
otck.removeClass('cked');otckt.removeClass('ckted');}
});}

if(ckipt.is(':checkbox')){ck.toggleClass('cked');ckt.toggleClass('ckted');}
});

cks.click(function(){
var idx=cks.index(this),ckipt=ckipts.eq(idx);
ckipt.click();
});
ckts.click(function(){
var idx=ckts.index(this),ckipt=ckipts.eq(idx);
ckipt.click();
});

}/*0.5*/

/*feilong.org-fl20150711-gz-end*/
