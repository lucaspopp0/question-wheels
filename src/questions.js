const AROUND_THE_WORLD = 'Around the World';
const NATURE_OUTDOORS = 'Nature & Outdoors';
const SHOPPING_SPENDING = 'Shopping & Spending';
const PERSONAL_TASTES = 'Personal Tastes';
const FOOD_DRINK = 'Food & Drink';
const DEEP_REFLECTIVE = 'Deep & Reflective';
const PLACES_ACTIVITIES = 'Places & Activities';
const NOSTALGIA_FUN = 'Nostalgia & Fun';
const CREATIVE_IMAGINATIVE = 'Creative & Imaginative';
const LIGHTHEARTED_FUNNY = 'Lighthearted & Funny';
const RELATIONSHIPS = 'Relationships';
const TECH_DIGITAL = 'Tech & Digital';

const categories = [
  AROUND_THE_WORLD,
  NATURE_OUTDOORS,
  SHOPPING_SPENDING,
  PERSONAL_TASTES,
  FOOD_DRINK,
  DEEP_REFLECTIVE,
  PLACES_ACTIVITIES,
  NOSTALGIA_FUN,
  CREATIVE_IMAGINATIVE,
  LIGHTHEARTED_FUNNY,
  RELATIONSHIPS,
  TECH_DIGITAL
];

const Categories = {};

for (const category of categories) {
  Categories[category] = category
}

export { Categories };

export const Questions = {
  [AROUND_THE_WORLD]: [
    'Countries you want to visit',
    'Foreign words/phrases you know',
    'Global landmarks you recognize',
    'Cities you can name',
    'Global cuisines you enjoy',
    'Traditional costumes you admire'
  ],
  [NATURE_OUTDOORS]: [
    'Hiking trails you\'ve conquered',
    'Plants you can identify',
    'Wildlife encounters',
    'Natural wonders you\'ve seen',
    'Outdoor activities you enjoy',
    'Weather phenomena you\'ve experienced',
    'National parks you\'ve visited',
    'Bodies of water you\'ve swum in',
    'Camping experiences',
    'Nature sounds you find calming'
  ],
  [SHOPPING_SPENDING]: [
    'Stores you frequent',
    'Best bargains you\'ve found',
    'Things you splurge on',
    'Items you research before buying',
    'Shopping hacks you use',
    'Online vs. in-store preferences',
    'Brands you\'re loyal to',
    'Impulse purchases you regret',
    'Gift ideas you keep in mind',
    'Shopping experiences that stand out'
  ],
  [PERSONAL_TASTES]: [
    'Favorite foods/snacks/desserts',
    'Favorite beverages (hot/cold)',
    'Favorite smells',
    'Favorite colors',
    'Favorite animals/flowers/plants',
    'Favorite types of weather',
    'Favorite fashion style',
    'Favorite time of day/season',
    'Favorite music (artists, songs, albums)',
    'Favorite screen entertainment (movies/TV shows)',
    'Favorite books',
    'Favorite video/board/card games',
    'Favorite hobbies',
    'Favorite apps/emojis',
    'Favorite aesthetics (e.g., cottagecore, retro, minimalist)',
    'Favorite things to collect'
  ],
  [FOOD_DRINK]: [
    'Favorite pizza toppings',
    'Favorite fast food chains',
    'Favorite home-cooked meals',
    'Favorite things to cook or bake',
    'Favorite candy/ice cream flavors',
    'Favorite breakfast foods',
    'Favorite guilty pleasure food',
    'Favorite fruits/vegetables',
    'Favorite comfort foods',
    'Favorite weird food combo you love',
    'Favorite beers/cocktails',
    'Favorite meal preps'
  ],
  [DEEP_REFLECTIVE]: [
    'Favorite accomplishments/proud moments',
    'Favorite life lessons',
    'Favorite things about yourself',
    'Favorite compliments you\'ve received',
    'Favorite people in your life (use initials if needed)',
    'Favorite advice you\'ve ever gotten',
    'Favorite dreams or goals',
    'Favorite challenges you\'ve overcome',
    'Favorite decision you\'ve made',
    'Favorite risks you\'ve taken'
  ],
  [PLACES_ACTIVITIES]: [
    'Favorite places to go/eat',
    'Favorite cities/countries',
    'Favorite vacation spots',
    'Favorite places in nature',
    'Favorite things to do on weekends',
    'Favorite indoor/outdoor activities',
    'Favorite things to do with friends/alone',
    'Favorite places to relax',
    'Favorite road trip destinations',
    'Favorite date ideas'
  ],
  [NOSTALGIA_FUN]: [
    'Favorite childhood toy/cartoon',
    'Favorite school memories',
    'Favorite things about your hometown',
    'Favorite year or age of your life so far',
    'Favorite trips with friends',
    'Favorite birthday party themes',
    'Favorite school lunch',
    'Favorite memories with your friends',
    'Favorite Halloween costumes'
  ],
  [CREATIVE_IMAGINATIVE]: [
    'Favorite fictional character',
    'Favorite superpower',
    'Favorite fantasy world to live in',
    'Favorite movie quote',
    'Favorite dream job',
    'Favorite mythical creature',
    'Favorite animal to be reincarnated as',
    'Favorite made-up holiday you\'d celebrate',
    'Favorite outfit you\'d wear forever if you had to',
    'Favorite tattoo idea (real or imaginary)',
    'Favorite movie mashup you wish existed'
  ],
  [LIGHTHEARTED_FUNNY]: [
    'Favorite funny memory',
    'Favorite joke',
    'Favorite meme',
    'Favorite dance move',
    'Favorite weird habit',
    'Favorite TikTok trend',
    'Favorite inside joke',
    'Favorite prank (that you\'ve done or seen)',
    'Favorite emoji to overuse',
    'Favorite thing to say in awkward silence'
  ],
  [RELATIONSHIPS]: [
    'Favorite thing about each friend',
    'Favorite way someone made you feel appreciated',
    'Favorite friendship memory',
    'Favorite way to show love',
    'Favorite qualities in a friend',
    'Favorite "just because" gift you\'ve given or received'
  ],
  [TECH_DIGITAL]: [
    'Favorite video game consoles (e.g., PS2, Switch, PC)',
    'Favorite esports teams or streamers',
    'Favorite video game character',
    'Favorite meme formats (2010s vs. 2020s)',
    'Favorite viral challenges (Ice Bucket, Mannequin)',
    'Favorite early social media platforms (MySpace, Vine)'
  ]
};
