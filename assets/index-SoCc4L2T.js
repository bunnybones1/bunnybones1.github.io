var $M=Object.defineProperty;var eE=(kt,Ht,Kr)=>Ht in kt?$M(kt,Ht,{enumerable:!0,configurable:!0,writable:!0,value:Kr}):kt[Ht]=Kr;var tE=(kt,Ht)=>()=>(Ht||kt((Ht={exports:{}}).exports,Ht),Ht.exports);var Nt=(kt,Ht,Kr)=>(eE(kt,typeof Ht!="symbol"?Ht+"":Ht,Kr),Kr);var rE=tE((nE,Th)=>{(async()=>{(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();var kt=function(){var i=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(h){h.preventDefault(),r(++i%e.children.length)},!1);function t(h){return e.appendChild(h.dom),h}function r(h){for(var u=0;u<e.children.length;u++)e.children[u].style.display=u===h?"block":"none";i=h}var n=(performance||Date).now(),a=n,o=0,s=t(new kt.Panel("FPS","#0ff","#002")),l=t(new kt.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new kt.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:e,addPanel:t,showPanel:r,begin:function(){n=(performance||Date).now()},end:function(){o++;var h=(performance||Date).now();if(l.update(h-n,200),h>=a+1e3&&(s.update(o*1e3/(h-a),100),a=h,o=0,c)){var u=performance.memory;c.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return h},update:function(){n=this.end()},domElement:e,setMode:r}};kt.Panel=function(i,e,t){var r=1/0,n=0,a=Math.round,o=a(window.devicePixelRatio||1),s=80*o,l=48*o,c=3*o,h=2*o,u=3*o,d=15*o,m=74*o,_=30*o,v=document.createElement("canvas");v.width=s,v.height=l,v.style.cssText="width:80px;height:48px";var f=v.getContext("2d");return f.font="bold "+9*o+"px Helvetica,Arial,sans-serif",f.textBaseline="top",f.fillStyle=t,f.fillRect(0,0,s,l),f.fillStyle=e,f.fillText(i,c,h),f.fillRect(u,d,m,_),f.fillStyle=t,f.globalAlpha=.9,f.fillRect(u,d,m,_),{dom:v,update:function(p,b){r=Math.min(r,p),n=Math.max(n,p),f.fillStyle=t,f.globalAlpha=1,f.fillRect(0,0,s,d),f.fillStyle=e,f.fillText(a(p)+" "+i+" ("+a(r)+"-"+a(n)+")",c,h),f.drawImage(v,u+o,d,m-o,_,u,d,m-o,_),f.fillRect(u+m-o,d,o,_),f.fillStyle=t,f.globalAlpha=.9,f.fillRect(u+m-o,d,o,a((1-p/b)*_))}}};const Ht=kt,Kr="/assets/rapier_wasm3d_bg-GqetY0_u.wasm",Rh=async(i={},e)=>{let t;if(e.startsWith("data:")){const r=e.replace(/^data:.*?base64,/,"");let n;if(typeof Buffer=="function"&&typeof Buffer.from=="function")n=Buffer.from(r,"base64");else if(typeof atob=="function"){const a=atob(r);n=new Uint8Array(a.length);for(let o=0;o<a.length;o++)n[o]=a.charCodeAt(o)}else throw new Error("Cannot decode base64-encoded data URL");t=await WebAssembly.instantiate(n,i)}else{const r=await fetch(e),n=r.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&n.startsWith("application/wasm"))t=await WebAssembly.instantiateStreaming(r,i);else{const a=await r.arrayBuffer();t=await WebAssembly.instantiate(a,i)}}return t.instance.exports},et=new Array(32).fill(void 0);et.push(void 0,null,!0,!1);function it(i){return et[i]}let Ji=et.length;function Ah(i){i<36||(et[i]=Ji,Ji=i)}function Zi(i){const e=it(i);return Ah(i),e}function mt(i){Ji===et.length&&et.push(et.length+1);const e=Ji;return Ji=et[e],et[e]=i,e}function _e(i){return i==null}let La=new Float64Array;function En(){return La.byteLength===0&&(La=new Float64Array(mi.buffer)),La}let Da=new Int32Array;function nt(){return Da.byteLength===0&&(Da=new Int32Array(mi.buffer)),Da}const Ch=typeof TextDecoder>"u"?(0,Th.require)("util").TextDecoder:TextDecoder;let bo=new Ch("utf-8",{ignoreBOM:!0,fatal:!0});bo.decode();let Ia=new Uint8Array;function Ph(){return Ia.byteLength===0&&(Ia=new Uint8Array(mi.buffer)),Ia}function To(i,e){return bo.decode(Ph().subarray(i,i+e))}function Lh(){try{const t=Ke(-16);tu(t);var i=nt()[t/4+0],e=nt()[t/4+1];return To(i,e)}finally{Ke(16),Gn(i,e)}}function L(i,e){if(!(i instanceof e))throw new Error(`expected instance of ${e.name}`);return i.ptr}let Ua=new Float32Array;function Lr(){return Ua.byteLength===0&&(Ua=new Float32Array(mi.buffer)),Ua}let st=32;function ut(i){if(st==1)throw new Error("out of js stack");return et[--st]=i,st}function Ro(i,e){return Lr().subarray(i/4,i/4+e)}let Na=new Uint32Array;function Ao(){return Na.byteLength===0&&(Na=new Uint32Array(mi.buffer)),Na}function Dh(i,e){return Ao().subarray(i/4,i/4+e)}let Vt=0;function Jr(i,e){const t=e(i.length*4);return Lr().set(i,t/4),Vt=i.length,t}function bn(i,e){const t=e(i.length*4);return Ao().set(i,t/4),Vt=i.length,t}function Oa(i,e){try{return i.apply(this,e)}catch(t){dv(mt(t))}}const Tn=Object.freeze({X:0,0:"X",Y:1,1:"Y",Z:2,2:"Z",AngX:3,3:"AngX",AngY:4,4:"AngY",AngZ:5,5:"AngZ"});class Dr{static __wrap(e){const t=Object.create(Dr.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();df(e)}constructor(){const e=pf();return Dr.__wrap(e)}}class fi{static __wrap(e){const t=Object.create(fi.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Iu(e)}constructor(){const e=Uu();return fi.__wrap(e)}}class Qi{static __wrap(e){const t=Object.create(Qi.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Ru(e)}constructor(){const e=Au();return Qi.__wrap(e)}handle(){return rn(this.ptr)}translationApplied(){const e=Cu(this.ptr);return N.__wrap(e)}translationRemaining(){const e=Pu(this.ptr);return N.__wrap(e)}toi(){return Zr(this.ptr)}worldWitness1(){const e=Bn(this.ptr);return N.__wrap(e)}worldWitness2(){const e=Lu(this.ptr);return N.__wrap(e)}worldNormal1(){const e=Va(this.ptr);return N.__wrap(e)}worldNormal2(){const e=Du(this.ptr);return N.__wrap(e)}}class dt{static __wrap(e){const t=Object.create(dt.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Em(e)}coTranslation(e){const t=ff(this.ptr,e);return N.__wrap(t)}coRotation(e){const t=mf(this.ptr,e);return je.__wrap(t)}coSetTranslation(e,t,r,n){gf(this.ptr,e,t,r,n)}coSetTranslationWrtParent(e,t,r,n){_f(this.ptr,e,t,r,n)}coSetRotation(e,t,r,n,a){vf(this.ptr,e,t,r,n,a)}coSetRotationWrtParent(e,t,r,n,a){wf(this.ptr,e,t,r,n,a)}coIsSensor(e){return xf(this.ptr,e)!==0}coShapeType(e){return yf(this.ptr,e)>>>0}coHalfspaceNormal(e){const t=Sf(this.ptr,e);return t===0?void 0:N.__wrap(t)}coHalfExtents(e){const t=Mf(this.ptr,e);return t===0?void 0:N.__wrap(t)}coSetHalfExtents(e,t){L(t,N),Ef(this.ptr,e,t.ptr)}coRadius(e){try{const n=Ke(-16);bf(n,this.ptr,e);var t=nt()[n/4+0],r=Lr()[n/4+1];return t===0?void 0:r}finally{Ke(16)}}coSetRadius(e,t){Tf(this.ptr,e,t)}coHalfHeight(e){try{const n=Ke(-16);Rf(n,this.ptr,e);var t=nt()[n/4+0],r=Lr()[n/4+1];return t===0?void 0:r}finally{Ke(16)}}coSetHalfHeight(e,t){Af(this.ptr,e,t)}coRoundRadius(e){try{const n=Ke(-16);Cf(n,this.ptr,e);var t=nt()[n/4+0],r=Lr()[n/4+1];return t===0?void 0:r}finally{Ke(16)}}coSetRoundRadius(e,t){Pf(this.ptr,e,t)}coVertices(e){try{const n=Ke(-16);Lf(n,this.ptr,e);var t=nt()[n/4+0],r=nt()[n/4+1];let a;return t!==0&&(a=Ro(t,r).slice(),Gn(t,r*4)),a}finally{Ke(16)}}coIndices(e){try{const n=Ke(-16);Df(n,this.ptr,e);var t=nt()[n/4+0],r=nt()[n/4+1];let a;return t!==0&&(a=Dh(t,r).slice(),Gn(t,r*4)),a}finally{Ke(16)}}coHeightfieldHeights(e){try{const n=Ke(-16);If(n,this.ptr,e);var t=nt()[n/4+0],r=nt()[n/4+1];let a;return t!==0&&(a=Ro(t,r).slice(),Gn(t,r*4)),a}finally{Ke(16)}}coHeightfieldScale(e){const t=Uf(this.ptr,e);return t===0?void 0:N.__wrap(t)}coHeightfieldNRows(e){try{const n=Ke(-16);Nf(n,this.ptr,e);var t=nt()[n/4+0],r=nt()[n/4+1];return t===0?void 0:r>>>0}finally{Ke(16)}}coHeightfieldNCols(e){try{const n=Ke(-16);Of(n,this.ptr,e);var t=nt()[n/4+0],r=nt()[n/4+1];return t===0?void 0:r>>>0}finally{Ke(16)}}coParent(e){try{const n=Ke(-16);Ff(n,this.ptr,e);var t=nt()[n/4+0],r=En()[n/8+1];return t===0?void 0:r}finally{Ke(16)}}coSetEnabled(e,t){zf(this.ptr,e,t)}coIsEnabled(e){return Bf(this.ptr,e)!==0}coFriction(e){return Hf(this.ptr,e)}coRestitution(e){return Gf(this.ptr,e)}coDensity(e){return kf(this.ptr,e)}coMass(e){return Vf(this.ptr,e)}coVolume(e){return Wf(this.ptr,e)}coCollisionGroups(e){return jf(this.ptr,e)>>>0}coSolverGroups(e){return Xf(this.ptr,e)>>>0}coActiveHooks(e){return qf(this.ptr,e)>>>0}coActiveCollisionTypes(e){return Yf(this.ptr,e)}coActiveEvents(e){return Kf(this.ptr,e)>>>0}coContactForceEventThreshold(e){return Jf(this.ptr,e)}coContainsPoint(e,t){return L(t,N),Zf(this.ptr,e,t.ptr)!==0}coCastShape(e,t,r,n,a,o,s,l){L(t,N),L(r,Re),L(n,N),L(a,je),L(o,N);const c=Qf(this.ptr,e,t.ptr,r.ptr,n.ptr,a.ptr,o.ptr,s,l);return c===0?void 0:Fn.__wrap(c)}coCastCollider(e,t,r,n,a,o){L(t,N),L(n,N);const s=$f(this.ptr,e,t.ptr,r,n.ptr,a,o);return s===0?void 0:On.__wrap(s)}coIntersectsShape(e,t,r,n){return L(t,Re),L(r,N),L(n,je),em(this.ptr,e,t.ptr,r.ptr,n.ptr)!==0}coContactShape(e,t,r,n,a){L(t,Re),L(r,N),L(n,je);const o=tm(this.ptr,e,t.ptr,r.ptr,n.ptr,a);return o===0?void 0:tn.__wrap(o)}coContactCollider(e,t,r){const n=rm(this.ptr,e,t,r);return n===0?void 0:tn.__wrap(n)}coProjectPoint(e,t,r){L(t,N);const n=im(this.ptr,e,t.ptr,r);return Ln.__wrap(n)}coIntersectsRay(e,t,r,n){return L(t,N),L(r,N),nm(this.ptr,e,t.ptr,r.ptr,n)!==0}coCastRay(e,t,r,n,a){return L(t,N),L(r,N),am(this.ptr,e,t.ptr,r.ptr,n,a)}coCastRayAndGetNormal(e,t,r,n,a){L(t,N),L(r,N);const o=sm(this.ptr,e,t.ptr,r.ptr,n,a);return o===0?void 0:In.__wrap(o)}coSetSensor(e,t){om(this.ptr,e,t)}coSetRestitution(e,t){lm(this.ptr,e,t)}coSetFriction(e,t){cm(this.ptr,e,t)}coFrictionCombineRule(e){return hm(this.ptr,e)>>>0}coSetFrictionCombineRule(e,t){um(this.ptr,e,t)}coRestitutionCombineRule(e){return dm(this.ptr,e)>>>0}coSetRestitutionCombineRule(e,t){pm(this.ptr,e,t)}coSetCollisionGroups(e,t){fm(this.ptr,e,t)}coSetSolverGroups(e,t){mm(this.ptr,e,t)}coSetActiveHooks(e,t){gm(this.ptr,e,t)}coSetActiveEvents(e,t){_m(this.ptr,e,t)}coSetActiveCollisionTypes(e,t){vm(this.ptr,e,t)}coSetShape(e,t){L(t,Re),wm(this.ptr,e,t.ptr)}coSetContactForceEventThreshold(e,t){xm(this.ptr,e,t)}coSetDensity(e,t){ym(this.ptr,e,t)}coSetMass(e,t){Sm(this.ptr,e,t)}coSetMassProperties(e,t,r,n,a){L(r,N),L(n,N),L(a,je),Mm(this.ptr,e,t,r.ptr,n.ptr,a.ptr)}constructor(){const e=bm();return dt.__wrap(e)}len(){return Tm(this.ptr)>>>0}contains(e){return Lo(this.ptr,e)!==0}createCollider(e,t,r,n,a,o,s,l,c,h,u,d,m,_,v,f,p,b,x,P,I,A,R,Y){try{const j=Ke(-16);L(t,Re),L(r,N),L(n,je),L(s,N),L(l,N),L(c,je),L(Y,pt),Rm(j,this.ptr,e,t.ptr,r.ptr,n.ptr,a,o,s.ptr,l.ptr,c.ptr,h,u,d,m,_,v,f,p,b,x,P,I,A,R,Y.ptr);var S=nt()[j/4+0],E=En()[j/8+1];return S===0?void 0:E}finally{Ke(16)}}remove(e,t,r,n){L(t,dr),L(r,pt),Am(this.ptr,e,t.ptr,r.ptr,n)}isHandleValid(e){return Lo(this.ptr,e)!==0}forEachColliderHandle(e){try{Cm(this.ptr,ut(e))}finally{et[st++]=void 0}}}class Fa{static __wrap(e){const t=Object.create(Fa.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();y_(e)}collider1(){return rn(this.ptr)}collider2(){return S_(this.ptr)}total_force(){const e=Uo(this.ptr);return N.__wrap(e)}total_force_magnitude(){return M_(this.ptr)}max_force_direction(){const e=E_(this.ptr);return N.__wrap(e)}max_force_magnitude(){return b_(this.ptr)}}class za{static __wrap(e){const t=Object.create(za.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();zm(e)}normal(){const e=Vm(this.ptr);return N.__wrap(e)}local_n1(){const e=Wm(this.ptr);return N.__wrap(e)}local_n2(){const e=jm(this.ptr);return N.__wrap(e)}subshape1(){return Xm(this.ptr)>>>0}subshape2(){return qm(this.ptr)>>>0}num_contacts(){return Ym(this.ptr)>>>0}contact_local_p1(e){const t=Km(this.ptr,e);return t===0?void 0:N.__wrap(t)}contact_local_p2(e){const t=Jm(this.ptr,e);return t===0?void 0:N.__wrap(t)}contact_dist(e){return Zm(this.ptr,e)}contact_fid1(e){return Qm(this.ptr,e)>>>0}contact_fid2(e){return $m(this.ptr,e)>>>0}contact_impulse(e){return eg(this.ptr,e)}contact_tangent_impulse_x(e){return tg(this.ptr,e)}contact_tangent_impulse_y(e){return rg(this.ptr,e)}num_solver_contacts(){return ig(this.ptr)>>>0}solver_contact_point(e){const t=ng(this.ptr,e);return t===0?void 0:N.__wrap(t)}solver_contact_dist(e){return ag(this.ptr,e)}solver_contact_friction(e){return sg(this.ptr,e)}solver_contact_restitution(e){return og(this.ptr,e)}solver_contact_tangent_velocity(e){const t=lg(this.ptr,e);return N.__wrap(t)}}class Ba{static __wrap(e){const t=Object.create(Ba.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();av(e)}collider1(){return Bm(this.ptr)}collider2(){return Hm(this.ptr)}numContactManifolds(){return Gm(this.ptr)>>>0}contactManifold(e){const t=km(this.ptr,e);return t===0?void 0:za.__wrap(t)}}class Rn{static __wrap(e){const t=Object.create(Rn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();m_(e)}constructor(){const e=g_();return Rn.__wrap(e)}vertices(){const e=__(this.ptr);return Zi(e)}colors(){const e=v_(this.ptr);return Zi(e)}render(e,t,r,n,a){L(e,pt),L(t,dt),L(r,ur),L(n,pr),L(a,wr),w_(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr)}}class Ha{static __wrap(e){const t=Object.create(Ha.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();q_(e)}takeGravity(){const e=Y_(this.ptr);return e===0?void 0:N.__wrap(e)}takeIntegrationParameters(){const e=K_(this.ptr);return e===0?void 0:Ir.__wrap(e)}takeIslandManager(){const e=J_(this.ptr);return e===0?void 0:dr.__wrap(e)}takeBroadPhase(){const e=Z_(this.ptr);return e===0?void 0:Dr.__wrap(e)}takeNarrowPhase(){const e=Q_(this.ptr);return e===0?void 0:wr.__wrap(e)}takeBodies(){const e=$_(this.ptr);return e===0?void 0:pt.__wrap(e)}takeColliders(){const e=ev(this.ptr);return e===0?void 0:dt.__wrap(e)}takeImpulseJoints(){const e=tv(this.ptr);return e===0?void 0:ur.__wrap(e)}takeMultibodyJoints(){const e=rv(this.ptr);return e===0?void 0:pr.__wrap(e)}}class $i{static __wrap(e){const t=Object.create($i.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();x_(e)}constructor(e){const t=T_(e);return $i.__wrap(t)}drainCollisionEvents(e){try{R_(this.ptr,ut(e))}finally{et[st++]=void 0}}drainContactForceEvents(e){try{A_(this.ptr,ut(e))}finally{et[st++]=void 0}}clear(){C_(this.ptr)}}class Yt{static __wrap(e){const t=Object.create(Yt.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Rd(e)}static spherical(e,t){L(e,N),L(t,N);const r=Ad(e.ptr,t.ptr);return Yt.__wrap(r)}static prismatic(e,t,r,n,a,o){L(e,N),L(t,N),L(r,N);const s=Cd(e.ptr,t.ptr,r.ptr,n,a,o);return s===0?void 0:Yt.__wrap(s)}static fixed(e,t,r,n){L(e,N),L(t,je),L(r,N),L(n,je);const a=Pd(e.ptr,t.ptr,r.ptr,n.ptr);return Yt.__wrap(a)}static revolute(e,t,r){L(e,N),L(t,N),L(r,N);const n=Ld(e.ptr,t.ptr,r.ptr);return n===0?void 0:Yt.__wrap(n)}}class ur{static __wrap(e){const t=Object.create(ur.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();ed(e)}jointType(e){return Nu(this.ptr,e)>>>0}jointBodyHandle1(e){return Ou(this.ptr,e)}jointBodyHandle2(e){return Fu(this.ptr,e)}jointFrameX1(e){const t=zu(this.ptr,e);return je.__wrap(t)}jointFrameX2(e){const t=Bu(this.ptr,e);return je.__wrap(t)}jointAnchor1(e){const t=Hu(this.ptr,e);return N.__wrap(t)}jointAnchor2(e){const t=Gu(this.ptr,e);return N.__wrap(t)}jointSetAnchor1(e,t){L(t,N),ku(this.ptr,e,t.ptr)}jointSetAnchor2(e,t){L(t,N),Vu(this.ptr,e,t.ptr)}jointContactsEnabled(e){return Wu(this.ptr,e)!==0}jointSetContactsEnabled(e,t){ju(this.ptr,e,t)}jointLimitsEnabled(e,t){return Xu(this.ptr,e,t)!==0}jointLimitsMin(e,t){return qu(this.ptr,e,t)}jointLimitsMax(e,t){return Yu(this.ptr,e,t)}jointSetLimits(e,t,r,n){Ku(this.ptr,e,t,r,n)}jointConfigureMotorModel(e,t,r){Ju(this.ptr,e,t,r)}jointConfigureMotorVelocity(e,t,r,n){Zu(this.ptr,e,t,r,n)}jointConfigureMotorPosition(e,t,r,n,a){Qu(this.ptr,e,t,r,n,a)}jointConfigureMotor(e,t,r,n,a,o){$u(this.ptr,e,t,r,n,a,o)}constructor(){const e=td();return ur.__wrap(e)}createJoint(e,t,r,n){return L(e,Yt),rd(this.ptr,e.ptr,t,r,n)}remove(e,t){id(this.ptr,e,t)}len(){return nd(this.ptr)>>>0}contains(e){return ad(this.ptr,e)!==0}forEachJointHandle(e){try{sd(this.ptr,ut(e))}finally{et[st++]=void 0}}forEachJointAttachedToRigidBody(e,t){try{od(this.ptr,e,ut(t))}finally{et[st++]=void 0}}}class Ir{static __wrap(e){const t=Object.create(Ir.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();ld(e)}constructor(){const e=cd();return Ir.__wrap(e)}get dt(){return Hn(this.ptr)}get erp(){return Zr(this.ptr)}get allowedLinearError(){return hd(this.ptr)}get predictionDistance(){return ud(this.ptr)}get maxVelocityIterations(){return dd(this.ptr)>>>0}get maxVelocityFrictionIterations(){return pd(this.ptr)>>>0}get maxStabilizationIterations(){return fd(this.ptr)>>>0}get minIslandSize(){return md(this.ptr)>>>0}get maxCcdSubsteps(){return gd(this.ptr)>>>0}set dt(e){Co(this.ptr,e)}set erp(e){Po(this.ptr,e)}set allowedLinearError(e){_d(this.ptr,e)}set predictionDistance(e){vd(this.ptr,e)}set maxVelocityIterations(e){wd(this.ptr,e)}set maxVelocityFrictionIterations(e){xd(this.ptr,e)}set maxStabilizationIterations(e){yd(this.ptr,e)}set minIslandSize(e){Sd(this.ptr,e)}set maxCcdSubsteps(e){Md(this.ptr,e)}}class dr{static __wrap(e){const t=Object.create(dr.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Ed(e)}constructor(){const e=bd();return dr.__wrap(e)}forEachActiveRigidBodyHandle(e){try{Td(this.ptr,ut(e))}finally{et[st++]=void 0}}}class An{static __wrap(e){const t=Object.create(An.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();ru(e)}constructor(e){const t=iu(e);return An.__wrap(t)}up(){const e=nu(this.ptr);return N.__wrap(e)}setUp(e){L(e,N),au(this.ptr,e.ptr)}offset(){return su(this.ptr)}setOffset(e){ou(this.ptr,e)}slideEnabled(){return lu(this.ptr)!==0}setSlideEnabled(e){cu(this.ptr,e)}autostepMaxHeight(){try{const r=Ke(-16);hu(r,this.ptr);var e=nt()[r/4+0],t=Lr()[r/4+1];return e===0?void 0:t}finally{Ke(16)}}autostepMinWidth(){try{const r=Ke(-16);uu(r,this.ptr);var e=nt()[r/4+0],t=Lr()[r/4+1];return e===0?void 0:t}finally{Ke(16)}}autostepIncludesDynamicBodies(){const e=du(this.ptr);return e===16777215?void 0:e!==0}autostepEnabled(){return pu(this.ptr)!==0}enableAutostep(e,t,r){fu(this.ptr,e,t,r)}disableAutostep(){mu(this.ptr)}maxSlopeClimbAngle(){return gu(this.ptr)}setMaxSlopeClimbAngle(e){_u(this.ptr,e)}minSlopeSlideAngle(){return vu(this.ptr)}setMinSlopeSlideAngle(e){wu(this.ptr,e)}snapToGroundDistance(){try{const r=Ke(-16);xu(r,this.ptr);var e=nt()[r/4+0],t=Lr()[r/4+1];return e===0?void 0:t}finally{Ke(16)}}enableSnapToGround(e){yu(this.ptr,e)}disableSnapToGround(){Su(this.ptr)}snapToGroundEnabled(){return Mu(this.ptr)!==0}computeColliderMovement(e,t,r,n,a,o,s,l,c,h,u){try{L(t,pt),L(r,dt),L(n,en),L(o,N),Eu(this.ptr,e,t.ptr,r.ptr,n.ptr,a,o.ptr,s,!_e(l),_e(l)?0:l,c,!_e(h),_e(h)?0:h,ut(u))}finally{et[st++]=void 0}}computedMovement(){const e=zn(this.ptr);return N.__wrap(e)}computedGrounded(){return ka(this.ptr)!==0}numComputedCollisions(){return bu(this.ptr)>>>0}computedCollision(e,t){return L(t,Qi),Tu(this.ptr,e,t.ptr)!==0}}class pr{static __wrap(e){const t=Object.create(pr.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();kd(e)}jointType(e){return Dd(this.ptr,e)>>>0}jointFrameX1(e){const t=Id(this.ptr,e);return je.__wrap(t)}jointFrameX2(e){const t=Ud(this.ptr,e);return je.__wrap(t)}jointAnchor1(e){const t=Nd(this.ptr,e);return N.__wrap(t)}jointAnchor2(e){const t=Od(this.ptr,e);return N.__wrap(t)}jointContactsEnabled(e){return Fd(this.ptr,e)!==0}jointSetContactsEnabled(e,t){zd(this.ptr,e,t)}jointLimitsEnabled(e,t){return Bd(this.ptr,e,t)!==0}jointLimitsMin(e,t){return Hd(this.ptr,e,t)}jointLimitsMax(e,t){return Gd(this.ptr,e,t)}constructor(){const e=Vd();return pr.__wrap(e)}createJoint(e,t,r,n){return L(e,Yt),Wd(this.ptr,e.ptr,t,r,n)}remove(e,t){jd(this.ptr,e,t)}contains(e){return Xd(this.ptr,e)!==0}forEachJointHandle(e){try{qd(this.ptr,ut(e))}finally{et[st++]=void 0}}forEachJointAttachedToRigidBody(e,t){try{Yd(this.ptr,e,ut(t))}finally{et[st++]=void 0}}}class wr{static __wrap(e){const t=Object.create(wr.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Dm(e)}constructor(){const e=Im();return wr.__wrap(e)}contacts_with(e,t){Um(this.ptr,e,mt(t))}contact_pair(e,t){const r=Nm(this.ptr,e,t);return r===0?void 0:Ba.__wrap(r)}intersections_with(e,t){Om(this.ptr,e,mt(t))}intersection_pair(e,t){return Fm(this.ptr,e,t)!==0}}class Cn{static __wrap(e){const t=Object.create(Cn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();P_(e)}constructor(){const e=L_();return Cn.__wrap(e)}step(e,t,r,n,a,o,s,l,c,h){L(e,N),L(t,Ir),L(r,dr),L(n,Dr),L(a,wr),L(o,pt),L(s,dt),L(l,ur),L(c,pr),L(h,fi),D_(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,o.ptr,s.ptr,l.ptr,c.ptr,h.ptr)}stepWithEvents(e,t,r,n,a,o,s,l,c,h,u,d,m,_){L(e,N),L(t,Ir),L(r,dr),L(n,Dr),L(a,wr),L(o,pt),L(s,dt),L(l,ur),L(c,pr),L(h,fi),L(u,$i),I_(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,o.ptr,s.ptr,l.ptr,c.ptr,h.ptr,u.ptr,mt(d),mt(m),mt(_))}}class Pn{static __wrap(e){const t=Object.create(Pn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();hg(e)}colliderHandle(){return ug(this.ptr)}point(){const e=zn(this.ptr);return N.__wrap(e)}isInside(){return ka(this.ptr)!==0}featureType(){return dg(this.ptr)>>>0}featureId(){try{const r=Ke(-16);pg(r,this.ptr);var e=nt()[r/4+0],t=nt()[r/4+1];return e===0?void 0:t>>>0}finally{Ke(16)}}}class Ln{static __wrap(e){const t=Object.create(Ln.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();cg(e)}point(){const e=zn(this.ptr);return N.__wrap(e)}isInside(){return ka(this.ptr)!==0}}class en{static __wrap(e){const t=Object.create(en.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();U_(e)}constructor(){const e=N_();return en.__wrap(e)}update(e,t){L(e,pt),L(t,dt),O_(this.ptr,e.ptr,t.ptr)}castRay(e,t,r,n,a,o,s,l,c,h,u){try{L(e,pt),L(t,dt),L(r,N),L(n,N);const d=F_(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a,o,s,!_e(l),_e(l)?0:l,!_e(c),_e(c)?0:c,!_e(h),_e(h)?0:h,ut(u));return d===0?void 0:Ga.__wrap(d)}finally{et[st++]=void 0}}castRayAndGetNormal(e,t,r,n,a,o,s,l,c,h,u){try{L(e,pt),L(t,dt),L(r,N),L(n,N);const d=z_(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a,o,s,!_e(l),_e(l)?0:l,!_e(c),_e(c)?0:c,!_e(h),_e(h)?0:h,ut(u));return d===0?void 0:Dn.__wrap(d)}finally{et[st++]=void 0}}intersectionsWithRay(e,t,r,n,a,o,s,l,c,h,u,d){try{L(e,pt),L(t,dt),L(r,N),L(n,N),B_(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a,o,ut(s),l,!_e(c),_e(c)?0:c,!_e(h),_e(h)?0:h,!_e(u),_e(u)?0:u,ut(d))}finally{et[st++]=void 0,et[st++]=void 0}}intersectionWithShape(e,t,r,n,a,o,s,l,c,h){try{const m=Ke(-16);L(e,pt),L(t,dt),L(r,N),L(n,je),L(a,Re),H_(m,this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,o,!_e(s),_e(s)?0:s,!_e(l),_e(l)?0:l,!_e(c),_e(c)?0:c,ut(h));var u=nt()[m/4+0],d=En()[m/8+1];return u===0?void 0:d}finally{Ke(16),et[st++]=void 0}}projectPoint(e,t,r,n,a,o,s,l,c){try{L(e,pt),L(t,dt),L(r,N);const h=G_(this.ptr,e.ptr,t.ptr,r.ptr,n,a,!_e(o),_e(o)?0:o,!_e(s),_e(s)?0:s,!_e(l),_e(l)?0:l,ut(c));return h===0?void 0:Pn.__wrap(h)}finally{et[st++]=void 0}}projectPointAndGetFeature(e,t,r,n,a,o,s,l){try{L(e,pt),L(t,dt),L(r,N);const c=k_(this.ptr,e.ptr,t.ptr,r.ptr,n,!_e(a),_e(a)?0:a,!_e(o),_e(o)?0:o,!_e(s),_e(s)?0:s,ut(l));return c===0?void 0:Pn.__wrap(c)}finally{et[st++]=void 0}}intersectionsWithPoint(e,t,r,n,a,o,s,l,c){try{L(e,pt),L(t,dt),L(r,N),V_(this.ptr,e.ptr,t.ptr,r.ptr,ut(n),a,!_e(o),_e(o)?0:o,!_e(s),_e(s)?0:s,!_e(l),_e(l)?0:l,ut(c))}finally{et[st++]=void 0,et[st++]=void 0}}castShape(e,t,r,n,a,o,s,l,c,h,u,d,m){try{L(e,pt),L(t,dt),L(r,N),L(n,je),L(a,N),L(o,Re);const _=W_(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,o.ptr,s,l,c,!_e(h),_e(h)?0:h,!_e(u),_e(u)?0:u,!_e(d),_e(d)?0:d,ut(m));return _===0?void 0:On.__wrap(_)}finally{et[st++]=void 0}}intersectionsWithShape(e,t,r,n,a,o,s,l,c,h,u){try{L(e,pt),L(t,dt),L(r,N),L(n,je),L(a,Re),j_(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,ut(o),s,!_e(l),_e(l)?0:l,!_e(c),_e(c)?0:c,!_e(h),_e(h)?0:h,ut(u))}finally{et[st++]=void 0,et[st++]=void 0}}collidersWithAabbIntersectingAabb(e,t,r){try{L(e,N),L(t,N),X_(this.ptr,e.ptr,t.ptr,ut(r))}finally{et[st++]=void 0}}}class Dn{static __wrap(e){const t=Object.create(Dn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();sv(e)}colliderHandle(){return rn(this.ptr)}normal(){const e=_g(this.ptr);return N.__wrap(e)}toi(){return vg(this.ptr)}featureType(){return wg(this.ptr)>>>0}featureId(){try{const r=Ke(-16);xg(r,this.ptr);var e=nt()[r/4+0],t=nt()[r/4+1];return e===0?void 0:t>>>0}finally{Ke(16)}}}class Ga{static __wrap(e){const t=Object.create(Ga.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();yg(e)}colliderHandle(){return rn(this.ptr)}toi(){return Zr(this.ptr)}}class In{static __wrap(e){const t=Object.create(In.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();fg(e)}normal(){const e=Bn(this.ptr);return N.__wrap(e)}toi(){return Zr(this.ptr)}featureType(){return mg(this.ptr)>>>0}featureId(){try{const r=Ke(-16);gg(r,this.ptr);var e=nt()[r/4+0],t=nt()[r/4+1];return e===0?void 0:t>>>0}finally{Ke(16)}}}class pt{static __wrap(e){const t=Object.create(pt.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();nf(e)}rbTranslation(e){const t=Kd(this.ptr,e);return N.__wrap(t)}rbRotation(e){const t=Jd(this.ptr,e);return je.__wrap(t)}rbSleep(e){Zd(this.ptr,e)}rbIsSleeping(e){return Qd(this.ptr,e)!==0}rbIsMoving(e){return $d(this.ptr,e)!==0}rbNextTranslation(e){const t=ep(this.ptr,e);return N.__wrap(t)}rbNextRotation(e){const t=tp(this.ptr,e);return je.__wrap(t)}rbSetTranslation(e,t,r,n,a){rp(this.ptr,e,t,r,n,a)}rbSetRotation(e,t,r,n,a,o){ip(this.ptr,e,t,r,n,a,o)}rbSetLinvel(e,t,r){L(t,N),np(this.ptr,e,t.ptr,r)}rbSetAngvel(e,t,r){L(t,N),ap(this.ptr,e,t.ptr,r)}rbSetNextKinematicTranslation(e,t,r,n){sp(this.ptr,e,t,r,n)}rbSetNextKinematicRotation(e,t,r,n,a){op(this.ptr,e,t,r,n,a)}rbRecomputeMassPropertiesFromColliders(e,t){L(t,dt),lp(this.ptr,e,t.ptr)}rbSetAdditionalMass(e,t,r){cp(this.ptr,e,t,r)}rbSetAdditionalMassProperties(e,t,r,n,a,o){L(r,N),L(n,N),L(a,je),hp(this.ptr,e,t,r.ptr,n.ptr,a.ptr,o)}rbLinvel(e){const t=up(this.ptr,e);return N.__wrap(t)}rbAngvel(e){const t=dp(this.ptr,e);return N.__wrap(t)}rbLockTranslations(e,t,r){pp(this.ptr,e,t,r)}rbSetEnabledTranslations(e,t,r,n,a){fp(this.ptr,e,t,r,n,a)}rbLockRotations(e,t,r){mp(this.ptr,e,t,r)}rbSetEnabledRotations(e,t,r,n,a){gp(this.ptr,e,t,r,n,a)}rbDominanceGroup(e){return _p(this.ptr,e)}rbSetDominanceGroup(e,t){vp(this.ptr,e,t)}rbEnableCcd(e,t){wp(this.ptr,e,t)}rbMass(e){return xp(this.ptr,e)}rbInvMass(e){return yp(this.ptr,e)}rbEffectiveInvMass(e){const t=Sp(this.ptr,e);return N.__wrap(t)}rbLocalCom(e){const t=Mp(this.ptr,e);return N.__wrap(t)}rbWorldCom(e){const t=Ep(this.ptr,e);return N.__wrap(t)}rbInvPrincipalInertiaSqrt(e){const t=bp(this.ptr,e);return N.__wrap(t)}rbPrincipalInertiaLocalFrame(e){const t=Tp(this.ptr,e);return je.__wrap(t)}rbPrincipalInertia(e){const t=Rp(this.ptr,e);return N.__wrap(t)}rbEffectiveWorldInvInertiaSqrt(e){const t=Ap(this.ptr,e);return Un.__wrap(t)}rbEffectiveAngularInertia(e){const t=Cp(this.ptr,e);return Un.__wrap(t)}rbWakeUp(e){Pp(this.ptr,e)}rbIsCcdEnabled(e){return Lp(this.ptr,e)!==0}rbNumColliders(e){return Dp(this.ptr,e)>>>0}rbCollider(e,t){return Ip(this.ptr,e,t)}rbBodyType(e){return Up(this.ptr,e)>>>0}rbSetBodyType(e,t,r){Np(this.ptr,e,t,r)}rbIsFixed(e){return Op(this.ptr,e)!==0}rbIsKinematic(e){return Fp(this.ptr,e)!==0}rbIsDynamic(e){return zp(this.ptr,e)!==0}rbLinearDamping(e){return Bp(this.ptr,e)}rbAngularDamping(e){return Hp(this.ptr,e)}rbSetLinearDamping(e,t){Gp(this.ptr,e,t)}rbSetAngularDamping(e,t){kp(this.ptr,e,t)}rbSetEnabled(e,t){Vp(this.ptr,e,t)}rbIsEnabled(e){return Wp(this.ptr,e)!==0}rbGravityScale(e){return jp(this.ptr,e)}rbSetGravityScale(e,t,r){Xp(this.ptr,e,t,r)}rbResetForces(e,t){qp(this.ptr,e,t)}rbResetTorques(e,t){Yp(this.ptr,e,t)}rbAddForce(e,t,r){L(t,N),Kp(this.ptr,e,t.ptr,r)}rbApplyImpulse(e,t,r){L(t,N),Jp(this.ptr,e,t.ptr,r)}rbAddTorque(e,t,r){L(t,N),Zp(this.ptr,e,t.ptr,r)}rbApplyTorqueImpulse(e,t,r){L(t,N),Qp(this.ptr,e,t.ptr,r)}rbAddForceAtPoint(e,t,r,n){L(t,N),L(r,N),$p(this.ptr,e,t.ptr,r.ptr,n)}rbApplyImpulseAtPoint(e,t,r,n){L(t,N),L(r,N),ef(this.ptr,e,t.ptr,r.ptr,n)}rbUserData(e){return tf(this.ptr,e)>>>0}rbSetUserData(e,t){rf(this.ptr,e,t)}constructor(){const e=af();return pt.__wrap(e)}createRigidBody(e,t,r,n,a,o,s,l,c,h,u,d,m,_,v,f,p,b,x,P,I,A,R,Y){return L(t,N),L(r,je),L(s,N),L(l,N),L(c,N),L(h,N),L(u,je),sf(this.ptr,e,t.ptr,r.ptr,n,a,o,s.ptr,l.ptr,c.ptr,h.ptr,u.ptr,d,m,_,v,f,p,b,x,P,I,A,R,Y)}remove(e,t,r,n,a){L(t,dr),L(r,dt),L(n,ur),L(a,pr),of(this.ptr,e,t.ptr,r.ptr,n.ptr,a.ptr)}len(){return lf(this.ptr)>>>0}contains(e){return cf(this.ptr,e)!==0}forEachRigidBodyHandle(e){try{hf(this.ptr,ut(e))}finally{et[st++]=void 0}}propagateModifiedBodyPositionsToColliders(e){L(e,dt),uf(this.ptr,e.ptr)}}class je{static __wrap(e){const t=Object.create(je.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();ov(e)}constructor(e,t,r,n){const a=r_(e,t,r,n);return je.__wrap(a)}static identity(){const e=i_();return je.__wrap(e)}get x(){return Hn(this.ptr)}get y(){return Io(this.ptr)}get z(){return Zr(this.ptr)}get w(){return n_(this.ptr)}}class Un{static __wrap(e){const t=Object.create(Un.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();cv(e)}elements(){const e=f_(this.ptr);return Zi(e)}}class Nn{static __wrap(e){const t=Object.create(Nn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();uv(e)}constructor(){const e=hv();return Nn.__wrap(e)}serializeAll(e,t,r,n,a,o,s,l,c){L(e,N),L(t,Ir),L(r,dr),L(n,Dr),L(a,wr),L(o,pt),L(s,dt),L(l,ur),L(c,pr);const h=iv(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,o.ptr,s.ptr,l.ptr,c.ptr);return Zi(h)}deserializeAll(e){const t=nv(this.ptr,mt(e));return t===0?void 0:Ha.__wrap(t)}}class Re{static __wrap(e){const t=Object.create(Re.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Sg(e)}static cuboid(e,t,r){const n=Mg(e,t,r);return Re.__wrap(n)}static roundCuboid(e,t,r,n){const a=Eg(e,t,r,n);return Re.__wrap(a)}static ball(e){const t=bg(e);return Re.__wrap(t)}static halfspace(e){L(e,N);const t=Tg(e.ptr);return Re.__wrap(t)}static capsule(e,t){const r=Rg(e,t);return Re.__wrap(r)}static cylinder(e,t){const r=Ag(e,t);return Re.__wrap(r)}static roundCylinder(e,t,r){const n=Cg(e,t,r);return Re.__wrap(n)}static cone(e,t){const r=Pg(e,t);return Re.__wrap(r)}static roundCone(e,t,r){const n=Lg(e,t,r);return Re.__wrap(n)}static polyline(e,t){const r=Jr(e,rr),n=Vt,a=bn(t,rr),o=Dg(r,n,a,Vt);return Re.__wrap(o)}static trimesh(e,t){const r=Jr(e,rr),n=Vt,a=bn(t,rr),o=Ig(r,n,a,Vt);return Re.__wrap(o)}static heightfield(e,t,r,n){const a=Jr(r,rr),o=Vt;L(n,N);const s=Ug(e,t,a,o,n.ptr);return Re.__wrap(s)}static segment(e,t){L(e,N),L(t,N);const r=Ng(e.ptr,t.ptr);return Re.__wrap(r)}static triangle(e,t,r){L(e,N),L(t,N),L(r,N);const n=Og(e.ptr,t.ptr,r.ptr);return Re.__wrap(n)}static roundTriangle(e,t,r,n){L(e,N),L(t,N),L(r,N);const a=Fg(e.ptr,t.ptr,r.ptr,n);return Re.__wrap(a)}static convexHull(e){const t=Jr(e,rr),r=zg(t,Vt);return r===0?void 0:Re.__wrap(r)}static roundConvexHull(e,t){const r=Jr(e,rr),n=Bg(r,Vt,t);return n===0?void 0:Re.__wrap(n)}static convexMesh(e,t){const r=Jr(e,rr),n=Vt,a=bn(t,rr),o=Hg(r,n,a,Vt);return o===0?void 0:Re.__wrap(o)}static roundConvexMesh(e,t,r){const n=Jr(e,rr),a=Vt,o=bn(t,rr),s=Gg(n,a,o,Vt,r);return s===0?void 0:Re.__wrap(s)}castShape(e,t,r,n,a,o,s,l,c){L(e,N),L(t,je),L(r,N),L(n,Re),L(a,N),L(o,je),L(s,N);const h=kg(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,o.ptr,s.ptr,l,c);return h===0?void 0:Fn.__wrap(h)}intersectsShape(e,t,r,n,a){return L(e,N),L(t,je),L(r,Re),L(n,N),L(a,je),Vg(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr)!==0}contactShape(e,t,r,n,a,o){L(e,N),L(t,je),L(r,Re),L(n,N),L(a,je);const s=Wg(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,o);return s===0?void 0:tn.__wrap(s)}containsPoint(e,t,r){return L(e,N),L(t,je),L(r,N),jg(this.ptr,e.ptr,t.ptr,r.ptr)!==0}projectPoint(e,t,r,n){L(e,N),L(t,je),L(r,N);const a=Xg(this.ptr,e.ptr,t.ptr,r.ptr,n);return Ln.__wrap(a)}intersectsRay(e,t,r,n,a){return L(e,N),L(t,je),L(r,N),L(n,N),qg(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a)!==0}castRay(e,t,r,n,a,o){return L(e,N),L(t,je),L(r,N),L(n,N),Yg(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a,o)}castRayAndGetNormal(e,t,r,n,a,o){L(e,N),L(t,je),L(r,N),L(n,N);const s=Kg(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a,o);return s===0?void 0:In.__wrap(s)}}class On{static __wrap(e){const t=Object.create(On.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();e_(e)}colliderHandle(){return rn(this.ptr)}toi(){return Zr(this.ptr)}witness1(){const e=Bn(this.ptr);return N.__wrap(e)}witness2(){const e=Do(this.ptr);return N.__wrap(e)}normal1(){const e=Va(this.ptr);return N.__wrap(e)}normal2(){const e=t_(this.ptr);return N.__wrap(e)}}class tn{static __wrap(e){const t=Object.create(tn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Pm(e)}distance(){return Lm(this.ptr)}point1(){const e=zn(this.ptr);return N.__wrap(e)}point2(){const e=Bn(this.ptr);return N.__wrap(e)}normal1(){const e=Do(this.ptr);return N.__wrap(e)}normal2(){const e=Va(this.ptr);return N.__wrap(e)}}class Fn{static __wrap(e){const t=Object.create(Fn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Jg(e)}toi(){return Hn(this.ptr)}witness1(){const e=Zg(this.ptr);return N.__wrap(e)}witness2(){const e=Uo(this.ptr);return N.__wrap(e)}normal1(){const e=Qg(this.ptr);return N.__wrap(e)}normal2(){const e=$g(this.ptr);return N.__wrap(e)}}class N{static __wrap(e){const t=Object.create(N.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();lv(e)}static zero(){const e=a_();return N.__wrap(e)}constructor(e,t,r){const n=s_(e,t,r);return N.__wrap(n)}get x(){return Hn(this.ptr)}set x(e){Co(this.ptr,e)}get y(){return Io(this.ptr)}set y(e){o_(this.ptr,e)}get z(){return Zr(this.ptr)}set z(e){Po(this.ptr,e)}xyz(){const e=l_(this.ptr);return N.__wrap(e)}yxz(){const e=c_(this.ptr);return N.__wrap(e)}zxy(){const e=h_(this.ptr);return N.__wrap(e)}xzy(){const e=u_(this.ptr);return N.__wrap(e)}yzx(){const e=d_(this.ptr);return N.__wrap(e)}zyx(){const e=p_(this.ptr);return N.__wrap(e)}}function Ih(i){Zi(i)}function Uh(i){return mt(i)}function Nh(i,e){const t=it(e),r=typeof t=="number"?t:void 0;En()[i/8+1]=_e(r)?0:r,nt()[i/4+0]=!_e(r)}function Oh(i){const e=it(i);return typeof e=="boolean"?e?1:0:2}function Fh(i){return typeof it(i)=="function"}function zh(i){const e=Dn.__wrap(i);return mt(e)}function Bh(i){const e=Fa.__wrap(i);return mt(e)}function Hh(){return Oa(function(i,e,t){const r=it(i).call(it(e),it(t));return mt(r)},arguments)}function Gh(){return Oa(function(i,e,t,r){const n=it(i).call(it(e),it(t),it(r));return mt(n)},arguments)}function kh(){return Oa(function(i,e,t,r,n){const a=it(i).call(it(e),it(t),it(r),it(n));return mt(a)},arguments)}function Vh(i,e,t,r){const n=it(i).bind(it(e),it(t),it(r));return mt(n)}function Wh(i){const e=it(i).buffer;return mt(e)}function jh(i,e,t){const r=new Uint8Array(it(i),e>>>0,t>>>0);return mt(r)}function Xh(i){const e=new Uint8Array(it(i));return mt(e)}function qh(i,e,t){it(i).set(it(e),t>>>0)}function Yh(i){return it(i).length}function Kh(i,e,t){const r=new Float32Array(it(i),e>>>0,t>>>0);return mt(r)}function Jh(i,e,t){it(i).set(it(e),t>>>0)}function Zh(i){return it(i).length}function Qh(i){const e=new Float32Array(i>>>0);return mt(e)}function $h(i,e){throw new Error(To(i,e))}function eu(){return mt(mi)}URL=globalThis.URL;const g=await Rh({"./rapier_wasm3d_bg.js":{__wbindgen_object_drop_ref:Ih,__wbindgen_number_new:Uh,__wbindgen_number_get:Nh,__wbindgen_boolean_get:Oh,__wbindgen_is_function:Fh,__wbg_rawraycolliderintersection_new:zh,__wbg_rawcontactforceevent_new:Bh,__wbg_call_168da88779e35f61:Hh,__wbg_call_3999bee59e9f7719:Gh,__wbg_call_e1f72c051cdab859:kh,__wbg_bind_10dfe70e95d2a480:Vh,__wbg_buffer_3f3d764d4747d564:Wh,__wbg_newwithbyteoffsetandlength_d9aa266703cb98be:jh,__wbg_new_8c3f0052272a457a:Xh,__wbg_set_83db9690f9353e79:qh,__wbg_length_9e1ae1900cb0fbd5:Yh,__wbg_newwithbyteoffsetandlength_be22e5fcf4f69ab4:Kh,__wbg_set_0e0314cf6675c1b9:Jh,__wbg_length_9a2deed95d22668d:Zh,__wbg_newwithlength_a7168e4a1e8f5e12:Qh,__wbindgen_throw:$h,__wbindgen_memory:eu}},Kr),mi=g.memory,tu=g.version,ru=g.__wbg_rawkinematiccharactercontroller_free,iu=g.rawkinematiccharactercontroller_new,nu=g.rawkinematiccharactercontroller_up,au=g.rawkinematiccharactercontroller_setUp,su=g.rawkinematiccharactercontroller_offset,ou=g.rawkinematiccharactercontroller_setOffset,lu=g.rawkinematiccharactercontroller_slideEnabled,cu=g.rawkinematiccharactercontroller_setSlideEnabled,hu=g.rawkinematiccharactercontroller_autostepMaxHeight,uu=g.rawkinematiccharactercontroller_autostepMinWidth,du=g.rawkinematiccharactercontroller_autostepIncludesDynamicBodies,pu=g.rawkinematiccharactercontroller_autostepEnabled,fu=g.rawkinematiccharactercontroller_enableAutostep,mu=g.rawkinematiccharactercontroller_disableAutostep,gu=g.rawkinematiccharactercontroller_maxSlopeClimbAngle,_u=g.rawkinematiccharactercontroller_setMaxSlopeClimbAngle,vu=g.rawkinematiccharactercontroller_minSlopeSlideAngle,wu=g.rawkinematiccharactercontroller_setMinSlopeSlideAngle,xu=g.rawkinematiccharactercontroller_snapToGroundDistance,yu=g.rawkinematiccharactercontroller_enableSnapToGround,Su=g.rawkinematiccharactercontroller_disableSnapToGround,Mu=g.rawkinematiccharactercontroller_snapToGroundEnabled,Eu=g.rawkinematiccharactercontroller_computeColliderMovement,zn=g.rawkinematiccharactercontroller_computedMovement,ka=g.rawkinematiccharactercontroller_computedGrounded,bu=g.rawkinematiccharactercontroller_numComputedCollisions,Tu=g.rawkinematiccharactercontroller_computedCollision,Ru=g.__wbg_rawcharactercollision_free,Au=g.rawcharactercollision_new,rn=g.rawcharactercollision_handle,Cu=g.rawcharactercollision_translationApplied,Pu=g.rawcharactercollision_translationRemaining,Zr=g.rawcharactercollision_toi,Bn=g.rawcharactercollision_worldWitness1,Lu=g.rawcharactercollision_worldWitness2,Va=g.rawcharactercollision_worldNormal1,Du=g.rawcharactercollision_worldNormal2,Iu=g.__wbg_rawccdsolver_free,Uu=g.rawccdsolver_new,Nu=g.rawimpulsejointset_jointType,Ou=g.rawimpulsejointset_jointBodyHandle1,Fu=g.rawimpulsejointset_jointBodyHandle2,zu=g.rawimpulsejointset_jointFrameX1,Bu=g.rawimpulsejointset_jointFrameX2,Hu=g.rawimpulsejointset_jointAnchor1,Gu=g.rawimpulsejointset_jointAnchor2,ku=g.rawimpulsejointset_jointSetAnchor1,Vu=g.rawimpulsejointset_jointSetAnchor2,Wu=g.rawimpulsejointset_jointContactsEnabled,ju=g.rawimpulsejointset_jointSetContactsEnabled,Xu=g.rawimpulsejointset_jointLimitsEnabled,qu=g.rawimpulsejointset_jointLimitsMin,Yu=g.rawimpulsejointset_jointLimitsMax,Ku=g.rawimpulsejointset_jointSetLimits,Ju=g.rawimpulsejointset_jointConfigureMotorModel,Zu=g.rawimpulsejointset_jointConfigureMotorVelocity,Qu=g.rawimpulsejointset_jointConfigureMotorPosition,$u=g.rawimpulsejointset_jointConfigureMotor,ed=g.__wbg_rawimpulsejointset_free,td=g.rawimpulsejointset_new,rd=g.rawimpulsejointset_createJoint,id=g.rawimpulsejointset_remove,nd=g.rawimpulsejointset_len,ad=g.rawimpulsejointset_contains,sd=g.rawimpulsejointset_forEachJointHandle,od=g.rawimpulsejointset_forEachJointAttachedToRigidBody,ld=g.__wbg_rawintegrationparameters_free,cd=g.rawintegrationparameters_new,Hn=g.rawintegrationparameters_dt,hd=g.rawintegrationparameters_allowedLinearError,ud=g.rawintegrationparameters_predictionDistance,dd=g.rawintegrationparameters_maxVelocityIterations,pd=g.rawintegrationparameters_maxVelocityFrictionIterations,fd=g.rawintegrationparameters_maxStabilizationIterations,md=g.rawintegrationparameters_minIslandSize,gd=g.rawintegrationparameters_maxCcdSubsteps,Co=g.rawintegrationparameters_set_dt,Po=g.rawintegrationparameters_set_erp,_d=g.rawintegrationparameters_set_allowedLinearError,vd=g.rawintegrationparameters_set_predictionDistance,wd=g.rawintegrationparameters_set_maxVelocityIterations,xd=g.rawintegrationparameters_set_maxVelocityFrictionIterations,yd=g.rawintegrationparameters_set_maxStabilizationIterations,Sd=g.rawintegrationparameters_set_minIslandSize,Md=g.rawintegrationparameters_set_maxCcdSubsteps,Ed=g.__wbg_rawislandmanager_free,bd=g.rawislandmanager_new,Td=g.rawislandmanager_forEachActiveRigidBodyHandle,Rd=g.__wbg_rawgenericjoint_free,Ad=g.rawgenericjoint_spherical,Cd=g.rawgenericjoint_prismatic,Pd=g.rawgenericjoint_fixed,Ld=g.rawgenericjoint_revolute,Dd=g.rawmultibodyjointset_jointType,Id=g.rawmultibodyjointset_jointFrameX1,Ud=g.rawmultibodyjointset_jointFrameX2,Nd=g.rawmultibodyjointset_jointAnchor1,Od=g.rawmultibodyjointset_jointAnchor2,Fd=g.rawmultibodyjointset_jointContactsEnabled,zd=g.rawmultibodyjointset_jointSetContactsEnabled,Bd=g.rawmultibodyjointset_jointLimitsEnabled,Hd=g.rawmultibodyjointset_jointLimitsMin,Gd=g.rawmultibodyjointset_jointLimitsMax,kd=g.__wbg_rawmultibodyjointset_free,Vd=g.rawmultibodyjointset_new,Wd=g.rawmultibodyjointset_createJoint,jd=g.rawmultibodyjointset_remove,Xd=g.rawmultibodyjointset_contains,qd=g.rawmultibodyjointset_forEachJointHandle,Yd=g.rawmultibodyjointset_forEachJointAttachedToRigidBody,Kd=g.rawrigidbodyset_rbTranslation,Jd=g.rawrigidbodyset_rbRotation,Zd=g.rawrigidbodyset_rbSleep,Qd=g.rawrigidbodyset_rbIsSleeping,$d=g.rawrigidbodyset_rbIsMoving,ep=g.rawrigidbodyset_rbNextTranslation,tp=g.rawrigidbodyset_rbNextRotation,rp=g.rawrigidbodyset_rbSetTranslation,ip=g.rawrigidbodyset_rbSetRotation,np=g.rawrigidbodyset_rbSetLinvel,ap=g.rawrigidbodyset_rbSetAngvel,sp=g.rawrigidbodyset_rbSetNextKinematicTranslation,op=g.rawrigidbodyset_rbSetNextKinematicRotation,lp=g.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders,cp=g.rawrigidbodyset_rbSetAdditionalMass,hp=g.rawrigidbodyset_rbSetAdditionalMassProperties,up=g.rawrigidbodyset_rbLinvel,dp=g.rawrigidbodyset_rbAngvel,pp=g.rawrigidbodyset_rbLockTranslations,fp=g.rawrigidbodyset_rbSetEnabledTranslations,mp=g.rawrigidbodyset_rbLockRotations,gp=g.rawrigidbodyset_rbSetEnabledRotations,_p=g.rawrigidbodyset_rbDominanceGroup,vp=g.rawrigidbodyset_rbSetDominanceGroup,wp=g.rawrigidbodyset_rbEnableCcd,xp=g.rawrigidbodyset_rbMass,yp=g.rawrigidbodyset_rbInvMass,Sp=g.rawrigidbodyset_rbEffectiveInvMass,Mp=g.rawrigidbodyset_rbLocalCom,Ep=g.rawrigidbodyset_rbWorldCom,bp=g.rawrigidbodyset_rbInvPrincipalInertiaSqrt,Tp=g.rawrigidbodyset_rbPrincipalInertiaLocalFrame,Rp=g.rawrigidbodyset_rbPrincipalInertia,Ap=g.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt,Cp=g.rawrigidbodyset_rbEffectiveAngularInertia,Pp=g.rawrigidbodyset_rbWakeUp,Lp=g.rawrigidbodyset_rbIsCcdEnabled,Dp=g.rawrigidbodyset_rbNumColliders,Ip=g.rawrigidbodyset_rbCollider,Up=g.rawrigidbodyset_rbBodyType,Np=g.rawrigidbodyset_rbSetBodyType,Op=g.rawrigidbodyset_rbIsFixed,Fp=g.rawrigidbodyset_rbIsKinematic,zp=g.rawrigidbodyset_rbIsDynamic,Bp=g.rawrigidbodyset_rbLinearDamping,Hp=g.rawrigidbodyset_rbAngularDamping,Gp=g.rawrigidbodyset_rbSetLinearDamping,kp=g.rawrigidbodyset_rbSetAngularDamping,Vp=g.rawrigidbodyset_rbSetEnabled,Wp=g.rawrigidbodyset_rbIsEnabled,jp=g.rawrigidbodyset_rbGravityScale,Xp=g.rawrigidbodyset_rbSetGravityScale,qp=g.rawrigidbodyset_rbResetForces,Yp=g.rawrigidbodyset_rbResetTorques,Kp=g.rawrigidbodyset_rbAddForce,Jp=g.rawrigidbodyset_rbApplyImpulse,Zp=g.rawrigidbodyset_rbAddTorque,Qp=g.rawrigidbodyset_rbApplyTorqueImpulse,$p=g.rawrigidbodyset_rbAddForceAtPoint,ef=g.rawrigidbodyset_rbApplyImpulseAtPoint,tf=g.rawrigidbodyset_rbUserData,rf=g.rawrigidbodyset_rbSetUserData,nf=g.__wbg_rawrigidbodyset_free,af=g.rawrigidbodyset_new,sf=g.rawrigidbodyset_createRigidBody,of=g.rawrigidbodyset_remove,lf=g.rawrigidbodyset_len,cf=g.rawrigidbodyset_contains,hf=g.rawrigidbodyset_forEachRigidBodyHandle,uf=g.rawrigidbodyset_propagateModifiedBodyPositionsToColliders,df=g.__wbg_rawbroadphase_free,pf=g.rawbroadphase_new,ff=g.rawcolliderset_coTranslation,mf=g.rawcolliderset_coRotation,gf=g.rawcolliderset_coSetTranslation,_f=g.rawcolliderset_coSetTranslationWrtParent,vf=g.rawcolliderset_coSetRotation,wf=g.rawcolliderset_coSetRotationWrtParent,xf=g.rawcolliderset_coIsSensor,yf=g.rawcolliderset_coShapeType,Sf=g.rawcolliderset_coHalfspaceNormal,Mf=g.rawcolliderset_coHalfExtents,Ef=g.rawcolliderset_coSetHalfExtents,bf=g.rawcolliderset_coRadius,Tf=g.rawcolliderset_coSetRadius,Rf=g.rawcolliderset_coHalfHeight,Af=g.rawcolliderset_coSetHalfHeight,Cf=g.rawcolliderset_coRoundRadius,Pf=g.rawcolliderset_coSetRoundRadius,Lf=g.rawcolliderset_coVertices,Df=g.rawcolliderset_coIndices,If=g.rawcolliderset_coHeightfieldHeights,Uf=g.rawcolliderset_coHeightfieldScale,Nf=g.rawcolliderset_coHeightfieldNRows,Of=g.rawcolliderset_coHeightfieldNCols,Ff=g.rawcolliderset_coParent,zf=g.rawcolliderset_coSetEnabled,Bf=g.rawcolliderset_coIsEnabled,Hf=g.rawcolliderset_coFriction,Gf=g.rawcolliderset_coRestitution,kf=g.rawcolliderset_coDensity,Vf=g.rawcolliderset_coMass,Wf=g.rawcolliderset_coVolume,jf=g.rawcolliderset_coCollisionGroups,Xf=g.rawcolliderset_coSolverGroups,qf=g.rawcolliderset_coActiveHooks,Yf=g.rawcolliderset_coActiveCollisionTypes,Kf=g.rawcolliderset_coActiveEvents,Jf=g.rawcolliderset_coContactForceEventThreshold,Zf=g.rawcolliderset_coContainsPoint,Qf=g.rawcolliderset_coCastShape,$f=g.rawcolliderset_coCastCollider,em=g.rawcolliderset_coIntersectsShape,tm=g.rawcolliderset_coContactShape,rm=g.rawcolliderset_coContactCollider,im=g.rawcolliderset_coProjectPoint,nm=g.rawcolliderset_coIntersectsRay,am=g.rawcolliderset_coCastRay,sm=g.rawcolliderset_coCastRayAndGetNormal,om=g.rawcolliderset_coSetSensor,lm=g.rawcolliderset_coSetRestitution,cm=g.rawcolliderset_coSetFriction,hm=g.rawcolliderset_coFrictionCombineRule,um=g.rawcolliderset_coSetFrictionCombineRule,dm=g.rawcolliderset_coRestitutionCombineRule,pm=g.rawcolliderset_coSetRestitutionCombineRule,fm=g.rawcolliderset_coSetCollisionGroups,mm=g.rawcolliderset_coSetSolverGroups,gm=g.rawcolliderset_coSetActiveHooks,_m=g.rawcolliderset_coSetActiveEvents,vm=g.rawcolliderset_coSetActiveCollisionTypes,wm=g.rawcolliderset_coSetShape,xm=g.rawcolliderset_coSetContactForceEventThreshold,ym=g.rawcolliderset_coSetDensity,Sm=g.rawcolliderset_coSetMass,Mm=g.rawcolliderset_coSetMassProperties,Em=g.__wbg_rawcolliderset_free,bm=g.rawcolliderset_new,Tm=g.rawcolliderset_len,Lo=g.rawcolliderset_contains,Rm=g.rawcolliderset_createCollider,Am=g.rawcolliderset_remove,Cm=g.rawcolliderset_forEachColliderHandle,Pm=g.__wbg_rawshapecontact_free,Lm=g.rawshapecontact_distance,Dm=g.__wbg_rawnarrowphase_free,Im=g.rawnarrowphase_new,Um=g.rawnarrowphase_contacts_with,Nm=g.rawnarrowphase_contact_pair,Om=g.rawnarrowphase_intersections_with,Fm=g.rawnarrowphase_intersection_pair,zm=g.__wbg_rawcontactmanifold_free,Bm=g.rawcontactpair_collider1,Hm=g.rawcontactpair_collider2,Gm=g.rawcontactpair_numContactManifolds,km=g.rawcontactpair_contactManifold,Vm=g.rawcontactmanifold_normal,Wm=g.rawcontactmanifold_local_n1,jm=g.rawcontactmanifold_local_n2,Xm=g.rawcontactmanifold_subshape1,qm=g.rawcontactmanifold_subshape2,Ym=g.rawcontactmanifold_num_contacts,Km=g.rawcontactmanifold_contact_local_p1,Jm=g.rawcontactmanifold_contact_local_p2,Zm=g.rawcontactmanifold_contact_dist,Qm=g.rawcontactmanifold_contact_fid1,$m=g.rawcontactmanifold_contact_fid2,eg=g.rawcontactmanifold_contact_impulse,tg=g.rawcontactmanifold_contact_tangent_impulse_x,rg=g.rawcontactmanifold_contact_tangent_impulse_y,ig=g.rawcontactmanifold_num_solver_contacts,ng=g.rawcontactmanifold_solver_contact_point,ag=g.rawcontactmanifold_solver_contact_dist,sg=g.rawcontactmanifold_solver_contact_friction,og=g.rawcontactmanifold_solver_contact_restitution,lg=g.rawcontactmanifold_solver_contact_tangent_velocity,cg=g.__wbg_rawpointprojection_free,hg=g.__wbg_rawpointcolliderprojection_free,ug=g.rawpointcolliderprojection_colliderHandle,dg=g.rawpointcolliderprojection_featureType,pg=g.rawpointcolliderprojection_featureId,fg=g.__wbg_rawrayintersection_free,mg=g.rawrayintersection_featureType,gg=g.rawrayintersection_featureId,_g=g.rawraycolliderintersection_normal,vg=g.rawraycolliderintersection_toi,wg=g.rawraycolliderintersection_featureType,xg=g.rawraycolliderintersection_featureId,yg=g.__wbg_rawraycollidertoi_free,Sg=g.__wbg_rawshape_free,Mg=g.rawshape_cuboid,Eg=g.rawshape_roundCuboid,bg=g.rawshape_ball,Tg=g.rawshape_halfspace,Rg=g.rawshape_capsule,Ag=g.rawshape_cylinder,Cg=g.rawshape_roundCylinder,Pg=g.rawshape_cone,Lg=g.rawshape_roundCone,Dg=g.rawshape_polyline,Ig=g.rawshape_trimesh,Ug=g.rawshape_heightfield,Ng=g.rawshape_segment,Og=g.rawshape_triangle,Fg=g.rawshape_roundTriangle,zg=g.rawshape_convexHull,Bg=g.rawshape_roundConvexHull,Hg=g.rawshape_convexMesh,Gg=g.rawshape_roundConvexMesh,kg=g.rawshape_castShape,Vg=g.rawshape_intersectsShape,Wg=g.rawshape_contactShape,jg=g.rawshape_containsPoint,Xg=g.rawshape_projectPoint,qg=g.rawshape_intersectsRay,Yg=g.rawshape_castRay,Kg=g.rawshape_castRayAndGetNormal,Jg=g.__wbg_rawshapetoi_free,Zg=g.rawshapetoi_witness1,Qg=g.rawshapetoi_normal1,$g=g.rawshapetoi_normal2,e_=g.__wbg_rawshapecollidertoi_free,Do=g.rawshapecollidertoi_witness2,t_=g.rawshapecollidertoi_normal2,r_=g.rawrotation_new,i_=g.rawrotation_identity,Io=g.rawrotation_y,n_=g.rawrotation_w,a_=g.rawvector_zero,s_=g.rawvector_new,o_=g.rawvector_set_y,l_=g.rawvector_xyz,c_=g.rawvector_yxz,h_=g.rawvector_zxy,u_=g.rawvector_xzy,d_=g.rawvector_yzx,p_=g.rawvector_zyx,f_=g.rawsdpmatrix3_elements,m_=g.__wbg_rawdebugrenderpipeline_free,g_=g.rawdebugrenderpipeline_new,__=g.rawdebugrenderpipeline_vertices,v_=g.rawdebugrenderpipeline_colors,w_=g.rawdebugrenderpipeline_render,x_=g.__wbg_raweventqueue_free,y_=g.__wbg_rawcontactforceevent_free,S_=g.rawcontactforceevent_collider2,Uo=g.rawcontactforceevent_total_force,M_=g.rawcontactforceevent_total_force_magnitude,E_=g.rawcontactforceevent_max_force_direction,b_=g.rawcontactforceevent_max_force_magnitude,T_=g.raweventqueue_new,R_=g.raweventqueue_drainCollisionEvents,A_=g.raweventqueue_drainContactForceEvents,C_=g.raweventqueue_clear,P_=g.__wbg_rawphysicspipeline_free,L_=g.rawphysicspipeline_new,D_=g.rawphysicspipeline_step,I_=g.rawphysicspipeline_stepWithEvents,U_=g.__wbg_rawquerypipeline_free,N_=g.rawquerypipeline_new,O_=g.rawquerypipeline_update,F_=g.rawquerypipeline_castRay,z_=g.rawquerypipeline_castRayAndGetNormal,B_=g.rawquerypipeline_intersectionsWithRay,H_=g.rawquerypipeline_intersectionWithShape,G_=g.rawquerypipeline_projectPoint,k_=g.rawquerypipeline_projectPointAndGetFeature,V_=g.rawquerypipeline_intersectionsWithPoint,W_=g.rawquerypipeline_castShape,j_=g.rawquerypipeline_intersectionsWithShape,X_=g.rawquerypipeline_collidersWithAabbIntersectingAabb,q_=g.__wbg_rawdeserializedworld_free,Y_=g.rawdeserializedworld_takeGravity,K_=g.rawdeserializedworld_takeIntegrationParameters,J_=g.rawdeserializedworld_takeIslandManager,Z_=g.rawdeserializedworld_takeBroadPhase,Q_=g.rawdeserializedworld_takeNarrowPhase,$_=g.rawdeserializedworld_takeBodies,ev=g.rawdeserializedworld_takeColliders,tv=g.rawdeserializedworld_takeImpulseJoints,rv=g.rawdeserializedworld_takeMultibodyJoints,iv=g.rawserializationpipeline_serializeAll,nv=g.rawserializationpipeline_deserializeAll,av=g.__wbg_rawcontactpair_free,sv=g.__wbg_rawraycolliderintersection_free,ov=g.__wbg_rawrotation_free,lv=g.__wbg_rawvector_free,cv=g.__wbg_rawsdpmatrix3_free;g.rawvector_set_x,g.rawvector_set_z,g.rawpointprojection_isInside,g.rawpointcolliderprojection_isInside,g.rawcolliderset_isHandleValid,g.rawshapecontact_point1,g.rawshapecontact_point2,g.rawshapecontact_normal2,g.rawpointprojection_point,g.rawpointcolliderprojection_point,g.rawrayintersection_normal,g.rawshapecollidertoi_witness1,g.rawshapecontact_normal1,g.rawshapecollidertoi_normal1,g.rawshapetoi_witness2;const hv=g.rawserializationpipeline_new;g.rawintegrationparameters_erp,g.rawrayintersection_toi,g.rawraycollidertoi_toi,g.rawshapetoi_toi,g.rawshapecollidertoi_toi,g.rawrotation_x,g.rawrotation_z,g.rawvector_x,g.rawvector_y,g.rawvector_z,g.rawraycolliderintersection_colliderHandle,g.rawraycollidertoi_colliderHandle,g.rawshapecollidertoi_colliderHandle,g.rawcontactforceevent_collider1;const uv=g.__wbg_rawserializationpipeline_free,Ke=g.__wbindgen_add_to_stack_pointer,Gn=g.__wbindgen_free,rr=g.__wbindgen_malloc,dv=g.__wbindgen_exn_store;let No=class{constructor(i,e,t){this.x=i,this.y=e,this.z=t}};class U{static new(e,t,r){return new No(e,t,r)}static intoRaw(e){return new N(e.x,e.y,e.z)}static zeros(){return U.new(0,0,0)}static fromRaw(e){if(!e)return null;let t=U.new(e.x,e.y,e.z);return e.free(),t}static copy(e,t){e.x=t.x,e.y=t.y,e.z=t.z}}let Wa=class{constructor(i,e,t,r){this.x=i,this.y=e,this.z=t,this.w=r}};class Be{static identity(){return new Wa(0,0,0,1)}static fromRaw(e){if(!e)return null;let t=new Wa(e.x,e.y,e.z,e.w);return e.free(),t}static intoRaw(e){return new je(e.x,e.y,e.z,e.w)}static copy(e,t){e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w}}class Oo{constructor(e){this.elements=e}get m11(){return this.elements[0]}get m12(){return this.elements[1]}get m21(){return this.m12}get m13(){return this.elements[2]}get m31(){return this.m13}get m22(){return this.elements[3]}get m23(){return this.elements[4]}get m32(){return this.m23}get m33(){return this.elements[5]}}class ja{static fromRaw(e){const t=new Oo(e.elements());return e.free(),t}}var ir;(function(i){i[i.Dynamic=0]="Dynamic",i[i.Fixed=1]="Fixed",i[i.KinematicPositionBased=2]="KinematicPositionBased",i[i.KinematicVelocityBased=3]="KinematicVelocityBased"})(ir||(ir={}));class Xa{constructor(e,t,r){this.rawSet=e,this.colliderSet=t,this.handle=r}finalizeDeserialization(e){this.colliderSet=e}isValid(){return this.rawSet.contains(this.handle)}lockTranslations(e,t){return this.rawSet.rbLockTranslations(this.handle,e,t)}lockRotations(e,t){return this.rawSet.rbLockRotations(this.handle,e,t)}setEnabledTranslations(e,t,r,n){return this.rawSet.rbSetEnabledTranslations(this.handle,e,t,r,n)}restrictTranslations(e,t,r,n){this.setEnabledTranslations(e,t,r,n)}setEnabledRotations(e,t,r,n){return this.rawSet.rbSetEnabledRotations(this.handle,e,t,r,n)}restrictRotations(e,t,r,n){this.setEnabledRotations(e,t,r,n)}dominanceGroup(){return this.rawSet.rbDominanceGroup(this.handle)}setDominanceGroup(e){this.rawSet.rbSetDominanceGroup(this.handle,e)}enableCcd(e){this.rawSet.rbEnableCcd(this.handle,e)}translation(){let e=this.rawSet.rbTranslation(this.handle);return U.fromRaw(e)}rotation(){let e=this.rawSet.rbRotation(this.handle);return Be.fromRaw(e)}nextTranslation(){let e=this.rawSet.rbNextTranslation(this.handle);return U.fromRaw(e)}nextRotation(){let e=this.rawSet.rbNextRotation(this.handle);return Be.fromRaw(e)}setTranslation(e,t){this.rawSet.rbSetTranslation(this.handle,e.x,e.y,e.z,t)}setLinvel(e,t){let r=U.intoRaw(e);this.rawSet.rbSetLinvel(this.handle,r,t),r.free()}gravityScale(){return this.rawSet.rbGravityScale(this.handle)}setGravityScale(e,t){this.rawSet.rbSetGravityScale(this.handle,e,t)}setRotation(e,t){this.rawSet.rbSetRotation(this.handle,e.x,e.y,e.z,e.w,t)}setAngvel(e,t){let r=U.intoRaw(e);this.rawSet.rbSetAngvel(this.handle,r,t),r.free()}setNextKinematicTranslation(e){this.rawSet.rbSetNextKinematicTranslation(this.handle,e.x,e.y,e.z)}setNextKinematicRotation(e){this.rawSet.rbSetNextKinematicRotation(this.handle,e.x,e.y,e.z,e.w)}linvel(){return U.fromRaw(this.rawSet.rbLinvel(this.handle))}angvel(){return U.fromRaw(this.rawSet.rbAngvel(this.handle))}mass(){return this.rawSet.rbMass(this.handle)}effectiveInvMass(){return U.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle))}invMass(){return this.rawSet.rbInvMass(this.handle)}localCom(){return U.fromRaw(this.rawSet.rbLocalCom(this.handle))}worldCom(){return U.fromRaw(this.rawSet.rbWorldCom(this.handle))}invPrincipalInertiaSqrt(){return U.fromRaw(this.rawSet.rbInvPrincipalInertiaSqrt(this.handle))}principalInertia(){return U.fromRaw(this.rawSet.rbPrincipalInertia(this.handle))}principalInertiaLocalFrame(){return Be.fromRaw(this.rawSet.rbPrincipalInertiaLocalFrame(this.handle))}effectiveWorldInvInertiaSqrt(){return ja.fromRaw(this.rawSet.rbEffectiveWorldInvInertiaSqrt(this.handle))}effectiveAngularInertia(){return ja.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle))}sleep(){this.rawSet.rbSleep(this.handle)}wakeUp(){this.rawSet.rbWakeUp(this.handle)}isCcdEnabled(){return this.rawSet.rbIsCcdEnabled(this.handle)}numColliders(){return this.rawSet.rbNumColliders(this.handle)}collider(e){return this.colliderSet.get(this.rawSet.rbCollider(this.handle,e))}setEnabled(e){this.rawSet.rbSetEnabled(this.handle,e)}isEnabled(){return this.rawSet.rbIsEnabled(this.handle)}bodyType(){return this.rawSet.rbBodyType(this.handle)}setBodyType(e,t){return this.rawSet.rbSetBodyType(this.handle,e,t)}isSleeping(){return this.rawSet.rbIsSleeping(this.handle)}isMoving(){return this.rawSet.rbIsMoving(this.handle)}isFixed(){return this.rawSet.rbIsFixed(this.handle)}isKinematic(){return this.rawSet.rbIsKinematic(this.handle)}isDynamic(){return this.rawSet.rbIsDynamic(this.handle)}linearDamping(){return this.rawSet.rbLinearDamping(this.handle)}angularDamping(){return this.rawSet.rbAngularDamping(this.handle)}setLinearDamping(e){this.rawSet.rbSetLinearDamping(this.handle,e)}recomputeMassPropertiesFromColliders(){this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle,this.colliderSet.raw)}setAdditionalMass(e,t){this.rawSet.rbSetAdditionalMass(this.handle,e,t)}setAdditionalMassProperties(e,t,r,n,a){let o=U.intoRaw(t),s=U.intoRaw(r),l=Be.intoRaw(n);this.rawSet.rbSetAdditionalMassProperties(this.handle,e,o,s,l,a),o.free(),s.free(),l.free()}setAngularDamping(e){this.rawSet.rbSetAngularDamping(this.handle,e)}resetForces(e){this.rawSet.rbResetForces(this.handle,e)}resetTorques(e){this.rawSet.rbResetTorques(this.handle,e)}addForce(e,t){const r=U.intoRaw(e);this.rawSet.rbAddForce(this.handle,r,t),r.free()}applyImpulse(e,t){const r=U.intoRaw(e);this.rawSet.rbApplyImpulse(this.handle,r,t),r.free()}addTorque(e,t){const r=U.intoRaw(e);this.rawSet.rbAddTorque(this.handle,r,t),r.free()}applyTorqueImpulse(e,t){const r=U.intoRaw(e);this.rawSet.rbApplyTorqueImpulse(this.handle,r,t),r.free()}addForceAtPoint(e,t,r){const n=U.intoRaw(e),a=U.intoRaw(t);this.rawSet.rbAddForceAtPoint(this.handle,n,a,r),n.free(),a.free()}applyImpulseAtPoint(e,t,r){const n=U.intoRaw(e),a=U.intoRaw(t);this.rawSet.rbApplyImpulseAtPoint(this.handle,n,a,r),n.free(),a.free()}}class fr{constructor(e){this.enabled=!0,this.status=e,this.translation=U.zeros(),this.rotation=Be.identity(),this.gravityScale=1,this.linvel=U.zeros(),this.mass=0,this.massOnly=!1,this.centerOfMass=U.zeros(),this.translationsEnabledX=!0,this.translationsEnabledY=!0,this.angvel=U.zeros(),this.principalAngularInertia=U.zeros(),this.angularInertiaLocalFrame=Be.identity(),this.translationsEnabledZ=!0,this.rotationsEnabledX=!0,this.rotationsEnabledY=!0,this.rotationsEnabledZ=!0,this.linearDamping=0,this.angularDamping=0,this.canSleep=!0,this.sleeping=!1,this.ccdEnabled=!1,this.dominanceGroup=0}static dynamic(){return new fr(ir.Dynamic)}static kinematicPositionBased(){return new fr(ir.KinematicPositionBased)}static kinematicVelocityBased(){return new fr(ir.KinematicVelocityBased)}static fixed(){return new fr(ir.Fixed)}static newDynamic(){return new fr(ir.Dynamic)}static newKinematicPositionBased(){return new fr(ir.KinematicPositionBased)}static newKinematicVelocityBased(){return new fr(ir.KinematicVelocityBased)}static newStatic(){return new fr(ir.Fixed)}setDominanceGroup(e){return this.dominanceGroup=e,this}setEnabled(e){return this.enabled=e,this}setTranslation(e,t,r){if(typeof e!="number"||typeof t!="number"||typeof r!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:e,y:t,z:r},this}setRotation(e){return Be.copy(this.rotation,e),this}setGravityScale(e){return this.gravityScale=e,this}setAdditionalMass(e){return this.mass=e,this.massOnly=!0,this}setLinvel(e,t,r){if(typeof e!="number"||typeof t!="number"||typeof r!="number")throw TypeError("The linvel components must be numbers.");return this.linvel={x:e,y:t,z:r},this}setAngvel(e){return U.copy(this.angvel,e),this}setAdditionalMassProperties(e,t,r,n){return this.mass=e,U.copy(this.centerOfMass,t),U.copy(this.principalAngularInertia,r),Be.copy(this.angularInertiaLocalFrame,n),this.massOnly=!1,this}enabledTranslations(e,t,r){return this.translationsEnabledX=e,this.translationsEnabledY=t,this.translationsEnabledZ=r,this}restrictTranslations(e,t,r){return this.enabledTranslations(e,t,r)}lockTranslations(){return this.enabledTranslations(!1,!1,!1)}enabledRotations(e,t,r){return this.rotationsEnabledX=e,this.rotationsEnabledY=t,this.rotationsEnabledZ=r,this}restrictRotations(e,t,r){return this.enabledRotations(e,t,r)}lockRotations(){return this.restrictRotations(!1,!1,!1)}setLinearDamping(e){return this.linearDamping=e,this}setAngularDamping(e){return this.angularDamping=e,this}setCanSleep(e){return this.canSleep=e,this}setSleeping(e){return this.sleeping=e,this}setCcdEnabled(e){return this.ccdEnabled=e,this}setUserData(e){return this.userData=e,this}}class kn{constructor(){this.fconv=new Float64Array(1),this.uconv=new Uint32Array(this.fconv.buffer),this.data=new Array,this.size=0}set(e,t){let r=this.index(e);for(;this.data.length<=r;)this.data.push(null);this.data[r]==null&&(this.size+=1),this.data[r]=t}len(){return this.size}delete(e){let t=this.index(e);t<this.data.length&&(this.data[t]!=null&&(this.size-=1),this.data[t]=null)}clear(){this.data=new Array}get(e){let t=this.index(e);return t<this.data.length?this.data[t]:null}forEach(e){for(const t of this.data)t!=null&&e(t)}getAll(){return this.data.filter(e=>e!=null)}index(e){return this.fconv[0]=e,this.uconv[0]}}class Fo{constructor(e){this.raw=e||new pt,this.map=new kn,e&&e.forEachRigidBodyHandle(t=>{this.map.set(t,new Xa(e,null,t))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}finalizeDeserialization(e){this.map.forEach(t=>t.finalizeDeserialization(e))}createRigidBody(e,t){let r=U.intoRaw(t.translation),n=Be.intoRaw(t.rotation),a=U.intoRaw(t.linvel),o=U.intoRaw(t.centerOfMass),s=U.intoRaw(t.angvel),l=U.intoRaw(t.principalAngularInertia),c=Be.intoRaw(t.angularInertiaLocalFrame),h=this.raw.createRigidBody(t.enabled,r,n,t.gravityScale,t.mass,t.massOnly,o,a,s,l,c,t.translationsEnabledX,t.translationsEnabledY,t.translationsEnabledZ,t.rotationsEnabledX,t.rotationsEnabledY,t.rotationsEnabledZ,t.linearDamping,t.angularDamping,t.status,t.canSleep,t.sleeping,t.ccdEnabled,t.dominanceGroup);r.free(),n.free(),a.free(),o.free(),s.free(),l.free(),c.free();const u=new Xa(this.raw,e,h);return u.userData=t.userData,this.map.set(h,u),u}remove(e,t,r,n,a){for(let o=0;o<this.raw.rbNumColliders(e);o+=1)r.unmap(this.raw.rbCollider(e,o));n.forEachJointHandleAttachedToRigidBody(e,o=>n.unmap(o)),a.forEachJointHandleAttachedToRigidBody(e,o=>a.unmap(o)),this.raw.remove(e,t.raw,r.raw,n.raw,a.raw),this.map.delete(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}get(e){return this.map.get(e)}forEach(e){this.map.forEach(e)}forEachActiveRigidBody(e,t){e.forEachActiveRigidBodyHandle(r=>{t(this.get(r))})}getAll(){return this.map.getAll()}}class zo{constructor(e){this.raw=e||new Ir}free(){this.raw&&this.raw.free(),this.raw=void 0}get dt(){return this.raw.dt}get erp(){return this.raw.erp}get allowedLinearError(){return this.raw.allowedLinearError}get predictionDistance(){return this.raw.predictionDistance}get maxVelocityIterations(){return this.raw.maxVelocityIterations}get maxVelocityFrictionIterations(){return this.raw.maxVelocityFrictionIterations}get maxStabilizationIterations(){return this.raw.maxStabilizationIterations}get minIslandSize(){return this.raw.minIslandSize}get maxCcdSubsteps(){return this.raw.maxCcdSubsteps}set dt(e){this.raw.dt=e}set erp(e){this.raw.erp=e}set allowedLinearError(e){this.raw.allowedLinearError=e}set predictionDistance(e){this.raw.predictionDistance=e}set maxVelocityIterations(e){this.raw.maxVelocityIterations=e}set maxVelocityFrictionIterations(e){this.raw.maxVelocityFrictionIterations=e}set maxStabilizationIterations(e){this.raw.maxStabilizationIterations=e}set minIslandSize(e){this.raw.minIslandSize=e}set maxCcdSubsteps(e){this.raw.maxCcdSubsteps=e}}var xt;(function(i){i[i.Revolute=0]="Revolute",i[i.Fixed=1]="Fixed",i[i.Prismatic=2]="Prismatic",i[i.Spherical=3]="Spherical"})(xt||(xt={}));var qa;(function(i){i[i.AccelerationBased=0]="AccelerationBased",i[i.ForceBased=1]="ForceBased"})(qa||(qa={}));class Ur{constructor(e,t,r){this.rawSet=e,this.bodySet=t,this.handle=r}static newTyped(e,t,r){switch(e.jointType(r)){case xt.Revolute:return new Go(e,t,r);case xt.Prismatic:return new Ho(e,t,r);case xt.Fixed:return new Bo(e,t,r);case xt.Spherical:return new ko(e,t,r);default:return new Ur(e,t,r)}}finalizeDeserialization(e){this.bodySet=e}isValid(){return this.rawSet.contains(this.handle)}body1(){return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle))}body2(){return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle))}type(){return this.rawSet.jointType(this.handle)}frameX1(){return Be.fromRaw(this.rawSet.jointFrameX1(this.handle))}frameX2(){return Be.fromRaw(this.rawSet.jointFrameX2(this.handle))}anchor1(){return U.fromRaw(this.rawSet.jointAnchor1(this.handle))}anchor2(){return U.fromRaw(this.rawSet.jointAnchor2(this.handle))}setAnchor1(e){const t=U.intoRaw(e);this.rawSet.jointSetAnchor1(this.handle,t),t.free()}setAnchor2(e){const t=U.intoRaw(e);this.rawSet.jointSetAnchor2(this.handle,t),t.free()}setContactsEnabled(e){this.rawSet.jointSetContactsEnabled(this.handle,e)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class Ya extends Ur{limitsEnabled(){return this.rawSet.jointLimitsEnabled(this.handle,this.rawAxis())}limitsMin(){return this.rawSet.jointLimitsMin(this.handle,this.rawAxis())}limitsMax(){return this.rawSet.jointLimitsMax(this.handle,this.rawAxis())}setLimits(e,t){this.rawSet.jointSetLimits(this.handle,this.rawAxis(),e,t)}configureMotorModel(e){this.rawSet.jointConfigureMotorModel(this.handle,this.rawAxis(),e)}configureMotorVelocity(e,t){this.rawSet.jointConfigureMotorVelocity(this.handle,this.rawAxis(),e,t)}configureMotorPosition(e,t,r){this.rawSet.jointConfigureMotorPosition(this.handle,this.rawAxis(),e,t,r)}configureMotor(e,t,r,n){this.rawSet.jointConfigureMotor(this.handle,this.rawAxis(),e,t,r,n)}}class Bo extends Ur{}class Ho extends Ya{rawAxis(){return Tn.X}}class Go extends Ya{rawAxis(){return Tn.AngX}}class ko extends Ur{}class gi{constructor(){}static fixed(e,t,r,n){let a=new gi;return a.anchor1=e,a.anchor2=r,a.frame1=t,a.frame2=n,a.jointType=xt.Fixed,a}static spherical(e,t){let r=new gi;return r.anchor1=e,r.anchor2=t,r.jointType=xt.Spherical,r}static prismatic(e,t,r){let n=new gi;return n.anchor1=e,n.anchor2=t,n.axis=r,n.jointType=xt.Prismatic,n}static revolute(e,t,r){let n=new gi;return n.anchor1=e,n.anchor2=t,n.axis=r,n.jointType=xt.Revolute,n}intoRaw(){let e=U.intoRaw(this.anchor1),t=U.intoRaw(this.anchor2),r,n,a=!1,o=0,s=0;switch(this.jointType){case xt.Fixed:let l=Be.intoRaw(this.frame1),c=Be.intoRaw(this.frame2);n=Yt.fixed(e,l,t,c),l.free(),c.free();break;case xt.Prismatic:r=U.intoRaw(this.axis),this.limitsEnabled&&(a=!0,o=this.limits[0],s=this.limits[1]),n=Yt.prismatic(e,t,r,a,o,s),r.free();break;case xt.Spherical:n=Yt.spherical(e,t);break;case xt.Revolute:r=U.intoRaw(this.axis),n=Yt.revolute(e,t,r),r.free();break}return e.free(),t.free(),n}}class Vo{constructor(e){this.raw=e||new ur,this.map=new kn,e&&e.forEachJointHandle(t=>{this.map.set(t,Ur.newTyped(e,null,t))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}finalizeDeserialization(e){this.map.forEach(t=>t.finalizeDeserialization(e))}createJoint(e,t,r,n,a){const o=t.intoRaw(),s=this.raw.createJoint(o,r,n,a);o.free();let l=Ur.newTyped(this.raw,e,s);return this.map.set(s,l),l}remove(e,t){this.raw.remove(e,t),this.unmap(e)}forEachJointHandleAttachedToRigidBody(e,t){this.raw.forEachJointAttachedToRigidBody(e,t)}unmap(e){this.map.delete(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}get(e){return this.map.get(e)}forEach(e){this.map.forEach(e)}getAll(){return this.map.getAll()}}class Nr{constructor(e,t){this.rawSet=e,this.handle=t}static newTyped(e,t){switch(e.jointType(t)){case xt.Revolute:return new Xo(e,t);case xt.Prismatic:return new jo(e,t);case xt.Fixed:return new Wo(e,t);case xt.Spherical:return new qo(e,t);default:return new Nr(e,t)}}isValid(){return this.rawSet.contains(this.handle)}setContactsEnabled(e){this.rawSet.jointSetContactsEnabled(this.handle,e)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class Ka extends Nr{}class Wo extends Nr{}class jo extends Ka{rawAxis(){return Tn.X}}class Xo extends Ka{rawAxis(){return Tn.AngX}}class qo extends Nr{}class Yo{constructor(e){this.raw=e||new pr,this.map=new kn,e&&e.forEachJointHandle(t=>{this.map.set(t,Nr.newTyped(this.raw,t))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}createJoint(e,t,r,n){const a=e.intoRaw(),o=this.raw.createJoint(a,t,r,n);a.free();let s=Nr.newTyped(this.raw,o);return this.map.set(o,s),s}remove(e,t){this.raw.remove(e,t),this.map.delete(e)}unmap(e){this.map.delete(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}get(e){return this.map.get(e)}forEach(e){this.map.forEach(e)}forEachJointHandleAttachedToRigidBody(e,t){this.raw.forEachJointAttachedToRigidBody(e,t)}getAll(){return this.map.getAll()}}var nn;(function(i){i[i.Average=0]="Average",i[i.Min=1]="Min",i[i.Multiply=2]="Multiply",i[i.Max=3]="Max"})(nn||(nn={}));class Ko{constructor(e){this.raw=e||new fi}free(){this.raw&&this.raw.free(),this.raw=void 0}}class Jo{constructor(e){this.raw=e||new dr}free(){this.raw&&this.raw.free(),this.raw=void 0}forEachActiveRigidBodyHandle(e){this.raw.forEachActiveRigidBodyHandle(e)}}class Zo{constructor(e){this.raw=e||new Dr}free(){this.raw&&this.raw.free(),this.raw=void 0}}class Qo{constructor(e){this.raw=e||new wr,this.tempManifold=new $o(null)}free(){this.raw&&this.raw.free(),this.raw=void 0}contactsWith(e,t){this.raw.contacts_with(e,t)}intersectionsWith(e,t){this.raw.intersections_with(e,t)}contactPair(e,t,r){const n=this.raw.contact_pair(e,t);if(n){const a=n.collider1()!=e;let o;for(o=0;o<n.numContactManifolds();++o)this.tempManifold.raw=n.contactManifold(o),this.tempManifold.raw&&r(this.tempManifold,a),this.tempManifold.free();n.free()}}intersectionPair(e,t){return this.raw.intersection_pair(e,t)}}class $o{constructor(e){this.raw=e}free(){this.raw&&this.raw.free(),this.raw=void 0}normal(){return U.fromRaw(this.raw.normal())}localNormal1(){return U.fromRaw(this.raw.local_n1())}localNormal2(){return U.fromRaw(this.raw.local_n2())}subshape1(){return this.raw.subshape1()}subshape2(){return this.raw.subshape2()}numContacts(){return this.raw.num_contacts()}localContactPoint1(e){return U.fromRaw(this.raw.contact_local_p1(e))}localContactPoint2(e){return U.fromRaw(this.raw.contact_local_p2(e))}contactDist(e){return this.raw.contact_dist(e)}contactFid1(e){return this.raw.contact_fid1(e)}contactFid2(e){return this.raw.contact_fid2(e)}contactImpulse(e){return this.raw.contact_impulse(e)}contactTangentImpulseX(e){return this.raw.contact_tangent_impulse_x(e)}contactTangentImpulseY(e){return this.raw.contact_tangent_impulse_y(e)}numSolverContacts(){return this.raw.num_solver_contacts()}solverContactPoint(e){return U.fromRaw(this.raw.solver_contact_point(e))}solverContactDist(e){return this.raw.solver_contact_dist(e)}solverContactFriction(e){return this.raw.solver_contact_friction(e)}solverContactRestitution(e){return this.raw.solver_contact_restitution(e)}solverContactTangentVelocity(e){return U.fromRaw(this.raw.solver_contact_tangent_velocity(e))}}class _i{constructor(e,t,r,n,a){this.distance=e,this.point1=t,this.point2=r,this.normal1=n,this.normal2=a}static fromRaw(e){if(!e)return null;const t=new _i(e.distance(),U.fromRaw(e.point1()),U.fromRaw(e.point2()),U.fromRaw(e.normal1()),U.fromRaw(e.normal2()));return e.free(),t}}var vi;(function(i){i[i.Vertex=0]="Vertex",i[i.Edge=1]="Edge",i[i.Face=2]="Face",i[i.Unknown=3]="Unknown"})(vi||(vi={}));class an{constructor(e,t){this.point=e,this.isInside=t}static fromRaw(e){if(!e)return null;const t=new an(U.fromRaw(e.point()),e.isInside());return e.free(),t}}class sn{constructor(e,t,r,n,a){this.featureType=vi.Unknown,this.featureId=void 0,this.collider=e,this.point=t,this.isInside=r,a!==void 0&&(this.featureId=a),n!==void 0&&(this.featureType=n)}static fromRaw(e,t){if(!t)return null;const r=new sn(e.get(t.colliderHandle()),U.fromRaw(t.point()),t.isInside(),t.featureType(),t.featureId());return t.free(),r}}let pv=class{constructor(i,e){this.origin=i,this.dir=e}pointAt(i){return{x:this.origin.x+this.dir.x*i,y:this.origin.y+this.dir.y*i,z:this.origin.z+this.dir.z*i}}};class on{constructor(e,t,r,n){this.featureType=vi.Unknown,this.featureId=void 0,this.toi=e,this.normal=t,n!==void 0&&(this.featureId=n),r!==void 0&&(this.featureType=r)}static fromRaw(e){if(!e)return null;const t=new on(e.toi(),U.fromRaw(e.normal()),e.featureType(),e.featureId());return e.free(),t}}class ln{constructor(e,t,r,n,a){this.featureType=vi.Unknown,this.featureId=void 0,this.collider=e,this.toi=t,this.normal=r,a!==void 0&&(this.featureId=a),n!==void 0&&(this.featureType=n)}static fromRaw(e,t){if(!t)return null;const r=new ln(e.get(t.colliderHandle()),t.toi(),U.fromRaw(t.normal()),t.featureType(),t.featureId());return t.free(),r}}class Vn{constructor(e,t){this.collider=e,this.toi=t}static fromRaw(e,t){if(!t)return null;const r=new Vn(e.get(t.colliderHandle()),t.toi());return t.free(),r}}class wi{constructor(e,t,r,n,a){this.toi=e,this.witness1=t,this.witness2=r,this.normal1=n,this.normal2=a}static fromRaw(e,t){if(!t)return null;const r=new wi(t.toi(),U.fromRaw(t.witness1()),U.fromRaw(t.witness2()),U.fromRaw(t.normal1()),U.fromRaw(t.normal2()));return t.free(),r}}class cn extends wi{constructor(e,t,r,n,a,o){super(t,r,n,a,o),this.collider=e}static fromRaw(e,t){if(!t)return null;const r=new cn(e.get(t.colliderHandle()),t.toi(),U.fromRaw(t.witness1()),U.fromRaw(t.witness2()),U.fromRaw(t.normal1()),U.fromRaw(t.normal2()));return t.free(),r}}class yt{static fromRaw(e,t){const r=e.coShapeType(t);let n,a,o,s,l,c,h;switch(r){case Ye.Ball:return new Ja(e.coRadius(t));case Ye.Cuboid:return n=e.coHalfExtents(t),new Za(n.x,n.y,n.z);case Ye.RoundCuboid:return n=e.coHalfExtents(t),a=e.coRoundRadius(t),new Qa(n.x,n.y,n.z,a);case Ye.Capsule:return l=e.coHalfHeight(t),c=e.coRadius(t),new $a(l,c);case Ye.Segment:return o=e.coVertices(t),new es(U.new(o[0],o[1],o[2]),U.new(o[3],o[4],o[5]));case Ye.Polyline:return o=e.coVertices(t),s=e.coIndices(t),new is(o,s);case Ye.Triangle:return o=e.coVertices(t),new ts(U.new(o[0],o[1],o[2]),U.new(o[3],o[4],o[5]),U.new(o[6],o[7],o[8]));case Ye.RoundTriangle:return o=e.coVertices(t),a=e.coRoundRadius(t),new rs(U.new(o[0],o[1],o[2]),U.new(o[3],o[4],o[5]),U.new(o[6],o[7],o[8]),a);case Ye.HalfSpace:return h=U.fromRaw(e.coHalfspaceNormal(t)),new el(h);case Ye.TriMesh:return o=e.coVertices(t),s=e.coIndices(t),new ns(o,s);case Ye.HeightField:const u=e.coHeightfieldScale(t),d=e.coHeightfieldHeights(t),m=e.coHeightfieldNRows(t),_=e.coHeightfieldNCols(t);return new as(m,_,d,u);case Ye.ConvexPolyhedron:return o=e.coVertices(t),s=e.coIndices(t),new Wn(o,s);case Ye.RoundConvexPolyhedron:return o=e.coVertices(t),s=e.coIndices(t),a=e.coRoundRadius(t),new jn(o,s,a);case Ye.Cylinder:return l=e.coHalfHeight(t),c=e.coRadius(t),new ss(l,c);case Ye.RoundCylinder:return l=e.coHalfHeight(t),c=e.coRadius(t),a=e.coRoundRadius(t),new os(l,c,a);case Ye.Cone:return l=e.coHalfHeight(t),c=e.coRadius(t),new ls(l,c);case Ye.RoundCone:return l=e.coHalfHeight(t),c=e.coRadius(t),a=e.coRoundRadius(t),new cs(l,c,a);default:throw new Error("unknown shape type: "+r)}}castShape(e,t,r,n,a,o,s,l,c){let h=U.intoRaw(e),u=Be.intoRaw(t),d=U.intoRaw(r),m=U.intoRaw(a),_=Be.intoRaw(o),v=U.intoRaw(s),f=this.intoRaw(),p=n.intoRaw(),b=wi.fromRaw(null,f.castShape(h,u,d,p,m,_,v,l,c));return h.free(),u.free(),d.free(),m.free(),_.free(),v.free(),f.free(),p.free(),b}intersectsShape(e,t,r,n,a){let o=U.intoRaw(e),s=Be.intoRaw(t),l=U.intoRaw(n),c=Be.intoRaw(a),h=this.intoRaw(),u=r.intoRaw(),d=h.intersectsShape(o,s,u,l,c);return o.free(),s.free(),l.free(),c.free(),h.free(),u.free(),d}contactShape(e,t,r,n,a,o){let s=U.intoRaw(e),l=Be.intoRaw(t),c=U.intoRaw(n),h=Be.intoRaw(a),u=this.intoRaw(),d=r.intoRaw(),m=_i.fromRaw(u.contactShape(s,l,d,c,h,o));return s.free(),l.free(),c.free(),h.free(),u.free(),d.free(),m}containsPoint(e,t,r){let n=U.intoRaw(e),a=Be.intoRaw(t),o=U.intoRaw(r),s=this.intoRaw(),l=s.containsPoint(n,a,o);return n.free(),a.free(),o.free(),s.free(),l}projectPoint(e,t,r,n){let a=U.intoRaw(e),o=Be.intoRaw(t),s=U.intoRaw(r),l=this.intoRaw(),c=an.fromRaw(l.projectPoint(a,o,s,n));return a.free(),o.free(),s.free(),l.free(),c}intersectsRay(e,t,r,n){let a=U.intoRaw(t),o=Be.intoRaw(r),s=U.intoRaw(e.origin),l=U.intoRaw(e.dir),c=this.intoRaw(),h=c.intersectsRay(a,o,s,l,n);return a.free(),o.free(),s.free(),l.free(),c.free(),h}castRay(e,t,r,n,a){let o=U.intoRaw(t),s=Be.intoRaw(r),l=U.intoRaw(e.origin),c=U.intoRaw(e.dir),h=this.intoRaw(),u=h.castRay(o,s,l,c,n,a);return o.free(),s.free(),l.free(),c.free(),h.free(),u}castRayAndGetNormal(e,t,r,n,a){let o=U.intoRaw(t),s=Be.intoRaw(r),l=U.intoRaw(e.origin),c=U.intoRaw(e.dir),h=this.intoRaw(),u=on.fromRaw(h.castRayAndGetNormal(o,s,l,c,n,a));return o.free(),s.free(),l.free(),c.free(),h.free(),u}}var Ye;(function(i){i[i.Ball=0]="Ball",i[i.Cuboid=1]="Cuboid",i[i.Capsule=2]="Capsule",i[i.Segment=3]="Segment",i[i.Polyline=4]="Polyline",i[i.Triangle=5]="Triangle",i[i.TriMesh=6]="TriMesh",i[i.HeightField=7]="HeightField",i[i.ConvexPolyhedron=9]="ConvexPolyhedron",i[i.Cylinder=10]="Cylinder",i[i.Cone=11]="Cone",i[i.RoundCuboid=12]="RoundCuboid",i[i.RoundTriangle=13]="RoundTriangle",i[i.RoundCylinder=14]="RoundCylinder",i[i.RoundCone=15]="RoundCone",i[i.RoundConvexPolyhedron=16]="RoundConvexPolyhedron",i[i.HalfSpace=17]="HalfSpace"})(Ye||(Ye={}));class Ja extends yt{constructor(e){super(),this.type=Ye.Ball,this.radius=e}intoRaw(){return Re.ball(this.radius)}}class el extends yt{constructor(e){super(),this.type=Ye.HalfSpace,this.normal=e}intoRaw(){let e=U.intoRaw(this.normal),t=Re.halfspace(e);return e.free(),t}}class Za extends yt{constructor(e,t,r){super(),this.type=Ye.Cuboid,this.halfExtents=U.new(e,t,r)}intoRaw(){return Re.cuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z)}}class Qa extends yt{constructor(e,t,r,n){super(),this.type=Ye.RoundCuboid,this.halfExtents=U.new(e,t,r),this.borderRadius=n}intoRaw(){return Re.roundCuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z,this.borderRadius)}}class $a extends yt{constructor(e,t){super(),this.type=Ye.Capsule,this.halfHeight=e,this.radius=t}intoRaw(){return Re.capsule(this.halfHeight,this.radius)}}class es extends yt{constructor(e,t){super(),this.type=Ye.Segment,this.a=e,this.b=t}intoRaw(){let e=U.intoRaw(this.a),t=U.intoRaw(this.b),r=Re.segment(e,t);return e.free(),t.free(),r}}let ts=class extends yt{constructor(i,e,t){super(),this.type=Ye.Triangle,this.a=i,this.b=e,this.c=t}intoRaw(){let i=U.intoRaw(this.a),e=U.intoRaw(this.b),t=U.intoRaw(this.c),r=Re.triangle(i,e,t);return i.free(),e.free(),t.free(),r}};class rs extends yt{constructor(e,t,r,n){super(),this.type=Ye.RoundTriangle,this.a=e,this.b=t,this.c=r,this.borderRadius=n}intoRaw(){let e=U.intoRaw(this.a),t=U.intoRaw(this.b),r=U.intoRaw(this.c),n=Re.roundTriangle(e,t,r,this.borderRadius);return e.free(),t.free(),r.free(),n}}class is extends yt{constructor(e,t){super(),this.type=Ye.Polyline,this.vertices=e,this.indices=t??new Uint32Array(0)}intoRaw(){return Re.polyline(this.vertices,this.indices)}}class ns extends yt{constructor(e,t){super(),this.type=Ye.TriMesh,this.vertices=e,this.indices=t}intoRaw(){return Re.trimesh(this.vertices,this.indices)}}class Wn extends yt{constructor(e,t){super(),this.type=Ye.ConvexPolyhedron,this.vertices=e,this.indices=t}intoRaw(){return this.indices?Re.convexMesh(this.vertices,this.indices):Re.convexHull(this.vertices)}}class jn extends yt{constructor(e,t,r){super(),this.type=Ye.RoundConvexPolyhedron,this.vertices=e,this.indices=t,this.borderRadius=r}intoRaw(){return this.indices?Re.roundConvexMesh(this.vertices,this.indices,this.borderRadius):Re.roundConvexHull(this.vertices,this.borderRadius)}}class as extends yt{constructor(e,t,r,n){super(),this.type=Ye.HeightField,this.nrows=e,this.ncols=t,this.heights=r,this.scale=n}intoRaw(){let e=U.intoRaw(this.scale),t=Re.heightfield(this.nrows,this.ncols,this.heights,e);return e.free(),t}}class ss extends yt{constructor(e,t){super(),this.type=Ye.Cylinder,this.halfHeight=e,this.radius=t}intoRaw(){return Re.cylinder(this.halfHeight,this.radius)}}class os extends yt{constructor(e,t,r){super(),this.type=Ye.RoundCylinder,this.borderRadius=r,this.halfHeight=e,this.radius=t}intoRaw(){return Re.roundCylinder(this.halfHeight,this.radius,this.borderRadius)}}class ls extends yt{constructor(e,t){super(),this.type=Ye.Cone,this.halfHeight=e,this.radius=t}intoRaw(){return Re.cone(this.halfHeight,this.radius)}}class cs extends yt{constructor(e,t,r){super(),this.type=Ye.RoundCone,this.halfHeight=e,this.radius=t,this.borderRadius=r}intoRaw(){return Re.roundCone(this.halfHeight,this.radius,this.borderRadius)}}var Xn;(function(i){i[i.DYNAMIC_DYNAMIC=1]="DYNAMIC_DYNAMIC",i[i.DYNAMIC_KINEMATIC=12]="DYNAMIC_KINEMATIC",i[i.DYNAMIC_FIXED=2]="DYNAMIC_FIXED",i[i.KINEMATIC_KINEMATIC=52224]="KINEMATIC_KINEMATIC",i[i.KINEMATIC_FIXED=8704]="KINEMATIC_FIXED",i[i.FIXED_FIXED=32]="FIXED_FIXED",i[i.DEFAULT=15]="DEFAULT",i[i.ALL=60943]="ALL"})(Xn||(Xn={}));class hs{constructor(e,t,r,n){this.colliderSet=e,this.handle=t,this._parent=r,this._shape=n}finalizeDeserialization(e){this.handle!=null&&(this._parent=e.get(this.colliderSet.raw.coParent(this.handle)))}ensureShapeIsCached(){this._shape||(this._shape=yt.fromRaw(this.colliderSet.raw,this.handle))}get shape(){return this.ensureShapeIsCached(),this._shape}isValid(){return this.colliderSet.raw.contains(this.handle)}translation(){return U.fromRaw(this.colliderSet.raw.coTranslation(this.handle))}rotation(){return Be.fromRaw(this.colliderSet.raw.coRotation(this.handle))}isSensor(){return this.colliderSet.raw.coIsSensor(this.handle)}setSensor(e){this.colliderSet.raw.coSetSensor(this.handle,e)}setShape(e){let t=e.intoRaw();this.colliderSet.raw.coSetShape(this.handle,t),t.free(),this._shape=e}setEnabled(e){this.colliderSet.raw.coSetEnabled(this.handle,e)}isEnabled(){return this.colliderSet.raw.coIsEnabled(this.handle)}setRestitution(e){this.colliderSet.raw.coSetRestitution(this.handle,e)}setFriction(e){this.colliderSet.raw.coSetFriction(this.handle,e)}frictionCombineRule(){return this.colliderSet.raw.coFrictionCombineRule(this.handle)}setFrictionCombineRule(e){this.colliderSet.raw.coSetFrictionCombineRule(this.handle,e)}restitutionCombineRule(){return this.colliderSet.raw.coRestitutionCombineRule(this.handle)}setRestitutionCombineRule(e){this.colliderSet.raw.coSetRestitutionCombineRule(this.handle,e)}setCollisionGroups(e){this.colliderSet.raw.coSetCollisionGroups(this.handle,e)}setSolverGroups(e){this.colliderSet.raw.coSetSolverGroups(this.handle,e)}activeHooks(){return this.colliderSet.raw.coActiveHooks(this.handle)}setActiveHooks(e){this.colliderSet.raw.coSetActiveHooks(this.handle,e)}activeEvents(){return this.colliderSet.raw.coActiveEvents(this.handle)}setActiveEvents(e){this.colliderSet.raw.coSetActiveEvents(this.handle,e)}activeCollisionTypes(){return this.colliderSet.raw.coActiveCollisionTypes(this.handle)}setContactForceEventThreshold(e){return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle,e)}contactForceEventThreshold(){return this.colliderSet.raw.coContactForceEventThreshold(this.handle)}setActiveCollisionTypes(e){this.colliderSet.raw.coSetActiveCollisionTypes(this.handle,e)}setDensity(e){this.colliderSet.raw.coSetDensity(this.handle,e)}setMass(e){this.colliderSet.raw.coSetMass(this.handle,e)}setMassProperties(e,t,r,n){let a=U.intoRaw(t),o=U.intoRaw(r),s=Be.intoRaw(n);this.colliderSet.raw.coSetMassProperties(this.handle,e,a,o,s),a.free(),o.free(),s.free()}setTranslation(e){this.colliderSet.raw.coSetTranslation(this.handle,e.x,e.y,e.z)}setTranslationWrtParent(e){this.colliderSet.raw.coSetTranslationWrtParent(this.handle,e.x,e.y,e.z)}setRotation(e){this.colliderSet.raw.coSetRotation(this.handle,e.x,e.y,e.z,e.w)}setRotationWrtParent(e){this.colliderSet.raw.coSetRotationWrtParent(this.handle,e.x,e.y,e.z,e.w)}shapeType(){return this.colliderSet.raw.coShapeType(this.handle)}halfExtents(){return U.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle))}setHalfExtents(e){const t=U.intoRaw(e);this.colliderSet.raw.coSetHalfExtents(this.handle,t)}radius(){return this.colliderSet.raw.coRadius(this.handle)}setRadius(e){this.colliderSet.raw.coSetRadius(this.handle,e)}roundRadius(){return this.colliderSet.raw.coRoundRadius(this.handle)}setRoundRadius(e){this.colliderSet.raw.coSetRoundRadius(this.handle,e)}halfHeight(){return this.colliderSet.raw.coHalfHeight(this.handle)}setHalfHeight(e){this.colliderSet.raw.coSetHalfHeight(this.handle,e)}vertices(){return this.colliderSet.raw.coVertices(this.handle)}indices(){return this.colliderSet.raw.coIndices(this.handle)}heightfieldHeights(){return this.colliderSet.raw.coHeightfieldHeights(this.handle)}heightfieldScale(){let e=this.colliderSet.raw.coHeightfieldScale(this.handle);return U.fromRaw(e)}heightfieldNRows(){return this.colliderSet.raw.coHeightfieldNRows(this.handle)}heightfieldNCols(){return this.colliderSet.raw.coHeightfieldNCols(this.handle)}parent(){return this._parent}friction(){return this.colliderSet.raw.coFriction(this.handle)}restitution(){return this.colliderSet.raw.coRestitution(this.handle)}density(){return this.colliderSet.raw.coDensity(this.handle)}mass(){return this.colliderSet.raw.coMass(this.handle)}volume(){return this.colliderSet.raw.coVolume(this.handle)}collisionGroups(){return this.colliderSet.raw.coCollisionGroups(this.handle)}solverGroups(){return this.colliderSet.raw.coSolverGroups(this.handle)}containsPoint(e){let t=U.intoRaw(e),r=this.colliderSet.raw.coContainsPoint(this.handle,t);return t.free(),r}projectPoint(e,t){let r=U.intoRaw(e),n=an.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle,r,t));return r.free(),n}intersectsRay(e,t){let r=U.intoRaw(e.origin),n=U.intoRaw(e.dir),a=this.colliderSet.raw.coIntersectsRay(this.handle,r,n,t);return r.free(),n.free(),a}castShape(e,t,r,n,a,o,s){let l=U.intoRaw(e),c=U.intoRaw(r),h=Be.intoRaw(n),u=U.intoRaw(a),d=t.intoRaw(),m=wi.fromRaw(this.colliderSet,this.colliderSet.raw.coCastShape(this.handle,l,d,c,h,u,o,s));return l.free(),c.free(),h.free(),u.free(),d.free(),m}castCollider(e,t,r,n,a){let o=U.intoRaw(e),s=U.intoRaw(r),l=cn.fromRaw(this.colliderSet,this.colliderSet.raw.coCastCollider(this.handle,o,t.handle,s,n,a));return o.free(),s.free(),l}intersectsShape(e,t,r){let n=U.intoRaw(t),a=Be.intoRaw(r),o=e.intoRaw(),s=this.colliderSet.raw.coIntersectsShape(this.handle,o,n,a);return n.free(),a.free(),o.free(),s}contactShape(e,t,r,n){let a=U.intoRaw(t),o=Be.intoRaw(r),s=e.intoRaw(),l=_i.fromRaw(this.colliderSet.raw.coContactShape(this.handle,s,a,o,n));return a.free(),o.free(),s.free(),l}contactCollider(e,t){return _i.fromRaw(this.colliderSet.raw.coContactCollider(this.handle,e.handle,t))}castRay(e,t,r){let n=U.intoRaw(e.origin),a=U.intoRaw(e.dir),o=this.colliderSet.raw.coCastRay(this.handle,n,a,t,r);return n.free(),a.free(),o}castRayAndGetNormal(e,t,r){let n=U.intoRaw(e.origin),a=U.intoRaw(e.dir),o=on.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle,n,a,t,r));return n.free(),a.free(),o}}var Qr;(function(i){i[i.Density=0]="Density",i[i.Mass=1]="Mass",i[i.MassProps=2]="MassProps"})(Qr||(Qr={}));class gt{constructor(e){this.enabled=!0,this.shape=e,this.massPropsMode=Qr.Density,this.density=1,this.friction=.5,this.restitution=0,this.rotation=Be.identity(),this.translation=U.zeros(),this.isSensor=!1,this.collisionGroups=4294967295,this.solverGroups=4294967295,this.frictionCombineRule=nn.Average,this.restitutionCombineRule=nn.Average,this.activeCollisionTypes=Xn.DEFAULT,this.activeEvents=0,this.activeHooks=0,this.mass=0,this.centerOfMass=U.zeros(),this.contactForceEventThreshold=0,this.principalAngularInertia=U.zeros(),this.angularInertiaLocalFrame=Be.identity()}static ball(e){const t=new Ja(e);return new gt(t)}static capsule(e,t){const r=new $a(e,t);return new gt(r)}static segment(e,t){const r=new es(e,t);return new gt(r)}static triangle(e,t,r){const n=new ts(e,t,r);return new gt(n)}static roundTriangle(e,t,r,n){const a=new rs(e,t,r,n);return new gt(a)}static polyline(e,t){const r=new is(e,t);return new gt(r)}static trimesh(e,t){const r=new ns(e,t);return new gt(r)}static cuboid(e,t,r){const n=new Za(e,t,r);return new gt(n)}static roundCuboid(e,t,r,n){const a=new Qa(e,t,r,n);return new gt(a)}static heightfield(e,t,r,n){const a=new as(e,t,r,n);return new gt(a)}static cylinder(e,t){const r=new ss(e,t);return new gt(r)}static roundCylinder(e,t,r){const n=new os(e,t,r);return new gt(n)}static cone(e,t){const r=new ls(e,t);return new gt(r)}static roundCone(e,t,r){const n=new cs(e,t,r);return new gt(n)}static convexHull(e){const t=new Wn(e,null);return new gt(t)}static convexMesh(e,t){const r=new Wn(e,t);return new gt(r)}static roundConvexHull(e,t){const r=new jn(e,null,t);return new gt(r)}static roundConvexMesh(e,t,r){const n=new jn(e,t,r);return new gt(n)}setTranslation(e,t,r){if(typeof e!="number"||typeof t!="number"||typeof r!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:e,y:t,z:r},this}setRotation(e){return Be.copy(this.rotation,e),this}setSensor(e){return this.isSensor=e,this}setEnabled(e){return this.enabled=e,this}setDensity(e){return this.massPropsMode=Qr.Density,this.density=e,this}setMass(e){return this.massPropsMode=Qr.Mass,this.mass=e,this}setMassProperties(e,t,r,n){return this.massPropsMode=Qr.MassProps,this.mass=e,U.copy(this.centerOfMass,t),U.copy(this.principalAngularInertia,r),Be.copy(this.angularInertiaLocalFrame,n),this}setRestitution(e){return this.restitution=e,this}setFriction(e){return this.friction=e,this}setFrictionCombineRule(e){return this.frictionCombineRule=e,this}setRestitutionCombineRule(e){return this.restitutionCombineRule=e,this}setCollisionGroups(e){return this.collisionGroups=e,this}setSolverGroups(e){return this.solverGroups=e,this}setActiveHooks(e){return this.activeHooks=e,this}setActiveEvents(e){return this.activeEvents=e,this}setActiveCollisionTypes(e){return this.activeCollisionTypes=e,this}setContactForceEventThreshold(e){return this.contactForceEventThreshold=e,this}}class tl{constructor(e){this.raw=e||new dt,this.map=new kn,e&&e.forEachColliderHandle(t=>{this.map.set(t,new hs(this,t,null))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}castClosure(e){return t=>{if(e)return e(this.get(t))}}finalizeDeserialization(e){this.map.forEach(t=>t.finalizeDeserialization(e))}createCollider(e,t,r){let n=r!=null&&r!=null;if(n&&isNaN(r))throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");let a=t.shape.intoRaw(),o=U.intoRaw(t.translation),s=Be.intoRaw(t.rotation),l=U.intoRaw(t.centerOfMass),c=U.intoRaw(t.principalAngularInertia),h=Be.intoRaw(t.angularInertiaLocalFrame),u=this.raw.createCollider(t.enabled,a,o,s,t.massPropsMode,t.mass,l,c,h,t.density,t.friction,t.restitution,t.frictionCombineRule,t.restitutionCombineRule,t.isSensor,t.collisionGroups,t.solverGroups,t.activeCollisionTypes,t.activeHooks,t.activeEvents,t.contactForceEventThreshold,n,n?r:0,e.raw);a.free(),o.free(),s.free(),l.free(),c.free(),h.free();let d=n?e.get(r):null,m=new hs(this,u,d,t.shape);return this.map.set(u,m),m}remove(e,t,r,n){this.raw.remove(e,t.raw,r.raw,n),this.unmap(e)}unmap(e){this.map.delete(e)}get(e){return this.map.get(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}forEach(e){this.map.forEach(e)}getAll(){return this.map.getAll()}}class rl{constructor(e){this.raw=e||new Cn}free(){this.raw&&this.raw.free(),this.raw=void 0}step(e,t,r,n,a,o,s,l,c,h,u,d){let m=U.intoRaw(e);u?this.raw.stepWithEvents(m,t.raw,r.raw,n.raw,a.raw,o.raw,s.raw,l.raw,c.raw,h.raw,u.raw,d,d?d.filterContactPair:null,d?d.filterIntersectionPair:null):this.raw.step(m,t.raw,r.raw,n.raw,a.raw,o.raw,s.raw,l.raw,c.raw,h.raw),m.free()}}var us;(function(i){i[i.EXCLUDE_FIXED=1]="EXCLUDE_FIXED",i[i.EXCLUDE_KINEMATIC=2]="EXCLUDE_KINEMATIC",i[i.EXCLUDE_DYNAMIC=4]="EXCLUDE_DYNAMIC",i[i.EXCLUDE_SENSORS=8]="EXCLUDE_SENSORS",i[i.EXCLUDE_SOLIDS=16]="EXCLUDE_SOLIDS",i[i.ONLY_DYNAMIC=3]="ONLY_DYNAMIC",i[i.ONLY_KINEMATIC=5]="ONLY_KINEMATIC",i[i.ONLY_FIXED=6]="ONLY_FIXED"})(us||(us={}));class il{constructor(e){this.raw=e||new en}free(){this.raw&&this.raw.free(),this.raw=void 0}update(e,t){this.raw.update(e.raw,t.raw)}castRay(e,t,r,n,a,o,s,l,c,h){let u=U.intoRaw(r.origin),d=U.intoRaw(r.dir),m=Vn.fromRaw(t,this.raw.castRay(e.raw,t.raw,u,d,n,a,o,s,l,c,h));return u.free(),d.free(),m}castRayAndGetNormal(e,t,r,n,a,o,s,l,c,h){let u=U.intoRaw(r.origin),d=U.intoRaw(r.dir),m=ln.fromRaw(t,this.raw.castRayAndGetNormal(e.raw,t.raw,u,d,n,a,o,s,l,c,h));return u.free(),d.free(),m}intersectionsWithRay(e,t,r,n,a,o,s,l,c,h,u){let d=U.intoRaw(r.origin),m=U.intoRaw(r.dir),_=v=>o(ln.fromRaw(t,v));this.raw.intersectionsWithRay(e.raw,t.raw,d,m,n,a,_,s,l,c,h,u),d.free(),m.free()}intersectionWithShape(e,t,r,n,a,o,s,l,c,h){let u=U.intoRaw(r),d=Be.intoRaw(n),m=a.intoRaw(),_=this.raw.intersectionWithShape(e.raw,t.raw,u,d,m,o,s,l,c,h);return u.free(),d.free(),m.free(),_}projectPoint(e,t,r,n,a,o,s,l,c){let h=U.intoRaw(r),u=sn.fromRaw(t,this.raw.projectPoint(e.raw,t.raw,h,n,a,o,s,l,c));return h.free(),u}projectPointAndGetFeature(e,t,r,n,a,o,s,l){let c=U.intoRaw(r),h=sn.fromRaw(t,this.raw.projectPointAndGetFeature(e.raw,t.raw,c,n,a,o,s,l));return c.free(),h}intersectionsWithPoint(e,t,r,n,a,o,s,l,c){let h=U.intoRaw(r);this.raw.intersectionsWithPoint(e.raw,t.raw,h,n,a,o,s,l,c),h.free()}castShape(e,t,r,n,a,o,s,l,c,h,u,d,m){let _=U.intoRaw(r),v=Be.intoRaw(n),f=U.intoRaw(a),p=o.intoRaw(),b=cn.fromRaw(t,this.raw.castShape(e.raw,t.raw,_,v,f,p,s,l,c,h,u,d,m));return _.free(),v.free(),f.free(),p.free(),b}intersectionsWithShape(e,t,r,n,a,o,s,l,c,h,u){let d=U.intoRaw(r),m=Be.intoRaw(n),_=a.intoRaw();this.raw.intersectionsWithShape(e.raw,t.raw,d,m,_,o,s,l,c,h,u),d.free(),m.free(),_.free()}collidersWithAabbIntersectingAabb(e,t,r){let n=U.intoRaw(e),a=U.intoRaw(t);this.raw.collidersWithAabbIntersectingAabb(n,a,r),n.free(),a.free()}}class ds{constructor(e){this.raw=e||new Nn}free(){this.raw&&this.raw.free(),this.raw=void 0}serializeAll(e,t,r,n,a,o,s,l,c){let h=U.intoRaw(e);const u=this.raw.serializeAll(h,t.raw,r.raw,n.raw,a.raw,o.raw,s.raw,l.raw,c.raw);return h.free(),u}deserializeAll(e){return qn.fromRaw(this.raw.deserializeAll(e))}}class nl{constructor(e,t){this.vertices=e,this.colors=t}}class al{constructor(e){this.raw=e||new Rn}free(){this.raw&&this.raw.free(),this.raw=void 0,this.vertices=void 0,this.colors=void 0}render(e,t,r,n,a){this.raw.render(e.raw,t.raw,r.raw,n.raw,a.raw),this.vertices=this.raw.vertices(),this.colors=this.raw.colors()}}class sl{}class ol{constructor(e,t,r,n,a){this.params=t,this.bodies=r,this.colliders=n,this.queries=a,this.raw=new An(e),this.rawCharacterCollision=new Qi,this._applyImpulsesToDynamicBodies=!1,this._characterMass=null}free(){this.raw&&(this.raw.free(),this.rawCharacterCollision.free()),this.raw=void 0,this.rawCharacterCollision=void 0}up(){return this.raw.up()}setUp(e){let t=U.intoRaw(e);return this.raw.setUp(t)}applyImpulsesToDynamicBodies(){return this._applyImpulsesToDynamicBodies}setApplyImpulsesToDynamicBodies(e){this._applyImpulsesToDynamicBodies=e}characterMass(){return this._characterMass}setCharacterMass(e){this._characterMass=e}offset(){return this.raw.offset()}setOffset(e){this.raw.setOffset(e)}slideEnabled(){return this.raw.slideEnabled()}setSlideEnabled(e){this.raw.setSlideEnabled(e)}autostepMaxHeight(){return this.raw.autostepMaxHeight()}autostepMinWidth(){return this.raw.autostepMinWidth()}autostepIncludesDynamicBodies(){return this.raw.autostepIncludesDynamicBodies()}autostepEnabled(){return this.raw.autostepEnabled()}enableAutostep(e,t,r){this.raw.enableAutostep(e,t,r)}disableAutostep(){return this.raw.disableAutostep()}maxSlopeClimbAngle(){return this.raw.maxSlopeClimbAngle()}setMaxSlopeClimbAngle(e){this.raw.setMaxSlopeClimbAngle(e)}minSlopeSlideAngle(){return this.raw.minSlopeSlideAngle()}setMinSlopeSlideAngle(e){this.raw.setMinSlopeSlideAngle(e)}snapToGroundDistance(){return this.raw.snapToGroundDistance()}enableSnapToGround(e){this.raw.enableSnapToGround(e)}disableSnapToGround(){this.raw.disableSnapToGround()}snapToGroundEnabled(){return this.raw.snapToGroundEnabled()}computeColliderMovement(e,t,r,n,a){let o=U.intoRaw(t);this.raw.computeColliderMovement(this.params.dt,this.bodies.raw,this.colliders.raw,this.queries.raw,e.handle,o,this._applyImpulsesToDynamicBodies,this._characterMass,r,n,this.colliders.castClosure(a)),o.free()}computedMovement(){return U.fromRaw(this.raw.computedMovement())}computedGrounded(){return this.raw.computedGrounded()}numComputedCollisions(){return this.raw.numComputedCollisions()}computedCollision(e,t){if(this.raw.computedCollision(e,this.rawCharacterCollision)){let r=this.rawCharacterCollision;return t=t??new sl,t.translationApplied=U.fromRaw(r.translationApplied()),t.translationRemaining=U.fromRaw(r.translationRemaining()),t.toi=r.toi(),t.witness1=U.fromRaw(r.worldWitness1()),t.witness2=U.fromRaw(r.worldWitness2()),t.normal1=U.fromRaw(r.worldNormal1()),t.normal2=U.fromRaw(r.worldNormal2()),t.collider=this.colliders.get(r.handle()),t}else return null}}class qn{constructor(e,t,r,n,a,o,s,l,c,h,u,d,m,_){this.gravity=e,this.integrationParameters=new zo(t),this.islands=new Jo(r),this.broadPhase=new Zo(n),this.narrowPhase=new Qo(a),this.bodies=new Fo(o),this.colliders=new tl(s),this.impulseJoints=new Vo(l),this.multibodyJoints=new Yo(c),this.ccdSolver=new Ko(h),this.queryPipeline=new il(u),this.physicsPipeline=new rl(d),this.serializationPipeline=new ds(m),this.debugRenderPipeline=new al(_),this.characterControllers=new Set,this.impulseJoints.finalizeDeserialization(this.bodies),this.bodies.finalizeDeserialization(this.colliders),this.colliders.finalizeDeserialization(this.bodies)}free(){this.integrationParameters.free(),this.islands.free(),this.broadPhase.free(),this.narrowPhase.free(),this.bodies.free(),this.colliders.free(),this.impulseJoints.free(),this.multibodyJoints.free(),this.ccdSolver.free(),this.queryPipeline.free(),this.physicsPipeline.free(),this.serializationPipeline.free(),this.debugRenderPipeline.free(),this.characterControllers.forEach(e=>e.free()),this.integrationParameters=void 0,this.islands=void 0,this.broadPhase=void 0,this.narrowPhase=void 0,this.bodies=void 0,this.colliders=void 0,this.ccdSolver=void 0,this.impulseJoints=void 0,this.multibodyJoints=void 0,this.queryPipeline=void 0,this.physicsPipeline=void 0,this.serializationPipeline=void 0,this.debugRenderPipeline=void 0,this.characterControllers=void 0}static fromRaw(e){return e?new qn(U.fromRaw(e.takeGravity()),e.takeIntegrationParameters(),e.takeIslandManager(),e.takeBroadPhase(),e.takeNarrowPhase(),e.takeBodies(),e.takeColliders(),e.takeImpulseJoints(),e.takeMultibodyJoints()):null}takeSnapshot(){return this.serializationPipeline.serializeAll(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints)}static restoreSnapshot(e){return new ds().deserializeAll(e)}debugRender(){return this.debugRenderPipeline.render(this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.narrowPhase),new nl(this.debugRenderPipeline.vertices,this.debugRenderPipeline.colors)}step(e,t){this.physicsPipeline.step(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.ccdSolver,e,t),this.queryPipeline.update(this.bodies,this.colliders)}propagateModifiedBodyPositionsToColliders(){this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw)}updateSceneQueries(){this.propagateModifiedBodyPositionsToColliders(),this.queryPipeline.update(this.bodies,this.colliders)}get timestep(){return this.integrationParameters.dt}set timestep(e){this.integrationParameters.dt=e}get maxVelocityIterations(){return this.integrationParameters.maxVelocityIterations}set maxVelocityIterations(e){this.integrationParameters.maxVelocityIterations=e}get maxVelocityFrictionIterations(){return this.integrationParameters.maxVelocityFrictionIterations}set maxVelocityFrictionIterations(e){this.integrationParameters.maxVelocityFrictionIterations=e}get maxStabilizationIterations(){return this.integrationParameters.maxStabilizationIterations}set maxStabilizationIterations(e){this.integrationParameters.maxStabilizationIterations=e}createRigidBody(e){return this.bodies.createRigidBody(this.colliders,e)}createCharacterController(e){let t=new ol(e,this.integrationParameters,this.bodies,this.colliders,this.queryPipeline);return this.characterControllers.add(t),t}removeCharacterController(e){this.characterControllers.delete(e),e.free()}createCollider(e,t){let r=t?t.handle:void 0;return this.colliders.createCollider(this.bodies,e,r)}createImpulseJoint(e,t,r,n){return this.impulseJoints.createJoint(this.bodies,e,t.handle,r.handle,n)}createMultibodyJoint(e,t,r,n){return this.multibodyJoints.createJoint(e,t.handle,r.handle,n)}getRigidBody(e){return this.bodies.get(e)}getCollider(e){return this.colliders.get(e)}getImpulseJoint(e){return this.impulseJoints.get(e)}getMultibodyJoint(e){return this.multibodyJoints.get(e)}removeRigidBody(e){this.bodies&&this.bodies.remove(e.handle,this.islands,this.colliders,this.impulseJoints,this.multibodyJoints)}removeCollider(e,t){this.colliders&&this.colliders.remove(e.handle,this.islands,this.bodies,t)}removeImpulseJoint(e,t){this.impulseJoints&&this.impulseJoints.remove(e.handle,t)}removeMultibodyJoint(e,t){this.impulseJoints&&this.multibodyJoints.remove(e.handle,t)}forEachCollider(e){this.colliders.forEach(e)}forEachRigidBody(e){this.bodies.forEach(e)}forEachActiveRigidBody(e){this.bodies.forEachActiveRigidBody(this.islands,e)}castRay(e,t,r,n,a,o,s,l){return this.queryPipeline.castRay(this.bodies,this.colliders,e,t,r,n,a,o?o.handle:null,s?s.handle:null,this.colliders.castClosure(l))}castRayAndGetNormal(e,t,r,n,a,o,s,l){return this.queryPipeline.castRayAndGetNormal(this.bodies,this.colliders,e,t,r,n,a,o?o.handle:null,s?s.handle:null,this.colliders.castClosure(l))}intersectionsWithRay(e,t,r,n,a,o,s,l,c){this.queryPipeline.intersectionsWithRay(this.bodies,this.colliders,e,t,r,n,a,o,s?s.handle:null,l?l.handle:null,this.colliders.castClosure(c))}intersectionWithShape(e,t,r,n,a,o,s,l){let c=this.queryPipeline.intersectionWithShape(this.bodies,this.colliders,e,t,r,n,a,o?o.handle:null,s?s.handle:null,this.colliders.castClosure(l));return c!=null?this.colliders.get(c):null}projectPoint(e,t,r,n,a,o,s){return this.queryPipeline.projectPoint(this.bodies,this.colliders,e,t,r,n,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(s))}projectPointAndGetFeature(e,t,r,n,a,o){return this.queryPipeline.projectPointAndGetFeature(this.bodies,this.colliders,e,t,r,n?n.handle:null,a?a.handle:null,this.colliders.castClosure(o))}intersectionsWithPoint(e,t,r,n,a,o,s){this.queryPipeline.intersectionsWithPoint(this.bodies,this.colliders,e,this.colliders.castClosure(t),r,n,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(s))}castShape(e,t,r,n,a,o,s,l,c,h,u){return this.queryPipeline.castShape(this.bodies,this.colliders,e,t,r,n,a,o,s,l,c?c.handle:null,h?h.handle:null,this.colliders.castClosure(u))}intersectionsWithShape(e,t,r,n,a,o,s,l,c){this.queryPipeline.intersectionsWithShape(this.bodies,this.colliders,e,t,r,this.colliders.castClosure(n),a,o,s?s.handle:null,l?l.handle:null,this.colliders.castClosure(c))}collidersWithAabbIntersectingAabb(e,t,r){this.queryPipeline.collidersWithAabbIntersectingAabb(e,t,this.colliders.castClosure(r))}contactsWith(e,t){this.narrowPhase.contactsWith(e.handle,this.colliders.castClosure(t))}intersectionsWith(e,t){this.narrowPhase.intersectionsWith(e.handle,this.colliders.castClosure(t))}contactPair(e,t,r){this.narrowPhase.contactPair(e.handle,t.handle,r)}intersectionPair(e,t){return this.narrowPhase.intersectionPair(e.handle,t.handle)}}var ps;(function(i){i[i.COLLISION_EVENTS=1]="COLLISION_EVENTS",i[i.CONTACT_FORCE_EVENTS=2]="CONTACT_FORCE_EVENTS"})(ps||(ps={}));class ll{free(){this.raw&&this.raw.free(),this.raw=void 0}collider1(){return this.raw.collider1()}collider2(){return this.raw.collider2()}totalForce(){return U.fromRaw(this.raw.total_force())}totalForceMagnitude(){return this.raw.total_force_magnitude()}maxForceDirection(){return U.fromRaw(this.raw.max_force_direction())}maxForceMagnitude(){return this.raw.max_force_magnitude()}}class fv{constructor(e,t){this.raw=t||new $i(e)}free(){this.raw&&this.raw.free(),this.raw=void 0}drainCollisionEvents(e){this.raw.drainCollisionEvents(e)}drainContactForceEvents(e){let t=new ll;this.raw.drainContactForceEvents(r=>{t.raw=r,e(t),t.free()})}clear(){this.raw.clear()}}var fs;(function(i){i[i.FILTER_CONTACT_PAIRS=1]="FILTER_CONTACT_PAIRS",i[i.FILTER_INTERSECTION_PAIRS=2]="FILTER_INTERSECTION_PAIRS"})(fs||(fs={}));var ms;(function(i){i[i.EMPTY=0]="EMPTY",i[i.COMPUTE_IMPULSE=1]="COMPUTE_IMPULSE"})(ms||(ms={}));function mv(){return Lh()}const nr=Object.freeze(Object.defineProperty({__proto__:null,get ActiveCollisionTypes(){return Xn},get ActiveEvents(){return ps},get ActiveHooks(){return fs},Ball:Ja,BroadPhase:Zo,CCDSolver:Ko,Capsule:$a,CharacterCollision:sl,get CoefficientCombineRule(){return nn},Collider:hs,ColliderDesc:gt,ColliderSet:tl,Cone:ls,ConvexPolyhedron:Wn,Cuboid:Za,Cylinder:ss,DebugRenderBuffers:nl,DebugRenderPipeline:al,EventQueue:fv,get FeatureType(){return vi},FixedImpulseJoint:Bo,FixedMultibodyJoint:Wo,HalfSpace:el,Heightfield:as,ImpulseJoint:Ur,ImpulseJointSet:Vo,IntegrationParameters:zo,IslandManager:Jo,JointData:gi,get JointType(){return xt},KinematicCharacterController:ol,get MassPropsMode(){return Qr},get MotorModel(){return qa},MultibodyJoint:Nr,MultibodyJointSet:Yo,NarrowPhase:Qo,PhysicsPipeline:rl,PointColliderProjection:sn,PointProjection:an,Polyline:is,PrismaticImpulseJoint:Ho,PrismaticMultibodyJoint:jo,Quaternion:Wa,get QueryFilterFlags(){return us},QueryPipeline:il,Ray:pv,RayColliderIntersection:ln,RayColliderToi:Vn,RayIntersection:on,RevoluteImpulseJoint:Go,RevoluteMultibodyJoint:Xo,RigidBody:Xa,RigidBodyDesc:fr,RigidBodySet:Fo,get RigidBodyType(){return ir},RotationOps:Be,RoundCone:cs,RoundConvexPolyhedron:jn,RoundCuboid:Qa,RoundCylinder:os,RoundTriangle:rs,SdpMatrix3:Oo,SdpMatrix3Ops:ja,Segment:es,SerializationPipeline:ds,Shape:yt,ShapeColliderTOI:cn,ShapeContact:_i,ShapeTOI:wi,get ShapeType(){return Ye},get SolverFlags(){return ms},SphericalImpulseJoint:ko,SphericalMultibodyJoint:qo,TempContactForceEvent:ll,TempContactManifold:$o,TriMesh:ns,Triangle:ts,UnitImpulseJoint:Ya,UnitMultibodyJoint:Ka,Vector3:No,VectorOps:U,World:qn,version:mv},Symbol.toStringTag,{value:"Module"})),gs="160",xi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gv=0,cl=1,_v=2,hl=1,ul=2,xr=3,Or=0,Gt=1,yr=2,Fr=0,Si=1,dl=2,pl=3,fl=4,vv=5,$r=100,wv=101,xv=102,ml=103,gl=104,yv=200,Sv=201,Mv=202,Ev=203,_s=204,vs=205,bv=206,Tv=207,Rv=208,Av=209,Cv=210,Pv=211,Lv=212,Dv=213,Iv=214,Uv=0,Nv=1,Ov=2,Yn=3,Fv=4,zv=5,Bv=6,Hv=7,ws=0,Gv=1,kv=2,zr=0,Vv=1,Wv=2,jv=3,Xv=4,qv=5,Yv=6,_l=300,Mi=301,Ei=302,xs=303,ys=304,Kn=306,Ss=1e3,ar=1001,Ms=1002,Ot=1003,vl=1004,Es=1005,Kt=1006,Kv=1007,hn=1008,Br=1009,Jv=1010,Zv=1011,bs=1012,wl=1013,Hr=1014,Gr=1015,un=1016,xl=1017,yl=1018,ei=1020,Qv=1021,sr=1023,$v=1024,e0=1025,ti=1026,bi=1027,t0=1028,Sl=1029,r0=1030,Ml=1031,El=1033,Ts=33776,Rs=33777,As=33778,Cs=33779,bl=35840,Tl=35841,Rl=35842,Al=35843,Cl=36196,Pl=37492,Ll=37496,Dl=37808,Il=37809,Ul=37810,Nl=37811,Ol=37812,Fl=37813,zl=37814,Bl=37815,Hl=37816,Gl=37817,kl=37818,Vl=37819,Wl=37820,jl=37821,Ps=36492,Xl=36494,ql=36495,i0=36283,Yl=36284,Kl=36285,Jl=36286,Zl=3e3,ri=3001,n0=3200,a0=3201,Ql=0,s0=1,Jt="",At="srgb",Sr="srgb-linear",Ls="display-p3",Jn="display-p3-linear",Zn="linear",ct="srgb",Qn="rec709",$n="p3",Ti=7680,$l=519,o0=512,l0=513,c0=514,ec=515,h0=516,u0=517,d0=518,p0=519,tc=35044,rc="300 es",Ds=1035,Mr=2e3,ea=2001;class ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const n=r.indexOf(t);n!==-1&&r.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const r=t.slice(0);for(let n=0,a=r.length;n<a;n++)r[n].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ic=1234567;const dn=Math.PI/180,pn=180/Math.PI;function Ri(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[r&255]+Pt[r>>8&255]+Pt[r>>16&255]+Pt[r>>24&255]).toLowerCase()}function Lt(i,e,t){return Math.max(e,Math.min(t,i))}function Is(i,e){return(i%e+e)%e}function f0(i,e,t,r,n){return r+(i-e)*(n-r)/(t-e)}function m0(i,e,t){return i!==e?(t-i)/(e-i):0}function fn(i,e,t){return(1-t)*i+t*e}function g0(i,e,t,r){return fn(i,e,1-Math.exp(-t*r))}function _0(i,e=1){return e-Math.abs(Is(i,e*2)-e)}function v0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function w0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function x0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function y0(i,e){return i+Math.random()*(e-i)}function S0(i){return i*(.5-Math.random())}function M0(i){i!==void 0&&(ic=i);let e=ic+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function E0(i){return i*dn}function b0(i){return i*pn}function Us(i){return(i&i-1)===0&&i!==0}function T0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ta(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function R0(i,e,t,r,n){const a=Math.cos,o=Math.sin,s=a(t/2),l=o(t/2),c=a((e+r)/2),h=o((e+r)/2),u=a((e-r)/2),d=o((e-r)/2),m=a((r-e)/2),_=o((r-e)/2);switch(n){case"XYX":i.set(s*h,l*u,l*d,s*c);break;case"YZY":i.set(l*d,s*h,l*u,s*c);break;case"ZXZ":i.set(l*u,l*d,s*h,s*c);break;case"XZX":i.set(s*h,l*_,l*m,s*c);break;case"YXY":i.set(l*m,s*h,l*_,s*c);break;case"ZYZ":i.set(l*_,l*m,s*h,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Ai(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const A0={DEG2RAD:dn,RAD2DEG:pn,generateUUID:Ri,clamp:Lt,euclideanModulo:Is,mapLinear:f0,inverseLerp:m0,lerp:fn,damp:g0,pingpong:_0,smoothstep:v0,smootherstep:w0,randInt:x0,randFloat:y0,randFloatSpread:S0,seededRandom:M0,degToRad:E0,radToDeg:b0,isPowerOfTwo:Us,ceilPowerOfTwo:T0,floorPowerOfTwo:ta,setQuaternionFromProperEuler:R0,normalize:Ft,denormalize:Ai};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Lt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*r-o*n+e.x,this.y=a*n+o*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,r,n,a,o,s,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,n,a,o,s,l,c)}set(e,t,r,n,a,o,s,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=s,h[3]=t,h[4]=a,h[5]=l,h[6]=r,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,a=this.elements,o=r[0],s=r[3],l=r[6],c=r[1],h=r[4],u=r[7],d=r[2],m=r[5],_=r[8],v=n[0],f=n[3],p=n[6],b=n[1],x=n[4],P=n[7],I=n[2],A=n[5],R=n[8];return a[0]=o*v+s*b+l*I,a[3]=o*f+s*x+l*A,a[6]=o*p+s*P+l*R,a[1]=c*v+h*b+u*I,a[4]=c*f+h*x+u*A,a[7]=c*p+h*P+u*R,a[2]=d*v+m*b+_*I,a[5]=d*f+m*x+_*A,a[8]=d*p+m*P+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*s*c-r*a*h+r*s*l+n*a*c-n*o*l}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8],u=h*o-s*c,d=s*l-h*a,m=c*a-o*l,_=t*u+r*d+n*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=u*v,e[1]=(n*c-h*r)*v,e[2]=(s*r-n*o)*v,e[3]=d*v,e[4]=(h*t-n*l)*v,e[5]=(n*a-s*t)*v,e[6]=m*v,e[7]=(r*l-c*t)*v,e[8]=(o*t-r*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(r*l,r*c,-r*(l*o+c*s)+o+e,-n*c,n*l,-n*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Ns.makeScale(e,t)),this}rotate(e){return this.premultiply(Ns.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ns.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ns=new Xe;function nc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ra(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function C0(){const i=ra("canvas");return i.style.display="block",i}const ac={};function mn(i){i in ac||(ac[i]=!0,console.warn(i))}const sc=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),oc=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ia={[Sr]:{transfer:Zn,primaries:Qn,toReference:i=>i,fromReference:i=>i},[At]:{transfer:ct,primaries:Qn,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Jn]:{transfer:Zn,primaries:$n,toReference:i=>i.applyMatrix3(oc),fromReference:i=>i.applyMatrix3(sc)},[Ls]:{transfer:ct,primaries:$n,toReference:i=>i.convertSRGBToLinear().applyMatrix3(oc),fromReference:i=>i.applyMatrix3(sc).convertLinearToSRGB()}},P0=new Set([Sr,Jn]),at={enabled:!0,_workingColorSpace:Sr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!P0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const r=ia[e].toReference,n=ia[t].fromReference;return n(r(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ia[i].primaries},getTransfer:function(i){return i===Jt?Zn:ia[i].transfer}};function Ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Pi;class lc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pi===void 0&&(Pi=ra("canvas")),Pi.width=e.width,Pi.height=e.height;const r=Pi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Pi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ra("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),a=n.data;for(let o=0;o<a.length;o++)a[o]=Ci(a[o]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Ci(t[r]/255)*255):t[r]=Ci(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let L0=0;class cc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=Ri(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let o=0,s=n.length;o<s;o++)n[o].isDataTexture?a.push(Fs(n[o].image)):a.push(Fs(n[o]))}else a=Fs(n);r.url=a}return t||(e.images[this.uuid]=r),r}}function Fs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let D0=0;class Wt extends ii{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,r=ar,n=ar,a=Kt,o=hn,s=sr,l=Br,c=Wt.DEFAULT_ANISOTROPY,h=Jt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Ri(),this.name="",this.source=new cc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(mn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ri?At:Jt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_l)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ss:e.x=e.x-Math.floor(e.x);break;case ar:e.x=e.x<0?0:1;break;case Ms:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ss:e.y=e.y-Math.floor(e.y);break;case ar:e.y=e.y<0?0:1;break;case Ms:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return mn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===At?ri:Zl}set encoding(e){mn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ri?At:Jt}}Wt.DEFAULT_IMAGE=null,Wt.DEFAULT_MAPPING=_l,Wt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,r=0,n=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*n+o[12]*a,this.y=o[1]*t+o[5]*r+o[9]*n+o[13]*a,this.z=o[2]*t+o[6]*r+o[10]*n+o[14]*a,this.w=o[3]*t+o[7]*r+o[11]*n+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,a;const o=e.elements,s=o[0],l=o[4],c=o[8],h=o[1],u=o[5],d=o[9],m=o[2],_=o[6],v=o[10];if(Math.abs(l-h)<.01&&Math.abs(c-m)<.01&&Math.abs(d-_)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+m)<.1&&Math.abs(d+_)<.1&&Math.abs(s+u+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const p=(s+1)/2,b=(u+1)/2,x=(v+1)/2,P=(l+h)/4,I=(c+m)/4,A=(d+_)/4;return p>b&&p>x?p<.01?(r=0,n=.707106781,a=.707106781):(r=Math.sqrt(p),n=P/r,a=I/r):b>x?b<.01?(r=.707106781,n=0,a=.707106781):(n=Math.sqrt(b),r=P/n,a=A/n):x<.01?(r=.707106781,n=.707106781,a=0):(a=Math.sqrt(x),r=I/a,n=A/a),this.set(r,n,a,t),this}let f=Math.sqrt((_-d)*(_-d)+(c-m)*(c-m)+(h-l)*(h-l));return Math.abs(f)<.001&&(f=1),this.x=(_-d)/f,this.y=(c-m)/f,this.z=(h-l)/f,this.w=Math.acos((s+u+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class I0 extends ii{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const n={width:e,height:t,depth:1};r.encoding!==void 0&&(mn("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===ri?At:Jt),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new Wt(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends I0{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class hc extends Wt{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class U0 extends Wt{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kr{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,a,o,s){let l=r[n+0],c=r[n+1],h=r[n+2],u=r[n+3];const d=a[o+0],m=a[o+1],_=a[o+2],v=a[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(s===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(u!==v||l!==d||c!==m||h!==_){let f=1-s;const p=l*d+c*m+h*_+u*v,b=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const I=Math.sqrt(x),A=Math.atan2(I,p*b);f=Math.sin(f*A)/I,s=Math.sin(s*A)/I}const P=s*b;if(l=l*f+d*P,c=c*f+m*P,h=h*f+_*P,u=u*f+v*P,f===1-s){const I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,r,n,a,o){const s=r[n],l=r[n+1],c=r[n+2],h=r[n+3],u=a[o],d=a[o+1],m=a[o+2],_=a[o+3];return e[t]=s*_+h*u+l*m-c*d,e[t+1]=l*_+h*d+c*u-s*m,e[t+2]=c*_+h*m+s*d-l*u,e[t+3]=h*_-s*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,n=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(r/2),h=s(n/2),u=s(a/2),d=l(r/2),m=l(n/2),_=l(a/2);switch(o){case"XYZ":this._x=d*h*u+c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u-d*m*_;break;case"YXZ":this._x=d*h*u+c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u+d*m*_;break;case"ZXY":this._x=d*h*u-c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u-d*m*_;break;case"ZYX":this._x=d*h*u-c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u+d*m*_;break;case"YZX":this._x=d*h*u+c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u-d*m*_;break;case"XZY":this._x=d*h*u-c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],a=t[8],o=t[1],s=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=r+s+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(a-c)*m,this._z=(o-n)*m}else if(r>s&&r>u){const m=2*Math.sqrt(1+r-s-u);this._w=(h-l)/m,this._x=.25*m,this._y=(n+o)/m,this._z=(a+c)/m}else if(s>u){const m=2*Math.sqrt(1+s-r-u);this._w=(a-c)/m,this._x=(n+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-r-s);this._w=(o-n)/m,this._x=(a+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,a=e._z,o=e._w,s=t._x,l=t._y,c=t._z,h=t._w;return this._x=r*h+o*s+n*c-a*l,this._y=n*h+o*l+a*s-r*c,this._z=a*h+o*c+r*l-n*s,this._w=o*h-r*s-n*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,n=this._y,a=this._z,o=this._w;let s=o*e._w+r*e._x+n*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=r,this._y=n,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*r+t*this._x,this._y=m*n+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,s),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=r*u+this._x*d,this._y=n*u+this._y*d,this._z=a*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(n),r*Math.sin(a),r*Math.cos(a),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,r=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*n,this.y=a[1]*t+a[4]*r+a[7]*n,this.z=a[2]*t+a[5]*r+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,a=e.elements,o=1/(a[3]*t+a[7]*r+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*n+a[12])*o,this.y=(a[1]*t+a[5]*r+a[9]*n+a[13])*o,this.z=(a[2]*t+a[6]*r+a[10]*n+a[14])*o,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*n-s*r),h=2*(s*t-a*n),u=2*(a*r-o*t);return this.x=t+l*c+o*u-s*h,this.y=r+l*h+s*c-a*u,this.z=n+l*u+a*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*n,this.y=a[1]*t+a[5]*r+a[9]*n,this.z=a[2]*t+a[6]*r+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=n*l-a*s,this.y=a*o-r*l,this.z=r*s-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return zs.copy(this).projectOnVector(e),this.sub(zs)}reflect(e){return this.sub(zs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Lt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zs=new F,uc=new kr;class gn{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(or.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(or.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=or.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,or):or.fromBufferAttribute(a,o),or.applyMatrix4(e.matrixWorld),this.expandByPoint(or);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),na.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),na.copy(r.boundingBox)),na.applyMatrix4(e.matrixWorld),this.union(na)}const n=e.children;for(let a=0,o=n.length;a<o;a++)this.expandByObject(n[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,or),or.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_n),aa.subVectors(this.max,_n),Li.subVectors(e.a,_n),Di.subVectors(e.b,_n),Ii.subVectors(e.c,_n),Vr.subVectors(Di,Li),Wr.subVectors(Ii,Di),ai.subVectors(Li,Ii);let t=[0,-Vr.z,Vr.y,0,-Wr.z,Wr.y,0,-ai.z,ai.y,Vr.z,0,-Vr.x,Wr.z,0,-Wr.x,ai.z,0,-ai.x,-Vr.y,Vr.x,0,-Wr.y,Wr.x,0,-ai.y,ai.x,0];return!Bs(t,Li,Di,Ii,aa)||(t=[1,0,0,0,1,0,0,0,1],!Bs(t,Li,Di,Ii,aa))?!1:(sa.crossVectors(Vr,Wr),t=[sa.x,sa.y,sa.z],Bs(t,Li,Di,Ii,aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,or).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(or).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Er),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Er=[new F,new F,new F,new F,new F,new F,new F,new F],or=new F,na=new gn,Li=new F,Di=new F,Ii=new F,Vr=new F,Wr=new F,ai=new F,_n=new F,aa=new F,sa=new F,si=new F;function Bs(i,e,t,r,n){for(let a=0,o=i.length-3;a<=o;a+=3){si.fromArray(i,a);const s=n.x*Math.abs(si.x)+n.y*Math.abs(si.y)+n.z*Math.abs(si.z),l=e.dot(si),c=t.dot(si),h=r.dot(si);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>s)return!1}return!0}const N0=new gn,vn=new F,Hs=new F;class Gs{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):N0.setFromPoints(e).getCenter(r);let n=0;for(let a=0,o=e.length;a<o;a++)n=Math.max(n,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vn.subVectors(e,this.center);const t=vn.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(vn,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vn.copy(e.center).add(Hs)),this.expandByPoint(vn.copy(e.center).sub(Hs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const br=new F,ks=new F,oa=new F,jr=new F,Vs=new F,la=new F,Ws=new F;class js{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,br)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=br.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(br.copy(this.origin).addScaledVector(this.direction,t),br.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){ks.copy(e).add(t).multiplyScalar(.5),oa.copy(t).sub(e).normalize(),jr.copy(this.origin).sub(ks);const a=e.distanceTo(t)*.5,o=-this.direction.dot(oa),s=jr.dot(this.direction),l=-jr.dot(oa),c=jr.lengthSq(),h=Math.abs(1-o*o);let u,d,m,_;if(h>0)if(u=o*l-s,d=o*s-l,_=a*h,u>=0)if(d>=-_)if(d<=_){const v=1/h;u*=v,d*=v,m=u*(u+o*d+2*s)+d*(o*u+d+2*l)+c}else d=a,u=Math.max(0,-(o*d+s)),m=-u*u+d*(d+2*l)+c;else d=-a,u=Math.max(0,-(o*d+s)),m=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-o*a+s)),d=u>0?-a:Math.min(Math.max(-a,-l),a),m=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-a,-l),a),m=d*(d+2*l)+c):(u=Math.max(0,-(o*a+s)),d=u>0?a:Math.min(Math.max(-a,-l),a),m=-u*u+d*(d+2*l)+c);else d=o>0?-a:a,u=Math.max(0,-(o*d+s)),m=-u*u+d*(d+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(ks).addScaledVector(oa,d),m}intersectSphere(e,t){br.subVectors(e.center,this.origin);const r=br.dot(this.direction),n=br.dot(br)-r*r,a=e.radius*e.radius;if(n>a)return null;const o=Math.sqrt(a-n),s=r-o,l=r+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,a,o,s,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(r=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(r=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(a=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),r>o||a>n||((a>r||isNaN(r))&&(r=a),(o<n||isNaN(n))&&(n=o),u>=0?(s=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(s=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),r>l||s>n)||((s>r||r!==r)&&(r=s),(l<n||n!==n)&&(n=l),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,br)!==null}intersectTriangle(e,t,r,n,a){Vs.subVectors(t,e),la.subVectors(r,e),Ws.crossVectors(Vs,la);let o=this.direction.dot(Ws),s;if(o>0){if(n)return null;s=1}else if(o<0)s=-1,o=-o;else return null;jr.subVectors(this.origin,e);const l=s*this.direction.dot(la.crossVectors(jr,la));if(l<0)return null;const c=s*this.direction.dot(Vs.cross(jr));if(c<0||l+c>o)return null;const h=-s*jr.dot(Ws);return h<0?null:this.at(h/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,r,n,a,o,s,l,c,h,u,d,m,_,v,f){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,n,a,o,s,l,c,h,u,d,m,_,v,f)}set(e,t,r,n,a,o,s,l,c,h,u,d,m,_,v,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=r,p[12]=n,p[1]=a,p[5]=o,p[9]=s,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=_,p[11]=v,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/Ui.setFromMatrixColumn(e,0).length(),a=1/Ui.setFromMatrixColumn(e,1).length(),o=1/Ui.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*o,t[9]=r[9]*o,t[10]=r[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,a=e.z,o=Math.cos(r),s=Math.sin(r),l=Math.cos(n),c=Math.sin(n),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const d=o*h,m=o*u,_=s*h,v=s*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+_*c,t[5]=d-v*c,t[9]=-s*l,t[2]=v-d*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,m=l*u,_=c*h,v=c*u;t[0]=d+v*s,t[4]=_*s-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-s,t[2]=m*s-_,t[6]=v+d*s,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,m=l*u,_=c*h,v=c*u;t[0]=d-v*s,t[4]=-o*u,t[8]=_+m*s,t[1]=m+_*s,t[5]=o*h,t[9]=v-d*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,m=o*u,_=s*h,v=s*u;t[0]=l*h,t[4]=_*c-m,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=m*c-_,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,_=s*l,v=s*c;t[0]=l*h,t[4]=v-d*u,t[8]=_*u+m,t[1]=u,t[5]=o*h,t[9]=-s*h,t[2]=-c*h,t[6]=m*u+_,t[10]=d-v*u}else if(e.order==="XZY"){const d=o*l,m=o*c,_=s*l,v=s*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=o*h,t[9]=m*u-_,t[2]=_*u-m,t[6]=s*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(O0,e,F0)}lookAt(e,t,r){const n=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),Xr.crossVectors(r,jt),Xr.lengthSq()===0&&(Math.abs(r.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),Xr.crossVectors(r,jt)),Xr.normalize(),ca.crossVectors(jt,Xr),n[0]=Xr.x,n[4]=ca.x,n[8]=jt.x,n[1]=Xr.y,n[5]=ca.y,n[9]=jt.y,n[2]=Xr.z,n[6]=ca.z,n[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,a=this.elements,o=r[0],s=r[4],l=r[8],c=r[12],h=r[1],u=r[5],d=r[9],m=r[13],_=r[2],v=r[6],f=r[10],p=r[14],b=r[3],x=r[7],P=r[11],I=r[15],A=n[0],R=n[4],Y=n[8],S=n[12],E=n[1],j=n[5],V=n[9],oe=n[13],D=n[2],B=n[6],q=n[10],Z=n[14],J=n[3],K=n[7],ie=n[11],ae=n[15];return a[0]=o*A+s*E+l*D+c*J,a[4]=o*R+s*j+l*B+c*K,a[8]=o*Y+s*V+l*q+c*ie,a[12]=o*S+s*oe+l*Z+c*ae,a[1]=h*A+u*E+d*D+m*J,a[5]=h*R+u*j+d*B+m*K,a[9]=h*Y+u*V+d*q+m*ie,a[13]=h*S+u*oe+d*Z+m*ae,a[2]=_*A+v*E+f*D+p*J,a[6]=_*R+v*j+f*B+p*K,a[10]=_*Y+v*V+f*q+p*ie,a[14]=_*S+v*oe+f*Z+p*ae,a[3]=b*A+x*E+P*D+I*J,a[7]=b*R+x*j+P*B+I*K,a[11]=b*Y+x*V+P*q+I*ie,a[15]=b*S+x*oe+P*Z+I*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14],_=e[3],v=e[7],f=e[11],p=e[15];return _*(+a*l*u-n*c*u-a*s*d+r*c*d+n*s*m-r*l*m)+v*(+t*l*m-t*c*d+a*o*d-n*o*m+n*c*h-a*l*h)+f*(+t*c*u-t*s*m-a*o*u+r*o*m+a*s*h-r*c*h)+p*(-n*s*h-t*l*u+t*s*d+n*o*u-r*o*d+r*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],_=e[12],v=e[13],f=e[14],p=e[15],b=u*f*c-v*d*c+v*l*m-s*f*m-u*l*p+s*d*p,x=_*d*c-h*f*c-_*l*m+o*f*m+h*l*p-o*d*p,P=h*v*c-_*u*c+_*s*m-o*v*m-h*s*p+o*u*p,I=_*u*l-h*v*l-_*s*d+o*v*d+h*s*f-o*u*f,A=t*b+r*x+n*P+a*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=b*R,e[1]=(v*d*a-u*f*a-v*n*m+r*f*m+u*n*p-r*d*p)*R,e[2]=(s*f*a-v*l*a+v*n*c-r*f*c-s*n*p+r*l*p)*R,e[3]=(u*l*a-s*d*a-u*n*c+r*d*c+s*n*m-r*l*m)*R,e[4]=x*R,e[5]=(h*f*a-_*d*a+_*n*m-t*f*m-h*n*p+t*d*p)*R,e[6]=(_*l*a-o*f*a-_*n*c+t*f*c+o*n*p-t*l*p)*R,e[7]=(o*d*a-h*l*a+h*n*c-t*d*c-o*n*m+t*l*m)*R,e[8]=P*R,e[9]=(_*u*a-h*v*a-_*r*m+t*v*m+h*r*p-t*u*p)*R,e[10]=(o*v*a-_*s*a+_*r*c-t*v*c-o*r*p+t*s*p)*R,e[11]=(h*s*a-o*u*a-h*r*c+t*u*c+o*r*m-t*s*m)*R,e[12]=I*R,e[13]=(h*v*n-_*u*n+_*r*d-t*v*d-h*r*f+t*u*f)*R,e[14]=(_*s*n-o*v*n-_*r*l+t*v*l+o*r*f-t*s*f)*R,e[15]=(o*u*n-h*s*n+h*r*l-t*u*l-o*r*d+t*s*d)*R,this}scale(e){const t=this.elements,r=e.x,n=e.y,a=e.z;return t[0]*=r,t[4]*=n,t[8]*=a,t[1]*=r,t[5]*=n,t[9]*=a,t[2]*=r,t[6]*=n,t[10]*=a,t[3]*=r,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),a=1-r,o=e.x,s=e.y,l=e.z,c=a*o,h=a*s;return this.set(c*o+r,c*s-n*l,c*l+n*s,0,c*s+n*l,h*s+r,h*l-n*o,0,c*l-n*s,h*l+n*o,a*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,a,o){return this.set(1,r,a,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,c=a+a,h=o+o,u=s+s,d=a*c,m=a*h,_=a*u,v=o*h,f=o*u,p=s*u,b=l*c,x=l*h,P=l*u,I=r.x,A=r.y,R=r.z;return n[0]=(1-(v+p))*I,n[1]=(m+P)*I,n[2]=(_-x)*I,n[3]=0,n[4]=(m-P)*A,n[5]=(1-(d+p))*A,n[6]=(f+b)*A,n[7]=0,n[8]=(_+x)*R,n[9]=(f-b)*R,n[10]=(1-(d+v))*R,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let a=Ui.set(n[0],n[1],n[2]).length();const o=Ui.set(n[4],n[5],n[6]).length(),s=Ui.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],lr.copy(this);const l=1/a,c=1/o,h=1/s;return lr.elements[0]*=l,lr.elements[1]*=l,lr.elements[2]*=l,lr.elements[4]*=c,lr.elements[5]*=c,lr.elements[6]*=c,lr.elements[8]*=h,lr.elements[9]*=h,lr.elements[10]*=h,t.setFromRotationMatrix(lr),r.x=a,r.y=o,r.z=s,this}makePerspective(e,t,r,n,a,o,s=Mr){const l=this.elements,c=2*a/(t-e),h=2*a/(r-n),u=(t+e)/(t-e),d=(r+n)/(r-n);let m,_;if(s===Mr)m=-(o+a)/(o-a),_=-2*o*a/(o-a);else if(s===ea)m=-o/(o-a),_=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,n,a,o,s=Mr){const l=this.elements,c=1/(t-e),h=1/(r-n),u=1/(o-a),d=(t+e)*c,m=(r+n)*h;let _,v;if(s===Mr)_=(o+a)*u,v=-2*u;else if(s===ea)_=a*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ui=new F,lr=new _t,O0=new F(0,0,0),F0=new F(1,1,1),Xr=new F,ca=new F,jt=new F,dc=new _t,pc=new kr;class wn{constructor(e=0,t=0,r=0,n=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,a=n[0],o=n[4],s=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],m=n[10];switch(t){case"XYZ":this._y=Math.asin(Lt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return dc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dc,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pc.setFromEuler(this),this.setFromQuaternion(pc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class Xs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let z0=0;const fc=new F,Ni=new kr,Tr=new _t,ha=new F,xn=new F,B0=new F,H0=new kr,mc=new F(1,0,0),gc=new F(0,1,0),_c=new F(0,0,1),G0={type:"added"},k0={type:"removed"};class Ct extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new F,t=new wn,r=new kr,n=new F(1,1,1);function a(){r.setFromEuler(t,!1)}function o(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new _t},normalMatrix:{value:new Xe}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.premultiply(Ni),this}rotateX(e){return this.rotateOnAxis(mc,e)}rotateY(e){return this.rotateOnAxis(gc,e)}rotateZ(e){return this.rotateOnAxis(_c,e)}translateOnAxis(e,t){return fc.copy(e).applyQuaternion(this.quaternion),this.position.add(fc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mc,e)}translateY(e){return this.translateOnAxis(gc,e)}translateZ(e){return this.translateOnAxis(_c,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?ha.copy(e):ha.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),xn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tr.lookAt(xn,ha,this.up):Tr.lookAt(ha,xn,this.up),this.quaternion.setFromRotationMatrix(Tr),n&&(Tr.extractRotation(n.matrixWorld),Ni.setFromRotationMatrix(Tr),this.quaternion.premultiply(Ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(G0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(k0)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const a=this.children[r].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xn,e,B0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xn,H0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++){const a=t[r];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let a=0,o=n.length;a<o;a++){const s=n[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];a(e.shapes,u)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));n.material=s}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let s=0;s<this.children.length;s++)n.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];n.animations.push(a(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),m=o(e.animations),_=o(e.nodes);s.length>0&&(r.geometries=s),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),h.length>0&&(r.images=h),u.length>0&&(r.shapes=u),d.length>0&&(r.skeletons=d),m.length>0&&(r.animations=m),_.length>0&&(r.nodes=_)}return r.object=n,r;function o(s){const l=[];for(const c in s){const h=s[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}Ct.DEFAULT_UP=new F(0,1,0),Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cr=new F,Rr=new F,qs=new F,Ar=new F,Oi=new F,Fi=new F,vc=new F,Ys=new F,Ks=new F,Js=new F;let ua=!1;class hr{constructor(e=new F,t=new F,r=new F){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),cr.subVectors(e,t),n.cross(cr);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,r,n,a){cr.subVectors(n,t),Rr.subVectors(r,t),qs.subVectors(e,t);const o=cr.dot(cr),s=cr.dot(Rr),l=cr.dot(qs),c=Rr.dot(Rr),h=Rr.dot(qs),u=o*c-s*s;if(u===0)return a.set(0,0,0),null;const d=1/u,m=(c*l-s*h)*d,_=(o*h-s*l)*d;return a.set(1-m-_,_,m)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,Ar)===null?!1:Ar.x>=0&&Ar.y>=0&&Ar.x+Ar.y<=1}static getUV(e,t,r,n,a,o,s,l){return ua===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ua=!0),this.getInterpolation(e,t,r,n,a,o,s,l)}static getInterpolation(e,t,r,n,a,o,s,l){return this.getBarycoord(e,t,r,n,Ar)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ar.x),l.addScaledVector(o,Ar.y),l.addScaledVector(s,Ar.z),l)}static isFrontFacing(e,t,r,n){return cr.subVectors(r,t),Rr.subVectors(e,t),cr.cross(Rr).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cr.subVectors(this.c,this.b),Rr.subVectors(this.a,this.b),cr.cross(Rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hr.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,n,a){return ua===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ua=!0),hr.getInterpolation(e,this.a,this.b,this.c,t,r,n,a)}getInterpolation(e,t,r,n,a){return hr.getInterpolation(e,this.a,this.b,this.c,t,r,n,a)}containsPoint(e){return hr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,a=this.c;let o,s;Oi.subVectors(n,r),Fi.subVectors(a,r),Ys.subVectors(e,r);const l=Oi.dot(Ys),c=Fi.dot(Ys);if(l<=0&&c<=0)return t.copy(r);Ks.subVectors(e,n);const h=Oi.dot(Ks),u=Fi.dot(Ks);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(r).addScaledVector(Oi,o);Js.subVectors(e,a);const m=Oi.dot(Js),_=Fi.dot(Js);if(_>=0&&m<=_)return t.copy(a);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return s=c/(c-_),t.copy(r).addScaledVector(Fi,s);const f=h*_-m*u;if(f<=0&&u-h>=0&&m-_>=0)return vc.subVectors(a,n),s=(u-h)/(u-h+(m-_)),t.copy(n).addScaledVector(vc,s);const p=1/(f+v+d);return o=v*p,s=d*p,t.copy(r).addScaledVector(Oi,o).addScaledVector(Fi,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qr={h:0,s:0,l:0},da={h:0,s:0,l:0};function Zs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Je{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,r,n=at.workingColorSpace){return this.r=e,this.g=t,this.b=r,at.toWorkingColorSpace(this,n),this}setHSL(e,t,r,n=at.workingColorSpace){if(e=Is(e,1),t=Lt(t,0,1),r=Lt(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,o=2*r-a;this.r=Zs(o,a,e+1/3),this.g=Zs(o,a,e),this.b=Zs(o,a,e-1/3)}return at.toWorkingColorSpace(this,n),this}setStyle(e,t=At){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=n[1],s=n[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const r=wc[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return at.fromWorkingColorSpace(Dt.copy(this),e),Math.round(Lt(Dt.r*255,0,255))*65536+Math.round(Lt(Dt.g*255,0,255))*256+Math.round(Lt(Dt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(Dt.copy(this),t);const r=Dt.r,n=Dt.g,a=Dt.b,o=Math.max(r,n,a),s=Math.min(r,n,a);let l,c;const h=(s+o)/2;if(s===o)l=0,c=0;else{const u=o-s;switch(c=h<=.5?u/(o+s):u/(2-o-s),o){case r:l=(n-a)/u+(n<a?6:0);break;case n:l=(a-r)/u+2;break;case a:l=(r-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=At){at.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,r=Dt.g,n=Dt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(qr),this.setHSL(qr.h+e,qr.s+t,qr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(qr),e.getHSL(da);const r=fn(qr.h,da.h,t),n=fn(qr.s,da.s,t),a=fn(qr.l,da.l,t);return this.setHSL(r,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,n=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*n,this.g=a[1]*t+a[4]*r+a[7]*n,this.b=a[2]*t+a[5]*r+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Je;Je.NAMES=wc;let V0=0;class yn extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=Si,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_s,this.blendDst=vs,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Yn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(r.blending=this.blending),this.side!==Or&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==_s&&(r.blendSrc=this.blendSrc),this.blendDst!==vs&&(r.blendDst=this.blendDst),this.blendEquation!==$r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Yn&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$l&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(t){const a=n(e.textures),o=n(e.images);a.length>0&&(r.textures=a),o.length>0&&(r.images=o)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let a=0;a!==n;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qs extends yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ws,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new F,pa=new De;class mr{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=tc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Gr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)pa.fromBufferAttribute(this,t),pa.applyMatrix3(e),this.setXY(t,pa.x,pa.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ai(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ft(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,a){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array),n=Ft(n,this.array),a=Ft(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tc&&(e.usage=this.usage),e}}class xc extends mr{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class yc extends mr{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Xt extends mr{constructor(e,t,r){super(new Float32Array(e),t,r)}}let W0=0;const Zt=new _t,$s=new Ct,zi=new F,qt=new gn,Sn=new gn,Tt=new F;class Cr extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nc(e)?yc:xc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new Xe().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,r){return Zt.makeTranslation(e,t,r),this.applyMatrix4(Zt),this}scale(e,t,r){return Zt.makeScale(e,t,r),this.applyMatrix4(Zt),this}lookAt(e){return $s.lookAt(e),$s.updateMatrix(),this.applyMatrix4($s.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){const t=[];for(let r=0,n=e.length;r<n;r++){const a=e[r];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Xt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const a=t[r];qt.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const r=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(qt.min,Sn.min),qt.expandByPoint(Tt),Tt.addVectors(qt.max,Sn.max),qt.expandByPoint(Tt)):(qt.expandByPoint(Sn.min),qt.expandByPoint(Sn.max))}qt.getCenter(r);let n=0;for(let a=0,o=e.count;a<o;a++)Tt.fromBufferAttribute(e,a),n=Math.max(n,r.distanceToSquared(Tt));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],l=this.morphTargetsRelative;for(let c=0,h=s.count;c<h;c++)Tt.fromBufferAttribute(s,c),l&&(zi.fromBufferAttribute(e,c),Tt.add(zi)),n=Math.max(n,r.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,n=t.position.array,a=t.normal.array,o=t.uv.array,s=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mr(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<s;E++)c[E]=new F,h[E]=new F;const u=new F,d=new F,m=new F,_=new De,v=new De,f=new De,p=new F,b=new F;function x(E,j,V){u.fromArray(n,E*3),d.fromArray(n,j*3),m.fromArray(n,V*3),_.fromArray(o,E*2),v.fromArray(o,j*2),f.fromArray(o,V*2),d.sub(u),m.sub(u),v.sub(_),f.sub(_);const oe=1/(v.x*f.y-f.x*v.y);isFinite(oe)&&(p.copy(d).multiplyScalar(f.y).addScaledVector(m,-v.y).multiplyScalar(oe),b.copy(m).multiplyScalar(v.x).addScaledVector(d,-f.x).multiplyScalar(oe),c[E].add(p),c[j].add(p),c[V].add(p),h[E].add(b),h[j].add(b),h[V].add(b))}let P=this.groups;P.length===0&&(P=[{start:0,count:r.length}]);for(let E=0,j=P.length;E<j;++E){const V=P[E],oe=V.start,D=V.count;for(let B=oe,q=oe+D;B<q;B+=3)x(r[B+0],r[B+1],r[B+2])}const I=new F,A=new F,R=new F,Y=new F;function S(E){R.fromArray(a,E*3),Y.copy(R);const j=c[E];I.copy(j),I.sub(R.multiplyScalar(R.dot(j))).normalize(),A.crossVectors(Y,j);const V=A.dot(h[E])<0?-1:1;l[E*4]=I.x,l[E*4+1]=I.y,l[E*4+2]=I.z,l[E*4+3]=V}for(let E=0,j=P.length;E<j;++E){const V=P[E],oe=V.start,D=V.count;for(let B=oe,q=oe+D;B<q;B+=3)S(r[B+0]),S(r[B+1]),S(r[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new mr(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let d=0,m=r.count;d<m;d++)r.setXYZ(d,0,0,0);const n=new F,a=new F,o=new F,s=new F,l=new F,c=new F,h=new F,u=new F;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),v=e.getX(d+1),f=e.getX(d+2);n.fromBufferAttribute(t,_),a.fromBufferAttribute(t,v),o.fromBufferAttribute(t,f),h.subVectors(o,a),u.subVectors(n,a),h.cross(u),s.fromBufferAttribute(r,_),l.fromBufferAttribute(r,v),c.fromBufferAttribute(r,f),s.add(h),l.add(h),c.add(h),r.setXYZ(_,s.x,s.y,s.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)n.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,a),u.subVectors(n,a),h.cross(u),r.setXYZ(d+0,h.x,h.y,h.z),r.setXYZ(d+1,h.x,h.y,h.z),r.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(s,l){const c=s.array,h=s.itemSize,u=s.normalized,d=new c.constructor(l.length*h);let m=0,_=0;for(let v=0,f=l.length;v<f;v++){s.isInterleavedBufferAttribute?m=l[v]*s.data.stride+s.offset:m=l[v]*h;for(let p=0;p<h;p++)d[_++]=c[m++]}return new mr(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Cr,r=this.index.array,n=this.attributes;for(const s in n){const l=n[s],c=e(l,r);t.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=e(d,r);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(n[l]=h,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],u=a[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sc=new _t,oi=new js,fa=new Gs,Mc=new F,Bi=new F,Hi=new F,Gi=new F,eo=new F,ma=new F,ga=new De,_a=new De,va=new De,Ec=new F,bc=new F,Tc=new F,wa=new F,xa=new F;class gr extends Ct{constructor(e=new Cr,t=new Qs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,a=r.morphAttributes.position,o=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const s=this.morphTargetInfluences;if(a&&s){ma.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=s[l],u=a[l];h!==0&&(eo.fromBufferAttribute(u,e),o?ma.addScaledVector(eo,h):ma.addScaledVector(eo.sub(t),h))}t.add(ma)}return t}raycast(e,t){const r=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),fa.copy(r.boundingSphere),fa.applyMatrix4(a),oi.copy(e.ray).recast(e.near),!(fa.containsPoint(oi.origin)===!1&&(oi.intersectSphere(fa,Mc)===null||oi.origin.distanceToSquared(Mc)>(e.far-e.near)**2))&&(Sc.copy(a).invert(),oi.copy(e.ray).applyMatrix4(Sc),!(r.boundingBox!==null&&oi.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,oi)))}_computeIntersections(e,t,r){let n;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,m=a.drawRange;if(s!==null)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const f=d[_],p=o[f.materialIndex],b=Math.max(f.start,m.start),x=Math.min(s.count,Math.min(f.start+f.count,m.start+m.count));for(let P=b,I=x;P<I;P+=3){const A=s.getX(P),R=s.getX(P+1),Y=s.getX(P+2);n=ya(this,p,e,r,c,h,u,A,R,Y),n&&(n.faceIndex=Math.floor(P/3),n.face.materialIndex=f.materialIndex,t.push(n))}}else{const _=Math.max(0,m.start),v=Math.min(s.count,m.start+m.count);for(let f=_,p=v;f<p;f+=3){const b=s.getX(f),x=s.getX(f+1),P=s.getX(f+2);n=ya(this,o,e,r,c,h,u,b,x,P),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const f=d[_],p=o[f.materialIndex],b=Math.max(f.start,m.start),x=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let P=b,I=x;P<I;P+=3){const A=P,R=P+1,Y=P+2;n=ya(this,p,e,r,c,h,u,A,R,Y),n&&(n.faceIndex=Math.floor(P/3),n.face.materialIndex=f.materialIndex,t.push(n))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let f=_,p=v;f<p;f+=3){const b=f,x=f+1,P=f+2;n=ya(this,o,e,r,c,h,u,b,x,P),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}}}}function j0(i,e,t,r,n,a,o,s){let l;if(e.side===Gt?l=r.intersectTriangle(o,a,n,!0,s):l=r.intersectTriangle(n,a,o,e.side===Or,s),l===null)return null;xa.copy(s),xa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(xa);return c<t.near||c>t.far?null:{distance:c,point:xa.clone(),object:i}}function ya(i,e,t,r,n,a,o,s,l,c){i.getVertexPosition(s,Bi),i.getVertexPosition(l,Hi),i.getVertexPosition(c,Gi);const h=j0(i,e,t,r,Bi,Hi,Gi,wa);if(h){n&&(ga.fromBufferAttribute(n,s),_a.fromBufferAttribute(n,l),va.fromBufferAttribute(n,c),h.uv=hr.getInterpolation(wa,Bi,Hi,Gi,ga,_a,va,new De)),a&&(ga.fromBufferAttribute(a,s),_a.fromBufferAttribute(a,l),va.fromBufferAttribute(a,c),h.uv1=hr.getInterpolation(wa,Bi,Hi,Gi,ga,_a,va,new De),h.uv2=h.uv1),o&&(Ec.fromBufferAttribute(o,s),bc.fromBufferAttribute(o,l),Tc.fromBufferAttribute(o,c),h.normal=hr.getInterpolation(wa,Bi,Hi,Gi,Ec,bc,Tc,new F),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));const u={a:s,b:l,c,normal:new F,materialIndex:0};hr.getNormal(Bi,Hi,Gi,u.normal),h.face=u}return h}class ki extends Cr{constructor(e=1,t=1,r=1,n=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:a,depthSegments:o};const s=this;n=Math.floor(n),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,m=0;_("z","y","x",-1,-1,r,t,e,o,a,0),_("z","y","x",1,-1,r,t,-e,o,a,1),_("x","z","y",1,1,e,r,t,n,o,2),_("x","z","y",1,-1,e,r,-t,n,o,3),_("x","y","z",1,-1,e,t,r,n,a,4),_("x","y","z",-1,-1,e,t,-r,n,a,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(u,2));function _(v,f,p,b,x,P,I,A,R,Y,S){const E=P/R,j=I/Y,V=P/2,oe=I/2,D=A/2,B=R+1,q=Y+1;let Z=0,J=0;const K=new F;for(let ie=0;ie<q;ie++){const ae=ie*j-oe;for(let me=0;me<B;me++){const W=me*E-V;K[v]=W*b,K[f]=ae*x,K[p]=D,c.push(K.x,K.y,K.z),K[v]=0,K[f]=0,K[p]=A>0?1:-1,h.push(K.x,K.y,K.z),u.push(me/R),u.push(1-ie/Y),Z+=1}}for(let ie=0;ie<Y;ie++)for(let ae=0;ae<R;ae++){const me=d+ae+B*ie,W=d+ae+B*(ie+1),$=d+(ae+1)+B*(ie+1),ve=d+(ae+1)+B*ie;l.push(me,W,ve),l.push(W,$,ve),J+=6}s.addGroup(m,J,S),m+=J,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vi(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const n=i[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function zt(i){const e={};for(let t=0;t<i.length;t++){const r=Vi(i[t]);for(const n in r)e[n]=r[n]}return e}function X0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Rc(i){return i.getRenderTarget()===null?i.outputColorSpace:at.workingColorSpace}const q0={clone:Vi,merge:zt};var Y0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Y0,this.fragmentShader=K0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vi(e.uniforms),this.uniformsGroups=X0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Ac extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Mr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Qt extends Ac{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pn*2*Math.atan(Math.tan(dn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,n,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(dn*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,a=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*n/l,t-=o.offsetY*r/c,n*=o.width/l,r*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wi=-90,ji=1;class J0 extends Ct{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Qt(Wi,ji,e,t);n.layers=this.layers,this.add(n);const a=new Qt(Wi,ji,e,t);a.layers=this.layers,this.add(a);const o=new Qt(Wi,ji,e,t);o.layers=this.layers,this.add(o);const s=new Qt(Wi,ji,e,t);s.layers=this.layers,this.add(s);const l=new Qt(Wi,ji,e,t);l.layers=this.layers,this.add(l);const c=new Qt(Wi,ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,n,a,o,s,l]=t;for(const c of t)this.remove(c);if(e===Mr)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ea)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(t,a),e.setRenderTarget(r,1,n),e.render(t,o),e.setRenderTarget(r,2,n),e.render(t,s),e.setRenderTarget(r,3,n),e.render(t,l),e.setRenderTarget(r,4,n),e.render(t,c),r.texture.generateMipmaps=v,e.setRenderTarget(r,5,n),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=_,r.texture.needsPMREMUpdate=!0}}class Cc extends Wt{constructor(e,t,r,n,a,o,s,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Mi,super(e,t,r,n,a,o,s,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Z0 extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];t.encoding!==void 0&&(mn("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ri?At:Jt),this.texture=new Cc(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ki(5,5,5),a=new li({name:"CubemapFromEquirect",uniforms:Vi(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gt,blending:Fr});a.uniforms.tEquirect.value=t;const o=new gr(n,a),s=t.minFilter;return t.minFilter===hn&&(t.minFilter=Kt),new J0(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,r,n){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,r,n);e.setRenderTarget(a)}}const to=new F,Q0=new F,$0=new Xe;class Yr{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=to.subVectors(r,t).cross(Q0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(to),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||$0.getNormalMatrix(e),n=this.coplanarPoint(to).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new Gs,Sa=new F;class ro{constructor(e=new Yr,t=new Yr,r=new Yr,n=new Yr,a=new Yr,o=new Yr){this.planes=[e,t,r,n,a,o]}set(e,t,r,n,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(r),s[3].copy(n),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Mr){const r=this.planes,n=e.elements,a=n[0],o=n[1],s=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],m=n[8],_=n[9],v=n[10],f=n[11],p=n[12],b=n[13],x=n[14],P=n[15];if(r[0].setComponents(l-a,d-c,f-m,P-p).normalize(),r[1].setComponents(l+a,d+c,f+m,P+p).normalize(),r[2].setComponents(l+o,d+h,f+_,P+b).normalize(),r[3].setComponents(l-o,d-h,f-_,P-b).normalize(),r[4].setComponents(l-s,d-u,f-v,P-x).normalize(),t===Mr)r[5].setComponents(l+s,d+u,f+v,P+x).normalize();else if(t===ea)r[5].setComponents(s,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(e){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(Sa.x=n.normal.x>0?e.max.x:e.min.x,Sa.y=n.normal.y>0?e.max.y:e.min.y,Sa.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pc(){let i=null,e=!1,t=null,r=null;function n(a,o){t(a,o),r=i.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=i.requestAnimationFrame(n),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function ew(i,e){const t=e.isWebGL2,r=new WeakMap;function n(c,h){const u=c.array,d=c.usage,m=u.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,u,d),c.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function a(c,h,u){const d=h.array,m=h._updateRange,_=h.updateRanges;if(i.bindBuffer(u,c),m.count===-1&&_.length===0&&i.bufferSubData(u,0,d),_.length!==0){for(let v=0,f=_.length;v<f;v++){const p=_[v];t?i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),r.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=r.get(c);h&&(i.deleteBuffer(h.buffer),r.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=r.get(c);(!d||d.version<c.version)&&r.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=r.get(c);if(u===void 0)r.set(c,n(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(u.buffer,c,h),u.version=c.version}}return{get:o,remove:s,update:l}}class io extends Cr{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const a=e/2,o=t/2,s=Math.floor(r),l=Math.floor(n),c=s+1,h=l+1,u=e/s,d=t/l,m=[],_=[],v=[],f=[];for(let p=0;p<h;p++){const b=p*d-o;for(let x=0;x<c;x++){const P=x*u-a;_.push(P,-b,0),v.push(0,0,1),f.push(x/s),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<s;b++){const x=b+c*p,P=b+c*(p+1),I=b+1+c*(p+1),A=b+1+c*p;m.push(x,P,A),m.push(P,I,A)}this.setIndex(m),this.setAttribute("position",new Xt(_,3)),this.setAttribute("normal",new Xt(v,3)),this.setAttribute("uv",new Xt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.widthSegments,e.heightSegments)}}var tw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rw=`#ifdef USE_ALPHAHASH
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
#endif`,iw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aw=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ow=`#ifdef USE_AOMAP
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
#endif`,lw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cw=`#ifdef USE_BATCHING
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
#endif`,hw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,uw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fw=`#ifdef USE_IRIDESCENCE
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
#endif`,mw=`#ifdef USE_BUMPMAP
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
#endif`,gw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_w=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ww=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Mw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ew=`#define PI 3.141592653589793
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
} // validated`,bw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tw=`vec3 transformedNormal = objectNormal;
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
#endif`,Rw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Aw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dw=`
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
}`,Iw=`#ifdef USE_ENVMAP
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
#endif`,Uw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nw=`#ifdef USE_ENVMAP
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
#endif`,Ow=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fw=`#ifdef USE_ENVMAP
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
#endif`,zw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kw=`#ifdef USE_GRADIENTMAP
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
}`,Vw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ww=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qw=`uniform bool receiveShadow;
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
#endif`,Yw=`#ifdef USE_ENVMAP
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
#endif`,Kw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$w=`PhysicalMaterial material;
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
#endif`,ex=`struct PhysicalMaterial {
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
}`,tx=`
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
#endif`,rx=`#if defined( RE_IndirectDiffuse )
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
#endif`,ix=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ax=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ox=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ux=`#if defined( USE_POINTS_UV )
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
#endif`,dx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,px=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mx=`#ifdef USE_MORPHNORMALS
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
#endif`,gx=`#ifdef USE_MORPHTARGETS
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
#endif`,_x=`#ifdef USE_MORPHTARGETS
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
#endif`,vx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mx=`#ifdef USE_NORMALMAP
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
#endif`,Ex=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ax=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Px=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ix=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ux=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ox=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bx=`float getShadowMask() {
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
}`,Hx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gx=`#ifdef USE_SKINNING
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
#endif`,kx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vx=`#ifdef USE_SKINNING
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
#endif`,Wx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yx=`#ifdef USE_TRANSMISSION
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
#endif`,Kx=`#ifdef USE_TRANSMISSION
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
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$x=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ey=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ty=`uniform sampler2D t2D;
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
}`,ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ay=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sy=`#include <common>
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
}`,oy=`#if DEPTH_PACKING == 3200
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
}`,ly=`#define DISTANCE
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
}`,cy=`#define DISTANCE
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
}`,hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dy=`uniform float scale;
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
}`,py=`uniform vec3 diffuse;
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
}`,fy=`#include <common>
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
}`,my=`uniform vec3 diffuse;
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
}`,gy=`#define LAMBERT
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
}`,_y=`#define LAMBERT
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
}`,vy=`#define MATCAP
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
}`,wy=`#define MATCAP
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
}`,xy=`#define NORMAL
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
}`,yy=`#define NORMAL
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
}`,Sy=`#define PHONG
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
}`,My=`#define PHONG
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
}`,Ey=`#define STANDARD
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
}`,by=`#define STANDARD
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
}`,Ty=`#define TOON
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
}`,Ry=`#define TOON
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
}`,Ay=`uniform float size;
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
}`,Cy=`uniform vec3 diffuse;
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
}`,Py=`#include <common>
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
}`,Ly=`uniform vec3 color;
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
}`,Dy=`uniform float rotation;
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
}`,Iy=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:tw,alphahash_pars_fragment:rw,alphamap_fragment:iw,alphamap_pars_fragment:nw,alphatest_fragment:aw,alphatest_pars_fragment:sw,aomap_fragment:ow,aomap_pars_fragment:lw,batching_pars_vertex:cw,batching_vertex:hw,begin_vertex:uw,beginnormal_vertex:dw,bsdfs:pw,iridescence_fragment:fw,bumpmap_pars_fragment:mw,clipping_planes_fragment:gw,clipping_planes_pars_fragment:_w,clipping_planes_pars_vertex:vw,clipping_planes_vertex:ww,color_fragment:xw,color_pars_fragment:yw,color_pars_vertex:Sw,color_vertex:Mw,common:Ew,cube_uv_reflection_fragment:bw,defaultnormal_vertex:Tw,displacementmap_pars_vertex:Rw,displacementmap_vertex:Aw,emissivemap_fragment:Cw,emissivemap_pars_fragment:Pw,colorspace_fragment:Lw,colorspace_pars_fragment:Dw,envmap_fragment:Iw,envmap_common_pars_fragment:Uw,envmap_pars_fragment:Nw,envmap_pars_vertex:Ow,envmap_physical_pars_fragment:Yw,envmap_vertex:Fw,fog_vertex:zw,fog_pars_vertex:Bw,fog_fragment:Hw,fog_pars_fragment:Gw,gradientmap_pars_fragment:kw,lightmap_fragment:Vw,lightmap_pars_fragment:Ww,lights_lambert_fragment:jw,lights_lambert_pars_fragment:Xw,lights_pars_begin:qw,lights_toon_fragment:Kw,lights_toon_pars_fragment:Jw,lights_phong_fragment:Zw,lights_phong_pars_fragment:Qw,lights_physical_fragment:$w,lights_physical_pars_fragment:ex,lights_fragment_begin:tx,lights_fragment_maps:rx,lights_fragment_end:ix,logdepthbuf_fragment:nx,logdepthbuf_pars_fragment:ax,logdepthbuf_pars_vertex:sx,logdepthbuf_vertex:ox,map_fragment:lx,map_pars_fragment:cx,map_particle_fragment:hx,map_particle_pars_fragment:ux,metalnessmap_fragment:dx,metalnessmap_pars_fragment:px,morphcolor_vertex:fx,morphnormal_vertex:mx,morphtarget_pars_vertex:gx,morphtarget_vertex:_x,normal_fragment_begin:vx,normal_fragment_maps:wx,normal_pars_fragment:xx,normal_pars_vertex:yx,normal_vertex:Sx,normalmap_pars_fragment:Mx,clearcoat_normal_fragment_begin:Ex,clearcoat_normal_fragment_maps:bx,clearcoat_pars_fragment:Tx,iridescence_pars_fragment:Rx,opaque_fragment:Ax,packing:Cx,premultiplied_alpha_fragment:Px,project_vertex:Lx,dithering_fragment:Dx,dithering_pars_fragment:Ix,roughnessmap_fragment:Ux,roughnessmap_pars_fragment:Nx,shadowmap_pars_fragment:Ox,shadowmap_pars_vertex:Fx,shadowmap_vertex:zx,shadowmask_pars_fragment:Bx,skinbase_vertex:Hx,skinning_pars_vertex:Gx,skinning_vertex:kx,skinnormal_vertex:Vx,specularmap_fragment:Wx,specularmap_pars_fragment:jx,tonemapping_fragment:Xx,tonemapping_pars_fragment:qx,transmission_fragment:Yx,transmission_pars_fragment:Kx,uv_pars_fragment:Jx,uv_pars_vertex:Zx,uv_vertex:Qx,worldpos_vertex:$x,background_vert:ey,background_frag:ty,backgroundCube_vert:ry,backgroundCube_frag:iy,cube_vert:ny,cube_frag:ay,depth_vert:sy,depth_frag:oy,distanceRGBA_vert:ly,distanceRGBA_frag:cy,equirect_vert:hy,equirect_frag:uy,linedashed_vert:dy,linedashed_frag:py,meshbasic_vert:fy,meshbasic_frag:my,meshlambert_vert:gy,meshlambert_frag:_y,meshmatcap_vert:vy,meshmatcap_frag:wy,meshnormal_vert:xy,meshnormal_frag:yy,meshphong_vert:Sy,meshphong_frag:My,meshphysical_vert:Ey,meshphysical_frag:by,meshtoon_vert:Ty,meshtoon_frag:Ry,points_vert:Ay,points_frag:Cy,shadow_vert:Py,shadow_frag:Ly,sprite_vert:Dy,sprite_frag:Iy},ue={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},_r={basic:{uniforms:zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Je(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:zt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:zt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Je(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:zt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:zt([ue.points,ue.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:zt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:zt([ue.common,ue.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:zt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:zt([ue.sprite,ue.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:zt([ue.common,ue.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:zt([ue.lights,ue.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};_r.physical={uniforms:zt([_r.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Ma={r:0,b:0,g:0};function Uy(i,e,t,r,n,a,o){const s=new Je(0);let l=a===!0?0:1,c,h,u=null,d=0,m=null;function _(f,p){let b=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?v(s,l):x&&x.isColor&&(v(x,1),b=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Kn)?(h===void 0&&(h=new gr(new ki(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Vi(_r.backgroundCube.uniforms),vertexShader:_r.backgroundCube.vertexShader,fragmentShader:_r.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=at.getTransfer(x.colorSpace)!==ct,(u!==x||d!==x.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,m=i.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new gr(new io(2,2),new li({name:"BackgroundMaterial",uniforms:Vi(_r.background.uniforms),vertexShader:_r.background.vertexShader,fragmentShader:_r.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=at.getTransfer(x.colorSpace)!==ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,m=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function v(f,p){f.getRGB(Ma,Rc(i)),r.buffers.color.setClear(Ma.r,Ma.g,Ma.b,p,o)}return{getClearColor:function(){return s},setClearColor:function(f,p=1){s.set(f),l=p,v(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,v(s,l)},render:_}}function Ny(i,e,t,r){const n=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=r.isWebGL2?null:e.get("OES_vertex_array_object"),o=r.isWebGL2||a!==null,s={},l=f(null);let c=l,h=!1;function u(D,B,q,Z,J){let K=!1;if(o){const ie=v(Z,q,B);c!==ie&&(c=ie,m(c.object)),K=p(D,Z,q,J),K&&b(D,Z,q,J)}else{const ie=B.wireframe===!0;(c.geometry!==Z.id||c.program!==q.id||c.wireframe!==ie)&&(c.geometry=Z.id,c.program=q.id,c.wireframe=ie,K=!0)}J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,Y(D,B,q,Z),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function d(){return r.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function m(D){return r.isWebGL2?i.bindVertexArray(D):a.bindVertexArrayOES(D)}function _(D){return r.isWebGL2?i.deleteVertexArray(D):a.deleteVertexArrayOES(D)}function v(D,B,q){const Z=q.wireframe===!0;let J=s[D.id];J===void 0&&(J={},s[D.id]=J);let K=J[B.id];K===void 0&&(K={},J[B.id]=K);let ie=K[Z];return ie===void 0&&(ie=f(d()),K[Z]=ie),ie}function f(D){const B=[],q=[],Z=[];for(let J=0;J<n;J++)B[J]=0,q[J]=0,Z[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:q,attributeDivisors:Z,object:D,attributes:{},index:null}}function p(D,B,q,Z){const J=c.attributes,K=B.attributes;let ie=0;const ae=q.getAttributes();for(const me in ae)if(ae[me].location>=0){const W=J[me];let $=K[me];if($===void 0&&(me==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),me==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),W===void 0||W.attribute!==$||$&&W.data!==$.data)return!0;ie++}return c.attributesNum!==ie||c.index!==Z}function b(D,B,q,Z){const J={},K=B.attributes;let ie=0;const ae=q.getAttributes();for(const me in ae)if(ae[me].location>=0){let W=K[me];W===void 0&&(me==="instanceMatrix"&&D.instanceMatrix&&(W=D.instanceMatrix),me==="instanceColor"&&D.instanceColor&&(W=D.instanceColor));const $={};$.attribute=W,W&&W.data&&($.data=W.data),J[me]=$,ie++}c.attributes=J,c.attributesNum=ie,c.index=Z}function x(){const D=c.newAttributes;for(let B=0,q=D.length;B<q;B++)D[B]=0}function P(D){I(D,0)}function I(D,B){const q=c.newAttributes,Z=c.enabledAttributes,J=c.attributeDivisors;q[D]=1,Z[D]===0&&(i.enableVertexAttribArray(D),Z[D]=1),J[D]!==B&&((r.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,B),J[D]=B)}function A(){const D=c.newAttributes,B=c.enabledAttributes;for(let q=0,Z=B.length;q<Z;q++)B[q]!==D[q]&&(i.disableVertexAttribArray(q),B[q]=0)}function R(D,B,q,Z,J,K,ie){ie===!0?i.vertexAttribIPointer(D,B,q,J,K):i.vertexAttribPointer(D,B,q,Z,J,K)}function Y(D,B,q,Z){if(r.isWebGL2===!1&&(D.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const J=Z.attributes,K=q.getAttributes(),ie=B.defaultAttributeValues;for(const ae in K){const me=K[ae];if(me.location>=0){let W=J[ae];if(W===void 0&&(ae==="instanceMatrix"&&D.instanceMatrix&&(W=D.instanceMatrix),ae==="instanceColor"&&D.instanceColor&&(W=D.instanceColor)),W!==void 0){const $=W.normalized,ve=W.itemSize,Se=t.get(W);if(Se===void 0)continue;const ye=Se.buffer,Ue=Se.type,Oe=Se.bytesPerElement,Ce=r.isWebGL2===!0&&(Ue===i.INT||Ue===i.UNSIGNED_INT||W.gpuType===wl);if(W.isInterleavedBufferAttribute){const Qe=W.data,G=Qe.stride,Rt=W.offset;if(Qe.isInstancedInterleavedBuffer){for(let be=0;be<me.locationSize;be++)I(me.location+be,Qe.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Qe.meshPerAttribute*Qe.count)}else for(let be=0;be<me.locationSize;be++)P(me.location+be);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let be=0;be<me.locationSize;be++)R(me.location+be,ve/me.locationSize,Ue,$,G*Oe,(Rt+ve/me.locationSize*be)*Oe,Ce)}else{if(W.isInstancedBufferAttribute){for(let Qe=0;Qe<me.locationSize;Qe++)I(me.location+Qe,W.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Qe=0;Qe<me.locationSize;Qe++)P(me.location+Qe);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let Qe=0;Qe<me.locationSize;Qe++)R(me.location+Qe,ve/me.locationSize,Ue,$,ve*Oe,ve/me.locationSize*Qe*Oe,Ce)}}else if(ie!==void 0){const $=ie[ae];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(me.location,$);break;case 3:i.vertexAttrib3fv(me.location,$);break;case 4:i.vertexAttrib4fv(me.location,$);break;default:i.vertexAttrib1fv(me.location,$)}}}}A()}function S(){V();for(const D in s){const B=s[D];for(const q in B){const Z=B[q];for(const J in Z)_(Z[J].object),delete Z[J];delete B[q]}delete s[D]}}function E(D){if(s[D.id]===void 0)return;const B=s[D.id];for(const q in B){const Z=B[q];for(const J in Z)_(Z[J].object),delete Z[J];delete B[q]}delete s[D.id]}function j(D){for(const B in s){const q=s[B];if(q[D.id]===void 0)continue;const Z=q[D.id];for(const J in Z)_(Z[J].object),delete Z[J];delete q[D.id]}}function V(){oe(),h=!0,c!==l&&(c=l,m(c.object))}function oe(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:V,resetDefaultState:oe,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:j,initAttributes:x,enableAttribute:P,disableUnusedAttributes:A}}function Oy(i,e,t,r){const n=r.isWebGL2;let a;function o(h){a=h}function s(h,u){i.drawArrays(a,h,u),t.update(u,a,1)}function l(h,u,d){if(d===0)return;let m,_;if(n)m=i,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](a,h,u,d),t.update(u,a,d)}function c(h,u,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<d;_++)this.render(h[_],u[_]);else{m.multiDrawArraysWEBGL(a,h,0,u,0,d);let _=0;for(let v=0;v<d;v++)_+=u[v];t.update(_,a,1)}}this.setMode=o,this.render=s,this.renderInstances=l,this.renderMultiDraw=c}function Fy(i,e,t){let r;function n(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,P=o||e.has("OES_texture_float"),I=x&&P,A=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:P,floatVertexTextures:I,maxSamples:A}}function zy(i){const e=this;let t=null,r=0,n=!1,a=!1;const o=new Yr,s=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||r!==0||n;return n=d,r=u.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){const _=u.clippingPlanes,v=u.clipIntersection,f=u.clipShadows,p=i.get(u);if(!n||_===null||_.length===0||a&&!f)a?h(null):c();else{const b=a?0:r,x=b*4;let P=p.clippingState||null;l.value=P,P=h(_,d,x,m);for(let I=0;I!==x;++I)P[I]=t[I];p.clippingState=P,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function h(u,d,m,_){const v=u!==null?u.length:0;let f=null;if(v!==0){if(f=l.value,_!==!0||f===null){const p=m+v*4,b=d.matrixWorldInverse;s.getNormalMatrix(b),(f===null||f.length<p)&&(f=new Float32Array(p));for(let x=0,P=m;x!==v;++x,P+=4)o.copy(u[x]).applyMatrix4(b,s),o.normal.toArray(f,P),f[P+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}function By(i){let e=new WeakMap;function t(o,s){return s===xs?o.mapping=Mi:s===ys&&(o.mapping=Ei),o}function r(o){if(o&&o.isTexture){const s=o.mapping;if(s===xs||s===ys)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Z0(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){const s=o.target;s.removeEventListener("dispose",n);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}class Lc extends Ac{constructor(e=-1,t=1,r=1,n=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=r-e,o=r+e,s=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=h*this.view.offsetY,l=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xi=4,Dc=[.125,.215,.35,.446,.526,.582],hi=20,no=new Lc,Ic=new Je;let ao=null,so=0,oo=0;const ui=(1+Math.sqrt(5))/2,qi=1/ui,Uc=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,ui,qi),new F(0,ui,-qi),new F(qi,0,ui),new F(-qi,0,ui),new F(ui,qi,0),new F(-ui,qi,0)];class Nc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100){ao=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,n,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ao,so,oo),e.scissorTest=!1,Ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mi||e.mapping===Ei?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ao=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:un,format:sr,colorSpace:Sr,depthBuffer:!1},n=Oc(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oc(e,t,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hy(a)),this._blurMaterial=Gy(a,e,t)}return n}_compileMaterial(e){const t=new gr(this._lodPlanes[0],e);this._renderer.compile(t,no)}_sceneToCubeUV(e,t,r,n){const a=new Qt(90,1,t,r),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Ic),l.toneMapping=zr,l.autoClear=!1;const u=new Qs({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),d=new gr(new ki,u);let m=!1;const _=e.background;_?_.isColor&&(u.color.copy(_),e.background=null,m=!0):(u.color.copy(Ic),m=!0);for(let v=0;v<6;v++){const f=v%3;f===0?(a.up.set(0,o[v],0),a.lookAt(s[v],0,0)):f===1?(a.up.set(0,0,o[v]),a.lookAt(0,s[v],0)):(a.up.set(0,o[v],0),a.lookAt(0,0,s[v]));const p=this._cubeSize;Ea(n,f*p,v>2?p:0,p,p),l.setRenderTarget(n),m&&l.render(d,a),l.render(e,a)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=_}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===Mi||e.mapping===Ei;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fc());const a=n?this._cubemapMaterial:this._equirectMaterial,o=new gr(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;Ea(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(o,no)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=Uc[(n-1)%Uc.length];this._blur(e,n-1,n,a,o)}t.autoClear=r}_blur(e,t,r,n,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,r,n,"latitudinal",a),this._halfBlur(o,e,r,r,n,"longitudinal",a)}_halfBlur(e,t,r,n,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new gr(this._lodPlanes[n],c),d=c.uniforms,m=this._sizeLods[r]-1,_=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*hi-1),v=a/_,f=isFinite(a)?1+Math.floor(h*v):hi;f>hi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${hi}`);const p=[];let b=0;for(let R=0;R<hi;++R){const Y=R/v,S=Math.exp(-Y*Y/2);p.push(S),R===0?b+=S:R<f&&(b+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=o==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-r;const P=this._sizeLods[n],I=3*P*(n>x-Xi?n-x+Xi:0),A=4*(this._cubeSize-P);Ea(t,I,A,3*P,2*P),l.setRenderTarget(t),l.render(u,no)}}function Hy(i){const e=[],t=[],r=[];let n=i;const a=i-Xi+1+Dc.length;for(let o=0;o<a;o++){const s=Math.pow(2,n);t.push(s);let l=1/s;o>i-Xi?l=Dc[o-i+Xi-1]:o===0&&(l=0),r.push(l);const c=1/(s-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,v=3,f=2,p=1,b=new Float32Array(v*_*m),x=new Float32Array(f*_*m),P=new Float32Array(p*_*m);for(let A=0;A<m;A++){const R=A%3*2/3-1,Y=A>2?0:-1,S=[R,Y,0,R+2/3,Y,0,R+2/3,Y+1,0,R,Y,0,R+2/3,Y+1,0,R,Y+1,0];b.set(S,v*_*A),x.set(d,f*_*A);const E=[A,A,A,A,A,A];P.set(E,p*_*A)}const I=new Cr;I.setAttribute("position",new mr(b,v)),I.setAttribute("uv",new mr(x,f)),I.setAttribute("faceIndex",new mr(P,p)),e.push(I),n>Xi&&n--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Oc(i,e,t){const r=new ni(i,e,t);return r.texture.mapping=Kn,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ea(i,e,t,r,n){i.viewport.set(e,t,r,n),i.scissor.set(e,t,r,n)}function Gy(i,e,t){const r=new Float32Array(hi),n=new F(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:lo(),fragmentShader:`

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
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function Fc(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lo(),fragmentShader:`

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
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function zc(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function lo(){return`

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
	`}function ky(i){let e=new WeakMap,t=null;function r(s){if(s&&s.isTexture){const l=s.mapping,c=l===xs||l===ys,h=l===Mi||l===Ei;if(c||h)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let u=e.get(s);return t===null&&(t=new Nc(i)),u=c?t.fromEquirectangular(s,u):t.fromCubemap(s,u),e.set(s,u),u.texture}else{if(e.has(s))return e.get(s).texture;{const u=s.image;if(c&&u&&u.height>0||h&&u&&n(u)){t===null&&(t=new Nc(i));const d=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,d),s.addEventListener("dispose",a),d.texture}else return null}}}return s}function n(s){let l=0;const c=6;for(let h=0;h<c;h++)s[h]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:o}}function Vy(i){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=i.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const n=t(r);return n===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function Wy(i,e,t,r){const n={},a=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const v=d.morphAttributes[_];for(let f=0,p=v.length;f<p;f++)e.remove(v[f])}d.removeEventListener("dispose",o),delete n[d.id];const m=a.get(d);m&&(e.remove(m),a.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function s(u,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)e.update(d[_],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const _ in m){const v=m[_];for(let f=0,p=v.length;f<p;f++)e.update(v[f],i.ARRAY_BUFFER)}}function c(u){const d=[],m=u.index,_=u.attributes.position;let v=0;if(m!==null){const b=m.array;v=m.version;for(let x=0,P=b.length;x<P;x+=3){const I=b[x+0],A=b[x+1],R=b[x+2];d.push(I,A,A,R,R,I)}}else if(_!==void 0){const b=_.array;v=_.version;for(let x=0,P=b.length/3-1;x<P;x+=3){const I=x+0,A=x+1,R=x+2;d.push(I,A,A,R,R,I)}}else return;const f=new(nc(d)?yc:xc)(d,1);f.version=v;const p=a.get(u);p&&e.remove(p),a.set(u,f)}function h(u){const d=a.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return a.get(u)}return{get:s,update:l,getWireframeAttribute:h}}function jy(i,e,t,r){const n=r.isWebGL2;let a;function o(m){a=m}let s,l;function c(m){s=m.type,l=m.bytesPerElement}function h(m,_){i.drawElements(a,_,s,m*l),t.update(_,a,1)}function u(m,_,v){if(v===0)return;let f,p;if(n)f=i,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](a,_,s,m*l,v),t.update(_,a,v)}function d(m,_,v){if(v===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<v;p++)this.render(m[p]/l,_[p]);else{f.multiDrawElementsWEBGL(a,_,0,s,m,0,v);let p=0;for(let b=0;b<v;b++)p+=_[b];t.update(p,a,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Xy(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,o,s){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=s*(a/3);break;case i.LINES:t.lines+=s*(a/2);break;case i.LINE_STRIP:t.lines+=s*(a-1);break;case i.LINE_LOOP:t.lines+=s*a;break;case i.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function qy(i,e){return i[0]-e[0]}function Yy(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Ky(i,e,t){const r={},n=new Float32Array(8),a=new WeakMap,o=new bt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=m!==void 0?m.length:0;let v=a.get(h);if(v===void 0||v.count!==_){let b=function(){oe.dispose(),a.delete(h),h.removeEventListener("dispose",b)};v!==void 0&&v.texture.dispose();const x=h.morphAttributes.position!==void 0,P=h.morphAttributes.normal!==void 0,I=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],Y=h.morphAttributes.color||[];let S=0;x===!0&&(S=1),P===!0&&(S=2),I===!0&&(S=3);let E=h.attributes.position.count*S,j=1;E>e.maxTextureSize&&(j=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const V=new Float32Array(E*j*4*_),oe=new hc(V,E,j,_);oe.type=Gr,oe.needsUpdate=!0;const D=S*4;for(let B=0;B<_;B++){const q=A[B],Z=R[B],J=Y[B],K=E*j*4*B;for(let ie=0;ie<q.count;ie++){const ae=ie*D;x===!0&&(o.fromBufferAttribute(q,ie),V[K+ae+0]=o.x,V[K+ae+1]=o.y,V[K+ae+2]=o.z,V[K+ae+3]=0),P===!0&&(o.fromBufferAttribute(Z,ie),V[K+ae+4]=o.x,V[K+ae+5]=o.y,V[K+ae+6]=o.z,V[K+ae+7]=0),I===!0&&(o.fromBufferAttribute(J,ie),V[K+ae+8]=o.x,V[K+ae+9]=o.y,V[K+ae+10]=o.z,V[K+ae+11]=J.itemSize===4?o.w:1)}}v={count:_,texture:oe,size:new De(E,j)},a.set(h,v),h.addEventListener("dispose",b)}let f=0;for(let b=0;b<d.length;b++)f+=d[b];const p=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{const m=d===void 0?0:d.length;let _=r[h.id];if(_===void 0||_.length!==m){_=[];for(let x=0;x<m;x++)_[x]=[x,0];r[h.id]=_}for(let x=0;x<m;x++){const P=_[x];P[0]=x,P[1]=d[x]}_.sort(Yy);for(let x=0;x<8;x++)x<m&&_[x][1]?(s[x][0]=_[x][0],s[x][1]=_[x][1]):(s[x][0]=Number.MAX_SAFE_INTEGER,s[x][1]=0);s.sort(qy);const v=h.morphAttributes.position,f=h.morphAttributes.normal;let p=0;for(let x=0;x<8;x++){const P=s[x],I=P[0],A=P[1];I!==Number.MAX_SAFE_INTEGER&&A?(v&&h.getAttribute("morphTarget"+x)!==v[I]&&h.setAttribute("morphTarget"+x,v[I]),f&&h.getAttribute("morphNormal"+x)!==f[I]&&h.setAttribute("morphNormal"+x,f[I]),n[x]=A,p+=A):(v&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),f&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),n[x]=0)}const b=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",b),u.getUniforms().setValue(i,"morphTargetInfluences",n)}}return{update:l}}function Jy(i,e,t,r){let n=new WeakMap;function a(l){const c=r.render.frame,h=l.geometry,u=e.get(l,h);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),n.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function o(){n=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}class Bc extends Wt{constructor(e,t,r,n,a,o,s,l,c,h){if(h=h!==void 0?h:ti,h!==ti&&h!==bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&h===ti&&(r=Hr),r===void 0&&h===bi&&(r=ei),super(null,n,a,o,s,l,h,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Ot,this.minFilter=l!==void 0?l:Ot,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Hc=new Wt,Gc=new Bc(1,1);Gc.compareFunction=ec;const kc=new hc,Vc=new U0,Wc=new Cc,jc=[],Xc=[],qc=new Float32Array(16),Yc=new Float32Array(9),Kc=new Float32Array(4);function Yi(i,e,t){const r=i[0];if(r<=0||r>0)return i;const n=e*t;let a=jc[n];if(a===void 0&&(a=new Float32Array(n),jc[n]=a),e!==0){r.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,i[o].toArray(a,s)}return a}function St(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function ba(i,e){let t=Xc[e];t===void 0&&(t=new Int32Array(e),Xc[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function Zy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Qy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function $y(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function eS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function tS(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(St(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,r))return;Kc.set(r),i.uniformMatrix2fv(this.addr,!1,Kc),Mt(t,r)}}function rS(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(St(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,r))return;Yc.set(r),i.uniformMatrix3fv(this.addr,!1,Yc),Mt(t,r)}}function iS(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(St(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,r))return;qc.set(r),i.uniformMatrix4fv(this.addr,!1,qc),Mt(t,r)}}function nS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function aS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function sS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function oS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function lS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function cS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function hS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function uS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function dS(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n);const a=this.type===i.SAMPLER_2D_SHADOW?Gc:Hc;t.setTexture2D(e||a,n)}function pS(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||Vc,n)}function fS(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||Wc,n)}function mS(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||kc,n)}function gS(i){switch(i){case 5126:return Zy;case 35664:return Qy;case 35665:return $y;case 35666:return eS;case 35674:return tS;case 35675:return rS;case 35676:return iS;case 5124:case 35670:return nS;case 35667:case 35671:return aS;case 35668:case 35672:return sS;case 35669:case 35673:return oS;case 5125:return lS;case 36294:return cS;case 36295:return hS;case 36296:return uS;case 35678:case 36198:case 36298:case 36306:case 35682:return dS;case 35679:case 36299:case 36307:return pS;case 35680:case 36300:case 36308:case 36293:return fS;case 36289:case 36303:case 36311:case 36292:return mS}}function _S(i,e){i.uniform1fv(this.addr,e)}function vS(i,e){const t=Yi(e,this.size,2);i.uniform2fv(this.addr,t)}function wS(i,e){const t=Yi(e,this.size,3);i.uniform3fv(this.addr,t)}function xS(i,e){const t=Yi(e,this.size,4);i.uniform4fv(this.addr,t)}function yS(i,e){const t=Yi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function SS(i,e){const t=Yi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function MS(i,e){const t=Yi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ES(i,e){i.uniform1iv(this.addr,e)}function bS(i,e){i.uniform2iv(this.addr,e)}function TS(i,e){i.uniform3iv(this.addr,e)}function RS(i,e){i.uniform4iv(this.addr,e)}function AS(i,e){i.uniform1uiv(this.addr,e)}function CS(i,e){i.uniform2uiv(this.addr,e)}function PS(i,e){i.uniform3uiv(this.addr,e)}function LS(i,e){i.uniform4uiv(this.addr,e)}function DS(i,e,t){const r=this.cache,n=e.length,a=ba(t,n);St(r,a)||(i.uniform1iv(this.addr,a),Mt(r,a));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||Hc,a[o])}function IS(i,e,t){const r=this.cache,n=e.length,a=ba(t,n);St(r,a)||(i.uniform1iv(this.addr,a),Mt(r,a));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||Vc,a[o])}function US(i,e,t){const r=this.cache,n=e.length,a=ba(t,n);St(r,a)||(i.uniform1iv(this.addr,a),Mt(r,a));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||Wc,a[o])}function NS(i,e,t){const r=this.cache,n=e.length,a=ba(t,n);St(r,a)||(i.uniform1iv(this.addr,a),Mt(r,a));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||kc,a[o])}function OS(i){switch(i){case 5126:return _S;case 35664:return vS;case 35665:return wS;case 35666:return xS;case 35674:return yS;case 35675:return SS;case 35676:return MS;case 5124:case 35670:return ES;case 35667:case 35671:return bS;case 35668:case 35672:return TS;case 35669:case 35673:return RS;case 5125:return AS;case 36294:return CS;case 36295:return PS;case 36296:return LS;case 35678:case 36198:case 36298:case 36306:case 35682:return DS;case 35679:case 36299:case 36307:return IS;case 35680:case 36300:case 36308:case 36293:return US;case 36289:case 36303:case 36311:case 36292:return NS}}class FS{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=gS(t.type)}}class zS{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=OS(t.type)}}class BS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let a=0,o=n.length;a!==o;++a){const s=n[a];s.setValue(e,t[s.id],r)}}}const co=/(\w+)(\])?(\[|\.)?/g;function Jc(i,e){i.seq.push(e),i.map[e.id]=e}function HS(i,e,t){const r=i.name,n=r.length;for(co.lastIndex=0;;){const a=co.exec(r),o=co.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===n){Jc(t,c===void 0?new FS(s,i,e):new zS(s,i,e));break}else{let h=t.map[s];h===void 0&&(h=new BS(s),Jc(t,h)),t=h}}}class Ta{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){const a=e.getActiveUniform(t,n),o=e.getUniformLocation(t,a.name);HS(a,o,this)}}setValue(e,t,r,n){const a=this.map[t];a!==void 0&&a.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=r[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,a=e.length;n!==a;++n){const o=e[n];o.id in t&&r.push(o)}return r}}function Zc(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const GS=37297;let kS=0;function VS(i,e){const t=i.split(`
`),r=[],n=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=n;o<a;o++){const s=o+1;r.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return r.join(`
`)}function WS(i){const e=at.getPrimaries(at.workingColorSpace),t=at.getPrimaries(i);let r;switch(e===t?r="":e===$n&&t===Qn?r="LinearDisplayP3ToLinearSRGB":e===Qn&&t===$n&&(r="LinearSRGBToLinearDisplayP3"),i){case Sr:case Jn:return[r,"LinearTransferOETF"];case At:case Ls:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[r,"LinearTransferOETF"]}}function Qc(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),n=i.getShaderInfoLog(e).trim();if(r&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+n+`

`+VS(i.getShaderSource(e),o)}else return n}function jS(i,e){const t=WS(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function XS(i,e){let t;switch(e){case Vv:t="Linear";break;case Wv:t="Reinhard";break;case jv:t="OptimizedCineon";break;case Xv:t="ACESFilmic";break;case Yv:t="AgX";break;case qv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qS(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ki).join(`
`)}function YS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ki).join(`
`)}function KS(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function JS(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const a=i.getActiveAttrib(e,n),o=a.name;let s=1;a.type===i.FLOAT_MAT2&&(s=2),a.type===i.FLOAT_MAT3&&(s=3),a.type===i.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:i.getAttribLocation(e,o),locationSize:s}}return t}function Ki(i){return i!==""}function $c(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZS=/^[ \t]*#include +<([\w\d./]+)>/gm;function ho(i){return i.replace(ZS,$S)}const QS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $S(i,e){let t=He[e];if(t===void 0){const r=QS.get(e);if(r!==void 0)t=He[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ho(t)}const eM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function th(i){return i.replace(eM,tM)}function tM(i,e,t,r){let n="";for(let a=parseInt(e);a<parseInt(t);a++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function rh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ul?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xr&&(e="SHADOWMAP_TYPE_VSM"),e}function iM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Mi:case Ei:e="ENVMAP_TYPE_CUBE";break;case Kn:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ei:e="ENVMAP_MODE_REFRACTION";break}return e}function aM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ws:e="ENVMAP_BLENDING_MULTIPLY";break;case Gv:e="ENVMAP_BLENDING_MIX";break;case kv:e="ENVMAP_BLENDING_ADD";break}return e}function sM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function oM(i,e,t,r){const n=i.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=rM(t),c=iM(t),h=nM(t),u=aM(t),d=sM(t),m=t.isWebGL2?"":qS(t),_=YS(t),v=KS(a),f=n.createProgram();let p,b,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ki).join(`
`),p.length>0&&(p+=`
`),b=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ki).join(`
`),b.length>0&&(b+=`
`)):(p=[rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ki).join(`
`),b=[m,rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zr?"#define TONE_MAPPING":"",t.toneMapping!==zr?He.tonemapping_pars_fragment:"",t.toneMapping!==zr?XS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,jS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ki).join(`
`)),o=ho(o),o=$c(o,t),o=eh(o,t),s=ho(s),s=$c(s,t),s=eh(s,t),o=th(o),s=th(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const P=x+p+o,I=x+b+s,A=Zc(n,n.VERTEX_SHADER,P),R=Zc(n,n.FRAGMENT_SHADER,I);n.attachShader(f,A),n.attachShader(f,R),t.index0AttributeName!==void 0?n.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(f,0,"position"),n.linkProgram(f);function Y(V){if(i.debug.checkShaderErrors){const oe=n.getProgramInfoLog(f).trim(),D=n.getShaderInfoLog(A).trim(),B=n.getShaderInfoLog(R).trim();let q=!0,Z=!0;if(n.getProgramParameter(f,n.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(n,f,A,R);else{const J=Qc(n,A,"vertex"),K=Qc(n,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(f,n.VALIDATE_STATUS)+`

Program Info Log: `+oe+`
`+J+`
`+K)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(D===""||B==="")&&(Z=!1);Z&&(V.diagnostics={runnable:q,programLog:oe,vertexShader:{log:D,prefix:p},fragmentShader:{log:B,prefix:b}})}n.deleteShader(A),n.deleteShader(R),S=new Ta(n,f),E=JS(n,f)}let S;this.getUniforms=function(){return S===void 0&&Y(this),S};let E;this.getAttributes=function(){return E===void 0&&Y(this),E};let j=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=n.getProgramParameter(f,GS)),j},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kS++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=A,this.fragmentShader=R,this}let lM=0;class cM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),a=this._getShaderStage(r),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new hM(e),t.set(e,r)),r}}class hM{constructor(e){this.id=lM++,this.code=e,this.usedTimes=0}}function uM(i,e,t,r,n,a,o){const s=new Xs,l=new cM,c=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures;let m=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function f(S,E,j,V,oe){const D=V.fog,B=oe.geometry,q=S.isMeshStandardMaterial?V.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||q),J=Z&&Z.mapping===Kn?Z.image.height:null,K=_[S.type];S.precision!==null&&(m=n.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const ie=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ae=ie!==void 0?ie.length:0;let me=0;B.morphAttributes.position!==void 0&&(me=1),B.morphAttributes.normal!==void 0&&(me=2),B.morphAttributes.color!==void 0&&(me=3);let W,$,ve,Se;if(K){const wt=_r[K];W=wt.vertexShader,$=wt.fragmentShader}else W=S.vertexShader,$=S.fragmentShader,l.update(S),ve=l.getVertexShaderID(S),Se=l.getFragmentShaderID(S);const ye=i.getRenderTarget(),Ue=oe.isInstancedMesh===!0,Oe=oe.isBatchedMesh===!0,Ce=!!S.map,Qe=!!S.matcap,G=!!Z,Rt=!!S.aoMap,be=!!S.lightMap,Ie=!!S.bumpMap,we=!!S.normalMap,ht=!!S.displacementMap,Fe=!!S.emissiveMap,M=!!S.metalnessMap,w=!!S.roughnessMap,z=S.anisotropy>0,ne=S.clearcoat>0,te=S.iridescence>0,re=S.sheen>0,xe=S.transmission>0,pe=z&&!!S.anisotropyMap,ge=ne&&!!S.clearcoatMap,Ae=ne&&!!S.clearcoatNormalMap,ze=ne&&!!S.clearcoatRoughnessMap,ee=te&&!!S.iridescenceMap,$e=te&&!!S.iridescenceThicknessMap,T=re&&!!S.sheenColorMap,Q=re&&!!S.sheenRoughnessMap,he=!!S.specularMap,le=!!S.specularColorMap,Ee=!!S.specularIntensityMap,Ge=xe&&!!S.transmissionMap,tt=xe&&!!S.thicknessMap,ke=!!S.gradientMap,ce=!!S.alphaMap,C=S.alphaTest>0,se=!!S.alphaHash,fe=!!S.extensions,Pe=!!B.attributes.uv1,Me=!!B.attributes.uv2,rt=!!B.attributes.uv3;let ot=zr;return S.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(ot=i.toneMapping),{isWebGL2:h,shaderID:K,shaderType:S.type,shaderName:S.name,vertexShader:W,fragmentShader:$,defines:S.defines,customVertexShaderID:ve,customFragmentShaderID:Se,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Oe,instancing:Ue,instancingColor:Ue&&oe.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ye===null?i.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Sr,map:Ce,matcap:Qe,envMap:G,envMapMode:G&&Z.mapping,envMapCubeUVHeight:J,aoMap:Rt,lightMap:be,bumpMap:Ie,normalMap:we,displacementMap:d&&ht,emissiveMap:Fe,normalMapObjectSpace:we&&S.normalMapType===s0,normalMapTangentSpace:we&&S.normalMapType===Ql,metalnessMap:M,roughnessMap:w,anisotropy:z,anisotropyMap:pe,clearcoat:ne,clearcoatMap:ge,clearcoatNormalMap:Ae,clearcoatRoughnessMap:ze,iridescence:te,iridescenceMap:ee,iridescenceThicknessMap:$e,sheen:re,sheenColorMap:T,sheenRoughnessMap:Q,specularMap:he,specularColorMap:le,specularIntensityMap:Ee,transmission:xe,transmissionMap:Ge,thicknessMap:tt,gradientMap:ke,opaque:S.transparent===!1&&S.blending===Si,alphaMap:ce,alphaTest:C,alphaHash:se,combine:S.combine,mapUv:Ce&&v(S.map.channel),aoMapUv:Rt&&v(S.aoMap.channel),lightMapUv:be&&v(S.lightMap.channel),bumpMapUv:Ie&&v(S.bumpMap.channel),normalMapUv:we&&v(S.normalMap.channel),displacementMapUv:ht&&v(S.displacementMap.channel),emissiveMapUv:Fe&&v(S.emissiveMap.channel),metalnessMapUv:M&&v(S.metalnessMap.channel),roughnessMapUv:w&&v(S.roughnessMap.channel),anisotropyMapUv:pe&&v(S.anisotropyMap.channel),clearcoatMapUv:ge&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:T&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Q&&v(S.sheenRoughnessMap.channel),specularMapUv:he&&v(S.specularMap.channel),specularColorMapUv:le&&v(S.specularColorMap.channel),specularIntensityMapUv:Ee&&v(S.specularIntensityMap.channel),transmissionMapUv:Ge&&v(S.transmissionMap.channel),thicknessMapUv:tt&&v(S.thicknessMap.channel),alphaMapUv:ce&&v(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(we||z),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Pe,vertexUv2s:Me,vertexUv3s:rt,pointsUvs:oe.isPoints===!0&&!!B.attributes.uv&&(Ce||ce),fog:!!D,useFog:S.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:oe.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:me,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&j.length>0,shadowMapType:i.shadowMap.type,toneMapping:ot,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ce&&S.map.isVideoTexture===!0&&at.getTransfer(S.map.colorSpace)===ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===yr,flipSided:S.side===Gt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:fe&&S.extensions.derivatives===!0,extensionFragDepth:fe&&S.extensions.fragDepth===!0,extensionDrawBuffers:fe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:fe&&S.extensions.clipCullDistance&&r.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const j in S.defines)E.push(j),E.push(S.defines[j]);return S.isRawShaderMaterial===!1&&(b(E,S),x(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function b(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function x(S,E){s.disableAll(),E.isWebGL2&&s.enable(0),E.supportsVertexTextures&&s.enable(1),E.instancing&&s.enable(2),E.instancingColor&&s.enable(3),E.matcap&&s.enable(4),E.envMap&&s.enable(5),E.normalMapObjectSpace&&s.enable(6),E.normalMapTangentSpace&&s.enable(7),E.clearcoat&&s.enable(8),E.iridescence&&s.enable(9),E.alphaTest&&s.enable(10),E.vertexColors&&s.enable(11),E.vertexAlphas&&s.enable(12),E.vertexUv1s&&s.enable(13),E.vertexUv2s&&s.enable(14),E.vertexUv3s&&s.enable(15),E.vertexTangents&&s.enable(16),E.anisotropy&&s.enable(17),E.alphaHash&&s.enable(18),E.batching&&s.enable(19),S.push(s.mask),s.disableAll(),E.fog&&s.enable(0),E.useFog&&s.enable(1),E.flatShading&&s.enable(2),E.logarithmicDepthBuffer&&s.enable(3),E.skinning&&s.enable(4),E.morphTargets&&s.enable(5),E.morphNormals&&s.enable(6),E.morphColors&&s.enable(7),E.premultipliedAlpha&&s.enable(8),E.shadowMapEnabled&&s.enable(9),E.useLegacyLights&&s.enable(10),E.doubleSided&&s.enable(11),E.flipSided&&s.enable(12),E.useDepthPacking&&s.enable(13),E.dithering&&s.enable(14),E.transmission&&s.enable(15),E.sheen&&s.enable(16),E.opaque&&s.enable(17),E.pointsUvs&&s.enable(18),E.decodeVideoTexture&&s.enable(19),S.push(s.mask)}function P(S){const E=_[S.type];let j;if(E){const V=_r[E];j=q0.clone(V.uniforms)}else j=S.uniforms;return j}function I(S,E){let j;for(let V=0,oe=c.length;V<oe;V++){const D=c[V];if(D.cacheKey===E){j=D,++j.usedTimes;break}}return j===void 0&&(j=new oM(i,E,S,a),c.push(j)),j}function A(S){if(--S.usedTimes===0){const E=c.indexOf(S);c[E]=c[c.length-1],c.pop(),S.destroy()}}function R(S){l.remove(S)}function Y(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:P,acquireProgram:I,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:Y}}function dM(){let i=new WeakMap;function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function t(a){i.delete(a)}function r(a,o,s){i.get(a)[o]=s}function n(){i=new WeakMap}return{get:e,remove:t,update:r,dispose:n}}function pM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ih(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nh(){const i=[];let e=0;const t=[],r=[],n=[];function a(){e=0,t.length=0,r.length=0,n.length=0}function o(u,d,m,_,v,f){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:_,renderOrder:u.renderOrder,z:v,group:f},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=v,p.group=f),e++,p}function s(u,d,m,_,v,f){const p=o(u,d,m,_,v,f);m.transmission>0?r.push(p):m.transparent===!0?n.push(p):t.push(p)}function l(u,d,m,_,v,f){const p=o(u,d,m,_,v,f);m.transmission>0?r.unshift(p):m.transparent===!0?n.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||pM),r.length>1&&r.sort(d||ih),n.length>1&&n.sort(d||ih)}function h(){for(let u=e,d=i.length;u<d;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:r,transparent:n,init:a,push:s,unshift:l,finish:h,sort:c}}function fM(){let i=new WeakMap;function e(r,n){const a=i.get(r);let o;return a===void 0?(o=new nh,i.set(r,[o])):n>=a.length?(o=new nh,a.push(o)):o=a[n],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function mM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Je};break;case"SpotLight":t={position:new F,direction:new F,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function gM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let _M=0;function vM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function wM(i,e){const t=new mM,r=gM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new F);const a=new F,o=new _t,s=new _t;function l(h,u){let d=0,m=0,_=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let v=0,f=0,p=0,b=0,x=0,P=0,I=0,A=0,R=0,Y=0,S=0;h.sort(vM);const E=u===!0?Math.PI:1;for(let V=0,oe=h.length;V<oe;V++){const D=h[V],B=D.color,q=D.intensity,Z=D.distance,J=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=B.r*q*E,m+=B.g*q*E,_+=B.b*q*E;else if(D.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(D.sh.coefficients[K],q);S++}else if(D.isDirectionalLight){const K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity*E),D.castShadow){const ie=D.shadow,ae=r.get(D);ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize=ie.mapSize,n.directionalShadow[v]=ae,n.directionalShadowMap[v]=J,n.directionalShadowMatrix[v]=D.shadow.matrix,P++}n.directional[v]=K,v++}else if(D.isSpotLight){const K=t.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(B).multiplyScalar(q*E),K.distance=Z,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,n.spot[p]=K;const ie=D.shadow;if(D.map&&(n.spotLightMap[R]=D.map,R++,ie.updateMatrices(D),D.castShadow&&Y++),n.spotLightMatrix[p]=ie.matrix,D.castShadow){const ae=r.get(D);ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize=ie.mapSize,n.spotShadow[p]=ae,n.spotShadowMap[p]=J,A++}p++}else if(D.isRectAreaLight){const K=t.get(D);K.color.copy(B).multiplyScalar(q),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),n.rectArea[b]=K,b++}else if(D.isPointLight){const K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity*E),K.distance=D.distance,K.decay=D.decay,D.castShadow){const ie=D.shadow,ae=r.get(D);ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize=ie.mapSize,ae.shadowCameraNear=ie.camera.near,ae.shadowCameraFar=ie.camera.far,n.pointShadow[f]=ae,n.pointShadowMap[f]=J,n.pointShadowMatrix[f]=D.shadow.matrix,I++}n.point[f]=K,f++}else if(D.isHemisphereLight){const K=t.get(D);K.skyColor.copy(D.color).multiplyScalar(q*E),K.groundColor.copy(D.groundColor).multiplyScalar(q*E),n.hemi[x]=K,x++}}b>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=_;const j=n.hash;(j.directionalLength!==v||j.pointLength!==f||j.spotLength!==p||j.rectAreaLength!==b||j.hemiLength!==x||j.numDirectionalShadows!==P||j.numPointShadows!==I||j.numSpotShadows!==A||j.numSpotMaps!==R||j.numLightProbes!==S)&&(n.directional.length=v,n.spot.length=p,n.rectArea.length=b,n.point.length=f,n.hemi.length=x,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.pointShadow.length=I,n.pointShadowMap.length=I,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=P,n.pointShadowMatrix.length=I,n.spotLightMatrix.length=A+R-Y,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=Y,n.numLightProbes=S,j.directionalLength=v,j.pointLength=f,j.spotLength=p,j.rectAreaLength=b,j.hemiLength=x,j.numDirectionalShadows=P,j.numPointShadows=I,j.numSpotShadows=A,j.numSpotMaps=R,j.numLightProbes=S,n.version=_M++)}function c(h,u){let d=0,m=0,_=0,v=0,f=0;const p=u.matrixWorldInverse;for(let b=0,x=h.length;b<x;b++){const P=h[b];if(P.isDirectionalLight){const I=n.directional[d];I.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),I.direction.sub(a),I.direction.transformDirection(p),d++}else if(P.isSpotLight){const I=n.spot[_];I.position.setFromMatrixPosition(P.matrixWorld),I.position.applyMatrix4(p),I.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),I.direction.sub(a),I.direction.transformDirection(p),_++}else if(P.isRectAreaLight){const I=n.rectArea[v];I.position.setFromMatrixPosition(P.matrixWorld),I.position.applyMatrix4(p),s.identity(),o.copy(P.matrixWorld),o.premultiply(p),s.extractRotation(o),I.halfWidth.set(P.width*.5,0,0),I.halfHeight.set(0,P.height*.5,0),I.halfWidth.applyMatrix4(s),I.halfHeight.applyMatrix4(s),v++}else if(P.isPointLight){const I=n.point[m];I.position.setFromMatrixPosition(P.matrixWorld),I.position.applyMatrix4(p),m++}else if(P.isHemisphereLight){const I=n.hemi[f];I.direction.setFromMatrixPosition(P.matrixWorld),I.direction.transformDirection(p),f++}}}return{setup:l,setupView:c,state:n}}function ah(i,e){const t=new wM(i,e),r=[],n=[];function a(){r.length=0,n.length=0}function o(h){r.push(h)}function s(h){n.push(h)}function l(h){t.setup(r,h)}function c(h){t.setupView(r,h)}return{init:a,state:{lightsArray:r,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function xM(i,e){let t=new WeakMap;function r(a,o=0){const s=t.get(a);let l;return s===void 0?(l=new ah(i,e),t.set(a,[l])):o>=s.length?(l=new ah(i,e),s.push(l)):l=s[o],l}function n(){t=new WeakMap}return{get:r,dispose:n}}class yM extends yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=n0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class SM extends yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const MM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EM=`uniform sampler2D shadow_pass;
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
}`;function bM(i,e,t){let r=new ro;const n=new De,a=new De,o=new bt,s=new yM({depthPacking:a0}),l=new SM,c={},h=t.maxTextureSize,u={[Or]:Gt,[Gt]:Or,[yr]:yr},d=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:MM,fragmentShader:EM}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Cr;_.setAttribute("position",new mr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new gr(_,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hl;let p=this.type;this.render=function(A,R,Y){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;const S=i.getRenderTarget(),E=i.getActiveCubeFace(),j=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Fr),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const oe=p!==xr&&this.type===xr,D=p===xr&&this.type!==xr;for(let B=0,q=A.length;B<q;B++){const Z=A[B],J=Z.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;n.copy(J.mapSize);const K=J.getFrameExtents();if(n.multiply(K),a.copy(J.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(a.x=Math.floor(h/K.x),n.x=a.x*K.x,J.mapSize.x=a.x),n.y>h&&(a.y=Math.floor(h/K.y),n.y=a.y*K.y,J.mapSize.y=a.y)),J.map===null||oe===!0||D===!0){const ae=this.type!==xr?{minFilter:Ot,magFilter:Ot}:{};J.map!==null&&J.map.dispose(),J.map=new ni(n.x,n.y,ae),J.map.texture.name=Z.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const ie=J.getViewportCount();for(let ae=0;ae<ie;ae++){const me=J.getViewport(ae);o.set(a.x*me.x,a.y*me.y,a.x*me.z,a.y*me.w),V.viewport(o),J.updateMatrices(Z,ae),r=J.getFrustum(),P(R,Y,J.camera,Z,this.type)}J.isPointLightShadow!==!0&&this.type===xr&&b(J,Y),J.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(S,E,j)};function b(A,R){const Y=e.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ni(n.x,n.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,Y,d,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,Y,m,v,null)}function x(A,R,Y,S){let E=null;const j=Y.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(j!==void 0)E=j;else if(E=Y.isPointLight===!0?l:s,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const V=E.uuid,oe=R.uuid;let D=c[V];D===void 0&&(D={},c[V]=D);let B=D[oe];B===void 0&&(B=E.clone(),D[oe]=B,R.addEventListener("dispose",I)),E=B}if(E.visible=R.visible,E.wireframe=R.wireframe,S===xr?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:u[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,Y.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const V=i.properties.get(E);V.light=Y}return E}function P(A,R,Y,S,E){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===xr)&&(!A.frustumCulled||r.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld);const V=e.update(A),oe=A.material;if(Array.isArray(oe)){const D=V.groups;for(let B=0,q=D.length;B<q;B++){const Z=D[B],J=oe[Z.materialIndex];if(J&&J.visible){const K=x(A,J,S,E);A.onBeforeShadow(i,A,R,Y,V,K,Z),i.renderBufferDirect(Y,null,V,K,A,Z),A.onAfterShadow(i,A,R,Y,V,K,Z)}}}else if(oe.visible){const D=x(A,oe,S,E);A.onBeforeShadow(i,A,R,Y,V,D,null),i.renderBufferDirect(Y,null,V,D,A,null),A.onAfterShadow(i,A,R,Y,V,D,null)}}const j=A.children;for(let V=0,oe=j.length;V<oe;V++)P(j[V],R,Y,S,E)}function I(A){A.target.removeEventListener("dispose",I);for(const R in c){const Y=c[R],S=A.target.uuid;S in Y&&(Y[S].dispose(),delete Y[S])}}}function TM(i,e,t){const r=t.isWebGL2;function n(){let C=!1;const se=new bt;let fe=null;const Pe=new bt(0,0,0,0);return{setMask:function(Me){fe!==Me&&!C&&(i.colorMask(Me,Me,Me,Me),fe=Me)},setLocked:function(Me){C=Me},setClear:function(Me,rt,ot,wt,$t){$t===!0&&(Me*=wt,rt*=wt,ot*=wt),se.set(Me,rt,ot,wt),Pe.equals(se)===!1&&(i.clearColor(Me,rt,ot,wt),Pe.copy(se))},reset:function(){C=!1,fe=null,Pe.set(-1,0,0,0)}}}function a(){let C=!1,se=null,fe=null,Pe=null;return{setTest:function(Me){Me?Oe(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(Me){se!==Me&&!C&&(i.depthMask(Me),se=Me)},setFunc:function(Me){if(fe!==Me){switch(Me){case Uv:i.depthFunc(i.NEVER);break;case Nv:i.depthFunc(i.ALWAYS);break;case Ov:i.depthFunc(i.LESS);break;case Yn:i.depthFunc(i.LEQUAL);break;case Fv:i.depthFunc(i.EQUAL);break;case zv:i.depthFunc(i.GEQUAL);break;case Bv:i.depthFunc(i.GREATER);break;case Hv:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=Me}},setLocked:function(Me){C=Me},setClear:function(Me){Pe!==Me&&(i.clearDepth(Me),Pe=Me)},reset:function(){C=!1,se=null,fe=null,Pe=null}}}function o(){let C=!1,se=null,fe=null,Pe=null,Me=null,rt=null,ot=null,wt=null,$t=null;return{setTest:function(lt){C||(lt?Oe(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(lt){se!==lt&&!C&&(i.stencilMask(lt),se=lt)},setFunc:function(lt,Bt,vr){(fe!==lt||Pe!==Bt||Me!==vr)&&(i.stencilFunc(lt,Bt,vr),fe=lt,Pe=Bt,Me=vr)},setOp:function(lt,Bt,vr){(rt!==lt||ot!==Bt||wt!==vr)&&(i.stencilOp(lt,Bt,vr),rt=lt,ot=Bt,wt=vr)},setLocked:function(lt){C=lt},setClear:function(lt){$t!==lt&&(i.clearStencil(lt),$t=lt)},reset:function(){C=!1,se=null,fe=null,Pe=null,Me=null,rt=null,ot=null,wt=null,$t=null}}}const s=new n,l=new a,c=new o,h=new WeakMap,u=new WeakMap;let d={},m={},_=new WeakMap,v=[],f=null,p=!1,b=null,x=null,P=null,I=null,A=null,R=null,Y=null,S=new Je(0,0,0),E=0,j=!1,V=null,oe=null,D=null,B=null,q=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,K=0;const ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ie)[1]),J=K>=1):ie.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),J=K>=2);let ae=null,me={};const W=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),ve=new bt().fromArray(W),Se=new bt().fromArray($);function ye(C,se,fe,Pe){const Me=new Uint8Array(4),rt=i.createTexture();i.bindTexture(C,rt),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ot=0;ot<fe;ot++)r&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(se,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(se+ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return rt}const Ue={};Ue[i.TEXTURE_2D]=ye(i.TEXTURE_2D,i.TEXTURE_2D,1),Ue[i.TEXTURE_CUBE_MAP]=ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Ue[i.TEXTURE_2D_ARRAY]=ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ue[i.TEXTURE_3D]=ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Oe(i.DEPTH_TEST),l.setFunc(Yn),Fe(!1),M(cl),Oe(i.CULL_FACE),we(Fr);function Oe(C){d[C]!==!0&&(i.enable(C),d[C]=!0)}function Ce(C){d[C]!==!1&&(i.disable(C),d[C]=!1)}function Qe(C,se){return m[C]!==se?(i.bindFramebuffer(C,se),m[C]=se,r&&(C===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=se),C===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=se)),!0):!1}function G(C,se){let fe=v,Pe=!1;if(C)if(fe=_.get(se),fe===void 0&&(fe=[],_.set(se,fe)),C.isWebGLMultipleRenderTargets){const Me=C.texture;if(fe.length!==Me.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,ot=Me.length;rt<ot;rt++)fe[rt]=i.COLOR_ATTACHMENT0+rt;fe.length=Me.length,Pe=!0}}else fe[0]!==i.COLOR_ATTACHMENT0&&(fe[0]=i.COLOR_ATTACHMENT0,Pe=!0);else fe[0]!==i.BACK&&(fe[0]=i.BACK,Pe=!0);Pe&&(t.isWebGL2?i.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function Rt(C){return f!==C?(i.useProgram(C),f=C,!0):!1}const be={[$r]:i.FUNC_ADD,[wv]:i.FUNC_SUBTRACT,[xv]:i.FUNC_REVERSE_SUBTRACT};if(r)be[ml]=i.MIN,be[gl]=i.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(be[ml]=C.MIN_EXT,be[gl]=C.MAX_EXT)}const Ie={[yv]:i.ZERO,[Sv]:i.ONE,[Mv]:i.SRC_COLOR,[_s]:i.SRC_ALPHA,[Cv]:i.SRC_ALPHA_SATURATE,[Rv]:i.DST_COLOR,[bv]:i.DST_ALPHA,[Ev]:i.ONE_MINUS_SRC_COLOR,[vs]:i.ONE_MINUS_SRC_ALPHA,[Av]:i.ONE_MINUS_DST_COLOR,[Tv]:i.ONE_MINUS_DST_ALPHA,[Pv]:i.CONSTANT_COLOR,[Lv]:i.ONE_MINUS_CONSTANT_COLOR,[Dv]:i.CONSTANT_ALPHA,[Iv]:i.ONE_MINUS_CONSTANT_ALPHA};function we(C,se,fe,Pe,Me,rt,ot,wt,$t,lt){if(C===Fr){p===!0&&(Ce(i.BLEND),p=!1);return}if(p===!1&&(Oe(i.BLEND),p=!0),C!==vv){if(C!==b||lt!==j){if((x!==$r||A!==$r)&&(i.blendEquation(i.FUNC_ADD),x=$r,A=$r),lt)switch(C){case Si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dl:i.blendFunc(i.ONE,i.ONE);break;case pl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case pl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}P=null,I=null,R=null,Y=null,S.set(0,0,0),E=0,b=C,j=lt}return}Me=Me||se,rt=rt||fe,ot=ot||Pe,(se!==x||Me!==A)&&(i.blendEquationSeparate(be[se],be[Me]),x=se,A=Me),(fe!==P||Pe!==I||rt!==R||ot!==Y)&&(i.blendFuncSeparate(Ie[fe],Ie[Pe],Ie[rt],Ie[ot]),P=fe,I=Pe,R=rt,Y=ot),(wt.equals(S)===!1||$t!==E)&&(i.blendColor(wt.r,wt.g,wt.b,$t),S.copy(wt),E=$t),b=C,j=!1}function ht(C,se){C.side===yr?Ce(i.CULL_FACE):Oe(i.CULL_FACE);let fe=C.side===Gt;se&&(fe=!fe),Fe(fe),C.blending===Si&&C.transparent===!1?we(Fr):we(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),s.setMask(C.colorWrite);const Pe=C.stencilWrite;c.setTest(Pe),Pe&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),z(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Oe(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(C){V!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),V=C)}function M(C){C!==gv?(Oe(i.CULL_FACE),C!==oe&&(C===cl?i.cullFace(i.BACK):C===_v?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),oe=C}function w(C){C!==D&&(J&&i.lineWidth(C),D=C)}function z(C,se,fe){C?(Oe(i.POLYGON_OFFSET_FILL),(B!==se||q!==fe)&&(i.polygonOffset(se,fe),B=se,q=fe)):Ce(i.POLYGON_OFFSET_FILL)}function ne(C){C?Oe(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function te(C){C===void 0&&(C=i.TEXTURE0+Z-1),ae!==C&&(i.activeTexture(C),ae=C)}function re(C,se,fe){fe===void 0&&(ae===null?fe=i.TEXTURE0+Z-1:fe=ae);let Pe=me[fe];Pe===void 0&&(Pe={type:void 0,texture:void 0},me[fe]=Pe),(Pe.type!==C||Pe.texture!==se)&&(ae!==fe&&(i.activeTexture(fe),ae=fe),i.bindTexture(C,se||Ue[C]),Pe.type=C,Pe.texture=se)}function xe(){const C=me[ae];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function pe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ge(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ae(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ze(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ee(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function T(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function le(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ee(C){ve.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),ve.copy(C))}function Ge(C){Se.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Se.copy(C))}function tt(C,se){let fe=u.get(se);fe===void 0&&(fe=new WeakMap,u.set(se,fe));let Pe=fe.get(C);Pe===void 0&&(Pe=i.getUniformBlockIndex(se,C.name),fe.set(C,Pe))}function ke(C,se){const fe=u.get(se).get(C);h.get(se)!==fe&&(i.uniformBlockBinding(se,fe,C.__bindingPointIndex),h.set(se,fe))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),r===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ae=null,me={},m={},_=new WeakMap,v=[],f=null,p=!1,b=null,x=null,P=null,I=null,A=null,R=null,Y=null,S=new Je(0,0,0),E=0,j=!1,V=null,oe=null,D=null,B=null,q=null,ve.set(0,0,i.canvas.width,i.canvas.height),Se.set(0,0,i.canvas.width,i.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Oe,disable:Ce,bindFramebuffer:Qe,drawBuffers:G,useProgram:Rt,setBlending:we,setMaterial:ht,setFlipSided:Fe,setCullFace:M,setLineWidth:w,setPolygonOffset:z,setScissorTest:ne,activeTexture:te,bindTexture:re,unbindTexture:xe,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:he,texImage3D:le,updateUBOMapping:tt,uniformBlockBinding:ke,texStorage2D:T,texStorage3D:Q,texSubImage2D:Ae,texSubImage3D:ze,compressedTexSubImage2D:ee,compressedTexSubImage3D:$e,scissor:Ee,viewport:Ge,reset:ce}}function RM(i,e,t,r,n,a,o){const s=n.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,w){return m?new OffscreenCanvas(M,w):ra("canvas")}function v(M,w,z,ne){let te=1;if((M.width>ne||M.height>ne)&&(te=ne/Math.max(M.width,M.height)),te<1||w===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const re=w?ta:Math.floor,xe=re(te*M.width),pe=re(te*M.height);u===void 0&&(u=_(xe,pe));const ge=z?_(xe,pe):u;return ge.width=xe,ge.height=pe,ge.getContext("2d").drawImage(M,0,0,xe,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+xe+"x"+pe+")."),ge}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function f(M){return Us(M.width)&&Us(M.height)}function p(M){return s?!1:M.wrapS!==ar||M.wrapT!==ar||M.minFilter!==Ot&&M.minFilter!==Kt}function b(M,w){return M.generateMipmaps&&w&&M.minFilter!==Ot&&M.minFilter!==Kt}function x(M){i.generateMipmap(M)}function P(M,w,z,ne,te=!1){if(s===!1)return w;if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let re=w;if(w===i.RED&&(z===i.FLOAT&&(re=i.R32F),z===i.HALF_FLOAT&&(re=i.R16F),z===i.UNSIGNED_BYTE&&(re=i.R8)),w===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(re=i.R8UI),z===i.UNSIGNED_SHORT&&(re=i.R16UI),z===i.UNSIGNED_INT&&(re=i.R32UI),z===i.BYTE&&(re=i.R8I),z===i.SHORT&&(re=i.R16I),z===i.INT&&(re=i.R32I)),w===i.RG&&(z===i.FLOAT&&(re=i.RG32F),z===i.HALF_FLOAT&&(re=i.RG16F),z===i.UNSIGNED_BYTE&&(re=i.RG8)),w===i.RGBA){const xe=te?Zn:at.getTransfer(ne);z===i.FLOAT&&(re=i.RGBA32F),z===i.HALF_FLOAT&&(re=i.RGBA16F),z===i.UNSIGNED_BYTE&&(re=xe===ct?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function I(M,w,z){return b(M,z)===!0||M.isFramebufferTexture&&M.minFilter!==Ot&&M.minFilter!==Kt?Math.log2(Math.max(w.width,w.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?w.mipmaps.length:1}function A(M){return M===Ot||M===vl||M===Es?i.NEAREST:i.LINEAR}function R(M){const w=M.target;w.removeEventListener("dispose",R),S(w),w.isVideoTexture&&h.delete(w)}function Y(M){const w=M.target;w.removeEventListener("dispose",Y),j(w)}function S(M){const w=r.get(M);if(w.__webglInit===void 0)return;const z=M.source,ne=d.get(z);if(ne){const te=ne[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&E(M),Object.keys(ne).length===0&&d.delete(z)}r.remove(M)}function E(M){const w=r.get(M);i.deleteTexture(w.__webglTexture);const z=M.source,ne=d.get(z);delete ne[w.__cacheKey],o.memory.textures--}function j(M){const w=M.texture,z=r.get(M),ne=r.get(w);if(ne.__webglTexture!==void 0&&(i.deleteTexture(ne.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(z.__webglFramebuffer[te]))for(let re=0;re<z.__webglFramebuffer[te].length;re++)i.deleteFramebuffer(z.__webglFramebuffer[te][re]);else i.deleteFramebuffer(z.__webglFramebuffer[te]);z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer[te])}else{if(Array.isArray(z.__webglFramebuffer))for(let te=0;te<z.__webglFramebuffer.length;te++)i.deleteFramebuffer(z.__webglFramebuffer[te]);else i.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let te=0;te<z.__webglColorRenderbuffer.length;te++)z.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(z.__webglColorRenderbuffer[te]);z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let te=0,re=w.length;te<re;te++){const xe=r.get(w[te]);xe.__webglTexture&&(i.deleteTexture(xe.__webglTexture),o.memory.textures--),r.remove(w[te])}r.remove(w),r.remove(M)}let V=0;function oe(){V=0}function D(){const M=V;return M>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+n.maxTextures),V+=1,M}function B(M){const w=[];return w.push(M.wrapS),w.push(M.wrapT),w.push(M.wrapR||0),w.push(M.magFilter),w.push(M.minFilter),w.push(M.anisotropy),w.push(M.internalFormat),w.push(M.format),w.push(M.type),w.push(M.generateMipmaps),w.push(M.premultiplyAlpha),w.push(M.flipY),w.push(M.unpackAlignment),w.push(M.colorSpace),w.join()}function q(M,w){const z=r.get(M);if(M.isVideoTexture&&ht(M),M.isRenderTargetTexture===!1&&M.version>0&&z.__version!==M.version){const ne=M.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(z,M,w);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+w)}function Z(M,w){const z=r.get(M);if(M.version>0&&z.__version!==M.version){ve(z,M,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+w)}function J(M,w){const z=r.get(M);if(M.version>0&&z.__version!==M.version){ve(z,M,w);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+w)}function K(M,w){const z=r.get(M);if(M.version>0&&z.__version!==M.version){Se(z,M,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+w)}const ie={[Ss]:i.REPEAT,[ar]:i.CLAMP_TO_EDGE,[Ms]:i.MIRRORED_REPEAT},ae={[Ot]:i.NEAREST,[vl]:i.NEAREST_MIPMAP_NEAREST,[Es]:i.NEAREST_MIPMAP_LINEAR,[Kt]:i.LINEAR,[Kv]:i.LINEAR_MIPMAP_NEAREST,[hn]:i.LINEAR_MIPMAP_LINEAR},me={[o0]:i.NEVER,[p0]:i.ALWAYS,[l0]:i.LESS,[ec]:i.LEQUAL,[c0]:i.EQUAL,[d0]:i.GEQUAL,[h0]:i.GREATER,[u0]:i.NOTEQUAL};function W(M,w,z){if(z?(i.texParameteri(M,i.TEXTURE_WRAP_S,ie[w.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,ie[w.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,ie[w.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,ae[w.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,ae[w.minFilter])):(i.texParameteri(M,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(M,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(w.wrapS!==ar||w.wrapT!==ar)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(M,i.TEXTURE_MAG_FILTER,A(w.magFilter)),i.texParameteri(M,i.TEXTURE_MIN_FILTER,A(w.minFilter)),w.minFilter!==Ot&&w.minFilter!==Kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,me[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Ot||w.minFilter!==Es&&w.minFilter!==hn||w.type===Gr&&e.has("OES_texture_float_linear")===!1||s===!1&&w.type===un&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||r.get(w).__currentAnisotropy)&&(i.texParameterf(M,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,n.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy)}}function $(M,w){let z=!1;M.__webglInit===void 0&&(M.__webglInit=!0,w.addEventListener("dispose",R));const ne=w.source;let te=d.get(ne);te===void 0&&(te={},d.set(ne,te));const re=B(w);if(re!==M.__cacheKey){te[re]===void 0&&(te[re]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),te[re].usedTimes++;const xe=te[M.__cacheKey];xe!==void 0&&(te[M.__cacheKey].usedTimes--,xe.usedTimes===0&&E(w)),M.__cacheKey=re,M.__webglTexture=te[re].texture}return z}function ve(M,w,z){let ne=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ne=i.TEXTURE_3D);const te=$(M,w),re=w.source;t.bindTexture(ne,M.__webglTexture,i.TEXTURE0+z);const xe=r.get(re);if(re.version!==xe.__version||te===!0){t.activeTexture(i.TEXTURE0+z);const pe=at.getPrimaries(at.workingColorSpace),ge=w.colorSpace===Jt?null:at.getPrimaries(w.colorSpace),Ae=w.colorSpace===Jt||pe===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const ze=p(w)&&f(w.image)===!1;let ee=v(w.image,ze,!1,n.maxTextureSize);ee=Fe(w,ee);const $e=f(ee)||s,T=a.convert(w.format,w.colorSpace);let Q=a.convert(w.type),he=P(w.internalFormat,T,Q,w.colorSpace,w.isVideoTexture);W(ne,w,$e);let le;const Ee=w.mipmaps,Ge=s&&w.isVideoTexture!==!0&&he!==Cl,tt=xe.__version===void 0||te===!0,ke=I(w,ee,$e);if(w.isDepthTexture)he=i.DEPTH_COMPONENT,s?w.type===Gr?he=i.DEPTH_COMPONENT32F:w.type===Hr?he=i.DEPTH_COMPONENT24:w.type===ei?he=i.DEPTH24_STENCIL8:he=i.DEPTH_COMPONENT16:w.type===Gr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===ti&&he===i.DEPTH_COMPONENT&&w.type!==bs&&w.type!==Hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Hr,Q=a.convert(w.type)),w.format===bi&&he===i.DEPTH_COMPONENT&&(he=i.DEPTH_STENCIL,w.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=ei,Q=a.convert(w.type))),tt&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,he,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,he,ee.width,ee.height,0,T,Q,null));else if(w.isDataTexture)if(Ee.length>0&&$e){Ge&&tt&&t.texStorage2D(i.TEXTURE_2D,ke,he,Ee[0].width,Ee[0].height);for(let ce=0,C=Ee.length;ce<C;ce++)le=Ee[ce],Ge?t.texSubImage2D(i.TEXTURE_2D,ce,0,0,le.width,le.height,T,Q,le.data):t.texImage2D(i.TEXTURE_2D,ce,he,le.width,le.height,0,T,Q,le.data);w.generateMipmaps=!1}else Ge?(tt&&t.texStorage2D(i.TEXTURE_2D,ke,he,ee.width,ee.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,T,Q,ee.data)):t.texImage2D(i.TEXTURE_2D,0,he,ee.width,ee.height,0,T,Q,ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ge&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,he,Ee[0].width,Ee[0].height,ee.depth);for(let ce=0,C=Ee.length;ce<C;ce++)le=Ee[ce],w.format!==sr?T!==null?Ge?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,le.width,le.height,ee.depth,T,le.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,he,le.width,le.height,ee.depth,0,le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,le.width,le.height,ee.depth,T,Q,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,he,le.width,le.height,ee.depth,0,T,Q,le.data)}else{Ge&&tt&&t.texStorage2D(i.TEXTURE_2D,ke,he,Ee[0].width,Ee[0].height);for(let ce=0,C=Ee.length;ce<C;ce++)le=Ee[ce],w.format!==sr?T!==null?Ge?t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,le.width,le.height,T,le.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,he,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage2D(i.TEXTURE_2D,ce,0,0,le.width,le.height,T,Q,le.data):t.texImage2D(i.TEXTURE_2D,ce,he,le.width,le.height,0,T,Q,le.data)}else if(w.isDataArrayTexture)Ge?(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,he,ee.width,ee.height,ee.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,T,Q,ee.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,ee.width,ee.height,ee.depth,0,T,Q,ee.data);else if(w.isData3DTexture)Ge?(tt&&t.texStorage3D(i.TEXTURE_3D,ke,he,ee.width,ee.height,ee.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,T,Q,ee.data)):t.texImage3D(i.TEXTURE_3D,0,he,ee.width,ee.height,ee.depth,0,T,Q,ee.data);else if(w.isFramebufferTexture){if(tt)if(Ge)t.texStorage2D(i.TEXTURE_2D,ke,he,ee.width,ee.height);else{let ce=ee.width,C=ee.height;for(let se=0;se<ke;se++)t.texImage2D(i.TEXTURE_2D,se,he,ce,C,0,T,Q,null),ce>>=1,C>>=1}}else if(Ee.length>0&&$e){Ge&&tt&&t.texStorage2D(i.TEXTURE_2D,ke,he,Ee[0].width,Ee[0].height);for(let ce=0,C=Ee.length;ce<C;ce++)le=Ee[ce],Ge?t.texSubImage2D(i.TEXTURE_2D,ce,0,0,T,Q,le):t.texImage2D(i.TEXTURE_2D,ce,he,T,Q,le);w.generateMipmaps=!1}else Ge?(tt&&t.texStorage2D(i.TEXTURE_2D,ke,he,ee.width,ee.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,T,Q,ee)):t.texImage2D(i.TEXTURE_2D,0,he,T,Q,ee);b(w,$e)&&x(ne),xe.__version=re.version,w.onUpdate&&w.onUpdate(w)}M.__version=w.version}function Se(M,w,z){if(w.image.length!==6)return;const ne=$(M,w),te=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+z);const re=r.get(te);if(te.version!==re.__version||ne===!0){t.activeTexture(i.TEXTURE0+z);const xe=at.getPrimaries(at.workingColorSpace),pe=w.colorSpace===Jt?null:at.getPrimaries(w.colorSpace),ge=w.colorSpace===Jt||xe===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ae=w.isCompressedTexture||w.image[0].isCompressedTexture,ze=w.image[0]&&w.image[0].isDataTexture,ee=[];for(let ce=0;ce<6;ce++)!Ae&&!ze?ee[ce]=v(w.image[ce],!1,!0,n.maxCubemapSize):ee[ce]=ze?w.image[ce].image:w.image[ce],ee[ce]=Fe(w,ee[ce]);const $e=ee[0],T=f($e)||s,Q=a.convert(w.format,w.colorSpace),he=a.convert(w.type),le=P(w.internalFormat,Q,he,w.colorSpace),Ee=s&&w.isVideoTexture!==!0,Ge=re.__version===void 0||ne===!0;let tt=I(w,$e,T);W(i.TEXTURE_CUBE_MAP,w,T);let ke;if(Ae){Ee&&Ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,tt,le,$e.width,$e.height);for(let ce=0;ce<6;ce++){ke=ee[ce].mipmaps;for(let C=0;C<ke.length;C++){const se=ke[C];w.format!==sr?Q!==null?Ee?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,C,0,0,se.width,se.height,Q,se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,C,le,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,C,0,0,se.width,se.height,Q,he,se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,C,le,se.width,se.height,0,Q,he,se.data)}}}else{ke=w.mipmaps,Ee&&Ge&&(ke.length>0&&tt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,tt,le,ee[0].width,ee[0].height));for(let ce=0;ce<6;ce++)if(ze){Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ee[ce].width,ee[ce].height,Q,he,ee[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,le,ee[ce].width,ee[ce].height,0,Q,he,ee[ce].data);for(let C=0;C<ke.length;C++){const se=ke[C].image[ce].image;Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,C+1,0,0,se.width,se.height,Q,he,se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,C+1,le,se.width,se.height,0,Q,he,se.data)}}else{Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Q,he,ee[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,le,Q,he,ee[ce]);for(let C=0;C<ke.length;C++){const se=ke[C];Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,C+1,0,0,Q,he,se.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,C+1,le,Q,he,se.image[ce])}}}b(w,T)&&x(i.TEXTURE_CUBE_MAP),re.__version=te.version,w.onUpdate&&w.onUpdate(w)}M.__version=w.version}function ye(M,w,z,ne,te,re){const xe=a.convert(z.format,z.colorSpace),pe=a.convert(z.type),ge=P(z.internalFormat,xe,pe,z.colorSpace);if(!r.get(w).__hasExternalTextures){const Ae=Math.max(1,w.width>>re),ze=Math.max(1,w.height>>re);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,re,ge,Ae,ze,w.depth,0,xe,pe,null):t.texImage2D(te,re,ge,Ae,ze,0,xe,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),we(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,te,r.get(z).__webglTexture,0,Ie(w)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,te,r.get(z).__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(M,w,z){if(i.bindRenderbuffer(i.RENDERBUFFER,M),w.depthBuffer&&!w.stencilBuffer){let ne=s===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(z||we(w)){const te=w.depthTexture;te&&te.isDepthTexture&&(te.type===Gr?ne=i.DEPTH_COMPONENT32F:te.type===Hr&&(ne=i.DEPTH_COMPONENT24));const re=Ie(w);we(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,ne,w.width,w.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,re,ne,w.width,w.height)}else i.renderbufferStorage(i.RENDERBUFFER,ne,w.width,w.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,M)}else if(w.depthBuffer&&w.stencilBuffer){const ne=Ie(w);z&&we(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,w.width,w.height):we(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,M)}else{const ne=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let te=0;te<ne.length;te++){const re=ne[te],xe=a.convert(re.format,re.colorSpace),pe=a.convert(re.type),ge=P(re.internalFormat,xe,pe,re.colorSpace),Ae=Ie(w);z&&we(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,ge,w.width,w.height):we(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,ge,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ge,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Oe(M,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),q(w.depthTexture,0);const z=r.get(w.depthTexture).__webglTexture,ne=Ie(w);if(w.depthTexture.format===ti)we(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,z,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,z,0);else if(w.depthTexture.format===bi)we(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,z,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function Ce(M){const w=r.get(M),z=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!w.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Oe(w.__webglFramebuffer,M)}else if(z){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]=i.createRenderbuffer(),Ue(w.__webglDepthbuffer[ne],M,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),Ue(w.__webglDepthbuffer,M,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(M,w,z){const ne=r.get(M);w!==void 0&&ye(ne.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ce(M)}function G(M){const w=M.texture,z=r.get(M),ne=r.get(w);M.addEventListener("dispose",Y),M.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=w.version,o.memory.textures++);const te=M.isWebGLCubeRenderTarget===!0,re=M.isWebGLMultipleRenderTargets===!0,xe=f(M)||s;if(te){z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(s&&w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer[pe]=[];for(let ge=0;ge<w.mipmaps.length;ge++)z.__webglFramebuffer[pe][ge]=i.createFramebuffer()}else z.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(s&&w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer=[];for(let pe=0;pe<w.mipmaps.length;pe++)z.__webglFramebuffer[pe]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(re)if(n.drawBuffers){const pe=M.texture;for(let ge=0,Ae=pe.length;ge<Ae;ge++){const ze=r.get(pe[ge]);ze.__webglTexture===void 0&&(ze.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&M.samples>0&&we(M)===!1){const pe=re?w:[w];z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ge=0;ge<pe.length;ge++){const Ae=pe[ge];z.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ge]);const ze=a.convert(Ae.format,Ae.colorSpace),ee=a.convert(Ae.type),$e=P(Ae.internalFormat,ze,ee,Ae.colorSpace,M.isXRRenderTarget===!0),T=Ie(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,T,$e,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,z.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(z.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),W(i.TEXTURE_CUBE_MAP,w,xe);for(let pe=0;pe<6;pe++)if(s&&w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)ye(z.__webglFramebuffer[pe][ge],M,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ge);else ye(z.__webglFramebuffer[pe],M,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);b(w,xe)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const pe=M.texture;for(let ge=0,Ae=pe.length;ge<Ae;ge++){const ze=pe[ge],ee=r.get(ze);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),W(i.TEXTURE_2D,ze,xe),ye(z.__webglFramebuffer,M,ze,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,0),b(ze,xe)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(s?pe=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,ne.__webglTexture),W(pe,w,xe),s&&w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)ye(z.__webglFramebuffer[ge],M,w,i.COLOR_ATTACHMENT0,pe,ge);else ye(z.__webglFramebuffer,M,w,i.COLOR_ATTACHMENT0,pe,0);b(w,xe)&&x(pe),t.unbindTexture()}M.depthBuffer&&Ce(M)}function Rt(M){const w=f(M)||s,z=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0,te=z.length;ne<te;ne++){const re=z[ne];if(b(re,w)){const xe=M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,pe=r.get(re).__webglTexture;t.bindTexture(xe,pe),x(xe),t.unbindTexture()}}}function be(M){if(s&&M.samples>0&&we(M)===!1){const w=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],z=M.width,ne=M.height;let te=i.COLOR_BUFFER_BIT;const re=[],xe=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=r.get(M),ge=M.isWebGLMultipleRenderTargets===!0;if(ge)for(let Ae=0;Ae<w.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Ae=0;Ae<w.length;Ae++){re.push(i.COLOR_ATTACHMENT0+Ae),M.depthBuffer&&re.push(xe);const ze=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(ze===!1&&(M.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),ge&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[Ae]),ze===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[xe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[xe])),ge){const ee=r.get(w[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,z,ne,0,0,z,ne,te,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let Ae=0;Ae<w.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,pe.__webglColorRenderbuffer[Ae]);const ze=r.get(w[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function Ie(M){return Math.min(n.maxSamples,M.samples)}function we(M){const w=r.get(M);return s&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ht(M){const w=o.render.frame;h.get(M)!==w&&(h.set(M,w),M.update())}function Fe(M,w){const z=M.colorSpace,ne=M.format,te=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Ds||z!==Sr&&z!==Jt&&(at.getTransfer(z)===ct?s===!1?e.has("EXT_sRGB")===!0&&ne===sr?(M.format=Ds,M.minFilter=Kt,M.generateMipmaps=!1):w=lc.sRGBToLinear(w):(ne!==sr||te!==Br)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),w}this.allocateTextureUnit=D,this.resetTextureUnits=oe,this.setTexture2D=q,this.setTexture2DArray=Z,this.setTexture3D=J,this.setTextureCube=K,this.rebindTextures=Qe,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=we}function AM(i,e,t){const r=t.isWebGL2;function n(a,o=Jt){let s;const l=at.getTransfer(o);if(a===Br)return i.UNSIGNED_BYTE;if(a===xl)return i.UNSIGNED_SHORT_4_4_4_4;if(a===yl)return i.UNSIGNED_SHORT_5_5_5_1;if(a===Jv)return i.BYTE;if(a===Zv)return i.SHORT;if(a===bs)return i.UNSIGNED_SHORT;if(a===wl)return i.INT;if(a===Hr)return i.UNSIGNED_INT;if(a===Gr)return i.FLOAT;if(a===un)return r?i.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===Qv)return i.ALPHA;if(a===sr)return i.RGBA;if(a===$v)return i.LUMINANCE;if(a===e0)return i.LUMINANCE_ALPHA;if(a===ti)return i.DEPTH_COMPONENT;if(a===bi)return i.DEPTH_STENCIL;if(a===Ds)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===t0)return i.RED;if(a===Sl)return i.RED_INTEGER;if(a===r0)return i.RG;if(a===Ml)return i.RG_INTEGER;if(a===El)return i.RGBA_INTEGER;if(a===Ts||a===Rs||a===As||a===Cs)if(l===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===Ts)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===As)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===Ts)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Rs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===As)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Cs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===bl||a===Tl||a===Rl||a===Al)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===bl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Tl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Rl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Al)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Cl)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Pl||a===Ll)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===Pl)return l===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===Ll)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Dl||a===Il||a===Ul||a===Nl||a===Ol||a===Fl||a===zl||a===Bl||a===Hl||a===Gl||a===kl||a===Vl||a===Wl||a===jl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===Dl)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Il)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Ul)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Nl)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Ol)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Fl)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===zl)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Bl)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Hl)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Gl)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===kl)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Vl)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Wl)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===jl)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Ps||a===Xl||a===ql)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===Ps)return l===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Xl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===ql)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===i0||a===Yl||a===Kl||a===Jl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===Ps)return s.COMPRESSED_RED_RGTC1_EXT;if(a===Yl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Kl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Jl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===ei?r?i.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:n}}class CM extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ra extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PM={type:"move"};class uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ra,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ra,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ra,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const f=t.getJointPose(v,r),p=this._getHandJoint(c,v);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&a!==null&&(n=a),n!==null&&(s.matrix.fromArray(n.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,n.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(n.linearVelocity)):s.hasLinearVelocity=!1,n.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(n.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(PM)))}return s!==null&&(s.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Ra;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class LM extends ii{constructor(e,t){super();const r=this;let n=null,a=1,o=null,s="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,_=null;const v=t.getContextAttributes();let f=null,p=null;const b=[],x=[],P=new De;let I=null;const A=new Qt;A.layers.enable(1),A.viewport=new bt;const R=new Qt;R.layers.enable(2),R.viewport=new bt;const Y=[A,R],S=new CM;S.layers.enable(1),S.layers.enable(2);let E=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let $=b[W];return $===void 0&&($=new uo,b[W]=$),$.getTargetRaySpace()},this.getControllerGrip=function(W){let $=b[W];return $===void 0&&($=new uo,b[W]=$),$.getGripSpace()},this.getHand=function(W){let $=b[W];return $===void 0&&($=new uo,b[W]=$),$.getHandSpace()};function V(W){const $=x.indexOf(W.inputSource);if($===-1)return;const ve=b[$];ve!==void 0&&(ve.update(W.inputSource,W.frame,c||o),ve.dispatchEvent({type:W.type,data:W.inputSource}))}function oe(){n.removeEventListener("select",V),n.removeEventListener("selectstart",V),n.removeEventListener("selectend",V),n.removeEventListener("squeeze",V),n.removeEventListener("squeezestart",V),n.removeEventListener("squeezeend",V),n.removeEventListener("end",oe),n.removeEventListener("inputsourceschange",D);for(let W=0;W<b.length;W++){const $=x[W];$!==null&&(x[W]=null,b[W].disconnect($))}E=null,j=null,e.setRenderTarget(f),m=null,d=null,u=null,n=null,p=null,me.stop(),r.isPresenting=!1,e.setPixelRatio(I),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){s=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=async function(W){if(n=W,n!==null){if(f=e.getRenderTarget(),n.addEventListener("select",V),n.addEventListener("selectstart",V),n.addEventListener("selectend",V),n.addEventListener("squeeze",V),n.addEventListener("squeezestart",V),n.addEventListener("squeezeend",V),n.addEventListener("end",oe),n.addEventListener("inputsourceschange",D),v.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(P),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:n.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(n,t,$),n.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new ni(m.framebufferWidth,m.framebufferHeight,{format:sr,type:Br,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let $=null,ve=null,Se=null;v.depth&&(Se=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=v.stencil?bi:ti,ve=v.stencil?ei:Hr);const ye={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:a};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(ye),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new ni(d.textureWidth,d.textureHeight,{format:sr,type:Br,depthTexture:new Bc(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Ue=e.properties.get(p);Ue.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(s),me.setContext(n),me.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function D(W){for(let $=0;$<W.removed.length;$++){const ve=W.removed[$],Se=x.indexOf(ve);Se>=0&&(x[Se]=null,b[Se].disconnect(ve))}for(let $=0;$<W.added.length;$++){const ve=W.added[$];let Se=x.indexOf(ve);if(Se===-1){for(let Ue=0;Ue<b.length;Ue++)if(Ue>=x.length){x.push(ve),Se=Ue;break}else if(x[Ue]===null){x[Ue]=ve,Se=Ue;break}if(Se===-1)break}const ye=b[Se];ye&&ye.connect(ve)}}const B=new F,q=new F;function Z(W,$,ve){B.setFromMatrixPosition($.matrixWorld),q.setFromMatrixPosition(ve.matrixWorld);const Se=B.distanceTo(q),ye=$.projectionMatrix.elements,Ue=ve.projectionMatrix.elements,Oe=ye[14]/(ye[10]-1),Ce=ye[14]/(ye[10]+1),Qe=(ye[9]+1)/ye[5],G=(ye[9]-1)/ye[5],Rt=(ye[8]-1)/ye[0],be=(Ue[8]+1)/Ue[0],Ie=Oe*Rt,we=Oe*be,ht=Se/(-Rt+be),Fe=ht*-Rt;$.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Fe),W.translateZ(ht),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const M=Oe+ht,w=Ce+ht,z=Ie-Fe,ne=we+(Se-Fe),te=Qe*Ce/w*M,re=G*Ce/w*M;W.projectionMatrix.makePerspective(z,ne,te,re,M,w),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function J(W,$){$===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices($.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(n===null)return;S.near=R.near=A.near=W.near,S.far=R.far=A.far=W.far,(E!==S.near||j!==S.far)&&(n.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,j=S.far);const $=W.parent,ve=S.cameras;J(S,$);for(let Se=0;Se<ve.length;Se++)J(ve[Se],$);ve.length===2?Z(S,A,R):S.projectionMatrix.copy(A.projectionMatrix),K(W,S,$)};function K(W,$,ve){ve===null?W.matrix.copy($.matrixWorld):(W.matrix.copy(ve.matrixWorld),W.matrix.invert(),W.matrix.multiply($.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=pn*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)};let ie=null;function ae(W,$){if(h=$.getViewerPose(c||o),_=$,h!==null){const ve=h.views;m!==null&&(e.setRenderTargetFramebuffer(p,m.framebuffer),e.setRenderTarget(p));let Se=!1;ve.length!==S.cameras.length&&(S.cameras.length=0,Se=!0);for(let ye=0;ye<ve.length;ye++){const Ue=ve[ye];let Oe=null;if(m!==null)Oe=m.getViewport(Ue);else{const Qe=u.getViewSubImage(d,Ue);Oe=Qe.viewport,ye===0&&(e.setRenderTargetTextures(p,Qe.colorTexture,d.ignoreDepthValues?void 0:Qe.depthStencilTexture),e.setRenderTarget(p))}let Ce=Y[ye];Ce===void 0&&(Ce=new Qt,Ce.layers.enable(ye),Ce.viewport=new bt,Y[ye]=Ce),Ce.matrix.fromArray(Ue.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Ue.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),ye===0&&(S.matrix.copy(Ce.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Se===!0&&S.cameras.push(Ce)}}for(let ve=0;ve<b.length;ve++){const Se=x[ve],ye=b[ve];Se!==null&&ye!==void 0&&ye.update(Se,$,c||o)}ie&&ie(W,$),$.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:$}),_=null}const me=new Pc;me.setAnimationLoop(ae),this.setAnimationLoop=function(W){ie=W},this.dispose=function(){}}}function DM(i,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function r(f,p){p.color.getRGB(f.fogColor.value,Rc(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function n(f,p,b,x,P){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(f,p):p.isMeshToonMaterial?(a(f,p),u(f,p)):p.isMeshPhongMaterial?(a(f,p),h(f,p)):p.isMeshStandardMaterial?(a(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,P)):p.isMeshMatcapMaterial?(a(f,p),_(f,p)):p.isMeshDepthMaterial?a(f,p):p.isMeshDistanceMaterial?(a(f,p),v(f,p)):p.isMeshNormalMaterial?a(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&s(f,p)):p.isPointsMaterial?l(f,p,b,x):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Gt&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Gt&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const b=e.get(p).envMap;if(b&&(f.envMap.value=b,f.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function s(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,b,x){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*b,f.scale.value=x*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,b){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gt&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=b.texture,f.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,p){p.matcap&&(f.matcap.value=p.matcap)}function v(f,p){const b=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(b.matrixWorld),f.nearDistance.value=b.shadow.camera.near,f.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function IM(i,e,t,r){let n={},a={},o=[];const s=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,x){const P=x.program;r.uniformBlockBinding(b,P)}function c(b,x){let P=n[b.id];P===void 0&&(_(b),P=h(b),n[b.id]=P,b.addEventListener("dispose",f));const I=x.program;r.updateUBOMapping(b,I);const A=e.render.frame;a[b.id]!==A&&(d(b),a[b.id]=A)}function h(b){const x=u();b.__bindingPointIndex=x;const P=i.createBuffer(),I=b.__size,A=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,I,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,P),P}function u(){for(let b=0;b<s;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const x=n[b.id],P=b.uniforms,I=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,R=P.length;A<R;A++){const Y=Array.isArray(P[A])?P[A]:[P[A]];for(let S=0,E=Y.length;S<E;S++){const j=Y[S];if(m(j,A,S,I)===!0){const V=j.__offset,oe=Array.isArray(j.value)?j.value:[j.value];let D=0;for(let B=0;B<oe.length;B++){const q=oe[B],Z=v(q);typeof q=="number"||typeof q=="boolean"?(j.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,V+D,j.__data)):q.isMatrix3?(j.__data[0]=q.elements[0],j.__data[1]=q.elements[1],j.__data[2]=q.elements[2],j.__data[3]=0,j.__data[4]=q.elements[3],j.__data[5]=q.elements[4],j.__data[6]=q.elements[5],j.__data[7]=0,j.__data[8]=q.elements[6],j.__data[9]=q.elements[7],j.__data[10]=q.elements[8],j.__data[11]=0):(q.toArray(j.__data,D),D+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,j.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,x,P,I){const A=b.value,R=x+"_"+P;if(I[R]===void 0)return typeof A=="number"||typeof A=="boolean"?I[R]=A:I[R]=A.clone(),!0;{const Y=I[R];if(typeof A=="number"||typeof A=="boolean"){if(Y!==A)return I[R]=A,!0}else if(Y.equals(A)===!1)return Y.copy(A),!0}return!1}function _(b){const x=b.uniforms;let P=0;const I=16;for(let R=0,Y=x.length;R<Y;R++){const S=Array.isArray(x[R])?x[R]:[x[R]];for(let E=0,j=S.length;E<j;E++){const V=S[E],oe=Array.isArray(V.value)?V.value:[V.value];for(let D=0,B=oe.length;D<B;D++){const q=oe[D],Z=v(q),J=P%I;J!==0&&I-J<Z.boundary&&(P+=I-J),V.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=P,P+=Z.storage}}}const A=P%I;return A>0&&(P+=I-A),b.__size=P,b.__cache={},this}function v(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function f(b){const x=b.target;x.removeEventListener("dispose",f);const P=o.indexOf(x.__bindingPointIndex);o.splice(P,1),i.deleteBuffer(n[x.id]),delete n[x.id],delete a[x.id]}function p(){for(const b in n)i.deleteBuffer(n[b]);o=[],n={},a={}}return{bind:l,update:c,dispose:p}}class sh{constructor(e={}){const{canvas:t=C0(),context:r=null,depth:n=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;r!==null?d=r.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),_=new Int32Array(4);let v=null,f=null;const p=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this._useLegacyLights=!1,this.toneMapping=zr,this.toneMappingExposure=1;const x=this;let P=!1,I=0,A=0,R=null,Y=-1,S=null;const E=new bt,j=new bt;let V=null;const oe=new Je(0);let D=0,B=t.width,q=t.height,Z=1,J=null,K=null;const ie=new bt(0,0,B,q),ae=new bt(0,0,B,q);let me=!1;const W=new ro;let $=!1,ve=!1,Se=null;const ye=new _t,Ue=new De,Oe=new F,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Qe(){return R===null?Z:1}let G=r;function Rt(y,O){for(let k=0;k<y.length;k++){const X=y[k],H=t.getContext(X,O);if(H!==null)return H}return null}try{const y={alpha:!0,depth:n,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gs}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",se,!1),G===null){const O=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&O.shift(),G=Rt(O,y),G===null)throw Rt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let be,Ie,we,ht,Fe,M,w,z,ne,te,re,xe,pe,ge,Ae,ze,ee,$e,T,Q,he,le,Ee,Ge;function tt(){be=new Vy(G),Ie=new Fy(G,be,e),be.init(Ie),le=new AM(G,be,Ie),we=new TM(G,be,Ie),ht=new Xy(G),Fe=new dM,M=new RM(G,be,we,Fe,Ie,le,ht),w=new By(x),z=new ky(x),ne=new ew(G,Ie),Ee=new Ny(G,be,ne,Ie),te=new Wy(G,ne,ht,Ee),re=new Jy(G,te,ne,ht),T=new Ky(G,Ie,M),ze=new zy(Fe),xe=new uM(x,w,z,be,Ie,Ee,ze),pe=new DM(x,Fe),ge=new fM,Ae=new xM(be,Ie),$e=new Uy(x,w,z,we,re,d,l),ee=new bM(x,re,Ie),Ge=new IM(G,ht,Ie,we),Q=new Oy(G,be,ht,Ie),he=new jy(G,be,ht,Ie),ht.programs=xe.programs,x.capabilities=Ie,x.extensions=be,x.properties=Fe,x.renderLists=ge,x.shadowMap=ee,x.state=we,x.info=ht}tt();const ke=new LM(x,G);this.xr=ke,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const y=be.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=be.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(y){y!==void 0&&(Z=y,this.setSize(B,q,!1))},this.getSize=function(y){return y.set(B,q)},this.setSize=function(y,O,k=!0){if(ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=y,q=O,t.width=Math.floor(y*Z),t.height=Math.floor(O*Z),k===!0&&(t.style.width=y+"px",t.style.height=O+"px"),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(B*Z,q*Z).floor()},this.setDrawingBufferSize=function(y,O,k){B=y,q=O,Z=k,t.width=Math.floor(y*k),t.height=Math.floor(O*k),this.setViewport(0,0,y,O)},this.getCurrentViewport=function(y){return y.copy(E)},this.getViewport=function(y){return y.copy(ie)},this.setViewport=function(y,O,k,X){y.isVector4?ie.set(y.x,y.y,y.z,y.w):ie.set(y,O,k,X),we.viewport(E.copy(ie).multiplyScalar(Z).floor())},this.getScissor=function(y){return y.copy(ae)},this.setScissor=function(y,O,k,X){y.isVector4?ae.set(y.x,y.y,y.z,y.w):ae.set(y,O,k,X),we.scissor(j.copy(ae).multiplyScalar(Z).floor())},this.getScissorTest=function(){return me},this.setScissorTest=function(y){we.setScissorTest(me=y)},this.setOpaqueSort=function(y){J=y},this.setTransparentSort=function(y){K=y},this.getClearColor=function(y){return y.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(y=!0,O=!0,k=!0){let X=0;if(y){let H=!1;if(R!==null){const de=R.texture.format;H=de===El||de===Ml||de===Sl}if(H){const de=R.texture.type,Te=de===Br||de===Hr||de===bs||de===ei||de===xl||de===yl,Le=$e.getClearColor(),Ne=$e.getClearAlpha(),Ze=Le.r,Ve=Le.g,We=Le.b;Te?(m[0]=Ze,m[1]=Ve,m[2]=We,m[3]=Ne,G.clearBufferuiv(G.COLOR,0,m)):(_[0]=Ze,_[1]=Ve,_[2]=We,_[3]=Ne,G.clearBufferiv(G.COLOR,0,_))}else X|=G.COLOR_BUFFER_BIT}O&&(X|=G.DEPTH_BUFFER_BIT),k&&(X|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ge.dispose(),Ae.dispose(),Fe.dispose(),w.dispose(),z.dispose(),re.dispose(),Ee.dispose(),Ge.dispose(),xe.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",$t),ke.removeEventListener("sessionend",lt),Se&&(Se.dispose(),Se=null),Bt.stop()};function ce(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const y=ht.autoReset,O=ee.enabled,k=ee.autoUpdate,X=ee.needsUpdate,H=ee.type;tt(),ht.autoReset=y,ee.enabled=O,ee.autoUpdate=k,ee.needsUpdate=X,ee.type=H}function se(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function fe(y){const O=y.target;O.removeEventListener("dispose",fe),Pe(O)}function Pe(y){Me(y),Fe.remove(y)}function Me(y){const O=Fe.get(y).programs;O!==void 0&&(O.forEach(function(k){xe.releaseProgram(k)}),y.isShaderMaterial&&xe.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,k,X,H,de){O===null&&(O=Ce);const Te=H.isMesh&&H.matrixWorld.determinant()<0,Le=KM(y,O,k,X,H);we.setMaterial(X,Te);let Ne=k.index,Ze=1;if(X.wireframe===!0){if(Ne=te.getWireframeAttribute(k),Ne===void 0)return;Ze=2}const Ve=k.drawRange,We=k.attributes.position;let It=Ve.start*Ze,Et=(Ve.start+Ve.count)*Ze;de!==null&&(It=Math.max(It,de.start*Ze),Et=Math.min(Et,(de.start+de.count)*Ze)),Ne!==null?(It=Math.max(It,0),Et=Math.min(Et,Ne.count)):We!=null&&(It=Math.max(It,0),Et=Math.min(Et,We.count));const er=Et-It;if(er<0||er===1/0)return;Ee.setup(H,X,Le,k,Ne);let Pr,ft=Q;if(Ne!==null&&(Pr=ne.get(Ne),ft=he,ft.setIndex(Pr)),H.isMesh)X.wireframe===!0?(we.setLineWidth(X.wireframeLinewidth*Qe()),ft.setMode(G.LINES)):ft.setMode(G.TRIANGLES);else if(H.isLine){let qe=X.linewidth;qe===void 0&&(qe=1),we.setLineWidth(qe*Qe()),H.isLineSegments?ft.setMode(G.LINES):H.isLineLoop?ft.setMode(G.LINE_LOOP):ft.setMode(G.LINE_STRIP)}else H.isPoints?ft.setMode(G.POINTS):H.isSprite&&ft.setMode(G.TRIANGLES);if(H.isBatchedMesh)ft.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)ft.renderInstances(It,er,H.count);else if(k.isInstancedBufferGeometry){const qe=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,xo=Math.min(k.instanceCount,qe);ft.renderInstances(It,er,xo)}else ft.render(It,er)};function rt(y,O,k){y.transparent===!0&&y.side===yr&&y.forceSinglePass===!1?(y.side=Gt,y.needsUpdate=!0,Pa(y,O,k),y.side=Or,y.needsUpdate=!0,Pa(y,O,k),y.side=yr):Pa(y,O,k)}this.compile=function(y,O,k=null){k===null&&(k=y),f=Ae.get(k),f.init(),b.push(f),k.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),y!==k&&y.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),f.setupLights(x._useLegacyLights);const X=new Set;return y.traverse(function(H){const de=H.material;if(de)if(Array.isArray(de))for(let Te=0;Te<de.length;Te++){const Le=de[Te];rt(Le,k,H),X.add(Le)}else rt(de,k,H),X.add(de)}),b.pop(),f=null,X},this.compileAsync=function(y,O,k=null){const X=this.compile(y,O,k);return new Promise(H=>{function de(){if(X.forEach(function(Te){Fe.get(Te).currentProgram.isReady()&&X.delete(Te)}),X.size===0){H(y);return}setTimeout(de,10)}be.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let ot=null;function wt(y){ot&&ot(y)}function $t(){Bt.stop()}function lt(){Bt.start()}const Bt=new Pc;Bt.setAnimationLoop(wt),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(y){ot=y,ke.setAnimationLoop(y),y===null?Bt.stop():Bt.start()},ke.addEventListener("sessionstart",$t),ke.addEventListener("sessionend",lt),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(O),O=ke.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,O,R),f=Ae.get(y,b.length),f.init(),b.push(f),ye.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),W.setFromProjectionMatrix(ye),ve=this.localClippingEnabled,$=ze.init(this.clippingPlanes,ve),v=ge.get(y,p.length),v.init(),p.push(v),vr(y,O,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(J,K),this.info.render.frame++,$===!0&&ze.beginShadows();const k=f.state.shadowsArray;if(ee.render(k,y,O),$===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),$e.render(v,y),f.setupLights(x._useLegacyLights),O.isArrayCamera){const X=O.cameras;for(let H=0,de=X.length;H<de;H++){const Te=X[H];xh(v,y,Te,Te.viewport)}}else xh(v,y,O);R!==null&&(M.updateMultisampleRenderTarget(R),M.updateRenderTargetMipmap(R)),y.isScene===!0&&y.onAfterRender(x,y,O),Ee.resetDefaultState(),Y=-1,S=null,b.pop(),b.length>0?f=b[b.length-1]:f=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function vr(y,O,k,X){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||W.intersectsSprite(y)){X&&Oe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ye);const de=re.update(y),Te=y.material;Te.visible&&v.push(y,de,Te,k,Oe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||W.intersectsObject(y))){const de=re.update(y),Te=y.material;if(X&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Oe.copy(y.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Oe.copy(de.boundingSphere.center)),Oe.applyMatrix4(y.matrixWorld).applyMatrix4(ye)),Array.isArray(Te)){const Le=de.groups;for(let Ne=0,Ze=Le.length;Ne<Ze;Ne++){const Ve=Le[Ne],We=Te[Ve.materialIndex];We&&We.visible&&v.push(y,de,We,k,Oe.z,Ve)}}else Te.visible&&v.push(y,de,Te,k,Oe.z,null)}}const H=y.children;for(let de=0,Te=H.length;de<Te;de++)vr(H[de],O,k,X)}function xh(y,O,k,X){const H=y.opaque,de=y.transmissive,Te=y.transparent;f.setupLightsView(k),$===!0&&ze.setGlobalState(x.clippingPlanes,k),de.length>0&&YM(H,de,O,k),X&&we.viewport(E.copy(X)),H.length>0&&Ca(H,O,k),de.length>0&&Ca(de,O,k),Te.length>0&&Ca(Te,O,k),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function YM(y,O,k,X){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const H=Ie.isWebGL2;Se===null&&(Se=new ni(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?un:Br,minFilter:hn,samples:H?4:0})),x.getDrawingBufferSize(Ue),H?Se.setSize(Ue.x,Ue.y):Se.setSize(ta(Ue.x),ta(Ue.y));const de=x.getRenderTarget();x.setRenderTarget(Se),x.getClearColor(oe),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear();const Te=x.toneMapping;x.toneMapping=zr,Ca(y,k,X),M.updateMultisampleRenderTarget(Se),M.updateRenderTargetMipmap(Se);let Le=!1;for(let Ne=0,Ze=O.length;Ne<Ze;Ne++){const Ve=O[Ne],We=Ve.object,It=Ve.geometry,Et=Ve.material,er=Ve.group;if(Et.side===yr&&We.layers.test(X.layers)){const Pr=Et.side;Et.side=Gt,Et.needsUpdate=!0,yh(We,k,X,It,Et,er),Et.side=Pr,Et.needsUpdate=!0,Le=!0}}Le===!0&&(M.updateMultisampleRenderTarget(Se),M.updateRenderTargetMipmap(Se)),x.setRenderTarget(de),x.setClearColor(oe,D),x.toneMapping=Te}function Ca(y,O,k){const X=O.isScene===!0?O.overrideMaterial:null;for(let H=0,de=y.length;H<de;H++){const Te=y[H],Le=Te.object,Ne=Te.geometry,Ze=X===null?Te.material:X,Ve=Te.group;Le.layers.test(k.layers)&&yh(Le,O,k,Ne,Ze,Ve)}}function yh(y,O,k,X,H,de){y.onBeforeRender(x,O,k,X,H,de),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(x,O,k,X,y,de),H.transparent===!0&&H.side===yr&&H.forceSinglePass===!1?(H.side=Gt,H.needsUpdate=!0,x.renderBufferDirect(k,O,X,H,y,de),H.side=Or,H.needsUpdate=!0,x.renderBufferDirect(k,O,X,H,y,de),H.side=yr):x.renderBufferDirect(k,O,X,H,y,de),y.onAfterRender(x,O,k,X,H,de)}function Pa(y,O,k){O.isScene!==!0&&(O=Ce);const X=Fe.get(y),H=f.state.lights,de=f.state.shadowsArray,Te=H.state.version,Le=xe.getParameters(y,H.state,de,O,k),Ne=xe.getProgramCacheKey(Le);let Ze=X.programs;X.environment=y.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(y.isMeshStandardMaterial?z:w).get(y.envMap||X.environment),Ze===void 0&&(y.addEventListener("dispose",fe),Ze=new Map,X.programs=Ze);let Ve=Ze.get(Ne);if(Ve!==void 0){if(X.currentProgram===Ve&&X.lightsStateVersion===Te)return Mh(y,Le),Ve}else Le.uniforms=xe.getUniforms(y),y.onBuild(k,Le,x),y.onBeforeCompile(Le,x),Ve=xe.acquireProgram(Le,Ne),Ze.set(Ne,Ve),X.uniforms=Le.uniforms;const We=X.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(We.clippingPlanes=ze.uniform),Mh(y,Le),X.needsLights=ZM(y),X.lightsStateVersion=Te,X.needsLights&&(We.ambientLightColor.value=H.state.ambient,We.lightProbe.value=H.state.probe,We.directionalLights.value=H.state.directional,We.directionalLightShadows.value=H.state.directionalShadow,We.spotLights.value=H.state.spot,We.spotLightShadows.value=H.state.spotShadow,We.rectAreaLights.value=H.state.rectArea,We.ltc_1.value=H.state.rectAreaLTC1,We.ltc_2.value=H.state.rectAreaLTC2,We.pointLights.value=H.state.point,We.pointLightShadows.value=H.state.pointShadow,We.hemisphereLights.value=H.state.hemi,We.directionalShadowMap.value=H.state.directionalShadowMap,We.directionalShadowMatrix.value=H.state.directionalShadowMatrix,We.spotShadowMap.value=H.state.spotShadowMap,We.spotLightMatrix.value=H.state.spotLightMatrix,We.spotLightMap.value=H.state.spotLightMap,We.pointShadowMap.value=H.state.pointShadowMap,We.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=Ve,X.uniformsList=null,Ve}function Sh(y){if(y.uniformsList===null){const O=y.currentProgram.getUniforms();y.uniformsList=Ta.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function Mh(y,O){const k=Fe.get(y);k.outputColorSpace=O.outputColorSpace,k.batching=O.batching,k.instancing=O.instancing,k.instancingColor=O.instancingColor,k.skinning=O.skinning,k.morphTargets=O.morphTargets,k.morphNormals=O.morphNormals,k.morphColors=O.morphColors,k.morphTargetsCount=O.morphTargetsCount,k.numClippingPlanes=O.numClippingPlanes,k.numIntersection=O.numClipIntersection,k.vertexAlphas=O.vertexAlphas,k.vertexTangents=O.vertexTangents,k.toneMapping=O.toneMapping}function KM(y,O,k,X,H){O.isScene!==!0&&(O=Ce),M.resetTextureUnits();const de=O.fog,Te=X.isMeshStandardMaterial?O.environment:null,Le=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Sr,Ne=(X.isMeshStandardMaterial?z:w).get(X.envMap||Te),Ze=X.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ve=!!k.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),We=!!k.morphAttributes.position,It=!!k.morphAttributes.normal,Et=!!k.morphAttributes.color;let er=zr;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(er=x.toneMapping);const Pr=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ft=Pr!==void 0?Pr.length:0,qe=Fe.get(X),xo=f.state.lights;if($===!0&&(ve===!0||y!==S)){const tr=y===S&&X.id===Y;ze.setState(X,y,tr)}let yo=!1;X.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==xo.state.version||qe.outputColorSpace!==Le||H.isBatchedMesh&&qe.batching===!1||!H.isBatchedMesh&&qe.batching===!0||H.isInstancedMesh&&qe.instancing===!1||!H.isInstancedMesh&&qe.instancing===!0||H.isSkinnedMesh&&qe.skinning===!1||!H.isSkinnedMesh&&qe.skinning===!0||H.isInstancedMesh&&qe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&qe.instancingColor===!1&&H.instanceColor!==null||qe.envMap!==Ne||X.fog===!0&&qe.fog!==de||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ze.numPlanes||qe.numIntersection!==ze.numIntersection)||qe.vertexAlphas!==Ze||qe.vertexTangents!==Ve||qe.morphTargets!==We||qe.morphNormals!==It||qe.morphColors!==Et||qe.toneMapping!==er||Ie.isWebGL2===!0&&qe.morphTargetsCount!==ft)&&(yo=!0):(yo=!0,qe.__version=X.version);let di=qe.currentProgram;yo===!0&&(di=Pa(X,O,H));let Eh=!1,Mn=!1,So=!1;const Ut=di.getUniforms(),pi=qe.uniforms;if(we.useProgram(di.program)&&(Eh=!0,Mn=!0,So=!0),X.id!==Y&&(Y=X.id,Mn=!0),Eh||S!==y){Ut.setValue(G,"projectionMatrix",y.projectionMatrix),Ut.setValue(G,"viewMatrix",y.matrixWorldInverse);const tr=Ut.map.cameraPosition;tr!==void 0&&tr.setValue(G,Oe.setFromMatrixPosition(y.matrixWorld)),Ie.logarithmicDepthBuffer&&Ut.setValue(G,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ut.setValue(G,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,Mn=!0,So=!0)}if(H.isSkinnedMesh){Ut.setOptional(G,H,"bindMatrix"),Ut.setOptional(G,H,"bindMatrixInverse");const tr=H.skeleton;tr&&(Ie.floatVertexTextures?(tr.boneTexture===null&&tr.computeBoneTexture(),Ut.setValue(G,"boneTexture",tr.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Ut.setOptional(G,H,"batchingTexture"),Ut.setValue(G,"batchingTexture",H._matricesTexture,M));const Mo=k.morphAttributes;if((Mo.position!==void 0||Mo.normal!==void 0||Mo.color!==void 0&&Ie.isWebGL2===!0)&&T.update(H,k,di),(Mn||qe.receiveShadow!==H.receiveShadow)&&(qe.receiveShadow=H.receiveShadow,Ut.setValue(G,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(pi.envMap.value=Ne,pi.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Mn&&(Ut.setValue(G,"toneMappingExposure",x.toneMappingExposure),qe.needsLights&&JM(pi,So),de&&X.fog===!0&&pe.refreshFogUniforms(pi,de),pe.refreshMaterialUniforms(pi,X,Z,q,Se),Ta.upload(G,Sh(qe),pi,M)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ta.upload(G,Sh(qe),pi,M),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ut.setValue(G,"center",H.center),Ut.setValue(G,"modelViewMatrix",H.modelViewMatrix),Ut.setValue(G,"normalMatrix",H.normalMatrix),Ut.setValue(G,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const tr=X.uniformsGroups;for(let Eo=0,QM=tr.length;Eo<QM;Eo++)if(Ie.isWebGL2){const bh=tr[Eo];Ge.update(bh,di),Ge.bind(bh,di)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return di}function JM(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function ZM(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(y,O,k){Fe.get(y.texture).__webglTexture=O,Fe.get(y.depthTexture).__webglTexture=k;const X=Fe.get(y);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=k===void 0,X.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,O){const k=Fe.get(y);k.__webglFramebuffer=O,k.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(y,O=0,k=0){R=y,I=O,A=k;let X=!0,H=null,de=!1,Te=!1;if(y){const Le=Fe.get(y);Le.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(G.FRAMEBUFFER,null),X=!1):Le.__webglFramebuffer===void 0?M.setupRenderTarget(y):Le.__hasExternalTextures&&M.rebindTextures(y,Fe.get(y.texture).__webglTexture,Fe.get(y.depthTexture).__webglTexture);const Ne=y.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Te=!0);const Ze=Fe.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ze[O])?H=Ze[O][k]:H=Ze[O],de=!0):Ie.isWebGL2&&y.samples>0&&M.useMultisampledRTT(y)===!1?H=Fe.get(y).__webglMultisampledFramebuffer:Array.isArray(Ze)?H=Ze[k]:H=Ze,E.copy(y.viewport),j.copy(y.scissor),V=y.scissorTest}else E.copy(ie).multiplyScalar(Z).floor(),j.copy(ae).multiplyScalar(Z).floor(),V=me;if(we.bindFramebuffer(G.FRAMEBUFFER,H)&&Ie.drawBuffers&&X&&we.drawBuffers(y,H),we.viewport(E),we.scissor(j),we.setScissorTest(V),de){const Le=Fe.get(y.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+O,Le.__webglTexture,k)}else if(Te){const Le=Fe.get(y.texture),Ne=O||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Le.__webglTexture,k||0,Ne)}Y=-1},this.readRenderTargetPixels=function(y,O,k,X,H,de,Te){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Fe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Te!==void 0&&(Le=Le[Te]),Le){we.bindFramebuffer(G.FRAMEBUFFER,Le);try{const Ne=y.texture,Ze=Ne.format,Ve=Ne.type;if(Ze!==sr&&le.convert(Ze)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ve===un&&(be.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&be.has("EXT_color_buffer_float"));if(Ve!==Br&&le.convert(Ve)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===Gr&&(Ie.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-X&&k>=0&&k<=y.height-H&&G.readPixels(O,k,X,H,le.convert(Ze),le.convert(Ve),de)}finally{const Ne=R!==null?Fe.get(R).__webglFramebuffer:null;we.bindFramebuffer(G.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(y,O,k=0){const X=Math.pow(2,-k),H=Math.floor(O.image.width*X),de=Math.floor(O.image.height*X);M.setTexture2D(O,0),G.copyTexSubImage2D(G.TEXTURE_2D,k,0,0,y.x,y.y,H,de),we.unbindTexture()},this.copyTextureToTexture=function(y,O,k,X=0){const H=O.image.width,de=O.image.height,Te=le.convert(k.format),Le=le.convert(k.type);M.setTexture2D(k,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,k.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,k.unpackAlignment),O.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,X,y.x,y.y,H,de,Te,Le,O.image.data):O.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,X,y.x,y.y,O.mipmaps[0].width,O.mipmaps[0].height,Te,O.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,X,y.x,y.y,Te,Le,O.image),X===0&&k.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(y,O,k,X,H=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=y.max.x-y.min.x+1,Te=y.max.y-y.min.y+1,Le=y.max.z-y.min.z+1,Ne=le.convert(X.format),Ze=le.convert(X.type);let Ve;if(X.isData3DTexture)M.setTexture3D(X,0),Ve=G.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)M.setTexture2DArray(X,0),Ve=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment);const We=G.getParameter(G.UNPACK_ROW_LENGTH),It=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Et=G.getParameter(G.UNPACK_SKIP_PIXELS),er=G.getParameter(G.UNPACK_SKIP_ROWS),Pr=G.getParameter(G.UNPACK_SKIP_IMAGES),ft=k.isCompressedTexture?k.mipmaps[H]:k.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,ft.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ft.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,y.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,y.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,y.min.z),k.isDataTexture||k.isData3DTexture?G.texSubImage3D(Ve,H,O.x,O.y,O.z,de,Te,Le,Ne,Ze,ft.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Ve,H,O.x,O.y,O.z,de,Te,Le,Ne,ft.data)):G.texSubImage3D(Ve,H,O.x,O.y,O.z,de,Te,Le,Ne,Ze,ft),G.pixelStorei(G.UNPACK_ROW_LENGTH,We),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,It),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Et),G.pixelStorei(G.UNPACK_SKIP_ROWS,er),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Pr),H===0&&X.generateMipmaps&&G.generateMipmap(Ve),we.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?M.setTextureCube(y,0):y.isData3DTexture?M.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?M.setTexture2DArray(y,0):M.setTexture2D(y,0),we.unbindTexture()},this.resetState=function(){I=0,A=0,R=null,we.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ls?"display-p3":"srgb",t.unpackColorSpace=at.workingColorSpace===Jn?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===At?ri:Zl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ri?At:Sr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class UM extends sh{}UM.prototype.isWebGL1Renderer=!0;class NM extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class po extends Cr{constructor(e=1,t=1,r=1,n=32,a=1,o=!1,s=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:n,heightSegments:a,openEnded:o,thetaStart:s,thetaLength:l};const c=this;n=Math.floor(n),a=Math.floor(a);const h=[],u=[],d=[],m=[];let _=0;const v=[],f=r/2;let p=0;b(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(m,2));function b(){const P=new F,I=new F;let A=0;const R=(t-e)/r;for(let Y=0;Y<=a;Y++){const S=[],E=Y/a,j=E*(t-e)+e;for(let V=0;V<=n;V++){const oe=V/n,D=oe*l+s,B=Math.sin(D),q=Math.cos(D);I.x=j*B,I.y=-E*r+f,I.z=j*q,u.push(I.x,I.y,I.z),P.set(B,R,q).normalize(),d.push(P.x,P.y,P.z),m.push(oe,1-E),S.push(_++)}v.push(S)}for(let Y=0;Y<n;Y++)for(let S=0;S<a;S++){const E=v[S][Y],j=v[S+1][Y],V=v[S+1][Y+1],oe=v[S][Y+1];h.push(E,j,oe),h.push(j,V,oe),A+=6}c.addGroup(p,A,0),p+=A}function x(P){const I=_,A=new De,R=new F;let Y=0;const S=P===!0?e:t,E=P===!0?1:-1;for(let V=1;V<=n;V++)u.push(0,f*E,0),d.push(0,E,0),m.push(.5,.5),_++;const j=_;for(let V=0;V<=n;V++){const oe=V/n*l+s,D=Math.cos(oe),B=Math.sin(oe);R.x=S*B,R.y=f*E,R.z=S*D,u.push(R.x,R.y,R.z),d.push(0,E,0),A.x=D*.5+.5,A.y=B*.5*E+.5,m.push(A.x,A.y),_++}for(let V=0;V<n;V++){const oe=I+V,D=j+V;P===!0?h.push(D,D+1,oe):h.push(D+1,D,oe),Y+=3}c.addGroup(p,Y,P===!0?1:2),p+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fo extends Cr{constructor(e=1,t=32,r=16,n=0,a=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:n,phiLength:a,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const l=Math.min(o+s,Math.PI);let c=0;const h=[],u=new F,d=new F,m=[],_=[],v=[],f=[];for(let p=0;p<=r;p++){const b=[],x=p/r;let P=0;p===0&&o===0?P=.5/t:p===r&&l===Math.PI&&(P=-.5/t);for(let I=0;I<=t;I++){const A=I/t;u.x=-e*Math.cos(n+A*a)*Math.sin(o+x*s),u.y=e*Math.cos(o+x*s),u.z=e*Math.sin(n+A*a)*Math.sin(o+x*s),_.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),f.push(A+P,1-x),b.push(c++)}h.push(b)}for(let p=0;p<r;p++)for(let b=0;b<t;b++){const x=h[p][b+1],P=h[p][b],I=h[p+1][b],A=h[p+1][b+1];(p!==0||o>0)&&m.push(x,P,A),(p!==r-1||l<Math.PI)&&m.push(P,I,A)}this.setIndex(m),this.setAttribute("position",new Xt(_,3)),this.setAttribute("normal",new Xt(v,3)),this.setAttribute("uv",new Xt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class OM extends yn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Je(16777215),this.specular=new Je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ql,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ws,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oh extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class FM extends oh{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const mo=new _t,lh=new F,ch=new F;class zM{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ro,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;lh.setFromMatrixPosition(e.matrixWorld),t.position.copy(lh),ch.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ch),t.updateMatrixWorld(),mo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mo),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(mo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class BM extends zM{constructor(){super(new Lc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class HM extends oh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new BM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class GM{constructor(e,t,r=0,n=1/0){this.ray=new js(e,t),this.near=r,this.far=n,this.camera=null,this.layers=new Xs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,r=[]){return go(e,this,r,t),r.sort(hh),r}intersectObjects(e,t=!0,r=[]){for(let n=0,a=e.length;n<a;n++)go(e[n],this,r,t);return r.sort(hh),r}}function hh(i,e){return i.distance-e.distance}function go(i,e,t,r){if(i.layers.test(e.layers)&&i.raycast(e,t),r===!0){const n=i.children;for(let a=0,o=n.length;a<o;a++)go(n[a],e,t,!0)}}class uh{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gs}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gs);const dh={type:"change"},_o={type:"start"},ph={type:"end"},Aa=new js,fh=new Yr,kM=Math.cos(70*A0.DEG2RAD);class VM extends ii{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xi.ROTATE,MIDDLE:xi.DOLLY,RIGHT:xi.PAN},this.touches={ONE:yi.ROTATE,TWO:yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",re),this._domElementKeyEvents=T},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",re),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(dh),r.update(),a=n.NONE},this.update=function(){const T=new F,Q=new kr().setFromUnitVectors(e.up,new F(0,1,0)),he=Q.clone().invert(),le=new F,Ee=new kr,Ge=new F,tt=2*Math.PI;return function(ke=null){const ce=r.object.position;T.copy(ce).sub(r.target),T.applyQuaternion(Q),s.setFromVector3(T),r.autoRotate&&a===n.NONE&&j(S(ke)),r.enableDamping?(s.theta+=l.theta*r.dampingFactor,s.phi+=l.phi*r.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let C=r.minAzimuthAngle,se=r.maxAzimuthAngle;isFinite(C)&&isFinite(se)&&(C<-Math.PI?C+=tt:C>Math.PI&&(C-=tt),se<-Math.PI?se+=tt:se>Math.PI&&(se-=tt),C<=se?s.theta=Math.max(C,Math.min(se,s.theta)):s.theta=s.theta>(C+se)/2?Math.max(C,s.theta):Math.min(se,s.theta)),s.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,s.phi)),s.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(h,r.dampingFactor):r.target.add(h),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor),r.zoomToCursor&&A||r.object.isOrthographicCamera?s.radius=K(s.radius):s.radius=K(s.radius*c),T.setFromSpherical(s),T.applyQuaternion(he),ce.copy(r.target).add(T),r.object.lookAt(r.target),r.enableDamping===!0?(l.theta*=1-r.dampingFactor,l.phi*=1-r.dampingFactor,h.multiplyScalar(1-r.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let fe=!1;if(r.zoomToCursor&&A){let Pe=null;if(r.object.isPerspectiveCamera){const Me=T.length();Pe=K(Me*c);const rt=Me-Pe;r.object.position.addScaledVector(P,rt),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const Me=new F(I.x,I.y,0);Me.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/c)),r.object.updateProjectionMatrix(),fe=!0;const rt=new F(I.x,I.y,0);rt.unproject(r.object),r.object.position.sub(rt).add(Me),r.object.updateMatrixWorld(),Pe=T.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;Pe!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(Pe).add(r.object.position):(Aa.origin.copy(r.object.position),Aa.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(Aa.direction))<kM?e.lookAt(r.target):(fh.setFromNormalAndCoplanarPoint(r.object.up,r.target),Aa.intersectPlane(fh,r.target))))}else r.object.isOrthographicCamera&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/c)),r.object.updateProjectionMatrix(),fe=!0);return c=1,A=!1,fe||le.distanceToSquared(r.object.position)>o||8*(1-Ee.dot(r.object.quaternion))>o||Ge.distanceToSquared(r.target)>0?(r.dispatchEvent(dh),le.copy(r.object.position),Ee.copy(r.object.quaternion),Ge.copy(r.target),!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",ge),r.domElement.removeEventListener("pointerdown",Fe),r.domElement.removeEventListener("pointercancel",w),r.domElement.removeEventListener("wheel",te),r.domElement.removeEventListener("pointermove",M),r.domElement.removeEventListener("pointerup",w),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",re),r._domElementKeyEvents=null)};const r=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=n.NONE;const o=1e-6,s=new uh,l=new uh;let c=1;const h=new F,u=new De,d=new De,m=new De,_=new De,v=new De,f=new De,p=new De,b=new De,x=new De,P=new F,I=new De;let A=!1;const R=[],Y={};function S(T){return T!==null?2*Math.PI/60*r.autoRotateSpeed*T:2*Math.PI/60/60*r.autoRotateSpeed}function E(T){const Q=Math.abs(T)/(100*(window.devicePixelRatio|0));return Math.pow(.95,r.zoomSpeed*Q)}function j(T){l.theta-=T}function V(T){l.phi-=T}const oe=function(){const T=new F;return function(Q,he){T.setFromMatrixColumn(he,0),T.multiplyScalar(-Q),h.add(T)}}(),D=function(){const T=new F;return function(Q,he){r.screenSpacePanning===!0?T.setFromMatrixColumn(he,1):(T.setFromMatrixColumn(he,0),T.crossVectors(r.object.up,T)),T.multiplyScalar(Q),h.add(T)}}(),B=function(){const T=new F;return function(Q,he){const le=r.domElement;if(r.object.isPerspectiveCamera){const Ee=r.object.position;T.copy(Ee).sub(r.target);let Ge=T.length();Ge*=Math.tan(r.object.fov/2*Math.PI/180),oe(2*Q*Ge/le.clientHeight,r.object.matrix),D(2*he*Ge/le.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(oe(Q*(r.object.right-r.object.left)/r.object.zoom/le.clientWidth,r.object.matrix),D(he*(r.object.top-r.object.bottom)/r.object.zoom/le.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function q(T){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?c/=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function Z(T){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?c*=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function J(T,Q){if(!r.zoomToCursor)return;A=!0;const he=r.domElement.getBoundingClientRect(),le=T-he.left,Ee=Q-he.top,Ge=he.width,tt=he.height;I.x=le/Ge*2-1,I.y=-(Ee/tt)*2+1,P.set(I.x,I.y,1).unproject(r.object).sub(r.object.position).normalize()}function K(T){return Math.max(r.minDistance,Math.min(r.maxDistance,T))}function ie(T){u.set(T.clientX,T.clientY)}function ae(T){J(T.clientX,T.clientX),p.set(T.clientX,T.clientY)}function me(T){_.set(T.clientX,T.clientY)}function W(T){d.set(T.clientX,T.clientY),m.subVectors(d,u).multiplyScalar(r.rotateSpeed);const Q=r.domElement;j(2*Math.PI*m.x/Q.clientHeight),V(2*Math.PI*m.y/Q.clientHeight),u.copy(d),r.update()}function $(T){b.set(T.clientX,T.clientY),x.subVectors(b,p),x.y>0?q(E(x.y)):x.y<0&&Z(E(x.y)),p.copy(b),r.update()}function ve(T){v.set(T.clientX,T.clientY),f.subVectors(v,_).multiplyScalar(r.panSpeed),B(f.x,f.y),_.copy(v),r.update()}function Se(T){J(T.clientX,T.clientY),T.deltaY<0?Z(E(T.deltaY)):T.deltaY>0&&q(E(T.deltaY)),r.update()}function ye(T){let Q=!1;switch(T.code){case r.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?V(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):B(0,r.keyPanSpeed),Q=!0;break;case r.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?V(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):B(0,-r.keyPanSpeed),Q=!0;break;case r.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?j(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):B(r.keyPanSpeed,0),Q=!0;break;case r.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?j(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):B(-r.keyPanSpeed,0),Q=!0;break}Q&&(T.preventDefault(),r.update())}function Ue(T){if(R.length===1)u.set(T.pageX,T.pageY);else{const Q=$e(T),he=.5*(T.pageX+Q.x),le=.5*(T.pageY+Q.y);u.set(he,le)}}function Oe(T){if(R.length===1)_.set(T.pageX,T.pageY);else{const Q=$e(T),he=.5*(T.pageX+Q.x),le=.5*(T.pageY+Q.y);_.set(he,le)}}function Ce(T){const Q=$e(T),he=T.pageX-Q.x,le=T.pageY-Q.y,Ee=Math.sqrt(he*he+le*le);p.set(0,Ee)}function Qe(T){r.enableZoom&&Ce(T),r.enablePan&&Oe(T)}function G(T){r.enableZoom&&Ce(T),r.enableRotate&&Ue(T)}function Rt(T){if(R.length==1)d.set(T.pageX,T.pageY);else{const he=$e(T),le=.5*(T.pageX+he.x),Ee=.5*(T.pageY+he.y);d.set(le,Ee)}m.subVectors(d,u).multiplyScalar(r.rotateSpeed);const Q=r.domElement;j(2*Math.PI*m.x/Q.clientHeight),V(2*Math.PI*m.y/Q.clientHeight),u.copy(d)}function be(T){if(R.length===1)v.set(T.pageX,T.pageY);else{const Q=$e(T),he=.5*(T.pageX+Q.x),le=.5*(T.pageY+Q.y);v.set(he,le)}f.subVectors(v,_).multiplyScalar(r.panSpeed),B(f.x,f.y),_.copy(v)}function Ie(T){const Q=$e(T),he=T.pageX-Q.x,le=T.pageY-Q.y,Ee=Math.sqrt(he*he+le*le);b.set(0,Ee),x.set(0,Math.pow(b.y/p.y,r.zoomSpeed)),q(x.y),p.copy(b);const Ge=(T.pageX+Q.x)*.5,tt=(T.pageY+Q.y)*.5;J(Ge,tt)}function we(T){r.enableZoom&&Ie(T),r.enablePan&&be(T)}function ht(T){r.enableZoom&&Ie(T),r.enableRotate&&Rt(T)}function Fe(T){r.enabled!==!1&&(R.length===0&&(r.domElement.setPointerCapture(T.pointerId),r.domElement.addEventListener("pointermove",M),r.domElement.addEventListener("pointerup",w)),Ae(T),T.pointerType==="touch"?xe(T):z(T))}function M(T){r.enabled!==!1&&(T.pointerType==="touch"?pe(T):ne(T))}function w(T){ze(T),R.length===0&&(r.domElement.releasePointerCapture(T.pointerId),r.domElement.removeEventListener("pointermove",M),r.domElement.removeEventListener("pointerup",w)),r.dispatchEvent(ph),a=n.NONE}function z(T){let Q;switch(T.button){case 0:Q=r.mouseButtons.LEFT;break;case 1:Q=r.mouseButtons.MIDDLE;break;case 2:Q=r.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case xi.DOLLY:if(r.enableZoom===!1)return;ae(T),a=n.DOLLY;break;case xi.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(r.enablePan===!1)return;me(T),a=n.PAN}else{if(r.enableRotate===!1)return;ie(T),a=n.ROTATE}break;case xi.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(r.enableRotate===!1)return;ie(T),a=n.ROTATE}else{if(r.enablePan===!1)return;me(T),a=n.PAN}break;default:a=n.NONE}a!==n.NONE&&r.dispatchEvent(_o)}function ne(T){switch(a){case n.ROTATE:if(r.enableRotate===!1)return;W(T);break;case n.DOLLY:if(r.enableZoom===!1)return;$(T);break;case n.PAN:if(r.enablePan===!1)return;ve(T);break}}function te(T){r.enabled===!1||r.enableZoom===!1||a!==n.NONE||(T.preventDefault(),r.dispatchEvent(_o),Se(T),r.dispatchEvent(ph))}function re(T){r.enabled===!1||r.enablePan===!1||ye(T)}function xe(T){switch(ee(T),R.length){case 1:switch(r.touches.ONE){case yi.ROTATE:if(r.enableRotate===!1)return;Ue(T),a=n.TOUCH_ROTATE;break;case yi.PAN:if(r.enablePan===!1)return;Oe(T),a=n.TOUCH_PAN;break;default:a=n.NONE}break;case 2:switch(r.touches.TWO){case yi.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;Qe(T),a=n.TOUCH_DOLLY_PAN;break;case yi.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;G(T),a=n.TOUCH_DOLLY_ROTATE;break;default:a=n.NONE}break;default:a=n.NONE}a!==n.NONE&&r.dispatchEvent(_o)}function pe(T){switch(ee(T),a){case n.TOUCH_ROTATE:if(r.enableRotate===!1)return;Rt(T),r.update();break;case n.TOUCH_PAN:if(r.enablePan===!1)return;be(T),r.update();break;case n.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;we(T),r.update();break;case n.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;ht(T),r.update();break;default:a=n.NONE}}function ge(T){r.enabled!==!1&&T.preventDefault()}function Ae(T){R.push(T.pointerId)}function ze(T){delete Y[T.pointerId];for(let Q=0;Q<R.length;Q++)if(R[Q]==T.pointerId){R.splice(Q,1);return}}function ee(T){let Q=Y[T.pointerId];Q===void 0&&(Q=new De,Y[T.pointerId]=Q),Q.set(T.pageX,T.pageY)}function $e(T){const Q=T.pointerId===R[0]?R[1]:R[0];return Y[Q]}r.domElement.addEventListener("contextmenu",ge),r.domElement.addEventListener("pointerdown",Fe),r.domElement.addEventListener("pointercancel",w),r.domElement.addEventListener("wheel",te,{passive:!1}),this.update()}}function WM(i,e){const t=e.translation();i.position.set(t.x,t.y,t.z);const r=e.rotation();i.quaternion.set(r.x,r.y,r.z,r.w)}const mh=new wn,gh=new kr;class jM{constructor(e,t){this.visual=e,this.physical=t}matchTransform(){WM(this.visual,this.physical)}setPosition(e,t,r){this.physical.setTranslation(new nr.Vector3(e,t,r),!1)}setEuler(e,t,r){mh.set(e,t,r),gh.setFromEuler(mh),this.physical.setRotation(gh,!1)}}function _h(i,e,t,r=nr.RigidBodyType.Fixed,n=16777215){const a=new fo(t,32,16),o=nr.ColliderDesc.ball(t);return vh(i,e,a,o,r,n)}function vo(i,e,t,r,n,a=nr.RigidBodyType.Fixed,o=16777215){const s=new ki(t,r,n,1,1),l=nr.ColliderDesc.cuboid(t*.5,r*.5,n*.5);return vh(i,e,s,l,a,o)}function vh(i,e,t,r,n=nr.RigidBodyType.Fixed,a=16777215){const o=new OM({color:a}),s=new gr(t,o);s.receiveShadow=!0,s.castShadow=!0,i.add(s);const l=new nr.RigidBodyDesc(n);r.setRestitution(.8);const c=e.createRigidBody(l);return e.createCollider(r,c),new jM(s,c)}const wo=new _t;class XM{constructor(e,t,r){Nt(this,"relativePoint");this.intersection=e,this.x=t,this.y=r,wo.copy(e.object.matrixWorld),wo.invert(),this.relativePoint=e.point.clone().applyMatrix4(wo)}}const wh=new GM;class qM{constructor(){Nt(this,"renderer");Nt(this,"scene");Nt(this,"camera");Nt(this,"controls");Nt(this,"stats");Nt(this,"visicals",[]);Nt(this,"link");Nt(this,"closestOnMouseDown");Nt(this,"closestOnMouseMove");Nt(this,"lastMouseMoveX",-1);Nt(this,"lastMouseMoveY",-1);Nt(this,"world");Nt(this,"getClosest",(e,t)=>{wh.setFromCamera(new De(e/window.innerWidth*2-1,-(t/window.innerHeight*2-1)),this.camera);const r=wh.intersectObjects(this.visicals.map(n=>n.visual));if(r.length>0)return new XM(r[0],e,t)});Nt(this,"animate",()=>{requestAnimationFrame(this.animate),this.world.step();for(const e of this.visicals)e.matchTransform();if(this.stats&&this.stats.update(),this.controls&&this.controls.update(),this.link&&this.closestOnMouseDown&&this.closestOnMouseMove&&this.closestOnMouseDown.intersection.object!==this.closestOnMouseMove.intersection.object){const e=this.closestOnMouseDown.relativePoint.clone().applyMatrix4(this.closestOnMouseDown.intersection.object.matrixWorld);if(this.link.position.copy(e),this.closestOnMouseMove=this.getClosest(this.lastMouseMoveX,this.lastMouseMoveY),this.closestOnMouseMove){const t=this.closestOnMouseMove.relativePoint.clone().applyMatrix4(this.closestOnMouseMove.intersection.object.matrixWorld);this.link.scale.y=e.distanceTo(t),this.link.lookAt(t),this.link.rotateX(Math.PI*.5)}}this.renderer.render(this.scene,this.camera)});this.initScene(),this.initStats(),this.initListeners(),this.animate()}initStats(){this.stats=new Ht,document.body.appendChild(this.stats.dom)}initScene(){const e=new nr.World(new nr.Vector3(0,-9.8,0));this.world=e;const t=new NM;this.scene=t;const r=new Je(.5,.7,.9);t.background=r,this.camera=new Qt(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.y=1,this.camera.position.z=5,this.renderer=new sh,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ul,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement),this.controls=new VM(this.camera,this.renderer.domElement);const n=new FM(r,new Je(.5,.4,.3),2);t.add(n);const a=new HM(new Je(.8,.7,.6),5);a.shadow.camera.left-=15,a.shadow.camera.right+=15,a.shadow.camera.bottom-=15,a.shadow.camera.top+=15,a.shadow.camera.updateProjectionMatrix(),a.position.set(-.5,2.5,4).normalize().multiplyScalar(10),a.castShadow=!0,t.add(a);const o=1024,s=.5,l=50;a.shadow.mapSize.width=o,a.shadow.mapSize.height=o,a.shadow.camera.near=s,a.shadow.camera.far=l;const c=vo(t,e,100,2,100,void 0,15724527);c.setPosition(0,-1,0),this.visicals.push(c);const h=vo(t,e,1,.1,1,void 0,8388479);h.setPosition(0,.2,0),h.setEuler(0,0,.05),this.visicals.push(h);const u=nr.RigidBodyType.Dynamic;for(let d=0;d<5;d++){const m=vo(t,e,.5,.5,.5,u,16744447);m.setPosition(0,2+d*.5,0),this.visicals.push(m);const _=_h(t,e,.25,u,16744447);_.setPosition(.1,2+d*.5,0),this.visicals.push(_)}}initListeners(){window.addEventListener("resize",this.onWindowResize.bind(this),!1),window.addEventListener("keydown",a=>{const{key:o}=a;switch(o){case"e":const s=window.open("","Canvas Image"),{domElement:l}=this.renderer;this.renderer.render(this.scene,this.camera);const c=l.toDataURL();if(!s)return;s.document.write(`<img src='${c}' width='${l.width}' height='${l.height}'>`);break}});const e=new De,t=new De,r=a=>{if(!this.link){const o=new po(.05,.05,1,8,1),s=o.getAttribute("position").array;for(let l=1;l<s.length;l+=3)s[l]+=.5;this.link=new gr(o,new Qs({color:65280})),this.scene.add(this.link)}this.link.position.copy(a.intersection.point)},n=()=>{this.link&&(this.scene.remove(this.link),this.link=void 0)};window.addEventListener("mousedown",a=>{this.closestOnMouseDown=this.getClosest(a.x,a.y),e.set(a.x,a.y)}),window.addEventListener("mousemove",a=>{this.lastMouseMoveX=a.x,this.lastMouseMoveY=a.y,t.set(a.x,a.y).sub(e),this.closestOnMouseDown&&t.length()>10&&(this.closestOnMouseMove=this.getClosest(a.x,a.y),this.closestOnMouseMove&&this.closestOnMouseDown.intersection.object!==this.closestOnMouseMove.intersection.object&&r(this.closestOnMouseDown))}),window.addEventListener("mouseup",a=>{if(n(),t.set(a.x,a.y).sub(e),!(t.length()>10)){const o=this.getClosest(a.x,a.y);if(o){const s=_h(this.scene,this.world,.5,nr.RigidBodyType.Fixed,16777215),l=o.intersection.point;s.setPosition(l.x,l.y,l.z),this.visicals.push(s)}}this.closestOnMouseDown=void 0})}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}}new qM})()});export default rE();
