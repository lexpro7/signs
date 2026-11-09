import { useState } from 'react';
export type Attempt = {id:string; prompt:string; answer:string; given:string; correct:boolean; date:string; section:string};
export type Progress = {learned:string[]; hazards:string[]; grammar:string[]; attempts:Attempt[]; exams:{score:number;total:number;date:string}[]};
const empty:Progress = {learned:[],hazards:[],grammar:[],attempts:[],exams:[]};
export function useProgress(){
  const [progress,setProgress]=useState<Progress>(()=>{try{const p=JSON.parse(localStorage.getItem('safety-progress-v1')||'null');if(p&&['learned','hazards','grammar','attempts','exams'].every(k=>Array.isArray(p[k])))return p;}catch{/* Use a fresh record if saved data is unavailable. */}return empty;});
  const [storageError,setStorageError]=useState(false);
  function update(fn:(p:Progress)=>Progress){setProgress(p=>{const next=fn(p);try{localStorage.setItem('safety-progress-v1',JSON.stringify(next));}catch{setStorageError(true);}return next;});}
  const mark=(key:'learned'|'hazards'|'grammar',id:string)=>update(p=>({...p,[key]:Array.from(new Set([...p[key],id]))}));
  const record=(a:Omit<Attempt,'date'>)=>update(p=>({...p,attempts:[...p.attempts,{...a,date:new Date().toISOString()}].slice(-500)}));
  return {progress,mark,record,storageError,saveExam:(score:number,total:number)=>update(p=>({...p,exams:[...p.exams,{score,total,date:new Date().toISOString()}].slice(-50)}))};
}
export type ProgressStore=ReturnType<typeof useProgress>;
