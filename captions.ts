import type {TimedWord} from "./types";export type Cue={start:number;end:number;text:string};export function cues(words:TimedWord[],maxWords=6){const out:Cue[]=[];for(let i=0;i<words.length;i+=maxWords){const part=words.slice(i,i+maxWords);if(part.length)out.push({start:part[0].start,end:part.at(-1)!.end,text:part.map(x=>x.word).join(" ")})}return out}function time(x:number){const ms=Math.round((x%1)*1000),s=Math.floor(x)%60,m=Math.floor(x/60)%60,h=Math.floor(x/3600);return `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")},${String(ms).padStart(3,"0")}`}export function toSrt(items:Cue[]){return items.map((x,i)=>`${i+1}
${time(x.start)} --> ${time(x.end)}
${x.text}
`).join("
")}