export function ScoreBreakdown({scores}:{scores:Record<string,number>}){return <div>{Object.entries(scores).map(([k,v])=><div key={k}><span>{k}</span>: <b>{v}</b></div>)}</div>}
