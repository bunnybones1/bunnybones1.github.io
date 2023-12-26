var Xb=Object.defineProperty;var qb=(Gt,Bt,Kr)=>Bt in Gt?Xb(Gt,Bt,{enumerable:!0,configurable:!0,writable:!0,value:Kr}):Gt[Bt]=Kr;var Yb=(Gt,Bt)=>()=>(Bt||Gt((Bt={exports:{}}).exports,Bt),Bt.exports);var Cr=(Gt,Bt,Kr)=>(qb(Gt,typeof Bt!="symbol"?Bt+"":Bt,Kr),Kr);var Kb=Yb((Zb,xh)=>{(async()=>{(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();var Gt=function(){var i=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(h){h.preventDefault(),r(++i%e.children.length)},!1);function t(h){return e.appendChild(h.dom),h}function r(h){for(var u=0;u<e.children.length;u++)e.children[u].style.display=u===h?"block":"none";i=h}var n=(performance||Date).now(),a=n,o=0,s=t(new Gt.Panel("FPS","#0ff","#002")),l=t(new Gt.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new Gt.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:e,addPanel:t,showPanel:r,begin:function(){n=(performance||Date).now()},end:function(){o++;var h=(performance||Date).now();if(l.update(h-n,200),h>=a+1e3&&(s.update(o*1e3/(h-a),100),a=h,o=0,c)){var u=performance.memory;c.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return h},update:function(){n=this.end()},domElement:e,setMode:r}};Gt.Panel=function(i,e,t){var r=1/0,n=0,a=Math.round,o=a(window.devicePixelRatio||1),s=80*o,l=48*o,c=3*o,h=2*o,u=3*o,d=15*o,m=74*o,_=30*o,v=document.createElement("canvas");v.width=s,v.height=l,v.style.cssText="width:80px;height:48px";var f=v.getContext("2d");return f.font="bold "+9*o+"px Helvetica,Arial,sans-serif",f.textBaseline="top",f.fillStyle=t,f.fillRect(0,0,s,l),f.fillStyle=e,f.fillText(i,c,h),f.fillRect(u,d,m,_),f.fillStyle=t,f.globalAlpha=.9,f.fillRect(u,d,m,_),{dom:v,update:function(p,M){r=Math.min(r,p),n=Math.max(n,p),f.fillStyle=t,f.globalAlpha=1,f.fillRect(0,0,s,d),f.fillStyle=e,f.fillText(a(p)+" "+i+" ("+a(r)+"-"+a(n)+")",c,h),f.drawImage(v,u+o,d,m-o,_,u,d,m-o,_),f.fillRect(u+m-o,d,o,_),f.fillStyle=t,f.globalAlpha=.9,f.fillRect(u+m-o,d,o,a((1-p/M)*_))}}};const Bt=Gt,Kr="/assets/rapier_wasm3d_bg-GqetY0_u.wasm",yh=async(i={},e)=>{let t;if(e.startsWith("data:")){const r=e.replace(/^data:.*?base64,/,"");let n;if(typeof Buffer=="function"&&typeof Buffer.from=="function")n=Buffer.from(r,"base64");else if(typeof atob=="function"){const a=atob(r);n=new Uint8Array(a.length);for(let o=0;o<a.length;o++)n[o]=a.charCodeAt(o)}else throw new Error("Cannot decode base64-encoded data URL");t=await WebAssembly.instantiate(n,i)}else{const r=await fetch(e),n=r.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&n.startsWith("application/wasm"))t=await WebAssembly.instantiateStreaming(r,i);else{const a=await r.arrayBuffer();t=await WebAssembly.instantiate(a,i)}}return t.instance.exports},et=new Array(32).fill(void 0);et.push(void 0,null,!0,!1);function it(i){return et[i]}let Ji=et.length;function Sh(i){i<36||(et[i]=Ji,Ji=i)}function Zi(i){const e=it(i);return Sh(i),e}function mt(i){Ji===et.length&&et.push(et.length+1);const e=Ji;return Ji=et[e],et[e]=i,e}function _e(i){return i==null}let La=new Float64Array;function Mn(){return La.byteLength===0&&(La=new Float64Array(mi.buffer)),La}let Ia=new Int32Array;function nt(){return Ia.byteLength===0&&(Ia=new Int32Array(mi.buffer)),Ia}const bh=typeof TextDecoder>"u"?(0,xh.require)("util").TextDecoder:TextDecoder;let wo=new bh("utf-8",{ignoreBOM:!0,fatal:!0});wo.decode();let Da=new Uint8Array;function Mh(){return Da.byteLength===0&&(Da=new Uint8Array(mi.buffer)),Da}function xo(i,e){return wo.decode(Mh().subarray(i,i+e))}function Eh(){try{const t=Ke(-16);Kh(t);var i=nt()[t/4+0],e=nt()[t/4+1];return xo(i,e)}finally{Ke(16),Gn(i,e)}}function C(i,e){if(!(i instanceof e))throw new Error(`expected instance of ${e.name}`);return i.ptr}let Ua=new Float32Array;function Pr(){return Ua.byteLength===0&&(Ua=new Float32Array(mi.buffer)),Ua}let st=32;function ut(i){if(st==1)throw new Error("out of js stack");return et[--st]=i,st}function yo(i,e){return Pr().subarray(i/4,i/4+e)}let Na=new Uint32Array;function So(){return Na.byteLength===0&&(Na=new Uint32Array(mi.buffer)),Na}function Th(i,e){return So().subarray(i/4,i/4+e)}let kt=0;function Jr(i,e){const t=e(i.length*4);return Pr().set(i,t/4),kt=i.length,t}function En(i,e){const t=e(i.length*4);return So().set(i,t/4),kt=i.length,t}function Oa(i,e){try{return i.apply(this,e)}catch(t){sv(mt(t))}}const Tn=Object.freeze({X:0,0:"X",Y:1,1:"Y",Z:2,2:"Z",AngX:3,3:"AngX",AngY:4,4:"AngY",AngZ:5,5:"AngZ"});class Lr{static __wrap(e){const t=Object.create(Lr.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();sf(e)}constructor(){const e=of();return Lr.__wrap(e)}}class fi{static __wrap(e){const t=Object.create(fi.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Ru(e)}constructor(){const e=Au();return fi.__wrap(e)}}class Qi{static __wrap(e){const t=Object.create(Qi.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();yu(e)}constructor(){const e=Su();return Qi.__wrap(e)}handle(){return rn(this.ptr)}translationApplied(){const e=bu(this.ptr);return N.__wrap(e)}translationRemaining(){const e=Mu(this.ptr);return N.__wrap(e)}toi(){return Zr(this.ptr)}worldWitness1(){const e=Bn(this.ptr);return N.__wrap(e)}worldWitness2(){const e=Eu(this.ptr);return N.__wrap(e)}worldNormal1(){const e=Va(this.ptr);return N.__wrap(e)}worldNormal2(){const e=Tu(this.ptr);return N.__wrap(e)}}class dt{static __wrap(e){const t=Object.create(dt.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();vm(e)}coTranslation(e){const t=lf(this.ptr,e);return N.__wrap(t)}coRotation(e){const t=cf(this.ptr,e);return je.__wrap(t)}coSetTranslation(e,t,r,n){hf(this.ptr,e,t,r,n)}coSetTranslationWrtParent(e,t,r,n){uf(this.ptr,e,t,r,n)}coSetRotation(e,t,r,n,a){df(this.ptr,e,t,r,n,a)}coSetRotationWrtParent(e,t,r,n,a){pf(this.ptr,e,t,r,n,a)}coIsSensor(e){return ff(this.ptr,e)!==0}coShapeType(e){return mf(this.ptr,e)>>>0}coHalfspaceNormal(e){const t=gf(this.ptr,e);return t===0?void 0:N.__wrap(t)}coHalfExtents(e){const t=_f(this.ptr,e);return t===0?void 0:N.__wrap(t)}coSetHalfExtents(e,t){C(t,N),vf(this.ptr,e,t.ptr)}coRadius(e){try{const n=Ke(-16);wf(n,this.ptr,e);var t=nt()[n/4+0],r=Pr()[n/4+1];return t===0?void 0:r}finally{Ke(16)}}coSetRadius(e,t){xf(this.ptr,e,t)}coHalfHeight(e){try{const n=Ke(-16);yf(n,this.ptr,e);var t=nt()[n/4+0],r=Pr()[n/4+1];return t===0?void 0:r}finally{Ke(16)}}coSetHalfHeight(e,t){Sf(this.ptr,e,t)}coRoundRadius(e){try{const n=Ke(-16);bf(n,this.ptr,e);var t=nt()[n/4+0],r=Pr()[n/4+1];return t===0?void 0:r}finally{Ke(16)}}coSetRoundRadius(e,t){Mf(this.ptr,e,t)}coVertices(e){try{const n=Ke(-16);Ef(n,this.ptr,e);var t=nt()[n/4+0],r=nt()[n/4+1];let a;return t!==0&&(a=yo(t,r).slice(),Gn(t,r*4)),a}finally{Ke(16)}}coIndices(e){try{const n=Ke(-16);Tf(n,this.ptr,e);var t=nt()[n/4+0],r=nt()[n/4+1];let a;return t!==0&&(a=Th(t,r).slice(),Gn(t,r*4)),a}finally{Ke(16)}}coHeightfieldHeights(e){try{const n=Ke(-16);Rf(n,this.ptr,e);var t=nt()[n/4+0],r=nt()[n/4+1];let a;return t!==0&&(a=yo(t,r).slice(),Gn(t,r*4)),a}finally{Ke(16)}}coHeightfieldScale(e){const t=Af(this.ptr,e);return t===0?void 0:N.__wrap(t)}coHeightfieldNRows(e){try{const n=Ke(-16);Cf(n,this.ptr,e);var t=nt()[n/4+0],r=nt()[n/4+1];return t===0?void 0:r>>>0}finally{Ke(16)}}coHeightfieldNCols(e){try{const n=Ke(-16);Pf(n,this.ptr,e);var t=nt()[n/4+0],r=nt()[n/4+1];return t===0?void 0:r>>>0}finally{Ke(16)}}coParent(e){try{const n=Ke(-16);Lf(n,this.ptr,e);var t=nt()[n/4+0],r=Mn()[n/8+1];return t===0?void 0:r}finally{Ke(16)}}coSetEnabled(e,t){If(this.ptr,e,t)}coIsEnabled(e){return Df(this.ptr,e)!==0}coFriction(e){return Uf(this.ptr,e)}coRestitution(e){return Nf(this.ptr,e)}coDensity(e){return Of(this.ptr,e)}coMass(e){return Ff(this.ptr,e)}coVolume(e){return zf(this.ptr,e)}coCollisionGroups(e){return Bf(this.ptr,e)>>>0}coSolverGroups(e){return Hf(this.ptr,e)>>>0}coActiveHooks(e){return Gf(this.ptr,e)>>>0}coActiveCollisionTypes(e){return kf(this.ptr,e)}coActiveEvents(e){return Vf(this.ptr,e)>>>0}coContactForceEventThreshold(e){return Wf(this.ptr,e)}coContainsPoint(e,t){return C(t,N),jf(this.ptr,e,t.ptr)!==0}coCastShape(e,t,r,n,a,o,s,l){C(t,N),C(r,Re),C(n,N),C(a,je),C(o,N);const c=Xf(this.ptr,e,t.ptr,r.ptr,n.ptr,a.ptr,o.ptr,s,l);return c===0?void 0:Fn.__wrap(c)}coCastCollider(e,t,r,n,a,o){C(t,N),C(n,N);const s=qf(this.ptr,e,t.ptr,r,n.ptr,a,o);return s===0?void 0:On.__wrap(s)}coIntersectsShape(e,t,r,n){return C(t,Re),C(r,N),C(n,je),Yf(this.ptr,e,t.ptr,r.ptr,n.ptr)!==0}coContactShape(e,t,r,n,a){C(t,Re),C(r,N),C(n,je);const o=Kf(this.ptr,e,t.ptr,r.ptr,n.ptr,a);return o===0?void 0:tn.__wrap(o)}coContactCollider(e,t,r){const n=Jf(this.ptr,e,t,r);return n===0?void 0:tn.__wrap(n)}coProjectPoint(e,t,r){C(t,N);const n=Zf(this.ptr,e,t.ptr,r);return Ln.__wrap(n)}coIntersectsRay(e,t,r,n){return C(t,N),C(r,N),Qf(this.ptr,e,t.ptr,r.ptr,n)!==0}coCastRay(e,t,r,n,a){return C(t,N),C(r,N),$f(this.ptr,e,t.ptr,r.ptr,n,a)}coCastRayAndGetNormal(e,t,r,n,a){C(t,N),C(r,N);const o=em(this.ptr,e,t.ptr,r.ptr,n,a);return o===0?void 0:Dn.__wrap(o)}coSetSensor(e,t){tm(this.ptr,e,t)}coSetRestitution(e,t){rm(this.ptr,e,t)}coSetFriction(e,t){im(this.ptr,e,t)}coFrictionCombineRule(e){return nm(this.ptr,e)>>>0}coSetFrictionCombineRule(e,t){am(this.ptr,e,t)}coRestitutionCombineRule(e){return sm(this.ptr,e)>>>0}coSetRestitutionCombineRule(e,t){om(this.ptr,e,t)}coSetCollisionGroups(e,t){lm(this.ptr,e,t)}coSetSolverGroups(e,t){cm(this.ptr,e,t)}coSetActiveHooks(e,t){hm(this.ptr,e,t)}coSetActiveEvents(e,t){um(this.ptr,e,t)}coSetActiveCollisionTypes(e,t){dm(this.ptr,e,t)}coSetShape(e,t){C(t,Re),pm(this.ptr,e,t.ptr)}coSetContactForceEventThreshold(e,t){fm(this.ptr,e,t)}coSetDensity(e,t){mm(this.ptr,e,t)}coSetMass(e,t){gm(this.ptr,e,t)}coSetMassProperties(e,t,r,n,a){C(r,N),C(n,N),C(a,je),_m(this.ptr,e,t,r.ptr,n.ptr,a.ptr)}constructor(){const e=wm();return dt.__wrap(e)}len(){return xm(this.ptr)>>>0}contains(e){return Eo(this.ptr,e)!==0}createCollider(e,t,r,n,a,o,s,l,c,h,u,d,m,_,v,f,p,M,x,L,U,P,R,Q){try{const j=Ke(-16);C(t,Re),C(r,N),C(n,je),C(s,N),C(l,N),C(c,je),C(Q,pt),ym(j,this.ptr,e,t.ptr,r.ptr,n.ptr,a,o,s.ptr,l.ptr,c.ptr,h,u,d,m,_,v,f,p,M,x,L,U,P,R,Q.ptr);var S=nt()[j/4+0],E=Mn()[j/8+1];return S===0?void 0:E}finally{Ke(16)}}remove(e,t,r,n){C(t,cr),C(r,pt),Sm(this.ptr,e,t.ptr,r.ptr,n)}isHandleValid(e){return Eo(this.ptr,e)!==0}forEachColliderHandle(e){try{bm(this.ptr,ut(e))}finally{et[st++]=void 0}}}class Fa{static __wrap(e){const t=Object.create(Fa.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();m_(e)}collider1(){return rn(this.ptr)}collider2(){return g_(this.ptr)}total_force(){const e=Ao(this.ptr);return N.__wrap(e)}total_force_magnitude(){return __(this.ptr)}max_force_direction(){const e=v_(this.ptr);return N.__wrap(e)}max_force_magnitude(){return w_(this.ptr)}}class za{static __wrap(e){const t=Object.create(za.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Im(e)}normal(){const e=Fm(this.ptr);return N.__wrap(e)}local_n1(){const e=zm(this.ptr);return N.__wrap(e)}local_n2(){const e=Bm(this.ptr);return N.__wrap(e)}subshape1(){return Hm(this.ptr)>>>0}subshape2(){return Gm(this.ptr)>>>0}num_contacts(){return km(this.ptr)>>>0}contact_local_p1(e){const t=Vm(this.ptr,e);return t===0?void 0:N.__wrap(t)}contact_local_p2(e){const t=Wm(this.ptr,e);return t===0?void 0:N.__wrap(t)}contact_dist(e){return jm(this.ptr,e)}contact_fid1(e){return Xm(this.ptr,e)>>>0}contact_fid2(e){return qm(this.ptr,e)>>>0}contact_impulse(e){return Ym(this.ptr,e)}contact_tangent_impulse_x(e){return Km(this.ptr,e)}contact_tangent_impulse_y(e){return Jm(this.ptr,e)}num_solver_contacts(){return Zm(this.ptr)>>>0}solver_contact_point(e){const t=Qm(this.ptr,e);return t===0?void 0:N.__wrap(t)}solver_contact_dist(e){return $m(this.ptr,e)}solver_contact_friction(e){return eg(this.ptr,e)}solver_contact_restitution(e){return tg(this.ptr,e)}solver_contact_tangent_velocity(e){const t=rg(this.ptr,e);return N.__wrap(t)}}class Ba{static __wrap(e){const t=Object.create(Ba.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();$_(e)}collider1(){return Dm(this.ptr)}collider2(){return Um(this.ptr)}numContactManifolds(){return Nm(this.ptr)>>>0}contactManifold(e){const t=Om(this.ptr,e);return t===0?void 0:za.__wrap(t)}}class Rn{static __wrap(e){const t=Object.create(Rn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();c_(e)}constructor(){const e=h_();return Rn.__wrap(e)}vertices(){const e=u_(this.ptr);return Zi(e)}colors(){const e=d_(this.ptr);return Zi(e)}render(e,t,r,n,a){C(e,pt),C(t,dt),C(r,lr),C(n,hr),C(a,_r),p_(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr)}}class Ha{static __wrap(e){const t=Object.create(Ha.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();G_(e)}takeGravity(){const e=k_(this.ptr);return e===0?void 0:N.__wrap(e)}takeIntegrationParameters(){const e=V_(this.ptr);return e===0?void 0:Ir.__wrap(e)}takeIslandManager(){const e=W_(this.ptr);return e===0?void 0:cr.__wrap(e)}takeBroadPhase(){const e=j_(this.ptr);return e===0?void 0:Lr.__wrap(e)}takeNarrowPhase(){const e=X_(this.ptr);return e===0?void 0:_r.__wrap(e)}takeBodies(){const e=q_(this.ptr);return e===0?void 0:pt.__wrap(e)}takeColliders(){const e=Y_(this.ptr);return e===0?void 0:dt.__wrap(e)}takeImpulseJoints(){const e=K_(this.ptr);return e===0?void 0:lr.__wrap(e)}takeMultibodyJoints(){const e=J_(this.ptr);return e===0?void 0:hr.__wrap(e)}}class $i{static __wrap(e){const t=Object.create($i.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();f_(e)}constructor(e){const t=x_(e);return $i.__wrap(t)}drainCollisionEvents(e){try{y_(this.ptr,ut(e))}finally{et[st++]=void 0}}drainContactForceEvents(e){try{S_(this.ptr,ut(e))}finally{et[st++]=void 0}}clear(){b_(this.ptr)}}class Xt{static __wrap(e){const t=Object.create(Xt.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();yd(e)}static spherical(e,t){C(e,N),C(t,N);const r=Sd(e.ptr,t.ptr);return Xt.__wrap(r)}static prismatic(e,t,r,n,a,o){C(e,N),C(t,N),C(r,N);const s=bd(e.ptr,t.ptr,r.ptr,n,a,o);return s===0?void 0:Xt.__wrap(s)}static fixed(e,t,r,n){C(e,N),C(t,je),C(r,N),C(n,je);const a=Md(e.ptr,t.ptr,r.ptr,n.ptr);return Xt.__wrap(a)}static revolute(e,t,r){C(e,N),C(t,N),C(r,N);const n=Ed(e.ptr,t.ptr,r.ptr);return n===0?void 0:Xt.__wrap(n)}}class lr{static __wrap(e){const t=Object.create(lr.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Yu(e)}jointType(e){return Cu(this.ptr,e)>>>0}jointBodyHandle1(e){return Pu(this.ptr,e)}jointBodyHandle2(e){return Lu(this.ptr,e)}jointFrameX1(e){const t=Iu(this.ptr,e);return je.__wrap(t)}jointFrameX2(e){const t=Du(this.ptr,e);return je.__wrap(t)}jointAnchor1(e){const t=Uu(this.ptr,e);return N.__wrap(t)}jointAnchor2(e){const t=Nu(this.ptr,e);return N.__wrap(t)}jointSetAnchor1(e,t){C(t,N),Ou(this.ptr,e,t.ptr)}jointSetAnchor2(e,t){C(t,N),Fu(this.ptr,e,t.ptr)}jointContactsEnabled(e){return zu(this.ptr,e)!==0}jointSetContactsEnabled(e,t){Bu(this.ptr,e,t)}jointLimitsEnabled(e,t){return Hu(this.ptr,e,t)!==0}jointLimitsMin(e,t){return Gu(this.ptr,e,t)}jointLimitsMax(e,t){return ku(this.ptr,e,t)}jointSetLimits(e,t,r,n){Vu(this.ptr,e,t,r,n)}jointConfigureMotorModel(e,t,r){Wu(this.ptr,e,t,r)}jointConfigureMotorVelocity(e,t,r,n){ju(this.ptr,e,t,r,n)}jointConfigureMotorPosition(e,t,r,n,a){Xu(this.ptr,e,t,r,n,a)}jointConfigureMotor(e,t,r,n,a,o){qu(this.ptr,e,t,r,n,a,o)}constructor(){const e=Ku();return lr.__wrap(e)}createJoint(e,t,r,n){return C(e,Xt),Ju(this.ptr,e.ptr,t,r,n)}remove(e,t){Zu(this.ptr,e,t)}len(){return Qu(this.ptr)>>>0}contains(e){return $u(this.ptr,e)!==0}forEachJointHandle(e){try{ed(this.ptr,ut(e))}finally{et[st++]=void 0}}forEachJointAttachedToRigidBody(e,t){try{td(this.ptr,e,ut(t))}finally{et[st++]=void 0}}}class Ir{static __wrap(e){const t=Object.create(Ir.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();rd(e)}constructor(){const e=id();return Ir.__wrap(e)}get dt(){return Hn(this.ptr)}get erp(){return Zr(this.ptr)}get allowedLinearError(){return nd(this.ptr)}get predictionDistance(){return ad(this.ptr)}get maxVelocityIterations(){return sd(this.ptr)>>>0}get maxVelocityFrictionIterations(){return od(this.ptr)>>>0}get maxStabilizationIterations(){return ld(this.ptr)>>>0}get minIslandSize(){return cd(this.ptr)>>>0}get maxCcdSubsteps(){return hd(this.ptr)>>>0}set dt(e){bo(this.ptr,e)}set erp(e){Mo(this.ptr,e)}set allowedLinearError(e){ud(this.ptr,e)}set predictionDistance(e){dd(this.ptr,e)}set maxVelocityIterations(e){pd(this.ptr,e)}set maxVelocityFrictionIterations(e){fd(this.ptr,e)}set maxStabilizationIterations(e){md(this.ptr,e)}set minIslandSize(e){gd(this.ptr,e)}set maxCcdSubsteps(e){_d(this.ptr,e)}}class cr{static __wrap(e){const t=Object.create(cr.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();vd(e)}constructor(){const e=wd();return cr.__wrap(e)}forEachActiveRigidBodyHandle(e){try{xd(this.ptr,ut(e))}finally{et[st++]=void 0}}}class An{static __wrap(e){const t=Object.create(An.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Jh(e)}constructor(e){const t=Zh(e);return An.__wrap(t)}up(){const e=Qh(this.ptr);return N.__wrap(e)}setUp(e){C(e,N),$h(this.ptr,e.ptr)}offset(){return eu(this.ptr)}setOffset(e){tu(this.ptr,e)}slideEnabled(){return ru(this.ptr)!==0}setSlideEnabled(e){iu(this.ptr,e)}autostepMaxHeight(){try{const r=Ke(-16);nu(r,this.ptr);var e=nt()[r/4+0],t=Pr()[r/4+1];return e===0?void 0:t}finally{Ke(16)}}autostepMinWidth(){try{const r=Ke(-16);au(r,this.ptr);var e=nt()[r/4+0],t=Pr()[r/4+1];return e===0?void 0:t}finally{Ke(16)}}autostepIncludesDynamicBodies(){const e=su(this.ptr);return e===16777215?void 0:e!==0}autostepEnabled(){return ou(this.ptr)!==0}enableAutostep(e,t,r){lu(this.ptr,e,t,r)}disableAutostep(){cu(this.ptr)}maxSlopeClimbAngle(){return hu(this.ptr)}setMaxSlopeClimbAngle(e){uu(this.ptr,e)}minSlopeSlideAngle(){return du(this.ptr)}setMinSlopeSlideAngle(e){pu(this.ptr,e)}snapToGroundDistance(){try{const r=Ke(-16);fu(r,this.ptr);var e=nt()[r/4+0],t=Pr()[r/4+1];return e===0?void 0:t}finally{Ke(16)}}enableSnapToGround(e){mu(this.ptr,e)}disableSnapToGround(){gu(this.ptr)}snapToGroundEnabled(){return _u(this.ptr)!==0}computeColliderMovement(e,t,r,n,a,o,s,l,c,h,u){try{C(t,pt),C(r,dt),C(n,en),C(o,N),vu(this.ptr,e,t.ptr,r.ptr,n.ptr,a,o.ptr,s,!_e(l),_e(l)?0:l,c,!_e(h),_e(h)?0:h,ut(u))}finally{et[st++]=void 0}}computedMovement(){const e=zn(this.ptr);return N.__wrap(e)}computedGrounded(){return ka(this.ptr)!==0}numComputedCollisions(){return wu(this.ptr)>>>0}computedCollision(e,t){return C(t,Qi),xu(this.ptr,e,t.ptr)!==0}}class hr{static __wrap(e){const t=Object.create(hr.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Od(e)}jointType(e){return Td(this.ptr,e)>>>0}jointFrameX1(e){const t=Rd(this.ptr,e);return je.__wrap(t)}jointFrameX2(e){const t=Ad(this.ptr,e);return je.__wrap(t)}jointAnchor1(e){const t=Cd(this.ptr,e);return N.__wrap(t)}jointAnchor2(e){const t=Pd(this.ptr,e);return N.__wrap(t)}jointContactsEnabled(e){return Ld(this.ptr,e)!==0}jointSetContactsEnabled(e,t){Id(this.ptr,e,t)}jointLimitsEnabled(e,t){return Dd(this.ptr,e,t)!==0}jointLimitsMin(e,t){return Ud(this.ptr,e,t)}jointLimitsMax(e,t){return Nd(this.ptr,e,t)}constructor(){const e=Fd();return hr.__wrap(e)}createJoint(e,t,r,n){return C(e,Xt),zd(this.ptr,e.ptr,t,r,n)}remove(e,t){Bd(this.ptr,e,t)}contains(e){return Hd(this.ptr,e)!==0}forEachJointHandle(e){try{Gd(this.ptr,ut(e))}finally{et[st++]=void 0}}forEachJointAttachedToRigidBody(e,t){try{kd(this.ptr,e,ut(t))}finally{et[st++]=void 0}}}class _r{static __wrap(e){const t=Object.create(_r.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Tm(e)}constructor(){const e=Rm();return _r.__wrap(e)}contacts_with(e,t){Am(this.ptr,e,mt(t))}contact_pair(e,t){const r=Cm(this.ptr,e,t);return r===0?void 0:Ba.__wrap(r)}intersections_with(e,t){Pm(this.ptr,e,mt(t))}intersection_pair(e,t){return Lm(this.ptr,e,t)!==0}}class Cn{static __wrap(e){const t=Object.create(Cn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();M_(e)}constructor(){const e=E_();return Cn.__wrap(e)}step(e,t,r,n,a,o,s,l,c,h){C(e,N),C(t,Ir),C(r,cr),C(n,Lr),C(a,_r),C(o,pt),C(s,dt),C(l,lr),C(c,hr),C(h,fi),T_(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,o.ptr,s.ptr,l.ptr,c.ptr,h.ptr)}stepWithEvents(e,t,r,n,a,o,s,l,c,h,u,d,m,_){C(e,N),C(t,Ir),C(r,cr),C(n,Lr),C(a,_r),C(o,pt),C(s,dt),C(l,lr),C(c,hr),C(h,fi),C(u,$i),R_(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,o.ptr,s.ptr,l.ptr,c.ptr,h.ptr,u.ptr,mt(d),mt(m),mt(_))}}class Pn{static __wrap(e){const t=Object.create(Pn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();ng(e)}colliderHandle(){return ag(this.ptr)}point(){const e=zn(this.ptr);return N.__wrap(e)}isInside(){return ka(this.ptr)!==0}featureType(){return sg(this.ptr)>>>0}featureId(){try{const r=Ke(-16);og(r,this.ptr);var e=nt()[r/4+0],t=nt()[r/4+1];return e===0?void 0:t>>>0}finally{Ke(16)}}}class Ln{static __wrap(e){const t=Object.create(Ln.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();ig(e)}point(){const e=zn(this.ptr);return N.__wrap(e)}isInside(){return ka(this.ptr)!==0}}class en{static __wrap(e){const t=Object.create(en.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();A_(e)}constructor(){const e=C_();return en.__wrap(e)}update(e,t){C(e,pt),C(t,dt),P_(this.ptr,e.ptr,t.ptr)}castRay(e,t,r,n,a,o,s,l,c,h,u){try{C(e,pt),C(t,dt),C(r,N),C(n,N);const d=L_(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a,o,s,!_e(l),_e(l)?0:l,!_e(c),_e(c)?0:c,!_e(h),_e(h)?0:h,ut(u));return d===0?void 0:Ga.__wrap(d)}finally{et[st++]=void 0}}castRayAndGetNormal(e,t,r,n,a,o,s,l,c,h,u){try{C(e,pt),C(t,dt),C(r,N),C(n,N);const d=I_(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a,o,s,!_e(l),_e(l)?0:l,!_e(c),_e(c)?0:c,!_e(h),_e(h)?0:h,ut(u));return d===0?void 0:In.__wrap(d)}finally{et[st++]=void 0}}intersectionsWithRay(e,t,r,n,a,o,s,l,c,h,u,d){try{C(e,pt),C(t,dt),C(r,N),C(n,N),D_(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a,o,ut(s),l,!_e(c),_e(c)?0:c,!_e(h),_e(h)?0:h,!_e(u),_e(u)?0:u,ut(d))}finally{et[st++]=void 0,et[st++]=void 0}}intersectionWithShape(e,t,r,n,a,o,s,l,c,h){try{const m=Ke(-16);C(e,pt),C(t,dt),C(r,N),C(n,je),C(a,Re),U_(m,this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,o,!_e(s),_e(s)?0:s,!_e(l),_e(l)?0:l,!_e(c),_e(c)?0:c,ut(h));var u=nt()[m/4+0],d=Mn()[m/8+1];return u===0?void 0:d}finally{Ke(16),et[st++]=void 0}}projectPoint(e,t,r,n,a,o,s,l,c){try{C(e,pt),C(t,dt),C(r,N);const h=N_(this.ptr,e.ptr,t.ptr,r.ptr,n,a,!_e(o),_e(o)?0:o,!_e(s),_e(s)?0:s,!_e(l),_e(l)?0:l,ut(c));return h===0?void 0:Pn.__wrap(h)}finally{et[st++]=void 0}}projectPointAndGetFeature(e,t,r,n,a,o,s,l){try{C(e,pt),C(t,dt),C(r,N);const c=O_(this.ptr,e.ptr,t.ptr,r.ptr,n,!_e(a),_e(a)?0:a,!_e(o),_e(o)?0:o,!_e(s),_e(s)?0:s,ut(l));return c===0?void 0:Pn.__wrap(c)}finally{et[st++]=void 0}}intersectionsWithPoint(e,t,r,n,a,o,s,l,c){try{C(e,pt),C(t,dt),C(r,N),F_(this.ptr,e.ptr,t.ptr,r.ptr,ut(n),a,!_e(o),_e(o)?0:o,!_e(s),_e(s)?0:s,!_e(l),_e(l)?0:l,ut(c))}finally{et[st++]=void 0,et[st++]=void 0}}castShape(e,t,r,n,a,o,s,l,c,h,u,d,m){try{C(e,pt),C(t,dt),C(r,N),C(n,je),C(a,N),C(o,Re);const _=z_(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,o.ptr,s,l,c,!_e(h),_e(h)?0:h,!_e(u),_e(u)?0:u,!_e(d),_e(d)?0:d,ut(m));return _===0?void 0:On.__wrap(_)}finally{et[st++]=void 0}}intersectionsWithShape(e,t,r,n,a,o,s,l,c,h,u){try{C(e,pt),C(t,dt),C(r,N),C(n,je),C(a,Re),B_(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,ut(o),s,!_e(l),_e(l)?0:l,!_e(c),_e(c)?0:c,!_e(h),_e(h)?0:h,ut(u))}finally{et[st++]=void 0,et[st++]=void 0}}collidersWithAabbIntersectingAabb(e,t,r){try{C(e,N),C(t,N),H_(this.ptr,e.ptr,t.ptr,ut(r))}finally{et[st++]=void 0}}}class In{static __wrap(e){const t=Object.create(In.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();ev(e)}colliderHandle(){return rn(this.ptr)}normal(){const e=ug(this.ptr);return N.__wrap(e)}toi(){return dg(this.ptr)}featureType(){return pg(this.ptr)>>>0}featureId(){try{const r=Ke(-16);fg(r,this.ptr);var e=nt()[r/4+0],t=nt()[r/4+1];return e===0?void 0:t>>>0}finally{Ke(16)}}}class Ga{static __wrap(e){const t=Object.create(Ga.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();mg(e)}colliderHandle(){return rn(this.ptr)}toi(){return Zr(this.ptr)}}class Dn{static __wrap(e){const t=Object.create(Dn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();lg(e)}normal(){const e=Bn(this.ptr);return N.__wrap(e)}toi(){return Zr(this.ptr)}featureType(){return cg(this.ptr)>>>0}featureId(){try{const r=Ke(-16);hg(r,this.ptr);var e=nt()[r/4+0],t=nt()[r/4+1];return e===0?void 0:t>>>0}finally{Ke(16)}}}class pt{static __wrap(e){const t=Object.create(pt.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Zp(e)}rbTranslation(e){const t=Vd(this.ptr,e);return N.__wrap(t)}rbRotation(e){const t=Wd(this.ptr,e);return je.__wrap(t)}rbSleep(e){jd(this.ptr,e)}rbIsSleeping(e){return Xd(this.ptr,e)!==0}rbIsMoving(e){return qd(this.ptr,e)!==0}rbNextTranslation(e){const t=Yd(this.ptr,e);return N.__wrap(t)}rbNextRotation(e){const t=Kd(this.ptr,e);return je.__wrap(t)}rbSetTranslation(e,t,r,n,a){Jd(this.ptr,e,t,r,n,a)}rbSetRotation(e,t,r,n,a,o){Zd(this.ptr,e,t,r,n,a,o)}rbSetLinvel(e,t,r){C(t,N),Qd(this.ptr,e,t.ptr,r)}rbSetAngvel(e,t,r){C(t,N),$d(this.ptr,e,t.ptr,r)}rbSetNextKinematicTranslation(e,t,r,n){ep(this.ptr,e,t,r,n)}rbSetNextKinematicRotation(e,t,r,n,a){tp(this.ptr,e,t,r,n,a)}rbRecomputeMassPropertiesFromColliders(e,t){C(t,dt),rp(this.ptr,e,t.ptr)}rbSetAdditionalMass(e,t,r){ip(this.ptr,e,t,r)}rbSetAdditionalMassProperties(e,t,r,n,a,o){C(r,N),C(n,N),C(a,je),np(this.ptr,e,t,r.ptr,n.ptr,a.ptr,o)}rbLinvel(e){const t=ap(this.ptr,e);return N.__wrap(t)}rbAngvel(e){const t=sp(this.ptr,e);return N.__wrap(t)}rbLockTranslations(e,t,r){op(this.ptr,e,t,r)}rbSetEnabledTranslations(e,t,r,n,a){lp(this.ptr,e,t,r,n,a)}rbLockRotations(e,t,r){cp(this.ptr,e,t,r)}rbSetEnabledRotations(e,t,r,n,a){hp(this.ptr,e,t,r,n,a)}rbDominanceGroup(e){return up(this.ptr,e)}rbSetDominanceGroup(e,t){dp(this.ptr,e,t)}rbEnableCcd(e,t){pp(this.ptr,e,t)}rbMass(e){return fp(this.ptr,e)}rbInvMass(e){return mp(this.ptr,e)}rbEffectiveInvMass(e){const t=gp(this.ptr,e);return N.__wrap(t)}rbLocalCom(e){const t=_p(this.ptr,e);return N.__wrap(t)}rbWorldCom(e){const t=vp(this.ptr,e);return N.__wrap(t)}rbInvPrincipalInertiaSqrt(e){const t=wp(this.ptr,e);return N.__wrap(t)}rbPrincipalInertiaLocalFrame(e){const t=xp(this.ptr,e);return je.__wrap(t)}rbPrincipalInertia(e){const t=yp(this.ptr,e);return N.__wrap(t)}rbEffectiveWorldInvInertiaSqrt(e){const t=Sp(this.ptr,e);return Un.__wrap(t)}rbEffectiveAngularInertia(e){const t=bp(this.ptr,e);return Un.__wrap(t)}rbWakeUp(e){Mp(this.ptr,e)}rbIsCcdEnabled(e){return Ep(this.ptr,e)!==0}rbNumColliders(e){return Tp(this.ptr,e)>>>0}rbCollider(e,t){return Rp(this.ptr,e,t)}rbBodyType(e){return Ap(this.ptr,e)>>>0}rbSetBodyType(e,t,r){Cp(this.ptr,e,t,r)}rbIsFixed(e){return Pp(this.ptr,e)!==0}rbIsKinematic(e){return Lp(this.ptr,e)!==0}rbIsDynamic(e){return Ip(this.ptr,e)!==0}rbLinearDamping(e){return Dp(this.ptr,e)}rbAngularDamping(e){return Up(this.ptr,e)}rbSetLinearDamping(e,t){Np(this.ptr,e,t)}rbSetAngularDamping(e,t){Op(this.ptr,e,t)}rbSetEnabled(e,t){Fp(this.ptr,e,t)}rbIsEnabled(e){return zp(this.ptr,e)!==0}rbGravityScale(e){return Bp(this.ptr,e)}rbSetGravityScale(e,t,r){Hp(this.ptr,e,t,r)}rbResetForces(e,t){Gp(this.ptr,e,t)}rbResetTorques(e,t){kp(this.ptr,e,t)}rbAddForce(e,t,r){C(t,N),Vp(this.ptr,e,t.ptr,r)}rbApplyImpulse(e,t,r){C(t,N),Wp(this.ptr,e,t.ptr,r)}rbAddTorque(e,t,r){C(t,N),jp(this.ptr,e,t.ptr,r)}rbApplyTorqueImpulse(e,t,r){C(t,N),Xp(this.ptr,e,t.ptr,r)}rbAddForceAtPoint(e,t,r,n){C(t,N),C(r,N),qp(this.ptr,e,t.ptr,r.ptr,n)}rbApplyImpulseAtPoint(e,t,r,n){C(t,N),C(r,N),Yp(this.ptr,e,t.ptr,r.ptr,n)}rbUserData(e){return Kp(this.ptr,e)>>>0}rbSetUserData(e,t){Jp(this.ptr,e,t)}constructor(){const e=Qp();return pt.__wrap(e)}createRigidBody(e,t,r,n,a,o,s,l,c,h,u,d,m,_,v,f,p,M,x,L,U,P,R,Q){return C(t,N),C(r,je),C(s,N),C(l,N),C(c,N),C(h,N),C(u,je),$p(this.ptr,e,t.ptr,r.ptr,n,a,o,s.ptr,l.ptr,c.ptr,h.ptr,u.ptr,d,m,_,v,f,p,M,x,L,U,P,R,Q)}remove(e,t,r,n,a){C(t,cr),C(r,dt),C(n,lr),C(a,hr),ef(this.ptr,e,t.ptr,r.ptr,n.ptr,a.ptr)}len(){return tf(this.ptr)>>>0}contains(e){return rf(this.ptr,e)!==0}forEachRigidBodyHandle(e){try{nf(this.ptr,ut(e))}finally{et[st++]=void 0}}propagateModifiedBodyPositionsToColliders(e){C(e,dt),af(this.ptr,e.ptr)}}class je{static __wrap(e){const t=Object.create(je.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();tv(e)}constructor(e,t,r,n){const a=Jg(e,t,r,n);return je.__wrap(a)}static identity(){const e=Zg();return je.__wrap(e)}get x(){return Hn(this.ptr)}get y(){return Ro(this.ptr)}get z(){return Zr(this.ptr)}get w(){return Qg(this.ptr)}}class Un{static __wrap(e){const t=Object.create(Un.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();iv(e)}elements(){const e=l_(this.ptr);return Zi(e)}}class Nn{static __wrap(e){const t=Object.create(Nn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();av(e)}constructor(){const e=nv();return Nn.__wrap(e)}serializeAll(e,t,r,n,a,o,s,l,c){C(e,N),C(t,Ir),C(r,cr),C(n,Lr),C(a,_r),C(o,pt),C(s,dt),C(l,lr),C(c,hr);const h=Z_(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,o.ptr,s.ptr,l.ptr,c.ptr);return Zi(h)}deserializeAll(e){const t=Q_(this.ptr,mt(e));return t===0?void 0:Ha.__wrap(t)}}class Re{static __wrap(e){const t=Object.create(Re.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();gg(e)}static cuboid(e,t,r){const n=_g(e,t,r);return Re.__wrap(n)}static roundCuboid(e,t,r,n){const a=vg(e,t,r,n);return Re.__wrap(a)}static ball(e){const t=wg(e);return Re.__wrap(t)}static halfspace(e){C(e,N);const t=xg(e.ptr);return Re.__wrap(t)}static capsule(e,t){const r=yg(e,t);return Re.__wrap(r)}static cylinder(e,t){const r=Sg(e,t);return Re.__wrap(r)}static roundCylinder(e,t,r){const n=bg(e,t,r);return Re.__wrap(n)}static cone(e,t){const r=Mg(e,t);return Re.__wrap(r)}static roundCone(e,t,r){const n=Eg(e,t,r);return Re.__wrap(n)}static polyline(e,t){const r=Jr(e,er),n=kt,a=En(t,er),o=Tg(r,n,a,kt);return Re.__wrap(o)}static trimesh(e,t){const r=Jr(e,er),n=kt,a=En(t,er),o=Rg(r,n,a,kt);return Re.__wrap(o)}static heightfield(e,t,r,n){const a=Jr(r,er),o=kt;C(n,N);const s=Ag(e,t,a,o,n.ptr);return Re.__wrap(s)}static segment(e,t){C(e,N),C(t,N);const r=Cg(e.ptr,t.ptr);return Re.__wrap(r)}static triangle(e,t,r){C(e,N),C(t,N),C(r,N);const n=Pg(e.ptr,t.ptr,r.ptr);return Re.__wrap(n)}static roundTriangle(e,t,r,n){C(e,N),C(t,N),C(r,N);const a=Lg(e.ptr,t.ptr,r.ptr,n);return Re.__wrap(a)}static convexHull(e){const t=Jr(e,er),r=Ig(t,kt);return r===0?void 0:Re.__wrap(r)}static roundConvexHull(e,t){const r=Jr(e,er),n=Dg(r,kt,t);return n===0?void 0:Re.__wrap(n)}static convexMesh(e,t){const r=Jr(e,er),n=kt,a=En(t,er),o=Ug(r,n,a,kt);return o===0?void 0:Re.__wrap(o)}static roundConvexMesh(e,t,r){const n=Jr(e,er),a=kt,o=En(t,er),s=Ng(n,a,o,kt,r);return s===0?void 0:Re.__wrap(s)}castShape(e,t,r,n,a,o,s,l,c){C(e,N),C(t,je),C(r,N),C(n,Re),C(a,N),C(o,je),C(s,N);const h=Og(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,o.ptr,s.ptr,l,c);return h===0?void 0:Fn.__wrap(h)}intersectsShape(e,t,r,n,a){return C(e,N),C(t,je),C(r,Re),C(n,N),C(a,je),Fg(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr)!==0}contactShape(e,t,r,n,a,o){C(e,N),C(t,je),C(r,Re),C(n,N),C(a,je);const s=zg(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,o);return s===0?void 0:tn.__wrap(s)}containsPoint(e,t,r){return C(e,N),C(t,je),C(r,N),Bg(this.ptr,e.ptr,t.ptr,r.ptr)!==0}projectPoint(e,t,r,n){C(e,N),C(t,je),C(r,N);const a=Hg(this.ptr,e.ptr,t.ptr,r.ptr,n);return Ln.__wrap(a)}intersectsRay(e,t,r,n,a){return C(e,N),C(t,je),C(r,N),C(n,N),Gg(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a)!==0}castRay(e,t,r,n,a,o){return C(e,N),C(t,je),C(r,N),C(n,N),kg(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a,o)}castRayAndGetNormal(e,t,r,n,a,o){C(e,N),C(t,je),C(r,N),C(n,N);const s=Vg(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a,o);return s===0?void 0:Dn.__wrap(s)}}class On{static __wrap(e){const t=Object.create(On.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Yg(e)}colliderHandle(){return rn(this.ptr)}toi(){return Zr(this.ptr)}witness1(){const e=Bn(this.ptr);return N.__wrap(e)}witness2(){const e=To(this.ptr);return N.__wrap(e)}normal1(){const e=Va(this.ptr);return N.__wrap(e)}normal2(){const e=Kg(this.ptr);return N.__wrap(e)}}class tn{static __wrap(e){const t=Object.create(tn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Mm(e)}distance(){return Em(this.ptr)}point1(){const e=zn(this.ptr);return N.__wrap(e)}point2(){const e=Bn(this.ptr);return N.__wrap(e)}normal1(){const e=To(this.ptr);return N.__wrap(e)}normal2(){const e=Va(this.ptr);return N.__wrap(e)}}class Fn{static __wrap(e){const t=Object.create(Fn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Wg(e)}toi(){return Hn(this.ptr)}witness1(){const e=jg(this.ptr);return N.__wrap(e)}witness2(){const e=Ao(this.ptr);return N.__wrap(e)}normal1(){const e=Xg(this.ptr);return N.__wrap(e)}normal2(){const e=qg(this.ptr);return N.__wrap(e)}}class N{static __wrap(e){const t=Object.create(N.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();rv(e)}static zero(){const e=$g();return N.__wrap(e)}constructor(e,t,r){const n=e_(e,t,r);return N.__wrap(n)}get x(){return Hn(this.ptr)}set x(e){bo(this.ptr,e)}get y(){return Ro(this.ptr)}set y(e){t_(this.ptr,e)}get z(){return Zr(this.ptr)}set z(e){Mo(this.ptr,e)}xyz(){const e=r_(this.ptr);return N.__wrap(e)}yxz(){const e=i_(this.ptr);return N.__wrap(e)}zxy(){const e=n_(this.ptr);return N.__wrap(e)}xzy(){const e=a_(this.ptr);return N.__wrap(e)}yzx(){const e=s_(this.ptr);return N.__wrap(e)}zyx(){const e=o_(this.ptr);return N.__wrap(e)}}function Rh(i){Zi(i)}function Ah(i){return mt(i)}function Ch(i,e){const t=it(e),r=typeof t=="number"?t:void 0;Mn()[i/8+1]=_e(r)?0:r,nt()[i/4+0]=!_e(r)}function Ph(i){const e=it(i);return typeof e=="boolean"?e?1:0:2}function Lh(i){return typeof it(i)=="function"}function Ih(i){const e=In.__wrap(i);return mt(e)}function Dh(i){const e=Fa.__wrap(i);return mt(e)}function Uh(){return Oa(function(i,e,t){const r=it(i).call(it(e),it(t));return mt(r)},arguments)}function Nh(){return Oa(function(i,e,t,r){const n=it(i).call(it(e),it(t),it(r));return mt(n)},arguments)}function Oh(){return Oa(function(i,e,t,r,n){const a=it(i).call(it(e),it(t),it(r),it(n));return mt(a)},arguments)}function Fh(i,e,t,r){const n=it(i).bind(it(e),it(t),it(r));return mt(n)}function zh(i){const e=it(i).buffer;return mt(e)}function Bh(i,e,t){const r=new Uint8Array(it(i),e>>>0,t>>>0);return mt(r)}function Hh(i){const e=new Uint8Array(it(i));return mt(e)}function Gh(i,e,t){it(i).set(it(e),t>>>0)}function kh(i){return it(i).length}function Vh(i,e,t){const r=new Float32Array(it(i),e>>>0,t>>>0);return mt(r)}function Wh(i,e,t){it(i).set(it(e),t>>>0)}function jh(i){return it(i).length}function Xh(i){const e=new Float32Array(i>>>0);return mt(e)}function qh(i,e){throw new Error(xo(i,e))}function Yh(){return mt(mi)}URL=globalThis.URL;const g=await yh({"./rapier_wasm3d_bg.js":{__wbindgen_object_drop_ref:Rh,__wbindgen_number_new:Ah,__wbindgen_number_get:Ch,__wbindgen_boolean_get:Ph,__wbindgen_is_function:Lh,__wbg_rawraycolliderintersection_new:Ih,__wbg_rawcontactforceevent_new:Dh,__wbg_call_168da88779e35f61:Uh,__wbg_call_3999bee59e9f7719:Nh,__wbg_call_e1f72c051cdab859:Oh,__wbg_bind_10dfe70e95d2a480:Fh,__wbg_buffer_3f3d764d4747d564:zh,__wbg_newwithbyteoffsetandlength_d9aa266703cb98be:Bh,__wbg_new_8c3f0052272a457a:Hh,__wbg_set_83db9690f9353e79:Gh,__wbg_length_9e1ae1900cb0fbd5:kh,__wbg_newwithbyteoffsetandlength_be22e5fcf4f69ab4:Vh,__wbg_set_0e0314cf6675c1b9:Wh,__wbg_length_9a2deed95d22668d:jh,__wbg_newwithlength_a7168e4a1e8f5e12:Xh,__wbindgen_throw:qh,__wbindgen_memory:Yh}},Kr),mi=g.memory,Kh=g.version,Jh=g.__wbg_rawkinematiccharactercontroller_free,Zh=g.rawkinematiccharactercontroller_new,Qh=g.rawkinematiccharactercontroller_up,$h=g.rawkinematiccharactercontroller_setUp,eu=g.rawkinematiccharactercontroller_offset,tu=g.rawkinematiccharactercontroller_setOffset,ru=g.rawkinematiccharactercontroller_slideEnabled,iu=g.rawkinematiccharactercontroller_setSlideEnabled,nu=g.rawkinematiccharactercontroller_autostepMaxHeight,au=g.rawkinematiccharactercontroller_autostepMinWidth,su=g.rawkinematiccharactercontroller_autostepIncludesDynamicBodies,ou=g.rawkinematiccharactercontroller_autostepEnabled,lu=g.rawkinematiccharactercontroller_enableAutostep,cu=g.rawkinematiccharactercontroller_disableAutostep,hu=g.rawkinematiccharactercontroller_maxSlopeClimbAngle,uu=g.rawkinematiccharactercontroller_setMaxSlopeClimbAngle,du=g.rawkinematiccharactercontroller_minSlopeSlideAngle,pu=g.rawkinematiccharactercontroller_setMinSlopeSlideAngle,fu=g.rawkinematiccharactercontroller_snapToGroundDistance,mu=g.rawkinematiccharactercontroller_enableSnapToGround,gu=g.rawkinematiccharactercontroller_disableSnapToGround,_u=g.rawkinematiccharactercontroller_snapToGroundEnabled,vu=g.rawkinematiccharactercontroller_computeColliderMovement,zn=g.rawkinematiccharactercontroller_computedMovement,ka=g.rawkinematiccharactercontroller_computedGrounded,wu=g.rawkinematiccharactercontroller_numComputedCollisions,xu=g.rawkinematiccharactercontroller_computedCollision,yu=g.__wbg_rawcharactercollision_free,Su=g.rawcharactercollision_new,rn=g.rawcharactercollision_handle,bu=g.rawcharactercollision_translationApplied,Mu=g.rawcharactercollision_translationRemaining,Zr=g.rawcharactercollision_toi,Bn=g.rawcharactercollision_worldWitness1,Eu=g.rawcharactercollision_worldWitness2,Va=g.rawcharactercollision_worldNormal1,Tu=g.rawcharactercollision_worldNormal2,Ru=g.__wbg_rawccdsolver_free,Au=g.rawccdsolver_new,Cu=g.rawimpulsejointset_jointType,Pu=g.rawimpulsejointset_jointBodyHandle1,Lu=g.rawimpulsejointset_jointBodyHandle2,Iu=g.rawimpulsejointset_jointFrameX1,Du=g.rawimpulsejointset_jointFrameX2,Uu=g.rawimpulsejointset_jointAnchor1,Nu=g.rawimpulsejointset_jointAnchor2,Ou=g.rawimpulsejointset_jointSetAnchor1,Fu=g.rawimpulsejointset_jointSetAnchor2,zu=g.rawimpulsejointset_jointContactsEnabled,Bu=g.rawimpulsejointset_jointSetContactsEnabled,Hu=g.rawimpulsejointset_jointLimitsEnabled,Gu=g.rawimpulsejointset_jointLimitsMin,ku=g.rawimpulsejointset_jointLimitsMax,Vu=g.rawimpulsejointset_jointSetLimits,Wu=g.rawimpulsejointset_jointConfigureMotorModel,ju=g.rawimpulsejointset_jointConfigureMotorVelocity,Xu=g.rawimpulsejointset_jointConfigureMotorPosition,qu=g.rawimpulsejointset_jointConfigureMotor,Yu=g.__wbg_rawimpulsejointset_free,Ku=g.rawimpulsejointset_new,Ju=g.rawimpulsejointset_createJoint,Zu=g.rawimpulsejointset_remove,Qu=g.rawimpulsejointset_len,$u=g.rawimpulsejointset_contains,ed=g.rawimpulsejointset_forEachJointHandle,td=g.rawimpulsejointset_forEachJointAttachedToRigidBody,rd=g.__wbg_rawintegrationparameters_free,id=g.rawintegrationparameters_new,Hn=g.rawintegrationparameters_dt,nd=g.rawintegrationparameters_allowedLinearError,ad=g.rawintegrationparameters_predictionDistance,sd=g.rawintegrationparameters_maxVelocityIterations,od=g.rawintegrationparameters_maxVelocityFrictionIterations,ld=g.rawintegrationparameters_maxStabilizationIterations,cd=g.rawintegrationparameters_minIslandSize,hd=g.rawintegrationparameters_maxCcdSubsteps,bo=g.rawintegrationparameters_set_dt,Mo=g.rawintegrationparameters_set_erp,ud=g.rawintegrationparameters_set_allowedLinearError,dd=g.rawintegrationparameters_set_predictionDistance,pd=g.rawintegrationparameters_set_maxVelocityIterations,fd=g.rawintegrationparameters_set_maxVelocityFrictionIterations,md=g.rawintegrationparameters_set_maxStabilizationIterations,gd=g.rawintegrationparameters_set_minIslandSize,_d=g.rawintegrationparameters_set_maxCcdSubsteps,vd=g.__wbg_rawislandmanager_free,wd=g.rawislandmanager_new,xd=g.rawislandmanager_forEachActiveRigidBodyHandle,yd=g.__wbg_rawgenericjoint_free,Sd=g.rawgenericjoint_spherical,bd=g.rawgenericjoint_prismatic,Md=g.rawgenericjoint_fixed,Ed=g.rawgenericjoint_revolute,Td=g.rawmultibodyjointset_jointType,Rd=g.rawmultibodyjointset_jointFrameX1,Ad=g.rawmultibodyjointset_jointFrameX2,Cd=g.rawmultibodyjointset_jointAnchor1,Pd=g.rawmultibodyjointset_jointAnchor2,Ld=g.rawmultibodyjointset_jointContactsEnabled,Id=g.rawmultibodyjointset_jointSetContactsEnabled,Dd=g.rawmultibodyjointset_jointLimitsEnabled,Ud=g.rawmultibodyjointset_jointLimitsMin,Nd=g.rawmultibodyjointset_jointLimitsMax,Od=g.__wbg_rawmultibodyjointset_free,Fd=g.rawmultibodyjointset_new,zd=g.rawmultibodyjointset_createJoint,Bd=g.rawmultibodyjointset_remove,Hd=g.rawmultibodyjointset_contains,Gd=g.rawmultibodyjointset_forEachJointHandle,kd=g.rawmultibodyjointset_forEachJointAttachedToRigidBody,Vd=g.rawrigidbodyset_rbTranslation,Wd=g.rawrigidbodyset_rbRotation,jd=g.rawrigidbodyset_rbSleep,Xd=g.rawrigidbodyset_rbIsSleeping,qd=g.rawrigidbodyset_rbIsMoving,Yd=g.rawrigidbodyset_rbNextTranslation,Kd=g.rawrigidbodyset_rbNextRotation,Jd=g.rawrigidbodyset_rbSetTranslation,Zd=g.rawrigidbodyset_rbSetRotation,Qd=g.rawrigidbodyset_rbSetLinvel,$d=g.rawrigidbodyset_rbSetAngvel,ep=g.rawrigidbodyset_rbSetNextKinematicTranslation,tp=g.rawrigidbodyset_rbSetNextKinematicRotation,rp=g.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders,ip=g.rawrigidbodyset_rbSetAdditionalMass,np=g.rawrigidbodyset_rbSetAdditionalMassProperties,ap=g.rawrigidbodyset_rbLinvel,sp=g.rawrigidbodyset_rbAngvel,op=g.rawrigidbodyset_rbLockTranslations,lp=g.rawrigidbodyset_rbSetEnabledTranslations,cp=g.rawrigidbodyset_rbLockRotations,hp=g.rawrigidbodyset_rbSetEnabledRotations,up=g.rawrigidbodyset_rbDominanceGroup,dp=g.rawrigidbodyset_rbSetDominanceGroup,pp=g.rawrigidbodyset_rbEnableCcd,fp=g.rawrigidbodyset_rbMass,mp=g.rawrigidbodyset_rbInvMass,gp=g.rawrigidbodyset_rbEffectiveInvMass,_p=g.rawrigidbodyset_rbLocalCom,vp=g.rawrigidbodyset_rbWorldCom,wp=g.rawrigidbodyset_rbInvPrincipalInertiaSqrt,xp=g.rawrigidbodyset_rbPrincipalInertiaLocalFrame,yp=g.rawrigidbodyset_rbPrincipalInertia,Sp=g.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt,bp=g.rawrigidbodyset_rbEffectiveAngularInertia,Mp=g.rawrigidbodyset_rbWakeUp,Ep=g.rawrigidbodyset_rbIsCcdEnabled,Tp=g.rawrigidbodyset_rbNumColliders,Rp=g.rawrigidbodyset_rbCollider,Ap=g.rawrigidbodyset_rbBodyType,Cp=g.rawrigidbodyset_rbSetBodyType,Pp=g.rawrigidbodyset_rbIsFixed,Lp=g.rawrigidbodyset_rbIsKinematic,Ip=g.rawrigidbodyset_rbIsDynamic,Dp=g.rawrigidbodyset_rbLinearDamping,Up=g.rawrigidbodyset_rbAngularDamping,Np=g.rawrigidbodyset_rbSetLinearDamping,Op=g.rawrigidbodyset_rbSetAngularDamping,Fp=g.rawrigidbodyset_rbSetEnabled,zp=g.rawrigidbodyset_rbIsEnabled,Bp=g.rawrigidbodyset_rbGravityScale,Hp=g.rawrigidbodyset_rbSetGravityScale,Gp=g.rawrigidbodyset_rbResetForces,kp=g.rawrigidbodyset_rbResetTorques,Vp=g.rawrigidbodyset_rbAddForce,Wp=g.rawrigidbodyset_rbApplyImpulse,jp=g.rawrigidbodyset_rbAddTorque,Xp=g.rawrigidbodyset_rbApplyTorqueImpulse,qp=g.rawrigidbodyset_rbAddForceAtPoint,Yp=g.rawrigidbodyset_rbApplyImpulseAtPoint,Kp=g.rawrigidbodyset_rbUserData,Jp=g.rawrigidbodyset_rbSetUserData,Zp=g.__wbg_rawrigidbodyset_free,Qp=g.rawrigidbodyset_new,$p=g.rawrigidbodyset_createRigidBody,ef=g.rawrigidbodyset_remove,tf=g.rawrigidbodyset_len,rf=g.rawrigidbodyset_contains,nf=g.rawrigidbodyset_forEachRigidBodyHandle,af=g.rawrigidbodyset_propagateModifiedBodyPositionsToColliders,sf=g.__wbg_rawbroadphase_free,of=g.rawbroadphase_new,lf=g.rawcolliderset_coTranslation,cf=g.rawcolliderset_coRotation,hf=g.rawcolliderset_coSetTranslation,uf=g.rawcolliderset_coSetTranslationWrtParent,df=g.rawcolliderset_coSetRotation,pf=g.rawcolliderset_coSetRotationWrtParent,ff=g.rawcolliderset_coIsSensor,mf=g.rawcolliderset_coShapeType,gf=g.rawcolliderset_coHalfspaceNormal,_f=g.rawcolliderset_coHalfExtents,vf=g.rawcolliderset_coSetHalfExtents,wf=g.rawcolliderset_coRadius,xf=g.rawcolliderset_coSetRadius,yf=g.rawcolliderset_coHalfHeight,Sf=g.rawcolliderset_coSetHalfHeight,bf=g.rawcolliderset_coRoundRadius,Mf=g.rawcolliderset_coSetRoundRadius,Ef=g.rawcolliderset_coVertices,Tf=g.rawcolliderset_coIndices,Rf=g.rawcolliderset_coHeightfieldHeights,Af=g.rawcolliderset_coHeightfieldScale,Cf=g.rawcolliderset_coHeightfieldNRows,Pf=g.rawcolliderset_coHeightfieldNCols,Lf=g.rawcolliderset_coParent,If=g.rawcolliderset_coSetEnabled,Df=g.rawcolliderset_coIsEnabled,Uf=g.rawcolliderset_coFriction,Nf=g.rawcolliderset_coRestitution,Of=g.rawcolliderset_coDensity,Ff=g.rawcolliderset_coMass,zf=g.rawcolliderset_coVolume,Bf=g.rawcolliderset_coCollisionGroups,Hf=g.rawcolliderset_coSolverGroups,Gf=g.rawcolliderset_coActiveHooks,kf=g.rawcolliderset_coActiveCollisionTypes,Vf=g.rawcolliderset_coActiveEvents,Wf=g.rawcolliderset_coContactForceEventThreshold,jf=g.rawcolliderset_coContainsPoint,Xf=g.rawcolliderset_coCastShape,qf=g.rawcolliderset_coCastCollider,Yf=g.rawcolliderset_coIntersectsShape,Kf=g.rawcolliderset_coContactShape,Jf=g.rawcolliderset_coContactCollider,Zf=g.rawcolliderset_coProjectPoint,Qf=g.rawcolliderset_coIntersectsRay,$f=g.rawcolliderset_coCastRay,em=g.rawcolliderset_coCastRayAndGetNormal,tm=g.rawcolliderset_coSetSensor,rm=g.rawcolliderset_coSetRestitution,im=g.rawcolliderset_coSetFriction,nm=g.rawcolliderset_coFrictionCombineRule,am=g.rawcolliderset_coSetFrictionCombineRule,sm=g.rawcolliderset_coRestitutionCombineRule,om=g.rawcolliderset_coSetRestitutionCombineRule,lm=g.rawcolliderset_coSetCollisionGroups,cm=g.rawcolliderset_coSetSolverGroups,hm=g.rawcolliderset_coSetActiveHooks,um=g.rawcolliderset_coSetActiveEvents,dm=g.rawcolliderset_coSetActiveCollisionTypes,pm=g.rawcolliderset_coSetShape,fm=g.rawcolliderset_coSetContactForceEventThreshold,mm=g.rawcolliderset_coSetDensity,gm=g.rawcolliderset_coSetMass,_m=g.rawcolliderset_coSetMassProperties,vm=g.__wbg_rawcolliderset_free,wm=g.rawcolliderset_new,xm=g.rawcolliderset_len,Eo=g.rawcolliderset_contains,ym=g.rawcolliderset_createCollider,Sm=g.rawcolliderset_remove,bm=g.rawcolliderset_forEachColliderHandle,Mm=g.__wbg_rawshapecontact_free,Em=g.rawshapecontact_distance,Tm=g.__wbg_rawnarrowphase_free,Rm=g.rawnarrowphase_new,Am=g.rawnarrowphase_contacts_with,Cm=g.rawnarrowphase_contact_pair,Pm=g.rawnarrowphase_intersections_with,Lm=g.rawnarrowphase_intersection_pair,Im=g.__wbg_rawcontactmanifold_free,Dm=g.rawcontactpair_collider1,Um=g.rawcontactpair_collider2,Nm=g.rawcontactpair_numContactManifolds,Om=g.rawcontactpair_contactManifold,Fm=g.rawcontactmanifold_normal,zm=g.rawcontactmanifold_local_n1,Bm=g.rawcontactmanifold_local_n2,Hm=g.rawcontactmanifold_subshape1,Gm=g.rawcontactmanifold_subshape2,km=g.rawcontactmanifold_num_contacts,Vm=g.rawcontactmanifold_contact_local_p1,Wm=g.rawcontactmanifold_contact_local_p2,jm=g.rawcontactmanifold_contact_dist,Xm=g.rawcontactmanifold_contact_fid1,qm=g.rawcontactmanifold_contact_fid2,Ym=g.rawcontactmanifold_contact_impulse,Km=g.rawcontactmanifold_contact_tangent_impulse_x,Jm=g.rawcontactmanifold_contact_tangent_impulse_y,Zm=g.rawcontactmanifold_num_solver_contacts,Qm=g.rawcontactmanifold_solver_contact_point,$m=g.rawcontactmanifold_solver_contact_dist,eg=g.rawcontactmanifold_solver_contact_friction,tg=g.rawcontactmanifold_solver_contact_restitution,rg=g.rawcontactmanifold_solver_contact_tangent_velocity,ig=g.__wbg_rawpointprojection_free,ng=g.__wbg_rawpointcolliderprojection_free,ag=g.rawpointcolliderprojection_colliderHandle,sg=g.rawpointcolliderprojection_featureType,og=g.rawpointcolliderprojection_featureId,lg=g.__wbg_rawrayintersection_free,cg=g.rawrayintersection_featureType,hg=g.rawrayintersection_featureId,ug=g.rawraycolliderintersection_normal,dg=g.rawraycolliderintersection_toi,pg=g.rawraycolliderintersection_featureType,fg=g.rawraycolliderintersection_featureId,mg=g.__wbg_rawraycollidertoi_free,gg=g.__wbg_rawshape_free,_g=g.rawshape_cuboid,vg=g.rawshape_roundCuboid,wg=g.rawshape_ball,xg=g.rawshape_halfspace,yg=g.rawshape_capsule,Sg=g.rawshape_cylinder,bg=g.rawshape_roundCylinder,Mg=g.rawshape_cone,Eg=g.rawshape_roundCone,Tg=g.rawshape_polyline,Rg=g.rawshape_trimesh,Ag=g.rawshape_heightfield,Cg=g.rawshape_segment,Pg=g.rawshape_triangle,Lg=g.rawshape_roundTriangle,Ig=g.rawshape_convexHull,Dg=g.rawshape_roundConvexHull,Ug=g.rawshape_convexMesh,Ng=g.rawshape_roundConvexMesh,Og=g.rawshape_castShape,Fg=g.rawshape_intersectsShape,zg=g.rawshape_contactShape,Bg=g.rawshape_containsPoint,Hg=g.rawshape_projectPoint,Gg=g.rawshape_intersectsRay,kg=g.rawshape_castRay,Vg=g.rawshape_castRayAndGetNormal,Wg=g.__wbg_rawshapetoi_free,jg=g.rawshapetoi_witness1,Xg=g.rawshapetoi_normal1,qg=g.rawshapetoi_normal2,Yg=g.__wbg_rawshapecollidertoi_free,To=g.rawshapecollidertoi_witness2,Kg=g.rawshapecollidertoi_normal2,Jg=g.rawrotation_new,Zg=g.rawrotation_identity,Ro=g.rawrotation_y,Qg=g.rawrotation_w,$g=g.rawvector_zero,e_=g.rawvector_new,t_=g.rawvector_set_y,r_=g.rawvector_xyz,i_=g.rawvector_yxz,n_=g.rawvector_zxy,a_=g.rawvector_xzy,s_=g.rawvector_yzx,o_=g.rawvector_zyx,l_=g.rawsdpmatrix3_elements,c_=g.__wbg_rawdebugrenderpipeline_free,h_=g.rawdebugrenderpipeline_new,u_=g.rawdebugrenderpipeline_vertices,d_=g.rawdebugrenderpipeline_colors,p_=g.rawdebugrenderpipeline_render,f_=g.__wbg_raweventqueue_free,m_=g.__wbg_rawcontactforceevent_free,g_=g.rawcontactforceevent_collider2,Ao=g.rawcontactforceevent_total_force,__=g.rawcontactforceevent_total_force_magnitude,v_=g.rawcontactforceevent_max_force_direction,w_=g.rawcontactforceevent_max_force_magnitude,x_=g.raweventqueue_new,y_=g.raweventqueue_drainCollisionEvents,S_=g.raweventqueue_drainContactForceEvents,b_=g.raweventqueue_clear,M_=g.__wbg_rawphysicspipeline_free,E_=g.rawphysicspipeline_new,T_=g.rawphysicspipeline_step,R_=g.rawphysicspipeline_stepWithEvents,A_=g.__wbg_rawquerypipeline_free,C_=g.rawquerypipeline_new,P_=g.rawquerypipeline_update,L_=g.rawquerypipeline_castRay,I_=g.rawquerypipeline_castRayAndGetNormal,D_=g.rawquerypipeline_intersectionsWithRay,U_=g.rawquerypipeline_intersectionWithShape,N_=g.rawquerypipeline_projectPoint,O_=g.rawquerypipeline_projectPointAndGetFeature,F_=g.rawquerypipeline_intersectionsWithPoint,z_=g.rawquerypipeline_castShape,B_=g.rawquerypipeline_intersectionsWithShape,H_=g.rawquerypipeline_collidersWithAabbIntersectingAabb,G_=g.__wbg_rawdeserializedworld_free,k_=g.rawdeserializedworld_takeGravity,V_=g.rawdeserializedworld_takeIntegrationParameters,W_=g.rawdeserializedworld_takeIslandManager,j_=g.rawdeserializedworld_takeBroadPhase,X_=g.rawdeserializedworld_takeNarrowPhase,q_=g.rawdeserializedworld_takeBodies,Y_=g.rawdeserializedworld_takeColliders,K_=g.rawdeserializedworld_takeImpulseJoints,J_=g.rawdeserializedworld_takeMultibodyJoints,Z_=g.rawserializationpipeline_serializeAll,Q_=g.rawserializationpipeline_deserializeAll,$_=g.__wbg_rawcontactpair_free,ev=g.__wbg_rawraycolliderintersection_free,tv=g.__wbg_rawrotation_free,rv=g.__wbg_rawvector_free,iv=g.__wbg_rawsdpmatrix3_free;g.rawvector_set_x,g.rawvector_set_z,g.rawpointprojection_isInside,g.rawpointcolliderprojection_isInside,g.rawcolliderset_isHandleValid,g.rawshapecontact_point1,g.rawshapecontact_point2,g.rawshapecontact_normal2,g.rawpointprojection_point,g.rawpointcolliderprojection_point,g.rawrayintersection_normal,g.rawshapecollidertoi_witness1,g.rawshapecontact_normal1,g.rawshapecollidertoi_normal1,g.rawshapetoi_witness2;const nv=g.rawserializationpipeline_new;g.rawintegrationparameters_erp,g.rawrayintersection_toi,g.rawraycollidertoi_toi,g.rawshapetoi_toi,g.rawshapecollidertoi_toi,g.rawrotation_x,g.rawrotation_z,g.rawvector_x,g.rawvector_y,g.rawvector_z,g.rawraycolliderintersection_colliderHandle,g.rawraycollidertoi_colliderHandle,g.rawshapecollidertoi_colliderHandle,g.rawcontactforceevent_collider1;const av=g.__wbg_rawserializationpipeline_free,Ke=g.__wbindgen_add_to_stack_pointer,Gn=g.__wbindgen_free,er=g.__wbindgen_malloc,sv=g.__wbindgen_exn_store;let Co=class{constructor(i,e,t){this.x=i,this.y=e,this.z=t}};class D{static new(e,t,r){return new Co(e,t,r)}static intoRaw(e){return new N(e.x,e.y,e.z)}static zeros(){return D.new(0,0,0)}static fromRaw(e){if(!e)return null;let t=D.new(e.x,e.y,e.z);return e.free(),t}static copy(e,t){e.x=t.x,e.y=t.y,e.z=t.z}}let Wa=class{constructor(i,e,t,r){this.x=i,this.y=e,this.z=t,this.w=r}};class Be{static identity(){return new Wa(0,0,0,1)}static fromRaw(e){if(!e)return null;let t=new Wa(e.x,e.y,e.z,e.w);return e.free(),t}static intoRaw(e){return new je(e.x,e.y,e.z,e.w)}static copy(e,t){e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w}}class Po{constructor(e){this.elements=e}get m11(){return this.elements[0]}get m12(){return this.elements[1]}get m21(){return this.m12}get m13(){return this.elements[2]}get m31(){return this.m13}get m22(){return this.elements[3]}get m23(){return this.elements[4]}get m32(){return this.m23}get m33(){return this.elements[5]}}class ja{static fromRaw(e){const t=new Po(e.elements());return e.free(),t}}var tr;(function(i){i[i.Dynamic=0]="Dynamic",i[i.Fixed=1]="Fixed",i[i.KinematicPositionBased=2]="KinematicPositionBased",i[i.KinematicVelocityBased=3]="KinematicVelocityBased"})(tr||(tr={}));class Xa{constructor(e,t,r){this.rawSet=e,this.colliderSet=t,this.handle=r}finalizeDeserialization(e){this.colliderSet=e}isValid(){return this.rawSet.contains(this.handle)}lockTranslations(e,t){return this.rawSet.rbLockTranslations(this.handle,e,t)}lockRotations(e,t){return this.rawSet.rbLockRotations(this.handle,e,t)}setEnabledTranslations(e,t,r,n){return this.rawSet.rbSetEnabledTranslations(this.handle,e,t,r,n)}restrictTranslations(e,t,r,n){this.setEnabledTranslations(e,t,r,n)}setEnabledRotations(e,t,r,n){return this.rawSet.rbSetEnabledRotations(this.handle,e,t,r,n)}restrictRotations(e,t,r,n){this.setEnabledRotations(e,t,r,n)}dominanceGroup(){return this.rawSet.rbDominanceGroup(this.handle)}setDominanceGroup(e){this.rawSet.rbSetDominanceGroup(this.handle,e)}enableCcd(e){this.rawSet.rbEnableCcd(this.handle,e)}translation(){let e=this.rawSet.rbTranslation(this.handle);return D.fromRaw(e)}rotation(){let e=this.rawSet.rbRotation(this.handle);return Be.fromRaw(e)}nextTranslation(){let e=this.rawSet.rbNextTranslation(this.handle);return D.fromRaw(e)}nextRotation(){let e=this.rawSet.rbNextRotation(this.handle);return Be.fromRaw(e)}setTranslation(e,t){this.rawSet.rbSetTranslation(this.handle,e.x,e.y,e.z,t)}setLinvel(e,t){let r=D.intoRaw(e);this.rawSet.rbSetLinvel(this.handle,r,t),r.free()}gravityScale(){return this.rawSet.rbGravityScale(this.handle)}setGravityScale(e,t){this.rawSet.rbSetGravityScale(this.handle,e,t)}setRotation(e,t){this.rawSet.rbSetRotation(this.handle,e.x,e.y,e.z,e.w,t)}setAngvel(e,t){let r=D.intoRaw(e);this.rawSet.rbSetAngvel(this.handle,r,t),r.free()}setNextKinematicTranslation(e){this.rawSet.rbSetNextKinematicTranslation(this.handle,e.x,e.y,e.z)}setNextKinematicRotation(e){this.rawSet.rbSetNextKinematicRotation(this.handle,e.x,e.y,e.z,e.w)}linvel(){return D.fromRaw(this.rawSet.rbLinvel(this.handle))}angvel(){return D.fromRaw(this.rawSet.rbAngvel(this.handle))}mass(){return this.rawSet.rbMass(this.handle)}effectiveInvMass(){return D.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle))}invMass(){return this.rawSet.rbInvMass(this.handle)}localCom(){return D.fromRaw(this.rawSet.rbLocalCom(this.handle))}worldCom(){return D.fromRaw(this.rawSet.rbWorldCom(this.handle))}invPrincipalInertiaSqrt(){return D.fromRaw(this.rawSet.rbInvPrincipalInertiaSqrt(this.handle))}principalInertia(){return D.fromRaw(this.rawSet.rbPrincipalInertia(this.handle))}principalInertiaLocalFrame(){return Be.fromRaw(this.rawSet.rbPrincipalInertiaLocalFrame(this.handle))}effectiveWorldInvInertiaSqrt(){return ja.fromRaw(this.rawSet.rbEffectiveWorldInvInertiaSqrt(this.handle))}effectiveAngularInertia(){return ja.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle))}sleep(){this.rawSet.rbSleep(this.handle)}wakeUp(){this.rawSet.rbWakeUp(this.handle)}isCcdEnabled(){return this.rawSet.rbIsCcdEnabled(this.handle)}numColliders(){return this.rawSet.rbNumColliders(this.handle)}collider(e){return this.colliderSet.get(this.rawSet.rbCollider(this.handle,e))}setEnabled(e){this.rawSet.rbSetEnabled(this.handle,e)}isEnabled(){return this.rawSet.rbIsEnabled(this.handle)}bodyType(){return this.rawSet.rbBodyType(this.handle)}setBodyType(e,t){return this.rawSet.rbSetBodyType(this.handle,e,t)}isSleeping(){return this.rawSet.rbIsSleeping(this.handle)}isMoving(){return this.rawSet.rbIsMoving(this.handle)}isFixed(){return this.rawSet.rbIsFixed(this.handle)}isKinematic(){return this.rawSet.rbIsKinematic(this.handle)}isDynamic(){return this.rawSet.rbIsDynamic(this.handle)}linearDamping(){return this.rawSet.rbLinearDamping(this.handle)}angularDamping(){return this.rawSet.rbAngularDamping(this.handle)}setLinearDamping(e){this.rawSet.rbSetLinearDamping(this.handle,e)}recomputeMassPropertiesFromColliders(){this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle,this.colliderSet.raw)}setAdditionalMass(e,t){this.rawSet.rbSetAdditionalMass(this.handle,e,t)}setAdditionalMassProperties(e,t,r,n,a){let o=D.intoRaw(t),s=D.intoRaw(r),l=Be.intoRaw(n);this.rawSet.rbSetAdditionalMassProperties(this.handle,e,o,s,l,a),o.free(),s.free(),l.free()}setAngularDamping(e){this.rawSet.rbSetAngularDamping(this.handle,e)}resetForces(e){this.rawSet.rbResetForces(this.handle,e)}resetTorques(e){this.rawSet.rbResetTorques(this.handle,e)}addForce(e,t){const r=D.intoRaw(e);this.rawSet.rbAddForce(this.handle,r,t),r.free()}applyImpulse(e,t){const r=D.intoRaw(e);this.rawSet.rbApplyImpulse(this.handle,r,t),r.free()}addTorque(e,t){const r=D.intoRaw(e);this.rawSet.rbAddTorque(this.handle,r,t),r.free()}applyTorqueImpulse(e,t){const r=D.intoRaw(e);this.rawSet.rbApplyTorqueImpulse(this.handle,r,t),r.free()}addForceAtPoint(e,t,r){const n=D.intoRaw(e),a=D.intoRaw(t);this.rawSet.rbAddForceAtPoint(this.handle,n,a,r),n.free(),a.free()}applyImpulseAtPoint(e,t,r){const n=D.intoRaw(e),a=D.intoRaw(t);this.rawSet.rbApplyImpulseAtPoint(this.handle,n,a,r),n.free(),a.free()}}class ur{constructor(e){this.enabled=!0,this.status=e,this.translation=D.zeros(),this.rotation=Be.identity(),this.gravityScale=1,this.linvel=D.zeros(),this.mass=0,this.massOnly=!1,this.centerOfMass=D.zeros(),this.translationsEnabledX=!0,this.translationsEnabledY=!0,this.angvel=D.zeros(),this.principalAngularInertia=D.zeros(),this.angularInertiaLocalFrame=Be.identity(),this.translationsEnabledZ=!0,this.rotationsEnabledX=!0,this.rotationsEnabledY=!0,this.rotationsEnabledZ=!0,this.linearDamping=0,this.angularDamping=0,this.canSleep=!0,this.sleeping=!1,this.ccdEnabled=!1,this.dominanceGroup=0}static dynamic(){return new ur(tr.Dynamic)}static kinematicPositionBased(){return new ur(tr.KinematicPositionBased)}static kinematicVelocityBased(){return new ur(tr.KinematicVelocityBased)}static fixed(){return new ur(tr.Fixed)}static newDynamic(){return new ur(tr.Dynamic)}static newKinematicPositionBased(){return new ur(tr.KinematicPositionBased)}static newKinematicVelocityBased(){return new ur(tr.KinematicVelocityBased)}static newStatic(){return new ur(tr.Fixed)}setDominanceGroup(e){return this.dominanceGroup=e,this}setEnabled(e){return this.enabled=e,this}setTranslation(e,t,r){if(typeof e!="number"||typeof t!="number"||typeof r!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:e,y:t,z:r},this}setRotation(e){return Be.copy(this.rotation,e),this}setGravityScale(e){return this.gravityScale=e,this}setAdditionalMass(e){return this.mass=e,this.massOnly=!0,this}setLinvel(e,t,r){if(typeof e!="number"||typeof t!="number"||typeof r!="number")throw TypeError("The linvel components must be numbers.");return this.linvel={x:e,y:t,z:r},this}setAngvel(e){return D.copy(this.angvel,e),this}setAdditionalMassProperties(e,t,r,n){return this.mass=e,D.copy(this.centerOfMass,t),D.copy(this.principalAngularInertia,r),Be.copy(this.angularInertiaLocalFrame,n),this.massOnly=!1,this}enabledTranslations(e,t,r){return this.translationsEnabledX=e,this.translationsEnabledY=t,this.translationsEnabledZ=r,this}restrictTranslations(e,t,r){return this.enabledTranslations(e,t,r)}lockTranslations(){return this.enabledTranslations(!1,!1,!1)}enabledRotations(e,t,r){return this.rotationsEnabledX=e,this.rotationsEnabledY=t,this.rotationsEnabledZ=r,this}restrictRotations(e,t,r){return this.enabledRotations(e,t,r)}lockRotations(){return this.restrictRotations(!1,!1,!1)}setLinearDamping(e){return this.linearDamping=e,this}setAngularDamping(e){return this.angularDamping=e,this}setCanSleep(e){return this.canSleep=e,this}setSleeping(e){return this.sleeping=e,this}setCcdEnabled(e){return this.ccdEnabled=e,this}setUserData(e){return this.userData=e,this}}class kn{constructor(){this.fconv=new Float64Array(1),this.uconv=new Uint32Array(this.fconv.buffer),this.data=new Array,this.size=0}set(e,t){let r=this.index(e);for(;this.data.length<=r;)this.data.push(null);this.data[r]==null&&(this.size+=1),this.data[r]=t}len(){return this.size}delete(e){let t=this.index(e);t<this.data.length&&(this.data[t]!=null&&(this.size-=1),this.data[t]=null)}clear(){this.data=new Array}get(e){let t=this.index(e);return t<this.data.length?this.data[t]:null}forEach(e){for(const t of this.data)t!=null&&e(t)}getAll(){return this.data.filter(e=>e!=null)}index(e){return this.fconv[0]=e,this.uconv[0]}}class Lo{constructor(e){this.raw=e||new pt,this.map=new kn,e&&e.forEachRigidBodyHandle(t=>{this.map.set(t,new Xa(e,null,t))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}finalizeDeserialization(e){this.map.forEach(t=>t.finalizeDeserialization(e))}createRigidBody(e,t){let r=D.intoRaw(t.translation),n=Be.intoRaw(t.rotation),a=D.intoRaw(t.linvel),o=D.intoRaw(t.centerOfMass),s=D.intoRaw(t.angvel),l=D.intoRaw(t.principalAngularInertia),c=Be.intoRaw(t.angularInertiaLocalFrame),h=this.raw.createRigidBody(t.enabled,r,n,t.gravityScale,t.mass,t.massOnly,o,a,s,l,c,t.translationsEnabledX,t.translationsEnabledY,t.translationsEnabledZ,t.rotationsEnabledX,t.rotationsEnabledY,t.rotationsEnabledZ,t.linearDamping,t.angularDamping,t.status,t.canSleep,t.sleeping,t.ccdEnabled,t.dominanceGroup);r.free(),n.free(),a.free(),o.free(),s.free(),l.free(),c.free();const u=new Xa(this.raw,e,h);return u.userData=t.userData,this.map.set(h,u),u}remove(e,t,r,n,a){for(let o=0;o<this.raw.rbNumColliders(e);o+=1)r.unmap(this.raw.rbCollider(e,o));n.forEachJointHandleAttachedToRigidBody(e,o=>n.unmap(o)),a.forEachJointHandleAttachedToRigidBody(e,o=>a.unmap(o)),this.raw.remove(e,t.raw,r.raw,n.raw,a.raw),this.map.delete(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}get(e){return this.map.get(e)}forEach(e){this.map.forEach(e)}forEachActiveRigidBody(e,t){e.forEachActiveRigidBodyHandle(r=>{t(this.get(r))})}getAll(){return this.map.getAll()}}class Io{constructor(e){this.raw=e||new Ir}free(){this.raw&&this.raw.free(),this.raw=void 0}get dt(){return this.raw.dt}get erp(){return this.raw.erp}get allowedLinearError(){return this.raw.allowedLinearError}get predictionDistance(){return this.raw.predictionDistance}get maxVelocityIterations(){return this.raw.maxVelocityIterations}get maxVelocityFrictionIterations(){return this.raw.maxVelocityFrictionIterations}get maxStabilizationIterations(){return this.raw.maxStabilizationIterations}get minIslandSize(){return this.raw.minIslandSize}get maxCcdSubsteps(){return this.raw.maxCcdSubsteps}set dt(e){this.raw.dt=e}set erp(e){this.raw.erp=e}set allowedLinearError(e){this.raw.allowedLinearError=e}set predictionDistance(e){this.raw.predictionDistance=e}set maxVelocityIterations(e){this.raw.maxVelocityIterations=e}set maxVelocityFrictionIterations(e){this.raw.maxVelocityFrictionIterations=e}set maxStabilizationIterations(e){this.raw.maxStabilizationIterations=e}set minIslandSize(e){this.raw.minIslandSize=e}set maxCcdSubsteps(e){this.raw.maxCcdSubsteps=e}}var wt;(function(i){i[i.Revolute=0]="Revolute",i[i.Fixed=1]="Fixed",i[i.Prismatic=2]="Prismatic",i[i.Spherical=3]="Spherical"})(wt||(wt={}));var qa;(function(i){i[i.AccelerationBased=0]="AccelerationBased",i[i.ForceBased=1]="ForceBased"})(qa||(qa={}));class Dr{constructor(e,t,r){this.rawSet=e,this.bodySet=t,this.handle=r}static newTyped(e,t,r){switch(e.jointType(r)){case wt.Revolute:return new No(e,t,r);case wt.Prismatic:return new Uo(e,t,r);case wt.Fixed:return new Do(e,t,r);case wt.Spherical:return new Oo(e,t,r);default:return new Dr(e,t,r)}}finalizeDeserialization(e){this.bodySet=e}isValid(){return this.rawSet.contains(this.handle)}body1(){return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle))}body2(){return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle))}type(){return this.rawSet.jointType(this.handle)}frameX1(){return Be.fromRaw(this.rawSet.jointFrameX1(this.handle))}frameX2(){return Be.fromRaw(this.rawSet.jointFrameX2(this.handle))}anchor1(){return D.fromRaw(this.rawSet.jointAnchor1(this.handle))}anchor2(){return D.fromRaw(this.rawSet.jointAnchor2(this.handle))}setAnchor1(e){const t=D.intoRaw(e);this.rawSet.jointSetAnchor1(this.handle,t),t.free()}setAnchor2(e){const t=D.intoRaw(e);this.rawSet.jointSetAnchor2(this.handle,t),t.free()}setContactsEnabled(e){this.rawSet.jointSetContactsEnabled(this.handle,e)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class Ya extends Dr{limitsEnabled(){return this.rawSet.jointLimitsEnabled(this.handle,this.rawAxis())}limitsMin(){return this.rawSet.jointLimitsMin(this.handle,this.rawAxis())}limitsMax(){return this.rawSet.jointLimitsMax(this.handle,this.rawAxis())}setLimits(e,t){this.rawSet.jointSetLimits(this.handle,this.rawAxis(),e,t)}configureMotorModel(e){this.rawSet.jointConfigureMotorModel(this.handle,this.rawAxis(),e)}configureMotorVelocity(e,t){this.rawSet.jointConfigureMotorVelocity(this.handle,this.rawAxis(),e,t)}configureMotorPosition(e,t,r){this.rawSet.jointConfigureMotorPosition(this.handle,this.rawAxis(),e,t,r)}configureMotor(e,t,r,n){this.rawSet.jointConfigureMotor(this.handle,this.rawAxis(),e,t,r,n)}}class Do extends Dr{}class Uo extends Ya{rawAxis(){return Tn.X}}class No extends Ya{rawAxis(){return Tn.AngX}}class Oo extends Dr{}class gi{constructor(){}static fixed(e,t,r,n){let a=new gi;return a.anchor1=e,a.anchor2=r,a.frame1=t,a.frame2=n,a.jointType=wt.Fixed,a}static spherical(e,t){let r=new gi;return r.anchor1=e,r.anchor2=t,r.jointType=wt.Spherical,r}static prismatic(e,t,r){let n=new gi;return n.anchor1=e,n.anchor2=t,n.axis=r,n.jointType=wt.Prismatic,n}static revolute(e,t,r){let n=new gi;return n.anchor1=e,n.anchor2=t,n.axis=r,n.jointType=wt.Revolute,n}intoRaw(){let e=D.intoRaw(this.anchor1),t=D.intoRaw(this.anchor2),r,n,a=!1,o=0,s=0;switch(this.jointType){case wt.Fixed:let l=Be.intoRaw(this.frame1),c=Be.intoRaw(this.frame2);n=Xt.fixed(e,l,t,c),l.free(),c.free();break;case wt.Prismatic:r=D.intoRaw(this.axis),this.limitsEnabled&&(a=!0,o=this.limits[0],s=this.limits[1]),n=Xt.prismatic(e,t,r,a,o,s),r.free();break;case wt.Spherical:n=Xt.spherical(e,t);break;case wt.Revolute:r=D.intoRaw(this.axis),n=Xt.revolute(e,t,r),r.free();break}return e.free(),t.free(),n}}class Fo{constructor(e){this.raw=e||new lr,this.map=new kn,e&&e.forEachJointHandle(t=>{this.map.set(t,Dr.newTyped(e,null,t))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}finalizeDeserialization(e){this.map.forEach(t=>t.finalizeDeserialization(e))}createJoint(e,t,r,n,a){const o=t.intoRaw(),s=this.raw.createJoint(o,r,n,a);o.free();let l=Dr.newTyped(this.raw,e,s);return this.map.set(s,l),l}remove(e,t){this.raw.remove(e,t),this.unmap(e)}forEachJointHandleAttachedToRigidBody(e,t){this.raw.forEachJointAttachedToRigidBody(e,t)}unmap(e){this.map.delete(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}get(e){return this.map.get(e)}forEach(e){this.map.forEach(e)}getAll(){return this.map.getAll()}}class Ur{constructor(e,t){this.rawSet=e,this.handle=t}static newTyped(e,t){switch(e.jointType(t)){case wt.Revolute:return new Ho(e,t);case wt.Prismatic:return new Bo(e,t);case wt.Fixed:return new zo(e,t);case wt.Spherical:return new Go(e,t);default:return new Ur(e,t)}}isValid(){return this.rawSet.contains(this.handle)}setContactsEnabled(e){this.rawSet.jointSetContactsEnabled(this.handle,e)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class Ka extends Ur{}class zo extends Ur{}class Bo extends Ka{rawAxis(){return Tn.X}}class Ho extends Ka{rawAxis(){return Tn.AngX}}class Go extends Ur{}class ko{constructor(e){this.raw=e||new hr,this.map=new kn,e&&e.forEachJointHandle(t=>{this.map.set(t,Ur.newTyped(this.raw,t))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}createJoint(e,t,r,n){const a=e.intoRaw(),o=this.raw.createJoint(a,t,r,n);a.free();let s=Ur.newTyped(this.raw,o);return this.map.set(o,s),s}remove(e,t){this.raw.remove(e,t),this.map.delete(e)}unmap(e){this.map.delete(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}get(e){return this.map.get(e)}forEach(e){this.map.forEach(e)}forEachJointHandleAttachedToRigidBody(e,t){this.raw.forEachJointAttachedToRigidBody(e,t)}getAll(){return this.map.getAll()}}var nn;(function(i){i[i.Average=0]="Average",i[i.Min=1]="Min",i[i.Multiply=2]="Multiply",i[i.Max=3]="Max"})(nn||(nn={}));class Vo{constructor(e){this.raw=e||new fi}free(){this.raw&&this.raw.free(),this.raw=void 0}}class Wo{constructor(e){this.raw=e||new cr}free(){this.raw&&this.raw.free(),this.raw=void 0}forEachActiveRigidBodyHandle(e){this.raw.forEachActiveRigidBodyHandle(e)}}class jo{constructor(e){this.raw=e||new Lr}free(){this.raw&&this.raw.free(),this.raw=void 0}}class Xo{constructor(e){this.raw=e||new _r,this.tempManifold=new qo(null)}free(){this.raw&&this.raw.free(),this.raw=void 0}contactsWith(e,t){this.raw.contacts_with(e,t)}intersectionsWith(e,t){this.raw.intersections_with(e,t)}contactPair(e,t,r){const n=this.raw.contact_pair(e,t);if(n){const a=n.collider1()!=e;let o;for(o=0;o<n.numContactManifolds();++o)this.tempManifold.raw=n.contactManifold(o),this.tempManifold.raw&&r(this.tempManifold,a),this.tempManifold.free();n.free()}}intersectionPair(e,t){return this.raw.intersection_pair(e,t)}}class qo{constructor(e){this.raw=e}free(){this.raw&&this.raw.free(),this.raw=void 0}normal(){return D.fromRaw(this.raw.normal())}localNormal1(){return D.fromRaw(this.raw.local_n1())}localNormal2(){return D.fromRaw(this.raw.local_n2())}subshape1(){return this.raw.subshape1()}subshape2(){return this.raw.subshape2()}numContacts(){return this.raw.num_contacts()}localContactPoint1(e){return D.fromRaw(this.raw.contact_local_p1(e))}localContactPoint2(e){return D.fromRaw(this.raw.contact_local_p2(e))}contactDist(e){return this.raw.contact_dist(e)}contactFid1(e){return this.raw.contact_fid1(e)}contactFid2(e){return this.raw.contact_fid2(e)}contactImpulse(e){return this.raw.contact_impulse(e)}contactTangentImpulseX(e){return this.raw.contact_tangent_impulse_x(e)}contactTangentImpulseY(e){return this.raw.contact_tangent_impulse_y(e)}numSolverContacts(){return this.raw.num_solver_contacts()}solverContactPoint(e){return D.fromRaw(this.raw.solver_contact_point(e))}solverContactDist(e){return this.raw.solver_contact_dist(e)}solverContactFriction(e){return this.raw.solver_contact_friction(e)}solverContactRestitution(e){return this.raw.solver_contact_restitution(e)}solverContactTangentVelocity(e){return D.fromRaw(this.raw.solver_contact_tangent_velocity(e))}}class _i{constructor(e,t,r,n,a){this.distance=e,this.point1=t,this.point2=r,this.normal1=n,this.normal2=a}static fromRaw(e){if(!e)return null;const t=new _i(e.distance(),D.fromRaw(e.point1()),D.fromRaw(e.point2()),D.fromRaw(e.normal1()),D.fromRaw(e.normal2()));return e.free(),t}}var vi;(function(i){i[i.Vertex=0]="Vertex",i[i.Edge=1]="Edge",i[i.Face=2]="Face",i[i.Unknown=3]="Unknown"})(vi||(vi={}));class an{constructor(e,t){this.point=e,this.isInside=t}static fromRaw(e){if(!e)return null;const t=new an(D.fromRaw(e.point()),e.isInside());return e.free(),t}}class sn{constructor(e,t,r,n,a){this.featureType=vi.Unknown,this.featureId=void 0,this.collider=e,this.point=t,this.isInside=r,a!==void 0&&(this.featureId=a),n!==void 0&&(this.featureType=n)}static fromRaw(e,t){if(!t)return null;const r=new sn(e.get(t.colliderHandle()),D.fromRaw(t.point()),t.isInside(),t.featureType(),t.featureId());return t.free(),r}}let ov=class{constructor(i,e){this.origin=i,this.dir=e}pointAt(i){return{x:this.origin.x+this.dir.x*i,y:this.origin.y+this.dir.y*i,z:this.origin.z+this.dir.z*i}}};class on{constructor(e,t,r,n){this.featureType=vi.Unknown,this.featureId=void 0,this.toi=e,this.normal=t,n!==void 0&&(this.featureId=n),r!==void 0&&(this.featureType=r)}static fromRaw(e){if(!e)return null;const t=new on(e.toi(),D.fromRaw(e.normal()),e.featureType(),e.featureId());return e.free(),t}}class ln{constructor(e,t,r,n,a){this.featureType=vi.Unknown,this.featureId=void 0,this.collider=e,this.toi=t,this.normal=r,a!==void 0&&(this.featureId=a),n!==void 0&&(this.featureType=n)}static fromRaw(e,t){if(!t)return null;const r=new ln(e.get(t.colliderHandle()),t.toi(),D.fromRaw(t.normal()),t.featureType(),t.featureId());return t.free(),r}}class Vn{constructor(e,t){this.collider=e,this.toi=t}static fromRaw(e,t){if(!t)return null;const r=new Vn(e.get(t.colliderHandle()),t.toi());return t.free(),r}}class wi{constructor(e,t,r,n,a){this.toi=e,this.witness1=t,this.witness2=r,this.normal1=n,this.normal2=a}static fromRaw(e,t){if(!t)return null;const r=new wi(t.toi(),D.fromRaw(t.witness1()),D.fromRaw(t.witness2()),D.fromRaw(t.normal1()),D.fromRaw(t.normal2()));return t.free(),r}}class cn extends wi{constructor(e,t,r,n,a,o){super(t,r,n,a,o),this.collider=e}static fromRaw(e,t){if(!t)return null;const r=new cn(e.get(t.colliderHandle()),t.toi(),D.fromRaw(t.witness1()),D.fromRaw(t.witness2()),D.fromRaw(t.normal1()),D.fromRaw(t.normal2()));return t.free(),r}}class xt{static fromRaw(e,t){const r=e.coShapeType(t);let n,a,o,s,l,c,h;switch(r){case Ye.Ball:return new Ja(e.coRadius(t));case Ye.Cuboid:return n=e.coHalfExtents(t),new Za(n.x,n.y,n.z);case Ye.RoundCuboid:return n=e.coHalfExtents(t),a=e.coRoundRadius(t),new Qa(n.x,n.y,n.z,a);case Ye.Capsule:return l=e.coHalfHeight(t),c=e.coRadius(t),new $a(l,c);case Ye.Segment:return o=e.coVertices(t),new es(D.new(o[0],o[1],o[2]),D.new(o[3],o[4],o[5]));case Ye.Polyline:return o=e.coVertices(t),s=e.coIndices(t),new is(o,s);case Ye.Triangle:return o=e.coVertices(t),new ts(D.new(o[0],o[1],o[2]),D.new(o[3],o[4],o[5]),D.new(o[6],o[7],o[8]));case Ye.RoundTriangle:return o=e.coVertices(t),a=e.coRoundRadius(t),new rs(D.new(o[0],o[1],o[2]),D.new(o[3],o[4],o[5]),D.new(o[6],o[7],o[8]),a);case Ye.HalfSpace:return h=D.fromRaw(e.coHalfspaceNormal(t)),new Yo(h);case Ye.TriMesh:return o=e.coVertices(t),s=e.coIndices(t),new ns(o,s);case Ye.HeightField:const u=e.coHeightfieldScale(t),d=e.coHeightfieldHeights(t),m=e.coHeightfieldNRows(t),_=e.coHeightfieldNCols(t);return new as(m,_,d,u);case Ye.ConvexPolyhedron:return o=e.coVertices(t),s=e.coIndices(t),new Wn(o,s);case Ye.RoundConvexPolyhedron:return o=e.coVertices(t),s=e.coIndices(t),a=e.coRoundRadius(t),new jn(o,s,a);case Ye.Cylinder:return l=e.coHalfHeight(t),c=e.coRadius(t),new ss(l,c);case Ye.RoundCylinder:return l=e.coHalfHeight(t),c=e.coRadius(t),a=e.coRoundRadius(t),new os(l,c,a);case Ye.Cone:return l=e.coHalfHeight(t),c=e.coRadius(t),new ls(l,c);case Ye.RoundCone:return l=e.coHalfHeight(t),c=e.coRadius(t),a=e.coRoundRadius(t),new cs(l,c,a);default:throw new Error("unknown shape type: "+r)}}castShape(e,t,r,n,a,o,s,l,c){let h=D.intoRaw(e),u=Be.intoRaw(t),d=D.intoRaw(r),m=D.intoRaw(a),_=Be.intoRaw(o),v=D.intoRaw(s),f=this.intoRaw(),p=n.intoRaw(),M=wi.fromRaw(null,f.castShape(h,u,d,p,m,_,v,l,c));return h.free(),u.free(),d.free(),m.free(),_.free(),v.free(),f.free(),p.free(),M}intersectsShape(e,t,r,n,a){let o=D.intoRaw(e),s=Be.intoRaw(t),l=D.intoRaw(n),c=Be.intoRaw(a),h=this.intoRaw(),u=r.intoRaw(),d=h.intersectsShape(o,s,u,l,c);return o.free(),s.free(),l.free(),c.free(),h.free(),u.free(),d}contactShape(e,t,r,n,a,o){let s=D.intoRaw(e),l=Be.intoRaw(t),c=D.intoRaw(n),h=Be.intoRaw(a),u=this.intoRaw(),d=r.intoRaw(),m=_i.fromRaw(u.contactShape(s,l,d,c,h,o));return s.free(),l.free(),c.free(),h.free(),u.free(),d.free(),m}containsPoint(e,t,r){let n=D.intoRaw(e),a=Be.intoRaw(t),o=D.intoRaw(r),s=this.intoRaw(),l=s.containsPoint(n,a,o);return n.free(),a.free(),o.free(),s.free(),l}projectPoint(e,t,r,n){let a=D.intoRaw(e),o=Be.intoRaw(t),s=D.intoRaw(r),l=this.intoRaw(),c=an.fromRaw(l.projectPoint(a,o,s,n));return a.free(),o.free(),s.free(),l.free(),c}intersectsRay(e,t,r,n){let a=D.intoRaw(t),o=Be.intoRaw(r),s=D.intoRaw(e.origin),l=D.intoRaw(e.dir),c=this.intoRaw(),h=c.intersectsRay(a,o,s,l,n);return a.free(),o.free(),s.free(),l.free(),c.free(),h}castRay(e,t,r,n,a){let o=D.intoRaw(t),s=Be.intoRaw(r),l=D.intoRaw(e.origin),c=D.intoRaw(e.dir),h=this.intoRaw(),u=h.castRay(o,s,l,c,n,a);return o.free(),s.free(),l.free(),c.free(),h.free(),u}castRayAndGetNormal(e,t,r,n,a){let o=D.intoRaw(t),s=Be.intoRaw(r),l=D.intoRaw(e.origin),c=D.intoRaw(e.dir),h=this.intoRaw(),u=on.fromRaw(h.castRayAndGetNormal(o,s,l,c,n,a));return o.free(),s.free(),l.free(),c.free(),h.free(),u}}var Ye;(function(i){i[i.Ball=0]="Ball",i[i.Cuboid=1]="Cuboid",i[i.Capsule=2]="Capsule",i[i.Segment=3]="Segment",i[i.Polyline=4]="Polyline",i[i.Triangle=5]="Triangle",i[i.TriMesh=6]="TriMesh",i[i.HeightField=7]="HeightField",i[i.ConvexPolyhedron=9]="ConvexPolyhedron",i[i.Cylinder=10]="Cylinder",i[i.Cone=11]="Cone",i[i.RoundCuboid=12]="RoundCuboid",i[i.RoundTriangle=13]="RoundTriangle",i[i.RoundCylinder=14]="RoundCylinder",i[i.RoundCone=15]="RoundCone",i[i.RoundConvexPolyhedron=16]="RoundConvexPolyhedron",i[i.HalfSpace=17]="HalfSpace"})(Ye||(Ye={}));class Ja extends xt{constructor(e){super(),this.type=Ye.Ball,this.radius=e}intoRaw(){return Re.ball(this.radius)}}class Yo extends xt{constructor(e){super(),this.type=Ye.HalfSpace,this.normal=e}intoRaw(){let e=D.intoRaw(this.normal),t=Re.halfspace(e);return e.free(),t}}class Za extends xt{constructor(e,t,r){super(),this.type=Ye.Cuboid,this.halfExtents=D.new(e,t,r)}intoRaw(){return Re.cuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z)}}class Qa extends xt{constructor(e,t,r,n){super(),this.type=Ye.RoundCuboid,this.halfExtents=D.new(e,t,r),this.borderRadius=n}intoRaw(){return Re.roundCuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z,this.borderRadius)}}class $a extends xt{constructor(e,t){super(),this.type=Ye.Capsule,this.halfHeight=e,this.radius=t}intoRaw(){return Re.capsule(this.halfHeight,this.radius)}}class es extends xt{constructor(e,t){super(),this.type=Ye.Segment,this.a=e,this.b=t}intoRaw(){let e=D.intoRaw(this.a),t=D.intoRaw(this.b),r=Re.segment(e,t);return e.free(),t.free(),r}}let ts=class extends xt{constructor(i,e,t){super(),this.type=Ye.Triangle,this.a=i,this.b=e,this.c=t}intoRaw(){let i=D.intoRaw(this.a),e=D.intoRaw(this.b),t=D.intoRaw(this.c),r=Re.triangle(i,e,t);return i.free(),e.free(),t.free(),r}};class rs extends xt{constructor(e,t,r,n){super(),this.type=Ye.RoundTriangle,this.a=e,this.b=t,this.c=r,this.borderRadius=n}intoRaw(){let e=D.intoRaw(this.a),t=D.intoRaw(this.b),r=D.intoRaw(this.c),n=Re.roundTriangle(e,t,r,this.borderRadius);return e.free(),t.free(),r.free(),n}}class is extends xt{constructor(e,t){super(),this.type=Ye.Polyline,this.vertices=e,this.indices=t??new Uint32Array(0)}intoRaw(){return Re.polyline(this.vertices,this.indices)}}class ns extends xt{constructor(e,t){super(),this.type=Ye.TriMesh,this.vertices=e,this.indices=t}intoRaw(){return Re.trimesh(this.vertices,this.indices)}}class Wn extends xt{constructor(e,t){super(),this.type=Ye.ConvexPolyhedron,this.vertices=e,this.indices=t}intoRaw(){return this.indices?Re.convexMesh(this.vertices,this.indices):Re.convexHull(this.vertices)}}class jn extends xt{constructor(e,t,r){super(),this.type=Ye.RoundConvexPolyhedron,this.vertices=e,this.indices=t,this.borderRadius=r}intoRaw(){return this.indices?Re.roundConvexMesh(this.vertices,this.indices,this.borderRadius):Re.roundConvexHull(this.vertices,this.borderRadius)}}class as extends xt{constructor(e,t,r,n){super(),this.type=Ye.HeightField,this.nrows=e,this.ncols=t,this.heights=r,this.scale=n}intoRaw(){let e=D.intoRaw(this.scale),t=Re.heightfield(this.nrows,this.ncols,this.heights,e);return e.free(),t}}class ss extends xt{constructor(e,t){super(),this.type=Ye.Cylinder,this.halfHeight=e,this.radius=t}intoRaw(){return Re.cylinder(this.halfHeight,this.radius)}}class os extends xt{constructor(e,t,r){super(),this.type=Ye.RoundCylinder,this.borderRadius=r,this.halfHeight=e,this.radius=t}intoRaw(){return Re.roundCylinder(this.halfHeight,this.radius,this.borderRadius)}}class ls extends xt{constructor(e,t){super(),this.type=Ye.Cone,this.halfHeight=e,this.radius=t}intoRaw(){return Re.cone(this.halfHeight,this.radius)}}class cs extends xt{constructor(e,t,r){super(),this.type=Ye.RoundCone,this.halfHeight=e,this.radius=t,this.borderRadius=r}intoRaw(){return Re.roundCone(this.halfHeight,this.radius,this.borderRadius)}}var Xn;(function(i){i[i.DYNAMIC_DYNAMIC=1]="DYNAMIC_DYNAMIC",i[i.DYNAMIC_KINEMATIC=12]="DYNAMIC_KINEMATIC",i[i.DYNAMIC_FIXED=2]="DYNAMIC_FIXED",i[i.KINEMATIC_KINEMATIC=52224]="KINEMATIC_KINEMATIC",i[i.KINEMATIC_FIXED=8704]="KINEMATIC_FIXED",i[i.FIXED_FIXED=32]="FIXED_FIXED",i[i.DEFAULT=15]="DEFAULT",i[i.ALL=60943]="ALL"})(Xn||(Xn={}));class hs{constructor(e,t,r,n){this.colliderSet=e,this.handle=t,this._parent=r,this._shape=n}finalizeDeserialization(e){this.handle!=null&&(this._parent=e.get(this.colliderSet.raw.coParent(this.handle)))}ensureShapeIsCached(){this._shape||(this._shape=xt.fromRaw(this.colliderSet.raw,this.handle))}get shape(){return this.ensureShapeIsCached(),this._shape}isValid(){return this.colliderSet.raw.contains(this.handle)}translation(){return D.fromRaw(this.colliderSet.raw.coTranslation(this.handle))}rotation(){return Be.fromRaw(this.colliderSet.raw.coRotation(this.handle))}isSensor(){return this.colliderSet.raw.coIsSensor(this.handle)}setSensor(e){this.colliderSet.raw.coSetSensor(this.handle,e)}setShape(e){let t=e.intoRaw();this.colliderSet.raw.coSetShape(this.handle,t),t.free(),this._shape=e}setEnabled(e){this.colliderSet.raw.coSetEnabled(this.handle,e)}isEnabled(){return this.colliderSet.raw.coIsEnabled(this.handle)}setRestitution(e){this.colliderSet.raw.coSetRestitution(this.handle,e)}setFriction(e){this.colliderSet.raw.coSetFriction(this.handle,e)}frictionCombineRule(){return this.colliderSet.raw.coFrictionCombineRule(this.handle)}setFrictionCombineRule(e){this.colliderSet.raw.coSetFrictionCombineRule(this.handle,e)}restitutionCombineRule(){return this.colliderSet.raw.coRestitutionCombineRule(this.handle)}setRestitutionCombineRule(e){this.colliderSet.raw.coSetRestitutionCombineRule(this.handle,e)}setCollisionGroups(e){this.colliderSet.raw.coSetCollisionGroups(this.handle,e)}setSolverGroups(e){this.colliderSet.raw.coSetSolverGroups(this.handle,e)}activeHooks(){return this.colliderSet.raw.coActiveHooks(this.handle)}setActiveHooks(e){this.colliderSet.raw.coSetActiveHooks(this.handle,e)}activeEvents(){return this.colliderSet.raw.coActiveEvents(this.handle)}setActiveEvents(e){this.colliderSet.raw.coSetActiveEvents(this.handle,e)}activeCollisionTypes(){return this.colliderSet.raw.coActiveCollisionTypes(this.handle)}setContactForceEventThreshold(e){return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle,e)}contactForceEventThreshold(){return this.colliderSet.raw.coContactForceEventThreshold(this.handle)}setActiveCollisionTypes(e){this.colliderSet.raw.coSetActiveCollisionTypes(this.handle,e)}setDensity(e){this.colliderSet.raw.coSetDensity(this.handle,e)}setMass(e){this.colliderSet.raw.coSetMass(this.handle,e)}setMassProperties(e,t,r,n){let a=D.intoRaw(t),o=D.intoRaw(r),s=Be.intoRaw(n);this.colliderSet.raw.coSetMassProperties(this.handle,e,a,o,s),a.free(),o.free(),s.free()}setTranslation(e){this.colliderSet.raw.coSetTranslation(this.handle,e.x,e.y,e.z)}setTranslationWrtParent(e){this.colliderSet.raw.coSetTranslationWrtParent(this.handle,e.x,e.y,e.z)}setRotation(e){this.colliderSet.raw.coSetRotation(this.handle,e.x,e.y,e.z,e.w)}setRotationWrtParent(e){this.colliderSet.raw.coSetRotationWrtParent(this.handle,e.x,e.y,e.z,e.w)}shapeType(){return this.colliderSet.raw.coShapeType(this.handle)}halfExtents(){return D.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle))}setHalfExtents(e){const t=D.intoRaw(e);this.colliderSet.raw.coSetHalfExtents(this.handle,t)}radius(){return this.colliderSet.raw.coRadius(this.handle)}setRadius(e){this.colliderSet.raw.coSetRadius(this.handle,e)}roundRadius(){return this.colliderSet.raw.coRoundRadius(this.handle)}setRoundRadius(e){this.colliderSet.raw.coSetRoundRadius(this.handle,e)}halfHeight(){return this.colliderSet.raw.coHalfHeight(this.handle)}setHalfHeight(e){this.colliderSet.raw.coSetHalfHeight(this.handle,e)}vertices(){return this.colliderSet.raw.coVertices(this.handle)}indices(){return this.colliderSet.raw.coIndices(this.handle)}heightfieldHeights(){return this.colliderSet.raw.coHeightfieldHeights(this.handle)}heightfieldScale(){let e=this.colliderSet.raw.coHeightfieldScale(this.handle);return D.fromRaw(e)}heightfieldNRows(){return this.colliderSet.raw.coHeightfieldNRows(this.handle)}heightfieldNCols(){return this.colliderSet.raw.coHeightfieldNCols(this.handle)}parent(){return this._parent}friction(){return this.colliderSet.raw.coFriction(this.handle)}restitution(){return this.colliderSet.raw.coRestitution(this.handle)}density(){return this.colliderSet.raw.coDensity(this.handle)}mass(){return this.colliderSet.raw.coMass(this.handle)}volume(){return this.colliderSet.raw.coVolume(this.handle)}collisionGroups(){return this.colliderSet.raw.coCollisionGroups(this.handle)}solverGroups(){return this.colliderSet.raw.coSolverGroups(this.handle)}containsPoint(e){let t=D.intoRaw(e),r=this.colliderSet.raw.coContainsPoint(this.handle,t);return t.free(),r}projectPoint(e,t){let r=D.intoRaw(e),n=an.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle,r,t));return r.free(),n}intersectsRay(e,t){let r=D.intoRaw(e.origin),n=D.intoRaw(e.dir),a=this.colliderSet.raw.coIntersectsRay(this.handle,r,n,t);return r.free(),n.free(),a}castShape(e,t,r,n,a,o,s){let l=D.intoRaw(e),c=D.intoRaw(r),h=Be.intoRaw(n),u=D.intoRaw(a),d=t.intoRaw(),m=wi.fromRaw(this.colliderSet,this.colliderSet.raw.coCastShape(this.handle,l,d,c,h,u,o,s));return l.free(),c.free(),h.free(),u.free(),d.free(),m}castCollider(e,t,r,n,a){let o=D.intoRaw(e),s=D.intoRaw(r),l=cn.fromRaw(this.colliderSet,this.colliderSet.raw.coCastCollider(this.handle,o,t.handle,s,n,a));return o.free(),s.free(),l}intersectsShape(e,t,r){let n=D.intoRaw(t),a=Be.intoRaw(r),o=e.intoRaw(),s=this.colliderSet.raw.coIntersectsShape(this.handle,o,n,a);return n.free(),a.free(),o.free(),s}contactShape(e,t,r,n){let a=D.intoRaw(t),o=Be.intoRaw(r),s=e.intoRaw(),l=_i.fromRaw(this.colliderSet.raw.coContactShape(this.handle,s,a,o,n));return a.free(),o.free(),s.free(),l}contactCollider(e,t){return _i.fromRaw(this.colliderSet.raw.coContactCollider(this.handle,e.handle,t))}castRay(e,t,r){let n=D.intoRaw(e.origin),a=D.intoRaw(e.dir),o=this.colliderSet.raw.coCastRay(this.handle,n,a,t,r);return n.free(),a.free(),o}castRayAndGetNormal(e,t,r){let n=D.intoRaw(e.origin),a=D.intoRaw(e.dir),o=on.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle,n,a,t,r));return n.free(),a.free(),o}}var Qr;(function(i){i[i.Density=0]="Density",i[i.Mass=1]="Mass",i[i.MassProps=2]="MassProps"})(Qr||(Qr={}));class gt{constructor(e){this.enabled=!0,this.shape=e,this.massPropsMode=Qr.Density,this.density=1,this.friction=.5,this.restitution=0,this.rotation=Be.identity(),this.translation=D.zeros(),this.isSensor=!1,this.collisionGroups=4294967295,this.solverGroups=4294967295,this.frictionCombineRule=nn.Average,this.restitutionCombineRule=nn.Average,this.activeCollisionTypes=Xn.DEFAULT,this.activeEvents=0,this.activeHooks=0,this.mass=0,this.centerOfMass=D.zeros(),this.contactForceEventThreshold=0,this.principalAngularInertia=D.zeros(),this.angularInertiaLocalFrame=Be.identity()}static ball(e){const t=new Ja(e);return new gt(t)}static capsule(e,t){const r=new $a(e,t);return new gt(r)}static segment(e,t){const r=new es(e,t);return new gt(r)}static triangle(e,t,r){const n=new ts(e,t,r);return new gt(n)}static roundTriangle(e,t,r,n){const a=new rs(e,t,r,n);return new gt(a)}static polyline(e,t){const r=new is(e,t);return new gt(r)}static trimesh(e,t){const r=new ns(e,t);return new gt(r)}static cuboid(e,t,r){const n=new Za(e,t,r);return new gt(n)}static roundCuboid(e,t,r,n){const a=new Qa(e,t,r,n);return new gt(a)}static heightfield(e,t,r,n){const a=new as(e,t,r,n);return new gt(a)}static cylinder(e,t){const r=new ss(e,t);return new gt(r)}static roundCylinder(e,t,r){const n=new os(e,t,r);return new gt(n)}static cone(e,t){const r=new ls(e,t);return new gt(r)}static roundCone(e,t,r){const n=new cs(e,t,r);return new gt(n)}static convexHull(e){const t=new Wn(e,null);return new gt(t)}static convexMesh(e,t){const r=new Wn(e,t);return new gt(r)}static roundConvexHull(e,t){const r=new jn(e,null,t);return new gt(r)}static roundConvexMesh(e,t,r){const n=new jn(e,t,r);return new gt(n)}setTranslation(e,t,r){if(typeof e!="number"||typeof t!="number"||typeof r!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:e,y:t,z:r},this}setRotation(e){return Be.copy(this.rotation,e),this}setSensor(e){return this.isSensor=e,this}setEnabled(e){return this.enabled=e,this}setDensity(e){return this.massPropsMode=Qr.Density,this.density=e,this}setMass(e){return this.massPropsMode=Qr.Mass,this.mass=e,this}setMassProperties(e,t,r,n){return this.massPropsMode=Qr.MassProps,this.mass=e,D.copy(this.centerOfMass,t),D.copy(this.principalAngularInertia,r),Be.copy(this.angularInertiaLocalFrame,n),this}setRestitution(e){return this.restitution=e,this}setFriction(e){return this.friction=e,this}setFrictionCombineRule(e){return this.frictionCombineRule=e,this}setRestitutionCombineRule(e){return this.restitutionCombineRule=e,this}setCollisionGroups(e){return this.collisionGroups=e,this}setSolverGroups(e){return this.solverGroups=e,this}setActiveHooks(e){return this.activeHooks=e,this}setActiveEvents(e){return this.activeEvents=e,this}setActiveCollisionTypes(e){return this.activeCollisionTypes=e,this}setContactForceEventThreshold(e){return this.contactForceEventThreshold=e,this}}class Ko{constructor(e){this.raw=e||new dt,this.map=new kn,e&&e.forEachColliderHandle(t=>{this.map.set(t,new hs(this,t,null))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}castClosure(e){return t=>{if(e)return e(this.get(t))}}finalizeDeserialization(e){this.map.forEach(t=>t.finalizeDeserialization(e))}createCollider(e,t,r){let n=r!=null&&r!=null;if(n&&isNaN(r))throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");let a=t.shape.intoRaw(),o=D.intoRaw(t.translation),s=Be.intoRaw(t.rotation),l=D.intoRaw(t.centerOfMass),c=D.intoRaw(t.principalAngularInertia),h=Be.intoRaw(t.angularInertiaLocalFrame),u=this.raw.createCollider(t.enabled,a,o,s,t.massPropsMode,t.mass,l,c,h,t.density,t.friction,t.restitution,t.frictionCombineRule,t.restitutionCombineRule,t.isSensor,t.collisionGroups,t.solverGroups,t.activeCollisionTypes,t.activeHooks,t.activeEvents,t.contactForceEventThreshold,n,n?r:0,e.raw);a.free(),o.free(),s.free(),l.free(),c.free(),h.free();let d=n?e.get(r):null,m=new hs(this,u,d,t.shape);return this.map.set(u,m),m}remove(e,t,r,n){this.raw.remove(e,t.raw,r.raw,n),this.unmap(e)}unmap(e){this.map.delete(e)}get(e){return this.map.get(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}forEach(e){this.map.forEach(e)}getAll(){return this.map.getAll()}}class Jo{constructor(e){this.raw=e||new Cn}free(){this.raw&&this.raw.free(),this.raw=void 0}step(e,t,r,n,a,o,s,l,c,h,u,d){let m=D.intoRaw(e);u?this.raw.stepWithEvents(m,t.raw,r.raw,n.raw,a.raw,o.raw,s.raw,l.raw,c.raw,h.raw,u.raw,d,d?d.filterContactPair:null,d?d.filterIntersectionPair:null):this.raw.step(m,t.raw,r.raw,n.raw,a.raw,o.raw,s.raw,l.raw,c.raw,h.raw),m.free()}}var us;(function(i){i[i.EXCLUDE_FIXED=1]="EXCLUDE_FIXED",i[i.EXCLUDE_KINEMATIC=2]="EXCLUDE_KINEMATIC",i[i.EXCLUDE_DYNAMIC=4]="EXCLUDE_DYNAMIC",i[i.EXCLUDE_SENSORS=8]="EXCLUDE_SENSORS",i[i.EXCLUDE_SOLIDS=16]="EXCLUDE_SOLIDS",i[i.ONLY_DYNAMIC=3]="ONLY_DYNAMIC",i[i.ONLY_KINEMATIC=5]="ONLY_KINEMATIC",i[i.ONLY_FIXED=6]="ONLY_FIXED"})(us||(us={}));class Zo{constructor(e){this.raw=e||new en}free(){this.raw&&this.raw.free(),this.raw=void 0}update(e,t){this.raw.update(e.raw,t.raw)}castRay(e,t,r,n,a,o,s,l,c,h){let u=D.intoRaw(r.origin),d=D.intoRaw(r.dir),m=Vn.fromRaw(t,this.raw.castRay(e.raw,t.raw,u,d,n,a,o,s,l,c,h));return u.free(),d.free(),m}castRayAndGetNormal(e,t,r,n,a,o,s,l,c,h){let u=D.intoRaw(r.origin),d=D.intoRaw(r.dir),m=ln.fromRaw(t,this.raw.castRayAndGetNormal(e.raw,t.raw,u,d,n,a,o,s,l,c,h));return u.free(),d.free(),m}intersectionsWithRay(e,t,r,n,a,o,s,l,c,h,u){let d=D.intoRaw(r.origin),m=D.intoRaw(r.dir),_=v=>o(ln.fromRaw(t,v));this.raw.intersectionsWithRay(e.raw,t.raw,d,m,n,a,_,s,l,c,h,u),d.free(),m.free()}intersectionWithShape(e,t,r,n,a,o,s,l,c,h){let u=D.intoRaw(r),d=Be.intoRaw(n),m=a.intoRaw(),_=this.raw.intersectionWithShape(e.raw,t.raw,u,d,m,o,s,l,c,h);return u.free(),d.free(),m.free(),_}projectPoint(e,t,r,n,a,o,s,l,c){let h=D.intoRaw(r),u=sn.fromRaw(t,this.raw.projectPoint(e.raw,t.raw,h,n,a,o,s,l,c));return h.free(),u}projectPointAndGetFeature(e,t,r,n,a,o,s,l){let c=D.intoRaw(r),h=sn.fromRaw(t,this.raw.projectPointAndGetFeature(e.raw,t.raw,c,n,a,o,s,l));return c.free(),h}intersectionsWithPoint(e,t,r,n,a,o,s,l,c){let h=D.intoRaw(r);this.raw.intersectionsWithPoint(e.raw,t.raw,h,n,a,o,s,l,c),h.free()}castShape(e,t,r,n,a,o,s,l,c,h,u,d,m){let _=D.intoRaw(r),v=Be.intoRaw(n),f=D.intoRaw(a),p=o.intoRaw(),M=cn.fromRaw(t,this.raw.castShape(e.raw,t.raw,_,v,f,p,s,l,c,h,u,d,m));return _.free(),v.free(),f.free(),p.free(),M}intersectionsWithShape(e,t,r,n,a,o,s,l,c,h,u){let d=D.intoRaw(r),m=Be.intoRaw(n),_=a.intoRaw();this.raw.intersectionsWithShape(e.raw,t.raw,d,m,_,o,s,l,c,h,u),d.free(),m.free(),_.free()}collidersWithAabbIntersectingAabb(e,t,r){let n=D.intoRaw(e),a=D.intoRaw(t);this.raw.collidersWithAabbIntersectingAabb(n,a,r),n.free(),a.free()}}class ds{constructor(e){this.raw=e||new Nn}free(){this.raw&&this.raw.free(),this.raw=void 0}serializeAll(e,t,r,n,a,o,s,l,c){let h=D.intoRaw(e);const u=this.raw.serializeAll(h,t.raw,r.raw,n.raw,a.raw,o.raw,s.raw,l.raw,c.raw);return h.free(),u}deserializeAll(e){return qn.fromRaw(this.raw.deserializeAll(e))}}class Qo{constructor(e,t){this.vertices=e,this.colors=t}}class $o{constructor(e){this.raw=e||new Rn}free(){this.raw&&this.raw.free(),this.raw=void 0,this.vertices=void 0,this.colors=void 0}render(e,t,r,n,a){this.raw.render(e.raw,t.raw,r.raw,n.raw,a.raw),this.vertices=this.raw.vertices(),this.colors=this.raw.colors()}}class el{}class tl{constructor(e,t,r,n,a){this.params=t,this.bodies=r,this.colliders=n,this.queries=a,this.raw=new An(e),this.rawCharacterCollision=new Qi,this._applyImpulsesToDynamicBodies=!1,this._characterMass=null}free(){this.raw&&(this.raw.free(),this.rawCharacterCollision.free()),this.raw=void 0,this.rawCharacterCollision=void 0}up(){return this.raw.up()}setUp(e){let t=D.intoRaw(e);return this.raw.setUp(t)}applyImpulsesToDynamicBodies(){return this._applyImpulsesToDynamicBodies}setApplyImpulsesToDynamicBodies(e){this._applyImpulsesToDynamicBodies=e}characterMass(){return this._characterMass}setCharacterMass(e){this._characterMass=e}offset(){return this.raw.offset()}setOffset(e){this.raw.setOffset(e)}slideEnabled(){return this.raw.slideEnabled()}setSlideEnabled(e){this.raw.setSlideEnabled(e)}autostepMaxHeight(){return this.raw.autostepMaxHeight()}autostepMinWidth(){return this.raw.autostepMinWidth()}autostepIncludesDynamicBodies(){return this.raw.autostepIncludesDynamicBodies()}autostepEnabled(){return this.raw.autostepEnabled()}enableAutostep(e,t,r){this.raw.enableAutostep(e,t,r)}disableAutostep(){return this.raw.disableAutostep()}maxSlopeClimbAngle(){return this.raw.maxSlopeClimbAngle()}setMaxSlopeClimbAngle(e){this.raw.setMaxSlopeClimbAngle(e)}minSlopeSlideAngle(){return this.raw.minSlopeSlideAngle()}setMinSlopeSlideAngle(e){this.raw.setMinSlopeSlideAngle(e)}snapToGroundDistance(){return this.raw.snapToGroundDistance()}enableSnapToGround(e){this.raw.enableSnapToGround(e)}disableSnapToGround(){this.raw.disableSnapToGround()}snapToGroundEnabled(){return this.raw.snapToGroundEnabled()}computeColliderMovement(e,t,r,n,a){let o=D.intoRaw(t);this.raw.computeColliderMovement(this.params.dt,this.bodies.raw,this.colliders.raw,this.queries.raw,e.handle,o,this._applyImpulsesToDynamicBodies,this._characterMass,r,n,this.colliders.castClosure(a)),o.free()}computedMovement(){return D.fromRaw(this.raw.computedMovement())}computedGrounded(){return this.raw.computedGrounded()}numComputedCollisions(){return this.raw.numComputedCollisions()}computedCollision(e,t){if(this.raw.computedCollision(e,this.rawCharacterCollision)){let r=this.rawCharacterCollision;return t=t??new el,t.translationApplied=D.fromRaw(r.translationApplied()),t.translationRemaining=D.fromRaw(r.translationRemaining()),t.toi=r.toi(),t.witness1=D.fromRaw(r.worldWitness1()),t.witness2=D.fromRaw(r.worldWitness2()),t.normal1=D.fromRaw(r.worldNormal1()),t.normal2=D.fromRaw(r.worldNormal2()),t.collider=this.colliders.get(r.handle()),t}else return null}}class qn{constructor(e,t,r,n,a,o,s,l,c,h,u,d,m,_){this.gravity=e,this.integrationParameters=new Io(t),this.islands=new Wo(r),this.broadPhase=new jo(n),this.narrowPhase=new Xo(a),this.bodies=new Lo(o),this.colliders=new Ko(s),this.impulseJoints=new Fo(l),this.multibodyJoints=new ko(c),this.ccdSolver=new Vo(h),this.queryPipeline=new Zo(u),this.physicsPipeline=new Jo(d),this.serializationPipeline=new ds(m),this.debugRenderPipeline=new $o(_),this.characterControllers=new Set,this.impulseJoints.finalizeDeserialization(this.bodies),this.bodies.finalizeDeserialization(this.colliders),this.colliders.finalizeDeserialization(this.bodies)}free(){this.integrationParameters.free(),this.islands.free(),this.broadPhase.free(),this.narrowPhase.free(),this.bodies.free(),this.colliders.free(),this.impulseJoints.free(),this.multibodyJoints.free(),this.ccdSolver.free(),this.queryPipeline.free(),this.physicsPipeline.free(),this.serializationPipeline.free(),this.debugRenderPipeline.free(),this.characterControllers.forEach(e=>e.free()),this.integrationParameters=void 0,this.islands=void 0,this.broadPhase=void 0,this.narrowPhase=void 0,this.bodies=void 0,this.colliders=void 0,this.ccdSolver=void 0,this.impulseJoints=void 0,this.multibodyJoints=void 0,this.queryPipeline=void 0,this.physicsPipeline=void 0,this.serializationPipeline=void 0,this.debugRenderPipeline=void 0,this.characterControllers=void 0}static fromRaw(e){return e?new qn(D.fromRaw(e.takeGravity()),e.takeIntegrationParameters(),e.takeIslandManager(),e.takeBroadPhase(),e.takeNarrowPhase(),e.takeBodies(),e.takeColliders(),e.takeImpulseJoints(),e.takeMultibodyJoints()):null}takeSnapshot(){return this.serializationPipeline.serializeAll(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints)}static restoreSnapshot(e){return new ds().deserializeAll(e)}debugRender(){return this.debugRenderPipeline.render(this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.narrowPhase),new Qo(this.debugRenderPipeline.vertices,this.debugRenderPipeline.colors)}step(e,t){this.physicsPipeline.step(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.ccdSolver,e,t),this.queryPipeline.update(this.bodies,this.colliders)}propagateModifiedBodyPositionsToColliders(){this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw)}updateSceneQueries(){this.propagateModifiedBodyPositionsToColliders(),this.queryPipeline.update(this.bodies,this.colliders)}get timestep(){return this.integrationParameters.dt}set timestep(e){this.integrationParameters.dt=e}get maxVelocityIterations(){return this.integrationParameters.maxVelocityIterations}set maxVelocityIterations(e){this.integrationParameters.maxVelocityIterations=e}get maxVelocityFrictionIterations(){return this.integrationParameters.maxVelocityFrictionIterations}set maxVelocityFrictionIterations(e){this.integrationParameters.maxVelocityFrictionIterations=e}get maxStabilizationIterations(){return this.integrationParameters.maxStabilizationIterations}set maxStabilizationIterations(e){this.integrationParameters.maxStabilizationIterations=e}createRigidBody(e){return this.bodies.createRigidBody(this.colliders,e)}createCharacterController(e){let t=new tl(e,this.integrationParameters,this.bodies,this.colliders,this.queryPipeline);return this.characterControllers.add(t),t}removeCharacterController(e){this.characterControllers.delete(e),e.free()}createCollider(e,t){let r=t?t.handle:void 0;return this.colliders.createCollider(this.bodies,e,r)}createImpulseJoint(e,t,r,n){return this.impulseJoints.createJoint(this.bodies,e,t.handle,r.handle,n)}createMultibodyJoint(e,t,r,n){return this.multibodyJoints.createJoint(e,t.handle,r.handle,n)}getRigidBody(e){return this.bodies.get(e)}getCollider(e){return this.colliders.get(e)}getImpulseJoint(e){return this.impulseJoints.get(e)}getMultibodyJoint(e){return this.multibodyJoints.get(e)}removeRigidBody(e){this.bodies&&this.bodies.remove(e.handle,this.islands,this.colliders,this.impulseJoints,this.multibodyJoints)}removeCollider(e,t){this.colliders&&this.colliders.remove(e.handle,this.islands,this.bodies,t)}removeImpulseJoint(e,t){this.impulseJoints&&this.impulseJoints.remove(e.handle,t)}removeMultibodyJoint(e,t){this.impulseJoints&&this.multibodyJoints.remove(e.handle,t)}forEachCollider(e){this.colliders.forEach(e)}forEachRigidBody(e){this.bodies.forEach(e)}forEachActiveRigidBody(e){this.bodies.forEachActiveRigidBody(this.islands,e)}castRay(e,t,r,n,a,o,s,l){return this.queryPipeline.castRay(this.bodies,this.colliders,e,t,r,n,a,o?o.handle:null,s?s.handle:null,this.colliders.castClosure(l))}castRayAndGetNormal(e,t,r,n,a,o,s,l){return this.queryPipeline.castRayAndGetNormal(this.bodies,this.colliders,e,t,r,n,a,o?o.handle:null,s?s.handle:null,this.colliders.castClosure(l))}intersectionsWithRay(e,t,r,n,a,o,s,l,c){this.queryPipeline.intersectionsWithRay(this.bodies,this.colliders,e,t,r,n,a,o,s?s.handle:null,l?l.handle:null,this.colliders.castClosure(c))}intersectionWithShape(e,t,r,n,a,o,s,l){let c=this.queryPipeline.intersectionWithShape(this.bodies,this.colliders,e,t,r,n,a,o?o.handle:null,s?s.handle:null,this.colliders.castClosure(l));return c!=null?this.colliders.get(c):null}projectPoint(e,t,r,n,a,o,s){return this.queryPipeline.projectPoint(this.bodies,this.colliders,e,t,r,n,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(s))}projectPointAndGetFeature(e,t,r,n,a,o){return this.queryPipeline.projectPointAndGetFeature(this.bodies,this.colliders,e,t,r,n?n.handle:null,a?a.handle:null,this.colliders.castClosure(o))}intersectionsWithPoint(e,t,r,n,a,o,s){this.queryPipeline.intersectionsWithPoint(this.bodies,this.colliders,e,this.colliders.castClosure(t),r,n,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(s))}castShape(e,t,r,n,a,o,s,l,c,h,u){return this.queryPipeline.castShape(this.bodies,this.colliders,e,t,r,n,a,o,s,l,c?c.handle:null,h?h.handle:null,this.colliders.castClosure(u))}intersectionsWithShape(e,t,r,n,a,o,s,l,c){this.queryPipeline.intersectionsWithShape(this.bodies,this.colliders,e,t,r,this.colliders.castClosure(n),a,o,s?s.handle:null,l?l.handle:null,this.colliders.castClosure(c))}collidersWithAabbIntersectingAabb(e,t,r){this.queryPipeline.collidersWithAabbIntersectingAabb(e,t,this.colliders.castClosure(r))}contactsWith(e,t){this.narrowPhase.contactsWith(e.handle,this.colliders.castClosure(t))}intersectionsWith(e,t){this.narrowPhase.intersectionsWith(e.handle,this.colliders.castClosure(t))}contactPair(e,t,r){this.narrowPhase.contactPair(e.handle,t.handle,r)}intersectionPair(e,t){return this.narrowPhase.intersectionPair(e.handle,t.handle)}}var ps;(function(i){i[i.COLLISION_EVENTS=1]="COLLISION_EVENTS",i[i.CONTACT_FORCE_EVENTS=2]="CONTACT_FORCE_EVENTS"})(ps||(ps={}));class rl{free(){this.raw&&this.raw.free(),this.raw=void 0}collider1(){return this.raw.collider1()}collider2(){return this.raw.collider2()}totalForce(){return D.fromRaw(this.raw.total_force())}totalForceMagnitude(){return this.raw.total_force_magnitude()}maxForceDirection(){return D.fromRaw(this.raw.max_force_direction())}maxForceMagnitude(){return this.raw.max_force_magnitude()}}class lv{constructor(e,t){this.raw=t||new $i(e)}free(){this.raw&&this.raw.free(),this.raw=void 0}drainCollisionEvents(e){this.raw.drainCollisionEvents(e)}drainContactForceEvents(e){let t=new rl;this.raw.drainContactForceEvents(r=>{t.raw=r,e(t),t.free()})}clear(){this.raw.clear()}}var fs;(function(i){i[i.FILTER_CONTACT_PAIRS=1]="FILTER_CONTACT_PAIRS",i[i.FILTER_INTERSECTION_PAIRS=2]="FILTER_INTERSECTION_PAIRS"})(fs||(fs={}));var ms;(function(i){i[i.EMPTY=0]="EMPTY",i[i.COMPUTE_IMPULSE=1]="COMPUTE_IMPULSE"})(ms||(ms={}));function cv(){return Eh()}const dr=Object.freeze(Object.defineProperty({__proto__:null,get ActiveCollisionTypes(){return Xn},get ActiveEvents(){return ps},get ActiveHooks(){return fs},Ball:Ja,BroadPhase:jo,CCDSolver:Vo,Capsule:$a,CharacterCollision:el,get CoefficientCombineRule(){return nn},Collider:hs,ColliderDesc:gt,ColliderSet:Ko,Cone:ls,ConvexPolyhedron:Wn,Cuboid:Za,Cylinder:ss,DebugRenderBuffers:Qo,DebugRenderPipeline:$o,EventQueue:lv,get FeatureType(){return vi},FixedImpulseJoint:Do,FixedMultibodyJoint:zo,HalfSpace:Yo,Heightfield:as,ImpulseJoint:Dr,ImpulseJointSet:Fo,IntegrationParameters:Io,IslandManager:Wo,JointData:gi,get JointType(){return wt},KinematicCharacterController:tl,get MassPropsMode(){return Qr},get MotorModel(){return qa},MultibodyJoint:Ur,MultibodyJointSet:ko,NarrowPhase:Xo,PhysicsPipeline:Jo,PointColliderProjection:sn,PointProjection:an,Polyline:is,PrismaticImpulseJoint:Uo,PrismaticMultibodyJoint:Bo,Quaternion:Wa,get QueryFilterFlags(){return us},QueryPipeline:Zo,Ray:ov,RayColliderIntersection:ln,RayColliderToi:Vn,RayIntersection:on,RevoluteImpulseJoint:No,RevoluteMultibodyJoint:Ho,RigidBody:Xa,RigidBodyDesc:ur,RigidBodySet:Lo,get RigidBodyType(){return tr},RotationOps:Be,RoundCone:cs,RoundConvexPolyhedron:jn,RoundCuboid:Qa,RoundCylinder:os,RoundTriangle:rs,SdpMatrix3:Po,SdpMatrix3Ops:ja,Segment:es,SerializationPipeline:ds,Shape:xt,ShapeColliderTOI:cn,ShapeContact:_i,ShapeTOI:wi,get ShapeType(){return Ye},get SolverFlags(){return ms},SphericalImpulseJoint:Oo,SphericalMultibodyJoint:Go,TempContactForceEvent:rl,TempContactManifold:qo,TriMesh:ns,Triangle:ts,UnitImpulseJoint:Ya,UnitMultibodyJoint:Ka,Vector3:Co,VectorOps:D,World:qn,version:cv},Symbol.toStringTag,{value:"Module"})),gs="160",xi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hv=0,il=1,uv=2,nl=1,al=2,vr=3,Nr=0,Ht=1,wr=2,Or=0,Si=1,sl=2,ol=3,ll=4,dv=5,$r=100,pv=101,fv=102,cl=103,hl=104,mv=200,gv=201,_v=202,vv=203,_s=204,vs=205,wv=206,xv=207,yv=208,Sv=209,bv=210,Mv=211,Ev=212,Tv=213,Rv=214,Av=0,Cv=1,Pv=2,Yn=3,Lv=4,Iv=5,Dv=6,Uv=7,ws=0,Nv=1,Ov=2,Fr=0,Fv=1,zv=2,Bv=3,Hv=4,Gv=5,kv=6,ul=300,bi=301,Mi=302,xs=303,ys=304,Kn=306,Ss=1e3,rr=1001,bs=1002,Nt=1003,dl=1004,Ms=1005,qt=1006,Vv=1007,hn=1008,zr=1009,Wv=1010,jv=1011,Es=1012,pl=1013,Br=1014,Hr=1015,un=1016,fl=1017,ml=1018,ei=1020,Xv=1021,ir=1023,qv=1024,Yv=1025,ti=1026,Ei=1027,Kv=1028,gl=1029,Jv=1030,_l=1031,vl=1033,Ts=33776,Rs=33777,As=33778,Cs=33779,wl=35840,xl=35841,yl=35842,Sl=35843,bl=36196,Ml=37492,El=37496,Tl=37808,Rl=37809,Al=37810,Cl=37811,Pl=37812,Ll=37813,Il=37814,Dl=37815,Ul=37816,Nl=37817,Ol=37818,Fl=37819,zl=37820,Bl=37821,Ps=36492,Hl=36494,Gl=36495,Zv=36283,kl=36284,Vl=36285,Wl=36286,jl=3e3,ri=3001,Qv=3200,$v=3201,Xl=0,e0=1,Yt="",At="srgb",xr="srgb-linear",Ls="display-p3",Jn="display-p3-linear",Zn="linear",ct="srgb",Qn="rec709",$n="p3",Ti=7680,ql=519,t0=512,r0=513,i0=514,Yl=515,n0=516,a0=517,s0=518,o0=519,Kl=35044,Jl="300 es",Is=1035,yr=2e3,ea=2001;class ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const n=r.indexOf(t);n!==-1&&r.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const r=t.slice(0);for(let n=0,a=r.length;n<a;n++)r[n].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zl=1234567;const dn=Math.PI/180,pn=180/Math.PI;function Ri(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[r&255]+Pt[r>>8&255]+Pt[r>>16&255]+Pt[r>>24&255]).toLowerCase()}function Lt(i,e,t){return Math.max(e,Math.min(t,i))}function Ds(i,e){return(i%e+e)%e}function l0(i,e,t,r,n){return r+(i-e)*(n-r)/(t-e)}function c0(i,e,t){return i!==e?(t-i)/(e-i):0}function fn(i,e,t){return(1-t)*i+t*e}function h0(i,e,t,r){return fn(i,e,1-Math.exp(-t*r))}function u0(i,e=1){return e-Math.abs(Ds(i,e*2)-e)}function d0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function p0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function f0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function m0(i,e){return i+Math.random()*(e-i)}function g0(i){return i*(.5-Math.random())}function _0(i){i!==void 0&&(Zl=i);let e=Zl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function v0(i){return i*dn}function w0(i){return i*pn}function Us(i){return(i&i-1)===0&&i!==0}function x0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ta(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function y0(i,e,t,r,n){const a=Math.cos,o=Math.sin,s=a(t/2),l=o(t/2),c=a((e+r)/2),h=o((e+r)/2),u=a((e-r)/2),d=o((e-r)/2),m=a((r-e)/2),_=o((r-e)/2);switch(n){case"XYX":i.set(s*h,l*u,l*d,s*c);break;case"YZY":i.set(l*d,s*h,l*u,s*c);break;case"ZXZ":i.set(l*u,l*d,s*h,s*c);break;case"XZX":i.set(s*h,l*_,l*m,s*c);break;case"YXY":i.set(l*m,s*h,l*_,s*c);break;case"ZYZ":i.set(l*_,l*m,s*h,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Ai(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const S0={DEG2RAD:dn,RAD2DEG:pn,generateUUID:Ri,clamp:Lt,euclideanModulo:Ds,mapLinear:l0,inverseLerp:c0,lerp:fn,damp:h0,pingpong:u0,smoothstep:d0,smootherstep:p0,randInt:f0,randFloat:m0,randFloatSpread:g0,seededRandom:_0,degToRad:v0,radToDeg:w0,isPowerOfTwo:Us,ceilPowerOfTwo:x0,floorPowerOfTwo:ta,setQuaternionFromProperEuler:y0,normalize:Ot,denormalize:Ai};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Lt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*r-o*n+e.x,this.y=a*n+o*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,r,n,a,o,s,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,n,a,o,s,l,c)}set(e,t,r,n,a,o,s,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=s,h[3]=t,h[4]=a,h[5]=l,h[6]=r,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,a=this.elements,o=r[0],s=r[3],l=r[6],c=r[1],h=r[4],u=r[7],d=r[2],m=r[5],_=r[8],v=n[0],f=n[3],p=n[6],M=n[1],x=n[4],L=n[7],U=n[2],P=n[5],R=n[8];return a[0]=o*v+s*M+l*U,a[3]=o*f+s*x+l*P,a[6]=o*p+s*L+l*R,a[1]=c*v+h*M+u*U,a[4]=c*f+h*x+u*P,a[7]=c*p+h*L+u*R,a[2]=d*v+m*M+_*U,a[5]=d*f+m*x+_*P,a[8]=d*p+m*L+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*s*c-r*a*h+r*s*l+n*a*c-n*o*l}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8],u=h*o-s*c,d=s*l-h*a,m=c*a-o*l,_=t*u+r*d+n*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=u*v,e[1]=(n*c-h*r)*v,e[2]=(s*r-n*o)*v,e[3]=d*v,e[4]=(h*t-n*l)*v,e[5]=(n*a-s*t)*v,e[6]=m*v,e[7]=(r*l-c*t)*v,e[8]=(o*t-r*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(r*l,r*c,-r*(l*o+c*s)+o+e,-n*c,n*l,-n*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Ns.makeScale(e,t)),this}rotate(e){return this.premultiply(Ns.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ns.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ns=new Xe;function Ql(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ra(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function b0(){const i=ra("canvas");return i.style.display="block",i}const $l={};function mn(i){i in $l||($l[i]=!0,console.warn(i))}const ec=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),tc=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ia={[xr]:{transfer:Zn,primaries:Qn,toReference:i=>i,fromReference:i=>i},[At]:{transfer:ct,primaries:Qn,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Jn]:{transfer:Zn,primaries:$n,toReference:i=>i.applyMatrix3(tc),fromReference:i=>i.applyMatrix3(ec)},[Ls]:{transfer:ct,primaries:$n,toReference:i=>i.convertSRGBToLinear().applyMatrix3(tc),fromReference:i=>i.applyMatrix3(ec).convertLinearToSRGB()}},M0=new Set([xr,Jn]),at={enabled:!0,_workingColorSpace:xr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!M0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const r=ia[e].toReference,n=ia[t].fromReference;return n(r(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ia[i].primaries},getTransfer:function(i){return i===Yt?Zn:ia[i].transfer}};function Ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Pi;class rc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pi===void 0&&(Pi=ra("canvas")),Pi.width=e.width,Pi.height=e.height;const r=Pi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Pi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ra("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),a=n.data;for(let o=0;o<a.length;o++)a[o]=Ci(a[o]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Ci(t[r]/255)*255):t[r]=Ci(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let E0=0;class ic{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Ri(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let o=0,s=n.length;o<s;o++)n[o].isDataTexture?a.push(Fs(n[o].image)):a.push(Fs(n[o]))}else a=Fs(n);r.url=a}return t||(e.images[this.uuid]=r),r}}function Fs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let T0=0;class Vt extends ii{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,r=rr,n=rr,a=qt,o=hn,s=ir,l=zr,c=Vt.DEFAULT_ANISOTROPY,h=Yt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Ri(),this.name="",this.source=new ic(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(mn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ri?At:Yt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ul)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ss:e.x=e.x-Math.floor(e.x);break;case rr:e.x=e.x<0?0:1;break;case bs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ss:e.y=e.y-Math.floor(e.y);break;case rr:e.y=e.y<0?0:1;break;case bs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return mn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===At?ri:jl}set encoding(e){mn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ri?At:Yt}}Vt.DEFAULT_IMAGE=null,Vt.DEFAULT_MAPPING=ul,Vt.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,r=0,n=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*n+o[12]*a,this.y=o[1]*t+o[5]*r+o[9]*n+o[13]*a,this.z=o[2]*t+o[6]*r+o[10]*n+o[14]*a,this.w=o[3]*t+o[7]*r+o[11]*n+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,a;const o=e.elements,s=o[0],l=o[4],c=o[8],h=o[1],u=o[5],d=o[9],m=o[2],_=o[6],v=o[10];if(Math.abs(l-h)<.01&&Math.abs(c-m)<.01&&Math.abs(d-_)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+m)<.1&&Math.abs(d+_)<.1&&Math.abs(s+u+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const p=(s+1)/2,M=(u+1)/2,x=(v+1)/2,L=(l+h)/4,U=(c+m)/4,P=(d+_)/4;return p>M&&p>x?p<.01?(r=0,n=.707106781,a=.707106781):(r=Math.sqrt(p),n=L/r,a=U/r):M>x?M<.01?(r=.707106781,n=0,a=.707106781):(n=Math.sqrt(M),r=L/n,a=P/n):x<.01?(r=.707106781,n=.707106781,a=0):(a=Math.sqrt(x),r=U/a,n=P/a),this.set(r,n,a,t),this}let f=Math.sqrt((_-d)*(_-d)+(c-m)*(c-m)+(h-l)*(h-l));return Math.abs(f)<.001&&(f=1),this.x=(_-d)/f,this.y=(c-m)/f,this.z=(h-l)/f,this.w=Math.acos((s+u+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class R0 extends ii{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const n={width:e,height:t,depth:1};r.encoding!==void 0&&(mn("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===ri?At:Yt),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new Vt(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ic(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends R0{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class nc extends Vt{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class A0 extends Vt{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gr{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,a,o,s){let l=r[n+0],c=r[n+1],h=r[n+2],u=r[n+3];const d=a[o+0],m=a[o+1],_=a[o+2],v=a[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(s===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(u!==v||l!==d||c!==m||h!==_){let f=1-s;const p=l*d+c*m+h*_+u*v,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const U=Math.sqrt(x),P=Math.atan2(U,p*M);f=Math.sin(f*P)/U,s=Math.sin(s*P)/U}const L=s*M;if(l=l*f+d*L,c=c*f+m*L,h=h*f+_*L,u=u*f+v*L,f===1-s){const U=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=U,c*=U,h*=U,u*=U}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,r,n,a,o){const s=r[n],l=r[n+1],c=r[n+2],h=r[n+3],u=a[o],d=a[o+1],m=a[o+2],_=a[o+3];return e[t]=s*_+h*u+l*m-c*d,e[t+1]=l*_+h*d+c*u-s*m,e[t+2]=c*_+h*m+s*d-l*u,e[t+3]=h*_-s*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,n=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(r/2),h=s(n/2),u=s(a/2),d=l(r/2),m=l(n/2),_=l(a/2);switch(o){case"XYZ":this._x=d*h*u+c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u-d*m*_;break;case"YXZ":this._x=d*h*u+c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u+d*m*_;break;case"ZXY":this._x=d*h*u-c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u-d*m*_;break;case"ZYX":this._x=d*h*u-c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u+d*m*_;break;case"YZX":this._x=d*h*u+c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u-d*m*_;break;case"XZY":this._x=d*h*u-c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],a=t[8],o=t[1],s=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=r+s+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(a-c)*m,this._z=(o-n)*m}else if(r>s&&r>u){const m=2*Math.sqrt(1+r-s-u);this._w=(h-l)/m,this._x=.25*m,this._y=(n+o)/m,this._z=(a+c)/m}else if(s>u){const m=2*Math.sqrt(1+s-r-u);this._w=(a-c)/m,this._x=(n+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-r-s);this._w=(o-n)/m,this._x=(a+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,a=e._z,o=e._w,s=t._x,l=t._y,c=t._z,h=t._w;return this._x=r*h+o*s+n*c-a*l,this._y=n*h+o*l+a*s-r*c,this._z=a*h+o*c+r*l-n*s,this._w=o*h-r*s-n*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,n=this._y,a=this._z,o=this._w;let s=o*e._w+r*e._x+n*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=r,this._y=n,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*r+t*this._x,this._y=m*n+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,s),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=r*u+this._x*d,this._y=n*u+this._y*d,this._z=a*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(n),r*Math.sin(a),r*Math.cos(a),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,r=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ac.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ac.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*n,this.y=a[1]*t+a[4]*r+a[7]*n,this.z=a[2]*t+a[5]*r+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,a=e.elements,o=1/(a[3]*t+a[7]*r+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*n+a[12])*o,this.y=(a[1]*t+a[5]*r+a[9]*n+a[13])*o,this.z=(a[2]*t+a[6]*r+a[10]*n+a[14])*o,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*n-s*r),h=2*(s*t-a*n),u=2*(a*r-o*t);return this.x=t+l*c+o*u-s*h,this.y=r+l*h+s*c-a*u,this.z=n+l*u+a*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*n,this.y=a[1]*t+a[5]*r+a[9]*n,this.z=a[2]*t+a[6]*r+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=n*l-a*s,this.y=a*o-r*l,this.z=r*s-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return zs.copy(this).projectOnVector(e),this.sub(zs)}reflect(e){return this.sub(zs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Lt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zs=new F,ac=new Gr;class gn{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(nr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(nr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,nr):nr.fromBufferAttribute(a,o),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),na.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),na.copy(r.boundingBox)),na.applyMatrix4(e.matrixWorld),this.union(na)}const n=e.children;for(let a=0,o=n.length;a<o;a++)this.expandByObject(n[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_n),aa.subVectors(this.max,_n),Li.subVectors(e.a,_n),Ii.subVectors(e.b,_n),Di.subVectors(e.c,_n),kr.subVectors(Ii,Li),Vr.subVectors(Di,Ii),ai.subVectors(Li,Di);let t=[0,-kr.z,kr.y,0,-Vr.z,Vr.y,0,-ai.z,ai.y,kr.z,0,-kr.x,Vr.z,0,-Vr.x,ai.z,0,-ai.x,-kr.y,kr.x,0,-Vr.y,Vr.x,0,-ai.y,ai.x,0];return!Bs(t,Li,Ii,Di,aa)||(t=[1,0,0,0,1,0,0,0,1],!Bs(t,Li,Ii,Di,aa))?!1:(sa.crossVectors(kr,Vr),t=[sa.x,sa.y,sa.z],Bs(t,Li,Ii,Di,aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Sr=[new F,new F,new F,new F,new F,new F,new F,new F],nr=new F,na=new gn,Li=new F,Ii=new F,Di=new F,kr=new F,Vr=new F,ai=new F,_n=new F,aa=new F,sa=new F,si=new F;function Bs(i,e,t,r,n){for(let a=0,o=i.length-3;a<=o;a+=3){si.fromArray(i,a);const s=n.x*Math.abs(si.x)+n.y*Math.abs(si.y)+n.z*Math.abs(si.z),l=e.dot(si),c=t.dot(si),h=r.dot(si);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>s)return!1}return!0}const C0=new gn,vn=new F,Hs=new F;class Gs{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):C0.setFromPoints(e).getCenter(r);let n=0;for(let a=0,o=e.length;a<o;a++)n=Math.max(n,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vn.subVectors(e,this.center);const t=vn.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(vn,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vn.copy(e.center).add(Hs)),this.expandByPoint(vn.copy(e.center).sub(Hs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const br=new F,ks=new F,oa=new F,Wr=new F,Vs=new F,la=new F,Ws=new F;class sc{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,br)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=br.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(br.copy(this.origin).addScaledVector(this.direction,t),br.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){ks.copy(e).add(t).multiplyScalar(.5),oa.copy(t).sub(e).normalize(),Wr.copy(this.origin).sub(ks);const a=e.distanceTo(t)*.5,o=-this.direction.dot(oa),s=Wr.dot(this.direction),l=-Wr.dot(oa),c=Wr.lengthSq(),h=Math.abs(1-o*o);let u,d,m,_;if(h>0)if(u=o*l-s,d=o*s-l,_=a*h,u>=0)if(d>=-_)if(d<=_){const v=1/h;u*=v,d*=v,m=u*(u+o*d+2*s)+d*(o*u+d+2*l)+c}else d=a,u=Math.max(0,-(o*d+s)),m=-u*u+d*(d+2*l)+c;else d=-a,u=Math.max(0,-(o*d+s)),m=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-o*a+s)),d=u>0?-a:Math.min(Math.max(-a,-l),a),m=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-a,-l),a),m=d*(d+2*l)+c):(u=Math.max(0,-(o*a+s)),d=u>0?a:Math.min(Math.max(-a,-l),a),m=-u*u+d*(d+2*l)+c);else d=o>0?-a:a,u=Math.max(0,-(o*d+s)),m=-u*u+d*(d+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(ks).addScaledVector(oa,d),m}intersectSphere(e,t){br.subVectors(e.center,this.origin);const r=br.dot(this.direction),n=br.dot(br)-r*r,a=e.radius*e.radius;if(n>a)return null;const o=Math.sqrt(a-n),s=r-o,l=r+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,a,o,s,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(r=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(r=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(a=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),r>o||a>n||((a>r||isNaN(r))&&(r=a),(o<n||isNaN(n))&&(n=o),u>=0?(s=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(s=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),r>l||s>n)||((s>r||r!==r)&&(r=s),(l<n||n!==n)&&(n=l),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,br)!==null}intersectTriangle(e,t,r,n,a){Vs.subVectors(t,e),la.subVectors(r,e),Ws.crossVectors(Vs,la);let o=this.direction.dot(Ws),s;if(o>0){if(n)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Wr.subVectors(this.origin,e);const l=s*this.direction.dot(la.crossVectors(Wr,la));if(l<0)return null;const c=s*this.direction.dot(Vs.cross(Wr));if(c<0||l+c>o)return null;const h=-s*Wr.dot(Ws);return h<0?null:this.at(h/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,r,n,a,o,s,l,c,h,u,d,m,_,v,f){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,n,a,o,s,l,c,h,u,d,m,_,v,f)}set(e,t,r,n,a,o,s,l,c,h,u,d,m,_,v,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=r,p[12]=n,p[1]=a,p[5]=o,p[9]=s,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=_,p[11]=v,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/Ui.setFromMatrixColumn(e,0).length(),a=1/Ui.setFromMatrixColumn(e,1).length(),o=1/Ui.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*o,t[9]=r[9]*o,t[10]=r[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,a=e.z,o=Math.cos(r),s=Math.sin(r),l=Math.cos(n),c=Math.sin(n),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const d=o*h,m=o*u,_=s*h,v=s*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+_*c,t[5]=d-v*c,t[9]=-s*l,t[2]=v-d*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,m=l*u,_=c*h,v=c*u;t[0]=d+v*s,t[4]=_*s-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-s,t[2]=m*s-_,t[6]=v+d*s,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,m=l*u,_=c*h,v=c*u;t[0]=d-v*s,t[4]=-o*u,t[8]=_+m*s,t[1]=m+_*s,t[5]=o*h,t[9]=v-d*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,m=o*u,_=s*h,v=s*u;t[0]=l*h,t[4]=_*c-m,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=m*c-_,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,_=s*l,v=s*c;t[0]=l*h,t[4]=v-d*u,t[8]=_*u+m,t[1]=u,t[5]=o*h,t[9]=-s*h,t[2]=-c*h,t[6]=m*u+_,t[10]=d-v*u}else if(e.order==="XZY"){const d=o*l,m=o*c,_=s*l,v=s*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=o*h,t[9]=m*u-_,t[2]=_*u-m,t[6]=s*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(P0,e,L0)}lookAt(e,t,r){const n=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),jr.crossVectors(r,Wt),jr.lengthSq()===0&&(Math.abs(r.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),jr.crossVectors(r,Wt)),jr.normalize(),ca.crossVectors(Wt,jr),n[0]=jr.x,n[4]=ca.x,n[8]=Wt.x,n[1]=jr.y,n[5]=ca.y,n[9]=Wt.y,n[2]=jr.z,n[6]=ca.z,n[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,a=this.elements,o=r[0],s=r[4],l=r[8],c=r[12],h=r[1],u=r[5],d=r[9],m=r[13],_=r[2],v=r[6],f=r[10],p=r[14],M=r[3],x=r[7],L=r[11],U=r[15],P=n[0],R=n[4],Q=n[8],S=n[12],E=n[1],j=n[5],X=n[9],de=n[13],I=n[2],G=n[6],q=n[10],J=n[14],K=n[3],Y=n[7],ie=n[11],ae=n[15];return a[0]=o*P+s*E+l*I+c*K,a[4]=o*R+s*j+l*G+c*Y,a[8]=o*Q+s*X+l*q+c*ie,a[12]=o*S+s*de+l*J+c*ae,a[1]=h*P+u*E+d*I+m*K,a[5]=h*R+u*j+d*G+m*Y,a[9]=h*Q+u*X+d*q+m*ie,a[13]=h*S+u*de+d*J+m*ae,a[2]=_*P+v*E+f*I+p*K,a[6]=_*R+v*j+f*G+p*Y,a[10]=_*Q+v*X+f*q+p*ie,a[14]=_*S+v*de+f*J+p*ae,a[3]=M*P+x*E+L*I+U*K,a[7]=M*R+x*j+L*G+U*Y,a[11]=M*Q+x*X+L*q+U*ie,a[15]=M*S+x*de+L*J+U*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14],_=e[3],v=e[7],f=e[11],p=e[15];return _*(+a*l*u-n*c*u-a*s*d+r*c*d+n*s*m-r*l*m)+v*(+t*l*m-t*c*d+a*o*d-n*o*m+n*c*h-a*l*h)+f*(+t*c*u-t*s*m-a*o*u+r*o*m+a*s*h-r*c*h)+p*(-n*s*h-t*l*u+t*s*d+n*o*u-r*o*d+r*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],_=e[12],v=e[13],f=e[14],p=e[15],M=u*f*c-v*d*c+v*l*m-s*f*m-u*l*p+s*d*p,x=_*d*c-h*f*c-_*l*m+o*f*m+h*l*p-o*d*p,L=h*v*c-_*u*c+_*s*m-o*v*m-h*s*p+o*u*p,U=_*u*l-h*v*l-_*s*d+o*v*d+h*s*f-o*u*f,P=t*M+r*x+n*L+a*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=M*R,e[1]=(v*d*a-u*f*a-v*n*m+r*f*m+u*n*p-r*d*p)*R,e[2]=(s*f*a-v*l*a+v*n*c-r*f*c-s*n*p+r*l*p)*R,e[3]=(u*l*a-s*d*a-u*n*c+r*d*c+s*n*m-r*l*m)*R,e[4]=x*R,e[5]=(h*f*a-_*d*a+_*n*m-t*f*m-h*n*p+t*d*p)*R,e[6]=(_*l*a-o*f*a-_*n*c+t*f*c+o*n*p-t*l*p)*R,e[7]=(o*d*a-h*l*a+h*n*c-t*d*c-o*n*m+t*l*m)*R,e[8]=L*R,e[9]=(_*u*a-h*v*a-_*r*m+t*v*m+h*r*p-t*u*p)*R,e[10]=(o*v*a-_*s*a+_*r*c-t*v*c-o*r*p+t*s*p)*R,e[11]=(h*s*a-o*u*a-h*r*c+t*u*c+o*r*m-t*s*m)*R,e[12]=U*R,e[13]=(h*v*n-_*u*n+_*r*d-t*v*d-h*r*f+t*u*f)*R,e[14]=(_*s*n-o*v*n-_*r*l+t*v*l+o*r*f-t*s*f)*R,e[15]=(o*u*n-h*s*n+h*r*l-t*u*l-o*r*d+t*s*d)*R,this}scale(e){const t=this.elements,r=e.x,n=e.y,a=e.z;return t[0]*=r,t[4]*=n,t[8]*=a,t[1]*=r,t[5]*=n,t[9]*=a,t[2]*=r,t[6]*=n,t[10]*=a,t[3]*=r,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),a=1-r,o=e.x,s=e.y,l=e.z,c=a*o,h=a*s;return this.set(c*o+r,c*s-n*l,c*l+n*s,0,c*s+n*l,h*s+r,h*l-n*o,0,c*l-n*s,h*l+n*o,a*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,a,o){return this.set(1,r,a,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,c=a+a,h=o+o,u=s+s,d=a*c,m=a*h,_=a*u,v=o*h,f=o*u,p=s*u,M=l*c,x=l*h,L=l*u,U=r.x,P=r.y,R=r.z;return n[0]=(1-(v+p))*U,n[1]=(m+L)*U,n[2]=(_-x)*U,n[3]=0,n[4]=(m-L)*P,n[5]=(1-(d+p))*P,n[6]=(f+M)*P,n[7]=0,n[8]=(_+x)*R,n[9]=(f-M)*R,n[10]=(1-(d+v))*R,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let a=Ui.set(n[0],n[1],n[2]).length();const o=Ui.set(n[4],n[5],n[6]).length(),s=Ui.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],ar.copy(this);const l=1/a,c=1/o,h=1/s;return ar.elements[0]*=l,ar.elements[1]*=l,ar.elements[2]*=l,ar.elements[4]*=c,ar.elements[5]*=c,ar.elements[6]*=c,ar.elements[8]*=h,ar.elements[9]*=h,ar.elements[10]*=h,t.setFromRotationMatrix(ar),r.x=a,r.y=o,r.z=s,this}makePerspective(e,t,r,n,a,o,s=yr){const l=this.elements,c=2*a/(t-e),h=2*a/(r-n),u=(t+e)/(t-e),d=(r+n)/(r-n);let m,_;if(s===yr)m=-(o+a)/(o-a),_=-2*o*a/(o-a);else if(s===ea)m=-o/(o-a),_=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,n,a,o,s=yr){const l=this.elements,c=1/(t-e),h=1/(r-n),u=1/(o-a),d=(t+e)*c,m=(r+n)*h;let _,v;if(s===yr)_=(o+a)*u,v=-2*u;else if(s===ea)_=a*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ui=new F,ar=new yt,P0=new F(0,0,0),L0=new F(1,1,1),jr=new F,ca=new F,Wt=new F,oc=new yt,lc=new Gr;class wn{constructor(e=0,t=0,r=0,n=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,a=n[0],o=n[4],s=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],m=n[10];switch(t){case"XYZ":this._y=Math.asin(Lt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return oc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oc,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lc.setFromEuler(this),this.setFromQuaternion(lc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class cc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let I0=0;const hc=new F,Ni=new Gr,Mr=new yt,ha=new F,xn=new F,D0=new F,U0=new Gr,uc=new F(1,0,0),dc=new F(0,1,0),pc=new F(0,0,1),N0={type:"added"},O0={type:"removed"};class Ct extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new F,t=new wn,r=new Gr,n=new F(1,1,1);function a(){r.setFromEuler(t,!1)}function o(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new yt},normalMatrix:{value:new Xe}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.premultiply(Ni),this}rotateX(e){return this.rotateOnAxis(uc,e)}rotateY(e){return this.rotateOnAxis(dc,e)}rotateZ(e){return this.rotateOnAxis(pc,e)}translateOnAxis(e,t){return hc.copy(e).applyQuaternion(this.quaternion),this.position.add(hc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uc,e)}translateY(e){return this.translateOnAxis(dc,e)}translateZ(e){return this.translateOnAxis(pc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?ha.copy(e):ha.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),xn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mr.lookAt(xn,ha,this.up):Mr.lookAt(ha,xn,this.up),this.quaternion.setFromRotationMatrix(Mr),n&&(Mr.extractRotation(n.matrixWorld),Ni.setFromRotationMatrix(Mr),this.quaternion.premultiply(Ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(N0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(O0)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const a=this.children[r].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xn,e,D0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xn,U0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++){const a=t[r];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let a=0,o=n.length;a<o;a++){const s=n[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];a(e.shapes,u)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));n.material=s}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let s=0;s<this.children.length;s++)n.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];n.animations.push(a(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),m=o(e.animations),_=o(e.nodes);s.length>0&&(r.geometries=s),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),h.length>0&&(r.images=h),u.length>0&&(r.shapes=u),d.length>0&&(r.skeletons=d),m.length>0&&(r.animations=m),_.length>0&&(r.nodes=_)}return r.object=n,r;function o(s){const l=[];for(const c in s){const h=s[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}Ct.DEFAULT_UP=new F(0,1,0),Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sr=new F,Er=new F,js=new F,Tr=new F,Oi=new F,Fi=new F,fc=new F,Xs=new F,qs=new F,Ys=new F;let ua=!1;class or{constructor(e=new F,t=new F,r=new F){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),sr.subVectors(e,t),n.cross(sr);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,r,n,a){sr.subVectors(n,t),Er.subVectors(r,t),js.subVectors(e,t);const o=sr.dot(sr),s=sr.dot(Er),l=sr.dot(js),c=Er.dot(Er),h=Er.dot(js),u=o*c-s*s;if(u===0)return a.set(0,0,0),null;const d=1/u,m=(c*l-s*h)*d,_=(o*h-s*l)*d;return a.set(1-m-_,_,m)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,Tr)===null?!1:Tr.x>=0&&Tr.y>=0&&Tr.x+Tr.y<=1}static getUV(e,t,r,n,a,o,s,l){return ua===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ua=!0),this.getInterpolation(e,t,r,n,a,o,s,l)}static getInterpolation(e,t,r,n,a,o,s,l){return this.getBarycoord(e,t,r,n,Tr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Tr.x),l.addScaledVector(o,Tr.y),l.addScaledVector(s,Tr.z),l)}static isFrontFacing(e,t,r,n){return sr.subVectors(r,t),Er.subVectors(e,t),sr.cross(Er).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sr.subVectors(this.c,this.b),Er.subVectors(this.a,this.b),sr.cross(Er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return or.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return or.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,n,a){return ua===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ua=!0),or.getInterpolation(e,this.a,this.b,this.c,t,r,n,a)}getInterpolation(e,t,r,n,a){return or.getInterpolation(e,this.a,this.b,this.c,t,r,n,a)}containsPoint(e){return or.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return or.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,a=this.c;let o,s;Oi.subVectors(n,r),Fi.subVectors(a,r),Xs.subVectors(e,r);const l=Oi.dot(Xs),c=Fi.dot(Xs);if(l<=0&&c<=0)return t.copy(r);qs.subVectors(e,n);const h=Oi.dot(qs),u=Fi.dot(qs);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(r).addScaledVector(Oi,o);Ys.subVectors(e,a);const m=Oi.dot(Ys),_=Fi.dot(Ys);if(_>=0&&m<=_)return t.copy(a);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return s=c/(c-_),t.copy(r).addScaledVector(Fi,s);const f=h*_-m*u;if(f<=0&&u-h>=0&&m-_>=0)return fc.subVectors(a,n),s=(u-h)/(u-h+(m-_)),t.copy(n).addScaledVector(fc,s);const p=1/(f+v+d);return o=v*p,s=d*p,t.copy(r).addScaledVector(Oi,o).addScaledVector(Fi,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xr={h:0,s:0,l:0},da={h:0,s:0,l:0};function Ks(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Je{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,r,n=at.workingColorSpace){return this.r=e,this.g=t,this.b=r,at.toWorkingColorSpace(this,n),this}setHSL(e,t,r,n=at.workingColorSpace){if(e=Ds(e,1),t=Lt(t,0,1),r=Lt(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,o=2*r-a;this.r=Ks(o,a,e+1/3),this.g=Ks(o,a,e),this.b=Ks(o,a,e-1/3)}return at.toWorkingColorSpace(this,n),this}setStyle(e,t=At){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=n[1],s=n[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const r=mc[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return at.fromWorkingColorSpace(It.copy(this),e),Math.round(Lt(It.r*255,0,255))*65536+Math.round(Lt(It.g*255,0,255))*256+Math.round(Lt(It.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(It.copy(this),t);const r=It.r,n=It.g,a=It.b,o=Math.max(r,n,a),s=Math.min(r,n,a);let l,c;const h=(s+o)/2;if(s===o)l=0,c=0;else{const u=o-s;switch(c=h<=.5?u/(o+s):u/(2-o-s),o){case r:l=(n-a)/u+(n<a?6:0);break;case n:l=(a-r)/u+2;break;case a:l=(r-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=At){at.fromWorkingColorSpace(It.copy(this),e);const t=It.r,r=It.g,n=It.b;return e!==At?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(Xr),this.setHSL(Xr.h+e,Xr.s+t,Xr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Xr),e.getHSL(da);const r=fn(Xr.h,da.h,t),n=fn(Xr.s,da.s,t),a=fn(Xr.l,da.l,t);return this.setHSL(r,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,n=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*n,this.g=a[1]*t+a[4]*r+a[7]*n,this.b=a[2]*t+a[5]*r+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Je;Je.NAMES=mc;let F0=0;class yn extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=Si,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_s,this.blendDst=vs,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Yn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(r.blending=this.blending),this.side!==Nr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==_s&&(r.blendSrc=this.blendSrc),this.blendDst!==vs&&(r.blendDst=this.blendDst),this.blendEquation!==$r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Yn&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ql&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(t){const a=n(e.textures),o=n(e.images);a.length>0&&(r.textures=a),o.length>0&&(r.images=o)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let a=0;a!==n;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gc extends yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ws,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new F,pa=new Oe;class pr{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Kl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Hr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)pa.fromBufferAttribute(this,t),pa.applyMatrix3(e),this.setXY(t,pa.x,pa.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ai(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ot(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),r=Ot(r,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,a){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),r=Ot(r,this.array),n=Ot(n,this.array),a=Ot(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kl&&(e.usage=this.usage),e}}class _c extends pr{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class vc extends pr{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class fr extends pr{constructor(e,t,r){super(new Float32Array(e),t,r)}}let z0=0;const Kt=new yt,Js=new Ct,zi=new F,jt=new gn,Sn=new gn,Tt=new F;class qr extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ql(e)?vc:_c)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new Xe().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,r){return Kt.makeTranslation(e,t,r),this.applyMatrix4(Kt),this}scale(e,t,r){return Kt.makeScale(e,t,r),this.applyMatrix4(Kt),this}lookAt(e){return Js.lookAt(e),Js.updateMatrix(),this.applyMatrix4(Js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){const t=[];for(let r=0,n=e.length;r<n;r++){const a=e[r];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new fr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const a=t[r];jt.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const r=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(jt.min,Sn.min),jt.expandByPoint(Tt),Tt.addVectors(jt.max,Sn.max),jt.expandByPoint(Tt)):(jt.expandByPoint(Sn.min),jt.expandByPoint(Sn.max))}jt.getCenter(r);let n=0;for(let a=0,o=e.count;a<o;a++)Tt.fromBufferAttribute(e,a),n=Math.max(n,r.distanceToSquared(Tt));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],l=this.morphTargetsRelative;for(let c=0,h=s.count;c<h;c++)Tt.fromBufferAttribute(s,c),l&&(zi.fromBufferAttribute(e,c),Tt.add(zi)),n=Math.max(n,r.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,n=t.position.array,a=t.normal.array,o=t.uv.array,s=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pr(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<s;E++)c[E]=new F,h[E]=new F;const u=new F,d=new F,m=new F,_=new Oe,v=new Oe,f=new Oe,p=new F,M=new F;function x(E,j,X){u.fromArray(n,E*3),d.fromArray(n,j*3),m.fromArray(n,X*3),_.fromArray(o,E*2),v.fromArray(o,j*2),f.fromArray(o,X*2),d.sub(u),m.sub(u),v.sub(_),f.sub(_);const de=1/(v.x*f.y-f.x*v.y);isFinite(de)&&(p.copy(d).multiplyScalar(f.y).addScaledVector(m,-v.y).multiplyScalar(de),M.copy(m).multiplyScalar(v.x).addScaledVector(d,-f.x).multiplyScalar(de),c[E].add(p),c[j].add(p),c[X].add(p),h[E].add(M),h[j].add(M),h[X].add(M))}let L=this.groups;L.length===0&&(L=[{start:0,count:r.length}]);for(let E=0,j=L.length;E<j;++E){const X=L[E],de=X.start,I=X.count;for(let G=de,q=de+I;G<q;G+=3)x(r[G+0],r[G+1],r[G+2])}const U=new F,P=new F,R=new F,Q=new F;function S(E){R.fromArray(a,E*3),Q.copy(R);const j=c[E];U.copy(j),U.sub(R.multiplyScalar(R.dot(j))).normalize(),P.crossVectors(Q,j);const X=P.dot(h[E])<0?-1:1;l[E*4]=U.x,l[E*4+1]=U.y,l[E*4+2]=U.z,l[E*4+3]=X}for(let E=0,j=L.length;E<j;++E){const X=L[E],de=X.start,I=X.count;for(let G=de,q=de+I;G<q;G+=3)S(r[G+0]),S(r[G+1]),S(r[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new pr(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let d=0,m=r.count;d<m;d++)r.setXYZ(d,0,0,0);const n=new F,a=new F,o=new F,s=new F,l=new F,c=new F,h=new F,u=new F;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),v=e.getX(d+1),f=e.getX(d+2);n.fromBufferAttribute(t,_),a.fromBufferAttribute(t,v),o.fromBufferAttribute(t,f),h.subVectors(o,a),u.subVectors(n,a),h.cross(u),s.fromBufferAttribute(r,_),l.fromBufferAttribute(r,v),c.fromBufferAttribute(r,f),s.add(h),l.add(h),c.add(h),r.setXYZ(_,s.x,s.y,s.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)n.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,a),u.subVectors(n,a),h.cross(u),r.setXYZ(d+0,h.x,h.y,h.z),r.setXYZ(d+1,h.x,h.y,h.z),r.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(s,l){const c=s.array,h=s.itemSize,u=s.normalized,d=new c.constructor(l.length*h);let m=0,_=0;for(let v=0,f=l.length;v<f;v++){s.isInterleavedBufferAttribute?m=l[v]*s.data.stride+s.offset:m=l[v]*h;for(let p=0;p<h;p++)d[_++]=c[m++]}return new pr(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qr,r=this.index.array,n=this.attributes;for(const s in n){const l=n[s],c=e(l,r);t.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=e(d,r);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(n[l]=h,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],u=a[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wc=new yt,oi=new sc,fa=new Gs,xc=new F,Bi=new F,Hi=new F,Gi=new F,Zs=new F,ma=new F,ga=new Oe,_a=new Oe,va=new Oe,yc=new F,Sc=new F,bc=new F,wa=new F,xa=new F;class Rr extends Ct{constructor(e=new qr,t=new gc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,a=r.morphAttributes.position,o=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const s=this.morphTargetInfluences;if(a&&s){ma.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=s[l],u=a[l];h!==0&&(Zs.fromBufferAttribute(u,e),o?ma.addScaledVector(Zs,h):ma.addScaledVector(Zs.sub(t),h))}t.add(ma)}return t}raycast(e,t){const r=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),fa.copy(r.boundingSphere),fa.applyMatrix4(a),oi.copy(e.ray).recast(e.near),!(fa.containsPoint(oi.origin)===!1&&(oi.intersectSphere(fa,xc)===null||oi.origin.distanceToSquared(xc)>(e.far-e.near)**2))&&(wc.copy(a).invert(),oi.copy(e.ray).applyMatrix4(wc),!(r.boundingBox!==null&&oi.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,oi)))}_computeIntersections(e,t,r){let n;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,m=a.drawRange;if(s!==null)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const f=d[_],p=o[f.materialIndex],M=Math.max(f.start,m.start),x=Math.min(s.count,Math.min(f.start+f.count,m.start+m.count));for(let L=M,U=x;L<U;L+=3){const P=s.getX(L),R=s.getX(L+1),Q=s.getX(L+2);n=ya(this,p,e,r,c,h,u,P,R,Q),n&&(n.faceIndex=Math.floor(L/3),n.face.materialIndex=f.materialIndex,t.push(n))}}else{const _=Math.max(0,m.start),v=Math.min(s.count,m.start+m.count);for(let f=_,p=v;f<p;f+=3){const M=s.getX(f),x=s.getX(f+1),L=s.getX(f+2);n=ya(this,o,e,r,c,h,u,M,x,L),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const f=d[_],p=o[f.materialIndex],M=Math.max(f.start,m.start),x=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let L=M,U=x;L<U;L+=3){const P=L,R=L+1,Q=L+2;n=ya(this,p,e,r,c,h,u,P,R,Q),n&&(n.faceIndex=Math.floor(L/3),n.face.materialIndex=f.materialIndex,t.push(n))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let f=_,p=v;f<p;f+=3){const M=f,x=f+1,L=f+2;n=ya(this,o,e,r,c,h,u,M,x,L),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}}}}function B0(i,e,t,r,n,a,o,s){let l;if(e.side===Ht?l=r.intersectTriangle(o,a,n,!0,s):l=r.intersectTriangle(n,a,o,e.side===Nr,s),l===null)return null;xa.copy(s),xa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(xa);return c<t.near||c>t.far?null:{distance:c,point:xa.clone(),object:i}}function ya(i,e,t,r,n,a,o,s,l,c){i.getVertexPosition(s,Bi),i.getVertexPosition(l,Hi),i.getVertexPosition(c,Gi);const h=B0(i,e,t,r,Bi,Hi,Gi,wa);if(h){n&&(ga.fromBufferAttribute(n,s),_a.fromBufferAttribute(n,l),va.fromBufferAttribute(n,c),h.uv=or.getInterpolation(wa,Bi,Hi,Gi,ga,_a,va,new Oe)),a&&(ga.fromBufferAttribute(a,s),_a.fromBufferAttribute(a,l),va.fromBufferAttribute(a,c),h.uv1=or.getInterpolation(wa,Bi,Hi,Gi,ga,_a,va,new Oe),h.uv2=h.uv1),o&&(yc.fromBufferAttribute(o,s),Sc.fromBufferAttribute(o,l),bc.fromBufferAttribute(o,c),h.normal=or.getInterpolation(wa,Bi,Hi,Gi,yc,Sc,bc,new F),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));const u={a:s,b:l,c,normal:new F,materialIndex:0};or.getNormal(Bi,Hi,Gi,u.normal),h.face=u}return h}class ki extends qr{constructor(e=1,t=1,r=1,n=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:a,depthSegments:o};const s=this;n=Math.floor(n),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,m=0;_("z","y","x",-1,-1,r,t,e,o,a,0),_("z","y","x",1,-1,r,t,-e,o,a,1),_("x","z","y",1,1,e,r,t,n,o,2),_("x","z","y",1,-1,e,r,-t,n,o,3),_("x","y","z",1,-1,e,t,r,n,a,4),_("x","y","z",-1,-1,e,t,-r,n,a,5),this.setIndex(l),this.setAttribute("position",new fr(c,3)),this.setAttribute("normal",new fr(h,3)),this.setAttribute("uv",new fr(u,2));function _(v,f,p,M,x,L,U,P,R,Q,S){const E=L/R,j=U/Q,X=L/2,de=U/2,I=P/2,G=R+1,q=Q+1;let J=0,K=0;const Y=new F;for(let ie=0;ie<q;ie++){const ae=ie*j-de;for(let me=0;me<G;me++){const V=me*E-X;Y[v]=V*M,Y[f]=ae*x,Y[p]=I,c.push(Y.x,Y.y,Y.z),Y[v]=0,Y[f]=0,Y[p]=P>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(me/R),u.push(1-ie/Q),J+=1}}for(let ie=0;ie<Q;ie++)for(let ae=0;ae<R;ae++){const me=d+ae+G*ie,V=d+ae+G*(ie+1),$=d+(ae+1)+G*(ie+1),ve=d+(ae+1)+G*ie;l.push(me,V,ve),l.push(V,$,ve),K+=6}s.addGroup(m,K,S),m+=K,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vi(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const n=i[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function Ft(i){const e={};for(let t=0;t<i.length;t++){const r=Vi(i[t]);for(const n in r)e[n]=r[n]}return e}function H0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Mc(i){return i.getRenderTarget()===null?i.outputColorSpace:at.workingColorSpace}const G0={clone:Vi,merge:Ft};var k0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,V0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k0,this.fragmentShader=V0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vi(e.uniforms),this.uniformsGroups=H0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Ec extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=yr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Jt extends Ec{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pn*2*Math.atan(Math.tan(dn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,n,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(dn*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,a=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*n/l,t-=o.offsetY*r/c,n*=o.width/l,r*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wi=-90,ji=1;class W0 extends Ct{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Jt(Wi,ji,e,t);n.layers=this.layers,this.add(n);const a=new Jt(Wi,ji,e,t);a.layers=this.layers,this.add(a);const o=new Jt(Wi,ji,e,t);o.layers=this.layers,this.add(o);const s=new Jt(Wi,ji,e,t);s.layers=this.layers,this.add(s);const l=new Jt(Wi,ji,e,t);l.layers=this.layers,this.add(l);const c=new Jt(Wi,ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,n,a,o,s,l]=t;for(const c of t)this.remove(c);if(e===yr)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ea)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(t,a),e.setRenderTarget(r,1,n),e.render(t,o),e.setRenderTarget(r,2,n),e.render(t,s),e.setRenderTarget(r,3,n),e.render(t,l),e.setRenderTarget(r,4,n),e.render(t,c),r.texture.generateMipmaps=v,e.setRenderTarget(r,5,n),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=_,r.texture.needsPMREMUpdate=!0}}class Tc extends Vt{constructor(e,t,r,n,a,o,s,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:bi,super(e,t,r,n,a,o,s,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class j0 extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];t.encoding!==void 0&&(mn("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ri?At:Yt),this.texture=new Tc(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new ki(5,5,5),a=new li({name:"CubemapFromEquirect",uniforms:Vi(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ht,blending:Or});a.uniforms.tEquirect.value=t;const o=new Rr(n,a),s=t.minFilter;return t.minFilter===hn&&(t.minFilter=qt),new W0(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,r,n){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,r,n);e.setRenderTarget(a)}}const Qs=new F,X0=new F,q0=new Xe;class Yr{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=Qs.subVectors(r,t).cross(X0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Qs),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||q0.getNormalMatrix(e),n=this.coplanarPoint(Qs).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new Gs,Sa=new F;class $s{constructor(e=new Yr,t=new Yr,r=new Yr,n=new Yr,a=new Yr,o=new Yr){this.planes=[e,t,r,n,a,o]}set(e,t,r,n,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(r),s[3].copy(n),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=yr){const r=this.planes,n=e.elements,a=n[0],o=n[1],s=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],m=n[8],_=n[9],v=n[10],f=n[11],p=n[12],M=n[13],x=n[14],L=n[15];if(r[0].setComponents(l-a,d-c,f-m,L-p).normalize(),r[1].setComponents(l+a,d+c,f+m,L+p).normalize(),r[2].setComponents(l+o,d+h,f+_,L+M).normalize(),r[3].setComponents(l-o,d-h,f-_,L-M).normalize(),r[4].setComponents(l-s,d-u,f-v,L-x).normalize(),t===yr)r[5].setComponents(l+s,d+u,f+v,L+x).normalize();else if(t===ea)r[5].setComponents(s,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(e){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(Sa.x=n.normal.x>0?e.max.x:e.min.x,Sa.y=n.normal.y>0?e.max.y:e.min.y,Sa.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rc(){let i=null,e=!1,t=null,r=null;function n(a,o){t(a,o),r=i.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=i.requestAnimationFrame(n),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Y0(i,e){const t=e.isWebGL2,r=new WeakMap;function n(c,h){const u=c.array,d=c.usage,m=u.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,u,d),c.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function a(c,h,u){const d=h.array,m=h._updateRange,_=h.updateRanges;if(i.bindBuffer(u,c),m.count===-1&&_.length===0&&i.bufferSubData(u,0,d),_.length!==0){for(let v=0,f=_.length;v<f;v++){const p=_[v];t?i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),r.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=r.get(c);h&&(i.deleteBuffer(h.buffer),r.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=r.get(c);(!d||d.version<c.version)&&r.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=r.get(c);if(u===void 0)r.set(c,n(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(u.buffer,c,h),u.version=c.version}}return{get:o,remove:s,update:l}}class eo extends qr{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const a=e/2,o=t/2,s=Math.floor(r),l=Math.floor(n),c=s+1,h=l+1,u=e/s,d=t/l,m=[],_=[],v=[],f=[];for(let p=0;p<h;p++){const M=p*d-o;for(let x=0;x<c;x++){const L=x*u-a;_.push(L,-M,0),v.push(0,0,1),f.push(x/s),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<s;M++){const x=M+c*p,L=M+c*(p+1),U=M+1+c*(p+1),P=M+1+c*p;m.push(x,L,P),m.push(L,U,P)}this.setIndex(m),this.setAttribute("position",new fr(_,3)),this.setAttribute("normal",new fr(v,3)),this.setAttribute("uv",new fr(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.width,e.height,e.widthSegments,e.heightSegments)}}var K0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Z0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ew=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iw=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,aw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ow=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,uw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_w=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ww=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ew="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Rw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Aw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Iw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ow=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ww=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$w=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,tx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ax=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ox=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,hx=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ux=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,dx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,px=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_x=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Mx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ax=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Px=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Lx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ix=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ux=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ox=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ey=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ty=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ry=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ay=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ly=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,py=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,my=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_y=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,by=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,My=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ey=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ty=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ry=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:K0,alphahash_pars_fragment:J0,alphamap_fragment:Z0,alphamap_pars_fragment:Q0,alphatest_fragment:$0,alphatest_pars_fragment:ew,aomap_fragment:tw,aomap_pars_fragment:rw,batching_pars_vertex:iw,batching_vertex:nw,begin_vertex:aw,beginnormal_vertex:sw,bsdfs:ow,iridescence_fragment:lw,bumpmap_pars_fragment:cw,clipping_planes_fragment:hw,clipping_planes_pars_fragment:uw,clipping_planes_pars_vertex:dw,clipping_planes_vertex:pw,color_fragment:fw,color_pars_fragment:mw,color_pars_vertex:gw,color_vertex:_w,common:vw,cube_uv_reflection_fragment:ww,defaultnormal_vertex:xw,displacementmap_pars_vertex:yw,displacementmap_vertex:Sw,emissivemap_fragment:bw,emissivemap_pars_fragment:Mw,colorspace_fragment:Ew,colorspace_pars_fragment:Tw,envmap_fragment:Rw,envmap_common_pars_fragment:Aw,envmap_pars_fragment:Cw,envmap_pars_vertex:Pw,envmap_physical_pars_fragment:kw,envmap_vertex:Lw,fog_vertex:Iw,fog_pars_vertex:Dw,fog_fragment:Uw,fog_pars_fragment:Nw,gradientmap_pars_fragment:Ow,lightmap_fragment:Fw,lightmap_pars_fragment:zw,lights_lambert_fragment:Bw,lights_lambert_pars_fragment:Hw,lights_pars_begin:Gw,lights_toon_fragment:Vw,lights_toon_pars_fragment:Ww,lights_phong_fragment:jw,lights_phong_pars_fragment:Xw,lights_physical_fragment:qw,lights_physical_pars_fragment:Yw,lights_fragment_begin:Kw,lights_fragment_maps:Jw,lights_fragment_end:Zw,logdepthbuf_fragment:Qw,logdepthbuf_pars_fragment:$w,logdepthbuf_pars_vertex:ex,logdepthbuf_vertex:tx,map_fragment:rx,map_pars_fragment:ix,map_particle_fragment:nx,map_particle_pars_fragment:ax,metalnessmap_fragment:sx,metalnessmap_pars_fragment:ox,morphcolor_vertex:lx,morphnormal_vertex:cx,morphtarget_pars_vertex:hx,morphtarget_vertex:ux,normal_fragment_begin:dx,normal_fragment_maps:px,normal_pars_fragment:fx,normal_pars_vertex:mx,normal_vertex:gx,normalmap_pars_fragment:_x,clearcoat_normal_fragment_begin:vx,clearcoat_normal_fragment_maps:wx,clearcoat_pars_fragment:xx,iridescence_pars_fragment:yx,opaque_fragment:Sx,packing:bx,premultiplied_alpha_fragment:Mx,project_vertex:Ex,dithering_fragment:Tx,dithering_pars_fragment:Rx,roughnessmap_fragment:Ax,roughnessmap_pars_fragment:Cx,shadowmap_pars_fragment:Px,shadowmap_pars_vertex:Lx,shadowmap_vertex:Ix,shadowmask_pars_fragment:Dx,skinbase_vertex:Ux,skinning_pars_vertex:Nx,skinning_vertex:Ox,skinnormal_vertex:Fx,specularmap_fragment:zx,specularmap_pars_fragment:Bx,tonemapping_fragment:Hx,tonemapping_pars_fragment:Gx,transmission_fragment:kx,transmission_pars_fragment:Vx,uv_pars_fragment:Wx,uv_pars_vertex:jx,uv_vertex:Xx,worldpos_vertex:qx,background_vert:Yx,background_frag:Kx,backgroundCube_vert:Jx,backgroundCube_frag:Zx,cube_vert:Qx,cube_frag:$x,depth_vert:ey,depth_frag:ty,distanceRGBA_vert:ry,distanceRGBA_frag:iy,equirect_vert:ny,equirect_frag:ay,linedashed_vert:sy,linedashed_frag:oy,meshbasic_vert:ly,meshbasic_frag:cy,meshlambert_vert:hy,meshlambert_frag:uy,meshmatcap_vert:dy,meshmatcap_frag:py,meshnormal_vert:fy,meshnormal_frag:my,meshphong_vert:gy,meshphong_frag:_y,meshphysical_vert:vy,meshphysical_frag:wy,meshtoon_vert:xy,meshtoon_frag:yy,points_vert:Sy,points_frag:by,shadow_vert:My,shadow_frag:Ey,sprite_vert:Ty,sprite_frag:Ry},he={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},mr={basic:{uniforms:Ft([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Ft([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Je(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Ft([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Ft([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Ft([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Je(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Ft([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Ft([he.points,he.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Ft([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Ft([he.common,he.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Ft([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Ft([he.sprite,he.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Ft([he.common,he.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Ft([he.lights,he.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};mr.physical={uniforms:Ft([mr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const ba={r:0,b:0,g:0};function Ay(i,e,t,r,n,a,o){const s=new Je(0);let l=a===!0?0:1,c,h,u=null,d=0,m=null;function _(f,p){let M=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?v(s,l):x&&x.isColor&&(v(x,1),M=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?r.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Kn)?(h===void 0&&(h=new Rr(new ki(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Vi(mr.backgroundCube.uniforms),vertexShader:mr.backgroundCube.vertexShader,fragmentShader:mr.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=at.getTransfer(x.colorSpace)!==ct,(u!==x||d!==x.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,m=i.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Rr(new eo(2,2),new li({name:"BackgroundMaterial",uniforms:Vi(mr.background.uniforms),vertexShader:mr.background.vertexShader,fragmentShader:mr.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=at.getTransfer(x.colorSpace)!==ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,m=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function v(f,p){f.getRGB(ba,Mc(i)),r.buffers.color.setClear(ba.r,ba.g,ba.b,p,o)}return{getClearColor:function(){return s},setClearColor:function(f,p=1){s.set(f),l=p,v(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,v(s,l)},render:_}}function Cy(i,e,t,r){const n=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=r.isWebGL2?null:e.get("OES_vertex_array_object"),o=r.isWebGL2||a!==null,s={},l=f(null);let c=l,h=!1;function u(I,G,q,J,K){let Y=!1;if(o){const ie=v(J,q,G);c!==ie&&(c=ie,m(c.object)),Y=p(I,J,q,K),Y&&M(I,J,q,K)}else{const ie=G.wireframe===!0;(c.geometry!==J.id||c.program!==q.id||c.wireframe!==ie)&&(c.geometry=J.id,c.program=q.id,c.wireframe=ie,Y=!0)}K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,Q(I,G,q,J),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function d(){return r.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function m(I){return r.isWebGL2?i.bindVertexArray(I):a.bindVertexArrayOES(I)}function _(I){return r.isWebGL2?i.deleteVertexArray(I):a.deleteVertexArrayOES(I)}function v(I,G,q){const J=q.wireframe===!0;let K=s[I.id];K===void 0&&(K={},s[I.id]=K);let Y=K[G.id];Y===void 0&&(Y={},K[G.id]=Y);let ie=Y[J];return ie===void 0&&(ie=f(d()),Y[J]=ie),ie}function f(I){const G=[],q=[],J=[];for(let K=0;K<n;K++)G[K]=0,q[K]=0,J[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:q,attributeDivisors:J,object:I,attributes:{},index:null}}function p(I,G,q,J){const K=c.attributes,Y=G.attributes;let ie=0;const ae=q.getAttributes();for(const me in ae)if(ae[me].location>=0){const V=K[me];let $=Y[me];if($===void 0&&(me==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),me==="instanceColor"&&I.instanceColor&&($=I.instanceColor)),V===void 0||V.attribute!==$||$&&V.data!==$.data)return!0;ie++}return c.attributesNum!==ie||c.index!==J}function M(I,G,q,J){const K={},Y=G.attributes;let ie=0;const ae=q.getAttributes();for(const me in ae)if(ae[me].location>=0){let V=Y[me];V===void 0&&(me==="instanceMatrix"&&I.instanceMatrix&&(V=I.instanceMatrix),me==="instanceColor"&&I.instanceColor&&(V=I.instanceColor));const $={};$.attribute=V,V&&V.data&&($.data=V.data),K[me]=$,ie++}c.attributes=K,c.attributesNum=ie,c.index=J}function x(){const I=c.newAttributes;for(let G=0,q=I.length;G<q;G++)I[G]=0}function L(I){U(I,0)}function U(I,G){const q=c.newAttributes,J=c.enabledAttributes,K=c.attributeDivisors;q[I]=1,J[I]===0&&(i.enableVertexAttribArray(I),J[I]=1),K[I]!==G&&((r.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,G),K[I]=G)}function P(){const I=c.newAttributes,G=c.enabledAttributes;for(let q=0,J=G.length;q<J;q++)G[q]!==I[q]&&(i.disableVertexAttribArray(q),G[q]=0)}function R(I,G,q,J,K,Y,ie){ie===!0?i.vertexAttribIPointer(I,G,q,K,Y):i.vertexAttribPointer(I,G,q,J,K,Y)}function Q(I,G,q,J){if(r.isWebGL2===!1&&(I.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const K=J.attributes,Y=q.getAttributes(),ie=G.defaultAttributeValues;for(const ae in Y){const me=Y[ae];if(me.location>=0){let V=K[ae];if(V===void 0&&(ae==="instanceMatrix"&&I.instanceMatrix&&(V=I.instanceMatrix),ae==="instanceColor"&&I.instanceColor&&(V=I.instanceColor)),V!==void 0){const $=V.normalized,ve=V.itemSize,Se=t.get(V);if(Se===void 0)continue;const ye=Se.buffer,De=Se.type,Ne=Se.bytesPerElement,Ce=r.isWebGL2===!0&&(De===i.INT||De===i.UNSIGNED_INT||V.gpuType===pl);if(V.isInterleavedBufferAttribute){const Qe=V.data,H=Qe.stride,Rt=V.offset;if(Qe.isInstancedInterleavedBuffer){for(let Ee=0;Ee<me.locationSize;Ee++)U(me.location+Ee,Qe.meshPerAttribute);I.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Qe.meshPerAttribute*Qe.count)}else for(let Ee=0;Ee<me.locationSize;Ee++)L(me.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let Ee=0;Ee<me.locationSize;Ee++)R(me.location+Ee,ve/me.locationSize,De,$,H*Ne,(Rt+ve/me.locationSize*Ee)*Ne,Ce)}else{if(V.isInstancedBufferAttribute){for(let Qe=0;Qe<me.locationSize;Qe++)U(me.location+Qe,V.meshPerAttribute);I.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Qe=0;Qe<me.locationSize;Qe++)L(me.location+Qe);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let Qe=0;Qe<me.locationSize;Qe++)R(me.location+Qe,ve/me.locationSize,De,$,ve*Ne,ve/me.locationSize*Qe*Ne,Ce)}}else if(ie!==void 0){const $=ie[ae];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(me.location,$);break;case 3:i.vertexAttrib3fv(me.location,$);break;case 4:i.vertexAttrib4fv(me.location,$);break;default:i.vertexAttrib1fv(me.location,$)}}}}P()}function S(){X();for(const I in s){const G=s[I];for(const q in G){const J=G[q];for(const K in J)_(J[K].object),delete J[K];delete G[q]}delete s[I]}}function E(I){if(s[I.id]===void 0)return;const G=s[I.id];for(const q in G){const J=G[q];for(const K in J)_(J[K].object),delete J[K];delete G[q]}delete s[I.id]}function j(I){for(const G in s){const q=s[G];if(q[I.id]===void 0)continue;const J=q[I.id];for(const K in J)_(J[K].object),delete J[K];delete q[I.id]}}function X(){de(),h=!0,c!==l&&(c=l,m(c.object))}function de(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:X,resetDefaultState:de,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:j,initAttributes:x,enableAttribute:L,disableUnusedAttributes:P}}function Py(i,e,t,r){const n=r.isWebGL2;let a;function o(h){a=h}function s(h,u){i.drawArrays(a,h,u),t.update(u,a,1)}function l(h,u,d){if(d===0)return;let m,_;if(n)m=i,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](a,h,u,d),t.update(u,a,d)}function c(h,u,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<d;_++)this.render(h[_],u[_]);else{m.multiDrawArraysWEBGL(a,h,0,u,0,d);let _=0;for(let v=0;v<d;v++)_+=u[v];t.update(_,a,1)}}this.setMode=o,this.render=s,this.renderInstances=l,this.renderMultiDraw=c}function Ly(i,e,t){let r;function n(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,L=o||e.has("OES_texture_float"),U=x&&L,P=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:L,floatVertexTextures:U,maxSamples:P}}function Iy(i){const e=this;let t=null,r=0,n=!1,a=!1;const o=new Yr,s=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||r!==0||n;return n=d,r=u.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){const _=u.clippingPlanes,v=u.clipIntersection,f=u.clipShadows,p=i.get(u);if(!n||_===null||_.length===0||a&&!f)a?h(null):c();else{const M=a?0:r,x=M*4;let L=p.clippingState||null;l.value=L,L=h(_,d,x,m);for(let U=0;U!==x;++U)L[U]=t[U];p.clippingState=L,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function h(u,d,m,_){const v=u!==null?u.length:0;let f=null;if(v!==0){if(f=l.value,_!==!0||f===null){const p=m+v*4,M=d.matrixWorldInverse;s.getNormalMatrix(M),(f===null||f.length<p)&&(f=new Float32Array(p));for(let x=0,L=m;x!==v;++x,L+=4)o.copy(u[x]).applyMatrix4(M,s),o.normal.toArray(f,L),f[L+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}function Dy(i){let e=new WeakMap;function t(o,s){return s===xs?o.mapping=bi:s===ys&&(o.mapping=Mi),o}function r(o){if(o&&o.isTexture){const s=o.mapping;if(s===xs||s===ys)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new j0(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){const s=o.target;s.removeEventListener("dispose",n);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}class Ac extends Ec{constructor(e=-1,t=1,r=1,n=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=r-e,o=r+e,s=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=h*this.view.offsetY,l=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xi=4,Cc=[.125,.215,.35,.446,.526,.582],hi=20,to=new Ac,Pc=new Je;let ro=null,io=0,no=0;const ui=(1+Math.sqrt(5))/2,qi=1/ui,Lc=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,ui,qi),new F(0,ui,-qi),new F(qi,0,ui),new F(-qi,0,ui),new F(ui,qi,0),new F(-ui,qi,0)];class Ic{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100){ro=this._renderer.getRenderTarget(),io=this._renderer.getActiveCubeFace(),no=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,n,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ro,io,no),e.scissorTest=!1,Ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bi||e.mapping===Mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ro=this._renderer.getRenderTarget(),io=this._renderer.getActiveCubeFace(),no=this._renderer.getActiveMipmapLevel();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:un,format:ir,colorSpace:xr,depthBuffer:!1},n=Dc(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dc(e,t,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Uy(a)),this._blurMaterial=Ny(a,e,t)}return n}_compileMaterial(e){const t=new Rr(this._lodPlanes[0],e);this._renderer.compile(t,to)}_sceneToCubeUV(e,t,r,n){const a=new Jt(90,1,t,r),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Pc),l.toneMapping=Fr,l.autoClear=!1;const u=new gc({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),d=new Rr(new ki,u);let m=!1;const _=e.background;_?_.isColor&&(u.color.copy(_),e.background=null,m=!0):(u.color.copy(Pc),m=!0);for(let v=0;v<6;v++){const f=v%3;f===0?(a.up.set(0,o[v],0),a.lookAt(s[v],0,0)):f===1?(a.up.set(0,0,o[v]),a.lookAt(0,s[v],0)):(a.up.set(0,o[v],0),a.lookAt(0,0,s[v]));const p=this._cubeSize;Ma(n,f*p,v>2?p:0,p,p),l.setRenderTarget(n),m&&l.render(d,a),l.render(e,a)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=_}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===bi||e.mapping===Mi;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uc());const a=n?this._cubemapMaterial:this._equirectMaterial,o=new Rr(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;Ma(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(o,to)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=Lc[(n-1)%Lc.length];this._blur(e,n-1,n,a,o)}t.autoClear=r}_blur(e,t,r,n,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,r,n,"latitudinal",a),this._halfBlur(o,e,r,r,n,"longitudinal",a)}_halfBlur(e,t,r,n,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Rr(this._lodPlanes[n],c),d=c.uniforms,m=this._sizeLods[r]-1,_=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*hi-1),v=a/_,f=isFinite(a)?1+Math.floor(h*v):hi;f>hi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${hi}`);const p=[];let M=0;for(let R=0;R<hi;++R){const Q=R/v,S=Math.exp(-Q*Q/2);p.push(S),R===0?M+=S:R<f&&(M+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/M;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=o==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-r;const L=this._sizeLods[n],U=3*L*(n>x-Xi?n-x+Xi:0),P=4*(this._cubeSize-L);Ma(t,U,P,3*L,2*L),l.setRenderTarget(t),l.render(u,to)}}function Uy(i){const e=[],t=[],r=[];let n=i;const a=i-Xi+1+Cc.length;for(let o=0;o<a;o++){const s=Math.pow(2,n);t.push(s);let l=1/s;o>i-Xi?l=Cc[o-i+Xi-1]:o===0&&(l=0),r.push(l);const c=1/(s-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,v=3,f=2,p=1,M=new Float32Array(v*_*m),x=new Float32Array(f*_*m),L=new Float32Array(p*_*m);for(let P=0;P<m;P++){const R=P%3*2/3-1,Q=P>2?0:-1,S=[R,Q,0,R+2/3,Q,0,R+2/3,Q+1,0,R,Q,0,R+2/3,Q+1,0,R,Q+1,0];M.set(S,v*_*P),x.set(d,f*_*P);const E=[P,P,P,P,P,P];L.set(E,p*_*P)}const U=new qr;U.setAttribute("position",new pr(M,v)),U.setAttribute("uv",new pr(x,f)),U.setAttribute("faceIndex",new pr(L,p)),e.push(U),n>Xi&&n--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Dc(i,e,t){const r=new ni(i,e,t);return r.texture.mapping=Kn,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ma(i,e,t,r,n){i.viewport.set(e,t,r,n),i.scissor.set(e,t,r,n)}function Ny(i,e,t){const r=new Float32Array(hi),n=new F(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Or,depthTest:!1,depthWrite:!1})}function Uc(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Or,depthTest:!1,depthWrite:!1})}function Nc(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Or,depthTest:!1,depthWrite:!1})}function ao(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Oy(i){let e=new WeakMap,t=null;function r(s){if(s&&s.isTexture){const l=s.mapping,c=l===xs||l===ys,h=l===bi||l===Mi;if(c||h)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let u=e.get(s);return t===null&&(t=new Ic(i)),u=c?t.fromEquirectangular(s,u):t.fromCubemap(s,u),e.set(s,u),u.texture}else{if(e.has(s))return e.get(s).texture;{const u=s.image;if(c&&u&&u.height>0||h&&u&&n(u)){t===null&&(t=new Ic(i));const d=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,d),s.addEventListener("dispose",a),d.texture}else return null}}}return s}function n(s){let l=0;const c=6;for(let h=0;h<c;h++)s[h]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:o}}function Fy(i){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=i.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const n=t(r);return n===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function zy(i,e,t,r){const n={},a=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const v=d.morphAttributes[_];for(let f=0,p=v.length;f<p;f++)e.remove(v[f])}d.removeEventListener("dispose",o),delete n[d.id];const m=a.get(d);m&&(e.remove(m),a.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function s(u,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)e.update(d[_],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const _ in m){const v=m[_];for(let f=0,p=v.length;f<p;f++)e.update(v[f],i.ARRAY_BUFFER)}}function c(u){const d=[],m=u.index,_=u.attributes.position;let v=0;if(m!==null){const M=m.array;v=m.version;for(let x=0,L=M.length;x<L;x+=3){const U=M[x+0],P=M[x+1],R=M[x+2];d.push(U,P,P,R,R,U)}}else if(_!==void 0){const M=_.array;v=_.version;for(let x=0,L=M.length/3-1;x<L;x+=3){const U=x+0,P=x+1,R=x+2;d.push(U,P,P,R,R,U)}}else return;const f=new(Ql(d)?vc:_c)(d,1);f.version=v;const p=a.get(u);p&&e.remove(p),a.set(u,f)}function h(u){const d=a.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return a.get(u)}return{get:s,update:l,getWireframeAttribute:h}}function By(i,e,t,r){const n=r.isWebGL2;let a;function o(m){a=m}let s,l;function c(m){s=m.type,l=m.bytesPerElement}function h(m,_){i.drawElements(a,_,s,m*l),t.update(_,a,1)}function u(m,_,v){if(v===0)return;let f,p;if(n)f=i,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](a,_,s,m*l,v),t.update(_,a,v)}function d(m,_,v){if(v===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<v;p++)this.render(m[p]/l,_[p]);else{f.multiDrawElementsWEBGL(a,_,0,s,m,0,v);let p=0;for(let M=0;M<v;M++)p+=_[M];t.update(p,a,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Hy(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,o,s){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=s*(a/3);break;case i.LINES:t.lines+=s*(a/2);break;case i.LINE_STRIP:t.lines+=s*(a-1);break;case i.LINE_LOOP:t.lines+=s*a;break;case i.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function Gy(i,e){return i[0]-e[0]}function ky(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Vy(i,e,t){const r={},n=new Float32Array(8),a=new WeakMap,o=new Et,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=m!==void 0?m.length:0;let v=a.get(h);if(v===void 0||v.count!==_){let M=function(){de.dispose(),a.delete(h),h.removeEventListener("dispose",M)};v!==void 0&&v.texture.dispose();const x=h.morphAttributes.position!==void 0,L=h.morphAttributes.normal!==void 0,U=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],Q=h.morphAttributes.color||[];let S=0;x===!0&&(S=1),L===!0&&(S=2),U===!0&&(S=3);let E=h.attributes.position.count*S,j=1;E>e.maxTextureSize&&(j=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const X=new Float32Array(E*j*4*_),de=new nc(X,E,j,_);de.type=Hr,de.needsUpdate=!0;const I=S*4;for(let G=0;G<_;G++){const q=P[G],J=R[G],K=Q[G],Y=E*j*4*G;for(let ie=0;ie<q.count;ie++){const ae=ie*I;x===!0&&(o.fromBufferAttribute(q,ie),X[Y+ae+0]=o.x,X[Y+ae+1]=o.y,X[Y+ae+2]=o.z,X[Y+ae+3]=0),L===!0&&(o.fromBufferAttribute(J,ie),X[Y+ae+4]=o.x,X[Y+ae+5]=o.y,X[Y+ae+6]=o.z,X[Y+ae+7]=0),U===!0&&(o.fromBufferAttribute(K,ie),X[Y+ae+8]=o.x,X[Y+ae+9]=o.y,X[Y+ae+10]=o.z,X[Y+ae+11]=K.itemSize===4?o.w:1)}}v={count:_,texture:de,size:new Oe(E,j)},a.set(h,v),h.addEventListener("dispose",M)}let f=0;for(let M=0;M<d.length;M++)f+=d[M];const p=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{const m=d===void 0?0:d.length;let _=r[h.id];if(_===void 0||_.length!==m){_=[];for(let x=0;x<m;x++)_[x]=[x,0];r[h.id]=_}for(let x=0;x<m;x++){const L=_[x];L[0]=x,L[1]=d[x]}_.sort(ky);for(let x=0;x<8;x++)x<m&&_[x][1]?(s[x][0]=_[x][0],s[x][1]=_[x][1]):(s[x][0]=Number.MAX_SAFE_INTEGER,s[x][1]=0);s.sort(Gy);const v=h.morphAttributes.position,f=h.morphAttributes.normal;let p=0;for(let x=0;x<8;x++){const L=s[x],U=L[0],P=L[1];U!==Number.MAX_SAFE_INTEGER&&P?(v&&h.getAttribute("morphTarget"+x)!==v[U]&&h.setAttribute("morphTarget"+x,v[U]),f&&h.getAttribute("morphNormal"+x)!==f[U]&&h.setAttribute("morphNormal"+x,f[U]),n[x]=P,p+=P):(v&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),f&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),n[x]=0)}const M=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",M),u.getUniforms().setValue(i,"morphTargetInfluences",n)}}return{update:l}}function Wy(i,e,t,r){let n=new WeakMap;function a(l){const c=r.render.frame,h=l.geometry,u=e.get(l,h);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),n.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function o(){n=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}class Oc extends Vt{constructor(e,t,r,n,a,o,s,l,c,h){if(h=h!==void 0?h:ti,h!==ti&&h!==Ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&h===ti&&(r=Br),r===void 0&&h===Ei&&(r=ei),super(null,n,a,o,s,l,h,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Fc=new Vt,zc=new Oc(1,1);zc.compareFunction=Yl;const Bc=new nc,Hc=new A0,Gc=new Tc,kc=[],Vc=[],Wc=new Float32Array(16),jc=new Float32Array(9),Xc=new Float32Array(4);function Yi(i,e,t){const r=i[0];if(r<=0||r>0)return i;const n=e*t;let a=kc[n];if(a===void 0&&(a=new Float32Array(n),kc[n]=a),e!==0){r.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,i[o].toArray(a,s)}return a}function St(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function bt(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function Ea(i,e){let t=Vc[e];t===void 0&&(t=new Int32Array(e),Vc[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function jy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Xy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2fv(this.addr,e),bt(t,e)}}function qy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;i.uniform3fv(this.addr,e),bt(t,e)}}function Yy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4fv(this.addr,e),bt(t,e)}}function Ky(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(St(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(St(t,r))return;Xc.set(r),i.uniformMatrix2fv(this.addr,!1,Xc),bt(t,r)}}function Jy(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(St(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(St(t,r))return;jc.set(r),i.uniformMatrix3fv(this.addr,!1,jc),bt(t,r)}}function Zy(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(St(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(St(t,r))return;Wc.set(r),i.uniformMatrix4fv(this.addr,!1,Wc),bt(t,r)}}function Qy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $y(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2iv(this.addr,e),bt(t,e)}}function eS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3iv(this.addr,e),bt(t,e)}}function tS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4iv(this.addr,e),bt(t,e)}}function rS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function iS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2uiv(this.addr,e),bt(t,e)}}function nS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3uiv(this.addr,e),bt(t,e)}}function aS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4uiv(this.addr,e),bt(t,e)}}function sS(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n);const a=this.type===i.SAMPLER_2D_SHADOW?zc:Fc;t.setTexture2D(e||a,n)}function oS(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||Hc,n)}function lS(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||Gc,n)}function cS(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||Bc,n)}function hS(i){switch(i){case 5126:return jy;case 35664:return Xy;case 35665:return qy;case 35666:return Yy;case 35674:return Ky;case 35675:return Jy;case 35676:return Zy;case 5124:case 35670:return Qy;case 35667:case 35671:return $y;case 35668:case 35672:return eS;case 35669:case 35673:return tS;case 5125:return rS;case 36294:return iS;case 36295:return nS;case 36296:return aS;case 35678:case 36198:case 36298:case 36306:case 35682:return sS;case 35679:case 36299:case 36307:return oS;case 35680:case 36300:case 36308:case 36293:return lS;case 36289:case 36303:case 36311:case 36292:return cS}}function uS(i,e){i.uniform1fv(this.addr,e)}function dS(i,e){const t=Yi(e,this.size,2);i.uniform2fv(this.addr,t)}function pS(i,e){const t=Yi(e,this.size,3);i.uniform3fv(this.addr,t)}function fS(i,e){const t=Yi(e,this.size,4);i.uniform4fv(this.addr,t)}function mS(i,e){const t=Yi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function gS(i,e){const t=Yi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function _S(i,e){const t=Yi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function vS(i,e){i.uniform1iv(this.addr,e)}function wS(i,e){i.uniform2iv(this.addr,e)}function xS(i,e){i.uniform3iv(this.addr,e)}function yS(i,e){i.uniform4iv(this.addr,e)}function SS(i,e){i.uniform1uiv(this.addr,e)}function bS(i,e){i.uniform2uiv(this.addr,e)}function MS(i,e){i.uniform3uiv(this.addr,e)}function ES(i,e){i.uniform4uiv(this.addr,e)}function TS(i,e,t){const r=this.cache,n=e.length,a=Ea(t,n);St(r,a)||(i.uniform1iv(this.addr,a),bt(r,a));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||Fc,a[o])}function RS(i,e,t){const r=this.cache,n=e.length,a=Ea(t,n);St(r,a)||(i.uniform1iv(this.addr,a),bt(r,a));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||Hc,a[o])}function AS(i,e,t){const r=this.cache,n=e.length,a=Ea(t,n);St(r,a)||(i.uniform1iv(this.addr,a),bt(r,a));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||Gc,a[o])}function CS(i,e,t){const r=this.cache,n=e.length,a=Ea(t,n);St(r,a)||(i.uniform1iv(this.addr,a),bt(r,a));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||Bc,a[o])}function PS(i){switch(i){case 5126:return uS;case 35664:return dS;case 35665:return pS;case 35666:return fS;case 35674:return mS;case 35675:return gS;case 35676:return _S;case 5124:case 35670:return vS;case 35667:case 35671:return wS;case 35668:case 35672:return xS;case 35669:case 35673:return yS;case 5125:return SS;case 36294:return bS;case 36295:return MS;case 36296:return ES;case 35678:case 36198:case 36298:case 36306:case 35682:return TS;case 35679:case 36299:case 36307:return RS;case 35680:case 36300:case 36308:case 36293:return AS;case 36289:case 36303:case 36311:case 36292:return CS}}class LS{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=hS(t.type)}}class IS{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=PS(t.type)}}class DS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let a=0,o=n.length;a!==o;++a){const s=n[a];s.setValue(e,t[s.id],r)}}}const so=/(\w+)(\])?(\[|\.)?/g;function qc(i,e){i.seq.push(e),i.map[e.id]=e}function US(i,e,t){const r=i.name,n=r.length;for(so.lastIndex=0;;){const a=so.exec(r),o=so.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===n){qc(t,c===void 0?new LS(s,i,e):new IS(s,i,e));break}else{let h=t.map[s];h===void 0&&(h=new DS(s),qc(t,h)),t=h}}}class Ta{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){const a=e.getActiveUniform(t,n),o=e.getUniformLocation(t,a.name);US(a,o,this)}}setValue(e,t,r,n){const a=this.map[t];a!==void 0&&a.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=r[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,a=e.length;n!==a;++n){const o=e[n];o.id in t&&r.push(o)}return r}}function Yc(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const NS=37297;let OS=0;function FS(i,e){const t=i.split(`
`),r=[],n=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=n;o<a;o++){const s=o+1;r.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return r.join(`
`)}function zS(i){const e=at.getPrimaries(at.workingColorSpace),t=at.getPrimaries(i);let r;switch(e===t?r="":e===$n&&t===Qn?r="LinearDisplayP3ToLinearSRGB":e===Qn&&t===$n&&(r="LinearSRGBToLinearDisplayP3"),i){case xr:case Jn:return[r,"LinearTransferOETF"];case At:case Ls:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[r,"LinearTransferOETF"]}}function Kc(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),n=i.getShaderInfoLog(e).trim();if(r&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+n+`

`+FS(i.getShaderSource(e),o)}else return n}function BS(i,e){const t=zS(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function HS(i,e){let t;switch(e){case Fv:t="Linear";break;case zv:t="Reinhard";break;case Bv:t="OptimizedCineon";break;case Hv:t="ACESFilmic";break;case kv:t="AgX";break;case Gv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function GS(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ki).join(`
`)}function kS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ki).join(`
`)}function VS(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function WS(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const a=i.getActiveAttrib(e,n),o=a.name;let s=1;a.type===i.FLOAT_MAT2&&(s=2),a.type===i.FLOAT_MAT3&&(s=3),a.type===i.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:i.getAttribLocation(e,o),locationSize:s}}return t}function Ki(i){return i!==""}function Jc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jS=/^[ \t]*#include +<([\w\d./]+)>/gm;function oo(i){return i.replace(jS,qS)}const XS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function qS(i,e){let t=He[e];if(t===void 0){const r=XS.get(e);if(r!==void 0)t=He[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return oo(t)}const YS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qc(i){return i.replace(YS,KS)}function KS(i,e,t,r){let n="";for(let a=parseInt(e);a<parseInt(t);a++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function $c(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function JS(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===nl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===al?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vr&&(e="SHADOWMAP_TYPE_VSM"),e}function ZS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bi:case Mi:e="ENVMAP_TYPE_CUBE";break;case Kn:e="ENVMAP_TYPE_CUBE_UV";break}return e}function QS(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Mi:e="ENVMAP_MODE_REFRACTION";break}return e}function $S(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ws:e="ENVMAP_BLENDING_MULTIPLY";break;case Nv:e="ENVMAP_BLENDING_MIX";break;case Ov:e="ENVMAP_BLENDING_ADD";break}return e}function eb(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function tb(i,e,t,r){const n=i.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=JS(t),c=ZS(t),h=QS(t),u=$S(t),d=eb(t),m=t.isWebGL2?"":GS(t),_=kS(t),v=VS(a),f=n.createProgram();let p,M,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ki).join(`
`),p.length>0&&(p+=`
`),M=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ki).join(`
`),M.length>0&&(M+=`
`)):(p=[$c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ki).join(`
`),M=[m,$c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fr?"#define TONE_MAPPING":"",t.toneMapping!==Fr?He.tonemapping_pars_fragment:"",t.toneMapping!==Fr?HS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,BS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ki).join(`
`)),o=oo(o),o=Jc(o,t),o=Zc(o,t),s=oo(s),s=Jc(s,t),s=Zc(s,t),o=Qc(o),s=Qc(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const L=x+p+o,U=x+M+s,P=Yc(n,n.VERTEX_SHADER,L),R=Yc(n,n.FRAGMENT_SHADER,U);n.attachShader(f,P),n.attachShader(f,R),t.index0AttributeName!==void 0?n.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(f,0,"position"),n.linkProgram(f);function Q(X){if(i.debug.checkShaderErrors){const de=n.getProgramInfoLog(f).trim(),I=n.getShaderInfoLog(P).trim(),G=n.getShaderInfoLog(R).trim();let q=!0,J=!0;if(n.getProgramParameter(f,n.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(n,f,P,R);else{const K=Kc(n,P,"vertex"),Y=Kc(n,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(f,n.VALIDATE_STATUS)+`

Program Info Log: `+de+`
`+K+`
`+Y)}else de!==""?console.warn("THREE.WebGLProgram: Program Info Log:",de):(I===""||G==="")&&(J=!1);J&&(X.diagnostics={runnable:q,programLog:de,vertexShader:{log:I,prefix:p},fragmentShader:{log:G,prefix:M}})}n.deleteShader(P),n.deleteShader(R),S=new Ta(n,f),E=WS(n,f)}let S;this.getUniforms=function(){return S===void 0&&Q(this),S};let E;this.getAttributes=function(){return E===void 0&&Q(this),E};let j=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=n.getProgramParameter(f,NS)),j},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=OS++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=P,this.fragmentShader=R,this}let rb=0;class ib{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),a=this._getShaderStage(r),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new nb(e),t.set(e,r)),r}}class nb{constructor(e){this.id=rb++,this.code=e,this.usedTimes=0}}function ab(i,e,t,r,n,a,o){const s=new cc,l=new ib,c=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures;let m=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function f(S,E,j,X,de){const I=X.fog,G=de.geometry,q=S.isMeshStandardMaterial?X.environment:null,J=(S.isMeshStandardMaterial?t:e).get(S.envMap||q),K=J&&J.mapping===Kn?J.image.height:null,Y=_[S.type];S.precision!==null&&(m=n.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const ie=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ae=ie!==void 0?ie.length:0;let me=0;G.morphAttributes.position!==void 0&&(me=1),G.morphAttributes.normal!==void 0&&(me=2),G.morphAttributes.color!==void 0&&(me=3);let V,$,ve,Se;if(Y){const vt=mr[Y];V=vt.vertexShader,$=vt.fragmentShader}else V=S.vertexShader,$=S.fragmentShader,l.update(S),ve=l.getVertexShaderID(S),Se=l.getFragmentShaderID(S);const ye=i.getRenderTarget(),De=de.isInstancedMesh===!0,Ne=de.isBatchedMesh===!0,Ce=!!S.map,Qe=!!S.matcap,H=!!J,Rt=!!S.aoMap,Ee=!!S.lightMap,Ie=!!S.bumpMap,we=!!S.normalMap,ht=!!S.displacementMap,Fe=!!S.emissiveMap,b=!!S.metalnessMap,w=!!S.roughnessMap,z=S.anisotropy>0,ne=S.clearcoat>0,te=S.iridescence>0,re=S.sheen>0,xe=S.transmission>0,pe=z&&!!S.anisotropyMap,ge=ne&&!!S.clearcoatMap,Ae=ne&&!!S.clearcoatNormalMap,ze=ne&&!!S.clearcoatRoughnessMap,ee=te&&!!S.iridescenceMap,$e=te&&!!S.iridescenceThicknessMap,T=re&&!!S.sheenColorMap,Z=re&&!!S.sheenRoughnessMap,ce=!!S.specularMap,oe=!!S.specularColorMap,Me=!!S.specularIntensityMap,Ge=xe&&!!S.transmissionMap,tt=xe&&!!S.thicknessMap,ke=!!S.gradientMap,le=!!S.alphaMap,A=S.alphaTest>0,se=!!S.alphaHash,fe=!!S.extensions,Pe=!!G.attributes.uv1,be=!!G.attributes.uv2,rt=!!G.attributes.uv3;let ot=Fr;return S.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(ot=i.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:S.type,shaderName:S.name,vertexShader:V,fragmentShader:$,defines:S.defines,customVertexShaderID:ve,customFragmentShaderID:Se,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Ne,instancing:De,instancingColor:De&&de.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ye===null?i.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:xr,map:Ce,matcap:Qe,envMap:H,envMapMode:H&&J.mapping,envMapCubeUVHeight:K,aoMap:Rt,lightMap:Ee,bumpMap:Ie,normalMap:we,displacementMap:d&&ht,emissiveMap:Fe,normalMapObjectSpace:we&&S.normalMapType===e0,normalMapTangentSpace:we&&S.normalMapType===Xl,metalnessMap:b,roughnessMap:w,anisotropy:z,anisotropyMap:pe,clearcoat:ne,clearcoatMap:ge,clearcoatNormalMap:Ae,clearcoatRoughnessMap:ze,iridescence:te,iridescenceMap:ee,iridescenceThicknessMap:$e,sheen:re,sheenColorMap:T,sheenRoughnessMap:Z,specularMap:ce,specularColorMap:oe,specularIntensityMap:Me,transmission:xe,transmissionMap:Ge,thicknessMap:tt,gradientMap:ke,opaque:S.transparent===!1&&S.blending===Si,alphaMap:le,alphaTest:A,alphaHash:se,combine:S.combine,mapUv:Ce&&v(S.map.channel),aoMapUv:Rt&&v(S.aoMap.channel),lightMapUv:Ee&&v(S.lightMap.channel),bumpMapUv:Ie&&v(S.bumpMap.channel),normalMapUv:we&&v(S.normalMap.channel),displacementMapUv:ht&&v(S.displacementMap.channel),emissiveMapUv:Fe&&v(S.emissiveMap.channel),metalnessMapUv:b&&v(S.metalnessMap.channel),roughnessMapUv:w&&v(S.roughnessMap.channel),anisotropyMapUv:pe&&v(S.anisotropyMap.channel),clearcoatMapUv:ge&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:T&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Z&&v(S.sheenRoughnessMap.channel),specularMapUv:ce&&v(S.specularMap.channel),specularColorMapUv:oe&&v(S.specularColorMap.channel),specularIntensityMapUv:Me&&v(S.specularIntensityMap.channel),transmissionMapUv:Ge&&v(S.transmissionMap.channel),thicknessMapUv:tt&&v(S.thicknessMap.channel),alphaMapUv:le&&v(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(we||z),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:Pe,vertexUv2s:be,vertexUv3s:rt,pointsUvs:de.isPoints===!0&&!!G.attributes.uv&&(Ce||le),fog:!!I,useFog:S.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:de.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:me,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&j.length>0,shadowMapType:i.shadowMap.type,toneMapping:ot,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ce&&S.map.isVideoTexture===!0&&at.getTransfer(S.map.colorSpace)===ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===wr,flipSided:S.side===Ht,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:fe&&S.extensions.derivatives===!0,extensionFragDepth:fe&&S.extensions.fragDepth===!0,extensionDrawBuffers:fe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:fe&&S.extensions.clipCullDistance&&r.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const j in S.defines)E.push(j),E.push(S.defines[j]);return S.isRawShaderMaterial===!1&&(M(E,S),x(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function M(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function x(S,E){s.disableAll(),E.isWebGL2&&s.enable(0),E.supportsVertexTextures&&s.enable(1),E.instancing&&s.enable(2),E.instancingColor&&s.enable(3),E.matcap&&s.enable(4),E.envMap&&s.enable(5),E.normalMapObjectSpace&&s.enable(6),E.normalMapTangentSpace&&s.enable(7),E.clearcoat&&s.enable(8),E.iridescence&&s.enable(9),E.alphaTest&&s.enable(10),E.vertexColors&&s.enable(11),E.vertexAlphas&&s.enable(12),E.vertexUv1s&&s.enable(13),E.vertexUv2s&&s.enable(14),E.vertexUv3s&&s.enable(15),E.vertexTangents&&s.enable(16),E.anisotropy&&s.enable(17),E.alphaHash&&s.enable(18),E.batching&&s.enable(19),S.push(s.mask),s.disableAll(),E.fog&&s.enable(0),E.useFog&&s.enable(1),E.flatShading&&s.enable(2),E.logarithmicDepthBuffer&&s.enable(3),E.skinning&&s.enable(4),E.morphTargets&&s.enable(5),E.morphNormals&&s.enable(6),E.morphColors&&s.enable(7),E.premultipliedAlpha&&s.enable(8),E.shadowMapEnabled&&s.enable(9),E.useLegacyLights&&s.enable(10),E.doubleSided&&s.enable(11),E.flipSided&&s.enable(12),E.useDepthPacking&&s.enable(13),E.dithering&&s.enable(14),E.transmission&&s.enable(15),E.sheen&&s.enable(16),E.opaque&&s.enable(17),E.pointsUvs&&s.enable(18),E.decodeVideoTexture&&s.enable(19),S.push(s.mask)}function L(S){const E=_[S.type];let j;if(E){const X=mr[E];j=G0.clone(X.uniforms)}else j=S.uniforms;return j}function U(S,E){let j;for(let X=0,de=c.length;X<de;X++){const I=c[X];if(I.cacheKey===E){j=I,++j.usedTimes;break}}return j===void 0&&(j=new tb(i,E,S,a),c.push(j)),j}function P(S){if(--S.usedTimes===0){const E=c.indexOf(S);c[E]=c[c.length-1],c.pop(),S.destroy()}}function R(S){l.remove(S)}function Q(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:L,acquireProgram:U,releaseProgram:P,releaseShaderCache:R,programs:c,dispose:Q}}function sb(){let i=new WeakMap;function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function t(a){i.delete(a)}function r(a,o,s){i.get(a)[o]=s}function n(){i=new WeakMap}return{get:e,remove:t,update:r,dispose:n}}function ob(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function eh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function th(){const i=[];let e=0;const t=[],r=[],n=[];function a(){e=0,t.length=0,r.length=0,n.length=0}function o(u,d,m,_,v,f){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:_,renderOrder:u.renderOrder,z:v,group:f},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=v,p.group=f),e++,p}function s(u,d,m,_,v,f){const p=o(u,d,m,_,v,f);m.transmission>0?r.push(p):m.transparent===!0?n.push(p):t.push(p)}function l(u,d,m,_,v,f){const p=o(u,d,m,_,v,f);m.transmission>0?r.unshift(p):m.transparent===!0?n.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||ob),r.length>1&&r.sort(d||eh),n.length>1&&n.sort(d||eh)}function h(){for(let u=e,d=i.length;u<d;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:r,transparent:n,init:a,push:s,unshift:l,finish:h,sort:c}}function lb(){let i=new WeakMap;function e(r,n){const a=i.get(r);let o;return a===void 0?(o=new th,i.set(r,[o])):n>=a.length?(o=new th,a.push(o)):o=a[n],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function cb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Je};break;case"SpotLight":t={position:new F,direction:new F,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function hb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ub=0;function db(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function pb(i,e){const t=new cb,r=hb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new F);const a=new F,o=new yt,s=new yt;function l(h,u){let d=0,m=0,_=0;for(let X=0;X<9;X++)n.probe[X].set(0,0,0);let v=0,f=0,p=0,M=0,x=0,L=0,U=0,P=0,R=0,Q=0,S=0;h.sort(db);const E=u===!0?Math.PI:1;for(let X=0,de=h.length;X<de;X++){const I=h[X],G=I.color,q=I.intensity,J=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=G.r*q*E,m+=G.g*q*E,_+=G.b*q*E;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(I.sh.coefficients[Y],q);S++}else if(I.isDirectionalLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*E),I.castShadow){const ie=I.shadow,ae=r.get(I);ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize=ie.mapSize,n.directionalShadow[v]=ae,n.directionalShadowMap[v]=K,n.directionalShadowMatrix[v]=I.shadow.matrix,L++}n.directional[v]=Y,v++}else if(I.isSpotLight){const Y=t.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(G).multiplyScalar(q*E),Y.distance=J,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,n.spot[p]=Y;const ie=I.shadow;if(I.map&&(n.spotLightMap[R]=I.map,R++,ie.updateMatrices(I),I.castShadow&&Q++),n.spotLightMatrix[p]=ie.matrix,I.castShadow){const ae=r.get(I);ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize=ie.mapSize,n.spotShadow[p]=ae,n.spotShadowMap[p]=K,P++}p++}else if(I.isRectAreaLight){const Y=t.get(I);Y.color.copy(G).multiplyScalar(q),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),n.rectArea[M]=Y,M++}else if(I.isPointLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*E),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const ie=I.shadow,ae=r.get(I);ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize=ie.mapSize,ae.shadowCameraNear=ie.camera.near,ae.shadowCameraFar=ie.camera.far,n.pointShadow[f]=ae,n.pointShadowMap[f]=K,n.pointShadowMatrix[f]=I.shadow.matrix,U++}n.point[f]=Y,f++}else if(I.isHemisphereLight){const Y=t.get(I);Y.skyColor.copy(I.color).multiplyScalar(q*E),Y.groundColor.copy(I.groundColor).multiplyScalar(q*E),n.hemi[x]=Y,x++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=_;const j=n.hash;(j.directionalLength!==v||j.pointLength!==f||j.spotLength!==p||j.rectAreaLength!==M||j.hemiLength!==x||j.numDirectionalShadows!==L||j.numPointShadows!==U||j.numSpotShadows!==P||j.numSpotMaps!==R||j.numLightProbes!==S)&&(n.directional.length=v,n.spot.length=p,n.rectArea.length=M,n.point.length=f,n.hemi.length=x,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.pointShadow.length=U,n.pointShadowMap.length=U,n.spotShadow.length=P,n.spotShadowMap.length=P,n.directionalShadowMatrix.length=L,n.pointShadowMatrix.length=U,n.spotLightMatrix.length=P+R-Q,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=Q,n.numLightProbes=S,j.directionalLength=v,j.pointLength=f,j.spotLength=p,j.rectAreaLength=M,j.hemiLength=x,j.numDirectionalShadows=L,j.numPointShadows=U,j.numSpotShadows=P,j.numSpotMaps=R,j.numLightProbes=S,n.version=ub++)}function c(h,u){let d=0,m=0,_=0,v=0,f=0;const p=u.matrixWorldInverse;for(let M=0,x=h.length;M<x;M++){const L=h[M];if(L.isDirectionalLight){const U=n.directional[d];U.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(a),U.direction.transformDirection(p),d++}else if(L.isSpotLight){const U=n.spot[_];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(p),U.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(a),U.direction.transformDirection(p),_++}else if(L.isRectAreaLight){const U=n.rectArea[v];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(p),s.identity(),o.copy(L.matrixWorld),o.premultiply(p),s.extractRotation(o),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),U.halfWidth.applyMatrix4(s),U.halfHeight.applyMatrix4(s),v++}else if(L.isPointLight){const U=n.point[m];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(p),m++}else if(L.isHemisphereLight){const U=n.hemi[f];U.direction.setFromMatrixPosition(L.matrixWorld),U.direction.transformDirection(p),f++}}}return{setup:l,setupView:c,state:n}}function rh(i,e){const t=new pb(i,e),r=[],n=[];function a(){r.length=0,n.length=0}function o(h){r.push(h)}function s(h){n.push(h)}function l(h){t.setup(r,h)}function c(h){t.setupView(r,h)}return{init:a,state:{lightsArray:r,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function fb(i,e){let t=new WeakMap;function r(a,o=0){const s=t.get(a);let l;return s===void 0?(l=new rh(i,e),t.set(a,[l])):o>=s.length?(l=new rh(i,e),s.push(l)):l=s[o],l}function n(){t=new WeakMap}return{get:r,dispose:n}}class mb extends yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gb extends yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _b=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wb(i,e,t){let r=new $s;const n=new Oe,a=new Oe,o=new Et,s=new mb({depthPacking:$v}),l=new gb,c={},h=t.maxTextureSize,u={[Nr]:Ht,[Ht]:Nr,[wr]:wr},d=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:_b,fragmentShader:vb}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new qr;_.setAttribute("position",new pr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Rr(_,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nl;let p=this.type;this.render=function(P,R,Q){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||P.length===0)return;const S=i.getRenderTarget(),E=i.getActiveCubeFace(),j=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Or),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const de=p!==vr&&this.type===vr,I=p===vr&&this.type!==vr;for(let G=0,q=P.length;G<q;G++){const J=P[G],K=J.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;n.copy(K.mapSize);const Y=K.getFrameExtents();if(n.multiply(Y),a.copy(K.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(a.x=Math.floor(h/Y.x),n.x=a.x*Y.x,K.mapSize.x=a.x),n.y>h&&(a.y=Math.floor(h/Y.y),n.y=a.y*Y.y,K.mapSize.y=a.y)),K.map===null||de===!0||I===!0){const ae=this.type!==vr?{minFilter:Nt,magFilter:Nt}:{};K.map!==null&&K.map.dispose(),K.map=new ni(n.x,n.y,ae),K.map.texture.name=J.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const ie=K.getViewportCount();for(let ae=0;ae<ie;ae++){const me=K.getViewport(ae);o.set(a.x*me.x,a.y*me.y,a.x*me.z,a.y*me.w),X.viewport(o),K.updateMatrices(J,ae),r=K.getFrustum(),L(R,Q,K.camera,J,this.type)}K.isPointLightShadow!==!0&&this.type===vr&&M(K,Q),K.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(S,E,j)};function M(P,R){const Q=e.update(v);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ni(n.x,n.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(R,null,Q,d,v,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(R,null,Q,m,v,null)}function x(P,R,Q,S){let E=null;const j=Q.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(j!==void 0)E=j;else if(E=Q.isPointLight===!0?l:s,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const X=E.uuid,de=R.uuid;let I=c[X];I===void 0&&(I={},c[X]=I);let G=I[de];G===void 0&&(G=E.clone(),I[de]=G,R.addEventListener("dispose",U)),E=G}if(E.visible=R.visible,E.wireframe=R.wireframe,S===vr?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:u[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,Q.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const X=i.properties.get(E);X.light=Q}return E}function L(P,R,Q,S,E){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&E===vr)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,P.matrixWorld);const X=e.update(P),de=P.material;if(Array.isArray(de)){const I=X.groups;for(let G=0,q=I.length;G<q;G++){const J=I[G],K=de[J.materialIndex];if(K&&K.visible){const Y=x(P,K,S,E);P.onBeforeShadow(i,P,R,Q,X,Y,J),i.renderBufferDirect(Q,null,X,Y,P,J),P.onAfterShadow(i,P,R,Q,X,Y,J)}}}else if(de.visible){const I=x(P,de,S,E);P.onBeforeShadow(i,P,R,Q,X,I,null),i.renderBufferDirect(Q,null,X,I,P,null),P.onAfterShadow(i,P,R,Q,X,I,null)}}const j=P.children;for(let X=0,de=j.length;X<de;X++)L(j[X],R,Q,S,E)}function U(P){P.target.removeEventListener("dispose",U);for(const R in c){const Q=c[R],S=P.target.uuid;S in Q&&(Q[S].dispose(),delete Q[S])}}}function xb(i,e,t){const r=t.isWebGL2;function n(){let A=!1;const se=new Et;let fe=null;const Pe=new Et(0,0,0,0);return{setMask:function(be){fe!==be&&!A&&(i.colorMask(be,be,be,be),fe=be)},setLocked:function(be){A=be},setClear:function(be,rt,ot,vt,Zt){Zt===!0&&(be*=vt,rt*=vt,ot*=vt),se.set(be,rt,ot,vt),Pe.equals(se)===!1&&(i.clearColor(be,rt,ot,vt),Pe.copy(se))},reset:function(){A=!1,fe=null,Pe.set(-1,0,0,0)}}}function a(){let A=!1,se=null,fe=null,Pe=null;return{setTest:function(be){be?Ne(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(be){se!==be&&!A&&(i.depthMask(be),se=be)},setFunc:function(be){if(fe!==be){switch(be){case Av:i.depthFunc(i.NEVER);break;case Cv:i.depthFunc(i.ALWAYS);break;case Pv:i.depthFunc(i.LESS);break;case Yn:i.depthFunc(i.LEQUAL);break;case Lv:i.depthFunc(i.EQUAL);break;case Iv:i.depthFunc(i.GEQUAL);break;case Dv:i.depthFunc(i.GREATER);break;case Uv:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=be}},setLocked:function(be){A=be},setClear:function(be){Pe!==be&&(i.clearDepth(be),Pe=be)},reset:function(){A=!1,se=null,fe=null,Pe=null}}}function o(){let A=!1,se=null,fe=null,Pe=null,be=null,rt=null,ot=null,vt=null,Zt=null;return{setTest:function(lt){A||(lt?Ne(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(lt){se!==lt&&!A&&(i.stencilMask(lt),se=lt)},setFunc:function(lt,zt,gr){(fe!==lt||Pe!==zt||be!==gr)&&(i.stencilFunc(lt,zt,gr),fe=lt,Pe=zt,be=gr)},setOp:function(lt,zt,gr){(rt!==lt||ot!==zt||vt!==gr)&&(i.stencilOp(lt,zt,gr),rt=lt,ot=zt,vt=gr)},setLocked:function(lt){A=lt},setClear:function(lt){Zt!==lt&&(i.clearStencil(lt),Zt=lt)},reset:function(){A=!1,se=null,fe=null,Pe=null,be=null,rt=null,ot=null,vt=null,Zt=null}}}const s=new n,l=new a,c=new o,h=new WeakMap,u=new WeakMap;let d={},m={},_=new WeakMap,v=[],f=null,p=!1,M=null,x=null,L=null,U=null,P=null,R=null,Q=null,S=new Je(0,0,0),E=0,j=!1,X=null,de=null,I=null,G=null,q=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Y=0;const ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ie)[1]),K=Y>=1):ie.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),K=Y>=2);let ae=null,me={};const V=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),ve=new Et().fromArray(V),Se=new Et().fromArray($);function ye(A,se,fe,Pe){const be=new Uint8Array(4),rt=i.createTexture();i.bindTexture(A,rt),i.texParameteri(A,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(A,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ot=0;ot<fe;ot++)r&&(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)?i.texImage3D(se,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(se+ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return rt}const De={};De[i.TEXTURE_2D]=ye(i.TEXTURE_2D,i.TEXTURE_2D,1),De[i.TEXTURE_CUBE_MAP]=ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(De[i.TEXTURE_2D_ARRAY]=ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),De[i.TEXTURE_3D]=ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ne(i.DEPTH_TEST),l.setFunc(Yn),Fe(!1),b(il),Ne(i.CULL_FACE),we(Or);function Ne(A){d[A]!==!0&&(i.enable(A),d[A]=!0)}function Ce(A){d[A]!==!1&&(i.disable(A),d[A]=!1)}function Qe(A,se){return m[A]!==se?(i.bindFramebuffer(A,se),m[A]=se,r&&(A===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=se),A===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=se)),!0):!1}function H(A,se){let fe=v,Pe=!1;if(A)if(fe=_.get(se),fe===void 0&&(fe=[],_.set(se,fe)),A.isWebGLMultipleRenderTargets){const be=A.texture;if(fe.length!==be.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,ot=be.length;rt<ot;rt++)fe[rt]=i.COLOR_ATTACHMENT0+rt;fe.length=be.length,Pe=!0}}else fe[0]!==i.COLOR_ATTACHMENT0&&(fe[0]=i.COLOR_ATTACHMENT0,Pe=!0);else fe[0]!==i.BACK&&(fe[0]=i.BACK,Pe=!0);Pe&&(t.isWebGL2?i.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function Rt(A){return f!==A?(i.useProgram(A),f=A,!0):!1}const Ee={[$r]:i.FUNC_ADD,[pv]:i.FUNC_SUBTRACT,[fv]:i.FUNC_REVERSE_SUBTRACT};if(r)Ee[cl]=i.MIN,Ee[hl]=i.MAX;else{const A=e.get("EXT_blend_minmax");A!==null&&(Ee[cl]=A.MIN_EXT,Ee[hl]=A.MAX_EXT)}const Ie={[mv]:i.ZERO,[gv]:i.ONE,[_v]:i.SRC_COLOR,[_s]:i.SRC_ALPHA,[bv]:i.SRC_ALPHA_SATURATE,[yv]:i.DST_COLOR,[wv]:i.DST_ALPHA,[vv]:i.ONE_MINUS_SRC_COLOR,[vs]:i.ONE_MINUS_SRC_ALPHA,[Sv]:i.ONE_MINUS_DST_COLOR,[xv]:i.ONE_MINUS_DST_ALPHA,[Mv]:i.CONSTANT_COLOR,[Ev]:i.ONE_MINUS_CONSTANT_COLOR,[Tv]:i.CONSTANT_ALPHA,[Rv]:i.ONE_MINUS_CONSTANT_ALPHA};function we(A,se,fe,Pe,be,rt,ot,vt,Zt,lt){if(A===Or){p===!0&&(Ce(i.BLEND),p=!1);return}if(p===!1&&(Ne(i.BLEND),p=!0),A!==dv){if(A!==M||lt!==j){if((x!==$r||P!==$r)&&(i.blendEquation(i.FUNC_ADD),x=$r,P=$r),lt)switch(A){case Si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sl:i.blendFunc(i.ONE,i.ONE);break;case ol:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ll:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ol:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ll:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}L=null,U=null,R=null,Q=null,S.set(0,0,0),E=0,M=A,j=lt}return}be=be||se,rt=rt||fe,ot=ot||Pe,(se!==x||be!==P)&&(i.blendEquationSeparate(Ee[se],Ee[be]),x=se,P=be),(fe!==L||Pe!==U||rt!==R||ot!==Q)&&(i.blendFuncSeparate(Ie[fe],Ie[Pe],Ie[rt],Ie[ot]),L=fe,U=Pe,R=rt,Q=ot),(vt.equals(S)===!1||Zt!==E)&&(i.blendColor(vt.r,vt.g,vt.b,Zt),S.copy(vt),E=Zt),M=A,j=!1}function ht(A,se){A.side===wr?Ce(i.CULL_FACE):Ne(i.CULL_FACE);let fe=A.side===Ht;se&&(fe=!fe),Fe(fe),A.blending===Si&&A.transparent===!1?we(Or):we(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),l.setFunc(A.depthFunc),l.setTest(A.depthTest),l.setMask(A.depthWrite),s.setMask(A.colorWrite);const Pe=A.stencilWrite;c.setTest(Pe),Pe&&(c.setMask(A.stencilWriteMask),c.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),c.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),z(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?Ne(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(A){X!==A&&(A?i.frontFace(i.CW):i.frontFace(i.CCW),X=A)}function b(A){A!==hv?(Ne(i.CULL_FACE),A!==de&&(A===il?i.cullFace(i.BACK):A===uv?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),de=A}function w(A){A!==I&&(K&&i.lineWidth(A),I=A)}function z(A,se,fe){A?(Ne(i.POLYGON_OFFSET_FILL),(G!==se||q!==fe)&&(i.polygonOffset(se,fe),G=se,q=fe)):Ce(i.POLYGON_OFFSET_FILL)}function ne(A){A?Ne(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function te(A){A===void 0&&(A=i.TEXTURE0+J-1),ae!==A&&(i.activeTexture(A),ae=A)}function re(A,se,fe){fe===void 0&&(ae===null?fe=i.TEXTURE0+J-1:fe=ae);let Pe=me[fe];Pe===void 0&&(Pe={type:void 0,texture:void 0},me[fe]=Pe),(Pe.type!==A||Pe.texture!==se)&&(ae!==fe&&(i.activeTexture(fe),ae=fe),i.bindTexture(A,se||De[A]),Pe.type=A,Pe.texture=se)}function xe(){const A=me[ae];A!==void 0&&A.type!==void 0&&(i.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function pe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ge(){try{i.compressedTexImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ae(){try{i.texSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ze(){try{i.texSubImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ee(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function $e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function T(){try{i.texStorage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Z(){try{i.texStorage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ce(){try{i.texImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function oe(){try{i.texImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Me(A){ve.equals(A)===!1&&(i.scissor(A.x,A.y,A.z,A.w),ve.copy(A))}function Ge(A){Se.equals(A)===!1&&(i.viewport(A.x,A.y,A.z,A.w),Se.copy(A))}function tt(A,se){let fe=u.get(se);fe===void 0&&(fe=new WeakMap,u.set(se,fe));let Pe=fe.get(A);Pe===void 0&&(Pe=i.getUniformBlockIndex(se,A.name),fe.set(A,Pe))}function ke(A,se){const fe=u.get(se).get(A);h.get(se)!==fe&&(i.uniformBlockBinding(se,fe,A.__bindingPointIndex),h.set(se,fe))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),r===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ae=null,me={},m={},_=new WeakMap,v=[],f=null,p=!1,M=null,x=null,L=null,U=null,P=null,R=null,Q=null,S=new Je(0,0,0),E=0,j=!1,X=null,de=null,I=null,G=null,q=null,ve.set(0,0,i.canvas.width,i.canvas.height),Se.set(0,0,i.canvas.width,i.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Ne,disable:Ce,bindFramebuffer:Qe,drawBuffers:H,useProgram:Rt,setBlending:we,setMaterial:ht,setFlipSided:Fe,setCullFace:b,setLineWidth:w,setPolygonOffset:z,setScissorTest:ne,activeTexture:te,bindTexture:re,unbindTexture:xe,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:ce,texImage3D:oe,updateUBOMapping:tt,uniformBlockBinding:ke,texStorage2D:T,texStorage3D:Z,texSubImage2D:Ae,texSubImage3D:ze,compressedTexSubImage2D:ee,compressedTexSubImage3D:$e,scissor:Me,viewport:Ge,reset:le}}function yb(i,e,t,r,n,a,o){const s=n.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,w){return m?new OffscreenCanvas(b,w):ra("canvas")}function v(b,w,z,ne){let te=1;if((b.width>ne||b.height>ne)&&(te=ne/Math.max(b.width,b.height)),te<1||w===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const re=w?ta:Math.floor,xe=re(te*b.width),pe=re(te*b.height);u===void 0&&(u=_(xe,pe));const ge=z?_(xe,pe):u;return ge.width=xe,ge.height=pe,ge.getContext("2d").drawImage(b,0,0,xe,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+xe+"x"+pe+")."),ge}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function f(b){return Us(b.width)&&Us(b.height)}function p(b){return s?!1:b.wrapS!==rr||b.wrapT!==rr||b.minFilter!==Nt&&b.minFilter!==qt}function M(b,w){return b.generateMipmaps&&w&&b.minFilter!==Nt&&b.minFilter!==qt}function x(b){i.generateMipmap(b)}function L(b,w,z,ne,te=!1){if(s===!1)return w;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let re=w;if(w===i.RED&&(z===i.FLOAT&&(re=i.R32F),z===i.HALF_FLOAT&&(re=i.R16F),z===i.UNSIGNED_BYTE&&(re=i.R8)),w===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(re=i.R8UI),z===i.UNSIGNED_SHORT&&(re=i.R16UI),z===i.UNSIGNED_INT&&(re=i.R32UI),z===i.BYTE&&(re=i.R8I),z===i.SHORT&&(re=i.R16I),z===i.INT&&(re=i.R32I)),w===i.RG&&(z===i.FLOAT&&(re=i.RG32F),z===i.HALF_FLOAT&&(re=i.RG16F),z===i.UNSIGNED_BYTE&&(re=i.RG8)),w===i.RGBA){const xe=te?Zn:at.getTransfer(ne);z===i.FLOAT&&(re=i.RGBA32F),z===i.HALF_FLOAT&&(re=i.RGBA16F),z===i.UNSIGNED_BYTE&&(re=xe===ct?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function U(b,w,z){return M(b,z)===!0||b.isFramebufferTexture&&b.minFilter!==Nt&&b.minFilter!==qt?Math.log2(Math.max(w.width,w.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?w.mipmaps.length:1}function P(b){return b===Nt||b===dl||b===Ms?i.NEAREST:i.LINEAR}function R(b){const w=b.target;w.removeEventListener("dispose",R),S(w),w.isVideoTexture&&h.delete(w)}function Q(b){const w=b.target;w.removeEventListener("dispose",Q),j(w)}function S(b){const w=r.get(b);if(w.__webglInit===void 0)return;const z=b.source,ne=d.get(z);if(ne){const te=ne[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&E(b),Object.keys(ne).length===0&&d.delete(z)}r.remove(b)}function E(b){const w=r.get(b);i.deleteTexture(w.__webglTexture);const z=b.source,ne=d.get(z);delete ne[w.__cacheKey],o.memory.textures--}function j(b){const w=b.texture,z=r.get(b),ne=r.get(w);if(ne.__webglTexture!==void 0&&(i.deleteTexture(ne.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(z.__webglFramebuffer[te]))for(let re=0;re<z.__webglFramebuffer[te].length;re++)i.deleteFramebuffer(z.__webglFramebuffer[te][re]);else i.deleteFramebuffer(z.__webglFramebuffer[te]);z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer[te])}else{if(Array.isArray(z.__webglFramebuffer))for(let te=0;te<z.__webglFramebuffer.length;te++)i.deleteFramebuffer(z.__webglFramebuffer[te]);else i.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let te=0;te<z.__webglColorRenderbuffer.length;te++)z.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(z.__webglColorRenderbuffer[te]);z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let te=0,re=w.length;te<re;te++){const xe=r.get(w[te]);xe.__webglTexture&&(i.deleteTexture(xe.__webglTexture),o.memory.textures--),r.remove(w[te])}r.remove(w),r.remove(b)}let X=0;function de(){X=0}function I(){const b=X;return b>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+n.maxTextures),X+=1,b}function G(b){const w=[];return w.push(b.wrapS),w.push(b.wrapT),w.push(b.wrapR||0),w.push(b.magFilter),w.push(b.minFilter),w.push(b.anisotropy),w.push(b.internalFormat),w.push(b.format),w.push(b.type),w.push(b.generateMipmaps),w.push(b.premultiplyAlpha),w.push(b.flipY),w.push(b.unpackAlignment),w.push(b.colorSpace),w.join()}function q(b,w){const z=r.get(b);if(b.isVideoTexture&&ht(b),b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){const ne=b.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(z,b,w);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+w)}function J(b,w){const z=r.get(b);if(b.version>0&&z.__version!==b.version){ve(z,b,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+w)}function K(b,w){const z=r.get(b);if(b.version>0&&z.__version!==b.version){ve(z,b,w);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+w)}function Y(b,w){const z=r.get(b);if(b.version>0&&z.__version!==b.version){Se(z,b,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+w)}const ie={[Ss]:i.REPEAT,[rr]:i.CLAMP_TO_EDGE,[bs]:i.MIRRORED_REPEAT},ae={[Nt]:i.NEAREST,[dl]:i.NEAREST_MIPMAP_NEAREST,[Ms]:i.NEAREST_MIPMAP_LINEAR,[qt]:i.LINEAR,[Vv]:i.LINEAR_MIPMAP_NEAREST,[hn]:i.LINEAR_MIPMAP_LINEAR},me={[t0]:i.NEVER,[o0]:i.ALWAYS,[r0]:i.LESS,[Yl]:i.LEQUAL,[i0]:i.EQUAL,[s0]:i.GEQUAL,[n0]:i.GREATER,[a0]:i.NOTEQUAL};function V(b,w,z){if(z?(i.texParameteri(b,i.TEXTURE_WRAP_S,ie[w.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,ie[w.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,ie[w.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ae[w.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ae[w.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(w.wrapS!==rr||w.wrapT!==rr)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,P(w.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,P(w.minFilter)),w.minFilter!==Nt&&w.minFilter!==qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,me[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Nt||w.minFilter!==Ms&&w.minFilter!==hn||w.type===Hr&&e.has("OES_texture_float_linear")===!1||s===!1&&w.type===un&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||r.get(w).__currentAnisotropy)&&(i.texParameterf(b,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,n.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy)}}function $(b,w){let z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,w.addEventListener("dispose",R));const ne=w.source;let te=d.get(ne);te===void 0&&(te={},d.set(ne,te));const re=G(w);if(re!==b.__cacheKey){te[re]===void 0&&(te[re]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),te[re].usedTimes++;const xe=te[b.__cacheKey];xe!==void 0&&(te[b.__cacheKey].usedTimes--,xe.usedTimes===0&&E(w)),b.__cacheKey=re,b.__webglTexture=te[re].texture}return z}function ve(b,w,z){let ne=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ne=i.TEXTURE_3D);const te=$(b,w),re=w.source;t.bindTexture(ne,b.__webglTexture,i.TEXTURE0+z);const xe=r.get(re);if(re.version!==xe.__version||te===!0){t.activeTexture(i.TEXTURE0+z);const pe=at.getPrimaries(at.workingColorSpace),ge=w.colorSpace===Yt?null:at.getPrimaries(w.colorSpace),Ae=w.colorSpace===Yt||pe===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const ze=p(w)&&f(w.image)===!1;let ee=v(w.image,ze,!1,n.maxTextureSize);ee=Fe(w,ee);const $e=f(ee)||s,T=a.convert(w.format,w.colorSpace);let Z=a.convert(w.type),ce=L(w.internalFormat,T,Z,w.colorSpace,w.isVideoTexture);V(ne,w,$e);let oe;const Me=w.mipmaps,Ge=s&&w.isVideoTexture!==!0&&ce!==bl,tt=xe.__version===void 0||te===!0,ke=U(w,ee,$e);if(w.isDepthTexture)ce=i.DEPTH_COMPONENT,s?w.type===Hr?ce=i.DEPTH_COMPONENT32F:w.type===Br?ce=i.DEPTH_COMPONENT24:w.type===ei?ce=i.DEPTH24_STENCIL8:ce=i.DEPTH_COMPONENT16:w.type===Hr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===ti&&ce===i.DEPTH_COMPONENT&&w.type!==Es&&w.type!==Br&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Br,Z=a.convert(w.type)),w.format===Ei&&ce===i.DEPTH_COMPONENT&&(ce=i.DEPTH_STENCIL,w.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=ei,Z=a.convert(w.type))),tt&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,ce,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,ce,ee.width,ee.height,0,T,Z,null));else if(w.isDataTexture)if(Me.length>0&&$e){Ge&&tt&&t.texStorage2D(i.TEXTURE_2D,ke,ce,Me[0].width,Me[0].height);for(let le=0,A=Me.length;le<A;le++)oe=Me[le],Ge?t.texSubImage2D(i.TEXTURE_2D,le,0,0,oe.width,oe.height,T,Z,oe.data):t.texImage2D(i.TEXTURE_2D,le,ce,oe.width,oe.height,0,T,Z,oe.data);w.generateMipmaps=!1}else Ge?(tt&&t.texStorage2D(i.TEXTURE_2D,ke,ce,ee.width,ee.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,T,Z,ee.data)):t.texImage2D(i.TEXTURE_2D,0,ce,ee.width,ee.height,0,T,Z,ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ge&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,ce,Me[0].width,Me[0].height,ee.depth);for(let le=0,A=Me.length;le<A;le++)oe=Me[le],w.format!==ir?T!==null?Ge?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,oe.width,oe.height,ee.depth,T,oe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,ce,oe.width,oe.height,ee.depth,0,oe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,oe.width,oe.height,ee.depth,T,Z,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,ce,oe.width,oe.height,ee.depth,0,T,Z,oe.data)}else{Ge&&tt&&t.texStorage2D(i.TEXTURE_2D,ke,ce,Me[0].width,Me[0].height);for(let le=0,A=Me.length;le<A;le++)oe=Me[le],w.format!==ir?T!==null?Ge?t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,oe.width,oe.height,T,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,le,ce,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage2D(i.TEXTURE_2D,le,0,0,oe.width,oe.height,T,Z,oe.data):t.texImage2D(i.TEXTURE_2D,le,ce,oe.width,oe.height,0,T,Z,oe.data)}else if(w.isDataArrayTexture)Ge?(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,ce,ee.width,ee.height,ee.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,T,Z,ee.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,ee.width,ee.height,ee.depth,0,T,Z,ee.data);else if(w.isData3DTexture)Ge?(tt&&t.texStorage3D(i.TEXTURE_3D,ke,ce,ee.width,ee.height,ee.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,T,Z,ee.data)):t.texImage3D(i.TEXTURE_3D,0,ce,ee.width,ee.height,ee.depth,0,T,Z,ee.data);else if(w.isFramebufferTexture){if(tt)if(Ge)t.texStorage2D(i.TEXTURE_2D,ke,ce,ee.width,ee.height);else{let le=ee.width,A=ee.height;for(let se=0;se<ke;se++)t.texImage2D(i.TEXTURE_2D,se,ce,le,A,0,T,Z,null),le>>=1,A>>=1}}else if(Me.length>0&&$e){Ge&&tt&&t.texStorage2D(i.TEXTURE_2D,ke,ce,Me[0].width,Me[0].height);for(let le=0,A=Me.length;le<A;le++)oe=Me[le],Ge?t.texSubImage2D(i.TEXTURE_2D,le,0,0,T,Z,oe):t.texImage2D(i.TEXTURE_2D,le,ce,T,Z,oe);w.generateMipmaps=!1}else Ge?(tt&&t.texStorage2D(i.TEXTURE_2D,ke,ce,ee.width,ee.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,T,Z,ee)):t.texImage2D(i.TEXTURE_2D,0,ce,T,Z,ee);M(w,$e)&&x(ne),xe.__version=re.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function Se(b,w,z){if(w.image.length!==6)return;const ne=$(b,w),te=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+z);const re=r.get(te);if(te.version!==re.__version||ne===!0){t.activeTexture(i.TEXTURE0+z);const xe=at.getPrimaries(at.workingColorSpace),pe=w.colorSpace===Yt?null:at.getPrimaries(w.colorSpace),ge=w.colorSpace===Yt||xe===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ae=w.isCompressedTexture||w.image[0].isCompressedTexture,ze=w.image[0]&&w.image[0].isDataTexture,ee=[];for(let le=0;le<6;le++)!Ae&&!ze?ee[le]=v(w.image[le],!1,!0,n.maxCubemapSize):ee[le]=ze?w.image[le].image:w.image[le],ee[le]=Fe(w,ee[le]);const $e=ee[0],T=f($e)||s,Z=a.convert(w.format,w.colorSpace),ce=a.convert(w.type),oe=L(w.internalFormat,Z,ce,w.colorSpace),Me=s&&w.isVideoTexture!==!0,Ge=re.__version===void 0||ne===!0;let tt=U(w,$e,T);V(i.TEXTURE_CUBE_MAP,w,T);let ke;if(Ae){Me&&Ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,tt,oe,$e.width,$e.height);for(let le=0;le<6;le++){ke=ee[le].mipmaps;for(let A=0;A<ke.length;A++){const se=ke[A];w.format!==ir?Z!==null?Me?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,A,0,0,se.width,se.height,Z,se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,A,oe,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Me?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,A,0,0,se.width,se.height,Z,ce,se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,A,oe,se.width,se.height,0,Z,ce,se.data)}}}else{ke=w.mipmaps,Me&&Ge&&(ke.length>0&&tt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,tt,oe,ee[0].width,ee[0].height));for(let le=0;le<6;le++)if(ze){Me?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ee[le].width,ee[le].height,Z,ce,ee[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,oe,ee[le].width,ee[le].height,0,Z,ce,ee[le].data);for(let A=0;A<ke.length;A++){const se=ke[A].image[le].image;Me?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,A+1,0,0,se.width,se.height,Z,ce,se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,A+1,oe,se.width,se.height,0,Z,ce,se.data)}}else{Me?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Z,ce,ee[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,oe,Z,ce,ee[le]);for(let A=0;A<ke.length;A++){const se=ke[A];Me?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,A+1,0,0,Z,ce,se.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,A+1,oe,Z,ce,se.image[le])}}}M(w,T)&&x(i.TEXTURE_CUBE_MAP),re.__version=te.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function ye(b,w,z,ne,te,re){const xe=a.convert(z.format,z.colorSpace),pe=a.convert(z.type),ge=L(z.internalFormat,xe,pe,z.colorSpace);if(!r.get(w).__hasExternalTextures){const Ae=Math.max(1,w.width>>re),ze=Math.max(1,w.height>>re);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,re,ge,Ae,ze,w.depth,0,xe,pe,null):t.texImage2D(te,re,ge,Ae,ze,0,xe,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),we(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,te,r.get(z).__webglTexture,0,Ie(w)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,te,r.get(z).__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(b,w,z){if(i.bindRenderbuffer(i.RENDERBUFFER,b),w.depthBuffer&&!w.stencilBuffer){let ne=s===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(z||we(w)){const te=w.depthTexture;te&&te.isDepthTexture&&(te.type===Hr?ne=i.DEPTH_COMPONENT32F:te.type===Br&&(ne=i.DEPTH_COMPONENT24));const re=Ie(w);we(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,ne,w.width,w.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,re,ne,w.width,w.height)}else i.renderbufferStorage(i.RENDERBUFFER,ne,w.width,w.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(w.depthBuffer&&w.stencilBuffer){const ne=Ie(w);z&&we(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,w.width,w.height):we(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{const ne=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let te=0;te<ne.length;te++){const re=ne[te],xe=a.convert(re.format,re.colorSpace),pe=a.convert(re.type),ge=L(re.internalFormat,xe,pe,re.colorSpace),Ae=Ie(w);z&&we(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,ge,w.width,w.height):we(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,ge,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ge,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(b,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),q(w.depthTexture,0);const z=r.get(w.depthTexture).__webglTexture,ne=Ie(w);if(w.depthTexture.format===ti)we(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,z,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,z,0);else if(w.depthTexture.format===Ei)we(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,z,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function Ce(b){const w=r.get(b),z=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!w.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ne(w.__webglFramebuffer,b)}else if(z){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]=i.createRenderbuffer(),De(w.__webglDepthbuffer[ne],b,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),De(w.__webglDepthbuffer,b,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(b,w,z){const ne=r.get(b);w!==void 0&&ye(ne.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ce(b)}function H(b){const w=b.texture,z=r.get(b),ne=r.get(w);b.addEventListener("dispose",Q),b.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=w.version,o.memory.textures++);const te=b.isWebGLCubeRenderTarget===!0,re=b.isWebGLMultipleRenderTargets===!0,xe=f(b)||s;if(te){z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(s&&w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer[pe]=[];for(let ge=0;ge<w.mipmaps.length;ge++)z.__webglFramebuffer[pe][ge]=i.createFramebuffer()}else z.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(s&&w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer=[];for(let pe=0;pe<w.mipmaps.length;pe++)z.__webglFramebuffer[pe]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(re)if(n.drawBuffers){const pe=b.texture;for(let ge=0,Ae=pe.length;ge<Ae;ge++){const ze=r.get(pe[ge]);ze.__webglTexture===void 0&&(ze.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&b.samples>0&&we(b)===!1){const pe=re?w:[w];z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ge=0;ge<pe.length;ge++){const Ae=pe[ge];z.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ge]);const ze=a.convert(Ae.format,Ae.colorSpace),ee=a.convert(Ae.type),$e=L(Ae.internalFormat,ze,ee,Ae.colorSpace,b.isXRRenderTarget===!0),T=Ie(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,T,$e,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,z.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),De(z.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),V(i.TEXTURE_CUBE_MAP,w,xe);for(let pe=0;pe<6;pe++)if(s&&w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)ye(z.__webglFramebuffer[pe][ge],b,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ge);else ye(z.__webglFramebuffer[pe],b,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);M(w,xe)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const pe=b.texture;for(let ge=0,Ae=pe.length;ge<Ae;ge++){const ze=pe[ge],ee=r.get(ze);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),V(i.TEXTURE_2D,ze,xe),ye(z.__webglFramebuffer,b,ze,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,0),M(ze,xe)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(s?pe=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,ne.__webglTexture),V(pe,w,xe),s&&w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)ye(z.__webglFramebuffer[ge],b,w,i.COLOR_ATTACHMENT0,pe,ge);else ye(z.__webglFramebuffer,b,w,i.COLOR_ATTACHMENT0,pe,0);M(w,xe)&&x(pe),t.unbindTexture()}b.depthBuffer&&Ce(b)}function Rt(b){const w=f(b)||s,z=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ne=0,te=z.length;ne<te;ne++){const re=z[ne];if(M(re,w)){const xe=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,pe=r.get(re).__webglTexture;t.bindTexture(xe,pe),x(xe),t.unbindTexture()}}}function Ee(b){if(s&&b.samples>0&&we(b)===!1){const w=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],z=b.width,ne=b.height;let te=i.COLOR_BUFFER_BIT;const re=[],xe=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=r.get(b),ge=b.isWebGLMultipleRenderTargets===!0;if(ge)for(let Ae=0;Ae<w.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Ae=0;Ae<w.length;Ae++){re.push(i.COLOR_ATTACHMENT0+Ae),b.depthBuffer&&re.push(xe);const ze=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(ze===!1&&(b.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),ge&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[Ae]),ze===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[xe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[xe])),ge){const ee=r.get(w[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,z,ne,0,0,z,ne,te,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let Ae=0;Ae<w.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,pe.__webglColorRenderbuffer[Ae]);const ze=r.get(w[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function Ie(b){return Math.min(n.maxSamples,b.samples)}function we(b){const w=r.get(b);return s&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ht(b){const w=o.render.frame;h.get(b)!==w&&(h.set(b,w),b.update())}function Fe(b,w){const z=b.colorSpace,ne=b.format,te=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Is||z!==xr&&z!==Yt&&(at.getTransfer(z)===ct?s===!1?e.has("EXT_sRGB")===!0&&ne===ir?(b.format=Is,b.minFilter=qt,b.generateMipmaps=!1):w=rc.sRGBToLinear(w):(ne!==ir||te!==zr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),w}this.allocateTextureUnit=I,this.resetTextureUnits=de,this.setTexture2D=q,this.setTexture2DArray=J,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=Qe,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=we}function Sb(i,e,t){const r=t.isWebGL2;function n(a,o=Yt){let s;const l=at.getTransfer(o);if(a===zr)return i.UNSIGNED_BYTE;if(a===fl)return i.UNSIGNED_SHORT_4_4_4_4;if(a===ml)return i.UNSIGNED_SHORT_5_5_5_1;if(a===Wv)return i.BYTE;if(a===jv)return i.SHORT;if(a===Es)return i.UNSIGNED_SHORT;if(a===pl)return i.INT;if(a===Br)return i.UNSIGNED_INT;if(a===Hr)return i.FLOAT;if(a===un)return r?i.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===Xv)return i.ALPHA;if(a===ir)return i.RGBA;if(a===qv)return i.LUMINANCE;if(a===Yv)return i.LUMINANCE_ALPHA;if(a===ti)return i.DEPTH_COMPONENT;if(a===Ei)return i.DEPTH_STENCIL;if(a===Is)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===Kv)return i.RED;if(a===gl)return i.RED_INTEGER;if(a===Jv)return i.RG;if(a===_l)return i.RG_INTEGER;if(a===vl)return i.RGBA_INTEGER;if(a===Ts||a===Rs||a===As||a===Cs)if(l===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===Ts)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===As)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===Ts)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Rs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===As)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Cs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===wl||a===xl||a===yl||a===Sl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===wl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===xl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===yl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Sl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===bl)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Ml||a===El)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===Ml)return l===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===El)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Tl||a===Rl||a===Al||a===Cl||a===Pl||a===Ll||a===Il||a===Dl||a===Ul||a===Nl||a===Ol||a===Fl||a===zl||a===Bl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===Tl)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Rl)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Al)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Cl)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Pl)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Ll)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Il)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Dl)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Ul)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Nl)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Ol)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Fl)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===zl)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Bl)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Ps||a===Hl||a===Gl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===Ps)return l===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Hl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Gl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Zv||a===kl||a===Vl||a===Wl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===Ps)return s.COMPRESSED_RED_RGTC1_EXT;if(a===kl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Vl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Wl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===ei?r?i.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:n}}class bb extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ra extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mb={type:"move"};class lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ra,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ra,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ra,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const f=t.getJointPose(v,r),p=this._getHandJoint(c,v);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&a!==null&&(n=a),n!==null&&(s.matrix.fromArray(n.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,n.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(n.linearVelocity)):s.hasLinearVelocity=!1,n.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(n.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Mb)))}return s!==null&&(s.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Ra;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Eb extends ii{constructor(e,t){super();const r=this;let n=null,a=1,o=null,s="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,_=null;const v=t.getContextAttributes();let f=null,p=null;const M=[],x=[],L=new Oe;let U=null;const P=new Jt;P.layers.enable(1),P.viewport=new Et;const R=new Jt;R.layers.enable(2),R.viewport=new Et;const Q=[P,R],S=new bb;S.layers.enable(1),S.layers.enable(2);let E=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let $=M[V];return $===void 0&&($=new lo,M[V]=$),$.getTargetRaySpace()},this.getControllerGrip=function(V){let $=M[V];return $===void 0&&($=new lo,M[V]=$),$.getGripSpace()},this.getHand=function(V){let $=M[V];return $===void 0&&($=new lo,M[V]=$),$.getHandSpace()};function X(V){const $=x.indexOf(V.inputSource);if($===-1)return;const ve=M[$];ve!==void 0&&(ve.update(V.inputSource,V.frame,c||o),ve.dispatchEvent({type:V.type,data:V.inputSource}))}function de(){n.removeEventListener("select",X),n.removeEventListener("selectstart",X),n.removeEventListener("selectend",X),n.removeEventListener("squeeze",X),n.removeEventListener("squeezestart",X),n.removeEventListener("squeezeend",X),n.removeEventListener("end",de),n.removeEventListener("inputsourceschange",I);for(let V=0;V<M.length;V++){const $=x[V];$!==null&&(x[V]=null,M[V].disconnect($))}E=null,j=null,e.setRenderTarget(f),m=null,d=null,u=null,n=null,p=null,me.stop(),r.isPresenting=!1,e.setPixelRatio(U),e.setSize(L.width,L.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){a=V,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){s=V,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=async function(V){if(n=V,n!==null){if(f=e.getRenderTarget(),n.addEventListener("select",X),n.addEventListener("selectstart",X),n.addEventListener("selectend",X),n.addEventListener("squeeze",X),n.addEventListener("squeezestart",X),n.addEventListener("squeezeend",X),n.addEventListener("end",de),n.addEventListener("inputsourceschange",I),v.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(L),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:n.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(n,t,$),n.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new ni(m.framebufferWidth,m.framebufferHeight,{format:ir,type:zr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let $=null,ve=null,Se=null;v.depth&&(Se=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=v.stencil?Ei:ti,ve=v.stencil?ei:Br);const ye={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:a};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(ye),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new ni(d.textureWidth,d.textureHeight,{format:ir,type:zr,depthTexture:new Oc(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const De=e.properties.get(p);De.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(s),me.setContext(n),me.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function I(V){for(let $=0;$<V.removed.length;$++){const ve=V.removed[$],Se=x.indexOf(ve);Se>=0&&(x[Se]=null,M[Se].disconnect(ve))}for(let $=0;$<V.added.length;$++){const ve=V.added[$];let Se=x.indexOf(ve);if(Se===-1){for(let De=0;De<M.length;De++)if(De>=x.length){x.push(ve),Se=De;break}else if(x[De]===null){x[De]=ve,Se=De;break}if(Se===-1)break}const ye=M[Se];ye&&ye.connect(ve)}}const G=new F,q=new F;function J(V,$,ve){G.setFromMatrixPosition($.matrixWorld),q.setFromMatrixPosition(ve.matrixWorld);const Se=G.distanceTo(q),ye=$.projectionMatrix.elements,De=ve.projectionMatrix.elements,Ne=ye[14]/(ye[10]-1),Ce=ye[14]/(ye[10]+1),Qe=(ye[9]+1)/ye[5],H=(ye[9]-1)/ye[5],Rt=(ye[8]-1)/ye[0],Ee=(De[8]+1)/De[0],Ie=Ne*Rt,we=Ne*Ee,ht=Se/(-Rt+Ee),Fe=ht*-Rt;$.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Fe),V.translateZ(ht),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const b=Ne+ht,w=Ce+ht,z=Ie-Fe,ne=we+(Se-Fe),te=Qe*Ce/w*b,re=H*Ce/w*b;V.projectionMatrix.makePerspective(z,ne,te,re,b,w),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function K(V,$){$===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices($.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(n===null)return;S.near=R.near=P.near=V.near,S.far=R.far=P.far=V.far,(E!==S.near||j!==S.far)&&(n.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,j=S.far);const $=V.parent,ve=S.cameras;K(S,$);for(let Se=0;Se<ve.length;Se++)K(ve[Se],$);ve.length===2?J(S,P,R):S.projectionMatrix.copy(P.projectionMatrix),Y(V,S,$)};function Y(V,$,ve){ve===null?V.matrix.copy($.matrixWorld):(V.matrix.copy(ve.matrixWorld),V.matrix.invert(),V.matrix.multiply($.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy($.projectionMatrix),V.projectionMatrixInverse.copy($.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=pn*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)};let ie=null;function ae(V,$){if(h=$.getViewerPose(c||o),_=$,h!==null){const ve=h.views;m!==null&&(e.setRenderTargetFramebuffer(p,m.framebuffer),e.setRenderTarget(p));let Se=!1;ve.length!==S.cameras.length&&(S.cameras.length=0,Se=!0);for(let ye=0;ye<ve.length;ye++){const De=ve[ye];let Ne=null;if(m!==null)Ne=m.getViewport(De);else{const Qe=u.getViewSubImage(d,De);Ne=Qe.viewport,ye===0&&(e.setRenderTargetTextures(p,Qe.colorTexture,d.ignoreDepthValues?void 0:Qe.depthStencilTexture),e.setRenderTarget(p))}let Ce=Q[ye];Ce===void 0&&(Ce=new Jt,Ce.layers.enable(ye),Ce.viewport=new Et,Q[ye]=Ce),Ce.matrix.fromArray(De.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(De.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),ye===0&&(S.matrix.copy(Ce.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Se===!0&&S.cameras.push(Ce)}}for(let ve=0;ve<M.length;ve++){const Se=x[ve],ye=M[ve];Se!==null&&ye!==void 0&&ye.update(Se,$,c||o)}ie&&ie(V,$),$.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:$}),_=null}const me=new Rc;me.setAnimationLoop(ae),this.setAnimationLoop=function(V){ie=V},this.dispose=function(){}}}function Tb(i,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function r(f,p){p.color.getRGB(f.fogColor.value,Mc(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function n(f,p,M,x,L){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(f,p):p.isMeshToonMaterial?(a(f,p),u(f,p)):p.isMeshPhongMaterial?(a(f,p),h(f,p)):p.isMeshStandardMaterial?(a(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,L)):p.isMeshMatcapMaterial?(a(f,p),_(f,p)):p.isMeshDepthMaterial?a(f,p):p.isMeshDistanceMaterial?(a(f,p),v(f,p)):p.isMeshNormalMaterial?a(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&s(f,p)):p.isPointsMaterial?l(f,p,M,x):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Ht&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Ht&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const M=e.get(p).envMap;if(M&&(f.envMap.value=M,f.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function s(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,M,x){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*M,f.scale.value=x*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,M){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,p){p.matcap&&(f.matcap.value=p.matcap)}function v(f,p){const M=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function Rb(i,e,t,r){let n={},a={},o=[];const s=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,x){const L=x.program;r.uniformBlockBinding(M,L)}function c(M,x){let L=n[M.id];L===void 0&&(_(M),L=h(M),n[M.id]=L,M.addEventListener("dispose",f));const U=x.program;r.updateUBOMapping(M,U);const P=e.render.frame;a[M.id]!==P&&(d(M),a[M.id]=P)}function h(M){const x=u();M.__bindingPointIndex=x;const L=i.createBuffer(),U=M.__size,P=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,U,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,L),L}function u(){for(let M=0;M<s;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=n[M.id],L=M.uniforms,U=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let P=0,R=L.length;P<R;P++){const Q=Array.isArray(L[P])?L[P]:[L[P]];for(let S=0,E=Q.length;S<E;S++){const j=Q[S];if(m(j,P,S,U)===!0){const X=j.__offset,de=Array.isArray(j.value)?j.value:[j.value];let I=0;for(let G=0;G<de.length;G++){const q=de[G],J=v(q);typeof q=="number"||typeof q=="boolean"?(j.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,X+I,j.__data)):q.isMatrix3?(j.__data[0]=q.elements[0],j.__data[1]=q.elements[1],j.__data[2]=q.elements[2],j.__data[3]=0,j.__data[4]=q.elements[3],j.__data[5]=q.elements[4],j.__data[6]=q.elements[5],j.__data[7]=0,j.__data[8]=q.elements[6],j.__data[9]=q.elements[7],j.__data[10]=q.elements[8],j.__data[11]=0):(q.toArray(j.__data,I),I+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,j.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,x,L,U){const P=M.value,R=x+"_"+L;if(U[R]===void 0)return typeof P=="number"||typeof P=="boolean"?U[R]=P:U[R]=P.clone(),!0;{const Q=U[R];if(typeof P=="number"||typeof P=="boolean"){if(Q!==P)return U[R]=P,!0}else if(Q.equals(P)===!1)return Q.copy(P),!0}return!1}function _(M){const x=M.uniforms;let L=0;const U=16;for(let R=0,Q=x.length;R<Q;R++){const S=Array.isArray(x[R])?x[R]:[x[R]];for(let E=0,j=S.length;E<j;E++){const X=S[E],de=Array.isArray(X.value)?X.value:[X.value];for(let I=0,G=de.length;I<G;I++){const q=de[I],J=v(q),K=L%U;K!==0&&U-K<J.boundary&&(L+=U-K),X.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=L,L+=J.storage}}}const P=L%U;return P>0&&(L+=U-P),M.__size=L,M.__cache={},this}function v(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function f(M){const x=M.target;x.removeEventListener("dispose",f);const L=o.indexOf(x.__bindingPointIndex);o.splice(L,1),i.deleteBuffer(n[x.id]),delete n[x.id],delete a[x.id]}function p(){for(const M in n)i.deleteBuffer(n[M]);o=[],n={},a={}}return{bind:l,update:c,dispose:p}}class ih{constructor(e={}){const{canvas:t=b0(),context:r=null,depth:n=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;r!==null?d=r.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),_=new Int32Array(4);let v=null,f=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this._useLegacyLights=!1,this.toneMapping=Fr,this.toneMappingExposure=1;const x=this;let L=!1,U=0,P=0,R=null,Q=-1,S=null;const E=new Et,j=new Et;let X=null;const de=new Je(0);let I=0,G=t.width,q=t.height,J=1,K=null,Y=null;const ie=new Et(0,0,G,q),ae=new Et(0,0,G,q);let me=!1;const V=new $s;let $=!1,ve=!1,Se=null;const ye=new yt,De=new Oe,Ne=new F,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Qe(){return R===null?J:1}let H=r;function Rt(y,O){for(let k=0;k<y.length;k++){const W=y[k],B=t.getContext(W,O);if(B!==null)return B}return null}try{const y={alpha:!0,depth:n,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gs}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",A,!1),t.addEventListener("webglcontextcreationerror",se,!1),H===null){const O=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&O.shift(),H=Rt(O,y),H===null)throw Rt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ee,Ie,we,ht,Fe,b,w,z,ne,te,re,xe,pe,ge,Ae,ze,ee,$e,T,Z,ce,oe,Me,Ge;function tt(){Ee=new Fy(H),Ie=new Ly(H,Ee,e),Ee.init(Ie),oe=new Sb(H,Ee,Ie),we=new xb(H,Ee,Ie),ht=new Hy(H),Fe=new sb,b=new yb(H,Ee,we,Fe,Ie,oe,ht),w=new Dy(x),z=new Oy(x),ne=new Y0(H,Ie),Me=new Cy(H,Ee,ne,Ie),te=new zy(H,ne,ht,Me),re=new Wy(H,te,ne,ht),T=new Vy(H,Ie,b),ze=new Iy(Fe),xe=new ab(x,w,z,Ee,Ie,Me,ze),pe=new Tb(x,Fe),ge=new lb,Ae=new fb(Ee,Ie),$e=new Ay(x,w,z,we,re,d,l),ee=new wb(x,re,Ie),Ge=new Rb(H,ht,Ie,we),Z=new Py(H,Ee,ht,Ie),ce=new By(H,Ee,ht,Ie),ht.programs=xe.programs,x.capabilities=Ie,x.extensions=Ee,x.properties=Fe,x.renderLists=ge,x.shadowMap=ee,x.state=we,x.info=ht}tt();const ke=new Eb(x,H);this.xr=ke,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const y=Ee.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ee.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(y){y!==void 0&&(J=y,this.setSize(G,q,!1))},this.getSize=function(y){return y.set(G,q)},this.setSize=function(y,O,k=!0){if(ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=y,q=O,t.width=Math.floor(y*J),t.height=Math.floor(O*J),k===!0&&(t.style.width=y+"px",t.style.height=O+"px"),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(G*J,q*J).floor()},this.setDrawingBufferSize=function(y,O,k){G=y,q=O,J=k,t.width=Math.floor(y*k),t.height=Math.floor(O*k),this.setViewport(0,0,y,O)},this.getCurrentViewport=function(y){return y.copy(E)},this.getViewport=function(y){return y.copy(ie)},this.setViewport=function(y,O,k,W){y.isVector4?ie.set(y.x,y.y,y.z,y.w):ie.set(y,O,k,W),we.viewport(E.copy(ie).multiplyScalar(J).floor())},this.getScissor=function(y){return y.copy(ae)},this.setScissor=function(y,O,k,W){y.isVector4?ae.set(y.x,y.y,y.z,y.w):ae.set(y,O,k,W),we.scissor(j.copy(ae).multiplyScalar(J).floor())},this.getScissorTest=function(){return me},this.setScissorTest=function(y){we.setScissorTest(me=y)},this.setOpaqueSort=function(y){K=y},this.setTransparentSort=function(y){Y=y},this.getClearColor=function(y){return y.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(y=!0,O=!0,k=!0){let W=0;if(y){let B=!1;if(R!==null){const ue=R.texture.format;B=ue===vl||ue===_l||ue===gl}if(B){const ue=R.texture.type,Te=ue===zr||ue===Br||ue===Es||ue===ei||ue===fl||ue===ml,Le=$e.getClearColor(),Ue=$e.getClearAlpha(),Ze=Le.r,Ve=Le.g,We=Le.b;Te?(m[0]=Ze,m[1]=Ve,m[2]=We,m[3]=Ue,H.clearBufferuiv(H.COLOR,0,m)):(_[0]=Ze,_[1]=Ve,_[2]=We,_[3]=Ue,H.clearBufferiv(H.COLOR,0,_))}else W|=H.COLOR_BUFFER_BIT}O&&(W|=H.DEPTH_BUFFER_BIT),k&&(W|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",A,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ge.dispose(),Ae.dispose(),Fe.dispose(),w.dispose(),z.dispose(),re.dispose(),Me.dispose(),Ge.dispose(),xe.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Zt),ke.removeEventListener("sessionend",lt),Se&&(Se.dispose(),Se=null),zt.stop()};function le(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function A(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const y=ht.autoReset,O=ee.enabled,k=ee.autoUpdate,W=ee.needsUpdate,B=ee.type;tt(),ht.autoReset=y,ee.enabled=O,ee.autoUpdate=k,ee.needsUpdate=W,ee.type=B}function se(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function fe(y){const O=y.target;O.removeEventListener("dispose",fe),Pe(O)}function Pe(y){be(y),Fe.remove(y)}function be(y){const O=Fe.get(y).programs;O!==void 0&&(O.forEach(function(k){xe.releaseProgram(k)}),y.isShaderMaterial&&xe.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,k,W,B,ue){O===null&&(O=Ce);const Te=B.isMesh&&B.matrixWorld.determinant()<0,Le=kb(y,O,k,W,B);we.setMaterial(W,Te);let Ue=k.index,Ze=1;if(W.wireframe===!0){if(Ue=te.getWireframeAttribute(k),Ue===void 0)return;Ze=2}const Ve=k.drawRange,We=k.attributes.position;let Dt=Ve.start*Ze,Mt=(Ve.start+Ve.count)*Ze;ue!==null&&(Dt=Math.max(Dt,ue.start*Ze),Mt=Math.min(Mt,(ue.start+ue.count)*Ze)),Ue!==null?(Dt=Math.max(Dt,0),Mt=Math.min(Mt,Ue.count)):We!=null&&(Dt=Math.max(Dt,0),Mt=Math.min(Mt,We.count));const Qt=Mt-Dt;if(Qt<0||Qt===1/0)return;Me.setup(B,W,Le,k,Ue);let Ar,ft=Z;if(Ue!==null&&(Ar=ne.get(Ue),ft=ce,ft.setIndex(Ar)),B.isMesh)W.wireframe===!0?(we.setLineWidth(W.wireframeLinewidth*Qe()),ft.setMode(H.LINES)):ft.setMode(H.TRIANGLES);else if(B.isLine){let qe=W.linewidth;qe===void 0&&(qe=1),we.setLineWidth(qe*Qe()),B.isLineSegments?ft.setMode(H.LINES):B.isLineLoop?ft.setMode(H.LINE_LOOP):ft.setMode(H.LINE_STRIP)}else B.isPoints?ft.setMode(H.POINTS):B.isSprite&&ft.setMode(H.TRIANGLES);if(B.isBatchedMesh)ft.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)ft.renderInstances(Dt,Qt,B.count);else if(k.isInstancedBufferGeometry){const qe=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,fo=Math.min(k.instanceCount,qe);ft.renderInstances(Dt,Qt,fo)}else ft.render(Dt,Qt)};function rt(y,O,k){y.transparent===!0&&y.side===wr&&y.forceSinglePass===!1?(y.side=Ht,y.needsUpdate=!0,Pa(y,O,k),y.side=Nr,y.needsUpdate=!0,Pa(y,O,k),y.side=wr):Pa(y,O,k)}this.compile=function(y,O,k=null){k===null&&(k=y),f=Ae.get(k),f.init(),M.push(f),k.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),y!==k&&y.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights(x._useLegacyLights);const W=new Set;return y.traverse(function(B){const ue=B.material;if(ue)if(Array.isArray(ue))for(let Te=0;Te<ue.length;Te++){const Le=ue[Te];rt(Le,k,B),W.add(Le)}else rt(ue,k,B),W.add(ue)}),M.pop(),f=null,W},this.compileAsync=function(y,O,k=null){const W=this.compile(y,O,k);return new Promise(B=>{function ue(){if(W.forEach(function(Te){Fe.get(Te).currentProgram.isReady()&&W.delete(Te)}),W.size===0){B(y);return}setTimeout(ue,10)}Ee.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let ot=null;function vt(y){ot&&ot(y)}function Zt(){zt.stop()}function lt(){zt.start()}const zt=new Rc;zt.setAnimationLoop(vt),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(y){ot=y,ke.setAnimationLoop(y),y===null?zt.stop():zt.start()},ke.addEventListener("sessionstart",Zt),ke.addEventListener("sessionend",lt),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(O),O=ke.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,O,R),f=Ae.get(y,M.length),f.init(),M.push(f),ye.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),V.setFromProjectionMatrix(ye),ve=this.localClippingEnabled,$=ze.init(this.clippingPlanes,ve),v=ge.get(y,p.length),v.init(),p.push(v),gr(y,O,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(K,Y),this.info.render.frame++,$===!0&&ze.beginShadows();const k=f.state.shadowsArray;if(ee.render(k,y,O),$===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),$e.render(v,y),f.setupLights(x._useLegacyLights),O.isArrayCamera){const W=O.cameras;for(let B=0,ue=W.length;B<ue;B++){const Te=W[B];fh(v,y,Te,Te.viewport)}}else fh(v,y,O);R!==null&&(b.updateMultisampleRenderTarget(R),b.updateRenderTargetMipmap(R)),y.isScene===!0&&y.onAfterRender(x,y,O),Me.resetDefaultState(),Q=-1,S=null,M.pop(),M.length>0?f=M[M.length-1]:f=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function gr(y,O,k,W){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||V.intersectsSprite(y)){W&&Ne.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ye);const ue=re.update(y),Te=y.material;Te.visible&&v.push(y,ue,Te,k,Ne.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||V.intersectsObject(y))){const ue=re.update(y),Te=y.material;if(W&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ne.copy(y.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Ne.copy(ue.boundingSphere.center)),Ne.applyMatrix4(y.matrixWorld).applyMatrix4(ye)),Array.isArray(Te)){const Le=ue.groups;for(let Ue=0,Ze=Le.length;Ue<Ze;Ue++){const Ve=Le[Ue],We=Te[Ve.materialIndex];We&&We.visible&&v.push(y,ue,We,k,Ne.z,Ve)}}else Te.visible&&v.push(y,ue,Te,k,Ne.z,null)}}const B=y.children;for(let ue=0,Te=B.length;ue<Te;ue++)gr(B[ue],O,k,W)}function fh(y,O,k,W){const B=y.opaque,ue=y.transmissive,Te=y.transparent;f.setupLightsView(k),$===!0&&ze.setGlobalState(x.clippingPlanes,k),ue.length>0&&Gb(B,ue,O,k),W&&we.viewport(E.copy(W)),B.length>0&&Ca(B,O,k),ue.length>0&&Ca(ue,O,k),Te.length>0&&Ca(Te,O,k),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Gb(y,O,k,W){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const B=Ie.isWebGL2;Se===null&&(Se=new ni(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?un:zr,minFilter:hn,samples:B?4:0})),x.getDrawingBufferSize(De),B?Se.setSize(De.x,De.y):Se.setSize(ta(De.x),ta(De.y));const ue=x.getRenderTarget();x.setRenderTarget(Se),x.getClearColor(de),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear();const Te=x.toneMapping;x.toneMapping=Fr,Ca(y,k,W),b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se);let Le=!1;for(let Ue=0,Ze=O.length;Ue<Ze;Ue++){const Ve=O[Ue],We=Ve.object,Dt=Ve.geometry,Mt=Ve.material,Qt=Ve.group;if(Mt.side===wr&&We.layers.test(W.layers)){const Ar=Mt.side;Mt.side=Ht,Mt.needsUpdate=!0,mh(We,k,W,Dt,Mt,Qt),Mt.side=Ar,Mt.needsUpdate=!0,Le=!0}}Le===!0&&(b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se)),x.setRenderTarget(ue),x.setClearColor(de,I),x.toneMapping=Te}function Ca(y,O,k){const W=O.isScene===!0?O.overrideMaterial:null;for(let B=0,ue=y.length;B<ue;B++){const Te=y[B],Le=Te.object,Ue=Te.geometry,Ze=W===null?Te.material:W,Ve=Te.group;Le.layers.test(k.layers)&&mh(Le,O,k,Ue,Ze,Ve)}}function mh(y,O,k,W,B,ue){y.onBeforeRender(x,O,k,W,B,ue),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),B.onBeforeRender(x,O,k,W,y,ue),B.transparent===!0&&B.side===wr&&B.forceSinglePass===!1?(B.side=Ht,B.needsUpdate=!0,x.renderBufferDirect(k,O,W,B,y,ue),B.side=Nr,B.needsUpdate=!0,x.renderBufferDirect(k,O,W,B,y,ue),B.side=wr):x.renderBufferDirect(k,O,W,B,y,ue),y.onAfterRender(x,O,k,W,B,ue)}function Pa(y,O,k){O.isScene!==!0&&(O=Ce);const W=Fe.get(y),B=f.state.lights,ue=f.state.shadowsArray,Te=B.state.version,Le=xe.getParameters(y,B.state,ue,O,k),Ue=xe.getProgramCacheKey(Le);let Ze=W.programs;W.environment=y.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(y.isMeshStandardMaterial?z:w).get(y.envMap||W.environment),Ze===void 0&&(y.addEventListener("dispose",fe),Ze=new Map,W.programs=Ze);let Ve=Ze.get(Ue);if(Ve!==void 0){if(W.currentProgram===Ve&&W.lightsStateVersion===Te)return _h(y,Le),Ve}else Le.uniforms=xe.getUniforms(y),y.onBuild(k,Le,x),y.onBeforeCompile(Le,x),Ve=xe.acquireProgram(Le,Ue),Ze.set(Ue,Ve),W.uniforms=Le.uniforms;const We=W.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(We.clippingPlanes=ze.uniform),_h(y,Le),W.needsLights=Wb(y),W.lightsStateVersion=Te,W.needsLights&&(We.ambientLightColor.value=B.state.ambient,We.lightProbe.value=B.state.probe,We.directionalLights.value=B.state.directional,We.directionalLightShadows.value=B.state.directionalShadow,We.spotLights.value=B.state.spot,We.spotLightShadows.value=B.state.spotShadow,We.rectAreaLights.value=B.state.rectArea,We.ltc_1.value=B.state.rectAreaLTC1,We.ltc_2.value=B.state.rectAreaLTC2,We.pointLights.value=B.state.point,We.pointLightShadows.value=B.state.pointShadow,We.hemisphereLights.value=B.state.hemi,We.directionalShadowMap.value=B.state.directionalShadowMap,We.directionalShadowMatrix.value=B.state.directionalShadowMatrix,We.spotShadowMap.value=B.state.spotShadowMap,We.spotLightMatrix.value=B.state.spotLightMatrix,We.spotLightMap.value=B.state.spotLightMap,We.pointShadowMap.value=B.state.pointShadowMap,We.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Ve,W.uniformsList=null,Ve}function gh(y){if(y.uniformsList===null){const O=y.currentProgram.getUniforms();y.uniformsList=Ta.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function _h(y,O){const k=Fe.get(y);k.outputColorSpace=O.outputColorSpace,k.batching=O.batching,k.instancing=O.instancing,k.instancingColor=O.instancingColor,k.skinning=O.skinning,k.morphTargets=O.morphTargets,k.morphNormals=O.morphNormals,k.morphColors=O.morphColors,k.morphTargetsCount=O.morphTargetsCount,k.numClippingPlanes=O.numClippingPlanes,k.numIntersection=O.numClipIntersection,k.vertexAlphas=O.vertexAlphas,k.vertexTangents=O.vertexTangents,k.toneMapping=O.toneMapping}function kb(y,O,k,W,B){O.isScene!==!0&&(O=Ce),b.resetTextureUnits();const ue=O.fog,Te=W.isMeshStandardMaterial?O.environment:null,Le=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:xr,Ue=(W.isMeshStandardMaterial?z:w).get(W.envMap||Te),Ze=W.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ve=!!k.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),We=!!k.morphAttributes.position,Dt=!!k.morphAttributes.normal,Mt=!!k.morphAttributes.color;let Qt=Fr;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Qt=x.toneMapping);const Ar=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ft=Ar!==void 0?Ar.length:0,qe=Fe.get(W),fo=f.state.lights;if($===!0&&(ve===!0||y!==S)){const $t=y===S&&W.id===Q;ze.setState(W,y,$t)}let mo=!1;W.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==fo.state.version||qe.outputColorSpace!==Le||B.isBatchedMesh&&qe.batching===!1||!B.isBatchedMesh&&qe.batching===!0||B.isInstancedMesh&&qe.instancing===!1||!B.isInstancedMesh&&qe.instancing===!0||B.isSkinnedMesh&&qe.skinning===!1||!B.isSkinnedMesh&&qe.skinning===!0||B.isInstancedMesh&&qe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&qe.instancingColor===!1&&B.instanceColor!==null||qe.envMap!==Ue||W.fog===!0&&qe.fog!==ue||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ze.numPlanes||qe.numIntersection!==ze.numIntersection)||qe.vertexAlphas!==Ze||qe.vertexTangents!==Ve||qe.morphTargets!==We||qe.morphNormals!==Dt||qe.morphColors!==Mt||qe.toneMapping!==Qt||Ie.isWebGL2===!0&&qe.morphTargetsCount!==ft)&&(mo=!0):(mo=!0,qe.__version=W.version);let di=qe.currentProgram;mo===!0&&(di=Pa(W,O,B));let vh=!1,bn=!1,go=!1;const Ut=di.getUniforms(),pi=qe.uniforms;if(we.useProgram(di.program)&&(vh=!0,bn=!0,go=!0),W.id!==Q&&(Q=W.id,bn=!0),vh||S!==y){Ut.setValue(H,"projectionMatrix",y.projectionMatrix),Ut.setValue(H,"viewMatrix",y.matrixWorldInverse);const $t=Ut.map.cameraPosition;$t!==void 0&&$t.setValue(H,Ne.setFromMatrixPosition(y.matrixWorld)),Ie.logarithmicDepthBuffer&&Ut.setValue(H,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ut.setValue(H,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,bn=!0,go=!0)}if(B.isSkinnedMesh){Ut.setOptional(H,B,"bindMatrix"),Ut.setOptional(H,B,"bindMatrixInverse");const $t=B.skeleton;$t&&(Ie.floatVertexTextures?($t.boneTexture===null&&$t.computeBoneTexture(),Ut.setValue(H,"boneTexture",$t.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Ut.setOptional(H,B,"batchingTexture"),Ut.setValue(H,"batchingTexture",B._matricesTexture,b));const _o=k.morphAttributes;if((_o.position!==void 0||_o.normal!==void 0||_o.color!==void 0&&Ie.isWebGL2===!0)&&T.update(B,k,di),(bn||qe.receiveShadow!==B.receiveShadow)&&(qe.receiveShadow=B.receiveShadow,Ut.setValue(H,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(pi.envMap.value=Ue,pi.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),bn&&(Ut.setValue(H,"toneMappingExposure",x.toneMappingExposure),qe.needsLights&&Vb(pi,go),ue&&W.fog===!0&&pe.refreshFogUniforms(pi,ue),pe.refreshMaterialUniforms(pi,W,J,q,Se),Ta.upload(H,gh(qe),pi,b)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ta.upload(H,gh(qe),pi,b),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ut.setValue(H,"center",B.center),Ut.setValue(H,"modelViewMatrix",B.modelViewMatrix),Ut.setValue(H,"normalMatrix",B.normalMatrix),Ut.setValue(H,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const $t=W.uniformsGroups;for(let vo=0,jb=$t.length;vo<jb;vo++)if(Ie.isWebGL2){const wh=$t[vo];Ge.update(wh,di),Ge.bind(wh,di)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return di}function Vb(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function Wb(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(y,O,k){Fe.get(y.texture).__webglTexture=O,Fe.get(y.depthTexture).__webglTexture=k;const W=Fe.get(y);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=k===void 0,W.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,O){const k=Fe.get(y);k.__webglFramebuffer=O,k.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(y,O=0,k=0){R=y,U=O,P=k;let W=!0,B=null,ue=!1,Te=!1;if(y){const Le=Fe.get(y);Le.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(H.FRAMEBUFFER,null),W=!1):Le.__webglFramebuffer===void 0?b.setupRenderTarget(y):Le.__hasExternalTextures&&b.rebindTextures(y,Fe.get(y.texture).__webglTexture,Fe.get(y.depthTexture).__webglTexture);const Ue=y.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Te=!0);const Ze=Fe.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ze[O])?B=Ze[O][k]:B=Ze[O],ue=!0):Ie.isWebGL2&&y.samples>0&&b.useMultisampledRTT(y)===!1?B=Fe.get(y).__webglMultisampledFramebuffer:Array.isArray(Ze)?B=Ze[k]:B=Ze,E.copy(y.viewport),j.copy(y.scissor),X=y.scissorTest}else E.copy(ie).multiplyScalar(J).floor(),j.copy(ae).multiplyScalar(J).floor(),X=me;if(we.bindFramebuffer(H.FRAMEBUFFER,B)&&Ie.drawBuffers&&W&&we.drawBuffers(y,B),we.viewport(E),we.scissor(j),we.setScissorTest(X),ue){const Le=Fe.get(y.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+O,Le.__webglTexture,k)}else if(Te){const Le=Fe.get(y.texture),Ue=O||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Le.__webglTexture,k||0,Ue)}Q=-1},this.readRenderTargetPixels=function(y,O,k,W,B,ue,Te){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Fe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Te!==void 0&&(Le=Le[Te]),Le){we.bindFramebuffer(H.FRAMEBUFFER,Le);try{const Ue=y.texture,Ze=Ue.format,Ve=Ue.type;if(Ze!==ir&&oe.convert(Ze)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ve===un&&(Ee.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ve!==zr&&oe.convert(Ve)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===Hr&&(Ie.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-W&&k>=0&&k<=y.height-B&&H.readPixels(O,k,W,B,oe.convert(Ze),oe.convert(Ve),ue)}finally{const Ue=R!==null?Fe.get(R).__webglFramebuffer:null;we.bindFramebuffer(H.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(y,O,k=0){const W=Math.pow(2,-k),B=Math.floor(O.image.width*W),ue=Math.floor(O.image.height*W);b.setTexture2D(O,0),H.copyTexSubImage2D(H.TEXTURE_2D,k,0,0,y.x,y.y,B,ue),we.unbindTexture()},this.copyTextureToTexture=function(y,O,k,W=0){const B=O.image.width,ue=O.image.height,Te=oe.convert(k.format),Le=oe.convert(k.type);b.setTexture2D(k,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,k.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,k.unpackAlignment),O.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,W,y.x,y.y,B,ue,Te,Le,O.image.data):O.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,W,y.x,y.y,O.mipmaps[0].width,O.mipmaps[0].height,Te,O.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,W,y.x,y.y,Te,Le,O.image),W===0&&k.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(y,O,k,W,B=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=y.max.x-y.min.x+1,Te=y.max.y-y.min.y+1,Le=y.max.z-y.min.z+1,Ue=oe.convert(W.format),Ze=oe.convert(W.type);let Ve;if(W.isData3DTexture)b.setTexture3D(W,0),Ve=H.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)b.setTexture2DArray(W,0),Ve=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);const We=H.getParameter(H.UNPACK_ROW_LENGTH),Dt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Mt=H.getParameter(H.UNPACK_SKIP_PIXELS),Qt=H.getParameter(H.UNPACK_SKIP_ROWS),Ar=H.getParameter(H.UNPACK_SKIP_IMAGES),ft=k.isCompressedTexture?k.mipmaps[B]:k.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,ft.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ft.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,y.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,y.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,y.min.z),k.isDataTexture||k.isData3DTexture?H.texSubImage3D(Ve,B,O.x,O.y,O.z,ue,Te,Le,Ue,Ze,ft.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ve,B,O.x,O.y,O.z,ue,Te,Le,Ue,ft.data)):H.texSubImage3D(Ve,B,O.x,O.y,O.z,ue,Te,Le,Ue,Ze,ft),H.pixelStorei(H.UNPACK_ROW_LENGTH,We),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Dt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Mt),H.pixelStorei(H.UNPACK_SKIP_ROWS,Qt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ar),B===0&&W.generateMipmaps&&H.generateMipmap(Ve),we.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?b.setTextureCube(y,0):y.isData3DTexture?b.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?b.setTexture2DArray(y,0):b.setTexture2D(y,0),we.unbindTexture()},this.resetState=function(){U=0,P=0,R=null,we.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ls?"display-p3":"srgb",t.unpackColorSpace=at.workingColorSpace===Jn?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===At?ri:jl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ri?At:xr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ab extends ih{}Ab.prototype.isWebGL1Renderer=!0;class Cb extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class co extends qr{constructor(e=1,t=32,r=16,n=0,a=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:n,phiLength:a,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const l=Math.min(o+s,Math.PI);let c=0;const h=[],u=new F,d=new F,m=[],_=[],v=[],f=[];for(let p=0;p<=r;p++){const M=[],x=p/r;let L=0;p===0&&o===0?L=.5/t:p===r&&l===Math.PI&&(L=-.5/t);for(let U=0;U<=t;U++){const P=U/t;u.x=-e*Math.cos(n+P*a)*Math.sin(o+x*s),u.y=e*Math.cos(o+x*s),u.z=e*Math.sin(n+P*a)*Math.sin(o+x*s),_.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),f.push(P+L,1-x),M.push(c++)}h.push(M)}for(let p=0;p<r;p++)for(let M=0;M<t;M++){const x=h[p][M+1],L=h[p][M],U=h[p+1][M],P=h[p+1][M+1];(p!==0||o>0)&&m.push(x,L,P),(p!==r-1||l<Math.PI)&&m.push(L,U,P)}this.setIndex(m),this.setAttribute("position",new fr(_,3)),this.setAttribute("normal",new fr(v,3)),this.setAttribute("uv",new fr(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new co(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Pb extends yn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Je(16777215),this.specular=new Je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xl,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ws,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nh extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Lb extends nh{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ho=new yt,ah=new F,sh=new F;class Ib{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $s,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;ah.setFromMatrixPosition(e.matrixWorld),t.position.copy(ah),sh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sh),t.updateMatrixWorld(),ho.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ho),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ho)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Db extends Ib{constructor(){super(new Ac(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ub extends nh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new Db}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class oh{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gs}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gs);const lh={type:"change"},uo={type:"start"},ch={type:"end"},Aa=new sc,hh=new Yr,Nb=Math.cos(70*S0.DEG2RAD);class Ob extends ii{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xi.ROTATE,MIDDLE:xi.DOLLY,RIGHT:xi.PAN},this.touches={ONE:yi.ROTATE,TWO:yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",re),this._domElementKeyEvents=T},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",re),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(lh),r.update(),a=n.NONE},this.update=function(){const T=new F,Z=new Gr().setFromUnitVectors(e.up,new F(0,1,0)),ce=Z.clone().invert(),oe=new F,Me=new Gr,Ge=new F,tt=2*Math.PI;return function(ke=null){const le=r.object.position;T.copy(le).sub(r.target),T.applyQuaternion(Z),s.setFromVector3(T),r.autoRotate&&a===n.NONE&&j(S(ke)),r.enableDamping?(s.theta+=l.theta*r.dampingFactor,s.phi+=l.phi*r.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let A=r.minAzimuthAngle,se=r.maxAzimuthAngle;isFinite(A)&&isFinite(se)&&(A<-Math.PI?A+=tt:A>Math.PI&&(A-=tt),se<-Math.PI?se+=tt:se>Math.PI&&(se-=tt),A<=se?s.theta=Math.max(A,Math.min(se,s.theta)):s.theta=s.theta>(A+se)/2?Math.max(A,s.theta):Math.min(se,s.theta)),s.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,s.phi)),s.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(h,r.dampingFactor):r.target.add(h),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor),r.zoomToCursor&&P||r.object.isOrthographicCamera?s.radius=Y(s.radius):s.radius=Y(s.radius*c),T.setFromSpherical(s),T.applyQuaternion(ce),le.copy(r.target).add(T),r.object.lookAt(r.target),r.enableDamping===!0?(l.theta*=1-r.dampingFactor,l.phi*=1-r.dampingFactor,h.multiplyScalar(1-r.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let fe=!1;if(r.zoomToCursor&&P){let Pe=null;if(r.object.isPerspectiveCamera){const be=T.length();Pe=Y(be*c);const rt=be-Pe;r.object.position.addScaledVector(L,rt),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const be=new F(U.x,U.y,0);be.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/c)),r.object.updateProjectionMatrix(),fe=!0;const rt=new F(U.x,U.y,0);rt.unproject(r.object),r.object.position.sub(rt).add(be),r.object.updateMatrixWorld(),Pe=T.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;Pe!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(Pe).add(r.object.position):(Aa.origin.copy(r.object.position),Aa.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(Aa.direction))<Nb?e.lookAt(r.target):(hh.setFromNormalAndCoplanarPoint(r.object.up,r.target),Aa.intersectPlane(hh,r.target))))}else r.object.isOrthographicCamera&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/c)),r.object.updateProjectionMatrix(),fe=!0);return c=1,P=!1,fe||oe.distanceToSquared(r.object.position)>o||8*(1-Me.dot(r.object.quaternion))>o||Ge.distanceToSquared(r.target)>0?(r.dispatchEvent(lh),oe.copy(r.object.position),Me.copy(r.object.quaternion),Ge.copy(r.target),!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",ge),r.domElement.removeEventListener("pointerdown",Fe),r.domElement.removeEventListener("pointercancel",w),r.domElement.removeEventListener("wheel",te),r.domElement.removeEventListener("pointermove",b),r.domElement.removeEventListener("pointerup",w),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",re),r._domElementKeyEvents=null)};const r=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=n.NONE;const o=1e-6,s=new oh,l=new oh;let c=1;const h=new F,u=new Oe,d=new Oe,m=new Oe,_=new Oe,v=new Oe,f=new Oe,p=new Oe,M=new Oe,x=new Oe,L=new F,U=new Oe;let P=!1;const R=[],Q={};function S(T){return T!==null?2*Math.PI/60*r.autoRotateSpeed*T:2*Math.PI/60/60*r.autoRotateSpeed}function E(T){const Z=Math.abs(T)/(100*(window.devicePixelRatio|0));return Math.pow(.95,r.zoomSpeed*Z)}function j(T){l.theta-=T}function X(T){l.phi-=T}const de=function(){const T=new F;return function(Z,ce){T.setFromMatrixColumn(ce,0),T.multiplyScalar(-Z),h.add(T)}}(),I=function(){const T=new F;return function(Z,ce){r.screenSpacePanning===!0?T.setFromMatrixColumn(ce,1):(T.setFromMatrixColumn(ce,0),T.crossVectors(r.object.up,T)),T.multiplyScalar(Z),h.add(T)}}(),G=function(){const T=new F;return function(Z,ce){const oe=r.domElement;if(r.object.isPerspectiveCamera){const Me=r.object.position;T.copy(Me).sub(r.target);let Ge=T.length();Ge*=Math.tan(r.object.fov/2*Math.PI/180),de(2*Z*Ge/oe.clientHeight,r.object.matrix),I(2*ce*Ge/oe.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(de(Z*(r.object.right-r.object.left)/r.object.zoom/oe.clientWidth,r.object.matrix),I(ce*(r.object.top-r.object.bottom)/r.object.zoom/oe.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function q(T){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?c/=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function J(T){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?c*=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function K(T,Z){if(!r.zoomToCursor)return;P=!0;const ce=r.domElement.getBoundingClientRect(),oe=T-ce.left,Me=Z-ce.top,Ge=ce.width,tt=ce.height;U.x=oe/Ge*2-1,U.y=-(Me/tt)*2+1,L.set(U.x,U.y,1).unproject(r.object).sub(r.object.position).normalize()}function Y(T){return Math.max(r.minDistance,Math.min(r.maxDistance,T))}function ie(T){u.set(T.clientX,T.clientY)}function ae(T){K(T.clientX,T.clientX),p.set(T.clientX,T.clientY)}function me(T){_.set(T.clientX,T.clientY)}function V(T){d.set(T.clientX,T.clientY),m.subVectors(d,u).multiplyScalar(r.rotateSpeed);const Z=r.domElement;j(2*Math.PI*m.x/Z.clientHeight),X(2*Math.PI*m.y/Z.clientHeight),u.copy(d),r.update()}function $(T){M.set(T.clientX,T.clientY),x.subVectors(M,p),x.y>0?q(E(x.y)):x.y<0&&J(E(x.y)),p.copy(M),r.update()}function ve(T){v.set(T.clientX,T.clientY),f.subVectors(v,_).multiplyScalar(r.panSpeed),G(f.x,f.y),_.copy(v),r.update()}function Se(T){K(T.clientX,T.clientY),T.deltaY<0?J(E(T.deltaY)):T.deltaY>0&&q(E(T.deltaY)),r.update()}function ye(T){let Z=!1;switch(T.code){case r.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?X(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):G(0,r.keyPanSpeed),Z=!0;break;case r.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?X(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):G(0,-r.keyPanSpeed),Z=!0;break;case r.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?j(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):G(r.keyPanSpeed,0),Z=!0;break;case r.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?j(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):G(-r.keyPanSpeed,0),Z=!0;break}Z&&(T.preventDefault(),r.update())}function De(T){if(R.length===1)u.set(T.pageX,T.pageY);else{const Z=$e(T),ce=.5*(T.pageX+Z.x),oe=.5*(T.pageY+Z.y);u.set(ce,oe)}}function Ne(T){if(R.length===1)_.set(T.pageX,T.pageY);else{const Z=$e(T),ce=.5*(T.pageX+Z.x),oe=.5*(T.pageY+Z.y);_.set(ce,oe)}}function Ce(T){const Z=$e(T),ce=T.pageX-Z.x,oe=T.pageY-Z.y,Me=Math.sqrt(ce*ce+oe*oe);p.set(0,Me)}function Qe(T){r.enableZoom&&Ce(T),r.enablePan&&Ne(T)}function H(T){r.enableZoom&&Ce(T),r.enableRotate&&De(T)}function Rt(T){if(R.length==1)d.set(T.pageX,T.pageY);else{const ce=$e(T),oe=.5*(T.pageX+ce.x),Me=.5*(T.pageY+ce.y);d.set(oe,Me)}m.subVectors(d,u).multiplyScalar(r.rotateSpeed);const Z=r.domElement;j(2*Math.PI*m.x/Z.clientHeight),X(2*Math.PI*m.y/Z.clientHeight),u.copy(d)}function Ee(T){if(R.length===1)v.set(T.pageX,T.pageY);else{const Z=$e(T),ce=.5*(T.pageX+Z.x),oe=.5*(T.pageY+Z.y);v.set(ce,oe)}f.subVectors(v,_).multiplyScalar(r.panSpeed),G(f.x,f.y),_.copy(v)}function Ie(T){const Z=$e(T),ce=T.pageX-Z.x,oe=T.pageY-Z.y,Me=Math.sqrt(ce*ce+oe*oe);M.set(0,Me),x.set(0,Math.pow(M.y/p.y,r.zoomSpeed)),q(x.y),p.copy(M);const Ge=(T.pageX+Z.x)*.5,tt=(T.pageY+Z.y)*.5;K(Ge,tt)}function we(T){r.enableZoom&&Ie(T),r.enablePan&&Ee(T)}function ht(T){r.enableZoom&&Ie(T),r.enableRotate&&Rt(T)}function Fe(T){r.enabled!==!1&&(R.length===0&&(r.domElement.setPointerCapture(T.pointerId),r.domElement.addEventListener("pointermove",b),r.domElement.addEventListener("pointerup",w)),Ae(T),T.pointerType==="touch"?xe(T):z(T))}function b(T){r.enabled!==!1&&(T.pointerType==="touch"?pe(T):ne(T))}function w(T){ze(T),R.length===0&&(r.domElement.releasePointerCapture(T.pointerId),r.domElement.removeEventListener("pointermove",b),r.domElement.removeEventListener("pointerup",w)),r.dispatchEvent(ch),a=n.NONE}function z(T){let Z;switch(T.button){case 0:Z=r.mouseButtons.LEFT;break;case 1:Z=r.mouseButtons.MIDDLE;break;case 2:Z=r.mouseButtons.RIGHT;break;default:Z=-1}switch(Z){case xi.DOLLY:if(r.enableZoom===!1)return;ae(T),a=n.DOLLY;break;case xi.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(r.enablePan===!1)return;me(T),a=n.PAN}else{if(r.enableRotate===!1)return;ie(T),a=n.ROTATE}break;case xi.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(r.enableRotate===!1)return;ie(T),a=n.ROTATE}else{if(r.enablePan===!1)return;me(T),a=n.PAN}break;default:a=n.NONE}a!==n.NONE&&r.dispatchEvent(uo)}function ne(T){switch(a){case n.ROTATE:if(r.enableRotate===!1)return;V(T);break;case n.DOLLY:if(r.enableZoom===!1)return;$(T);break;case n.PAN:if(r.enablePan===!1)return;ve(T);break}}function te(T){r.enabled===!1||r.enableZoom===!1||a!==n.NONE||(T.preventDefault(),r.dispatchEvent(uo),Se(T),r.dispatchEvent(ch))}function re(T){r.enabled===!1||r.enablePan===!1||ye(T)}function xe(T){switch(ee(T),R.length){case 1:switch(r.touches.ONE){case yi.ROTATE:if(r.enableRotate===!1)return;De(T),a=n.TOUCH_ROTATE;break;case yi.PAN:if(r.enablePan===!1)return;Ne(T),a=n.TOUCH_PAN;break;default:a=n.NONE}break;case 2:switch(r.touches.TWO){case yi.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;Qe(T),a=n.TOUCH_DOLLY_PAN;break;case yi.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;H(T),a=n.TOUCH_DOLLY_ROTATE;break;default:a=n.NONE}break;default:a=n.NONE}a!==n.NONE&&r.dispatchEvent(uo)}function pe(T){switch(ee(T),a){case n.TOUCH_ROTATE:if(r.enableRotate===!1)return;Rt(T),r.update();break;case n.TOUCH_PAN:if(r.enablePan===!1)return;Ee(T),r.update();break;case n.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;we(T),r.update();break;case n.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;ht(T),r.update();break;default:a=n.NONE}}function ge(T){r.enabled!==!1&&T.preventDefault()}function Ae(T){R.push(T.pointerId)}function ze(T){delete Q[T.pointerId];for(let Z=0;Z<R.length;Z++)if(R[Z]==T.pointerId){R.splice(Z,1);return}}function ee(T){let Z=Q[T.pointerId];Z===void 0&&(Z=new Oe,Q[T.pointerId]=Z),Z.set(T.pageX,T.pageY)}function $e(T){const Z=T.pointerId===R[0]?R[1]:R[0];return Q[Z]}r.domElement.addEventListener("contextmenu",ge),r.domElement.addEventListener("pointerdown",Fe),r.domElement.addEventListener("pointercancel",w),r.domElement.addEventListener("wheel",te,{passive:!1}),this.update()}}function Fb(i,e){const t=e.translation();i.position.set(t.x,t.y,t.z);const r=e.rotation();i.quaternion.set(r.x,r.y,r.z,r.w)}const uh=new wn,dh=new Gr;class zb{constructor(e,t){this.visual=e,this.physical=t}matchTransform(){Fb(this.visual,this.physical)}setPosition(e,t,r){this.physical.setTranslation(new dr.Vector3(e,t,r),!1)}setEuler(e,t,r){uh.set(e,t,r),dh.setFromEuler(uh),this.physical.setRotation(dh,!1)}}function Bb(i,e,t,r=dr.RigidBodyType.Fixed,n=16777215){const a=new co(t,32,16),o=dr.ColliderDesc.ball(t);return ph(i,e,a,o,r,n)}function po(i,e,t,r,n,a=dr.RigidBodyType.Fixed,o=16777215){const s=new ki(t,r,n,1,1),l=dr.ColliderDesc.cuboid(t*.5,r*.5,n*.5);return ph(i,e,s,l,a,o)}function ph(i,e,t,r,n=dr.RigidBodyType.Fixed,a=16777215){const o=new Pb({color:a}),s=new Rr(t,o);s.receiveShadow=!0,s.castShadow=!0,i.add(s);const l=new dr.RigidBodyDesc(n);r.setRestitution(.8);const c=e.createRigidBody(l);return e.createCollider(r,c),new zb(s,c)}class Hb{constructor(){Cr(this,"renderer");Cr(this,"scene");Cr(this,"camera");Cr(this,"controls");Cr(this,"stats");Cr(this,"visicals",[]);Cr(this,"world");Cr(this,"animate",()=>{requestAnimationFrame(this.animate),this.world.step();for(const e of this.visicals)e.matchTransform();this.stats&&this.stats.update(),this.controls&&this.controls.update(),this.renderer.render(this.scene,this.camera)});this.initScene(),this.initStats(),this.initListeners(),this.animate()}initStats(){this.stats=new Bt,document.body.appendChild(this.stats.dom)}initScene(){const e=new dr.World(new dr.Vector3(0,-9.8,0));this.world=e;const t=new Cb;this.scene=t;const r=new Je(.5,.7,.9);t.background=r,this.camera=new Jt(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.y=1,this.camera.position.z=5,this.renderer=new ih,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=al,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement),this.controls=new Ob(this.camera,this.renderer.domElement);const n=new Lb(r,new Je(.5,.4,.3),2);t.add(n);const a=new Ub(new Je(.8,.7,.6),5);a.shadow.camera.left-=15,a.shadow.camera.right+=15,a.shadow.camera.bottom-=15,a.shadow.camera.top+=15,a.shadow.camera.updateProjectionMatrix(),a.position.set(-.5,2.5,4).normalize().multiplyScalar(10),a.castShadow=!0,t.add(a);const o=1024,s=.5,l=50;a.shadow.mapSize.width=o,a.shadow.mapSize.height=o,a.shadow.camera.near=s,a.shadow.camera.far=l;const c=po(t,e,100,2,100,void 0,15724527);c.setPosition(0,-1,0),this.visicals.push(c);const h=po(t,e,1,.1,1,void 0,8388479);h.setPosition(0,.2,0),h.setEuler(0,0,.05),this.visicals.push(h);const u=dr.RigidBodyType.Dynamic;for(let d=0;d<5;d++){const m=po(t,e,.5,.5,.5,u,16744447);m.setPosition(0,2+d*.5,0),this.visicals.push(m);const _=Bb(t,e,.25,u,16744447);_.setPosition(.1,2+d*.5,0),this.visicals.push(_)}}initListeners(){window.addEventListener("resize",this.onWindowResize.bind(this),!1),window.addEventListener("keydown",e=>{const{key:t}=e;switch(t){case"e":const r=window.open("","Canvas Image"),{domElement:n}=this.renderer;this.renderer.render(this.scene,this.camera);const a=n.toDataURL();if(!r)return;r.document.write(`<img src='${a}' width='${n.width}' height='${n.height}'>`);break}})}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}}new Hb})()});export default Kb();
