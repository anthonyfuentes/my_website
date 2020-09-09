goog.provide('site.components.contact_info');
site.components.contact_info.email_icon_props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),"envelope",new cljs.core.Keyword(null,"alt","alt",-3214426),"email icon: envelope outline"], null);
site.components.contact_info.download_icon_props = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"icon","icon",1679606541),"download",new cljs.core.Keyword(null,"url","url",276297046),"/resources/resume.pdf",new cljs.core.Keyword(null,"download","download",-300081668),true,new cljs.core.Keyword(null,"alt","alt",-3214426),"download icon: cloud with arrow pointing downward",new cljs.core.Keyword(null,"display","display",242065432),"Download PDF"], null);
site.components.contact_info.li_icon_props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),"linkedin",new cljs.core.Keyword(null,"alt","alt",-3214426),"linkedin icon: bolded i and n"], null);
site.components.contact_info.gh_icon_props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),"github",new cljs.core.Keyword(null,"alt","alt",-3214426),"github icon: hollow silhouette of octocat in circle"], null);
site.components.contact_info.render = (function site$components$contact_info$render(props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.contact-info","section.contact-info",-1242105531),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [site.components.contact_detail.render,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(props),site.components.contact_info.email_icon_props], 0))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [site.components.contact_detail.render,site.components.contact_info.download_icon_props], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [site.components.contact_detail.render,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"github","github",567794498).cljs$core$IFn$_invoke$arity$1(props),site.components.contact_info.gh_icon_props], 0))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [site.components.contact_detail.render,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"linkedin","linkedin",-1733650847).cljs$core$IFn$_invoke$arity$1(props),site.components.contact_info.li_icon_props], 0))], null)], null)], null)], null)], null)], null);
});

//# sourceMappingURL=site.components.contact_info.js.map
