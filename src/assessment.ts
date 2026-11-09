import { signs, hazards, grammar } from './data';
import type { Sign } from './data';
export const normalise = (s: string) => s.toLowerCase().replace(/[’‘]/g,"'").replace(/should not/g,"shouldn't").replace(/do not/g,"don't").replace(/[^a-z0-9\s]/g,'').replace(/\s+/g,' ').trim();
export function matchesSign(value: string, sign: Sign) {
  const answer = normalise(value).replace(/^(this is |it is |the sign means |a |an )/,'');
  return [sign.name, ...sign.aliases].some(candidate => normalise(candidate) === answer);
}
export function shuffle<T>(items: readonly T[]): T[] {
  const copy = [...items];
  for(let i=copy.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]];}
  return copy;
}
export type Question = {id:string; kind:'sign'|'grammar'|'hazard'|'instruction'; prompt:string; answer:string; explanation:string; options:string[]; signId?:string; hazardId?:string};
export function signQuestion(sign: Sign, instruction=false): Question {
  const answer = instruction ? sign.meaning : sign.name;
  const distractors = shuffle(signs.filter(s => s.id!==sign.id && s.icon!==sign.icon && s.name!==sign.name)).slice(0,3).map(s=>instruction?s.meaning:s.name);
  return {id:`${instruction?'instruction':'sign'}-${sign.id}`,kind:instruction?'instruction':'sign',prompt:instruction?'Which instruction matches this sign?':'What does this sign mean?',answer,explanation:sign.meaning,options:shuffle([answer,...distractors]),signId:sign.id};
}
export function createExam(): Question[] {
  const signQs = shuffle(signs).slice(0,8).map((s,i)=>signQuestion(s,i>5));
  const grammarQs: Question[] = shuffle(grammar.filter(g=>g.type==='Fill in the blanks'||g.type==='Choose the correct word')).slice(0,6).map(g=>({id:g.id,kind:'grammar',prompt:g.prompt,answer:g.answer,explanation:g.explanation,options:shuffle(['should','shouldn’t','could'])}));
  const hazardQs: Question[] = shuffle(hazards).slice(0,6).map(h=>({id:`hazard-${h.id}`,kind:'hazard',prompt:`${h.danger} What is the best safety advice?`,answer:h.advice,explanation:h.consequence,options:shuffle([h.advice,...shuffle(hazards.filter(x=>x.id!==h.id)).slice(0,3).map(x=>x.advice)]),hazardId:h.id}));
  return shuffle([...signQs,...grammarQs,...hazardQs]);
}
