// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: import('../sim/dex-formats').FormatList = [
	{
		section: "S/V Singles",
	},
	{
		name: "[Gen 9] Random Battle",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		mod: 'gen9',
		team: 'random',
		bestOfDefault: true,
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
	},
	{
		section: "Legacy Formats"
	},
	{
		name: "[Gen 4] PtL Singles",
		mod: 'gen4legacy',
		gameType: 'singles',
		searchShow: true,
		bestOfDefault: true,
		rated: false,
		ruleset: ['Team Preview', 'Species Clause', 'Nickname Clause', 'Item Clause = 1', 'Adjust Level Down = 50', 'Picked Team Size = Auto', 'Cancel Mod'],
		banlist: ['Restricted Legendary'],
	},
	{
		name: "[Gen 4] PtL Doubles",
		mod: 'gen4legacy',
		gameType: 'doubles',
		searchShow: true,
		bestOfDefault: true,
		rated: false,
		ruleset: ['Team Preview', 'Species Clause', 'Nickname Clause', 'Item Clause = 1', 'Adjust Level Down = 50', 'Picked Team Size = Auto', 'Cancel Mod'],
		banlist: ['Restricted Legendary'],
	},
];
