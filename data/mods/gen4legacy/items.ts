export const Items: import('../../../sim/dex-items').ModdedItemDataTable = {
	// modern mental herb
	mentalherb: {
		inherit: false,
		name: "Mental Herb",
		spritenum: 285,
		fling: {
			basePower: 10,
			effect(pokemon) {
				const conditions = ['attract', 'taunt', 'encore', 'torment', 'disable', 'healblock'];
				for (const firstCondition of conditions) {
					if (pokemon.volatiles[firstCondition]) {
						for (const secondCondition of conditions) {
							pokemon.removeVolatile(secondCondition);
							if (firstCondition === 'attract' && secondCondition === 'attract') {
								this.add('-end', pokemon, 'move: Attract', '[from] item: Mental Herb');
							}
						}
						return;
					}
				}
			},
		},
		onUpdate(pokemon) {
			const conditions = ['attract', 'taunt', 'encore', 'torment', 'disable', 'healblock'];
			for (const firstCondition of conditions) {
				if (pokemon.volatiles[firstCondition]) {
					if (!pokemon.useItem()) return;
					for (const secondCondition of conditions) {
						pokemon.removeVolatile(secondCondition);
						if (firstCondition === 'attract' && secondCondition === 'attract') {
							this.add('-end', pokemon, 'move: Attract', '[from] item: Mental Herb');
						}
					}
					return;
				}
			}
		},
		num: 219,
		gen: 3,
	},
	focussash: { // use modern focus sash to match modern sturdy
		inherit:false,
		name: "Focus Sash",
		spritenum: 151,
		fling: {
			basePower: 10,
		},
		onDamagePriority: -40,
		onDamage(damage, target, source, effect) {
			if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === 'Move') {
				if (target.useItem()) {
					return target.hp - 1;
				}
			}
		},
		num: 275,
		gen: 4,
	},

/*
emitted by:
cols = ['type', 70, 85, 100]
for line in berrytable.split('\n'):
    parts = list(line.split('\t'))
    for i,part in enumerate(parts):
        if cols[i] == 'type': continue
        if part == 'NONE' or part == '': continue
        berries = [part]
        if ',' in part:
            berries = [x.strip() for x in part.split(',')]
        for b in berries:
            bname = b.lower().replace(' ', '')
            print(f'\t{bname}: {{')
            print(f'\t\tinherit: true,')
            print(f'\t\tnaturalGift: {{ basePower: {cols[i]} }},')
            print('\t},')
*/
		chilanberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	cheriberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	occaberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	blukberry: {
		inherit: true,
		naturalGift: { basePower: 85 },
	},
	watmelberry: {
		inherit: true,
		naturalGift: { basePower: 100 },
	},
	chestoberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	passhoberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	nanabberry: {
		inherit: true,
		naturalGift: { basePower: 85 },
	},
	durinberry: {
		inherit: true,
		naturalGift: { basePower: 100 },
	},
	pechaberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	wacanberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	wepearberry: {
		inherit: true,
		naturalGift: { basePower: 85 },
	},
	belueberry: {
		inherit: true,
		naturalGift: { basePower: 100 },
	},
	rawstberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	rindoberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	pinapberry: {
		inherit: true,
		naturalGift: { basePower: 85 },
	},
	liechiberry: {
		inherit: true,
		naturalGift: { basePower: 100 },
	},
	aspearberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	yacheberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	pomegberry: {
		inherit: true,
		naturalGift: { basePower: 85 },
	},
	ganlonberry: {
		inherit: true,
		naturalGift: { basePower: 100 },
	},
	leppaberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	chopleberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	kelpsyberry: {
		inherit: true,
		naturalGift: { basePower: 85 },
	},
	salacberry: {
		inherit: true,
		naturalGift: { basePower: 100 },
	},
	oranberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	kebiaberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	qualotberry: {
		inherit: true,
		naturalGift: { basePower: 85 },
	},
	petayaberry: {
		inherit: true,
		naturalGift: { basePower: 100 },
	},
	persimberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	shucaberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	hondewberry: {
		inherit: true,
		naturalGift: { basePower: 85 },
	},
	apicotberry: {
		inherit: true,
		naturalGift: { basePower: 100 },
	},
	lumberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	cobaberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	grepaberry: {
		inherit: true,
		naturalGift: { basePower: 85 },
	},
	lansatberry: {
		inherit: true,
		naturalGift: { basePower: 100 },
	},
	sitrusberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	payapaberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	tamatoberry: {
		inherit: true,
		naturalGift: { basePower: 85 },
	},
	starfberry: {
		inherit: true,
		naturalGift: { basePower: 100 },
	},
	figyberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	tangaberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	cornnberry: {
		inherit: true,
		naturalGift: { basePower: 85 },
	},
	enigmaberry: {
		inherit: true,
		naturalGift: { basePower: 100 },
	},
	wikiberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	chartiberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	magostberry: {
		inherit: true,
		naturalGift: { basePower: 85 },
	},
	micleberry: {
		inherit: true,
		naturalGift: { basePower: 100 },
	},
	magoberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	kasibberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	rabutaberry: {
		inherit: true,
		naturalGift: { basePower: 85 },
	},
	custapberry: {
		inherit: true,
		naturalGift: { basePower: 100 },
	},
	aguavberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	habanberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	nomelberry: {
		inherit: true,
		naturalGift: { basePower: 85 },
	},
	jabocaberry: {
		inherit: true,
		naturalGift: { basePower: 100 },
	},
	iapapaberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	colburberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	spelonberry: {
		inherit: true,
		naturalGift: { basePower: 85 },
	},
	rowapberry: {
		inherit: true,
		naturalGift: { basePower: 100 },
	},
	razzberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	babiriberry: {
		inherit: true,
		naturalGift: { basePower: 70 },
	},
	pamtreberry: {
		inherit: true,
		naturalGift: { basePower: 85 },
	},
}