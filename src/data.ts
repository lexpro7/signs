export type Category = 'Mandatory' | 'Prohibition' | 'Warning' | 'Emergency' | 'Safety labels';
export type Sign = { id: string; name: string; category: Category; meaning: string; example: string; aliases: string[]; icon: string };
export const categories: Category[] = ['Mandatory', 'Prohibition', 'Warning', 'Emergency', 'Safety labels'];
const make = (category: Category, rows: [string, string, string, string, string, string?][]): Sign[] => rows.map(([id, name, icon, meaning, example, aliases]) => ({id, name, icon, category, meaning, example, aliases: aliases?.split('|') ?? []}));
export const signs: Sign[] = [
  ...make('Mandatory', [
    ['boots','Safety boots','boots','Wear safety boots to protect your feet from falling objects.','You should wear safety boots in the warehouse.','safety shoes|protective boots|wear safety boots'],
    ['ears','Ear plugs','ears','Wear ear protection in noisy areas.','You should wear ear plugs near loud machines.','earplugs|ear protection|hearing protection|wear ear plugs'],
    ['gloves','Gloves','gloves','Wear suitable gloves to protect your hands.','You should wear protective gloves when handling rough materials.','protective gloves|wear gloves'],
    ['mask','Mask','mask','Wear the correct respiratory protection for the task.','You should wear a suitable mask in this area.','face mask|respiratory protection|wear a mask'],
    ['shield','Face shield','shield','Wear a face shield to protect your face from splashes or flying pieces.','You should wear a face shield when this task requires one.','wear a face shield'],
    ['vest','High-visibility vest','vest','Wear bright clothing so drivers can see you.','You should wear a high-visibility vest near moving vehicles.','hi vis vest|high visibility vest|high visibility clothing|reflective vest'],
    ['glasses','Safety glasses','glasses','Wear eye protection against splashes and flying particles.','You should wear safety glasses when drilling.','goggles|safety goggles|eye protection|wear safety glasses'],
    ['overalls','Overalls','overalls','Wear protective clothing suitable for the task.','You should wear overalls to protect your clothes and skin.','protective clothing|coveralls|wear overalls'],
  ]),
  ...make('Prohibition', [
    ['smoking','No smoking','smoking','Smoking is not allowed in this area.','You shouldn’t smoke near stored materials.','do not smoke|dont smoke|smoking prohibited'],
    ['touch','Don’t touch','touch','Do not touch this object or surface.','You shouldn’t touch the machine.','do not touch|dont touch|no touching'],
    ['flames','No open flames','flame','Keep naked flames and ignition sources away.','You shouldn’t use an open flame near fuel.','no naked flames|no flames|no fire'],
    ['forklifts','No forklift trucks','forklift','Forklift trucks must not enter this area.','You shouldn’t drive a forklift through this doorway.','no forklifts|no forklift|forklifts prohibited'],
    ['guards','Don’t remove safety guards','guard','Keep safety guards in place while using machinery.','You shouldn’t remove a machine’s safety guard.','do not remove safety guards|dont remove safety guards|keep guards in place'],
    ['pedestrians','No pedestrians','person','People must not walk in this area.','You shouldn’t walk in the vehicle-only area.','no walking|pedestrians prohibited'],
    ['food','No food or drinks','food','Do not eat or drink in this area.','You shouldn’t eat food in the chemical store.','no food and drink|no eating or drinking|no food or drink'],
    ['lifts','Don’t use lifts during a fire','lift','Use the designated escape stairs during a fire.','You shouldn’t use a lift during a fire.','do not use lifts during a fire|dont use lifts during a fire|no lifts during a fire'],
  ]),
  ...make('Warning', [
    ['slippery','Slippery floor','slip','The floor may be slippery, so take care.','You could slip and fall on the wet floor.','wet floor|slip hazard|slippery surface'],
    ['warning','General warning','warning','There is a hazard nearby. Read any extra instructions.','You should check the local safety instructions.','warning|caution|general hazard'],
    ['flammable','Highly flammable','flame','This material can catch fire very easily.','A spark could start a fire.','flammable|flammable material|fire hazard'],
    ['cold','Low temperature','snow','Very cold surfaces or materials may cause injury.','You could hurt your skin if you touch a very cold surface.','cold temperature|cold hazard|extreme cold'],
    ['voltage','High voltage','bolt','Dangerous electrical voltage is present.','You could get an electric shock.','electric shock|electrical hazard|danger electricity'],
    ['explosion','Risk of explosion','explosion','Materials or conditions could cause an explosion.','A spark could cause an explosion.','explosive|explosion hazard|explosive materials'],
    ['hot','Hot surface','hot','This surface is hot and may burn your skin.','You shouldn’t touch the hot surface.','burn hazard|hot surfaces'],
    ['toxic','Toxic / poison','skull','This substance can cause serious poisoning.','You could become seriously ill after exposure.','toxic|poison|poisonous|toxic substance'],
  ]),
  ...make('Emergency', [
    ['exit','Emergency exit','exit','This shows a route out of the building in an emergency.','You should follow the emergency exit signs.','fire exit|escape route'],
    ['assembly','Assembly point','assembly','Meet here after leaving the building in an emergency.','You should go to the assembly point after evacuation.','meeting point|emergency assembly point'],
    ['aid','First aid','cross','First aid equipment or help is available here.','You should ask a first aider for help after an injury.','first aid point|first aid station'],
    ['eyewash','Eyewash station','eyewash','Emergency equipment for rinsing your eyes is here.','You should use the eyewash station after a harmful splash in your eyes.','eye wash|eye wash station|emergency eyewash'],
  ]),
  ...make('Safety labels', [
    ['dry','Keep container dry','umbrella','Protect the container from water and moisture.','You should keep this container in a dry place.','keep dry'],
    ['closed','Keep tightly closed','container','Close the container firmly after use.','You should keep the lid tightly closed.','keep container closed|keep closed'],
    ['swallowed','Toxic if swallowed','skull','Swallowing this substance can cause serious poisoning.','You shouldn’t swallow this substance.','poisonous if swallowed|toxic when swallowed'],
    ['temperature','Store below the specified temperature','thermometer','Follow the maximum storage temperature on the product label.','You should store this product below the temperature shown on its label.','temperature limit|store below specified temperature'],
    ['ventilation','Use only in well-ventilated areas','ventilation','Use this product only where there is enough fresh air.','You should use this product in a well-ventilated area.','use in well ventilated areas|use only in well ventilated areas|good ventilation|ventilation required'],
    ['eye-label','Wear eye protection','glasses','Protect your eyes when using this product.','You should wear suitable eye protection.','eye protection|wear goggles|wear safety glasses'],
    ['flammable-label','Flammable','flame','This product can catch fire. Keep it away from ignition sources.','You shouldn’t store this product near a flame.','flammable material|fire hazard'],
    ['children','Keep out of reach of children','children','Store this product where children cannot reach it.','You should keep chemicals out of reach of children.','keep away from children'],
  ]),
];
export type Hazard = {id: string; name: string; danger: string; advice: string; consequence: string; hint: string; keywords: string[]; x: number; y: number};
export const hazards: Hazard[] = [
  {id:'forklift',name:'Standing on a forklift',danger:'A person is standing on the forks of a forklift.',advice:'He shouldn’t stand on the forks. He should use suitable access equipment.',consequence:'He could fall and hurt himself.',hint:'Look at how the person is reaching the high shelf.',keywords:['fork','stand','standing'],x:174,y:270},
  {id:'ladder',name:'Unsafe ladder use',danger:'A worker is leaning too far from a ladder.',advice:'She should climb down and move the ladder closer to the work.',consequence:'She could lose her balance and fall.',hint:'Can the worker reach the shelf without leaning?',keywords:['ladder','lean','reach'],x:685,y:225},
  {id:'boxes',name:'Falling boxes',danger:'Boxes are stacked badly and one is falling.',advice:'Workers should stack boxes securely and keep heavy boxes low.',consequence:'A box could fall and hit someone.',hint:'Check the top of the storage shelves.',keywords:['box','stack','fall'],x:456,y:161},
  {id:'lifting',name:'Incorrect lifting',danger:'A worker is bending his back to lift a heavy box.',advice:'He should assess the load and use lifting equipment or ask for help.',consequence:'He could injure his back.',hint:'Look at the worker moving the heavy box.',keywords:['lift','back','heavy','bend'],x:459,y:390},
  {id:'smoke',name:'Smoking near flammable liquids',danger:'A person is smoking beside flammable liquids.',advice:'She shouldn’t smoke near flammable liquids.',consequence:'The liquids could catch fire.',hint:'Look for an ignition source near the drums.',keywords:['smok','cigarette','flammable'],x:832,y:310},
  {id:'spill',name:'Spilled liquid',danger:'There is liquid on the floor.',advice:'Workers should keep people away and report the spill so it can be cleaned safely.',consequence:'Someone could slip and fall.',hint:'Look for a shiny patch on the floor.',keywords:['spill','liquid','wet'],x:289,y:435},
  {id:'goggles',name:'Missing safety goggles',danger:'A person is drilling without eye protection.',advice:'He should wear suitable safety goggles when drilling.',consequence:'A flying particle could injure his eyes.',hint:'Check the eyes of the person at the workbench.',keywords:['goggle','eye','glass','drill'],x:569,y:295},
  {id:'walkway',name:'Blocked walkway',danger:'Boxes are blocking the marked walkway.',advice:'Workers should move the boxes to a safe storage area.',consequence:'Someone could trip or be unable to leave quickly.',hint:'Follow the yellow lines on the floor.',keywords:['block','walkway','path','exit'],x:690,y:461},
  {id:'cart',name:'Overloaded hand cart',danger:'A hand cart is carrying too many boxes.',advice:'The worker should reduce the load and secure the boxes.',consequence:'The cart could tip over and injure someone.',hint:'Which load looks unstable?',keywords:['cart','overload','trolley'],x:125,y:458},
  {id:'tools',name:'Tools on the floor',danger:'Tools have been left on the floor.',advice:'Workers should put the tools away after use.',consequence:'Someone could trip over the tools.',hint:'Look at the floor near the workbench.',keywords:['tool','floor','spanner','hammer'],x:543,y:479},
];
export type GrammarExercise = {id:string; type:'Fill in the blanks'|'Choose the correct word'|'Arrange words'|'Correct the sentence'|'Write safety advice'|'Explain an accident'; prompt:string; answer:string; choices?:string[]; words?:string[]; explanation:string};
export const grammar: GrammarExercise[] = [
  {id:'g1',type:'Fill in the blanks',prompt:'You ___ wear safety boots to protect your feet.',answer:'should',explanation:'Use should to give advice about a safe action.'},
  {id:'g2',type:'Fill in the blanks',prompt:'You ___ smoke near flammable liquids.',answer:'shouldn’t',explanation:'Use shouldn’t to advise someone not to do something dangerous.'},
  {id:'g3',type:'Fill in the blanks',prompt:'Be careful! You ___ slip on the wet floor.',answer:'could',explanation:'Use could for a possible result or accident.'},
  {id:'g4',type:'Choose the correct word',prompt:'That loose cable is a hazard. Someone ___ trip over it.',answer:'could',choices:['could','should','shouldn’t'],explanation:'An accident is possible, so use could.'},
  {id:'g5',type:'Choose the correct word',prompt:'To protect your eyes, you ___ wear safety goggles.',answer:'should',choices:['could','shouldn’t','should'],explanation:'Should gives positive safety advice.'},
  {id:'g6',type:'Choose the correct word',prompt:'You ___ remove the safety guard from a running machine.',answer:'shouldn’t',choices:['should','shouldn’t','could'],explanation:'Shouldn’t gives advice against an unsafe action.'},
  {id:'g7',type:'Arrange words',prompt:'Make a sentence giving safety advice.',answer:'You should wear protective gloves.',words:['gloves.','wear','You','protective','should'],explanation:'Use subject + should + base verb + the rest of the sentence.'},
  {id:'g8',type:'Arrange words',prompt:'Make a sentence about a possible accident.',answer:'The boxes could fall on someone.',words:['someone.','could','The','on','boxes','fall'],explanation:'Use could + base verb to describe a possible accident.'},
  {id:'g9',type:'Correct the sentence',prompt:'He should to wear a mask.',answer:'He should wear a mask.',explanation:'Use the base verb after should. Do not add to.'},
  {id:'g10',type:'Correct the sentence',prompt:'She could falls from the ladder.',answer:'She could fall from the ladder.',explanation:'Use the base verb fall after could, even with he or she.'},
  {id:'g11',type:'Write safety advice',prompt:'A worker is using a noisy machine. Give advice using should.',answer:'The worker should wear ear protection.',explanation:'Use should + base verb. Explain a safe action that fits the situation.'},
  {id:'g12',type:'Explain an accident',prompt:'A worker is standing on the forks of a forklift. What could happen?',answer:'The worker could fall and hurt himself.',explanation:'Use could + base verb to describe a possible accident.'},
  {id:'g13',type:'Write safety advice',prompt:'Someone has left tools in a walkway. Give advice using should.',answer:'They should put the tools away.',explanation:'Your sentence should explain a practical action to make the walkway safe.'},
  {id:'g14',type:'Explain an accident',prompt:'A worker is drilling without safety glasses. What could happen?',answer:'A flying particle could injure the worker’s eyes.',explanation:'Could describes a possible result, not a certain result.'},
  {id:'g15',type:'Fill in the blanks',prompt:'To keep the exit clear, you ___ store boxes in front of it.',answer:'shouldn’t',explanation:'Use shouldn’t for an action that people need to avoid.'},
  {id:'g16',type:'Fill in the blanks',prompt:'A badly stacked box ___ fall and hit a worker.',answer:'could',explanation:'Could explains a possible accident.'},
];
