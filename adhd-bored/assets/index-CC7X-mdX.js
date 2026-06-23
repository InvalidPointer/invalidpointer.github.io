(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const b="workspace-main",fe=1;function Je(){return{pressureSensitivity:"normal",density:"comfortable",weekEndsOn:"friday",workdayEndTime:"18:00",reducedMotion:"system"}}function Xe(t=new Date){const e=t.toISOString();return{id:b,title:"Main",createdAt:e,updatedAt:e}}function Pe(t=new Date){return{lastRects:{},lastFocusedTaskId:null,updatedAt:t.toISOString()}}function Mt(t=new Date){return{mode:"auto",workspaceLayouts:{[b]:Pe(t)},updatedAt:t.toISOString()}}function be(t=new Date){const e=Xe(t),n=t.toISOString();return{schemaVersion:fe,workspaces:{[e.id]:e},workspaceOrder:[e.id],activeWorkspaceId:e.id,tasks:{},layout:Mt(t),settings:Je(),createdAt:n,updatedAt:n}}function Et(t){if(!t||typeof t!="object")return!1;const e=t;if(e.schemaVersion!==fe||!m(e.workspaces)||!Array.isArray(e.workspaceOrder)||typeof e.activeWorkspaceId!="string"||e.activeWorkspaceId!==b||!m(e.tasks)||!Ze(e.settings)||!O(e.createdAt)||!O(e.updatedAt))return!1;const n=e.workspaces,r=e.tasks;return!(!n[e.activeWorkspaceId]||!e.workspaceOrder.every(i=>typeof i=="string"&&!!n[i])||!Object.entries(n).every(([i,s])=>Rt(i,s))||!Object.entries(r).every(([i,s])=>Ct(i,s,n,r))||!Lt(e.layout,n,r))}function pe(t,e=new Date){return Et(t)?t:Ft(t,e)}function m(t){return!!t&&typeof t=="object"&&!Array.isArray(t)}function Rt(t,e){return m(e)?e.id===t&&typeof e.title=="string"&&O(e.createdAt)&&O(e.updatedAt):!1}function Ct(t,e,n,r){return m(e)?e.id===t&&typeof e.workspaceId=="string"&&!!n[e.workspaceId]&&(e.parentId===null||typeof e.parentId=="string"&&he(e.parentId,e.workspaceId,r))&&Array.isArray(e.childIds)&&e.childIds.every(i=>typeof i=="string"&&i!==t&&he(i,e.workspaceId,r))&&typeof e.title=="string"&&typeof e.notes=="string"&&typeof e.nextAction=="string"&&O(e.createdAt)&&O(e.updatedAt)&&ee(e.completedAt)&&ee(e.archivedAt)&&ee(e.deadline)&&et(e.urgency)&&tt(e.status)&&ee(e.snoozedUntil)&&D(e.orderHint):!1}function Lt(t,e,n){return m(t)?t.mode==="auto"&&m(t.workspaceLayouts)&&Object.entries(t.workspaceLayouts).every(([r,i])=>!!e[r]&&Ht(r,i,n))&&O(t.updatedAt):!1}function Ht(t,e,n){return m(e)?m(e.lastRects)&&Object.entries(e.lastRects).every(([r,i])=>Pt(r,i,t,n))&&(e.lastFocusedTaskId===null||typeof e.lastFocusedTaskId=="string"&&he(e.lastFocusedTaskId,t,n))&&O(e.updatedAt):!1}function Pt(t,e,n,r){return m(e)?he(t,n,r)&&D(e.x)&&D(e.y)&&D(e.width)&&D(e.height)&&nt(e.pressureState)&&O(e.updatedAt):!1}function Ze(t){return m(t)?["calm","normal","spicy"].includes(String(t.pressureSensitivity))&&["compact","comfortable"].includes(String(t.density))&&t.weekEndsOn==="friday"&&typeof t.workdayEndTime=="string"&&/^(?:[01]?\d|2[0-3]):[0-5]\d$/.test(t.workdayEndTime)&&(typeof t.reducedMotion=="boolean"||t.reducedMotion==="system"):!1}function et(t){return t==="day"||t==="week"||t==="month"}function tt(t){return t==="active"||t==="done"||t==="snoozed"||t==="archived"}function nt(t){return t==="Quiet"||t==="Warming"||t==="Hot"||t==="Focus"}function he(t,e,n){const r=n[t];return m(r)&&r.workspaceId===e}function O(t){return typeof t=="string"&&T(t)!==null}function ee(t){return t===null||O(t)}function T(t){if(typeof t!="string")return null;const e=new Date(t),n=e.getTime();return Number.isFinite(n)?e.toISOString():null}function D(t){return typeof t=="number"&&Number.isFinite(t)}function Ft(t,e){if(!m(t)||t.schemaVersion!==fe||!m(t.workspaces)||!Array.isArray(t.workspaceOrder)||typeof t.activeWorkspaceId!="string"||!m(t.tasks)||!m(t.layout)||!m(t.settings))return null;const n=e.toISOString(),r=Nt(t.workspaces,e),i=zt(t.workspaceOrder,r),s=Ut(t.tasks,r,n);return{schemaVersion:fe,workspaces:r,workspaceOrder:i,activeWorkspaceId:b,tasks:s,layout:Qt(t.layout,r,s,e),settings:Ze(t.settings)?t.settings:Je(),createdAt:T(t.createdAt)??n,updatedAt:T(t.updatedAt)??n}}function Nt(t,e){const n=e.toISOString(),r={};for(const[i,s]of Object.entries(t)){const a=qt(i,s,n);a&&(r[i]=a)}return r[b]||(r[b]=Xe(e)),r}function qt(t,e,n){return!m(e)||e.id!==t||typeof e.title!="string"?null:{id:t,title:e.title,createdAt:T(e.createdAt)??n,updatedAt:T(e.updatedAt)??n}}function zt(t,e){const n=new Set([b]);for(const r of t)typeof r=="string"&&r!==b&&e[r]&&n.add(r);for(const r of Object.keys(e))r!==b&&n.add(r);return[...n]}function Ut(t,e,n){const r={};let i=1e3;for(const[s,a]of Object.entries(t)){const o=Wt(s,a,e,n,i);o&&(r[s]=o,i+=1e3)}return _t(r)}function Wt(t,e,n,r,i){if(!m(e)||e.id!==t||typeof e.workspaceId!="string"||!n[e.workspaceId]||typeof e.title!="string"||!et(e.urgency)||!tt(e.status))return null;const s=T(e.createdAt)??r,a=T(e.updatedAt)??s;let o=T(e.completedAt),c=T(e.archivedAt),l=T(e.snoozedUntil),d=e.status;return d==="active"&&(o=null,c=null,l=null),d==="snoozed"&&!l&&(d="active"),d==="done"&&!o&&(o=a),d==="archived"&&!c&&(c=a),d==="done"&&(c=null,l=null),d==="archived"&&(o=null,l=null),{id:t,workspaceId:e.workspaceId,parentId:typeof e.parentId=="string"?e.parentId:null,childIds:Array.isArray(e.childIds)?e.childIds.filter(p=>typeof p=="string"):[],title:e.title,notes:typeof e.notes=="string"?e.notes:"",nextAction:typeof e.nextAction=="string"?e.nextAction:"",createdAt:s,updatedAt:a,completedAt:o,archivedAt:c,deadline:T(e.deadline),urgency:e.urgency,status:d,snoozedUntil:l,orderHint:D(e.orderHint)?e.orderHint:i}}function _t(t){const e={};for(const[n,r]of Object.entries(t)){const i=r.parentId&&t[r.parentId]?.workspaceId===r.workspaceId&&r.parentId!==n?r.parentId:null,s=Yt(r.childIds.filter(a=>a!==n&&t[a]?.workspaceId===r.workspaceId));e[n]={...r,parentId:i,childIds:s}}return e}function Qt(t,e,n,r){const i=r.toISOString(),s=m(t.workspaceLayouts)?t.workspaceLayouts:{},a={};for(const o of Object.keys(e))a[o]=Vt(o,s[o],n,i)??Pe(r);return{mode:"auto",workspaceLayouts:a,updatedAt:T(t.updatedAt)??i}}function Vt(t,e,n,r){if(!m(e))return null;const i={},s=m(e.lastRects)?e.lastRects:{};for(const[o,c]of Object.entries(s)){const l=Kt(o,c,t,n,r);l&&(i[o]=l)}const a=typeof e.lastFocusedTaskId=="string"&&n[e.lastFocusedTaskId]?.workspaceId===t?e.lastFocusedTaskId:null;return{lastRects:i,lastFocusedTaskId:a,updatedAt:T(e.updatedAt)??r}}function Kt(t,e,n,r,i){return!m(e)||r[t]?.workspaceId!==n||!D(e.x)||!D(e.y)||!D(e.width)||!D(e.height)||!nt(e.pressureState)?null:{x:e.x,y:e.y,width:e.width,height:e.height,pressureState:e.pressureState,updatedAt:T(e.updatedAt)??i}}function Yt(t){return[...new Set(t)]}class rt{constructor(e){this.document=e}document;get snapshot(){return this.document}replace(e){this.document=e}workspaceLayout(e=this.document.activeWorkspaceId,n=new Date){if(!this.document.workspaces[e])throw new Error(`Workspace not found: ${e}`);const r=this.document.layout.workspaceLayouts[e];if(r)return r;const i=Pe(n);return this.document.layout.workspaceLayouts[e]=i,this.touch(n),i}saveRects(e,n,r=new Date){const i=r.toISOString(),s=this.workspaceLayout(e,r),a={};for(const o of n)a[o.taskId]={x:o.x,y:o.y,width:o.width,height:o.height,pressureState:o.pressureState,updatedAt:i};return s.lastRects=a,s.updatedAt=i,this.touch(r),s}setLastFocusedTask(e,n=this.document.activeWorkspaceId,r=new Date){const i=this.workspaceLayout(n,r);i.lastFocusedTaskId=e,i.updatedAt=r.toISOString(),this.touch(r)}touch(e){const n=e.toISOString();this.document.layout.updatedAt=n,this.document.updatedAt=n}}const j=1440*60*1e3,Oe=3600*1e3;function jt({task:t,settings:e,now:n=new Date}){if(t.status==="done"||t.status==="archived")return Ie(t.id,0,"Quiet",n.toISOString(),"Inactive");if(t.status==="snoozed"&&t.snoozedUntil){const k=new Date(t.snoozedUntil);if(k.getTime()>n.getTime())return Ie(t.id,8,"Quiet",k.toISOString(),"Snoozed")}const r=new Date(t.createdAt),i=t.deadline?new Date(t.deadline):null,s=i??Xt(t.urgency,e.workdayEndTime,r),a=Gt(t.urgency,r,n),o=Bt(s,n,!!i),c=s.getTime()>n.getTime()&&s.getTime()-n.getTime()<=900*1e3,l=Math.max(a,o)*nn(e.pressureSensitivity),d=i&&i.getTime()<n.getTime()?82:c?88:0,p=ue(Math.max(l,d),0,96),x=Jt(p,s,n),w=i&&i.getTime()<n.getTime()?"Needs decision":x;return Ie(t.id,rn(p),x,s.toISOString(),w)}function q(t){return t==="day"?"Today":t==="week"?"This week":"This month"}function Ie(t,e,n,r,i){return{taskId:t,score:e,state:n,softHorizon:r,reason:i}}function Gt(t,e,n){const r=Math.max(0,n.getTime()-e.getTime());return t==="day"?ue(r/(8*Oe)*70,0,70):t==="week"?ue(r/(4*j)*55,0,55):ue(r/(21*j)*42,0,42)}function Bt(t,e,n){const r=t.getTime()-e.getTime();return r<=0?92:r<=900*1e3?94:r<=Oe?86:r<=6*Oe?62:r<=j?n?70:62:r<=3*j?46:r<=7*j?30:14}function Jt(t,e,n){const r=e.getTime()-n.getTime();return r>0&&r<=900*1e3&&t>=88?"Focus":t>=66?"Hot":t>=34?"Warming":"Quiet"}function Xt(t,e,n){return t==="day"?Zt(n,e):t==="week"?en(n,e):tn(n,e)}function Zt(t,e){const[n,r]=Fe(e),i=new Date(t);return i.setHours(n,r,0,0),i.getTime()<=t.getTime()&&i.setDate(i.getDate()+1),i}function en(t,e){const[n,r]=Fe(e),i=new Date(t),s=i.getDay(),a=(5-s+7)%7;return i.setDate(i.getDate()+a),i.setHours(n,r,0,0),(i.getTime()<=t.getTime()||s===5)&&i.setDate(i.getDate()+7),i}function tn(t,e){const[n,r]=Fe(e),i=new Date(t.getFullYear(),t.getMonth()+1,0,n,r,0,0);return i.getTime()<=t.getTime()?new Date(t.getFullYear(),t.getMonth()+2,0,n,r,0,0):i}function Fe(t){const e=/^(\d{1,2}):(\d{2})$/.exec(t);return e?[Number(e[1]),Number(e[2])]:[18,0]}function nn(t){return t==="calm"?.82:t==="spicy"?1.18:1}function ue(t,e,n){return Math.max(e,Math.min(n,t))}function rn(t){return Math.round(t*10)/10}class sn{constructor(e){this.document=e}document;get snapshot(){return this.document}replace(e){this.document=e}create(e){const r=(e.now??new Date).toISOString(),i=e.title.trim(),s=e.workspaceId??b;if(s!==b||!this.document.workspaces[b])throw new Error(`MVP tasks must belong to the default workspace: ${b}`);const a=this.nextOrderHint(s),o={id:an(),workspaceId:s,parentId:null,childIds:[],title:i,notes:"",nextAction:"",createdAt:r,updatedAt:r,completedAt:null,archivedAt:null,deadline:e.deadline??null,urgency:e.urgency??"week",status:"active",snoozedUntil:null,orderHint:a};return this.document.tasks[o.id]=o,this.touch(r),o}update(e,n,r=new Date){const i=this.requireTask(e),s=r.toISOString(),a={...i,...n,title:n.title===void 0?i.title:n.title.trim(),updatedAt:s};return this.document.tasks[e]=a,this.touch(s),a}markDone(e,n=new Date){return this.setStatus(e,"done",n,{completedAt:n.toISOString(),archivedAt:null,snoozedUntil:null})}archive(e,n=new Date){return this.setStatus(e,"archived",n,{archivedAt:n.toISOString(),snoozedUntil:null})}snooze(e,n,r=new Date){return this.setStatus(e,"snoozed",r,{snoozedUntil:n,completedAt:null,archivedAt:null})}activate(e,n=new Date){return this.setStatus(e,"active",n,{completedAt:null,archivedAt:null,snoozedUntil:null})}activeRootTasks(e=this.document.activeWorkspaceId){return Object.values(this.document.tasks).filter(n=>n.workspaceId===e).filter(n=>n.parentId===null).filter(n=>n.status==="active"||n.status==="snoozed").sort((n,r)=>n.orderHint-r.orderHint)}setStatus(e,n,r,i){const s=this.requireTask(e),a=r.toISOString(),o={...s,...i,status:n,updatedAt:a};return this.document.tasks[e]=o,this.touch(a),o}requireTask(e){const n=this.document.tasks[e];if(!n)throw new Error(`Task not found: ${e}`);return n}nextOrderHint(e){const n=Object.values(this.document.tasks).filter(r=>r.workspaceId===e).map(r=>r.orderHint);return n.length===0?1e3:Math.max(...n)+1e3}touch(e){this.document.updatedAt=e}}function an(){return globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`task-${Date.now()}-${Math.random().toString(16).slice(2)}`}const on=new Map([["sunday",0],["monday",1],["tuesday",2],["wednesday",3],["thursday",4],["friday",5],["saturday",6]]);function it(t,e=new Date){let n=un(t.trim().replace(/\s+/g," ")),r="week",i=null;const s=[],a=/(?:^|\s)(!{1,3})\s*$/.exec(n);if(a){const p=a[1].length;r=p===1?"day":p===2?"week":"month",s.push(mn(r)),n=n.slice(0,a.index).trim()}const o=n.toLowerCase(),c=cn(o);c&&(r=c.urgency,i=c.deadline(e).toISOString(),s.push(c.label),n=Ae(n,c.index,c.text.length));const l=/\b(\d{4}-\d{2}-\d{2})\b/.exec(n);if(l){const p=dn(l[1],e);p&&(i=p.toISOString(),s.push(l[1]),n=Ae(n,l.index,l[0].length))}const d=/\b([01]?\d|2[0-3]):([0-5]\d)\b/.exec(n);if(d){const p=i?new Date(i):new Date(e);p.setHours(Number(d[1]),Number(d[2]),0,0),!i&&p.getTime()<=e.getTime()&&p.setDate(p.getDate()+1),i=p.toISOString(),r="day",s.push(d[0]),n=Ae(n,d.index,d[0].length)}return{title:n.trim()||t.trim(),urgency:r,deadline:i,chips:[...new Set(s)]}}function cn(t){const e=[{text:"this month",label:"This month",urgency:"month",deadline:n=>hn(n)},{text:"this week",label:"This week",urgency:"week",deadline:n=>pn(n)},{text:"tomorrow",label:"Tomorrow",urgency:"day",deadline:n=>ln(n,1)},{text:"today",label:"Today",urgency:"day",deadline:n=>fn(n)}];for(const n of e){const r=We(t,n.text);if(r>=0)return{...n,index:r}}for(const[n,r]of on){const i=We(t,n);if(i>=0)return{text:n,label:gn(n),urgency:"week",deadline:s=>st(s,r),index:i}}return null}function dn(t,e){const[n,r,i]=t.split("-").map(Number);if(!n||!r||!i)return null;const s=new Date(e);return s.setFullYear(n,r-1,i),s.setHours(18,0,0,0),s.getFullYear()!==n||s.getMonth()!==r-1||s.getDate()!==i||Number.isNaN(s.getTime())?null:s}function un(t){return t.replace(/^(?:add|new)\s+/i,"").trim()}function We(t,e){const n=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),r=new RegExp(`(?:^|\\s)${n}(?=\\s|$)`,"i").exec(t);return!r||r.index<0?-1:t[r.index]===" "?r.index+1:r.index}function Ae(t,e,n){return`${t.slice(0,e)} ${t.slice(e+n)}`.replace(/\s+/g," ").trim()}function ln(t,e){const n=new Date(t);return n.setDate(n.getDate()+e),n.setHours(18,0,0,0),n}function fn(t){const e=new Date(t);return e.setHours(18,0,0,0),e.getTime()<=t.getTime()&&e.setDate(e.getDate()+1),e}function pn(t){return st(t,5)}function st(t,e){const n=new Date(t),r=(e-n.getDay()+7)%7;return n.setDate(n.getDate()+r),n.setHours(18,0,0,0),n.getTime()<=t.getTime()&&n.setDate(n.getDate()+7),n}function hn(t){const e=new Date(t.getFullYear(),t.getMonth()+1,0,18,0,0,0);return e.getTime()<=t.getTime()?new Date(t.getFullYear(),t.getMonth()+2,0,18,0,0,0):e}function mn(t){return t==="day"?"Today":t==="week"?"This week":"This month"}function gn(t){return`${t.slice(0,1).toUpperCase()}${t.slice(1)}`}const te=["dashboard","paneFocus","commandPalette","search","settings"],R=["dashboard","paneFocus","commandPalette"],Y=["dashboard","paneFocus"],ne=["dashboard","commandCapture","paneFocus","commandPalette","search","settings","datePicker"],Me=.5,at=[h("openCapture","Add task","A / N",te,!0,t=>t.scope!=="commandCapture",["new","capture"]),h("openSearch","Search tasks","/",te,!0,()=>!0,["find","filter"]),h("openSettings","Open settings",void 0,te,!0,t=>t.scope!=="settings",["density","pressure","motion","workday"]),h("openCommandPalette","Open command palette","Cmd/Ctrl K",ne,!1,t=>t.scope!=="commandPalette"),h("showShortcutHelp","Show shortcuts","?",ne,!1,()=>!0,["help","keyboard"]),h("showTransientShortcutHelp","Show quick shortcuts",void 0,ne,!1,()=>!0,["help","keyboard"]),h("closeCurrent","Close current surface","Esc",ne,!1,()=>!0,["escape"]),h("moveLeft","Move left","Left / H",Y,!1,re),h("moveRight","Move right","Right / L",Y,!1,re),h("moveUp","Move up","Up / K",Y,!1,re),h("moveDown","Move down","Down / J",Y,!1,re),h("openFocusedPane","Open focused pane","Enter",Y,!1,v),h("markDone","Mark done","Cmd/Ctrl Enter",R,!0,v,["complete","finish"]),h("snoozeLater","Snooze task","S",R,!0,v,["later"]),h("editNextAction","Set next action","F",R,!0,v,["focus","refine"]),h("editDeadline","Set deadline","D",R,!0,v,["due","date"]),h("editUrgency","Edit urgency","U",R,!1,v,["pressure"]),h("setUrgencyDay","Set urgency: Today",void 0,R,!0,v,["hot","day"]),h("setUrgencyWeek","Set urgency: This week",void 0,R,!0,v,["week"]),h("setUrgencyMonth","Set urgency: This month",void 0,R,!0,v,["month","quiet"]),h("reviewBoard","Review board","R",te,!0,()=>!0,["calm","reset"]),h("undoDone","Undo done",void 0,R,!1,t=>t.hasUndo,["restore"])],yn=new Map(at.map(t=>[t.id,t]));function ot(t){const e=yn.get(t);if(!e)throw new Error(`Unknown command: ${t}`);return e}function M(t,e){const n=ot(t);return n.scopes.includes(e.scope)&&n.canRun(e)}function wn(t,e){if(e.typing&&t.key!=="Escape")return null;const n=t.key.toLowerCase();return t.metaKey||t.ctrlKey?n==="k"?g("openCommandPalette",e):t.key==="Enter"?g("markDone",e):null:t.altKey?null:t.key==="Escape"?g("closeCurrent",e):t.key==="Enter"?g("openFocusedPane",e):t.key==="ArrowLeft"?g("moveLeft",e):t.key==="ArrowRight"?g("moveRight",e):t.key==="ArrowUp"?g("moveUp",e):t.key==="ArrowDown"?g("moveDown",e):t.key==="?"?g("showShortcutHelp",e):n==="a"||n==="n"?g("openCapture",e):t.key==="/"?g("openSearch",e):n==="h"?g("moveLeft",e):n==="j"?g("moveDown",e):n==="k"?g("moveUp",e):n==="l"?g("moveRight",e):n==="s"?g("snoozeLater",e):n==="u"?g("editUrgency",e):n==="d"?g("editDeadline",e):n==="f"?g("editNextAction",e):n==="r"?g("reviewBoard",e):null}function Ne(t,e){const n=ct(e);return at.filter(r=>r.palette).filter(r=>r.scopes.includes(t.scope)).filter(r=>!n||Sn(r,n)).sort((r,i)=>Number(M(i.id,t))-Number(M(r.id,t)))}function kn(t){return t==="moveLeft"?"left":t==="moveRight"?"right":t==="moveUp"?"up":t==="moveDown"?"down":null}function Tn(t,e,n){if(!e)return null;const r=t.find(s=>s.taskId===e);if(!r)return null;let i=null;for(const s of t){if(s.taskId===e)continue;const a=bn(r,s,n);if(a<-Me)continue;const o=In(r,s,n),c={beamRank:o>Me?0:1,primaryGap:Math.max(0,a),offAxisGap:An(r,s,n),offAxisCenterDistance:xn(r,s,n),offAxisOverlap:o,taskId:s.taskId};(!i||$n(c,i.score)<0)&&(i={taskId:s.taskId,score:c})}return i?.taskId??null}function h(t,e,n,r,i,s,a=[]){return{id:t,label:e,shortcut:n,scopes:r,palette:i,canRun:s,keywords:a}}function g(t,e){return M(t,e)?t:null}function v(t){return!!t.selectedTaskId}function re(t){return v(t)&&t.tileRects.length>1}function Sn(t,e){return[t.label,t.shortcut??"",...t.keywords??[]].map(ct).some(n=>n.includes(e))}function ct(t){return t.trim().toLocaleLowerCase()}function _e(t){return{x:t.x+t.width/2,y:t.y+t.height/2}}function bn(t,e,n){return n==="left"?t.x-(e.x+e.width):n==="right"?e.x-(t.x+t.width):n==="up"?t.y-(e.y+e.height):e.y-(t.y+t.height)}function In(t,e,n){const r=n==="left"||n==="right"?t.y:t.x,i=r+(n==="left"||n==="right"?t.height:t.width),s=n==="left"||n==="right"?e.y:e.x,a=s+(n==="left"||n==="right"?e.height:e.width);return Math.max(0,Math.min(i,a)-Math.max(r,s))}function An(t,e,n){const r=n==="left"||n==="right"?t.y:t.x,i=r+(n==="left"||n==="right"?t.height:t.width),s=n==="left"||n==="right"?e.y:e.x,a=s+(n==="left"||n==="right"?e.height:e.width);return a<r?r-a:s>i?s-i:0}function xn(t,e,n){const r=_e(t),i=_e(e);return Math.abs(n==="left"||n==="right"?i.y-r.y:i.x-r.x)}function $n(t,e){const n=t.beamRank===0?[t.beamRank,t.primaryGap,t.offAxisCenterDistance,-t.offAxisOverlap]:[t.beamRank,t.offAxisGap,t.primaryGap,t.offAxisCenterDistance],r=e.beamRank===0?[e.beamRank,e.primaryGap,e.offAxisCenterDistance,-e.offAxisOverlap]:[e.beamRank,e.offAxisGap,e.primaryGap,e.offAxisCenterDistance];for(let i=0;i<n.length;i+=1){const s=n[i]-r[i];if(Math.abs(s)>Me)return s}return t.taskId.localeCompare(e.taskId)}const A=3,qe=160,ye=96,dt=56,B=42,vn=.025,Dn=1.18,On=1.28,Qe=.03;function Mn(t){const e=t.tasks.filter(o=>o.status==="active"||o.status==="snoozed");if(e.length===0||t.viewport.width<=0||t.viewport.height<=0)return[];const n=e.map(o=>{const c=ht(t.pressures,o.id),l=Cn(o,c,t.settings.pressureSensitivity);return{task:o,pressure:c,weight:l,layoutWeight:o.id===t.selectedTaskId?l*Dn:l}}),r=En(n,t);if(r)return r;const i=pt(n),s=z(t.viewport);return(s.width<760||s.height<420?lt(i,s,t.settings.density,t.selectedTaskId??null):ut(i,s,t.settings.density,t.selectedTaskId??null)).map((o,c)=>({...o,zIndex:o.taskId===t.selectedTaskId?3:o.taskId===i[0]?.task.id?2:c+1}))}function En(t,e){const n=e.previousRects;if(!n)return null;const r=e.selectedTaskId??null;if(e.previousSelectedTaskId!==void 0&&e.previousSelectedTaskId!==r)return null;const i=new Set(t.map(({task:d})=>d.id));if(![...i].every(d=>n[d]))return null;const s=pt(t),a=z(e.viewport),o=a.width<760||a.height<420?lt(s,a,e.settings.density,r):ut(s,a,e.settings.density,r),c=Object.keys(n).filter(d=>i.has(d));if(!Rn(c,o.map(d=>d.taskId)))return null;const l=c.map(d=>({taskId:d,x:n[d].x,y:n[d].y,width:n[d].width,height:n[d].height,pressureState:n[d].pressureState,isCompact:gt(n[d])}));return!l.every(d=>i.has(d.taskId))||!l.every(d=>d.pressureState===ht(e.pressures,d.taskId).state)||!Nn(l,e.viewport)||!Hn(l,e.viewport)||!Pn(l)||!Fn(l,o,e.viewport)?null:l}function ut(t,e,n,r){if(t.length===1)return[C(t[0],e,n)];if(t.length===2){const[H,P]=t,[V,K]=ie(e,Ee(.6,H,[P],r));return[C(H,V,n),C(P,K,n)]}if(t.length===3){const[H,...P]=t,[V,K]=ie(e,Ee(.58,H,P,r));return[C(H,V,n),...xe(P,K,n)]}const[i,...s]=t,a=s.length>=4?Math.max(1,Math.ceil(s.length*.22)):0,o=a>0?s.slice(-a):[],c=a>0?s.slice(0,-a):s,l=Math.ceil(c.length/2),d=c.slice(0,l),p=c.slice(l),x=p.length?$e(.18,p,r,.03,.18,.24):0,[w,k]=ie(e,x),E=d.length?$e(.7,d,r,-.03,.64,.7):1,[$,W]=ie(k,E),I=o.length>0,_=I?$e(.86,o,r,-.03,.8,.89):1,[Z,Q]=I?mt($,_):[$,J($)],L=[C(i,Z,n)];return L.push(...xe(p,w,n)),L.push(...xe(d,W,n)),L.push(...ft(o,Q,n,r)),L}function lt(t,e,n,r){if(t.length===1)return[C(t[0],e,n)];const[i,...s]=t,a=Ee(t.length<=3?.52:.5,i,s,r),[o,c]=mt(e,a);return[C(i,o,n),...ft(s,c,n,r)]}function xe(t,e,n){if(t.length===0||e.width<=0||e.height<=0)return[];const r=Re(e.height,t.map(a=>a.layoutWeight),Ln(e,t.length,n)),i=[];let s=e.y;for(let a=0;a<t.length;a+=1){const o=a===t.length-1?e.y+e.height-s:r[a];i.push(C(t[a],{x:e.x,y:s,width:e.width,height:o},n)),s+=o+A}return i}function ft(t,e,n,r){if(t.length===0||e.width<=0||e.height<=0)return[];const i=n==="compact"?dt:qe,s=Math.max(1,Math.floor((e.width+A)/(i+A))),a=Math.min(t.length,Math.max(1,Math.min(s,Math.ceil(Math.sqrt(t.length*1.6))))),o=Math.ceil(t.length/a),c=t.findIndex(({task:_})=>_.id===r),l=c>=0?c%a:-1,d=c>=0?Math.floor(c/a):-1,p=Re(e.width,Ve(a,l),i),x=(e.height-A*(o-1))/o,w=Math.min(B,e.height),k=x<w,E=k?w*o+A*(o-1):e.height,$=Re(E,Ve(o,d),k?w:n==="compact"?B:ye),W=Ke(e.x,p),I=Ke(e.y,$);return t.map((_,Z)=>{const Q=Z%a,L=Math.floor(Z/a),H=W[Q],P=I[L],V=Q===a-1?e.x+e.width-H:p[Q],K=!k&&L===o-1?e.y+e.height-P:$[L];return C(_,{x:H,y:P,width:V,height:K},n)})}function Ee(t,e,n,r){return r?e.task.id===r?Ce(t+Qe,.45,.66):n.some(({task:i})=>i.id===r)?Ce(t-Qe,.44,.62):t:t}function $e(t,e,n,r,i,s){return!n||!e.some(({task:a})=>a.id===n)?t:Ce(t+r,i,s)}function Ve(t,e){return Array.from({length:t},(n,r)=>r===e?On:1)}function Ke(t,e){const n=[];let r=t;for(const i of e)n.push(r),r+=i+A;return n}function pt(t){return[...t].sort((e,n)=>{const r=n.weight-e.weight;return Math.abs(r)>.28?r:e.task.orderHint-n.task.orderHint})}function Rn(t,e){return t.length===e.length&&t.every((n,r)=>n===e[r])}function Cn(t,e,n){const r=n==="calm"?.82:n==="spicy"?1.18:1,i=t.urgency==="day"?1.14:t.urgency==="month"?.92:1,s=e.state==="Focus"?1.05:e.state==="Hot"?.7:e.state==="Warming"?.28:0;return 1+Math.sqrt(Math.max(0,e.score))*.36*i*r+s}function ht(t,e){return(typeof t.get=="function"?t.get(e):t[e])??{taskId:e,score:0,state:"Quiet",softHorizon:"",reason:"Quiet"}}function C(t,e,n){const r=z(e);return{taskId:t.task.id,...r,pressureState:t.pressure.state,isCompact:gt(r,n)}}function ie(t,e){if(e<=0)return[J(t),t];if(e>=1)return[t,J(t)];const n=Math.round((t.width*e-A/2)*100)/100,r=t.x+n+A;return[z({x:t.x,y:t.y,width:n,height:t.height}),z({x:r,y:t.y,width:t.x+t.width-r,height:t.height})]}function mt(t,e){if(e<=0)return[J(t),t];if(e>=1)return[t,J(t)];const n=Math.round((t.height*e-A/2)*100)/100,r=t.y+n+A;return[z({x:t.x,y:t.y,width:t.width,height:n}),z({x:t.x,y:r,width:t.width,height:t.y+t.height-r})]}function Re(t,e,n){const r=A*Math.max(0,e.length-1),i=Math.max(0,t-r),s=Math.min(n,i/e.length),a=s*e.length,o=Math.max(0,i-a),c=e.reduce((l,d)=>l+d,0)||1;return e.map(l=>s+o*(l/c))}function Ln(t,e,n){const r=n==="compact"?B:ye;return(t.height-A*Math.max(0,e-1))/e>=r?r:B}function gt(t,e="comfortable"){return t.width<qe||t.height<ye}function Hn(t,e){return t.every(n=>{const r=n.isCompact?dt:qe,i=n.isCompact?B:ye;return n.x>=e.x&&n.y>=e.y&&n.x+n.width<=e.x+e.width+.5&&n.y+n.height<=e.y+e.height+.5&&n.width>=Math.min(r,e.width)-.5&&n.height>=Math.min(i,e.height)-.5})}function Pn(t){for(let e=0;e<t.length;e+=1)for(let n=e+1;n<t.length;n+=1){const r=t[e],i=t[n];if(r.x<i.x+i.width&&r.x+r.width>i.x&&r.y<i.y+i.height&&r.y+r.height>i.y)return!1}return!0}function Fn(t,e,n){const r=new Map(t.map(s=>[s.taskId,s])),i=Math.max(1,n.width*n.height);return e.every(s=>{const a=r.get(s.taskId);return a?Math.abs(Ye(s)-Ye(a))/i<=vn:!1})}function Ye(t){return t.width*t.height}function Nn(t,e){const n=t.reduce((r,i)=>({minX:Math.min(r.minX,i.x),minY:Math.min(r.minY,i.y),maxX:Math.max(r.maxX,i.x+i.width),maxY:Math.max(r.maxY,i.y+i.height)}),{minX:Number.POSITIVE_INFINITY,minY:Number.POSITIVE_INFINITY,maxX:Number.NEGATIVE_INFINITY,maxY:Number.NEGATIVE_INFINITY});return Math.abs(n.minX-e.x)<=.5&&Math.abs(n.minY-e.y)<=.5&&Math.abs(n.maxX-(e.x+e.width))<=.5&&Math.abs(n.maxY-(e.y+e.height))<=.5}function J(t){return{x:t.x,y:t.y,width:0,height:0}}function z(t){return{x:se(t.x),y:se(t.y),width:se(Math.max(0,t.width)),height:se(Math.max(0,t.height))}}function Ce(t,e,n){return Math.min(n,Math.max(e,t))}function se(t){return Math.round(t*100)/100}function qn({document:t,tasks:e,viewport:n,selectedTaskId:r=null,searchQuery:i="",now:s=new Date}){const a=t.activeWorkspaceId,o=new rt(t),c=o.workspaceLayout(a,s),l=new Set(e.map(I=>I.id)),d=c.lastFocusedTaskId,p=zn(l,r,d),x=new Map(e.map(I=>[I.id,jt({task:I,settings:t.settings,now:s})])),w=Mn({tasks:e,pressures:x,viewport:{x:0,y:0,width:n.width,height:n.height},previousRects:c.lastRects,previousSelectedTaskId:c.lastFocusedTaskId,settings:t.settings,selectedTaskId:p}),k=p??Un(w);let E=!1;Wn(c.lastRects,w)||(o.saveRects(a,w,s),E=!0),c.lastFocusedTaskId!==k&&(o.setLastFocusedTask(k,a,s),E=!0);const $=i.trim().length>0,W=new Map(e.map(I=>[I.id,!$||yt(I,i)]));return{tasks:e,pressureByTask:x,rects:w,selectedTaskId:k,searchActive:$,searchMatches:W,layoutChanged:E}}function yt(t,e){const n=je(e);return n?[t.title,t.nextAction,t.notes].some(r=>je(r).includes(n)):!0}function zn(t,e,n){return e&&t.has(e)?e:n&&t.has(n)?n:null}function Un(t){let e=null;for(const n of t)(!e||n.width*n.height>e.width*e.height)&&(e=n);return e?.taskId??null}function Wn(t,e){const n=Object.keys(t).sort(),r=e.map(i=>i.taskId).sort();return n.length!==r.length||!n.every((i,s)=>i===r[s])?!1:e.every(i=>{const s=t[i.taskId];return!!s&&ae(s.x,i.x)&&ae(s.y,i.y)&&ae(s.width,i.width)&&ae(s.height,i.height)&&s.pressureState===i.pressureState})}function ae(t,e){return Math.abs(t-e)<=.5}function je(t){return t.trim().toLocaleLowerCase()}function _n(t){if(!t)return"";const e=new Date(t);return Number.isNaN(e.getTime())?"":Bn(e)}function Qn(t){if(!t)return"";const e=new Date(t);return Number.isNaN(e.getTime())?"":Jn(e)}function Vn(t){if(!t)return null;const e=new Date(t);return Number.isNaN(e.getTime())?null:e.toISOString()}function Kn(t){if(!t)return null;const e=new Date(`${t}T09:00`);return Number.isNaN(e.getTime())?null:e.toISOString()}function wt(t,e=new Date){return t==="laterToday"?Yn(e).toISOString():t==="tomorrow"?jn(e).toISOString():Gn(e).toISOString()}function Yn(t){const e=new Date(t);return e.setHours(17,0,0,0),e.getTime()<=t.getTime()&&e.setTime(t.getTime()+7200*1e3),e}function jn(t){const e=new Date(t);return e.setDate(e.getDate()+1),e.setHours(9,0,0,0),e}function Gn(t){const e=new Date(t),n=(8-e.getDay())%7||7;return e.setDate(e.getDate()+n),e.setHours(9,0,0,0),e}function Bn(t){return`${t.getFullYear()}-${U(t.getMonth()+1)}-${U(t.getDate())}T${U(t.getHours())}:${U(t.getMinutes())}`}function Jn(t){return`${t.getFullYear()}-${U(t.getMonth()+1)}-${U(t.getDate())}`}function U(t){return String(t).padStart(2,"0")}class Xn{constructor(e="pressure-tiles:app-document",n=window.localStorage){this.key=e,this.storage=n}key;storage;async load(){const e=this.storage.getItem(this.key);if(!e)return null;try{return pe(JSON.parse(e))}catch{return null}}async save(e){this.storage.setItem(this.key,JSON.stringify(e))}async export(){return this.storage.getItem(this.key)??""}async import(e){const n=pe(JSON.parse(e));if(!n)throw new Error("Imported document is not a valid Pressure Tiles document.");return await this.save(n),n}async clear(){this.storage.removeItem(this.key)}}class me{raw="";constructor(e=null){e&&(this.raw=JSON.stringify(e))}async load(){if(!this.raw)return null;try{return pe(JSON.parse(this.raw))}catch{return null}}async save(e){this.raw=JSON.stringify(e)}async export(){return this.raw}async import(e){const n=pe(JSON.parse(e));if(!n)throw new Error("Imported document is not a valid Pressure Tiles document.");return this.raw=JSON.stringify(n),n}}async function Zn(t,e=new Date){try{const n=await t.load();if(n)return{document:n,adapter:t,warning:null};if(await t.export()){const i=be(e);return{document:i,adapter:new me(i),warning:"Invalid stored document: keeping a fresh document in memory"}}return{document:be(e),adapter:t,warning:null}}catch{const n=be(e);return{document:n,adapter:new me(n),warning:"Storage unavailable: keeping changes in memory"}}}async function er(t,e){try{return await t.save(e),{adapter:t,warning:null}}catch{return{adapter:new me(e),warning:"Storage unavailable: keeping changes in memory"}}}const tr=320,nr=280,rr={width:1200,height:720},Ge=1,ir=420,sr=1700,ar=8;async function or(t){const e=cr(),n=await Zn(e),r={document:n.document,store:new sn(n.document),adapter:n.adapter,captureOpen:!1,captureDraft:"",searchOpen:!1,searchQuery:"",searchActiveIndex:0,settingsOpen:!1,settingsFocusField:null,commandPaletteOpen:!1,commandPaletteQuery:"",commandPaletteActiveIndex:0,shortcutHelpMode:null,shortcutHelpTimeoutId:null,questionHelpTimerId:null,selectedTaskId:n.document.layout.workspaceLayouts[n.document.activeWorkspaceId]?.lastFocusedTaskId??null,boardViewport:rr,currentTileRects:[],measureFrame:null,editingTaskId:null,focusRequest:null,completionHold:null,undoToast:null,persistenceWarning:n.warning};f(t,r),globalThis.document.addEventListener("keydown",i=>Cr(i,t,r)),globalThis.document.addEventListener("keyup",i=>Lr(i,t,r)),globalThis.window.addEventListener("resize",()=>Dt(t,r))}function cr(){try{return new Xn}catch{return new me}}function f(t,e){const n=e.focusRequest?null:ti(t),r=e.store.activeRootTasks(),i=Zr(e,r),s=qn({document:e.document,tasks:i,viewport:e.boardViewport,selectedTaskId:e.selectedTaskId,searchQuery:e.searchQuery});if(e.selectedTaskId=s.selectedTaskId,e.currentTileRects=s.rects,e.editingTaskId){const c=s.rects.find(l=>l.taskId===e.editingTaskId);if(!c||!kt(c)){const l=e.editingTaskId;e.editingTaskId=null,e.focusRequest?.taskId===l&&e.focusRequest.field!=="pane"&&(e.focusRequest={taskId:l,field:"pane"})}}s.layoutChanged&&y(e);const a=[...s.pressureByTask.values()].filter(c=>c.state==="Hot"||c.state==="Focus").length,o=s.searchActive?[...s.searchMatches.values()].filter(Boolean).length:r.length;if(t.innerHTML=`
    <div class="app-shell" data-motion="${li(e.document.settings)}">
      <header class="topline">
        <div class="brand">
          <strong>Pressure Tiles</strong>
          <span>${u(vt(e.document))}</span>
        </div>
        ${dr(e,r.length,a,o)}
        ${ur(s.searchActive,e.settingsOpen)}
      </header>
      <main class="viewport">
        ${lr(s,e)}
      </main>
      <footer class="bottomline">
        <span>${e.persistenceWarning?u(e.persistenceWarning):"Local first"}</span>
        <span>${s.searchActive?`${o}/${r.length} matching`:"Auto layout"}</span>
      </footer>
      ${ei(e)}
      ${kr(e,r)}
      ${xr(e)}
    </div>
  `,Rr(t,e),e.captureOpen){const c=t.querySelector("[data-testid='capture-input']");c?.focus(),c?.setSelectionRange(c.value.length,c.value.length)}else if(e.searchOpen){const c=t.querySelector("[data-testid='search-input']");c?.focus(),c?.setSelectionRange(c.value.length,c.value.length)}else if(e.settingsOpen){const c=e.settingsFocusField??"pressureSensitivity";t.querySelector(`[data-settings-field='${c}']`)?.focus(),e.settingsFocusField=null}else if(e.commandPaletteOpen){const c=t.querySelector("[data-testid='command-palette-input']");c?.focus(),c?.setSelectionRange(c.value.length,c.value.length)}else e.shortcutHelpMode==="persistent"?t.querySelector("[data-action='close-help']")?.focus():(!e.focusRequest&&n&&(e.focusRequest=n),Ue(t,e));Dt(t,e)}function dr(t,e,n,r){return`
    <div class="statusline" aria-live="polite">
      <span><strong>${e}</strong> active</span>
      <span><strong>${n}</strong> hot</span>
      <span><strong>${r}</strong> ${t.searchQuery.trim()?"matching":"visible"}</span>
    </div>
  `}function ur(t,e){return`
    <div class="toolbar" role="toolbar" aria-label="Quick actions">
      <button class="key-button" type="button" data-action="open-capture" aria-label="Add task" title="Add task (A or N)">+</button>
      <button class="key-button${t?" is-active":""}" type="button" data-action="open-search" aria-label="Search tasks" title="Search tasks (/)">/</button>
      <button class="key-button shortcut-button toolbar-break" type="button" data-action="open-palette" aria-label="Open command palette (Cmd/Ctrl K)" title="Command palette (Cmd/Ctrl K)">⌘K</button>
      <button class="key-button" type="button" data-action="open-help" aria-label="Keyboard shortcuts" title="Keyboard shortcuts (?)">?</button>
      <button class="key-button toolbar-break${e?" is-active":""}" type="button" data-action="open-settings" aria-label="Settings" title="Settings">&#9881;</button>
    </div>
  `}function lr(t,e){if(t.tasks.length===0)return`
      <section class="empty-board" data-testid="empty-board" aria-label="Empty task board">
        <p>No active panes</p>
      </section>
    `;const n=new Map(t.tasks.map(i=>[i.id,i]));return`<section class="board" data-testid="tile-board" aria-label="Task pressure board">${t.rects.map(i=>{const s=n.get(i.taskId),a=t.pressureByTask.get(i.taskId);return!s||!a?"":fr(s,i,a,t,e)}).join("")}</section>`}function fr(t,e,n,r,i){const s=Math.round(n.score),a=t.id===r.selectedTaskId,o=i.editingTaskId===t.id,c=i.completionHold?.taskId===t.id,l=a&&kt(e),d=r.searchMatches.get(t.id)??!0,p=r.searchActive?d?" matches-search":" dimmed-by-search":"",x=a?" selected":"",w=l?" has-focus-surface":"",k=e.isCompact?" compact":"",E=c?" completing":"",$=[`left:${de(e.x)}`,`top:${de(e.y)}`,`width:${de(e.width)}`,`height:${de(e.height)}`,`z-index:${e.zIndex??1}`,`--pressure:${s}`].join(";");return`
    <article
      class="tile${x}${w}${p}${k}${E}"
      data-testid="task-tile"
      data-task-id="${u(t.id)}"
      data-pressure-state="${n.state}"
      data-selected="${a?"true":"false"}"
      data-focus-surface="${l?"true":"false"}"
      data-search-match="${d?"true":"false"}"
      data-completing="${c?"true":"false"}"
      data-editing="${o?"true":"false"}"
      style="${$}"
      tabindex="0"
      aria-selected="${a?"true":"false"}"
      aria-label="${u(t.title)}"
    >
      <span class="pressure-dot" aria-hidden="true"></span>
      ${l?mr(t,n,c,o):pr(t,n,a,e.isCompact===!0)}
    </article>
  `}function kt(t){return!t.isCompact&&t.width>=tr&&t.height>=nr}function pr(t,e,n,r){return`
    <div class="tile-core">
      ${n&&!r?hr(t,e):""}
      <h2 class="pane-title">${u(t.title)}</h2>
    </div>
  `}function hr(t,e){return`
    <div class="compact-status" data-testid="pressure-context" aria-label="Task status">
      <span>${u(e.reason)}</span>
      <span>${q(t.urgency)}</span>
      ${t.deadline?`<span>${u(N(t.deadline))}</span>`:""}
      ${t.status==="snoozed"&&t.snoozedUntil?`<span>snoozed ${u(N(t.snoozedUntil))}</span>`:""}
    </div>
  `}function mr(t,e,n,r){return`
    <div class="focus-surface" data-testid="focus-surface" data-editing="${r?"true":"false"}" aria-label="Focus surface for ${u(t.title)}">
      ${r?yr(t,e,n):gr(t,e,n)}
      ${n?'<p class="completion-note" data-testid="completion-note">Done. The board will settle in a moment.</p>':""}
    </div>
  `}function gr(t,e,n){const r=t.nextAction.trim(),i=t.notes.trim(),s=`focus-zen-next${r?"":" is-empty"}`;return`
      <div class="focus-read focus-read-zen" data-testid="focus-read">
        <div class="focus-zen-topline" data-testid="pressure-context" aria-label="Task status">
          <span class="focus-zen-status-primary">${u(e.reason)}</span>
          <span class="focus-zen-status-secondary">
            <span>${q(t.urgency)}</span>
            ${t.deadline?`<span>${u(N(t.deadline))}</span>`:""}
            ${t.status==="snoozed"&&t.snoozedUntil?`<span>snoozed ${u(N(t.snoozedUntil))}</span>`:""}
          </span>
        </div>
        <div class="focus-zen-center">
          <h2 class="focus-title-display" data-testid="focus-title-display">${u(t.title)}</h2>
          <p class="${s}" data-testid="focus-next-action-display">
            ${r?u(r):"Write one next action"}
          </p>
        </div>
        <div class="focus-zen-bottomline">
          ${i?`<p class="focus-zen-notes" data-testid="focus-notes-display">${u(i)}</p>`:""}
          <p class="focus-zen-hint" aria-label="Keyboard shortcuts">
            <span>F ${r?"refine":"add next"}</span>
            <span>D deadline</span>
            <span>S later</span>
            <span>Cmd/Ctrl Enter done</span>
          </p>
        </div>
      </div>
      ${Tt(t,n,!1)}
  `}function yr(t,e,n){return`
    <div class="focus-edit" data-testid="focus-edit">
      <label class="focus-field focus-title-field">
        <span>Title</span>
        <input
          class="focus-title-input"
          data-testid="focus-title-input"
          data-focus-field="title"
          data-task-id="${u(t.id)}"
          autocomplete="off"
          value="${u(t.title)}"
          aria-label="Task title"
          ${n?"disabled":""}
        />
      </label>
      <div class="focus-context" data-testid="pressure-context" aria-label="Pressure context">
        ${wr(t,e)}
      </div>
      <label class="focus-field focus-next-action-field">
        <span>Next action</span>
        <input
          class="focus-next-action"
          data-testid="focus-next-action"
          data-focus-field="nextAction"
          data-task-id="${u(t.id)}"
          autocomplete="off"
          value="${u(t.nextAction)}"
          placeholder="open the first thing"
          aria-label="Next action"
          ${n?"disabled":""}
        />
      </label>
      <div class="focus-meta-grid">
        <label class="focus-field">
          <span>Deadline</span>
          <input
            class="focus-control"
            data-testid="focus-deadline-input"
            data-focus-field="deadline"
            data-task-id="${u(t.id)}"
            type="datetime-local"
            value="${u(_n(t.deadline))}"
            aria-label="Deadline"
            ${n?"disabled":""}
          />
        </label>
        <label class="focus-field">
          <span>Urgency</span>
          <select
            class="focus-control"
            data-testid="focus-urgency-select"
            data-focus-field="urgency"
            data-task-id="${u(t.id)}"
            aria-label="Urgency"
            ${n?"disabled":""}
          >
            ${ve(t.urgency,"day")}
            ${ve(t.urgency,"week")}
            ${ve(t.urgency,"month")}
          </select>
        </label>
      </div>
      <label class="focus-field focus-notes-field">
        <span>Notes</span>
        <textarea
          class="focus-notes"
          data-testid="focus-notes"
          data-focus-field="notes"
          data-task-id="${u(t.id)}"
          rows="3"
          aria-label="Notes"
          ${n?"disabled":""}
        >${u(t.notes)}</textarea>
      </label>
    </div>
    ${Tt(t,n,!0)}
  `}function wr(t,e){return`
    ${oe(e.reason)}
    ${oe(q(t.urgency))}
    ${t.deadline?oe(`due ${N(t.deadline)}`):""}
    ${t.status==="snoozed"&&t.snoozedUntil?oe(`snoozed until ${N(t.snoozedUntil)}`):""}
  `}function Tt(t,e,n){return n?`
    <div class="focus-actions" aria-label="Task actions">
      ${n?`<button class="focus-secondary-action" type="button" data-action="finish-editing" data-task-id="${u(t.id)}">Done editing</button>`:`<button class="focus-secondary-action" type="button" data-action="start-editing" data-task-id="${u(t.id)}" ${e?"disabled":""}>Edit</button>`}
      <button class="focus-primary-action" type="button" data-action="mark-done" data-task-id="${u(t.id)}" ${e?"disabled":""}>Done</button>
      <button type="button" data-action="snooze-preset" data-snooze-preset="laterToday" data-task-id="${u(t.id)}" ${e?"disabled":""}>Later today</button>
      <button type="button" data-action="snooze-preset" data-snooze-preset="tomorrow" data-task-id="${u(t.id)}" ${e?"disabled":""}>Tomorrow</button>
      <button type="button" data-action="snooze-preset" data-snooze-preset="nextWeek" data-task-id="${u(t.id)}" ${e?"disabled":""}>Next week</button>
      <label class="pick-date-control">
        <span>Pick date</span>
        <input
          data-testid="snooze-date-input"
          data-action="snooze-date"
          data-task-id="${u(t.id)}"
          type="date"
          value="${u(Qn(t.snoozedUntil))}"
          aria-label="Pick snooze date"
          ${e?"disabled":""}
        />
      </label>
      <button type="button" data-action="archive-task" data-task-id="${u(t.id)}" ${e?"disabled":""}>
        Archive
      </button>
    </div>
  `:""}function oe(t){return`<span>${u(t)}</span>`}function ve(t,e){return`<option value="${e}" ${t===e?"selected":""}>${q(e)}</option>`}function F(t,e,n){return`<option value="${e}" ${t===e?"selected":""}>${u(n)}</option>`}function kr(t,e){const n=$r(t);return n?`
    <div class="command-backdrop open" data-testid="command-backdrop" aria-hidden="false">
      ${n==="capture"?Tr(t):""}
      ${n==="search"?Sr(t,e):""}
      ${n==="settings"?Ir(t):""}
      ${n==="palette"?Ar(t):""}
    </div>
  `:""}function Tr(t){return`
    <form
      class="command-panel"
      data-testid="capture-form"
      role="dialog"
      aria-modal="true"
      aria-labelledby="capture-command-title"
      aria-describedby="capture-command-hint"
    >
      <div class="command-kicker">
        <span id="capture-command-title">Add task</span>
        <span>${u(vt(t.document))}</span>
      </div>
      <input
        class="command-input"
        data-testid="capture-input"
        aria-label="Task capture"
        autocomplete="off"
        spellcheck="false"
        value="${u(t.captureDraft)}"
        placeholder="Submit report tomorrow !"
      />
      <div class="command-row">
        <div class="command-chips" data-testid="parser-chips" id="capture-command-hint">
          ${vr(t.captureDraft)}
        </div>
        <button class="command-submit" type="submit">Create</button>
      </div>
    </form>
  `}function Sr(t,e){const n=ze(t,e),r=we(t.searchActiveIndex,n.length);return`
    <form
      class="command-panel"
      data-testid="search-form"
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-command-title"
    >
      <div class="command-kicker">
        <span id="search-command-title">Search tasks</span>
        <span>${n.length} result${n.length===1?"":"s"}</span>
      </div>
      <input
        class="command-input"
        data-testid="search-input"
        aria-label="Search tasks"
        autocomplete="off"
        spellcheck="false"
        value="${u(t.searchQuery)}"
        placeholder="Search panes"
      />
      <div class="palette-list search-results" data-testid="search-results" role="listbox" aria-label="Search results">
        ${br(n,r)}
      </div>
      <div class="command-row command-row-actions">
        <button class="command-submit" type="submit">${n.length?"Open":"Close"}</button>
      </div>
    </form>
  `}function br(t,e){return t.length===0?'<p class="palette-empty">No matching panes</p>':t.map((n,r)=>{const i=r===e;return`
        <button
          class="palette-option search-result${i?" is-active":""}"
          type="button"
          data-action="select-search-result"
          data-task-id="${u(n.id)}"
          data-testid="search-result"
          data-active="${i?"true":"false"}"
          role="option"
          aria-selected="${i?"true":"false"}"
        >
          <div class="search-result-main">
            <strong>${u(n.title)}</strong>
            <small>${u(Or(n))}</small>
          </div>
          <span class="search-result-meta">${u(Mr(n))}</span>
        </button>
      `}).join("")}function Ir(t){const e=t.document.settings;return`
    <form
      class="command-panel settings-panel"
      data-testid="settings-form"
      role="dialog"
      aria-modal="true"
      aria-labelledby="settings-command-title"
    >
      <div class="command-kicker">
        <span id="settings-command-title">Settings</span>
      </div>
      <div class="settings-grid">
        <label class="settings-field">
          <span>Pressure</span>
          <select data-testid="settings-pressure-sensitivity" data-settings-field="pressureSensitivity" aria-label="Pressure sensitivity">
            ${F(e.pressureSensitivity,"calm","Calm")}
            ${F(e.pressureSensitivity,"normal","Normal")}
            ${F(e.pressureSensitivity,"spicy","Spicy")}
          </select>
        </label>
        <label class="settings-field">
          <span>Density</span>
          <select data-testid="settings-density" data-settings-field="density" aria-label="Density">
            ${F(e.density,"comfortable","Comfortable")}
            ${F(e.density,"compact","Compact")}
          </select>
        </label>
        <label class="settings-field">
          <span>Workday end</span>
          <input
            data-testid="settings-workday-end"
            data-settings-field="workdayEndTime"
            type="time"
            value="${u(e.workdayEndTime)}"
            aria-label="Workday end time"
          />
        </label>
        <label class="settings-field">
          <span>Motion</span>
          <select data-testid="settings-reduced-motion" data-settings-field="reducedMotion" aria-label="Reduced motion">
            ${F(le(e.reducedMotion),"system","System")}
            ${F(le(e.reducedMotion),"reduce","Reduce")}
            ${F(le(e.reducedMotion),"standard","Standard")}
          </select>
        </label>
      </div>
      <div class="command-row command-row-actions">
        <button class="command-submit" type="submit">Close</button>
      </div>
    </form>
  `}function Ar(t){const e=X(t,!1),n=Ne(e,t.commandPaletteQuery),r=ge(t,n,e),i=n.map((s,a)=>{const o=M(s.id,e),c=a===r;return`
        <button
          class="palette-option${c?" is-active":""}"
          type="button"
          data-command-id="${s.id}"
          data-testid="palette-option"
          data-active="${c?"true":"false"}"
          aria-selected="${c?"true":"false"}"
          ${o?"":"disabled"}
        >
          <span>${u(s.label)}</span>
          ${s.shortcut?`<kbd>${u(s.shortcut)}</kbd>`:""}
        </button>
      `}).join("");return`
    <form
      class="command-panel command-palette-panel"
      data-testid="command-palette"
      role="dialog"
      aria-modal="true"
      aria-labelledby="palette-command-title"
      aria-describedby="palette-command-hint"
    >
      <div class="command-kicker">
        <span id="palette-command-title">Command palette</span>
        <span>${n.length} command${n.length===1?"":"s"}</span>
      </div>
      <input
        class="command-input"
        data-testid="command-palette-input"
        aria-label="Command palette"
        autocomplete="off"
        spellcheck="false"
        value="${u(t.commandPaletteQuery)}"
        placeholder="Type a command"
      />
      <div class="palette-list" data-testid="command-palette-options" id="palette-command-hint">
        ${i||'<p class="palette-empty">No matching commands</p>'}
      </div>
    </form>
  `}function xr(t){if(!t.shortcutHelpMode)return"";const e=t.shortcutHelpMode==="persistent";return`
    <section
      class="shortcut-help ${e?"persistent":"transient"}"
      data-testid="shortcut-help"
      data-mode="${t.shortcutHelpMode}"
      role="${e?"dialog":"status"}"
      ${e?'aria-modal="true"':'aria-live="polite"'}
      aria-label="Keyboard shortcuts"
    >
      <div class="shortcut-help-head">
        <strong>Shortcuts</strong>
        ${e?'<button type="button" data-action="close-help" aria-label="Close shortcuts">Esc</button>':""}
      </div>
      <div class="shortcut-help-grid">
        ${De("Navigation",[["Arrows","move panes"],["H J K L","move panes"],["Enter","open pane"],["Esc","step back"]])}
        ${De("Task",[["F","next action"],["U","urgency"],["D","deadline"],["S","snooze"],["Cmd/Ctrl Enter","done"]])}
        ${De("Command",[["A / N","add"],["/","search"],["Cmd/Ctrl K","palette"],["?","help"]])}
      </div>
    </section>
  `}function De(t,e){return`
    <div class="shortcut-group">
      <h2>${u(t)}</h2>
      ${e.map(([n,r])=>`
            <div class="shortcut-row">
              <kbd>${u(n)}</kbd>
              <span>${u(r)}</span>
            </div>
          `).join("")}
    </div>
  `}function $r(t){return t.captureOpen?"capture":t.searchOpen?"search":t.settingsOpen?"settings":t.commandPaletteOpen?"palette":null}function vr(t){return Dr(t).map(n=>`<span class="parser-chip" data-testid="parser-chip">${u(n)}</span>`).join("")}function Dr(t){if(!t.trim())return["today","tomorrow","this week","this month","!","!!","!!!"];const e=it(t),n=[...e.chips,q(e.urgency)];return[...new Set(n)]}function ze(t,e){const n=t.searchQuery.trim();return(n?e.filter(i=>yt(i,n)):e).slice(0,ar)}function Or(t){const e=t.nextAction.trim();if(e)return e;const n=t.notes.trim();return n||(t.deadline?`Due ${N(t.deadline)}`:"No next action yet")}function Mr(t){return t.deadline?`${q(t.urgency)} / ${N(t.deadline)}`:q(t.urgency)}function we(t,e){return e<=0?0:Math.min(Math.max(t,0),e-1)}function St(t,e){return e<=0?0:(t+e)%e}function ge(t,e,n){if(e.length===0)return 0;const r=we(t.commandPaletteActiveIndex,e.length);if(M(e[r].id,n))return r;const i=e.findIndex(s=>M(s.id,n));return i>=0?i:r}function Er(t,e,n,r){if(e.length===0)return 0;let i=ge(t,e,n);for(let s=0;s<e.length;s+=1)if(i=St(i+r,e.length),M(e[i].id,n))return i;return ge(t,e,n)}function Rr(t,e){t.querySelector("[data-action='open-capture']")?.addEventListener("click",()=>{S(t,e,"openCapture")}),t.querySelector("[data-action='open-search']")?.addEventListener("click",()=>{S(t,e,"openSearch")}),t.querySelector("[data-action='open-settings']")?.addEventListener("click",()=>{S(t,e,"openSettings")}),t.querySelector("[data-action='open-palette']")?.addEventListener("click",()=>{S(t,e,"openCommandPalette")}),t.querySelector("[data-action='open-help']")?.addEventListener("click",()=>{S(t,e,"showShortcutHelp")}),t.querySelector("[data-action='close-help']")?.addEventListener("click",()=>{S(t,e,"closeCurrent")}),t.querySelector("[data-action='clear-search']")?.addEventListener("click",()=>{e.searchOpen=!1,e.searchQuery="",e.searchActiveIndex=0,f(t,e)}),t.querySelector("[data-testid='search-form']")?.addEventListener("submit",n=>{n.preventDefault(),Nr(t,e)||(e.searchOpen=!1,e.searchActiveIndex=0,f(t,e))}),t.querySelector("[data-testid='search-input']")?.addEventListener("keydown",n=>{Pr(n,t,e)}),t.querySelector("[data-testid='search-input']")?.addEventListener("input",n=>{e.searchQuery=n.target.value,e.searchActiveIndex=0,f(t,e)}),t.querySelectorAll("[data-action='select-search-result']").forEach((n,r)=>{n.addEventListener("click",()=>{e.searchActiveIndex=r,bt(t,e,n.dataset.taskId??null)})}),t.querySelector("[data-testid='settings-form']")?.addEventListener("submit",n=>{n.preventDefault(),e.settingsOpen=!1,f(t,e)}),t.querySelectorAll("[data-settings-field]").forEach(n=>{n.addEventListener("change",()=>Br(t,e,n))}),t.querySelector("[data-testid='capture-form']")?.addEventListener("submit",n=>{n.preventDefault(),Hr(t,e)}),t.querySelector("[data-testid='capture-input']")?.addEventListener("input",n=>{e.captureDraft=n.target.value,f(t,e)}),t.querySelector("[data-testid='command-palette']")?.addEventListener("submit",n=>{n.preventDefault(),qr(t,e)}),t.querySelector("[data-testid='command-palette-input']")?.addEventListener("keydown",n=>{Fr(n,t,e)}),t.querySelector("[data-testid='command-palette-input']")?.addEventListener("input",n=>{e.commandPaletteQuery=n.target.value,e.commandPaletteActiveIndex=0,f(t,e)}),t.querySelectorAll("[data-command-id]").forEach(n=>{n.addEventListener("click",()=>{const r=jr(n.dataset.commandId);r&&S(t,e,r)})}),t.querySelectorAll("[data-action='start-editing']").forEach(n=>{n.addEventListener("click",()=>G(t,e,n.dataset.taskId??null))}),t.querySelectorAll("[data-action='edit-field']").forEach(n=>{n.addEventListener("click",()=>{const r=n.dataset.focusField;G(t,e,n.dataset.taskId??null,$t(r)?r:void 0)})}),t.querySelectorAll("[data-action='finish-editing']").forEach(n=>{n.addEventListener("click",()=>At(t,e,n.dataset.taskId??e.editingTaskId))}),t.querySelectorAll("[data-focus-field]").forEach(n=>{const r=n.dataset.focusField,i=n.dataset.taskId??null;if(!r||!i)return;const s=r==="deadline"||r==="urgency"?"change":"input";n.addEventListener(s,()=>Gr(t,e,i,r,n))}),t.querySelectorAll("[data-action='mark-done']").forEach(n=>{n.addEventListener("click",()=>S(t,e,"markDone",{taskId:n.dataset.taskId??null}))}),t.querySelectorAll("[data-action='snooze-preset']").forEach(n=>{n.addEventListener("click",()=>{const r=n.dataset.snoozePreset;if(r){if(r==="laterToday"){S(t,e,"snoozeLater",{taskId:n.dataset.taskId??null});return}He(t,e,n.dataset.taskId??null,wt(r))}})}),t.querySelectorAll("[data-action='snooze-date']").forEach(n=>{n.addEventListener("change",()=>{const r=Kn(n.value);r&&He(t,e,n.dataset.taskId??null,r)})}),t.querySelectorAll("[data-action='archive-task']").forEach(n=>{n.addEventListener("click",()=>Xr(t,e,n.dataset.taskId??null))}),t.querySelector("[data-action='undo-done']")?.addEventListener("click",()=>xt(t,e)),t.querySelectorAll("[data-testid='task-tile'][data-task-id]").forEach(n=>{n.addEventListener("click",r=>{Be(r.target)||Le(t,e,n.dataset.taskId??null)}),n.addEventListener("keydown",r=>{Be(r.target)||r.key!=="Enter"&&r.key!==" "||(r.preventDefault(),Le(t,e,n.dataset.taskId??null))})})}function Cr(t,e,n){const r=t.target,i=ri(r);if(!i&&t.key==="?"&&!t.metaKey&&!t.ctrlKey&&!t.altKey){t.preventDefault(),Qr(e,n);return}const s=wn(t,X(n,i,r));s&&(t.preventDefault(),S(e,n,s,{target:r}))}function Lr(t,e,n){t.key==="?"&&Vr(e,n)}function S(t,e,n,r={}){const i=r.target instanceof HTMLElement?r.target:null,s=X(e,!1,i);if(!M(n,s))return;if(n!=="showShortcutHelp"&&n!=="showTransientShortcutHelp"&&Yr(e),e.commandPaletteOpen&&n!=="openCommandPalette"&&n!=="closeCurrent"&&n!=="openCapture"&&n!=="openSearch"&&(e.commandPaletteOpen=!1,e.commandPaletteQuery="",e.commandPaletteActiveIndex=0),n==="openCapture"){e.captureOpen=!0,e.searchOpen=!1,e.searchActiveIndex=0,e.settingsOpen=!1,e.commandPaletteOpen=!1,e.commandPaletteQuery="",e.commandPaletteActiveIndex=0,f(t,e);return}if(n==="openSearch"){e.searchOpen=!0,e.searchActiveIndex=0,e.captureOpen=!1,e.settingsOpen=!1,e.commandPaletteOpen=!1,e.commandPaletteQuery="",e.commandPaletteActiveIndex=0,f(t,e);return}if(n==="openSettings"){e.settingsOpen=!0,e.settingsFocusField="pressureSensitivity",e.captureOpen=!1,e.searchOpen=!1,e.searchActiveIndex=0,e.commandPaletteOpen=!1,e.commandPaletteQuery="",e.commandPaletteActiveIndex=0,f(t,e);return}if(n==="openCommandPalette"){e.commandPaletteOpen=!0,e.commandPaletteQuery="",e.commandPaletteActiveIndex=0,e.captureOpen=!1,e.searchOpen=!1,e.searchActiveIndex=0,e.settingsOpen=!1,f(t,e);return}if(n==="showShortcutHelp"||n==="showTransientShortcutHelp"){Kr(t,e,n==="showShortcutHelp"?"persistent":"transient");return}if(n==="closeCurrent"){Ur(t,e,i);return}const a=kn(n);if(a){const o=Tn(e.currentTileRects,e.selectedTaskId,a);o&&Le(t,e,o);return}if(n==="openFocusedPane"){if(!e.selectedTaskId)return;e.focusRequest={taskId:e.selectedTaskId,field:"pane"},Ue(t,e);return}if(n==="markDone"){Jr(t,e,r.taskId??e.selectedTaskId);return}if(n==="snoozeLater"){He(t,e,r.taskId??e.selectedTaskId,wt("laterToday"));return}if(n==="editNextAction"){G(t,e,r.taskId??e.selectedTaskId,"nextAction");return}if(n==="editDeadline"){G(t,e,r.taskId??e.selectedTaskId,"deadline");return}if(n==="editUrgency"){G(t,e,r.taskId??e.selectedTaskId,"urgency");return}if(n==="setUrgencyDay"||n==="setUrgencyWeek"||n==="setUrgencyMonth"){zr(t,e,n);return}if(n==="reviewBoard"){Wr(t,e);return}n==="undoDone"&&xt(t,e)}function Hr(t,e){const r=t.querySelector("[data-testid='capture-input']")?.value.trim()??e.captureDraft.trim();if(!r)return;const i=it(r),s=e.store.create({title:i.title,urgency:i.urgency,deadline:i.deadline});e.selectedTaskId=s.id,e.editingTaskId=null,e.focusRequest={taskId:s.id,field:"pane"},new rt(e.document).setLastFocusedTask(s.id),y(e).then(()=>{e.captureOpen=!1,e.captureDraft="",f(t,e)})}function Pr(t,e,n){if(!(t instanceof KeyboardEvent)||t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;const r=ze(n,n.store.activeRootTasks());r.length!==0&&(t.preventDefault(),n.searchActiveIndex=St(we(n.searchActiveIndex,r.length)+(t.key==="ArrowDown"?1:-1),r.length),f(e,n))}function Fr(t,e,n){if(!(t instanceof KeyboardEvent)||t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;const r=X(n,!1),i=Ne(r,n.commandPaletteQuery);i.length!==0&&(t.preventDefault(),n.commandPaletteActiveIndex=Er(n,i,r,t.key==="ArrowDown"?1:-1),f(e,n))}function Nr(t,e){const n=ze(e,e.store.activeRootTasks()),r=n[we(e.searchActiveIndex,n.length)];return r?(bt(t,e,r.id),!0):!1}function bt(t,e,n){!n||!e.document.tasks[n]||(e.searchOpen=!1,e.searchActiveIndex=0,e.editingTaskId=null,e.selectedTaskId=n,e.focusRequest={taskId:n,field:"pane"},y(e).then(()=>f(t,e)))}function qr(t,e){const n=X(e,!1),r=Ne(n,e.commandPaletteQuery),i=r[ge(e,r,n)],s=i&&M(i.id,n)?i:r.find(a=>M(a.id,n));s&&S(t,e,s.id)}function zr(t,e,n){if(!e.selectedTaskId||!e.document.tasks[e.selectedTaskId])return;const r=n==="setUrgencyDay"?"day":n==="setUrgencyWeek"?"week":"month";e.store.update(e.selectedTaskId,{urgency:r}),e.commandPaletteOpen=!1,e.commandPaletteQuery="",e.commandPaletteActiveIndex=0,e.focusRequest={taskId:e.selectedTaskId,field:"pane"},y(e).then(()=>f(t,e))}function Ur(t,e,n){if(It(e),e.shortcutHelpMode){ke(e),f(t,e);return}if(e.commandPaletteOpen){e.commandPaletteOpen=!1,e.commandPaletteQuery="",e.commandPaletteActiveIndex=0,f(t,e);return}if(e.captureOpen){e.captureOpen=!1,f(t,e);return}if(e.searchOpen){e.searchOpen=!1,e.searchActiveIndex=0,f(t,e);return}if(e.settingsOpen){e.settingsOpen=!1,f(t,e);return}if(e.searchQuery){e.searchQuery="",e.searchActiveIndex=0,f(t,e);return}if(e.editingTaskId){At(t,e,e.editingTaskId);return}const r=globalThis.document.activeElement instanceof HTMLElement?globalThis.document.activeElement:null;(n?.closest("[data-testid='focus-surface'], [data-testid='task-tile'][data-selected='true']")??r?.closest("[data-testid='focus-surface'], [data-testid='task-tile'][data-selected='true']"))&&(r?.blur(),n?.blur(),t.setAttribute("tabindex","-1"),t.focus({preventScroll:!0}))}function Wr(t,e){ke(e),It(e),e.captureOpen=!1,e.searchOpen=!1,e.searchActiveIndex=0,e.settingsOpen=!1,e.commandPaletteOpen=!1,e.commandPaletteQuery="",e.commandPaletteActiveIndex=0,e.searchQuery="",e.editingTaskId=null,e.selectedTaskId&&(e.focusRequest={taskId:e.selectedTaskId,field:"pane"}),f(t,e)}function X(t,e,n){return{scope:_r(t,n),selectedTaskId:t.selectedTaskId,tileRects:t.currentTileRects,typing:e,hasUndo:!!t.undoToast}}function _r(t,e){return e?.matches("input[type='date'], input[type='datetime-local'], [data-action='snooze-date']")?"datePicker":t.captureOpen?"commandCapture":t.commandPaletteOpen?"commandPalette":t.searchOpen?"search":t.settingsOpen?"settings":t.selectedTaskId||t.editingTaskId?"paneFocus":"dashboard"}function Qr(t,e){e.questionHelpTimerId===null&&(e.questionHelpTimerId=globalThis.window.setTimeout(()=>{e.questionHelpTimerId=null,S(t,e,"showTransientShortcutHelp")},ir))}function Vr(t,e){if(e.questionHelpTimerId!==null){globalThis.window.clearTimeout(e.questionHelpTimerId),e.questionHelpTimerId=null,S(t,e,"showShortcutHelp");return}}function Kr(t,e,n){ke(e),e.shortcutHelpMode=n,n==="transient"&&(e.shortcutHelpTimeoutId=globalThis.window.setTimeout(()=>{e.shortcutHelpMode==="transient"&&(e.shortcutHelpMode=null,e.shortcutHelpTimeoutId=null,f(t,e))},sr)),f(t,e)}function Yr(t){t.shortcutHelpMode==="transient"&&ke(t)}function ke(t){t.shortcutHelpTimeoutId!==null&&globalThis.window.clearTimeout(t.shortcutHelpTimeoutId),t.shortcutHelpMode=null,t.shortcutHelpTimeoutId=null}function It(t){t.questionHelpTimerId!==null&&globalThis.window.clearTimeout(t.questionHelpTimerId),t.questionHelpTimerId=null}function jr(t){if(!t)return null;try{return ot(t).id}catch{return null}}function Le(t,e,n){if(!(!n||!e.document.tasks[n])){if(e.editingTaskId=null,e.focusRequest={taskId:n,field:"pane"},e.selectedTaskId===n){Ue(t,e);return}e.selectedTaskId=n,y(e).then(()=>f(t,e))}}function Gr(t,e,n,r,i){if(e.document.tasks[n]){if(r==="title"){e.store.update(n,{title:i.value}),y(e);return}if(r==="nextAction"){e.store.update(n,{nextAction:i.value}),y(e);return}if(r==="notes"){e.store.update(n,{notes:i.value}),y(e);return}if(r==="deadline"){const s=Vn(i.value);if(i.value&&!s)return;e.store.update(n,{deadline:s}),e.focusRequest={taskId:n,field:r},y(e).then(()=>f(t,e));return}r==="urgency"&&ii(i.value)&&(e.store.update(n,{urgency:i.value}),e.focusRequest={taskId:n,field:r},y(e).then(()=>f(t,e)))}}function Br(t,e,n){const r=n.dataset.settingsField;if(e.settingsFocusField=si(r)?r:null,r==="pressureSensitivity"&&ai(n.value)){ce(t,e,{pressureSensitivity:n.value});return}if(r==="density"&&oi(n.value)){ce(t,e,{density:n.value});return}if(r==="workdayEndTime"&&di(n.value)){ce(t,e,{workdayEndTime:n.value});return}r==="reducedMotion"&&ci(n.value)&&ce(t,e,{reducedMotion:ui(n.value)})}function ce(t,e,n){const r=e.document.settings,i={...r,...n};if(fi(r,i))return;const s=new Date;e.document.settings=i,e.document.updatedAt=s.toISOString(),pi(r,i)&&hi(e.document,s),y(e).then(()=>f(t,e))}function G(t,e,n,r){!n||!e.document.tasks[n]||(e.editingTaskId=n,e.focusRequest={taskId:n,field:r??ni(e.document.tasks[n])},f(t,e))}function At(t,e,n){n&&(e.editingTaskId=null,e.focusRequest={taskId:n,field:"pane"},f(t,e))}function Jr(t,e,n){if(!n||!e.document.tasks[n]||e.document.tasks[n].status==="done")return;Te(e),Se(e);const r=e.store.markDone(n);e.selectedTaskId=n,e.editingTaskId=null,e.completionHold={taskId:n,timeoutId:globalThis.window.setTimeout(()=>{e.completionHold?.taskId===n&&(e.completionHold=null,e.selectedTaskId=null,f(t,e))},900)},e.undoToast={taskId:n,title:r.title,timeoutId:globalThis.window.setTimeout(()=>{e.undoToast?.taskId===n&&(e.undoToast=null,f(t,e))},5e3)},y(e).then(()=>f(t,e))}function He(t,e,n,r){!n||!e.document.tasks[n]||(Te(e),Se(e),e.store.snooze(n,r),e.selectedTaskId=n,e.editingTaskId=null,y(e).then(()=>f(t,e)))}function Xr(t,e,n){!n||!e.document.tasks[n]||(Te(e),Se(e),e.store.archive(n),e.selectedTaskId=null,e.editingTaskId=null,y(e).then(()=>f(t,e)))}function xt(t,e){const n=e.undoToast?.taskId;!n||!e.document.tasks[n]||(Te(e),Se(e),e.store.activate(n),e.selectedTaskId=n,e.editingTaskId=null,e.focusRequest={taskId:n,field:"pane"},y(e).then(()=>f(t,e)))}function Zr(t,e){const n=t.completionHold?.taskId;if(!n||e.some(s=>s.id===n))return e;const r=t.document.tasks[n];if(!r||r.status!=="done"||r.workspaceId!==t.document.activeWorkspaceId||r.parentId!==null||r.archivedAt)return e;const i={...r,status:"active"};return[...e,i].sort((s,a)=>s.orderHint-a.orderHint)}function ei(t){return t.undoToast?`
    <div class="undo-toast" data-testid="undo-toast" role="status" aria-live="polite">
      <span>Done: ${u(t.undoToast.title)}</span>
      <button type="button" data-action="undo-done">Undo</button>
    </div>
  `:""}function ti(t){const e=globalThis.document.activeElement;if(!(e instanceof HTMLElement)||!t.contains(e))return null;const n=e.closest("[data-testid='task-tile'][data-task-id]");if(e===n&&n.dataset.taskId)return{taskId:n.dataset.taskId,field:"pane"};const r=e.dataset.taskId,i=e.dataset.focusField;return!r||!$t(i)?null:{taskId:r,field:i}}function Ue(t,e){const n=e.focusRequest;if(!n)return;if(e.focusRequest=null,n.field==="pane"){[...t.querySelectorAll("[data-testid='task-tile'][data-task-id]")].find(s=>s.dataset.taskId===n.taskId)?.focus();return}const r=[...t.querySelectorAll("[data-focus-field]")].find(i=>i.dataset.taskId===n.taskId&&i.dataset.focusField===n.field);!r||r.disabled||(r.focus(),(r instanceof HTMLInputElement&&r.type!=="datetime-local"||r instanceof HTMLTextAreaElement)&&r.setSelectionRange(r.value.length,r.value.length))}function ni(t){return t.nextAction.trim()?"title":"nextAction"}function Te(t){t.completionHold?.timeoutId!==null&&t.completionHold?.timeoutId!==void 0&&globalThis.window.clearTimeout(t.completionHold.timeoutId),t.completionHold=null}function Se(t){t.undoToast?.timeoutId!==null&&t.undoToast?.timeoutId!==void 0&&globalThis.window.clearTimeout(t.undoToast.timeoutId),t.undoToast=null}function Be(t){return t instanceof Element&&!!t.closest("button, input, textarea, select, label")}function ri(t){return t instanceof Element&&!!t.closest("input, textarea, select, [contenteditable='true']")}function ii(t){return t==="day"||t==="week"||t==="month"}function $t(t){return t==="title"||t==="nextAction"||t==="deadline"||t==="urgency"||t==="notes"}function si(t){return t==="pressureSensitivity"||t==="density"||t==="workdayEndTime"||t==="reducedMotion"}function ai(t){return t==="calm"||t==="normal"||t==="spicy"}function oi(t){return t==="compact"||t==="comfortable"}function ci(t){return t==="system"||t==="reduce"||t==="standard"}function di(t){return/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(t)}function ui(t){return t==="system"?"system":t==="reduce"}function le(t){return t==="system"?"system":t?"reduce":"standard"}function li(t){return le(t.reducedMotion)}function fi(t,e){return t.pressureSensitivity===e.pressureSensitivity&&t.density===e.density&&t.weekEndsOn===e.weekEndsOn&&t.workdayEndTime===e.workdayEndTime&&t.reducedMotion===e.reducedMotion}function pi(t,e){return t.pressureSensitivity!==e.pressureSensitivity||t.density!==e.density||t.workdayEndTime!==e.workdayEndTime}function hi(t,e){const n=e.toISOString();for(const r of Object.values(t.layout.workspaceLayouts))r.lastRects={},r.updatedAt=n;t.layout.updatedAt=n,t.updatedAt=n}async function y(t){const e=await er(t.adapter,t.document);t.adapter=e.adapter,t.persistenceWarning=e.warning}function vt(t){return t.workspaces[t.activeWorkspaceId]?.title??"Main"}function N(t){const e=new Date(t);return Number.isNaN(e.getTime())?t:new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(e)}function de(t){return`${Math.round(t*100)/100}px`}function Dt(t,e){e.measureFrame!==null&&globalThis.window.cancelAnimationFrame(e.measureFrame),e.measureFrame=globalThis.window.requestAnimationFrame(()=>{e.measureFrame=null;const n=t.querySelector("[data-testid='tile-board']");if(!n)return;const r=n.getBoundingClientRect();if(r.width<=0||r.height<=0)return;const i={width:Math.round(r.width*100)/100,height:Math.round(r.height*100)/100};(Math.abs(i.width-e.boardViewport.width)>Ge||Math.abs(i.height-e.boardViewport.height)>Ge)&&(e.boardViewport=i,f(t,e))})}function u(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}const Ot=document.querySelector("#app");if(!Ot)throw new Error("Pressure Tiles root element was not found.");or(Ot);
