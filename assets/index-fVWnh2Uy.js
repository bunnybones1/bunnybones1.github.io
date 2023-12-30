var lS=Object.defineProperty;var cS=(Yt,jt,$i)=>jt in Yt?lS(Yt,jt,{enumerable:!0,configurable:!0,writable:!0,value:$i}):Yt[jt]=$i;var hS=(Yt,jt)=>()=>(jt||Yt((jt={exports:{}}).exports,jt),jt.exports);var _e=(Yt,jt,$i)=>(cS(Yt,typeof jt!="symbol"?jt+"":jt,$i),$i);var uS=hS((pS,lu)=>{(async()=>{(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();var Yt=function(){var r=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(h){h.preventDefault(),i(++r%e.children.length)},!1);function t(h){return e.appendChild(h.dom),h}function i(h){for(var u=0;u<e.children.length;u++)e.children[u].style.display=u===h?"block":"none";r=h}var n=(performance||Date).now(),a=n,o=0,s=t(new Yt.Panel("FPS","#0ff","#002")),l=t(new Yt.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new Yt.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){n=(performance||Date).now()},end:function(){o++;var h=(performance||Date).now();if(l.update(h-n,200),h>=a+1e3&&(s.update(o*1e3/(h-a),100),a=h,o=0,c)){var u=performance.memory;c.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return h},update:function(){n=this.end()},domElement:e,setMode:i}};Yt.Panel=function(r,e,t){var i=1/0,n=0,a=Math.round,o=a(window.devicePixelRatio||1),s=80*o,l=48*o,c=3*o,h=2*o,u=3*o,d=15*o,m=74*o,_=30*o,v=document.createElement("canvas");v.width=s,v.height=l,v.style.cssText="width:80px;height:48px";var f=v.getContext("2d");return f.font="bold "+9*o+"px Helvetica,Arial,sans-serif",f.textBaseline="top",f.fillStyle=t,f.fillRect(0,0,s,l),f.fillStyle=e,f.fillText(r,c,h),f.fillRect(u,d,m,_),f.fillStyle=t,f.globalAlpha=.9,f.fillRect(u,d,m,_),{dom:v,update:function(p,E){i=Math.min(i,p),n=Math.max(n,p),f.fillStyle=t,f.globalAlpha=1,f.fillRect(0,0,s,d),f.fillStyle=e,f.fillText(a(p)+" "+r+" ("+a(i)+"-"+a(n)+")",c,h),f.drawImage(v,u+o,d,m-o,_,u,d,m-o,_),f.fillRect(u+m-o,d,o,_),f.fillStyle=t,f.globalAlpha=.9,f.fillRect(u+m-o,d,o,a((1-p/E)*_))}}};const jt=Yt,$i="/assets/rapier_wasm3d_bg-GqetY0_u.wasm",cu=async(r={},e)=>{let t;if(e.startsWith("data:")){const i=e.replace(/^data:.*?base64,/,"");let n;if(typeof Buffer=="function"&&typeof Buffer.from=="function")n=Buffer.from(i,"base64");else if(typeof atob=="function"){const a=atob(i);n=new Uint8Array(a.length);for(let o=0;o<a.length;o++)n[o]=a.charCodeAt(o)}else throw new Error("Cannot decode base64-encoded data URL");t=await WebAssembly.instantiate(n,r)}else{const i=await fetch(e),n=i.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&n.startsWith("application/wasm"))t=await WebAssembly.instantiateStreaming(i,r);else{const a=await i.arrayBuffer();t=await WebAssembly.instantiate(a,r)}}return t.instance.exports},it=new Array(32).fill(void 0);it.push(void 0,null,!0,!1);function nt(r){return it[r]}let tn=it.length;function hu(r){r<36||(it[r]=tn,tn=r)}function rn(r){const e=nt(r);return hu(r),e}function wt(r){tn===it.length&&it.push(it.length+1);const e=tn;return tn=it[e],it[e]=r,e}function be(r){return r==null}let $a=new Float64Array;function Nn(){return $a.byteLength===0&&($a=new Float64Array(yr.buffer)),$a}let es=new Int32Array;function st(){return es.byteLength===0&&(es=new Int32Array(yr.buffer)),es}const uu=typeof TextDecoder>"u"?(0,lu.require)("util").TextDecoder:TextDecoder;let Zo=new uu("utf-8",{ignoreBOM:!0,fatal:!0});Zo.decode();let ts=new Uint8Array;function du(){return ts.byteLength===0&&(ts=new Uint8Array(yr.buffer)),ts}function Qo(r,e){return Zo.decode(du().subarray(r,r+e))}function pu(){try{const t=$e(-16);Fu(t);var r=st()[t/4+0],e=st()[t/4+1];return Qo(r,e)}finally{$e(16),Qn(r,e)}}function I(r,e){if(!(r instanceof e))throw new Error(`expected instance of ${e.name}`);return r.ptr}let is=new Float32Array;function Oi(){return is.byteLength===0&&(is=new Float32Array(yr.buffer)),is}let lt=32;function pt(r){if(lt==1)throw new Error("out of js stack");return it[--lt]=r,lt}function $o(r,e){return Oi().subarray(r/4,r/4+e)}let rs=new Uint32Array;function el(){return rs.byteLength===0&&(rs=new Uint32Array(yr.buffer)),rs}function mu(r,e){return el().subarray(r/4,r/4+e)}let Kt=0;function er(r,e){const t=e(r.length*4);return Oi().set(r,t/4),Kt=r.length,t}function On(r,e){const t=e(r.length*4);return el().set(r,t/4),Kt=r.length,t}function ns(r,e){try{return r.apply(this,e)}catch(t){Y1(wt(t))}}const Fn=Object.freeze({X:0,0:"X",Y:1,1:"Y",Z:2,2:"Z",AngX:3,3:"AngX",AngY:4,4:"AngY",AngZ:5,5:"AngZ"});class Fi{static __wrap(e){const t=Object.create(Fi.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();qm(e)}constructor(){const e=Ym();return Fi.__wrap(e)}}class wr{static __wrap(e){const t=Object.create(wr.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();fd(e)}constructor(){const e=gd();return wr.__wrap(e)}}class nn{static __wrap(e){const t=Object.create(nn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();cd(e)}constructor(){const e=hd();return nn.__wrap(e)}handle(){return ln(this.ptr)}translationApplied(){const e=ud(this.ptr);return F.__wrap(e)}translationRemaining(){const e=dd(this.ptr);return F.__wrap(e)}toi(){return tr(this.ptr)}worldWitness1(){const e=Jn(this.ptr);return F.__wrap(e)}worldWitness2(){const e=pd(this.ptr);return F.__wrap(e)}worldNormal1(){const e=us(this.ptr);return F.__wrap(e)}worldNormal2(){const e=md(this.ptr);return F.__wrap(e)}}class mt{static __wrap(e){const t=Object.create(mt.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();sg(e)}coTranslation(e){const t=Km(this.ptr,e);return F.__wrap(t)}coRotation(e){const t=Jm(this.ptr,e);return Ye.__wrap(t)}coSetTranslation(e,t,i,n){Zm(this.ptr,e,t,i,n)}coSetTranslationWrtParent(e,t,i,n){Qm(this.ptr,e,t,i,n)}coSetRotation(e,t,i,n,a){$m(this.ptr,e,t,i,n,a)}coSetRotationWrtParent(e,t,i,n,a){ef(this.ptr,e,t,i,n,a)}coIsSensor(e){return tf(this.ptr,e)!==0}coShapeType(e){return rf(this.ptr,e)>>>0}coHalfspaceNormal(e){const t=nf(this.ptr,e);return t===0?void 0:F.__wrap(t)}coHalfExtents(e){const t=af(this.ptr,e);return t===0?void 0:F.__wrap(t)}coSetHalfExtents(e,t){I(t,F),sf(this.ptr,e,t.ptr)}coRadius(e){try{const n=$e(-16);of(n,this.ptr,e);var t=st()[n/4+0],i=Oi()[n/4+1];return t===0?void 0:i}finally{$e(16)}}coSetRadius(e,t){lf(this.ptr,e,t)}coHalfHeight(e){try{const n=$e(-16);cf(n,this.ptr,e);var t=st()[n/4+0],i=Oi()[n/4+1];return t===0?void 0:i}finally{$e(16)}}coSetHalfHeight(e,t){hf(this.ptr,e,t)}coRoundRadius(e){try{const n=$e(-16);uf(n,this.ptr,e);var t=st()[n/4+0],i=Oi()[n/4+1];return t===0?void 0:i}finally{$e(16)}}coSetRoundRadius(e,t){df(this.ptr,e,t)}coVertices(e){try{const n=$e(-16);pf(n,this.ptr,e);var t=st()[n/4+0],i=st()[n/4+1];let a;return t!==0&&(a=$o(t,i).slice(),Qn(t,i*4)),a}finally{$e(16)}}coIndices(e){try{const n=$e(-16);mf(n,this.ptr,e);var t=st()[n/4+0],i=st()[n/4+1];let a;return t!==0&&(a=mu(t,i).slice(),Qn(t,i*4)),a}finally{$e(16)}}coHeightfieldHeights(e){try{const n=$e(-16);ff(n,this.ptr,e);var t=st()[n/4+0],i=st()[n/4+1];let a;return t!==0&&(a=$o(t,i).slice(),Qn(t,i*4)),a}finally{$e(16)}}coHeightfieldScale(e){const t=gf(this.ptr,e);return t===0?void 0:F.__wrap(t)}coHeightfieldNRows(e){try{const n=$e(-16);_f(n,this.ptr,e);var t=st()[n/4+0],i=st()[n/4+1];return t===0?void 0:i>>>0}finally{$e(16)}}coHeightfieldNCols(e){try{const n=$e(-16);vf(n,this.ptr,e);var t=st()[n/4+0],i=st()[n/4+1];return t===0?void 0:i>>>0}finally{$e(16)}}coParent(e){try{const n=$e(-16);wf(n,this.ptr,e);var t=st()[n/4+0],i=Nn()[n/8+1];return t===0?void 0:i}finally{$e(16)}}coSetEnabled(e,t){yf(this.ptr,e,t)}coIsEnabled(e){return xf(this.ptr,e)!==0}coFriction(e){return Mf(this.ptr,e)}coRestitution(e){return bf(this.ptr,e)}coDensity(e){return Sf(this.ptr,e)}coMass(e){return Ef(this.ptr,e)}coVolume(e){return Tf(this.ptr,e)}coCollisionGroups(e){return Af(this.ptr,e)>>>0}coSolverGroups(e){return Rf(this.ptr,e)>>>0}coActiveHooks(e){return Cf(this.ptr,e)>>>0}coActiveCollisionTypes(e){return Pf(this.ptr,e)}coActiveEvents(e){return Lf(this.ptr,e)>>>0}coContactForceEventThreshold(e){return If(this.ptr,e)}coContainsPoint(e,t){return I(t,F),Df(this.ptr,e,t.ptr)!==0}coCastShape(e,t,i,n,a,o,s,l){I(t,F),I(i,Pe),I(n,F),I(a,Ye),I(o,F);const c=Uf(this.ptr,e,t.ptr,i.ptr,n.ptr,a.ptr,o.ptr,s,l);return c===0?void 0:Yn.__wrap(c)}coCastCollider(e,t,i,n,a,o){I(t,F),I(n,F);const s=Nf(this.ptr,e,t.ptr,i,n.ptr,a,o);return s===0?void 0:qn.__wrap(s)}coIntersectsShape(e,t,i,n){return I(t,Pe),I(i,F),I(n,Ye),Of(this.ptr,e,t.ptr,i.ptr,n.ptr)!==0}coContactShape(e,t,i,n,a){I(t,Pe),I(i,F),I(n,Ye);const o=Ff(this.ptr,e,t.ptr,i.ptr,n.ptr,a);return o===0?void 0:on.__wrap(o)}coContactCollider(e,t,i){const n=zf(this.ptr,e,t,i);return n===0?void 0:on.__wrap(n)}coProjectPoint(e,t,i){I(t,F);const n=Hf(this.ptr,e,t.ptr,i);return kn.__wrap(n)}coIntersectsRay(e,t,i,n){return I(t,F),I(i,F),Bf(this.ptr,e,t.ptr,i.ptr,n)!==0}coCastRay(e,t,i,n,a){return I(t,F),I(i,F),Gf(this.ptr,e,t.ptr,i.ptr,n,a)}coCastRayAndGetNormal(e,t,i,n,a){I(t,F),I(i,F);const o=kf(this.ptr,e,t.ptr,i.ptr,n,a);return o===0?void 0:Wn.__wrap(o)}coSetSensor(e,t){Vf(this.ptr,e,t)}coSetRestitution(e,t){Wf(this.ptr,e,t)}coSetFriction(e,t){jf(this.ptr,e,t)}coFrictionCombineRule(e){return Xf(this.ptr,e)>>>0}coSetFrictionCombineRule(e,t){qf(this.ptr,e,t)}coRestitutionCombineRule(e){return Yf(this.ptr,e)>>>0}coSetRestitutionCombineRule(e,t){Kf(this.ptr,e,t)}coSetCollisionGroups(e,t){Jf(this.ptr,e,t)}coSetSolverGroups(e,t){Zf(this.ptr,e,t)}coSetActiveHooks(e,t){Qf(this.ptr,e,t)}coSetActiveEvents(e,t){$f(this.ptr,e,t)}coSetActiveCollisionTypes(e,t){eg(this.ptr,e,t)}coSetShape(e,t){I(t,Pe),tg(this.ptr,e,t.ptr)}coSetContactForceEventThreshold(e,t){ig(this.ptr,e,t)}coSetDensity(e,t){rg(this.ptr,e,t)}coSetMass(e,t){ng(this.ptr,e,t)}coSetMassProperties(e,t,i,n,a){I(i,F),I(n,F),I(a,Ye),ag(this.ptr,e,t,i.ptr,n.ptr,a.ptr)}constructor(){const e=og();return mt.__wrap(e)}len(){return lg(this.ptr)>>>0}contains(e){return rl(this.ptr,e)!==0}createCollider(e,t,i,n,a,o,s,l,c,h,u,d,m,_,v,f,p,E,w,A,P,T,R,V){try{const H=$e(-16);I(t,Pe),I(i,F),I(n,Ye),I(s,F),I(l,F),I(c,Ye),I(V,ft),cg(H,this.ptr,e,t.ptr,i.ptr,n.ptr,a,o,s.ptr,l.ptr,c.ptr,h,u,d,m,_,v,f,p,E,w,A,P,T,R,V.ptr);var x=st()[H/4+0],b=Nn()[H/8+1];return x===0?void 0:b}finally{$e(16)}}remove(e,t,i,n){I(t,vi),I(i,ft),hg(this.ptr,e,t.ptr,i.ptr,n)}isHandleValid(e){return rl(this.ptr,e)!==0}forEachColliderHandle(e){try{ug(this.ptr,pt(e))}finally{it[lt++]=void 0}}}class as{static __wrap(e){const t=Object.create(as.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();r1(e)}collider1(){return ln(this.ptr)}collider2(){return n1(this.ptr)}total_force(){const e=sl(this.ptr);return F.__wrap(e)}total_force_magnitude(){return a1(this.ptr)}max_force_direction(){const e=s1(this.ptr);return F.__wrap(e)}max_force_magnitude(){return o1(this.ptr)}}class ss{static __wrap(e){const t=Object.create(ss.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();yg(e)}normal(){const e=Eg(this.ptr);return F.__wrap(e)}local_n1(){const e=Tg(this.ptr);return F.__wrap(e)}local_n2(){const e=Ag(this.ptr);return F.__wrap(e)}subshape1(){return Rg(this.ptr)>>>0}subshape2(){return Cg(this.ptr)>>>0}num_contacts(){return Pg(this.ptr)>>>0}contact_local_p1(e){const t=Lg(this.ptr,e);return t===0?void 0:F.__wrap(t)}contact_local_p2(e){const t=Ig(this.ptr,e);return t===0?void 0:F.__wrap(t)}contact_dist(e){return Dg(this.ptr,e)}contact_fid1(e){return Ug(this.ptr,e)>>>0}contact_fid2(e){return Ng(this.ptr,e)>>>0}contact_impulse(e){return Og(this.ptr,e)}contact_tangent_impulse_x(e){return Fg(this.ptr,e)}contact_tangent_impulse_y(e){return zg(this.ptr,e)}num_solver_contacts(){return Hg(this.ptr)>>>0}solver_contact_point(e){const t=Bg(this.ptr,e);return t===0?void 0:F.__wrap(t)}solver_contact_dist(e){return Gg(this.ptr,e)}solver_contact_friction(e){return kg(this.ptr,e)}solver_contact_restitution(e){return Vg(this.ptr,e)}solver_contact_tangent_velocity(e){const t=Wg(this.ptr,e);return F.__wrap(t)}}class os{static __wrap(e){const t=Object.create(os.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();G1(e)}collider1(){return xg(this.ptr)}collider2(){return Mg(this.ptr)}numContactManifolds(){return bg(this.ptr)>>>0}contactManifold(e){const t=Sg(this.ptr,e);return t===0?void 0:ss.__wrap(t)}}class zn{static __wrap(e){const t=Object.create(zn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Z_(e)}constructor(){const e=Q_();return zn.__wrap(e)}vertices(){const e=$_(this.ptr);return rn(e)}colors(){const e=e1(this.ptr);return rn(e)}render(e,t,i,n,a){I(e,ft),I(t,mt),I(i,_i),I(n,wi),I(a,Ti),t1(this.ptr,e.ptr,t.ptr,i.ptr,n.ptr,a.ptr)}}class ls{static __wrap(e){const t=Object.create(ls.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();C1(e)}takeGravity(){const e=P1(this.ptr);return e===0?void 0:F.__wrap(e)}takeIntegrationParameters(){const e=L1(this.ptr);return e===0?void 0:zi.__wrap(e)}takeIslandManager(){const e=I1(this.ptr);return e===0?void 0:vi.__wrap(e)}takeBroadPhase(){const e=D1(this.ptr);return e===0?void 0:Fi.__wrap(e)}takeNarrowPhase(){const e=U1(this.ptr);return e===0?void 0:Ti.__wrap(e)}takeBodies(){const e=N1(this.ptr);return e===0?void 0:ft.__wrap(e)}takeColliders(){const e=O1(this.ptr);return e===0?void 0:mt.__wrap(e)}takeImpulseJoints(){const e=F1(this.ptr);return e===0?void 0:_i.__wrap(e)}takeMultibodyJoints(){const e=z1(this.ptr);return e===0?void 0:wi.__wrap(e)}}class an{static __wrap(e){const t=Object.create(an.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();i1(e)}constructor(e){const t=l1(e);return an.__wrap(t)}drainCollisionEvents(e){try{c1(this.ptr,pt(e))}finally{it[lt++]=void 0}}drainContactForceEvents(e){try{h1(this.ptr,pt(e))}finally{it[lt++]=void 0}}clear(){u1(this.ptr)}}class $t{static __wrap(e){const t=Object.create($t.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();cp(e)}static spherical(e,t){I(e,F),I(t,F);const i=hp(e.ptr,t.ptr);return $t.__wrap(i)}static prismatic(e,t,i,n,a,o){I(e,F),I(t,F),I(i,F);const s=up(e.ptr,t.ptr,i.ptr,n,a,o);return s===0?void 0:$t.__wrap(s)}static fixed(e,t,i,n){I(e,F),I(t,Ye),I(i,F),I(n,Ye);const a=dp(e.ptr,t.ptr,i.ptr,n.ptr);return $t.__wrap(a)}static revolute(e,t,i){I(e,F),I(t,F),I(i,F);const n=pp(e.ptr,t.ptr,i.ptr);return n===0?void 0:$t.__wrap(n)}}class _i{static __wrap(e){const t=Object.create(_i.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Od(e)}jointType(e){return _d(this.ptr,e)>>>0}jointBodyHandle1(e){return vd(this.ptr,e)}jointBodyHandle2(e){return wd(this.ptr,e)}jointFrameX1(e){const t=yd(this.ptr,e);return Ye.__wrap(t)}jointFrameX2(e){const t=xd(this.ptr,e);return Ye.__wrap(t)}jointAnchor1(e){const t=Md(this.ptr,e);return F.__wrap(t)}jointAnchor2(e){const t=bd(this.ptr,e);return F.__wrap(t)}jointSetAnchor1(e,t){I(t,F),Sd(this.ptr,e,t.ptr)}jointSetAnchor2(e,t){I(t,F),Ed(this.ptr,e,t.ptr)}jointContactsEnabled(e){return Td(this.ptr,e)!==0}jointSetContactsEnabled(e,t){Ad(this.ptr,e,t)}jointLimitsEnabled(e,t){return Rd(this.ptr,e,t)!==0}jointLimitsMin(e,t){return Cd(this.ptr,e,t)}jointLimitsMax(e,t){return Pd(this.ptr,e,t)}jointSetLimits(e,t,i,n){Ld(this.ptr,e,t,i,n)}jointConfigureMotorModel(e,t,i){Id(this.ptr,e,t,i)}jointConfigureMotorVelocity(e,t,i,n){Dd(this.ptr,e,t,i,n)}jointConfigureMotorPosition(e,t,i,n,a){Ud(this.ptr,e,t,i,n,a)}jointConfigureMotor(e,t,i,n,a,o){Nd(this.ptr,e,t,i,n,a,o)}constructor(){const e=Fd();return _i.__wrap(e)}createJoint(e,t,i,n){return I(e,$t),zd(this.ptr,e.ptr,t,i,n)}remove(e,t){Hd(this.ptr,e,t)}len(){return Bd(this.ptr)>>>0}contains(e){return Gd(this.ptr,e)!==0}forEachJointHandle(e){try{kd(this.ptr,pt(e))}finally{it[lt++]=void 0}}forEachJointAttachedToRigidBody(e,t){try{Vd(this.ptr,e,pt(t))}finally{it[lt++]=void 0}}}class zi{static __wrap(e){const t=Object.create(zi.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Wd(e)}constructor(){const e=jd();return zi.__wrap(e)}get dt(){return Zn(this.ptr)}get erp(){return tr(this.ptr)}get allowedLinearError(){return Xd(this.ptr)}get predictionDistance(){return qd(this.ptr)}get maxVelocityIterations(){return Yd(this.ptr)>>>0}get maxVelocityFrictionIterations(){return Kd(this.ptr)>>>0}get maxStabilizationIterations(){return Jd(this.ptr)>>>0}get minIslandSize(){return Zd(this.ptr)>>>0}get maxCcdSubsteps(){return Qd(this.ptr)>>>0}set dt(e){tl(this.ptr,e)}set erp(e){il(this.ptr,e)}set allowedLinearError(e){$d(this.ptr,e)}set predictionDistance(e){ep(this.ptr,e)}set maxVelocityIterations(e){tp(this.ptr,e)}set maxVelocityFrictionIterations(e){ip(this.ptr,e)}set maxStabilizationIterations(e){rp(this.ptr,e)}set minIslandSize(e){np(this.ptr,e)}set maxCcdSubsteps(e){ap(this.ptr,e)}}class vi{static __wrap(e){const t=Object.create(vi.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();sp(e)}constructor(){const e=op();return vi.__wrap(e)}forEachActiveRigidBodyHandle(e){try{lp(this.ptr,pt(e))}finally{it[lt++]=void 0}}}class Hn{static __wrap(e){const t=Object.create(Hn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();zu(e)}constructor(e){const t=Hu(e);return Hn.__wrap(t)}up(){const e=Bu(this.ptr);return F.__wrap(e)}setUp(e){I(e,F),Gu(this.ptr,e.ptr)}offset(){return ku(this.ptr)}setOffset(e){Vu(this.ptr,e)}slideEnabled(){return Wu(this.ptr)!==0}setSlideEnabled(e){ju(this.ptr,e)}autostepMaxHeight(){try{const i=$e(-16);Xu(i,this.ptr);var e=st()[i/4+0],t=Oi()[i/4+1];return e===0?void 0:t}finally{$e(16)}}autostepMinWidth(){try{const i=$e(-16);qu(i,this.ptr);var e=st()[i/4+0],t=Oi()[i/4+1];return e===0?void 0:t}finally{$e(16)}}autostepIncludesDynamicBodies(){const e=Yu(this.ptr);return e===16777215?void 0:e!==0}autostepEnabled(){return Ku(this.ptr)!==0}enableAutostep(e,t,i){Ju(this.ptr,e,t,i)}disableAutostep(){Zu(this.ptr)}maxSlopeClimbAngle(){return Qu(this.ptr)}setMaxSlopeClimbAngle(e){$u(this.ptr,e)}minSlopeSlideAngle(){return ed(this.ptr)}setMinSlopeSlideAngle(e){td(this.ptr,e)}snapToGroundDistance(){try{const i=$e(-16);id(i,this.ptr);var e=st()[i/4+0],t=Oi()[i/4+1];return e===0?void 0:t}finally{$e(16)}}enableSnapToGround(e){rd(this.ptr,e)}disableSnapToGround(){nd(this.ptr)}snapToGroundEnabled(){return ad(this.ptr)!==0}computeColliderMovement(e,t,i,n,a,o,s,l,c,h,u){try{I(t,ft),I(i,mt),I(n,sn),I(o,F),sd(this.ptr,e,t.ptr,i.ptr,n.ptr,a,o.ptr,s,!be(l),be(l)?0:l,c,!be(h),be(h)?0:h,pt(u))}finally{it[lt++]=void 0}}computedMovement(){const e=Kn(this.ptr);return F.__wrap(e)}computedGrounded(){return hs(this.ptr)!==0}numComputedCollisions(){return od(this.ptr)>>>0}computedCollision(e,t){return I(t,nn),ld(this.ptr,e,t.ptr)!==0}}class wi{static __wrap(e){const t=Object.create(wi.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Sp(e)}jointType(e){return mp(this.ptr,e)>>>0}jointFrameX1(e){const t=fp(this.ptr,e);return Ye.__wrap(t)}jointFrameX2(e){const t=gp(this.ptr,e);return Ye.__wrap(t)}jointAnchor1(e){const t=_p(this.ptr,e);return F.__wrap(t)}jointAnchor2(e){const t=vp(this.ptr,e);return F.__wrap(t)}jointContactsEnabled(e){return wp(this.ptr,e)!==0}jointSetContactsEnabled(e,t){yp(this.ptr,e,t)}jointLimitsEnabled(e,t){return xp(this.ptr,e,t)!==0}jointLimitsMin(e,t){return Mp(this.ptr,e,t)}jointLimitsMax(e,t){return bp(this.ptr,e,t)}constructor(){const e=Ep();return wi.__wrap(e)}createJoint(e,t,i,n){return I(e,$t),Tp(this.ptr,e.ptr,t,i,n)}remove(e,t){Ap(this.ptr,e,t)}contains(e){return Rp(this.ptr,e)!==0}forEachJointHandle(e){try{Cp(this.ptr,pt(e))}finally{it[lt++]=void 0}}forEachJointAttachedToRigidBody(e,t){try{Pp(this.ptr,e,pt(t))}finally{it[lt++]=void 0}}}class Ti{static __wrap(e){const t=Object.create(Ti.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();mg(e)}constructor(){const e=fg();return Ti.__wrap(e)}contacts_with(e,t){gg(this.ptr,e,wt(t))}contact_pair(e,t){const i=_g(this.ptr,e,t);return i===0?void 0:os.__wrap(i)}intersections_with(e,t){vg(this.ptr,e,wt(t))}intersection_pair(e,t){return wg(this.ptr,e,t)!==0}}class Bn{static __wrap(e){const t=Object.create(Bn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();d1(e)}constructor(){const e=p1();return Bn.__wrap(e)}step(e,t,i,n,a,o,s,l,c,h){I(e,F),I(t,zi),I(i,vi),I(n,Fi),I(a,Ti),I(o,ft),I(s,mt),I(l,_i),I(c,wi),I(h,wr),m1(this.ptr,e.ptr,t.ptr,i.ptr,n.ptr,a.ptr,o.ptr,s.ptr,l.ptr,c.ptr,h.ptr)}stepWithEvents(e,t,i,n,a,o,s,l,c,h,u,d,m,_){I(e,F),I(t,zi),I(i,vi),I(n,Fi),I(a,Ti),I(o,ft),I(s,mt),I(l,_i),I(c,wi),I(h,wr),I(u,an),f1(this.ptr,e.ptr,t.ptr,i.ptr,n.ptr,a.ptr,o.ptr,s.ptr,l.ptr,c.ptr,h.ptr,u.ptr,wt(d),wt(m),wt(_))}}class Gn{static __wrap(e){const t=Object.create(Gn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Xg(e)}colliderHandle(){return qg(this.ptr)}point(){const e=Kn(this.ptr);return F.__wrap(e)}isInside(){return hs(this.ptr)!==0}featureType(){return Yg(this.ptr)>>>0}featureId(){try{const i=$e(-16);Kg(i,this.ptr);var e=st()[i/4+0],t=st()[i/4+1];return e===0?void 0:t>>>0}finally{$e(16)}}}class kn{static __wrap(e){const t=Object.create(kn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();jg(e)}point(){const e=Kn(this.ptr);return F.__wrap(e)}isInside(){return hs(this.ptr)!==0}}class sn{static __wrap(e){const t=Object.create(sn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();g1(e)}constructor(){const e=_1();return sn.__wrap(e)}update(e,t){I(e,ft),I(t,mt),v1(this.ptr,e.ptr,t.ptr)}castRay(e,t,i,n,a,o,s,l,c,h,u){try{I(e,ft),I(t,mt),I(i,F),I(n,F);const d=w1(this.ptr,e.ptr,t.ptr,i.ptr,n.ptr,a,o,s,!be(l),be(l)?0:l,!be(c),be(c)?0:c,!be(h),be(h)?0:h,pt(u));return d===0?void 0:cs.__wrap(d)}finally{it[lt++]=void 0}}castRayAndGetNormal(e,t,i,n,a,o,s,l,c,h,u){try{I(e,ft),I(t,mt),I(i,F),I(n,F);const d=y1(this.ptr,e.ptr,t.ptr,i.ptr,n.ptr,a,o,s,!be(l),be(l)?0:l,!be(c),be(c)?0:c,!be(h),be(h)?0:h,pt(u));return d===0?void 0:Vn.__wrap(d)}finally{it[lt++]=void 0}}intersectionsWithRay(e,t,i,n,a,o,s,l,c,h,u,d){try{I(e,ft),I(t,mt),I(i,F),I(n,F),x1(this.ptr,e.ptr,t.ptr,i.ptr,n.ptr,a,o,pt(s),l,!be(c),be(c)?0:c,!be(h),be(h)?0:h,!be(u),be(u)?0:u,pt(d))}finally{it[lt++]=void 0,it[lt++]=void 0}}intersectionWithShape(e,t,i,n,a,o,s,l,c,h){try{const m=$e(-16);I(e,ft),I(t,mt),I(i,F),I(n,Ye),I(a,Pe),M1(m,this.ptr,e.ptr,t.ptr,i.ptr,n.ptr,a.ptr,o,!be(s),be(s)?0:s,!be(l),be(l)?0:l,!be(c),be(c)?0:c,pt(h));var u=st()[m/4+0],d=Nn()[m/8+1];return u===0?void 0:d}finally{$e(16),it[lt++]=void 0}}projectPoint(e,t,i,n,a,o,s,l,c){try{I(e,ft),I(t,mt),I(i,F);const h=b1(this.ptr,e.ptr,t.ptr,i.ptr,n,a,!be(o),be(o)?0:o,!be(s),be(s)?0:s,!be(l),be(l)?0:l,pt(c));return h===0?void 0:Gn.__wrap(h)}finally{it[lt++]=void 0}}projectPointAndGetFeature(e,t,i,n,a,o,s,l){try{I(e,ft),I(t,mt),I(i,F);const c=S1(this.ptr,e.ptr,t.ptr,i.ptr,n,!be(a),be(a)?0:a,!be(o),be(o)?0:o,!be(s),be(s)?0:s,pt(l));return c===0?void 0:Gn.__wrap(c)}finally{it[lt++]=void 0}}intersectionsWithPoint(e,t,i,n,a,o,s,l,c){try{I(e,ft),I(t,mt),I(i,F),E1(this.ptr,e.ptr,t.ptr,i.ptr,pt(n),a,!be(o),be(o)?0:o,!be(s),be(s)?0:s,!be(l),be(l)?0:l,pt(c))}finally{it[lt++]=void 0,it[lt++]=void 0}}castShape(e,t,i,n,a,o,s,l,c,h,u,d,m){try{I(e,ft),I(t,mt),I(i,F),I(n,Ye),I(a,F),I(o,Pe);const _=T1(this.ptr,e.ptr,t.ptr,i.ptr,n.ptr,a.ptr,o.ptr,s,l,c,!be(h),be(h)?0:h,!be(u),be(u)?0:u,!be(d),be(d)?0:d,pt(m));return _===0?void 0:qn.__wrap(_)}finally{it[lt++]=void 0}}intersectionsWithShape(e,t,i,n,a,o,s,l,c,h,u){try{I(e,ft),I(t,mt),I(i,F),I(n,Ye),I(a,Pe),A1(this.ptr,e.ptr,t.ptr,i.ptr,n.ptr,a.ptr,pt(o),s,!be(l),be(l)?0:l,!be(c),be(c)?0:c,!be(h),be(h)?0:h,pt(u))}finally{it[lt++]=void 0,it[lt++]=void 0}}collidersWithAabbIntersectingAabb(e,t,i){try{I(e,F),I(t,F),R1(this.ptr,e.ptr,t.ptr,pt(i))}finally{it[lt++]=void 0}}}class Vn{static __wrap(e){const t=Object.create(Vn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();k1(e)}colliderHandle(){return ln(this.ptr)}normal(){const e=$g(this.ptr);return F.__wrap(e)}toi(){return e_(this.ptr)}featureType(){return t_(this.ptr)>>>0}featureId(){try{const i=$e(-16);i_(i,this.ptr);var e=st()[i/4+0],t=st()[i/4+1];return e===0?void 0:t>>>0}finally{$e(16)}}}class cs{static __wrap(e){const t=Object.create(cs.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();r_(e)}colliderHandle(){return ln(this.ptr)}toi(){return tr(this.ptr)}}class Wn{static __wrap(e){const t=Object.create(Wn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Jg(e)}normal(){const e=Jn(this.ptr);return F.__wrap(e)}toi(){return tr(this.ptr)}featureType(){return Zg(this.ptr)>>>0}featureId(){try{const i=$e(-16);Qg(i,this.ptr);var e=st()[i/4+0],t=st()[i/4+1];return e===0?void 0:t>>>0}finally{$e(16)}}}class ft{static __wrap(e){const t=Object.create(ft.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Hm(e)}rbTranslation(e){const t=Lp(this.ptr,e);return F.__wrap(t)}rbRotation(e){const t=Ip(this.ptr,e);return Ye.__wrap(t)}rbSleep(e){Dp(this.ptr,e)}rbIsSleeping(e){return Up(this.ptr,e)!==0}rbIsMoving(e){return Np(this.ptr,e)!==0}rbNextTranslation(e){const t=Op(this.ptr,e);return F.__wrap(t)}rbNextRotation(e){const t=Fp(this.ptr,e);return Ye.__wrap(t)}rbSetTranslation(e,t,i,n,a){zp(this.ptr,e,t,i,n,a)}rbSetRotation(e,t,i,n,a,o){Hp(this.ptr,e,t,i,n,a,o)}rbSetLinvel(e,t,i){I(t,F),Bp(this.ptr,e,t.ptr,i)}rbSetAngvel(e,t,i){I(t,F),Gp(this.ptr,e,t.ptr,i)}rbSetNextKinematicTranslation(e,t,i,n){kp(this.ptr,e,t,i,n)}rbSetNextKinematicRotation(e,t,i,n,a){Vp(this.ptr,e,t,i,n,a)}rbRecomputeMassPropertiesFromColliders(e,t){I(t,mt),Wp(this.ptr,e,t.ptr)}rbSetAdditionalMass(e,t,i){jp(this.ptr,e,t,i)}rbSetAdditionalMassProperties(e,t,i,n,a,o){I(i,F),I(n,F),I(a,Ye),Xp(this.ptr,e,t,i.ptr,n.ptr,a.ptr,o)}rbLinvel(e){const t=qp(this.ptr,e);return F.__wrap(t)}rbAngvel(e){const t=Yp(this.ptr,e);return F.__wrap(t)}rbLockTranslations(e,t,i){Kp(this.ptr,e,t,i)}rbSetEnabledTranslations(e,t,i,n,a){Jp(this.ptr,e,t,i,n,a)}rbLockRotations(e,t,i){Zp(this.ptr,e,t,i)}rbSetEnabledRotations(e,t,i,n,a){Qp(this.ptr,e,t,i,n,a)}rbDominanceGroup(e){return $p(this.ptr,e)}rbSetDominanceGroup(e,t){em(this.ptr,e,t)}rbEnableCcd(e,t){tm(this.ptr,e,t)}rbMass(e){return im(this.ptr,e)}rbInvMass(e){return rm(this.ptr,e)}rbEffectiveInvMass(e){const t=nm(this.ptr,e);return F.__wrap(t)}rbLocalCom(e){const t=am(this.ptr,e);return F.__wrap(t)}rbWorldCom(e){const t=sm(this.ptr,e);return F.__wrap(t)}rbInvPrincipalInertiaSqrt(e){const t=om(this.ptr,e);return F.__wrap(t)}rbPrincipalInertiaLocalFrame(e){const t=lm(this.ptr,e);return Ye.__wrap(t)}rbPrincipalInertia(e){const t=cm(this.ptr,e);return F.__wrap(t)}rbEffectiveWorldInvInertiaSqrt(e){const t=hm(this.ptr,e);return jn.__wrap(t)}rbEffectiveAngularInertia(e){const t=um(this.ptr,e);return jn.__wrap(t)}rbWakeUp(e){dm(this.ptr,e)}rbIsCcdEnabled(e){return pm(this.ptr,e)!==0}rbNumColliders(e){return mm(this.ptr,e)>>>0}rbCollider(e,t){return fm(this.ptr,e,t)}rbBodyType(e){return gm(this.ptr,e)>>>0}rbSetBodyType(e,t,i){_m(this.ptr,e,t,i)}rbIsFixed(e){return vm(this.ptr,e)!==0}rbIsKinematic(e){return wm(this.ptr,e)!==0}rbIsDynamic(e){return ym(this.ptr,e)!==0}rbLinearDamping(e){return xm(this.ptr,e)}rbAngularDamping(e){return Mm(this.ptr,e)}rbSetLinearDamping(e,t){bm(this.ptr,e,t)}rbSetAngularDamping(e,t){Sm(this.ptr,e,t)}rbSetEnabled(e,t){Em(this.ptr,e,t)}rbIsEnabled(e){return Tm(this.ptr,e)!==0}rbGravityScale(e){return Am(this.ptr,e)}rbSetGravityScale(e,t,i){Rm(this.ptr,e,t,i)}rbResetForces(e,t){Cm(this.ptr,e,t)}rbResetTorques(e,t){Pm(this.ptr,e,t)}rbAddForce(e,t,i){I(t,F),Lm(this.ptr,e,t.ptr,i)}rbApplyImpulse(e,t,i){I(t,F),Im(this.ptr,e,t.ptr,i)}rbAddTorque(e,t,i){I(t,F),Dm(this.ptr,e,t.ptr,i)}rbApplyTorqueImpulse(e,t,i){I(t,F),Um(this.ptr,e,t.ptr,i)}rbAddForceAtPoint(e,t,i,n){I(t,F),I(i,F),Nm(this.ptr,e,t.ptr,i.ptr,n)}rbApplyImpulseAtPoint(e,t,i,n){I(t,F),I(i,F),Om(this.ptr,e,t.ptr,i.ptr,n)}rbUserData(e){return Fm(this.ptr,e)>>>0}rbSetUserData(e,t){zm(this.ptr,e,t)}constructor(){const e=Bm();return ft.__wrap(e)}createRigidBody(e,t,i,n,a,o,s,l,c,h,u,d,m,_,v,f,p,E,w,A,P,T,R,V){return I(t,F),I(i,Ye),I(s,F),I(l,F),I(c,F),I(h,F),I(u,Ye),Gm(this.ptr,e,t.ptr,i.ptr,n,a,o,s.ptr,l.ptr,c.ptr,h.ptr,u.ptr,d,m,_,v,f,p,E,w,A,P,T,R,V)}remove(e,t,i,n,a){I(t,vi),I(i,mt),I(n,_i),I(a,wi),km(this.ptr,e,t.ptr,i.ptr,n.ptr,a.ptr)}len(){return Vm(this.ptr)>>>0}contains(e){return Wm(this.ptr,e)!==0}forEachRigidBodyHandle(e){try{jm(this.ptr,pt(e))}finally{it[lt++]=void 0}}propagateModifiedBodyPositionsToColliders(e){I(e,mt),Xm(this.ptr,e.ptr)}}class Ye{static __wrap(e){const t=Object.create(Ye.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();V1(e)}constructor(e,t,i,n){const a=z_(e,t,i,n);return Ye.__wrap(a)}static identity(){const e=H_();return Ye.__wrap(e)}get x(){return Zn(this.ptr)}get y(){return al(this.ptr)}get z(){return tr(this.ptr)}get w(){return B_(this.ptr)}}class jn{static __wrap(e){const t=Object.create(jn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();j1(e)}elements(){const e=J_(this.ptr);return rn(e)}}class Xn{static __wrap(e){const t=Object.create(Xn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();q1(e)}constructor(){const e=X1();return Xn.__wrap(e)}serializeAll(e,t,i,n,a,o,s,l,c){I(e,F),I(t,zi),I(i,vi),I(n,Fi),I(a,Ti),I(o,ft),I(s,mt),I(l,_i),I(c,wi);const h=H1(this.ptr,e.ptr,t.ptr,i.ptr,n.ptr,a.ptr,o.ptr,s.ptr,l.ptr,c.ptr);return rn(h)}deserializeAll(e){const t=B1(this.ptr,wt(e));return t===0?void 0:ls.__wrap(t)}}class Pe{static __wrap(e){const t=Object.create(Pe.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();n_(e)}static cuboid(e,t,i){const n=a_(e,t,i);return Pe.__wrap(n)}static roundCuboid(e,t,i,n){const a=s_(e,t,i,n);return Pe.__wrap(a)}static ball(e){const t=o_(e);return Pe.__wrap(t)}static halfspace(e){I(e,F);const t=l_(e.ptr);return Pe.__wrap(t)}static capsule(e,t){const i=c_(e,t);return Pe.__wrap(i)}static cylinder(e,t){const i=h_(e,t);return Pe.__wrap(i)}static roundCylinder(e,t,i){const n=u_(e,t,i);return Pe.__wrap(n)}static cone(e,t){const i=d_(e,t);return Pe.__wrap(i)}static roundCone(e,t,i){const n=p_(e,t,i);return Pe.__wrap(n)}static polyline(e,t){const i=er(e,ci),n=Kt,a=On(t,ci),o=m_(i,n,a,Kt);return Pe.__wrap(o)}static trimesh(e,t){const i=er(e,ci),n=Kt,a=On(t,ci),o=f_(i,n,a,Kt);return Pe.__wrap(o)}static heightfield(e,t,i,n){const a=er(i,ci),o=Kt;I(n,F);const s=g_(e,t,a,o,n.ptr);return Pe.__wrap(s)}static segment(e,t){I(e,F),I(t,F);const i=__(e.ptr,t.ptr);return Pe.__wrap(i)}static triangle(e,t,i){I(e,F),I(t,F),I(i,F);const n=v_(e.ptr,t.ptr,i.ptr);return Pe.__wrap(n)}static roundTriangle(e,t,i,n){I(e,F),I(t,F),I(i,F);const a=w_(e.ptr,t.ptr,i.ptr,n);return Pe.__wrap(a)}static convexHull(e){const t=er(e,ci),i=y_(t,Kt);return i===0?void 0:Pe.__wrap(i)}static roundConvexHull(e,t){const i=er(e,ci),n=x_(i,Kt,t);return n===0?void 0:Pe.__wrap(n)}static convexMesh(e,t){const i=er(e,ci),n=Kt,a=On(t,ci),o=M_(i,n,a,Kt);return o===0?void 0:Pe.__wrap(o)}static roundConvexMesh(e,t,i){const n=er(e,ci),a=Kt,o=On(t,ci),s=b_(n,a,o,Kt,i);return s===0?void 0:Pe.__wrap(s)}castShape(e,t,i,n,a,o,s,l,c){I(e,F),I(t,Ye),I(i,F),I(n,Pe),I(a,F),I(o,Ye),I(s,F);const h=S_(this.ptr,e.ptr,t.ptr,i.ptr,n.ptr,a.ptr,o.ptr,s.ptr,l,c);return h===0?void 0:Yn.__wrap(h)}intersectsShape(e,t,i,n,a){return I(e,F),I(t,Ye),I(i,Pe),I(n,F),I(a,Ye),E_(this.ptr,e.ptr,t.ptr,i.ptr,n.ptr,a.ptr)!==0}contactShape(e,t,i,n,a,o){I(e,F),I(t,Ye),I(i,Pe),I(n,F),I(a,Ye);const s=T_(this.ptr,e.ptr,t.ptr,i.ptr,n.ptr,a.ptr,o);return s===0?void 0:on.__wrap(s)}containsPoint(e,t,i){return I(e,F),I(t,Ye),I(i,F),A_(this.ptr,e.ptr,t.ptr,i.ptr)!==0}projectPoint(e,t,i,n){I(e,F),I(t,Ye),I(i,F);const a=R_(this.ptr,e.ptr,t.ptr,i.ptr,n);return kn.__wrap(a)}intersectsRay(e,t,i,n,a){return I(e,F),I(t,Ye),I(i,F),I(n,F),C_(this.ptr,e.ptr,t.ptr,i.ptr,n.ptr,a)!==0}castRay(e,t,i,n,a,o){return I(e,F),I(t,Ye),I(i,F),I(n,F),P_(this.ptr,e.ptr,t.ptr,i.ptr,n.ptr,a,o)}castRayAndGetNormal(e,t,i,n,a,o){I(e,F),I(t,Ye),I(i,F),I(n,F);const s=L_(this.ptr,e.ptr,t.ptr,i.ptr,n.ptr,a,o);return s===0?void 0:Wn.__wrap(s)}}class qn{static __wrap(e){const t=Object.create(qn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();O_(e)}colliderHandle(){return ln(this.ptr)}toi(){return tr(this.ptr)}witness1(){const e=Jn(this.ptr);return F.__wrap(e)}witness2(){const e=nl(this.ptr);return F.__wrap(e)}normal1(){const e=us(this.ptr);return F.__wrap(e)}normal2(){const e=F_(this.ptr);return F.__wrap(e)}}class on{static __wrap(e){const t=Object.create(on.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();dg(e)}distance(){return pg(this.ptr)}point1(){const e=Kn(this.ptr);return F.__wrap(e)}point2(){const e=Jn(this.ptr);return F.__wrap(e)}normal1(){const e=nl(this.ptr);return F.__wrap(e)}normal2(){const e=us(this.ptr);return F.__wrap(e)}}class Yn{static __wrap(e){const t=Object.create(Yn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();I_(e)}toi(){return Zn(this.ptr)}witness1(){const e=D_(this.ptr);return F.__wrap(e)}witness2(){const e=sl(this.ptr);return F.__wrap(e)}normal1(){const e=U_(this.ptr);return F.__wrap(e)}normal2(){const e=N_(this.ptr);return F.__wrap(e)}}class F{static __wrap(e){const t=Object.create(F.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();W1(e)}static zero(){const e=G_();return F.__wrap(e)}constructor(e,t,i){const n=k_(e,t,i);return F.__wrap(n)}get x(){return Zn(this.ptr)}set x(e){tl(this.ptr,e)}get y(){return al(this.ptr)}set y(e){V_(this.ptr,e)}get z(){return tr(this.ptr)}set z(e){il(this.ptr,e)}xyz(){const e=W_(this.ptr);return F.__wrap(e)}yxz(){const e=j_(this.ptr);return F.__wrap(e)}zxy(){const e=X_(this.ptr);return F.__wrap(e)}xzy(){const e=q_(this.ptr);return F.__wrap(e)}yzx(){const e=Y_(this.ptr);return F.__wrap(e)}zyx(){const e=K_(this.ptr);return F.__wrap(e)}}function fu(r){rn(r)}function gu(r){return wt(r)}function _u(r,e){const t=nt(e),i=typeof t=="number"?t:void 0;Nn()[r/8+1]=be(i)?0:i,st()[r/4+0]=!be(i)}function vu(r){const e=nt(r);return typeof e=="boolean"?e?1:0:2}function wu(r){return typeof nt(r)=="function"}function yu(r){const e=Vn.__wrap(r);return wt(e)}function xu(r){const e=as.__wrap(r);return wt(e)}function Mu(){return ns(function(r,e,t){const i=nt(r).call(nt(e),nt(t));return wt(i)},arguments)}function bu(){return ns(function(r,e,t,i){const n=nt(r).call(nt(e),nt(t),nt(i));return wt(n)},arguments)}function Su(){return ns(function(r,e,t,i,n){const a=nt(r).call(nt(e),nt(t),nt(i),nt(n));return wt(a)},arguments)}function Eu(r,e,t,i){const n=nt(r).bind(nt(e),nt(t),nt(i));return wt(n)}function Tu(r){const e=nt(r).buffer;return wt(e)}function Au(r,e,t){const i=new Uint8Array(nt(r),e>>>0,t>>>0);return wt(i)}function Ru(r){const e=new Uint8Array(nt(r));return wt(e)}function Cu(r,e,t){nt(r).set(nt(e),t>>>0)}function Pu(r){return nt(r).length}function Lu(r,e,t){const i=new Float32Array(nt(r),e>>>0,t>>>0);return wt(i)}function Iu(r,e,t){nt(r).set(nt(e),t>>>0)}function Du(r){return nt(r).length}function Uu(r){const e=new Float32Array(r>>>0);return wt(e)}function Nu(r,e){throw new Error(Qo(r,e))}function Ou(){return wt(yr)}URL=globalThis.URL;const g=await cu({"./rapier_wasm3d_bg.js":{__wbindgen_object_drop_ref:fu,__wbindgen_number_new:gu,__wbindgen_number_get:_u,__wbindgen_boolean_get:vu,__wbindgen_is_function:wu,__wbg_rawraycolliderintersection_new:yu,__wbg_rawcontactforceevent_new:xu,__wbg_call_168da88779e35f61:Mu,__wbg_call_3999bee59e9f7719:bu,__wbg_call_e1f72c051cdab859:Su,__wbg_bind_10dfe70e95d2a480:Eu,__wbg_buffer_3f3d764d4747d564:Tu,__wbg_newwithbyteoffsetandlength_d9aa266703cb98be:Au,__wbg_new_8c3f0052272a457a:Ru,__wbg_set_83db9690f9353e79:Cu,__wbg_length_9e1ae1900cb0fbd5:Pu,__wbg_newwithbyteoffsetandlength_be22e5fcf4f69ab4:Lu,__wbg_set_0e0314cf6675c1b9:Iu,__wbg_length_9a2deed95d22668d:Du,__wbg_newwithlength_a7168e4a1e8f5e12:Uu,__wbindgen_throw:Nu,__wbindgen_memory:Ou}},$i),yr=g.memory,Fu=g.version,zu=g.__wbg_rawkinematiccharactercontroller_free,Hu=g.rawkinematiccharactercontroller_new,Bu=g.rawkinematiccharactercontroller_up,Gu=g.rawkinematiccharactercontroller_setUp,ku=g.rawkinematiccharactercontroller_offset,Vu=g.rawkinematiccharactercontroller_setOffset,Wu=g.rawkinematiccharactercontroller_slideEnabled,ju=g.rawkinematiccharactercontroller_setSlideEnabled,Xu=g.rawkinematiccharactercontroller_autostepMaxHeight,qu=g.rawkinematiccharactercontroller_autostepMinWidth,Yu=g.rawkinematiccharactercontroller_autostepIncludesDynamicBodies,Ku=g.rawkinematiccharactercontroller_autostepEnabled,Ju=g.rawkinematiccharactercontroller_enableAutostep,Zu=g.rawkinematiccharactercontroller_disableAutostep,Qu=g.rawkinematiccharactercontroller_maxSlopeClimbAngle,$u=g.rawkinematiccharactercontroller_setMaxSlopeClimbAngle,ed=g.rawkinematiccharactercontroller_minSlopeSlideAngle,td=g.rawkinematiccharactercontroller_setMinSlopeSlideAngle,id=g.rawkinematiccharactercontroller_snapToGroundDistance,rd=g.rawkinematiccharactercontroller_enableSnapToGround,nd=g.rawkinematiccharactercontroller_disableSnapToGround,ad=g.rawkinematiccharactercontroller_snapToGroundEnabled,sd=g.rawkinematiccharactercontroller_computeColliderMovement,Kn=g.rawkinematiccharactercontroller_computedMovement,hs=g.rawkinematiccharactercontroller_computedGrounded,od=g.rawkinematiccharactercontroller_numComputedCollisions,ld=g.rawkinematiccharactercontroller_computedCollision,cd=g.__wbg_rawcharactercollision_free,hd=g.rawcharactercollision_new,ln=g.rawcharactercollision_handle,ud=g.rawcharactercollision_translationApplied,dd=g.rawcharactercollision_translationRemaining,tr=g.rawcharactercollision_toi,Jn=g.rawcharactercollision_worldWitness1,pd=g.rawcharactercollision_worldWitness2,us=g.rawcharactercollision_worldNormal1,md=g.rawcharactercollision_worldNormal2,fd=g.__wbg_rawccdsolver_free,gd=g.rawccdsolver_new,_d=g.rawimpulsejointset_jointType,vd=g.rawimpulsejointset_jointBodyHandle1,wd=g.rawimpulsejointset_jointBodyHandle2,yd=g.rawimpulsejointset_jointFrameX1,xd=g.rawimpulsejointset_jointFrameX2,Md=g.rawimpulsejointset_jointAnchor1,bd=g.rawimpulsejointset_jointAnchor2,Sd=g.rawimpulsejointset_jointSetAnchor1,Ed=g.rawimpulsejointset_jointSetAnchor2,Td=g.rawimpulsejointset_jointContactsEnabled,Ad=g.rawimpulsejointset_jointSetContactsEnabled,Rd=g.rawimpulsejointset_jointLimitsEnabled,Cd=g.rawimpulsejointset_jointLimitsMin,Pd=g.rawimpulsejointset_jointLimitsMax,Ld=g.rawimpulsejointset_jointSetLimits,Id=g.rawimpulsejointset_jointConfigureMotorModel,Dd=g.rawimpulsejointset_jointConfigureMotorVelocity,Ud=g.rawimpulsejointset_jointConfigureMotorPosition,Nd=g.rawimpulsejointset_jointConfigureMotor,Od=g.__wbg_rawimpulsejointset_free,Fd=g.rawimpulsejointset_new,zd=g.rawimpulsejointset_createJoint,Hd=g.rawimpulsejointset_remove,Bd=g.rawimpulsejointset_len,Gd=g.rawimpulsejointset_contains,kd=g.rawimpulsejointset_forEachJointHandle,Vd=g.rawimpulsejointset_forEachJointAttachedToRigidBody,Wd=g.__wbg_rawintegrationparameters_free,jd=g.rawintegrationparameters_new,Zn=g.rawintegrationparameters_dt,Xd=g.rawintegrationparameters_allowedLinearError,qd=g.rawintegrationparameters_predictionDistance,Yd=g.rawintegrationparameters_maxVelocityIterations,Kd=g.rawintegrationparameters_maxVelocityFrictionIterations,Jd=g.rawintegrationparameters_maxStabilizationIterations,Zd=g.rawintegrationparameters_minIslandSize,Qd=g.rawintegrationparameters_maxCcdSubsteps,tl=g.rawintegrationparameters_set_dt,il=g.rawintegrationparameters_set_erp,$d=g.rawintegrationparameters_set_allowedLinearError,ep=g.rawintegrationparameters_set_predictionDistance,tp=g.rawintegrationparameters_set_maxVelocityIterations,ip=g.rawintegrationparameters_set_maxVelocityFrictionIterations,rp=g.rawintegrationparameters_set_maxStabilizationIterations,np=g.rawintegrationparameters_set_minIslandSize,ap=g.rawintegrationparameters_set_maxCcdSubsteps,sp=g.__wbg_rawislandmanager_free,op=g.rawislandmanager_new,lp=g.rawislandmanager_forEachActiveRigidBodyHandle,cp=g.__wbg_rawgenericjoint_free,hp=g.rawgenericjoint_spherical,up=g.rawgenericjoint_prismatic,dp=g.rawgenericjoint_fixed,pp=g.rawgenericjoint_revolute,mp=g.rawmultibodyjointset_jointType,fp=g.rawmultibodyjointset_jointFrameX1,gp=g.rawmultibodyjointset_jointFrameX2,_p=g.rawmultibodyjointset_jointAnchor1,vp=g.rawmultibodyjointset_jointAnchor2,wp=g.rawmultibodyjointset_jointContactsEnabled,yp=g.rawmultibodyjointset_jointSetContactsEnabled,xp=g.rawmultibodyjointset_jointLimitsEnabled,Mp=g.rawmultibodyjointset_jointLimitsMin,bp=g.rawmultibodyjointset_jointLimitsMax,Sp=g.__wbg_rawmultibodyjointset_free,Ep=g.rawmultibodyjointset_new,Tp=g.rawmultibodyjointset_createJoint,Ap=g.rawmultibodyjointset_remove,Rp=g.rawmultibodyjointset_contains,Cp=g.rawmultibodyjointset_forEachJointHandle,Pp=g.rawmultibodyjointset_forEachJointAttachedToRigidBody,Lp=g.rawrigidbodyset_rbTranslation,Ip=g.rawrigidbodyset_rbRotation,Dp=g.rawrigidbodyset_rbSleep,Up=g.rawrigidbodyset_rbIsSleeping,Np=g.rawrigidbodyset_rbIsMoving,Op=g.rawrigidbodyset_rbNextTranslation,Fp=g.rawrigidbodyset_rbNextRotation,zp=g.rawrigidbodyset_rbSetTranslation,Hp=g.rawrigidbodyset_rbSetRotation,Bp=g.rawrigidbodyset_rbSetLinvel,Gp=g.rawrigidbodyset_rbSetAngvel,kp=g.rawrigidbodyset_rbSetNextKinematicTranslation,Vp=g.rawrigidbodyset_rbSetNextKinematicRotation,Wp=g.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders,jp=g.rawrigidbodyset_rbSetAdditionalMass,Xp=g.rawrigidbodyset_rbSetAdditionalMassProperties,qp=g.rawrigidbodyset_rbLinvel,Yp=g.rawrigidbodyset_rbAngvel,Kp=g.rawrigidbodyset_rbLockTranslations,Jp=g.rawrigidbodyset_rbSetEnabledTranslations,Zp=g.rawrigidbodyset_rbLockRotations,Qp=g.rawrigidbodyset_rbSetEnabledRotations,$p=g.rawrigidbodyset_rbDominanceGroup,em=g.rawrigidbodyset_rbSetDominanceGroup,tm=g.rawrigidbodyset_rbEnableCcd,im=g.rawrigidbodyset_rbMass,rm=g.rawrigidbodyset_rbInvMass,nm=g.rawrigidbodyset_rbEffectiveInvMass,am=g.rawrigidbodyset_rbLocalCom,sm=g.rawrigidbodyset_rbWorldCom,om=g.rawrigidbodyset_rbInvPrincipalInertiaSqrt,lm=g.rawrigidbodyset_rbPrincipalInertiaLocalFrame,cm=g.rawrigidbodyset_rbPrincipalInertia,hm=g.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt,um=g.rawrigidbodyset_rbEffectiveAngularInertia,dm=g.rawrigidbodyset_rbWakeUp,pm=g.rawrigidbodyset_rbIsCcdEnabled,mm=g.rawrigidbodyset_rbNumColliders,fm=g.rawrigidbodyset_rbCollider,gm=g.rawrigidbodyset_rbBodyType,_m=g.rawrigidbodyset_rbSetBodyType,vm=g.rawrigidbodyset_rbIsFixed,wm=g.rawrigidbodyset_rbIsKinematic,ym=g.rawrigidbodyset_rbIsDynamic,xm=g.rawrigidbodyset_rbLinearDamping,Mm=g.rawrigidbodyset_rbAngularDamping,bm=g.rawrigidbodyset_rbSetLinearDamping,Sm=g.rawrigidbodyset_rbSetAngularDamping,Em=g.rawrigidbodyset_rbSetEnabled,Tm=g.rawrigidbodyset_rbIsEnabled,Am=g.rawrigidbodyset_rbGravityScale,Rm=g.rawrigidbodyset_rbSetGravityScale,Cm=g.rawrigidbodyset_rbResetForces,Pm=g.rawrigidbodyset_rbResetTorques,Lm=g.rawrigidbodyset_rbAddForce,Im=g.rawrigidbodyset_rbApplyImpulse,Dm=g.rawrigidbodyset_rbAddTorque,Um=g.rawrigidbodyset_rbApplyTorqueImpulse,Nm=g.rawrigidbodyset_rbAddForceAtPoint,Om=g.rawrigidbodyset_rbApplyImpulseAtPoint,Fm=g.rawrigidbodyset_rbUserData,zm=g.rawrigidbodyset_rbSetUserData,Hm=g.__wbg_rawrigidbodyset_free,Bm=g.rawrigidbodyset_new,Gm=g.rawrigidbodyset_createRigidBody,km=g.rawrigidbodyset_remove,Vm=g.rawrigidbodyset_len,Wm=g.rawrigidbodyset_contains,jm=g.rawrigidbodyset_forEachRigidBodyHandle,Xm=g.rawrigidbodyset_propagateModifiedBodyPositionsToColliders,qm=g.__wbg_rawbroadphase_free,Ym=g.rawbroadphase_new,Km=g.rawcolliderset_coTranslation,Jm=g.rawcolliderset_coRotation,Zm=g.rawcolliderset_coSetTranslation,Qm=g.rawcolliderset_coSetTranslationWrtParent,$m=g.rawcolliderset_coSetRotation,ef=g.rawcolliderset_coSetRotationWrtParent,tf=g.rawcolliderset_coIsSensor,rf=g.rawcolliderset_coShapeType,nf=g.rawcolliderset_coHalfspaceNormal,af=g.rawcolliderset_coHalfExtents,sf=g.rawcolliderset_coSetHalfExtents,of=g.rawcolliderset_coRadius,lf=g.rawcolliderset_coSetRadius,cf=g.rawcolliderset_coHalfHeight,hf=g.rawcolliderset_coSetHalfHeight,uf=g.rawcolliderset_coRoundRadius,df=g.rawcolliderset_coSetRoundRadius,pf=g.rawcolliderset_coVertices,mf=g.rawcolliderset_coIndices,ff=g.rawcolliderset_coHeightfieldHeights,gf=g.rawcolliderset_coHeightfieldScale,_f=g.rawcolliderset_coHeightfieldNRows,vf=g.rawcolliderset_coHeightfieldNCols,wf=g.rawcolliderset_coParent,yf=g.rawcolliderset_coSetEnabled,xf=g.rawcolliderset_coIsEnabled,Mf=g.rawcolliderset_coFriction,bf=g.rawcolliderset_coRestitution,Sf=g.rawcolliderset_coDensity,Ef=g.rawcolliderset_coMass,Tf=g.rawcolliderset_coVolume,Af=g.rawcolliderset_coCollisionGroups,Rf=g.rawcolliderset_coSolverGroups,Cf=g.rawcolliderset_coActiveHooks,Pf=g.rawcolliderset_coActiveCollisionTypes,Lf=g.rawcolliderset_coActiveEvents,If=g.rawcolliderset_coContactForceEventThreshold,Df=g.rawcolliderset_coContainsPoint,Uf=g.rawcolliderset_coCastShape,Nf=g.rawcolliderset_coCastCollider,Of=g.rawcolliderset_coIntersectsShape,Ff=g.rawcolliderset_coContactShape,zf=g.rawcolliderset_coContactCollider,Hf=g.rawcolliderset_coProjectPoint,Bf=g.rawcolliderset_coIntersectsRay,Gf=g.rawcolliderset_coCastRay,kf=g.rawcolliderset_coCastRayAndGetNormal,Vf=g.rawcolliderset_coSetSensor,Wf=g.rawcolliderset_coSetRestitution,jf=g.rawcolliderset_coSetFriction,Xf=g.rawcolliderset_coFrictionCombineRule,qf=g.rawcolliderset_coSetFrictionCombineRule,Yf=g.rawcolliderset_coRestitutionCombineRule,Kf=g.rawcolliderset_coSetRestitutionCombineRule,Jf=g.rawcolliderset_coSetCollisionGroups,Zf=g.rawcolliderset_coSetSolverGroups,Qf=g.rawcolliderset_coSetActiveHooks,$f=g.rawcolliderset_coSetActiveEvents,eg=g.rawcolliderset_coSetActiveCollisionTypes,tg=g.rawcolliderset_coSetShape,ig=g.rawcolliderset_coSetContactForceEventThreshold,rg=g.rawcolliderset_coSetDensity,ng=g.rawcolliderset_coSetMass,ag=g.rawcolliderset_coSetMassProperties,sg=g.__wbg_rawcolliderset_free,og=g.rawcolliderset_new,lg=g.rawcolliderset_len,rl=g.rawcolliderset_contains,cg=g.rawcolliderset_createCollider,hg=g.rawcolliderset_remove,ug=g.rawcolliderset_forEachColliderHandle,dg=g.__wbg_rawshapecontact_free,pg=g.rawshapecontact_distance,mg=g.__wbg_rawnarrowphase_free,fg=g.rawnarrowphase_new,gg=g.rawnarrowphase_contacts_with,_g=g.rawnarrowphase_contact_pair,vg=g.rawnarrowphase_intersections_with,wg=g.rawnarrowphase_intersection_pair,yg=g.__wbg_rawcontactmanifold_free,xg=g.rawcontactpair_collider1,Mg=g.rawcontactpair_collider2,bg=g.rawcontactpair_numContactManifolds,Sg=g.rawcontactpair_contactManifold,Eg=g.rawcontactmanifold_normal,Tg=g.rawcontactmanifold_local_n1,Ag=g.rawcontactmanifold_local_n2,Rg=g.rawcontactmanifold_subshape1,Cg=g.rawcontactmanifold_subshape2,Pg=g.rawcontactmanifold_num_contacts,Lg=g.rawcontactmanifold_contact_local_p1,Ig=g.rawcontactmanifold_contact_local_p2,Dg=g.rawcontactmanifold_contact_dist,Ug=g.rawcontactmanifold_contact_fid1,Ng=g.rawcontactmanifold_contact_fid2,Og=g.rawcontactmanifold_contact_impulse,Fg=g.rawcontactmanifold_contact_tangent_impulse_x,zg=g.rawcontactmanifold_contact_tangent_impulse_y,Hg=g.rawcontactmanifold_num_solver_contacts,Bg=g.rawcontactmanifold_solver_contact_point,Gg=g.rawcontactmanifold_solver_contact_dist,kg=g.rawcontactmanifold_solver_contact_friction,Vg=g.rawcontactmanifold_solver_contact_restitution,Wg=g.rawcontactmanifold_solver_contact_tangent_velocity,jg=g.__wbg_rawpointprojection_free,Xg=g.__wbg_rawpointcolliderprojection_free,qg=g.rawpointcolliderprojection_colliderHandle,Yg=g.rawpointcolliderprojection_featureType,Kg=g.rawpointcolliderprojection_featureId,Jg=g.__wbg_rawrayintersection_free,Zg=g.rawrayintersection_featureType,Qg=g.rawrayintersection_featureId,$g=g.rawraycolliderintersection_normal,e_=g.rawraycolliderintersection_toi,t_=g.rawraycolliderintersection_featureType,i_=g.rawraycolliderintersection_featureId,r_=g.__wbg_rawraycollidertoi_free,n_=g.__wbg_rawshape_free,a_=g.rawshape_cuboid,s_=g.rawshape_roundCuboid,o_=g.rawshape_ball,l_=g.rawshape_halfspace,c_=g.rawshape_capsule,h_=g.rawshape_cylinder,u_=g.rawshape_roundCylinder,d_=g.rawshape_cone,p_=g.rawshape_roundCone,m_=g.rawshape_polyline,f_=g.rawshape_trimesh,g_=g.rawshape_heightfield,__=g.rawshape_segment,v_=g.rawshape_triangle,w_=g.rawshape_roundTriangle,y_=g.rawshape_convexHull,x_=g.rawshape_roundConvexHull,M_=g.rawshape_convexMesh,b_=g.rawshape_roundConvexMesh,S_=g.rawshape_castShape,E_=g.rawshape_intersectsShape,T_=g.rawshape_contactShape,A_=g.rawshape_containsPoint,R_=g.rawshape_projectPoint,C_=g.rawshape_intersectsRay,P_=g.rawshape_castRay,L_=g.rawshape_castRayAndGetNormal,I_=g.__wbg_rawshapetoi_free,D_=g.rawshapetoi_witness1,U_=g.rawshapetoi_normal1,N_=g.rawshapetoi_normal2,O_=g.__wbg_rawshapecollidertoi_free,nl=g.rawshapecollidertoi_witness2,F_=g.rawshapecollidertoi_normal2,z_=g.rawrotation_new,H_=g.rawrotation_identity,al=g.rawrotation_y,B_=g.rawrotation_w,G_=g.rawvector_zero,k_=g.rawvector_new,V_=g.rawvector_set_y,W_=g.rawvector_xyz,j_=g.rawvector_yxz,X_=g.rawvector_zxy,q_=g.rawvector_xzy,Y_=g.rawvector_yzx,K_=g.rawvector_zyx,J_=g.rawsdpmatrix3_elements,Z_=g.__wbg_rawdebugrenderpipeline_free,Q_=g.rawdebugrenderpipeline_new,$_=g.rawdebugrenderpipeline_vertices,e1=g.rawdebugrenderpipeline_colors,t1=g.rawdebugrenderpipeline_render,i1=g.__wbg_raweventqueue_free,r1=g.__wbg_rawcontactforceevent_free,n1=g.rawcontactforceevent_collider2,sl=g.rawcontactforceevent_total_force,a1=g.rawcontactforceevent_total_force_magnitude,s1=g.rawcontactforceevent_max_force_direction,o1=g.rawcontactforceevent_max_force_magnitude,l1=g.raweventqueue_new,c1=g.raweventqueue_drainCollisionEvents,h1=g.raweventqueue_drainContactForceEvents,u1=g.raweventqueue_clear,d1=g.__wbg_rawphysicspipeline_free,p1=g.rawphysicspipeline_new,m1=g.rawphysicspipeline_step,f1=g.rawphysicspipeline_stepWithEvents,g1=g.__wbg_rawquerypipeline_free,_1=g.rawquerypipeline_new,v1=g.rawquerypipeline_update,w1=g.rawquerypipeline_castRay,y1=g.rawquerypipeline_castRayAndGetNormal,x1=g.rawquerypipeline_intersectionsWithRay,M1=g.rawquerypipeline_intersectionWithShape,b1=g.rawquerypipeline_projectPoint,S1=g.rawquerypipeline_projectPointAndGetFeature,E1=g.rawquerypipeline_intersectionsWithPoint,T1=g.rawquerypipeline_castShape,A1=g.rawquerypipeline_intersectionsWithShape,R1=g.rawquerypipeline_collidersWithAabbIntersectingAabb,C1=g.__wbg_rawdeserializedworld_free,P1=g.rawdeserializedworld_takeGravity,L1=g.rawdeserializedworld_takeIntegrationParameters,I1=g.rawdeserializedworld_takeIslandManager,D1=g.rawdeserializedworld_takeBroadPhase,U1=g.rawdeserializedworld_takeNarrowPhase,N1=g.rawdeserializedworld_takeBodies,O1=g.rawdeserializedworld_takeColliders,F1=g.rawdeserializedworld_takeImpulseJoints,z1=g.rawdeserializedworld_takeMultibodyJoints,H1=g.rawserializationpipeline_serializeAll,B1=g.rawserializationpipeline_deserializeAll,G1=g.__wbg_rawcontactpair_free,k1=g.__wbg_rawraycolliderintersection_free,V1=g.__wbg_rawrotation_free,W1=g.__wbg_rawvector_free,j1=g.__wbg_rawsdpmatrix3_free;g.rawvector_set_x,g.rawvector_set_z,g.rawpointprojection_isInside,g.rawpointcolliderprojection_isInside,g.rawcolliderset_isHandleValid,g.rawshapecontact_point1,g.rawshapecontact_point2,g.rawshapecontact_normal2,g.rawpointprojection_point,g.rawpointcolliderprojection_point,g.rawrayintersection_normal,g.rawshapecollidertoi_witness1,g.rawshapecontact_normal1,g.rawshapecollidertoi_normal1,g.rawshapetoi_witness2;const X1=g.rawserializationpipeline_new;g.rawintegrationparameters_erp,g.rawrayintersection_toi,g.rawraycollidertoi_toi,g.rawshapetoi_toi,g.rawshapecollidertoi_toi,g.rawrotation_x,g.rawrotation_z,g.rawvector_x,g.rawvector_y,g.rawvector_z,g.rawraycolliderintersection_colliderHandle,g.rawraycollidertoi_colliderHandle,g.rawshapecollidertoi_colliderHandle,g.rawcontactforceevent_collider1;const q1=g.__wbg_rawserializationpipeline_free,$e=g.__wbindgen_add_to_stack_pointer,Qn=g.__wbindgen_free,ci=g.__wbindgen_malloc,Y1=g.__wbindgen_exn_store;let ol=class{constructor(r,e,t){this.x=r,this.y=e,this.z=t}};class U{static new(e,t,i){return new ol(e,t,i)}static intoRaw(e){return new F(e.x,e.y,e.z)}static zeros(){return U.new(0,0,0)}static fromRaw(e){if(!e)return null;let t=U.new(e.x,e.y,e.z);return e.free(),t}static copy(e,t){e.x=t.x,e.y=t.y,e.z=t.z}}let ds=class{constructor(r,e,t,i){this.x=r,this.y=e,this.z=t,this.w=i}};class We{static identity(){return new ds(0,0,0,1)}static fromRaw(e){if(!e)return null;let t=new ds(e.x,e.y,e.z,e.w);return e.free(),t}static intoRaw(e){return new Ye(e.x,e.y,e.z,e.w)}static copy(e,t){e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w}}class ll{constructor(e){this.elements=e}get m11(){return this.elements[0]}get m12(){return this.elements[1]}get m21(){return this.m12}get m13(){return this.elements[2]}get m31(){return this.m13}get m22(){return this.elements[3]}get m23(){return this.elements[4]}get m32(){return this.m23}get m33(){return this.elements[5]}}class ps{static fromRaw(e){const t=new ll(e.elements());return e.free(),t}}var hi;(function(r){r[r.Dynamic=0]="Dynamic",r[r.Fixed=1]="Fixed",r[r.KinematicPositionBased=2]="KinematicPositionBased",r[r.KinematicVelocityBased=3]="KinematicVelocityBased"})(hi||(hi={}));class ms{constructor(e,t,i){this.rawSet=e,this.colliderSet=t,this.handle=i}finalizeDeserialization(e){this.colliderSet=e}isValid(){return this.rawSet.contains(this.handle)}lockTranslations(e,t){return this.rawSet.rbLockTranslations(this.handle,e,t)}lockRotations(e,t){return this.rawSet.rbLockRotations(this.handle,e,t)}setEnabledTranslations(e,t,i,n){return this.rawSet.rbSetEnabledTranslations(this.handle,e,t,i,n)}restrictTranslations(e,t,i,n){this.setEnabledTranslations(e,t,i,n)}setEnabledRotations(e,t,i,n){return this.rawSet.rbSetEnabledRotations(this.handle,e,t,i,n)}restrictRotations(e,t,i,n){this.setEnabledRotations(e,t,i,n)}dominanceGroup(){return this.rawSet.rbDominanceGroup(this.handle)}setDominanceGroup(e){this.rawSet.rbSetDominanceGroup(this.handle,e)}enableCcd(e){this.rawSet.rbEnableCcd(this.handle,e)}translation(){let e=this.rawSet.rbTranslation(this.handle);return U.fromRaw(e)}rotation(){let e=this.rawSet.rbRotation(this.handle);return We.fromRaw(e)}nextTranslation(){let e=this.rawSet.rbNextTranslation(this.handle);return U.fromRaw(e)}nextRotation(){let e=this.rawSet.rbNextRotation(this.handle);return We.fromRaw(e)}setTranslation(e,t){this.rawSet.rbSetTranslation(this.handle,e.x,e.y,e.z,t)}setLinvel(e,t){let i=U.intoRaw(e);this.rawSet.rbSetLinvel(this.handle,i,t),i.free()}gravityScale(){return this.rawSet.rbGravityScale(this.handle)}setGravityScale(e,t){this.rawSet.rbSetGravityScale(this.handle,e,t)}setRotation(e,t){this.rawSet.rbSetRotation(this.handle,e.x,e.y,e.z,e.w,t)}setAngvel(e,t){let i=U.intoRaw(e);this.rawSet.rbSetAngvel(this.handle,i,t),i.free()}setNextKinematicTranslation(e){this.rawSet.rbSetNextKinematicTranslation(this.handle,e.x,e.y,e.z)}setNextKinematicRotation(e){this.rawSet.rbSetNextKinematicRotation(this.handle,e.x,e.y,e.z,e.w)}linvel(){return U.fromRaw(this.rawSet.rbLinvel(this.handle))}angvel(){return U.fromRaw(this.rawSet.rbAngvel(this.handle))}mass(){return this.rawSet.rbMass(this.handle)}effectiveInvMass(){return U.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle))}invMass(){return this.rawSet.rbInvMass(this.handle)}localCom(){return U.fromRaw(this.rawSet.rbLocalCom(this.handle))}worldCom(){return U.fromRaw(this.rawSet.rbWorldCom(this.handle))}invPrincipalInertiaSqrt(){return U.fromRaw(this.rawSet.rbInvPrincipalInertiaSqrt(this.handle))}principalInertia(){return U.fromRaw(this.rawSet.rbPrincipalInertia(this.handle))}principalInertiaLocalFrame(){return We.fromRaw(this.rawSet.rbPrincipalInertiaLocalFrame(this.handle))}effectiveWorldInvInertiaSqrt(){return ps.fromRaw(this.rawSet.rbEffectiveWorldInvInertiaSqrt(this.handle))}effectiveAngularInertia(){return ps.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle))}sleep(){this.rawSet.rbSleep(this.handle)}wakeUp(){this.rawSet.rbWakeUp(this.handle)}isCcdEnabled(){return this.rawSet.rbIsCcdEnabled(this.handle)}numColliders(){return this.rawSet.rbNumColliders(this.handle)}collider(e){return this.colliderSet.get(this.rawSet.rbCollider(this.handle,e))}setEnabled(e){this.rawSet.rbSetEnabled(this.handle,e)}isEnabled(){return this.rawSet.rbIsEnabled(this.handle)}bodyType(){return this.rawSet.rbBodyType(this.handle)}setBodyType(e,t){return this.rawSet.rbSetBodyType(this.handle,e,t)}isSleeping(){return this.rawSet.rbIsSleeping(this.handle)}isMoving(){return this.rawSet.rbIsMoving(this.handle)}isFixed(){return this.rawSet.rbIsFixed(this.handle)}isKinematic(){return this.rawSet.rbIsKinematic(this.handle)}isDynamic(){return this.rawSet.rbIsDynamic(this.handle)}linearDamping(){return this.rawSet.rbLinearDamping(this.handle)}angularDamping(){return this.rawSet.rbAngularDamping(this.handle)}setLinearDamping(e){this.rawSet.rbSetLinearDamping(this.handle,e)}recomputeMassPropertiesFromColliders(){this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle,this.colliderSet.raw)}setAdditionalMass(e,t){this.rawSet.rbSetAdditionalMass(this.handle,e,t)}setAdditionalMassProperties(e,t,i,n,a){let o=U.intoRaw(t),s=U.intoRaw(i),l=We.intoRaw(n);this.rawSet.rbSetAdditionalMassProperties(this.handle,e,o,s,l,a),o.free(),s.free(),l.free()}setAngularDamping(e){this.rawSet.rbSetAngularDamping(this.handle,e)}resetForces(e){this.rawSet.rbResetForces(this.handle,e)}resetTorques(e){this.rawSet.rbResetTorques(this.handle,e)}addForce(e,t){const i=U.intoRaw(e);this.rawSet.rbAddForce(this.handle,i,t),i.free()}applyImpulse(e,t){const i=U.intoRaw(e);this.rawSet.rbApplyImpulse(this.handle,i,t),i.free()}addTorque(e,t){const i=U.intoRaw(e);this.rawSet.rbAddTorque(this.handle,i,t),i.free()}applyTorqueImpulse(e,t){const i=U.intoRaw(e);this.rawSet.rbApplyTorqueImpulse(this.handle,i,t),i.free()}addForceAtPoint(e,t,i){const n=U.intoRaw(e),a=U.intoRaw(t);this.rawSet.rbAddForceAtPoint(this.handle,n,a,i),n.free(),a.free()}applyImpulseAtPoint(e,t,i){const n=U.intoRaw(e),a=U.intoRaw(t);this.rawSet.rbApplyImpulseAtPoint(this.handle,n,a,i),n.free(),a.free()}}class yi{constructor(e){this.enabled=!0,this.status=e,this.translation=U.zeros(),this.rotation=We.identity(),this.gravityScale=1,this.linvel=U.zeros(),this.mass=0,this.massOnly=!1,this.centerOfMass=U.zeros(),this.translationsEnabledX=!0,this.translationsEnabledY=!0,this.angvel=U.zeros(),this.principalAngularInertia=U.zeros(),this.angularInertiaLocalFrame=We.identity(),this.translationsEnabledZ=!0,this.rotationsEnabledX=!0,this.rotationsEnabledY=!0,this.rotationsEnabledZ=!0,this.linearDamping=0,this.angularDamping=0,this.canSleep=!0,this.sleeping=!1,this.ccdEnabled=!1,this.dominanceGroup=0}static dynamic(){return new yi(hi.Dynamic)}static kinematicPositionBased(){return new yi(hi.KinematicPositionBased)}static kinematicVelocityBased(){return new yi(hi.KinematicVelocityBased)}static fixed(){return new yi(hi.Fixed)}static newDynamic(){return new yi(hi.Dynamic)}static newKinematicPositionBased(){return new yi(hi.KinematicPositionBased)}static newKinematicVelocityBased(){return new yi(hi.KinematicVelocityBased)}static newStatic(){return new yi(hi.Fixed)}setDominanceGroup(e){return this.dominanceGroup=e,this}setEnabled(e){return this.enabled=e,this}setTranslation(e,t,i){if(typeof e!="number"||typeof t!="number"||typeof i!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:e,y:t,z:i},this}setRotation(e){return We.copy(this.rotation,e),this}setGravityScale(e){return this.gravityScale=e,this}setAdditionalMass(e){return this.mass=e,this.massOnly=!0,this}setLinvel(e,t,i){if(typeof e!="number"||typeof t!="number"||typeof i!="number")throw TypeError("The linvel components must be numbers.");return this.linvel={x:e,y:t,z:i},this}setAngvel(e){return U.copy(this.angvel,e),this}setAdditionalMassProperties(e,t,i,n){return this.mass=e,U.copy(this.centerOfMass,t),U.copy(this.principalAngularInertia,i),We.copy(this.angularInertiaLocalFrame,n),this.massOnly=!1,this}enabledTranslations(e,t,i){return this.translationsEnabledX=e,this.translationsEnabledY=t,this.translationsEnabledZ=i,this}restrictTranslations(e,t,i){return this.enabledTranslations(e,t,i)}lockTranslations(){return this.enabledTranslations(!1,!1,!1)}enabledRotations(e,t,i){return this.rotationsEnabledX=e,this.rotationsEnabledY=t,this.rotationsEnabledZ=i,this}restrictRotations(e,t,i){return this.enabledRotations(e,t,i)}lockRotations(){return this.restrictRotations(!1,!1,!1)}setLinearDamping(e){return this.linearDamping=e,this}setAngularDamping(e){return this.angularDamping=e,this}setCanSleep(e){return this.canSleep=e,this}setSleeping(e){return this.sleeping=e,this}setCcdEnabled(e){return this.ccdEnabled=e,this}setUserData(e){return this.userData=e,this}}class $n{constructor(){this.fconv=new Float64Array(1),this.uconv=new Uint32Array(this.fconv.buffer),this.data=new Array,this.size=0}set(e,t){let i=this.index(e);for(;this.data.length<=i;)this.data.push(null);this.data[i]==null&&(this.size+=1),this.data[i]=t}len(){return this.size}delete(e){let t=this.index(e);t<this.data.length&&(this.data[t]!=null&&(this.size-=1),this.data[t]=null)}clear(){this.data=new Array}get(e){let t=this.index(e);return t<this.data.length?this.data[t]:null}forEach(e){for(const t of this.data)t!=null&&e(t)}getAll(){return this.data.filter(e=>e!=null)}index(e){return this.fconv[0]=e,this.uconv[0]}}class cl{constructor(e){this.raw=e||new ft,this.map=new $n,e&&e.forEachRigidBodyHandle(t=>{this.map.set(t,new ms(e,null,t))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}finalizeDeserialization(e){this.map.forEach(t=>t.finalizeDeserialization(e))}createRigidBody(e,t){let i=U.intoRaw(t.translation),n=We.intoRaw(t.rotation),a=U.intoRaw(t.linvel),o=U.intoRaw(t.centerOfMass),s=U.intoRaw(t.angvel),l=U.intoRaw(t.principalAngularInertia),c=We.intoRaw(t.angularInertiaLocalFrame),h=this.raw.createRigidBody(t.enabled,i,n,t.gravityScale,t.mass,t.massOnly,o,a,s,l,c,t.translationsEnabledX,t.translationsEnabledY,t.translationsEnabledZ,t.rotationsEnabledX,t.rotationsEnabledY,t.rotationsEnabledZ,t.linearDamping,t.angularDamping,t.status,t.canSleep,t.sleeping,t.ccdEnabled,t.dominanceGroup);i.free(),n.free(),a.free(),o.free(),s.free(),l.free(),c.free();const u=new ms(this.raw,e,h);return u.userData=t.userData,this.map.set(h,u),u}remove(e,t,i,n,a){for(let o=0;o<this.raw.rbNumColliders(e);o+=1)i.unmap(this.raw.rbCollider(e,o));n.forEachJointHandleAttachedToRigidBody(e,o=>n.unmap(o)),a.forEachJointHandleAttachedToRigidBody(e,o=>a.unmap(o)),this.raw.remove(e,t.raw,i.raw,n.raw,a.raw),this.map.delete(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}get(e){return this.map.get(e)}forEach(e){this.map.forEach(e)}forEachActiveRigidBody(e,t){e.forEachActiveRigidBodyHandle(i=>{t(this.get(i))})}getAll(){return this.map.getAll()}}class hl{constructor(e){this.raw=e||new zi}free(){this.raw&&this.raw.free(),this.raw=void 0}get dt(){return this.raw.dt}get erp(){return this.raw.erp}get allowedLinearError(){return this.raw.allowedLinearError}get predictionDistance(){return this.raw.predictionDistance}get maxVelocityIterations(){return this.raw.maxVelocityIterations}get maxVelocityFrictionIterations(){return this.raw.maxVelocityFrictionIterations}get maxStabilizationIterations(){return this.raw.maxStabilizationIterations}get minIslandSize(){return this.raw.minIslandSize}get maxCcdSubsteps(){return this.raw.maxCcdSubsteps}set dt(e){this.raw.dt=e}set erp(e){this.raw.erp=e}set allowedLinearError(e){this.raw.allowedLinearError=e}set predictionDistance(e){this.raw.predictionDistance=e}set maxVelocityIterations(e){this.raw.maxVelocityIterations=e}set maxVelocityFrictionIterations(e){this.raw.maxVelocityFrictionIterations=e}set maxStabilizationIterations(e){this.raw.maxStabilizationIterations=e}set minIslandSize(e){this.raw.minIslandSize=e}set maxCcdSubsteps(e){this.raw.maxCcdSubsteps=e}}var bt;(function(r){r[r.Revolute=0]="Revolute",r[r.Fixed=1]="Fixed",r[r.Prismatic=2]="Prismatic",r[r.Spherical=3]="Spherical"})(bt||(bt={}));var fs;(function(r){r[r.AccelerationBased=0]="AccelerationBased",r[r.ForceBased=1]="ForceBased"})(fs||(fs={}));class Hi{constructor(e,t,i){this.rawSet=e,this.bodySet=t,this.handle=i}static newTyped(e,t,i){switch(e.jointType(i)){case bt.Revolute:return new pl(e,t,i);case bt.Prismatic:return new dl(e,t,i);case bt.Fixed:return new ul(e,t,i);case bt.Spherical:return new ml(e,t,i);default:return new Hi(e,t,i)}}finalizeDeserialization(e){this.bodySet=e}isValid(){return this.rawSet.contains(this.handle)}body1(){return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle))}body2(){return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle))}type(){return this.rawSet.jointType(this.handle)}frameX1(){return We.fromRaw(this.rawSet.jointFrameX1(this.handle))}frameX2(){return We.fromRaw(this.rawSet.jointFrameX2(this.handle))}anchor1(){return U.fromRaw(this.rawSet.jointAnchor1(this.handle))}anchor2(){return U.fromRaw(this.rawSet.jointAnchor2(this.handle))}setAnchor1(e){const t=U.intoRaw(e);this.rawSet.jointSetAnchor1(this.handle,t),t.free()}setAnchor2(e){const t=U.intoRaw(e);this.rawSet.jointSetAnchor2(this.handle,t),t.free()}setContactsEnabled(e){this.rawSet.jointSetContactsEnabled(this.handle,e)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class gs extends Hi{limitsEnabled(){return this.rawSet.jointLimitsEnabled(this.handle,this.rawAxis())}limitsMin(){return this.rawSet.jointLimitsMin(this.handle,this.rawAxis())}limitsMax(){return this.rawSet.jointLimitsMax(this.handle,this.rawAxis())}setLimits(e,t){this.rawSet.jointSetLimits(this.handle,this.rawAxis(),e,t)}configureMotorModel(e){this.rawSet.jointConfigureMotorModel(this.handle,this.rawAxis(),e)}configureMotorVelocity(e,t){this.rawSet.jointConfigureMotorVelocity(this.handle,this.rawAxis(),e,t)}configureMotorPosition(e,t,i){this.rawSet.jointConfigureMotorPosition(this.handle,this.rawAxis(),e,t,i)}configureMotor(e,t,i,n){this.rawSet.jointConfigureMotor(this.handle,this.rawAxis(),e,t,i,n)}}class ul extends Hi{}class dl extends gs{rawAxis(){return Fn.X}}class pl extends gs{rawAxis(){return Fn.AngX}}class ml extends Hi{}class xr{constructor(){}static fixed(e,t,i,n){let a=new xr;return a.anchor1=e,a.anchor2=i,a.frame1=t,a.frame2=n,a.jointType=bt.Fixed,a}static spherical(e,t){let i=new xr;return i.anchor1=e,i.anchor2=t,i.jointType=bt.Spherical,i}static prismatic(e,t,i){let n=new xr;return n.anchor1=e,n.anchor2=t,n.axis=i,n.jointType=bt.Prismatic,n}static revolute(e,t,i){let n=new xr;return n.anchor1=e,n.anchor2=t,n.axis=i,n.jointType=bt.Revolute,n}intoRaw(){let e=U.intoRaw(this.anchor1),t=U.intoRaw(this.anchor2),i,n,a=!1,o=0,s=0;switch(this.jointType){case bt.Fixed:let l=We.intoRaw(this.frame1),c=We.intoRaw(this.frame2);n=$t.fixed(e,l,t,c),l.free(),c.free();break;case bt.Prismatic:i=U.intoRaw(this.axis),this.limitsEnabled&&(a=!0,o=this.limits[0],s=this.limits[1]),n=$t.prismatic(e,t,i,a,o,s),i.free();break;case bt.Spherical:n=$t.spherical(e,t);break;case bt.Revolute:i=U.intoRaw(this.axis),n=$t.revolute(e,t,i),i.free();break}return e.free(),t.free(),n}}class fl{constructor(e){this.raw=e||new _i,this.map=new $n,e&&e.forEachJointHandle(t=>{this.map.set(t,Hi.newTyped(e,null,t))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}finalizeDeserialization(e){this.map.forEach(t=>t.finalizeDeserialization(e))}createJoint(e,t,i,n,a){const o=t.intoRaw(),s=this.raw.createJoint(o,i,n,a);o.free();let l=Hi.newTyped(this.raw,e,s);return this.map.set(s,l),l}remove(e,t){this.raw.remove(e,t),this.unmap(e)}forEachJointHandleAttachedToRigidBody(e,t){this.raw.forEachJointAttachedToRigidBody(e,t)}unmap(e){this.map.delete(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}get(e){return this.map.get(e)}forEach(e){this.map.forEach(e)}getAll(){return this.map.getAll()}}class Bi{constructor(e,t){this.rawSet=e,this.handle=t}static newTyped(e,t){switch(e.jointType(t)){case bt.Revolute:return new vl(e,t);case bt.Prismatic:return new _l(e,t);case bt.Fixed:return new gl(e,t);case bt.Spherical:return new wl(e,t);default:return new Bi(e,t)}}isValid(){return this.rawSet.contains(this.handle)}setContactsEnabled(e){this.rawSet.jointSetContactsEnabled(this.handle,e)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class _s extends Bi{}class gl extends Bi{}class _l extends _s{rawAxis(){return Fn.X}}class vl extends _s{rawAxis(){return Fn.AngX}}class wl extends Bi{}class yl{constructor(e){this.raw=e||new wi,this.map=new $n,e&&e.forEachJointHandle(t=>{this.map.set(t,Bi.newTyped(this.raw,t))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}createJoint(e,t,i,n){const a=e.intoRaw(),o=this.raw.createJoint(a,t,i,n);a.free();let s=Bi.newTyped(this.raw,o);return this.map.set(o,s),s}remove(e,t){this.raw.remove(e,t),this.map.delete(e)}unmap(e){this.map.delete(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}get(e){return this.map.get(e)}forEach(e){this.map.forEach(e)}forEachJointHandleAttachedToRigidBody(e,t){this.raw.forEachJointAttachedToRigidBody(e,t)}getAll(){return this.map.getAll()}}var cn;(function(r){r[r.Average=0]="Average",r[r.Min=1]="Min",r[r.Multiply=2]="Multiply",r[r.Max=3]="Max"})(cn||(cn={}));class xl{constructor(e){this.raw=e||new wr}free(){this.raw&&this.raw.free(),this.raw=void 0}}class Ml{constructor(e){this.raw=e||new vi}free(){this.raw&&this.raw.free(),this.raw=void 0}forEachActiveRigidBodyHandle(e){this.raw.forEachActiveRigidBodyHandle(e)}}class bl{constructor(e){this.raw=e||new Fi}free(){this.raw&&this.raw.free(),this.raw=void 0}}class Sl{constructor(e){this.raw=e||new Ti,this.tempManifold=new El(null)}free(){this.raw&&this.raw.free(),this.raw=void 0}contactsWith(e,t){this.raw.contacts_with(e,t)}intersectionsWith(e,t){this.raw.intersections_with(e,t)}contactPair(e,t,i){const n=this.raw.contact_pair(e,t);if(n){const a=n.collider1()!=e;let o;for(o=0;o<n.numContactManifolds();++o)this.tempManifold.raw=n.contactManifold(o),this.tempManifold.raw&&i(this.tempManifold,a),this.tempManifold.free();n.free()}}intersectionPair(e,t){return this.raw.intersection_pair(e,t)}}class El{constructor(e){this.raw=e}free(){this.raw&&this.raw.free(),this.raw=void 0}normal(){return U.fromRaw(this.raw.normal())}localNormal1(){return U.fromRaw(this.raw.local_n1())}localNormal2(){return U.fromRaw(this.raw.local_n2())}subshape1(){return this.raw.subshape1()}subshape2(){return this.raw.subshape2()}numContacts(){return this.raw.num_contacts()}localContactPoint1(e){return U.fromRaw(this.raw.contact_local_p1(e))}localContactPoint2(e){return U.fromRaw(this.raw.contact_local_p2(e))}contactDist(e){return this.raw.contact_dist(e)}contactFid1(e){return this.raw.contact_fid1(e)}contactFid2(e){return this.raw.contact_fid2(e)}contactImpulse(e){return this.raw.contact_impulse(e)}contactTangentImpulseX(e){return this.raw.contact_tangent_impulse_x(e)}contactTangentImpulseY(e){return this.raw.contact_tangent_impulse_y(e)}numSolverContacts(){return this.raw.num_solver_contacts()}solverContactPoint(e){return U.fromRaw(this.raw.solver_contact_point(e))}solverContactDist(e){return this.raw.solver_contact_dist(e)}solverContactFriction(e){return this.raw.solver_contact_friction(e)}solverContactRestitution(e){return this.raw.solver_contact_restitution(e)}solverContactTangentVelocity(e){return U.fromRaw(this.raw.solver_contact_tangent_velocity(e))}}class Mr{constructor(e,t,i,n,a){this.distance=e,this.point1=t,this.point2=i,this.normal1=n,this.normal2=a}static fromRaw(e){if(!e)return null;const t=new Mr(e.distance(),U.fromRaw(e.point1()),U.fromRaw(e.point2()),U.fromRaw(e.normal1()),U.fromRaw(e.normal2()));return e.free(),t}}var br;(function(r){r[r.Vertex=0]="Vertex",r[r.Edge=1]="Edge",r[r.Face=2]="Face",r[r.Unknown=3]="Unknown"})(br||(br={}));class hn{constructor(e,t){this.point=e,this.isInside=t}static fromRaw(e){if(!e)return null;const t=new hn(U.fromRaw(e.point()),e.isInside());return e.free(),t}}class un{constructor(e,t,i,n,a){this.featureType=br.Unknown,this.featureId=void 0,this.collider=e,this.point=t,this.isInside=i,a!==void 0&&(this.featureId=a),n!==void 0&&(this.featureType=n)}static fromRaw(e,t){if(!t)return null;const i=new un(e.get(t.colliderHandle()),U.fromRaw(t.point()),t.isInside(),t.featureType(),t.featureId());return t.free(),i}}let K1=class{constructor(r,e){this.origin=r,this.dir=e}pointAt(r){return{x:this.origin.x+this.dir.x*r,y:this.origin.y+this.dir.y*r,z:this.origin.z+this.dir.z*r}}};class dn{constructor(e,t,i,n){this.featureType=br.Unknown,this.featureId=void 0,this.toi=e,this.normal=t,n!==void 0&&(this.featureId=n),i!==void 0&&(this.featureType=i)}static fromRaw(e){if(!e)return null;const t=new dn(e.toi(),U.fromRaw(e.normal()),e.featureType(),e.featureId());return e.free(),t}}class pn{constructor(e,t,i,n,a){this.featureType=br.Unknown,this.featureId=void 0,this.collider=e,this.toi=t,this.normal=i,a!==void 0&&(this.featureId=a),n!==void 0&&(this.featureType=n)}static fromRaw(e,t){if(!t)return null;const i=new pn(e.get(t.colliderHandle()),t.toi(),U.fromRaw(t.normal()),t.featureType(),t.featureId());return t.free(),i}}class ea{constructor(e,t){this.collider=e,this.toi=t}static fromRaw(e,t){if(!t)return null;const i=new ea(e.get(t.colliderHandle()),t.toi());return t.free(),i}}class Sr{constructor(e,t,i,n,a){this.toi=e,this.witness1=t,this.witness2=i,this.normal1=n,this.normal2=a}static fromRaw(e,t){if(!t)return null;const i=new Sr(t.toi(),U.fromRaw(t.witness1()),U.fromRaw(t.witness2()),U.fromRaw(t.normal1()),U.fromRaw(t.normal2()));return t.free(),i}}class mn extends Sr{constructor(e,t,i,n,a,o){super(t,i,n,a,o),this.collider=e}static fromRaw(e,t){if(!t)return null;const i=new mn(e.get(t.colliderHandle()),t.toi(),U.fromRaw(t.witness1()),U.fromRaw(t.witness2()),U.fromRaw(t.normal1()),U.fromRaw(t.normal2()));return t.free(),i}}class St{static fromRaw(e,t){const i=e.coShapeType(t);let n,a,o,s,l,c,h;switch(i){case Ze.Ball:return new vs(e.coRadius(t));case Ze.Cuboid:return n=e.coHalfExtents(t),new ws(n.x,n.y,n.z);case Ze.RoundCuboid:return n=e.coHalfExtents(t),a=e.coRoundRadius(t),new ys(n.x,n.y,n.z,a);case Ze.Capsule:return l=e.coHalfHeight(t),c=e.coRadius(t),new xs(l,c);case Ze.Segment:return o=e.coVertices(t),new Ms(U.new(o[0],o[1],o[2]),U.new(o[3],o[4],o[5]));case Ze.Polyline:return o=e.coVertices(t),s=e.coIndices(t),new Es(o,s);case Ze.Triangle:return o=e.coVertices(t),new bs(U.new(o[0],o[1],o[2]),U.new(o[3],o[4],o[5]),U.new(o[6],o[7],o[8]));case Ze.RoundTriangle:return o=e.coVertices(t),a=e.coRoundRadius(t),new Ss(U.new(o[0],o[1],o[2]),U.new(o[3],o[4],o[5]),U.new(o[6],o[7],o[8]),a);case Ze.HalfSpace:return h=U.fromRaw(e.coHalfspaceNormal(t)),new Tl(h);case Ze.TriMesh:return o=e.coVertices(t),s=e.coIndices(t),new Ts(o,s);case Ze.HeightField:const u=e.coHeightfieldScale(t),d=e.coHeightfieldHeights(t),m=e.coHeightfieldNRows(t),_=e.coHeightfieldNCols(t);return new As(m,_,d,u);case Ze.ConvexPolyhedron:return o=e.coVertices(t),s=e.coIndices(t),new ta(o,s);case Ze.RoundConvexPolyhedron:return o=e.coVertices(t),s=e.coIndices(t),a=e.coRoundRadius(t),new ia(o,s,a);case Ze.Cylinder:return l=e.coHalfHeight(t),c=e.coRadius(t),new Rs(l,c);case Ze.RoundCylinder:return l=e.coHalfHeight(t),c=e.coRadius(t),a=e.coRoundRadius(t),new Cs(l,c,a);case Ze.Cone:return l=e.coHalfHeight(t),c=e.coRadius(t),new Ps(l,c);case Ze.RoundCone:return l=e.coHalfHeight(t),c=e.coRadius(t),a=e.coRoundRadius(t),new Ls(l,c,a);default:throw new Error("unknown shape type: "+i)}}castShape(e,t,i,n,a,o,s,l,c){let h=U.intoRaw(e),u=We.intoRaw(t),d=U.intoRaw(i),m=U.intoRaw(a),_=We.intoRaw(o),v=U.intoRaw(s),f=this.intoRaw(),p=n.intoRaw(),E=Sr.fromRaw(null,f.castShape(h,u,d,p,m,_,v,l,c));return h.free(),u.free(),d.free(),m.free(),_.free(),v.free(),f.free(),p.free(),E}intersectsShape(e,t,i,n,a){let o=U.intoRaw(e),s=We.intoRaw(t),l=U.intoRaw(n),c=We.intoRaw(a),h=this.intoRaw(),u=i.intoRaw(),d=h.intersectsShape(o,s,u,l,c);return o.free(),s.free(),l.free(),c.free(),h.free(),u.free(),d}contactShape(e,t,i,n,a,o){let s=U.intoRaw(e),l=We.intoRaw(t),c=U.intoRaw(n),h=We.intoRaw(a),u=this.intoRaw(),d=i.intoRaw(),m=Mr.fromRaw(u.contactShape(s,l,d,c,h,o));return s.free(),l.free(),c.free(),h.free(),u.free(),d.free(),m}containsPoint(e,t,i){let n=U.intoRaw(e),a=We.intoRaw(t),o=U.intoRaw(i),s=this.intoRaw(),l=s.containsPoint(n,a,o);return n.free(),a.free(),o.free(),s.free(),l}projectPoint(e,t,i,n){let a=U.intoRaw(e),o=We.intoRaw(t),s=U.intoRaw(i),l=this.intoRaw(),c=hn.fromRaw(l.projectPoint(a,o,s,n));return a.free(),o.free(),s.free(),l.free(),c}intersectsRay(e,t,i,n){let a=U.intoRaw(t),o=We.intoRaw(i),s=U.intoRaw(e.origin),l=U.intoRaw(e.dir),c=this.intoRaw(),h=c.intersectsRay(a,o,s,l,n);return a.free(),o.free(),s.free(),l.free(),c.free(),h}castRay(e,t,i,n,a){let o=U.intoRaw(t),s=We.intoRaw(i),l=U.intoRaw(e.origin),c=U.intoRaw(e.dir),h=this.intoRaw(),u=h.castRay(o,s,l,c,n,a);return o.free(),s.free(),l.free(),c.free(),h.free(),u}castRayAndGetNormal(e,t,i,n,a){let o=U.intoRaw(t),s=We.intoRaw(i),l=U.intoRaw(e.origin),c=U.intoRaw(e.dir),h=this.intoRaw(),u=dn.fromRaw(h.castRayAndGetNormal(o,s,l,c,n,a));return o.free(),s.free(),l.free(),c.free(),h.free(),u}}var Ze;(function(r){r[r.Ball=0]="Ball",r[r.Cuboid=1]="Cuboid",r[r.Capsule=2]="Capsule",r[r.Segment=3]="Segment",r[r.Polyline=4]="Polyline",r[r.Triangle=5]="Triangle",r[r.TriMesh=6]="TriMesh",r[r.HeightField=7]="HeightField",r[r.ConvexPolyhedron=9]="ConvexPolyhedron",r[r.Cylinder=10]="Cylinder",r[r.Cone=11]="Cone",r[r.RoundCuboid=12]="RoundCuboid",r[r.RoundTriangle=13]="RoundTriangle",r[r.RoundCylinder=14]="RoundCylinder",r[r.RoundCone=15]="RoundCone",r[r.RoundConvexPolyhedron=16]="RoundConvexPolyhedron",r[r.HalfSpace=17]="HalfSpace"})(Ze||(Ze={}));class vs extends St{constructor(e){super(),this.type=Ze.Ball,this.radius=e}intoRaw(){return Pe.ball(this.radius)}}class Tl extends St{constructor(e){super(),this.type=Ze.HalfSpace,this.normal=e}intoRaw(){let e=U.intoRaw(this.normal),t=Pe.halfspace(e);return e.free(),t}}class ws extends St{constructor(e,t,i){super(),this.type=Ze.Cuboid,this.halfExtents=U.new(e,t,i)}intoRaw(){return Pe.cuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z)}}class ys extends St{constructor(e,t,i,n){super(),this.type=Ze.RoundCuboid,this.halfExtents=U.new(e,t,i),this.borderRadius=n}intoRaw(){return Pe.roundCuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z,this.borderRadius)}}class xs extends St{constructor(e,t){super(),this.type=Ze.Capsule,this.halfHeight=e,this.radius=t}intoRaw(){return Pe.capsule(this.halfHeight,this.radius)}}class Ms extends St{constructor(e,t){super(),this.type=Ze.Segment,this.a=e,this.b=t}intoRaw(){let e=U.intoRaw(this.a),t=U.intoRaw(this.b),i=Pe.segment(e,t);return e.free(),t.free(),i}}let bs=class extends St{constructor(r,e,t){super(),this.type=Ze.Triangle,this.a=r,this.b=e,this.c=t}intoRaw(){let r=U.intoRaw(this.a),e=U.intoRaw(this.b),t=U.intoRaw(this.c),i=Pe.triangle(r,e,t);return r.free(),e.free(),t.free(),i}};class Ss extends St{constructor(e,t,i,n){super(),this.type=Ze.RoundTriangle,this.a=e,this.b=t,this.c=i,this.borderRadius=n}intoRaw(){let e=U.intoRaw(this.a),t=U.intoRaw(this.b),i=U.intoRaw(this.c),n=Pe.roundTriangle(e,t,i,this.borderRadius);return e.free(),t.free(),i.free(),n}}class Es extends St{constructor(e,t){super(),this.type=Ze.Polyline,this.vertices=e,this.indices=t??new Uint32Array(0)}intoRaw(){return Pe.polyline(this.vertices,this.indices)}}class Ts extends St{constructor(e,t){super(),this.type=Ze.TriMesh,this.vertices=e,this.indices=t}intoRaw(){return Pe.trimesh(this.vertices,this.indices)}}class ta extends St{constructor(e,t){super(),this.type=Ze.ConvexPolyhedron,this.vertices=e,this.indices=t}intoRaw(){return this.indices?Pe.convexMesh(this.vertices,this.indices):Pe.convexHull(this.vertices)}}class ia extends St{constructor(e,t,i){super(),this.type=Ze.RoundConvexPolyhedron,this.vertices=e,this.indices=t,this.borderRadius=i}intoRaw(){return this.indices?Pe.roundConvexMesh(this.vertices,this.indices,this.borderRadius):Pe.roundConvexHull(this.vertices,this.borderRadius)}}class As extends St{constructor(e,t,i,n){super(),this.type=Ze.HeightField,this.nrows=e,this.ncols=t,this.heights=i,this.scale=n}intoRaw(){let e=U.intoRaw(this.scale),t=Pe.heightfield(this.nrows,this.ncols,this.heights,e);return e.free(),t}}class Rs extends St{constructor(e,t){super(),this.type=Ze.Cylinder,this.halfHeight=e,this.radius=t}intoRaw(){return Pe.cylinder(this.halfHeight,this.radius)}}class Cs extends St{constructor(e,t,i){super(),this.type=Ze.RoundCylinder,this.borderRadius=i,this.halfHeight=e,this.radius=t}intoRaw(){return Pe.roundCylinder(this.halfHeight,this.radius,this.borderRadius)}}class Ps extends St{constructor(e,t){super(),this.type=Ze.Cone,this.halfHeight=e,this.radius=t}intoRaw(){return Pe.cone(this.halfHeight,this.radius)}}class Ls extends St{constructor(e,t,i){super(),this.type=Ze.RoundCone,this.halfHeight=e,this.radius=t,this.borderRadius=i}intoRaw(){return Pe.roundCone(this.halfHeight,this.radius,this.borderRadius)}}var ra;(function(r){r[r.DYNAMIC_DYNAMIC=1]="DYNAMIC_DYNAMIC",r[r.DYNAMIC_KINEMATIC=12]="DYNAMIC_KINEMATIC",r[r.DYNAMIC_FIXED=2]="DYNAMIC_FIXED",r[r.KINEMATIC_KINEMATIC=52224]="KINEMATIC_KINEMATIC",r[r.KINEMATIC_FIXED=8704]="KINEMATIC_FIXED",r[r.FIXED_FIXED=32]="FIXED_FIXED",r[r.DEFAULT=15]="DEFAULT",r[r.ALL=60943]="ALL"})(ra||(ra={}));class Is{constructor(e,t,i,n){this.colliderSet=e,this.handle=t,this._parent=i,this._shape=n}finalizeDeserialization(e){this.handle!=null&&(this._parent=e.get(this.colliderSet.raw.coParent(this.handle)))}ensureShapeIsCached(){this._shape||(this._shape=St.fromRaw(this.colliderSet.raw,this.handle))}get shape(){return this.ensureShapeIsCached(),this._shape}isValid(){return this.colliderSet.raw.contains(this.handle)}translation(){return U.fromRaw(this.colliderSet.raw.coTranslation(this.handle))}rotation(){return We.fromRaw(this.colliderSet.raw.coRotation(this.handle))}isSensor(){return this.colliderSet.raw.coIsSensor(this.handle)}setSensor(e){this.colliderSet.raw.coSetSensor(this.handle,e)}setShape(e){let t=e.intoRaw();this.colliderSet.raw.coSetShape(this.handle,t),t.free(),this._shape=e}setEnabled(e){this.colliderSet.raw.coSetEnabled(this.handle,e)}isEnabled(){return this.colliderSet.raw.coIsEnabled(this.handle)}setRestitution(e){this.colliderSet.raw.coSetRestitution(this.handle,e)}setFriction(e){this.colliderSet.raw.coSetFriction(this.handle,e)}frictionCombineRule(){return this.colliderSet.raw.coFrictionCombineRule(this.handle)}setFrictionCombineRule(e){this.colliderSet.raw.coSetFrictionCombineRule(this.handle,e)}restitutionCombineRule(){return this.colliderSet.raw.coRestitutionCombineRule(this.handle)}setRestitutionCombineRule(e){this.colliderSet.raw.coSetRestitutionCombineRule(this.handle,e)}setCollisionGroups(e){this.colliderSet.raw.coSetCollisionGroups(this.handle,e)}setSolverGroups(e){this.colliderSet.raw.coSetSolverGroups(this.handle,e)}activeHooks(){return this.colliderSet.raw.coActiveHooks(this.handle)}setActiveHooks(e){this.colliderSet.raw.coSetActiveHooks(this.handle,e)}activeEvents(){return this.colliderSet.raw.coActiveEvents(this.handle)}setActiveEvents(e){this.colliderSet.raw.coSetActiveEvents(this.handle,e)}activeCollisionTypes(){return this.colliderSet.raw.coActiveCollisionTypes(this.handle)}setContactForceEventThreshold(e){return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle,e)}contactForceEventThreshold(){return this.colliderSet.raw.coContactForceEventThreshold(this.handle)}setActiveCollisionTypes(e){this.colliderSet.raw.coSetActiveCollisionTypes(this.handle,e)}setDensity(e){this.colliderSet.raw.coSetDensity(this.handle,e)}setMass(e){this.colliderSet.raw.coSetMass(this.handle,e)}setMassProperties(e,t,i,n){let a=U.intoRaw(t),o=U.intoRaw(i),s=We.intoRaw(n);this.colliderSet.raw.coSetMassProperties(this.handle,e,a,o,s),a.free(),o.free(),s.free()}setTranslation(e){this.colliderSet.raw.coSetTranslation(this.handle,e.x,e.y,e.z)}setTranslationWrtParent(e){this.colliderSet.raw.coSetTranslationWrtParent(this.handle,e.x,e.y,e.z)}setRotation(e){this.colliderSet.raw.coSetRotation(this.handle,e.x,e.y,e.z,e.w)}setRotationWrtParent(e){this.colliderSet.raw.coSetRotationWrtParent(this.handle,e.x,e.y,e.z,e.w)}shapeType(){return this.colliderSet.raw.coShapeType(this.handle)}halfExtents(){return U.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle))}setHalfExtents(e){const t=U.intoRaw(e);this.colliderSet.raw.coSetHalfExtents(this.handle,t)}radius(){return this.colliderSet.raw.coRadius(this.handle)}setRadius(e){this.colliderSet.raw.coSetRadius(this.handle,e)}roundRadius(){return this.colliderSet.raw.coRoundRadius(this.handle)}setRoundRadius(e){this.colliderSet.raw.coSetRoundRadius(this.handle,e)}halfHeight(){return this.colliderSet.raw.coHalfHeight(this.handle)}setHalfHeight(e){this.colliderSet.raw.coSetHalfHeight(this.handle,e)}vertices(){return this.colliderSet.raw.coVertices(this.handle)}indices(){return this.colliderSet.raw.coIndices(this.handle)}heightfieldHeights(){return this.colliderSet.raw.coHeightfieldHeights(this.handle)}heightfieldScale(){let e=this.colliderSet.raw.coHeightfieldScale(this.handle);return U.fromRaw(e)}heightfieldNRows(){return this.colliderSet.raw.coHeightfieldNRows(this.handle)}heightfieldNCols(){return this.colliderSet.raw.coHeightfieldNCols(this.handle)}parent(){return this._parent}friction(){return this.colliderSet.raw.coFriction(this.handle)}restitution(){return this.colliderSet.raw.coRestitution(this.handle)}density(){return this.colliderSet.raw.coDensity(this.handle)}mass(){return this.colliderSet.raw.coMass(this.handle)}volume(){return this.colliderSet.raw.coVolume(this.handle)}collisionGroups(){return this.colliderSet.raw.coCollisionGroups(this.handle)}solverGroups(){return this.colliderSet.raw.coSolverGroups(this.handle)}containsPoint(e){let t=U.intoRaw(e),i=this.colliderSet.raw.coContainsPoint(this.handle,t);return t.free(),i}projectPoint(e,t){let i=U.intoRaw(e),n=hn.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle,i,t));return i.free(),n}intersectsRay(e,t){let i=U.intoRaw(e.origin),n=U.intoRaw(e.dir),a=this.colliderSet.raw.coIntersectsRay(this.handle,i,n,t);return i.free(),n.free(),a}castShape(e,t,i,n,a,o,s){let l=U.intoRaw(e),c=U.intoRaw(i),h=We.intoRaw(n),u=U.intoRaw(a),d=t.intoRaw(),m=Sr.fromRaw(this.colliderSet,this.colliderSet.raw.coCastShape(this.handle,l,d,c,h,u,o,s));return l.free(),c.free(),h.free(),u.free(),d.free(),m}castCollider(e,t,i,n,a){let o=U.intoRaw(e),s=U.intoRaw(i),l=mn.fromRaw(this.colliderSet,this.colliderSet.raw.coCastCollider(this.handle,o,t.handle,s,n,a));return o.free(),s.free(),l}intersectsShape(e,t,i){let n=U.intoRaw(t),a=We.intoRaw(i),o=e.intoRaw(),s=this.colliderSet.raw.coIntersectsShape(this.handle,o,n,a);return n.free(),a.free(),o.free(),s}contactShape(e,t,i,n){let a=U.intoRaw(t),o=We.intoRaw(i),s=e.intoRaw(),l=Mr.fromRaw(this.colliderSet.raw.coContactShape(this.handle,s,a,o,n));return a.free(),o.free(),s.free(),l}contactCollider(e,t){return Mr.fromRaw(this.colliderSet.raw.coContactCollider(this.handle,e.handle,t))}castRay(e,t,i){let n=U.intoRaw(e.origin),a=U.intoRaw(e.dir),o=this.colliderSet.raw.coCastRay(this.handle,n,a,t,i);return n.free(),a.free(),o}castRayAndGetNormal(e,t,i){let n=U.intoRaw(e.origin),a=U.intoRaw(e.dir),o=dn.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle,n,a,t,i));return n.free(),a.free(),o}}var ir;(function(r){r[r.Density=0]="Density",r[r.Mass=1]="Mass",r[r.MassProps=2]="MassProps"})(ir||(ir={}));class yt{constructor(e){this.enabled=!0,this.shape=e,this.massPropsMode=ir.Density,this.density=1,this.friction=.5,this.restitution=0,this.rotation=We.identity(),this.translation=U.zeros(),this.isSensor=!1,this.collisionGroups=4294967295,this.solverGroups=4294967295,this.frictionCombineRule=cn.Average,this.restitutionCombineRule=cn.Average,this.activeCollisionTypes=ra.DEFAULT,this.activeEvents=0,this.activeHooks=0,this.mass=0,this.centerOfMass=U.zeros(),this.contactForceEventThreshold=0,this.principalAngularInertia=U.zeros(),this.angularInertiaLocalFrame=We.identity()}static ball(e){const t=new vs(e);return new yt(t)}static capsule(e,t){const i=new xs(e,t);return new yt(i)}static segment(e,t){const i=new Ms(e,t);return new yt(i)}static triangle(e,t,i){const n=new bs(e,t,i);return new yt(n)}static roundTriangle(e,t,i,n){const a=new Ss(e,t,i,n);return new yt(a)}static polyline(e,t){const i=new Es(e,t);return new yt(i)}static trimesh(e,t){const i=new Ts(e,t);return new yt(i)}static cuboid(e,t,i){const n=new ws(e,t,i);return new yt(n)}static roundCuboid(e,t,i,n){const a=new ys(e,t,i,n);return new yt(a)}static heightfield(e,t,i,n){const a=new As(e,t,i,n);return new yt(a)}static cylinder(e,t){const i=new Rs(e,t);return new yt(i)}static roundCylinder(e,t,i){const n=new Cs(e,t,i);return new yt(n)}static cone(e,t){const i=new Ps(e,t);return new yt(i)}static roundCone(e,t,i){const n=new Ls(e,t,i);return new yt(n)}static convexHull(e){const t=new ta(e,null);return new yt(t)}static convexMesh(e,t){const i=new ta(e,t);return new yt(i)}static roundConvexHull(e,t){const i=new ia(e,null,t);return new yt(i)}static roundConvexMesh(e,t,i){const n=new ia(e,t,i);return new yt(n)}setTranslation(e,t,i){if(typeof e!="number"||typeof t!="number"||typeof i!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:e,y:t,z:i},this}setRotation(e){return We.copy(this.rotation,e),this}setSensor(e){return this.isSensor=e,this}setEnabled(e){return this.enabled=e,this}setDensity(e){return this.massPropsMode=ir.Density,this.density=e,this}setMass(e){return this.massPropsMode=ir.Mass,this.mass=e,this}setMassProperties(e,t,i,n){return this.massPropsMode=ir.MassProps,this.mass=e,U.copy(this.centerOfMass,t),U.copy(this.principalAngularInertia,i),We.copy(this.angularInertiaLocalFrame,n),this}setRestitution(e){return this.restitution=e,this}setFriction(e){return this.friction=e,this}setFrictionCombineRule(e){return this.frictionCombineRule=e,this}setRestitutionCombineRule(e){return this.restitutionCombineRule=e,this}setCollisionGroups(e){return this.collisionGroups=e,this}setSolverGroups(e){return this.solverGroups=e,this}setActiveHooks(e){return this.activeHooks=e,this}setActiveEvents(e){return this.activeEvents=e,this}setActiveCollisionTypes(e){return this.activeCollisionTypes=e,this}setContactForceEventThreshold(e){return this.contactForceEventThreshold=e,this}}class Al{constructor(e){this.raw=e||new mt,this.map=new $n,e&&e.forEachColliderHandle(t=>{this.map.set(t,new Is(this,t,null))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}castClosure(e){return t=>{if(e)return e(this.get(t))}}finalizeDeserialization(e){this.map.forEach(t=>t.finalizeDeserialization(e))}createCollider(e,t,i){let n=i!=null&&i!=null;if(n&&isNaN(i))throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");let a=t.shape.intoRaw(),o=U.intoRaw(t.translation),s=We.intoRaw(t.rotation),l=U.intoRaw(t.centerOfMass),c=U.intoRaw(t.principalAngularInertia),h=We.intoRaw(t.angularInertiaLocalFrame),u=this.raw.createCollider(t.enabled,a,o,s,t.massPropsMode,t.mass,l,c,h,t.density,t.friction,t.restitution,t.frictionCombineRule,t.restitutionCombineRule,t.isSensor,t.collisionGroups,t.solverGroups,t.activeCollisionTypes,t.activeHooks,t.activeEvents,t.contactForceEventThreshold,n,n?i:0,e.raw);a.free(),o.free(),s.free(),l.free(),c.free(),h.free();let d=n?e.get(i):null,m=new Is(this,u,d,t.shape);return this.map.set(u,m),m}remove(e,t,i,n){this.raw.remove(e,t.raw,i.raw,n),this.unmap(e)}unmap(e){this.map.delete(e)}get(e){return this.map.get(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}forEach(e){this.map.forEach(e)}getAll(){return this.map.getAll()}}class Rl{constructor(e){this.raw=e||new Bn}free(){this.raw&&this.raw.free(),this.raw=void 0}step(e,t,i,n,a,o,s,l,c,h,u,d){let m=U.intoRaw(e);u?this.raw.stepWithEvents(m,t.raw,i.raw,n.raw,a.raw,o.raw,s.raw,l.raw,c.raw,h.raw,u.raw,d,d?d.filterContactPair:null,d?d.filterIntersectionPair:null):this.raw.step(m,t.raw,i.raw,n.raw,a.raw,o.raw,s.raw,l.raw,c.raw,h.raw),m.free()}}var Ds;(function(r){r[r.EXCLUDE_FIXED=1]="EXCLUDE_FIXED",r[r.EXCLUDE_KINEMATIC=2]="EXCLUDE_KINEMATIC",r[r.EXCLUDE_DYNAMIC=4]="EXCLUDE_DYNAMIC",r[r.EXCLUDE_SENSORS=8]="EXCLUDE_SENSORS",r[r.EXCLUDE_SOLIDS=16]="EXCLUDE_SOLIDS",r[r.ONLY_DYNAMIC=3]="ONLY_DYNAMIC",r[r.ONLY_KINEMATIC=5]="ONLY_KINEMATIC",r[r.ONLY_FIXED=6]="ONLY_FIXED"})(Ds||(Ds={}));class Cl{constructor(e){this.raw=e||new sn}free(){this.raw&&this.raw.free(),this.raw=void 0}update(e,t){this.raw.update(e.raw,t.raw)}castRay(e,t,i,n,a,o,s,l,c,h){let u=U.intoRaw(i.origin),d=U.intoRaw(i.dir),m=ea.fromRaw(t,this.raw.castRay(e.raw,t.raw,u,d,n,a,o,s,l,c,h));return u.free(),d.free(),m}castRayAndGetNormal(e,t,i,n,a,o,s,l,c,h){let u=U.intoRaw(i.origin),d=U.intoRaw(i.dir),m=pn.fromRaw(t,this.raw.castRayAndGetNormal(e.raw,t.raw,u,d,n,a,o,s,l,c,h));return u.free(),d.free(),m}intersectionsWithRay(e,t,i,n,a,o,s,l,c,h,u){let d=U.intoRaw(i.origin),m=U.intoRaw(i.dir),_=v=>o(pn.fromRaw(t,v));this.raw.intersectionsWithRay(e.raw,t.raw,d,m,n,a,_,s,l,c,h,u),d.free(),m.free()}intersectionWithShape(e,t,i,n,a,o,s,l,c,h){let u=U.intoRaw(i),d=We.intoRaw(n),m=a.intoRaw(),_=this.raw.intersectionWithShape(e.raw,t.raw,u,d,m,o,s,l,c,h);return u.free(),d.free(),m.free(),_}projectPoint(e,t,i,n,a,o,s,l,c){let h=U.intoRaw(i),u=un.fromRaw(t,this.raw.projectPoint(e.raw,t.raw,h,n,a,o,s,l,c));return h.free(),u}projectPointAndGetFeature(e,t,i,n,a,o,s,l){let c=U.intoRaw(i),h=un.fromRaw(t,this.raw.projectPointAndGetFeature(e.raw,t.raw,c,n,a,o,s,l));return c.free(),h}intersectionsWithPoint(e,t,i,n,a,o,s,l,c){let h=U.intoRaw(i);this.raw.intersectionsWithPoint(e.raw,t.raw,h,n,a,o,s,l,c),h.free()}castShape(e,t,i,n,a,o,s,l,c,h,u,d,m){let _=U.intoRaw(i),v=We.intoRaw(n),f=U.intoRaw(a),p=o.intoRaw(),E=mn.fromRaw(t,this.raw.castShape(e.raw,t.raw,_,v,f,p,s,l,c,h,u,d,m));return _.free(),v.free(),f.free(),p.free(),E}intersectionsWithShape(e,t,i,n,a,o,s,l,c,h,u){let d=U.intoRaw(i),m=We.intoRaw(n),_=a.intoRaw();this.raw.intersectionsWithShape(e.raw,t.raw,d,m,_,o,s,l,c,h,u),d.free(),m.free(),_.free()}collidersWithAabbIntersectingAabb(e,t,i){let n=U.intoRaw(e),a=U.intoRaw(t);this.raw.collidersWithAabbIntersectingAabb(n,a,i),n.free(),a.free()}}class Us{constructor(e){this.raw=e||new Xn}free(){this.raw&&this.raw.free(),this.raw=void 0}serializeAll(e,t,i,n,a,o,s,l,c){let h=U.intoRaw(e);const u=this.raw.serializeAll(h,t.raw,i.raw,n.raw,a.raw,o.raw,s.raw,l.raw,c.raw);return h.free(),u}deserializeAll(e){return na.fromRaw(this.raw.deserializeAll(e))}}class Pl{constructor(e,t){this.vertices=e,this.colors=t}}class Ll{constructor(e){this.raw=e||new zn}free(){this.raw&&this.raw.free(),this.raw=void 0,this.vertices=void 0,this.colors=void 0}render(e,t,i,n,a){this.raw.render(e.raw,t.raw,i.raw,n.raw,a.raw),this.vertices=this.raw.vertices(),this.colors=this.raw.colors()}}class Il{}class Dl{constructor(e,t,i,n,a){this.params=t,this.bodies=i,this.colliders=n,this.queries=a,this.raw=new Hn(e),this.rawCharacterCollision=new nn,this._applyImpulsesToDynamicBodies=!1,this._characterMass=null}free(){this.raw&&(this.raw.free(),this.rawCharacterCollision.free()),this.raw=void 0,this.rawCharacterCollision=void 0}up(){return this.raw.up()}setUp(e){let t=U.intoRaw(e);return this.raw.setUp(t)}applyImpulsesToDynamicBodies(){return this._applyImpulsesToDynamicBodies}setApplyImpulsesToDynamicBodies(e){this._applyImpulsesToDynamicBodies=e}characterMass(){return this._characterMass}setCharacterMass(e){this._characterMass=e}offset(){return this.raw.offset()}setOffset(e){this.raw.setOffset(e)}slideEnabled(){return this.raw.slideEnabled()}setSlideEnabled(e){this.raw.setSlideEnabled(e)}autostepMaxHeight(){return this.raw.autostepMaxHeight()}autostepMinWidth(){return this.raw.autostepMinWidth()}autostepIncludesDynamicBodies(){return this.raw.autostepIncludesDynamicBodies()}autostepEnabled(){return this.raw.autostepEnabled()}enableAutostep(e,t,i){this.raw.enableAutostep(e,t,i)}disableAutostep(){return this.raw.disableAutostep()}maxSlopeClimbAngle(){return this.raw.maxSlopeClimbAngle()}setMaxSlopeClimbAngle(e){this.raw.setMaxSlopeClimbAngle(e)}minSlopeSlideAngle(){return this.raw.minSlopeSlideAngle()}setMinSlopeSlideAngle(e){this.raw.setMinSlopeSlideAngle(e)}snapToGroundDistance(){return this.raw.snapToGroundDistance()}enableSnapToGround(e){this.raw.enableSnapToGround(e)}disableSnapToGround(){this.raw.disableSnapToGround()}snapToGroundEnabled(){return this.raw.snapToGroundEnabled()}computeColliderMovement(e,t,i,n,a){let o=U.intoRaw(t);this.raw.computeColliderMovement(this.params.dt,this.bodies.raw,this.colliders.raw,this.queries.raw,e.handle,o,this._applyImpulsesToDynamicBodies,this._characterMass,i,n,this.colliders.castClosure(a)),o.free()}computedMovement(){return U.fromRaw(this.raw.computedMovement())}computedGrounded(){return this.raw.computedGrounded()}numComputedCollisions(){return this.raw.numComputedCollisions()}computedCollision(e,t){if(this.raw.computedCollision(e,this.rawCharacterCollision)){let i=this.rawCharacterCollision;return t=t??new Il,t.translationApplied=U.fromRaw(i.translationApplied()),t.translationRemaining=U.fromRaw(i.translationRemaining()),t.toi=i.toi(),t.witness1=U.fromRaw(i.worldWitness1()),t.witness2=U.fromRaw(i.worldWitness2()),t.normal1=U.fromRaw(i.worldNormal1()),t.normal2=U.fromRaw(i.worldNormal2()),t.collider=this.colliders.get(i.handle()),t}else return null}}class na{constructor(e,t,i,n,a,o,s,l,c,h,u,d,m,_){this.gravity=e,this.integrationParameters=new hl(t),this.islands=new Ml(i),this.broadPhase=new bl(n),this.narrowPhase=new Sl(a),this.bodies=new cl(o),this.colliders=new Al(s),this.impulseJoints=new fl(l),this.multibodyJoints=new yl(c),this.ccdSolver=new xl(h),this.queryPipeline=new Cl(u),this.physicsPipeline=new Rl(d),this.serializationPipeline=new Us(m),this.debugRenderPipeline=new Ll(_),this.characterControllers=new Set,this.impulseJoints.finalizeDeserialization(this.bodies),this.bodies.finalizeDeserialization(this.colliders),this.colliders.finalizeDeserialization(this.bodies)}free(){this.integrationParameters.free(),this.islands.free(),this.broadPhase.free(),this.narrowPhase.free(),this.bodies.free(),this.colliders.free(),this.impulseJoints.free(),this.multibodyJoints.free(),this.ccdSolver.free(),this.queryPipeline.free(),this.physicsPipeline.free(),this.serializationPipeline.free(),this.debugRenderPipeline.free(),this.characterControllers.forEach(e=>e.free()),this.integrationParameters=void 0,this.islands=void 0,this.broadPhase=void 0,this.narrowPhase=void 0,this.bodies=void 0,this.colliders=void 0,this.ccdSolver=void 0,this.impulseJoints=void 0,this.multibodyJoints=void 0,this.queryPipeline=void 0,this.physicsPipeline=void 0,this.serializationPipeline=void 0,this.debugRenderPipeline=void 0,this.characterControllers=void 0}static fromRaw(e){return e?new na(U.fromRaw(e.takeGravity()),e.takeIntegrationParameters(),e.takeIslandManager(),e.takeBroadPhase(),e.takeNarrowPhase(),e.takeBodies(),e.takeColliders(),e.takeImpulseJoints(),e.takeMultibodyJoints()):null}takeSnapshot(){return this.serializationPipeline.serializeAll(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints)}static restoreSnapshot(e){return new Us().deserializeAll(e)}debugRender(){return this.debugRenderPipeline.render(this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.narrowPhase),new Pl(this.debugRenderPipeline.vertices,this.debugRenderPipeline.colors)}step(e,t){this.physicsPipeline.step(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.ccdSolver,e,t),this.queryPipeline.update(this.bodies,this.colliders)}propagateModifiedBodyPositionsToColliders(){this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw)}updateSceneQueries(){this.propagateModifiedBodyPositionsToColliders(),this.queryPipeline.update(this.bodies,this.colliders)}get timestep(){return this.integrationParameters.dt}set timestep(e){this.integrationParameters.dt=e}get maxVelocityIterations(){return this.integrationParameters.maxVelocityIterations}set maxVelocityIterations(e){this.integrationParameters.maxVelocityIterations=e}get maxVelocityFrictionIterations(){return this.integrationParameters.maxVelocityFrictionIterations}set maxVelocityFrictionIterations(e){this.integrationParameters.maxVelocityFrictionIterations=e}get maxStabilizationIterations(){return this.integrationParameters.maxStabilizationIterations}set maxStabilizationIterations(e){this.integrationParameters.maxStabilizationIterations=e}createRigidBody(e){return this.bodies.createRigidBody(this.colliders,e)}createCharacterController(e){let t=new Dl(e,this.integrationParameters,this.bodies,this.colliders,this.queryPipeline);return this.characterControllers.add(t),t}removeCharacterController(e){this.characterControllers.delete(e),e.free()}createCollider(e,t){let i=t?t.handle:void 0;return this.colliders.createCollider(this.bodies,e,i)}createImpulseJoint(e,t,i,n){return this.impulseJoints.createJoint(this.bodies,e,t.handle,i.handle,n)}createMultibodyJoint(e,t,i,n){return this.multibodyJoints.createJoint(e,t.handle,i.handle,n)}getRigidBody(e){return this.bodies.get(e)}getCollider(e){return this.colliders.get(e)}getImpulseJoint(e){return this.impulseJoints.get(e)}getMultibodyJoint(e){return this.multibodyJoints.get(e)}removeRigidBody(e){this.bodies&&this.bodies.remove(e.handle,this.islands,this.colliders,this.impulseJoints,this.multibodyJoints)}removeCollider(e,t){this.colliders&&this.colliders.remove(e.handle,this.islands,this.bodies,t)}removeImpulseJoint(e,t){this.impulseJoints&&this.impulseJoints.remove(e.handle,t)}removeMultibodyJoint(e,t){this.impulseJoints&&this.multibodyJoints.remove(e.handle,t)}forEachCollider(e){this.colliders.forEach(e)}forEachRigidBody(e){this.bodies.forEach(e)}forEachActiveRigidBody(e){this.bodies.forEachActiveRigidBody(this.islands,e)}castRay(e,t,i,n,a,o,s,l){return this.queryPipeline.castRay(this.bodies,this.colliders,e,t,i,n,a,o?o.handle:null,s?s.handle:null,this.colliders.castClosure(l))}castRayAndGetNormal(e,t,i,n,a,o,s,l){return this.queryPipeline.castRayAndGetNormal(this.bodies,this.colliders,e,t,i,n,a,o?o.handle:null,s?s.handle:null,this.colliders.castClosure(l))}intersectionsWithRay(e,t,i,n,a,o,s,l,c){this.queryPipeline.intersectionsWithRay(this.bodies,this.colliders,e,t,i,n,a,o,s?s.handle:null,l?l.handle:null,this.colliders.castClosure(c))}intersectionWithShape(e,t,i,n,a,o,s,l){let c=this.queryPipeline.intersectionWithShape(this.bodies,this.colliders,e,t,i,n,a,o?o.handle:null,s?s.handle:null,this.colliders.castClosure(l));return c!=null?this.colliders.get(c):null}projectPoint(e,t,i,n,a,o,s){return this.queryPipeline.projectPoint(this.bodies,this.colliders,e,t,i,n,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(s))}projectPointAndGetFeature(e,t,i,n,a,o){return this.queryPipeline.projectPointAndGetFeature(this.bodies,this.colliders,e,t,i,n?n.handle:null,a?a.handle:null,this.colliders.castClosure(o))}intersectionsWithPoint(e,t,i,n,a,o,s){this.queryPipeline.intersectionsWithPoint(this.bodies,this.colliders,e,this.colliders.castClosure(t),i,n,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(s))}castShape(e,t,i,n,a,o,s,l,c,h,u){return this.queryPipeline.castShape(this.bodies,this.colliders,e,t,i,n,a,o,s,l,c?c.handle:null,h?h.handle:null,this.colliders.castClosure(u))}intersectionsWithShape(e,t,i,n,a,o,s,l,c){this.queryPipeline.intersectionsWithShape(this.bodies,this.colliders,e,t,i,this.colliders.castClosure(n),a,o,s?s.handle:null,l?l.handle:null,this.colliders.castClosure(c))}collidersWithAabbIntersectingAabb(e,t,i){this.queryPipeline.collidersWithAabbIntersectingAabb(e,t,this.colliders.castClosure(i))}contactsWith(e,t){this.narrowPhase.contactsWith(e.handle,this.colliders.castClosure(t))}intersectionsWith(e,t){this.narrowPhase.intersectionsWith(e.handle,this.colliders.castClosure(t))}contactPair(e,t,i){this.narrowPhase.contactPair(e.handle,t.handle,i)}intersectionPair(e,t){return this.narrowPhase.intersectionPair(e.handle,t.handle)}}var Ns;(function(r){r[r.COLLISION_EVENTS=1]="COLLISION_EVENTS",r[r.CONTACT_FORCE_EVENTS=2]="CONTACT_FORCE_EVENTS"})(Ns||(Ns={}));class Ul{free(){this.raw&&this.raw.free(),this.raw=void 0}collider1(){return this.raw.collider1()}collider2(){return this.raw.collider2()}totalForce(){return U.fromRaw(this.raw.total_force())}totalForceMagnitude(){return this.raw.total_force_magnitude()}maxForceDirection(){return U.fromRaw(this.raw.max_force_direction())}maxForceMagnitude(){return this.raw.max_force_magnitude()}}class J1{constructor(e,t){this.raw=t||new an(e)}free(){this.raw&&this.raw.free(),this.raw=void 0}drainCollisionEvents(e){this.raw.drainCollisionEvents(e)}drainContactForceEvents(e){let t=new Ul;this.raw.drainContactForceEvents(i=>{t.raw=i,e(t),t.free()})}clear(){this.raw.clear()}}var Os;(function(r){r[r.FILTER_CONTACT_PAIRS=1]="FILTER_CONTACT_PAIRS",r[r.FILTER_INTERSECTION_PAIRS=2]="FILTER_INTERSECTION_PAIRS"})(Os||(Os={}));var Fs;(function(r){r[r.EMPTY=0]="EMPTY",r[r.COMPUTE_IMPULSE=1]="COMPUTE_IMPULSE"})(Fs||(Fs={}));function Z1(){return pu()}const gt=Object.freeze(Object.defineProperty({__proto__:null,get ActiveCollisionTypes(){return ra},get ActiveEvents(){return Ns},get ActiveHooks(){return Os},Ball:vs,BroadPhase:bl,CCDSolver:xl,Capsule:xs,CharacterCollision:Il,get CoefficientCombineRule(){return cn},Collider:Is,ColliderDesc:yt,ColliderSet:Al,Cone:Ps,ConvexPolyhedron:ta,Cuboid:ws,Cylinder:Rs,DebugRenderBuffers:Pl,DebugRenderPipeline:Ll,EventQueue:J1,get FeatureType(){return br},FixedImpulseJoint:ul,FixedMultibodyJoint:gl,HalfSpace:Tl,Heightfield:As,ImpulseJoint:Hi,ImpulseJointSet:fl,IntegrationParameters:hl,IslandManager:Ml,JointData:xr,get JointType(){return bt},KinematicCharacterController:Dl,get MassPropsMode(){return ir},get MotorModel(){return fs},MultibodyJoint:Bi,MultibodyJointSet:yl,NarrowPhase:Sl,PhysicsPipeline:Rl,PointColliderProjection:un,PointProjection:hn,Polyline:Es,PrismaticImpulseJoint:dl,PrismaticMultibodyJoint:_l,Quaternion:ds,get QueryFilterFlags(){return Ds},QueryPipeline:Cl,Ray:K1,RayColliderIntersection:pn,RayColliderToi:ea,RayIntersection:dn,RevoluteImpulseJoint:pl,RevoluteMultibodyJoint:vl,RigidBody:ms,RigidBodyDesc:yi,RigidBodySet:cl,get RigidBodyType(){return hi},RotationOps:We,RoundCone:Ls,RoundConvexPolyhedron:ia,RoundCuboid:ys,RoundCylinder:Cs,RoundTriangle:Ss,SdpMatrix3:ll,SdpMatrix3Ops:ps,Segment:Ms,SerializationPipeline:Us,Shape:St,ShapeColliderTOI:mn,ShapeContact:Mr,ShapeTOI:Sr,get ShapeType(){return Ze},get SolverFlags(){return Fs},SphericalImpulseJoint:ml,SphericalMultibodyJoint:wl,TempContactForceEvent:Ul,TempContactManifold:El,TriMesh:Ts,Triangle:bs,UnitImpulseJoint:gs,UnitMultibodyJoint:_s,Vector3:ol,VectorOps:U,World:na,version:Z1},Symbol.toStringTag,{value:"Module"})),zs="160",Er={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Tr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Q1=0,Nl=1,$1=2,Ol=1,Fl=2,Ai=3,Gi=0,Xt=1,xi=2,ki=0,Ar=1,zl=2,Hl=3,Bl=4,e0=5,rr=100,t0=101,i0=102,Gl=103,kl=104,r0=200,n0=201,a0=202,s0=203,Hs=204,Bs=205,o0=206,l0=207,c0=208,h0=209,u0=210,d0=211,p0=212,m0=213,f0=214,g0=0,_0=1,v0=2,aa=3,w0=4,y0=5,x0=6,M0=7,Vl=0,b0=1,S0=2,Vi=0,E0=1,T0=2,A0=3,R0=4,C0=5,P0=6,Wl=300,Rr=301,Cr=302,Gs=303,ks=304,sa=306,Vs=1e3,ui=1001,Ws=1002,Bt=1003,jl=1004,js=1005,ei=1006,L0=1007,fn=1008,Wi=1009,I0=1010,D0=1011,Xs=1012,Xl=1013,ji=1014,Xi=1015,gn=1016,ql=1017,Yl=1018,nr=1020,U0=1021,di=1023,N0=1024,O0=1025,ar=1026,Pr=1027,F0=1028,Kl=1029,z0=1030,Jl=1031,Zl=1033,qs=33776,Ys=33777,Ks=33778,Js=33779,Ql=35840,$l=35841,ec=35842,tc=35843,ic=36196,rc=37492,nc=37496,ac=37808,sc=37809,oc=37810,lc=37811,cc=37812,hc=37813,uc=37814,dc=37815,pc=37816,mc=37817,fc=37818,gc=37819,_c=37820,vc=37821,Zs=36492,wc=36494,yc=36495,H0=36283,xc=36284,Mc=36285,bc=36286,Sc=3e3,sr=3001,B0=3200,G0=3201,Ec=0,k0=1,ti="",Dt="srgb",Ri="srgb-linear",Qs="display-p3",oa="display-p3-linear",la="linear",ut="srgb",ca="rec709",ha="p3",Lr=7680,Tc=519,V0=512,W0=513,j0=514,Ac=515,X0=516,q0=517,Y0=518,K0=519,Rc=35044,ua=35048,Cc="300 es",$s=1035,Ci=2e3,da=2001;class or{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let n=0,a=i.length;n<a;n++)i[n].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pc=1234567;const _n=Math.PI/180,vn=180/Math.PI;function Ir(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[r&255]+Ot[r>>8&255]+Ot[r>>16&255]+Ot[r>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Ut(r,e,t){return Math.max(e,Math.min(t,r))}function eo(r,e){return(r%e+e)%e}function J0(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function Z0(r,e,t){return r!==e?(t-r)/(e-r):0}function wn(r,e,t){return(1-t)*r+t*e}function Q0(r,e,t,i){return wn(r,e,1-Math.exp(-t*i))}function $0(r,e=1){return e-Math.abs(eo(r,e*2)-e)}function ev(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function tv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function iv(r,e){return r+Math.floor(Math.random()*(e-r+1))}function rv(r,e){return r+Math.random()*(e-r)}function nv(r){return r*(.5-Math.random())}function av(r){r!==void 0&&(Pc=r);let e=Pc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sv(r){return r*_n}function ov(r){return r*vn}function to(r){return(r&r-1)===0&&r!==0}function lv(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function pa(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function cv(r,e,t,i,n){const a=Math.cos,o=Math.sin,s=a(t/2),l=o(t/2),c=a((e+i)/2),h=o((e+i)/2),u=a((e-i)/2),d=o((e-i)/2),m=a((i-e)/2),_=o((i-e)/2);switch(n){case"XYX":r.set(s*h,l*u,l*d,s*c);break;case"YZY":r.set(l*d,s*h,l*u,s*c);break;case"ZXZ":r.set(l*u,l*d,s*h,s*c);break;case"XZX":r.set(s*h,l*_,l*m,s*c);break;case"YXY":r.set(l*m,s*h,l*_,s*c);break;case"ZYZ":r.set(l*_,l*m,s*h,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Dr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Gt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const hv={DEG2RAD:_n,RAD2DEG:vn,generateUUID:Ir,clamp:Ut,euclideanModulo:eo,mapLinear:J0,inverseLerp:Z0,lerp:wn,damp:Q0,pingpong:$0,smoothstep:ev,smootherstep:tv,randInt:iv,randFloat:rv,randFloatSpread:nv,seededRandom:av,degToRad:sv,radToDeg:ov,isPowerOfTwo:to,ceilPowerOfTwo:lv,floorPowerOfTwo:pa,setQuaternionFromProperEuler:cv,normalize:Gt,denormalize:Dr};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*n+e.x,this.y=a*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,i,n,a,o,s,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,o,s,l,c)}set(e,t,i,n,a,o,s,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=s,h[3]=t,h[4]=a,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,a=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],m=i[5],_=i[8],v=n[0],f=n[3],p=n[6],E=n[1],w=n[4],A=n[7],P=n[2],T=n[5],R=n[8];return a[0]=o*v+s*E+l*P,a[3]=o*f+s*w+l*T,a[6]=o*p+s*A+l*R,a[1]=c*v+h*E+u*P,a[4]=c*f+h*w+u*T,a[7]=c*p+h*A+u*R,a[2]=d*v+m*E+_*P,a[5]=d*f+m*w+_*T,a[8]=d*p+m*A+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*s*c-i*a*h+i*s*l+n*a*c-n*o*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8],u=h*o-s*c,d=s*l-h*a,m=c*a-o*l,_=t*u+i*d+n*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=u*v,e[1]=(n*c-h*i)*v,e[2]=(s*i-n*o)*v,e[3]=d*v,e[4]=(h*t-n*l)*v,e[5]=(n*a-s*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-n*c,n*l,-n*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(io.makeScale(e,t)),this}rotate(e){return this.premultiply(io.makeRotation(-e)),this}translate(e,t){return this.premultiply(io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const io=new Ke;function Lc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ma(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function uv(){const r=ma("canvas");return r.style.display="block",r}const Ic={};function yn(r){r in Ic||(Ic[r]=!0,console.warn(r))}const Dc=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Uc=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fa={[Ri]:{transfer:la,primaries:ca,toReference:r=>r,fromReference:r=>r},[Dt]:{transfer:ut,primaries:ca,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[oa]:{transfer:la,primaries:ha,toReference:r=>r.applyMatrix3(Uc),fromReference:r=>r.applyMatrix3(Dc)},[Qs]:{transfer:ut,primaries:ha,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Uc),fromReference:r=>r.applyMatrix3(Dc).convertLinearToSRGB()}},dv=new Set([Ri,oa]),ot={enabled:!0,_workingColorSpace:Ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!dv.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=fa[e].toReference,n=fa[t].fromReference;return n(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return fa[r].primaries},getTransfer:function(r){return r===ti?la:fa[r].transfer}};function Ur(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ro(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Nr;class Nc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Nr===void 0&&(Nr=ma("canvas")),Nr.width=e.width,Nr.height=e.height;const i=Nr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Nr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ma("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),a=n.data;for(let o=0;o<a.length;o++)a[o]=Ur(a[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ur(t[i]/255)*255):t[i]=Ur(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pv=0;class Oc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=Ir(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let o=0,s=n.length;o<s;o++)n[o].isDataTexture?a.push(no(n[o].image)):a.push(no(n[o]))}else a=no(n);i.url=a}return t||(e.images[this.uuid]=i),i}}function no(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Nc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mv=0;class Jt extends or{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,i=ui,n=ui,a=ei,o=fn,s=di,l=Wi,c=Jt.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=Ir(),this.name="",this.source=new Oc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(yn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===sr?Dt:ti),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vs:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case Ws:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vs:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case Ws:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return yn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Dt?sr:Sc}set encoding(e){yn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===sr?Dt:ti}}Jt.DEFAULT_IMAGE=null,Jt.DEFAULT_MAPPING=Wl,Jt.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,i=0,n=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*a,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*a,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*a,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,a;const o=e.elements,s=o[0],l=o[4],c=o[8],h=o[1],u=o[5],d=o[9],m=o[2],_=o[6],v=o[10];if(Math.abs(l-h)<.01&&Math.abs(c-m)<.01&&Math.abs(d-_)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+m)<.1&&Math.abs(d+_)<.1&&Math.abs(s+u+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const p=(s+1)/2,E=(u+1)/2,w=(v+1)/2,A=(l+h)/4,P=(c+m)/4,T=(d+_)/4;return p>E&&p>w?p<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(p),n=A/i,a=P/i):E>w?E<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(E),i=A/n,a=T/n):w<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(w),i=P/a,n=T/a),this.set(i,n,a,t),this}let f=Math.sqrt((_-d)*(_-d)+(c-m)*(c-m)+(h-l)*(h-l));return Math.abs(f)<.001&&(f=1),this.x=(_-d)/f,this.y=(c-m)/f,this.z=(h-l)/f,this.w=Math.acos((s+u+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fv extends or{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const n={width:e,height:t,depth:1};i.encoding!==void 0&&(yn("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===sr?Dt:ti),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Jt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Oc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lr extends fv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Fc extends Jt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gv extends Jt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mi{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,a,o,s){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=a[o+0],m=a[o+1],_=a[o+2],v=a[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(s===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(u!==v||l!==d||c!==m||h!==_){let f=1-s;const p=l*d+c*m+h*_+u*v,E=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const P=Math.sqrt(w),T=Math.atan2(P,p*E);f=Math.sin(f*T)/P,s=Math.sin(s*T)/P}const A=s*E;if(l=l*f+d*A,c=c*f+m*A,h=h*f+_*A,u=u*f+v*A,f===1-s){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,a,o){const s=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=a[o],d=a[o+1],m=a[o+2],_=a[o+3];return e[t]=s*_+h*u+l*m-c*d,e[t+1]=l*_+h*d+c*u-s*m,e[t+2]=c*_+h*m+s*d-l*u,e[t+3]=h*_-s*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),h=s(n/2),u=s(a/2),d=l(i/2),m=l(n/2),_=l(a/2);switch(o){case"XYZ":this._x=d*h*u+c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u-d*m*_;break;case"YXZ":this._x=d*h*u+c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u+d*m*_;break;case"ZXY":this._x=d*h*u-c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u-d*m*_;break;case"ZYX":this._x=d*h*u-c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u+d*m*_;break;case"YZX":this._x=d*h*u+c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u-d*m*_;break;case"XZY":this._x=d*h*u-c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],a=t[8],o=t[1],s=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+s+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(a-c)*m,this._z=(o-n)*m}else if(i>s&&i>u){const m=2*Math.sqrt(1+i-s-u);this._w=(h-l)/m,this._x=.25*m,this._y=(n+o)/m,this._z=(a+c)/m}else if(s>u){const m=2*Math.sqrt(1+s-i-u);this._w=(a-c)/m,this._x=(n+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-i-s);this._w=(o-n)/m,this._x=(a+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,a=e._z,o=e._w,s=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*s+n*c-a*l,this._y=n*h+o*l+a*s-i*c,this._z=a*h+o*c+i*l-n*s,this._w=o*h-i*s-n*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+n*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=n,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*n+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,s),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=a*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(a),i*Math.cos(a),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*n,this.y=a[1]*t+a[4]*i+a[7]*n,this.z=a[2]*t+a[5]*i+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,a=e.elements,o=1/(a[3]*t+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*n+a[12])*o,this.y=(a[1]*t+a[5]*i+a[9]*n+a[13])*o,this.z=(a[2]*t+a[6]*i+a[10]*n+a[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*n-s*i),h=2*(s*t-a*n),u=2*(a*i-o*t);return this.x=t+l*c+o*u-s*h,this.y=i+l*h+s*c-a*u,this.z=n+l*u+a*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n,this.y=a[1]*t+a[5]*i+a[9]*n,this.z=a[2]*t+a[6]*i+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=n*l-a*s,this.y=a*o-i*l,this.z=i*s-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ao.copy(this).projectOnVector(e),this.sub(ao)}reflect(e){return this.sub(ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ao=new N,zc=new Mi;class xn{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,pi):pi.fromBufferAttribute(a,o),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ga.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ga.copy(i.boundingBox)),ga.applyMatrix4(e.matrixWorld),this.union(ga)}const n=e.children;for(let a=0,o=n.length;a<o;a++)this.expandByObject(n[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mn),_a.subVectors(this.max,Mn),Or.subVectors(e.a,Mn),Fr.subVectors(e.b,Mn),zr.subVectors(e.c,Mn),qi.subVectors(Fr,Or),Yi.subVectors(zr,Fr),cr.subVectors(Or,zr);let t=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-cr.z,cr.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,cr.z,0,-cr.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-cr.y,cr.x,0];return!so(t,Or,Fr,zr,_a)||(t=[1,0,0,0,1,0,0,0,1],!so(t,Or,Fr,zr,_a))?!1:(va.crossVectors(qi,Yi),t=[va.x,va.y,va.z],so(t,Or,Fr,zr,_a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new N,new N,new N,new N,new N,new N,new N,new N],pi=new N,ga=new xn,Or=new N,Fr=new N,zr=new N,qi=new N,Yi=new N,cr=new N,Mn=new N,_a=new N,va=new N,hr=new N;function so(r,e,t,i,n){for(let a=0,o=r.length-3;a<=o;a+=3){hr.fromArray(r,a);const s=n.x*Math.abs(hr.x)+n.y*Math.abs(hr.y)+n.z*Math.abs(hr.z),l=e.dot(hr),c=t.dot(hr),h=i.dot(hr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>s)return!1}return!0}const _v=new xn,bn=new N,oo=new N;class Sn{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_v.setFromPoints(e).getCenter(i);let n=0;for(let a=0,o=e.length;a<o;a++)n=Math.max(n,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bn.subVectors(e,this.center);const t=bn.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(bn,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bn.copy(e.center).add(oo)),this.expandByPoint(bn.copy(e.center).sub(oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new N,lo=new N,wa=new N,Ki=new N,co=new N,ya=new N,ho=new N;class uo{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){lo.copy(e).add(t).multiplyScalar(.5),wa.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(lo);const a=e.distanceTo(t)*.5,o=-this.direction.dot(wa),s=Ki.dot(this.direction),l=-Ki.dot(wa),c=Ki.lengthSq(),h=Math.abs(1-o*o);let u,d,m,_;if(h>0)if(u=o*l-s,d=o*s-l,_=a*h,u>=0)if(d>=-_)if(d<=_){const v=1/h;u*=v,d*=v,m=u*(u+o*d+2*s)+d*(o*u+d+2*l)+c}else d=a,u=Math.max(0,-(o*d+s)),m=-u*u+d*(d+2*l)+c;else d=-a,u=Math.max(0,-(o*d+s)),m=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-o*a+s)),d=u>0?-a:Math.min(Math.max(-a,-l),a),m=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-a,-l),a),m=d*(d+2*l)+c):(u=Math.max(0,-(o*a+s)),d=u>0?a:Math.min(Math.max(-a,-l),a),m=-u*u+d*(d+2*l)+c);else d=o>0?-a:a,u=Math.max(0,-(o*d+s)),m=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(lo).addScaledVector(wa,d),m}intersectSphere(e,t){Li.subVectors(e.center,this.origin);const i=Li.dot(this.direction),n=Li.dot(Li)-i*i,a=e.radius*e.radius;if(n>a)return null;const o=Math.sqrt(a-n),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,a,o,s,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(a=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||a>n||((a>i||isNaN(i))&&(i=a),(o<n||isNaN(n))&&(n=o),u>=0?(s=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(s=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||s>n)||((s>i||i!==i)&&(i=s),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,i,n,a){co.subVectors(t,e),ya.subVectors(i,e),ho.crossVectors(co,ya);let o=this.direction.dot(ho),s;if(o>0){if(n)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Ki.subVectors(this.origin,e);const l=s*this.direction.dot(ya.crossVectors(Ki,ya));if(l<0)return null;const c=s*this.direction.dot(co.cross(Ki));if(c<0||l+c>o)return null;const h=-s*Ki.dot(ho);return h<0?null:this.at(h/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,i,n,a,o,s,l,c,h,u,d,m,_,v,f){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,o,s,l,c,h,u,d,m,_,v,f)}set(e,t,i,n,a,o,s,l,c,h,u,d,m,_,v,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=a,p[5]=o,p[9]=s,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=_,p[11]=v,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Hr.setFromMatrixColumn(e,0).length(),a=1/Hr.setFromMatrixColumn(e,1).length(),o=1/Hr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const d=o*h,m=o*u,_=s*h,v=s*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+_*c,t[5]=d-v*c,t[9]=-s*l,t[2]=v-d*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,m=l*u,_=c*h,v=c*u;t[0]=d+v*s,t[4]=_*s-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-s,t[2]=m*s-_,t[6]=v+d*s,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,m=l*u,_=c*h,v=c*u;t[0]=d-v*s,t[4]=-o*u,t[8]=_+m*s,t[1]=m+_*s,t[5]=o*h,t[9]=v-d*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,m=o*u,_=s*h,v=s*u;t[0]=l*h,t[4]=_*c-m,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=m*c-_,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,_=s*l,v=s*c;t[0]=l*h,t[4]=v-d*u,t[8]=_*u+m,t[1]=u,t[5]=o*h,t[9]=-s*h,t[2]=-c*h,t[6]=m*u+_,t[10]=d-v*u}else if(e.order==="XZY"){const d=o*l,m=o*c,_=s*l,v=s*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=o*h,t[9]=m*u-_,t[2]=_*u-m,t[6]=s*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vv,e,wv)}lookAt(e,t,i){const n=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),Ji.crossVectors(i,Zt),Ji.lengthSq()===0&&(Math.abs(i.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),Ji.crossVectors(i,Zt)),Ji.normalize(),xa.crossVectors(Zt,Ji),n[0]=Ji.x,n[4]=xa.x,n[8]=Zt.x,n[1]=Ji.y,n[5]=xa.y,n[9]=Zt.y,n[2]=Ji.z,n[6]=xa.z,n[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,a=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],m=i[13],_=i[2],v=i[6],f=i[10],p=i[14],E=i[3],w=i[7],A=i[11],P=i[15],T=n[0],R=n[4],V=n[8],x=n[12],b=n[1],H=n[5],B=n[9],ee=n[13],D=n[2],O=n[6],Y=n[10],Z=n[14],J=n[3],K=n[7],te=n[11],ne=n[15];return a[0]=o*T+s*b+l*D+c*J,a[4]=o*R+s*H+l*O+c*K,a[8]=o*V+s*B+l*Y+c*te,a[12]=o*x+s*ee+l*Z+c*ne,a[1]=h*T+u*b+d*D+m*J,a[5]=h*R+u*H+d*O+m*K,a[9]=h*V+u*B+d*Y+m*te,a[13]=h*x+u*ee+d*Z+m*ne,a[2]=_*T+v*b+f*D+p*J,a[6]=_*R+v*H+f*O+p*K,a[10]=_*V+v*B+f*Y+p*te,a[14]=_*x+v*ee+f*Z+p*ne,a[3]=E*T+w*b+A*D+P*J,a[7]=E*R+w*H+A*O+P*K,a[11]=E*V+w*B+A*Y+P*te,a[15]=E*x+w*ee+A*Z+P*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14],_=e[3],v=e[7],f=e[11],p=e[15];return _*(+a*l*u-n*c*u-a*s*d+i*c*d+n*s*m-i*l*m)+v*(+t*l*m-t*c*d+a*o*d-n*o*m+n*c*h-a*l*h)+f*(+t*c*u-t*s*m-a*o*u+i*o*m+a*s*h-i*c*h)+p*(-n*s*h-t*l*u+t*s*d+n*o*u-i*o*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],_=e[12],v=e[13],f=e[14],p=e[15],E=u*f*c-v*d*c+v*l*m-s*f*m-u*l*p+s*d*p,w=_*d*c-h*f*c-_*l*m+o*f*m+h*l*p-o*d*p,A=h*v*c-_*u*c+_*s*m-o*v*m-h*s*p+o*u*p,P=_*u*l-h*v*l-_*s*d+o*v*d+h*s*f-o*u*f,T=t*E+i*w+n*A+a*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=E*R,e[1]=(v*d*a-u*f*a-v*n*m+i*f*m+u*n*p-i*d*p)*R,e[2]=(s*f*a-v*l*a+v*n*c-i*f*c-s*n*p+i*l*p)*R,e[3]=(u*l*a-s*d*a-u*n*c+i*d*c+s*n*m-i*l*m)*R,e[4]=w*R,e[5]=(h*f*a-_*d*a+_*n*m-t*f*m-h*n*p+t*d*p)*R,e[6]=(_*l*a-o*f*a-_*n*c+t*f*c+o*n*p-t*l*p)*R,e[7]=(o*d*a-h*l*a+h*n*c-t*d*c-o*n*m+t*l*m)*R,e[8]=A*R,e[9]=(_*u*a-h*v*a-_*i*m+t*v*m+h*i*p-t*u*p)*R,e[10]=(o*v*a-_*s*a+_*i*c-t*v*c-o*i*p+t*s*p)*R,e[11]=(h*s*a-o*u*a-h*i*c+t*u*c+o*i*m-t*s*m)*R,e[12]=P*R,e[13]=(h*v*n-_*u*n+_*i*d-t*v*d-h*i*f+t*u*f)*R,e[14]=(_*s*n-o*v*n-_*i*l+t*v*l+o*i*f-t*s*f)*R,e[15]=(o*u*n-h*s*n+h*i*l-t*u*l-o*i*d+t*s*d)*R,this}scale(e){const t=this.elements,i=e.x,n=e.y,a=e.z;return t[0]*=i,t[4]*=n,t[8]*=a,t[1]*=i,t[5]*=n,t[9]*=a,t[2]*=i,t[6]*=n,t[10]*=a,t[3]*=i,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),a=1-i,o=e.x,s=e.y,l=e.z,c=a*o,h=a*s;return this.set(c*o+i,c*s-n*l,c*l+n*s,0,c*s+n*l,h*s+i,h*l-n*o,0,c*l-n*s,h*l+n*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,a,o){return this.set(1,i,a,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,c=a+a,h=o+o,u=s+s,d=a*c,m=a*h,_=a*u,v=o*h,f=o*u,p=s*u,E=l*c,w=l*h,A=l*u,P=i.x,T=i.y,R=i.z;return n[0]=(1-(v+p))*P,n[1]=(m+A)*P,n[2]=(_-w)*P,n[3]=0,n[4]=(m-A)*T,n[5]=(1-(d+p))*T,n[6]=(f+E)*T,n[7]=0,n[8]=(_+w)*R,n[9]=(f-E)*R,n[10]=(1-(d+v))*R,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let a=Hr.set(n[0],n[1],n[2]).length();const o=Hr.set(n[4],n[5],n[6]).length(),s=Hr.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],mi.copy(this);const l=1/a,c=1/o,h=1/s;return mi.elements[0]*=l,mi.elements[1]*=l,mi.elements[2]*=l,mi.elements[4]*=c,mi.elements[5]*=c,mi.elements[6]*=c,mi.elements[8]*=h,mi.elements[9]*=h,mi.elements[10]*=h,t.setFromRotationMatrix(mi),i.x=a,i.y=o,i.z=s,this}makePerspective(e,t,i,n,a,o,s=Ci){const l=this.elements,c=2*a/(t-e),h=2*a/(i-n),u=(t+e)/(t-e),d=(i+n)/(i-n);let m,_;if(s===Ci)m=-(o+a)/(o-a),_=-2*o*a/(o-a);else if(s===da)m=-o/(o-a),_=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,a,o,s=Ci){const l=this.elements,c=1/(t-e),h=1/(i-n),u=1/(o-a),d=(t+e)*c,m=(i+n)*h;let _,v;if(s===Ci)_=(o+a)*u,v=-2*u;else if(s===da)_=a*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Hr=new N,mi=new _t,vv=new N(0,0,0),wv=new N(1,1,1),Ji=new N,xa=new N,Zt=new N,Hc=new _t,Bc=new Mi;class En{constructor(e=0,t=0,i=0,n=En.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,a=n[0],o=n[4],s=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],m=n[10];switch(t){case"XYZ":this._y=Math.asin(Ut(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Hc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bc.setFromEuler(this),this.setFromQuaternion(Bc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class po{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yv=0;const Gc=new N,Br=new Mi,Ii=new _t,Ma=new N,Tn=new N,xv=new N,Mv=new Mi,kc=new N(1,0,0),Vc=new N(0,1,0),Wc=new N(0,0,1),bv={type:"added"},Sv={type:"removed"};class Pt extends or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=Ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new N,t=new En,i=new Mi,n=new N(1,1,1);function a(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new _t},normalMatrix:{value:new Ke}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(kc,e)}rotateY(e){return this.rotateOnAxis(Vc,e)}rotateZ(e){return this.rotateOnAxis(Wc,e)}translateOnAxis(e,t){return Gc.copy(e).applyQuaternion(this.quaternion),this.position.add(Gc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kc,e)}translateY(e){return this.translateOnAxis(Vc,e)}translateZ(e){return this.translateOnAxis(Wc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ma.copy(e):Ma.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Tn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Tn,Ma,this.up):Ii.lookAt(Ma,Tn,this.up),this.quaternion.setFromRotationMatrix(Ii),n&&(Ii.extractRotation(n.matrixWorld),Br.setFromRotationMatrix(Ii),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sv)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tn,e,xv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tn,Mv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let a=0,o=n.length;a<o;a++){const s=n[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];a(e.shapes,u)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));n.material=s}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let s=0;s<this.children.length;s++)n.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];n.animations.push(a(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),m=o(e.animations),_=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=n,i;function o(s){const l=[];for(const c in s){const h=s[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}Pt.DEFAULT_UP=new N(0,1,0),Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new N,Di=new N,mo=new N,Ui=new N,Gr=new N,kr=new N,jc=new N,fo=new N,go=new N,_o=new N;let ba=!1;class gi{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),fi.subVectors(e,t),n.cross(fi);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,i,n,a){fi.subVectors(n,t),Di.subVectors(i,t),mo.subVectors(e,t);const o=fi.dot(fi),s=fi.dot(Di),l=fi.dot(mo),c=Di.dot(Di),h=Di.dot(mo),u=o*c-s*s;if(u===0)return a.set(0,0,0),null;const d=1/u,m=(c*l-s*h)*d,_=(o*h-s*l)*d;return a.set(1-m-_,_,m)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getUV(e,t,i,n,a,o,s,l){return ba===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ba=!0),this.getInterpolation(e,t,i,n,a,o,s,l)}static getInterpolation(e,t,i,n,a,o,s,l){return this.getBarycoord(e,t,i,n,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ui.x),l.addScaledVector(o,Ui.y),l.addScaledVector(s,Ui.z),l)}static isFrontFacing(e,t,i,n){return fi.subVectors(i,t),Di.subVectors(e,t),fi.cross(Di).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),fi.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,a){return ba===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ba=!0),gi.getInterpolation(e,this.a,this.b,this.c,t,i,n,a)}getInterpolation(e,t,i,n,a){return gi.getInterpolation(e,this.a,this.b,this.c,t,i,n,a)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,a=this.c;let o,s;Gr.subVectors(n,i),kr.subVectors(a,i),fo.subVectors(e,i);const l=Gr.dot(fo),c=kr.dot(fo);if(l<=0&&c<=0)return t.copy(i);go.subVectors(e,n);const h=Gr.dot(go),u=kr.dot(go);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Gr,o);_o.subVectors(e,a);const m=Gr.dot(_o),_=kr.dot(_o);if(_>=0&&m<=_)return t.copy(a);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return s=c/(c-_),t.copy(i).addScaledVector(kr,s);const f=h*_-m*u;if(f<=0&&u-h>=0&&m-_>=0)return jc.subVectors(a,n),s=(u-h)/(u-h+(m-_)),t.copy(n).addScaledVector(jc,s);const p=1/(f+v+d);return o=v*p,s=d*p,t.copy(i).addScaledVector(Gr,o).addScaledVector(kr,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function vo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ie{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=ot.workingColorSpace){if(e=eo(e,1),t=Ut(t,0,1),i=Ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,o=2*i-a;this.r=vo(o,a,e+1/3),this.g=vo(o,a,e),this.b=vo(o,a,e-1/3)}return ot.toWorkingColorSpace(this,n),this}setStyle(e,t=Dt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=n[1],s=n[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const i=Xc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return ot.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Ut(Ft.r*255,0,255))*65536+Math.round(Ut(Ft.g*255,0,255))*256+Math.round(Ut(Ft.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(Ft.copy(this),t);const i=Ft.r,n=Ft.g,a=Ft.b,o=Math.max(i,n,a),s=Math.min(i,n,a);let l,c;const h=(s+o)/2;if(s===o)l=0,c=0;else{const u=o-s;switch(c=h<=.5?u/(o+s):u/(2-o-s),o){case i:l=(n-a)/u+(n<a?6:0);break;case n:l=(a-i)/u+2;break;case a:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Dt){ot.fromWorkingColorSpace(Ft.copy(this),e);const t=Ft.r,i=Ft.g,n=Ft.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+t,Zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zi),e.getHSL(Sa);const i=wn(Zi.h,Sa.h,t),n=wn(Zi.s,Sa.s,t),a=wn(Zi.l,Sa.l,t);return this.setHSL(i,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*n,this.g=a[1]*t+a[4]*i+a[7]*n,this.b=a[2]*t+a[5]*i+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ie;Ie.NAMES=Xc;let Ev=0;class An extends or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=Ir(),this.name="",this.type="Material",this.blending=Ar,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hs,this.blendDst=Bs,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(i.blending=this.blending),this.side!==Gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hs&&(i.blendSrc=this.blendSrc),this.blendDst!==Bs&&(i.blendDst=this.blendDst),this.blendEquation!==rr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==aa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(t){const a=n(e.textures),o=n(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rn extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new N,Ea=new Le;class kt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Rc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ea.fromBufferAttribute(this,t),Ea.applyMatrix3(e),this.setXY(t,Ea.x,Ea.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Dr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,a){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),n=Gt(n,this.array),a=Gt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rc&&(e.usage=this.usage),e}}class qc extends kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Yc extends kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Lt extends kt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Tv=0;const ii=new _t,wo=new Pt,Vr=new N,Qt=new xn,Cn=new xn,It=new N;class ri extends or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=Ir(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lc(e)?Yc:qc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ke().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,i){return ii.makeTranslation(e,t,i),this.applyMatrix4(ii),this}scale(e,t,i){return ii.makeScale(e,t,i),this.applyMatrix4(ii),this}lookAt(e){return wo.lookAt(e),wo.updateMatrix(),this.applyMatrix4(wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const a=t[i];Qt.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(Qt.min,Cn.min),Qt.expandByPoint(It),It.addVectors(Qt.max,Cn.max),Qt.expandByPoint(It)):(Qt.expandByPoint(Cn.min),Qt.expandByPoint(Cn.max))}Qt.getCenter(i);let n=0;for(let a=0,o=e.count;a<o;a++)It.fromBufferAttribute(e,a),n=Math.max(n,i.distanceToSquared(It));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],l=this.morphTargetsRelative;for(let c=0,h=s.count;c<h;c++)It.fromBufferAttribute(s,c),l&&(Vr.fromBufferAttribute(e,c),It.add(Vr)),n=Math.max(n,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,a=t.normal.array,o=t.uv.array,s=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<s;b++)c[b]=new N,h[b]=new N;const u=new N,d=new N,m=new N,_=new Le,v=new Le,f=new Le,p=new N,E=new N;function w(b,H,B){u.fromArray(n,b*3),d.fromArray(n,H*3),m.fromArray(n,B*3),_.fromArray(o,b*2),v.fromArray(o,H*2),f.fromArray(o,B*2),d.sub(u),m.sub(u),v.sub(_),f.sub(_);const ee=1/(v.x*f.y-f.x*v.y);isFinite(ee)&&(p.copy(d).multiplyScalar(f.y).addScaledVector(m,-v.y).multiplyScalar(ee),E.copy(m).multiplyScalar(v.x).addScaledVector(d,-f.x).multiplyScalar(ee),c[b].add(p),c[H].add(p),c[B].add(p),h[b].add(E),h[H].add(E),h[B].add(E))}let A=this.groups;A.length===0&&(A=[{start:0,count:i.length}]);for(let b=0,H=A.length;b<H;++b){const B=A[b],ee=B.start,D=B.count;for(let O=ee,Y=ee+D;O<Y;O+=3)w(i[O+0],i[O+1],i[O+2])}const P=new N,T=new N,R=new N,V=new N;function x(b){R.fromArray(a,b*3),V.copy(R);const H=c[b];P.copy(H),P.sub(R.multiplyScalar(R.dot(H))).normalize(),T.crossVectors(V,H);const B=T.dot(h[b])<0?-1:1;l[b*4]=P.x,l[b*4+1]=P.y,l[b*4+2]=P.z,l[b*4+3]=B}for(let b=0,H=A.length;b<H;++b){const B=A[b],ee=B.start,D=B.count;for(let O=ee,Y=ee+D;O<Y;O+=3)x(i[O+0]),x(i[O+1]),x(i[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const n=new N,a=new N,o=new N,s=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),v=e.getX(d+1),f=e.getX(d+2);n.fromBufferAttribute(t,_),a.fromBufferAttribute(t,v),o.fromBufferAttribute(t,f),h.subVectors(o,a),u.subVectors(n,a),h.cross(u),s.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,f),s.add(h),l.add(h),c.add(h),i.setXYZ(_,s.x,s.y,s.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)n.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,a),u.subVectors(n,a),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(s,l){const c=s.array,h=s.itemSize,u=s.normalized,d=new c.constructor(l.length*h);let m=0,_=0;for(let v=0,f=l.length;v<f;v++){s.isInterleavedBufferAttribute?m=l[v]*s.data.stride+s.offset:m=l[v]*h;for(let p=0;p<h;p++)d[_++]=c[m++]}return new kt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ri,i=this.index.array,n=this.attributes;for(const s in n){const l=n[s],c=e(l,i);t.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=e(d,i);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(n[l]=h,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],u=a[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kc=new _t,ur=new uo,Ta=new Sn,Jc=new N,Wr=new N,jr=new N,Xr=new N,yo=new N,Aa=new N,Ra=new Le,Ca=new Le,Pa=new Le,Zc=new N,Qc=new N,$c=new N,La=new N,Ia=new N;class qt extends Pt{constructor(e=new ri,t=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const o=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const s=this.morphTargetInfluences;if(a&&s){Aa.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=s[l],u=a[l];h!==0&&(yo.fromBufferAttribute(u,e),o?Aa.addScaledVector(yo,h):Aa.addScaledVector(yo.sub(t),h))}t.add(Aa)}return t}raycast(e,t){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(a),ur.copy(e.ray).recast(e.near),!(Ta.containsPoint(ur.origin)===!1&&(ur.intersectSphere(Ta,Jc)===null||ur.origin.distanceToSquared(Jc)>(e.far-e.near)**2))&&(Kc.copy(a).invert(),ur.copy(e.ray).applyMatrix4(Kc),!(i.boundingBox!==null&&ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ur)))}_computeIntersections(e,t,i){let n;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,m=a.drawRange;if(s!==null)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const f=d[_],p=o[f.materialIndex],E=Math.max(f.start,m.start),w=Math.min(s.count,Math.min(f.start+f.count,m.start+m.count));for(let A=E,P=w;A<P;A+=3){const T=s.getX(A),R=s.getX(A+1),V=s.getX(A+2);n=Da(this,p,e,i,c,h,u,T,R,V),n&&(n.faceIndex=Math.floor(A/3),n.face.materialIndex=f.materialIndex,t.push(n))}}else{const _=Math.max(0,m.start),v=Math.min(s.count,m.start+m.count);for(let f=_,p=v;f<p;f+=3){const E=s.getX(f),w=s.getX(f+1),A=s.getX(f+2);n=Da(this,o,e,i,c,h,u,E,w,A),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const f=d[_],p=o[f.materialIndex],E=Math.max(f.start,m.start),w=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let A=E,P=w;A<P;A+=3){const T=A,R=A+1,V=A+2;n=Da(this,p,e,i,c,h,u,T,R,V),n&&(n.faceIndex=Math.floor(A/3),n.face.materialIndex=f.materialIndex,t.push(n))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let f=_,p=v;f<p;f+=3){const E=f,w=f+1,A=f+2;n=Da(this,o,e,i,c,h,u,E,w,A),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}}}}function Av(r,e,t,i,n,a,o,s){let l;if(e.side===Xt?l=i.intersectTriangle(o,a,n,!0,s):l=i.intersectTriangle(n,a,o,e.side===Gi,s),l===null)return null;Ia.copy(s),Ia.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ia);return c<t.near||c>t.far?null:{distance:c,point:Ia.clone(),object:r}}function Da(r,e,t,i,n,a,o,s,l,c){r.getVertexPosition(s,Wr),r.getVertexPosition(l,jr),r.getVertexPosition(c,Xr);const h=Av(r,e,t,i,Wr,jr,Xr,La);if(h){n&&(Ra.fromBufferAttribute(n,s),Ca.fromBufferAttribute(n,l),Pa.fromBufferAttribute(n,c),h.uv=gi.getInterpolation(La,Wr,jr,Xr,Ra,Ca,Pa,new Le)),a&&(Ra.fromBufferAttribute(a,s),Ca.fromBufferAttribute(a,l),Pa.fromBufferAttribute(a,c),h.uv1=gi.getInterpolation(La,Wr,jr,Xr,Ra,Ca,Pa,new Le),h.uv2=h.uv1),o&&(Zc.fromBufferAttribute(o,s),Qc.fromBufferAttribute(o,l),$c.fromBufferAttribute(o,c),h.normal=gi.getInterpolation(La,Wr,jr,Xr,Zc,Qc,$c,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:s,b:l,c,normal:new N,materialIndex:0};gi.getNormal(Wr,jr,Xr,u.normal),h.face=u}return h}class qr extends ri{constructor(e=1,t=1,i=1,n=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:a,depthSegments:o};const s=this;n=Math.floor(n),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,m=0;_("z","y","x",-1,-1,i,t,e,o,a,0),_("z","y","x",1,-1,i,t,-e,o,a,1),_("x","z","y",1,1,e,i,t,n,o,2),_("x","z","y",1,-1,e,i,-t,n,o,3),_("x","y","z",1,-1,e,t,i,n,a,4),_("x","y","z",-1,-1,e,t,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(u,2));function _(v,f,p,E,w,A,P,T,R,V,x){const b=A/R,H=P/V,B=A/2,ee=P/2,D=T/2,O=R+1,Y=V+1;let Z=0,J=0;const K=new N;for(let te=0;te<Y;te++){const ne=te*H-ee;for(let pe=0;pe<O;pe++){const j=pe*b-B;K[v]=j*E,K[f]=ne*w,K[p]=D,c.push(K.x,K.y,K.z),K[v]=0,K[f]=0,K[p]=T>0?1:-1,h.push(K.x,K.y,K.z),u.push(pe/R),u.push(1-te/V),Z+=1}}for(let te=0;te<V;te++)for(let ne=0;ne<R;ne++){const pe=d+ne+O*te,j=d+ne+O*(te+1),$=d+(ne+1)+O*(te+1),ve=d+(ne+1)+O*te;l.push(pe,j,ve),l.push(j,$,ve),J+=6}s.addGroup(m,J,x),m+=J,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yr(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Vt(r){const e={};for(let t=0;t<r.length;t++){const i=Yr(r[t]);for(const n in i)e[n]=i[n]}return e}function Rv(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function eh(r){return r.getRenderTarget()===null?r.outputColorSpace:ot.workingColorSpace}const Cv={clone:Yr,merge:Vt};var Pv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dr extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pv,this.fragmentShader=Lv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yr(e.uniforms),this.uniformsGroups=Rv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class th extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ni extends th{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_n*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vn*2*Math.atan(Math.tan(_n*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_n*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,a=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Kr=-90,Jr=1;class Iv extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new ni(Kr,Jr,e,t);n.layers=this.layers,this.add(n);const a=new ni(Kr,Jr,e,t);a.layers=this.layers,this.add(a);const o=new ni(Kr,Jr,e,t);o.layers=this.layers,this.add(o);const s=new ni(Kr,Jr,e,t);s.layers=this.layers,this.add(s);const l=new ni(Kr,Jr,e,t);l.layers=this.layers,this.add(l);const c=new ni(Kr,Jr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,a,o,s,l]=t;for(const c of t)this.remove(c);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===da)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,a),e.setRenderTarget(i,1,n),e.render(t,o),e.setRenderTarget(i,2,n),e.render(t,s),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class ih extends Jt{constructor(e,t,i,n,a,o,s,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Rr,super(e,t,i,n,a,o,s,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dv extends lr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];t.encoding!==void 0&&(yn("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===sr?Dt:ti),this.texture=new ih(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ei}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new qr(5,5,5),a=new dr({name:"CubemapFromEquirect",uniforms:Yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:ki});a.uniforms.tEquirect.value=t;const o=new qt(n,a),s=t.minFilter;return t.minFilter===fn&&(t.minFilter=ei),new Iv(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,n){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(a)}}const xo=new N,Uv=new N,Nv=new Ke;class Qi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=xo.subVectors(i,t).cross(Uv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(xo),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Nv.getNormalMatrix(e),n=this.coplanarPoint(xo).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new Sn,Ua=new N;class Mo{constructor(e=new Qi,t=new Qi,i=new Qi,n=new Qi,a=new Qi,o=new Qi){this.planes=[e,t,i,n,a,o]}set(e,t,i,n,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(n),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ci){const i=this.planes,n=e.elements,a=n[0],o=n[1],s=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],m=n[8],_=n[9],v=n[10],f=n[11],p=n[12],E=n[13],w=n[14],A=n[15];if(i[0].setComponents(l-a,d-c,f-m,A-p).normalize(),i[1].setComponents(l+a,d+c,f+m,A+p).normalize(),i[2].setComponents(l+o,d+h,f+_,A+E).normalize(),i[3].setComponents(l-o,d-h,f-_,A-E).normalize(),i[4].setComponents(l-s,d-u,f-v,A-w).normalize(),t===Ci)i[5].setComponents(l+s,d+u,f+v,A+w).normalize();else if(t===da)i[5].setComponents(s,u,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){return pr.center.set(0,0,0),pr.radius=.7071067811865476,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Ua.x=n.normal.x>0?e.max.x:e.min.x,Ua.y=n.normal.y>0?e.max.y:e.min.y,Ua.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rh(){let r=null,e=!1,t=null,i=null;function n(a,o){t(a,o),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function Ov(r,e){const t=e.isWebGL2,i=new WeakMap;function n(c,h){const u=c.array,d=c.usage,m=u.byteLength,_=r.createBuffer();r.bindBuffer(h,_),r.bufferData(h,u,d),c.onUploadCallback();let v;if(u instanceof Float32Array)v=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=r.SHORT;else if(u instanceof Uint32Array)v=r.UNSIGNED_INT;else if(u instanceof Int32Array)v=r.INT;else if(u instanceof Int8Array)v=r.BYTE;else if(u instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function a(c,h,u){const d=h.array,m=h._updateRange,_=h.updateRanges;if(r.bindBuffer(u,c),m.count===-1&&_.length===0&&r.bufferSubData(u,0,d),_.length!==0){for(let v=0,f=_.length;v<f;v++){const p=_[v];t?r.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):r.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}m.count!==-1&&(t?r.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(r.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);if(u===void 0)i.set(c,n(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(u.buffer,c,h),u.version=c.version}}return{get:o,remove:s,update:l}}class Na extends ri{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const a=e/2,o=t/2,s=Math.floor(i),l=Math.floor(n),c=s+1,h=l+1,u=e/s,d=t/l,m=[],_=[],v=[],f=[];for(let p=0;p<h;p++){const E=p*d-o;for(let w=0;w<c;w++){const A=w*u-a;_.push(A,-E,0),v.push(0,0,1),f.push(w/s),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<s;E++){const w=E+c*p,A=E+c*(p+1),P=E+1+c*(p+1),T=E+1+c*p;m.push(w,A,T),m.push(A,P,T)}this.setIndex(m),this.setAttribute("position",new Lt(_,3)),this.setAttribute("normal",new Lt(v,3)),this.setAttribute("uv",new Lt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zv=`#ifdef USE_ALPHAHASH
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
#endif`,Hv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,kv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vv=`#ifdef USE_AOMAP
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
#endif`,Wv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jv=`#ifdef USE_BATCHING
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
#endif`,Xv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,qv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jv=`#ifdef USE_IRIDESCENCE
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
#endif`,Zv=`#ifdef USE_BUMPMAP
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
#endif`,Qv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$v=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ew=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,aw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sw=`#define PI 3.141592653589793
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
} // validated`,ow=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lw=`vec3 transformedNormal = objectNormal;
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
#endif`,cw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pw="gl_FragColor = linearToOutputTexel( gl_FragColor );",mw=`
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
}`,fw=`#ifdef USE_ENVMAP
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
#endif`,gw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_w=`#ifdef USE_ENVMAP
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
#endif`,vw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ww=`#ifdef USE_ENVMAP
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
#endif`,yw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sw=`#ifdef USE_GRADIENTMAP
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
}`,Ew=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Tw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Aw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cw=`uniform bool receiveShadow;
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
#endif`,Pw=`#ifdef USE_ENVMAP
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
#endif`,Lw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Iw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nw=`PhysicalMaterial material;
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
#endif`,Ow=`struct PhysicalMaterial {
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
}`,Fw=`
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
#endif`,zw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Vw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ww=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qw=`#if defined( USE_POINTS_UV )
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
#endif`,Yw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zw=`#ifdef USE_MORPHNORMALS
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
#endif`,Qw=`#ifdef USE_MORPHTARGETS
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
#endif`,$w=`#ifdef USE_MORPHTARGETS
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
#endif`,ey=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ty=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ny=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ay=`#ifdef USE_NORMALMAP
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
#endif`,sy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ly=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,py=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,my=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_y=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xy=`float getShadowMask() {
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
}`,My=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,by=`#ifdef USE_SKINNING
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
#endif`,Sy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ey=`#ifdef USE_SKINNING
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
#endif`,Ty=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ay=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ry=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Py=`#ifdef USE_TRANSMISSION
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
#endif`,Ly=`#ifdef USE_TRANSMISSION
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
#endif`,Iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ny=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Oy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fy=`uniform sampler2D t2D;
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
}`,zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,By=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ky=`#include <common>
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
}`,Vy=`#if DEPTH_PACKING == 3200
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
}`,Wy=`#define DISTANCE
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
}`,jy=`#define DISTANCE
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
}`,Xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yy=`uniform float scale;
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
}`,Ky=`uniform vec3 diffuse;
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
}`,Jy=`#include <common>
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
}`,Zy=`uniform vec3 diffuse;
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
}`,Qy=`#define LAMBERT
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
}`,$y=`#define LAMBERT
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
}`,ex=`#define MATCAP
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
}`,tx=`#define MATCAP
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
}`,ix=`#define NORMAL
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
}`,rx=`#define NORMAL
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
}`,nx=`#define PHONG
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
}`,ax=`#define PHONG
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
}`,sx=`#define STANDARD
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
}`,ox=`#define STANDARD
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
}`,lx=`#define TOON
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
}`,cx=`#define TOON
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
}`,hx=`uniform float size;
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
}`,ux=`uniform vec3 diffuse;
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
}`,dx=`#include <common>
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
}`,px=`uniform vec3 color;
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
}`,mx=`uniform float rotation;
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
}`,fx=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Fv,alphahash_pars_fragment:zv,alphamap_fragment:Hv,alphamap_pars_fragment:Bv,alphatest_fragment:Gv,alphatest_pars_fragment:kv,aomap_fragment:Vv,aomap_pars_fragment:Wv,batching_pars_vertex:jv,batching_vertex:Xv,begin_vertex:qv,beginnormal_vertex:Yv,bsdfs:Kv,iridescence_fragment:Jv,bumpmap_pars_fragment:Zv,clipping_planes_fragment:Qv,clipping_planes_pars_fragment:$v,clipping_planes_pars_vertex:ew,clipping_planes_vertex:tw,color_fragment:iw,color_pars_fragment:rw,color_pars_vertex:nw,color_vertex:aw,common:sw,cube_uv_reflection_fragment:ow,defaultnormal_vertex:lw,displacementmap_pars_vertex:cw,displacementmap_vertex:hw,emissivemap_fragment:uw,emissivemap_pars_fragment:dw,colorspace_fragment:pw,colorspace_pars_fragment:mw,envmap_fragment:fw,envmap_common_pars_fragment:gw,envmap_pars_fragment:_w,envmap_pars_vertex:vw,envmap_physical_pars_fragment:Pw,envmap_vertex:ww,fog_vertex:yw,fog_pars_vertex:xw,fog_fragment:Mw,fog_pars_fragment:bw,gradientmap_pars_fragment:Sw,lightmap_fragment:Ew,lightmap_pars_fragment:Tw,lights_lambert_fragment:Aw,lights_lambert_pars_fragment:Rw,lights_pars_begin:Cw,lights_toon_fragment:Lw,lights_toon_pars_fragment:Iw,lights_phong_fragment:Dw,lights_phong_pars_fragment:Uw,lights_physical_fragment:Nw,lights_physical_pars_fragment:Ow,lights_fragment_begin:Fw,lights_fragment_maps:zw,lights_fragment_end:Hw,logdepthbuf_fragment:Bw,logdepthbuf_pars_fragment:Gw,logdepthbuf_pars_vertex:kw,logdepthbuf_vertex:Vw,map_fragment:Ww,map_pars_fragment:jw,map_particle_fragment:Xw,map_particle_pars_fragment:qw,metalnessmap_fragment:Yw,metalnessmap_pars_fragment:Kw,morphcolor_vertex:Jw,morphnormal_vertex:Zw,morphtarget_pars_vertex:Qw,morphtarget_vertex:$w,normal_fragment_begin:ey,normal_fragment_maps:ty,normal_pars_fragment:iy,normal_pars_vertex:ry,normal_vertex:ny,normalmap_pars_fragment:ay,clearcoat_normal_fragment_begin:sy,clearcoat_normal_fragment_maps:oy,clearcoat_pars_fragment:ly,iridescence_pars_fragment:cy,opaque_fragment:hy,packing:uy,premultiplied_alpha_fragment:dy,project_vertex:py,dithering_fragment:my,dithering_pars_fragment:fy,roughnessmap_fragment:gy,roughnessmap_pars_fragment:_y,shadowmap_pars_fragment:vy,shadowmap_pars_vertex:wy,shadowmap_vertex:yy,shadowmask_pars_fragment:xy,skinbase_vertex:My,skinning_pars_vertex:by,skinning_vertex:Sy,skinnormal_vertex:Ey,specularmap_fragment:Ty,specularmap_pars_fragment:Ay,tonemapping_fragment:Ry,tonemapping_pars_fragment:Cy,transmission_fragment:Py,transmission_pars_fragment:Ly,uv_pars_fragment:Iy,uv_pars_vertex:Dy,uv_vertex:Uy,worldpos_vertex:Ny,background_vert:Oy,background_frag:Fy,backgroundCube_vert:zy,backgroundCube_frag:Hy,cube_vert:By,cube_frag:Gy,depth_vert:ky,depth_frag:Vy,distanceRGBA_vert:Wy,distanceRGBA_frag:jy,equirect_vert:Xy,equirect_frag:qy,linedashed_vert:Yy,linedashed_frag:Ky,meshbasic_vert:Jy,meshbasic_frag:Zy,meshlambert_vert:Qy,meshlambert_frag:$y,meshmatcap_vert:ex,meshmatcap_frag:tx,meshnormal_vert:ix,meshnormal_frag:rx,meshphong_vert:nx,meshphong_frag:ax,meshphysical_vert:sx,meshphysical_frag:ox,meshtoon_vert:lx,meshtoon_frag:cx,points_vert:hx,points_frag:ux,shadow_vert:dx,shadow_frag:px,sprite_vert:mx,sprite_frag:fx},ue={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},bi={basic:{uniforms:Vt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Vt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ie(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Vt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Vt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Vt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ie(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Vt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Vt([ue.points,ue.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Vt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Vt([ue.common,ue.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Vt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Vt([ue.sprite,ue.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Vt([ue.common,ue.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Vt([ue.lights,ue.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};bi.physical={uniforms:Vt([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Oa={r:0,b:0,g:0};function gx(r,e,t,i,n,a,o){const s=new Ie(0);let l=a===!0?0:1,c,h,u=null,d=0,m=null;function _(f,p){let E=!1,w=p.isScene===!0?p.background:null;w&&w.isTexture&&(w=(p.backgroundBlurriness>0?t:e).get(w)),w===null?v(s,l):w&&w.isColor&&(v(w,1),E=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(r.autoClear||E)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),w&&(w.isCubeTexture||w.mapping===sa)?(h===void 0&&(h=new qt(new qr(1,1,1),new dr({name:"BackgroundCubeMaterial",uniforms:Yr(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ot.getTransfer(w.colorSpace)!==ut,(u!==w||d!==w.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,m=r.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new qt(new Na(2,2),new dr({name:"BackgroundMaterial",uniforms:Yr(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ot.getTransfer(w.colorSpace)!==ut,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,u=w,d=w.version,m=r.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function v(f,p){f.getRGB(Oa,eh(r)),i.buffers.color.setClear(Oa.r,Oa.g,Oa.b,p,o)}return{getClearColor:function(){return s},setClearColor:function(f,p=1){s.set(f),l=p,v(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,v(s,l)},render:_}}function _x(r,e,t,i){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,s={},l=f(null);let c=l,h=!1;function u(D,O,Y,Z,J){let K=!1;if(o){const te=v(Z,Y,O);c!==te&&(c=te,m(c.object)),K=p(D,Z,Y,J),K&&E(D,Z,Y,J)}else{const te=O.wireframe===!0;(c.geometry!==Z.id||c.program!==Y.id||c.wireframe!==te)&&(c.geometry=Z.id,c.program=Y.id,c.wireframe=te,K=!0)}J!==null&&t.update(J,r.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,V(D,O,Y,Z),J!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function d(){return i.isWebGL2?r.createVertexArray():a.createVertexArrayOES()}function m(D){return i.isWebGL2?r.bindVertexArray(D):a.bindVertexArrayOES(D)}function _(D){return i.isWebGL2?r.deleteVertexArray(D):a.deleteVertexArrayOES(D)}function v(D,O,Y){const Z=Y.wireframe===!0;let J=s[D.id];J===void 0&&(J={},s[D.id]=J);let K=J[O.id];K===void 0&&(K={},J[O.id]=K);let te=K[Z];return te===void 0&&(te=f(d()),K[Z]=te),te}function f(D){const O=[],Y=[],Z=[];for(let J=0;J<n;J++)O[J]=0,Y[J]=0,Z[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Y,attributeDivisors:Z,object:D,attributes:{},index:null}}function p(D,O,Y,Z){const J=c.attributes,K=O.attributes;let te=0;const ne=Y.getAttributes();for(const pe in ne)if(ne[pe].location>=0){const j=J[pe];let $=K[pe];if($===void 0&&(pe==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),pe==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),j===void 0||j.attribute!==$||$&&j.data!==$.data)return!0;te++}return c.attributesNum!==te||c.index!==Z}function E(D,O,Y,Z){const J={},K=O.attributes;let te=0;const ne=Y.getAttributes();for(const pe in ne)if(ne[pe].location>=0){let j=K[pe];j===void 0&&(pe==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),pe==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));const $={};$.attribute=j,j&&j.data&&($.data=j.data),J[pe]=$,te++}c.attributes=J,c.attributesNum=te,c.index=Z}function w(){const D=c.newAttributes;for(let O=0,Y=D.length;O<Y;O++)D[O]=0}function A(D){P(D,0)}function P(D,O){const Y=c.newAttributes,Z=c.enabledAttributes,J=c.attributeDivisors;Y[D]=1,Z[D]===0&&(r.enableVertexAttribArray(D),Z[D]=1),J[D]!==O&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,O),J[D]=O)}function T(){const D=c.newAttributes,O=c.enabledAttributes;for(let Y=0,Z=O.length;Y<Z;Y++)O[Y]!==D[Y]&&(r.disableVertexAttribArray(Y),O[Y]=0)}function R(D,O,Y,Z,J,K,te){te===!0?r.vertexAttribIPointer(D,O,Y,J,K):r.vertexAttribPointer(D,O,Y,Z,J,K)}function V(D,O,Y,Z){if(i.isWebGL2===!1&&(D.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const J=Z.attributes,K=Y.getAttributes(),te=O.defaultAttributeValues;for(const ne in K){const pe=K[ne];if(pe.location>=0){let j=J[ne];if(j===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){const $=j.normalized,ve=j.itemSize,we=t.get(j);if(we===void 0)continue;const ye=we.buffer,De=we.type,Ue=we.bytesPerElement,Te=i.isWebGL2===!0&&(De===r.INT||De===r.UNSIGNED_INT||j.gpuType===Xl);if(j.isInterleavedBufferAttribute){const Ge=j.data,k=Ge.stride,dt=j.offset;if(Ge.isInstancedInterleavedBuffer){for(let Se=0;Se<pe.locationSize;Se++)P(pe.location+Se,Ge.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ge.meshPerAttribute*Ge.count)}else for(let Se=0;Se<pe.locationSize;Se++)A(pe.location+Se);r.bindBuffer(r.ARRAY_BUFFER,ye);for(let Se=0;Se<pe.locationSize;Se++)R(pe.location+Se,ve/pe.locationSize,De,$,k*Ue,(dt+ve/pe.locationSize*Se)*Ue,Te)}else{if(j.isInstancedBufferAttribute){for(let Ge=0;Ge<pe.locationSize;Ge++)P(pe.location+Ge,j.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ge=0;Ge<pe.locationSize;Ge++)A(pe.location+Ge);r.bindBuffer(r.ARRAY_BUFFER,ye);for(let Ge=0;Ge<pe.locationSize;Ge++)R(pe.location+Ge,ve/pe.locationSize,De,$,ve*Ue,ve/pe.locationSize*Ge*Ue,Te)}}else if(te!==void 0){const $=te[ne];if($!==void 0)switch($.length){case 2:r.vertexAttrib2fv(pe.location,$);break;case 3:r.vertexAttrib3fv(pe.location,$);break;case 4:r.vertexAttrib4fv(pe.location,$);break;default:r.vertexAttrib1fv(pe.location,$)}}}}T()}function x(){B();for(const D in s){const O=s[D];for(const Y in O){const Z=O[Y];for(const J in Z)_(Z[J].object),delete Z[J];delete O[Y]}delete s[D]}}function b(D){if(s[D.id]===void 0)return;const O=s[D.id];for(const Y in O){const Z=O[Y];for(const J in Z)_(Z[J].object),delete Z[J];delete O[Y]}delete s[D.id]}function H(D){for(const O in s){const Y=s[O];if(Y[D.id]===void 0)continue;const Z=Y[D.id];for(const J in Z)_(Z[J].object),delete Z[J];delete Y[D.id]}}function B(){ee(),h=!0,c!==l&&(c=l,m(c.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:B,resetDefaultState:ee,dispose:x,releaseStatesOfGeometry:b,releaseStatesOfProgram:H,initAttributes:w,enableAttribute:A,disableUnusedAttributes:T}}function vx(r,e,t,i){const n=i.isWebGL2;let a;function o(h){a=h}function s(h,u){r.drawArrays(a,h,u),t.update(u,a,1)}function l(h,u,d){if(d===0)return;let m,_;if(n)m=r,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](a,h,u,d),t.update(u,a,d)}function c(h,u,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<d;_++)this.render(h[_],u[_]);else{m.multiDrawArraysWEBGL(a,h,0,u,0,d);let _=0;for(let v=0;v<d;v++)_+=u[v];t.update(_,a,1)}}this.setMode=o,this.render=s,this.renderInstances=l,this.renderMultiDraw=c}function wx(r,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),f=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),E=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=d>0,A=o||e.has("OES_texture_float"),P=w&&A,T=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:E,vertexTextures:w,floatFragmentTextures:A,floatVertexTextures:P,maxSamples:T}}function yx(r){const e=this;let t=null,i=0,n=!1,a=!1;const o=new Qi,s=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||i!==0||n;return n=d,i=u.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){const _=u.clippingPlanes,v=u.clipIntersection,f=u.clipShadows,p=r.get(u);if(!n||_===null||_.length===0||a&&!f)a?h(null):c();else{const E=a?0:i,w=E*4;let A=p.clippingState||null;l.value=A,A=h(_,d,w,m);for(let P=0;P!==w;++P)A[P]=t[P];p.clippingState=A,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,m,_){const v=u!==null?u.length:0;let f=null;if(v!==0){if(f=l.value,_!==!0||f===null){const p=m+v*4,E=d.matrixWorldInverse;s.getNormalMatrix(E),(f===null||f.length<p)&&(f=new Float32Array(p));for(let w=0,A=m;w!==v;++w,A+=4)o.copy(u[w]).applyMatrix4(E,s),o.normal.toArray(f,A),f[A+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}function xx(r){let e=new WeakMap;function t(o,s){return s===Gs?o.mapping=Rr:s===ks&&(o.mapping=Cr),o}function i(o){if(o&&o.isTexture){const s=o.mapping;if(s===Gs||s===ks)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Dv(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){const s=o.target;s.removeEventListener("dispose",n);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class nh extends th{constructor(e=-1,t=1,i=1,n=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=h*this.view.offsetY,l=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zr=4,ah=[.125,.215,.35,.446,.526,.582],mr=20,bo=new nh,sh=new Ie;let So=null,Eo=0,To=0;const fr=(1+Math.sqrt(5))/2,Qr=1/fr,oh=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,fr,Qr),new N(0,fr,-Qr),new N(Qr,0,fr),new N(-Qr,0,fr),new N(fr,Qr,0),new N(-fr,Qr,0)];class lh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){So=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,n,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(So,Eo,To),e.scissorTest=!1,Fa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rr||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),So=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:gn,format:di,colorSpace:Ri,depthBuffer:!1},n=ch(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ch(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mx(a)),this._blurMaterial=bx(a,e,t)}return n}_compileMaterial(e){const t=new qt(this._lodPlanes[0],e);this._renderer.compile(t,bo)}_sceneToCubeUV(e,t,i,n){const a=new ni(90,1,t,i),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(sh),l.toneMapping=Vi,l.autoClear=!1;const u=new Rn({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),d=new qt(new qr,u);let m=!1;const _=e.background;_?_.isColor&&(u.color.copy(_),e.background=null,m=!0):(u.color.copy(sh),m=!0);for(let v=0;v<6;v++){const f=v%3;f===0?(a.up.set(0,o[v],0),a.lookAt(s[v],0,0)):f===1?(a.up.set(0,0,o[v]),a.lookAt(0,s[v],0)):(a.up.set(0,o[v],0),a.lookAt(0,0,s[v]));const p=this._cubeSize;Fa(n,f*p,v>2?p:0,p,p),l.setRenderTarget(n),m&&l.render(d,a),l.render(e,a)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Rr||e.mapping===Cr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hh());const a=n?this._cubemapMaterial:this._equirectMaterial,o=new qt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;Fa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,bo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=oh[(n-1)%oh.length];this._blur(e,n-1,n,a,o)}t.autoClear=i}_blur(e,t,i,n,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",a),this._halfBlur(o,e,i,i,n,"longitudinal",a)}_halfBlur(e,t,i,n,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new qt(this._lodPlanes[n],c),d=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*mr-1),v=a/_,f=isFinite(a)?1+Math.floor(h*v):mr;f>mr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${mr}`);const p=[];let E=0;for(let R=0;R<mr;++R){const V=R/v,x=Math.exp(-V*V/2);p.push(x),R===0?E+=x:R<f&&(E+=2*x)}for(let R=0;R<p.length;R++)p[R]=p[R]/E;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=o==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:w}=this;d.dTheta.value=_,d.mipInt.value=w-i;const A=this._sizeLods[n],P=3*A*(n>w-Zr?n-w+Zr:0),T=4*(this._cubeSize-A);Fa(t,P,T,3*A,2*A),l.setRenderTarget(t),l.render(u,bo)}}function Mx(r){const e=[],t=[],i=[];let n=r;const a=r-Zr+1+ah.length;for(let o=0;o<a;o++){const s=Math.pow(2,n);t.push(s);let l=1/s;o>r-Zr?l=ah[o-r+Zr-1]:o===0&&(l=0),i.push(l);const c=1/(s-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,v=3,f=2,p=1,E=new Float32Array(v*_*m),w=new Float32Array(f*_*m),A=new Float32Array(p*_*m);for(let T=0;T<m;T++){const R=T%3*2/3-1,V=T>2?0:-1,x=[R,V,0,R+2/3,V,0,R+2/3,V+1,0,R,V,0,R+2/3,V+1,0,R,V+1,0];E.set(x,v*_*T),w.set(d,f*_*T);const b=[T,T,T,T,T,T];A.set(b,p*_*T)}const P=new ri;P.setAttribute("position",new kt(E,v)),P.setAttribute("uv",new kt(w,f)),P.setAttribute("faceIndex",new kt(A,p)),e.push(P),n>Zr&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ch(r,e,t){const i=new lr(r,e,t);return i.texture.mapping=sa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fa(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function bx(r,e,t){const i=new Float32Array(mr),n=new N(0,1,0);return new dr({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Ao(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function hh(){return new dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ao(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function uh(){return new dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Ao(){return`

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
	`}function Sx(r){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===Gs||l===ks,h=l===Rr||l===Cr;if(c||h)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let u=e.get(s);return t===null&&(t=new lh(r)),u=c?t.fromEquirectangular(s,u):t.fromCubemap(s,u),e.set(s,u),u.texture}else{if(e.has(s))return e.get(s).texture;{const u=s.image;if(c&&u&&u.height>0||h&&u&&n(u)){t===null&&(t=new lh(r));const d=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,d),s.addEventListener("dispose",a),d.texture}else return null}}}return s}function n(s){let l=0;const c=6;for(let h=0;h<c;h++)s[h]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Ex(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Tx(r,e,t,i){const n={},a=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const v=d.morphAttributes[_];for(let f=0,p=v.length;f<p;f++)e.remove(v[f])}d.removeEventListener("dispose",o),delete n[d.id];const m=a.get(d);m&&(e.remove(m),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function s(u,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)e.update(d[_],r.ARRAY_BUFFER);const m=u.morphAttributes;for(const _ in m){const v=m[_];for(let f=0,p=v.length;f<p;f++)e.update(v[f],r.ARRAY_BUFFER)}}function c(u){const d=[],m=u.index,_=u.attributes.position;let v=0;if(m!==null){const E=m.array;v=m.version;for(let w=0,A=E.length;w<A;w+=3){const P=E[w+0],T=E[w+1],R=E[w+2];d.push(P,T,T,R,R,P)}}else if(_!==void 0){const E=_.array;v=_.version;for(let w=0,A=E.length/3-1;w<A;w+=3){const P=w+0,T=w+1,R=w+2;d.push(P,T,T,R,R,P)}}else return;const f=new(Lc(d)?Yc:qc)(d,1);f.version=v;const p=a.get(u);p&&e.remove(p),a.set(u,f)}function h(u){const d=a.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return a.get(u)}return{get:s,update:l,getWireframeAttribute:h}}function Ax(r,e,t,i){const n=i.isWebGL2;let a;function o(m){a=m}let s,l;function c(m){s=m.type,l=m.bytesPerElement}function h(m,_){r.drawElements(a,_,s,m*l),t.update(_,a,1)}function u(m,_,v){if(v===0)return;let f,p;if(n)f=r,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](a,_,s,m*l,v),t.update(_,a,v)}function d(m,_,v){if(v===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<v;p++)this.render(m[p]/l,_[p]);else{f.multiDrawElementsWEBGL(a,_,0,s,m,0,v);let p=0;for(let E=0;E<v;E++)p+=_[E];t.update(p,a,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Rx(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=s*(a/3);break;case r.LINES:t.lines+=s*(a/2);break;case r.LINE_STRIP:t.lines+=s*(a-1);break;case r.LINE_LOOP:t.lines+=s*a;break;case r.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Cx(r,e){return r[0]-e[0]}function Px(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Lx(r,e,t){const i={},n=new Float32Array(8),a=new WeakMap,o=new Ct,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=m!==void 0?m.length:0;let v=a.get(h);if(v===void 0||v.count!==_){let E=function(){ee.dispose(),a.delete(h),h.removeEventListener("dispose",E)};v!==void 0&&v.texture.dispose();const w=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,P=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],V=h.morphAttributes.color||[];let x=0;w===!0&&(x=1),A===!0&&(x=2),P===!0&&(x=3);let b=h.attributes.position.count*x,H=1;b>e.maxTextureSize&&(H=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const B=new Float32Array(b*H*4*_),ee=new Fc(B,b,H,_);ee.type=Xi,ee.needsUpdate=!0;const D=x*4;for(let O=0;O<_;O++){const Y=T[O],Z=R[O],J=V[O],K=b*H*4*O;for(let te=0;te<Y.count;te++){const ne=te*D;w===!0&&(o.fromBufferAttribute(Y,te),B[K+ne+0]=o.x,B[K+ne+1]=o.y,B[K+ne+2]=o.z,B[K+ne+3]=0),A===!0&&(o.fromBufferAttribute(Z,te),B[K+ne+4]=o.x,B[K+ne+5]=o.y,B[K+ne+6]=o.z,B[K+ne+7]=0),P===!0&&(o.fromBufferAttribute(J,te),B[K+ne+8]=o.x,B[K+ne+9]=o.y,B[K+ne+10]=o.z,B[K+ne+11]=J.itemSize===4?o.w:1)}}v={count:_,texture:ee,size:new Le(b,H)},a.set(h,v),h.addEventListener("dispose",E)}let f=0;for(let E=0;E<d.length;E++)f+=d[E];const p=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(r,"morphTargetBaseInfluence",p),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{const m=d===void 0?0:d.length;let _=i[h.id];if(_===void 0||_.length!==m){_=[];for(let w=0;w<m;w++)_[w]=[w,0];i[h.id]=_}for(let w=0;w<m;w++){const A=_[w];A[0]=w,A[1]=d[w]}_.sort(Px);for(let w=0;w<8;w++)w<m&&_[w][1]?(s[w][0]=_[w][0],s[w][1]=_[w][1]):(s[w][0]=Number.MAX_SAFE_INTEGER,s[w][1]=0);s.sort(Cx);const v=h.morphAttributes.position,f=h.morphAttributes.normal;let p=0;for(let w=0;w<8;w++){const A=s[w],P=A[0],T=A[1];P!==Number.MAX_SAFE_INTEGER&&T?(v&&h.getAttribute("morphTarget"+w)!==v[P]&&h.setAttribute("morphTarget"+w,v[P]),f&&h.getAttribute("morphNormal"+w)!==f[P]&&h.setAttribute("morphNormal"+w,f[P]),n[w]=T,p+=T):(v&&h.hasAttribute("morphTarget"+w)===!0&&h.deleteAttribute("morphTarget"+w),f&&h.hasAttribute("morphNormal"+w)===!0&&h.deleteAttribute("morphNormal"+w),n[w]=0)}const E=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(r,"morphTargetBaseInfluence",E),u.getUniforms().setValue(r,"morphTargetInfluences",n)}}return{update:l}}function Ix(r,e,t,i){let n=new WeakMap;function a(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),n.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function o(){n=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}class dh extends Jt{constructor(e,t,i,n,a,o,s,l,c,h){if(h=h!==void 0?h:ar,h!==ar&&h!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ar&&(i=ji),i===void 0&&h===Pr&&(i=nr),super(null,n,a,o,s,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ph=new Jt,mh=new dh(1,1);mh.compareFunction=Ac;const fh=new Fc,gh=new gv,_h=new ih,vh=[],wh=[],yh=new Float32Array(16),xh=new Float32Array(9),Mh=new Float32Array(4);function $r(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let a=vh[n];if(a===void 0&&(a=new Float32Array(n),vh[n]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,r[o].toArray(a,s)}return a}function Et(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Tt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function za(r,e){let t=wh[e];t===void 0&&(t=new Int32Array(e),wh[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function Dx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ux(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;r.uniform2fv(this.addr,e),Tt(t,e)}}function Nx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;r.uniform3fv(this.addr,e),Tt(t,e)}}function Ox(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;r.uniform4fv(this.addr,e),Tt(t,e)}}function Fx(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;Mh.set(i),r.uniformMatrix2fv(this.addr,!1,Mh),Tt(t,i)}}function zx(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;xh.set(i),r.uniformMatrix3fv(this.addr,!1,xh),Tt(t,i)}}function Hx(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;yh.set(i),r.uniformMatrix4fv(this.addr,!1,yh),Tt(t,i)}}function Bx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Gx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;r.uniform2iv(this.addr,e),Tt(t,e)}}function kx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;r.uniform3iv(this.addr,e),Tt(t,e)}}function Vx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;r.uniform4iv(this.addr,e),Tt(t,e)}}function Wx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function jx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;r.uniform2uiv(this.addr,e),Tt(t,e)}}function Xx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;r.uniform3uiv(this.addr,e),Tt(t,e)}}function qx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;r.uniform4uiv(this.addr,e),Tt(t,e)}}function Yx(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);const a=this.type===r.SAMPLER_2D_SHADOW?mh:ph;t.setTexture2D(e||a,n)}function Kx(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||gh,n)}function Jx(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||_h,n)}function Zx(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||fh,n)}function Qx(r){switch(r){case 5126:return Dx;case 35664:return Ux;case 35665:return Nx;case 35666:return Ox;case 35674:return Fx;case 35675:return zx;case 35676:return Hx;case 5124:case 35670:return Bx;case 35667:case 35671:return Gx;case 35668:case 35672:return kx;case 35669:case 35673:return Vx;case 5125:return Wx;case 36294:return jx;case 36295:return Xx;case 36296:return qx;case 35678:case 36198:case 36298:case 36306:case 35682:return Yx;case 35679:case 36299:case 36307:return Kx;case 35680:case 36300:case 36308:case 36293:return Jx;case 36289:case 36303:case 36311:case 36292:return Zx}}function $x(r,e){r.uniform1fv(this.addr,e)}function eM(r,e){const t=$r(e,this.size,2);r.uniform2fv(this.addr,t)}function tM(r,e){const t=$r(e,this.size,3);r.uniform3fv(this.addr,t)}function iM(r,e){const t=$r(e,this.size,4);r.uniform4fv(this.addr,t)}function rM(r,e){const t=$r(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function nM(r,e){const t=$r(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function aM(r,e){const t=$r(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function sM(r,e){r.uniform1iv(this.addr,e)}function oM(r,e){r.uniform2iv(this.addr,e)}function lM(r,e){r.uniform3iv(this.addr,e)}function cM(r,e){r.uniform4iv(this.addr,e)}function hM(r,e){r.uniform1uiv(this.addr,e)}function uM(r,e){r.uniform2uiv(this.addr,e)}function dM(r,e){r.uniform3uiv(this.addr,e)}function pM(r,e){r.uniform4uiv(this.addr,e)}function mM(r,e,t){const i=this.cache,n=e.length,a=za(t,n);Et(i,a)||(r.uniform1iv(this.addr,a),Tt(i,a));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||ph,a[o])}function fM(r,e,t){const i=this.cache,n=e.length,a=za(t,n);Et(i,a)||(r.uniform1iv(this.addr,a),Tt(i,a));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||gh,a[o])}function gM(r,e,t){const i=this.cache,n=e.length,a=za(t,n);Et(i,a)||(r.uniform1iv(this.addr,a),Tt(i,a));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||_h,a[o])}function _M(r,e,t){const i=this.cache,n=e.length,a=za(t,n);Et(i,a)||(r.uniform1iv(this.addr,a),Tt(i,a));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||fh,a[o])}function vM(r){switch(r){case 5126:return $x;case 35664:return eM;case 35665:return tM;case 35666:return iM;case 35674:return rM;case 35675:return nM;case 35676:return aM;case 5124:case 35670:return sM;case 35667:case 35671:return oM;case 35668:case 35672:return lM;case 35669:case 35673:return cM;case 5125:return hM;case 36294:return uM;case 36295:return dM;case 36296:return pM;case 35678:case 36198:case 36298:case 36306:case 35682:return mM;case 35679:case 36299:case 36307:return fM;case 35680:case 36300:case 36308:case 36293:return gM;case 36289:case 36303:case 36311:case 36292:return _M}}class wM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Qx(t.type)}}class yM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vM(t.type)}}class xM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let a=0,o=n.length;a!==o;++a){const s=n[a];s.setValue(e,t[s.id],i)}}}const Ro=/(\w+)(\])?(\[|\.)?/g;function bh(r,e){r.seq.push(e),r.map[e.id]=e}function MM(r,e,t){const i=r.name,n=i.length;for(Ro.lastIndex=0;;){const a=Ro.exec(i),o=Ro.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===n){bh(t,c===void 0?new wM(s,r,e):new yM(s,r,e));break}else{let h=t.map[s];h===void 0&&(h=new xM(s),bh(t,h)),t=h}}}class Ha{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=e.getActiveUniform(t,n),o=e.getUniformLocation(t,a.name);MM(a,o,this)}}setValue(e,t,i,n){const a=this.map[t];a!==void 0&&a.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,a=e.length;n!==a;++n){const o=e[n];o.id in t&&i.push(o)}return i}}function Sh(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const bM=37297;let SM=0;function EM(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=n;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}function TM(r){const e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(r);let i;switch(e===t?i="":e===ha&&t===ca?i="LinearDisplayP3ToLinearSRGB":e===ca&&t===ha&&(i="LinearSRGBToLinearDisplayP3"),r){case Ri:case oa:return[i,"LinearTransferOETF"];case Dt:case Qs:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function Eh(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+n+`

`+EM(r.getShaderSource(e),o)}else return n}function AM(r,e){const t=TM(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function RM(r,e){let t;switch(e){case E0:t="Linear";break;case T0:t="Reinhard";break;case A0:t="OptimizedCineon";break;case R0:t="ACESFilmic";break;case P0:t="AgX";break;case C0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function CM(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(en).join(`
`)}function PM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(en).join(`
`)}function LM(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function IM(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=r.getActiveAttrib(e,n),o=a.name;let s=1;a.type===r.FLOAT_MAT2&&(s=2),a.type===r.FLOAT_MAT3&&(s=3),a.type===r.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:r.getAttribLocation(e,o),locationSize:s}}return t}function en(r){return r!==""}function Th(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ah(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Co(r){return r.replace(DM,NM)}const UM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function NM(r,e){let t=je[e];if(t===void 0){const i=UM.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Co(t)}const OM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rh(r){return r.replace(OM,FM)}function FM(r,e,t,i){let n="";for(let a=parseInt(e);a<parseInt(t);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function Ch(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zM(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ol?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Fl?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function HM(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Rr:case Cr:e="ENVMAP_TYPE_CUBE";break;case sa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function BM(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Cr:e="ENVMAP_MODE_REFRACTION";break}return e}function GM(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Vl:e="ENVMAP_BLENDING_MULTIPLY";break;case b0:e="ENVMAP_BLENDING_MIX";break;case S0:e="ENVMAP_BLENDING_ADD";break}return e}function kM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function VM(r,e,t,i){const n=r.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=zM(t),c=HM(t),h=BM(t),u=GM(t),d=kM(t),m=t.isWebGL2?"":CM(t),_=PM(t),v=LM(a),f=n.createProgram();let p,E,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(en).join(`
`),p.length>0&&(p+=`
`),E=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(en).join(`
`),E.length>0&&(E+=`
`)):(p=[Ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(en).join(`
`),E=[m,Ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?je.tonemapping_pars_fragment:"",t.toneMapping!==Vi?RM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,AM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(en).join(`
`)),o=Co(o),o=Th(o,t),o=Ah(o,t),s=Co(s),s=Th(s,t),s=Ah(s,t),o=Rh(o),s=Rh(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const A=w+p+o,P=w+E+s,T=Sh(n,n.VERTEX_SHADER,A),R=Sh(n,n.FRAGMENT_SHADER,P);n.attachShader(f,T),n.attachShader(f,R),t.index0AttributeName!==void 0?n.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(f,0,"position"),n.linkProgram(f);function V(B){if(r.debug.checkShaderErrors){const ee=n.getProgramInfoLog(f).trim(),D=n.getShaderInfoLog(T).trim(),O=n.getShaderInfoLog(R).trim();let Y=!0,Z=!0;if(n.getProgramParameter(f,n.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,f,T,R);else{const J=Eh(n,T,"vertex"),K=Eh(n,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(f,n.VALIDATE_STATUS)+`

Program Info Log: `+ee+`
`+J+`
`+K)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(D===""||O==="")&&(Z=!1);Z&&(B.diagnostics={runnable:Y,programLog:ee,vertexShader:{log:D,prefix:p},fragmentShader:{log:O,prefix:E}})}n.deleteShader(T),n.deleteShader(R),x=new Ha(n,f),b=IM(n,f)}let x;this.getUniforms=function(){return x===void 0&&V(this),x};let b;this.getAttributes=function(){return b===void 0&&V(this),b};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=n.getProgramParameter(f,bM)),H},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=SM++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=T,this.fragmentShader=R,this}let WM=0;class jM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new XM(e),t.set(e,i)),i}}class XM{constructor(e){this.id=WM++,this.code=e,this.usedTimes=0}}function qM(r,e,t,i,n,a,o){const s=new po,l=new jM,c=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures;let m=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return x===0?"uv":`uv${x}`}function f(x,b,H,B,ee){const D=B.fog,O=ee.geometry,Y=x.isMeshStandardMaterial?B.environment:null,Z=(x.isMeshStandardMaterial?t:e).get(x.envMap||Y),J=Z&&Z.mapping===sa?Z.image.height:null,K=_[x.type];x.precision!==null&&(m=n.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const te=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ne=te!==void 0?te.length:0;let pe=0;O.morphAttributes.position!==void 0&&(pe=1),O.morphAttributes.normal!==void 0&&(pe=2),O.morphAttributes.color!==void 0&&(pe=3);let j,$,ve,we;if(K){const Mt=bi[K];j=Mt.vertexShader,$=Mt.fragmentShader}else j=x.vertexShader,$=x.fragmentShader,l.update(x),ve=l.getVertexShaderID(x),we=l.getFragmentShaderID(x);const ye=r.getRenderTarget(),De=ee.isInstancedMesh===!0,Ue=ee.isBatchedMesh===!0,Te=!!x.map,Ge=!!x.matcap,k=!!Z,dt=!!x.aoMap,Se=!!x.lightMap,Ne=!!x.bumpMap,xe=!!x.normalMap,at=!!x.displacementMap,ze=!!x.emissiveMap,S=!!x.metalnessMap,y=!!x.roughnessMap,G=x.anisotropy>0,se=x.clearcoat>0,ie=x.iridescence>0,re=x.sheen>0,Me=x.transmission>0,de=G&&!!x.anisotropyMap,ge=se&&!!x.clearcoatMap,Ae=se&&!!x.clearcoatNormalMap,He=se&&!!x.clearcoatRoughnessMap,ae=ie&&!!x.iridescenceMap,Qe=ie&&!!x.iridescenceThicknessMap,C=re&&!!x.sheenColorMap,Q=re&&!!x.sheenRoughnessMap,ce=!!x.specularMap,le=!!x.specularColorMap,Ee=!!x.specularIntensityMap,ke=Me&&!!x.transmissionMap,tt=Me&&!!x.thicknessMap,Ve=!!x.gradientMap,he=!!x.alphaMap,L=x.alphaTest>0,oe=!!x.alphaHash,fe=!!x.extensions,Oe=!!O.attributes.uv1,Re=!!O.attributes.uv2,rt=!!O.attributes.uv3;let ct=Vi;return x.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(ct=r.toneMapping),{isWebGL2:h,shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:j,fragmentShader:$,defines:x.defines,customVertexShaderID:ve,customFragmentShaderID:we,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:Ue,instancing:De,instancingColor:De&&ee.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ye===null?r.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Ri,map:Te,matcap:Ge,envMap:k,envMapMode:k&&Z.mapping,envMapCubeUVHeight:J,aoMap:dt,lightMap:Se,bumpMap:Ne,normalMap:xe,displacementMap:d&&at,emissiveMap:ze,normalMapObjectSpace:xe&&x.normalMapType===k0,normalMapTangentSpace:xe&&x.normalMapType===Ec,metalnessMap:S,roughnessMap:y,anisotropy:G,anisotropyMap:de,clearcoat:se,clearcoatMap:ge,clearcoatNormalMap:Ae,clearcoatRoughnessMap:He,iridescence:ie,iridescenceMap:ae,iridescenceThicknessMap:Qe,sheen:re,sheenColorMap:C,sheenRoughnessMap:Q,specularMap:ce,specularColorMap:le,specularIntensityMap:Ee,transmission:Me,transmissionMap:ke,thicknessMap:tt,gradientMap:Ve,opaque:x.transparent===!1&&x.blending===Ar,alphaMap:he,alphaTest:L,alphaHash:oe,combine:x.combine,mapUv:Te&&v(x.map.channel),aoMapUv:dt&&v(x.aoMap.channel),lightMapUv:Se&&v(x.lightMap.channel),bumpMapUv:Ne&&v(x.bumpMap.channel),normalMapUv:xe&&v(x.normalMap.channel),displacementMapUv:at&&v(x.displacementMap.channel),emissiveMapUv:ze&&v(x.emissiveMap.channel),metalnessMapUv:S&&v(x.metalnessMap.channel),roughnessMapUv:y&&v(x.roughnessMap.channel),anisotropyMapUv:de&&v(x.anisotropyMap.channel),clearcoatMapUv:ge&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:C&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Q&&v(x.sheenRoughnessMap.channel),specularMapUv:ce&&v(x.specularMap.channel),specularColorMapUv:le&&v(x.specularColorMap.channel),specularIntensityMapUv:Ee&&v(x.specularIntensityMap.channel),transmissionMapUv:ke&&v(x.transmissionMap.channel),thicknessMapUv:tt&&v(x.thicknessMap.channel),alphaMapUv:he&&v(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(xe||G),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Oe,vertexUv2s:Re,vertexUv3s:rt,pointsUvs:ee.isPoints===!0&&!!O.attributes.uv&&(Te||he),fog:!!D,useFog:x.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:ee.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:pe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:ct,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Te&&x.map.isVideoTexture===!0&&ot.getTransfer(x.map.colorSpace)===ut,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===xi,flipSided:x.side===Xt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:fe&&x.extensions.derivatives===!0,extensionFragDepth:fe&&x.extensions.fragDepth===!0,extensionDrawBuffers:fe&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:fe&&x.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const H in x.defines)b.push(H),b.push(x.defines[H]);return x.isRawShaderMaterial===!1&&(E(b,x),w(b,x),b.push(r.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function E(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function w(x,b){s.disableAll(),b.isWebGL2&&s.enable(0),b.supportsVertexTextures&&s.enable(1),b.instancing&&s.enable(2),b.instancingColor&&s.enable(3),b.matcap&&s.enable(4),b.envMap&&s.enable(5),b.normalMapObjectSpace&&s.enable(6),b.normalMapTangentSpace&&s.enable(7),b.clearcoat&&s.enable(8),b.iridescence&&s.enable(9),b.alphaTest&&s.enable(10),b.vertexColors&&s.enable(11),b.vertexAlphas&&s.enable(12),b.vertexUv1s&&s.enable(13),b.vertexUv2s&&s.enable(14),b.vertexUv3s&&s.enable(15),b.vertexTangents&&s.enable(16),b.anisotropy&&s.enable(17),b.alphaHash&&s.enable(18),b.batching&&s.enable(19),x.push(s.mask),s.disableAll(),b.fog&&s.enable(0),b.useFog&&s.enable(1),b.flatShading&&s.enable(2),b.logarithmicDepthBuffer&&s.enable(3),b.skinning&&s.enable(4),b.morphTargets&&s.enable(5),b.morphNormals&&s.enable(6),b.morphColors&&s.enable(7),b.premultipliedAlpha&&s.enable(8),b.shadowMapEnabled&&s.enable(9),b.useLegacyLights&&s.enable(10),b.doubleSided&&s.enable(11),b.flipSided&&s.enable(12),b.useDepthPacking&&s.enable(13),b.dithering&&s.enable(14),b.transmission&&s.enable(15),b.sheen&&s.enable(16),b.opaque&&s.enable(17),b.pointsUvs&&s.enable(18),b.decodeVideoTexture&&s.enable(19),x.push(s.mask)}function A(x){const b=_[x.type];let H;if(b){const B=bi[b];H=Cv.clone(B.uniforms)}else H=x.uniforms;return H}function P(x,b){let H;for(let B=0,ee=c.length;B<ee;B++){const D=c[B];if(D.cacheKey===b){H=D,++H.usedTimes;break}}return H===void 0&&(H=new VM(r,b,x,a),c.push(H)),H}function T(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),x.destroy()}}function R(x){l.remove(x)}function V(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:A,acquireProgram:P,releaseProgram:T,releaseShaderCache:R,programs:c,dispose:V}}function YM(){let r=new WeakMap;function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function t(a){r.delete(a)}function i(a,o,s){r.get(a)[o]=s}function n(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function KM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ph(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Lh(){const r=[];let e=0;const t=[],i=[],n=[];function a(){e=0,t.length=0,i.length=0,n.length=0}function o(u,d,m,_,v,f){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:_,renderOrder:u.renderOrder,z:v,group:f},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=v,p.group=f),e++,p}function s(u,d,m,_,v,f){const p=o(u,d,m,_,v,f);m.transmission>0?i.push(p):m.transparent===!0?n.push(p):t.push(p)}function l(u,d,m,_,v,f){const p=o(u,d,m,_,v,f);m.transmission>0?i.unshift(p):m.transparent===!0?n.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||KM),i.length>1&&i.sort(d||Ph),n.length>1&&n.sort(d||Ph)}function h(){for(let u=e,d=r.length;u<d;u++){const m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:n,init:a,push:s,unshift:l,finish:h,sort:c}}function JM(){let r=new WeakMap;function e(i,n){const a=r.get(i);let o;return a===void 0?(o=new Lh,r.set(i,[o])):n>=a.length?(o=new Lh,a.push(o)):o=a[n],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function ZM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ie};break;case"SpotLight":t={position:new N,direction:new N,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new N,halfWidth:new N,halfHeight:new N};break}return r[e.id]=t,t}}}function QM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let $M=0;function eb(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function tb(r,e){const t=new ZM,i=QM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new N);const a=new N,o=new _t,s=new _t;function l(h,u){let d=0,m=0,_=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let v=0,f=0,p=0,E=0,w=0,A=0,P=0,T=0,R=0,V=0,x=0;h.sort(eb);const b=u===!0?Math.PI:1;for(let B=0,ee=h.length;B<ee;B++){const D=h[B],O=D.color,Y=D.intensity,Z=D.distance,J=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=O.r*Y*b,m+=O.g*Y*b,_+=O.b*Y*b;else if(D.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(D.sh.coefficients[K],Y);x++}else if(D.isDirectionalLight){const K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity*b),D.castShadow){const te=D.shadow,ne=i.get(D);ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,n.directionalShadow[v]=ne,n.directionalShadowMap[v]=J,n.directionalShadowMatrix[v]=D.shadow.matrix,A++}n.directional[v]=K,v++}else if(D.isSpotLight){const K=t.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(O).multiplyScalar(Y*b),K.distance=Z,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,n.spot[p]=K;const te=D.shadow;if(D.map&&(n.spotLightMap[R]=D.map,R++,te.updateMatrices(D),D.castShadow&&V++),n.spotLightMatrix[p]=te.matrix,D.castShadow){const ne=i.get(D);ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,n.spotShadow[p]=ne,n.spotShadowMap[p]=J,T++}p++}else if(D.isRectAreaLight){const K=t.get(D);K.color.copy(O).multiplyScalar(Y),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),n.rectArea[E]=K,E++}else if(D.isPointLight){const K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity*b),K.distance=D.distance,K.decay=D.decay,D.castShadow){const te=D.shadow,ne=i.get(D);ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,ne.shadowCameraNear=te.camera.near,ne.shadowCameraFar=te.camera.far,n.pointShadow[f]=ne,n.pointShadowMap[f]=J,n.pointShadowMatrix[f]=D.shadow.matrix,P++}n.point[f]=K,f++}else if(D.isHemisphereLight){const K=t.get(D);K.skyColor.copy(D.color).multiplyScalar(Y*b),K.groundColor.copy(D.groundColor).multiplyScalar(Y*b),n.hemi[w]=K,w++}}E>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=_;const H=n.hash;(H.directionalLength!==v||H.pointLength!==f||H.spotLength!==p||H.rectAreaLength!==E||H.hemiLength!==w||H.numDirectionalShadows!==A||H.numPointShadows!==P||H.numSpotShadows!==T||H.numSpotMaps!==R||H.numLightProbes!==x)&&(n.directional.length=v,n.spot.length=p,n.rectArea.length=E,n.point.length=f,n.hemi.length=w,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=T+R-V,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=V,n.numLightProbes=x,H.directionalLength=v,H.pointLength=f,H.spotLength=p,H.rectAreaLength=E,H.hemiLength=w,H.numDirectionalShadows=A,H.numPointShadows=P,H.numSpotShadows=T,H.numSpotMaps=R,H.numLightProbes=x,n.version=$M++)}function c(h,u){let d=0,m=0,_=0,v=0,f=0;const p=u.matrixWorldInverse;for(let E=0,w=h.length;E<w;E++){const A=h[E];if(A.isDirectionalLight){const P=n.directional[d];P.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(p),d++}else if(A.isSpotLight){const P=n.spot[_];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(p),P.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(p),_++}else if(A.isRectAreaLight){const P=n.rectArea[v];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(p),s.identity(),o.copy(A.matrixWorld),o.premultiply(p),s.extractRotation(o),P.halfWidth.set(A.width*.5,0,0),P.halfHeight.set(0,A.height*.5,0),P.halfWidth.applyMatrix4(s),P.halfHeight.applyMatrix4(s),v++}else if(A.isPointLight){const P=n.point[m];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(p),m++}else if(A.isHemisphereLight){const P=n.hemi[f];P.direction.setFromMatrixPosition(A.matrixWorld),P.direction.transformDirection(p),f++}}}return{setup:l,setupView:c,state:n}}function Ih(r,e){const t=new tb(r,e),i=[],n=[];function a(){i.length=0,n.length=0}function o(h){i.push(h)}function s(h){n.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:a,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function ib(r,e){let t=new WeakMap;function i(a,o=0){const s=t.get(a);let l;return s===void 0?(l=new Ih(r,e),t.set(a,[l])):o>=s.length?(l=new Ih(r,e),s.push(l)):l=s[o],l}function n(){t=new WeakMap}return{get:i,dispose:n}}class rb extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=B0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nb extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ab=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sb=`uniform sampler2D shadow_pass;
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
}`;function ob(r,e,t){let i=new Mo;const n=new Le,a=new Le,o=new Ct,s=new rb({depthPacking:G0}),l=new nb,c={},h=t.maxTextureSize,u={[Gi]:Xt,[Xt]:Gi,[xi]:xi},d=new dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:ab,fragmentShader:sb}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new ri;_.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new qt(_,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ol;let p=this.type;this.render=function(T,R,V){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;const x=r.getRenderTarget(),b=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),B=r.state;B.setBlending(ki),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const ee=p!==Ai&&this.type===Ai,D=p===Ai&&this.type!==Ai;for(let O=0,Y=T.length;O<Y;O++){const Z=T[O],J=Z.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;n.copy(J.mapSize);const K=J.getFrameExtents();if(n.multiply(K),a.copy(J.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(a.x=Math.floor(h/K.x),n.x=a.x*K.x,J.mapSize.x=a.x),n.y>h&&(a.y=Math.floor(h/K.y),n.y=a.y*K.y,J.mapSize.y=a.y)),J.map===null||ee===!0||D===!0){const ne=this.type!==Ai?{minFilter:Bt,magFilter:Bt}:{};J.map!==null&&J.map.dispose(),J.map=new lr(n.x,n.y,ne),J.map.texture.name=Z.name+".shadowMap",J.camera.updateProjectionMatrix()}r.setRenderTarget(J.map),r.clear();const te=J.getViewportCount();for(let ne=0;ne<te;ne++){const pe=J.getViewport(ne);o.set(a.x*pe.x,a.y*pe.y,a.x*pe.z,a.y*pe.w),B.viewport(o),J.updateMatrices(Z,ne),i=J.getFrustum(),A(R,V,J.camera,Z,this.type)}J.isPointLightShadow!==!0&&this.type===Ai&&E(J,V),J.needsUpdate=!1}p=this.type,f.needsUpdate=!1,r.setRenderTarget(x,b,H)};function E(T,R){const V=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new lr(n.x,n.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(R,null,V,d,v,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(R,null,V,m,v,null)}function w(T,R,V,x){let b=null;const H=V.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(H!==void 0)b=H;else if(b=V.isPointLight===!0?l:s,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const B=b.uuid,ee=R.uuid;let D=c[B];D===void 0&&(D={},c[B]=D);let O=D[ee];O===void 0&&(O=b.clone(),D[ee]=O,R.addEventListener("dispose",P)),b=O}if(b.visible=R.visible,b.wireframe=R.wireframe,x===Ai?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,V.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const B=r.properties.get(b);B.light=V}return b}function A(T,R,V,x,b){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Ai)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld);const B=e.update(T),ee=T.material;if(Array.isArray(ee)){const D=B.groups;for(let O=0,Y=D.length;O<Y;O++){const Z=D[O],J=ee[Z.materialIndex];if(J&&J.visible){const K=w(T,J,x,b);T.onBeforeShadow(r,T,R,V,B,K,Z),r.renderBufferDirect(V,null,B,K,T,Z),T.onAfterShadow(r,T,R,V,B,K,Z)}}}else if(ee.visible){const D=w(T,ee,x,b);T.onBeforeShadow(r,T,R,V,B,D,null),r.renderBufferDirect(V,null,B,D,T,null),T.onAfterShadow(r,T,R,V,B,D,null)}}const H=T.children;for(let B=0,ee=H.length;B<ee;B++)A(H[B],R,V,x,b)}function P(T){T.target.removeEventListener("dispose",P);for(const R in c){const V=c[R],x=T.target.uuid;x in V&&(V[x].dispose(),delete V[x])}}}function lb(r,e,t){const i=t.isWebGL2;function n(){let L=!1;const oe=new Ct;let fe=null;const Oe=new Ct(0,0,0,0);return{setMask:function(Re){fe!==Re&&!L&&(r.colorMask(Re,Re,Re,Re),fe=Re)},setLocked:function(Re){L=Re},setClear:function(Re,rt,ct,Mt,si){si===!0&&(Re*=Mt,rt*=Mt,ct*=Mt),oe.set(Re,rt,ct,Mt),Oe.equals(oe)===!1&&(r.clearColor(Re,rt,ct,Mt),Oe.copy(oe))},reset:function(){L=!1,fe=null,Oe.set(-1,0,0,0)}}}function a(){let L=!1,oe=null,fe=null,Oe=null;return{setTest:function(Re){Re?Ue(r.DEPTH_TEST):Te(r.DEPTH_TEST)},setMask:function(Re){oe!==Re&&!L&&(r.depthMask(Re),oe=Re)},setFunc:function(Re){if(fe!==Re){switch(Re){case g0:r.depthFunc(r.NEVER);break;case _0:r.depthFunc(r.ALWAYS);break;case v0:r.depthFunc(r.LESS);break;case aa:r.depthFunc(r.LEQUAL);break;case w0:r.depthFunc(r.EQUAL);break;case y0:r.depthFunc(r.GEQUAL);break;case x0:r.depthFunc(r.GREATER);break;case M0:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}fe=Re}},setLocked:function(Re){L=Re},setClear:function(Re){Oe!==Re&&(r.clearDepth(Re),Oe=Re)},reset:function(){L=!1,oe=null,fe=null,Oe=null}}}function o(){let L=!1,oe=null,fe=null,Oe=null,Re=null,rt=null,ct=null,Mt=null,si=null;return{setTest:function(ht){L||(ht?Ue(r.STENCIL_TEST):Te(r.STENCIL_TEST))},setMask:function(ht){oe!==ht&&!L&&(r.stencilMask(ht),oe=ht)},setFunc:function(ht,Wt,Ei){(fe!==ht||Oe!==Wt||Re!==Ei)&&(r.stencilFunc(ht,Wt,Ei),fe=ht,Oe=Wt,Re=Ei)},setOp:function(ht,Wt,Ei){(rt!==ht||ct!==Wt||Mt!==Ei)&&(r.stencilOp(ht,Wt,Ei),rt=ht,ct=Wt,Mt=Ei)},setLocked:function(ht){L=ht},setClear:function(ht){si!==ht&&(r.clearStencil(ht),si=ht)},reset:function(){L=!1,oe=null,fe=null,Oe=null,Re=null,rt=null,ct=null,Mt=null,si=null}}}const s=new n,l=new a,c=new o,h=new WeakMap,u=new WeakMap;let d={},m={},_=new WeakMap,v=[],f=null,p=!1,E=null,w=null,A=null,P=null,T=null,R=null,V=null,x=new Ie(0,0,0),b=0,H=!1,B=null,ee=null,D=null,O=null,Y=null;const Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,K=0;const te=r.getParameter(r.VERSION);te.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(te)[1]),J=K>=1):te.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),J=K>=2);let ne=null,pe={};const j=r.getParameter(r.SCISSOR_BOX),$=r.getParameter(r.VIEWPORT),ve=new Ct().fromArray(j),we=new Ct().fromArray($);function ye(L,oe,fe,Oe){const Re=new Uint8Array(4),rt=r.createTexture();r.bindTexture(L,rt),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ct=0;ct<fe;ct++)i&&(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)?r.texImage3D(oe,0,r.RGBA,1,1,Oe,0,r.RGBA,r.UNSIGNED_BYTE,Re):r.texImage2D(oe+ct,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Re);return rt}const De={};De[r.TEXTURE_2D]=ye(r.TEXTURE_2D,r.TEXTURE_2D,1),De[r.TEXTURE_CUBE_MAP]=ye(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(De[r.TEXTURE_2D_ARRAY]=ye(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),De[r.TEXTURE_3D]=ye(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ue(r.DEPTH_TEST),l.setFunc(aa),ze(!1),S(Nl),Ue(r.CULL_FACE),xe(ki);function Ue(L){d[L]!==!0&&(r.enable(L),d[L]=!0)}function Te(L){d[L]!==!1&&(r.disable(L),d[L]=!1)}function Ge(L,oe){return m[L]!==oe?(r.bindFramebuffer(L,oe),m[L]=oe,i&&(L===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=oe),L===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=oe)),!0):!1}function k(L,oe){let fe=v,Oe=!1;if(L)if(fe=_.get(oe),fe===void 0&&(fe=[],_.set(oe,fe)),L.isWebGLMultipleRenderTargets){const Re=L.texture;if(fe.length!==Re.length||fe[0]!==r.COLOR_ATTACHMENT0){for(let rt=0,ct=Re.length;rt<ct;rt++)fe[rt]=r.COLOR_ATTACHMENT0+rt;fe.length=Re.length,Oe=!0}}else fe[0]!==r.COLOR_ATTACHMENT0&&(fe[0]=r.COLOR_ATTACHMENT0,Oe=!0);else fe[0]!==r.BACK&&(fe[0]=r.BACK,Oe=!0);Oe&&(t.isWebGL2?r.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function dt(L){return f!==L?(r.useProgram(L),f=L,!0):!1}const Se={[rr]:r.FUNC_ADD,[t0]:r.FUNC_SUBTRACT,[i0]:r.FUNC_REVERSE_SUBTRACT};if(i)Se[Gl]=r.MIN,Se[kl]=r.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Se[Gl]=L.MIN_EXT,Se[kl]=L.MAX_EXT)}const Ne={[r0]:r.ZERO,[n0]:r.ONE,[a0]:r.SRC_COLOR,[Hs]:r.SRC_ALPHA,[u0]:r.SRC_ALPHA_SATURATE,[c0]:r.DST_COLOR,[o0]:r.DST_ALPHA,[s0]:r.ONE_MINUS_SRC_COLOR,[Bs]:r.ONE_MINUS_SRC_ALPHA,[h0]:r.ONE_MINUS_DST_COLOR,[l0]:r.ONE_MINUS_DST_ALPHA,[d0]:r.CONSTANT_COLOR,[p0]:r.ONE_MINUS_CONSTANT_COLOR,[m0]:r.CONSTANT_ALPHA,[f0]:r.ONE_MINUS_CONSTANT_ALPHA};function xe(L,oe,fe,Oe,Re,rt,ct,Mt,si,ht){if(L===ki){p===!0&&(Te(r.BLEND),p=!1);return}if(p===!1&&(Ue(r.BLEND),p=!0),L!==e0){if(L!==E||ht!==H){if((w!==rr||T!==rr)&&(r.blendEquation(r.FUNC_ADD),w=rr,T=rr),ht)switch(L){case Ar:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zl:r.blendFunc(r.ONE,r.ONE);break;case Hl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ar:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Hl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}A=null,P=null,R=null,V=null,x.set(0,0,0),b=0,E=L,H=ht}return}Re=Re||oe,rt=rt||fe,ct=ct||Oe,(oe!==w||Re!==T)&&(r.blendEquationSeparate(Se[oe],Se[Re]),w=oe,T=Re),(fe!==A||Oe!==P||rt!==R||ct!==V)&&(r.blendFuncSeparate(Ne[fe],Ne[Oe],Ne[rt],Ne[ct]),A=fe,P=Oe,R=rt,V=ct),(Mt.equals(x)===!1||si!==b)&&(r.blendColor(Mt.r,Mt.g,Mt.b,si),x.copy(Mt),b=si),E=L,H=!1}function at(L,oe){L.side===xi?Te(r.CULL_FACE):Ue(r.CULL_FACE);let fe=L.side===Xt;oe&&(fe=!fe),ze(fe),L.blending===Ar&&L.transparent===!1?xe(ki):xe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),s.setMask(L.colorWrite);const Oe=L.stencilWrite;c.setTest(Oe),Oe&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),G(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ue(r.SAMPLE_ALPHA_TO_COVERAGE):Te(r.SAMPLE_ALPHA_TO_COVERAGE)}function ze(L){B!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),B=L)}function S(L){L!==Q1?(Ue(r.CULL_FACE),L!==ee&&(L===Nl?r.cullFace(r.BACK):L===$1?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Te(r.CULL_FACE),ee=L}function y(L){L!==D&&(J&&r.lineWidth(L),D=L)}function G(L,oe,fe){L?(Ue(r.POLYGON_OFFSET_FILL),(O!==oe||Y!==fe)&&(r.polygonOffset(oe,fe),O=oe,Y=fe)):Te(r.POLYGON_OFFSET_FILL)}function se(L){L?Ue(r.SCISSOR_TEST):Te(r.SCISSOR_TEST)}function ie(L){L===void 0&&(L=r.TEXTURE0+Z-1),ne!==L&&(r.activeTexture(L),ne=L)}function re(L,oe,fe){fe===void 0&&(ne===null?fe=r.TEXTURE0+Z-1:fe=ne);let Oe=pe[fe];Oe===void 0&&(Oe={type:void 0,texture:void 0},pe[fe]=Oe),(Oe.type!==L||Oe.texture!==oe)&&(ne!==fe&&(r.activeTexture(fe),ne=fe),r.bindTexture(L,oe||De[L]),Oe.type=L,Oe.texture=oe)}function Me(){const L=pe[ne];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function de(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function He(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Qe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function C(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(L){ve.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),ve.copy(L))}function ke(L){we.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),we.copy(L))}function tt(L,oe){let fe=u.get(oe);fe===void 0&&(fe=new WeakMap,u.set(oe,fe));let Oe=fe.get(L);Oe===void 0&&(Oe=r.getUniformBlockIndex(oe,L.name),fe.set(L,Oe))}function Ve(L,oe){const fe=u.get(oe).get(L);h.get(oe)!==fe&&(r.uniformBlockBinding(oe,fe,L.__bindingPointIndex),h.set(oe,fe))}function he(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},ne=null,pe={},m={},_=new WeakMap,v=[],f=null,p=!1,E=null,w=null,A=null,P=null,T=null,R=null,V=null,x=new Ie(0,0,0),b=0,H=!1,B=null,ee=null,D=null,O=null,Y=null,ve.set(0,0,r.canvas.width,r.canvas.height),we.set(0,0,r.canvas.width,r.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Ue,disable:Te,bindFramebuffer:Ge,drawBuffers:k,useProgram:dt,setBlending:xe,setMaterial:at,setFlipSided:ze,setCullFace:S,setLineWidth:y,setPolygonOffset:G,setScissorTest:se,activeTexture:ie,bindTexture:re,unbindTexture:Me,compressedTexImage2D:de,compressedTexImage3D:ge,texImage2D:ce,texImage3D:le,updateUBOMapping:tt,uniformBlockBinding:Ve,texStorage2D:C,texStorage3D:Q,texSubImage2D:Ae,texSubImage3D:He,compressedTexSubImage2D:ae,compressedTexSubImage3D:Qe,scissor:Ee,viewport:ke,reset:he}}function cb(r,e,t,i,n,a,o){const s=n.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,y){return m?new OffscreenCanvas(S,y):ma("canvas")}function v(S,y,G,se){let ie=1;if((S.width>se||S.height>se)&&(ie=se/Math.max(S.width,S.height)),ie<1||y===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const re=y?pa:Math.floor,Me=re(ie*S.width),de=re(ie*S.height);u===void 0&&(u=_(Me,de));const ge=G?_(Me,de):u;return ge.width=Me,ge.height=de,ge.getContext("2d").drawImage(S,0,0,Me,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+Me+"x"+de+")."),ge}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function f(S){return to(S.width)&&to(S.height)}function p(S){return s?!1:S.wrapS!==ui||S.wrapT!==ui||S.minFilter!==Bt&&S.minFilter!==ei}function E(S,y){return S.generateMipmaps&&y&&S.minFilter!==Bt&&S.minFilter!==ei}function w(S){r.generateMipmap(S)}function A(S,y,G,se,ie=!1){if(s===!1)return y;if(S!==null){if(r[S]!==void 0)return r[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let re=y;if(y===r.RED&&(G===r.FLOAT&&(re=r.R32F),G===r.HALF_FLOAT&&(re=r.R16F),G===r.UNSIGNED_BYTE&&(re=r.R8)),y===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(re=r.R8UI),G===r.UNSIGNED_SHORT&&(re=r.R16UI),G===r.UNSIGNED_INT&&(re=r.R32UI),G===r.BYTE&&(re=r.R8I),G===r.SHORT&&(re=r.R16I),G===r.INT&&(re=r.R32I)),y===r.RG&&(G===r.FLOAT&&(re=r.RG32F),G===r.HALF_FLOAT&&(re=r.RG16F),G===r.UNSIGNED_BYTE&&(re=r.RG8)),y===r.RGBA){const Me=ie?la:ot.getTransfer(se);G===r.FLOAT&&(re=r.RGBA32F),G===r.HALF_FLOAT&&(re=r.RGBA16F),G===r.UNSIGNED_BYTE&&(re=Me===ut?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(re=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(re=r.RGB5_A1)}return(re===r.R16F||re===r.R32F||re===r.RG16F||re===r.RG32F||re===r.RGBA16F||re===r.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function P(S,y,G){return E(S,G)===!0||S.isFramebufferTexture&&S.minFilter!==Bt&&S.minFilter!==ei?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function T(S){return S===Bt||S===jl||S===js?r.NEAREST:r.LINEAR}function R(S){const y=S.target;y.removeEventListener("dispose",R),x(y),y.isVideoTexture&&h.delete(y)}function V(S){const y=S.target;y.removeEventListener("dispose",V),H(y)}function x(S){const y=i.get(S);if(y.__webglInit===void 0)return;const G=S.source,se=d.get(G);if(se){const ie=se[y.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&b(S),Object.keys(se).length===0&&d.delete(G)}i.remove(S)}function b(S){const y=i.get(S);r.deleteTexture(y.__webglTexture);const G=S.source,se=d.get(G);delete se[y.__cacheKey],o.memory.textures--}function H(S){const y=S.texture,G=i.get(S),se=i.get(y);if(se.__webglTexture!==void 0&&(r.deleteTexture(se.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(G.__webglFramebuffer[ie]))for(let re=0;re<G.__webglFramebuffer[ie].length;re++)r.deleteFramebuffer(G.__webglFramebuffer[ie][re]);else r.deleteFramebuffer(G.__webglFramebuffer[ie]);G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer[ie])}else{if(Array.isArray(G.__webglFramebuffer))for(let ie=0;ie<G.__webglFramebuffer.length;ie++)r.deleteFramebuffer(G.__webglFramebuffer[ie]);else r.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&r.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ie=0;ie<G.__webglColorRenderbuffer.length;ie++)G.__webglColorRenderbuffer[ie]&&r.deleteRenderbuffer(G.__webglColorRenderbuffer[ie]);G.__webglDepthRenderbuffer&&r.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let ie=0,re=y.length;ie<re;ie++){const Me=i.get(y[ie]);Me.__webglTexture&&(r.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(y[ie])}i.remove(y),i.remove(S)}let B=0;function ee(){B=0}function D(){const S=B;return S>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+n.maxTextures),B+=1,S}function O(S){const y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.wrapR||0),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.colorSpace),y.join()}function Y(S,y){const G=i.get(S);if(S.isVideoTexture&&at(S),S.isRenderTargetTexture===!1&&S.version>0&&G.__version!==S.version){const se=S.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(G,S,y);return}}t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+y)}function Z(S,y){const G=i.get(S);if(S.version>0&&G.__version!==S.version){ve(G,S,y);return}t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+y)}function J(S,y){const G=i.get(S);if(S.version>0&&G.__version!==S.version){ve(G,S,y);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+y)}function K(S,y){const G=i.get(S);if(S.version>0&&G.__version!==S.version){we(G,S,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+y)}const te={[Vs]:r.REPEAT,[ui]:r.CLAMP_TO_EDGE,[Ws]:r.MIRRORED_REPEAT},ne={[Bt]:r.NEAREST,[jl]:r.NEAREST_MIPMAP_NEAREST,[js]:r.NEAREST_MIPMAP_LINEAR,[ei]:r.LINEAR,[L0]:r.LINEAR_MIPMAP_NEAREST,[fn]:r.LINEAR_MIPMAP_LINEAR},pe={[V0]:r.NEVER,[K0]:r.ALWAYS,[W0]:r.LESS,[Ac]:r.LEQUAL,[j0]:r.EQUAL,[Y0]:r.GEQUAL,[X0]:r.GREATER,[q0]:r.NOTEQUAL};function j(S,y,G){if(G?(r.texParameteri(S,r.TEXTURE_WRAP_S,te[y.wrapS]),r.texParameteri(S,r.TEXTURE_WRAP_T,te[y.wrapT]),(S===r.TEXTURE_3D||S===r.TEXTURE_2D_ARRAY)&&r.texParameteri(S,r.TEXTURE_WRAP_R,te[y.wrapR]),r.texParameteri(S,r.TEXTURE_MAG_FILTER,ne[y.magFilter]),r.texParameteri(S,r.TEXTURE_MIN_FILTER,ne[y.minFilter])):(r.texParameteri(S,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(S,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(S===r.TEXTURE_3D||S===r.TEXTURE_2D_ARRAY)&&r.texParameteri(S,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(y.wrapS!==ui||y.wrapT!==ui)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(S,r.TEXTURE_MAG_FILTER,T(y.magFilter)),r.texParameteri(S,r.TEXTURE_MIN_FILTER,T(y.minFilter)),y.minFilter!==Bt&&y.minFilter!==ei&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(r.texParameteri(S,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(S,r.TEXTURE_COMPARE_FUNC,pe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Bt||y.minFilter!==js&&y.minFilter!==fn||y.type===Xi&&e.has("OES_texture_float_linear")===!1||s===!1&&y.type===gn&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(r.texParameterf(S,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,n.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function $(S,y){let G=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",R));const se=y.source;let ie=d.get(se);ie===void 0&&(ie={},d.set(se,ie));const re=O(y);if(re!==S.__cacheKey){ie[re]===void 0&&(ie[re]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ie[re].usedTimes++;const Me=ie[S.__cacheKey];Me!==void 0&&(ie[S.__cacheKey].usedTimes--,Me.usedTimes===0&&b(y)),S.__cacheKey=re,S.__webglTexture=ie[re].texture}return G}function ve(S,y,G){let se=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(se=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(se=r.TEXTURE_3D);const ie=$(S,y),re=y.source;t.bindTexture(se,S.__webglTexture,r.TEXTURE0+G);const Me=i.get(re);if(re.version!==Me.__version||ie===!0){t.activeTexture(r.TEXTURE0+G);const de=ot.getPrimaries(ot.workingColorSpace),ge=y.colorSpace===ti?null:ot.getPrimaries(y.colorSpace),Ae=y.colorSpace===ti||de===ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const He=p(y)&&f(y.image)===!1;let ae=v(y.image,He,!1,n.maxTextureSize);ae=ze(y,ae);const Qe=f(ae)||s,C=a.convert(y.format,y.colorSpace);let Q=a.convert(y.type),ce=A(y.internalFormat,C,Q,y.colorSpace,y.isVideoTexture);j(se,y,Qe);let le;const Ee=y.mipmaps,ke=s&&y.isVideoTexture!==!0&&ce!==ic,tt=Me.__version===void 0||ie===!0,Ve=P(y,ae,Qe);if(y.isDepthTexture)ce=r.DEPTH_COMPONENT,s?y.type===Xi?ce=r.DEPTH_COMPONENT32F:y.type===ji?ce=r.DEPTH_COMPONENT24:y.type===nr?ce=r.DEPTH24_STENCIL8:ce=r.DEPTH_COMPONENT16:y.type===Xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===ar&&ce===r.DEPTH_COMPONENT&&y.type!==Xs&&y.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=ji,Q=a.convert(y.type)),y.format===Pr&&ce===r.DEPTH_COMPONENT&&(ce=r.DEPTH_STENCIL,y.type!==nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=nr,Q=a.convert(y.type))),tt&&(ke?t.texStorage2D(r.TEXTURE_2D,1,ce,ae.width,ae.height):t.texImage2D(r.TEXTURE_2D,0,ce,ae.width,ae.height,0,C,Q,null));else if(y.isDataTexture)if(Ee.length>0&&Qe){ke&&tt&&t.texStorage2D(r.TEXTURE_2D,Ve,ce,Ee[0].width,Ee[0].height);for(let he=0,L=Ee.length;he<L;he++)le=Ee[he],ke?t.texSubImage2D(r.TEXTURE_2D,he,0,0,le.width,le.height,C,Q,le.data):t.texImage2D(r.TEXTURE_2D,he,ce,le.width,le.height,0,C,Q,le.data);y.generateMipmaps=!1}else ke?(tt&&t.texStorage2D(r.TEXTURE_2D,Ve,ce,ae.width,ae.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ae.width,ae.height,C,Q,ae.data)):t.texImage2D(r.TEXTURE_2D,0,ce,ae.width,ae.height,0,C,Q,ae.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ke&&tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ve,ce,Ee[0].width,Ee[0].height,ae.depth);for(let he=0,L=Ee.length;he<L;he++)le=Ee[he],y.format!==di?C!==null?ke?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,0,le.width,le.height,ae.depth,C,le.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,he,ce,le.width,le.height,ae.depth,0,le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,0,le.width,le.height,ae.depth,C,Q,le.data):t.texImage3D(r.TEXTURE_2D_ARRAY,he,ce,le.width,le.height,ae.depth,0,C,Q,le.data)}else{ke&&tt&&t.texStorage2D(r.TEXTURE_2D,Ve,ce,Ee[0].width,Ee[0].height);for(let he=0,L=Ee.length;he<L;he++)le=Ee[he],y.format!==di?C!==null?ke?t.compressedTexSubImage2D(r.TEXTURE_2D,he,0,0,le.width,le.height,C,le.data):t.compressedTexImage2D(r.TEXTURE_2D,he,ce,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage2D(r.TEXTURE_2D,he,0,0,le.width,le.height,C,Q,le.data):t.texImage2D(r.TEXTURE_2D,he,ce,le.width,le.height,0,C,Q,le.data)}else if(y.isDataArrayTexture)ke?(tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ve,ce,ae.width,ae.height,ae.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,C,Q,ae.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ce,ae.width,ae.height,ae.depth,0,C,Q,ae.data);else if(y.isData3DTexture)ke?(tt&&t.texStorage3D(r.TEXTURE_3D,Ve,ce,ae.width,ae.height,ae.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,C,Q,ae.data)):t.texImage3D(r.TEXTURE_3D,0,ce,ae.width,ae.height,ae.depth,0,C,Q,ae.data);else if(y.isFramebufferTexture){if(tt)if(ke)t.texStorage2D(r.TEXTURE_2D,Ve,ce,ae.width,ae.height);else{let he=ae.width,L=ae.height;for(let oe=0;oe<Ve;oe++)t.texImage2D(r.TEXTURE_2D,oe,ce,he,L,0,C,Q,null),he>>=1,L>>=1}}else if(Ee.length>0&&Qe){ke&&tt&&t.texStorage2D(r.TEXTURE_2D,Ve,ce,Ee[0].width,Ee[0].height);for(let he=0,L=Ee.length;he<L;he++)le=Ee[he],ke?t.texSubImage2D(r.TEXTURE_2D,he,0,0,C,Q,le):t.texImage2D(r.TEXTURE_2D,he,ce,C,Q,le);y.generateMipmaps=!1}else ke?(tt&&t.texStorage2D(r.TEXTURE_2D,Ve,ce,ae.width,ae.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,C,Q,ae)):t.texImage2D(r.TEXTURE_2D,0,ce,C,Q,ae);E(y,Qe)&&w(se),Me.__version=re.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function we(S,y,G){if(y.image.length!==6)return;const se=$(S,y),ie=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,S.__webglTexture,r.TEXTURE0+G);const re=i.get(ie);if(ie.version!==re.__version||se===!0){t.activeTexture(r.TEXTURE0+G);const Me=ot.getPrimaries(ot.workingColorSpace),de=y.colorSpace===ti?null:ot.getPrimaries(y.colorSpace),ge=y.colorSpace===ti||Me===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ae=y.isCompressedTexture||y.image[0].isCompressedTexture,He=y.image[0]&&y.image[0].isDataTexture,ae=[];for(let he=0;he<6;he++)!Ae&&!He?ae[he]=v(y.image[he],!1,!0,n.maxCubemapSize):ae[he]=He?y.image[he].image:y.image[he],ae[he]=ze(y,ae[he]);const Qe=ae[0],C=f(Qe)||s,Q=a.convert(y.format,y.colorSpace),ce=a.convert(y.type),le=A(y.internalFormat,Q,ce,y.colorSpace),Ee=s&&y.isVideoTexture!==!0,ke=re.__version===void 0||se===!0;let tt=P(y,Qe,C);j(r.TEXTURE_CUBE_MAP,y,C);let Ve;if(Ae){Ee&&ke&&t.texStorage2D(r.TEXTURE_CUBE_MAP,tt,le,Qe.width,Qe.height);for(let he=0;he<6;he++){Ve=ae[he].mipmaps;for(let L=0;L<Ve.length;L++){const oe=Ve[L];y.format!==di?Q!==null?Ee?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,0,0,oe.width,oe.height,Q,oe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,le,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,0,0,oe.width,oe.height,Q,ce,oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,le,oe.width,oe.height,0,Q,ce,oe.data)}}}else{Ve=y.mipmaps,Ee&&ke&&(Ve.length>0&&tt++,t.texStorage2D(r.TEXTURE_CUBE_MAP,tt,le,ae[0].width,ae[0].height));for(let he=0;he<6;he++)if(He){Ee?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ae[he].width,ae[he].height,Q,ce,ae[he].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,le,ae[he].width,ae[he].height,0,Q,ce,ae[he].data);for(let L=0;L<Ve.length;L++){const oe=Ve[L].image[he].image;Ee?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,0,0,oe.width,oe.height,Q,ce,oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,le,oe.width,oe.height,0,Q,ce,oe.data)}}else{Ee?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Q,ce,ae[he]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,le,Q,ce,ae[he]);for(let L=0;L<Ve.length;L++){const oe=Ve[L];Ee?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,0,0,Q,ce,oe.image[he]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,le,Q,ce,oe.image[he])}}}E(y,C)&&w(r.TEXTURE_CUBE_MAP),re.__version=ie.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function ye(S,y,G,se,ie,re){const Me=a.convert(G.format,G.colorSpace),de=a.convert(G.type),ge=A(G.internalFormat,Me,de,G.colorSpace);if(!i.get(y).__hasExternalTextures){const Ae=Math.max(1,y.width>>re),He=Math.max(1,y.height>>re);ie===r.TEXTURE_3D||ie===r.TEXTURE_2D_ARRAY?t.texImage3D(ie,re,ge,Ae,He,y.depth,0,Me,de,null):t.texImage2D(ie,re,ge,Ae,He,0,Me,de,null)}t.bindFramebuffer(r.FRAMEBUFFER,S),xe(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,ie,i.get(G).__webglTexture,0,Ne(y)):(ie===r.TEXTURE_2D||ie>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,se,ie,i.get(G).__webglTexture,re),t.bindFramebuffer(r.FRAMEBUFFER,null)}function De(S,y,G){if(r.bindRenderbuffer(r.RENDERBUFFER,S),y.depthBuffer&&!y.stencilBuffer){let se=s===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(G||xe(y)){const ie=y.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Xi?se=r.DEPTH_COMPONENT32F:ie.type===ji&&(se=r.DEPTH_COMPONENT24));const re=Ne(y);xe(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,re,se,y.width,y.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,re,se,y.width,y.height)}else r.renderbufferStorage(r.RENDERBUFFER,se,y.width,y.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,S)}else if(y.depthBuffer&&y.stencilBuffer){const se=Ne(y);G&&xe(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,se,r.DEPTH24_STENCIL8,y.width,y.height):xe(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se,r.DEPTH24_STENCIL8,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,S)}else{const se=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ie=0;ie<se.length;ie++){const re=se[ie],Me=a.convert(re.format,re.colorSpace),de=a.convert(re.type),ge=A(re.internalFormat,Me,de,re.colorSpace),Ae=Ne(y);G&&xe(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ae,ge,y.width,y.height):xe(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ae,ge,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,ge,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ue(S,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y(y.depthTexture,0);const G=i.get(y.depthTexture).__webglTexture,se=Ne(y);if(y.depthTexture.format===ar)xe(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,G,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,G,0);else if(y.depthTexture.format===Pr)xe(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,G,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function Te(S){const y=i.get(S),G=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ue(y.__webglFramebuffer,S)}else if(G){y.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[se]),y.__webglDepthbuffer[se]=r.createRenderbuffer(),De(y.__webglDepthbuffer[se],S,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=r.createRenderbuffer(),De(y.__webglDepthbuffer,S,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ge(S,y,G){const se=i.get(S);y!==void 0&&ye(se.__webglFramebuffer,S,S.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&Te(S)}function k(S){const y=S.texture,G=i.get(S),se=i.get(y);S.addEventListener("dispose",V),S.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture()),se.__version=y.version,o.memory.textures++);const ie=S.isWebGLCubeRenderTarget===!0,re=S.isWebGLMultipleRenderTargets===!0,Me=f(S)||s;if(ie){G.__webglFramebuffer=[];for(let de=0;de<6;de++)if(s&&y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[de]=[];for(let ge=0;ge<y.mipmaps.length;ge++)G.__webglFramebuffer[de][ge]=r.createFramebuffer()}else G.__webglFramebuffer[de]=r.createFramebuffer()}else{if(s&&y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let de=0;de<y.mipmaps.length;de++)G.__webglFramebuffer[de]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(re)if(n.drawBuffers){const de=S.texture;for(let ge=0,Ae=de.length;ge<Ae;ge++){const He=i.get(de[ge]);He.__webglTexture===void 0&&(He.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&S.samples>0&&xe(S)===!1){const de=re?y:[y];G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ge=0;ge<de.length;ge++){const Ae=de[ge];G.__webglColorRenderbuffer[ge]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[ge]);const He=a.convert(Ae.format,Ae.colorSpace),ae=a.convert(Ae.type),Qe=A(Ae.internalFormat,He,ae,Ae.colorSpace,S.isXRRenderTarget===!0),C=Ne(S);r.renderbufferStorageMultisample(r.RENDERBUFFER,C,Qe,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,G.__webglColorRenderbuffer[ge])}r.bindRenderbuffer(r.RENDERBUFFER,null),S.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),De(G.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ie){t.bindTexture(r.TEXTURE_CUBE_MAP,se.__webglTexture),j(r.TEXTURE_CUBE_MAP,y,Me);for(let de=0;de<6;de++)if(s&&y.mipmaps&&y.mipmaps.length>0)for(let ge=0;ge<y.mipmaps.length;ge++)ye(G.__webglFramebuffer[de][ge],S,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,ge);else ye(G.__webglFramebuffer[de],S,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);E(y,Me)&&w(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const de=S.texture;for(let ge=0,Ae=de.length;ge<Ae;ge++){const He=de[ge],ae=i.get(He);t.bindTexture(r.TEXTURE_2D,ae.__webglTexture),j(r.TEXTURE_2D,He,Me),ye(G.__webglFramebuffer,S,He,r.COLOR_ATTACHMENT0+ge,r.TEXTURE_2D,0),E(He,Me)&&w(r.TEXTURE_2D)}t.unbindTexture()}else{let de=r.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(s?de=S.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,se.__webglTexture),j(de,y,Me),s&&y.mipmaps&&y.mipmaps.length>0)for(let ge=0;ge<y.mipmaps.length;ge++)ye(G.__webglFramebuffer[ge],S,y,r.COLOR_ATTACHMENT0,de,ge);else ye(G.__webglFramebuffer,S,y,r.COLOR_ATTACHMENT0,de,0);E(y,Me)&&w(de),t.unbindTexture()}S.depthBuffer&&Te(S)}function dt(S){const y=f(S)||s,G=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let se=0,ie=G.length;se<ie;se++){const re=G[se];if(E(re,y)){const Me=S.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,de=i.get(re).__webglTexture;t.bindTexture(Me,de),w(Me),t.unbindTexture()}}}function Se(S){if(s&&S.samples>0&&xe(S)===!1){const y=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],G=S.width,se=S.height;let ie=r.COLOR_BUFFER_BIT;const re=[],Me=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=i.get(S),ge=S.isWebGLMultipleRenderTargets===!0;if(ge)for(let Ae=0;Ae<y.length;Ae++)t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Ae=0;Ae<y.length;Ae++){re.push(r.COLOR_ATTACHMENT0+Ae),S.depthBuffer&&re.push(Me);const He=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(He===!1&&(S.depthBuffer&&(ie|=r.DEPTH_BUFFER_BIT),S.stencilBuffer&&(ie|=r.STENCIL_BUFFER_BIT)),ge&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,de.__webglColorRenderbuffer[Ae]),He===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Me]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Me])),ge){const ae=i.get(y[Ae]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ae,0)}r.blitFramebuffer(0,0,G,se,0,0,G,se,ie,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ge)for(let Ae=0;Ae<y.length;Ae++){t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,de.__webglColorRenderbuffer[Ae]);const He=i.get(y[Ae]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.TEXTURE_2D,He,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function Ne(S){return Math.min(n.maxSamples,S.samples)}function xe(S){const y=i.get(S);return s&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function at(S){const y=o.render.frame;h.get(S)!==y&&(h.set(S,y),S.update())}function ze(S,y){const G=S.colorSpace,se=S.format,ie=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===$s||G!==Ri&&G!==ti&&(ot.getTransfer(G)===ut?s===!1?e.has("EXT_sRGB")===!0&&se===di?(S.format=$s,S.minFilter=ei,S.generateMipmaps=!1):y=Nc.sRGBToLinear(y):(se!==di||ie!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),y}this.allocateTextureUnit=D,this.resetTextureUnits=ee,this.setTexture2D=Y,this.setTexture2DArray=Z,this.setTexture3D=J,this.setTextureCube=K,this.rebindTextures=Ge,this.setupRenderTarget=k,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=xe}function hb(r,e,t){const i=t.isWebGL2;function n(a,o=ti){let s;const l=ot.getTransfer(o);if(a===Wi)return r.UNSIGNED_BYTE;if(a===ql)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Yl)return r.UNSIGNED_SHORT_5_5_5_1;if(a===I0)return r.BYTE;if(a===D0)return r.SHORT;if(a===Xs)return r.UNSIGNED_SHORT;if(a===Xl)return r.INT;if(a===ji)return r.UNSIGNED_INT;if(a===Xi)return r.FLOAT;if(a===gn)return i?r.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===U0)return r.ALPHA;if(a===di)return r.RGBA;if(a===N0)return r.LUMINANCE;if(a===O0)return r.LUMINANCE_ALPHA;if(a===ar)return r.DEPTH_COMPONENT;if(a===Pr)return r.DEPTH_STENCIL;if(a===$s)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===F0)return r.RED;if(a===Kl)return r.RED_INTEGER;if(a===z0)return r.RG;if(a===Jl)return r.RG_INTEGER;if(a===Zl)return r.RGBA_INTEGER;if(a===qs||a===Ys||a===Ks||a===Js)if(l===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===qs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===qs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Ys)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Ks)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Js)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Ql||a===$l||a===ec||a===tc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===Ql)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===$l)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===ec)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===tc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===ic)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===rc||a===nc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===rc)return l===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===nc)return l===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===ac||a===sc||a===oc||a===lc||a===cc||a===hc||a===uc||a===dc||a===pc||a===mc||a===fc||a===gc||a===_c||a===vc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===ac)return l===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===sc)return l===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===oc)return l===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===lc)return l===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===cc)return l===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===hc)return l===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===uc)return l===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===dc)return l===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===pc)return l===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===mc)return l===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===fc)return l===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===gc)return l===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===_c)return l===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===vc)return l===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Zs||a===wc||a===yc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===Zs)return l===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===wc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===yc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===H0||a===xc||a===Mc||a===bc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===Zs)return s.COMPRESSED_RED_RGTC1_EXT;if(a===xc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Mc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===bc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===nr?i?r.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):r[a]!==void 0?r[a]:null}return{convert:n}}class ub extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ba extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const db={type:"move"};class Po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ba,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ba,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ba,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const f=t.getJointPose(v,i),p=this._getHandJoint(c,v);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(s.matrix.fromArray(n.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,n.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(n.linearVelocity)):s.hasLinearVelocity=!1,n.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(n.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(db)))}return s!==null&&(s.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ba;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class pb extends or{constructor(e,t){super();const i=this;let n=null,a=1,o=null,s="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,_=null;const v=t.getContextAttributes();let f=null,p=null;const E=[],w=[],A=new Le;let P=null;const T=new ni;T.layers.enable(1),T.viewport=new Ct;const R=new ni;R.layers.enable(2),R.viewport=new Ct;const V=[T,R],x=new ub;x.layers.enable(1),x.layers.enable(2);let b=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let $=E[j];return $===void 0&&($=new Po,E[j]=$),$.getTargetRaySpace()},this.getControllerGrip=function(j){let $=E[j];return $===void 0&&($=new Po,E[j]=$),$.getGripSpace()},this.getHand=function(j){let $=E[j];return $===void 0&&($=new Po,E[j]=$),$.getHandSpace()};function B(j){const $=w.indexOf(j.inputSource);if($===-1)return;const ve=E[$];ve!==void 0&&(ve.update(j.inputSource,j.frame,c||o),ve.dispatchEvent({type:j.type,data:j.inputSource}))}function ee(){n.removeEventListener("select",B),n.removeEventListener("selectstart",B),n.removeEventListener("selectend",B),n.removeEventListener("squeeze",B),n.removeEventListener("squeezestart",B),n.removeEventListener("squeezeend",B),n.removeEventListener("end",ee),n.removeEventListener("inputsourceschange",D);for(let j=0;j<E.length;j++){const $=w[j];$!==null&&(w[j]=null,E[j].disconnect($))}b=null,H=null,e.setRenderTarget(f),m=null,d=null,u=null,n=null,p=null,pe.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=async function(j){if(n=j,n!==null){if(f=e.getRenderTarget(),n.addEventListener("select",B),n.addEventListener("selectstart",B),n.addEventListener("selectend",B),n.addEventListener("squeeze",B),n.addEventListener("squeezestart",B),n.addEventListener("squeezeend",B),n.addEventListener("end",ee),n.addEventListener("inputsourceschange",D),v.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(A),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:n.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(n,t,$),n.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new lr(m.framebufferWidth,m.framebufferHeight,{format:di,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let $=null,ve=null,we=null;v.depth&&(we=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=v.stencil?Pr:ar,ve=v.stencil?nr:ji);const ye={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:a};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(ye),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new lr(d.textureWidth,d.textureHeight,{format:di,type:Wi,depthTexture:new dh(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const De=e.properties.get(p);De.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(s),pe.setContext(n),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function D(j){for(let $=0;$<j.removed.length;$++){const ve=j.removed[$],we=w.indexOf(ve);we>=0&&(w[we]=null,E[we].disconnect(ve))}for(let $=0;$<j.added.length;$++){const ve=j.added[$];let we=w.indexOf(ve);if(we===-1){for(let De=0;De<E.length;De++)if(De>=w.length){w.push(ve),we=De;break}else if(w[De]===null){w[De]=ve,we=De;break}if(we===-1)break}const ye=E[we];ye&&ye.connect(ve)}}const O=new N,Y=new N;function Z(j,$,ve){O.setFromMatrixPosition($.matrixWorld),Y.setFromMatrixPosition(ve.matrixWorld);const we=O.distanceTo(Y),ye=$.projectionMatrix.elements,De=ve.projectionMatrix.elements,Ue=ye[14]/(ye[10]-1),Te=ye[14]/(ye[10]+1),Ge=(ye[9]+1)/ye[5],k=(ye[9]-1)/ye[5],dt=(ye[8]-1)/ye[0],Se=(De[8]+1)/De[0],Ne=Ue*dt,xe=Ue*Se,at=we/(-dt+Se),ze=at*-dt;$.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ze),j.translateZ(at),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const S=Ue+at,y=Te+at,G=Ne-ze,se=xe+(we-ze),ie=Ge*Te/y*S,re=k*Te/y*S;j.projectionMatrix.makePerspective(G,se,ie,re,S,y),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function J(j,$){$===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices($.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(n===null)return;x.near=R.near=T.near=j.near,x.far=R.far=T.far=j.far,(b!==x.near||H!==x.far)&&(n.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,H=x.far);const $=j.parent,ve=x.cameras;J(x,$);for(let we=0;we<ve.length;we++)J(ve[we],$);ve.length===2?Z(x,T,R):x.projectionMatrix.copy(T.projectionMatrix),K(j,x,$)};function K(j,$,ve){ve===null?j.matrix.copy($.matrixWorld):(j.matrix.copy(ve.matrixWorld),j.matrix.invert(),j.matrix.multiply($.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy($.projectionMatrix),j.projectionMatrixInverse.copy($.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=vn*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)};let te=null;function ne(j,$){if(h=$.getViewerPose(c||o),_=$,h!==null){const ve=h.views;m!==null&&(e.setRenderTargetFramebuffer(p,m.framebuffer),e.setRenderTarget(p));let we=!1;ve.length!==x.cameras.length&&(x.cameras.length=0,we=!0);for(let ye=0;ye<ve.length;ye++){const De=ve[ye];let Ue=null;if(m!==null)Ue=m.getViewport(De);else{const Ge=u.getViewSubImage(d,De);Ue=Ge.viewport,ye===0&&(e.setRenderTargetTextures(p,Ge.colorTexture,d.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(p))}let Te=V[ye];Te===void 0&&(Te=new ni,Te.layers.enable(ye),Te.viewport=new Ct,V[ye]=Te),Te.matrix.fromArray(De.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(De.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),ye===0&&(x.matrix.copy(Te.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),we===!0&&x.cameras.push(Te)}}for(let ve=0;ve<E.length;ve++){const we=w[ve],ye=E[ve];we!==null&&ye!==void 0&&ye.update(we,$,c||o)}te&&te(j,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),_=null}const pe=new rh;pe.setAnimationLoop(ne),this.setAnimationLoop=function(j){te=j},this.dispose=function(){}}}function mb(r,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function i(f,p){p.color.getRGB(f.fogColor.value,eh(r)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function n(f,p,E,w,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(f,p):p.isMeshToonMaterial?(a(f,p),u(f,p)):p.isMeshPhongMaterial?(a(f,p),h(f,p)):p.isMeshStandardMaterial?(a(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,A)):p.isMeshMatcapMaterial?(a(f,p),_(f,p)):p.isMeshDepthMaterial?a(f,p):p.isMeshDistanceMaterial?(a(f,p),v(f,p)):p.isMeshNormalMaterial?a(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&s(f,p)):p.isPointsMaterial?l(f,p,E,w):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Xt&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Xt&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const E=e.get(p).envMap;if(E&&(f.envMap.value=E,f.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const w=r._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*w,t(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function s(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,E,w){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*E,f.scale.value=w*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,E){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=E.texture,f.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,p){p.matcap&&(f.matcap.value=p.matcap)}function v(f,p){const E=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(E.matrixWorld),f.nearDistance.value=E.shadow.camera.near,f.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function fb(r,e,t,i){let n={},a={},o=[];const s=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,w){const A=w.program;i.uniformBlockBinding(E,A)}function c(E,w){let A=n[E.id];A===void 0&&(_(E),A=h(E),n[E.id]=A,E.addEventListener("dispose",f));const P=w.program;i.updateUBOMapping(E,P);const T=e.render.frame;a[E.id]!==T&&(d(E),a[E.id]=T)}function h(E){const w=u();E.__bindingPointIndex=w;const A=r.createBuffer(),P=E.__size,T=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,P,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,A),A}function u(){for(let E=0;E<s;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const w=n[E.id],A=E.uniforms,P=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let T=0,R=A.length;T<R;T++){const V=Array.isArray(A[T])?A[T]:[A[T]];for(let x=0,b=V.length;x<b;x++){const H=V[x];if(m(H,T,x,P)===!0){const B=H.__offset,ee=Array.isArray(H.value)?H.value:[H.value];let D=0;for(let O=0;O<ee.length;O++){const Y=ee[O],Z=v(Y);typeof Y=="number"||typeof Y=="boolean"?(H.__data[0]=Y,r.bufferSubData(r.UNIFORM_BUFFER,B+D,H.__data)):Y.isMatrix3?(H.__data[0]=Y.elements[0],H.__data[1]=Y.elements[1],H.__data[2]=Y.elements[2],H.__data[3]=0,H.__data[4]=Y.elements[3],H.__data[5]=Y.elements[4],H.__data[6]=Y.elements[5],H.__data[7]=0,H.__data[8]=Y.elements[6],H.__data[9]=Y.elements[7],H.__data[10]=Y.elements[8],H.__data[11]=0):(Y.toArray(H.__data,D),D+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(E,w,A,P){const T=E.value,R=w+"_"+A;if(P[R]===void 0)return typeof T=="number"||typeof T=="boolean"?P[R]=T:P[R]=T.clone(),!0;{const V=P[R];if(typeof T=="number"||typeof T=="boolean"){if(V!==T)return P[R]=T,!0}else if(V.equals(T)===!1)return V.copy(T),!0}return!1}function _(E){const w=E.uniforms;let A=0;const P=16;for(let R=0,V=w.length;R<V;R++){const x=Array.isArray(w[R])?w[R]:[w[R]];for(let b=0,H=x.length;b<H;b++){const B=x[b],ee=Array.isArray(B.value)?B.value:[B.value];for(let D=0,O=ee.length;D<O;D++){const Y=ee[D],Z=v(Y),J=A%P;J!==0&&P-J<Z.boundary&&(A+=P-J),B.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=A,A+=Z.storage}}}const T=A%P;return T>0&&(A+=P-T),E.__size=A,E.__cache={},this}function v(E){const w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function f(E){const w=E.target;w.removeEventListener("dispose",f);const A=o.indexOf(w.__bindingPointIndex);o.splice(A,1),r.deleteBuffer(n[w.id]),delete n[w.id],delete a[w.id]}function p(){for(const E in n)r.deleteBuffer(n[E]);o=[],n={},a={}}return{bind:l,update:c,dispose:p}}class Dh{constructor(e={}){const{canvas:t=uv(),context:i=null,depth:n=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),_=new Int32Array(4);let v=null,f=null;const p=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dt,this._useLegacyLights=!1,this.toneMapping=Vi,this.toneMappingExposure=1;const w=this;let A=!1,P=0,T=0,R=null,V=-1,x=null;const b=new Ct,H=new Ct;let B=null;const ee=new Ie(0);let D=0,O=t.width,Y=t.height,Z=1,J=null,K=null;const te=new Ct(0,0,O,Y),ne=new Ct(0,0,O,Y);let pe=!1;const j=new Mo;let $=!1,ve=!1,we=null;const ye=new _t,De=new Le,Ue=new N,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ge(){return R===null?Z:1}let k=i;function dt(M,z){for(let X=0;X<M.length;X++){const q=M[X],W=t.getContext(q,z);if(W!==null)return W}return null}try{const M={alpha:!0,depth:n,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zs}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",oe,!1),k===null){const z=["webgl2","webgl","experimental-webgl"];if(w.isWebGL1Renderer===!0&&z.shift(),k=dt(z,M),k===null)throw dt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Se,Ne,xe,at,ze,S,y,G,se,ie,re,Me,de,ge,Ae,He,ae,Qe,C,Q,ce,le,Ee,ke;function tt(){Se=new Ex(k),Ne=new wx(k,Se,e),Se.init(Ne),le=new hb(k,Se,Ne),xe=new lb(k,Se,Ne),at=new Rx(k),ze=new YM,S=new cb(k,Se,xe,ze,Ne,le,at),y=new xx(w),G=new Sx(w),se=new Ov(k,Ne),Ee=new _x(k,Se,se,Ne),ie=new Tx(k,se,at,Ee),re=new Ix(k,ie,se,at),C=new Lx(k,Ne,S),He=new yx(ze),Me=new qM(w,y,G,Se,Ne,Ee,He),de=new mb(w,ze),ge=new JM,Ae=new ib(Se,Ne),Qe=new gx(w,y,G,xe,re,d,l),ae=new ob(w,re,Ne),ke=new fb(k,at,Ne,xe),Q=new vx(k,Se,at,Ne),ce=new Ax(k,Se,at,Ne),at.programs=Me.programs,w.capabilities=Ne,w.extensions=Se,w.properties=ze,w.renderLists=ge,w.shadowMap=ae,w.state=xe,w.info=at}tt();const Ve=new pb(w,k);this.xr=Ve,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const M=Se.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Se.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(M){M!==void 0&&(Z=M,this.setSize(O,Y,!1))},this.getSize=function(M){return M.set(O,Y)},this.setSize=function(M,z,X=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=M,Y=z,t.width=Math.floor(M*Z),t.height=Math.floor(z*Z),X===!0&&(t.style.width=M+"px",t.style.height=z+"px"),this.setViewport(0,0,M,z)},this.getDrawingBufferSize=function(M){return M.set(O*Z,Y*Z).floor()},this.setDrawingBufferSize=function(M,z,X){O=M,Y=z,Z=X,t.width=Math.floor(M*X),t.height=Math.floor(z*X),this.setViewport(0,0,M,z)},this.getCurrentViewport=function(M){return M.copy(b)},this.getViewport=function(M){return M.copy(te)},this.setViewport=function(M,z,X,q){M.isVector4?te.set(M.x,M.y,M.z,M.w):te.set(M,z,X,q),xe.viewport(b.copy(te).multiplyScalar(Z).floor())},this.getScissor=function(M){return M.copy(ne)},this.setScissor=function(M,z,X,q){M.isVector4?ne.set(M.x,M.y,M.z,M.w):ne.set(M,z,X,q),xe.scissor(H.copy(ne).multiplyScalar(Z).floor())},this.getScissorTest=function(){return pe},this.setScissorTest=function(M){xe.setScissorTest(pe=M)},this.setOpaqueSort=function(M){J=M},this.setTransparentSort=function(M){K=M},this.getClearColor=function(M){return M.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(M=!0,z=!0,X=!0){let q=0;if(M){let W=!1;if(R!==null){const me=R.texture.format;W=me===Zl||me===Jl||me===Kl}if(W){const me=R.texture.type,Ce=me===Wi||me===ji||me===Xs||me===nr||me===ql||me===Yl,Fe=Qe.getClearColor(),Be=Qe.getClearAlpha(),et=Fe.r,Xe=Fe.g,qe=Fe.b;Ce?(m[0]=et,m[1]=Xe,m[2]=qe,m[3]=Be,k.clearBufferuiv(k.COLOR,0,m)):(_[0]=et,_[1]=Xe,_[2]=qe,_[3]=Be,k.clearBufferiv(k.COLOR,0,_))}else q|=k.COLOR_BUFFER_BIT}z&&(q|=k.DEPTH_BUFFER_BIT),X&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),ge.dispose(),Ae.dispose(),ze.dispose(),y.dispose(),G.dispose(),re.dispose(),Ee.dispose(),ke.dispose(),Me.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",si),Ve.removeEventListener("sessionend",ht),we&&(we.dispose(),we=null),Wt.stop()};function he(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const M=at.autoReset,z=ae.enabled,X=ae.autoUpdate,q=ae.needsUpdate,W=ae.type;tt(),at.autoReset=M,ae.enabled=z,ae.autoUpdate=X,ae.needsUpdate=q,ae.type=W}function oe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function fe(M){const z=M.target;z.removeEventListener("dispose",fe),Oe(z)}function Oe(M){Re(M),ze.remove(M)}function Re(M){const z=ze.get(M).programs;z!==void 0&&(z.forEach(function(X){Me.releaseProgram(X)}),M.isShaderMaterial&&Me.releaseShaderCache(M))}this.renderBufferDirect=function(M,z,X,q,W,me){z===null&&(z=Te);const Ce=W.isMesh&&W.matrixWorld.determinant()<0,Fe=nS(M,z,X,q,W);xe.setMaterial(q,Ce);let Be=X.index,et=1;if(q.wireframe===!0){if(Be=ie.getWireframeAttribute(X),Be===void 0)return;et=2}const Xe=X.drawRange,qe=X.attributes.position;let zt=Xe.start*et,Rt=(Xe.start+Xe.count)*et;me!==null&&(zt=Math.max(zt,me.start*et),Rt=Math.min(Rt,(me.start+me.count)*et)),Be!==null?(zt=Math.max(zt,0),Rt=Math.min(Rt,Be.count)):qe!=null&&(zt=Math.max(zt,0),Rt=Math.min(Rt,qe.count));const oi=Rt-zt;if(oi<0||oi===1/0)return;Ee.setup(W,q,Fe,X,Be);let Ni,vt=Q;if(Be!==null&&(Ni=se.get(Be),vt=ce,vt.setIndex(Ni)),W.isMesh)q.wireframe===!0?(xe.setLineWidth(q.wireframeLinewidth*Ge()),vt.setMode(k.LINES)):vt.setMode(k.TRIANGLES);else if(W.isLine){let Je=q.linewidth;Je===void 0&&(Je=1),xe.setLineWidth(Je*Ge()),W.isLineSegments?vt.setMode(k.LINES):W.isLineLoop?vt.setMode(k.LINE_LOOP):vt.setMode(k.LINE_STRIP)}else W.isPoints?vt.setMode(k.POINTS):W.isSprite&&vt.setMode(k.TRIANGLES);if(W.isBatchedMesh)vt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)vt.renderInstances(zt,oi,W.count);else if(X.isInstancedBufferGeometry){const Je=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Xo=Math.min(X.instanceCount,Je);vt.renderInstances(zt,oi,Xo)}else vt.render(zt,oi)};function rt(M,z,X){M.transparent===!0&&M.side===xi&&M.forceSinglePass===!1?(M.side=Xt,M.needsUpdate=!0,Qa(M,z,X),M.side=Gi,M.needsUpdate=!0,Qa(M,z,X),M.side=xi):Qa(M,z,X)}this.compile=function(M,z,X=null){X===null&&(X=M),f=Ae.get(X),f.init(),E.push(f),X.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(f.pushLight(W),W.castShadow&&f.pushShadow(W))}),M!==X&&M.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(f.pushLight(W),W.castShadow&&f.pushShadow(W))}),f.setupLights(w._useLegacyLights);const q=new Set;return M.traverse(function(W){const me=W.material;if(me)if(Array.isArray(me))for(let Ce=0;Ce<me.length;Ce++){const Fe=me[Ce];rt(Fe,X,W),q.add(Fe)}else rt(me,X,W),q.add(me)}),E.pop(),f=null,q},this.compileAsync=function(M,z,X=null){const q=this.compile(M,z,X);return new Promise(W=>{function me(){if(q.forEach(function(Ce){ze.get(Ce).currentProgram.isReady()&&q.delete(Ce)}),q.size===0){W(M);return}setTimeout(me,10)}Se.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let ct=null;function Mt(M){ct&&ct(M)}function si(){Wt.stop()}function ht(){Wt.start()}const Wt=new rh;Wt.setAnimationLoop(Mt),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(M){ct=M,Ve.setAnimationLoop(M),M===null?Wt.stop():Wt.start()},Ve.addEventListener("sessionstart",si),Ve.addEventListener("sessionend",ht),this.render=function(M,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(z),z=Ve.getCamera()),M.isScene===!0&&M.onBeforeRender(w,M,z,R),f=Ae.get(M,E.length),f.init(),E.push(f),ye.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),j.setFromProjectionMatrix(ye),ve=this.localClippingEnabled,$=He.init(this.clippingPlanes,ve),v=ge.get(M,p.length),v.init(),p.push(v),Ei(M,z,0,w.sortObjects),v.finish(),w.sortObjects===!0&&v.sort(J,K),this.info.render.frame++,$===!0&&He.beginShadows();const X=f.state.shadowsArray;if(ae.render(X,M,z),$===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qe.render(v,M),f.setupLights(w._useLegacyLights),z.isArrayCamera){const q=z.cameras;for(let W=0,me=q.length;W<me;W++){const Ce=q[W];iu(v,M,Ce,Ce.viewport)}}else iu(v,M,z);R!==null&&(S.updateMultisampleRenderTarget(R),S.updateRenderTargetMipmap(R)),M.isScene===!0&&M.onAfterRender(w,M,z),Ee.resetDefaultState(),V=-1,x=null,E.pop(),E.length>0?f=E[E.length-1]:f=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Ei(M,z,X,q){if(M.visible===!1)return;if(M.layers.test(z.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(z);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||j.intersectsSprite(M)){q&&Ue.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ye);const me=re.update(M),Ce=M.material;Ce.visible&&v.push(M,me,Ce,X,Ue.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||j.intersectsObject(M))){const me=re.update(M),Ce=M.material;if(q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ue.copy(M.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ue.copy(me.boundingSphere.center)),Ue.applyMatrix4(M.matrixWorld).applyMatrix4(ye)),Array.isArray(Ce)){const Fe=me.groups;for(let Be=0,et=Fe.length;Be<et;Be++){const Xe=Fe[Be],qe=Ce[Xe.materialIndex];qe&&qe.visible&&v.push(M,me,qe,X,Ue.z,Xe)}}else Ce.visible&&v.push(M,me,Ce,X,Ue.z,null)}}const W=M.children;for(let me=0,Ce=W.length;me<Ce;me++)Ei(W[me],z,X,q)}function iu(M,z,X,q){const W=M.opaque,me=M.transmissive,Ce=M.transparent;f.setupLightsView(X),$===!0&&He.setGlobalState(w.clippingPlanes,X),me.length>0&&rS(W,me,z,X),q&&xe.viewport(b.copy(q)),W.length>0&&Za(W,z,X),me.length>0&&Za(me,z,X),Ce.length>0&&Za(Ce,z,X),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function rS(M,z,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const W=Ne.isWebGL2;we===null&&(we=new lr(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?gn:Wi,minFilter:fn,samples:W?4:0})),w.getDrawingBufferSize(De),W?we.setSize(De.x,De.y):we.setSize(pa(De.x),pa(De.y));const me=w.getRenderTarget();w.setRenderTarget(we),w.getClearColor(ee),D=w.getClearAlpha(),D<1&&w.setClearColor(16777215,.5),w.clear();const Ce=w.toneMapping;w.toneMapping=Vi,Za(M,X,q),S.updateMultisampleRenderTarget(we),S.updateRenderTargetMipmap(we);let Fe=!1;for(let Be=0,et=z.length;Be<et;Be++){const Xe=z[Be],qe=Xe.object,zt=Xe.geometry,Rt=Xe.material,oi=Xe.group;if(Rt.side===xi&&qe.layers.test(q.layers)){const Ni=Rt.side;Rt.side=Xt,Rt.needsUpdate=!0,ru(qe,X,q,zt,Rt,oi),Rt.side=Ni,Rt.needsUpdate=!0,Fe=!0}}Fe===!0&&(S.updateMultisampleRenderTarget(we),S.updateRenderTargetMipmap(we)),w.setRenderTarget(me),w.setClearColor(ee,D),w.toneMapping=Ce}function Za(M,z,X){const q=z.isScene===!0?z.overrideMaterial:null;for(let W=0,me=M.length;W<me;W++){const Ce=M[W],Fe=Ce.object,Be=Ce.geometry,et=q===null?Ce.material:q,Xe=Ce.group;Fe.layers.test(X.layers)&&ru(Fe,z,X,Be,et,Xe)}}function ru(M,z,X,q,W,me){M.onBeforeRender(w,z,X,q,W,me),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(w,z,X,q,M,me),W.transparent===!0&&W.side===xi&&W.forceSinglePass===!1?(W.side=Xt,W.needsUpdate=!0,w.renderBufferDirect(X,z,q,W,M,me),W.side=Gi,W.needsUpdate=!0,w.renderBufferDirect(X,z,q,W,M,me),W.side=xi):w.renderBufferDirect(X,z,q,W,M,me),M.onAfterRender(w,z,X,q,W,me)}function Qa(M,z,X){z.isScene!==!0&&(z=Te);const q=ze.get(M),W=f.state.lights,me=f.state.shadowsArray,Ce=W.state.version,Fe=Me.getParameters(M,W.state,me,z,X),Be=Me.getProgramCacheKey(Fe);let et=q.programs;q.environment=M.isMeshStandardMaterial?z.environment:null,q.fog=z.fog,q.envMap=(M.isMeshStandardMaterial?G:y).get(M.envMap||q.environment),et===void 0&&(M.addEventListener("dispose",fe),et=new Map,q.programs=et);let Xe=et.get(Be);if(Xe!==void 0){if(q.currentProgram===Xe&&q.lightsStateVersion===Ce)return au(M,Fe),Xe}else Fe.uniforms=Me.getUniforms(M),M.onBuild(X,Fe,w),M.onBeforeCompile(Fe,w),Xe=Me.acquireProgram(Fe,Be),et.set(Be,Xe),q.uniforms=Fe.uniforms;const qe=q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(qe.clippingPlanes=He.uniform),au(M,Fe),q.needsLights=sS(M),q.lightsStateVersion=Ce,q.needsLights&&(qe.ambientLightColor.value=W.state.ambient,qe.lightProbe.value=W.state.probe,qe.directionalLights.value=W.state.directional,qe.directionalLightShadows.value=W.state.directionalShadow,qe.spotLights.value=W.state.spot,qe.spotLightShadows.value=W.state.spotShadow,qe.rectAreaLights.value=W.state.rectArea,qe.ltc_1.value=W.state.rectAreaLTC1,qe.ltc_2.value=W.state.rectAreaLTC2,qe.pointLights.value=W.state.point,qe.pointLightShadows.value=W.state.pointShadow,qe.hemisphereLights.value=W.state.hemi,qe.directionalShadowMap.value=W.state.directionalShadowMap,qe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,qe.spotShadowMap.value=W.state.spotShadowMap,qe.spotLightMatrix.value=W.state.spotLightMatrix,qe.spotLightMap.value=W.state.spotLightMap,qe.pointShadowMap.value=W.state.pointShadowMap,qe.pointShadowMatrix.value=W.state.pointShadowMatrix),q.currentProgram=Xe,q.uniformsList=null,Xe}function nu(M){if(M.uniformsList===null){const z=M.currentProgram.getUniforms();M.uniformsList=Ha.seqWithValue(z.seq,M.uniforms)}return M.uniformsList}function au(M,z){const X=ze.get(M);X.outputColorSpace=z.outputColorSpace,X.batching=z.batching,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function nS(M,z,X,q,W){z.isScene!==!0&&(z=Te),S.resetTextureUnits();const me=z.fog,Ce=q.isMeshStandardMaterial?z.environment:null,Fe=R===null?w.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ri,Be=(q.isMeshStandardMaterial?G:y).get(q.envMap||Ce),et=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Xe=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),qe=!!X.morphAttributes.position,zt=!!X.morphAttributes.normal,Rt=!!X.morphAttributes.color;let oi=Vi;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(oi=w.toneMapping);const Ni=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,vt=Ni!==void 0?Ni.length:0,Je=ze.get(q),Xo=f.state.lights;if($===!0&&(ve===!0||M!==x)){const li=M===x&&q.id===V;He.setState(q,M,li)}let qo=!1;q.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Xo.state.version||Je.outputColorSpace!==Fe||W.isBatchedMesh&&Je.batching===!1||!W.isBatchedMesh&&Je.batching===!0||W.isInstancedMesh&&Je.instancing===!1||!W.isInstancedMesh&&Je.instancing===!0||W.isSkinnedMesh&&Je.skinning===!1||!W.isSkinnedMesh&&Je.skinning===!0||W.isInstancedMesh&&Je.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Je.instancingColor===!1&&W.instanceColor!==null||Je.envMap!==Be||q.fog===!0&&Je.fog!==me||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==He.numPlanes||Je.numIntersection!==He.numIntersection)||Je.vertexAlphas!==et||Je.vertexTangents!==Xe||Je.morphTargets!==qe||Je.morphNormals!==zt||Je.morphColors!==Rt||Je.toneMapping!==oi||Ne.isWebGL2===!0&&Je.morphTargetsCount!==vt)&&(qo=!0):(qo=!0,Je.__version=q.version);let _r=Je.currentProgram;qo===!0&&(_r=Qa(q,z,W));let su=!1,Un=!1,Yo=!1;const Ht=_r.getUniforms(),vr=Je.uniforms;if(xe.useProgram(_r.program)&&(su=!0,Un=!0,Yo=!0),q.id!==V&&(V=q.id,Un=!0),su||x!==M){Ht.setValue(k,"projectionMatrix",M.projectionMatrix),Ht.setValue(k,"viewMatrix",M.matrixWorldInverse);const li=Ht.map.cameraPosition;li!==void 0&&li.setValue(k,Ue.setFromMatrixPosition(M.matrixWorld)),Ne.logarithmicDepthBuffer&&Ht.setValue(k,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ht.setValue(k,"isOrthographic",M.isOrthographicCamera===!0),x!==M&&(x=M,Un=!0,Yo=!0)}if(W.isSkinnedMesh){Ht.setOptional(k,W,"bindMatrix"),Ht.setOptional(k,W,"bindMatrixInverse");const li=W.skeleton;li&&(Ne.floatVertexTextures?(li.boneTexture===null&&li.computeBoneTexture(),Ht.setValue(k,"boneTexture",li.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(Ht.setOptional(k,W,"batchingTexture"),Ht.setValue(k,"batchingTexture",W._matricesTexture,S));const Ko=X.morphAttributes;if((Ko.position!==void 0||Ko.normal!==void 0||Ko.color!==void 0&&Ne.isWebGL2===!0)&&C.update(W,X,_r),(Un||Je.receiveShadow!==W.receiveShadow)&&(Je.receiveShadow=W.receiveShadow,Ht.setValue(k,"receiveShadow",W.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(vr.envMap.value=Be,vr.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Un&&(Ht.setValue(k,"toneMappingExposure",w.toneMappingExposure),Je.needsLights&&aS(vr,Yo),me&&q.fog===!0&&de.refreshFogUniforms(vr,me),de.refreshMaterialUniforms(vr,q,Z,Y,we),Ha.upload(k,nu(Je),vr,S)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ha.upload(k,nu(Je),vr,S),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ht.setValue(k,"center",W.center),Ht.setValue(k,"modelViewMatrix",W.modelViewMatrix),Ht.setValue(k,"normalMatrix",W.normalMatrix),Ht.setValue(k,"modelMatrix",W.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const li=q.uniformsGroups;for(let Jo=0,oS=li.length;Jo<oS;Jo++)if(Ne.isWebGL2){const ou=li[Jo];ke.update(ou,_r),ke.bind(ou,_r)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _r}function aS(M,z){M.ambientLightColor.needsUpdate=z,M.lightProbe.needsUpdate=z,M.directionalLights.needsUpdate=z,M.directionalLightShadows.needsUpdate=z,M.pointLights.needsUpdate=z,M.pointLightShadows.needsUpdate=z,M.spotLights.needsUpdate=z,M.spotLightShadows.needsUpdate=z,M.rectAreaLights.needsUpdate=z,M.hemisphereLights.needsUpdate=z}function sS(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(M,z,X){ze.get(M.texture).__webglTexture=z,ze.get(M.depthTexture).__webglTexture=X;const q=ze.get(M);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,z){const X=ze.get(M);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(M,z=0,X=0){R=M,P=z,T=X;let q=!0,W=null,me=!1,Ce=!1;if(M){const Fe=ze.get(M);Fe.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(k.FRAMEBUFFER,null),q=!1):Fe.__webglFramebuffer===void 0?S.setupRenderTarget(M):Fe.__hasExternalTextures&&S.rebindTextures(M,ze.get(M.texture).__webglTexture,ze.get(M.depthTexture).__webglTexture);const Be=M.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ce=!0);const et=ze.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(et[z])?W=et[z][X]:W=et[z],me=!0):Ne.isWebGL2&&M.samples>0&&S.useMultisampledRTT(M)===!1?W=ze.get(M).__webglMultisampledFramebuffer:Array.isArray(et)?W=et[X]:W=et,b.copy(M.viewport),H.copy(M.scissor),B=M.scissorTest}else b.copy(te).multiplyScalar(Z).floor(),H.copy(ne).multiplyScalar(Z).floor(),B=pe;if(xe.bindFramebuffer(k.FRAMEBUFFER,W)&&Ne.drawBuffers&&q&&xe.drawBuffers(M,W),xe.viewport(b),xe.scissor(H),xe.setScissorTest(B),me){const Fe=ze.get(M.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+z,Fe.__webglTexture,X)}else if(Ce){const Fe=ze.get(M.texture),Be=z||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Fe.__webglTexture,X||0,Be)}V=-1},this.readRenderTargetPixels=function(M,z,X,q,W,me,Ce){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=ze.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ce!==void 0&&(Fe=Fe[Ce]),Fe){xe.bindFramebuffer(k.FRAMEBUFFER,Fe);try{const Be=M.texture,et=Be.format,Xe=Be.type;if(et!==di&&le.convert(et)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=Xe===gn&&(Se.has("EXT_color_buffer_half_float")||Ne.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Xe!==Wi&&le.convert(Xe)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xe===Xi&&(Ne.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=M.width-q&&X>=0&&X<=M.height-W&&k.readPixels(z,X,q,W,le.convert(et),le.convert(Xe),me)}finally{const Be=R!==null?ze.get(R).__webglFramebuffer:null;xe.bindFramebuffer(k.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(M,z,X=0){const q=Math.pow(2,-X),W=Math.floor(z.image.width*q),me=Math.floor(z.image.height*q);S.setTexture2D(z,0),k.copyTexSubImage2D(k.TEXTURE_2D,X,0,0,M.x,M.y,W,me),xe.unbindTexture()},this.copyTextureToTexture=function(M,z,X,q=0){const W=z.image.width,me=z.image.height,Ce=le.convert(X.format),Fe=le.convert(X.type);S.setTexture2D(X,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment),z.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,q,M.x,M.y,W,me,Ce,Fe,z.image.data):z.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,q,M.x,M.y,z.mipmaps[0].width,z.mipmaps[0].height,Ce,z.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,q,M.x,M.y,Ce,Fe,z.image),q===0&&X.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(M,z,X,q,W=0){if(w.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=M.max.x-M.min.x+1,Ce=M.max.y-M.min.y+1,Fe=M.max.z-M.min.z+1,Be=le.convert(q.format),et=le.convert(q.type);let Xe;if(q.isData3DTexture)S.setTexture3D(q,0),Xe=k.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)S.setTexture2DArray(q,0),Xe=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,q.unpackAlignment);const qe=k.getParameter(k.UNPACK_ROW_LENGTH),zt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Rt=k.getParameter(k.UNPACK_SKIP_PIXELS),oi=k.getParameter(k.UNPACK_SKIP_ROWS),Ni=k.getParameter(k.UNPACK_SKIP_IMAGES),vt=X.isCompressedTexture?X.mipmaps[W]:X.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,vt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,vt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,M.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,M.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,M.min.z),X.isDataTexture||X.isData3DTexture?k.texSubImage3D(Xe,W,z.x,z.y,z.z,me,Ce,Fe,Be,et,vt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Xe,W,z.x,z.y,z.z,me,Ce,Fe,Be,vt.data)):k.texSubImage3D(Xe,W,z.x,z.y,z.z,me,Ce,Fe,Be,et,vt),k.pixelStorei(k.UNPACK_ROW_LENGTH,qe),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,zt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Rt),k.pixelStorei(k.UNPACK_SKIP_ROWS,oi),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ni),W===0&&q.generateMipmaps&&k.generateMipmap(Xe),xe.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?S.setTextureCube(M,0):M.isData3DTexture?S.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?S.setTexture2DArray(M,0):S.setTexture2D(M,0),xe.unbindTexture()},this.resetState=function(){P=0,T=0,R=null,xe.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Qs?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===oa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Dt?sr:Sc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===sr?Dt:Ri}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class gb extends Dh{}gb.prototype.isWebGL1Renderer=!0;class Lo{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=i}clone(){return new Lo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class _b extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Io extends ri{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const a=[],o=[],s=[],l=[],c=new N,h=new Le;o.push(0,0,0),s.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const m=i+u/t*n;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),s.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new Lt(o,3)),this.setAttribute("normal",new Lt(s,3)),this.setAttribute("uv",new Lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ga extends ri{constructor(e=1,t=1,i=1,n=32,a=1,o=!1,s=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:a,openEnded:o,thetaStart:s,thetaLength:l};const c=this;n=Math.floor(n),a=Math.floor(a);const h=[],u=[],d=[],m=[];let _=0;const v=[],f=i/2;let p=0;E(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Lt(u,3)),this.setAttribute("normal",new Lt(d,3)),this.setAttribute("uv",new Lt(m,2));function E(){const A=new N,P=new N;let T=0;const R=(t-e)/i;for(let V=0;V<=a;V++){const x=[],b=V/a,H=b*(t-e)+e;for(let B=0;B<=n;B++){const ee=B/n,D=ee*l+s,O=Math.sin(D),Y=Math.cos(D);P.x=H*O,P.y=-b*i+f,P.z=H*Y,u.push(P.x,P.y,P.z),A.set(O,R,Y).normalize(),d.push(A.x,A.y,A.z),m.push(ee,1-b),x.push(_++)}v.push(x)}for(let V=0;V<n;V++)for(let x=0;x<a;x++){const b=v[x][V],H=v[x+1][V],B=v[x+1][V+1],ee=v[x][V+1];h.push(b,H,ee),h.push(H,B,ee),T+=6}c.addGroup(p,T,0),p+=T}function w(A){const P=_,T=new Le,R=new N;let V=0;const x=A===!0?e:t,b=A===!0?1:-1;for(let B=1;B<=n;B++)u.push(0,f*b,0),d.push(0,b,0),m.push(.5,.5),_++;const H=_;for(let B=0;B<=n;B++){const ee=B/n*l+s,D=Math.cos(ee),O=Math.sin(ee);R.x=x*O,R.y=f*b,R.z=x*D,u.push(R.x,R.y,R.z),d.push(0,b,0),T.x=D*.5+.5,T.y=O*.5*b+.5,m.push(T.x,T.y),_++}for(let B=0;B<n;B++){const ee=P+B,D=H+B;A===!0?h.push(D,D+1,ee):h.push(D+1,D,ee),V+=3}c.addGroup(p,V,A===!0?1:2),p+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Do extends ri{constructor(e=1,t=32,i=16,n=0,a=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:a,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+s,Math.PI);let c=0;const h=[],u=new N,d=new N,m=[],_=[],v=[],f=[];for(let p=0;p<=i;p++){const E=[],w=p/i;let A=0;p===0&&o===0?A=.5/t:p===i&&l===Math.PI&&(A=-.5/t);for(let P=0;P<=t;P++){const T=P/t;u.x=-e*Math.cos(n+T*a)*Math.sin(o+w*s),u.y=e*Math.cos(o+w*s),u.z=e*Math.sin(n+T*a)*Math.sin(o+w*s),_.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),f.push(T+A,1-w),E.push(c++)}h.push(E)}for(let p=0;p<i;p++)for(let E=0;E<t;E++){const w=h[p][E+1],A=h[p][E],P=h[p+1][E],T=h[p+1][E+1];(p!==0||o>0)&&m.push(w,A,T),(p!==i-1||l<Math.PI)&&m.push(A,P,T)}this.setIndex(m),this.setAttribute("position",new Lt(_,3)),this.setAttribute("normal",new Lt(v,3)),this.setAttribute("uv",new Lt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Do(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vb extends An{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ec,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Uo extends vb{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Uh extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class wb extends Uh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const No=new _t,Nh=new N,Oh=new N;class yb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mo,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Nh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nh),Oh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Oh),t.updateMatrixWorld(),No.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(No),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(No)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xb extends yb{constructor(){super(new nh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mb extends Uh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new xb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class bb{constructor(e,t,i=0,n=1/0){this.ray=new uo(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new po,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Oo(e,this,i,t),i.sort(Fh),i}intersectObjects(e,t=!0,i=[]){for(let n=0,a=e.length;n<a;n++)Oo(e[n],this,i,t);return i.sort(Fh),i}}function Fh(r,e){return r.distance-e.distance}function Oo(r,e,t,i){if(r.layers.test(e.layers)&&r.raycast(e,t),i===!0){const n=r.children;for(let a=0,o=n.length;a<o;a++)Oo(n[a],e,t,!0)}}class zh{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zs}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zs);const Hh={type:"change"},Fo={type:"start"},Bh={type:"end"},ka=new uo,Gh=new Qi,Sb=Math.cos(70*hv.DEG2RAD);class Eb extends or{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Er.ROTATE,MIDDLE:Er.DOLLY,RIGHT:Er.PAN},this.touches={ONE:Tr.ROTATE,TWO:Tr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",re),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",re),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Hh),i.update(),a=n.NONE},this.update=function(){const C=new N,Q=new Mi().setFromUnitVectors(e.up,new N(0,1,0)),ce=Q.clone().invert(),le=new N,Ee=new Mi,ke=new N,tt=2*Math.PI;return function(Ve=null){const he=i.object.position;C.copy(he).sub(i.target),C.applyQuaternion(Q),s.setFromVector3(C),i.autoRotate&&a===n.NONE&&H(x(Ve)),i.enableDamping?(s.theta+=l.theta*i.dampingFactor,s.phi+=l.phi*i.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let L=i.minAzimuthAngle,oe=i.maxAzimuthAngle;isFinite(L)&&isFinite(oe)&&(L<-Math.PI?L+=tt:L>Math.PI&&(L-=tt),oe<-Math.PI?oe+=tt:oe>Math.PI&&(oe-=tt),L<=oe?s.theta=Math.max(L,Math.min(oe,s.theta)):s.theta=s.theta>(L+oe)/2?Math.max(L,s.theta):Math.min(oe,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&T||i.object.isOrthographicCamera?s.radius=K(s.radius):s.radius=K(s.radius*c),C.setFromSpherical(s),C.applyQuaternion(ce),he.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let fe=!1;if(i.zoomToCursor&&T){let Oe=null;if(i.object.isPerspectiveCamera){const Re=C.length();Oe=K(Re*c);const rt=Re-Oe;i.object.position.addScaledVector(A,rt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Re=new N(P.x,P.y,0);Re.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),fe=!0;const rt=new N(P.x,P.y,0);rt.unproject(i.object),i.object.position.sub(rt).add(Re),i.object.updateMatrixWorld(),Oe=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Oe!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Oe).add(i.object.position):(ka.origin.copy(i.object.position),ka.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ka.direction))<Sb?e.lookAt(i.target):(Gh.setFromNormalAndCoplanarPoint(i.object.up,i.target),ka.intersectPlane(Gh,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),fe=!0);return c=1,T=!1,fe||le.distanceToSquared(i.object.position)>o||8*(1-Ee.dot(i.object.quaternion))>o||ke.distanceToSquared(i.target)>0?(i.dispatchEvent(Hh),le.copy(i.object.position),Ee.copy(i.object.quaternion),ke.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ge),i.domElement.removeEventListener("pointerdown",ze),i.domElement.removeEventListener("pointercancel",y),i.domElement.removeEventListener("wheel",ie),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",y),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",re),i._domElementKeyEvents=null)};const i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=n.NONE;const o=1e-6,s=new zh,l=new zh;let c=1;const h=new N,u=new Le,d=new Le,m=new Le,_=new Le,v=new Le,f=new Le,p=new Le,E=new Le,w=new Le,A=new N,P=new Le;let T=!1;const R=[],V={};function x(C){return C!==null?2*Math.PI/60*i.autoRotateSpeed*C:2*Math.PI/60/60*i.autoRotateSpeed}function b(C){const Q=Math.abs(C)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*Q)}function H(C){l.theta-=C}function B(C){l.phi-=C}const ee=function(){const C=new N;return function(Q,ce){C.setFromMatrixColumn(ce,0),C.multiplyScalar(-Q),h.add(C)}}(),D=function(){const C=new N;return function(Q,ce){i.screenSpacePanning===!0?C.setFromMatrixColumn(ce,1):(C.setFromMatrixColumn(ce,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(Q),h.add(C)}}(),O=function(){const C=new N;return function(Q,ce){const le=i.domElement;if(i.object.isPerspectiveCamera){const Ee=i.object.position;C.copy(Ee).sub(i.target);let ke=C.length();ke*=Math.tan(i.object.fov/2*Math.PI/180),ee(2*Q*ke/le.clientHeight,i.object.matrix),D(2*ce*ke/le.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ee(Q*(i.object.right-i.object.left)/i.object.zoom/le.clientWidth,i.object.matrix),D(ce*(i.object.top-i.object.bottom)/i.object.zoom/le.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Y(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Z(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function J(C,Q){if(!i.zoomToCursor)return;T=!0;const ce=i.domElement.getBoundingClientRect(),le=C-ce.left,Ee=Q-ce.top,ke=ce.width,tt=ce.height;P.x=le/ke*2-1,P.y=-(Ee/tt)*2+1,A.set(P.x,P.y,1).unproject(i.object).sub(i.object.position).normalize()}function K(C){return Math.max(i.minDistance,Math.min(i.maxDistance,C))}function te(C){u.set(C.clientX,C.clientY)}function ne(C){J(C.clientX,C.clientX),p.set(C.clientX,C.clientY)}function pe(C){_.set(C.clientX,C.clientY)}function j(C){d.set(C.clientX,C.clientY),m.subVectors(d,u).multiplyScalar(i.rotateSpeed);const Q=i.domElement;H(2*Math.PI*m.x/Q.clientHeight),B(2*Math.PI*m.y/Q.clientHeight),u.copy(d),i.update()}function $(C){E.set(C.clientX,C.clientY),w.subVectors(E,p),w.y>0?Y(b(w.y)):w.y<0&&Z(b(w.y)),p.copy(E),i.update()}function ve(C){v.set(C.clientX,C.clientY),f.subVectors(v,_).multiplyScalar(i.panSpeed),O(f.x,f.y),_.copy(v),i.update()}function we(C){J(C.clientX,C.clientY),C.deltaY<0?Z(b(C.deltaY)):C.deltaY>0&&Y(b(C.deltaY)),i.update()}function ye(C){let Q=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?B(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,i.keyPanSpeed),Q=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?B(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,-i.keyPanSpeed),Q=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?H(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(i.keyPanSpeed,0),Q=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?H(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(-i.keyPanSpeed,0),Q=!0;break}Q&&(C.preventDefault(),i.update())}function De(C){if(R.length===1)u.set(C.pageX,C.pageY);else{const Q=Qe(C),ce=.5*(C.pageX+Q.x),le=.5*(C.pageY+Q.y);u.set(ce,le)}}function Ue(C){if(R.length===1)_.set(C.pageX,C.pageY);else{const Q=Qe(C),ce=.5*(C.pageX+Q.x),le=.5*(C.pageY+Q.y);_.set(ce,le)}}function Te(C){const Q=Qe(C),ce=C.pageX-Q.x,le=C.pageY-Q.y,Ee=Math.sqrt(ce*ce+le*le);p.set(0,Ee)}function Ge(C){i.enableZoom&&Te(C),i.enablePan&&Ue(C)}function k(C){i.enableZoom&&Te(C),i.enableRotate&&De(C)}function dt(C){if(R.length==1)d.set(C.pageX,C.pageY);else{const ce=Qe(C),le=.5*(C.pageX+ce.x),Ee=.5*(C.pageY+ce.y);d.set(le,Ee)}m.subVectors(d,u).multiplyScalar(i.rotateSpeed);const Q=i.domElement;H(2*Math.PI*m.x/Q.clientHeight),B(2*Math.PI*m.y/Q.clientHeight),u.copy(d)}function Se(C){if(R.length===1)v.set(C.pageX,C.pageY);else{const Q=Qe(C),ce=.5*(C.pageX+Q.x),le=.5*(C.pageY+Q.y);v.set(ce,le)}f.subVectors(v,_).multiplyScalar(i.panSpeed),O(f.x,f.y),_.copy(v)}function Ne(C){const Q=Qe(C),ce=C.pageX-Q.x,le=C.pageY-Q.y,Ee=Math.sqrt(ce*ce+le*le);E.set(0,Ee),w.set(0,Math.pow(E.y/p.y,i.zoomSpeed)),Y(w.y),p.copy(E);const ke=(C.pageX+Q.x)*.5,tt=(C.pageY+Q.y)*.5;J(ke,tt)}function xe(C){i.enableZoom&&Ne(C),i.enablePan&&Se(C)}function at(C){i.enableZoom&&Ne(C),i.enableRotate&&dt(C)}function ze(C){i.enabled!==!1&&(R.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",S),i.domElement.addEventListener("pointerup",y)),Ae(C),C.pointerType==="touch"?Me(C):G(C))}function S(C){i.enabled!==!1&&(C.pointerType==="touch"?de(C):se(C))}function y(C){He(C),R.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",y)),i.dispatchEvent(Bh),a=n.NONE}function G(C){let Q;switch(C.button){case 0:Q=i.mouseButtons.LEFT;break;case 1:Q=i.mouseButtons.MIDDLE;break;case 2:Q=i.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case Er.DOLLY:if(i.enableZoom===!1)return;ne(C),a=n.DOLLY;break;case Er.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;pe(C),a=n.PAN}else{if(i.enableRotate===!1)return;te(C),a=n.ROTATE}break;case Er.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;te(C),a=n.ROTATE}else{if(i.enablePan===!1)return;pe(C),a=n.PAN}break;default:a=n.NONE}a!==n.NONE&&i.dispatchEvent(Fo)}function se(C){switch(a){case n.ROTATE:if(i.enableRotate===!1)return;j(C);break;case n.DOLLY:if(i.enableZoom===!1)return;$(C);break;case n.PAN:if(i.enablePan===!1)return;ve(C);break}}function ie(C){i.enabled===!1||i.enableZoom===!1||a!==n.NONE||(C.preventDefault(),i.dispatchEvent(Fo),we(C),i.dispatchEvent(Bh))}function re(C){i.enabled===!1||i.enablePan===!1||ye(C)}function Me(C){switch(ae(C),R.length){case 1:switch(i.touches.ONE){case Tr.ROTATE:if(i.enableRotate===!1)return;De(C),a=n.TOUCH_ROTATE;break;case Tr.PAN:if(i.enablePan===!1)return;Ue(C),a=n.TOUCH_PAN;break;default:a=n.NONE}break;case 2:switch(i.touches.TWO){case Tr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ge(C),a=n.TOUCH_DOLLY_PAN;break;case Tr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;k(C),a=n.TOUCH_DOLLY_ROTATE;break;default:a=n.NONE}break;default:a=n.NONE}a!==n.NONE&&i.dispatchEvent(Fo)}function de(C){switch(ae(C),a){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;dt(C),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;Se(C),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;xe(C),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;at(C),i.update();break;default:a=n.NONE}}function ge(C){i.enabled!==!1&&C.preventDefault()}function Ae(C){R.push(C.pointerId)}function He(C){delete V[C.pointerId];for(let Q=0;Q<R.length;Q++)if(R[Q]==C.pointerId){R.splice(Q,1);return}}function ae(C){let Q=V[C.pointerId];Q===void 0&&(Q=new Le,V[C.pointerId]=Q),Q.set(C.pageX,C.pageY)}function Qe(C){const Q=C.pointerId===R[0]?R[1]:R[0];return V[Q]}i.domElement.addEventListener("contextmenu",ge),i.domElement.addEventListener("pointerdown",ze),i.domElement.addEventListener("pointercancel",y),i.domElement.addEventListener("wheel",ie,{passive:!1}),this.update()}}function Tb(r,e){const t=e.translation();r.position.set(t.x,t.y,t.z);const i=e.rotation();r.quaternion.set(i.x,i.y,i.z,i.w)}function Ab(r){let e=new N(0,1,0),t;r.y==1||r.y==-1?t=new N(1,0,0):t=new N().crossVectors(e,r);let i=Math.acos(r.dot(e));return new Mi().setFromAxisAngle(t,i)}function kh(r){return new N(r.x,r.y,r.z)}const Vh=new En,Wh=new Mi;class jh{constructor(e,t){this.visual=e,this.physical=t}matchTransform(){Tb(this.visual,this.physical)}setPosition(e,t,i){this.physical.setTranslation(new gt.Vector3(e,t,i),!1)}setEuler(e,t,i,n){Vh.set(e,t,i,n),Wh.setFromEuler(Vh),this.physical.setRotation(Wh,!1)}}function zo(r){return Rb[r]}const Rb={default:{restitution:.5,density:.5,friction:.5,materialParams:{}},sand:{restitution:0,density:3,friction:.8,materialParams:{color:new Ie(.9,.85,.6),roughness:.8}},plastic:{restitution:.8,density:.9,friction:.5,materialParams:{color:16733695,roughness:.8,clearcoat:.5,clearcoatRoughness:.2}},concrete:{restitution:.7,density:4,friction:.9,materialParams:{color:14671839,roughness:1}},meat:{restitution:.2,density:4,friction:.2,materialParams:{color:16755370,roughness:.5}},water:{restitution:.8,density:.9,friction:0,materialParams:{color:new Ie(.5,.6,1.75),ior:1.5,metalness:0,opacity:1,roughness:.3,specularColor:new Ie(.25,.6,.75),specularIntensity:1,thickness:.01,transmission:1,side:xi}},wood:{restitution:.8,density:.5,friction:.7,materialParams:{color:new Ie(.5,.35,.1),roughness:.7,clearcoat:.1,clearcoatRoughness:.3}}};let Ho;function Cb(){return Ho||(Ho=new qr(1,1,1,1,1)),Ho}let Bo;function Pb(){return Bo||(Bo=new Do(1,32,16)),Bo}function Go(r,e,t,i=gt.RigidBodyType.Fixed,n="default"){const a=Pb(),o=gt.ColliderDesc.ball(t),s=Xh(r,e,a,o,i,n);return s.visual.scale.setScalar(t),s}function Va(r,e,t,i,n,a=gt.RigidBodyType.Fixed,o="default"){const s=Cb(),l=gt.ColliderDesc.cuboid(t*.5,i*.5,n*.5),c=Xh(r,e,s,l,a,o);return c.visual.scale.set(t,i,n),c}function Xh(r,e,t,i,n=gt.RigidBodyType.Fixed,a="default"){const o=zo(a),s=new Uo(o.materialParams),l=new qt(t,s);l.receiveShadow=!0,l.castShadow=!0,r.add(l);const c=new gt.RigidBodyDesc(n);i.setDensity(o.density),i.setRestitution(o.restitution),i.setFriction(o.friction);const h=e.createRigidBody(c);return e.createCollider(i,h),new jh(l,h)}const ko=new _t;class Lb{constructor(e,t,i){_e(this,"relativePoint");this.intersection=e,this.x=t,this.y=i,ko.copy(e.object.matrixWorld),ko.invert(),this.relativePoint=e.point.clone().applyMatrix4(ko)}}function At(r,e,t){const i=r+t*(e-r);return Math.abs(e-i)>1e-5?i:e}function Ib(r){return new URL(window.location.href).searchParams.get(r)}function qh(r){const e=Ib(r);return!!(e===""||e&&e!=="false")}class Db{constructor(e=!1){_e(this,"keys",new Map);window.addEventListener("keydown",t=>{e&&console.log("keyboard code: "+t.code),this.keys.get(t.code)!==0&&this.keys.set(t.code,0)}),window.addEventListener("keyup",t=>{this.keys.set(t.code,void 0)})}isPressed(e){return this.keys.get(e)!==void 0}consumePressed(e){var t=this.keys.get(e)===0;return t&&this.keys.set(e,1),t}}let Vo;function Ub(){return Vo||(Vo=new Db(qh("debugKeyboard"))),Vo}const Yh=5,Nb=.08,Kh=.04,Ob=.02,Jh=1,Fb=.2,Pn=.4,zb=1,Zh=.005,Wa=new Le,Hb=new Le;class Bb{constructor(e,t,i,n){_e(this,"keyboard",Ub());_e(this,"visical");_e(this,"legs",[]);_e(this,"tick",Yh);_e(this,"legLength",Jh);_e(this,"speed",Kh);_e(this,"_rotateActive",!1);_e(this,"cameraAngle",0);_e(this,"legShadowCaster");this.world=e,this.camera=i;const a=Go(t,e,Pn,gt.RigidBodyType.Dynamic,"meat");a.physical.collider(0).setRestitution(0),a.physical.lockRotations(!0,!1),a.setPosition(0,.8,5);const o=new Ga(.2,.3,1),s=o.getAttribute("position").array;for(let d=1;d<s.length;d+=3)s[d]+=.5;const l=new Rn;l.colorWrite=!1,l.depthWrite=!1;const c=new qt(o,l);c.castShadow=!0,c.position.y=-Pn,c.rotation.x=Math.PI,a.visual.add(c),this.visical=a,this.legShadowCaster=c,document.addEventListener("pointerlockchange",()=>{this._rotateActive=document.pointerLockElement===n.domElement},!1),document.addEventListener("click",function(){document.pointerLockElement||n.domElement.requestPointerLock()}),window.addEventListener("keypress",d=>{d.code==="Escape"&&document.pointerLockElement&&document.exitPointerLock()});const h=new qt(new Io(.01,3,Math.PI*-.5),new Rn({wireframe:!0}));i.add(h),h.position.z=-.2;const u=new Pt;document.addEventListener("mousemove",d=>{this._rotateActive&&(i.rotateY(d.movementX*-Zh),i.rotateX(d.movementY*-Zh),u.position.copy(i.position),u.rotation.copy(i.rotation),u.translateZ(-1),this.cameraAngle=Math.PI*.5-Math.atan2(i.position.z-u.position.z,i.position.x-u.position.x),i.lookAt(u.position))},!1)}update(){const e=this.keyboard.isPressed("ShiftLeft");this.camera.position.copy(this.visical.visual.position);const t=this.keyboard.isPressed("ControlLeft");if(this.legLength=t?Fb:Jh,this.speed=t?Ob:e?Nb:Kh,this.tick--,this.tick===0&&(this.tick=Yh,this.legs.length>0)){const i=this.world.getImpulseJoint(this.legs[0]);this.world.removeImpulseJoint(i,!0),this.legs.length=0}if(this.legs.length===0){let i;const n=kh(this.visical.physical.translation()),a=kh(this.world.gravity).normalize(),o=a.clone().multiplyScalar(Pn);if(n.add(o),this.world.intersectionsWithRay(new gt.Ray(n,a),this.legLength+zb,!1,s=>((!i||i.toi>s.toi)&&(i=s),!0),void 0,void 0,this.visical.physical.collider(0),this.visical.physical),i){const s=n,l=a.clone().multiplyScalar(i.toi);s.add(l);const c=i.collider.parent(),h=new N(s.x,s.y,s.z),u=c.translation(),d=c.rotation(),m=new _t,_=new Mi(d.x,d.y,d.z,d.w);m.compose(new N(u.x,u.y,u.z),_,new N(1,1,1)),m.invert(),h.applyMatrix4(m);const v=gt.JointData.fixed(o.clone().add(l),Ab(a.clone().multiplyScalar(-1)),h,_.invert()),f=this.world.createImpulseJoint(v,this.visical.physical,i.collider.parent(),!0);this.legs.push(f.handle)}}if(this.legs.length>0){let i=0;this.keyboard.isPressed("KeyW")?i=this.speed:this.keyboard.isPressed("KeyS")&&(i=-this.speed);let n=0;this.keyboard.isPressed("KeyA")?n=this.speed:this.keyboard.isPressed("KeyD")&&(n=-this.speed);const a=this.world.getImpulseJoint(this.legs[0]),o=a.anchor1();Wa.set(n,i),Wa.rotateAround(Hb,-this.cameraAngle);const s=At(o.y,-(Pn+this.legLength),.1);a.setAnchor1(new gt.Vector3(o.x+Wa.x,s,o.z+Wa.y)),a.body1().wakeUp(),this.legShadowCaster.scale.y=-s-Pn-.05}}}function Gb(){}class kb{constructor(e,t,i,n=Gb){_e(this,"progress",0);this.timeStart=e,this.duration=t,this.updateCallback=i,this.completeCallback=n}update(e){this.progress=Math.min(1,(e-this.timeStart)/this.duration),this.updateCallback(this.progress),this.progress===1&&this.completeCallback()}}class Vb{constructor(e){_e(this,"time",0);_e(this,"anims",[]);this.frameDuration=e}update(){this.time+=this.frameDuration;for(let e=0;e<this.anims.length;e++)this.anims[e].update(this.time);for(let e=this.anims.length-1;e>=0;e--)this.anims[e].progress===1&&this.anims.splice(e,1)}animate(e,t,i){this.anims.push(new kb(this.time,e,t,i))}}var Qh={},ja={};Object.defineProperty(ja,"__esModule",{value:!0}),ja.makeNoise2D=void 0;var Ln=(3-Math.sqrt(3))/6,Wo=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[1,0],[-1,0],[0,1],[0,-1],[0,1],[0,-1]];function Wb(r){r===void 0&&(r=Math.random);for(var e=new Uint8Array(256),t=0;t<256;t++)e[t]=t;for(var i,n,t=255;t>0;t--)i=Math.floor((t+1)*r()),n=e[t],e[t]=e[i],e[i]=n;for(var a=new Uint8Array(512),o=new Uint8Array(512),t=0;t<512;t++)a[t]=e[t&255],o[t]=a[t]%12;return function(s,l){var c=(s+l)*.5*(Math.sqrt(3)-1),h=Math.floor(s+c),u=Math.floor(l+c),d=(h+u)*Ln,m=h-d,_=u-d,v=s-m,f=l-_,p=v>f?1:0,E=v>f?0:1,w=v-p+Ln,A=f-E+Ln,P=v-1+2*Ln,T=f-1+2*Ln,R=h&255,V=u&255,x=Wo[o[R+a[V]]],b=Wo[o[R+p+a[V+E]]],H=Wo[o[R+1+a[V+1]]],B=.5-v*v-f*f,ee=B<0?0:Math.pow(B,4)*(x[0]*v+x[1]*f),D=.5-w*w-A*A,O=D<0?0:Math.pow(D,4)*(b[0]*w+b[1]*A),Y=.5-P*P-T*T,Z=Y<0?0:Math.pow(Y,4)*(H[0]*P+H[1]*T);return 70.14805770653952*(ee+O+Z)}}ja.makeNoise2D=Wb;var Xa={};Object.defineProperty(Xa,"__esModule",{value:!0}),Xa.makeNoise3D=void 0;var Si=1/6,qa=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,-1],[0,1,-1],[0,-1,-1]];function jb(r){r===void 0&&(r=Math.random);for(var e=new Uint8Array(256),t=0;t<256;t++)e[t]=t;for(var i,n,t=255;t>0;t--)i=Math.floor((t+1)*r()),n=e[t],e[t]=e[i],e[i]=n;for(var a=new Uint8Array(512),o=new Uint8Array(512),t=0;t<512;t++)a[t]=e[t&255],o[t]=a[t]%12;return function(s,l,c){var h=(s+l+c)/3,u=Math.floor(s+h),d=Math.floor(l+h),m=Math.floor(c+h),_=(u+d+m)*Si,v=u-_,f=d-_,p=m-_,E=s-v,w=l-f,A=c-p,P,T,R,V,x,b;E>=w?w>=A?(P=V=x=1,T=R=b=0):E>=A?(P=V=b=1,T=R=x=0):(R=V=b=1,P=T=x=0):w<A?(R=x=b=1,P=T=V=0):E<A?(T=x=b=1,P=R=V=0):(T=V=x=1,P=R=b=0);var H=E-P+Si,B=w-T+Si,ee=A-R+Si,D=E-V+2*Si,O=w-x+2*Si,Y=A-b+2*Si,Z=E-1+3*Si,J=w-1+3*Si,K=A-1+3*Si,te=u&255,ne=d&255,pe=m&255,j=qa[o[te+a[ne+a[pe]]]],$=qa[o[te+P+a[ne+T+a[pe+R]]]],ve=qa[o[te+V+a[ne+x+a[pe+b]]]],we=qa[o[te+1+a[ne+1+a[pe+1]]]],ye=.5-E*E-w*w-A*A,De=ye<0?0:Math.pow(ye,4)*(j[0]*E+j[1]*w+j[2]*A),Ue=.5-H*H-B*B-ee*ee,Te=Ue<0?0:Math.pow(Ue,4)*($[0]*H+$[1]*B+$[2]*ee),Ge=.5-D*D-O*O-Y*Y,k=Ge<0?0:Math.pow(Ge,4)*(ve[0]*D+ve[1]*O+ve[2]*Y),dt=.5-Z*Z-J*J-K*K,Se=dt<0?0:Math.pow(dt,4)*(we[0]*Z+we[1]*J+we[2]*K);return 94.68493150681972*(De+Te+k+Se)}}Xa.makeNoise3D=jb;var Ya={};Object.defineProperty(Ya,"__esModule",{value:!0}),Ya.makeNoise4D=void 0;var Nt=(5-Math.sqrt(5))/20,In=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]];function Xb(r){r===void 0&&(r=Math.random);for(var e=new Uint8Array(256),t=0;t<256;t++)e[t]=t;for(var i,n,t=255;t>0;t--)i=Math.floor((t+1)*r()),n=e[t],e[t]=e[i],e[i]=n;for(var a=new Uint8Array(512),o=new Uint8Array(512),t=0;t<512;t++)a[t]=e[t&255],o[t]=a[t]%12;return function(s,l,c,h){var u=(s+l+c+h)*(Math.sqrt(5)-1)/4,d=Math.floor(s+u),m=Math.floor(l+u),_=Math.floor(c+u),v=Math.floor(h+u),f=(d+m+_+v)*Nt,p=d-f,E=m-f,w=_-f,A=v-f,P=s-p,T=l-E,R=c-w,V=h-A,x=0,b=0,H=0,B=0;P>T?x++:b++,P>R?x++:H++,P>V?x++:B++,T>R?b++:H++,T>V?b++:B++,R>V?H++:B++;var ee=x>=3?1:0,D=b>=3?1:0,O=H>=3?1:0,Y=B>=3?1:0,Z=x>=2?1:0,J=b>=2?1:0,K=H>=2?1:0,te=B>=2?1:0,ne=x>=1?1:0,pe=b>=1?1:0,j=H>=1?1:0,$=B>=1?1:0,ve=P-ee+Nt,we=T-D+Nt,ye=R-O+Nt,De=V-Y+Nt,Ue=P-Z+2*Nt,Te=T-J+2*Nt,Ge=R-K+2*Nt,k=V-te+2*Nt,dt=P-ne+3*Nt,Se=T-pe+3*Nt,Ne=R-j+3*Nt,xe=V-$+3*Nt,at=P-1+4*Nt,ze=T-1+4*Nt,S=R-1+4*Nt,y=V-1+4*Nt,G=d&255,se=m&255,ie=_&255,re=v&255,Me=In[a[G+a[se+a[ie+a[re]]]]%32],de=In[a[G+ee+a[se+D+a[ie+O+a[re+Y]]]]%32],ge=In[a[G+Z+a[se+J+a[ie+K+a[re+te]]]]%32],Ae=In[a[G+ne+a[se+pe+a[ie+j+a[re+$]]]]%32],He=In[a[G+1+a[se+1+a[ie+1+a[re+1]]]]%32],ae=.5-P*P-T*T-R*R-V*V,Qe=ae<0?0:Math.pow(ae,4)*(Me[0]*P+Me[1]*T+Me[2]*R+Me[3]*V),C=.5-ve*ve-we*we-ye*ye-De*De,Q=C<0?0:Math.pow(C,4)*(de[0]*ve+de[1]*we+de[2]*ye+de[3]*De),ce=.5-Ue*Ue-Te*Te-Ge*Ge-k*k,le=ce<0?0:Math.pow(ce,4)*(ge[0]*Ue+ge[1]*Te+ge[2]*Ge+ge[3]*k),Ee=.5-dt*dt-Se*Se-Ne*Ne-xe*xe,ke=Ee<0?0:Math.pow(Ee,4)*(Ae[0]*dt+Ae[1]*Se+Ae[2]*Ne+Ae[3]*xe),tt=.5-at*at-ze*ze-S*S-y*y,Ve=tt<0?0:Math.pow(tt,4)*(He[0]*at+He[1]*ze+He[2]*S+He[3]*y);return 72.37855765153665*(Qe+Q+le+ke+Ve)}}Ya.makeNoise4D=Xb,function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.makeNoise4D=r.makeNoise3D=r.makeNoise2D=void 0;var e=ja;Object.defineProperty(r,"makeNoise2D",{enumerable:!0,get:function(){return e.makeNoise2D}});var t=Xa;Object.defineProperty(r,"makeNoise3D",{enumerable:!0,get:function(){return t.makeNoise3D}});var i=Ya;Object.defineProperty(r,"makeNoise4D",{enumerable:!0,get:function(){return i.makeNoise4D}})}(Qh);function qb(r,e,t,i){return function(){r>>>=0,e>>>=0,t>>>=0,i>>>=0;let n=r+e|0;return r=e^e>>>9,e=t+(t<<3)|0,t=t<<21|t>>>11,i=i+1|0,n=n+i|0,t=t+n|0,(n>>>0)/4294967296}}class gr{constructor(e,t=0,i=1,n=0){_e(this,"_noise");this._scale=e,this._strength=i,this._offset=n;const a=qb(100+t,200+t,300+t,444+t);this._noise=Qh.makeNoise3D(a)}getValue(e,t,i){return this._noise(e*this._scale,t*this._scale,i*this._scale)*this._strength+this._offset}}class Yb{constructor(e){this._layers=e}getValue(e,t,i){let n=0;for(const a of this._layers)n+=a.getValue(e,t,i);return n}}class Kb{constructor(e,t,i,n){this._core=e,this._xOffset=t,this._yOffset=i,this._zOffset=n}getValue(e,t,i){const n=this._xOffset?e+this._xOffset.getValue(e,t,i):e,a=this._yOffset?t+this._yOffset.getValue(e,t,i):t,o=this._zOffset?i+this._zOffset.getValue(e,t,i):i;return this._core.getValue(n,a,o)}}const Jb=4,Zb=2,ai=4,jo=ai*.5;class Qb{constructor(e,t=1,i=0,n=!1,a=!1,o=!1,s=1e4,l=!0){_e(this,"isMarchingCubes",!0);_e(this,"enableUvs");_e(this,"enableColors");_e(this,"vlist");_e(this,"nlist");_e(this,"clist");_e(this,"isolation");_e(this,"size");_e(this,"size2");_e(this,"size3");_e(this,"halfsize");_e(this,"delta");_e(this,"yd");_e(this,"zd");_e(this,"field");_e(this,"normal_cache");_e(this,"palette");_e(this,"count");_e(this,"positionArray");_e(this,"normalArray");_e(this,"uvArray");_e(this,"colorArray");_e(this,"geometryRaw");_e(this,"geometryOptimized");this.prescale=t,this.preoffset=i,this.flatShading=o,this.maxPolyCount=s,this.optimizeGeometry=l;const c=new ri;this.geometryRaw=c,this.vlist=new Float32Array(12*3),this.nlist=new Float32Array(12*3),this.clist=new Float32Array(12*3),this.enableUvs=n,this.enableColors=a,this.isolation=80,this.size=e,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;const h=this.maxPolyCount*3;this.positionArray=new Float32Array(h*3);const u=new kt(this.positionArray,3);u.setUsage(ua),this.geometryRaw.setAttribute("position",u),this.normalArray=new Float32Array(h*3);const d=new kt(this.normalArray,3);if(d.setUsage(ua),this.geometryRaw.setAttribute("normal",d),this.enableUvs){this.uvArray=new Float32Array(h*2);const m=new kt(this.uvArray,2);m.setUsage(ua),this.geometryRaw.setAttribute("uv",m)}if(this.enableColors){this.colorArray=new Float32Array(h*3);const m=new kt(this.colorArray,3);m.setUsage(ua),this.geometryRaw.setAttribute("color",m)}this.geometryRaw.boundingSphere=new Sn(new N,Math.sqrt(2))}get geometry(){return this.geometryOptimized}VIntX(e,t,i,n,a,o,s,l,c,h){const u=(i-s)/(l-s),d=this.normal_cache;this.vlist[t+0]=n+u*this.delta,this.vlist[t+1]=a,this.vlist[t+2]=o,this.nlist[t+0]=At(d[e+0],d[e+3],u),this.nlist[t+1]=At(d[e+1],d[e+4],u),this.nlist[t+2]=At(d[e+2],d[e+5],u),this.clist[t+0]=At(this.palette[c*3+0],this.palette[h*3+0],u),this.clist[t+1]=At(this.palette[c*3+1],this.palette[h*3+1],u),this.clist[t+2]=At(this.palette[c*3+2],this.palette[h*3+2],u)}VIntY(e,t,i,n,a,o,s,l,c,h){const u=(i-s)/(l-s),d=this.normal_cache;this.vlist[t+0]=n,this.vlist[t+1]=a+u*this.delta,this.vlist[t+2]=o;const m=e+this.yd*3;this.nlist[t+0]=At(d[e+0],d[m+0],u),this.nlist[t+1]=At(d[e+1],d[m+1],u),this.nlist[t+2]=At(d[e+2],d[m+2],u),this.clist[t+0]=At(this.palette[c*3+0],this.palette[h*3+0],u),this.clist[t+1]=At(this.palette[c*3+1],this.palette[h*3+1],u),this.clist[t+2]=At(this.palette[c*3+2],this.palette[h*3+2],u)}VIntZ(e,t,i,n,a,o,s,l,c,h){const u=(i-s)/(l-s),d=this.normal_cache;this.vlist[t+0]=n,this.vlist[t+1]=a,this.vlist[t+2]=o+u*this.delta;const m=e+this.zd*3;this.nlist[t+0]=At(d[e+0],d[m+0],u),this.nlist[t+1]=At(d[e+1],d[m+1],u),this.nlist[t+2]=At(d[e+2],d[m+2],u),this.clist[t+0]=At(this.palette[c*3+0],this.palette[h*3+0],u),this.clist[t+1]=At(this.palette[c*3+1],this.palette[h*3+1],u),this.clist[t+2]=At(this.palette[c*3+2],this.palette[h*3+2],u)}compNorm(e){const t=e*3;this.normal_cache[t]===0&&(this.normal_cache[t+0]=this.field[e-1]-this.field[e+1],this.normal_cache[t+1]=this.field[e-this.yd]-this.field[e+this.yd],this.normal_cache[t+2]=this.field[e-this.zd]-this.field[e+this.zd])}polygonize(e,t,i,n,a){const o=n+1,s=n+this.yd,l=n+this.zd,c=o+this.yd,h=o+this.zd,u=n+this.yd+this.zd,d=o+this.yd+this.zd;let m=0;const _=this.field[n],v=this.field[o],f=this.field[s],p=this.field[c],E=this.field[l],w=this.field[h],A=this.field[u],P=this.field[d];_<a&&(m|=1),v<a&&(m|=2),f<a&&(m|=8),p<a&&(m|=4),E<a&&(m|=16),w<a&&(m|=32),A<a&&(m|=128),P<a&&(m|=64);const T=$b[m];if(T===0)return 0;const R=this.delta,V=e+R,x=t+R,b=i+R;T&1&&(this.compNorm(n),this.compNorm(o),this.VIntX(n*3,0,a,e,t,i,_,v,n,o)),T&2&&(this.compNorm(o),this.compNorm(c),this.VIntY(o*3,3,a,V,t,i,v,p,o,c)),T&4&&(this.compNorm(s),this.compNorm(c),this.VIntX(s*3,6,a,e,x,i,f,p,s,c)),T&8&&(this.compNorm(n),this.compNorm(s),this.VIntY(n*3,9,a,e,t,i,_,f,n,s)),T&16&&(this.compNorm(l),this.compNorm(h),this.VIntX(l*3,12,a,e,t,b,E,w,l,h)),T&32&&(this.compNorm(h),this.compNorm(d),this.VIntY(h*3,15,a,V,t,b,w,P,h,d)),T&64&&(this.compNorm(u),this.compNorm(d),this.VIntX(u*3,18,a,e,x,b,A,P,u,d)),T&128&&(this.compNorm(l),this.compNorm(u),this.VIntY(l*3,21,a,e,t,b,E,A,l,u)),T&256&&(this.compNorm(n),this.compNorm(l),this.VIntZ(n*3,24,a,e,t,i,_,E,n,l)),T&512&&(this.compNorm(o),this.compNorm(h),this.VIntZ(o*3,27,a,V,t,i,v,w,o,h)),T&1024&&(this.compNorm(c),this.compNorm(d),this.VIntZ(c*3,30,a,V,x,i,p,P,c,d)),T&2048&&(this.compNorm(s),this.compNorm(u),this.VIntZ(s*3,33,a,e,x,i,f,A,s,u)),m<<=4;let H,B,ee,D=0,O=0;for(;Ka[m+O]!=-1;)H=m+O,B=H+1,ee=H+2,this.posnormtriv(this.vlist,this.nlist,this.clist,3*Ka[H],3*Ka[B],3*Ka[ee]),O+=3,D++;return D}posnormtriv(e,t,i,n,a,o){const s=this.count*3,l=this.prescale,c=this.preoffset;if(this.positionArray[s+0]=e[n]*l+c,this.positionArray[s+1]=e[n+1]*l+c,this.positionArray[s+2]=e[n+2]*l+c,this.positionArray[s+3]=e[a]*l+c,this.positionArray[s+4]=e[a+1]*l+c,this.positionArray[s+5]=e[a+2]*l+c,this.positionArray[s+6]=e[o]*l+c,this.positionArray[s+7]=e[o+1]*l+c,this.positionArray[s+8]=e[o+2]*l+c,this.flatShading){const h=(t[n+0]+t[a+0]+t[o+0])/3,u=(t[n+1]+t[a+1]+t[o+1])/3,d=(t[n+2]+t[a+2]+t[o+2])/3;this.normalArray[s+0]=h,this.normalArray[s+1]=u,this.normalArray[s+2]=d,this.normalArray[s+3]=h,this.normalArray[s+4]=u,this.normalArray[s+5]=d,this.normalArray[s+6]=h,this.normalArray[s+7]=u,this.normalArray[s+8]=d}else this.normalArray[s+0]=t[n+0],this.normalArray[s+1]=t[n+1],this.normalArray[s+2]=t[n+2],this.normalArray[s+3]=t[a+0],this.normalArray[s+4]=t[a+1],this.normalArray[s+5]=t[a+2],this.normalArray[s+6]=t[o+0],this.normalArray[s+7]=t[o+1],this.normalArray[s+8]=t[o+2];if(this.uvArray){const h=this.count*2;this.uvArray[h+0]=e[n+0],this.uvArray[h+1]=e[n+2],this.uvArray[h+2]=e[a+0],this.uvArray[h+3]=e[a+2],this.uvArray[h+4]=e[o+0],this.uvArray[h+5]=e[o+2]}this.colorArray&&(this.colorArray[s+0]=i[n+0],this.colorArray[s+1]=i[n+1],this.colorArray[s+2]=i[n+2],this.colorArray[s+3]=i[a+0],this.colorArray[s+4]=i[a+1],this.colorArray[s+5]=i[a+2],this.colorArray[s+6]=i[o+0],this.colorArray[s+7]=i[o+1],this.colorArray[s+8]=i[o+2]),this.count+=3}addBall(e,t,i,n,a,o){const s=Math.sign(n);n=Math.abs(n);const l=o!=null;let c=new Ie(e,t,i);if(l)try{c=o instanceof Ie?o:Array.isArray(o)?new Ie(Math.min(Math.abs(o[0]),1),Math.min(Math.abs(o[1]),1),Math.min(Math.abs(o[2]),1)):new Ie(o)}catch{c=new Ie(e,t,i)}const h=this.size*Math.sqrt(n/a),u=i*this.size,d=t*this.size,m=e*this.size;let _=Math.floor(u-h);_<1&&(_=1);let v=Math.floor(u+h);v>this.size-1&&(v=this.size-1);let f=Math.floor(d-h);f<1&&(f=1);let p=Math.floor(d+h);p>this.size-1&&(p=this.size-1);let E=Math.floor(m-h);E<1&&(E=1);let w=Math.floor(m+h);w>this.size-1&&(w=this.size-1);let A,P,T,R,V,x,b,H,B,ee,D;for(T=_;T<v;T++)for(V=this.size2*T,H=T/this.size-i,B=H*H,P=f;P<p;P++)for(R=V+this.size*P,b=P/this.size-t,ee=b*b,A=E;A<w;A++)if(x=A/this.size-e,D=n/(1e-6+x*x+ee+B)-a,D>0){this.field[R+A]+=D*s;const O=Math.sqrt((A-m)*(A-m)+(P-d)*(P-d)+(T-u)*(T-u))/h,Y=1-O*O*O*(O*(O*6-15)+10);this.palette[(R+A)*3+0]+=c.r*Y,this.palette[(R+A)*3+1]+=c.g*Y,this.palette[(R+A)*3+2]+=c.b*Y}}setCell(e,t,i,n){const a=this.size2*i+this.size*t+e;this.field[a]=n}getCell(e,t,i){const n=this.size2*i+this.size*t+e;return this.field[n]}blur(e=1){const t=this.field,i=t.slice(),n=this.size,a=this.size2;for(let o=0;o<n;o++)for(let s=0;s<n;s++)for(let l=0;l<n;l++){const c=a*l+n*s+o;let h=i[c],u=1;for(let d=-1;d<=1;d+=2){const m=d+o;if(!(m<0||m>=n))for(let _=-1;_<=1;_+=2){const v=_+s;if(!(v<0||v>=n))for(let f=-1;f<=1;f+=2){const p=f+l;if(p<0||p>=n)continue;const E=a*p+n*v+m,w=i[E];u++,h+=e*(w-h)/u}}}t[c]=h}}reset(){for(let e=0;e<this.size3;e++)this.normal_cache[e*3]=0,this.field[e]=0,this.palette[e*3]=this.palette[e*3+1]=this.palette[e*3+2]=0}update(){this.count=0;const e=this.size-2;for(let t=1;t<e;t++){const i=this.size2*t,n=(t-this.halfsize)/this.halfsize;for(let a=1;a<e;a++){const o=i+this.size*a,s=(a-this.halfsize)/this.halfsize;for(let l=1;l<e;l++){const c=(l-this.halfsize)/this.halfsize,h=o+l;this.polygonize(c,s,n,h,this.isolation)}}}if(this.geometryRaw.setDrawRange(0,this.count),this.geometryRaw.getAttribute("position").needsUpdate=!0,this.geometryRaw.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(this.geometryRaw.getAttribute("uv").needsUpdate=!0),this.enableColors&&(this.geometryRaw.getAttribute("color").needsUpdate=!0),this.count/3>this.maxPolyCount&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count."),this.optimizeGeometry&&this.geometryRaw.drawRange.count>0&&this.geometryRaw.drawRange.count!==1/0){const t=this.geometryRaw,i=t.getAttribute("normal").array,n=t.getAttribute("position").array,a=new Set,o=new Array,s=new Array,l=new Array,c=new Array,h=this.geometryRaw.drawRange.count;for(let d=0;d<h;d++){const m=d*3,_=`${n[m]};${n[m+1]};${n[m+2]}`;a.has(_)||(a.add(_),o.push(_),s.push(n[m],n[m+1],n[m+2]),l.push(i[m],i[m+1],i[m+2]))}for(let d=0;d<h;d++){const m=d*3,_=`${n[m]};${n[m+1]};${n[m+2]}`;c.push(o.indexOf(_))}const u=new ri;u.setAttribute("position",new Lt(s,3)),u.setAttribute("normal",new Lt(l,3)),u.setIndex(new kt(new Uint32Array(c),1)),u.boundingSphere=new Sn(new N,Math.sqrt(2)),u.computeBoundingBox(),this.geometryOptimized=u}}}const $b=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),Ka=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);function $h(r,e,t,i,n,a,o){const s=n*a,l=s/(s-3),c=n*.5*l,h=l/a,u=new Qb(s,c,h*1.5);for(let d=0;d<s;d++)for(let m=0;m<s;m++)for(let _=0;_<s;_++){const v=t+m*h,f=r.getValue(e+_*h,v,i+d*h);u.setCell(_,m,d,f*100)}if(u.update(),u.geometry){const d=zo(o),m=new qt(u.geometry,new Uo(d.materialParams));return m.castShadow=m.receiveShadow=!0,m.position.set(e,t,i),m.geometry.boundingSphere.radius*=c,m}else return}const Ja=25,eu=new bb,eS=new N,Dn=-.5,tS=10,tu=100;class iS{constructor(){_e(this,"renderer");_e(this,"scene");_e(this,"camera");_e(this,"controls");_e(this,"stats");_e(this,"visicals",[]);_e(this,"blockGenRange",4);_e(this,"link");_e(this,"closestOnMouseDown");_e(this,"closestOnMouseMove");_e(this,"lastMouseMoveX",-1);_e(this,"lastMouseMoveY",-1);_e(this,"world");_e(this,"player");_e(this,"animator");_e(this,"_pointerLocked",!1);_e(this,"skyColor");_e(this,"waterColorShallow");_e(this,"waterColorDeep");_e(this,"waterColor");_e(this,"fog");_e(this,"noiseHelper",new Kb(new Yb([new gr(.008,0,10),new gr(.04,0,10),new gr(.2,0,1),new gr(.7,0,.2)]),new gr(.05,1,2),new gr(.1,1,5),new gr(.05,1,2)));_e(this,"noiseBlockKeysSeen",new Set);_e(this,"lastX",0);_e(this,"lastY",0);_e(this,"lastZ",0);_e(this,"getClosest",(e,t)=>{eu.setFromCamera(new Le(e/window.innerWidth*2-1,-(t/window.innerHeight*2-1)),this.camera);const i=eu.intersectObjects(this.visicals.filter(n=>{var a;return n!==((a=this.player)==null?void 0:a.visical)}).map(n=>n.visual));if(i.length>0)return new Lb(i[0],e,t)});_e(this,"submerged",new Set);_e(this,"animate",()=>{requestAnimationFrame(this.animate);const e=this.player?this.player.visical.physical.translation():eS,t=Math.round(e.x/ai)*ai-jo,i=Math.round(e.y/ai)*ai-jo,n=Math.round(e.z/ai)*ai-jo,a=this.blockGenRange;let o=8;for(let c=-a;c<a;c++)for(let h=-a;h<a;h++)for(let u=-a;u<a;u++){const d=u*ai,m=h*ai,_=c*ai,v=`${t+d};${i+m};${n+_}`;this.noiseBlockKeysSeen.has(v)||o>0&&(o--,this.noiseBlockKeysSeen.add(v),this.makeBlock(t+d,i+m,n+_))}this.animator.update(),this.world.bodies.forEach(c=>{const h=c.translation().y,u=c.handle;h<Dn&&!this.submerged.has(u)?(this.submerged.add(u),c.addForce(new gt.Vector3(0,5,0),!0),c.setLinearDamping(2)):h>=Dn&&this.submerged.has(u)&&(c.resetForces(!0),this.submerged.delete(u),c.setLinearDamping(0))});const s=this.camera.position.y<Dn,l=-(this.camera.position.y-Dn);this.waterColor.copy(this.waterColorShallow).lerp(this.waterColorDeep,l*.5),this.fog.color=s?this.waterColor:this.skyColor,this.scene.background=s?this.waterColor:this.skyColor,this.fog.far=s?tS:tu,this.player&&this.player.update(),this.world.step();for(const c of this.visicals)c.matchTransform();if(this.stats&&this.stats.update(),this.controls&&this.controls.update(),this.link&&this.closestOnMouseDown&&this.closestOnMouseMove&&this.closestOnMouseDown.intersection.object!==this.closestOnMouseMove.intersection.object){const c=this.closestOnMouseDown.relativePoint.clone().applyMatrix4(this.closestOnMouseDown.intersection.object.matrixWorld);if(this.link.position.copy(c),this.closestOnMouseMove=this.getClosest(this.lastMouseMoveX,this.lastMouseMoveY),this.closestOnMouseMove){const h=this.closestOnMouseMove.relativePoint.clone().applyMatrix4(this.closestOnMouseMove.intersection.object.matrixWorld);this.link.scale.y=c.distanceTo(h),this.link.lookAt(h),this.link.rotateX(Math.PI*.5)}}this.renderer.render(this.scene,this.camera)});this.initScene(),this.initStats(),this.initListeners(),this.animate()}initStats(){this.stats=new jt,document.body.appendChild(this.stats.dom)}initScene(){const e=new gt.World(new gt.Vector3(0,-9.8,0)),t=1/60;e.timestep=t,this.animator=new Vb(t),this.world=e;const i=new Ie(.5,.7,.9),n=new Ie(0,.3,.8),a=new Ie(-.3,.1,.6),o=new _b,s=new Lo(i,0,tu);o.fog=s,this.fog=s,this.scene=o,o.background=i,this.camera=new ni(75,window.innerWidth/window.innerHeight,.001,1e3),this.scene.add(this.camera),this.renderer=new Dh,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Fl,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement);const l=new N(0,0,6),c=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);if(qh("orbit")||c)this.camera.position.set(l.x,l.y+1,l.z+7),this.controls=new Eb(this.camera,this.renderer.domElement),this.blockGenRange=5;else{this.camera.position.y=1,this.camera.position.z=7;const A=new Bb(e,o,this.camera,this.renderer);this.visicals.push(A.visical),A.visical.setPosition(l.x,l.y+.8,l.z+5),this.player=A}this.skyColor=i,this.waterColorDeep=a,this.waterColorShallow=n,this.waterColor=n.clone();const h=new wb(i,new Ie(.5,.4,.3),2);o.add(h);const u=new Mb(new Ie(.8,.7,.6),5);u.shadow.camera.left-=Ja,u.shadow.camera.right+=Ja,u.shadow.camera.bottom-=Ja,u.shadow.camera.top+=Ja,u.shadow.camera.updateProjectionMatrix(),u.position.set(-.5,2.5,4).normalize().multiplyScalar(10),u.castShadow=!0,o.add(u);const d=1024,m=.5,_=50;u.shadow.mapSize.width=d,u.shadow.mapSize.height=d,u.shadow.camera.near=m,u.shadow.camera.far=_;const v=Va(o,e,6,2,12,void 0,"concrete");v.setPosition(l.x+2,l.y-1,l.z),this.visicals.push(v);const f=new qt(new Na(1e3,1e3,8,8),new Uo(zo("water").materialParams));this.scene.add(f),f.receiveShadow=!0,f.rotation.x=Math.PI*.5,f.position.y=Dn;const p=8;for(let A=0;A<p;A++){const P=A/p*Math.PI*2,T=Va(o,e,2,.1,2.5,void 0,"wood");T.setPosition(l.x+Math.cos(P)*2,l.y+.2,l.z+Math.sin(P)*2),T.setEuler(0,-P,.25),this.visicals.push(T)}const E=16;for(let A=0;A<E;A++){const P=A/E*Math.PI*2,T=Va(o,e,1,.3,1,gt.RigidBodyType.Dynamic,A%2===0?"wood":"concrete");T.setPosition(l.x+Math.cos(P)*7,l.y+.05,l.z+Math.sin(P)*5),T.setEuler(0,-P,0),this.visicals.push(T)}const w=gt.RigidBodyType.Dynamic;for(let A=0;A<5;A++){const P=Va(o,e,.5,.5,.5,w,"plastic");P.setPosition(l.x,l.y+2+A*.5,l.z),this.visicals.push(P);const T=Go(o,e,.25,w,"plastic");T.setPosition(l.x+.1,l.y+2+A*.5,l.z),this.visicals.push(T)}}makeBlock(e,t,i){const n=$h(this.noiseHelper,e,t,i,ai,Jb,"sand");if(n){this.scene.add(n);const a=$h(this.noiseHelper,e,t,i,ai,Zb,"sand");if(a){const o=new gt.RigidBodyDesc(gt.RigidBodyType.Fixed),s=this.world.createRigidBody(o),l=gt.ColliderDesc.trimesh(a.geometry.getAttribute("position").array,a.geometry.getIndex().array);return this.world.createCollider(l,s),s.setTranslation(n.position,!0),new jh(n,s)}}}initListeners(){window.addEventListener("resize",this.onWindowResize.bind(this),!1),window.addEventListener("keydown",a=>{const{key:o}=a;switch(o){case"e":const s=window.open("","Canvas Image"),{domElement:l}=this.renderer;this.renderer.render(this.scene,this.camera);const c=l.toDataURL();if(!s)return;s.document.write(`<img src='${c}' width='${l.width}' height='${l.height}'>`);break}});const e=new Le,t=new Le,i=a=>{if(!this.link){const o=new Ga(.05,.05,1,8,1),s=o.getAttribute("position").array;for(let l=1;l<s.length;l+=3)s[l]+=.5;this.link=new qt(o,new Rn({color:65280})),this.scene.add(this.link)}this.link.position.copy(a.intersection.point)},n=()=>{this.link&&(this.scene.remove(this.link),this.link=void 0)};document.addEventListener("pointerlockchange",()=>{this._pointerLocked=document.pointerLockElement===this.renderer.domElement},!1),window.addEventListener("mousedown",a=>{const o=this._pointerLocked?window.innerWidth*.5:a.x,s=this._pointerLocked?window.innerHeight*.5:a.y;this.closestOnMouseDown=this.getClosest(o,s),e.set(a.x,a.y)}),window.addEventListener("mousemove",a=>{const o=this._pointerLocked?window.innerWidth*.5:a.x,s=this._pointerLocked?window.innerHeight*.5:a.y;this.lastMouseMoveX=o,this.lastMouseMoveY=s,t.set(o,s).sub(e),this.closestOnMouseDown&&t.length()>10&&(this.closestOnMouseMove=this.getClosest(o,s),this.closestOnMouseMove&&this.closestOnMouseDown.intersection.object!==this.closestOnMouseMove.intersection.object&&i(this.closestOnMouseDown))}),window.addEventListener("mouseup",a=>{const o=this._pointerLocked?window.innerWidth*.5:a.x,s=this._pointerLocked?window.innerHeight*.5:a.y;if(n(),this.closestOnMouseDown&&this.closestOnMouseMove&&this.closestOnMouseDown.intersection.object!==this.closestOnMouseMove.intersection.object){const l=this.closestOnMouseDown,c=this.closestOnMouseMove,h=l.intersection.object,u=c.intersection.object,d=this.visicals.find(_=>h===_.visual),m=this.visicals.find(_=>u===_.visual);if(d&&m){const _=l.relativePoint.clone(),v=c.relativePoint.clone(),f=gt.JointData.spherical(_,v),p=this.world.createImpulseJoint(f,d.physical,m.physical,!0).handle,E=_.clone().applyMatrix4(h.matrixWorld),w=v.clone().applyMatrix4(u.matrixWorld),A=E.clone().lerp(w,.5),P=h.matrixWorld.clone().invert(),T=u.matrixWorld.clone().invert(),R=A.clone().applyMatrix4(P),V=A.clone().applyMatrix4(T);this.animator.animate(1,x=>{const b=this.world.getImpulseJoint(p);b.setAnchor1(R.clone().lerp(_,x)),b.setAnchor2(V.clone().lerp(v,x))})}}else{const l=this.getClosest(o,s);if(l){const c=this.visicals.find(h=>(l==null?void 0:l.intersection.object)===h.visual);if(c&&c.physical.bodyType()===gt.RigidBodyType.Fixed){const h=Go(this.scene,this.world,.5,gt.RigidBodyType.Fixed,"concrete"),u=l.intersection.point;h.setPosition(u.x,u.y,u.z),this.visicals.push(h)}}}this.closestOnMouseDown=void 0,this.closestOnMouseMove=void 0})}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}}new iS})()});export default uS();
