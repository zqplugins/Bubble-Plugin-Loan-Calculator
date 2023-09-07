function(properties, context) {
function compoundTimeHandler(e){let r=e;try{r=e.toLowerCase()}catch{}if("daily"==r)return 365;if("monthly"==r)return 12;if("yearly"==r)return 1;if("quarterly"==r)return 4;if("weekly"==r)return 52;else if("half yearly"==r)return 2;else return e}function compoundInterestCalculator(e,r,t,n){return e*(1+r/100/t)**(t*n)}let principal=properties.principal,rate=properties.rate,compound=properties.compound,time=properties.time;
return {"total": compoundInterestCalculator(principal,rate, compoundTimeHandler(compound), time)}
}