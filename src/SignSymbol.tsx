import type { Sign } from './data';
function Symbol({name}:{name:string}) {
  switch(name) {
    case 'boots': return <><path d="M29 24h18v30l20 9q8 3 8 13H26V56h3z" fill="currentColor"/><path d="M26 81h49M33 35h10M33 42h10"/></>;
    case 'ears': return <><path d="M32 42c0-31 39-29 39-3 0 18-17 17-17 31 0 12-19 14-22 1M42 39c0-13 18-14 18-1 0 10-14 11-14 22"/><path d="M30 48h16v14H30z" fill="currentColor"/></>;
    case 'gloves': return <path d="M32 80 23 52q-2-8 5-6l10 14V28q0-8 7-5v25-29q7-6 9 2v27-26q7-4 8 4v24-19q7-4 8 4v32L60 81z" fill="currentColor"/>;
    case 'mask': return <><path d="M36 49V35a14 14 0 0 1 28 0v14M35 67q15 15 30 0M32 49l18-6 18 6v17l-18 7-18-7z"/><path d="m32 50-9-4v16l9 4m36-16 9-4v16l-9 4M40 54h20M40 61h20"/></>;
    case 'shield': return <><path d="M27 24h46v40q-23 23-46 0zM27 32h46M40 44v15q10 12 20 0V44"/><path d="M36 24q14-14 28 0"/></>;
    case 'vest': return <><path d="m31 23 12 5 7 16 7-16 12-5 10 51H21z"/><path d="M35 31v40m30-40v40M24 58h52M50 44v30" strokeWidth="6"/></>;
    case 'glasses': return <><path d="M18 41h27l5 5 5-5h27l-5 22H57l-7-12-7 12H23zM18 41l-4-8m68 8 4-8"/><path d="m29 48-3 6m36-6-3 6"/></>;
    case 'overalls': return <><path d="M37 20h26l14 22-10 8-7-10v39H48V59h-3v20H33V40l-6 10-10-8z"/><path d="M44 21v23h12V21M35 51h26"/></>;
    case 'smoking': return <><path d="M19 58h58v12H19zM65 58v12M83 56v16M68 47c-17-7 13-10-4-22M80 47c-13-8 9-9 0-21"/></>;
    case 'touch': return <><path d="M33 77 20 53q-2-7 5-7l14 13V27q0-8 7-6v28-30q8-5 9 2v28-26q8-3 8 5v23-18q8-2 8 5v30L61 78z"/><path d="M72 17h14v62H72"/></>;
    case 'flame': return <path d="M50 16c6 20 23 24 23 44 0 29-46 29-46 0 0-12 7-22 15-29-1 15 4 17 8 20 9-13 6-23 0-35z" fill="currentColor"/>;
    case 'forklift': return <><path d="M20 53h34v18H20zM30 53V34h23v37M59 26v49h24M64 25v42h19"/><circle cx="29" cy="76" r="7" fill="currentColor"/><circle cx="49" cy="76" r="7" fill="currentColor"/></>;
    case 'guard': return <><path d="M20 64h60v13H20zM29 60V31h42v29M35 39h30M35 47h30M50 54v10"/><circle cx="50" cy="58" r="10"/></>;
    case 'person': return <><circle cx="51" cy="25" r="8" fill="currentColor"/><path d="m48 38-9 20-13 4m22-24 12 19 13 2M47 43v20L34 81m13-18 18 18" strokeWidth="8"/></>;
    case 'food': return <><path d="M20 62h36v14H20zM20 56q18-25 36 0zM63 38h20l-3 39H66zM73 38l5-15h9"/></>;
    case 'lift': return <><path d="M23 24h54v55H23zM50 24v55M34 41v19m-5-14 5-5 5 5m22-5v19m-5-5 5 5 5-5"/></>;
    case 'slip': return <><circle cx="53" cy="31" r="7" fill="currentColor"/><path d="m49 42-9 16 17 5 11 13M42 57l-14 12M49 43l20 6M39 44l-14 5M20 81h61" strokeWidth="6"/></>;
    case 'warning': return <><path d="M47 31h6v31h-6z" fill="currentColor"/><circle cx="50" cy="73" r="4" fill="currentColor"/></>;
    case 'snow': return <><path d="M50 28v48M29 40l42 24M29 64l42-24M44 32l6 6 6-6M44 72l6-6 6 6M29 47l9-2-2-9M64 36l-2 9 9 2M29 57l9 2-2 9M64 68l-2-9 9-2"/></>;
    case 'bolt': return <path d="M53 25 34 56h16l-5 25 23-35H53l8-21z" fill="currentColor"/>;
    case 'explosion': return <><path d="m50 36 5 17 18-10-9 18 13 9-20 1-6 12-9-13-20 4 13-15-5-13 14 6z" fill="currentColor"/><path d="m25 29 9 10m33-8-7 12M50 21v9m28 24 7-4"/></>;
    case 'hot': return <><path d="M23 74h54M27 66h46M34 55c-13-12 12-12 0-25M50 55c-13-12 12-12 0-25M66 55c-13-12 12-12 0-25"/></>;
    case 'skull': return <><path d="M35 53c-16-25 46-33 30 0l-7 5v10H42V58z"/><circle cx="42" cy="44" r="4" fill="currentColor"/><circle cx="58" cy="44" r="4" fill="currentColor"/><path d="m28 65 44 16m-44 0 44-16M48 60v8m6-8v8"/></>;
    case 'exit': return <><path d="M19 24h27v53H19M55 48h29m-9-9 9 9-9 9"/><circle cx="47" cy="30" r="6" fill="currentColor"/><path d="m45 41-9 15 15 5 5 16M44 44l15 8M38 56 27 73" strokeWidth="6"/></>;
    case 'assembly': return <><circle cx="50" cy="44" r="6" fill="currentColor"/><circle cx="35" cy="49" r="5" fill="currentColor"/><circle cx="65" cy="49" r="5" fill="currentColor"/><path d="M41 67V55h18v12M28 68V59h10m24 0h10v9M20 20l14 14m-12 0h12V22M80 20 66 34m0-12v12h12M20 80l12-9m36 0 12 9"/></>;
    case 'cross': return <path d="M40 23h20v17h17v20H60v17H40V60H23V40h17z" fill="currentColor"/>;
    case 'eyewash': return <><path d="M23 38q27-26 54 0-27 26-54 0z"/><circle cx="50" cy="38" r="8"/><path d="m33 56-8 14m25-13v17m17-18 8 14M21 79h58"/></>;
    case 'umbrella': return <><path d="M20 48a30 30 0 0 1 60 0zM50 23v48q0 14-12 6M24 19v8m15-15v8m23-5v8m15-6v8"/></>;
    case 'container': return <><path d="M31 33h38v44H31zM27 25h46v8H27zM50 43v23m-8-8 8 8 8-8"/></>;
    case 'thermometer': return <><path d="M43 58V26a7 7 0 0 1 14 0v32a15 15 0 1 1-14 0M50 36v35M65 27h10m-10 12h7m-7 12h10"/><circle cx="50" cy="71" r="6" fill="currentColor"/></>;
    case 'ventilation': return <><path d="M18 35h45q17 0 13-12M18 50h56q14 0 9 12M18 65h34q17 0 12 13M32 24V15H15v69h17"/></>;
    case 'children': return <><circle cx="57" cy="47" r="7"/><path d="M57 57v16m0-11-14-5m14 5 14-5M57 73l-10 13m10-13 10 13M20 18h60v12H20M30 18V8h14v10"/></>;
    default:return null;
  }
}
export default function SignSymbol({sign, size=120, labelled=false}:{sign:Sign;size?:number;labelled?:boolean}) {
  const c = sign.category;
  const colour = c==='Mandatory'?'#1669bd':c==='Prohibition'?'#d53937':c==='Warning'?'#f6c743':c==='Emergency'?'#258452':'#313d42';
  return <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label={labelled?sign.name:`${c} safety symbol`} className="sign-symbol">
    {c==='Warning'?<path d="M50 5 97 89H3z" fill={colour} stroke="#20272b" strokeWidth="4" strokeLinejoin="round"/>:c==='Mandatory'?<circle cx="50" cy="50" r="47" fill={colour}/>:c==='Prohibition'?<circle cx="50" cy="50" r="44" fill="white" stroke={colour} strokeWidth="8"/>:c==='Emergency'?<rect x="3" y="3" width="94" height="94" rx="2" fill={colour}/>:<rect x="5" y="5" width="90" height="90" rx="6" fill="#fff" stroke="#a9b4b8" strokeWidth="2"/>}
    <g color={c==='Mandatory'||c==='Emergency'?'white':'#20272b'} fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><Symbol name={sign.icon}/></g>
    {c==='Prohibition'&&<path d="M19 19 81 81" stroke={colour} strokeWidth="8"/>}
  </svg>;
}
