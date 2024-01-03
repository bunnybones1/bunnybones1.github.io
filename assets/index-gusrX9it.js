var TS=Object.defineProperty;var RS=(Yt,jt,$r)=>jt in Yt?TS(Yt,jt,{enumerable:!0,configurable:!0,writable:!0,value:$r}):Yt[jt]=$r;var AS=(Yt,jt)=>()=>(jt||Yt((jt={exports:{}}).exports,jt),jt.exports);var fe=(Yt,jt,$r)=>(RS(Yt,typeof jt!="symbol"?jt+"":jt,$r),$r);var CS=AS((LS,xu)=>{(async()=>{(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();var Yt=function(){var i=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(h){h.preventDefault(),r(++i%e.children.length)},!1);function t(h){return e.appendChild(h.dom),h}function r(h){for(var u=0;u<e.children.length;u++)e.children[u].style.display=u===h?"block":"none";i=h}var n=(performance||Date).now(),a=n,o=0,s=t(new Yt.Panel("FPS","#0ff","#002")),l=t(new Yt.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new Yt.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:e,addPanel:t,showPanel:r,begin:function(){n=(performance||Date).now()},end:function(){o++;var h=(performance||Date).now();if(l.update(h-n,200),h>=a+1e3&&(s.update(o*1e3/(h-a),100),a=h,o=0,c)){var u=performance.memory;c.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return h},update:function(){n=this.end()},domElement:e,setMode:r}};Yt.Panel=function(i,e,t){var r=1/0,n=0,a=Math.round,o=a(window.devicePixelRatio||1),s=80*o,l=48*o,c=3*o,h=2*o,u=3*o,d=15*o,m=74*o,_=30*o,v=document.createElement("canvas");v.width=s,v.height=l,v.style.cssText="width:80px;height:48px";var f=v.getContext("2d");return f.font="bold "+9*o+"px Helvetica,Arial,sans-serif",f.textBaseline="top",f.fillStyle=t,f.fillRect(0,0,s,l),f.fillStyle=e,f.fillText(i,c,h),f.fillRect(u,d,m,_),f.fillStyle=t,f.globalAlpha=.9,f.fillRect(u,d,m,_),{dom:v,update:function(p,S){r=Math.min(r,p),n=Math.max(n,p),f.fillStyle=t,f.globalAlpha=1,f.fillRect(0,0,s,d),f.fillStyle=e,f.fillText(a(p)+" "+i+" ("+a(r)+"-"+a(n)+")",c,h),f.drawImage(v,u+o,d,m-o,_,u,d,m-o,_),f.fillRect(u+m-o,d,o,_),f.fillStyle=t,f.globalAlpha=.9,f.fillRect(u+m-o,d,o,a((1-p/S)*_))}}};const jt=Yt,$r="/assets/rapier_wasm3d_bg-GqetY0_u.wasm",Mu=async(i={},e)=>{let t;if(e.startsWith("data:")){const r=e.replace(/^data:.*?base64,/,"");let n;if(typeof Buffer=="function"&&typeof Buffer.from=="function")n=Buffer.from(r,"base64");else if(typeof atob=="function"){const a=atob(r);n=new Uint8Array(a.length);for(let o=0;o<a.length;o++)n[o]=a.charCodeAt(o)}else throw new Error("Cannot decode base64-encoded data URL");t=await WebAssembly.instantiate(n,i)}else{const r=await fetch(e),n=r.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&n.startsWith("application/wasm"))t=await WebAssembly.instantiateStreaming(r,i);else{const a=await r.arrayBuffer();t=await WebAssembly.instantiate(a,i)}}return t.instance.exports},rt=new Array(32).fill(void 0);rt.push(void 0,null,!0,!1);function nt(i){return rt[i]}let en=rt.length;function bu(i){i<36||(rt[i]=en,en=i)}function tn(i){const e=nt(i);return bu(i),e}function wt(i){en===rt.length&&rt.push(rt.length+1);const e=en;return en=rt[e],rt[e]=i,e}function be(i){return i==null}let rs=new Float64Array;function Nn(){return rs.byteLength===0&&(rs=new Float64Array(wi.buffer)),rs}let is=new Int32Array;function st(){return is.byteLength===0&&(is=new Int32Array(wi.buffer)),is}const Su=typeof TextDecoder>"u"?(0,xu.require)("util").TextDecoder:TextDecoder;let rl=new Su("utf-8",{ignoreBOM:!0,fatal:!0});rl.decode();let ns=new Uint8Array;function Eu(){return ns.byteLength===0&&(ns=new Uint8Array(wi.buffer)),ns}function il(i,e){return rl.decode(Eu().subarray(i,i+e))}function Tu(){try{const t=$e(-16);Ju(t);var i=st()[t/4+0],e=st()[t/4+1];return il(i,e)}finally{$e(16),Qn(i,e)}}function I(i,e){if(!(i instanceof e))throw new Error(`expected instance of ${e.name}`);return i.ptr}let as=new Float32Array;function Or(){return as.byteLength===0&&(as=new Float32Array(wi.buffer)),as}let lt=32;function pt(i){if(lt==1)throw new Error("out of js stack");return rt[--lt]=i,lt}function nl(i,e){return Or().subarray(i/4,i/4+e)}let ss=new Uint32Array;function al(){return ss.byteLength===0&&(ss=new Uint32Array(wi.buffer)),ss}function Ru(i,e){return al().subarray(i/4,i/4+e)}let Kt=0;function ei(i,e){const t=e(i.length*4);return Or().set(i,t/4),Kt=i.length,t}function On(i,e){const t=e(i.length*4);return al().set(i,t/4),Kt=i.length,t}function os(i,e){try{return i.apply(this,e)}catch(t){o0(wt(t))}}const Fn=Object.freeze({X:0,0:"X",Y:1,1:"Y",Z:2,2:"Z",AngX:3,3:"AngX",AngY:4,4:"AngY",AngZ:5,5:"AngZ"});class Fr{static __wrap(e){const t=Object.create(Fr.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();of(e)}constructor(){const e=lf();return Fr.__wrap(e)}}class vi{static __wrap(e){const t=Object.create(vi.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Ad(e)}constructor(){const e=Cd();return vi.__wrap(e)}}class rn{static __wrap(e){const t=Object.create(rn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Md(e)}constructor(){const e=bd();return rn.__wrap(e)}handle(){return on(this.ptr)}translationApplied(){const e=Sd(this.ptr);return B.__wrap(e)}translationRemaining(){const e=Ed(this.ptr);return B.__wrap(e)}toi(){return ti(this.ptr)}worldWitness1(){const e=Jn(this.ptr);return B.__wrap(e)}worldWitness2(){const e=Td(this.ptr);return B.__wrap(e)}worldNormal1(){const e=ms(this.ptr);return B.__wrap(e)}worldNormal2(){const e=Rd(this.ptr);return B.__wrap(e)}}class mt{static __wrap(e){const t=Object.create(mt.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();wg(e)}coTranslation(e){const t=cf(this.ptr,e);return B.__wrap(t)}coRotation(e){const t=hf(this.ptr,e);return Ye.__wrap(t)}coSetTranslation(e,t,r,n){uf(this.ptr,e,t,r,n)}coSetTranslationWrtParent(e,t,r,n){df(this.ptr,e,t,r,n)}coSetRotation(e,t,r,n,a){pf(this.ptr,e,t,r,n,a)}coSetRotationWrtParent(e,t,r,n,a){mf(this.ptr,e,t,r,n,a)}coIsSensor(e){return ff(this.ptr,e)!==0}coShapeType(e){return gf(this.ptr,e)>>>0}coHalfspaceNormal(e){const t=_f(this.ptr,e);return t===0?void 0:B.__wrap(t)}coHalfExtents(e){const t=vf(this.ptr,e);return t===0?void 0:B.__wrap(t)}coSetHalfExtents(e,t){I(t,B),wf(this.ptr,e,t.ptr)}coRadius(e){try{const n=$e(-16);yf(n,this.ptr,e);var t=st()[n/4+0],r=Or()[n/4+1];return t===0?void 0:r}finally{$e(16)}}coSetRadius(e,t){xf(this.ptr,e,t)}coHalfHeight(e){try{const n=$e(-16);Mf(n,this.ptr,e);var t=st()[n/4+0],r=Or()[n/4+1];return t===0?void 0:r}finally{$e(16)}}coSetHalfHeight(e,t){bf(this.ptr,e,t)}coRoundRadius(e){try{const n=$e(-16);Sf(n,this.ptr,e);var t=st()[n/4+0],r=Or()[n/4+1];return t===0?void 0:r}finally{$e(16)}}coSetRoundRadius(e,t){Ef(this.ptr,e,t)}coVertices(e){try{const n=$e(-16);Tf(n,this.ptr,e);var t=st()[n/4+0],r=st()[n/4+1];let a;return t!==0&&(a=nl(t,r).slice(),Qn(t,r*4)),a}finally{$e(16)}}coIndices(e){try{const n=$e(-16);Rf(n,this.ptr,e);var t=st()[n/4+0],r=st()[n/4+1];let a;return t!==0&&(a=Ru(t,r).slice(),Qn(t,r*4)),a}finally{$e(16)}}coHeightfieldHeights(e){try{const n=$e(-16);Af(n,this.ptr,e);var t=st()[n/4+0],r=st()[n/4+1];let a;return t!==0&&(a=nl(t,r).slice(),Qn(t,r*4)),a}finally{$e(16)}}coHeightfieldScale(e){const t=Cf(this.ptr,e);return t===0?void 0:B.__wrap(t)}coHeightfieldNRows(e){try{const n=$e(-16);Pf(n,this.ptr,e);var t=st()[n/4+0],r=st()[n/4+1];return t===0?void 0:r>>>0}finally{$e(16)}}coHeightfieldNCols(e){try{const n=$e(-16);Lf(n,this.ptr,e);var t=st()[n/4+0],r=st()[n/4+1];return t===0?void 0:r>>>0}finally{$e(16)}}coParent(e){try{const n=$e(-16);If(n,this.ptr,e);var t=st()[n/4+0],r=Nn()[n/8+1];return t===0?void 0:r}finally{$e(16)}}coSetEnabled(e,t){Df(this.ptr,e,t)}coIsEnabled(e){return Uf(this.ptr,e)!==0}coFriction(e){return Nf(this.ptr,e)}coRestitution(e){return Of(this.ptr,e)}coDensity(e){return Ff(this.ptr,e)}coMass(e){return zf(this.ptr,e)}coVolume(e){return Bf(this.ptr,e)}coCollisionGroups(e){return Hf(this.ptr,e)>>>0}coSolverGroups(e){return Gf(this.ptr,e)>>>0}coActiveHooks(e){return kf(this.ptr,e)>>>0}coActiveCollisionTypes(e){return Vf(this.ptr,e)}coActiveEvents(e){return Wf(this.ptr,e)>>>0}coContactForceEventThreshold(e){return Xf(this.ptr,e)}coContainsPoint(e,t){return I(t,B),jf(this.ptr,e,t.ptr)!==0}coCastShape(e,t,r,n,a,o,s,l){I(t,B),I(r,Le),I(n,B),I(a,Ye),I(o,B);const c=qf(this.ptr,e,t.ptr,r.ptr,n.ptr,a.ptr,o.ptr,s,l);return c===0?void 0:Yn.__wrap(c)}coCastCollider(e,t,r,n,a,o){I(t,B),I(n,B);const s=Yf(this.ptr,e,t.ptr,r,n.ptr,a,o);return s===0?void 0:qn.__wrap(s)}coIntersectsShape(e,t,r,n){return I(t,Le),I(r,B),I(n,Ye),Kf(this.ptr,e,t.ptr,r.ptr,n.ptr)!==0}coContactShape(e,t,r,n,a){I(t,Le),I(r,B),I(n,Ye);const o=Jf(this.ptr,e,t.ptr,r.ptr,n.ptr,a);return o===0?void 0:sn.__wrap(o)}coContactCollider(e,t,r){const n=Zf(this.ptr,e,t,r);return n===0?void 0:sn.__wrap(n)}coProjectPoint(e,t,r){I(t,B);const n=Qf(this.ptr,e,t.ptr,r);return kn.__wrap(n)}coIntersectsRay(e,t,r,n){return I(t,B),I(r,B),$f(this.ptr,e,t.ptr,r.ptr,n)!==0}coCastRay(e,t,r,n,a){return I(t,B),I(r,B),eg(this.ptr,e,t.ptr,r.ptr,n,a)}coCastRayAndGetNormal(e,t,r,n,a){I(t,B),I(r,B);const o=tg(this.ptr,e,t.ptr,r.ptr,n,a);return o===0?void 0:Wn.__wrap(o)}coSetSensor(e,t){rg(this.ptr,e,t)}coSetRestitution(e,t){ig(this.ptr,e,t)}coSetFriction(e,t){ng(this.ptr,e,t)}coFrictionCombineRule(e){return ag(this.ptr,e)>>>0}coSetFrictionCombineRule(e,t){sg(this.ptr,e,t)}coRestitutionCombineRule(e){return og(this.ptr,e)>>>0}coSetRestitutionCombineRule(e,t){lg(this.ptr,e,t)}coSetCollisionGroups(e,t){cg(this.ptr,e,t)}coSetSolverGroups(e,t){hg(this.ptr,e,t)}coSetActiveHooks(e,t){ug(this.ptr,e,t)}coSetActiveEvents(e,t){dg(this.ptr,e,t)}coSetActiveCollisionTypes(e,t){pg(this.ptr,e,t)}coSetShape(e,t){I(t,Le),mg(this.ptr,e,t.ptr)}coSetContactForceEventThreshold(e,t){fg(this.ptr,e,t)}coSetDensity(e,t){gg(this.ptr,e,t)}coSetMass(e,t){_g(this.ptr,e,t)}coSetMassProperties(e,t,r,n,a){I(r,B),I(n,B),I(a,Ye),vg(this.ptr,e,t,r.ptr,n.ptr,a.ptr)}constructor(){const e=yg();return mt.__wrap(e)}len(){return xg(this.ptr)>>>0}contains(e){return ll(this.ptr,e)!==0}createCollider(e,t,r,n,a,o,s,l,c,h,u,d,m,_,v,f,p,S,w,A,P,T,R,k){try{const U=$e(-16);I(t,Le),I(r,B),I(n,Ye),I(s,B),I(l,B),I(c,Ye),I(k,ft),Mg(U,this.ptr,e,t.ptr,r.ptr,n.ptr,a,o,s.ptr,l.ptr,c.ptr,h,u,d,m,_,v,f,p,S,w,A,P,T,R,k.ptr);var x=st()[U/4+0],b=Nn()[U/8+1];return x===0?void 0:b}finally{$e(16)}}remove(e,t,r,n){I(t,vr),I(r,ft),bg(this.ptr,e,t.ptr,r.ptr,n)}isHandleValid(e){return ll(this.ptr,e)!==0}forEachColliderHandle(e){try{Sg(this.ptr,pt(e))}finally{rt[lt++]=void 0}}}class ls{static __wrap(e){const t=Object.create(ls.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();g1(e)}collider1(){return on(this.ptr)}collider2(){return _1(this.ptr)}total_force(){const e=ul(this.ptr);return B.__wrap(e)}total_force_magnitude(){return v1(this.ptr)}max_force_direction(){const e=w1(this.ptr);return B.__wrap(e)}max_force_magnitude(){return y1(this.ptr)}}class cs{static __wrap(e){const t=Object.create(cs.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Dg(e)}normal(){const e=zg(this.ptr);return B.__wrap(e)}local_n1(){const e=Bg(this.ptr);return B.__wrap(e)}local_n2(){const e=Hg(this.ptr);return B.__wrap(e)}subshape1(){return Gg(this.ptr)>>>0}subshape2(){return kg(this.ptr)>>>0}num_contacts(){return Vg(this.ptr)>>>0}contact_local_p1(e){const t=Wg(this.ptr,e);return t===0?void 0:B.__wrap(t)}contact_local_p2(e){const t=Xg(this.ptr,e);return t===0?void 0:B.__wrap(t)}contact_dist(e){return jg(this.ptr,e)}contact_fid1(e){return qg(this.ptr,e)>>>0}contact_fid2(e){return Yg(this.ptr,e)>>>0}contact_impulse(e){return Kg(this.ptr,e)}contact_tangent_impulse_x(e){return Jg(this.ptr,e)}contact_tangent_impulse_y(e){return Zg(this.ptr,e)}num_solver_contacts(){return Qg(this.ptr)>>>0}solver_contact_point(e){const t=$g(this.ptr,e);return t===0?void 0:B.__wrap(t)}solver_contact_dist(e){return e_(this.ptr,e)}solver_contact_friction(e){return t_(this.ptr,e)}solver_contact_restitution(e){return r_(this.ptr,e)}solver_contact_tangent_velocity(e){const t=i_(this.ptr,e);return B.__wrap(t)}}class hs{static __wrap(e){const t=Object.create(hs.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();e0(e)}collider1(){return Ug(this.ptr)}collider2(){return Ng(this.ptr)}numContactManifolds(){return Og(this.ptr)>>>0}contactManifold(e){const t=Fg(this.ptr,e);return t===0?void 0:cs.__wrap(t)}}class zn{static __wrap(e){const t=Object.create(zn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();h1(e)}constructor(){const e=u1();return zn.__wrap(e)}vertices(){const e=d1(this.ptr);return tn(e)}colors(){const e=p1(this.ptr);return tn(e)}render(e,t,r,n,a){I(e,ft),I(t,mt),I(r,_r),I(n,wr),I(a,Tr),m1(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr)}}class us{static __wrap(e){const t=Object.create(us.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();k1(e)}takeGravity(){const e=V1(this.ptr);return e===0?void 0:B.__wrap(e)}takeIntegrationParameters(){const e=W1(this.ptr);return e===0?void 0:zr.__wrap(e)}takeIslandManager(){const e=X1(this.ptr);return e===0?void 0:vr.__wrap(e)}takeBroadPhase(){const e=j1(this.ptr);return e===0?void 0:Fr.__wrap(e)}takeNarrowPhase(){const e=q1(this.ptr);return e===0?void 0:Tr.__wrap(e)}takeBodies(){const e=Y1(this.ptr);return e===0?void 0:ft.__wrap(e)}takeColliders(){const e=K1(this.ptr);return e===0?void 0:mt.__wrap(e)}takeImpulseJoints(){const e=J1(this.ptr);return e===0?void 0:_r.__wrap(e)}takeMultibodyJoints(){const e=Z1(this.ptr);return e===0?void 0:wr.__wrap(e)}}class nn{static __wrap(e){const t=Object.create(nn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();f1(e)}constructor(e){const t=x1(e);return nn.__wrap(t)}drainCollisionEvents(e){try{M1(this.ptr,pt(e))}finally{rt[lt++]=void 0}}drainContactForceEvents(e){try{b1(this.ptr,pt(e))}finally{rt[lt++]=void 0}}clear(){S1(this.ptr)}}class $t{static __wrap(e){const t=Object.create($t.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Mp(e)}static spherical(e,t){I(e,B),I(t,B);const r=bp(e.ptr,t.ptr);return $t.__wrap(r)}static prismatic(e,t,r,n,a,o){I(e,B),I(t,B),I(r,B);const s=Sp(e.ptr,t.ptr,r.ptr,n,a,o);return s===0?void 0:$t.__wrap(s)}static fixed(e,t,r,n){I(e,B),I(t,Ye),I(r,B),I(n,Ye);const a=Ep(e.ptr,t.ptr,r.ptr,n.ptr);return $t.__wrap(a)}static revolute(e,t,r){I(e,B),I(t,B),I(r,B);const n=Tp(e.ptr,t.ptr,r.ptr);return n===0?void 0:$t.__wrap(n)}}class _r{static __wrap(e){const t=Object.create(_r.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Kd(e)}jointType(e){return Pd(this.ptr,e)>>>0}jointBodyHandle1(e){return Ld(this.ptr,e)}jointBodyHandle2(e){return Id(this.ptr,e)}jointFrameX1(e){const t=Dd(this.ptr,e);return Ye.__wrap(t)}jointFrameX2(e){const t=Ud(this.ptr,e);return Ye.__wrap(t)}jointAnchor1(e){const t=Nd(this.ptr,e);return B.__wrap(t)}jointAnchor2(e){const t=Od(this.ptr,e);return B.__wrap(t)}jointSetAnchor1(e,t){I(t,B),Fd(this.ptr,e,t.ptr)}jointSetAnchor2(e,t){I(t,B),zd(this.ptr,e,t.ptr)}jointContactsEnabled(e){return Bd(this.ptr,e)!==0}jointSetContactsEnabled(e,t){Hd(this.ptr,e,t)}jointLimitsEnabled(e,t){return Gd(this.ptr,e,t)!==0}jointLimitsMin(e,t){return kd(this.ptr,e,t)}jointLimitsMax(e,t){return Vd(this.ptr,e,t)}jointSetLimits(e,t,r,n){Wd(this.ptr,e,t,r,n)}jointConfigureMotorModel(e,t,r){Xd(this.ptr,e,t,r)}jointConfigureMotorVelocity(e,t,r,n){jd(this.ptr,e,t,r,n)}jointConfigureMotorPosition(e,t,r,n,a){qd(this.ptr,e,t,r,n,a)}jointConfigureMotor(e,t,r,n,a,o){Yd(this.ptr,e,t,r,n,a,o)}constructor(){const e=Jd();return _r.__wrap(e)}createJoint(e,t,r,n){return I(e,$t),Zd(this.ptr,e.ptr,t,r,n)}remove(e,t){Qd(this.ptr,e,t)}len(){return $d(this.ptr)>>>0}contains(e){return ep(this.ptr,e)!==0}forEachJointHandle(e){try{tp(this.ptr,pt(e))}finally{rt[lt++]=void 0}}forEachJointAttachedToRigidBody(e,t){try{rp(this.ptr,e,pt(t))}finally{rt[lt++]=void 0}}}class zr{static __wrap(e){const t=Object.create(zr.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();ip(e)}constructor(){const e=np();return zr.__wrap(e)}get dt(){return Zn(this.ptr)}get erp(){return ti(this.ptr)}get allowedLinearError(){return ap(this.ptr)}get predictionDistance(){return sp(this.ptr)}get maxVelocityIterations(){return op(this.ptr)>>>0}get maxVelocityFrictionIterations(){return lp(this.ptr)>>>0}get maxStabilizationIterations(){return cp(this.ptr)>>>0}get minIslandSize(){return hp(this.ptr)>>>0}get maxCcdSubsteps(){return up(this.ptr)>>>0}set dt(e){sl(this.ptr,e)}set erp(e){ol(this.ptr,e)}set allowedLinearError(e){dp(this.ptr,e)}set predictionDistance(e){pp(this.ptr,e)}set maxVelocityIterations(e){mp(this.ptr,e)}set maxVelocityFrictionIterations(e){fp(this.ptr,e)}set maxStabilizationIterations(e){gp(this.ptr,e)}set minIslandSize(e){_p(this.ptr,e)}set maxCcdSubsteps(e){vp(this.ptr,e)}}class vr{static __wrap(e){const t=Object.create(vr.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();wp(e)}constructor(){const e=yp();return vr.__wrap(e)}forEachActiveRigidBodyHandle(e){try{xp(this.ptr,pt(e))}finally{rt[lt++]=void 0}}}class Bn{static __wrap(e){const t=Object.create(Bn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Zu(e)}constructor(e){const t=Qu(e);return Bn.__wrap(t)}up(){const e=$u(this.ptr);return B.__wrap(e)}setUp(e){I(e,B),ed(this.ptr,e.ptr)}offset(){return td(this.ptr)}setOffset(e){rd(this.ptr,e)}slideEnabled(){return id(this.ptr)!==0}setSlideEnabled(e){nd(this.ptr,e)}autostepMaxHeight(){try{const r=$e(-16);ad(r,this.ptr);var e=st()[r/4+0],t=Or()[r/4+1];return e===0?void 0:t}finally{$e(16)}}autostepMinWidth(){try{const r=$e(-16);sd(r,this.ptr);var e=st()[r/4+0],t=Or()[r/4+1];return e===0?void 0:t}finally{$e(16)}}autostepIncludesDynamicBodies(){const e=od(this.ptr);return e===16777215?void 0:e!==0}autostepEnabled(){return ld(this.ptr)!==0}enableAutostep(e,t,r){cd(this.ptr,e,t,r)}disableAutostep(){hd(this.ptr)}maxSlopeClimbAngle(){return ud(this.ptr)}setMaxSlopeClimbAngle(e){dd(this.ptr,e)}minSlopeSlideAngle(){return pd(this.ptr)}setMinSlopeSlideAngle(e){md(this.ptr,e)}snapToGroundDistance(){try{const r=$e(-16);fd(r,this.ptr);var e=st()[r/4+0],t=Or()[r/4+1];return e===0?void 0:t}finally{$e(16)}}enableSnapToGround(e){gd(this.ptr,e)}disableSnapToGround(){_d(this.ptr)}snapToGroundEnabled(){return vd(this.ptr)!==0}computeColliderMovement(e,t,r,n,a,o,s,l,c,h,u){try{I(t,ft),I(r,mt),I(n,an),I(o,B),wd(this.ptr,e,t.ptr,r.ptr,n.ptr,a,o.ptr,s,!be(l),be(l)?0:l,c,!be(h),be(h)?0:h,pt(u))}finally{rt[lt++]=void 0}}computedMovement(){const e=Kn(this.ptr);return B.__wrap(e)}computedGrounded(){return ps(this.ptr)!==0}numComputedCollisions(){return yd(this.ptr)>>>0}computedCollision(e,t){return I(t,rn),xd(this.ptr,e,t.ptr)!==0}}class wr{static __wrap(e){const t=Object.create(wr.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Fp(e)}jointType(e){return Rp(this.ptr,e)>>>0}jointFrameX1(e){const t=Ap(this.ptr,e);return Ye.__wrap(t)}jointFrameX2(e){const t=Cp(this.ptr,e);return Ye.__wrap(t)}jointAnchor1(e){const t=Pp(this.ptr,e);return B.__wrap(t)}jointAnchor2(e){const t=Lp(this.ptr,e);return B.__wrap(t)}jointContactsEnabled(e){return Ip(this.ptr,e)!==0}jointSetContactsEnabled(e,t){Dp(this.ptr,e,t)}jointLimitsEnabled(e,t){return Up(this.ptr,e,t)!==0}jointLimitsMin(e,t){return Np(this.ptr,e,t)}jointLimitsMax(e,t){return Op(this.ptr,e,t)}constructor(){const e=zp();return wr.__wrap(e)}createJoint(e,t,r,n){return I(e,$t),Bp(this.ptr,e.ptr,t,r,n)}remove(e,t){Hp(this.ptr,e,t)}contains(e){return Gp(this.ptr,e)!==0}forEachJointHandle(e){try{kp(this.ptr,pt(e))}finally{rt[lt++]=void 0}}forEachJointAttachedToRigidBody(e,t){try{Vp(this.ptr,e,pt(t))}finally{rt[lt++]=void 0}}}class Tr{static __wrap(e){const t=Object.create(Tr.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Rg(e)}constructor(){const e=Ag();return Tr.__wrap(e)}contacts_with(e,t){Cg(this.ptr,e,wt(t))}contact_pair(e,t){const r=Pg(this.ptr,e,t);return r===0?void 0:hs.__wrap(r)}intersections_with(e,t){Lg(this.ptr,e,wt(t))}intersection_pair(e,t){return Ig(this.ptr,e,t)!==0}}class Hn{static __wrap(e){const t=Object.create(Hn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();E1(e)}constructor(){const e=T1();return Hn.__wrap(e)}step(e,t,r,n,a,o,s,l,c,h){I(e,B),I(t,zr),I(r,vr),I(n,Fr),I(a,Tr),I(o,ft),I(s,mt),I(l,_r),I(c,wr),I(h,vi),R1(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,o.ptr,s.ptr,l.ptr,c.ptr,h.ptr)}stepWithEvents(e,t,r,n,a,o,s,l,c,h,u,d,m,_){I(e,B),I(t,zr),I(r,vr),I(n,Fr),I(a,Tr),I(o,ft),I(s,mt),I(l,_r),I(c,wr),I(h,vi),I(u,nn),A1(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,o.ptr,s.ptr,l.ptr,c.ptr,h.ptr,u.ptr,wt(d),wt(m),wt(_))}}class Gn{static __wrap(e){const t=Object.create(Gn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();a_(e)}colliderHandle(){return s_(this.ptr)}point(){const e=Kn(this.ptr);return B.__wrap(e)}isInside(){return ps(this.ptr)!==0}featureType(){return o_(this.ptr)>>>0}featureId(){try{const r=$e(-16);l_(r,this.ptr);var e=st()[r/4+0],t=st()[r/4+1];return e===0?void 0:t>>>0}finally{$e(16)}}}class kn{static __wrap(e){const t=Object.create(kn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();n_(e)}point(){const e=Kn(this.ptr);return B.__wrap(e)}isInside(){return ps(this.ptr)!==0}}class an{static __wrap(e){const t=Object.create(an.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();C1(e)}constructor(){const e=P1();return an.__wrap(e)}update(e,t){I(e,ft),I(t,mt),L1(this.ptr,e.ptr,t.ptr)}castRay(e,t,r,n,a,o,s,l,c,h,u){try{I(e,ft),I(t,mt),I(r,B),I(n,B);const d=I1(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a,o,s,!be(l),be(l)?0:l,!be(c),be(c)?0:c,!be(h),be(h)?0:h,pt(u));return d===0?void 0:ds.__wrap(d)}finally{rt[lt++]=void 0}}castRayAndGetNormal(e,t,r,n,a,o,s,l,c,h,u){try{I(e,ft),I(t,mt),I(r,B),I(n,B);const d=D1(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a,o,s,!be(l),be(l)?0:l,!be(c),be(c)?0:c,!be(h),be(h)?0:h,pt(u));return d===0?void 0:Vn.__wrap(d)}finally{rt[lt++]=void 0}}intersectionsWithRay(e,t,r,n,a,o,s,l,c,h,u,d){try{I(e,ft),I(t,mt),I(r,B),I(n,B),U1(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a,o,pt(s),l,!be(c),be(c)?0:c,!be(h),be(h)?0:h,!be(u),be(u)?0:u,pt(d))}finally{rt[lt++]=void 0,rt[lt++]=void 0}}intersectionWithShape(e,t,r,n,a,o,s,l,c,h){try{const m=$e(-16);I(e,ft),I(t,mt),I(r,B),I(n,Ye),I(a,Le),N1(m,this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,o,!be(s),be(s)?0:s,!be(l),be(l)?0:l,!be(c),be(c)?0:c,pt(h));var u=st()[m/4+0],d=Nn()[m/8+1];return u===0?void 0:d}finally{$e(16),rt[lt++]=void 0}}projectPoint(e,t,r,n,a,o,s,l,c){try{I(e,ft),I(t,mt),I(r,B);const h=O1(this.ptr,e.ptr,t.ptr,r.ptr,n,a,!be(o),be(o)?0:o,!be(s),be(s)?0:s,!be(l),be(l)?0:l,pt(c));return h===0?void 0:Gn.__wrap(h)}finally{rt[lt++]=void 0}}projectPointAndGetFeature(e,t,r,n,a,o,s,l){try{I(e,ft),I(t,mt),I(r,B);const c=F1(this.ptr,e.ptr,t.ptr,r.ptr,n,!be(a),be(a)?0:a,!be(o),be(o)?0:o,!be(s),be(s)?0:s,pt(l));return c===0?void 0:Gn.__wrap(c)}finally{rt[lt++]=void 0}}intersectionsWithPoint(e,t,r,n,a,o,s,l,c){try{I(e,ft),I(t,mt),I(r,B),z1(this.ptr,e.ptr,t.ptr,r.ptr,pt(n),a,!be(o),be(o)?0:o,!be(s),be(s)?0:s,!be(l),be(l)?0:l,pt(c))}finally{rt[lt++]=void 0,rt[lt++]=void 0}}castShape(e,t,r,n,a,o,s,l,c,h,u,d,m){try{I(e,ft),I(t,mt),I(r,B),I(n,Ye),I(a,B),I(o,Le);const _=B1(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,o.ptr,s,l,c,!be(h),be(h)?0:h,!be(u),be(u)?0:u,!be(d),be(d)?0:d,pt(m));return _===0?void 0:qn.__wrap(_)}finally{rt[lt++]=void 0}}intersectionsWithShape(e,t,r,n,a,o,s,l,c,h,u){try{I(e,ft),I(t,mt),I(r,B),I(n,Ye),I(a,Le),H1(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,pt(o),s,!be(l),be(l)?0:l,!be(c),be(c)?0:c,!be(h),be(h)?0:h,pt(u))}finally{rt[lt++]=void 0,rt[lt++]=void 0}}collidersWithAabbIntersectingAabb(e,t,r){try{I(e,B),I(t,B),G1(this.ptr,e.ptr,t.ptr,pt(r))}finally{rt[lt++]=void 0}}}class Vn{static __wrap(e){const t=Object.create(Vn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();t0(e)}colliderHandle(){return on(this.ptr)}normal(){const e=d_(this.ptr);return B.__wrap(e)}toi(){return p_(this.ptr)}featureType(){return m_(this.ptr)>>>0}featureId(){try{const r=$e(-16);f_(r,this.ptr);var e=st()[r/4+0],t=st()[r/4+1];return e===0?void 0:t>>>0}finally{$e(16)}}}class ds{static __wrap(e){const t=Object.create(ds.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();g_(e)}colliderHandle(){return on(this.ptr)}toi(){return ti(this.ptr)}}class Wn{static __wrap(e){const t=Object.create(Wn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();c_(e)}normal(){const e=Jn(this.ptr);return B.__wrap(e)}toi(){return ti(this.ptr)}featureType(){return h_(this.ptr)>>>0}featureId(){try{const r=$e(-16);u_(r,this.ptr);var e=st()[r/4+0],t=st()[r/4+1];return e===0?void 0:t>>>0}finally{$e(16)}}}class ft{static __wrap(e){const t=Object.create(ft.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Qm(e)}rbTranslation(e){const t=Wp(this.ptr,e);return B.__wrap(t)}rbRotation(e){const t=Xp(this.ptr,e);return Ye.__wrap(t)}rbSleep(e){jp(this.ptr,e)}rbIsSleeping(e){return qp(this.ptr,e)!==0}rbIsMoving(e){return Yp(this.ptr,e)!==0}rbNextTranslation(e){const t=Kp(this.ptr,e);return B.__wrap(t)}rbNextRotation(e){const t=Jp(this.ptr,e);return Ye.__wrap(t)}rbSetTranslation(e,t,r,n,a){Zp(this.ptr,e,t,r,n,a)}rbSetRotation(e,t,r,n,a,o){Qp(this.ptr,e,t,r,n,a,o)}rbSetLinvel(e,t,r){I(t,B),$p(this.ptr,e,t.ptr,r)}rbSetAngvel(e,t,r){I(t,B),em(this.ptr,e,t.ptr,r)}rbSetNextKinematicTranslation(e,t,r,n){tm(this.ptr,e,t,r,n)}rbSetNextKinematicRotation(e,t,r,n,a){rm(this.ptr,e,t,r,n,a)}rbRecomputeMassPropertiesFromColliders(e,t){I(t,mt),im(this.ptr,e,t.ptr)}rbSetAdditionalMass(e,t,r){nm(this.ptr,e,t,r)}rbSetAdditionalMassProperties(e,t,r,n,a,o){I(r,B),I(n,B),I(a,Ye),am(this.ptr,e,t,r.ptr,n.ptr,a.ptr,o)}rbLinvel(e){const t=sm(this.ptr,e);return B.__wrap(t)}rbAngvel(e){const t=om(this.ptr,e);return B.__wrap(t)}rbLockTranslations(e,t,r){lm(this.ptr,e,t,r)}rbSetEnabledTranslations(e,t,r,n,a){cm(this.ptr,e,t,r,n,a)}rbLockRotations(e,t,r){hm(this.ptr,e,t,r)}rbSetEnabledRotations(e,t,r,n,a){um(this.ptr,e,t,r,n,a)}rbDominanceGroup(e){return dm(this.ptr,e)}rbSetDominanceGroup(e,t){pm(this.ptr,e,t)}rbEnableCcd(e,t){mm(this.ptr,e,t)}rbMass(e){return fm(this.ptr,e)}rbInvMass(e){return gm(this.ptr,e)}rbEffectiveInvMass(e){const t=_m(this.ptr,e);return B.__wrap(t)}rbLocalCom(e){const t=vm(this.ptr,e);return B.__wrap(t)}rbWorldCom(e){const t=wm(this.ptr,e);return B.__wrap(t)}rbInvPrincipalInertiaSqrt(e){const t=ym(this.ptr,e);return B.__wrap(t)}rbPrincipalInertiaLocalFrame(e){const t=xm(this.ptr,e);return Ye.__wrap(t)}rbPrincipalInertia(e){const t=Mm(this.ptr,e);return B.__wrap(t)}rbEffectiveWorldInvInertiaSqrt(e){const t=bm(this.ptr,e);return Xn.__wrap(t)}rbEffectiveAngularInertia(e){const t=Sm(this.ptr,e);return Xn.__wrap(t)}rbWakeUp(e){Em(this.ptr,e)}rbIsCcdEnabled(e){return Tm(this.ptr,e)!==0}rbNumColliders(e){return Rm(this.ptr,e)>>>0}rbCollider(e,t){return Am(this.ptr,e,t)}rbBodyType(e){return Cm(this.ptr,e)>>>0}rbSetBodyType(e,t,r){Pm(this.ptr,e,t,r)}rbIsFixed(e){return Lm(this.ptr,e)!==0}rbIsKinematic(e){return Im(this.ptr,e)!==0}rbIsDynamic(e){return Dm(this.ptr,e)!==0}rbLinearDamping(e){return Um(this.ptr,e)}rbAngularDamping(e){return Nm(this.ptr,e)}rbSetLinearDamping(e,t){Om(this.ptr,e,t)}rbSetAngularDamping(e,t){Fm(this.ptr,e,t)}rbSetEnabled(e,t){zm(this.ptr,e,t)}rbIsEnabled(e){return Bm(this.ptr,e)!==0}rbGravityScale(e){return Hm(this.ptr,e)}rbSetGravityScale(e,t,r){Gm(this.ptr,e,t,r)}rbResetForces(e,t){km(this.ptr,e,t)}rbResetTorques(e,t){Vm(this.ptr,e,t)}rbAddForce(e,t,r){I(t,B),Wm(this.ptr,e,t.ptr,r)}rbApplyImpulse(e,t,r){I(t,B),Xm(this.ptr,e,t.ptr,r)}rbAddTorque(e,t,r){I(t,B),jm(this.ptr,e,t.ptr,r)}rbApplyTorqueImpulse(e,t,r){I(t,B),qm(this.ptr,e,t.ptr,r)}rbAddForceAtPoint(e,t,r,n){I(t,B),I(r,B),Ym(this.ptr,e,t.ptr,r.ptr,n)}rbApplyImpulseAtPoint(e,t,r,n){I(t,B),I(r,B),Km(this.ptr,e,t.ptr,r.ptr,n)}rbUserData(e){return Jm(this.ptr,e)>>>0}rbSetUserData(e,t){Zm(this.ptr,e,t)}constructor(){const e=$m();return ft.__wrap(e)}createRigidBody(e,t,r,n,a,o,s,l,c,h,u,d,m,_,v,f,p,S,w,A,P,T,R,k){return I(t,B),I(r,Ye),I(s,B),I(l,B),I(c,B),I(h,B),I(u,Ye),ef(this.ptr,e,t.ptr,r.ptr,n,a,o,s.ptr,l.ptr,c.ptr,h.ptr,u.ptr,d,m,_,v,f,p,S,w,A,P,T,R,k)}remove(e,t,r,n,a){I(t,vr),I(r,mt),I(n,_r),I(a,wr),tf(this.ptr,e,t.ptr,r.ptr,n.ptr,a.ptr)}len(){return rf(this.ptr)>>>0}contains(e){return nf(this.ptr,e)!==0}forEachRigidBodyHandle(e){try{af(this.ptr,pt(e))}finally{rt[lt++]=void 0}}propagateModifiedBodyPositionsToColliders(e){I(e,mt),sf(this.ptr,e.ptr)}}class Ye{static __wrap(e){const t=Object.create(Ye.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();r0(e)}constructor(e,t,r,n){const a=Z_(e,t,r,n);return Ye.__wrap(a)}static identity(){const e=Q_();return Ye.__wrap(e)}get x(){return Zn(this.ptr)}get y(){return hl(this.ptr)}get z(){return ti(this.ptr)}get w(){return $_(this.ptr)}}class Xn{static __wrap(e){const t=Object.create(Xn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();n0(e)}elements(){const e=c1(this.ptr);return tn(e)}}class jn{static __wrap(e){const t=Object.create(jn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();s0(e)}constructor(){const e=a0();return jn.__wrap(e)}serializeAll(e,t,r,n,a,o,s,l,c){I(e,B),I(t,zr),I(r,vr),I(n,Fr),I(a,Tr),I(o,ft),I(s,mt),I(l,_r),I(c,wr);const h=Q1(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,o.ptr,s.ptr,l.ptr,c.ptr);return tn(h)}deserializeAll(e){const t=$1(this.ptr,wt(e));return t===0?void 0:us.__wrap(t)}}class Le{static __wrap(e){const t=Object.create(Le.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();__(e)}static cuboid(e,t,r){const n=v_(e,t,r);return Le.__wrap(n)}static roundCuboid(e,t,r,n){const a=w_(e,t,r,n);return Le.__wrap(a)}static ball(e){const t=y_(e);return Le.__wrap(t)}static halfspace(e){I(e,B);const t=x_(e.ptr);return Le.__wrap(t)}static capsule(e,t){const r=M_(e,t);return Le.__wrap(r)}static cylinder(e,t){const r=b_(e,t);return Le.__wrap(r)}static roundCylinder(e,t,r){const n=S_(e,t,r);return Le.__wrap(n)}static cone(e,t){const r=E_(e,t);return Le.__wrap(r)}static roundCone(e,t,r){const n=T_(e,t,r);return Le.__wrap(n)}static polyline(e,t){const r=ei(e,lr),n=Kt,a=On(t,lr),o=R_(r,n,a,Kt);return Le.__wrap(o)}static trimesh(e,t){const r=ei(e,lr),n=Kt,a=On(t,lr),o=A_(r,n,a,Kt);return Le.__wrap(o)}static heightfield(e,t,r,n){const a=ei(r,lr),o=Kt;I(n,B);const s=C_(e,t,a,o,n.ptr);return Le.__wrap(s)}static segment(e,t){I(e,B),I(t,B);const r=P_(e.ptr,t.ptr);return Le.__wrap(r)}static triangle(e,t,r){I(e,B),I(t,B),I(r,B);const n=L_(e.ptr,t.ptr,r.ptr);return Le.__wrap(n)}static roundTriangle(e,t,r,n){I(e,B),I(t,B),I(r,B);const a=I_(e.ptr,t.ptr,r.ptr,n);return Le.__wrap(a)}static convexHull(e){const t=ei(e,lr),r=D_(t,Kt);return r===0?void 0:Le.__wrap(r)}static roundConvexHull(e,t){const r=ei(e,lr),n=U_(r,Kt,t);return n===0?void 0:Le.__wrap(n)}static convexMesh(e,t){const r=ei(e,lr),n=Kt,a=On(t,lr),o=N_(r,n,a,Kt);return o===0?void 0:Le.__wrap(o)}static roundConvexMesh(e,t,r){const n=ei(e,lr),a=Kt,o=On(t,lr),s=O_(n,a,o,Kt,r);return s===0?void 0:Le.__wrap(s)}castShape(e,t,r,n,a,o,s,l,c){I(e,B),I(t,Ye),I(r,B),I(n,Le),I(a,B),I(o,Ye),I(s,B);const h=F_(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,o.ptr,s.ptr,l,c);return h===0?void 0:Yn.__wrap(h)}intersectsShape(e,t,r,n,a){return I(e,B),I(t,Ye),I(r,Le),I(n,B),I(a,Ye),z_(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr)!==0}contactShape(e,t,r,n,a,o){I(e,B),I(t,Ye),I(r,Le),I(n,B),I(a,Ye);const s=B_(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,o);return s===0?void 0:sn.__wrap(s)}containsPoint(e,t,r){return I(e,B),I(t,Ye),I(r,B),H_(this.ptr,e.ptr,t.ptr,r.ptr)!==0}projectPoint(e,t,r,n){I(e,B),I(t,Ye),I(r,B);const a=G_(this.ptr,e.ptr,t.ptr,r.ptr,n);return kn.__wrap(a)}intersectsRay(e,t,r,n,a){return I(e,B),I(t,Ye),I(r,B),I(n,B),k_(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a)!==0}castRay(e,t,r,n,a,o){return I(e,B),I(t,Ye),I(r,B),I(n,B),V_(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a,o)}castRayAndGetNormal(e,t,r,n,a,o){I(e,B),I(t,Ye),I(r,B),I(n,B);const s=W_(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a,o);return s===0?void 0:Wn.__wrap(s)}}class qn{static __wrap(e){const t=Object.create(qn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();K_(e)}colliderHandle(){return on(this.ptr)}toi(){return ti(this.ptr)}witness1(){const e=Jn(this.ptr);return B.__wrap(e)}witness2(){const e=cl(this.ptr);return B.__wrap(e)}normal1(){const e=ms(this.ptr);return B.__wrap(e)}normal2(){const e=J_(this.ptr);return B.__wrap(e)}}class sn{static __wrap(e){const t=Object.create(sn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Eg(e)}distance(){return Tg(this.ptr)}point1(){const e=Kn(this.ptr);return B.__wrap(e)}point2(){const e=Jn(this.ptr);return B.__wrap(e)}normal1(){const e=cl(this.ptr);return B.__wrap(e)}normal2(){const e=ms(this.ptr);return B.__wrap(e)}}class Yn{static __wrap(e){const t=Object.create(Yn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();X_(e)}toi(){return Zn(this.ptr)}witness1(){const e=j_(this.ptr);return B.__wrap(e)}witness2(){const e=ul(this.ptr);return B.__wrap(e)}normal1(){const e=q_(this.ptr);return B.__wrap(e)}normal2(){const e=Y_(this.ptr);return B.__wrap(e)}}class B{static __wrap(e){const t=Object.create(B.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();i0(e)}static zero(){const e=e1();return B.__wrap(e)}constructor(e,t,r){const n=t1(e,t,r);return B.__wrap(n)}get x(){return Zn(this.ptr)}set x(e){sl(this.ptr,e)}get y(){return hl(this.ptr)}set y(e){r1(this.ptr,e)}get z(){return ti(this.ptr)}set z(e){ol(this.ptr,e)}xyz(){const e=i1(this.ptr);return B.__wrap(e)}yxz(){const e=n1(this.ptr);return B.__wrap(e)}zxy(){const e=a1(this.ptr);return B.__wrap(e)}xzy(){const e=s1(this.ptr);return B.__wrap(e)}yzx(){const e=o1(this.ptr);return B.__wrap(e)}zyx(){const e=l1(this.ptr);return B.__wrap(e)}}function Au(i){tn(i)}function Cu(i){return wt(i)}function Pu(i,e){const t=nt(e),r=typeof t=="number"?t:void 0;Nn()[i/8+1]=be(r)?0:r,st()[i/4+0]=!be(r)}function Lu(i){const e=nt(i);return typeof e=="boolean"?e?1:0:2}function Iu(i){return typeof nt(i)=="function"}function Du(i){const e=Vn.__wrap(i);return wt(e)}function Uu(i){const e=ls.__wrap(i);return wt(e)}function Nu(){return os(function(i,e,t){const r=nt(i).call(nt(e),nt(t));return wt(r)},arguments)}function Ou(){return os(function(i,e,t,r){const n=nt(i).call(nt(e),nt(t),nt(r));return wt(n)},arguments)}function Fu(){return os(function(i,e,t,r,n){const a=nt(i).call(nt(e),nt(t),nt(r),nt(n));return wt(a)},arguments)}function zu(i,e,t,r){const n=nt(i).bind(nt(e),nt(t),nt(r));return wt(n)}function Bu(i){const e=nt(i).buffer;return wt(e)}function Hu(i,e,t){const r=new Uint8Array(nt(i),e>>>0,t>>>0);return wt(r)}function Gu(i){const e=new Uint8Array(nt(i));return wt(e)}function ku(i,e,t){nt(i).set(nt(e),t>>>0)}function Vu(i){return nt(i).length}function Wu(i,e,t){const r=new Float32Array(nt(i),e>>>0,t>>>0);return wt(r)}function Xu(i,e,t){nt(i).set(nt(e),t>>>0)}function ju(i){return nt(i).length}function qu(i){const e=new Float32Array(i>>>0);return wt(e)}function Yu(i,e){throw new Error(il(i,e))}function Ku(){return wt(wi)}URL=globalThis.URL;const g=await Mu({"./rapier_wasm3d_bg.js":{__wbindgen_object_drop_ref:Au,__wbindgen_number_new:Cu,__wbindgen_number_get:Pu,__wbindgen_boolean_get:Lu,__wbindgen_is_function:Iu,__wbg_rawraycolliderintersection_new:Du,__wbg_rawcontactforceevent_new:Uu,__wbg_call_168da88779e35f61:Nu,__wbg_call_3999bee59e9f7719:Ou,__wbg_call_e1f72c051cdab859:Fu,__wbg_bind_10dfe70e95d2a480:zu,__wbg_buffer_3f3d764d4747d564:Bu,__wbg_newwithbyteoffsetandlength_d9aa266703cb98be:Hu,__wbg_new_8c3f0052272a457a:Gu,__wbg_set_83db9690f9353e79:ku,__wbg_length_9e1ae1900cb0fbd5:Vu,__wbg_newwithbyteoffsetandlength_be22e5fcf4f69ab4:Wu,__wbg_set_0e0314cf6675c1b9:Xu,__wbg_length_9a2deed95d22668d:ju,__wbg_newwithlength_a7168e4a1e8f5e12:qu,__wbindgen_throw:Yu,__wbindgen_memory:Ku}},$r),wi=g.memory,Ju=g.version,Zu=g.__wbg_rawkinematiccharactercontroller_free,Qu=g.rawkinematiccharactercontroller_new,$u=g.rawkinematiccharactercontroller_up,ed=g.rawkinematiccharactercontroller_setUp,td=g.rawkinematiccharactercontroller_offset,rd=g.rawkinematiccharactercontroller_setOffset,id=g.rawkinematiccharactercontroller_slideEnabled,nd=g.rawkinematiccharactercontroller_setSlideEnabled,ad=g.rawkinematiccharactercontroller_autostepMaxHeight,sd=g.rawkinematiccharactercontroller_autostepMinWidth,od=g.rawkinematiccharactercontroller_autostepIncludesDynamicBodies,ld=g.rawkinematiccharactercontroller_autostepEnabled,cd=g.rawkinematiccharactercontroller_enableAutostep,hd=g.rawkinematiccharactercontroller_disableAutostep,ud=g.rawkinematiccharactercontroller_maxSlopeClimbAngle,dd=g.rawkinematiccharactercontroller_setMaxSlopeClimbAngle,pd=g.rawkinematiccharactercontroller_minSlopeSlideAngle,md=g.rawkinematiccharactercontroller_setMinSlopeSlideAngle,fd=g.rawkinematiccharactercontroller_snapToGroundDistance,gd=g.rawkinematiccharactercontroller_enableSnapToGround,_d=g.rawkinematiccharactercontroller_disableSnapToGround,vd=g.rawkinematiccharactercontroller_snapToGroundEnabled,wd=g.rawkinematiccharactercontroller_computeColliderMovement,Kn=g.rawkinematiccharactercontroller_computedMovement,ps=g.rawkinematiccharactercontroller_computedGrounded,yd=g.rawkinematiccharactercontroller_numComputedCollisions,xd=g.rawkinematiccharactercontroller_computedCollision,Md=g.__wbg_rawcharactercollision_free,bd=g.rawcharactercollision_new,on=g.rawcharactercollision_handle,Sd=g.rawcharactercollision_translationApplied,Ed=g.rawcharactercollision_translationRemaining,ti=g.rawcharactercollision_toi,Jn=g.rawcharactercollision_worldWitness1,Td=g.rawcharactercollision_worldWitness2,ms=g.rawcharactercollision_worldNormal1,Rd=g.rawcharactercollision_worldNormal2,Ad=g.__wbg_rawccdsolver_free,Cd=g.rawccdsolver_new,Pd=g.rawimpulsejointset_jointType,Ld=g.rawimpulsejointset_jointBodyHandle1,Id=g.rawimpulsejointset_jointBodyHandle2,Dd=g.rawimpulsejointset_jointFrameX1,Ud=g.rawimpulsejointset_jointFrameX2,Nd=g.rawimpulsejointset_jointAnchor1,Od=g.rawimpulsejointset_jointAnchor2,Fd=g.rawimpulsejointset_jointSetAnchor1,zd=g.rawimpulsejointset_jointSetAnchor2,Bd=g.rawimpulsejointset_jointContactsEnabled,Hd=g.rawimpulsejointset_jointSetContactsEnabled,Gd=g.rawimpulsejointset_jointLimitsEnabled,kd=g.rawimpulsejointset_jointLimitsMin,Vd=g.rawimpulsejointset_jointLimitsMax,Wd=g.rawimpulsejointset_jointSetLimits,Xd=g.rawimpulsejointset_jointConfigureMotorModel,jd=g.rawimpulsejointset_jointConfigureMotorVelocity,qd=g.rawimpulsejointset_jointConfigureMotorPosition,Yd=g.rawimpulsejointset_jointConfigureMotor,Kd=g.__wbg_rawimpulsejointset_free,Jd=g.rawimpulsejointset_new,Zd=g.rawimpulsejointset_createJoint,Qd=g.rawimpulsejointset_remove,$d=g.rawimpulsejointset_len,ep=g.rawimpulsejointset_contains,tp=g.rawimpulsejointset_forEachJointHandle,rp=g.rawimpulsejointset_forEachJointAttachedToRigidBody,ip=g.__wbg_rawintegrationparameters_free,np=g.rawintegrationparameters_new,Zn=g.rawintegrationparameters_dt,ap=g.rawintegrationparameters_allowedLinearError,sp=g.rawintegrationparameters_predictionDistance,op=g.rawintegrationparameters_maxVelocityIterations,lp=g.rawintegrationparameters_maxVelocityFrictionIterations,cp=g.rawintegrationparameters_maxStabilizationIterations,hp=g.rawintegrationparameters_minIslandSize,up=g.rawintegrationparameters_maxCcdSubsteps,sl=g.rawintegrationparameters_set_dt,ol=g.rawintegrationparameters_set_erp,dp=g.rawintegrationparameters_set_allowedLinearError,pp=g.rawintegrationparameters_set_predictionDistance,mp=g.rawintegrationparameters_set_maxVelocityIterations,fp=g.rawintegrationparameters_set_maxVelocityFrictionIterations,gp=g.rawintegrationparameters_set_maxStabilizationIterations,_p=g.rawintegrationparameters_set_minIslandSize,vp=g.rawintegrationparameters_set_maxCcdSubsteps,wp=g.__wbg_rawislandmanager_free,yp=g.rawislandmanager_new,xp=g.rawislandmanager_forEachActiveRigidBodyHandle,Mp=g.__wbg_rawgenericjoint_free,bp=g.rawgenericjoint_spherical,Sp=g.rawgenericjoint_prismatic,Ep=g.rawgenericjoint_fixed,Tp=g.rawgenericjoint_revolute,Rp=g.rawmultibodyjointset_jointType,Ap=g.rawmultibodyjointset_jointFrameX1,Cp=g.rawmultibodyjointset_jointFrameX2,Pp=g.rawmultibodyjointset_jointAnchor1,Lp=g.rawmultibodyjointset_jointAnchor2,Ip=g.rawmultibodyjointset_jointContactsEnabled,Dp=g.rawmultibodyjointset_jointSetContactsEnabled,Up=g.rawmultibodyjointset_jointLimitsEnabled,Np=g.rawmultibodyjointset_jointLimitsMin,Op=g.rawmultibodyjointset_jointLimitsMax,Fp=g.__wbg_rawmultibodyjointset_free,zp=g.rawmultibodyjointset_new,Bp=g.rawmultibodyjointset_createJoint,Hp=g.rawmultibodyjointset_remove,Gp=g.rawmultibodyjointset_contains,kp=g.rawmultibodyjointset_forEachJointHandle,Vp=g.rawmultibodyjointset_forEachJointAttachedToRigidBody,Wp=g.rawrigidbodyset_rbTranslation,Xp=g.rawrigidbodyset_rbRotation,jp=g.rawrigidbodyset_rbSleep,qp=g.rawrigidbodyset_rbIsSleeping,Yp=g.rawrigidbodyset_rbIsMoving,Kp=g.rawrigidbodyset_rbNextTranslation,Jp=g.rawrigidbodyset_rbNextRotation,Zp=g.rawrigidbodyset_rbSetTranslation,Qp=g.rawrigidbodyset_rbSetRotation,$p=g.rawrigidbodyset_rbSetLinvel,em=g.rawrigidbodyset_rbSetAngvel,tm=g.rawrigidbodyset_rbSetNextKinematicTranslation,rm=g.rawrigidbodyset_rbSetNextKinematicRotation,im=g.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders,nm=g.rawrigidbodyset_rbSetAdditionalMass,am=g.rawrigidbodyset_rbSetAdditionalMassProperties,sm=g.rawrigidbodyset_rbLinvel,om=g.rawrigidbodyset_rbAngvel,lm=g.rawrigidbodyset_rbLockTranslations,cm=g.rawrigidbodyset_rbSetEnabledTranslations,hm=g.rawrigidbodyset_rbLockRotations,um=g.rawrigidbodyset_rbSetEnabledRotations,dm=g.rawrigidbodyset_rbDominanceGroup,pm=g.rawrigidbodyset_rbSetDominanceGroup,mm=g.rawrigidbodyset_rbEnableCcd,fm=g.rawrigidbodyset_rbMass,gm=g.rawrigidbodyset_rbInvMass,_m=g.rawrigidbodyset_rbEffectiveInvMass,vm=g.rawrigidbodyset_rbLocalCom,wm=g.rawrigidbodyset_rbWorldCom,ym=g.rawrigidbodyset_rbInvPrincipalInertiaSqrt,xm=g.rawrigidbodyset_rbPrincipalInertiaLocalFrame,Mm=g.rawrigidbodyset_rbPrincipalInertia,bm=g.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt,Sm=g.rawrigidbodyset_rbEffectiveAngularInertia,Em=g.rawrigidbodyset_rbWakeUp,Tm=g.rawrigidbodyset_rbIsCcdEnabled,Rm=g.rawrigidbodyset_rbNumColliders,Am=g.rawrigidbodyset_rbCollider,Cm=g.rawrigidbodyset_rbBodyType,Pm=g.rawrigidbodyset_rbSetBodyType,Lm=g.rawrigidbodyset_rbIsFixed,Im=g.rawrigidbodyset_rbIsKinematic,Dm=g.rawrigidbodyset_rbIsDynamic,Um=g.rawrigidbodyset_rbLinearDamping,Nm=g.rawrigidbodyset_rbAngularDamping,Om=g.rawrigidbodyset_rbSetLinearDamping,Fm=g.rawrigidbodyset_rbSetAngularDamping,zm=g.rawrigidbodyset_rbSetEnabled,Bm=g.rawrigidbodyset_rbIsEnabled,Hm=g.rawrigidbodyset_rbGravityScale,Gm=g.rawrigidbodyset_rbSetGravityScale,km=g.rawrigidbodyset_rbResetForces,Vm=g.rawrigidbodyset_rbResetTorques,Wm=g.rawrigidbodyset_rbAddForce,Xm=g.rawrigidbodyset_rbApplyImpulse,jm=g.rawrigidbodyset_rbAddTorque,qm=g.rawrigidbodyset_rbApplyTorqueImpulse,Ym=g.rawrigidbodyset_rbAddForceAtPoint,Km=g.rawrigidbodyset_rbApplyImpulseAtPoint,Jm=g.rawrigidbodyset_rbUserData,Zm=g.rawrigidbodyset_rbSetUserData,Qm=g.__wbg_rawrigidbodyset_free,$m=g.rawrigidbodyset_new,ef=g.rawrigidbodyset_createRigidBody,tf=g.rawrigidbodyset_remove,rf=g.rawrigidbodyset_len,nf=g.rawrigidbodyset_contains,af=g.rawrigidbodyset_forEachRigidBodyHandle,sf=g.rawrigidbodyset_propagateModifiedBodyPositionsToColliders,of=g.__wbg_rawbroadphase_free,lf=g.rawbroadphase_new,cf=g.rawcolliderset_coTranslation,hf=g.rawcolliderset_coRotation,uf=g.rawcolliderset_coSetTranslation,df=g.rawcolliderset_coSetTranslationWrtParent,pf=g.rawcolliderset_coSetRotation,mf=g.rawcolliderset_coSetRotationWrtParent,ff=g.rawcolliderset_coIsSensor,gf=g.rawcolliderset_coShapeType,_f=g.rawcolliderset_coHalfspaceNormal,vf=g.rawcolliderset_coHalfExtents,wf=g.rawcolliderset_coSetHalfExtents,yf=g.rawcolliderset_coRadius,xf=g.rawcolliderset_coSetRadius,Mf=g.rawcolliderset_coHalfHeight,bf=g.rawcolliderset_coSetHalfHeight,Sf=g.rawcolliderset_coRoundRadius,Ef=g.rawcolliderset_coSetRoundRadius,Tf=g.rawcolliderset_coVertices,Rf=g.rawcolliderset_coIndices,Af=g.rawcolliderset_coHeightfieldHeights,Cf=g.rawcolliderset_coHeightfieldScale,Pf=g.rawcolliderset_coHeightfieldNRows,Lf=g.rawcolliderset_coHeightfieldNCols,If=g.rawcolliderset_coParent,Df=g.rawcolliderset_coSetEnabled,Uf=g.rawcolliderset_coIsEnabled,Nf=g.rawcolliderset_coFriction,Of=g.rawcolliderset_coRestitution,Ff=g.rawcolliderset_coDensity,zf=g.rawcolliderset_coMass,Bf=g.rawcolliderset_coVolume,Hf=g.rawcolliderset_coCollisionGroups,Gf=g.rawcolliderset_coSolverGroups,kf=g.rawcolliderset_coActiveHooks,Vf=g.rawcolliderset_coActiveCollisionTypes,Wf=g.rawcolliderset_coActiveEvents,Xf=g.rawcolliderset_coContactForceEventThreshold,jf=g.rawcolliderset_coContainsPoint,qf=g.rawcolliderset_coCastShape,Yf=g.rawcolliderset_coCastCollider,Kf=g.rawcolliderset_coIntersectsShape,Jf=g.rawcolliderset_coContactShape,Zf=g.rawcolliderset_coContactCollider,Qf=g.rawcolliderset_coProjectPoint,$f=g.rawcolliderset_coIntersectsRay,eg=g.rawcolliderset_coCastRay,tg=g.rawcolliderset_coCastRayAndGetNormal,rg=g.rawcolliderset_coSetSensor,ig=g.rawcolliderset_coSetRestitution,ng=g.rawcolliderset_coSetFriction,ag=g.rawcolliderset_coFrictionCombineRule,sg=g.rawcolliderset_coSetFrictionCombineRule,og=g.rawcolliderset_coRestitutionCombineRule,lg=g.rawcolliderset_coSetRestitutionCombineRule,cg=g.rawcolliderset_coSetCollisionGroups,hg=g.rawcolliderset_coSetSolverGroups,ug=g.rawcolliderset_coSetActiveHooks,dg=g.rawcolliderset_coSetActiveEvents,pg=g.rawcolliderset_coSetActiveCollisionTypes,mg=g.rawcolliderset_coSetShape,fg=g.rawcolliderset_coSetContactForceEventThreshold,gg=g.rawcolliderset_coSetDensity,_g=g.rawcolliderset_coSetMass,vg=g.rawcolliderset_coSetMassProperties,wg=g.__wbg_rawcolliderset_free,yg=g.rawcolliderset_new,xg=g.rawcolliderset_len,ll=g.rawcolliderset_contains,Mg=g.rawcolliderset_createCollider,bg=g.rawcolliderset_remove,Sg=g.rawcolliderset_forEachColliderHandle,Eg=g.__wbg_rawshapecontact_free,Tg=g.rawshapecontact_distance,Rg=g.__wbg_rawnarrowphase_free,Ag=g.rawnarrowphase_new,Cg=g.rawnarrowphase_contacts_with,Pg=g.rawnarrowphase_contact_pair,Lg=g.rawnarrowphase_intersections_with,Ig=g.rawnarrowphase_intersection_pair,Dg=g.__wbg_rawcontactmanifold_free,Ug=g.rawcontactpair_collider1,Ng=g.rawcontactpair_collider2,Og=g.rawcontactpair_numContactManifolds,Fg=g.rawcontactpair_contactManifold,zg=g.rawcontactmanifold_normal,Bg=g.rawcontactmanifold_local_n1,Hg=g.rawcontactmanifold_local_n2,Gg=g.rawcontactmanifold_subshape1,kg=g.rawcontactmanifold_subshape2,Vg=g.rawcontactmanifold_num_contacts,Wg=g.rawcontactmanifold_contact_local_p1,Xg=g.rawcontactmanifold_contact_local_p2,jg=g.rawcontactmanifold_contact_dist,qg=g.rawcontactmanifold_contact_fid1,Yg=g.rawcontactmanifold_contact_fid2,Kg=g.rawcontactmanifold_contact_impulse,Jg=g.rawcontactmanifold_contact_tangent_impulse_x,Zg=g.rawcontactmanifold_contact_tangent_impulse_y,Qg=g.rawcontactmanifold_num_solver_contacts,$g=g.rawcontactmanifold_solver_contact_point,e_=g.rawcontactmanifold_solver_contact_dist,t_=g.rawcontactmanifold_solver_contact_friction,r_=g.rawcontactmanifold_solver_contact_restitution,i_=g.rawcontactmanifold_solver_contact_tangent_velocity,n_=g.__wbg_rawpointprojection_free,a_=g.__wbg_rawpointcolliderprojection_free,s_=g.rawpointcolliderprojection_colliderHandle,o_=g.rawpointcolliderprojection_featureType,l_=g.rawpointcolliderprojection_featureId,c_=g.__wbg_rawrayintersection_free,h_=g.rawrayintersection_featureType,u_=g.rawrayintersection_featureId,d_=g.rawraycolliderintersection_normal,p_=g.rawraycolliderintersection_toi,m_=g.rawraycolliderintersection_featureType,f_=g.rawraycolliderintersection_featureId,g_=g.__wbg_rawraycollidertoi_free,__=g.__wbg_rawshape_free,v_=g.rawshape_cuboid,w_=g.rawshape_roundCuboid,y_=g.rawshape_ball,x_=g.rawshape_halfspace,M_=g.rawshape_capsule,b_=g.rawshape_cylinder,S_=g.rawshape_roundCylinder,E_=g.rawshape_cone,T_=g.rawshape_roundCone,R_=g.rawshape_polyline,A_=g.rawshape_trimesh,C_=g.rawshape_heightfield,P_=g.rawshape_segment,L_=g.rawshape_triangle,I_=g.rawshape_roundTriangle,D_=g.rawshape_convexHull,U_=g.rawshape_roundConvexHull,N_=g.rawshape_convexMesh,O_=g.rawshape_roundConvexMesh,F_=g.rawshape_castShape,z_=g.rawshape_intersectsShape,B_=g.rawshape_contactShape,H_=g.rawshape_containsPoint,G_=g.rawshape_projectPoint,k_=g.rawshape_intersectsRay,V_=g.rawshape_castRay,W_=g.rawshape_castRayAndGetNormal,X_=g.__wbg_rawshapetoi_free,j_=g.rawshapetoi_witness1,q_=g.rawshapetoi_normal1,Y_=g.rawshapetoi_normal2,K_=g.__wbg_rawshapecollidertoi_free,cl=g.rawshapecollidertoi_witness2,J_=g.rawshapecollidertoi_normal2,Z_=g.rawrotation_new,Q_=g.rawrotation_identity,hl=g.rawrotation_y,$_=g.rawrotation_w,e1=g.rawvector_zero,t1=g.rawvector_new,r1=g.rawvector_set_y,i1=g.rawvector_xyz,n1=g.rawvector_yxz,a1=g.rawvector_zxy,s1=g.rawvector_xzy,o1=g.rawvector_yzx,l1=g.rawvector_zyx,c1=g.rawsdpmatrix3_elements,h1=g.__wbg_rawdebugrenderpipeline_free,u1=g.rawdebugrenderpipeline_new,d1=g.rawdebugrenderpipeline_vertices,p1=g.rawdebugrenderpipeline_colors,m1=g.rawdebugrenderpipeline_render,f1=g.__wbg_raweventqueue_free,g1=g.__wbg_rawcontactforceevent_free,_1=g.rawcontactforceevent_collider2,ul=g.rawcontactforceevent_total_force,v1=g.rawcontactforceevent_total_force_magnitude,w1=g.rawcontactforceevent_max_force_direction,y1=g.rawcontactforceevent_max_force_magnitude,x1=g.raweventqueue_new,M1=g.raweventqueue_drainCollisionEvents,b1=g.raweventqueue_drainContactForceEvents,S1=g.raweventqueue_clear,E1=g.__wbg_rawphysicspipeline_free,T1=g.rawphysicspipeline_new,R1=g.rawphysicspipeline_step,A1=g.rawphysicspipeline_stepWithEvents,C1=g.__wbg_rawquerypipeline_free,P1=g.rawquerypipeline_new,L1=g.rawquerypipeline_update,I1=g.rawquerypipeline_castRay,D1=g.rawquerypipeline_castRayAndGetNormal,U1=g.rawquerypipeline_intersectionsWithRay,N1=g.rawquerypipeline_intersectionWithShape,O1=g.rawquerypipeline_projectPoint,F1=g.rawquerypipeline_projectPointAndGetFeature,z1=g.rawquerypipeline_intersectionsWithPoint,B1=g.rawquerypipeline_castShape,H1=g.rawquerypipeline_intersectionsWithShape,G1=g.rawquerypipeline_collidersWithAabbIntersectingAabb,k1=g.__wbg_rawdeserializedworld_free,V1=g.rawdeserializedworld_takeGravity,W1=g.rawdeserializedworld_takeIntegrationParameters,X1=g.rawdeserializedworld_takeIslandManager,j1=g.rawdeserializedworld_takeBroadPhase,q1=g.rawdeserializedworld_takeNarrowPhase,Y1=g.rawdeserializedworld_takeBodies,K1=g.rawdeserializedworld_takeColliders,J1=g.rawdeserializedworld_takeImpulseJoints,Z1=g.rawdeserializedworld_takeMultibodyJoints,Q1=g.rawserializationpipeline_serializeAll,$1=g.rawserializationpipeline_deserializeAll,e0=g.__wbg_rawcontactpair_free,t0=g.__wbg_rawraycolliderintersection_free,r0=g.__wbg_rawrotation_free,i0=g.__wbg_rawvector_free,n0=g.__wbg_rawsdpmatrix3_free;g.rawvector_set_x,g.rawvector_set_z,g.rawpointprojection_isInside,g.rawpointcolliderprojection_isInside,g.rawcolliderset_isHandleValid,g.rawshapecontact_point1,g.rawshapecontact_point2,g.rawshapecontact_normal2,g.rawpointprojection_point,g.rawpointcolliderprojection_point,g.rawrayintersection_normal,g.rawshapecollidertoi_witness1,g.rawshapecontact_normal1,g.rawshapecollidertoi_normal1,g.rawshapetoi_witness2;const a0=g.rawserializationpipeline_new;g.rawintegrationparameters_erp,g.rawrayintersection_toi,g.rawraycollidertoi_toi,g.rawshapetoi_toi,g.rawshapecollidertoi_toi,g.rawrotation_x,g.rawrotation_z,g.rawvector_x,g.rawvector_y,g.rawvector_z,g.rawraycolliderintersection_colliderHandle,g.rawraycollidertoi_colliderHandle,g.rawshapecollidertoi_colliderHandle,g.rawcontactforceevent_collider1;const s0=g.__wbg_rawserializationpipeline_free,$e=g.__wbindgen_add_to_stack_pointer,Qn=g.__wbindgen_free,lr=g.__wbindgen_malloc,o0=g.__wbindgen_exn_store;let dl=class{constructor(i,e,t){this.x=i,this.y=e,this.z=t}};class O{static new(e,t,r){return new dl(e,t,r)}static intoRaw(e){return new B(e.x,e.y,e.z)}static zeros(){return O.new(0,0,0)}static fromRaw(e){if(!e)return null;let t=O.new(e.x,e.y,e.z);return e.free(),t}static copy(e,t){e.x=t.x,e.y=t.y,e.z=t.z}}let fs=class{constructor(i,e,t,r){this.x=i,this.y=e,this.z=t,this.w=r}};class We{static identity(){return new fs(0,0,0,1)}static fromRaw(e){if(!e)return null;let t=new fs(e.x,e.y,e.z,e.w);return e.free(),t}static intoRaw(e){return new Ye(e.x,e.y,e.z,e.w)}static copy(e,t){e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w}}class pl{constructor(e){this.elements=e}get m11(){return this.elements[0]}get m12(){return this.elements[1]}get m21(){return this.m12}get m13(){return this.elements[2]}get m31(){return this.m13}get m22(){return this.elements[3]}get m23(){return this.elements[4]}get m32(){return this.m23}get m33(){return this.elements[5]}}class gs{static fromRaw(e){const t=new pl(e.elements());return e.free(),t}}var cr;(function(i){i[i.Dynamic=0]="Dynamic",i[i.Fixed=1]="Fixed",i[i.KinematicPositionBased=2]="KinematicPositionBased",i[i.KinematicVelocityBased=3]="KinematicVelocityBased"})(cr||(cr={}));class _s{constructor(e,t,r){this.rawSet=e,this.colliderSet=t,this.handle=r}finalizeDeserialization(e){this.colliderSet=e}isValid(){return this.rawSet.contains(this.handle)}lockTranslations(e,t){return this.rawSet.rbLockTranslations(this.handle,e,t)}lockRotations(e,t){return this.rawSet.rbLockRotations(this.handle,e,t)}setEnabledTranslations(e,t,r,n){return this.rawSet.rbSetEnabledTranslations(this.handle,e,t,r,n)}restrictTranslations(e,t,r,n){this.setEnabledTranslations(e,t,r,n)}setEnabledRotations(e,t,r,n){return this.rawSet.rbSetEnabledRotations(this.handle,e,t,r,n)}restrictRotations(e,t,r,n){this.setEnabledRotations(e,t,r,n)}dominanceGroup(){return this.rawSet.rbDominanceGroup(this.handle)}setDominanceGroup(e){this.rawSet.rbSetDominanceGroup(this.handle,e)}enableCcd(e){this.rawSet.rbEnableCcd(this.handle,e)}translation(){let e=this.rawSet.rbTranslation(this.handle);return O.fromRaw(e)}rotation(){let e=this.rawSet.rbRotation(this.handle);return We.fromRaw(e)}nextTranslation(){let e=this.rawSet.rbNextTranslation(this.handle);return O.fromRaw(e)}nextRotation(){let e=this.rawSet.rbNextRotation(this.handle);return We.fromRaw(e)}setTranslation(e,t){this.rawSet.rbSetTranslation(this.handle,e.x,e.y,e.z,t)}setLinvel(e,t){let r=O.intoRaw(e);this.rawSet.rbSetLinvel(this.handle,r,t),r.free()}gravityScale(){return this.rawSet.rbGravityScale(this.handle)}setGravityScale(e,t){this.rawSet.rbSetGravityScale(this.handle,e,t)}setRotation(e,t){this.rawSet.rbSetRotation(this.handle,e.x,e.y,e.z,e.w,t)}setAngvel(e,t){let r=O.intoRaw(e);this.rawSet.rbSetAngvel(this.handle,r,t),r.free()}setNextKinematicTranslation(e){this.rawSet.rbSetNextKinematicTranslation(this.handle,e.x,e.y,e.z)}setNextKinematicRotation(e){this.rawSet.rbSetNextKinematicRotation(this.handle,e.x,e.y,e.z,e.w)}linvel(){return O.fromRaw(this.rawSet.rbLinvel(this.handle))}angvel(){return O.fromRaw(this.rawSet.rbAngvel(this.handle))}mass(){return this.rawSet.rbMass(this.handle)}effectiveInvMass(){return O.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle))}invMass(){return this.rawSet.rbInvMass(this.handle)}localCom(){return O.fromRaw(this.rawSet.rbLocalCom(this.handle))}worldCom(){return O.fromRaw(this.rawSet.rbWorldCom(this.handle))}invPrincipalInertiaSqrt(){return O.fromRaw(this.rawSet.rbInvPrincipalInertiaSqrt(this.handle))}principalInertia(){return O.fromRaw(this.rawSet.rbPrincipalInertia(this.handle))}principalInertiaLocalFrame(){return We.fromRaw(this.rawSet.rbPrincipalInertiaLocalFrame(this.handle))}effectiveWorldInvInertiaSqrt(){return gs.fromRaw(this.rawSet.rbEffectiveWorldInvInertiaSqrt(this.handle))}effectiveAngularInertia(){return gs.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle))}sleep(){this.rawSet.rbSleep(this.handle)}wakeUp(){this.rawSet.rbWakeUp(this.handle)}isCcdEnabled(){return this.rawSet.rbIsCcdEnabled(this.handle)}numColliders(){return this.rawSet.rbNumColliders(this.handle)}collider(e){return this.colliderSet.get(this.rawSet.rbCollider(this.handle,e))}setEnabled(e){this.rawSet.rbSetEnabled(this.handle,e)}isEnabled(){return this.rawSet.rbIsEnabled(this.handle)}bodyType(){return this.rawSet.rbBodyType(this.handle)}setBodyType(e,t){return this.rawSet.rbSetBodyType(this.handle,e,t)}isSleeping(){return this.rawSet.rbIsSleeping(this.handle)}isMoving(){return this.rawSet.rbIsMoving(this.handle)}isFixed(){return this.rawSet.rbIsFixed(this.handle)}isKinematic(){return this.rawSet.rbIsKinematic(this.handle)}isDynamic(){return this.rawSet.rbIsDynamic(this.handle)}linearDamping(){return this.rawSet.rbLinearDamping(this.handle)}angularDamping(){return this.rawSet.rbAngularDamping(this.handle)}setLinearDamping(e){this.rawSet.rbSetLinearDamping(this.handle,e)}recomputeMassPropertiesFromColliders(){this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle,this.colliderSet.raw)}setAdditionalMass(e,t){this.rawSet.rbSetAdditionalMass(this.handle,e,t)}setAdditionalMassProperties(e,t,r,n,a){let o=O.intoRaw(t),s=O.intoRaw(r),l=We.intoRaw(n);this.rawSet.rbSetAdditionalMassProperties(this.handle,e,o,s,l,a),o.free(),s.free(),l.free()}setAngularDamping(e){this.rawSet.rbSetAngularDamping(this.handle,e)}resetForces(e){this.rawSet.rbResetForces(this.handle,e)}resetTorques(e){this.rawSet.rbResetTorques(this.handle,e)}addForce(e,t){const r=O.intoRaw(e);this.rawSet.rbAddForce(this.handle,r,t),r.free()}applyImpulse(e,t){const r=O.intoRaw(e);this.rawSet.rbApplyImpulse(this.handle,r,t),r.free()}addTorque(e,t){const r=O.intoRaw(e);this.rawSet.rbAddTorque(this.handle,r,t),r.free()}applyTorqueImpulse(e,t){const r=O.intoRaw(e);this.rawSet.rbApplyTorqueImpulse(this.handle,r,t),r.free()}addForceAtPoint(e,t,r){const n=O.intoRaw(e),a=O.intoRaw(t);this.rawSet.rbAddForceAtPoint(this.handle,n,a,r),n.free(),a.free()}applyImpulseAtPoint(e,t,r){const n=O.intoRaw(e),a=O.intoRaw(t);this.rawSet.rbApplyImpulseAtPoint(this.handle,n,a,r),n.free(),a.free()}}class yr{constructor(e){this.enabled=!0,this.status=e,this.translation=O.zeros(),this.rotation=We.identity(),this.gravityScale=1,this.linvel=O.zeros(),this.mass=0,this.massOnly=!1,this.centerOfMass=O.zeros(),this.translationsEnabledX=!0,this.translationsEnabledY=!0,this.angvel=O.zeros(),this.principalAngularInertia=O.zeros(),this.angularInertiaLocalFrame=We.identity(),this.translationsEnabledZ=!0,this.rotationsEnabledX=!0,this.rotationsEnabledY=!0,this.rotationsEnabledZ=!0,this.linearDamping=0,this.angularDamping=0,this.canSleep=!0,this.sleeping=!1,this.ccdEnabled=!1,this.dominanceGroup=0}static dynamic(){return new yr(cr.Dynamic)}static kinematicPositionBased(){return new yr(cr.KinematicPositionBased)}static kinematicVelocityBased(){return new yr(cr.KinematicVelocityBased)}static fixed(){return new yr(cr.Fixed)}static newDynamic(){return new yr(cr.Dynamic)}static newKinematicPositionBased(){return new yr(cr.KinematicPositionBased)}static newKinematicVelocityBased(){return new yr(cr.KinematicVelocityBased)}static newStatic(){return new yr(cr.Fixed)}setDominanceGroup(e){return this.dominanceGroup=e,this}setEnabled(e){return this.enabled=e,this}setTranslation(e,t,r){if(typeof e!="number"||typeof t!="number"||typeof r!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:e,y:t,z:r},this}setRotation(e){return We.copy(this.rotation,e),this}setGravityScale(e){return this.gravityScale=e,this}setAdditionalMass(e){return this.mass=e,this.massOnly=!0,this}setLinvel(e,t,r){if(typeof e!="number"||typeof t!="number"||typeof r!="number")throw TypeError("The linvel components must be numbers.");return this.linvel={x:e,y:t,z:r},this}setAngvel(e){return O.copy(this.angvel,e),this}setAdditionalMassProperties(e,t,r,n){return this.mass=e,O.copy(this.centerOfMass,t),O.copy(this.principalAngularInertia,r),We.copy(this.angularInertiaLocalFrame,n),this.massOnly=!1,this}enabledTranslations(e,t,r){return this.translationsEnabledX=e,this.translationsEnabledY=t,this.translationsEnabledZ=r,this}restrictTranslations(e,t,r){return this.enabledTranslations(e,t,r)}lockTranslations(){return this.enabledTranslations(!1,!1,!1)}enabledRotations(e,t,r){return this.rotationsEnabledX=e,this.rotationsEnabledY=t,this.rotationsEnabledZ=r,this}restrictRotations(e,t,r){return this.enabledRotations(e,t,r)}lockRotations(){return this.restrictRotations(!1,!1,!1)}setLinearDamping(e){return this.linearDamping=e,this}setAngularDamping(e){return this.angularDamping=e,this}setCanSleep(e){return this.canSleep=e,this}setSleeping(e){return this.sleeping=e,this}setCcdEnabled(e){return this.ccdEnabled=e,this}setUserData(e){return this.userData=e,this}}class $n{constructor(){this.fconv=new Float64Array(1),this.uconv=new Uint32Array(this.fconv.buffer),this.data=new Array,this.size=0}set(e,t){let r=this.index(e);for(;this.data.length<=r;)this.data.push(null);this.data[r]==null&&(this.size+=1),this.data[r]=t}len(){return this.size}delete(e){let t=this.index(e);t<this.data.length&&(this.data[t]!=null&&(this.size-=1),this.data[t]=null)}clear(){this.data=new Array}get(e){let t=this.index(e);return t<this.data.length?this.data[t]:null}forEach(e){for(const t of this.data)t!=null&&e(t)}getAll(){return this.data.filter(e=>e!=null)}index(e){return this.fconv[0]=e,this.uconv[0]}}class ml{constructor(e){this.raw=e||new ft,this.map=new $n,e&&e.forEachRigidBodyHandle(t=>{this.map.set(t,new _s(e,null,t))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}finalizeDeserialization(e){this.map.forEach(t=>t.finalizeDeserialization(e))}createRigidBody(e,t){let r=O.intoRaw(t.translation),n=We.intoRaw(t.rotation),a=O.intoRaw(t.linvel),o=O.intoRaw(t.centerOfMass),s=O.intoRaw(t.angvel),l=O.intoRaw(t.principalAngularInertia),c=We.intoRaw(t.angularInertiaLocalFrame),h=this.raw.createRigidBody(t.enabled,r,n,t.gravityScale,t.mass,t.massOnly,o,a,s,l,c,t.translationsEnabledX,t.translationsEnabledY,t.translationsEnabledZ,t.rotationsEnabledX,t.rotationsEnabledY,t.rotationsEnabledZ,t.linearDamping,t.angularDamping,t.status,t.canSleep,t.sleeping,t.ccdEnabled,t.dominanceGroup);r.free(),n.free(),a.free(),o.free(),s.free(),l.free(),c.free();const u=new _s(this.raw,e,h);return u.userData=t.userData,this.map.set(h,u),u}remove(e,t,r,n,a){for(let o=0;o<this.raw.rbNumColliders(e);o+=1)r.unmap(this.raw.rbCollider(e,o));n.forEachJointHandleAttachedToRigidBody(e,o=>n.unmap(o)),a.forEachJointHandleAttachedToRigidBody(e,o=>a.unmap(o)),this.raw.remove(e,t.raw,r.raw,n.raw,a.raw),this.map.delete(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}get(e){return this.map.get(e)}forEach(e){this.map.forEach(e)}forEachActiveRigidBody(e,t){e.forEachActiveRigidBodyHandle(r=>{t(this.get(r))})}getAll(){return this.map.getAll()}}class fl{constructor(e){this.raw=e||new zr}free(){this.raw&&this.raw.free(),this.raw=void 0}get dt(){return this.raw.dt}get erp(){return this.raw.erp}get allowedLinearError(){return this.raw.allowedLinearError}get predictionDistance(){return this.raw.predictionDistance}get maxVelocityIterations(){return this.raw.maxVelocityIterations}get maxVelocityFrictionIterations(){return this.raw.maxVelocityFrictionIterations}get maxStabilizationIterations(){return this.raw.maxStabilizationIterations}get minIslandSize(){return this.raw.minIslandSize}get maxCcdSubsteps(){return this.raw.maxCcdSubsteps}set dt(e){this.raw.dt=e}set erp(e){this.raw.erp=e}set allowedLinearError(e){this.raw.allowedLinearError=e}set predictionDistance(e){this.raw.predictionDistance=e}set maxVelocityIterations(e){this.raw.maxVelocityIterations=e}set maxVelocityFrictionIterations(e){this.raw.maxVelocityFrictionIterations=e}set maxStabilizationIterations(e){this.raw.maxStabilizationIterations=e}set minIslandSize(e){this.raw.minIslandSize=e}set maxCcdSubsteps(e){this.raw.maxCcdSubsteps=e}}var bt;(function(i){i[i.Revolute=0]="Revolute",i[i.Fixed=1]="Fixed",i[i.Prismatic=2]="Prismatic",i[i.Spherical=3]="Spherical"})(bt||(bt={}));var vs;(function(i){i[i.AccelerationBased=0]="AccelerationBased",i[i.ForceBased=1]="ForceBased"})(vs||(vs={}));class Br{constructor(e,t,r){this.rawSet=e,this.bodySet=t,this.handle=r}static newTyped(e,t,r){switch(e.jointType(r)){case bt.Revolute:return new vl(e,t,r);case bt.Prismatic:return new _l(e,t,r);case bt.Fixed:return new gl(e,t,r);case bt.Spherical:return new wl(e,t,r);default:return new Br(e,t,r)}}finalizeDeserialization(e){this.bodySet=e}isValid(){return this.rawSet.contains(this.handle)}body1(){return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle))}body2(){return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle))}type(){return this.rawSet.jointType(this.handle)}frameX1(){return We.fromRaw(this.rawSet.jointFrameX1(this.handle))}frameX2(){return We.fromRaw(this.rawSet.jointFrameX2(this.handle))}anchor1(){return O.fromRaw(this.rawSet.jointAnchor1(this.handle))}anchor2(){return O.fromRaw(this.rawSet.jointAnchor2(this.handle))}setAnchor1(e){const t=O.intoRaw(e);this.rawSet.jointSetAnchor1(this.handle,t),t.free()}setAnchor2(e){const t=O.intoRaw(e);this.rawSet.jointSetAnchor2(this.handle,t),t.free()}setContactsEnabled(e){this.rawSet.jointSetContactsEnabled(this.handle,e)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class ws extends Br{limitsEnabled(){return this.rawSet.jointLimitsEnabled(this.handle,this.rawAxis())}limitsMin(){return this.rawSet.jointLimitsMin(this.handle,this.rawAxis())}limitsMax(){return this.rawSet.jointLimitsMax(this.handle,this.rawAxis())}setLimits(e,t){this.rawSet.jointSetLimits(this.handle,this.rawAxis(),e,t)}configureMotorModel(e){this.rawSet.jointConfigureMotorModel(this.handle,this.rawAxis(),e)}configureMotorVelocity(e,t){this.rawSet.jointConfigureMotorVelocity(this.handle,this.rawAxis(),e,t)}configureMotorPosition(e,t,r){this.rawSet.jointConfigureMotorPosition(this.handle,this.rawAxis(),e,t,r)}configureMotor(e,t,r,n){this.rawSet.jointConfigureMotor(this.handle,this.rawAxis(),e,t,r,n)}}class gl extends Br{}class _l extends ws{rawAxis(){return Fn.X}}class vl extends ws{rawAxis(){return Fn.AngX}}class wl extends Br{}class yi{constructor(){}static fixed(e,t,r,n){let a=new yi;return a.anchor1=e,a.anchor2=r,a.frame1=t,a.frame2=n,a.jointType=bt.Fixed,a}static spherical(e,t){let r=new yi;return r.anchor1=e,r.anchor2=t,r.jointType=bt.Spherical,r}static prismatic(e,t,r){let n=new yi;return n.anchor1=e,n.anchor2=t,n.axis=r,n.jointType=bt.Prismatic,n}static revolute(e,t,r){let n=new yi;return n.anchor1=e,n.anchor2=t,n.axis=r,n.jointType=bt.Revolute,n}intoRaw(){let e=O.intoRaw(this.anchor1),t=O.intoRaw(this.anchor2),r,n,a=!1,o=0,s=0;switch(this.jointType){case bt.Fixed:let l=We.intoRaw(this.frame1),c=We.intoRaw(this.frame2);n=$t.fixed(e,l,t,c),l.free(),c.free();break;case bt.Prismatic:r=O.intoRaw(this.axis),this.limitsEnabled&&(a=!0,o=this.limits[0],s=this.limits[1]),n=$t.prismatic(e,t,r,a,o,s),r.free();break;case bt.Spherical:n=$t.spherical(e,t);break;case bt.Revolute:r=O.intoRaw(this.axis),n=$t.revolute(e,t,r),r.free();break}return e.free(),t.free(),n}}class yl{constructor(e){this.raw=e||new _r,this.map=new $n,e&&e.forEachJointHandle(t=>{this.map.set(t,Br.newTyped(e,null,t))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}finalizeDeserialization(e){this.map.forEach(t=>t.finalizeDeserialization(e))}createJoint(e,t,r,n,a){const o=t.intoRaw(),s=this.raw.createJoint(o,r,n,a);o.free();let l=Br.newTyped(this.raw,e,s);return this.map.set(s,l),l}remove(e,t){this.raw.remove(e,t),this.unmap(e)}forEachJointHandleAttachedToRigidBody(e,t){this.raw.forEachJointAttachedToRigidBody(e,t)}unmap(e){this.map.delete(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}get(e){return this.map.get(e)}forEach(e){this.map.forEach(e)}getAll(){return this.map.getAll()}}class Hr{constructor(e,t){this.rawSet=e,this.handle=t}static newTyped(e,t){switch(e.jointType(t)){case bt.Revolute:return new bl(e,t);case bt.Prismatic:return new Ml(e,t);case bt.Fixed:return new xl(e,t);case bt.Spherical:return new Sl(e,t);default:return new Hr(e,t)}}isValid(){return this.rawSet.contains(this.handle)}setContactsEnabled(e){this.rawSet.jointSetContactsEnabled(this.handle,e)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class ys extends Hr{}class xl extends Hr{}class Ml extends ys{rawAxis(){return Fn.X}}class bl extends ys{rawAxis(){return Fn.AngX}}class Sl extends Hr{}class El{constructor(e){this.raw=e||new wr,this.map=new $n,e&&e.forEachJointHandle(t=>{this.map.set(t,Hr.newTyped(this.raw,t))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}createJoint(e,t,r,n){const a=e.intoRaw(),o=this.raw.createJoint(a,t,r,n);a.free();let s=Hr.newTyped(this.raw,o);return this.map.set(o,s),s}remove(e,t){this.raw.remove(e,t),this.map.delete(e)}unmap(e){this.map.delete(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}get(e){return this.map.get(e)}forEach(e){this.map.forEach(e)}forEachJointHandleAttachedToRigidBody(e,t){this.raw.forEachJointAttachedToRigidBody(e,t)}getAll(){return this.map.getAll()}}var ln;(function(i){i[i.Average=0]="Average",i[i.Min=1]="Min",i[i.Multiply=2]="Multiply",i[i.Max=3]="Max"})(ln||(ln={}));class Tl{constructor(e){this.raw=e||new vi}free(){this.raw&&this.raw.free(),this.raw=void 0}}class Rl{constructor(e){this.raw=e||new vr}free(){this.raw&&this.raw.free(),this.raw=void 0}forEachActiveRigidBodyHandle(e){this.raw.forEachActiveRigidBodyHandle(e)}}class Al{constructor(e){this.raw=e||new Fr}free(){this.raw&&this.raw.free(),this.raw=void 0}}class Cl{constructor(e){this.raw=e||new Tr,this.tempManifold=new Pl(null)}free(){this.raw&&this.raw.free(),this.raw=void 0}contactsWith(e,t){this.raw.contacts_with(e,t)}intersectionsWith(e,t){this.raw.intersections_with(e,t)}contactPair(e,t,r){const n=this.raw.contact_pair(e,t);if(n){const a=n.collider1()!=e;let o;for(o=0;o<n.numContactManifolds();++o)this.tempManifold.raw=n.contactManifold(o),this.tempManifold.raw&&r(this.tempManifold,a),this.tempManifold.free();n.free()}}intersectionPair(e,t){return this.raw.intersection_pair(e,t)}}class Pl{constructor(e){this.raw=e}free(){this.raw&&this.raw.free(),this.raw=void 0}normal(){return O.fromRaw(this.raw.normal())}localNormal1(){return O.fromRaw(this.raw.local_n1())}localNormal2(){return O.fromRaw(this.raw.local_n2())}subshape1(){return this.raw.subshape1()}subshape2(){return this.raw.subshape2()}numContacts(){return this.raw.num_contacts()}localContactPoint1(e){return O.fromRaw(this.raw.contact_local_p1(e))}localContactPoint2(e){return O.fromRaw(this.raw.contact_local_p2(e))}contactDist(e){return this.raw.contact_dist(e)}contactFid1(e){return this.raw.contact_fid1(e)}contactFid2(e){return this.raw.contact_fid2(e)}contactImpulse(e){return this.raw.contact_impulse(e)}contactTangentImpulseX(e){return this.raw.contact_tangent_impulse_x(e)}contactTangentImpulseY(e){return this.raw.contact_tangent_impulse_y(e)}numSolverContacts(){return this.raw.num_solver_contacts()}solverContactPoint(e){return O.fromRaw(this.raw.solver_contact_point(e))}solverContactDist(e){return this.raw.solver_contact_dist(e)}solverContactFriction(e){return this.raw.solver_contact_friction(e)}solverContactRestitution(e){return this.raw.solver_contact_restitution(e)}solverContactTangentVelocity(e){return O.fromRaw(this.raw.solver_contact_tangent_velocity(e))}}class xi{constructor(e,t,r,n,a){this.distance=e,this.point1=t,this.point2=r,this.normal1=n,this.normal2=a}static fromRaw(e){if(!e)return null;const t=new xi(e.distance(),O.fromRaw(e.point1()),O.fromRaw(e.point2()),O.fromRaw(e.normal1()),O.fromRaw(e.normal2()));return e.free(),t}}var Mi;(function(i){i[i.Vertex=0]="Vertex",i[i.Edge=1]="Edge",i[i.Face=2]="Face",i[i.Unknown=3]="Unknown"})(Mi||(Mi={}));class cn{constructor(e,t){this.point=e,this.isInside=t}static fromRaw(e){if(!e)return null;const t=new cn(O.fromRaw(e.point()),e.isInside());return e.free(),t}}class hn{constructor(e,t,r,n,a){this.featureType=Mi.Unknown,this.featureId=void 0,this.collider=e,this.point=t,this.isInside=r,a!==void 0&&(this.featureId=a),n!==void 0&&(this.featureType=n)}static fromRaw(e,t){if(!t)return null;const r=new hn(e.get(t.colliderHandle()),O.fromRaw(t.point()),t.isInside(),t.featureType(),t.featureId());return t.free(),r}}let l0=class{constructor(i,e){this.origin=i,this.dir=e}pointAt(i){return{x:this.origin.x+this.dir.x*i,y:this.origin.y+this.dir.y*i,z:this.origin.z+this.dir.z*i}}};class un{constructor(e,t,r,n){this.featureType=Mi.Unknown,this.featureId=void 0,this.toi=e,this.normal=t,n!==void 0&&(this.featureId=n),r!==void 0&&(this.featureType=r)}static fromRaw(e){if(!e)return null;const t=new un(e.toi(),O.fromRaw(e.normal()),e.featureType(),e.featureId());return e.free(),t}}class dn{constructor(e,t,r,n,a){this.featureType=Mi.Unknown,this.featureId=void 0,this.collider=e,this.toi=t,this.normal=r,a!==void 0&&(this.featureId=a),n!==void 0&&(this.featureType=n)}static fromRaw(e,t){if(!t)return null;const r=new dn(e.get(t.colliderHandle()),t.toi(),O.fromRaw(t.normal()),t.featureType(),t.featureId());return t.free(),r}}class ea{constructor(e,t){this.collider=e,this.toi=t}static fromRaw(e,t){if(!t)return null;const r=new ea(e.get(t.colliderHandle()),t.toi());return t.free(),r}}class bi{constructor(e,t,r,n,a){this.toi=e,this.witness1=t,this.witness2=r,this.normal1=n,this.normal2=a}static fromRaw(e,t){if(!t)return null;const r=new bi(t.toi(),O.fromRaw(t.witness1()),O.fromRaw(t.witness2()),O.fromRaw(t.normal1()),O.fromRaw(t.normal2()));return t.free(),r}}class pn extends bi{constructor(e,t,r,n,a,o){super(t,r,n,a,o),this.collider=e}static fromRaw(e,t){if(!t)return null;const r=new pn(e.get(t.colliderHandle()),t.toi(),O.fromRaw(t.witness1()),O.fromRaw(t.witness2()),O.fromRaw(t.normal1()),O.fromRaw(t.normal2()));return t.free(),r}}class St{static fromRaw(e,t){const r=e.coShapeType(t);let n,a,o,s,l,c,h;switch(r){case Ze.Ball:return new xs(e.coRadius(t));case Ze.Cuboid:return n=e.coHalfExtents(t),new Ms(n.x,n.y,n.z);case Ze.RoundCuboid:return n=e.coHalfExtents(t),a=e.coRoundRadius(t),new bs(n.x,n.y,n.z,a);case Ze.Capsule:return l=e.coHalfHeight(t),c=e.coRadius(t),new Ss(l,c);case Ze.Segment:return o=e.coVertices(t),new Es(O.new(o[0],o[1],o[2]),O.new(o[3],o[4],o[5]));case Ze.Polyline:return o=e.coVertices(t),s=e.coIndices(t),new As(o,s);case Ze.Triangle:return o=e.coVertices(t),new Ts(O.new(o[0],o[1],o[2]),O.new(o[3],o[4],o[5]),O.new(o[6],o[7],o[8]));case Ze.RoundTriangle:return o=e.coVertices(t),a=e.coRoundRadius(t),new Rs(O.new(o[0],o[1],o[2]),O.new(o[3],o[4],o[5]),O.new(o[6],o[7],o[8]),a);case Ze.HalfSpace:return h=O.fromRaw(e.coHalfspaceNormal(t)),new Ll(h);case Ze.TriMesh:return o=e.coVertices(t),s=e.coIndices(t),new Cs(o,s);case Ze.HeightField:const u=e.coHeightfieldScale(t),d=e.coHeightfieldHeights(t),m=e.coHeightfieldNRows(t),_=e.coHeightfieldNCols(t);return new Ps(m,_,d,u);case Ze.ConvexPolyhedron:return o=e.coVertices(t),s=e.coIndices(t),new ta(o,s);case Ze.RoundConvexPolyhedron:return o=e.coVertices(t),s=e.coIndices(t),a=e.coRoundRadius(t),new ra(o,s,a);case Ze.Cylinder:return l=e.coHalfHeight(t),c=e.coRadius(t),new Ls(l,c);case Ze.RoundCylinder:return l=e.coHalfHeight(t),c=e.coRadius(t),a=e.coRoundRadius(t),new Is(l,c,a);case Ze.Cone:return l=e.coHalfHeight(t),c=e.coRadius(t),new Ds(l,c);case Ze.RoundCone:return l=e.coHalfHeight(t),c=e.coRadius(t),a=e.coRoundRadius(t),new Us(l,c,a);default:throw new Error("unknown shape type: "+r)}}castShape(e,t,r,n,a,o,s,l,c){let h=O.intoRaw(e),u=We.intoRaw(t),d=O.intoRaw(r),m=O.intoRaw(a),_=We.intoRaw(o),v=O.intoRaw(s),f=this.intoRaw(),p=n.intoRaw(),S=bi.fromRaw(null,f.castShape(h,u,d,p,m,_,v,l,c));return h.free(),u.free(),d.free(),m.free(),_.free(),v.free(),f.free(),p.free(),S}intersectsShape(e,t,r,n,a){let o=O.intoRaw(e),s=We.intoRaw(t),l=O.intoRaw(n),c=We.intoRaw(a),h=this.intoRaw(),u=r.intoRaw(),d=h.intersectsShape(o,s,u,l,c);return o.free(),s.free(),l.free(),c.free(),h.free(),u.free(),d}contactShape(e,t,r,n,a,o){let s=O.intoRaw(e),l=We.intoRaw(t),c=O.intoRaw(n),h=We.intoRaw(a),u=this.intoRaw(),d=r.intoRaw(),m=xi.fromRaw(u.contactShape(s,l,d,c,h,o));return s.free(),l.free(),c.free(),h.free(),u.free(),d.free(),m}containsPoint(e,t,r){let n=O.intoRaw(e),a=We.intoRaw(t),o=O.intoRaw(r),s=this.intoRaw(),l=s.containsPoint(n,a,o);return n.free(),a.free(),o.free(),s.free(),l}projectPoint(e,t,r,n){let a=O.intoRaw(e),o=We.intoRaw(t),s=O.intoRaw(r),l=this.intoRaw(),c=cn.fromRaw(l.projectPoint(a,o,s,n));return a.free(),o.free(),s.free(),l.free(),c}intersectsRay(e,t,r,n){let a=O.intoRaw(t),o=We.intoRaw(r),s=O.intoRaw(e.origin),l=O.intoRaw(e.dir),c=this.intoRaw(),h=c.intersectsRay(a,o,s,l,n);return a.free(),o.free(),s.free(),l.free(),c.free(),h}castRay(e,t,r,n,a){let o=O.intoRaw(t),s=We.intoRaw(r),l=O.intoRaw(e.origin),c=O.intoRaw(e.dir),h=this.intoRaw(),u=h.castRay(o,s,l,c,n,a);return o.free(),s.free(),l.free(),c.free(),h.free(),u}castRayAndGetNormal(e,t,r,n,a){let o=O.intoRaw(t),s=We.intoRaw(r),l=O.intoRaw(e.origin),c=O.intoRaw(e.dir),h=this.intoRaw(),u=un.fromRaw(h.castRayAndGetNormal(o,s,l,c,n,a));return o.free(),s.free(),l.free(),c.free(),h.free(),u}}var Ze;(function(i){i[i.Ball=0]="Ball",i[i.Cuboid=1]="Cuboid",i[i.Capsule=2]="Capsule",i[i.Segment=3]="Segment",i[i.Polyline=4]="Polyline",i[i.Triangle=5]="Triangle",i[i.TriMesh=6]="TriMesh",i[i.HeightField=7]="HeightField",i[i.ConvexPolyhedron=9]="ConvexPolyhedron",i[i.Cylinder=10]="Cylinder",i[i.Cone=11]="Cone",i[i.RoundCuboid=12]="RoundCuboid",i[i.RoundTriangle=13]="RoundTriangle",i[i.RoundCylinder=14]="RoundCylinder",i[i.RoundCone=15]="RoundCone",i[i.RoundConvexPolyhedron=16]="RoundConvexPolyhedron",i[i.HalfSpace=17]="HalfSpace"})(Ze||(Ze={}));class xs extends St{constructor(e){super(),this.type=Ze.Ball,this.radius=e}intoRaw(){return Le.ball(this.radius)}}class Ll extends St{constructor(e){super(),this.type=Ze.HalfSpace,this.normal=e}intoRaw(){let e=O.intoRaw(this.normal),t=Le.halfspace(e);return e.free(),t}}class Ms extends St{constructor(e,t,r){super(),this.type=Ze.Cuboid,this.halfExtents=O.new(e,t,r)}intoRaw(){return Le.cuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z)}}class bs extends St{constructor(e,t,r,n){super(),this.type=Ze.RoundCuboid,this.halfExtents=O.new(e,t,r),this.borderRadius=n}intoRaw(){return Le.roundCuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z,this.borderRadius)}}class Ss extends St{constructor(e,t){super(),this.type=Ze.Capsule,this.halfHeight=e,this.radius=t}intoRaw(){return Le.capsule(this.halfHeight,this.radius)}}class Es extends St{constructor(e,t){super(),this.type=Ze.Segment,this.a=e,this.b=t}intoRaw(){let e=O.intoRaw(this.a),t=O.intoRaw(this.b),r=Le.segment(e,t);return e.free(),t.free(),r}}let Ts=class extends St{constructor(i,e,t){super(),this.type=Ze.Triangle,this.a=i,this.b=e,this.c=t}intoRaw(){let i=O.intoRaw(this.a),e=O.intoRaw(this.b),t=O.intoRaw(this.c),r=Le.triangle(i,e,t);return i.free(),e.free(),t.free(),r}};class Rs extends St{constructor(e,t,r,n){super(),this.type=Ze.RoundTriangle,this.a=e,this.b=t,this.c=r,this.borderRadius=n}intoRaw(){let e=O.intoRaw(this.a),t=O.intoRaw(this.b),r=O.intoRaw(this.c),n=Le.roundTriangle(e,t,r,this.borderRadius);return e.free(),t.free(),r.free(),n}}class As extends St{constructor(e,t){super(),this.type=Ze.Polyline,this.vertices=e,this.indices=t??new Uint32Array(0)}intoRaw(){return Le.polyline(this.vertices,this.indices)}}class Cs extends St{constructor(e,t){super(),this.type=Ze.TriMesh,this.vertices=e,this.indices=t}intoRaw(){return Le.trimesh(this.vertices,this.indices)}}class ta extends St{constructor(e,t){super(),this.type=Ze.ConvexPolyhedron,this.vertices=e,this.indices=t}intoRaw(){return this.indices?Le.convexMesh(this.vertices,this.indices):Le.convexHull(this.vertices)}}class ra extends St{constructor(e,t,r){super(),this.type=Ze.RoundConvexPolyhedron,this.vertices=e,this.indices=t,this.borderRadius=r}intoRaw(){return this.indices?Le.roundConvexMesh(this.vertices,this.indices,this.borderRadius):Le.roundConvexHull(this.vertices,this.borderRadius)}}class Ps extends St{constructor(e,t,r,n){super(),this.type=Ze.HeightField,this.nrows=e,this.ncols=t,this.heights=r,this.scale=n}intoRaw(){let e=O.intoRaw(this.scale),t=Le.heightfield(this.nrows,this.ncols,this.heights,e);return e.free(),t}}class Ls extends St{constructor(e,t){super(),this.type=Ze.Cylinder,this.halfHeight=e,this.radius=t}intoRaw(){return Le.cylinder(this.halfHeight,this.radius)}}class Is extends St{constructor(e,t,r){super(),this.type=Ze.RoundCylinder,this.borderRadius=r,this.halfHeight=e,this.radius=t}intoRaw(){return Le.roundCylinder(this.halfHeight,this.radius,this.borderRadius)}}class Ds extends St{constructor(e,t){super(),this.type=Ze.Cone,this.halfHeight=e,this.radius=t}intoRaw(){return Le.cone(this.halfHeight,this.radius)}}class Us extends St{constructor(e,t,r){super(),this.type=Ze.RoundCone,this.halfHeight=e,this.radius=t,this.borderRadius=r}intoRaw(){return Le.roundCone(this.halfHeight,this.radius,this.borderRadius)}}var ia;(function(i){i[i.DYNAMIC_DYNAMIC=1]="DYNAMIC_DYNAMIC",i[i.DYNAMIC_KINEMATIC=12]="DYNAMIC_KINEMATIC",i[i.DYNAMIC_FIXED=2]="DYNAMIC_FIXED",i[i.KINEMATIC_KINEMATIC=52224]="KINEMATIC_KINEMATIC",i[i.KINEMATIC_FIXED=8704]="KINEMATIC_FIXED",i[i.FIXED_FIXED=32]="FIXED_FIXED",i[i.DEFAULT=15]="DEFAULT",i[i.ALL=60943]="ALL"})(ia||(ia={}));class Ns{constructor(e,t,r,n){this.colliderSet=e,this.handle=t,this._parent=r,this._shape=n}finalizeDeserialization(e){this.handle!=null&&(this._parent=e.get(this.colliderSet.raw.coParent(this.handle)))}ensureShapeIsCached(){this._shape||(this._shape=St.fromRaw(this.colliderSet.raw,this.handle))}get shape(){return this.ensureShapeIsCached(),this._shape}isValid(){return this.colliderSet.raw.contains(this.handle)}translation(){return O.fromRaw(this.colliderSet.raw.coTranslation(this.handle))}rotation(){return We.fromRaw(this.colliderSet.raw.coRotation(this.handle))}isSensor(){return this.colliderSet.raw.coIsSensor(this.handle)}setSensor(e){this.colliderSet.raw.coSetSensor(this.handle,e)}setShape(e){let t=e.intoRaw();this.colliderSet.raw.coSetShape(this.handle,t),t.free(),this._shape=e}setEnabled(e){this.colliderSet.raw.coSetEnabled(this.handle,e)}isEnabled(){return this.colliderSet.raw.coIsEnabled(this.handle)}setRestitution(e){this.colliderSet.raw.coSetRestitution(this.handle,e)}setFriction(e){this.colliderSet.raw.coSetFriction(this.handle,e)}frictionCombineRule(){return this.colliderSet.raw.coFrictionCombineRule(this.handle)}setFrictionCombineRule(e){this.colliderSet.raw.coSetFrictionCombineRule(this.handle,e)}restitutionCombineRule(){return this.colliderSet.raw.coRestitutionCombineRule(this.handle)}setRestitutionCombineRule(e){this.colliderSet.raw.coSetRestitutionCombineRule(this.handle,e)}setCollisionGroups(e){this.colliderSet.raw.coSetCollisionGroups(this.handle,e)}setSolverGroups(e){this.colliderSet.raw.coSetSolverGroups(this.handle,e)}activeHooks(){return this.colliderSet.raw.coActiveHooks(this.handle)}setActiveHooks(e){this.colliderSet.raw.coSetActiveHooks(this.handle,e)}activeEvents(){return this.colliderSet.raw.coActiveEvents(this.handle)}setActiveEvents(e){this.colliderSet.raw.coSetActiveEvents(this.handle,e)}activeCollisionTypes(){return this.colliderSet.raw.coActiveCollisionTypes(this.handle)}setContactForceEventThreshold(e){return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle,e)}contactForceEventThreshold(){return this.colliderSet.raw.coContactForceEventThreshold(this.handle)}setActiveCollisionTypes(e){this.colliderSet.raw.coSetActiveCollisionTypes(this.handle,e)}setDensity(e){this.colliderSet.raw.coSetDensity(this.handle,e)}setMass(e){this.colliderSet.raw.coSetMass(this.handle,e)}setMassProperties(e,t,r,n){let a=O.intoRaw(t),o=O.intoRaw(r),s=We.intoRaw(n);this.colliderSet.raw.coSetMassProperties(this.handle,e,a,o,s),a.free(),o.free(),s.free()}setTranslation(e){this.colliderSet.raw.coSetTranslation(this.handle,e.x,e.y,e.z)}setTranslationWrtParent(e){this.colliderSet.raw.coSetTranslationWrtParent(this.handle,e.x,e.y,e.z)}setRotation(e){this.colliderSet.raw.coSetRotation(this.handle,e.x,e.y,e.z,e.w)}setRotationWrtParent(e){this.colliderSet.raw.coSetRotationWrtParent(this.handle,e.x,e.y,e.z,e.w)}shapeType(){return this.colliderSet.raw.coShapeType(this.handle)}halfExtents(){return O.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle))}setHalfExtents(e){const t=O.intoRaw(e);this.colliderSet.raw.coSetHalfExtents(this.handle,t)}radius(){return this.colliderSet.raw.coRadius(this.handle)}setRadius(e){this.colliderSet.raw.coSetRadius(this.handle,e)}roundRadius(){return this.colliderSet.raw.coRoundRadius(this.handle)}setRoundRadius(e){this.colliderSet.raw.coSetRoundRadius(this.handle,e)}halfHeight(){return this.colliderSet.raw.coHalfHeight(this.handle)}setHalfHeight(e){this.colliderSet.raw.coSetHalfHeight(this.handle,e)}vertices(){return this.colliderSet.raw.coVertices(this.handle)}indices(){return this.colliderSet.raw.coIndices(this.handle)}heightfieldHeights(){return this.colliderSet.raw.coHeightfieldHeights(this.handle)}heightfieldScale(){let e=this.colliderSet.raw.coHeightfieldScale(this.handle);return O.fromRaw(e)}heightfieldNRows(){return this.colliderSet.raw.coHeightfieldNRows(this.handle)}heightfieldNCols(){return this.colliderSet.raw.coHeightfieldNCols(this.handle)}parent(){return this._parent}friction(){return this.colliderSet.raw.coFriction(this.handle)}restitution(){return this.colliderSet.raw.coRestitution(this.handle)}density(){return this.colliderSet.raw.coDensity(this.handle)}mass(){return this.colliderSet.raw.coMass(this.handle)}volume(){return this.colliderSet.raw.coVolume(this.handle)}collisionGroups(){return this.colliderSet.raw.coCollisionGroups(this.handle)}solverGroups(){return this.colliderSet.raw.coSolverGroups(this.handle)}containsPoint(e){let t=O.intoRaw(e),r=this.colliderSet.raw.coContainsPoint(this.handle,t);return t.free(),r}projectPoint(e,t){let r=O.intoRaw(e),n=cn.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle,r,t));return r.free(),n}intersectsRay(e,t){let r=O.intoRaw(e.origin),n=O.intoRaw(e.dir),a=this.colliderSet.raw.coIntersectsRay(this.handle,r,n,t);return r.free(),n.free(),a}castShape(e,t,r,n,a,o,s){let l=O.intoRaw(e),c=O.intoRaw(r),h=We.intoRaw(n),u=O.intoRaw(a),d=t.intoRaw(),m=bi.fromRaw(this.colliderSet,this.colliderSet.raw.coCastShape(this.handle,l,d,c,h,u,o,s));return l.free(),c.free(),h.free(),u.free(),d.free(),m}castCollider(e,t,r,n,a){let o=O.intoRaw(e),s=O.intoRaw(r),l=pn.fromRaw(this.colliderSet,this.colliderSet.raw.coCastCollider(this.handle,o,t.handle,s,n,a));return o.free(),s.free(),l}intersectsShape(e,t,r){let n=O.intoRaw(t),a=We.intoRaw(r),o=e.intoRaw(),s=this.colliderSet.raw.coIntersectsShape(this.handle,o,n,a);return n.free(),a.free(),o.free(),s}contactShape(e,t,r,n){let a=O.intoRaw(t),o=We.intoRaw(r),s=e.intoRaw(),l=xi.fromRaw(this.colliderSet.raw.coContactShape(this.handle,s,a,o,n));return a.free(),o.free(),s.free(),l}contactCollider(e,t){return xi.fromRaw(this.colliderSet.raw.coContactCollider(this.handle,e.handle,t))}castRay(e,t,r){let n=O.intoRaw(e.origin),a=O.intoRaw(e.dir),o=this.colliderSet.raw.coCastRay(this.handle,n,a,t,r);return n.free(),a.free(),o}castRayAndGetNormal(e,t,r){let n=O.intoRaw(e.origin),a=O.intoRaw(e.dir),o=un.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle,n,a,t,r));return n.free(),a.free(),o}}var ri;(function(i){i[i.Density=0]="Density",i[i.Mass=1]="Mass",i[i.MassProps=2]="MassProps"})(ri||(ri={}));class yt{constructor(e){this.enabled=!0,this.shape=e,this.massPropsMode=ri.Density,this.density=1,this.friction=.5,this.restitution=0,this.rotation=We.identity(),this.translation=O.zeros(),this.isSensor=!1,this.collisionGroups=4294967295,this.solverGroups=4294967295,this.frictionCombineRule=ln.Average,this.restitutionCombineRule=ln.Average,this.activeCollisionTypes=ia.DEFAULT,this.activeEvents=0,this.activeHooks=0,this.mass=0,this.centerOfMass=O.zeros(),this.contactForceEventThreshold=0,this.principalAngularInertia=O.zeros(),this.angularInertiaLocalFrame=We.identity()}static ball(e){const t=new xs(e);return new yt(t)}static capsule(e,t){const r=new Ss(e,t);return new yt(r)}static segment(e,t){const r=new Es(e,t);return new yt(r)}static triangle(e,t,r){const n=new Ts(e,t,r);return new yt(n)}static roundTriangle(e,t,r,n){const a=new Rs(e,t,r,n);return new yt(a)}static polyline(e,t){const r=new As(e,t);return new yt(r)}static trimesh(e,t){const r=new Cs(e,t);return new yt(r)}static cuboid(e,t,r){const n=new Ms(e,t,r);return new yt(n)}static roundCuboid(e,t,r,n){const a=new bs(e,t,r,n);return new yt(a)}static heightfield(e,t,r,n){const a=new Ps(e,t,r,n);return new yt(a)}static cylinder(e,t){const r=new Ls(e,t);return new yt(r)}static roundCylinder(e,t,r){const n=new Is(e,t,r);return new yt(n)}static cone(e,t){const r=new Ds(e,t);return new yt(r)}static roundCone(e,t,r){const n=new Us(e,t,r);return new yt(n)}static convexHull(e){const t=new ta(e,null);return new yt(t)}static convexMesh(e,t){const r=new ta(e,t);return new yt(r)}static roundConvexHull(e,t){const r=new ra(e,null,t);return new yt(r)}static roundConvexMesh(e,t,r){const n=new ra(e,t,r);return new yt(n)}setTranslation(e,t,r){if(typeof e!="number"||typeof t!="number"||typeof r!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:e,y:t,z:r},this}setRotation(e){return We.copy(this.rotation,e),this}setSensor(e){return this.isSensor=e,this}setEnabled(e){return this.enabled=e,this}setDensity(e){return this.massPropsMode=ri.Density,this.density=e,this}setMass(e){return this.massPropsMode=ri.Mass,this.mass=e,this}setMassProperties(e,t,r,n){return this.massPropsMode=ri.MassProps,this.mass=e,O.copy(this.centerOfMass,t),O.copy(this.principalAngularInertia,r),We.copy(this.angularInertiaLocalFrame,n),this}setRestitution(e){return this.restitution=e,this}setFriction(e){return this.friction=e,this}setFrictionCombineRule(e){return this.frictionCombineRule=e,this}setRestitutionCombineRule(e){return this.restitutionCombineRule=e,this}setCollisionGroups(e){return this.collisionGroups=e,this}setSolverGroups(e){return this.solverGroups=e,this}setActiveHooks(e){return this.activeHooks=e,this}setActiveEvents(e){return this.activeEvents=e,this}setActiveCollisionTypes(e){return this.activeCollisionTypes=e,this}setContactForceEventThreshold(e){return this.contactForceEventThreshold=e,this}}class Il{constructor(e){this.raw=e||new mt,this.map=new $n,e&&e.forEachColliderHandle(t=>{this.map.set(t,new Ns(this,t,null))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}castClosure(e){return t=>{if(e)return e(this.get(t))}}finalizeDeserialization(e){this.map.forEach(t=>t.finalizeDeserialization(e))}createCollider(e,t,r){let n=r!=null&&r!=null;if(n&&isNaN(r))throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");let a=t.shape.intoRaw(),o=O.intoRaw(t.translation),s=We.intoRaw(t.rotation),l=O.intoRaw(t.centerOfMass),c=O.intoRaw(t.principalAngularInertia),h=We.intoRaw(t.angularInertiaLocalFrame),u=this.raw.createCollider(t.enabled,a,o,s,t.massPropsMode,t.mass,l,c,h,t.density,t.friction,t.restitution,t.frictionCombineRule,t.restitutionCombineRule,t.isSensor,t.collisionGroups,t.solverGroups,t.activeCollisionTypes,t.activeHooks,t.activeEvents,t.contactForceEventThreshold,n,n?r:0,e.raw);a.free(),o.free(),s.free(),l.free(),c.free(),h.free();let d=n?e.get(r):null,m=new Ns(this,u,d,t.shape);return this.map.set(u,m),m}remove(e,t,r,n){this.raw.remove(e,t.raw,r.raw,n),this.unmap(e)}unmap(e){this.map.delete(e)}get(e){return this.map.get(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}forEach(e){this.map.forEach(e)}getAll(){return this.map.getAll()}}class Dl{constructor(e){this.raw=e||new Hn}free(){this.raw&&this.raw.free(),this.raw=void 0}step(e,t,r,n,a,o,s,l,c,h,u,d){let m=O.intoRaw(e);u?this.raw.stepWithEvents(m,t.raw,r.raw,n.raw,a.raw,o.raw,s.raw,l.raw,c.raw,h.raw,u.raw,d,d?d.filterContactPair:null,d?d.filterIntersectionPair:null):this.raw.step(m,t.raw,r.raw,n.raw,a.raw,o.raw,s.raw,l.raw,c.raw,h.raw),m.free()}}var Os;(function(i){i[i.EXCLUDE_FIXED=1]="EXCLUDE_FIXED",i[i.EXCLUDE_KINEMATIC=2]="EXCLUDE_KINEMATIC",i[i.EXCLUDE_DYNAMIC=4]="EXCLUDE_DYNAMIC",i[i.EXCLUDE_SENSORS=8]="EXCLUDE_SENSORS",i[i.EXCLUDE_SOLIDS=16]="EXCLUDE_SOLIDS",i[i.ONLY_DYNAMIC=3]="ONLY_DYNAMIC",i[i.ONLY_KINEMATIC=5]="ONLY_KINEMATIC",i[i.ONLY_FIXED=6]="ONLY_FIXED"})(Os||(Os={}));class Ul{constructor(e){this.raw=e||new an}free(){this.raw&&this.raw.free(),this.raw=void 0}update(e,t){this.raw.update(e.raw,t.raw)}castRay(e,t,r,n,a,o,s,l,c,h){let u=O.intoRaw(r.origin),d=O.intoRaw(r.dir),m=ea.fromRaw(t,this.raw.castRay(e.raw,t.raw,u,d,n,a,o,s,l,c,h));return u.free(),d.free(),m}castRayAndGetNormal(e,t,r,n,a,o,s,l,c,h){let u=O.intoRaw(r.origin),d=O.intoRaw(r.dir),m=dn.fromRaw(t,this.raw.castRayAndGetNormal(e.raw,t.raw,u,d,n,a,o,s,l,c,h));return u.free(),d.free(),m}intersectionsWithRay(e,t,r,n,a,o,s,l,c,h,u){let d=O.intoRaw(r.origin),m=O.intoRaw(r.dir),_=v=>o(dn.fromRaw(t,v));this.raw.intersectionsWithRay(e.raw,t.raw,d,m,n,a,_,s,l,c,h,u),d.free(),m.free()}intersectionWithShape(e,t,r,n,a,o,s,l,c,h){let u=O.intoRaw(r),d=We.intoRaw(n),m=a.intoRaw(),_=this.raw.intersectionWithShape(e.raw,t.raw,u,d,m,o,s,l,c,h);return u.free(),d.free(),m.free(),_}projectPoint(e,t,r,n,a,o,s,l,c){let h=O.intoRaw(r),u=hn.fromRaw(t,this.raw.projectPoint(e.raw,t.raw,h,n,a,o,s,l,c));return h.free(),u}projectPointAndGetFeature(e,t,r,n,a,o,s,l){let c=O.intoRaw(r),h=hn.fromRaw(t,this.raw.projectPointAndGetFeature(e.raw,t.raw,c,n,a,o,s,l));return c.free(),h}intersectionsWithPoint(e,t,r,n,a,o,s,l,c){let h=O.intoRaw(r);this.raw.intersectionsWithPoint(e.raw,t.raw,h,n,a,o,s,l,c),h.free()}castShape(e,t,r,n,a,o,s,l,c,h,u,d,m){let _=O.intoRaw(r),v=We.intoRaw(n),f=O.intoRaw(a),p=o.intoRaw(),S=pn.fromRaw(t,this.raw.castShape(e.raw,t.raw,_,v,f,p,s,l,c,h,u,d,m));return _.free(),v.free(),f.free(),p.free(),S}intersectionsWithShape(e,t,r,n,a,o,s,l,c,h,u){let d=O.intoRaw(r),m=We.intoRaw(n),_=a.intoRaw();this.raw.intersectionsWithShape(e.raw,t.raw,d,m,_,o,s,l,c,h,u),d.free(),m.free(),_.free()}collidersWithAabbIntersectingAabb(e,t,r){let n=O.intoRaw(e),a=O.intoRaw(t);this.raw.collidersWithAabbIntersectingAabb(n,a,r),n.free(),a.free()}}class Fs{constructor(e){this.raw=e||new jn}free(){this.raw&&this.raw.free(),this.raw=void 0}serializeAll(e,t,r,n,a,o,s,l,c){let h=O.intoRaw(e);const u=this.raw.serializeAll(h,t.raw,r.raw,n.raw,a.raw,o.raw,s.raw,l.raw,c.raw);return h.free(),u}deserializeAll(e){return na.fromRaw(this.raw.deserializeAll(e))}}class Nl{constructor(e,t){this.vertices=e,this.colors=t}}class Ol{constructor(e){this.raw=e||new zn}free(){this.raw&&this.raw.free(),this.raw=void 0,this.vertices=void 0,this.colors=void 0}render(e,t,r,n,a){this.raw.render(e.raw,t.raw,r.raw,n.raw,a.raw),this.vertices=this.raw.vertices(),this.colors=this.raw.colors()}}class Fl{}class zl{constructor(e,t,r,n,a){this.params=t,this.bodies=r,this.colliders=n,this.queries=a,this.raw=new Bn(e),this.rawCharacterCollision=new rn,this._applyImpulsesToDynamicBodies=!1,this._characterMass=null}free(){this.raw&&(this.raw.free(),this.rawCharacterCollision.free()),this.raw=void 0,this.rawCharacterCollision=void 0}up(){return this.raw.up()}setUp(e){let t=O.intoRaw(e);return this.raw.setUp(t)}applyImpulsesToDynamicBodies(){return this._applyImpulsesToDynamicBodies}setApplyImpulsesToDynamicBodies(e){this._applyImpulsesToDynamicBodies=e}characterMass(){return this._characterMass}setCharacterMass(e){this._characterMass=e}offset(){return this.raw.offset()}setOffset(e){this.raw.setOffset(e)}slideEnabled(){return this.raw.slideEnabled()}setSlideEnabled(e){this.raw.setSlideEnabled(e)}autostepMaxHeight(){return this.raw.autostepMaxHeight()}autostepMinWidth(){return this.raw.autostepMinWidth()}autostepIncludesDynamicBodies(){return this.raw.autostepIncludesDynamicBodies()}autostepEnabled(){return this.raw.autostepEnabled()}enableAutostep(e,t,r){this.raw.enableAutostep(e,t,r)}disableAutostep(){return this.raw.disableAutostep()}maxSlopeClimbAngle(){return this.raw.maxSlopeClimbAngle()}setMaxSlopeClimbAngle(e){this.raw.setMaxSlopeClimbAngle(e)}minSlopeSlideAngle(){return this.raw.minSlopeSlideAngle()}setMinSlopeSlideAngle(e){this.raw.setMinSlopeSlideAngle(e)}snapToGroundDistance(){return this.raw.snapToGroundDistance()}enableSnapToGround(e){this.raw.enableSnapToGround(e)}disableSnapToGround(){this.raw.disableSnapToGround()}snapToGroundEnabled(){return this.raw.snapToGroundEnabled()}computeColliderMovement(e,t,r,n,a){let o=O.intoRaw(t);this.raw.computeColliderMovement(this.params.dt,this.bodies.raw,this.colliders.raw,this.queries.raw,e.handle,o,this._applyImpulsesToDynamicBodies,this._characterMass,r,n,this.colliders.castClosure(a)),o.free()}computedMovement(){return O.fromRaw(this.raw.computedMovement())}computedGrounded(){return this.raw.computedGrounded()}numComputedCollisions(){return this.raw.numComputedCollisions()}computedCollision(e,t){if(this.raw.computedCollision(e,this.rawCharacterCollision)){let r=this.rawCharacterCollision;return t=t??new Fl,t.translationApplied=O.fromRaw(r.translationApplied()),t.translationRemaining=O.fromRaw(r.translationRemaining()),t.toi=r.toi(),t.witness1=O.fromRaw(r.worldWitness1()),t.witness2=O.fromRaw(r.worldWitness2()),t.normal1=O.fromRaw(r.worldNormal1()),t.normal2=O.fromRaw(r.worldNormal2()),t.collider=this.colliders.get(r.handle()),t}else return null}}class na{constructor(e,t,r,n,a,o,s,l,c,h,u,d,m,_){this.gravity=e,this.integrationParameters=new fl(t),this.islands=new Rl(r),this.broadPhase=new Al(n),this.narrowPhase=new Cl(a),this.bodies=new ml(o),this.colliders=new Il(s),this.impulseJoints=new yl(l),this.multibodyJoints=new El(c),this.ccdSolver=new Tl(h),this.queryPipeline=new Ul(u),this.physicsPipeline=new Dl(d),this.serializationPipeline=new Fs(m),this.debugRenderPipeline=new Ol(_),this.characterControllers=new Set,this.impulseJoints.finalizeDeserialization(this.bodies),this.bodies.finalizeDeserialization(this.colliders),this.colliders.finalizeDeserialization(this.bodies)}free(){this.integrationParameters.free(),this.islands.free(),this.broadPhase.free(),this.narrowPhase.free(),this.bodies.free(),this.colliders.free(),this.impulseJoints.free(),this.multibodyJoints.free(),this.ccdSolver.free(),this.queryPipeline.free(),this.physicsPipeline.free(),this.serializationPipeline.free(),this.debugRenderPipeline.free(),this.characterControllers.forEach(e=>e.free()),this.integrationParameters=void 0,this.islands=void 0,this.broadPhase=void 0,this.narrowPhase=void 0,this.bodies=void 0,this.colliders=void 0,this.ccdSolver=void 0,this.impulseJoints=void 0,this.multibodyJoints=void 0,this.queryPipeline=void 0,this.physicsPipeline=void 0,this.serializationPipeline=void 0,this.debugRenderPipeline=void 0,this.characterControllers=void 0}static fromRaw(e){return e?new na(O.fromRaw(e.takeGravity()),e.takeIntegrationParameters(),e.takeIslandManager(),e.takeBroadPhase(),e.takeNarrowPhase(),e.takeBodies(),e.takeColliders(),e.takeImpulseJoints(),e.takeMultibodyJoints()):null}takeSnapshot(){return this.serializationPipeline.serializeAll(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints)}static restoreSnapshot(e){return new Fs().deserializeAll(e)}debugRender(){return this.debugRenderPipeline.render(this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.narrowPhase),new Nl(this.debugRenderPipeline.vertices,this.debugRenderPipeline.colors)}step(e,t){this.physicsPipeline.step(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.ccdSolver,e,t),this.queryPipeline.update(this.bodies,this.colliders)}propagateModifiedBodyPositionsToColliders(){this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw)}updateSceneQueries(){this.propagateModifiedBodyPositionsToColliders(),this.queryPipeline.update(this.bodies,this.colliders)}get timestep(){return this.integrationParameters.dt}set timestep(e){this.integrationParameters.dt=e}get maxVelocityIterations(){return this.integrationParameters.maxVelocityIterations}set maxVelocityIterations(e){this.integrationParameters.maxVelocityIterations=e}get maxVelocityFrictionIterations(){return this.integrationParameters.maxVelocityFrictionIterations}set maxVelocityFrictionIterations(e){this.integrationParameters.maxVelocityFrictionIterations=e}get maxStabilizationIterations(){return this.integrationParameters.maxStabilizationIterations}set maxStabilizationIterations(e){this.integrationParameters.maxStabilizationIterations=e}createRigidBody(e){return this.bodies.createRigidBody(this.colliders,e)}createCharacterController(e){let t=new zl(e,this.integrationParameters,this.bodies,this.colliders,this.queryPipeline);return this.characterControllers.add(t),t}removeCharacterController(e){this.characterControllers.delete(e),e.free()}createCollider(e,t){let r=t?t.handle:void 0;return this.colliders.createCollider(this.bodies,e,r)}createImpulseJoint(e,t,r,n){return this.impulseJoints.createJoint(this.bodies,e,t.handle,r.handle,n)}createMultibodyJoint(e,t,r,n){return this.multibodyJoints.createJoint(e,t.handle,r.handle,n)}getRigidBody(e){return this.bodies.get(e)}getCollider(e){return this.colliders.get(e)}getImpulseJoint(e){return this.impulseJoints.get(e)}getMultibodyJoint(e){return this.multibodyJoints.get(e)}removeRigidBody(e){this.bodies&&this.bodies.remove(e.handle,this.islands,this.colliders,this.impulseJoints,this.multibodyJoints)}removeCollider(e,t){this.colliders&&this.colliders.remove(e.handle,this.islands,this.bodies,t)}removeImpulseJoint(e,t){this.impulseJoints&&this.impulseJoints.remove(e.handle,t)}removeMultibodyJoint(e,t){this.impulseJoints&&this.multibodyJoints.remove(e.handle,t)}forEachCollider(e){this.colliders.forEach(e)}forEachRigidBody(e){this.bodies.forEach(e)}forEachActiveRigidBody(e){this.bodies.forEachActiveRigidBody(this.islands,e)}castRay(e,t,r,n,a,o,s,l){return this.queryPipeline.castRay(this.bodies,this.colliders,e,t,r,n,a,o?o.handle:null,s?s.handle:null,this.colliders.castClosure(l))}castRayAndGetNormal(e,t,r,n,a,o,s,l){return this.queryPipeline.castRayAndGetNormal(this.bodies,this.colliders,e,t,r,n,a,o?o.handle:null,s?s.handle:null,this.colliders.castClosure(l))}intersectionsWithRay(e,t,r,n,a,o,s,l,c){this.queryPipeline.intersectionsWithRay(this.bodies,this.colliders,e,t,r,n,a,o,s?s.handle:null,l?l.handle:null,this.colliders.castClosure(c))}intersectionWithShape(e,t,r,n,a,o,s,l){let c=this.queryPipeline.intersectionWithShape(this.bodies,this.colliders,e,t,r,n,a,o?o.handle:null,s?s.handle:null,this.colliders.castClosure(l));return c!=null?this.colliders.get(c):null}projectPoint(e,t,r,n,a,o,s){return this.queryPipeline.projectPoint(this.bodies,this.colliders,e,t,r,n,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(s))}projectPointAndGetFeature(e,t,r,n,a,o){return this.queryPipeline.projectPointAndGetFeature(this.bodies,this.colliders,e,t,r,n?n.handle:null,a?a.handle:null,this.colliders.castClosure(o))}intersectionsWithPoint(e,t,r,n,a,o,s){this.queryPipeline.intersectionsWithPoint(this.bodies,this.colliders,e,this.colliders.castClosure(t),r,n,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(s))}castShape(e,t,r,n,a,o,s,l,c,h,u){return this.queryPipeline.castShape(this.bodies,this.colliders,e,t,r,n,a,o,s,l,c?c.handle:null,h?h.handle:null,this.colliders.castClosure(u))}intersectionsWithShape(e,t,r,n,a,o,s,l,c){this.queryPipeline.intersectionsWithShape(this.bodies,this.colliders,e,t,r,this.colliders.castClosure(n),a,o,s?s.handle:null,l?l.handle:null,this.colliders.castClosure(c))}collidersWithAabbIntersectingAabb(e,t,r){this.queryPipeline.collidersWithAabbIntersectingAabb(e,t,this.colliders.castClosure(r))}contactsWith(e,t){this.narrowPhase.contactsWith(e.handle,this.colliders.castClosure(t))}intersectionsWith(e,t){this.narrowPhase.intersectionsWith(e.handle,this.colliders.castClosure(t))}contactPair(e,t,r){this.narrowPhase.contactPair(e.handle,t.handle,r)}intersectionPair(e,t){return this.narrowPhase.intersectionPair(e.handle,t.handle)}}var zs;(function(i){i[i.COLLISION_EVENTS=1]="COLLISION_EVENTS",i[i.CONTACT_FORCE_EVENTS=2]="CONTACT_FORCE_EVENTS"})(zs||(zs={}));class Bl{free(){this.raw&&this.raw.free(),this.raw=void 0}collider1(){return this.raw.collider1()}collider2(){return this.raw.collider2()}totalForce(){return O.fromRaw(this.raw.total_force())}totalForceMagnitude(){return this.raw.total_force_magnitude()}maxForceDirection(){return O.fromRaw(this.raw.max_force_direction())}maxForceMagnitude(){return this.raw.max_force_magnitude()}}class c0{constructor(e,t){this.raw=t||new nn(e)}free(){this.raw&&this.raw.free(),this.raw=void 0}drainCollisionEvents(e){this.raw.drainCollisionEvents(e)}drainContactForceEvents(e){let t=new Bl;this.raw.drainContactForceEvents(r=>{t.raw=r,e(t),t.free()})}clear(){this.raw.clear()}}var Bs;(function(i){i[i.FILTER_CONTACT_PAIRS=1]="FILTER_CONTACT_PAIRS",i[i.FILTER_INTERSECTION_PAIRS=2]="FILTER_INTERSECTION_PAIRS"})(Bs||(Bs={}));var Hs;(function(i){i[i.EMPTY=0]="EMPTY",i[i.COMPUTE_IMPULSE=1]="COMPUTE_IMPULSE"})(Hs||(Hs={}));function h0(){return Tu()}const gt=Object.freeze(Object.defineProperty({__proto__:null,get ActiveCollisionTypes(){return ia},get ActiveEvents(){return zs},get ActiveHooks(){return Bs},Ball:xs,BroadPhase:Al,CCDSolver:Tl,Capsule:Ss,CharacterCollision:Fl,get CoefficientCombineRule(){return ln},Collider:Ns,ColliderDesc:yt,ColliderSet:Il,Cone:Ds,ConvexPolyhedron:ta,Cuboid:Ms,Cylinder:Ls,DebugRenderBuffers:Nl,DebugRenderPipeline:Ol,EventQueue:c0,get FeatureType(){return Mi},FixedImpulseJoint:gl,FixedMultibodyJoint:xl,HalfSpace:Ll,Heightfield:Ps,ImpulseJoint:Br,ImpulseJointSet:yl,IntegrationParameters:fl,IslandManager:Rl,JointData:yi,get JointType(){return bt},KinematicCharacterController:zl,get MassPropsMode(){return ri},get MotorModel(){return vs},MultibodyJoint:Hr,MultibodyJointSet:El,NarrowPhase:Cl,PhysicsPipeline:Dl,PointColliderProjection:hn,PointProjection:cn,Polyline:As,PrismaticImpulseJoint:_l,PrismaticMultibodyJoint:Ml,Quaternion:fs,get QueryFilterFlags(){return Os},QueryPipeline:Ul,Ray:l0,RayColliderIntersection:dn,RayColliderToi:ea,RayIntersection:un,RevoluteImpulseJoint:vl,RevoluteMultibodyJoint:bl,RigidBody:_s,RigidBodyDesc:yr,RigidBodySet:ml,get RigidBodyType(){return cr},RotationOps:We,RoundCone:Us,RoundConvexPolyhedron:ra,RoundCuboid:bs,RoundCylinder:Is,RoundTriangle:Rs,SdpMatrix3:pl,SdpMatrix3Ops:gs,Segment:Es,SerializationPipeline:Fs,Shape:St,ShapeColliderTOI:pn,ShapeContact:xi,ShapeTOI:bi,get ShapeType(){return Ze},get SolverFlags(){return Hs},SphericalImpulseJoint:wl,SphericalMultibodyJoint:Sl,TempContactForceEvent:Bl,TempContactManifold:Pl,TriMesh:Cs,Triangle:Ts,UnitImpulseJoint:ws,UnitMultibodyJoint:ys,Vector3:dl,VectorOps:O,World:na,version:h0},Symbol.toStringTag,{value:"Module"})),Gs="160",Si={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},u0=0,Hl=1,d0=2,Gl=1,kl=2,Rr=3,Gr=0,qt=1,hr=2,kr=0,Ti=1,Vl=2,Wl=3,Xl=4,p0=5,ii=100,m0=101,f0=102,jl=103,ql=104,g0=200,_0=201,v0=202,w0=203,ks=204,Vs=205,y0=206,x0=207,M0=208,b0=209,S0=210,E0=211,T0=212,R0=213,A0=214,C0=0,P0=1,L0=2,aa=3,I0=4,D0=5,U0=6,N0=7,Yl=0,O0=1,F0=2,Vr=0,z0=1,B0=2,H0=3,G0=4,k0=5,V0=6,Kl=300,Ri=301,Ai=302,Ws=303,Xs=304,sa=306,js=1e3,ur=1001,qs=1002,Ht=1003,Jl=1004,Ys=1005,er=1006,W0=1007,mn=1008,Wr=1009,X0=1010,j0=1011,Ks=1012,Zl=1013,Xr=1014,jr=1015,fn=1016,Ql=1017,$l=1018,ni=1020,q0=1021,dr=1023,Y0=1024,K0=1025,ai=1026,Ci=1027,J0=1028,ec=1029,Z0=1030,tc=1031,rc=1033,Js=33776,Zs=33777,Qs=33778,$s=33779,ic=35840,nc=35841,ac=35842,sc=35843,oc=36196,lc=37492,cc=37496,hc=37808,uc=37809,dc=37810,pc=37811,mc=37812,fc=37813,gc=37814,_c=37815,vc=37816,wc=37817,yc=37818,xc=37819,Mc=37820,bc=37821,eo=36492,Sc=36494,Ec=36495,Q0=36283,Tc=36284,Rc=36285,Ac=36286,Cc=3e3,si=3001,$0=3200,ev=3201,Pc=0,tv=1,tr="",Dt="srgb",Ar="srgb-linear",to="display-p3",oa="display-p3-linear",la="linear",ut="srgb",ca="rec709",ha="p3",Pi=7680,Lc=519,rv=512,iv=513,nv=514,Ic=515,av=516,sv=517,ov=518,lv=519,Dc=35044,ua=35048,Uc="300 es",ro=1035,Cr=2e3,da=2001;class oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const n=r.indexOf(t);n!==-1&&r.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const r=t.slice(0);for(let n=0,a=r.length;n<a;n++)r[n].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nc=1234567;const gn=Math.PI/180,_n=180/Math.PI;function Li(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[r&255]+Ot[r>>8&255]+Ot[r>>16&255]+Ot[r>>24&255]).toLowerCase()}function Ut(i,e,t){return Math.max(e,Math.min(t,i))}function io(i,e){return(i%e+e)%e}function cv(i,e,t,r,n){return r+(i-e)*(n-r)/(t-e)}function hv(i,e,t){return i!==e?(t-i)/(e-i):0}function vn(i,e,t){return(1-t)*i+t*e}function uv(i,e,t,r){return vn(i,e,1-Math.exp(-t*r))}function dv(i,e=1){return e-Math.abs(io(i,e*2)-e)}function pv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function mv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function fv(i,e){return i+Math.floor(Math.random()*(e-i+1))}function gv(i,e){return i+Math.random()*(e-i)}function _v(i){return i*(.5-Math.random())}function vv(i){i!==void 0&&(Nc=i);let e=Nc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wv(i){return i*gn}function yv(i){return i*_n}function no(i){return(i&i-1)===0&&i!==0}function xv(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function pa(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mv(i,e,t,r,n){const a=Math.cos,o=Math.sin,s=a(t/2),l=o(t/2),c=a((e+r)/2),h=o((e+r)/2),u=a((e-r)/2),d=o((e-r)/2),m=a((r-e)/2),_=o((r-e)/2);switch(n){case"XYX":i.set(s*h,l*u,l*d,s*c);break;case"YZY":i.set(l*d,s*h,l*u,s*c);break;case"ZXZ":i.set(l*u,l*d,s*h,s*c);break;case"XZX":i.set(s*h,l*_,l*m,s*c);break;case"YXY":i.set(l*m,s*h,l*_,s*c);break;case"ZYZ":i.set(l*_,l*m,s*h,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Ii(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const bv={DEG2RAD:gn,RAD2DEG:_n,generateUUID:Li,clamp:Ut,euclideanModulo:io,mapLinear:cv,inverseLerp:hv,lerp:vn,damp:uv,pingpong:dv,smoothstep:pv,smootherstep:mv,randInt:fv,randFloat:gv,randFloatSpread:_v,seededRandom:vv,degToRad:wv,radToDeg:yv,isPowerOfTwo:no,ceilPowerOfTwo:xv,floorPowerOfTwo:pa,setQuaternionFromProperEuler:Mv,normalize:Gt,denormalize:Ii};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ut(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*r-o*n+e.x,this.y=a*n+o*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,r,n,a,o,s,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,n,a,o,s,l,c)}set(e,t,r,n,a,o,s,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=s,h[3]=t,h[4]=a,h[5]=l,h[6]=r,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,a=this.elements,o=r[0],s=r[3],l=r[6],c=r[1],h=r[4],u=r[7],d=r[2],m=r[5],_=r[8],v=n[0],f=n[3],p=n[6],S=n[1],w=n[4],A=n[7],P=n[2],T=n[5],R=n[8];return a[0]=o*v+s*S+l*P,a[3]=o*f+s*w+l*T,a[6]=o*p+s*A+l*R,a[1]=c*v+h*S+u*P,a[4]=c*f+h*w+u*T,a[7]=c*p+h*A+u*R,a[2]=d*v+m*S+_*P,a[5]=d*f+m*w+_*T,a[8]=d*p+m*A+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*s*c-r*a*h+r*s*l+n*a*c-n*o*l}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8],u=h*o-s*c,d=s*l-h*a,m=c*a-o*l,_=t*u+r*d+n*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=u*v,e[1]=(n*c-h*r)*v,e[2]=(s*r-n*o)*v,e[3]=d*v,e[4]=(h*t-n*l)*v,e[5]=(n*a-s*t)*v,e[6]=m*v,e[7]=(r*l-c*t)*v,e[8]=(o*t-r*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(r*l,r*c,-r*(l*o+c*s)+o+e,-n*c,n*l,-n*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(ao.makeScale(e,t)),this}rotate(e){return this.premultiply(ao.makeRotation(-e)),this}translate(e,t){return this.premultiply(ao.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ao=new Ke;function Oc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ma(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sv(){const i=ma("canvas");return i.style.display="block",i}const Fc={};function wn(i){i in Fc||(Fc[i]=!0,console.warn(i))}const zc=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bc=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fa={[Ar]:{transfer:la,primaries:ca,toReference:i=>i,fromReference:i=>i},[Dt]:{transfer:ut,primaries:ca,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[oa]:{transfer:la,primaries:ha,toReference:i=>i.applyMatrix3(Bc),fromReference:i=>i.applyMatrix3(zc)},[to]:{transfer:ut,primaries:ha,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Bc),fromReference:i=>i.applyMatrix3(zc).convertLinearToSRGB()}},Ev=new Set([Ar,oa]),ot={enabled:!0,_workingColorSpace:Ar,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ev.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const r=fa[e].toReference,n=fa[t].fromReference;return n(r(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return fa[i].primaries},getTransfer:function(i){return i===tr?la:fa[i].transfer}};function Di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function so(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ui;class Hc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ui===void 0&&(Ui=ma("canvas")),Ui.width=e.width,Ui.height=e.height;const r=Ui.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ma("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),a=n.data;for(let o=0;o<a.length;o++)a[o]=Di(a[o]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Di(t[r]/255)*255):t[r]=Di(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tv=0;class Gc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=Li(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let o=0,s=n.length;o<s;o++)n[o].isDataTexture?a.push(oo(n[o].image)):a.push(oo(n[o]))}else a=oo(n);r.url=a}return t||(e.images[this.uuid]=r),r}}function oo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rv=0;class Jt extends oi{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,r=ur,n=ur,a=er,o=mn,s=dr,l=Wr,c=Jt.DEFAULT_ANISOTROPY,h=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=Li(),this.name="",this.source=new Gc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(wn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===si?Dt:tr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case js:e.x=e.x-Math.floor(e.x);break;case ur:e.x=e.x<0?0:1;break;case qs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case js:e.y=e.y-Math.floor(e.y);break;case ur:e.y=e.y<0?0:1;break;case qs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return wn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Dt?si:Cc}set encoding(e){wn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===si?Dt:tr}}Jt.DEFAULT_IMAGE=null,Jt.DEFAULT_MAPPING=Kl,Jt.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,r=0,n=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*n+o[12]*a,this.y=o[1]*t+o[5]*r+o[9]*n+o[13]*a,this.z=o[2]*t+o[6]*r+o[10]*n+o[14]*a,this.w=o[3]*t+o[7]*r+o[11]*n+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,a;const o=e.elements,s=o[0],l=o[4],c=o[8],h=o[1],u=o[5],d=o[9],m=o[2],_=o[6],v=o[10];if(Math.abs(l-h)<.01&&Math.abs(c-m)<.01&&Math.abs(d-_)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+m)<.1&&Math.abs(d+_)<.1&&Math.abs(s+u+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const p=(s+1)/2,S=(u+1)/2,w=(v+1)/2,A=(l+h)/4,P=(c+m)/4,T=(d+_)/4;return p>S&&p>w?p<.01?(r=0,n=.707106781,a=.707106781):(r=Math.sqrt(p),n=A/r,a=P/r):S>w?S<.01?(r=.707106781,n=0,a=.707106781):(n=Math.sqrt(S),r=A/n,a=T/n):w<.01?(r=.707106781,n=.707106781,a=0):(a=Math.sqrt(w),r=P/a,n=T/a),this.set(r,n,a,t),this}let f=Math.sqrt((_-d)*(_-d)+(c-m)*(c-m)+(h-l)*(h-l));return Math.abs(f)<.001&&(f=1),this.x=(_-d)/f,this.y=(c-m)/f,this.z=(h-l)/f,this.w=Math.acos((s+u+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Av extends oi{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const n={width:e,height:t,depth:1};r.encoding!==void 0&&(wn("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===si?Dt:tr),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:er,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new Jt(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends Av{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class kc extends Jt{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cv extends Jt{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xr{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,a,o,s){let l=r[n+0],c=r[n+1],h=r[n+2],u=r[n+3];const d=a[o+0],m=a[o+1],_=a[o+2],v=a[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(s===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(u!==v||l!==d||c!==m||h!==_){let f=1-s;const p=l*d+c*m+h*_+u*v,S=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const P=Math.sqrt(w),T=Math.atan2(P,p*S);f=Math.sin(f*T)/P,s=Math.sin(s*T)/P}const A=s*S;if(l=l*f+d*A,c=c*f+m*A,h=h*f+_*A,u=u*f+v*A,f===1-s){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,r,n,a,o){const s=r[n],l=r[n+1],c=r[n+2],h=r[n+3],u=a[o],d=a[o+1],m=a[o+2],_=a[o+3];return e[t]=s*_+h*u+l*m-c*d,e[t+1]=l*_+h*d+c*u-s*m,e[t+2]=c*_+h*m+s*d-l*u,e[t+3]=h*_-s*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,n=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(r/2),h=s(n/2),u=s(a/2),d=l(r/2),m=l(n/2),_=l(a/2);switch(o){case"XYZ":this._x=d*h*u+c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u-d*m*_;break;case"YXZ":this._x=d*h*u+c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u+d*m*_;break;case"ZXY":this._x=d*h*u-c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u-d*m*_;break;case"ZYX":this._x=d*h*u-c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u+d*m*_;break;case"YZX":this._x=d*h*u+c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u-d*m*_;break;case"XZY":this._x=d*h*u-c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],a=t[8],o=t[1],s=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=r+s+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(a-c)*m,this._z=(o-n)*m}else if(r>s&&r>u){const m=2*Math.sqrt(1+r-s-u);this._w=(h-l)/m,this._x=.25*m,this._y=(n+o)/m,this._z=(a+c)/m}else if(s>u){const m=2*Math.sqrt(1+s-r-u);this._w=(a-c)/m,this._x=(n+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-r-s);this._w=(o-n)/m,this._x=(a+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,a=e._z,o=e._w,s=t._x,l=t._y,c=t._z,h=t._w;return this._x=r*h+o*s+n*c-a*l,this._y=n*h+o*l+a*s-r*c,this._z=a*h+o*c+r*l-n*s,this._w=o*h-r*s-n*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,n=this._y,a=this._z,o=this._w;let s=o*e._w+r*e._x+n*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=r,this._y=n,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*r+t*this._x,this._y=m*n+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,s),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=r*u+this._x*d,this._y=n*u+this._y*d,this._z=a*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(n),r*Math.sin(a),r*Math.cos(a),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,r=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*n,this.y=a[1]*t+a[4]*r+a[7]*n,this.z=a[2]*t+a[5]*r+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,a=e.elements,o=1/(a[3]*t+a[7]*r+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*n+a[12])*o,this.y=(a[1]*t+a[5]*r+a[9]*n+a[13])*o,this.z=(a[2]*t+a[6]*r+a[10]*n+a[14])*o,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*n-s*r),h=2*(s*t-a*n),u=2*(a*r-o*t);return this.x=t+l*c+o*u-s*h,this.y=r+l*h+s*c-a*u,this.z=n+l*u+a*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*n,this.y=a[1]*t+a[5]*r+a[9]*n,this.z=a[2]*t+a[6]*r+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=n*l-a*s,this.y=a*o-r*l,this.z=r*s-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return lo.copy(this).projectOnVector(e),this.sub(lo)}reflect(e){return this.sub(lo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ut(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lo=new N,Vc=new xr;class yn{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(pr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(pr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=pr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,pr):pr.fromBufferAttribute(a,o),pr.applyMatrix4(e.matrixWorld),this.expandByPoint(pr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ga.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ga.copy(r.boundingBox)),ga.applyMatrix4(e.matrixWorld),this.union(ga)}const n=e.children;for(let a=0,o=n.length;a<o;a++)this.expandByObject(n[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pr),pr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xn),_a.subVectors(this.max,xn),Ni.subVectors(e.a,xn),Oi.subVectors(e.b,xn),Fi.subVectors(e.c,xn),qr.subVectors(Oi,Ni),Yr.subVectors(Fi,Oi),ci.subVectors(Ni,Fi);let t=[0,-qr.z,qr.y,0,-Yr.z,Yr.y,0,-ci.z,ci.y,qr.z,0,-qr.x,Yr.z,0,-Yr.x,ci.z,0,-ci.x,-qr.y,qr.x,0,-Yr.y,Yr.x,0,-ci.y,ci.x,0];return!co(t,Ni,Oi,Fi,_a)||(t=[1,0,0,0,1,0,0,0,1],!co(t,Ni,Oi,Fi,_a))?!1:(va.crossVectors(qr,Yr),t=[va.x,va.y,va.z],co(t,Ni,Oi,Fi,_a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pr=[new N,new N,new N,new N,new N,new N,new N,new N],pr=new N,ga=new yn,Ni=new N,Oi=new N,Fi=new N,qr=new N,Yr=new N,ci=new N,xn=new N,_a=new N,va=new N,hi=new N;function co(i,e,t,r,n){for(let a=0,o=i.length-3;a<=o;a+=3){hi.fromArray(i,a);const s=n.x*Math.abs(hi.x)+n.y*Math.abs(hi.y)+n.z*Math.abs(hi.z),l=e.dot(hi),c=t.dot(hi),h=r.dot(hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>s)return!1}return!0}const Pv=new yn,Mn=new N,ho=new N;class bn{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Pv.setFromPoints(e).getCenter(r);let n=0;for(let a=0,o=e.length;a<o;a++)n=Math.max(n,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mn.subVectors(e,this.center);const t=Mn.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(Mn,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ho.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mn.copy(e.center).add(ho)),this.expandByPoint(Mn.copy(e.center).sub(ho))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Lr=new N,uo=new N,wa=new N,Kr=new N,po=new N,ya=new N,mo=new N;class fo{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Lr.copy(this.origin).addScaledVector(this.direction,t),Lr.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){uo.copy(e).add(t).multiplyScalar(.5),wa.copy(t).sub(e).normalize(),Kr.copy(this.origin).sub(uo);const a=e.distanceTo(t)*.5,o=-this.direction.dot(wa),s=Kr.dot(this.direction),l=-Kr.dot(wa),c=Kr.lengthSq(),h=Math.abs(1-o*o);let u,d,m,_;if(h>0)if(u=o*l-s,d=o*s-l,_=a*h,u>=0)if(d>=-_)if(d<=_){const v=1/h;u*=v,d*=v,m=u*(u+o*d+2*s)+d*(o*u+d+2*l)+c}else d=a,u=Math.max(0,-(o*d+s)),m=-u*u+d*(d+2*l)+c;else d=-a,u=Math.max(0,-(o*d+s)),m=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-o*a+s)),d=u>0?-a:Math.min(Math.max(-a,-l),a),m=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-a,-l),a),m=d*(d+2*l)+c):(u=Math.max(0,-(o*a+s)),d=u>0?a:Math.min(Math.max(-a,-l),a),m=-u*u+d*(d+2*l)+c);else d=o>0?-a:a,u=Math.max(0,-(o*d+s)),m=-u*u+d*(d+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(uo).addScaledVector(wa,d),m}intersectSphere(e,t){Lr.subVectors(e.center,this.origin);const r=Lr.dot(this.direction),n=Lr.dot(Lr)-r*r,a=e.radius*e.radius;if(n>a)return null;const o=Math.sqrt(a-n),s=r-o,l=r+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,a,o,s,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(r=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(r=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(a=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),r>o||a>n||((a>r||isNaN(r))&&(r=a),(o<n||isNaN(n))&&(n=o),u>=0?(s=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(s=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),r>l||s>n)||((s>r||r!==r)&&(r=s),(l<n||n!==n)&&(n=l),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,Lr)!==null}intersectTriangle(e,t,r,n,a){po.subVectors(t,e),ya.subVectors(r,e),mo.crossVectors(po,ya);let o=this.direction.dot(mo),s;if(o>0){if(n)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Kr.subVectors(this.origin,e);const l=s*this.direction.dot(ya.crossVectors(Kr,ya));if(l<0)return null;const c=s*this.direction.dot(po.cross(Kr));if(c<0||l+c>o)return null;const h=-s*Kr.dot(mo);return h<0?null:this.at(h/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,r,n,a,o,s,l,c,h,u,d,m,_,v,f){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,n,a,o,s,l,c,h,u,d,m,_,v,f)}set(e,t,r,n,a,o,s,l,c,h,u,d,m,_,v,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=r,p[12]=n,p[1]=a,p[5]=o,p[9]=s,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=_,p[11]=v,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/zi.setFromMatrixColumn(e,0).length(),a=1/zi.setFromMatrixColumn(e,1).length(),o=1/zi.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*o,t[9]=r[9]*o,t[10]=r[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,a=e.z,o=Math.cos(r),s=Math.sin(r),l=Math.cos(n),c=Math.sin(n),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const d=o*h,m=o*u,_=s*h,v=s*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+_*c,t[5]=d-v*c,t[9]=-s*l,t[2]=v-d*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,m=l*u,_=c*h,v=c*u;t[0]=d+v*s,t[4]=_*s-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-s,t[2]=m*s-_,t[6]=v+d*s,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,m=l*u,_=c*h,v=c*u;t[0]=d-v*s,t[4]=-o*u,t[8]=_+m*s,t[1]=m+_*s,t[5]=o*h,t[9]=v-d*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,m=o*u,_=s*h,v=s*u;t[0]=l*h,t[4]=_*c-m,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=m*c-_,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,_=s*l,v=s*c;t[0]=l*h,t[4]=v-d*u,t[8]=_*u+m,t[1]=u,t[5]=o*h,t[9]=-s*h,t[2]=-c*h,t[6]=m*u+_,t[10]=d-v*u}else if(e.order==="XZY"){const d=o*l,m=o*c,_=s*l,v=s*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=o*h,t[9]=m*u-_,t[2]=_*u-m,t[6]=s*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lv,e,Iv)}lookAt(e,t,r){const n=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),Jr.crossVectors(r,Zt),Jr.lengthSq()===0&&(Math.abs(r.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),Jr.crossVectors(r,Zt)),Jr.normalize(),xa.crossVectors(Zt,Jr),n[0]=Jr.x,n[4]=xa.x,n[8]=Zt.x,n[1]=Jr.y,n[5]=xa.y,n[9]=Zt.y,n[2]=Jr.z,n[6]=xa.z,n[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,a=this.elements,o=r[0],s=r[4],l=r[8],c=r[12],h=r[1],u=r[5],d=r[9],m=r[13],_=r[2],v=r[6],f=r[10],p=r[14],S=r[3],w=r[7],A=r[11],P=r[15],T=n[0],R=n[4],k=n[8],x=n[12],b=n[1],U=n[5],F=n[9],Q=n[13],D=n[2],z=n[6],Y=n[10],Z=n[14],J=n[3],K=n[7],te=n[11],ne=n[15];return a[0]=o*T+s*b+l*D+c*J,a[4]=o*R+s*U+l*z+c*K,a[8]=o*k+s*F+l*Y+c*te,a[12]=o*x+s*Q+l*Z+c*ne,a[1]=h*T+u*b+d*D+m*J,a[5]=h*R+u*U+d*z+m*K,a[9]=h*k+u*F+d*Y+m*te,a[13]=h*x+u*Q+d*Z+m*ne,a[2]=_*T+v*b+f*D+p*J,a[6]=_*R+v*U+f*z+p*K,a[10]=_*k+v*F+f*Y+p*te,a[14]=_*x+v*Q+f*Z+p*ne,a[3]=S*T+w*b+A*D+P*J,a[7]=S*R+w*U+A*z+P*K,a[11]=S*k+w*F+A*Y+P*te,a[15]=S*x+w*Q+A*Z+P*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14],_=e[3],v=e[7],f=e[11],p=e[15];return _*(+a*l*u-n*c*u-a*s*d+r*c*d+n*s*m-r*l*m)+v*(+t*l*m-t*c*d+a*o*d-n*o*m+n*c*h-a*l*h)+f*(+t*c*u-t*s*m-a*o*u+r*o*m+a*s*h-r*c*h)+p*(-n*s*h-t*l*u+t*s*d+n*o*u-r*o*d+r*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],_=e[12],v=e[13],f=e[14],p=e[15],S=u*f*c-v*d*c+v*l*m-s*f*m-u*l*p+s*d*p,w=_*d*c-h*f*c-_*l*m+o*f*m+h*l*p-o*d*p,A=h*v*c-_*u*c+_*s*m-o*v*m-h*s*p+o*u*p,P=_*u*l-h*v*l-_*s*d+o*v*d+h*s*f-o*u*f,T=t*S+r*w+n*A+a*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=S*R,e[1]=(v*d*a-u*f*a-v*n*m+r*f*m+u*n*p-r*d*p)*R,e[2]=(s*f*a-v*l*a+v*n*c-r*f*c-s*n*p+r*l*p)*R,e[3]=(u*l*a-s*d*a-u*n*c+r*d*c+s*n*m-r*l*m)*R,e[4]=w*R,e[5]=(h*f*a-_*d*a+_*n*m-t*f*m-h*n*p+t*d*p)*R,e[6]=(_*l*a-o*f*a-_*n*c+t*f*c+o*n*p-t*l*p)*R,e[7]=(o*d*a-h*l*a+h*n*c-t*d*c-o*n*m+t*l*m)*R,e[8]=A*R,e[9]=(_*u*a-h*v*a-_*r*m+t*v*m+h*r*p-t*u*p)*R,e[10]=(o*v*a-_*s*a+_*r*c-t*v*c-o*r*p+t*s*p)*R,e[11]=(h*s*a-o*u*a-h*r*c+t*u*c+o*r*m-t*s*m)*R,e[12]=P*R,e[13]=(h*v*n-_*u*n+_*r*d-t*v*d-h*r*f+t*u*f)*R,e[14]=(_*s*n-o*v*n-_*r*l+t*v*l+o*r*f-t*s*f)*R,e[15]=(o*u*n-h*s*n+h*r*l-t*u*l-o*r*d+t*s*d)*R,this}scale(e){const t=this.elements,r=e.x,n=e.y,a=e.z;return t[0]*=r,t[4]*=n,t[8]*=a,t[1]*=r,t[5]*=n,t[9]*=a,t[2]*=r,t[6]*=n,t[10]*=a,t[3]*=r,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),a=1-r,o=e.x,s=e.y,l=e.z,c=a*o,h=a*s;return this.set(c*o+r,c*s-n*l,c*l+n*s,0,c*s+n*l,h*s+r,h*l-n*o,0,c*l-n*s,h*l+n*o,a*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,a,o){return this.set(1,r,a,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,c=a+a,h=o+o,u=s+s,d=a*c,m=a*h,_=a*u,v=o*h,f=o*u,p=s*u,S=l*c,w=l*h,A=l*u,P=r.x,T=r.y,R=r.z;return n[0]=(1-(v+p))*P,n[1]=(m+A)*P,n[2]=(_-w)*P,n[3]=0,n[4]=(m-A)*T,n[5]=(1-(d+p))*T,n[6]=(f+S)*T,n[7]=0,n[8]=(_+w)*R,n[9]=(f-S)*R,n[10]=(1-(d+v))*R,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let a=zi.set(n[0],n[1],n[2]).length();const o=zi.set(n[4],n[5],n[6]).length(),s=zi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],mr.copy(this);const l=1/a,c=1/o,h=1/s;return mr.elements[0]*=l,mr.elements[1]*=l,mr.elements[2]*=l,mr.elements[4]*=c,mr.elements[5]*=c,mr.elements[6]*=c,mr.elements[8]*=h,mr.elements[9]*=h,mr.elements[10]*=h,t.setFromRotationMatrix(mr),r.x=a,r.y=o,r.z=s,this}makePerspective(e,t,r,n,a,o,s=Cr){const l=this.elements,c=2*a/(t-e),h=2*a/(r-n),u=(t+e)/(t-e),d=(r+n)/(r-n);let m,_;if(s===Cr)m=-(o+a)/(o-a),_=-2*o*a/(o-a);else if(s===da)m=-o/(o-a),_=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,n,a,o,s=Cr){const l=this.elements,c=1/(t-e),h=1/(r-n),u=1/(o-a),d=(t+e)*c,m=(r+n)*h;let _,v;if(s===Cr)_=(o+a)*u,v=-2*u;else if(s===da)_=a*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const zi=new N,mr=new _t,Lv=new N(0,0,0),Iv=new N(1,1,1),Jr=new N,xa=new N,Zt=new N,Wc=new _t,Xc=new xr;class Sn{constructor(e=0,t=0,r=0,n=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,a=n[0],o=n[4],s=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],m=n[10];switch(t){case"XYZ":this._y=Math.asin(Ut(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Wc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wc,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xc.setFromEuler(this),this.setFromQuaternion(Xc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class go{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dv=0;const jc=new N,Bi=new xr,Ir=new _t,Ma=new N,En=new N,Uv=new N,Nv=new xr,qc=new N(1,0,0),Yc=new N(0,1,0),Kc=new N(0,0,1),Ov={type:"added"},Fv={type:"removed"};class Pt extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new N,t=new Sn,r=new xr,n=new N(1,1,1);function a(){r.setFromEuler(t,!1)}function o(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new _t},normalMatrix:{value:new Ke}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.premultiply(Bi),this}rotateX(e){return this.rotateOnAxis(qc,e)}rotateY(e){return this.rotateOnAxis(Yc,e)}rotateZ(e){return this.rotateOnAxis(Kc,e)}translateOnAxis(e,t){return jc.copy(e).applyQuaternion(this.quaternion),this.position.add(jc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qc,e)}translateY(e){return this.translateOnAxis(Yc,e)}translateZ(e){return this.translateOnAxis(Kc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ir.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Ma.copy(e):Ma.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),En.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ir.lookAt(En,Ma,this.up):Ir.lookAt(Ma,En,this.up),this.quaternion.setFromRotationMatrix(Ir),n&&(Ir.extractRotation(n.matrixWorld),Bi.setFromRotationMatrix(Ir),this.quaternion.premultiply(Bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ov)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fv)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ir),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const a=this.children[r].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(En,e,Uv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(En,Nv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++){const a=t[r];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let a=0,o=n.length;a<o;a++){const s=n[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];a(e.shapes,u)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));n.material=s}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let s=0;s<this.children.length;s++)n.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];n.animations.push(a(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),m=o(e.animations),_=o(e.nodes);s.length>0&&(r.geometries=s),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),h.length>0&&(r.images=h),u.length>0&&(r.shapes=u),d.length>0&&(r.skeletons=d),m.length>0&&(r.animations=m),_.length>0&&(r.nodes=_)}return r.object=n,r;function o(s){const l=[];for(const c in s){const h=s[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}Pt.DEFAULT_UP=new N(0,1,0),Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fr=new N,Dr=new N,_o=new N,Ur=new N,Hi=new N,Gi=new N,Jc=new N,vo=new N,wo=new N,yo=new N;let ba=!1;class gr{constructor(e=new N,t=new N,r=new N){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),fr.subVectors(e,t),n.cross(fr);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,r,n,a){fr.subVectors(n,t),Dr.subVectors(r,t),_o.subVectors(e,t);const o=fr.dot(fr),s=fr.dot(Dr),l=fr.dot(_o),c=Dr.dot(Dr),h=Dr.dot(_o),u=o*c-s*s;if(u===0)return a.set(0,0,0),null;const d=1/u,m=(c*l-s*h)*d,_=(o*h-s*l)*d;return a.set(1-m-_,_,m)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,Ur)===null?!1:Ur.x>=0&&Ur.y>=0&&Ur.x+Ur.y<=1}static getUV(e,t,r,n,a,o,s,l){return ba===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ba=!0),this.getInterpolation(e,t,r,n,a,o,s,l)}static getInterpolation(e,t,r,n,a,o,s,l){return this.getBarycoord(e,t,r,n,Ur)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ur.x),l.addScaledVector(o,Ur.y),l.addScaledVector(s,Ur.z),l)}static isFrontFacing(e,t,r,n){return fr.subVectors(r,t),Dr.subVectors(e,t),fr.cross(Dr).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fr.subVectors(this.c,this.b),Dr.subVectors(this.a,this.b),fr.cross(Dr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gr.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,n,a){return ba===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ba=!0),gr.getInterpolation(e,this.a,this.b,this.c,t,r,n,a)}getInterpolation(e,t,r,n,a){return gr.getInterpolation(e,this.a,this.b,this.c,t,r,n,a)}containsPoint(e){return gr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,a=this.c;let o,s;Hi.subVectors(n,r),Gi.subVectors(a,r),vo.subVectors(e,r);const l=Hi.dot(vo),c=Gi.dot(vo);if(l<=0&&c<=0)return t.copy(r);wo.subVectors(e,n);const h=Hi.dot(wo),u=Gi.dot(wo);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(r).addScaledVector(Hi,o);yo.subVectors(e,a);const m=Hi.dot(yo),_=Gi.dot(yo);if(_>=0&&m<=_)return t.copy(a);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return s=c/(c-_),t.copy(r).addScaledVector(Gi,s);const f=h*_-m*u;if(f<=0&&u-h>=0&&m-_>=0)return Jc.subVectors(a,n),s=(u-h)/(u-h+(m-_)),t.copy(n).addScaledVector(Jc,s);const p=1/(f+v+d);return o=v*p,s=d*p,t.copy(r).addScaledVector(Hi,o).addScaledVector(Gi,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zr={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function xo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ee{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,r,n=ot.workingColorSpace){return this.r=e,this.g=t,this.b=r,ot.toWorkingColorSpace(this,n),this}setHSL(e,t,r,n=ot.workingColorSpace){if(e=io(e,1),t=Ut(t,0,1),r=Ut(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,o=2*r-a;this.r=xo(o,a,e+1/3),this.g=xo(o,a,e),this.b=xo(o,a,e-1/3)}return ot.toWorkingColorSpace(this,n),this}setStyle(e,t=Dt){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=n[1],s=n[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const r=Zc[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=so(e.r),this.g=so(e.g),this.b=so(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return ot.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Ut(Ft.r*255,0,255))*65536+Math.round(Ut(Ft.g*255,0,255))*256+Math.round(Ut(Ft.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(Ft.copy(this),t);const r=Ft.r,n=Ft.g,a=Ft.b,o=Math.max(r,n,a),s=Math.min(r,n,a);let l,c;const h=(s+o)/2;if(s===o)l=0,c=0;else{const u=o-s;switch(c=h<=.5?u/(o+s):u/(2-o-s),o){case r:l=(n-a)/u+(n<a?6:0);break;case n:l=(a-r)/u+2;break;case a:l=(r-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Dt){ot.fromWorkingColorSpace(Ft.copy(this),e);const t=Ft.r,r=Ft.g,n=Ft.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(Zr),this.setHSL(Zr.h+e,Zr.s+t,Zr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Zr),e.getHSL(Sa);const r=vn(Zr.h,Sa.h,t),n=vn(Zr.s,Sa.s,t),a=vn(Zr.l,Sa.l,t);return this.setHSL(r,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,n=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*n,this.g=a[1]*t+a[4]*r+a[7]*n,this.b=a[2]*t+a[5]*r+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ee;Ee.NAMES=Zc;let zv=0;class Tn extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zv++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=Ti,this.side=Gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ks,this.blendDst=Vs,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(r.blending=this.blending),this.side!==Gr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ks&&(r.blendSrc=this.blendSrc),this.blendDst!==Vs&&(r.blendDst=this.blendDst),this.blendEquation!==ii&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==aa&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lc&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(t){const a=n(e.textures),o=n(e.images);a.length>0&&(r.textures=a),o.length>0&&(r.images=o)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let a=0;a!==n;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rn extends Tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new N,Ea=new Ie;class kt{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Dc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=jr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ea.fromBufferAttribute(this,t),Ea.applyMatrix3(e),this.setXY(t,Ea.x,Ea.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ii(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Gt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),r=Gt(r,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,a){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),r=Gt(r,this.array),n=Gt(n,this.array),a=Gt(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dc&&(e.usage=this.usage),e}}class Qc extends kt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class $c extends kt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Lt extends kt{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Bv=0;const rr=new _t,Mo=new Pt,ki=new N,Qt=new yn,An=new yn,It=new N;class ir extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Oc(e)?$c:Qc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new Ke().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rr.makeRotationFromQuaternion(e),this.applyMatrix4(rr),this}rotateX(e){return rr.makeRotationX(e),this.applyMatrix4(rr),this}rotateY(e){return rr.makeRotationY(e),this.applyMatrix4(rr),this}rotateZ(e){return rr.makeRotationZ(e),this.applyMatrix4(rr),this}translate(e,t,r){return rr.makeTranslation(e,t,r),this.applyMatrix4(rr),this}scale(e,t,r){return rr.makeScale(e,t,r),this.applyMatrix4(rr),this}lookAt(e){return Mo.lookAt(e),Mo.updateMatrix(),this.applyMatrix4(Mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(e){const t=[];for(let r=0,n=e.length;r<n;r++){const a=e[r];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const a=t[r];Qt.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const r=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];An.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(Qt.min,An.min),Qt.expandByPoint(It),It.addVectors(Qt.max,An.max),Qt.expandByPoint(It)):(Qt.expandByPoint(An.min),Qt.expandByPoint(An.max))}Qt.getCenter(r);let n=0;for(let a=0,o=e.count;a<o;a++)It.fromBufferAttribute(e,a),n=Math.max(n,r.distanceToSquared(It));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],l=this.morphTargetsRelative;for(let c=0,h=s.count;c<h;c++)It.fromBufferAttribute(s,c),l&&(ki.fromBufferAttribute(e,c),It.add(ki)),n=Math.max(n,r.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,n=t.position.array,a=t.normal.array,o=t.uv.array,s=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<s;b++)c[b]=new N,h[b]=new N;const u=new N,d=new N,m=new N,_=new Ie,v=new Ie,f=new Ie,p=new N,S=new N;function w(b,U,F){u.fromArray(n,b*3),d.fromArray(n,U*3),m.fromArray(n,F*3),_.fromArray(o,b*2),v.fromArray(o,U*2),f.fromArray(o,F*2),d.sub(u),m.sub(u),v.sub(_),f.sub(_);const Q=1/(v.x*f.y-f.x*v.y);isFinite(Q)&&(p.copy(d).multiplyScalar(f.y).addScaledVector(m,-v.y).multiplyScalar(Q),S.copy(m).multiplyScalar(v.x).addScaledVector(d,-f.x).multiplyScalar(Q),c[b].add(p),c[U].add(p),c[F].add(p),h[b].add(S),h[U].add(S),h[F].add(S))}let A=this.groups;A.length===0&&(A=[{start:0,count:r.length}]);for(let b=0,U=A.length;b<U;++b){const F=A[b],Q=F.start,D=F.count;for(let z=Q,Y=Q+D;z<Y;z+=3)w(r[z+0],r[z+1],r[z+2])}const P=new N,T=new N,R=new N,k=new N;function x(b){R.fromArray(a,b*3),k.copy(R);const U=c[b];P.copy(U),P.sub(R.multiplyScalar(R.dot(U))).normalize(),T.crossVectors(k,U);const F=T.dot(h[b])<0?-1:1;l[b*4]=P.x,l[b*4+1]=P.y,l[b*4+2]=P.z,l[b*4+3]=F}for(let b=0,U=A.length;b<U;++b){const F=A[b],Q=F.start,D=F.count;for(let z=Q,Y=Q+D;z<Y;z+=3)x(r[z+0]),x(r[z+1]),x(r[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let d=0,m=r.count;d<m;d++)r.setXYZ(d,0,0,0);const n=new N,a=new N,o=new N,s=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),v=e.getX(d+1),f=e.getX(d+2);n.fromBufferAttribute(t,_),a.fromBufferAttribute(t,v),o.fromBufferAttribute(t,f),h.subVectors(o,a),u.subVectors(n,a),h.cross(u),s.fromBufferAttribute(r,_),l.fromBufferAttribute(r,v),c.fromBufferAttribute(r,f),s.add(h),l.add(h),c.add(h),r.setXYZ(_,s.x,s.y,s.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)n.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,a),u.subVectors(n,a),h.cross(u),r.setXYZ(d+0,h.x,h.y,h.z),r.setXYZ(d+1,h.x,h.y,h.z),r.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(s,l){const c=s.array,h=s.itemSize,u=s.normalized,d=new c.constructor(l.length*h);let m=0,_=0;for(let v=0,f=l.length;v<f;v++){s.isInterleavedBufferAttribute?m=l[v]*s.data.stride+s.offset:m=l[v]*h;for(let p=0;p<h;p++)d[_++]=c[m++]}return new kt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ir,r=this.index.array,n=this.attributes;for(const s in n){const l=n[s],c=e(l,r);t.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=e(d,r);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(n[l]=h,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],u=a[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const eh=new _t,ui=new fo,Ta=new bn,th=new N,Vi=new N,Wi=new N,Xi=new N,bo=new N,Ra=new N,Aa=new Ie,Ca=new Ie,Pa=new Ie,rh=new N,ih=new N,nh=new N,La=new N,Ia=new N;class Vt extends Pt{constructor(e=new ir,t=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,a=r.morphAttributes.position,o=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const s=this.morphTargetInfluences;if(a&&s){Ra.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=s[l],u=a[l];h!==0&&(bo.fromBufferAttribute(u,e),o?Ra.addScaledVector(bo,h):Ra.addScaledVector(bo.sub(t),h))}t.add(Ra)}return t}raycast(e,t){const r=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ta.copy(r.boundingSphere),Ta.applyMatrix4(a),ui.copy(e.ray).recast(e.near),!(Ta.containsPoint(ui.origin)===!1&&(ui.intersectSphere(Ta,th)===null||ui.origin.distanceToSquared(th)>(e.far-e.near)**2))&&(eh.copy(a).invert(),ui.copy(e.ray).applyMatrix4(eh),!(r.boundingBox!==null&&ui.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,r){let n;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,m=a.drawRange;if(s!==null)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const f=d[_],p=o[f.materialIndex],S=Math.max(f.start,m.start),w=Math.min(s.count,Math.min(f.start+f.count,m.start+m.count));for(let A=S,P=w;A<P;A+=3){const T=s.getX(A),R=s.getX(A+1),k=s.getX(A+2);n=Da(this,p,e,r,c,h,u,T,R,k),n&&(n.faceIndex=Math.floor(A/3),n.face.materialIndex=f.materialIndex,t.push(n))}}else{const _=Math.max(0,m.start),v=Math.min(s.count,m.start+m.count);for(let f=_,p=v;f<p;f+=3){const S=s.getX(f),w=s.getX(f+1),A=s.getX(f+2);n=Da(this,o,e,r,c,h,u,S,w,A),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const f=d[_],p=o[f.materialIndex],S=Math.max(f.start,m.start),w=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let A=S,P=w;A<P;A+=3){const T=A,R=A+1,k=A+2;n=Da(this,p,e,r,c,h,u,T,R,k),n&&(n.faceIndex=Math.floor(A/3),n.face.materialIndex=f.materialIndex,t.push(n))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let f=_,p=v;f<p;f+=3){const S=f,w=f+1,A=f+2;n=Da(this,o,e,r,c,h,u,S,w,A),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}}}}function Hv(i,e,t,r,n,a,o,s){let l;if(e.side===qt?l=r.intersectTriangle(o,a,n,!0,s):l=r.intersectTriangle(n,a,o,e.side===Gr,s),l===null)return null;Ia.copy(s),Ia.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ia);return c<t.near||c>t.far?null:{distance:c,point:Ia.clone(),object:i}}function Da(i,e,t,r,n,a,o,s,l,c){i.getVertexPosition(s,Vi),i.getVertexPosition(l,Wi),i.getVertexPosition(c,Xi);const h=Hv(i,e,t,r,Vi,Wi,Xi,La);if(h){n&&(Aa.fromBufferAttribute(n,s),Ca.fromBufferAttribute(n,l),Pa.fromBufferAttribute(n,c),h.uv=gr.getInterpolation(La,Vi,Wi,Xi,Aa,Ca,Pa,new Ie)),a&&(Aa.fromBufferAttribute(a,s),Ca.fromBufferAttribute(a,l),Pa.fromBufferAttribute(a,c),h.uv1=gr.getInterpolation(La,Vi,Wi,Xi,Aa,Ca,Pa,new Ie),h.uv2=h.uv1),o&&(rh.fromBufferAttribute(o,s),ih.fromBufferAttribute(o,l),nh.fromBufferAttribute(o,c),h.normal=gr.getInterpolation(La,Vi,Wi,Xi,rh,ih,nh,new N),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));const u={a:s,b:l,c,normal:new N,materialIndex:0};gr.getNormal(Vi,Wi,Xi,u.normal),h.face=u}return h}class ji extends ir{constructor(e=1,t=1,r=1,n=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:a,depthSegments:o};const s=this;n=Math.floor(n),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,m=0;_("z","y","x",-1,-1,r,t,e,o,a,0),_("z","y","x",1,-1,r,t,-e,o,a,1),_("x","z","y",1,1,e,r,t,n,o,2),_("x","z","y",1,-1,e,r,-t,n,o,3),_("x","y","z",1,-1,e,t,r,n,a,4),_("x","y","z",-1,-1,e,t,-r,n,a,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(u,2));function _(v,f,p,S,w,A,P,T,R,k,x){const b=A/R,U=P/k,F=A/2,Q=P/2,D=T/2,z=R+1,Y=k+1;let Z=0,J=0;const K=new N;for(let te=0;te<Y;te++){const ne=te*U-Q;for(let pe=0;pe<z;pe++){const X=pe*b-F;K[v]=X*S,K[f]=ne*w,K[p]=D,c.push(K.x,K.y,K.z),K[v]=0,K[f]=0,K[p]=T>0?1:-1,h.push(K.x,K.y,K.z),u.push(pe/R),u.push(1-te/k),Z+=1}}for(let te=0;te<k;te++)for(let ne=0;ne<R;ne++){const pe=d+ne+z*te,X=d+ne+z*(te+1),ee=d+(ne+1)+z*(te+1),ve=d+(ne+1)+z*te;l.push(pe,X,ve),l.push(X,ee,ve),J+=6}s.addGroup(m,J,x),m+=J,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qi(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const n=i[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function Wt(i){const e={};for(let t=0;t<i.length;t++){const r=qi(i[t]);for(const n in r)e[n]=r[n]}return e}function Gv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ah(i){return i.getRenderTarget()===null?i.outputColorSpace:ot.workingColorSpace}const kv={clone:qi,merge:Wt};var Vv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends Tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vv,this.fragmentShader=Wv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qi(e.uniforms),this.uniformsGroups=Gv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class sh extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Cr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class nr extends sh{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_n*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _n*2*Math.atan(Math.tan(gn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,n,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gn*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,a=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*n/l,t-=o.offsetY*r/c,n*=o.width/l,r*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yi=-90,Ki=1;class Xv extends Pt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new nr(Yi,Ki,e,t);n.layers=this.layers,this.add(n);const a=new nr(Yi,Ki,e,t);a.layers=this.layers,this.add(a);const o=new nr(Yi,Ki,e,t);o.layers=this.layers,this.add(o);const s=new nr(Yi,Ki,e,t);s.layers=this.layers,this.add(s);const l=new nr(Yi,Ki,e,t);l.layers=this.layers,this.add(l);const c=new nr(Yi,Ki,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,n,a,o,s,l]=t;for(const c of t)this.remove(c);if(e===Cr)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===da)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(t,a),e.setRenderTarget(r,1,n),e.render(t,o),e.setRenderTarget(r,2,n),e.render(t,s),e.setRenderTarget(r,3,n),e.render(t,l),e.setRenderTarget(r,4,n),e.render(t,c),r.texture.generateMipmaps=v,e.setRenderTarget(r,5,n),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=_,r.texture.needsPMREMUpdate=!0}}class oh extends Jt{constructor(e,t,r,n,a,o,s,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ri,super(e,t,r,n,a,o,s,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jv extends li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];t.encoding!==void 0&&(wn("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===si?Dt:tr),this.texture=new oh(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:er}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ji(5,5,5),a=new di({name:"CubemapFromEquirect",uniforms:qi(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qt,blending:kr});a.uniforms.tEquirect.value=t;const o=new Vt(n,a),s=t.minFilter;return t.minFilter===mn&&(t.minFilter=er),new Xv(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,r,n){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,r,n);e.setRenderTarget(a)}}const So=new N,qv=new N,Yv=new Ke;class Mr{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=So.subVectors(r,t).cross(qv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(So),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Yv.getNormalMatrix(e),n=this.coplanarPoint(So).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new bn,Ua=new N;class Eo{constructor(e=new Mr,t=new Mr,r=new Mr,n=new Mr,a=new Mr,o=new Mr){this.planes=[e,t,r,n,a,o]}set(e,t,r,n,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(r),s[3].copy(n),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Cr){const r=this.planes,n=e.elements,a=n[0],o=n[1],s=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],m=n[8],_=n[9],v=n[10],f=n[11],p=n[12],S=n[13],w=n[14],A=n[15];if(r[0].setComponents(l-a,d-c,f-m,A-p).normalize(),r[1].setComponents(l+a,d+c,f+m,A+p).normalize(),r[2].setComponents(l+o,d+h,f+_,A+S).normalize(),r[3].setComponents(l-o,d-h,f-_,A-S).normalize(),r[4].setComponents(l-s,d-u,f-v,A-w).normalize(),t===Cr)r[5].setComponents(l+s,d+u,f+v,A+w).normalize();else if(t===da)r[5].setComponents(s,u,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(Ua.x=n.normal.x>0?e.max.x:e.min.x,Ua.y=n.normal.y>0?e.max.y:e.min.y,Ua.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lh(){let i=null,e=!1,t=null,r=null;function n(a,o){t(a,o),r=i.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=i.requestAnimationFrame(n),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Kv(i,e){const t=e.isWebGL2,r=new WeakMap;function n(c,h){const u=c.array,d=c.usage,m=u.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,u,d),c.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function a(c,h,u){const d=h.array,m=h._updateRange,_=h.updateRanges;if(i.bindBuffer(u,c),m.count===-1&&_.length===0&&i.bufferSubData(u,0,d),_.length!==0){for(let v=0,f=_.length;v<f;v++){const p=_[v];t?i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),r.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=r.get(c);h&&(i.deleteBuffer(h.buffer),r.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=r.get(c);(!d||d.version<c.version)&&r.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=r.get(c);if(u===void 0)r.set(c,n(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(u.buffer,c,h),u.version=c.version}}return{get:o,remove:s,update:l}}class Cn extends ir{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const a=e/2,o=t/2,s=Math.floor(r),l=Math.floor(n),c=s+1,h=l+1,u=e/s,d=t/l,m=[],_=[],v=[],f=[];for(let p=0;p<h;p++){const S=p*d-o;for(let w=0;w<c;w++){const A=w*u-a;_.push(A,-S,0),v.push(0,0,1),f.push(w/s),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<s;S++){const w=S+c*p,A=S+c*(p+1),P=S+1+c*(p+1),T=S+1+c*p;m.push(w,A,T),m.push(A,P,T)}this.setIndex(m),this.setAttribute("position",new Lt(_,3)),this.setAttribute("normal",new Lt(v,3)),this.setAttribute("uv",new Lt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Jv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zv=`#ifdef USE_ALPHAHASH
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
#endif`,Qv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$v=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ew=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,tw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rw=`#ifdef USE_AOMAP
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
#endif`,iw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nw=`#ifdef USE_BATCHING
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
#endif`,aw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,sw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ow=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cw=`#ifdef USE_IRIDESCENCE
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
#endif`,hw=`#ifdef USE_BUMPMAP
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
#endif`,uw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_w=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ww=`#define PI 3.141592653589793
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
} // validated`,yw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ew=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rw=`
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
}`,Aw=`#ifdef USE_ENVMAP
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
#endif`,Cw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pw=`#ifdef USE_ENVMAP
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
#endif`,Lw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iw=`#ifdef USE_ENVMAP
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
#endif`,Dw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ow=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fw=`#ifdef USE_GRADIENTMAP
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
}`,zw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kw=`uniform bool receiveShadow;
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
#endif`,Vw=`#ifdef USE_ENVMAP
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
#endif`,Ww=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xw=`varying vec3 vViewPosition;
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
material.specularStrength = specularStrength;`,qw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yw=`PhysicalMaterial material;
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
#endif`,Kw=`struct PhysicalMaterial {
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
}`,Jw=`
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
#endif`,Zw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$w=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ey=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ty=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ry=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,iy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ny=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ay=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sy=`#if defined( USE_POINTS_UV )
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
#endif`,oy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ly=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hy=`#ifdef USE_MORPHNORMALS
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
#endif`,uy=`#ifdef USE_MORPHTARGETS
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
#endif`,dy=`#ifdef USE_MORPHTARGETS
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
#endif`,py=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,my=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_y=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vy=`#ifdef USE_NORMALMAP
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
#endif`,wy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,My=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,by=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ey=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ty=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ry=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ay=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Py=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ly=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Iy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Uy=`float getShadowMask() {
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
}`,Ny=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Oy=`#ifdef USE_SKINNING
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
#endif`,Fy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zy=`#ifdef USE_SKINNING
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
#endif`,By=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ky=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vy=`#ifdef USE_TRANSMISSION
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
#endif`,Wy=`#ifdef USE_TRANSMISSION
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
#endif`,Xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ky=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jy=`uniform sampler2D t2D;
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
}`,Zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ex=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tx=`#include <common>
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
}`,rx=`#if DEPTH_PACKING == 3200
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
}`,ix=`#define DISTANCE
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
}`,nx=`#define DISTANCE
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
}`,ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`uniform float scale;
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
}`,lx=`uniform vec3 diffuse;
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
}`,cx=`#include <common>
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
}`,hx=`uniform vec3 diffuse;
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
}`,ux=`#define LAMBERT
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
}`,dx=`#define LAMBERT
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
}`,px=`#define MATCAP
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
}`,mx=`#define MATCAP
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
}`,fx=`#define NORMAL
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
}`,gx=`#define NORMAL
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
}`,_x=`#define PHONG
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
}`,vx=`#define PHONG
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
}`,wx=`#define STANDARD
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
}`,yx=`#define STANDARD
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
}`,xx=`#define TOON
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
}`,Mx=`#define TOON
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
}`,bx=`uniform float size;
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
}`,Sx=`uniform vec3 diffuse;
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
}`,Ex=`#include <common>
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
}`,Tx=`uniform vec3 color;
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
}`,Rx=`uniform float rotation;
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
}`,Ax=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Jv,alphahash_pars_fragment:Zv,alphamap_fragment:Qv,alphamap_pars_fragment:$v,alphatest_fragment:ew,alphatest_pars_fragment:tw,aomap_fragment:rw,aomap_pars_fragment:iw,batching_pars_vertex:nw,batching_vertex:aw,begin_vertex:sw,beginnormal_vertex:ow,bsdfs:lw,iridescence_fragment:cw,bumpmap_pars_fragment:hw,clipping_planes_fragment:uw,clipping_planes_pars_fragment:dw,clipping_planes_pars_vertex:pw,clipping_planes_vertex:mw,color_fragment:fw,color_pars_fragment:gw,color_pars_vertex:_w,color_vertex:vw,common:ww,cube_uv_reflection_fragment:yw,defaultnormal_vertex:xw,displacementmap_pars_vertex:Mw,displacementmap_vertex:bw,emissivemap_fragment:Sw,emissivemap_pars_fragment:Ew,colorspace_fragment:Tw,colorspace_pars_fragment:Rw,envmap_fragment:Aw,envmap_common_pars_fragment:Cw,envmap_pars_fragment:Pw,envmap_pars_vertex:Lw,envmap_physical_pars_fragment:Vw,envmap_vertex:Iw,fog_vertex:Dw,fog_pars_vertex:Uw,fog_fragment:Nw,fog_pars_fragment:Ow,gradientmap_pars_fragment:Fw,lightmap_fragment:zw,lightmap_pars_fragment:Bw,lights_lambert_fragment:Hw,lights_lambert_pars_fragment:Gw,lights_pars_begin:kw,lights_toon_fragment:Ww,lights_toon_pars_fragment:Xw,lights_phong_fragment:jw,lights_phong_pars_fragment:qw,lights_physical_fragment:Yw,lights_physical_pars_fragment:Kw,lights_fragment_begin:Jw,lights_fragment_maps:Zw,lights_fragment_end:Qw,logdepthbuf_fragment:$w,logdepthbuf_pars_fragment:ey,logdepthbuf_pars_vertex:ty,logdepthbuf_vertex:ry,map_fragment:iy,map_pars_fragment:ny,map_particle_fragment:ay,map_particle_pars_fragment:sy,metalnessmap_fragment:oy,metalnessmap_pars_fragment:ly,morphcolor_vertex:cy,morphnormal_vertex:hy,morphtarget_pars_vertex:uy,morphtarget_vertex:dy,normal_fragment_begin:py,normal_fragment_maps:my,normal_pars_fragment:fy,normal_pars_vertex:gy,normal_vertex:_y,normalmap_pars_fragment:vy,clearcoat_normal_fragment_begin:wy,clearcoat_normal_fragment_maps:yy,clearcoat_pars_fragment:xy,iridescence_pars_fragment:My,opaque_fragment:by,packing:Sy,premultiplied_alpha_fragment:Ey,project_vertex:Ty,dithering_fragment:Ry,dithering_pars_fragment:Ay,roughnessmap_fragment:Cy,roughnessmap_pars_fragment:Py,shadowmap_pars_fragment:Ly,shadowmap_pars_vertex:Iy,shadowmap_vertex:Dy,shadowmask_pars_fragment:Uy,skinbase_vertex:Ny,skinning_pars_vertex:Oy,skinning_vertex:Fy,skinnormal_vertex:zy,specularmap_fragment:By,specularmap_pars_fragment:Hy,tonemapping_fragment:Gy,tonemapping_pars_fragment:ky,transmission_fragment:Vy,transmission_pars_fragment:Wy,uv_pars_fragment:Xy,uv_pars_vertex:jy,uv_vertex:qy,worldpos_vertex:Yy,background_vert:Ky,background_frag:Jy,backgroundCube_vert:Zy,backgroundCube_frag:Qy,cube_vert:$y,cube_frag:ex,depth_vert:tx,depth_frag:rx,distanceRGBA_vert:ix,distanceRGBA_frag:nx,equirect_vert:ax,equirect_frag:sx,linedashed_vert:ox,linedashed_frag:lx,meshbasic_vert:cx,meshbasic_frag:hx,meshlambert_vert:ux,meshlambert_frag:dx,meshmatcap_vert:px,meshmatcap_frag:mx,meshnormal_vert:fx,meshnormal_frag:gx,meshphong_vert:_x,meshphong_frag:vx,meshphysical_vert:wx,meshphysical_frag:yx,meshtoon_vert:xx,meshtoon_frag:Mx,points_vert:bx,points_frag:Sx,shadow_vert:Ex,shadow_frag:Tx,sprite_vert:Rx,sprite_frag:Ax},ue={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},br={basic:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Wt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Wt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Wt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Wt([ue.points,ue.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Wt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Wt([ue.common,ue.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Wt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Wt([ue.sprite,ue.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Wt([ue.common,ue.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Wt([ue.lights,ue.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};br.physical={uniforms:Wt([br.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Na={r:0,b:0,g:0};function Cx(i,e,t,r,n,a,o){const s=new Ee(0);let l=a===!0?0:1,c,h,u=null,d=0,m=null;function _(f,p){let S=!1,w=p.isScene===!0?p.background:null;w&&w.isTexture&&(w=(p.backgroundBlurriness>0?t:e).get(w)),w===null?v(s,l):w&&w.isColor&&(v(w,1),S=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?r.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),w&&(w.isCubeTexture||w.mapping===sa)?(h===void 0&&(h=new Vt(new ji(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:qi(br.backgroundCube.uniforms),vertexShader:br.backgroundCube.vertexShader,fragmentShader:br.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ot.getTransfer(w.colorSpace)!==ut,(u!==w||d!==w.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,m=i.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Vt(new Cn(2,2),new di({name:"BackgroundMaterial",uniforms:qi(br.background.uniforms),vertexShader:br.background.vertexShader,fragmentShader:br.background.fragmentShader,side:Gr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ot.getTransfer(w.colorSpace)!==ut,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=w,d=w.version,m=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function v(f,p){f.getRGB(Na,ah(i)),r.buffers.color.setClear(Na.r,Na.g,Na.b,p,o)}return{getClearColor:function(){return s},setClearColor:function(f,p=1){s.set(f),l=p,v(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,v(s,l)},render:_}}function Px(i,e,t,r){const n=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=r.isWebGL2?null:e.get("OES_vertex_array_object"),o=r.isWebGL2||a!==null,s={},l=f(null);let c=l,h=!1;function u(D,z,Y,Z,J){let K=!1;if(o){const te=v(Z,Y,z);c!==te&&(c=te,m(c.object)),K=p(D,Z,Y,J),K&&S(D,Z,Y,J)}else{const te=z.wireframe===!0;(c.geometry!==Z.id||c.program!==Y.id||c.wireframe!==te)&&(c.geometry=Z.id,c.program=Y.id,c.wireframe=te,K=!0)}J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,k(D,z,Y,Z),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function d(){return r.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function m(D){return r.isWebGL2?i.bindVertexArray(D):a.bindVertexArrayOES(D)}function _(D){return r.isWebGL2?i.deleteVertexArray(D):a.deleteVertexArrayOES(D)}function v(D,z,Y){const Z=Y.wireframe===!0;let J=s[D.id];J===void 0&&(J={},s[D.id]=J);let K=J[z.id];K===void 0&&(K={},J[z.id]=K);let te=K[Z];return te===void 0&&(te=f(d()),K[Z]=te),te}function f(D){const z=[],Y=[],Z=[];for(let J=0;J<n;J++)z[J]=0,Y[J]=0,Z[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Y,attributeDivisors:Z,object:D,attributes:{},index:null}}function p(D,z,Y,Z){const J=c.attributes,K=z.attributes;let te=0;const ne=Y.getAttributes();for(const pe in ne)if(ne[pe].location>=0){const X=J[pe];let ee=K[pe];if(ee===void 0&&(pe==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),pe==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),X===void 0||X.attribute!==ee||ee&&X.data!==ee.data)return!0;te++}return c.attributesNum!==te||c.index!==Z}function S(D,z,Y,Z){const J={},K=z.attributes;let te=0;const ne=Y.getAttributes();for(const pe in ne)if(ne[pe].location>=0){let X=K[pe];X===void 0&&(pe==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),pe==="instanceColor"&&D.instanceColor&&(X=D.instanceColor));const ee={};ee.attribute=X,X&&X.data&&(ee.data=X.data),J[pe]=ee,te++}c.attributes=J,c.attributesNum=te,c.index=Z}function w(){const D=c.newAttributes;for(let z=0,Y=D.length;z<Y;z++)D[z]=0}function A(D){P(D,0)}function P(D,z){const Y=c.newAttributes,Z=c.enabledAttributes,J=c.attributeDivisors;Y[D]=1,Z[D]===0&&(i.enableVertexAttribArray(D),Z[D]=1),J[D]!==z&&((r.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,z),J[D]=z)}function T(){const D=c.newAttributes,z=c.enabledAttributes;for(let Y=0,Z=z.length;Y<Z;Y++)z[Y]!==D[Y]&&(i.disableVertexAttribArray(Y),z[Y]=0)}function R(D,z,Y,Z,J,K,te){te===!0?i.vertexAttribIPointer(D,z,Y,J,K):i.vertexAttribPointer(D,z,Y,Z,J,K)}function k(D,z,Y,Z){if(r.isWebGL2===!1&&(D.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const J=Z.attributes,K=Y.getAttributes(),te=z.defaultAttributeValues;for(const ne in K){const pe=K[ne];if(pe.location>=0){let X=J[ne];if(X===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(X=D.instanceColor)),X!==void 0){const ee=X.normalized,ve=X.itemSize,we=t.get(X);if(we===void 0)continue;const ye=we.buffer,De=we.type,Ue=we.bytesPerElement,Re=r.isWebGL2===!0&&(De===i.INT||De===i.UNSIGNED_INT||X.gpuType===Zl);if(X.isInterleavedBufferAttribute){const Ge=X.data,V=Ge.stride,dt=X.offset;if(Ge.isInstancedInterleavedBuffer){for(let Se=0;Se<pe.locationSize;Se++)P(pe.location+Se,Ge.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ge.meshPerAttribute*Ge.count)}else for(let Se=0;Se<pe.locationSize;Se++)A(pe.location+Se);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let Se=0;Se<pe.locationSize;Se++)R(pe.location+Se,ve/pe.locationSize,De,ee,V*Ue,(dt+ve/pe.locationSize*Se)*Ue,Re)}else{if(X.isInstancedBufferAttribute){for(let Ge=0;Ge<pe.locationSize;Ge++)P(pe.location+Ge,X.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Ge=0;Ge<pe.locationSize;Ge++)A(pe.location+Ge);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let Ge=0;Ge<pe.locationSize;Ge++)R(pe.location+Ge,ve/pe.locationSize,De,ee,ve*Ue,ve/pe.locationSize*Ge*Ue,Re)}}else if(te!==void 0){const ee=te[ne];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(pe.location,ee);break;case 3:i.vertexAttrib3fv(pe.location,ee);break;case 4:i.vertexAttrib4fv(pe.location,ee);break;default:i.vertexAttrib1fv(pe.location,ee)}}}}T()}function x(){F();for(const D in s){const z=s[D];for(const Y in z){const Z=z[Y];for(const J in Z)_(Z[J].object),delete Z[J];delete z[Y]}delete s[D]}}function b(D){if(s[D.id]===void 0)return;const z=s[D.id];for(const Y in z){const Z=z[Y];for(const J in Z)_(Z[J].object),delete Z[J];delete z[Y]}delete s[D.id]}function U(D){for(const z in s){const Y=s[z];if(Y[D.id]===void 0)continue;const Z=Y[D.id];for(const J in Z)_(Z[J].object),delete Z[J];delete Y[D.id]}}function F(){Q(),h=!0,c!==l&&(c=l,m(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:F,resetDefaultState:Q,dispose:x,releaseStatesOfGeometry:b,releaseStatesOfProgram:U,initAttributes:w,enableAttribute:A,disableUnusedAttributes:T}}function Lx(i,e,t,r){const n=r.isWebGL2;let a;function o(h){a=h}function s(h,u){i.drawArrays(a,h,u),t.update(u,a,1)}function l(h,u,d){if(d===0)return;let m,_;if(n)m=i,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](a,h,u,d),t.update(u,a,d)}function c(h,u,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<d;_++)this.render(h[_],u[_]);else{m.multiDrawArraysWEBGL(a,h,0,u,0,d);let _=0;for(let v=0;v<d;v++)_+=u[v];t.update(_,a,1)}}this.setMode=o,this.render=s,this.renderInstances=l,this.renderMultiDraw=c}function Ix(i,e,t){let r;function n(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=d>0,A=o||e.has("OES_texture_float"),P=w&&A,T=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:w,floatFragmentTextures:A,floatVertexTextures:P,maxSamples:T}}function Dx(i){const e=this;let t=null,r=0,n=!1,a=!1;const o=new Mr,s=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||r!==0||n;return n=d,r=u.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){const _=u.clippingPlanes,v=u.clipIntersection,f=u.clipShadows,p=i.get(u);if(!n||_===null||_.length===0||a&&!f)a?h(null):c();else{const S=a?0:r,w=S*4;let A=p.clippingState||null;l.value=A,A=h(_,d,w,m);for(let P=0;P!==w;++P)A[P]=t[P];p.clippingState=A,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function h(u,d,m,_){const v=u!==null?u.length:0;let f=null;if(v!==0){if(f=l.value,_!==!0||f===null){const p=m+v*4,S=d.matrixWorldInverse;s.getNormalMatrix(S),(f===null||f.length<p)&&(f=new Float32Array(p));for(let w=0,A=m;w!==v;++w,A+=4)o.copy(u[w]).applyMatrix4(S,s),o.normal.toArray(f,A),f[A+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}function Ux(i){let e=new WeakMap;function t(o,s){return s===Ws?o.mapping=Ri:s===Xs&&(o.mapping=Ai),o}function r(o){if(o&&o.isTexture){const s=o.mapping;if(s===Ws||s===Xs)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new jv(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){const s=o.target;s.removeEventListener("dispose",n);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}class ch extends sh{constructor(e=-1,t=1,r=1,n=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=r-e,o=r+e,s=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=h*this.view.offsetY,l=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ji=4,hh=[.125,.215,.35,.446,.526,.582],mi=20,To=new ch,uh=new Ee;let Ro=null,Ao=0,Co=0;const fi=(1+Math.sqrt(5))/2,Zi=1/fi,dh=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,fi,Zi),new N(0,fi,-Zi),new N(Zi,0,fi),new N(-Zi,0,fi),new N(fi,Zi,0),new N(-fi,Zi,0)];class ph{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100){Ro=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,n,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ro,Ao,Co),e.scissorTest=!1,Oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ri||e.mapping===Ai?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ro=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:er,minFilter:er,generateMipmaps:!1,type:fn,format:dr,colorSpace:Ar,depthBuffer:!1},n=mh(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mh(e,t,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nx(a)),this._blurMaterial=Ox(a,e,t)}return n}_compileMaterial(e){const t=new Vt(this._lodPlanes[0],e);this._renderer.compile(t,To)}_sceneToCubeUV(e,t,r,n){const a=new nr(90,1,t,r),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(uh),l.toneMapping=Vr,l.autoClear=!1;const u=new Rn({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),d=new Vt(new ji,u);let m=!1;const _=e.background;_?_.isColor&&(u.color.copy(_),e.background=null,m=!0):(u.color.copy(uh),m=!0);for(let v=0;v<6;v++){const f=v%3;f===0?(a.up.set(0,o[v],0),a.lookAt(s[v],0,0)):f===1?(a.up.set(0,0,o[v]),a.lookAt(0,s[v],0)):(a.up.set(0,o[v],0),a.lookAt(0,0,s[v]));const p=this._cubeSize;Oa(n,f*p,v>2?p:0,p,p),l.setRenderTarget(n),m&&l.render(d,a),l.render(e,a)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=_}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===Ri||e.mapping===Ai;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fh());const a=n?this._cubemapMaterial:this._equirectMaterial,o=new Vt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;Oa(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(o,To)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=dh[(n-1)%dh.length];this._blur(e,n-1,n,a,o)}t.autoClear=r}_blur(e,t,r,n,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,r,n,"latitudinal",a),this._halfBlur(o,e,r,r,n,"longitudinal",a)}_halfBlur(e,t,r,n,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Vt(this._lodPlanes[n],c),d=c.uniforms,m=this._sizeLods[r]-1,_=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*mi-1),v=a/_,f=isFinite(a)?1+Math.floor(h*v):mi;f>mi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${mi}`);const p=[];let S=0;for(let R=0;R<mi;++R){const k=R/v,x=Math.exp(-k*k/2);p.push(x),R===0?S+=x:R<f&&(S+=2*x)}for(let R=0;R<p.length;R++)p[R]=p[R]/S;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=o==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:w}=this;d.dTheta.value=_,d.mipInt.value=w-r;const A=this._sizeLods[n],P=3*A*(n>w-Ji?n-w+Ji:0),T=4*(this._cubeSize-A);Oa(t,P,T,3*A,2*A),l.setRenderTarget(t),l.render(u,To)}}function Nx(i){const e=[],t=[],r=[];let n=i;const a=i-Ji+1+hh.length;for(let o=0;o<a;o++){const s=Math.pow(2,n);t.push(s);let l=1/s;o>i-Ji?l=hh[o-i+Ji-1]:o===0&&(l=0),r.push(l);const c=1/(s-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,v=3,f=2,p=1,S=new Float32Array(v*_*m),w=new Float32Array(f*_*m),A=new Float32Array(p*_*m);for(let T=0;T<m;T++){const R=T%3*2/3-1,k=T>2?0:-1,x=[R,k,0,R+2/3,k,0,R+2/3,k+1,0,R,k,0,R+2/3,k+1,0,R,k+1,0];S.set(x,v*_*T),w.set(d,f*_*T);const b=[T,T,T,T,T,T];A.set(b,p*_*T)}const P=new ir;P.setAttribute("position",new kt(S,v)),P.setAttribute("uv",new kt(w,f)),P.setAttribute("faceIndex",new kt(A,p)),e.push(P),n>Ji&&n--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function mh(i,e,t){const r=new li(i,e,t);return r.texture.mapping=sa,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Oa(i,e,t,r,n){i.viewport.set(e,t,r,n),i.scissor.set(e,t,r,n)}function Ox(i,e,t){const r=new Float32Array(mi),n=new N(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Po(),fragmentShader:`

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
		`,blending:kr,depthTest:!1,depthWrite:!1})}function fh(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Po(),fragmentShader:`

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
		`,blending:kr,depthTest:!1,depthWrite:!1})}function gh(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function Po(){return`

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
	`}function Fx(i){let e=new WeakMap,t=null;function r(s){if(s&&s.isTexture){const l=s.mapping,c=l===Ws||l===Xs,h=l===Ri||l===Ai;if(c||h)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let u=e.get(s);return t===null&&(t=new ph(i)),u=c?t.fromEquirectangular(s,u):t.fromCubemap(s,u),e.set(s,u),u.texture}else{if(e.has(s))return e.get(s).texture;{const u=s.image;if(c&&u&&u.height>0||h&&u&&n(u)){t===null&&(t=new ph(i));const d=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,d),s.addEventListener("dispose",a),d.texture}else return null}}}return s}function n(s){let l=0;const c=6;for(let h=0;h<c;h++)s[h]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:o}}function zx(i){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=i.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const n=t(r);return n===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function Bx(i,e,t,r){const n={},a=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const v=d.morphAttributes[_];for(let f=0,p=v.length;f<p;f++)e.remove(v[f])}d.removeEventListener("dispose",o),delete n[d.id];const m=a.get(d);m&&(e.remove(m),a.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function s(u,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)e.update(d[_],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const _ in m){const v=m[_];for(let f=0,p=v.length;f<p;f++)e.update(v[f],i.ARRAY_BUFFER)}}function c(u){const d=[],m=u.index,_=u.attributes.position;let v=0;if(m!==null){const S=m.array;v=m.version;for(let w=0,A=S.length;w<A;w+=3){const P=S[w+0],T=S[w+1],R=S[w+2];d.push(P,T,T,R,R,P)}}else if(_!==void 0){const S=_.array;v=_.version;for(let w=0,A=S.length/3-1;w<A;w+=3){const P=w+0,T=w+1,R=w+2;d.push(P,T,T,R,R,P)}}else return;const f=new(Oc(d)?$c:Qc)(d,1);f.version=v;const p=a.get(u);p&&e.remove(p),a.set(u,f)}function h(u){const d=a.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return a.get(u)}return{get:s,update:l,getWireframeAttribute:h}}function Hx(i,e,t,r){const n=r.isWebGL2;let a;function o(m){a=m}let s,l;function c(m){s=m.type,l=m.bytesPerElement}function h(m,_){i.drawElements(a,_,s,m*l),t.update(_,a,1)}function u(m,_,v){if(v===0)return;let f,p;if(n)f=i,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](a,_,s,m*l,v),t.update(_,a,v)}function d(m,_,v){if(v===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<v;p++)this.render(m[p]/l,_[p]);else{f.multiDrawElementsWEBGL(a,_,0,s,m,0,v);let p=0;for(let S=0;S<v;S++)p+=_[S];t.update(p,a,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Gx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,o,s){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=s*(a/3);break;case i.LINES:t.lines+=s*(a/2);break;case i.LINE_STRIP:t.lines+=s*(a-1);break;case i.LINE_LOOP:t.lines+=s*a;break;case i.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function kx(i,e){return i[0]-e[0]}function Vx(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Wx(i,e,t){const r={},n=new Float32Array(8),a=new WeakMap,o=new Ct,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=m!==void 0?m.length:0;let v=a.get(h);if(v===void 0||v.count!==_){let S=function(){Q.dispose(),a.delete(h),h.removeEventListener("dispose",S)};v!==void 0&&v.texture.dispose();const w=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,P=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],k=h.morphAttributes.color||[];let x=0;w===!0&&(x=1),A===!0&&(x=2),P===!0&&(x=3);let b=h.attributes.position.count*x,U=1;b>e.maxTextureSize&&(U=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const F=new Float32Array(b*U*4*_),Q=new kc(F,b,U,_);Q.type=jr,Q.needsUpdate=!0;const D=x*4;for(let z=0;z<_;z++){const Y=T[z],Z=R[z],J=k[z],K=b*U*4*z;for(let te=0;te<Y.count;te++){const ne=te*D;w===!0&&(o.fromBufferAttribute(Y,te),F[K+ne+0]=o.x,F[K+ne+1]=o.y,F[K+ne+2]=o.z,F[K+ne+3]=0),A===!0&&(o.fromBufferAttribute(Z,te),F[K+ne+4]=o.x,F[K+ne+5]=o.y,F[K+ne+6]=o.z,F[K+ne+7]=0),P===!0&&(o.fromBufferAttribute(J,te),F[K+ne+8]=o.x,F[K+ne+9]=o.y,F[K+ne+10]=o.z,F[K+ne+11]=J.itemSize===4?o.w:1)}}v={count:_,texture:Q,size:new Ie(b,U)},a.set(h,v),h.addEventListener("dispose",S)}let f=0;for(let S=0;S<d.length;S++)f+=d[S];const p=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{const m=d===void 0?0:d.length;let _=r[h.id];if(_===void 0||_.length!==m){_=[];for(let w=0;w<m;w++)_[w]=[w,0];r[h.id]=_}for(let w=0;w<m;w++){const A=_[w];A[0]=w,A[1]=d[w]}_.sort(Vx);for(let w=0;w<8;w++)w<m&&_[w][1]?(s[w][0]=_[w][0],s[w][1]=_[w][1]):(s[w][0]=Number.MAX_SAFE_INTEGER,s[w][1]=0);s.sort(kx);const v=h.morphAttributes.position,f=h.morphAttributes.normal;let p=0;for(let w=0;w<8;w++){const A=s[w],P=A[0],T=A[1];P!==Number.MAX_SAFE_INTEGER&&T?(v&&h.getAttribute("morphTarget"+w)!==v[P]&&h.setAttribute("morphTarget"+w,v[P]),f&&h.getAttribute("morphNormal"+w)!==f[P]&&h.setAttribute("morphNormal"+w,f[P]),n[w]=T,p+=T):(v&&h.hasAttribute("morphTarget"+w)===!0&&h.deleteAttribute("morphTarget"+w),f&&h.hasAttribute("morphNormal"+w)===!0&&h.deleteAttribute("morphNormal"+w),n[w]=0)}const S=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",S),u.getUniforms().setValue(i,"morphTargetInfluences",n)}}return{update:l}}function Xx(i,e,t,r){let n=new WeakMap;function a(l){const c=r.render.frame,h=l.geometry,u=e.get(l,h);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),n.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function o(){n=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}class _h extends Jt{constructor(e,t,r,n,a,o,s,l,c,h){if(h=h!==void 0?h:ai,h!==ai&&h!==Ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&h===ai&&(r=Xr),r===void 0&&h===Ci&&(r=ni),super(null,n,a,o,s,l,h,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Ht,this.minFilter=l!==void 0?l:Ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const vh=new Jt,wh=new _h(1,1);wh.compareFunction=Ic;const yh=new kc,xh=new Cv,Mh=new oh,bh=[],Sh=[],Eh=new Float32Array(16),Th=new Float32Array(9),Rh=new Float32Array(4);function Qi(i,e,t){const r=i[0];if(r<=0||r>0)return i;const n=e*t;let a=bh[n];if(a===void 0&&(a=new Float32Array(n),bh[n]=a),e!==0){r.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,i[o].toArray(a,s)}return a}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function Fa(i,e){let t=Sh[e];t===void 0&&(t=new Int32Array(e),Sh[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function jx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function qx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function Yx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function Kx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function Jx(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,r))return;Rh.set(r),i.uniformMatrix2fv(this.addr,!1,Rh),Tt(t,r)}}function Zx(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,r))return;Th.set(r),i.uniformMatrix3fv(this.addr,!1,Th),Tt(t,r)}}function Qx(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,r))return;Eh.set(r),i.uniformMatrix4fv(this.addr,!1,Eh),Tt(t,r)}}function $x(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function eM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function tM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function rM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function iM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function nM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function aM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function sM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function oM(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n);const a=this.type===i.SAMPLER_2D_SHADOW?wh:vh;t.setTexture2D(e||a,n)}function lM(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||xh,n)}function cM(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||Mh,n)}function hM(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||yh,n)}function uM(i){switch(i){case 5126:return jx;case 35664:return qx;case 35665:return Yx;case 35666:return Kx;case 35674:return Jx;case 35675:return Zx;case 35676:return Qx;case 5124:case 35670:return $x;case 35667:case 35671:return eM;case 35668:case 35672:return tM;case 35669:case 35673:return rM;case 5125:return iM;case 36294:return nM;case 36295:return aM;case 36296:return sM;case 35678:case 36198:case 36298:case 36306:case 35682:return oM;case 35679:case 36299:case 36307:return lM;case 35680:case 36300:case 36308:case 36293:return cM;case 36289:case 36303:case 36311:case 36292:return hM}}function dM(i,e){i.uniform1fv(this.addr,e)}function pM(i,e){const t=Qi(e,this.size,2);i.uniform2fv(this.addr,t)}function mM(i,e){const t=Qi(e,this.size,3);i.uniform3fv(this.addr,t)}function fM(i,e){const t=Qi(e,this.size,4);i.uniform4fv(this.addr,t)}function gM(i,e){const t=Qi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _M(i,e){const t=Qi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function vM(i,e){const t=Qi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function wM(i,e){i.uniform1iv(this.addr,e)}function yM(i,e){i.uniform2iv(this.addr,e)}function xM(i,e){i.uniform3iv(this.addr,e)}function MM(i,e){i.uniform4iv(this.addr,e)}function bM(i,e){i.uniform1uiv(this.addr,e)}function SM(i,e){i.uniform2uiv(this.addr,e)}function EM(i,e){i.uniform3uiv(this.addr,e)}function TM(i,e){i.uniform4uiv(this.addr,e)}function RM(i,e,t){const r=this.cache,n=e.length,a=Fa(t,n);Et(r,a)||(i.uniform1iv(this.addr,a),Tt(r,a));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||vh,a[o])}function AM(i,e,t){const r=this.cache,n=e.length,a=Fa(t,n);Et(r,a)||(i.uniform1iv(this.addr,a),Tt(r,a));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||xh,a[o])}function CM(i,e,t){const r=this.cache,n=e.length,a=Fa(t,n);Et(r,a)||(i.uniform1iv(this.addr,a),Tt(r,a));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||Mh,a[o])}function PM(i,e,t){const r=this.cache,n=e.length,a=Fa(t,n);Et(r,a)||(i.uniform1iv(this.addr,a),Tt(r,a));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||yh,a[o])}function LM(i){switch(i){case 5126:return dM;case 35664:return pM;case 35665:return mM;case 35666:return fM;case 35674:return gM;case 35675:return _M;case 35676:return vM;case 5124:case 35670:return wM;case 35667:case 35671:return yM;case 35668:case 35672:return xM;case 35669:case 35673:return MM;case 5125:return bM;case 36294:return SM;case 36295:return EM;case 36296:return TM;case 35678:case 36198:case 36298:case 36306:case 35682:return RM;case 35679:case 36299:case 36307:return AM;case 35680:case 36300:case 36308:case 36293:return CM;case 36289:case 36303:case 36311:case 36292:return PM}}class IM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=uM(t.type)}}class DM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=LM(t.type)}}class UM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let a=0,o=n.length;a!==o;++a){const s=n[a];s.setValue(e,t[s.id],r)}}}const Lo=/(\w+)(\])?(\[|\.)?/g;function Ah(i,e){i.seq.push(e),i.map[e.id]=e}function NM(i,e,t){const r=i.name,n=r.length;for(Lo.lastIndex=0;;){const a=Lo.exec(r),o=Lo.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===n){Ah(t,c===void 0?new IM(s,i,e):new DM(s,i,e));break}else{let h=t.map[s];h===void 0&&(h=new UM(s),Ah(t,h)),t=h}}}class za{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){const a=e.getActiveUniform(t,n),o=e.getUniformLocation(t,a.name);NM(a,o,this)}}setValue(e,t,r,n){const a=this.map[t];a!==void 0&&a.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=r[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,a=e.length;n!==a;++n){const o=e[n];o.id in t&&r.push(o)}return r}}function Ch(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const OM=37297;let FM=0;function zM(i,e){const t=i.split(`
`),r=[],n=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=n;o<a;o++){const s=o+1;r.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return r.join(`
`)}function BM(i){const e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(i);let r;switch(e===t?r="":e===ha&&t===ca?r="LinearDisplayP3ToLinearSRGB":e===ca&&t===ha&&(r="LinearSRGBToLinearDisplayP3"),i){case Ar:case oa:return[r,"LinearTransferOETF"];case Dt:case to:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[r,"LinearTransferOETF"]}}function Ph(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),n=i.getShaderInfoLog(e).trim();if(r&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+n+`

`+zM(i.getShaderSource(e),o)}else return n}function HM(i,e){const t=BM(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function GM(i,e){let t;switch(e){case z0:t="Linear";break;case B0:t="Reinhard";break;case H0:t="OptimizedCineon";break;case G0:t="ACESFilmic";break;case V0:t="AgX";break;case k0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function kM(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($i).join(`
`)}function VM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter($i).join(`
`)}function WM(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function XM(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const a=i.getActiveAttrib(e,n),o=a.name;let s=1;a.type===i.FLOAT_MAT2&&(s=2),a.type===i.FLOAT_MAT3&&(s=3),a.type===i.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:i.getAttribLocation(e,o),locationSize:s}}return t}function $i(i){return i!==""}function Lh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ih(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Io(i){return i.replace(jM,YM)}const qM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function YM(i,e){let t=Xe[e];if(t===void 0){const r=qM.get(e);if(r!==void 0)t=Xe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Io(t)}const KM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dh(i){return i.replace(KM,JM)}function JM(i,e,t,r){let n="";for(let a=parseInt(e);a<parseInt(t);a++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function Uh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ZM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Gl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===kl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Rr&&(e="SHADOWMAP_TYPE_VSM"),e}function QM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ri:case Ai:e="ENVMAP_TYPE_CUBE";break;case sa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $M(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ai:e="ENVMAP_MODE_REFRACTION";break}return e}function eb(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Yl:e="ENVMAP_BLENDING_MULTIPLY";break;case O0:e="ENVMAP_BLENDING_MIX";break;case F0:e="ENVMAP_BLENDING_ADD";break}return e}function tb(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function rb(i,e,t,r){const n=i.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=ZM(t),c=QM(t),h=$M(t),u=eb(t),d=tb(t),m=t.isWebGL2?"":kM(t),_=VM(t),v=WM(a),f=n.createProgram();let p,S,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter($i).join(`
`),p.length>0&&(p+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter($i).join(`
`),S.length>0&&(S+=`
`)):(p=[Uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($i).join(`
`),S=[m,Uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vr?"#define TONE_MAPPING":"",t.toneMapping!==Vr?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Vr?GM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,HM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($i).join(`
`)),o=Io(o),o=Lh(o,t),o=Ih(o,t),s=Io(s),s=Lh(s,t),s=Ih(s,t),o=Dh(o),s=Dh(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const A=w+p+o,P=w+S+s,T=Ch(n,n.VERTEX_SHADER,A),R=Ch(n,n.FRAGMENT_SHADER,P);n.attachShader(f,T),n.attachShader(f,R),t.index0AttributeName!==void 0?n.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(f,0,"position"),n.linkProgram(f);function k(F){if(i.debug.checkShaderErrors){const Q=n.getProgramInfoLog(f).trim(),D=n.getShaderInfoLog(T).trim(),z=n.getShaderInfoLog(R).trim();let Y=!0,Z=!0;if(n.getProgramParameter(f,n.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(n,f,T,R);else{const J=Ph(n,T,"vertex"),K=Ph(n,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(f,n.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+J+`
`+K)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(D===""||z==="")&&(Z=!1);Z&&(F.diagnostics={runnable:Y,programLog:Q,vertexShader:{log:D,prefix:p},fragmentShader:{log:z,prefix:S}})}n.deleteShader(T),n.deleteShader(R),x=new za(n,f),b=XM(n,f)}let x;this.getUniforms=function(){return x===void 0&&k(this),x};let b;this.getAttributes=function(){return b===void 0&&k(this),b};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=n.getProgramParameter(f,OM)),U},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=FM++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=T,this.fragmentShader=R,this}let ib=0;class nb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),a=this._getShaderStage(r),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new ab(e),t.set(e,r)),r}}class ab{constructor(e){this.id=ib++,this.code=e,this.usedTimes=0}}function sb(i,e,t,r,n,a,o){const s=new go,l=new nb,c=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures;let m=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return x===0?"uv":`uv${x}`}function f(x,b,U,F,Q){const D=F.fog,z=Q.geometry,Y=x.isMeshStandardMaterial?F.environment:null,Z=(x.isMeshStandardMaterial?t:e).get(x.envMap||Y),J=Z&&Z.mapping===sa?Z.image.height:null,K=_[x.type];x.precision!==null&&(m=n.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const te=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ne=te!==void 0?te.length:0;let pe=0;z.morphAttributes.position!==void 0&&(pe=1),z.morphAttributes.normal!==void 0&&(pe=2),z.morphAttributes.color!==void 0&&(pe=3);let X,ee,ve,we;if(K){const Mt=br[K];X=Mt.vertexShader,ee=Mt.fragmentShader}else X=x.vertexShader,ee=x.fragmentShader,l.update(x),ve=l.getVertexShaderID(x),we=l.getFragmentShaderID(x);const ye=i.getRenderTarget(),De=Q.isInstancedMesh===!0,Ue=Q.isBatchedMesh===!0,Re=!!x.map,Ge=!!x.matcap,V=!!Z,dt=!!x.aoMap,Se=!!x.lightMap,Ne=!!x.bumpMap,xe=!!x.normalMap,at=!!x.displacementMap,ze=!!x.emissiveMap,E=!!x.metalnessMap,y=!!x.roughnessMap,G=x.anisotropy>0,se=x.clearcoat>0,re=x.iridescence>0,ie=x.sheen>0,Me=x.transmission>0,de=G&&!!x.anisotropyMap,_e=se&&!!x.clearcoatMap,Ae=se&&!!x.clearcoatNormalMap,Be=se&&!!x.clearcoatRoughnessMap,ae=re&&!!x.iridescenceMap,Qe=re&&!!x.iridescenceThicknessMap,C=ie&&!!x.sheenColorMap,$=ie&&!!x.sheenRoughnessMap,ce=!!x.specularMap,le=!!x.specularColorMap,Te=!!x.specularIntensityMap,ke=Me&&!!x.transmissionMap,tt=Me&&!!x.thicknessMap,Ve=!!x.gradientMap,he=!!x.alphaMap,L=x.alphaTest>0,oe=!!x.alphaHash,ge=!!x.extensions,Oe=!!z.attributes.uv1,Ce=!!z.attributes.uv2,it=!!z.attributes.uv3;let ct=Vr;return x.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(ct=i.toneMapping),{isWebGL2:h,shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:X,fragmentShader:ee,defines:x.defines,customVertexShaderID:ve,customFragmentShaderID:we,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:Ue,instancing:De,instancingColor:De&&Q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ye===null?i.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Ar,map:Re,matcap:Ge,envMap:V,envMapMode:V&&Z.mapping,envMapCubeUVHeight:J,aoMap:dt,lightMap:Se,bumpMap:Ne,normalMap:xe,displacementMap:d&&at,emissiveMap:ze,normalMapObjectSpace:xe&&x.normalMapType===tv,normalMapTangentSpace:xe&&x.normalMapType===Pc,metalnessMap:E,roughnessMap:y,anisotropy:G,anisotropyMap:de,clearcoat:se,clearcoatMap:_e,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Be,iridescence:re,iridescenceMap:ae,iridescenceThicknessMap:Qe,sheen:ie,sheenColorMap:C,sheenRoughnessMap:$,specularMap:ce,specularColorMap:le,specularIntensityMap:Te,transmission:Me,transmissionMap:ke,thicknessMap:tt,gradientMap:Ve,opaque:x.transparent===!1&&x.blending===Ti,alphaMap:he,alphaTest:L,alphaHash:oe,combine:x.combine,mapUv:Re&&v(x.map.channel),aoMapUv:dt&&v(x.aoMap.channel),lightMapUv:Se&&v(x.lightMap.channel),bumpMapUv:Ne&&v(x.bumpMap.channel),normalMapUv:xe&&v(x.normalMap.channel),displacementMapUv:at&&v(x.displacementMap.channel),emissiveMapUv:ze&&v(x.emissiveMap.channel),metalnessMapUv:E&&v(x.metalnessMap.channel),roughnessMapUv:y&&v(x.roughnessMap.channel),anisotropyMapUv:de&&v(x.anisotropyMap.channel),clearcoatMapUv:_e&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:C&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:$&&v(x.sheenRoughnessMap.channel),specularMapUv:ce&&v(x.specularMap.channel),specularColorMapUv:le&&v(x.specularColorMap.channel),specularIntensityMapUv:Te&&v(x.specularIntensityMap.channel),transmissionMapUv:ke&&v(x.transmissionMap.channel),thicknessMapUv:tt&&v(x.thicknessMap.channel),alphaMapUv:he&&v(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(xe||G),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:Oe,vertexUv2s:Ce,vertexUv3s:it,pointsUvs:Q.isPoints===!0&&!!z.attributes.uv&&(Re||he),fog:!!D,useFog:x.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Q.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:pe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:ct,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Re&&x.map.isVideoTexture===!0&&ot.getTransfer(x.map.colorSpace)===ut,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===hr,flipSided:x.side===qt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ge&&x.extensions.derivatives===!0,extensionFragDepth:ge&&x.extensions.fragDepth===!0,extensionDrawBuffers:ge&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ge&&x.extensions.clipCullDistance&&r.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)b.push(U),b.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(S(b,x),w(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function S(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function w(x,b){s.disableAll(),b.isWebGL2&&s.enable(0),b.supportsVertexTextures&&s.enable(1),b.instancing&&s.enable(2),b.instancingColor&&s.enable(3),b.matcap&&s.enable(4),b.envMap&&s.enable(5),b.normalMapObjectSpace&&s.enable(6),b.normalMapTangentSpace&&s.enable(7),b.clearcoat&&s.enable(8),b.iridescence&&s.enable(9),b.alphaTest&&s.enable(10),b.vertexColors&&s.enable(11),b.vertexAlphas&&s.enable(12),b.vertexUv1s&&s.enable(13),b.vertexUv2s&&s.enable(14),b.vertexUv3s&&s.enable(15),b.vertexTangents&&s.enable(16),b.anisotropy&&s.enable(17),b.alphaHash&&s.enable(18),b.batching&&s.enable(19),x.push(s.mask),s.disableAll(),b.fog&&s.enable(0),b.useFog&&s.enable(1),b.flatShading&&s.enable(2),b.logarithmicDepthBuffer&&s.enable(3),b.skinning&&s.enable(4),b.morphTargets&&s.enable(5),b.morphNormals&&s.enable(6),b.morphColors&&s.enable(7),b.premultipliedAlpha&&s.enable(8),b.shadowMapEnabled&&s.enable(9),b.useLegacyLights&&s.enable(10),b.doubleSided&&s.enable(11),b.flipSided&&s.enable(12),b.useDepthPacking&&s.enable(13),b.dithering&&s.enable(14),b.transmission&&s.enable(15),b.sheen&&s.enable(16),b.opaque&&s.enable(17),b.pointsUvs&&s.enable(18),b.decodeVideoTexture&&s.enable(19),x.push(s.mask)}function A(x){const b=_[x.type];let U;if(b){const F=br[b];U=kv.clone(F.uniforms)}else U=x.uniforms;return U}function P(x,b){let U;for(let F=0,Q=c.length;F<Q;F++){const D=c[F];if(D.cacheKey===b){U=D,++U.usedTimes;break}}return U===void 0&&(U=new rb(i,b,x,a),c.push(U)),U}function T(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),x.destroy()}}function R(x){l.remove(x)}function k(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:A,acquireProgram:P,releaseProgram:T,releaseShaderCache:R,programs:c,dispose:k}}function ob(){let i=new WeakMap;function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function t(a){i.delete(a)}function r(a,o,s){i.get(a)[o]=s}function n(){i=new WeakMap}return{get:e,remove:t,update:r,dispose:n}}function lb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Nh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Oh(){const i=[];let e=0;const t=[],r=[],n=[];function a(){e=0,t.length=0,r.length=0,n.length=0}function o(u,d,m,_,v,f){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:_,renderOrder:u.renderOrder,z:v,group:f},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=v,p.group=f),e++,p}function s(u,d,m,_,v,f){const p=o(u,d,m,_,v,f);m.transmission>0?r.push(p):m.transparent===!0?n.push(p):t.push(p)}function l(u,d,m,_,v,f){const p=o(u,d,m,_,v,f);m.transmission>0?r.unshift(p):m.transparent===!0?n.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||lb),r.length>1&&r.sort(d||Nh),n.length>1&&n.sort(d||Nh)}function h(){for(let u=e,d=i.length;u<d;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:r,transparent:n,init:a,push:s,unshift:l,finish:h,sort:c}}function cb(){let i=new WeakMap;function e(r,n){const a=i.get(r);let o;return a===void 0?(o=new Oh,i.set(r,[o])):n>=a.length?(o=new Oh,a.push(o)):o=a[n],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function hb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ee};break;case"SpotLight":t={position:new N,direction:new N,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function ub(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let db=0;function pb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function mb(i,e){const t=new hb,r=ub(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new N);const a=new N,o=new _t,s=new _t;function l(h,u){let d=0,m=0,_=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let v=0,f=0,p=0,S=0,w=0,A=0,P=0,T=0,R=0,k=0,x=0;h.sort(pb);const b=u===!0?Math.PI:1;for(let F=0,Q=h.length;F<Q;F++){const D=h[F],z=D.color,Y=D.intensity,Z=D.distance,J=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=z.r*Y*b,m+=z.g*Y*b,_+=z.b*Y*b;else if(D.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(D.sh.coefficients[K],Y);x++}else if(D.isDirectionalLight){const K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity*b),D.castShadow){const te=D.shadow,ne=r.get(D);ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,n.directionalShadow[v]=ne,n.directionalShadowMap[v]=J,n.directionalShadowMatrix[v]=D.shadow.matrix,A++}n.directional[v]=K,v++}else if(D.isSpotLight){const K=t.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(z).multiplyScalar(Y*b),K.distance=Z,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,n.spot[p]=K;const te=D.shadow;if(D.map&&(n.spotLightMap[R]=D.map,R++,te.updateMatrices(D),D.castShadow&&k++),n.spotLightMatrix[p]=te.matrix,D.castShadow){const ne=r.get(D);ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,n.spotShadow[p]=ne,n.spotShadowMap[p]=J,T++}p++}else if(D.isRectAreaLight){const K=t.get(D);K.color.copy(z).multiplyScalar(Y),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),n.rectArea[S]=K,S++}else if(D.isPointLight){const K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity*b),K.distance=D.distance,K.decay=D.decay,D.castShadow){const te=D.shadow,ne=r.get(D);ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,ne.shadowCameraNear=te.camera.near,ne.shadowCameraFar=te.camera.far,n.pointShadow[f]=ne,n.pointShadowMap[f]=J,n.pointShadowMatrix[f]=D.shadow.matrix,P++}n.point[f]=K,f++}else if(D.isHemisphereLight){const K=t.get(D);K.skyColor.copy(D.color).multiplyScalar(Y*b),K.groundColor.copy(D.groundColor).multiplyScalar(Y*b),n.hemi[w]=K,w++}}S>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=_;const U=n.hash;(U.directionalLength!==v||U.pointLength!==f||U.spotLength!==p||U.rectAreaLength!==S||U.hemiLength!==w||U.numDirectionalShadows!==A||U.numPointShadows!==P||U.numSpotShadows!==T||U.numSpotMaps!==R||U.numLightProbes!==x)&&(n.directional.length=v,n.spot.length=p,n.rectArea.length=S,n.point.length=f,n.hemi.length=w,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=T+R-k,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=k,n.numLightProbes=x,U.directionalLength=v,U.pointLength=f,U.spotLength=p,U.rectAreaLength=S,U.hemiLength=w,U.numDirectionalShadows=A,U.numPointShadows=P,U.numSpotShadows=T,U.numSpotMaps=R,U.numLightProbes=x,n.version=db++)}function c(h,u){let d=0,m=0,_=0,v=0,f=0;const p=u.matrixWorldInverse;for(let S=0,w=h.length;S<w;S++){const A=h[S];if(A.isDirectionalLight){const P=n.directional[d];P.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(p),d++}else if(A.isSpotLight){const P=n.spot[_];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(p),P.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(p),_++}else if(A.isRectAreaLight){const P=n.rectArea[v];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(p),s.identity(),o.copy(A.matrixWorld),o.premultiply(p),s.extractRotation(o),P.halfWidth.set(A.width*.5,0,0),P.halfHeight.set(0,A.height*.5,0),P.halfWidth.applyMatrix4(s),P.halfHeight.applyMatrix4(s),v++}else if(A.isPointLight){const P=n.point[m];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(p),m++}else if(A.isHemisphereLight){const P=n.hemi[f];P.direction.setFromMatrixPosition(A.matrixWorld),P.direction.transformDirection(p),f++}}}return{setup:l,setupView:c,state:n}}function Fh(i,e){const t=new mb(i,e),r=[],n=[];function a(){r.length=0,n.length=0}function o(h){r.push(h)}function s(h){n.push(h)}function l(h){t.setup(r,h)}function c(h){t.setupView(r,h)}return{init:a,state:{lightsArray:r,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function fb(i,e){let t=new WeakMap;function r(a,o=0){const s=t.get(a);let l;return s===void 0?(l=new Fh(i,e),t.set(a,[l])):o>=s.length?(l=new Fh(i,e),s.push(l)):l=s[o],l}function n(){t=new WeakMap}return{get:r,dispose:n}}class gb extends Tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _b extends Tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wb=`uniform sampler2D shadow_pass;
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
}`;function yb(i,e,t){let r=new Eo;const n=new Ie,a=new Ie,o=new Ct,s=new gb({depthPacking:ev}),l=new _b,c={},h=t.maxTextureSize,u={[Gr]:qt,[qt]:Gr,[hr]:hr},d=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:vb,fragmentShader:wb}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new ir;_.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Vt(_,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gl;let p=this.type;this.render=function(T,R,k){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;const x=i.getRenderTarget(),b=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),F=i.state;F.setBlending(kr),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const Q=p!==Rr&&this.type===Rr,D=p===Rr&&this.type!==Rr;for(let z=0,Y=T.length;z<Y;z++){const Z=T[z],J=Z.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;n.copy(J.mapSize);const K=J.getFrameExtents();if(n.multiply(K),a.copy(J.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(a.x=Math.floor(h/K.x),n.x=a.x*K.x,J.mapSize.x=a.x),n.y>h&&(a.y=Math.floor(h/K.y),n.y=a.y*K.y,J.mapSize.y=a.y)),J.map===null||Q===!0||D===!0){const ne=this.type!==Rr?{minFilter:Ht,magFilter:Ht}:{};J.map!==null&&J.map.dispose(),J.map=new li(n.x,n.y,ne),J.map.texture.name=Z.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const te=J.getViewportCount();for(let ne=0;ne<te;ne++){const pe=J.getViewport(ne);o.set(a.x*pe.x,a.y*pe.y,a.x*pe.z,a.y*pe.w),F.viewport(o),J.updateMatrices(Z,ne),r=J.getFrustum(),A(R,k,J.camera,Z,this.type)}J.isPointLightShadow!==!0&&this.type===Rr&&S(J,k),J.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(x,b,U)};function S(T,R){const k=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new li(n.x,n.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,k,d,v,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,k,m,v,null)}function w(T,R,k,x){let b=null;const U=k.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)b=U;else if(b=k.isPointLight===!0?l:s,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const F=b.uuid,Q=R.uuid;let D=c[F];D===void 0&&(D={},c[F]=D);let z=D[Q];z===void 0&&(z=b.clone(),D[Q]=z,R.addEventListener("dispose",P)),b=z}if(b.visible=R.visible,b.wireframe=R.wireframe,x===Rr?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,k.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const F=i.properties.get(b);F.light=k}return b}function A(T,R,k,x,b){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Rr)&&(!T.frustumCulled||r.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld);const F=e.update(T),Q=T.material;if(Array.isArray(Q)){const D=F.groups;for(let z=0,Y=D.length;z<Y;z++){const Z=D[z],J=Q[Z.materialIndex];if(J&&J.visible){const K=w(T,J,x,b);T.onBeforeShadow(i,T,R,k,F,K,Z),i.renderBufferDirect(k,null,F,K,T,Z),T.onAfterShadow(i,T,R,k,F,K,Z)}}}else if(Q.visible){const D=w(T,Q,x,b);T.onBeforeShadow(i,T,R,k,F,D,null),i.renderBufferDirect(k,null,F,D,T,null),T.onAfterShadow(i,T,R,k,F,D,null)}}const U=T.children;for(let F=0,Q=U.length;F<Q;F++)A(U[F],R,k,x,b)}function P(T){T.target.removeEventListener("dispose",P);for(const R in c){const k=c[R],x=T.target.uuid;x in k&&(k[x].dispose(),delete k[x])}}}function xb(i,e,t){const r=t.isWebGL2;function n(){let L=!1;const oe=new Ct;let ge=null;const Oe=new Ct(0,0,0,0);return{setMask:function(Ce){ge!==Ce&&!L&&(i.colorMask(Ce,Ce,Ce,Ce),ge=Ce)},setLocked:function(Ce){L=Ce},setClear:function(Ce,it,ct,Mt,ar){ar===!0&&(Ce*=Mt,it*=Mt,ct*=Mt),oe.set(Ce,it,ct,Mt),Oe.equals(oe)===!1&&(i.clearColor(Ce,it,ct,Mt),Oe.copy(oe))},reset:function(){L=!1,ge=null,Oe.set(-1,0,0,0)}}}function a(){let L=!1,oe=null,ge=null,Oe=null;return{setTest:function(Ce){Ce?Ue(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(Ce){oe!==Ce&&!L&&(i.depthMask(Ce),oe=Ce)},setFunc:function(Ce){if(ge!==Ce){switch(Ce){case C0:i.depthFunc(i.NEVER);break;case P0:i.depthFunc(i.ALWAYS);break;case L0:i.depthFunc(i.LESS);break;case aa:i.depthFunc(i.LEQUAL);break;case I0:i.depthFunc(i.EQUAL);break;case D0:i.depthFunc(i.GEQUAL);break;case U0:i.depthFunc(i.GREATER);break;case N0:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=Ce}},setLocked:function(Ce){L=Ce},setClear:function(Ce){Oe!==Ce&&(i.clearDepth(Ce),Oe=Ce)},reset:function(){L=!1,oe=null,ge=null,Oe=null}}}function o(){let L=!1,oe=null,ge=null,Oe=null,Ce=null,it=null,ct=null,Mt=null,ar=null;return{setTest:function(ht){L||(ht?Ue(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(ht){oe!==ht&&!L&&(i.stencilMask(ht),oe=ht)},setFunc:function(ht,Xt,Er){(ge!==ht||Oe!==Xt||Ce!==Er)&&(i.stencilFunc(ht,Xt,Er),ge=ht,Oe=Xt,Ce=Er)},setOp:function(ht,Xt,Er){(it!==ht||ct!==Xt||Mt!==Er)&&(i.stencilOp(ht,Xt,Er),it=ht,ct=Xt,Mt=Er)},setLocked:function(ht){L=ht},setClear:function(ht){ar!==ht&&(i.clearStencil(ht),ar=ht)},reset:function(){L=!1,oe=null,ge=null,Oe=null,Ce=null,it=null,ct=null,Mt=null,ar=null}}}const s=new n,l=new a,c=new o,h=new WeakMap,u=new WeakMap;let d={},m={},_=new WeakMap,v=[],f=null,p=!1,S=null,w=null,A=null,P=null,T=null,R=null,k=null,x=new Ee(0,0,0),b=0,U=!1,F=null,Q=null,D=null,z=null,Y=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,K=0;const te=i.getParameter(i.VERSION);te.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(te)[1]),J=K>=1):te.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),J=K>=2);let ne=null,pe={};const X=i.getParameter(i.SCISSOR_BOX),ee=i.getParameter(i.VIEWPORT),ve=new Ct().fromArray(X),we=new Ct().fromArray(ee);function ye(L,oe,ge,Oe){const Ce=new Uint8Array(4),it=i.createTexture();i.bindTexture(L,it),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ct=0;ct<ge;ct++)r&&(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)?i.texImage3D(oe,0,i.RGBA,1,1,Oe,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(oe+ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return it}const De={};De[i.TEXTURE_2D]=ye(i.TEXTURE_2D,i.TEXTURE_2D,1),De[i.TEXTURE_CUBE_MAP]=ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(De[i.TEXTURE_2D_ARRAY]=ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),De[i.TEXTURE_3D]=ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ue(i.DEPTH_TEST),l.setFunc(aa),ze(!1),E(Hl),Ue(i.CULL_FACE),xe(kr);function Ue(L){d[L]!==!0&&(i.enable(L),d[L]=!0)}function Re(L){d[L]!==!1&&(i.disable(L),d[L]=!1)}function Ge(L,oe){return m[L]!==oe?(i.bindFramebuffer(L,oe),m[L]=oe,r&&(L===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=oe),L===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=oe)),!0):!1}function V(L,oe){let ge=v,Oe=!1;if(L)if(ge=_.get(oe),ge===void 0&&(ge=[],_.set(oe,ge)),L.isWebGLMultipleRenderTargets){const Ce=L.texture;if(ge.length!==Ce.length||ge[0]!==i.COLOR_ATTACHMENT0){for(let it=0,ct=Ce.length;it<ct;it++)ge[it]=i.COLOR_ATTACHMENT0+it;ge.length=Ce.length,Oe=!0}}else ge[0]!==i.COLOR_ATTACHMENT0&&(ge[0]=i.COLOR_ATTACHMENT0,Oe=!0);else ge[0]!==i.BACK&&(ge[0]=i.BACK,Oe=!0);Oe&&(t.isWebGL2?i.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function dt(L){return f!==L?(i.useProgram(L),f=L,!0):!1}const Se={[ii]:i.FUNC_ADD,[m0]:i.FUNC_SUBTRACT,[f0]:i.FUNC_REVERSE_SUBTRACT};if(r)Se[jl]=i.MIN,Se[ql]=i.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Se[jl]=L.MIN_EXT,Se[ql]=L.MAX_EXT)}const Ne={[g0]:i.ZERO,[_0]:i.ONE,[v0]:i.SRC_COLOR,[ks]:i.SRC_ALPHA,[S0]:i.SRC_ALPHA_SATURATE,[M0]:i.DST_COLOR,[y0]:i.DST_ALPHA,[w0]:i.ONE_MINUS_SRC_COLOR,[Vs]:i.ONE_MINUS_SRC_ALPHA,[b0]:i.ONE_MINUS_DST_COLOR,[x0]:i.ONE_MINUS_DST_ALPHA,[E0]:i.CONSTANT_COLOR,[T0]:i.ONE_MINUS_CONSTANT_COLOR,[R0]:i.CONSTANT_ALPHA,[A0]:i.ONE_MINUS_CONSTANT_ALPHA};function xe(L,oe,ge,Oe,Ce,it,ct,Mt,ar,ht){if(L===kr){p===!0&&(Re(i.BLEND),p=!1);return}if(p===!1&&(Ue(i.BLEND),p=!0),L!==p0){if(L!==S||ht!==U){if((w!==ii||T!==ii)&&(i.blendEquation(i.FUNC_ADD),w=ii,T=ii),ht)switch(L){case Ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vl:i.blendFunc(i.ONE,i.ONE);break;case Wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}A=null,P=null,R=null,k=null,x.set(0,0,0),b=0,S=L,U=ht}return}Ce=Ce||oe,it=it||ge,ct=ct||Oe,(oe!==w||Ce!==T)&&(i.blendEquationSeparate(Se[oe],Se[Ce]),w=oe,T=Ce),(ge!==A||Oe!==P||it!==R||ct!==k)&&(i.blendFuncSeparate(Ne[ge],Ne[Oe],Ne[it],Ne[ct]),A=ge,P=Oe,R=it,k=ct),(Mt.equals(x)===!1||ar!==b)&&(i.blendColor(Mt.r,Mt.g,Mt.b,ar),x.copy(Mt),b=ar),S=L,U=!1}function at(L,oe){L.side===hr?Re(i.CULL_FACE):Ue(i.CULL_FACE);let ge=L.side===qt;oe&&(ge=!ge),ze(ge),L.blending===Ti&&L.transparent===!1?xe(kr):xe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),s.setMask(L.colorWrite);const Oe=L.stencilWrite;c.setTest(Oe),Oe&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),G(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ue(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function ze(L){F!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),F=L)}function E(L){L!==u0?(Ue(i.CULL_FACE),L!==Q&&(L===Hl?i.cullFace(i.BACK):L===d0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),Q=L}function y(L){L!==D&&(J&&i.lineWidth(L),D=L)}function G(L,oe,ge){L?(Ue(i.POLYGON_OFFSET_FILL),(z!==oe||Y!==ge)&&(i.polygonOffset(oe,ge),z=oe,Y=ge)):Re(i.POLYGON_OFFSET_FILL)}function se(L){L?Ue(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function re(L){L===void 0&&(L=i.TEXTURE0+Z-1),ne!==L&&(i.activeTexture(L),ne=L)}function ie(L,oe,ge){ge===void 0&&(ne===null?ge=i.TEXTURE0+Z-1:ge=ne);let Oe=pe[ge];Oe===void 0&&(Oe={type:void 0,texture:void 0},pe[ge]=Oe),(Oe.type!==L||Oe.texture!==oe)&&(ne!==ge&&(i.activeTexture(ge),ne=ge),i.bindTexture(L,oe||De[L]),Oe.type=L,Oe.texture=oe)}function Me(){const L=pe[ne];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function de(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Be(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Qe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function C(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(L){ve.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ve.copy(L))}function ke(L){we.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),we.copy(L))}function tt(L,oe){let ge=u.get(oe);ge===void 0&&(ge=new WeakMap,u.set(oe,ge));let Oe=ge.get(L);Oe===void 0&&(Oe=i.getUniformBlockIndex(oe,L.name),ge.set(L,Oe))}function Ve(L,oe){const ge=u.get(oe).get(L);h.get(oe)!==ge&&(i.uniformBlockBinding(oe,ge,L.__bindingPointIndex),h.set(oe,ge))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),r===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ne=null,pe={},m={},_=new WeakMap,v=[],f=null,p=!1,S=null,w=null,A=null,P=null,T=null,R=null,k=null,x=new Ee(0,0,0),b=0,U=!1,F=null,Q=null,D=null,z=null,Y=null,ve.set(0,0,i.canvas.width,i.canvas.height),we.set(0,0,i.canvas.width,i.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Ue,disable:Re,bindFramebuffer:Ge,drawBuffers:V,useProgram:dt,setBlending:xe,setMaterial:at,setFlipSided:ze,setCullFace:E,setLineWidth:y,setPolygonOffset:G,setScissorTest:se,activeTexture:re,bindTexture:ie,unbindTexture:Me,compressedTexImage2D:de,compressedTexImage3D:_e,texImage2D:ce,texImage3D:le,updateUBOMapping:tt,uniformBlockBinding:Ve,texStorage2D:C,texStorage3D:$,texSubImage2D:Ae,texSubImage3D:Be,compressedTexSubImage2D:ae,compressedTexSubImage3D:Qe,scissor:Te,viewport:ke,reset:he}}function Mb(i,e,t,r,n,a,o){const s=n.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,y){return m?new OffscreenCanvas(E,y):ma("canvas")}function v(E,y,G,se){let re=1;if((E.width>se||E.height>se)&&(re=se/Math.max(E.width,E.height)),re<1||y===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ie=y?pa:Math.floor,Me=ie(re*E.width),de=ie(re*E.height);u===void 0&&(u=_(Me,de));const _e=G?_(Me,de):u;return _e.width=Me,_e.height=de,_e.getContext("2d").drawImage(E,0,0,Me,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Me+"x"+de+")."),_e}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function f(E){return no(E.width)&&no(E.height)}function p(E){return s?!1:E.wrapS!==ur||E.wrapT!==ur||E.minFilter!==Ht&&E.minFilter!==er}function S(E,y){return E.generateMipmaps&&y&&E.minFilter!==Ht&&E.minFilter!==er}function w(E){i.generateMipmap(E)}function A(E,y,G,se,re=!1){if(s===!1)return y;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ie=y;if(y===i.RED&&(G===i.FLOAT&&(ie=i.R32F),G===i.HALF_FLOAT&&(ie=i.R16F),G===i.UNSIGNED_BYTE&&(ie=i.R8)),y===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(ie=i.R8UI),G===i.UNSIGNED_SHORT&&(ie=i.R16UI),G===i.UNSIGNED_INT&&(ie=i.R32UI),G===i.BYTE&&(ie=i.R8I),G===i.SHORT&&(ie=i.R16I),G===i.INT&&(ie=i.R32I)),y===i.RG&&(G===i.FLOAT&&(ie=i.RG32F),G===i.HALF_FLOAT&&(ie=i.RG16F),G===i.UNSIGNED_BYTE&&(ie=i.RG8)),y===i.RGBA){const Me=re?la:ot.getTransfer(se);G===i.FLOAT&&(ie=i.RGBA32F),G===i.HALF_FLOAT&&(ie=i.RGBA16F),G===i.UNSIGNED_BYTE&&(ie=Me===ut?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function P(E,y,G){return S(E,G)===!0||E.isFramebufferTexture&&E.minFilter!==Ht&&E.minFilter!==er?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function T(E){return E===Ht||E===Jl||E===Ys?i.NEAREST:i.LINEAR}function R(E){const y=E.target;y.removeEventListener("dispose",R),x(y),y.isVideoTexture&&h.delete(y)}function k(E){const y=E.target;y.removeEventListener("dispose",k),U(y)}function x(E){const y=r.get(E);if(y.__webglInit===void 0)return;const G=E.source,se=d.get(G);if(se){const re=se[y.__cacheKey];re.usedTimes--,re.usedTimes===0&&b(E),Object.keys(se).length===0&&d.delete(G)}r.remove(E)}function b(E){const y=r.get(E);i.deleteTexture(y.__webglTexture);const G=E.source,se=d.get(G);delete se[y.__cacheKey],o.memory.textures--}function U(E){const y=E.texture,G=r.get(E),se=r.get(y);if(se.__webglTexture!==void 0&&(i.deleteTexture(se.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(G.__webglFramebuffer[re]))for(let ie=0;ie<G.__webglFramebuffer[re].length;ie++)i.deleteFramebuffer(G.__webglFramebuffer[re][ie]);else i.deleteFramebuffer(G.__webglFramebuffer[re]);G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer[re])}else{if(Array.isArray(G.__webglFramebuffer))for(let re=0;re<G.__webglFramebuffer.length;re++)i.deleteFramebuffer(G.__webglFramebuffer[re]);else i.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&i.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let re=0;re<G.__webglColorRenderbuffer.length;re++)G.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(G.__webglColorRenderbuffer[re]);G.__webglDepthRenderbuffer&&i.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let re=0,ie=y.length;re<ie;re++){const Me=r.get(y[re]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),o.memory.textures--),r.remove(y[re])}r.remove(y),r.remove(E)}let F=0;function Q(){F=0}function D(){const E=F;return E>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+n.maxTextures),F+=1,E}function z(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function Y(E,y){const G=r.get(E);if(E.isVideoTexture&&at(E),E.isRenderTargetTexture===!1&&E.version>0&&G.__version!==E.version){const se=E.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(G,E,y);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+y)}function Z(E,y){const G=r.get(E);if(E.version>0&&G.__version!==E.version){ve(G,E,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+y)}function J(E,y){const G=r.get(E);if(E.version>0&&G.__version!==E.version){ve(G,E,y);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+y)}function K(E,y){const G=r.get(E);if(E.version>0&&G.__version!==E.version){we(G,E,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+y)}const te={[js]:i.REPEAT,[ur]:i.CLAMP_TO_EDGE,[qs]:i.MIRRORED_REPEAT},ne={[Ht]:i.NEAREST,[Jl]:i.NEAREST_MIPMAP_NEAREST,[Ys]:i.NEAREST_MIPMAP_LINEAR,[er]:i.LINEAR,[W0]:i.LINEAR_MIPMAP_NEAREST,[mn]:i.LINEAR_MIPMAP_LINEAR},pe={[rv]:i.NEVER,[lv]:i.ALWAYS,[iv]:i.LESS,[Ic]:i.LEQUAL,[nv]:i.EQUAL,[ov]:i.GEQUAL,[av]:i.GREATER,[sv]:i.NOTEQUAL};function X(E,y,G){if(G?(i.texParameteri(E,i.TEXTURE_WRAP_S,te[y.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,te[y.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,te[y.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ne[y.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ne[y.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(y.wrapS!==ur||y.wrapT!==ur)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,T(y.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,T(y.minFilter)),y.minFilter!==Ht&&y.minFilter!==er&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,pe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Ht||y.minFilter!==Ys&&y.minFilter!==mn||y.type===jr&&e.has("OES_texture_float_linear")===!1||s===!1&&y.type===fn&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||r.get(y).__currentAnisotropy)&&(i.texParameterf(E,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,n.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy)}}function ee(E,y){let G=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",R));const se=y.source;let re=d.get(se);re===void 0&&(re={},d.set(se,re));const ie=z(y);if(ie!==E.__cacheKey){re[ie]===void 0&&(re[ie]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),re[ie].usedTimes++;const Me=re[E.__cacheKey];Me!==void 0&&(re[E.__cacheKey].usedTimes--,Me.usedTimes===0&&b(y)),E.__cacheKey=ie,E.__webglTexture=re[ie].texture}return G}function ve(E,y,G){let se=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(se=i.TEXTURE_3D);const re=ee(E,y),ie=y.source;t.bindTexture(se,E.__webglTexture,i.TEXTURE0+G);const Me=r.get(ie);if(ie.version!==Me.__version||re===!0){t.activeTexture(i.TEXTURE0+G);const de=ot.getPrimaries(ot.workingColorSpace),_e=y.colorSpace===tr?null:ot.getPrimaries(y.colorSpace),Ae=y.colorSpace===tr||de===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Be=p(y)&&f(y.image)===!1;let ae=v(y.image,Be,!1,n.maxTextureSize);ae=ze(y,ae);const Qe=f(ae)||s,C=a.convert(y.format,y.colorSpace);let $=a.convert(y.type),ce=A(y.internalFormat,C,$,y.colorSpace,y.isVideoTexture);X(se,y,Qe);let le;const Te=y.mipmaps,ke=s&&y.isVideoTexture!==!0&&ce!==oc,tt=Me.__version===void 0||re===!0,Ve=P(y,ae,Qe);if(y.isDepthTexture)ce=i.DEPTH_COMPONENT,s?y.type===jr?ce=i.DEPTH_COMPONENT32F:y.type===Xr?ce=i.DEPTH_COMPONENT24:y.type===ni?ce=i.DEPTH24_STENCIL8:ce=i.DEPTH_COMPONENT16:y.type===jr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===ai&&ce===i.DEPTH_COMPONENT&&y.type!==Ks&&y.type!==Xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Xr,$=a.convert(y.type)),y.format===Ci&&ce===i.DEPTH_COMPONENT&&(ce=i.DEPTH_STENCIL,y.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=ni,$=a.convert(y.type))),tt&&(ke?t.texStorage2D(i.TEXTURE_2D,1,ce,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,ce,ae.width,ae.height,0,C,$,null));else if(y.isDataTexture)if(Te.length>0&&Qe){ke&&tt&&t.texStorage2D(i.TEXTURE_2D,Ve,ce,Te[0].width,Te[0].height);for(let he=0,L=Te.length;he<L;he++)le=Te[he],ke?t.texSubImage2D(i.TEXTURE_2D,he,0,0,le.width,le.height,C,$,le.data):t.texImage2D(i.TEXTURE_2D,he,ce,le.width,le.height,0,C,$,le.data);y.generateMipmaps=!1}else ke?(tt&&t.texStorage2D(i.TEXTURE_2D,Ve,ce,ae.width,ae.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae.width,ae.height,C,$,ae.data)):t.texImage2D(i.TEXTURE_2D,0,ce,ae.width,ae.height,0,C,$,ae.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ke&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ve,ce,Te[0].width,Te[0].height,ae.depth);for(let he=0,L=Te.length;he<L;he++)le=Te[he],y.format!==dr?C!==null?ke?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,le.width,le.height,ae.depth,C,le.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,ce,le.width,le.height,ae.depth,0,le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,le.width,le.height,ae.depth,C,$,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,ce,le.width,le.height,ae.depth,0,C,$,le.data)}else{ke&&tt&&t.texStorage2D(i.TEXTURE_2D,Ve,ce,Te[0].width,Te[0].height);for(let he=0,L=Te.length;he<L;he++)le=Te[he],y.format!==dr?C!==null?ke?t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,le.width,le.height,C,le.data):t.compressedTexImage2D(i.TEXTURE_2D,he,ce,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage2D(i.TEXTURE_2D,he,0,0,le.width,le.height,C,$,le.data):t.texImage2D(i.TEXTURE_2D,he,ce,le.width,le.height,0,C,$,le.data)}else if(y.isDataArrayTexture)ke?(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ve,ce,ae.width,ae.height,ae.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,C,$,ae.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,ae.width,ae.height,ae.depth,0,C,$,ae.data);else if(y.isData3DTexture)ke?(tt&&t.texStorage3D(i.TEXTURE_3D,Ve,ce,ae.width,ae.height,ae.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,C,$,ae.data)):t.texImage3D(i.TEXTURE_3D,0,ce,ae.width,ae.height,ae.depth,0,C,$,ae.data);else if(y.isFramebufferTexture){if(tt)if(ke)t.texStorage2D(i.TEXTURE_2D,Ve,ce,ae.width,ae.height);else{let he=ae.width,L=ae.height;for(let oe=0;oe<Ve;oe++)t.texImage2D(i.TEXTURE_2D,oe,ce,he,L,0,C,$,null),he>>=1,L>>=1}}else if(Te.length>0&&Qe){ke&&tt&&t.texStorage2D(i.TEXTURE_2D,Ve,ce,Te[0].width,Te[0].height);for(let he=0,L=Te.length;he<L;he++)le=Te[he],ke?t.texSubImage2D(i.TEXTURE_2D,he,0,0,C,$,le):t.texImage2D(i.TEXTURE_2D,he,ce,C,$,le);y.generateMipmaps=!1}else ke?(tt&&t.texStorage2D(i.TEXTURE_2D,Ve,ce,ae.width,ae.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,C,$,ae)):t.texImage2D(i.TEXTURE_2D,0,ce,C,$,ae);S(y,Qe)&&w(se),Me.__version=ie.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function we(E,y,G){if(y.image.length!==6)return;const se=ee(E,y),re=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+G);const ie=r.get(re);if(re.version!==ie.__version||se===!0){t.activeTexture(i.TEXTURE0+G);const Me=ot.getPrimaries(ot.workingColorSpace),de=y.colorSpace===tr?null:ot.getPrimaries(y.colorSpace),_e=y.colorSpace===tr||Me===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ae=y.isCompressedTexture||y.image[0].isCompressedTexture,Be=y.image[0]&&y.image[0].isDataTexture,ae=[];for(let he=0;he<6;he++)!Ae&&!Be?ae[he]=v(y.image[he],!1,!0,n.maxCubemapSize):ae[he]=Be?y.image[he].image:y.image[he],ae[he]=ze(y,ae[he]);const Qe=ae[0],C=f(Qe)||s,$=a.convert(y.format,y.colorSpace),ce=a.convert(y.type),le=A(y.internalFormat,$,ce,y.colorSpace),Te=s&&y.isVideoTexture!==!0,ke=ie.__version===void 0||se===!0;let tt=P(y,Qe,C);X(i.TEXTURE_CUBE_MAP,y,C);let Ve;if(Ae){Te&&ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,tt,le,Qe.width,Qe.height);for(let he=0;he<6;he++){Ve=ae[he].mipmaps;for(let L=0;L<Ve.length;L++){const oe=Ve[L];y.format!==dr?$!==null?Te?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,0,0,oe.width,oe.height,$,oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,le,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,0,0,oe.width,oe.height,$,ce,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,le,oe.width,oe.height,0,$,ce,oe.data)}}}else{Ve=y.mipmaps,Te&&ke&&(Ve.length>0&&tt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,tt,le,ae[0].width,ae[0].height));for(let he=0;he<6;he++)if(Be){Te?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ae[he].width,ae[he].height,$,ce,ae[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,le,ae[he].width,ae[he].height,0,$,ce,ae[he].data);for(let L=0;L<Ve.length;L++){const oe=Ve[L].image[he].image;Te?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,0,0,oe.width,oe.height,$,ce,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,le,oe.width,oe.height,0,$,ce,oe.data)}}else{Te?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,$,ce,ae[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,le,$,ce,ae[he]);for(let L=0;L<Ve.length;L++){const oe=Ve[L];Te?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,0,0,$,ce,oe.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,le,$,ce,oe.image[he])}}}S(y,C)&&w(i.TEXTURE_CUBE_MAP),ie.__version=re.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function ye(E,y,G,se,re,ie){const Me=a.convert(G.format,G.colorSpace),de=a.convert(G.type),_e=A(G.internalFormat,Me,de,G.colorSpace);if(!r.get(y).__hasExternalTextures){const Ae=Math.max(1,y.width>>ie),Be=Math.max(1,y.height>>ie);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,ie,_e,Ae,Be,y.depth,0,Me,de,null):t.texImage2D(re,ie,_e,Ae,Be,0,Me,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),xe(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,re,r.get(G).__webglTexture,0,Ne(y)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,re,r.get(G).__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(E,y,G){if(i.bindRenderbuffer(i.RENDERBUFFER,E),y.depthBuffer&&!y.stencilBuffer){let se=s===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(G||xe(y)){const re=y.depthTexture;re&&re.isDepthTexture&&(re.type===jr?se=i.DEPTH_COMPONENT32F:re.type===Xr&&(se=i.DEPTH_COMPONENT24));const ie=Ne(y);xe(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,se,y.width,y.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,se,y.width,y.height)}else i.renderbufferStorage(i.RENDERBUFFER,se,y.width,y.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(y.depthBuffer&&y.stencilBuffer){const se=Ne(y);G&&xe(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,i.DEPTH24_STENCIL8,y.width,y.height):xe(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,i.DEPTH24_STENCIL8,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{const se=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let re=0;re<se.length;re++){const ie=se[re],Me=a.convert(ie.format,ie.colorSpace),de=a.convert(ie.type),_e=A(ie.internalFormat,Me,de,ie.colorSpace),Ae=Ne(y);G&&xe(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,_e,y.width,y.height):xe(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,_e,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,_e,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y(y.depthTexture,0);const G=r.get(y.depthTexture).__webglTexture,se=Ne(y);if(y.depthTexture.format===ai)xe(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0);else if(y.depthTexture.format===Ci)xe(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function Re(E){const y=r.get(E),G=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ue(y.__webglFramebuffer,E)}else if(G){y.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[se]),y.__webglDepthbuffer[se]=i.createRenderbuffer(),De(y.__webglDepthbuffer[se],E,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),De(y.__webglDepthbuffer,E,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(E,y,G){const se=r.get(E);y!==void 0&&ye(se.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Re(E)}function V(E){const y=E.texture,G=r.get(E),se=r.get(y);E.addEventListener("dispose",k),E.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=y.version,o.memory.textures++);const re=E.isWebGLCubeRenderTarget===!0,ie=E.isWebGLMultipleRenderTargets===!0,Me=f(E)||s;if(re){G.__webglFramebuffer=[];for(let de=0;de<6;de++)if(s&&y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[de]=[];for(let _e=0;_e<y.mipmaps.length;_e++)G.__webglFramebuffer[de][_e]=i.createFramebuffer()}else G.__webglFramebuffer[de]=i.createFramebuffer()}else{if(s&&y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let de=0;de<y.mipmaps.length;de++)G.__webglFramebuffer[de]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(ie)if(n.drawBuffers){const de=E.texture;for(let _e=0,Ae=de.length;_e<Ae;_e++){const Be=r.get(de[_e]);Be.__webglTexture===void 0&&(Be.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&E.samples>0&&xe(E)===!1){const de=ie?y:[y];G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let _e=0;_e<de.length;_e++){const Ae=de[_e];G.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[_e]);const Be=a.convert(Ae.format,Ae.colorSpace),ae=a.convert(Ae.type),Qe=A(Ae.internalFormat,Be,ae,Ae.colorSpace,E.isXRRenderTarget===!0),C=Ne(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,C,Qe,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,G.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),De(G.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),X(i.TEXTURE_CUBE_MAP,y,Me);for(let de=0;de<6;de++)if(s&&y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)ye(G.__webglFramebuffer[de][_e],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,_e);else ye(G.__webglFramebuffer[de],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);S(y,Me)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const de=E.texture;for(let _e=0,Ae=de.length;_e<Ae;_e++){const Be=de[_e],ae=r.get(Be);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture),X(i.TEXTURE_2D,Be,Me),ye(G.__webglFramebuffer,E,Be,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,0),S(Be,Me)&&w(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(s?de=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,se.__webglTexture),X(de,y,Me),s&&y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)ye(G.__webglFramebuffer[_e],E,y,i.COLOR_ATTACHMENT0,de,_e);else ye(G.__webglFramebuffer,E,y,i.COLOR_ATTACHMENT0,de,0);S(y,Me)&&w(de),t.unbindTexture()}E.depthBuffer&&Re(E)}function dt(E){const y=f(E)||s,G=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let se=0,re=G.length;se<re;se++){const ie=G[se];if(S(ie,y)){const Me=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,de=r.get(ie).__webglTexture;t.bindTexture(Me,de),w(Me),t.unbindTexture()}}}function Se(E){if(s&&E.samples>0&&xe(E)===!1){const y=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],G=E.width,se=E.height;let re=i.COLOR_BUFFER_BIT;const ie=[],Me=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=r.get(E),_e=E.isWebGLMultipleRenderTargets===!0;if(_e)for(let Ae=0;Ae<y.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Ae=0;Ae<y.length;Ae++){ie.push(i.COLOR_ATTACHMENT0+Ae),E.depthBuffer&&ie.push(Me);const Be=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(Be===!1&&(E.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),_e&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[Ae]),Be===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Me]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Me])),_e){const ae=r.get(y[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,G,se,0,0,G,se,re,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let Ae=0;Ae<y.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,de.__webglColorRenderbuffer[Ae]);const Be=r.get(y[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function Ne(E){return Math.min(n.maxSamples,E.samples)}function xe(E){const y=r.get(E);return s&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function at(E){const y=o.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function ze(E,y){const G=E.colorSpace,se=E.format,re=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===ro||G!==Ar&&G!==tr&&(ot.getTransfer(G)===ut?s===!1?e.has("EXT_sRGB")===!0&&se===dr?(E.format=ro,E.minFilter=er,E.generateMipmaps=!1):y=Hc.sRGBToLinear(y):(se!==dr||re!==Wr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),y}this.allocateTextureUnit=D,this.resetTextureUnits=Q,this.setTexture2D=Y,this.setTexture2DArray=Z,this.setTexture3D=J,this.setTextureCube=K,this.rebindTextures=Ge,this.setupRenderTarget=V,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=xe}function bb(i,e,t){const r=t.isWebGL2;function n(a,o=tr){let s;const l=ot.getTransfer(o);if(a===Wr)return i.UNSIGNED_BYTE;if(a===Ql)return i.UNSIGNED_SHORT_4_4_4_4;if(a===$l)return i.UNSIGNED_SHORT_5_5_5_1;if(a===X0)return i.BYTE;if(a===j0)return i.SHORT;if(a===Ks)return i.UNSIGNED_SHORT;if(a===Zl)return i.INT;if(a===Xr)return i.UNSIGNED_INT;if(a===jr)return i.FLOAT;if(a===fn)return r?i.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===q0)return i.ALPHA;if(a===dr)return i.RGBA;if(a===Y0)return i.LUMINANCE;if(a===K0)return i.LUMINANCE_ALPHA;if(a===ai)return i.DEPTH_COMPONENT;if(a===Ci)return i.DEPTH_STENCIL;if(a===ro)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===J0)return i.RED;if(a===ec)return i.RED_INTEGER;if(a===Z0)return i.RG;if(a===tc)return i.RG_INTEGER;if(a===rc)return i.RGBA_INTEGER;if(a===Js||a===Zs||a===Qs||a===$s)if(l===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===Js)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===Js)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Zs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Qs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===$s)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===ic||a===nc||a===ac||a===sc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===ic)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===nc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===ac)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===sc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===oc)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===lc||a===cc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===lc)return l===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===cc)return l===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===hc||a===uc||a===dc||a===pc||a===mc||a===fc||a===gc||a===_c||a===vc||a===wc||a===yc||a===xc||a===Mc||a===bc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===hc)return l===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===uc)return l===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===dc)return l===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===pc)return l===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===mc)return l===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===fc)return l===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===gc)return l===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===_c)return l===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===vc)return l===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===wc)return l===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===yc)return l===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===xc)return l===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Mc)return l===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===bc)return l===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===eo||a===Sc||a===Ec)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===eo)return l===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Sc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Ec)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Q0||a===Tc||a===Rc||a===Ac)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===eo)return s.COMPRESSED_RED_RGTC1_EXT;if(a===Tc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Rc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Ac)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===ni?r?i.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:n}}class Sb extends nr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ba extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Eb={type:"move"};class Do{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ba,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ba,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ba,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const f=t.getJointPose(v,r),p=this._getHandJoint(c,v);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&a!==null&&(n=a),n!==null&&(s.matrix.fromArray(n.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,n.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(n.linearVelocity)):s.hasLinearVelocity=!1,n.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(n.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Eb)))}return s!==null&&(s.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Ba;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Tb extends oi{constructor(e,t){super();const r=this;let n=null,a=1,o=null,s="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,_=null;const v=t.getContextAttributes();let f=null,p=null;const S=[],w=[],A=new Ie;let P=null;const T=new nr;T.layers.enable(1),T.viewport=new Ct;const R=new nr;R.layers.enable(2),R.viewport=new Ct;const k=[T,R],x=new Sb;x.layers.enable(1),x.layers.enable(2);let b=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=S[X];return ee===void 0&&(ee=new Do,S[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=S[X];return ee===void 0&&(ee=new Do,S[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=S[X];return ee===void 0&&(ee=new Do,S[X]=ee),ee.getHandSpace()};function F(X){const ee=w.indexOf(X.inputSource);if(ee===-1)return;const ve=S[ee];ve!==void 0&&(ve.update(X.inputSource,X.frame,c||o),ve.dispatchEvent({type:X.type,data:X.inputSource}))}function Q(){n.removeEventListener("select",F),n.removeEventListener("selectstart",F),n.removeEventListener("selectend",F),n.removeEventListener("squeeze",F),n.removeEventListener("squeezestart",F),n.removeEventListener("squeezeend",F),n.removeEventListener("end",Q),n.removeEventListener("inputsourceschange",D);for(let X=0;X<S.length;X++){const ee=w[X];ee!==null&&(w[X]=null,S[X].disconnect(ee))}b=null,U=null,e.setRenderTarget(f),m=null,d=null,u=null,n=null,p=null,pe.stop(),r.isPresenting=!1,e.setPixelRatio(P),e.setSize(A.width,A.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){a=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){s=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=async function(X){if(n=X,n!==null){if(f=e.getRenderTarget(),n.addEventListener("select",F),n.addEventListener("selectstart",F),n.addEventListener("selectend",F),n.addEventListener("squeeze",F),n.addEventListener("squeezestart",F),n.addEventListener("squeezeend",F),n.addEventListener("end",Q),n.addEventListener("inputsourceschange",D),v.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(A),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:n.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(n,t,ee),n.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new li(m.framebufferWidth,m.framebufferHeight,{format:dr,type:Wr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ee=null,ve=null,we=null;v.depth&&(we=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=v.stencil?Ci:ai,ve=v.stencil?ni:Xr);const ye={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:a};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(ye),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new li(d.textureWidth,d.textureHeight,{format:dr,type:Wr,depthTexture:new _h(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const De=e.properties.get(p);De.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(s),pe.setContext(n),pe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function D(X){for(let ee=0;ee<X.removed.length;ee++){const ve=X.removed[ee],we=w.indexOf(ve);we>=0&&(w[we]=null,S[we].disconnect(ve))}for(let ee=0;ee<X.added.length;ee++){const ve=X.added[ee];let we=w.indexOf(ve);if(we===-1){for(let De=0;De<S.length;De++)if(De>=w.length){w.push(ve),we=De;break}else if(w[De]===null){w[De]=ve,we=De;break}if(we===-1)break}const ye=S[we];ye&&ye.connect(ve)}}const z=new N,Y=new N;function Z(X,ee,ve){z.setFromMatrixPosition(ee.matrixWorld),Y.setFromMatrixPosition(ve.matrixWorld);const we=z.distanceTo(Y),ye=ee.projectionMatrix.elements,De=ve.projectionMatrix.elements,Ue=ye[14]/(ye[10]-1),Re=ye[14]/(ye[10]+1),Ge=(ye[9]+1)/ye[5],V=(ye[9]-1)/ye[5],dt=(ye[8]-1)/ye[0],Se=(De[8]+1)/De[0],Ne=Ue*dt,xe=Ue*Se,at=we/(-dt+Se),ze=at*-dt;ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ze),X.translateZ(at),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const E=Ue+at,y=Re+at,G=Ne-ze,se=xe+(we-ze),re=Ge*Re/y*E,ie=V*Re/y*E;X.projectionMatrix.makePerspective(G,se,re,ie,E,y),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function J(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(n===null)return;x.near=R.near=T.near=X.near,x.far=R.far=T.far=X.far,(b!==x.near||U!==x.far)&&(n.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,U=x.far);const ee=X.parent,ve=x.cameras;J(x,ee);for(let we=0;we<ve.length;we++)J(ve[we],ee);ve.length===2?Z(x,T,R):x.projectionMatrix.copy(T.projectionMatrix),K(X,x,ee)};function K(X,ee,ve){ve===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(ve.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=_n*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)};let te=null;function ne(X,ee){if(h=ee.getViewerPose(c||o),_=ee,h!==null){const ve=h.views;m!==null&&(e.setRenderTargetFramebuffer(p,m.framebuffer),e.setRenderTarget(p));let we=!1;ve.length!==x.cameras.length&&(x.cameras.length=0,we=!0);for(let ye=0;ye<ve.length;ye++){const De=ve[ye];let Ue=null;if(m!==null)Ue=m.getViewport(De);else{const Ge=u.getViewSubImage(d,De);Ue=Ge.viewport,ye===0&&(e.setRenderTargetTextures(p,Ge.colorTexture,d.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(p))}let Re=k[ye];Re===void 0&&(Re=new nr,Re.layers.enable(ye),Re.viewport=new Ct,k[ye]=Re),Re.matrix.fromArray(De.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(De.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),ye===0&&(x.matrix.copy(Re.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),we===!0&&x.cameras.push(Re)}}for(let ve=0;ve<S.length;ve++){const we=w[ve],ye=S[ve];we!==null&&ye!==void 0&&ye.update(we,ee,c||o)}te&&te(X,ee),ee.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ee}),_=null}const pe=new lh;pe.setAnimationLoop(ne),this.setAnimationLoop=function(X){te=X},this.dispose=function(){}}}function Rb(i,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function r(f,p){p.color.getRGB(f.fogColor.value,ah(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function n(f,p,S,w,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(f,p):p.isMeshToonMaterial?(a(f,p),u(f,p)):p.isMeshPhongMaterial?(a(f,p),h(f,p)):p.isMeshStandardMaterial?(a(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,A)):p.isMeshMatcapMaterial?(a(f,p),_(f,p)):p.isMeshDepthMaterial?a(f,p):p.isMeshDistanceMaterial?(a(f,p),v(f,p)):p.isMeshNormalMaterial?a(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&s(f,p)):p.isPointsMaterial?l(f,p,S,w):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===qt&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===qt&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const S=e.get(p).envMap;if(S&&(f.envMap.value=S,f.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const w=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*w,t(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function s(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,S,w){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*S,f.scale.value=w*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,S){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,p){p.matcap&&(f.matcap.value=p.matcap)}function v(f,p){const S=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function Ab(i,e,t,r){let n={},a={},o=[];const s=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,w){const A=w.program;r.uniformBlockBinding(S,A)}function c(S,w){let A=n[S.id];A===void 0&&(_(S),A=h(S),n[S.id]=A,S.addEventListener("dispose",f));const P=w.program;r.updateUBOMapping(S,P);const T=e.render.frame;a[S.id]!==T&&(d(S),a[S.id]=T)}function h(S){const w=u();S.__bindingPointIndex=w;const A=i.createBuffer(),P=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,P,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,A),A}function u(){for(let S=0;S<s;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const w=n[S.id],A=S.uniforms,P=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let T=0,R=A.length;T<R;T++){const k=Array.isArray(A[T])?A[T]:[A[T]];for(let x=0,b=k.length;x<b;x++){const U=k[x];if(m(U,T,x,P)===!0){const F=U.__offset,Q=Array.isArray(U.value)?U.value:[U.value];let D=0;for(let z=0;z<Q.length;z++){const Y=Q[z],Z=v(Y);typeof Y=="number"||typeof Y=="boolean"?(U.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,F+D,U.__data)):Y.isMatrix3?(U.__data[0]=Y.elements[0],U.__data[1]=Y.elements[1],U.__data[2]=Y.elements[2],U.__data[3]=0,U.__data[4]=Y.elements[3],U.__data[5]=Y.elements[4],U.__data[6]=Y.elements[5],U.__data[7]=0,U.__data[8]=Y.elements[6],U.__data[9]=Y.elements[7],U.__data[10]=Y.elements[8],U.__data[11]=0):(Y.toArray(U.__data,D),D+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,w,A,P){const T=S.value,R=w+"_"+A;if(P[R]===void 0)return typeof T=="number"||typeof T=="boolean"?P[R]=T:P[R]=T.clone(),!0;{const k=P[R];if(typeof T=="number"||typeof T=="boolean"){if(k!==T)return P[R]=T,!0}else if(k.equals(T)===!1)return k.copy(T),!0}return!1}function _(S){const w=S.uniforms;let A=0;const P=16;for(let R=0,k=w.length;R<k;R++){const x=Array.isArray(w[R])?w[R]:[w[R]];for(let b=0,U=x.length;b<U;b++){const F=x[b],Q=Array.isArray(F.value)?F.value:[F.value];for(let D=0,z=Q.length;D<z;D++){const Y=Q[D],Z=v(Y),J=A%P;J!==0&&P-J<Z.boundary&&(A+=P-J),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=A,A+=Z.storage}}}const T=A%P;return T>0&&(A+=P-T),S.__size=A,S.__cache={},this}function v(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),w}function f(S){const w=S.target;w.removeEventListener("dispose",f);const A=o.indexOf(w.__bindingPointIndex);o.splice(A,1),i.deleteBuffer(n[w.id]),delete n[w.id],delete a[w.id]}function p(){for(const S in n)i.deleteBuffer(n[S]);o=[],n={},a={}}return{bind:l,update:c,dispose:p}}class zh{constructor(e={}){const{canvas:t=Sv(),context:r=null,depth:n=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;r!==null?d=r.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),_=new Int32Array(4);let v=null,f=null;const p=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dt,this._useLegacyLights=!1,this.toneMapping=Vr,this.toneMappingExposure=1;const w=this;let A=!1,P=0,T=0,R=null,k=-1,x=null;const b=new Ct,U=new Ct;let F=null;const Q=new Ee(0);let D=0,z=t.width,Y=t.height,Z=1,J=null,K=null;const te=new Ct(0,0,z,Y),ne=new Ct(0,0,z,Y);let pe=!1;const X=new Eo;let ee=!1,ve=!1,we=null;const ye=new _t,De=new Ie,Ue=new N,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ge(){return R===null?Z:1}let V=r;function dt(M,H){for(let j=0;j<M.length;j++){const q=M[j],W=t.getContext(q,H);if(W!==null)return W}return null}try{const M={alpha:!0,depth:n,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gs}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",oe,!1),V===null){const H=["webgl2","webgl","experimental-webgl"];if(w.isWebGL1Renderer===!0&&H.shift(),V=dt(H,M),V===null)throw dt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Se,Ne,xe,at,ze,E,y,G,se,re,ie,Me,de,_e,Ae,Be,ae,Qe,C,$,ce,le,Te,ke;function tt(){Se=new zx(V),Ne=new Ix(V,Se,e),Se.init(Ne),le=new bb(V,Se,Ne),xe=new xb(V,Se,Ne),at=new Gx(V),ze=new ob,E=new Mb(V,Se,xe,ze,Ne,le,at),y=new Ux(w),G=new Fx(w),se=new Kv(V,Ne),Te=new Px(V,Se,se,Ne),re=new Bx(V,se,at,Te),ie=new Xx(V,re,se,at),C=new Wx(V,Ne,E),Be=new Dx(ze),Me=new sb(w,y,G,Se,Ne,Te,Be),de=new Rb(w,ze),_e=new cb,Ae=new fb(Se,Ne),Qe=new Cx(w,y,G,xe,ie,d,l),ae=new yb(w,ie,Ne),ke=new Ab(V,at,Ne,xe),$=new Lx(V,Se,at,Ne),ce=new Hx(V,Se,at,Ne),at.programs=Me.programs,w.capabilities=Ne,w.extensions=Se,w.properties=ze,w.renderLists=_e,w.shadowMap=ae,w.state=xe,w.info=at}tt();const Ve=new Tb(w,V);this.xr=Ve,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const M=Se.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Se.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(M){M!==void 0&&(Z=M,this.setSize(z,Y,!1))},this.getSize=function(M){return M.set(z,Y)},this.setSize=function(M,H,j=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=M,Y=H,t.width=Math.floor(M*Z),t.height=Math.floor(H*Z),j===!0&&(t.style.width=M+"px",t.style.height=H+"px"),this.setViewport(0,0,M,H)},this.getDrawingBufferSize=function(M){return M.set(z*Z,Y*Z).floor()},this.setDrawingBufferSize=function(M,H,j){z=M,Y=H,Z=j,t.width=Math.floor(M*j),t.height=Math.floor(H*j),this.setViewport(0,0,M,H)},this.getCurrentViewport=function(M){return M.copy(b)},this.getViewport=function(M){return M.copy(te)},this.setViewport=function(M,H,j,q){M.isVector4?te.set(M.x,M.y,M.z,M.w):te.set(M,H,j,q),xe.viewport(b.copy(te).multiplyScalar(Z).floor())},this.getScissor=function(M){return M.copy(ne)},this.setScissor=function(M,H,j,q){M.isVector4?ne.set(M.x,M.y,M.z,M.w):ne.set(M,H,j,q),xe.scissor(U.copy(ne).multiplyScalar(Z).floor())},this.getScissorTest=function(){return pe},this.setScissorTest=function(M){xe.setScissorTest(pe=M)},this.setOpaqueSort=function(M){J=M},this.setTransparentSort=function(M){K=M},this.getClearColor=function(M){return M.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(M=!0,H=!0,j=!0){let q=0;if(M){let W=!1;if(R!==null){const me=R.texture.format;W=me===rc||me===tc||me===ec}if(W){const me=R.texture.type,Pe=me===Wr||me===Xr||me===Ks||me===ni||me===Ql||me===$l,Fe=Qe.getClearColor(),He=Qe.getClearAlpha(),et=Fe.r,je=Fe.g,qe=Fe.b;Pe?(m[0]=et,m[1]=je,m[2]=qe,m[3]=He,V.clearBufferuiv(V.COLOR,0,m)):(_[0]=et,_[1]=je,_[2]=qe,_[3]=He,V.clearBufferiv(V.COLOR,0,_))}else q|=V.COLOR_BUFFER_BIT}H&&(q|=V.DEPTH_BUFFER_BIT),j&&(q|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),_e.dispose(),Ae.dispose(),ze.dispose(),y.dispose(),G.dispose(),ie.dispose(),Te.dispose(),ke.dispose(),Me.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",ar),Ve.removeEventListener("sessionend",ht),we&&(we.dispose(),we=null),Xt.stop()};function he(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const M=at.autoReset,H=ae.enabled,j=ae.autoUpdate,q=ae.needsUpdate,W=ae.type;tt(),at.autoReset=M,ae.enabled=H,ae.autoUpdate=j,ae.needsUpdate=q,ae.type=W}function oe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ge(M){const H=M.target;H.removeEventListener("dispose",ge),Oe(H)}function Oe(M){Ce(M),ze.remove(M)}function Ce(M){const H=ze.get(M).programs;H!==void 0&&(H.forEach(function(j){Me.releaseProgram(j)}),M.isShaderMaterial&&Me.releaseShaderCache(M))}this.renderBufferDirect=function(M,H,j,q,W,me){H===null&&(H=Re);const Pe=W.isMesh&&W.matrixWorld.determinant()<0,Fe=MS(M,H,j,q,W);xe.setMaterial(q,Pe);let He=j.index,et=1;if(q.wireframe===!0){if(He=re.getWireframeAttribute(j),He===void 0)return;et=2}const je=j.drawRange,qe=j.attributes.position;let zt=je.start*et,At=(je.start+je.count)*et;me!==null&&(zt=Math.max(zt,me.start*et),At=Math.min(At,(me.start+me.count)*et)),He!==null?(zt=Math.max(zt,0),At=Math.min(At,He.count)):qe!=null&&(zt=Math.max(zt,0),At=Math.min(At,qe.count));const sr=At-zt;if(sr<0||sr===1/0)return;Te.setup(W,q,Fe,j,He);let Nr,vt=$;if(He!==null&&(Nr=se.get(He),vt=ce,vt.setIndex(Nr)),W.isMesh)q.wireframe===!0?(xe.setLineWidth(q.wireframeLinewidth*Ge()),vt.setMode(V.LINES)):vt.setMode(V.TRIANGLES);else if(W.isLine){let Je=q.linewidth;Je===void 0&&(Je=1),xe.setLineWidth(Je*Ge()),W.isLineSegments?vt.setMode(V.LINES):W.isLineLoop?vt.setMode(V.LINE_LOOP):vt.setMode(V.LINE_STRIP)}else W.isPoints?vt.setMode(V.POINTS):W.isSprite&&vt.setMode(V.TRIANGLES);if(W.isBatchedMesh)vt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)vt.renderInstances(zt,sr,W.count);else if(j.isInstancedBufferGeometry){const Je=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Zo=Math.min(j.instanceCount,Je);vt.renderInstances(zt,sr,Zo)}else vt.render(zt,sr)};function it(M,H,j){M.transparent===!0&&M.side===hr&&M.forceSinglePass===!1?(M.side=qt,M.needsUpdate=!0,ts(M,H,j),M.side=Gr,M.needsUpdate=!0,ts(M,H,j),M.side=hr):ts(M,H,j)}this.compile=function(M,H,j=null){j===null&&(j=M),f=Ae.get(j),f.init(),S.push(f),j.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(f.pushLight(W),W.castShadow&&f.pushShadow(W))}),M!==j&&M.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(f.pushLight(W),W.castShadow&&f.pushShadow(W))}),f.setupLights(w._useLegacyLights);const q=new Set;return M.traverse(function(W){const me=W.material;if(me)if(Array.isArray(me))for(let Pe=0;Pe<me.length;Pe++){const Fe=me[Pe];it(Fe,j,W),q.add(Fe)}else it(me,j,W),q.add(me)}),S.pop(),f=null,q},this.compileAsync=function(M,H,j=null){const q=this.compile(M,H,j);return new Promise(W=>{function me(){if(q.forEach(function(Pe){ze.get(Pe).currentProgram.isReady()&&q.delete(Pe)}),q.size===0){W(M);return}setTimeout(me,10)}Se.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let ct=null;function Mt(M){ct&&ct(M)}function ar(){Xt.stop()}function ht(){Xt.start()}const Xt=new lh;Xt.setAnimationLoop(Mt),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(M){ct=M,Ve.setAnimationLoop(M),M===null?Xt.stop():Xt.start()},Ve.addEventListener("sessionstart",ar),Ve.addEventListener("sessionend",ht),this.render=function(M,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(H),H=Ve.getCamera()),M.isScene===!0&&M.onBeforeRender(w,M,H,R),f=Ae.get(M,S.length),f.init(),S.push(f),ye.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),X.setFromProjectionMatrix(ye),ve=this.localClippingEnabled,ee=Be.init(this.clippingPlanes,ve),v=_e.get(M,p.length),v.init(),p.push(v),Er(M,H,0,w.sortObjects),v.finish(),w.sortObjects===!0&&v.sort(J,K),this.info.render.frame++,ee===!0&&Be.beginShadows();const j=f.state.shadowsArray;if(ae.render(j,M,H),ee===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qe.render(v,M),f.setupLights(w._useLegacyLights),H.isArrayCamera){const q=H.cameras;for(let W=0,me=q.length;W<me;W++){const Pe=q[W];fu(v,M,Pe,Pe.viewport)}}else fu(v,M,H);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),M.isScene===!0&&M.onAfterRender(w,M,H),Te.resetDefaultState(),k=-1,x=null,S.pop(),S.length>0?f=S[S.length-1]:f=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Er(M,H,j,q){if(M.visible===!1)return;if(M.layers.test(H.layers)){if(M.isGroup)j=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(H);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||X.intersectsSprite(M)){q&&Ue.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ye);const me=ie.update(M),Pe=M.material;Pe.visible&&v.push(M,me,Pe,j,Ue.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||X.intersectsObject(M))){const me=ie.update(M),Pe=M.material;if(q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ue.copy(M.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ue.copy(me.boundingSphere.center)),Ue.applyMatrix4(M.matrixWorld).applyMatrix4(ye)),Array.isArray(Pe)){const Fe=me.groups;for(let He=0,et=Fe.length;He<et;He++){const je=Fe[He],qe=Pe[je.materialIndex];qe&&qe.visible&&v.push(M,me,qe,j,Ue.z,je)}}else Pe.visible&&v.push(M,me,Pe,j,Ue.z,null)}}const W=M.children;for(let me=0,Pe=W.length;me<Pe;me++)Er(W[me],H,j,q)}function fu(M,H,j,q){const W=M.opaque,me=M.transmissive,Pe=M.transparent;f.setupLightsView(j),ee===!0&&Be.setGlobalState(w.clippingPlanes,j),me.length>0&&xS(W,me,H,j),q&&xe.viewport(b.copy(q)),W.length>0&&es(W,H,j),me.length>0&&es(me,H,j),Pe.length>0&&es(Pe,H,j),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function xS(M,H,j,q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const W=Ne.isWebGL2;we===null&&(we=new li(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?fn:Wr,minFilter:mn,samples:W?4:0})),w.getDrawingBufferSize(De),W?we.setSize(De.x,De.y):we.setSize(pa(De.x),pa(De.y));const me=w.getRenderTarget();w.setRenderTarget(we),w.getClearColor(Q),D=w.getClearAlpha(),D<1&&w.setClearColor(16777215,.5),w.clear();const Pe=w.toneMapping;w.toneMapping=Vr,es(M,j,q),E.updateMultisampleRenderTarget(we),E.updateRenderTargetMipmap(we);let Fe=!1;for(let He=0,et=H.length;He<et;He++){const je=H[He],qe=je.object,zt=je.geometry,At=je.material,sr=je.group;if(At.side===hr&&qe.layers.test(q.layers)){const Nr=At.side;At.side=qt,At.needsUpdate=!0,gu(qe,j,q,zt,At,sr),At.side=Nr,At.needsUpdate=!0,Fe=!0}}Fe===!0&&(E.updateMultisampleRenderTarget(we),E.updateRenderTargetMipmap(we)),w.setRenderTarget(me),w.setClearColor(Q,D),w.toneMapping=Pe}function es(M,H,j){const q=H.isScene===!0?H.overrideMaterial:null;for(let W=0,me=M.length;W<me;W++){const Pe=M[W],Fe=Pe.object,He=Pe.geometry,et=q===null?Pe.material:q,je=Pe.group;Fe.layers.test(j.layers)&&gu(Fe,H,j,He,et,je)}}function gu(M,H,j,q,W,me){M.onBeforeRender(w,H,j,q,W,me),M.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(w,H,j,q,M,me),W.transparent===!0&&W.side===hr&&W.forceSinglePass===!1?(W.side=qt,W.needsUpdate=!0,w.renderBufferDirect(j,H,q,W,M,me),W.side=Gr,W.needsUpdate=!0,w.renderBufferDirect(j,H,q,W,M,me),W.side=hr):w.renderBufferDirect(j,H,q,W,M,me),M.onAfterRender(w,H,j,q,W,me)}function ts(M,H,j){H.isScene!==!0&&(H=Re);const q=ze.get(M),W=f.state.lights,me=f.state.shadowsArray,Pe=W.state.version,Fe=Me.getParameters(M,W.state,me,H,j),He=Me.getProgramCacheKey(Fe);let et=q.programs;q.environment=M.isMeshStandardMaterial?H.environment:null,q.fog=H.fog,q.envMap=(M.isMeshStandardMaterial?G:y).get(M.envMap||q.environment),et===void 0&&(M.addEventListener("dispose",ge),et=new Map,q.programs=et);let je=et.get(He);if(je!==void 0){if(q.currentProgram===je&&q.lightsStateVersion===Pe)return vu(M,Fe),je}else Fe.uniforms=Me.getUniforms(M),M.onBuild(j,Fe,w),M.onBeforeCompile(Fe,w),je=Me.acquireProgram(Fe,He),et.set(He,je),q.uniforms=Fe.uniforms;const qe=q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(qe.clippingPlanes=Be.uniform),vu(M,Fe),q.needsLights=SS(M),q.lightsStateVersion=Pe,q.needsLights&&(qe.ambientLightColor.value=W.state.ambient,qe.lightProbe.value=W.state.probe,qe.directionalLights.value=W.state.directional,qe.directionalLightShadows.value=W.state.directionalShadow,qe.spotLights.value=W.state.spot,qe.spotLightShadows.value=W.state.spotShadow,qe.rectAreaLights.value=W.state.rectArea,qe.ltc_1.value=W.state.rectAreaLTC1,qe.ltc_2.value=W.state.rectAreaLTC2,qe.pointLights.value=W.state.point,qe.pointLightShadows.value=W.state.pointShadow,qe.hemisphereLights.value=W.state.hemi,qe.directionalShadowMap.value=W.state.directionalShadowMap,qe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,qe.spotShadowMap.value=W.state.spotShadowMap,qe.spotLightMatrix.value=W.state.spotLightMatrix,qe.spotLightMap.value=W.state.spotLightMap,qe.pointShadowMap.value=W.state.pointShadowMap,qe.pointShadowMatrix.value=W.state.pointShadowMatrix),q.currentProgram=je,q.uniformsList=null,je}function _u(M){if(M.uniformsList===null){const H=M.currentProgram.getUniforms();M.uniformsList=za.seqWithValue(H.seq,M.uniforms)}return M.uniformsList}function vu(M,H){const j=ze.get(M);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function MS(M,H,j,q,W){H.isScene!==!0&&(H=Re),E.resetTextureUnits();const me=H.fog,Pe=q.isMeshStandardMaterial?H.environment:null,Fe=R===null?w.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ar,He=(q.isMeshStandardMaterial?G:y).get(q.envMap||Pe),et=q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,je=!!j.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),qe=!!j.morphAttributes.position,zt=!!j.morphAttributes.normal,At=!!j.morphAttributes.color;let sr=Vr;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(sr=w.toneMapping);const Nr=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,vt=Nr!==void 0?Nr.length:0,Je=ze.get(q),Zo=f.state.lights;if(ee===!0&&(ve===!0||M!==x)){const or=M===x&&q.id===k;Be.setState(q,M,or)}let Qo=!1;q.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Zo.state.version||Je.outputColorSpace!==Fe||W.isBatchedMesh&&Je.batching===!1||!W.isBatchedMesh&&Je.batching===!0||W.isInstancedMesh&&Je.instancing===!1||!W.isInstancedMesh&&Je.instancing===!0||W.isSkinnedMesh&&Je.skinning===!1||!W.isSkinnedMesh&&Je.skinning===!0||W.isInstancedMesh&&Je.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Je.instancingColor===!1&&W.instanceColor!==null||Je.envMap!==He||q.fog===!0&&Je.fog!==me||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Be.numPlanes||Je.numIntersection!==Be.numIntersection)||Je.vertexAlphas!==et||Je.vertexTangents!==je||Je.morphTargets!==qe||Je.morphNormals!==zt||Je.morphColors!==At||Je.toneMapping!==sr||Ne.isWebGL2===!0&&Je.morphTargetsCount!==vt)&&(Qo=!0):(Qo=!0,Je.__version=q.version);let gi=Je.currentProgram;Qo===!0&&(gi=ts(q,H,W));let wu=!1,Un=!1,$o=!1;const Bt=gi.getUniforms(),_i=Je.uniforms;if(xe.useProgram(gi.program)&&(wu=!0,Un=!0,$o=!0),q.id!==k&&(k=q.id,Un=!0),wu||x!==M){Bt.setValue(V,"projectionMatrix",M.projectionMatrix),Bt.setValue(V,"viewMatrix",M.matrixWorldInverse);const or=Bt.map.cameraPosition;or!==void 0&&or.setValue(V,Ue.setFromMatrixPosition(M.matrixWorld)),Ne.logarithmicDepthBuffer&&Bt.setValue(V,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Bt.setValue(V,"isOrthographic",M.isOrthographicCamera===!0),x!==M&&(x=M,Un=!0,$o=!0)}if(W.isSkinnedMesh){Bt.setOptional(V,W,"bindMatrix"),Bt.setOptional(V,W,"bindMatrixInverse");const or=W.skeleton;or&&(Ne.floatVertexTextures?(or.boneTexture===null&&or.computeBoneTexture(),Bt.setValue(V,"boneTexture",or.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(Bt.setOptional(V,W,"batchingTexture"),Bt.setValue(V,"batchingTexture",W._matricesTexture,E));const el=j.morphAttributes;if((el.position!==void 0||el.normal!==void 0||el.color!==void 0&&Ne.isWebGL2===!0)&&C.update(W,j,gi),(Un||Je.receiveShadow!==W.receiveShadow)&&(Je.receiveShadow=W.receiveShadow,Bt.setValue(V,"receiveShadow",W.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(_i.envMap.value=He,_i.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),Un&&(Bt.setValue(V,"toneMappingExposure",w.toneMappingExposure),Je.needsLights&&bS(_i,$o),me&&q.fog===!0&&de.refreshFogUniforms(_i,me),de.refreshMaterialUniforms(_i,q,Z,Y,we),za.upload(V,_u(Je),_i,E)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(za.upload(V,_u(Je),_i,E),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Bt.setValue(V,"center",W.center),Bt.setValue(V,"modelViewMatrix",W.modelViewMatrix),Bt.setValue(V,"normalMatrix",W.normalMatrix),Bt.setValue(V,"modelMatrix",W.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const or=q.uniformsGroups;for(let tl=0,ES=or.length;tl<ES;tl++)if(Ne.isWebGL2){const yu=or[tl];ke.update(yu,gi),ke.bind(yu,gi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gi}function bS(M,H){M.ambientLightColor.needsUpdate=H,M.lightProbe.needsUpdate=H,M.directionalLights.needsUpdate=H,M.directionalLightShadows.needsUpdate=H,M.pointLights.needsUpdate=H,M.pointLightShadows.needsUpdate=H,M.spotLights.needsUpdate=H,M.spotLightShadows.needsUpdate=H,M.rectAreaLights.needsUpdate=H,M.hemisphereLights.needsUpdate=H}function SS(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(M,H,j){ze.get(M.texture).__webglTexture=H,ze.get(M.depthTexture).__webglTexture=j;const q=ze.get(M);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=j===void 0,q.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,H){const j=ze.get(M);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(M,H=0,j=0){R=M,P=H,T=j;let q=!0,W=null,me=!1,Pe=!1;if(M){const Fe=ze.get(M);Fe.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(V.FRAMEBUFFER,null),q=!1):Fe.__webglFramebuffer===void 0?E.setupRenderTarget(M):Fe.__hasExternalTextures&&E.rebindTextures(M,ze.get(M.texture).__webglTexture,ze.get(M.depthTexture).__webglTexture);const He=M.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Pe=!0);const et=ze.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(et[H])?W=et[H][j]:W=et[H],me=!0):Ne.isWebGL2&&M.samples>0&&E.useMultisampledRTT(M)===!1?W=ze.get(M).__webglMultisampledFramebuffer:Array.isArray(et)?W=et[j]:W=et,b.copy(M.viewport),U.copy(M.scissor),F=M.scissorTest}else b.copy(te).multiplyScalar(Z).floor(),U.copy(ne).multiplyScalar(Z).floor(),F=pe;if(xe.bindFramebuffer(V.FRAMEBUFFER,W)&&Ne.drawBuffers&&q&&xe.drawBuffers(M,W),xe.viewport(b),xe.scissor(U),xe.setScissorTest(F),me){const Fe=ze.get(M.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+H,Fe.__webglTexture,j)}else if(Pe){const Fe=ze.get(M.texture),He=H||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Fe.__webglTexture,j||0,He)}k=-1},this.readRenderTargetPixels=function(M,H,j,q,W,me,Pe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=ze.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe){xe.bindFramebuffer(V.FRAMEBUFFER,Fe);try{const He=M.texture,et=He.format,je=He.type;if(et!==dr&&le.convert(et)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=je===fn&&(Se.has("EXT_color_buffer_half_float")||Ne.isWebGL2&&Se.has("EXT_color_buffer_float"));if(je!==Wr&&le.convert(je)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(je===jr&&(Ne.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=M.width-q&&j>=0&&j<=M.height-W&&V.readPixels(H,j,q,W,le.convert(et),le.convert(je),me)}finally{const He=R!==null?ze.get(R).__webglFramebuffer:null;xe.bindFramebuffer(V.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(M,H,j=0){const q=Math.pow(2,-j),W=Math.floor(H.image.width*q),me=Math.floor(H.image.height*q);E.setTexture2D(H,0),V.copyTexSubImage2D(V.TEXTURE_2D,j,0,0,M.x,M.y,W,me),xe.unbindTexture()},this.copyTextureToTexture=function(M,H,j,q=0){const W=H.image.width,me=H.image.height,Pe=le.convert(j.format),Fe=le.convert(j.type);E.setTexture2D(j,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment),H.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,q,M.x,M.y,W,me,Pe,Fe,H.image.data):H.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,q,M.x,M.y,H.mipmaps[0].width,H.mipmaps[0].height,Pe,H.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,q,M.x,M.y,Pe,Fe,H.image),q===0&&j.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(M,H,j,q,W=0){if(w.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=M.max.x-M.min.x+1,Pe=M.max.y-M.min.y+1,Fe=M.max.z-M.min.z+1,He=le.convert(q.format),et=le.convert(q.type);let je;if(q.isData3DTexture)E.setTexture3D(q,0),je=V.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)E.setTexture2DArray(q,0),je=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);const qe=V.getParameter(V.UNPACK_ROW_LENGTH),zt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),At=V.getParameter(V.UNPACK_SKIP_PIXELS),sr=V.getParameter(V.UNPACK_SKIP_ROWS),Nr=V.getParameter(V.UNPACK_SKIP_IMAGES),vt=j.isCompressedTexture?j.mipmaps[W]:j.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,vt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,vt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,M.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,M.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,M.min.z),j.isDataTexture||j.isData3DTexture?V.texSubImage3D(je,W,H.x,H.y,H.z,me,Pe,Fe,He,et,vt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(je,W,H.x,H.y,H.z,me,Pe,Fe,He,vt.data)):V.texSubImage3D(je,W,H.x,H.y,H.z,me,Pe,Fe,He,et,vt),V.pixelStorei(V.UNPACK_ROW_LENGTH,qe),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,zt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,At),V.pixelStorei(V.UNPACK_SKIP_ROWS,sr),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Nr),W===0&&q.generateMipmaps&&V.generateMipmap(je),xe.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),xe.unbindTexture()},this.resetState=function(){P=0,T=0,R=null,xe.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===to?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===oa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Dt?si:Cc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===si?Dt:Ar}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Cb extends zh{}Cb.prototype.isWebGL1Renderer=!0;class Uo{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new Ee(e),this.near=t,this.far=r}clone(){return new Uo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Pb extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class No extends ir{constructor(e=1,t=32,r=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:n},t=Math.max(3,t);const a=[],o=[],s=[],l=[],c=new N,h=new Ie;o.push(0,0,0),s.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const m=r+u/t*n;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),s.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new Lt(o,3)),this.setAttribute("normal",new Lt(s,3)),this.setAttribute("uv",new Lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ha extends ir{constructor(e=1,t=1,r=1,n=32,a=1,o=!1,s=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:n,heightSegments:a,openEnded:o,thetaStart:s,thetaLength:l};const c=this;n=Math.floor(n),a=Math.floor(a);const h=[],u=[],d=[],m=[];let _=0;const v=[],f=r/2;let p=0;S(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Lt(u,3)),this.setAttribute("normal",new Lt(d,3)),this.setAttribute("uv",new Lt(m,2));function S(){const A=new N,P=new N;let T=0;const R=(t-e)/r;for(let k=0;k<=a;k++){const x=[],b=k/a,U=b*(t-e)+e;for(let F=0;F<=n;F++){const Q=F/n,D=Q*l+s,z=Math.sin(D),Y=Math.cos(D);P.x=U*z,P.y=-b*r+f,P.z=U*Y,u.push(P.x,P.y,P.z),A.set(z,R,Y).normalize(),d.push(A.x,A.y,A.z),m.push(Q,1-b),x.push(_++)}v.push(x)}for(let k=0;k<n;k++)for(let x=0;x<a;x++){const b=v[x][k],U=v[x+1][k],F=v[x+1][k+1],Q=v[x][k+1];h.push(b,U,Q),h.push(U,F,Q),T+=6}c.addGroup(p,T,0),p+=T}function w(A){const P=_,T=new Ie,R=new N;let k=0;const x=A===!0?e:t,b=A===!0?1:-1;for(let F=1;F<=n;F++)u.push(0,f*b,0),d.push(0,b,0),m.push(.5,.5),_++;const U=_;for(let F=0;F<=n;F++){const Q=F/n*l+s,D=Math.cos(Q),z=Math.sin(Q);R.x=x*z,R.y=f*b,R.z=x*D,u.push(R.x,R.y,R.z),d.push(0,b,0),T.x=D*.5+.5,T.y=z*.5*b+.5,m.push(T.x,T.y),_++}for(let F=0;F<n;F++){const Q=P+F,D=U+F;A===!0?h.push(D,D+1,Q):h.push(D+1,D,Q),k+=3}c.addGroup(p,k,A===!0?1:2),p+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Oo extends ir{constructor(e=1,t=32,r=16,n=0,a=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:n,phiLength:a,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const l=Math.min(o+s,Math.PI);let c=0;const h=[],u=new N,d=new N,m=[],_=[],v=[],f=[];for(let p=0;p<=r;p++){const S=[],w=p/r;let A=0;p===0&&o===0?A=.5/t:p===r&&l===Math.PI&&(A=-.5/t);for(let P=0;P<=t;P++){const T=P/t;u.x=-e*Math.cos(n+T*a)*Math.sin(o+w*s),u.y=e*Math.cos(o+w*s),u.z=e*Math.sin(n+T*a)*Math.sin(o+w*s),_.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),f.push(T+A,1-w),S.push(c++)}h.push(S)}for(let p=0;p<r;p++)for(let S=0;S<t;S++){const w=h[p][S+1],A=h[p][S],P=h[p+1][S],T=h[p+1][S+1];(p!==0||o>0)&&m.push(w,A,T),(p!==r-1||l<Math.PI)&&m.push(A,P,T)}this.setIndex(m),this.setAttribute("position",new Lt(_,3)),this.setAttribute("normal",new Lt(v,3)),this.setAttribute("uv",new Lt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Lb extends Tn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ga extends Lb{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Bh extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Ib extends Bh{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Fo=new _t,Hh=new N,Gh=new N;class Db{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eo,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Hh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hh),Gh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gh),t.updateMatrixWorld(),Fo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fo),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Fo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ub extends Db{constructor(){super(new ch(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nb extends Bh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new Ub}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ob{constructor(e,t,r=0,n=1/0){this.ray=new fo(e,t),this.near=r,this.far=n,this.camera=null,this.layers=new go,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,r=[]){return zo(e,this,r,t),r.sort(kh),r}intersectObjects(e,t=!0,r=[]){for(let n=0,a=e.length;n<a;n++)zo(e[n],this,r,t);return r.sort(kh),r}}function kh(i,e){return i.distance-e.distance}function zo(i,e,t,r){if(i.layers.test(e.layers)&&i.raycast(e,t),r===!0){const n=i.children;for(let a=0,o=n.length;a<o;a++)zo(n[a],e,t,!0)}}class Vh{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gs}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gs);const Wh={type:"change"},Bo={type:"start"},Xh={type:"end"},ka=new fo,jh=new Mr,Fb=Math.cos(70*bv.DEG2RAD);class zb extends oi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Si.ROTATE,MIDDLE:Si.DOLLY,RIGHT:Si.PAN},this.touches={ONE:Ei.ROTATE,TWO:Ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",ie),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ie),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(Wh),r.update(),a=n.NONE},this.update=function(){const C=new N,$=new xr().setFromUnitVectors(e.up,new N(0,1,0)),ce=$.clone().invert(),le=new N,Te=new xr,ke=new N,tt=2*Math.PI;return function(Ve=null){const he=r.object.position;C.copy(he).sub(r.target),C.applyQuaternion($),s.setFromVector3(C),r.autoRotate&&a===n.NONE&&U(x(Ve)),r.enableDamping?(s.theta+=l.theta*r.dampingFactor,s.phi+=l.phi*r.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let L=r.minAzimuthAngle,oe=r.maxAzimuthAngle;isFinite(L)&&isFinite(oe)&&(L<-Math.PI?L+=tt:L>Math.PI&&(L-=tt),oe<-Math.PI?oe+=tt:oe>Math.PI&&(oe-=tt),L<=oe?s.theta=Math.max(L,Math.min(oe,s.theta)):s.theta=s.theta>(L+oe)/2?Math.max(L,s.theta):Math.min(oe,s.theta)),s.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,s.phi)),s.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(h,r.dampingFactor):r.target.add(h),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor),r.zoomToCursor&&T||r.object.isOrthographicCamera?s.radius=K(s.radius):s.radius=K(s.radius*c),C.setFromSpherical(s),C.applyQuaternion(ce),he.copy(r.target).add(C),r.object.lookAt(r.target),r.enableDamping===!0?(l.theta*=1-r.dampingFactor,l.phi*=1-r.dampingFactor,h.multiplyScalar(1-r.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let ge=!1;if(r.zoomToCursor&&T){let Oe=null;if(r.object.isPerspectiveCamera){const Ce=C.length();Oe=K(Ce*c);const it=Ce-Oe;r.object.position.addScaledVector(A,it),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const Ce=new N(P.x,P.y,0);Ce.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/c)),r.object.updateProjectionMatrix(),ge=!0;const it=new N(P.x,P.y,0);it.unproject(r.object),r.object.position.sub(it).add(Ce),r.object.updateMatrixWorld(),Oe=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;Oe!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(Oe).add(r.object.position):(ka.origin.copy(r.object.position),ka.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(ka.direction))<Fb?e.lookAt(r.target):(jh.setFromNormalAndCoplanarPoint(r.object.up,r.target),ka.intersectPlane(jh,r.target))))}else r.object.isOrthographicCamera&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/c)),r.object.updateProjectionMatrix(),ge=!0);return c=1,T=!1,ge||le.distanceToSquared(r.object.position)>o||8*(1-Te.dot(r.object.quaternion))>o||ke.distanceToSquared(r.target)>0?(r.dispatchEvent(Wh),le.copy(r.object.position),Te.copy(r.object.quaternion),ke.copy(r.target),!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",_e),r.domElement.removeEventListener("pointerdown",ze),r.domElement.removeEventListener("pointercancel",y),r.domElement.removeEventListener("wheel",re),r.domElement.removeEventListener("pointermove",E),r.domElement.removeEventListener("pointerup",y),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",ie),r._domElementKeyEvents=null)};const r=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=n.NONE;const o=1e-6,s=new Vh,l=new Vh;let c=1;const h=new N,u=new Ie,d=new Ie,m=new Ie,_=new Ie,v=new Ie,f=new Ie,p=new Ie,S=new Ie,w=new Ie,A=new N,P=new Ie;let T=!1;const R=[],k={};function x(C){return C!==null?2*Math.PI/60*r.autoRotateSpeed*C:2*Math.PI/60/60*r.autoRotateSpeed}function b(C){const $=Math.abs(C)/(100*(window.devicePixelRatio|0));return Math.pow(.95,r.zoomSpeed*$)}function U(C){l.theta-=C}function F(C){l.phi-=C}const Q=function(){const C=new N;return function($,ce){C.setFromMatrixColumn(ce,0),C.multiplyScalar(-$),h.add(C)}}(),D=function(){const C=new N;return function($,ce){r.screenSpacePanning===!0?C.setFromMatrixColumn(ce,1):(C.setFromMatrixColumn(ce,0),C.crossVectors(r.object.up,C)),C.multiplyScalar($),h.add(C)}}(),z=function(){const C=new N;return function($,ce){const le=r.domElement;if(r.object.isPerspectiveCamera){const Te=r.object.position;C.copy(Te).sub(r.target);let ke=C.length();ke*=Math.tan(r.object.fov/2*Math.PI/180),Q(2*$*ke/le.clientHeight,r.object.matrix),D(2*ce*ke/le.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(Q($*(r.object.right-r.object.left)/r.object.zoom/le.clientWidth,r.object.matrix),D(ce*(r.object.top-r.object.bottom)/r.object.zoom/le.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function Y(C){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?c/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function Z(C){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?c*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function J(C,$){if(!r.zoomToCursor)return;T=!0;const ce=r.domElement.getBoundingClientRect(),le=C-ce.left,Te=$-ce.top,ke=ce.width,tt=ce.height;P.x=le/ke*2-1,P.y=-(Te/tt)*2+1,A.set(P.x,P.y,1).unproject(r.object).sub(r.object.position).normalize()}function K(C){return Math.max(r.minDistance,Math.min(r.maxDistance,C))}function te(C){u.set(C.clientX,C.clientY)}function ne(C){J(C.clientX,C.clientX),p.set(C.clientX,C.clientY)}function pe(C){_.set(C.clientX,C.clientY)}function X(C){d.set(C.clientX,C.clientY),m.subVectors(d,u).multiplyScalar(r.rotateSpeed);const $=r.domElement;U(2*Math.PI*m.x/$.clientHeight),F(2*Math.PI*m.y/$.clientHeight),u.copy(d),r.update()}function ee(C){S.set(C.clientX,C.clientY),w.subVectors(S,p),w.y>0?Y(b(w.y)):w.y<0&&Z(b(w.y)),p.copy(S),r.update()}function ve(C){v.set(C.clientX,C.clientY),f.subVectors(v,_).multiplyScalar(r.panSpeed),z(f.x,f.y),_.copy(v),r.update()}function we(C){J(C.clientX,C.clientY),C.deltaY<0?Z(b(C.deltaY)):C.deltaY>0&&Y(b(C.deltaY)),r.update()}function ye(C){let $=!1;switch(C.code){case r.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?F(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):z(0,r.keyPanSpeed),$=!0;break;case r.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?F(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):z(0,-r.keyPanSpeed),$=!0;break;case r.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?U(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):z(r.keyPanSpeed,0),$=!0;break;case r.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?U(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):z(-r.keyPanSpeed,0),$=!0;break}$&&(C.preventDefault(),r.update())}function De(C){if(R.length===1)u.set(C.pageX,C.pageY);else{const $=Qe(C),ce=.5*(C.pageX+$.x),le=.5*(C.pageY+$.y);u.set(ce,le)}}function Ue(C){if(R.length===1)_.set(C.pageX,C.pageY);else{const $=Qe(C),ce=.5*(C.pageX+$.x),le=.5*(C.pageY+$.y);_.set(ce,le)}}function Re(C){const $=Qe(C),ce=C.pageX-$.x,le=C.pageY-$.y,Te=Math.sqrt(ce*ce+le*le);p.set(0,Te)}function Ge(C){r.enableZoom&&Re(C),r.enablePan&&Ue(C)}function V(C){r.enableZoom&&Re(C),r.enableRotate&&De(C)}function dt(C){if(R.length==1)d.set(C.pageX,C.pageY);else{const ce=Qe(C),le=.5*(C.pageX+ce.x),Te=.5*(C.pageY+ce.y);d.set(le,Te)}m.subVectors(d,u).multiplyScalar(r.rotateSpeed);const $=r.domElement;U(2*Math.PI*m.x/$.clientHeight),F(2*Math.PI*m.y/$.clientHeight),u.copy(d)}function Se(C){if(R.length===1)v.set(C.pageX,C.pageY);else{const $=Qe(C),ce=.5*(C.pageX+$.x),le=.5*(C.pageY+$.y);v.set(ce,le)}f.subVectors(v,_).multiplyScalar(r.panSpeed),z(f.x,f.y),_.copy(v)}function Ne(C){const $=Qe(C),ce=C.pageX-$.x,le=C.pageY-$.y,Te=Math.sqrt(ce*ce+le*le);S.set(0,Te),w.set(0,Math.pow(S.y/p.y,r.zoomSpeed)),Y(w.y),p.copy(S);const ke=(C.pageX+$.x)*.5,tt=(C.pageY+$.y)*.5;J(ke,tt)}function xe(C){r.enableZoom&&Ne(C),r.enablePan&&Se(C)}function at(C){r.enableZoom&&Ne(C),r.enableRotate&&dt(C)}function ze(C){r.enabled!==!1&&(R.length===0&&(r.domElement.setPointerCapture(C.pointerId),r.domElement.addEventListener("pointermove",E),r.domElement.addEventListener("pointerup",y)),Ae(C),C.pointerType==="touch"?Me(C):G(C))}function E(C){r.enabled!==!1&&(C.pointerType==="touch"?de(C):se(C))}function y(C){Be(C),R.length===0&&(r.domElement.releasePointerCapture(C.pointerId),r.domElement.removeEventListener("pointermove",E),r.domElement.removeEventListener("pointerup",y)),r.dispatchEvent(Xh),a=n.NONE}function G(C){let $;switch(C.button){case 0:$=r.mouseButtons.LEFT;break;case 1:$=r.mouseButtons.MIDDLE;break;case 2:$=r.mouseButtons.RIGHT;break;default:$=-1}switch($){case Si.DOLLY:if(r.enableZoom===!1)return;ne(C),a=n.DOLLY;break;case Si.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(r.enablePan===!1)return;pe(C),a=n.PAN}else{if(r.enableRotate===!1)return;te(C),a=n.ROTATE}break;case Si.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(r.enableRotate===!1)return;te(C),a=n.ROTATE}else{if(r.enablePan===!1)return;pe(C),a=n.PAN}break;default:a=n.NONE}a!==n.NONE&&r.dispatchEvent(Bo)}function se(C){switch(a){case n.ROTATE:if(r.enableRotate===!1)return;X(C);break;case n.DOLLY:if(r.enableZoom===!1)return;ee(C);break;case n.PAN:if(r.enablePan===!1)return;ve(C);break}}function re(C){r.enabled===!1||r.enableZoom===!1||a!==n.NONE||(C.preventDefault(),r.dispatchEvent(Bo),we(C),r.dispatchEvent(Xh))}function ie(C){r.enabled===!1||r.enablePan===!1||ye(C)}function Me(C){switch(ae(C),R.length){case 1:switch(r.touches.ONE){case Ei.ROTATE:if(r.enableRotate===!1)return;De(C),a=n.TOUCH_ROTATE;break;case Ei.PAN:if(r.enablePan===!1)return;Ue(C),a=n.TOUCH_PAN;break;default:a=n.NONE}break;case 2:switch(r.touches.TWO){case Ei.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;Ge(C),a=n.TOUCH_DOLLY_PAN;break;case Ei.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;V(C),a=n.TOUCH_DOLLY_ROTATE;break;default:a=n.NONE}break;default:a=n.NONE}a!==n.NONE&&r.dispatchEvent(Bo)}function de(C){switch(ae(C),a){case n.TOUCH_ROTATE:if(r.enableRotate===!1)return;dt(C),r.update();break;case n.TOUCH_PAN:if(r.enablePan===!1)return;Se(C),r.update();break;case n.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;xe(C),r.update();break;case n.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;at(C),r.update();break;default:a=n.NONE}}function _e(C){r.enabled!==!1&&C.preventDefault()}function Ae(C){R.push(C.pointerId)}function Be(C){delete k[C.pointerId];for(let $=0;$<R.length;$++)if(R[$]==C.pointerId){R.splice($,1);return}}function ae(C){let $=k[C.pointerId];$===void 0&&($=new Ie,k[C.pointerId]=$),$.set(C.pageX,C.pageY)}function Qe(C){const $=C.pointerId===R[0]?R[1]:R[0];return k[$]}r.domElement.addEventListener("contextmenu",_e),r.domElement.addEventListener("pointerdown",ze),r.domElement.addEventListener("pointercancel",y),r.domElement.addEventListener("wheel",re,{passive:!1}),this.update()}}function Bb(i,e){const t=e.translation();i.position.set(t.x,t.y,t.z);const r=e.rotation();i.quaternion.set(r.x,r.y,r.z,r.w)}function Hb(i){let e=new N(0,1,0),t;i.y==1||i.y==-1?t=new N(1,0,0):t=new N().crossVectors(e,i);let r=Math.acos(i.dot(e));return new xr().setFromAxisAngle(t,r)}function qh(i){return new N(i.x,i.y,i.z)}const Yh=new Sn,Kh=new xr;class Gb{constructor(e,t){this.visual=e,this.physical=t}matchTransform(){Bb(this.visual,this.physical)}setPosition(e,t,r){this.physical.setTranslation(new gt.Vector3(e,t,r),!1)}setEuler(e,t,r,n){Yh.set(e,t,r,n),Kh.setFromEuler(Yh),this.physical.setRotation(Kh,!1)}}function Va(i){return kb[i]}const kb={default:{restitution:.5,density:.5,friction:.5,materialParams:{}},sand:{restitution:0,density:3,friction:.8,materialParams:{color:new Ee(.9,.85,.6),roughness:.7}},dirt:{restitution:.1,density:2.6,friction:.9,materialParams:{color:new Ee(.35,.25,.15),metalness:.5,roughness:.8}},debugWire:{restitution:0,density:3,friction:.8,materialParams:{color:new Ee(0,0,0),roughness:.8,emissive:new Ee(0,0,0),wireframe:!0}},plastic:{restitution:.8,density:.9,friction:.5,materialParams:{color:16733695,roughness:.8,clearcoat:.5,clearcoatRoughness:.2}},concrete:{restitution:.7,density:4,friction:.9,materialParams:{color:new Ee(.9,.9,.9),roughness:1}},snow:{restitution:.1,density:1,friction:.2,materialParams:{color:new Ee(.9,.95,1.1),roughness:.7}},meat:{restitution:.2,density:4,friction:.2,materialParams:{color:16755370,roughness:.5}},water:{restitution:.8,density:.9,friction:0,materialParams:{color:new Ee(.5,.6,1.75),ior:1.5,metalness:0,opacity:1,roughness:.3,specularColor:new Ee(.25,.6,.75),specularIntensity:1,thickness:.01,transmission:1,side:hr}},plasticWater:{restitution:.8,density:.9,friction:0,materialParams:{color:new Ee(.1,.4,1),ior:1.5,metalness:0,opacity:1,roughness:.3,specularColor:new Ee(.25,.6,.75),specularIntensity:1,thickness:.01,transmission:.8,side:hr}},wood:{restitution:.8,density:.5,friction:.7,materialParams:{color:new Ee(.5,.35,.1),roughness:.7,clearcoat:.1,clearcoatRoughness:.3}}};let Ho;function Vb(){return Ho||(Ho=new ji(1,1,1,1,1)),Ho}let Go;function Wb(){return Go||(Go=new Oo(1,32,16)),Go}function ko(i,e,t,r=gt.RigidBodyType.Fixed,n="default"){const a=Wb(),o=gt.ColliderDesc.ball(t),s=Vo(i,e,a,o,r,n);return s.visual.scale.setScalar(t),s}function Wa(i,e,t,r,n,a=gt.RigidBodyType.Fixed,o="default"){const s=Vb(),l=gt.ColliderDesc.cuboid(t*.5,r*.5,n*.5),c=Vo(i,e,s,l,a,o);return c.visual.scale.set(t,r,n),c}function Xb(i,e,t,r=gt.RigidBodyType.Fixed,n="default",a=t){const o=gt.ColliderDesc.trimesh(a.getAttribute("position").array,a.getIndex().array);return Vo(i,e,t,o,r,n)}function Vo(i,e,t,r,n=gt.RigidBodyType.Fixed,a="default"){const o=Va(a),s=new Ga(o.materialParams),l=new Vt(t,s);l.receiveShadow=!0,l.castShadow=!0,i.add(l);const c=new gt.RigidBodyDesc(n);r.setDensity(o.density),r.setRestitution(o.restitution),r.setFriction(o.friction);const h=e.createRigidBody(c);return e.createCollider(r,h),new Gb(l,h)}const Wo=new _t;class jb{constructor(e,t,r){fe(this,"relativePoint");this.intersection=e,this.x=t,this.y=r,Wo.copy(e.object.matrixWorld),Wo.invert(),this.relativePoint=e.point.clone().applyMatrix4(Wo)}}function Jh(i,e,t){return Math.min(t,Math.max(e,i))}function Rt(i,e,t){const r=i+t*(e-i);return Math.abs(e-r)>1e-5?r:e}function Zh(i){return new URL(window.location.href).searchParams.get(i)}function Qh(i){const e=Zh(i);return!!(e===""||e&&e!=="false")}function qb(i,e,t,r=-1/0,n=1/0){return Jh(t(Zh(i)||e.toString()),r,n)}function $h(i,e,t=-1/0,r=1/0){return qb(i,e,parseInt,t,r)}class Yb{constructor(e=!1){fe(this,"keys",new Map);window.addEventListener("keydown",t=>{e&&console.log("keyboard code: "+t.code),this.keys.get(t.code)!==0&&this.keys.set(t.code,0)}),window.addEventListener("keyup",t=>{this.keys.set(t.code,void 0)})}isPressed(e){return this.keys.get(e)!==void 0}consumePressed(e){var t=this.keys.get(e)===0;return t&&this.keys.set(e,1),t}}let Xo;function Kb(){return Xo||(Xo=new Yb(Qh("debugKeyboard"))),Xo}const eu=5,Jb=.08,tu=.04,Zb=.02,ru=1,Qb=.2,Pn=.4,$b=1,iu=.005,Xa=new Ie,eS=new Ie;class tS{constructor(e,t,r,n){fe(this,"keyboard",Kb());fe(this,"visical");fe(this,"legs",[]);fe(this,"tick",eu);fe(this,"legLength",ru);fe(this,"speed",tu);fe(this,"_rotateActive",!1);fe(this,"cameraAngle",0);fe(this,"legShadowCaster");this.world=e,this.camera=r;const a=ko(t,e,Pn,gt.RigidBodyType.Dynamic,"meat");a.physical.collider(0).setRestitution(0),a.physical.lockRotations(!0,!1),a.setPosition(0,.8,5);const o=new Ha(.2,.3,1),s=o.getAttribute("position").array;for(let d=1;d<s.length;d+=3)s[d]+=.5;const l=new Rn;l.colorWrite=!1,l.depthWrite=!1;const c=new Vt(o,l);c.castShadow=!0,c.position.y=-Pn,c.rotation.x=Math.PI,a.visual.add(c),this.visical=a,this.legShadowCaster=c,document.addEventListener("pointerlockchange",()=>{this._rotateActive=document.pointerLockElement===n.domElement},!1),document.addEventListener("click",function(){document.pointerLockElement||n.domElement.requestPointerLock()}),window.addEventListener("keypress",d=>{d.code==="Escape"&&document.pointerLockElement&&document.exitPointerLock()});const h=new Vt(new No(.01,3,Math.PI*-.5),new Rn({wireframe:!0}));r.add(h),h.position.z=-.2;const u=new Pt;document.addEventListener("mousemove",d=>{this._rotateActive&&(r.rotateY(d.movementX*-iu),r.rotateX(d.movementY*-iu),u.position.copy(r.position),u.rotation.copy(r.rotation),u.translateZ(-1),this.cameraAngle=Math.PI*.5-Math.atan2(r.position.z-u.position.z,r.position.x-u.position.x),r.lookAt(u.position))},!1)}update(){const e=this.keyboard.isPressed("ShiftLeft");this.camera.position.copy(this.visical.visual.position);const t=this.keyboard.isPressed("ControlLeft");if(this.legLength=t?Qb:ru,this.speed=t?Zb:e?Jb:tu,this.tick--,this.tick===0&&(this.tick=eu,this.legs.length>0)){const r=this.world.getImpulseJoint(this.legs[0]);this.world.removeImpulseJoint(r,!0),this.legs.length=0}if(this.legs.length===0){let r;const n=qh(this.visical.physical.translation()),a=qh(this.world.gravity).normalize(),o=a.clone().multiplyScalar(Pn);if(n.add(o),this.world.intersectionsWithRay(new gt.Ray(n,a),this.legLength+$b,!1,s=>((!r||r.toi>s.toi)&&(r=s),!0),void 0,void 0,this.visical.physical.collider(0),this.visical.physical),r){const s=n,l=a.clone().multiplyScalar(r.toi);s.add(l);const c=r.collider.parent(),h=new N(s.x,s.y,s.z),u=c.translation(),d=c.rotation(),m=new _t,_=new xr(d.x,d.y,d.z,d.w);m.compose(new N(u.x,u.y,u.z),_,new N(1,1,1)),m.invert(),h.applyMatrix4(m);const v=gt.JointData.fixed(o.clone().add(l),Hb(a.clone().multiplyScalar(-1)),h,_.invert()),f=this.world.createImpulseJoint(v,this.visical.physical,r.collider.parent(),!0);this.legs.push(f.handle)}}if(this.legs.length>0){let r=0;this.keyboard.isPressed("KeyW")?r=this.speed:this.keyboard.isPressed("KeyS")&&(r=-this.speed);let n=0;this.keyboard.isPressed("KeyA")?n=this.speed:this.keyboard.isPressed("KeyD")&&(n=-this.speed);const a=this.world.getImpulseJoint(this.legs[0]),o=a.anchor1();Xa.set(n,r),Xa.rotateAround(eS,-this.cameraAngle);const s=Rt(o.y,-(Pn+this.legLength),.1);a.setAnchor1(new gt.Vector3(o.x+Xa.x,s,o.z+Xa.y)),a.body1().wakeUp(),this.legShadowCaster.scale.y=-s-Pn-.05}}}function rS(){}class iS{constructor(e,t,r,n=rS){fe(this,"progress",0);this.timeStart=e,this.duration=t,this.updateCallback=r,this.completeCallback=n}update(e){this.progress=Math.min(1,(e-this.timeStart)/this.duration),this.updateCallback(this.progress),this.progress===1&&this.completeCallback()}}class nS{constructor(e){fe(this,"time",0);fe(this,"anims",[]);this.frameDuration=e}update(){this.time+=this.frameDuration;for(let e=0;e<this.anims.length;e++)this.anims[e].update(this.time);for(let e=this.anims.length-1;e>=0;e--)this.anims[e].progress===1&&this.anims.splice(e,1)}animate(e,t,r){this.anims.push(new iS(this.time,e,t,r))}}var nu={},ja={};Object.defineProperty(ja,"__esModule",{value:!0}),ja.makeNoise2D=void 0;var Ln=(3-Math.sqrt(3))/6,jo=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[1,0],[-1,0],[0,1],[0,-1],[0,1],[0,-1]];function aS(i){i===void 0&&(i=Math.random);for(var e=new Uint8Array(256),t=0;t<256;t++)e[t]=t;for(var r,n,t=255;t>0;t--)r=Math.floor((t+1)*i()),n=e[t],e[t]=e[r],e[r]=n;for(var a=new Uint8Array(512),o=new Uint8Array(512),t=0;t<512;t++)a[t]=e[t&255],o[t]=a[t]%12;return function(s,l){var c=(s+l)*.5*(Math.sqrt(3)-1),h=Math.floor(s+c),u=Math.floor(l+c),d=(h+u)*Ln,m=h-d,_=u-d,v=s-m,f=l-_,p=v>f?1:0,S=v>f?0:1,w=v-p+Ln,A=f-S+Ln,P=v-1+2*Ln,T=f-1+2*Ln,R=h&255,k=u&255,x=jo[o[R+a[k]]],b=jo[o[R+p+a[k+S]]],U=jo[o[R+1+a[k+1]]],F=.5-v*v-f*f,Q=F<0?0:Math.pow(F,4)*(x[0]*v+x[1]*f),D=.5-w*w-A*A,z=D<0?0:Math.pow(D,4)*(b[0]*w+b[1]*A),Y=.5-P*P-T*T,Z=Y<0?0:Math.pow(Y,4)*(U[0]*P+U[1]*T);return 70.14805770653952*(Q+z+Z)}}ja.makeNoise2D=aS;var qa={};Object.defineProperty(qa,"__esModule",{value:!0}),qa.makeNoise3D=void 0;var Sr=1/6,Ya=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,-1],[0,1,-1],[0,-1,-1]];function sS(i){i===void 0&&(i=Math.random);for(var e=new Uint8Array(256),t=0;t<256;t++)e[t]=t;for(var r,n,t=255;t>0;t--)r=Math.floor((t+1)*i()),n=e[t],e[t]=e[r],e[r]=n;for(var a=new Uint8Array(512),o=new Uint8Array(512),t=0;t<512;t++)a[t]=e[t&255],o[t]=a[t]%12;return function(s,l,c){var h=(s+l+c)/3,u=Math.floor(s+h),d=Math.floor(l+h),m=Math.floor(c+h),_=(u+d+m)*Sr,v=u-_,f=d-_,p=m-_,S=s-v,w=l-f,A=c-p,P,T,R,k,x,b;S>=w?w>=A?(P=k=x=1,T=R=b=0):S>=A?(P=k=b=1,T=R=x=0):(R=k=b=1,P=T=x=0):w<A?(R=x=b=1,P=T=k=0):S<A?(T=x=b=1,P=R=k=0):(T=k=x=1,P=R=b=0);var U=S-P+Sr,F=w-T+Sr,Q=A-R+Sr,D=S-k+2*Sr,z=w-x+2*Sr,Y=A-b+2*Sr,Z=S-1+3*Sr,J=w-1+3*Sr,K=A-1+3*Sr,te=u&255,ne=d&255,pe=m&255,X=Ya[o[te+a[ne+a[pe]]]],ee=Ya[o[te+P+a[ne+T+a[pe+R]]]],ve=Ya[o[te+k+a[ne+x+a[pe+b]]]],we=Ya[o[te+1+a[ne+1+a[pe+1]]]],ye=.5-S*S-w*w-A*A,De=ye<0?0:Math.pow(ye,4)*(X[0]*S+X[1]*w+X[2]*A),Ue=.5-U*U-F*F-Q*Q,Re=Ue<0?0:Math.pow(Ue,4)*(ee[0]*U+ee[1]*F+ee[2]*Q),Ge=.5-D*D-z*z-Y*Y,V=Ge<0?0:Math.pow(Ge,4)*(ve[0]*D+ve[1]*z+ve[2]*Y),dt=.5-Z*Z-J*J-K*K,Se=dt<0?0:Math.pow(dt,4)*(we[0]*Z+we[1]*J+we[2]*K);return 94.68493150681972*(De+Re+V+Se)}}qa.makeNoise3D=sS;var Ka={};Object.defineProperty(Ka,"__esModule",{value:!0}),Ka.makeNoise4D=void 0;var Nt=(5-Math.sqrt(5))/20,In=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]];function oS(i){i===void 0&&(i=Math.random);for(var e=new Uint8Array(256),t=0;t<256;t++)e[t]=t;for(var r,n,t=255;t>0;t--)r=Math.floor((t+1)*i()),n=e[t],e[t]=e[r],e[r]=n;for(var a=new Uint8Array(512),o=new Uint8Array(512),t=0;t<512;t++)a[t]=e[t&255],o[t]=a[t]%12;return function(s,l,c,h){var u=(s+l+c+h)*(Math.sqrt(5)-1)/4,d=Math.floor(s+u),m=Math.floor(l+u),_=Math.floor(c+u),v=Math.floor(h+u),f=(d+m+_+v)*Nt,p=d-f,S=m-f,w=_-f,A=v-f,P=s-p,T=l-S,R=c-w,k=h-A,x=0,b=0,U=0,F=0;P>T?x++:b++,P>R?x++:U++,P>k?x++:F++,T>R?b++:U++,T>k?b++:F++,R>k?U++:F++;var Q=x>=3?1:0,D=b>=3?1:0,z=U>=3?1:0,Y=F>=3?1:0,Z=x>=2?1:0,J=b>=2?1:0,K=U>=2?1:0,te=F>=2?1:0,ne=x>=1?1:0,pe=b>=1?1:0,X=U>=1?1:0,ee=F>=1?1:0,ve=P-Q+Nt,we=T-D+Nt,ye=R-z+Nt,De=k-Y+Nt,Ue=P-Z+2*Nt,Re=T-J+2*Nt,Ge=R-K+2*Nt,V=k-te+2*Nt,dt=P-ne+3*Nt,Se=T-pe+3*Nt,Ne=R-X+3*Nt,xe=k-ee+3*Nt,at=P-1+4*Nt,ze=T-1+4*Nt,E=R-1+4*Nt,y=k-1+4*Nt,G=d&255,se=m&255,re=_&255,ie=v&255,Me=In[a[G+a[se+a[re+a[ie]]]]%32],de=In[a[G+Q+a[se+D+a[re+z+a[ie+Y]]]]%32],_e=In[a[G+Z+a[se+J+a[re+K+a[ie+te]]]]%32],Ae=In[a[G+ne+a[se+pe+a[re+X+a[ie+ee]]]]%32],Be=In[a[G+1+a[se+1+a[re+1+a[ie+1]]]]%32],ae=.5-P*P-T*T-R*R-k*k,Qe=ae<0?0:Math.pow(ae,4)*(Me[0]*P+Me[1]*T+Me[2]*R+Me[3]*k),C=.5-ve*ve-we*we-ye*ye-De*De,$=C<0?0:Math.pow(C,4)*(de[0]*ve+de[1]*we+de[2]*ye+de[3]*De),ce=.5-Ue*Ue-Re*Re-Ge*Ge-V*V,le=ce<0?0:Math.pow(ce,4)*(_e[0]*Ue+_e[1]*Re+_e[2]*Ge+_e[3]*V),Te=.5-dt*dt-Se*Se-Ne*Ne-xe*xe,ke=Te<0?0:Math.pow(Te,4)*(Ae[0]*dt+Ae[1]*Se+Ae[2]*Ne+Ae[3]*xe),tt=.5-at*at-ze*ze-E*E-y*y,Ve=tt<0?0:Math.pow(tt,4)*(Be[0]*at+Be[1]*ze+Be[2]*E+Be[3]*y);return 72.37855765153665*(Qe+$+le+ke+Ve)}}Ka.makeNoise4D=oS,function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.makeNoise4D=i.makeNoise3D=i.makeNoise2D=void 0;var e=ja;Object.defineProperty(i,"makeNoise2D",{enumerable:!0,get:function(){return e.makeNoise2D}});var t=qa;Object.defineProperty(i,"makeNoise3D",{enumerable:!0,get:function(){return t.makeNoise3D}});var r=Ka;Object.defineProperty(i,"makeNoise4D",{enumerable:!0,get:function(){return r.makeNoise4D}})}(nu);function lS(i,e,t,r){return function(){i>>>=0,e>>>=0,t>>>=0,r>>>=0;let n=i+e|0;return i=e^e>>>9,e=t+(t<<3)|0,t=t<<21|t>>>11,r=r+1|0,n=n+r|0,t=t+n|0,(n>>>0)/4294967296}}class Qr{constructor(e,t=1,r=0,n=0){fe(this,"_noise");this._scale=e,this._strength=t,this._offset=n;const a=lS(100+r,200+r,300+r,444+r);this._noise=nu.makeNoise3D(a)}sample(e,t,r){return this._noise(e*this._scale,t*this._scale,r*this._scale)*this._strength+this._offset}}const qo=4,cS=2,Ja=4;class hS{constructor(e,t=1,r=0,n=!1,a=!1,o=!1,s=1e4,l=!0){fe(this,"isMarchingCubes",!0);fe(this,"enableUvs");fe(this,"enableColors");fe(this,"vlist");fe(this,"nlist");fe(this,"clist");fe(this,"isolation");fe(this,"size");fe(this,"size2");fe(this,"size3");fe(this,"halfsize");fe(this,"delta");fe(this,"yd");fe(this,"zd");fe(this,"field");fe(this,"normal_cache");fe(this,"palette");fe(this,"count");fe(this,"positionArray");fe(this,"normalArray");fe(this,"uvArray");fe(this,"colorArray");fe(this,"geometryRaw");fe(this,"geometryOptimized");this.prescale=t,this.preoffset=r,this.flatShading=o,this.maxPolyCount=s,this.optimizeGeometry=l;const c=new ir;this.geometryRaw=c,this.vlist=new Float32Array(12*3),this.nlist=new Float32Array(12*3),this.clist=new Float32Array(12*3),this.enableUvs=n,this.enableColors=a,this.isolation=80,this.size=e,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;const h=this.maxPolyCount*3;this.positionArray=new Float32Array(h*3);const u=new kt(this.positionArray,3);u.setUsage(ua),this.geometryRaw.setAttribute("position",u),this.normalArray=new Float32Array(h*3);const d=new kt(this.normalArray,3);if(d.setUsage(ua),this.geometryRaw.setAttribute("normal",d),this.enableUvs){this.uvArray=new Float32Array(h*2);const m=new kt(this.uvArray,2);m.setUsage(ua),this.geometryRaw.setAttribute("uv",m)}if(this.enableColors){this.colorArray=new Float32Array(h*3);const m=new kt(this.colorArray,3);m.setUsage(ua),this.geometryRaw.setAttribute("color",m)}this.geometryRaw.boundingSphere=new bn(new N,Math.sqrt(2))}get geometry(){return this.geometryOptimized}VIntX(e,t,r,n,a,o,s,l,c,h){const u=(r-s)/(l-s),d=this.normal_cache;this.vlist[t+0]=n+u*this.delta,this.vlist[t+1]=a,this.vlist[t+2]=o,this.nlist[t+0]=Rt(d[e+0],d[e+3],u),this.nlist[t+1]=Rt(d[e+1],d[e+4],u),this.nlist[t+2]=Rt(d[e+2],d[e+5],u),this.clist[t+0]=Rt(this.palette[c*3+0],this.palette[h*3+0],u),this.clist[t+1]=Rt(this.palette[c*3+1],this.palette[h*3+1],u),this.clist[t+2]=Rt(this.palette[c*3+2],this.palette[h*3+2],u)}VIntY(e,t,r,n,a,o,s,l,c,h){const u=(r-s)/(l-s),d=this.normal_cache;this.vlist[t+0]=n,this.vlist[t+1]=a+u*this.delta,this.vlist[t+2]=o;const m=e+this.yd*3;this.nlist[t+0]=Rt(d[e+0],d[m+0],u),this.nlist[t+1]=Rt(d[e+1],d[m+1],u),this.nlist[t+2]=Rt(d[e+2],d[m+2],u),this.clist[t+0]=Rt(this.palette[c*3+0],this.palette[h*3+0],u),this.clist[t+1]=Rt(this.palette[c*3+1],this.palette[h*3+1],u),this.clist[t+2]=Rt(this.palette[c*3+2],this.palette[h*3+2],u)}VIntZ(e,t,r,n,a,o,s,l,c,h){const u=(r-s)/(l-s),d=this.normal_cache;this.vlist[t+0]=n,this.vlist[t+1]=a,this.vlist[t+2]=o+u*this.delta;const m=e+this.zd*3;this.nlist[t+0]=Rt(d[e+0],d[m+0],u),this.nlist[t+1]=Rt(d[e+1],d[m+1],u),this.nlist[t+2]=Rt(d[e+2],d[m+2],u),this.clist[t+0]=Rt(this.palette[c*3+0],this.palette[h*3+0],u),this.clist[t+1]=Rt(this.palette[c*3+1],this.palette[h*3+1],u),this.clist[t+2]=Rt(this.palette[c*3+2],this.palette[h*3+2],u)}compNorm(e){const t=e*3;this.normal_cache[t]===0&&(this.normal_cache[t+0]=this.field[e-1]-this.field[e+1],this.normal_cache[t+1]=this.field[e-this.yd]-this.field[e+this.yd],this.normal_cache[t+2]=this.field[e-this.zd]-this.field[e+this.zd])}polygonize(e,t,r,n,a){const o=n+1,s=n+this.yd,l=n+this.zd,c=o+this.yd,h=o+this.zd,u=n+this.yd+this.zd,d=o+this.yd+this.zd;let m=0;const _=this.field[n],v=this.field[o],f=this.field[s],p=this.field[c],S=this.field[l],w=this.field[h],A=this.field[u],P=this.field[d];_<a&&(m|=1),v<a&&(m|=2),f<a&&(m|=8),p<a&&(m|=4),S<a&&(m|=16),w<a&&(m|=32),A<a&&(m|=128),P<a&&(m|=64);const T=uS[m];if(T===0)return 0;const R=this.delta,k=e+R,x=t+R,b=r+R;T&1&&(this.compNorm(n),this.compNorm(o),this.VIntX(n*3,0,a,e,t,r,_,v,n,o)),T&2&&(this.compNorm(o),this.compNorm(c),this.VIntY(o*3,3,a,k,t,r,v,p,o,c)),T&4&&(this.compNorm(s),this.compNorm(c),this.VIntX(s*3,6,a,e,x,r,f,p,s,c)),T&8&&(this.compNorm(n),this.compNorm(s),this.VIntY(n*3,9,a,e,t,r,_,f,n,s)),T&16&&(this.compNorm(l),this.compNorm(h),this.VIntX(l*3,12,a,e,t,b,S,w,l,h)),T&32&&(this.compNorm(h),this.compNorm(d),this.VIntY(h*3,15,a,k,t,b,w,P,h,d)),T&64&&(this.compNorm(u),this.compNorm(d),this.VIntX(u*3,18,a,e,x,b,A,P,u,d)),T&128&&(this.compNorm(l),this.compNorm(u),this.VIntY(l*3,21,a,e,t,b,S,A,l,u)),T&256&&(this.compNorm(n),this.compNorm(l),this.VIntZ(n*3,24,a,e,t,r,_,S,n,l)),T&512&&(this.compNorm(o),this.compNorm(h),this.VIntZ(o*3,27,a,k,t,r,v,w,o,h)),T&1024&&(this.compNorm(c),this.compNorm(d),this.VIntZ(c*3,30,a,k,x,r,p,P,c,d)),T&2048&&(this.compNorm(s),this.compNorm(u),this.VIntZ(s*3,33,a,e,x,r,f,A,s,u)),m<<=4;let U,F,Q,D=0,z=0;for(;Za[m+z]!=-1;)U=m+z,F=U+1,Q=U+2,this.posnormtriv(this.vlist,this.nlist,this.clist,3*Za[U],3*Za[F],3*Za[Q]),z+=3,D++;return D}posnormtriv(e,t,r,n,a,o){const s=this.count*3,l=this.prescale,c=this.preoffset;if(this.positionArray[s+0]=e[n]*l+c,this.positionArray[s+1]=e[n+1]*l+c,this.positionArray[s+2]=e[n+2]*l+c,this.positionArray[s+3]=e[a]*l+c,this.positionArray[s+4]=e[a+1]*l+c,this.positionArray[s+5]=e[a+2]*l+c,this.positionArray[s+6]=e[o]*l+c,this.positionArray[s+7]=e[o+1]*l+c,this.positionArray[s+8]=e[o+2]*l+c,this.flatShading){const h=(t[n+0]+t[a+0]+t[o+0])/3,u=(t[n+1]+t[a+1]+t[o+1])/3,d=(t[n+2]+t[a+2]+t[o+2])/3;this.normalArray[s+0]=h,this.normalArray[s+1]=u,this.normalArray[s+2]=d,this.normalArray[s+3]=h,this.normalArray[s+4]=u,this.normalArray[s+5]=d,this.normalArray[s+6]=h,this.normalArray[s+7]=u,this.normalArray[s+8]=d}else this.normalArray[s+0]=t[n+0],this.normalArray[s+1]=t[n+1],this.normalArray[s+2]=t[n+2],this.normalArray[s+3]=t[a+0],this.normalArray[s+4]=t[a+1],this.normalArray[s+5]=t[a+2],this.normalArray[s+6]=t[o+0],this.normalArray[s+7]=t[o+1],this.normalArray[s+8]=t[o+2];if(this.uvArray){const h=this.count*2;this.uvArray[h+0]=e[n+0],this.uvArray[h+1]=e[n+2],this.uvArray[h+2]=e[a+0],this.uvArray[h+3]=e[a+2],this.uvArray[h+4]=e[o+0],this.uvArray[h+5]=e[o+2]}this.colorArray&&(this.colorArray[s+0]=r[n+0],this.colorArray[s+1]=r[n+1],this.colorArray[s+2]=r[n+2],this.colorArray[s+3]=r[a+0],this.colorArray[s+4]=r[a+1],this.colorArray[s+5]=r[a+2],this.colorArray[s+6]=r[o+0],this.colorArray[s+7]=r[o+1],this.colorArray[s+8]=r[o+2]),this.count+=3}addBall(e,t,r,n,a,o){const s=Math.sign(n);n=Math.abs(n);const l=o!=null;let c=new Ee(e,t,r);if(l)try{c=o instanceof Ee?o:Array.isArray(o)?new Ee(Math.min(Math.abs(o[0]),1),Math.min(Math.abs(o[1]),1),Math.min(Math.abs(o[2]),1)):new Ee(o)}catch{c=new Ee(e,t,r)}const h=this.size*Math.sqrt(n/a),u=r*this.size,d=t*this.size,m=e*this.size;let _=Math.floor(u-h);_<1&&(_=1);let v=Math.floor(u+h);v>this.size-1&&(v=this.size-1);let f=Math.floor(d-h);f<1&&(f=1);let p=Math.floor(d+h);p>this.size-1&&(p=this.size-1);let S=Math.floor(m-h);S<1&&(S=1);let w=Math.floor(m+h);w>this.size-1&&(w=this.size-1);let A,P,T,R,k,x,b,U,F,Q,D;for(T=_;T<v;T++)for(k=this.size2*T,U=T/this.size-r,F=U*U,P=f;P<p;P++)for(R=k+this.size*P,b=P/this.size-t,Q=b*b,A=S;A<w;A++)if(x=A/this.size-e,D=n/(1e-6+x*x+Q+F)-a,D>0){this.field[R+A]+=D*s;const z=Math.sqrt((A-m)*(A-m)+(P-d)*(P-d)+(T-u)*(T-u))/h,Y=1-z*z*z*(z*(z*6-15)+10);this.palette[(R+A)*3+0]+=c.r*Y,this.palette[(R+A)*3+1]+=c.g*Y,this.palette[(R+A)*3+2]+=c.b*Y}}setCell(e,t,r,n){const a=this.size2*r+this.size*t+e;this.field[a]=n}getCell(e,t,r){const n=this.size2*r+this.size*t+e;return this.field[n]}blur(e=1){const t=this.field,r=t.slice(),n=this.size,a=this.size2;for(let o=0;o<n;o++)for(let s=0;s<n;s++)for(let l=0;l<n;l++){const c=a*l+n*s+o;let h=r[c],u=1;for(let d=-1;d<=1;d+=2){const m=d+o;if(!(m<0||m>=n))for(let _=-1;_<=1;_+=2){const v=_+s;if(!(v<0||v>=n))for(let f=-1;f<=1;f+=2){const p=f+l;if(p<0||p>=n)continue;const S=a*p+n*v+m,w=r[S];u++,h+=e*(w-h)/u}}}t[c]=h}}reset(){for(let e=0;e<this.size3;e++)this.normal_cache[e*3]=0,this.field[e]=0,this.palette[e*3]=this.palette[e*3+1]=this.palette[e*3+2]=0}update(){this.count=0;const e=this.size-2;for(let t=1;t<e;t++){const r=this.size2*t,n=(t-this.halfsize)/this.halfsize;for(let a=1;a<e;a++){const o=r+this.size*a,s=(a-this.halfsize)/this.halfsize;for(let l=1;l<e;l++){const c=(l-this.halfsize)/this.halfsize,h=o+l;this.polygonize(c,s,n,h,this.isolation)}}}if(this.geometryRaw.setDrawRange(0,this.count),this.geometryRaw.getAttribute("position").needsUpdate=!0,this.geometryRaw.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(this.geometryRaw.getAttribute("uv").needsUpdate=!0),this.enableColors&&(this.geometryRaw.getAttribute("color").needsUpdate=!0),this.count/3>this.maxPolyCount&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count."),this.optimizeGeometry&&this.geometryRaw.drawRange.count>0&&this.geometryRaw.drawRange.count!==1/0){const t=this.geometryRaw,r=t.getAttribute("normal").array,n=t.getAttribute("position").array,a=new Set,o=new Array,s=new Array,l=new Array,c=new Array,h=this.geometryRaw.drawRange.count;for(let d=0;d<h;d++){const m=d*3,_=`${n[m]};${n[m+1]};${n[m+2]}`;a.has(_)||(a.add(_),o.push(_),s.push(n[m],n[m+1],n[m+2]),l.push(r[m],r[m+1],r[m+2]))}for(let d=0;d<h;d++){const m=d*3,_=`${n[m]};${n[m+1]};${n[m+2]}`;c.push(o.indexOf(_))}const u=new ir;u.setAttribute("position",new Lt(s,3)),u.setAttribute("normal",new Lt(l,3)),u.setIndex(new kt(new Uint32Array(c),1)),u.boundingSphere=new bn(new N,Math.sqrt(2)),u.computeBoundingBox(),this.geometryOptimized=u}}}const uS=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),Za=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);function au(i,e,t,r,n,a,o,s){const l=n*a+3,c=l/(l-3),h=n*.5*c,u=new hS(l,h,.5/a);for(let d=0;d<l;d++)for(let m=0;m<l;m++)for(let _=0;_<l;_++){const v=e+((_+.25)/l-.5)*h*2,f=t+((m+.25)/l-.5)*h*2,p=r+((d+.25)/l-.5)*h*2,S=i.sample(v,f,p);u.setCell(_,m,d,S*100)}if(u.update(),u.geometry){const d=Va(o),m=new Vt(u.geometry,new Ga({...d.materialParams,clippingPlanes:s,clipShadows:!0}));return m.castShadow=m.receiveShadow=!0,m.position.set(e,t,r),m.geometry.boundingSphere.radius*=h,m}else return}class su{constructor(e,t=0,r=0,n=0){this._core=e,this._x=t,this._y=r,this._z=n}sample(e,t,r){return this._core.sample(e-this._x,t-this._y,r-this._z)}}class ou{constructor(e,t=0,r=1){this._core=e,this._min=t,this._max=r}sample(e,t,r){return Jh(this._core.sample(e,t,r),this._min,this._max)}}class lu{constructor(e,t){this._a=e,this._b=t}sample(e,t,r){return this._a.sample(e,t,r)-this._b.sample(e,t,r)}}class dS{constructor(e,t){this._a=e,this._b=t}sample(e,t,r){return this._a.sample(e,t,r)+this._b.sample(e,t,r)}}class Yo{constructor(e=0,t=0,r=0,n=0){this._xScale=e,this._yScale=t,this._zScale=r,this._offset=n}sample(e,t,r){return e*this._xScale+t*this._yScale+r*this._zScale+this._offset}}class pS{constructor(e,t=0){this._core=e,this._max=t}sample(e,t,r){return Math.max(this._max,this._core.sample(e,t,r))}}class cu{constructor(e,t,r,n){this._core=e,this._xOffset=t,this._yOffset=r,this._zOffset=n}sample(e,t,r){const n=this._xOffset?e+this._xOffset.sample(e,t,r):e,a=this._yOffset?t+this._yOffset.sample(e,t,r):t,o=this._zOffset?r+this._zOffset.sample(e,t,r):r;return this._core.sample(n,a,o)}}class mS{constructor(e,t){this._a=e,this._b=t}sample(e,t,r){return Math.max(this._a.sample(e,t,r),this._b.sample(e,t,r))}}function fS(i,e,t=1){return new mS(i,new Yo(0,-t,0,e))}function gS(i,e,t,r,n=0){let a=new Qr(i,e,n);for(let o=0;o<r;o++)n+=4,i*=2,e*=.5,t*=.5,a=new cu(a,new Qr(i,t,n+1),new Qr(i,t,n+2),new Qr(i,t,n+3));return a}class _S{constructor(e,t){this._a=e,this._b=t}sample(e,t,r){return this._a.sample(e,t,r)*this._b.sample(e,t,r)}}class hu{constructor(e,t=4){fe(this,"cacheXYZ",[]);fe(this,"reusedCount",0);fe(this,"newCount",0);this._core=e,this.subDivisions=t,setInterval(()=>{console.log("new "+this.newCount,"reused "+this.reusedCount)},1e3)}sample(e,t,r){const n=Math.round(e*this.subDivisions),a=Math.round(t*this.subDivisions),o=Math.round(r*this.subDivisions);this.cacheXYZ[o]===void 0&&(this.cacheXYZ[o]=[]);const s=this.cacheXYZ[o];s[a]===void 0&&(s[a]=[]);const l=s[a];let c=!0;return l[n]===void 0&&(l[n]=this._core.sample(e,t,r),c=!1),c?this.reusedCount++:this.newCount++,l[n]}}const Qa=$h("scaleLevels",3,1,8),Ko=$h("blockRange",2,0,8),$a=25,uu=new Ob,vS=new N,Dn=-5,wS=10,du=1e3,pu=1,mu=2+pu,Jo=3+pu;class yS{constructor(){fe(this,"renderer");fe(this,"scene");fe(this,"camera");fe(this,"controls");fe(this,"stats");fe(this,"visicals",[]);fe(this,"link");fe(this,"closestOnMouseDown");fe(this,"closestOnMouseMove");fe(this,"lastMouseMoveX",-1);fe(this,"lastMouseMoveY",-1);fe(this,"world");fe(this,"player");fe(this,"animator");fe(this,"_pointerLocked",!1);fe(this,"skyColor");fe(this,"waterColorShallow");fe(this,"waterColorDeep");fe(this,"waterColor");fe(this,"fog");fe(this,"fieldDirt");fe(this,"fieldSnow");fe(this,"noiseBlockKeysSeen",new Set);fe(this,"lastX",0);fe(this,"lastY",0);fe(this,"lastZ",0);fe(this,"blockCount",0);fe(this,"clippingPlanesForward");fe(this,"clippingPlanesBack");fe(this,"clippingPlanes");fe(this,"getClosest",(e,t)=>{uu.setFromCamera(new Ie(e/window.innerWidth*2-1,-(t/window.innerHeight*2-1)),this.camera);const r=uu.intersectObjects(this.visicals.filter(n=>{var a;return n!==((a=this.player)==null?void 0:a.visical)}).map(n=>n.visual));if(r.length>0)return new jb(r[0],e,t)});fe(this,"submerged",new Set);fe(this,"animate",()=>{requestAnimationFrame(this.animate);const e=this.player?this.player.visical.physical.translation():vS;let t=8;for(let a=0;a<Qa;a++){const o=Math.pow(2,a),s=this.clippingPlanesBack[a];s.normal.set(0,0,1).applyQuaternion(this.camera.quaternion),s.setFromNormalAndCoplanarPoint(s.normal,this.camera.position),s.constant+=o*Ja*(Ko-.5);const l=this.clippingPlanesForward[a];l.normal.set(0,0,-1).applyQuaternion(this.camera.quaternion),l.setFromNormalAndCoplanarPoint(l.normal,this.camera.position),l.constant-=o*Ja*(Ko-.5)*.9;const c=Ja*o,h=c*.5,u=Math.round(e.x/c)*c-h,d=Math.round(e.y/c)*c-h,m=Math.round(e.z/c)*c-h,_=Ko;for(let v=-_;v<=_;v++)for(let f=-_;f<=_;f++)for(let p=-_;p<=_;p++){const S=p*c,w=f*c,A=v*c,P=`${u+S};${d+w};${m+A};${a}`;this.noiseBlockKeysSeen.has(P)||t>0&&(t--,this.noiseBlockKeysSeen.add(P),this.makeBlock(u+S,d+w,m+A,o,a===0,this.clippingPlanes[a]))}}this.animator.update(),this.world.bodies.forEach(a=>{const o=a.translation().y,s=a.handle;o<Dn&&!this.submerged.has(s)?(this.submerged.add(s),a.addForce(new gt.Vector3(0,5,0),!0),a.setLinearDamping(2)):o>=Dn&&this.submerged.has(s)&&(a.resetForces(!0),this.submerged.delete(s),a.setLinearDamping(0))});const r=this.camera.position.y<Dn,n=-(this.camera.position.y-Dn);this.waterColor.copy(this.waterColorShallow).lerp(this.waterColorDeep,n*.5),this.fog.color=r?this.waterColor:this.skyColor,this.scene.background=r?this.waterColor:this.skyColor,this.fog.far=r?wS:du,this.player&&this.player.update(),this.world.step();for(const a of this.visicals)a.matchTransform();if(this.stats&&this.stats.update(),this.controls&&this.controls.update(),this.link&&this.closestOnMouseDown&&this.closestOnMouseMove&&this.closestOnMouseDown.intersection.object!==this.closestOnMouseMove.intersection.object){const a=this.closestOnMouseDown.relativePoint.clone().applyMatrix4(this.closestOnMouseDown.intersection.object.matrixWorld);if(this.link.position.copy(a),this.closestOnMouseMove=this.getClosest(this.lastMouseMoveX,this.lastMouseMoveY),this.closestOnMouseMove){const o=this.closestOnMouseMove.relativePoint.clone().applyMatrix4(this.closestOnMouseMove.intersection.object.matrixWorld);this.link.scale.y=a.distanceTo(o),this.link.lookAt(o),this.link.rotateX(Math.PI*.5)}}this.renderer.render(this.scene,this.camera)});this.initScene(),this.initStats(),this.initListeners(),this.animate()}initStats(){this.stats=new jt,document.body.appendChild(this.stats.dom)}initScene(){const e=new dS(new Yo(0,-25,0,-12),new cu(new lu(gS(.002,200,120,8,mu+5),new pS(new Qr(.001,160,mu+9),0)),new Qr(.1,2,Jo+2),new Qr(.2,5,Jo+3),new Qr(.1,2,Jo+4))),t=new hu(fS(e,-50,.5),qo);this.fieldDirt=t;const r=new hu(new ou(t,0,2),qo);this.fieldSnow=new _S(new lu(new su(r,0,.25),new su(r,0,-.5)),new ou(new Yo(0,.5,0,-2),0,1));const n=new gt.World(new gt.Vector3(0,-9.8,0)),a=1/60;n.timestep=a,this.animator=new nS(a),this.world=n;const o=new Ee(.5,.7,.9),s=new Ee(0,.3,.8),l=new Ee(-.3,.1,.6),c=new Pb,h=new Uo(o,0,du);c.fog=h,this.fog=h,this.scene=c,c.background=o,this.camera=new nr(75,window.innerWidth/window.innerHeight,.001,1e3),this.scene.add(this.camera),this.renderer=new zh,this.renderer.localClippingEnabled=!0,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=kl,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement);const u=new N(0,0,6),d=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);if(Qh("orbit")||d)this.camera.position.set(u.x,u.y+1,u.z+7),this.controls=new zb(this.camera,this.renderer.domElement);else{this.camera.position.y=1,this.camera.position.z=7;const U=new tS(n,c,this.camera,this.renderer);this.visicals.push(U.visical),U.visical.setPosition(u.x,u.y+.8,u.z+5),this.player=U}this.skyColor=o,this.waterColorDeep=l,this.waterColorShallow=s,this.waterColor=s.clone();const m=new Ib(o,new Ee(.5,.4,.3),2);c.add(m);const _=new Nb(new Ee(.8,.7,.6),5);_.shadow.camera.left-=$a,_.shadow.camera.right+=$a,_.shadow.camera.bottom-=$a,_.shadow.camera.top+=$a,_.shadow.camera.updateProjectionMatrix(),_.position.set(-.5,2.5,4).normalize().multiplyScalar(10),_.castShadow=!0,c.add(_);const v=1024,f=.5,p=50;_.shadow.mapSize.width=v,_.shadow.mapSize.height=v,_.shadow.camera.near=f,_.shadow.camera.far=p;const S=[],w=[];for(let U=0;U<Qa;U++)w.push(new Mr(new N(0,0,-1),0)),S.push(new Mr(new N(0,0,-1),0));this.clippingPlanesForward=S,this.clippingPlanesBack=w;const A=[];A.push([w[0]]);for(let U=1;U<Qa-1;U++)A.push([S[U-1],w[U]]);A.push([S[Qa-2]]),this.clippingPlanes=A;const P=Wa(c,n,16,2,42,void 0,"concrete");P.setPosition(u.x+2,u.y-1,u.z),this.visicals.push(P),P.visual.visible=!1;const T=new Vt(new Cn(16,16,16,16),new Ga(Va("debugWire").materialParams));T.rotation.x=Math.PI*.5,T.position.y=.01,c.add(T);const R=new Vt(new Cn(1e3,1e3,8,8),new Ga({...Va("water").materialParams}));this.scene.add(R),R.receiveShadow=!0,R.rotation.x=Math.PI*.5,R.position.y=Dn;const k=8;for(let U=0;U<k;U++){const F=U/k*Math.PI*2,Q=Wa(c,n,2,.1,2.5,void 0,"wood");Q.setPosition(u.x+Math.cos(F)*2,u.y+.2,u.z+Math.sin(F)*2),Q.setEuler(0,-F,.25),this.visicals.push(Q)}const x=16;for(let U=0;U<x;U++){const F=U/x*Math.PI*2,Q=Wa(c,n,1,.3,1,gt.RigidBodyType.Dynamic,U%2===0?"wood":"concrete");Q.setPosition(u.x+Math.cos(F)*7,u.y+.05,u.z+Math.sin(F)*5),Q.setEuler(0,-F,0),this.visicals.push(Q)}const b=gt.RigidBodyType.Dynamic;for(let U=0;U<5;U++){const F=Wa(c,n,.5,.5,.5,b,"plastic");F.setPosition(u.x,u.y+2+U*.5,u.z),this.visicals.push(F);const Q=ko(c,n,.25,b,"plastic");Q.setPosition(u.x+.1,u.y+2+U*.5,u.z),this.visicals.push(Q)}}makeBlock(e,t,r,n=1,a=!0,o){this.blockCount++;const s=this.makeBlockLayer(this.fieldDirt,e,t,r,"dirt",o,n,a),l=this.makeBlockLayer(this.fieldSnow,e,t,r,"snow",o,n,!1);return[s,l]}makeBlockLayer(e,t,r,n,a,o,s=1,l=!0){const c=Ja*s,h=qo/s,u=cS/s,d=au(e,t,r,n,c,h,a,o);if(d){const m=l?au(e,t,r,n,c,u,a):void 0;if(m){const _=Xb(this.scene,this.world,d.geometry,void 0,a,m.geometry);if(o){const v=_.visual.material;v.clippingPlanes=o}return _.physical.setTranslation(d.position,!0),_.visual.position.copy(d.position),_}else return this.scene.add(d),d}}initListeners(){window.addEventListener("resize",this.onWindowResize.bind(this),!1),window.addEventListener("keydown",a=>{const{key:o}=a;switch(o){case"e":const s=window.open("","Canvas Image"),{domElement:l}=this.renderer;this.renderer.render(this.scene,this.camera);const c=l.toDataURL();if(!s)return;s.document.write(`<img src='${c}' width='${l.width}' height='${l.height}'>`);break}});const e=new Ie,t=new Ie,r=a=>{if(!this.link){const o=new Ha(.05,.05,1,8,1),s=o.getAttribute("position").array;for(let l=1;l<s.length;l+=3)s[l]+=.5;this.link=new Vt(o,new Rn({color:65280})),this.scene.add(this.link)}this.link.position.copy(a.intersection.point)},n=()=>{this.link&&(this.scene.remove(this.link),this.link=void 0)};document.addEventListener("pointerlockchange",()=>{this._pointerLocked=document.pointerLockElement===this.renderer.domElement},!1),window.addEventListener("mousedown",a=>{const o=this._pointerLocked?window.innerWidth*.5:a.x,s=this._pointerLocked?window.innerHeight*.5:a.y;this.closestOnMouseDown=this.getClosest(o,s),e.set(a.x,a.y)}),window.addEventListener("mousemove",a=>{const o=this._pointerLocked?window.innerWidth*.5:a.x,s=this._pointerLocked?window.innerHeight*.5:a.y;this.lastMouseMoveX=o,this.lastMouseMoveY=s,t.set(o,s).sub(e),this.closestOnMouseDown&&t.length()>10&&(this.closestOnMouseMove=this.getClosest(o,s),this.closestOnMouseMove&&this.closestOnMouseDown.intersection.object!==this.closestOnMouseMove.intersection.object&&r(this.closestOnMouseDown))}),window.addEventListener("mouseup",a=>{const o=this._pointerLocked?window.innerWidth*.5:a.x,s=this._pointerLocked?window.innerHeight*.5:a.y;if(n(),this.closestOnMouseDown&&this.closestOnMouseMove&&this.closestOnMouseDown.intersection.object!==this.closestOnMouseMove.intersection.object){const l=this.closestOnMouseDown,c=this.closestOnMouseMove,h=l.intersection.object,u=c.intersection.object,d=this.visicals.find(_=>h===_.visual),m=this.visicals.find(_=>u===_.visual);if(d&&m){const _=l.relativePoint.clone(),v=c.relativePoint.clone(),f=gt.JointData.spherical(_,v),p=this.world.createImpulseJoint(f,d.physical,m.physical,!0).handle,S=_.clone().applyMatrix4(h.matrixWorld),w=v.clone().applyMatrix4(u.matrixWorld),A=S.clone().lerp(w,.5),P=h.matrixWorld.clone().invert(),T=u.matrixWorld.clone().invert(),R=A.clone().applyMatrix4(P),k=A.clone().applyMatrix4(T);this.animator.animate(1,x=>{const b=this.world.getImpulseJoint(p);b.setAnchor1(R.clone().lerp(_,x)),b.setAnchor2(k.clone().lerp(v,x))})}}else{const l=this.getClosest(o,s);if(l){const c=this.visicals.find(h=>(l==null?void 0:l.intersection.object)===h.visual);if(c&&c.physical.bodyType()===gt.RigidBodyType.Fixed){const h=ko(this.scene,this.world,.5,gt.RigidBodyType.Fixed,"concrete"),u=l.intersection.point;h.setPosition(u.x,u.y,u.z),this.visicals.push(h)}}}this.closestOnMouseDown=void 0,this.closestOnMouseMove=void 0})}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}}new yS})()});export default CS();
